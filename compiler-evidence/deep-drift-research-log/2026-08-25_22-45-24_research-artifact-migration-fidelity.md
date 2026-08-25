# Deep Drift Research Update

## Research Artifact Migration Fidelity: When an AI Workflow Survives but Its State Does Not

**Research date:** Tuesday, 25 August 2026  
**ATØR observation time:** 22:45:24 WIB / 15:45:24 UTC  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan; one new-to-log migration/export signal identified.

## Executive Summary

The most useful delta in this scan is not another model release. It is a **workflow migration problem**.

Microsoft has retired **Deep Research** in the consumer Copilot app starting 18 August 2026. Existing saved research remains accessible, and Microsoft says reports can be opened in Word and saved for future use. Microsoft 365 Premium users can continue similar work through **Researcher**. This is a product transition in which the research capability changes surface while prior outputs survive through chat history and/or Word documents.

Google is about to make an even harsher continuity boundary visible. **Ask Gemini in Google Chat** begins rollout on 26 August 2026. Google explicitly states that conversation history from the old Gemini side panel in Chat **will not migrate** to the new Ask Gemini surface, although admins can export that history and eligible users can download it.

Together these changes expose a Deep Drift research problem:

```text
WORKFLOW SURVIVES
!= INTERFACE SURVIVES
!= CONVERSATION STATE SURVIVES
!= ARTIFACT SURVIVES
!= EDITABILITY SURVIVES
```

The new benchmark proposed here is **Research Artifact Migration Fidelity (RAMF)**.

RAMF measures whether a long-running AI research or creator workflow remains usable when a provider retires, renames, relocates, or replaces the surface where the work was created.

## 1. Microsoft: Deep Research -> Researcher / Word Preservation

Microsoft Support states that Deep Research in the consumer Copilot app is being retired starting **18 August 2026**.

Key continuity facts:

- Microsoft 365 Premium subscribers can continue detailed research using **Researcher in Copilot**.
- Existing saved research content is not deleted as part of the retirement.
- Premium subscribers can access saved research through Researcher.
- Personal and Family subscribers can access previous Deep Research reports through chat history.
- Existing Deep Research reports can be opened in **Microsoft Word** and saved for future use.

This is important because the migration path separates at least four objects:

```text
RESEARCH CAPABILITY
RESEARCH CHAT HISTORY
GENERATED REPORT
EDITABLE WORD ARTIFACT
```

A provider may preserve the generated report while changing the interactive research environment that produced it.

### Deep Drift interpretation

A research workflow is not fully preserved merely because the final report remains readable.

The following may still be lost:

- prompts that led to the report;
- intermediate research branches;
- source-selection decisions;
- revisions made inside the AI surface;
- tool execution history;
- hidden state or session context;
- relationship between report paragraphs and research steps;
- provenance needed to reproduce the result.

This creates a distinction:

```text
OUTPUT PRESERVATION
!= WORKFLOW PRESERVATION
```

## 2. Google: Ask Gemini in Chat and Non-Migrating History

Google Workspace states that **Ask Gemini in Google Chat** begins gradual rollout on **26 August 2026**.

The new surface consolidates search across Workspace data, content generation, conversation catch-up, task/event actions, and resumable sessions.

However, Google explicitly says that conversation history from the old Gemini side panel in Chat **will not migrate** to the new Ask Gemini surface.

Google provides export/download paths, but an exported archive is not equivalent to native continuation.

The migration chain becomes:

```text
OLD CHAT SIDE PANEL
-> HISTORY EXPORT / DOWNLOAD
-> NEW ASK GEMINI SURFACE
```

with no automatic native state transfer between the first and third layers.

### Deep Drift interpretation

This is a direct example of **Cognitive-History Migration Loss**:

the platform preserves the possibility of retrieving historical records while discontinuing the native continuation path that made those records operationally useful.

A file containing old conversation history may preserve evidence while failing to preserve workflow state.

## 3. Supporting Trend: Creator Workflows Are Becoming Stateful Systems

The surrounding platform trend makes migration fidelity more important, not less.

Anthropic's August 19-20 updates make persistent state increasingly explicit: Managed Agents can mount memory stores into self-hosted sandboxes and synchronize agent changes back to those stores; the Skills API supports uploaded and versioned skill packages; the Files API provides persistent document storage; and the redesigned session viewer exposes mounted resources, raw events, per-tool statistics, and per-thread activity.

Google's August 24 Gemini update turns responses into interactive simulations, 3D models, grids, tables, and other manipulable in-chat objects.

Google Sheets Canvas is already a read-write mini-app layer in which changes in the generated interface update the source spreadsheet and spreadsheet changes update the canvas.

OpenAI's August 21-24 direction continues toward tool discovery and runtime consolidation: improved plugin discovery, plus migration away from the Codex MCP server command toward the Codex app server.

The important trend is:

```text
CHAT
-> STATEFUL WORKSPACE
-> TOOLS
-> MEMORY
-> SKILLS
-> FILES
-> MINI-APPS
-> EDITABLE ARTIFACTS
```

Once AI becomes a workspace rather than a transient answer box, provider migrations become a provenance and continuity problem.

## 4. New Deep Drift Benchmark: Research Artifact Migration Fidelity (RAMF)

### Definition

**Research Artifact Migration Fidelity** measures how much of a research or creator workflow remains operationally recoverable when the platform surface is retired, replaced, renamed, or moved.

### RAMF dimensions

| Dimension | Question |
|---|---|
| Output survival | Does the final report/file remain available? |
| Editability survival | Can the artifact still be edited in a normal tool? |
| Conversation survival | Does the originating conversation remain accessible? |
| Native continuation | Can the new surface continue directly from the old state? |
| Source survival | Are cited/uploaded sources still linked and usable? |
| Procedure survival | Are skills, prompts, templates, and settings preserved? |
| Tool-state survival | Are tool/action results and execution state preserved? |
| Provenance survival | Can a reviewer reconstruct how the artifact was produced? |
| Export completeness | Does the export include enough state for later reconstruction? |
| Human rehydration burden | How much must the human manually rebuild? |

## 5. Proposed RAMF Score

A simple first version:

```text
RAMF =
(Output + Editability + Conversation + Native Continuation
 + Sources + Procedure + Tool State + Provenance + Export)
 / 9
```

Each component can be scored:

- `1.0` = preserved and operational;
- `0.5` = preserved partially or only through manual transfer;
- `0.0` = lost or unavailable.

Human rehydration burden should be recorded separately in minutes or number of manual reconstruction operations.

## 6. New Failure Classes

### Surface Retirement / State Survival Gap

The old product surface is retired while only selected outputs survive.

### Exported Evidence / Non-Executable State Gap

The user can download history, but the new AI surface cannot natively resume from it.

### Artifact-Only Preservation

A final report survives while the reasoning, revisions, sources, and execution path do not.

### Native Continuation Loss

The new product can perform similar work but cannot directly inherit the old session state.

### Human Workflow Rehydration Burden

The human must manually copy, upload, restate, reorganize, or reinterpret prior work before the successor system can continue.

## 7. Controlled Deep Drift Test

Create the same research project on multiple platforms and deliberately cross a product transition or export boundary.

```text
CREATE RESEARCH TASK
-> ATTACH SOURCES
-> GENERATE REPORT
-> REVISE REPORT
-> CREATE STRUCTURED ARTIFACT
-> EXPORT
-> MOVE TO SUCCESSOR SURFACE
-> ATTEMPT CONTINUATION
```

Measure:

- report survival;
- formatting fidelity;
- DOCX/PDF survival;
- citations/links;
- conversation-history availability;
- resumability;
- uploaded-source availability;
- remembered project constraints;
- procedure/skill survival;
- tool-state survival;
- number of human reconstruction steps;
- time to restore productive state.

## 8. Relation to Existing Deep Drift Protocols

| Existing concept | RAMF connection |
|---|---|
| Artifact Lineage & Round-Trip State Fidelity | Migration adds a provider/surface boundary to artifact round trips. |
| Session Continuity, Retrieval & Rehydration | A successor surface may retain history as export but lose native continuation. |
| Mounted Memory State Fidelity | Persistent memory may survive independently from conversation history, or vice versa. |
| Procedural-Version Provenance | Skills/templates may need explicit migration even when files survive. |
| Agent State Reconstruction Fidelity | A final artifact is insufficient if execution state disappears at migration. |
| Human Orchestration Burden | Migration often returns integration labor to the human. |

## 9. Deep Drift Research Position

AI companies increasingly market persistence, memory, workspaces, agents, and creator tools as continuity.

That continuity should be tested at the moment the product changes shape.

A mature creator system should survive:

```text
RENAME
RETIREMENT
SURFACE MIGRATION
MODEL CHANGE
TOOL CHANGE
EXPORT
RE-IMPORT
```

without forcing the human to become the archival engineer of their own supposedly intelligent workspace.

The decisive test is not:

Can I still see my old report?

It is:

Can I continue the work with its important state, provenance, sources, procedure, and artifact relationships intact?

That is the difference between **data retention** and **cognitive workflow continuity**.

## Evidence Boundary

Provider capability statements above are grounded in first-party product/support sources. RAMF, the scoring proposal, failure classes, and causal interpretations are ĀTØR Institute / Deep Drift research constructs.

## Primary Sources

1. Microsoft Support, "Deep Research in Microsoft Copilot" - retirement beginning 18 August 2026; saved research access and Word preservation: https://support.microsoft.com/en-us/microsoft-copilot/deep-research-in-microsoft-copilot
2. Google Workspace Updates, 20 August 2026, "Introducing Ask Gemini in Chat" - rollout starts 26 August; old Chat-side-panel conversation history will not migrate: https://workspaceupdates.googleblog.com/2026/
3. Anthropic Claude Platform release notes, 19 August 2026 - memory stores and session observability: https://platform.claude.com/docs/en/release-notes/overview
4. Anthropic, 20 August 2026, "Build production agents with computer use, the Skills API, and the Files API": https://claude.com/blog/computer-use-skills-api-files-api
5. Google Workspace Updates, 24 August 2026, "Generate interactive simulations and models in the Gemini app": https://workspaceupdates.googleblog.com/2026/08/generate-interactive-simulations-and-models-in-the-Gemini-app.html
6. OpenAI Product Release Notes, 21-24 August 2026 - improved plugin discovery and Codex app-server migration: https://openai.com/products/release-notes/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**