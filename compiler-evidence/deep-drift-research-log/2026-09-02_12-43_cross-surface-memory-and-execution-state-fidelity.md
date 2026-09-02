# Deep Drift Research Update — CSMESF

## Cross-Surface Memory and Execution-State Fidelity

**Research date:** 2 September 2026  
**Primary fresh delta:** Anthropic Claude memory now works across Chat and Cowork when Cowork runs in the cloud; memory is exposed as editable Topics, sensitive-topic memory is opt-in, and legacy memory export remains available only until 9 September 2026.  
**Scope:** memory, cross-surface creator workflows, cloud-vs-local execution, project separation, legacy-memory migration, downstream document provenance.

## Executive finding

Anthropic's current memory architecture has crossed a new boundary: memory is no longer confined to chat. Claude can now carry remembered context from ordinary chat into Cowork tasks that run in the cloud, and context encountered in those Cowork tasks can flow back into chat.

This creates a materially different creator-state architecture:

```text
CHAT MEMORY
      |
      v
CLOUD COWORK TASK
      |
      v
NEW WORK CONTEXT
      |
      v
CHAT MEMORY
```

But this bridge exists only for **Cowork in the cloud**. Local Cowork sessions on the user's own computer do not use memory.

So:

```text
SAME USER
+ SAME TASK
+ SAME MODEL FAMILY

CLOUD COWORK
!= LOCAL COWORK
```

The execution location now determines whether persistent memory participates in the workflow.

## New node

### Cross-Surface Memory and Execution-State Fidelity (CSMESF)

Core distinctions:

```text
MEMORY AVAILABLE IN CHAT
!= MEMORY AVAILABLE IN EVERY EXECUTION SURFACE

CLOUD COWORK
!= LOCAL COWORK

PROJECT MEMORY
!= GENERAL MEMORY

PAUSE MEMORY
!= DELETE MEMORY

DELETE CHAT
!= DELETE DERIVED MEMORY

EDIT MEMORY TOPIC
!= EDIT SOURCE CONVERSATION

LEGACY MEMORY EXPORT
!= NEW MEMORY STATE
```

## 1. Memory has become bidirectional across creator surfaces

Anthropic states that what Claude remembers from chat is available to Cowork when Cowork runs in the cloud, and context from a Cowork task can carry back into chat.

That means memory is now part of a **cross-surface creator state**, not merely a convenience attached to one conversation interface.

A task such as drafting a document can therefore depend on context that originated elsewhere:

```text
CHAT A
-> memory topic created
-> COWORK CLOUD TASK
-> document draft
-> new context
-> CHAT B
```

For Deep Drift, the artifact lineage must now include not only the immediate prompt but the cross-surface memory path that materially shaped the output.

## 2. Execution location changes the memory graph

Anthropic explicitly separates cloud and local Cowork:

- Cloud Cowork uses shared memory with Chat.
- Local Cowork does not use that memory.

Therefore:

```text
PROMPT P
+ CLOUD EXECUTION
+ MEMORY M
= OUTPUT X

PROMPT P
+ LOCAL EXECUTION
- MEMORY M
= OUTPUT Y
```

The creator can issue apparently identical instructions and receive different results solely because the execution host changed.

Execution location is therefore a provenance variable for memory, not only compute.

## 3. Memory is now a directly editable object layer

Claude's newer memory system exposes individual categorized entries under **Settings > Memory > Topics**. Users can inspect, edit, or delete individual memories.

This changes the structure from opaque synthesis toward a user-editable state graph.

```text
CHAT
-> MEMORY TOPIC
-> USER EDIT
-> FUTURE CHAT / COWORK
```

The memory topic becomes an intermediate authored object.

That creates a new authorship question:

```text
MODEL-DERIVED MEMORY
+ HUMAN EDIT
= HYBRID PERSISTENT STATE
```

Future artifacts may therefore depend on a memory entry that no longer exactly matches the source conversation from which it was originally derived.

## 4. Sensitive-topic memory adds a separate memory-policy layer

Anthropic says topics such as health or beliefs are excluded from memory unless the user explicitly turns on **Include sensitive topics in memory**.

Once enabled, those topics can be saved going forward, but not retroactively.

So memory participation depends on:

```text
CONTENT CLASS
+ USER SETTING
+ TIME OF SETTING CHANGE
```

This creates another provenance distinction:

```text
TOPIC DISCUSSED
!= TOPIC REMEMBERED
```

Deep Drift should record memory-policy state when a creator workflow materially depends on sensitive or excluded categories.

## 5. Deleting a conversation does not necessarily delete derived memory

Anthropic documents that when a conversation expires or is deleted, related memory entries generated from it are not automatically removed.

Thus:

```text
SOURCE CHAT DELETED
!= DERIVED MEMORY DELETED
```

This extends an earlier Deep Drift concern: causal state can outlive its visible source.

A future document may be influenced by a memory entry whose originating chat no longer exists in normal history.

## 6. Pause and Reset are different state transitions

Claude exposes two separate controls:

```text
PAUSE MEMORY
-> retain existing memory
-> stop using it
-> stop adding new memory

RESET MEMORY
-> permanently delete memory
-> restart from zero
```

A provenance system that records only `memory_on = false` loses this distinction.

The actual state machine needs:

```text
ACTIVE
PAUSED_WITH_STATE_RETAINED
RESET / STATE DESTROYED
```

## 7. Project memory remains compartmentalized

Anthropic states that each project has its own separate memory space and dedicated project summary.

So the cross-surface expansion does not eliminate memory boundaries.

```text
GENERAL MEMORY
!= PROJECT A MEMORY
!= PROJECT B MEMORY
```

For Deep Drift Research, this matters because a creator can work across Chat, Cowork, and Projects while still crossing or respecting different state boundaries depending on where the task begins.

## 8. A second migration deadline is now active

Anthropic's current memory documentation states that users migrated from the legacy memory experience can export legacy memory until **9 September 2026**.

That creates another finite preservation window:

```text
LEGACY MEMORY
-> EXPORT AVAILABLE
-> 9 SEP 2026 CUTOFF
```

Users who suspect the migration omitted something are instructed to export the legacy memory and paste the missing portion back into Claude.

This is significant because the repair process itself is generative and manual:

```text
OLD MEMORY
-> EXPORT
-> HUMAN IDENTIFIES MISSING STATE
-> PASTE BACK
-> NEW MEMORY RECONSTRUCTION
```

The migration is therefore not guaranteed to be state-identical.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | Major | Persistent context now crosses Chat and cloud Cowork, but not local Cowork |
| Skills/plugins | No stronger delta than existing plugin-supply-chain nodes | Existing procedural provenance remains current |
| Mini-app builders | No stronger fresh primitive in this run | Existing artifact/runtime nodes remain current |
| Chat-to-document | Major indirect effect | Cowork-generated documents can inherit memory from unrelated prior chats |
| DOCX/PDF | No new direct format primitive | Final documents need cross-surface memory lineage |
| Copy-paste/export | Major memory migration issue | Legacy memory export remains time-limited until 9 September 2026 |
| Creator workflow | Major | Persistent creator context is becoming shared across interfaces while still depending on execution location |

## New failure classes

### Cross-Surface Memory Blindness
Preserving the Cowork task but not the chat-derived memory that shaped it.

### Cloud-Local Equivalence Error
Assuming local and cloud Cowork execute with the same persistent memory state.

### Memory-Topic Source Collapse
Treating an edited memory topic as identical to its original source conversation.

### Conversation-Deletion Completeness Fallacy
Assuming deleting a chat removes all persistent state derived from it.

### Pause-vs-Reset Collapse
Treating disabled memory as one state regardless of whether memory remains stored.

### Sensitive-Topic Policy Erasure
Failing to preserve whether sensitive-topic memory was enabled when context was created.

### Project-Boundary Collapse
Treating project memory and general memory as one shared store.

### Legacy-Migration Identity Fallacy
Assuming migrated memory is identical to legacy memory without export-and-compare verification.

## Deep Drift benchmark additions

**Cross-Surface Memory Fidelity (CSMF)**  
Can memory flowing between Chat and cloud Cowork be reconstructed?

**Execution-Location Memory Fidelity (ELMF)**  
Can cloud and local Cowork memory participation be distinguished?

**Memory-Topic Edit Fidelity (MTEF)**  
Can model-derived memory entries and later human edits be separately reconstructed?

**Source-to-Derived Memory Fidelity (SDMF)**  
Can a memory entry remain traceable to its source even if that source chat is later deleted?

**Pause-vs-Reset Fidelity (PRF)**  
Can retained-but-inactive memory be distinguished from destroyed memory state?

**Sensitive-Memory Policy Fidelity (SMPF)**  
Can opt-in policy and activation timing for sensitive-topic memory be reconstructed?

**Project Memory Boundary Fidelity (PMBF)**  
Can project-specific memory remain distinguishable from general memory?

**Legacy-to-New Memory Migration Fidelity (LMMF)**  
Can exported legacy state, migrated state, missing items, and manual reconstitution be compared?

## Canonical Deep Drift requirement

> Every material AI-assisted workflow using persistent memory across multiple execution surfaces should preserve a machine-readable memory-state manifest that records the active memory system; memory topic identifiers and contents relevant to the task; source conversations where available; subsequent human edits; project versus general-memory scope; sensitive-topic memory policy; pause/reset state; execution surface; cloud-versus-local Cowork status; cross-surface memory-read and memory-write events; source-chat deletion state; legacy-memory migration status; export deadlines and exported snapshots; manually restored memory items; and all downstream documents, PDFs, code, messages, images, or decisions. A shared account must never be treated as proof of shared memory state across all execution surfaces, and deletion of a source conversation must never be treated as proof that derived memory no longer influences future work.

## Broader creator-workflow trend

The architecture is moving from:

```text
ONE CHAT
-> ONE CONTEXT
```

toward:

```text
CHAT
+ PROJECT
+ CLOUD AGENT
+ MEMORY TOPICS
+ USER EDITS
+ POLICY SETTINGS
+ EXECUTION LOCATION
=
PERSISTENT CREATOR STATE
```

The major change is not simply that AI "remembers more."

The state itself is becoming distributed, editable, policy-sensitive, and execution-surface dependent.

That produces a Deep Drift principle:

> **Persistent context is becoming infrastructure. It must be versioned like infrastructure.**

## Sources

1. Anthropic Help Center. **Release notes**, entry dated 25 August 2026: "Memory in Claude Cowork, editable topics, and a sensitive topics setting."  
   https://support.claude.com/en/articles/12138966-release-notes

2. Anthropic Help Center. **Use Claude's chat search and memory to build on previous context.** Current documentation accessed 2 September 2026.  
   https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift research-log entry was found for the combination of bidirectional Chat/Cowork cloud memory, cloud-versus-local memory divergence, editable memory Topics, sensitive-topic opt-in, source-chat deletion without derived-memory deletion, and the active 9 September 2026 legacy-memory export deadline.  
**Relationship to prior nodes:** Complements memory portability, temporary-state asymmetry, prompt-state extinction, and browser execution-state nodes. CSMESF specifically formalizes persistent memory as a distributed state layer whose availability changes with execution surface and host location.  
**Freshness:** Verified against Anthropic first-party documentation current on 2 September 2026.