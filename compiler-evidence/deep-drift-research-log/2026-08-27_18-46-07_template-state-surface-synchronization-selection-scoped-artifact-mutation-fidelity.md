# Deep Drift Research Update

## Template-State Surface Synchronization and Selection-Scoped Artifact Mutation Fidelity

**Research date:** Thursday, 27 August 2026  
**ĀTØR observation time:** 18:46:07 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan. One materially updated OpenAI artifact-workflow surface identified; no newer Anthropic, Google, or Microsoft release displaced the latest items already logged.

## Executive Summary

OpenAI's ChatGPT Work documentation was updated on 27 August 2026 and now makes two creator-workflow boundaries unusually explicit.

First, reusable **Templates** are not one synchronized state across ChatGPT surfaces. OpenAI says templates created on the web and templates saved locally by Codex are **separate and do not automatically sync**.

Second, the desktop app supports **selection-scoped refinement** of supported documents, spreadsheets, presentations, and PDFs: the user can select a specific claim, chart, or slide and then request a change or source check against that selected object.

Together these changes expose two distinct creator-state problems:

```text
REUSABLE TEMPLATE EXISTS
!=
SAME TEMPLATE STATE EXISTS ON EVERY SURFACE
```

and:

```text
ARTIFACT OPEN
!=
MUTATION TARGET PRECISELY BOUNDED
```

This report formalizes two Deep Drift benchmark families:

- **Template-State Surface Synchronization Fidelity (TSSSF)**
- **Selection-Scoped Artifact Mutation Fidelity (SSAMF)**

The broader platform scan found no newer first-party launch in persistent memory, reusable Skills, mini-app builders, chat-to-document export, DOCX/PDF generation, or copy-paste/export fixes beyond the late-August signals already logged.

## Delta 1: Reusable Template State Is Surface-Specific

OpenAI now documents a reusable Template as more than a reference file.

A template combines:

- a reference artifact;
- reusable instructions;
- an expected output pattern.

Supported sources can include:

- Word `.docx`;
- Excel `.xlsx`;
- PowerPoint `.pptx`;
- Google Docs;
- Google Sheets;
- Google Slides.

The important state boundary is explicit:

> Templates created on the web and templates saved locally by Codex are separate and do not automatically sync.

For Deep Drift, this means template state must be treated independently from:

- conversation state;
- Project state;
- file state;
- Skill state.

A user can therefore have:

```text
WEB
Template T v3

DESKTOP / CODEX
Template T v1

SAME USER
SAME PROJECT
SAME TASK INTENT
DIFFERENT PROCEDURAL-ARTIFACT STATE
```

The visible workflow may look continuous while the reusable production specification has diverged.

## New Construct: Template-State Surface Synchronization Fidelity

### Definition

**Template-State Surface Synchronization Fidelity (TSSSF)** measures whether reusable artifact-production state remains discoverable, current, equivalent, and traceable across web, desktop, Codex, Library, local storage, and team-shared plugin surfaces.

### Template State Card

Deep Drift should record:

```text
TEMPLATE_STATE_CARD

template_name:
template_id:
template_version:
reference_artifact:
reference_artifact_version:
instruction_version:
expected_output_contract:
created_surface:
installed_or_saved_surfaces:
linked_cloud_sources:
local_dependencies:
sharing_mode:
plugin_package:
last_verified:
unknown_fields:
```

### New failure classes

**Template Surface Split**  
The same conceptual template exists separately on web and desktop with different current state.

**Template Version Divergence**  
One surface receives an updated template while another retains an older copy.

**Reference-Link Drift**  
A template still points to a Google Workspace reference whose content, permissions, or ownership has changed.

**Template/Skill Confusion**  
A reusable artifact template and a reusable procedural Skill are treated as equivalent even though they carry different state.

**Local Template Orphaning**  
A Codex-local template participates in artifact creation but is unavailable when the user continues on web/mobile.

**Shared Template Permission Drift**  
A team receives a plugin-packaged template but lacks access to the linked reference file or service required to execute it.

**Template Provenance Loss**  
A finished artifact cannot later be tied to the exact template and reference version that produced it.

## Why Templates Are Not Just Files

The reusable template object contains three state layers:

```text
REFERENCE ARTIFACT
+ REUSABLE INSTRUCTIONS
+ EXPECTED OUTPUT CONTRACT
```

That means a template behaves partly like a file and partly like a procedure.

Deep Drift should therefore classify it as **hybrid procedural-artifact state**.

This matters because updating only the source file may not update the reusable instructions, while updating only the instructions may not update the reference artifact.

The two can drift independently.

## New Metric: Template Surface Parity Rate

```text
TSPR =
surfaces containing intended current template state
/
all eligible surfaces tested
```

## New Metric: Template Version Convergence Rate

```text
TVCR =
surfaces using the same intended template version
/
all surfaces where that template exists
```

## New Metric: Template Dependency Availability

```text
TDA =
template runs with all referenced files and services available
/
all template runs
```

## Delta 2: Selection-Scoped Artifact Refinement

OpenAI's updated Work documentation says the desktop app can open supported documents, spreadsheets, presentations, and PDFs from the sidebar.

The user can select a specific object and then request a scoped operation, for example:

- highlight a claim and ask for its source;
- select a chart and request a clearer label;
- mark a slide and request another layout.

This is architecturally important.

The system is moving from:

```text
OPEN WHOLE ARTIFACT
-> NATURAL-LANGUAGE EDIT
```

toward:

```text
OPEN ARTIFACT
-> SELECT TARGET OBJECT
-> STATE INTENT
-> BOUNDED MUTATION / INSPECTION
```

The selection itself becomes part of the execution state.

## New Construct: Selection-Scoped Artifact Mutation Fidelity

### Definition

**Selection-Scoped Artifact Mutation Fidelity (SSAMF)** measures whether an AI file-editing workflow correctly binds the user's natural-language instruction to the selected artifact region or object, without expanding the mutation to unrelated state.

The selected target may be:

- paragraph;
- claim;
- table;
- cell range;
- chart;
- slide;
- visual object;
- PDF region.

### Core distinction

```text
USER INTENT CLEAR
!=
MUTATION TARGET CLEAR
```

Selection can reduce ambiguity, but only if the runtime preserves selection identity correctly.

## New Failure Classes

**Selection Target Drift**  
The system modifies a neighboring or semantically similar object rather than the selected object.

**Selection Scope Expansion**  
The selected object is changed correctly, but related content outside the selection is also modified.

**Selection/Instruction Conflict**  
The selected region suggests a narrow operation while the wording suggests a broader operation, and the system silently chooses one interpretation.

**Selection Identity Loss Across Tool Route**  
The UI knows which chart, slide, or claim is selected, but the downstream editing tool receives only the artifact, not the precise selected object.

**Source-Check Scope Drift**  
A selected claim is checked against sources, but the response evaluates broader surrounding text and returns a misleading source judgment.

**PDF Region Ambiguity**  
A visible PDF selection does not map cleanly to extracted text/object structure, producing mismatch between human selection and model-accessible content.

## Deep Drift Benchmark: Selection-Bounded Mutation Test

Prepare a structured artifact containing repeated or similar elements:

```text
DOCX
- two paragraphs containing similar claims

XLSX
- two charts with similar titles

PPTX
- two slides with the same visual template

PDF
- repeated terminology on different pages
```

Procedure:

1. select only one controlled object;
2. issue a narrow mutation;
3. inspect the selected object;
4. inspect nearby unselected objects;
5. repeat with an ambiguous instruction;
6. repeat after reopening the artifact;
7. compare direct-selection workflow against whole-file natural-language editing.

### Metrics

- target identity accuracy;
- mutation-scope containment;
- neighboring-state survival;
- source-check locality;
- reopen-selection continuity;
- human repair minutes;
- artifact lineage completeness.

## New Metric: Selection Target Accuracy

```text
STA =
operations applied to intended selected object
/
all selection-scoped operations
```

## New Metric: Mutation Scope Containment

```text
MSC =
selection-scoped operations leaving unrelated state unchanged
/
all selection-scoped operations
```

## New Metric: Selection-to-Tool Transfer Fidelity

```text
STTF =
runs where selected object identity survives the full tool route
/
all selection-scoped tool executions
```

## Why This Matters for Deep Drift

The creator stack is becoming more precise in one direction and more fragmented in another.

Precision increases because the user can point at the exact artifact object.

Fragmentation increases because reusable templates can occupy different states across web and desktop.

So the same creator workflow may now depend on:

```text
TEMPLATE STATE
+ ARTIFACT STATE
+ USER SELECTION STATE
+ TOOL ROUTE
+ SURFACE
```

That extends the existing Deep Drift model beyond simple file editing.

## Relation to the ĀTØR Seven-Layer State Protocol Family

### MMSF - Mounted Memory State Fidelity
Template-linked context and artifact context must remain correctly scoped.

### PSMC - Persistent State Mutation Control
Selection-scoped edits should generate bounded mutation records.

### SSRP - Sync-Back State Reconciliation
Web templates, local Codex templates, cloud artifacts, and local artifacts must reconcile where continuity is expected.

### ASRF - Agent State Reconstruction Fidelity
The template, selected object, tool route, mutation, and verification chain should remain reconstructable.

### PVP - Procedural-Version Provenance
Template versions and reusable instructions require explicit version tracking.

### ALRTSF - Artifact Lineage & Round-Trip State Fidelity
Outputs must preserve lineage to template version, source reference, and subsequent edits.

### SCRR - Session Continuity, Retrieval & Rehydration
A resumed workflow must verify the active template state rather than assuming the same template exists on every surface.

## Broader Platform Scan

### OpenAI

The materially updated first-party item in this scan is the ChatGPT Work artifact documentation, updated on 27 August 2026.

Key current signals:

- reusable templates built from reference files plus reusable instructions;
- web and local Codex template stores are separate;
- templates do not automatically sync between those surfaces;
- templates can be packaged in plugins for workspace distribution;
- Google Workspace references remain permission-dependent;
- desktop file preview supports selection-scoped refinement;
- native Google Docs, Sheets, and Slides editing remains available where supported;
- Excel direct control remains a separate Codex/add-in path;
- PowerPoint remains outside that desktop Work flow at launch.

### Anthropic

No first-party release newer than 26 August surfaced in this scan.

Standing signals remain:

- Claude in Chrome generally available;
- autonomous browser actions with safety classification;
- Cowork built-in browser;
- cross-surface Cowork memory;
- Skills API;
- Files API;
- mounted memory and session observability.

### Google

No materially newer 27 August Workspace launch surfaced.

Standing signals remain:

- Workspace Studio;
- Sheets Canvas read-write mini-apps;
- Ask Gemini in Chat;
- Gemini interactive simulations;
- Notebook copying;
- Slides-to-Vids;
- Meet hardware note-taking controls.

### Microsoft

No release batch newer than 25 August surfaced.

Standing signals remain:

- Copilot Pages and mobile steering;
- Copilot Notebooks as multi-artifact generators;
- email/meeting grounding;
- inline file inspection;
- multimodal Capture;
- Python-backed Excel editing.

## Deep Drift Research Position

Reusable creator systems now contain at least two separate state problems:

```text
PROCEDURE / TEMPLATE DISTRIBUTION
and
PRECISE ARTIFACT MUTATION
```

A platform can improve editing precision while still requiring the human to manually reconcile the reusable production specification across surfaces.

Therefore:

```text
SAME TEMPLATE NAME
!=
SAME TEMPLATE STATE

SAME ACCOUNT
!=
SAME TEMPLATE LIBRARY

ARTIFACT SELECTED
!=
SELECTION PRESERVED THROUGH TOOL EXECUTION

PRECISE UI
!=
PRECISE BACKEND MUTATION
```

The human should not have to remember which machine has the current template.

And when the human points at one chart, the machine should resist the ancient AI instinct to "helpfully" renovate the entire building.

## Evidence Boundary

Platform facts are grounded in current first-party OpenAI documentation updated 27 August 2026, with fresh first-party Anthropic, Google, and Microsoft checks for comparison. TSSSF, SSAMF, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, **Creating and editing documents, spreadsheets, and presentations with ChatGPT Work**, updated 27 August 2026: https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work
2. OpenAI Help Center, **Skills in ChatGPT**, current as of 27 August 2026: https://help.openai.com/en/articles/20001066
3. OpenAI Academy, **Using skills**, current as of 27 August 2026: https://openai.com/academy/skills/
4. Anthropic, **Claude in Chrome is generally available**, 26 August 2026.
5. Google Workspace Updates, August 2026 archive.
6. Microsoft Learn, Microsoft 365 Copilot Release Notes, current through 25 August 2026.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
