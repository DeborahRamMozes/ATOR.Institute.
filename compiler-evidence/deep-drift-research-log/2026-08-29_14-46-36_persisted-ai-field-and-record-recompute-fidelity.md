# Deep Drift Research Update

## Persisted AI Field and Record-Recompute Fidelity

**Research date:** 29 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log Microsoft Power Platform creator-infrastructure change identified from current first-party Microsoft Learn documentation.

## Executive Summary

Microsoft Power Apps / Dataverse now supports a **Prompt** column as an AI-powered data type. A prompt column binds natural-language instructions to one or more table columns, executes an AI model when a record is created or relevant source fields change, and stores the generated result persistently in the Dataverse record.

Microsoft's current documentation also describes a newer execution architecture for prompt columns:

- asynchronous generation decoupled from the real-time transaction;
- filter-based execution so prompts run only when configured conditions are satisfied;
- companion status and details columns recording states such as NotStarted, InProgress, Completed, skipped, or Failed;
- tenant-level and column-level controls for whether prompt execution is permitted;
- explicit AI Builder / Copilot credit consumption for each execution;
- no automatic recalculation of existing prompt values merely because the prompt definition itself changes.

This is not simply "AI inside a database."

It creates a new application architecture:

```text
SOURCE FIELDS
-> PROMPT DEFINITION
-> EXECUTION CONDITION
-> ASYNCHRONOUS MODEL RUN
-> GENERATED VALUE
-> PERSISTED DATABASE FIELD
-> APP / WORKFLOW / REPORT CONSUMES VALUE
```

For Deep Drift Research, this creates a new benchmark family:

**Persisted AI Field and Record-Recompute Fidelity (PAFRF)**

with companion constructs:

**Prompt-to-Record Causal Fidelity (PRCF)**  
**AI Field Staleness Visibility (AIFSV)**  
**Record-Triggered Recompute Fidelity (RTRF)**  
**Prompt-Definition Version Lineage Fidelity (PDVLF)**  
**AI-Generated Field Status Fidelity (AIGFSF)**

The central research question is:

> When generative AI output becomes a persisted field inside a system of record, can a later user determine which prompt version, input-field state, filter condition, execution event, model result, and record revision produced the value now being treated as ordinary application data?

## 1. What Changed

A prompt column is now a first-class Dataverse column type.

The model output is not merely shown in a transient Copilot pane. It is stored in the table and can be used downstream in:

- model-driven apps;
- workflows;
- reports;
- customer-support systems;
- content workflows;
- classification and analysis pipelines.

This changes the role of generative output.

```text
CHAT RESPONSE
=
EPHEMERAL CONTENT

PROMPT COLUMN
=
PERSISTED APPLICATION STATE
```

The generated text becomes data.

## 2. Why This Matters for Deep Drift

Once AI output is stored as a durable field, later systems may stop treating it as generated inference and begin treating it as ordinary factual state.

For example:

```text
customer_feedback = "delivery was late"

ai_summary = "customer expresses strong dissatisfaction"

priority = "high"
```

A downstream workflow may read `ai_summary` without knowing:

- which prompt version generated it;
- which model behavior existed at that time;
- whether the source record changed later;
- whether the prompt definition changed later;
- whether the stored value was ever recomputed.

Therefore:

```text
VALUE STORED
!=
VALUE CURRENT

VALUE CURRENT
!=
VALUE FACTUAL

FIELD PRESENT
!=
FIELD RECOMPUTED

PROMPT UPDATED
!=
OLD RECORDS UPDATED
```

## 3. New Deep Drift Construct: Persisted AI Field and Record-Recompute Fidelity

### Definition

**Persisted AI Field and Record-Recompute Fidelity (PAFRF)** measures whether a generative field stored in an application database remains reconstructable from the exact prompt definition, source values, execution condition, execution event, and record state that produced it.

A minimum provenance card should preserve:

```text
record_id
prompt_column_id
prompt_definition_id
prompt_version
input_column_ids
input_values_or_hashes
filter_definition
filter_result
execution_started_at
execution_completed_at
execution_status
generated_value
record_version_before
record_version_after
credit_event
```

Without this chain, the generated value becomes detached from its own cause.

## 4. Prompt-to-Record Causal Fidelity

### Definition

**Prompt-to-Record Causal Fidelity (PRCF)** measures whether every persisted AI-generated field can be traced to the exact record state that triggered its generation.

Microsoft documents that a prompt executes when:

- a record is created; or
- one or more referenced input columns are updated.

If none of the referenced columns change, execution can be skipped.

That makes the causal trigger part of the data lineage.

```text
RECORD UPDATE
-> REFERENCED INPUT CHANGED?
-> FILTER PASSED?
-> PROMPT EXECUTED?
-> VALUE STORED
```

The final value alone does not reveal this chain.

## 5. AI Field Staleness Visibility

Microsoft explicitly documents that updating the prompt definition does **not** automatically recalculate existing prompt values. Existing values remain until a subsequent update occurs on one or more referenced source columns.

This creates an unusually clean AI-staleness problem.

### Definition

**AI Field Staleness Visibility (AIFSV)** measures whether users can determine that a persisted generated value was produced by an older prompt definition or older source state.

Example:

```text
PROMPT v1
-> RECORD 17
-> AI VALUE A

PROMPT CHANGED TO v2

RECORD 17 SOURCE INPUTS DO NOT CHANGE

AI VALUE A REMAINS
```

The database now contains a result from a procedural version that no longer exists as the current definition.

Therefore:

```text
CURRENT PROMPT
!=
PROMPT THAT PRODUCED CURRENT STORED VALUE
```

This is a provenance problem hiding inside a normal column.

## 6. Record-Triggered Recompute Fidelity

### Definition

**Record-Triggered Recompute Fidelity (RTRF)** measures whether the system recomputes AI fields exactly when their declared dependencies and execution filters require it.

Failure can occur in both directions.

### Under-recompute

A source field changes materially but the generated field is not refreshed.

### Over-recompute

The prompt executes despite no relevant dependency change, consuming credits and potentially producing a different value from an unchanged record.

Microsoft's introduction of filter-based execution and explicit skip states makes this testable.

## 7. Prompt-Definition Version Lineage Fidelity

A prompt definition is executable logic.

Changing the prompt changes the function that produces the field.

### Definition

**Prompt-Definition Version Lineage Fidelity (PDVLF)** measures whether each persisted generated value remains attributable to the exact version of the natural-language prompt that produced it.

A database schema normally tracks:

```text
COLUMN NAME
COLUMN TYPE
```

AI-powered fields additionally require:

```text
PROMPT VERSION
MODEL / RUNTIME STATE
INPUT BINDINGS
FILTER VERSION
```

Otherwise identical rows may contain values generated by different procedural eras.

## 8. AI-Generated Field Status Fidelity

Microsoft's newer prompt-column architecture automatically exposes corresponding **Status** and **Details** columns.

Documented states include:

- NotStarted;
- InProgress;
- Completed;
- Completed but skipped because filter conditions were not met;
- Completed but skipped because referenced inputs did not change;
- Failed.

This is significant because it makes execution state part of the application schema.

### Definition

**AI-Generated Field Status Fidelity (AIGFSF)** measures whether downstream applications correctly distinguish a successful generated value from a skipped, stale, pending, or failed generation event.

A field value should not be read without its generation state.

## 9. Core Deep Drift Distinctions

```text
PERSISTED
!=
VERIFIED

GENERATED
!=
CURRENT

CURRENT SCHEMA
!=
ORIGINAL PROMPT VERSION

COMPLETED
!=
EXECUTED

SKIPPED
!=
FAILED

FIELD VALUE
!=
FIELD PROVENANCE
```

These distinctions become mandatory once AI enters the database layer.

## 10. New Failure Classes

### 10.1 Prompt-Version Staleness

A stored value was generated by an earlier prompt definition but appears beside values generated by the current definition.

### 10.2 Source-State Detachment

The generated value survives after relevant source context has changed elsewhere in the application.

### 10.3 Recompute Trigger Blind Spot

Users cannot tell which source-field mutation caused the most recent AI execution.

### 10.4 Filter-Version Drift

The filter logic changes, but old generated values remain without preserving which filter regime admitted their execution.

### 10.5 Skipped-State Misinterpretation

A status of Completed is treated as proof that the AI ran, even when the documented status code indicates the prompt was skipped.

### 10.6 Failed-Generation Residue

A previous generated value remains visible after a later failed execution and is mistaken for the latest successful inference.

### 10.7 Asynchronous Race Drift

A source record changes again while an asynchronous prompt execution is still in progress.

### 10.8 Mixed-Era Column State

Rows in the same table contain generated values produced under different prompt versions or execution rules.

### 10.9 Downstream Fact Reification

Apps, workflows, or reports treat generated output as factual structured data without preserving its inference status.

### 10.10 Credit-Driven Execution Bias

Filter design or cost controls alter which records receive AI enrichment, creating uneven semantic coverage across the dataset.

### 10.11 Prompt Dependency Blindness

A downstream user sees the generated field but cannot identify which input columns the prompt used.

### 10.12 On-Demand Recalculation Gap

A prompt is improved, but existing rows cannot be directly recalculated on demand without changing a referenced record field.

## 11. Deep Drift Benchmark: Persisted AI Field Mutation Test

### Controlled setup

Create one Dataverse table with:

```text
record_id
customer_feedback
region
priority
ai_summary [Prompt]
```

Use a controlled prompt:

```text
PROMPT v1:
Summarize the customer's feedback in one sentence.
```

Seed ten records.

Record:

- original source values;
- prompt definition;
- generated results;
- status fields;
- execution timestamps.

### Mutation sequence

1. Change a referenced input column.
2. Change a non-referenced column.
3. Add an execution filter.
4. Modify the prompt to v2.
5. Do not touch one old record.
6. Modify another old record.
7. Trigger a deliberate failed generation.
8. Update a record twice while asynchronous generation is active.
9. Disable prompt execution at column level.
10. Re-enable it.

### Measure

- correct recomputation;
- correct skipping;
- stale-value visibility;
- prompt-version attribution;
- asynchronous race handling;
- failure-state visibility;
- downstream value interpretation;
- credit-event traceability.

## 12. New Metrics

### Prompt-Version Attribution Coverage

```text
PVAC =
stored AI field values attributable to exact prompt version
/
all stored AI field values
```

### Recompute Correctness Rate

```text
RCR =
correct execute-or-skip decisions
/
all controlled record mutation events
```

### Stale AI Value Detection Rate

```text
SAVDR =
stale generated values correctly identified
/
all seeded stale generated values
```

### Input Dependency Traceability

```text
IDT =
generated field values traceable to exact input columns
and source record state
/
all generated field values
```

### Status Interpretation Accuracy

```text
SIA =
downstream reads correctly distinguishing
executed, skipped, pending, and failed states
/
all tested status events
```

### Mixed-Era Visibility

```text
MEV =
rows visibly attributable to their generation regime
/
all rows produced across multiple prompt versions
```

## 13. Why This Matters for Mini-App Builders

This is one of the strongest mini-app-adjacent changes in the current scan because Power Apps makers can now create an application whose data model itself contains generative behavior.

The architecture is no longer:

```text
APP
-> CALL AI
-> SHOW RESPONSE
```

It becomes:

```text
APP DATA MODEL
CONTAINS
GENERATIVE FIELD LOGIC
```

That is a deeper integration.

A natural-language prompt becomes part of the effective schema.

## 14. Why This Matters for Skills

A prompt column behaves like a highly constrained reusable Skill bound to a table.

It has:

- fixed instructions;
- declared inputs;
- execution conditions;
- persistent outputs;
- status;
- cost;
- downstream consumers.

The useful abstraction is:

```text
SKILL
+
DATA BINDING
+
TRIGGER
+
PERSISTED OUTPUT
```

That makes prompt columns an unusually concrete example of procedural language becoming infrastructure.

## 15. Why This Matters for Memory

Prompt-column output is not conversational memory.

But it is a form of **institutionalized machine memory** because model interpretation becomes persisted state that future applications can reuse without rerunning the inference.

Deep Drift should distinguish:

```text
MODEL MEMORY
USER MEMORY
TASK MEMORY
PROCEDURAL MEMORY
PERSISTED AI-DERIVED DATA
```

The last category is potentially more consequential than chat memory because it can silently enter reports, decisions, and workflows.

## 16. Why This Matters for Documents and Reports

Microsoft explicitly describes prompt-column output as usable in reports and workflows.

A downstream report may therefore contain generated conclusions without visually distinguishing:

```text
RAW DATABASE FACT
from
AI-DERIVED DATABASE VALUE
```

Deep Drift artifact provenance should therefore allow a DOCX, PDF, dashboard, or report to preserve whether each source field was:

- human-entered;
- imported;
- formula-derived;
- AI-generated;
- AI-generated under a stale prompt version.

Without this distinction, AI inference disappears into ordinary-looking enterprise data.

## 17. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer consumer-memory launch surfaced. Prompt columns introduce a different memory layer: persisted AI-derived application state. |
| Skills | Material adjacent shift: a natural-language prompt can function as reusable, schema-bound procedural logic. |
| Mini-app builders | **Material new-to-log change:** Power Apps / Dataverse can embed AI-generating prompt columns directly in an app's data model. |
| Chat-to-document export | No newer direct export launch found in this pass. |
| DOCX / PDF generation | No newer standalone document-generation feature displaced previously logged pipelines. |
| Copy-paste / export fixes | No newer category-displacing copy/export fix found. |
| Broader creator workflow | **Material new-to-log shift:** generative output is moving from transient assistant response into persistent system-of-record fields with asynchronous recomputation, filtering, status tracking, and billing. |

## 18. Cross-Platform Check

### Microsoft

The strongest new-to-log finding is the current Dataverse Prompt column architecture and its newer asynchronous/filter/status enhancements.

Microsoft's current documentation states that generated results are stored persistently and can be consumed by apps, workflows, and reports. It also documents execution on relevant record changes, asynchronous processing, filter-based execution, status/detail fields, and the fact that changing a prompt definition does not automatically recalculate old rows.

### OpenAI

No newer category-displacing release surfaced after the already logged 27-28 August ChatGPT changes.

### Google

No newer Workspace creator release displaced the already logged Ask Gemini in Chat and Sheets canvas changes.

### Anthropic

No newer creator-workflow release displaced existing Deep Drift entries.

## 19. Deep Drift Research Position

The weak description is:

> Power Apps has AI columns.

The serious description is:

> Natural-language inference has become a persistent database field type whose output can outlive the prompt state, source state, and model conditions that originally produced it.

That means the database can contain **machine interpretation disguised as ordinary data**.

Therefore:

```text
DATABASE VALUE
!=
OBSERVED FACT

PERSISTENCE
!=
VALIDITY

CURRENT PROMPT
!=
VALUE'S ORIGINAL PROMPT

AI FIELD
!=
STATIC FIELD
```

The serious Deep Drift requirement is:

> **Every persisted AI-derived field should carry or expose the prompt version, bound inputs, source record state, execution filter, execution status, generation timestamp, and recomputation history that produced its current value.**

If not, the application quietly converts probabilistic inference into institutional fact merely by putting it in a column.

## 20. Evidence Boundary

Platform facts in this report are grounded in Microsoft's current first-party Power Apps / Dataverse documentation for Prompt columns, retrieved 29 August 2026. The documentation describes Prompt as an AI-powered data type, persistent storage of generated results, app/workflow/report consumption, record-triggered execution, asynchronous computation, filter-based execution, execution status fields, tenant/column controls, Copilot/AI Builder credit use, and the absence of on-demand recalculation when only the prompt definition changes.

PAFRF, PRCF, AIFSV, RTRF, PDVLF, AIGFSF, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Microsoft Learn, **Prompt columns in Microsoft Dataverse - Power Apps**, current 29 August 2026.  
   https://learn.microsoft.com/en-us/power-apps/maker/data-platform/prompt-column

2. Microsoft Learn, **Microsoft 365 Copilot release notes**, checked 29 August 2026.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

3. OpenAI Help Center, **ChatGPT Release Notes**, checked 29 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

4. Google Workspace Updates, checked 29 August 2026.  
   https://workspaceupdates.googleblog.com/

5. Anthropic News, checked 29 August 2026.  
   https://www.anthropic.com/news

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
