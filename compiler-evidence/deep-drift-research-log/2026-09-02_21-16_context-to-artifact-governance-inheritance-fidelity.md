# Deep Drift Research Update — CAGIF

## Context-to-Artifact Governance Inheritance Fidelity

**Research date:** 2 September 2026  
**Primary fresh cluster:** Microsoft 365 Copilot Notebooks, Work IQ context controls, source-to-native-document generation, and generated-file sensitivity-label inheritance  
**Most recent release window reviewed:** 11–25 August 2026, with supporting document-generation controls released earlier in 2026  
**Scope:** memory-like work context, notebooks, email and meeting grounding, chat-to-document materialization, Word/PowerPoint generation, source permissions, information-governance inheritance, copy-paste displacement, and creator-workflow provenance.

## Executive finding

Microsoft 365 Copilot is turning the notebook/work-context layer into an **artifact compiler**. Recent releases allow Outlook emails and Teams meeting material to become notebook knowledge sources; Copilot Chat exposes a Work IQ control for work-data access; and notebook context can feed downstream briefs, presentations, Word documents, spreadsheets, and interactive artifacts. Separately, Microsoft documents that generated files can inherit the **highest sensitivity label detected in referenced source data**.

The Deep Drift problem is therefore no longer only:

```text
SOURCE
-> MODEL
-> OUTPUT
```

It is increasingly:

```text
EMAILS / MEETINGS / FILES / WORK DATA
                |
                v
        CURATED CONTEXT CONTAINER
                |
                v
       AI MATERIALIZATION STEP
                |
                v
      WORD / PPTX / XLSX / BRIEF
                |
                v
      GOVERNANCE LABEL INHERITANCE
```

The native artifact can inherit not only semantic content from its sources but also **policy state**.

This creates a new Deep Drift distinction:

```text
CONTENT LINEAGE
!= GOVERNANCE LINEAGE

GENERATED FILE
!= POLICY-NEUTRAL DERIVATIVE

NO MANUAL COPY-PASTE
!= NO SOURCE TRANSFER
```

## New node

### Context-to-Artifact Governance Inheritance Fidelity (CAGIF)

Core distinctions:

```text
NOTEBOOK CONTEXT
!= SINGLE SOURCE

WORK DATA ACCESS ON
!= WORK DATA ACCESS OFF

SOURCE CONTENT USED
!= SOURCE CONTENT VISIBLY COPIED

ARTIFACT GENERATED
!= SOURCE GOVERNANCE RESET

HIGHEST SOURCE LABEL
!= AVERAGE SOURCE SENSITIVITY

FILE LABEL INHERITED
!= COMPLETE SOURCE PROVENANCE

NATIVE WORD / POWERPOINT OUTPUT
!= HUMAN-ASSEMBLED DOCUMENT
```

## 1. Email has become direct generative context, not merely something copied into a prompt

Microsoft's August 25 release notes state that **Outlook emails can now be added as references in Copilot Notebooks**. Email content, decisions, and conversations can become grounding material for downstream outputs such as presentations and briefs.

That collapses the old transfer seam:

```text
OLD
OUTLOOK
-> OPEN MESSAGE
-> COPY
-> PASTE INTO NOTES / CHAT
-> DRAFT
```

into:

```text
NEW
OUTLOOK EMAIL OBJECT
-> NOTEBOOK REFERENCE
-> MODEL CONTEXT
-> ARTIFACT
```

For Deep Drift, absence of pasted text is no longer evidence that an email did not materially contribute to a document.

The source object itself must be preserved as provenance.

Minimum lineage should include:

```text
email_object_id
mailbox_identity
sender
recipients
timestamp
selected_message_or_thread
permission_state
reference_addition_time
artifact_dependency
```

## 2. Meetings are becoming structured context objects

Microsoft also documents **Teams meetings as references in Copilot Notebooks**. The notebook can incorporate meeting transcripts, notes, chats, and shared files.

That produces a multi-source context object:

```text
MEETING
├── transcript
├── notes
├── chat
├── shared files
└── participant context
        |
        v
      NOTEBOOK
```

A downstream report or presentation can therefore depend on several records from one event without any explicit copy-paste step.

The meeting is no longer merely an event in time. It can become a reusable **generative source bundle**.

## 3. Work-data access is becoming a switchable context boundary

Microsoft's August 25 release notes describe a unified Web/Work chat experience with a **Work IQ** control that lets a user switch access to work data on or off from the same chat interface.

Therefore:

```text
SAME CHAT UI
+ SAME USER
+ SAME PROMPT

WORK IQ ON
!=
WORK IQ OFF
```

The visible conversation surface can remain stable while the available organizational context changes.

For Deep Drift this is another example of **context-boundary state hidden behind a small interface control**.

The archive should record whether work-data access was active at the time each material response or artifact was produced.

## 4. Context containers can now materialize directly into native Office artifacts

Microsoft documents direct creation of native artifacts from Copilot Notebooks, including:

- structured Word documents;
- PowerPoint presentations;
- Excel spreadsheets;
- interactive mind maps.

The Word workflow is especially important for Deep Drift because the notebook's collected content and references are transformed into a structured document that opens in Word for later editing.

Conceptually:

```text
NOTEBOOK STATE N
      |
      v
GENERATE DOCUMENT
      |
      v
WORD DRAFT D1
      |
      v
HUMAN / COPILOT EDITS
      |
      v
DOCX D2
      |
      v
PDF D3
```

A final PDF can therefore be several derivations away from the original source objects.

The notebook state at generation time becomes part of the document ancestry.

## 5. Generated files can inherit governance from source data

Microsoft states that when Microsoft 365 Copilot generates files, it evaluates the content used and applies the **highest sensitivity label detected in the referenced data**. If the appropriate label cannot be applied, the user is notified before sharing or storing the file.

This is a major provenance transition.

The derivative artifact can inherit policy state from upstream material:

```text
SOURCE A = INTERNAL
SOURCE B = CONFIDENTIAL
SOURCE C = PUBLIC

GENERATED FILE
-> CONFIDENTIAL
```

The output is therefore not simply a semantic derivative. It becomes a **governed derivative**.

Deep Drift must distinguish:

```text
SOURCE-BASED LABEL
!= MODEL-GENERATED CLASSIFICATION
```

and:

```text
LABEL INHERITANCE
!= SOURCE LIST
```

A sensitivity label can tell us something important about the strongest governance constraint among the inputs, but it cannot reconstruct which exact sources contributed which claims.

## 6. "Highest label wins" creates asymmetric source influence

The label inheritance rule is intentionally conservative.

If one highly restricted source appears among many low-sensitivity sources, it can govern the generated file.

Thus:

```text
1 HIGH-SENSITIVITY SOURCE
+
99 LOW-SENSITIVITY SOURCES

-> HIGH-SENSITIVITY OUTPUT LABEL
```

This means policy influence is not proportional to textual contribution.

A source that contributes only a small factual fragment may still determine the governance class of the complete artifact.

Deep Drift therefore needs two separate graphs:

```text
SEMANTIC CONTRIBUTION GRAPH
```

and:

```text
GOVERNANCE INHERITANCE GRAPH
```

They may not have the same weighting.

## 7. Copy-paste disappearance does not eliminate transfer provenance

Across Microsoft's recent creator workflow, manual transfer is steadily disappearing:

```text
EMAIL -> NOTEBOOK
MEETING -> NOTEBOOK
NOTEBOOK -> WORD
NOTEBOOK -> POWERPOINT
EMAIL -> POWERPOINT
SEARCH -> CHAT
CHAT -> PAGE
```

This is beneficial UX and terrible evidence if an archive still relies on visible copy-paste operations to reconstruct causation.

Deep Drift must therefore move from **transfer-event provenance** to **reference-object provenance**.

Instead of asking:

> What did the human copy?

ask:

> Which source objects were made available to the generative context at execution time?

## 8. Native-file generation increases the authority illusion

A Word document or PowerPoint deck produced directly from a notebook looks native, editable, and organizationally ordinary.

That visual normality can erase the distinction between:

```text
HUMAN-ASSEMBLED FILE
```

and:

```text
AI-MATERIALIZED FILE FROM MULTI-SOURCE CONTEXT
```

If sensitivity labels are automatically inherited, the file may even look more formally governed than many manually assembled documents.

This is useful operationally, but the label must not be mistaken for full causal documentation.

Governance metadata and authorship provenance solve different problems.

## 9. Broader creator-workflow trend

The significant trend is a shift from **chat as destination** to **context container as compiler**.

Earlier:

```text
HUMAN COLLECTS MATERIAL
-> CHAT
-> TEXT RESPONSE
-> HUMAN BUILDS FILE
```

Emerging workflow:

```text
PLATFORM COLLECTS AUTHORIZED OBJECTS
-> CONTEXT CONTAINER
-> MODEL TRANSFORMS STATE
-> NATIVE ARTIFACT
-> POLICY STATE INHERITED
-> HUMAN REFINES
```

The user increasingly curates **what is in scope**, while the system performs compilation into the final work surface.

That changes the location of authorship decisions.

Selection of sources, context boundaries, and inclusion permissions become more important relative to manual transcription.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory / context | Major | Work-data access and notebook references create switchable, multi-source context boundaries |
| Skills / agents | Moderate | Agentic context increasingly enters native Office surfaces; no stronger Skill-version delta than prior Deep Drift nodes |
| Mini-app / interactive builder | Moderate | Notebook mind maps and Pages continue the shift toward generated interactive artifacts |
| Chat-to-document | Major | Notebook context can materialize into native Word documents and Pages can be created from chat |
| DOCX / PDF | Major provenance effect | Native Word output can inherit multi-source ancestry before later PDF conversion |
| Copy-paste / export | Major | Direct email/meeting references reduce visible transfer events |
| Creator workflow | Major | Source selection, context authorization, native-file generation, and policy inheritance are converging |

## New failure classes

### Native-Artifact Origin Collapse
Treating a Word, PowerPoint, or Excel file as human-assembled merely because it is a normal native Office file.

### Reference-Is-Not-Transfer Fallacy
Assuming a source did not influence an artifact because its text was never manually copied or pasted.

### Governance-Equals-Provenance Fallacy
Treating a sensitivity label as a complete account of which sources produced the artifact.

### Highest-Label Semantic Weight Fallacy
Assuming the source that determines the output label was also the most important semantic source.

### Work-Context Toggle Blindness
Failing to preserve whether organizational work data was enabled for a particular chat execution.

### Context-Container Snapshot Loss
Preserving the final DOCX/PPTX but not the notebook state and references from which it was generated.

### Meeting-Bundle Flattening
Treating transcript, notes, meeting chat, and shared files as one undifferentiated source.

### Policy-Lineage Erasure
Recording content ancestry without recording how source governance propagated to the derivative artifact.

## Deep Drift benchmark additions

**Context Container Snapshot Fidelity (CCSF)**  
Can the exact notebook/reference state used for an artifact-generation event be reconstructed?

**Reference Object Lineage Fidelity (ROLF)**  
Can emails, meetings, files, transcripts, notes, and other context objects remain individually traceable after direct ingestion?

**Work-Context Boundary Fidelity (WCBF)**  
Can Work IQ or equivalent work-data-access state be reconstructed for each execution?

**Native Artifact Materialization Fidelity (NAMF)**  
Can a native Word, PowerPoint, or spreadsheet file be traced to the generative context from which it was materialized?

**Governance Inheritance Fidelity (GIF)**  
Can the sensitivity or policy state applied to an output be traced to the upstream source governance that caused it?

**Semantic-vs-Governance Contribution Fidelity (SGCF)**  
Can semantic contribution and governance influence remain separate rather than being inferred from one another?

**Derivative Policy Continuity Fidelity (DPCF)**  
Can governance state be tracked across later edits, format conversions, downloads, shares, DOCX-to-PDF conversion, and other derivatives?

## Canonical Deep Drift requirement

> Every material AI-assisted artifact generated from a notebook, workspace, project, work graph, email set, meeting record, or other multi-source context container should preserve a machine-readable context-and-governance manifest. The manifest should record the context-container identifier and snapshot time; all referenced source objects and account identities; source permissions; work-data-access state; source addition and removal events; meeting-component identities; generation event; target native artifact type; model and execution surface; sensitivity or policy labels on relevant sources; the rule used to derive output governance; the resulting artifact label; any failure or manual correction in label application; subsequent human or model edits; export and conversion events; and every downstream DOCX, PDF, PPTX, XLSX, page, or other derivative. Absence of manual copy-paste must never be treated as absence of source transfer, and inherited governance metadata must never be treated as a substitute for complete causal provenance.

## Deep Drift principle

> **The context container is becoming the manuscript before the manuscript exists.**

And a second principle follows:

> **A generated artifact can inherit both meaning and restriction. Archive both lineages.**

## Sources

1. Microsoft Learn. **Microsoft 365 Copilot release notes**, August 25, 2026 release window. Documents Outlook emails as references in Copilot Notebooks; the Work IQ work-data-access control; Teams meeting references; chat-to-Page creation; and related creator-workflow integration.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

2. Microsoft Learn. **Microsoft 365 Copilot release notes**, July 1, 2026 release window. Documents creation of Word documents, PowerPoint presentations, Excel spreadsheets, and mind maps from Copilot Notebooks, plus generated-file sensitivity-label inheritance based on the highest label detected in source data.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

## Research status

**Node status:** New.  
**Duplicate check:** GitHub search of the current ATOR.Institute research repository returned no matching entry for the combined pattern of Outlook/meeting object grounding, context-container-to-native-document materialization, switchable Work IQ data access, and automatic sensitivity-label inheritance.  
**Relationship to prior nodes:** Extends Project-Memory Transition and Context-Boundary Fidelity, Embedded Asset Mutation and Seam-Collapse Fidelity, Model-Class Retention and Routing Fidelity, and the DRPA-1.0 universal provenance layer. CAGIF specifically formalizes the point at which a multi-source context container becomes a native creator artifact while carrying source-governance state into the derivative.  
**Freshness:** Verified against Microsoft first-party release notes current on 2 September 2026. The newest features in this node were released in the August 11–25, 2026 window; supporting native-artifact generation and label-inheritance behavior was released earlier and remains current.
