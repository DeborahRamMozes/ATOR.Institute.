# Deep Drift Model Watch Logs

This directory stores only qualifying events detected by the hourly Deep Drift Model Watch.

## Filename convention

`YYYY-MM-DD_provider_short-event-title.md`

Examples:

- `2026-09-03_openai_new-model-launch.md`
- `2026-09-03_anthropic_pricing-change.md`
- `2026-09-03_google_cross-chat-memory-rollout.md`

## Required log structure

```markdown
# [Provider] — [Model/Product] — [Change]

- **Detected:** YYYY-MM-DD HH:MM Asia/Jakarta
- **Announcement date:** YYYY-MM-DD
- **Release/availability date:** YYYY-MM-DD or unknown
- **Rollout status:** announced / preview / staged rollout / GA / deprecation
- **Affected plans/regions:**
- **Official source:**
- **Evidence strength:** High / Medium / Low
- **Retest priority:** Critical / High / Medium / Low

## What changed

Concise factual description.

## Official fact vs inference

### Official fact
- ...

### Deep Drift inference
- ...

## Why this matters to Deep Drift

Explain which prior comparison may now be stale or invalid.

## Retest recommendation

- Existing test to rerun:
- Additional test to add:
- Variables to hold constant:
- Likely confounders:

## Comparative dimensions affected

- [ ] Memory / continuity
- [ ] Own-chat-history retrieval
- [ ] Cross-chat / project / folder retrieval
- [ ] Indexing / compilation
- [ ] Context / reasoning
- [ ] Tools / agents
- [ ] Image generation
- [ ] Image editing
- [ ] Visual identity / personality fidelity
- [ ] API pricing
- [ ] Subscription packaging
- [ ] Usage limits / access / regions

## Sources

1. Official source
2. Additional corroboration if needed
```

## Silence rule

No qualifying change means no file. The absence of a daily entry is intentional, not missing data.
