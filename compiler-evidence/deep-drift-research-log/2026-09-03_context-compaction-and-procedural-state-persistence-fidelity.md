# Deep Drift Research Update — CCPSF

## Context-Compaction and Procedural-State Persistence Fidelity

**Research date:** 3 September 2026  
**Primary fresh delta:** OpenAI released Codex CLI 0.153.0 on 3 September 2026 with an experimental context-management mode that introduces token-budgeted context, history notes, and a `new_context` tool. The same release also preserves several procedural states across compaction, restarts, forks, and reconnects, while adding remote plugin-marketplace management from the CLI.  
**Scope:** context compression, history reconstruction, restart/fork persistence, approvals, drafts, transcripts, pasted content, attachments, plugin-marketplace state, and creator-runtime reproducibility.

## Executive finding

The fresh creator-workflow shift is that context is becoming an explicitly managed runtime object rather than an invisible by-product of a long conversation.

OpenAI's 3 September 2026 Codex CLI release adds an experimental context-management configuration for eligible ChatGPT-backed Codex sessions. When enabled, it activates:

```text
TOKEN-BUDGET CONTEXT
+ HISTORY NOTES
+ new_context TOOL
```

At the same time, the release documents selective persistence across context-destroying or context-rebuilding events:

```text
GUARDIAN REVIEW HISTORY
-> SURVIVES COMPACTION
-> SURVIVES RESTARTS
-> SURVIVES USER-CREATED FORKS

TUI DRAFTS + TRANSCRIPTS
-> SURVIVE APP-SERVER DISCONNECT / RECONNECT

PASTED CONTENT + ATTACHMENTS
-> SURVIVE COMPOSER UNDO / REDO
```

This creates a crucial Deep Drift distinction:

```text
CONTEXT COMPRESSED
!= CONTEXT LOST

CONTEXT REBUILT
!= ORIGINAL CONTEXT RESTORED

PROCEDURAL STATE SURVIVES
!= SEMANTIC HISTORY SURVIVES IDENTICALLY

FORK
!= CLEAN-SLATE RUN

RESTART
!= ZERO-STATE EXECUTION

new_context
!= NEW ACCOUNT OR NEW PROJECT
```

The research object is the **state survival map across a context transition**.

## New node

### Context-Compaction and Procedural-State Persistence Fidelity (CCPSF)

Minimum state model:

```text
thread_id
context_mode
context_budget
history_note_state
compaction_event
new_context_event
restart_event
fork_event
disconnect_event
reconnect_event
approval_state
guardian_history_state
draft_state
transcript_state
attachment_state
plugin_marketplace_state
post_transition_output
```

## 1. Context can now be explicitly replaced

The experimental `new_context` tool is significant because it turns context transition into an explicit runtime operation.

The old mental model was:

```text
LONG THREAD
-> MODEL EVENTUALLY FORGETS / COMPACTS
```

The emerging model is:

```text
THREAD
-> TOKEN BUDGET
-> HISTORY NOTES
-> EXPLICIT new_context
-> CONTINUED EXECUTION
```

Deep Drift must therefore distinguish **conversation continuity** from **context continuity**. A thread may remain visually continuous while the active model context has changed materially.

## 2. History notes are a reconstitution layer

History notes are not the original transcript. They are a representation of prior state used to sustain future work within a constrained context budget.

```text
ORIGINAL HISTORY
!= HISTORY NOTES
!= ACTIVE CONTEXT
```

This extends MPSRF's portability logic into an intra-run setting: the platform can reconstruct usable context from a transformed representation without preserving every prior token verbatim.

For Deep Drift, any visible or inferable compaction event should record pre-compaction state, compaction trigger, history-note representation, post-compaction state, known omissions, and behavioral drift.

## 3. Procedural history can survive semantic compression

The same release states that Guardian review history survives compaction, restarts, and user-created forks.

That means a safety/approval procedure can remain causally active after the conversational substrate has been compressed or reconstructed.

```text
PROCEDURAL MEMORY
!= SEMANTIC MEMORY
```

A future action may be influenced by a retained approval/review state whose originating conversational detail is no longer present in full.

## 4. Forks can inherit procedural ancestry

A user-created fork is normally tempting to treat as a new branch from a known message. But if approval or Guardian history survives into that fork, the fork is not procedurally clean.

Deep Drift must preserve parent thread, fork point, inherited semantic state, inherited procedural state, and new branch state.

## 5. Reconnect can preserve drafts and transcripts

Codex CLI 0.153.0 documents reconnection after external app-server connection loss while preserving drafts and transcripts and pausing uncertain or queued submissions for review.

This is different from ordinary retry behavior. CRFPF established that failed runs need branch-level provenance. CCPSF adds a narrower distinction: a transport/app-server interruption can reconnect while preserving working state.

Therefore the archive should distinguish `retry`, `restart`, `resume`, and `reconnect` instead of treating all recovery as one event class.

## 6. Queued submissions can survive but remain uncertain

The release notes that uncertain or queued submissions stay paused for review after reconnect.

That creates an intermediate state:

```text
INPUT EXISTS
+ EXECUTION STATUS UNCERTAIN
+ HUMAN REVIEW REQUIRED
```

Deep Drift should record `drafted`, `queued`, `submitted`, `execution_confirmed`, `execution_uncertain`, and `cancelled` as separate states.

## 7. Paste and attachment history now has local undo/redo persistence

The same release adds Vim undo and redo while preserving complete drafts, including pasted content and attachments.

A pasted block can now participate in an editable local history:

```text
PASTE
-> EDIT
-> UNDO
-> REDO
```

while remaining bundled with attached artifacts.

Therefore current composer content is not the complete input-construction history. The composer itself is becoming a versioned creator surface.

## 8. Remote plugin marketplaces turn procedural dependencies into mutable runtime state

Codex CLI 0.153.0 can list, install, and remove plugins from remote marketplaces.

This extends prior OpenAI GitHub-synced plugin marketplace behavior from workspace administration into CLI-level procedural state.

A run can therefore depend on:

```text
REMOTE MARKETPLACE
-> INSTALLED PLUGIN VERSION
-> SKILL / TOOL AVAILABILITY
-> EXECUTION
```

The marketplace state is now part of reproducibility.

## 9. Context transitions and plugin transitions can intersect

The release is especially important because context management and plugin-marketplace mutability arrive in the same runtime.

A continued thread may experience both a context transition and a procedural dependency transition without changing its visible thread identity.

The dangerous assumption is:

```text
SAME THREAD ID
= SAME RUNTIME
```

That assumption is no longer defensible.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory/context | Major fresh delta | Explicit context budgeting, history notes, and `new_context` create versioned intra-thread context state |
| Skills/plugins | Major fresh delta | Remote marketplaces can be managed from Codex CLI, changing procedural availability |
| Mini-app builders | No stronger same-day delta found | Prior Sites/Design/Agent Builder nodes remain current |
| Chat-to-document | Indirect but material | Long-running artifact creation can continue after compaction/reconnect with transformed context |
| DOCX/PDF | Downstream effect | A final file may be produced after one or more context transitions not visible in the file |
| Copy-paste/export | Material | Pasted content and attachments now survive local undo/redo history in the composer |
| Creator workflow | Major | Runtime continuity is becoming a selective state-preservation problem rather than simple transcript continuity |

## New failure classes

### Thread-Equals-Context Fallacy
Assuming the visible conversation thread proves a stable active context.

### Compaction-Equals-Loss Fallacy
Assuming all prior state disappears when context is compacted.

### Compaction-Equals-Identity Fallacy
Assuming compressed/reconstituted context is semantically identical to the original history.

### Fork-Equals-Clean-State Error
Ignoring procedural review or approval history inherited into a fork.

### Reconnect-Equals-Retry Error
Treating state-preserving reconnection as a fresh execution branch.

### Queued-Equals-Executed Error
Assuming a queued or uncertain submission definitely reached model execution.

### Plugin-Inventory Constancy Fallacy
Assuming tool/Skill availability is constant across the life of a thread.

## Deep Drift benchmark additions

**Context Transition Fidelity (CTF)** — Can explicit and implicit context transitions be reconstructed over the life of a thread?

**History Reconstitution Fidelity (HRF)** — Can original transcript, history-note representation, and active post-compaction context remain distinct?

**Procedural-State Survival Fidelity (PSSF)** — Can approvals, Guardian history, and other procedural state be tracked independently from semantic history?

**Fork Inheritance Fidelity (FIF)** — Can inherited state in a branch be separated from branch-local state?

**Reconnect Continuity Fidelity (RCF)** — Can reconnect/resume events be distinguished from retry/restart branches?

**Plugin-State Continuity Fidelity (PSCF)** — Can marketplace and plugin inventory changes be associated with the exact runs they affected?

## DRPA-1.0 protocol additions

### CONTEXT-TRANSITION RULE

> When an AI creator runtime compacts, summarizes, replaces, or explicitly resets active context while preserving the surrounding thread or task identity, the transition must be logged as a provenance boundary. Preserve the context-management mode, trigger, pre-transition thread state, any history-note or summary representation, explicit `new_context` event where applicable, post-transition state, known omissions, inherited procedural state, and downstream outputs. Visual continuity of a thread must never be treated as proof of contextual identity.

### PROCEDURAL-STATE SURVIVAL RULE

> Approval history, safety review state, permissions, plugin availability, queued-input state, and other procedural dependencies must be versioned separately from semantic conversation history. When such state survives compaction, restart, fork, or reconnect, preserve the survival event and scope. A branch or resumed session must never be treated as a clean procedural slate merely because its active semantic context was rebuilt.

### PLUGIN-INVENTORY TRANSITION RULE

> When plugins or Skills can be installed, removed, updated, or reconciled from remote marketplaces during the lifetime of a creator thread, preserve the marketplace source, plugin identity, revision where observable, transition time, account scope, and run-time availability. Stable thread identity must not be treated as proof of stable procedural capability.

## Eir'an state-flow addition

```text
CONTEXT STATE:
full history
compacted
history notes
new context
unknown

TRANSITION:
compaction
new_context
restart
fork
disconnect
reconnect

PROCEDURAL STATE:
Guardian history
approval state
permissions
plugin inventory
queued input

INPUT CONSTRUCTION:
draft
paste
attachment
undo
redo
queued
execution confirmed

OUTPUT:
artifact ID
post-transition run
known drift
verification state
```

## Canonical Deep Drift requirement

> Treat active context, visible thread history, procedural state, and plugin inventory as separate versioned layers. When a runtime compacts or replaces context, preserve the representation used to reconstitute continuity and record which procedural states survived. When a thread reconnects or forks, verify inherited state instead of assuming either full continuity or a clean reset.

## Deep Drift principle

> **A conversation can look continuous while the machine underneath has changed what “the past” means.**

Operationally:

> **Archive the context transition, not just the transcript before and after it.**

## Broader platform scan

No stronger same-day first-party delta was found in Anthropic, Google Workspace, or Microsoft 365 for the specific memory/Skills/export categories than the nodes already logged earlier on 3 September. Anthropic's latest platform release remains 1 September 2026 and is model-focused. Google's strongest recent creator deltas remain the 2 September Workspace changes already captured in CMATF and CSPIF. Microsoft's current creator changes remain broad but the relevant Page, native Office, agent, and connector transitions are already represented in CPATF/OHSEF.

The new OpenAI Codex 0.153.0 release is distinct because it exposes **context management itself as mutable runtime machinery** while simultaneously preserving selected procedural state across transformations.

## Sources

1. OpenAI, **ChatGPT & Codex changelog - Codex CLI 0.153.0**, 3 September 2026. Documents experimental context management with token-budget context, history notes, and `new_context`; persistence of Guardian history across compaction/restarts/forks; reconnection preserving drafts/transcripts; paste/attachment-aware undo/redo; and remote plugin marketplace management.  
   https://learn.chatgpt.com/docs/changelog

2. OpenAI, **ChatGPT Release Notes**, checked 3 September 2026. Main ChatGPT release notes remain at 1 September for the latest general ChatGPT entry; the 3 September delta is in the ChatGPT & Codex changelog.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

3. Anthropic, **Claude Platform release notes**, checked 3 September 2026. Latest platform release remains 1 September 2026 and is primarily a model release.  
   https://docs.anthropic.com/en/release-notes/api

4. Microsoft Learn, **Release Notes for Microsoft 365 Copilot**, checked 3 September 2026. Current creator, agent, Page, native-file, and connector changes remain complementary to prior Deep Drift nodes.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift research-log entry was found for explicit intra-thread context replacement, history-note reconstitution, procedural-state survival across compaction/forks/restarts, and remote plugin inventory mutation as one provenance problem.  
**Relationship to prior nodes:** Extends MMBESF (memory boundaries), CRFPF (failure/recovery attempt graphs), MPSRF (reconstitution fidelity), and OHSEF (orchestration/procedural dependencies). CCPSF focuses specifically on selective state survival when active context itself is compressed, rebuilt, replaced, forked, or reconnected.  
**Freshness:** Primary implementation released by OpenAI on 3 September 2026.
