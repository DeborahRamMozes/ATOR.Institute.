# OpenAI — ChatGPT Voice and Library — model routing, usage-limit, and sharing changes

- **Detected:** 2026-09-11 10:56 Asia/Jakarta
- **Announcement date:** 2026-09-09
- **Release/availability date:** 2026-09-09, staged/plan-dependent
- **Rollout status:** staged rollout / plan-dependent
- **Affected plans/regions:** ChatGPT Voice users across Go, Plus, Pro tiers; model availability and limits depend on plan. Library sharing affects ChatGPT users with Library access; official note does not state a complete regional matrix.
- **Official source:** https://help.openai.com/en/articles/6825453
- **Evidence strength:** High
- **Retest priority:** Critical

## What changed

OpenAI updated ChatGPT Voice so it can use GPT-5.6 or GPT-6 Astra when search or harder reasoning is needed, with model and reasoning-effort controls aligned with text chat. OpenAI also changed GPT-Live daily limits: Go up to 3 hours with GPT-Live-1 mini; Plus up to 3 hours with GPT-Live-1; Pro $100 up to 15 hours; Pro $200 unlimited GPT-Live-1. Plus and Pro no longer fall back to GPT-Live mini after reaching a Voice limit, and the separate Instant/Medium/High Voice intelligence levels are deprecated. In the same release-note update, OpenAI introduced Library sharing for sharing files and folders with selected people and working with shared content in conversations.

## Official fact vs inference

### Official fact
- Voice can route to GPT-5.6 or GPT-6 Astra for search or harder questions.
- Voice model/reasoning controls now follow text-chat controls.
- GPT-Live limits differ by Go, Plus, Pro $100, and Pro $200 tiers.
- Plus/Pro fallback behavior changed after reaching a Voice limit.
- Library files and folders can be shared and used in conversations.

### Deep Drift inference
- Voice comparisons are no longer equivalent across plans because model routing and fallback behavior changed.
- The shared Library surface creates a new cross-user retrieval and provenance condition that can affect continuity and compilation tests.
- Previous Voice benchmarks that used deprecated intelligence levels may not be reproducible.

## Pricing before/after

The release note identifies Pro tiers at $100/month and $200/month and changes their included Voice usage. It does not state a new subscription price for Go or Plus in this entry.

## Why this matters to Deep Drift

Previous Voice results may be stale because the same voice prompt can now invoke a different flagship model and because post-limit behavior has changed. Library sharing may also alter which historical files are retrievable by multiple users, making prior single-user retrieval baselines incomplete.

## Retest recommendation

- **Existing test(s) to rerun:** Voice reasoning/search benchmark; plan-gating and quota tests; fallback-after-limit test; model-selection parity between Voice and text; cross-session continuity; file retrieval and provenance tests.
- **Additional test to add:** Shared-Library multi-user handoff test covering owner, invited user, revoked user, folder-level sharing, file-level sharing, stale permission caches, and citation/provenance boundaries.
- **Variables to hold constant:** Plan tier, account role, region, device, voice, prompt, model selector, reasoning effort, tool permissions, file corpus, session length, quota consumed, and network conditions.
- **Likely confounders:** Dynamic server-side model routing, staged rollout, quota accounting latency, fallback policy, file permission propagation, regional availability, and voice transcription variance.

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

1. OpenAI ChatGPT Release Notes: https://help.openai.com/en/articles/6825453
