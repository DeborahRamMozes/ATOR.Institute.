# Deep Drift Research Event Log

**chat_ui_timestamp_local:** 2026-08-23 03:44 Asia/Jakarta
**timestamp_basis:** CHAT_UI_VISIBLE_TIMESTAMP
**time_precision:** exact-minute; seconds unavailable and not fabricated
**research_stream:** Deep Drift / LLM Update Watch / Workflow Continuity
**category:** outbound action / approval state / repository execution
**status:** WORKING HYPOTHESIS

## Raw observation

The update records two new workflow signals.

OpenAI Apple Messages plugin behavior dated 20 August 2026 allows ChatGPT on macOS to read and search Messages conversations and prepare or send messages. The recorded default behavior requires user approval of message and recipients before sending, while the update also notes persistent-approval risks and a known task-related approval issue.

### Benchmark: Approval-State Continuity

`human intent -> agent prepares message -> approval state -> recipient resolution -> send action -> communication artifact`

The test asks whether the approval state actually governing execution remains the one the human intended.

The same update records Codex cloud support for GitLab dated 19 August 2026, including tasks from issues or merge requests, one-off or automatic merge-request review, cloud execution, admin controls, and webhook permissions.

### Benchmark: Repository-Action Provenance Fidelity

`issue / MR -> remote agent -> code change or review -> repository state`

The research question is whether trigger identity, permissions, visible diff, execution environment, and resulting repository mutation remain reconstructable.

## Hypotheses

**H-A:** execution-capable AI expands provenance requirements from artifact creation to external action.

**H-B:** explicit approvals, repository permissions, and audit records may preserve sufficient human authority.

**H-C:** apparent failures may originate from configuration, permissions, or visibility boundaries rather than agent reasoning.

**Mundane rival:** conventional automation and CI systems already require approval and repository-action provenance.

## Evidence boundary

The provider capabilities are separated from ATØR inference. **Approval-State Continuity** and **Repository-Action Provenance Fidelity** are ATØR Institute constructs.

## Next test

For communication, compare default approval, changed approval, revoked approval, and task execution while recording message, recipients, approval state, and send event. For GitLab, compare issue/MR trigger, permissions, visible versus oversized/collapsed diff, agent action, review result, and repository state.
