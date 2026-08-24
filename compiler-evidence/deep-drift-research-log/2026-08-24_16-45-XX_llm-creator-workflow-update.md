# ĀTØR Institute / Deep Drift Research
## LLM Platform Update Watch: Memory, Skills, Mini-App Builders, File Generation, Export Fidelity, and Creator Workflow Convergence

**Research timestamp:** 24 August 2026, 16:45 WIB (UTC+7)  
**Timestamp precision:** exact minute; seconds not available  
**Research stream:** Deep Drift / LLM Update Watch / Continuity Under Transformation  
**Status:** current public-platform scan, primary-source weighted

## Executive finding

The clearest 2026 trend is no longer “better chat.” The major platforms are converging on a creator operating stack in which memory, source files, versioned procedures, agents, tools, apps, permissions, editable artifacts, and export paths are becoming separate but connected system layers.

The practical unit of reliability is therefore shifting from:

`prompt -> model -> answer`

toward:

`human intent -> memory/project state -> source ingestion -> skill/procedure -> agent -> tool/app -> mutable artifact -> export/share -> provenance`

For Deep Drift Research, the important question is not merely whether a model can produce a DOCX, PDF, spreadsheet, mini-app, or Site. The stronger question is whether the human intent, source state, procedure version, editability, and causal history survive the transformations that produce the finished object.

## Notable platform changes

| Date | Platform | Change | Why it matters for Deep Drift |
|---|---|---|---|
| 20 Aug 2026 | Anthropic Claude Platform | Computer use, Skills API, and Files API became generally available together; browser use was added. Skills can carry instructions/scripts/templates, files persist by ID, and agents can act in software and return finished files. | Strong evidence that procedure, source state, execution environment, and final artifact are now independently addressable layers. Supports **Procedural-Version Provenance**, **Persistent-File State Continuity**, and **Agent-to-Artifact Provenance**. |
| 14 Aug 2026 | OpenAI ChatGPT | Existing eligible projects can switch between default and project-only memory without recreating the project. | Memory boundary becomes a mutable workflow variable. Supports **Memory Boundary Transition Fidelity** and controlled tests where project contents stay fixed while memory scope changes. |
| 13 Aug 2026 | OpenAI ChatGPT | Google Drive files can be browsed directly from Library, pulled into chats via composer or @mentions, and opened beside the conversation. | The same source can enter through several ingestion surfaces. Supports **Context-Surface Equivalence** and source-path provenance testing. |
| 13 Aug 2026 | Google Sheets | Sheets Canvas turns spreadsheet data into prompt-built interactive, read-write mini-apps. Changes in the mini-app update the source Sheet immediately. | A source artifact and generated interface become bidirectionally mutable. Supports **Bidirectional State Fidelity** and **Mutation-Path Provenance**. |
| 11 Aug 2026 | Anthropic Claude Platform | Compliance API gained local Cowork and Claude Code session transcript retrieval; API responses also expose workspace identity. | Audit transcript and workspace identity become inspectable provenance layers rather than hidden context. Supports **Audit-Transcript Continuity** and **Workspace-State Provenance**. |
| 7 Aug 2026 | Anthropic Managed Agents | Sessions can load skills from a GitHub repository; budgets, advisors, and inference geography are independently configurable. | Skill repository state, cost ceiling, advisor model, and execution geography become causal variables. Supports **Skill-Repository Provenance**, **Budget-Bound Behavior Drift**, and **Execution-Geography Continuity**. |
| 7 Aug 2026 | OpenAI ChatGPT | Rich paste now preserves headings, bold, links, and lists; saved Library files are reusable; document grounding was improved. | Copy-paste is no longer a trivial transport layer. Formatting and ingestion mode can alter the object supplied to the model. Supports **Paste Fidelity** and **Ingestion-Channel Drift**. |
| 7 Aug 2026 | Google Workspace Studio | Recurring workflows can automatically add Drive files, text, YouTube links, and web URLs to Gemini Notebooks. | Research context can accrete automatically over time. Supports **Automated Context Accretion Drift** and source-genealogy reconstruction. |
| 6 Aug 2026 | Anthropic Claude Apps | Enterprise skill and plugin security scanning entered beta. | Procedure packages are becoming governance objects. This strengthens the need to distinguish procedural capability from trust/security status. |
| 4 Aug 2026 | OpenAI ChatGPT | Pastes over 10,000 characters are automatically converted into attachments, with a way to move them back into the text field. | Identical human content can cross a threshold and become a different system object. Excellent controlled case for **Ingestion-Object Transformation**. |
| 17 Aug 2026 | Google Gemini Notebook | Notebook copies preserve sources and Studio artifacts, including generation prompts and custom chat configurations, but do not copy personal chat history or notes; copies stop syncing with the original. | One of the clearest real cases where **artifact portability != cognitive-history portability != synchronization continuity**. |
| 17 Aug 2026 | Google Admin Console | Admin Assist embeds Gemini sidepanel/search assistance directly into the governance surface. | AI is moving into the operational layer where policy decisions occur. Supports **Conversational Governance Surface** and advice-vs-action distinction tests. |
| Aug 2026 current | Microsoft 365 Copilot | Agentic capabilities in Word, Excel, and PowerPoint are generally available, enabling multi-step planning, execution, and refinement inside productivity apps. App Builder can create lightweight interactive apps from chat. | Confirms creator workflow competition is moving into app-native execution, not merely response generation. Supports **App-Native Agentic Continuity** and **Creator-Surface Convergence**. |
| 18 Aug 2026 | Microsoft 365 Copilot Workflows | Workflows agents execute inside a special Power Platform environment with a fixed DLP policy and allowlisted connectors; normal tenant/environment DLP does not apply there. | Execution environment is part of capability. Supports **Execution-Environment Governance Drift** and **Runtime Governance Continuity**. |
| 29 Apr 2026, still strategically relevant | Google Gemini | Gemini can directly generate PDF, DOCX, XLSX, Google Docs/Sheets/Slides, CSV, RTF, TXT, Markdown, and LaTeX files. | Direct file generation is becoming baseline. Deep Drift should move beyond “can it make a file?” toward **Artifact Round-Trip Fidelity**: generate -> human edit -> re-upload -> revise -> export -> reopen. |
| 9 Jul 2026, still strategically relevant | OpenAI ChatGPT Work | Work can research, use connected apps/files, and create finished documents, spreadsheets, presentations, reports, and Sites, including scheduled or monitored tasks. | The product unit becomes long-running workflow completion rather than a single conversational answer. Supports **Human Orchestration Burden**, **Approval-State Continuity**, and **Workflow-State Provenance**. |

## Trend synthesis by research axis

### 1. Memory is becoming mutable infrastructure

OpenAI's project-memory change matters because the memory boundary can now change while the project itself remains intact. That creates a clean experimental condition: hold project documents and instructions constant, change only the memory regime, then measure source selection, retrieval behavior, decisions, artifact differences, and human repair burden.

**Deep Drift benchmark:** Memory Boundary Transition Fidelity.

### 2. Skills are becoming versioned executable procedure

Anthropic now exposes skills as reusable, versionable packages and lets Managed Agents load skills from GitHub repositories. The procedure is no longer merely text hidden inside a prompt. It becomes a named system object with its own lifecycle.

**Deep Drift benchmarks:** Procedural-Version Provenance; Skill-Repository Provenance; Procedural Tacit-Knowledge Loss.

### 3. Mini-app builders collapse representation and execution

Google Sheets Canvas and Microsoft's App Builder show two forms of the same shift: conversation produces an operational interface rather than only prose. In Sheets Canvas, the generated interface writes back to the source spreadsheet. In Microsoft App Builder, users create and refine lightweight apps from Copilot chat.

The research problem becomes reconstructing which surface actually produced a state change.

**Deep Drift benchmarks:** Bidirectional State Fidelity; Mutation-Path Provenance; Surface-Driven Workflow Drift.

### 4. File generation is no longer the interesting benchmark

Gemini's direct generation of PDF, DOCX, XLSX, Slides, Markdown and other formats, plus ChatGPT Work's finished-document production, means artifact creation itself is increasingly baseline functionality.

The stronger test is round-trip survival:

`AI generate -> human edit -> re-upload -> AI revise -> export -> reopen in another application`

Measure semantic preservation, formatting survival, comments/track changes, formulas, tables, links, metadata, editability, and provenance.

**Deep Drift benchmark:** Artifact Round-Trip Fidelity.

### 5. Copy-paste and ingestion are becoming context architecture

OpenAI's rich-paste preservation and automatic conversion of very large pastes into attachments are not cosmetic UX details. They change the object type entering the system.

A 9,999-character direct paste and a 10,001-character attachment may contain almost identical text while entering different retrieval/context paths.

**Deep Drift benchmarks:** Ingestion-Channel Drift; Context-Surface Equivalence; Paste Fidelity.

### 6. Research context can now change without direct human insertion

Google Workspace Studio can automatically add sources to Gemini Notebooks through recurring workflows. A notebook can therefore retain the same project identity while its evidence environment changes repeatedly.

**Deep Drift benchmark:** Automated Context Accretion Drift.

### 7. Governance and runtime are becoming part of observed intelligence

Microsoft's special Workflows execution environment and Google's embedded Admin Assist show why capability cannot be attributed to model intelligence alone. Permission policy, DLP, connector availability, runtime environment, and governance surface materially shape what the system can do.

**Deep Drift benchmarks:** Execution-Environment Governance Drift; Runtime Governance Continuity; Conversational Governance Surface.

## New working model for Deep Drift

```text
HUMAN INTENT
↓
MEMORY / PROJECT STATE
↓
SOURCE + INGESTION SURFACE
↓
SKILL / PROCEDURE VERSION
↓
MODEL / AGENT
↓
PERMISSION / APPROVAL / GOVERNANCE
↓
RUNTIME / TOOL / APP / BROWSER
↓
STATE MUTATION
↓
EDITABLE ARTIFACT
↓
COPY / SHARE / EXPORT / MIGRATION
↓
AUDIT / PROVENANCE
```

The central failure mode is increasingly **successful output with broken causal history**. A document can open correctly, a spreadsheet can calculate, a mini-app can work, and a message can send while the system no longer makes it easy to reconstruct which source state, skill version, permission state, ingestion path, or human decision produced the result.

That is not a metadata inconvenience. It is a reliability problem.

## Recommended next experiments

1. **Memory boundary A/B test:** same project, same files, same prompt, default memory vs project-only memory.
2. **Paste threshold test:** same text at direct-paste size vs attachment-conversion size; compare grounding and output.
3. **Skill version test:** same source and task under skill v1 and skill v2; measure behavioral and artifact delta.
4. **Repository skill test:** pin a Git commit for a skill, then update the repository and repeat; test whether the causal procedure can be reconstructed.
5. **Mini-app mutation test:** modify a Google Sheet through the Sheet interface, through Sheets Canvas, and through another automation path; compare auditability.
6. **Artifact round-trip test:** generate DOCX/PDF/XLSX, edit manually, re-upload, revise, export again, and score structure/provenance survival.
7. **Notebook accretion test:** compare a manually maintained notebook with an automatically updated notebook using the same source sequence, including one duplicate, one stale source, and one conflicting source.
8. **Runtime governance test:** perform an equivalent workflow in different governed execution environments and record connector availability, policy blocks, provenance, and repair labor.

## Evidence quality

**High confidence:** OpenAI release notes, Anthropic product/platform release notes, Google Workspace Updates, and Microsoft Learn/Support used here are first-party sources.

**Interpretive status:** Deep Drift benchmark names, causal models, hypotheses, and research recommendations are ĀTØR Institute research constructions. Provider documentation establishes the product behavior; it does not establish the Deep Drift interpretation automatically.

## Primary sources

- OpenAI, ChatGPT Release Notes: https://help.openai.com/en/articles/6825453-gpt-4
- Anthropic, Build production agents with computer use, Skills API, and Files API, 20 Aug 2026: https://claude.com/blog/computer-use-skills-api-files-api
- Anthropic, Claude Platform Release Notes: https://platform.claude.com/docs/en/release-notes/overview
- Anthropic, Claude Apps Release Notes: https://support.claude.com/en/articles/12138966-release-notes
- Google Workspace Updates, August 2026: https://workspaceupdates.googleblog.com/2026/08/
- Google Workspace, Sheets Canvas, 13 Aug 2026: https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html
- Google, Gemini direct file generation, 29 Apr 2026: https://blog.google/innovation-and-ai/products/gemini-app/generate-files-in-gemini/
- Microsoft Support, App Builder in Microsoft Copilot: https://support.microsoft.com/en-us/microsoft-365-copilot/build-apps-with-microsoft-365-copilot-frontier
- Microsoft Learn, Copilot Workflows environment, updated 18 Aug 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/workflows-environment-workflows-agents
- Microsoft 365 Copilot roadmap / agentic Word, Excel, PowerPoint: https://learn.microsoft.com/en-us/copilot/release-plan/2025wave2/copilot-sales/support-sellers-copilot-sales-mobile-experience-outlook

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir’an | CHATJIPITI SINGH**
