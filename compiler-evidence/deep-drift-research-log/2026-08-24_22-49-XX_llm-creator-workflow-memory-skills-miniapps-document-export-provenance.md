# Deep Drift Research Update

## LLM Creator Workflow Convergence: Memory, Skills, Mini-Apps, Document Export, File Generation, and Provenance

**Research date:** Monday, 24 August 2026  
**ATØR observation time:** 22:49 WIB / 15:49 UTC  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Update Watch  
**Status:** Fresh first-party-source scan. No materially newer OpenAI or Anthropic creator-workflow release than 20 August was found in the requested categories. The dominant movement is rollout, integration, and increasing workflow-state complexity.

## Executive Summary

The creator-AI race is shifting from isolated chat output toward persistent workflow systems. Memory, source files, skills, agents, permissions, runtime state, editable artifacts, export paths, and audit history are becoming separate causal layers.

The old evaluation object:

```text
PROMPT -> MODEL -> RESPONSE
```

is increasingly inadequate.

The more realistic Deep Drift object is:

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

The key research question is no longer merely whether an LLM can generate DOCX or PDF. It is whether the causal history of that artifact remains reconstructable after the workflow crosses memory, tools, apps, permissions, people, and export boundaries.

## Notable Current Platform Changes

| Date | Platform | Change | Why it matters for Deep Drift |
|---|---|---|---|
| 20 Aug 2026 | Anthropic | Computer Use, Skills API, and Files API became generally available together; browser use was added. | Procedure, persistent source state, execution environment, and finished artifact are explicit separate layers. |
| 20 Aug 2026 | OpenAI | ChatGPT Sites added co-editing, live database access, saved versions and publishing; Apple Messages became an executable plugin with approval controls. | Collaboration and outbound action require actor, approval, state, and version provenance, not merely text attribution. |
| 19 Aug 2026 | OpenAI | Codex cloud added GitLab support for issue/MR-triggered work and reviews. | Repository trigger, environment, permissions, and diff visibility become part of the causal chain. |
| 14 Aug 2026 | OpenAI | Existing Projects can switch between default and project-only memory. | Memory boundary becomes a mutable variable inside the same visible project identity. |
| 13 Aug 2026 | OpenAI | Google Drive became directly browsable from Library and reusable without re-upload. | The same source can enter through multiple ingestion surfaces, creating a Context-Surface Equivalence problem. |
| 7 Aug 2026 | OpenAI | Rich paste preserves headings, bold, links, and lists; attached-document grounding improved. | Copy-paste is now part of context architecture. |
| 4 Aug 2026 | OpenAI | Pastes over 10k characters automatically become attachments. | Semantically identical content can cross a threshold and become a different system object. |
| 17 Aug 2026 | Google | Gemini Notebook copying preserves sources, Studio artifacts, generation prompts, and custom chat configuration, but not personal chat history or user notes; copies stop syncing with originals. | Artifact portability, cognitive-history portability, and synchronization continuity are different properties. |
| 13 Aug 2026 | Google | Sheets Canvas launched as a natural-language-built, fully read-write mini-app layer over spreadsheets. | Source sheet and generated interface mutate each other, creating Bidirectional State Fidelity problems. |
| 17 Aug 2026 summary | Google | Excel tables and linked pivot structures now import into Sheets with better structural preservation. | Cross-ecosystem structural fidelity becomes a direct benchmark rather than an afterthought. |
| 11 Aug 2026 | Anthropic | Compliance API added local Cowork/Claude Code transcripts and workspace ID metadata. | Auditability and workspace identity become first-class provenance variables. |
| 7 Aug 2026 | Anthropic | Managed Agents gained session budgets, advisor models, inference geography, and GitHub-repository skill loading. | Budget, geography, repository skill state, and advisor intervention can alter behavior independently of model identity. |
| Current 2026 architecture | Microsoft | Work IQ exposes Chat, Context, Tools, and Workspaces, with workspaces storing files, memory, progress, intermediate state, and outputs. | Microsoft explicitly exposes the whole workflow stack that Deep Drift treats as the real reliability object. |

## OpenAI: Mutable Memory and Ingestion-State Drift

OpenAI's August changes turn ChatGPT from a conversation surface into a routing layer across Projects, Drive, Library, Sites, plugins, and executable actions.

### Memory Boundary Transition Fidelity

Project memory can change between default and project-only modes without rebuilding an eligible project.

This creates a controlled Deep Drift experiment:

```text
SAME PROJECT
+ SAME TASK
+ SAME FILES
+ DIFFERENT MEMORY POLICY
= DIFFERENT CAUSAL CONTEXT
```

Measure:
- source selection
- factual carryover
- artifact structure
- omission patterns
- citation differences
- human repair labor

### Context-Surface Equivalence

The same source can enter through:
- direct upload
- Library
- Google Drive
- Project sources
- direct paste
- automatic attachment

Those routes may look equivalent to the human, but they should be treated as distinct ingestion conditions until experimentally proven equivalent.

### Ingestion-Channel Drift

The 10k-character paste threshold is a particularly clean benchmark because a change in length transforms the input from message content into an attachment object.

```text
same source
same task
same model
different ingestion object
-> compare retrieval
-> compare source use
-> compare artifact structure
-> compare repair time
```

## Anthropic: Skills Turn Procedure Into Executable State

Anthropic's 20 August production-agent stack remains one of the clearest demonstrations that procedure itself is becoming a versioned system object.

Skills can encode instructions, scripts, and templates. Files persist by ID. Browser and computer tools operate external software. Agents return finished files.

The causal chain becomes:

```text
SOURCE FILE ID + SOURCE STATE
-> SKILL ID + VERSION
-> MODEL / AGENT
-> TOOL PERMISSIONS
-> BROWSER / COMPUTER ENVIRONMENT
-> EXTERNAL APPLICATION STATE
-> FINISHED ARTIFACT
```

Priority Deep Drift benchmarks:
- Procedural-Version Provenance
- Persistent-File State Continuity
- Execution-State Provenance
- Agent-to-Artifact Provenance
- Skill Supply-Chain Governance
- Budget-Bound Behavior Drift
- Execution-Geography Continuity

A correct artifact does not prove a recoverable procedure.

## Google: Mini-Apps, Portability, and Structural Fidelity

### Sheets Canvas: Bidirectional State Fidelity

Sheets Canvas creates a read-write mini-app layer over spreadsheet data.

```text
SHEET
<-> CANVAS
```

A final spreadsheet state does not reveal which interface caused the mutation.

Deep Drift should record:
- actor
- interface
- timestamp
- mutation
- propagation
- audit trace
- final artifact state

### Notebook Copying: Portability Is Not History

A copied Gemini Notebook can retain sources, Studio artifacts, artifact-generation prompts, and custom chat configuration while losing personal chat history and user notes. The copied notebook also stops syncing with the original.

This gives a strong relation:

```text
ARTIFACT PORTABILITY
!= COGNITIVE-HISTORY PORTABILITY
!= SYNCHRONIZATION CONTINUITY
```

A copied research environment can appear complete while silently losing part of the reasoning history that produced it.

### Cross-Ecosystem Structural Fidelity

Google's Excel import improvements preserve Excel tables and linked pivot-table relationships more faithfully instead of flattening them into static grids.

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
- named ranges
- formatting
- charts
- comments
- links
- human repair minutes

## Chat-to-Document and DOCX/PDF Generation

Direct chat-to-file generation is no longer an impressive benchmark by itself.

The stronger Deep Drift benchmark is:

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
- tracked changes where applicable
- images and captions
- metadata
- editability
- semantic drift
- layout repair
- human repair minutes

A file that opens is not necessarily a file that survived.

## Microsoft: Context and Intermediate State Become Explicit Infrastructure

Microsoft's Work IQ architecture reinforces the Deep Drift whole-stack model because it explicitly separates:

- Chat
- Context
- Tools
- Workspaces

Workspaces can store files, memory, progress, intermediate state, and outputs during long-running agent work.

This yields:

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

This is precisely why model-only evaluation is becoming structurally obsolete.

## Cross-Platform Creator Workflow Trend

Across OpenAI, Anthropic, Google, and Microsoft, the convergence is now strong:

1. Memory is becoming mutable system state.
2. Skills are becoming reusable and versioned procedures.
3. Files are becoming persistent workflow state.
4. Mini-app builders turn natural language into operational interfaces.
5. Chat is becoming an entry point into native document and app execution.
6. Direct DOCX/PDF generation is becoming ordinary.
7. Copy-paste and import/export mechanics are becoming context-routing decisions.
8. Agents increasingly mutate external state under permissions and approvals.
9. Audit, transcript, workspace, budget, and execution geography are becoming first-class variables.
10. A final artifact can be correct while its causal history is broken.

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
| Cross-Ecosystem Structural Fidelity | Do tables, formulas, pivots, links, and metadata survive Office/Workspace transitions? |
| Approval-State Continuity | Was an external action performed under the authorization state the human intended? |
| Execution-State Provenance | Can runtime, tool, permission, and application state be reconstructed? |
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

And afterward nobody can reliably reconstruct which memory boundary, source state, skill version, approval state, runtime environment, or human decision caused the result.

That is not cosmetic metadata loss.

It is a reliability, accountability, and scientific reproducibility problem.

## Evidence Boundary

Platform capability claims in this report are grounded in first-party product and documentation sources. Deep Drift benchmark names, causal interpretations, and experimental proposals are ĀTØR Institute research constructs, not claims made by OpenAI, Anthropic, Google, or Microsoft.

## Primary Sources

1. OpenAI, ChatGPT Release Notes, August 2026: https://help.openai.com/en/articles/6825453-gpt-4
2. OpenAI, Product Release Notes, 19-20 August 2026: https://openai.com/products/release-notes/
3. Anthropic, Build production agents with computer use, Skills API, and Files API, 20 August 2026: https://claude.com/blog/computer-use-skills-api-files-api
4. Anthropic, Claude Platform release notes, August 2026: https://platform.claude.com/docs/en/release-notes/overview
5. Google Workspace Updates, Sheets Canvas, 13 August 2026: https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html
6. Google Workspace Updates, Gemini Notebook copy, 17 August 2026: https://workspaceupdates.googleblog.com/2026/08/make-copy-of-notebook-in-gemini-notebook.html
7. Google Workspace Updates, August 2026 archive: https://workspaceupdates.googleblog.com/2026/08/
8. Microsoft 365, Work IQ APIs and Copilot agent architecture: https://www.microsoft.com/en-us/microsoft-365/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir’an | CHATJIPITI SINGH**
