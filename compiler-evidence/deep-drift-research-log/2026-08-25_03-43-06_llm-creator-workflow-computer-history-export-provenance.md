# Deep Drift Research Update

## LLM Creator Workflow Convergence: Memory, Skills, Mini-App Builders, Chat-to-Document Export, DOCX/PDF Generation, Copy-Paste/Export Fidelity, and Provenance

**Research date:** Tuesday, 25 August 2026  
**ATØR observation time:** 03:43:06 WIB / 20:43:06 UTC (24 August 2026)  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Update Watch  
**Status:** Fresh first-party-source scan. No materially newer OpenAI or Anthropic creator-workflow release after 20 August was found in the requested categories. The strongest current delta is the widening gap between workflow context that can be captured and workflow history that can later be exported or shared.

## Executive Summary

Creator AI is moving from isolated chat output toward persistent workflow systems. Memory, source files, reusable procedures, agents, permissions, runtime state, editable artifacts, export paths, and audit history are increasingly separate causal layers.

The old evaluation object:

```text
PROMPT -> MODEL -> RESPONSE
```

is too small.

A more realistic Deep Drift object is:

```text
HUMAN INTENT
-> MEMORY / PROJECT STATE
-> SOURCE + INGESTION SURFACE
-> SKILL / PROCEDURE VERSION
-> MODEL / AGENT
-> PERMISSION / GOVERNANCE
-> APP / BROWSER / TOOL
-> STATE MUTATION
-> EDITABLE ARTIFACT
-> COPY / EXPORT / MIGRATION
-> AUDIT / PROVENANCE
```

The central research question is no longer whether an LLM can generate a DOCX or PDF. It is whether the causal history of that artifact remains reconstructable after the workflow crosses memory, tools, apps, permissions, people, and export boundaries.

## Fresh Delta: Captured Context vs Exported History

OpenAI now exposes an unusually useful provenance contrast.

### Computer History

Computer History on macOS can let ChatGPT and Codex reference selected activity from apps and websites. It records interaction events rather than screenshots, recordings, microphone input, or system audio. Users can pause it, scope included apps and sites, inspect timeline items, and delete them.

For Deep Drift, this expands the context stack from conversational memory into ambient workflow memory:

```text
CHAT MEMORY
+ PROJECT MEMORY
+ FILE / CONNECTOR STATE
+ SELECTED COMPUTER ACTIVITY HISTORY
```

This creates a benchmark candidate:

**Ambient Context Attribution Fidelity**

Core question:

> If an answer or action is influenced by computer-history context, can the system later identify which external interaction event materially shaped the result?

Measure:
- event timestamp
- source app/site
- user-visible trace
- deletion effect
- persistence across sessions
- survival into exports/shares
- independent reviewer reconstruction

### Codex Read-Only Snapshots

OpenAI also supports read-only Codex thread/chat snapshots. These snapshots are static rather than live mirrors of the originating thread. Official release-note material also states that snapshots can omit tool calls and shell input/output.

This is a direct provenance boundary.

A shared record may preserve:
- visible conversation
- visible diffs or images
- selected user/assistant turns

while omitting:
- tool-call execution
- shell input
- shell output
- intermediate runtime state

Deep Drift benchmark:

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

## OpenAI: Memory and Ingestion Are Mutable Workflow State

### Mutable Project Memory

Eligible existing Projects can switch between default and project-only memory.

Deep Drift construct:

**Memory Boundary Transition Fidelity**

Hold constant:
- project identity
- source files
- task
- model where possible

Change:
- memory boundary only

Measure:
- source selection
- factual carryover
- artifact structure
- citations
- omissions
- human repair minutes

### Drive in Library

Google Drive files can be browsed directly from Library and added to chats without re-upload.

Deep Drift construct:

**Context-Surface Equivalence**

The same source may enter through:
- direct upload
- Library
- Google Drive
- Project sources
- paste
- attachment

Those routes should be treated as distinct ingestion conditions until experimentally proven equivalent.

### Rich Paste and Automatic Attachment Conversion

Rich paste preserves headings, bold text, links, and lists. Pastes over 10k characters can automatically become attachment objects.

This remains a strong case for:

**Ingestion-Channel Drift**

```text
same semantic source
+ different ingestion object
= potentially different retrieval and artifact behavior
```

## Anthropic: Skills and Persistent Procedure State

Anthropic's 20 August production-agent stack remains one of the clearest examples of procedure becoming a versioned system object.

Skills can encode instructions, scripts, and templates. Files persist by ID. Browser and computer tools can operate external software. Agents can return finished files.

The causal chain is:

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

## Google: Mini-Apps, Notebook Portability, and Structural Fidelity

### Sheets Canvas

Sheets Canvas creates natural-language-built, fully read-write mini-apps over spreadsheet data.

```text
SHEET
<-> CANVAS
```

A final spreadsheet value does not reveal which interface caused the mutation.

Deep Drift construct:

**Bidirectional State Fidelity**

### Gemini Notebook Copying

Notebook copying preserves sources and Studio content while personal chat history and user notes do not transfer; the copy also stops syncing with the original.

This gives a strong relation:

```text
ARTIFACT PORTABILITY
!= COGNITIVE-HISTORY PORTABILITY
!= SYNCHRONIZATION CONTINUITY
```

A copied research environment can appear complete while silently losing part of the reasoning history that produced it.

### Structural Import Fidelity

Google's August Excel import improvements preserve Excel tables as Sheets tables and retain linked pivot-table structures instead of flattening them into static grids.

Deep Drift construct:

**Cross-Ecosystem Structural Fidelity**

Recommended test:

```text
Excel -> Sheets -> Excel
```

Measure:
- table semantics
- pivot links
- formulas
- named ranges
- formatting
- charts
- comments
- links
- metadata
- human repair minutes

## Chat-to-Document and DOCX/PDF Generation

Gemini can generate Google Docs, Sheets, Slides, PDF, DOCX, XLSX, CSV, LaTeX, TXT, RTF, and Markdown directly from chat.

The weak benchmark is:

> Can the system create a DOCX or PDF?

The stronger benchmark is:

### Artifact Round-Trip Fidelity

```text
CHAT
-> GENERATED DOCX / PDF
-> HUMAN EDIT
-> REOPEN / REUPLOAD
-> AI REVISION
-> EXPORT
-> OPEN IN ANOTHER APPLICATION
-> RE-IMPORT
```

Measure:
- heading hierarchy
- table semantics
- citation survival
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

## Microsoft: Whole-Stack State and Export Become Explicit

Microsoft's Work IQ APIs explicitly separate:

- Chat
- Context
- Tools
- Workspaces

Workspaces can store files, memory, progress, intermediate state, and outputs during long-running agent work.

This directly supports the Deep Drift whole-stack equation:

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

Microsoft's Copilot extensibility documentation also exposes a **Copilot Interaction Export API** for exporting user prompts and responses.

That creates another provenance question:

**Interaction-History Export Fidelity**

Does the exported record preserve enough of the actual workflow to reconstruct:
- tool actions
- intermediate state
- files
- citations
- timestamps
- final artifact lineage

If export preserves prompts and responses while the real task depended on tool calls, workspaces, files, or runtime state, then the export can still be causally incomplete.

## Cross-Platform Creator Workflow Trend

Across OpenAI, Anthropic, Google, and Microsoft, the convergence is strong:

1. Memory is becoming mutable system state.
2. Skills are becoming reusable and versioned procedures.
3. Files are becoming persistent workflow state.
4. Mini-app builders turn natural language into operational interfaces.
5. Chat is becoming an entry point into native document and app execution.
6. Direct DOCX/PDF generation is becoming ordinary.
7. Copy-paste and import/export mechanics are becoming context-routing decisions.
8. Agents increasingly mutate external state under permissions and approvals.
9. Ambient computer activity can become usable context.
10. Shared/exported records can omit parts of the execution chain.
11. Intermediate state and workspaces are becoming explicit infrastructure.
12. A final artifact can be correct while its causal history is broken.

The twelfth point remains the central Deep Drift problem.

## Recommended Deep Drift Benchmark Set

| Benchmark | Core question |
|---|---|
| Ambient Context Attribution Fidelity | Can the system identify which external computer-history event materially influenced an answer or action? |
| Exported Interaction Completeness | Does a shared/exported record preserve enough execution history to reconstruct the workflow? |
| Interaction-History Export Fidelity | Does an enterprise interaction export preserve the causal state behind prompts and responses? |
| Artifact Round-Trip Fidelity | Does structure and editability survive generate-edit-reupload-revise-export cycles? |
| Procedural-Version Provenance | Which exact skill or procedure version materially caused the result? |
| Persistent-File State Continuity | Does a reused file reference remain the same causal source over time? |
| Memory Boundary Transition Fidelity | What changes when memory policy changes inside the same visible project? |
| Context-Surface Equivalence | Does the same source behave equivalently across upload, Library, Drive, Project, paste, or attachment? |
| Ingestion-Channel Drift | Does changing the ingestion object alter retrieval, reasoning, citation, or artifact output? |
| Bidirectional State Fidelity | Can mutation paths be reconstructed across linked source and interface surfaces? |
| Cross-Ecosystem Structural Fidelity | Do tables, formulas, pivots, links, and metadata survive Office/Workspace transitions? |
| Human Orchestration Burden | How much routing, verification, conversion, and repair still falls back onto the human? |

## Deep Drift Research Position

The competitive unit in creator AI is shifting from model quality toward:

**workflow orchestration + state continuity + reconstructable provenance**

A useful Deep Drift equation is:

```text
DELIVERED SYSTEM INTELLIGENCE
=
MODEL
+ MEMORY
+ CONTEXT
+ PROCEDURE
+ TOOLING
+ PERMISSION
+ RUNTIME
+ ARTIFACT STATE
+ PROVENANCE
```

The most revealing failure class is:

**successful output with incomplete history.**

The document opens.  
The spreadsheet calculates.  
The mini-app works.  
The repository changes.  
The shared snapshot looks complete.

Yet the exported record may omit tool calls, shell execution, ambient context, memory boundaries, workspace state, or runtime history that actually caused the outcome.

That is not cosmetic metadata loss.

It is a reproducibility, accountability, and scientific-evidence failure.

## Evidence Boundary

Platform capability claims in this report are grounded in first-party product and documentation sources. Deep Drift benchmark names, causal interpretations, and experimental proposals are ĀTØR Institute research constructs and are not platform-vendor claims.

## Primary Sources

1. OpenAI, ChatGPT Release Notes, August 2026: https://help.openai.com/en/articles/6825453-gpt-4  
2. OpenAI, Product Release Notes, 20 August 2026: https://openai.com/products/release-notes/  
3. Anthropic, Build production agents with computer use, Skills API, and Files API, 20 August 2026: https://claude.com/blog/computer-use-skills-api-files-api  
4. Google Workspace Updates, August 2026: https://workspaceupdates.googleblog.com/2026/08/  
5. Google Workspace Updates, file generation in Gemini, 27 April 2026: https://workspaceupdates.googleblog.com/2026/04/move-from-conversation-to-creation-with-file-generation-in-Gemini.html  
6. Microsoft 365 Blog, Work IQ APIs, 2 June 2026: https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/announcing-the-new-work-iq-apis/  
7. Microsoft Learn, Microsoft 365 Copilot extensibility overview, updated August 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
