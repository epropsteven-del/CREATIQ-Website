# CODEX MASTER BUILD PROMPT

## CREATIQ MODERN SALES FLOW™ - Interactive Diagnostic Sales Funnel

You are responsible for completing this implementation end-to-end in the currently opened repository.

Do not stop after a plan, wireframe, scaffold, Hero section, or partial phase. Inspect, implement, test, launch, visually review, fix, and commit the complete production-quality funnel unless a genuine blocker cannot be resolved from the repository or the instructions.

## 1. Load the project rules

Before coding:

1. Read the repository's `AGENTS.md` completely.
2. Read `DESIGN.md` completely.
3. Treat those files as persistent project rules and design/content authority.
4. If they do not yet exist in the repository, add the supplied final versions before implementation.
5. Inspect any nested `AGENTS.md` files that apply to the route or files you will modify.

Do not silently rewrite the core positioning or weaken the conversion strategy.

## 2. Establish a safe rollback point

1. Inspect `git status`, the current branch, and recent commits.
2. Record the starting `HEAD` hash.
3. Preserve all unrelated and user-owned changes.
4. If the tree is clean, treat the existing `HEAD` as the baseline; do not create an empty commit.
5. If repository policy and working-tree safety permit, create/use a branch such as `codex/modern-sales-flow`.
6. Never reset, clean, overwrite, or stash user work merely to simplify the task.
7. Commit cohesive milestones and make a final verified task commit before reporting completion.

## 3. Inspect the existing application

Determine:

- framework and version
- package manager and scripts
- routing and intended landing-page route
- server/client component conventions
- styling system, tokens, fonts, icons, and reusable components
- accessibility patterns
- form libraries and validation
- state/storage conventions
- API/serverless/backend capabilities
- analytics and consent system
- existing WhatsApp and booking configuration
- CRM, webhook, database, or enquiry endpoint
- test setup
- deployment configuration
- CREATIQ/2ndU logos, screenshots, videos, testimonials, case studies, customer logos, and social images

Run the lightest meaningful baseline checks/build. Reuse the existing stack and patterns. Do not perform an unnecessary rewrite or dependency migration.

## 4. Choose the route

Prefer an existing campaign/landing route if one is clearly intended. Otherwise create one route such as:

- `/modern-sales`
- or `/sales-flow`

If the repository is a dedicated single-page site, use its primary route instead of creating redundant nesting.

Report the route chosen and why.

## 5. Build the complete funnel architecture

Implement the full visitor journey in this order, allowing minor composition adjustments only when they improve the rendered experience:

1. focused Header with primary CTA
2. Hero with the changed-customer hook, primary diagnostic CTA, demo CTA, and interactive Sales Flow visual
3. short attention/competition context
4. two-step Sales Diagnostic
5. personalised diagnosis result
6. optional Sales Leak Calculator
7. belief reframe and Old Sales vs Modern Sales
8. seven-step CREATIQ Modern Sales Flow method
9. 2ndU product reveal
10. result-driven Dynamic Feature Match
11. interactive Old Sales vs Modern Sales conversation demo
12. industry use cases
13. honest `Who this is not for`
14. proof/case-study architecture using real assets or explicit placeholders
15. risk reversal / 10-15 minute review explanation
16. multi-step enquiry/booking flow
17. FAQ
18. final CTA
19. adaptive mobile sticky CTA
20. thank-you state/page

Follow all exact copy directions, content hierarchy, visual tokens, and exclusions in `DESIGN.md`.

## 6. Protect the positioning

The experience must communicate:

`Modern Customer. Modern Sales.`

`不是 Leads 不够。很多 Leads，是进来以后漏掉。`

`不是 Customer 越来越难搞，是 Sales 方法还停留在以前。`

The visitor should not conclude that CREATIQ merely sells an auto-reply chatbot.

- The modern sales method is the Hero.
- CREATIQ diagnoses and redesigns Sales Flow.
- 2ndU is revealed later as the AI system that executes the method.
- AI supports Sales and hands over high-value/complex conversations to people.
- Do not add a pricing section unless the user has explicitly requested it after this specification.

## 7. Implement the Hero as a live micro-demo

Desktop layout:

- left: short copy and CTAs
- right: interactive flow/conversation visual

Mobile layout:

- copy and primary CTA first
- compact visual second
- no excessive Hero height

The visual must show:

`Lead -> Catch -> Understand -> Match -> Handle -> Move -> Follow -> Human`

Start with a brief Old Sales exchange:

- Customer: `多少钱？`
- Sales: `RMXXX.`
- Customer: `Okay tq.`

Then transition into a Modern Sales reply that answers, adds context, and asks one relevant next question.

Use restrained CSS/native animation unless the repository already has a suitable lightweight library. Respect `prefers-reduced-motion`. Do not use an AI robot illustration.

Hero primary CTA smoothly moves focus/scroll to the diagnostic. The secondary CTA opens or scrolls to the demo without losing diagnostic state.

## 8. Build the diagnostic interaction

Requirements:

- no contact data to begin
- Step 1: choose up to two symptoms
- Step 2: choose up to two likely causes
- prevent a third selection with clear accessible feedback
- support mouse, touch, and keyboard
- show visible progress
- keep answers when navigating backward
- allow restart
- store current answers and result in session storage or a safe equivalent
- tolerate unavailable/corrupt storage

Use the exact IDs, labels, diagnosis mapping, scoring weights, synergy bonus, tie-break order, and result definitions in `DESIGN.md`.

Do not call a simple mapping engine generative AI. Keep it deterministic and testable.

Add unit tests covering at minimum:

- each single symptom
- each single cause
- matched symptom/cause synergy
- mixed results
- maximum selections
- Step 2 tie-break
- Step 1 tie-break
- stable fallback tie-break
- restart/normalisation if those functions are testable in the current stack

## 9. Build personalised results and feature matching

For the winning diagnosis show:

1. main leak
2. what it looks like
3. why it happens
4. business/operational implication
5. Modern Sales recommendation
6. only 3-4 relevant 2ndU capabilities
7. CTA to use a real case in a Sales Flow Review

Do not show the entire product feature catalogue.

Ensure result state can populate:

- later page messaging
- sticky CTA state
- form main problem
- WhatsApp prefilled message
- safe analytics context

## 10. Add the Sales Leak Calculator

Inputs:

- monthly enquiries
- percentage that stop or fail to progress

Output:

- estimated number of conversations that stop monthly

Example:

`100 enquiries x 40% = 40 conversations`

Validate and bound inputs. Handle decimals/empty values sensibly. Do not estimate revenue, profit, conversion uplift, or ROI.

Always show:

`This is a Sales Leakage estimate, not a revenue forecast.`

Track usage without sending raw personal data.

## 11. Build the belief reframe and method

Make Old Sales vs Modern Sales one of the page's strongest visual moments.

Old Sales:

- Ask -> Reply
- Price -> Quote
- No reply -> Wait
- Objection -> Discount / End
- Follow-up -> Staff remembers

Modern Sales:

- Catch
- Understand
- Match
- Handle
- Move
- Follow
- Human

Use a diagram, progressive journey, or strong before/after state. Avoid another generic card grid.

Then explain the seven steps through customer/business value using the content in `DESIGN.md`. Keep copy short.

## 12. Reveal 2ndU after the method

Use the headline:

`把你的 Top Sales Logic，变成可以每天执行的 AI Sales System。`

Explain that 2ndU supports lead response, need discovery, value matching, approved knowledge/material retrieval, objection handling, smart follow-up, appointment/next-step guidance, human handover, and sales standardisation.

The result-driven feature match appears first. Do not place a giant feature grid before or after it.

## 13. Build the conversation comparison

Create an accessible tab/switch for `OLD SALES` and `MODERN SALES`.

Use the demonstration copy in `DESIGN.md`, keeping it clearly labelled as a demo. The modern conversation must visibly:

- answer the direct question
- acknowledge context
- ask only one relevant next question at a time
- avoid interrogation
- build value before pure price comparison
- keep a natural next step

Keep bubbles readable at 360px. Do not use the official WhatsApp logo unless an approved asset and usage basis exist.

## 14. Build industry fit and honest exclusion

Show concise industry-specific examples for:

- Property
- Automotive
- Insurance
- Education
- Beauty / Wellness
- B2B Services
- Agency
- High-consideration products

Do not imply every industry uses an identical script.

Add the trust section explaining that AI may not be appropriate yet for businesses with no meaningful lead flow, undefined product/pricing/process, or cases requiring a human expert from the first message.

Feature this line:

`AI should not automate a broken process.`

## 15. Build proof without fabrication

Search the repository for approved real assets.

Support data-driven:

- client logos
- case studies with Before / Changed / Result
- authorised anonymised conversation screenshots
- customer quotations
- customer videos

Never invent proof. If assets are missing:

- use clearly marked, polished placeholders in development/preview, or
- omit empty proof modules in production while leaving a documented data structure for insertion

Do not invent client names, performance figures, quotes, certifications, or partnerships.

## 16. Build the risk reversal and primary conversion

Lead with:

`先不要买。`

Explain the 10-15 minute Sales Flow Review and what will be reviewed: lead entry, first response, drop-off, price timing, objection handling, follow-up, AI tasks, and human tasks.

Promise only:

`适合 2ndU，我们才继续。现在不适合，我们也直接告诉你。`

Primary conversion:

`BOOK MY FREE SALES FLOW REVIEW`

Secondary:

`WhatsApp 一个真实 Case 给我们`

Do not use countdown timers, fake remaining slots, fake urgency, or aggressive popups.

## 17. Implement the multi-step lead flow

Use the exact five-step structure and options in `DESIGN.md`:

1. intent
2. industry
3. daily enquiry volume
4. main problem, prefilled from diagnosis and editable
5. contact

Required contact fields:

- Name
- WhatsApp

Optional:

- Company
- Email

Implement:

- real labels
- clear step progress
- back/next controls
- correct Enter-key behaviour
- focus movement/management
- mobile keyboard/input modes
- international WhatsApp-number validation
- accessible inline and step-level errors
- loading, success, error, retry, and duplicate-submit prevention
- preserved values when moving backward
- no layout jumps
- privacy/consent microcopy from `DESIGN.md`

## 18. Implement or connect lead delivery

First reuse a production enquiry/CRM system already in the repository.

If none exists, implement a production-ready internal server-side lead endpoint compatible with the current stack.

It must:

- validate on the server
- normalise/sanitise text
- reject obvious spam with a lightweight, stack-compatible mechanism
- include diagnostic code, structured answers, intent, industry, enquiry volume, and editable main problem
- include valid UTM values, valid landing angle, path/referrer, and timestamp
- never expose server secrets
- return explicit success/error responses
- avoid logging full personal data unnecessarily
- never silently discard an enquiry

Support an existing CRM endpoint or semantic configuration such as:

`LEAD_WEBHOOK_URL`

If no destination is configured:

- produce a clear server/developer configuration warning
- show a recoverable visitor state
- keep WhatsApp as fallback when configured
- never display a false success state

Update `.env.example` with documentation. Never create/commit a real `.env` or secret.

## 19. Implement WhatsApp conversion

Use existing configuration or:

`NEXT_PUBLIC_WHATSAPP_NUMBER`

Do not hard-code a fake number.

Generate and correctly encode a useful message from available state, following the example in `DESIGN.md`. Omit empty values. Include diagnosis, industry, enquiry volume, and intent when known. Keep tracking metadata out of the visible message unless it is a short, user-friendly campaign reference.

If the number is not configured, do not render a broken link. Provide an honest disabled/configuration-safe alternative.

Track `whatsapp_clicked` without phone number or message content.

## 20. Implement booking and context preservation

Reuse an existing booking system where present. Otherwise support:

`NEXT_PUBLIC_BOOKING_URL`

Preserve diagnostic/form context before navigating. If the provider supports safe URL parameters, pass useful structured context without exposing unnecessary personal data.

If no booking URL is configured, show the lead form and configured WhatsApp option. Never render a dead booking button.

Track `booking_clicked` with non-sensitive context only.

## 21. Build the thank-you experience

After a genuinely successful submission:

- show `✅ 收到了。`
- offer the configured 60-90 second demo
- ask the lead to send one real `Customer Enquiry -> Sales Reply -> Customer disappears` screenshot before the review
- provide WhatsApp CTA when configured
- provide calendar action only when there is a confirmed appointment or valid booking detail

Do not show the success state if the lead was not actually delivered or deliberately saved by an approved fallback.

## 22. Add message-match ad variants

Support one dynamic funnel with these validated query values:

- `?angle=speed`
- `?angle=price`
- `?angle=followup`
- `?angle=topsales`
- `?angle=leads`
- `?angle=ai-human`

Use the exact message directions and suggested diagnostic items in `DESIGN.md`.

An angle may change:

- Hero eyebrow/supporting line
- visual emphasis
- suggested first diagnostic option

It must not silently select/submit an answer. Invalid values fall back to default. Do not build six duplicate pages.

## 23. Preserve UTM context

Read, validate, and store for the current session:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

Attach them to lead delivery. Keep the visible WhatsApp message clean. Handle storage unavailability without breaking the page.

## 24. Implement analytics through one adapter

Reuse existing analytics where available. Otherwise build a typed, no-op-safe adapter ready for integration.

Track:

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

Include valid angle, diagnosis, industry, and `utm_campaign` only when available. Never include private phone numbers, emails, free-text messages, or WhatsApp message bodies.

Avoid duplicate events from rerenders. Respect the existing consent model.

## 25. Implement SEO and sharing metadata

Use:

Title:

`Modern Sales Flow | CREATIQ AI Solutions`

Description:

`Find where your sales conversations are leaking and discover how a modern AI + Human Sales Flow can improve lead handling, follow-up and conversion.`

Add canonical metadata for the chosen route and Open Graph/Twitter metadata. Use an approved CREATIQ social image if present. Otherwise add a clear replacement note/placeholder asset without blocking the page.

Do not add keyword stuffing or unsupported claims.

## 26. Apply the design system faithfully

Follow the visual system in `DESIGN.md`:

- deep navy / near-black foundation
- cyan for AI, flow, data, and active states
- orange reserved for primary CTA
- strategic light sections for rhythm
- strong typography and whitespace
- visual diagrams and conversation UI
- limited gradients, glow, glass, pills, and repetitive cards

Map the supplied semantic tokens into the repository's token system rather than scattering magic values.

Do not create a generic SaaS template, cyberpunk page, cartoon chatbot page, or robot-led Hero.

## 27. Mobile-first implementation

Assume substantial Facebook/Instagram mobile traffic.

Hard requirements:

- correct at 360px width
- no horizontal overflow
- large tap targets
- readable conversation bubbles
- useful sticky bottom CTA with safe-area padding
- CTA state changes after diagnosis
- compact Hero and restrained animation
- vertical seven-step method on mobile
- stacked/toggle comparison instead of a crushed table
- one-handed multi-step form
- active fields remain visible above the keyboard
- no sticky UI covering errors, consent, or submit controls

Test at least 360x800, a common modern phone size, a tablet width, and desktop.

## 28. Accessibility implementation

Meet the requirements in `AGENTS.md` and `DESIGN.md`, including:

- landmarks and logical headings
- native controls where possible
- complete keyboard operation
- visible focus
- selected-state semantics
- diagnostic selection-limit announcement
- labelled form fields and accessible errors
- managed focus on step/result changes
- tab semantics for conversation comparison
- WCAG AA contrast
- non-colour indicators
- reduced motion
- meaningful button/link names

Run automated accessibility checks if the repository already supports them, then verify critical flows manually by keyboard.

## 29. Performance implementation

- optimise and size images
- lazy-load below-fold media
- use poster/click-to-play video
- prevent CLS
- minimise client-only components and JavaScript
- avoid a new heavy animation package
- use semantic HTML and CSS for static content
- check for unexpectedly large bundles
- keep the diagnostic and CTA interactive quickly on mobile

## 30. Required tests

Add tests compatible with the existing test setup. At minimum cover:

- deterministic diagnostic mapping and tie-breaks
- two-selection limit
- angle validation and fallback
- UTM extraction/preservation logic
- WhatsApp message construction and URL encoding
- calculator math and bounds
- form schema/validation
- lead endpoint success, invalid input, missing destination, and upstream failure where testable
- config fallbacks for booking/WhatsApp

Do not delete or weaken existing tests to make the build pass.

## 31. Run and visually inspect the real page

After implementation:

1. run formatter/check
2. run lint
3. run type check
4. run tests
5. run production build
6. launch the application
7. inspect the rendered route in a real browser

Do not only read the source code.

Test the full visitor journey:

- default entry and every valid `angle`
- invalid-angle fallback
- all Hero/header/repeated/final/sticky CTAs
- diagnostic with several answer combinations
- tie-break result cases
- third-selection prevention
- backward navigation and restart
- stored/restored state
- dynamic feature match
- calculator
- Old/Modern conversation tabs
- FAQ interactions
- proof placeholder/real-data behaviour
- form validation, keyboard behaviour, loading, success, failure, retry, and back/next
- real endpoint behaviour or explicit missing-config behaviour
- WhatsApp message and URL
- booking link and fallback
- thank-you state only after success
- UTM retention
- analytics events without personal data
- reduced-motion mode
- keyboard-only completion
- console errors and failed network requests
- 360px overflow and sticky-CTA obstruction
- layout shift and media behaviour

Fix all relevant issues and rerun the affected checks.

## 32. Conversion and visual QA pass

Review the rendered page as a premium Malaysian B2B sales funnel, not merely as functional code.

Ask:

- Is the problem understood in 3-5 seconds?
- Does the page feel like CREATIQ rather than a generic template?
- Is the main CTA obvious but not aggressive?
- Is the diagnostic easy and interesting?
- Does each result feel relevant?
- Is Pain -> Reframe -> Method -> 2ndU natural?
- Is any section too wordy?
- Is 2ndU introduced too early?
- Does the page demonstrate the method visually?
- Is Old vs Modern unmistakable?
- Does every major section serve the conversion journey?
- Is real proof clearly separated from placeholders?
- Does mobile always offer a clear next step?
- Does the sticky CTA help without blocking?
- Is the form short and trustworthy?
- Are there repetitive cards, excessive glow, weak hierarchy, or generic copy?

Improve the actual implementation based on this pass. Remove redundant or weak sections. Retest after changes.

## 33. Final commit and delivery report

Create a final verified task commit without including secrets, temporary files, or unrelated user changes.

Report concisely:

1. what was built
2. route(s) changed/created
3. major components
4. diagnostic logic and tests
5. lead/CRM/webhook status
6. WhatsApp and booking status
7. required environment variables
8. analytics events
9. real assets still required
10. commands/tests/build run and results
11. starting baseline hash and final task commit hash
12. remaining non-blocking recommendations

Do not claim completion until the funnel has been built, run, inspected, tested, repaired, and committed.



