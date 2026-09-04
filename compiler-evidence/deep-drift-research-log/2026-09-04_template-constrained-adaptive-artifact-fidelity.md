# Deep Drift Research Update - TCAEF

## Template-Constrained Adaptive Artifact Fidelity

**Research date:** 4 September 2026  
**Primary fresh delta:** OpenAI introduced GPT-6 Astra on 3 September 2026. Astra is explicitly positioned as a professional-work model that can create documents, spreadsheets, presentations, analyses, websites, and apps while following existing templates, writing style, visual style, and evolving user requirements.  
**Secondary workflow delta:** ChatGPT Work now formalizes reusable templates as a creator-workflow object that combines a reference file, reusable instructions, and an expected output. Templates can start from DOCX, XLSX, PPTX, Google Docs, Sheets, or Slides, and web-created versus locally saved Codex templates do not automatically sync.

## Executive finding

The template is no longer merely a visual example.

It is becoming a reusable procedural dependency in the artifact-generation pipeline.

```text
SOURCE MATERIAL
      +
REFERENCE FILE / TEMPLATE
      +
REUSABLE INSTRUCTIONS
      +
MODEL / SURFACE
      +
STEERING CHANGES
      ↓
GENERATED ARTIFACT
```

For Deep Drift:

```text
SAME PROMPT
!= SAME ARTIFACT

SAME TEMPLATE
!= SAME TEMPLATE STATE

SAME FILE FORMAT
!= SAME GENERATION PATH

MID-RUN REQUIREMENT CHANGE
!= NEW TASK

REFERENCE FILE
!= REUSABLE TEMPLATE

WEB TEMPLATE
!= LOCAL CODEX TEMPLATE
```

The new provenance object is the **template-constrained adaptive artifact lineage**.

## New node

### Template-Constrained Adaptive Artifact Fidelity (TCAEF)

Minimum state model:

```text
artifact_task_id
model_id
surface
source_material
reference_file_id
template_id
template_version
template_origin
template_storage_surface
template_instructions
expected_output_contract
preserved_elements
replaceable_elements
style_constraints
layout_constraints
formula_constraints
steering_event_sequence
artifact_revision_sequence
validation_checks
final_export_format
final_artifact_location
```

## 1. Astra turns artifact creation into constraint-preserving synthesis

OpenAI's 3 September release says GPT-6 Astra can create documents, spreadsheets, and presentations that follow templates and instructions and can adapt when requirements are added or direction changes.

The accompanying launch material goes further: Astra is described as OpenAI's strongest model for adhering to existing templates, matching writing and visual style, producing structured professional files, and maintaining orientation as a task evolves.

Therefore the artifact is no longer adequately modeled as:

```text
PROMPT -> OUTPUT
```

A better model is:

```text
PROMPT
+ TEMPLATE
+ SOURCE MATERIAL
+ STYLE CONTRACT
+ STEERING HISTORY
-> ARTIFACT
```

## 2. Template identity is a causal dependency

ChatGPT Work now explicitly distinguishes a one-off reference file from a reusable template.

A reference file influences one task.

A template combines:

```text
REFERENCE FILE
+
REUSABLE INSTRUCTIONS
+
EXPECTED OUTPUT
```

and can be invoked repeatedly.

For Deep Drift this means `template_id` and `template_version` must be preserved like model version or Skill version.

If a recurring weekly report changes after a template revision, the difference should not immediately be blamed on model drift.

## 3. "What must stay unchanged" is now first-class workflow state

OpenAI instructs Work users to state which parts must remain unchanged, including:

- formulas;
- layout;
- tone;
- branding;
- slide order;
- table structure.

These preserved elements are not decoration.

They are constraints.

```text
ARTIFACT GENERATION
= CONTENT SYNTHESIS
+ INVARIANT PRESERVATION
```

Deep Drift should therefore separate:

```text
MUTABLE CONTENT
```

from:

```text
DECLARED INVARIANTS
```

A successful artifact is not merely one that contains correct content. It must also preserve the declared invariants.

## 4. Mid-run steering becomes part of artifact ancestry

Astra is explicitly described as better at incorporating new requirements without losing the broader task.

That creates an artifact lineage such as:

```text
TASK T0
   ↓
REQUIREMENT SET R0
   ↓
ARTIFACT V1
   ↓
STEERING EVENT S1
   ↓
REQUIREMENT SET R1
   ↓
ARTIFACT V2
```

If only the final artifact is archived, the causal reason for a changed layout, tone, formula, or section may disappear.

Deep Drift therefore needs ordered **steering events**, not merely the final prompt.

## 5. Artifact fidelity now has at least three dimensions

Traditional evaluation asks whether the content is correct.

Template-aware creator workflows require at least:

```text
SEMANTIC FIDELITY
STRUCTURAL FIDELITY
STYLE FIDELITY
```

For spreadsheets, a fourth dimension is often required:

```text
COMPUTATIONAL FIDELITY
```

because formulas and dependency structures can remain or break independently of visual similarity.

A polished spreadsheet whose formulas were silently replaced with static values can look excellent and still be functionally mutilated. Humans have been doing this to spreadsheets for decades; AI apparently wanted cultural integration.

## 6. Native editable output matters more than static export

ChatGPT Work can create or edit native Google Docs, Sheets, and Slides where supported, and can work with spreadsheet files and Microsoft Excel through the desktop integration.

This creates a distinction between:

```text
NATIVE EDITABLE ARTIFACT
```

and:

```text
STATIC EXPORT
```

PDF can preserve appearance but may flatten:

- formulas;
- sheet logic;
- slide masters;
- editable styles;
- comments;
- linked sources;
- template relationships;
- revision ancestry.

DOCX/PPTX/XLSX may preserve more internal structure, but even they do not automatically preserve the external template object or the steering conversation that produced the file.

## 7. Template origin and storage surface can split

OpenAI documents that templates created on the web and templates saved locally by Codex are separate and do not automatically sync.

Therefore:

```text
SAME USER
+ SAME TEMPLATE NAME
!= SAME TEMPLATE OBJECT
```

A local template and a web template may diverge silently.

Deep Drift must record:

```text
template_origin
storage_surface
sync_state
```

not merely the display name.

## 8. Linked Google Workspace references add permission dependence

A template can keep a link to a Google Docs, Sheets, or Slides source rather than copying the source into a fully self-contained object.

Teammates using that template still need their own access to the linked files or connected services.

Thus:

```text
TEMPLATE SHARED
!= REFERENCE ACCESS SHARED
```

The effective template runtime depends on both the reusable instructions and the user's authorization to the linked reference material.

This extends VRAEF and WMSSF: template execution can be viewer-relative and account-relative.

## 9. Team sharing converts templates into plugin-governed workflow assets

OpenAI says personal templates can be made available to a workspace by packaging them as a plugin and having an administrator publish them for appropriate roles.

This turns the template into a governed creator asset with:

```text
AUTHOR
ADMINISTRATOR
ROLE SCOPE
PLUGIN PACKAGE
REFERENCE DEPENDENCIES
```

The artifact pipeline is therefore no longer purely personal.

It can become institutional infrastructure.

## 10. Astra increases the importance of reference-context selection

OpenAI says Astra is trained to pull only the context that matters into professional outputs instead of repeating unnecessary information.

This introduces another provenance question:

```text
AVAILABLE CONTEXT
!= USED CONTEXT
```

A source may be attached but not causally contribute to the artifact.

Where observable, Deep Drift should preserve not just source availability but source use and exclusion decisions.

## 11. Artifact generation is converging with app generation

Astra's launch also ties professional artifact production to ChatGPT Sites, where the model can create, host, and share websites, web apps, and games from a prompt.

The creator-workflow trajectory is therefore:

```text
PROMPT
  ↓
DOCUMENT
  ↓
EDITABLE NATIVE FILE
  ↓
REUSABLE TEMPLATE
  ↓
PLUGIN-PACKAGED WORKFLOW
  ↓
HOSTED APPLICATION
```

Documents, templates, Skills/plugins, and mini-apps are starting to occupy one continuous execution spectrum.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger newly published delta found | Existing memory-boundary nodes remain current |
| Skills / plugins | Material adjacent change | Templates can be packaged as workspace plugins, turning artifact procedure into installable workflow state |
| Mini-app builders | Material convergence | Astra can create hosted Sites, web apps, and games from prompts |
| Chat-to-document | **Major fresh delta** | Astra is explicitly optimized for professional documents, spreadsheets, and presentations with iterative steering |
| DOCX/PDF generation | **Major workflow implication** | DOCX/XLSX/PPTX can act as template sources; static PDF can flatten structural and computational lineage |
| Copy-paste/export | No stronger new copy-paste fix found | The main risk shifts from formatting loss toward lineage and template-state loss |
| Creator workflow | **Major** | Template + instructions + source + steering history becomes a reusable artifact-generation program |

## New failure classes

### Prompt-Only Provenance Fallacy
Assuming the final prompt is sufficient to explain a generated professional artifact.

### Template-Name Identity Error
Assuming two templates with the same display name are the same underlying object.

### Reference-Equals-Template Error
Treating a one-off reference file as equivalent to a reusable template object.

### Visual-Fidelity-Equals-Structural-Fidelity Error
Assuming matching appearance proves formulas, masters, styles, tables, or structure were preserved.

### Final-Artifact-Equals-Full-History Error
Archiving only the final DOCX/PDF/XLSX/PPTX and losing the steering sequence that produced it.

### Template-Sharing-Equals-Permission-Sharing Error
Assuming sharing a template also grants access to linked Google Workspace references or connected services.

### Cross-Surface Template Equivalence Error
Assuming web-created and locally saved Codex templates automatically represent one synchronized asset.

## Deep Drift benchmark additions

**Template Identity Fidelity (TIF)**  
Can the exact reusable template object and version that shaped the output be identified?

**Constraint Preservation Fidelity (CPF)**  
Can declared invariants such as formulas, layout, branding, tone, slide order, and table structure be tested separately from content correctness?

**Steering-Lineage Fidelity (SLF)**  
Can every mid-run requirement change remain attached to the artifact revision it caused?

**Native-vs-Static Artifact Fidelity (NSAF)**  
Can executable/editable structure remain distinguished from static visual export?

**Cross-Surface Template Fidelity (CSTF)**  
Can web, local Codex, and plugin-packaged template instances remain distinguishable?

**Reference Authorization Fidelity (RAF)**  
Can the artifact record whether the executing user had access to every linked reference and service required by the template?

## DRPA-1.0 protocol additions

### TEMPLATE-CONSTRAINED ARTIFACT RULE

> When an LLM creates or edits a document, spreadsheet, presentation, report, or similar artifact using an existing reference file or reusable template, preserve the template as a first-class provenance dependency. Record template identity, version, origin, storage surface, reusable instructions, linked references, expected output contract, declared invariants, executing account or role where relevant, and the model/surface used to generate the artifact.

### STEERING-LINEAGE RULE

> Any requirement added, removed, clarified, or redirected after artifact generation begins must remain attached to the artifact revision it caused. The final artifact must not be treated as if it emerged from the final instruction alone. Preserve the ordered steering sequence and the resulting revision sequence.

### NATIVE-STRUCTURE PRESERVATION RULE

> Evaluate professional artifacts across semantic, structural, stylistic, and where applicable computational dimensions. A static export or visually similar file must never be treated as proof that formulas, masters, styles, linked references, template ancestry, or editable structure survived.

## Eir'an state-flow addition

```text
TASK:
objective
source material
expected output

TEMPLATE:
identity
version
origin
surface
reference file
reusable instructions
linked permissions

CONSTRAINTS:
layout
branding
tone
formulas
slide order
table structure

STEERING:
requirement change
actor
time/order
artifact revision

OUTPUT:
native file
static export
location
validation result
```

## Canonical Deep Drift requirement

> Treat reusable templates as executable creator-workflow state rather than decorative reference material. Preserve template identity, instructions, linked references, declared invariants, model/surface, steering history, and artifact revision lineage. Do not infer structural or computational fidelity from visual similarity or from the existence of a final DOCX/PDF/XLSX/PPTX alone.

## Deep Drift principle

> **The document is no longer just generated from a prompt; it is compiled from a template, a context, and a history of corrections.**

Operationally:

> **Archive the template and the steering history before admiring the final file.**

## Broader platform scan

OpenAI's 3 September 2026 GPT-6 Astra release is the strongest newly published creator-workflow change found in this run. Its significance is amplified by the current ChatGPT Work artifact system, which formalizes reusable templates across DOCX, XLSX, PPTX, Google Docs, Sheets, and Slides.

OpenAI's 31 August 2026 desktop update also introduced WebMCP-based site tools for ChatGPT Work and Codex, allowing supported websites to expose tools directly to the built-in browser without a separate connector. That reinforces the same architectural direction: creator workflows are moving from prompt-response toward dynamically discovered execution environments.

Anthropic's 4 September artifact/migration changes are already represented by VRAEF, WMSSF, CPAF, and MRWF. No stronger unlogged memory or Skills delta was identified in this run.

Google's recent interactive-simulation and Workspace Studio changes are already represented by GISF and related workflow nodes.

Microsoft's recent agent-node and approval changes are already represented by HASPF and adjacent Deep Drift nodes.

## Sources

1. OpenAI. **ChatGPT Release Notes - September 3, 2026: Introducing GPT-6 Astra.** States that Astra can create documents, spreadsheets, and presentations that follow templates and instructions and can adapt when requirements or direction change.  
   https://help.openai.com/en/articles/6825453

2. OpenAI. **GPT-6 Astra: A new generation of intelligence.** 3 September 2026. Describes Astra as OpenAI's strongest model for existing-template adherence, structured professional artifacts, writing/visual-style matching, selective context use, adaptive steering, and prompt-to-Sites application creation.  
   https://openai.com/index/gpt-6-astra/

3. OpenAI Help Center. **Creating and editing documents, spreadsheets, and presentations with ChatGPT Work.** Current documentation accessed 4 September 2026. Defines reference files versus reusable templates; template inputs from DOCX, XLSX, PPTX, Google Docs/Sheets/Slides; invariant-preservation instructions; Template Creator; Templates gallery; web/local template separation; plugin-based team distribution; native Google Workspace editing; and Library/local storage differences.  
   https://help.openai.com/en/articles/20001278

4. OpenAI Help Center. **ChatGPT Release Notes - August 31, 2026: Use website tools in the desktop browser.** Documents WebMCP site-tool discovery for ChatGPT Work and Codex in the built-in desktop browser.  
   https://help.openai.com/en/articles/6825453

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository entry was found for reusable template identity + declared invariants + adaptive steering + native artifact structure as one provenance problem.  
**Relationship to prior nodes:** Extends CPATF/VRAEF (artifact lineage and execution), CCPSF (procedural state), GISF (generated executable artifacts), and WMSSF (workspace migration). TCAEF is distinct because it treats the reusable document/spreadsheet/presentation template and subsequent steering sequence as causal dependencies of the final artifact.  
**Freshness:** Primary OpenAI release dated 3 September 2026; verified on 4 September 2026.
