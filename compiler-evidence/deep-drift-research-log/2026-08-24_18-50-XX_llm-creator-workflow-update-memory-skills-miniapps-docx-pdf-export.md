# Deep Drift Research Update
## LLM Platform Convergence: Memory, Skills, Mini-Apps, File Generation, Export, and Creator Workflow

**Date:** Monday, 24 August 2026  
**Research timestamp:** 18:50 WIB / 11:50 UTC  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Update Watch  
**Status:** Current-source synthesis; platform facts separated from Deep Drift interpretation.

## Executive Summary

The most important 2026 LLM-platform trend is no longer simply better model output. The platforms are converging toward persistent creator-workflow systems in which memory, files, procedures, tools, runtime permissions, editable artifacts, and export paths become distinct system layers.

The old evaluation object:

```text
PROMPT -> MODEL -> RESPONSE
```

is increasingly inadequate.

The emerging research object is:

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
-> EXPORT / COPY / MIGRATION
-> AUDIT / PROVENANCE
```

For Deep Drift Research, the important question becomes: can the causal history of a successful artifact still be reconstructed after all of those layers have changed it?

## Notable Platform Changes

| Date | Platform | Change | Why it matters for Deep Drift |
|---|---|---|---|
| 20 Aug 2026 | Anthropic | Computer Use, Skills API, and Files API became generally available together; browser-use tooling was added. | Procedure, source file, execution environment, and final artifact are now separable persistent objects. This strongly supports Procedural-Version Provenance and Persistent-File State Continuity. |
| 20 Aug 2026 | OpenAI | ChatGPT Sites gained co-editing, live database access, saved versions, and publishing; Apple Messages became an executable plugin with approval controls. | Collaboration and outbound action now require provenance of actor, approval, state, and publication, not just generated text. |
| 19 Aug 2026 | OpenAI | Codex cloud added GitLab support for issue/MR-triggered work and reviews. | Repository state, trigger identity, diff visibility, cloud environment, and permissions become part of the causal chain. |
| 14 Aug 2026 | OpenAI | Existing Projects can switch between default and project-only memory. | Memory boundary becomes a mutable variable inside a living project rather than a fixed initial condition. |
| 13 Aug 2026 | OpenAI | Google Drive files became browsable directly from Library and attachable through composer/@mentions without re-uploading. | The same source can enter through different ingestion surfaces, making Context-Surface Equivalence testable. |
| 7 Aug 2026 | OpenAI | Rich paste now preserves headings, bold text, links, and lists; saved files can be reused; document grounding improved. | Copy-paste is now part of context architecture. Formatting survival and ingestion path can influence downstream interpretation. |
| 4 Aug 2026 | OpenAI | Pastes over 10k characters automatically become attachments. | Semantically identical human input can cross a threshold and become a different system object, a clean Ingestion-Channel Drift case. |
| 20 Aug 2026 | Anthropic | Production-agent stack explicitly combines reusable files, versioned skills, computer/browser use, and returned finished files. | The unit of provenance shifts from model identity to full executable workflow state. |
| 11 Aug 2026 | Anthropic | Compliance API added local Cowork/Claude Code session transcripts and workspace ID response metadata. | Auditability and workspace identity become first-class provenance variables. |
| 7 Aug 2026 | Anthropic | Managed Agents gained hard session budgets, advisor models, inference geography, and GitHub-repository skill loading. | Cost ceilings, execution geography, repository skill state, and advisor intervention can alter behavior independently of the model. |
| 6 Aug 2026 | Anthropic | Enterprise skill/plugin security scanning entered beta. | Skills are becoming operational packages that require supply-chain style governance, not just prompt review. |
| 13 Aug 2026 | Google | Sheets Canvas launched as a natural-language-built, fully read-write mini-app layer over spreadsheets. | The visible app and source sheet can mutate each other. Final state alone does not reveal mutation path. |
| 27 Apr 2026 | Google | Gemini added direct file generation from chat for Google Docs/Sheets/Slides, PDF, DOCX, XLSX and more. | Direct chat-to-file generation is becoming baseline infrastructure. Deep Drift should test round-trip editability, provenance, and structure survival rather than mere file creation. |
| 22 Apr 2026 | Google | Google Docs added a centralized Gemini writing/refinement experience grounded in Drive, Gmail, Chat, and web context. | A document can be synthesized from multiple organizational context surfaces, increasing the need to preserve source-selection history. |
| 2026 roadmap / current | Microsoft | App Builder creates deployable apps from intent; agentic Word/Excel/PowerPoint can plan, execute, and refine multi-step work; Work IQ provides shared workplace context. | Microsoft is collapsing chat, app-building, document production, data analysis, and governed agent execution into one creator stack. |
| Current | Microsoft | Copilot in Excel includes Skills and Connectors; Cowork supports long-running multi-step work with plugins, templates, and governance. | Reusable procedures and connected data are becoming normal enterprise workflow primitives. |

## OpenAI: Memory, Ingestion Surfaces, Collaborative Artifacts, and Action

OpenAI's August changes show a platform shifting from a conversation container toward a persistent work environment.

### Mutable project memory

On 14 August, OpenAI added the ability to change an existing eligible Project between default memory and project-only memory without rebuilding the Project. This matters because the project can remain nominally the same while its context boundary changes.

**Deep Drift construct: Memory Boundary Transition Fidelity**

Test whether the same task produces materially different decisions, source use, or artifact structure before and after the memory-boundary change, while keeping the visible project identity constant.

### Drive in Library

On 13 August, Google Drive became directly browsable from Library for users with the Drive plugin connected. Drive files can be added from the composer or through @mentions without re-uploading.

**Deep Drift construct: Context-Surface Equivalence**

The same document may enter a workflow through:
- direct upload,
- Library,
- Drive,
- Project sources,
- paste,
- attachment.

The research question is whether those paths remain semantically and operationally equivalent.

### Rich paste and the 10k-character threshold

OpenAI now preserves headings, bold, links, and lists when text is pasted from Google Docs or another ChatGPT conversation. Separately, very large pastes are automatically converted into attachments.

This creates a particularly clean Deep Drift experiment:

```text
same source text
same human intent
different length / ingestion path
-> direct message object
vs
-> attachment object
```

**Deep Drift constructs:** Ingestion-Channel Drift, Formatting-State Survival, Source-Object Transformation.

### Sites, Messages, and Codex

The 20 August Sites update added collaborative editing, live database access, version saving, and publishing. Apple Messages can now become an outbound action surface under approval controls. Codex added GitLab-triggered issue/MR workflows on 19 August.

These features force provenance beyond text authorship:

```text
TRIGGER
-> SOURCE STATE
-> MODEL / AGENT
-> TOOL
-> PERMISSION / APPROVAL
-> STATE CHANGE
-> SAVED VERSION / SENT MESSAGE / REPOSITORY ACTION
```

## Anthropic: Procedure Becomes Executable State

Anthropic's 20 August announcement is one of the strongest current examples of the post-chat creator stack.

Computer Use, Skills API, Files API, and browser-use tooling are explicitly presented together as a production-agent architecture. Skills can encode instructions, scripts, and templates; files can persist by ID; agents can interact with software and return finished files.

That means a final artifact may depend on:

```text
source file ID
-> source state
-> skill ID
-> skill version
-> model / agent
-> tool permissions
-> browser / computer environment
-> external software state
-> resulting artifact
```

### Deep Drift priorities

**Procedural-Version Provenance**  
Can an independent reviewer identify the exact skill version that materially contributed to an artifact?

**Persistent-File State Continuity**  
Does a persistent file reference remain causally stable across time, repeated requests, re-uploads, deletion, and downstream reuse?

**Execution-Geography Continuity**  
If inference geography changes while the task remains nominally identical, what changes in latency, data handling, availability, or behavior?

**Budget-Bound Behavior Drift**  
A hard spending cap can stop or resume an agent session independently of task semantics. Budget is therefore part of runtime state.

**Skill Supply-Chain Governance**  
The existence of enterprise skill/plugin security scanning indicates that reusable AI procedures increasingly need the same governance attention as software dependencies.

## Google: Mini-App Builders and Direct Chat-to-File Production

Google now provides two unusually clear cases for Deep Drift.

### Sheets Canvas

Sheets Canvas turns spreadsheet data into custom interactive mini-apps using natural-language prompts. It is fully read-write: changes in the canvas update the source sheet.

This creates a bidirectional state problem:

```text
SHEET STATE
<-> CANVAS STATE
```

A final spreadsheet value does not necessarily reveal whether the mutation originated in the sheet, the canvas, an AI-generated interface, or another actor.

**Deep Drift construct: Bidirectional State Fidelity**

Required test:
- change one value in Sheet,
- change one equivalent value in Canvas,
- compare auditability, propagation, attribution, and final artifact state.

### Direct file generation in Gemini

Since 27 April, Gemini can turn conversational prompts directly into formatted files including Google Docs, Sheets, Slides, PDF, DOCX, and XLSX.

This is important precisely because it makes "can AI make a DOCX/PDF?" a weak benchmark.

The stronger benchmark is:

**Artifact Round-Trip Fidelity**

```text
chat
-> generated DOCX/PDF
-> human edit
-> reopen / re-upload
-> AI revise
-> export
-> reopen in another application
```

Measure:
- heading survival,
- table survival,
- citation survival,
- styles,
- comments,
- tracked changes where applicable,
- metadata,
- images,
- links,
- editability,
- semantic drift,
- human repair minutes.

## Microsoft: App Builder, Agentic Office, Work IQ, and Cowork

Microsoft's 2026 roadmap makes the broader industry direction explicit.

App Builder captures intent and creates an app that can be previewed, refined, and shared. Agentic capabilities in Word, Excel, and PowerPoint can plan, execute, and refine multi-step work directly inside the productivity applications. Work IQ provides shared workplace intelligence across files, email, calendar, meetings, chats, people, and connected systems. Copilot Cowork extends work over time with plugins, templates, multi-model intelligence, and enterprise governance.

This is not one single August release. It is current architecture assembled across the 2026 roadmap.

For Deep Drift, the significant shift is:

```text
CHAT
-> CONTEXT LAYER
-> SKILL / CONNECTOR
-> AGENT
-> NATIVE OFFICE APP
-> EDITABLE BUSINESS ARTIFACT
```

**Deep Drift constructs:** Human Orchestration Burden, Native-App Execution Fidelity, Context-Layer Provenance, Agent-to-Artifact Provenance.

## Cross-Platform Trend

Across OpenAI, Anthropic, Google, and Microsoft, the same structural convergence is visible:

1. **Memory is becoming mutable system state.**
2. **Skills are becoming versioned, reusable procedural objects.**
3. **Files are becoming persistent workflow state rather than one-turn attachments.**
4. **Mini-app builders are making interfaces generatable from natural language.**
5. **Document creation is moving directly into chat and agent workflows.**
6. **Copy/paste and upload mechanics are becoming context-routing decisions.**
7. **Agents are increasingly allowed to mutate external state.**
8. **Governance, approvals, budgets, geography, and permissions are becoming part of observed intelligence.**
9. **The final artifact can remain correct while its causal history becomes unrecoverable.**

That ninth point is the central Deep Drift problem.

## Recommended Deep Drift Benchmark Set

| Benchmark | Core question |
|---|---|
| Artifact Round-Trip Fidelity | Does structure and editability survive generate-edit-reupload-revise-export cycles? |
| Procedural-Version Provenance | Which exact procedure/skill version caused the result? |
| Persistent-File State Continuity | Does a reused file reference remain the same causal source over time? |
| Memory Boundary Transition Fidelity | What changes when project memory policy changes inside the same project? |
| Context-Surface Equivalence | Does the same source behave the same via upload, Drive, Library, Project, paste, or attachment? |
| Ingestion-Channel Drift | Does a change in ingestion object alter retrieval, interpretation, or artifact output? |
| Bidirectional State Fidelity | Can mutation paths be reconstructed across linked app/source surfaces? |
| Approval-State Continuity | Was an external action performed under the authorization state the human intended? |
| Execution-Environment Governance Drift | How much does runtime policy change executable behavior? |
| Human Orchestration Burden | How much manual routing, repair, conversion, and checking is still required? |

## Research Position

The competitive unit in LLM platforms is moving from model quality toward **creator-workflow orchestration**.

A useful Deep Drift equation is:

```text
DELIVERED SYSTEM INTELLIGENCE
=
MODEL
+ CONTEXT
+ PROCEDURE
+ TOOLING
+ PERMISSION
+ RUNTIME
+ ARTIFACT STATE
+ PROVENANCE
```

This does not mean model quality is irrelevant. It means model quality is only one layer in a much larger causal machine.

The failure mode that deserves the most attention is **successful output with broken history**.

A document opens.  
A spreadsheet calculates.  
A mini-app works.  
A message sends.  
A repository changes.

Yet the system cannot reliably reconstruct which source state, procedure version, memory boundary, permission state, runtime environment, or human approval caused the result.

That is not cosmetic metadata loss. It is a reliability and accountability problem.

## Evidence Boundary

Platform capability claims in this report are grounded in official first-party sources. Deep Drift benchmark names, causal interpretations, and experimental proposals are ĀTØR Institute research constructs and are not claims made by OpenAI, Anthropic, Google, or Microsoft.

## Primary Sources

1. OpenAI, ChatGPT Release Notes, August 2026: https://help.openai.com/en/articles/6825453-gpt-4  
2. OpenAI, Product Release Notes, 19-20 August 2026: https://openai.com/products/release-notes/  
3. OpenAI, ChatGPT Work announcement, 9 July 2026: https://openai.com/index/chatgpt-for-your-most-ambitious-work/  
4. Anthropic, Build production agents with computer use, Skills API, and Files API, 20 August 2026: https://claude.com/blog/computer-use-skills-api-files-api  
5. Anthropic, Claude Platform release notes: https://platform.claude.com/docs/en/release-notes/overview  
6. Anthropic, Claude release notes: https://support.claude.com/en/articles/12138966-release-notes  
7. Google Workspace Updates, Sheets Canvas, 13 August 2026: https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html  
8. Google Workspace Updates, file generation in Gemini, 27 April 2026: https://workspaceupdates.googleblog.com/2026/04/move-from-conversation-to-creation-with-file-generation-in-Gemini.html  
9. Google Workspace Updates, Gemini in Docs, 22 April 2026: https://workspaceupdates.googleblog.com/2026/04/new-gemini-capabilities-in-google-docs-help-you-go-from-blank-page-to-brilliance.html  
10. Microsoft 365 Roadmap, 2026: https://learn.microsoft.com/en-us/copilot/release-plan/2026wave1/copilot-sales/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir’an | CHATJIPITI SINGH**