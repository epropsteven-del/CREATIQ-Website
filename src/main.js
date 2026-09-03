import "./style.css";
import { causeOptions, diagnoses, getDiagnosis, leakageEstimate, symptomOptions } from "./data.js";

const symptomCopy = {
  ASK_GHOST: ["↗", "问了就静", "Customer 问几句，很快没下文"],
  QUOTE_GHOST: ["RM", "报价后消失", "Price / Quotation 发了，Conversation 就停"],
  SHORT_ANSWERS: ["…", "只回一两个字", "Sales 有问，但 Customer 不想多讲"],
  PRICE_OBJECTION: ["!", "贵、考虑、迟点", "Objection 一来，Sales 不懂怎样继续"],
  MISSED_FOLLOWUP: ["↻", "Follow Up 靠记忆", "忙一下，Timing 就过了"],
  INCONSISTENT_SALES: ["≠", "每个 Sales 不同讲法", "Top Sales 会卖，新人靠自己猜"]
};
const causeCopy = {
  SLOW_RESPONSE: "Response 太慢",
  EARLY_PRICE: "Price 出现太早，Value 还没建立",
  NO_GUIDANCE: "Sales 有 Answer，但没有 Guide",
  WEAK_OBJECTION: "Objection Handling 太弱",
  MEMORY_FOLLOWUP: "Follow Up 靠 Staff 自己记",
  LOGIC_NOT_SYSTEMISED: "Top Sales Logic 没有 Systemise"
};
const read = (key, fallback) => { try { return JSON.parse(sessionStorage.getItem(key)) || fallback; } catch { return fallback; } };
const saved = read("creatiq-diagnostic", {});
const state = { step: saved.result ? 3 : 1, symptoms: saved.symptoms || [], causes: saved.causes || [], result: saved.result || "", formStep: 1 };
const params = new URLSearchParams(location.search);
const angleCopy = {
  price: "不是 Price 太高。可能是 Value 太迟出现。",
  followup: "Follow Up 不该继续靠记忆。",
  speed: "Lead 热的时候，别让他等。",
  topsales: "Top Sales 会卖，不等于团队会卖。",
  leads: "不是 Leads 不够。",
  "ai-human": "AI Support Sales. Not Replace Good Sales."
};
const heroEyebrow = angleCopy[params.get("angle")] || "MODERN CUSTOMER. MODERN SALES.";
const app = document.getElementById("app");
app.innerHTML = [
  '<header class="site-header"><a class="brand" href="#"><b>CREATIQ</b><small>AI SOLUTIONS</small></a><nav><a href="#method">How it works</a><a href="#diagnostic">Sales Check</a><a href="#faq">FAQ</a></nav><button class="button primary" data-scroll="diagnostic">免费 Check 我的 Sales Flow →</button></header>',
  '<main id="main">',
  '<section class="hero"><div class="hero-copy"><p class="kicker">', heroEyebrow, '</p><h1>不是 Leads 不够。<br><em>很多 Leads，是进来以后漏掉。</em></h1><p class="intro">Customer 不会坐在那里等你。他在继续看别人。用 30 秒看看，你的 Sales Flow 最可能漏在哪里。</p><div class="actions"><button class="button primary" data-scroll="diagnostic">免费 Check 我的 Sales Flow →</button><button class="button ghost" data-demo>先看 90 秒 Demo ↗</button></div><small>30 秒 · 不用先留资料 · 先拿 Diagnosis</small></div>',
  '<div class="hero-visual"><div class="flow"><span>01 AD LEAD</span><span>02 CATCH</span><span>03 UNDERSTAND</span><span>04 MATCH</span><span>05 HANDLE</span><span>06 FOLLOW</span><span>07 HUMAN</span></div><div class="chat"><b><i></i> Sales conversation <small>示范对话</small></b><p class="customer">多少钱？</p><p class="old">RMXXX.</p><p class="customer">Ok tq.</p><hr><p class="label">MODERN SALES</p><p class="modern">可以 Boss，方案从 RM___ 起。先确认一下：你最头痛的是 Follow Up、Leads 静掉，还是 Sales 不会 Close？</p></div></div></section>',
  '<section class="context"><span>01 刷到你</span><i>→</i><span>02 同时看到 Competitor</span><i>→</i><span>03 Compare Price / Review</span><i>→</i><span>04 没看到 Relevant Value 就走</span></section>',
  '<section id="diagnostic" class="section diagnostic" tabindex="-1"></section>',
  '<section class="section calculator"><div><p class="kicker">SALES LEAK CALCULATOR</p><h2>广告费已经花了。<br>有多少 Conversation 停在半路？</h2><p>这不是 Revenue Prediction。只是帮你看见，每个月有多少机会没有完整地被处理。</p></div><div class="panel"><label>Monthly enquiries<input id="enquiries" type="number" min="0" value="100"></label><label>Approximately how many go quiet?<div><input id="quiet" type="range" min="0" max="100" value="40"><output id="quietOut">40%</output></div></label><div id="calcResult" class="calc-result"></div><small>This is a Sales Leakage estimate, not a revenue forecast.</small></div></section>',
  '<section class="section reframe"><p class="kicker">THE REFRAME</p><h2>不是 Customer 越来越难搞。<br>是 Sales 方法还停留在以前。</h2><p class="max-copy">今天 Customer 同时看 Facebook、Instagram、Google Review 和 Competitor。Sales 不可以只是 Reply Faster，更要 Understand、Match、Build Value 和 Move Forward faster。</p><div class="compare"><article><p class="red-label">OLD SALES</p><h3>People-dependent</h3><p>Customer 问什么 → Reply 什么</p><p>Customer 问 Price → 给 Price</p><p>Customer 不 Reply → 等</p><p>Follow Up → Staff 自己记</p></article><article><p class="cyan-label">MODERN SALES</p><h3>System-driven</h3><p>Catch → Understand</p><p>Match relevant value</p><p>Handle → Move forward</p><p>Follow with context</p></article></div></section>',
  '<section id="method" class="section method"><p class="kicker">CREATIQ MODERN SALES FLOW™</p><h2>不是让 AI 讲话。<br>是让好的 Sales Logic，每次都执行出来。</h2><ol><li><b>01</b><h3>Catch</h3><p>Lead 最热的时候，先接住。</p></li><li><b>02</b><h3>Understand</h3><p>知道他是谁、要什么、担心什么。</p></li><li><b>03</b><h3>Match</h3><p>只讲 Relevant Value。</p></li><li><b>04</b><h3>Handle</h3><p>Objection 不是 Conversation End。</p></li><li><b>05</b><h3>Move</h3><p>每轮都有清楚的 Next Step。</p></li><li><b>06</b><h3>Follow</h3><p>没 Reply 不等于没兴趣。</p></li><li><b>07</b><h3>Human</h3><p>复杂 Case 交给人判断。</p></li></ol></section>',
  '<section class="section product"><div><p class="kicker">POWERED BY 2ndU</p><h2>把 Top Sales Logic，变成每天能执行的 AI Sales System。</h2><p>2ndU 不是 FAQ Bot / Auto Reply Bot。它协助重复、可 Systemise 的 Sales 工作；高价值和复杂 Conversation，仍然交回 Human。</p></div><div class="product-window"><small>2ndU · sales system preview</small><p><b>Lead intent</b><span>Follow Up timing</span></p><p><b>Recommended move</b><span>Clarify concern</span></p><p><b>Human alert</b><span class="success">Ready to handover</span></p></div></section>',
  '<section id="featureMatch" class="feature-match"></section>',
  '<section class="section conversation"><p class="kicker">NOT JUST A FASTER REPLY</p><h2>直接看 Conversation 差在哪里。</h2><p>示范对话，不是客户案例。</p><div class="chat-compare"><article><b>BEFORE</b><p class="customer">多少钱？</p><p class="old">RMXXX.</p><p class="customer">Ok tq.</p><strong>Conversation ends.</strong></article><article><b>MODERN SALES</b><p class="customer">多少钱？</p><p class="modern">可以 Boss，方案从 RM___ 起。不过先确认一下：你现在最想解决 Leads 静掉、Follow Up，还是 Closing？</p><p class="customer">Follow Up。</p><strong>Every reply has a next step.</strong></article></div></section>',
  '<section class="section industries"><p class="kicker">WHO THIS IS FOR</p><h2>卖的是 Conversation 的 Business，最容易看到 Value。</h2><div class="industry-grid"><article><b>01</b><h3>Property</h3><p>Need, Budget, Appointment</p></article><article><b>02</b><h3>Automotive</h3><p>Model, Trade-in, Test drive</p></article><article><b>03</b><h3>Education</h3><p>Course matching, Parents enquiry</p></article><article><b>04</b><h3>B2B Services</h3><p>Quotation, Consultation, Proposal</p></article><article><b>05</b><h3>Beauty & Wellness</h3><p>Treatment matching, Booking</p></article><article><b>06</b><h3>High-consideration retail</h3><p>Compare, consideration, follow up</p></article></div></section>',
  '<section class="section honest"><div><p class="kicker">HONEST FIT</p><h2>也不是每间公司现在都需要 AI。</h2></div><div><p>如果你一天只有很少简单 FAQ、还没有 Leads、Product / Price / Process 完全没整理，或每一个 Customer 从第一句话都必须专业人士处理，我们会建议：先不要做。</p><b>Automation should not automate a broken process.</b></div></section>',
  '<section class="section proof"><p class="kicker">PROOF, WHEN AVAILABLE</p><h2>Real businesses. Real conversations.</h2><p>真实 client logos、case results、video testimonial 和已获授权、匿名化的 screenshots 会放在这里。当前是内容预留位，避免虚构 proof。</p><div><span>CLIENT LOGO</span><span>CASE STUDY</span><span>AUTHORISED SCREENSHOT</span></div></section>',
  '<section id="review" class="section review"><div><p class="kicker">10-15 MIN, NO HARD SELL</p><h2>先不要买。<br>给我们 10-15 分钟，看你的真实 Sales Flow。</h2><p>我们会看 Leads 从哪里进来、第一轮怎么 Reply、哪里最常静掉、Price 几时出现、Objection 怎样 Handle，以及哪些工作适合 AI、哪些一定要 Human。</p><b>适合 2ndU，我们才继续。现在不适合，也直接告诉你。</b></div><div id="leadFlow" class="lead-flow"></div></section>',
  '<section id="faq" class="section faq"><p class="kicker">FAQ</p><h2>先把最常见的问题讲清楚。</h2><div class="faqs"><details><summary>这是普通 Chatbot 吗？ <span>+</span></summary><p>不是。2ndU 的设计重点是 Understand → Guide → Follow → Move Forward。</p></details><details><summary>会不会全部由 AI Reply？ <span>+</span></summary><p>不会。我们推荐 AI + Human Sales：重复工作交给 AI，关系、判断和 Closing 留给人。</p></details><details><summary>AI 会不会乱回答 Price / Product？ <span>+</span></summary><p>Business 控制核准的 Knowledge、Pricing、FAQ、Material 和 Sales Rules。</p></details><details><summary>我公司很小，适合吗？ <span>+</span></summary><p>看 Enquiry Flow，不单看公司 Size。先做 Review，适合才谈 Setup。</p></details><details><summary>一定要换掉现在 Sales Team 吗？ <span>+</span></summary><p>不是。AI Support Sales，不是 Replace Good Sales。</p></details></div></section>',
  '<section class="final"><p class="kicker">MODERN CUSTOMER. MODERN SALES.</p><h2>Customer 不会坐在那里等你。<br>他在继续看别人。</h2><p>不要第一时间问「我要不要 AI？」先问：「我的 Sales，到底漏在哪里？」</p><button class="button primary" data-scroll="diagnostic">免费 Check 我的 Sales Flow →</button></section>',
  '</main><aside id="sticky" class="sticky"></aside>'
].join("");

const event = (name, data = {}) => document.dispatchEvent(new CustomEvent("creatiq:analytics", { detail: { name, ...data } }));
const scroll = (id) => document.getElementById(id).scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
document.querySelectorAll("[data-scroll]").forEach((button) => button.addEventListener("click", () => { event(button.dataset.scroll === "diagnostic" ? "hero_cta_click" : "booking_clicked"); scroll(button.dataset.scroll); }));
document.querySelector("[data-demo]").addEventListener("click", () => { event("demo_started"); scroll("method"); });
document.querySelectorAll(".faqs details").forEach((item) => item.addEventListener("toggle", () => { if (item.open) event("faq_opened"); }));

function save() { try { sessionStorage.setItem("creatiq-diagnostic", JSON.stringify({ symptoms: state.symptoms, causes: state.causes, result: state.result })); } catch {} }
function options(items, type, copy) {
  return items.map((item) => {
    const selected = state[type].includes(item.id);
    const text = copy[item.id];
    const icon = Array.isArray(text) ? '<i>' + text[0] + '</i>' : "";
    const title = Array.isArray(text) ? text[1] : text;
    const detail = Array.isArray(text) ? '<small>' + text[2] + '</small>' : "";
    return '<button class="choice ' + (selected ? "selected" : "") + '" type="button" data-type="' + type + '" data-id="' + item.id + '" aria-pressed="' + selected + '">' + icon + '<span><b>' + title + '</b>' + detail + '</span><em>' + (selected ? "✓" : "") + '</em></button>';
  }).join("");
}
function renderDiagnostic() {
  const node = document.getElementById("diagnostic");
  if (state.step === 1) {
    node.innerHTML = '<p class="kicker">30-SECOND SALES FLOW CHECK</p><div class="step-heading"><div><h2>你不一定缺 Leads。<br>先看看 Conversation 漏在哪里。</h2><p>不用填资料。先选最常发生的情况。</p></div><b>STEP 01 <span>/ 02</span></b></div><p class="note">最多选 2 个最常发生的情况。已选 ' + state.symptoms.length + '/2</p><div class="choices">' + options(symptomOptions, "symptoms", symptomCopy) + '</div><p id="choiceStatus" class="error" aria-live="polite"></p><div class="next"><span></span><button class="button primary" id="nextCause" ' + (!state.symptoms.length ? "disabled" : "") + '>NEXT →</button></div>';
  } else if (state.step === 2) {
    node.innerHTML = '<p class="kicker">30-SECOND SALES FLOW CHECK</p><div class="step-heading"><div><h2>表面是 Customer 没 Reply。<br>背后通常是 Sales Process 有洞。</h2><p>再选最多 2 个，最接近的原因。</p></div><b>STEP 02 <span>/ 02</span></b></div><p class="note">已选 ' + state.causes.length + '/2</p><div class="choices causes">' + options(causeOptions, "causes", causeCopy) + '</div><p id="choiceStatus" class="error" aria-live="polite"></p><div class="next"><button class="text" id="backSymptom">← BACK</button><button class="button primary" id="showResult" ' + (!state.causes.length ? "disabled" : "") + '>看看我的 Sales Diagnosis →</button></div>';
  } else {
    const result = diagnoses[state.result];
    node.innerHTML = '<article class="result" tabindex="-1"><div><span>YOUR MAIN SALES LEAK</span><small>' + state.result.replace("_", " ") + '</small></div><h2>' + result.chinese + '</h2><p class="result-lead">' + result.looksLike + '</p><div class="result-points"><p><b>WHY IT HAPPENS</b>' + result.why + '</p><p><b>WHAT IT RISKS</b>' + result.risk + '</p></div><p class="recommend"><b>MODERN SALES MOVE</b><strong>' + result.recommendation + '</strong></p><div class="actions"><button class="button primary" data-scroll="review">用我的真实 Case 做一次 Review →</button><button class="text" id="restart">重新测试</button></div></article>';
    node.querySelector("[data-scroll]").addEventListener("click", () => scroll("review"));
    node.querySelector("#restart").addEventListener("click", () => { state.step = 1; state.symptoms = []; state.causes = []; state.result = ""; save(); renderDiagnostic(); renderMatch(); renderSticky(); });
    setTimeout(() => node.querySelector(".result").focus(), 1);
  }
  node.querySelectorAll("[data-id]").forEach((button) => button.addEventListener("click", () => {
    const values = state[button.dataset.type];
    const index = values.indexOf(button.dataset.id);
    if (index > -1) values.splice(index, 1);
    else if (values.length < 2) values.push(button.dataset.id);
    else { document.getElementById("choiceStatus").textContent = "最多只能选 2 个。请先取消一个选项。"; return; }
    renderDiagnostic();
  }));
  node.querySelector("#nextCause")?.addEventListener("click", () => { state.step = 2; event("diagnostic_q1_completed"); renderDiagnostic(); });
  node.querySelector("#backSymptom")?.addEventListener("click", () => { state.step = 1; renderDiagnostic(); });
  node.querySelector("#showResult")?.addEventListener("click", () => { state.result = getDiagnosis(state.symptoms, state.causes).code; state.step = 3; save(); event("diagnostic_completed", { diagnosis: state.result }); event("diagnostic_result_viewed", { diagnosis: state.result }); renderDiagnostic(); renderMatch(); renderSticky(); });
}
function renderMatch() {
  const node = document.getElementById("featureMatch");
  if (!state.result) { node.innerHTML = '<div><p class="kicker">RELEVANT, NOT GENERIC</p><h2>先做 Check。再看适合你的 Flow。</h2><p>完成 Diagnostic 后，这里只显示与你主要问题有关的 2ndU capabilities。</p></div>'; return; }
  const result = diagnoses[state.result];
  node.innerHTML = '<div><p class="kicker">YOUR BEST MATCH</p><h2>不需要 Show 20 个 Feature。</h2><p>针对你的 ' + result.name + '，这几个 capabilities 最 Relevant。</p></div><div class="features">' + result.features.map((feature, index) => '<span><b>0' + (index + 1) + '</b>' + feature + '</span>').join("") + '</div>';
}
function calculator() {
  const count = document.getElementById("enquiries").value;
  const percent = document.getElementById("quiet").value;
  document.getElementById("quietOut").value = percent + "%";
  document.getElementById("quietOut").textContent = percent + "%";
  document.getElementById("calcResult").innerHTML = '<b>' + Number(count || 0).toLocaleString() + ' enquiries × ' + percent + '%</b><i>=</i><strong>' + leakageEstimate(count, percent).toLocaleString() + ' conversations stop each month</strong>';
  event("calculator_used");
}
document.getElementById("enquiries").addEventListener("input", calculator);
document.getElementById("quiet").addEventListener("input", calculator);
function renderLead() {
  const node = document.getElementById("leadFlow");
  const labels = ["你比较想先做哪一个？", "你是什么行业？", "大概一天有多少 Enquiries？", "最想先解决哪个问题？", "怎样联络你？"];
  const choices = [
    ["Sales Flow Review", "Watch 2ndU Demo", "Ask through WhatsApp"],
    ["Property", "Automotive", "Insurance", "Education", "Beauty", "Retail", "B2B Services", "Agency", "Other"],
    ["1-10/day", "11-30/day", "31-100/day", "100+/day", "Not sure"]
  ];
  let content = '<p class="form-progress">STEP ' + state.formStep + ' OF 5</p><h3>' + labels[state.formStep - 1] + '</h3>';
  if (state.formStep <= 3) content += '<div class="form-options">' + choices[state.formStep - 1].map((item) => '<button type="button" data-form="' + item + '">' + item + '</button>').join("") + '</div>';
  if (state.formStep === 4) content += '<label>Main problem<textarea id="problem">' + (state.result ? diagnoses[state.result].chinese : "") + '</textarea></label>';
  if (state.formStep === 5) content += '<div class="contact"><label>Name *<input id="name" autocomplete="name"></label><label>WhatsApp *<input id="phone" inputmode="tel" placeholder="+60..." autocomplete="tel"></label><label>Company<input></label><label>Email<input inputmode="email"></label></div><small>你的资料只用于这次 enquiry / appointment，不会公开。</small><p id="leadError" class="error"></p>';
  content += '<div class="next">' + (state.formStep > 1 ? '<button class="text" id="formBack">← BACK</button>' : '<span></span>') + '<button class="button primary" id="formNext">' + (state.formStep === 5 ? "帮我安排 Sales Flow Review →" : "NEXT →") + '</button></div>';
  node.innerHTML = content;
  node.querySelectorAll("[data-form]").forEach((button) => button.addEventListener("click", () => { state.formValue = button.dataset.form; node.querySelectorAll("[data-form]").forEach((x) => x.classList.toggle("selected", x === button)); }));
  node.querySelector("#formBack")?.addEventListener("click", () => { state.formStep -= 1; renderLead(); });
  node.querySelector("#formNext").addEventListener("click", () => {
    if (state.formStep < 5 && state.formStep !== 4 && !state.formValue) return;
    if (state.formStep === 5) { const name = node.querySelector("#name").value.trim(); const phone = node.querySelector("#phone").value.trim(); if (!name || !/^[+\\d][\\d ()-]{6,}$/.test(phone)) { node.querySelector("#leadError").textContent = "请填写 Name 和有效的 WhatsApp 电话号码。"; return; } node.querySelector("#leadError").textContent = "Review submission is not configured yet. 请在 server-side endpoint 配置后提交。"; event("lead_form_error"); return; }
    state.formStep += 1; state.formValue = ""; renderLead();
  });
}
function renderSticky() {
  const node = document.getElementById("sticky");
  node.innerHTML = state.result ? '<span>找到你的 Sales Leak 了</span><button data-go="review">BOOK REVIEW →</button>' : '<span>Sales 漏在哪里？</span><button data-go="diagnostic">FREE SALES CHECK →</button>';
  node.querySelector("button").addEventListener("click", () => scroll(node.querySelector("button").dataset.go));
}
renderDiagnostic(); renderMatch(); renderLead(); renderSticky(); calculator();
