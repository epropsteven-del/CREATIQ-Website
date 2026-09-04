const hero = document.querySelector(".hero");
const heroEyebrow = hero?.querySelector(".kicker")?.textContent || "MODERN CUSTOMER. MODERN SALES.";

if (hero) {
  hero.innerHTML = `
    <div class="hero-copy">
      <p class="kicker">${heroEyebrow}</p>
      <h1>Lead 进来，<br><em>不代表 Sales 接得住。</em></h1>
      <p class="intro">Modern Sales 把每一次 enquiry，变成有方向的 conversation。</p>
      <div class="actions">
        <button class="button primary" data-revision-scroll="diagnostic">免费 Check 我的 Sales Flow →</button>
        <button class="button ghost" data-revision-demo>先看 90 秒 Demo ↗</button>
      </div>
      <small>30 秒 · 不用先留资料 · 先拿 Diagnosis</small>
    </div>
    <div class="hero-visual flow-story" aria-label="Modern Sales Flow three-stage example">
      <article class="flow-stage">
        <div><b>1</b><h3>接住 <em>Lead</em></h3><p>Ad Lead · Catch</p></div>
        <p class="message customer">多少钱？</p>
      </article>
      <article class="flow-stage">
        <div><b>2</b><h3>看懂问题</h3><p>Understand · Match</p></div>
        <p class="message modern"><span>Sales</span>可以 Boss。先确认一下，你现在最想解决的是 Leads 静掉、Follow Up，还是 Closing？</p>
      </article>
      <article class="flow-stage">
        <div><b>3</b><h3>带去下一步</h3><p>Handle · Follow Up</p></div>
        <p class="message modern"><span>Sales</span>明白。我们先看你的 Flow 哪里开始掉。现在做 30 秒 Check。</p>
      </article>
      <p class="flow-summary">每次 Reply，都要有 <strong>Next Step。</strong></p>
    </div>`;
}

document.querySelector(".context")?.remove();
document.querySelector(".proof")?.remove();

const reframe = document.querySelector(".reframe");
if (reframe) {
  reframe.innerHTML = `
    <p class="kicker">THE REFRAME</p>
    <h2>不是 Customer 越来越难搞。<br>是 Sales 方法还停留在以前。</h2>
    <p class="max-copy">今天的 Customer 一边看你，一边也在看 Competitor。Sales 不能只是回得快，还要带顾客往前走。</p>
    <div class="compare">
      <article class="old-sales"><header><p class="red-label">OLD SALES 旧方法</p><b>靠个人反应</b></header><p>问什么，就回什么</p><p>一问价，马上报价</p><p>顾客不回，只能等</p><p>Follow Up 全靠自己记</p></article>
      <article class="modern-sales"><header><p class="cyan-label">MODERN SALES 新方法</p><b>靠流程推进</b></header><p>先接住，再了解</p><p>先讲 Value，再谈价格</p><p>每次回复，都带下一步</p><p>Follow Up 有记录、有方向</p></article>
    </div>
    <p class="reframe-close">重点不是回得快，是每次都知道下一步。</p>`;
}

const conversation = document.querySelector(".conversation");
if (conversation) {
  conversation.innerHTML = `
    <h2>Customer 不是不 Reply。<br>可能是还没看到理由。</h2>
    <p>同一句「发 quotation 给我」，Sales 怎样回答，决定 conversation 会不会继续。</p>
    <p class="old-callout">旧做法：「可以，已经发了。」然后等。</p>
    <div class="teaching-steps">
      <article><div class="step-number">1</div><h3>Customer 开口</h3><p class="message customer">可以发 quotation 给我吗？</p></article>
      <article><div class="step-number">2</div><h3>先了解重点</h3><p class="message modern">可以 Boss。你最在意 Price、效果，还是交付时间？</p></article>
      <article><div class="step-number">3</div><h3>建立相关 Value</h3><p class="message modern">明白。我会把与你目标最相关的方案标出来，让你比较的不只是价格。</p></article>
      <article><div class="step-number">4</div><h3>约好下一步</h3><p class="message modern">发给你后，我们明天下午一起看 10 分钟，ok？</p></article>
    </div>
    <p class="conversation-close">Modern Sales 不只是回复，<br>而是让对话继续。</p>`;
}

const industries = document.querySelector(".industries");
if (industries) {
  industries.innerHTML = `
    <p class="kicker">WHO THIS IS FOR</p>
    <h2>哪些 Business 最适合？</h2>
    <p class="industry-lead">只要成交前需要 Conversation，就适合。</p>
    <p class="industry-intro">尤其是这 3 类生意：</p>
    <div class="industry-groups">
      <article><b>01</b><div><h3>需要预约</h3><ul><li>Property 房地产</li><li>Beauty &amp; Wellness 美业</li></ul><p>Budget · 看房 · Booking</p></div></article>
      <article><b>02</b><div><h3>需要了解需求</h3><ul><li>Automotive 汽车</li><li>Education 教育</li></ul><p>车型 · 课程 · 需求配对</p></div></article>
      <article><b>03</b><div><h3>需要比较与跟进</h3><ul><li>B2B Services 企业服务</li><li>High-consideration Retail 高考虑型产品</li></ul><p>Quotation · Proposal · Follow Up</p></div></article>
    </div>
    <p class="industry-close">不是行业相同，而是 Sales Flow 相同：<br>先了解，再推进。</p>`;
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
  });
}

document.querySelectorAll("[data-revision-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("creatiq:analytics", { detail: { name: "hero_cta_click" } }));
    scrollToSection(button.dataset.revisionScroll);
  });
});

document.querySelector("[data-revision-demo]")?.addEventListener("click", () => {
  document.dispatchEvent(new CustomEvent("creatiq:analytics", { detail: { name: "demo_started" } }));
  scrollToSection("method");
});
