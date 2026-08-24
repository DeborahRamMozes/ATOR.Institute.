# Deep Drift Research Update

## LLM Creator Workflow Convergence: Memory, Skills, Computer History, Mini-Apps, Chat Export, DOCX/PDF Generation, and Provenance

**Research date:** Tuesday, 25 August 2026  
**ATØR observation time:** 01:46 WIB / 18:46 UTC (24 August 2026)  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Update Watch  
**Status:** Fresh first-party-source scan with a genuine new provenance delta.

## Executive Summary

The creator-AI stack continues to converge around persistent context, reusable procedures, mini-apps, executable tools, editable artifacts, and cross-surface export. The important new Deep Drift signal in this scan is not another model release. It is a sharper split between **captured workflow history** and **exportable workflow history**.

OpenAI's current product surfaces now expose both sides of that problem:

- **Computer History** can bring selected app and website interaction events into ChatGPT and Codex.
- **Read-only Codex chat snapshots** can be shared, but the snapshot is static and does not include tool calls or shell input/output.

That creates a clean Deep Drift contradiction:

```text
WORKFLOW CONTEXT CAN EXIST
!=
SHARED / EXPORTED HISTORY IS CAUSALLY COMPLETE
```

The user may have enough context for continuity during work, while a later exported or shared record omits parts of the execution chain required to reconstruct what actually happened.

## New Delta: Context Capture vs Export Completeness

### Computer History

OpenAI's macOS Computer History lets ChatGPT and Codex reference selected activity from apps and websites. It records interaction events rather than screenshots or audio, and users can inspect, pause, delete, and scope which apps/sites are included.

For Deep Drift, this expands the memory problem from:

```text
CHAT MEMORY
```

to:

```text
CHAT MEMORY
+ PROJECT MEMORY
+ FILE / CONNECTOR STATE
+ AMBIENT COMPUTER ACTIVITY HISTORY
```

This creates a new benchmark candidate:

**Ambient Context Attribution Fidelity**

Core question:

> When a response or action is influenced by computer activity history, can the system later identify which interaction event materially shaped the result?

Measure:
- event timestamp
- source app/site
- whether the event is exposed to the user
- whether the event survives export or sharing
- whether deleting the event changes subsequent behavior
- whether an independent reviewer can reconstruct its causal contribution

### Codex Read-Only Snapshot

OpenAI's read-only Codex snapshot is static and does not update when the original chat changes. More importantly for Deep Drift, the snapshot can omit tool calls and shell input/output.

This is a highly relevant provenance boundary.

A shared record may preserve visible conversation while omitting tool-call execution, shell input/output, and some intermediate runtime state.

This produces another benchmark:

**Exported Interaction Completeness**

```text
LIVE WORKFLOW
-> TOOL CALLS
-> SHELL / COMPUTER ACTIONS
-> FILE MUTATIONS
-> VISIBLE CHAT
-> SHARED SNAPSHOT
```

Research question:

> How much of the causal workflow survives into the exported or shared record?

A successful share link is not equivalent to a reproducible work history.

## OpenAI: Memory, Ingestion, and Creator-State Routing

Recent OpenAI changes continue to make memory and ingestion surface mutable workflow variables.

### Memory Boundary Transition Fidelity

Eligible existing Projects can switch between default and project-only memory.

### Context-Surface Equivalence

The same source may enter through upload, Library, Drive, Project sources, paste, or attachment. Those routes should not be assumed equivalent without direct testing.

### Ingestion-Channel Drift

Rich paste preserves structure, while pastes over 10k characters can become attachment objects automatically. Semantically identical content can therefore become a different machine object depending on ingestion path.

## Anthropic: Skills and Persistent Procedure State

Anthropic's 20 August production-agent stack remains the strongest current case for versioned executable procedure:

```text
SOURCE FILE STATE
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

The crucial point remains: **a correct artifact does not prove a recoverable procedure.**

## Google: Mini-Apps, Portability, and Structural Fidelity

### Sheets Canvas

Sheets Canvas creates fully read-write mini-apps layered over spreadsheet data.

```text
SHEET
<-> CANVAS
```

A final value does not reveal which interface caused the mutation.

### Gemini Notebook Copying

Notebook copying can preserve sources and Studio content while omitting personal chat history and user notes; copied notebooks stop syncing with originals.

```text
ARTIFACT PORTABILITY
!= COGNITIVE-HISTORY PORTABILITY
!= SYNCHRONIZATION CONTINUITY
```

### Structural Import Fidelity

Google's recent Excel import improvements preserve Excel tables and linked pivot structures more faithfully in Sheets.

Deep Drift construct: **Cross-Ecosystem Structural Fidelity**.

## DOCX/PDF and Chat-to-Document Generation

Direct file generation is now too common to be a useful benchmark by itself.

### Artifact Round-Trip Fidelity

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

Measure heading hierarchy, tables, citations, hyperlinks, styles, comments, tracked changes where available, images, captions, metadata, editability, semantic drift, layout repair, and human repair minutes.

A file that opens is not necessarily a file that survived.

## Microsoft: Whole-Stack State Is Becoming Explicit

Microsoft's Work IQ model separates Chat, Context, Tools, and Workspaces. Workspaces can preserve files, memory, progress, intermediate state, and outputs for agents.

This reinforces the Deep Drift whole-stack equation:

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

The model is only one component.

## Deep Drift Research Expansion

This scan adds two benchmark families to the existing creator-workflow set:

| Benchmark | Core question |
|---|---|
| Ambient Context Attribution Fidelity | Can the system identify which external computer-history event materially influenced an answer or action? |
| Exported Interaction Completeness | Does a shared/exported record contain enough of the execution chain to reconstruct the workflow? |
| Artifact Round-Trip Fidelity | Does structure/editability survive generate-edit-reupload-revise-export cycles? |
| Procedural-Version Provenance | Which exact procedure version caused the result? |
| Persistent-File State Continuity | Does a persistent file reference remain the same causal source over time? |
| Memory Boundary Transition Fidelity | What changes when memory policy changes inside the same visible project? |
| Context-Surface Equivalence | Does one source behave equivalently across upload, Library, Drive, Project, paste, or attachment? |
| Ingestion-Channel Drift | Does changing the ingestion object alter retrieval or output? |
| Bidirectional State Fidelity | Can mutation paths be reconstructed across linked app/source surfaces? |
| Cross-Ecosystem Structural Fidelity | Do Office/Workspace structures survive round-trip conversion? |
| Human Orchestration Burden | How much routing, verification, conversion, and repair still falls back to the human? |

## Deep Drift Position

The current creator-AI competition is increasingly:

```text
WORKFLOW ORCHESTRATION
+
STATE CONTINUITY
+
RECONSTRUCTABLE PROVENANCE
```

not simply model quality.

The most revealing failure class is:

**successful output with incomplete history.**

A document opens. A mini-app works. A repository changes. A message sends. A shared snapshot looks complete. Yet the exported record may omit the tool calls, shell execution, ambient context, memory boundary, or runtime state that actually caused the outcome.

That is not cosmetic metadata loss. It is a reproducibility, accountability, and scientific-evidence failure.

## Evidence Boundary

Platform capability claims in this report are grounded in first-party product and documentation sources. Deep Drift benchmark names, causal interpretations, and experimental proposals are ĀTØR Institute research constructs and are not platform-vendor claims.

## Primary Sources

1. OpenAI, ChatGPT Release Notes, August 2026: https://help.openai.com/en/articles/6825453-gpt-4  
2. OpenAI, ChatGPT Business Release Notes, August 2026: https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes  
3. OpenAI, Product Release Notes, 20 August 2026: https://openai.com/products/release-notes/  
4. Anthropic, Build production agents with computer use, Skills API, and Files API, 20 August 2026: https://claude.com/blog/computer-use-skills-api-files-api  
5. Google Workspace Updates, Sheets Canvas, 13 August 2026: https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html  
6. Google Workspace Updates, Gemini Notebook copy, 17 August 2026: https://workspaceupdates.googleblog.com/2026/08/make-copy-of-notebook-in-gemini-notebook.html  
7. Microsoft 365 Blog, Work IQ APIs, June 2026: https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/announcing-the-new-work-iq-apis/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
