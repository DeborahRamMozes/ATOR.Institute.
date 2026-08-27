# Deep Drift Research Update

## Ephemeral Session Personalization Boundary and Promotion Fidelity

**Research date:** Friday, 28 August 2026  
**ĀTØR observation time:** 02:49:03 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. One materially new OpenAI memory/workflow change identified. No newer Anthropic, Google, or Microsoft release displaced the latest creator-workflow signals already logged.

## Executive Summary

OpenAI updated ChatGPT release notes on 27 August 2026 with **new Temporary Chat controls**.

A Temporary Chat can now be created in one of two modes:

- **Personalized Temporary Chat**: may use existing memories, custom instructions, and plugins from the user's regular ChatGPT settings.
- **Non-personalized Temporary Chat**: does not use memory, custom instructions, or plugins.

Both modes remain outside normal chat history by default and do **not create new memories**.

The personalization decision is fixed when the Temporary Chat begins and cannot be changed mid-conversation.

A Temporary Chat can now also be **saved**. Saving converts it into a regular chat. After that transition it follows ordinary account-level personalization and model-improvement settings; if memory is enabled, the saved conversation can become part of future personalized context.

For Deep Drift, this is not merely a privacy toggle.

It creates two different state transitions:

```text
PERSISTENT PERSONALIZATION
-> EPHEMERAL SESSION
```

without automatic write-back, and later:

```text
EPHEMERAL SESSION
-> SAVED REGULAR CHAT
-> FUTURE PERSISTENT CONTEXT
```

The first is an **asymmetric read boundary**.

The second is a **state-class promotion**.

This report formalizes two benchmark families:

- **Ephemeral Session Personalization Boundary Fidelity (ESPBF)**
- **Ephemeral-to-Persistent Promotion Fidelity (EPPF)**

## New Deep Drift Construct: Ephemeral Session Personalization Boundary Fidelity

### Definition

**Ephemeral Session Personalization Boundary Fidelity (ESPBF)** measures whether a temporary conversational session correctly applies or excludes persistent personalization state while preserving the rule that the session itself does not write new memory.

A Temporary Chat can now have:

```text
READ ACCESS TO:
- existing memories
- custom instructions
- plugins

WRITE EFFECT:
- no new memory
- no normal history entry unless saved
```

This creates a deliberately asymmetric state topology.

## Core Distinction

```text
MEMORY READ
!=
MEMORY WRITE

PERSONALIZED
!=
PERSISTENT

PLUGIN ACCESS
!=
SESSION RETENTION

TEMPORARY
!=
CONTEXT-FREE
```

Previously, users could reasonably treat "Temporary Chat" as a stronger shorthand for context isolation.

That assumption is no longer reliable without inspecting the personalization mode.

The session can be temporary while still being deeply shaped by persistent prior state.

## New Failure Classes

### Temporary/Persistent Semantic Ambiguity

The interface label "Temporary" leads the user to assume that no persistent personalization is influencing the conversation even when Personalized mode is active.

### Inbound-Memory Leakage Ambiguity

Existing memory correctly influences a Personalized Temporary Chat, but the system does not make sufficiently clear which persistent memories materially shaped the answer.

### Outbound-Memory Write Leakage

A Temporary Chat is not supposed to create new memories, but information from the session later influences memory as if it had been written before the chat was saved.

### Personalization-Mode State Confusion

The user forgets whether the Temporary Chat was created Personalized or Non-personalized, and later cannot reconstruct the effective context boundary.

### Plugin-Scope Ambiguity

A Personalized Temporary Chat can use plugins, but the user may interpret "temporary" as meaning no external connected context or capability is available.

### Custom-Instruction Shadowing

Persistent custom instructions shape an allegedly disposable session in ways that are invisible in the output provenance.

### Mid-Session Boundary Expectation Failure

The personalization mode cannot be changed after the conversation starts. A user who realizes mid-session that the wrong boundary was chosen must begin another chat rather than change state in place.

## New Metric: Ephemeral Boundary Read Accuracy

```text
EBRA =
temporary-session responses using exactly the permitted
persistent personalization state
/
all controlled temporary-session tests
```

## New Metric: Temporary Memory Non-Write Fidelity

```text
TMNWF =
temporary-session facts that remain absent from persistent memory
unless the conversation is explicitly saved
/
all controlled temporary-session facts
```

## New Metric: Personalization Mode Legibility

```text
PML =
tests where a later reviewer can correctly determine
whether the session was Personalized or Non-personalized
/
all temporary sessions tested
```

## Personalized Temporary Chat as an Asymmetric State Mount

The architecture is usefully described as a **read-only personalization mount**.

```text
REGULAR MEMORY STATE M0
        |
        | read
        v
TEMPORARY CHAT T1
        |
        X no automatic memory write-back
```

This resembles a mounted state object with restricted mutation rights.

For Deep Drift, that matters because memory is no longer a binary property:

```text
HAS MEMORY
or
NO MEMORY
```

The stronger model is:

```text
MEMORY CAPABILITY
=
READ SCOPE
+ WRITE SCOPE
+ RETENTION SCOPE
+ SESSION CLASS
+ PROMOTION RULE
```

## New Deep Drift Construct: Ephemeral-to-Persistent Promotion Fidelity

### Definition

**Ephemeral-to-Persistent Promotion Fidelity (EPPF)** measures whether a Temporary Chat that is explicitly saved transitions cleanly and reconstructably into ordinary persistent chat state without silently rewriting its earlier privacy, personalization, or provenance semantics.

OpenAI states that saving converts the Temporary Chat into a regular chat.

That transition can change:

- history retention;
- future retrievability;
- memory eligibility;
- model-improvement preferences according to account settings;
- future personalized reference.

The same conversational content therefore changes governance class.

## Core Promotion Chain

```text
TEMPORARY CHAT
-> USER SAVES
-> REGULAR CHAT
-> HISTORY RETAINED
-> ACCOUNT PERSONALIZATION RULES APPLY
-> POSSIBLE FUTURE MEMORY / CONTEXT USE
```

This is not simply "save a chat."

It is a state promotion.

## New Failure Classes

### Promotion-State Ambiguity

The user saves a Temporary Chat but cannot clearly determine which persistence and personalization rules become active after conversion.

### Retroactive Privacy Assumption Drift

The user treats content produced while the session was temporary as permanently governed by temporary-session expectations even after explicitly promoting it into regular history.

### Memory Eligibility Transition Confusion

After saving, information from the chat becomes eligible for future personalized reference, but the user cannot identify when that eligibility began.

### Promotion Provenance Loss

The stored chat no longer preserves that it originated as a Temporary Chat or which personalization mode governed its earlier turns.

### Pre/Post-Promotion Context Collapse

A later reviewer treats the entire saved conversation as if it was always a regular chat, erasing the difference between pre-save and post-save governance states.

### Save-Then-Reference Timing Drift

Future responses reference a newly saved chat before account-level memory/history state appears fully consistent across surfaces.

## New Metric: Promotion State Traceability

```text
PST =
saved temporary chats whose pre-promotion and post-promotion
state classes remain reconstructable
/
all saved temporary chats
```

## New Metric: Memory Eligibility Transition Accuracy

```text
META =
facts becoming eligible for future personalized reference
only after the intended promotion boundary
/
all controlled promotion tests
```

## New Metric: Governance-Class Transition Fidelity

```text
GCTF =
session properties correctly changing at explicit save boundary
/
all session properties expected to change
```

## Deep Drift Benchmark: Temporary Chat Boundary Test

### Controlled setup

Create controlled persistent state before the test:

```text
MEMORY M1:
"preferred project label = ALPHA"

CUSTOM INSTRUCTION C1:
"always include marker [CI-TEST]"

PLUGIN P1:
connected tool capable of retrieving controlled record R1
```

Then run four test cases.

### Case A - Non-personalized Temporary Chat

Ask questions requiring M1, C1, and P1.

Expected:

```text
M1 not used
C1 not used
P1 not used
new facts not written to memory
chat absent from history
```

### Case B - Personalized Temporary Chat

Ask the same questions.

Expected:

```text
M1 available
C1 active
P1 available
new facts still not written to memory
chat absent from history
```

### Case C - Attempt boundary change mid-session

Attempt to switch personalization mode after the chat begins.

Expected:

```text
mode remains fixed
new Temporary Chat required for different boundary
```

### Case D - Save the Personalized Temporary Chat

After introducing controlled fact F2, save the chat.

Then test later regular chats for:

- history visibility;
- retrievability;
- personalization effect;
- memory eligibility;
- provenance of original temporary state.

## Important Deep Drift Question: Can an Ephemeral Session Be Personalized Without Becoming Persistent?

OpenAI's answer is now explicitly yes.

That is architecturally useful.

It also kills a simplistic privacy model.

```text
EPHEMERALITY
and
PERSONALIZATION
```

are independent axes.

A temporary session may be:

```text
EPHEMERAL + PERSONALIZED
```

or:

```text
EPHEMERAL + NON-PERSONALIZED
```

Deep Drift should therefore stop classifying chat modes with one label and instead preserve a state vector.

## Proposed Temporary Session State Card

```text
TEMP_SESSION_STATE_CARD

session_id:
session_class: temporary
personalization_mode:
memory_read_enabled:
memory_write_enabled:
custom_instructions_enabled:
plugins_enabled:
history_retention:
save_state:
promotion_timestamp:
post_promotion_class:
future_reference_eligibility:
model_improvement_setting_after_save:
surface:
observation_date:
unknown_fields:
```

This is a much cleaner model than "Temporary Chat = private chat."

## Relation to Existing ĀTØR Seven-Layer State Protocol Family

### MMSF - Mounted Memory State Fidelity
Personalized Temporary Chat now behaves like a limited read-only mount over existing memory state.

### PSMC - Persistent State Mutation Control
The session should not mutate persistent memory before explicit promotion.

### SSRP - Sync-Back State Reconciliation
Saving changes chat persistence class; history and later personalized state should reconcile afterward.

### ASRF - Agent State Reconstruction Fidelity
The reviewer should be able to reconstruct whether memory/custom instructions/plugins were active for each temporary session.

### PVP - Procedural-Version Provenance
Temporary Chat behavior changed on 27 August 2026; longitudinal research must preserve product-version date.

### ALRTSF - Artifact Lineage & Round-Trip State Fidelity
Artifacts created in a Temporary Chat may later survive after the chat is saved; their provenance should preserve the earlier session class.

### SCRR - Session Continuity, Retrieval & Rehydration
A saved Temporary Chat becomes retrievable history, while an unsaved Temporary Chat should not be treated as future continuity state.

## Connection to Existing Deep Drift Memory Research

This update sharpens several earlier Deep Drift constructs.

### Mounted Memory State Fidelity

Earlier memory research asked whether an agent can mount persistent state and mutate it.

Temporary Chat now provides a consumer-facing example of a different permission mode:

```text
MOUNT EXISTING MEMORY
READ
DO NOT WRITE
```

### Mutable Project Memory Boundary Fidelity

Projects allow the user to change which larger memory topology applies.

Temporary Chat adds another dimension:

```text
SESSION-LEVEL PERSONALIZATION MODE
```

### Cross-Surface Shared Memory

Anthropic's recent shared-memory update increased memory portability across Chat and Cowork.

OpenAI's Temporary Chat update instead emphasizes **memory access asymmetry**.

These are complementary research directions:

```text
ANTHROPIC:
shared mutable memory across surfaces

OPENAI TEMPORARY CHAT:
optional read access to persistent personalization
without session memory write
```

## Broader Fresh Platform Scan

### OpenAI

The materially new signal is the 27 August Temporary Chat update.

Current related signals remain:

- mutable Project memory;
- shared/scheduled webhook Work tasks;
- reusable Skills;
- template state;
- Work artifact editing;
- plugin access;
- cross-device Work continuation.

### Anthropic

No first-party announcement newer than 26 August surfaced.

Standing signals remain:

- shared memory across Claude Chat and Cowork;
- editable/deletable memory;
- Claude in Chrome autonomous browser actions;
- Cowork built-in browser;
- Skills API;
- Files API;
- mounted memory and session observability.

### Google

No newer creator-workflow release was found after the latest August Workspace updates already logged.

Standing signals remain:

- Ask Gemini in Chat;
- Workspace Studio;
- Sheets Canvas;
- interactive simulations/models;
- Notebook copying and migration;
- Meet capture controls.

### Microsoft

The current Microsoft 365 Copilot release page still lists August 25 as its newest broad feature batch.

Standing signals remain:

- Copilot Pages;
- Notebook multi-artifact generation;
- Python-backed Excel editing;
- mobile artifact steering;
- multimodal Capture;
- inline file inspection;
- cross-host model selection in Word.

## Category Status

| Category | Fresh finding |
|---|---|
| Memory | **Material update:** Temporary Chat can optionally read existing memory without writing new memory. |
| Skills / plugins | **Material boundary implication:** Personalized Temporary Chat can use plugins; Non-personalized cannot. |
| Mini-app builders | No newer release found. |
| Chat-to-document / artifact export | No newer release found. |
| DOCX / PDF generation | No newer release found. |
| Copy-paste / export fixes | No newer same-day fix found. |
| Broader creator workflow | **Material update:** Temporary Chat can now be explicitly promoted into regular persistent history. |

## Deep Drift Research Position

Temporary Chat now demonstrates that:

```text
EPHEMERALITY
!=
CONTEXT ISOLATION

PERSONALIZATION
!=
MEMORY MUTATION

SAVE
!=
SIMPLE STORAGE
```

Saving is a governance-class transition.

The next reliability question is not:

> Does Temporary Chat remember me?

It is:

> Which persistent state may enter the session, which state may leave it, when does the session change persistence class, and can those boundaries still be reconstructed later?

That is a substantially better memory benchmark than asking whether a chatbot "has memory."

## Evidence Boundary

Platform facts in this report are grounded in OpenAI's first-party ChatGPT Release Notes updated 27 August 2026, with fresh Anthropic, Google, and Microsoft first-party checks used to verify category recency. ESPBF, EPPF, state cards, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, **ChatGPT Release Notes - More controls in temporary chat**, 27 August 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
2. Anthropic Product Announcements, current through 26 August 2026: https://claude.com/blog-category/announcements
3. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through 25 August 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
4. Google Workspace Updates, August 2026 archive: https://workspaceupdates.googleblog.com/2026/08/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
