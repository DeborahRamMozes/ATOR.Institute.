# Deep Drift LLM Trend Backfill

## OpenAI Record & Replay: Demonstration-to-Skill Fidelity

- `timestamp_basis`: PROVIDER_PUBLICATION
- `source_timestamp`: 2026-06-18
- `source_time`: UNKNOWN
- `time_precision`: date-only
- `ator_backfill_observed_at_local`: 2026-08-24T11:35+07:00
- `research_stream`: LLM Update Watch / Procedural Continuity
- `platform`: OpenAI Codex
- `source_type`: official OpenAI Business release notes
- `source_identifier`: Record & Replay in Codex
- `source_url`: https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes
- `status`: VERIFIED PROVIDER CAPABILITY / WORKING DEEP DRIFT BENCHMARK

## Provider observation

OpenAI documented Record & Replay for eligible Business users on macOS. A human can demonstrate a workflow once and Codex can turn that demonstration into a reusable skill. OpenAI describes reuse with Codex, Computer Use, browser actions, plugins, or combinations of available tools. Computer Use must be enabled.

The provider publication date is 18 June 2026. The earlier chat-tab discussion treated this as a current 2026 trend signal. This backfill corrects the chronology: the capability itself predates the August discussion.

## Deep Drift interpretation

Procedure can enter an AI system through observed human behavior rather than only through written instruction.

```text
DECLARATIVE PROCEDURE
human explains
→ text instruction
→ reusable skill

DEMONSTRATED PROCEDURE
human performs
→ machine observes
→ inferred reusable skill
```

The research problem is not merely whether the skill repeats the clicks. A demonstration contains actions whose reasons may remain tacit.

### Benchmark: Demonstration-to-Skill Fidelity

Test whether a machine-generated skill preserves:

- action order
- conditional branches
- stopping conditions
- exception handling
- approval boundaries
- file/path assumptions
- permission assumptions
- human judgment points
- the relation between an action and the reason for that action

### Candidate failure: Procedural Tacit-Knowledge Loss

A reusable skill may preserve visible behavior while losing the human reasoning that made the behavior appropriate.

`same demonstrated motion != same procedural understanding`

## Hypotheses

**H-A:** skills generated from demonstrations will preserve repeatable visible steps better than tacit decision rules unless those rules are explicitly surfaced.

**H-B:** inspectable/editable generated skills may provide enough human review to recover omitted reasoning before deployment.

**H-C:** some apparent tacit-knowledge loss may actually be caused by environment changes, permissions, or interface variation rather than inference from the demonstration.

**Mundane rival:** the problem may be ordinary workflow documentation loss. Humans also omit reasons when writing SOPs.

## Measures

- step_recovery_rate
- branch_recovery_rate
- exception_recovery_rate
- approval_boundary_fidelity
- judgment_point_recovery
- inferred_step_count
- unsupported_inference_count
- human_repair_minutes

## Failure condition

Downgrade the benchmark if repeated controlled demonstrations show that the generated skill reliably preserves both procedural steps and decision conditions with minimal manual repair.

## Evidence boundary

OpenAI supports the existence and stated behavior of Record & Replay. `Demonstration-to-Skill Fidelity` and `Procedural Tacit-Knowledge Loss` are ATØR Institute constructs, not OpenAI claims.

## Next test

Demonstrate one workflow containing one obvious step, one hidden conditional judgment, one exception, and one approval requirement. Compare the generated skill with a separately written procedural specification.