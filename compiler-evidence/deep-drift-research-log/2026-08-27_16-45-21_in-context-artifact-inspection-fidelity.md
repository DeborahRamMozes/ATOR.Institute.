# Deep Drift Research Update

## In-Context Artifact Inspection Fidelity: When Documents Move Inside the Chat Surface

**Research date:** Thursday, 27 August 2026  
**ĀTØR observation time:** 16:45:21 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. No newer 27 August launch displaced the most recent memory, skills, browser-agent, mini-app, DOCX/PDF, or export updates. One materially useful Microsoft creator-workflow boundary was identified as new-to-log.

## Executive Summary

Microsoft 365 Copilot now allows cited Word, Excel, PowerPoint, and PDF files to open directly inside Copilot Chat on Windows, Mac, and web.

Previously, clicking cited content opened the file in a separate browser tab or viewer. The new workflow keeps the document and the conversation in one visible surface so the user can inspect the source while continuing the chat.

This appears small.

For Deep Drift Research, it is not.

It creates a new distinction:

```text
ARTIFACT VISIBLE BESIDE CHAT
!=
ARTIFACT ACTIVE IN MODEL CONTEXT
!=
ARTIFACT STATE USED FOR THE NEXT ANSWER
```

The interface is co-locating evidence and conversation. That reduces context switching, but it also makes it easier for humans to assume that whatever they can currently see is necessarily what the model is currently reasoning over.

This creates a new benchmark family:

**In-Context Artifact Inspection Fidelity (ICAIF)**

The central research question is:

> When a document is displayed inside the conversational surface, does the system preserve a clear and reconstructable relationship between the visible artifact, the artifact actually supplied to the model, the cited source state, and the answer produced afterward?

## New Deep Drift Construct: In-Context Artifact Inspection Fidelity

### Definition

**In-Context Artifact Inspection Fidelity (ICAIF)** measures whether an AI chat surface that embeds or opens artifacts beside the conversation maintains accurate alignment among:

- visible artifact;
- cited artifact identity;
- artifact version;
- model-accessible source state;
- user-selected location within the artifact;
- subsequent answer;
- resulting artifact mutation or export.

The feature should be treated as a context-management surface, not merely a viewer.

## Current Microsoft Surface

Microsoft documents the following path:

```text
COPILOT CHAT
-> CITED WORD / EXCEL / POWERPOINT / PDF
-> FILE OPENS INSIDE COPILOT CHAT
-> USER INSPECTS FILE
-> CHAT CONTINUES BESIDE FILE
```

The feature is currently documented for Windows, Mac, and web.

Microsoft also states that it is not available in the Microsoft 365 Copilot mobile app or when using Copilot inside Edge, Excel, Word, or PowerPoint.

That means the capability is already surface-dependent.

## Core Deep Drift Distinction

The human-visible interface can imply a stronger relationship than the system actually guarantees.

```text
VISIBLE
!=
INGESTED

INGESTED
!=
CURRENTLY ACTIVE

CURRENTLY ACTIVE
!=
USED FOR THIS CLAIM

CITED
!=
VERSION-LOCKED
```

A reliable creator system must make those distinctions legible.

## New Failure Classes

### Visible-Context False Equivalence

The user assumes that the document displayed beside chat is automatically active context for the next model response.

### Artifact-Version Inspection Drift

The visible file is one version while the cited or model-grounded version is older, cached, or otherwise different.

### Viewport-to-Reasoning Misalignment

The user navigates to a specific page, slide, table, or section and asks "What does this mean?", but the model reasons over a broader or different part of the artifact.

### Citation-to-Artifact Identity Drift

A citation resolves to an artifact whose title is correct but whose version, copy, location, or state differs from the object the user believes is open.

### Inline-Viewer Surface Gap

The workflow works on Windows, Mac, and web but not on mobile or inside several app-specific Copilot surfaces, creating different creator semantics under the same product brand.

### Inspection-to-Mutation Ambiguity

A user inspects a file in chat and then asks for a change, but it is unclear whether the original native artifact, a derivative object, or only the conversational representation will be modified.

### Visible-Artifact Provenance Loss

A later reviewer can see the answer but cannot reconstruct which exact artifact state was open or cited when that answer was produced.

## Why This Matters for Deep Drift

Deep Drift has already tracked:

- context apertures;
- container migration;
- artifact-state contracts;
- cross-surface continuity;
- notebook-to-artifact compilation;
- persistent procedural state.

Inline artifact inspection adds another layer:

```text
WHAT THE HUMAN CAN SEE
```

That layer must not be confused with:

```text
WHAT THE MODEL CAN SEE
```

The closer the interface makes those states look identical, the more important explicit provenance becomes.

## New Deep Drift Benchmark: Inline Artifact Inspection Test

### Controlled setup

Prepare four artifacts:

```text
A. Word document with three versioned sections
B. Excel workbook with two similar tables
C. PowerPoint deck with two visually similar slides
D. PDF with repeated terminology on different pages
```

### Procedure

1. Open each artifact from a Copilot Chat citation.
2. Navigate manually to a controlled location.
3. Ask a referential question such as:
   - "What does this paragraph mean?"
   - "Why is this number different?"
   - "Summarize this slide."
   - "Compare this page with the previous page."
4. Replace or update the source artifact.
5. Repeat the question.
6. Record whether the model uses:
   - visible location;
   - latest file version;
   - cited source state;
   - stale cached state;
   - broader artifact context.

### Metrics

- artifact identity accuracy;
- artifact version accuracy;
- viewport-reference accuracy;
- citation-state accuracy;
- visible/model-context equivalence;
- cross-surface availability;
- human clarification minutes;
- provenance completeness.

## New Metric: Visible-to-Active Context Equivalence

```text
VACE =
tests where the artifact state visible to the human
matches the artifact state actually governing the response
/
all controlled inline-artifact tests
```

## New Metric: Artifact Version Resolution Accuracy

```text
AVRA =
responses grounded in the intended current artifact version
/
all version-sensitive tests
```

## New Metric: Referential Viewport Fidelity

```text
RVF =
references such as "this page", "this slide", or "this table"
resolved to the intended visible artifact location
/
all referential tests
```

## New Metric: Inspection Provenance Completeness

```text
IPC =
responses for which artifact identity, version, citation,
and relevant inspected state are reconstructable
/
all artifact-grounded responses
```

## Why Reduced Context Switching Is Not Enough

Microsoft correctly frames the feature as reducing context switching.

That is valuable.

But Deep Drift should distinguish cognitive convenience from causal transparency.

```text
FEWER TABS
!=
CLEARER PROVENANCE

DOCUMENT BESIDE CHAT
!=
DOCUMENT BOUND TO ANSWER
```

A unified surface can reduce human navigation while increasing epistemic ambiguity if the system does not expose which source state actually governed the answer.

## Relation to Existing ĀTØR Seven-Layer State Protocol Family

### MMSF - Mounted Memory State Fidelity
Visible document context should not be mistaken for memory state.

### PSMC - Persistent State Mutation Control
If inspection becomes editing, the system must identify which persistent object will change.

### SSRP - Sync-Back State Reconciliation
Visible file state, cloud file state, cited state, and any edited state must reconcile.

### ASRF - Agent State Reconstruction Fidelity
The artifact-citation-view-answer chain should remain reconstructable.

### PVP - Procedural-Version Provenance
Document-review procedures should preserve which source version governed each run.

### ALRTSF - Artifact Lineage & Round-Trip State Fidelity
Inspection, editing, and later export need lineage across native and derivative states.

### SCRR - Session Continuity, Retrieval & Rehydration
A later session should recover the correct artifact context instead of forcing the human to reopen and explain the same source.

## Broader Fresh Platform Scan

### Microsoft

The new-to-log focus of this pass is inline opening of cited Word, Excel, PowerPoint, and PDF files inside Copilot Chat.

Recent standing creator-workflow signals also include:

- Notebook-generated Word and Excel artifacts;
- mobile Page steering and chat-triggered Page creation;
- Python-backed Excel editing;
- Work IQ context switching;
- email and meeting grounding;
- multimodal Notebook Capture.

### Anthropic

The freshest first-party creator changes remain dated 26 August 2026:

- Claude in Chrome generally available on every paid plan;
- autonomous browser actions with a safety classifier;
- Cowork's built-in agent-owned browser.

The 25 August shared-memory architecture across chat and Cowork also remains a major continuity signal.

### OpenAI

No newer public product release than the 24 August Codex app-server migration appeared in the general product-release stream during this scan.

Recent standing creator-workflow changes remain:

- improved plugin discovery;
- faster segmented long-conversation loading;
- progressive interactive content;
- reusable Skills;
- Work and connected-artifact workflows;
- mutable Project memory and scheduled/webhook workflows in the ChatGPT-specific changelog.

### Google

No materially newer 27 August Workspace release displaced the August creator-workflow set already logged.

Standing signals remain:

- Ask Gemini in Chat;
- Workspace Studio;
- Sheets Canvas;
- interactive Gemini simulations/models;
- Gemini Notebook copying;
- Slides-to-Vids transformation;
- Meet hardware AI capture controls.

## Deep Drift Research Position

Creator platforms are increasingly collapsing:

```text
SEARCH
CHAT
SOURCE VIEWER
ARTIFACT EDITOR
PROJECT MEMORY
```

into one surface.

That is convenient.

It is also a provenance trap if visual co-location is mistaken for causal equivalence.

The serious question is no longer:

> Can I open the file without leaving the chat?

It is:

> Which exact file state is visible, which state is active for reasoning, which source version supports the claim, and will that relationship still be reconstructable later?

Therefore:

```text
CO-LOCATED
!=
COHERENT

VISIBLE
!=
ACTIVE

CITED
!=
VERSION-LOCKED

ONE SURFACE
!=
ONE STATE
```

That is the new Deep Drift boundary.

## Evidence Boundary

Platform facts in this report are grounded in first-party Microsoft, Anthropic, OpenAI, and Google release/documentation sources current as of 27 August 2026. ICAIF, its failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. Microsoft Learn, **Microsoft 365 Copilot release notes**, August 25, 2026 - Word, Excel, PowerPoint, and PDF files opening directly within Copilot Chat.
2. Anthropic, **Claude in Chrome is generally available**, August 26, 2026.
3. Anthropic, **Claude gets its own browser in Cowork**, August 26, 2026.
4. Anthropic, **Claude's memory works everywhere, and you decide what's in it**, August 25, 2026.
5. OpenAI, **Product Release Notes**, current through August 24, 2026.
6. Google Workspace Updates, August 2026 archive.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
