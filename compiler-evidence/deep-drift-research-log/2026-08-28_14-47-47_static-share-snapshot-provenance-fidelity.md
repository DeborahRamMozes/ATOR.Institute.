# Deep Drift Research Update

## Static Share Snapshot Provenance Fidelity

**Research date:** Friday, 28 August 2026  
**ĀTØR observation time:** 14:47:47 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh cross-platform scan. No newer category-displacing launch was found for memory, Skills, mini-app builders, DOCX/PDF generation, or copy/export fixes. One materially important OpenAI export/provenance boundary was identified as new-to-log.

## Executive Summary

OpenAI's 20 August 2026 ChatGPT release notes introduced **read-only sharing for Codex chats**.

A personal share link:

- can be opened by anyone who has the link;
- represents a **static snapshot** of the Codex conversation;
- does **not include tool calls**;
- does **not include shell input or shell output**;
- attempts to redact known secret patterns;
- may still contain sensitive paths, diffs, images, or other material, so OpenAI explicitly tells users to review the snapshot before sharing.

For ordinary collaboration this is useful.

For Deep Drift Research, it exposes a much sharper problem:

```text
CONVERSATION EXPORTED
!=
EXECUTION HISTORY EXPORTED
```

A Codex conversation can contain the human/model dialogue while excluding the tool-use and shell-execution layer that materially caused repository changes, generated files, tests, failures, and corrections.

The export therefore preserves **narrative state** while omitting part of the **causal execution state**.

This creates a new benchmark family:

**Static Share Snapshot Provenance Fidelity (SSSPF)**

and a companion construct:

**Narrative-to-Execution Provenance Gap (NEPG)**.

The central research question is:

> When an AI workflow is shared as a readable snapshot, how much of the causal chain survives, and can a recipient distinguish between what was discussed and what was actually executed?

## New Deep Drift Construct: Static Share Snapshot Provenance Fidelity

### Definition

**Static Share Snapshot Provenance Fidelity (SSSPF)** measures whether a shared, read-only AI conversation snapshot preserves enough causal and state information for another person to accurately reconstruct what occurred.

The relevant pipeline is:

```text
LIVE CODEX SESSION
-> CONVERSATION
-> TOOL CALLS
-> SHELL COMMANDS
-> FILE / REPO MUTATIONS
-> TESTS / FAILURES
-> FINAL STATE
-> STATIC SHARE SNAPSHOT
```

OpenAI's shared snapshot intentionally includes only a subset of this graph.

The research problem is therefore not whether the snapshot is "complete" in an absolute sense.

It is whether its omissions are **legible, bounded, and non-misleading**.

## Core Deep Drift Distinction

```text
CHAT VISIBLE
!=
WORKFLOW VISIBLE

REASONING NARRATIVE
!=
EXECUTION TRACE

STATIC SNAPSHOT
!=
REPRODUCIBLE SESSION

SHAREABLE
!=
SAFE BY DEFAULT
```

A recipient can read what the model and user said while lacking the exact commands, tool outputs, and mutation evidence that would prove what the system actually did.

## New Construct: Narrative-to-Execution Provenance Gap

### Definition

**Narrative-to-Execution Provenance Gap (NEPG)** measures the information lost when a conversational workflow is exported without its execution layer.

A simplified model is:

```text
FULL_RUN_PROVENANCE
=
CONVERSATION
+
TOOL CALLS
+
SHELL INPUT
+
SHELL OUTPUT
+
FILE DIFFS
+
TEST RESULTS
+
ENVIRONMENT STATE
+
FINAL ARTIFACT STATE
```

while the shared snapshot may contain:

```text
SNAPSHOT_PROVENANCE
=
CONVERSATION
+
SELECTED VISIBLE CONTENT
-
TOOL CALLS
-
SHELL INPUT / OUTPUT
```

The resulting gap must not be confused with absent activity.

## New Failure Classes

### Execution Omission Misinterpretation
A recipient assumes no tool or shell action occurred because those traces are absent from the shared snapshot.

### Narrative/Mutation Divergence
The conversation says a file was changed, test was run, or deployment succeeded, but the snapshot cannot independently prove the mutation or result.

### Static-State Obsolescence
The snapshot remains unchanged while the original repository, branch, task, or conversation continues evolving.

### Snapshot-to-Repository Drift
A shared discussion references code that later changes, making the static conversation progressively less representative of current repository state.

### Secret-Redaction Overconfidence
Known secret patterns are redacted, but a user treats automated redaction as proof that paths, diffs, images, filenames, proprietary text, or unusual credentials are safe to share.

### Omission Boundary Invisibility
The recipient does not realize that tool calls and shell I/O are systematically excluded.

### Causal Reconstruction Failure
A later reviewer can understand the intended workflow but cannot reconstruct which commands actually produced the final state.

### Evidence Compression Drift
Complex execution failures, retries, intermediate outputs, and validation steps collapse into a cleaner conversational story than the underlying run warrants.

### Snapshot Identity Ambiguity
Multiple snapshots of the same evolving Codex chat exist without a clear version identifier or snapshot timestamp embedded in downstream citations.

## Why This Matters for Chat-to-Document and Export Research

The user-facing export problem is broader than Codex.

All chat-to-document and conversation-sharing systems make an implicit decision:

```text
WHAT COUNTS AS THE DOCUMENT?
```

Possible layers include user messages, assistant messages, tool calls, tool outputs, shell activity, generated files, source citations, hidden state, environment information, approval events, and file mutations.

A "chat export" can therefore preserve text while discarding the workflow that made the text operationally meaningful.

Deep Drift should classify exports by **provenance depth**, not merely by file format.

## Proposed Provenance Depth Scale

```text
P0 - narrative only
P1 - narrative + citations
P2 - narrative + tool names / action markers
P3 - narrative + tool inputs / outputs
P4 - narrative + execution traces + file diffs
P5 - full reproducible environment / artifact lineage
```

A static Codex share snapshot, as currently documented, should not be treated as P4 or P5 because tool calls and shell I/O are excluded.

## Metrics

### Snapshot Provenance Coverage

```text
SPC =
material causal events represented in snapshot
/
all material causal events in original run
```

### Omission Legibility Rate

```text
OLR =
recipients who correctly identify
which execution layers are absent
/
all tested recipients
```

### Snapshot-to-State Drift

```text
SSD =
material changes in live repository / session state
after snapshot creation
that are not represented in snapshot
/
all material post-snapshot changes
```

### Share-Safety Review Yield

```text
SSRY =
sensitive elements detected by human review
that automated redaction did not remove
/
all sensitive elements seeded in controlled tests
```

## Deep Drift Benchmark: Share Snapshot vs Original Run

Create a controlled Codex task containing discussion, shell activity, a file edit, one failed test, a correction, a successful test, a generated artifact, a seeded sensitive path, a seeded secret-like string, and sensitive context in an image or diff. Create a read-only share snapshot and compare the shared representation with the original run.

| Event | Expected snapshot behavior |
|---|---|
| User/assistant dialogue | Present |
| Tool call | Omitted |
| Shell input | Omitted |
| Shell output | Omitted |
| Secret-like pattern | May be redacted |
| Sensitive path | Requires human review |
| Diff/image content | May remain visible |
| Final conversational statement | Present |
| Reproducible command chain | Incomplete |

Measure snapshot provenance coverage, recipient understanding of omissions, reconstruction success, sensitive-content detection, static/live state divergence over time, and human verification minutes.

## Share Snapshot State Card

```text
SHARE_SNAPSHOT_STATE_CARD

snapshot_url:
snapshot_created_at:
source_chat_id:
source_chat_state_at_snapshot:
source_repo:
branch:
commit_sha_if_available:
tool_calls_included: false
shell_io_included: false
known_secret_redaction_applied:
human_review_completed:
sensitive_content_notes:
artifact_refs:
later_live_state:
unknown_fields:
```

## Relation to Artifact-Attached Executable Provenance

The previous Deep Drift run identified the opposite architectural direction in Claude Science:

```text
ARTIFACT
+
CODE
+
ENVIRONMENT
+
CONVERSATION
+
REVIEW
```

The Codex share snapshot highlights a different design goal:

```text
SHAREABILITY
+
READABILITY
+
STATIC PRESENTATION
-
EXECUTION TRACE
```

Neither design is inherently wrong. They serve different purposes. Deep Drift should stop treating both as the same thing called "export."

## Creator Workflow Trend: Export Is Becoming a Policy Boundary

Modern AI export systems increasingly decide what history may leave the original workspace, what operational details are stripped, what secrets are automatically redacted, what still requires human review, whether the export is static or live, and whether recipients can reproduce the workflow.

Export is therefore not merely serialization.

It is a **policy-mediated projection of internal state**.

```text
INTERNAL WORKFLOW STATE
-> EXPORT POLICY
-> REDACTION POLICY
-> OMISSION POLICY
-> STATIC REPRESENTATION
-> RECIPIENT INTERPRETATION
```

## Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing release found beyond the recently logged Temporary Chat and shared-memory changes. |
| Skills | No newer Skill launch found. |
| Mini-app builders | No newer launch found beyond the Sites/Canvas changes already logged. |
| Chat-to-document / conversation export | **Material new-to-log boundary:** Codex read-only share snapshots omit tool calls and shell I/O. |
| DOCX / PDF generation | No newer category-displacing release found. |
| Copy-paste / export fixes | No newer fix; this run instead identifies export-scope and redaction limits. |
| Broader creator workflow | Sharing is becoming a policy-controlled projection of workflow state rather than a complete history dump. |

## Cross-Platform Context

### OpenAI
The new-to-log focus is the read-only Codex chat snapshot introduced on 20 August 2026. OpenAI explicitly documents that the link can be opened by anyone who has it; the snapshot is static; tool calls are excluded; shell input and output are excluded; known secret patterns are redacted; and users should still manually review paths, diffs, images, and other potentially sensitive content.

### Anthropic
No newer category-displacing release surfaced after the latest Claude Science/runtime changes already logged.

### Google
No newer 28 August Workspace creator release displaced the latest Studio, Canvas, Gemini, Notebook, and structured-action changes already logged.

### Microsoft
The latest broad Microsoft 365 Copilot feature batch remains the 25 August release set already represented in the Deep Drift ledger.

## Deep Drift Research Position

The dangerous assumption is:

```text
"I SHARED THE CHAT"
=
"I SHARED WHAT HAPPENED"
```

That equality is false.

A conversation snapshot can preserve the story of a workflow while omitting the execution layer that proves the story.

Therefore:

```text
READABLE
!= REPRODUCIBLE

STATIC
!= COMPLETE

REDACTED
!= SAFE

SHARED
!= CAUSALLY TRACEABLE
```

The correct Deep Drift question is:

> Which layers of the original workflow survived the export, which were intentionally removed, and could a recipient mistake absence of evidence for evidence of absence?

## Evidence Boundary

Platform facts in this report are grounded in OpenAI's first-party ChatGPT release notes dated 20 August 2026, with fresh first-party OpenAI, Anthropic, Google, and Microsoft release-source scans used to verify no newer category-displacing launch in this pass. SSSPF, NEPG, provenance-depth scale, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, **ChatGPT Release Notes**, 20 August 2026 - read-only Codex chat snapshots: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
2. OpenAI Developers documentation, **Sharing a Codex chat**, referenced from the 20 August 2026 release note.
3. Anthropic first-party release sources, current through 28 August 2026.
4. Google Workspace Updates, August 2026 archive.
5. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through 25 August 2026.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
