# Deep Drift Research Update

## User-Controlled Context Aperture Fidelity: Unified Chat, Work-Data Switching, Email-Grounded Notebooks, and Voice-Interactive Documents

**Research date:** Thursday, 27 August 2026  
**ĀTØR observation time:** 10:51:35 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan. No newer 27 August launch was found in the target categories during this pass. Three materially useful August 25 Microsoft creator-workflow changes were identified as new-to-log.

## Executive Summary

Microsoft's August 25, 2026 Microsoft 365 Copilot release notes expose a creator-workflow shift that matters directly to Deep Drift Research:

1. **Web chat and work chat are now unified into one interface with a Work IQ button that toggles access to work data.**
2. **Outlook emails can now be added as reference sources inside Copilot Notebooks**, grounding later outputs such as presentations and briefs in email conversations and decisions.
3. **Word Read Aloud now supports live voice Q&A with Copilot**, allowing users to ask questions about the document while it continues to be read aloud.

These changes share one architectural theme:

```text
THE INTERFACE STAYS CONTINUOUS
WHILE THE ACTIVE CONTEXT APERTURE CHANGES
```

A user can remain in one chat or one document while changing which data layer, source type, or interaction modality becomes active.

This creates a new Deep Drift benchmark family:

**User-Controlled Context Aperture Fidelity (UCAF)**

The central research question is:

> When the user changes what contextual layer the AI may use without leaving the current interface, does the system reliably expose, apply, and preserve that boundary?

## New Deep Drift Construct: User-Controlled Context Aperture Fidelity

### Definition

**User-Controlled Context Aperture Fidelity (UCAF)** measures whether a creator system correctly changes its effective context when the user explicitly opens, closes, narrows, or expands access to a contextual source inside a continuous interface.

Examples include:

- work-data access toggled on/off;
- email added to a Notebook as grounding;
- document-local Q&A during Read Aloud;
- future project, memory, source, or connector switches.

### Core distinction

```text
SAME CHAT SURFACE
!=
SAME CONTEXT STATE
```

The visible interface may remain unchanged while the causal input set changes materially.

## Delta 1: Unified Web/Work Chat with Work IQ Context Toggle

Microsoft says web and work chats are now unified into a single chat experience with a dedicated **Work IQ** button that can switch access to work data on or off.

Previously, users moved between separate web and work chat tabs.

The new topology is:

```text
ONE CHAT INTERFACE
        |
        +-- WORK IQ OFF
        |     -> non-work / web context
        |
        +-- WORK IQ ON
              -> work-data context
```

For Deep Drift, this is a context-boundary transition inside a stable conversational surface.

### New failure classes

**Context-Aperture State Ambiguity**  
The user cannot reliably tell whether work data is currently active.

**Residual Work-Context Influence**  
Work IQ is turned off, but prior work-derived context continues influencing the response in a way the user does not expect.

**Context Re-entry Drift**  
Work IQ is turned back on, but the system restores stale or incomplete work context.

**Boundary-State Provenance Loss**  
A later reviewer cannot determine whether a given response was produced with Work IQ enabled or disabled.

## Delta 2: Outlook Emails as Copilot Notebook Sources

Microsoft now allows Outlook emails to be added as references inside Copilot Notebooks.

This expands the notebook context graph from files/documents toward:

```text
FILES
+ EMAIL CONVERSATIONS
+ DECISIONS
+ PROJECT CONTEXT
-> NOTEBOOK
-> PRESENTATIONS / BRIEFS / OTHER OUTPUTS
```

That matters because email is not merely another document type.

Email contains chronology, authorship, reply relationships, informal decisions, unresolved disagreements, attachments, and implicit project state.

### New failure classes

**Email-Thread Context Flattening**  
A threaded conversation is reduced to text without preserving who said what, when, and in which reply context.

**Decision-Provenance Loss**  
A generated brief uses an email-derived decision but does not preserve which message established it.

**Attachment/Message Split Drift**  
The email body is included in Notebook context but the relevant attachment or linked file is missing, or vice versa.

**Stale-Mail Grounding**  
An old email remains active context after a later message supersedes it.

## Delta 3: Voice Q&A During Word Read Aloud

Microsoft now allows real-time voice questions during Word Read Aloud.

The user can listen to the document and ask questions such as "What does this mean?", "Summarize this section", or "Explain this paragraph" without leaving the reading flow.

The document becomes:

```text
WORD ARTIFACT
-> READ ALOUD STATE
-> SPOKEN USER QUESTION
-> DOCUMENT-LOCAL COPILOT Q&A
-> SPOKEN / IMMEDIATE ANSWER
-> CONTINUED READING
```

This is a **document-attached conversational interpretation layer**.

### New failure classes

**Read-Position Context Drift**  
The user asks about "this section," but the AI answers using the wrong document position.

**Voice Referential Ambiguity**  
Pronouns such as "this," "that," or "the previous paragraph" resolve incorrectly.

**Read/Q&A State Desynchronization**  
Read Aloud continues while the Q&A system reasons over a different section than the one currently being heard.

**Interpretation/Source Boundary Loss**  
The response mixes document text, model inference, and external knowledge without clearly distinguishing them.

## Deep Drift Benchmark: Context Aperture Transition Test

### Test A - Work IQ

```text
1. Ask a question with Work IQ ON using a controlled work fact.
2. Turn Work IQ OFF.
3. Ask a semantically similar question.
4. Turn Work IQ ON again.
5. Compare source use and response behavior.
```

### Test B - Notebook email grounding

```text
1. Add Email E1 containing decision D1.
2. Add later Email E2 superseding D1 with D2.
3. Ask the Notebook for the current decision.
4. Generate a brief.
5. Verify whether D2 is used and attribution remains reconstructable.
```

### Test C - Word Read Aloud Q&A

```text
1. Create three paragraphs containing distinct facts.
2. Start Read Aloud.
3. During paragraph 2, ask "What does this mean?"
4. Ask "How is this different from the previous paragraph?"
5. Verify referential resolution.
```

## New Metrics

```text
CATA = Context Aperture Transition Accuracy
CBRR = Context Boundary Residue Rate
SSAC = Source-State Attribution Completeness
RVRF = Referential Voice Resolution Fidelity
```

## Deep Drift Research Position

The next creator-workflow problem is not only memory. It is **context aperture governance**.

The user increasingly stays inside one continuous surface while silently changing work-data access, source membership, document locality, model/tool access, and artifact state.

A serious provenance system must preserve not just:

```text
WHAT DID THE USER ASK?
```

but also:

```text
WHAT CONTEXT WAS LEGALLY AND OPERATIONALLY ACTIVE
WHEN THE SYSTEM ANSWERED?
```

That is the difference between conversational continuity and evidentiary continuity.

## Primary Sources

1. Microsoft Learn, **Microsoft 365 Copilot release notes**, August 25, 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
2. Microsoft Support, **Get started with voice features in Microsoft Copilot**: https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-with-voice-features-in-microsoft-365-copilot
3. Anthropic, **Claude in Chrome is generally available**, August 26, 2026: https://claude.com/blog/claude-in-chrome-generally-available
4. Anthropic, **Claude gets its own browser in Cowork**, August 26, 2026: https://claude.com/blog/cowork-built-in-browser
5. OpenAI ChatGPT Release Notes: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
6. Google Workspace Updates, August 2026 archive: https://workspaceupdates.googleblog.com/2026/08/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
