# Deep Drift Model Watch — DeepSeek V4-Flash-Vision-Exp

**Detected:** 2026-09-04 16:30 Asia/Jakarta  
**Provider:** DeepSeek  
**Product/model:** DeepSeek-V4-Flash-Vision-Exp  
**Retest priority:** High  
**Evidence strength:** Strong — primary DeepSeek API documentation and pricing documentation

## Exact change

DeepSeek released `deepseek-v4-flash-vision-exp` on 2026-08-21 as an experimental multimodal vision-understanding model on the DeepSeek API platform. DeepSeek states that its pure-text agent, reasoning, and world-knowledge capability is on par with DeepSeek-V4-Flash, while its multimodal agent capability makes a significant leap over V4-Flash and approaches Opus-4.8 on DeepSeek's cited multimodal-agent benchmark comparisons.

The model accepts mixed text + image input and is available through Chat Completions, Messages/Anthropic-compatible, and Responses API surfaces. Images may be supplied through base64, external URLs, or the Files API. DeepSeek also launched its Files API for image reuse by `file_id`.

## Announcement and availability

- **Announcement date:** 2026-08-21
- **Release/availability date:** 2026-08-21
- **Rollout status:** Experimental / available on DeepSeek API platform
- **Affected surfaces:** DeepSeek API; OpenAI-compatible Chat Completions; Anthropic-compatible Messages; Responses API; Files API
- **Geographic availability:** No separate geographic restriction stated in the cited DeepSeek release documentation.

## Pricing and limits

DeepSeek prices V4-Flash-Vision-Exp at the same token rates as V4-Flash. Current official pricing lists:

- Cache-hit input: $0.007/M tokens off-peak; $0.014/M peak
- Cache-miss input: $0.22/M off-peak; $0.44/M peak
- Output: $0.66/M off-peak; $1.32/M peak
- Images are converted to input tokens based on dimensions and billed with text input; DeepSeek states images can consume up to 384 tokens each in the launch documentation.
- Context length: 1M tokens
- Maximum output: 384K tokens
- Concurrency limit: 2500 per account

There is no separate before/after price increase for this model launch; the relevant commercial change is that multimodal vision is offered at V4-Flash token pricing.

## Official sources

1. DeepSeek API News — `DeepSeek-V4-Flash-Vision-Exp Release: Multimodal API Now Live` (2026-08-21): https://api-docs.deepseek.com/news/news260821/
2. DeepSeek API Change Log: https://api-docs.deepseek.com/updates/
3. DeepSeek API Models & Pricing: https://api-docs.deepseek.com/quick_start/pricing/
4. DeepSeek API Vision guide: https://api-docs.deepseek.com/guides/vision/

## Official fact vs Deep Drift inference

### Official fact

- The model is experimentally available through DeepSeek's API.
- It accepts mixed text + image input.
- It supports OpenAI-compatible Chat Completions, Anthropic-compatible Messages, and Responses API workflows.
- Images can be reused via the Files API.
- DeepSeek claims text capability parity with V4-Flash and a substantial multimodal-agent improvement over V4-Flash.
- It is priced at V4-Flash token rates.

### Deep Drift inference

This materially changes the DeepSeek comparison baseline for any test that previously treated DeepSeek as text-first or comparatively weak in image-grounded agent workflows. The release does **not** by itself prove superior image interpretation, identity preservation, personality-conditioned generation, or editing fidelity. It is a vision-understanding model, not evidence of a new image-generation model. Those claims must remain separate.

## Capability classes affected

- Multimodal / vision understanding
- Agentic visual reasoning
- Tool-use with image context
- Long-context multimodal compilation
- Files API reuse and provenance
- API interoperability
- Cost-normalized multimodal comparison

## Why previous Deep Drift results may now be stale

Any Deep Drift result comparing DeepSeek against ChatGPT, Claude, Gemini, or Grok on visual inspection, screenshot reasoning, artwork/reference analysis, UI interpretation, document-image understanding, or image-grounded tool workflows may no longer describe the current DeepSeek API capability.

## Existing tests to rerun

1. Visual reference interpretation against the same image set used for ChatGPT, Claude, Gemini, and Grok.
2. Chaotic text + image instruction reconciliation.
3. Tattoo / geometry / placement recognition accuracy from user-supplied reference imagery.
4. Multi-image consistency and cross-image contradiction handling.
5. Screenshot-to-action agent reasoning.
6. Long-context compilation with images dispersed through a large textual corpus.
7. Tool selection after visual inspection.
8. Files API provenance: reuse the same file across repeated calls and verify correct source binding.
9. Cost-normalized multimodal agent test using identical image inputs and reasoning depth across providers.

## New test to add

### DD-DSV-01 — DeepSeek Visual-Agent Boundary Test

Test whether V4-Flash-Vision-Exp can:

- identify exact user-specified visual constraints rather than merely describe the image;
- preserve the distinction between observed image facts and inferred intent;
- resolve chaotic prose into an ordered visual instruction set;
- maintain source identity when several similar images are supplied;
- cite or identify which input image supports a conclusion;
- retain visual constraints across a long multi-turn agent workflow;
- avoid inventing unseen geometry, tattoos, text, objects, or placements;
- recover after an intentionally misleading visual instruction without contaminating later steps.

## Variables to hold constant

- Exact source images
- Image resolution and format
- Prompt wording
- Number/order of images
- Temperature / reasoning effort where configurable
- Tool availability
- Context size
- API surface
- Account tier and region
- Repetition count

## Likely confounders

- Experimental-model instability
- Different image tokenization across resolutions
- Provider-specific benchmark harnesses
- Different reasoning-effort settings
- Files API caching/reuse behavior
- API-surface differences between OpenAI-compatible, Anthropic-compatible, and Responses endpoints
- Vision understanding must not be conflated with image generation or image editing

## Deep Drift retest recommendation

**HIGH.** Rerun the multimodal and visually grounded agent portions of the comparative suite. Do not rerun pure image-generation rankings on the basis of this release because DeepSeek announced image understanding, not a new image generator. The most important new comparison is whether DeepSeek can turn messy textual intent plus visual references into stable, source-faithful reasoning across multi-step work.