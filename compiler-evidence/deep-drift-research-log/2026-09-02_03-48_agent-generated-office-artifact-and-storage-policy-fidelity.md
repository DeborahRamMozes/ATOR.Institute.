# Deep Drift Research Update — AGOSPF

## Agent-Generated Office Artifact and Storage-Policy Fidelity

**Research date:** 2 September 2026, 03:48 WIB  
**Primary fresh delta:** Microsoft 365 Copilot / Copilot Studio lite Office document generation, current release documentation through 2 September 2026.  
**Scope:** agent-generated Word/Excel/PowerPoint files, OneDrive persistence, Office skills, model eligibility, artifact governance, chat-to-document lineage, creator workflow provenance.

## Executive finding

Microsoft 365 Copilot now exposes a materially different document-generation path: Word, Excel, and PowerPoint can be produced directly from Copilot Chat through dedicated Office agents, and agents built with Copilot Studio lite can also generate Word documents, Excel workbooks, and PowerPoint decks through chat. Microsoft states that generated files are saved to OneDrive. The Copilot Studio lite release notes place these Office skills inside the broader "Generate code, graphs, and documents" capability, formerly known as Code Interpreter.

The important change is not simply that an LLM can make a `.docx`, `.xlsx`, or `.pptx`. That has existed elsewhere. The important change is that **document generation is now an agent capability whose output immediately enters an enterprise-managed storage and retention environment**.

```text
USER PROMPT
   |
   v
AGENT
   |
   +--> AGENT CONFIGURATION
   +--> OFFICE SKILL
   +--> MODEL / MODEL-ACCESS POLICY
   |
   v
WORD / EXCEL / POWERPOINT ARTIFACT
   |
   v
ONEDRIVE
   |
   +--> retention
   +--> access policy
   +--> sensitivity / organization controls
   +--> later editing
   +--> sharing
   +--> downstream export
```

Core distinctions:

```text
FILE GENERATION
!= CHAT RESPONSE

AGENT OUTPUT
!= EPHEMERAL OUTPUT

GENERATED FILE
!= LOCAL DOWNLOAD

CREATED BY AGENT
!= OWNED BY AGENT

SAVED TO ONEDRIVE
!= FULL GENERATIVE LINEAGE PRESERVED

OFFICE FILE
!= PROVENANCE-COMPLETE ARTIFACT
```

## New node

### Agent-Generated Office Artifact and Storage-Policy Fidelity (AGOSPF)

The key change is that an Office file is no longer necessarily created inside Word, Excel, or PowerPoint by a human working in the native application.

It can originate from Copilot Chat through Word, Excel, or PowerPoint agents, or from Copilot Studio lite agents equipped with Office skills. The file then becomes a persistent OneDrive object.

For Deep Drift, the artifact's **creation surface**, **generating agent**, **skill package**, **model-access state**, and **storage target** all matter.

## 1. Chat-to-document export is becoming direct artifact creation

The old mental model was:

```text
CHAT
  |
  v
TEXT RESPONSE
  |
  v
COPY / PASTE
  |
  v
WORD / EXCEL / POWERPOINT
```

The emerging Microsoft path is:

```text
CHAT
  |
  v
OFFICE AGENT / OFFICE SKILL
  |
  v
NATIVE OFFICE FILE
  |
  v
ONEDRIVE
```

The copy-paste boundary disappears. Manual transfer used to leave a visible seam between model output and authored document. Direct file creation removes that seam and replaces it with a hidden orchestration layer.

```text
NO COPY-PASTE
!= NO TRANSFORMATION LAYER
```

## 2. Storage is now part of generation semantics

Microsoft explicitly states that files produced by these agents are saved to OneDrive. The generation event and persistence event are therefore tightly coupled.

OneDrive adds another governance layer: account, tenant, folder, permissions, retention, sharing, sensitivity labels, version history, and later human edits.

Deep Drift therefore cannot treat "file generated" as the terminal event.

## 3. Agent identity becomes part of document authorship provenance

A generated Word file might come from the Word Agent, a custom Copilot Studio lite agent with Office skills, Copilot Chat using another workflow, a human using native Word Copilot, or a later human edit of any of the above.

```text
SAME FILE FORMAT
!= SAME AUTHORING ROUTE
```

A future investigator opening the file may see only the document and OneDrive metadata while the actual generating route has disappeared from view.

## 4. Model access can gate artifact-generation capability

Microsoft support documentation notes that if the Word, Excel, or PowerPoint agents are not visible, an administrator may need to enable access to Anthropic AI models.

```text
OFFICE AGENT UI
+
OFFICE SKILL
+
ADMIN MODEL ACCESS
=
FILE-GENERATION CAPABILITY
```

Therefore the same agent configuration may be executable one day and unavailable the next without the agent itself changing.

## 5. Storage governance can outlive the conversation

Once the generated file is saved to OneDrive, its lifecycle can continue independently from the originating conversation.

```text
SOURCE CONVERSATION
!= ARTIFACT LIFECYCLE

CHAT DELETION
!= FILE DELETION

FILE SURVIVAL
!= GENERATIVE HISTORY SURVIVAL
```

## 6. Why this matters for DOCX/PDF provenance

A `.docx` generated through an agent and later converted to PDF may look indistinguishable from a manually authored Word document converted to PDF. Their causal graphs are different.

```text
ROUTE A
HUMAN -> WORD -> DOCX -> PDF
```

```text
ROUTE B
PROMPT -> AGENT -> OFFICE SKILL -> MODEL -> DOCX -> ONEDRIVE -> HUMAN EDIT -> PDF
```

The PDF alone cannot distinguish them. Format-level provenance is no longer sufficient. The archive needs **generation-route provenance**.

## New failure classes

- **Chat-Response Equivalence Error** — treating a generated Office file as equivalent to text returned by chat.
- **Storage-Neutrality Fallacy** — assuming generation is complete before persistence and governance begin.
- **Agent-Route Erasure** — preserving the file while losing which agent and Office skill created it.
- **Model-Gating Blindness** — failing to record that generation capability depended on administrator-enabled model access.
- **Native-Format Authorship Collapse** — assuming matching Office formats imply comparable authoring histories.
- **OneDrive-Origin Ambiguity** — treating OneDrive metadata as sufficient evidence of how the file was generated.
- **Conversation-to-Artifact Decoupling Loss** — failing to preserve where chat became a durable governed file.
- **PDF Lineage Flattening** — converting an agent-generated Office artifact to PDF and erasing the generating agent, Office skill, storage state, and intermediate edits from the visible object.

## Deep Drift benchmark additions

**Agent-to-Artifact Fidelity (AAF)**  
Can each generated Office file be traced to the exact agent that created it?

**Office-Skill Fidelity (OSF)**  
Can the specific Word, Excel, PowerPoint, or general document-generation skill be identified?

**Model-Gating Fidelity (MGF)**  
Can model-access and administrator policy state at generation time be reconstructed?

**Generation-to-Storage Fidelity (GSF)**  
Can the transition from agent generation to OneDrive persistence be represented as part of one causal chain?

**Native-Format Route Fidelity (NFRF)**  
Can identical Office file formats be distinguished by their authoring route?

**Conversation-to-Artifact Fidelity (CAF)**  
Can a durable OneDrive artifact be linked back to the originating chat and prompt?

**Artifact Governance Fidelity (AGF)**  
Can tenant, permissions, retention, sharing, labels, and version-history state be represented separately from file content?

**Office-to-PDF Lineage Fidelity (OPLF)**  
Can a later PDF be traced through the intermediate Office artifact, agent generation, OneDrive state, and subsequent edits?

## Canonical Deep Drift requirement

> Every material Office artifact generated through an AI agent should preserve a machine-readable generation-and-storage manifest linking the file to the exact originating conversation; user prompt; generating agent identity and configuration; Office skill or document-generation capability; model identity and administrator model-access state; source files and knowledge inputs; generation timestamp; native artifact type and version; OneDrive object identifier and storage location; tenant and account context; retention, sensitivity, permission, and sharing state; subsequent edits and version history; human review; downloads and moves; and all downstream conversions including PDF. A native `.docx`, `.xlsx`, or `.pptx` file must never be treated as evidence of a native human authoring route, and OneDrive persistence must never be treated as proof that the generative lineage has been preserved.

## Broader creator-workflow trend

```text
LLM
-> TEXT
-> HUMAN TRANSFER
-> DOCUMENT APP
-> FILE
```

is becoming:

```text
LLM / AGENT
-> DOCUMENT SKILL
-> NATIVE FILE
-> GOVERNED CLOUD STORAGE
-> EDIT / SHARE / RETAIN
-> DOWNSTREAM ARTIFACT
```

The important shift is the collapse of **generation, persistence, and governance** into one workflow.

The old copy-paste seam was inefficient but epistemically visible. The new agent pipeline is efficient precisely because it hides more of the handoff.

## Sources

1. Microsoft Learn. **Microsoft 365 Copilot release notes** — “Generate Office documents from agents in Copilot Studio lite” (Roadmap ID 506753), current page accessed 2 September 2026.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

2. Microsoft Support. **Get started with Word, Excel, and PowerPoint Agents in Microsoft 365 Copilot**, current documentation accessed 2 September 2026.  
   https://support.microsoft.com/en-us/office/365-copilot-app/get-started-with-word-excel-and-powerpoint-agents-in-microsoft-365-copilot

## Research status

**Node status:** New.  
**Duplicate check:** No existing Deep Drift research-log match was found for the specific combination of agent-mediated native Office generation, Office skills in Copilot Studio lite, OneDrive-coupled persistence, and administrator model-access gating.  
**Relationship to prior nodes:** Complements artifact-registry, document-export, memory-persistence, and procedural-capability nodes. AGOSPF specifically formalizes the transition from chat/agent execution into a native Office artifact that immediately becomes a governed cloud object.  
**Freshness:** Verified against Microsoft first-party documentation current on 2 September 2026.
