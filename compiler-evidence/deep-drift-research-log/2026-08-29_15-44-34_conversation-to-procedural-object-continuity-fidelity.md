# Deep Drift Research Update

## Conversation-to-Procedural-Object Continuity Fidelity

**Research date:** 29 August 2026  
**Primary release cluster:** July-August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log Databricks Genie One creator-workflow cluster verified from current Azure Databricks / Microsoft Learn documentation.

## Executive Summary

Databricks Genie One now combines several creator-workflow primitives that platforms normally advertise as separate features: automatic recall and search of prior conversations; explicit user memory; citations back to the exact prior conversation or saved memory used; conversion of a conversation into a reusable Genie Agent; personal user Skills stored as workspace files; chat-to-document drafting with citations, comments, sharing, and version history; PDF/Word/image/CSV/Excel ingestion; scheduled chat tasks that return as chat threads and PDF email attachments; MCP write actions; and Git-backed dashboard version control.

The important Deep Drift architecture is therefore not one feature but a persistence ladder:

```text
CONVERSATION
-> RETRIEVED CONTEXT
-> SAVED MEMORY
-> USER SKILL
-> REUSABLE AGENT
-> EDITABLE DOCUMENT
-> SCHEDULED TASK
-> PDF OUTPUT
-> DASHBOARD / GIT STATE
-> FUTURE CONVERSATION
```

This creates a new benchmark family: **Conversation-to-Procedural-Object Continuity Fidelity (CPOCF)**, with **Conversation Recall Attribution Fidelity (CRAF)**, **Memory-to-Response Citation Fidelity (MRCF)**, **Conversation-to-Agent Distillation Fidelity (CADF)**, **Skill File Lineage Fidelity (SFLF)**, **Chat-to-Document Version Fidelity (CDVF)**, **Scheduled Artifact Continuity Fidelity (SACF)**, and **Cross-Surface Object Identity Fidelity (CSOIF)**.

The central question is: when conversational state is recalled, saved as memory, converted into a Skill or agent, transformed into a document, scheduled, rendered as PDF, and connected to version-controlled artifacts, can the platform preserve which object came from which earlier state without collapsing all persistence layers into the vague word "memory"?

## 1. Verified Platform Changes

### Conversation recall and explicit memory

Databricks added search and reuse of past Genie One conversations on 16 July 2026. Current documentation says Genie One can automatically draw on earlier conversations when relevant and adds a citation linking back to the original conversation. Users can also search past chats by content, reopen them, or bring previous context into the current conversation.

The separate Memory beta stores facts only when the user explicitly asks Genie One to remember them. Saved memories are private, automatically applied to future conversations, cited when used, and can be updated or deleted conversationally.

### Conversation-to-agent conversion

A Genie One conversation can be converted into a reusable Genie Agent. The source conversation's accumulated context becomes the starting material for an agent whose context, instructions, and data assets can then be refined.

### User Skills

Genie One exposes personal user Skills. A user can ask Genie One to create a Skill, which is saved under:

```text
/Workspace/Users/{email}/.assistant/skills/
```

Skills can be loaded automatically when relevant, invoked manually with `/skill-name`, and edited either conversationally or directly in Canvas.

### Documents

Genie One can draft a shareable editable document from chat. Documents open in a canvas beside the conversation, show citations back to the data and sources used, keep version history, support comments, and can be shared.

### Word/PDF ingestion and scheduled PDF output

By August 2026 Genie One supported PDF, Word, image, CSV, and Excel uploads. Scheduled tasks create chat-thread runs and can send results by email with PDF attachments.

### MCP writes and Git-backed dashboards

The August release set added MCP writes. AI/BI dashboards can live in Git folders for version control, branches, pull-request workflows, deployment, and restoration of previous versions.

## 2. Why This Matters for Deep Drift

The platform exposes multiple persistence layers:

```text
PAST CONVERSATION HISTORY
AUTOMATIC CONVERSATION RECALL
EXPLICIT SAVED MEMORY
WORKSPACE INSTRUCTIONS
USER SKILLS
GENIE AGENTS
GENIE ONTOLOGY
DOCUMENT HISTORY
SCHEDULED TASK STATE
GIT-BACKED DASHBOARD STATE
```

These objects have different owners, scopes, update rules, permissions, and causal effects. Calling all of them "memory" is technically lazy and destroys provenance.

Core distinctions:

```text
REMEMBERED != RETRIEVED FROM OLD CHAT
RETRIEVED != SAVED MEMORY
SAVED MEMORY != SKILL
SKILL != AGENT
AGENT != DOCUMENT
DOCUMENT VERSION != CHAT VERSION
SCHEDULED OUTPUT != CURRENT TASK DEFINITION
```

## 3. Deep Drift Constructs

### Conversation-to-Procedural-Object Continuity Fidelity (CPOCF)

Measures whether content, rules, source attribution, identity, and revision state remain reconstructable as conversational work becomes persistent procedural and artifact objects.

Minimum lineage graph:

```text
conversation_id
source_turn_ids
recalled_conversation_ids
memory_ids
skill_ids
agent_ids
document_ids
document_versions
scheduled_task_ids
generated_artifact_ids
dashboard_ids
git_revision_ids
```

### Conversation Recall Attribution Fidelity (CRAF)

Measures whether information reused from earlier chats remains attributable to the exact prior conversation that supplied it. Databricks' source-chat citations provide a strong testable baseline.

### Memory-to-Response Citation Fidelity (MRCF)

Measures whether saved memory used in a response is visibly attributable to the specific memory item that influenced the answer.

```text
PERSONALIZATION != TRACEABLE MEMORY APPLICATION
```

### Conversation-to-Agent Distillation Fidelity (CADF)

Measures whether conversion of a conversation into an agent preserves stable rules while rejecting temporary examples, failed ideas, jokes, corrections, and context-specific residue.

```text
CONVERSATION CONTEXT != AGENT CANON
```

### Skill File Lineage Fidelity (SFLF)

Measures whether active Skill behavior can be traced to exact file contents, creation conversation, edits, and invocation state.

### Chat-to-Document Version Fidelity (CDVF)

Measures whether each document version remains traceable to the chat state, source assets, citations, and edits that produced it.

### Scheduled Artifact Continuity Fidelity (SACF)

Measures whether recurring task outputs preserve schedule definition, instruction version, run identity, source state, chat thread, and generated PDF identity.

### Cross-Surface Object Identity Fidelity (CSOIF)

Measures whether relationships among chat, memory, Skill, agent, document, schedule, PDF, dashboard, and Git revision remain reconstructable instead of being isolated by product surface.

## 4. Failure Classes

1. **Recall-without-supersession awareness** - an older conversation is retrieved even though a later decision replaced it.
2. **Memory / conversation source confusion** - a reused fact is not clearly distinguishable as saved memory versus recalled history.
3. **Conversation-to-agent overdistillation** - temporary conversational residue becomes permanent agent behavior.
4. **Conversation-to-agent underdistillation** - important stable constraints fail to become part of the agent.
5. **Skill file / runtime drift** - a Skill changes but a later execution cannot be tied to the version that actually governed it.
6. **Automatic Skill selection opacity** - the system loads a Skill automatically without making its causal role sufficiently visible.
7. **Document citation survival failure** - citations exist in the first document state but are stripped by later copying or transformation.
8. **Document-version / chat-version divergence** - the document evolves while the source chat remains static, creating competing histories.
9. **Scheduled PDF instruction drift** - recurring PDF outputs do not expose which task instruction version generated each run.
10. **File-retention surprise** - uploaded files remain until explicitly removed or the conversation is deleted, with no fixed retention period or configurable lifecycle policy.
11. **Git / published-dashboard identity break** - branch switching can remove dashboards and later recreate them with new URLs and IDs, breaking links, bookmarks, and integrations.
12. **Procedure-to-artifact causality loss** - a downstream PDF/report/dashboard survives after the Skill, agent, memory, or chat state that created it has changed.

## 5. Benchmark: Conversation-to-Object Ladder Test

Create one controlled conversation containing a permanent reporting rule, a temporary example, a corrected mistake, one explicit preference, a source citation, a formatting instruction, and one statement explicitly marked "do not make this permanent."

Then:

```text
A. Save the explicit preference as memory.
B. Create a user Skill from the formatting instruction.
C. Convert the conversation into a Genie Agent.
D. Draft a document.
E. Edit the document and create multiple versions.
F. Create a scheduled task.
G. Produce a PDF result.
H. Create or update a dashboard tracked in Git.
I. Start a new conversation and recall the original work.
```

Measure correct memory attribution, conversation-recall citation, temporary-content rejection during agent creation, Skill version traceability, document citation survival, document version traceability, scheduled-run identity, PDF-to-run attribution, dashboard-to-Git revision identity, cross-object linkage, and human reconstruction time.

## 6. Metrics

```text
CRCC = materially recalled claims linked to exact prior conversation / all material recalled claims

MAV = responses using saved memory that visibly identify relevant memory source / all responses using saved memory

ADP = persistent agent rules that should have become permanent / all content persisted into the agent

ADR = required permanent source constraints preserved / all required permanent source constraints

SVT = Skill-governed executions attributable to exact Skill state / all tested Skill executions

DLC = document versions attributable to source chat and source-data state / all document versions

SAA = scheduled artifacts attributable to exact task definition and run / all scheduled artifacts

COLC = material persistence relationships explicitly reconstructable / all expected chat-memory-skill-agent-document-task-artifact relationships
```

## 7. Category Scan

| Category | Current finding |
|---|---|
| Memory | Material new-to-log cluster: automatic prior-conversation recall with source-chat citations plus explicit private Memory beta with citations and conversational update/delete. |
| Skills | Material new-to-log feature: personal user Skills can be created from conversation, saved as workspace files, auto-loaded, manually invoked, and edited. |
| Mini-app builders | Material adjacent architecture: conversations can create reusable agents, Skills, scheduled tasks, documents, dashboards, and MCP write actions. |
| Chat-to-document export | Material new-to-log path: editable documents drafted from chat with source citations, comments, sharing, and version history. |
| DOCX / PDF | Word and PDF are supported as chat inputs; scheduled tasks can deliver PDF attachments. |
| Copy/paste/export fixes | No newer dedicated copy/paste fix surfaced in this Databricks cluster. |
| Broader creator workflow | Conversational state can be promoted into persistent procedural objects and artifacts, each with different identity, version, and persistence semantics. |

## 8. Deep Drift Research Position

The weak description is:

> Genie One has memory, Skills, agents, and documents.

The serious description is:

> A conversational state can now be selectively promoted into multiple durable computational objects, each with a different scope, version model, permission boundary, and downstream causal effect.

```text
MEMORY != HISTORY
HISTORY != SKILL
SKILL != AGENT
AGENT != DOCUMENT
DOCUMENT != SCHEDULE
SCHEDULE != ARTIFACT

ALL OF THEM = PERSISTENCE LAYERS
```

**Deep Drift requirement:** Every conversationally derived object should preserve the identity of its source conversation, the transformation that created it, the version currently active, later edits that changed it, and every downstream artifact or action that depended on it.

## 9. Evidence Boundary

Platform facts are grounded in current Azure Databricks / Microsoft Learn documentation retrieved 29 August 2026. Relevant release sequence:

- **16 July 2026:** search/reuse past conversations, Memory beta, chat-to-agent conversion.
- **9 July 2026:** document citations, document version history, GitHub MCP beta.
- **16 July 2026:** Git folders for dashboards generally available.
- **6-13 August 2026:** PDF uploads, Word/image uploads, PDF attachments for scheduled tasks, MCP writes, workspace instructions.
- Current Genie One chat documentation was last updated **27 August 2026** and additionally documents user Skills, automatic source-chat citations for recalled conversations, memory citations, scheduled tasks, document drafting, file-retention behavior, and cross-source connections.

CPOCF, CRAF, MRCF, CADF, SFLF, CDVF, SACF, CSOIF, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Microsoft Learn / Azure Databricks, **AI/BI and Genie One release notes 2026**, retrieved 29 August 2026.  
   https://learn.microsoft.com/en-us/azure/databricks/ai-bi/release-notes/2026

2. Microsoft Learn / Azure Databricks, **Chat in Genie One**, last updated 27 August 2026.  
   https://learn.microsoft.com/en-us/azure/databricks/genie-one/chat

3. Microsoft Learn / Azure Databricks, **Documents in Genie One**, retrieved 29 August 2026.  
   https://learn.microsoft.com/en-us/azure/databricks/genie-one/documents

4. Microsoft Learn / Azure Databricks, **Version control dashboards with Git**, retrieved 29 August 2026.  
   https://learn.microsoft.com/en-us/azure/databricks/dashboards/automate/git-support

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
