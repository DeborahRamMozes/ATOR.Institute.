# Deep Drift Research Update

## Artifact-State Contract Fidelity: Native Editing, Invariant Preservation, and Surface-Dependent File State

**Research date:** Wednesday, 26 August 2026  
**ATØR observation time:** 12:49:32 WIB / 05:49:32 UTC  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan. One materially useful new-to-log artifact-workflow distinction identified.

## Executive Summary

OpenAI's current ChatGPT Work documentation makes a creator-workflow requirement unusually explicit: when asking Work to create or edit a file, the user should specify both **where the output should be created** and **what must remain unchanged**, such as formulas, layout, tone, branding, slide order, or table structure.

The same documentation states that Work can create or edit native Google Docs, Sheets, and Slides when the relevant Google Workspace app is enabled; desktop Work can also operate on supported local files, while cloud-created files may be saved to Library and local desktop outputs may remain local rather than appearing automatically on web or mobile.

For Deep Drift, this is more important than another generic "AI can make documents" claim.

It reveals that a serious creator workflow needs an explicit **artifact-state contract**:

```text
TARGET ARTIFACT
+ TARGET LOCATION
+ MUTABLE FIELDS
+ IMMUTABLE FIELDS
+ TOOL / SURFACE
+ POST-EDIT VERIFICATION
```

A file-editing agent should not merely produce a plausible result. It should preserve the state that the user declared invariant.

This creates a new benchmark family:

**Artifact-State Contract Fidelity (ASCF)**.

## New Deep Drift Construct: Artifact-State Contract Fidelity

### Definition

**Artifact-State Contract Fidelity (ASCF)** measures whether an AI creator workflow correctly distinguishes what the user wants changed from what must remain unchanged across native document, spreadsheet, presentation, and file-editing surfaces.

### Core distinction

```text
EDIT SUCCESS
!=
STATE-CONTRACT SUCCESS
```

A document can look improved while violating the user's actual constraints.

Examples:

- correct prose, broken heading hierarchy;
- correct spreadsheet values, destroyed formulas;
- correct slide text, altered master layout;
- correct chart, changed source range;
- correct document revision, wrong destination file;
- correct artifact, but saved to a surface the user cannot later retrieve.

## Artifact-State Contract

For every consequential artifact edit, Deep Drift should model:

```text
ARTIFACT_STATE_CONTRACT

artifact_identity:
artifact_type:
authoritative_location:
requested_mutations:
declared_invariants:
tool_surface:
permission_state:
pre_edit_state:
post_edit_state:
verification_method:
storage_result:
cross_surface_visibility:
```

Unavailable fields should remain:

`UNKNOWN / NOT EXPOSED`

## Why Native Editing Matters

OpenAI states that, where supported, Work can create and edit **native Google Docs, Sheets, and Slides** when the corresponding Workspace app is connected.

This matters because native editing changes the fidelity problem.

A generated export is judged by:

```text
CONTENT
+ FORMAT
+ OPENABILITY
```

A native edit must additionally preserve:

```text
OBJECT IDENTITY
+ STRUCTURE
+ COLLABORATIVE STATE
+ FORMULAS / LINKS
+ EXISTING LAYOUT
+ DESTINATION
+ EDITABILITY
```

The agent is no longer creating a new artifact from scratch.

It is mutating an existing shared state object.

## New Failure Classes

### Invariant Violation

The requested change succeeds, but a declared "must stay unchanged" property is altered.

### Destination-State Drift

The artifact is created or edited successfully but saved to the wrong file, account, project, cloud location, or local location.

### Surface-Visibility Drift

A file exists in one surface but is absent from another surface where the user reasonably expects to find it.

OpenAI explicitly notes that cloud-created files may appear in Library, while local desktop outputs may remain local and not automatically appear on web or mobile.

### Native-to-Export Semantic Loss

A native editable artifact is exported and loses formulas, links, comments, object relationships, editability, or other structural semantics.

### Reference-Template Confusion

A one-time reference file is treated as if it were a reusable template, or a reusable template is applied without preserving its expected structure.

### Mutation-Scope Expansion

The agent changes more of the artifact than the user requested because it optimizes globally instead of respecting bounded edit scope.

## Deep Drift Benchmark: Invariant-Preservation Test

### Controlled procedure

Create or select a structured artifact containing protected invariants.

Example spreadsheet:

```text
MUST CHANGE:
- values in column D
- chart title

MUST NOT CHANGE:
- formulas in columns E:G
- sheet order
- number formats
- named ranges
- source-data table structure
```

Run the edit through the native connected-app workflow.

Then verify:

- requested mutation accuracy;
- formula preservation;
- structural preservation;
- destination identity;
- cross-surface availability;
- rollback or version-history availability;
- human repair minutes.

Repeat with:

- Google Docs;
- Google Sheets;
- Google Slides;
- local desktop file;
- exported copy.

## New Metric: Declared Invariant Survival Ratio

```text
DISR =
declared invariants preserved
/
all declared invariants
```

A creator workflow should not receive a full pass merely because the requested visible change occurred.

## New Metric: Artifact Destination Accuracy

```text
ADA =
artifacts created or mutated in intended destination
/
all artifact operations
```

This matters because "the file exists somewhere" is not a serious workflow guarantee.

## Cross-Surface State Problem

OpenAI's documentation distinguishes cloud Work from local desktop outputs.

This produces a state topology:

```text
CLOUD WORK
-> POSSIBLE LIBRARY STATE
-> WEB / MOBILE RETRIEVAL

DESKTOP WORK
-> LOCAL PROJECT / FOLDER
-> MAY NOT APPEAR ON WEB / MOBILE
```

Therefore:

```text
ARTIFACT CREATED
!=
ARTIFACT GLOBALLY DISCOVERABLE
```

Deep Drift should treat storage location and surface visibility as separate state layers.

## Relation to Existing ĀTØR Seven-Layer Protocol Family

| Protocol | Relevance |
|---|---|
| MMSF | Project/file context must be scoped correctly before editing. |
| PSMC | Native file editing is persistent-state mutation. |
| SSRP | Cloud, local, Library, and connected-app state must reconcile. |
| ASRF | The edit path should reveal source, tool surface, mutation, and verification. |
| PVP | Templates and procedures need correct version selection. |
| ALRTSF | Native/edit/export round trips require structural and semantic fidelity checks. |
| SCRR | Later sessions must retrieve the correct current artifact rather than stale copies. |

## Broader Platform Scan

### OpenAI

No newer public release-note item after the 24 August Codex app-server migration was found in this scan. The most relevant creator-workflow documentation currently confirms:

- native Google Docs, Sheets, and Slides creation/editing through Work where supported;
- explicit user specification of invariants such as formulas, layout, branding, slide order, and table structure;
- one-request reference files versus reusable templates;
- cloud-versus-local output differences;
- review-before-sharing as part of the intended workflow.

OpenAI's other standing signals remain:

- improved plugin discovery;
- skills packaged through plugins;
- segmented long-conversation loading;
- progressive interactive content;
- Computer History;
- Work for longer artifact-producing tasks.

### Anthropic

No new announcement after the 25 August shared-memory update was found in this scan.

Standing signals remain:

- shared memory across Claude chat and Cowork;
- user-editable and deletable memory;
- Skills API;
- Files API;
- computer use and browser use;
- mounted memory for Managed Agents;
- richer session observability.

### Google

No materially newer creator-workflow release was found beyond the already logged August updates.

Standing signals remain:

- interactive Gemini simulations/models;
- Sheets Canvas;
- Ask Gemini in Chat rollout;
- selective Gemini Notebook copying;
- incomplete historical-state migration;
- improving structural fidelity in Excel-to-Sheets import/export.

### Microsoft

No materially newer first-party creator-workflow delta was found in this scan.

Standing signals remain:

- Copilot Pages;
- Word/PDF conversion;
- Researcher;
- Critique and Model Council;
- research-artifact retention around workflow transitions.

## Deep Drift Research Position

Creator workflow quality should now be evaluated as a **contract-preservation problem**.

The user does not merely ask:

> Make this better.

The real request is often:

```text
CHANGE X
WHILE PRESERVING A, B, C, D, AND E
IN THIS EXACT OBJECT
AT THIS EXACT DESTINATION
```

That is much closer to engineering state mutation than to text generation.

Therefore:

```text
GOOD OUTPUT
!= CORRECT MUTATION

CORRECT MUTATION
!= INVARIANT PRESERVATION

INVARIANT PRESERVATION
!= CORRECT STORAGE

CORRECT STORAGE
!= CROSS-SURFACE RETRIEVABILITY
```

This is where creator-agent evaluation needs to become considerably less impressed by pretty files.

## Evidence Boundary

Platform capability claims are grounded in current first-party OpenAI, Anthropic, Google, and Microsoft sources. Deep Drift construct names, failure classes, metrics, and benchmark proposals are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, "Creating and editing documents, spreadsheets, and presentations with ChatGPT Work," current as of 26 August 2026: https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work
2. OpenAI Product Release Notes: https://openai.com/products/release-notes/
3. OpenAI Help Center, "Plugins in ChatGPT and Codex": https://help.openai.com/en/articles/20001256
4. Anthropic Product Announcements: https://claude.com/blog-category/announcements
5. Anthropic, "Build production agents with computer use, the Skills API, and the Files API": https://claude.com/blog/computer-use-skills-api-files-api
6. Google Workspace Updates 2026: https://workspaceupdates.googleblog.com/2026/
7. Microsoft Support, Microsoft 365 Copilot creator/research workflow documentation: https://support.microsoft.com/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**