# Deep Drift Research Update

## Generated-Artifact Governance Inheritance Fidelity

**Research date:** 29 August 2026  
**Primary release date:** 1 July 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log Microsoft 365 Copilot artifact-governance architecture verified from first-party Microsoft Learn release notes.

## Executive Summary

Microsoft 365 Copilot now applies sensitivity labels to AI-generated files based on the highest sensitivity label detected in the referenced source data. Microsoft documents that generated files previously did not inherit those labels automatically. If Copilot cannot apply the required label, the user is notified so the missing label can be resolved before the file is shared or stored.

The same release cluster adds policy-controlled watermarking for AI-generated or AI-altered video and audio, with separate image watermark controls.

This creates a distinct creator-workflow architecture:

```text
SOURCE A [GENERAL]
+
SOURCE B [CONFIDENTIAL]
+
SOURCE C [HIGHLY CONFIDENTIAL]
        |
        v
COPILOT GENERATION
        |
        v
GENERATED FILE
[HIGHLY CONFIDENTIAL]
```

The architectural shift is:

```text
CONTENT TRANSFORMATION
+
POLICY TRANSFORMATION
```

For Deep Drift Research this creates a new benchmark family:

**Generated-Artifact Governance Inheritance Fidelity (GAGIF)**

with companion constructs:

- **Source-to-Artifact Label Fidelity (SALF)**
- **Highest-Sensitivity Propagation Fidelity (HSPF)**
- **Governance-Lineage Visibility (GLV)**
- **Cross-Format Policy Persistence Fidelity (CFPPF)**
- **AI-Origin Watermark Fidelity (AOWF)**
- **Governance Failure Disclosure Fidelity (GFDF)**

The central research question is:

> When an LLM transforms multiple source objects into a new DOCX, PDF, presentation, media file, or other artifact, can the downstream file preserve not only the content lineage but also the governance obligations inherited from every material source?

## What Changed

Microsoft's 1 July 2026 Microsoft 365 Copilot release notes state that generated files now inherit sensitivity labels automatically. Copilot evaluates referenced source content, identifies source sensitivity labels, and applies the highest applicable label to the generated file. If the label cannot be applied, the user is notified.

The same release adds organizational controls for watermarking AI-generated or AI-altered video/audio. These two mechanisms answer different questions:

```text
WHAT PROTECTION DOES THIS ARTIFACT INHERIT?
```

versus:

```text
WAS THIS CONTENT GENERATED OR ALTERED BY AI?
```

Sensitivity labels address protection. Watermarks address AI-origin disclosure. They are not substitutes.

## Why This Matters for Deep Drift

A source artifact may carry governance state such as confidentiality, sharing restrictions, retention rules, organizational policy, and AI-origin disclosure. Once AI transforms sources into a new file, the system creates a new object. The old failure mode is:

```text
PROTECTED SOURCE
-> AI
-> NEW UNLABELED FILE
```

The new Microsoft behavior attempts:

```text
PROTECTED SOURCE
-> AI
-> NEW PROTECTED FILE
```

Therefore:

```text
CONTENT DERIVED
!= POLICY OPTIONAL

NEW FILE
!= NEW GOVERNANCE HISTORY

SUMMARIZED
!= DECLASSIFIED

REFORMATTED
!= PERMISSION TO SHARE
```

## Deep Drift Constructs

### Source-to-Artifact Label Fidelity
Measures whether a generated artifact receives a protection state consistent with the labels of its material sources.

### Highest-Sensitivity Propagation Fidelity
Measures whether the generated artifact reflects the strictest applicable source classification.

```text
effective_label = MAX(source_label_1 ... source_label_n)
```

### Governance-Lineage Visibility
Measures whether the artifact or audit record can identify which source object caused the inherited protection level.

### Cross-Format Policy Persistence Fidelity
Measures whether governance survives transformation across DOCX, PDF, PPTX, email attachment, Page, and other derivative formats.

```text
FORMAT CHANGED
!= CLASSIFICATION CHANGED
```

### AI-Origin Watermark Fidelity
Measures whether required AI-origin markings survive export, transcoding, clipping, embedding, and reuse.

### Governance Failure Disclosure Fidelity
Measures whether label-application failure is surfaced before the artifact is treated as governance-complete.

```text
GENERATION COMPLETE
+
LABEL APPLICATION FAILED
=
ARTIFACT NOT GOVERNANCE-COMPLETE
```

## New Failure Classes

1. Label Drop
2. Sensitivity Downgrade
3. Source-Cause Opacity
4. Conversion Declassification
5. Copy-Paste Governance Loss
6. Mixed-Source Policy Flattening
7. Label-Staleness Drift
8. Watermark Stripping
9. Watermark / Sensitivity Confusion
10. Governance Warning Bypass
11. Artifact Merge Escalation Failure
12. Derivative-Artifact Orphaning

## Benchmark: Mixed-Sensitivity Generation Test

Create controlled sources labeled PUBLIC, INTERNAL, CONFIDENTIAL, and HIGHLY CONFIDENTIAL. Generate Word, PDF, and PowerPoint artifacts from different source combinations. Then copy generated passages, convert formats, merge outputs, email derivatives, and regenerate after changing source labels.

Measure:

- highest-label accuracy;
- source-cause traceability;
- cross-format policy retention;
- derivative-file governance continuity;
- warning visibility;
- watermark persistence where relevant;
- human remediation minutes.

## Metrics

### Highest Label Accuracy

```text
HLA =
artifacts receiving the correct strictest source label
/
all controlled generated artifacts
```

### Governance Source Attribution Coverage

```text
GSAC =
generated artifacts whose effective label can be traced
to the source object(s) that caused it
/
all labeled generated artifacts
```

### Cross-Format Policy Retention

```text
CFPR =
derived artifacts preserving equivalent governance state
/
all controlled format conversions
```

### Derivative Governance Continuity

```text
DGC =
copied, merged, or transformed outputs preserving required policy
/
all controlled derivative operations
```

### Governance Failure Visibility

```text
GFV =
failed policy-application events visibly disclosed before sharing
/
all seeded policy-application failures
```

## Why It Matters for Creator Workflows

This update directly changes the Deep Drift DOCX/PDF benchmark. Generated documents should be evaluated for source-content fidelity, citations, format fidelity, provenance, sensitivity-label inheritance, and derivative-export continuity.

A serious generated-document benchmark should ask:

```text
WHAT POLICY DID THIS PDF INHERIT?
WHY?
FROM WHICH SOURCE?
DID CONVERSION CHANGE IT?
```

Copy-paste remains a particularly important fracture point because file-level governance may not automatically survive content extraction into a new destination. Deep Drift should therefore distinguish **file-level governance** from **content-level governance**.

## Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing consumer-memory release surfaced after the Claude memory update already logged. |
| Skills | No newer general Skill launch surfaced in the latest scan. |
| Mini-app builders | No new builder launch displaced already logged agent-runtime and cross-app agent updates. |
| Chat-to-document export | Material new-to-log governance layer: generated files can inherit source sensitivity labels automatically. |
| DOCX / PDF generation | Material new-to-log issue: generated document quality must include preservation of source governance across file creation and conversion. |
| Copy-paste/export fixes | No newer direct copy fix surfaced; governance loss during copy/export becomes a new Deep Drift test case. |
| Broader creator workflow | Material trend: generative systems are beginning to propagate policy metadata together with content. |

## Deep Drift Research Position

The weak description is:

> Copilot-generated files inherit sensitivity labels.

The serious description is:

> Governance metadata is beginning to propagate through generative transformations, so the output artifact inherits policy obligations from the sources that informed it rather than becoming a clean, unlabeled derivative.

Therefore:

```text
CONTENT PRESERVED
!= GOVERNANCE PRESERVED

NEW FILE
!= NEW PERMISSION STATE

SUMMARIZED
!= DECLASSIFIED

AI WATERMARK
!= SENSITIVITY LABEL

FILE GENERATED
!= FILE GOVERNANCE-COMPLETE
```

The serious Deep Drift requirement is:

> **Every generated artifact should preserve or expose its source-governance states, the rule used to derive its effective protection level, the source objects that caused escalation, any AI-origin marking policy, all label-application failures, and whether later export or conversion preserved equivalent governance.**

## Evidence Boundary

Platform facts are grounded in Microsoft's first-party Microsoft 365 Copilot release notes, specifically the 1 July 2026 release cluster, re-verified on 29 August 2026.

Microsoft states that generated files now inherit the highest sensitivity label detected in referenced source data; previously generated files did not inherit those labels automatically. Microsoft also documents user notification when the label cannot be applied and policy-controlled AI-origin watermarking for video/audio with separate image controls.

GAGIF, SALF, HSPF, GLV, CFPPF, AOWF, GFDF, the failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Microsoft Learn, **Microsoft 365 Copilot release notes - July 1, 2026**.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
2. OpenAI Help Center, **ChatGPT Release Notes**, checked 29 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes
3. Anthropic Help Center, **Claude release notes**, checked 29 August 2026.  
   https://support.claude.com/en/articles/12138966-release-notes
4. Google Workspace Updates, checked 29 August 2026.  
   https://workspaceupdates.googleblog.com/
5. Notion, **Releases**, checked 29 August 2026.  
   https://www.notion.com/releases
6. Microsoft Learn / Azure Databricks, **AI/BI and Genie One release notes 2026**, checked 29 August 2026.  
   https://learn.microsoft.com/en-us/azure/databricks/ai-bi/release-notes/2026

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**