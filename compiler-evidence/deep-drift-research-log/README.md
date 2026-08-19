# Deep Drift Research Log

This directory is the canonical chronological event log for Deep Drift Research / ATØR Institute.

## Canonical Path

`YYYY/MM/DD/HH/HH-MM-SS_event-slug.md`

Example:

`2026/08/20/00/00-36-24_platform-workflow-shift.md`

## Logging Principle

One distinct event equals one distinct file.

An event may be:

- a new observation;
- a platform or model behavior change;
- a contradiction;
- a new hypothesis;
- a counter-hypothesis;
- an experiment;
- a failed execution;
- a tool or connector failure;
- an artifact-generation failure;
- a provenance finding;
- a compiler/node revision;
- a benchmark revision;
- a source validation;
- a correction to an earlier interpretation.

Do not collapse multiple events into one daily summary when their order matters.

## Timestamp Rules

Exact event files use local Asia/Jakarta time in the filename and metadata.

Required precision hierarchy:

1. `exact-second`: HH:MM:SS is directly evidenced.
2. `exact-minute`: HH:MM is evidenced, seconds unavailable.
3. `hour-only`: hour is evidenced, minute/second unavailable.
4. `date-only`: only date is evidenced.
5. `reconstructed`: timing comes from later evidence and must cite its source.

Missing precision must never be fabricated.

Unknown-hour events belong under:

`YYYY/MM/DD/_unknown-hour/`

## Minimum Event Metadata

Every event file should include:

- `observed_at_local`
- `observed_at_utc` when available
- `time_precision`
- `source_timestamp`
- `source_type`
- `source_identifier`
- `research_stream`
- `category`
- `platform`
- `model_or_version`
- `raw_observation`
- `interpretation`
- `hypothesis`
- `counter_hypothesis`
- `evidence`
- `confidence`
- `provenance_risk`
- `affected_artifact_or_compiler`
- `next_test`
- `status`

## Provenance Rule

Temporal order is part of the evidence. Deep Drift studies system drift, continuity, authorship, transformation, tool execution, and human repair labor. Therefore timestamp loss is research-data loss.

Corrections must be logged as new events rather than silently overwriting the historical fact that an earlier interpretation existed.

## Backfill Rule

Older research can be backfilled only when its timestamp precision is explicitly marked. If exact time cannot be recovered, preserve the event under `_unknown-hour` until better evidence exists.

## Active Canon

Canonical logging architecture established: `2026-08-20T00:47:22+07:00`.

Root README recorded: `2026-08-20T00:48:50+07:00`.
