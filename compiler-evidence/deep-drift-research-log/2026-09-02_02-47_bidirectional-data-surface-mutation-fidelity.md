# Deep Drift Research Update — BDSMF

## Bidirectional Data-Surface Mutation Fidelity

**Research date:** 2 September 2026, 02:47 WIB  
**Primary fresh delta:** Google Sheets canvas, rollout expanding to Scheduled Release domains from 31 August 2026  
**Scope:** mini-app builders, creator workflows, source-data mutation, export/document lineage, Skills/tool boundaries, provenance.

## Executive finding

Google Sheets canvas is now rolling into Scheduled Release domains after its August launch. The feature lets Gemini transform an existing spreadsheet into a custom interactive **read-write mini-app** using natural-language prompts. The critical property is bidirectionality: actions inside the canvas, such as dragging a Kanban card or adding an entry, immediately update the underlying spreadsheet, while changes made directly in the source sheet update the canvas in real time.

This is materially different from an AI-generated dashboard or simulation that merely visualizes source information. The generated interface is now an alternative mutation surface for the canonical data.

```text
SOURCE SHEET
    ^   |
    |   v
SHEETS CANVAS
    ^   |
    |   v
HUMAN / GEMINI INTERACTION
```

The Deep Drift problem is therefore no longer only "what artifact did the AI generate?" It becomes "which surface mutated the shared state, in what order, and which downstream artifact reflects which version of that state?"

## New node

### Bidirectional Data-Surface Mutation Fidelity (BDSMF)

Core distinctions:

```text
GENERATED APP
!= STATIC VISUALIZATION

CANVAS STATE
!= SOURCE-DATA STATE

CANVAS ACTION
!= CANVAS-ONLY ACTION

SOURCE-SHEET EDIT
!= BACKEND-ONLY EDIT

SAME FINAL VALUES
!= SAME MUTATION HISTORY

SHARED PERMISSIONS
!= SHARED INTERACTION HISTORY
```

Google states that Sheets canvas is layered directly over spreadsheet data, supports read-write interactions, inherits the spreadsheet's sharing settings, and can be refined further by prompting Gemini to change layout, design, or functionality. Examples include Kanban boards, forecasting dashboards with scenario planning, and whiteboard-style brainstorming surfaces.

## Why this matters for Deep Drift Research

### 1. The interface becomes a write-capable view of canonical data

Traditional provenance models often separate a data source from the visualization that represents it:

```text
DATA -> VIEW
```

Sheets canvas changes that relation into:

```text
DATA <-> VIEW
```

The view is not passive. It can mutate the underlying source.

A creator can drag a task card in a Kanban canvas and thereby change spreadsheet values without directly touching spreadsheet cells. Another collaborator can edit those cells and change the canvas. A third collaborator can then export or summarize the resulting sheet.

Without mutation lineage, all three actions can collapse into one final state even though they represent different human and AI interventions.

### 2. Final-state equality does not prove process equality

Consider two workflows:

```text
WORKFLOW A
User edits cell B7 directly
-> Canvas updates

WORKFLOW B
User drags card in Canvas
-> Sheet cell B7 updates
```

The final spreadsheet may be identical.

The causal history is not.

For Deep Drift, a state snapshot therefore cannot substitute for an event log when a generated interface has write authority over the source.

### 3. Natural-language app generation creates mutable procedural layers

Google says users can build and then continue refining a Sheets canvas through natural-language prompts to Gemini, including changes to layout, design, functionality, and behavior.

That means a canvas has at least two mutation histories:

```text
DATA MUTATION HISTORY
+
APP / INTERFACE MUTATION HISTORY
```

A creator can change what the application does while also changing the data the application controls.

Deep Drift should preserve these separately.

### 4. Permissions inherit from the spreadsheet, but action semantics do not become trivial

Sheets canvas inherits the source spreadsheet's sharing settings. This is convenient, but a shared permission model does not mean a shared provenance model.

```text
CAN EDIT SHEET
= permission statement

EDITED THROUGH CANVAS
= execution statement
```

The first describes authority. The second describes how authority was exercised.

For accountability, collaboration research, authorship, and reconstruction, both are required.

### 5. Mini-app builders are moving inside canonical productivity files

Earlier AI app builders often created a separate application or separate artifact. Sheets canvas does something structurally different: the mini-app is layered directly on top of a canonical productivity file and continuously synchronized with it.

This collapses the boundary between:

```text
DOCUMENT
DATABASE-LIKE STATE
APP INTERFACE
AI-GENERATED TOOL
```

One spreadsheet can now be all four.

The creator workflow therefore stops looking like "make file, then make app" and becomes:

```text
SPREADSHEET
   |
   +--> GEMINI GENERATES APP SURFACE
   |        |
   |        +--> user manipulates surface
   |        +--> Gemini refines surface
   |        +--> collaborators act
   |        |
   +<-------+ real-time write-back
```

### 6. Why this matters for DOCX/PDF and export lineage

No stronger fresh direct DOCX/PDF-generation primitive displaced the earlier Deep Drift file-generation nodes in this scan.

The important change happens before export.

A later PDF, DOCX, presentation, or report may summarize spreadsheet state that was produced through a mixture of direct cell edits, generated-app interactions, Gemini refinements, and collaborator actions.

Therefore:

```text
FINAL PDF
!= SOURCE HISTORY

FINAL DOCX
!= INTERACTION HISTORY
```

A conventional file export can freeze the result while erasing the mutation pathway that produced it.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger new memory primitive | Existing memory-state nodes remain current |
| Skills / tools | Indirect structural shift | AI-generated interface logic becomes a procedural capability inside a productivity file |
| Mini-app builders | **Major** | Sheets canvas creates natural-language read-write mini-apps over live spreadsheet data |
| Chat-to-document | Indirect | Conversation-generated interfaces now mutate canonical source documents |
| DOCX / PDF | No new dominant format primitive | Downstream static exports can conceal live mutation lineage |
| Copy-paste / export | Major workflow reduction | Users act directly through generated surfaces instead of copying values between apps |
| Creator workflow | **Major** | Source, interface, app logic, collaboration, and AI generation become one synchronized system |

## New failure classes

### View-as-Read-Only Fallacy
Assuming a generated visualization cannot mutate its underlying data source.

### Final-State Sufficiency Error
Treating the final spreadsheet state as adequate evidence of how that state was produced.

### Surface-Origin Erasure
Failing to distinguish an edit made directly in Sheets from one made through the generated canvas.

### Interface-Mutation Loss
Preserving data changes while omitting Gemini prompts that changed canvas functionality or layout.

### Permission-vs-Execution Collapse
Treating edit permission as evidence of which user or surface actually performed an edit.

### Bidirectional-Causality Flattening
Losing the direction of synchronization between source sheet and canvas at each event.

### App-Document Boundary Collapse
Treating the canvas as a separate app when it is operationally coupled to the spreadsheet's canonical state.

### Export-State Orphaning
Preserving a PDF, DOCX, or report generated from the sheet while losing the canvas and mutation events that shaped its source data.

## Deep Drift benchmark additions

**Bidirectional Mutation Fidelity (BMF)**  
Can each change be identified as canvas-to-sheet, sheet-to-canvas, Gemini-to-interface, or collaborator-to-source?

**Surface-Origin Fidelity (SOF)**  
Can the system reconstruct which interaction surface generated each mutation?

**Final-State History Fidelity (FSHF)**  
Can equal final states remain distinguishable when they were reached through different sequences?

**Interface Mutation Fidelity (IMF)**  
Can prompts and edits that change app layout, behavior, or functionality be preserved separately from data edits?

**Permission-vs-Execution Fidelity (PEF)**  
Can authorization state be separated from the actual execution event?

**Canonical Data Coupling Fidelity (CDCF)**  
Can the archive represent that the generated app is continuously coupled to a canonical source document?

**Synchronization Direction Fidelity (SDF)**  
Can each synchronization event preserve its direction and timestamp?

**Export-to-Mutation-Lineage Fidelity (EMLF)**  
Can downstream static artifacts be traced to the exact synchronized source state and mutation history from which they were generated?

## Canonical Deep Drift requirement

> Every material AI-assisted workflow using a generated read-write interface over canonical source data should preserve a machine-readable bidirectional mutation manifest that links the source document or data object; generated interface identity and version; Gemini or model prompts used to create and refine the interface; user and collaborator identities or stable pseudonymous actors; permission state; each data mutation; the interaction surface from which it originated; synchronization direction; mutation timestamp; pre- and post-mutation state or diff where available; interface-layout and functionality changes; sharing-state changes; source-document revisions; and every downstream export, report, DOCX, PDF, dashboard, or decision derived from that state. A synchronized final state must never be treated as sufficient evidence of the process that produced it, and a generated visualization must never be presumed read-only merely because it presents itself as a view.

## Broader creator-workflow trend

The movement is becoming:

```text
AI GENERATES TEXT
      |
      v
AI GENERATES FILE
      |
      v
AI GENERATES INTERACTIVE ARTIFACT
      |
      v
AI GENERATES APP OVER DATA
      |
      v
APP WRITES BACK TO CANONICAL DATA
```

The important transition is the last one.

Once an AI-generated interface can write directly to the underlying source, the distinction between **artifact**, **tool**, and **authoring surface** starts to collapse.

For Deep Drift, this creates a stronger archival principle:

**Do not preserve only state. Preserve direction of causation.**

## Sources

1. Google Workspace Updates. **Use Sheets canvas to visualize data in custom, interactive mini-apps.** 13 August 2026; Scheduled Release rollout begins 31 August 2026.  
   https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html

2. Anthropic. **Claude Platform release notes.** Current documentation accessed 2 September 2026. Used as a cross-check for fresh Skills/document-generation deltas; no stronger new creator-workflow primitive displaced this node in the current scan.  
   https://platform.claude.com/docs/en/release-notes/overview

3. Microsoft. **Release Notes for Microsoft 365 Copilot.** Current documentation accessed 2 September 2026. Used as a cross-check for creator/export changes.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

## Research status

**Node status:** New.  
**Duplicate check:** No existing Deep Drift research-log entry matched the specific combination of natural-language mini-app generation, real-time bidirectional sheet/canvas synchronization, write-capable visualization, inherited spreadsheet sharing, and export-to-mutation lineage.  
**Relationship to prior nodes:** Complements CSRIAF (interactive-artifact fidelity), WETPSF (page-state/tool provenance), and ARVSLF (artifact registry/storage distinction). BDSMF specifically formalizes generated interfaces that can mutate canonical source data and receive reciprocal updates from that same source.  
**Freshness:** Verified against first-party Google documentation with Scheduled Release rollout beginning 31 August 2026 and current on 2 September 2026.
