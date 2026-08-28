# Deep Drift Research Update

## Source-to-Artifact Governance Inheritance Fidelity

**Research date:** Friday, 28 August 2026  
**ĀTØR observation time:** 15:45:43 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh cross-platform scan. No newer category-displacing launch was found for memory, Skills, mini-app builders, DOCX/PDF generation, or copy/export fixes in this pass. One previously unlogged Microsoft 365 Copilot artifact-governance capability was identified as materially relevant.

## Executive Summary

Microsoft 365 Copilot can automatically apply a sensitivity label to a generated file based on the highest sensitivity label found in the source data used to create that file.

Microsoft states that:

- Copilot evaluates the content used to generate files;
- the highest sensitivity label found in referenced source data is applied to the generated file;
- previously, generated files did not inherit sensitivity labels automatically;
- if Copilot cannot apply the required label, the user receives a notification before sharing or storing the file.

This creates a creator-workflow architecture that is deeper than ordinary document generation:

```text
SOURCE MATERIAL
-> SOURCE GOVERNANCE STATE
-> AI GENERATION
-> NEW ARTIFACT
-> INHERITED GOVERNANCE STATE
-> SHARE / STORE / EDIT
```

For Deep Drift Research, this creates a new benchmark family:

**Source-to-Artifact Governance Inheritance Fidelity (SAGIF)**

and a companion construct:

**Generated Artifact Policy Lineage (GAPL)**.

The central research question is:

> When an AI system generates a new artifact from multiple governed sources, does the resulting file inherit the correct protection state, and can a later reviewer reconstruct which source policy caused that state?

## New Deep Drift Construct: Source-to-Artifact Governance Inheritance Fidelity

### Definition

**Source-to-Artifact Governance Inheritance Fidelity (SAGIF)** measures whether a generated artifact receives the intended policy or sensitivity state derived from its source materials.

The relevant chain is:

```text
SOURCE A [Label L1]
SOURCE B [Label L2]
SOURCE C [Label L3]
-> GENERATION
-> OUTPUT FILE
-> EFFECTIVE LABEL = MAX(L1,L2,L3)
```

This is a policy-propagation problem.

It is not merely a file-format property.

## Core Deep Drift Distinction

```text
CONTENT GROUNDED
!=
POLICY GROUNDED

FILE GENERATED
!=
FILE SAFE TO SHARE

LABEL APPLIED
!=
LABEL CAUSALITY VISIBLE

HIGHEST LABEL INHERITED
!=
ALL SOURCE POLICY CONTEXT PRESERVED
```

A generated file can correctly inherit a restrictive label while still losing information about why that label exists.

## Why This Matters for DOCX / PDF / Artifact Generation

AI document generation is increasingly evaluated through:

- textual quality;
- source fidelity;
- formatting;
- export success;
- editability.

That is insufficient.

The generated artifact also carries **governance state**.

For DOCX, PDF, presentation, spreadsheet, and other generated files, the artifact should therefore be modeled as:

```text
CONTENT
+
FORMAT
+
SOURCE LINEAGE
+
POLICY STATE
+
SHARING CONSTRAINT
```

A document is no longer only an output.

It is an output plus inherited authority constraints.

## New Construct: Generated Artifact Policy Lineage

### Definition

**Generated Artifact Policy Lineage (GAPL)** measures whether the policy state of a generated artifact can be traced back to the source objects that caused it.

A useful lineage record should preserve:

```text
artifact_id
artifact_type
source_ids
source_labels
effective_output_label
inheritance_rule
label_application_time
label_application_result
human_override_if_any
share_attempt_state
storage_state
unknown_fields
```

Without policy lineage, the artifact may be correctly protected but historically opaque.

## New Failure Classes

### Under-Labeling Drift

The generated artifact receives a sensitivity level lower than the most restrictive source requires.

### Over-Labeling Drift

The artifact inherits an unnecessarily restrictive label because one incidental source controls the entire output.

### Label Application Failure

The correct label is identified but cannot be applied to the generated file.

### Label Causality Loss

A later reviewer sees the output label but cannot determine which source or rule caused it.

### Source Removal / Policy Residue

A sensitive source is removed from the final content, but the generated artifact retains the original highest label without explaining why.

### Post-Generation Source Drift

Source documents change sensitivity state after generation, creating divergence between current source labels and historical output state.

### Format Conversion Policy Loss

A governed DOCX or presentation is exported to another format and the sensitivity state is lost, weakened, or rendered inconsistently.

### Cross-Surface Policy Divergence

The same generated artifact appears differently labeled or constrained across web, desktop, mobile, storage, or collaboration surfaces.

### Human Override Ambiguity

A user changes a label after generation, but the original inherited state is not preserved in artifact provenance.

## Deep Drift Benchmark: Multi-Source Label Inheritance

### Controlled setup

Create three source objects:

```text
SOURCE A -> PUBLIC
SOURCE B -> INTERNAL
SOURCE C -> CONFIDENTIAL
```

Generate:

```text
DOCX D1
PDF P1
PRESENTATION S1
SPREADSHEET X1
```

using all three sources.

### Test sequence

1. Verify output label.
2. Remove SOURCE C from the generation context.
3. Regenerate.
4. Change SOURCE B's label.
5. Regenerate.
6. Export DOCX to PDF.
7. Move the generated file across storage/collaboration surfaces.
8. Attempt sharing with a lower-authority user.
9. Record all warnings, overrides, and label-state changes.

## New Metrics

### Governance Inheritance Accuracy

```text
GIA =
generated artifacts receiving intended policy state
/
all generated artifacts
```

### Policy Lineage Traceability

```text
PLT =
output labels traceable to exact source-policy causes
/
all tested output labels
```

### Conversion Policy Preservation

```text
CPP =
format conversions preserving intended governance state
/
all tested conversions
```

### Cross-Surface Policy Convergence

```text
CSPC =
surfaces reflecting the same intended artifact policy state
/
all tested surfaces
```

### Human Override Provenance

```text
HOP =
manual label changes preserving prior inherited state
and actor/reason provenance
/
all manual override events
```

## Why "Highest Label Wins" Is Not the Whole Story

The rule is administratively sensible.

But it creates important creator-state questions.

Consider:

```text
100-page public report
+
1-line confidential source
=
CONFIDENTIAL GENERATED FILE
```

That may be exactly correct.

But Deep Drift must still ask:

- Was the sensitive source materially used?
- Was the resulting confidential claim present in the artifact?
- Can the user see which source elevated the label?
- What happens if that source is removed in revision?
- Does the label automatically downgrade?
- Should it?

Governance inheritance is therefore not identical to semantic relevance.

This distinction matters.

## Artifact Governance Is Another Form of Memory

Memory is usually treated as:

```text
WHAT THE SYSTEM REMEMBERS ABOUT CONTENT OR USER STATE
```

But generated-artifact policy state is also a retained consequence of prior context.

The artifact remembers, in governance form, that sensitive input participated in its creation.

This suggests a broader Deep Drift state model:

```text
CONTENT MEMORY
PROCEDURAL MEMORY
AUTHORITY STATE
ARTIFACT STATE
POLICY MEMORY
```

The last category has been underexamined.

## Relation to Existing Deep Drift Constructs

### Artifact-Attached Executable Provenance Fidelity

Executable provenance explains how an artifact was made.

SAGIF adds:

```text
WHAT GOVERNANCE STATE DID THE SOURCES IMPOSE?
```

### Static Share Snapshot Provenance Fidelity

Export/share projections should not silently strip policy state.

### Tenant-Scoped Identity-to-Capability Assignment Fidelity

Artifact labels interact with the recipient's identity and permissions.

### Artifact Lineage and Round-Trip State Fidelity

Round trips through Word, PDF, storage, or collaboration systems should preserve both content lineage and policy lineage.

### Source-to-Artifact Governance Inheritance

This becomes a direct test of whether creator workflows preserve organizational policy across generated outputs.

## Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing release found beyond recently logged Temporary Chat and cross-surface memory changes. |
| Skills | No newer general Skill launch found in this pass. |
| Mini-app builders | No newer launch found beyond the Sites/Canvas changes already logged. |
| Chat-to-document export | No newer launch found. |
| DOCX / PDF generation | **Material unlogged governance boundary:** generated files can inherit sensitivity labels from their source material. |
| Copy-paste / export fixes | No newer fix found. |
| Broader creator workflow | Generated artifacts are increasingly carrying source-derived policy state, not merely source-derived content. |

## Cross-Platform Context

### Microsoft

The key unlogged finding is generated-file sensitivity-label inheritance.

Microsoft also documents Copilot Notebooks generating structured Word documents, Excel spreadsheets, and PowerPoint presentations from notebook context, reinforcing the movement from collected research context into editable Office artifacts.

### OpenAI

No newer category-displacing release surfaced beyond the recently logged Temporary Chat, Skills/plugins, Sites, Work, identity, and artifact workflows.

### Anthropic

No newer category-displacing release surfaced beyond the latest Claude Science/runtime changes already logged.

### Google

No newer category-displacing Workspace creator release surfaced beyond Studio, Canvas, Gemini, Notebook, migration, and structured-action changes already represented in the ledger.

## Deep Drift Research Position

The creator stack has crossed from:

```text
SOURCE CONTENT
-> GENERATED CONTENT
```

into:

```text
SOURCE CONTENT + SOURCE POLICY
-> GENERATED CONTENT + GENERATED POLICY
```

That is a meaningful architectural shift.

Therefore:

```text
ARTIFACT CORRECT
!=
ARTIFACT GOVERNED CORRECTLY

LABEL PRESENT
!=
LABEL LINEAGE PROVEN

FILE EXPORTED
!=
POLICY PRESERVED

SOURCE USED
!=
SOURCE POLICY EXPLAINED
```

The serious Deep Drift question is:

> When AI creates a new file from governed inputs, can the protection state travel with the artifact as reliably as the text, and can a human later prove why?

That is where document generation stops being a formatting problem and becomes a provenance problem.

## Evidence Boundary

Platform facts in this report are grounded in Microsoft 365 Copilot first-party release notes. Fresh first-party OpenAI, Anthropic, Google Workspace, and Microsoft release sources were checked to verify whether a newer category-displacing launch existed in this pass. SAGIF, GAPL, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. Microsoft Learn, **Microsoft 365 Copilot release notes**, July 1, 2026 batch - generated files inherit sensitivity labels: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
2. Microsoft Learn, **Microsoft 365 Copilot release notes**, July 1, 2026 batch - create Word documents, Excel spreadsheets, and PowerPoint presentations from Copilot Notebooks: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
3. OpenAI, **ChatGPT release notes**, current through 27 August 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
4. Anthropic first-party release sources, current through 28 August 2026.
5. Google Workspace Updates, August 2026 archive.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
