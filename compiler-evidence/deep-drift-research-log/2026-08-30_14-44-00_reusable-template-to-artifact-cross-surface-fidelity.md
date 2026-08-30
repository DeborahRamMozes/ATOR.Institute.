# Deep Drift Research Update

## Reusable Template-to-Artifact Cross-Surface Fidelity

**Research date:** 30 August 2026  
**Primary platform change:** ChatGPT Work documentation updated 29 August 2026 for reusable templates, native Google Workspace file creation/editing, desktop file refinement, and split cloud/local artifact persistence  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log creator-workflow architecture verified from first-party OpenAI Help Center documentation.

## Executive Summary

OpenAI's current ChatGPT Work documentation now describes a reusable creator workflow that goes beyond one-off file generation.

ChatGPT Work can create or edit documents, spreadsheets, presentations, reports, and analyses from instructions, source material, an existing reference file, a master deck, or a reusable template. A template can begin from a Word document (.docx), Excel workbook (.xlsx), PowerPoint presentation (.pptx), or a Google Docs, Sheets, or Slides link. The template combines a reference artifact with reusable instructions so the same structure, tone, formulas, branding, or workflow can be applied repeatedly.

The architecture is now:

```text
REFERENCE FILE / GOOGLE WORKSPACE SOURCE
-> TEMPLATE CREATOR
-> REUSABLE TEMPLATE
-> NEW TASK MATERIAL
-> DOCUMENT / SPREADSHEET / PRESENTATION
-> REVIEW / REFINE
-> CLOUD OR LOCAL PERSISTENCE
```

The important complication is that the runtime is not one unified artifact space.

OpenAI documents that templates created on the web and templates saved locally by Codex are separate and do not automatically sync. Cloud-created files may be saved to ChatGPT Library, while local desktop outputs may remain in local projects or folders and may not appear automatically on web or mobile. Native Google Docs, Sheets, and Slides can be created or edited through Work when the relevant Google Workspace app is connected, while Excel can be inspected and updated directly through Codex in the desktop app with the ChatGPT for Excel add-in.

This creates a new Deep Drift benchmark family:

**Reusable Template-to-Artifact Cross-Surface Fidelity (RTACSF)**

with companion constructs:

**Reference-to-Template Fidelity (RTF)**  
**Template-Version-to-Artifact Fidelity (TVAF)**  
**Template Instruction Preservation Fidelity (TIPF)**  
**Cloud-vs-Local Artifact Continuity Fidelity (CLACF)**  
**Native-Source Edit Fidelity (NSEF)**  
**Template Distribution Fidelity (TDF)**  
**Preview-to-Refinement Fidelity (PRF)**  
**Artifact-to-Library Persistence Fidelity (ALPF)**

The central research question is:

> When a reference file becomes a reusable template, that template produces new artifacts across web, desktop, Google Workspace, Codex, and Library, and the template itself may exist in separate cloud and local forms, can each generated artifact still identify the exact reference, template version, reusable instructions, source material, surface, edit history, and persistence location that produced it?

## 1. What Changed

OpenAI's current Work documentation states that ChatGPT Work can create or edit documents, spreadsheets, presentations, reports, and analyses.

For templates, OpenAI documents that users can start with DOCX, XLSX, PPTX, Google Docs, Google Sheets, or Google Slides references. A template combines the reference file with reusable instructions. The user specifies what should remain stable, what should change, and what information will be supplied in future runs.

Templates can be created through **@Template-Creator** in Work on the web or Codex in the ChatGPT desktop app. On the web, Template Creator is also available through `Library -> New -> View templates -> Create template`. Reusable templates can then be selected through `@Documents`, `@Spreadsheets`, or `@Presentations`.

OpenAI also documents an important boundary:

```text
WEB TEMPLATE
!=
LOCAL CODEX TEMPLATE
```

Templates created on the web and templates saved locally by Codex are separate and do not automatically synchronize.

## 2. Why This Matters for Deep Drift

The ordinary creator workflow has historically been:

```text
OLD FILE
-> HUMAN DUPLICATE
-> HUMAN COPY / PASTE
-> HUMAN REFORMAT
-> NEW FILE
```

The emerging workflow is:

```text
REFERENCE
-> AI TEMPLATE
-> REUSABLE PROCEDURE
-> NEW ARTIFACT
```

This removes repeated formatting labor. It also creates a persistent procedural layer between source and output.

Therefore:

```text
REFERENCE FILE != TEMPLATE
TEMPLATE NAME != TEMPLATE VERSION
SAME TEMPLATE != SAME SOURCE STATE
WEB TEMPLATE != LOCAL TEMPLATE
FILE CREATED != FILE PERSISTED IN SAME PLACE
NATIVE SOURCE EDIT != NEW DERIVATIVE FILE
```

A future artifact can look perfectly consistent while its exact generating template state is no longer reconstructable.

## 3. New Deep Drift Construct: Reusable Template-to-Artifact Cross-Surface Fidelity

### Definition

**Reusable Template-to-Artifact Cross-Surface Fidelity (RTACSF)** measures whether a reusable AI template remains reconstructable as it moves from reference artifact to procedural template to generated file across multiple execution surfaces and persistence systems.

A minimum template-to-artifact manifest should preserve:

```text
reference_file_id
reference_file_hash
reference_file_type
reference_source_location
template_id
template_version
template_created_at
template_surface
template_instruction_set
linked_source_ids
task_input_ids
generation_surface
output_artifact_id
output_artifact_type
output_location
library_item_id
google_workspace_item_id
local_project_path
generation_timestamp
human_review_events
```

## 4. Reference-to-Template Fidelity

**Reference-to-Template Fidelity (RTF)** measures whether the reusable template correctly preserves the structural and stylistic constraints explicitly selected from the source reference.

Controlled requirements might include stable headings, table structure, tone, branding, slide order, and formula architecture while replacing project-specific facts, dates, metrics, customer names, and analysis.

The benchmark should test whether the generated template actually distinguishes stable structure from replaceable content.

## 5. Template-Version-to-Artifact Fidelity

**Template-Version-to-Artifact Fidelity (TVAF)** measures whether every generated artifact remains tied to the exact historical template state used for that run.

```text
TEMPLATE v1 -> REPORT A
TEMPLATE v2 -> REPORT B
TEMPLATE v3 -> REPORT C
```

If the current template is v3, Report A should still identify v1. Otherwise reproducibility collapses into a filename.

## 6. Template Instruction Preservation Fidelity

**Template Instruction Preservation Fidelity (TIPF)** measures whether the procedural instruction layer remains available and attributable after artifacts are generated. The output manifest should preserve not only the reference file but also the reusable transformation logic.

Without the instruction set, a reviewer can inspect the source and output but still not know which differences were intentional.

## 7. Cloud-vs-Local Artifact Continuity Fidelity

OpenAI explicitly documents that web templates and local Codex templates are separate and do not automatically sync. Cloud-created files may be saved to Library, while local desktop outputs may remain in local projects or folders and not automatically appear on web or mobile.

**Cloud-vs-Local Artifact Continuity Fidelity (CLACF)** measures whether template identity, generation state, and artifact lineage remain clear across ChatGPT Work web, ChatGPT desktop, Codex local projects, ChatGPT Library, Google Workspace, and Microsoft Excel.

Deep Drift should treat these as distinct persistence regimes.

## 8. Native-Source Edit Fidelity

Work can create or edit native Google Docs, Sheets, and Slides when the relevant Google Workspace app is enabled and authorized.

**Native-Source Edit Fidelity (NSEF)** measures whether the system preserves the distinction between creating a new file, editing an existing source, and creating a derivative.

An update to the original Google file changes the canonical source. A generated copy creates a new lineage branch. Those operations must not share one vague "created with AI" label.

## 9. Template Distribution Fidelity

OpenAI documents that personal templates can be packaged as plugins for workspace distribution, subject to admin publication. Desktop templates can also be shared as ZIP files.

**Template Distribution Fidelity (TDF)** measures whether a template retains its reference dependencies, reusable instructions, version, permissions, and provenance when distributed to another user.

A shared template may depend on a Google Workspace link, connected service, internal sample data, reference material, or plugin configuration. Sharing the template does not grant access to every linked source.

```text
TEMPLATE INSTALLED
!=
DEPENDENCIES AVAILABLE
```

## 10. Preview-to-Refinement Fidelity

The desktop app can open supported documents, spreadsheets, presentations, and PDFs from the sidebar and allow targeted refinement, such as selecting a claim and asking for its source, selecting a chart and asking for a clearer label, or selecting a slide and asking for a different layout.

**Preview-to-Refinement Fidelity (PRF)** measures whether targeted edits remain constrained to the selected object and preserve the surrounding artifact state.

The system should record the selected object, requested change, pre-edit state, post-edit state, and affected objects.

## 11. Artifact-to-Library Persistence Fidelity

OpenAI's current documentation says files created in cloud Work may be saved to Library where available, while local desktop outputs may remain local. The current Library documentation also states that uploaded and generated documents, spreadsheets, presentations, images, and PDFs can persist independently of the chat that contained them.

**Artifact-to-Library Persistence Fidelity (ALPF)** measures whether a generated artifact's persistence location and chat relationship remain explicit.

```text
DELETE CHAT != DELETE LIBRARY FILE
LOCAL FILE != LIBRARY FILE
```

The creator workflow therefore contains separate conversation, artifact, and storage lifecycles.

## 12. New Failure Classes

1. **Reference-Template Collapse:** the source file is known but the reusable transformation instructions are not.
2. **Template-Version Orphaning:** the artifact survives after its template changes, but the historical template state is lost.
3. **Web-Local Template Divergence:** equivalent web and local templates evolve independently.
4. **Cloud-Local Artifact Split:** a desktop output is assumed to appear in Library or mobile but remains local.
5. **Native-Edit / Derivative Confusion:** a source Google file is modified when a derivative was intended, or vice versa.
6. **Template Dependency Failure:** a shared template installs but cannot reproduce results because a linked file, app, or permission is unavailable.
7. **Structural Constraint Drift:** repeated template use slowly changes formulas, layout, slide order, or table architecture.
8. **Template Distribution Data Leakage:** internal reference material or sample data is unintentionally included in a plugin or ZIP.
9. **Object-Selection Spillover:** a targeted refinement changes neighboring objects outside the intended selection.
10. **Library-Origin Ambiguity:** a saved file does not clearly expose whether it came from upload, Work generation, Google Workspace, or another workflow.
11. **Chat-Deletion Lineage Break:** the conversation is deleted while the generated artifact remains.
12. **Template Authority Inflation:** consistent-looking files are mistaken for institutionally validated outputs.

## 13. Deep Drift Benchmark: Reference-to-Template-to-Artifact Round Trip

### Controlled reference set

Create three reference artifacts: a DOCX project report, an XLSX budget model, and a PPTX research deck. Each should contain stable structure, replaceable content, one intentionally protected formula or layout rule, one branded element, and one repeated instruction.

### Controlled template sequence

1. create a reusable template from each reference;
2. preserve the generated template instructions;
3. generate Artifact v1 using Task Data A;
4. modify one template instruction;
5. generate Artifact v2 using Task Data A again;
6. compare v1 and v2;
7. create one template on web;
8. create an equivalent template locally in Codex;
9. modify only the local version;
10. test whether web and local behavior diverge;
11. create one Google Workspace file from a template;
12. directly edit one existing Google Workspace source;
13. verify whether the two operations remain distinguishable;
14. delete or archive the generating chat;
15. verify whether surviving Library or local artifacts retain origin lineage.

### Measure

Reference-structure preservation, template instruction preservation, historical template attribution, web/local divergence, native-source mutation accuracy, artifact storage-location accuracy, downstream lineage retention, and human reconstruction minutes.

## 14. New Metrics

### Reference Constraint Preservation Rate

```text
RCPR = stable reference constraints preserved / all controlled stable constraints
```

### Historical Template Attribution Coverage

```text
HTAC = generated artifacts attributable to exact template version / all controlled generated artifacts
```

### Web-Local Behavioral Consistency

```text
WLBC = equivalent template runs producing materially equivalent outputs / all controlled web-local comparisons
```

### Native Edit Intent Accuracy

```text
NEIA = create/edit/derivative operations matching user intent / all controlled native-file operations
```

### Template Dependency Reconstruction Coverage

```text
TDRC = shared templates with recoverable linked dependencies / all controlled distributed templates
```

### Artifact Persistence Location Accuracy

```text
APLA = artifacts whose actual persistence location matches the recorded provenance manifest / all controlled artifacts
```

## 15. Why This Matters for Memory

A reusable template is a form of **procedural memory**. It preserves reference structure, reusable instructions, and an expected output pattern across future tasks.

This is not the same as personal memory, chat history, or Library storage. Deep Drift should distinguish personal memory, conversation history, file Library, template memory, and local project state.

The industry keeps calling unrelated persistence systems "memory" because apparently taxonomy is considered an optional luxury.

## 16. Why This Matters for Skills

The template system sits directly next to Skills and plugins. A personal reusable template can be packaged into a plugin for workspace distribution.

```text
REFERENCE FILE
-> TEMPLATE
-> PLUGIN
-> TEAM INSTALL
-> REPEATED ARTIFACT GENERATION
```

The procedural artifact is becoming distributable software. Versioning and dependency provenance must follow it.

## 17. Why This Matters for Mini-App Builders

Templates are not full mini-apps, but they occupy the same architectural direction. A user defines an input contract, stable structure, transformation rules, and expected output, then invokes the reusable system through a conversational interface.

That is application logic with almost no visible application scaffold.

## 18. Why This Matters for Chat-to-Document Export

This is stronger than classic export.

```text
CLASSIC:
CHAT -> COPY TEXT -> DOCUMENT

CURRENT WORK TEMPLATE PIPELINE:
CHAT / SOURCE MATERIAL -> REUSABLE TEMPLATE -> NATIVE ARTIFACT
```

The output is generated as a structured document, spreadsheet, or presentation rather than being a serialized transcript.

Deep Drift should distinguish chat export from artifact generation from native source editing.

## 19. Why This Matters for DOCX / PDF Generation

The current Work documentation explicitly supports DOCX, XLSX, and PPTX as template reference types and supports document, spreadsheet, and presentation generation.

PDF is documented as a supported preview/refinement type in the desktop sidebar, but this specific Work article does not establish PDF as a direct template-generated output format.

Therefore Deep Drift should treat PDF as a downstream transformation boundary unless a separate first-party source confirms direct PDF generation.

```text
REFERENCE DOCX
-> TEMPLATE
-> NEW DOCX
-> REVIEW
-> PDF
```

The final PDF should preserve the template and artifact lineage.

## 20. Why This Matters for Copy-Paste / Export Fixes

The template workflow attacks one of the oldest creator annoyances:

```text
DUPLICATE OLD FILE
-> DELETE OLD CONTENT
-> COPY NEW CONTENT
-> REPAIR FORMATTING
-> FIX TABLE
-> FIX LOGO
-> DISCOVER FORMULA BROKE
```

The reusable template replaces that with:

```text
SELECT TEMPLATE
-> PROVIDE NEW MATERIAL
-> GENERATE
```

That is a real workflow improvement.

> Every removed manual handoff should be replaced by a machine-readable lineage event.

Otherwise convenience merely makes the missing history less visible.

## 21. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | Material adjacent change: reusable templates create a persistent procedural-memory layer separate from chat memory and Library files. |
| Skills | **Material new-to-log relationship:** personal templates can be packaged as plugins for workspace distribution, turning file-generation procedure into reusable installable workflow. |
| Mini-app builders | Material adjacent trend: reference + reusable instructions + expected output behaves like lightweight conversational application logic. |
| Chat-to-document export | **Major new-to-log item:** ChatGPT Work can generate and edit structured files from reusable templates rather than relying on manual chat export. |
| DOCX / PDF generation | **Material new-to-log architecture:** DOCX/XLSX/PPTX can seed reusable templates; PDF is a preview/refinement and downstream conversion boundary in this documentation. |
| Copy-paste/export fixes | **Major workflow reduction:** recurring formatting and structure can be captured once in a reusable template rather than manually copied between files. |
| Broader creator workflow | **Major trend:** creator systems are converging on reusable procedural artifacts that sit between source files and generated deliverables. |

## 22. Cross-Platform Check

### OpenAI

The strongest new-to-log item is the updated ChatGPT Work creator workflow: reusable templates seeded from DOCX/XLSX/PPTX or Google Workspace sources, native Google Docs/Sheets/Slides editing, direct Excel integration through Codex desktop, targeted file refinement, and split web/local persistence.

The current Library documentation also reinforces the artifact-lifecycle issue: uploaded and generated files can persist in Library independently of their source chat, while local desktop outputs may remain outside that cloud Library.

### Anthropic

No newer release after the 25 August memory/Cowork update displaced the already logged memory, Skills, and provenance changes.

### Google

No newer category-displacing creator release surfaced after the already logged interactive simulations and Sheets Canvas changes.

### Microsoft

No newer Microsoft 365 Copilot release displaced the 25 August agent-to-Office and Python-in-Excel changes already logged.

### Databricks

No newer release displaced the 26 August visualization API and late-August Genie creator-workflow changes already logged.

### Notion

No newer release displaced the 28 August Suggested Edits agent-governance change already logged.

## 23. Deep Drift Research Position

The weak description is:

> ChatGPT can make documents from templates.

The serious description is:

> A reference artifact can now be compiled into a reusable conversational procedure, reused across future document/spreadsheet/presentation generation, distributed as a plugin, executed across cloud and local surfaces that do not fully synchronize, and produce artifacts whose persistence may split between Library, Google Workspace, and local desktop storage.

Therefore:

```text
REFERENCE != TEMPLATE
TEMPLATE != SKILL
WEB TEMPLATE != LOCAL TEMPLATE
GENERATED FILE != SAME STORAGE REGIME
NATIVE EDIT != DERIVATIVE GENERATION
CONSISTENT LOOK != REPRODUCIBLE AUTHORING STATE
```

The serious Deep Drift requirement is:

> **Every reusable creator template should preserve the source reference identity and hash, reusable instruction set, template version, execution surface, linked dependencies, task inputs, output artifact identity, native-source mutation state, cloud/local persistence location, review history, and downstream export lineage necessary to reconstruct why the artifact has the structure it has.**

The chatbot is finally learning the thing humans have done with "FINAL_v7_USE_THIS_ONE.docx" for decades: reuse a format. Progress. Now perhaps the machine can also remember which damned version actually made the file.

## 24. Evidence Boundary

Platform facts in this report are grounded in first-party OpenAI Help Center documentation retrieved 30 August 2026.

OpenAI's **Creating and editing documents, spreadsheets, and presentations with ChatGPT Work** article was updated on 29 August 2026 and states that Work can create/edit documents, spreadsheets, presentations, reports, and analyses; templates can be created from DOCX, XLSX, PPTX, or Google Workspace references; templates combine reference files with reusable instructions; web and local Codex templates do not automatically sync; native Google Docs/Sheets/Slides can be created or edited where supported; Excel can be manipulated through Codex desktop with the ChatGPT for Excel add-in; supported files including PDFs can be previewed/refined in the desktop sidebar; cloud-created files may be saved to Library while local outputs may remain local.

OpenAI's current **File storage and Library in ChatGPT** documentation further states that uploaded and created files can persist in Library independently of the chat that contained them, and deleting a chat does not delete saved Library files.

RTACSF, RTF, TVAF, TIPF, CLACF, NSEF, TDF, PRF, ALPF, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. OpenAI Help Center, **Creating and editing documents, spreadsheets, and presentations with ChatGPT Work**, updated 29 August 2026.  
   https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work

2. OpenAI Help Center, **File storage and Library in ChatGPT**, updated 29 August 2026.  
   https://help.openai.com/en/articles/20001052-file-storage-and-library-in-chatgpt

3. OpenAI Help Center, **ChatGPT Release Notes**, checked 30 August 2026.  
   https://help.openai.com/en/articles/6825453

4. Anthropic Help Center, **Release notes**, checked 30 August 2026.  
   https://support.claude.com/en/articles/12138966-release-notes

5. Microsoft Learn, **Microsoft 365 Copilot release notes**, checked 30 August 2026.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

6. Databricks, **AI/BI and Genie One release notes 2026**, checked 30 August 2026.  
   https://docs.databricks.com/aws/en/ai-bi/release-notes/2026

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
