# Deep Drift Research Update — APIF

## Artifact Policy Inheritance Fidelity

**Research date:** 5 September 2026  
**Freshness classification:** Newly logged structural update. Microsoft released the generated-file label inheritance change in its July 1, 2026 Microsoft 365 Copilot batch, while current Microsoft data-protection documentation continues to describe the same inheritance behavior.

## Executive finding

AI-generated files are no longer policy-neutral descendants of their sources.

Microsoft 365 Copilot now evaluates source material used to generate a file and, where supported, applies the highest-priority sensitivity label found in that source data. Microsoft says this was changed because previously generated files did not automatically inherit source labels. If a label cannot be applied, Copilot warns the user before the file is shared or stored.

```text
SOURCE A
Public
   \
    \
SOURCE B ----> AI GENERATION ----> GENERATED FILE
Confidential                     inherits Confidential
    /
   /
SOURCE C
General
```

Therefore:

```text
CONTENT DERIVATION
!= POLICY NEUTRALITY

SOURCE LABEL
!= SOURCE-ONLY METADATA

GENERATED FILE
!= NEW GOVERNANCE BLANK SLATE

VISIBLE TEXT
!= COMPLETE ARTIFACT POLICY STATE

SAME CONTENT
!= SAME SHARING PERMISSION STATE
```

The new provenance object is the **artifact policy lineage**.

## New node

### Artifact Policy Inheritance Fidelity (APIF)

Minimum state model:

```text
artifact_id
artifact_type
artifact_format
generation_surface
source_object_ids
source_labels
source_label_priorities
source_protection_settings
selected_highest_label
inheritance_supported
inheritance_event_time
inherited_label
inherited_protection_state
label_application_failure
user_warning_state
manual_override_event
override_identity
export_event
target_surface
post_export_label_state
post_export_protection_state
```

## 1. Generated files can inherit governance from source evidence

Microsoft documents that when Microsoft 365 Copilot generates files, it evaluates the referenced source data and automatically applies the highest sensitivity label it detects.

This changes the old provenance model:

```text
SOURCES
-> CONTENT
-> GENERATED FILE
```

into:

```text
SOURCES
-> CONTENT
-> POLICY CLASSIFICATION
-> GENERATED FILE
```

The artifact inherits not only semantic information but also governance state.

## 2. Highest-label inheritance is a source aggregation rule

When multiple labeled sources are used, Microsoft uses the highest-priority label for inheritance where supported.

That makes source composition causally relevant even if the most sensitive source contributes only a small portion of the generated text.

```text
Source A = General
Source B = Confidential
Source C = Public

Generated artifact
-> Confidential
```

Deep Drift should therefore preserve the complete source-label set, not merely the label that appears on the final file.

## 3. A file's policy can reveal ancestry that its visible content does not

Two documents can contain nearly identical prose while carrying different governance states because they were grounded on different source sets.

```text
DOC A:
same paragraph
source set = Public + General
label = General

DOC B:
same paragraph
source set = Public + Confidential
label = Confidential
```

So:

```text
TEXTUAL EQUIVALENCE
!= GOVERNANCE EQUIVALENCE
```

This is important for artifact comparison.

## 4. Sensitivity label inheritance is not merely a visual badge

Microsoft's current architecture documentation states that sensitivity labels and associated protection settings can be enforced during grounding and content generation. When supported, newly generated content inherits the highest-priority label, and protection can remain enforced even when labeled files are stored outside the Microsoft 365 tenant.

Therefore Deep Drift should distinguish:

```text
VISIBLE LABEL
from
ENFORCED PROTECTION STATE
```

A badge is presentation. Encryption, usage rights, or other protection settings are execution constraints.

## 5. Generated-file provenance now includes policy ancestry

The final file should be treated as a descendant of:

```text
source content
source access state
source sensitivity labels
label-priority configuration
Copilot generation event
resulting protection state
```

A bibliography alone cannot reconstruct this.

## 6. Label priority is organization-configured

Microsoft Purview sensitivity labels have priority ordering configured by the organization.

Therefore:

```text
"HIGHEST LABEL"
!= UNIVERSAL SEMANTIC CONSTANT
```

The result depends on the organization's label taxonomy and priority configuration.

Two organizations can use identical source text and produce files governed by different label structures.

## 7. Manual override creates a second policy event

Microsoft's Purview documentation notes that users can replace or remove inherited labels where organizational policy allows it.

So a complete lineage can be:

```text
SOURCE LABEL
-> AUTO-INHERITED LABEL
-> HUMAN OVERRIDE
-> FINAL LABEL
```

The final file alone may not explain that the policy was originally stricter.

Deep Drift should preserve inherited and final labels separately.

## 8. Generation failure can be a policy failure rather than a model failure

Microsoft says users receive a notification if Copilot cannot apply the appropriate label.

That means a workflow can stop or require remediation because of governance state even when the model successfully generated the content.

```text
CONTENT GENERATION = SUCCESS
LABEL APPLICATION = FAILURE
WORKFLOW COMPLETION = BLOCKED / WARNED
```

These outcomes need separate fields.

## 9. DOCX/PPTX-style editable artifacts and PDF require different testing

Microsoft explicitly documents sensitivity-label inheritance for newly created Word, PowerPoint, and Outlook content, and its broader Copilot release notes describe generated files inheriting labels.

PDF labeling is also supported in Microsoft 365 environments when the relevant SharePoint/Purview capabilities are enabled, but Deep Drift should not assume every PDF export preserves every inherited protection property automatically.

The correct benchmark is:

```text
GENERATED EDITABLE FILE
-> EXPORT / CONVERSION
-> PDF
-> CHECK LABEL
-> CHECK ENFORCEMENT
```

not:

```text
label existed before export
therefore
label survived PDF perfectly
```

## 10. Copy-paste can sever policy lineage

Content copied from a protected generated artifact into a new unlabeled destination can preserve the words while losing source-policy context.

```text
CONFIDENTIAL GENERATED DOC
-> COPY TEXT
-> NEW DOCUMENT
-> POLICY STATE MAY DIFFER
```

That creates a classic Deep Drift split:

```text
CONTENT SURVIVAL
!= GOVERNANCE SURVIVAL
```

Copy-paste testing should therefore include both formatting fidelity and policy-lineage fidelity.

## 11. Chat-to-document workflows now transmit classification state

Microsoft's broader creator workflow increasingly moves notebook context, files, emails, meetings, and other sources into generated documents.

As chat-to-document creation becomes automatic, source sensitivity is no longer merely something the user must remember manually.

The platform is beginning to propagate governance downstream with the artifact.

This is a significant shift from:

```text
AI CREATES CONTENT
USER GOVERNS FILE
```

toward:

```text
AI CREATES CONTENT
+
SYSTEM PROPAGATES SOURCE GOVERNANCE
```

## 12. Artifact comparison needs a governance dimension

Deep Drift artifact benchmarking should now score:

```text
semantic fidelity
visual fidelity
structural fidelity
format fidelity
policy fidelity
```

A file can be semantically and visually identical yet governance-incompatible.

## 13. Export is a policy-transition boundary

Every export or transformation should be treated as a possible policy-state transition:

```text
Word
-> PDF

PowerPoint
-> PDF

Copilot artifact
-> downloaded file

protected file
-> external storage
```

For each transition, record:

```text
label before
protection before
label after
protection after
override / failure / warning
```

## Fresh category scan

| Area | Status | Deep Drift implication |
|---|---|---|
| Memory | No stronger unlogged delta after MSMRF | Memory-schema migration remains the latest major memory event |
| Skills | No stronger unlogged delta after SSVPF/SGOPF | Skill version and governance nodes remain current |
| Mini-app builders | No stronger unlogged delta | MCP/Apps SDK deployment nodes remain current |
| Chat-to-document | **Important structural implication** | Generated files can inherit source governance automatically |
| DOCX/PDF | **Major provenance implication** | Editable files can inherit labels; PDF/export preservation must be tested separately |
| Copy-paste/export | **Major provenance implication** | Words can survive while source classification lineage does not |
| Creator workflow | **Major structural trend** | AI artifacts increasingly carry policy ancestry, not just content ancestry |

## New failure classes

### Content-Equals-Policy Fallacy
Assuming two textually identical files are governance-equivalent.

### Source-Label-Isolation Fallacy
Assuming sensitivity classification applies only to the original source.

### Final-Label-Equals-Inherited-Label Error
Ignoring user override or post-generation relabeling.

### Export-Equals-Protection-Preservation Fallacy
Assuming conversion to PDF or another format automatically preserves label enforcement.

### Copy-Equals-Governance-Transfer Fallacy
Assuming copied text carries the same policy state as the protected source artifact.

### Policy-Failure-as-Model-Failure Error
Attributing a blocked or warned file workflow to generation capability when label application or information-protection policy caused the interruption.

## Deep Drift benchmark additions

**Artifact Policy Inheritance Fidelity (APIF)**  
Does the generated artifact inherit the correct highest-priority source classification where supported?

**Source Label Set Fidelity (SLSF)**  
Can the complete set of source labels and their priorities be reconstructed?

**Protection Enforcement Fidelity (PEF)**  
Does inherited protection remain effective after generation, storage, download, or export?

**Policy Transition Fidelity (PTF)**  
Can each relabel, override, conversion, export, and storage transition be reconstructed?

**Copy Governance Preservation Fidelity (CGPF)**  
What classification or protection survives when content is copied into a new destination?

## DRPA-1.0 protocol additions

### ARTIFACT POLICY LINEAGE RULE

> Preserve source labels, label priority configuration, inherited label, associated protection state, generation event, and final artifact policy separately. Artifact provenance is incomplete when it records source content but omits source governance.

### HIGHEST-LABEL SOURCE SET RULE

> When an AI system derives an artifact from multiple labeled sources, preserve the full source-label set and the rule used to select the effective inherited label. Do not archive only the final label.

### POLICY OVERRIDE SEPARATION RULE

> Preserve automatically inherited classification separately from later human or system relabeling. The final label must not overwrite evidence of the policy state initially inherited from the source set.

### EXPORT POLICY TRANSITION RULE

> Treat DOCX-to-PDF, PPTX-to-PDF, download, copy, external storage, and other format/location changes as policy-transition boundaries. Verify label and enforcement state after the transition rather than inferring preservation from the source artifact.

### POLICY FAILURE CLASSIFICATION RULE

> Distinguish generation success from classification/protection application success. A governance warning, blocked label application, or access-right failure must not be reported as model-generation failure without evidence.

## Eir'an state-flow addition

```text
SOURCE:
file / email / meeting / notebook
label
priority
protection

GROUND:
authorized source access

GENERATE:
document / presentation / file

INHERIT:
highest source label
protection state

OVERRIDE:
human / policy relabel

EXPORT:
DOCX
PPTX
PDF
copy
external storage

VERIFY:
label
enforcement
access
lineage
```

## Canonical Deep Drift requirement

> Treat generated artifacts as possible descendants of source governance as well as source content. Preserve classification ancestry, protection state, overrides, and export transitions separately.

## Deep Drift principle

> **The file can inherit the secret even when the sentence looks ordinary.**

Operationally:

> **Track what the artifact is allowed to do, not only what it says.**

## Sources

1. Microsoft Learn. **Release Notes for Microsoft 365 Copilot — July 1, 2026.** Documents that Copilot-generated files automatically inherit the highest sensitivity label detected in referenced source data, and that users are notified when a label cannot be applied.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

2. Microsoft Learn. **Microsoft Copilot data protection architecture.** Current documentation states that Copilot respects sensitivity labels and encryption during grounding and generation, that newly generated content inherits the highest-priority label when supported, and that protection settings can remain enforced outside the Microsoft 365 tenant.  
   https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-architecture-data-protection-auditing

3. Microsoft Learn. **Use Microsoft Purview to manage data security and compliance for Microsoft 365 Copilot and Copilot Chat.** Documents label inheritance for newly created Word, PowerPoint, and Outlook content, highest-priority selection when multiple files are used, and possible user override where policy permits.  
   https://learn.microsoft.com/en-us/purview/ai-m365-copilot

4. Microsoft Learn. **Security guidance — Protect data.** Documents separate enablement requirements for sensitivity labels on SharePoint/OneDrive files and PDF labeling, underscoring that PDF policy behavior must be verified rather than assumed.  
   https://learn.microsoft.com/en-us/purview/zero-trust-purview-protect-data

## Research status

**Node status:** New to the Deep Drift research log.  
**Duplicate check:** Repository code search found no existing node for Copilot generated-file sensitivity-label inheritance or artifact policy lineage.  
**Relationship to prior nodes:** Extends LHACF (long-horizon artifacts), CMARF (cross-model artifact revision), CPWMF (workspace migration), SRTSF (format round-trip), and WADGF (workspace governance). APIF is distinct because it treats governance metadata and enforcement as inherited artifact state derived from source evidence.  
**Freshness:** The feature itself appeared in Microsoft's July 1, 2026 release batch; current September 2026 Microsoft documentation still confirms the architecture. This run classifies it as a newly logged structural gap rather than a same-day launch.
