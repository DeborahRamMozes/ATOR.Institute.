# Anthropic — Claude Fable 5.1 / Claude Mythos 5.1 — Major model launch

- **Detected:** 2026-09-05 01:48 Asia/Jakarta
- **Provider:** Anthropic
- **Product/model:** Claude Fable 5.1 / Claude Mythos 5.1
- **Announcement date:** 2026-09-01
- **Release/availability date:** 2026-09-01
- **Rollout status:** GA for Claude Fable 5.1 on eligible consumer/team/API surfaces; restricted trusted-access rollout for Claude Mythos 5.1
- **Affected plans/regions/API surfaces:** Fable 5.1: Pro, Max, Team, Enterprise; Claude Platform API; available marketplaces; AWS, Google Cloud, and Microsoft Foundry. Mythos 5.1: vetted cyberdefenders and life scientists through trusted-access programs; currently limited to a set of US organizations. US-only inference for Fable 5.1 is available at 1.1x input/output pricing.
- **Official sources:** Anthropic Claude Fable 5.1 product page; Anthropic Claude Mythos 5.1 product page; Anthropic system-card index.
- **Pricing before/after:** Fable 5.1 remains $10/M input and $50/M output, while cache reads are $0.25/M tokens, stated by Anthropic as 75% lower than Fable 5 cache-read pricing. Anthropic estimates this reduces typical workload cost by about 25% and highly agentic workload cost by up to about 45%. Mythos 5.1 starts at $10/M input and $50/M output. US-only Fable inference is 1.1x input/output pricing.
- **Evidence strength:** High — primary Anthropic product and system-card sources
- **Retest priority:** Critical

## What changed

Anthropic launched Claude Fable 5.1 and Claude Mythos 5.1 on September 1, 2026. Anthropic describes Fable 5.1 as its most capable model for coding and knowledge work and as a Mythos-level model built for ambitious long-running projects. It is explicitly positioned for jobs that take hours and span multiple applications, including Cowork backlogs, Slack requests through Claude Tag, browser operation, and unattended managed-agent execution on the Claude Platform.

Anthropic states that Fable 5.1 plans work, selects tools, recovers when steps fail, and can continue without requiring constant supervision. For coding, Anthropic says it can handle codebase-wide features, code review, performance work, multi-day autonomous sessions, write tests for its own work, implement designs with high fidelity, and use vision to compare outputs against goals. In document-heavy workflows, it improves interpretation of diagrams, charts, and tables inside files and PDFs.

Fable 5.1 and Mythos 5.1 are the same underlying model with different safeguard/access profiles. Mythos 5.1 exposes a less-restricted variant for vetted cybersecurity and life-sciences users, while Fable 5.1 is the generally available safeguarded variant.

## Official fact vs inference

### Official fact
- Anthropic announced Fable 5.1 and Mythos 5.1 on 2026-09-01.
- Fable 5.1 is available to Pro, Max, Team, and Enterprise users and through the Claude Platform API, available marketplaces, AWS, Google Cloud, and Microsoft Foundry.
- Mythos 5.1 is restricted to vetted organizations through trusted-access programs and is currently limited to a set of US organizations.
- Fable 5.1 is explicitly designed for long-running, multi-application agentic work and includes tool selection, failure recovery, long-duration execution, stronger coding, stronger knowledge work, and stronger vision.
- Fable 5.1 pricing is $10/M input and $50/M output; cache reads are $0.25/M tokens, 75% lower than Fable 5 cache-read pricing according to Anthropic.
- Mythos 5.1 starts at $10/M input and $50/M output.
- US-only Fable inference is available at 1.1x input/output pricing.

### Deep Drift inference
- Any Deep Drift result based on Fable 5, Opus 5, Sonnet 5, or earlier Claude models may now be stale for long-horizon agent execution, multi-application continuity, autonomous recovery, vision-assisted self-checking, codebase-scale work, and cost-normalized agent testing.
- Because Fable 5.1 is explicitly designed to work for hours across applications, it should be tested not merely as a better conversational model but as a persistent-work executor whose failure boundaries may differ from ordinary chat models.
- The 75% reduction in cache-read cost materially changes the economics of long-context and agentic testing, so previous cost-per-success comparisons should not be reused without normalization.
- Mythos 5.1 and Fable 5.1 should not be treated as interchangeable benchmark targets because safeguard routing, access restrictions, and domain-specific behavior can alter observed outputs even though Anthropic says they share the same underlying model.

## Why this matters to Deep Drift

The launch can invalidate earlier Claude comparisons in several Deep Drift domains at once: long-context reasoning, multi-step agent reliability, autonomous recovery, vision-assisted verification, browser/tool workflows, codebase-scale execution, and commercial normalization.

The most important Deep Drift question is no longer simply whether Claude can complete a difficult task, but whether Fable 5.1 can sustain a complex workflow over many steps and applications without losing instructions, silently changing goals, duplicating work, or inventing continuity after failures.

## Retest recommendation

- **Existing tests to rerun:**
  - Full comparative flagship sweep against the latest OpenAI, Gemini, Grok, and DeepSeek flagships.
  - Long-context stability and instruction-precedence tests.
  - Multi-document synthesis and compilation tests.
  - Tool-selection and connected-data workflow tests.
  - Long-horizon autonomous execution and recovery tests.
  - Repository/codebase-scale implementation tests.
  - Visual-reference interpretation and screenshot-to-goal verification tests.
  - PDF/chart/table document-reasoning tests.
  - Cost-normalized agent tests using cache reads.
- **Additional test to add:** `DD-AF51-LHA-01 — Fable 5.1 Long-Horizon Agent Recovery Test`.
  - Give the model a multi-application workflow requiring at least one recoverable tool failure, a mid-task instruction revision, visual verification of an output, and a final provenance report.
  - Measure whether the model preserves the original goal, correctly incorporates the revised instruction, recovers without duplicating completed work, identifies what it actually verified versus inferred, and maintains state across the entire workflow.
- **Variables to hold constant:**
  - identical task specification and input corpus
  - same region
  - same account/plan tier where possible
  - same tool permissions and connector availability
  - same application/API surface
  - same reasoning/effort setting where exposed
  - same reference images/documents
  - same retry policy and maximum runtime
  - cache state recorded explicitly
  - safeguard profile recorded explicitly
- **Likely confounders:**
  - Fable vs Mythos safeguard routing and eligibility
  - different access through Claude app, Claude Platform, cloud marketplaces, Cowork, Slack/Tag, or browser surfaces
  - US-only inference pricing multiplier
  - cache-hit rate materially affecting effective cost
  - tool permission differences
  - model-side routing/fallbacks
  - long-running task variance and asynchronous execution conditions

## Comparative dimensions affected

- [ ] Memory / continuity
- [ ] Own-chat-history retrieval
- [ ] Cross-chat / project / folder retrieval
- [x] Indexing / compilation
- [x] Context / reasoning
- [x] Tools / agents
- [ ] Image generation
- [ ] Image editing
- [x] Visual identity / personality fidelity
- [x] API pricing
- [x] Subscription packaging
- [x] Usage limits / access / regions

## Sources

1. Anthropic — Claude Fable 5.1 product page: https://www.anthropic.com/claude/fable
2. Anthropic — Claude Mythos 5.1 product page: https://www.anthropic.com/claude/mythos
3. Anthropic — Model system cards: https://www.anthropic.com/system-cards
