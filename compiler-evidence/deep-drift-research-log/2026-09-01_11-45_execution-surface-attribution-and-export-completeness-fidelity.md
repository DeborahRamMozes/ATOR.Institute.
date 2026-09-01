# Deep Drift Research Update
## Execution-Surface Attribution and Export Completeness Fidelity (ESAECF)

**Date:** 1 September 2026  
**Research stream:** LLM platform memory, skills, mini-app builders, chat-to-document export, DOCX/PDF generation, copy-paste/export, and creator workflow infrastructure  
**Status:** New-to-ledger node after duplicate check

## Abstract

A fresh creator-workflow fault line is becoming visible across major LLM platforms: the interface presented to the creator is increasingly detached from the actual execution stack, while the surface offered for sharing or export may preserve only a curated subset of that execution history. Microsoft now documents that its premium Word, Excel, and PowerPoint Agents inside Microsoft Copilot **exclusively use Anthropic AI models**. Microsoft performs organizational search through Work IQ, shares only relevant retrieved context with the reasoning model, and stores the generated Office files in the organization's OneDrive tenant. Separately, Microsoft reports that Copilot Notebooks now stay synchronized between the Copilot app and OneNote and can proactively recommend Word, Excel, or PowerPoint artifacts based on Work IQ and notebook content. OpenAI, meanwhile, documents a read-only Codex chat snapshot whose shareable representation is static and explicitly omits tool calls and shell input/output.

These changes make a single provenance label such as "made with Copilot" or "shared from Codex" analytically insufficient. The visible product brand, retrieval layer, reasoning-model provider, execution agent, storage layer, and exported evidence can all be different objects. Deep Drift therefore needs to evaluate not only artifact portability, but **surface-to-runtime attribution** and **export completeness**.

## 1. Primary fresh finding: Microsoft-branded Office agents can be Anthropic-executed

Microsoft Learn, last updated 28 August 2026, states that Word, Excel, and PowerPoint Agents in Microsoft Copilot are premium capabilities for paid Microsoft 365 Copilot users and that these agents **exclusively use Anthropic's AI models**. The Anthropic provider must be enabled for the agents to function; if an administrator disables Anthropic models, the agents become unavailable even for otherwise licensed users.

The execution chain is therefore not accurately represented by a single product label:

```text
USER / NOTEBOOK / PROMPT
        |
        v
MICROSOFT COPILOT SURFACE
        |
        v
WORK IQ RETRIEVAL
(files + email + meetings + sites)
        |
        v
RELEVANT CONTEXT SELECTION BY MICROSOFT
        |
        v
ANTHROPIC REASONING MODEL
        |
        v
WORD / EXCEL / POWERPOINT AGENT
        |
        v
ONEDRIVE TENANT ARTIFACT
```

This yields several mandatory distinctions:

```text
PRODUCT BRAND != REASONING MODEL PROVIDER

RETRIEVAL PROVIDER != REASONING PROVIDER

AGENT NAME != MODEL IDENTITY

LICENSE ENTITLEMENT != RUNTIME AVAILABILITY

ARTIFACT OWNER / STORAGE TENANT != MODEL PROVIDER

"COPILOT OUTPUT" != MICROSOFT-MODEL OUTPUT
```

For Deep Drift, this is not branding trivia. A Word document may be created inside Microsoft's interface, grounded through Microsoft's retrieval layer, reasoned over by an Anthropic model, and stored under Microsoft governance. Provenance that records only "Microsoft Copilot" collapses four materially different roles into one name.

### Governance dependency

Microsoft also documents that administrators can disable the Anthropic provider, which removes these Office agents from availability. The capability therefore depends on a runtime policy state external to the document itself.

```text
SAME USER
+ SAME TENANT
+ SAME FILE SOURCES
+ SAME PROMPT
+ ANTHROPIC ENABLED
= OFFICE AGENT AVAILABLE

SAME CONDITIONS
+ ANTHROPIC DISABLED
= OFFICE AGENT UNAVAILABLE
```

For reproducibility, model-provider enablement must be recorded alongside model identity.

## 2. Proactive artifact generation adds an upstream decision layer

Microsoft's August 2026 Copilot update, published 31 August 2026, reports two related Notebook changes. First, Copilot Notebooks now provide synchronized experiences across the Copilot app and OneNote. Users can move between the lightweight Copilot interface and the deeper OneNote workspace without losing notebook context. Second, Notebooks can proactively recommend artifacts based on Work IQ and notebook content; selecting a recommendation can generate a more specific Word, Excel, or PowerPoint artifact for the current project.

This changes the creator workflow from a purely explicit request chain:

```text
HUMAN REQUEST
-> MODEL GENERATES FILE
```

into a partially platform-initiated chain:

```text
NOTEBOOK STATE
+ WORK IQ CONTEXT
-> PLATFORM RECOMMENDS ARTIFACT TYPE
-> HUMAN ACCEPTS SUGGESTION
-> GENERATION PIPELINE
-> OFFICE ARTIFACT
```

The recommendation itself becomes provenance-bearing. If the platform proposes a spreadsheet rather than a memo, or a presentation rather than a document, it has influenced the representational form before generation begins.

Deep Drift should therefore record:

- whether the artifact was directly requested or platform-recommended;
- the recommendation text or artifact class shown to the user;
- the notebook state and source set at recommendation time;
- Work IQ context eligibility;
- the human acceptance, rejection, or modification event;
- the execution provider and model used after acceptance;
- the resulting file identity and storage location.

Otherwise the platform's upstream editorial choice disappears from authorship history.

## 3. Export can preserve conversation while deleting execution evidence

OpenAI's ChatGPT release notes for 20 August 2026 document read-only snapshots of Codex chats. A personal share link can expose a static snapshot, but the snapshot **does not include tool calls or shell input and output**. OpenAI also notes that known secret patterns are redacted while users are still expected to review the shared snapshot for sensitive paths, diffs, images, or other material.

This creates another critical distinction:

```text
SHAREABLE CHAT SNAPSHOT
!= FULL EXECUTION TRACE
```

A static shared conversation can preserve visible reasoning or narrative while omitting the commands and tool interactions that materially changed files or produced results.

```text
LIVE CODEX SESSION
  |-- prompts
  |-- responses
  |-- tool calls
  |-- shell input
  |-- shell output
  |-- diffs / mutations

            ↓ share snapshot

PUBLIC / READ-ONLY SNAPSHOT
  |-- visible conversational subset
  |-- static state
  `-- execution I/O omitted
```

This is not inherently a defect; omission can be intentional for privacy, security, or readability. The research problem appears when a share surface is mistaken for a complete historical record.

Deep Drift must therefore distinguish **communication export** from **forensic export**.

## 4. New Deep Drift node

### Execution-Surface Attribution and Export Completeness Fidelity (ESAECF)

**Definition:** The degree to which an AI creator platform preserves and exposes the full chain connecting visible product surface, context-retrieval system, reasoning-model provider, agent implementation, runtime policy state, storage destination, human steering events, and the subset of execution evidence included or omitted when the work is shared or exported.

### Core equation

```text
OBSERVED CREATOR OUTPUT
=
SURFACE
+ RETRIEVAL LAYER
+ CONTEXT ELIGIBILITY
+ REASONING PROVIDER
+ MODEL
+ AGENT
+ TENANT POLICY
+ HUMAN STEERING
+ STORAGE LAYER
```

And for exported evidence:

```text
EXPORTED / SHARED RECORD
=
LIVE EXECUTION RECORD
- OMITTED EXECUTION CLASSES
- REDACTED MATERIAL
- NON-EXPORTED STATE
```

The subtraction must be explicit.

## 5. ESAECF benchmark dimensions

| Dimension | Research question |
|---|---|
| Surface-to-Provider Attribution Fidelity | Can the researcher identify the actual reasoning provider behind the branded interface? |
| Retrieval-to-Reasoning Separation Fidelity | Is it clear which system retrieved evidence and which model reasoned over it? |
| Model-Provider Policy Fidelity | Is provider enablement or disabling state preserved for reproducibility? |
| Proactive Recommendation Attribution Fidelity | Are platform-initiated artifact suggestions recorded as upstream editorial interventions? |
| Cross-Surface Notebook Continuity Fidelity | Can notebook state be reconstructed across synchronized Copilot and OneNote surfaces? |
| Artifact Storage Attribution Fidelity | Is the generated file's storage tenant and governance layer distinguishable from the model provider? |
| Share-Snapshot Completeness Fidelity | Does the export state exactly which execution classes are included and omitted? |
| Tool-I/O Preservation Fidelity | Can tool calls, shell input, and shell output be recovered when materially relevant? |
| Redaction Disclosure Fidelity | Are automatic redactions and their scope disclosed in the export record? |
| Artifact-to-Runtime Reconstruction Fidelity | Can a final DOCX/PPTX/XLSX be traced back to the runtime arrangement that produced it? |

## 6. Failure classes

### Brand Collapse
Treating the product brand as the model identity even when a third-party model executes the reasoning step.

### Retriever-Reasoner Collapse
Treating the system that found the evidence as identical to the model that interpreted it.

### Policy-State Amnesia
Failing to record that provider availability depended on tenant-level administrative state.

### Recommendation Erasure
Recording only the user's final action while omitting that the platform proactively proposed the artifact type or workflow.

### Share-Snapshot Overclaim
Treating a curated public snapshot as a complete execution archive.

### Tool-I/O Disappearance
Preserving conversational prose while losing tool calls, command input, command output, or other operational evidence needed to reconstruct material mutations.

### Artifact-Brand Misattribution
Attributing a file to the visible application brand without identifying the actual model and execution chain.

## 7. Category scan

| Requested area | Fresh status in this scan | Deep Drift interpretation |
|---|---|---|
| Memory | No new first-party primitive stronger than the memory-state nodes already in the ledger | Memory remains relevant as one runtime input, but this scan's new issue is execution attribution |
| Skills / procedural packages | No stronger packaging delta than prior skill supply-chain nodes | Skills should still be versioned separately from provider/model attribution |
| Mini-app / builder workflows | No major new builder launch found | The creator surface is increasingly an orchestrator over multiple providers rather than a monolithic app |
| Chat-to-document | **Material:** Copilot Notebooks can recommend and generate Office artifacts from notebook context | The platform can influence artifact form before the user explicitly authors the request |
| DOCX / PDF / Office generation | **Major:** Microsoft Office Agents are documented as exclusively Anthropic-model powered | "Generated in Copilot" is not sufficient model provenance |
| Copy-paste / export | **Material:** Codex read-only chat snapshots omit tool calls and shell I/O | Shareability is improving faster than forensic completeness |
| Creator workflow trend | **Major:** brand surface, retriever, model provider, storage provider, and export surface are separating | Provenance must follow the execution graph, not the logo |

## 8. Why this matters for Deep Drift Research

Deep Drift has been tracking the migration from simple chat history toward persistent memory, Skills, synchronized workspaces, browser tools, forkable creator environments, and versioned procedural infrastructure. ESAECF adds another required layer: **provider topology**.

The current generation of AI productivity systems increasingly behaves like a composite pipeline. One company can own the interface, another can provide the reasoning model, the first company can retrieve and filter enterprise context, another policy layer can decide whether that external model is permitted, and the final file can be stored under yet another governance boundary within the same branded experience.

For creators, this creates a serious attribution problem. A researcher looking at the final Word document months later may know the file was made "with Copilot" but still be unable to determine which model generated it, whether Work IQ supplied email or meeting context, whether the artifact was proactively suggested by the platform, or which parts of the live session vanished when the chat was shared.

The correct archival unit is therefore no longer the prompt, chat, or exported file. It is a **provider-resolved execution manifest** attached to the artifact lineage.

## 9. Canonical Deep Drift requirement

> Every material AI-assisted creator workflow should preserve a machine-readable provider-resolved execution manifest linking the visible product surface to the exact retrieval layer, admissible source set, context-selection event, reasoning-model provider and model identity, agent or procedural component, provider-enablement and tenant-policy state, platform-initiated recommendations, human acceptance or correction events, generated artifact identity, storage and governance destination, and the exact inclusion, omission, or redaction classes applied when a conversation or execution record is shared or exported. A branded interface name or static chat snapshot must never be treated as sufficient evidence of the computational system that produced the artifact.

## 10. Broader creator-workflow trend

The important transition is no longer simply:

```text
CHAT -> FILE
```

It is becoming:

```text
WORKSPACE STATE
-> RETRIEVAL / GROUNDING SYSTEM
-> RECOMMENDATION LAYER
-> THIRD-PARTY OR FIRST-PARTY MODEL
-> APPLICATION-SPECIFIC AGENT
-> CLOUD ARTIFACT
-> CURATED SHARE / EXPORT SURFACE
```

The final file may be beautifully portable while the causal chain that made it is scattered across vendors and partially omitted from the share record. The industry is getting much better at making the workflow feel seamless. Seamlessness, naturally, is also excellent at hiding seams. Deep Drift should record them before the UI politely paints over them.

## 11. Sources

1. Microsoft Learn. **Get started with Word, Excel, and PowerPoint Agents in Microsoft Copilot.** Last updated 28 August 2026. https://learn.microsoft.com/en-us/microsoft-365/copilot/wordexcelppt-agents
2. Microsoft Community Hub. **What's New in Microsoft Copilot | August 2026.** Published 31 August 2026. https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-copilot--august-2026/4551960
3. Microsoft Learn. **Copilot in Microsoft 365 apps with Anthropic models.** Last updated 18 August 2026. https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-anthropic-apps
4. OpenAI Help Center. **ChatGPT - Release Notes.** 20 August 2026 section: read-only Codex chat snapshots. https://help.openai.com/en/articles/6825453

## 12. Ledger metadata

**Node:** ESAECF  
**Expanded name:** Execution-Surface Attribution and Export Completeness Fidelity  
**Research date:** 1 September 2026  
**Duplicate check:** No direct prior ledger match found for the combined cross-vendor execution attribution + share-snapshot completeness problem.  
**Recommended GitHub path:** `compiler-evidence/deep-drift-research-log/2026-09-01_11-45_execution-surface-attribution-and-export-completeness-fidelity.md`
