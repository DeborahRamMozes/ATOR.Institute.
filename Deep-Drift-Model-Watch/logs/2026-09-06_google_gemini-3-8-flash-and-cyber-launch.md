# Google — Gemini 3.8 Flash and Gemini 3.8 Flash Cyber — Major reasoning, coding, agentic, cybersecurity, and access change

- **Detected:** 2026-09-06 22:40 Asia/Jakarta
- **Announcement date:** 2026-09-02
- **Release/availability date:** 2026-09-02, staged/limited access by surface
- **Rollout status:** staged rollout / limited-access variant for Cyber
- **Affected plans/regions:**
  - Developers: Gemini API through Google AI Studio and Android Studio; agent workflows in Google Antigravity; UI generation in Stitch.
  - Enterprises: Gemini 3.8 Flash in Gemini Enterprise.
  - Consumers: Google AI Pro and Ultra subscribers in the Gemini app, AI Mode in Google Search, and Gemini in Google Sheets.
  - Gemini 3.8 Flash Cyber: trusted government authorities, critical-infrastructure operators, and software maintainers through the Fairwind Program; access is application/approval based.
  - Google did not state a region restriction in the announcement; availability is surface- and eligibility-gated.
- **Official source:** Google, “Introducing Gemini 3.8 Flash and 3.8 Flash Cyber,” 2026-09-02: https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/
- **Pricing before/after:** Gemini 3.8 Flash introductory API pricing is $0.75 per 1M input tokens and $3.75 per 1M output tokens, matching Gemini 3.7 Flash introductory pricing. Introductory pricing ends 2026-12-31; from 2027-01-01, Google states $1.50 per 1M input tokens and $7.50 per 1M output tokens. Gemini 3.8 Flash Cyber pricing was not stated in the announcement.
- **Evidence strength:** High
- **Retest priority:** Critical

## What changed

Google introduced Gemini 3.8 Flash as its strongest reasoning and coding Flash model to date, with claimed improvements over Gemini 3.7 Flash in software engineering, agentic tasks, and critical multi-step reasoning in specialized domains, while retaining the same speed and introductory price. Google also introduced Gemini 3.8 Flash Cyber, a more permissive cybersecurity variant intended for trusted defenders. Google reports a significant improvement in prompt-injection robustness for the Gemini 3.8 family and describes a long-running agent loop used to evaluate and improve the underlying model.

## Official fact vs inference

### Official fact

- Gemini 3.8 Flash and Gemini 3.8 Flash Cyber were announced on 2026-09-02.
- Gemini 3.8 Flash is available through Gemini API/Google AI Studio, Android Studio, Google Antigravity, Stitch, Gemini Enterprise, and selected consumer surfaces for Google AI Pro and Ultra subscribers.
- Gemini 3.8 Flash Cyber is restricted to trusted defenders through the Fairwind Program.
- Google states that Gemini 3.8 improves software engineering, agentic task performance, specialized multi-step reasoning, and prompt-injection robustness relative to earlier Gemini Flash models.
- Google states the introductory API price is $0.75/1M input and $3.75/1M output through 2026-12-31, increasing to $1.50/1M input and $7.50/1M output on 2027-01-01.

### Deep Drift inference

- Earlier Deep Drift comparisons against Gemini 3.7 Flash are potentially stale because model quality, agent-loop behavior, prompt-injection resistance, access surface, and effective cost all changed.
- Results from consumer Gemini, Gemini API, Gemini Enterprise, and Fairwind Cyber should not be pooled as though they were identical deployments. Access gating and tool environment are now part of the model condition.
- The claimed prompt-injection improvement may alter tool-use reliability and instruction-precedence outcomes, but the announcement is not itself comparative evidence; controlled reruns are required.

## Why this matters to Deep Drift

This is a major model-family release and an access/packaging change. It affects context and reasoning comparisons, agent/tool execution, cybersecurity capability, prompt-injection robustness, and commercial normalization. The same nominal Gemini family can now produce materially different behavior depending on whether the test uses the public Flash model, Gemini Enterprise, or the restricted Flash Cyber variant. The December 31, 2026 pricing boundary also creates a future cost discontinuity that can invalidate longitudinal cost-per-success measurements if the test date is not recorded.

## Retest recommendation

- **Existing tests to rerun:**
  - Full comparative sweep against the current Gemini baseline.
  - Context + compilation tests, including dispersed instructions, contradiction handling, and long multi-step synthesis.
  - Tool/agent execution tests, including planning, tool selection, state retention, recovery, and completion without redundant questions.
  - Prompt-injection robustness tests using fixed benign and adversarial tool-context fixtures.
  - Coding and software-engineering tasks with identical repositories, tool permissions, timeouts, and acceptance tests.
  - Commercial normalization tests recording token count, latency, success, retries, and effective cost.
- **Additional test to add:**
  - A three-condition access matrix: public Gemini 3.8 Flash, Gemini Enterprise Flash, and Flash Cyber where access is legitimately available, with explicit labeling of safeguards and tool permissions.
  - A pre/post pricing boundary simulation for 2026-12-31 versus 2027-01-01 using identical token workloads.
- **Variables to hold constant:**
  - Exact model identifier and API version.
  - Prompt, repository/document bundle, system instructions, temperature or equivalent sampling controls, max output, tool list, tool schemas, timeout, retry policy, region, account tier, and date/time.
  - For visual or multimodal work, identical reference files, image resolution, file order, and edit instructions.
- **Likely confounders:**
  - Staged rollout and hidden backend revisions.
  - Differences between Gemini API, AI Studio, Antigravity, Gemini Enterprise, Gemini app, Search AI Mode, and Sheets.
  - Plan-based quota and rate-limit differences.
  - Tool wrapper or orchestration differences rather than base-model behavior.
  - Cyber-specific safeguards and Fairwind eligibility.
  - Introductory versus post-introductory API pricing.

## Comparative dimensions affected

- [ ] Memory / continuity
- [ ] Own-chat-history retrieval
- [ ] Cross-chat / project / folder retrieval
- [ ] Indexing / compilation
- [x] Context / reasoning
- [x] Tools / agents
- [ ] Image generation
- [ ] Image editing
- [ ] Visual identity / personality fidelity
- [x] API pricing
- [x] Subscription packaging
- [x] Usage limits / access / regions

## Sources

1. Google, “Introducing Gemini 3.8 Flash and 3.8 Flash Cyber,” 2026-09-02: https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/
2. Google, “Google’s Fairwind Program: Cyber defense tools for trusted partners,” 2026-09-02: https://blog.google/innovation-and-ai/technology/safety-security/fairwind-program/
