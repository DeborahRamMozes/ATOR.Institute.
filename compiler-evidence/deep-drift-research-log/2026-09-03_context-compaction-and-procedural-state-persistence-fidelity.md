# Deep Drift Research Update — CCPSF

## Context-Compaction and Procedural-State Persistence Fidelity

**Research date:** 3 September 2026  
**Primary fresh delta:** OpenAI Codex CLI 0.153.0, published 3 September 2026, introduces an experimental context-management mode using token-budget context, history notes, and a `new_context` tool for eligible ChatGPT-backed Codex sessions. The same release documents selective persistence of procedural and composer state across compaction, restart, fork, disconnect, and reconnect.  
**Scope:** memory/context, Skills/plugins, long-running creator sessions, chat-to-artifact workflows, copy/paste construction history, restart/fork semantics, and DOCX/PDF reproducibility.

## Executive finding

The strongest fresh change in this scan is not another file-export option. It is the conversion of **active context into an explicitly managed runtime state**.

Codex 0.153.0 adds a disabled-by-default `features.context_management.experimental_mode`. When enabled for eligible ChatGPT Plus, Pro, or Pro Lite sessions using the Codex backend, it activates:

```text
TOKEN-BUDGET CONTEXT
+ HISTORY NOTES
+ new_context TOOL
```

At the same time, other states can survive context-changing events:

```text
GUARDIAN REVIEW HISTORY
-> survives compaction
-> survives restarts
-> survives user-created forks

TUI DRAFTS + TRANSCRIPTS
-> survive app-server disconnect / reconnect

PASTED CONTENT + ATTACHMENTS
-> survive local undo / redo
```

Deep Drift must therefore stop treating a visible thread as a single stable context object.

```text
VISIBLE THREAD
!= ACTIVE MODEL CONTEXT

ORIGINAL HISTORY
!= HISTORY NOTES
!= RECONSTITUTED CONTEXT

CONTEXT COMPACTED
!= ALL PROCEDURAL STATE LOST

FORK
!= CLEAN PROCEDURAL SLATE

RECONNECT
!= RETRY

SAME THREAD ID
!= SAME RUNTIME STATE
```

## 1. Context is now an explicit transitionable object

The experimental `new_context` tool makes context replacement a first-class runtime operation rather than only an invisible side effect of long conversations.

The old mental model was:

```text
LONG THREAD
-> context fills
-> platform silently compresses or forgets
```

The emerging model is:

```text
THREAD
-> TOKEN BUDGET
-> HISTORY NOTES
-> new_context
-> CONTINUED EXECUTION
```

For Deep Drift, **conversation continuity and context continuity are now separate variables**.

A thread can remain visually continuous while the model's operative representation of its past changes materially.

## 2. History notes are a reconstitution layer

History notes are not equivalent to the original transcript. They are a transformed representation used to sustain future work under a bounded context budget.

```text
ORIGINAL TRANSCRIPT
      |
      v
HISTORY-NOTE REPRESENTATION
      |
      v
ACTIVE POST-TRANSITION CONTEXT
```

This extends Deep Drift's memory-portability logic into a single running session: the system can preserve useful continuity while changing the representation that carries that continuity.

For reproducibility, a material context transition should record:

- pre-transition thread state;
- transition trigger;
- history-note or summary representation where observable;
- post-transition context state;
- known omissions;
- downstream behavioral drift.

## 3. Procedural state can survive semantic compaction

OpenAI's official release says Guardian review history survives **compaction, restarts, and user-created forks**, while respecting rollback boundaries and isolating subagent history.

This creates another causal channel:

```text
SEMANTIC HISTORY
!= PROCEDURAL REVIEW HISTORY
```

A future action may therefore be influenced by retained approval/review state even when the original semantic history has been compressed or rebuilt.

Deep Drift must version procedural memory separately from semantic memory.

## 4. Forks can inherit hidden ancestry

A user-created fork is tempting to treat as a fresh branch from a visible message. But if procedural review history survives into that branch, the fork is not procedurally clean.

A correct fork record becomes:

```text
PARENT THREAD
   |
   +--> FORK POINT
           |
           +--> inherited semantic state
           +--> inherited procedural state
           +--> branch-local state
```

A branch can inherit more than what the human sees in copied conversational text.

## 5. Reconnect is not retry

Codex 0.153.0 also documents TUI reconnection after an external app-server connection drop while preserving drafts and transcripts. Uncertain or queued submissions remain paused for review.

That gives Deep Drift four recovery classes that must not be collapsed:

```text
RECONNECT
RESUME
RESTART
RETRY
```

A reconnect may preserve the working session. A retry may create a new causal branch. Those histories are not equivalent.

## 6. Queued input can exist without confirmed execution

After reconnect, an input may be preserved while its execution status remains uncertain.

```text
INPUT EXISTS
+ SUBMISSION STATUS UNCERTAIN
+ HUMAN REVIEW REQUIRED
```

So creator provenance must distinguish:

```text
DRAFTED
QUEUED
SUBMITTED
EXECUTION CONFIRMED
EXECUTION UNCERTAIN
CANCELLED
```

Otherwise an archived prompt can be falsely treated as a prompt the model definitely received.

## 7. Copy/paste now participates in local input history

Codex 0.153.0 adds Vim undo/redo while preserving complete drafts, including pasted content and attachments.

The composer itself is therefore becoming a small versioned creator surface:

```text
PASTE
-> EDIT
-> UNDO
-> REDO
-> SUBMIT
```

The final submitted prompt may not reveal the construction path that created it.

This does not make every keystroke important. It does mean that large pasted evidence, attachments, and materially reversed edits may matter when reconstructing a research run.

## 8. Plugin marketplaces are now mutable CLI runtime state

The same release allows the plugin CLI to **list, install, and remove plugins from remote marketplaces**.

A thread can therefore experience procedural-dependency changes without changing its visible identity:

```text
THREAD START
-> PLUGIN INVENTORY A
-> CONTEXT TRANSITION
-> REMOTE PLUGIN CHANGE
-> PLUGIN INVENTORY B
-> CONTINUE THREAD
```

For Deep Drift:

```text
SAME THREAD ID
!= SAME TOOL / SKILL INVENTORY
```

The runtime record should preserve marketplace source, plugin identity, installation/removal time, version or revision where visible, and run-time availability.

## 9. Why this matters for DOCX/PDF and creator artifacts

A final report can be produced after several invisible runtime transitions:

```text
RESEARCH THREAD
-> CONTEXT COMPACTION
-> HISTORY NOTES
-> PLUGIN CHANGE
-> RECONNECT
-> CONTINUED ANALYSIS
-> DOCX
-> PDF
```

The DOCX/PDF cannot tell us:

- which context representation was active when a claim was produced;
- whether approval/review history survived a compaction;
- whether the plugin inventory changed mid-thread;
- whether a reconnect preserved a draft or a retry regenerated it;
- whether the final prompt was reconstructed after undo/redo.

Therefore the artifact must be linked to the **context-transition ledger**, not only to the chat transcript.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory / context | **Major fresh delta** | Active context can be budgeted, summarized into history notes, and explicitly replaced with `new_context` |
| Skills / plugins | **Major fresh delta** | Remote plugin marketplaces can be managed from Codex CLI, changing procedural availability |
| Mini-app builders | No stronger same-day delta found | Existing Sites/agent/design nodes remain current |
| Chat-to-document | Material downstream effect | Long creator runs can cross context transitions before document materialization |
| DOCX/PDF | Material provenance effect | Final files can outlive and flatten multiple context/runtime transitions |
| Copy-paste/export | Material | Pasted content and attachments survive local undo/redo history |
| Creator workflow | **Major** | Runtime continuity is now selective state persistence, not simple transcript continuity |

## New failure classes

### Thread-Equals-Context Fallacy
Assuming the visible conversation thread proves a stable active model context.

### Compaction-Equals-Loss Fallacy
Assuming every prior state disappears when semantic context is compacted.

### Reconstitution-Equals-Identity Fallacy
Assuming history notes or reconstructed context are semantically identical to the original transcript.

### Fork-Equals-Clean-State Error
Ignoring inherited procedural review or approval state in a user-created fork.

### Reconnect-Equals-Retry Error
Treating state-preserving reconnection as a fresh execution branch.

### Queued-Equals-Executed Error
Assuming a queued or uncertain submission definitely reached model execution.

### Plugin-Inventory Constancy Fallacy
Assuming Skill/tool availability is constant over the life of a thread.

## Benchmark additions

**Context Transition Fidelity (CTF)**  
Can explicit and implicit context transitions be reconstructed over the life of a thread?

**History Reconstitution Fidelity (HRF)**  
Can original transcript, history-note representation, and active post-transition context remain distinct?

**Procedural-State Survival Fidelity (PSSF)**  
Can approvals, Guardian history, and other procedural state be tracked independently from semantic history?

**Fork Inheritance Fidelity (FIF)**  
Can inherited state in a branch be separated from branch-local state?

**Reconnect Continuity Fidelity (RCF)**  
Can reconnect/resume events be distinguished from retry/restart branches?

**Plugin-State Continuity Fidelity (PSCF)**  
Can marketplace and plugin inventory changes be associated with the exact runs they affected?

## DRPA-1.0 protocol additions

### CONTEXT-TRANSITION RULE

> When an AI creator runtime compacts, summarizes, replaces, or explicitly resets active context while preserving the surrounding thread or task identity, the transition must be logged as a provenance boundary. Preserve the context-management mode, trigger, pre-transition thread state, any history-note or summary representation, explicit context-reset event where applicable, post-transition state, known omissions, inherited procedural state, and downstream outputs. Visual continuity of a thread must never be treated as proof of contextual identity.

### PROCEDURAL-STATE SURVIVAL RULE

> Approval history, safety-review state, permissions, plugin availability, queued-input state, and other procedural dependencies must be versioned separately from semantic conversation history. When such state survives compaction, restart, fork, or reconnect, preserve the survival event and scope. A branch or resumed session must never be treated as a clean procedural slate merely because its active semantic context was rebuilt.

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

In this 3 September scan, I did not find a stronger same-day first-party delta in Anthropic, Google Workspace, or Microsoft 365 for these categories than the nodes already logged.

Google's 2 September expansion of persistent custom instructions across Drive, Chat, Slides, Sheets, and Gmail remains important because standing instructions are another hidden causal layer, but Deep Drift already captures that as cross-surface instruction state.

Anthropic's latest release notes still foreground its recent cloud-Cowork memory and editable memory topics; its legacy-memory migration remains an active deadline issue already captured by MMBESF.

The OpenAI Codex 0.153.0 change is distinct because it exposes **intra-thread context transformation plus selective procedural-state survival** inside the same running creator environment.

## Sources

1. **OpenAI Codex 0.153.0 official GitHub release**, published 3 September 2026. Release notes document Vim undo/redo preserving pasted content and attachments; remote plugin marketplace management; app-server reconnect preserving drafts and transcripts; Guardian review history surviving compaction/restarts/forks; and experimental context management with token-budget context, history notes, and `new_context`.  
   https://github.com/openai/codex/releases/tag/rust-v0.153.0

2. **Google Workspace Updates**, “Custom instructions for Gemini in Workspace now available in more apps,” 2 September 2026.  
   https://workspaceupdates.googleblog.com/2026/09/custom-instructions-for-gemini-in-Workspace-now-available-in-more-apps.html

3. **Anthropic Help Center**, Claude release notes, checked 3 September 2026.  
   https://support.claude.com/en/articles/12138966-release-notes

4. **Anthropic Help Center**, “Use Claude’s chat search and memory to build on previous context,” checked 3 September 2026.  
   https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context

## Research status

**Node status:** Updated and source-verified against the OpenAI 0.153.0 release; existing repository path retained to avoid duplicate-node inflation.  
**Relationship to prior nodes:** Extends MMBESF (memory boundaries), MPSRF (semantic reconstitution), OHSEF (orchestration state), and CRFPF (failure/recovery branches). CCPSF specifically tracks what survives and what changes when the active context itself is compacted, rebuilt, replaced, forked, or reconnected.  
**Evidence strength:** High for the OpenAI implementation because the key claims come from OpenAI's official Codex GitHub release.  
**Freshness:** Primary implementation published 3 September 2026.
