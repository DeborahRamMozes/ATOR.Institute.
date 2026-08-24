# Deep Drift Research Update

## New Delta: Gemini Interactive Simulations Turn Chat Responses into Ephemeral Computational Artifacts

**Research date:** Tuesday, 25 August 2026  
**ATØR observation time:** 04:51 WIB / 21:51 UTC (24 August 2026)  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Update Watch  
**Status:** Fresh first-party-source scan with one material new creator-workflow delta.

## Executive Summary

A new 24 August Google Workspace update pushes the mini-app trend another step forward: the Gemini app can now generate **interactive simulations and models directly inside chat**.

This is not merely a prettier answer.

The response can now behave like a temporary computational environment:

```text
PROMPT
-> GENERATED MODEL / SIMULATION
-> USER INTERACTION
-> CHANGED VIEW / STATE
-> INTERPRETATION
```

Examples given by Google include rotating a 3D DNA model, observing a pendulum exchange energy, and exploring cash-burn behavior through an interactive table.

For Deep Drift Research, the important shift is that the "answer" can now have **state, controls, and interaction history**.

The research object therefore expands again:

```text
TEXT RESPONSE
-> INTERACTIVE RESPONSE OBJECT
-> USER MANIPULATION
-> TRANSIENT STATE
-> POSSIBLE EXPORT / SCREENSHOT / COPY
-> LOSS OR SURVIVAL OF INTERACTION HISTORY
```

That creates a new benchmark family:

**Interactive Response State Fidelity**

Core question:

> When a generated simulation or interactive model is manipulated inside chat, can its resulting state, parameter choices, interaction sequence, and provenance survive export, sharing, copying, or later reopening?

## New Google Delta: Interactive Simulations and Models

Google announced on 24 August 2026 that Gemini can generate custom interactive visualizations directly inside the Gemini app chat.

The product behavior is materially different from static text or diagrams:

- responses can include interactive tables, grids, simulations, and 3D models
- users can manipulate generated objects directly in the chat surface
- the feature is available now for Rapid Release and Scheduled Release domains
- it is on by default where Gemini is enabled
- there is no separate end-user toggle
- it is available to Google Workspace customers, Workspace Individual subscribers, and eligible users

### Why this matters for Deep Drift

The generated artifact is no longer necessarily a file.

It may be a **live interaction surface** whose state exists only inside the response environment.

That creates several new questions.

### 1. State persistence

If a user rotates, changes, or explores a generated model:

```text
INITIAL GENERATED STATE
-> USER ACTIONS
-> FINAL INTERACTIVE STATE
```

Does the system preserve the final state?

If the user returns later, is the object restored to:
- the initial generated state,
- the last manipulated state,
- a regenerated approximation,
- or no interactive state at all?

### 2. Interaction provenance

Can the system distinguish:

```text
MODEL-GENERATED STATE
vs
USER-MANIPULATED STATE
```

If the user changes parameters before drawing a conclusion, the conclusion may depend on human interaction rather than the original model output.

A static transcript may not reveal that.

### 3. Export fidelity

If the interactive response is:
- copied,
- shared,
- exported,
- printed to PDF,
- screenshotted,
- converted into a document,
- or embedded elsewhere,

what survives?

Possible loss layers:

```text
INTERACTIVE OBJECT
-> STATIC IMAGE
-> STATIC PDF
-> COPIED TEXT
```

The visual appearance may survive while the simulation logic, parameter state, or interaction path disappears.

### 4. Reproducibility

Scientific and analytical use requires more than "I saw the simulation."

A reproducible record should ideally preserve:

- original prompt
- generated model identity
- generated parameter defaults
- user-modified parameters
- interaction sequence
- final state
- timestamp
- version/runtime
- export/share state

Without those, an interactive response can influence reasoning while leaving weak evidence of how that reasoning was produced.

## New Deep Drift Benchmark: Interactive Response State Fidelity

### Definition

**Interactive Response State Fidelity** is the degree to which the state and causal history of an interactive AI-generated response survive manipulation, revisit, sharing, export, and downstream reuse.

### Core test

```text
PROMPT
-> GENERATE INTERACTIVE MODEL
-> RECORD INITIAL STATE
-> MANIPULATE MODEL
-> RECORD FINAL STATE
-> LEAVE CHAT
-> REOPEN
-> SHARE
-> EXPORT
-> RE-IMPORT
```

Measure:

- initial-state recovery
- final-state recovery
- parameter survival
- interaction-history survival
- visual-state survival
- simulation-logic survival
- editability
- share-link fidelity
- PDF/export fidelity
- screenshot fidelity
- semantic conclusion drift
- human repair minutes

### Failure classes

**State Reset Drift**  
The object reopens in a different or default state.

**Interaction-History Loss**  
The final state survives but the path that produced it does not.

**Static-Export Collapse**  
A live computational artifact becomes a static image or flattened document.

**Parameter Provenance Loss**  
The exported result does not reveal which parameters were changed by the user.

**Regeneration Ambiguity**  
Reopening recreates a visually similar object without proving it is the same computational state.

## Relation to Existing Deep Drift Benchmarks

The new benchmark connects directly to:

- Artifact Round-Trip Fidelity
- Bidirectional State Fidelity
- Context-Surface Equivalence
- Exported Interaction Completeness
- Interaction-History Export Fidelity
- Human Orchestration Burden
- Mutation-Path Provenance

The combined creator-workflow chain is now:

```text
HUMAN INTENT
-> MEMORY / PROJECT STATE
-> SOURCE + INGESTION SURFACE
-> SKILL / PROCEDURE VERSION
-> MODEL / AGENT
-> PERMISSION / GOVERNANCE
-> GENERATED RESPONSE OBJECT
-> USER INTERACTION
-> TRANSIENT STATE
-> EDITABLE / INTERACTIVE ARTIFACT
-> COPY / EXPORT / SHARE / MIGRATION
-> AUDIT / PROVENANCE
```

The new element is important:

**the user can now materially change the response after generation.**

That means the final meaning of the response may be co-produced by:
- the model,
- the generated interface,
- the user's manipulation,
- and the export surface.

## Standing Creator-Workflow Signals Still Active

No materially newer OpenAI or Anthropic release after 20 August was found in the requested categories during this scan.

The relevant standing signals remain:

### OpenAI

- mutable Project memory
- Drive files browsable from Library
- rich paste preserving headings, links, and lists
- >10k-character paste conversion into attachment objects
- ChatGPT Sites co-editing and saved versions
- external actions through Apple Messages
- GitLab-triggered Codex workflows

### Anthropic

- Skills API
- Files API
- computer use
- browser use
- finished file outputs
- persistent source-state and procedural-version separation

### Google

- Sheets Canvas as a fully read-write mini-app surface
- Gemini Notebook copying with incomplete history portability
- recurring source accretion into Gemini Notebooks
- direct DOCX/PDF/XLSX/Markdown generation
- improved Excel table and pivot import fidelity
- **new: interactive simulations and models generated directly in chat**

### Microsoft

- Work IQ Chat / Context / Tools / Workspaces
- Copilot Cowork long-running multi-tool execution
- app-native Word/Excel/PowerPoint agents
- App Builder for lightweight interactive apps
- interaction-export surfaces for Copilot provenance

## Updated Deep Drift Position

The creator-AI stack is no longer merely:

```text
MODEL -> ARTIFACT
```

It is becoming:

```text
MODEL
-> GENERATIVE WORKSPACE
-> INTERACTIVE OBJECT
-> HUMAN MANIPULATION
-> MUTABLE STATE
-> EXPORT / SHARE
-> PARTIAL OR COMPLETE HISTORY
```

The most important research failure class remains:

**successful output with incomplete causal history.**

The new Google update makes that failure class even sharper because the "output" can now change after generation without necessarily producing a durable record of those changes.

A static screenshot can look convincing.

A PDF can look complete.

A copied response can look intact.

Yet none of them may preserve:
- the simulation logic,
- the parameter state,
- the interaction path,
- or the exact conditions under which the user reached the conclusion.

That is not merely interface polish.

It is a reproducibility and provenance problem.

## Evidence Boundary

Platform capability claims in this report are grounded in first-party product and documentation sources. Deep Drift benchmark names, causal interpretations, and experimental proposals are ĀTØR Institute research constructs and are not claims made by the platform vendors.

## Primary Sources

1. Google Workspace Updates, "Generate interactive simulations and models in the Gemini app," 24 August 2026: https://workspaceupdates.googleblog.com/
2. OpenAI Product Release Notes, latest creator-workflow release dated 20 August 2026: https://openai.com/products/release-notes/
3. Anthropic product announcements, latest relevant creator-workflow stack dated 20 August 2026: https://claude.com/blog-category/announcements
4. Microsoft Support, App Builder in Microsoft Copilot: https://support.microsoft.com/en-us/microsoft-365-copilot/build-apps-with-microsoft-365-copilot-frontier

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**