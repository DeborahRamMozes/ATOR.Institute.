# Deep Drift Research Update

## Agent-Native Office Artifact Generation Fidelity

**Research date:** 30 August 2026  
**Primary platform change:** Microsoft 365 Copilot release cluster published 25 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log creator-workflow architecture verified from first-party Microsoft Learn documentation.

## Executive Summary

Microsoft 365 Copilot now allows agents built with Copilot Studio lite to generate **Word documents, Excel spreadsheets, and PowerPoint presentations directly from chat**, with the resulting files saved to OneDrive. Microsoft identifies the relevant capability as part of **"Generate code, graphs, and documents"**, formerly called Code Interpreter.

The same agent-building surface can now be configured conversationally. Microsoft documents that users can describe an agent in natural language, have its instructions and knowledge sources generated or refined automatically, and add capabilities such as document creation without manually building the configuration step by step.

The resulting workflow is:

```text
NATURAL-LANGUAGE AGENT DESCRIPTION
-> GENERATED AGENT CONFIGURATION
-> KNOWLEDGE SOURCES
-> DOCUMENT-GENERATION CAPABILITY
-> USER CHAT
-> AGENT CREATES WORD / EXCEL / POWERPOINT
-> FILE SAVED TO ONEDRIVE
-> LATER REUSE / EDIT / SHARE / RETENTION
```

This is materially different from ordinary "chat export."

The conversational system now contains:

```text
BUILDER
+
SKILL / CAPABILITY
+
KNOWLEDGE GROUNDING
+
CHAT RUNTIME
+
FILE GENERATOR
+
PERSISTENT STORAGE
```

For Deep Drift Research, this creates a new benchmark family:

**Agent-Native Office Artifact Generation Fidelity (ANOAGF)**

with companion constructs:

**Agent-Configuration-to-Artifact Fidelity (ACAF)**  
**Capability Invocation Fidelity (CIF)**  
**Chat-to-Office Object Fidelity (COOF)**  
**Knowledge-to-Artifact Grounding Fidelity (KAGF)**  
**OneDrive Artifact Identity Fidelity (OAIF)**  
**Agent-Version-to-Artifact Reproducibility (AVAR)**  
**Cross-Format Office Generation Fidelity (CFOGF)**

The central research question is:

> When a user can build an agent conversationally, equip it with a document-generation capability, ground it in enterprise knowledge, and ask it to create a persistent Office file from chat, can the resulting artifact still expose the exact agent configuration, knowledge state, capability state, prompt, file-generation event, and persistent storage identity that produced it?

## 1. What Changed

Microsoft's 25 August 2026 Microsoft 365 Copilot release notes state:

- agents built with Copilot Studio lite can generate PowerPoint decks, Excel spreadsheets, and Word documents via chat;
- generated files are saved to OneDrive;
- the capability belongs to the "Generate code, graphs, and documents" capability;
- the capability was formerly known as Code Interpreter;
- Microsoft frames OneDrive storage as supporting organization and retention policy requirements.

Microsoft's Agent Builder documentation further states that a user can:

- describe an agent using natural language;
- have the builder automatically configure the agent;
- generate or refine instructions;
- add knowledge sources conversationally;
- add capabilities such as document creation;
- continue refining the agent after initial creation;
- use up to 20 knowledge sources, including SharePoint items and Copilot connectors, subject to licensing;
- ground agents in personal work data such as Teams chat messages and Outlook emails where permitted.

This makes document generation a property of a reusable agent, not only of an isolated chat session.

## 2. Why This Matters for Deep Drift

The old creator pipeline was usually:

```text
CHAT
-> TEXT RESPONSE
-> HUMAN COPY
-> WORD / EXCEL / POWERPOINT
```

The new pipeline can be:

```text
CHAT
-> AGENT CAPABILITY
-> NATIVE OFFICE FILE
-> ONEDRIVE
```

That removes manual transfer but also removes a visible boundary where the human previously noticed that content had crossed from conversation into a formal artifact.

Therefore:

```text
CHAT RESPONSE
!=
OFFICE ARTIFACT

AGENT CONFIGURATION
!=
CURRENT CHAT PROMPT

KNOWLEDGE AVAILABLE
!=
KNOWLEDGE USED

FILE GENERATED
!=
ARTIFACT PROVENANCE COMPLETE

FILE SAVED TO ONEDRIVE
!=
FILE REPRODUCIBLE
```

The Office file is now a downstream computational object produced by an agent configuration that may persist and evolve independently of the conversation.

## 3. New Deep Drift Construct: Agent-Native Office Artifact Generation Fidelity

### Definition

**Agent-Native Office Artifact Generation Fidelity (ANOAGF)** measures whether a reusable AI agent can convert conversational intent and grounded context into a native Office artifact while preserving enough state to reconstruct how that file was produced.

A minimum artifact manifest should preserve:

```text
agent_id
agent_version
agent_name
instruction_version
knowledge_source_ids
knowledge_source_revisions
capability_state
model_or_response_mode
chat_id
prompt_turn_id
resolved_prompt
artifact_type
artifact_id
artifact_created_at
onedrive_item_id
onedrive_path
artifact_version
```

## 4. Agent-Configuration-to-Artifact Fidelity

The builder can generate and refine agent configuration through natural language.

### Definition

**Agent-Configuration-to-Artifact Fidelity (ACAF)** measures whether the generated Office artifact can be tied to the precise agent instructions, knowledge configuration, and capability state active at generation time.

A reusable agent may evolve:

```text
AGENT v1
-> instruction A
-> artifact X

AGENT v2
-> instruction B
-> artifact Y
```

If artifact X survives while the agent later becomes v2, a reviewer still needs the v1 state.

Otherwise the file is attached to an agent name but not to the agent that actually created it.

## 5. Capability Invocation Fidelity

Microsoft separates document creation into a configurable capability.

### Definition

**Capability Invocation Fidelity (CIF)** measures whether the system records which capability produced the file and what operational mode was active.

The relevant distinction is:

```text
AGENT ANSWERED IN CHAT
vs
AGENT INVOKED DOCUMENT GENERATION
```

These are different execution paths and should not collapse into the same activity record.

A minimum capability record should preserve:

```text
capability_name
capability_version
capability_invoked_at
input_objects
output_file_type
execution_result
```

## 6. Chat-to-Office Object Fidelity

A Word document, spreadsheet, and presentation are not merely text containers.

They contain structured objects.

### Definition

**Chat-to-Office Object Fidelity (COOF)** measures whether the artifact faithfully converts conversational requirements into the correct native Office structures.

For Word:

```text
HEADINGS
PARAGRAPHS
TABLES
LISTS
REFERENCES
SECTIONS
```

For Excel:

```text
SHEETS
CELLS
FORMULAS
TABLES
CHARTS
DATA TYPES
```

For PowerPoint:

```text
SLIDES
LAYOUTS
TEXT BOXES
IMAGES
NOTES
SECTION ORDER
```

A visually acceptable output can still fail if the underlying object structure is wrong.

## 7. Knowledge-to-Artifact Grounding Fidelity

Declarative agents can use SharePoint, connectors, email, Teams chats, meeting data, and other knowledge sources depending on license and configuration.

### Definition

**Knowledge-to-Artifact Grounding Fidelity (KAGF)** measures whether the Office artifact correctly reflects the source material actually used by the agent.

The manifest should distinguish:

```text
SOURCE CONFIGURED
SOURCE RETRIEVED
SOURCE USED
SOURCE CITED
```

Those are not equivalent.

A presentation generated from a reusable agent may look polished while depending on stale, partial, or untraceable grounding.

## 8. OneDrive Artifact Identity Fidelity

Generated Office files are saved to OneDrive.

### Definition

**OneDrive Artifact Identity Fidelity (OAIF)** measures whether the generated file maintains a stable identity that links:

```text
CHAT EVENT
-> AGENT EXECUTION
-> FILE GENERATION
-> ONEDRIVE OBJECT
-> LATER EDITS / SHARES / DOWNLOADS
```

The artifact should remain traceable after the chat closes and after the file is moved, renamed, or edited.

## 9. Agent-Version-to-Artifact Reproducibility

A reusable agent can be refined after creation.

### Definition

**Agent-Version-to-Artifact Reproducibility (AVAR)** measures whether an artifact can be regenerated from preserved historical agent state.

A valid reproduction record needs more than:

```text
AGENT NAME = "Project Assistant"
```

It needs:

```text
INSTRUCTIONS
KNOWLEDGE
CAPABILITIES
MODEL / RESPONSE MODE
PROMPT
SOURCE REVISIONS
```

at the moment of generation.

## 10. Cross-Format Office Generation Fidelity

The same capability family can produce Word, Excel, and PowerPoint artifacts.

### Definition

**Cross-Format Office Generation Fidelity (CFOGF)** measures whether the same semantic request remains consistent across multiple native Office formats.

Controlled request:

```text
CREATE A PROJECT STATUS PACKAGE
```

Expected family:

```text
WORD
-> narrative report

EXCEL
-> structured status tracker

POWERPOINT
-> executive presentation
```

The benchmark should test whether names, dates, metrics, and decisions remain aligned across all generated artifacts.

## 11. New Failure Classes

### 11.1 Agent-State Orphaning

A generated file survives after the agent configuration changes, but the artifact does not preserve the historical agent version.

### 11.2 Capability-Origin Collapse

The file exists in OneDrive but no useful record shows that it was generated by an agent document capability rather than manually created.

### 11.3 Grounding-to-Artifact Opacity

The agent has many knowledge sources configured, but the final artifact does not reveal which materially influenced its content.

### 11.4 Cross-Format Fact Drift

A Word report, Excel workbook, and PowerPoint deck generated from the same context disagree on dates, values, or decisions.

### 11.5 Native-Structure Failure

The output looks correct visually but uses weak native Office structure, such as static text where formulas, charts, or semantic headings were expected.

### 11.6 OneDrive Lineage Detachment

The file is moved, renamed, downloaded, or reuploaded and becomes disconnected from the originating chat and agent run.

### 11.7 Agent-Edit Reproducibility Failure

The user edits the agent after generation and can no longer recreate the earlier artifact.

### 11.8 Hidden Knowledge-State Drift

The configured knowledge source changes without the agent configuration changing, causing different artifacts from apparently identical prompts.

### 11.9 Capability Availability Drift

A capability becomes enabled, disabled, renamed, or license-gated while the agent itself remains visible.

### 11.10 Manual-vs-Agent Authorship Confusion

A later editor cannot distinguish machine-generated initial structure from subsequent human edits.

### 11.11 Storage-Governance False Equivalence

Saving the file to OneDrive is treated as if that alone guarantees complete provenance, source attribution, or reproducibility.

### 11.12 Chat-to-Formal-Artifact Authority Inflation

Language produced casually in chat becomes more authoritative merely because it appears inside a Word document or presentation.

## 12. Deep Drift Benchmark: Agent-to-Office Triple Generation Test

### Controlled agent

Build one declarative agent containing:

```text
INSTRUCTION:
Create project-status artifacts from approved project sources only.

KNOWLEDGE:
Source A - project brief
Source B - meeting summary
Source C - approved metrics sheet

CAPABILITY:
Create documents, charts, and code
```

### Controlled generation sequence

Ask the same agent to create:

1. a Word project-status report;
2. an Excel status tracker;
3. a PowerPoint executive summary.

Then:

1. change one knowledge-source value;
2. regenerate all three;
3. edit one agent instruction;
4. regenerate again;
5. move one generated file in OneDrive;
6. rename another;
7. manually edit a third;
8. inspect whether origin and version lineage remain reconstructable.

### Measure

- semantic consistency across formats;
- correct Office object structure;
- grounding-source traceability;
- agent-version traceability;
- OneDrive object continuity;
- reproducibility after agent revision;
- human repair minutes.

## 13. New Metrics

### Agent-State Attribution Coverage

```text
ASAC =
generated artifacts attributable to exact historical agent state
/
all controlled generated artifacts
```

### Knowledge Use Attribution Coverage

```text
KUAC =
material artifact claims traceable to exact retrieved sources
/
all material grounded claims
```

### Cross-Format Fact Consistency

```text
CFFC =
controlled facts consistent across Word, Excel, and PowerPoint
/
all cross-format controlled facts
```

### Native Office Structure Accuracy

```text
NOSA =
required semantic Office objects created correctly
/
all controlled required objects
```

### OneDrive Lineage Retention

```text
ODLR =
generated files retaining traceable origin after move,
rename, edit, and later reuse
/
all controlled storage mutations
```

### Historical Reproducibility Rate

```text
HRR =
artifacts reproducible from preserved historical agent state
/
all controlled historical-generation cases
```

## 14. Why This Matters for Memory

This is not a direct personal-memory release.

But reusable agent configuration becomes a kind of **procedural memory**.

The agent retains:

```text
INSTRUCTIONS
KNOWLEDGE SOURCES
CAPABILITIES
STARTER PROMPTS
```

across conversations.

Deep Drift should distinguish that from personal saved memory.

A persistent procedure that repeatedly creates formal artifacts is not merely "context." It is part of the authoring system.

## 15. Why This Matters for Skills

This update is directly relevant to Skills.

Microsoft has effectively turned document generation into an agent capability:

```text
AGENT
+ DOCUMENT CAPABILITY
= REUSABLE OFFICE-GENERATION PROCEDURE
```

That makes capability version and configuration provenance mandatory.

A creator workflow can fail even if the prompt is perfect because the capability or agent state changed.

## 16. Why This Matters for Mini-App Builders

Agent Builder now behaves increasingly like a no-code mini-app builder.

A user can specify in natural language:

```text
WHAT THE AGENT DOES
WHAT IT KNOWS
WHAT CAPABILITIES IT HAS
```

and receive a reusable agent capable of producing persistent Office files.

The mini-app is therefore not just a chat persona.

It is:

```text
INSTRUCTIONS
+
KNOWLEDGE
+
TOOLS
+
FILE OUTPUTS
+
STORAGE
```

That is application architecture wearing conversational clothing.

## 17. Why This Matters for Chat-to-Document Export

This is a stronger model than classic export.

Classic:

```text
CHAT
-> EXPORT TEXT
```

Agent-native generation:

```text
CHAT
-> AGENT EXECUTION
-> NATIVE OFFICE OBJECT
-> ONEDRIVE
```

The file is not merely a serialized copy of the chat.

It is a newly generated structured artifact.

Deep Drift should therefore stop treating all "chat-to-document" workflows as one category.

## 18. Why This Matters for DOCX / PDF Generation

The release explicitly names Word, Excel, and PowerPoint generation, not PDF.

That distinction matters.

A likely creator chain becomes:

```text
AGENT
-> DOCX / XLSX / PPTX
-> USER OR OFFICE APP
-> PDF
```

Deep Drift should therefore treat PDF as a downstream transformation boundary and ask whether provenance, source references, structure, and agent-origin data survive that conversion.

The benchmark should not infer native PDF support where Microsoft has not documented it.

## 19. Why This Matters for Copy-Paste / Export Fixes

This architecture removes another human copy-paste seam.

Old:

```text
COPY CHAT
-> OPEN WORD
-> PASTE
-> FIX FORMATTING
-> SAVE
```

New:

```text
ASK AGENT
-> WORD FILE EXISTS IN ONEDRIVE
```

That is a meaningful workflow improvement.

But every removed handoff also hides another transformation stage.

Deep Drift should treat convenience as a demand for stronger machine-readable lineage, not an excuse for weaker provenance.

## 20. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing personal-memory launch surfaced in this pass. Reusable agent configuration functions as procedural memory across chats. |
| Skills | **Material new-to-log change:** document creation is now a configurable agent capability inside Microsoft 365 Copilot Agent Builder / Copilot Studio lite. |
| Mini-app builders | **Material new-to-log change:** natural-language Agent Builder can configure reusable agents with instructions, knowledge, and Office-generation capabilities. |
| Chat-to-document export | **Material new-to-log change:** an agent can generate Word, Excel, and PowerPoint artifacts directly from chat rather than only returning text. |
| DOCX / PDF generation | **Material new-to-log change:** native Word generation is confirmed; PDF remains a downstream conversion boundary rather than a confirmed direct output in this release. |
| Copy-paste/export fixes | **Material workflow replacement:** the agent-to-OneDrive path removes manual copy/paste from chat into Office. |
| Broader creator workflow | **Material trend:** reusable agents are becoming formal artifact producers with persistent storage, not merely conversational helpers. |

## 21. Cross-Platform Check

### Microsoft

The strongest new-to-log item is direct Office artifact creation by Copilot Studio lite agents, with Word, Excel, and PowerPoint files saved to OneDrive.

Microsoft's current Agent Builder documentation also confirms that agents can be built and refined through natural language, equipped with document-generation capabilities, and grounded in up to 20 knowledge sources subject to licensing.

### OpenAI

The latest public ChatGPT release notes checked on 30 August 2026 remain topped by the 28 August multiple-Google-account connection update and the 27 August changes already represented in the Deep Drift ledger. No newer category-displacing creator-artifact feature surfaced in this pass.

### Anthropic

No newer creator-workflow item displaced the memory migration and embedded-provenance changes already entered in the ledger.

### Notion

The 28 August Suggested Edits release remains the latest creator-governance change. Notion's Developer Platform and Workers continue to show the adjacent trend of agents becoming app/runtime infrastructure.

### Databricks

The latest material Genie creator-runtime updates remain the late-August Agent and Genie Code changes already logged.

## 22. Deep Drift Research Position

The weak description is:

> Copilot agents can make Office files.

The serious description is:

> A reusable conversational agent can now be defined through natural language, grounded in persistent organizational knowledge, equipped with a document-generation capability, invoked through chat, and allowed to emit native Office artifacts directly into governed cloud storage.

Therefore:

```text
CHAT
!=
FINAL ARTIFACT

AGENT NAME
!=
AGENT VERSION

SOURCE CONFIGURED
!=
SOURCE USED

ONEDRIVE SAVED
!=
PROVENANCE COMPLETE

DOCX CREATED
!=
REPRODUCIBLE AUTHORING STATE
```

The serious Deep Drift requirement is:

> **Every agent-generated Office artifact should preserve the historical agent configuration, instruction version, knowledge-source state, capability invocation, chat turn, native-file identity, OneDrive identity, and downstream conversion history necessary to reconstruct the artifact's authoring path.**

The industry is finally eliminating the ridiculous ritual of copying a chatbot answer into Word by hand. Excellent. Now it merely has to avoid replacing visible human friction with invisible machine amnesia.

## 23. Evidence Boundary

Platform facts in this report are grounded in Microsoft's first-party Microsoft 365 Copilot release notes and Agent Builder documentation, retrieved 30 August 2026.

Microsoft documents that Copilot Studio lite agents can generate Word documents, Excel spreadsheets, and PowerPoint decks through chat, save resulting files to OneDrive, and use the "Generate code, graphs, and documents" capability. Microsoft also documents that Agent Builder can configure agents through natural language, generate/refine instructions, add knowledge sources and capabilities, and support up to 20 knowledge sources depending on license.

ANOAGF, ACAF, CIF, COOF, KAGF, OAIF, AVAR, CFOGF, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Microsoft Learn, **Microsoft 365 Copilot release notes - August 25, 2026**.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

2. Microsoft Learn, **Build agents by using Agent Builder in Microsoft 365 Copilot**, last updated 19 August 2026.  
   https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/agent-builder-build-agents

3. OpenAI Help Center, **ChatGPT Release Notes**, checked 30 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

4. Notion, **What's New**, checked 30 August 2026.  
   https://www.notion.com/releases

5. Databricks, **AI/BI and Genie One release notes 2026**, checked 30 August 2026.  
   https://docs.databricks.com/aws/en/ai-bi/release-notes/2026

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**