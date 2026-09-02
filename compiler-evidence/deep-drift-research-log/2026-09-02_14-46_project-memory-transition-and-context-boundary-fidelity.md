# Deep Drift Research Update — PMTCF

## Project-Memory Transition and Context-Boundary Fidelity

**Research date:** 2 September 2026  
**Primary fresh delta:** OpenAI ChatGPT Projects — existing projects can now switch between Default memory and Project-only memory  
**Release date:** 14 August 2026  
**Scope:** memory, project containers, context boundaries, delayed setting transitions, Work compatibility, creator workflow continuity, downstream document provenance.

## Executive finding

OpenAI now allows eligible unshared ChatGPT Projects to change their memory setting after the project has already been created. A project can switch between **Default memory** and **Project-only memory** without being recreated. Shared projects remain project-only. OpenAI also states that changes may take a few hours to take effect, and ChatGPT Work is not available in projects using project-only memory.

This changes a project from a static provenance container into a mutable context-boundary object.

```text
PROJECT CREATED
      |
      +--> Default memory
      |
      v
EXISTING CHATS / FILES / INSTRUCTIONS
      |
      v
MEMORY SETTING CHANGED
      |
      +--> Project-only memory
      |
      v
SAME PROJECT ID
DIFFERENT CONTEXT BOUNDARY
```

The same project can therefore preserve its visible contents while changing what external context may enter the project and what project context may influence work outside it.

## New node

### Project-Memory Transition and Context-Boundary Fidelity (PMTCF)

Core distinctions:

```text
SAME PROJECT
!= SAME MEMORY BOUNDARY

SETTING CHANGED
!= SETTING EFFECTIVE IMMEDIATELY

PROJECT-ONLY
!= GENERAL ACCOUNT MEMORY

VISIBLE PROJECT CONTENT
!= COMPLETE ACTIVE CONTEXT

SHARED PROJECT
!= SWITCHABLE MEMORY MODE

WORK AVAILABLE
!= WORK AVAILABLE UNDER PROJECT-ONLY MEMORY
```

## 1. The context boundary can now change after historical work already exists

Previously, project-memory mode was closely associated with project creation. The newer control lets eligible unshared projects move between Default memory and Project-only memory later.

This creates a temporal provenance problem. A project can contain chats, files, and project instructions while its context regime changes at time `T`. Therefore, output before `T` need not be context-equivalent to output after `T` even when the project ID, prompt, files, and model are unchanged.

For Deep Drift, the project identifier is no longer sufficient to reconstruct the active memory environment.

## 2. Project-only memory changes both inbound and outbound context flow

OpenAI states that with project-only memory, ChatGPT can use conversations from the same project for context, does not reference memories or conversations from outside the project, and keeps information from the project out of memory used in chats outside the project.

The boundary is therefore bidirectional. Project-only memory creates a compartment around project context while retaining internal longitudinal context.

## 3. Memory setting changes are not necessarily instantaneous

OpenAI explicitly notes that changes may take **a few hours** to take effect.

```text
SETTING UI CHANGED
      |
      v
TRANSITION WINDOW
      |
      v
NEW MEMORY BOUNDARY EFFECTIVE
```

So configuration state is not necessarily identical to effective execution state. Deep Drift should record the requested memory mode, change timestamp, effective memory mode where observable, and first verified effective timestamp.

## 4. Shared projects have a different state machine

Shared projects remain project-only and cannot be switched to Default memory. Collaboration state is therefore part of the memory-governance graph.

```text
UNSHARED PROJECT
Default <-> Project-only

SHARED PROJECT
Project-only only
```

## 5. Project-only memory can remove access to ChatGPT Work

OpenAI states that ChatGPT Work is not available in projects using project-only memory. This creates a direct coupling between **memory isolation** and **agentic execution capability**.

```text
MEMORY MODE
-> TOOL / AGENT AVAILABILITY
```

A project memory setting is therefore not merely a personalization setting. It is also a capability-routing variable.

## 6. Why this matters for chat-to-document, DOCX, PDF, and creator artifacts

A long-running project can generate Markdown, DOCX, PDF, code, images, and research conclusions across different memory regimes while keeping the same project name and visible source files. A final document cannot reveal this boundary transition by itself.

```text
DAY 1
Default memory
+ project files
+ outside account memory
-> DOCX A

DAY 10
Project-only memory
+ project files
- outside account memory
-> DOCX B
```

Both documents may carry the same project name, project files, author, and model family while their effective context differs.

## 7. Broader creator-workflow implication

AI workspaces are becoming mutable state containers rather than static folders.

```text
PROJECT
+
FILES
+
CHATS
+
INSTRUCTIONS
+
MEMORY MODE
+
COLLABORATION STATE
+
AGENT AVAILABILITY
+
TRANSITION TIMING
=
EFFECTIVE CREATOR ENVIRONMENT
```

The important shift is that **the environment can change without the project identity changing**.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | Major | Existing project context boundaries can now be changed after creation |
| Skills/plugins | No stronger new delta in this scan | Existing procedural-supply-chain nodes remain current |
| Mini-app builders | No stronger new delta | Existing interactive builder nodes remain current |
| Chat-to-document | Major provenance effect | Documents from the same project may inherit different memory regimes across time |
| DOCX/PDF | No new direct generation primitive | Final files need project-memory-state lineage |
| Copy-paste/export | No stronger fresh clipboard delta | Existing formatting/export nodes remain current |
| Creator workflow | Major | Memory isolation now changes agent availability and can transition asynchronously |

## New failure classes

### Same-Project Context Equivalence Error
Assuming all outputs from one project share the same memory boundary.

### Configuration-Effective-State Collapse
Treating the selected memory mode as immediately identical to the effective execution state.

### Boundary-Transition Erasure
Failing to record when an existing project changed from Default to Project-only memory or back.

### Project-ID Sufficiency Fallacy
Treating the project identifier as sufficient provenance for contextual state.

### Collaboration-State Memory Blindness
Ignoring that shared and unshared projects have different permitted memory transitions.

### Memory-Capability Decoupling Error
Assuming memory settings affect personalization only and not tool or agent availability.

### Cross-Boundary Artifact Ambiguity
Preserving documents from a project without recording which context regime was active when each artifact was generated.

## Deep Drift benchmark additions

**Project Memory Transition Fidelity (PMTF)** — Can each change between Default and Project-only memory be reconstructed by time?

**Requested-vs-Effective Memory Fidelity (REMF)** — Can the setting selected in the UI be distinguished from the memory regime actually in force during execution?

**Inbound Context Boundary Fidelity (ICBF)** — Can outside memories and conversations be shown as included or excluded for each project execution?

**Outbound Context Boundary Fidelity (OCBF)** — Can project-derived context be shown as eligible or ineligible to influence chats outside the project?

**Collaboration Memory-State Fidelity (CMSF)** — Can shared-project restrictions be distinguished from unshared-project memory options?

**Memory-to-Capability Fidelity (MCF)** — Can changes in Work availability or other capabilities be tied to project memory mode?

**Artifact-to-Project-State Fidelity (APSF)** — Can every downstream DOCX, PDF, report, image, code artifact, or decision be tied to the exact project memory regime active at generation time?

## Canonical Deep Drift requirement

> Every material AI-assisted workflow executed inside a persistent project, workspace, folder-like research container, or collaborative context should preserve a machine-readable project-state manifest that records the project identifier; collaboration state; project instructions; relevant files and chats; requested memory mode; memory-mode change timestamps; effective memory mode where verifiable; transition-delay window; inbound and outbound context rules; shared-project restrictions; agent and Work availability; model identity; prompt; tool calls; and every downstream document, PDF, code artifact, image, or decision. A stable project identifier must never be treated as proof of a stable context boundary, and a newly selected memory setting must never be treated as proof that the new memory regime was already effective at execution time.

## Deep Drift principle

> **A project is no longer merely a place where work lives. It is a mutable policy envelope around what the model is allowed to remember.**

The archive must therefore version the envelope, not just the contents.

## Sources

1. OpenAI Help Center. **ChatGPT Release Notes**, 14 August 2026, "ChatGPT app experience updates" and "Edit memory settings for existing projects."  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

2. OpenAI Help Center. **Projects in ChatGPT**, referenced by the release notes for project-memory behavior.  
   https://help.openai.com/

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift research-log entry was found for post-creation project-memory switching, delayed effective-state propagation, shared-project immutability, and ChatGPT Work unavailability under project-only memory.  
**Relationship to prior nodes:** Complements CSMESF (cross-surface memory), TRPSAF (temporary-state asymmetry), and other memory-state provenance nodes. PMTCF specifically formalizes memory-boundary transitions inside a stable long-running project container.  
**Freshness:** Verified against OpenAI first-party release notes current on 2 September 2026.
