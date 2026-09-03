# Deep Drift Research Update — DSIEF

## Design-System Inheritance and Export Fidelity

**Research date:** 3 September 2026  
**Primary fresh delta:** Anthropic is actively positioning Claude Design as a creator surface where an organization-level design system is extracted once from codebases, slide decks, documents, PDFs, screenshots, prototypes, or brand assets, then automatically inherited by future projects.  
**Fresh confirmation:** Anthropic's 3 September 2026 "Getting Started with Claude Design" session explicitly frames the workflow as importing a design system once, producing on-brand decks/docs/graphics, and moving from brief to final export.  
**Scope:** persistent design systems, cross-project inheritance, visual memory, presentation/document generation, PDF/PPTX export, multi-destination handoff, Claude Design ↔ Claude Code continuity, creator provenance, and export survival.

## Executive finding

The new creator-workflow problem is not simply that Claude can generate a deck.

Claude Design can construct an organization-level **design system** from prior artifacts and code, then apply that system automatically to future projects.

The design system can include:

```text
COLORS
TYPOGRAPHY
COMPONENTS
LAYOUT PATTERNS
SPACING
GRID LOGIC
BRAND ASSETS
```

The source material used to establish that system can include:

```text
CODEBASE
SLIDE DECK
DOCUMENT
PDF
SCREENSHOT
PROTOTYPE
LOGO / PALETTE / TYPE SPEC
```

Once established, the design system becomes a persistent creator dependency.

A new project therefore begins with inherited visual procedure before the user types the local brief.

The effective creator stack becomes:

```text
ORGANIZATION DESIGN SYSTEM
        |
        +--> EXTRACTED COMPONENTS
        +--> COLOR RULES
        +--> TYPOGRAPHY
        +--> LAYOUT PATTERNS
        |
        v
PROJECT
        |
        +--> CHAT INSTRUCTION
        +--> INLINE COMMENTS
        +--> DIRECT CANVAS EDITS
        |
        v
WORKING DESIGN
        |
        +--> PDF
        +--> PPTX
        +--> HTML
        +--> CANVA
        +--> ADOBE
        +--> LOVABLE
        +--> REPLIT / VERCEL / WIX
        +--> CLAUDE CODE
```

For Deep Drift:

```text
LOCAL PROMPT
!= COMPLETE DESIGN INSTRUCTION SET

PROJECT
!= VISUALLY SELF-CONTAINED OBJECT

SAME BRIEF
!= SAME OUTPUT WITHOUT SAME DESIGN SYSTEM

PDF EXPORT
!= DESIGN-SYSTEM STATE

PPTX EXPORT
!= CANONICAL PROJECT STATE

HANDOFF TO CODE
!= NEW AUTHORSHIP FROM ZERO
```

The new research object is the **inherited design-system state plus its survival across exports and handoffs**.

## New node

### Design-System Inheritance and Export Fidelity (DSIEF)

Minimum state model:

```text
organization_id
design_system_id
design_system_revision
source_assets
extraction_event
extracted_components
approved_components
locked_components
project_id
project_inheritance_state
project_revision
human_edits
AI_edits
export_target
export_format
handoff_target
surviving_brand_properties
lost_brand_properties
downstream_artifact_id
```

## 1. Design systems are becoming persistent procedural memory

Anthropic states that Claude Design extracts reusable components, colors, typography, and patterns from source materials and uses them as the foundation for projects created within the account.

This behaves like a creator-specific persistent memory layer.

It is not conversational memory.

It is not merely a template.

It is a reusable visual grammar.

Therefore:

```text
SEMANTIC MEMORY
!= DESIGN-SYSTEM MEMORY
```

A project can inherit brand rules even when those rules are absent from the current chat transcript.

Deep Drift should record that inherited visual state separately.

## 2. Source artifacts can become latent visual ancestry

A PowerPoint or PDF used to establish a design system may influence future outputs even when that source file is never directly attached to the later project.

The causal path can be:

```text
SOURCE PDF
   |
   v
DESIGN-SYSTEM EXTRACTION
   |
   v
ORG DESIGN SYSTEM
   |
   v
FUTURE PROJECT
   |
   v
PPTX / PDF / HTML / APP
```

So:

```text
SOURCE FILE NOT PRESENT IN RUN
!= SOURCE FILE NOT CAUSALLY RELEVANT
```

This extends Deep Drift's artifact ancestry model.

## 3. Team projects can inherit a shared visual runtime

Anthropic says organization design systems can be configured once and then automatically used by team members' projects.

This means visual behavior can be shared at organization scope.

The creator environment becomes:

```text
ORGANIZATION
   |
   v
DESIGN SYSTEM
   |
   +--> USER A PROJECT
   +--> USER B PROJECT
   +--> USER C PROJECT
```

A local artifact may therefore contain inherited decisions made by a designer or administrator who never touched that specific project.

That is distributed authorship infrastructure.

## 4. Locked design systems create governance over generation

Claude Design supports administrative control over who can manage the design system, and larger organizations can lock approved defaults.

The provenance model should distinguish:

```text
DESIGN SYSTEM AVAILABLE
DESIGN SYSTEM ACTIVE
DESIGN SYSTEM APPROVED
DESIGN SYSTEM LOCKED
DESIGN SYSTEM OVERRIDDEN
```

A user's inability to change typography or components is part of the causal production environment.

Governance state belongs in creator provenance.

## 5. Design and code can remain synchronized

Anthropic documents `/design-sync` and a Claude Design MCP path that can connect Claude Design and Claude Code.

This creates continuity between visual design and software implementation:

```text
DESIGN SYSTEM
   |
CLAUDE DESIGN
   |
PROJECT STATE
   |
HANDOFF
   |
CLAUDE CODE
   |
CODEBASE
```

The downstream software may inherit design decisions rather than reconstructing them from a screenshot.

Therefore:

```text
DESIGN HANDOFF
!= IMAGE REFERENCE ONLY
```

It can be procedural continuity.

Deep Drift should preserve the handoff mechanism and state.

## 6. Export now means branching into heterogeneous artifact classes

Claude Design currently documents export to:

- PDF;
- PPTX;
- standalone HTML;
- ZIP;
- Canva;
- Adobe;
- Base44;
- Gamma;
- Lovable;
- Miro;
- Replit;
- Vercel;
- Wix;
- Claude Code.

A single project can therefore branch into multiple artifact species.

The correct model is:

```text
CLAUDE DESIGN PROJECT
   |
   +--> PDF
   +--> PPTX
   +--> HTML
   +--> CANVA OBJECT
   +--> ADOBE OBJECT
   +--> CODE PROJECT
```

These children cannot be assumed to preserve identical structure, editability, typography, component semantics, or provenance.

## 7. PDF and PPTX are representational projections

PDF and PPTX exports represent different properties of the source project.

A PDF may preserve appearance while flattening component semantics.

A PPTX may preserve some editability while translating layout and typography into another application's model.

So:

```text
VISUAL FIDELITY
!= STRUCTURAL FIDELITY

EDITABILITY
!= COMPONENT IDENTITY

BRAND APPEARANCE
!= DESIGN-SYSTEM PROVENANCE
```

Every export requires a survival check.

## 8. "Send to" integrations remove the visible export seam

When a project is sent directly to Canva, Adobe, Lovable, Vercel, or another supported target, there may be no:

```text
DOWNLOAD
-> LOCAL FILE
-> UPLOAD
```

sequence at all.

Instead:

```text
SOURCE PROJECT
-> DIRECT HANDOFF
-> DESTINATION OBJECT
```

This is another erosion of copy-paste/export evidence.

For Deep Drift:

```text
NO DOWNLOADED FILE
!= NO ARTIFACT TRANSFER
```

The transfer event itself must be archived.

## 9. Creator workflow trend: brands are becoming executable context

Traditional brand guidelines were documents humans interpreted.

The emerging architecture is:

```text
BRAND DOCUMENTS / CODE
        |
        v
MACHINE-READABLE DESIGN SYSTEM
        |
        v
AUTOMATIC PROJECT INHERITANCE
        |
        v
MULTI-FORMAT CREATION
```

Brand identity is moving from reference literature toward executable creator context.

That is materially important for attribution because a later artifact can inherit a visual grammar authored elsewhere.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | Conceptual extension | Persistent design-system state behaves as visual/procedural memory distinct from semantic memory |
| Skills / reusable procedures | Major convergence | Design systems act as reusable creator rules applied automatically |
| Mini-app builders | Major | Claude Design creates interactive prototypes and microsites and hands them into code workflows |
| Chat-to-document | Material | Conversational briefs generate persistent designs, presentations, and document-like artifacts |
| DOCX | No stronger fresh direct delta | Existing chat-to-document and template nodes remain current |
| PDF | Major | PDF is one branch from a richer project state, not the canonical design object |
| PPTX | Major | Presentation export is a translated branch with separate editability and fidelity questions |
| Copy-paste / export | Major seam reduction | Direct "Send to" integrations eliminate manual download-upload evidence |
| Creator workflow | Major | Organization-level visual rules are becoming persistent executable context across projects |

## New failure classes

### Local-Prompt Completeness Fallacy
Treating the current project prompt as the full instruction set when organization design rules were inherited.

### Source-Absence-Equals-No-Influence Error
Assuming an old deck/PDF/codebase did not influence a project because it was not attached to the current run.

### Brand-Equals-Decoration Fallacy
Treating visual identity as cosmetic rather than a reusable procedural input.

### PDF-Equals-Project Fallacy
Treating PDF export as a complete representation of the live Claude Design project.

### PPTX-Equals-Source Fallacy
Treating a PowerPoint export as structurally identical to the originating design project.

### Direct-Handoff Invisibility Error
Ignoring artifact transfer because no download/upload occurred.

### Team-Output-Single-Author Error
Ignoring organization-level design decisions inherited into an individual user's project.

### Design-to-Code Reset Fallacy
Treating a Claude Design-to-Claude Code handoff as a fresh implementation with no inherited procedural state.

## Deep Drift benchmark additions

**Design-System Identity Fidelity (DSIF)**  
Can the exact design system and revision used by a project be identified?

**Visual Ancestry Fidelity (VAF)**  
Can source decks, PDFs, codebases, and brand assets that shaped the design system remain causally linked to later outputs?

**Cross-Project Inheritance Fidelity (CPIF)**  
Can automatic organization-level inheritance be distinguished from local project instructions?

**Export Survival Fidelity (ESF)**  
Can visual, structural, typographic, and component properties be compared across PDF, PPTX, HTML, and partner exports?

**Direct Handoff Fidelity (DHF)**  
Can "Send to" and Claude Code handoffs be reconstructed even when no intermediate downloadable file exists?

**Design-to-Code Continuity Fidelity (DCCF)**  
Can synchronized design-system state remain linked to downstream implementation?

## DRPA-1.0 protocol additions

### DESIGN-SYSTEM INHERITANCE RULE

> When a creator platform extracts or defines a reusable design system that is automatically inherited by future projects, that system must be treated as a versioned procedural dependency. Preserve the design-system identity and revision, source artifacts used to construct it, extracted and approved components, governance or lock state, project inheritance state, local overrides, and outputs produced under it. The absence of brand instructions in the local prompt must never be treated as evidence that no persistent design instruction affected the result.

### MULTI-DESTINATION EXPORT SURVIVAL RULE

> When a live creator project is exported or handed off to PDF, PPTX, HTML, code, or third-party creator platforms, each destination must be treated as a distinct derivative object. Preserve the source-project revision, transfer method, destination identity, resulting object ID, visual properties retained, structural properties retained, component semantics retained, editability changes, and any provenance signals lost or transformed. Direct "Send to" operations must be logged as artifact-transfer events even when no downloadable intermediate file exists.

## Eir'an state-flow addition

```text
DESIGN SYSTEM:
system ID
revision
source assets
extracted components
approved state
lock state

PROJECT INHERITANCE:
project ID
inherited rules
local overrides
AI mutations
human mutations

EXPORT / HANDOFF:
source revision
destination
format
destination object ID
transfer mechanism

SURVIVAL CHECK:
colors
typography
spacing
components
layout
editability
provenance
```

## Canonical Deep Drift requirement

> Preserve visual and procedural ancestry separately from local prompt history. When an organization-level design system influences a project, archive the source assets and code from which that system was derived, the system revision inherited by the project, local overrides, governance state, and every downstream export or handoff. A PDF, PPTX, HTML bundle, Canva object, Adobe object, or codebase must remain linked to the live creator-project revision from which it originated.

## Deep Drift principle

> **The brand guide is becoming executable.**

Operationally:

> **Archive the visual grammar before the export turns it into appearance alone.**

## Broader platform scan

The wider September 3 scan did not reveal a stronger same-day change in OpenAI memory, Skills, DOCX/PDF creation, or copy-paste behavior than the Deep Drift nodes already recorded. OpenAI's existing Work, Library, Google Drive, WebMCP, Skills/plugins, template, and artifact-generation changes remain current.

Anthropic's memory migration and cross-Cowork memory changes remain covered by MMBESF. The fresh Claude Design material is distinct because it concerns inherited visual/procedural state and heterogeneous export/handoff lineage.

Google Workspace's document-to-video and automation-flow changes remain covered by CMATF.

Microsoft's Copilot Pages, native Office generation, and harness orchestration remain covered by CPATF and OHSEF.

## Sources

1. Anthropic Help Center. **Set up your design system in Claude Design.** Current first-party documentation accessed 3 September 2026. Documents extraction of reusable components, colors, typography, and layout patterns from codebases, prototypes, slide decks, documents, PDFs, and brand assets, with automatic organization-wide project inheritance.  
   https://support.claude.com/en/articles/14604397-set-up-your-design-system-in-claude-design

2. Anthropic Help Center. **Get started with Claude Design.** Current first-party documentation accessed 3 September 2026. Documents conversational creation, inline and canvas editing, project versioning, `/design-sync`, Claude Code and MCP continuity, and export to PDF, PPTX, HTML, Canva, Adobe, Lovable, Replit, Vercel, Wix, and other destinations.  
   https://support.claude.com/en/articles/14604416-get-started-with-claude-design

3. Anthropic. **Getting Started with Claude Design.** Recorded event dated 3 September 2026. Anthropic describes importing a design system once so decks, documents, and graphics follow brand guidance and demonstrates a brief-to-final-export workflow.  
   https://www.anthropic.com/webinars/getting-started-with-claude-design

4. OpenAI Help Center. **ChatGPT Release Notes.** Current page checked 3 September 2026. No stronger same-day creator-workflow delta was found beyond the Deep Drift nodes already logged.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

5. Anthropic Help Center. **Release notes.** Current page checked 3 September 2026. Current September entries remain model releases; memory, Skills/plugin scanning, and other changes are covered by prior Deep Drift nodes.  
   https://support.claude.com/en/articles/12138966-release-notes

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository node was found for organization-level design-system extraction, automatic cross-project visual inheritance, multi-destination export survival, and Design-to-Code continuity as one provenance problem.  
**Relationship to prior nodes:** Extends TCAMF's template/invariant rules, CMATF's cross-modal derivation rules, CMPSF's provenance-survival rules, and CPATF's persistent-object rules. DSIEF specifically treats design systems as persistent inherited creator state and audits their survival across heterogeneous exports and code handoffs.  
**Freshness:** Freshly confirmed by Anthropic's first-party Claude Design event dated 3 September 2026 and current first-party product documentation.
