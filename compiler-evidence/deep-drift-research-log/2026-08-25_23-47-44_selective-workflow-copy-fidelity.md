# Deep Drift Research Update

## Selective Workflow Copy Fidelity: When Artifacts Copy but Human Cognitive State Does Not

**Research date:** Tuesday, 25 August 2026  
**ATØR observation time:** 23:47:44 WIB / 16:47:44 UTC  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan. One materially useful continuity delta identified.

## Executive Summary

Google Workspace introduced an important creator-workflow capability on 17 August 2026: users can now copy an entire Gemini Notebook, including sources and studio artifacts such as Audio Overviews, Video Overviews, Study Guides, Flashcards, Quizzes, Slide Decks, artifact-generation prompts, and custom chat configurations.

But Google explicitly states that **personal chat history and user-generated notes are not transferred** to the copied notebook.

This creates a sharp Deep Drift distinction:

```text
WORKFLOW ARTIFACTS COPY
!=
HUMAN COGNITIVE HISTORY COPIES
```

The notebook clone can inherit sources, generated studio artifacts, generation prompts, and custom chat configuration while losing personal conversational trajectory, user-generated notes, and the accumulated reasoning path that may explain why the artifacts exist in their current form.

This is not simple export loss. It is **selective workflow inheritance**.

For creator systems, that means a copied project can look complete while being causally incomplete.

## New Deep Drift Construct: Selective Workflow Copy Fidelity

**Selective Workflow Copy Fidelity (SWCF)** measures how faithfully a copied or duplicated AI workspace preserves the full state required to understand, continue, reproduce, and audit the original workflow.

Evaluate copies across at least five layers:

```text
SOURCE STATE
ARTIFACT STATE
PROCEDURAL STATE
CONVERSATIONAL STATE
AUTHORIAL / HUMAN STATE
```

A copied workspace may pass the first three and fail the last two.

## Google Gemini Notebook: Copyable State vs Lost State

Google states that a copied Gemini Notebook can include sources, Audio Overviews, Video Overviews, Study Guides, Flashcards, Quizzes, Slide Decks, artifact-generation prompts, and custom chat configurations.

Google also states that personal chat history is not transferred, user-generated notes are not transferred, and the copied notebook does not remain synchronized with the original.

```text
ORIGINAL NOTEBOOK
|
|-- SOURCES ----------------------> COPIED
|-- STUDIO ARTIFACTS ------------> COPIED
|-- ARTIFACT PROMPTS ------------> COPIED
|-- CUSTOM CHAT CONFIG ----------> COPIED
|-- PERSONAL CHAT HISTORY --------> NOT COPIED
|-- USER NOTES ------------------> NOT COPIED
|-- FUTURE SOURCE UPDATES --------> NOT SYNCED
```

That architecture is useful, but it breaks the assumption that "copy project" means "copy project state." It copies only a selected subset of project state.

## New Failure Class: Cognitive-State Orphaning

**Cognitive-State Orphaning** occurs when generated artifacts and source materials survive a copy or migration, but the human reasoning, notes, corrections, context, and conversational decisions that produced them do not.

The result is an artifact-rich but causally impoverished workspace.

## New Failure Class: Forked-State Drift

Because copied notebooks do not sync with the original, they immediately become independent state branches.

```text
ORIGINAL STATE V1
        |
        +---- COPY V1
        |        |
        |        +---- COPY V2
        |
        +---- ORIGINAL V2
```

Once both branches evolve, the system requires explicit version and provenance discipline.

## Deep Drift Benchmark: Selective Workflow Copy Test

Controlled procedure:

```text
1. Create notebook with:
   - 3 sources
   - 2 user notes
   - 1 long chat thread
   - 1 custom chat configuration
   - 1 generated slide deck
   - 1 generated study guide
   - 1 artifact-generation prompt
2. Create a notebook copy.
3. Compare original and copy.
4. Record what survives.
5. Ask both notebooks an identical continuation task.
6. Measure behavioral divergence.
```

Metrics:
- source survival rate;
- generated-artifact survival rate;
- prompt/configuration survival rate;
- personal-chat survival rate;
- user-note survival rate;
- continuation fidelity;
- source-version divergence;
- fork-detection clarity;
- human rehydration minutes;
- provenance completeness.

## New Metric: Human State Rehydration Cost

```text
HUMAN STATE REHYDRATION COST
=
time required to restore enough missing context
for the copied workspace to behave like the original
```

This matters because "copy" may save technical state while still returning cognitive reconstruction labor to the human.

## Structural Migration Signal: Excel to Sheets

Google also introduced two migration improvements on 17 August 2026: Excel tables now import as Google Sheets tables, and Excel pivot tables backed by table ranges are preserved instead of being flattened into static grids.

This creates a useful Deep Drift contrast:

```text
SPREADSHEET MIGRATION:
STRUCTURE INCREASINGLY PRESERVED

AI WORKSPACE COPY:
HUMAN COGNITIVE STATE STILL SELECTIVELY LOST
```

Mature creator systems should treat human notes, conversation history, procedure state, source state, and artifact state with the same seriousness that spreadsheet systems increasingly apply to structural semantics.

## Standing Creator-Workflow Signals

### OpenAI

Current relevant public changes remain improved plugin discovery, segmented loading of long conversations, progressive rendering of interactive content, and Codex `mcp-server` deprecation in favor of the Codex app server.

### Anthropic

Current strongest creator-workflow changes remain Files API GA, mounted Managed Agent memory stores with sync-back, redesigned session observability, GitHub-loaded skills, and the production stack combining computer use, browser use, Skills API, and Files API.

### Google

Google currently shows the strongest mini-app and workspace-state experimentation through Gemini interactive simulations/models, Sheets Canvas, Ask Gemini in Chat, notebook copying with selective state transfer, and structural preservation in Excel-to-Sheets migration.

## Updated Deep Drift Creator-Workflow Model

```text
HUMAN INTENT
-> CONVERSATION HISTORY
-> USER NOTES
-> PROJECT / NOTEBOOK STATE
-> SOURCE STATE
-> PROCEDURE / PROMPT CONFIGURATION
-> MODEL / AGENT
-> TOOL ROUTE
-> GENERATED ARTIFACT
-> COPY / DUPLICATION
-> SELECTIVE STATE TRANSFER
-> FORK
-> LATER DIVERGENCE
-> EXPORT / SHARE / MIGRATION
-> AUDIT / PROVENANCE
```

## Deep Drift Research Position

```text
ARTIFACT COPY
!= WORKFLOW COPY

WORKFLOW COPY
!= COGNITIVE CONTINUITY

SOURCE PRESERVATION
!= AUTHORIAL CONTINUITY

PROJECT DUPLICATION
!= PROJECT REPRODUCIBILITY
```

A copied AI workspace may preserve what the machine produced while discarding what the human had to think.

That asymmetry should be measured.

## Evidence Boundary

Platform capability claims in this report are grounded in first-party product and documentation sources. Deep Drift construct names, causal interpretations, failure classes, and benchmark proposals are ĀTØR Institute research constructs.

## Primary Sources

1. Google Workspace Updates, 17 August 2026 - Gemini Notebook copy behavior and state-transfer limits: https://workspaceupdates.googleblog.com/2026/08/
2. Google Workspace Updates, 17 August 2026 - Excel table and linked pivot-table import improvements: https://workspaceupdates.googleblog.com/2026/08/
3. Google Workspace Updates, 24 August 2026 - Gemini interactive simulations and models: https://workspaceupdates.googleblog.com/2026/08/generate-interactive-simulations-and-models-in-the-Gemini-app.html
4. Google Workspace Updates, 13 August 2026 - Sheets Canvas interactive read-write mini-apps: https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html
5. OpenAI Product Release Notes, 21-24 August 2026: https://openai.com/products/release-notes/
6. Anthropic Claude Platform Release Notes, 19 August 2026: https://platform.claude.com/docs/en/release-notes/overview
7. Anthropic, "Build production agents with computer use, the Skills API, and the Files API," 20 August 2026: https://claude.com/blog/computer-use-skills-api-files-api

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
