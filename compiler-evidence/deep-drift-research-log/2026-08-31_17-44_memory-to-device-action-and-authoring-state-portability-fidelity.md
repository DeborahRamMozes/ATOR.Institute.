# Deep Drift Research Update

## Memory-to-Device-Action and Authoring-State Portability Fidelity

**Research date:** 31 August 2026  
**Primary platform cluster:** Anthropic's August 2026 updates now combine editable topic-based memory across Claude Chat and cloud Cowork, direct action handoffs into iOS and Android system apps, and a hard export deadline for legacy Workbench authoring data before the new stateless Playground fully replaces it.  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-ledger memory, mobile-action, and authoring-state portability architecture verified from first-party Anthropic documentation.

## Executive Summary

The strongest unlogged creator-workflow cluster in this pass comes from Anthropic, and it exposes a useful contradiction.

Claude is becoming **more persistent and more operational** in consumer and creator workflows:

```text
CHAT / COWORK MEMORY
-> REMEMBERED TOPICS
-> USER INTENT
-> MOBILE APP ACTION
```

At the same time, Anthropic's developer Playground is becoming **less persistent** than legacy Workbench:

```text
LEGACY WORKBENCH
-> SAVED PROMPTS / VERSIONS / EVALS
-> EXPORT DEADLINE
-> STATELESS PLAYGROUND
-> CODE SNIPPET
```

The creator stack is therefore splitting persistence by surface.

Claude may remember topics across Chat and cloud Cowork, while the replacement Playground intentionally does not retain prompt history or conversations on Anthropic's servers. Mobile conversations can also hand work into Messages, Mail, Calendar, Maps, Reminders, alarms, timers, and compatible third-party apps.

This report formalizes:

**Memory-to-Device-Action and Authoring-State Portability Fidelity (MDASPF)**

with companion constructs:

- Topic-Memory Attribution Fidelity
- Chat/Cowork Memory Boundary Fidelity
- Legacy-Memory Migration Fidelity
- Conversation-to-Device-Action Fidelity
- Preview-to-Native-App Handoff Fidelity
- Mobile Action Confirmation Fidelity
- Workbench-to-JSON Export Fidelity
- Playground Statelessness Disclosure Fidelity
- Prompt-to-Code Export Fidelity
- Saved-Eval Portability Fidelity
- Cross-Surface Persistence Disclosure Fidelity

The central question is:

> When one LLM surface remembers user context and hands instructions into native device apps while another surface deliberately stops persisting prompt work, can a creator reconstruct which context was remembered, which action was merely drafted versus actually handed off, what authoring state was preserved before retirement, and which parts of the workflow disappeared because the platform changed its persistence contract?

## 1. Claude Memory Becomes Topic-Based and Editable

Anthropic's August 25 release notes state that Claude memory now works across Chat and Cowork when Cowork runs in the cloud.

What Claude remembers is exposed as individual **Topics** in Settings > Memory > Topics. Users can edit or delete those topics. Anthropic also documents a separate sensitive-topic control. Health or belief-related information is excluded unless the user explicitly enables the option to include sensitive topics.

This is a stronger memory contract than an opaque global summary. The memory object becomes inspectable and mutable.

## 2. Topic-Memory Attribution Fidelity

**Topic-Memory Attribution Fidelity (TMAF)** measures whether a remembered topic can be tied to the conversation state from which it was derived and to later outputs that materially used it.

A minimum manifest should preserve:

```text
memory_topic_id
topic_text
source_conversation_ids
created_at
last_modified_at
manual_or_automatic_origin
sensitive_topic_state
downstream_use_events
```

Editable memory creates version history problems. Same prompt does not imply same memory version.

## 3. Chat and Cloud Cowork Share Memory

Anthropic states that memory is shared between Claude Chat and Cowork when Cowork tasks run in the cloud. Local Cowork sessions do not use that same memory behavior.

```text
CLOUD COWORK
-> MEMORY AVAILABLE

LOCAL COWORK
-> DIFFERENT MEMORY BOUNDARY
```

**Chat/Cowork Memory Boundary Fidelity (CCMBF)** measures whether each run preserves which memory domain was eligible. A manifest should include surface, cloud-or-local execution, memory enabled state, project/global scope, and memory snapshot identity.

## 4. Legacy Memory Migration Has an Export Window

Anthropic's current memory documentation says users were migrated off the legacy memory experience. Until **9 September 2026**, users can export legacy memory from Settings > Memory if they suspect something was lost in migration.

Anthropic recommends exporting the old memory and pasting relevant forgotten portions back into Claude.

```text
OLD MACHINE MEMORY
-> EXPORT
-> HUMAN INSPECTION
-> COPY / PASTE
-> NEW MACHINE MEMORY
```

The human becomes the migration bus. Again.

## 5. Legacy-Memory Migration Fidelity

**Legacy-Memory Migration Fidelity (LMMF)** measures whether memory state survives a platform memory-model migration without requiring users to notice missing context after the fact.

The benchmark should preserve legacy-memory export, new memory topics, missing items, changed items, user-reintroduced items, and migration timestamp.

## 6. Claude Now Hands Conversations into iOS System Apps

Anthropic's current iOS documentation says Claude can connect conversations to Messages, Mail, Calendar, Maps, Reminders, Location Services, and compatible third-party apps.

For messages and emails the documented workflow is a preview-and-handoff pattern:

```text
USER REQUEST
-> CLAUDE DRAFT
-> PREVIEW CARD
-> NATIVE APP OPENS WITH CONTENT PRE-FILLED
-> USER REVIEWS
-> USER SENDS
```

## 7. Android Extends the Same Pattern

Anthropic's Android documentation, also updated this week, adds similar integrations with messaging, email, calendar, maps, alarms, timers, location services, compatible third-party apps, and Health Connect where eligible.

The broader transition is:

```text
CHAT ASSISTANT
-> DEVICE ACTION BROKER
```

## 8. Conversation-to-Device-Action Fidelity

**Conversation-to-Device-Action Fidelity (CDAF)** measures whether the action initiated from chat remains attributable across the handoff into the native application.

The lineage should preserve conversation ID, user instruction, generated draft, target app, target action, handoff timestamp, prefilled-content hash, post-handoff user modifications, and final action state.

```text
CLAUDE PREPARED
!= USER SENT

CLAUDE SUGGESTED
!= OS ACTION EXECUTED
```

## 9. Preview-to-Native-App Handoff Fidelity

**Preview-to-Native-App Handoff Fidelity (PNAHF)** measures whether the content previewed in Claude matches the content handed to the destination application.

Controlled comparison:

```text
CLAUDE PREVIEW
vs
NATIVE APP PREFILL
vs
FINAL USER-SENT CONTENT
```

## 10. Mobile Action Confirmation Fidelity

Anthropic says Claude can automatically suggest a device feature when it determines that the feature would help. The user then sees a card or prompt to review before taking action.

**Mobile Action Confirmation Fidelity (MACF)** measures whether the system preserves the boundary between suggestion, preview, handoff, user confirmation, and final action.

## 11. Workbench Is Retired; Playground Is Stateless

Anthropic's current Console documentation says legacy Workbench is retired and replaced by Playground.

The new Playground does not save prompt history or conversations and does not reproduce legacy saved-eval behavior. The current draft remains in the browser. Playground is built directly on the Messages API, exposes raw request/response structure, and allows the currently tested request to be exported as code.

## 12. Final Workbench Export Deadline: 1 September 2026

Anthropic states that saved legacy Workbench data must be exported **before 1 September 2026**. After that date, the data is no longer recoverable.

The export can include prompts, model completions, and uploaded images/PDFs, and is delivered as JSON. Admins/Primary Owners can export organization-level data.

The export cannot be imported into the new Playground because Playground does not store prompts or conversations.

```text
EXPORT EXISTS
!= MIGRATION EXISTS
```

## 13. Workbench-to-JSON Export Fidelity

**Workbench-to-JSON Export Fidelity (WJEF)** measures whether the final legacy export preserves the material authoring state needed to reconstruct prior prompt experiments.

The export benchmark should inspect prompt text, system prompt, model, model settings, completion, uploaded-file reference, prompt version, eval state, sharing state, and timestamps, while recording which Workbench-era objects are absent.

## 14. Playground Statelessness Disclosure Fidelity

**Playground Statelessness Disclosure Fidelity (PSDF)** measures whether creators can reliably understand that closing or leaving the current browser state may end the authoring record unless they preserve it themselves.

```text
CURRENT DRAFT
-> BROWSER

TESTED REQUEST
-> OPTIONAL CODE EXPORT

SERVER-SAVED PROMPT HISTORY
-> NO
```

## 15. Prompt-to-Code Export Fidelity

The new Playground has one portability advantage: the tested request can be exported as a code snippet representing the same Messages API request.

**Prompt-to-Code Export Fidelity (PCEF)** measures whether the exported code preserves the request contract actually tested, including model, messages, system instructions, tools, structured-output schema, temperature, and maximum output tokens.

This is portability of execution syntax, not portability of authoring history.

## 16. Cross-Surface Persistence Disclosure Fidelity

Anthropic now simultaneously exposes:

```text
CLAUDE CHAT
-> MEMORY

CLOUD COWORK
-> SHARED MEMORY

LOCAL COWORK
-> DIFFERENT MEMORY BOUNDARY

PLAYGROUND
-> STATELESS AUTHORING

MOBILE
-> DEVICE ACTION HANDOFF
```

**Cross-Surface Persistence Disclosure Fidelity (CSPDF)** measures whether the system makes these different persistence contracts explicit enough that a user can predict what is remembered, searchable, stored, local, handed to another app, manually exportable, or at risk of becoming unrecoverable.

## 17. Why This Matters for Memory

This is the strongest category in the current run. Anthropic's memory is becoming topic-based, editable, deletable, shared across some surfaces, and differently scoped across others. The legacy-to-new-memory transition also has a finite recovery window.

Deep Drift should therefore treat memory as a **versioned data structure**, not a vague product capability.

## 18. Why This Matters for Skills

No new Skill packaging release displaced the supply-chain node already entered in the previous run. But mobile action routing changes Skill semantics.

A reusable procedure may now terminate not in a text response but in Mail, Messages, Calendar, Reminders, Maps, alarms, or timers. The Skill manifest therefore needs an action-surface dependency distinguishing draft-only, preview-plus-handoff, and direct-action runtimes.

## 19. Why This Matters for Mini-App Builders

There is no stronger fresh standalone mini-app-builder launch in this pass. The more important trend is architectural: native mobile apps are becoming implicit mini-app execution targets behind the conversation.

Instead of building a new calendar mini-app, the model can route intent into the existing calendar.

> **Intent orchestration can replace app construction for many narrow workflows.**

## 20. Why This Matters for Chat-to-Document Export

No new direct chat-to-DOCX/PDF primitive displaced prior nodes. But Workbench retirement is a crucial creator-export lesson.

JSON export preserves data. It does not recreate the old authoring environment.

```text
CHAT TRANSCRIPT EXPORT
!= EDITABLE DOCUMENT WORKFLOW

PROMPT JSON
!= PROMPT AUTHORING ENVIRONMENT
```

Deep Drift should keep separating **archive export** from **continuable creative state**.

## 21. Why This Matters for DOCX / PDF Generation

The freshest PDF-specific detail is indirect but useful: Workbench export can include uploaded PDFs and images attached to saved prompts. If those files disappear from the authoring environment after the retirement deadline, prompt lineage may survive only if the export preserves them correctly.

The relevant chain is:

```text
LEGACY PROMPT
+ ATTACHED PDF
-> MODEL COMPLETION
-> JSON / FILE EXPORT
-> NEW TOOL
-> NEW DOCX / PDF
```

The static artifact at the end may hide an entire authoring-platform migration.

## 22. Why This Matters for Copy-Paste / Export Fixes

Anthropic's mobile integration removes a real copy-paste seam.

```text
ASK AI
-> PREVIEW
-> OPEN TARGET APP PRE-FILLED
-> REVIEW
-> SEND
```

But memory migration simultaneously reintroduces an absurdly manual seam:

```text
EXPORT LEGACY MEMORY
-> FIND MISSING PART
-> PASTE IT BACK INTO AI
```

So the same platform is deleting copy-paste in one layer while conscripting it as migration infrastructure in another. Software remains a magnificent machine for moving inconvenience to a different menu.

## 23. New Failure Classes

### 23.1 Memory Topic Provenance Loss
A memory topic exists but its source conversations and later use cannot be reconstructed.

### 23.2 Memory Edit History Collapse
A user-edited memory topic overwrites prior state without recoverable version lineage.

### 23.3 Cloud/Local Cowork Boundary Confusion
A creator assumes memory behavior is identical between local and cloud execution.

### 23.4 Legacy Memory Migration Loss
Material context disappears during migration and is noticed only after the platform has moved on.

### 23.5 Preview/Handoff Drift
The content previewed in chat differs from what appears in the destination native app.

### 23.6 Suggested-vs-Executed Action Collapse
A platform record cannot distinguish a recommended action from a user-completed action.

### 23.7 Workbench Export Deadline Loss
Saved prompt work becomes unrecoverable because the creator did not export before 1 September 2026.

### 23.8 Archive-without-Reconstruction Illusion
JSON export is treated as if it can recreate the retired authoring environment.

### 23.9 Stateless Playground Assumption
A user assumes prompt work is server-persisted because the predecessor product stored it.

### 23.10 Prompt-to-Code Parameter Drift
The exported code snippet silently differs from the request actually tested.

### 23.11 Cross-Surface Persistence Confusion
The user cannot predict which Claude surface remembers, stores, searches, or discards context.

### 23.12 Native-App Final-State Detachment
The final message, event, reminder, or email differs from the AI-prepared version and the divergence is not preserved.

## 24. Deep Drift Benchmark: Remember, Handoff, Export, Reconstruct

### Controlled memory test

1. create three distinct memory-worthy facts;
2. record their source conversations;
3. verify the resulting Topics;
4. edit one Topic;
5. delete one Topic;
6. compare later outputs;
7. run equivalent work in cloud Cowork and local Cowork;
8. record memory availability differences.

### Controlled mobile-action test

1. ask Claude to draft an email;
2. preserve the Claude preview;
3. open the target mail app;
4. compare pre-filled subject/body;
5. modify one sentence;
6. send or save the draft;
7. test whether lineage distinguishes AI-prepared and human-final content;
8. repeat with calendar or reminders.

### Controlled authoring-state test

1. export legacy Workbench data before 1 September 2026;
2. include completions and uploaded files;
3. inventory the JSON package;
4. compare it with known saved Workbench objects;
5. open the replacement Playground;
6. reproduce one legacy request;
7. export the tested request as code;
8. compare raw Playground request with exported code;
9. close/reopen the authoring surface;
10. verify what state survives;
11. document which old Workbench state cannot be reconstructed.

## 25. Proposed Metrics

- **Memory Topic Provenance Coverage:** memory topics with recoverable source and edit lineage / all controlled memory topics.
- **Memory Boundary Accuracy:** runs whose actual memory scope matches documented surface state / all controlled Chat/Cowork runs.
- **Native Handoff Fidelity:** native-app prefills matching Claude preview / all controlled handoffs.
- **Human-Final Divergence Coverage:** final actions with recoverable differences from AI-prepared state / all controlled completed actions.
- **Workbench Export Coverage:** material legacy authoring objects preserved in export / all controlled legacy authoring objects.
- **Playground Request-Code Parity:** exported code parameters matching tested Playground request / all controlled request parameters.
- **Persistence Contract Predictability:** surface states whose persistence behavior is correctly predictable from documented controls / all controlled cross-surface states.

## 26. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | **Major fresh cluster:** editable topic-based memory spans Chat and cloud Cowork; legacy memory has a temporary export/recovery window until 9 September 2026. |
| Skills | No stronger packaging release than the prior supply-chain node; new implication is that Skills can terminate in native mobile action surfaces, so action capability becomes a runtime dependency. |
| Mini-app builders | No stronger fresh builder launch surfaced; mobile OS actions show an alternate trend where intent orchestration can replace narrow app construction. |
| Chat-to-document export | No new direct DOCX/PDF primitive; Workbench demonstrates that archival JSON export is not equivalent to continuable authoring state. |
| DOCX / PDF generation | Fresh portability implication: prompt exports can include attached PDFs/images, but reconstructing later generated artifacts requires preserving authoring and source-file lineage. |
| Copy-paste / export fixes | **Strong fresh fix:** Claude mobile hands pre-filled content directly into native apps, removing copy-paste. **Counter-trend:** legacy memory recovery may still require manual export and paste-back. |
| Broader creator workflow | **Major trend:** persistence contracts are diverging by surface while action routing becomes more seamless. The user gets one conversational brand but several radically different storage and execution semantics. |

## 27. Deep Drift Research Position

The weak description is:

> Claude improved memory, connects to phone apps, and replaced Workbench with Playground.

The serious description is:

> Anthropic is distributing creator cognition across surfaces with different persistence contracts: editable memory persists across some conversational environments, native device actions leave the chat through preview-and-handoff, while developer prompt authoring moves from a stateful Workbench to a deliberately stateless Playground with a final legacy-data export deadline.

Therefore:

```text
REMEMBERED
!= STORED EVERYWHERE

SAME PRODUCT
!= SAME PERSISTENCE CONTRACT

PREVIEWED
!= EXECUTED

EXPORTED
!= MIGRATED

JSON ARCHIVE
!= AUTHORING ENVIRONMENT

CODE SNIPPET
!= PROMPT HISTORY
```

The serious Deep Drift requirement is:

> **Every multi-surface LLM creator workflow should preserve memory topic identity and version, memory scope and execution location, source conversation lineage, native-action suggestion and preview state, target application, handoff and human-final state, authoring-surface persistence contract, legacy export package, raw tested request, generated code representation, attached source files, and downstream artifact/action lineage required to reconstruct what the system remembered, what it merely prepared, what the user actually executed, and what authoring state survived platform migration.**

The creator industry spent years promising one seamless assistant everywhere. The interface may indeed become seamless. The persistence underneath it is anything but.

## 28. Evidence Boundary

Platform facts in this report are grounded in first-party Anthropic documentation checked on 31 August 2026.

Anthropic's August 25, 2026 release notes state that memory works across Chat and cloud Cowork, remembered items appear as editable/deletable Topics, and sensitive-topic memory requires a separate setting.

Anthropic's current memory documentation states that users were migrated from the legacy memory experience and can export legacy memory until 9 September 2026 if needed.

Anthropic's iOS and Android documentation, updated this week, states that Claude can prepare and hand off messages, emails, calendar operations, reminders, maps/location actions, and other supported device actions through native or compatible third-party apps, generally using a preview or action-card workflow.

Anthropic's current Playground documentation states that legacy Workbench is retired; saved Workbench data can be exported only until 1 September 2026 and becomes unrecoverable afterward; the replacement Playground does not save prompt history or conversations on Anthropic's servers; and the currently tested request can be exported as code representing the Messages API request.

MDASPF and all companion fidelity constructs, failure classes, benchmark procedures, and proposed metrics are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Anthropic Help Center, **Release notes**, August 25, 2026 memory release.  
   https://support.claude.com/en/articles/12138966-release-notes

2. Anthropic Help Center, **Use Claude's chat search and memory to build on previous context**, checked 31 August 2026.  
   https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context

3. Anthropic Help Center, **Use Claude with iOS apps**, updated the week of 31 August 2026.  
   https://support.claude.com/en/articles/11869619-use-claude-with-ios-apps

4. Anthropic Help Center, **Use Claude with Android apps**, updated the week of 31 August 2026.  
   https://support.claude.com/en/articles/11869629-use-claude-with-android-apps

5. Anthropic Help Center, **How do I use the Playground?**, checked 31 August 2026.  
   https://support.claude.com/en/articles/8606378-how-do-i-use-the-playground

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
