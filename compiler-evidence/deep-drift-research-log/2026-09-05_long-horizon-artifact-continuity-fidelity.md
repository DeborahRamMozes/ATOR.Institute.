# Deep Drift Research Update - LHACF

## Long-Horizon Artifact Continuity Fidelity

**Research date:** 5 September 2026  
**Primary fresh delta:** OpenAI introduced GPT-6 Astra on 3 September 2026. OpenAI describes Astra as a model for end-to-end professional work that can create documents, spreadsheets, and presentations that follow existing templates and instructions, incorporate changing requirements, continue long-running work with mid-turn steering and asynchronous tools, and preserve more working context across long Codex sessions.

## Executive finding

Creator work is shifting from single-output generation toward persistent, steerable artifact production.

```text
REQUEST
  |
  v
TEMPLATE / STYLE / SOURCE CONTEXT
  |
  v
LONG-RUNNING MODEL WORK
  |
  +--> TOOL CALLS
  +--> RESEARCH
  +--> COMPUTER USE
  +--> DOCUMENT / SHEET / DECK BUILD
  |
  v
MID-TURN STEERING
  |
  v
REVISED REQUIREMENTS
  |
  v
FINISHED ARTIFACT
```

For Deep Drift:

```text
SAME PROMPT
!= SAME ARTIFACT STATE

FINAL FILE
!= FULL WORKING CONTEXT

NEW REQUIREMENT
!= NEW TASK

CONTEXT WINDOW BOUNDARY
!= PROJECT-MEMORY BOUNDARY

TEMPLATE MATCH
!= VERBATIM TEMPLATE CLONE

MODEL SAFETY INTERRUPTION
!= MODEL FAILURE
```

The new provenance object is the **long-horizon artifact state**.

## New node

### Long-Horizon Artifact Continuity Fidelity (LHACF)

Minimum state model:

```text
model_id
model_version
surface
task_id
initial_request
template_id
template_version
source_context
style_constraints
artifact_type
artifact_state_version
steering_event_id
steering_time
steering_instruction
requirement_delta
tool_call_state
async_tool_state
reasoning_effort_state
context_window_id
persistent_work_notes_state
searchable_prior_context_state
misalignment_monitor_state
pause_or_stop_event
human_review_event
final_artifact
export_format
```

## Key findings

### 1. Artifact generation is becoming adaptive rather than terminal

OpenAI says Astra can create documents, spreadsheets, and presentations that follow templates and instructions and can adapt when requirements are added or direction changes. The artifact is therefore better modeled as a versioned working state rather than a single output.

### 2. Template adherence becomes a measurable provenance layer

Template identity now matters independently from prompt identity. Deep Drift should preserve template source/version, style instructions, layout constraints, and the artifact version produced. Template fidelity and semantic/content fidelity must be evaluated separately.

### 3. Mid-turn steering turns correction into causal state

OpenAI added mid-turn steering for Astra in the Responses API. Applications can send new instructions while a response is still in progress. Material steering events should therefore be archived with timestamps, requirement deltas, and before/after artifact states.

### 4. Asynchronous tool use introduces delayed evidence

With async tool calling, the model can continue working while a tool executes and incorporate its result later. Tool request time, result time, and the artifact mutation caused by that result should remain associated.

### 5. Reasoning effort can change mid-conversation

Astra can change reasoning effort within one conversation while preserving the cached prompt prefix. The same task can therefore contain multiple effort states.

### 6. Context-window boundaries are becoming less visible

OpenAI says Astra in Codex can preserve work notes across context windows and keep earlier windows searchable. This creates two distinct continuity channels: persistent work notes and retrieval from prior context windows. Neither should be collapsed into one generic memory field.

### 7. Compaction-loss benchmarks need revision

Deep Drift should compare legacy compaction-only workflows with notes-plus-searchable-history workflows for requirement retention, failed approaches, tool results, rejected design decisions, template rules, and user corrections.

### 8. Safety monitoring becomes execution-state provenance

Supported Astra agent work can be checked asynchronously for potential instruction misinterpretation. Alerts may pause or stop the conversation for human review. A safety interruption must be archived separately from capability failure.

### 9. Direct document creation is now a model-level capability claim

OpenAI's API changelog explicitly recommends Astra for document creation, while ChatGPT release notes additionally name documents, spreadsheets, and presentations. However, those sources do not say every Astra surface always emits DOCX or PDF specifically. Semantic artifact type and physical file format must therefore be separate provenance fields.

### 10. DOCX/PDF remain flattening boundaries

Even where a workflow ultimately exports to DOCX/PDF, the export can flatten steering history, context-window transitions, persistent notes, tool-result timing, safety interruptions, requirement-version history, and template provenance.

### 11. OneNote adds a fresh connected-document workflow

OpenAI added the OneNote plugin to ChatGPT and Codex on 3 September 2026. It can find and summarize notes, gather decisions and action items, and create or update notes through supported actions. OpenAI warns that some searches are bounded, so an incomplete search result is not proof that a note is absent.

### 12. Execution approvals now have temporal state

OpenAI's new enterprise browser/computer-use controls allow site approvals to last one turn, one thread, or be saved as Always allow. Saved approvals can be governed separately for access, uploads, downloads, browser history, and other capabilities. Permission provenance therefore requires scope plus duration and expiration state.

### 13. Sites move generated artifacts into governed publication

Named external sharing for ChatGPT Sites extends the artifact lifecycle from generation into hosting, audience access, edit/publish rights, and revocation.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory / long context | **Major fresh delta** | Astra can preserve work notes across context windows and search earlier windows |
| Skills / agents | **Major adjacent delta** | Long-running tasks can combine tools, steering, plugins, computer use, and safety monitoring |
| Mini-app builders | **Major adjacent delta** | Astra strengthens Sites/web-app creation and governed external sharing |
| Chat-to-document | **Major fresh delta** | Model-level workflow now explicitly runs from request to finished document |
| DOCX/PDF generation | **Important precision point** | Direct document creation is claimed; specific DOCX/PDF support must still be recorded separately by surface |
| Copy-paste/export | No major direct formatting fix found | Export remains a flattening boundary for state/history even when content survives |
| Creator workflow | **Major** | Artifacts become long-running, steerable, template-bound, cross-tool work objects |

## New failure classes

- **Final-File-Equals-Process Fallacy** - assuming a polished file contains enough evidence to reconstruct the workflow that created it.
- **Template-Equals-Correctness Fallacy** - treating strong template adherence as proof that source content is correct.
- **Requirement-Drift-as-Model-Drift Error** - attributing artifact change to the model when the specification changed during execution.
- **Context-Window-Equals-Memory-Boundary Error** - assuming information is lost merely because it moved outside the current context window.
- **Notes-Equals-History Fallacy** - treating persistent work notes as a complete substitute for searchable prior context.
- **Steering Erasure** - archiving only the final artifact and losing the instructions that redirected the active task.
- **Safety-Pause-Equals-Failure Error** - treating a governance pause as evidence that the model was incapable of completing the task.
- **Semantic-Artifact/File-Format Collapse** - assuming "document creation" automatically means a specific export format such as DOCX or PDF.

## Deep Drift benchmark additions

**Long-Horizon Requirement Retention Fidelity (LHRRF)** - Does the system preserve initial requirements after multiple steering events and context-window transitions?

**Template-Adherence Fidelity (TAF)** - Does the artifact preserve required structural, visual, and stylistic properties of the referenced template?

**Artifact State Transition Fidelity (ASTF)** - Can each significant artifact mutation be connected to the requirement, steering event, or evidence that caused it?

**Persistent Work-Note Fidelity (PWNF)** - Do long-running notes preserve constraints, rejected approaches, test outcomes, and unresolved issues accurately?

**Prior-Context Retrieval Fidelity (PCRF)** - Can the system retrieve relevant facts from earlier context windows when they were not preserved in working notes?

**Async Tool Evidence Fidelity (ATEF)** - Can delayed tool results remain associated with the artifact changes they caused?

**Instruction-Misinterpretation Intervention Fidelity (IMIF)** - Can safety pauses caused by suspected instruction misinterpretation be distinguished from capability failure?

## DRPA-1.0 protocol additions

### LONG-HORIZON ARTIFACT STATE RULE

> Treat documents, spreadsheets, presentations, and other generated artifacts as versioned working states when they are produced through a long-running agentic workflow. Preserve requirement changes, steering events, tool-result incorporation, template state, and major artifact mutations separately from the final exported file.

### TEMPLATE-CONTENT SEPARATION RULE

> Evaluate template fidelity and semantic/source fidelity independently. A visually correct artifact must not be classified as correct solely because it follows the requested template, and a semantically correct artifact must not be classified as template-faithful solely because it contains the right information.

### CONTEXT-CONTINUITY CHANNEL RULE

> When a system uses persistent work notes and searchable prior context windows, preserve those mechanisms as separate continuity channels. Do not represent either mechanism as complete memory without evidence of what was retained, omitted, or retrieved later.

### STEERING-EVENT PROVENANCE RULE

> Mid-turn instructions, corrections, and requirement changes must be recorded as causal state transitions. The artifact version immediately before and after each material steering event should remain distinguishable where practical.

### ARTIFACT-FORMAT SEPARATION RULE

> Preserve semantic artifact type separately from physical file format. Claims that a model can create a document, spreadsheet, or presentation must not be silently converted into claims that a particular surface supports DOCX, PDF, XLSX, or PPTX unless that format is directly observed or documented.

### SAFETY-INTERRUPTION CLASSIFICATION RULE

> When an agent workflow is paused or stopped by an instruction-misinterpretation or safety monitor, record the monitor state, reason category, human-review event, and continuation outcome. Do not classify the interruption as model incapability without additional evidence.

## Canonical Deep Drift requirement

> Treat long-horizon artifact creation as a versioned state machine rather than a single generation event. Preserve template identity, source state, artifact versions, steering events, context-continuity mechanisms, asynchronous evidence, reasoning-effort changes, safety interruptions, and physical export format separately.

## Deep Drift principle

> **The file is no longer the work. The file is the last visible state of the work.**

Operationally:

> **Archive what changed the artifact, not only the artifact that survived.**

## Sources

1. OpenAI Help Center. **ChatGPT Release Notes - September 3, 2026: Introducing GPT-6 Astra.** https://help.openai.com/en/articles/6825453-chatgpt-release-notes
2. OpenAI. **GPT-6 Astra: A new generation of intelligence.** https://openai.com/index/gpt-6-astra/
3. OpenAI API Changelog. **September 3, 2026 - GPT-6 Astra and long-running Responses controls.** https://developers.openai.com/api/docs/changelog
4. OpenAI Help Center. **Using OneNote in ChatGPT and Codex.** https://help.openai.com/en/articles/20001511-using-onenote-in-chatgpt-and-codex
5. OpenAI Help Center. **Manage browser and computer use in your Enterprise workspace.** https://help.openai.com/en/articles/20001510-manage-browser-and-computer-use-in-your-enterprise-workspace

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository entry was found for GPT-6 Astra, long-horizon template-bound artifact production, mid-turn artifact steering, persistent work notes across context windows, searchable prior windows, and instruction-misinterpretation monitoring as one provenance problem.  
**Relationship to prior nodes:** Extends PCMF (conversation materialization), AERF (execution route), ARETF (evaluation/release evidence), DSCF (Skill compilation), and EPSTF (conversation lifecycle). LHACF is distinct because it treats the working artifact itself as a persistent evolving state across time, context windows, tools, and steering events.  
**Freshness:** GPT-6 Astra and its long-running Responses controls were released 3 September 2026. OneNote plugin and strengthened browser/computer-use controls are current September 2026 additions.
