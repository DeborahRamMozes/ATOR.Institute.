# Deep Drift Research Update

## Runtime-Surface Migration, Interactive Response State, Memory, Skills, Mini-Apps, and Export Fidelity

**Research date:** Tuesday, 25 August 2026  
**ATØR observation time:** 09:18 WIB / 02:18 UTC  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Update Watch  
**Status:** Fresh first-party-source scan. Material new delta: OpenAI deprecated the Codex MCP-server command on 24 August 2026 in favor of the Codex app server. Google’s 24 August interactive-simulation rollout remains the strongest new artifact-state signal. No materially newer Anthropic creator-workflow release than 20 August was found in the requested categories.

## Executive Summary

The creator-AI stack is no longer adequately described as `prompt -> model -> answer`. The relevant system is becoming a layered workflow in which context, procedure, runtime surface, interactive state, artifact state, and export history can all change independently.

```text
HUMAN INTENT
-> MEMORY / PROJECT STATE
-> SOURCE + INGESTION SURFACE
-> SKILL / PROCEDURE VERSION
-> MODEL / AGENT
-> RUNTIME / TOOL SURFACE
-> PERMISSION / GOVERNANCE
-> GENERATED OR INTERACTIVE ARTIFACT
-> USER / AGENT STATE MUTATION
-> COPY / EXPORT / SHARE / MIGRATION
-> AUDIT / PROVENANCE
```

Two current signals sharpen the Deep Drift position:

1. **OpenAI: runtime-surface migration.** The `codex mcp-server` command is deprecated; users are directed to the Codex app server, and Claude Code interoperability is redirected through the Codex plugin for Claude Code.
2. **Google: interactive response state.** Gemini can generate interactive simulations and models directly inside chat, meaning a response can acquire mutable user-controlled state after generation.

Together they show that reliability depends not only on what the model generated, but also on **where the workflow executed and what happened to the generated object afterward**.

## Fresh Platform Delta

| Date | Platform | Change | Deep Drift significance |
|---|---|---|---|
| 24 Aug 2026 | OpenAI / Codex | `codex mcp-server` command deprecated; use Codex app server instead. Claude Code interoperability is redirected through the Codex plugin. | The execution surface can change while task intent remains constant. This creates Runtime-Surface Migration Fidelity and Tool-Routing Provenance problems. |
| 24 Aug 2026 | Google Gemini | Gemini can generate interactive simulations, models, grids, tables, and 3D visualizations directly in chat. | The response becomes a mutable computational artifact. Export/share may preserve appearance while losing interaction state or logic. |
| 21 Aug 2026 | OpenAI / ChatGPT | Interactive content on the web begins appearing progressively while it is still being generated. | Partial artifact state becomes user-visible before completion. This introduces Progressive Artifact-State Fidelity and early-interaction ambiguity. |
| 21 Aug 2026 | OpenAI / ChatGPT | Plugin discovery ranking now prioritizes tools users continue to use after installation. | Tool discovery becomes behaviorally ranked infrastructure, making tool-selection pathways another hidden variable in creator workflows. |
| 20 Aug 2026 | Anthropic | Computer Use, Skills API, and Files API became generally available together; browser use was added. | Procedure, source state, runtime, and finished file are explicit separable layers. |
| 20 Aug 2026 | OpenAI | Read-only Codex snapshots are static and omit tool calls and shell input/output. | Shared history can be visibly complete yet causally incomplete. |
| 14 Aug 2026 | OpenAI | Existing Projects can switch between default and project-only memory. | Memory boundary becomes mutable inside the same visible project identity. |
| 13 Aug 2026 | OpenAI | Drive files can be browsed directly from Library and used without re-uploading. | The same source can enter through multiple ingestion surfaces. |
| 13 Aug 2026 | Google Sheets | Sheets Canvas creates fully read-write mini-apps from natural language. | Source sheet and generated interface mutate each other, requiring mutation-path provenance. |
| 11 Aug 2026 | Google Sheets | Excel tables and linked pivot structures import with improved structural preservation. | Cross-ecosystem structural fidelity becomes directly testable. |
| 7 Aug 2026 | OpenAI | Rich paste preserves headings, bold, links, and lists. | Clipboard behavior becomes context architecture. |
| 4 Aug 2026 | OpenAI | Pastes over 10k characters become attachment objects. | Semantically identical input can change system object type at an ingestion threshold. |
| 2 Jun / 16 Jun 2026 | Microsoft | Work IQ exposes Chat, Context, Tools, and Workspaces; Workspaces store files, memory, progress, and intermediate outputs. | Microsoft explicitly exposes the whole workflow state that Deep Drift treats as the true reliability object. |

## New Benchmark 1: Runtime-Surface Migration Fidelity

### Definition

**Runtime-Surface Migration Fidelity** measures whether a workflow remains semantically, procedurally, and evidentially equivalent when its execution interface or runtime integration is deprecated, replaced, or rerouted.

OpenAI’s Codex change gives a clean real-world trigger:

```text
OLD ROUTE
codex mcp-server

-> DEPRECATION ->

NEW ROUTE
Codex app server
```

and for Claude Code interoperability:

```text
DIRECT / PRIOR MCP-SERVER ROUTE
->
CODEX PLUGIN FOR CLAUDE CODE
```

### Deep Drift questions

- Does the same task expose the same tools?
- Are permissions equivalent?
- Are logs and timestamps preserved at the same granularity?
- Does tool identity remain visible?
- Does the migration alter context packaging?
- Are retries, failures, and intermediate actions surfaced differently?
- Can an old research log still be reproduced after the runtime surface is retired?

### Failure classes

**Runtime Migration Drift**  
The same workflow produces materially different behavior after moving to the replacement runtime.

**Tool-Routing Provenance Loss**  
The final artifact does not reveal which execution route or integration layer was used.

**Migration Audit Discontinuity**  
Historical logs from the old surface cannot be compared cleanly with logs from the replacement surface.

**Compatibility Equivalence Assumption**  
The user or evaluator assumes two integration routes are equivalent because the visible task name is unchanged.

## New Benchmark 2: Progressive Artifact-State Fidelity

OpenAI’s 21 August web update allows interactive content to begin rendering before generation has fully completed.

This produces a new state sequence:

```text
GENERATION START
-> PARTIAL INTERACTIVE STATE VISIBLE
-> USER MAY OBSERVE / INTERACT
-> GENERATION CONTINUES
-> FINAL STATE
```

### Research problem

A user may form an interpretation, click, scroll, or interact with an artifact before the final generated state exists.

This creates the possibility that:

```text
EARLY VISIBLE STATE
!= FINAL ARTIFACT STATE
```

Deep Drift should test whether partial states are:

- replayable,
- logged,
- distinguishable from final state,
- included in exports,
- recoverable after reload,
- attributable to the same generation run.

## Interactive Response State Fidelity

Google’s 24 August update turns Gemini responses into interactive simulations and models that can be manipulated in chat.

```text
PROMPT
-> GENERATED SIMULATION
-> USER MANIPULATION
-> CHANGED STATE
-> CONCLUSION
-> COPY / SHARE / PDF / SCREENSHOT
```

The key provenance split is:

```text
MODEL-GENERATED STATE
!= USER-MANIPULATED STATE
!= EXPORTED STATE
```

A screenshot or PDF may preserve visual appearance while losing:

- simulation logic,
- parameter values,
- interaction sequence,
- final computational state,
- distinction between generated defaults and user changes.

### Benchmark measures

- initial-state recovery
- final-state recovery
- parameter survival
- interaction-history survival
- export behavior
- share-link fidelity
- reopen fidelity
- regeneration ambiguity
- semantic conclusion drift
- human repair minutes

## OpenAI: Memory and Ingestion Remain Mutable Workflow Variables

### Memory Boundary Transition Fidelity

Eligible Projects can switch between default and project-only memory without rebuilding the project.

```text
SAME PROJECT
+ SAME FILES
+ SAME TASK
+ DIFFERENT MEMORY BOUNDARY
= POTENTIALLY DIFFERENT CAUSAL WORKFLOW
```

Measure source selection, factual carryover, citations, omissions, artifact structure, and repair labor.

### Context-Surface Equivalence

The same source may enter through:

- direct upload
- Library
- Google Drive
- Project sources
- direct paste
- automatic attachment

Those paths should be treated as different experimental conditions until proven equivalent.

### Ingestion-Channel Drift

OpenAI’s 10k-character paste threshold is a clean controlled case:

```text
same semantic source
+ different ingestion object
= potentially different retrieval and artifact behavior
```

## Anthropic: Versioned Procedure and Persistent File State

Anthropic’s 20 August production-agent stack remains one of the clearest current examples of procedure becoming executable state.

```text
SOURCE FILE ID + SOURCE STATE
-> SKILL ID + VERSION
-> MODEL / AGENT
-> TOOL PERMISSIONS
-> BROWSER / COMPUTER ENVIRONMENT
-> EXTERNAL APPLICATION STATE
-> FINISHED ARTIFACT
```

Relevant Deep Drift benchmarks:

- Procedural-Version Provenance
- Persistent-File State Continuity
- Execution-State Provenance
- Agent-to-Artifact Provenance
- Skill Supply-Chain Governance

A correct artifact does not prove a recoverable procedure.

## Google: Mini-Apps and Cross-Ecosystem Fidelity

### Sheets Canvas

Sheets Canvas is a fully read-write mini-app layer over spreadsheet state.

```text
SHEET
<-> CANVAS
```

A final sheet value does not by itself reveal which surface caused the mutation.

Deep Drift construct: **Bidirectional State Fidelity**.

### Notebook Portability

Copied Gemini Notebooks preserve sources and Studio content while personal chat history and user notes do not transfer, and the copy stops syncing with the original.

```text
ARTIFACT PORTABILITY
!= COGNITIVE-HISTORY PORTABILITY
!= SYNCHRONIZATION CONTINUITY
```

### Cross-Ecosystem Structural Fidelity

Google’s improved Excel import preserves tables and linked pivot structures more faithfully.

Recommended benchmark:

```text
Excel -> Sheets -> Excel
```

Measure table semantics, pivots, formulas, named ranges, formatting, comments, links, metadata, and human repair minutes.

## Chat-to-Document and DOCX/PDF Generation

Direct file generation is no longer a meaningful capability benchmark by itself.

The stronger Deep Drift benchmark remains **Artifact Round-Trip Fidelity**:

```text
CHAT
-> GENERATED DOCX / PDF
-> HUMAN EDIT
-> REUPLOAD
-> AI REVISION
-> EXPORT
-> OPEN IN ANOTHER APPLICATION
-> RE-IMPORT
```

Measure:

- heading hierarchy
- table semantics
- citations
- hyperlinks
- styles
- comments
- tracked changes where available
- images and captions
- metadata
- editability
- semantic drift
- layout repair
- human repair minutes

A file that opens is not necessarily a file that survived.

## Microsoft: Whole-Stack State Is Explicit Infrastructure

Microsoft’s Work IQ APIs expose Chat, Context, Tools, and Workspaces. Workspaces store files, memory, progress, and intermediate outputs during agent execution.

```text
DELIVERED SYSTEM BEHAVIOR
=
MODEL
+ MEMORY
+ CONTEXT
+ PROCEDURE
+ TOOLING
+ PERMISSION
+ RUNTIME
+ INTERMEDIATE STATE
+ ARTIFACT STATE
+ PROVENANCE
```

This is why model-only evaluation is structurally obsolete for creator workflows.

## Updated Deep Drift Benchmark Set

| Benchmark | Core question |
|---|---|
| Runtime-Surface Migration Fidelity | Does the workflow remain equivalent when its execution surface is deprecated or replaced? |
| Tool-Routing Provenance | Can the final artifact reveal which runtime/tool integration route was used? |
| Progressive Artifact-State Fidelity | Can partial interactive states be distinguished, replayed, and audited before final generation completes? |
| Interactive Response State Fidelity | Does manipulated interactive state survive revisit, export, and sharing? |
| Exported Interaction Completeness | Does a shared/exported record preserve enough execution history to reconstruct the workflow? |
| Artifact Round-Trip Fidelity | Does structure/editability survive generate-edit-reupload-revise-export cycles? |
| Procedural-Version Provenance | Which exact skill/procedure version caused the result? |
| Persistent-File State Continuity | Does a reused file reference remain the same causal source over time? |
| Memory Boundary Transition Fidelity | What changes when memory policy changes inside the same visible project? |
| Context-Surface Equivalence | Does one source behave equivalently across upload, Library, Drive, Project, paste, and attachment? |
| Ingestion-Channel Drift | Does changing the ingestion object alter retrieval or output? |
| Bidirectional State Fidelity | Can mutation paths be reconstructed across linked app/source surfaces? |
| Cross-Ecosystem Structural Fidelity | Do Office/Workspace structures survive round-trip conversion? |
| Human Orchestration Burden | How much routing, verification, conversion, and repair still falls back to the human? |

## Deep Drift Position

The current creator-AI competition is increasingly:

```text
WORKFLOW ORCHESTRATION
+ STATE CONTINUITY
+ RUNTIME CONTINUITY
+ RECONSTRUCTABLE PROVENANCE
```

not merely model quality.

The most revealing failure class is still:

**successful output with incomplete history.**

A document opens.  
A simulation works.  
A mini-app updates its sheet.  
A repository changes.  
A runtime is deprecated and replaced.  
A shared snapshot looks complete.

Yet the record may not reveal the memory boundary, ingestion path, procedure version, runtime route, interactive state, tool calls, or user manipulation that actually caused the outcome.

That is not cosmetic metadata loss. It is a reliability, accountability, and reproducibility failure.

## Evidence Boundary

Platform capability claims are grounded in first-party product and documentation sources. Deep Drift benchmark names, causal interpretations, and experimental proposals are ĀTØR Institute research constructs, not claims made by OpenAI, Anthropic, Google, or Microsoft.

## Primary Sources

1. OpenAI, Release Notes, 24 August 2026: https://openai.com/products/release-notes/  
2. OpenAI, ChatGPT Release Notes, August 2026: https://help.openai.com/en/articles/6825453-  
3. Anthropic, Build production agents with computer use, Skills API, and Files API, 20 August 2026: https://claude.com/blog/computer-use-skills-api-files-api  
4. Google Workspace Updates, Generate interactive simulations and models in the Gemini app, 24 August 2026: https://workspaceupdates.googleblog.com/2026/08/generate-interactive-simulations-and-models-in-the-Gemini-app.html  
5. Google Workspace Updates, Sheets Canvas, 13 August 2026: https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html  
6. Google Workspace Updates, Make a copy of a notebook in Gemini Notebook, 17 August 2026: https://workspaceupdates.googleblog.com/2026/08/make-copy-of-notebook-in-gemini-notebook.html  
7. Google Workspace Updates, Improved file importing in Google Sheets, 11 August 2026: https://workspaceupdates.googleblog.com/2026/08/improved-file-import-google-sheets-tables.html  
8. Microsoft 365 Blog, Announcing the new Work IQ APIs, 2 June 2026: https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/announcing-the-new-work-iq-apis/  
9. Microsoft 365 Blog, Copilot Cowork is now generally available, 16 June 2026: https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/  
10. Microsoft 365 Blog, Copilot’s agentic capabilities in Word, Excel, and PowerPoint are generally available, 22 April 2026: https://www.microsoft.com/en-us/microsoft-365/blog/2026/04/22/copilots-agentic-capabilities-in-word-excel-and-powerpoint-are-generally-available/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
