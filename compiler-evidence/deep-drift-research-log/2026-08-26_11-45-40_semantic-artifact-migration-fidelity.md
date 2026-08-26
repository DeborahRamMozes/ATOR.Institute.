# Deep Drift Research Update

## Semantic Structure Survival Across Artifact Migration

**Research date:** Wednesday, 26 August 2026  
**ATØR observation time:** 11:45:40 WIB / 04:45:40 UTC  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan. No new memory, skills, mini-app, DOCX/PDF-generation, or chat-to-document release appeared since the last pass. One structurally important export/interoperability fix was identified and logged.

## Executive Summary

Google Sheets published an interoperability change on 25 August 2026 that deserves Deep Drift attention even though it looks, at first glance, like ordinary spreadsheet maintenance.

Google Sheets now preserves **grouped pivot-table fields** as reusable structural objects. More importantly, when Microsoft Excel `.xlsx` files containing pivot tables with grouped date, time, or numeric fields are imported into Google Sheets, those group definitions are preserved instead of being discarded and requiring manual reconstruction. Google also says the grouped configurations are preserved when importing/exporting spreadsheet files.

This is a small but unusually clean example of a broader creator-workflow problem:

```text
VISIBLE OUTPUT SURVIVES
!=
STRUCTURAL SEMANTICS SURVIVE
```

A spreadsheet can look approximately correct while losing the hidden configuration that makes it editable, reusable, and reproducible.

The update therefore provides a concrete benchmark for how AI creator platforms should treat documents, reports, mini-apps, workflow artifacts, memory, and project state during export or migration.

## The Update

Google states that grouped fields are now retained directly in the pivot-table editor sidebar as reusable source fields. Users can temporarily remove those fields from the active pivot layout without destroying the underlying grouping configuration, then re-add or modify them later.

Previously, importing an Excel file with pivot-table grouped fields into Google Sheets could drop the custom group definitions. The visible data might arrive, but the author had to reconstruct the structural logic manually.

The new behavior preserves more than pixels or cell values.

It preserves **authorial structure**.

## New Deep Drift Construct: Semantic Artifact Migration Fidelity

### Definition

**Semantic Artifact Migration Fidelity (SAMF)** measures whether a creator artifact preserves the underlying structural and procedural semantics required to continue editing, reproducing, and auditing the work after export, import, copying, or migration.

A migration should be evaluated across several independent layers:

```text
VISIBLE CONTENT
STRUCTURAL OBJECTS
EDITABILITY
PROCEDURAL LOGIC
RELATIONSHIPS / REFERENCES
METADATA
AUTHORIAL INTENT
PROVENANCE
```

Passing the visible-content layer is not enough.

## Core Deep Drift Distinctions

```text
FILE OPENS
!= FILE IS STRUCTURALLY INTACT

VALUES SURVIVE
!= EDITING LOGIC SURVIVES

LAYOUT SURVIVES
!= AUTHORIAL STRUCTURE SURVIVES

EXPORT SUCCEEDS
!= ROUND-TRIP FIDELITY SUCCEEDS
```

This matters directly to AI-generated DOCX, PDF, spreadsheets, slide decks, mini-apps, interactive artifacts, and chat-to-document workflows.

## New Failure Classes

### Structural Semantic Loss

The artifact retains visible content but loses hidden structure needed for later editing or computation.

Examples:
- grouped pivot definitions disappear;
- formulas become static values;
- heading hierarchy becomes plain formatting;
- citations lose source links;
- comments or tracked changes disappear;
- interactive widgets flatten into screenshots.

### Editable-State Collapse

The artifact remains readable but can no longer be modified with the same semantic operations available in the source system.

### Manual Reconstruction Burden

The machine completes an export or migration, but the human must manually recreate structures that already existed in the source artifact.

### Round-Trip Asymmetry

An artifact can move from system A to system B, but returning it to A does not recreate the original structural state.

### Hidden-Structure Provenance Loss

A later reviewer cannot determine which structural configuration originally produced the visible result.

## New Metric: Structural Reconstruction Burden

Define:

```text
STRUCTURAL RECONSTRUCTION BURDEN (SRB)
=
manual human operations required
to restore lost semantic structure
following migration
```

A high-quality migration should drive SRB toward zero.

This is a better reliability measure than asking only whether the file opened successfully.

## New Metric: Semantic Survival Ratio

Define:

```text
SEMANTIC SURVIVAL RATIO (SSR)
=
preserved structural objects
/
structural objects present in source artifact
```

For a pivot-table migration, relevant objects can include:
- grouped fields;
- field assignments;
- date/number grouping rules;
- filters;
- calculated relationships;
- source-range semantics.

For a DOCX workflow, equivalent objects could include:
- heading levels;
- styles;
- comments;
- tracked changes;
- footnotes;
- hyperlinks;
- cross-references;
- section structure.

## Why This Matters for LLM Creator Platforms

LLM platforms are rapidly becoming artifact systems rather than answer systems.

They now generate and manipulate:
- documents;
- spreadsheets;
- presentations;
- websites;
- interactive simulations;
- persistent project files;
- memory stores;
- mini-app-like artifacts.

As that happens, export fidelity becomes part of model usefulness.

The workflow is no longer:

```text
PROMPT
-> TEXT
```

It is increasingly:

```text
INTENT
-> MODEL / AGENT
-> STRUCTURED ARTIFACT
-> EDIT
-> EXPORT
-> OPEN ELSEWHERE
-> CONTINUE WORK
-> RE-IMPORT
```

Every arrow can destroy semantic state.

## Deep Drift Benchmark: Structured Artifact Round-Trip Test

### Controlled procedure

```text
1. Create a source artifact with visible content and hidden structure.
2. Export it to another platform or file format.
3. Reopen it in the destination system.
4. Inspect structural objects, not just appearance.
5. Edit one structural object.
6. Export again.
7. Re-import into the source or a third system.
8. Compare final state with original.
```

### Measure

- visible-content survival;
- structural-object survival;
- editability survival;
- relationship/reference survival;
- metadata survival;
- authorial-state survival;
- human reconstruction minutes;
- round-trip asymmetry;
- provenance completeness.

## Relation to Existing Deep Drift Constructs

| Existing construct | New connection |
|---|---|
| Artifact Lineage & Round-Trip State Fidelity | SAMF provides a concrete structural-fidelity sub-benchmark. |
| Research Artifact Migration Fidelity | Research outputs can survive while their editable or procedural structure does not. |
| Selective Workflow Copy Fidelity | A copied workspace may preserve selected artifact state while discarding other structural or cognitive layers. |
| Human Orchestration Burden | Manual reconstruction after export is another form of work returned to the human. |
| Execution-State Provenance | The visible artifact alone may not reveal the structural state that produced it. |

## Standing Platform Scan

No materially newer first-party release appeared in this scan for the principal LLM workflow categories beyond items already logged.

### Memory

Anthropic's 25 August shared-memory change across Claude chat and Cowork remains the strongest fresh memory signal. OpenAI's recent Business memory system remains centered on continuously updated context, source inspection, correction, and project-only memory boundaries.

### Skills and Workflow Packaging

Anthropic's Skills API and OpenAI's Plugin Directory remain the strongest explicit packaging mechanisms for reusable procedures. OpenAI plugins can package skills, apps, and app templates; Anthropic skills can bundle instructions, scripts, and templates and be versioned through the API.

### Mini-app / Interactive Artifact Builders

Google's Gemini interactive simulations and Sheets Canvas, plus OpenAI's progressive interactive content and ChatGPT Sites, remain the strongest current signals that chat output is becoming executable or manipulable interface state.

### Chat-to-Document / DOCX / PDF

No new first-party DOCX/PDF generation release appeared in this pass. Microsoft Copilot Pages to Word/PDF and agent-generated finished-file workflows remain relevant standing benchmarks.

### Copy / Export / Migration Fidelity

The new Google Sheets grouped-pivot-field persistence is the material delta in this run. It moves interoperability closer to semantic preservation instead of visual preservation alone.

## Deep Drift Research Position

The useful lesson is not about pivot tables.

The lesson is that **mature creator systems eventually have to preserve invisible structure**.

Humans do not merely create visible outputs. They create relationships, rules, hierarchy, references, exceptions, reusable configurations, and editing logic.

When export destroys those things, the platform has not really exported the work.

It has exported a photograph of the work's surface and handed reconstruction back to the human.

Therefore:

```text
ARTIFACT FIDELITY
=
VISIBLE CONTENT
+ STRUCTURAL SEMANTICS
+ EDITABILITY
+ PROVENANCE
+ ROUND-TRIP SURVIVAL
```

For Deep Drift, this should become a standing benchmark across every AI-generated artifact type.

## Evidence Boundary

Platform facts in this report are grounded in first-party sources. SAMF, Structural Reconstruction Burden, Semantic Survival Ratio, failure classes, and benchmark proposals are ĀTØR Institute research constructs.

## Primary Sources

1. Google Workspace Updates, "Preserve and reuse grouped pivot table fields in Google Sheets," 25 August 2026: https://workspaceupdates.googleblog.com/2026/08/preserve-and-reuse-grouped-pivot-table-fields-in-Google-Sheets.html
2. OpenAI Business Release Notes, updated 26 August 2026: https://help.openai.com/en/articles/11391654
3. OpenAI Product Release Notes: https://openai.com/products/release-notes/
4. OpenAI, "Plugins in ChatGPT and Codex": https://help.openai.com/en/articles/20001256
5. Anthropic, "Build production agents with computer use, the Skills API, and the Files API," 20 August 2026: https://claude.com/blog/computer-use-skills-api-files-api
6. Anthropic product announcements: https://claude.com/blog-category/announcements
7. Google Workspace Updates, August 2026 archive: https://workspaceupdates.googleblog.com/2026/08/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
