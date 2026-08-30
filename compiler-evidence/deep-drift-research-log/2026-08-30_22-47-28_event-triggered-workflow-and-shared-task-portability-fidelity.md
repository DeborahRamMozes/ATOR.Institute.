# Deep Drift Research Update

## Event-Triggered Workflow and Shared-Task Portability Fidelity

**Research date:** 30 August 2026  
**Primary platform delta:** ChatGPT Work event-triggered tasks, shareable scheduled tasks, and signed-in website execution  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log creator-workflow and provenance architecture verified from current first-party OpenAI documentation.

## Executive Summary

ChatGPT Work now supports event-triggered tasks that react to changes in connected applications. Supported events currently include new Gmail messages, new Slack channel messages, and GitHub pull request activity in authorized repositories. The task exposes a **Trigger, Condition, and Prompt** structure, while connected-app permissions, workspace controls, and approval requirements continue to apply.

This creates a materially different workflow from ordinary scheduled automation:

```text
CONNECTED APP EVENT
-> TRIGGER
-> CONDITION
-> PROMPT
-> WORK EXECUTION
-> APPROVAL IF REQUIRED
-> OUTPUT / EXTERNAL ACTION
```

The same task can also be shared. The recipient does not inherit the creator's memory, chat history, connected-app credentials, files, or permissions. Instead, the recipient schedules an **independent copy** using their own account, apps, and workspace permissions.

The operational chain therefore expands:

```text
TASK AUTHOR
-> SHARED TASK SNAPSHOT
-> RECIPIENT COPY
-> RECIPIENT APP CONNECTION
-> RECIPIENT PERMISSIONS
-> EVENT
-> EXECUTION
```

OpenAI's current shared-link documentation adds another important provenance boundary: scheduled tasks, shared scheduled-task links, and their saved snapshots are **not currently included in personal-account data exports**. The Enterprise Compliance API includes underlying scheduled tasks, but not shared task links or their saved snapshots.

For Deep Drift Research, this creates a new benchmark family:

**Event-Triggered Workflow and Shared-Task Portability Fidelity (ETWSTPF)**

with companion constructs:

- Trigger-to-Execution Fidelity
- Condition Evaluation Fidelity
- Task-Copy Independence Fidelity
- Permission Rebinding Fidelity
- Shared-Task Snapshot Fidelity
- Task-to-Result Lineage Fidelity
- Export-Coverage Fidelity
- Approval-Gate Fidelity
- Signed-In Session Continuity Fidelity

The central question is:

> When a conversational workflow becomes an event-driven reusable task that can be copied to another person's account and executed with a different permission set, can the resulting action still be reconstructed from the original task definition, shared snapshot, recipient copy, trigger event, app connection, condition result, approval event, and final output?

## 1. What Changed

OpenAI documents event-triggered Work tasks for eligible Plus, Pro, Business, Enterprise, Edu, and ChatGPT for Healthcare users.

Supported event classes include:

```text
NEW GMAIL MESSAGE
NEW SLACK CHANNEL MESSAGE
GITHUB PULL REQUEST ACTIVITY
```

Each event-triggered task exposes:

```text
TRIGGER
CONDITION
PROMPT
```

The distinction matters.

A webhook event does not necessarily mean the task should execute consequential work. The condition layer decides whether the event is relevant, and the prompt defines what Work should do.

Connected-app permissions, workspace controls, and approval requirements remain active during execution.

## 2. Why This Matters for Deep Drift

Traditional automation is usually described as:

```text
TIME
-> TASK
```

The new model is:

```text
EXTERNAL SYSTEM CHANGE
-> AI INTERPRETATION
-> CONDITIONAL ACTION
```

Therefore:

```text
EVENT RECEIVED
!= TASK SHOULD ACT

TASK SHARED
!= CONTEXT SHARED

SAME INSTRUCTIONS
!= SAME EFFECTIVE PERMISSIONS

SAME TRIGGER
!= SAME RESULT

TASK EXISTS
!= TASK EXPORTABLE
```

The meaningful object is no longer the prompt alone.

It is the complete execution contract.

## 3. Trigger-to-Execution Fidelity

### Definition

**Trigger-to-Execution Fidelity** measures whether every Work execution can identify the exact external event that initiated it.

A minimum trigger record should preserve:

```text
task_id
trigger_type
connected_app
external_event_id
external_event_timestamp
received_timestamp
condition_version
prompt_version
execution_id
```

For GitHub, the record should identify the relevant pull request event or repository state. For Slack, it should preserve the channel and message event. For Gmail, it should preserve the message or thread identity subject to available permissions and retention rules.

## 4. Condition Evaluation Fidelity

The condition is a critical new layer because it separates:

```text
EVENT EXISTS
```

from:

```text
EVENT SATISFIES TASK RULE
```

### Definition

**Condition Evaluation Fidelity** measures whether the platform can later reconstruct why a trigger caused execution or was ignored.

A benchmark manifest should record:

```text
condition_text
condition_version
input_event_reference
evaluation_result
evaluation_timestamp
```

Without this layer, an investigator sees only that a task ran, not why the platform believed it should run.

## 5. Shared-Task Copy Independence Fidelity

OpenAI says a shared scheduled task creates a separate recipient-owned task.

The shared task does not transfer:

```text
CHAT HISTORY
SAVED MEMORIES
CUSTOM INSTRUCTIONS
LOCAL FILES
UPLOADED FILES
CONNECTED-APP DATA
CONNECTED-APP CREDENTIALS
WORKSPACE PERMISSIONS
```

The recipient supplies their own environment.

### Definition

**Task-Copy Independence Fidelity** measures whether the recipient copy is visibly distinguishable from the creator's source task while preserving the intended reusable instructions.

The minimum relationship is:

```text
SOURCE_TASK_ID
-> SHARED_SNAPSHOT_ID
-> RECIPIENT_TASK_ID
```

The copied task should not masquerade as the original.

## 6. Permission Rebinding Fidelity

A shared webhook task may contain the same prompt and trigger type, but it executes through the recipient's app connections and permissions.

### Definition

**Permission Rebinding Fidelity** measures whether task behavior is attributable to the effective credentials and workspace policy active in the recipient's environment.

Therefore:

```text
SAME TASK TEXT
+
DIFFERENT APP CONNECTION
=
POTENTIALLY DIFFERENT DATA ACCESS
```

and:

```text
SAME TASK TEXT
+
DIFFERENT WORKSPACE POLICY
=
POTENTIALLY DIFFERENT ACTION CAPABILITY
```

This makes procedural portability separate from authorization portability.

## 7. Shared-Task Snapshot Fidelity

OpenAI documents that a shared task link includes the task title, full instructions, schedule, and original time zone. A recipient can review and customize it before creating their own copy.

Updating the original shared link refreshes the shared snapshot at the same URL, but it **does not change a task that another person already scheduled**.

### Definition

**Shared-Task Snapshot Fidelity** measures whether each recipient-owned copy remains attributable to the exact snapshot from which it was created.

The lifecycle can become:

```text
SOURCE TASK v1
-> SHARED SNAPSHOT A
-> RECIPIENT COPY 1

SOURCE TASK v2
-> REFRESH SAME SHARE URL
-> SHARED SNAPSHOT B
-> RECIPIENT COPY 2
```

Recipient Copy 1 should still identify Snapshot A.

Otherwise one URL can appear to represent a single procedure while historically producing multiple different copies.

## 8. Export-Coverage Fidelity

The current OpenAI shared-link documentation states that:

- personal-account data export includes shared conversation metadata;
- scheduled tasks are not currently included;
- shared scheduled-task links are not currently included;
- saved shared-task snapshots are not currently included;
- the Enterprise Compliance API includes underlying scheduled tasks but not shared task links or saved snapshots;
- ChatGPT Business does not currently offer data export.

### Definition

**Export-Coverage Fidelity** measures whether every provenance-relevant workflow object is represented in account or compliance export.

Deep Drift should classify:

```text
UNDERLYING TASK
SHARED LINK
SHARED SNAPSHOT
RECIPIENT COPY
RUN HISTORY
TRIGGER EVENT
CONDITION RESULT
OUTPUT
```

as:

```text
EXPORTABLE
API-ACCESSIBLE
UI-ONLY
NOT DOCUMENTED
```

A workflow can be durable in the product while incompletely represented in portable archives.

## 9. Approval-Gate Fidelity

OpenAI states that actions requiring approval pause until review.

### Definition

**Approval-Gate Fidelity** measures whether the system preserves:

```text
PROPOSED ACTION
PRE-APPROVAL STATE
APPROVER
APPROVAL TIME
HUMAN EDITS
EXECUTED ACTION
```

The provenance rule is simple:

```text
AI PROPOSED
!= HUMAN APPROVED
!= SYSTEM EXECUTED
```

Those are three distinct authorship events.

## 10. Signed-In Session Continuity Fidelity

The same August 25 release expanded ChatGPT Work's browser so it can continue tasks on supported websites after the user signs in. OpenAI says the model does not see or store usernames or passwords, while browser session state may remain signed in for later Work tasks. Consequential actions still require confirmation.

### Definition

**Signed-In Session Continuity Fidelity** measures whether the browser session used by a later Work task remains attributable to:

```text
SITE
SESSION CREATION EVENT
USER AUTHENTICATION EVENT
SESSION AGE
TASK USING SESSION
CONSEQUENTIAL ACTION APPROVAL
BROWSER-DATA DELETION EVENT
```

The model may not possess the credential while still operating inside a credentialed session.

That distinction matters enormously.

## 11. New Failure Classes

### 11.1 Trigger-Origin Loss

A task run survives, but the exact Gmail/Slack/GitHub event that initiated it cannot be recovered.

### 11.2 Condition Black Box

A task acts after an event, but the condition result explaining why is unavailable.

### 11.3 Shared-Task Identity Collapse

Recipient copies are treated as the same task despite having different account, permissions, apps, and later edits.

### 11.4 Permission-Rebinding Drift

A shared task behaves differently because the recipient's connected app exposes different data or actions.

### 11.5 Snapshot-Version Ambiguity

The same share URL is refreshed over time while old recipient copies continue running older instructions.

### 11.6 Export Blind Spot

A task or shared-task snapshot exists in the product but is missing from portable data export.

### 11.7 Approval Attribution Collapse

A final action is described as "ChatGPT did it" even though a human materially edited or approved it.

### 11.8 Persistent Signed-In Session Ambiguity

A later task operates through an existing authenticated browser session without an obvious connection to the original sign-in event.

### 11.9 Source-Deletion / Copy-Survival Drift

Deleting an original shared task removes its share link, but recipient copies already saved remain in recipient accounts.

### 11.10 Conversation-Deletion / Task Persistence Split

Deleting a conversation can pause an associated scheduled task while the task's shared link remains available until separately removed.

## 12. Deep Drift Benchmark: Event-to-Shared-Copy Round Trip

### Controlled setup

Create three low-risk event workflows:

```text
A. GMAIL
trigger: new message from controlled sender
condition: subject contains TEST-ATOR
action: summarize only

B. SLACK
trigger: new message in controlled channel
condition: contains TEST-ATOR
action: draft response, do not send

C. GITHUB
trigger: controlled PR activity
condition: changed file path matches /research-test/
action: summarize changed files
```

### Test sequence

1. preserve task definition and version;
2. trigger a non-matching event;
3. verify no action;
4. trigger a matching event;
5. preserve external event identity;
6. preserve condition evaluation;
7. preserve output;
8. share the task;
9. record the shared snapshot;
10. create a recipient-owned copy under a second controlled account or workspace;
11. compare app permissions;
12. modify the source task and refresh the same shared link;
13. verify the first copy remains historically unchanged;
14. create a second copy;
15. delete the source task;
16. test survival of recipient copies;
17. request available account/compliance exports;
18. map which workflow objects are absent.

## 13. New Metrics

### Trigger Attribution Coverage

```text
TAC =
runs traceable to exact external trigger event
/
all controlled runs
```

### Condition Reconstruction Coverage

```text
CRC =
runs with reconstructable condition evaluation
/
all controlled triggered runs
```

### Shared-Copy Lineage Coverage

```text
SCLC =
recipient tasks attributable to exact source snapshot
/
all controlled recipient copies
```

### Permission Rebinding Disclosure

```text
PRD =
recipient copies with recorded effective app/workspace permissions
/
all controlled shared copies
```

### Export Object Coverage

```text
EOC =
provenance-relevant task objects present in export/compliance systems
/
all controlled provenance-relevant objects
```

### Approval Attribution Coverage

```text
AAC =
consequential actions distinguishing proposal,
human review, edits, approval, and execution
/
all controlled approval-gated actions
```

## 14. Why This Matters for Memory

A shared task deliberately excludes the creator's saved memories and chat history.

That is a useful boundary.

The task carries procedure, not personal conversational memory.

Deep Drift should distinguish:

```text
PERSONAL MEMORY
TASK INSTRUCTIONS
TRIGGER STATE
RECIPIENT CONTEXT
```

The same reusable task can therefore run without reproducing the creator's personal memory state.

That is procedural portability without cognitive-state portability.

## 15. Why This Matters for Skills

A shared event-triggered task is structurally close to a lightweight Skill:

```text
TRIGGER
+ CONDITION
+ PROCEDURE
+ APP DEPENDENCIES
```

The difference is that it carries an execution trigger and schedule state.

Deep Drift should treat this as a new category:

> **event-bound procedural artifact**

It sits between a Skill, an automation, and a mini-agent.

## 16. Why This Matters for Mini-App Builders

The workflow increasingly resembles a tiny event-driven application:

```text
INPUT EVENT
-> BUSINESS RULE
-> MODEL PROCEDURE
-> APPROVAL UI
-> ACTION
```

No conventional front-end project is necessary.

The task itself is the application skeleton.

That means creator tooling is moving beyond "build an interface" toward "declare an event-driven operational object."

## 17. Why This Matters for Chat-to-Document and DOCX/PDF

An event-triggered task can produce summaries, drafts, reports, or other artifacts without a fresh conversational prompt at run time.

The provenance chain for a document can become:

```text
EXTERNAL EVENT
-> TASK VERSION
-> CONDITION
-> WORK EXECUTION
-> DOCUMENT
-> PDF
```

The DOCX/PDF should therefore preserve the triggering event and task version, not merely the visible generated text.

A static report created by automation is evidence of a process, not evidence of its own origin.

## 18. Why This Matters for Copy-Paste / Export Fixes

The workflow eliminates another manual loop:

```text
OLD:
CHECK GMAIL / SLACK / GITHUB
-> NOTICE CHANGE
-> COPY CONTEXT
-> OPEN AI
-> ASK
-> COPY RESULT
```

New:

```text
EVENT
-> WORK
-> CONDITIONAL OUTPUT
```

This is a genuine reduction in human polling and copy-paste.

The cost is that provenance must now include the event listener and condition layer, which previously lived visibly inside the human's head.

## 19. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | Material boundary: shared tasks intentionally do not transfer saved memory or chat history; procedure portability is separated from personal memory. |
| Skills | **Major new-to-log adjacency:** webhook-triggered shared tasks behave like event-bound Skills with trigger, condition, prompt, dependencies, and approval state. |
| Mini-app builders | **Material new architecture:** an event-driven operational micro-app can be defined conversationally without a conventional application scaffold. |
| Chat-to-document export | Event-triggered Work can create downstream artifacts without a new manual prompt; document lineage must include trigger and task version. |
| DOCX / PDF generation | No newer file-format primitive surfaced; automated file provenance now needs task/run/event identifiers. |
| Copy-paste/export fixes | **Major workflow reduction:** Gmail, Slack, and GitHub changes can initiate Work directly, eliminating manual polling and context transfer. |
| Broader creator workflow | **Major trend:** conversational procedures are becoming shareable, event-driven software objects with independent recipient-owned runtime state. |

## 20. Deep Drift Research Position

The weak description is:

> ChatGPT can run tasks when Gmail, Slack, or GitHub changes.

The serious description is:

> A conversationally defined procedure can now become an event-driven operational object with a trigger, condition, prompt, app dependency, approval boundary, shareable snapshot, recipient-owned copy, and runtime permission state, while portions of that object's sharing and snapshot history are not currently represented in ordinary account exports.

Therefore:

```text
TASK
!= PROMPT

EVENT
!= AUTHORIZATION

SHARED
!= CONTEXT TRANSFERRED

COPY
!= CLONE OF PERMISSIONS

SAME SHARE URL
!= SAME HISTORICAL SNAPSHOT

PRODUCT PERSISTENCE
!= EXPORT COVERAGE
```

The serious Deep Drift requirement is:

> **Every event-driven LLM workflow should preserve the exact trigger event, condition evaluation, prompt/task version, connected-app and workspace permission state, shared snapshot identity, recipient-copy lineage, approval events, signed-in session context where relevant, execution result, and export/compliance coverage necessary to reconstruct why the workflow acted.**

The AI workflow has stopped waiting politely for the human to notice something. Good. Now the machinery needs receipts.

## 21. Evidence Boundary

Platform facts in this report are grounded in first-party OpenAI documentation retrieved on 30 August 2026.

OpenAI states that eligible Work users can create event-triggered tasks for new Gmail messages, Slack channel messages, and GitHub pull request activity; task views expose Trigger, Condition, and Prompt; permissions and approval requirements continue to apply; eligible tasks can be shared as independent recipient-owned copies using recipient app connections and permissions; shared tasks do not transfer chat history, saved memories, files, connected-app data, credentials, custom instructions, or workspace permissions; scheduled tasks, shared scheduled-task links, and saved task snapshots are not currently included in personal-account data exports; the Enterprise Compliance API includes underlying scheduled tasks but not shared task links or their saved snapshots; and Work can continue on some signed-in websites after user authentication while still requiring confirmation for consequential actions.

ETWSTPF and all named companion constructs, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. OpenAI Help Center, **ChatGPT Work and Codex**, updated 27 August 2026, checked 30 August 2026.  
   https://help.openai.com/en/articles/20001275

2. OpenAI Help Center, **ChatGPT shared links**, updated 28 August 2026, checked 30 August 2026.  
   https://help.openai.com/en/articles/7925741-chatgpt-shared-links-

3. OpenAI Help Center, **ChatGPT Release Notes**, August 25-28, 2026 entries, checked 30 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
