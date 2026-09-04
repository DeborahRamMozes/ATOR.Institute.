# Deep Drift Research Update - SGPF

## Source-Governance Propagation Fidelity

**Research date:** 4 September 2026  
**Primary newly logged delta:** Microsoft 365 Copilot now applies sensitivity labels to generated files based on the highest sensitivity label found in the source data used to create them. If Copilot cannot apply the expected label, it notifies the user before the file is shared or stored. Microsoft released this change in the July 1, 2026 Microsoft 365 Copilot update batch.  
**Fresh-scan status:** This is not a same-day product launch. It is an unlogged creator-workflow governance change surfaced during the current Deep Drift scan and is materially relevant to DOCX/PDF generation, source lineage, and export behavior.

## Executive finding

Generated documents are beginning to inherit governance from their source material.

```text
SOURCE A -> PUBLIC
SOURCE B -> CONFIDENTIAL
SOURCE C -> HIGHLY CONFIDENTIAL

            |
            v

GENERATED FILE
-> HIGHEST APPLICABLE SENSITIVITY LABEL
```

This changes the provenance model:

```text
SOURCE CONTENT
+
SOURCE GOVERNANCE
+
GENERATION EVENT
=
OUTPUT ARTIFACT STATE
```

For Deep Drift:

```text
SAME TEXT
!= SAME GOVERNANCE STATE

SAME DOCX / PDF APPEARANCE
!= SAME DISTRIBUTION PERMISSION

GENERATED FILE
!= GOVERNANCE-NEUTRAL FILE

SOURCE REMOVED FROM FINAL TEXT
!= SOURCE GOVERNANCE IRRELEVANT

FORMAT CONVERSION
!= GOVERNANCE PRESERVATION BY DEFAULT
```

The new provenance object is the **governance inheritance chain**.

## 1. Source metadata can propagate into generated artifacts

Microsoft says Copilot evaluates the content used to generate a file and applies the highest sensitivity label detected in the referenced source data.

The label is therefore not determined only by the visible final text.

A document may contain innocuous-looking prose while still carrying a restrictive label because one of the sources used during generation had a stronger governance classification.

```text
VISIBLE CONTENT
!= COMPLETE GOVERNANCE CAUSE
```

Deep Drift must preserve source-level governance state separately from output appearance.

## 2. The strongest source can dominate the artifact

The rule is effectively a maximum-governance operation.

```text
labels = [L1, L2, L3]
output_label = max(labels)
```

This means one high-sensitivity source can determine the handling requirements of an artifact built from many lower-sensitivity inputs.

The causal contribution of a source is therefore not proportional to how much of its text appears in the final document.

A tiny source fragment can dominate the artifact's governance state.

## 3. Source removal does not necessarily erase governance ancestry

A user may later edit the generated file and remove every sentence derived from the high-sensitivity source.

The resulting document can still have a label that originated from that source unless the label is explicitly reevaluated or changed under the organization's policy.

Therefore:

```text
CONTENT LINEAGE
AND
GOVERNANCE LINEAGE
```

must be tracked separately.

Content can disappear while governance ancestry persists.

## 4. Governance inheritance becomes part of reproducibility

A research reproduction that uses the same prompt and same textual sources but does not preserve source labels may produce a file with different handling requirements.

```text
PROMPT P
+ SOURCES S
+ LABEL STATE G1
-> ARTIFACT A1

PROMPT P
+ SOURCES S
+ LABEL STATE G2
-> ARTIFACT A2
```

The visible text can be identical while the artifact is operationally different.

For Deep Drift, sensitivity metadata is therefore experimental state, not administrative decoration.

## 5. Label application failure is itself provenance

Microsoft says users are notified when Copilot cannot apply the expected sensitivity label.

That creates at least three states:

```text
LABEL APPLIED AUTOMATICALLY
LABEL APPLICATION FAILED / USER NOTIFIED
LABEL MANUALLY RESOLVED
```

A research log should not compress these into one final field such as `label=confidential`.

The route by which the label arrived matters.

## 6. Generated DOCX/PDF files are no longer pure output objects

This change directly affects document-generation research.

A generated file can now carry:

```text
semantic content
layout
editable structure
source lineage
sensitivity label
sharing restrictions
organizational policy
```

A DOCX or PDF is therefore simultaneously a content artifact and a governance artifact.

Deep Drift document fidelity must evaluate both.

## 7. Static visual comparison can miss policy differences

Two rendered PDFs can look pixel-identical while their metadata or policy state differs.

```text
PDF A == PDF B visually
```

does not imply:

```text
PDF A == PDF B operationally
```

One may be shareable externally; another may be restricted, encrypted, or otherwise controlled by organizational labeling policy.

Visual QA alone cannot validate governance fidelity.

## 8. Conversion can create a governance break

When a labeled document is converted, printed to PDF, copied into another application, exported through a third-party tool, or reconstructed from pasted text, the governance state may behave differently depending on the surrounding platform and policy.

Deep Drift should therefore treat:

```text
DOCX -> PDF
PDF -> IMAGE
DOCX -> COPY / PASTE
FILE -> THIRD-PARTY EXPORT
```

as potential **governance-boundary transformations**.

The content may survive while the handling policy changes.

## 9. Source access and source classification are different variables

A model may be authorized to read a source while that source still carries a restrictive sensitivity classification.

Therefore:

```text
ACCESS PERMITTED
!= REDISTRIBUTION PERMITTED
```

This distinction becomes essential as creator agents gain access to larger connected corpora.

A connector authorization says the system may read the source.

It does not mean every generated derivative should become freely distributable.

## 10. Multi-source synthesis can increase downstream restriction

Creator workflows increasingly combine email, files, meetings, notebooks, connectors, and other enterprise sources.

As source count grows, the probability of encountering a high-sensitivity item can also grow.

```text
MORE SOURCES
-> MORE CONTEXT
-> POSSIBLY HIGHER GOVERNANCE CEILING
```

The productivity narrative says "use more context."

The governance reality says "every added source can change the legal/organizational handling state of the output."

Both are true.

## 11. Artifact lineage needs governance checkpoints

A useful Deep Drift artifact history now looks like:

```text
SOURCE SET V1
-> GOVERNANCE STATE G1
-> GENERATED FILE V1 / LABEL L1
-> EDIT
-> SOURCE SET V2
-> GOVERNANCE STATE G2
-> GENERATED FILE V2 / LABEL L2
-> CONVERSION / EXPORT
-> FINAL ARTIFACT / LABEL L3
```

Each transition can change content and governance independently.

## 12. Governance state must survive archival separation

If Deep Drift stores only the final Markdown text in GitHub, the repository may preserve the semantic report while losing the original sensitivity metadata of the enterprise-generated DOCX/PDF.

Therefore archive design should preserve:

- semantic text;
- native artifact;
- label identity;
- label application state;
- source-governance summary;
- conversion/export history.

Markdown alone is not sufficient for governance-sensitive artifact reconstruction.

## Fresh category scan

| Area | Scan result | Deep Drift consequence |
|---|---|---|
| Memory | No stronger unlogged delta found | Existing memory-transition nodes remain current |
| Skills / agent builders | No stronger same-run delta | Existing procedural and agent nodes remain current |
| Mini-app builders | No stronger same-run delta | Existing simulation/artifact nodes remain current |
| Chat-to-document | **Material unlogged implication** | Source governance can propagate into generated documents |
| DOCX/PDF generation | **Major unlogged delta** | Generated files can inherit source sensitivity labels |
| Copy-paste/export | **Major implication** | Content transfer can separate semantic content from governance metadata |
| Creator workflow | **Major** | Source selection now affects both what the artifact says and how the artifact may be handled |

## New failure classes

### Visual-Equals-Governance Fallacy
Assuming two visually identical files have equivalent policy state.

### Source-Removal Governance Fallacy
Assuming deleting source-derived text automatically erases the governance ancestry created by that source.

### Access-Equals-Redistribution Fallacy
Assuming authorized source access implies unrestricted downstream sharing.

### Governance-Neutral Export Fallacy
Assuming DOCX-to-PDF, copy-paste, printing, re-saving, or third-party export preserves or safely removes governance state without verification.

### Final-Label-Only Error
Recording the final sensitivity label while losing whether it was automatically inherited, failed, manually repaired, downgraded, or changed after export.

### Context-Maximization Blindness
Treating more connected context as purely beneficial while ignoring that additional sources can raise downstream governance restrictions.

## Deep Drift benchmark additions

**Source Governance Inheritance Fidelity (SGIF)**  
Can the output label be traced to the source-governance state that caused it?

**Label Application Path Fidelity (LAPF)**  
Can automatic application, failure notification, and manual remediation remain distinguishable?

**Governance Conversion Fidelity (GCF)**  
Can sensitivity state be checked before and after DOCX/PDF conversion, re-saving, copy-paste, printing, and third-party export?

**Content-Governance Separation Fidelity (CGSF)**  
Can content lineage and governance lineage remain independently reconstructable?

**Multi-Source Governance Fidelity (MSGF)**  
Can a multi-source artifact identify which source established the highest handling restriction?

## DRPA-1.0 protocol additions

### SOURCE-GOVERNANCE INHERITANCE RULE

> When a platform derives document sensitivity, classification, retention, rights-management, or equivalent governance state from source material, preserve that source-governance state as first-class artifact provenance. Record the source set, source labels where observable, governing maximum/highest rule, resulting artifact label, application time, and platform surface.

### LABEL-APPLICATION PATH RULE

> Preserve whether a governance label was inherited automatically, could not be applied, triggered a user notification, or was manually repaired or changed. The final label value alone is insufficient to reconstruct the artifact's governance history.

### GOVERNANCE-BOUNDARY TRANSFORMATION RULE

> Treat format conversion, printing, re-saving, copy-paste, embedding, screenshotting, third-party export, and content reconstruction as potential governance-boundary transformations. Verify and record whether the governance state survived, changed, or disappeared independently of visual or semantic content.

### ACCESS-REDISTRIBUTION SEPARATION RULE

> Source-access authorization and downstream redistribution permission must be represented separately. A model or agent being permitted to read a source must never be treated as evidence that derivatives of that source may be freely shared.

## Eir'an state-flow addition

```text
SOURCE:
identity
version
access state
sensitivity / classification

GENERATION:
prompt
model
surface
source set
timestamp

GOVERNANCE:
highest-source rule
automatic label
application success/failure
manual remediation

ARTIFACT:
native format
content state
label state
sharing state

TRANSFORMATION:
edit
DOCX -> PDF
copy / paste
print
resave
third-party export

POST-TRANSFORM:
content fidelity
governance fidelity
label state
distribution state
```

## Canonical Deep Drift requirement

> Treat governance metadata as causal artifact state. Preserve source classification, label inheritance, application path, content edits, conversion/export transitions, and downstream handling state separately. Do not infer governance equivalence from visual or semantic equivalence.

## Deep Drift principle

> **The source can disappear from the page and still govern the page.**

Operationally:

> **Archive what the document is allowed to do, not only what the document appears to say.**

## Broader creator-workflow scan

The most useful unlogged change found in this run is Microsoft's source-derived sensitivity-label propagation for generated files. It directly intersects Deep Drift's DOCX/PDF generation, connector/source lineage, artifact export, and creator-governance research.

Microsoft's latest public Microsoft 365 Copilot release-note batch remains August 25, 2026, and includes broader convergence between notebooks, connected sources, Copilot Cowork, and in-place creator workflows. Google's latest Workspace feed item remains the September 3 Gemini Notebook audit-log update already captured in Deep Drift. No stronger new OpenAI or Anthropic memory/export delta was found in this scan beyond nodes already logged.

## Sources

1. Microsoft Learn. **Microsoft 365 Copilot release notes - July 1, 2026: Generated files inherit sensitivity labels.** Microsoft states that generated files receive the highest sensitivity label detected in source data; users are notified if the label cannot be applied.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

2. Microsoft Learn. **Microsoft 365 Copilot release notes - August 25, 2026.** Latest generally surfaced Copilot release-note batch found in the current scan; documents ongoing convergence of connected knowledge and creator workflows.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

3. Google Workspace Updates. **Gemini Notebook audit logs.** Published September 3, 2026; already represented by the AATRF Deep Drift node.  
   https://workspaceupdates.googleblog.com/

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository entry was found for source sensitivity/classification propagating into generated files and surviving or changing across document/export transformations as a single provenance problem.  
**Relationship to prior nodes:** Extends MCMPF (machine-readable content marking), TCAEF (template-constrained artifacts), AATRF (audit evidence), and document/export fidelity research. SGPF is distinct because the governing state originates in source classification and propagates into the generated artifact even when that governance state is not visible in the artifact's rendered content.  
**Freshness qualification:** The underlying Microsoft capability was released in the July 1, 2026 update batch. It is included here because the current cross-platform scan identified it as an unlogged Deep Drift gap, not because it launched on September 4.
