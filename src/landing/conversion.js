export const DEFAULT_WHATSAPP_NUMBER = '60162282431';
export const INTENTS = ['免费 Sales Flow Review', '看 2ndU Demo', '免费咨询'];
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
const ANGLES = ['speed', 'price', 'followup', 'topsales', 'leads', 'ai-human'];

export function cleanText(value, max = 800) {
  return String(value ?? '').normalize('NFKC').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}

export function validateEnquiry(input) {
  const values = {
    name: cleanText(input.name, 80), phone: cleanText(input.phone, 32),
    company: cleanText(input.company, 120), problem: cleanText(input.problem, 800),
    intent: INTENTS.includes(input.intent) ? input.intent : INTENTS[0],
  };
  const errors = {};
  if (!values.name) errors.name = '请填写你的称呼。';
  if (!/^\+?[\d\s()-]+$/.test(values.phone) || !/^\d{8,15}$/.test(values.phone.replace(/\D/g, ''))) {
    errors.phone = '请填写有效的 WhatsApp 号码，包括国家区号，例如 +60 12 345 6789。';
  }
  return { values, errors, valid: Object.keys(errors).length === 0 };
}

export function enquiryMessage(input = {}) {
  const intent = INTENTS.includes(input.intent) ? input.intent : INTENTS[0];
  return ['Hi CREATIQ，', `我想${intent}，了解如何改善公司的 Sales Flow。`, '',
    input.name ? `称呼：${cleanText(input.name, 80)}` : '',
    input.phone ? `WhatsApp：${cleanText(input.phone, 32)}` : '',
    input.company ? `公司：${cleanText(input.company, 120)}` : '',
    input.problem ? `目前的情况：${cleanText(input.problem)}` : '',
    '', '想先了解适合我们业务的做法，再讨论下一步。',
  ].filter((line, index, lines) => line || (index > 0 && lines[index - 1])).join('\n');
}

export function whatsappUrl(message, number = DEFAULT_WHATSAPP_NUMBER) {
  const digits = String(number).replace(/[+\s()-]/g, '');
  if (!/^\d{8,15}$/.test(digits)) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function campaignContext(search, previous = {}) {
  const params = new URLSearchParams(search);
  const result = {};
  for (const key of UTM_KEYS) {
    const value = cleanText(params.get(key) ?? previous[key] ?? '', 100);
    if (value && /^[\p{L}\p{N}_. -]+$/u.test(value)) result[key] = value;
  }
  const angle = params.has('angle') ? params.get('angle') : previous.angle;
  if (ANGLES.includes(angle)) result.angle = angle;
  return result;
}

export function loadCampaign(location, storage) {
  let previous = {};
  try { previous = JSON.parse(storage?.getItem('creatiq-campaign') || '{}') || {}; } catch { /* Storage is optional. */ }
  const context = campaignContext(location.search, previous);
  try { storage?.setItem('creatiq-campaign', JSON.stringify(context)); } catch { /* No personal data is persisted. */ }
  return context;
}

// Local no-op-safe adapter; no remote analytics provider is installed.
// Campaign/angle context only. Form values and message text never enter analytics.
export function track(name, context = {}, detail = {}) {
  const data = { name };
  if (ANGLES.includes(context.angle)) data.angle = context.angle;
  if (context.utm_campaign) data.utm_campaign = context.utm_campaign;
  if (['hero', 'header', 'floating', 'review', 'form', 'demo'].includes(detail.source)) data.source = detail.source;
  if (Number.isInteger(detail.faq) && detail.faq >= 0 && detail.faq < 6) data.faq = detail.faq;
  document.dispatchEvent(new CustomEvent('creatiq:analytics', { detail: data }));
}
