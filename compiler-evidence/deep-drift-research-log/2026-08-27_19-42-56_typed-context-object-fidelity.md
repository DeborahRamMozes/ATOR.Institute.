# Deep Drift Research Update

## Typed Context Object Fidelity: Visual Evidence, Screenshots, and Structured Lists as First-Class AI Grounding State

**Research date:** Thursday, 27 August 2026  
**ĀTØR observation time:** 19:42:56 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan. No newer same-day launch displaced the latest memory, browser-agent, Skills, mini-app, or artifact-editing updates already logged. One materially useful Microsoft creator-workflow pattern was identified as new-to-log.

## Executive Summary

Microsoft 365 Copilot's recent creator-workflow changes show a broader architectural shift: **context is becoming typed and structurally preserved instead of being flattened into plain text before reasoning.**

Three Microsoft features make the pattern visible:

- Copilot can surface **rich images from files and meetings directly inside responses** and link users back to the underlying source context.
- Copilot Chat on Windows includes a built-in **screenshot capture** path so a user can provide visual context directly inside a prompt without performing an external capture/upload ritual.
- Agent Builder can use a **SharePoint List as a structured knowledge source**, preserving list-shaped project data as grounding rather than forcing the maker to first convert it into prose.

These changes are not brand-new on 27 August, so they should not be mislabeled as today's launch. They are, however, materially important and had not yet been isolated as one Deep Drift state problem.

The emerging architecture is:

```text
SOURCE OBJECT
-> OBJECT TYPE PRESERVED
-> CONTEXT SELECTION
-> MODEL / AGENT GROUNDING
-> RESPONSE / ARTIFACT
-> SOURCE REFERENCE
```

instead of:

```text
EVERYTHING
-> FLATTEN TO TEXT
-> MODEL
```

This creates a new benchmark family:

**Typed Context Object Fidelity (TCOF)**

The central research question is:

> When an AI system reasons over images, screenshots, meetings, lists, tables, files, and other structured objects, does it preserve the semantics of the object type, or does the object become a lossy text approximation somewhere inside the workflow?

## New Deep Drift Construct: Typed Context Object Fidelity

### Definition

**Typed Context Object Fidelity (TCOF)** measures whether the distinctive semantics of a source object's modality and structure survive across retrieval, grounding, reasoning, citation, mutation, and artifact generation.

A typed context object may be:

- image;
- screenshot;
- chart;
- meeting visual;
- table;
- SharePoint List;
- spreadsheet range;
- slide;
- PDF region;
- email thread;
- notebook source;
- future structured app object.

The system should preserve not merely the object's extracted text, but the properties that make that object meaningful.

## Core Distinction

```text
CONTENT EXTRACTED
!=
OBJECT SEMANTICS PRESERVED
```

Examples:

```text
IMAGE
!= IMAGE CAPTION

CHART
!= OCR TEXT

SHAREPOINT LIST
!= BULLET LIST

SCREENSHOT
!= DESCRIPTION OF SCREENSHOT

MEETING VISUAL
!= TRANSCRIPT
```

The closer creator systems move toward multimodal and structured grounding, the less acceptable it becomes to evaluate only whether some textual representation survived.

## Delta 1: Rich Images Inline in Copilot Responses

Microsoft documents that Copilot can surface relevant images from files and meetings directly within responses on Windows and web. Users can inspect the image in the answer and click through to its source file or meeting context.

This changes the evidence surface:

```text
SOURCE FILE / MEETING
-> VISUAL OBJECT
-> INLINE RESPONSE EVIDENCE
-> SOURCE NAVIGATION
```

The user no longer has to leave the answer, manually locate the visual, and decide whether the model described it correctly.

That reduces navigation burden.

But it creates a sharper fidelity requirement: the image shown beside a claim should actually be the visual object supporting that claim.

### New failure classes

**Visual-Evidence Claim Drift**  
The response places an image near a claim even though the image does not materially support that claim.

**Image-Version Drift**  
The surfaced visual comes from an older or alternate source version while the text answer relies on newer state.

**Meeting-Visual Attribution Loss**  
An image originating in a meeting is shown without enough provenance to reconstruct which meeting, deck, participant share, or time interval produced it.

**Visual Context Flattening**  
The model reasons only over extracted text/caption data while the UI gives the human the impression that the full visual structure was used.

## Delta 2: Screenshot Capture as Prompt-State Acquisition

Microsoft also documents a built-in screenshot capture path in Copilot Chat on Windows.

This removes several manual steps:

```text
OLD
CAPTURE OUTSIDE APP
-> SAVE / COPY
-> UPLOAD
-> EXPLAIN
-> MODEL

NEW
COPILOT
-> CAPTURE SCREEN REGION
-> ATTACH TO PROMPT
-> MODEL
```

For Deep Drift, the screenshot is not merely an attachment.

It is a **user-selected visual-state snapshot**.

The selection operation itself carries meaning:

- which screen;
- which region;
- which moment;
- which app state;
- which visual object was intentionally excluded.

### New failure classes

**Screenshot Boundary Drift**  
The captured region includes or excludes visual state differently from what the user intended.

**Temporal Screenshot Staleness**  
The captured image reflects an earlier UI state than the user's current task.

**Screenshot-to-Action Overreach**  
The model infers actionable state from a screenshot that is only descriptive or partial.

**Visual Snapshot Provenance Loss**  
A later artifact depends on a screenshot, but the origin app, capture time, region, or screen state cannot be reconstructed.

## Delta 3: SharePoint Lists as Structured Agent Knowledge

Microsoft Agent Builder supports SharePoint Lists as a knowledge source for agents. The current documented release allows an agent to reference a list with up to 20,000 items alongside other knowledge-source types; list attachments and lookup columns are not included in that initial capability.

The architectural significance is greater than the product checkbox.

A SharePoint List carries typed structure:

```text
ROWS
COLUMNS
FIELD TYPES
ITEM IDENTITY
STATUS VALUES
OWNERSHIP
DATES
ORDERING
FILTERABLE STATE
```

Grounding directly on that object is different from converting it into paragraphs.

### New failure classes

**List-to-Prose Structural Loss**  
The system retrieves list content but loses relationships among fields, items, status values, or identifiers.

**Unsupported-Field Blindness**  
A workflow behaves as if the entire list object is available even though attachments or lookup columns are unsupported.

**Structured-Source Partiality**  
An answer appears grounded in a list while key information lives in unsupported substructures.

**Row-Identity Collapse**  
Facts from multiple list items are merged as if they describe one record.

**Schema-Semantic Drift**  
A field name survives retrieval but its actual business meaning, validation rule, or controlled vocabulary does not.

## New Deep Drift Benchmark: Typed Context Object Preservation Test

Create a controlled evidence package containing four object types.

```text
A. IMAGE
   diagram with spatial arrows and labels

B. SCREENSHOT
   dashboard with selected visual region

C. SHAREPOINT-LIKE LIST
   structured rows with owner/status/date relationships

D. PLAIN TEXT
   prose summary intentionally missing structural detail
```

Run equivalent questions against each source.

### Test questions

- "Which component depends on the red node?"
- "What exactly is selected on screen?"
- "Which open item belongs to Owner B and is overdue?"
- "Which claim can be proven only from structure rather than prose?"

Then generate a downstream brief or presentation.

### Measure

- object-type preservation;
- spatial-relation fidelity;
- selection-boundary fidelity;
- row/field relationship fidelity;
- source-object attribution;
- unsupported-field disclosure;
- claim-to-object alignment;
- artifact-level semantic survival;
- human correction minutes.

## New Metric: Typed Semantic Survival Ratio

```text
TSSR =
required object-specific semantics preserved
/
all required object-specific semantics present in source
```

## New Metric: Claim-to-Object Evidence Alignment

```text
COEA =
material claims supported by the displayed / cited object
/
all material object-grounded claims
```

## New Metric: Structured Relationship Preservation

```text
SRP =
required source relationships preserved in reasoning/output
/
all required source relationships
```

## New Metric: Unsupported-Structure Disclosure Fidelity

```text
USDF =
runs where unsupported object substructures are disclosed
/
all runs affected by unsupported substructures
```

## Why This Matters for Deep Drift Research

A great deal of current AI reliability work still assumes that context is a bag of tokens.

Creator workflows are making that assumption increasingly obsolete.

Modern context is becoming:

```text
TEXT
+ IMAGE
+ SCREENSHOT
+ TABLE
+ LIST
+ CHART
+ FILE OBJECT
+ MEETING OBJECT
+ APP OBJECT
```

Each type carries its own grammar.

If the system reduces all of them to text internally, creator workflow quality becomes a hidden battle between rich source state and lossy representation.

Deep Drift should therefore distinguish:

```text
SOURCE ACCESS
!=
SOURCE REPRESENTATION FIDELITY
```

and:

```text
MULTIMODAL INPUT
!=
MULTIMODAL REASONING
```

The UI can show an image while the reasoning path may still be mostly textual. A structured list can be connected while important relationship types are unavailable. A screenshot can be captured while the system lacks the temporal state needed to interpret it safely.

The object type itself must become part of provenance.

## Typed Context Object Provenance Card

Deep Drift should record, where possible:

```text
CONTEXT_OBJECT_CARD

object_id:
object_type:
source_system:
source_location:
source_version:
capture_or_retrieval_time:
selection_scope:
structure_available:
structure_missing:
permissions:
model_representation:
claims_supported:
derived_artifacts:
unknown_fields:
```

If the platform does not expose a field, mark:

`UNKNOWN / NOT EXPOSED`

## Relation to Existing ĀTØR Seven-Layer State Protocol Family

### MMSF - Mounted Memory State Fidelity
Typed source objects should not be silently converted into global memory facts without preserving source scope.

### PSMC - Persistent State Mutation Control
If a grounded object later drives edits or actions, the source object's current state should be preserved in the mutation record.

### SSRP - Sync-Back State Reconciliation
Displayed visual/list state and underlying source-system state must reconcile.

### ASRF - Agent State Reconstruction Fidelity
The object -> retrieval -> reasoning -> claim -> artifact chain should remain reconstructable.

### PVP - Procedural-Version Provenance
Object parsers, connectors, schemas, and source-handling rules can change and require dated provenance.

### ALRTSF - Artifact Lineage & Round-Trip State Fidelity
Typed source semantics should survive into generated documents, slides, dashboards, and exports.

### SCRR - Session Continuity, Retrieval & Rehydration
A later session should retrieve the same relevant typed object rather than forcing the human to re-explain its structure.

## Broader Fresh Platform Scan

### Microsoft

No release batch newer than 25 August surfaced during this scan. The new-to-log pattern in this report comes from the July 29 Microsoft 365 Copilot release set:

- rich images from files and meetings surfaced inline in responses;
- built-in screenshot capture in Copilot Chat;
- SharePoint List support as structured knowledge in Agent Builder;
- redesigned Copilot Notebook Overview with one-click artifact creation.

Recent August 25 Microsoft signals remain:

- chat-to-Page auto-creation and mobile Page steering;
- multi-artifact Notebook generation;
- multimodal Capture;
- Python-backed Excel editing;
- email/meeting grounding;
- inline Word/Excel/PowerPoint/PDF inspection.

### OpenAI

No newer 27 August public release displaced the latest changes already recorded.

Standing signals remain:

- Skills and reusable Templates;
- template state split between web and local Codex;
- selection-scoped artifact refinement;
- mutable Project memory;
- webhook-triggered Work tasks;
- native connected artifact editing;
- long-conversation segmented loading;
- cross-device cloud Work continuation.

### Anthropic

No first-party update newer than 26 August surfaced.

Standing signals remain:

- Claude in Chrome generally available;
- autonomous browser actions with safety classification;
- Cowork built-in browser;
- shared memory across chat and Cowork;
- Skills API;
- Files API;
- mounted memory and richer session observability.

### Google

No materially newer 27 August Workspace launch surfaced in the target creator categories.

Standing signals remain:

- Workspace Studio;
- Sheets Canvas read-write mini-apps;
- Ask Gemini in Chat;
- interactive Gemini simulations/models;
- Gemini Notebook copying;
- Slides-to-Vids;
- Meet hardware AI capture controls.

## Deep Drift Research Position

The creator stack is moving from **token context** toward **typed context**.

That sounds obvious only after the infrastructure finally starts doing it.

The stronger model is:

```text
CONTEXT QUALITY
=
SOURCE FRESHNESS
+ SOURCE AUTHORITY
+ OBJECT TYPE
+ STRUCTURE
+ MODALITY
+ SELECTION SCOPE
+ PROVENANCE
```

Therefore:

```text
IMAGE PRESENT
!=
VISUAL SEMANTICS USED

LIST CONNECTED
!=
LIST STRUCTURE PRESERVED

SCREENSHOT ATTACHED
!=
SCREEN STATE UNDERSTOOD

MULTIMODAL UI
!=
MULTIMODAL CAUSAL FIDELITY
```

The next creator reliability problem is not merely whether the model can ingest more things.

It is whether those things remain themselves long enough to matter.

## Evidence Boundary

Platform capability claims in this report are grounded in current first-party Microsoft 365 Copilot release notes and fresh checks of OpenAI, Anthropic, and Google first-party release/documentation sources. TCOF, failure classes, metrics, provenance cards, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. Microsoft Learn, **Microsoft 365 Copilot release notes**, July 29, 2026 - rich images inline, screenshot capture, SharePoint List support in Agent Builder, and Notebook Overview artifact creation: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
2. OpenAI Help Center, **ChatGPT Release Notes**, current through August 25, 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
3. OpenAI Help Center, **Creating and editing documents, spreadsheets, and presentations with ChatGPT Work**, updated August 27, 2026.
4. Anthropic product announcements, current through August 26, 2026: https://claude.com/blog-category/announcements
5. Google Workspace Updates, August 2026 archive: https://workspaceupdates.googleblog.com/2026/08/

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
