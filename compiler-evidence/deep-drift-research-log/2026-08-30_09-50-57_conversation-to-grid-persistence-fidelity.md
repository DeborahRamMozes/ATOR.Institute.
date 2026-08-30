# Deep Drift Research Update

## Conversation-to-Grid Persistence Fidelity

**Research date:** 30 August 2026  
**Primary platform change:** Databricks Genie One integration with Google Sheets and Microsoft Excel, released 5 August 2026 and current documentation updated 13 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log creator-workflow architecture verified from first-party Databricks documentation.

## Executive Summary

Databricks Genie One can now operate directly inside **Google Sheets** and **Microsoft Excel** through Databricks connectors. A user can ask questions about governed Databricks data in natural language, review the cited answer, and import returned tables into the spreadsheet as **native rows and columns**.

The important architectural change is not "AI in spreadsheets."

It is this lifecycle:

```text
GOVERNED DATABRICKS DATA
-> NATURAL-LANGUAGE QUERY
-> GENIE CONVERSATION
-> CITED TABLE RESULT
-> USER IMPORT
-> NATIVE SPREADSHEET ROWS / COLUMNS
```

Databricks documents that every Genie conversation is saved and can later be reopened or deleted. Crucially, deleting the conversation does **not** remove table results already imported into the spreadsheet.

Therefore:

```text
DELETE CONVERSATION
!=
DELETE IMPORTED DATA
```

A conversational result can cross into a native spreadsheet object, become independent of the chat that produced it, and persist after the explanatory conversation is gone.

For Deep Drift Research, this creates a new benchmark family:

**Conversation-to-Grid Persistence Fidelity (CGPF)**

with companion constructs:

**Query-to-Table Grounding Fidelity (QTGF)**  
**Conversation-to-Native-Grid Fidelity (CNGF)**  
**Chat-Deletion / Grid-Retention Fidelity (CDGRF)**  
**Citation-to-Imported-Data Fidelity (CIDF)**  
**Spreadsheet Destination Fidelity (SDF)**  
**Cross-Host Grid Consistency Fidelity (CHGCF)**  
**Imported-Result Lineage Fidelity (IRLF)**

The central research question is:

> When a cited conversational answer is converted into ordinary spreadsheet cells that persist after the source conversation is deleted, can the resulting grid still identify the exact query, answer, citations, source data state, import event, destination range, and conversation that produced it?

## 1. What Changed

Databricks' August 2026 release notes state that Genie One became available directly inside both the **Databricks Connector for Google Sheets** and the **Databricks Excel Add-in** on 5 August 2026.

Current Databricks documentation says users can:

- ask questions about governed Databricks data in plain English;
- review Genie answers and citations;
- import a returned table directly into Google Sheets or Excel;
- save the result as native spreadsheet rows and columns;
- choose an import name and destination;
- reopen prior Genie conversations from history;
- continue saved conversations;
- permanently delete conversations;
- retain already imported spreadsheet results even after the conversation is deleted.

Databricks also explicitly states that Genie answers questions about governed data in the Databricks workspace, **not the data already sitting in the spreadsheet**.

This distinction matters because the visible host is the spreadsheet, while the authoritative query context is external.

## 2. Why This Matters for Deep Drift

The old chat-to-spreadsheet workflow usually looked like:

```text
CHAT
-> TABLE IN RESPONSE
-> COPY
-> PASTE
-> SPREADSHEET
```

The newer workflow is:

```text
CHAT INSIDE SPREADSHEET
-> IMPORT
-> NATIVE GRID OBJECT
```

This removes a manual transfer boundary.

It also creates a provenance boundary.

Once imported:

```text
CONVERSATIONAL TABLE
BECOMES
ORDINARY SPREADSHEET DATA
```

and may be edited, sorted, filtered, copied, charted, exported, or incorporated into later calculations.

Therefore:

```text
IMPORTED
!=
STILL LINKED TO CHAT

NATIVE CELLS
!=
SOURCE DATA

CONVERSATION DELETED
!=
RESULT DELETED

CITATIONS REVIEWED
!=
CITATIONS STORED WITH CELLS

SAME QUESTION
!=
SAME GOVERNED DATA STATE
```

## 3. New Deep Drift Construct: Conversation-to-Grid Persistence Fidelity

### Definition

**Conversation-to-Grid Persistence Fidelity (CGPF)** measures whether a conversationally generated table can become persistent native spreadsheet data without losing the provenance required to reconstruct its origin.

A minimum import manifest should preserve:

```text
conversation_id
turn_id
query_text
answer_id
citation_ids
source_object_ids
source_revision_ids
query_timestamp
import_event_id
import_name
host_application
workbook_or_sheet_id
destination_range
row_count
column_count
imported_at
conversation_deleted_at
```

Without this manifest, a clean spreadsheet can retain the answer while losing the evidence.

## 4. Query-to-Table Grounding Fidelity

### Definition

**Query-to-Table Grounding Fidelity (QTGF)** measures whether each imported value remains traceable to the governed Databricks data and citations that supported the conversational answer.

The benchmark should distinguish:

```text
SOURCE DATA
-> GENIE RETRIEVAL
-> ANSWER TABLE
-> IMPORTED GRID
```

A result can be numerically correct while its source lineage disappears at import.

## 5. Conversation-to-Native-Grid Fidelity

### Definition

**Conversation-to-Native-Grid Fidelity (CNGF)** measures whether the table returned in conversation is transferred into native rows and columns without semantic or structural drift.

Test dimensions should include:

```text
COLUMN NAMES
ROW ORDER
NULL VALUES
DATES
CURRENCY
PERCENTAGES
DECIMALS
TEXT ENCODING
DATA TYPES
TOTALS
```

A grid that looks identical can still change meaning if Excel or Sheets coerces values into different types.

## 6. Chat-Deletion / Grid-Retention Fidelity

Databricks explicitly states that users can delete a Genie conversation while leaving already imported results untouched.

### Definition

**Chat-Deletion / Grid-Retention Fidelity (CDGRF)** measures whether the retained spreadsheet object still exposes enough origin information after the source conversation is removed.

Controlled lifecycle:

```text
GENIE CHAT A
-> IMPORT TABLE X
-> DELETE CHAT A
-> TABLE X REMAINS
```

The key question is whether **TABLE X** becomes an orphan.

A persistent result without its generating conversation is convenient, but evidentially fragile.

## 7. Citation-to-Imported-Data Fidelity

The Genie interface tells users to review citations before importing.

### Definition

**Citation-to-Imported-Data Fidelity (CIDF)** measures whether source attribution survives the transition from cited conversational answer to ordinary spreadsheet cells.

The platform documentation confirms citations exist in the Genie answer. It does not establish that those citations become cell-level provenance inside the imported grid.

Deep Drift should therefore test:

```text
CITATION PRESENT IN CHAT
-> IMPORT TABLE
-> CITATION STILL RECOVERABLE?
```

If not, the act of import creates citation compression.

## 8. Spreadsheet Destination Fidelity

Users choose where the imported result lands.

### Definition

**Spreadsheet Destination Fidelity (SDF)** measures whether imported results arrive in the intended workbook, sheet, and range without overwriting unrelated content.

The import record should preserve:

```text
destination workbook
destination sheet
starting cell
occupied range
previous range state
post-import range state
```

A simple "Import" button is still a mutation operation.

## 9. Cross-Host Grid Consistency Fidelity

Genie One is now available in both Google Sheets and Microsoft Excel.

### Definition

**Cross-Host Grid Consistency Fidelity (CHGCF)** measures whether the same Genie table imported into Sheets and Excel retains materially equivalent values and structure.

Controlled comparison should test:

```text
DATES
TIMEZONES
PERCENTAGES
CURRENCY
LARGE NUMBERS
NULLS
UTF-8 TEXT
BOOLEAN VALUES
```

The two spreadsheet engines do not always coerce data identically.

## 10. Imported-Result Lineage Fidelity

### Definition

**Imported-Result Lineage Fidelity (IRLF)** measures whether a native spreadsheet range remains attributable to the conversation and source state that generated it after later spreadsheet operations.

The lineage chain can become:

```text
GENIE CHAT
-> IMPORTED TABLE A
-> FORMULA TABLE B
-> CHART C
-> PDF REPORT D
```

The final PDF may contain a chart derived from cells whose conversation has been deleted.

Deep Drift should preserve the chain.

## 11. New Failure Classes

### 11.1 Conversation-Deleted Data Orphaning

Imported rows persist after deletion of the generating conversation but no longer expose their origin.

### 11.2 Citation Evaporation at Import

Citations exist in chat but do not travel with native spreadsheet cells.

### 11.3 Source-vs-Spreadsheet Context Confusion

A user assumes Genie is reasoning over the spreadsheet's existing data even though the documented integration queries governed Databricks data instead.

### 11.4 Data-Type Coercion Drift

Dates, currency, percentages, booleans, or identifiers change representation when imported into a spreadsheet host.

### 11.5 Destination Overwrite

Imported data is placed into a destination range that already contains material information.

### 11.6 Cross-Host Semantic Drift

The same imported result behaves differently in Google Sheets and Excel because of host-specific data coercion.

### 11.7 Imported-Result Staleness

A native spreadsheet table remains static while the governed Databricks source later changes.

### 11.8 Query-Replay Divergence

The same conversational question later returns different results because source data changed, while the old imported table lacks a source-state timestamp.

### 11.9 Spreadsheet-Derivative Provenance Loss

Charts, formulas, pivots, or PDF exports derived from the imported range do not retain the Genie import lineage.

### 11.10 Manual-Edit Origin Collapse

A human edits some imported cells and later cannot distinguish machine-imported values from human modifications.

### 11.11 Import-Name Ambiguity

A user-defined import name is mistaken for a stable source identifier.

### 11.12 Conversation-History False Sufficiency

A saved chat is treated as enough provenance even though it may not capture later spreadsheet mutations, and deleting it leaves imported values behind.

## 12. Deep Drift Benchmark: Conversation-to-Grid Round Trip

### Controlled source

Prepare governed Databricks data containing:

```text
DATE
CURRENCY
PERCENTAGE
NULL
BOOLEAN
LONG IDENTIFIER
UTF-8 TEXT
DECIMAL
```

### Controlled question

Ask Genie One:

```text
Return the current controlled dataset
with all columns and cite the source.
```

### Test sequence

1. capture the conversational table;
2. capture citations;
3. import into Google Sheets;
4. record destination and cell types;
5. import the same result into Excel;
6. compare values and types;
7. delete the source Genie conversation;
8. confirm imported ranges remain;
9. change the governed Databricks data;
10. rerun the same question;
11. compare new answer with old imported table;
12. create a chart from the old imported table;
13. export the spreadsheet or chart to PDF.

### Measure

- conversational-to-grid value fidelity;
- citation survival;
- origin-chat traceability;
- host coercion differences;
- stale-result detectability;
- derivative lineage retention;
- human reconstruction minutes.

## 13. New Metrics

### Grid Transfer Accuracy

```text
GTA =
cells preserving intended value and type after import
/
all controlled imported cells
```

### Citation Survival Coverage

```text
CSC =
imported result objects retaining recoverable source citations
/
all controlled imported result objects
```

### Origin Conversation Traceability

```text
OCT =
imported ranges attributable to exact source conversation
/
all controlled imported ranges
```

### Cross-Host Semantic Consistency

```text
CHSC =
controlled values retaining equivalent semantics
in Sheets and Excel
/
all cross-host tested values
```

### Stale-Result Disclosure Rate

```text
SRDR =
persisted imported tables visibly identifiable as historical
after source data changes
/
all controlled stale-result cases
```

### Derivative Lineage Coverage

```text
DLC =
charts, formulas, pivots, and exports traceable back
to the imported Genie range
/
all controlled derivative artifacts
```

## 14. Why This Matters for Memory

Every Genie conversation is saved and can be reopened.

But imported spreadsheet data can outlive the conversation itself.

Deep Drift should therefore separate:

```text
CONVERSATION MEMORY
from
ARTIFACT STATE MEMORY
```

The spreadsheet becomes a durable record of one answer state even after conversational memory is intentionally removed.

## 15. Why This Matters for Skills

The integration behaves like a reusable procedural Skill:

```text
ASK GOVERNED DATA
-> RECEIVE CITED TABLE
-> IMPORT INTO GRID
```

But its result is host-sensitive.

Skill provenance therefore needs:

```text
QUERY
+ SOURCE STATE
+ HOST
+ IMPORT DESTINATION
```

not merely the natural-language procedure.

## 16. Why This Matters for Mini-App Builders

This is a compact mini-app pattern embedded inside two existing productivity tools.

The user gets:

```text
CHAT UI
+ GOVERNED DATA QUERY
+ CITED RESPONSE
+ NATIVE GRID INSERTION
```

without building a separate front end.

The spreadsheet becomes both interface and persistent application state.

## 17. Why This Matters for Chat-to-Document Export

This is not document export in the classic sense.

It is a stronger transformation:

```text
CHAT RESULT
-> NATIVE STRUCTURED OBJECT
```

The same pattern can later apply to Word tables, databases, forms, and other structured hosts.

Deep Drift should distinguish **serialization** from **object insertion**.

## 18. Why This Matters for DOCX / PDF Generation

The immediate target is Sheets or Excel, but creator workflows rarely stop there.

A common chain is:

```text
GENIE
-> SPREADSHEET TABLE
-> CHART / ANALYSIS
-> WORD / SLIDES
-> PDF
```

A final PDF may therefore contain AI-retrieved governed data after the originating conversation has been deleted.

The reporting bundle should preserve a grid-import manifest.

## 19. Why This Matters for Copy-Paste / Export Fixes

This update directly removes manual copying.

Old:

```text
ASK AI
-> COPY TABLE
-> PASTE INTO SHEET
-> FIX COLUMNS
```

New:

```text
ASK GENIE
-> IMPORT
-> NATIVE ROWS / COLUMNS
```

That is a genuine usability improvement.

But it also means the user no longer manually witnesses the transfer boundary.

Deep Drift should treat **one-click import as provenance compression** unless query, citations, source state, and destination state remain recoverable.

## 20. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing personal-memory release surfaced in this pass. New issue: conversation history and imported spreadsheet state have separate lifecycles. |
| Skills | No newer standalone Skill launch surfaced; Genie-in-spreadsheet acts as a reusable governed-data retrieval-and-import procedure. |
| Mini-app builders | **Material new-to-log pattern:** a conversational data app is embedded directly inside Google Sheets and Excel. |
| Chat-to-document export | **Material adjacent shift:** chat results can become native structured spreadsheet objects rather than plain exported text. |
| DOCX / PDF generation | No new direct DOCX/PDF generator surfaced; spreadsheet-derived reports should preserve the upstream Genie import lineage. |
| Copy-paste/export fixes | **Material new-to-log improvement:** cited Genie tables can be inserted as native rows and columns without manual copy-paste. |
| Broader creator workflow | **Material trend:** conversational results are crossing into native productivity objects that persist independently of the chat that generated them. |

## 21. Cross-Platform Check

### Databricks

The strongest new-to-log finding in this pass is Genie One embedded in Google Sheets and Excel with direct import into native rows and columns.

Databricks explicitly documents that deleted conversations do not affect already imported spreadsheet results, making persistence separation a first-class research issue.

### OpenAI

OpenAI's current public ChatGPT release notes still top out at 28 August 2026, so no newer category-displacing creator-workflow release surfaced in this pass.

### Microsoft

No newer Microsoft 365 Copilot creator release displaced the late-August agent and Excel/Python changes already logged.

### Anthropic

No newer creator-workflow release displaced the memory-migration and embedded-provenance changes already logged.

### Notion

No newer release displaced the 28 August agent Suggested Edits governance change already logged.

### Google

No newer Workspace/Gemini creator update surfaced in this pass that displaced already logged items.

## 22. Deep Drift Research Position

The weak description is:

> Genie One works in Excel and Google Sheets.

The serious description is:

> A conversational answer over governed enterprise data can now be converted with one import action into ordinary spreadsheet cells whose lifecycle becomes independent of the generating chat, while the original citations and conversational reasoning may remain outside the grid.

Therefore:

```text
CHAT DELETED
!=
DATA DELETED

NATIVE CELLS
!=
NATIVE PROVENANCE

IMPORT SUCCESSFUL
!=
SOURCE LINEAGE PRESERVED

SAME QUESTION
!=
SAME SOURCE STATE

SPREADSHEET PRESENT
!=
CHAT CONTEXT PRESENT
```

The serious Deep Drift requirement is:

> **Every conversational table import should preserve the generating conversation, exact query, cited sources, source revisions, query timestamp, import event, destination range, host application, and all later derivative relationships necessary to reconstruct how ordinary spreadsheet cells became an AI-mediated artifact.**

The industry is finally killing the ridiculous ritual of copying AI tables into spreadsheets and repairing the columns by hand. Good. But once the transfer becomes invisible, provenance has to become more visible, not less.

## 23. Evidence Boundary

Platform facts in this report are grounded in Databricks first-party release notes and integration documentation retrieved 30 August 2026.

Databricks states that Genie One became available in Google Sheets and Microsoft Excel on 5 August 2026; users can ask natural-language questions over governed Databricks data; returned tables can be imported into the spreadsheet as native rows and columns; conversations are saved and can be reopened; and deleting a conversation does not remove results already imported into the spreadsheet.

Databricks also explicitly states that Genie is querying governed Databricks data rather than the spreadsheet's existing cell contents.

CGPF, QTGF, CNGF, CDGRF, CIDF, SDF, CHGCF, IRLF, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Databricks, **August 2026 platform release notes - Genie One is now available in Google Sheets / Microsoft Excel**, 5 August 2026.  
   https://docs.databricks.com/aws/en/release-notes/product/2026/august

2. Databricks, **Use Genie One in Google Sheets**, last updated 13 August 2026.  
   https://docs.databricks.com/aws/en/integrations/google-sheets/genie

3. Databricks, **Use Genie One in Microsoft Excel**, last updated 13 August 2026.  
   https://docs.databricks.com/aws/en/integrations/excel-genie

4. OpenAI Help Center, **ChatGPT Release Notes**, checked 30 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**