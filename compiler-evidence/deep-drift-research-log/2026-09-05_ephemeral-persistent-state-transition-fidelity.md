# Deep Drift Research Update - EPSTF

## Ephemeral-Persistent State Transition Fidelity

**Research date:** 5 September 2026  
**Primary fresh delta:** OpenAI's August 27, 2026 Temporary Chat update separates ephemerality from personalization. A Temporary Chat can now be personalized with existing memory, custom instructions, and plugins while still refusing to create or update memory. The same Temporary Chat can later be saved, at which point it becomes a regular chat and begins following normal history, personalization, and model-improvement settings.

## Executive finding

"Temporary" no longer means "context-free."

A conversation can be ephemeral in storage behavior while still reading persistent context.

```text
TEMPORARY CHAT
   |
   +--> NON-PERSONALIZED
   |      no memory read
   |      no custom instructions
   |      no plugins
   |      no memory write
   |
   +--> PERSONALIZED
          memory read
          custom instructions
          plugins available
          no memory write
```

Then a second transition can occur:

```text
TEMPORARY
-> SAVE
-> REGULAR CHAT
-> HISTORY PERSISTENCE
-> FUTURE MEMORY REFERENCE POSSIBLE
-> NORMAL MODEL-IMPROVEMENT SETTINGS APPLY
```

Therefore:

```text
EPHEMERAL
!= UNPERSONALIZED

MEMORY READ
!= MEMORY WRITE

TEMPORARY
!= CONTEXT-ISOLATED

SAVED LATER
!= SAME DATA-GOVERNANCE STATE

NO NEW MEMORY DURING SESSION
!= SESSION CAN NEVER AFFECT FUTURE MEMORY
```

The new provenance object is the **conversation-state transition**.

## Minimum state model

```text
conversation_id
start_time
initial_chat_class
personalization_mode_at_start
memory_read_enabled
memory_write_enabled
custom_instructions_enabled
plugins_enabled
workspace_restrictions
third_party_action_state
history_visibility_state
temporary_retention_window
save_event
save_time
post_save_chat_class
post_save_history_state
post_save_memory_eligibility
post_save_model_improvement_state
later_reference_event
later_memory_creation_or_update
```

## 1. Ephemerality and personalization are orthogonal

OpenAI now documents two Temporary Chat modes: personalized and non-personalized. A personalized Temporary Chat may use existing memory, custom instructions, and plugins, but it does not create or update memory while it remains temporary.

This creates a read/write asymmetry:

```text
PERSISTENT CONTEXT
-> READ INTO TEMPORARY CHAT

TEMPORARY CHAT
-X-> WRITE BACK TO MEMORY
```

For Deep Drift, memory availability and memory mutability must be logged separately.

## 2. Memory read and memory write become independent variables

A benchmark that records only `memory_enabled=true` is now inadequate. At minimum:

```text
memory_read = yes/no
memory_write = yes/no
```

A temporary personalized chat is `READ=YES / WRITE=NO`. A regular personalized chat may be `READ=YES / WRITE=YES`. A non-personalized Temporary Chat is `READ=NO / WRITE=NO`.

## 3. Personalization mode is fixed at conversation start

OpenAI states that the personalized/non-personalized choice is made before the Temporary Chat starts and cannot be changed afterward. Personalization mode is therefore an initial-condition variable for any comparative experiment.

## 4. Saving a Temporary Chat is a state transition

Saving converts the Temporary Chat into a regular chat. It then appears in history, follows account-level personalization settings and model-improvement preferences, and may later be referenced for personalization if memory is enabled.

```text
SAVE EVENT
!= PASSIVE STORAGE

SAVE EVENT
= POLICY / MEMORY / HISTORY TRANSITION
```

For Deep Drift, save must be modeled as a causal event.

## 5. Deferred memory eligibility

While temporary, the conversation cannot create or update memory. After saving, it can become part of normal history and may contribute to future personalization.

```text
T0: conversation cannot write memory
T1: user saves conversation
T2: conversation can become future personalization source
```

A session can therefore be memory-inert during execution yet memory-relevant later.

## 6. Retention and user-visible history are separate states

OpenAI says unsaved Temporary Chats do not appear in history, but a copy may still be retained for up to 30 days for safety purposes.

```text
NOT IN USER HISTORY
!= NOT RETAINED

TEMPORARY
!= IMMEDIATE DELETION
```

Deep Drift should separate user-visible persistence, platform retention, memory persistence, and training/model-improvement state.

## 7. Workspace policy can override per-chat personalization

Account-level and workspace restrictions take priority over an individual Temporary Chat personalization choice. Where observable, archive both requested personalization state and effective personalization state.

## 8. Plugins create another persistence boundary

Plugins are available in personalized Temporary Chats. This means an otherwise ephemeral conversation can trigger actions or send data to third-party systems. OpenAI notes that third-party recipients may retain action data under their own privacy policies beyond ChatGPT's Temporary Chat retention period.

```text
TEMPORARY CHAT
-> PLUGIN / ACTION
-> THIRD-PARTY SYSTEM
-> EXTERNAL RETENTION
```

The chat can be temporary inside ChatGPT while its side effects are persistent elsewhere.

## 9. Ephemeral conversation does not imply ephemeral world effect

A personalized Temporary Chat with plugins can search external services, retrieve context, create or modify data where permissions allow, and leave durable records in third-party systems.

```text
EPHEMERAL CONVERSATION
!= EPHEMERAL WORLD EFFECT
```

Deep Drift must distinguish conversation persistence from action persistence.

## 10. Data-use policy can change after saving

Temporary Chats are not used to improve models while they remain temporary. If saved, the conversation becomes regular and follows the user's account-level model-improvement preference. Save is therefore also a data-control transition.

## 11. Temporary Chat becomes a controlled experimental surface

Useful comparison matrix:

```text
A. Regular personalized
B. Temporary personalized
C. Temporary non-personalized
D. Temporary personalized -> saved
E. Temporary non-personalized -> saved
```

The same prompt can be tested across all five to isolate personalization contribution, memory-read dependence, memory-write behavior, plugin effects, and post-save future-reference behavior.

## 12. Post-save provenance requires a timestamp

The same conversation can exist under two policy classes at different times:

```text
T0-T1: TEMPORARY POLICY
T1:    SAVE EVENT
T1+:   REGULAR CHAT POLICY
```

A later audit must not back-project the final regular-chat state onto the original session.

## 13. Chat-to-document export inherits this ambiguity

A Temporary Chat can produce Markdown, DOCX, PDF, copied passages, or other artifacts while remaining absent from visible chat history. If the user later saves the chat, the source conversation's governance state changes after artifact creation.

Artifact provenance should record **conversation state at generation time**, not merely the state observed during a later audit.

## 14. Copy-paste can outlive an unsaved source

```text
TEMPORARY SOURCE
-> COPY
-> PERSISTENT DOCUMENT
-> SOURCE CHAT EXPIRES
```

A persistent derivative can outlive its ephemeral conversational parent.

## 15. DOCX/PDF can be durable children of ephemeral sessions

```text
TEMPORARY CHAT
-> DOCX / PDF / MD
-> LIBRARY / DOWNLOAD / EXTERNAL STORAGE
```

The artifact may persist independently of the Temporary Chat. Static files should preserve generation-time conversation class where reproducibility matters.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | **Major fresh delta** | Memory read and memory write are separable in Temporary Chat |
| Skills / plugins | **Major interaction** | Personalized Temporary Chats can use plugins while remaining memory-write-disabled |
| Mini-app builders | Adjacent current delta | ChatGPT Sites can be shared with named external viewers without public publishing |
| Chat-to-document | **Major provenance implication** | Durable artifacts can emerge from sessions that never appear in normal history |
| DOCX/PDF generation | **Major archival implication** | Files can outlive an ephemeral source conversation |
| Copy-paste/export | **Major provenance implication** | Copied content can persist after source conversation loss |
| Creator workflow | **Major** | A conversation can move from ephemeral to persistent state after useful work emerges |

## Adjacent current update: external sharing for ChatGPT Sites

OpenAI's September 3, 2026 release allows eligible ChatGPT Site owners to share a live Site with named people outside their workspace without making it public. External viewers can use the Site but cannot edit or publish it.

This continues the movement from `chat output -> file` toward `chat -> interactive artifact -> access control -> external audience`.

For Deep Drift this strengthens the need to preserve artifact state, viewer identity class, workspace boundary, edit rights, publish rights, sharing event, and revocation state.

## New failure classes

### Temporary-Equals-Unpersonalized Fallacy
Assuming a Temporary Chat cannot use persistent user context.

### Memory-Enabled Boolean Collapse
Representing memory as one on/off field instead of separate read and write states.

### Save-Equals-Archive Fallacy
Treating save as passive storage rather than a transition in history, personalization, and data-control behavior.

### Ephemeral-Equals-No-Side-Effects Fallacy
Assuming a Temporary Chat cannot leave durable records in external services through plugins or actions.

### Final-State Backprojection Error
Looking at a saved regular chat and assuming it had regular-chat policy from the beginning.

### Artifact-Source Persistence Fallacy
Assuming a durable DOCX/PDF/Markdown artifact implies its source conversation remains durably accessible.

## Deep Drift benchmark additions

**Memory Read/Write Separation Fidelity (MRWSF)** - Can an archive reconstruct memory read and memory write independently?

**Conversation State Transition Fidelity (CSTF)** - Can the transition from temporary to regular chat be reconstructed with timestamps and policy changes?

**Deferred Memory Eligibility Fidelity (DMEF)** - Can a conversation that was memory-inert during execution be tracked when it later becomes future personalization context after saving?

**Ephemeral Side-Effect Fidelity (ESEF)** - Can durable plugin/action effects remain linked to an otherwise temporary source conversation?

**Artifact Parent-State Fidelity (APSF)** - Can a generated file preserve the conversation class and personalization state that existed at generation time?

## DRPA-1.0 protocol additions

### MEMORY READ-WRITE SEPARATION RULE

> Record memory consumption and memory mutation as separate provenance states. A conversation that can read existing memory but cannot create or update memory must never be represented by a single undifferentiated "memory enabled" field.

### CONVERSATION-STATE TRANSITION RULE

> When a conversation can change from temporary to persistent state, preserve the initial class, transition event, transition time, and effective post-transition history, personalization, memory-eligibility, and model-improvement settings. Never infer the conversation's initial governance state from its final saved state.

### EPHEMERAL SIDE-EFFECT RULE

> Temporary conversation status applies to the conversation's ChatGPT lifecycle, not automatically to actions taken through plugins, GPT actions, connected services, downloaded files, copied text, or externally stored artifacts. Preserve durable side effects separately.

### ARTIFACT GENERATION-STATE RULE

> Every exported or generated artifact should preserve the effective conversation state at generation time, including temporary/regular class, personalization mode, memory-read state, memory-write state, plugin availability, and relevant workspace restrictions. Later saving of the source conversation must not overwrite the artifact's original generation-state record.

## Canonical Deep Drift requirement

> Treat ephemerality, personalization, memory read, memory write, history visibility, platform retention, plugin side effects, and future memory eligibility as separate state variables. A conversation can read persistent context without writing memory, can produce durable artifacts while remaining absent from history, and can later cross into persistent state through a save event.

## Deep Drift principle

> **Temporary is now a lifecycle state, not a synonym for amnesia.**

Operationally:

> **Record what the conversation could read, what it could write, and exactly when it stopped being temporary.**

## Sources

1. OpenAI Help Center. **ChatGPT Release Notes - August 27, 2026: More controls in temporary chat.** https://help.openai.com/en/articles/6825453-chatgpt-release-notes
2. OpenAI Help Center. **Temporary Chat FAQ.** https://help.openai.com/en/articles/8914046
3. OpenAI Help Center. **ChatGPT Release Notes - September 3, 2026: Share Sites with people outside your workspace.** https://help.openai.com/en/articles/6825453-chatgpt-release-notes
4. OpenAI Help Center. **File storage and Library in ChatGPT.** https://help.openai.com/en/articles/20001052-file-storage-and-library-in-chatgpt

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository node was found for personalized Temporary Chat, memory read/write asymmetry, save-triggered governance transition, and durable artifact/plugin side effects as one provenance problem.  
**Relationship to prior nodes:** Extends memory-boundary, memory-portability, chat materialization, plugin-authorization, and artifact-provenance work. EPSTF is distinct because it treats conversation class itself as a mutable state machine.  
**Freshness:** The Temporary Chat controls were announced August 27, 2026 and remain current in OpenAI's first-party FAQ; the adjacent external Site-sharing update shipped September 3, 2026.
