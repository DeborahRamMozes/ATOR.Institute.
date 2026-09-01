# Deep Drift Research Update — TRPSAF

## Temporary-Read / Persistent-State Asymmetry Fidelity

**Research date:** 2 September 2026  
**Primary fresh delta:** OpenAI, 27 August 2026 — personalized Temporary Chat and save-to-history conversion  
**Scope:** memory, plugins/skills, temporary sessions, persistence boundaries, chat-to-artifact workflows, creator provenance.

## Executive finding

OpenAI changed Temporary Chat from a simple "no-memory" mode into a configurable state boundary. A Temporary Chat can now be started as **personalized**, allowing it to read existing memories, custom instructions, and plugins from the regular account context while still not creating new memories and remaining outside chat history unless the user explicitly saves it.

This produces a new asymmetry:

```text
READ PERSISTENT STATE
!= WRITE PERSISTENT STATE

TEMPORARY
!= CONTEXT-FREE

OUTSIDE CHAT HISTORY
!= OUTSIDE PERSONALIZATION

PLUGIN ACCESS
!= MEMORY WRITE

SAVE CHAT
!= SIMPLE ARCHIVE ACTION
```

A temporary conversation can therefore inherit durable context, use persistent procedures, produce outputs, and then disappear from normal history while leaving those persistent source states untouched.

If the user later chooses **Save**, OpenAI converts the temporary conversation into a regular chat. From that point onward it follows account-level personalization and model-improvement settings and can become referenceable by future memory-enabled conversations.

## New node

### Temporary-Read / Persistent-State Asymmetry Fidelity (TRPSAF)

The new execution model can be represented as:

```text
PERSISTENT ACCOUNT STATE
   |
   +--> MEMORY
   +--> CUSTOM INSTRUCTIONS
   +--> PLUGINS
   |
   v
PERSONALIZED TEMPORARY CHAT
   |
   +--> CAN READ EXISTING STATE
   +--> CANNOT CREATE NEW MEMORY
   +--> NOT IN CHAT HISTORY
   |
   +--> OUTPUT / FILE / DECISION
   |
   +--> DELETE / EXPIRE
   |
   OR
   |
   +--> SAVE
          |
          v
      REGULAR CHAT
          |
          +--> enters history
          +--> follows account personalization
          +--> may become future reference context
```

The persistence boundary is therefore directional rather than binary.

## Deep Drift significance

A personalized Temporary Chat can use existing memory, custom instructions, and plugins but cannot create or update memory while it remains temporary. Personalization is selected when the session starts and cannot be changed after the conversation begins. Saving a Temporary Chat is not merely copying it into an archive; it converts the session into a regular chat governed by the account's normal persistence and personalization rules.

This means prompt preservation alone is insufficient. Deep Drift should preserve temporary-chat status, personalization mode, memory-read permission, memory-write permission, custom-instruction availability, plugin availability, session-start timestamp, save-to-history transition, and every downstream artifact.

Because plugins can execute inside a personalized Temporary Chat, an ephemeral conversation can depend on durable procedural infrastructure. A DOCX, PDF, spreadsheet, image, code patch, or research result can survive even if the chat that generated it never enters normal history.

OpenAI's Temporary Chat FAQ also distinguishes user-visible history from infrastructure retention: unsaved Temporary Chats do not appear in history, but a copy may still be retained for up to 30 days for safety purposes. Limited prior-conversation information may also be used for safety and security in rare high-risk situations even when personalization is off.

## New failure classes

- Temporary-Means-Isolated Fallacy
- Read-Write State Collapse
- History-Persistence Equivalence Error
- Save-as-Archive Fallacy
- Session-Initialization Erasure
- Ephemeral-Conversation / Persistent-Procedure Collapse
- Artifact-without-Conversation Lineage
- Safety-State Conflation

## Deep Drift benchmark additions

- **Temporary Session Personalization Fidelity (TSPF)** — reconstruct whether a Temporary Chat was personalized or non-personalized at creation.
- **Read-vs-Write Memory Fidelity (RWMF)** — distinguish memory read access from memory creation/update rights.
- **Temporary Plugin Execution Fidelity (TPEF)** — reconstruct plugin use inside an unsaved Temporary Chat.
- **Persistence Transition Fidelity (PTF)** — preserve the event that converts a Temporary Chat into a regular chat.
- **History-vs-Retention Fidelity (HRF)** — separate absence from user-visible history from infrastructure retention.
- **Artifact-to-Temporary-Session Fidelity (ATSF)** — trace downstream files and decisions to the temporary session that generated them.
- **Session-Initialization State Fidelity (SISF)** — reconstruct immutable start-of-session personalization state.

## Canonical Deep Drift requirement

> Every material AI-assisted workflow using temporary, incognito, ephemeral, or non-history conversation modes should preserve a machine-readable session-persistence manifest that separately records user-visible history state; session personalization mode at creation; memory read permission; memory write permission; custom-instruction availability; plugin or Skill availability and execution; safety-context exceptions; infrastructure retention policy; session-start timestamp; artifact generation events; save-to-history or persistence-class transition events; resulting account-level memory eligibility; and all downstream documents, PDFs, code, messages, or decisions. "Temporary" must never be interpreted as proof of contextual isolation, zero retention, or absence of persistent procedural dependencies.

## Broader creator-workflow trend

Persistence is becoming multidimensional. The interface still offers one reassuring adjective — "temporary" — while the underlying system now contains independent axes for memory read, memory write, plugin access, history visibility, retention, and conversion into a durable chat.

For Deep Drift, the important shift is simple: **ephemeral interaction and persistent infrastructure can now be deliberately combined inside one session.**

## Sources

1. OpenAI. **ChatGPT Release Notes**, 27 August 2026, "More controls in temporary chat."  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

2. OpenAI Help Center. **Temporary Chat FAQ**, current documentation accessed 2 September 2026.  
   https://help.openai.com/en/articles/8914046-temporary-chat-faq

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift research-log entry was found for the specific combination of personalized Temporary Chat, memory-read-without-memory-write behavior, plugin availability inside temporary sessions, immutable session-start personalization, and save-to-regular-chat persistence conversion.  
**Relationship to prior nodes:** Complements DMPSAF, RSPDSF, CAICPF, and artifact-lineage nodes. TRPSAF specifically formalizes asymmetric read/write access to persistent state inside an otherwise temporary conversational container.  
**Freshness:** Verified against OpenAI first-party documentation current on 2 September 2026.
