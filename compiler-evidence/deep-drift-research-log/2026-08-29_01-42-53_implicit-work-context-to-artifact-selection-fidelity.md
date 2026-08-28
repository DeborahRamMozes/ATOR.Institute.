# Deep Drift Research Update

## Implicit Work-Context-to-Artifact Selection Fidelity

**Research date:** Saturday, 29 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. One materially distinct creator-workflow architecture was isolated from Microsoft's current Copilot release set. No newer category-displacing release was found for consumer memory, general Skills, mini-app builders, standalone DOCX/PDF generation, or copy/export fixes in this pass.

## Executive Summary

Microsoft 365 Copilot now supports creating PowerPoint presentations in Agent Mode using **Work IQ**, with Copilot automatically gathering relevant **files, meetings, and emails** rather than requiring the user to manually locate and attach every source.

Microsoft also documents two adjacent creator-workflow changes:

- cited Word, Excel, PowerPoint, and PDF files can open directly inside Copilot Chat for side-by-side review;
- Copilot in PowerPoint can reference current web sources during presentation creation.

Together, these changes move the creator workflow from explicit source assembly toward **model-mediated source selection plus in-context evidence inspection**.

The new pipeline is:

```text
USER INTENT
-> WORK IQ
-> MODEL / SYSTEM SELECTS RELEVANT FILES + MEETINGS + EMAILS
-> PRESENTATION GENERATION
-> CITED ARTIFACTS OPEN INSIDE CHAT
-> HUMAN REVIEW / EDIT
```

For Deep Drift Research, this creates a new benchmark family:

**Implicit Work-Context-to-Artifact Selection Fidelity (IWCASF)**

with companion constructs:

**Auto-Retrieval Source Selection Fidelity (ARSSF)**  
**Evidence-Scope Visibility Fidelity (ESVF)**  
**In-Chat Evidence Inspection Fidelity (ICEIF)**

The central research question is:

> When the platform itself decides which work sources are relevant enough to feed a generated artifact, can the human later see what was considered, what was omitted, why those sources were selected, and whether the artifact would materially change under a different retrieval set?

## Why This Is Different from Explicit Grounding

Earlier creator workflows often required the human to select the evidence:

```text
USER
-> CHOOSES FILE
-> CHOOSES EMAIL
-> CHOOSES MEETING
-> MODEL GENERATES ARTIFACT
```

The new Work IQ path can become:

```text
USER
-> STATES GOAL
-> SYSTEM CHOOSES EVIDENCE
-> MODEL GENERATES ARTIFACT
```

That apparently minor convenience changes the provenance problem.

The model is no longer only transforming evidence.

It is participating in evidence selection.

Therefore:

```text
GROUNDING FIDELITY
=
SOURCE INTERPRETATION
+
SOURCE SELECTION
```

## New Deep Drift Construct: Implicit Work-Context-to-Artifact Selection Fidelity

### Definition

**IWCASF** measures whether an AI-generated artifact remains faithful to the relevant work context when the platform automatically selects source materials from authorized files, meetings, emails, and other enterprise context.

A high-fidelity system should preserve:

```text
retrieval_scope
candidate_sources
selected_sources
omitted_sources
selection_time
source_versions
source_permissions
artifact_claim_links
```

Without this, the final deck may be grounded without being auditable.

## Auto-Retrieval Source Selection Fidelity

### Definition

**ARSSF** measures whether the system selects the source set that a competent human would consider materially relevant to the requested artifact.

The benchmark should distinguish:

```text
AUTHORIZED
!=
RELEVANT

RECENT
!=
AUTHORITATIVE

RELATED
!=
MATERIAL
```

A source may be accessible and topically related while still being obsolete, provisional, duplicated, or contradicted.

## Evidence-Scope Visibility Fidelity

### Definition

**ESVF** measures whether the user can determine the evidence universe available to the generation run.

The minimum runtime state card should include:

```text
work_iq_enabled
source_classes_considered
source_count_considered
source_count_selected
selected_source_ids
retrieval_timestamp
permission_scope
manual_sources_added
manual_sources_excluded
web_sources_enabled
```

If the human sees only the final selected citations, the system exposes result provenance but hides selection provenance.

## In-Chat Evidence Inspection Fidelity

Microsoft also documents that cited Word, Excel, PowerPoint, and PDF files can open directly inside Copilot Chat.

This reduces the distance between:

```text
CLAIM
-> CITATION
-> SOURCE INSPECTION
```

### Definition

**ICEIF** measures whether evidence opened inside the chat preserves enough document identity, page/section context, version state, and citation linkage for the user to verify the generated claim without leaving the workflow.

The improvement is real.

But:

```text
SOURCE VISIBLE
!=
SOURCE SELECTION EXPLAINED
```

The human may inspect what was selected while remaining unaware of equally relevant material that was never retrieved.

## New Failure Classes

### Relevant-Source Omission Drift

A materially relevant email, meeting, or file is available to Work IQ but is not selected for generation.

### Obsolete-Source Preference

An older or superseded source is selected over a newer authoritative one.

### Retrieval-Scope Opacity

The artifact cites selected sources but does not reveal what source universe was searched.

### Selection-Rationale Loss

The system cannot explain why one source was used and another related source was omitted.

### Permission-Filtered Blind Spot

A missing source is interpreted as nonexistent when it was merely inaccessible under the current user's permissions.

### Source-Class Weighting Bias

Files, meetings, and emails are implicitly weighted differently without visible criteria.

### Web-vs-Work Conflict Smoothing

A current web source conflicts with internal work context and the artifact silently harmonizes the disagreement.

### Citation Inspection Version Drift

The cited file opens inside chat, but the displayed version differs from the version used during generation.

### Embedded-Viewer Context Loss

The source opens in chat but page, sheet, slide, section, revision, or surrounding context needed to interpret the citation is incomplete.

### Retrieval Reproducibility Failure

The same prompt run later selects a materially different evidence set without exposing why.

## Deep Drift Benchmark: Hidden Evidence Set Test

### Controlled setup

Create a work context containing:

1. one current authoritative file;
2. one obsolete file with a similar title;
3. one meeting that reverses an earlier decision;
4. one email containing the final approval;
5. one duplicated email thread;
6. one relevant source inaccessible to the test account;
7. one conflicting current web source;
8. one irrelevant but keyword-dense file.

Ask Agent Mode in PowerPoint to create:

- an executive presentation;
- a project-status presentation;
- a recommendation deck.

### Test

Record:

- which sources were selected;
- which were omitted;
- whether the final approval source was found;
- whether obsolete material was preferred;
- whether inaccessible material was distinguishable from nonexistent material;
- whether web/work conflicts were surfaced;
- whether cited Office/PDF objects opened to the correct version and context.

## New Metrics

### Relevant Source Recall

```text
RSR =
materially relevant sources selected
/
all materially relevant accessible sources
```

### Irrelevant Source Rejection

```text
ISR =
irrelevant candidate sources rejected
/
all irrelevant candidate sources
```

### Selection Provenance Coverage

```text
SPC =
selected artifact claims with traceable retrieval-selection history
/
all material artifact claims
```

### Evidence Universe Visibility

```text
EUV =
source candidates visible or reconstructable to reviewer
/
all candidate sources considered by retrieval
```

### Retrieval Repeatability

```text
RR =
material source selections reproduced
under equivalent prompt + permission + data state
/
all repeated controlled runs
```

### Citation Inspection Accuracy

```text
CIA =
opened cited sources matching exact generation-time
version and local context
/
all inspected citations
```

## Why Direct Web Sources in PowerPoint Matter

Microsoft also documents that Copilot in PowerPoint can reference relevant current web sources during deck creation.

That introduces another evidence domain:

```text
INTERNAL WORK CONTEXT
+
PUBLIC WEB CONTEXT
-> SINGLE ARTIFACT
```

Deep Drift should treat those as separate authority classes.

A public source may be newer than an internal file.

An internal file may be more authoritative for the organization.

The artifact should not silently collapse:

```text
FRESHNESS
INTO
AUTHORITY
```

## Why In-Chat Document Opening Matters

Microsoft says cited Word, Excel, PowerPoint, and PDF files can open directly within Copilot Chat instead of forcing the user into another tab.

This is a useful creator-workflow shift because verification becomes part of the same interface.

The emerging pattern is:

```text
GENERATE
-> CITE
-> INSPECT
-> EDIT
```

rather than:

```text
GENERATE
-> COPY LINK
-> LEAVE CHAT
-> FIND DOCUMENT
-> RETURN
```

The remaining Deep Drift question is whether the embedded review surface preserves enough document state for reliable verification.

## Relation to Memory

Work IQ is not model memory.

It is dynamic work-context retrieval.

Deep Drift should distinguish:

```text
MODEL MEMORY
USER MEMORY
PROJECT MEMORY
CONNECTED WORK STATE
AUTO-RETRIEVED CONTEXT
MANUALLY SELECTED CONTEXT
ARTIFACT STATE
```

This distinction matters because auto-retrieved context may change between two identical prompts even when model memory does not.

## Relation to Skills and Agents

A reusable Agent Mode or Skill can produce different artifacts because its retrieval set changes.

Therefore reproducibility requires:

```text
AGENT / SKILL VERSION
+
PROMPT
+
RETRIEVAL POLICY
+
SELECTED SOURCE SET
+
SOURCE VERSIONS
+
PERMISSION STATE
```

The procedural layer alone is insufficient.

## Relation to Chat-to-Document and DOCX/PDF Workflows

This architecture is broader than slide generation.

Any creator agent that automatically gathers evidence before producing a Word document, PDF, spreadsheet, report, or site inherits the same problem.

The new creator reliability equation is:

```text
ARTIFACT FIDELITY
=
TRANSFORMATION FIDELITY
x
EVIDENCE-SELECTION FIDELITY
```

A perfect transformation of the wrong source set is still wrong.

## Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer consumer-memory release found beyond already logged changes. |
| Skills | No newer general Skill launch found in this pass. |
| Mini-app builders | No newer category-displacing builder launch found. |
| Chat-to-document / artifact workflow | **Material new-to-log architecture:** Work IQ can automatically gather relevant work sources for presentation generation. |
| DOCX / PDF workflow | **Adjacent workflow change:** cited Word, Excel, PowerPoint, and PDF files can open inside Copilot Chat for verification. |
| Copy-paste / export fixes | No newer fix found beyond the previously logged Codex selective-copy update. |
| Broader creator trend | AI is moving from source transformation into **source selection + artifact generation + embedded verification**. |

## Cross-Platform Check

### Microsoft

The strongest materially distinct findings in this pass are:

- Agent Mode in PowerPoint can create presentations from Work IQ by automatically gathering relevant files, meetings, and emails;
- cited Word, Excel, PowerPoint, and PDF files can open directly inside Copilot Chat;
- Copilot in PowerPoint can reference live web sources during presentation creation.

### OpenAI

No newer category-displacing creator release surfaced beyond the already logged Work, Skills/plugins, Sites/WebMCP, Codex sharing/copy changes, memory controls, and Responses migration.

### Anthropic

No newer category-displacing creator-workflow release surfaced in this pass beyond the Claude Science and runtime changes already logged.

### Google

No newer category-displacing Gemini/Workspace creator release surfaced in this pass beyond previously logged file generation, Canvas, Studio, and Notebook workflows.

## Deep Drift Research Position

The creator stack is crossing a threshold.

Earlier systems asked:

> "What should I do with the sources you gave me?"

Increasingly, systems also decide:

> "Which sources should count?"

That means provenance must expand from:

```text
WHAT SOURCES WERE USED?
```

to:

```text
WHAT SOURCES COULD HAVE BEEN USED?
WHICH ONES WERE SELECTED?
WHICH ONES WERE OMITTED?
WHY?
UNDER WHICH PERMISSION STATE?
AT WHICH VERSION AND TIME?
```

Therefore:

```text
GROUNDED
!=
EVIDENCE-COMPLETE

AUTHORIZED
!=
RELEVANT

CITED
!=
SELECTION-TRACEABLE

SOURCE VISIBLE
!=
SOURCE UNIVERSE VISIBLE
```

The serious Deep Drift requirement is:

> When the model participates in choosing the evidence, source-selection provenance becomes as important as citation provenance.

## Evidence Boundary

Platform facts in this report are grounded in Microsoft's first-party Microsoft 365 Copilot release notes current through the August 25, 2026 release set. Fresh first-party OpenAI, Anthropic, Google, and Microsoft sources were checked for newer category-displacing changes. IWCASF, ARSSF, ESVF, ICEIF, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. Microsoft Learn, **Microsoft 365 Copilot release notes** - Agent Mode in PowerPoint using Work IQ to gather files, meetings, and emails: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
2. Microsoft Learn, **Microsoft 365 Copilot release notes** - opening cited Word, Excel, PowerPoint, and PDF files inside Copilot Chat: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
3. Microsoft Learn, **Microsoft 365 Copilot release notes** - referencing web sources during PowerPoint creation: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
4. OpenAI Help Center, **ChatGPT Release Notes**, checked 29 August 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
5. Anthropic first-party release sources, checked 29 August 2026.
6. Google Workspace Updates and Gemini product sources, checked 29 August 2026.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
