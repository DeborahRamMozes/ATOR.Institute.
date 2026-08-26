# Deep Drift Research Update

## Surface-Native Artifact Mutation Parity

**Research date:** Thursday, 27 August 2026  
**ĀTØR observation time:** 00:42:44 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. No brand-new 27 August launch was found in the target categories during this pass. One materially useful creator-workflow parity boundary was identified as new-to-log from current OpenAI Work documentation.

## Executive Summary

OpenAI's current ChatGPT Work documentation reveals an important asymmetry in how editable artifacts are handled across office ecosystems and execution surfaces:

- Native Google Docs, Sheets, and Slides can be created or edited in Work when the relevant Google Workspace app is enabled.
- Microsoft Excel can be inspected and updated directly through the ChatGPT desktop app using Codex with the ChatGPT for Excel add-in.
- PowerPoint is explicitly **not included in this Work desktop flow at launch**.
- Even within Excel, Codex may not use direct Excel control for every spreadsheet request.
- Cloud-created files may appear in Library, while local desktop outputs may remain local and not automatically appear on web or mobile.

This means "ChatGPT can create or edit office files" is not one capability. It is a family of different mutation contracts.

For Deep Drift Research:

```text
SAME ARTIFACT CATEGORY
!=
SAME NATIVE MUTATION PATH
!=
SAME TOOL SURFACE
!=
SAME PERSISTENCE TOPOLOGY
```

This creates a new benchmark family: **Surface-Native Artifact Mutation Parity (SNAMP)**.

## New Deep Drift Construct: Surface-Native Artifact Mutation Parity

**SNAMP** measures whether equivalent artifact operations preserve comparable functionality across different file ecosystems and execution surfaces.

The benchmark asks whether the system can mutate the native object, preserve object identity and structure, verify the result, retain the intended storage state, and continue the same workflow across surfaces.

## Artifact Mutation Topology

### Path A - Native Google Workspace mutation

```text
CHATGPT WORK
-> GOOGLE WORKSPACE APP
-> GOOGLE DOC / SHEET / SLIDE
-> APPROVAL
-> NATIVE EDIT
-> REVIEW IN GOOGLE WORKSPACE
```

### Path B - Microsoft Excel desktop mutation

```text
CHATGPT DESKTOP
-> CODEX
-> CHATGPT FOR EXCEL ADD-IN
-> OPEN WORKBOOK
-> DIRECT OR INDIRECT UPDATE
-> REVIEW FORMULAS / DATA / CHANGES
```

### Path C - Unsupported or non-native desktop flow

```text
CHATGPT WORK / DESKTOP
-> PRESENTATION REQUEST
-> POWERPOINT NATIVE CONTROL NOT INCLUDED AT LAUNCH
-> ALTERNATE GENERATION / EXPORT / MANUAL PATH
```

## New Failure Classes

- **Ecosystem Mutation Parity Gap** - equivalent edit requests produce materially different capabilities across Google Workspace, Excel, and PowerPoint.
- **Native-Control Fallback Drift** - a user expects in-app mutation but the system falls back to generation, indirect editing, or another tool route.
- **Artifact-Identity Split** - one workflow edits the original native object while another creates a derivative file, yet both are presented as editing.
- **Surface-Specific Structural Loss** - formulas, charts, slide masters, comments, object relationships, or collaborative state survive on one surface but degrade on another.
- **Tool-Route Opacity** - the final artifact is correct, but the Work/Codex/add-in/app/export route is unclear.
- **Cross-Surface Retrieval Drift** - cloud-created artifacts and local desktop outputs have different discoverability semantics.
- **Partial Native-Control Ambiguity** - Codex may not use direct Excel control for every spreadsheet request.
- **Presentation-Surface Capability Hole** - PowerPoint lacks the same desktop native mutation path available to Excel or connected Google Slides.

## Deep Drift Benchmark: Equivalent Artifact Mutation Test

Run the same conceptual edit across:

1. Google Sheet
2. Microsoft Excel workbook
3. Google Slides deck
4. Microsoft PowerPoint deck

Use an equivalent invariant-constrained instruction and measure original-object mutation, derivative creation, tool route, approval path, structural preservation, object identity, version visibility, save location, cross-device discoverability, and human repair minutes.

## Metrics

**Native Mutation Availability Ratio (NMAR)**

```text
artifact types with supported native mutation path
/
artifact types tested
```

**Equivalent Operation Parity Score (EOPS)**

```text
equivalent creator operations producing comparable mutation,
verification, and continuity semantics
/
all equivalent operations tested
```

**Native Object Identity Preservation (NOIP)**

```text
operations preserving intended original native object
/
all native-object edit requests
```

**Tool-Route Disclosure Fidelity (TRDF)**

```text
artifact mutations whose actual execution route is reconstructable
/
all artifact mutations
```

## Relation to Artifact-State Contract Fidelity

ASCF asks whether the system changed only what was requested. SNAMP asks whether that contract means the same thing across artifact ecosystems and surfaces.

```text
ARTIFACT RELIABILITY
=
CONTRACT FIDELITY
+
NATIVE MUTATION PARITY
+
STORAGE / RETRIEVAL CONTINUITY
+
TOOL-ROUTE PROVENANCE
```

## Broader Platform Scan

No newer 27 August first-party release was found during this pass in persistent memory, skills, mini-app builders, chat-to-document export, DOCX/PDF generation, or copy/paste/export fidelity.

Standing signals remain:

- OpenAI: webhook-triggered Work tasks, mutable Project memory, plugin packaging of skills/apps/templates, paste-format preservation, native Google Workspace editing, Excel desktop control through Codex + ChatGPT for Excel, and PowerPoint exclusion from that desktop flow at launch.
- Anthropic: shared memory across Claude chat and Cowork, Skills API, Files API, mounted memory, computer/browser use, and user-editable memory.
- Google: Sheets Canvas read-write mini-apps, Gemini interactive simulations/models, Notebook copying, Ask Gemini in Chat rollout, and structural spreadsheet migration improvements.
- Microsoft: Copilot Pages, Word/PDF conversion, Researcher, and Model Council / Critique workflows.

## Deep Drift Research Position

The creator stack is converging **surface by surface, artifact by artifact, connector by connector**.

Therefore:

```text
CAPABILITY CATEGORY
!=
CAPABILITY PARITY

NATIVE EDITING
!=
UNIVERSAL NATIVE EDITING

ONE CREATOR BRAND
!=
ONE MUTATION ARCHITECTURE
```

The stronger research question is: **which exact native object, on which exact surface, through which exact tool route, with which permission model, storage topology, and verification path?**

## Evidence Boundary

Platform capability claims are grounded in current first-party OpenAI Work documentation and fresh first-party checks of OpenAI, Anthropic, Google, and Microsoft sources. SNAMP, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, *Creating and editing documents, spreadsheets, and presentations with ChatGPT Work*, current as of 27 August 2026.
2. OpenAI Help Center, *ChatGPT Release Notes*, current as of 27 August 2026.
3. OpenAI Product Release Notes, current through 24 August 2026.
4. Anthropic Product Announcements, current through 25 August 2026.
5. Google Workspace Updates, August 2026 archive.
6. Microsoft Support, Microsoft 365 Copilot creator/research workflow documentation.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**