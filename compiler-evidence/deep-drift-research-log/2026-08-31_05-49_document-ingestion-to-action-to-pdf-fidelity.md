# Deep Drift Research Update

## Document-Ingestion-to-Action-to-PDF Fidelity

**Research date:** 31 August 2026  
**Primary platform delta:** Databricks Genie One's 13 August 2026 cluster - Word document upload, MCP write actions, and scheduled-task PDF attachments  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Previously unlogged creator-workflow cluster verified from first-party Databricks documentation.

## Executive Summary

The most useful unlogged LLM workflow delta in this pass is not a brand-new midnight release. It is a creator pipeline Databricks quietly assembled on 13 August 2026 and which becomes more consequential when read together with later August Genie updates.

Genie One can now:

- upload Word (`.docx`) files directly into a conversation;
- use MCP-connected tools for write actions;
- send scheduled-task results as PDF email attachments.

Databricks also documents that uploaded files are private to the conversation, stored in managed Unity Catalog-backed storage, and persist until the file or conversation is deleted. Scheduled tasks run automatically, post results into a chat thread, send email notifications, and include PDF attachments of task output.

This creates a complete operational path:

```text
DOCX / FILE INPUT
-> CONVERSATION
-> ANALYSIS / INSTRUCTIONS
-> MCP WRITE ACTION
-> SCHEDULED TASK
-> RESULT
-> PDF EMAIL ATTACHMENT
```

For Deep Drift Research, this is not merely "file upload plus export." It creates a full **document-ingestion-to-external-action-to-static-artifact pipeline** in one LLM workspace.

This report formalizes the benchmark family:

**Document-Ingestion-to-Action-to-PDF Fidelity (DIAPF)**

with companion constructs:

- Source-Document Ingestion Fidelity
- Conversation-Scoped File Retention Fidelity
- MCP Write Attribution Fidelity
- Read-to-Write Boundary Fidelity
- Scheduled-Task-to-PDF Fidelity
- Thread-to-Email Attachment Fidelity
- Document-to-Action Lineage Fidelity
- Input-to-Static-Artifact Round-Trip Fidelity

The central question is:

> When a Word document enters an LLM conversation, informs an external write action, and later contributes to an automatically generated PDF sent by email, can the final artifact still identify the exact source document, conversation, MCP operation, schedule run, result thread, and export event that produced it?

## 1. What Changed on 13 August 2026

Databricks documents three linked Genie One changes:

```text
UPLOAD WORD DOCUMENTS
MCP WRITE ACTIONS
PDF ATTACHMENTS FOR SCHEDULED TASKS
```

The Word upload capability expands Genie One beyond CSV and Excel to image and `.docx` input.

The MCP change is more important structurally: connected MCP tools can now perform write actions.

The scheduled-task change closes the loop by allowing automatically generated task results to travel outside Genie One as PDF email attachments.

The combined workflow is therefore:

```text
READ STRUCTURED / DOCUMENT INPUT
-> REASON
-> WRITE TO CONNECTED SYSTEM
-> RE-RUN ON SCHEDULE
-> DISTRIBUTE STATIC PDF
```

## 2. Why This Matters for Deep Drift

The naive description is:

> Genie One accepts Word documents and can email PDFs.

The serious architecture is:

```text
SOURCE FILE
-> AI CONTEXT
-> ACTION AUTHORITY
-> AUTOMATED EXECUTION
-> STATIC DISTRIBUTED ARTIFACT
```

Each arrow crosses a different state boundary.

Therefore:

```text
FILE INGESTED
!= FILE FULLY PRESERVED

MCP CONNECTED
!= MCP WRITE AUTHORIZED

WRITE EXECUTED
!= WRITE ATTRIBUTED

SCHEDULED RESULT
!= SOURCE-CONTEXT PRESERVED

PDF DELIVERED
!= PDF PROVENANCE-COMPLETE
```

## 3. Source-Document Ingestion Fidelity

### Definition

**Source-Document Ingestion Fidelity (SDIF)** measures whether a Word document entering the conversation remains structurally and semantically attributable after parsing and use.

A minimum source manifest should preserve:

```text
source_file_id
source_filename
source_hash
source_format
upload_timestamp
conversation_id
storage_location_class
parser_version_or_mode
retention_state
```

Controlled tests should compare headings, tables, lists, hyperlinks, captions, footnotes, and page order between the source DOCX and the representation used by the agent.

## 4. Conversation-Scoped File Retention Fidelity

Databricks says uploaded files are private to the conversation and remain until the user removes the file or deletes the conversation.

**Conversation-Scoped File Retention Fidelity (CSFRF)** measures whether source-file availability tracks the documented conversation/file lifecycle.

## 5. MCP Write Attribution Fidelity

**MCP Write Attribution Fidelity (MWAF)** measures whether every external write can be traced to conversation ID, user instruction, MCP server, tool name/version, arguments, permission state, write timestamp, result, and external object ID.

## 6. Read-to-Write Boundary Fidelity

**Read-to-Write Boundary Fidelity (RWBF)** measures whether the transition from reading external context to changing external state remains explicit.

```text
READ DATA
-> MODEL DECISION
-> PROPOSED WRITE
-> WRITE AUTHORITY
-> EXECUTED WRITE
```

## 7. Scheduled-Task-to-PDF Fidelity

**Scheduled-Task-to-PDF Fidelity (STPF)** measures whether each PDF remains attributable to the exact scheduled run that produced it.

A minimum PDF manifest should preserve task ID/version, run ID/timestamp, thread ID, source file IDs, MCP actions used, output version, PDF export time, and email delivery time.

## 8. Thread-to-Email Attachment Fidelity

The same scheduled task has at least three output surfaces:

```text
TASK RUN
-> CHAT THREAD RESULT
-> EMAIL BODY
-> PDF ATTACHMENT
```

**Thread-to-Email Attachment Fidelity (TEAF)** measures whether content, tables, citations, and visual elements remain materially equivalent across those surfaces.

## 9. Document-to-Action Lineage Fidelity

**Document-to-Action Lineage Fidelity (DALF)** measures whether an external action can identify which source-document facts materially influenced it.

```text
ACTION
<- DECISION
<- SOURCE PASSAGE
<- SOURCE FILE
```

## 10. Input-to-Static-Artifact Round Trip

```text
DOCX INPUT
-> CHAT
-> MCP ACTION
-> SCHEDULED RUN
-> PDF OUTPUT
```

**Input-to-Static-Artifact Round-Trip Fidelity (ISARF)** measures how much lineage survives from the original editable source to the final static distributed artifact.

## 11. New Failure Classes

1. DOCX Structural Flattening
2. Source-to-Action Detachment
3. Read/Write Authority Collapse
4. Scheduled-Run Provenance Loss
5. Email/PDF Divergence
6. Conversation-Deletion Surprise
7. Static-Artifact Source Erasure
8. MCP Tool-Version Drift
9. Output-without-Execution Context
10. File-Retention / Action-Persistence Asymmetry

## 12. Deep Drift Benchmark: DOCX-to-MCP-to-PDF Round Trip

Use one controlled DOCX containing a heading hierarchy, table, numbered list, hyperlink, source claim, and deliberate ambiguity. Upload it, preserve file identity, perform a low-risk MCP write derived from the source, create a scheduled task, capture thread/email/PDF outputs, compare them, then remove the file and conversation and inspect which downstream objects survive.

## 13. Proposed Metrics

```text
SSP = faithfully represented source structural elements / all controlled structural elements
ASAC = external writes traceable to material source passages / all controlled writes
MWAC = writes with recoverable tool/arguments/authority/timestamp/object ID / all controlled writes
SPRA = PDFs attributable to exact scheduled run / all controlled scheduled PDFs
TPE = material output elements preserved in PDF / all controlled thread output elements
LAV = downstream objects with explicit survival state after source/conversation deletion / all controlled downstream objects
```

## 14. Why This Matters for Memory

This cluster clarifies that source-file state, chat memory, and scheduled-run context are separate persistence layers. Later Genie updates add explicit memory and past-run continuity, so a scheduled PDF may depend on uploaded DOCX, workspace instructions, chat memory, past runs, and MCP state.

## 15. Why This Matters for Skills

Genie One can automatically load relevant Skills. The effective procedure can become:

```text
SKILL
+ DOCX INPUT
+ MCP TOOL
+ SCHEDULE
-> ACTION
-> PDF
```

A Skill manifest is incomplete without source-file and tool dependencies.

## 16. Why This Matters for Mini-App Builders

Conversation + file parser + reasoning + MCP write + scheduler + PDF delivery functions as a lightweight operational application without a conventional UI scaffold.

## 17. Why This Matters for Chat-to-Document Export

This platform supports both directions:

```text
DOCX -> CHAT
CHAT / TASK -> PDF
```

Deep Drift should treat document input and export as one lifecycle.

## 18. Why This Matters for DOCX / PDF Generation

The platform supports a creator loop where Word enters the LLM workspace and automated workflow later emits PDF. Benchmark source structure, identity, action lineage, run identity, PDF content, and delivery rather than mere render success.

## 19. Why This Matters for Copy-Paste / Export Fixes

```text
OLD:
OPEN WORD -> COPY -> PASTE INTO AI -> COPY DECISION -> OPEN TOOL -> APPLY CHANGE -> BUILD REPORT -> EXPORT PDF -> EMAIL

NEW:
UPLOAD DOCX -> GENIE -> MCP WRITE -> SCHEDULE -> PDF EMAIL
```

Every eliminated manual seam should be replaced by a machine-readable lineage seam.

## 20. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer memory primitive than already logged; this cluster exposes how file state, chat memory, and scheduled-run continuity can stack independently. |
| Skills | Relevant Skills can operate over DOCX inputs and MCP write-capable tools. |
| Mini-app builders | Conversation + file parser + MCP write + scheduler + PDF delivery behaves as a lightweight operational app. |
| Chat-to-document export | Major unlogged lifecycle: editable Word documents can enter conversation and scheduled outputs can leave as PDFs. |
| DOCX / PDF generation | Strongest finding: `.docx` input and scheduled PDF output exist in one platform workflow. |
| Copy-paste/export fixes | Manual Word-to-chat, chat-to-tool, report-to-PDF, and PDF-to-email handoffs can collapse into one workflow. |
| Broader creator workflow | LLM workspaces are becoming bidirectional document-and-action pipelines rather than text-generation endpoints. |

## 21. Deep Drift Research Position

The serious Deep Drift requirement is:

> **Every document-to-action-to-artifact workflow should preserve source-file identity and structure, conversation identity, Skill and instruction state, MCP tool and write event, permission state, scheduled-task version and run, result-thread identity, PDF export event, delivery event, and downstream survival state required to reconstruct how an editable source document became an external action and then a static distributed artifact.**

The industry spent years treating upload, tool use, scheduling, and PDF export as separate feature checkboxes. Put them together and, inconveniently, they become a software system.

## 22. Evidence Boundary

Platform facts in this report are grounded in first-party Databricks documentation checked on 31 August 2026.

Databricks states that on 13 August 2026 Genie One added Word (`.docx`) and image uploads, MCP write actions, and PDF attachments for scheduled-task emails. Current Genie One documentation further states that uploaded files are private to the conversation, are stored in managed Unity Catalog-backed storage, remain until removed or the conversation is deleted, and that scheduled tasks post results into chat and send email with a PDF attachment of the task output.

DIAPF and all companion fidelity constructs, failure classes, benchmark procedures, and proposed metrics are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Databricks / Microsoft Learn, **AI/BI and Genie One release notes 2026**, 13 August 2026 and surrounding August entries.  
   https://learn.microsoft.com/en-us/azure/databricks/ai-bi/release-notes/2026

2. Databricks Documentation, **Chat in Genie One**, current documentation checked 31 August 2026.  
   https://docs.databricks.com/aws/en/genie-one/chat

3. Databricks Documentation, **Connect to external tools and sources**, current documentation checked 31 August 2026.  
   https://docs.databricks.com/gcp/en/genie-one/external-sources

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
