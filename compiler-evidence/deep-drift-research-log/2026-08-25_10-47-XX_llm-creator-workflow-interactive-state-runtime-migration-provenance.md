# Deep Drift Research Update

## LLM Creator Workflow Convergence: Memory, Skills, Mini-Apps, Interactive Responses, Chat-to-Document Export, DOCX/PDF Generation, Copy-Paste/Export Fidelity, and Runtime Provenance

**Research date:** Tuesday, 25 August 2026  
**ATØR observation time:** 10:47 WIB / 03:47 UTC  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Update Watch  
**Status:** Fresh first-party-source scan with two material deltas.

## Executive Summary

Two current changes materially extend the Deep Drift creator-workflow map.

First, Google announced on 24 August 2026 that Gemini can generate interactive simulations and models directly inside chat. Responses can contain functional 3D models, simulations, grids, and tables that users manipulate after generation. The "answer" therefore becomes a mutable computational object rather than a static artifact.

Second, OpenAI deprecated the `codex mcp-server` command on 24 August 2026 and directs users toward the Codex app server instead. Users who want Codex from Claude Code are directed to the Codex plugin for Claude Code. This is a runtime-surface migration: the visible task may remain constant while the execution route changes.

These changes strengthen one Deep Drift conclusion:

```text
SAME TASK
!= SAME RUNTIME

MODEL-GENERATED STATE
!= USER-MANIPULATED STATE

VISIBLE ARTIFACT
!= COMPLETE CAUSAL HISTORY
```

The creator-AI reliability object is now the whole workflow, not the final answer.

## Fresh Delta 1: Gemini Interactive Simulations and Models

Google Workspace announced on 24 August 2026 that the Gemini app can generate custom interactive visualizations directly inside chat.

Examples include:

- rotating and zooming a 3D DNA structure
- observing a pendulum exchange energy
- exploring cash-burn behavior through an interactive table
- interactive grids and simulations generated for a specific prompt

The feature is available now to Rapid Release and Scheduled Release domains where Gemini is enabled.

### Why this matters

The generated response now has state.

```text
PROMPT
-> GENERATED INTERACTIVE OBJECT
-> USER MANIPULATION
-> CHANGED STATE
-> INTERPRETATION
```

A user's conclusion may depend not only on model output, but also on what the user changed after generation.

This creates a new Deep Drift benchmark:

### Interactive Response State Fidelity

**Definition:** the degree to which the state and causal history of an interactive AI-generated response survive manipulation, revisit, sharing, export, and downstream reuse.

Core test:

```text
GENERATE
-> RECORD INITIAL STATE
-> MANIPULATE
-> RECORD FINAL STATE
-> LEAVE CHAT
-> REOPEN
-> SHARE
-> EXPORT
-> RE-IMPORT
```

Measure:

- initial-state recovery
- final-state recovery
- parameter survival
- interaction-history survival
- simulation-logic survival
- visual-state survival
- editability
- share-link fidelity
- PDF/export fidelity
- screenshot fidelity
- semantic conclusion drift
- human repair minutes

Failure classes:

- State Reset Drift
- Interaction-History Loss
- Static-Export Collapse
- Parameter Provenance Loss
- Regeneration Ambiguity

## Fresh Delta 2: Codex Runtime-Surface Migration

OpenAI's release notes dated 24 August 2026 deprecate the `codex mcp-server` command.

The replacement path is the Codex app server. For Claude Code interoperability, OpenAI directs users to the Codex plugin for Claude Code.

This matters because execution architecture can change even when:

- the human intent is unchanged
- the visible task name is unchanged
- the source repository is unchanged
- the resulting artifact looks similar

The causal path changes underneath the user.

Deep Drift construct:

### Runtime-Surface Migration Fidelity

**Definition:** the degree to which behavior, permissions, state, provenance, and output remain reconstructable when a workflow moves from one execution surface to another.

Core comparison:

```text
OLD SURFACE
-> TASK
-> OUTPUT A

NEW SURFACE
-> SAME TASK
-> OUTPUT B
```

Measure:

- tool availability
- permission behavior
- routing behavior
- latency
- environment state
- audit visibility
- tool-call history
- artifact differences
- human repair minutes
- migration failures

Related constructs:

- Tool-Routing Provenance
- Migration Audit Discontinuity
- Runtime Governance Continuity

The critical Deep Drift question is not simply whether the replacement works.

It is:

> Can an independent reviewer reconstruct that the workflow changed execution surface and determine which version of that surface produced the result?

## OpenAI Standing Signals

The broader OpenAI creator-workflow trend remains active:

- mutable Project memory
- Drive files browsable from Library
- rich paste preserving headings, bold, links, and lists
- pastes over 10k characters becoming attachment objects
- Site co-editing with live data, saved versions, and publishing
- Apple Messages as an executable action surface with approval controls
- GitLab-triggered Codex workflows
- interactive content that can appear progressively before generation is fully complete

These support:

- Memory Boundary Transition Fidelity
- Context-Surface Equivalence
- Ingestion-Channel Drift
- Approval-State Continuity
- Collaborative Artifact Provenance
- Progressive Artifact-State Fidelity

## Anthropic Standing Signals

Anthropic's 20 August production-agent stack remains one of the strongest creator-workflow architectures currently visible.

Computer use, browser use, Skills API, and Files API are presented together as a system in which agents can:

- operate software
- load versioned skills
- reuse persistent source files
- return finished files

Causal chain:

```text
SOURCE FILE STATE
-> SKILL ID + VERSION
-> MODEL / AGENT
-> TOOL PERMISSIONS
-> BROWSER / COMPUTER ENVIRONMENT
-> EXTERNAL APPLICATION STATE
-> FINISHED ARTIFACT
```

This supports:

- Procedural-Version Provenance
- Persistent-File State Continuity
- Execution-State Provenance
- Agent-to-Artifact Provenance
- Skill Supply-Chain Governance

## Google Standing Signals

Google now provides several clean Deep Drift test surfaces:

### Sheets Canvas

Natural-language-built, fully read-write mini-apps over spreadsheet state.

```text
SHEET
<-> CANVAS
```

This supports Bidirectional State Fidelity.

### Gemini Notebook copying

Copied notebooks can preserve sources and generated Studio content while personal chat history and notes do not necessarily transfer, and copies stop syncing with originals.

This yields:

```text
ARTIFACT PORTABILITY
!= COGNITIVE-HISTORY PORTABILITY
!= SYNCHRONIZATION CONTINUITY
```

### Direct file generation

Gemini can directly generate Google Docs, Sheets, Slides, PDF, DOCX, XLSX, CSV, RTF, Markdown, and other file types from chat.

The useful benchmark is not "can it generate a file?"

It is:

### Artifact Round-Trip Fidelity

```text
CHAT
-> GENERATED DOCX / PDF
-> HUMAN EDIT
-> REUPLOAD
-> AI REVISION
-> EXPORT
-> OPEN ELSEWHERE
-> RE-IMPORT
```

Measure:

- heading hierarchy
- tables
- citations
- hyperlinks
- styles
- comments
- tracked changes where available
- images and captions
- metadata
- editability
- semantic drift
- layout repair
- human repair minutes

## Microsoft Standing Signals

Microsoft's Work IQ APIs explicitly expose:

- Chat
- Context
- Tools
- Workspaces

Workspaces can store files, memory, progress, intermediate state, and outputs during agent work.

This directly supports the Deep Drift whole-stack equation:

```text
DELIVERED SYSTEM BEHAVIOR
=
MODEL
+ MEMORY
+ CONTEXT
+ PROCEDURE
+ TOOLING
+ PERMISSION
+ RUNTIME
+ INTERMEDIATE STATE
+ ARTIFACT STATE
+ PROVENANCE
```

Microsoft's broader creator workflow also includes app-native Word, Excel, and PowerPoint agents, chat-first document creation, and interactive app experiences.

## Updated Deep Drift Benchmark Set

| Benchmark | Core question |
|---|---|
| Interactive Response State Fidelity | Does an interactive response preserve state and interaction history across revisit, share, and export? |
| Runtime-Surface Migration Fidelity | Does a workflow remain behaviorally and causally reconstructable after the execution surface changes? |
| Tool-Routing Provenance | Can the exact tool/plugin/server route that produced the result be identified later? |
| Progressive Artifact-State Fidelity | Can the system distinguish partial, observed, manipulated, and final artifact states? |
| Artifact Round-Trip Fidelity | Does structure and editability survive generate-edit-reupload-revise-export cycles? |
| Procedural-Version Provenance | Which exact skill/procedure version materially caused the result? |
| Persistent-File State Continuity | Does a reused file reference remain the same causal source over time? |
| Memory Boundary Transition Fidelity | What changes when memory policy changes inside the same visible project? |
| Context-Surface Equivalence | Does the same source behave equivalently across upload, Library, Drive, Project, paste, or attachment? |
| Ingestion-Channel Drift | Does changing the ingestion object alter retrieval, reasoning, citation, or artifact output? |
| Bidirectional State Fidelity | Can mutation paths be reconstructed across linked source and interface surfaces? |
| Human Orchestration Burden | How much routing, verification, conversion, and repair still falls back onto the human? |

## Deep Drift Research Position

The creator-AI competitive unit is shifting from model quality toward:

**workflow orchestration + state continuity + reconstructable provenance**

A useful Deep Drift equation is:

```text
DELIVERED SYSTEM INTELLIGENCE
=
MODEL
+ MEMORY
+ CONTEXT
+ PROCEDURE
+ TOOL ROUTE
+ PERMISSION
+ RUNTIME
+ INTERACTIVE STATE
+ ARTIFACT STATE
+ PROVENANCE
```

The most revealing failure class remains:

**successful output with incomplete causal history.**

A mini-app works.  
A simulation moves.  
A document opens.  
A repository changes.  
A new runtime replaces an old one.

And afterward the system may no longer reveal:

- which interaction state mattered
- which runtime route executed
- which skill version ran
- which memory boundary applied
- which permission state authorized the action
- which human manipulation changed the final result

That is not cosmetic metadata loss.

It is a reproducibility, accountability, and scientific-evidence failure.

## Evidence Boundary

Platform capability claims in this report are grounded in first-party product and documentation sources. Deep Drift benchmark names, causal interpretations, and experimental proposals are ĀTØR Institute research constructs and are not claims made by OpenAI, Anthropic, Google, or Microsoft.

## Primary Sources

1. OpenAI Release Notes, 24 August 2026: https://openai.com/products/release-notes/
2. Google Workspace Updates, "Generate interactive simulations and models in the Gemini app," 24 August 2026: https://workspaceupdates.googleblog.com/2026/08/generate-interactive-simulations-and-models-in-the-Gemini-app.html
3. Google Workspace Updates, "Use Sheets canvas to visualize data in custom, interactive mini-apps," 13 August 2026: https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html
4. Anthropic, "Build production agents with computer use, the Skills API, and the Files API," 20 August 2026: https://claude.com/blog/computer-use-skills-api-files-api
5. Microsoft 365 Blog, "Announcing the new Work IQ APIs," 2 June 2026: https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/announcing-the-new-work-iq-apis/
6. Microsoft 365 Blog, "Powering Frontier Transformation with Copilot and agents," 9 March 2026: https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**