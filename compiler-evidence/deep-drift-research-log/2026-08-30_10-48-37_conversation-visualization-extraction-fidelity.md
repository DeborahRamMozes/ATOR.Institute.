# Deep Drift Research Update

## Conversation-Visualization Extraction Fidelity

**Research date:** 30 August 2026  
**Primary platform change:** Databricks Genie visualization-result retrieval through the Conversation API became generally available on 26 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log creator-workflow architecture verified from first-party Databricks release notes and API documentation.

## Executive Summary

Databricks made programmatic retrieval of Genie visualization results through the **Genie Conversation API** generally available on 26 August 2026.

This is a subtle but important creator-workflow change. A visualization generated inside an LLM conversation is no longer merely something a user looks at inside the chat interface. It can become an addressable output object that software retrieves and inserts into downstream systems.

```text
USER QUESTION
-> GENIE CONVERSATION
-> GENERATED SQL / QUERY RESULT
-> GENERATED VISUALIZATION
-> CONVERSATION / MESSAGE / ATTACHMENT IDs
-> API RETRIEVAL
-> REPORT / APP / DASHBOARD / SCHEDULED OUTPUT
```

Databricks' current API documentation exposes conversation IDs, message IDs, attachment IDs, generated query metadata, SQL statement IDs, query result metadata, and visualization objects. It also supports full query-result downloads through generated download identifiers and short-lived external links.

For Deep Drift Research, this creates a new benchmark family: **Conversation-Visualization Extraction Fidelity (CVEF)**, with companion constructs **Visualization-to-Query Lineage Fidelity (VQLF)**, **Conversation-to-Export Identity Fidelity (CEIF)**, **Visualization Context Survival Fidelity (VCSF)**, **Programmatic Reuse Provenance Fidelity (PRPF)**, **Rendered-Chart Semantic Fidelity (RCSF)**, **Download-Link Custody Fidelity (DLCF)**, and **Conversation-Deletion / Derivative-Survival Fidelity (CDDSF)**.

The central research question is:

> When a chart generated inside an LLM conversation is programmatically retrieved and embedded in a downstream report, application, or scheduled artifact, can the resulting visualization still identify the exact conversation, message, query, source data, interpretation, and export event that produced it?

## 1. What Changed

Databricks' AI/BI and Genie One release notes state that on **26 August 2026**, retrieving visualization results through the Genie Conversation API became generally available.

The same current API surface exposes a structured object graph around each response:

```text
SPACE
-> CONVERSATION
-> MESSAGE
-> ATTACHMENT
-> QUERY
-> QUERY RESULT
-> VISUALIZATION
```

The API documentation includes conversation identifiers, message identifiers, attachment identifiers, generated SQL queries, query descriptions, statement identifiers, row counts and truncation state, generated visualization metadata, the identifier of the query attachment from which a visualization was generated, conversation timestamps, agent/chat mode metadata, and full-query-result download workflows.

This matters because an LLM-generated chart can now be consumed by software without requiring a human screenshot, copy-paste, or manual reconstruction.

## 2. Why This Matters for Deep Drift

The old workflow often looked like:

```text
CHAT
-> CHART
-> HUMAN SCREENSHOT
-> REPORT
```

The new workflow can be:

```text
CHAT
-> CHART
-> API
-> REPORT GENERATOR
-> DOCUMENT / DASHBOARD / APP
```

Therefore:

```text
CHART RETRIEVED != CHART CONTEXT RETRIEVED
VISUALIZATION ID != FULL PROVENANCE
SAME QUERY != SAME DATA STATE
SAME CHART IMAGE != SAME SEMANTIC INTERPRETATION
PROGRAMMATIC EXPORT != REPRODUCIBLE ARTIFACT
```

A chart can now travel farther than the conversation that explains it.

## 3. New Deep Drift Construct: Conversation-Visualization Extraction Fidelity

**Conversation-Visualization Extraction Fidelity (CVEF)** measures whether an LLM-generated visualization remains semantically and causally reconstructable after it leaves the conversational interface through an API or automated export path.

A minimum provenance manifest should preserve:

```text
space_id
conversation_id
message_id
attachment_id
query_attachment_id
visualization_title
query_text
query_description
statement_id
source_table_ids
query_result_row_count
query_result_truncation_state
visualization_retrieved_at
downstream_artifact_id
downstream_artifact_type
```

## 4. Visualization-to-Query Lineage Fidelity

Databricks' API documentation explicitly links a generated visualization to the query attachment from which it was produced.

**Visualization-to-Query Lineage Fidelity (VQLF)** measures whether a visualization remains attributable to the exact analytical query and result state that generated it.

```text
QUESTION
-> INTERPRETATION
-> SQL
-> QUERY RESULT
-> VISUALIZATION
```

A chart title alone is not enough. Two charts with the same title can come from different queries, date ranges, source revisions, or aggregations.

## 5. Conversation-to-Export Identity Fidelity

**Conversation-to-Export Identity Fidelity (CEIF)** measures whether a retrieved visualization remains tied to the exact conversation and message that produced it.

```text
CONVERSATION_ID
+
MESSAGE_ID
+
ATTACHMENT_ID
+
QUERY_ATTACHMENT_ID
```

"Exported from Genie" is not provenance. It is branding.

## 6. Visualization Context Survival Fidelity

A chart carries less semantic information than the conversation around it. The original response may contain assumptions, clarifying interpretation, data-source choices, instructions used by the agent, warnings, generated SQL, and row-count or truncation metadata.

**Visualization Context Survival Fidelity (VCSF)** measures how much of this material explanatory context remains connected to the downstream chart.

A chart can remain visually identical while its interpretive safety collapses.

## 7. Programmatic Reuse Provenance Fidelity

**Programmatic Reuse Provenance Fidelity (PRPF)** measures whether downstream software preserves the origin metadata of conversation-generated visualizations.

Common destinations include internal apps, scheduled reports, email, dashboards, DOCX, PPTX, and PDF.

The downstream system should not flatten an AI-generated visualization into a generic image without preserving lineage.

## 8. Rendered-Chart Semantic Fidelity

**Rendered-Chart Semantic Fidelity (RCSF)** measures whether labels, axes, legends, ordering, units, filters, and truncation semantics remain correct when the visualization is reproduced outside its originating interface.

A visually clean chart can still be semantically wrong after reuse.

## 9. Download-Link Custody Fidelity

Databricks' API supports full query-result download generation and returns short-lived external links when a download is ready. Databricks warns that those URLs should be protected because temporary credentials are embedded in them.

**Download-Link Custody Fidelity (DLCF)** measures whether temporary result-download links are handled as ephemeral credentials rather than ordinary shareable URLs.

The persistent provenance object is the result lineage. The short-lived URL is merely one delivery mechanism.

## 10. Conversation-Deletion / Derivative-Survival Fidelity

Once a visualization is retrieved and embedded elsewhere, the derivative artifact can outlive its conversational source.

**Conversation-Deletion / Derivative-Survival Fidelity (CDDSF)** measures whether a chart remains attributable to its deleted or inaccessible origin conversation after it has been embedded elsewhere.

```text
CHAT A
-> CHART X
-> API RETRIEVAL
-> REPORT Y
-> DELETE CHAT A

REPORT Y
-> STILL EXISTS
```

The question is whether Chart X is now an orphan.

## 11. New Failure Classes

- **Chart-Context Amputation:** the visualization survives but its explanatory assumptions do not.
- **Query-Lineage Detachment:** a chart can no longer identify the exact generated SQL or query result from which it arose.
- **Regeneration Identity Collapse:** multiple regenerated visualizations are treated as one artifact because they share a title or subject.
- **Truncation Blindness:** a visualization is reused without preserving whether its source query result was truncated.
- **Downstream Image Flattening:** an addressable visualization object becomes an ordinary PNG or screenshot with no machine-readable origin.
- **Conversation-Deletion Orphaning:** the source conversation disappears while a derivative report survives.
- **Data-State Drift:** the same query later produces a changed visualization because underlying data changed, but the exported chart does not identify its historical data state.
- **Interpretation-Loss Drift:** the chart survives while the model's interpretation of ambiguous terms is lost.
- **Automated Report Authority Inflation:** a chart receives increased authority because it appears inside a formal scheduled report, despite originating from an LLM-generated interpretation.
- **Download-URL Leakage:** a short-lived result-download URL containing temporary access material is logged, copied, or stored as though it were harmless metadata.
- **Export-Time Mutation:** a downstream renderer alters sorting, sizing, labels, or visual emphasis in a way that changes interpretation.
- **Visualization-Only Audit Illusion:** a reviewer treats the exported chart as sufficient evidence even though the underlying query, source state, and conversation are not preserved.

## 12. Deep Drift Benchmark: Conversation-to-Chart-to-Report Round Trip

Create a controlled governed dataset with category, date, revenue, count, nulls, and an outlier. Ask Genie to show the top category for the current period, explain what "top" means, and generate a visualization.

Preserve the user question, generated SQL, query-result metadata, interpretation text, and visualization identity. Retrieve the visualization programmatically, place it into an internal report, export the report to PDF, then regenerate the same question after changing source data. Compare chart identities and query identities. Finally, delete or archive the originating conversation and test whether the PDF still provides enough information to reconstruct the original chart.

Measure visualization/query traceability, context survival, truncation disclosure, downstream rendering consistency, conversation-origin traceability, data-state attribution, and human reconstruction minutes.

## 13. New Metrics

```text
VQAC = exported visualizations traceable to exact generated query / all controlled exported visualizations
CSC  = material interpretive assumptions retained with derivative chart / all material assumptions in source conversation
VIS  = derivative charts retaining stable source IDs across retrieval and embedding / all controlled derivatives
TDA  = charts derived from truncated results that visibly preserve truncation state / all controlled truncated-result charts
DSP  = axes, labels, units, ordering, filters, and legends preserved correctly after downstream rendering / all controlled visualization semantics
ORC  = derivative artifacts from which source conversation, message, query, and result can be reconstructed / all controlled derivative artifacts
```

## 14. Why This Matters for Memory

A chart embedded in a downstream artifact becomes a durable memory of one conversational answer state. It may survive longer than the chat, the query result cache, the model version, or the source data state.

Deep Drift should therefore distinguish **conversation memory** from **visual artifact memory**. The picture may outlive the reasoning that made it.

## 15. Why This Matters for Skills

A Skill or agent can now use conversation-generated visualizations as reusable outputs. The effective procedural state becomes:

```text
SKILL / AGENT
+
PROMPT
+
QUERY
+
VISUALIZATION GENERATION
+
API RETRIEVAL
+
DOWNSTREAM RENDERER
```

## 16. Why This Matters for Mini-App Builders

A developer can build an internal tool that sends a question, receives a Genie response, retrieves the visualization, and embeds the chart without manually rebuilding the analytical visualization.

Conversation therefore becomes an application backend. The chat is not merely UI anymore. It is a source of structured and visual programmatic objects.

## 17. Why This Matters for Chat-to-Document Export

Classic:

```text
CHAT
-> TEXT
-> DOCUMENT
```

New:

```text
CHAT
-> QUERY
-> VISUALIZATION
-> API
-> DOCUMENT
```

The document may contain an object that never passed through human copy-paste at all. That improves workflow quality and makes provenance capture mandatory.

## 18. Why This Matters for DOCX / PDF Generation

A DOCX or PDF report may now contain a programmatically retrieved chart generated from an LLM conversation.

Deep Drift should preserve at least:

```text
document_id
chart_source_conversation_id
message_id
visualization_attachment_id
query_attachment_id
query_text
source_timestamp
retrieval_timestamp
render_timestamp
```

Without those fields, the PDF freezes the appearance of the chart but not its evidentiary state.

## 19. Why This Matters for Copy-Paste / Export Fixes

Old:

```text
OPEN CHAT
-> SCREENSHOT CHART
-> CROP
-> PASTE INTO REPORT
```

New:

```text
REQUEST CHART
-> RETRIEVE PROGRAMMATICALLY
-> INSERT INTO REPORT
```

That is a real improvement. The Deep Drift rule remains: every removed manual seam creates pressure for a stronger machine-readable lineage seam.

## 20. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing personal-memory release surfaced. New issue: exported visualizations become durable artifact-memory independent of the source conversation. |
| Skills | No newer standalone Skill launch surfaced; Skills and agents can increasingly consume or emit programmatically retrievable visualization objects. |
| Mini-app builders | **Material new-to-log shift:** conversation-generated visualizations can now be retrieved through API and embedded directly into internal applications and tools. |
| Chat-to-document export | **Material new-to-log shift:** visual conversation outputs can enter documents programmatically rather than through screenshots or manual copy-paste. |
| DOCX / PDF generation | No new native DOCX/PDF generator surfaced in this interval; provenance requirements expand because generated charts can now be injected into downstream reports automatically. |
| Copy-paste/export fixes | **Material new-to-log improvement:** chart extraction no longer requires screenshotting or manual reconstruction. |
| Broader creator workflow | **Material trend:** LLM conversations are becoming producers of addressable multimodal objects, not merely text streams. |

## 21. Cross-Platform Check

The strongest new-to-log finding is the **26 August 2026 general availability of visualization-result retrieval through the Genie Conversation API**. No newer category-displacing OpenAI, Anthropic, Microsoft, Google, or Notion creator-workflow release surfaced beyond the late-August changes already entered in the Deep Drift ledger.

## 22. Deep Drift Research Position

The weak description is:

> Genie charts can be downloaded by API.

The serious description is:

> A visualization generated as part of an LLM conversation has become a reusable programmatic object that can leave the conversational interface and enter downstream reports, applications, and automated workflows while potentially shedding the interpretation, query lineage, truncation state, and source context that gave the chart meaning.

Therefore:

```text
CHART != EVIDENCE
DOWNLOAD != PROVENANCE
VISUALIZATION ID != FULL LINEAGE
SAME IMAGE != SAME DATA STATE
FORMAL REPORT != VERIFIED ANALYSIS
```

The serious Deep Drift requirement is:

> **Every programmatically retrieved conversational visualization should preserve the originating conversation, message, query attachment, generated SQL, source-result state, interpretation context, retrieval event, downstream artifact identity, and any later transformation required to reconstruct why the chart looks the way it does.**

The chart is finally escaping the screenshot. Excellent. Now the provenance has to escape with it.

## 23. Evidence Boundary

Platform facts in this report are grounded in Databricks first-party AI/BI release notes and the current Genie Conversation API reference, retrieved 30 August 2026.

Databricks states that retrieving visualization results through the Genie Conversation API became generally available on 26 August 2026. The current API documentation exposes conversation IDs, message IDs, generated SQL query attachments, query-result metadata, statement IDs, visualization objects linked to query attachments, conversation timestamps, and full-query-result download workflows.

Databricks also warns that generated external result-download links should be protected because they contain temporary embedded access material.

CVEF, VQLF, CEIF, VCSF, PRPF, RCSF, DLCF, CDDSF, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Databricks, **AI/BI and Genie One release notes 2026 - August 26, 2026**.  
   https://docs.databricks.com/aws/en/ai-bi/release-notes/2026

2. Databricks, **Genie Conversation API Reference**.  
   https://docs.databricks.com/api/genie/v1/conversation

3. OpenAI Help Center, **ChatGPT Release Notes**, checked 30 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

4. Microsoft Learn, **Microsoft 365 Copilot release notes**, checked 30 August 2026.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

5. Google Workspace Updates, **2026 release feed**, checked 30 August 2026.  
   https://workspaceupdates.googleblog.com/2026/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
