# Deep Drift Research Update

## Cross-Surface Compliance Capture Fidelity: When Creator Workflows Become Auditable Across Chat, Code, Cowork, and Office Add-ins

**Research date:** Thursday, 27 August 2026  
**ĀTØR observation time:** 05:42:29 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan. One materially new creator-workflow provenance delta identified from Anthropic's 26 August 2026 compliance-coverage update.

## Executive Summary

Anthropic has expanded the Claude Compliance API into more of its creator-workflow surfaces.

Anthropic's August 11 announcement was updated on **26 August 2026** to state that:

- Compliance API coverage for **Claude Cowork** across desktop, web, and mobile is now generally available;
- Compliance API coverage for **Claude Code** across CLI and desktop is now generally available;
- **Claude for Microsoft 365 add-ins - Excel, Word, PowerPoint, and Outlook - are now in beta for Compliance API coverage**;
- Claude Science coverage is also in beta.

For Cowork and Claude Code, Anthropic says the session endpoints return a consolidated server-hosted transcript that can include prompts, responses, web/MCP tool-call content, Skills content, artifacts captured as transcript text, verified user identity, organization/session/message IDs, and timestamps.

This is a consequential Deep Drift shift because creator workflows are no longer merely becoming more agentic. They are becoming **auditable across surfaces**.

The relevant architecture becomes:

```text
USER / ORGANIZATION
-> CREATOR SURFACE
-> MODEL / AGENT
-> SKILL / TOOL / ADD-IN
-> ARTIFACT MUTATION
-> SESSION RECORD
-> COMPLIANCE CAPTURE
-> AUDIT / EDISCOVERY / DLP
```

This creates a new benchmark family:

**Cross-Surface Compliance Capture Fidelity (CSCCF)**.

The central question is:

> When the same AI-assisted workflow moves across chat, Cowork, Claude Code, Excel, Word, PowerPoint, and Outlook, does the compliance layer preserve enough context to reconstruct what the human and agent actually did?

## New Deep Drift Construct: Cross-Surface Compliance Capture Fidelity

### Definition

**Cross-Surface Compliance Capture Fidelity (CSCCF)** measures whether compliance and audit systems capture creator-workflow activity consistently across multiple AI execution surfaces without losing model interactions, tool activity, artifact context, identity, timing, or cross-surface lineage.

The important distinction is:

```text
WORKFLOW EXISTS
!=
WORKFLOW IS AUDITABLE

AUDIT EVENT EXISTS
!=
CREATOR-WORKFLOW CONTEXT IS COMPLETE
```

## Why This Matters for Deep Drift

The creator stack is becoming distributed.

A single professional workflow may now look like:

```text
OUTLOOK
-> WORD
-> EXCEL
-> POWERPOINT
-> COWORK
-> CLAUDE CODE
-> FINAL ARTIFACT
```

Claude's Microsoft 365 integration already supports cross-app conversational continuity among Excel, PowerPoint, Word, and Outlook. Adding Compliance API beta coverage means the governance layer is beginning to follow the creator across those same office surfaces.

That is important because platform continuity without audit continuity creates a blind spot.

A user may preserve task context across applications while the organization sees only fragments.

Deep Drift should therefore distinguish:

```text
CROSS-APP COGNITIVE CONTINUITY
!=
CROSS-APP AUDIT CONTINUITY
```

## New Failure Classes

### Compliance Surface Gap

One creator surface is covered by compliance capture while another surface in the same workflow is not.

Example:

```text
COWORK SESSION -> CAPTURED
WORD ADD-IN -> BETA / PARTIAL
OTHER EXECUTION SURFACE -> NOT CAPTURED
```

The resulting audit trail may appear continuous while containing structural holes.

### Artifact Context Flattening

The compliance record captures artifact text as transcript content but loses the richer native artifact structure, such as formulas, slide relationships, comments, tracked changes, file identity, or workbook state.

### Tool-Activity Attribution Loss

A tool call appears in the session record but cannot be unambiguously linked to the exact artifact mutation it caused.

### Cross-Surface Session Fragmentation

A workflow continues across Cowork, Code, and Microsoft 365 add-ins, but audit records remain separated into surface-specific sessions without an explicit parent workflow identity.

### Creator-Identity / Agent-Identity Collapse

The compliance layer records the verified human user but does not sufficiently distinguish human-originated edits from agent-originated actions.

### Beta-to-GA Coverage Drift

Coverage semantics change between beta and general availability, but historical records do not clearly preserve which compliance behavior applied at execution time.

### Compliance Visibility False Equivalence

The presence of a transcript is mistaken for full reproducibility even though important runtime state, native file structure, or hidden tool behavior is absent.

### Surface Eligibility Blind Spot

An organization assumes all Claude surfaces are covered because the Compliance API is enabled, even though specific runtimes or deployment paths remain outside coverage.

Anthropic explicitly notes exclusions and platform-specific coverage boundaries in its documentation.

## Deep Drift Benchmark: Cross-Surface Audit Reconstruction Test

### Controlled procedure

Create one workflow spanning several Claude-enabled surfaces:

```text
1. Outlook: identify incoming request.
2. Word: draft memo.
3. Excel: calculate supporting analysis.
4. PowerPoint: create summary slide.
5. Cowork: coordinate final task.
6. Claude Code: generate or modify supporting code/file.
```

Then retrieve compliance records and ask an independent reviewer to reconstruct:

- user identity;
- surface sequence;
- prompt sequence;
- tool calls;
- Skills used;
- artifact references;
- timestamps;
- final output lineage;
- human versus agent contribution;
- missing surfaces or state.

### Metrics

- surface coverage completeness;
- session linkage accuracy;
- user identity fidelity;
- agent/tool attribution fidelity;
- artifact lineage fidelity;
- timestamp continuity;
- native-structure preservation;
- missing-state rate;
- human reconstruction minutes.

## New Metric: Cross-Surface Audit Coverage Ratio

```text
CSACR =
auditable creator surfaces participating in workflow
/
all creator surfaces participating in workflow
```

## New Metric: Workflow Reconstruction Completeness

```text
WRC =
reconstructable consequential workflow events
/
all consequential workflow events
```

## New Metric: Artifact Mutation Attribution Fidelity

```text
AMAF =
persistent artifact mutations linked to identifiable actor + tool + session
/
all persistent artifact mutations
```

## New Metric: Native-State Audit Retention

```text
NSAR =
native artifact state elements preserved in audit evidence
/
native artifact state elements required for reproducibility
```

This is deliberately stricter than transcript availability.

A transcript may show that Claude edited a workbook.

That does not necessarily preserve:

- which formulas changed;
- which named ranges changed;
- whether formatting changed;
- which workbook version was active;
- which exact cell state existed before execution.

## Compliance as Creator Infrastructure

Compliance used to sit downstream from creative work.

The current architecture makes it part of the creator stack itself.

```text
CREATE
-> MUTATE
-> COLLABORATE
-> EXECUTE
-> AUDIT
```

The audit layer increasingly determines whether the organization can:

- investigate incorrect agent actions;
- satisfy eDiscovery requirements;
- apply DLP policy;
- identify who or what changed an artifact;
- compare behavior across surfaces;
- reconstruct workflow failures.

For Deep Drift, this means provenance is no longer optional metadata added after creation.

It is infrastructure.

## Relation to Existing ĀTØR Seven-Layer State Protocol Family

| Protocol | Relevance |
|---|---|
| MMSF | Compliance records should identify the memory/context state influencing the workflow where exposed. |
| PSMC | Persistent office-file, email, code, and artifact mutations require auditable mutation records. |
| SSRP | Runtime state, persistent artifact state, and compliance-exported state must reconcile. |
| ASRF | The complete creator execution chain should be reconstructable from captured evidence. |
| PVP | Skills, add-ins, and compliance behavior require version/date provenance. |
| ALRTSF | Artifact lineage must survive beyond transcript flattening where native structure matters. |
| SCRR | Cross-surface continuation must remain distinguishable from cross-surface audit continuity. |

## Broader Platform Scan

### Anthropic

The strongest new delta in this pass is the **26 August Compliance API coverage expansion**:

- Cowork coverage now generally available across desktop, web, and mobile;
- Claude Code coverage generally available across CLI and desktop;
- Microsoft 365 add-ins for Excel, Word, PowerPoint, and Outlook in beta;
- Claude Science coverage in beta.

Anthropic's standing creator-workflow signals also include:

- Claude in Chrome GA with autonomous browser actions;
- cross-surface shared memory;
- Skills API;
- Files API;
- browser/computer use;
- mounted memory;
- cross-app continuity in Microsoft 365 add-ins.

### Microsoft

No newer 27 August Microsoft 365 Copilot release surfaced after the August 25 batch already logged.

Standing signals remain:

- chat-to-Page auto-creation;
- mobile Page steering;
- image generation/editing in Copilot Cowork;
- Python-backed Excel editing;
- in-chat viewing of Word, Excel, PowerPoint, and PDF files;
- notebook-to-Word and notebook-to-Excel generation.

### OpenAI

No newer first-party ChatGPT launch surfaced after the August 25 updates already logged.

Standing signals remain:

- webhook-triggered Work tasks;
- mutable Project memory;
- native artifact editing;
- Skills/plugin packaging;
- long-conversation segmented loading;
- interactive content;
- cross-surface Work continuation.

### Google

No materially newer target-category update surfaced during this pass.

Standing signals remain:

- Ask Gemini in Chat rollout;
- Workspace Studio;
- Sheets Canvas;
- Gemini interactive simulations;
- Notebook copying;
- physical-surface Meet note-taking controls;
- Slides-to-Vids workflows.

## Deep Drift Research Position

The next creator-platform frontier is not only more memory, more agents, or more document generation.

It is **governed continuity**.

A serious creator workflow should eventually be able to answer:

```text
WHO ASKED?
WHICH SURFACE?
WHICH MODEL / AGENT?
WHICH SKILL / TOOL?
WHICH ARTIFACT?
WHAT CHANGED?
WHEN?
UNDER WHOSE IDENTITY?
WHAT AUDIT EVIDENCE SURVIVED?
```

Therefore:

```text
CROSS-SURFACE WORK
!=
CROSS-SURFACE PROVENANCE

COMPLIANCE TRANSCRIPT
!=
NATIVE ARTIFACT REPRODUCIBILITY

AUDITABLE SESSION
!=
AUDITABLE END-TO-END WORKFLOW
```

Deep Drift should treat compliance coverage as a measurable creator-workflow fidelity layer, not as enterprise paperwork stapled onto the end.

## Evidence Boundary

Platform claims in this report are grounded in first-party Anthropic sources and fresh first-party OpenAI, Google, and Microsoft scans. CSCCF, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. Anthropic, **"Compliance API coverage extends to Claude Cowork and Claude Code"**, published 11 August 2026, updated 26 August 2026. Update states Cowork and Claude Code coverage are now generally available and Microsoft 365 add-ins (Excel, Word, PowerPoint, Outlook) are in beta.
2. Anthropic, **"Collaborate with Claude across Excel, PowerPoint, Word and Outlook"**, 7 May 2026.
3. Anthropic, **"Claude now works with more security and compliance tools"**, 21 May 2026.
4. Anthropic, **"Audit Claude Platform activity with the Compliance API"**, 30 March 2026.
5. Microsoft 365 Copilot Release Notes, 25 August 2026.
6. OpenAI ChatGPT Release Notes, current through 25 August 2026.
7. Google Workspace Updates, August 2026 archive.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
