# Deep Drift Research Update

## Agent-to-Durable Office Artifact Materialization Fidelity

**Research date:** 29 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. One materially distinct Microsoft creator-workflow transition was identified as new-to-log. No newer category-displacing release was found in this pass for consumer memory, general reusable Skills, standalone mini-app builders, direct copy/export fixes, or a new standalone PDF-generation feature.

## Executive Summary

Microsoft 365 Copilot now exposes a creator workflow in which agents built with **Copilot Studio lite** can generate **Word documents, Excel spreadsheets, and PowerPoint presentations directly through chat**, with the resulting Office files saved to **OneDrive**. Microsoft describes these as Office skills within the capability now named **"Create code, graphs, and documents"**.

In the same current release environment, **Edit with Copilot in Excel** can execute **Python** for advanced analysis, automation, simulation, visualization, cleaning, and data transformation, with results written directly into the workbook.

These changes should not be treated as two unrelated conveniences. Together they form a more consequential creator architecture:

```text
CHAT
-> AGENT
-> FILE GENERATION CAPABILITY
-> DURABLE OFFICE ARTIFACT
-> ONEDRIVE STORAGE
-> HUMAN OR AGENT REOPEN
-> EXECUTABLE TRANSFORMATION
-> NEW WORKBOOK / DOCUMENT STATE
```

For Deep Drift Research, this creates a new benchmark family:

**Agent-to-Durable Office Artifact Materialization Fidelity (ADOAMF)**

with companion constructs:

**Prompt-to-File Materialization Fidelity (PFMF)**  
**Artifact Persistence and Retrieval Fidelity (APRF)**  
**Executable Artifact Transformation Fidelity (EATF)**  
**Agent-Capability-to-Artifact Provenance Fidelity (ACAPF)**

The central research question is:

> When an LLM agent does not merely answer but creates a durable office file that can later be edited, analyzed, re-opened, shared, versioned, or executed upon, can the resulting artifact prove which agent capability created it, which source context governed it, which storage object became authoritative, and which later machine transformations changed its state?

## 1. What Changed

Microsoft's current Copilot release documentation states that agents built with Copilot Studio lite can generate Word documents, Excel spreadsheets, and PowerPoint presentations. The files are generated through chat and saved to OneDrive.

Microsoft positions this capability inside **Create code, graphs, and documents**, formerly associated with the Code Interpreter naming layer.

Separately, Microsoft documents that Edit with Copilot in Excel can now execute Python code for advanced statistics, simulations, visualization, automation, data cleaning, and transformation. The output is written directly into the workbook.

This is a decisive shift from AI-as-text-response to AI-as-artifact-runtime.

## 2. Why This Matters for Deep Drift

A chat answer is transient unless copied elsewhere. A Word, Excel, or PowerPoint file is different. It can acquire a file ID, file name, storage location, version history, permissions, sensitivity labels, collaborators, download copies, derivative versions, linked sources, and future AI edits.

Once the agent materializes a file, the file becomes a durable object in the user's work graph. The output is no longer merely semantic content. It is an institutional object.

```text
RESPONSE GENERATED
!= ARTIFACT MATERIALIZED

ARTIFACT MATERIALIZED
!= ARTIFACT PROVENANCE PRESERVED

FILE SAVED
!= FILE STATE FIXED

WORKBOOK CREATED
!= WORKBOOK LOGIC EXPLAINED
```

## 3. New Deep Drift Construct: Agent-to-Durable Office Artifact Materialization Fidelity

**Agent-to-Durable Office Artifact Materialization Fidelity (ADOAMF)** measures whether an AI-generated Office artifact preserves the intended content, structure, source context, agent configuration, capability identity, storage identity, version lineage, and subsequent machine transformations from the moment of creation through later use.

The minimum causal chain is:

```text
USER INTENT
-> AGENT
-> AGENT VERSION / CONFIGURATION
-> FILE-GENERATION CAPABILITY
-> GENERATED FILE
-> STORAGE OBJECT
-> VERSION HISTORY
-> SUBSEQUENT HUMAN / AI MODIFICATION
-> DERIVATIVE ARTIFACT
```

A trustworthy system should make this chain reconstructable.

## 4. Prompt-to-File Materialization Fidelity

**Prompt-to-File Materialization Fidelity (PFMF)** measures whether the durable Office file accurately represents the user's requested artifact across both semantic and structural dimensions.

For Word this includes heading hierarchy, paragraphs, tables, lists, citations, document metadata, and intended section order. For Excel it includes sheet names, columns, formulas, values, data types, chart bindings, and Python-derived outputs. For PowerPoint it includes slide sequence, layout, text, visual hierarchy, source attribution, and theme or brand rules.

```text
GOOD CHAT ANSWER
!= GOOD DOCX

CORRECT DATA
!= CORRECT XLSX

CORRECT OUTLINE
!= CORRECT PPTX
```

The file format becomes part of model quality.

## 5. Artifact Persistence and Retrieval Fidelity

Microsoft saves generated Office files into OneDrive. Persistence adds a second system of record.

**Artifact Persistence and Retrieval Fidelity (APRF)** measures whether the generated file is stored, versioned, retrieved, opened, shared, and subsequently referenced as the same logical artifact without lineage ambiguity.

A minimum persistence card should preserve:

```text
artifact_id
onedrive_object_id
file_type
file_name
created_at
created_by_agent
agent_id
agent_version
generation_prompt_id
source_context_ids
initial_hash
current_version
current_hash
permissions
label_state
derived_artifact_ids
```

## 6. Executable Artifact Transformation Fidelity

Excel introduces a more dangerous and therefore more interesting boundary. Microsoft's current release notes state that Edit with Copilot can execute Python against workbook data and write results directly into the workbook.

The workbook therefore becomes both a **data container** and an **execution target**.

**Executable Artifact Transformation Fidelity (EATF)** measures whether machine-executed transformations inside a durable artifact preserve code lineage, input state, output state, affected ranges, assumptions, dependencies, and reproducibility.

A minimum execution record should preserve:

```text
workbook_id
workbook_version_before
python_code_or_replayable_spec
input_ranges
input_hashes
execution_time
execution_environment
output_ranges
output_hashes
workbook_version_after
human_edits_after_execution
```

## 7. Agent-Capability-to-Artifact Provenance Fidelity

The file is not created by "AI" in the abstract. It is created through a particular agent with a particular capability set.

Microsoft's current documentation exposes capability toggles such as **create code, graphs, and documents** and **create images**.

**Agent-Capability-to-Artifact Provenance Fidelity (ACAPF)** measures whether the resulting artifact remains attributable to the exact agent configuration and capability path that produced it.

A useful record should include:

```text
agent_id
agent_version
capability_set
knowledge_sources
instructions_version
model_or_runtime
tool_invocations
generated_file_id
```

## 8. Core Deep Drift Distinctions

```text
FILE EXISTS
!= FILE PROVENANCE EXISTS

FILE SAVED
!= GENERATION STATE SAVED

WORKBOOK RESULT
!= TRANSFORMATION REPRODUCIBLE

AGENT GENERATED
!= AGENT VERSION IDENTIFIED

ONEDRIVE RETAINED
!= SOURCE CAUSALITY RETAINED

PYTHON EXECUTED
!= PYTHON LINEAGE PRESERVED
```

## 9. New Failure Classes

**Artifact Materialization Drift** - the chat correctly describes the intended artifact but the actual Office file differs materially in structure or content.

**Agent-Origin Loss** - the file persists in OneDrive but no longer exposes which agent or agent version created it.

**Prompt-to-File Linkage Loss** - the artifact survives while the exact generation instruction is unavailable.

**Source-Context Detachment** - grounded claims remain but their source objects are no longer traceable.

**Storage-Object Identity Drift** - downloaded, copied, renamed, moved, or re-uploaded versions become indistinguishable from the canonical generated object.

**Version-Lineage Collapse** - human and AI edits exist but material changes are not attributable.

**Python Transformation Opacity** - the workbook contains AI-generated Python results but the code or replayable transformation is unavailable.

**Input-State Loss** - the Python operation is preserved but the exact workbook state against which it ran is not.

**Output-Range Ambiguity** - the system cannot identify which cells, tables, charts, or named ranges were produced by execution.

**Formula / Python Boundary Confusion** - downstream users cannot distinguish formula-derived values from AI-Python-derived values.

**Capability-Version Drift** - old artifacts cannot be tied to the capability version present when they were created.

**Artifact-Type Equivalence False Positive** - Word, Excel, and PowerPoint outputs look aligned but encode materially different assumptions or omissions.

## 10. Deep Drift Benchmark: Agent-to-Office Artifact Reconstruction Test

Build one Copilot Studio lite agent with fixed instructions, a fixed knowledge set, and Create code / graphs / documents enabled. Ask it to produce a Word report, an Excel tracker, and a PowerPoint executive summary from the same project brief.

Record agent identity, configuration, capability set, prompt, source references, generated OneDrive objects, creation timestamps, and initial hashes.

Then use Edit with Copilot in the generated Excel file to clean a numeric field, calculate a simulation, generate a Python-based visualization, and write the results back into the workbook. Follow with one manual human edit, one second Copilot edit, a local download, and one derivative file.

Measure semantic fidelity, structural fidelity, source lineage, agent-version lineage, OneDrive object continuity, version attribution, Python replayability, input-state preservation, output-range attribution, human-vs-agent edit distinction, derivative-file lineage, and human repair minutes.

## 11. New Metrics

**Artifact Materialization Accuracy (AMA)** = material artifact requirements correctly represented / all material requested artifact requirements.

**Agent Origin Traceability (AOT)** = generated Office files attributable to exact agent + agent version + capability state / all generated Office files.

**Source-to-Artifact Lineage Coverage (SALC)** = material artifact claims linked to exact source objects / all material source-derived claims.

**Executable Transformation Replayability (ETR)** = AI-executed workbook transformations reproducible from preserved code/specification + input state / all tested transformations.

**Version Attribution Coverage (VAC)** = material file changes attributable to human, agent, or execution event / all material version changes.

**Durable Artifact Continuity Rate (DACR)** = generated artifacts whose canonical storage object and lineage remain reconstructable / all generated artifacts.

## 12. Why This Matters for Chat-to-Document Export

The phrase "chat-to-document" is now insufficient. There are at least three distinct architectures:

```text
A. CHAT -> COPY / PASTE -> DOCUMENT
B. CHAT -> EXPORT -> DOCUMENT
C. CHAT WITH AGENT -> NATIVE FILE GENERATION -> DURABLE STORAGE OBJECT
```

Architecture C is materially different. The system creates a first-class Office artifact rather than forcing the user to transfer text manually. Output quality can no longer be judged only from the chat transcript. The file itself must be inspected.

## 13. Why This Matters for DOCX / XLSX / PPTX Generation

Native file generation introduces format-specific failure surfaces. Deep Drift should treat file-generation fidelity as a separate benchmark layer from language-model answer quality.

## 14. Why This Matters for Mini-App Builders

Copilot Studio lite sits between chatbot configuration and lightweight application construction. Once an author can configure an agent with instructions, knowledge, tools, document-generation capability, image-generation capability, and sharing/distribution, the resulting object behaves like a small creator application.

```text
PROMPT TEMPLATE
-> REUSABLE AGENT
-> ARTIFACT FACTORY
```

## 15. Why This Matters for Skills

Microsoft's terminology is revealing: file creation is exposed as an Office skill/capability of the agent. That shifts file generation from a one-off product feature into a composable procedural capability.

A serious Skill provenance record should preserve skill name/version, agent ID/version, inputs, source objects, permissions, and output artifact IDs.

## 16. Why This Matters for Memory

No newer consumer-memory launch surfaced in this pass. But durable files introduce a memory-adjacent state different from model memory.

Deep Drift should distinguish model memory, conversation history, agent configuration, source knowledge, durable artifact state, artifact version history, and execution history.

A persistent Office file can outlive the conversation that created it. If provenance is not embedded or linked, the durable artifact can survive longer than the explanation of its own origin.

## 17. Broader Creator Workflow Trend

```text
LLM
-> RETRIEVE
-> REASON
-> CREATE NATIVE ARTIFACT
-> STORE
-> REOPEN
-> MUTATE
-> SHARE
-> DERIVE
```

The creator workflow is becoming a persistent state machine. The output is no longer merely a message. It is an object that enters normal organizational infrastructure.

## 18. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing consumer-memory release found in this pass. Durable artifact state remains an increasingly important memory-adjacent layer. |
| Skills | Material unlogged architecture: Office document generation is exposed as an agent capability / skill in Copilot Studio lite. |
| Mini-app builders | Material adjacent shift: a lightweight agent builder can be configured as a reusable Office artifact factory. |
| Chat-to-document export | Material unlogged shift: agent chat can create native Word, Excel, and PowerPoint files directly rather than relying on copy-paste or detached export. |
| DOCX / PDF generation | New native Office-file generation path found. No new standalone PDF-generation feature displaced prior logged PDF workflows. |
| Copy-paste / export fixes | No newer category-displacing copy/export fix found beyond previously logged platform changes. |
| Broader creator workflow | Material new-to-log change: generated files become durable OneDrive objects, and Excel artifacts can be transformed through Copilot-executed Python. |

## 19. Cross-Platform Check

**Microsoft:** strongest new-to-log creator item is the combination of Office document generation from Copilot Studio lite agents, persistent storage of those generated files in OneDrive, and Python execution through Edit with Copilot in Excel with results written back into the workbook.

**OpenAI:** no newer category-displacing update surfaced beyond already logged late-August changes involving Temporary Chat, connected accounts, Work automations, WebMCP/Sites, Skills/plugins, and Responses migration.

**Google:** no newer category-displacing update surfaced beyond already logged Ask Gemini in Chat and Sheets canvas changes.

**Anthropic:** no newer creator-workflow release displaced Claude changes already represented in the current ledger.

## 20. Deep Drift Research Position

The weak description is: **AI can make Office files.**

The serious description is: **a configurable agent can instantiate durable organizational artifacts, store them inside a governed work graph, and later execute machine transformations directly inside at least one of those artifact types.**

```text
CHAT OUTPUT
BECOMES
DURABLE STATE

DURABLE STATE
BECOMES
EXECUTION SURFACE

EXECUTION SURFACE
BECOMES
NEW ARTIFACT STATE
```

Therefore:

```text
GENERATED != TRACEABLE
SAVED != REPRODUCIBLE
EDITED != ATTRIBUTABLE
EXECUTED != AUDITABLE
```

> **Every agent-generated Office artifact should preserve the agent version, capability set, generation prompt, source context, canonical storage identity, initial version, subsequent human or AI edits, and any executable transformation that changed the artifact after creation.**

## 21. Evidence Boundary

Platform facts in this report are grounded in Microsoft's first-party Microsoft 365 Copilot release notes current through 25 August 2026 and Microsoft Copilot Studio documentation retrieved on 29 August 2026. The current Copilot Studio documentation explicitly lists a capability to create code, graphs, and Word/Excel/PowerPoint documents. Microsoft's current release notes state that Copilot Studio lite agents can generate Office documents through chat and save them to OneDrive, and that Edit with Copilot in Excel can execute Python with results written directly into the workbook.

ADOAMF, PFMF, APRF, EATF, ACAPF, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Microsoft Learn, **Release Notes for Microsoft 365 Copilot**, current through 25 August 2026.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

2. Microsoft Learn, **Extend Microsoft 365 Copilot with the Copilot chat harness / Copilot Studio agent capabilities**, retrieved 29 August 2026.  
   https://learn.microsoft.com/microsoft-copilot-studio/microsoft-365-copilot-extend-with-agents

3. OpenAI Help Center, **ChatGPT Release Notes**, checked 29 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

4. Google Workspace Updates, checked 29 August 2026.  
   https://workspaceupdates.googleblog.com/

5. Anthropic News, checked 29 August 2026.  
   https://www.anthropic.com/news

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
