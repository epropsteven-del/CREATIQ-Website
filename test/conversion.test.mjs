import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEnquiry, enquiryMessage, whatsappUrl, campaignContext, loadCampaign } from '../src/landing/conversion.js';

test('validates the contact form and preserves readable Chinese and English',()=>{
  const result = validateEnquiry({name:'  Boss 陈  ',phone:'+60 12-345 6789',company:'ABC\nSME',problem:'报价后 & Follow Up?',intent:'看 2ndU Demo'});
  assert.equal(result.valid,true);
  assert.equal(result.values.name,'Boss 陈');
  assert.equal(result.values.company,'ABC SME');
  assert.equal(result.values.intent,'看 2ndU Demo');
  assert.equal(validateEnquiry({name:' ',phone:'abc12345'}).valid,false);
  assert.equal(validateEnquiry({name:'陈',phone:'123'}).valid,false);
  assert.equal(validateEnquiry({name:'陈',phone:'1'.repeat(16)}).valid,false);
});

test('WhatsApp URL round-trips punctuation, Unicode and line breaks to the supplied number',()=>{
  const message = enquiryMessage({name:'陈老板',phone:'60123456789',company:'A & B',problem:'贵？ +20% #报价',intent:'看 2ndU Demo'});
  const url = new URL(whatsappUrl(message));
  assert.equal(url.hostname,'wa.me');
  assert.equal(url.pathname,'/60162282431');
  assert.equal(url.searchParams.get('text'),message);
  assert.ok(message.includes('看 2ndU Demo'));
  assert.ok(!enquiryMessage().includes('undefined'));
  assert.ok(!enquiryMessage().includes('公司：'));
  assert.equal(whatsappUrl(message,'not-configured'),null);
  assert.equal(new URL(whatsappUrl(message,'+60 16-228 2431')).pathname,'/60162282431');
});

test('validates all supported ad angles and carries session campaign context',()=>{
  for(const angle of ['speed','price','followup','topsales','leads','ai-human']) assert.equal(campaignContext(`?angle=${angle}`).angle,angle);
  assert.equal(campaignContext('?angle=invalid',{angle:'price'}).angle,undefined);
  assert.deepEqual(campaignContext('?utm_source=facebook',{utm_campaign:'Modern_Sales',angle:'leads'}),{utm_source:'facebook',utm_campaign:'Modern_Sales',angle:'leads'});
  assert.deepEqual(campaignContext('?utm_campaign=%3Cscript%3E'),{});
  assert.equal(campaignContext('?phone=60123456789&name=Boss').phone,undefined);
});

test('corrupt or blocked session storage cannot stop rendering',()=>{
  const corrupt={getItem:()=>'{bad',setItem:()=>{throw new Error('blocked')}};
  assert.deepEqual(loadCampaign({search:'?angle=price'},corrupt),{angle:'price'});
  const blocked={getItem:()=>{throw new Error('blocked')},setItem:()=>{throw new Error('blocked')}};
  assert.deepEqual(loadCampaign({search:''},blocked),{});
});
