# Google - WeatherNext 3 in Gemini - Model and rollout change affecting multimodal/contextual answers

- **Detected:** 2026-09-07 07:14 Asia/Jakarta
- **Announcement date:** 2026-09-03
- **Release/availability date:** 2026-09-03, beginning rollout across Google Search, Gemini app, Google Maps, Google Maps Platform Weather API, and Google Earth Engine
- **Rollout status:** Beginning rollout; Google states global availability across the listed products
- **Affected plans/regions:** Gemini app users and Google product/API users globally; exact account-tier distinctions were not specified in the announcement
- **Official source:** https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/
- **Evidence strength:** High
- **Retest priority:** Medium

## What changed

Google introduced WeatherNext 3, a new AI weather forecasting model using real-time satellite observations, hourly refreshes, higher spatial resolution, precipitation-focused improvements, and clean-energy variables. Google states that WeatherNext 3 begins powering weather experiences in Gemini and related Google products globally. The model produces hourly forecasts with multiple spatial resolutions, including approximately 5-kilometer resolution for key surface variables, compared with WeatherNext 2 at a 25-kilometer grid in 6-hour increments.

## Official fact vs inference

### Official fact
- WeatherNext 3 was announced on 2026-09-03.
- It is integrated into Gemini and several Google products and APIs.
- Google states global rollout beginning immediately and reports improved precipitation forecasting and resolution.

### Deep Drift inference
- Gemini answers involving current weather, planning, location-aware reasoning, or environmental context may now depend on a materially different external model and data-refresh cadence.
- Comparisons of Gemini's factuality, tool use, grounding, and temporal continuity can become stale when weather is part of the task, even if the Gemini language model itself is unchanged.

## Why this matters to Deep Drift

This is not a Gemini base-model launch, but it changes the composed system that a user experiences when Gemini answers weather or planning questions. Prior tests that treated Gemini as a static language model may not be comparable after the WeatherNext 3 integration. The change is especially relevant to tool-grounded reasoning, live-data retrieval, temporal accuracy, and answer calibration under changing environmental inputs.

## Retest recommendation

- **Existing test to rerun:** Connected-data retrieval; tool selection; temporal grounding; source attribution; multi-step planning that uses live conditions.
- **Additional test to add:** Repeated location-specific weather prompts across Gemini app and API surfaces at fixed timestamps, comparing forecast retrieval, uncertainty language, precipitation details, and consistency with the underlying weather endpoint.
- **Variables to hold constant:** Location; timestamp; prompt wording; account tier; region; Gemini model/surface; enabled tools; language; units; network conditions; retry policy.
- **Likely confounders:** Real-world weather changes; forecast horizon; regional data coverage; caching; product-surface differences; API versus consumer-app formatting; latency; local timezone handling.

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
- [ ] API pricing
- [ ] Subscription packaging
- [x] Usage limits / access / regions

## Sources

1. Google DeepMind / Google, "Introducing WeatherNext 3, our most advanced and accurate global weather AI model," 2026-09-03: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/
2. Repository governing schema: `Deep-Drift-Model-Watch/README.md`, `RETEST_MATRIX.md`, and `logs/README.md`
