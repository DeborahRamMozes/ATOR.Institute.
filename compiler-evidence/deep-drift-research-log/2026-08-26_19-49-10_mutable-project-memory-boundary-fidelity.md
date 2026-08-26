# Deep Drift Research Update

## Mutable Project Memory Boundary Fidelity

**Research date:** Wednesday, 26 August 2026  
**ATØR observation time:** 19:49:10 WIB / 12:49:10 UTC  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan. One materially important memory-governance delta identified.

## Executive Summary

OpenAI now allows users to change the memory mode of an existing ChatGPT Project after the project has already been created. Eligible unshared projects can switch between **Default memory** and **Project-only memory**. OpenAI states that shared projects remain locked to Project-only memory, that changes may take a few hours to take effect, and that ChatGPT Work is not available inside projects using Project-only memory.

This turns project memory from a static creation-time property into a **mutable runtime boundary**.

For Deep Drift, the important distinction is:

```text
PROJECT MEMORY MODE CHANGED
!=
NEW MEMORY BOUNDARY ACTIVE IMMEDIATELY
```

and:

```text
PROJECT-ONLY MEMORY
-> STRONGER CONTEXT ISOLATION
-> NO OUTSIDE MEMORY/CHAT REFERENCE
-> PROJECT CONTENT EXCLUDED FROM OUTSIDE MEMORY
-> CHATGPT WORK UNAVAILABLE IN THAT PROJECT
```

This creates a new benchmark family:

**Mutable Project Memory Boundary Fidelity (MPMBF)**.

The research question becomes:

> When a user changes a project's memory boundary after work has already accumulated, does the new boundary activate cleanly, consistently, and without leaving residual cross-project influence?

## New Deep Drift Construct: Mutable Project Memory Boundary Fidelity

### Definition

**Mutable Project Memory Boundary Fidelity (MPMBF)** measures whether changing a project's memory mode correctly changes what context may flow into and out of the project, while preserving project continuity, respecting propagation delay, and avoiding residual influence from the previous memory mode.

### Core state model

```text
PROJECT STATE P1
+ MEMORY MODE M1
-> USER CHANGES MODE
-> TRANSITION WINDOW
-> MEMORY MODE M2
-> LATER PROJECT BEHAVIOR
```

The transition window matters because OpenAI explicitly states that the change may take a few hours to take effect.

## Why This Matters

Memory settings are no longer merely preferences.

They govern contextual reach.

A switch from Default memory to Project-only memory changes whether the project may:

- use memories from outside the project;
- use conversations from outside the project;
- contribute project information to memory used in chats outside the project;
- remain eligible for ChatGPT Work.

That is a real execution-state mutation.

The user is changing the **context topology** of the project.

## New Failure Classes

### Memory-Boundary Propagation Lag

The user changes the setting, but old memory behavior persists longer than expected or changes inconsistently across sessions.

### Residual External-Memory Influence

After switching to Project-only memory, the project still appears influenced by outside memories or conversations.

### Residual Outbound Memory Leakage

After switching to Project-only memory, project information still appears to influence chats outside the project.

### Boundary-State Ambiguity

The UI shows one memory mode while behavior still reflects another during the propagation window.

### Work Eligibility Boundary Surprise

The user switches to Project-only memory and later discovers that ChatGPT Work is unavailable in that project.

This is not merely a feature incompatibility. It is a product-level tradeoff between **context isolation** and **agentic execution surface availability**.

### Shared-Project Lock Inconsistency

A user expects a shared project to switch to Default memory even though shared projects remain locked to Project-only memory.

### Historical Context Reinterpretation Drift

Changing the project boundary alters which earlier conversations are available, causing later responses to reinterpret prior work under a different context set.

## Deep Drift Benchmark: Memory-Boundary Transition Test

### Controlled procedure

```text
1. Create unshared project P.
2. Use Default memory.
3. Introduce controlled external-memory fact E1 outside P.
4. Confirm whether P can use E1.
5. Add project-only fact P1 inside P.
6. Switch P to Project-only memory.
7. Test immediately.
8. Test again after the stated propagation window.
9. Test whether P still uses E1.
10. Test whether a chat outside P uses P1.
11. Test Work availability inside P.
12. Switch back to Default memory and repeat.
```

## Metrics

### Boundary Transition Accuracy

```text
BTA =
runs obeying newly selected memory boundary
/
all post-transition test runs
```

### Residual Context Leakage Rate

```text
RCLR =
post-transition runs influenced by forbidden prior context
/
all post-transition runs
```

### Propagation-State Clarity

Measures whether the UI and observed behavior clearly communicate that a setting change is still propagating.

### Capability Tradeoff Visibility

Measures whether the user can understand, before or during the switch, that Project-only memory disables ChatGPT Work in that project.

## Relation to the ĀTØR Seven-Layer State Protocol Family

- **MMSF:** project memory identity, scope, and current mode must be explicit.
- **PSMC:** changing memory mode is persistent-state mutation.
- **SSRP:** UI state, actual memory behavior, and project behavior must reconcile after propagation.
- **ASRF:** later outputs should be traceable to the memory mode active at execution time.
- **PVP:** product-version/date provenance matters because memory behavior changes over time.
- **ALRTSF:** artifacts generated before and after the memory-boundary switch may depend on different context scopes.
- **SCRR:** project continuity must survive boundary changes without pretending all historical context remains equally available.

## Broader Creator-Workflow Scan

No materially newer first-party release was found in this pass for:

- reusable skills;
- mini-app builders;
- chat-to-document export;
- DOCX/PDF generation;
- copy/paste or export fidelity.

The strongest standing signals remain:

### OpenAI

- mutable project memory settings;
- project-only memory isolation;
- Work incompatibility inside project-only memory projects;
- webhook-triggered and shared scheduled tasks;
- signed-in web actions in Work;
- native artifact editing;
- plugin/skills packaging;
- long-conversation segmented loading.

### Anthropic

- shared cross-surface memory across Claude chat and Cowork;
- user-editable/deletable memory;
- Skills API;
- Files API;
- mounted memory stores;
- computer/browser use;
- richer agent observability.

### Google

- Ask Gemini in Chat rollout;
- interactive simulations/models;
- Sheets Canvas;
- selective Notebook copying;
- structural spreadsheet migration improvements.

### Microsoft

- Copilot Pages and Word/PDF conversion;
- Researcher;
- multi-model Critique / Model Council;
- retained research artifacts across workflow transitions.

## Deep Drift Research Position

Memory is becoming a **configurable execution boundary**, not a passive convenience feature.

The important question is no longer:

> Does the project remember?

It becomes:

> Which memory topology was active when this result was produced, when did that topology change, and did the new boundary actually take effect everywhere it was supposed to?

Therefore:

```text
MEMORY SETTING
!= IMMEDIATE MEMORY STATE

MEMORY ISOLATION
!= ZERO RESIDUAL INFLUENCE

PROJECT CONTINUITY
!= IDENTICAL CONTEXT TOPOLOGY

STRONGER ISOLATION
!= FULL FEATURE AVAILABILITY
```

The interesting tradeoff is now explicit:

```text
MORE ISOLATED PROJECT MEMORY
<->
LESS ACCESS TO WORK EXECUTION SURFACE
```

Deep Drift should treat memory-mode changes as versioned state transitions with a measurable propagation window.

## Evidence Boundary

Platform claims in this report are grounded in current first-party OpenAI release notes and Work documentation, with current Anthropic, Google, and Microsoft first-party materials checked for broader trend comparison. MPMBF, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, ChatGPT Release Notes, August 14 and August 25 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
2. OpenAI Help Center, Creating and editing documents, spreadsheets, and presentations with ChatGPT Work: https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work
3. OpenAI Help Center, Skills in ChatGPT: https://help.openai.com/en/articles/20001066-skills-in-chatgpt
4. Anthropic, Build production agents with computer use, the Skills API, and the Files API: https://claude.com/blog/computer-use-skills-api-files-api
5. Google Workspace Updates, August 2026: https://workspaceupdates.googleblog.com/2026/08/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
