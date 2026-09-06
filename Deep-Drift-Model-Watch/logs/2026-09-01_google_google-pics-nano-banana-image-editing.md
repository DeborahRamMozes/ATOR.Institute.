# Google — Google Pics — Nano Banana Image Creation and Editing

- Detected: 2026-09-06 20:22 Asia/Jakarta
- Announcement date: 2026-09-01
- Release/availability date: 2026-09-01, staged rollout
- Rollout status: rolling out over coming weeks
- Affected plans/regions: Google AI Pro and Ultra subscribers and most Workspace business customers; Docs and Slides first, Drive planned
- Official source: Google Blog, “Try Google Pics: Easy image creation and editing in Google Workspace”
- Evidence strength: High
- Retest priority: High

## What changed

Google launched Google Pics, an image creation and editing tool built on its Nano Banana image generation and editing model. It provides object segmentation, targeted edits, in-image text editing and translation, multiple generations, collaboration, and Workspace integration. It is rolling out to Google AI Pro and Ultra subscribers and most Workspace business customers, with integration beginning in Docs and Slides and expanding to Drive.

## Official fact vs inference

### Official fact
- Google Pics is built on Nano Banana.
- It supports generation plus targeted image editing, object isolation, in-image text modification/translation, multiple generations, and collaborative editing.
- It is rolling out to Google AI Pro and Ultra subscribers and most Workspace business customers.

### Deep Drift inference
- This is a qualifying image-generation/editing capability change because the editing stack and workflow surface materially change how visual constraints can be preserved and revised.
- Workspace-native context may create a new variable for tests involving documents, brand assets, or reference files.

## Why this matters to Deep Drift

Earlier Gemini image tests that used only free-form prompting are not sufficient to characterize the new editing behavior. Deep Drift should separately measure generation fidelity, localized edits, identity preservation, text preservation, and whether iterative edits accumulate or drift. The Nano Banana model name alone should not be treated as proof of personality conditioning.

## Retest recommendation

- Existing test to rerun: chaotic-text-to-image, reference-image fidelity, tattoo/geometry placement, localized editing, and text-in-image preservation.
- Additional test to add: DD-GPI-01 Iterative Edit Drift Test, measuring identity and layout retention after repeated localized edits.
- Variables to hold constant: source image, prompt, edit sequence, aspect ratio, requested edit region, number of iterations, and account tier.
- Likely confounders: model routing, staged rollout, Workspace integration differences, multiple-generation selection bias, and undocumented backend changes during rollout.

## Comparative dimensions affected

- [ ] Memory / continuity
- [ ] Own-chat-history retrieval
- [ ] Cross-chat / project / folder retrieval
- [x] Indexing / compilation
- [ ] Context / reasoning
- [ ] Tools / agents
- [x] Image generation
- [x] Image editing
- [x] Visual identity / personality fidelity
- [ ] API pricing
- [x] Subscription packaging
- [x] Usage limits / access / regions

## Sources

1. Google, “Try Google Pics: Easy image creation and editing in Google Workspace,” Sep. 1, 2026.
