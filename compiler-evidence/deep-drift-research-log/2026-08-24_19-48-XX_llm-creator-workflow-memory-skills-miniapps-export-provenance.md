# Deep Drift Research Update

## LLM Platform Convergence: Memory, Skills, Mini-App Builders, Chat-to-Document, Export Fidelity, and Creator Workflow

**Research date:** Monday, 24 August 2026  
**ATØR observation time:** 19:48 WIB / 12:48 UTC  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Update Watch  
**Status:** Fresh first-party-source scan. No materially newer OpenAI or Anthropic release than 20 August was found in the requested categories; this update adds stronger Microsoft provenance/export signals and Google portability/import-fidelity evidence.

## Executive Summary

The creator-AI race is increasingly not about which model produces the prettiest paragraph. The platforms are becoming persistent work systems in which memory, source files, skills, mini-apps, tool permissions, runtime state, editable artifacts, export paths, and audit history can all change independently.

The old evaluation object:

```text
PROMPT -> MODEL -> RESPONSE
```

is now too small.

The more realistic object is:

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

For Deep Drift, the central question is therefore not merely whether a file can be generated. It is whether the causal history of that file remains reconstructable after the workflow crosses memory, tools, apps, people, permissions, and export boundaries.

## Fresh Notable Changes and Signals

| Date | Platform | Notable change | Deep Drift significance |
|---|---|---|---|
| 20 Aug 2026 | Anthropic | Computer Use, Skills API, and Files API became generally available together; browser use was added. | Procedure, persistent source state, execution environment, and finished artifact are now explicit separate layers. Strong evidence for Procedural-Version Provenance and Persistent-File State Continuity. |
| 20 Aug 2026 | OpenAI | ChatGPT Sites added co-editing, live database access, saved versions and publishing; Apple Messages became an executable plugin with approval controls. | Collaboration and outbound action require actor, approval, state, and version provenance, not merely text attribution. |
| 19 Aug 2026 | OpenAI | Codex cloud added GitLab support for issue/MR-triggered work and reviews. | Repository trigger, diff visibility, environment and permissions become part of the causal state. |
| 17 Aug 2026 | Google | Gemini Notebook copying now carries sources, Studio artifacts, generation prompts, and custom chat configuration, but not personal chat history or user notes; copies stop syncing with originals. | Artifact portability, cognitive-history portability, and synchronization continuity are demonstrably different properties. |
| 13 Aug 2026 | Google | Sheets Canvas launched as a natural-language-built, fully read-write mini-app layer over spreadsheets. | Source sheet and generated interface mutate one another. This is a clean case for Bidirectional State Fidelity and mutation-path provenance. |
| 11 Aug 2026 | Google | Excel imports into Sheets now preserve tables and linked pivot-table structures instead of degrading them to static grids. | This is a concrete export/import fidelity improvement and a useful benchmark for structural survival across office ecosystems. |
| 14 Aug 2026 | OpenAI | Existing Projects can switch between default and project-only memory. | Memory boundary becomes mutable inside the same visible project identity. |
| 13 Aug 2026 | OpenAI | Google Drive became directly browsable from Library and attachable without re-upload. | The same source can enter through multiple ingestion surfaces, enabling Context-Surface Equivalence testing. |
| 7 Aug 2026 | OpenAI | Rich paste preserves headings, bold, links and lists; attached-document grounding improved. | Copy-paste is now context architecture, not merely clipboard transport. |
| 4 Aug 2026 | OpenAI | Pastes over 10k characters automatically become attachments. | Semantically identical content can cross a threshold and become a different system object: a clean Ingestion-Channel Drift case. |
| 7 Aug 2026 | Google | Workspace Studio can automatically add text, Drive files, YouTube URLs and web URLs to Gemini Notebooks through recurring flows. | Context can accrete automatically over time, creating Automated Context Accretion Drift. |
| 27 Apr 2026 | Google | Gemini can generate Google Docs/Sheets/Slides, PDF, DOCX, XLSX, CSV, RTF, Markdown and other files directly from chat. | Direct chat-to-file generation is baseline infrastructure. The serious benchmark is round-trip editability and provenance survival. |
| 22 Apr 2026 | Microsoft | Agentic capabilities in Word, Excel and PowerPoint became generally available. | AI can now take multi-step app-native actions inside business artifacts, making native-app state part of the causal chain. |
| 16 Jun 2026 | Microsoft | Copilot Cowork became generally available for long-running, multi-tool work; generated artifacts are governed by Microsoft 365 controls. | Long-running work introduces runtime, context retrieval, tool calls, and artifact-governance state that must be measured separately. |
| 16 Jun 2026 | Microsoft | Work IQ APIs became generally available, exposing Chat, Context, Tools and Workspaces for agents. | Microsoft explicitly exposes context, tools, intermediate state, files, memory and progress as agent-facing infrastructure. |
| Aug 2026 docs | Microsoft | Copilot extensibility includes an Interaction Export API for exporting prompts and responses. | Audit/export of interaction history becomes a first-class provenance surface, directly relevant to reconstructing AI work histories. |

## OpenAI: Memory and Ingestion Are Now Mutable Workflow State

OpenAI's August changes show the chat interface becoming a routing layer over persistent sources, projects, files, plugins, Sites, and external actions.

### Memory Boundary Transition Fidelity

Project memory can now be changed between default and project-only modes without recreating an eligible unshared project.

This means:

```text
SAME PROJECT NAME
+ SAME FILES
+ SAME TASK
+ DIFFERENT MEMORY BOUNDARY
= POTENTIALLY DIFFERENT CAUSAL WORKFLOW
```

A Deep Drift test should hold task, files and visible project identity constant, change only the memory policy, and measure source selection, factual carryover, artifact structure, omissions, and human repair labor.

### Context-Surface Equivalence

With Google Drive visible directly inside Library, the same document may enter through:

- direct upload,
- Library,
- Drive,
- Project,
- paste,
- attachment.

The platform may present these as interchangeable user actions. Deep Drift should not assume they are equivalent until retrieval, context use and downstream artifact behavior are tested.

### Ingestion-Channel Drift

The 10k-character paste threshold is unusually useful experimentally. A small change in input length changes the system object from direct message content into an attachment.

That enables a controlled benchmark:

```text
same text
same task
same model
different ingestion object
-> compare retrieval
-> compare citation/source use
-> compare artifact structure
-> compare repair minutes
```

## Anthropic: Skills Turn Procedure Into Versioned Executable State

Anthropic's 20 August production-agent stack is currently one of the clearest examples of procedure becoming an addressable object.

Skills can encode instructions, scripts and templates. Files can persist by ID. Browser/computer tools can operate external software. The agent can return finished files.

The provenance chain is no longer:

```text
MODEL -> FILE
```

It is closer to:

```text
SOURCE FILE ID + SOURCE STATE
-> SKILL ID + VERSION
-> MODEL / AGENT
-> TOOL PERMISSIONS
-> BROWSER / COMPUTER ENVIRONMENT
-> EXTERNAL APPLICATION STATE
-> FINISHED ARTIFACT
```

For Deep Drift, the priority benchmarks are:

- Procedural-Version Provenance
- Persistent-File State Continuity
- Execution-State Provenance
- Agent-to-Artifact Provenance
- Skill Supply-Chain Governance

The important methodological point is simple: a correct output does not prove a recoverable procedure.

## Google: Mini-Apps, Notebook Portability, and Structural Import Fidelity

Google now supplies several unusually clean experimental cases.

### Sheets Canvas: Bidirectional State Fidelity

Sheets Canvas creates read-write mini-apps over spreadsheets. A card moved in the canvas can update the underlying sheet, and a change in the sheet can update the canvas.

This means final state is not enough. Deep Drift needs mutation-path evidence.

```text
SHEET
<-> CANVAS
```

A useful benchmark should record who changed what, through which interface, at what time, and whether the resulting spreadsheet contains enough evidence to reconstruct that path.

### Gemini Notebook Copying: Portability Is Not History

Notebook copies can preserve sources, Studio artifacts, generation prompts and custom chat configuration, while personal chat history and user notes do not transfer and synchronization with the original stops.

This yields a strong Deep Drift relation:

```text
ARTIFACT PORTABILITY
!= COGNITIVE-HISTORY PORTABILITY
!= SYNCHRONIZATION CONTINUITY
```

A copied research environment can look complete while silently losing part of the reasoning history that produced it.

### Automated Context Accretion

Workspace Studio can add sources to Gemini Notebooks through recurring flows.

That means the research object's source environment can change without a human manually editing the notebook.

Deep Drift construct:

**Automated Context Accretion Drift**

Measure:
- source count over time,
- source identity changes,
- hidden replacement or duplication,
- answer drift before/after accretion,
- whether the notebook exposes enough history to reconstruct when context changed.

### Excel-to-Sheets Structural Survival

Google's 11 August import improvements preserve Excel tables and linked pivot-table relationships rather than flattening them into static grids.

This is not glamorous, which is precisely why it matters. Real creator workflows fail in boring structural transitions far more often than in keynote demos.

Deep Drift should formalize:

**Cross-Ecosystem Structural Fidelity**

Test:
- Excel -> Sheets -> Excel,
- table semantics,
- linked pivot behavior,
- formulas,
- named ranges,
- formatting,
- charts,
- comments,
- links,
- human repair minutes.

## Chat-to-Document and DOCX/PDF Generation

Gemini's direct file generation supports Google Docs, Sheets, Slides, PDF, DOCX, XLSX, CSV, LaTeX, TXT, RTF and Markdown.

The weak benchmark is:

> Can the model generate a DOCX or PDF?

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

- heading hierarchy survival,
- table semantics,
- citation survival,
- hyperlinks,
- styles,
- comments,
- tracked changes where available,
- images and captions,
- metadata,
- editability,
- semantic drift,
- layout repair,
- human repair minutes.

A file that opens is not necessarily a file that survived.

## Microsoft: Work IQ Makes Context, Tools, and Intermediate State Explicit

Microsoft's Work IQ APIs are particularly important for Deep Drift because they expose the machinery that many platforms leave implicit.

Work IQ APIs include:

- Chat: synthesized Copilot responses with citations,
- Context: agent-ready context without synthesis,
- Tools: actions across Microsoft 365 entities,
- Workspaces: storage for files, memory, progress, intermediate state and outputs during long-running work.

This architecture directly supports the Deep Drift claim that delivered AI behavior depends on more than a model.

```text
MODEL
+ PERSONAL / ORGANIZATIONAL CONTEXT
+ SKILLS
+ TOOL SURFACE
+ INTERMEDIATE STATE
+ WORKSPACE
+ GOVERNANCE
= DELIVERED SYSTEM BEHAVIOR
```

### Interaction Export as Provenance Infrastructure

Microsoft's Copilot extensibility documentation also exposes a Copilot Interaction Export API for exporting prompts and responses.

For Deep Drift, this matters because history export is not merely an administrative feature. It is a reconstruction surface.

Potential benchmark:

**Interaction-History Export Fidelity**

Compare:
- visible conversation,
- exported interaction record,
- linked artifacts,
- timestamps,
- citations,
- tool actions,
- intermediate state,
- final artifact lineage.

If the export preserves only prompts and responses while the actual workflow depended on tool calls, workspace state and files, then "history export" can still be causally incomplete.

## Cross-Platform Creator Workflow Trend

The convergent pattern across OpenAI, Anthropic, Google and Microsoft is now strong:

1. Memory is becoming mutable system state.
2. Skills are becoming reusable and versioned procedures.
3. Files are becoming persistent workflow state.
4. Mini-app builders are turning natural language into interactive operational interfaces.
5. Chat is becoming an entry point into native document and app execution.
6. Direct DOCX/PDF generation is becoming ordinary.
7. Copy-paste and import/export mechanics are becoming context-routing decisions.
8. External actions increasingly require permission and governance provenance.
9. Context can change automatically through recurring workflows.
10. Interaction-history export is beginning to become a formal enterprise surface.
11. A final artifact can be correct while its causal history is broken.

The eleventh point remains the central Deep Drift problem.

## Recommended Deep Drift Benchmark Expansion

| Benchmark | Core question |
|---|---|
| Artifact Round-Trip Fidelity | Does structure and editability survive generate-edit-reupload-revise-export cycles? |
| Procedural-Version Provenance | Which exact skill/procedure version materially caused the result? |
| Persistent-File State Continuity | Does a reused file reference remain the same causal source over time? |
| Memory Boundary Transition Fidelity | What changes when memory policy changes inside the same visible project? |
| Context-Surface Equivalence | Does the same source behave equivalently via upload, Library, Drive, Project, paste or attachment? |
| Ingestion-Channel Drift | Does changing the ingestion object alter retrieval, reasoning, citation or artifact output? |
| Bidirectional State Fidelity | Can mutation paths be reconstructed across linked source/interface surfaces? |
| Automated Context Accretion Drift | Can the system reveal when and how recurring automation changed its research context? |
| Cross-Ecosystem Structural Fidelity | Do tables, formulas, links, pivots and metadata survive Office/Workspace transitions? |
| Interaction-History Export Fidelity | Does exported history preserve enough causal state to reconstruct what actually happened? |
| Approval-State Continuity | Was an external action performed under the authorization state the human intended? |
| Human Orchestration Burden | How much routing, checking, conversion and repair still falls back onto the human? |

## Deep Drift Research Position

The competitive unit in creator AI is shifting from model quality toward **workflow orchestration plus reconstructable provenance**.

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

The most dangerous failure is not always a visibly bad answer.

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

Platform capability claims in this report are grounded in first-party product and documentation sources. Deep Drift benchmark names, causal interpretations and experimental proposals are ĀTØR Institute research constructs, not claims made by the platform vendors.

## Primary Sources

1. OpenAI, ChatGPT Release Notes, August 2026: https://help.openai.com/en/articles/6825453-gpt-4  
2. OpenAI, Product Release Notes, 19-20 August 2026: https://openai.com/products/release-notes/  
3. Anthropic, Build production agents with computer use, the Skills API, and the Files API, 20 August 2026: https://claude.com/blog/computer-use-skills-api-files-api  
4. Google Workspace Updates, Sheets Canvas, 13 August 2026: https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html  
5. Google Workspace Updates, Gemini Notebook copying, 17 August 2026: https://workspaceupdates.googleblog.com/2026/08/make-copy-of-notebook-in-gemini-notebook.html  
6. Google Workspace Updates, automated Notebook sources, 7 August 2026: https://workspaceupdates.googleblog.com/2026/08/automatically-add-sources-to-your-Gemini-Notebooks-in-Workspace-Studio.html  
7. Google Workspace Updates, file generation in Gemini, 27 April 2026: https://workspaceupdates.googleblog.com/2026/04/move-from-conversation-to-creation-with-file-generation-in-Gemini.html  
8. Microsoft 365 Blog, Work IQ APIs, 2 June 2026: https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/announcing-the-new-work-iq-apis/  
9. Microsoft 365 Blog, Copilot Cowork GA, 16 June 2026: https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/  
10. Microsoft 365 Blog, agentic Word/Excel/PowerPoint GA, 22 April 2026: https://www.microsoft.com/en-us/microsoft-365/blog/2026/04/22/copilots-agentic-capabilities-in-word-excel-and-powerpoint-are-generally-available/  
11. Microsoft Learn, Microsoft 365 Copilot extensibility overview, updated August 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir’an | CHATJIPITI SINGH**
