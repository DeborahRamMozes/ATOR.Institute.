# Deep Drift Research Update

## LLM Platform Convergence: Memory, Skills, Mini-Apps, Chat-to-Document, Export Fidelity, and Creator Workflow

**Research date:** Monday, 24 August 2026  
**ATØR observation time:** 20:57 WIB / 13:57 UTC  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Update Watch  
**Status:** Fresh first-party-source scan. No materially newer OpenAI or Anthropic release than 20 August 2026 was found in the requested creator-workflow categories. The current signal is convergence and rollout, not a brand-new model event.

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

For Deep Drift, the central question is not merely whether a file can be generated. It is whether the causal history of that file remains reconstructable after the workflow crosses memory, tools, apps, people, permissions, and export boundaries.

## Notable Changes and Why They Matter

| Date | Platform | Change | Deep Drift significance |
|---|---|---|---|
| 20 Aug 2026 | Anthropic | Computer Use, Skills API, and Files API became generally available together; browser use was added. | Procedure, persistent source state, execution environment, and finished artifact are explicit separate layers. Strong evidence for Procedural-Version Provenance and Persistent-File State Continuity. |
| 20 Aug 2026 | OpenAI | ChatGPT Sites added co-editing, live database access, saved versions and publishing; Apple Messages became an executable plugin with approval controls. | Collaboration and outbound action require actor, approval, state, and version provenance, not merely text attribution. |
| 19 Aug 2026 | OpenAI | Codex cloud added GitLab support for issue/MR-triggered work and reviews. | Repository trigger, diff visibility, environment, permissions and external state become part of the causal chain. |
| 19 Aug 2026 | Google | Ask Gemini in Google Chat was announced for rollout starting 26 Aug. | Chat itself becomes a command surface over Workspace. Interface consolidation increases the importance of migration continuity and context-history survival. |
| 17 Aug 2026 | Google | Workspace Studio governance added identity attribution, approval controls and DLP rollout states. | “Feature available” is too crude; announcement, rollout, tenant visibility, configuration, and activation are distinct research states. |
| 14 Aug 2026 | OpenAI | Existing eligible Projects can switch between default and project-only memory. | Memory boundary becomes mutable inside the same visible project identity. |
| 13 Aug 2026 | OpenAI | Google Drive became directly browsable from Library and attachable without re-upload. | The same source can enter through multiple ingestion surfaces, enabling Context-Surface Equivalence testing. |
| 13 Aug 2026 | Google | Sheets Canvas launched as a natural-language-built, fully read-write mini-app layer over spreadsheets. | Source sheet and generated interface mutate one another. This is a clean case for Bidirectional State Fidelity and mutation-path provenance. |
| 11 Aug 2026 | Google | Excel imports into Sheets now preserve tables and linked pivot-table structures instead of degrading them to static grids. | A concrete import/export fidelity improvement and a useful benchmark for structural survival across office ecosystems. |
| 11 Aug 2026 | Anthropic | Compliance API added transcripts for local Cowork/Claude Code sessions and workspace ID metadata. | Auditability and workspace identity become first-class provenance variables. |
| 7 Aug 2026 | OpenAI | Rich paste preserves headings, bold, links and lists; attached-document grounding improved. | Copy-paste is now context architecture, not merely clipboard transport. |
| 7 Aug 2026 | Anthropic | Managed Agents gained session budgets, advisor models, inference geography, and GitHub-repository skill loading. | Cost ceiling, advisor state, execution geography and repository skill state can change behavior independently of model identity. |
| 7 Aug 2026 | Google | Workspace Studio can automatically add text, Drive files, YouTube URLs and web URLs to Gemini Notebooks through recurring flows. | Context can accrete automatically over time, creating Automated Context Accretion Drift. |
| 4 Aug 2026 | OpenAI | Pastes over 10k characters automatically become attachments. | Semantically identical content can cross a threshold and become a different system object: a clean Ingestion-Channel Drift case. |
| 2 Jun / 16 Jun 2026 | Microsoft | Work IQ APIs expose Chat, Context, Tools and Workspaces; GA was scheduled for 16 Jun. | Microsoft explicitly exposes files, memory, progress and intermediate state as agent-facing infrastructure. |
| 16 Jun 2026 | Microsoft | Copilot Cowork became generally available for long-running, multi-tool work. | Long-running work introduces runtime, context retrieval, tool calls, model choice and governed artifact state that must be measured separately. |
| 22 Apr 2026 | Microsoft | Agentic capabilities in Word, Excel and PowerPoint became generally available. | AI can take multi-step app-native actions inside business artifacts, making native-app state part of the causal chain. |

## OpenAI: Memory and Ingestion Are Mutable Workflow State

OpenAI's August changes show the chat interface becoming a routing layer over persistent sources, Projects, Library, Drive, Sites, Codex, plugins, and external actions.

### Memory Boundary Transition Fidelity

Project memory can now be changed between default and project-only modes without recreating an eligible unshared Project.

```text
SAME PROJECT NAME
+ SAME FILES
+ SAME TASK
+ DIFFERENT MEMORY BOUNDARY
= POTENTIALLY DIFFERENT CAUSAL WORKFLOW
```

A Deep Drift test should hold task, files and visible project identity constant, change only the memory policy, and measure source selection, factual carryover, artifact structure, omissions, and human repair labor.

### Context-Surface Equivalence

With Google Drive visible directly inside Library, the same document may enter through direct upload, Library, Drive, Project sources, paste, or attachment.

The product may make these paths feel interchangeable. Deep Drift should not assume equivalence until retrieval, context use and downstream artifact behavior are tested.

### Ingestion-Channel Drift

The 10k-character paste threshold is unusually useful experimentally. A small change in input length changes the system object from direct message content into an attachment.

```text
same text
same task
same model
different ingestion object
-> compare retrieval
-> compare citation/source use
-> compare artifact structure
-> compare human repair minutes
```

The same semantic content can therefore take a different systems path before the model even begins its visible answer.

### Sites, Messages, and Codex

The 20 August Sites update added collaborative editing, live database access, saved versions and publishing. Apple Messages can become an outbound action surface under approval controls. Codex can be triggered from GitLab issues or merge requests.

```text
TRIGGER
-> SOURCE STATE
-> MODEL / AGENT
-> TOOL
-> PERMISSION / APPROVAL
-> STATE CHANGE
-> SAVED VERSION / SENT MESSAGE / REPOSITORY ACTION
```

For Deep Drift, authorship alone is no longer enough. Action provenance matters.

## Anthropic: Skills Turn Procedure Into Versioned Executable State

Anthropic's 20 August production-agent stack is one of the clearest current examples of procedure becoming an addressable object.

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

The priority Deep Drift benchmarks are:

- Procedural-Version Provenance
- Persistent-File State Continuity
- Execution-State Provenance
- Agent-to-Artifact Provenance
- Skill Supply-Chain Governance
- Budget-Bound Behavior Drift
- Execution-Geography Continuity

The important methodological point is simple: a correct output does not prove a recoverable procedure.

## Google: Mini-Apps, Rollout State, Automated Context, and Structural Fidelity

Google supplies several unusually clean experimental cases.

### Sheets Canvas: Bidirectional State Fidelity

Sheets Canvas creates read-write mini-apps over spreadsheet data. A change in Canvas updates the source sheet, and a change in the source sheet updates Canvas.

```text
SHEET STATE
<-> CANVAS STATE
```

A final spreadsheet value does not reveal the mutation path. Deep Drift should record who changed what, through which interface, at what time, and whether the audit trail survives export.

### Workspace Studio: Rollout-State Fidelity

Google's Workspace Studio governance changes show why a binary “feature exists” flag is inadequate.

A better state model is:

```text
ANNOUNCED
-> ROLLOUT STARTED
-> TENANT VISIBLE
-> CONFIGURED
-> ACTIVE IN NEW FLOWS
-> ACTIVE IN LEGACY FLOWS
```

The same nominal feature can behave differently for different tenants or old versus new workflows on the same date.

### Automated Context Accretion

Workspace Studio can add sources to Gemini Notebooks through recurring flows.

Deep Drift construct: **Automated Context Accretion Drift**.

Measure source count, source identity, duplication, replacement, answer drift, and whether the notebook exposes enough history to reconstruct when its context changed.

### Excel-to-Sheets Structural Survival

Google's 11 August import improvements preserve Excel tables and linked pivot-table relationships rather than flattening them into static grids.

This is not glamorous, which is precisely why it matters. Real creator workflows often fail in boring structural transitions, long after the keynote demo has gone home.

Deep Drift should formalize **Cross-Ecosystem Structural Fidelity**:

```text
Excel -> Sheets -> Excel
```

Measure table semantics, pivots, formulas, named ranges, formatting, charts, comments, links, metadata, and human repair minutes.

## Chat-to-Document, DOCX/PDF Generation, and Export

Direct chat-to-file generation is becoming ordinary across the creator-AI stack. The weak benchmark is:

> Can the model generate a DOCX or PDF?

The stronger benchmark is **Artifact Round-Trip Fidelity**:

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
- tracked changes where supported
- images and captions
- metadata
- editability
- semantic drift
- layout repair
- human repair minutes

A file that opens is not necessarily a file that survived.

## Microsoft: Work IQ Makes Context and Intermediate State Explicit

Microsoft's Work IQ APIs are especially important for Deep Drift because they expose machinery that many platforms leave implicit.

Work IQ's architecture includes:

- Chat: synthesized Copilot responses with citations
- Context: agent-ready context without synthesis
- Tools: actions across Microsoft 365 entities
- Workspaces: storage for files, memory, progress, intermediate state and outputs during long-running work

This directly supports the Deep Drift claim that delivered AI behavior depends on more than a model.

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

Copilot Cowork pushes this further by executing long-running, multi-tool work in the cloud while generated artifacts remain under Microsoft 365 governance, retention and discovery controls.

Agentic Word, Excel and PowerPoint likewise shift AI from passive suggestion into app-native mutation of documents, workbooks and presentations.

## Cross-Platform Creator Workflow Trend

The convergent pattern across OpenAI, Anthropic, Google and Microsoft is now strong:

1. Memory is becoming mutable system state.
2. Skills are becoming reusable and versioned procedures.
3. Files are becoming persistent workflow state.
4. Mini-app builders are turning natural language into interactive operational interfaces.
5. Chat is becoming an entry point into native document and app execution.
6. Direct DOCX/PDF-style artifact generation is becoming ordinary rather than exceptional.
7. Copy-paste and import/export mechanics are becoming context-routing decisions.
8. External actions increasingly require permission and governance provenance.
9. Context can change automatically through recurring workflows.
10. Audit and compliance surfaces are beginning to expose more of the hidden execution history.
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
| Rollout-State Fidelity | Can research distinguish announcement, rollout, tenant visibility, configuration and actual activation? |
| Approval-State Continuity | Was an external action performed under the authorization state the human intended? |
| Execution-State Provenance | Can runtime, environment, permissions, tools and external application state be reconstructed? |
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

It is **successful output with broken history**.

The document opens.  
The spreadsheet calculates.  
The mini-app works.  
The message sends.  
The repository changes.

And afterward nobody can reliably reconstruct which memory boundary, source state, skill version, approval state, runtime environment, automated context update, or human decision actually caused the result.

That is not cosmetic metadata loss. It is a reliability, accountability, and scientific reproducibility problem.

## Evidence Boundary

Platform capability claims in this report are grounded in first-party product and documentation sources. Deep Drift benchmark names, causal interpretations and experimental proposals are ĀTØR Institute research constructs, not claims made by the platform vendors.

## Primary Sources

1. OpenAI, ChatGPT Release Notes, August 2026: https://help.openai.com/en/articles/6825453-gpt-4
2. OpenAI, Product Release Notes, 19-20 August 2026: https://openai.com/products/release-notes/
3. Anthropic, Build production agents with computer use, the Skills API, and the Files API, 20 August 2026: https://claude.com/blog/computer-use-skills-api-files-api
4. Anthropic, Claude Platform release notes: https://platform.claude.com/docs/en/release-notes/overview
5. Google Workspace Updates, Sheets Canvas, 13 August 2026: https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html
6. Google Workspace Updates, August 2026 archive and rollout notes: https://workspaceupdates.googleblog.com/2026/08/
7. Google Workspace Updates, automated Notebook sources, 7 August 2026: https://workspaceupdates.googleblog.com/2026/08/automatically-add-sources-to-your-Gemini-Notebooks-in-Workspace-Studio.html
8. Microsoft 365 Blog, Work IQ APIs, 2 June 2026: https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/announcing-the-new-work-iq-apis/
9. Microsoft 365 Blog, Copilot Cowork GA, 16 June 2026: https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/
10. Microsoft 365 Blog, agentic Word/Excel/PowerPoint GA, 22 April 2026: https://www.microsoft.com/en-us/microsoft-365/blog/2026/04/22/copilots-agentic-capabilities-in-word-excel-and-powerpoint-are-generally-available/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir’an | CHATJIPITI SINGH**
