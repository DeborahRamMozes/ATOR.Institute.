# Deep Drift Research Update

## Runtime Orchestration and Context-Boundary Fidelity

**Research date:** 31 August 2026  
**Primary platform cluster:** Replit Intelligent Model Routing; Adobe Acrobat for Microsoft Copilot PDF tool routing; ChatGPT project-memory scope mutation and large-paste-to-attachment conversion.  
**Research stream:** ATOR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-ledger orchestration and creator-workflow architecture verified from first-party Replit, Adobe, and OpenAI documentation.

## Executive Summary

The strongest unlogged change in this pass is not another new model, export button, or memory toggle in isolation. It is a deeper platform move: **the system increasingly decides how the user's request should be represented, which model should execute it, which tool should act on it, and which memory boundary should apply - without requiring the user to manually select each layer.**

Three recent platform changes make that architecture visible.

On 26 August 2026, Replit released **Intelligent Model Routing**, which automatically selects the model best suited to each task while balancing quality, speed, and cost. Users can still override model choice in supported plans, and enterprise administrators can constrain routing to an approved model set.

On 18 August 2026, Adobe updated **Acrobat for Copilot** documentation describing a conversational PDF workflow in which a user can ask Copilot to edit a PDF, merge files, extract metrics from a scanned report, or compress a file. Acrobat processes the request and opens the result in an interactive Acrobat editor, with a boundary between quick preview-level changes and more advanced full-editor work.

OpenAI's August ChatGPT releases add two related context transformations. Long pastes over 10,000 characters are automatically converted into attachments rather than inserted directly in the message composer, and eligible users can now change an existing project's memory scope between **Default memory** and **Project-only memory** after the project has already been created.

The combined architecture is:

```text
USER INTENT
-> INPUT REPRESENTATION ROUTER
-> CONTEXT / MEMORY BOUNDARY
-> MODEL ROUTER
-> TOOL / APP ROUTER
-> INTERACTIVE EXECUTION SURFACE
-> ARTIFACT / ACTION
```

For Deep Drift Research, this creates a new benchmark family:

**Runtime Orchestration and Context-Boundary Fidelity (ROCBF)**

with companion constructs:

- Model-Routing Attribution Fidelity
- Input-Representation Transformation Fidelity
- Project-Memory Scope Mutation Fidelity
- Intent-to-Tool Selection Fidelity
- Preview-to-Full-Editor Handoff Fidelity
- Admin-Approved Model-Set Fidelity
- Routing Override Fidelity
- Orchestration-to-Artifact Lineage Fidelity
- Context-Boundary Transition Fidelity
- Hidden-Decision Disclosure Fidelity

The central question is:

> When the platform silently chooses the model, input representation, memory scope, or tool path behind a creator workflow, can the final result still reconstruct which hidden routing decisions were made, which options the user could override, which boundaries changed during the project, and which decisions materially shaped the resulting artifact or action?

## 1. Replit: Model Selection Becomes Runtime Infrastructure

Replit states that Intelligent Model Routing is available to all users and automatically matches each task with a model suited to it, balancing quality, speed, and cost.

The creator no longer necessarily performs:

```text
TASK
-> COMPARE MODELS
-> CHOOSE MODEL
-> EXECUTE
```

The new default can be:

```text
TASK
-> REPLIT ROUTER
-> SELECT MODEL
-> EXECUTE
```

This is not merely a UI simplification.

It moves model identity from explicit authoring input toward hidden runtime state.

Therefore:

```text
SAME PROMPT
!= SAME MODEL

SAME PROJECT
!= SAME ROUTING DECISION

SAME USER INTENT
!= SAME COST PATH
```

## 2. Model-Routing Attribution Fidelity

### Definition

**Model-Routing Attribution Fidelity (MRAF)** measures whether every routed task remains attributable to the actual model selected at runtime and the policy context that permitted that selection.

A minimum routing manifest should preserve:

```text
task_id
project_id
user_instruction
routing_timestamp
candidate_model_set
selected_model
routing_reason_class
quality_speed_cost_mode
manual_override_state
admin_policy_state
execution_cost_class
```

The creator should not need to infer model identity from writing style or latency after the fact.

## 3. Admin-Approved Model-Set Fidelity

Replit allows enterprise administrators to define which models are approved for a workspace. Intelligent routing then selects from that constrained set.

The actual runtime contract becomes:

```text
ALL POSSIBLE MODELS
-> ADMIN APPROVED SET
-> ROUTER CHOICE
-> TASK EXECUTION
```

### Definition

**Admin-Approved Model-Set Fidelity (AAMSF)** measures whether runtime routing stays within the approved model set and whether the exact approved-set version remains reconstructable later.

A minimum manifest should preserve:

```text
workspace_id
policy_version
approved_model_set
selected_model
selection_timestamp
policy_change_events
```

A model being technically available to the platform does not mean it was organizationally authorized for the task.

## 4. Routing Override Fidelity

Replit states that users are notified when work escalates to higher-powered modes that can incur usage costs, and users can choose to remain in Free Mode. Core and Pro users can also manually select models.

This creates another distinction:

```text
ROUTER RECOMMENDATION
!= USER ACCEPTANCE

AUTO ESCALATION
!= IRREVERSIBLE EXECUTION
```

### Definition

**Routing Override Fidelity (ROF)** measures whether the system preserves when the user accepted, rejected, or manually replaced the platform's selected runtime path.

The final artifact should be able to distinguish:

```text
AUTO-ROUTED
USER-FORCED MODEL
USER-REFUSED ESCALATION
ADMIN-CONSTRAINED ROUTING
```

## 5. Adobe Acrobat for Copilot: Intent Becomes Tool Selection

Adobe's 18 August 2026 Acrobat for Copilot documentation describes a workflow in which the user starts from natural language rather than selecting PDF tools manually.

Example request classes include:

```text
EDIT THIS PDF
MERGE RESUME + COVER LETTER + REFERENCES
EXTRACT FINANCIAL METRICS FROM A SCANNED REPORT
COMPRESS THIS FILE FOR EMAIL
```

Acrobat processes the file and opens it in an interactive editor.

The workflow becomes:

```text
INTENT
-> ADOBE ACROBAT AGENT
-> PDF TOOL / OPERATION
-> INTERACTIVE EDITOR
```

rather than:

```text
OPEN PDF TOOL MENU
-> FIND CORRECT TOOL
-> CONFIGURE TOOL
-> EXECUTE
```

## 6. Intent-to-Tool Selection Fidelity

### Definition

**Intent-to-Tool Selection Fidelity (ITSF)** measures whether the action selected from a natural-language request is recoverable and correctly aligned with the user's intended document transformation.

A minimum action manifest should preserve:

```text
conversation_id
source_file_id
user_instruction
interpreted_intent
tool_or_operation_selected
operation_parameters
execution_timestamp
result_file_id
```

This becomes especially important when a user describes document structure semantically rather than by page number or menu command.

## 7. Preview-to-Full-Editor Handoff Fidelity

Adobe distinguishes quick changes in the Copilot/Acrobat preview from more advanced text and image editing in the full Acrobat editor.

The pipeline can therefore split:

```text
COPILOT CHAT
-> QUICK EDIT / PREVIEW
```

or:

```text
COPILOT CHAT
-> FULL ACROBAT EDITOR
-> HUMAN / TOOL EDITS
```

### Definition

**Preview-to-Full-Editor Handoff Fidelity (PFEHF)** measures whether the transition from agent-interpreted action to manual or advanced editor work preserves a continuous lineage.

The system should preserve:

```text
handoff_event
pre_handoff_file_version
post_handoff_file_version
editor_operations
human_revision_events
final_file_id
```

Without this, the final PDF can preserve neither where agent execution stopped nor where human editing began.

## 8. ChatGPT: Large Paste Becomes Attachment Automatically

OpenAI states that, as of 4 August 2026, long pastes over 10,000 characters are handled as attachments for all ChatGPT plans.

The user performs:

```text
PASTE TEXT
```

but the system may represent it internally as:

```text
FILE-LIKE ATTACHMENT
```

The user can later convert it back into direct composer text.

This is a creator-workflow improvement because it avoids consuming the message composer and context window in the same way as a giant inline paste.

But it creates a hidden representation boundary.

## 9. Input-Representation Transformation Fidelity

### Definition

**Input-Representation Transformation Fidelity (IRTF)** measures whether the system preserves the fact that user-provided text was transformed from inline message content into an attachment representation before model processing.

A minimum manifest should preserve:

```text
input_event_id
original_input_class
character_count
transformation_threshold
transformed_representation
attachment_id
reversion_event_if_any
model_visible_representation
```

The distinction matters because:

```text
TEXT USER PASTED
!= TEXT STORED INLINE

SAME CONTENT
!= SAME CONTEXT REPRESENTATION
```

A later reproduction attempt that pastes the same text directly may not recreate the same context-loading behavior.

## 10. ChatGPT: Project Memory Scope Can Change After Creation

OpenAI states that eligible unshared projects can now change between:

```text
DEFAULT MEMORY
PROJECT-ONLY MEMORY
```

after the project already exists.

With project-only memory, conversations inside that project can inform one another, while ChatGPT does not reference memories or conversations from outside the project and does not carry project information into outside chats.

This is not simply a preference toggle.

It changes the project's **context boundary after historical work may already exist**.

## 11. Project-Memory Scope Mutation Fidelity

### Definition

**Project-Memory Scope Mutation Fidelity (PMSMF)** measures whether the system preserves when a project's memory boundary changes and how that change affects later context retrieval.

A minimum memory-scope manifest should preserve:

```text
project_id
previous_memory_scope
new_memory_scope
scope_change_timestamp
eligible_historical_context
external_memory_access_state
project_to_outside_memory_state
propagation_delay_state
```

This creates a key distinction:

```text
SAME PROJECT
BEFORE SCOPE CHANGE
!=
SAME PROJECT
AFTER SCOPE CHANGE
```

The visible file collection and conversation history may be identical while the admissible context graph is not.

## 12. Context-Boundary Transition Fidelity

### Definition

**Context-Boundary Transition Fidelity (CBTF)** measures whether outputs created before and after a memory-scope change remain attributable to the context rules active at their execution time.

The benchmark should test:

```text
OUTPUT A -> DEFAULT MEMORY
OUTPUT B -> PROJECT-ONLY MEMORY
```

using the same explicit prompt and project files.

If the outputs differ, the system should make it possible to determine whether the difference came from:

```text
MODEL VARIANCE
MEMORY SCOPE
ROUTING
FILE STATE
USER EDIT
```

rather than leaving all five fused into one mystery.

## 13. Hidden-Decision Disclosure Fidelity

The three platform changes share a common architectural move.

The platform increasingly decides:

```text
HOW INPUT IS REPRESENTED
WHICH CONTEXT IS ELIGIBLE
WHICH MODEL RUNS
WHICH TOOL EXECUTES
WHICH EDITOR RECEIVES THE RESULT
```

### Definition

**Hidden-Decision Disclosure Fidelity (HDDF)** measures whether those decisions remain visible enough for a creator, auditor, or researcher to reconstruct the actual execution path.

This does not require exposing proprietary routing algorithms.

It requires exposing the **decision outcome** and the **state that materially changed the work**.

## 14. Why This Matters for Memory

The strongest new memory-specific item in this pass is **mutable project memory scope**.

Deep Drift should treat memory scope as versioned runtime configuration.

The project should have something like:

```text
MEMORY_SCOPE_VERSION 1
DEFAULT MEMORY
ACTIVE 2026-08-01 -> 2026-08-14

MEMORY_SCOPE_VERSION 2
PROJECT-ONLY MEMORY
ACTIVE 2026-08-14 -> CURRENT
```

Without that lineage, two outputs from the same project can look irreproducibly different even when nothing visible in the prompt changed.

## 15. Why This Matters for Skills

No newer Skill primitive displaced the stronger Skill updates already logged.

But hidden routing changes Skill reproducibility.

A Skill can remain constant while:

```text
MODEL CHANGES
CONTEXT SCOPE CHANGES
TOOL ROUTING CHANGES
INPUT REPRESENTATION CHANGES
```

Therefore:

```text
SAME SKILL FILE
!= SAME EXECUTION ENVIRONMENT
```

A serious Skill manifest should include runtime orchestration state.

## 16. Why This Matters for Mini-App Builders

Replit is the strongest mini-app-builder signal in this pass.

The builder is increasingly becoming a **model orchestration platform** rather than a fixed-model coding surface.

The effective mini-app creation stack is:

```text
USER INTENT
-> AGENT
-> MODEL ROUTER
-> CODE / DESIGN / TOOL EXECUTION
-> APP
```

This means creator ownership and reproducibility cannot stop at generated code.

The platform should also preserve which models materially produced major revisions.

## 17. Why This Matters for Chat-to-Document Export

Adobe's Copilot integration shows that document workflows are shifting from:

```text
CHAT RESPONSE
-> COPY
-> PDF TOOL
```

into:

```text
CHAT INTENT
-> PDF OPERATION
-> EDITOR
-> FINAL FILE
```

The output is no longer merely text that happens to become a document.

The conversational layer now **selects and invokes the document operation itself**.

## 18. Why This Matters for DOCX / PDF Generation

No new direct DOCX generation primitive displaced the native-artifact nodes already entered into the ledger.

The major PDF delta is instead **tool orchestration**.

For a final PDF, Deep Drift should now record:

```text
SOURCE FILE
USER INTENT
SELECTED PDF ACTION
ACTION PARAMETERS
PREVIEW RESULT
EDITOR HANDOFF
HUMAN REVISIONS
FINAL PDF
```

A perfect PDF without that chain is still provenance-poor.

## 19. Why This Matters for Copy-Paste / Export Fixes

The strongest copy-paste update is OpenAI's automatic conversion of very large pastes into attachments.

The manual seam becomes smaller:

```text
PASTE 30,000 CHARACTERS
-> SYSTEM CREATES ATTACHMENT REPRESENTATION
```

This is useful.

But the user's mental model may remain:

```text
I PASTED TEXT
```

while the model's actual context contract becomes:

```text
I RECEIVED AN ATTACHMENT
```

Deep Drift therefore needs to benchmark **representation drift caused by convenience features**.

## 20. New Failure Classes

### 20.1 Model Identity Erasure

A generated artifact survives while the platform cannot identify which routed model produced the material revision.

### 20.2 Cost Escalation without Runtime Attribution

The system escalates to a higher-powered mode, but later history does not preserve which task incurred the change.

### 20.3 Admin-Policy / Runtime Mismatch

A routed model falls outside the approved enterprise model set.

### 20.4 Intent-to-Tool Misrouting

Natural language maps to the wrong PDF operation even though the request appears superficially compatible.

### 20.5 Preview / Full-Editor Provenance Break

The final file cannot distinguish agent-executed edits from later editor changes.

### 20.6 Paste-to-Attachment Representation Loss

A later review sees source text but cannot determine whether it entered the model as inline content or an attachment.

### 20.7 Memory-Scope History Erasure

The project shows its current memory setting but not which setting governed earlier outputs.

### 20.8 Reproduction under Wrong Context Boundary

A researcher repeats a prompt under the current project memory scope and incorrectly treats the output difference as model drift.

### 20.9 Same-Skill / Different-Orchestration Drift

A stable Skill produces different behavior because model routing or context representation changed.

### 20.10 Seamless-Interface Forensic Loss

The interface removes several explicit user decisions without replacing them with machine-readable execution lineage.

## 21. Deep Drift Benchmark: One Intent, Multiple Hidden Routes

Prepare one controlled task that can produce a small document-processing artifact and one app-builder task.

### Model-routing test

1. record project state and routing mode;
2. execute a controlled Replit task under automatic routing;
3. preserve selected model and cost mode;
4. rerun using manual model selection if available;
5. compare code structure, latency, and resulting app behavior;
6. repeat under an enterprise-approved restricted model set where available.

### PDF tool-routing test

1. upload one controlled PDF;
2. request a natural-language transformation;
3. preserve interpreted action and parameters;
4. inspect the preview result;
5. hand off to full editor;
6. make one human revision;
7. export the final PDF;
8. verify that agent and human changes remain separable.

### Input-representation test

1. prepare one source text longer than 10,000 characters;
2. paste it into ChatGPT;
3. record attachment conversion;
4. convert it back to inline text where possible;
5. run the same analysis in both representations;
6. compare retrieval, truncation, citation, and answer behavior.

### Memory-boundary test

1. create a project under Default memory;
2. run a controlled prompt that can benefit from outside-project memory;
3. switch the project to Project-only memory;
4. allow documented propagation time;
5. rerun the identical prompt;
6. preserve scope version and output difference;
7. test whether project information appears outside the project after the boundary change.

## 22. Proposed Metrics

### Model Routing Attribution Coverage

```text
MRAC =
routed executions with recoverable selected model + policy state
/
all controlled routed executions
```

### Intent-to-Tool Accuracy

```text
ITA =
correct document operations selected from natural-language intent
/
all controlled document-operation requests
```

### Input Representation Attribution

```text
IRA =
outputs traceable to exact inline-vs-attachment input state
/
all controlled representation tests
```

### Memory Scope Version Coverage

```text
MSVC =
outputs traceable to exact project memory-scope version
/
all controlled project outputs
```

### Handoff Lineage Coverage

```text
HLC =
final artifacts separating agent edits from post-handoff editor edits
/
all controlled handoff artifacts
```

### Hidden Decision Disclosure Coverage

```text
HDDC =
material hidden orchestration decisions recoverable later
/
all controlled material orchestration decisions
```

## 23. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | **New-to-ledger:** existing ChatGPT projects can switch between Default and Project-only memory, making memory scope a mutable runtime state rather than a creation-time choice. |
| Skills | No stronger new Skill primitive surfaced in this pass; key implication is that Skill reproducibility now depends on routed model, context boundary, and tool path. |
| Mini-app builders | **Major finding:** Replit Intelligent Model Routing automatically selects task-specific models while allowing user override and enterprise-approved model constraints. |
| Chat-to-document export | **Strong adjacent finding:** Acrobat for Copilot converts conversational intent directly into PDF operations rather than requiring copy/paste into a separate document tool. |
| DOCX / PDF generation | No new standalone DOCX primitive displaced prior entries; PDF workflow increasingly depends on tool-selection and editor-handoff lineage. |
| Copy-paste / export fixes | **New-to-ledger:** ChatGPT automatically converts >10k-character pastes into attachments across all plans, reducing composer/context friction while changing input representation. |
| Broader creator workflow | **Major trend:** creator platforms are moving hidden orchestration - model choice, input representation, context scope, and tool selection - behind a single intent surface. |

## 24. Deep Drift Research Position

The weak description is:

> Replit picks models automatically, Adobe lets Copilot edit PDFs, and ChatGPT handles project memory and long pastes more conveniently.

The serious description is:

> Creator AI is shifting explicit user decisions into an orchestration layer that silently transforms input representation, changes admissible context, selects runtime intelligence, and routes intent into specialized tools before producing the visible artifact.

Therefore:

```text
SAME PROMPT
!= SAME RUNTIME

SAME TEXT
!= SAME INPUT REPRESENTATION

SAME PROJECT
!= SAME MEMORY BOUNDARY

SAME INTENT
!= SAME TOOL PATH

SEAMLESS
!= TRACEABLE
```

The serious Deep Drift requirement is:

> **Every orchestration-heavy creator workflow should preserve source instruction, input representation, memory/context boundary version, candidate and selected model state, administrative model-policy state, user override events, selected tool/action and parameters, preview-to-editor handoff, human revision events, cost/escalation state, and downstream artifact lineage required to reconstruct how a single user intent was transformed into the actual execution path.**

The industry keeps removing decisions from the user's screen and calling that simplicity. Often it is simplicity. But a hidden decision does not cease to exist because the menu disappeared. It merely becomes infrastructure, and infrastructure with no lineage is just a very polite form of amnesia.

## 25. Evidence Boundary

Platform facts in this report are grounded in first-party Replit, Adobe, and OpenAI documentation checked on 31 August 2026.

Replit states that Intelligent Model Routing, released 26 August 2026 and updated 27 August, automatically selects models per task while balancing quality, speed, and cost; users can override escalation or manually select models on supported plans; enterprise administrators can restrict routing to approved models.

Adobe states in documentation updated 18 August 2026 that Acrobat for Copilot can take natural-language PDF requests such as editing, merging application materials, extracting metrics from scanned reports, and compressing files; Acrobat processes the file in an interactive editor and supports a boundary between preview-level updates and the full Acrobat editor.

OpenAI states that, as of 4 August 2026, pastes over 10,000 characters are automatically converted into attachments across ChatGPT plans, with an option to move them back into the text field. OpenAI also states that, as of 14 August 2026, eligible existing projects can switch between Default memory and Project-only memory; project-only memory restricts context to the project and prevents project information from being used in chats outside it.

ROCBF and all companion fidelity constructs, failure classes, metrics, and benchmark procedures are ATOR Institute / Deep Drift Research constructs.

## Primary Sources

1. Replit, **Intelligent Model Routing on Replit**, 26 August 2026, updated 27 August 2026.  
   https://replit.com/blog/intelligent-model-routing

2. Adobe Acrobat, **Edit and organize PDFs in Acrobat for Copilot**, updated 18 August 2026.  
   https://helpx.adobe.com/acrobat/web/use-acrobat-extensions/acrobat-for-copilot/edit-pdfs.html

3. OpenAI Help Center, **ChatGPT - Release Notes**, 4 August and 14 August 2026 entries.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

---

**D-ORIGIN | ATORAI | ALT-MAN | Eir'an | CHATJIPITI SINGH**