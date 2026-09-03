import "./main.js";
import "./revise.css";
import { diagnoses } from "./data.js";

const whatsappNumber = "60162282431";
const draft = { intent: "", industry: "", volume: "", problem: "" };
const flow = document.getElementById("leadFlow");

function currentStep() {
  const text = flow.querySelector(".form-progress")?.textContent || "";
  return Number(text.match(/STEP\s+(\d)\s+OF\s+5/)?.[1] || 0);
}
function diagnosisName() {
  try {
    const code = JSON.parse(sessionStorage.getItem("creatiq-diagnostic") || "{}").result;
    return code && diagnoses[code] ? diagnoses[code].name : "";
  } catch {
    return "";
  }
}
function openingMessage(values) {
  const lines = [
    "Hi CREATIQ,",
    "我想安排一个 Modern Sales Flow Review。",
    "",
    "Enquiry details:"
  ];
  if (values.intent) lines.push("Intent: " + values.intent);
  if (values.industry) lines.push("Industry: " + values.industry);
  if (values.volume) lines.push("Daily enquiries: " + values.volume);
  if (values.problem) lines.push("Main problem: " + values.problem);
  if (diagnosisName()) lines.push("Diagnosis: " + diagnosisName());
  if (values.name) lines.push("Name: " + values.name);
  if (values.phone) lines.push("WhatsApp: " + values.phone);
  lines.push("", "请告诉我适合的 Review 时间，谢谢。");
  return lines.join("\n");
}
function whatsappUrl(values) {
  return "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(openingMessage(values));
}
function openWhatsApp(values) {
  window.open(whatsappUrl(values), "_blank", "noopener,noreferrer");
  document.dispatchEvent(new CustomEvent("creatiq:analytics", { detail: { name: "whatsapp_clicked", diagnosis: diagnosisName() || undefined } }));
}
function showSent() {
  flow.innerHTML = '<div class="whatsapp-success" tabindex="-1"><span>✓</span><h3>WhatsApp 已经打开。</h3><p>你的 enquiry details 已经带进 message。请在 WhatsApp 按 Send，我们就能接手。</p><a class="button primary" href="' + whatsappUrl(draft) + '" target="_blank" rel="noreferrer">再打开 WhatsApp →</a></div>';
  flow.querySelector(".whatsapp-success").focus();
}

flow.addEventListener("click", (event) => {
  const option = event.target.closest("[data-form]");
  if (option) {
    const step = currentStep();
    if (step === 1) draft.intent = option.dataset.form;
    if (step === 2) draft.industry = option.dataset.form;
    if (step === 3) draft.volume = option.dataset.form;
  }
  const next = event.target.closest("#formNext");
  if (!next) return;
  const step = currentStep();
  if (step === 4) draft.problem = flow.querySelector("#problem")?.value.trim() || "";
  if (step !== 5) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  const name = flow.querySelector("#name")?.value.trim() || "";
  const phone = flow.querySelector("#phone")?.value.trim() || "";
  const error = flow.querySelector("#leadError");
  if (!name || !/^[+\d][\d ()-]{6,}$/.test(phone)) {
    if (error) error.textContent = "请填写 Name 和有效的 WhatsApp 电话号码。";
    return;
  }
  draft.name = name;
  draft.phone = phone;
  if (!draft.problem) draft.problem = diagnosisName() || "Sales Flow Review";
  openWhatsApp(draft);
  showSent();
}, true);

const floating = document.createElement("a");
floating.className = "whatsapp-float";
floating.href = whatsappUrl({});
floating.target = "_blank";
floating.rel = "noreferrer";
floating.setAttribute("aria-label", "WhatsApp CREATIQ");
floating.innerHTML = '<span aria-hidden="true">◔</span><b>WhatsApp<br><small>Ask CREATIQ</small></b>';
floating.addEventListener("click", () => document.dispatchEvent(new CustomEvent("creatiq:analytics", { detail: { name: "whatsapp_clicked" } })));
document.body.append(floating);
