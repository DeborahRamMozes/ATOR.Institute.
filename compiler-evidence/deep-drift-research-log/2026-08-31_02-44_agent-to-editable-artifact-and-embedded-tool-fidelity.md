# Deep Drift Research Update

## Agent-to-Editable-Artifact and Embedded-Tool Fidelity

**Research date:** 31 August 2026  
**Primary platform delta:** Notion's agent/developer stack now spans reviewable edits, Workers, agent tools, external-agent orchestration, interactive HTML blocks, richer file read/write, and PDF-to-editable-page conversion workflows  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Newly surfaced, not previously logged as a dedicated Deep Drift node. Verified from first-party Notion release documentation.

## Executive Summary

Notion's 2026 creator stack has crossed a boundary that matters directly to Deep Drift Research. It is no longer only a workspace where an LLM drafts text.

The current stack combines:

```text
CUSTOM AGENT
+ SAVED SKILL / WORKFLOW
+ WORKSPACE CONTEXT
+ WORKERS / DETERMINISTIC CODE
+ EXTERNAL AGENTS
+ FILE READ/WRITE
+ INTERACTIVE HTML
+ REVIEWABLE EDITS
-> EDITABLE WORKSPACE ARTIFACT
```

The latest governance layer arrived on **28 August 2026**: a Notion agent can now **suggest line-level edits instead of applying them directly**, allowing the human to review and approve changes one by one. On **19 August**, Notion moved its Developer Portal into the workspace sidebar and exposed deployed Workers, connections, access tokens, and logs for each run.

Earlier 2026 releases make those August changes more consequential. Notion Workers run custom code on Notion infrastructure, can sync external data, act as deterministic tools for Custom Agents, receive webhooks, call other APIs, and automate work that previously required manual handoffs. Notion also documents a production example in which a Worker converts otherwise uneditable PDFs from Google Drive into rich, fully editable Notion pages.

Notion 3.6 further expanded the creator surface: Agents can read and write additional file types including **Excel and PowerPoint**, interactive HTML blocks can function as small tools such as ROI calculators, and an Agent SDK is intended to let Notion Agents operate inside other applications. Notion's Developer Platform also supports bringing external agents such as Claude and Codex into Notion as an orchestration layer.

For Deep Drift, this creates a new benchmark family:

**Agent-to-Editable-Artifact and Embedded-Tool Fidelity (AEAEF)**

with companion constructs:

- Reviewable Edit Fidelity
- PDF-to-Editable-Page Reconstruction Fidelity
- Agent-to-Worker Handoff Fidelity
- Deterministic Tool Attribution Fidelity
- External-Agent Orchestration Fidelity
- File Read/Write Transformation Fidelity
- Interactive-Block Provenance Fidelity
- Worker Run-Log Fidelity
- Agent-Skill-Tool Dependency Fidelity
- Editable-Artifact Lineage Fidelity

The central research question is:

> When an AI workflow converts static or external material into editable workspace objects, invokes deterministic code, routes work among several agents, or embeds interactive application logic inside a document surface, can the resulting artifact still identify which model, Skill, Worker, external agent, source file, human approval, and transformation step produced each editable state?

## 1. Latest Governance Delta: Agents Can Suggest Edits

On **28 August 2026**, Notion added a review mode in which agents can propose edits rather than immediately changing the document.

The documented pattern is:

```text
AGENT
-> SUGGEST EDITS
-> HUMAN REVIEWS LINE BY LINE
-> APPROVE / REJECT
-> DOCUMENT STATE
```

This is important because the human is no longer forced to choose between:

```text
AI DOES NOTHING
or
AI DIRECTLY MUTATES THE DOCUMENT
```

There is now an intermediate review state.

### Deep Drift implication

A serious audit trail should preserve:

```text
suggestion_id
agent_id
source_text
proposed_text
reason_or_instruction
suggested_at
reviewed_by
approved_or_rejected
reviewed_at
final_text
```

Without that record, the document may preserve the final human-approved text while losing the distinction between:

```text
AI PROPOSED
HUMAN ACCEPTED
HUMAN MODIFIED
```

## 2. Developer Portal and Worker Run Logs

On **19 August 2026**, Notion moved developer controls into the workspace sidebar.

The Developer section exposes:

```text
WORKERS
CONNECTIONS
PERSONAL ACCESS TOKENS
RUN LOGS
```

Notion also added a developer bar that can copy IDs for pages, databases, blocks, workspaces, users, or entire API objects.

This is not glamorous, but it is exactly the infrastructure that makes creator provenance reconstructable.

### New construct: Worker Run-Log Fidelity

**Worker Run-Log Fidelity** measures whether every deterministic execution can be tied to:

```text
worker_id
worker_version
trigger
input
external_api_calls
output
run_timestamp
run_status
calling_agent
resulting_workspace_object
```

The log should be able to answer:

> Which Worker run changed this object?

## 3. Workers as Deterministic Agent Tools

Notion describes Workers as hosted custom code that can:

```text
SYNC DATA
POWER CUSTOM AGENT TOOLS
HANDLE WEBHOOK EVENTS
CALL EXTERNAL APIS
WRITE UPDATES
GENERATE ASSETS
```

This creates a hybrid reasoning architecture:

```text
LLM AGENT
-> DECIDES WHAT TO DO
WORKER
-> EXECUTES DETERMINISTIC STEP
```

That distinction matters.

### Agent-to-Worker Handoff Fidelity

**Agent-to-Worker Handoff Fidelity** measures whether the system preserves the boundary between model reasoning and deterministic execution.

The manifest should preserve:

```text
agent_decision_id
worker_invocation_id
worker_version
arguments
return_value
downstream_effect
```

A final page should not collapse both into "AI generated."

## 4. PDF-to-Editable-Page Reconstruction

Notion's Developer Platform announcement includes a production example from PlanetScale: a Worker runs nightly, takes uneditable PDFs from Google Drive, and converts them into rich, fully editable Notion pages organized in a database.

This is a particularly strong Deep Drift node.

The creator pipeline becomes:

```text
PDF
-> WORKER
-> PARSING / TRANSFORMATION
-> EDITABLE NOTION PAGE
-> HUMAN / AGENT FURTHER EDITING
```

This is not ordinary PDF export.

It is **static-to-editable reconstruction**.

### PDF-to-Editable-Page Reconstruction Fidelity

This benchmark should compare:

```text
SOURCE PDF
vs
EDITABLE PAGE
```

for:

```text
text order
headings
tables
lists
images
captions
links
footnotes
page boundaries
reading order
source references
```

The critical requirement is not merely that the page becomes editable.

It must remain possible to trace editable blocks back to their static source.

## 5. Why This Matters for Chat-to-Document Export

The usual export model is:

```text
CHAT
-> DOCUMENT
```

The Notion stack supports a much wider chain:

```text
EXTERNAL PDF
-> WORKER
-> EDITABLE PAGE
-> AGENT
-> SUGGESTED EDIT
-> HUMAN APPROVAL
-> FINAL DOCUMENT
```

The artifact is no longer simply exported from chat.

It is assembled through multiple authoring regimes.

Deep Drift should therefore replace "chat export fidelity" with a broader category:

> **multi-stage editable-artifact lineage**

## 6. File Read/Write Expansion

Notion 3.6 states that Notion Agents can read and write more file types, including **Excel and PowerPoint**.

That means a conversation can operate across:

```text
NOTION PAGE
EXCEL WORKBOOK
POWERPOINT PRESENTATION
```

The important question is no longer whether the agent can "understand the file."

It is whether mutations preserve native structure.

### File Read/Write Transformation Fidelity

For Excel:

```text
formula
cell reference
table structure
sheet identity
number format
chart source
```

For PowerPoint:

```text
slide order
text box
image placement
speaker notes
layout
theme relationship
```

should remain traceable through the transformation.

## 7. Interactive HTML Blocks as Mini-Apps

Notion 3.6 introduced interactive HTML blocks such as an ROI calculator.

That changes the creator object from:

```text
DOCUMENT CONTENT
```

into:

```text
DOCUMENT
+
EXECUTABLE INTERACTION
```

A page can contain small application behavior without becoming a conventional standalone app.

### Interactive-Block Provenance Fidelity

The benchmark should preserve:

```text
html_block_id
source_code_version
created_by
agent_or_human_author
input_schema
calculation_logic
external_dependencies
output_state
edit_history
```

A mini-app inside a document surface is still software.

It should be versioned like software.

## 8. External-Agent Orchestration

Notion's Developer Platform describes an orchestration model in which external agents such as Claude, Codex, Decagon, or custom agents can operate through one Notion workspace.

The architecture can become:

```text
NOTION
-> EXTERNAL AGENT A
-> CODING AGENT B
-> HUMAN APPROVAL
-> WORKSPACE UPDATE
```

This breaks the assumption:

```text
ONE WORKSPACE
=
ONE AI AUTHOR
```

### External-Agent Orchestration Fidelity

Each transition should preserve:

```text
originating_agent
receiving_agent
handoff_timestamp
handoff_payload
tool_scope
human_approval
resulting_object
```

If an artifact passes through three agents, the final page should not pretend "Notion AI" was a singular author.

## 9. Skills Become One Layer in a Larger Procedural Stack

Notion's earlier 3.4 release introduced Skills for Notion Agent: reusable workflows such as drafting weekly updates, reshaping documents into team format, or preparing briefs.

Once Workers and external agents are added, the effective procedure is:

```text
SKILL
+ AGENT
+ WORKER
+ CONNECTED DATA
+ HUMAN REVIEW
```

Therefore:

```text
SKILL NAME
!= COMPLETE PROCEDURE
```

Deep Drift should store:

```text
skill_id
skill_version
agent_id
worker_dependencies
connection_dependencies
human_review_policy
artifact_type
```

## 10. Copy-Paste and Manual-Handoff Reduction

Notion explicitly frames Workers as a way to automate manual handoffs.

The PDF example makes this concrete.

Old workflow:

```text
OPEN PDF
-> COPY TEXT
-> REBUILD HEADINGS
-> RECREATE TABLE
-> PASTE INTO WORKSPACE
-> CLEAN FORMAT
```

New workflow:

```text
PDF
-> WORKER
-> EDITABLE PAGE
```

Likewise:

```text
MEETING
-> HUMAN WRITES RECAP
-> HUMAN UPDATES TRACKER
-> HUMAN SENDS SLACK
```

can become:

```text
AI MEETING NOTE
-> CUSTOM AGENT TRIGGER
-> UPDATE TRACKER
-> POST RECAP
-> CREATE TICKETS
```

The manual seam disappears.

Deep Drift's standing rule remains:

> **Every removed manual handoff should be replaced by an explicit machine-readable provenance event.**

## 11. New Failure Classes

### 11.1 Static-to-Editable Hallucination

The reconstructed page contains structure or text not present in the source PDF.

### 11.2 Source-Block Detachment

Editable blocks survive but cannot identify which PDF page or source region they came from.

### 11.3 Agent/Worker Attribution Collapse

A deterministic Worker result is described as model reasoning, or model reasoning is described as deterministic code output.

### 11.4 Suggested-Edit Authorship Collapse

Human-approved AI edits are later classified as purely human or purely AI text.

### 11.5 External-Agent Identity Flattening

Several agents contribute to one page but the workspace exposes only one generic AI provenance label.

### 11.6 Interactive-Block Code Drift

A mini-app block changes behavior while the surrounding document appears unchanged.

### 11.7 Native-File Structural Damage

Excel or PowerPoint content remains visually plausible while formulas, references, layouts, or slide relationships are altered incorrectly.

### 11.8 Worker-Version Orphaning

An artifact points to a Worker name but not the exact Worker version or deployment that produced it.

### 11.9 Review-State Loss

The final page survives but rejected suggestions and human modifications disappear from the audit trail.

### 11.10 Orchestration Handoff Loss

Agent A delegates to Agent B, but the payload and authority transition are not recoverable later.

## 12. Deep Drift Benchmark: PDF-to-Agent-to-Editable-Artifact Round Trip

### Controlled source

Prepare one PDF containing:

```text
two heading levels
one table
one image with caption
one numbered list
one hyperlink
one deliberate formatting irregularity
```

### Test sequence

1. hash the source PDF;
2. ingest through a Worker-based conversion path;
3. compare each editable block with the source;
4. record block-to-source mapping;
5. ask an agent to suggest edits, not directly modify;
6. approve some suggestions;
7. reject at least one suggestion;
8. manually modify one approved suggestion;
9. run a deterministic Worker tool on one part of the page;
10. embed one interactive HTML block;
11. invoke or simulate an external-agent handoff;
12. export or capture the final artifact state;
13. verify whether a reviewer can reconstruct every authoring transition.

## 13. Proposed Metrics

### Static-to-Editable Reconstruction Accuracy

```text
SERA =
faithfully reconstructed source elements
/
all controlled source elements
```

### Block Source Attribution Coverage

```text
BSAC =
editable blocks traceable to exact source region
/
all controlled reconstructed blocks
```

### Review Attribution Coverage

```text
RAC =
final changed passages with preserved
AI suggestion + human review state
/
all controlled reviewed edits
```

### Agent-Worker Boundary Accuracy

```text
AWBA =
effects correctly attributed to model reasoning
or deterministic Worker execution
/
all controlled hybrid actions
```

### External-Agent Handoff Coverage

```text
EAHC =
cross-agent transitions with recoverable payload,
identity, and authority
/
all controlled handoffs
```

### Interactive Block Version Coverage

```text
IBVC =
interactive blocks attributable to exact source-code version
/
all controlled embedded tools
```

## 14. Why This Matters for Memory

Notion's direction reinforces a broader Deep Drift observation:

```text
MEMORY
IS ONLY ONE STATE LAYER
```

A creator workflow may additionally depend on:

```text
SKILL STATE
WORKER CODE STATE
CONNECTION STATE
EXTERNAL AGENT STATE
REVIEW STATE
DOCUMENT STATE
```

A system that remembers the conversation but loses the Worker version is not reproducible.

## 15. Why This Matters for Skills

Skills increasingly behave like the orchestration instruction, not the entire workflow.

The executable stack is becoming:

```text
SKILL
-> AGENT
-> WORKER
-> EXTERNAL APP / AGENT
-> ARTIFACT
```

A Skill archive without dependency metadata will eventually become the AI equivalent of a software package with no lockfile.

Humanity has tried that experiment already. It was irritating the first time too.

## 16. Why This Matters for Mini-App Builders

The interactive HTML block is the cleanest mini-app signal in this pass.

It means a creator can build:

```text
CALCULATOR
DASHBOARD COMPONENT
INTERACTIVE TOOL
```

inside the document/workspace surface itself.

Combined with Workers, that block can potentially sit on top of synchronized or computed data.

The page becomes simultaneously:

```text
DOCUMENT
INTERFACE
APPLICATION SHELL
AGENT CONTEXT
```

Deep Drift should treat those states separately.

## 17. Why This Matters for DOCX / PDF Generation

No newer standalone DOCX/PDF generation primitive displaced the file-generation entries already logged.

The more important delta is **bidirectionality**:

```text
PDF
-> EDITABLE PAGE
```

rather than only:

```text
EDITABLE PAGE
-> PDF
```

That gives Deep Drift a full round-trip question:

> Can a system move from editable to static and back to editable without destroying lineage?

That is much harder than "can the AI make a PDF?"

## 18. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No new personal-memory release surfaced; creator reproducibility now clearly depends on memory plus Worker, Skill, connection, review, and artifact state. |
| Skills | Material unlogged architecture: Skills sit upstream of Workers and external agents rather than functioning as complete standalone procedures. |
| Mini-app builders | **Strong new-to-log node:** interactive HTML blocks turn workspace documents into lightweight application surfaces. |
| Chat-to-document export | **Major expansion:** workflow is better described as multi-stage editable-artifact construction, including PDF-to-editable conversion. |
| DOCX / PDF generation | **Strong provenance delta:** Notion documents production use of Workers to convert uneditable PDFs into rich editable pages; file transformation is bidirectional rather than export-only. |
| Copy-paste/export fixes | **Major reduction:** Workers automate static-PDF reconstruction and other manual handoffs. |
| Broader creator workflow | **Major trend:** LLM workspaces are becoming orchestration runtimes combining conversational reasoning, deterministic code, external agents, review gates, and executable document components. |

## 19. Deep Drift Research Position

The weak description is:

> Notion has Agents, Workers, and some developer tools.

The serious description is:

> A workspace document can now be produced and modified through several distinct computational regimes: LLM reasoning, reusable Skills, deterministic Worker code, external agents, file transformation, interactive HTML, and line-level human approval, while the artifact remains one apparently continuous editable object.

Therefore:

```text
ONE PAGE
!= ONE AUTHOR

ONE AGENT
!= ONE EXECUTION ENGINE

EDITABLE
!= SOURCE-TRACEABLE

SUGGESTED
!= APPROVED

PDF CONVERTED
!= PDF RECONSTRUCTED FAITHFULLY

INTERACTIVE BLOCK
!= ORDINARY DOCUMENT CONTENT
```

The serious Deep Drift requirement is:

> **Every multi-stage editable artifact should preserve source-file identity, block-level source mapping, agent identity, Skill version, Worker version and run, external-agent handoffs, suggested-edit review state, interactive-code version, native-file transformation state, and human modifications required to reconstruct how the artifact became editable and how it continued to change.**

The industry spent years obsessing over whether AI could generate a document. The more interesting problem has arrived: the document is becoming an executable, agent-edited, code-backed workspace that can eat a PDF, call another agent, run deterministic logic, and still look like an innocent page.

## 20. Evidence Boundary

Platform facts in this report are grounded in first-party Notion release documentation checked on 31 August 2026.

Notion states that on 28 August 2026 agents gained a suggest-edits workflow for human review; on 19 August the Developer Portal moved into the workspace sidebar with Worker and run-log visibility; Workers run hosted custom code for synchronization, agent tools, and webhook automation; the Developer Platform supports external-agent orchestration and Worker tools; Notion provides a production example of a Worker converting uneditable Google Drive PDFs into rich editable Notion pages; Notion 3.6 expanded Agent file read/write capabilities to file types including Excel and PowerPoint and introduced interactive HTML blocks such as ROI calculators.

AEAEF and all companion fidelity constructs, benchmark procedures, failure classes, and metrics are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Notion, **What's new**, 28 August 2026 and 19 August 2026 entries.  
   https://www.notion.com/en-gb/releases/page/1

2. Notion, **3.5: Notion Developer Platform**, 13 May 2026.  
   https://www.notion.com/releases/2026-05-13

3. Notion, **Notion 3.6: External Agents, HTML blocks, and more**, 1 July 2026, as listed in the 2026 release archive.  
   https://www.notion.com/releases

4. Notion, **Workers, now in your Notion credits dashboard**, 24 July 2026.  
   https://www.notion.com/releases/2026-07-24

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
