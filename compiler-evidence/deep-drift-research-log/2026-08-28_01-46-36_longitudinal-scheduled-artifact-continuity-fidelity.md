# Deep Drift Research Update

## Longitudinal Scheduled Artifact Continuity Fidelity

**Research date:** Friday, 28 August 2026  
**ĀTØR observation time:** 01:46:36 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. No newer launch displaced the latest memory, Skills, browser-agent, mini-app, chat-to-document, DOCX/PDF, or copy/export changes already logged. One materially updated OpenAI workflow pattern was identified as new-to-log.

## Executive Summary

OpenAI's Business Operations guidance, updated on 27 August 2026, makes a recurring creator-workflow architecture explicit that deserves its own Deep Drift benchmark.

A scheduled ChatGPT Work workflow is instructed to:

- use the same approved source systems on every run;
- create a **new dated workbook** rather than overwrite earlier reviews;
- preserve all previous review artifacts;
- compare the current run against saved prior reviews;
- classify blockers and actions as **new, ongoing, or resolved**;
- avoid claiming history or trends when prior evidence is unavailable;
- keep unresolved source conflicts visible;
- preserve human approval before posting stakeholder updates;
- verify that required connections remain available;
- review the first few scheduled runs rather than assuming scheduling equals reliability.

This shifts the automation model from:

```text
SCHEDULE
-> RUN TASK
-> PRODUCE OUTPUT
```

toward:

```text
SCHEDULE
-> RECOVER APPROVED SOURCES
-> RECOVER PRIOR ARTIFACT CHAIN
-> CREATE NEW DATED ARTIFACT
-> COMPARE AGAINST PRIOR STATES
-> CLASSIFY TEMPORAL CHANGE
-> PRESERVE CONFLICTS / MISSING STATE
-> PREPARE FOLLOW-UP
-> HUMAN APPROVAL
-> RETAIN RUN FOR NEXT CYCLE
```

For Deep Drift, recurring work is no longer merely repeated execution.

It is a **longitudinal state-comparison system**.

This creates a new benchmark family:

**Longitudinal Scheduled Artifact Continuity Fidelity (LSACF)**

and a companion construct:

**Temporal Comparison Provenance Fidelity (TCPF)**.

## New Deep Drift Construct: Longitudinal Scheduled Artifact Continuity Fidelity

### Definition

**Longitudinal Scheduled Artifact Continuity Fidelity (LSACF)** measures whether a recurring AI workflow can execute repeatedly while preserving the historical artifact chain required to make valid statements about change over time.

A longitudinal workflow should preserve:

```text
RUN IDENTITY
RUN DATE
SOURCE SET
SOURCE FRESHNESS
PROCEDURE VERSION
PRIOR REVIEW SET
CURRENT REVIEW
CHANGE CLASSIFICATION
OPEN CONFLICTS
APPROVAL STATE
ARTIFACT LINEAGE
```

The central requirement is not that the workflow runs on time.

It is that each run understands what evidence makes a historical claim legitimate.

## Core Deep Drift Distinction

```text
RECURRING TASK
!=
LONGITUDINAL RESEARCH SYSTEM

PRIOR ARTIFACT EXISTS
!=
PRIOR ARTIFACT WAS LOADED

PRIOR ARTIFACT LOADED
!=
VALID BASELINE SELECTED

DIFFERENCE DETECTED
!=
TREND ESTABLISHED
```

This matters because a scheduled workflow can produce polished weekly artifacts while silently inventing temporal continuity.

## Why the Updated OpenAI Guidance Matters

OpenAI's current Business Operations workflow explicitly says that the first review must not claim week-over-week progress when prior-period data is unavailable.

Later scheduled runs are allowed to classify blockers as new, ongoing, or resolved only by comparing saved prior reviews.

That is a strong procedural distinction:

```text
NO PRIOR EVIDENCE
-> NO TREND CLAIM

PRIOR REVIEW AVAILABLE
-> CONTROLLED COMPARISON

MISSING / CONFLICTING SOURCE
-> KEEP UNCERTAINTY VISIBLE
```

This is materially different from a recurring prompt that simply rewrites a status report every Monday.

## New Construct: Temporal Comparison Provenance Fidelity

### Definition

**Temporal Comparison Provenance Fidelity (TCPF)** measures whether every claim about change over time can be reconstructed to the exact prior and current evidence states used in the comparison.

For a claim such as:

```text
"Packaging blocker is ongoing."
```

a later reviewer should be able to identify:

```text
CURRENT RUN
CURRENT SOURCE RECORDS
PRIOR RUN
PRIOR SOURCE / REVIEW RECORD
MATCHING ENTITY
COMPARISON RULE
CLASSIFICATION RESULT
```

If those links are absent, the label is narrative, not provenance.

## New Failure Classes

### Baseline Selection Drift

The workflow compares the current run against the wrong prior review, such as an older artifact, incomplete run, manually revised copy, or wrong project period.

### Invented Temporal Continuity

The workflow labels something "ongoing," "improved," "worsened," or "resolved" without sufficient prior evidence.

### Historical Artifact Overwrite

A scheduled run updates the previous workbook instead of creating a new dated artifact, destroying the very history required for comparison.

### Entity-Matching Drift

The same blocker, owner, supplier, metric, or action appears under slightly different labels across runs and is incorrectly treated as a new item or incorrectly merged with another item.

### Resolution Hallucination

An item disappears from the latest source and is labeled resolved even though absence may reflect missing data, changed scope, or connection failure.

### Stale-Baseline Contamination

The workflow uses a technically available prior artifact even though its source cutoff, procedure version, or reporting scope is incompatible with the current run.

### Source-Conflict Burial

A conflict visible in one run disappears from later summaries because the workflow optimizes for cleaner status reporting instead of preserving unresolved historical uncertainty.

### Connection-Availability Blindness

A scheduled workflow runs while one required connector or source system is unavailable and produces a falsely complete artifact from partial evidence.

### Approval-State Carryover Error

A stakeholder update is approved in one run and the workflow incorrectly treats that approval as authorization for future scheduled runs.

### Procedure-Version Temporal Confounding

The workflow changes its template, source rules, classification logic, or Skill version, then compares outputs across the change as if the method were stable.

## Deep Drift Benchmark: Scheduled Longitudinal Review Test

### Controlled setup

Create a recurring workflow with three approved sources and one output template.

Run five controlled cycles.

### Run 1 - No baseline

```text
SOURCE:
Blocker A present
Blocker B present

EXPECTED:
No historical trend language.
New dated artifact.
Both items described as current.
```

### Run 2 - Controlled persistence

```text
SOURCE:
Blocker A present
Blocker B absent with explicit resolution evidence
Blocker C added

EXPECTED:
A = ongoing
B = resolved
C = new
```

### Run 3 - Missing connector

```text
SOURCE:
One required source unavailable

EXPECTED:
Partial-state warning or exception artifact.
No false resolution claims.
```

### Run 4 - Procedure update

Change the review method from version V1 to V2.

Expected behavior:

```text
VERSION CHANGE VISIBLE
COMPARABILITY LIMIT NOTED
NO SILENT TREND CONTINUITY
```

### Run 5 - Entity rename

Rename Blocker A while preserving controlled identifiers.

Expected behavior:

```text
SAME ENTITY RECOGNIZED
NOT MISCLASSIFIED AS NEW
```

## New Metrics

### Longitudinal Baseline Accuracy

```text
LBA =
runs using the correct valid prior baseline
/
all runs requiring comparison
```

### Temporal Claim Traceability

```text
TCT =
historical / change claims reconstructable
to current + prior evidence
/
all material temporal claims
```

### Historical Artifact Preservation Rate

```text
HAPR =
scheduled runs preserving prior review artifacts
without destructive overwrite
/
all scheduled runs
```

### False Resolution Rate

```text
FRR =
items incorrectly classified as resolved
/
all resolved classifications
```

### Method-Change Disclosure Fidelity

```text
MCDF =
comparisons affected by a procedure/version change
that explicitly disclose the comparability change
/
all comparisons affected by method change
```

## New Construct: Artifact Chain as Working Memory

Recurring scheduled workflows increasingly use prior artifacts as a machine-readable continuity layer.

This is distinct from ordinary conversational memory.

```text
CONVERSATION MEMORY
-> remembers interaction state

ARTIFACT CHAIN
-> preserves dated evidentiary states
```

The artifact chain can therefore act as a **longitudinal external memory system**.

That is powerful because dated artifacts are more inspectable than invisible memory.

It is dangerous because a bad artifact can become the next run's baseline.

## Artifact Chain Contamination

A single incorrect review can propagate:

```text
RUN 1 ERROR
-> SAVED ARTIFACT
-> RUN 2 BASELINE
-> FALSE "ONGOING" LABEL
-> RUN 3 BASELINE
-> APPARENT TREND
```

This creates a new failure class:

**Recursive Historical Contamination**

### Definition

Recursive Historical Contamination occurs when an incorrect generated artifact becomes accepted historical input for future scheduled runs, allowing one early inference error to accumulate false temporal legitimacy.

Deep Drift should therefore test whether later runs compare only against raw source evidence, only prior artifacts, or a controlled combination of both.

## Human Approval Is Run-Specific State

The OpenAI workflow keeps stakeholder posting behind a human approval gate on each scheduled run.

That matters because:

```text
APPROVAL OF PROCEDURE
!=
APPROVAL OF FUTURE OUTPUT

APPROVAL OF RUN N
!=
APPROVAL OF RUN N+1
```

A recurring workflow should preserve this distinction.

Human approval is not a permanent permission token hiding inside the schedule.

## Connection Health Is Part of Longitudinal Validity

OpenAI also instructs users to check that scheduled tasks still have access to required connections and to review the first few runs.

This gives Deep Drift another important distinction:

```text
TASK RAN
!=
REQUIRED EVIDENCE WAS AVAILABLE
```

A scheduler can fire perfectly while the research workflow is evidentially broken.

Therefore connection health should be part of run provenance:

```text
CONNECTION_STATE_CARD

source:
connection_status:
last_verified:
data_cutoff:
permission_state:
failure_mode:
run_effect:
```

## Why This Matters Beyond Business Operations

The same architecture applies to:

- daily AI-materials briefs;
- weekly scientific literature reviews;
- recurring market monitoring;
- reliability logs;
- compliance reports;
- creative campaign reviews;
- research ledgers;
- longitudinal model benchmarks.

Any scheduled research system that compares "what changed" requires a valid baseline.

Deep Drift itself is one of those systems.

Therefore this is not merely a platform observation.

It is a direct methodological requirement for the research program.

## Relation to Existing Deep Drift Constructs

LSACF extends but does not replace previously logged constructs:

- **Reactive Workflow Continuity Fidelity** asks whether an event-triggered run recovers the right current state.
- **Event-to-Action Provenance Fidelity** asks what triggered and executed a workflow.
- **Workflow Distillation Fidelity** asks whether a repeatable method was extracted correctly.
- **Artifact-State Contract Fidelity** asks whether each produced artifact preserves declared invariants.
- **Session Continuity, Retrieval & Rehydration** asks whether work can resume without rebuilding context.
- **LSACF** asks whether repeated runs preserve valid historical state strongly enough to make temporal claims.

The added dimension is **time**.

## Relation to the ĀTØR Seven-Layer State Protocol Family

### MMSF - Mounted Memory State Fidelity
Historical artifact state should not be confused with persistent model memory.

### PSMC - Persistent State Mutation Control
Each scheduled run creates new durable artifacts and must avoid overwriting prior evidence.

### SSRP - Sync-Back State Reconciliation
Current source state, saved prior artifact state, scheduled task state, and user-visible state must reconcile.

### ASRF - Agent State Reconstruction Fidelity
The full chain from scheduled trigger to baseline selection, current evidence, comparison, artifact, and approval must remain reconstructable.

### PVP - Procedural-Version Provenance
Historical comparisons must record which procedure/Skill/template version governed each run.

### ALRTSF - Artifact Lineage & Round-Trip State Fidelity
Every dated review must preserve lineage to its sources and later comparisons.

### SCRR - Session Continuity, Retrieval & Rehydration
A future run should retrieve the correct prior state without forcing the human to reconstruct historical context manually.

## Fresh Platform Scan

### OpenAI

The materially new-to-log item in this pass is the longitudinal recurring-artifact behavior clarified in the Business Operations workflow updated 27 August 2026.

Current related signals include:

- scheduled Work workflows;
- human approval on consequential external updates;
- native editable Google Sheets and Docs;
- reusable Skills derived from reviewed workflows;
- connected data plugins;
- preserved source conflicts;
- explicit refusal to invent unsupported owners, dates, progress, or history.

### Anthropic

No first-party release newer than the 26 August browser updates surfaced in this scan.

Standing signals remain:

- Claude in Chrome autonomous browser actions;
- Cowork built-in browser;
- shared memory across chat and Cowork;
- Skills API;
- Files API;
- mounted memory and richer session observability.

### Google

No materially newer Workspace launch surfaced beyond the August creator-workflow set already logged.

Standing signals remain:

- Workspace Studio;
- Sheets Canvas read-write mini-apps;
- Ask Gemini in Chat;
- Gemini Notebook copying;
- interactive simulations/models;
- cross-platform migration improvements.

### Microsoft

No broad release batch newer than 25 August surfaced.

Standing signals remain:

- Copilot Pages;
- multi-artifact Notebook generation;
- mobile artifact steering;
- multimodal Capture;
- Python-backed Excel editing;
- model selection in Word;
- inline artifact inspection.

## Category Status: Fresh Scan

| Category | Fresh finding |
|---|---|
| Memory | No newer release than the latest logged cross-surface/shared/project-memory changes. |
| Skills / reusable procedures | No newer product launch; updated Work guidance strengthens run-specific historical procedure requirements. |
| Mini-app builders | No newer launch than Sheets Canvas / interactive creator surfaces already logged. |
| Chat-to-document export | No newer launch found. |
| DOCX / PDF generation | No newer launch found. |
| Copy-paste / export fixes | No newer same-day fix found. |
| Broader creator workflow | **Material delta:** scheduled artifacts are explicitly treated as preserved longitudinal review states rather than disposable recurring outputs. |

## Deep Drift Research Position

The creator-agent frontier has reached a point where:

```text
AUTOMATION
CAN PRODUCE HISTORY
```

That means automation can also fabricate history if its baselines are weak.

The key research question is no longer only:

> Did the scheduled task run correctly?

It is:

> Did the scheduled run retrieve the correct historical state, preserve prior evidence, distinguish absence from resolution, disclose method changes, and make every claim about change reconstructable?

Therefore:

```text
REPEATABILITY
!=
LONGITUDINAL VALIDITY

SCHEDULED
!=
HISTORICALLY GROUNDED

PRIOR OUTPUT
!=
VALID BASELINE

POLISHED TREND
!=
EVIDENCED TREND
```

Deep Drift should treat the historical artifact chain as a first-class research object.

Otherwise the system can become extremely good at remembering a history it invented itself.

## Evidence Boundary

Platform facts in this report are grounded in the OpenAI Academy **ChatGPT Work for Business Operations teams** resource, published 26 August and updated 27 August 2026, plus fresh first-party release-source checks across OpenAI, Anthropic, Google, and Microsoft. LSACF, TCPF, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Academy, **ChatGPT Work for Business Operations teams: Webinar Resource Guide**, published 26 August 2026, updated 27 August 2026: https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-work-for-business-operations-teams-webinar-resource-guide-2026-08-26
2. OpenAI Academy, **ChatGPT Work for Marketing teams: Webinar Resource Guide**, 27 August 2026: https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-work-for-marketing-teams-webinar-resource-guide-2026-08-26
3. OpenAI Help Center, **Skills in ChatGPT**, current as of 28 August 2026: https://help.openai.com/en/articles/20001066
4. Anthropic product announcements, current through 26 August 2026: https://claude.com/blog-category/announcements
5. Google Workspace Updates, August 2026 archive: https://workspaceupdates.googleblog.com/2026/08/
6. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through 25 August 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
