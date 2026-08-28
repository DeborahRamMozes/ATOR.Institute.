# Deep Drift Research Update

## Event-Triggered Agent Workflow Provenance Fidelity

**Research date:** Saturday, 29 August 2026  
**Observation time:** 04:51:46 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log OpenAI creator-workflow change. Fresh first-party scan found no newer category-displacing release for consumer memory, general Skills, mini-app builders, standalone DOCX/PDF generation, or copy/export fixes beyond already logged changes.

## Executive Summary

OpenAI has expanded ChatGPT scheduled tasks from time-based or polling-style automation into **event-triggered tasks in ChatGPT Work**.

Supported triggers currently include:

- new Gmail messages, optionally filtered by sender or subject;
- new Slack channel messages;
- supported GitHub pull request activity in authorized repositories.

A user defines the event and the action ChatGPT should take, then reviews a **Trigger, Condition, and Prompt** configuration. Connected-app permissions govern what the task may read or change. Actions that require approval can pause the task until the user reviews them.

OpenAI also allows eligible scheduled or event-triggered tasks to be **shared as reusable task snapshots**. A recipient does not inherit the creator's app credentials, memories, chat history, files, or connected-app data. Instead, the recipient creates a separate copy using their own account permissions and connected apps.

This creates a creator-workflow architecture that is no longer merely:

```text
TIME
-> PROMPT
-> RESPONSE
```

It is becoming:

```text
EXTERNAL EVENT
-> TRIGGER
-> CONDITION
-> PROMPT
-> CONNECTED-APP READ
-> MODEL REASONING
-> ACTION
-> APPROVAL BOUNDARY
-> RESULT
```

For Deep Drift Research, this creates a new benchmark family:

**Event-Triggered Agent Workflow Provenance Fidelity (ETAWPF)**

with companion constructs:

**Trigger-to-Execution Causal Fidelity (TECF)**  
**Permission-Rebound Workflow Fidelity (PRWF)**  
**Shared-Task Snapshot Divergence Fidelity (STSDF)**  
**Approval-Pause State Fidelity (APSF)**

The central research question is:

> When an LLM workflow starts because something changed in another system, can a later reviewer reconstruct exactly which event triggered it, which condition admitted it, which permissions governed the run, which prompt version executed, which action was attempted, and where human approval interrupted or altered the chain?

## Why This Is Different from Scheduled Automation

Traditional scheduled tasks are driven by time:

```text
CLOCK
-> RUN
```

Event-triggered tasks are driven by external state:

```text
APP EVENT
-> MATCH
-> RUN
```

That difference is substantial.

The execution now depends on:

- an external system;
- an external event identity;
- event delivery timing;
- filter or condition logic;
- connected-app authorization;
- current permissions;
- current workflow instructions;
- approval requirements.

The event itself becomes part of provenance.

## New Deep Drift Construct: Event-Triggered Agent Workflow Provenance Fidelity

### Definition

**ETAWPF** measures whether an event-triggered LLM workflow preserves the causal chain from external event to model execution to external action.

A minimum execution record should preserve:

```text
task_id
task_version
trigger_provider
trigger_type
trigger_event_id
trigger_event_time
trigger_received_time
condition_definition
condition_result
prompt_snapshot
model_or_mode
connected_account
permission_scope
action_requested
approval_required
approval_state
action_result
execution_time
```

Without this chain, the system may tell us that an automation ran while obscuring **why this run existed at all**.

## Trigger-to-Execution Causal Fidelity

### Definition

**Trigger-to-Execution Causal Fidelity (TECF)** measures whether every workflow run can be tied to the exact event and condition that caused it.

A reliable record should answer:

```text
WHAT CHANGED?
WHERE?
WHEN?
WHICH EVENT OBJECT?
WHICH FILTER MATCHED?
WHY DID THIS TASK RUN?
```

This is especially important when several events arrive close together or are grouped.

OpenAI notes that event-triggered tasks may process multiple events and can run substantially more frequently than ordinary hourly scheduled tasks.

The provenance unit therefore cannot simply be:

```text
TASK RAN AT 10:31
```

It must preserve the event relationship.

## Permission-Rebound Workflow Fidelity

Shared tasks introduce an unusual but important architecture.

OpenAI states that a shared task snapshot does not include the creator's:

- chat history;
- previous task results;
- saved memories;
- custom instructions;
- attached files;
- connected-app data;
- connected-app credentials.

Recipients create a separate task using their own permissions and app connections.

That means sharing preserves the procedure but deliberately **rebounds execution authority** to another identity.

### Definition

**Permission-Rebound Workflow Fidelity (PRWF)** measures whether the same shared workflow preserves procedural intent when executed under a different recipient identity and permission scope.

So:

```text
SAME TASK INSTRUCTIONS
!=
SAME EXECUTION AUTHORITY
```

and:

```text
SHARED WORKFLOW
!=
SHARED CREDENTIALS
```

This distinction is architecturally healthy, but it means two copies of the "same" task may produce materially different outcomes.

## Shared-Task Snapshot Divergence Fidelity

OpenAI states that a shared task link contains a snapshot of title, instructions, schedule, original time zone, and in some cases selected mode/model.

It does not automatically update when the original task later changes.

This creates a fork.

```text
ORIGINAL TASK v1
-> SHARE SNAPSHOT S1
-> ORIGINAL TASK CHANGES TO v2
-> RECIPIENT STILL SEES S1
```

### Definition

**Shared-Task Snapshot Divergence Fidelity (STSDF)** measures whether the system preserves and exposes divergence between an original workflow and previously shared snapshots or recipient-created copies.

This is effectively workflow versioning through copying.

Without explicit lineage, users may believe two tasks are still equivalent when they are not.

## Approval-Pause State Fidelity

OpenAI states that actions sending messages or changing external data may require approval. If approval is required, the task pauses until reviewed.

This creates a human-machine boundary inside an otherwise autonomous workflow.

### Definition

**Approval-Pause State Fidelity (APSF)** measures whether the system preserves:

```text
action proposed
approval reason
approval requested_at
approver identity
approval decision
decision time
edited action if any
resume time
final action result
```

A paused task is not a failed task.

An approved task is not the same thing as an autonomously executed task.

The distinction must survive in provenance.

## Core Deep Drift Distinctions

```text
EVENT OBSERVED
!=
EVENT ACCEPTED BY CONDITION

TASK SHARED
!=
AUTHORITY SHARED

SAME INSTRUCTIONS
!=
SAME PERMISSIONS

TASK PAUSED
!=
TASK FAILED

ACTION APPROVED
!=
ACTION ORIGINALLY PROPOSED

WORKFLOW COPIED
!=
WORKFLOW SYNCHRONIZED
```

These are not UI details.

They define the causal structure of the automation.

## New Failure Classes

### Trigger Attribution Loss

A task result exists, but the specific Gmail message, Slack message, or GitHub pull request event that caused the run cannot be reconstructed.

### Event Duplication Drift

The same external event is delivered or processed more than once, producing duplicate agent work or duplicate actions.

### Event Grouping Ambiguity

Multiple events are grouped into one run, but the artifact does not preserve which result corresponds to which event.

### Condition-Version Drift

The trigger condition changes over time, but an old run cannot be tied to the condition version that admitted it.

### Permission Rebound Drift

A shared workflow behaves differently because the recipient's connected-app permissions differ from the creator's, but that difference is not visible in the output.

### Shared Snapshot Staleness

A shared task continues to circulate after the original has materially changed.

### Approval Context Loss

A task pauses for approval, but the final record does not preserve what the model originally proposed before human review.

### Approval Mutation Opacity

The human modifies the proposed action during approval, but the system records only the final action.

### Wrong Connected Identity Execution

A recipient copies a task but binds it to a different Gmail, Slack, or GitHub identity than intended.

### Trigger/Action Authority Mismatch

A task is triggered by one account or repository context but attempts an action under another identity or permission boundary.

### Task-Link Lineage Loss

A recipient-created copy cannot be traced back to the exact shared snapshot from which it originated.

### Export Blind Spot

OpenAI states that scheduled tasks, shared task links, and their saved snapshots are not currently included in personal-account data exports. This creates an exportability boundary around workflow provenance.

## Deep Drift Benchmark: Event-to-Action Reconstruction Test

### Controlled setup

Create three event-triggered workflows:

```text
GMAIL
new client email
-> summarize
-> draft next step

SLACK
new channel feedback
-> classify
-> draft response

GITHUB
pull request activity
-> inspect change
-> produce merge-readiness note
```

Then seed:

1. one duplicate Gmail message;
2. two Slack messages arriving close together;
3. one GitHub pull request update that changes again before the task finishes;
4. one action requiring approval;
5. one shared task copied by a second user with narrower permissions;
6. one original task modified after its share link was created.

### Measure

- trigger-event identity retention;
- event ordering;
- duplicate suppression;
- condition-version traceability;
- prompt snapshot retention;
- approval-state reconstruction;
- recipient-permission visibility;
- shared-snapshot lineage;
- final external action traceability;
- human repair minutes.

## New Metrics

### Trigger Causal Traceability

```text
TCT =
workflow runs linked to exact triggering event
/
all event-triggered workflow runs
```

### Condition Admission Traceability

```text
CAT =
runs attributable to exact trigger-condition version
/
all event-triggered runs
```

### Approval Reconstruction Coverage

```text
ARC =
approval-gated actions preserving proposed action,
human decision, and final action
/
all approval-gated actions
```

### Permission Rebound Transparency

```text
PRT =
shared-task runs exposing recipient permission context
/
all shared-task runs with material permission differences
```

### Shared Snapshot Lineage Coverage

```text
SSLC =
recipient task copies linked to exact source snapshot
/
all recipient-created copies
```

### Event Deduplication Accuracy

```text
EDA =
duplicate external events correctly suppressed
/
all seeded duplicate-event cases
```

## Why This Matters for Memory

Event-triggered tasks can use information from previous runs, while each run may also depend on connected-app state.

Deep Drift should distinguish:

```text
MODEL MEMORY
USER MEMORY
TASK HISTORY
PREVIOUS RUN STATE
TRIGGER EVENT STATE
CONNECTED APP STATE
APPROVAL STATE
```

If a later run uses prior task state, that prior state becomes part of the causal history.

The task is no longer merely a prompt executed repeatedly.

It is a stateful workflow.

## Why This Matters for Skills

A reusable Skill is usually treated as procedure.

A shared event-triggered task behaves like a portable procedure plus a re-bound authority layer.

The more useful abstraction is:

```text
WORKFLOW PROCEDURE
+
TRIGGER CONTRACT
+
CONDITION CONTRACT
+
ACCOUNT / APP SCOPE
+
APPROVAL POLICY
+
VERSIONED SNAPSHOT
```

This is much closer to a lightweight agent application than a reminder.

## Why This Matters for Mini-App and Creator Workflow Trends

The creator stack is moving toward **no-code event-driven agent construction**.

A user does not need to build a webhook server, queue, event router, or workflow engine manually.

Instead, natural language configures:

```text
WHEN THIS HAPPENS
IF THIS CONDITION HOLDS
DO THIS
WITH THESE CONNECTED APPS
UNDER THESE PERMISSIONS
```

That is effectively a small application.

The important Deep Drift question is not whether such mini-app-like workflows are convenient.

It is whether their hidden execution state is reconstructable.

## Why This Matters for Documents and Research Logs

An event-triggered workflow can generate:

- summaries;
- drafts;
- review notes;
- reports;
- research updates;
- GitHub log entries.

For any generated artifact, provenance should preserve:

```text
artifact_id
task_id
task_snapshot
trigger_event
condition_result
source_objects
permission_scope
approval_state
generation_time
```

Otherwise the document exists without its triggering cause.

## Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer consumer-memory release after the already logged August 27-28 changes. Event-triggered tasks add a separate task-history and previous-run state layer. |
| Skills | No newer general Skill launch in this pass; shared event-triggered workflows increasingly behave like portable procedural objects. |
| Mini-app builders | **Material adjacent shift:** natural-language Trigger + Condition + Prompt + connected-app action is effectively a lightweight no-code agent workflow builder. |
| Chat-to-document export | No newer direct export feature surfaced. |
| DOCX / PDF generation | No newer standalone format-generation feature surfaced. |
| Copy-paste / export fixes | No newer copy/export fix surfaced beyond already logged Codex changes. |
| Broader creator workflow | **Material new-to-log change:** ChatGPT Work can respond to Gmail, Slack, and GitHub events, pause for approvals, and share workflow snapshots that recipients re-bind to their own permissions. |

## Cross-Platform Check

### OpenAI

The strongest new-to-log item is event-triggered scheduled tasks and task sharing.

OpenAI documents:

- webhook-based triggers from Gmail, Slack, and GitHub;
- Trigger, Condition, and Prompt configuration;
- connected-app permission enforcement;
- approval pauses for actions that require review;
- shareable task snapshots;
- independent recipient copies using recipient-owned app permissions;
- no inheritance of the creator's memories, chat history, files, app data, or credentials;
- snapshot staleness unless the share link is explicitly refreshed;
- scheduled-task and shared-task snapshot gaps in personal-account data exports.

### Microsoft

No newer Microsoft 365 Copilot release displaced the August 25 creator-workflow batch already represented in the Deep Drift ledger.

### Google

No newer category-displacing Gemini/Workspace creator release surfaced in this pass.

### Anthropic

No newer category-displacing Claude creator-workflow release surfaced in this pass.

## Deep Drift Research Position

The serious change is not that ChatGPT can "watch Gmail."

The architecture has crossed from:

```text
ASSISTANT
THAT RESPONDS
```

toward:

```text
WORKFLOW
THAT WAITS FOR EXTERNAL STATE
EVALUATES A CONDITION
USES CONNECTED AUTHORITY
MAY REQUIRE HUMAN APPROVAL
AND THEN ACTS
```

Therefore:

```text
AUTOMATED
!=
CAUSALLY TRACEABLE

SHARED
!=
SYNCHRONIZED

PORTABLE PROCEDURE
!=
PORTABLE AUTHORITY

APPROVED
!=
AUTONOMOUS

TASK RESULT
!=
COMPLETE EXECUTION PROVENANCE
```

The serious Deep Drift requirement is:

> Once an LLM workflow can be awakened by external events, the trigger event, condition, permission state, approval boundary, task snapshot, and resulting action must all become first-class provenance objects.

## Evidence Boundary

Platform facts in this report are grounded in OpenAI's first-party ChatGPT Business release notes and Scheduled Tasks documentation, checked 29 August 2026. Fresh first-party OpenAI, Microsoft, Google, and Anthropic sources were checked for newer category-displacing changes. ETAWPF, TECF, PRWF, STSDF, APSF, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, **ChatGPT Business - Release Notes**, 25 August 2026 - Scheduled tasks can respond to app updates and be shared.
2. OpenAI Help Center, **Scheduled tasks in ChatGPT**, current 29 August 2026 - event-triggered tasks, Trigger/Condition/Prompt configuration, app permissions, approval pauses, sharing semantics, export limitations.
3. OpenAI Help Center, **ChatGPT Release Notes**, current through 28 August 2026.
4. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through the August 25, 2026 batch.
5. Google Workspace Updates, checked 29 August 2026.
6. Anthropic first-party release sources, checked 29 August 2026.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
