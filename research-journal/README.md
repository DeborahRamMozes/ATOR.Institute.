# ATØR Institute Research Journal

## Canonical filing rule

Research logs are chronological records, not category-folder collections.

Every research stream keeps only:

```text
research-journal/
  <research-stream>/
    README.md
    YYYY-MM-DD.md
```

A daily file contains every observation for that calendar day in chronological order.

Each entry begins with an honest local timestamp:

```text
## HH:MM WIB
```

Use `HH:MM:SS` only when seconds are actually known. When time is unavailable, write:

```text
## TIME UNKNOWN
```

Never invent missing precision.

Evidence, source registry, hypothesis changes, counter-hypotheses, protocol changes, daily synthesis, provenance, and next tests belong inside the relevant daily file under the timestamp that produced them. They do not create separate `logs/`, `daily-synthesis/`, `evidence-registry/`, `protocol-patches/`, `templates/`, `data/raw/`, `provenance/`, or `blackpapers/` directory trees.

Editorial outputs such as Black Papers and public essays remain outside the research journal. The journal records their production and provenance but does not duplicate them as separate research-log folders.

## Why

Temporal order is part of the evidence. The repository should answer three questions immediately:

1. What day was the research performed?
2. At what time was each observation recorded?
3. What changed after the previous observation?

The folder architecture must not become more complicated than the research chronology itself.
