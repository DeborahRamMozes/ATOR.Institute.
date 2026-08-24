# Deep Drift LLM Trend Backfill

## OpenAI Apple Messages: Approval-State Continuity

- `timestamp_basis`: PROVIDER_PUBLICATION
- `source_timestamp`: 2026-08-20
- `source_time`: UNKNOWN
- `time_precision`: date-only
- `ator_backfill_observed_at_local`: 2026-08-24T11:35+07:00
- `research_stream`: LLM Update Watch / Action Governance / Human Approval
- `platform`: ChatGPT desktop for macOS / ChatGPT Work / Codex / Apple Messages plugin
- `source_type`: official OpenAI release notes
- `source_identifier`: Codex and ChatGPT updates: Apple Messages, Sites, sharing, and pinned threads
- `source_url`: https://openai.com/products/release-notes/
- `status`: VERIFIED PROVIDER CAPABILITY / WORKING DEEP DRIFT BENCHMARK

## Provider observation

OpenAI announced that the Apple Messages plugin can read and search Messages chats on Mac and prepare or send messages. It can be used in ChatGPT Work and Codex. By default, sending occurs only after the user approves the message and recipients. OpenAI also points users to persistent-approval risks, revocation steps, and a known issue involving tasks that disable approval prompts.

## Deep Drift interpretation

Once an AI system can perform outbound communication, the research object includes not only generated text but the state of human authorization immediately before execution.

```text
human intent
→ machine draft
→ recipient resolution
→ approval state
→ send action
→ external communication artifact
```

### Benchmark: Approval-State Continuity

Can the system prove that the action was executed under the approval state the human actually intended at that moment?

### Candidate failure: Action Drift

Authority at execution may diverge from the authorization the human thought was active.

## Hypotheses

**H-A:** persistent or altered approval settings can increase the chance that outbound actions occur under a different authorization state than the user expects.

**H-B:** explicit recipient-and-message approvals plus visible revocation controls may preserve sufficient human control.

**H-C:** some apparent approval failures may come from task configuration or UI state rather than a general authorization mechanism failure.

**Mundane rival:** approval-state management is a standard automation problem also present in non-AI communication tools.

## Measures

- approval_prompt_presence
- approval_state_at_execution
- recipient_match_rate
- final_message_match_rate
- persistent_approval_visibility
- revocation_effectiveness
- unauthorized_send_count
- ambiguous_authorization_count
- human_repair_minutes

## Failure condition

Downgrade H-A if repeated tests show that approval state is always explicit, current, revocable, and reconstructable at send time.

## Evidence boundary

OpenAI supports the plugin behavior, default approval requirement, and existence of persistent-approval risks/known issue. `Approval-State Continuity` and `Action Drift` are ATØR Institute constructs.

## Next test

Prepare equivalent send tasks under default approval, persistent approval if available, revoked approval, and task-based execution. Record draft, recipients, approval UI/state, execution, and resulting message artifact.