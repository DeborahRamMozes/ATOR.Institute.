# Deep Drift Research Update

## Conversation-to-Agent-to-Report Portability Fidelity

**Research date:** 31 August 2026  
**Primary platform delta:** Databricks Genie One / Genie Agents late-August creator workflow expansion  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log creator workflow delta verified from Databricks / Microsoft Learn first-party release notes.

## Executive Summary

Databricks' late-August 2026 Genie updates combine several capabilities that are more significant together than separately.

On **27 August 2026**, Genie Agents' **Agent mode APIs became generally available**, allowing multi-step agent mode to be embedded programmatically in chatbots, scheduled reports, and internal tools. On the same date, Genie One added **pin and rename for chats**, **visualizations in scheduled-task emails**, a **native macOS desktop app**, and the ability to **create scheduled tasks from the mobile app**.

These changes extend an earlier **20 August 2026** release in which Genie One added **document export to PDF** and made scheduled tasks consult past runs to improve run-to-run consistency.

The resulting architecture is:

```text
PAST CONVERSATIONS / MEMORY
-> CURRENT GENIE CHAT
-> AGENT MODE
-> PROGRAMMATIC API OR SCHEDULED TASK
-> VISUALIZATION / DOCUMENT
-> PDF OR EMAIL DELIVERY
-> DESKTOP / MOBILE / EMBEDDED SURFACE
```

For Deep Drift Research, this is a new portability problem. The same analytical procedure can now move among conversational history, agent execution, scheduled automation, API embedding, native desktop/mobile surfaces, and a static PDF artifact.

This report formalizes the benchmark family:

**Conversation-to-Agent-to-Report Portability Fidelity (CARPF)**

with companion constructs:

- Conversation-State Portability Fidelity
- Agent-Mode API Parity Fidelity
- Scheduled-Run Continuity Fidelity
- Visualization-to-Email Fidelity
- Document-to-PDF Export Fidelity
- Cross-Surface Task Identity Fidelity
- Chat-Naming and Retrieval Fidelity
- Tool-to-Report Lineage Fidelity

The central research question is:

> When one conversational analysis becomes an agent run, scheduled task, API result, visual email, or PDF report, can a later reviewer still reconstruct the exact conversation state, agent mode, tool configuration, schedule run, visualization, document version, and export event that produced it?

## 1. What Changed on 27 August 2026

Databricks documents the following changes for Genie Agents and Genie One:

- Agent mode APIs are now generally available.
- Agent authors can attach scalar and table-valued Unity Catalog functions as tools.
- Genie One chats can be pinned.
- Genie One chats can be renamed.
- Scheduled task emails can include visualizations.
- A native macOS Genie One desktop app is available in beta.
- Scheduled tasks can be created directly from the Genie mobile app in public preview.
- Unity Catalog tables can be opened directly beside the current conversation.

The most important structural change is API availability.

Agent Mode is no longer only an interactive end-user feature. It can become part of:

```text
CHATBOT
SCHEDULED REPORT
INTERNAL TOOL
EMBEDDED APPLICATION
```

That makes the conversational agent a reusable backend capability.

## 2. The 20 August Export Layer

Databricks also documents two relevant Genie One changes from **20 August 2026**:

- Genie One documents can be exported to PDF.
- Scheduled tasks look up past runs to help keep run-to-run outputs consistent.

This produces a state chain that Deep Drift must distinguish:

```text
LIVE CONVERSATION STATE
!=
AGENT EXECUTION STATE
!=
SCHEDULED-RUN STATE
!=
DOCUMENT STATE
!=
PDF STATE
```

A PDF is merely the final frozen surface.

It does not automatically preserve the conversational and agentic state that generated it.

## 3. Conversation-State Portability Fidelity

### Definition

**Conversation-State Portability Fidelity** measures whether a conversation that moves into another execution path remains attributable to the exact state that existed when the transition occurred.

A minimum manifest should preserve:

```text
conversation_id
conversation_title
conversation_mode
create_time
update_time
pinned_state
agent_id
source_table_ids
uploaded_file_ids
memory_context_ids
transition_event
```

Pinning and renaming are seemingly small UI features, but they matter because they improve human retrieval and identity stability for long-lived research conversations.

## 4. Agent-Mode API Parity Fidelity

### Definition

**Agent-Mode API Parity Fidelity** measures whether programmatic Agent Mode reproduces the materially relevant behavior of interactive Agent Mode.

Controlled tests should compare:

```text
QUESTION
AGENT
TOOLS
DATA ACCESS
MODE
```

across:

```text
GENIE UI
AGENT MODE API
EMBEDDED APPLICATION
SCHEDULED REPORT
```

Then compare:

```text
claims
tables
visualizations
citations
tool use
final answer structure
```

The benchmark should not assume that "same agent" means "same runtime path."

## 5. Scheduled-Run Continuity Fidelity

Databricks states that scheduled tasks can consult past runs to improve consistency.

This creates an unusual form of automation memory.

### Definition

**Scheduled-Run Continuity Fidelity** measures whether a scheduled task's use of previous-run state remains visible and reconstructable.

A minimum scheduled-task manifest should preserve:

```text
scheduled_task_id
prompt_version
run_id
run_timestamp
past_runs_consulted
input_snapshot
output_document_id
visualization_ids
delivery_event
```

If previous runs influence later outputs, the task is no longer stateless repetition.

## 6. Visualization-to-Email Fidelity

Scheduled task emails can now include visualizations.

### Definition

**Visualization-to-Email Fidelity** measures whether the visualization delivered by email is materially equivalent to the visualization produced by the originating Genie run.

The benchmark should check:

```text
chart type
filters
labels
legend
data scope
time window
units
render timestamp
```

A chart embedded in an email can become detached from the conversation that created it.

The email should therefore carry enough identity to recover the originating run.

## 7. Document-to-PDF Export Fidelity

Genie One documents can now be exported directly to PDF.

### Definition

**Document-to-PDF Export Fidelity** measures whether PDF export preserves:

```text
document content
citations
tables
visualizations
links
document version
edit timestamp
source lineage
```

Deep Drift should separately measure:

```text
VISUAL FIDELITY
CONTENT FIDELITY
CITATION FIDELITY
VERSION ATTRIBUTION
```

A PDF that looks correct but cannot identify which document version generated it is a provenance failure dressed in formal clothing.

## 8. Cross-Surface Task Identity Fidelity

The same creator workflow can now appear in:

```text
WEB
MACOS DESKTOP
MOBILE
EMBEDDED APP
API
EMAIL
PDF
```

### Definition

**Cross-Surface Task Identity Fidelity** measures whether one workflow keeps stable IDs and clear lineage as it crosses these surfaces.

The important distinction is:

```text
SAME USER EXPERIENCE
!=
SAME EXECUTION CONTEXT
```

Desktop, mobile, embedded, and API paths may have different permissions, cached state, network constraints, or interface affordances.

## 9. Tool-to-Report Lineage Fidelity

Agent authors can attach Unity Catalog scalar and table-valued functions as tools.

A report may therefore be downstream of model reasoning plus tool execution.

### Definition

**Tool-to-Report Lineage Fidelity** measures whether claims in a document, visualization, email, or PDF can identify the tool invocation and data result that materially shaped them.

The chain should be reconstructable:

```text
QUESTION
-> AGENT
-> TOOL
-> DATA RESULT
-> CLAIM
-> VISUALIZATION
-> DOCUMENT
-> PDF
```

This is especially important when the same agent is used through the API.

## 10. New Failure Classes

### 10.1 Conversation-to-API State Drift

The API executes with materially different context than the interactive conversation.

### 10.2 Scheduled Memory Opacity

Previous runs influence the next run, but the dependency is invisible in the final report.

### 10.3 Email Visualization Detachment

A chart survives in an email while the originating conversation, filters, and run identity become difficult to recover.

### 10.4 PDF Version Ambiguity

A PDF cannot identify the exact Genie document version from which it was exported.

### 10.5 Cross-Surface Identity Fragmentation

The same logical task appears under different local identifiers on mobile, desktop, web, or embedded surfaces.

### 10.6 Tool Invocation Erasure

The final report preserves the conclusion but not the function or tool invocation that produced the underlying result.

### 10.7 Chat Retrieval Failure

A long-running analytical thread exists but is practically lost because its title and retrieval metadata are weak.

### 10.8 Agent/API Parity Assumption

Users assume that an Agent Mode API response is equivalent to the interactive Agent Mode experience without controlled comparison.

## 11. Deep Drift Benchmark: Conversation-to-PDF Round Trip

### Controlled setup

Create one analytical conversation that produces:

```text
ONE CLAIM
ONE TABLE
ONE VISUALIZATION
ONE TOOL-CALL DEPENDENT RESULT
```

### Test sequence

1. preserve the original conversation ID and title;
2. pin and rename the conversation;
3. run the same task interactively;
4. run it through Agent Mode API;
5. compare claims, tables, citations, and visualizations;
6. create a scheduled task from the workflow;
7. run it twice;
8. record whether the second run uses previous-run context;
9. verify the scheduled email visualization;
10. create or update a Genie document;
11. export the document to PDF;
12. compare document and PDF;
13. verify citations and visualization fidelity;
14. open or monitor the workflow from another surface;
15. test whether the original run identity remains recoverable.

## 12. Proposed Metrics

### Agent Mode Parity Coverage

```text
AMPC =
materially equivalent interactive/API results
/
all controlled parity runs
```

### Scheduled Run Lineage Coverage

```text
SRLC =
scheduled outputs traceable to prompt version,
run ID, and past-run dependencies
/
all controlled scheduled outputs
```

### Visualization Delivery Fidelity

```text
VDF =
email visualizations materially matching originating run
/
all controlled emailed visualizations
```

### PDF Export Provenance Coverage

```text
PEPC =
PDFs attributable to exact Genie document version and run
/
all controlled exported PDFs
```

### Cross-Surface Identity Retention

```text
CSIR =
workflow transitions preserving recoverable logical identity
/
all controlled cross-surface transitions
```

## 13. Why This Matters for Memory

Databricks already supports searching past Genie conversations and explicit memory. The scheduled-task consistency change adds another layer:

```text
CHAT MEMORY
+
PAST CONVERSATION RECALL
+
PAST SCHEDULED RUN CONTEXT
```

Deep Drift should not flatten these into one word.

They are separate persistence mechanisms with different scopes and effects.

## 14. Why This Matters for Skills and Agents

Agent Mode APIs make the same agent callable inside other applications.

That moves the agent from a user-facing chat object toward a reusable computational service.

The effective procedural object becomes:

```text
AGENT INSTRUCTIONS
+ TOOL SET
+ DATA ACCESS
+ EXECUTION MODE
+ CALLING APPLICATION
```

Versioning the agent without versioning these dependencies is incomplete.

## 15. Why This Matters for Mini-App Builders

The Agent Mode API can be embedded into chatbots, internal tools, and scheduled reports.

That means a mini-app no longer needs to own all of its reasoning logic.

It can delegate to a reusable Genie Agent.

The architecture becomes:

```text
MINI-APP UI
-> AGENT MODE API
-> TOOLS / DATA
-> GENERATED RESULT
```

The app shell and the agent runtime can evolve independently.

That split demands version attribution.

## 16. Why This Matters for Chat-to-Document Export

Genie now supports a genuine end-to-end path:

```text
CHAT
-> DOCUMENT
-> PDF
```

But the more important path is:

```text
CHAT
-> AGENT
-> TOOL
-> DOCUMENT
-> PDF
```

Deep Drift should therefore reject the naive phrase "chat export."

This is structured artifact generation with an upstream execution history.

## 17. Why This Matters for DOCX / PDF Generation

The direct PDF export is the strongest file-format delta in this pass.

The research benchmark should preserve not only visual output but:

```text
document_version
citations
source lineage
visualization identity
run identity
export timestamp
```

PDF is useful precisely because it freezes presentation.

That same freezing also hides mutable upstream history unless lineage is carried forward.

## 18. Why This Matters for Copy-Paste and Export Fixes

The creator loop now removes several manual seams:

```text
OLD:
RUN ANALYSIS
-> COPY RESULTS
-> BUILD REPORT
-> SCREENSHOT CHART
-> PASTE INTO EMAIL
-> EXPORT PDF
```

becomes closer to:

```text
AGENT / SCHEDULE
-> DOCUMENT + VISUALIZATION
-> EMAIL / PDF
```

That is real workflow progress.

The research rule remains:

> Every manual seam removed from the workflow should be replaced with an explicit provenance seam.

Otherwise automation merely makes loss of context faster.

## 19. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | Material adjacent change: scheduled tasks now consult past runs for consistency, creating a run-history persistence layer distinct from chat memory. |
| Skills / Agents | **Major new-to-log item:** Genie Agent Mode APIs became generally available on 27 August 2026, enabling reusable agent execution in applications and scheduled reports. |
| Mini-app builders | **Material new architecture:** internal tools and chatbots can embed Agent Mode as a backend reasoning service. |
| Chat-to-document export | Material workflow path: Genie conversations can feed structured documents and automated reports rather than requiring manual copy-paste. |
| DOCX / PDF generation | **Strong new-to-log item:** Genie One documents can export directly to PDF; scheduled tasks can also deliver visualizations through email. |
| Copy-paste/export fixes | Strong workflow reduction: automated agent/report/email/PDF paths remove repeated manual chart and text transfer. |
| Broader creator workflow | **Major trend:** conversational analytics are becoming portable operational services that move across UI, API, schedule, native app, email, and static artifact surfaces. |

## 20. Deep Drift Research Position

The weak description is:

> Databricks added more Genie features.

The serious description is:

> A conversational analytical system can now preserve and retrieve conversation state, execute through a generally available agent API, reuse prior scheduled-run context, generate visual report outputs, operate across web/desktop/mobile surfaces, and terminate as an exported PDF or emailed visualization.

Therefore:

```text
CHAT
!= AGENT SERVICE

AGENT SERVICE
!= SCHEDULED RUN

SCHEDULED RUN
!= DOCUMENT

DOCUMENT
!= PDF

SAME AGENT
!= SAME EXECUTION PATH

STATIC REPORT
!= SELF-EXPLAINING ORIGIN
```

The serious Deep Drift requirement is:

> **Every cross-surface analytical artifact should preserve conversation identity, agent identity and mode, tool configuration, scheduled-run lineage, prior-run dependencies, visualization identity, document version, export event, and execution surface required to reconstruct how a live analytical conversation became a static or distributed report.**

The industry keeps removing copy-paste and accidentally revealing the actual problem underneath: state has to survive the journey.

## Evidence Boundary

Platform facts in this report are grounded in Databricks' first-party 2026 AI/BI and Genie One release notes, retrieved through Microsoft Learn on 31 August 2026.

Databricks documents that on 27 August 2026 Agent Mode APIs became generally available; Genie Agents gained Unity Catalog functions as tools; Genie One gained pinned and renamed chats, scheduled-task email visualizations, a native macOS desktop app, mobile scheduled-task creation, and in-context Unity Catalog table access.

Databricks also documents that on 20 August 2026 Genie One documents gained direct PDF export and scheduled tasks began consulting past runs for output consistency.

CARPF and all companion fidelity constructs, failure classes, benchmark procedures, and proposed metrics are ĀTØR Institute / Deep Drift Research constructs.

## Primary Source

1. Databricks / Microsoft Learn, **AI/BI and Genie One release notes 2026**, August 20 and August 27, 2026 entries.  
   https://learn.microsoft.com/en-us/azure/databricks/ai-bi/release-notes/2026

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
