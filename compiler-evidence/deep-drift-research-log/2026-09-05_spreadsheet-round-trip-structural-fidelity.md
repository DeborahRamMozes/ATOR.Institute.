# Deep Drift Research Update - SRTSF

## Spreadsheet Round-Trip Structural Fidelity

**Research date:** 5 September 2026  
**Primary newly logged delta:** Google Sheets now preserves grouped pivot-table field configurations when importing and exporting Microsoft Excel `.xlsx` files. Previously, grouped date, time, numeric, or custom pivot fields could disappear from the field list during Excel-to-Sheets translation, forcing manual reconstruction. Google says those groupings are now retained as reusable source fields and accurately preserved through spreadsheet import/export.

## Executive finding

This looks small. It is not small.

A spreadsheet is not merely the values visible in its cells. It also contains a procedural structure: pivot groupings, reusable fields, formulas, ranges, named objects, filters, and interaction logic. When an AI creator workflow generates or edits a spreadsheet and the file crosses between Excel and Google Sheets, preserving cell values while dropping pivot-field configuration is still a provenance failure.

```text
SOURCE XLSX
   |
   +--> values
   +--> formulas
   +--> pivot table
   +--> grouped pivot fields
           |
           v
GOOGLE SHEETS IMPORT
           |
           v
EDIT / AI WORKFLOW
           |
           v
XLSX EXPORT
```

The critical distinction is:

```text
VISIBLE DATA FIDELITY
!= STRUCTURAL WORKBOOK FIDELITY

FILE OPENS
!= WORKBOOK SURVIVED

PIVOT OUTPUT LOOKS RIGHT TODAY
!= PIVOT CONFIGURATION IS REUSABLE TOMORROW

EXPORT SUCCESS
!= ROUND-TRIP EQUIVALENCE
```

The new provenance object is the **round-trip workbook structure**.

## Why this matters for Deep Drift Research

Deep Drift increasingly tests systems that create documents, spreadsheets, presentations, PDFs, mini-apps, and other artifacts directly from chat. A file can now be produced by an LLM, edited in one platform, converted to another format, reopened elsewhere, and then re-ingested by another model. That means the artifact is participating in a loop rather than a one-way export.

```text
MODEL A
-> XLSX
-> GOOGLE SHEETS
-> HUMAN / GEMINI EDIT
-> XLSX
-> MODEL B
```

If structure is lost anywhere in that loop, Model B does not receive the same artifact Model A produced, even when the workbook looks superficially similar.

## 1. Grouped pivot fields are procedural state

Google Sheets can group pivot-table fields by date, time, numeric intervals, or custom categories. The important new behavior is persistence: those grouped fields remain available in the pivot editor as reusable source fields even after they are removed from the active pivot layout.

That means a grouped field has at least two states:

```text
ACTIVE IN CURRENT PIVOT
RETAINED AS REUSABLE SOURCE FIELD
```

A file interchange system that preserves only the currently visible pivot output can still destroy the second state.

For Deep Drift, reusable configuration belongs in provenance.

## 2. Import/export fidelity must include latent structure

Before this update, importing Excel pivot tables with grouped fields into Google Sheets could drop the custom groupings from the field list. The visible spreadsheet might remain partially usable, but the creator had to reconstruct those fields manually.

This is a textbook example of **latent structural loss**:

```text
VISIBLE CELLS = MOSTLY FINE
PIVOT STRUCTURE = DEGRADED
REUSABILITY = LOST
```

The failure may not become obvious until a later edit.

## 3. Round-trip tests are stronger than one-way export tests

A one-way test asks:

```text
Can Platform A export XLSX?
```

A round-trip test asks:

```text
A -> XLSX -> B -> XLSX -> A
```

and then compares:

- values;
- formulas;
- pivot definitions;
- grouped fields;
- formatting;
- named ranges;
- filters;
- charts;
- validation rules;
- comments/notes;
- workbook relationships.

For Deep Drift, the second test is much more meaningful for creator workflows.

## 4. LLM-generated spreadsheets inherit interoperability risk

Gemini can generate downloadable spreadsheet files, and OpenAI is increasingly positioning its models for direct spreadsheet creation. Once models generate real workbook artifacts, cross-platform conversion is part of model evaluation whether vendors call it that or not.

The correct question becomes:

> Did the model create a workbook that survives the tools humans actually use next?

Not merely:

> Did the download button produce an `.xlsx` file?

## 5. Structural loss can masquerade as later model failure

Suppose an LLM creates a pivot with grouped dates.

The user opens it in Sheets, edits it, exports it, and later asks another model to extend the workbook.

If the grouping was lost during conversion, the second model may appear to misunderstand the workbook. In reality:

```text
MODEL B ERROR
may actually be
FORMAT-TRANSLATION LOSS
```

Deep Drift should separate model reasoning failure from artifact-translation failure.

## 6. Copy-paste fidelity and file fidelity are different problems

A copied table may preserve visible values while losing:

- pivot relationships;
- formulas;
- field definitions;
- sort/filter configuration;
- data-validation behavior.

Likewise, a file export may preserve more structure than copy-paste.

Therefore:

```text
COPY-PASTE FIDELITY
!= FILE ROUND-TRIP FIDELITY
```

Both need separate benchmarks.

## 7. PDF is intentionally more destructive

A PDF export can preserve appearance but not spreadsheet execution semantics.

```text
XLSX -> PDF
```

normally destroys or freezes:

- formulas as executable logic;
- pivot configurability;
- reusable grouped fields;
- filters;
- interactive controls;
- cell-level editability.

That is not necessarily a bug. It is a format-class transition.

Deep Drift must distinguish **expected flattening** from **unexpected structural loss**.

## 8. DOCX/PDF generation needs artifact-class awareness

The same research finding can become:

```text
XLSX = executable structured workbook
DOCX = editable narrative document
PDF  = static presentation snapshot
```

A model that can generate all three has not generated equivalent artifacts. The file format defines which semantics can survive.

For Deep Drift, artifact comparisons must therefore be format-aware rather than treating all downloadable outputs as interchangeable "documents."

## 9. Mini-app and spreadsheet convergence increases the stakes

Google Sheets Canvas already allows spreadsheet data to be wrapped in custom interactive read-write mini-apps. The underlying Sheet is no longer only a table; it can act as the data substrate for an interface.

If workbook structure changes during import/export, the mini-app layered on top may behave differently even when the raw values survived.

So:

```text
DATA FIDELITY
-> WORKBOOK STRUCTURE FIDELITY
-> MINI-APP BEHAVIOR FIDELITY
```

These layers are causally connected.

## 10. The fix itself becomes a version boundary

Google began Rapid Release rollout on 25 August 2026, with Scheduled Release rollout planned for 14 September 2026.

Therefore two users importing the same workbook during the rollout window may not observe identical behavior.

```text
USER A -> OLD IMPORTER
USER B -> NEW IMPORTER
```

For Deep Drift, importer/exporter version or rollout state is part of the experiment.

## Fresh category scan

| Area | Current finding | Deep Drift implication |
|---|---|---|
| Memory | No stronger newly published delta since the already logged OpenAI/Anthropic September memory changes | Continue CMPF/EPSTF benchmarks |
| Skills | No stronger delta beyond the already logged shared-Skill propagation and Record & Replay changes | Skill version remains a procedural dependency |
| Mini-app builders | No newer major release in this scan | Sheets Canvas, ChatGPT Sites, MCP Apps remain key convergence points |
| Chat-to-document | No newer same-hour launch | Direct file generation remains the baseline trend |
| DOCX/PDF | No new direct format-generation launch found | Format-aware provenance remains required |
| Copy-paste/export | **Newly logged structural fix** | Excel/Sheets grouped pivot fields now survive import/export more faithfully |
| Creator workflow | **Important structural trend** | Artifact evaluation is shifting from generation fidelity to round-trip workflow fidelity |

## New failure classes

### File-Opens-Equals-Fidelity Fallacy
Assuming successful opening proves the workbook survived intact.

### Visible-Cells-Equals-Workbook Fallacy
Treating displayed values as the complete spreadsheet artifact.

### One-Way-Export Fallacy
Testing only whether a file can be produced, not whether it can survive conversion and return.

### Later-Model-Blame Error
Attributing missing workbook structure to the model currently editing the file when the loss occurred during an earlier import/export step.

### Static-Export-Equals-Structured-Artifact Fallacy
Treating PDF or copied tables as equivalent to an executable workbook.

## Deep Drift benchmark additions

**Workbook Structural Preservation Fidelity (WSPF)**  
Does import/export preserve formulas, pivots, grouped fields, named structures, validation, filters, and other latent workbook state?

**Round-Trip Artifact Fidelity (RTAF)**  
How closely does an artifact match its original after crossing another platform and returning to its original format?

**Latent Configuration Preservation Fidelity (LCPF)**  
Are reusable but currently inactive configurations preserved, such as grouped pivot fields that are not in the active layout?

**Format-Class Transition Fidelity (FCTF)**  
Does the archive distinguish expected semantic flattening caused by conversion to PDF/DOCX from unintended loss inside supposedly equivalent spreadsheet formats?

**Downstream Model Attribution Fidelity (DMAF)**  
Can later model errors be separated from structural information that disappeared before the model received the artifact?

## DRPA-1.0 protocol additions

### ROUND-TRIP ARTIFACT FIDELITY RULE

> Evaluate creator artifacts through at least one realistic downstream-open/edit/export loop when interoperability materially affects use. Successful file creation is not sufficient evidence of workflow fidelity.

### LATENT WORKBOOK STRUCTURE RULE

> Preserve and test workbook structures that may not be visible in the current rendered sheet, including grouped pivot fields, reusable fields, formulas, names, validations, filters, and other edit-time configuration.

### TRANSLATION-LOSS ATTRIBUTION RULE

> When a downstream model appears to omit or misunderstand spreadsheet structure, inspect prior import/export transitions before classifying the event as model reasoning failure.

### FORMAT-CLASS SEPARATION RULE

> Treat XLSX, Google Sheets, DOCX, PDF, copied tables, and interactive spreadsheet mini-apps as different artifact classes with different preservation guarantees. Do not compare them as semantically equivalent outputs merely because they display similar content.

### ROLLOUT-STATE INTEROPERABILITY RULE

> When a file-conversion fix is rolling out gradually, record the observed platform state or test date. Two accounts tested during different rollout phases must not be assumed to use the same importer/exporter behavior.

## Canonical Deep Drift requirement

> Treat file generation as the beginning of artifact evaluation, not the end. Preserve and test the structures that survive after the artifact crosses real creator tools, formats, and model surfaces.

## Deep Drift principle

> **A file that survives opening may still have lost its memory of how it works.**

Operationally:

> **Round-trip the artifact before declaring it portable.**

## Current source verification

### Google Workspace
Google's first-party Workspace Updates documentation states that grouped pivot-table fields are now retained as reusable source fields in Google Sheets and that grouped field configurations are accurately preserved when importing/exporting Microsoft Excel `.xlsx` files. Rapid Release rollout started 25 August 2026; Scheduled Release rollout starts 14 September 2026.

### OpenAI
OpenAI's current public ChatGPT release notes still list the 3 September 2026 GPT-6 Astra release as the latest major creator-workflow release. Astra's document, spreadsheet, presentation, long-horizon, app, memory, and tooling changes are already represented in recent Deep Drift nodes.

### Anthropic
Anthropic's current memory and Skills documentation remains fresh through 3-5 September 2026. Cross-provider memory migration, chat search/memory boundaries, shared Skill update propagation, and Word/PDF artifact Skills are already represented in prior Deep Drift nodes.

## Sources

1. Google Workspace Updates. **Preserve and reuse grouped pivot table fields in Google Sheets.** 25 August 2026. Documents grouped-field persistence and improved Microsoft Excel `.xlsx` import/export interoperability.  
   https://workspaceupdates.googleblog.com/2026/08/preserve-and-reuse-grouped-pivot-table-fields-in-Google-Sheets.html

2. Google Workspace Updates. **2026 Workspace Updates feed.** Current September 2026 feed confirming surrounding creator-workflow releases and rollout timing.  
   https://workspaceupdates.googleblog.com/2026/

3. OpenAI Help Center. **ChatGPT Release Notes.** Current as of 5 September 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

4. Anthropic Help Center. **Use Claude's chat search and memory to build on previous context.** Current September 2026 documentation.  
   https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context

## Research status

**Node status:** New to the Deep Drift research log.  
**Freshness classification:** Newly logged recent interoperability fix; underlying Google release dated 25 August 2026 and still inside its staged rollout window.  
**Duplicate check:** The research-log directory was inspected; no existing node title or path was found for Excel/Google Sheets grouped pivot-field round-trip preservation as a dedicated provenance problem.  
**Relationship to prior nodes:** Extends artifact-export, mini-app, cross-platform migration, and long-horizon artifact work. SRTSF is distinct because it tests whether latent executable structure survives a creator-tool round trip rather than merely whether an artifact can be exported.
