# Deep Drift Research Update

## Cross-Surface Shared Memory and User-Editable Memory State

**Research date:** Wednesday, 26 August 2026  
**ATØR observation time:** 04:49:30 WIB / 21:49:30 UTC (25 August 2026)  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan. One materially new creator-workflow memory delta identified.

## Executive Summary

Anthropic published a significant memory update on 25 August 2026: Claude now uses one shared memory across regular chat and Claude Cowork.

The important shift is not merely "Claude remembers more."

The new architecture makes memory:

- cross-surface;
- continuously updated during conversation rather than only summarized afterward;
- inspectable by the user;
- editable by the user;
- deletable by the user;
- selectively configurable for sensitive-topic storage.

Anthropic states that memory used in chat is now the same memory available in Cowork, and that information surfaced or learned in Cowork can carry back into chat. Claude also adds topics to memory while the conversation is happening. Memory entries are exposed to users as short files under Topics in Memory settings, where they can be read, edited, or deleted.

For Deep Drift, this changes the continuity model materially:

```text
CHAT MEMORY
-> SHARED MEMORY STATE
-> COWORK TASK
-> MEMORY UPDATE
-> SHARED MEMORY STATE
-> LATER CHAT
```

The result is no longer merely "persistent memory."

It is **cross-surface mutable memory continuity**.

## New Deep Drift Construct: Cross-Surface Memory Continuity Fidelity

### Definition

**Cross-Surface Memory Continuity Fidelity (CSMCF)** measures whether persistent memory remains semantically consistent, inspectable, controllable, and correctly scoped when the same memory state is used across different interaction surfaces.

Examples of surfaces include:

- conversational chat;
- cloud agent / Cowork task;
- mobile app;
- desktop app;
- project workflow;
- future connected agent surfaces.

### Core research questions

1. Does the same memory item appear consistently across surfaces?
2. Does a correction made in one surface propagate correctly to others?
3. How quickly does the update propagate?
4. Can one surface introduce a bad memory that contaminates another?
5. Can the user identify, edit, and delete the memory object?
6. Does deleting a memory remove downstream behavioral dependence?
7. Can the system distinguish temporary task context from durable cross-surface memory?
8. Are sensitive-topic memory settings applied consistently across surfaces?

## New Deep Drift Failure Classes

### Cross-Surface Memory Drift

The same user or project fact is represented differently across chat and agent surfaces.

### Bidirectional Memory Contamination

An incorrect inference or temporary task detail written by one surface enters shared persistent memory and changes behavior elsewhere.

### Memory Correction Propagation Failure

The user edits or corrects a stored memory, but the corrected state does not consistently govern later sessions across all surfaces.

### Memory Deletion Residue

A user deletes a memory entry, but traces of the deleted information continue to influence future outputs through another state layer.

### Memory-Scope Leakage

A detail appropriate to one project or task becomes globally available to unrelated workflows.

### Sensitive-State Policy Divergence

Sensitive-memory rules are applied differently across chat, Cowork, mobile, desktop, or later agent surfaces.

## Why the Update Matters for Deep Drift

Earlier agent-memory research focused on persistence:

```text
SESSION A
-> MEMORY
-> SESSION B
```

This update adds a new dimension:

```text
SURFACE A
-> SHARED MEMORY
-> SURFACE B
-> SHARED MEMORY
-> SURFACE C
```

That makes memory governance more difficult.

A bad memory no longer damages only one conversational channel.

It can become infrastructure.

Deep Drift should therefore distinguish:

```text
MEMORY PERSISTENCE
!= MEMORY PORTABILITY
!= MEMORY CONSISTENCY
!= MEMORY GOVERNANCE
```

## User-Editable Memory as a Governance Primitive

Anthropic's update is notable because memory is visible to the user as short files under Topics in Memory settings.

That introduces an important control surface:

```text
MEMORY CREATED
-> MEMORY VISIBLE
-> USER INSPECTS
-> USER EDITS / DELETES
-> FUTURE BEHAVIOR CHANGES
```

For Deep Drift, this is much stronger than opaque memory.

A memory system becomes more auditable when the human can inspect the stored object rather than infer it from behavior.

But this also creates a testable requirement:

> The visible memory object must actually correspond to the behavioral state influencing later responses.

If the UI says a memory was deleted while behavior still depends on hidden residual state, the control surface becomes decorative rather than authoritative.

## Continuous Memory Update During Conversation

Anthropic states that Claude now adds topics to memory while the user is chatting instead of waiting until the conversation ends.

This improves freshness but increases mutation frequency.

The state chain becomes:

```text
USER MESSAGE
-> MEMORY CANDIDATE
-> MEMORY MUTATION
-> SAME-SESSION / NEXT-SESSION EFFECT
```

This creates a new benchmark requirement: **mutation timing fidelity**.

The researcher should record:
- when the user supplied the fact;
- when the memory object appeared;
- whether the memory was immediately editable;
- whether the next response already depended on it;
- whether another surface saw the update.

## Deep Drift Benchmark: Cross-Surface Memory Propagation Test

### Controlled procedure

```text
1. Start with known memory state M0.
2. In regular chat, introduce controlled fact F1.
3. Verify whether F1 appears in visible memory.
4. Open Cowork and ask a task that depends on F1.
5. Correct F1 to F2 in Cowork or Memory settings.
6. Return to regular chat.
7. Ask a task that distinguishes F1 from F2.
8. Delete the memory entry.
9. Repeat in chat and Cowork.
```

### Metrics

- write latency;
- cross-surface propagation latency;
- semantic consistency;
- correction fidelity;
- deletion fidelity;
- residual-memory behavior;
- false-memory creation rate;
- project/global scope accuracy;
- user-visible memory / behavioral-state equivalence;
- human repair minutes.

## New Metric: Memory Control Surface Authority

Define:

```text
MEMORY CONTROL SURFACE AUTHORITY
=
degree to which user-visible memory controls
actually determine downstream behavior
```

A strong system should satisfy:

```text
VISIBLE CORRECTION
-> BEHAVIORAL CORRECTION

VISIBLE DELETION
-> BEHAVIORAL DELETION
```

If those relations fail, memory governance is cosmetic.

## Relation to Existing ĀTØR Protocol Family

The update directly strengthens the need for the seven-layer state protocol family:

| Protocol | Relevance |
|---|---|
| MMSF - Mounted Memory State Fidelity | Shared memory must have identifiable state, scope, mutation history, and persistence behavior. |
| PSMC - Persistent State Mutation Control | Continuous memory updates are durable mutations and require governance. |
| SSRP - Sync-Back State Reconciliation | Chat, Cowork, and visible Memory settings must reconcile to one authoritative state. |
| ASRF - Agent State Reconstruction Fidelity | Later behavior should be reconstructable to the memory state that influenced it. |
| PVP - Procedural-Version Provenance | Memory behavior may change with product/runtime versions and must be dated. |
| ALRTSF - Artifact Lineage & Round-Trip State Fidelity | Cowork artifacts may depend on shared memory state that should be included in provenance. |
| SCRR - Session Continuity, Retrieval & Rehydration | Shared memory reduces rebriefing but must not be confused with complete conversation-history continuity. |

## Standing Creator-Workflow Scan

No newer first-party update was found in this scan for:

- skills;
- mini-app builders;
- chat-to-document export;
- DOCX/PDF generation;
- copy/paste or export fidelity;
- creator-workflow artifact migration.

The strongest standing signals remain:

### Anthropic
- shared memory across chat and Cowork (25 August 2026);
- versioned Skills API;
- Files API;
- computer use and browser use;
- mounted memory for Managed Agents;
- richer session observability.

### OpenAI
- Admin plugin for ChatGPT Work and Codex (25 August 2026);
- improved plugin discovery (21 August);
- segmented loading of long conversations;
- progressive interactive content;
- Codex app-server migration.

### Google
- Gemini interactive simulations/models;
- Sheets Canvas read-write mini-apps;
- selective notebook copy;
- Ask Gemini in Chat rollout with non-migrated old conversation history.

### Microsoft
- Deep Research retirement with retained reports and Word export;
- Researcher as the successor research experience;
- Copilot Pages conversion to Word/PDF remains an important document-workflow benchmark.

## Deep Drift Research Position

The new frontier is not whether an AI system "has memory."

The real question is whether memory behaves like governed infrastructure:

```text
VISIBLE
+ EDITABLE
+ DELETABLE
+ CORRECTLY SCOPED
+ CROSS-SURFACE CONSISTENT
+ MUTATION-TRACEABLE
+ BEHAVIORALLY AUTHORITATIVE
```

Shared memory can reduce human rebriefing.

Shared memory can also amplify state contamination.

The same architecture that makes continuity convenient makes bad state portable.

That is precisely why memory must be treated as mutable system state rather than a personality feature.

## Evidence Boundary

Platform facts in this report are grounded in first-party product sources where available. Deep Drift constructs, failure classes, metrics, and benchmark proposals are ĀTØR Institute research constructs.

## Primary Sources

1. Anthropic / Claude, "Claude's memory works everywhere, and you decide what's in it," 25 August 2026: https://claude.com/blog/claudes-memory-works-everywhere-and-you-decide-whats-in-it
2. Anthropic, "Build production agents with computer use, the Skills API, and the Files API," 20 August 2026: https://claude.com/blog/computer-use-skills-api-files-api
3. OpenAI Product Release Notes: https://openai.com/products/release-notes/
4. OpenAI, "Introducing the Admin plugin for ChatGPT Work and Codex," 25 August 2026: https://openai.com/index/introducing-admin-plugin/
5. Google Workspace Updates: https://workspaceupdates.googleblog.com/2026/
6. Microsoft Support, Deep Research in Microsoft Copilot: https://support.microsoft.com/en-us/microsoft-copilot/deep-research-in-microsoft-copilot

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**