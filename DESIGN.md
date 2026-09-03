# CREATIQ MODERN SALES FLOW™ - Design and Content System

## 1. Design objective

Create a premium, conversion-focused, mobile-first B2B experience that lets a business owner recognise a Sales Flow problem, receive a useful diagnosis, understand a modern sales method, and choose a low-risk next step.

The page should feel like a live demonstration of CREATIQ's thinking:

- it notices the visitor's context
- it asks only relevant questions
- it returns a specific answer
- it shows value before asking for details
- it always offers a clear next step

The page is successful when a qualified visitor thinks:

> 原来不一定是 Leads 不好。可能是我们的 Sales Flow 在漏。CREATIQ 可以先帮我看清楚。

## 2. Positioning hierarchy

### Hero of the story

The Hero is the new sales method, not AI and not 2ndU.

### Brand role

CREATIQ is the architect and advisor that diagnoses and modernises Sales Flow.

### Product role

2ndU is the mechanism that consistently executes the method across lead response, discovery, value matching, objection handling, follow-up, appointment guidance, and human handover.

### Core belief shift

`不是 Customer 越来越难搞，是很多公司的 Sales 方法还停留在以前。`

### Primary message

`Modern Customer. Modern Sales.`

### Primary offer

`免费 Check 我的 Sales Flow`

The first version does not sell a package or price. It sells recognition of the problem and a 10-15 minute diagnostic review.

## 3. Audience

Primary audience:

- Malaysian SME founders and owners
- sales and marketing decision-makers
- businesses receiving enquiries from Facebook, Instagram, websites, WhatsApp, or campaigns
- teams with medium-to-high-consideration products/services
- businesses where the conversation must discover needs, build value, handle objections, or arrange a next step

Strong-fit industries:

- Property / Real Estate
- Automotive
- Insurance / Financial Services
- Education
- Beauty / Wellness
- B2B Services
- Agencies
- High-consideration retail/products

The visual tone should respect business owners' time. They should understand the point within 3-5 seconds and receive value before being asked to surrender contact details.

## 4. Experience principles

### 4.1 Fast relevance

- Lead with a recognisable business problem, not a product explanation.
- Use one strong idea per screen area.
- Keep supporting copy short and concrete.
- Place the first CTA early.

### 4.2 Micro commitment before lead capture

- Starting the diagnostic requires no name, phone, or email.
- Questions must feel easy and useful, not like a qualification form.
- Show progress and selection limits clearly.

### 4.3 Personal relevance

- Use answer-driven results and feature matching.
- Do not display every 2ndU capability to every visitor.
- Later CTAs and WhatsApp messages should carry forward the diagnosis.

### 4.4 Visual demonstration

- Show the contrast between a dead-end answer and a guided conversation.
- Visualise the Sales Flow as a working system.
- Use real interfaces, diagrams, numbers, and proof where available.
- Avoid robot illustrations and generic AI stock imagery.

### 4.5 Consultative trust

- Say who the system is not for.
- Recommend a review before a purchase.
- Make human handover visible.
- Avoid fake urgency, hype, and unsupported performance claims.

## 5. Visual direction

### Desired character

- premium B2B
- modern AI and data, but human-centred
- minimalist and elegant
- focused, confident, and high-trust
- cinematic in contrast, restrained in effects

### Avoid

- cyberpunk/neon overload
- crypto/gaming aesthetics
- cartoon chatbots or humanoid robots
- generic gradient SaaS templates
- glassmorphism on every element
- dozens of identical rounded cards
- huge glowing orbs that compete with the message
- excessive rounded pills
- decorative animation with no conversion purpose

## 6. Colour system

Use semantic CSS variables and map them to the existing design-token system where one exists.

```css
:root {
  --bg-primary: #07111f;
  --bg-secondary: #0b1728;
  --bg-light: #f4f7fa;
  --surface: #0f2034;
  --surface-elevated: #14283f;
  --surface-light: #ffffff;

  --text-primary: #f4f8fc;
  --text-secondary: #afc0d4;
  --text-on-light: #102035;
  --text-muted-on-light: #5a6a7e;

  --border-subtle: rgba(148, 184, 214, 0.18);
  --border-strong: rgba(148, 184, 214, 0.34);

  --accent-ai: #28d7e5;
  --accent-ai-strong: #00b8cc;
  --accent-cta: #ff8a1f;
  --accent-cta-hover: #ff9f43;
  --accent-cta-text: #07111f;

  --success: #34d399;
  --warning: #f6c453;
  --danger: #fb7185;
}
```

Guidance:

- Deep navy and near-black establish the core brand environment.
- Cyan indicates AI, data, diagnosis, flow, and active states.
- Orange is reserved for high-priority conversion actions.
- Use light sections strategically for rhythm, proof, forms, or contrast; do not make every section dark.
- Gradients should be subtle and low-opacity. Never reduce text contrast.
- Check final colours against WCAG AA. Adjust the exact implementation if the existing brand palette or contrast test requires it.

## 7. Typography

Prefer existing brand fonts. If none exist, use:

```css
font-family: Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
```

Optional display font: use an existing brand/display face only if Chinese and English combinations remain clean. Do not load a decorative font solely for one heading.

Type behaviour:

- Hero display: fluid 42-72px desktop; 36-48px mobile depending on copy length
- Section heading: fluid 30-48px
- Card/subsection heading: 18-24px
- Body: 16-18px; never below 16px for core mobile copy
- Small label: 12-14px with modest tracking
- Body line height: 1.55-1.7 for mixed Chinese/English
- Display line height: approximately 1.05-1.18
- Use strong weight and spacing for hierarchy; avoid excessive all-caps

Limit paragraph width to roughly 34-42 Chinese characters or 60-72 Latin characters where practical.

## 8. Layout, spacing, and surfaces

- Maximum content width: 1200px, acceptable range 1180-1240px to align with the current system.
- Desktop grid: 12 columns.
- Tablet: 6-8 column behaviour as appropriate.
- Mobile: one clear column from 360px upward.
- Hero desktop: approximately 5/7 or 6/6 copy-to-visual split.
- Use generous section rhythm: about 96-144px desktop and 64-88px mobile, adjusted for content.
- Use a consistent 4/8px spacing scale.
- Core radius scale: 10px controls, 16px cards, 24px major interactive panels. Avoid rounding every container.
- Use 1px low-contrast borders and restrained shadows. Create hierarchy through spacing and tone before shadow.
- Alternate composition and background treatment to prevent a long wall of cards.

## 9. Iconography, imagery, and media

Preferred visual assets:

- HTML/CSS conversation interfaces
- sales-flow diagrams
- diagnostic output and analytics-style visuals
- actual 2ndU product screenshots
- authorised, anonymised WhatsApp screenshots
- real client logos and video testimonials
- restrained abstract lines, nodes, or data paths

Rules:

- Use one coherent icon family already in the codebase.
- Do not use random illustrations from multiple visual styles.
- Do not use a generic robot, chatbot mascot, or floating brain.
- If a proof or product asset is missing, use a labelled placeholder with the correct aspect ratio and replacement note.
- Never present generated mock conversations as real customer proof.
- Videos load below the fold with a poster and deliberate play action.

## 10. Motion and interaction

Motion should clarify state and progression.

- Micro interaction: 160-240ms
- Panel/step transition: 240-420ms
- Hero flow loop: 6-10 seconds, subtle and pausable by reduced-motion preferences
- Preferred easing: standard ease-out curves already used in the project
- Animate opacity and transforms; avoid layout-thrashing properties
- Stop looping animation when off-screen where practical
- Reduced-motion mode must show the same information in a stable state

Good uses:

- Old Sales chat fading into Modern Sales
- active flow node moving through `Catch -> Understand -> Match -> Handle -> Move -> Follow -> Human`
- diagnostic selection confirmation
- step-to-step progress
- result reveal
- sticky CTA text changing after diagnosis

Avoid scroll-jacking, forced horizontal scrolling, typewriter effects on long copy, or animations that delay interaction.

## 11. Page architecture and authoritative content direction

### 11.1 Header

Contents:

- CREATIQ logo
- compact anchor navigation only if it helps orientation
- desktop CTA: `免费 Check 我的 Sales Flow`

Behaviour:

- clean, compact, and optionally sticky after the Hero begins scrolling
- do not fill it with corporate navigation unrelated to the funnel

### 11.2 Hero

Eyebrow:

`MODERN CUSTOMER. MODERN SALES.`

Headline direction:

`不是 Leads 不够。很多 Leads，是进来以后漏掉。`

Support:

`Customer 不会坐在那里等你。他在继续看别人。用 30 秒看看，你的 Sales Flow 最可能漏在哪里。`

Primary CTA:

`免费 Check 我的 Sales Flow`

Secondary CTA:

`先看 90 秒 Demo`

Trust microcopy:

`30 秒 · 不用先留资料 · 先拿 Diagnosis`

Hero visual:

- a premium Sales Flow path with 7 nodes
- a compact WhatsApp-like example panel
- begin with:
  - Customer: `多少钱？`
  - Sales: `RMXXX.`
  - Customer: `Ok tq.`
- transition to a Modern Sales reply that answers, adds context, and asks one relevant next question
- do not use the WhatsApp official logo unless usage is permitted; a neutral conversation UI is acceptable

### 11.3 Attention-context strip

Communicate in a short visual sequence:

`刷到你 -> 同时看到 Competitor -> 比 Price / Review / Package -> 没看到 Relevant Value 就走`

Use minimal copy and a mobile-friendly flow. This section explains why the sales method must change without blaming the customer.

### 11.4 Diagnostic introduction

Headline:

`你不一定缺 Leads。先看看 Conversation 漏在哪里。`

Explain that it is a two-step, 30-second check. Do not ask for personal information.

### 11.5 Diagnostic Step 1 - symptoms

Label: `Step 1 of 2`

Instruction: `最多选 2 个最常发生的情况。`

Options:

| ID | Short title | Short description | Primary diagnosis |
| --- | --- | --- | --- |
| `ASK_GHOST` | 问了就静 | Customer 问几句，很快没下文 | `CONVERSATION_LEAK` |
| `QUOTE_GHOST` | 报价后消失 | Price / Quotation 发了，Conversation 就停 | `VALUE_LEAK` |
| `SHORT_ANSWERS` | 只回一两个字 | Sales 有问，但 Customer 不想多讲 | `CONVERSATION_LEAK` |
| `PRICE_OBJECTION` | 贵、考虑、迟点 | Objection 一来，Sales 不懂怎样继续 | `OBJECTION_LEAK` |
| `MISSED_FOLLOWUP` | Follow Up 靠记忆 | 忙一下，Timing 就过了 | `FOLLOWUP_LEAK` |
| `INCONSISTENT_SALES` | 每个 Sales 不同讲法 | Top Sales 会卖，新人靠自己猜 | `TOP_SALES_DEPENDENCY` |

Use clear icons, title, one-line detail, selected indicator, and accessible maximum-selection feedback.

### 11.6 Diagnostic Step 2 - likely causes

Label: `Step 2 of 2`

Instruction: `再选最多 2 个，你觉得最接近的原因。`

| ID | Label | Primary diagnosis |
| --- | --- | --- |
| `SLOW_RESPONSE` | Response 太慢 | `SPEED_LEAK` |
| `EARLY_PRICE` | Price 出现太早，Value 还没建立 | `VALUE_LEAK` |
| `NO_GUIDANCE` | Sales 有 Answer，但没有 Guide | `CONVERSATION_LEAK` |
| `WEAK_OBJECTION` | Objection Handling 太弱 | `OBJECTION_LEAK` |
| `MEMORY_FOLLOWUP` | Follow Up 靠 Staff 自己记 | `FOLLOWUP_LEAK` |
| `LOGIC_NOT_SYSTEMISED` | Top Sales Logic 没有 Systemise | `TOP_SALES_DEPENDENCY` |

CTA:

`看看我的 Sales Diagnosis ->`

### 11.7 Deterministic diagnosis engine

Do not call this fake AI. Use a transparent deterministic mapping.

Scoring:

1. Each selected Step 1 symptom adds 2 points to its primary diagnosis.
2. Each selected Step 2 cause adds 3 points to its primary diagnosis.
3. If a symptom and cause map to the same diagnosis, add a 2-point synergy bonus once for that diagnosis.
4. Highest score wins.
5. Tie break in this order:
   - the diagnosis tied to the visitor's first selected Step 2 cause
   - then the first selected Step 1 symptom
   - then stable fallback order: `VALUE_LEAK`, `FOLLOWUP_LEAK`, `CONVERSATION_LEAK`, `OBJECTION_LEAK`, `TOP_SALES_DEPENDENCY`, `SPEED_LEAK`

Store selections in order so tie-breaking is deterministic. Add unit tests for the mapping and tie cases.

Every result contains:

1. result label
2. plain-language meaning
3. what it looks like
4. why it happens
5. operational risk/implication
6. recommended Modern Sales change
7. only 3-4 relevant 2ndU capabilities
8. CTA to review the real flow

Result definitions:

#### `VALUE_LEAK` - Value Building Leak

- Looks like: quotation sent, then silence or pure price comparison
- Likely cause: price appears before relevance and context
- Risk: paid enquiries enter the funnel but the business becomes a number on a comparison list
- Recommendation: understand the buying reason, match relevant value, then frame price
- Capabilities: Need Discovery, Value Matching, relevant material sharing, quotation follow-up

#### `FOLLOWUP_LEAK` - Follow Up Leak

- Looks like: interested leads go quiet and are never re-engaged consistently
- Likely cause: follow-up timing and content rely on staff memory
- Risk: intent cools while Sales assumes the lead is not interested
- Recommendation: use context-aware follow-up with a reason to continue
- Capabilities: Smart Follow Up, Conversation Memory, follow-up rules, Human Alert

#### `CONVERSATION_LEAK` - Conversation Guidance Leak

- Looks like: Sales replies accurately, but Customer gives short answers or leaves
- Likely cause: answers do not create an easy next step
- Risk: the chat becomes FAQ support rather than a sales conversation
- Recommendation: answer, acknowledge, then guide with one relevant question or choice
- Capabilities: Relevant Questions, Conversation Logic, Needs Discovery, Next-Step Guidance

#### `OBJECTION_LEAK` - Objection Handling Leak

- Looks like: `贵`, `考虑先`, or `迟点` ends the conversation
- Likely cause: the reply defends, discounts, or gives up before understanding the concern
- Risk: genuine uncertainty is mistaken for rejection
- Recommendation: validate, clarify the real objection, answer with evidence, and agree on a low-friction next step
- Capabilities: Objection Handling, Knowledge Brain, relevant proof/material, Human Handover

#### `TOP_SALES_DEPENDENCY` - Top Sales Dependency

- Looks like: quality changes depending on which staff member replies
- Likely cause: sales logic, FAQs, examples, and escalation rules live in people's heads
- Risk: scaling adds inconsistency and new staff repeat avoidable mistakes
- Recommendation: systemise best-practice logic while preserving human judgement for complex cases
- Capabilities: Clone Sales Logic, Knowledge Brain, Sales Rules, Human Handover

#### `SPEED_LEAK` - Response Speed Leak

- Looks like: the team responds after the visitor has moved to another option
- Likely cause: enquiries arrive outside availability or across fragmented channels
- Risk: relevance expires before a conversation begins
- Recommendation: catch and triage immediately, then hand over high-intent cases with context
- Capabilities: Lead Catch, instant first response, qualification, Human Alert

Result CTA:

`用我的真实 Case 做一次 Sales Flow Review`

Secondary:

`重新测试`

### 11.8 Sales Leak Calculator

Place after the result, not before.

Inputs:

- monthly enquiries
- percentage that go quiet or fail to progress

Output:

`100 enquiries x 40% = 40 conversations stop each month`

Use clear number formatting and sensible bounds. Do not calculate money or conversion uplift.

Required note:

`This is a Sales Leakage estimate, not a revenue forecast.`

### 11.9 Reframe - Old Sales vs Modern Sales

Headline:

`真正的问题可能不是 Customer。是你的 Sales Flow 还停留在以前。`

Visual comparison:

| OLD SALES | MODERN SALES |
| --- | --- |
| Customer 问 -> Sales 答 | Catch -> Understand |
| 一问 Price -> 马上 Quote | Match Value -> Frame Price |
| Customer 不回 -> 等 | Follow with context |
| Customer 说贵 -> Discount / End | Validate -> Clarify -> Handle |
| Follow Up -> Staff 记得才做 | System + timing + Human |

Use a diagram or animated process, not a dense feature-card wall.

### 11.10 Modern Sales Flow method

Show the seven steps as a progressive journey:

1. `Catch` - Customer 来的时候，先接住机会
2. `Understand` - 用最少问题知道他为什么来
3. `Match` - 只给最 Relevant 的 Value
4. `Handle` - 把疑虑说清楚，不急着 Discount
5. `Move` - 每轮 Conversation 都有自然 Next Step
6. `Follow` - 有 Context、有 Timing，不是 Copy-paste 追问
7. `Human` - 需要关系、判断和 Closing 时马上交真人

Explain customer/business outcomes, not technical implementation.

### 11.11 2ndU reveal

Only reveal the product after the method is understood.

Headline:

`把你的 Top Sales Logic，变成可以每天执行的 AI Sales System。`

Support:

`2ndU 不是普通 FAQ Bot。它的工作不是 Reply 更多，而是让 Conversation 一直有 Next Step。`

Capability universe:

- Catch Leads
- Ask Relevant Questions
- Understand Needs
- Build and Match Value
- Share relevant Product / Price / PDF / Video
- Handle common objections
- Smart Follow Up
- Appointment / Next Step
- Human Handover
- Standardise Sales Logic

Do not show all capabilities as a giant grid. Prioritise the 3-4 capabilities matched to the visitor's diagnosis, with an optional way to explore more.

### 11.12 Before vs Modern conversation demo

Use accessible tabs or a segmented control:

- `OLD SALES`
- `MODERN SALES`

Old example:

- Customer: `多少钱？`
- Sales: `RMXXX.`
- Customer: `Ok tq.`
- Sales: `Anything let me know.`

Modern example:

- Customer: `多少钱？`
- 2ndU: `可以老板 👍 我们的方案是从 RMXXX 起。为了不要浪费你时间，我先帮你确认一下：你现在比较想解决的是 A) Leads 问了就静，B) Follow Up 没 System，还是 C) Sales 不懂怎样继续？`
- Customer: `B`
- 2ndU: `明白。很多 Leads 不一定没有兴趣，只是 Sales 忙一下，Follow Up timing 就过了。如果一个月发生几十次，广告已经带来机会，但 Conversation 静静漏掉。你们现在是靠 Staff 自己记，还是有固定 Follow Up SOP？`

This is a demonstration, not proof. Adapt `RMXXX` only when real approved pricing/content is supplied.

Caption:

`不是 Reply 更多。而是 Conversation 一直有 Next Step。`

CTA:

`看完整 90 秒 Demo`

### 11.13 Industry use cases

Use compact, visually varied examples:

| Industry | Example flow |
| --- | --- |
| Property | Need, budget, preferred area, viewing appointment |
| Automotive | Model, use case, budget, trade-in, test drive |
| Insurance | Goal, coverage gap, eligibility, trusted human consultation |
| Education | Student level, challenge, course match, trial class |
| Beauty / Wellness | Concern, suitability, treatment match, booking |
| B2B Services | Current process, impact, proposal context, consultation |
| Agency | Lead source, service goal, qualification, strategy call |
| High-consideration products | Compare needs, relevant proof, objection, purchase next step |

Do not imply one universal script fits every industry.

### 11.14 Not for everyone

Headline:

`也不是每间公司现在都需要 AI。`

Not ready when:

- enquiry volume is extremely low
- there is no lead source yet
- product, price, and process are not defined
- every first message legally or professionally requires a human expert

Lead statement:

`AI should not automate a broken process.`

Tone: honest and advisory, never dismissive.

### 11.15 Proof

Label:

`REAL BUSINESSES. REAL CONVERSATIONS.`

Headline:

`不是看 AI 会不会讲话。看 Sales Process 有没有变好。`

Support these modules through content data:

- client logo strip
- short case studies: Before / Changed / Result
- authorised and anonymised WhatsApp screenshots
- customer quotes
- video testimonials

If proof is not available, show a refined replacement placeholder only in development/preview or omit the empty module in production. Never invent names, numbers, quotes, or outcomes.

### 11.16 Risk reversal

Lead:

`先不要买。`

Headline:

`给我们 10-15 分钟，先一起看你的真实 Sales Flow。`

Review items:

- Leads 从哪里进来
- 第一轮怎样 Reply
- Customer 哪里最常静掉
- Price 几时出现
- Objection 怎样 Handle
- Follow Up 有没有 SOP
- 哪些工作适合 AI
- 哪些一定应该 Human

Promise:

`适合 2ndU，我们才继续。现在不适合，我们也直接告诉你。`

Microcopy:

`No obligation · No hard sell · Diagnose first`

### 11.17 Primary conversion section

Headline:

`你的 Customer 已经改变。下一步不是马上买 AI。`

Support:

`先看看你的 Sales，有没有跟上 Customer 做决定的速度。`

Primary CTA:

`BOOK MY FREE SALES FLOW REVIEW`

Meta:

`10-15 min · Zoom / Online`

Secondary CTA:

`WhatsApp 一个真实 Case 给我们`

### 11.18 Multi-step lead flow

Do not show a long form.

Step 1 - intent:

- Sales Flow Review
- Watch 2ndU Demo
- Ask through WhatsApp

Step 2 - industry:

- Property
- Automotive
- Insurance
- Education
- Beauty
- Retail
- B2B Services
- Agency
- Other

Step 3 - enquiry volume:

- 1-10/day
- 11-30/day
- 31-100/day
- 100+/day
- Not sure

Step 4 - main problem:

- auto-populate from diagnosis
- allow editing

Step 5 - contact:

- Name - required
- WhatsApp - required
- Company - optional
- Email - optional

Submit CTA:

`帮我安排 Sales Flow Review ->`

Privacy microcopy:

`你的资料只用于这次 enquiry / appointment，不会公开。`

Preserve data when moving backward. Use clear progress, focus movement, loading, success, error recovery, and international phone input behaviour.

### 11.19 FAQ

Include concise answers to:

1. `这是普通 Chatbot 吗？`
2. `会不会全部由 AI Reply？`
3. `AI 会不会乱回答 Price / Product？`
4. `我公司很小，适合吗？`
5. `一定要换掉现在 Sales Team 吗？`
6. `我现在还没有 Sales SOP 怎么办？`

Key answer directions:

- Normal bots focus on answers; 2ndU is designed to `Understand -> Guide -> Follow -> Move Forward`.
- Recommend AI + Human Sales.
- Business controls approved knowledge, pricing, FAQs, materials, and rules.
- Suitability depends on enquiry flow, not company size alone.
- 2ndU supports good Sales; it does not replace them.
- A business can begin by systemising top-sales conversations, FAQs, prices, objections, and materials.

### 11.20 Final CTA

Label:

`MODERN CUSTOMER. MODERN SALES.`

Headline:

`Customer 不会坐在那里等你。他在继续看别人。`

Reframe:

`不要第一时间问「我要不要 AI？」先问：「我的 Sales，到底漏在哪里？」`

Primary CTA:

`免费 Check 我的 Sales Flow`

Secondary:

`直接 WhatsApp CREATIQ`

### 11.21 Sticky mobile CTA

Before diagnostic completion:

- label: `Sales 漏在哪里？`
- button: `FREE SALES CHECK ->`

After diagnostic completion:

- label: `找到你的 Sales Leak 了`
- button: `BOOK REVIEW ->`

Respect bottom safe-area insets and never cover active form controls.

### 11.22 Thank-you state/page

Headline:

`✅ 收到了。`

Support:

`在我们聊之前，先看这个 60-90 秒。`

Video topic:

`为什么很多 AI Reply 得很快，还是不会卖？`

Follow-up CTA:

`WhatsApp 一个真实 Sales Case 给我们 ->`

Instruction:

`Screenshot 一段 Customer Enquiry -> Sales Reply -> Customer 消失。我们 Review 时直接用你的真实 Case。`

Optional secondary action: add confirmed appointment to calendar.

## 12. Ad message-match variants

One route supports these validated `angle` values:

| Query | Hero emphasis | Suggested diagnostic item |
| --- | --- | --- |
| `speed` | `你的 Sales 不是不会卖，是卖得太慢。` | `SLOW_RESPONSE` |
| `price` | `Price 没错。错的是 Customer 还没看到 Value。` | `QUOTE_GHOST` |
| `followup` | `很多 Leads 不是没兴趣，是 Follow Up timing 过了。` | `MISSED_FOLLOWUP` |
| `topsales` | `Top Sales 一放假，Closing 就跟着放假？` | `INCONSISTENT_SALES` |
| `leads` | `不是 Leads 不够。很多 Leads，是进来以后漏掉。` | `ASK_GHOST` |
| `ai-human` | `AI 不是取代 Sales，是先接住、再把对的人交给 Sales。` | `NO_GUIDANCE` |

Use the query to change the eyebrow/supporting line and visually suggest one diagnostic option. Do not silently submit or falsely imply the visitor selected it. Invalid values use the default Hero.

## 13. WhatsApp message design

Build the message from known context. Example:

```text
Hi CREATIQ 👋

I just completed the Modern Sales Flow Check.

My main issue:
Quotation 后 Customer 经常不 Reply

Diagnosis:
Value Building Leak

Industry:
Property

Enquiry volume:
11-30/day

I'd like to see how our Sales Flow can be improved.
```

Do not include empty fields. Keep the message readable and correctly URL encoded.

## 14. Content-writing rules

### Required style

- Malaysia Chinese plus clear, familiar English sales terms
- short, human, and skimmable
- specific business scenes instead of abstract theory
- one promise or idea at a time
- empathy before correction
- recommendation before pressure

### Use sales frameworks invisibly

- Attention: a recognisable leak or changed customer behaviour
- Interest/Consideration: self-diagnosis and problem explanation
- Credibility: method, proof, honest exclusions, controlled knowledge
- Action: review, WhatsApp case, or demo
- SPIN: context, pain, implication, payoff - without labelling the visitor's journey as a lesson
- FAB: convert capabilities into practical value

### CTA rules

- CTA may appear early, mid-page, and at the end when the visitor's readiness differs.
- Button copy states the action and expected outcome.
- Use two clear choices only when both are genuine paths.
- Do not use fake deadlines, fake limited slots, or vague `Contact Us` buttons.

### Emotion and objection rules

- Validate a reasonable concern before explaining.
- Name concrete emotions/context carefully: `你可能不是没兴趣，只是还没看到为什么值得继续。`
- Never shame the visitor, their customers, or their Sales staff.
- Do not turn pain amplification into fearmongering.
- Preserve autonomy with low-friction next steps.

## 15. Responsive behaviour

### Desktop

- Hero: copy left, interactive visual right
- diagnostic/result panels may use two columns when it improves comprehension
- keep primary CTA visible in the header

### Tablet

- reduce decorative density first, not core content
- stack complex diagrams before labels become cramped

### Mobile

- 360px is a hard test width
- Hero visual becomes compact and appears after the first CTA
- diagnostic cards are full-width, thumb-friendly, and fast to scan
- chat demo uses comfortable bubble width and 16px minimum body text
- Old vs Modern becomes stacked or an accessible two-state control
- seven-step flow becomes a vertical journey
- form is one question group per screen/step
- sticky CTA uses safe-area padding and changes state after diagnosis

## 16. Accessibility details

- Diagnostic options are native checkbox-style controls or buttons with `aria-pressed`/equivalent state.
- Announce when two selections have been reached and explain how to change them.
- Progress text is visible, not screen-reader-only.
- Tab controls expose selected state and connected panels.
- Result reveal receives focus without stealing it unexpectedly.
- Calculator inputs have units in labels and accessible descriptions.
- Error messages are linked to fields and summarised at the step level where helpful.
- Focus indicators use a visible cyan/white outline on dark surfaces.
- Reduced-motion mode disables the Hero loop and uses a complete static final state.

## 17. Asset checklist

Inspect the repository first. Track missing real assets without blocking the build:

- [ ] CREATIQ primary/reversed logo
- [ ] 2ndU product UI screenshots
- [ ] 60-90 second demo video and poster
- [ ] client logos with permission
- [ ] case study copy and verified results
- [ ] authorised, anonymised conversation screenshots
- [ ] testimonial quotes/videos with consent
- [ ] Open Graph social image
- [ ] final WhatsApp number
- [ ] booking URL
- [ ] lead webhook/CRM destination

## 18. Visual QA acceptance criteria

- The problem and CTA are clear within the first mobile viewport or immediately after a short scroll.
- The page does not resemble a generic chatbot/SaaS template.
- The diagnosis feels specific and is easy to complete.
- Pain -> reframe -> method -> 2ndU -> proof -> review feels natural.
- 2ndU appears only after the sales method is established.
- Old vs Modern is visually obvious without reading a long explanation.
- Dynamic features reflect the actual result.
- Real proof and placeholders are unambiguously different.
- No section is a wall of text or a grid of repetitive cards.
- Orange remains reserved for priority actions.
- Mobile sticky CTA helps rather than blocks.
- There is no horizontal overflow, clipped text, unreadable bubble, or layout jump.
- All focus, error, selected, hover, loading, success, and missing-config states are designed.



