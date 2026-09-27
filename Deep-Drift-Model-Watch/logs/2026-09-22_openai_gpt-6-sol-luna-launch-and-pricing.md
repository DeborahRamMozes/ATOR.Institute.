# OpenAI — GPT-6 Sol and GPT-6 Luna — Major model launch and API pricing change

- **Detected:** 2026-09-27 19:54 Asia/Jakarta
- **Provider:** OpenAI / ChatGPT
- **Product/model:** GPT-6 Sol (`gpt-6-sol`); GPT-6 Luna (`gpt-6-luna`)
- **Exact change:** OpenAI released two new GPT-6 models on September 22, 2026. Sol and Luna bring parts of the GPT-6 Astra architecture/capabilities into faster, lower-cost reasoning models. Both accept text and image inputs and generate text through the Responses and Chat Completions APIs. OpenAI also states that caching and inference were made more efficient and API prices were reduced versus GPT-5.6 promotional pricing.
- **Announcement date:** 2026-09-22
- **Release/availability date:** 2026-09-22
- **Rollout status:** GA in API; ChatGPT Work and Codex rollout for Plus, Pro, Business, Enterprise, and Edu; GPT-6 Luna available to Free and Go users in the desktop app according to the official developer announcement.
- **Affected plans/regions:** API developers; ChatGPT Work and Codex users on Plus, Pro, Business, Enterprise, Edu; Free/Go desktop access to Luna. No regional exclusions stated in the cited official materials.
- **Official source(s):** OpenAI API Changelog; OpenAI Developer Community announcement.
- **Pricing before/after:** GPT-6 Sol: $2/M input, $0.20/M cached input, $10/M output for prompts up to 272K input tokens. GPT-6 Luna: $0.10/M input, $0.01/M cached input, $0.50/M output. OpenAI states these are 50% lower than GPT-5.6 promotional pricing. Longer-prompt and other processing-tier pricing must be normalized separately.
- **Evidence strength:** High
- **Retest priority:** Critical

## What changed

GPT-6 Sol and GPT-6 Luna were released as a new lower-cost GPT-6 family tier, explicitly building on advances behind GPT-6 Astra. Both models support image inputs and text outputs, and both are available through the Responses and Chat Completions APIs. The pricing difference between Sol and Luna is substantial, creating two distinct capability/cost operating points.

OpenAI also announced higher usage limits and lower cost, meaning prior GPT-5.6 cost-per-task and repetition-budget comparisons may no longer be valid.

## Official fact vs inference

### Official fact
- GPT-6 Sol and GPT-6 Luna were released 2026-09-22.
- Both accept text and image inputs and generate text.
- Both are available through Responses and Chat Completions.
- Listed standard pricing is $2/$0.20/$10 per million tokens for Sol and $0.10/$0.01/$0.50 for Luna.
- ChatGPT Work and Codex rollout includes Plus, Pro, Business, Enterprise, and Edu.
- Luna is available to Free and Go desktop users.
- OpenAI states that the models build on GPT-6 Astra advances.

### Deep Drift inference
- Existing GPT-5.6 baselines are stale for reasoning, image-grounded reasoning, cost-normalized comparison, and any test whose repetition budget depended on previous prices or quotas.
- Sol and Luna should be treated as separate experimental systems rather than a single GPT-6 baseline.
- The much lower Luna cost makes it feasible to run materially larger repeated-sample experiments; this can change observed variance and confidence intervals independently of model quality.

## Why previous Deep Drift results may now be stale

Earlier GPT-5.6 comparisons used a different model family, pricing regime, and usage envelope. The new API price points can change the feasible number of retries, context lengths, and agent trajectories in a fixed research budget. The image-input capability also extends the multimodal test surface.

Comparisons should therefore preserve a strict distinction among model capability, API surface, plan entitlement, and cost-normalized test depth.

## Retest recommendation

- **Existing test(s) to rerun:**
  - Full reasoning and coding sweep versus GPT-5.6 and GPT-6 Astra where available.
  - Long-context / compilation tests.
  - Image-input interpretation tests.
  - Tool/agent tests using Responses API and Chat Completions separately.
  - Cost-normalized performance and repeated-run variance.
- **Additional test to add:**
  - **Sol/Luna/Astra capability-cost frontier:** identical corpus, same output target, compare success rate, token use, latency, and cost.
  - **API-surface parity test:** matched prompts through Responses and Chat Completions, checking tool semantics, context handling, and output stability.
  - **Image-input constraint test:** chaotic visual references plus textual instructions, scoring interpretation, geometry, placement, and instruction precedence.
- **Variables to hold constant:** model ID; API version; prompt corpus; image inputs; reasoning settings; max output; tools; account/project; region; concurrency; timeout; retry policy; evaluator.
- **Likely confounders:** hidden routing; different API semantics; cache-hit rate; plan-specific quotas; long-prompt pricing; staged ChatGPT rollout; server-side prompt transformation.

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

1. OpenAI API Changelog, September 22, 2026.
2. OpenAI Developer Community, “Announcing GPT-6 Sol and GPT-6 Luna,” September 22, 2026.
