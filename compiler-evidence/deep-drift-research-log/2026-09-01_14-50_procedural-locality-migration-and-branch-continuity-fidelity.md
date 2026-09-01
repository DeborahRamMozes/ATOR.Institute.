# Deep Drift Research Update — PLMBCF

## Procedural Locality Migration and Branch Continuity Fidelity

**Research timestamp:** 2026-09-01 14:50 WIB  
**Scope:** memory; skills; mini-app builders; chat-to-document/export; DOCX/PDF generation; copy-paste/export; creator workflow architecture.

## Executive finding

The strongest new signal in this scan is a change in creator-state mobility. Reusable AI procedure is moving across storage scopes while conversational work is increasingly shared as branchable snapshots.

Microsoft's August 2026 Copilot update says users can create personal Skills in Copilot in SharePoint and use them across SharePoint sites and OneDrive, with each user-owned Skill saved as a Markdown file in OneDrive. Earlier SharePoint Skills documentation describes a site-local model in which `SKILL.md` lives under `/Agent Assets/Skills/<skill-name>/SKILL.md`. Cowork likewise stores custom Skills in OneDrive and discovers them in later sessions. The procedural object is therefore no longer naturally bound to the document, chat, or site where it was first authored.

At the same time, Copilot Chat can share a full conversation or an individual response as a link. Recipients receive a read-only copy and can continue the conversation as their own. Microsoft consumer Copilot documentation makes the snapshot boundary explicit: the recipient sees the conversation as it existed when the link was generated; later additions to the original are not reflected in the shared copy.

Deep Drift should therefore stop treating "a Skill", "a chat", and "a workspace" as objects with one location and one continuity line. The emerging creator system is based on portable procedural state plus forkable conversational state.

## Core distinctions

```text
SKILL CONTENT != SKILL LOCATION
SKILL NAME != SKILL SCOPE
SITE-LOCAL PROCEDURE != ACCOUNT-LEVEL PROCEDURE
SHARED CHAT != LIVE MIRROR
SHARED SNAPSHOT != ORIGINAL CONTINUATION
RECIPIENT CONTINUATION != AUTHOR CONTINUATION
```

```text
PROCEDURE AUTHORING
      |
      v
SKILL.md
      |
      +--> site-local Agent Assets
      +--> user OneDrive
      +--> Cowork discovery
      +--> SharePoint / OneDrive reuse
      |
      v
MATERIAL ACTION / ARTIFACT

CONVERSATION
      |
      +--> original branch continues
      |
      +--> shared snapshot
                |
                +--> recipient branch
```

## Notable changes

### 1. Personal Skills move toward user-level storage and reuse

Microsoft's August 2026 Copilot update says personal Skills in Copilot in SharePoint can be reused across SharePoint sites and OneDrive. Each user-owned Skill is saved as a Markdown file in OneDrive. The feature entered Public Preview in August, with worldwide rollout stated for December.

This is a meaningful locality change compared with the documented site-local SharePoint Skills model. Deep Drift provenance must record not only Skill identity and content, but where the Skill was resolved from at execution time.

### 2. Cowork confirms OneDrive as procedural storage

Microsoft Learn documents Cowork custom Skills under `/Documents/Cowork/skills/` in OneDrive. Cowork can build a Skill from chat and save the resulting `SKILL.md`; users can also create Skills manually or upload `.md`, `.zip`, or `.skill` packages.

```text
ONEDRIVE != ONLY DOCUMENT STORAGE
ONEDRIVE = DOCUMENTS + PROCEDURAL INSTRUCTIONS + DISCOVERABLE AI CAPABILITY STATE
```

A backup containing final DOCX/PDF files but omitting procedural folders can preserve outputs while destroying part of the method.

### 3. Chat sharing is snapshotting, not synchronization

Microsoft's August Copilot update says users can share a full chat session or individual response. Recipients get a read-only view and can continue the chat like their own. Consumer Copilot support documentation states that shared links capture a copy at link-generation time and do not update when the original author continues the conversation.

```text
T0 ORIGINAL CHAT
      |
      +--> SHARE SNAPSHOT S0
      |       |
      |       +--> RECIPIENT BRANCH R1
      |
      +--> ORIGINAL BRANCH O1
```

After the fork, the branches may accumulate different prompts, memory effects, models, sources, tools, and artifacts.

### 4. File stores are becoming production surfaces

Microsoft's August update reports improved Copilot file capabilities in OneDrive, allowing users to move from stored files to summaries, dashboards, presentations, saving, and sharing directly from chat. The creator workflow is moving away from manual copy/paste transfer toward in-place transformation.

Deep Drift should capture source-selection events, transformation instructions, generated artifact identities, and storage destinations even when no visible copy/paste step occurs.

### 5. Notebook output expands beyond DOCX/PDF

Microsoft updated Copilot Notebooks in August 2026 with AI-generated infographics grounded in notebook references. The result can be copied or downloaded as an image and reused in documents, messages, newsletters, and presentations.

This reinforces a format-neutral provenance requirement: the same research corpus can now generate prose, presentations, dashboards, infographics, and other derivative artifacts.

## Category scan

| Area | Fresh status | Deep Drift meaning |
|---|---|---|
| Memory | No stronger first-party memory primitive found in this scan | Existing read/write/retention and cross-surface memory nodes remain current |
| Skills | Major new locality signal | Record storage scope, resolution path, permission context, and Skill digest |
| Mini-app builders | No stronger dedicated builder launch found | OneDrive dashboards and Notebook infographics reinforce workspace-as-artifact-factory |
| Chat-to-document | Workflow is becoming in-place rather than copy/export centric | Capture source-selection and transformation events |
| DOCX/PDF | No stronger format primitive found | Output file remains weaker evidence than runtime + procedural lineage |
| Copy-paste/export | Sharing increasingly uses snapshots and branches | Treat shared chat as a versioned fork, not a synchronized mirror |
| Creator workflow | Major | Procedure becomes portable while conversation becomes branchable |

## New failure classes

1. **Skill Locality Amnesia** — recording Skill content without the storage scope from which it was resolved.
2. **Scope Expansion Erasure** — treating a user-level Skill reused across sites as if it belonged to the current site.
3. **Procedural Backup Gap** — archiving creator files while omitting cloud-stored `SKILL.md` and companion files.
4. **Shared-Link Mirror Fallacy** — treating a shared chat URL as a live synchronized representation.
5. **Branch-Origin Loss** — preserving a recipient continuation without the snapshot identity from which it forked.
6. **Source-to-Artifact Compression** — preserving the final output without the file-selection and transformation trace.
7. **Format-Lineage Collapse** — excluding images, infographics, or dashboards from the document provenance graph.
8. **Cross-Surface Resolution Ambiguity** — failing to record whether procedure was loaded from site assets, OneDrive personal Skills, Cowork, or another package layer.

## Benchmark additions

- **Procedural Locality Fidelity (PLF):** exact storage location and scope of executed procedure.
- **Skill Resolution-Path Fidelity (SRPF):** runtime discovery and selection path for the Skill.
- **Procedural Backup Completeness (PBC):** preservation of procedural files and companion materials alongside final artifacts.
- **Snapshot Boundary Fidelity (SBF):** exact state represented by a shared link.
- **Conversation Branch Ancestry Fidelity (CBAF):** traceability from descendant chat to shared snapshot and original branch.
- **Post-Fork Divergence Fidelity (PFDF):** distinction of model/source/memory/tool/human changes after branching.
- **Source-to-Artifact Transition Fidelity (SATF):** reconstruction of direct file-store-to-artifact transformations.
- **Format-Neutral Artifact Lineage Fidelity (FNALF):** one lineage model spanning image, infographic, dashboard, presentation, DOCX, PDF, and other outputs.

## Canonical requirement

> Every material AI-assisted creator workflow should preserve a machine-readable mobility manifest linking each procedural object to its exact content digest, storage provider, storage path, ownership scope, permission context, discovery and resolution event, activation state, update history, and downstream artifact mutations; and linking each shared conversational object to the exact snapshot boundary, originating conversation and turn, share event, recipient branch ancestry, post-fork model/source/memory/tool changes, generated artifacts, and subsequent sharing events. A portable Skill must not be treated as site-local merely because it was invoked inside a site, and a shared chat must not be treated as a live mirror merely because both branches begin with identical text.

## Deep Drift implication

```text
PORTABLE PROCEDURE
+
FORKABLE CONVERSATION
+
CLOUD FILE GRAPH
+
MULTI-FORMAT ARTIFACT GENERATION
=
DISTRIBUTED CREATOR STATE
```

The creator's work is no longer contained by one thread, one document, or one site. Procedure can live in OneDrive, be discovered in Cowork, operate in SharePoint, transform stored files, and produce presentations or infographics. A conversation can be snapshotted and continued by another person while the original author keeps working on a different branch.

The unit Deep Drift must archive is therefore not "the chat" or "the file". It is the **state graph**.

## Sources

1. Microsoft, **What's New in Microsoft Copilot | August 2026**, published 31 August 2026. https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-copilot--august-2026/4551960
2. Microsoft Learn, **Extend Copilot in SharePoint with skills**. https://learn.microsoft.com/en-us/sharepoint/copilot-in-sharepoint-skills
3. Microsoft Learn, **Use Copilot Cowork**. https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/use-cowork
4. Microsoft Support, **Conversation history in Microsoft Copilot**. https://support.microsoft.com/en-us/Microsoft-Copilot/conversation-history-in-microsoft-copilot
5. Microsoft Support, **Create infographics in Copilot Notebooks**, last updated August 2026. https://support.microsoft.com/en-us/Microsoft-365-Copilot/infographics-copilot-notebooks

## Research status

**Freshness:** current as of 1 September 2026, 14:50 WIB.  
**Duplicate check:** compared against the existing Deep Drift research-log directory before insertion.  
**Node status:** new. It does not replace prior procedural-state, workspace-fork, export-boundary, or supply-chain nodes; it adds procedural storage locality plus conversational snapshot branching.
