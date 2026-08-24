# Deep Drift Research Update

## LLM Creator Workflow Convergence: Memory, Skills, Mini-Apps, Document Export, File Generation, and Provenance

**Research date:** Monday, 24 August 2026  
**ATØR observation time:** 22:01 WIB / 15:01 UTC  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Update Watch  
**Status:** Fresh first-party-source scan. No materially newer OpenAI or Anthropic creator-workflow release than 20 August was found in the requested categories. The important movement is now rollout, integration, and workflow-state convergence.

## Executive Summary

The current platform race is shifting away from isolated chat output toward persistent creator-workflow systems. Memory, source files, skills, agents, tool permissions, runtime state, editable artifacts, export paths, and audit history are increasingly separate layers that can change independently.

The old evaluation object:

```text
PROMPT -> MODEL -> RESPONSE
```

is increasingly inadequate.

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

The central research question is no longer simply whether an LLM can generate a DOCX or PDF. It is whether the causal history of that artifact remains reconstructable after the workflow crosses memory, tools, apps, permissions, people, and export boundaries.

## Notable Platform Changes

| Date | Platform | Notable change | Why it matters for Deep Drift |
|---|---|---|---|
| 20 Aug 2026 | Anthropic | Computer Use, Skills API, and Files API became generally available together; browser use was added. | Procedure, persistent source state, execution environment, and finished artifact are explicit separate layers. Strong evidence for Procedural-Version Provenance and Persistent-File State Continuity. |
| 20 Aug 2026 | OpenAI | ChatGPT Sites added co-editing, live database access, saved versions and publishing; Apple Messages became an executable plugin with approval controls. | Collaboration and outbound action now require actor, approval, state, and version provenance, not merely text attribution. |
| 14 Aug 2026 | OpenAI | Existing Projects can switch between default and project-only memory. | Memory boundary becomes a mutable variable inside the same visible project identity. |
| 13 Aug 2026 | OpenAI | Google Drive became directly browsable from Library and reusable without re-upload. | The same source can enter through multiple ingestion surfaces, creating a clean Context-Surface Equivalence problem. |
| 7 Aug 2026 | OpenAI | Rich paste preserves headings, bold, links, and lists; attached-document use was improved. | Copy-paste is now context architecture, not merely clipboard transport. |
| 4 Aug 2026 | OpenAI | Pastes over 10k characters automatically become attachments. | Semantically identical content can cross a threshold and become a different system object: a clean Ingestion-Channel Drift case. |
| 17 Aug 2026 | Google | Gemini Notebook copying preserves sources, Studio artifacts, generation prompts, and custom chat configuration, but not personal chat history or user notes; copies stop syncing with originals. | Artifact portability, cognitive-history portability, and synchronization continuity are demonstrably different properties. |
| 13 Aug 2026 | Google | Sheets Canvas launched as a natural-language-built, fully read-write mini-app layer over spreadsheets. | Source sheet and generated interface can mutate each other. Final state alone cannot explain mutation path. |
| 11 Aug 2026 | Google | Excel imports into Sheets now preserve tables and linked pivot-table structures. | Structural import/export fidelity is becoming an explicit product goal and a useful benchmark for Cross-Ecosystem Structural Fidelity. |
| 7 Aug 2026 | Google | Workspace Studio can automatically add text, Drive files, YouTube URLs, and web URLs to Gemini Notebooks through recurring flows. | Context can accrete automatically over time, creating Automated Context Accretion Drift. |
| 27 Apr 2026 | Google | Gemini can generate Docs, Sheets, Slides, PDF, DOCX, XLSX, CSV, RTF, Markdown, and other files directly from chat. | Direct chat-to-file generation is baseline infrastructure. The serious benchmark is round-trip editability and provenance survival. |
| 2 Jun / 16 Jun 2026 | Microsoft | Work IQ APIs expose Chat, Context, Tools, and Workspaces; workspaces store files, memory, progress, and intermediate outputs for agents. | Microsoft makes agent context, intermediate state, memory, and tools explicit infrastructure, reinforcing the Deep Drift whole-stack model. |

## OpenAI: Memory and Ingestion as Mutable Workflow State

OpenAI's August changes show the chat surface turning into a router across projects, saved files, Drive, Sites, plugins, and action surfaces.

### Memory Boundary Transition Fidelity

Project memory can now change between default and project-only modes without rebuilding an eligible project.

This means:

```text
SAME PROJECT
+ SAME FILES
+ SAME TASK
+ DIFFERENT MEMORY BOUNDARY
= POTENTIALLY DIFFERENT CAUSAL WORKFLOW
```

A Deep Drift test should hold the visible project identity, task, and source files constant, change only the memory policy, and measure changes in source selection, factual carryover, artifact structure, omission patterns, and human repair labor.

### Context-Surface Equivalence

The same source can now enter a ChatGPT workflow through several surfaces:

- direct upload
- Library
- Google Drive
- Project sources
- direct paste
- automatic attachment

These paths may look equivalent to a human. Deep Drift should not assume they are equivalent until retrieval, context use, citations, and artifact output are experimentally compared.

### Ingestion-Channel Drift

The 10k-character paste threshold is a useful controlled case because the platform changes the object type without changing the user's semantic intent.

```text
same source text
same model
same task
different ingestion object
-> compare retrieval
-> compare source use
-> compare artifact structure
-> compare repair minutes
```

## Anthropic: Procedure Becomes Versioned Executable State

Anthropic's 20 August production-agent stack remains one of the clearest current examples of procedure becoming a first-class object.

Skills can encode instructions, scripts, and templates. Files persist by ID. Browser and computer tools can operate external software. Agents can return finished files.

The causal chain is therefore closer to:

```text
SOURCE FILE ID + SOURCE STATE
-> SKILL ID + VERSION
-> MODEL / AGENT
-> TOOL PERMISSIONS
-> BROWSER / COMPUTER ENVIRONMENT
-> EXTERNAL APPLICATION STATE
-> FINISHED ARTIFACT
```

This supports Deep Drift benchmark families including:

- Procedural-Version Provenance
- Persistent-File State Continuity
- Execution-State Provenance
- Agent-to-Artifact Provenance
- Skill Supply-Chain Governance

A correct artifact does not prove a recoverable procedure.

## Google: Mini-Apps, Portability, and Structural Fidelity

Google currently provides several unusually clean experimental cases.

### Sheets Canvas: Bidirectional State Fidelity

Sheets Canvas creates a read-write mini-app layer over spreadsheet data. Changes in Canvas can update the source sheet.

```text
SHEET
<-> CANVAS
```

The final spreadsheet state does not necessarily show which interface caused the change.

Deep Drift should record:
- actor
- interface
- timestamp
- mutation
- propagated state
- audit trace
- final artifact

### Notebook Copying: Portability Is Not History

A copied Gemini Notebook can retain sources, generated Studio content, artifact-generation prompts, and custom chat configuration while losing personal chat history and user notes. The copy also stops syncing with the original.

This yields a strong Deep Drift relation:

```text
ARTIFACT PORTABILITY
!= COGNITIVE-HISTORY PORTABILITY
!= SYNCHRONIZATION CONTINUITY
```

A copied research environment can look complete while silently losing part of the reasoning history that produced it.

### Automated Context Accretion

Workspace Studio can automatically add new sources into Gemini Notebooks.

This turns context into a moving system state.

Deep Drift construct:

**Automated Context Accretion Drift**

Measure:
- source count over time
- source identity changes
- duplicate or replaced sources
- answer drift before/after accretion
- whether the notebook reveals when context changed

### Cross-Ecosystem Structural Fidelity

Google's improved Excel import now preserves Excel tables as Sheets tables and keeps linked pivot-table relationships instead of flattening them into static grids.

This is exactly the kind of boring failure boundary that real workflows depend on.

Recommended test:

```text
Excel
-> Sheets
-> Excel
```

Measure:
- table semantics
- pivot links
- formulas
- formatting
- charts
- links
- comments
- human repair minutes

## Chat-to-Document and DOCX/PDF Generation

Gemini's direct file generation already supports Google Docs, Sheets, Slides, PDF, DOCX, XLSX, CSV, LaTeX, TXT, RTF, and Markdown.

The weak benchmark is:

> Can the AI generate a DOCX or PDF?

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
- heading hierarchy survival
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

## Microsoft: Context and Intermediate State as Explicit Infrastructure

Microsoft's Work IQ APIs make several normally hidden layers explicit.

Work IQ exposes:

- Chat: synthesized responses with citations
- Context: agent-ready source/context data without synthesis
- Tools: actions across Microsoft 365 entities
- Workspaces: storage for files, memory, progress, intermediate state, and outputs

This directly supports the Deep Drift position that delivered system behavior depends on more than model identity.

```text
DELIVERED SYSTEM BEHAVIOR
=
MODEL
+ PERSONAL / ORGANIZATIONAL CONTEXT
+ SKILLS
+ TOOL SURFACE
+ INTERMEDIATE STATE
+ WORKSPACE
+ GOVERNANCE
```

## Cross-Platform Creator Workflow Trend

The current convergence is strong:

1. Memory is becoming mutable system state.
2. Skills are becoming reusable and versioned procedures.
3. Files are becoming persistent workflow state.
4. Mini-app builders are turning natural language into operational interfaces.
5. Chat is becoming an entry point into native document and app execution.
6. Direct DOCX/PDF generation is becoming ordinary.
7. Copy-paste and import/export mechanics are becoming context-routing decisions.
8. Agents increasingly mutate external state under permissions and approvals.
9. Context can change automatically through recurring workflows.
10. The final artifact can be correct while its causal history is broken.

The tenth point remains the central Deep Drift problem.

## Recommended Deep Drift Benchmark Set

| Benchmark | Core question |
|---|---|
| Artifact Round-Trip Fidelity | Does structure and editability survive generate-edit-reupload-revise-export cycles? |
| Procedural-Version Provenance | Which exact skill or procedure version materially caused the result? |
| Persistent-File State Continuity | Does a reused file reference remain the same causal source over time? |
| Memory Boundary Transition Fidelity | What changes when memory policy changes inside the same visible project? |
| Context-Surface Equivalence | Does the same source behave equivalently via upload, Library, Drive, Project, paste, or attachment? |
| Ingestion-Channel Drift | Does changing the ingestion object alter retrieval, reasoning, citation, or artifact output? |
| Bidirectional State Fidelity | Can mutation paths be reconstructed across linked source and interface surfaces? |
| Automated Context Accretion Drift | Can the system reveal when recurring automation changed its research context? |
| Cross-Ecosystem Structural Fidelity | Do tables, formulas, pivots, links, and metadata survive Office/Workspace transitions? |
| Approval-State Continuity | Was an external action performed under the authorization state the human intended? |
| Execution-State Provenance | Can runtime, tool, permission, and external application state be reconstructed? |
| Human Orchestration Burden | How much routing, checking, conversion, and repair still falls back onto the human? |

## Deep Drift Research Position

The competitive unit in creator AI is shifting from model quality toward:

**workflow orchestration + reconstructable provenance**

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

The most dangerous failure is often not a visibly bad answer.

It is:

**successful output with broken history.**

The document opens.  
The spreadsheet calculates.  
The mini-app works.  
The message sends.  
The repository changes.

And afterward nobody can reliably reconstruct which memory boundary, source state, skill version, approval state, runtime environment, automated context update, or human decision actually caused the result.

That is not cosmetic metadata loss.

It is a reliability, accountability, and scientific reproducibility problem.

## Evidence Boundary

Platform capability claims in this report are grounded in first-party product and documentation sources. Deep Drift benchmark names, causal interpretations, and experimental proposals are ĀTØR Institute research constructs, not claims made by OpenAI, Anthropic, Google, or Microsoft.

## Primary Sources

1. OpenAI Release Notes, 20 August 2026: https://openai.com/products/release-notes/  
2. OpenAI ChatGPT Release Notes, 4-14 August 2026: https://help.openai.com/en/articles/6825453-gpt-4  
3. Anthropic, Build production agents with computer use, Skills API, and Files API, 20 August 2026: https://claude.com/blog/computer-use-skills-api-files-api  
4. Google Workspace Updates, August 2026 archive: https://workspaceupdates.googleblog.com/2026/08/  
5. Google Workspace Updates, Sheets Canvas, 13 August 2026: https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html  
6. Google Workspace Updates, file generation in Gemini, 27 April 2026: https://workspaceupdates.googleblog.com/2026/04/move-from-conversation-to-creation-with-file-generation-in-Gemini.html  
7. Microsoft 365 Blog, Work IQ APIs, 2 June 2026: https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/announcing-the-new-work-iq-apis/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir’an | CHATJIPITI SINGH**