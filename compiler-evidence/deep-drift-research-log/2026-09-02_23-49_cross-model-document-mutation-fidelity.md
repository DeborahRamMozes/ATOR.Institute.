# Deep Drift Research Update — CMDMF

## Cross-Model Document Mutation Fidelity

**Research date:** 2 September 2026  
**Primary fresh delta:** Microsoft Word Copilot can edit the same native document using different model providers, including OpenAI and Anthropic models.  
**Secondary delta:** Copilot edits can be applied directly in Word while remaining reviewable and reversible; Microsoft also documents tenant-level controls for access to alternative model providers.  
**Scope:** model routing, in-place document editing, DOCX provenance, multi-model authorship, reversible mutation, provider governance, downstream PDF lineage.

## Executive finding

Microsoft 365 Copilot release documentation now describes a creator workflow in which the **same Word document can be edited through Copilot using either OpenAI or Anthropic models**. Microsoft separately documents direct in-place Copilot editing in Word, with edits remaining reviewable and reversible.

This produces a new provenance problem:

```text
ONE DOCUMENT
      |
      +--> HUMAN EDIT
      |
      +--> OPENAI EDIT
      |
      +--> ANTHROPIC EDIT
      |
      +--> HUMAN ACCEPT / REJECT
      |
      v
FINAL DOCX
```

The file identity remains stable while the model identity can change between editing events.

Therefore:

```text
SAME DOCX
!= SAME MODEL ANCESTRY

SAME COPILOT UI
!= SAME MODEL PROVIDER

CURRENT MODEL
!= MODEL USED FOR EARLIER EDIT

REVERSIBLE EDIT
!= SELF-DOCUMENTING PROVENANCE
```

For Deep Drift Research, model provenance must move from the **document level** to the **mutation-event level**.

## New node

### Cross-Model Document Mutation Fidelity (CMDMF)

The core object is no longer simply:

```text
artifact -> model
```

It becomes:

```text
artifact
  |
  +--> mutation_001 -> human
  +--> mutation_002 -> OpenAI model
  +--> mutation_003 -> Anthropic model
  +--> mutation_004 -> human acceptance
  +--> mutation_005 -> formatting agent
  +--> export -> PDF
```

Every meaningful mutation may have a different causal actor.

## 1. Model selection is now embedded inside the native document editor

Microsoft documents that Word Copilot on the web allows users to choose Anthropic models in addition to OpenAI models when editing a Word document.

This matters because the model switch happens **inside the same authoring surface**.

Historically, switching providers often created visible workflow seams:

```text
WORD
-> COPY TEXT
-> EXTERNAL MODEL
-> COPY RESPONSE
-> WORD
```

The new workflow is:

```text
WORD
-> MODEL MENU
-> MODEL A OR MODEL B
-> DIRECT EDIT
```

The transfer seam disappears.

The human may never create a separate intermediate file or copied text fragment that reveals the provider transition.

## 2. Document provenance must become span- or operation-aware

A final DOCX may contain paragraphs with different causal histories.

Example:

```text
PARAGRAPH 1
human authored

PARAGRAPH 2
OpenAI rewrite

PARAGRAPH 3
Anthropic expansion

PARAGRAPH 4
human merged outputs

HEADING STRUCTURE
Copilot reformatted
```

A metadata field such as:

```text
AI_MODEL = Anthropic
```

would be false as a description of the whole document.

Likewise:

```text
AI_MODEL = OpenAI
```

would be equally false.

Deep Drift therefore needs a mutation ledger rather than a single model label.

## 3. Reviewable and reversible editing creates a state graph

Microsoft also documents that Copilot can edit Word documents directly and that its changes remain reviewable and reversible.

That means the document may pass through:

```text
S0 = original

S1 = AI proposal applied

S2 = human review

S3 = partial acceptance

S4 = rejection of selected edit

S5 = further model edit

S6 = final document
```

The final visible text alone does not reveal all rejected or superseded AI interventions.

This creates a distinction:

```text
FINAL CONTENT
!= COMPLETE MUTATION HISTORY
```

For research provenance, rejected edits can still matter because they may influence later human decisions even if their text disappears.

## 4. Provider identity can become an organizational policy variable

Microsoft separately documents administrative controls that can enable alternative AI providers for selected users and groups.

So model availability is not merely a personal model-menu preference.

It can depend on:

```text
tenant policy
user identity
group membership
administrator configuration
surface
time
```

Therefore:

```text
MODEL SHOWN TO USER A
!= MODEL SHOWN TO USER B
```

even inside the same organization and application.

A reproducibility record must preserve which provider choices were actually available to the operator at execution time.

## 5. Same UI can hide materially different model behavior

The Copilot pane remains the interface.

But:

```text
COPILOT UI
      |
      +--> OpenAI model
      |
      +--> Anthropic model
```

The user may experience one continuous editing environment while underlying model behavior changes.

This makes interface-based provenance increasingly weak.

A screenshot showing "Copilot in Word" is insufficient evidence of:

- which provider executed an edit;
- which model version executed it;
- whether the provider changed mid-document;
- whether an administrator changed provider availability;
- whether an earlier edit was later accepted, rejected, or overwritten.

## 6. DOCX becomes a multi-model composite artifact

A native document can now accumulate contributions from multiple models without leaving Word.

That means:

```text
DOCX
!= SINGLE GENERATIVE EVENT
```

A better conceptual model is:

```text
DOCX
=
HUMAN TEXT
+ MODEL A MUTATIONS
+ MODEL B MUTATIONS
+ HUMAN SELECTION
+ FORMAT MUTATIONS
+ REVERSIONS
+ COLLABORATIVE EDITS
```

This is directly relevant to Deep Drift's layered authorship framework.

"AI-assisted" is now too coarse.

Even "Claude-assisted" or "OpenAI-assisted" can be too coarse.

The correct unit is the **edit event**.

## 7. PDF export collapses the mutation graph

Once the Word document is exported to PDF:

```text
MULTI-MODEL EDIT HISTORY
        |
        v
VISUALLY FLATTENED PDF
```

The final PDF may preserve none of the model-routing distinctions visible during authoring.

So:

```text
PDF DERIVATIVE
!= AUTHORING HISTORY
```

Deep Drift should preserve the native DOCX, relevant revision history, model-event ledger, and PDF derivative as separate but linked artifacts.

## 8. Creator workflow trend: model choice is moving down into the editor

The broader trend is important.

The model is no longer only chosen before entering a workflow.

Increasingly:

```text
DOCUMENT
-> SELECT MODEL
-> MUTATE OBJECT
-> SWITCH MODEL
-> MUTATE AGAIN
```

This resembles choosing different brushes inside the same graphics application, except the "brush" is a probabilistic reasoning system with a different provider, training history, governance regime, and behavioral profile.

The editor is becoming a **model-routing shell**.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger new delta found in this scan | Existing project/memory protocols remain current |
| Skills/plugins | Indirect | Provider selection behaves like a runtime procedural dependency inside the editor |
| Mini-app builders | No stronger new delta | Existing builder provenance nodes remain current |
| Chat-to-document | Major | The document itself is now the live multi-model editing surface |
| DOCX | Major | One DOCX can accumulate mutations from multiple model providers |
| PDF | Major downstream effect | PDF export can flatten provider-specific mutation history |
| Copy-paste/export | Major seam collapse | Provider switching no longer requires external copy-paste |
| Creator workflow | Major | Native editors are becoming model-routing environments |

## New failure classes

### Single-Model Document Fallacy
Assuming one document has one AI model provenance.

### Interface-Equals-Provider Fallacy
Treating the visible Copilot interface as proof of which model provider executed an edit.

### Current-Model Retroactivity Error
Assuming the model currently selected was responsible for earlier edits.

### Reversal-Erases-Influence Error
Treating rejected or reverted AI edits as historically irrelevant.

### Provider-Availability Blindness
Ignoring that administrative policy can change which models are available to specific users or groups.

### PDF-History Flattening Error
Treating the final PDF as sufficient evidence of the model history that produced it.

## Deep Drift benchmark additions

**Mutation-to-Model Fidelity (MMF)**  
Can every material document mutation be tied to the model and provider that produced it?

**Cross-Provider Sequence Fidelity (CPSF)**  
Can the order of OpenAI, Anthropic, human, and other edits be reconstructed?

**Review-State Fidelity (RSF)**  
Can proposed, accepted, rejected, reverted, and superseded edits remain distinguishable?

**Provider Availability Fidelity (PAF)**  
Can the model choices actually available to the user at execution time be reconstructed?

**Native-to-Derivative Lineage Fidelity (NDLF)**  
Can a PDF or other exported derivative be tied back to the richer mutation history of the native document?

**Human Selection Fidelity (HSF)**  
Can human acceptance, rejection, merging, and final editorial choice be preserved as distinct authorship events?

## Protocol addition for DRPA-1.0

Add the following requirement under artifact lineage and model routing:

> **MULTI-MODEL MUTATION RULE:** When a persistent artifact can be edited by more than one model provider within the same native authoring environment, provenance must be recorded at the mutation-event level rather than assigning one model identity to the artifact as a whole. For each material edit, preserve the timestamp; document revision or range affected; model provider; model identity where available; execution surface; human instruction; proposed mutation; acceptance, rejection, or reversion state; human modifications; and downstream derivative relationship. A stable application, file name, or document ID must never be treated as proof of stable model ancestry.

## Canonical Deep Drift requirement

> Every persistent AI-assisted document should be treated as a composite state history rather than a single generated object. When multiple model providers can mutate the same native file, the archive should preserve the ordered mutation ledger, provider and model identity for each material operation, provider-availability policy, human acceptance and rejection events, reversions, collaborative changes, export events, and final derivatives. The model currently visible in the editor must never be applied retroactively to earlier document states.

## Deep Drift principle

> **When models become interchangeable inside the editor, authorship stops being a label on the document and becomes a timeline inside it.**

The final file is only the latest state.

The research object is the mutation graph.

## Sources

1. Microsoft Learn. **Release Notes for Microsoft 365 Copilot**, August 11, 2026 release section. Microsoft documents that users can choose Anthropic models in addition to OpenAI models when editing a Word document with Copilot.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

2. Microsoft Learn. **Release Notes for Microsoft 365 Copilot**, June 2, 2026 release section. Microsoft documents direct Copilot editing in Word with changes that are reviewable and reversible.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

3. Microsoft Learn. **Release Notes for Microsoft 365 Copilot**, May 19, 2026 release section. Microsoft documents administrator controls for access to Anthropic and other model providers for specific users and groups.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

## Research status

**Node status:** New.  
**Duplicate check:** Distinct from prior Model-Class Retention and Routing Fidelity. MCRRF tracks model selection as infrastructure and retention routing; CMDMF tracks multiple model providers mutating the same persistent native document across sequential edit events.  
**Relationship to DRPA-1.0:** Extends Sections 9, 12, 23, and 24 by requiring model identity at the individual mutation-event level.  
**Freshness:** Verified against current Microsoft 365 Copilot release documentation on 2 September 2026.
