# Deep Drift Research Update — ECMSTF

## Ephemeral Context and Memory-State Transition Fidelity

**Research date:** 1 September 2026  
**Scope:** LLM memory, skills/plugins, temporary sessions, project memory, creator workflows, export/persistence boundaries, DOCX/PDF implications.

## Executive finding

OpenAI's August 27, 2026 Temporary Chat update creates a new provenance class: a Temporary Chat can be personalized with existing memories, custom instructions, and plugins while remaining unable to create or update memories and remaining outside ordinary chat history until explicitly saved. Saving converts the conversation into a regular chat that then follows account-level personalization and model-improvement settings.

This means context access, memory mutation, history persistence, plugin availability, and later archival status are no longer one state. They are independently variable phases of a conversation lifecycle.

OpenAI's current Temporary Chat documentation also states that personalization is selected at session creation and cannot be changed mid-session; account/workspace restrictions take priority; unsaved Temporary Chats may still be retained for up to 30 days for safety; Enterprise Temporary Chats remain available in the Compliance API for 30 days; and saved Temporary Chats become ordinary history objects subject to regular account controls.

A related August 2026 change allows existing ChatGPT Projects to switch between Default memory and Project-only memory after creation. Project-only memory can reference conversations within the same project but not memories or conversations outside it, and project information is kept out of memory used in chats outside the project. Shared projects remain project-only. OpenAI notes that memory-setting changes may take a few hours to take effect.

Together these changes show that conversational memory is becoming a state machine rather than a binary feature.

## Core distinctions

```text
READ EXISTING MEMORY
!= WRITE NEW MEMORY

USE PLUGINS
!= ENTER CHAT HISTORY

TEMPORARY
!= NON-PERSONALIZED

PERSONALIZED
!= MEMORY-MUTATING

SAVE CHAT
!= PRESERVE ORIGINAL STATE CLASS

PROJECT MEMORY SETTING
!= INSTANTLY EFFECTIVE MEMORY STATE

VISIBLE CHAT STATE
!= RETENTION STATE
```

## Lifecycle model

```text
START CHAT
   |
   +--> TEMPORARY / NON-PERSONALIZED
   |       memory read: no
   |       memory write: no
   |       custom instructions: no
   |       plugins: no
   |       history: no
   |
   +--> TEMPORARY / PERSONALIZED
           memory read: yes
           memory write: no
           custom instructions: yes
           plugins: yes
           history: no

           |
           +--> remain temporary
           |       ordinary history: no
           |       possible safety retention: up to 30 days
           |
           +--> SAVE
                   converts to regular chat
                   history: yes
                   future personalization rules: account-level
                   model-improvement rules: account-level
```

A conversation can therefore be materially influenced by persistent memory without itself becoming a source of persistent memory.

## Why this matters for Deep Drift

Earlier provenance models could assume that if persistent context influenced a response, the interaction belonged to the same persistence regime as that context. That assumption is now false.

A personalized Temporary Chat can consume durable state while remaining non-durable as ordinary chat history. This is a one-way membrane while the session is temporary. If the chat is later saved, the save event changes its epistemic and retention role. The save event is therefore not clerical; it is a material state transition.

Project-memory mutability adds a second temporal problem. An existing project's memory mode can be changed, but OpenAI says changes may take a few hours to take effect. Therefore:

```text
SETTING CHANGED AT T0
!= EFFECTIVE CONTEXT BOUNDARY AT T0
```

Deep Drift should record the settings-change timestamp separately from the observed effective state.

## Fresh category scan

| Area | Fresh finding | Deep Drift meaning |
|---|---|---|
| Memory | Major: Temporary Chat can read memory without writing memory | Memory is directional, not binary |
| Project memory | Major: existing projects can change memory mode | Context boundaries can mutate over time |
| Skills/plugins | Personalized Temporary Chats can use plugins | Ephemeral sessions may execute persistent capability packages |
| Mini-app builders | No stronger fresh first-party primitive in this scan | Existing builder/runtime nodes remain current |
| Chat-to-document | No stronger direct export primitive found | A generated file may originate from an ephemeral session influenced by persistent state |
| DOCX/PDF | No stronger format primitive found | File provenance should include session persistence class and memory-read state |
| Copy-paste/export | Saving Temporary Chat is a persistence conversion rather than ordinary export | Archive semantics change at the save event |
| Creator workflow | Major | Conversation state becomes lifecycle-dependent and directionally permeable |

## New failure classes

1. **Ephemerality Assumption Error** — treating all Temporary Chats as context-free.
2. **Memory Symmetry Fallacy** — assuming a chat that reads persistent memory can also write persistent memory.
3. **Save-Event Erasure** — archiving a saved Temporary Chat without recording its earlier persistence regime.
4. **Plugin-Persistence Collapse** — assuming ephemeral conversation status implies ephemeral tools.
5. **History-Retention Conflation** — treating absence from ordinary history as proof that no platform retention exists.
6. **Memory-Boundary Propagation Blindness** — assigning a project's new memory mode immediately at settings-change time despite propagation delay.
7. **Project-Isolation Overclaim** — treating project-only memory as total isolation without recording workspace, account, tool, and safety-context rules.
8. **Artifact-Origin Persistence Loss** — preserving an output without recording whether it was produced in temporary personalized, temporary non-personalized, project-only, or default-memory state.

## Benchmark additions

- **Context Read/Write Asymmetry Fidelity (CRWAF):** separately identify existing-context read eligibility and new-memory write eligibility.
- **Session Persistence-Class Fidelity (SPCF):** reconstruct regular, temporary personalized, or temporary non-personalized session state.
- **Save-Transition Fidelity (STF):** preserve conversion from Temporary Chat to regular chat as a lifecycle event.
- **Plugin-in-Ephemeral-Session Fidelity (PESF):** reconstruct plugin/tool execution independently of chat persistence status.
- **Retention-vs-History Fidelity (RHF):** distinguish visible history from platform/compliance retention.
- **Memory-Mode Propagation Fidelity (MMPF):** represent the interval between a project setting change and effective behavior.
- **Project Boundary Fidelity (PBF):** distinguish intra-project context, external memory, external conversations, and shared-project constraints.
- **Artifact-to-Session-State Fidelity (ASSF):** trace downstream artifacts to the persistence and memory state active at generation time.

## Canonical Deep Drift requirement

> Every material AI-assisted conversation and downstream artifact should preserve a machine-readable session-state manifest that separately records the session persistence class; personalization choice at session creation; existing-memory read eligibility; new-memory write eligibility; custom-instruction state; plugin and capability availability; account and workspace restrictions; ordinary history inclusion state; platform or compliance retention class; save or conversion events; project identity; project memory mode; memory-setting change timestamps and observed effective state; model and tool identity; source and artifact lineage; and subsequent persistence transitions. The label "Temporary Chat" must never be treated as proof of context absence, memory absence, tool absence, or zero retention, and the label "saved chat" must not erase the session class under which the conversation originally occurred.

## Deep Drift theoretical shift

```text
OLD MODEL

MEMORY = ON / OFF

CURRENT MODEL

MEMORY / CONTEXT =
  READ PERMISSION
+ WRITE PERMISSION
+ SOURCE SCOPE
+ SESSION CLASS
+ HISTORY STATE
+ RETENTION STATE
+ PROJECT BOUNDARY
+ TOOL AVAILABILITY
+ TRANSITION EVENTS
+ EFFECTIVE-TIME LAG
```

A PDF generated from a personalized Temporary Chat and another generated from the same conversation after it is saved may appear to belong to one uninterrupted creative session. Computationally, they belong to different persistence regimes. Deep Drift should preserve that seam.

## Sources

1. OpenAI, **ChatGPT Release Notes**, August 27, 2026 — More controls in Temporary Chat. https://help.openai.com/en/articles/6825453
2. OpenAI, **Temporary Chat FAQ**, accessed September 1, 2026. https://help.openai.com/en/articles/8914046-temporary-chat-faq
3. OpenAI, **Projects in ChatGPT**, accessed September 1, 2026. https://help.openai.com/en/articles/10169521

## Research status

**Node status:** New.  
**Relationship to existing Deep Drift nodes:** complements prior memory, workspace-fork, procedural-state, export, and retention nodes by formalizing directional memory access and lifecycle transitions between ephemeral and persistent conversation states.  
**Freshness:** verified against OpenAI documentation current on September 1, 2026.
