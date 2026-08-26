# Deep Drift Research Update

## Context-Container Migration Fidelity: When Moving a Conversation Changes Its Effective Cognitive Environment

**Research date:** Wednesday, 26 August 2026  
**ATØR observation time:** 20:48:29 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. No materially newer launch was found in memory, skills, mini-app builders, chat-to-document export, DOCX/PDF generation, or copy-paste/export fidelity during this pass. One important continuity boundary was identified as new-to-log.

## Executive Summary

OpenAI's current Projects documentation exposes a deceptively important continuity rule:

- an existing eligible chat can be moved into a Project;
- after being moved, that chat inherits the Project's instructions and file context;
- chats created with a GPT cannot be moved into a Project;
- Temporary Chats cannot be added to Projects;
- shared Projects automatically use project-only memory;
- Project instructions override global custom instructions inside the Project.

For Deep Drift Research, this means a conversation is not a context-neutral object.

Its effective behavior can change when its container changes.

The same conversation history may therefore produce different future behavior before and after migration because its surrounding instruction set, file context, memory boundary, and available workflow surface have changed.

This creates a new benchmark family:

**Context-Container Migration Fidelity (CCMF)**

and a companion failure class:

**Conversation Portability Boundary Failure (CPBF)**.

## Core Deep Drift Distinction

```text
CONVERSATION HISTORY PRESERVED
!=
COGNITIVE ENVIRONMENT PRESERVED
```

A moved conversation can keep its old messages while inheriting:

- new Project instructions;
- new file context;
- a different memory boundary;
- different sharing semantics;
- different tool availability.

The object survived.

Its execution environment changed.

## New Deep Drift Construct: Context-Container Migration Fidelity

### Definition

**Context-Container Migration Fidelity (CCMF)** measures whether the behavior of a conversation remains understandable and reconstructable when the conversation is moved between context containers.

A context container may include:

- ordinary ChatGPT space;
- a Project;
- a shared Project;
- a GPT-specific conversation surface;
- a Temporary Chat;
- another future persistent workspace.

### Required state layers

```text
CHAT HISTORY
+ ACTIVE INSTRUCTIONS
+ FILE CONTEXT
+ MEMORY MODE
+ TOOL AVAILABILITY
+ SHARING STATE
+ SURFACE ELIGIBILITY
```

A migration is faithful only if changes to those layers are explicit and reconstructable.

## New Failure Class: Context Grafting Drift

**Context Grafting Drift** occurs when an existing conversation is moved into a Project and begins inheriting new instructions or file context in ways that materially alter future behavior without sufficient visibility.

Example:

```text
CHAT C
before move:
global instructions + old chat history

CHAT C
after move:
project instructions + project files + old chat history
```

The conversation appears continuous.

The causal environment is not.

## New Failure Class: Conversation Portability Boundary Failure

OpenAI states that chats created with a GPT cannot be moved into a Project.

This creates a hard portability boundary between:

```text
GPT-CONVERSATION STATE
and
PROJECT STATE
```

The user may have valuable long-running work in a GPT conversation but cannot natively migrate that exact chat into the Project container.

The likely fallback is manual rehydration:

- copy/paste;
- export/import;
- restart;
- attach source files again;
- reconstruct instructions;
- rebuild provenance manually.

That produces **Human Rehydration Burden** even though both surfaces belong to the same platform.

## New Failure Class: Instruction Inheritance Ambiguity

OpenAI states that Project instructions override global custom instructions within the Project.

A moved chat therefore changes its active instruction hierarchy.

Deep Drift should distinguish:

```text
HISTORICAL INSTRUCTION CONTEXT
!=
CURRENT EFFECTIVE INSTRUCTION CONTEXT
```

A later reviewer needs to know not only what the conversation previously contained, but which instruction layer governed each later turn.

## New Failure Class: Memory-Boundary Reclassification

Moving or sharing a Project can change memory topology.

Shared Projects use project-only memory automatically. This means:

- outside memories are excluded;
- outside chats are excluded;
- Project information is excluded from memory used outside the Project;
- ChatGPT Work is unavailable in project-only memory Projects.

A conversation can therefore move from one memory topology into another without its historical messages changing.

## Deep Drift Benchmark: Container Migration Test

### Controlled procedure

1. Create a normal chat containing:
   - one stable instruction;
   - one unresolved task;
   - one reference fact.

2. Ask a continuation question and save the result.

3. Move the chat into Project P containing:
   - conflicting Project instructions;
   - one new reference file;
   - default memory.

4. Ask the same continuation question.

5. Switch Project P to project-only memory.

6. After the documented propagation window, ask again.

7. Compare:
   - instruction resolution;
   - source use;
   - memory use;
   - tool availability;
   - answer drift.

8. Repeat with:
   - a chat created with a GPT;
   - a Temporary Chat;
   - a shared Project.

### Metrics

- history survival;
- instruction-state transparency;
- file-context transparency;
- memory-boundary transparency;
- behavioral divergence;
- migration eligibility;
- human rehydration minutes;
- provenance completeness;
- tool-surface continuity.

## New Metric: Container-Induced Behavioral Drift

```text
CIBD =
material output differences attributable to container-state changes
/
controlled continuation tasks
```

## New Metric: Native Conversation Portability Rate

```text
NCPR =
conversation types natively movable between target containers
/
conversation types tested
```

## Why This Matters for Deep Drift

Long-running creator workflows are increasingly distributed across:

- ordinary chats;
- Projects;
- GPTs;
- Work;
- Codex;
- connected apps;
- local files;
- cloud artifacts.

The dangerous assumption is that conversation history itself is the workflow.

It is not.

The real workflow is:

```text
HISTORY
+ INSTRUCTIONS
+ FILES
+ MEMORY
+ TOOLS
+ PERMISSIONS
+ CONTAINER
```

The container is now part of the causal system.

## Broader Platform Scan

### OpenAI

No materially newer launch was found during this pass beyond already logged late-August changes.

Current standing signals include:

- webhook-triggered scheduled tasks;
- native Docs/Sheets/Slides editing in Work;
- reusable Skills and Plugin packaging;
- project memory modes;
- long-conversation segmented loading;
- interactive content;
- Site tools / WebMCP;
- Work/Codex agent orchestration.

### Anthropic

No newer first-party announcement beyond the already logged 25 August shared-memory update was found during this pass.

Standing signals remain:

- shared memory across Claude chat and Cowork;
- editable/deletable memory;
- Skills API;
- Files API;
- computer/browser use;
- mounted memory;
- richer session observability.

### Google

No newer target-category release was found in this pass.

Standing signals remain:

- Ask Gemini in Chat rollout;
- Gemini interactive simulations/models;
- Sheets Canvas;
- selective Notebook copying;
- structural spreadsheet migration improvements.

### Microsoft

No newer target-category release was found in this pass.

Standing signals remain:

- Copilot Pages;
- Word/PDF conversion;
- Researcher;
- Model Council and Critique;
- retained research artifacts across workflow transitions.

## Deep Drift Research Position

A conversation is no longer enough to define its own context.

The stronger causal model is:

```text
CONVERSATION
x
CONTAINER
x
MEMORY TOPOLOGY
x
INSTRUCTION HIERARCHY
x
FILE STATE
x
TOOL SURFACE
=
EFFECTIVE WORKFLOW STATE
```

Therefore:

```text
CHAT MOVED
!=
WORKFLOW PRESERVED

HISTORY PRESERVED
!=
INSTRUCTION STATE PRESERVED

SAME PLATFORM
!=
NATIVE PORTABILITY
```

This is precisely the kind of continuity fracture that forces humans to become project-migration middleware.

## Evidence Boundary

Platform facts in this report are grounded in current first-party OpenAI Projects documentation and fresh scans of OpenAI, Anthropic, Google, and Microsoft sources. CCMF, CPBF, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, "Projects in ChatGPT," current as of 26 August 2026: https://help.openai.com/en/articles/10169521
2. OpenAI Help Center, "ChatGPT Release Notes," current as of 26 August 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
3. OpenAI Help Center, "Creating and editing documents, spreadsheets, and presentations with ChatGPT Work": https://help.openai.com/en/articles/20001278
4. OpenAI Help Center, "Skills in ChatGPT": https://help.openai.com/en/articles/20001066
5. Anthropic product announcements: https://claude.com/blog-category/announcements
6. Google Workspace Updates, August 2026: https://workspaceupdates.googleblog.com/2026/08/
7. Microsoft Support, Copilot creator and research workflow documentation: https://support.microsoft.com/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
