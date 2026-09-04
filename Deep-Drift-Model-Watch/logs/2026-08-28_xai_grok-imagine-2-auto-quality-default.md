# Deep Drift Model Watch — xAI Grok Imagine 2.0 Auto-Quality Default

**ĀTØR Institute | Deep Drift Project**

- **Detected:** 2026-09-04 21:53 Asia/Jakarta
- **Provider:** xAI / SpaceXAI
- **Product / model:** `grok-imagine-image-2.0`
- **Announcement / release date:** 2026-08-28
- **Rollout status:** Available in xAI API
- **Retest priority:** HIGH
- **Evidence strength:** High — primary xAI API release notes

## Exact confirmed change

xAI changed the `quality` behavior for `grok-imagine-image-2.0`:

1. The `quality` parameter now accepts `auto`.
2. When `quality` is omitted, the default changed from `medium` to `auto`.
3. `auto` currently resolves to `low` for image generation and `medium` for image editing.
4. Billing follows the quality level actually served.
5. Callers can explicitly pass `low` or `medium` to pin a reproducible quality level.
6. Image editing now accepts up to five source images per request, increased from three.
7. Image generation and editing added `21:9` and `5:2` aspect ratios.

## Official source

- xAI API Release Notes: https://docs.x.ai/developers/release-notes

## Affected surfaces

- xAI API
- Grok Imagine image generation
- Grok Imagine image editing
- Multi-image reference editing
- Cost-normalized image-generation benchmarks
- Any Deep Drift test that omitted an explicit `quality` value

## Pricing / serving behavior

No universal flat price change is stated for this update. The material commercial change is **dynamic serving and billing under `quality: auto`**. An omitted quality parameter can now produce a lower-quality generation path than the former `medium` default, with billing corresponding to the served quality.

This means two otherwise identical historical API requests can no longer be assumed to be experimentally equivalent if one was run before and one after the default change.

## Official fact vs Deep Drift inference

### Official fact

xAI states that omitted quality now defaults to `auto`; auto currently serves `low` for generation and `medium` for editing; billing follows served quality; editing accepts five source images; and two additional wide aspect ratios are supported.

### Deep Drift inference

This is a reproducibility-breaking default change for uncontrolled image benchmarks. Any earlier Deep Drift comparison that did not explicitly pin `quality` may now measure a different serving mode rather than an actual change in prompt interpretation, identity fidelity, geometry preservation, or model intelligence.

The increase from three to five reference images also changes the ceiling for identity-preservation and complex visual-constraint tests.

## Capability classes affected

- Image generation
- Image editing
- Multi-reference conditioning
- Visual identity persistence
- Reference-image fidelity
- Tattoo / geometry / placement fidelity
- Commercial constraints / cost normalization
- Reproducibility and benchmark provenance

## Why previous Deep Drift results may now be stale

Previous Grok Imagine runs that omitted `quality` may have used `medium`, while equivalent requests now use `auto`, which currently resolves to `low` for generation. A quality difference can masquerade as a capability regression or stylistic drift.

Likewise, older tests constrained to three references no longer represent the current maximum conditioning capacity.

## Existing tests to rerun

1. Chaotic-text-to-image interpretation benchmark.
2. Personality-conditioned visual translation benchmark.
3. Visual identity persistence benchmark.
4. Tattoo geometry and placement fidelity benchmark.
5. Reference-image fidelity benchmark.
6. Repeated-generation consistency benchmark.
7. Cost-normalized image comparison against ChatGPT, Gemini, Claude-linked image workflows, and other image systems in the Deep Drift matrix.

Run each generation benchmark with explicit `quality: low` and `quality: medium`; do not compare an omitted-quality request against a pinned-quality historical result.

## New test: DD-XAI-AQD-01 — Auto Quality Drift Test

Execute the same prompt/reference package three ways:

- `quality: auto`
- `quality: low`
- `quality: medium`

Record:

- served quality where exposed
- billed cost
- identity similarity
- reference-detail preservation
- tattoo/geometry placement accuracy
- text-placement accuracy
- collateral edit rate
- composition adherence
- repeatability across multiple runs

Repeat for both pure generation and image editing.

## New test: DD-XAI-MRI5-01 — Five-Reference Identity Saturation

Run the same identity-preservation task using 1, 3, and 5 source images. Determine whether additional references improve identity/geometry retention or introduce cross-reference averaging and visual contamination.

## Variables to hold constant

- Exact prompt text
- Reference images and ordering
- Aspect ratio
- Seed, if exposed
- API endpoint
- model slug
- generation count
- region/account
- evaluation rubric
- timestamp and pricing snapshot

## Likely confounders

- `auto` serving policy may change again without the model slug changing.
- Quality can alter detail fidelity independently of semantic prompt understanding.
- Reference-image count can improve identity fidelity while simultaneously increasing conflicting visual constraints.
- Backend revisions may occur under a stable public slug.
- Comparing historical outputs without preserved request metadata can produce false capability conclusions.

## Deep Drift conclusion

**Retest priority: HIGH.** This is not merely a convenience parameter. It changes the default serving path of Grok Imagine 2.0 and therefore directly affects the validity of longitudinal image-generation comparisons. Future Deep Drift image tests should explicitly pin quality and record it as a mandatory provenance field.
