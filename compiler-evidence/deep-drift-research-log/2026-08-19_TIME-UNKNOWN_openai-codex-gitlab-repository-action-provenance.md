# Deep Drift LLM Trend Backfill

## OpenAI Codex GitLab Support: Repository-Action Provenance Fidelity

- `timestamp_basis`: PROVIDER_PUBLICATION
- `source_timestamp`: 2026-08-19
- `source_time`: UNKNOWN
- `time_precision`: date-only
- `ator_backfill_observed_at_local`: 2026-08-24T11:35+07:00
- `research_stream`: LLM Update Watch / Provenance Continuity / Agentic Software Work
- `platform`: OpenAI Codex cloud + GitLab
- `source_type`: official OpenAI release notes
- `source_identifier`: GitLab support in Codex cloud
- `source_url`: https://openai.com/products/release-notes/
- `status`: VERIFIED PROVIDER INTEGRATION / WORKING DEEP DRIFT BENCHMARK

## Provider observation

OpenAI announced GitLab support in Codex cloud on 19 August 2026. Users can connect a GitLab project, create a Codex environment, start tasks from issues or merge requests with `@codex`, and request one-off or automatic merge request reviews. The integration runs in Codex cloud. GitLab-triggered activity depends on webhook configuration permission. OpenAI also states that Codex cannot complete a review when GitLab omits a collapsed or oversized diff.

## Deep Drift interpretation

Repository work adds another provenance chain:

```text
human / issue / MR trigger
→ repository state
→ webhook
→ Codex cloud environment
→ model / agent
→ visible diff
→ review or code action
→ repository result
```

### Benchmark: Repository-Action Provenance Fidelity

Can a reviewer reconstruct who or what triggered the action, which repository state and diff were visible, which execution environment was used, what permissions were active, and what result was written back?

## Hypotheses

**H-A:** agentic repository actions can become provenance-incomplete when trigger identity, environment, permissions, or visible-diff state are not retained together.

**H-B:** GitLab and Codex audit/history surfaces may already retain enough information for reliable reconstruction.

**H-C:** review failures may be caused more by upstream diff omission or GitLab representation limits than by model capability.

**Mundane rival:** this is ordinary CI/CD and code-review provenance, with an AI actor added to an existing software-governance problem.

## Measures

- trigger_identity_recovery
- repository_commit_recovery
- visible_diff_completeness
- hidden_diff_count
- environment_recovery
- permission_state_recovery
- review_completion_rate
- action_attribution_accuracy
- human_repair_minutes

## Failure condition

Downgrade H-A if independent reviewers can consistently reconstruct trigger, state, permissions, visible diff, and resulting action from native platform logs without supplementary manual records.

## Evidence boundary

OpenAI supports the integration, cloud execution, webhook dependency, and oversized/collapsed diff limitation. `Repository-Action Provenance Fidelity` is an ATØR Institute construct.

## Next test

Run the same review task across a normal diff, a deliberately large diff, and a diff containing a collapsed section. Record exactly what Codex received, what it reported as unseen, the review result, and the repository audit trail.