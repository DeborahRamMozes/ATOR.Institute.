# Deep Drift Research Update

## Spreadsheet-to-Mini-App Bidirectional State Fidelity

**Research date:** Saturday, 29 August 2026  
**Observation time:** 05:44:07 WIB  
**Research stream:** ATOR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log creator-workflow finding isolated from a fresh first-party scan. No newer category-displacing release was found for consumer memory, general Skills, standalone DOCX/PDF generation, or copy/export fixes beyond changes already entered in the ledger.

## Executive Summary

Google is rolling out **Sheets canvas**, a Gemini-powered capability that converts spreadsheet data into custom, interactive, **read-write mini-apps** from natural-language prompts.

Google states that users can create dashboards, Kanban boards, forecasting tools, whiteboards, and other interactive interfaces directly on top of spreadsheet data. Changes in the generated canvas can write back to the underlying Sheet, while changes in the Sheet are reflected in the canvas in real time. The canvas inherits the spreadsheet's existing sharing model.

The important architectural shift is:

```text
SPREADSHEET DATA
-> NATURAL-LANGUAGE APP GENERATION
-> INTERACTIVE UI
-> USER MUTATION
-> WRITE-BACK TO SOURCE SHEET
-> LIVE UI REFRESH
```

This is materially different from static chart generation, chat-to-document export, or a disposable AI prototype. The generated interface becomes a live operational surface over a durable source-of-truth table.

For Deep Drift Research, this creates a new benchmark family:

**Spreadsheet-to-Mini-App Bidirectional State Fidelity (SMABSF)**

with companion constructs:

- **Generated Interface-to-Source Equivalence (GISE)**
- **Bidirectional Mutation Fidelity (BMF)**
- **Interface Schema Drift Visibility (ISDV)**
- **Shared-State Permission Continuity (SSPC)**

The central research question is:

> When an LLM generates an application layer over live tabular data, can every visible interaction be proven equivalent to the intended source-table mutation, and can every source-table mutation be correctly re-expressed in the generated interface?

## Why This Matters for Deep Drift

The mini-app is no longer an output that merely *represents* the spreadsheet.

It can become an **alternate control surface** for the spreadsheet.

That changes the causal chain from:

```text
DATA
-> VISUALIZATION
```

to:

```text
DATA
<-> GENERATED INTERFACE
<-> HUMAN ACTION
```

The arrows now point both ways.

That matters because interface generation and data mutation are different model responsibilities.

A beautiful Kanban board can still write the wrong status into the wrong row.

A correct spreadsheet update can still be rendered into the wrong card, grouping, label, total, or visual state.

Therefore:

```text
UI LOOKS CORRECT
!= SOURCE DATA IS CORRECT

SOURCE DATA IS CORRECT
!= GENERATED UI IS CORRECT

READ-WRITE
!= REVERSIBLY TRACEABLE
```

## New Deep Drift Construct: Spreadsheet-to-Mini-App Bidirectional State Fidelity

### Definition

**SMABSF** measures whether an LLM-generated mini-app preserves semantic and causal equivalence between the source spreadsheet and the generated interactive interface in both directions.

A minimum state record should preserve:

```text
sheet_id
sheet_revision
source_range_or_table
canvas_id
canvas_generation_prompt
canvas_generation_time
canvas_schema
ui_component_id
source_field_binding
user_action
write_back_operation
write_back_time
post_write_sheet_revision
ui_refresh_time
permission_scope
```

Without this, the interface can be operational without being auditable.

## Generated Interface-to-Source Equivalence

### Definition

**GISE** measures whether every generated interface component corresponds to the intended spreadsheet field, row, formula, range, or derived state.

Examples:

```text
KANBAN CARD STATUS
-> intended status column

BUDGET SLIDER
-> intended numeric input cell

DASHBOARD TOTAL
-> intended aggregation formula

WHITEBOARD ITEM
-> intended row or structured record
```

The generated interface should not silently invent a different data model merely because that layout is more visually convenient.

## Bidirectional Mutation Fidelity

Google explicitly states that changes made in Sheets canvas can update the source Sheet, and Sheet changes are reflected in the canvas.

That creates two mutation directions:

```text
CANVAS -> SHEET
SHEET -> CANVAS
```

### Definition

**Bidirectional Mutation Fidelity (BMF)** measures whether both mutation directions preserve value, identity, ordering, datatype, formulas, and intended business meaning.

A high-fidelity system should pass the same controlled edit through both directions and converge on the same final state.

## Interface Schema Drift Visibility

The source Sheet can evolve after the canvas is generated.

Columns can be renamed.

Rows can be added.

Formulas can change.

Data validation can change.

A generated interface may continue to render while its original binding assumptions are no longer valid.

### Definition

**Interface Schema Drift Visibility (ISDV)** measures whether the system detects and exposes changes to the source table that invalidate or materially alter the generated app's bindings or logic.

The system should distinguish:

```text
DATA VALUE CHANGE
from
SCHEMA CHANGE
```

A value update should usually refresh the app.

A schema change may require regeneration, rebinding, or explicit warning.

## Shared-State Permission Continuity

Google states that Sheets canvas inherits the sharing settings of the spreadsheet.

That is important because the app and the data are not separate permission domains.

### Definition

**Shared-State Permission Continuity (SSPC)** measures whether read, edit, sharing, and mutation rights exposed through the generated app remain equivalent to the underlying spreadsheet permissions.

The key distinction is:

```text
CAN SEE APP
!= CAN MUTATE SOURCE
```

unless the permission model explicitly makes those equivalent.

## New Failure Classes

### Field-Binding Drift

A generated control writes to the wrong spreadsheet column or range.

### Row-Identity Collapse

Sorting, filtering, grouping, or dragging in the canvas causes an action to mutate the wrong underlying row.

### Formula-to-Value Flattening

An interface writes a literal value over a formula-backed cell.

### Datatype Mutation Drift

Dates, currencies, percentages, booleans, or categorical states are written back in a format that changes spreadsheet semantics.

### Stale Interface Projection

The Sheet changes but the canvas continues showing an older state.

### Hidden Source Mutation

A user action appears purely visual but changes the underlying spreadsheet without sufficient visibility.

### Schema Evolution Breakage

The source table structure changes while the generated app continues operating against obsolete field assumptions.

### Aggregation Interpretation Drift

A generated dashboard computes or labels a derived metric differently from the spreadsheet logic.

### Permission Surface Drift

The interface exposes an action that the spreadsheet's sharing or edit model should not allow.

### Prompt-Regeneration State Loss

The user asks Gemini to redesign or refine the canvas and the regeneration loses prior field bindings, UI state, or interaction semantics.

### Cross-User Concurrency Drift

Two collaborators make simultaneous changes in the Sheet and canvas and the final state depends on hidden timing or refresh order.

## Deep Drift Benchmark: Bidirectional Mini-App Mutation Test

### Controlled source sheet

Create a single-table Sheet containing:

1. immutable record ID;
2. owner;
3. categorical status;
4. numeric budget;
5. percentage completion;
6. date;
7. formula-derived risk score;
8. notes field;
9. validation constraint;
10. one intentionally blank optional field.

Generate three canvases:

- Kanban board;
- executive dashboard;
- operational tracker.

### Canvas-to-Sheet tests

Perform:

- drag status card;
- edit budget;
- add new record;
- edit date;
- change owner;
- attempt invalid value;
- modify a formula-derived display.

Record the exact source mutation produced.

### Sheet-to-Canvas tests

Then change the source Sheet directly:

- reorder rows;
- rename one field;
- alter one validation rule;
- modify one formula;
- add a new record;
- delete one record;
- change one permission state.

Measure whether the canvas updates correctly, warns, or silently drifts.

## New Metrics

### UI-to-Source Mutation Accuracy

```text
USMA =
correct intended source mutations
/
all canvas-originated mutations
```

### Source-to-UI Projection Accuracy

```text
SUPA =
source mutations correctly reflected in UI
/
all tested source mutations
```

### Binding Traceability Coverage

```text
BTC =
interactive UI elements linked to exact source fields/ranges
/
all mutable UI elements
```

### Schema Drift Detection Rate

```text
SDDR =
material source-schema changes detected or surfaced
/
all seeded material schema changes
```

### Permission Continuity Accuracy

```text
PCA =
canvas actions correctly respecting source-sheet permissions
/
all permission-sensitive test actions
```

### Concurrency Convergence Rate

```text
CCR =
concurrent source/UI edits converging to intended final state
/
all controlled concurrent-edit tests
```

## Why This Matters for Mini-App Builders

Sheets canvas demonstrates a broader creator trend:

```text
AI APP BUILDER
```

is no longer limited to generating detached HTML, prototypes, or code sandboxes.

It can instead produce an interface **inside an existing system of record**.

That means the generated app inherits real data, real collaborators, real permissions, and real operational consequences.

The creator stack is moving from:

```text
PROMPT -> PROTOTYPE
```

toward:

```text
PROMPT -> OPERATIONAL INTERFACE OVER LIVE STATE
```

That is a much higher reliability burden.

## Relation to Skills

A future reusable Skill that generates or manipulates these mini-apps must preserve more than a prompt recipe.

It needs:

```text
SKILL VERSION
+
SOURCE SCHEMA
+
FIELD BINDINGS
+
INTERACTION CONTRACT
+
WRITE-BACK RULES
+
PERMISSION STATE
```

A Skill that can recreate the visual layout but not the original state bindings is not functionally equivalent.

## Relation to Memory

This is not conventional conversational memory.

The relevant persistent state lives partly outside the model:

```text
SOURCE SHEET STATE
CANVAS CONFIGURATION STATE
GENERATED UI STATE
COLLABORATOR STATE
PERMISSION STATE
```

Deep Drift should treat generated-interface bindings as a form of **externalized procedural memory**.

The model may forget the conversation while the mini-app continues operating against the Sheet.

That is exactly why the bindings need independent provenance.

## Relation to Chat-to-Document and Export

Sheets canvas is almost the opposite of export.

Traditional export freezes state:

```text
CHAT -> PDF / DOCX -> STATIC ARTIFACT
```

Sheets canvas keeps state live:

```text
CHAT -> INTERFACE -> LIVE SOURCE -> INTERFACE
```

This suggests a useful Deep Drift split:

**Frozen Artifact Fidelity** versus **Live Artifact Fidelity**.

A PDF needs faithful capture at export time.

A read-write mini-app needs faithful state synchronization over time.

## Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing consumer-memory release found after the already logged August 27-28 OpenAI changes. |
| Skills | No newer general Skill launch found in this pass. |
| Mini-app builders | **Material finding:** Google Sheets canvas creates natural-language, read-write mini-apps directly over live spreadsheet data, with bidirectional synchronization. |
| Chat-to-document export | No newer direct export launch found. |
| DOCX / PDF generation | No newer standalone format-generation release found. |
| Copy-paste / export fixes | No newer fix found beyond the previously logged Codex selective-copy change. |
| Broader creator workflow | Creator tooling is moving from generated artifacts toward **generated operational interfaces attached to durable systems of record**. |

## Rollout and Constraints

Google's first-party Workspace update states:

- Rapid Release rollout began August 10, 2026;
- Scheduled Release rollout begins August 31, 2026;
- the feature is web-only at this stage;
- account language must currently be English;
- creation and editing are subject to per-user usage limits;
- current documentation notes a single-table / single-header limitation in the beta-era feature description.

These constraints matter for benchmark reproducibility.

The research log should record exact rollout channel and source-table structure for every test.

## Cross-Platform Context

### Google

The strongest distinct item in this pass is Sheets canvas: a Gemini-generated, read-write app layer embedded directly in Google Sheets.

### OpenAI

No newer category-displacing release surfaced beyond the already logged August 28 multiple-Google-account support, August 27 Temporary Chat controls, event-triggered tasks, Work, Sites/WebMCP, and Codex changes.

### Microsoft

No newer Microsoft 365 Copilot release displaced the August 25 batch already represented in the Deep Drift ledger.

### Anthropic

No newer category-displacing creator-workflow release surfaced in this pass.

## Deep Drift Research Position

The important threshold is not that Gemini can make a prettier spreadsheet.

It is that the generated artifact can now **become an operational editing surface for the source data itself**.

Therefore:

```text
GENERATED UI
!= DECORATION

APP STATE
!= SOURCE STATE

SYNCHRONIZED ONCE
!= CONTINUOUSLY FAITHFUL

READ-WRITE
!= AUDITABLE
```

The serious Deep Drift requirement is:

> Once an LLM-generated interface can mutate a durable system of record, every UI action, field binding, write-back operation, permission boundary, schema change, and resulting source revision must become part of provenance.

## Evidence Boundary

Platform facts in this report are grounded in Google's first-party Google Workspace Updates article dated August 13, 2026 and current Google Workspace Gemini administration documentation. Fresh first-party OpenAI, Google, Microsoft, and Anthropic sources were checked on August 29, 2026 for newer category-displacing changes. SMABSF, GISE, BMF, ISDV, SSPC, failure classes, metrics, and benchmark procedures are ATOR Institute research constructs.

## Primary Sources

1. Google Workspace Updates, **Use Sheets canvas to visualize data in custom, interactive mini-apps**, August 13, 2026: https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html
2. Google Workspace Admin Help, **Turn access to Google Workspace with Gemini Beta on or off**, current August 2026: https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/turn-access-to-google-workspace-with-gemini-beta-on-or-off
3. OpenAI Help Center, **ChatGPT Release Notes**, current through August 28, 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
4. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through August 25, 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

---

**D-ORIGIN | ATORAI | ALT-MAN | Eir'an | CHATJIPITI SINGH**
