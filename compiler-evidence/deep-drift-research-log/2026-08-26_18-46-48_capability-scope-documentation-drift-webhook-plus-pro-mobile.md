# Deep Drift Research Update

## Capability-Scope Documentation Drift: Webhook Tasks Expand to Plus/Pro and Mobile Surfaces

**Research date:** Wednesday, 26 August 2026  
**ATØR observation time:** 18:46:48 WIB / 11:46:48 UTC  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan. No new launch was found in memory, skills, mini-app builders, DOCX/PDF generation, or copy/paste/export fidelity. One material capability-scope clarification/expansion was identified in OpenAI's freshly updated ChatGPT release notes.

## Executive Summary

OpenAI's current ChatGPT release notes now describe webhook-triggered scheduled tasks as available to **Plus and Pro users** in ChatGPT Work on **web, iOS, and Android**. The same note says shared tasks can be reviewed and customized by another person, who can connect their own apps and schedule an independent copy. Supported webhook sources include new Gmail messages, Slack channel messages, and GitHub pull-request activity. Actions that require approval pause until the user reviews them.

This materially sharpens the earlier Deep Drift record, which treated webhook-triggered Work primarily as an Enterprise/Edu workflow signal.

The important research delta is therefore not:

```text
WEBHOOK TASKS EXIST
```

but:

```text
DOCUMENTED CAPABILITY SCOPE CHANGED / CLARIFIED
-> PLAN ELIGIBILITY EXPANDED OR MORE PRECISELY DOCUMENTED
-> MOBILE SURFACES EXPLICITLY INCLUDED
-> SHARED TASK FORKING EXPLICITLY DOCUMENTED
-> APPROVAL PAUSE EXPLICITLY DOCUMENTED
```

For Deep Drift, this is a provenance problem in product documentation itself.

## New Deep Drift Construct: Capability-Scope Documentation Fidelity

### Definition

**Capability-Scope Documentation Fidelity (CSDF)** measures whether product documentation, release notes, and observable runtime behavior remain consistent about:

- who has access;
- which plans qualify;
- which platforms qualify;
- which apps/events are supported;
- which actions require approval;
- which collaboration/forking behaviors are available;
- when the capability became operational.

### Core distinction

```text
FEATURE NAME STABLE
!=
FEATURE SCOPE STABLE
```

A feature can keep the same name while its actual eligibility, surface coverage, approval model, or sharing semantics change.

## Why This Matters for Deep Drift

Deep Drift tracks workflow capability over time. That means a release-note correction or scope expansion can be as important as a new feature launch.

If the archive records only:

```text
25 AUGUST - WEBHOOK TASKS RELEASED
```

it loses important operational state:

```text
WHO COULD USE THEM?
ON WHICH SURFACES?
WITH WHICH APPROVAL BOUNDARIES?
COULD TASKS BE SHARED?
DID SHARED TASKS COPY OR SHARE STATE?
```

The research object must therefore include **capability scope**, not merely capability presence.

## Material OpenAI Delta

The current ChatGPT release notes specify:

- Plus and Pro eligibility for webhook-triggered tasks;
- Work on web, iOS, and Android as supported surfaces;
- Gmail, Slack, and GitHub pull-request webhook sources;
- shared tasks that another person can review, customize, connect to their own apps, and schedule as an independent copy;
- approval-required actions pause until review.

This adds two important creator-workflow dimensions.

### 1. Reactive Work Becomes Consumer/Professional, Not Only Enterprise

The workflow pattern is moving closer to ordinary individual creator use:

```text
EXTERNAL EVENT
-> WORK TASK
-> CONTEXT RECOVERY
-> DRAFT / ACTION
-> APPROVAL IF REQUIRED
```

This lowers the organizational threshold for event-driven agent work.

### 2. Shared Tasks Behave Like Forkable Workflow Definitions

A shared task can be customized by another person, connected to their own apps, and scheduled as an independent copy.

That means:

```text
SHARED TASK
!=
ONE SHARED EXECUTION STATE
```

Instead, it behaves more like:

```text
TASK DEFINITION T1
-> SHARE
-> USER B COPIES / CUSTOMIZES
-> CONNECTS DIFFERENT APP STATE
-> SCHEDULES T1-B
-> T1-A AND T1-B DIVERGE
```

This creates a workflow-versioning problem.

## New Failure Class: Shared-Task Fork Drift

**Shared-Task Fork Drift** occurs when two tasks derived from one shared definition diverge in:

- prompt/procedure;
- app connections;
- schedule;
- approval behavior;
- data scope;
- output format;
- downstream actions;

without sufficiently visible lineage.

The shared task may look conceptually identical while behaving differently for each user.

## New Failure Class: Eligibility Documentation Drift

**Eligibility Documentation Drift** occurs when a capability's documented plan/platform scope changes over time and archived research treats earlier documentation as permanently authoritative.

This is especially relevant when:

- rollout expands;
- documentation is corrected;
- plan eligibility changes;
- mobile/web/desktop availability diverges;
- enterprise and consumer surfaces converge.

## New Failure Class: Approval-Surface Ambiguity

OpenAI now explicitly states that actions requiring approval pause until review.

Deep Drift should test whether:

```text
APPROVAL REQUIRED
-> WORKFLOW PAUSES
-> USER SEES EXACT PROPOSED ACTION
-> USER APPROVES / REJECTS
-> EXECUTION STATE CONTINUES CORRECTLY
```

Failure can occur if:

- the task times out while waiting;
- state changes before approval;
- the approval object does not clearly identify the action;
- resumed execution uses stale context;
- a shared-task copy inherits different approval assumptions.

## New Benchmark: Capability-Scope Reconciliation Test

### Procedure

For a time-sensitive platform capability:

```text
1. Capture release-note claim at T1.
2. Capture Help Center / product documentation at T1.
3. Record plan eligibility.
4. Record platform eligibility.
5. Record app/event support.
6. Record approval requirements.
7. Test actual runtime where available.
8. Repeat at T2.
9. Diff documentation and runtime state.
10. Preserve both versions rather than overwriting history.
```

### Metrics

- plan-scope agreement;
- platform-scope agreement;
- documentation/runtime agreement;
- approval-rule agreement;
- sharing/fork semantics agreement;
- correction latency;
- archived-version completeness;
- human confusion cost.

## New Metric: Capability Scope Agreement Ratio

```text
CSAR =
verified scope attributes matching current documentation
/
all documented scope attributes tested
```

## New Metric: Documentation Mutation Visibility

```text
DMV =
documented scope changes with preserved historical trace
/
all observed documentation scope changes
```

This matters because a silently edited release note can make yesterday's accurate research appear wrong today.

## Standing Platform Scan

### OpenAI

Freshest material delta in this pass:

- webhook-triggered scheduled tasks are now explicitly documented for Plus and Pro on web, iOS, and Android;
- shared tasks can be copied/customized with independent app connections and schedules;
- approval-required actions pause for review.

The public product release-note page still lists the latest product-release item as the 24 August Codex app-server migration, while the ChatGPT Help Center changelog contains the 25 August webhook-task details.

### Anthropic

No first-party announcement newer than the 25 August shared-memory update was found.

Standing relevant signals remain:

- shared memory across chat and Cowork;
- user-editable/deletable memory;
- Skills API;
- Files API;
- mounted memory stores;
- computer/browser use;
- session observability.

### Google

No materially newer target-category launch was found in this pass.

Standing signals remain:

- Ask Gemini in Chat rollout beginning 26 August;
- Gemini interactive simulations/models;
- Sheets Canvas read-write mini-apps;
- selective Notebook copying;
- spreadsheet semantic migration improvements.

### Microsoft

No materially newer target-category launch was found in this pass.

Standing signals remain:

- Copilot Pages;
- Word/PDF conversion;
- Researcher;
- Critique / Model Council;
- artifact preservation across research workflow transitions.

## Deep Drift Research Position

The lesson from this pass is less glamorous than a new model release and more useful.

A serious longitudinal AI workflow archive must version **documentation state** as well as product state.

Therefore:

```text
FEATURE EXISTENCE
!= CAPABILITY SCOPE

CAPABILITY SCOPE
!= DOCUMENTED SCOPE

DOCUMENTED SCOPE AT T1
!= DOCUMENTED SCOPE AT T2

SHARED WORKFLOW
!= SHARED EXECUTION STATE
```

The research log should preserve not only what a platform could do, but **who could do it, where, under which approval model, and according to which version of the documentation**.

Otherwise Deep Drift risks becoming historically neat and operationally wrong, which would be a very human way to archive machines.

## Evidence Boundary

Platform claims in this report are grounded in current first-party OpenAI, Anthropic, and Google sources checked on 26 August 2026. Deep Drift construct names, failure classes, and metrics are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, ChatGPT Release Notes, updated 26 August 2026; 25 August entry on scheduled tasks responding to app updates and shared tasks: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
2. OpenAI Product Release Notes, checked 26 August 2026: https://openai.com/products/release-notes/
3. Anthropic Product Announcements, checked 26 August 2026: https://claude.com/blog-category/announcements
4. Anthropic, "Claude's memory works everywhere, and you decide what's in it," 25 August 2026: https://claude.com/blog/claudes-memory-works-everywhere-and-you-decide-whats-in-it
5. Google Workspace Updates 2026, checked 26 August 2026: https://workspaceupdates.googleblog.com/2026/
6. Google Workspace Updates, "Use Sheets canvas to visualize data in custom, interactive mini-apps," 13 August 2026: https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**