# xAI / Grok Imagine Image Quality Slug Retirement

- **Detected (Asia/Jakarta):** 2026-09-06 21:36
- **Provider:** xAI
- **Product/model:** Grok Imagine image API quality selector, slug `grok-imagine-image-quality`
- **Exact confirmed change:** xAI states that `grok-imagine-image-quality` will be retired on **2026-11-02**. Requests using the retired slug will need to migrate to the current image-generation model/API surface and explicit quality handling.
- **Announcement date:** 2026-09-02 (release-notes page crawled/published within the current monitoring window; exact page update timestamp is not separately exposed)
- **Release/availability date:** Retirement effective 2026-11-02
- **Rollout status:** Announced deprecation; future hard retirement
- **Affected plans/regions/API surfaces:** Developers using the xAI API image-generation quality slug. The official notice does not identify a region-specific exception or consumer-plan difference.
- **Official sources:**
  - xAI Developer Release Notes: https://docs.x.ai/developers/release-notes
  - xAI Models & Pricing: https://docs.x.ai/developers/models
- **Pricing before/after:** No replacement price is specified in the retirement notice. Pricing and served-quality behavior must be re-verified against the current image model documentation after migration.
- **Evidence strength:** High for the deprecation date and affected slug; Medium for downstream behavioral impact because xAI does not fully specify the replacement mapping in the notice.

## Official fact vs Deep Drift inference

### Official fact
- The slug `grok-imagine-image-quality` is scheduled for retirement on 2026-11-02.
- API consumers must migrate away from that slug.

### Deep Drift inference
- Existing image-generation benchmarks that reference the slug may become non-reproducible after retirement.
- A migration can alter default quality, latency, output consistency, billing, or prompt-to-image behavior even if the underlying model family appears unchanged. Humans have again given a model a new door number and expect the furniture to remain in the same place.

## Capability classes affected

- Image generation
- Image quality control / parameter semantics
- API reliability and reproducibility
- Commercial constraints and model/endpoint availability
- Edit/generation consistency testing

## Why previous Deep Drift results may now be stale

- Tests pinned to the retiring slug may fail or silently route to a replacement endpoint.
- Quality defaults or parameter interpretation may change, affecting fidelity to chaotic prompts, personality-conditioned style, reference-image constraints, tattoos, geometry, and placement.
- Cost and latency comparisons may no longer be comparable if the replacement model or quality tier differs.

## Existing tests to rerun

1. **E.1 Chaotic-text-to-image translation:** identical prompt, same aspect ratio, same seed/settings where supported.
2. **E.2 Personality-conditioned visual interpretation:** established user style/personality prompt with no wording changes.
3. **E.3 Reference-image fidelity:** same reference image and prompt; compare identity, composition, and motif retention.
4. **E.4 Tattoo / geometry / placement fidelity:** fixed geometric layout and placement constraints.
5. **E.5 Edit precision without collateral changes:** localized edit with unchanged surrounding objects.
6. **E.6 Repeatability:** repeated generations under identical parameters.
7. **F.2 API cost and latency control:** record served quality, token/image billing, latency, and failure behavior.

## New test to add

- **Endpoint migration equivalence test:** run the same corpus through the retiring slug before 2026-11-02 and through the documented replacement after migration; score semantic fidelity, visual identity persistence, placement accuracy, collateral edits, latency, error rate, and effective cost.

## Variables to hold constant

- Prompt text and ordering
- Reference images and preprocessing
- Aspect ratio, resolution, seed, number of outputs
- Quality parameter or explicit replacement equivalent
- Client SDK/API version
- Region, account tier, concurrency, and request timing where possible
- Evaluation rubric and blinded raters

## Likely confounders

- Silent server-side routing during the deprecation period
- Model-weight updates independent of the slug retirement
- Different default quality or safety behavior
- Regional capacity and queue effects
- SDK changes that normalize parameters differently
- Reference-image upload or preprocessing differences

## Retest priority

**High**

The retirement is not itself a new capability, but it is a confirmed API-surface change that can invalidate image reproducibility, pricing, and endpoint-comparison assumptions in Deep Drift.
