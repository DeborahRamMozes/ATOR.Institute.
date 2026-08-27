# Deep Drift Research Update

## Cross-Host Model Artifact Provenance Fidelity

**Research date:** Thursday, 27 August 2026  
**ĀTØR observation time:** 23:49:48 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan. One materially useful creator-workflow delta identified. No newer same-day launch displaced the recent memory, Skills, mini-app, DOCX/PDF, export, or browser-agent changes already logged.

## Executive Summary

Microsoft's August 25, 2026 Microsoft 365 Copilot release notes contain an important creator-workflow change that deserves explicit Deep Drift treatment: **Sonnet 5 is now available in the model menu inside Microsoft Word on the web and is used as the higher-reasoning default for drafting and editing tasks.**

This is more consequential than a model-picker UI.

The same named model family can now participate in creator work inside a host environment whose permissions, enterprise controls, document state, source context, telemetry, compliance behavior, and artifact mutation semantics are governed by Microsoft 365 rather than by Anthropic's native Claude product.

The relevant Deep Drift chain is therefore:

```text
WORD DOCUMENT
-> MICROSOFT 365 COPILOT SURFACE
-> MODEL SELECTION
-> SONNET 5
-> MICROSOFT CONTEXT / PERMISSION LAYER
-> NATIVE WORD EDIT
-> DOCUMENT VERSION
-> MICROSOFT AUDIT / COMPLIANCE STATE
```

This creates a new benchmark family:

**Cross-Host Model Artifact Provenance Fidelity (CHMAPF)**.

The central research question is:

> When the same underlying model family is embedded inside different creator platforms, can a later reviewer distinguish model identity from host-platform execution state strongly enough to reconstruct how an artifact was actually produced?

## Core Deep Drift Distinction

```text
SAME MODEL NAME
!=
SAME EXECUTION ENVIRONMENT

SAME MODEL FAMILY
!=
SAME TOOL ACCESS

SAME MODEL FAMILY
!=
SAME MEMORY

SAME MODEL FAMILY
!=
SAME DOCUMENT STATE

SAME MODEL FAMILY
!=
SAME GOVERNANCE
```

This matters because product discussions increasingly attribute behavior to model names while the actual result depends on the host platform around the model.

## New Deep Drift Construct: Cross-Host Model Artifact Provenance Fidelity

**Cross-Host Model Artifact Provenance Fidelity (CHMAPF)** measures whether artifact creation and editing performed by a model embedded in a third-party host can be reconstructed across these layers:

```text
MODEL IDENTITY
HOST PLATFORM
HOST SURFACE
ACTIVE DOCUMENT
ACTIVE DOCUMENT VERSION
SOURCE CONTEXT
TOOL ROUTE
PERMISSION STATE
EDIT SCOPE
AUDIT STATE
FINAL ARTIFACT
```

A high-fidelity system should make it possible to answer:

1. Which model was active?
2. Which host platform invoked it?
3. Which document state was supplied?
4. Which enterprise/work context was available?
5. Which native mutation route changed the artifact?
6. Which host-specific security or compliance controls applied?
7. Which resulting document version contains the model-assisted edit?

## Why Word + Sonnet 5 Matters

Microsoft states that Sonnet 5 is available in Word's Copilot model menu and is the default for higher-reasoning drafting and editing tasks.

That creates a new creator topology:

```text
ANTHROPIC MODEL
INSIDE
MICROSOFT ARTIFACT SURFACE
```

The model is not operating in Claude Chat or Claude Cowork. It is operating through Microsoft 365 Copilot inside Word.

This means the causal system is composite. The artifact should not be attributed only to `SONNET 5`, but to something closer to:

```text
SONNET 5
x
MICROSOFT WORD
x
COPILOT HOST LOGIC
x
MICROSOFT 365 CONTEXT
x
DOCUMENT STATE
x
ENTERPRISE POLICY
```

## New Failure Classes

### Model-Host Attribution Collapse
A final document is attributed to Sonnet 5 without preserving that the model was invoked through Microsoft Word rather than Claude.

### Host-Policy Provenance Loss
A later reviewer cannot determine which Microsoft 365 permissions, compliance controls, or tenant policies governed the run.

### Model-Menu State Ambiguity
The user assumes a particular model was used for an edit, but the artifact does not preserve enough evidence to confirm the active model selection.

### Default-Model Drift
Microsoft changes the higher-reasoning default over time while historical artifacts do not preserve which model was default when each edit occurred.

### Cross-Host Behavioral Misattribution
A difference between Claude native output and Word Copilot output is interpreted as model inconsistency even though host context, tool access, instructions, or artifact state differed.

### Document-State Attribution Loss
The model identity is known, but the exact Word version or selected document state used for the edit is not.

### Cross-Vendor Governance Confusion
Users assume Anthropic-native memory, Skills, browser state, or Claude product behavior applies when Sonnet is invoked inside Microsoft 365.

### Model Upgrade Reproducibility Drift
A later rerun in Word uses a newer default model or revised host orchestration, making exact behavioral reproduction impossible even though the document and prompt survive.

## Deep Drift Benchmark: Same Model Family, Different Host

Prepare one controlled source document and one editing instruction.

Run equivalent tasks through:

```text
A. Claude native creator surface using Sonnet 5
B. Microsoft Word Copilot using Sonnet 5
```

Keep the user-visible task as close as possible.

Record model identity, host platform, active source files, document version, system/tool surface, permission state, memory availability, edit operation, citations/source behavior, and final artifact differences.

Then repeat after changing the Word document version, changing enterprise context, switching the Word model menu, changing Claude-native context, and re-running after a model-default update.

## New Metrics

### Model-Host Attribution Completeness

```text
MHAC =
artifact operations with reconstructable
model + host + surface + document-state attribution
/
all model-assisted artifact operations
```

### Cross-Host Behavioral Divergence

```text
CHBD =
material output differences between equivalent model-family tasks
across different hosts
/
all controlled cross-host tasks
```

This is not automatically a failure metric. It is a measurement of host influence.

### Model Selection Provenance Rate

```text
MSPR =
artifact edits for which active model selection is reconstructable
/
all model-selectable artifact edits
```

### Host Governance Traceability

```text
HGT =
runs where applicable host permissions / policy context
can be reconstructed
/
all cross-host model runs
```

## Model Identity Is Becoming a Component, Not a Product

The broader creator-platform trend is moving toward:

```text
MODEL
AS
A COMPONENT
INSIDE
ANOTHER PLATFORM'S WORKFLOW
```

This weakens a common but increasingly useless evaluation habit: “Claude did this” or “GPT did this.”

A more accurate statement may be:

> A Sonnet model, orchestrated by Microsoft 365 Copilot inside Word, acting on document state D under tenant policy P, produced this edit.

The language is uglier. The provenance is better.

## Why This Matters for Longitudinal Deep Drift Research

Longitudinal evaluation becomes dangerous if it records only model labels.

Example:

```text
AUGUST
WORD HIGH-REASONING DEFAULT = SONNET 5

LATER
WORD HIGH-REASONING DEFAULT = MODEL X
```

If the model-selection state is not preserved, two visually identical Word/Copilot workflows may have materially different causal systems.

This produces:

```text
SURFACE CONTINUITY
!=
MODEL CONTINUITY
```

Deep Drift should therefore version at least:

```text
host_platform:
host_surface:
model_name:
model_mode:
default_or_manual_selection:
document_version:
active_context:
tool_route:
policy_context:
observation_date:
```

## Relation to Previously Logged Deep Drift Constructs

This update connects directly to:

- **Model-Surface Reproducibility Loss**: models can retire or defaults can change.
- **Surface-Native Artifact Mutation Parity**: native edit paths differ by ecosystem.
- **In-Context Artifact Inspection Fidelity**: visible artifact state and active model context may differ.
- **Artifact-State Contract Fidelity**: model changes must still preserve user-declared invariants.
- **Cross-Surface Compliance Capture Fidelity**: host governance and audit layers are part of artifact provenance.
- **Procedural-Version Provenance**: model selection and orchestration policy need explicit versioning.

## Broader Fresh Platform Scan

### Microsoft
The most useful unlogged signal in this pass is Sonnet 5 inside the Word model menu as the higher-reasoning default for drafting/editing tasks.

The same August 25 release batch also continues Microsoft's broader move toward Python-backed Excel editing, Word voice Q&A, Copilot Pages, Notebook-grounded Word/Excel/PowerPoint generation, meeting and email context, and mobile artifact steering.

### Anthropic
No first-party release newer than the 26 August browser updates surfaced during this scan.

Standing signals remain Claude in Chrome autonomous browser actions, Cowork built-in browser, shared memory across chat and Cowork, Skills API, Files API, mounted memory, and richer observability.

The key new implication here is that Anthropic model identity can now matter outside Anthropic's own creator surface.

### OpenAI
No newer first-party launch displaced the recently logged Work, Project-memory, Skill, Template, scheduled-task, WebMCP, and native-artifact-editing changes.

### Google
No newer 27 August Workspace launch displaced the recent Ask Gemini, Workspace Studio, Sheets Canvas, Notebook migration/copy, and multi-artifact creator signals.

## Deep Drift Research Position

The frontier is no longer only:

```text
WHICH MODEL?
```

It is:

```text
WHICH MODEL
INSIDE WHICH HOST
WITH WHICH CONTEXT
USING WHICH TOOL ROUTE
UNDER WHICH POLICY
ON WHICH ARTIFACT STATE?
```

Model names are becoming insufficient provenance.

As models become portable components embedded inside competing creator ecosystems, **host state becomes part of model behavior**.

Therefore:

```text
MODEL BENCHMARK
WITHOUT HOST PROVENANCE
=
INCOMPLETE BENCHMARK
```

This is necessary if longitudinal AI artifact research is to remain scientifically interpretable after models, defaults, toolchains, and host surfaces keep changing beneath familiar interfaces.

## Evidence Boundary

Platform facts in this report are grounded in Microsoft's first-party Microsoft 365 Copilot release notes current through 25 August 2026, with fresh first-party scans of OpenAI, Anthropic, and Google used to confirm no newer competing release displaced the identified delta. CHMAPF, its failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. Microsoft Learn, **Microsoft 365 Copilot release notes**, August 25, 2026 - Sonnet 5 in Word model menu and higher-reasoning default: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
2. Microsoft Learn, **Microsoft 365 Copilot release notes**, August 25, 2026 - Python when Editing with Copilot in Excel and related creator-workflow updates: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
3. OpenAI Help Center, **ChatGPT Release Notes**, current as of 27 August 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
4. Anthropic product announcements, current through 26 August 2026: https://claude.com/blog-category/announcements
5. Google Workspace Updates, August 2026 archive: https://workspaceupdates.googleblog.com/2026/08/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**