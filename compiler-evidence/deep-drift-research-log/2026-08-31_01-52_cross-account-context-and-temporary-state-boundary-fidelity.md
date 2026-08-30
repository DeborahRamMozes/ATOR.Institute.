# Deep Drift Research Update

## Cross-Account Context and Temporary-State Boundary Fidelity

**Research date:** 31 August 2026  
**Primary platform deltas:** ChatGPT multi-Google-account connections (28 August 2026) and personalized Temporary Chat controls (27 August 2026)  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log memory, connector-identity, and persistence-boundary architecture verified from first-party OpenAI documentation.

## Executive Summary

Two late-August ChatGPT updates create a new creator-workflow problem that is more consequential together than separately.

On 28 August 2026, OpenAI added support for connecting **multiple Google accounts** for Gmail, Google Calendar, and Google Contacts plugins in one ChatGPT account. Personal and work accounts can therefore be queried together inside the same conversation.

On 27 August 2026, OpenAI added new controls for **Temporary Chat**. A Temporary Chat can now optionally use memories, custom instructions, and plugins from the user's regular ChatGPT settings. A personalized Temporary Chat still does not create new memories and stays out of chat history unless the user explicitly saves it. If saved, it becomes a regular chat and then follows ordinary personalization and model-improvement settings.

Together, these features create a new architecture:

```text
ACCOUNT A: PERSONAL GOOGLE
+
ACCOUNT B: WORK GOOGLE
+
CHATGPT SAVED MEMORY / CUSTOM INSTRUCTIONS / PLUGINS
-> ONE CONVERSATION
-> TEMPORARY OR REGULAR PERSISTENCE MODE
-> OUTPUT / ACTION / ARTIFACT
```

The system can now **expand context horizontally across account identities while independently controlling persistence vertically at the conversation boundary**.

For Deep Drift Research, this creates a new benchmark family:

**Cross-Account Context and Temporary-State Boundary Fidelity (CACTBF)**

with companion constructs:

- Account-Origin Attribution Fidelity
- Cross-Account Context Separation Fidelity
- Temporary-Personalization Boundary Fidelity
- Temporary-to-Regular Conversion Fidelity
- Memory-Use-without-Memory-Creation Fidelity
- Plugin-Use Persistence Fidelity
- Connector-Identity Selection Fidelity
- Mixed-Account Artifact Provenance Fidelity
- Temporary-Chat Export and Survival Fidelity

The central research question is:

> When one conversation can read context from multiple external identities and optionally use existing personal memory while deliberately not creating new memory or history, can a later reviewer still reconstruct which account supplied which fact, which personalization layer was active, whether the session was temporary or saved, and which resulting artifact or action inherited that mixed context?

## 1. What Changed: Multiple Google Accounts

OpenAI's 28 August 2026 ChatGPT release notes state that users can now connect multiple accounts for:

```text
GMAIL
GOOGLE CALENDAR
GOOGLE CONTACTS
```

to ChatGPT.

The stated use case is straightforward:

```text
PERSONAL GOOGLE ACCOUNT
+
WORK GOOGLE ACCOUNT
-> SAME CHATGPT CONVERSATION
```

A user can ask ChatGPT to inspect multiple calendars together or search across connected inboxes.

The feature is documented as globally available on supported Plus, Pro, Business, and Enterprise plans across web, desktop, iOS, and Android.

## 2. Why Multiple Accounts Matter for Deep Drift

Until now, many connector benchmarks could assume:

```text
ONE CONNECTOR TYPE
-> ONE ACTIVE IDENTITY
```

That assumption is no longer safe.

The architecture now needs to model:

```text
CONNECTOR TYPE
-> ACCOUNT INSTANCE 1
-> ACCOUNT INSTANCE 2
-> ACCOUNT INSTANCE N
```

Therefore:

```text
GMAIL SOURCE
!=
ONE EMAIL IDENTITY

GOOGLE CALENDAR
!=
ONE CALENDAR AUTHORITY

CONTACT FOUND
!=
CONTACT FOUND IN ONE IDENTITY SPACE
```

The same connected-app category can now contain multiple authority domains.

## 3. Account-Origin Attribution Fidelity

### Definition

**Account-Origin Attribution Fidelity** measures whether every retrieved or action-relevant object remains attributable to the exact connected account that supplied it.

A minimum retrieval manifest should preserve:

```text
chat_id
connector_type
connector_account_id
account_label
external_object_id
source_timestamp
retrieval_timestamp
query_or_tool_event
```

For a mixed-calendar result, a reviewer should be able to identify:

```text
EVENT A -> PERSONAL ACCOUNT
EVENT B -> WORK ACCOUNT
```

without guessing from event titles.

## 4. Cross-Account Context Separation Fidelity

### Definition

**Cross-Account Context Separation Fidelity** measures whether the model preserves the distinction between facts that originate in different connected account identities.

Controlled test:

```text
PERSONAL GMAIL:
"Workshop dinner Friday at 7"

WORK GMAIL:
"Client review Friday at 7"
```

Question:

```text
"What do I have Friday evening?"
```

Expected system behavior is not merely to mention both events.

It should preserve identity provenance:

```text
PERSONAL
-> WORKSHOP DINNER

WORK
-> CLIENT REVIEW
```

The failure mode is **context flattening**, where the model combines multiple identity domains into one unlabelled personal narrative.

## 5. Connector-Identity Selection Fidelity

When multiple accounts of the same provider are connected, the system may need to choose one or several account instances.

### Definition

**Connector-Identity Selection Fidelity** measures whether the model selects the intended account scope and exposes that selection clearly enough for later reconstruction.

The key distinction is:

```text
APP SELECTED
!=
ACCOUNT SELECTED
```

This becomes especially important for any future write action, where selecting the wrong Gmail or Calendar identity could mutate the wrong external system.

## 6. What Changed: Personalized Temporary Chat

OpenAI's 27 August 2026 release notes document new Temporary Chat controls.

A Temporary Chat can now begin in one of two modes:

```text
NON-PERSONALIZED
or
PERSONALIZED
```

A personalized Temporary Chat may use:

- saved memories;
- custom instructions;
- plugins.

But it does **not** create new memories.

It also remains outside normal chat history unless the user explicitly saves it.

Personalization can be chosen only when starting the Temporary Chat and cannot be changed after the conversation begins.

## 7. Temporary-Personalization Boundary Fidelity

### Definition

**Temporary-Personalization Boundary Fidelity** measures whether the system preserves the exact personalization mode that applied during a Temporary Chat.

A minimum manifest should preserve:

```text
temporary_chat_id
temporary_mode
personalization_enabled
memory_read_enabled
memory_write_enabled
custom_instructions_enabled
plugins_enabled
created_at
saved_to_history
saved_at
```

This is crucial because:

```text
MEMORY USED
!=
MEMORY CREATED
```

The session can inherit remembered context while still declining to add new remembered context.

## 8. Memory-Use-without-Memory-Creation Fidelity

This is the strongest memory-specific finding in this pass.

### Definition

**Memory-Use-without-Memory-Creation Fidelity** measures whether an ephemeral session can consume prior memory without silently adding new memory.

The architecture is:

```text
EXISTING MEMORY
-> TEMPORARY CHAT
-> RESPONSE

TEMPORARY CHAT
-X-> NEW MEMORY
```

A controlled benchmark should introduce a new preference inside a personalized Temporary Chat and verify that it is not added to persistent memory unless the conversation is later saved and ordinary memory rules subsequently permit it.

This is a rare clean separation between **memory read** and **memory write**.

## 9. Temporary-to-Regular Conversion Fidelity

OpenAI states that a Temporary Chat can be saved.

When saved:

```text
TEMPORARY CHAT
-> REGULAR CHAT
```

It then follows the user's ordinary account-level personalization settings and model-improvement preferences.

### Definition

**Temporary-to-Regular Conversion Fidelity** measures whether the transition from ephemeral to durable state preserves the exact moment when persistence semantics change.

The manifest should preserve:

```text
temporary_creation_time
temporary_personalization_mode
save_event_time
regular_chat_id
post-save_memory_policy
post-save_model_improvement_policy
```

Without this transition record, the same conversation can appear historically homogeneous even though its first phase and later phase followed different persistence rules.

## 10. Plugin-Use Persistence Fidelity

A personalized Temporary Chat can use plugins even though the conversation itself remains outside history unless saved.

### Definition

**Plugin-Use Persistence Fidelity** measures whether plugin use inside an ephemeral session remains attributable when the conversation itself is not retained as a regular chat.

The important distinction is:

```text
TEMPORARY CONVERSATION
+
DURABLE EXTERNAL ACTION
```

An external app can retain the effect of an action even if the originating conversation was temporary.

Deep Drift should therefore never infer:

```text
TEMPORARY CHAT
=
TEMPORARY CONSEQUENCE
```

Those are different persistence regimes.

## 11. Mixed-Account Artifact Provenance Fidelity

The combined late-August architecture creates a particularly interesting creator path:

```text
PERSONAL GMAIL
+
WORK CALENDAR
+
SAVED MEMORY
+
CUSTOM INSTRUCTIONS
+
PLUGIN
-> PERSONALIZED TEMPORARY CHAT
-> REPORT / DRAFT / ACTION
```

### Definition

**Mixed-Account Artifact Provenance Fidelity** measures whether a resulting artifact can identify the external identity domains and personalization layers that materially shaped it.

For a generated document, the provenance manifest should distinguish:

```text
SOURCE ACCOUNT A
SOURCE ACCOUNT B
MEMORY CONTEXT
CUSTOM INSTRUCTION CONTEXT
PLUGIN / TOOL OUTPUT
TEMPORARY-CHAT MODE
```

A polished DOCX or PDF cannot reveal this mixture by inspection.

## 12. New Failure Classes

### 12.1 Cross-Account Source Flattening

Personal and work information is merged into one answer without clear origin labels.

### 12.2 Account-Instance Mis-Selection

The correct connector type is used but the wrong connected account instance supplies or receives the data.

### 12.3 Memory Read/Write Confusion

A user assumes that because memory was used in Temporary Chat, the Temporary Chat also updates memory.

### 12.4 Temporary-Chat Consequence Illusion

A user assumes the effects of an external action disappear because the originating conversation was temporary.

### 12.5 Save-Transition Ambiguity

A saved Temporary Chat becomes regular history, but the change in persistence semantics is not reconstructable later.

### 12.6 Mixed-Identity Artifact Collapse

A generated report combines work and personal connected data but carries no account-level provenance.

### 12.7 Custom-Instruction Invisible Influence

A Temporary Chat uses standing custom instructions that materially shape the output, but the output carries no record of that instruction state.

### 12.8 Plugin-State Detachment

A plugin contributes data or action results to a Temporary Chat, but the ephemeral chat disappears while the external result remains.

### 12.9 Same-Provider Authority Confusion

Multiple Gmail or Calendar accounts are treated as one authority domain merely because they share a provider.

### 12.10 Cross-Surface Account-State Drift

Different ChatGPT surfaces expose the same connected accounts but may differ in active session state, cached context, or user awareness.

## 13. Deep Drift Benchmark: Multi-Account Temporary Round Trip

### Controlled account setup

Use two clearly separated account identities:

```text
ACCOUNT A
-> PERSONAL

ACCOUNT B
-> WORK
```

Prepare controlled objects:

```text
PERSONAL CALENDAR EVENT
WORK CALENDAR EVENT
PERSONAL EMAIL
WORK EMAIL
```

### Controlled memory

Save one harmless existing preference before the experiment:

```text
"Prefer concise weekly research summaries."
```

### Test sequence

1. verify both Google accounts are connected;
2. create a personalized Temporary Chat;
3. ask for a combined calendar summary;
4. preserve account attribution for each retrieved event;
5. ask the model to use the known saved preference;
6. introduce a new preference only inside the Temporary Chat;
7. verify the new preference is not written to memory;
8. invoke a plugin or connected-app action with a low-risk controlled object;
9. inspect whether the external effect persists;
10. generate a small report from information drawn from both account identities;
11. record account-level provenance;
12. save the Temporary Chat;
13. preserve the save/conversion event;
14. verify the conversation appears in normal history;
15. repeat one prompt after conversion;
16. compare personalization and memory behavior before and after save.

## 14. Proposed Metrics

### Account-Origin Attribution Coverage

```text
AOAC =
retrieved objects attributable to exact connected account
/
all controlled retrieved objects
```

### Cross-Account Separation Accuracy

```text
CASA =
mixed-account facts correctly labeled by identity domain
/
all controlled mixed-account facts
```

### Temporary Memory Write Suppression

```text
TMWS =
new temporary-chat facts not written to persistent memory
/
all controlled temporary-only facts
```

Expected: 1.0 under documented behavior.

### Temporary-to-Regular Transition Traceability

```text
TRTT =
saved Temporary Chats with reconstructable persistence transition
/
all controlled saved Temporary Chats
```

### Mixed-Account Artifact Provenance Coverage

```text
MAAPC =
generated artifacts identifying all material account origins
/
all controlled mixed-account artifacts
```

### External Consequence Traceability

```text
ECT =
external actions traceable to their temporary-chat origin
/
all controlled plugin/app actions from Temporary Chat
```

## 15. Why This Matters for Memory

This update gives Deep Drift a cleaner memory taxonomy:

```text
MEMORY READ
MEMORY WRITE
CHAT HISTORY
TEMPORARY SESSION
SAVED SESSION
```

They are no longer safely treated as one persistence switch.

A Temporary Chat may:

```text
READ MEMORY
USE PLUGINS
USE CUSTOM INSTRUCTIONS
```

while still:

```text
NOT WRITING NEW MEMORY
NOT ENTERING HISTORY
```

unless saved.

That is a materially more sophisticated persistence contract.

## 16. Why This Matters for Skills and Plugins

Plugins can now participate in a session whose conversational trace may remain ephemeral.

This matters because procedural and external state can outlive the conversation.

The effective chain becomes:

```text
TEMPORARY CHAT
+ EXISTING MEMORY
+ PLUGIN
-> EXTERNAL RESULT
```

A serious Skill/plugin benchmark must therefore separate:

```text
conversation persistence
procedure persistence
external-object persistence
```

## 17. Why This Matters for Mini-App Builders

Multiple connected account identities create a new mini-app design problem.

A conversational mini-app can operate over:

```text
PERSONAL DATA SPACE
WORK DATA SPACE
SHARED UI
```

without requiring separate application windows.

That is powerful.

It also makes **identity labeling** part of interface design.

A mini-app that combines multiple accounts without visible account provenance is not merely confusing. It is an authority-boundary defect.

## 18. Why This Matters for Chat-to-Document Export

A report created from a Temporary Chat may be durable even when the chat is not.

The creator chain can be:

```text
EPHEMERAL CHAT
-> DURABLE DOCUMENT
```

or:

```text
EPHEMERAL CHAT
-> DURABLE EXTERNAL ACTION
```

Therefore chat persistence and artifact persistence must be benchmarked independently.

A DOCX or PDF generated from a mixed-account Temporary Chat should ideally preserve:

```text
source-account identities
temporary-chat mode
memory-read state
plugin/tool state
generation timestamp
```

## 19. Why This Matters for DOCX / PDF Generation

No newer direct DOCX/PDF primitive displaced the file-generation changes already logged.

The important new finding is upstream provenance.

A perfectly rendered document can now depend on:

```text
MULTIPLE GOOGLE IDENTITIES
+
SAVED MEMORY
+
CUSTOM INSTRUCTIONS
+
TEMPORARY CHAT MODE
```

None of these states are visible from the PDF itself.

Deep Drift should therefore extend document manifests beyond model and prompt version.

## 20. Why This Matters for Copy-Paste and Export Fixes

Multiple account connections eliminate another human ritual:

```text
OPEN PERSONAL CALENDAR
-> COPY EVENT
-> OPEN WORK CALENDAR
-> COPY EVENT
-> PASTE BOTH INTO CHAT
```

becomes:

```text
CHATGPT
-> QUERY BOTH CONNECTED ACCOUNTS
```

This is genuine workflow compression.

But manual separation used to provide one accidental benefit: the human knew where each item came from because they copied it personally.

When the machine removes that seam, account provenance must become explicit.

The recurring Deep Drift rule remains:

> Every eliminated manual seam should be replaced by a machine-readable provenance seam.

## 21. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | **Major new-to-log boundary:** personalized Temporary Chat can read existing memory but does not create new memories; saving converts the chat into normal persistence semantics. |
| Skills / Plugins | Material implication: plugins can act inside an ephemeral conversational session, so procedure/external-state persistence can outlive chat persistence. |
| Mini-app builders | Material identity-layer change: one conversational interface can operate over multiple personal/work Google account instances. |
| Chat-to-document export | New provenance distinction: durable artifacts can originate from Temporary Chats whose conversation state may otherwise remain ephemeral. |
| DOCX / PDF generation | No new direct file primitive surfaced; upstream account identity and temporary-state provenance now matter more. |
| Copy-paste/export fixes | **Strong workflow reduction:** multiple personal/work Gmail, Calendar, and Contacts identities can be queried in one conversation instead of manually copied across apps. |
| Broader creator workflow | **Major trend:** context scope and persistence scope are becoming independently configurable dimensions rather than one monolithic chat state. |

## 22. Cross-Platform Check

### OpenAI

The strongest unlogged delta in this pass is the combination of:

1. multiple Google account connections inside one ChatGPT account, released 28 August 2026;
2. personalized Temporary Chat with memory/plugin/custom-instruction read access but no new memory creation, released 27 August 2026.

These are more significant together because they decouple **identity scope** from **persistence scope**.

### Anthropic

No newer category-displacing memory, Skill, Cowork, Slack-agent, or export release surfaced after the late-August changes already entered into the Deep Drift ledger.

### Google

No newer category-displacing creator release surfaced beyond Ask Gemini in Chat, Sheets Canvas, and interactive simulations already logged.

### Microsoft

No newer creator-workflow release displaced the Copilot file-governance and native artifact changes already logged.

### Databricks

No release newer than the 27 August Genie Agent Mode API / scheduled-report cluster displaced the CARPF entry already logged.

### Notion

No newer creator-governance release displaced the 28 August Suggested Edits change already represented in Deep Drift.

## 23. Deep Drift Research Position

The weak description is:

> ChatGPT can connect more than one Google account, and Temporary Chat has more controls.

The serious description is:

> ChatGPT can now expand one conversational context across multiple external account identities while separately allowing a session to read existing persistent memory, plugins, and custom instructions without itself becoming persistent or creating new memory unless explicitly converted into a regular chat.

Therefore:

```text
CONNECTED APP
!= ONE IDENTITY

MEMORY READ
!= MEMORY WRITE

TEMPORARY
!= NON-PERSONALIZED

TEMPORARY CHAT
!= TEMPORARY CONSEQUENCE

SAVE CHAT
!= NO STATE TRANSITION

DURABLE ARTIFACT
!= DURABLE ORIGIN CHAT
```

The serious Deep Drift requirement is:

> **Every mixed-identity LLM workflow should preserve connected-account origin, account-selection events, personalization mode, memory-read/write state, plugin state, Temporary Chat status, save/conversion events, and downstream artifact or external-action lineage required to reconstruct how context crossed identity and persistence boundaries.**

The industry has finally learned to separate "what the AI may know right now" from "what the system should remember afterward." Good. That distinction only took the entire history of computing to rediscover inside a chat window.

## 24. Evidence Boundary

Platform facts in this report are grounded in OpenAI's first-party ChatGPT Release Notes checked on 31 August 2026.

OpenAI states that, beginning 28 August 2026, supported users can connect multiple Google accounts for Gmail, Google Calendar, and Google Contacts plugins and use personal and work accounts within the same conversation.

OpenAI also states that, beginning 27 August 2026, Temporary Chat can optionally use saved memories, custom instructions, and plugins; personalized Temporary Chats do not create new memories and remain outside chat history unless saved; personalization must be selected when the Temporary Chat begins; and saving converts the Temporary Chat into a regular chat that follows account-level personalization and model-improvement preferences.

CACTBF and all companion constructs, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Source

1. OpenAI Help Center, **ChatGPT Release Notes**, 27-28 August 2026 entries, checked 31 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**