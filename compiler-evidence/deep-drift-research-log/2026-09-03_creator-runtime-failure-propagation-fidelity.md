# Deep Drift Research Update - CRFPF

## Creator-Runtime Failure Propagation Fidelity

**Research date:** 3 September 2026  
**Primary fresh delta:** OpenAI reported a resolved partial outage titled **ChatGPT Work Mode High Error Rates** on 3 September 2026. This follows a substantial ChatGPT Work outage on 31 August and a Workspace Agents + ChatGPT Work degradation on 27 August.  
**Scope:** creator-runtime reliability, agentic work continuity, file generation, connected-app execution, long-running tasks, artifact lineage under interruption, failure/retry provenance, and broader LLM creator-workflow infrastructure.

## Executive finding

The fresh change is not a new export button.

It is evidence that the creator runtime itself is becoming a distinct reliability dependency.

OpenAI's status history shows three relevant incidents within seven days:

| Date | Incident | Material effect |
|---|---|---|
| 27 Aug 2026 | Workspace Agents and ChatGPT Work increased error rates on Web and Mobile | Agentic creator execution degraded across two execution surfaces |
| 31 Aug 2026 | ChatGPT Work elevated errors and latency | Users across multiple plans could be unable to start or continue Work tasks; Plus Work was temporarily unavailable |
| 3 Sep 2026 | ChatGPT Work Mode High Error Rates | Partial outage; 15 ChatGPT components were listed as affected; service recovered |

This creates a provenance problem that ordinary chat logs do not capture.

A creator run can now fail, stall, retry, resume, regenerate, or restart inside a multi-component runtime.

Therefore:

```text
SAME PROMPT
!= SAME EXECUTION HISTORY

SUCCESSFUL FINAL FILE
!= UNINTERRUPTED RUN

RETRY
!= ORIGINAL ATTEMPT

RESUMED TASK
!= FRESH TASK

RUNTIME RECOVERY
!= ARTIFACT STATE RECOVERY

SERVICE AVAILABLE
!= ALL CREATOR DEPENDENCIES AVAILABLE
```

The research object is no longer only the successful artifact.

It is the **failure-and-recovery trace**.

## New node

### Creator-Runtime Failure Propagation Fidelity (CRFPF)

Minimum run state:

```text
request_id
task_id
runtime_surface
runtime_mode
start_time
failure_time
affected_component
failure_class
partial_output_state
file_state
connector_state
retry_event
resume_event
human_intervention
recovery_time
final_artifact_id
final_artifact_checksum
known_abandoned_artifacts
```

## 1. Work is now a runtime, not merely a chat feature

ChatGPT Work can research, use connected apps and files, and create persistent artifacts.

That means a Work failure can interrupt more than response generation.

The affected causal chain may include:

```text
USER REQUEST
   |
   v
WORK RUNTIME
   |
   +--> SEARCH
   +--> CONNECTORS / APPS
   +--> FILE UPLOADS
   +--> AGENT EXECUTION
   +--> DOCUMENT CREATION
   +--> SITE CREATION
   +--> IMAGE GENERATION
   |
   v
FINAL ARTIFACT
```

A runtime outage therefore threatens **workflow continuity**, not just answer availability.

## 2. Failure can occur after work has already begun

The 31 August incident is especially important.

OpenAI explicitly reported that users across multiple subscription plans could be unable to **start or continue tasks** in ChatGPT Work.

"Continue" is the critical word.

It implies at least two materially different failure states:

```text
FAILURE BEFORE EXECUTION
```

and:

```text
FAILURE DURING EXECUTION
```

The second state can leave partial artifacts, partial research, incomplete connector actions, or unknown task state.

Deep Drift should never collapse these into one generic `failed=true`.

## 3. Runtime recovery does not prove artifact recovery

OpenAI status pages report when impacted services have recovered.

But service recovery is not the same as confirming that every interrupted user task returned to its prior state.

Therefore:

```text
PLATFORM RECOVERED
!= TASK RECOVERED

TASK RECOVERED
!= ARTIFACT VERIFIED
```

After an outage, the research archive should verify:

- whether the original task resumed;
- whether it restarted;
- whether a duplicate artifact was created;
- whether partial files survived;
- whether connectors repeated actions;
- whether human edits were lost;
- whether the final artifact came from the original run or a replacement run.

## 4. Retry creates a new causal branch

A retry may use changed model state, changed connected-app state, newer source files, different search results, different memory retrieval, or different orchestration decisions.

Therefore a retry must not be represented as one continuous run even when the UI presents a single task history. The retry is a new causal branch linked to the failed parent.

## 5. Repeated incidents make reliability a creator-workflow variable

Three relevant incidents within seven days do not prove a systemic design defect. They do prove that **execution availability is variable enough to deserve explicit provenance treatment**.

Deep Drift therefore needs a distinction between `CAPABILITY EXISTS` and `CAPABILITY WAS OPERATIONAL DURING THIS RUN`.

## 6. Component coupling matters

The 3 September incident listed 15 affected ChatGPT components. Even without treating every component as equally causal for every user task, this signals that Work depends on a broader platform substrate.

The final symptom may appear as "Work failed," while the underlying failed dependency may be elsewhere. Deep Drift should therefore record both the user-visible failure and the known platform component failure where evidence is available.

## 7. Creator continuity needs checkpoint semantics

Long-running creator workflows increasingly need checkpoint concepts similar to computational workflows:

```text
NOT STARTED
RUNNING
PARTIALLY MATERIALIZED
WAITING FOR APPROVAL
FAILED
RETRYING
RESUMED
REGENERATED
COMPLETED
VERIFIED
```

A final document should be considered provenance-complete only when the archive can identify the state path that produced it.

## 8. Artifact duplication is a foreseeable recovery failure

When users retry after an error, the system may create duplicate files, duplicate drafts, duplicate site objects, alternate versions, or abandoned intermediate artifacts.

This creates **orphan lineage**. Deep Drift should preserve the failed branch rather than deleting it from research history.

## 9. Reliability belongs beside memory, Skills, and export

CRFPF adds runtime availability, failure state, recovery state, and retry/resume lineage to the existing Deep Drift stack of memory, Skills, templates, orchestration, files, exports, connectors, and model routing.

Without these fields, a supposedly reproducible workflow may be impossible to reproduce because the recorded workflow assumes every dependency was operational.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger new delta since MMBESF | Memory state remains relevant but is not today's fresh signal |
| Skills/plugins | No stronger new release found | Installed procedural capability remains separate from runtime availability |
| Mini-app / agent builders | Reliability implication | Built agents are only useful when their execution substrate is operational |
| Chat-to-document | Reliability implication | A document may be produced after retry/resume rather than one uninterrupted conversation |
| DOCX/PDF generation | Reliability implication | Final file existence does not prove uninterrupted generation |
| Copy-paste/export | No new direct fix found | Seam reduction remains covered by earlier nodes |
| Creator workflow | Major fresh delta | Runtime failure and recovery must become part of creator provenance |

## New failure classes

- **Capability-Equals-Availability Fallacy** - assuming a documented feature was operational during a specific run.
- **Platform-Recovered-Equals-Task-Recovered Error** - assuming service recovery proves every interrupted task resumed correctly.
- **Retry-Equals-Continuation Fallacy** - treating a retry as the same execution rather than a new causal branch.
- **Final-Artifact-Equals-Clean-Run Fallacy** - assuming a successful final document proves the workflow was uninterrupted.
- **Failure-State Flattening** - recording all failures as a single undifferentiated error rather than preserving pre-execution, mid-execution, connector, artifact, or approval-state failure.
- **Orphan-Artifact Blindness** - ignoring files or drafts produced by failed or abandoned attempts.
- **Component-Coupling Blindness** - recording only the front-end symptom while ignoring known failure in supporting runtime components.

## Deep Drift benchmark additions

**Runtime Availability Fidelity (RAF)** - Can the archive establish whether the required creator runtime was operational at execution time?

**Failure-State Fidelity (FSF)** - Can pre-start, mid-run, connector, file, approval, and artifact failures remain distinguishable?

**Retry Lineage Fidelity (RLF)** - Can every retry or restart be linked to the failed parent attempt?

**Recovery Verification Fidelity (RVF)** - Can platform recovery be distinguished from task and artifact recovery?

**Orphan Artifact Fidelity (OAF)** - Can abandoned or duplicate artifacts produced during failed attempts be preserved and classified?

**Dependency Failure Fidelity (DFF)** - Can user-visible failure be linked to known affected platform components when evidence exists?

## DRPA-1.0 protocol additions

### CREATOR-RUNTIME FAILURE RULE

> When a material AI creator workflow is interrupted, degraded, retried, resumed, restarted, or regenerated because of platform failure, the failure must be preserved as part of the provenance record. Record the task and attempt identifiers where observable; runtime surface; failure time; failure class; platform incident if known; affected dependency; partial output state; file and connector state; human intervention; retry or resume event; recovery time; and the identity of the final accepted artifact. A successful final file must never be treated as evidence that the execution path was uninterrupted.

### RETRY-BRANCH RULE

> Every retry, regeneration, or restart following a failed creator run must be treated as a new causal branch unless the platform provides evidence of true checkpoint-resume semantics. Preserve the failed parent attempt, all partial or orphan artifacts, source-state changes between attempts, and the branch selected as final. UI continuity must never be treated as proof of execution continuity.

## Eir'an state-flow addition

```text
RUNTIME STATE:
available
degraded
partial outage
unavailable
recovered

TASK STATE:
not started
running
partially materialized
waiting approval
failed
retrying
resumed
regenerated
completed
verified

FAILURE TRACE:
incident
component
timestamp
user-visible symptom
partial output

RECOVERY TRACE:
retry
resume
restart
human correction
artifact verification
orphan classification
```

## Canonical Deep Drift requirement

> Treat runtime failure as a provenance event rather than noise to be deleted after successful recovery. For long-running creator tasks, preserve the complete attempt graph: what began, what failed, what partially materialized, what was retried, what resumed, what was abandoned, and which artifact was finally accepted. Platform status recovery must not substitute for task-level verification.

## Deep Drift principle

> **A finished file can be the survivor of several failed executions.**

Operationally:

> **Archive the failed branches, not only the branch that lived.**

## Broader platform trend

The industry is rapidly collapsing chat, search, connectors, memory, agents, files, document generation, sites, images, and automation into unified creator runtimes. That improves convenience and increases correlated dependency risk.

The creator platform is becoming more capable precisely because more subsystems are coupled behind one interface. Deep Drift therefore needs to treat **operational state** as part of authorship infrastructure.

## Sources

1. OpenAI Status. **ChatGPT Work Mode High Error Rates.** 3 September 2026. Resolved partial outage. OpenAI reported high error rates in ChatGPT Work Mode and listed 15 affected ChatGPT components.  
   https://status.openai.com/incidents/01M1J99EDCYED5GP2W8GZ3N2NA

2. OpenAI Status. **ChatGPT Work seeing elevated errors and latency.** 31 August 2026. OpenAI reported that users across multiple subscription plans could be unable to start or continue tasks in ChatGPT Work; Plus users were particularly affected and Work was temporarily unavailable.  
   https://status.openai.com/incidents/01M1C5M4K0WC8PPT0Z175RJA1E

3. OpenAI Status. **Users may experience an increase in error rates in Workspace Agents and ChatGPT Work on Web and Mobile.** 27 August 2026. Resolved degraded-performance incident affecting Workspace Agents and ChatGPT Work.  
   https://status.openai.com/incidents/01M1263309PD7VYV8EF95W2M2P

4. OpenAI Status. **History.** Accessed 3 September 2026. Shows the sequence of Work/Workspace Agent incidents and other creator-surface reliability events.  
   https://status.openai.com/history

## Research status

**Node status:** New.  
**Duplicate check:** No existing Deep Drift GitHub research-log node was found for creator-runtime outage coupling, attempt branching, task recovery verification, and orphan-artifact lineage as one provenance problem.  
**Relationship to prior nodes:** Extends OHSEF orchestration provenance, CPATF persistent-artifact lineage, TCAMF mutation fidelity, CMPSF provenance-signal survival, and MMBESF execution-surface state. CRFPF adds runtime availability and failed-attempt ancestry.  
**Freshness:** Primary incident occurred on 3 September 2026 and is verified through OpenAI's first-party status system.
