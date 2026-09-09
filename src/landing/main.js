import './style.css';
import { angles } from './content.js';
import { header, hero, painSection, methodSection, solutionSection, industrySection, reviewSection, faqSection, footer } from './sections.js';
import { DEFAULT_WHATSAPP_NUMBER, INTENTS, enquiryMessage, whatsappUrl, validateEnquiry, loadCampaign, track } from './conversion.js';

document.querySelector('#app').innerHTML = header() + '<main id="main" tabindex="-1">' + [hero, painSection, methodSection, solutionSection, industrySection, reviewSection, faqSection].map(section=>section()).join('') + '</main>' + footer();

let storage;
try { storage = window.sessionStorage; } catch { /* Private browsing can block storage. */ }
const context = loadCampaign(window.location, storage);
if (context.angle) document.querySelector('#angle-copy').textContent = angles[context.angle];
const number = import.meta.env.VITE_WHATSAPP_NUMBER?.trim() || DEFAULT_WHATSAPP_NUMBER;
document.querySelectorAll('[data-wa]').forEach(link=> {
  const href = whatsappUrl(enquiryMessage({ intent: link.dataset.intent }), number);
  link.href = href || '#review';
  if (!href) { link.removeAttribute('target'); link.textContent = '留下你的咨询内容'; }
  link.addEventListener('click', () => {
    if (link.dataset.wa === 'hero') track('hero_cta_click', context, {source:'hero'});
    if (href) track('whatsapp_clicked', context, { source: link.dataset.wa });
  });
});
document.querySelector('[data-demo]').addEventListener('click',()=>{
  document.querySelector('#intent').value = INTENTS[1];
  track('demo_requested', context, {source:'demo'});
});
document.querySelectorAll('[data-faq]').forEach(item=>item.addEventListener('toggle',()=>{
  if (item.open) track('faq_opened', context, {faq:Number(item.dataset.faq)});
}));

const form = document.querySelector('#enquiry-form');
const ready = document.querySelector('#message-ready');
const status = document.querySelector('#form-status');
let started = false;
form.addEventListener('focusin',()=>{
  if (!started) { track('lead_form_started', context); started = true; }
});
form.addEventListener('input',event=>{
  const field = event.target;
  if (field.hasAttribute('aria-invalid')) {
    field.removeAttribute('aria-invalid');
    const error = document.getElementById(`${field.name}-error`);
    if (error) error.textContent = '';
  }
});
form.addEventListener('submit',event=>{
  event.preventDefault();
  const result = validateEnquiry(Object.fromEntries(new FormData(form)));
  for (const key of ['name', 'phone']) {
    document.getElementById(`${key}-error`).textContent = result.errors[key] || '';
    document.getElementById(key).setAttribute('aria-invalid', String(Boolean(result.errors[key])));
  }
  if (!result.valid) {
    status.textContent = '请先检查标示的资料，再准备信息。';
    document.getElementById(Object.keys(result.errors)[0]).focus();
    track('lead_form_error', context);
    return;
  }
  const message = enquiryMessage(result.values);
  const url = whatsappUrl(message, number);
  if (!url) {
    status.textContent = 'WhatsApp 链接暂时未能使用。请直接联系 +60 16-228 2431；你的资料仍留在表格中。';
    track('lead_form_error', context);
    return;
  }
  document.querySelector('#message-preview').textContent = message;
  document.querySelector('#send-whatsapp').href = url;
  status.textContent = '';
  form.hidden = true;
  ready.hidden = false;
  document.querySelector('#ready-heading').focus({preventScroll:true});
  document.querySelector('.enquiry-card').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  track('lead_form_ready', context);
});
document.querySelector('#send-whatsapp').addEventListener('click',()=>track('whatsapp_clicked',context,{source:'form'}));
document.querySelector('#edit-message').addEventListener('click',()=>{
  ready.hidden = true;
  form.hidden = false;
  document.querySelector('#problem').focus({preventScroll:true});
});

// Avoid floating CTA overlap while the visitor uses the form or its message preview.
const floating = document.querySelector('.floating-contact');
if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries=>{
    floating.hidden = entries[0].isIntersecting;
  },{threshold:0.05}).observe(document.querySelector('.enquiry-card'));
}
