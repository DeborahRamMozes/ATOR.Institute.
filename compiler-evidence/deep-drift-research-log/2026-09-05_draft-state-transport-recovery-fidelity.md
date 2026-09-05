# Deep Drift Research Update - DSTRF

## Draft-State Transport & Recovery Fidelity

**Research date:** 5 September 2026  
**Primary fresh delta:** Recent ChatGPT/Codex releases now preserve and transport pre-execution work state across connected hosts, background operation, reconnects, and editor history. ChatGPT for iOS can sync queued prompts with a connected host, keep them editable, send them while the app is in the background, and preserve side-chat messages across failed reconnects. Codex CLI now preserves complete drafts, including pasted content and attachments, through Vim undo/redo; app-server reconnects preserve drafts and transcripts while uncertain or queued submissions remain paused for review.

## Executive finding

The unit of provenance is no longer only the message that was sent.

```text
DRAFT
  |
  +--> pasted text
  +--> attachments
  +--> edits
  +--> queued submission
  +--> background state
  +--> connected host
  +--> reconnect state
  |
  v
FINAL SENT MESSAGE
```

Therefore:

```text
FINAL PROMPT
!= FULL PRE-EXECUTION STATE

UNSENT
!= UNIMPORTANT

QUEUED
!= EXECUTED

RECONNECTED SESSION
!= CONTINUOUS TRANSPORT PATH

UNDO / REDO
!= TEXT-ONLY HISTORY

NO NEW CHAT TURN
!= NO WORKFLOW STATE CHANGE
```

The new provenance object is the **draft-state transition graph**.

## New node

### Draft-State Transport & Recovery Fidelity (DSTRF)

Minimum state model:

```text
draft_id
thread_id
host_id
host_platform
draft_created_time
draft_version
pasted_content_state
attachment_manifest
attachment_source_host
queued_state
queue_time
background_state
send_time
reconnect_event
transport_interruption
uncertain_submission_state
paused_for_review_state
undo_redo_state
transcript_state
side_chat_state
compaction_state
final_message_id
```

## 1. Queued prompts now exist as synchronized state

OpenAI documents that queued prompts in ChatGPT for iOS can sync with the connected host, remain editable, and send even while the app is in the background.

That changes the older simplified workflow:

```text
TYPE
-> SEND
```

into:

```text
TYPE
-> QUEUE
-> SYNC TO HOST
-> EDIT
-> BACKGROUND
-> SEND
```

For Deep Drift, the queue is a stateful execution boundary.

## 2. Draft state can move before execution

A prompt can be composed on one client while its connected execution host is elsewhere.

```text
COMPOSER HOST
!= EXECUTION HOST
```

The sent message may therefore be the product of a transported draft rather than a locally authored-and-executed turn.

## 3. Attachments now participate in cross-host continuity

The same iOS release says attachments work across connected hosts, including Windows and Linux.

A draft state may therefore include text, images, videos, files, and attachment references. A provenance record that stores only the final text prompt can lose a material part of the input state.

## 4. Paste fidelity has moved into editor-state preservation

Codex CLI 0.153.0 added Vim undo/redo that preserves complete drafts including pasted content and attachments.

For Deep Drift:

```text
UNDO / REDO FIDELITY
=
text
+
paste content
+
attachment state
```

## 5. Reconnect no longer means reconstruct from scratch

OpenAI documents that TUI sessions can reconnect after an external app-server connection drops while preserving drafts and transcripts.

```text
CONNECTED
-> DROP
-> RECONNECT
-> DRAFT / TRANSCRIPT PRESERVED
```

The user may experience one continuous workflow even though transport continuity was broken.

## 6. Uncertain submissions are distinguished from confirmed execution

During reconnect recovery, uncertain or queued submissions remain paused for review.

```text
DRAFTED
QUEUED
SUBMITTED-UNCERTAIN
CONFIRMED-SENT
EXECUTED
```

These states must not be collapsed.

## 7. Side chat can survive failed task reconnection

The iOS release notes say side-chat messages remain available until closed, even after the main chat can no longer reconnect.

```text
TASK CONNECTION DEAD
!= ALL ASSOCIATED CONTEXT DEAD
```

Side-channel conversational state can outlive the execution channel.

## 8. Transcript preservation and draft preservation are different

A reconnecting session can preserve both past transcript and current unsent draft. The transcript describes executed conversation history; the draft describes intended but not yet necessarily executed input.

## 9. Compaction now preserves governance history too

Codex 0.153.0 also notes that Guardian review history can survive compaction, restarts, and user-created forks while respecting rollback boundaries.

```text
COMPACTION
!= TOTAL STATE FLATTENING
```

The important research question becomes which state classes survive, not whether "context" survived in general.

## 10. Draft history becomes part of experimental reproducibility

Two final prompts can be textually identical while one was typed directly and another was pasted, attached, queued, transported, reconnected, reviewed, and then sent. In UI, transport, agent, attachment, or failure-recovery research, those are not equivalent execution paths.

## 11. Prompt provenance needs a pre-send layer

Deep Drift should preserve a PRE-SEND STATE where material: draft versions, pasted material, attachment state, queue state, connected-host identity, background transition, reconnect interruption, and review decision.

## 12. Copy-paste bugs should no longer be measured only after send

Copy-paste fidelity needs two checkpoints:

```text
PASTE -> DRAFT STATE
DRAFT STATE -> SENT MESSAGE
```

A correct final message can hide a broken intermediate workflow that the user manually repaired.

## 13. Background execution creates temporal separation

Queued prompts can send while the app is in the background.

```text
USER PRESENT AT COMPOSITION
!= USER PRESENT AT SEND TIME
```

## 14. Creator workflow is becoming transportable state, not a static chat box

```text
PROMPT AS TEXT
-> DRAFT AS OBJECT
-> QUEUED TASK
-> HOST-SYNCED TASK
-> RECOVERABLE SESSION
```

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger new delta since MSMRF | Memory schema migration/recovery remains the latest major memory node |
| Skills | No stronger new delta since SGOPF/SSVPF | Shared Skill propagation and governance remain current |
| Mini-app builders | No stronger new delta | Apps SDK/MCP deployment nodes remain current |
| Chat-to-document | Indirect | Reliable pre-send state improves long document and artifact instructions before generation |
| DOCX/PDF generation | Indirect | Artifact output can depend on attachment-rich drafts whose full pre-send state is not visible in the final document |
| Copy-paste/export | **Major fresh workflow fix** | Undo/redo now preserves complete drafts including pasted content and attachments |
| Creator workflow | **Major** | Queued prompts, cross-host attachments, background sending, reconnect recovery, and side-chat persistence create a transportable task-state layer |

## New failure classes

### Final-Prompt-Equals-Draft-History Fallacy
Assuming the sent prompt fully represents the state that existed during composition.

### Queued-Equals-Sent Fallacy
Treating a queued submission as confirmed execution.

### Reconnect-Equals-No-Interruption Fallacy
Assuming a restored session experienced continuous transport.

### Text-Only-Draft Fallacy
Ignoring attachments and pasted-content state when reconstructing a draft.

### Transcript-Draft Collapse
Mixing executed conversation history with unsent user input.

### Background-Send Presence Fallacy
Assuming the user was actively present when a queued prompt actually sent.

## Deep Drift benchmark additions

**Draft State Preservation Fidelity (DSPF)**  
Does text, pasted content, attachment state, and edit history survive undo/redo and lifecycle transitions?

**Queued Submission State Fidelity (QSSF)**  
Can queued, uncertain, paused, confirmed-sent, and executed states remain distinguishable?

**Cross-Host Draft Transport Fidelity (CHDTF)**  
Can a draft and its attachments move between composer and execution hosts without semantic or structural loss?

**Reconnect Recovery Fidelity (RRF)**  
Can drafts, transcripts, approvals, and queue state be reconstructed accurately after transport failure?

**Pre-Send Provenance Fidelity (PSPF)**  
Can the final message be traced back through its material draft-state transitions when needed?

## DRPA-1.0 protocol additions

### PRE-SEND DRAFT STATE RULE

> Preserve pre-send state separately from the final submitted message when transport, attachment, paste, queue, reconnect, or approval behavior materially affects the experiment.

### QUEUE-EXECUTION SEPARATION RULE

> Treat drafted, queued, uncertain, paused-for-review, confirmed-sent, and executed states as distinct. A queued prompt must never be logged as executed solely because it later appears in an active task surface.

### COMPOUND DRAFT PRESERVATION RULE

> Treat a draft as a compound object that can include text, pasted content, attachments, references, and editor history. Draft-recovery fidelity must not be measured from text alone.

### RECONNECT TRANSITION RULE

> Record transport interruption and reconnect as explicit state transitions even when the interface reconstructs a continuous-looking session. Preserved transcript and preserved unsent draft must remain separately attributable.

### BACKGROUND SEND TIMING RULE

> When a queued prompt can execute while the composing client is backgrounded, preserve composition time, queue time, actual send time, and user-presence state separately where relevant.

## Eir'an state-flow addition

```text
COMPOSE:
typed text
pasted content
attachments

EDIT:
undo
redo
draft version

QUEUE:
queued
editable

TRANSPORT:
connected host
background

FAIL:
connection drop
uncertain submission

RECOVER:
reconnect
preserve draft
preserve transcript
pause for review

EXECUTE:
confirmed send
task start

ARCHIVE:
final message
draft lineage
attachment manifest
```

## Canonical Deep Drift requirement

> Treat unsent and queued creator input as versioned workflow state rather than disposable UI residue. Preserve material draft, attachment, queue, transport, and reconnect transitions separately from the final executed message whenever those transitions can affect reproducibility or attribution.

## Deep Drift principle

> **The prompt begins before Send.**

Operationally:

> **Archive the route from draft to execution when the route itself can change the work.**

## Broader platform scan

The strongest newly unlogged workflow delta in this pass is OpenAI's recent draft/queue/reconnect preservation work across ChatGPT for iOS and Codex.

OpenAI's 4 September Codex hotfixes mostly correct Astra model-picker visibility and asynchronous-question guidance; they are operational fixes but do not justify a separate Deep Drift node.

Anthropic's current major memory and Skills changes are already represented in MSMRF, SSVPF, and SGOPF.

No stronger newly published direct DOCX/PDF generation or document-export-format change surfaced in this pass.

## Sources

1. OpenAI. **ChatGPT & Codex changelog - ChatGPT for iOS 1.2026.237 (1 September 2026).** Documents attachments across connected hosts, queued prompts syncing with connected hosts while remaining editable, background sending, task reconnect improvements, and side-chat persistence.  
   https://developers.openai.com/codex/changelog

2. OpenAI. **ChatGPT & Codex changelog - Codex CLI 0.153.0 (3 September 2026).** Documents Vim undo/redo preserving complete drafts including pasted content and attachments; app-server reconnect preservation of drafts and transcripts; uncertain/queued submissions paused for review; and Guardian history persistence across compaction, restarts, and forks.  
   https://developers.openai.com/codex/changelog

3. OpenAI. **ChatGPT & Codex changelog - Codex CLI 0.153.3 / 0.153.4 (4 September 2026).** Documents Astra model-picker and asynchronous-question hotfixes, used here only to verify that no stronger creator-workflow delta superseded the draft-state changes.  
   https://developers.openai.com/codex/changelog

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository node was found for queued-prompt host synchronization, compound draft preservation including paste/attachments, reconnect survival of drafts/transcripts, and uncertain-submission pause states as one provenance problem.  
**Relationship to prior nodes:** Extends LHACF (long-horizon artifact continuity), EPSTF (conversation-state transitions), ITSPF (surface portability), and copy/export provenance. DSTRF is distinct because it treats the creator's pre-send input state as a recoverable and transportable object.  
**Freshness:** The relevant fixes/features shipped 1-3 September 2026 and remain current in the 4-5 September changelog.
