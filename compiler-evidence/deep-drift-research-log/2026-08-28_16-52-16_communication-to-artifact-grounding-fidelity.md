# Deep Drift Research Update

## Communication-to-Artifact Grounding Fidelity

**Research date:** 28 August 2026  
**Observation time:** 16:52:16 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch

## Executive Summary

Microsoft's 25 August 2026 Microsoft 365 Copilot release notes document a creator workflow in which **Outlook emails can be added as knowledge sources inside Copilot Notebooks**. Microsoft says this lets downstream outputs such as presentations and briefs use the conversations, decisions, and context contained in email. In the same release batch, Microsoft unified web and work chat behind a **Work IQ** control that lets users switch access to work data on or off without leaving the chat interface.

The creator pipeline is becoming:

```text
EMAIL / FILE / WORK CONTEXT
-> NOTEBOOK
-> GROUNDED CHAT / SYNTHESIS
-> PRESENTATION / BRIEF / OTHER ARTIFACT
```

This is not merely email summarization. It is a shift in the evidentiary substrate of AI-generated artifacts.

For Deep Drift Research this creates two new constructs:

- **Communication-to-Artifact Grounding Fidelity (CAGF)**
- **Conversation-Derived Artifact Lineage (CDAL)**

The central research question is:

> When informal or semi-formal communication becomes a grounding source for a generated artifact, can the system preserve which messages supplied which claims, decisions, exclusions, and interpretations?

## Why This Matters

Files are usually treated as stable research objects. Email is not. Email contains changing threads, quoted prior messages, duplicated content, forwarding context, sender identity, recipient scope, timestamps, attachments, corrections, superseded decisions, informal language, and implied context.

Once email can ground a Notebook that then generates a presentation or brief, a new lineage chain appears:

```text
COMMUNICATION STATE
-> NOTEBOOK SOURCE STATE
-> MODEL SYNTHESIS
-> GENERATED ARTIFACT
```

A polished presentation may therefore inherit claims from a message that was never intended to function as a formal source.

## CAGF Definition

**Communication-to-Artifact Grounding Fidelity (CAGF)** measures whether an AI-generated artifact preserves the intended meaning, authority, chronology, and source identity of communication records used as grounding.

Minimum state should include:

```text
message_id
thread_id
sender
recipients
timestamp
subject
quoted_content_boundary
attachment_refs
decision_status
superseded_by
notebook_id
artifact_id
claim_links
```

Core distinction:

```text
EMAIL INCLUDED
!= EMAIL AUTHORITATIVE

EMAIL RECENT
!= EMAIL CURRENT

THREAD AVAILABLE
!= THREAD ORDER UNDERSTOOD

CLAIM GROUNDED
!= CLAIM GROUNDED TO THE RIGHT MESSAGE
```

## CDAL Definition

**Conversation-Derived Artifact Lineage (CDAL)** measures whether each material claim in a generated artifact can be traced back to the exact communication object that caused it.

A strong lineage record should preserve:

```text
artifact_claim_id
source_message_id
source_thread_id
source_timestamp
sender
decision_status
quoted_or_original
attachment_dependency
model_transformation
human_edit
```

## Failure Classes

### Superseded Decision Drift
An earlier email decision is used even though a later message reversed or corrected it.

### Quoted-Text Attribution Drift
The model attributes quoted text to the current sender rather than the original author.

### Thread Chronology Collapse
A long thread is summarized without preserving the order in which decisions changed.

### Informal-to-Formal Authority Inflation
An offhand email comment appears in a formal presentation as if it were an approved organizational position.

### Recipient-Scope Loss
The artifact preserves message content but loses whether it came from private, restricted, or broadly distributed communication.

### Attachment Detachment
The email is grounded, but the attached document that supplied substantive evidence is missing or treated as separate context.

### Duplicate Thread Weighting
Repeated quoted text appears multiple times and is over-weighted by the model.

### Cross-Source Conflict Smoothing
A file says one thing, an email says another, and the generated artifact silently harmonizes the conflict instead of exposing it.

### Work-Data Boundary Ambiguity
The user switches work-data access through Work IQ, but the resulting artifact does not make clear which work sources were active at generation time.

## Benchmark: Email-to-Notebook-to-Brief

Create an email thread containing an initial proposal, correction, later reversal, quoted text from another sender, one attached source file, one private recipient-only detail, and one explicit final decision. Add the thread to a Copilot Notebook with two stable reference files. Generate a project brief, presentation, and executive summary.

Measure:

- correct final-decision extraction;
- quoted-author attribution;
- chronology preservation;
- attachment usage;
- private-detail handling;
- conflict visibility;
- claim-to-message traceability;
- artifact reconstruction minutes.

## Metrics

### Final Decision Resolution Accuracy

```text
FDRA =
artifact claims matching the latest authoritative decision
/
all decision-dependent artifact claims
```

### Message-Level Lineage Coverage

```text
MLLC =
material artifact claims linked to exact source messages
/
all material claims derived from communication
```

### Quoted Attribution Accuracy

```text
QAA =
quoted statements attributed to correct original sender
/
all quoted statements used
```

### Communication Conflict Visibility

```text
CCV =
material source conflicts surfaced to the user
/
all seeded material conflicts
```

## Why Work IQ Matters

Microsoft also says web and work chat are now unified in a single interface with a dedicated **Work IQ** button for controlling access to work data.

This creates a runtime state variable:

```text
WORK_DATA_ACCESS = ON / OFF
```

The artifact-generation record should preserve this state. Otherwise two identical prompts can produce different answers because one run had work data enabled and the other did not.

```text
SAME PROMPT
!= SAME EVIDENCE SCOPE
```

Deep Drift runtime cards should add:

```text
work_data_access_state
work_data_sources_available
work_data_sources_used
notebook_sources
communication_sources
artifact_generation_time
```

## Relation to Memory

This is adjacent to memory but not the same thing.

```text
MEMORY = SYSTEM-RETAINED USER / CONVERSATION STATE

NOTEBOOK GROUNDING = USER-SELECTED EVIDENCE STATE
```

Email inside a Notebook is therefore a selected evidence object, not merely remembered context.

## Relation to Chat-to-Document Generation

The larger direction is moving from:

```text
CHAT -> DOCUMENT
```

toward:

```text
MULTI-SOURCE WORK CONTEXT
-> CURATED NOTEBOOK
-> CHAT / SYNTHESIS
-> EDITABLE ARTIFACT
```

The more sources feed the artifact, the more provenance matters. A generated Word file or presentation should not merely list Outlook as a source class. It should preserve the exact messages and thread state that contributed material claims.

## Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing release found beyond already logged Temporary Chat and shared-memory changes. |
| Skills | No newer general Skill launch found in this pass. |
| Mini-app builders | No newer launch found beyond previously logged Sites/Canvas changes. |
| Chat-to-document export | **Material new-to-log workflow:** Outlook emails can enter Copilot Notebooks as knowledge sources and inform downstream briefs/presentations. |
| DOCX / PDF generation | No newer standalone generation release found; the important change is expansion of the grounding substrate behind generated artifacts. |
| Copy-paste / export fixes | No newer fix found. |
| Broader creator workflow | Work communication is becoming a first-class artifact-generation source, while work-data access becomes a runtime toggle. |

## Deep Drift Research Position

The creator stack is moving from files as evidence to **work context as evidence**.

That is powerful, but it becomes an evidentiary mess if the system cannot preserve:

```text
WHO SAID IT
WHEN THEY SAID IT
WHO THEY SAID IT TO
WHETHER IT WAS FINAL
WHAT IT REPLACED
AND WHICH ARTIFACT CLAIM IT PRODUCED
```

Therefore:

```text
COMMUNICATION AVAILABLE
!= COMMUNICATION AUTHORITATIVE

NOTEBOOK GROUNDED
!= ARTIFACT TRACEABLE

WORK DATA ENABLED
!= WORK DATA SCOPE VISIBLE
```

The serious Deep Drift question is no longer merely whether AI can generate a presentation from your work. It is whether the presentation can later prove **which parts of your work became evidence**.

## Evidence Boundary

Platform facts in this report are grounded in Microsoft's first-party Microsoft 365 Copilot release notes dated 25 August 2026. Fresh first-party OpenAI, Anthropic, Google Workspace, and Microsoft release sources were checked for newer category-displacing changes. CAGF, CDAL, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. Microsoft Learn, **Microsoft 365 Copilot release notes**, 25 August 2026 - Outlook Emails in Copilot Notebooks: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
2. Microsoft Learn, **Microsoft 365 Copilot release notes**, 25 August 2026 - unified web and work chat with Work IQ: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
3. OpenAI Help Center, **ChatGPT Release Notes**, current through 27 August 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
4. Anthropic first-party release sources, current through 28 August 2026.
5. Google Workspace Updates, August 2026 archive.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
