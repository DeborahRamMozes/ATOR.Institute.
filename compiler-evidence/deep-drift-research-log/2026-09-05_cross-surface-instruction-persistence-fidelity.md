# Deep Drift Research Update - CSIPF

## Cross-Surface Instruction Persistence Fidelity

**Research date:** 5 September 2026  
**Primary fresh delta:** Google Workspace expanded persistent custom instructions for Gemini beyond Google Docs into Ask Gemini in Drive, Ask Gemini in Chat, and the Gemini side panels in Gmail, Sheets, and Slides. Users can create an instruction from any supported surface, manage all saved instructions centrally in Personalization, and have those instructions influence Gemini across Workspace.

## Executive finding

A creator's standing instructions are becoming a cross-application control layer.

```text
USER INSTRUCTION
"Use concise executive summaries"
        |
        v
PERSONALIZATION STORE
        |
        +--> Drive
        +--> Chat
        +--> Gmail
        +--> Sheets
        +--> Slides
        +--> Docs
```

Therefore:

```text
SAME PROMPT
!= SAME EFFECTIVE INSTRUCTION SET

SAME MODEL
!= SAME PERSONALIZATION STATE

DIFFERENT APP
!= DIFFERENT INSTRUCTION PROFILE

NO INSTRUCTION IN CURRENT CHAT
!= NO PERSISTENT INSTRUCTION APPLIED

FINAL DOCX / PDF
!= COMPLETE INSTRUCTION PROVENANCE
```

The new provenance object is the **cross-surface instruction state**.

## New node

### Cross-Surface Instruction Persistence Fidelity (CSIPF)

Minimum state model:

```text
instruction_id
instruction_text
instruction_created_time
instruction_created_surface
instruction_last_modified_time
instruction_enabled_state
instruction_scope
personalization_store_state
execution_surface
execution_time
model_id
prompt_text
project_or_workspace_context
source_grounding
artifact_type
artifact_version
instruction_effect_observed
```

## 1. Custom instructions are no longer surface-local

Google first introduced persistent Gemini custom instructions in Docs, then expanded them to:

- Ask Gemini in Drive
- Ask Gemini in Chat
- Gemini in Gmail
- Gemini in Sheets
- Gemini in Slides

The user can declare a preference from any supported Workspace surface.

This turns customization from an app preference into a shared Workspace layer.

## 2. The visible prompt is now only part of the effective prompt

For reproducibility, the actual instruction environment is:

```text
VISIBLE PROMPT
+
PERSISTENT CUSTOM INSTRUCTIONS
+
WORKSPACE CONTEXT
+
MODEL
=
EFFECTIVE EXECUTION STATE
```

A researcher who archives only the visible prompt may miss a standing instruction that shaped tone, structure, formatting, or decision behavior.

## 3. Cross-surface consistency can create hidden common causes

Suppose one user receives similarly terse output in Gmail, Slides, and Drive.

That may look like a model-level style behavior.

But the common cause may simply be:

```text
persistent instruction:
"Be concise"
```

Therefore repeated behavior across apps does not necessarily prove a global model characteristic.

It may be user-level procedural state.

## 4. Instruction origin and execution surface are different objects

A custom instruction can be created in Drive and later affect output in Gmail.

```text
CREATE:
Drive

EXECUTE:
Gmail
```

So Deep Drift needs to preserve:

```text
instruction origin surface
!=
execution surface
```

This is directly analogous to shared Skill provenance, but the dependency belongs to a user's personalization layer rather than an externally shared Skill.

## 5. Persistent instructions are adjacent to memory but not identical to memory

A useful distinction:

```text
MEMORY
= context inferred or retained from interactions

CUSTOM INSTRUCTION
= explicit standing procedural preference
```

Both can influence future outputs.

But they have different provenance.

A system may correctly remember a preference because the user explicitly stored it, not because the model inferred it from history.

## 6. Instruction persistence creates longitudinal experimental drift

A user can change one standing instruction between two benchmark runs:

```text
RUN A
instruction v1

RUN B
instruction v2
```

while keeping:

```text
same prompt
same model
same file
same app
```

The outputs are no longer directly comparable.

Therefore instruction-set versioning belongs in longitudinal model research.

## 7. Central management creates a single hidden mutation point

Google says saved instructions can be viewed and managed in the Personalization settings.

One edit there can affect multiple surfaces.

This gives us:

```text
ONE SETTINGS CHANGE
-> MANY FUTURE APP EXECUTIONS
```

The blast radius resembles owner-updated shared Skills, except the dependency is personal rather than organizational.

## 8. Creator workflow consistency is becoming platform-native

For creators, the benefit is obvious:

- preferred tone
- preferred structure
- formatting habits
- recurring stylistic rules
- reporting conventions

can persist across multiple Workspace tools.

That reduces repeated prompting and manual cleanup.

But it also means creator identity is increasingly represented by configuration state outside the artifact itself.

## 9. Chat-to-document generation can inherit invisible standing instructions

Google Workspace already supports AI-assisted drafting in Docs and cross-Workspace context grounding.

With persistent instructions active, a generated document may reflect:

```text
source data
+
visible request
+
standing instruction
```

The final document does not inherently disclose which standing instructions were active.

Thus:

```text
FINAL DOCUMENT
!= COMPLETE GENERATION CONTEXT
```

## 10. DOCX/PDF flatten instruction ancestry

A DOCX or PDF may preserve:

```text
text
layout
tables
formatting
```

while losing:

```text
custom instruction set
instruction version
instruction origin surface
personalization settings state
```

So static export is another provenance-flattening boundary.

## 11. Copy-paste can preserve instruction effects while erasing their cause

Example:

```text
Gemini output
generated under:
"Always use British spelling"

        |
        v
COPY
        |
        v
new Word file
```

The copied text preserves the effect:

```text
organisation
colour
centre
```

but not the standing instruction that caused it.

Therefore:

```text
STYLE SURVIVAL
!= STYLE-PROVENANCE SURVIVAL
```

## 12. Instruction state can masquerade as model personality

Cross-provider benchmarking often asks whether one model is more formal, terse, verbose, structured, or cautious.

Persistent personalization complicates that comparison.

A model may appear to have changed personality when the user's standing instructions changed.

Deep Drift must separate:

```text
MODEL BEHAVIOR
from
USER CONFIGURATION BEHAVIOR
```

## 13. Cross-surface propagation needs its own benchmark

The important test is not merely "does the instruction exist?"

It is:

```text
Does the same instruction:
- apply in each supported surface?
- apply with the same strength?
- preserve formatting intent?
- conflict with surface-specific constraints?
- survive model switching?
```

Portability is not guaranteed to mean identical behavioral weight.

## 14. Instruction conflict becomes another causal variable

Future tests should consider:

```text
persistent instruction
vs
current prompt
vs
document-specific request
vs
surface constraints
```

If they conflict, whichever instruction wins becomes part of execution provenance.

The visible final output alone may not reveal the precedence rule.

## Fresh category scan

| Area | Status | Deep Drift implication |
|---|---|---|
| Memory | Adjacent fresh delta | Persistent instructions behave like explicit procedural memory but should remain distinct from inferred memory |
| Skills | No stronger new Skill delta this pass | Shared-Skill version/governance nodes remain current |
| Mini-app builders | Existing recent structural trend | Sheets canvas remains an important read-write mini-app layer, but no stronger same-day change surfaced |
| Chat-to-document | **Major implication** | Generated drafts can inherit standing Workspace instructions not visible in the current prompt |
| DOCX/PDF | **Major provenance implication** | Static files flatten personalization/instruction ancestry |
| Copy-paste/export | **Major provenance implication** | Instruction effects survive copy while instruction provenance disappears |
| Creator workflow | **Major fresh delta** | User-level procedural preferences now propagate across multiple Workspace creation surfaces |

## New failure classes

### Visible-Prompt-Equals-Effective-Prompt Fallacy
Assuming the current prompt contains the full instruction set.

### Surface-Local-Personalization Fallacy
Assuming a preference created in one app only affects that app.

### Style-Equals-Model-Personality Error
Attributing output style to the model when it may originate from persistent user instructions.

### Same-User-Same-State Fallacy
Assuming two runs by the same user are comparable without checking whether standing instructions changed.

### Copy-Equals-Provenance Preservation Fallacy
Assuming copied text carries the standing instruction metadata that shaped it.

## Deep Drift benchmark additions

**Cross-Surface Instruction Propagation Fidelity (CSIPF)**  
Does one persistent instruction apply consistently across supported Workspace surfaces?

**Instruction Version Attribution Fidelity (IVAF)**  
Can a run be linked to the exact standing instruction state active at execution time?

**Instruction-Model Separation Fidelity (IMSF)**  
Can observed behavior be correctly attributed to model behavior versus persistent user configuration?

**Instruction Conflict Resolution Fidelity (ICRF)**  
Can precedence between persistent instructions, current prompts, and surface constraints be reconstructed?

**Instruction Effect Export Fidelity (IEEF)**  
Can downstream artifacts preserve evidence of which standing instructions shaped them?

## DRPA-1.0 protocol additions

### EFFECTIVE INSTRUCTION SET RULE

> Preserve the visible prompt and all persistent custom instructions that were active at execution time. The visible prompt alone must not be treated as the complete procedural input.

### CROSS-SURFACE INSTRUCTION ORIGIN RULE

> Preserve where an instruction was created separately from where it executed. A preference created in one Workspace surface may influence another.

### INSTRUCTION-MEMORY SEPARATION RULE

> Record explicit persistent instructions separately from inferred memory, past-chat retrieval, project memory, and other context mechanisms. Similar output effects do not imply identical provenance.

### PERSONALIZATION VERSION RULE

> Longitudinal comparisons must record the standing instruction set and its modification state. A change in personalization configuration is an experimental change even when model, prompt, and artifact remain constant.

### ARTIFACT INSTRUCTION LINEAGE RULE

> When persistent instructions materially shape a generated DOCX, PDF, spreadsheet, presentation, or copied derivative, preserve the relevant instruction state externally if reproducibility matters.

## Eir'an state-flow addition

```text
DECLARE:
instruction
surface
time

STORE:
personalization layer

PROPAGATE:
Docs
Drive
Chat
Gmail
Sheets
Slides

EXECUTE:
prompt
model
workspace context
surface

DERIVE:
document
sheet
deck
email
copy
PDF

ARCHIVE:
instruction snapshot
execution time
artifact lineage
```

## Canonical Deep Drift requirement

> Treat persistent cross-surface instructions as versioned procedural context. Preserve instruction text, creation surface, modification time, execution surface, and downstream artifacts separately.

## Deep Drift principle

> **The prompt you can see is no longer necessarily the prompt the system obeyed.**

Operationally:

> **Archive the standing instructions beside the visible prompt, because personalization has become infrastructure.**

## Adjacent creator-workflow signals

Google's September Workspace recap also confirms several nearby trends:

1. Workspace Studio is gaining end-to-end actions for moving and copying Drive files and replying in Gmail and Chat.
2. Google Vids can transform Docs, PDFs, and Word files into AI-generated video summaries, with Scheduled Release rollout starting 5 September 2026.
3. Gemini Notebook now exposes organization-level audit logs, already covered in RWARF.
4. Sheets canvas, introduced in August, turns spreadsheet data into read-write natural-language mini-apps, reinforcing the larger shift from "AI answers" to "AI-operated creator surfaces."

These adjacent signals reinforce the same direction: persistent context, procedural automation, editable artifacts, and cross-surface action are converging.

## Sources

1. Google Workspace Updates. **Custom instructions for Gemini in Workspace now available in more apps.** Published 2 September 2026. Documents persistent instructions expanding from Docs to Ask Gemini in Drive, Ask Gemini in Chat, and Gemini side panels in Gmail, Sheets, and Slides, with central management through Personalization settings.  
   https://workspaceupdates.googleblog.com/2026/09/

2. Google Workspace Updates. **Use Sheets canvas to visualize data in custom, interactive mini-apps.** Published 13 August 2026. Documents read-write mini-app creation layered directly on spreadsheet data using natural-language prompts.  
   https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html

3. Google Workspace Updates. **Turn Google Docs, PDFs, and Word files into video summaries in Google Vids.** Published 2 September 2026; Scheduled Release rollout starts 5 September 2026.  
   https://workspaceupdates.googleblog.com/2026/09/turn-google-docs-pdfs-and-word-files-into-video-summaries-in-Google-Vids.html

4. Google Workspace Updates. **Automate Drive, Gmail, and Google Chat actions with new steps in Workspace Studio.** Published 2 September 2026. Documents Move/Copy Drive actions and contextual replies in Gmail and Google Chat, with admin approval controls for some external-sharing actions.  
   https://workspaceupdates.googleblog.com/2026/09/

## Research status

**Node status:** New.  
**Duplicate check:** Repository search found no existing Deep Drift node for persistent Gemini custom instructions propagating across Drive, Chat, Gmail, Sheets, Slides, and Docs as a shared personalization layer.  
**Relationship to prior nodes:** Extends memory provenance, PMBDF, MSMRF, SSVPF, and creator-artifact provenance. CSIPF is distinct because it treats explicit user-authored standing instructions as cross-surface procedural context rather than inferred memory or shared Skills.  
**Freshness:** Google published the cross-surface expansion on 2 September 2026; rollout began the same day and remains current on 5 September 2026.
