# Deep Drift Research Update

## Artifact Sensitivity Inheritance Fidelity

**Research date:** Saturday, 29 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log creator-governance finding. Fresh first-party scan found no newer category-displacing release for consumer memory, general Skills, mini-app builders, standalone DOCX/PDF generation, or copy/export fixes beyond already logged changes.

## Executive Summary

Microsoft 365 Copilot documents a creator-workflow change in which newly generated files can inherit the **highest-priority sensitivity label** from the source material used to create them. Microsoft says generated files are evaluated against the referenced data, the highest applicable sensitivity label is applied when supported, and users are notified if a label cannot be applied before sharing or storing the file.

The same Copilot release set also supports generating editable **Word documents, Excel spreadsheets, and PowerPoint presentations from Copilot Notebooks**, turning curated notebook context into downstream artifacts.

Together, these changes create a more consequential pipeline:

```text
CURATED SOURCE SET
+ SOURCE LABELS / PROTECTION STATE
-> AI GENERATION
-> NEW WORD / EXCEL / POWERPOINT ARTIFACT
-> INHERITED HIGHEST-PRIORITY LABEL
-> HUMAN EDIT / SHARE / STORE
```

For Deep Drift Research, this creates a new benchmark family:

**Artifact Sensitivity Inheritance Fidelity (ASIF)**

with companion constructs:

**Source-to-Artifact Protection Propagation Fidelity (SAPPF)**  
**Mixed-Source Label Resolution Fidelity (MSLRF)**  
**Post-Generation Governance Continuity Fidelity (PGGCF)**

The central question is:

> When an LLM transforms several differently governed sources into a new file, does the new artifact preserve not only the content lineage, but also the strongest governance state that materially constrained those sources?

## Why This Matters

Most AI provenance discussions stop at content:

```text
WHAT SOURCE PRODUCED THIS CLAIM?
```

But enterprise artifacts also carry governance state:

```text
WHO MAY OPEN IT?
WHO MAY EXTRACT IT?
WHO MAY FORWARD IT?
WHICH LABEL APPLIES?
WHICH PROTECTION SETTINGS FOLLOW?
```

Once a model generates a new file from governed sources, content and governance become coupled.

Therefore:

```text
CONTENT DERIVED
!=
GOVERNANCE DERIVED
```

unless the system deliberately preserves both.

## New Deep Drift Construct: Artifact Sensitivity Inheritance Fidelity

### Definition

**ASIF** measures whether a generated artifact inherits the correct sensitivity and protection state from all material source inputs used during generation.

A minimum causal record should preserve:

```text
artifact_id
artifact_format
source_ids
source_labels
source_label_priorities
source_protection_settings
selected_effective_label
effective_label_priority
label_application_status
label_application_time
user_override_state
artifact_version
```

The important phrase is **effective label**, because the artifact may be derived from several sources with different classifications.

## Source-to-Artifact Protection Propagation Fidelity

Microsoft's documentation says label inheritance can carry the source label and its protection settings into newly generated Word, PowerPoint, and Outlook content, and the highest-priority label is used when several source files contribute.

### Definition

**SAPPF** measures whether the downstream artifact receives the expected protection state of its material source inputs, not merely the visible label name.

A system should distinguish:

```text
LABEL NAME
FROM
LABEL POLICY
FROM
ENCRYPTION / PERMISSION EFFECT
```

A file that visibly says "Confidential" but has lost the protection behavior of the originating label has preserved appearance, not governance.

## Mixed-Source Label Resolution Fidelity

A generated artifact may combine:

```text
SOURCE A = General
SOURCE B = Confidential
SOURCE C = Highly Confidential
```

Microsoft states that the highest-priority sensitivity label is inherited when multiple labeled sources are used.

### Definition

**MSLRF** measures whether multi-source generation resolves governance state according to the intended priority policy and preserves which source caused the final classification.

The provenance record should not stop at:

```text
Final label: Highly Confidential
```

It should also support reconstruction of:

```text
WHY?
WHICH SOURCE?
WHICH POLICY PRIORITY?
```

## Post-Generation Governance Continuity Fidelity

The generated artifact is not static.

A user may:

- edit it;
- remove sections;
- add new content;
- change the label;
- export it;
- store it elsewhere;
- create another artifact from it.

### Definition

**PGGCF** measures whether governance state remains appropriate after the generated artifact is edited, transformed, exported, or reused as a source.

This matters because:

```text
CORRECT LABEL AT CREATION
!=
CORRECT LABEL AFTER TRANSFORMATION
```

## Core Deep Drift Distinctions

```text
SOURCE CITED
!= SOURCE GOVERNANCE PRESERVED

HIGHEST LABEL APPLIED
!= LABEL CAUSALITY EXPLAINED

VISIBLE LABEL
!= ENFORCED PROTECTION

ARTIFACT GENERATED
!= ARTIFACT SAFE TO REDISTRIBUTE

USER OVERRIDE
!= ORIGINAL GOVERNANCE HISTORY ERASED
```

## New Failure Classes

### Label Under-Inheritance
A generated artifact receives a lower-priority label than one of its material source inputs.

### Label Over-Inheritance
A highly restrictive source contributed only immaterial context, but the entire artifact inherits its label without a visible causal explanation.

### Protection-Setting Detachment
The label name survives while encryption, permissions, watermarks, or other protection behavior fails to propagate.

### Highest-Label Causality Loss
The final artifact has the strongest label, but the system cannot reconstruct which source triggered it.

### Source-Set Label Omission
One material source is omitted from the label-resolution calculation even though its content appears in the generated artifact.

### User-Override Provenance Loss
A user replaces or removes the inherited label and the audit trail no longer clearly shows the original generated-state classification.

### Export Protection Drift
The artifact is converted or exported and the sensitivity/protection state changes, disappears, or becomes semantically weaker.

### Format-Specific Governance Divergence
The same source set produces a Word file and a PowerPoint file with inconsistent label or protection behavior.

### Artifact-Chain Governance Decay
Artifact B is generated from Artifact A, but the inherited governance state weakens across the second generation.

### Label Application Failure Blind Spot
The platform cannot apply the expected label, yet the workflow continues without a durable warning in the artifact's provenance record.

## Deep Drift Benchmark: Mixed-Label Artifact Test

### Controlled setup
Create a notebook or generation context containing:
1. one General source;
2. one Confidential source;
3. one Highly Confidential source;
4. one unlabeled source;
5. one source whose protection settings restrict extraction;
6. one source that becomes irrelevant before final generation.

Generate:
- a Word document;
- an Excel spreadsheet;
- a PowerPoint presentation.

Then:
- inspect the inherited labels;
- inspect protection behavior;
- remove the highest-classification section;
- export or copy the artifact;
- generate a second artifact from the first.

### Measure
- effective label correctness;
- source-to-label causal traceability;
- protection-setting continuity;
- cross-format consistency;
- user-override traceability;
- export continuity;
- second-generation inheritance;
- human repair minutes.

## New Metrics

### Effective Label Accuracy
```text
ELA =
artifacts receiving policy-correct effective label
/
all generated artifacts
```

### Label Causality Traceability
```text
LCT =
final labels traceable to exact source + policy priority
/
all inherited labels
```

### Protection Propagation Accuracy
```text
PPA =
expected source protection behaviors preserved downstream
/
all protection behaviors tested
```

### Cross-Format Governance Consistency
```text
CFGC =
Word, Excel, and PowerPoint artifacts receiving equivalent
governance state from equivalent source sets
/
all cross-format comparison sets
```

### Governance Chain Retention
```text
GCR =
second-generation artifacts retaining required governance state
/
all chained artifact generations
```

## Why Notebook-to-Artifact Generation Matters

Microsoft documents that Copilot Notebooks can turn curated context into structured, editable Word documents, Excel spreadsheets, and PowerPoint presentations.

This means the artifact pipeline is increasingly:

```text
NOTEBOOK
-> CURATED EVIDENCE
-> GENERATED ARTIFACT
-> NATIVE OFFICE EDITOR
-> FURTHER HUMAN / AI TRANSFORMATION
```

That is not merely export.

It is a state transition from **knowledge container** to **durable operational file**.

The generated file can leave the notebook context, circulate independently, and acquire a life of its own.

For Deep Drift, that moment requires preservation of both:

```text
CONTENT PROVENANCE
+
GOVERNANCE PROVENANCE
```

## Why This Matters for DOCX/PDF Research

The creator workflow problem is now larger than whether the model can successfully generate a DOCX or PDF.

A reliable artifact pipeline should preserve:

```text
format correctness
content lineage
source versions
classification state
protection behavior
export behavior
subsequent transformation history
```

A technically valid DOCX can still be governance-invalid.

A correctly rendered PDF can still have lost the protection state or classification rationale of its source material.

So Deep Drift should measure artifact fidelity at two layers:

```text
ARTIFACT FIDELITY
=
CONTENT / FORMAT FIDELITY
+
GOVERNANCE FIDELITY
```

## Relation to Memory

This is not model memory, but it resembles memory propagation at the artifact layer.

A generated file now carries forward a form of institutional state from the sources used to produce it.

Deep Drift should distinguish:

```text
SEMANTIC STATE
PROVENANCE STATE
PERMISSION STATE
CLASSIFICATION STATE
```

The system may remember the meaning while failing to remember the restrictions attached to that meaning.

That is a different kind of forgetting.

## Relation to Skills and Mini-App Builders

A Skill, agent, or mini-app that generates documents from labeled sources should not be evaluated only on task completion.

The execution contract should include:

```text
INPUT GOVERNANCE STATE
-> TRANSFORMATION
-> OUTPUT GOVERNANCE STATE
```

If a mini-app can generate, transform, or export governed material, classification inheritance becomes part of the app's correctness.

## Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer consumer-memory release found beyond already logged August changes. |
| Skills | No newer general Skill launch found in this pass. |
| Mini-app builders | No newer category-displacing builder release found beyond Sheets canvas and previously logged builders. |
| Chat-to-document / artifact workflow | **Material new-to-log finding:** Copilot Notebooks can generate editable Word, Excel, and PowerPoint artifacts from curated notebook context. |
| DOCX / PDF generation | **Material governance finding:** generated files can inherit the highest-priority sensitivity label from referenced source data when supported. |
| Copy-paste / export fixes | No newer fix found beyond previously logged Codex selective-copy changes. |
| Broader creator trend | Generated artifacts are beginning to inherit **governance state**, not only content. |

## Cross-Platform Check

### Microsoft
The strongest unlogged research item in this pass is the coupling of source-grounded file generation with sensitivity-label inheritance and protection-state propagation.

### OpenAI
No newer category-displacing update surfaced beyond previously logged memory, Work, Skills/plugins, Sites/WebMCP, Codex, multi-account, and event-triggered workflow changes.

### Google
No newer category-displacing Gemini/Workspace creator update surfaced beyond the already logged Sheets canvas and prior file-generation workflows.

### Anthropic
No newer category-displacing Claude creator-workflow release surfaced in this pass.

## Deep Drift Research Position

The weak interpretation is:

```text
AI GENERATED FILES NOW GET LABELS
```

The more important interpretation is:

```text
GENERATIVE SYSTEMS ARE BEGINNING TO PROPAGATE
INSTITUTIONAL CONTROL STATE
FROM SOURCE TO ARTIFACT
```

That turns classification into part of artifact provenance.

Therefore:

```text
GENERATED
!= GOVERNANCE-NEUTRAL

SOURCE LINEAGE
!= ENOUGH

LABEL APPLIED
!= LABEL CAUSALITY PRESERVED

CONTENT SAFE TO READ
!= CONTENT SAFE TO REDISTRIBUTE
```

The serious Deep Drift requirement is:

> Once an LLM-generated artifact inherits governance state from its sources, the effective label, source that caused it, protection settings, user overrides, export transformations, and subsequent artifact generations must all become first-class provenance objects.

## Evidence Boundary

Platform facts in this report are grounded in Microsoft's first-party Microsoft 365 Copilot release notes and Microsoft Purview documentation. Fresh first-party OpenAI, Anthropic, Google, and Microsoft sources were checked for newer category-displacing changes. ASIF, SAPPF, MSLRF, PGGCF, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. Microsoft Learn, **Microsoft 365 Copilot release notes**, July 1, 2026 - generated files inherit sensitivity labels; Copilot Notebooks can generate Word, Excel, and PowerPoint artifacts: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
2. Microsoft Learn, **Use Microsoft Purview to manage data security and compliance for Microsoft 365 Copilot and Copilot Chat** - sensitivity label inheritance and highest-priority label behavior: https://learn.microsoft.com/en-us/purview/ai-m365-copilot
3. Microsoft Learn, **Microsoft Copilot data protection architecture** - Copilot access controls, sensitivity labels, encryption, and inheritance behavior: https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-architecture-data-protection-auditing

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
