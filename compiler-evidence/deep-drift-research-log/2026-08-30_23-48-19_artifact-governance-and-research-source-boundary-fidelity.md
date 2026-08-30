# Deep Drift Research Update

## Artifact Governance and Research-Source Boundary Fidelity

**Research date:** 30 August 2026  
**Primary platform deltas:** Microsoft 365 Copilot generated-file sensitivity-label inheritance; current ChatGPT Deep Research source-selection and read-only connected-app boundary  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log governance and creator-workflow architecture verified from first-party Microsoft and OpenAI documentation.

## Executive Summary

Two platform details matter more for Deep Drift than another round of model-name confetti.

First, Microsoft 365 Copilot now applies **sensitivity labels to generated files based on the highest sensitivity label detected in the source material used to create them**. Microsoft documents this as a change from the earlier state in which Copilot-generated files did not inherit labels automatically. If Copilot cannot apply the required label, the user is notified before sharing or storing the file.

Second, OpenAI's current Deep Research documentation, updated on 30 August 2026, makes the source boundary explicit: Deep Research can use the public web, uploaded files, and eligible connected apps, but it uses **read actions rather than write actions** from those connected apps. Users can also constrain research to selected websites and review or modify the proposed research plan before execution.

Together, these changes expose two different but complementary creator-workflow controls:

```text
UPSTREAM CONTROL
-> WHICH SOURCES MAY BE READ

DOWNSTREAM CONTROL
-> WHICH GOVERNANCE LABEL MUST FOLLOW THE GENERATED FILE
```

For Deep Drift, the creator pipeline becomes:

```text
SOURCE SET
-> ACCESS / PERMISSION BOUNDARY
-> AI SYNTHESIS
-> GENERATED ARTIFACT
-> INHERITED GOVERNANCE STATE
-> EDIT / SHARE / EXPORT
```

This creates a new benchmark family:

**Artifact Governance and Research-Source Boundary Fidelity (AGRSBF)**

with companion constructs:

**Source-Selection Fidelity (SSF)**  
**Connected-App Read-Boundary Fidelity (CARBF)**  
**Source-to-Artifact Sensitivity Fidelity (SASF)**  
**Highest-Label Propagation Fidelity (HLPF)**  
**Label-Failure Disclosure Fidelity (LFDF)**  
**Artifact-to-Export Governance Continuity Fidelity (AEGCF)**  
**Research-Plan-to-Source Fidelity (RPSF)**  
**Governance-vs-Provenance Distinction Fidelity (GPDF)**

The central research question is:

> When an LLM creates a file from mixed sources under explicit source-access boundaries, does the resulting artifact preserve both the governance state required by its most sensitive source and the provenance needed to explain which sources actually shaped it?

## 1. Microsoft: Generated Files Inherit Sensitivity Labels

Microsoft's July 1, 2026 Microsoft 365 Copilot release notes document a significant file-generation change.

When Microsoft 365 Copilot generates a file, it now evaluates the source material used in generation and applies the **highest sensitivity label** detected among those sources.

Microsoft states that previously generated files did not inherit sensitivity labels automatically.

The current logic is:

```text
SOURCE A -> PUBLIC
SOURCE B -> INTERNAL
SOURCE C -> CONFIDENTIAL

GENERATED FILE
-> CONFIDENTIAL
```

If Copilot cannot apply the required sensitivity label, the user receives a notification and is expected to apply the correct label before sharing or storing the file.

This is directly relevant to:

```text
WORD
EXCEL
POWERPOINT
OTHER COPILOT-GENERATED FILES
```

and therefore to Deep Drift's DOCX/PDF lineage work.

## 2. Why This Matters

The ordinary generative-artifact model is:

```text
SOURCE CONTENT
-> AI
-> FILE
```

The new governance-aware model is:

```text
SOURCE CONTENT
+ SOURCE GOVERNANCE STATE
-> AI
-> FILE CONTENT
+ FILE GOVERNANCE STATE
```

Therefore:

```text
CONTENT LINEAGE
!= GOVERNANCE LINEAGE

FILE CREATED
!= FILE SAFE TO SHARE

MOST VISIBLE SOURCE
!= HIGHEST-SENSITIVITY SOURCE

FINAL FORMAT
!= FINAL GOVERNANCE STATE
```

The generated file now carries an institutional interpretation of its source sensitivity.

That is not the same thing as provenance, but it is part of the artifact's history.

## 3. Source-to-Artifact Sensitivity Fidelity

### Definition

**Source-to-Artifact Sensitivity Fidelity (SASF)** measures whether the generated artifact receives the sensitivity classification required by the source set used during generation.

A minimum manifest should preserve:

```text
artifact_id
artifact_type
source_ids
source_labels
highest_source_label
applied_artifact_label
label_policy_version
generation_timestamp
generation_surface
```

The benchmark should test mixed-source generation where different source items carry different labels.

## 4. Highest-Label Propagation Fidelity

### Definition

**Highest-Label Propagation Fidelity (HLPF)** measures whether the highest applicable sensitivity label from the source set is correctly propagated to the generated file.

Controlled source set:

```text
SOURCE A -> GENERAL
SOURCE B -> INTERNAL
SOURCE C -> CONFIDENTIAL
```

Expected:

```text
GENERATED FILE -> CONFIDENTIAL
```

The benchmark must then repeat after removing Source C.

Expected:

```text
GENERATED FILE -> INTERNAL
```

This verifies that the label is tied to the actual generation source set rather than a stale prior state.

## 5. Label-Failure Disclosure Fidelity

Microsoft documents that if the required label cannot be applied, the user receives a notification.

### Definition

**Label-Failure Disclosure Fidelity (LFDF)** measures whether a labeling failure is visible before the file is shared, stored, exported, or treated as governance-complete.

The system should preserve:

```text
required_label
application_result
failure_reason
notification_event
human_resolution
final_label
```

A failed governance event should not disappear merely because the document itself rendered successfully.

## 6. Artifact-to-Export Governance Continuity

This matters directly for Deep Drift's DOCX/PDF pipeline.

A Word document may be created with a sensitivity label and later exported to PDF.

The research question becomes:

```text
SOURCE LABEL
-> DOCX LABEL
-> PDF / DOWNSTREAM ARTIFACT
```

Does the downstream artifact preserve:

```text
VISIBLE LABEL
METADATA
ACCESS POLICY
WATERMARK
HEADER / FOOTER
PROTECTION STATE
```

or does the governance state collapse during format conversion?

### Definition

**Artifact-to-Export Governance Continuity Fidelity (AEGCF)** measures how much governance state survives transformation from the native AI-generated file into a downstream export.

This must be tested separately from content fidelity.

## 7. OpenAI: Deep Research Clarifies Source-Control Boundaries

OpenAI's current Deep Research documentation, updated 30 August 2026, states that Deep Research can work with:

```text
PUBLIC WEB
UPLOADED FILES
SUPPORTED CONNECTED APPS
```

Users can also specify websites to focus the research.

Before execution, ChatGPT proposes a research plan that the user can review and modify.

During execution, the user can interrupt and refine the scope, including which sources may be accessed.

The important connected-app boundary is explicit:

> Deep Research uses available **read actions** from connected apps and does not use app write actions as part of research.

This is useful because it separates:

```text
RESEARCH ACCESS
from
ACTION AUTHORITY
```

## 8. Connected-App Read-Boundary Fidelity

### Definition

**Connected-App Read-Boundary Fidelity (CARBF)** measures whether a research workflow remains constrained to authorized read operations even when the connected app also exposes write capabilities elsewhere in the platform.

The minimum run manifest should preserve:

```text
research_task_id
connected_app
authorized_account
read_actions_available
write_actions_available_elsewhere
write_actions_disabled_for_research
workspace_policy
source_items_used
```

The user should be able to distinguish:

```text
APP CONNECTED
!=
APP WRITABLE IN THIS MODE
```

This is a meaningful research-safety and reproducibility boundary.

## 9. Source-Selection Fidelity

Deep Research lets the user narrow research to particular sites and can combine those with uploaded files and app data.

### Definition

**Source-Selection Fidelity (SSF)** measures whether the final documented report remains faithful to the source scope approved in the research plan.

Controlled test:

```text
ALLOWED:
domain-a.com
domain-b.org
uploaded-report.pdf

NOT ALLOWED:
full-web fallback
other connected apps
```

The final source manifest should make clear whether any evidence came from outside the selected set.

## 10. Research-Plan-to-Source Fidelity

The proposed plan is now part of the research workflow.

### Definition

**Research-Plan-to-Source Fidelity (RPSF)** measures whether the executed research process remains materially consistent with the source and scope constraints the user approved.

The chain should preserve:

```text
PLAN v1
-> USER EDIT
-> PLAN v2 APPROVED
-> EXECUTION
-> SOURCE SET
-> REPORT
```

If the user narrows the scope mid-run, that change should become another versioned research event.

## 11. Governance Is Not Provenance

This is the central Deep Drift distinction.

A sensitivity label answers:

> How should this file be handled?

It does **not** answer:

> Which exact sources produced each claim?

Likewise, a cited research report answers:

> Which evidence supports this claim?

It does **not** automatically answer:

> Which governance policy should follow the generated file?

Therefore:

```text
GOVERNANCE
!=
PROVENANCE

SENSITIVITY LABEL
!=
SOURCE MANIFEST

CITATION
!=
ACCESS POLICY

FILE CLASSIFICATION
!=
AUTHORSHIP HISTORY
```

A mature creator workflow needs both.

## 12. New Failure Classes

### 12.1 Highest-Label Under-Propagation
A generated artifact receives a lower label than one of its material source items.

### 12.2 Stale Label Carryover
A new artifact inherits a label from a prior source set rather than the sources actually used in the current run.

### 12.3 Label-without-Lineage Illusion
A correctly labeled file is treated as fully auditable even though its source provenance is weak.

### 12.4 Provenance-without-Governance Illusion
A well-cited document is treated as safe to distribute even though its source material requires stronger handling controls.

### 12.5 Conversion Governance Collapse
A DOCX is properly labeled while the exported PDF loses meaningful governance metadata or visual markings.

### 12.6 Research Read/Write Scope Confusion
A user assumes that because an app is connected, Deep Research can also modify it.

### 12.7 Plan/Execution Scope Drift
The user approves a constrained research plan, but execution reaches beyond the intended source set.

### 12.8 Label-Failure Silence
A generated file cannot receive the required label, but the failure is not visible before downstream sharing.

### 12.9 Mixed-Source Classification Ambiguity
The system cannot explain which source caused the final high-sensitivity classification.

### 12.10 Citation-Governance Detachment
A downstream report retains citations but loses the governance state inherited from its source material.

## 13. Deep Drift Benchmark: Source-to-Document-to-PDF Governance Round Trip

### Controlled source set

Prepare three source documents:

```text
A. GENERAL
B. INTERNAL
C. CONFIDENTIAL
```

### Controlled generation

Ask the platform to create a structured report from A + B + C.

### Test sequence

1. capture source IDs and sensitivity labels;
2. generate a Word document;
3. verify the applied file label;
4. confirm the highest source label drove the result;
5. regenerate from A + B only;
6. verify the new output label changes appropriately;
7. export the Word document to PDF;
8. inspect which governance indicators survive;
9. create a Deep Research task using a constrained source set;
10. preserve the proposed plan;
11. edit the source scope;
12. execute the research;
13. verify that connected-app access remained read-only;
14. compare final citations with the approved source plan;
15. attach the research report to a downstream document-generation workflow;
16. test whether both citation lineage and governance state survive.

## 14. New Metrics

### Highest Label Accuracy
```text
HLA = generated files carrying the correct highest source label / all controlled generated files
```

### Label Failure Disclosure Rate
```text
LFDR = failed label applications visibly disclosed before distribution / all controlled label failures
```

### Export Governance Retention
```text
EGR = governance indicators retained in downstream export / all controlled governance indicators
```

### Research Source Scope Accuracy
```text
RSSA = sources used within approved research scope / all sources used in controlled research runs
```

### Read-Boundary Compliance
```text
RBC = connected-app research operations remaining read-only / all controlled connected-app research operations
```

### Governance-Provenance Dual Coverage
```text
GPDC = artifacts retaining both governance state and recoverable source lineage / all controlled generated artifacts
```

## 15. Why This Matters for Memory

This update does not introduce a new personal-memory feature.

But it clarifies a crucial architectural point:

```text
MEMORY / CONTEXT
-> MAY SHAPE OUTPUT

SOURCE GOVERNANCE
-> MAY SHAPE FILE POLICY
```

Those should not be collapsed.

A model may remember something that influences the artifact while the artifact's sensitivity label is determined by explicit source material.

Deep Drift should track both context lineage and source-governance lineage.

## 16. Why This Matters for Skills

A document-generation Skill can now sit downstream of source governance.

The effective procedure becomes:

```text
SKILL
+ SOURCE SET
+ SOURCE LABELS
+ TEMPLATE
-> GENERATED FILE
+ GOVERNANCE STATE
```

Therefore Skill reproducibility should include governance inputs, not only prompt and template version.

## 17. Why This Matters for Mini-App Builders

Mini-apps and agents increasingly generate files as secondary outputs.

If a generated app reads mixed-sensitivity enterprise data and emits a document, the app must preserve the source-governance boundary into that file.

A beautiful mini-app that silently declassifies its output is simply a very polished governance failure.

## 18. Why This Matters for Chat-to-Document Export

Microsoft's workflow is already moving beyond copy-paste:

```text
NOTEBOOK / SOURCES
-> COPILOT
-> WORD DOCUMENT
```

The new governance detail means the transition also carries a policy state:

```text
SOURCE
-> DOCUMENT CONTENT
+ DOCUMENT CLASSIFICATION
```

That is a stronger creator workflow than ordinary chat export.

## 19. Why This Matters for DOCX / PDF Generation

This is the strongest category in the current pass.

For Deep Drift, DOCX/PDF generation can no longer be benchmarked only for:

```text
TEXT FIDELITY
LAYOUT FIDELITY
CITATION FIDELITY
```

It should also test:

```text
GOVERNANCE FIDELITY
LABEL PROPAGATION
EXPORT RETENTION
```

A PDF can be textually perfect and institutionally wrong.

## 20. Why This Matters for Copy-Paste / Export Fixes

The broader creator workflow continues to remove manual transfer:

```text
SOURCE NOTES
-> GENERATED WORD FILE
```

instead of:

```text
COPY NOTES
-> PASTE INTO WORD
-> REFORMAT
```

The Microsoft label inheritance mechanism adds something genuinely useful to that reduction: governance can travel automatically too.

That is the correct direction.

Every removed manual seam should carry both lineage and handling policy forward.

## 21. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing personal-memory release surfaced. Important distinction: remembered context and source-governance state are separate input classes. |
| Skills | Material implication: Skills that generate files need governance-aware manifests, not only prompt/template provenance. |
| Mini-app builders | Material implication: generated apps that emit files must propagate source sensitivity into downstream artifacts. |
| Chat-to-document export | **Material creator-workflow finding:** source-to-document generation increasingly carries governance state alongside content. |
| DOCX / PDF generation | **Strongest new-to-log item:** Microsoft 365 Copilot generated files inherit the highest source sensitivity label; downstream PDF conversion becomes a governance-retention boundary. |
| Copy-paste/export fixes | Automatic file generation reduces manual transfer while automatic label inheritance reduces manual governance handling. |
| Broader creator workflow | **Major trend:** LLM platforms are beginning to treat artifact governance as part of generation, while research modes formalize source-access boundaries separately from action authority. |

## 22. Cross-Platform Check

### Microsoft

The strongest newly extracted Deep Drift item is generated-file sensitivity-label inheritance, documented in the July 1, 2026 Microsoft 365 Copilot release notes.

The same release cluster also includes direct creation of Word documents, Excel spreadsheets, and PowerPoint decks from Copilot Notebooks, reinforcing the shift from chat output to native structured artifacts.

### OpenAI

The current Deep Research documentation was updated on 30 August 2026 and clarifies source selection, plan review, connected-app permissions, and the read-only app-action boundary for research.

No newer category-displacing memory, Skill, mini-app, or direct DOCX/PDF-generation release surfaced beyond the late-August items already entered into the Deep Drift ledger.

### Anthropic

No newer category-displacing creator release surfaced beyond the memory, Cowork, Slack-agent, Skills, and migration changes already logged.

### Google

No newer category-displacing creator release surfaced beyond Sheets Canvas, interactive Gemini simulations, and Ask Gemini in Chat already logged.

### Notion

No newer creator-governance item displaced the 28 August Suggested Edits release already represented in Deep Drift.

## 23. Deep Drift Research Position

The weak description is:

> Copilot labels sensitive files automatically.

The serious description is:

> LLM-generated artifacts are beginning to inherit institutional governance state from the source material used to create them, while research systems are separately formalizing which connected sources can be read and how source scope is approved before synthesis.

Therefore:

```text
GENERATED
!= UNGOVERNED

CITED
!= SAFE TO SHARE

SENSITIVITY LABEL
!= PROVENANCE

APP CONNECTED
!= APP WRITABLE

DOCX CORRECT
!= PDF GOVERNANCE PRESERVED
```

The serious Deep Drift requirement is:

> **Every LLM-generated artifact should preserve both source provenance and source-derived governance state, including the source set, source labels, highest applicable classification, applied artifact label, label-failure events, research-source scope, connected-app access mode, and downstream export transformations required to reconstruct not only what the artifact says, but how it is permitted to travel.**

The industry has spent years teaching machines to make files. It is finally beginning to remember that files have consequences after they leave the chat window. Astonishingly mature behavior from software, several decades after document governance became somebody else's boring problem.

## 24. Evidence Boundary

Platform facts in this report are grounded in first-party Microsoft and OpenAI documentation checked on 30 August 2026.

Microsoft states that Copilot-generated files automatically inherit the highest sensitivity label detected in the source data and that users are notified when the required label cannot be applied. Microsoft also documents native Word, Excel, and PowerPoint creation from Copilot Notebooks in the same July 1, 2026 release cluster.

OpenAI's current Deep Research documentation states that Deep Research can use the public web, uploaded files, and eligible connected apps; users can review and modify the proposed research plan; users can constrain research to specific websites; connected-app permissions continue to apply; and Deep Research uses read actions rather than write actions from connected apps.

AGRSBF, SSF, CARBF, SASF, HLPF, LFDF, AEGCF, RPSF, GPDF, all failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Microsoft Learn, **Release Notes for Microsoft 365 Copilot**, July 1, 2026 release cluster.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

2. OpenAI Help Center, **Deep research in ChatGPT**, updated 30 August 2026.  
   https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt

3. OpenAI Help Center, **ChatGPT Release Notes**, checked 30 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
