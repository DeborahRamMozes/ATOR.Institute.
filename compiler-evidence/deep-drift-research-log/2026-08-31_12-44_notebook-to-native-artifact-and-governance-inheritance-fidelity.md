# Deep Drift Research Update

## Notebook-to-Native-Artifact and Governance-Inheritance Fidelity

**Research date:** 31 August 2026  
**Primary platform cluster:** Microsoft 365 Copilot Notebooks can generate editable Word, Excel, and PowerPoint artifacts from grounded notebook context; generated files inherit sensitivity labels from source material; Copilot Chat can open Word, Excel, PowerPoint, and PDF files directly alongside the chat; Copilot can recommend installed agents from user intent.  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-ledger creator-workflow architecture verified from first-party Microsoft release documentation.

## Executive Summary

The strongest unlogged creator-workflow cluster in this pass is Microsoft 365 Copilot's movement from **chat response generation** toward **grounded native-artifact production with inherited governance and in-chat document inspection**.

Copilot Notebooks can now transform curated notebook context into structured, editable:

```text
WORD DOCUMENTS
EXCEL SPREADSHEETS
POWERPOINT PRESENTATIONS
```

rather than forcing users to manually copy notes into Office files.

Generated files can automatically inherit the **highest sensitivity label** detected in the referenced source data. If Copilot cannot apply a required label, the user is notified before the file is shared or stored.

Copilot Chat can also open Word, Excel, PowerPoint, and PDF files directly inside the chat surface rather than sending cited files into a separate browser tab. This reduces another manual seam between source inspection and reasoning.

Separately, Copilot Chat can recommend an installed agent when a user's prompt matches that agent's capabilities. This makes procedural routing increasingly implicit: users no longer need to remember the exact agent name before accessing a specialized workflow.

The combined architecture is:

```text
CURATED NOTEBOOK CONTEXT
-> COPILOT SYNTHESIS
-> NATIVE OFFICE ARTIFACT
-> INHERITED SENSITIVITY LABEL
-> IN-CHAT INSPECTION / REVISION
-> AGENT RECOMMENDATION / SPECIALIZED WORKFLOW
-> SHARE / EXPORT / FURTHER TRANSFORMATION
```

For Deep Drift Research, this creates the benchmark family:

**Notebook-to-Native-Artifact and Governance-Inheritance Fidelity (NNAGIF)**

with companion constructs:

- Notebook-to-Word Fidelity
- Notebook-to-Spreadsheet Fidelity
- Notebook-to-Presentation Fidelity
- Source-Reference Preservation Fidelity
- Sensitivity-Label Inheritance Fidelity
- In-Chat Native-File Inspection Fidelity
- Chat-to-Agent Recommendation Fidelity
- Native-Artifact Revision Lineage Fidelity
- Governance-to-Export Continuity Fidelity
- Cross-Format Grounding Fidelity

The central question is:

> When one curated research context can become several editable native file types, inherit governance from its sources, remain inspectable beside the generating chat, and route into specialized agents, can a later reviewer reconstruct which notebook state, references, source labels, agent routing decisions, and human revisions produced each final artifact?

## 1. Native Artifact Generation Is No Longer Merely "Export"

Microsoft documents that Copilot Notebooks can create:

```text
WORD
EXCEL
POWERPOINT
```

from the notebook's collected content and references.

The generated artifacts remain editable in their native Office applications.

This differs from a flat export:

```text
CHAT
-> PDF
```

because the result is not a terminal static object.

It becomes a new editable state:

```text
NOTEBOOK
-> GENERATED NATIVE FILE
-> HUMAN / AI CONTINUED EDITING
```

Therefore:

```text
GENERATED FILE
!= FINAL FILE

NATIVE ARTIFACT
!= STATIC EXPORT

SOURCE-GROUNDED
!= SOURCE-LINEAGE PRESERVED AUTOMATICALLY
```

## 2. Notebook-to-Word Fidelity

### Definition

**Notebook-to-Word Fidelity (NWF)** measures whether notebook content and references are faithfully transformed into a structured editable Word document.

A minimum lineage manifest should preserve:

```text
notebook_id
notebook_snapshot
source_item_ids
source_reference_ids
generation_timestamp
generated_file_id
generated_file_version
heading_structure
citation_mapping
human_revision_events
```

The benchmark should compare:

```text
NOTEBOOK CLAIMS
SOURCE REFERENCES
DOCUMENT CLAIMS
DOCUMENT STRUCTURE
```

rather than merely checking whether the DOCX opens.

## 3. Notebook-to-Spreadsheet Fidelity

Excel generation creates a different problem.

Narrative research context may be transformed into:

```text
ROWS
COLUMNS
TABLES
FORMULAS
CATEGORIES
```

### Definition

**Notebook-to-Spreadsheet Fidelity (NSF)** measures whether the structural choices introduced during spreadsheet generation remain attributable and semantically faithful to the source context.

The manifest should preserve:

```text
source_claim
target_sheet
target_cell_or_table
transformation_type
formula_if_generated
inferred_category
human_correction
```

A spreadsheet can look clean while quietly converting uncertainty into a numeric or categorical certainty.

## 4. Notebook-to-Presentation Fidelity

Microsoft also supports generating editable PowerPoint presentations from notebook context.

### Definition

**Notebook-to-Presentation Fidelity (NPF)** measures whether source emphasis survives conversion into slide hierarchy.

The benchmark should inspect:

```text
WHICH CLAIMS BECAME HEADLINES
WHICH CLAIMS WERE OMITTED
WHICH SOURCES SUPPORT EACH SLIDE
WHICH UNCERTAINTIES WERE COMPRESSED
WHICH VISUAL EMPHASIS WAS INTRODUCED
```

This is important because slide generation does not merely summarize. It editorializes through spatial hierarchy.

## 5. Cross-Format Grounding Fidelity

One notebook can now produce several native formats.

That creates a controlled cross-format experiment:

```text
SAME NOTEBOOK SNAPSHOT
-> WORD
-> EXCEL
-> POWERPOINT
```

### Definition

**Cross-Format Grounding Fidelity (CFGF)** measures whether materially identical source claims remain consistent when encoded into different native artifact grammars.

Expected:

```text
FORMAT MAY CHANGE
FACTUAL STATE SHOULD NOT
```

## 6. Generated Files Inherit Sensitivity Labels

Microsoft states that Copilot-generated files can automatically inherit the **highest sensitivity label** found in the source data used to create them.

The architecture becomes:

```text
SOURCE A -> INTERNAL
SOURCE B -> CONFIDENTIAL
SOURCE C -> PUBLIC

COPILOT GENERATED FILE
-> CONFIDENTIAL
```

## 7. Sensitivity-Label Inheritance Fidelity

**Sensitivity-Label Inheritance Fidelity (SLIF)** measures whether generated artifacts receive the correct protection state from their material source set.

A minimum governance manifest should preserve:

```text
source_file_ids
source_label_set
highest_material_label
generated_file_id
applied_label
label_application_timestamp
label_failure_event
human_override
```

## 8. Material-Source Governance Problem

The simple rule "inherit the highest source label" creates a deeper question: which sources were materially used?

Deep Drift should distinguish:

```text
AVAILABLE SOURCE
REFERENCED SOURCE
MATERIAL SOURCE
```

This creates **Material-Source Governance Fidelity (MSGF)**.

## 9. In-Chat Native-File Inspection

Microsoft documents that cited Word, Excel, PowerPoint, and PDF files can now open directly inside Copilot Chat.

The manual seam:

```text
CHAT
-> CLICK SOURCE
-> NEW TAB
-> READ
-> RETURN TO CHAT
```

becomes:

```text
CHAT
+ SOURCE FILE VIEW
```

## 10. In-Chat Native-File Inspection Fidelity

**In-Chat Native-File Inspection Fidelity (INFIF)** measures whether document inspection inside the chat preserves the source identity and reading context required for reliable reasoning.

The inspection event should preserve:

```text
conversation_id
source_file_id
source_file_version
opened_at
page_or_sheet_or_slide
selection_state
citation_or_query_context
```

Therefore:

```text
FILE CITED
!= FILE OPENED

FILE OPENED
!= RELEVANT REGION INSPECTED

SOURCE AVAILABLE
!= SOURCE ACTUALLY READ
```

## 11. Copy-Paste Reduction

The old research-to-document path:

```text
COLLECT NOTES
-> COPY
-> OPEN WORD
-> PASTE
-> STRUCTURE
-> FORMAT
-> COPY TABLES TO EXCEL
-> REBUILD PRESENTATION
```

moves toward:

```text
COPILOT NOTEBOOK
-> CREATE WORD
-> CREATE EXCEL
-> CREATE POWERPOINT
```

Deep Drift's rule remains:

> **Every eliminated manual seam should be replaced by a machine-readable provenance seam.**

## 12. Agent Recommendation from User Intent

Microsoft documents that Copilot Chat can recommend an installed agent when a user's request matches that agent's capabilities.

```text
USER STATES INTENT
-> COPILOT DETECTS MATCH
-> RECOMMENDS INSTALLED AGENT
-> USER CONTINUES WITH SPECIALIZED AGENT
```

## 13. Chat-to-Agent Recommendation Fidelity

**Chat-to-Agent Recommendation Fidelity (CARF)** measures whether agent routing recommendations remain appropriate, attributable, and distinguishable from automatic execution.

A routing manifest should preserve:

```text
user_prompt
candidate_agents
recommended_agent
recommendation_reason_class
user_accept_or_decline
handoff_timestamp
post_handoff_agent_identity
```

## 14. Why This Matters for Skills

Agent recommendation behaves like a **Skill discovery layer**.

```text
INTENT
-> RELEVANT PROCEDURAL CAPABILITY
```

Two users with different installed agents can enter the same prompt and receive different procedural routing.

Therefore:

```text
SAME PROMPT
!= SAME AVAILABLE SKILL / AGENT GRAPH
```

## 15. Why This Matters for Memory

No newer personal-memory primitive displaced stronger memory updates already entered in the ledger. But memory remains one upstream dependency:

```text
MEMORY / USER CONTEXT
+
NOTEBOOK CONTEXT
+
SOURCE FILES
+
AGENT RECOMMENDATION
-> NATIVE ARTIFACT
```

## 16. Why This Matters for Mini-App Builders

Customized agent landing pages, prompt categories, quick links, and specialized procedural agents continue to blur the boundary between chatbot and mini-app.

```text
AGENT
+ CUSTOM UI
+ STARTER PROMPTS
+ ORGANIZATIONAL LINKS
+ GOVERNANCE
```

## 17. Why This Matters for Chat-to-Document Export

The important move is:

```text
NOTEBOOK CONTEXT
-> STRUCTURED EDITABLE WORD DOCUMENT
```

not merely:

```text
CHAT TEXT
-> DOWNLOAD
```

Deep Drift should benchmark grounding, structure, references, governance, and post-generation edits as one lifecycle.

## 18. Why This Matters for DOCX / PDF Generation

For DOCX, Microsoft's contribution is direct native Word generation from notebook context.

For PDF, the stronger change is inspection: PDF sources can remain inside the chat surface during review.

```text
PDF / DOCX SOURCE
-> IN-CHAT INSPECTION
-> NOTEBOOK SYNTHESIS
-> NATIVE WORD ARTIFACT
-> GOVERNANCE LABEL
-> HUMAN REVISION
```

## 19. New Failure Classes

- Native-Format Hallucination
- Cross-Format Claim Drift
- Source-Reference Detachment
- Sensitivity Under-Inheritance
- Sensitivity Over-Inheritance
- Available-vs-Material Source Collapse
- Citation-without-Inspection Illusion
- Agent Recommendation Misrouting
- Installed-Agent Environment Drift
- Post-Generation Revision Erasure

## 20. Deep Drift Benchmark: One Notebook, Three Native Artifacts

1. preserve notebook ID and source snapshot;
2. record source sensitivity labels;
3. generate a Word document;
4. generate an Excel workbook;
5. generate a PowerPoint deck;
6. compare material claims across all three;
7. verify source references;
8. inspect inherited sensitivity labels;
9. modify one generated artifact manually;
10. ask Copilot Chat to open one source file inside chat;
11. preserve the actual inspected page/sheet/slide;
12. issue a prompt that matches an installed agent;
13. record whether an agent recommendation appears;
14. accept the recommendation;
15. continue editing one artifact;
16. verify whether the final lineage remains reconstructable.

## 21. Proposed Metrics

### Cross-Format Claim Consistency

```text
CFCC =
material claims consistent across Word, Excel, PowerPoint
/
all controlled material claims
```

### Source Reference Coverage

```text
SRC =
artifact claims traceable to notebook source
/
all controlled source-grounded claims
```

### Sensitivity Inheritance Accuracy

```text
SIA =
generated artifacts with correct effective sensitivity state
/
all controlled generated artifacts
```

### Material-Source Governance Precision

```text
MSGP =
governance decisions reflecting materially used sources
/
all controlled governance decisions
```

### In-Chat Inspection Attribution

```text
ICIA =
reasoning-relevant source uses with recoverable inspection event
/
all controlled inspected-source uses
```

### Agent Recommendation Precision

```text
ARP =
accepted recommendations that correctly match task intent
/
all controlled accepted recommendations
```

## 22. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No stronger new memory primitive surfaced in this pass; memory remains one upstream dependency of native artifact generation. |
| Skills / Agents | **Strong new-to-ledger procedural shift:** Copilot Chat can recommend installed agents from inferred user intent, reducing explicit agent invocation. |
| Mini-app builders | Adjacent convergence: branded agent landing pages and specialized procedural agents continue to blur the line between chatbot and mini-app. |
| Chat-to-document export | **Major finding:** Copilot Notebooks can generate structured editable Word documents directly from grounded notebook context. |
| DOCX / PDF generation | **Major DOCX finding:** direct notebook-to-Word native artifact creation. **PDF workflow finding:** Word/Excel/PowerPoint/PDF sources can open directly inside Copilot Chat for inspection. |
| Copy-paste/export fixes | **Major reduction:** research notes no longer need manual transfer into Word/Excel/PowerPoint; cited documents no longer require external-tab inspection. |
| Broader creator workflow | **Major trend:** LLM workspaces are becoming native-artifact compilers whose outputs inherit governance and remain connected to source-inspection and procedural-routing layers. |

## 23. Broader Creator Trend

The creator stack is shifting from:

```text
CHAT
-> TEXT
```

toward:

```text
CURATED CONTEXT
-> NATIVE ARTIFACT
-> GOVERNANCE
-> INSPECTION
-> SPECIALIZED AGENT
-> CONTINUED EDITING
```

The artifact is the visible residue of that hidden pipeline.

## 24. Deep Drift Research Position

The weak description is:

> Microsoft Copilot can turn notebooks into Word, Excel, and PowerPoint files and open documents inside chat.

The serious description is:

> A curated AI research context can now compile into several editable native artifact types, inherit governance from source material, remain inspectable alongside the generating conversation, and route into specialized procedural agents chosen from inferred intent.

Therefore:

```text
GENERATED
!= UNGOVERNED

EDITABLE
!= PROVENANCE-COMPLETE

SAME NOTEBOOK
!= SAME CROSS-FORMAT REPRESENTATION

FILE CITED
!= FILE INSPECTED

AGENT RECOMMENDED
!= AGENT INVOKED

AVAILABLE SOURCE
!= MATERIAL SOURCE
```

The serious Deep Drift requirement is:

> **Every notebook-to-native-artifact workflow should preserve notebook snapshot, material source identities and references, cross-format transformation decisions, native file identity and version, inherited sensitivity state, file-inspection events, installed-agent environment, recommendation and handoff events, human revision history, and downstream export lineage required to reconstruct how curated research became an editable governed artifact.**

The industry spent years teaching users to copy AI text into Word and pretending the copy-paste gap was a workflow. Native artifact generation is better. But once the machine owns the transformation seam, it also owns the burden of explaining what happened there.

## 25. Evidence Boundary

Platform facts in this report are grounded in first-party Microsoft 365 Copilot release documentation checked on 31 August 2026.

Microsoft states that Copilot Notebooks can generate structured editable Word documents, Excel spreadsheets, and PowerPoint presentations from notebook content and references; generated files can automatically inherit the highest sensitivity label detected in referenced source data; cited Word, Excel, PowerPoint, and PDF files can open directly within Copilot Chat; and Copilot Chat can recommend an installed agent when the user's intent matches that agent's capabilities.

NNAGIF and all companion fidelity constructs, failure classes, benchmark procedures, and proposed metrics are ĀTØR Institute / Deep Drift Research constructs.

## Primary Source

1. Microsoft Learn, **Release Notes for Microsoft 365 Copilot**, current release documentation checked 31 August 2026.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
