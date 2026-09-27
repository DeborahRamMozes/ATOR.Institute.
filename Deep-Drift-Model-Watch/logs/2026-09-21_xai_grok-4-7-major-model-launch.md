# xAI — Grok 4.7 — Major flagship model launch

- **Detected:** 2026-09-27 19:54 Asia/Jakarta
- **Provider:** xAI
- **Product/model:** Grok 4.7
- **Exact change:** xAI launched Grok 4.7 as a new frontier model for coding and knowledge work. The model uses a larger base model than Grok 4.6, a longer reinforcement-learning run focused on difficult multi-hour tasks, improved self-verification, and better long-context management. xAI also trained it to natively understand the Grok Bot harness.
- **Announcement date:** 2026-09-21
- **Release/availability date:** 2026-09-21
- **Rollout status:** GA in xAI API; also served in other xAI product surfaces with surface-specific availability.
- **Affected plans/regions/API surfaces:** xAI API, Grok Bot/Grok Build/Cursor-related surfaces as documented by xAI. API regional endpoint includes U.S. service. No broader regional exclusion matrix stated.
- **Official source(s):** xAI, “Introducing Grok 4.7”; xAI Developer Release Notes.
- **Pricing before/after:** API pricing below 200K prompt tokens: $2/M input, $0.50/M cached input, $6/M output. Above 200K: $4/M input, $1/M cached input, $12/M output. xAI states Grok 4.7 is served at the same price/speed as Grok 4.6 in the comparable product context.
- **Evidence strength:** High
- **Retest priority:** Critical

## What changed

Grok 4.7 is a new model generation, not merely a serving-layer change. xAI describes longer-horizon reasoning, more careful self-verification, and better management of long context. The API provides a 500K context window, text and image inputs, text-only outputs, and reasoning effort controls from low through xhigh.

## Official fact vs inference

### Official fact
- Grok 4.7 launched 2026-09-21.
- It is based on a larger model than Grok 4.6.
- xAI states it was trained longer on harder, long-running tasks.
- The model is designed to verify its own work and manage longer context.
- API context window: 500K.
- Inputs: text and image; output: text.
- Reasoning effort: low, medium, high, xhigh.
- API pricing differs above and below 200K prompt-token thresholds.

### Deep Drift inference
- Grok 4.6 baselines are stale for reasoning, coding, long-running agents, tool recovery, and long-context behavior.
- Because Grok 4.7 is also trained around the Grok Bot harness, Bot-specific tests may shift even when the base prompt remains unchanged.
- Price normalization must distinguish short-context and long-context requests because the API has a stepped pricing regime.

## Why previous Deep Drift results may now be stale

A new frontier model changes the base capability distribution, while the API's 500K context and stepped pricing alter the feasible test envelope. Long-running agent tests must be rerun because xAI specifically targets tasks that take many hours and require self-checking.

## Retest recommendation

- **Existing test(s) to rerun:**
  - Full Grok flagship sweep versus Grok 4.6.
  - Long-context / compilation tests.
  - Coding and software-engineering tests.
  - Tool/agent reliability and recovery.
  - Grok Bot persistence and harness tests.
  - Multimodal image-input reasoning tests.
  - Cost/latency normalization.
- **Additional test to add:**
  - **Long-horizon self-verification test:** provide a multi-hour-equivalent task with seeded errors and measure whether the model detects and corrects them.
  - **Context threshold test:** compare performance below 200K, near 200K, and above 200K input tokens while separately recording price and latency.
  - **Bot-harness parity test:** compare Grok 4.7 in ordinary API use with Grok Bot-mediated execution.
- **Variables to hold constant:** exact model ID; API version; prompt/task; context length; tools; region; account; reasoning level; concurrency; timeout; retry policy; evaluator.
- **Likely confounders:** xAI product-layer system prompts; Grok Bot harness changes; API routing; caching; long-context pricing tier; staged surface rollout; hidden tool/version differences.

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
- [ ] Subscription packaging
- [x] Usage limits / access / regions

## Sources

1. xAI, “Introducing Grok 4.7,” 2026-09-21.
2. xAI Developer Release Notes, September 2026.
