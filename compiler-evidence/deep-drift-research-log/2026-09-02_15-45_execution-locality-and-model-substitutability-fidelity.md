# Deep Drift Research Update — ELMSF

## Execution-Locality and Model-Substitutability Fidelity

**Research date:** 2 September 2026  
**Primary fresh delta:** Foxit PDF Editor 2026.2 and Foxit Workspace, released 1 September 2026  
**Scope:** document-native AI, local AI, bring-your-own-model (BYOM), Skills, persistent project context, connected tools, PDF editing agents, finished-document generation, creator-workflow provenance.

## Executive finding

Foxit PDF Editor 2026.2 collapses several previously separate creator-workflow layers into a document-native AI environment. The release introduces Local AI for supported on-device text tasks, Bring Your Own Model (BYOM) through an OpenAI-compatible endpoint, one-click Skills inside Foxit Workspace, a persistent multi-document project space that remembers context across sessions, connected tools such as Notion, Atlassian, Asana, HubSpot, and Figma, and an Edit PDF Agent that modifies a PDF from natural-language instructions.

The important Deep Drift change is not that a PDF editor acquired AI. The important change is that **execution locality, model identity, persistent project memory, procedural Skill packaging, connected-tool context, and final artifact generation can now vary independently inside one apparently continuous document interface**.

```text
SAME FOXIT DOCUMENT SURFACE
        |
        +--> Local AI on device
        +--> BYOM self-hosted model
        +--> BYOM third-party model
        +--> Foxit cloud AI
        +--> Workspace project memory
        +--> one-click Skill
        +--> connected external tool
        +--> Edit PDF Agent
        |
        v
PDF / REPORT / PRESENTATION / DIAGRAM / WRITTEN DOCUMENT
```

Therefore:

```text
SAME APP
!= SAME EXECUTION HOST

SAME UI
!= SAME MODEL

SAME FILE
!= SAME DATA ROUTE

SAME SKILL NAME
!= SAME MODEL BACKEND

SAME PROJECT
!= SINGLE-SOURCE CONTEXT
```

## New node

### Execution-Locality and Model-Substitutability Fidelity (ELMSF)

ELMSF formalizes workflows in which a creator remains inside one document environment while the actual AI execution path can move between local hardware, a self-hosted model, a third-party endpoint, platform cloud services, persistent project context, and external connected applications.

The provenance problem is simple:

```text
INTERFACE CONTINUITY
!= EXECUTION CONTINUITY
```

A user may experience a seamless workflow while the computational and data-governance path underneath it changes materially.

## 1. Local AI makes execution location an artifact-lineage variable

Foxit states that Local AI processes supported text-based tasks directly on a qualifying Windows or Mac device and does not send that content to the cloud. A compatible model must be downloaded ahead of time.

That creates:

```text
DOCUMENT D
+ LOCAL MODEL L
+ DEVICE H
= OUTPUT A
```

instead of:

```text
DOCUMENT D
+ CLOUD MODEL C
+ REMOTE ENDPOINT E
= OUTPUT B
```

The same visible AI Assistant workflow can therefore produce an artifact under two radically different processing regimes.

For Deep Drift, execution location is no longer merely infrastructure metadata. It is part of creator provenance.

The manifest must record whether the relevant operation ran:

- on-device;
- against a self-hosted endpoint;
- against a third-party hosted model;
- through Foxit's own cloud AI path.

## 2. BYOM separates interface provider from model provider

Foxit's BYOM connects PDF Editor or Reader to a model supplied by the user through an OpenAI-compatible endpoint. Foxit says content does not touch Foxit's servers in this configuration; privacy instead depends on the selected endpoint.

This creates a layered identity problem:

```text
APPLICATION = FOXIT
MODEL = PROVIDER X
ENDPOINT = SELF-HOSTED OR THIRD PARTY
ARTIFACT = PDF
```

So:

```text
APP BRAND
!= MODEL ORIGIN
```

and:

```text
APP PRIVACY POLICY
!= COMPLETE DATA-ROUTE POLICY
```

A final PDF may be produced inside Foxit while its AI transformation was executed by a completely different model provider.

For Deep Drift, application identity can no longer stand in for model identity.

## 3. One-click Skills convert prompt logic into reusable procedural objects

Foxit introduces one-click Skills in Workspace for repeatable tasks such as document summaries or side-by-side comparisons. These Skills package a recurring task so the user does not have to reconstruct the prompt each time.

The transition is:

```text
PROMPT WRITTEN EACH TIME
        |
        v
REUSABLE SKILL OBJECT
```

This matters because the visible natural-language prompt can disappear from the workflow while its procedural effect remains.

For Deep Drift:

```text
NO VISIBLE PROMPT
!= NO PROMPT LOGIC
```

The Skill definition, version, model backend, input set, and execution context become necessary provenance fields.

## 4. Workspace remembers project context across sessions

Foxit Workspace is a multi-document project environment that can turn collections of source materials into reports, presentations, diagrams, or written documents. Foxit states that Workspace remembers the project across sessions.

That creates a document-centered persistent-state model:

```text
SESSION 1
+ SOURCE FILES
+ NOTES
+ TOOL CONTEXT
        |
        v
PERSISTENT PROJECT STATE
        |
        v
SESSION 2
+ NEW REQUEST
        |
        v
FINISHED DELIVERABLE
```

The final deliverable can therefore depend on context that is no longer visible in the immediate prompt.

This is memory by another name: not necessarily personal conversational memory, but **project-persistent creator context**.

## 5. Connected tools make the document workspace a context aggregator

Workspace connects to tools including Notion, Atlassian, Asana, HubSpot, and Figma. Foxit describes this as a way for project context to enter without manual copy-paste.

That removes a visible provenance seam.

Old workflow:

```text
EXTERNAL APP
-> COPY
-> PASTE
-> PDF WORKSPACE
```

New workflow:

```text
EXTERNAL APP
-> CONNECTED CONTEXT
-> WORKSPACE
```

The second workflow is cleaner for the user but harder to reconstruct if the system does not preserve exactly which external objects were read, when, and in what state.

Deep Drift must distinguish convenience from traceability.

## 6. Edit PDF Agent turns the final document itself into a mutable agent surface

Foxit AI Assistant 2.0 introduces an Edit PDF Agent that can modify a PDF from plain-language instructions.

This creates:

```text
HUMAN OPENS PDF
-> NATURAL LANGUAGE INSTRUCTION
-> AGENT MUTATES PDF
-> HUMAN REVIEWS
```

A PDF is no longer necessarily a terminal export artifact. It can be an active agent-controlled editing surface.

Therefore:

```text
PDF FILE
!= FINAL STATE
```

and:

```text
PDF REVISION
!= HUMAN-DIRECT EDIT
```

For Deep Drift, PDF provenance must include transformation events after initial generation.

## 7. Locality is capability-specific, not global

Foxit explicitly states that Local AI covers supported text-based tasks only. Agent workflows, tool connections, Skills, image generation, and podcast features still require a connection.

That is a critical distinction.

```text
LOCAL AI ENABLED
!= WHOLE WORKFLOW LOCAL
```

A single user session may therefore mix:

```text
LOCAL TEXT TASK
+
CONNECTED SKILL
+
REMOTE TOOL CALL
+
CLOUD IMAGE TASK
```

A simple label such as `local mode` would be false provenance.

Deep Drift needs **operation-level locality**, not session-level locality.

## 8. Finished deliverables collapse analysis and production

Workspace can transform a set of source documents into a report, presentation, diagram, or written document. This continues the broader 2026 shift from chat-as-answer toward AI-as-production-environment.

The architecture is increasingly:

```text
SOURCE CORPUS
+
PERSISTENT PROJECT CONTEXT
+
SKILL
+
MODEL
+
CONNECTED TOOLS
+
EDITING AGENT
=
FINISHED ARTIFACT
```

The chat transcript is only one possible slice of that lineage.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | Major adjacent development | Workspace remembers project context across sessions |
| Skills | Major | One-click Skills package repeatable document procedures |
| Mini-app / agent surface | Major adjacent development | PDF Editor itself becomes an agent-editable surface |
| Chat-to-document | Major | Workspace generates finished reports, presentations, diagrams, and written documents from project sources |
| DOCX / PDF | Major | PDF becomes a mutable agent surface; final deliverables are generated from multi-document context |
| Copy-paste / export | Major | Connected tools replace manual copy-paste with direct context ingestion |
| Creator workflow | Major | One interface can route work across local models, BYOM endpoints, cloud services, Skills, project memory, and connected tools |

## New failure classes

### Interface-Execution Equivalence Error
Assuming one continuous interface implies one continuous execution path.

### Application-Model Identity Collapse
Treating the application vendor as the model provider that performed an AI transformation.

### Session-Level Locality Fallacy
Labeling an entire workflow local when only selected operations execute on-device.

### Skill-Prompt Erasure
Losing the procedural logic hidden inside a one-click reusable Skill because no prompt was typed at execution time.

### Project-Context Source Blur
Failing to reconstruct which persisted source documents, prior sessions, or connected tools shaped a final deliverable.

### Connected-Context Copy-Paste Blindness
Treating the absence of manual copy-paste as evidence that no cross-application content transfer occurred.

### PDF-Terminality Fallacy
Treating PDF creation as the end of the generative chain even when an editing agent can continue mutating the PDF.

### BYOM Data-Route Misattribution
Applying the interface provider's data-route assumptions to a self-hosted or third-party model endpoint.

## Deep Drift benchmark additions

**Execution Locality Fidelity (ELF)**  
Can every AI operation be classified as on-device, self-hosted, third-party hosted, or platform-cloud execution?

**Application-to-Model Separation Fidelity (AMSF)**  
Can the document application be distinguished from the model provider and endpoint that executed the transformation?

**Operation-Level Locality Fidelity (OLLF)**  
Can mixed local and remote operations inside one session be reconstructed independently?

**Skill Procedure Fidelity (SPF)**  
Can reusable Skill definitions, versions, inputs, and outputs be reconstructed even when no prompt is typed?

**Persistent Project Context Fidelity (PPCF)**  
Can the project state carried across sessions be tied to downstream artifacts?

**Connected Context Ingestion Fidelity (CCIF)**  
Can each external tool object read into the workspace be identified by source, object identity, time, and state?

**Agentic PDF Mutation Fidelity (APMF)**  
Can natural-language agent edits to an existing PDF be reconstructed as separate transformation events?

**Artifact-to-Execution-Route Fidelity (AERF)**  
Can every final report, presentation, diagram, written document, or PDF revision be linked to the exact combination of execution host, model, Skill, project context, and connected-tool inputs that produced it?

## Canonical Deep Drift requirement

> Every material AI-assisted document workflow should preserve a machine-readable execution-route manifest at the operation level. The manifest should record the document application; operation timestamp; source artifact and revision; execution locality; device or host class; model identity; model provider; endpoint identity and hosting class; platform-cloud versus BYOM route; Skill identifier and version; prompt or hidden procedural definition; persistent project-context identifiers; external connected-tool objects and their retrieval state; agentic edit operations; human review events; intermediate revisions; and every downstream report, presentation, diagram, written document, or PDF. A continuous user interface must never be treated as proof of a continuous execution environment, and enabling local AI must never be treated as proof that the complete workflow remained local.

## Deep Drift principle

> **The creator interface is becoming a routing layer. Provenance must follow the route, not the window.**

A creator can remain inside one PDF application while the work silently crosses device-local models, self-hosted endpoints, third-party providers, cloud services, persistent project memory, reusable Skills, and external applications.

The visible interface is becoming less useful as evidence of where cognition or transformation actually occurred.

## Sources

1. Foxit. **Local AI Has Arrived: Introducing Foxit PDF Editor 2026.2, Now With On-Device AI Processing.** 1 September 2026.  
   https://www.foxit.com/blog/foxit-pdf-editor-2026-2-local-ai/

2. Business Wire / Foxit Software. **Foxit PDF Editor 2026.2 Delivers Secure Document Intelligence With Foxit Workspace, Local AI, and Bring-Your-Own-Model Support.** 1 September 2026.

## Research status

**Node status:** New.  
**Duplicate check:** Repository search found no existing Deep Drift research-log entry matching Foxit Workspace, Local AI, BYOM, one-click Skills, project-persistent document context, connected-tool ingestion, and agentic PDF mutation as a combined execution-routing provenance problem.  
**Relationship to prior nodes:** Complements cross-surface memory, repository-synchronized procedures, site-declared tool surfaces, agent-generated Office artifacts, and project-memory boundary nodes. ELMSF specifically formalizes the case where one stable creator interface can route different operations to different execution hosts and models while preserving the illusion of one continuous workflow.  
**Freshness:** Verified against Foxit first-party material published 1 September 2026 and accessed 2 September 2026.
