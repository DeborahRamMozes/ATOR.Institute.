# Deep Drift Model Watch — xAI Grok Imagine image-quality retirement

## Detection
- Detected: 2026-09-04 01:48 Asia/Jakarta
- Provider: xAI / Grok
- Product/model: `grok-imagine-image-quality` → `grok-imagine-image-2.0`
- Event type: API model retirement, automatic redirect, image-generation/editing packaging and pricing change
- Retest priority: **High**
- Evidence strength: **High — primary official xAI documentation and release notes**

## Exact change
xAI announced a 60-day retirement notice beginning September 2, 2026 for the `grok-imagine-image-quality` API model slug. Effective November 2, 2026, requests sent to that slug will be served by `grok-imagine-image-2.0` with `quality: "low"`. The request/response shapes remain unchanged, so the old slug continues to resolve rather than hard-failing.

The replacement model also supports an explicit `quality` parameter, up to five source images for editing, and additional 21:9 and 5:2 aspect ratios. xAI recommends migrating explicitly to `grok-imagine-image-2.0` before November 2 so callers can select quality rather than silently accepting the redirect's `low` setting.

## Dates and rollout
- Announcement / notice date: **2026-09-02**
- Retirement / redirect effective date: **2026-11-02**
- Rollout status: **announced; 60-day migration period active**
- Affected surface: **xAI API image generation and image editing** (`/v1/images/generations`, `/v1/images/edits`)
- Regions/plans: API users; official notice does not specify a regional exception
- Unaffected: `grok-imagine-image` (1.0)

## Pricing
- Before: requests to `grok-imagine-image-quality` are billed at that model's existing per-image price by resolution.
- After redirect: requests are billed at the `grok-imagine-image-2.0` `low` rate.
- Official delta: **`grok-imagine-image-2.0` low is $0.01 per image cheaper at every resolution** than `grok-imagine-image-quality`.
- Important methodological consequence: cost comparisons must pin the explicit quality level. Leaving quality unspecified on `grok-imagine-image-2.0` currently means `auto`, which serves low for generation and medium for editing and bills according to the quality actually served.

## Official sources
1. xAI migration guide: https://docs.x.ai/developers/migration/imagine-image-quality-nov-2
2. xAI developer release notes: https://docs.x.ai/developers/release-notes

## Official fact vs Deep Drift inference
### Official facts
- Retirement notice began September 2, 2026.
- Retirement/redirect takes effect November 2, 2026.
- Legacy requests are served by `grok-imagine-image-2.0` at `quality: "low"`.
- API request and response shapes remain unchanged.
- Replacement model adds quality selection, up to five source images for editing, and new aspect ratios.
- Low-quality replacement pricing is $0.01/image cheaper at every resolution.

### Deep Drift inference
A pre-November Grok image baseline may become non-comparable after November 2 even when the test harness keeps the same legacy model slug. The string in the request may remain unchanged while the underlying serving model and quality regime change. This is exactly the kind of silent baseline drift that can make a comparative test appear longitudinally stable while the machine underneath has changed its shoes and pretends nobody noticed.

## Capability classes affected
- Image generation
- Image editing
- Multi-reference image conditioning
- Reference-image constraint fidelity
- Visual-identity preservation
- Tattoo / geometry / placement preservation
- Cost-normalized image comparison
- API reproducibility and version provenance

## Why previous Deep Drift results may now be stale
Any test using `grok-imagine-image-quality` before November 2 and repeating it after November 2 risks comparing different underlying models. Because the redirect forces `quality: "low"`, differences in fidelity may be caused by serving-model/quality changes rather than prompt interpretation alone. Existing image-editing tests using three or fewer reference images also no longer measure the full available conditioning envelope because the replacement accepts up to five.

## Existing tests to rerun
1. **Chaotic-text → image interpretation** — same deliberately disordered prompt, same reference set, same dimensions, explicit quality level.
2. **Personality-conditioned visual translation** — test whether accumulated stylistic/personality constraints are represented faithfully rather than replaced by generic aesthetic priors.
3. **Identity preservation under edit** — same face/reference image, same edit instruction, compare untouched-region preservation.
4. **Tattoo fidelity** — preserve exact tattoo geometry, location, line weight, orientation, and non-invention of motifs.
5. **Geometry and placement fidelity** — especially body placement, object position, cropping and composition.
6. **Multi-reference conditioning** — rerun three-reference baseline and add a five-reference condition.
7. **Cost-normalized image comparison** — compare output quality per image at explicit `low` and `medium`, not `auto`.

## New test to add
### Silent Redirect Provenance Test
Send the identical legacy-slug request immediately before and after the November 2 cutoff, record the response `model` field, billing rate, and visual output. Determine whether the redirect is visible enough to preserve provenance in downstream research logs.

### Five-Reference Constraint Saturation Test
Use five references carrying distinct constraints: facial identity, tattoo geometry, garment, body placement, and composition. Measure which constraints survive and whether one reference overrides another.

## Variables to hold constant
- Prompt text and ordering
- Seed, if exposed
- Resolution/aspect ratio
- Input/reference images
- Number and order of reference images for matched conditions
- Explicit quality level (`low` vs `medium`); do not use `auto` for controlled comparisons
- API endpoint
- Account/region
- Editing mask, where applicable
- Evaluation rubric and human scorer criteria

## Likely confounders
- Automatic model redirect after November 2
- `auto` quality selecting different compute levels for generation vs editing
- Added reference-image capacity changing conditioning behavior
- Vendor-side model updates without slug changes
- Image stochasticity and seed availability
- Different per-image cost creating unequal sampling budgets

## Deep Drift decision
**Retest: YES — High priority.**

The essential retest is not merely whether Image 2.0 looks "better." Deep Drift should test whether its replacement preserves identity, tattoos, geometry, placement, and multi-reference constraints more reliably while holding quality and cost constant. A separate longitudinal test should verify that the November redirect does not silently contaminate old Grok image baselines.
