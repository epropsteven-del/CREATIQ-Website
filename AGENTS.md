# CREATIQ MODERN SALES FLOW™ - Repository Instructions

## 1. Purpose and authority

This repository builds a production-quality interactive diagnostic sales funnel for CREATIQ AI SOLUTIONS.

- Campaign / methodology: `CREATIQ MODERN SALES FLOW™`
- Execution system: `2ndU AI Sales System`
- Primary conversion: request a free 10-15 minute Sales Flow Review
- Secondary conversion: send a real sales conversation case through WhatsApp
- Tertiary conversion: watch the 2ndU demo

This is not a generic corporate website, chatbot feature page, or SaaS template. The visitor should leave thinking:

> CREATIQ helps companies modernise how Sales works. 2ndU is the AI system that executes that method.

Read this file and `DESIGN.md` before making changes. For a full build, also follow `CODEX_PROMPT.md`.

When instructions conflict, use this order:

1. The user's latest explicit request
2. Security, privacy, legal, and repository safety requirements
3. This `AGENTS.md`
4. `DESIGN.md`
5. `CODEX_PROMPT.md`
6. Existing code conventions

Do not silently change the core positioning, primary conversion, or diagnostic model.

## 2. Autonomy: finish the task end-to-end

- Inspect, implement, run, test, visually review, repair, and report without waiting for phase-by-phase approval.
- Do not stop after a plan, wireframe, Hero, scaffold, or first successful build.
- Ask the user only when a genuine blocker cannot be resolved from the repository, these files, existing configuration, or safe placeholders.
- Missing non-critical assets are not blockers. Use polished, clearly labelled replacement placeholders and keep working.
- Prefer reasonable, reversible decisions. Record assumptions in the final report.
- Do not broaden the task into unrelated pages or infrastructure.

## 3. Repository inspection before editing

Before changing code:

1. Read this file, `DESIGN.md`, and the active task prompt.
2. Inspect the full repository structure with fast search tools.
3. Identify framework, package manager, routes, styling, design tokens, component patterns, tests, analytics, backend, and deployment conventions.
4. Search for CREATIQ and 2ndU logos, screenshots, videos, client logos, testimonials, social images, and brand fonts.
5. Search for enquiry endpoints, CRM/webhook integrations, WhatsApp configuration, booking tools, consent text, and environment-variable patterns.
6. Run the existing build or the lightest meaningful baseline checks before major work.
7. Inspect `git status`, the current branch, and recent history. Preserve all unrelated user changes.

Reuse the existing stack and dependencies where sensible. Do not replace the framework, router, CSS system, state library, form library, analytics provider, or backend merely for preference.

## 4. Git safety and rollback discipline

Every implementation turn must leave a recoverable history.

### Before work

- Record the current `HEAD` hash as the rollback baseline.
- If the working tree is clean, the current `HEAD` is the baseline; do not create an empty commit.
- If the working tree contains user changes, do not discard, reset, overwrite, stash, or casually include them in a task commit.
- Work around unrelated changes. If task files overlap with uncommitted user edits and cannot be separated safely, stop and explain the exact conflict.
- Use a task branch such as `codex/modern-sales-flow` when repository policy permits. Do not switch branches if doing so risks uncommitted work.

### During work

- Make cohesive milestone commits, not a single giant commit.
- Recommended milestones:
  1. funnel structure and data model
  2. visual system and responsive sections
  3. diagnostic, calculator, and dynamic content
  4. enquiry, WhatsApp, booking, and analytics integration
  5. accessibility, performance, tests, and final polish
- Commit only task-related files. Never commit secrets, `.env`, credentials, build output, browser profiles, screenshots used only for QA, or temporary files.
- Use clear messages such as `feat(funnel): add diagnostic result engine`.
- Do not amend, squash, rebase, force-push, or rewrite user history unless explicitly requested.

### End of every implementation turn

- Run the relevant verification first.
- Commit all completed task-related changes as a separate rollback point.
- If work is necessarily incomplete, use an explicit `wip(modern-sales-flow): ...` checkpoint only when it is safe and useful; follow it later with a verified commit.
- Report the baseline hash, final task commit hash, and test status.
- Never claim a commit exists unless it was successfully created.

Prohibited destructive Git commands include `git reset --hard`, forced checkout of user files, aggressive clean commands, or history rewriting without explicit approval.

## 5. Product and conversion invariants

The page must follow this persuasion path:

`Ad message -> relevance -> micro commitment -> self-diagnosis -> personalised result -> reframe -> Modern Sales method -> 2ndU mechanism -> proof -> risk reversal -> Sales Flow Review -> WhatsApp / form / appointment`

Preserve these beliefs:

- `Modern Customer. Modern Sales.`
- `不是 Leads 不够。很多 Leads，是进来以后漏掉。`
- `不是 Customer 越来越难搞，是 Sales 方法还停留在以前。`
- 2ndU is the mechanism, not the Hero.
- AI supports Sales; it does not replace good human Sales.
- Give diagnostic value before requesting contact information.

Do not introduce a pricing section in the first version unless the user explicitly requests one. This funnel first sells awareness of the Sales Leak and the value of a review.

## 6. Sales and conversation principles

All copy and interaction decisions must support a consultative sales method.

- Acknowledge before advising.
- Answer a direct question, then guide with one relevant next question or action.
- Use SPIN as flexible reasoning, not a visible interrogation script.
- Keep Situation questions minimal. Ask only what affects the recommendation.
- Use Problem questions to identify friction without blaming the visitor or their staff.
- Use Implication carefully to reveal operational cost or missed opportunity. Do not manufacture fear.
- Use Need-payoff to help the visitor picture the improvement in their own words or context.
- Translate features through `Feature -> Advantage -> Customer Benefit -> Relevant next step`.
- Personalise by industry, symptom, cause, and diagnosis. Do not display every feature to everyone.
- Give autonomy through clear options. Avoid manipulative forced-choice questions.
- Every major interaction should have a useful next step, but not every paragraph needs a CTA.
- Use proof to reduce uncertainty, never to pressure.
- Use urgency only when it is true, verifiable, and configured from real business data.

## 7. Copy voice

Primary voice: natural Malaysia Chinese mixed with simple English.

The tone must be:

- conversational and easy to understand
- concise, direct, and commercially sharp
- professional enough for SME owners and decision-makers
- empathetic and consultative
- local without sounding childish or forced
- confident without promising impossible results

Natural vocabulary includes `Boss`, `Sales`, `Customer`, `Leads`, `Follow Up`, `Closing`, `Value`, `Price`, `Compare`, and `WhatsApp`.

Use `lah`, `walao`, `siao`, exaggerated slang, emoji, and exclamation marks sparingly. Never let local flavour reduce trust. Do not imitate a meme page.

Prefer short sentences, concrete scenes, and one idea per paragraph. Avoid dense jargon, vague AI hype, corporate filler, and long feature inventories.

## 8. Truthfulness and evidence

Never fabricate or imply unverified:

- client names or logos
- testimonials or quotations
- WhatsApp conversations presented as real
- revenue, conversion, response-time, or ROI improvements
- certifications, awards, partnerships, or user counts
- scarcity, countdowns, remaining slots, or live visitor activity
- AI-generated diagnosis presented as professional or financial advice

Placeholders must be clearly marked for replacement in the UI or content data. An example conversation must be labelled `示范对话` or equivalent, not passed off as customer proof.

The Sales Leak Calculator may estimate stalled conversations only. It must not forecast revenue or claim lost revenue. Show:

> This is a Sales Leakage estimate, not a revenue forecast.

## 9. Architecture and maintainability

- Follow the repository's established language, router, styling, naming, and test conventions.
- Keep page sections and interactive features componentised. Do not create a monolithic page component.
- Keep diagnostic questions, scoring, results, feature matching, industry examples, FAQs, proof, and angle variants in typed data structures where practical.
- Separate content from presentation so non-developers can update copy safely.
- Centralise analytics calls through one helper.
- Centralise environment/config reads and graceful fallback logic.
- Keep server-only secrets out of browser bundles.
- Avoid new dependencies unless they materially improve the result and fit the existing stack.
- Prefer platform-native CSS and lightweight transitions over a large animation dependency.
- Do not duplicate six landing pages for six ad angles. Use validated query parameters and one dynamic funnel.

Suggested conceptual modules:

- `Header`
- `Hero`
- `SalesDiagnostic`
- `DiagnosticResult`
- `LeakCalculator`
- `ProblemReframe`
- `OldVsModern`
- `ModernSalesFlow`
- `ProductReveal`
- `DynamicFeatureMatch`
- `ConversationDemo`
- `IndustryUseCases`
- `NotForEveryone`
- `ProofSection`
- `RiskReversal`
- `LeadFunnel`
- `FAQ`
- `FinalCTA`
- `MobileStickyCTA`
- `ThankYouState`

Names may adapt to the current codebase. Responsibilities may not collapse into an unmaintainable file.

## 10. Integration and data handling

Inspect and reuse existing production integrations first.

If no lead destination exists, support an internal server-side lead handler and a configurable webhook/CRM destination. Use repository conventions, with these semantic configuration keys when compatible:

- `LEAD_WEBHOOK_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_BOOKING_URL`
- optional demo/video and analytics identifiers

If the framework uses a different public-variable prefix, adapt the names without changing their purpose. Update `.env.example`, never `.env`.

Lead handling must:

- validate server-side
- normalise and sanitise free text
- reject obvious spam with a lightweight honeypot and/or rate limit compatible with the stack
- include diagnostic result and structured answers
- include valid UTM parameters, landing angle, path/referrer, and timestamp
- return explicit success and recoverable error states
- never silently discard a submission
- never expose secret webhook URLs or credentials to the client

Collect only what the funnel needs:

- required: name, WhatsApp
- optional: company, email
- structured intent, industry, enquiry volume, and main problem

Do not send phone numbers, email addresses, or free-text messages into analytics.

## 11. WhatsApp and booking behaviour

- Do not hard-code a fake telephone number.
- Generate a correctly URL-encoded WhatsApp message from diagnostic and form state.
- Keep the visible message useful and readable; do not dump raw tracking data into it.
- If WhatsApp is not configured, disable or replace the CTA with an honest configuration-safe alternative.
- Reuse an existing booking integration when available.
- Otherwise use a configured booking URL and preserve useful diagnostic context where the provider supports parameters.
- If booking is not configured, show the lead form and WhatsApp path. Never render a broken button.

## 12. Analytics and privacy

Use existing analytics when available; otherwise provide a no-op-safe central adapter.

Required events:

- `hero_cta_click`
- `diagnostic_started`
- `diagnostic_q1_completed`
- `diagnostic_completed`
- `diagnostic_result_viewed`
- `calculator_used`
- `demo_started`
- `whatsapp_clicked`
- `booking_clicked`
- `lead_form_started`
- `lead_form_completed`
- `lead_form_error`
- `proof_viewed`
- `faq_opened`

Attach only relevant non-sensitive context such as valid `angle`, diagnosis code, industry, and `utm_campaign`.

Preserve these UTM values for the session:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

Respect existing consent, privacy, and cookie practices. Do not add fingerprinting or invasive tracking.

## 13. Accessibility requirements

- Use semantic landmarks and a logical heading hierarchy.
- All controls must work with keyboard only.
- Use native buttons/inputs where possible.
- Diagnostic cards require visible focus, selected state, accessible names, and selection-limit feedback.
- Forms require real labels, descriptive errors, focus movement on step change, and status announcements.
- Meet WCAG AA contrast for text and controls.
- Respect `prefers-reduced-motion` and retain all information without animation.
- Do not rely on colour alone for status.
- Maintain touch targets of approximately 44 x 44 CSS pixels or larger.
- Modal/dialog behaviour, if used, must trap and restore focus correctly.

## 14. Mobile-first requirements

Most traffic is expected from Facebook and Instagram on mobile.

- Build and test from 360px width upward.
- No horizontal overflow at any supported viewport.
- Keep the Hero concise enough that a CTA appears quickly.
- Keep chat bubbles, comparison content, and form steps readable one-handed.
- Use a sticky mobile CTA that does not obscure content, consent text, validation messages, or device safe areas.
- Before diagnosis it reads `FREE SALES CHECK ->`; after diagnosis it reads `BOOK REVIEW ->`.
- Stack or create an accessible swipe pattern for wide comparisons.
- Do not allow the mobile keyboard to hide the active field or main controls.

## 15. Performance requirements

- Optimise images and provide dimensions to prevent layout shift.
- Lazy-load below-fold images and videos.
- Use a lightweight poster/consent-to-play pattern for video.
- Avoid autoplay video with sound.
- Avoid huge animation libraries and unnecessary client-side hydration.
- Prefer semantic HTML and CSS for static content.
- Keep animations transform/opacity based where possible.
- Check production output for unexpectedly large bundles.
- Do not trade clarity or conversion speed for decoration.

## 16. SEO and metadata

Use:

- Title: `Modern Sales Flow | CREATIQ AI Solutions`
- Description: `Find where your sales conversations are leaking and discover how a modern AI + Human Sales Flow can improve lead handling, follow-up and conversion.`

Add canonical metadata according to the deployed route, Open Graph/Twitter metadata, and an existing CREATIQ social image if one is available. If not, leave a clear asset replacement note. Do not keyword-stuff or make unsupported performance claims.

## 17. Required states and failure handling

Every async or configurable feature needs a deliberate state:

- initial
- active/progress
- loading
- success
- empty/not configured
- validation error
- server/network error with recovery

The funnel must remain useful when analytics, webhook, booking, video, proof assets, or WhatsApp configuration is missing. Fail visibly to developers and gracefully to visitors.

## 18. Verification gate

Do not declare completion until the rendered funnel works end-to-end.

Run the commands appropriate to the repository:

1. formatter/check
2. lint
3. type check
4. unit/component tests
5. production build

Then launch the site and verify in a real browser:

- desktop and common mobile sizes, including 360px
- no horizontal overflow
- all header, Hero, repeated, sticky, WhatsApp, booking, and form CTAs
- multiple diagnostic answer combinations and deterministic ties
- maximum-two selection rules
- personalised result and dynamic feature match
- diagnostic restart and stored session state
- calculator labels and math
- ad-angle query variants and invalid-angle fallback
- UTM preservation
- form back/next, validation, keyboard type, loading, success, and recovery
- endpoint behaviour and missing-variable fallbacks
- WhatsApp URL encoding
- booking context/fallback
- reduced motion
- keyboard navigation and visible focus
- browser console and network failures
- media loading and layout shift

Fix relevant errors before the final commit. Do not hide failures by disabling checks or deleting tests.

## 19. Completion report

Keep the handoff concise and include:

1. outcome and route(s)
2. major components and interactions
3. diagnostic/scoring behaviour
4. lead, CRM/webhook, WhatsApp, and booking status
5. required environment variables
6. analytics events
7. real assets still required
8. commands/tests run and results
9. baseline and final commit hashes
10. remaining non-blocking recommendations

Never report completion based only on code generation. State any unverified item plainly.



