# Deep Drift Research Update

## Selective Transcript Extraction and Procedural Trust-Boundary Fidelity

**Research date:** Friday, 28 August 2026  
**Observation time:** 18:44:59 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. One unlogged OpenAI copy/export capability and one same-release procedural trust-boundary fix were identified as materially relevant. No newer category-displacing release was found for memory, mini-app builders, DOCX/PDF generation, or general Skills.

## Executive Summary

OpenAI's Codex CLI 0.150.0, released 26 August 2026, added a selective `/copy` interface that lets users choose among:

- a full response;
- an individual code block;
- a blockquote.

The same release fixed two procedural-boundary problems:

- untrusted projects no longer supply project-level `AGENTS.md` instructions;
- managed deny-read rules remain enforced after permission changes.

These look like unrelated UI and security changes. For Deep Drift Research they belong to the same deeper problem: **what state is allowed to cross a boundary**.

```text
AGENT RESPONSE
-> SELECTION BOUNDARY
-> CLIPBOARD / EXTERNAL DOCUMENT

PROJECT STATE
-> TRUST BOUNDARY
-> AGENT INSTRUCTION SET
```

The first controls **which output leaves the agent transcript**. The second controls **which procedural instruction is allowed to enter the agent's behavior**.

This creates a new benchmark family:

**Selective Transcript Extraction Fidelity (STEF)**

with a paired construct:

**Procedural Trust-Boundary Integrity (PTBI)**.

The central research question is:

> When humans selectively extract AI output while the agent selectively admits procedural instructions, can both directions preserve the intended semantic and authority boundaries without hidden context loss or hidden instruction gain?

## New Deep Drift Construct: Selective Transcript Extraction Fidelity

### Definition

**Selective Transcript Extraction Fidelity (STEF)** measures whether a user can extract exactly the intended semantic unit from an AI response without accidental omission, contamination, formatting loss, or contextual distortion.

The relevant chain is:

```text
MODEL RESPONSE
-> RESPONSE STRUCTURE
-> COPY TARGET
-> CLIPBOARD
-> DESTINATION
-> HUMAN REUSE
```

A copy operation is therefore not trivial serialization.

It is a **state projection** from a structured conversational object into another surface.

## Core Distinction

```text
COPIED
!=
COMPLETE

COMPLETE
!=
CONTEXTUALLY SUFFICIENT

CODE BLOCK COPIED
!=
CODE DEPENDENCIES COPIED

BLOCKQUOTE COPIED
!=
SOURCE / ATTRIBUTION COPIED
```

A code block can be copied perfectly and still be unusable because the preceding explanation contained filenames, environment assumptions, package versions, or execution order.

A blockquote can be copied perfectly and still become misleading when separated from its citation or qualification.

## Why the `/copy` Picker Matters

Before selective extraction, users often resort to:

```text
DRAG SELECT
-> COPY
-> PASTE
-> CLEAN UP
```

This is vulnerable to:

- missed opening or closing characters;
- accidental UI text;
- dropped Markdown fences;
- partial citations;
- hidden line breaks;
- incorrect code-block boundaries;
- selection mistakes in long responses.

The new picker reduces one class of manual extraction error by letting the interface expose semantic units directly.

That is useful.

But it also creates a stronger illusion that the selected unit is self-contained.

Deep Drift should therefore test **semantic closure**, not merely clipboard accuracy.

## New Failure Classes for Selective Copy

### Block Extraction Dependency Loss

A code block is copied exactly, but required context outside the block is omitted.

### Quote Attribution Detachment

A blockquote is extracted without nearby attribution, evidence status, or citation context.

### Response-Level Overcapture

The full response is copied when only one validated component was intended, carrying speculative or obsolete material into a downstream document.

### Structural Formatting Drift

Markdown, indentation, line endings, lists, or code fences change after the clipboard transition.

### Multi-Block Ambiguity

The user selects the wrong code block among several visually similar blocks.

### Copy-to-Destination Semantic Drift

The clipboard content is correct, but the destination app interprets formatting or characters differently.

### Selective Extraction Provenance Loss

The copied fragment loses the identity of the original response, task, model, time, or surrounding evidence.

## New Metric: Exact Extraction Accuracy

```text
EEA =
selected units whose pasted content exactly matches
intended transcript unit
/
all controlled copy operations
```

## New Metric: Semantic Closure Rate

```text
SCR =
copied units that remain interpretable and executable
without omitted required context
/
all copied units
```

## New Metric: Attribution Retention Rate

```text
ARR =
quoted or evidence-bearing fragments retaining
required source / attribution context after copy
/
all tested fragments
```

## New Deep Drift Construct: Procedural Trust-Boundary Integrity

### Definition

**Procedural Trust-Boundary Integrity (PTBI)** measures whether agent instructions are admitted or rejected according to the trust state of the project, workspace, or source that supplies them.

OpenAI's same Codex CLI release states that untrusted projects no longer supply project-level `AGENTS.md` instructions.

That means the effective procedural chain must now distinguish:

```text
PROJECT FILE EXISTS
!=
PROJECT INSTRUCTION TRUSTED
```

and:

```text
INSTRUCTION DISCOVERED
!=
INSTRUCTION ADMITTED
```

This is critical because project-level instruction files can shape how an agent reads, edits, tests, formats, or interprets repository work.

## Managed Deny-Read Persistence

The release also fixes a case where managed deny-read rules must remain enforced after permission changes.

This creates another important distinction:

```text
PERMISSION STATE CHANGED
!=
MANAGED DENIAL DISAPPEARS
```

In a reliable control plane, a higher-order managed denial should remain effective even when lower-level permissions change.

Deep Drift should model this as a persistent negative constraint.

## New Failure Classes for Procedural Trust

### Untrusted Instruction Injection

An untrusted repository changes agent behavior through a local procedural file.

### Trust-State Confusion

The interface marks a project untrusted, but some instruction-bearing files are still admitted.

### Managed Denial Evaporation

A deny-read policy is lost after a permission-mode transition.

### Instruction Provenance Obscurity

The user cannot reconstruct which instruction file, workspace policy, Skill, or system rule governed a particular action.

### Procedural Boundary Rehydration

A previously rejected instruction becomes active after reopen, resume, permission change, or task migration without an explicit trust transition.

### Cross-Surface Trust Divergence

The same project is treated as trusted in one Codex surface and untrusted in another.

## Deep Drift Benchmark: Bidirectional Boundary Test

The same experiment should test **output leaving** and **instructions entering**.

### Controlled response

Generate one response containing:

```text
1. prose explanation
2. code block A with all dependencies inside
3. code block B requiring setup described outside the block
4. blockquote with attribution immediately after it
5. blockquote with qualification before it
6. one citation-dependent factual statement
```

Use `/copy` to extract each semantic unit and paste into:

- plain text;
- Markdown editor;
- terminal;
- document editor.

Measure exactness and semantic closure.

### Controlled project

Create:

```text
TRUSTED PROJECT T
UNTRUSTED PROJECT U
```

Both contain a project-level `AGENTS.md` that attempts to change agent behavior.

Then:

1. verify T can supply expected project instructions;
2. verify U cannot supply project-level instructions;
3. apply a managed deny-read rule;
4. change permission modes;
5. reopen or resume the task;
6. test whether the deny-read rule persists;
7. compare web, desktop, terminal, and remote surfaces where applicable.

## New Metrics

### Trust Admission Accuracy

```text
TAA =
instruction sources admitted or rejected
according to intended trust state
/
all tested instruction sources
```

### Managed Denial Persistence Rate

```text
MDPR =
managed deny rules surviving permission-state changes
/
all controlled permission transitions
```

### Procedural Provenance Reconstruction

```text
PPR =
actions whose effective instruction stack
can be reconstructed after execution
/
all controlled agent actions
```

## Why These Two Changes Belong Together

The modern AI workflow has two directional filters:

```text
INPUT BOUNDARY:
WHAT MAY INSTRUCT THE AGENT?

OUTPUT BOUNDARY:
WHAT MAY LEAVE THE AGENT RESPONSE?
```

Most UX research studies them separately.

Deep Drift should not.

A creator system can have perfect output copying while accepting poisoned local instructions.

It can also have perfect trust boundaries while forcing humans to manually select and damage the output during extraction.

Reliability therefore needs both:

```text
PROCEDURAL INGRESS FIDELITY
+
ARTIFACT EGRESS FIDELITY
```

## Relation to Chat-to-Document Export

The `/copy` picker is not a DOCX or PDF generator.

But it is part of the same creator pipeline:

```text
CHAT
-> SELECT RESPONSE UNIT
-> COPY
-> DOCUMENT / CODEBASE / NOTE
```

Many real workflows still reach Word, Markdown, email, GitHub, or a CMS through clipboard transitions rather than first-class export.

That means clipboard extraction remains a valid research surface even in supposedly advanced agent platforms.

The embarrassing old clipboard, like bureaucracy and dust, refuses to die.

## Relation to Skills and Memory

The trust-boundary fix also matters for Skills and persistent procedures.

A Skill or reusable instruction should be distinguishable from an untrusted project-local instruction.

Deep Drift should maintain separate procedural lineage fields:

```text
SYSTEM POLICY
WORKSPACE POLICY
MANAGED POLICY
USER SKILL
PROJECT INSTRUCTION
TASK-LOCAL INSTRUCTION
TRUST STATE
```

Memory should not silently convert a rejected project instruction into future accepted behavior.

A strong test therefore repeats the untrusted-project scenario after session continuation and memory-assisted re-entry.

## New State Card: Boundary Transfer State

```text
BOUNDARY_TRANSFER_STATE_CARD

run_id:
project_id:
project_trust_state:
managed_denies:
instruction_sources_discovered:
instruction_sources_admitted:
instruction_sources_rejected:
response_id:
copy_target_type:
copy_target_index:
clipboard_hash_if_available:
destination_surface:
format_preserved:
context_dependencies_outside_selection:
provenance_attached:
observed_at:
unknown_fields:
```

## Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing release found beyond already logged Temporary Chat and shared-memory changes. |
| Skills / procedures | **Material new-to-log boundary:** untrusted projects no longer contribute project-level `AGENTS.md` instructions; managed deny-read rules persist after permission changes. |
| Mini-app builders | No newer launch found beyond previously logged Sites/Canvas changes. |
| Chat-to-document / copy-export | **Material new-to-log capability:** Codex CLI `/copy` now lets users choose full responses, individual code blocks, or blockquotes. |
| DOCX / PDF generation | No newer standalone generation release found. |
| Copy-paste / export fixes | **Directly relevant update:** semantic-unit copy picker reduces manual selection error but introduces semantic-closure questions. |
| Broader creator workflow | Agent platforms are formalizing both procedural ingress boundaries and artifact egress boundaries. |

## Cross-Platform Context

### OpenAI

The new-to-log focus is Codex CLI 0.150.0 from 26 August 2026:

- selective `/copy` picker for full responses, code blocks, and blockquotes;
- untrusted projects no longer supply project-level `AGENTS.md` instructions;
- managed deny-read rules remain enforced after permission changes.

A 27 August maintenance release, Codex CLI 0.150.1, adjusts remote compaction so retained images count toward token budgeting and older images are trimmed as needed. This is relevant to long-run multimodal state management but not strong enough to displace the present research focus.

### Anthropic

Claude Code 2.1.250 on 28 August 2026 is described as bug fixes and reliability improvements without enough public detail to establish a distinct creator-workflow construct in this pass.

### Google

No newer category-displacing Workspace creator release surfaced in this scan.

### Microsoft

No newer category-displacing Copilot creator release surfaced beyond the 25 August set already logged.

## Deep Drift Research Position

A creator agent is increasingly surrounded by boundaries rather than a single prompt box.

It must decide:

```text
WHAT MAY ENTER AS INSTRUCTION?
WHAT MAY BE READ?
WHAT MAY BE COPIED OUT?
WHAT CONTEXT SURVIVES THE TRANSFER?
```

Therefore:

```text
SELECTABLE
!=
SELF-CONTAINED

DISCOVERABLE INSTRUCTION
!=
TRUSTED INSTRUCTION

PERMISSION CHANGE
!=
MANAGED DENIAL REMOVAL

COPY SUCCESS
!=
PROVENANCE SUCCESS
```

The stronger Deep Drift proposition is:

> **Creator reliability depends on bidirectional boundary fidelity: procedural state must enter only when authorized, and output state must leave without losing the context required to remain true, executable, or attributable.**

## Evidence Boundary

Platform facts in this report are grounded in OpenAI's first-party ChatGPT & Codex changelog for Codex CLI 0.150.0 and 0.150.1, with fresh first-party OpenAI, Anthropic, Google Workspace, and Microsoft release-source scans used to verify category recency. STEF, PTBI, failure classes, metrics, benchmark procedures, and state-card fields are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI, **ChatGPT & Codex changelog**, Codex CLI 0.150.0, 26 August 2026: https://learn.chatgpt.com/docs/changelog
2. OpenAI, **ChatGPT & Codex changelog**, Codex CLI 0.150.1, 27 August 2026: https://learn.chatgpt.com/docs/changelog
3. OpenAI, **What's new**, August 24-28, 2026: https://learn.chatgpt.com/docs/whats-new
4. Anthropic, **Claude Code changelog**, 28 August 2026: https://code.claude.com/docs/en/changelog
5. Google Workspace Updates, August 2026: https://workspaceupdates.googleblog.com/2026/08/
6. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through 25 August 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
