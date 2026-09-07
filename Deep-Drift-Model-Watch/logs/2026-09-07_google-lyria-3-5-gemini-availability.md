# Google — Lyria 3.5 in Gemini — Music-model launch and API/app availability

- **Detected:** 2026-09-07 10:52 Asia/Jakarta
- **Announcement date:** 2026-09-04
- **Release/availability date:** 2026-09-04 (announced as available)
- **Rollout status:** GA / available in Gemini app and Gemini API; Google Flow Music availability is also referenced by Google DeepMind, with surface-specific access subject to account and region rollout.
- **Affected plans/regions:** Gemini app users and Gemini API developers; exact regional exclusions were not specified in the official announcement. Availability may vary by product surface, account tier, and local rollout.
- **Official source:** Google Blog, “Create your best tracks yet with Lyria 3.5 in Gemini”; Google DeepMind model index/news.
- **Evidence strength:** High
- **Retest priority:** Medium

## What changed

Google announced Lyria 3.5 as a new music-generation model available in the Gemini app and Gemini API. The announcement describes improved musicality, lyrics, vocals, acoustic detail, and creative control relative to earlier Lyria generations. This is a material multimodal/audio model change and an API/app availability change, even though it does not directly alter text-only reasoning benchmarks.

## Official fact vs inference

### Official fact

- Google states that Lyria 3.5 is available in the Gemini app and Gemini API.
- Google describes improvements in vocals, lyrics, acoustic detail, musicality, and creative control.
- The official announcement is dated 2026-09-04.
- The announcement does not establish a universal global rollout matrix or a single consumer subscription price change.

### Deep Drift inference

- Prior audio-generation, prompt-to-structure, lyric adherence, style-conditioning, and edit/variation results may be stale if they were produced on an earlier Lyria model or a different Gemini surface.
- Cross-surface comparisons may be confounded by different safety filters, generation limits, queueing, model defaults, and account entitlements.
- Because audio generation is an output modality, results should not be merged into the same ranking as text/image models without a separate modality scorecard.

## Why this matters to Deep Drift

Lyria 3.5 changes the model family’s multimodal capability surface and expands Gemini’s creative production layer. Earlier Deep Drift conclusions about Gemini’s ability to translate underspecified or personality-heavy creative prompts into structured outputs may no longer hold for music/audio tasks. The practical question is not whether Google says “better,” a phrase vendors deploy with the reliability of weather forecasts, but whether the new model improves semantic adherence, identity/style continuity, arrangement control, and repeatability under controlled prompts.

## Retest recommendation

- **Existing test(s) to rerun:**
  - Multimodal instruction-following tests where one prompt must preserve a named style, mood, structure, and recurring motif.
  - Creative continuity tests across repeated generations and revision prompts.
  - Prompt-to-output fidelity tests with intentionally chaotic or underspecified briefs.
  - Account/surface availability tests across Gemini app and Gemini API.
- **Additional test to add:**
  - Audio identity/style persistence test: generate three tracks from the same established creative brief, then request targeted edits to vocal character, instrumentation, tempo, and lyrical motif while preserving untouched properties.
  - Revision-locality test: change one parameter at a time and score collateral drift in melody, arrangement, lyrics, and vocal delivery.
  - API-versus-app parity test using matched prompts and normalized output settings.
- **Variables to hold constant:**
  - Exact model identifier and API version.
  - Prompt text, language, requested duration, aspect of musical structure, and seed/randomness controls where exposed.
  - Account tier, region, client surface, tool permissions, and safety settings.
  - Number of retries, timeout policy, and post-processing.
- **Likely confounders:**
  - Hidden model routing or automatic fallback.
  - Surface-specific prompt rewriting and safety filtering.
  - Unexposed randomness/seed behavior.
  - Different audio codecs, loudness normalization, clipping, and playback devices.
  - Regional or account-based feature gating.

## Comparative dimensions affected

- [ ] Memory / continuity
- [ ] Own-chat-history retrieval
- [ ] Cross-chat / project / folder retrieval
- [ ] Indexing / compilation
- [ ] Context / reasoning
- [ ] Tools / agents
- [x] Image generation
- [ ] Image editing
- [x] Visual identity / personality fidelity
- [ ] API pricing
- [x] Subscription packaging
- [x] Usage limits / access / regions

> Note: The primary affected modality is **audio/music generation**, which is not yet a dedicated checkbox in the governing log schema. It should be tracked as a multimodal extension of creative fidelity and continuity tests rather than mislabeled as image performance.

## Sources

1. Google Blog, “Create your best tracks yet with Lyria 3.5 in Gemini” (2026-09-04).
2. Google DeepMind model/news index listing Lyria 3.5 as a current model.
