# xAI — Grok Bot / Grok Build / Imagine Image API — Backfill of previously reported qualifying changes

- **Detected:** 2026-09-23 16:34 Asia/Jakarta
- **Provider:** xAI / Grok
- **Product/model:** Grok Bot; Grok Build; Grok Imagine image API
- **Announcement dates:** 2026-08-19, 2026-08-26, 2026-09-02, 2026-09-03
- **Release/availability dates:** Same dates for the relevant access/announcement changes; Grok Imagine migration effective 2026-11-02
- **Rollout status:** Available / staged / deprecation depending on surface
- **Affected plans/regions:** Grok web/mobile plans, Cursor plans, enterprise customers, and xAI API developers. No complete regional exclusion matrix was stated in the reviewed official materials.
- **Official source(s):**
  - xAI Newsroom
  - xAI Developer Release Notes
  - xAI Imagine migration documentation
- **Pricing before/after:** The canonical existing image-retirement log already records the documented $0.01/image difference for the low-quality replacement and warns against using `auto` for controlled comparisons. No durable subscription price change was established for Grok Bot/Build in the reviewed announcements.
- **Evidence strength:** High
- **Retest priority:** Critical

## What changed

### Grok Bot / persistent agents
xAI disclosed a persistent-agent design in which Grok Bots can retain relevant conversational context, maintain persistent presence, continue work without a fresh prompt, use a computer, save routines, and coordinate with other Bots. Enterprise availability was later expanded with access, network, audit, and isolation controls. Additional plan expansion and broader Grok Build access changed the entitlement surface.

### Grok Build
xAI made Grok Build available across all web/mobile plans in the cited newsroom announcement, materially changing the baseline for app-generation, iterative repair, and tool-execution comparisons.

### Imagine Image API
xAI announced retirement of the `grok-imagine-image-quality` API slug effective 2026-11-02, with migration to `grok-imagine-image-2.0` and explicit quality controls. The repository already contains two material duplicates of this event; no new duplicate file is being created for the retirement itself.

## Official fact vs inference

### Official fact
- Grok Bot has a persistent-agent product design.
- Enterprise access added governance and isolation controls.
- Grok Bot and Grok Build received broader plan access.
- The Imagine image-quality slug is scheduled for retirement and migration.

### Deep Drift inference
- Earlier Grok comparisons may have been conducted on a narrower access surface and therefore mixed model capability with entitlement.
- Persistent Bot behavior introduces a new memory unit and provenance boundary that is not represented by ordinary chat tests.
- The image API migration can silently invalidate longitudinal image baselines.

## Why previous Deep Drift results may now be stale

The same Grok brand now spans:
1. ordinary chat,
2. persistent Bot agents,
3. governed enterprise Bots,
4. Build workflows,
5. image generation/editing API surfaces.

Treating those as one “Grok” baseline collapses product architecture into a marketing label and destroys the experiment.

## Retest recommendation

- **Existing test(s) to rerun:**
  - Persistent-Agent Boundary Test.
  - Cross-session recovery and abandoned-thread pickup.
  - Cross-Bot context-sharing and contamination.
  - Enterprise isolation and authorization-boundary tests.
  - Grok Build create/modify/repair workflow.
  - Image generation/editing, tattoo/geometry/placement, identity, and multi-reference tests.
- **Additional test to add:**
  - **Composed-surface matrix:** identical task corpus across ordinary Grok, Grok Bot, enterprise Bot, Grok Build, and image API. Score continuity, retrieval, tool state, provenance, latency, and cost separately.
  - **Silent image redirect provenance test:** compare served model/quality and billing immediately before and after 2026-11-02.
- **Variables to hold constant:** prompt corpus; account tier; region; tool/connector permissions; model identifier where exposed; reference images; image dimensions; quality level; retry policy; evaluation rubric.
- **Likely confounders:** staged rollout; hidden routing; enterprise admin controls; background execution; connector indexing; image randomness; automatic quality selection; quota differences.

## Comparative dimensions affected

- [x] Memory / continuity
- [x] Own-chat-history retrieval
- [x] Cross-chat / project / folder retrieval
- [x] Indexing / compilation
- [x] Context / reasoning
- [x] Tools / agents
- [x] Image generation
- [x] Image editing
- [x] Visual identity / personality fidelity
- [ ] API pricing
- [x] Subscription packaging
- [x] Usage limits / access / regions

## Sources

1. xAI official news / Grok Bot design and enterprise access materials.
2. xAI official newsroom entries for Grok Build and plan expansion.
3. xAI developer release notes and Imagine migration documentation.
4. Existing canonical repository entries under `Deep-Drift-Model-Watch/logs/`.
