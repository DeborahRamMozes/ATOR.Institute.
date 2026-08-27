# Deep Drift Research Update

## Evidence-Constrained Generative Artifact Fidelity

**Research date:** Thursday, 27 August 2026  
**ĀTØR observation time:** 17:42:27 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. One materially new same-day OpenAI creator-workflow pattern identified. No newer platform release displaced the latest memory/browser/export signals already logged.

## Executive Summary

OpenAI Academy published a new ChatGPT Work for Marketing resource on 27 August 2026 that makes an important creator-workflow architecture explicit.

The workflow does not begin from an unconstrained prompt. Work is instructed to combine:

- an approved campaign recommendation;
- a product and launch brief;
- a brand and claims guide;
- channel requirements;
- a review rubric;
- an editable concept-board template;
- current product assets;
- connected source systems and plugins.

It then produces three distinct creative directions inside a **new editable copy** of the concept-board template, while preserving product accuracy, approved claims, human approval gates, evidence links, and review criteria.

After the workflow has been tested and approved, OpenAI recommends converting the reusable review method into a Skill while explicitly excluding current campaign evidence, conclusions, selected concepts, product imagery, and campaign-specific rubric state.

For Deep Drift, this is a stronger pattern than generic artifact generation.

The relevant causal chain is:

```text
APPROVED SOURCE PACKAGE
-> GENERATIVE WORKFLOW
-> CONSTRAINT / CLAIM CHECKS
-> MULTIPLE CREATIVE CANDIDATES
-> RUBRIC EVALUATION
-> HUMAN REVIEW GATE
-> EDITABLE ARTIFACT
-> PROCEDURAL DISTILLATION INTO SKILL
```

This creates a new benchmark family:

**Evidence-Constrained Generative Artifact Fidelity (ECGAF)**

The central research question is:

> Can an AI generate genuinely novel creator artifacts while remaining inside explicit evidentiary, product, legal, brand, structural, and human-approval boundaries?

## New Deep Drift Construct: Evidence-Constrained Generative Artifact Fidelity

### Definition

**Evidence-Constrained Generative Artifact Fidelity (ECGAF)** measures whether an AI creator workflow can produce materially novel artifacts without exceeding the authority of its approved source package.

The benchmark separates two abilities that are usually collapsed into one:

```text
GENERATIVE DIVERGENCE
and
EVIDENCE / CONSTRAINT FIDELITY
```

A useful creator system needs both.

Too little divergence produces three copies of the same concept.

Too much divergence produces invention outside the approved truth boundary.

## The Generative Constraint Stack

The OpenAI marketing workflow defines several simultaneous constraint classes:

### Evidence constraints
- audience truths must cite approved sources;
- material claims must stop where source evidence stops;
- missing or stale evidence must remain visible;
- directional evidence must not be presented as causal proof.

### Product constraints
- supplied product assets must be used;
- product design and features must not be altered;
- compatibility claims must remain within approved facts.

### Brand and claims constraints
- only approved product claims may be used;
- brand guidance remains authoritative;
- legal and product-marketing approval still governs production use.

### Artifact constraints
- generate a new editable copy rather than overwriting the source template;
- preserve template usability;
- create three genuinely different creative directions;
- adapt each concept across required channels.

### Evaluation constraints
- score against a current review rubric;
- treat product accuracy and claims safety as pass/fail gates;
- surface tradeoffs, risks, uncertainty, and open questions;
- keep the recommendation as a draft for human review.

This is not ordinary text generation.

It is constrained stateful compilation.

## Core Deep Drift Distinction

```text
CREATIVE OUTPUT
!=
AUTHORIZED CREATIVE OUTPUT

DISTINCT CONCEPTS
!=
VALID CONCEPTS

SOURCE-GROUNDED
!=
NON-GENERATIVE

HUMAN REVIEW REQUIRED
!=
HUMAN MUST MANUALLY BUILD THE ARTIFACT
```

The important frontier is whether the model can remain inventive **inside** a structured evidence boundary.

## New Failure Classes

### Creative Convergence Collapse

The workflow is asked for multiple genuinely distinct directions, but produces superficial variations of one underlying concept.

### Evidence-Boundary Overreach

The artifact contains a claim, visual implication, product property, or audience assertion that extends beyond approved source evidence.

### Product-Representation Mutation

The generated visual or concept alters the supplied product design, dimensions, features, or compatibility in order to make the creative idea easier.

### Rubric Gaming

The workflow optimizes its own concepts to score well against the rubric without preserving the substantive intent of the review criteria.

### Citation-to-Creative Disconnect

Audience truths or product claims have citations, but the cited source does not actually support the creative inference attached to them.

### Human-Gate Compression

The generated recommendation is presented with enough confidence that the human review gate becomes ceremonial rather than substantive.

### Constraint Hierarchy Ambiguity

Brand, product, claims, channel, rubric, and source constraints conflict, but the system silently chooses one instead of surfacing the contradiction.

### Template Identity Loss

The system generates a visually plausible artifact but fails to preserve the intended editable template structure or creates a replacement that no longer functions as the approved working object.

### Review-Method Contamination

When the workflow is distilled into a Skill, campaign-specific evidence, imagery, decisions, scores, or selected concepts leak into reusable procedural state.

## Deep Drift Benchmark: Controlled Creative Divergence Test

### Controlled setup

Provide:

```text
SOURCE A: approved campaign direction
SOURCE B: approved customer insight
SOURCE C: product specification
SOURCE D: brand + claims guide
SOURCE E: channel requirements
SOURCE F: review rubric
SOURCE G: editable concept-board template
SOURCE H: current product assets
```

Ask the system for three distinct campaign directions.

Require each direction to contain:

- one audience truth;
- one core idea;
- one visual language;
- one hero execution;
- multiple channel adaptations;
- one tradeoff;
- one risk;
- one open question;
- source attribution;
- rubric score;
- approval boundary.

### Test variants

1. Introduce an attractive but unsupported product claim.
2. Introduce conflicting source guidance.
3. Use a rubric that rewards performance but penalizes claims risk.
4. Provide two visually similar product assets.
5. Remove one required source.
6. Change the rubric between runs.
7. Convert the reviewed workflow into a Skill and run it on a different campaign.

## New Metrics

### Constraint Survival Rate

```text
CSR =
explicit constraints preserved in final artifact
/
all explicit constraints
```

### Generative Divergence Score

```text
GDS =
meaningfully distinct concept dimensions
/
all required concept dimensions
```

The score should examine actual semantic and visual difference, not wording variation.

### Evidence-Boundary Violation Rate

```text
EBVR =
unsupported or overextended claims / implications
/
all material claims and implications
```

### Human-Gate Integrity

```text
HGI =
decisions requiring human approval
that remain visibly unresolved until approval
/
all decisions requiring human approval
```

### Reusable-Method Purity

```text
RMP =
reusable procedural state preserved
without campaign-specific contamination
/
all required reusable procedure elements
```

## Why This Matters for Deep Drift

Much current AI evaluation still rewards either:

1. faithfulness to source; or
2. creativity.

Creator workflows need both simultaneously.

The deeper problem is a controlled divergence problem:

```text
SOURCE PACKAGE
-> MANY POSSIBLE VALID ARTIFACTS
```

The system should be free to generate within the valid region while refusing to cross the evidence, product, brand, legal, or approval boundary.

This gives Deep Drift a more useful model:

```text
VALID GENERATIVE SPACE
=
CREATIVE POSSIBILITY
-
PROHIBITED / UNSUPPORTED STATE
```

A strong creator agent should explore that space rather than merely paraphrase the source package.

## From Artifact Workflow to Reusable Skill

OpenAI's new marketing guide also sharpens the separation between **artifact state** and **procedural state**.

The recommended Skill retains:

- required-input checklist;
- source-review procedure;
- claims-check procedure;
- multi-direction concept-board structure;
- channel-adaptation requirements;
- process for applying a current approved rubric;
- source-citation rules;
- uncertainty rules;
- human-approval rules.

It must not retain:

- campaign-specific customer insights;
- current performance data;
- current campaign recommendation;
- selected concept;
- sample copy;
- scores;
- product imagery;
- brand-specific claims;
- campaign-specific rubric criteria.

This is a concrete example of:

```text
ARTIFACT-SPECIFIC STATE
!=
REUSABLE PROCEDURAL STATE
```

and reinforces the previously logged Workflow Distillation Fidelity research.

## New Construct: Constraint-Carrying Procedural State

### Definition

**Constraint-Carrying Procedural State (CCPS)** is reusable workflow state that preserves the rules for validating future evidence and artifacts without preserving the evidence or decision from the original run.

A strong reusable creator Skill should carry:

```text
HOW TO CHECK
HOW TO STRUCTURE
HOW TO STOP
HOW TO ESCALATE
HOW TO REQUIRE APPROVAL
```

not:

```text
WHAT THE LAST CAMPAIGN DECIDED
```

## Scheduled Creator Workflow Implication

The same OpenAI marketing workflow also schedules a recurring campaign-learning brief.

The scheduled task is instructed to:

- use the latest approved source files;
- apply the latest approved measurement plan;
- verify source presence and data cutoff;
- stop and create an exception note if required evidence is missing or stale;
- create a new dated editable artifact;
- preserve human review before publishing.

This yields another important Deep Drift principle:

```text
AUTOMATION SHOULD BE ABLE TO REFUSE TO PRODUCE
A FALSELY COMPLETE ARTIFACT
```

A recurring workflow that always returns a polished output is not necessarily more reliable.

Sometimes the correct artifact is an exception report.

## New Failure Class: Completion Bias Under Missing Evidence

**Completion Bias Under Missing Evidence** occurs when a scheduled or agentic creator workflow produces a confident artifact because the workflow is optimized to complete, even though required evidence is absent, stale, contradictory, or outside the approved window.

Deep Drift should score explicit refusal or exception generation as a successful outcome when the evidence contract is not satisfied.

## Cross-Platform Context

### OpenAI

The 27 August 2026 marketing workflow is the newest same-day material identified in this scan.

It reinforces current OpenAI creator-stack patterns:

- Work as a long-running artifact-producing surface;
- connected plugins and approved source systems;
- Projects as shared context;
- editable Sheets/Docs/Slides artifacts;
- scheduled workflows;
- reusable Skills;
- explicit source/claim/approval boundaries.

### Anthropic

No first-party release newer than the 26 August Claude browser updates surfaced in this scan.

The strongest current Anthropic signals remain:

- Claude in Chrome with autonomous browser actions and safety classification;
- Cowork built-in browser;
- shared memory across Chat and Cowork;
- Skills API;
- Files API;
- mounted memory and session observability.

### Microsoft

No release batch newer than 25 August surfaced.

Recent creator-workflow signals remain:

- Copilot Pages and mobile steering;
- multi-artifact Notebook generation;
- multimodal Capture;
- Python-backed Excel editing;
- unified Work IQ context switching;
- inline artifact inspection.

### Google

No materially newer 27 August Workspace launch surfaced.

Standing signals remain:

- Workspace Studio agentic automation;
- Sheets Canvas;
- Gemini interactive simulations;
- Ask Gemini in Chat;
- Notebook copying;
- Slides-to-Vids workflows;
- physical meeting capture controls.

## Deep Drift Research Position

The creator frontier is no longer:

```text
CAN AI GENERATE?
```

It is:

```text
CAN AI GENERATE
WITHOUT LEAVING
THE VALID EVIDENTIARY SPACE?
```

The hard part is not producing three concepts.

The hard part is producing three genuinely different concepts while simultaneously preserving:

- product truth;
- source truth;
- brand rules;
- channel rules;
- legal/claims boundaries;
- artifact structure;
- uncertainty;
- human authority.

That is the difference between generative assistance and governed creative production.

## Evidence Boundary

Platform facts in this report are grounded in the OpenAI Academy **ChatGPT Work for marketing teams** resource published 27 August 2026, plus fresh first-party checks of OpenAI, Anthropic, Microsoft, and Google sources. ECGAF, CCPS, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Academy, **ChatGPT Work for marketing teams: Webinar Resource Guide**, 27 August 2026: https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-work-for-marketing-teams-webinar-resource-guide-2026-08-26
2. OpenAI Academy, **ChatGPT Work for business operations teams: Webinar Resource Guide**, updated 27 August 2026: https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-work-for-business-operations-teams-webinar-resource-guide-2026-08-26
3. OpenAI Help Center, **Creating and editing documents, spreadsheets, and presentations with ChatGPT Work**, current as of 27 August 2026: https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work
4. OpenAI Help Center, **Skills in ChatGPT**, current as of 27 August 2026: https://help.openai.com/en/articles/20001066
5. Anthropic, **Claude in Chrome is generally available**, 26 August 2026: https://claude.com/blog/claude-in-chrome-generally-available
6. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through 25 August 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
7. Google Workspace Updates, August 2026 archive: https://workspaceupdates.googleblog.com/2026/08/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
