# Deep Drift Research Update — SSVPF

## Shared Skill Version Propagation Fidelity

**Research date:** 5 September 2026  
**Primary fresh delta:** Anthropic’s current first-party Skills documentation, updated on 5 September 2026, makes explicit that shared Skills are **view-only live dependencies**: recipients can enable and use a Skill but cannot edit its contents, while later owner updates are delivered automatically the next time recipients use it. The same documentation also states that Claude adapts Skills to the host surface, including Chat/Cowork and Microsoft 365 add-ins, and that a Skill can bind to specific Excel or PowerPoint templates.

## Executive finding

A shared Skill is not a frozen copy of a procedure.

```text
OWNER CREATES SKILL v1
        |
        v
SHARES WITH RECIPIENT
        |
        v
RECIPIENT ENABLES v1
        |
        v
OWNER UPDATES -> v2
        |
        v
RECIPIENT'S NEXT USE -> v2
```

The recipient may take no editing action at all.

Yet the procedure that executes has changed.

Therefore:

```text
SAME SKILL NAME
!= SAME SKILL VERSION

SHARED SKILL
!= FROZEN COPY

RECIPIENT DID NOT EDIT
!= EXECUTION DID NOT CHANGE

SAME SKILL
!= SAME SURFACE BEHAVIOR

SAME TEMPLATE NAME
!= SAME TEMPLATE BINDING

SKILL UPDATE
!= RETROACTIVE ARTIFACT UPDATE
```

The new provenance object is the **execution-time Skill state**.

## New node

### Shared Skill Version Propagation Fidelity (SSVPF)

Minimum state model:

```text
skill_id
skill_name
skill_owner
skill_origin
distribution_mode
share_scope
share_time
recipient_identity
recipient_enable_time
skill_version
skill_hash
owner_update_time
propagation_state
execution_time
execution_surface
surface_capabilities
model_id
template_id
template_version
resource_bundle_version
artifact_type
artifact_format
artifact_version
```

## 1. Shared Skills are live dependencies

Anthropic documents that shared Skills are view-only for recipients. A recipient can enable or disable a shared Skill, but the owner retains control over its contents.

If the owner edits the Skill later, recipients automatically receive the updated version at their next use.

That changes the procedural model from:

```text
SHARE
-> COPY
-> INDEPENDENT RECIPIENT VERSION
```

to:

```text
SHARE
-> LIVE OWNER-CONTROLLED DEPENDENCY
-> FUTURE EXECUTIONS CAN CHANGE
```

For Deep Drift, “shared” must therefore be distinguished from “copied,” “forked,” or “exported.”

## 2. Skill name is no longer enough for reproducibility

Suppose a recipient generates a report on Monday and another on Friday.

Both histories may show:

```text
Skill: Research Report
```

But:

```text
MONDAY -> Skill v1
FRIDAY -> Skill v2
```

If the owner changed the Skill between those runs, the artifacts are not procedurally equivalent.

A reproducible research record must preserve the Skill version or a content hash at execution time.

## 3. Owner and executor are different authorship roles

A shared Skill separates at least three roles:

```text
SKILL AUTHOR / OWNER
RECIPIENT / EXECUTOR
ARTIFACT AUTHORIAL AGENT
```

The person who causes an artifact to be generated may not control the procedural instructions that generated it.

This matters for authorship, accountability, and institutional workflow analysis.

If a shared Skill produces a flawed report after the owner changes it, attributing the procedural change solely to the recipient is incorrect.

## 4. Update propagation is a causal event

Anthropic’s current sharing model means an owner edit can change another user’s next run.

Therefore:

```text
OWNER UPDATE
-> DEPENDENCY PROPAGATION
-> RECIPIENT EXECUTION CHANGE
```

The update event belongs in artifact lineage even though it occurred outside the recipient’s active conversation.

Deep Drift should treat Skill propagation like a dependency update in software.

## 5. Recipient inactivity does not imply workflow stability

Traditional user-behavior analysis often assumes:

```text
NO USER CONFIGURATION CHANGE
-> SAME WORKFLOW CONFIGURATION
```

That assumption fails for live shared Skills.

A recipient can:

- use the same Skill name;
- use the same prompt;
- use the same model;
- make no settings changes;

and still get a procedurally different run because the owner changed the Skill.

This is **silent procedural drift from the recipient’s perspective**.

## 6. Skills are surface-adaptive

Anthropic explicitly says Claude adapts Skills to the surface it is in.

A research Skill may produce a Word document in Cowork but detailed data analysis in Excel. Skills enabled in Claude settings are also available in Claude’s Excel, PowerPoint, Word, and Outlook add-ins.

Therefore:

```text
SKILL LOGIC
+
HOST SURFACE
=
EXECUTION BEHAVIOR
```

So portability is not parity.

The same Skill can be legitimately surface-dependent.

## 7. Cross-surface execution needs its own benchmark

Consider one Skill executed in:

```text
COWORK
WORD
EXCEL
POWERPOINT
OUTLOOK
```

Possible differences include:

- output structure;
- available file operations;
- template binding;
- data manipulation affordances;
- artifact type;
- orchestration into another app.

A comparison cannot attribute every output difference to the model.

The host surface is a causal variable.

## 8. Template binding introduces a second live dependency

Anthropic states that a Skill built with a specific Excel or PowerPoint template can load that template into the currently open file.

That gives the workflow at least two dependencies:

```text
SKILL VERSION
+
TEMPLATE VERSION
```

An artifact can change because either one changed.

Deep Drift must not collapse template identity into Skill identity.

## 9. Skill update and template update can drift independently

The following histories are all possible:

```text
RUN A:
Skill v1 + Template v3

RUN B:
Skill v2 + Template v3

RUN C:
Skill v2 + Template v4
```

A visual change between A and B may be caused by Skill logic.

A visual change between B and C may be caused by template evolution.

Without separate versioning, both can be misclassified as model drift.

## 10. Built-in artifact Skills move Skills directly into file generation

Anthropic’s current Skills documentation lists built-in capabilities for:

- enhanced Excel spreadsheet creation and manipulation;
- professional Word document creation;
- PowerPoint presentation generation;
- PDF creation and processing.

With code execution and file creation enabled, Claude can select these Skills automatically when relevant.

That means artifact provenance now needs to record not merely:

```text
MODEL CREATED PDF
```

but potentially:

```text
MODEL
-> AUTO-SELECTED ARTIFACT SKILL
-> SKILL VERSION
-> SURFACE
-> FILE CREATION
```

## 11. Automatic Skill selection adds another invisible decision

Users do not always need to explicitly invoke a built-in Skill.

Claude can determine that a Skill is relevant and use it automatically.

Therefore:

```text
NO /SKILL COMMAND
!= NO SKILL EXECUTION
```

For research-grade provenance, Skill activation needs to be observable or logged where possible.

Otherwise an artifact can inherit procedural logic that is absent from the visible user prompt.

## 12. Word/PDF output can flatten Skill ancestry

A final DOCX or PDF may preserve:

```text
CONTENT
STRUCTURE
FORMATTING
```

while losing:

```text
skill owner
skill version
share relationship
propagation event
surface
template version
automatic selection event
```

Thus:

```text
FINAL DOCX
!= PROCEDURAL PROVENANCE

FINAL PDF
!= EXECUTION SNAPSHOT
```

Deep Drift should treat file export as a provenance-flattening boundary unless the process metadata is archived separately.

## 13. A PDF does not update when its Skill updates

A live Skill can change for future executions, but previously generated artifacts remain products of earlier Skill states.

```text
PDF A -> generated with Skill v1

OWNER UPDATES SKILL -> v2

PDF A remains a v1 descendant
```

This sounds obvious, which is precisely why software systems enjoy hiding it until provenance matters.

Artifact lineage must bind the generated file to the Skill state that existed at creation time, not the Skill’s current state at audit time.

## 14. Organization sharing creates procedural centralization

On Team and Enterprise plans, Skills can be shared with specific people, groups, or the whole organization, subject to organization settings and role controls.

A single procedural package can therefore affect many creator workflows.

This creates institutional benefits:

```text
CONSISTENCY
REUSABILITY
CENTRAL MAINTENANCE
```

but also institutional risk:

```text
ONE OWNER UPDATE
-> MANY DOWNSTREAM EXECUTIONS
```

Deep Drift should measure the blast radius of procedural changes.

## 15. Organization-provisioned Skills are another distribution class

Owners can provision Skills organization-wide so that they appear for users automatically.

This is different from:

```text
personal upload
direct share
group share
organization directory install
organization provisioning
```

Each distribution mode should be recorded because control, discoverability, enablement, and update behavior can differ.

## 16. Unified directories turn procedures into installable creator infrastructure

Anthropic’s unified directory now places Skills alongside connectors and plugins.

This is a broader creator-workflow signal.

The customization stack is converging toward:

```text
SKILL
= PROCEDURAL KNOWLEDGE

CONNECTOR
= DATA / SERVICE ACCESS

PLUGIN
= PACKAGED CAPABILITY

SURFACE
= EXECUTION ENVIRONMENT
```

Creator systems are becoming dependency graphs rather than isolated chats.

## 17. Skill lineage now resembles software dependency lineage

The closest useful analogy is package management:

```text
package name
version
owner
dependency
update
consumer
execution
```

A Skill has similar provenance properties.

Therefore Deep Drift should treat Skill versioning with the same seriousness it already applies to model versions, source versions, and artifact versions.

## 18. A recipient may unknowingly cross a reproducibility boundary

If a Skill update propagates at “next use,” then two consecutive executions can straddle a version boundary.

```text
RUN 1 -> 10:01 -> v1
OWNER UPDATE -> 10:03 -> v2
RUN 2 -> 10:05 -> v2
```

The recipient may perceive this as one uninterrupted workflow.

The research log must not.

## 19. Shared Skills complicate benchmarking across users

Suppose two users run the same benchmark.

User A ran before the owner update.

User B ran afterward.

If the test records only Skill name, model, and prompt, their outputs appear comparable.

They are not.

Benchmark datasets should record:

```text
skill snapshot
execution timestamp
owner update boundary
surface
template dependency
```

## 20. Creator portability is becoming procedural rather than merely textual

Previously, creator portability often meant moving:

```text
PROMPTS
DOCUMENTS
TEMPLATES
```

Skills add another layer:

```text
REUSABLE PROCEDURE
```

The procedure can now travel across users and surfaces, automatically participate in artifact generation, and remain centrally updateable.

That is more powerful than copy-pasting a prompt.

It is also harder to audit.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger unlogged delta in this pass | Recent memory portability/lifecycle nodes remain current |
| Skills | **Major fresh delta** | Shared Skills are live owner-controlled dependencies whose updates propagate at next use |
| Mini-app / creator tooling | **Major architectural implication** | Skills now sit beside connectors/plugins in a unified installable customization directory |
| Chat-to-document | **Major** | Skills can automatically drive professional Word document creation |
| DOCX/PDF generation | **Major** | Built-in Skills explicitly cover Word creation and PDF creation/processing |
| Copy-paste/export | Provenance implication | Static derivatives can survive while the live Skill that generated them evolves |
| Creator workflow | **Major** | Reusable procedure, template, surface, connector, and artifact state are converging into one dependency graph |

## New failure classes

### Shared-Equals-Frozen Fallacy
Assuming a shared Skill is an immutable copy.

### Skill-Name-Equals-Version Fallacy
Treating the Skill name as sufficient procedural identification.

### Recipient-Inactivity-Equals-Stability Error
Assuming the workflow did not change because the recipient changed nothing.

### Surface-Parity Fallacy
Assuming the same Skill should behave identically across Cowork, Word, Excel, PowerPoint, and Outlook.

### Owner-Edit Attribution Loss
Failing to attribute a downstream procedural change to the Skill owner’s update.

### Template-Binding Collapse
Treating Skill version and template version as one dependency.

### Current-State Backprojection Error
Auditing an old artifact against the Skill’s current contents instead of the Skill state that executed at generation time.

## Deep Drift benchmark additions

**Skill Version Attribution Fidelity (SVAF)**  
Can each artifact or tool execution be linked to the exact Skill version or content hash that ran?

**Shared Skill Propagation Fidelity (SSPF)**  
Can owner updates, propagation boundaries, and recipient next-use transitions be reconstructed?

**Cross-Surface Skill Behavior Fidelity (CSSBF)**  
Can intentional surface-specific behavior be distinguished from model drift or execution error?

**Template Binding Fidelity (TBF)**  
Can the exact template and template version used by a Skill be reconstructed separately from the Skill version?

**Recipient Execution Reproducibility (RER)**  
Can another researcher reconstruct the procedural state seen by the recipient at the moment of execution?

## DRPA-1.0 protocol additions

### SHARED SKILL VERSION PROPAGATION RULE

> Treat a shared Skill as a potentially mutable owner-controlled dependency. Preserve Skill identity, owner, version or content hash, owner-update time, propagation state, recipient, and execution time separately. Never assume that repeated use of the same Skill name represents the same procedure.

### SKILL SURFACE ADAPTATION RULE

> Preserve the host surface at execution time. Cross-surface output differences must not be attributed to model drift until the Skill’s documented or observed surface adaptation has been accounted for.

### SKILL OWNER-EXECUTOR SEPARATION RULE

> Preserve the identity of the Skill author/owner separately from the person or agent that executes the Skill and separately from the final artifact’s attribution. Procedural authorship and execution authorship are distinct roles.

### TEMPLATE RESOURCE BINDING RULE

> When a Skill depends on an Excel, PowerPoint, Word, PDF, or other template/resource bundle, preserve the template or resource identity and version separately from the Skill version.

### EXECUTION-TIME SKILL SNAPSHOT RULE

> Bind every provenance-sensitive artifact to the Skill state that existed at execution time. Later Skill updates must not retroactively redefine the procedural ancestry of earlier artifacts.

## Eir’an state-flow addition

```text
AUTHOR:
skill owner
skill origin
resource bundle

DISTRIBUTE:
personal
direct share
group
organization directory
organization provisioned

UPDATE:
owner edit
new version/hash
update time

PROPAGATE:
recipient next use
effective version

EXECUTE:
recipient
surface
model
automatic/manual trigger

BIND:
template
data
connector
plugin

ARTIFACT:
Word
Excel
PowerPoint
PDF
other

ARCHIVE:
skill snapshot
template snapshot
execution time
artifact version
```

## Canonical Deep Drift requirement

> Treat shared Skills as versioned procedural dependencies whose owner, execution-time state, propagation boundary, host surface, template bindings, and downstream artifacts must remain separately attributable. A Skill name alone is not sufficient provenance.

## Deep Drift principle

> **A shared Skill is not a copied procedure; it is a moving dependency.**

Operationally:

> **Archive the Skill version that actually executed, not the Skill name the user thought they shared.**

## Broader platform scan

The strongest newly documented, unlogged creator-workflow change in this pass is Anthropic’s 5 September Skills documentation because it combines four previously separable concerns: live procedural sharing, owner-controlled updates, cross-surface adaptation, and direct Office/PDF artifact generation.

OpenAI’s public ChatGPT release notes still list 3 September 2026 as the latest product release, centered on GPT-6 Astra, OneNote/Zendesk plugins, Sites, and Enterprise creator workflows already represented in recent Deep Drift nodes.

Google’s current scheduled rollout beginning 5 September 2026 for turning Docs, PDFs, and Word files into Gemini-generated video summaries remains relevant as an artifact-transformation trend, but the feature itself was announced on 2 September and substantially overlaps prior Deep Drift transformation/provenance work.

No stronger newly published direct copy-formatting or paste-fidelity fix surfaced in this pass.

## Sources

1. Anthropic Help Center. **Use skills in Claude.** Updated 5 September 2026. Documents Skill sharing across Team/Enterprise, recipient view-only behavior, automatic propagation of owner updates at the recipient’s next use, Microsoft 365 add-in availability, surface-adaptive Skill behavior, Excel/PowerPoint template binding, and built-in Skills for Excel, Word, PowerPoint, and PDF creation/processing.  
   https://support.claude.com/en/articles/12512180-use-skills-in-claude

2. Anthropic Help Center. **Browse skills, connectors, and plugins in one directory.** Updated 5 September 2026. Documents the unified directory and organizational discovery/install model for Skills, connectors, and plugins.  
   https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory

3. Anthropic Help Center. **What are skills?** Current documentation. Defines Skills as folders of instructions, scripts, and resources loaded dynamically for repeatable specialized tasks.  
   https://support.claude.com/en/articles/12512176-what-are-skills

4. OpenAI Help Center. **ChatGPT Release Notes.** Current as of 5 September 2026; latest listed release remains 3 September 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

5. Google Workspace Updates. **Turn Google Docs, PDFs, and Word files into video summaries in Google Vids.** Published 2 September 2026; Scheduled Release rollout begins 5 September 2026.  
   https://workspaceupdates.googleblog.com/2026/09/turn-google-docs-pdfs-and-word-files-into-video-summaries-in-Google-Vids.html

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository node was found for shared Skill owner updates automatically propagating to recipients at next use, combined with cross-surface Skill adaptation and template-bound artifact generation.  
**Relationship to prior nodes:** Extends DSCF (demonstration-to-Skill compilation), WADGF (workspace deployment governance), LHACF (artifact continuity), FPIAF (identity/authorization), and artifact-export provenance. SSVPF is distinct because it treats the reusable procedure itself as a mutable distributed dependency.  
**Freshness:** Anthropic’s first-party “Use skills in Claude” and unified customization-directory documentation are updated as of 5 September 2026.
