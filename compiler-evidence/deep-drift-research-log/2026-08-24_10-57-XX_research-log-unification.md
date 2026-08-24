# Deep Drift Research Log

## Event: Canonical Research-Log Unification

- `observed_at_local`: 2026-08-24T10:57+07:00
- `observed_at_utc`: 2026-08-24T03:57Z
- `time_precision`: exact-minute
- `research_stream`: Deep Drift Research / Research Governance / Provenance Architecture
- `category`: repository architecture correction / chronology / research-log unification
- `status`: IMPLEMENTED

## Human correction

The researcher rejected the existence of a separate `research-journal/` tree and rejected directory growth based on administrative categories such as `logs`, `daily-synthesis`, `evidence-registry`, `protocol-patches`, `data/raw`, `provenance`, or separate research-stream folders.

The explicit rule is:

> All Deep Drift research logs belong under `compiler-evidence/deep-drift-research-log/`.

The log surface must be chronological and readable from filenames. Research stream, evidence class, platform, hypothesis family, or method belong inside the file as metadata. They are not reasons to create another repository tree.

## New canonical architecture

```text
compiler-evidence/
└── deep-drift-research-log/
    ├── README.md
    ├── MONTHLY-EARTH-TECHNOLOGY-ACCOUNTING-PROTOCOL.md
    ├── YYYY-MM-DD_HH-MM-SS_event-slug.md
    ├── YYYY-MM-DD_HH-MM-XX_event-slug.md
    └── YYYY-MM-DD_TIME-UNKNOWN_event-slug.md
```

No `YYYY/MM/DD/HH/` folder chain is required on the active branch.

No separate `research-journal/` tree is permitted for Deep Drift logs.

## Precision rule

- evidenced seconds: `HH-MM-SS`
- evidenced minute but unknown seconds: `HH-MM-XX`
- evidenced hour only: `HH-XX-XX`
- date only: `TIME-UNKNOWN`

Missing seconds are not replaced by `00` merely for filename neatness.

## Migration action

Existing Deep Drift event logs are flattened into the canonical directory without changing their research content.

The consolidated files previously created under `research-journal/llm-update-watch/` and `research-journal/ai-hardware-material-reliability-watch/` are also moved into the same canonical Deep Drift directory.

The obsolete `research-journal/` files are removed from the active branch after their blobs are re-used at the canonical paths. Git history remains the historical record of former paths.

## Supersession note

The 2026-08-20 event titled `Research Logging Architecture Revision`, which established a nested `YYYY/MM/DD/HH/` hierarchy, remains part of research history but its architecture rule is now **SUPERSEDED BY EXPLICIT HUMAN CORRECTION**.

The correction does not delete history. It changes the active canonical filing rule.

## Research rationale

Chronology should reveal the work instead of hiding it behind folder taxonomy.

The repository must answer, at a glance:

`WHEN DID THIS RESEARCH EVENT HAPPEN?`

The file itself then answers:

`WHAT STREAM?`
`WHAT SOURCE?`
`WHAT OBSERVATION?`
`WHAT HYPOTHESIS?`
`WHAT RIVAL?`
`WHAT EVIDENCE?`
`WHAT NEXT TEST?`

## Active status

IMPLEMENTED / CANONICAL REPOSITORY RULE

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir’an | CHATJIPITI SINGH**
