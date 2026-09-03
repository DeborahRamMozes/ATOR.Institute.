# Deep Drift Research Update — TCAMF

## Template-Constrained Artifact Mutation Fidelity

**Research date:** 2 September 2026  
**Primary fresh delta:** OpenAI's current ChatGPT Work documentation now explicitly treats source files, native Google Workspace files, reusable templates, and "must stay unchanged" constraints as first-class parts of document creation and editing.  
**Scope:** memory-adjacent file reuse, Skills/templates, chat-to-document creation, native Google Docs/Sheets/Slides, DOCX/XLSX/PPTX reference files, PDF refinement, copy-paste elimination, cloud/local divergence, and creator-workflow provenance.

## Executive finding

The new creator-workflow detail is not merely that ChatGPT Work can create documents.

OpenAI now documents a workflow in which the user can attach source material, choose the output format and destination, specify what must remain unchanged (including formulas, layout, tone, branding, slide order, or table structure), match an existing file or master deck, turn a reference file plus reusable instructions into a template, use native Google Docs/Sheets/Slides when the relevant app is connected, and refine supported documents, spreadsheets, presentations, and PDFs from the desktop sidebar.

```text
SOURCE ARTIFACT
+ PRESERVATION CONSTRAINTS
+ REUSABLE TEMPLATE
+ CONNECTED APP STATE
+ USER APPROVAL
        |
        v
NATIVE ARTIFACT MUTATION
        |
        +--> CLOUD FILE
        +--> LOCAL FILE
        +--> LIBRARY
        +--> DOWNSTREAM EXPORT
```

Core distinctions:

```text
REFERENCE FILE != TEMPLATE
TEMPLATE != SOURCE FILE COPY
PRESERVE STRUCTURE != PRESERVE CONTENT
NATIVE EDIT != NEW FILE GENERATION
SAME TEMPLATE != SAME EXECUTION SURFACE
WEB TEMPLATE != DESKTOP TEMPLATE
CLOUD OUTPUT != LOCAL OUTPUT
UNCHANGED REQUEST != VERIFIED INVARIANT
```

The new research object is not only the generated artifact. It is the relationship among source material, preserved invariants, replaced content, template state, execution surface, and resulting native object.

## 1. Explicit preservation constraints become creator controls

OpenAI instructs users to state what must remain unchanged, including formulas, layout, tone, branding, slide order, and table structure. AI document creation is therefore becoming constraint-governed mutation rather than only blank-slate generation.

Deep Drift should separate preserved components, replaced components, generated components, and human-verified components. A document may be partly inherited, partly generated, and partly manually corrected.

## 2. Reference files and templates are different procedural objects

OpenAI distinguishes one-off reference files from reusable templates. A template combines a reference artifact, reusable instructions, and expected output behavior. It is therefore a procedural artifact, not merely a sample file.

```text
TEMPLATE
=
CONTENT ANCHOR
+ STRUCTURAL CONSTRAINT
+ REUSABLE PROCEDURE
```

Template identity and revision should be preserved separately from each artifact generated from it.

## 3. Linked Google files create persistent structural ancestry

A Google Workspace reference can remain linked rather than being changed when a template is created.

```text
GOOGLE SOURCE FILE
      |
      +--> LINKED TEMPLATE
              |
              +--> FUTURE OUTPUT A
              +--> FUTURE OUTPUT B
              +--> FUTURE OUTPUT C
```

The original file can remain untouched while influencing many later artifacts. Therefore, **NO SOURCE MUTATION != NO SOURCE INFLUENCE**.

## 4. Template portability is surface-dependent

OpenAI states that templates created on the web and templates saved locally by Codex are separate and do not automatically sync.

```text
SAME USER + SAME ACCOUNT != SAME TEMPLATE INVENTORY
WEB TEMPLATE STATE != DESKTOP TEMPLATE STATE
```

Reproducibility must preserve template locality and synchronization state.

## 5. Native Google Workspace editing changes the artifact boundary

Where supported, ChatGPT Work can create or edit native Google Docs, Sheets, and Slides. This removes download/upload/conversion seams and increases the importance of connected account identity, permissions, object IDs, and approval events.

## 6. Sharing a template does not transfer source permissions

OpenAI notes that teammates need their own access to linked files or connected services. Sharing a template does not change permissions on its Google Workspace reference.

```text
PROCEDURE SHARED != SOURCE ACCESS SHARED
```

The same nominal template can therefore behave differently for different users.

## 7. Cloud and local creator state can diverge

Cloud-created files may appear in Library, while local desktop outputs may remain in local projects or folders and do not automatically appear on web or mobile.

```text
CREATED != CLOUD-PERSISTED
LOCAL OUTPUT != LIBRARY OBJECT
SAME PROJECT != SAME ARTIFACT VISIBILITY
```

Artifact location affects later retrieval, memory-like reuse, and collaboration.

## 8. PDF is becoming an active editing surface

OpenAI's Work documentation states that supported PDFs can be opened from the desktop sidebar, a region can be selected, and a change can be requested. PDF must therefore be distinguished as either a derivative/finalization artifact or an active input/editing surface.

## 9. Templates converge with Skills and plugins

OpenAI says templates can be packaged as plugins for workspace distribution.

```text
REFERENCE FILE
      |
REUSABLE INSTRUCTIONS
      |
TEMPLATE
      |
PLUGIN
      |
TEAM DISTRIBUTION
      |
NATIVE ARTIFACT
```

The boundary between document template and procedural software is weakening.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | Indirect | Files/templates create persistent context channels independent of ordinary conversational memory |
| Skills/plugins | Major | Templates can become reusable procedural packages and be distributed through plugins |
| Mini-app / creator builders | Structural convergence | Creator workflows increasingly package reusable instructions, source links, and native actions |
| Chat-to-document | Major | Work directly creates/edits native artifacts from source material and reusable constraints |
| DOCX/XLSX/PPTX | Major | These file types can serve as reference artifacts or template anchors |
| PDF | Material | PDFs can be opened and selectively refined, not only exported |
| Copy-paste/export | Major seam reduction | Native app editing and linked references eliminate many manual transfer steps |
| Creator workflow | Major | Creation is shifting from blank generation toward invariant-preserving artifact mutation |

## New failure classes

- **Template-Equals-File Fallacy:** treating a reusable template as identical to its reference file.
- **Constraint-Equals-Verification Error:** assuming a requested invariant was actually preserved without checking the output.
- **Same-Account-Same-Template Fallacy:** assuming template inventories are identical across web and desktop surfaces.
- **Shared-Template-Shared-Source Fallacy:** assuming distributing a template grants access to linked source material.
- **Native-Edit-Equals-New-File Error:** treating an in-place cloud-object mutation as if it were a separate generated file.
- **Cloud-Local Continuity Error:** assuming local outputs automatically appear in cloud Library or mobile/web surfaces.
- **PDF-Terminality Fallacy:** treating PDF as necessarily the final immutable stage of a creator workflow.
- **Structural-Ancestry Blindness:** recording only content sources while ignoring inherited layout, formulas, branding, slide order, and table structure.

## Deep Drift benchmark additions

**Invariant Preservation Fidelity (IPF):** Can requested preserved properties be distinguished from properties actually verified as preserved?

**Template Identity Fidelity (TIF):** Can a reusable template be identified separately from its reference artifact and generated outputs?

**Template Surface Fidelity (TSF):** Can web, desktop, local, and cloud template inventories remain distinct?

**Structural Ancestry Fidelity (SAF):** Can inherited formulas, layout, branding, slide order, table structure, and tone be traced to their source?

**Native Object Mutation Fidelity (NOMF):** Can in-place Google Docs/Sheets/Slides edits be distinguished from newly generated derivative files?

**Permission-Procedure Separation Fidelity (PPSF):** Can template sharing remain separate from access to linked source files and connected services?

**Cloud-Local Artifact Fidelity (CLAF):** Can locally generated outputs remain distinct from cloud Library objects and connected native files?

## DRPA-1.0 protocol additions

### TEMPLATE-CONSTRAINED ARTIFACT RULE

> When an AI system creates or edits an artifact using a reference file, master file, reusable template, or explicit preservation constraints, provenance must record both inherited and generated structure. Preserve the reference artifact ID and version; template ID and revision; reusable instructions; properties requested to remain unchanged; components intended for replacement; source material supplied for the run; execution surface; connected account and permissions; approval events; resulting object ID; verification of preserved invariants; human corrections; and downstream derivatives. A template must not be collapsed into its reference file, and an instruction to preserve a property must not be treated as proof that the property was actually preserved.

### TEMPLATE-LOCALITY RULE

> When reusable creator procedures exist separately across web, desktop, local, cloud, or workspace surfaces, preserve their locality and synchronization state. A shared user identity, plugin name, or template label must never be treated as proof that the same procedural state existed on every execution surface.

## Eir'an state-flow addition

```text
TEMPLATE STATE:
reference artifact
template identity
template revision
template surface
linked source

INVARIANT STATE:
requested preserved properties
verified preserved properties
violations
human corrections

NATIVE OBJECT STATE:
connected account
object ID
in-place mutation
new-object creation
approval

LOCALITY STATE:
web
desktop
local folder
cloud Library
native connected app
sync status
```

## Canonical Deep Drift requirement

> Persistent creator workflows must preserve structural ancestry as carefully as semantic ancestry. When AI is instructed to keep formulas, layout, branding, slide order, table structure, tone, or other invariants while replacing content, the archive must record which elements were inherited, which were generated, which were modified, and which were verified. Reusable templates must be treated as versioned procedural artifacts with their own locality, permissions, linked references, and distribution history.

## Deep Drift principle

> **The next creator workflow is not "make me a document." It is "change this object without breaking what must survive."**

Operationally:

> **Archive the invariants, not only the changes.**

## Broader platform scan

The wider creator-platform trajectory remains consistent:

- Microsoft Copilot continues to move chat into persistent Pages, native Office artifacts, connected data, agents, and orchestration layers.
- Google Workspace is moving documents into cross-modal outputs such as AI-generated Vids and automation flows.
- Anthropic continues to treat Skills and generated files as reusable procedural and artifact layers.
- OpenAI Work is now documenting a particularly explicit form of constrained native artifact creation: source-linked, template-aware, permission-sensitive, surface-dependent, and capable of refining existing files.

The common trend is:

```text
CHATBOT
-> CREATOR RUNTIME
-> PERSISTENT OBJECTS
-> REUSABLE PROCEDURES
-> CONNECTED NATIVE APPS
-> BRANCHING ARTIFACT LINEAGE
```

## Sources

1. OpenAI Help Center. **Creating and editing documents, spreadsheets, and presentations with ChatGPT Work.** Updated in late August 2026; accessed 2 September 2026. https://help.openai.com/en/articles/20001278
2. OpenAI. **ChatGPT is now a partner for your most ambitious work.** 9 July 2026. https://openai.com/index/chatgpt-for-your-most-ambitious-work/
3. Microsoft Learn. **Release Notes for Microsoft 365 Copilot.** Current documentation checked 2 September 2026. https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
4. Google Workspace Updates. **Turn Google Docs, PDFs, and Word files into video summaries in Google Vids.** 2 September 2026. https://workspaceupdates.googleblog.com/2026/09/turn-google-docs-pdfs-and-word-files-into-video-summaries-in-Google-Vids.html
5. Anthropic. **Introducing Agent Skills.** Current first-party page checked 2 September 2026. https://www.anthropic.com/news/skills

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository entry was found for template locality, preservation constraints, structural ancestry, and native source-linked artifact mutation as a combined provenance node.  
**Relationship to prior nodes:** Extends CPATF, OHSEF, CMDMF, MPSRF, CAGIF, and DRPA-1.0 by adding explicit structural-invariant and template-locality requirements.  
**Freshness:** Primary implementation details verified against OpenAI first-party documentation updated five days before this 2 September 2026 scan.
