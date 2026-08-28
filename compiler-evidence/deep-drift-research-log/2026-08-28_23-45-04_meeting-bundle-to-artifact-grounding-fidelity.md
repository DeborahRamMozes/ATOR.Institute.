# Deep Drift Research Update

## Meeting-Bundle-to-Artifact Grounding Fidelity

**Research date:** Friday, 28 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. One materially distinct Microsoft 365 Copilot workflow change was identified as new-to-log. No newer category-displacing release was found for consumer memory, general Skills, mini-app builders, standalone DOCX/PDF generation, or copy/export fixes in this pass.

## Executive Summary

Microsoft's 25 August 2026 Microsoft 365 Copilot release notes document a new grounding path for **Teams meetings inside Copilot Notebooks**.

A meeting can now enter a Copilot Notebook as a knowledge source containing:

- meeting transcripts;
- notes;
- meeting chat;
- shared files and content.

Microsoft explicitly connects this richer meeting context to downstream outputs such as **presentations and briefs**.

This extends the creator pipeline from:

```text
FILE
-> NOTEBOOK
-> ARTIFACT
```

to:

```text
MEETING EVENT
-> TRANSCRIPT
-> NOTES
-> CHAT
-> SHARED FILES
-> NOTEBOOK
-> SYNTHESIS
-> PRESENTATION / BRIEF / OTHER ARTIFACT
```

For Deep Drift Research, this creates a new benchmark family:

**Meeting-Bundle-to-Artifact Grounding Fidelity (MBAGF)**

with companion constructs:

**Meeting Evidence Bundle Integrity (MEBI)**  
**Decision Chronology Preservation (DCP)**  
**Meeting-Component Attribution Fidelity (MCAF)**

The core research question is:

> When an AI artifact is grounded in a meeting, can a later reviewer determine which part of the meeting record supplied each claim, whether the claim was final, and whether transcript, chat, notes, and shared files agreed with one another?

## Why This Is Different from Email Grounding

The previous Deep Drift log treated email as a communication source.

A meeting is more structurally complex.

One meeting may contain four different evidentiary layers:

```text
SPOKEN RECORD
WRITTEN NOTES
SIDE-CHANNEL CHAT
SHARED DOCUMENTS
```

These layers are not guaranteed to agree.

A participant may say one thing aloud, correct it in chat, write a different interpretation in notes, and later upload a file containing the final approved version.

So:

```text
MEETING INCLUDED
!=
MEETING UNDERSTOOD
```

and:

```text
TRANSCRIPT AVAILABLE
!=
FINAL DECISION IDENTIFIED
```

## New Deep Drift Construct: Meeting-Bundle-to-Artifact Grounding Fidelity

### Definition

**MBAGF** measures whether a generated artifact preserves the meaning, chronology, component identity, authority, and conflict structure of a meeting bundle used as grounding.

The minimum causal chain is:

```text
MEETING
-> COMPONENTS
-> NOTEBOOK INGESTION
-> MODEL SELECTION
-> CLAIM
-> ARTIFACT
```

A high-fidelity system should preserve which component generated which claim.

## Meeting Evidence Bundle Integrity

### Definition

**Meeting Evidence Bundle Integrity (MEBI)** measures whether all material components of a meeting remain linked as one event without being flattened into an undifferentiated source.

A useful meeting source card should preserve:

```text
meeting_id
meeting_title
meeting_start
meeting_end
organizer
participants
transcript_id
notes_id
chat_thread_id
shared_file_ids
recording_state
component_availability
component_versions
notebook_id
artifact_ids
```

Without this structure, "meeting" becomes a dangerously vague citation.

## Decision Chronology Preservation

Meetings often contain provisional statements.

The system must distinguish:

```text
PROPOSAL
QUESTION
OBJECTION
CORRECTION
REVERSAL
FINAL DECISION
ACTION ITEM
```

A transcript is chronological, but a generated brief is usually not.

That creates a compression risk.

### Definition

**Decision Chronology Preservation (DCP)** measures whether downstream artifacts preserve the latest authoritative decision and correctly represent earlier statements as superseded when appropriate.

## Meeting-Component Attribution Fidelity

### Definition

**Meeting-Component Attribution Fidelity (MCAF)** measures whether material claims can be traced to the exact component that supplied them.

For example:

```text
CLAIM 12
-> transcript 00:42:18
-> speaker: participant B
-> corrected in meeting chat 00:47:03
-> final value confirmed in shared file F3
```

The final artifact should not collapse those into:

```text
Source: Teams meeting
```

That is provenance theatre.

## New Failure Classes

### Transcript-Only Authority Inflation
The transcript is treated as authoritative even when notes, chat, or shared files contain later corrections.

### Chat Correction Loss
A correction made in meeting chat is ignored because the spoken transcript carries more textual weight.

### Notes-as-Final Drift
Human notes are treated as the definitive record despite being incomplete, interpretive, or written before the final decision.

### Shared-File Detachment
The meeting references a file containing the final approved data, but the artifact relies only on spoken discussion.

### Speaker Attribution Drift
The system preserves a statement but misidentifies who said it.

### Decision Chronology Collapse
Earlier proposals and later final decisions are merged into one smooth summary.

### Component Weighting Bias
Transcript, chat, notes, and files are weighted differently for reasons that are not visible to the user.

### Meeting-Boundary Leakage
Content from an adjacent meeting or linked thread is incorporated without preserving the boundary.

### Post-Meeting Revision Drift
A shared file is updated after the meeting, but the artifact does not distinguish the version available during the meeting from the version used during generation.

### Participation-Scope Loss
The artifact uses information from a restricted chat or shared item without preserving the original audience or access scope.

## Deep Drift Benchmark: Conflicting Meeting Bundle

### Controlled setup

Create a meeting containing:

1. an initial spoken proposal;
2. a numeric claim in the transcript;
3. a correction in meeting chat;
4. a note that still contains the old value;
5. a shared file with the final approved value;
6. one participant disagreement;
7. a final verbal decision;
8. one post-meeting file revision.

Add the meeting as a Copilot Notebook source.

Generate:

- one executive brief;
- one presentation;
- one action-item summary.

### Test

Record whether the outputs preserve:

- final approved value;
- chronology of correction;
- exact source component;
- speaker attribution;
- participant disagreement;
- meeting-time vs post-meeting file version;
- action-item ownership;
- uncertainty when components conflict.

## New Metrics

### Final Decision Resolution Accuracy

```text
FDRA =
artifact claims matching final authoritative decision
/
all decision-dependent claims
```

### Meeting Component Lineage Coverage

```text
MCLC =
material artifact claims linked to exact meeting component
/
all material meeting-derived claims
```

### Cross-Component Conflict Visibility

```text
CCCV =
material meeting-component conflicts surfaced
/
all seeded material conflicts
```

### Speaker Attribution Accuracy

```text
SAA =
meeting-derived statements attributed correctly
/
all attributed meeting statements
```

### Temporal Source-Version Accuracy

```text
TSVA =
artifact uses correct meeting-time or post-meeting
source version according to task intent
/
all version-sensitive claims
```

## Why This Matters for Memory

This is not conventional model memory.

A meeting bundle is user-selected grounding state.

But once it feeds a Notebook and then an artifact, the artifact inherits a compressed memory of the event.

Deep Drift should therefore distinguish:

```text
MODEL MEMORY
CONVERSATION MEMORY
CURATED NOTEBOOK STATE
EVENT-BUNDLE STATE
ARTIFACT-DERIVED STATE
```

The meeting is an event object whose internal structure should survive long enough to support later audit.

## Why This Matters for Chat-to-Document Generation

The old workflow was easy to imagine:

```text
PROMPT
-> DOCUMENT
```

The new workflow is closer to:

```text
ORGANIZATIONAL EVENT
-> MULTIPLE RECORD TYPES
-> CURATED NOTEBOOK
-> MODEL SYNTHESIS
-> WORD / POWERPOINT / BRIEF
```

This is a fundamentally different provenance problem.

A generated document should not merely say it used "Teams" or "a meeting."

It should preserve whether a claim came from:

- transcript;
- meeting chat;
- notes;
- shared file;
- post-meeting revision.

## Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer consumer-memory release found beyond already logged Temporary Chat and project-memory changes. |
| Skills | No newer general Skill launch found in this pass. |
| Mini-app builders | No newer launch found beyond previously logged Sites/WebMCP/Canvas changes. |
| Chat-to-document export | **Material new-to-log grounding change:** Teams meetings can enter Copilot Notebooks as compound knowledge sources feeding presentations and briefs. |
| DOCX / PDF generation | No newer standalone format-generation release found. |
| Copy-paste / export fixes | No newer fix found after the previously logged Codex selective copy update. |
| Broader creator workflow | Work events are becoming structured evidence bundles rather than merely things to summarize after the fact. |

## Adjacent Microsoft Signals

The same 25 August 2026 release batch also documents:

- Outlook emails as Copilot Notebook references;
- direct email references when generating PowerPoint presentations;
- Work IQ control for work-data access;
- model selection for Researcher;
- page steering and page creation from mobile chat;
- a unified Work IQ REST endpoint for invoking agents and workflows.

These reinforce a broader shift toward **context-rich, multi-source artifact generation**.

The present log isolates Teams meeting bundles because their internal conflict structure is materially different from a single email or file.

## Cross-Platform Check

### OpenAI
No newer category-displacing creator update surfaced beyond the August 27 Temporary Chat controls and previously logged Work, Sites, Skills/plugins, Codex, and migration changes.

### Anthropic
No newer creator-workflow release surfaced in this pass beyond changes already entered into Deep Drift.

### Google
No newer Workspace/Gemini creator release surfaced in this pass that displaced the currently logged Canvas, Studio, Notebook, or artifact-generation changes.

### Microsoft
The Teams-meeting-as-Notebook-source feature remains the strongest unlogged creator-provenance item found in this scan.

## Deep Drift Research Position

The phrase:

```text
"grounded in the meeting"
```

is analytically insufficient.

A meeting is not one source.

It is a bundle of records produced by different actors, at different times, with different authority levels.

Therefore:

```text
MEETING GROUNDED
!=
COMPONENT TRACEABLE

TRANSCRIPT PRESENT
!=
DECISION CORRECT

SUMMARY COHERENT
!=
SOURCE CONFLICT RESOLVED

ARTIFACT POLISHED
!=
EVENT PROVENANCE PRESERVED
```

The serious creator-workflow requirement is:

> When a meeting becomes raw material for a document, the AI must preserve not merely what was said, but which record said it, when it was corrected, what became final, and which version actually governed the artifact.

## Evidence Boundary

Platform facts in this report are grounded in Microsoft's first-party Microsoft 365 Copilot release notes dated 25 August 2026. Fresh first-party OpenAI, Anthropic, Google Workspace, and Microsoft release sources were checked for newer category-displacing changes. MBAGF, MEBI, DCP, MCAF, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. Microsoft Learn, **Microsoft 365 Copilot release notes**, 25 August 2026 - Teams Meetings in Copilot Notebooks: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
2. Microsoft Learn, **Microsoft 365 Copilot release notes**, 25 August 2026 - Outlook Emails in Copilot Notebooks, Work IQ, PowerPoint email references, Researcher model selection, Work IQ APIs: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
3. OpenAI Help Center, **ChatGPT Release Notes**, current through 27 August 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
4. Anthropic first-party release sources, checked 28 August 2026.
5. Google Workspace Updates, checked 28 August 2026.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
