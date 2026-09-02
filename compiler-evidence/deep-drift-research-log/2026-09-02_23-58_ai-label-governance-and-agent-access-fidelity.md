# Deep Drift Research Update — ALGAF

## AI-Label Governance and Agent-Access Fidelity

**Research date:** 2 September 2026  
**Primary fresh delta:** Gemini-based AI classification in Google Drive can automatically apply governance labels to files, with labels feeding DLP, retention, audit, and agent-access controls.  
**Secondary fresh signals:** encrypted PDF/image preview in Drive without local download; OpenAI Healthcare Public Data plugin composed of multiple selectively connected read-only apps.  
**Scope:** memory-adjacent context gating, Skills/plugins, creator workflows, document/PDF access, copy/download seam removal, artifact governance, and future agent reproducibility.

## Executive finding

The most important fresh change is not another button that generates a prettier file. Google has moved Gemini into the **governance layer of the file system**.

In Google Drive open beta, Gemini can evaluate files against administrator-written instructions and automatically apply data-classification labels. Those labels can then participate in DLP enforcement, retention rules, audits, and restrictions designed to prevent agentic workflows from accessing or autonomously acting on sensitive material.

The new causal graph is therefore:

```text
FILE CONTENT
    |
    v
GEMINI CLASSIFICATION
    |
    v
GOVERNANCE LABEL
    |
    +--> DLP RULE
    +--> RETENTION RULE
    +--> AUDIT STATE
    +--> HUMAN REVIEW / MODIFICATION
    +--> FUTURE AGENT ACCESS
```

This creates a new Deep Drift problem:

```text
AI OUTPUT
CAN GOVERN
FUTURE AI INPUT
```

The model is no longer only producing content from governed sources. A model-generated classification can help determine which sources another agent is later permitted to see.

## New node

### AI-Label Governance and Agent-Access Fidelity (ALGAF)

Core distinctions:

```text
FILE CONTENT
!= FILE GOVERNANCE STATE

AI-APPLIED LABEL
!= HUMAN-AUTHORED LABEL

LABEL PRESENT
!= LABEL ACCEPTED BY HUMAN

CURRENT LABEL
!= ORIGINAL AI CLASSIFICATION

SOURCE EXISTS
!= SOURCE ACCESSIBLE TO AGENT

AGENT CANNOT RETRIEVE FILE
!= FILE ABSENT

AUDIT LOG
!= COMPLETE SEMANTIC REASONING TRACE
```

## 1. AI classification becomes upstream infrastructure

Google states that Gemini-based AI classification in Drive can interpret administrator instructions, evaluate files, and apply configured data-classification labels automatically.

Previously, a typical generative provenance model looked like:

```text
GOVERNANCE
   |
   v
SOURCE ACCESS
   |
   v
MODEL
   |
   v
ARTIFACT
```

ALGAF adds a loop:

```text
MODEL A
   |
   v
CLASSIFICATION LABEL
   |
   v
ACCESS / RETENTION POLICY
   |
   v
MODEL B'S FUTURE CONTEXT
```

The output of one AI process can become a policy input to another AI process.

That is a material architectural shift.

## 2. Context availability is now partly model-mediated

For Deep Drift, this means the question:

> What files existed in the workspace?

is no longer sufficient.

We must also ask:

> Which files were *eligible to enter the agent's context* under the active classification and DLP state?

A reproducibility record therefore needs at least:

```text
file_id
file_revision
classification_label
label_source = human / Gemini / inherited / unknown
classification_time
admin_instruction_version
human_review_state
human_modification_state
DLP_policy
retention_policy
agent_access_effect
execution_time
```

## 3. Human review does not erase AI governance ancestry

Google says editors and owners with appropriate permissions can review, accept, or modify Gemini-applied labels. Audit logs record file labeling and user acceptance or modification.

That creates a state sequence:

```text
S0 = unlabeled / prior label
S1 = Gemini applies label
S2 = human reviews
S3 = human accepts OR modifies
S4 = later agent encounters resulting policy
```

If the final label is human-modified, it would still be wrong to erase S1.

The AI classification may have triggered the review, constrained the available choice, or temporarily affected governance before modification.

Therefore:

```text
FINAL LABEL
!= COMPLETE LABEL HISTORY
```

## 4. Governance provenance and semantic provenance must remain separate

A label can materially affect future access even though the classifier contributes no semantic text to the later document.

Example:

```text
FILE A --> semantic source for report
FILE B --> Gemini classifies as sensitive
           |
           v
           blocked from later agent
```

File B may contribute **zero words** to the final report while still materially shaping the report by being absent from the model's allowed context.

Deep Drift must therefore preserve:

```text
SEMANTIC CONTRIBUTION
AND
ACCESS-EXCLUSION CONTRIBUTION
```

Absence can have causal provenance.

## 5. New failure class: policy-mediated source invisibility

A researcher may compare two runs and observe different answers even though the prompt, nominal workspace, and model are identical.

Possible cause:

```text
RUN 1
File X accessible
-> answer includes X

RUN 2
File X receives restrictive label
-> DLP blocks agent access
-> answer excludes X
```

Without governance-state logging, this can be misdiagnosed as model drift, memory drift, or hallucination.

It may actually be **context gating caused by classification state**.

## 6. Encrypted PDF preview removes another visible transfer seam

Google also announced beta support for previewing client-side encrypted PDF and image files directly in Drive. Previously, authorized users needed to download encrypted non-native files locally to view them. Now authorized users can preview them in the browser without leaving Drive.

The workflow changes from:

```text
ENCRYPTED PDF
-> DOWNLOAD
-> LOCAL FILE
-> VIEWER
```

into:

```text
ENCRYPTED PDF
-> AUTHORIZED BROWSER PREVIEW
```

For Deep Drift:

```text
NO LOCAL DOWNLOAD
!= NO DOCUMENT ACCESS
```

and:

```text
NO LOCAL FILE ARTIFACT
!= NO VIEWING EVENT
```

This reinforces the need to distinguish **access provenance** from **materialized-file provenance**.

A creator may have inspected a sensitive PDF without leaving behind the traditional download artifact that an auditor expects.

## 7. OpenAI's new Healthcare Public Data plugin strengthens composite-plugin provenance

OpenAI's 1 September 2026 ChatGPT release notes describe Healthcare Public Data as a plugin that brings together **nine apps** for searching public healthcare sources. Users install the plugin and then connect the individual apps they want to use. The apps are read-only and do not access patient charts.

That strengthens an existing Deep Drift distinction:

```text
PLUGIN
!= INDIVIDUAL APP
```

A plugin can now be a **capability bundle** whose effective source set depends on which constituent apps are connected.

Therefore provenance should preserve:

```text
plugin_id
plugin_version
constituent_app_id
app_connection_state
app_permission_scope
source_queried
result_returned
```

Logging only the plugin name would collapse distinct source boundaries.

## 8. Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger new memory primitive found after PMTCF | Memory nodes remain current; ALGAF adds a separate context-access gate outside memory itself |
| Skills / plugins | Fresh secondary delta | OpenAI's Healthcare Public Data plugin demonstrates one plugin containing multiple selectively connected apps |
| Mini-app builders | No stronger fresh builder delta found | Existing interactive-artifact and builder nodes remain current |
| Chat-to-document | Indirect but material | Source availability for generated documents can now change because AI-applied governance labels change context eligibility |
| DOCX / document generation | Governance effect | Same document request may yield different contents because source files are differently accessible at execution time |
| PDF | Fresh | Client-side encrypted PDF preview in Drive can occur without local download |
| Copy-paste / export | Fresh seam-removal effect | Viewing no longer requires materialization of encrypted files; absence of download is not absence of access |
| Creator workflow | Major | AI is moving from content generator into classifier, policy input, and context gatekeeper |

## 9. New failure classes

### AI-Label Neutrality Fallacy
Treating model-generated classification as metadata with no causal effect on later AI work.

### Existing-Source Equals Accessible-Source Error
Assuming every file present in a workspace was eligible for retrieval by an agent.

### Final-Label History Collapse
Treating the current label as a complete account of whether Gemini originally applied or proposed a different label.

### Governance-to-Semantics Collapse
Confusing the source that governs access with the source that contributes textual or visual content.

### Blocked-Source Nonexistence Fallacy
Treating a source omitted by DLP or classification rules as if it did not exist during the workflow.

### Download-Centric Access Fallacy
Treating absence of a downloaded PDF as evidence that the file was never viewed.

### Composite-Plugin Identity Collapse
Treating a multi-app plugin name as sufficient provenance for the actual source app used.

## 10. Deep Drift benchmark additions

**AI Classification Lineage Fidelity (ACLF)**  
Can the origin, timestamp, and revision of an AI-applied governance label be reconstructed?

**Governance-to-Agent Access Fidelity (GAAF)**  
Can a later agent's ability or inability to retrieve a source be tied to the active classification and DLP state?

**Excluded-Context Causality Fidelity (ECCF)**  
Can material sources that existed but were barred from context remain represented in the provenance graph?

**Human Label Review Fidelity (HLRF)**  
Can AI proposal, human acceptance, human modification, and later policy state remain distinguishable?

**Preview-without-Materialization Fidelity (PMF)**  
Can a browser viewing event be preserved even when no local file was downloaded?

**Composite Plugin Source Fidelity (CPSF)**  
Can a plugin's constituent apps and the specific app actually queried remain separately attributable?

## 11. Protocol addition for DRPA-1.0

Add the following universal rule:

> **AI-GOVERNED CONTEXT ACCESS RULE:** When a model, classifier, Skill, plugin, administrator instruction, DLP mechanism, sensitivity label, retention rule, or policy engine can alter whether a source is eligible for later AI retrieval, provenance must preserve the governance event as part of the later artifact's causal ancestry. Record the source object; classification state; classifier or human actor; instruction or policy version; label timestamp; human review or modification; DLP and retention effects; agent-access outcome; and execution timestamp. A source that existed but was inaccessible must not be collapsed into a source that never existed, and the current label must not be treated as a complete history of prior governance states.

Add a second rule:

> **ACCESS WITHOUT MATERIALIZATION RULE:** A viewing, preview, retrieval, or inspection event must not be inferred solely from the existence of a downloaded local file. Browser-native, encrypted, connected, streamed, embedded, or agent-mediated access may leave no conventional download artifact. Preserve access events separately from file-materialization events.

## 12. Canonical Deep Drift requirement

> Every material AI-assisted workflow should preserve both **context content** and **context eligibility**. The archive must distinguish sources that were available, sources that existed but were blocked, sources that were never connected, and sources that were selected but not used. When AI-generated classification or governance metadata changes future retrieval rights, that classification event becomes part of downstream provenance even if it contributes no semantic content to the final artifact.

## 13. Deep Drift principle

> **The model is no longer merely inside the knowledge pipeline. It is beginning to regulate the valves.**

For reproducibility, Deep Drift must archive not only what entered the context window, but also **what was prevented from entering, by whom or what, under which rule, and at what time**.

That is the fresh shift.

## Sources

1. Google Workspace Updates. **Gemini-based data classification in Google Drive is now available in open beta.** Published 28 August 2026. Google documents Gemini-applied Drive classification labels, administrator instructions, DLP and retention implications, human acceptance/modification, audit logs, and the role of classification in preventing agentic access to sensitive files.  
   https://workspaceupdates.googleblog.com/

2. Google Workspace Updates Weekly Recap, 28 August 2026. **Preview client-side encrypted PDF and image files directly in Google Drive, now available in beta.** Google states that authorized users can preview encrypted non-native PDFs and images in-browser without first downloading them locally.  
   https://workspaceupdates.googleblog.com/

3. OpenAI Help Center. **ChatGPT - Release Notes**, 1 September 2026. **Healthcare Public Data in ChatGPT for Clinicians.** OpenAI documents a plugin bringing together nine public-data apps, installed as one plugin with individual app connections; the apps are read-only and do not access patient charts.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

## Research status

**Node status:** New.  
**Duplicate check:** Distinct from CAGIF. CAGIF tracks governance inherited *from referenced sources into generated artifacts*. ALGAF tracks governance labels *generated by AI and applied upstream to source files*, where those labels can alter what later agents are allowed to retrieve.  
**Relationship to DRPA-1.0:** Extends Sections 8, 11, 12, 16, 17, 22, and 23 by adding machine-generated governance state and access-exclusion causality.  
**Freshness:** Verified against first-party Google Workspace and OpenAI documentation current on 2 September 2026.
