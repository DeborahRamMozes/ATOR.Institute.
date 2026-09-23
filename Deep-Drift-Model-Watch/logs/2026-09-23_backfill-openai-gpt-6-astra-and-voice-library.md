# OpenAI — GPT-6 Astra / ChatGPT Voice and Library — Backfill of previously reported qualifying changes

- **Detected:** 2026-09-23 16:34 Asia/Jakarta
- **Provider:** OpenAI / ChatGPT
- **Product/model:** GPT-6 Astra; ChatGPT Voice; ChatGPT Library
- **Announcement date:** 2026-09-03 (GPT-6 Astra); 2026-09-09 (Voice and Library update)
- **Release/availability date:** Staged from the announcement dates; surface- and plan-dependent
- **Rollout status:** GPT-6 Astra staged rollout; Voice/Library staged and plan-dependent
- **Affected plans/regions:** ChatGPT Plus, Pro, Business, Enterprise; OpenAI API for Astra; Voice and Library availability varies by plan/account. No complete regional exclusion matrix was stated in the cited official materials.
- **Official source(s):**
  - OpenAI GPT-6 Astra announcement and model documentation
  - OpenAI ChatGPT Release Notes
- **Pricing before/after:** GPT-6 Astra API pricing is recorded in the earlier canonical Astra log. The Voice/Library update did not state a new subscription price in the reviewed material.
- **Evidence strength:** High
- **Retest priority:** Critical

## What changed

### GPT-6 Astra
OpenAI introduced GPT-6 Astra as a new flagship model for advanced reasoning, coding, computer use, research, and document creation. The existing repository log dated 2026-09-03 already records the detailed API context window, reasoning controls, staged rollout, pricing, and long-running agent controls.

### Voice and Library
OpenAI subsequently expanded ChatGPT Voice so supported accounts can use GPT-5.6 or GPT-6 Astra for search or harder reasoning, with model/reasoning behavior aligned more closely to text chat. The same update expanded Library sharing so shared files and folders can be used as conversation context.

## Official fact vs inference

### Official fact
- GPT-6 Astra is a separate flagship model and is being rolled out across OpenAI surfaces.
- ChatGPT Voice can route some work to newer reasoning models.
- Shared Library files/folders can be used in conversations where the feature is available.
- Plan-specific voice limits and fallback behavior differ by tier.

### Deep Drift inference
- Astra invalidates older OpenAI frontier baselines where the task depends on reasoning, long context, tool use, computer use, or document production.
- Voice model routing creates a multimodal parity problem: a “voice” test may no longer be testing one fixed model.
- Shared Library access changes the effective context boundary from session-only input toward persistent user-controlled workspace context.

## Why previous Deep Drift results may now be stale

A prior OpenAI result may conflate:
1. base-model capability,
2. ChatGPT surface behavior,
3. voice routing,
4. library retrieval,
5. plan-specific quotas.

The correct longitudinal unit is therefore the composed product configuration, not merely the model name.

## Retest recommendation

- **Existing test(s) to rerun:**
  - Full Astra comparative sweep from the canonical 2026-09-03 log.
  - Long-context and protocol compilation tests.
  - Computer-use and tool-execution tests.
  - Voice model-routing and quota tests.
  - Shared Library file/folder retrieval and provenance tests.
  - Cross-session continuity tests with and without Library context.
- **Additional test to add:**
  - **Voice-to-Library continuity test:** provide a file through Library, query it by voice, switch to text, then ask for a follow-up that depends on the earlier retrieval. Score model identity, source grounding, and state continuity.
  - **Routing visibility test:** determine whether the served model and reasoning level remain observable and stable across equivalent Voice requests.
- **Variables to hold constant:** model ID where exposed; account/plan; region; device; app version; language; prompt wording; Library contents; enabled connectors; tool permissions; retry policy; evaluation rubric.
- **Likely confounders:** hidden routing, staged rollout, account entitlements, voice-specific system prompts, file indexing latency, plan quotas, cached context, and UI-specific context transformations.

## Comparative dimensions affected

- [x] Memory / continuity
- [x] Own-chat-history retrieval
- [x] Cross-chat / project / folder retrieval
- [x] Indexing / compilation
- [x] Context / reasoning
- [x] Tools / agents
- [ ] Image generation
- [ ] Image editing
- [ ] Visual identity / personality fidelity
- [ ] API pricing
- [x] Subscription packaging
- [x] Usage limits / access / regions

## Sources

1. OpenAI GPT-6 Astra official announcement/model documentation.
2. OpenAI ChatGPT Release Notes.
3. Existing canonical repository entry: `Deep-Drift-Model-Watch/logs/2026-09-03_openai_gpt-6-astra-launch.md`
