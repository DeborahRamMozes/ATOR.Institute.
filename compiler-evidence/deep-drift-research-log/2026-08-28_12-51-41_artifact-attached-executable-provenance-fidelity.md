# Deep Drift Research Update

## Artifact-Attached Executable Provenance Fidelity

**Research date:** Friday, 28 August 2026  
**ĀTØR observation time:** 12:51:41 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. No newer category-displacing launch was found for memory, mini-app builders, DOCX/PDF generation, or copy/export fixes in this pass. One materially important creator/research workflow architecture was identified as new-to-log from Anthropic's Claude Science beta.

## Executive Summary

Anthropic's Claude Science beta treats provenance as part of the artifact itself.

Anthropic states that figures, tables, and notebooks can include:

- the exact code that generated them;
- the environment in which that code ran;
- a plain-language description of what was done;
- the conversation that led to the result.

Anthropic further states that a background reviewer checks for:

- incorrect citations;
- untraceable numbers;
- figures that do not match their underlying code;
- claims that cannot be traced to evidence.

The app can manage compute on local machines, Linux systems, HPC login nodes, Slurm clusters over SSH, or Modal, while persistent Python and R kernels retain variables, dataframes, and loaded models across an analysis.

It can also save pipelines as reusable Skills and connect existing tools, ELNs, internal systems, and scientific databases through connectors.

For Deep Drift, this creates a creator-workflow architecture that is substantially stronger than ordinary chat-to-document export:

```text
CONVERSATION
-> CODE
-> EXECUTION ENVIRONMENT
-> DATA / COMPUTE
-> FIGURE / TABLE / NOTEBOOK
-> ATTACHED PROVENANCE
-> BACKGROUND REVIEW
-> LATER REPRODUCTION / EDIT / DEFENSE
```

This creates a new benchmark family:

**Artifact-Attached Executable Provenance Fidelity (AAEPF)**

and a companion construct:

**Artifact-to-Execution Reproducibility Fidelity (AERF)**.

The central research question is:

> Can an AI-generated artifact carry enough executable and conversational provenance that another person can reproduce, inspect, edit, challenge, or defend the result months later without reconstructing the workflow from memory?

## Why This Matters for Deep Drift

Most creator systems treat provenance as metadata around the artifact.

Claude Science moves provenance closer to the artifact's causal core.

The distinction is:

```text
ARTIFACT WITH CITATION
!=
ARTIFACT WITH EXECUTION HISTORY
```

and:

```text
OUTPUT FILE
!=
REPRODUCIBLE RESULT
```

A chart can cite a dataset and still be irreproducible if the transformation code, environment, parameters, and conversation that produced it are missing.

For Deep Drift, the relevant object is therefore no longer only the final file.

It is the **artifact + executable history bundle**.

## New Deep Drift Construct: Artifact-Attached Executable Provenance Fidelity

### Definition

**Artifact-Attached Executable Provenance Fidelity (AAEPF)** measures whether a generated artifact preserves enough direct causal information to reconstruct how it was produced.

The minimum provenance bundle should include:

```text
ARTIFACT ID
SOURCE DATA
CODE
PARAMETERS
ENVIRONMENT
MODEL / AGENT
CONVERSATION
TOOL / CONNECTOR ROUTE
EXECUTION LOCATION
OUTPUT VERSION
REVIEW / VALIDATION STATE
```

A high-fidelity artifact should permit a later reviewer to distinguish:

- what came from source evidence;
- what came from code;
- what came from model interpretation;
- what came from user instruction;
- what came from environmental state.

## New Construct: Artifact-to-Execution Reproducibility Fidelity

### Definition

**Artifact-to-Execution Reproducibility Fidelity (AERF)** measures whether the provenance attached to an artifact is sufficient to reconstruct an equivalent execution later.

The core test is:

```text
ARTIFACT
-> READ PROVENANCE
-> REBUILD ENVIRONMENT
-> RE-RUN CODE
-> REPRODUCE RESULT
```

The reproduction need not be bit-for-bit identical when nondeterminism is expected.

But material claims, figures, tables, and derived values should remain explainable.

## New Failure Classes

### Provenance Attachment Drift

The artifact is updated while its attached code, environment, or conversation provenance remains stale.

### Code/Artifact Divergence

A figure or table exists, but the code stored with it no longer reproduces the visible output.

### Environment Reconstruction Failure

The code is preserved, but package versions, system dependencies, hardware, model versions, or runtime settings are insufficiently specified.

### Conversation Causality Loss

The artifact preserves code but not the conversational instruction or correction that caused a material parameter or method change.

### Reviewer False Negative

The background reviewer fails to flag a claim, number, citation, or figure that is not traceable to evidence.

### Reviewer False Positive

A valid result is repeatedly blocked or flagged, forcing manual intervention that overwhelms the provenance benefit.

### Persistent-Kernel Hidden-State Drift

A result depends on variables or mutations from earlier analysis steps that are not visible in the code attached to the final artifact.

### Skill-to-Artifact Procedure Drift

A reusable scientific Skill changes after an artifact was generated, but the artifact does not preserve which Skill version governed the run.

### Connector-State Provenance Loss

A database, ELN, internal system, or scientific connector contributed evidence, but the exact query, version, or retrieved source state cannot later be reconstructed.

### Compute-Surface Divergence

The same code produces materially different results across laptop, HPC, cloud GPU, or other compute environments because execution context was not sufficiently captured.

## Deep Drift Benchmark: Artifact Reproduction After Delay

### Controlled setup

Create one analysis containing:

```text
SOURCE DATASET D1
PYTHON / R CODE C1
ENVIRONMENT E1
CONVERSATION Q1
FIGURE F1
TABLE T1
NOTEBOOK N1
SKILL S1
```

### Procedure

1. Generate F1, T1, and N1.
2. Record all attached provenance.
3. Change one package version.
4. Change one Skill version.
5. Clear the persistent kernel.
6. Re-run the artifact from its attached history.
7. Reproduce the workflow on a second machine or compute surface.
8. Ask a second reviewer to reconstruct the causal chain without access to the original analyst's memory.

### Measure

- code-to-output equivalence;
- environment reconstruction success;
- source-data identity;
- conversation-state survival;
- Skill-version survival;
- connector-query traceability;
- figure/table reproducibility;
- reviewer-detected provenance gaps;
- human repair minutes.

## New Metrics

### Artifact Provenance Completeness

```text
APC =
required provenance elements attached to artifact
/
all required provenance elements
```

### Executable Reproduction Success Rate

```text
ERSR =
artifacts successfully reproduced from attached provenance
/
all tested artifacts
```

### Code-to-Artifact Equivalence

```text
CAE =
visible artifact elements reproduced by attached code
/
all material visible artifact elements
```

### Hidden-State Dependency Rate

```text
HSDR =
material output dependencies not represented
in attached executable provenance
/
all material output dependencies
```

### Evidence Review Detection Rate

```text
ERDR =
controlled unsupported claims / figures / numbers
correctly flagged by reviewer
/
all seeded unsupported elements
```

## Persistent Kernels Create a New Provenance Problem

Anthropic states that Claude Science keeps Python and R variables, dataframes, and loaded models in memory across an analysis.

That improves iteration.

It also creates a classic computational reproducibility problem:

```text
CURRENT RESULT
MAY DEPEND ON
HIDDEN PRIOR KERNEL STATE
```

A notebook can look complete while depending on:

- a variable created twenty steps earlier;
- a dataframe mutated in place;
- a package imported under an alias;
- a model object loaded from an earlier run;
- a manually corrected intermediate object.

Therefore:

```text
CODE ATTACHED
!=
FULL EXECUTION STATE ATTACHED
```

Deep Drift should explicitly test kernel-state serialization or state reconstruction.

## New Construct: Executable Context Closure

### Definition

**Executable Context Closure (ECC)** measures whether all state required to reproduce an artifact is either:

1. included directly in the provenance bundle; or
2. recoverable through explicit source references and environment reconstruction.

An artifact has poor context closure when reproduction depends on hidden state that exists only inside the original running session.

## Background Review Is a Provenance Gate, Not Proof

Anthropic says a background reviewer flags incorrect citations, untraceable numbers, figures inconsistent with code, and claims it cannot trace to evidence.

That is significant.

But:

```text
REVIEWER PASSED
!=
RESULT TRUE
```

The correct Deep Drift interpretation is:

```text
REVIEWER
=
PROVENANCE / CONSISTENCY GATE
```

not:

```text
REVIEWER
=
SCIENTIFIC TRUTH ENGINE
```

The system should therefore preserve:

- reviewer version;
- review timestamp;
- flags raised;
- flags resolved;
- unresolved uncertainty;
- whether human review followed.

## Reusable Skills and Provenance

Claude Science can save pipelines as reusable Skills and says future sessions can inherit them.

This creates a direct connection to Deep Drift's earlier procedural-state research.

The relevant chain becomes:

```text
PIPELINE
-> SKILL
-> FUTURE SESSION
-> ARTIFACT
```

For every artifact, preserve:

```text
skill_name
skill_version
skill_source
procedure_hash_if_available
execution_date
```

Otherwise reusable procedures become another hidden dependency.

## Creator Workflow Trend: Provenance Is Becoming Product UX

The larger creator-platform trend is important.

Earlier AI systems treated provenance as:

```text
EXPORT LOG
AUDIT PAGE
CITATION LIST
```

Claude Science treats it as part of the interactive artifact experience:

- inspect the result;
- inspect the code;
- inspect the environment;
- inspect the conversation;
- edit the figure;
- re-run it;
- defend it later.

That suggests a broader future creator pattern:

```text
ARTIFACT
+
CAUSE
+
EXECUTION
+
REVISION
```

rather than:

```text
ARTIFACT
+
OPTIONAL HISTORY SOMEWHERE ELSE
```

## Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing release found beyond already logged Temporary Chat / shared-memory changes. |
| Skills | No newer general Skill launch; Claude Science strengthens the link between reusable Skills and artifact-level provenance. |
| Mini-app builders | No newer launch found. |
| Chat-to-document export | No newer export launch; the notable direction is artifact-plus-execution history rather than flat export. |
| DOCX / PDF generation | No newer category-displacing release found. |
| Copy-paste / export fixes | No newer fix found in this pass. |
| Broader creator workflow | **Material new-to-log architecture:** scientific artifacts carry code, environment, conversation, and review provenance as part of the result. |

## Cross-Platform Context

### Anthropic

The new-to-log focus is Claude Science's artifact-attached provenance model.

Anthropic states that:

- figures, tables, and notebooks carry code/environment/conversation history;
- results can be reproduced, edited, or defended later;
- a background reviewer checks traceability;
- persistent Python/R kernels support iterative analysis;
- pipelines can become Skills;
- tools and scientific systems can connect through connectors;
- compute can run locally, on Linux/HPC, Slurm over SSH, or Modal.

### OpenAI

No newer category-displacing release surfaced beyond the recently logged Temporary Chat, identity, Skills/plugins, Work, Sites, Project memory, and artifact-editing changes.

### Google

No newer creator release displaced the current Studio, Canvas, Gemini, Notebook, migration, and structured-action updates already logged.

### Microsoft

No newer broad Copilot release displaced the August 25 batch already represented in the Deep Drift ledger.

## Deep Drift Research Position

The strongest creator artifact is not the one that merely looks finished.

It is the one that can answer:

```text
WHAT MADE ME?
WITH WHICH CODE?
IN WHICH ENVIRONMENT?
FROM WHICH EVIDENCE?
UNDER WHICH CONVERSATION?
USING WHICH PROCEDURE?
AND CAN YOU DO IT AGAIN?
```

Therefore:

```text
POLISHED
!=
REPRODUCIBLE

CITED
!=
EXECUTABLE

CODE PRESENT
!=
HIDDEN STATE CLOSED

REVIEWED
!=
TRUE

PROVENANCE STORED
!=
PROVENANCE SUFFICIENT
```

Deep Drift should treat artifact-attached executable provenance as a higher-order creator benchmark.

The industry has spent years making AI outputs easier to generate.

The more serious frontier is making them harder to fake, harder to misattribute, and easier to reproduce.

## Evidence Boundary

Platform facts in this report are grounded in Anthropic's first-party Claude Science beta documentation, with fresh first-party scans of OpenAI, Google, Microsoft, and Anthropic release sources used to confirm no newer category-displacing launch in this pass. AAEPF, AERF, ECC, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. Anthropic, **Claude Science beta**, current as of 28 August 2026: https://claude.com/product/claude-science
2. Anthropic, **Claude for Life Science Teams**, current as of 28 August 2026: https://claude.com/solutions/life-sciences
3. Anthropic, **Claude Code changelog**, 28 August 2026: https://code.claude.com/docs/en/changelog
4. OpenAI Help Center, **ChatGPT Release Notes**, current through 27 August 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
5. Google Workspace Updates, August 2026: https://workspaceupdates.googleblog.com/2026/08/
6. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through 25 August 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
