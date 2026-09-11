# DeepSeek — V4.1-Flash — Native multimodal API launch, retirement routing, and pricing change

- **Detected:** 2026-09-11 10:56 Asia/Jakarta
- **Announcement date:** 2026-09-10
- **Release/availability date:** 2026-09-10 for `deepseek-flash`; 2026-09-14 04:00 UTC for automatic routing of `deepseek-v4-pro`
- **Rollout status:** GA / staged retirement routing
- **Affected plans/regions:** DeepSeek API users; official notice does not state regional exclusions. Affected API surfaces include model `deepseek-flash`, compatibility aliases `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp`, and `deepseek-v4-pro` routing.
- **Official source:** https://www.deepseek.com/en/news/deepseek-v4-1-flash/ ; https://api-docs.deepseek.com/quick_start/pricing
- **Evidence strength:** High
- **Retest priority:** Critical

## What changed

DeepSeek launched V4.1-Flash, described as a smaller model in a new asymmetric Causal Encoder–Decoder architecture with 552B total parameters and 8B active input / 16B active output parameters. It adds native visual understanding, lower KV-cache requirements, and is live on the DeepSeek API under `deepseek-flash`. DeepSeek states that V4-Flash and V4-Flash-Vision-Exp are retired, with compatibility names temporarily routing to V4.1-Flash. Starting 2026-09-14 04:00 UTC, all `deepseek-v4-pro` requests will route to V4.1-Flash at V4.1-Flash rates until V4.1-Pro launches. New pricing took effect 2026-09-10 04:00 UTC and uses peak/off-peak rates, with off-peak at 50% of peak.

## Official fact vs inference

### Official fact
- V4.1-Flash is live on the DeepSeek API with native multimodal support.
- Prior V4-Flash and V4-Flash-Vision-Exp names are retired or compatibility-routed.
- V4-Pro routing changes on 2026-09-14 04:00 UTC.
- Pricing changed on 2026-09-10 04:00 UTC to peak/off-peak billing.

### Deep Drift inference
- Existing V4-Pro and V4-Flash baselines will become non-stationary because model identity, routing, and price can change under the same API name.
- Cached-context and agent-cost comparisons may improve materially because DeepSeek reports 1/4 HBM and 1/8 SSD KV-cache requirements.
- Multimodal and agentic results may shift even when prompts are unchanged.

## Pricing before/after

The official announcement states that new pricing took effect 2026-09-10 04:00 UTC and that off-peak rates are half of peak rates. The current pricing page should be treated as the post-change baseline; exact legacy values are not restated in this log because the official announcement does not provide a complete before/after table.

## Why this matters to Deep Drift

Previous Deep Drift results for V4-Flash, V4-Flash-Vision-Exp, and V4-Pro may now be stale or invalid because aliases can route to a different model and V4-Pro is scheduled to route to V4.1-Flash. Commercial-normalization tests also change because workload timing now affects cost.

## Retest recommendation

- **Existing test(s) to rerun:** Full DeepSeek V4 comparative sweep; multimodal image understanding; tool calling; Responses API compatibility; long-context stability; agent loop completion; cached-input economics; peak/off-peak cost normalization; alias-routing identity check.
- **Additional test to add:** A routing invariance test that calls each legacy alias and records returned model metadata, capability behavior, and price at peak versus off-peak windows. Add a native-vision task with fixed image dimensions and a cache-hit versus cache-miss pair.
- **Variables to hold constant:** Prompt, image file and dimensions, API surface, temperature/effort controls, tool definitions, token budget, region, account, concurrency, time window except when intentionally testing peak/off-peak, and retry policy.
- **Likely confounders:** Server-side routing, cache state, peak/off-peak timing, partner-layer wrappers, hidden model revisions, image tokenization, and concurrency throttling.

## Comparative dimensions affected

- [ ] Memory / continuity
- [ ] Own-chat-history retrieval
- [ ] Cross-chat / project / folder retrieval
- [ ] Indexing / compilation
- [x] Context / reasoning
- [x] Tools / agents
- [x] Image generation
- [x] Image editing
- [x] Visual identity / personality fidelity
- [x] API pricing
- [ ] Subscription packaging
- [x] Usage limits / access / regions

## Sources

1. DeepSeek official announcement: https://www.deepseek.com/en/news/deepseek-v4-1-flash/
2. DeepSeek API pricing documentation: https://api-docs.deepseek.com/quick_start/pricing
