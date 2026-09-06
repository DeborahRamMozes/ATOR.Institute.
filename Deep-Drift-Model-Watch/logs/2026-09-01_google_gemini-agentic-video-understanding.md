# Google — Gemini Agentic Video Understanding — Dynamic Video Retrieval

- Detected: 2026-09-06 20:22 Asia/Jakarta
- Announcement date: 2026-09-01
- Release/availability date: 2026-09-01
- Rollout status: GA via Gemini API; broader Gemini app rollout announced as coming soon
- Affected plans/regions: Gemini API in Google AI Studio and Gemini Enterprise Agent Platform; supported models Gemini 3.7 Flash, 3.6 Flash, and 3.5 Flash-Lite
- Official source: Google Blog, “Introducing agentic video understanding with Gemini”
- Evidence strength: High
- Retest priority: High

## What changed

Google launched agentic video understanding across Gemini 3.7 Flash, 3.6 Flash, and 3.5 Flash-Lite. Instead of processing video at a fixed frame rate, the model can dynamically search, scan, and inspect relevant segments using frames, audio, and transcripts. Google reports up to 88% lower token consumption, up to 66% lower cost, and up to 7% higher accuracy on its tested benchmarks. The feature is enabled through an agentic processing setting and uses standard Gemini API token pricing with no additional feature fee.

## Official fact vs inference

### Official fact
- Agentic video understanding is available through the Gemini API in Google AI Studio and Gemini Enterprise Agent Platform.
- It can perform sub-second moment retrieval, long-form needle-in-a-haystack search, anomaly detection, and action/object counting.
- Google reports up to 88% token reduction, 66% cost reduction, and 7% accuracy improvement on tested benchmarks.

### Deep Drift inference
- Previous Gemini video tests that assume static frame sampling are not directly comparable after this capability change.
- The relevant experimental variable is now not only model identity but whether agentic processing is enabled.

## Why this matters to Deep Drift

The change materially alters multimodal reasoning and tool-mediated retrieval. Earlier Deep Drift video tests may underestimate Gemini when the model can decide what temporal regions to inspect. Cost-normalized comparisons also become stale because the same model can now achieve different token consumption and effective cost depending on processing mode.

## Retest recommendation

- Existing test to rerun: long-form video needle-in-a-haystack, anomaly detection, temporal localization, counting, and multimodal reasoning tests.
- Additional test to add: DD-GAV-01 Agentic-vs-Static Video Boundary Test, comparing identical prompts and source videos with static and agentic processing.
- Variables to hold constant: source video, prompt, model, output limits, pricing period, temperature/seed where supported, and requested task.
- Likely confounders: benchmark composition, dynamic sampling decisions, video length, audio quality, transcript quality, and Google-reported rather than independently reproduced efficiency figures.

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
- [ ] Subscription packaging
- [x] Usage limits / access / regions

## Sources

1. Google, “Introducing agentic video understanding with Gemini,” Sep. 1, 2026.
