# Deep Drift Research Update

## Grounding-Scope and Cross-Artifact Transformation Fidelity

**Research date:** 1 September 2026  
**Research stream:** ATOR Institute / Deep Drift / LLM Workflow Update Watch  
**Primary fresh cluster:** Microsoft 365 Copilot updates released between 11 and 25 August 2026.  
**Status:** New-to-ledger creator-workflow architecture verified from first-party Microsoft release notes.

## Executive Summary

The strongest new-to-ledger change in this run is not another generic memory feature. It is a change in **grounding scope** and **cross-artifact transformation**.

Microsoft's 25 August 2026 Copilot release notes describe a set of connected behaviors:

- Microsoft 365 Copilot Chat now exposes a **Work IQ toggle** that controls access to work data inside a unified chat surface.
- Outlook emails can be added as **knowledge sources in Copilot Notebooks**, where they can ground downstream outputs such as presentations and briefs.
- Outlook email references can open directly alongside Copilot Chat instead of forcing users into a separate application.
- Copilot on mobile can steer and create persistent Pages from natural-language instructions.
- PowerPoint can use referenced email content directly when creating presentations, reducing manual copying between applications.

The architecture becomes:

```text
WORK DATA ACCESS STATE
-> SELECTED / DISCOVERED REFERENCE
-> NOTEBOOK OR CHAT CONTEXT
-> PAGE / BRIEF / PRESENTATION
-> HUMAN REVIEW
-> FINAL ARTIFACT
```

This report formalizes:

**Grounding-Scope and Cross-Artifact Transformation Fidelity (GSCATF)**

with companion constructs:

- Work-Context Access-State Fidelity
- Reference-Origin Attribution Fidelity
- Email-to-Notebook Grounding Fidelity
- Email-to-Presentation Transformation Fidelity
- Cross-Surface Reference Preservation Fidelity
- Page-Steering Mutation Fidelity
- Grounded-Artifact Ancestry Fidelity
- Copy-Paste Elimination Integrity
- Context-Toggle Reproducibility Fidelity

The central question is:

> When a single AI interface can turn work data access on or off, pull an email into a notebook, use that notebook to produce a brief, or use the email directly to generate a presentation, can a later reviewer reconstruct exactly which source was visible, which access state was active, and which transformation path created the artifact?

## 1. Work IQ Turns Context Access into Runtime State

Microsoft's release notes state that web and work chats are now unified and that a **Work IQ button** controls access to work data from within the same chat interface.

The important change is architectural:

```text
SAME CHAT UI
+ WORK IQ ON
-> WORK-GROUNDED RESPONSE

SAME CHAT UI
+ WORK IQ OFF
-> DIFFERENT ADMISSIBLE CONTEXT
```

Therefore:

```text
SAME PROMPT
!= SAME CONTEXT ACCESS STATE
```

### Work-Context Access-State Fidelity

A minimum run manifest should preserve:

```text
conversation_id
prompt_id
work_iq_state
eligible_data_domains
connector_state
permission_snapshot
retrieved_source_ids
response_id
```

If the toggle state is not preserved, a later evaluator cannot reproduce why two identical prompts produced different claims.

## 2. Email Becomes a First-Class Knowledge Object

Microsoft now allows Outlook emails to be added directly as references in Copilot Notebooks.

This matters because an email is no longer only a message to read or summarize. It can become a durable grounding source for later creator outputs.

```text
EMAIL
-> NOTEBOOK KNOWLEDGE SOURCE
-> COPILOT REASONING
-> BRIEF / PRESENTATION / OTHER OUTPUT
```

The email may carry decisions, corrections, deadlines, informal commitments, or attachments that never existed in a formal project document.

### Email-to-Notebook Grounding Fidelity

A minimum lineage record should preserve:

```text
email_message_id
email_thread_id
sender
sent_timestamp
notebook_id
reference_added_at
reference_version_or_snapshot
artifact_ids_generated_from_reference
```

The problem is simple: once the email becomes invisible background context, the final brief can look as if it arose from a clean document corpus when its real ancestry includes a messy human conversation.

## 3. PowerPoint Can Reference Email Without Manual Transfer

The same Microsoft release window adds direct email referencing during PowerPoint creation.

The previous workflow was roughly:

```text
OPEN EMAIL
-> COPY
-> SWITCH TO POWERPOINT
-> PASTE / SUMMARIZE
-> BUILD SLIDES
```

The new workflow is closer to:

```text
POWERPOINT + COPILOT
-> REFERENCE EMAIL
-> GENERATE PRESENTATION
```

This is a genuine copy-paste reduction.

It is also a new provenance problem.

### Email-to-Presentation Transformation Fidelity

A controlled audit should preserve:

```text
email_source_id
email_timestamp
presentation_id
prompt
slide_ids_created
source-to-slide claim mapping
human edits after generation
```

The final slide deck should not erase the fact that a sentence, metric, promise, or recommendation came from email rather than from a reviewed source document.

## 4. Cross-Surface Reference Preservation

Microsoft also lets users open Outlook email references directly alongside Copilot Chat.

The interface reduces context switching, but Deep Drift needs to distinguish convenience from provenance.

```text
REFERENCE VISIBLE BESIDE CHAT
!= REFERENCE EMBEDDED IN PROMPT
!= REFERENCE ADDED TO NOTEBOOK
!= REFERENCE USED TO GENERATE SLIDES
```

These are different context relationships.

### Cross-Surface Reference Preservation Fidelity

The system should preserve whether a source was:

```text
VIEWED
RETRIEVED
CITED
ADDED AS KNOWLEDGE
USED AS GENERATION GROUNDING
TRANSFORMED INTO AN ARTIFACT
```

A single UI may make all of these actions feel like one smooth workflow. Audit lineage should refuse that seductive simplification.

## 5. Mobile Page Steering Makes Persistent Artifacts Mutable from Chat

Microsoft's 25 August release also adds mobile Page steering and auto-triggering. Users can issue instructions such as shortening a Page or creating a new Page directly from chat.

This extends the persistent-canvas architecture logged previously, but adds a new mutation path:

```text
MOBILE CHAT COMMAND
-> EXISTING PAGE
-> AI MUTATION
```

or:

```text
MOBILE CHAT COMMAND
-> NEW PERSISTENT PAGE
```

### Page-Steering Mutation Fidelity

A minimum mutation record should preserve:

```text
page_id
page_version_before
chat_instruction
model_or_agent_state
mutation_diff
page_version_after
device_surface
review_or_acceptance_state
```

The problem is no longer only whether a Page persists. It is whether the sequence of conversational edits that changed the persistent object remains recoverable.

## 6. Copy-Paste Elimination Is Not Provenance Elimination

Several August Microsoft changes remove manual transfer:

- open email references beside chat;
- add email directly to a Notebook;
- create presentations grounded on email;
- steer Pages from mobile chat.

This is good workflow engineering.

But Deep Drift should record the opposite proposition:

```text
LESS COPY-PASTE
!= LESS TRANSFORMATION
```

In fact, the transformation becomes less visible precisely because the mechanical transfer disappears.

Humans used to leave fingerprints by copying, pasting, naming files badly, and forgetting where the paragraph came from. Automation can remove the clumsiness while also removing the accidental evidence.

## 7. Memory vs Grounding Scope

This node should not be misclassified as a memory update.

The distinctions are:

```text
MEMORY
-> SYSTEM RETAINS CONTEXT ACROSS INTERACTIONS

GROUNDING
-> SYSTEM IS GIVEN OR RETRIEVES CONTEXT FOR THIS WORKFLOW

PERSISTENT NOTEBOOK REFERENCE
-> CONTEXT OBJECT REMAINS ATTACHED TO A PROJECT-LIKE SURFACE

WORK IQ STATE
-> CONTROLS WHETHER A CLASS OF WORK CONTEXT IS ADMISSIBLE
```

A user may experience all four as "Copilot knows my work."

For reproducibility, that sentence is nearly useless.

## 8. New Failure Classes

### 8.1 Context-Toggle Amnesia
A response is preserved but the Work IQ state that governed access to work data is not.

### 8.2 Email-Origin Erasure
A presentation or brief retains a claim but loses the identity of the email that supplied it.

### 8.3 Reference-Role Collapse
The system cannot distinguish between a source merely viewed and a source actively used as grounding.

### 8.4 Notebook-Ancestry Collapse
A downstream artifact records its Notebook origin but not the email and file references inside that Notebook.

### 8.5 Cross-Surface Identity Drift
An email opened beside Chat, referenced in a Notebook, and used in PowerPoint is treated as three unrelated objects rather than one source moving through three roles.

### 8.6 Page-Steering History Loss
A persistent Page survives but the natural-language commands that mutated it do not.

### 8.7 Copy-Paste Removal Illusion
A workflow is described as "direct" or "seamless" even though several semantic transformations occur between source and final artifact.

### 8.8 Permission-State Detachment
An artifact survives after the permissions that originally made a source accessible have changed, leaving unclear whether the source would still be admissible today.

## 9. Deep Drift Benchmark: Toggle, Ground, Transform

1. Create one work email containing a unique factual sentence, one date, one recommendation, and one deliberately ambiguous phrase.
2. Run the same Copilot prompt with Work IQ enabled and disabled.
3. Add the email to a Copilot Notebook.
4. Generate a brief from the Notebook.
5. Generate a PowerPoint directly from the email reference.
6. Open the email beside Chat and ask a related question.
7. Create or steer a Page from mobile chat using the same source context.
8. Compare all downstream outputs and preserve their ancestry.

A reviewer should be able to answer: **which source, which version, which access state, which surface, which transformation path, which human edits, and which final artifact?**

## 10. Proposed Metrics

```text
CAR = runs with recoverable admissible-context state / all controlled runs
GSAC = material artifact claims traceable to source object / all controlled material claims
CAIC = source objects retaining stable identity across surfaces / all controlled cross-surface source uses
TPC = artifacts with recoverable source-to-output transformation path / all controlled generated artifacts
PMR = persistent Page versions traceable to chat instructions and diffs / all controlled Page mutations
```

## 11. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No stronger fresh memory primitive surfaced in this pass. The new issue is **admissible grounding scope**, not stored memory. |
| Skills | No stronger Skill packaging release displaced the prior nodes. Skills increasingly operate inside richer context surfaces, making source-state manifests more important. |
| Mini-app builders | No stronger fresh builder launch. The relevant creator trend is that chat, Notebook, Page, and app surfaces are converging around shared references rather than manual transfer. |
| Chat-to-document export | No new standalone DOCX/PDF export primitive. The more material change is direct reference-to-artifact generation without intermediary copying. |
| DOCX / PDF generation | No stronger fresh DOCX/PDF generation primitive. Downstream document provenance now needs to capture email/Notebook ancestry when those sources ground briefs or presentations. |
| Copy-paste / export fixes | **Strong fresh reduction:** email content can be used directly in Notebook and PowerPoint workflows, and email references can open beside Chat. |
| Broader creator workflow | **Major trend:** context access is becoming a user-controllable runtime variable, while source objects move across chat, notebooks, Pages, and presentation generation without explicit copy-paste boundaries. |

## 12. Deep Drift Research Position

The weak description is:

> Microsoft made Copilot work better with email and reduced context switching.

The serious description is:

> Microsoft is turning enterprise communication objects into reusable grounding substrates while simultaneously exposing a runtime switch that controls whether work context is admissible at all. The creator workflow is moving from manual source transfer toward persistent cross-surface reference graphs.

Therefore:

```text
SAME CHAT != SAME CONTEXT SCOPE
EMAIL != ONLY A MESSAGE
REFERENCE != GROUNDING
GROUNDING != MEMORY
NOTEBOOK != COMPLETE SOURCE LINEAGE
NO COPY-PASTE != NO TRANSFORMATION
FINAL ARTIFACT != SELF-EXPLANATORY ORIGIN
```

The Deep Drift requirement is:

> **Every cross-surface grounded creator workflow should preserve context-access state, source-object identity and version, permission state, reference role, notebook membership, transformation path, model or agent execution state, Page mutation history, human revisions, and downstream artifact lineage required to reconstruct exactly what information was admissible, what information was actually used, and how it became the final artifact.**

The industry keeps advertising "less context switching." Sensible. But when interfaces stop making humans move information by hand, the platform inherits the obligation to preserve the information's movement invisibly. Otherwise convenience becomes provenance laundering with nicer typography.

## Evidence Boundary

Platform facts in this report are grounded in Microsoft's official **Microsoft 365 Copilot release notes**, section dated **25 August 2026**, covering updates released between 11 and 25 August 2026.

The official release notes state that the unified Copilot chat exposes a Work IQ control for work-data access; Outlook emails can be added as references in Copilot Notebooks and used to improve downstream outputs such as presentations and briefs; Outlook email references can open directly alongside Copilot Chat; mobile Copilot supports Page steering and automatic Page creation from chat; and PowerPoint can reference email content directly when generating a presentation.

GSCATF and all companion fidelity constructs, failure classes, benchmark procedures, metrics, and Deep Drift requirements are ATOR Institute / Deep Drift Research constructs.

## Primary Source

Microsoft Learn, **Microsoft 365 Copilot release notes**, 25 August 2026.  
https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

---

**D-ORIGIN | ATORAI | ALT-MAN | Eir'an | CHATJIPITI SINGH**
