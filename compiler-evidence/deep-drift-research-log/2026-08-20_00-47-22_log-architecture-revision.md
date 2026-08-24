# Deep Drift Research Log

## Event: Research Logging Architecture Revision

- `observed_at_local`: 2026-08-20T00:47:22+07:00
- `time_precision`: exact, system-local timestamp
- `research_stream`: Deep Drift Research / ATØR Institute
- `category`: research governance, chronology, provenance, logging architecture
- `status`: implemented

## Trigger

The previous daily-file structure was rejected as insufficiently granular because it collapsed multiple research developments into one document and erased event order within the same day.

## Revised canonical hierarchy

`compiler-evidence/deep-drift-research-log/YYYY/MM/DD/HH/HH-MM-SS_event-slug.md`

Example:

`compiler-evidence/deep-drift-research-log/2026/08/20/00/00-36-24_platform-workflow-shift.md`

## Canonical rule

Every distinct research update, observation, hypothesis shift, contradiction, tool failure, platform behavior change, evidence capture, compiler revision, or benchmark revision receives its own event file.

No daily omnibus file should replace event-level logs.

## Time precision rules

1. Exact timestamps use `HH-MM-SS` and are backed by a system time, message timestamp, commit timestamp, source timestamp, or other inspectable evidence.
2. Reconstructed timestamps must never invent missing seconds.
3. If only the hour is known, store the event under that hour and mark `time_precision: hour-only`.
4. If only date is known, store under `_unknown-hour/` and mark `time_precision: date-only`.
5. If an earlier research event is known to exist but its exact time cannot yet be evidenced, create a reconstruction record rather than falsifying precision.

## Required event metadata

Each event file should record at minimum:

- observed_at_local
- observed_at_utc when available
- time_precision
- source_timestamp
- source_type
- source_identifier
- research_stream
- category
- platform
- model/version if known
- raw_observation
- interpretation
- hypothesis
- counter_hypothesis
- evidence
- confidence
- provenance_risk
- affected_artifact/compiler
- next_test
- status

## Revision consequence

The earlier file `compiler-evidence/2026-08-20-deep-drift-research-log/platform-workflow-shift-2026-08-20.md` is deprecated and migrated into the timestamped hierarchy. Future entries should follow the new hierarchy immediately rather than being consolidated later.

## Research rationale

Deep Drift studies drift, continuity, causality, authorship, tool execution, and system transformation. A log that loses the order of events destroys part of the evidence it is supposed to preserve. Temporal granularity is therefore not administrative decoration. It is part of the experimental record.
