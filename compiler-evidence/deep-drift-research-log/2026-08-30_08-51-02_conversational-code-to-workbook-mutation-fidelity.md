# Deep Drift Research Update

## Conversational Code-to-Workbook Mutation Fidelity

**Research date:** 30 August 2026  
**Primary platform change:** Microsoft 365 Copilot release cluster published 25 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log creator-workflow architecture verified from first-party Microsoft documentation.

## Executive Summary

Microsoft 365 Copilot now lets users invoke Python through **Edit with Copilot in Excel** using natural language. Copilot can execute Python for advanced analysis, automation, data transformation, statistics, simulations, and visualizations, with results written directly into the active workbook.

The critical workflow is:

```text
NATURAL-LANGUAGE REQUEST
-> COPILOT INTERPRETATION
-> PYTHON GENERATION / EXECUTION
-> WORKBOOK DATA READ
-> ANALYSIS / TRANSFORMATION
-> RESULT WRITTEN INTO WORKBOOK
-> HUMAN REVIEW
```

This is not ordinary formula assistance.

It combines:

```text
CHAT
+
CODE GENERATION
+
EXECUTION RUNTIME
+
NATIVE ARTIFACT MUTATION
```

For Deep Drift Research, this creates a new benchmark family:

**Conversational Code-to-Workbook Mutation Fidelity (CCWMF)**

with companion constructs:

**Prompt-to-Code Fidelity (PCF)**  
**Code-to-Workbook Mutation Fidelity (CWMF)**  
**Runtime-State Attribution Fidelity (RSAF)**  
**Workbook Structural Preservation Fidelity (WSPF)**  
**Analysis-to-Artifact Traceability (AAT)**  
**Human-Review Boundary Fidelity (HRBF)**  
**Cross-Surface Workbook Reproducibility (CSWR)**

The central question is:

> When a natural-language request is converted into Python, executed inside an Excel-controlled environment, and used to modify a workbook, can the final workbook preserve enough evidence to reconstruct the prompt, generated code, runtime state, input ranges, changed cells/objects, and human review that produced the artifact?

## 1. What Changed

Microsoft's 25 August 2026 Microsoft 365 Copilot release notes state that **Edit with Copilot in Excel** can now execute Python for advanced analysis, automation, data transformation, statistics, simulations, and advanced visualizations, with results output directly into the workbook.

Microsoft explicitly frames the change as a move from user intent to working analysis without leaving Excel.

Current Microsoft documentation on Python in Excel adds important runtime constraints:

- Python code executes in a Microsoft-controlled isolated environment;
- Python returns workbook output through Excel's Python mechanisms;
- Python execution is governed by Excel security controls;
- workbook-specific Python initialization settings can affect behavior;
- those settings also affect Copilot in Excel with Python;
- Python code does not have unrestricted access to workbook properties such as VBA/macros.

This matters because the workbook result depends on more than the visible natural-language request.

## 2. Why This Matters for Deep Drift

The old spreadsheet-assistant model looked like:

```text
USER PROMPT
-> FORMULA SUGGESTION
-> USER INSERTS FORMULA
```

The newer model is:

```text
USER PROMPT
-> LLM GENERATES CODE
-> CODE EXECUTES
-> WORKBOOK MUTATES
```

Therefore:

```text
PROMPT
!=
EXECUTED CODE

EXECUTED CODE
!=
VISIBLE RESULT

VISIBLE RESULT
!=
COMPLETE MUTATION HISTORY

SAME PROMPT
!=
SAME RUNTIME STATE

WORKBOOK LOOKS CORRECT
!=
WORKBOOK IS REPRODUCIBLE
```

A workbook becomes a computed artifact whose state may include hidden assumptions from Python libraries, workbook initialization settings, source ranges, and execution timing.

## 3. New Deep Drift Construct: Conversational Code-to-Workbook Mutation Fidelity

### Definition

**Conversational Code-to-Workbook Mutation Fidelity (CCWMF)** measures whether a conversational AI can convert natural-language intent into executed code and native workbook changes while preserving a reconstructable chain from request to code to result.

A minimum execution manifest should preserve:

```text
workbook_id
workbook_version_before
chat_id
prompt_turn_id
prompt_text
generated_python
python_environment_state
library_versions
initialization_settings
input_ranges
output_ranges
visualization_objects
execution_timestamp
execution_result
workbook_version_after
human_review_event
```

## 4. Prompt-to-Code Fidelity

### Definition

**Prompt-to-Code Fidelity (PCF)** measures whether the generated Python implements the user's actual requested analysis without silently expanding scope.

Controlled prompt:

```text
"Summarize monthly revenue trends
and create one visualization.
Do not alter source data."
```

The benchmark should verify:

```text
ANALYSIS GENERATED
YES

ONE VISUALIZATION
YES

SOURCE DATA MUTATED
NO
```

The serious risk is not syntax failure.

It is scope interpretation.

## 5. Code-to-Workbook Mutation Fidelity

### Definition

**Code-to-Workbook Mutation Fidelity (CWMF)** measures whether executed Python changes exactly the intended workbook objects and nothing else.

Tests should record:

```text
CELLS READ
CELLS WRITTEN
TABLES CREATED
CHARTS / VISUALS CREATED
SHEETS ADDED
SHEETS MODIFIED
FORMULAS PRESERVED
FORMATTING PRESERVED
```

A plausible result in a visible range does not prove that collateral workbook state remained intact.

## 6. Runtime-State Attribution Fidelity

Microsoft's Python in Excel documentation shows that initialization settings and available libraries affect Python behavior.

### Definition

**Runtime-State Attribution Fidelity (RSAF)** measures whether a workbook result remains attributable to the exact execution environment used at generation time.

The runtime record should include:

```text
PYTHON VERSION / ENVIRONMENT
AVAILABLE LIBRARIES
IMPORT STATE
INITIALIZATION SETTINGS
SECURITY MODE
WORKBOOK TRUST STATE
```

This is especially important for recurring analyses.

A workbook can remain unchanged while the environment state changes underneath it.

## 7. Workbook Structural Preservation Fidelity

Excel is a structured computational artifact, not a flat table.

### Definition

**Workbook Structural Preservation Fidelity (WSPF)** measures whether Copilot-assisted Python preserves unrelated workbook structure.

Protected elements should include:

```text
FORMULAS
NAMED RANGES
TABLE STRUCTURE
FORMATTING
PIVOTTABLES
CHARTS
DATA VALIDATION
HIDDEN SHEETS
CELL COMMENTS
LINKS
```

Not every protected element is directly visible to Python, but the final operation should still be checked for structural collateral damage.

## 8. Analysis-to-Artifact Traceability

### Definition

**Analysis-to-Artifact Traceability (AAT)** measures whether each major conclusion, generated table, or visualization in the workbook can be traced back to:

```text
SOURCE RANGE
-> PYTHON TRANSFORMATION
-> RESULT OBJECT
```

Without this chain, the user sees an analytical object but cannot audit how it arose.

## 9. Human-Review Boundary Fidelity

Microsoft tells users to review the output and inspect results in Excel.

That review step matters.

### Definition

**Human-Review Boundary Fidelity (HRBF)** measures whether the workflow clearly separates:

```text
AI EXECUTION COMPLETE
from
HUMAN ACCEPTANCE / TRUST
```

A generated chart appearing inside a workbook can easily acquire false authority merely because it occupies a familiar professional surface.

The workbook should not visually imply that execution equals verification.

## 10. Cross-Surface Workbook Reproducibility

The feature is documented for Windows, Mac, and Web.

### Definition

**Cross-Surface Workbook Reproducibility (CSWR)** measures whether equivalent requests and workbook states produce materially consistent Python-backed results across supported Excel surfaces.

Tests should compare Windows, Mac, and Web for code generation, output values, visualization behavior, range placement, runtime errors, and review affordances.

## 11. New Failure Classes

### 11.1 Prompt-to-Code Scope Expansion

The generated Python performs operations beyond the requested analysis.

### 11.2 Hidden Input-Range Drift

The code analyzes a broader or different range than the user expected.

### 11.3 Runtime-State Opacity

The result depends on initialization settings or library behavior that is not preserved with the analytical provenance.

### 11.4 Source-Data Mutation during Analysis

A request for analysis changes raw source values or structure.

### 11.5 Visualization Authority Inflation

A generated chart appears polished and therefore receives more trust than its analytical method deserves.

### 11.6 Code/Result Detachment

The workbook keeps the output while the exact code that produced it becomes difficult to recover.

### 11.7 Workbook-Version Orphaning

The result remains after later edits, but its originating workbook state is no longer reconstructable.

### 11.8 Cross-Surface Execution Drift

The same workbook and prompt produce materially different behavior on Web, Mac, and Windows.

### 11.9 Hidden Initialization Dependency

Workbook initialization settings change Python behavior without being represented in the visible prompt.

### 11.10 Manual Edit Provenance Collapse

A human edits an AI-generated result and the workbook no longer distinguishes generated output from subsequent human modification.

### 11.11 Partial Recalculation Ambiguity

A workbook is reopened or recalculated later, but it is unclear whether a visible analytical result reflects the original execution or a newer recalculation state.

### 11.12 Code-Security Misinterpretation

Users treat Excel's isolated Python runtime as proof that the analytical logic itself is correct or appropriately scoped.

## 12. Deep Drift Benchmark: Prompt-Code-Workbook Round Trip

Create a controlled workbook with raw monthly sales, protected formulas, an existing chart, and hidden control values. Ask Copilot to analyze trends, create one summary table and one visualization, and explicitly preserve raw data and protected workbook structures.

Capture workbook version/hash, generated code, read/write ranges, result objects, before/after structure, manual edits, reruns, and cross-surface behavior.

Measure prompt-to-code compliance, input-range accuracy, mutation-scope precision, structural preservation, code/result traceability, cross-surface consistency, and human repair minutes.

## 13. New Metrics

### Prompt-to-Code Constraint Accuracy

```text
PCCA =
prompt constraints correctly represented in code
/
all controlled prompt constraints
```

### Mutation Scope Precision

```text
MSP =
authorized workbook changes
/
all workbook changes caused by the AI-assisted execution
```

### Analytical Lineage Coverage

```text
ALC =
material result objects traceable to source range + executed code
/
all material generated result objects
```

### Structural Preservation Rate

```text
SPR =
protected workbook structures preserved
/
all protected structures tested
```

### Runtime Reconstruction Coverage

```text
RRC =
runs reconstructable from preserved prompt, code, environment,
initialization state, and workbook version
/
all controlled runs
```

### Cross-Surface Consistency Rate

```text
CSCR =
material outputs consistent across supported Excel surfaces
/
all cross-surface controlled tests
```

## 14. Why This Matters for Memory

This is not a personal-memory feature. It introduces **computational state memory** inside a persistent artifact. The workbook can retain results from an AI-generated code execution after the originating chat ends.

Deep Drift should distinguish conversation memory, workbook state, Python execution state, and human edit state.

## 15. Why This Matters for Skills

Python execution behaves like a procedural Skill embedded in the host application. The effective Skill is natural-language instruction + code generation + Python runtime + Excel object boundary + workbook state. Runtime state is therefore part of Skill identity.

## 16. Why This Matters for Mini-App Builders

A user can construct a temporary analytical application through language: input data + natural-language procedure + Python + output table + visualization. The spreadsheet becomes both interface and deployment target.

## 17. Why This Matters for Chat-to-Document Export

The relevant pattern is no longer simple export. It is **chat -> code -> native artifact mutation**. Deep Drift should treat this as distinct from **chat -> DOCX export** because the output is computed rather than serialized.

## 18. Why This Matters for DOCX / PDF Workflows

The primary artifact here is XLSX, but downstream reporting often becomes Excel analysis -> Word -> PDF. A final report may inherit conclusions from AI-generated Python while losing the code and workbook-state evidence that produced them. DOCX/PDF reporting bundles should preserve links back to the source workbook and analysis manifest.

## 19. Why This Matters for Copy-Paste / Export Fixes

The feature removes another manual transfer layer:

```text
OLD:
EXPORT DATA -> OPEN PYTHON TOOL -> RUN CODE -> COPY RESULT -> PASTE INTO EXCEL

NEW:
ASK COPILOT -> PYTHON RUNS -> RESULT APPEARS IN WORKBOOK
```

This is a serious workflow improvement, but it compresses multiple visible human handoffs into one conversational action. Deep Drift should treat friction reduction as provenance compression unless hidden intermediate states are preserved.

## 20. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing personal-memory release surfaced. New issue: analytical execution state persists independently of conversation memory. |
| Skills | **Material new-to-log shift:** natural-language Excel editing now invokes a Python-backed procedural runtime. |
| Mini-app builders | **Material adjacent shift:** a spreadsheet can become a language-defined analytical mini-app with code execution and native outputs. |
| Chat-to-document export | No new standalone chat-to-DOCX/PDF feature surfaced. New class: chat-to-code-to-native-artifact mutation. |
| DOCX / PDF generation | No new direct DOCX/PDF generator surfaced in this interval; downstream reports should preserve workbook-analysis provenance. |
| Copy-paste/export fixes | **Material workflow replacement:** Python analysis can execute and return results directly inside Excel without external copy/paste. |
| Broader creator workflow | **Material new-to-log trend:** conversational AI is moving from generating artifact content to executing code that mutates native professional artifacts in place. |

## 21. Cross-Platform Check

**Microsoft:** strongest new-to-log item is Python execution through Edit with Copilot in Excel, in the 25 August 2026 release cluster. Microsoft documents Windows, Mac, and Web support and says existing execution/security controls remain in effect.

**OpenAI:** no newer category-displacing public ChatGPT release surfaced beyond already logged late-August changes.

**Anthropic:** no newer creator-workflow change displaced the already logged memory-migration and embedded-provenance items.

**Notion:** the 28 August agent Suggested Edits release remains the latest material creator-governance change.

**Databricks:** no newer material creator-runtime change displaced the late-August Genie changes already logged.

**Google:** no newer category-displacing Workspace/Gemini creator update surfaced in this pass.

## 22. Deep Drift Research Position

The weak description is:

> Copilot can use Python in Excel.

The serious description is:

> A conversational model can translate natural-language intent into executable Python, run that code inside a controlled spreadsheet runtime, and write analytical results back into the native workbook that users may later treat as an authoritative professional artifact.

Therefore:

```text
CHAT REQUEST != EXECUTED PROCEDURE
EXECUTED PROCEDURE != VISIBLE RESULT
VISIBLE RESULT != VERIFIED ANALYSIS
WORKBOOK OUTPUT != REPRODUCIBLE WORKFLOW
```

The serious Deep Drift requirement is:

> **Every conversational code-to-workbook operation should preserve the originating prompt, generated Python, workbook version, input and output ranges, runtime and initialization state, material workbook mutations, human review event, and downstream reporting lineage.**

The spreadsheet has stopped being merely a destination for AI prose. It is becoming an executable surface. Naturally, the interface gets simpler at exactly the moment the provenance underneath it becomes more complicated.

## 23. Evidence Boundary

Platform facts in this report are grounded in Microsoft's first-party Microsoft 365 Copilot release notes and Microsoft Support documentation retrieved on 30 August 2026.

Microsoft states that Edit with Copilot can execute Python for advanced analysis, automation, transformation, statistics, simulations, and visualizations with results output directly into the workbook. Microsoft also documents that Python in Excel executes inside isolated controlled environments, follows Excel security behavior, uses workbook Python initialization settings, and that those settings can affect Copilot with Python.

CCWMF, PCF, CWMF, RSAF, WSPF, AAT, HRBF, CSWR, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Microsoft Learn, **Microsoft 365 Copilot release notes - August 25, 2026**.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

2. Microsoft Support, **Data security and Python in Excel**, retrieved 30 August 2026.  
   https://support.microsoft.com/en-us/excel/python/data-security-and-python-in-excel

3. Microsoft Support, **Python in Excel initialization settings**, retrieved 30 August 2026.  
   https://support.microsoft.com/en-US/Excel/python/python-in-excel-initialization-settings

4. Microsoft Support, **Python in Excel code editor**, retrieved 30 August 2026.  
   https://support.microsoft.com/en-us/excel/python/python-in-excel-code-editor

5. OpenAI Help Center, **ChatGPT Release Notes**, checked 30 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

6. Notion, **What's New**, checked 30 August 2026.  
   https://www.notion.com/releases

7. Databricks, **AI/BI and Genie One release notes 2026**, checked 30 August 2026.  
   https://docs.databricks.com/aws/en/ai-bi/release-notes/2026

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**