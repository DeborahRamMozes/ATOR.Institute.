# Deep Drift Research Update

## Cross-Surface Work Continuation Fidelity: Cloud-Synced Work, Local Work, Unified Recents, and Split Workflow Topologies

**Research date:** Wednesday, 26 August 2026  
**ĀTØR observation time:** 23:45:24 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan. No new late-26-August launch was found in memory, skills, mini-app builders, chat-to-document export, DOCX/PDF generation, or copy/paste/export fidelity. One materially useful creator-workflow pattern was identified as new-to-log.

## Executive Summary

OpenAI's current ChatGPT desktop release notes document a continuity architecture that deserves its own Deep Drift benchmark:

- Chat and Work conversations appear together in **Unified Recents** on desktop.
- Existing **Projects** are visible in the desktop app.
- A user can start a Chat conversation inside a Project or begin a Work thread using Project context.
- **Cloud Work conversations sync across web, mobile, and desktop**, allowing a task to begin on one surface and continue on another.
- **Local conversations remain on the computer**.
- **Codex remains a separate view with separate workflows/history**.

This creates an important distinction:

```text
SAME PRODUCT
!=
SAME CONTINUITY TOPOLOGY
```

A user can see Chat, Work, Projects, and Codex under one desktop shell while the underlying workflow state follows different persistence and portability rules.

For Deep Drift, the relevant causal object is therefore:

```text
USER INTENT
-> WORK SURFACE
-> CLOUD OR LOCAL EXECUTION
-> PROJECT CONTEXT
-> RECENTS / DISCOVERY LAYER
-> DEVICE TRANSITION
-> CONTINUED WORKFLOW
-> ARTIFACT / STATE
```

This creates a new benchmark family:

**Cross-Surface Work Continuation Fidelity (CSWCF)**.

## New Deep Drift Construct: Cross-Surface Work Continuation Fidelity

### Definition

**Cross-Surface Work Continuation Fidelity (CSWCF)** measures whether a long-running creator workflow preserves the correct task state, project context, artifacts, instructions, and user expectations when work moves across web, mobile, desktop, and local-only execution environments.

### Core distinction

```text
WORK CONVERSATION VISIBLE
!=
WORK EXECUTION STATE PORTABLE

WORK HISTORY VISIBLE
!=
LOCAL FILE STATE PORTABLE

PROJECT CONTEXT AVAILABLE
!=
EVERY ASSOCIATED ARTIFACT AVAILABLE
```

## Why This Matters

The desktop interface increasingly presents ChatGPT as one creator environment.

But continuity remains conditional.

A cloud Work thread may follow the user:

```text
DESKTOP
-> WEB
-> MOBILE
-> DESKTOP
```

while a local conversation or local artifact may remain:

```text
DESKTOP MACHINE A
-> MACHINE A ONLY
```

The visible interface can therefore converge faster than the underlying state architecture.

This is a recurring Deep Drift pattern:

```text
SURFACE CONVERGENCE
>
STATE CONVERGENCE
```

## New Failure Classes

### Cloud/Local Continuity Misclassification
The user believes a workflow is cloud-synced when it is local-only, or assumes a local task will appear on another device.

### Recents-Surface False Equivalence
Chat and Work appear together in Unified Recents, creating the impression that their execution semantics and persistence behavior are equivalent.

### Device-Transition State Loss
A cloud Work thread opens on another device but loses part of the expected project state, artifact state, tool context, or unresolved task state.

### Local Artifact Orphaning
A Work result depends on a local file or local output that does not travel with the cloud conversation.

### Cross-Device Tool-Surface Drift
The conversation survives a device transition, but the tools available on the destination surface differ from those available on the origin surface.

### Project-Context Continuation Drift
A Work thread started with Project context is continued elsewhere, but the user cannot easily determine which Project files, instructions, or memory state remain active.

### Unified-Recents Identity Ambiguity
The user sees one recents list but cannot immediately distinguish Chat, cloud Work, local Work, Project-bound work, and Codex histories by persistence topology.

### Codex/Work Boundary Confusion
The desktop shell makes navigation between ChatGPT and Codex easier, but Codex history/workflows remain separate. The user may infer continuity where the product preserves separation.

## Deep Drift Benchmark: Device Transition Test

### Controlled procedure

Create four test cases:

```text
CASE A
cloud Work thread with Project context

CASE B
cloud Work thread using cloud files

CASE C
local desktop Work / local-file-dependent workflow

CASE D
Codex task associated with the same broader project
```

For each case:

1. establish a known task state;
2. create one unresolved instruction;
3. produce one intermediate artifact;
4. switch from desktop to web;
5. switch from web to mobile;
6. return to desktop;
7. inspect state survival.

Measure:

- conversation visibility;
- project-context survival;
- unresolved-task continuity;
- artifact visibility;
- local-file availability;
- tool availability;
- latest-instruction fidelity;
- provenance clarity;
- human rehydration minutes.

## New Metric: Cross-Surface Continuation Success Rate

```text
CSCSR =
device transitions preserving required workflow state
/
all tested device transitions
```

## New Metric: Local-State Orphan Rate

```text
LSOR =
workflow dependencies unavailable after device transition
because they remained local
/
all workflow dependencies
```

## New Metric: Surface Topology Transparency

```text
STT =
workflow instances whose persistence/portability topology
is correctly understood by the user
/
all tested workflow instances
```

This metric matters because reliable architecture is not enough if the interface makes the architecture hard to understand.

## Unified Recents as a Discovery Layer

Unified Recents is useful because it reduces search friction.

But a unified discovery layer does not imply unified state.

Deep Drift should distinguish:

```text
DISCOVERY UNIFICATION
!=
EXECUTION UNIFICATION
!=
STORAGE UNIFICATION
```

This distinction matters for any platform that merges heterogeneous workflow objects into one history list.

A single list can contain objects with radically different:

- persistence;
- tool access;
- artifact state;
- memory state;
- device portability;
- permission boundaries.

## Project Context and Cross-Device Continuation

OpenAI states that Projects now appear in the desktop app and can seed either Chat or Work.

This creates a creator-workflow chain:

```text
PROJECT
-> CHAT OR WORK
-> DEVICE TRANSITION
-> CONTINUED TASK
```

The benchmark must therefore ask not only whether the conversation synced, but whether the **effective Project state** remained stable.

A synchronized transcript without synchronized project dependencies is incomplete continuity.

## Relation to Existing ĀTØR Seven-Layer State Protocol Family

| Protocol | Relevance |
|---|---|
| MMSF | The correct Project/memory state must survive surface transitions. |
| PSMC | Local and cloud artifact mutations must be distinguished. |
| SSRP | Cloud, local, device-visible, and user-visible state must reconcile. |
| ASRF | The origin surface, destination surface, tools, and artifacts must remain reconstructable. |
| PVP | Procedures/Skills active on one surface must not silently change on another. |
| ALRTSF | Artifacts must retain lineage when conversation and file state diverge across devices. |
| SCRR | The next device should resume the workflow without forcing human rehydration. |

## Broader Platform Scan

### OpenAI
No new late-26-August release was found in the target categories during this pass.

The strongest standing creator-workflow signals remain:
- webhook-triggered and shared scheduled tasks;
- mutable Project memory boundaries;
- native Docs/Sheets/Slides editing in Work;
- reusable Skills and plugins;
- faster segmented loading for long conversations;
- interactive-content generation;
- Site tools / WebMCP;
- cloud Work continuation across web, mobile, and desktop;
- local conversations remaining local;
- Codex preserving a separate workflow/history surface.

### Anthropic
No first-party update newer than the already logged 25 August shared-memory architecture surfaced in this pass.

Standing signals remain:
- shared memory across Claude chat and Cowork;
- user-editable/deletable memory;
- Skills API;
- Files API;
- computer/browser use;
- mounted memory;
- richer session observability;
- Cowork continuity across Chrome, desktop, web, and mobile.

### Google
No materially newer target-category update surfaced in this pass.

Standing signals remain:
- Ask Gemini in Chat rollout;
- Gemini interactive simulations/models;
- Sheets Canvas read-write mini-apps;
- selective Gemini Notebook copying;
- physical-surface Gemini note-taking controls;
- improving structural spreadsheet import/export fidelity.

### Microsoft
No materially newer first-party creator-workflow release surfaced in this pass.

Standing signals remain:
- Copilot Pages;
- Word/PDF conversion;
- Researcher;
- Critique / Model Council;
- research-artifact continuity across product transitions.

## Deep Drift Research Position

Creator workflow continuity should no longer be modeled as a property of the conversation alone.

The stronger model is:

```text
WORKFLOW CONTINUITY
=
CONVERSATION STATE
+ PROJECT STATE
+ ARTIFACT STATE
+ TOOL STATE
+ EXECUTION LOCATION
+ DEVICE PORTABILITY
+ STORAGE TOPOLOGY
```

Therefore:

```text
SAME RECENTS LIST
!=
SAME WORKFLOW SEMANTICS

SAME CONVERSATION
!=
SAME ARTIFACT AVAILABILITY

CLOUD THREAD SYNCED
!=
LOCAL DEPENDENCIES SYNCED

ONE DESKTOP SHELL
!=
ONE STATE SYSTEM
```

The interface is becoming unified.

The state architecture is still plural.

Deep Drift should measure the gap.

## Evidence Boundary

Platform facts in this report are grounded in current first-party OpenAI release notes and fresh first-party scans of Anthropic, Google, and Microsoft sources. CSWCF, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, ChatGPT Release Notes, July 16, 2026 - desktop app experience updates and cross-device Work continuation: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
2. OpenAI Help Center, ChatGPT Release Notes, August 25, 2026 - webhook tasks and mutable Project memory.
3. OpenAI Product Release Notes, current through August 24, 2026: https://openai.com/products/release-notes/
4. Anthropic Claude Platform Release Notes, current through August 19, 2026: https://platform.claude.com/docs/en/release-notes/overview
5. Anthropic, Claude Cowork in Chrome side panel, August 12, 2026: https://claude.com/blog/cowork-chrome-side-panel
6. Google Workspace Updates, August 2026 archive: https://workspaceupdates.googleblog.com/2026/08/
7. Microsoft Support, Microsoft 365 Copilot creator/research workflow documentation: https://support.microsoft.com/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
