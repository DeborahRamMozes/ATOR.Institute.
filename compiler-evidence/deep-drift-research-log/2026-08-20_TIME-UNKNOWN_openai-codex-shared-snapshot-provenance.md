# Deep Drift LLM Trend Backfill

## OpenAI Codex Shared Snapshots: Snapshot Provenance Fidelity

- `timestamp_basis`: PROVIDER_PUBLICATION
- `source_timestamp`: 2026-08-20
- `source_time`: UNKNOWN
- `time_precision`: date-only
- `ator_backfill_observed_at_local`: 2026-08-24T11:35+07:00
- `research_stream`: LLM Update Watch / Provenance Continuity / Shared Research State
- `platform`: OpenAI Codex
- `source_type`: official OpenAI Enterprise & Edu release notes
- `source_identifier`: Codex shared chat snapshot update
- `source_url`: https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes
- `status`: VERIFIED PROVIDER CAPABILITY / WORKING DEEP DRIFT BENCHMARK

## Provider observation

OpenAI documents read-only sharing of a Codex chat as a snapshot. The shared snapshot does not update when the original chat later changes. OpenAI states that known secret patterns are redacted, while users should still review the snapshot because sensitive paths, diffs, images, or other context may remain.

## Deep Drift interpretation

A snapshot preserves one inspectable moment while the living workflow can continue elsewhere.

```text
live workflow T1
→ shared snapshot S1
→ live workflow changes to T2

S1 remains frozen
```

### Benchmark: Snapshot Provenance Fidelity

Can a reader distinguish the frozen shared state from the later live state and reconstruct what model/tool/context information belonged to the shared moment?

## Hypotheses

**H-A:** frozen snapshots reduce ambiguity about what was shared at a moment but can create later state confusion if readers treat them as current.

**H-B:** immutable snapshot semantics may improve reproducibility by preventing silent mutation of previously shared evidence.

**H-C:** redaction itself can remove contextual material needed to understand an action or decision.

**Mundane rival:** snapshot/live divergence is ordinary versioning behavior rather than an AI-specific problem.

## Measures

- snapshot_timestamp_recovery
- snapshot_vs_live_state_distinction
- model_state_visibility
- tool_state_visibility
- redaction_context_loss
- sensitive_context_residual_count
- later_state_confusion_rate
- provenance_gap_count

## Failure condition

Downgrade H-A if users consistently recognize snapshot status and native metadata fully distinguishes frozen evidence from current state.

## Evidence boundary

OpenAI supports snapshot immutability and the stated redaction limitations. `Snapshot Provenance Fidelity` is an ATØR Institute construct.

## Next test

Share a controlled Codex chat snapshot, then materially change the original chat and repository state. Give both to an independent reviewer and measure whether they can identify what belongs to the snapshot moment versus later live state.