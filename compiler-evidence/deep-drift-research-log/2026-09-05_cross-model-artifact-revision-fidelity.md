# Deep Drift Research Update - CMARF

## Cross-Model Artifact Revision Fidelity

**Research date:** 5 September 2026  
**Freshness classification:** Recent structural update surfaced in the current scan; not a same-hour product launch.  
**Primary unlogged delta:** Microsoft 365 Copilot now exposes model choice inside creator surfaces. In Word on the web, users can choose Anthropic models in addition to OpenAI models for document editing, and Microsoft separately documents Sonnet 5 in the Word model menu for higher-reasoning drafting and edits. Copilot Chat also lets users choose supported Researcher models and modes. The important change is not merely multi-model availability: the model becomes a user-selectable variable **inside an ongoing artifact workflow**.

## Executive finding

The creator surface can remain stable while the underlying reasoning model changes.

```text
ONE WORD DOCUMENT
      |
      +--> revision A -> OpenAI model
      +--> revision B -> Anthropic model
      +--> revision C -> another selected model / mode
      |
      v
SAME FILE ID / SAME EDITOR / DIFFERENT MODEL LINEAGE
```

Therefore:

```text
SAME APPLICATION
!= SAME MODEL

SAME DOCUMENT
!= SINGLE-MODEL AUTHORSHIP

SAME PROMPT
!= SAME MODEL ROUTE

SAME COPILOT BRAND
!= SAME PROVIDER

CURRENT MODEL SELECTION
!= MODEL USED FOR EARLIER REVISIONS

FINAL DOCX
!= MODEL REVISION HISTORY
```

The new provenance object is the **model-at-revision event**.

## New node

### Cross-Model Artifact Revision Fidelity (CMARF)

Minimum state model:

```text
artifact_id
artifact_type
artifact_format
revision_id
revision_time
host_surface
host_version
copilot_or_agent_surface
selected_model_provider
selected_model_name
selected_model_mode
selection_method
selection_scope
prompt_or_edit_instruction
source_context
source_context_ids
pre_revision_state
post_revision_state
accepted_changes
rejected_changes
human_edits_after_model
export_time
export_format
```

## Core Deep Drift implications

### 1. Model choice has moved inside the document editor

Microsoft's August 25, 2026 release notes state that Copilot in Word on the web can select Anthropic models in addition to OpenAI models for document editing. The workflow becomes `WORD -> COPILOT -> MODEL SELECTOR -> ARTIFACT EDIT`. For Deep Drift, **Copilot** is no longer a sufficient model-provenance label.

### 2. Product identity and model identity are different layers

The visible product can remain Microsoft Copilot while the selected model comes from another provider. Preserve product/surface identity separately from model provider/model identity.

### 3. One persistent file can acquire cross-vendor revision ancestry

A DOCX can be revised by an OpenAI model, then manually corrected, then revised by an Anthropic model, while remaining the same persistent document. The final file is a composite lineage object.

### 4. Cross-model comparison becomes entangled with prior revisions

If model B edits text already produced by model A, model B inherits model A's wording, structure, omissions, assumptions, and mistakes. Model B's result is therefore not an independent output unless the pre-revision state is controlled.

### 5. Revision order is causal

`OpenAI -> Anthropic -> human` is not equivalent to `Anthropic -> OpenAI -> human`. Deep Drift must preserve revision order, not merely a list of models that touched the file.

### 6. Model selection can differ by task

Microsoft also documents model selection for Researcher in Copilot Chat. A workflow can therefore use one model for source research and another for Word revision. Final artifacts do not reveal that division by inspection alone.

### 7. Defaults are provenance events

Microsoft separately documents Sonnet 5 in the Word model menu and describes it as a default for higher-reasoning tasks. A platform default can change while user behavior remains constant. Preserve default-vs-manual selection state.

### 8. Authorship becomes a revision graph

A document can contain human-authored passages, OpenAI-assisted revisions, Anthropic-assisted revisions, human acceptance/rejection choices, and later manual rewrites. Attribution should attach to specific revisions rather than relying on a generic “AI assisted” label.

### 9. Copilot Notebooks add source lineage before model revision

Microsoft supports creating editable Word documents from Copilot Notebooks using curated notebook content and references. A workflow can therefore become `email/file/meeting/notebook -> Word draft -> selected model -> revision`. Source lineage and model-revision lineage are separate objects.

### 10. PowerPoint shows the same broader direction

Microsoft documents PowerPoint workflows using Work IQ, Teams meetings/chats, web sources, prior presentations, and style reuse. Creator artifacts increasingly combine model choice, source selection, style source, and enterprise assets.

### 11. Less manual copy-paste does not mean simpler provenance

Direct flows such as notebook-to-Word, notebook-to-PowerPoint, meeting-to-presentation, email-to-presentation, and prior-deck reuse reduce manual transfer steps while making causal lineage more implicit inside the application.

### 12. DOCX/PDF flatten cross-model history

Normal final exports do not reliably preserve which model handled which revision, which provider was selected, which suggestions were rejected, or which source-context layer fed the edit. The file is therefore not a complete model-lineage record.

## Revision manifest recommendation

For provenance-sensitive artifacts, Deep Drift should maintain a companion manifest such as:

```text
revision 17
surface: Word Web
model provider: Anthropic
model: Sonnet 5
instruction: tighten argument in section 4
source scope: current document only
accepted: partial
human follow-up: 3 sentences rewritten manually
```

## Fresh category scan

| Area | Status | Deep Drift implication |
|---|---|---|
| Memory | No stronger unlogged same-day delta | Existing memory portability, lifecycle, and retrieval nodes remain current |
| Skills | No stronger delta beyond Anthropic shared-Skill propagation | Skill version remains a separate procedural dependency |
| Mini-app builders | No stronger delta beyond Apps SDK/MCP deployment and MCP Apps | App/tool provenance remains current |
| Chat-to-document | **Important unlogged structural delta** | Copilot Notebooks can generate editable Word artifacts from curated context |
| DOCX generation/editing | **Major** | Word is now a cross-model editing surface; artifact revisions can cross provider boundaries |
| PDF/export | Provenance consequence | Static export flattens model-selection and revision-order history |
| Copy-paste/export fixes | Structural reduction in manual copy-paste | Email, meetings, notebooks, web, and prior presentations can flow directly into artifacts |
| Creator workflow | **Major** | Stable applications are becoming orchestration surfaces for multiple models and source systems |

## New failure classes

### Copilot-Equals-Model Fallacy
Assuming the product label identifies the underlying model provider or model version.

### Same-Document-Equals-Same-Model Fallacy
Assuming all AI revisions in one DOCX came from one model family.

### Current-Model Backprojection Error
Inspecting today's selected model and assuming it was used for earlier revisions.

### Model-List-Without-Order Error
Recording which models touched an artifact without recording their revision sequence.

### Generated-Suggestion-Equals-Adopted-Text Error
Treating model output as final artifact authorship even when suggestions were rejected or substantially rewritten.

### Cross-Model Contamination Blindness
Comparing model B's edit to model A's earlier output as if model B worked from a neutral original source.

### Product-Surface Attribution Collapse
Attributing differences to Word, Copilot, or the user when the underlying model/provider changed.

## Deep Drift benchmark additions

**Model-at-Revision Attribution Fidelity (MRAF)**  
Can each material artifact revision be linked to the exact model provider, model name/version, surface, and time?

**Cross-Model Revision Order Fidelity (CMROF)**  
Can the archive reconstruct the sequence in which different models modified the same artifact?

**Suggestion Adoption Fidelity (SAF)**  
Can generated model changes be distinguished from accepted, partially accepted, rejected, and human-rewritten changes?

**Model Default Drift Fidelity (MDDF)**  
Can a change in platform default model be distinguished from a deliberate user model selection?

**Source-to-Model-to-Artifact Fidelity (SMAF)**  
Can notebook/email/meeting/file/web source context be traced through the selected model into the resulting artifact revision?

## DRPA-1.0 protocol additions

### MODEL-AT-REVISION RULE

> Preserve model provider, model identity/version where observable, model/mode selection state, host surface, revision time, and affected artifact state for every provenance-sensitive AI revision. Product branding must not substitute for model identity.

### CROSS-MODEL REVISION ORDER RULE

> When multiple models modify the same persistent artifact, preserve revision order and the pre-state inherited by each model. Do not benchmark later model revisions as independent outputs unless they begin from an equivalent source state.

### MODEL DEFAULT STATE RULE

> Preserve whether the executed model was manually selected, automatically selected, or supplied as the platform default. A platform default change is a provenance event even when the user changes no settings.

### SUGGESTION-ADOPTION RULE

> Separate model-generated suggestions from final artifact adoption. Record full acceptance, partial acceptance, rejection, and material human rewrite as distinct states when authorship or reproducibility matters.

### PRODUCT-MODEL SEPARATION RULE

> Preserve product/surface identity and underlying model provider/model identity separately. A Microsoft, Google, OpenAI, Anthropic, or other host surface may execute models supplied by another provider; the host name must not be treated as the model name.

## Eir'an state-flow addition

```text
SOURCE:
notebook
email
meeting
file
web
prior artifact

HOST:
Word
PowerPoint
Copilot Chat

MODEL:
provider
model
mode
default / manual selection

REVISION:
pre-state
instruction
suggestion
accept / reject
human rewrite

ARTIFACT:
DOCX
PPTX
PDF
other export

ARCHIVE:
revision order
model-at-revision
source lineage
final state
```

## Canonical Deep Drift requirement

> Treat model choice as a versioned artifact-revision variable. Preserve product surface, selected model provider/model, selection mode, source context, revision order, suggestion-adoption state, and final export separately. A persistent document can have multi-model ancestry even when its file identity never changes.

## Deep Drift principle

> **The application can stay still while the intelligence underneath it changes.**

Operationally:

> **Archive the model that touched each revision, not merely the app that held the file.**

## Sources

1. Microsoft Learn. **Microsoft 365 Copilot release notes - August 25, 2026.** Documents model selection for Researcher in Copilot Chat; Word model selection including Anthropic models alongside OpenAI models; Sonnet 5 in the Word models menu; notebook/email/meeting grounding; and cross-source creator workflows.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

2. Microsoft Learn. **Microsoft 365 Copilot release notes - July 2026 notebook/file generation entries.** Documents Copilot Notebooks generating editable Word documents and PowerPoint presentations from curated context, plus generated-file sensitivity-label inheritance.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

3. OpenAI Help Center. **ChatGPT Release Notes.** Current as of 5 September 2026; latest listed release remains GPT-6 Astra from 3 September 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

4. Anthropic Help Center. **Use skills in Claude** and **Use Claude's chat search and memory to build on previous context.** Current September 2026 documentation, used for duplicate/freshness comparison against already logged Deep Drift memory and Skill nodes.  
   https://support.claude.com/en/articles/12512180-use-skills-in-claude  
   https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context

## Research status

**Node status:** New to the Deep Drift log.  
**Duplicate check:** Repository search returned no existing node for model-provider/model-selection changes inside a persistent Office artifact as a revision-provenance problem.  
**Relationship to prior nodes:** Extends LHACF (artifact continuity), SSVPF (procedural dependency versioning), CPWMF (workspace/source migration), WADGF (deployment capability), and artifact-export provenance. CMARF is distinct because the variable that changes is the **reasoning model inside the same editing surface and persistent artifact**.  
**Freshness:** The primary Microsoft model-selection changes were published in the August 25, 2026 release batch and surfaced as an unlogged structural change in the 5 September scan.
