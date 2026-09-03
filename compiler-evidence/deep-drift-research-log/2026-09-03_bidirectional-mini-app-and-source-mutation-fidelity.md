# Deep Drift Research Update - BMASF

## Bidirectional Mini-App and Source-Mutation Fidelity

**Research date:** 3 September 2026  
**Primary catch-up delta:** Google Sheets Canvas, launched 13 August 2026 with Scheduled Release rollout beginning 31 August 2026, can transform a spreadsheet into a Gemini-generated interactive mini-app whose UI writes directly back to the source sheet and whose source-sheet changes propagate back into the app in real time.  
**Scope:** mini-app builders, spreadsheet-to-app generation, bidirectional source mutation, shared permissions, natural-language UI construction, source/artifact identity, creator workflow convergence, and provenance.

## Executive finding

The missing Deep Drift node is not simply "AI can build dashboards."

Google Sheets Canvas turns a spreadsheet into a **custom interactive read-write application** layered directly on top of the underlying data. A user can ask Gemini to build a Kanban board, dashboard, tracker, heat map, or whiteboard without coding. Changes performed in that interface can immediately mutate the original spreadsheet, and changes in the sheet appear back in the Canvas.

The creator chain is therefore:

```text
SOURCE SHEET
    |
    v
GEMINI PROMPT
    |
    v
GENERATED MINI-APP / CANVAS
    |
    +--> DRAG CARD
    +--> ADD ENTRY
    +--> EDIT STATE
    |
    v
SOURCE SHEET MUTATION
    |
    v
REAL-TIME CANVAS UPDATE
```

For Deep Drift:

```text
VISUALIZATION
!= READ-WRITE APPLICATION

APP STATE
!= INDEPENDENT DATA COPY

UI ACTION
!= COSMETIC ACTION

SOURCE SHEET
!= PASSIVE BACKING FILE

NO EXPORT
!= NO ARTIFACT TRANSFORMATION

SAME SHARING SETTINGS
!= SAME AUTHORSHIP ROLE
```

The research object is the **bidirectional causal link between generated interface state and source-data state**.

## New node

### Bidirectional Mini-App and Source-Mutation Fidelity (BMASF)

Minimum state model:

```text
source_sheet_id
source_sheet_revision
canvas_id
canvas_revision
generation_prompt
AI_edit_prompt
UI_action
source_mutation_event
mutation_actor
mutation_timestamp
reverse_sync_event
permission_state
sharing_state
usage_limit_state
final_sheet_state
final_canvas_state
```

## 1. Mini-app creation no longer requires a separate app stack

Google describes Sheets Canvas as a Gemini-powered capability that builds interactive applications from natural-language prompts without requiring coding, formulas, or third-party tools.

That collapses an older workflow:

```text
SPREADSHEET
-> EXPORT DATA
-> APP BUILDER
-> DATABASE BINDING
-> UI
```

into:

```text
SPREADSHEET
-> NATURAL-LANGUAGE PROMPT
-> INTERACTIVE APP
```

For Deep Drift, this is important because the "app" and its data source now occupy the same workspace object family.

## 2. The mini-app writes back to the source

The strongest feature is not visualization. It is **bidirectional mutation**.

Google explicitly says that changes made in the Canvas, such as dragging task cards or adding entries, instantly update the source sheet. Changes made in the source sheet are also reflected in Canvas in real time.

Therefore:

```text
CANVAS ACTION
-> DATA MUTATION
```

is a material creator event.

A drag gesture can now be equivalent to a database write.

The archive must therefore record interface actions as potential source-data mutations rather than decorative interactions.

## 3. The generated interface and source sheet are separate states but coupled objects

The Canvas is visually and functionally distinct from the grid, yet it is not an independent data copy.

This means Deep Drift needs two object identities:

```text
SOURCE DATA OBJECT
```

and:

```text
GENERATED INTERFACE OBJECT
```

plus a live synchronization relation between them.

A screenshot of the Canvas cannot reconstruct the underlying source revision that existed at that moment.

Likewise, the source sheet alone may not reveal which Canvas interaction produced a particular mutation.

## 4. Natural-language refinement can alter functionality, not only appearance

Google says users can continue prompting Gemini to refine Canvas layout, design, and **functionality**.

So there are two mutation paths:

```text
PATH A
USER INTERACTS WITH APP
-> SOURCE DATA CHANGES

PATH B
USER PROMPTS GEMINI TO CHANGE APP
-> INTERFACE / FUNCTION CHANGES
-> FUTURE DATA-MUTATION BEHAVIOR CHANGES
```

This creates a distinction between:

```text
DATA STATE
```

and:

```text
INTERACTION LOGIC STATE
```

Both require versioning.

## 5. Sharing permissions are inherited from the spreadsheet

Because Sheets Canvas lives inside Google Sheets, Google says it inherits the spreadsheet's sharing settings.

That improves collaboration but creates another provenance shortcut that must not be misunderstood:

```text
SHARED ACCESS
!= IDENTICAL ACTION ROLE
```

Different collaborators can mutate the same source through either grid operations or Canvas interactions.

The archive should preserve the actor and surface of material mutations when observable.

## 6. Rollout state affects reproducibility

Google's rollout began on 10 August for Rapid Release and 31 August for Scheduled Release domains, with feature visibility potentially delayed. At the time of launch, Canvas creation/editing is web-only and requires English-language account settings, Gemini in Sheets, and Workspace smart features.

Therefore:

```text
FEATURE ANNOUNCED
!= FEATURE VISIBLE TO USER
```

and:

```text
SAME SHEET
+ DIFFERENT ACCOUNT / DOMAIN / LANGUAGE / SURFACE
!= SAME CREATOR CAPABILITY
```

This extends Deep Drift's rollout-visibility and execution-surface rules.

## 7. Creator workflow trend: the data file is becoming the app runtime

The larger pattern is significant.

Traditional creator architecture separated:

```text
DATA
APPLICATION
INTERFACE
```

Sheets Canvas begins collapsing those layers:

```text
SPREADSHEET DATA
+
GENERATED INTERFACE
+
READ-WRITE INTERACTION
+
SHARED PERMISSIONS
```

inside one collaborative workspace.

The spreadsheet is no longer just input material for an AI tool. It becomes part of the runtime substrate of the generated mini-app.

## 8. This changes what counts as "export"

There may be no explicit file export at all.

The transformation is:

```text
SHEET
-> GENERATED APP SURFACE
```

and the consequence returns directly into the source object.

Therefore:

```text
NO DOWNLOAD
!= NO TRANSFORMATION

NO COPY-PASTE
!= NO STATE TRANSFER
```

This extends CPATF's conversation-to-artifact boundary and TCAMF's native-object mutation rules into a live app/data system.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger same-hour delta | Existing MMBESF/CSPIF nodes remain current |
| Skills/plugins | No stronger same-hour delta | Existing plugin-inventory/context nodes remain current |
| Mini-app builders | **Major missing node** | Sheets Canvas is a generated read-write mini-app directly coupled to source data |
| Chat-to-document | Adjacent | Natural-language creation is moving from documents into interactive application surfaces |
| DOCX/PDF | No new same-hour direct delta | Existing document/export nodes remain current |
| Copy-paste/export | Major structural implication | App creation and data mutation occur without download/upload or copy/paste boundaries |
| Creator workflow | **Major** | Data source, app UI, permissions, and AI generation are converging inside one workspace object |

## New failure classes

### Visualization-Equals-App Fallacy
Treating the generated Canvas as a passive dashboard when it can mutate source data.

### UI-Action-Equals-Cosmetic Error
Assuming a drag, card move, or entry edit affects only presentation.

### Source-Equals-Passive-Input Fallacy
Treating the spreadsheet as static input rather than a live mutable runtime object.

### Screenshot-Equals-State Error
Assuming a Canvas screenshot proves the exact underlying sheet revision.

### No-Export-Equals-No-Transformation Fallacy
Ignoring artifact transformation because no file crossed a download/upload boundary.

### App-State-Equals-Data-State Collapse
Failing to distinguish the generated interaction logic from the underlying data state.

## Deep Drift benchmark additions

**Bidirectional Mutation Fidelity (BMF)**  
Can UI-to-sheet and sheet-to-UI mutations be reconstructed separately?

**Source-App Identity Fidelity (SAIF)**  
Can source spreadsheet identity remain distinct from generated mini-app identity?

**Interaction-to-Data Fidelity (IDF)**  
Can a material source-data change be linked to the Canvas interaction that caused it?

**Interface Logic Revision Fidelity (ILRF)**  
Can Gemini-driven changes to Canvas functionality be versioned separately from data changes?

**Permission-Surface Fidelity (PSF)**  
Can collaborator identity, permission state, and mutation surface be preserved?

**Rollout Capability Fidelity (RCF)**  
Can domain, language, surface, feature visibility, and entitlement differences be associated with the actual run?

## DRPA-1.0 protocol additions

### BIDIRECTIONAL MINI-APP MUTATION RULE

> When an AI-generated interface can directly mutate a source spreadsheet, database, document, or other backing object, preserve the interface and source as separate identities linked by a bidirectional state relation. Record the source revision, interface revision, generation and refinement prompts, material UI actions, mutation actor, resulting source changes, reverse synchronization events, permission state, and downstream outputs. A visual interaction must never be assumed to be cosmetic when the interface has write access to the source.

### SOURCE-AS-RUNTIME RULE

> When a creator platform uses a source file as the live data substrate of a generated application, the source must be treated as part of the execution environment rather than merely as input material. Preserve source version, app logic version, synchronization state, sharing/permission context, execution surface, and feature-rollout state. The absence of download, upload, copy, or paste events must never be treated as absence of artifact transformation or state transfer.

## Eir'an state-flow addition

```text
SOURCE STATE:
sheet ID
sheet revision
data mutation
actor
mutation time

CANVAS STATE:
canvas ID
canvas revision
generation prompt
functional refinement
layout refinement

SYNC STATE:
canvas -> sheet
sheet -> canvas
latency / failure
verification

ACCESS STATE:
sharing
permission
account/domain
language
web availability
```

## Canonical Deep Drift requirement

> Archive generated mini-apps as live interfaces over mutable source state, not as decorative visual derivatives. Preserve the source object, generated interface, synchronization relation, interaction logic, permissions, and material mutations as separate but linked provenance layers. When the generated interface can write to the source, every significant UI action becomes a potential data-authoring event.

## Deep Drift principle

> **The dashboard has learned to write back.**

Operationally:

> **When the interface can mutate the source, archive the gesture as well as the data.**

## Sources

1. Google Workspace Updates. **Use Sheets canvas to visualize data in custom, interactive mini-apps.** 13 August 2026. Documents natural-language mini-app generation, fully read-write Canvas behavior, real-time bidirectional synchronization with the source sheet, Gemini refinement of design/functionality, inherited Sheets sharing settings, rollout dates, web/English constraints, and eligibility.  
   https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html

2. Google Docs Editors Help. **Create a Sheets canvas.** Current help documentation checked 3 September 2026. Confirms Canvas examples including dashboards, heat maps, Kanban boards, and custom interactive visualizations.  
   https://support.google.com/docs/answer/17035851

## Research status

**Node status:** New catch-up node discovered during the 3 September 2026 scan.  
**Duplicate check:** No matching Deep Drift repository entry was found for Google Sheets Canvas or for bidirectional mini-app-to-source mutation.  
**Relationship to prior nodes:** Extends CPATF (persistent artifact transition), TCAMF (native-object mutation), CSPIF (cross-surface standing context), and creator-runtime provenance. BMASF specifically addresses generated interfaces that actively write back into their source data.  
**Freshness:** Feature announced 13 August 2026; Scheduled Release rollout began 31 August 2026 and remained within its rollout window during this 3 September scan.
