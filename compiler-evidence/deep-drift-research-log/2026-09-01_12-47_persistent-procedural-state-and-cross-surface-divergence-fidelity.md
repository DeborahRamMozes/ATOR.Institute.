# Deep Drift Research Update — Persistent Procedural State and Cross-Surface Divergence Fidelity (PPSCSDF)

**Research timestamp:** 1 September 2026, 12:47 Asia/Jakarta  
**Scope:** memory, Skills, mini-app builders, chat-to-document export, DOCX/PDF generation, copy-paste/export friction, and creator-workflow architecture.

## Executive finding

The strongest fresh delta is not a new memory button or another generic file export. It is the movement of reusable AI procedure into ordinary creator storage and authoring surfaces. Microsoft now lets PowerPoint users create, upload, edit, disable, and delete custom Skills. Those Skills use the industry-standard `SKILL.md` format and are automatically stored in a dedicated Skills folder in OneDrive. Microsoft 365 administrators can also package and deploy organization Skills to defined users and groups. In parallel, PowerPoint templates can carry persistent natural-language steering inside slide notes, while strict brand mode can limit Copilot to approved layouts. Procedure is therefore becoming a persistent, portable-ish object that can live beside ordinary files rather than only inside a model prompt or hidden assistant configuration.

Google shows the complementary problem. NotebookLM notebooks now surface inside Gemini, with notebook names, sources, and custom instructions synchronized across applications; opted-in Gemini chats can become read-only notebook context. Yet grounding differs by surface: NotebookLM is restricted to notebook sources, whereas Gemini can also use web search and other tools. Deleting a Gemini chat through Gemini activity controls does not necessarily delete its NotebookLM copy, and deleting a notebook does not delete the original Gemini conversation. A synchronized workspace is therefore not a single synchronized state.

Together these changes justify a new Deep Drift node: **PPSCSDF**. The research object is no longer merely “the model plus prompt.” It is a distributed procedural state whose effective behavior depends on storage location, surface, activation state, organization policy, inherited template instructions, source graph, grounding rules, and deletion semantics.

## 1. Fresh notable changes

### 1.1 PowerPoint custom Skills become OneDrive-backed procedural objects

Microsoft’s August 2026 Copilot update says users can now upload, create, edit, and delete custom Skills in PowerPoint. Microsoft Support specifies that personal Skills are stored automatically in a dedicated OneDrive Skills folder, can be invoked explicitly with an `@` mention, and can be toggled on or off for default use. A recognized Skill is a folder containing `SKILL.md` with required frontmatter (`name`, `description`) plus free-form procedural instructions. Users can add Skills by uploading files, pasting the Skill through the Copilot pane, or placing the Skill folder directly into OneDrive.

This changes provenance. A Skill is no longer only transient prompt context. It is a user-managed procedural artifact with a filesystem identity, storage account, activation state, and mutation history. The same PowerPoint deck can therefore yield different output because the OneDrive Skills folder changed even when the visible deck and prompt did not.

### 1.2 Organization Skills add a deployment and policy layer

Microsoft 365 administrators can upload packaged Skills and deploy them to an entire organization or selected users and groups. That creates two distinct procedural layers: personal Skills controlled by the creator and organization Skills controlled by administrators. Reproducibility must therefore record not only the Skill’s text but who supplied it, where it was stored, who was entitled to receive it, and whether it was active at execution time.

### 1.3 PowerPoint templates now contain machine-readable-ish steering in human notes

PowerPoint Brand Kit now supports note steering. Plain-language instructions embedded in slide speaker notes can tell Copilot how to treat each slide whenever it generates a presentation from that template. Strict brand adherence can simultaneously prevent Copilot from inventing layouts outside approved masters.

That means an ordinary presentation template can contain persistent AI procedure. Speaker notes stop being merely commentary for human presenters and become an execution-control surface. Template inheritance is now partly procedural inheritance.

### 1.4 Gemini/NotebookLM synchronization exposes cross-surface context divergence

NotebookLM notebooks can appear in Gemini, and changes to notebook names, sources, and custom instructions can synchronize across both products. Users can also opt to include Gemini notebook chats as shared context, where those conversations appear as read-only sources in NotebookLM.

However, the two surfaces do not share identical epistemic behavior. NotebookLM grounds responses exclusively in notebook sources, while Gemini may combine those same notebook sources with web search and other tools. Retention and deletion also diverge: deleting Gemini Apps activity does not automatically delete the NotebookLM-held chat context, while deleting a notebook does not erase the original Gemini chat from the Gemini conversation list.

So:

```text
SYNCHRONIZED NOTEBOOK != IDENTICAL EXECUTION CONTEXT
SHARED CUSTOM INSTRUCTIONS != SHARED GROUNDING POLICY
CHAT COPIED AS CONTEXT != CHAT CONTROLLED BY ONE RETENTION CLOCK
DELETE IN SURFACE A != DELETE IN SURFACE B
```

### 1.5 Sheets Canvas confirms the mini-app builder trend

Google’s Sheets Canvas, announced Aug. 13, turns spreadsheet data into interactive mini-app-like interfaces from a natural-language request. Google describes examples such as dashboards, study trackers, and seating charts that remain synchronized with the underlying spreadsheet.

The important architectural move is not “AI makes prettier sheets.” The spreadsheet is becoming a data-backed application substrate. Creator artifacts are shifting from static files toward executable views whose behavior depends on the underlying data model and generated interface logic.

### 1.6 DOCX/PDF generation remains mature; lineage is now the harder problem

Gemini already supports direct generation of PDF, DOCX, XLSX, CSV, Markdown, RTF, TXT, LaTeX, Google Docs, Sheets, and Slides from chat. The current scan found no stronger first-party file-format launch that displaced this earlier capability. The important update is upstream: the procedural state capable of producing those files is becoming increasingly persistent and distributed across Skills, templates, notebooks, storage, and surface-specific context rules.

A final DOCX can remain perfectly portable while the procedure that generated it is spread across OneDrive, a Brand Kit template, a notebook source graph, and organization policy. File portability is therefore improving faster than process reconstructability.

## 2. New Deep Drift node — PPSCSDF

**Persistent Procedural State and Cross-Surface Divergence Fidelity** measures whether a creator workflow can reconstruct the persistent procedural state actually active when a material artifact was generated or mutated, especially when that state is synchronized imperfectly across applications.

### Core distinction

```text
MODEL + PROMPT
        !=
OBSERVED CREATOR RUNTIME

OBSERVED CREATOR RUNTIME
=
MODEL
+ PROMPT
+ PERSONAL SKILLS
+ ORG SKILLS
+ SKILL ACTIVATION STATE
+ SKILL STORAGE VERSION
+ TEMPLATE STEERING
+ BRAND/POLICY CONSTRAINTS
+ SOURCE GRAPH
+ SURFACE-SPECIFIC GROUNDING
+ RETENTION / DELETION STATE
+ HUMAN MUTATIONS
```

### Failure classes

1. **Procedural Storage Amnesia** — output provenance records a Skill name but not the actual stored Skill version or storage identity.
2. **Activation-State Erasure** — a Skill existed but the record does not show whether it was enabled, selected, or invoked.
3. **Personal/Organization Skill Collapse** — personal and centrally deployed procedures are treated as equivalent.
4. **Template-Steering Invisibility** — persistent slide-note instructions influence generation but are absent from the artifact lineage.
5. **Cross-Surface Grounding Collapse** — synchronized notebook state is mistaken for identical grounding behavior across products.
6. **Retention-Clock Divergence** — copied chat/context survives in one surface after deletion in another without a preserved lineage marker.
7. **Storage-to-Execution Drift** — a Skill is edited in OneDrive and later execution silently uses the revised procedure.
8. **Mini-App State Flattening** — an interactive generated canvas is archived only as screenshot/PDF, losing its live relationship to source data.
9. **Artifact/Procedure Decoupling** — final DOCX/PDF survives but its generating procedural environment cannot be reconstructed.
10. **Policy Inheritance Blindness** — organization or Brand Kit constraints are omitted from provenance even though they materially narrowed model behavior.

## 3. Benchmark dimensions

| Dimension | Deep Drift question |
|---|---|
| Procedural Storage Fidelity | Can the exact stored Skill object and version be identified? |
| Skill Activation Fidelity | Can we prove which Skills were active or explicitly invoked? |
| Personal/Org Provenance Fidelity | Can personal and centrally deployed procedure be distinguished? |
| Template Steering Recoverability | Are inherited speaker-note instructions preserved as execution inputs? |
| Policy Constraint Fidelity | Are strict-brand and administrative constraints represented? |
| Cross-Surface Grounding Fidelity | Can NotebookLM-only grounding be distinguished from Gemini + web/tool grounding? |
| Context Copy Lineage Fidelity | Can a Gemini chat copied into notebook context be traced to its source conversation? |
| Deletion Semantics Fidelity | Are different deletion/retention clocks recorded rather than collapsed? |
| Mini-App State Fidelity | Can the generated interface be related back to its live spreadsheet/data source? |
| Artifact-to-Procedure Fidelity | Can a generated DOCX/PDF be tied to the procedure and policy state that produced it? |

## 4. Why this matters for Deep Drift Research

Deep Drift has been tracking a progression from conversational memory toward persistent runtime ancestry. This scan adds another layer: **procedural state is becoming ordinary creator data**. It can sit in OneDrive, travel inside template notes, be deployed by an administrator, synchronize as custom instructions across products, or be copied from a chat into a notebook knowledge base.

That is powerful because creators no longer need to restate the same instructions in every prompt. It is also epistemically messy. A researcher can no longer assume that a visible prompt contains the meaningful instructions. The decisive rule may be hidden one layer down in a `SKILL.md`, in a speaker note, in an administrator deployment, or in a notebook configuration that the creator no longer remembers changing.

For authorship, this matters because persistent procedure can itself be authored. A creator who writes a Skill, designs a steering template, or curates notebook instructions is not merely “prompting.” They are constructing reusable behavioral infrastructure. Deep Drift should treat those objects as authored methodological components with their own provenance and version history.

For archival practice, this creates a blunt requirement: **archive the procedure, not only the artifact**. Saving the PDF while discarding the active Skill/configuration is equivalent to archiving a scientific result while throwing away the method section because the graph looked nice.

## 5. Creator workflow trend map

```text
2024–2025
PROMPT -> RESPONSE

2025–EARLY 2026
PROMPT + MEMORY + CONNECTORS -> ARTIFACT

MID 2026
PROJECT / NOTEBOOK + TOOLS + FILE GENERATION -> WORKSPACE OUTPUT

LATE AUGUST 2026
STORED SKILLS
+ TEMPLATE-EMBEDDED STEERING
+ ORG-DEPLOYED PROCEDURE
+ CROSS-APP NOTEBOOK CONTEXT
+ DATA-BACKED MINI-APPS
-> PERSISTENT CREATOR RUNTIME
```

The broader direction is clear: the useful unit of creator AI is becoming **a persistent behavioral workspace**, not a chat box. The industry is gradually moving procedure out of the ephemeral prompt and into files, storage, templates, synchronized notebook state, and policy layers.

## 6. Deep Drift canonical requirement

> Every material AI-assisted creator workflow should preserve a machine-readable procedural-state manifest linking each artifact mutation to the exact personal and organization Skill identities, immutable Skill contents or digests, storage location and version, activation or explicit invocation state, inherited template and note-steering instructions, relevant Brand Kit or administrative constraints, notebook/custom-instruction state, source graph, surface-specific grounding rules, copied-context ancestry, retention and deletion semantics, model/tool identity, human review events, and downstream artifact lineage. Synchronization across applications must never be treated as proof of identical context, grounding, retention, or execution state.

## 7. Category status for this scan

| Requested area | Status | Research significance |
|---|---|---|
| Memory | No stronger standalone memory primitive found | Memory is increasingly entangled with notebook/context synchronization rather than a single memory store. |
| Skills | **Major fresh delta** | PowerPoint custom Skills use `SKILL.md`, live in OneDrive, and can also be deployed organizationally. |
| Mini-app builders | **Material recent delta** | Sheets Canvas turns spreadsheet data into synchronized interactive mini-apps. |
| Chat-to-document export | No stronger fresh primitive | Direct artifact generation is already mature; process lineage is now the weak layer. |
| DOCX/PDF generation | No stronger fresh format launch | Portable files increasingly outlive the procedural state that generated them. |
| Copy-paste/export fixes | No major fresh clipboard fix | The industry is reducing copy/paste by moving procedure and context into persistent shared surfaces. |
| Broader creator workflow | **Major** | Procedure is becoming stored, inherited, policy-governed, and cross-surface. |

## 8. Sources
- [Microsoft, “What’s New in Microsoft Copilot | August 2026,” published Aug. 31, 2026](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-copilot--august-2026/4551960)
- [Microsoft Support, “Use custom skills with Copilot in PowerPoint”](https://support.microsoft.com/en-us/powerpoint/copilot/copilot-in-powerpoint-skills)
- [Microsoft Support, “Deploy organization skills for Copilot in PowerPoint”](https://support.microsoft.com/en-US/PowerPoint/copilot/deploy-organization-skills-for-copilot-in-powerpoint)
- [Microsoft Support, “Manage template settings in your Brand Kit for Copilot in PowerPoint”](https://support.microsoft.com/en-us/powerpoint/copilot/manage-brand-kit-template-settings-in-powerpoint)
- [Google, “Bring your spreadsheet data to life with Sheets canvas,” published Aug. 13, 2026](https://blog.google/products-and-platforms/products/workspace/sheets-canvas-for-google-sheets-spreadsheets/)
- [NotebookLM Help, “Notebooks in Gemini Apps”](https://support.google.com/notebooklm/answer/17003757)
- [Google, “You can now easily generate files in Gemini,” published Apr. 29, 2026](https://blog.google/innovation-and-ai/products/gemini-app/generate-files-in-gemini/)

---
Deep Drift Research Log | ĀTØR Institute
