# Deep Drift Research Log

This directory is the single canonical home for ALL chronological research logs produced under Deep Drift Research / ATØR Institute.

## Canonical Location

All research observations, platform watches, hardware/material watches, workflow reliability findings, hypotheses, counter-hypotheses, experiments, evidence captures, provenance findings, and research-architecture corrections belong directly in this directory.

There is no separate `research-journal/` tree.

There are no year/month/day/hour subfolders for ordinary research logs.

## Canonical Filename

`YYYY-MM-DD_HH-MM-SS_event-slug.md`

Examples:

`2026-08-20_00-36-24_platform-workflow-shift.md`

`2026-08-23_15-53-XX_openai-support-automation-inversion-platform-convergence.md`

`2026-08-23_TIME-UNKNOWN_ai-hardware-material-reliability-watch.md`

## Time Precision

Timestamp precision must reflect evidence.

1. `exact-second`: use `HH-MM-SS` only when seconds are evidenced.
2. `exact-minute`: use `HH-MM-XX` when hour and minute are evidenced but seconds are not.
3. `hour-only`: use `HH-XX-XX` when only the hour is evidenced.
4. `date-only`: use `TIME-UNKNOWN` when no defensible clock time is available.
5. `reconstructed`: state the reconstruction source explicitly inside the log.

Missing precision must never be fabricated.

## Timestamp Basis

Every dated log must declare what its filename timestamp represents.

### `timestamp_basis: ATOR_OBSERVATION`

Use the local Asia/Jakarta observation time when the event is an ATØR research act, experiment, correction, tool failure, interpretation, or internal benchmark development.

### `timestamp_basis: PROVIDER_PUBLICATION`

Use the provider's publication or release date for historical LLM/platform trend backfills when the task is to reconstruct the chronology of platform updates. If the provider exposes only a date and no clock time, the filename must use `TIME-UNKNOWN`. The file must also record the later ATØR observation/backfill time separately.

### `timestamp_basis: PROVIDER_ROLLOUT_START`

Use the explicitly documented rollout-start date when the research event is the beginning of a rollout rather than the announcement. If no rollout clock time is published, use `TIME-UNKNOWN`.

Provider publication time, provider rollout time, and ATØR observation time must never be silently treated as the same timestamp.

## One Event, One File

Each distinct research event remains its own file. The folder stays flat. Research streams are metadata inside the file, not additional directory trees.

A file may concern:

- LLM platform updates
- memory, retrieval, skills, plugins, connectors, agents, artifacts, apps, export, migration, provenance, governance
- AI hardware, minerals, semiconductors, cooling, water, electricity, reliability, pricing, labor
- Deep Drift theory and benchmark development
- counterfactual experiments
- tool or connector failures
- quality-control evidence
- source validation
- corrections to earlier interpretations

## Minimum Metadata

Each event should preserve, where available:

- `timestamp_basis`
- `observed_at_local`
- `observed_at_utc`
- `time_precision`
- `source_timestamp`
- `rollout_timestamp` when applicable
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

## Evidence and Stream Rule

Research streams such as `LLM Update Watch`, `AI Hardware Material + Reliability Watch`, `Continuity Under Transformation`, `Workflow Reliability`, and `Earth-Technology Accounting` are labels inside chronological files. They do not create separate log repositories or folder trees.

Protocols, standing methods, and non-log canonical documents may remain as named protocol files in this directory. `MONTHLY-EARTH-TECHNOLOGY-ACCOUNTING-PROTOCOL.md` is such a method document, not a dated research-event log.

## Provenance Rule

Temporal order is evidence. A correction does not erase an earlier interpretation. The correction receives its own timestamped file, and the older record remains historically recoverable.

Git history preserves prior paths, but the active branch must present one clear research-log surface.

## Active Canon

The earlier nested event hierarchy recorded on 2026-08-20 is now **SUPERSEDED**.

Canonical architecture adopted by explicit human instruction on 2026-08-24 at 10:57 WIB:

`compiler-evidence/deep-drift-research-log/YYYY-MM-DD_HH-MM-SS_event-slug.md`

No parallel `research-journal/` directory is permitted for Deep Drift research logs.

Provider-update chronology rule added on 2026-08-24: historical LLM/platform trend backfills may use the provider publication or rollout date as the filename date only when `timestamp_basis` explicitly declares that choice and missing clock precision remains `TIME-UNKNOWN`.