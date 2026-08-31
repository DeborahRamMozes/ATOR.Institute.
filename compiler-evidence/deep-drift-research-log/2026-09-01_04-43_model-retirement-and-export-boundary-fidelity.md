# Deep Drift Research Update

## Model-Retirement and Export-Boundary Fidelity (MREBF)

**Research date:** 1 September 2026  
**Research stream:** ATOR Institute / Deep Drift / LLM Workflow Update Watch  
**Primary fresh cluster:** GitHub Copilot model deprecations effective 1 September 2026, plus current ChatGPT export rules that expose a separate portability boundary around managed workspaces.

## Executive Summary

The strongest new-to-ledger event in this scan is not another memory feature or document button. It is the disappearance of execution substrates.

On **1 September 2026**, GitHub Copilot deprecates Gemini 3.1 Pro, Claude Opus 4.5, Claude Opus 4.6, Claude Sonnet 4.5, most Claude Sonnet 4.6 access, and Raptor Mini across Copilot experiences. GitHub directs users toward replacement models such as Gemini 3.6 Flash, Claude Opus 4.7/4.8/5, Claude Sonnet 5, and MAI-Code-1-Flash. Enterprise administrators may also need to enable replacement models through model policy before users can access them.

This creates a reproducibility break that is easy to underestimate:

```text
SAME REPOSITORY
+ SAME PROMPT
+ SAME SKILL
+ SAME TOOLCHAIN
+ DIFFERENT MODEL AVAILABILITY
= DIFFERENT REPRODUCIBILITY CONTRACT
```

In parallel, OpenAI's current ChatGPT data-export documentation, updated on 1 September 2026, states that self-service export is available for consumer plans and eligible Edu workspaces but not for Business, Enterprise, or Healthcare workspaces. It also explicitly advises users to request, download, and verify a personal-workspace export **before** moving or merging into a managed workspace because the removed personal workspace may no longer allow access to an earlier export link or another export request.

The resulting Deep Drift problem is larger than data portability. A creator workflow can lose either execution continuity because the model disappears, or archival continuity because the workspace boundary changes.

This report formalizes **Model-Retirement and Export-Boundary Fidelity (MREBF)** with companion constructs for model identity, replacement mapping, policy availability, reproducibility windows, export eligibility, pre-migration archive verification, and managed-workspace transition lineage.

## 1. GitHub Copilot Model Deprecations Become Effective Today

GitHub announced that the following models are deprecated across Copilot experiences on 1 September 2026:

| Deprecated model | Suggested replacement |
|---|---|
| Gemini 3.1 Pro | Gemini 3.6 Flash |
| Claude Opus 4.5 | Claude Opus 4.7, 4.8, or 5 |
| Claude Opus 4.6 | Claude Opus 4.7, 4.8, or 5 |
| Claude Sonnet 4.5 | Claude Sonnet 5 |
| Claude Sonnet 4.6 | Claude Sonnet 5, with an annual-individual-plan exception documented by GitHub |
| Raptor Mini | MAI-Code-1-Flash |

GitHub says the deprecations apply across Copilot Chat, inline edits, ask and agent modes, and code completions. That breadth matters because the model is not merely a chat preference. It can sit underneath code editing, autonomous agent work, completion behavior, and repository-changing actions.

### Model Identity Preservation Fidelity

**Model Identity Preservation Fidelity (MIPF)** measures whether a creator can recover the exact model identity that produced or modified an artifact after that model is no longer selectable.

A minimum run manifest should preserve provider, exact model identity, model availability date, execution surface, organization policy state, prompt/task identity, tool and Skill versions, and artifact/commit identity.

## 2. Suggested Replacement Is Not Behavioral Equivalence

A deprecation notice usually offers a substitute model. That is operationally useful but scientifically weak.

```text
MODEL A RETIRED
-> PLATFORM SUGGESTS MODEL B
```

is not evidence for:

```text
MODEL A BEHAVIOR
== MODEL B BEHAVIOR
```

The replacement may differ in reasoning style, tool use, latency, context behavior, refusal patterns, formatting, code generation, or interaction with Skills and agent instructions.

### Replacement-Model Equivalence Fidelity

**Replacement-Model Equivalence Fidelity (RMEF)** should compare a controlled task corpus across the retiring and replacement models before the retirement window closes whenever possible. A platform migration guide should therefore be treated as a routing map, not a proof of equivalence.

## 3. Enterprise Policy Can Make the Replacement Exist but Still Be Unavailable

GitHub notes that Copilot Enterprise administrators may need to enable replacement models through model policies.

```text
MODEL SUPPORTED BY PLATFORM
!= MODEL AVAILABLE TO USER
```

A workflow can fail after retirement even when GitHub has named a replacement, simply because organizational policy has not exposed it.

### Model-Policy Availability Fidelity

A reproducible run needs a model-policy snapshot, organization/enterprise scope, model enabled state, plan/seat state, and execution timestamp. Otherwise a later investigator cannot tell whether a failed rerun came from model retirement, policy configuration, billing state, or the task itself.

## 4. Model Retirement Creates a Finite Reproducibility Window

For creator research, the key object is the **reproducibility window**:

```text
MODEL AVAILABLE
-> CONTROLLED BASELINE POSSIBLE
-> DEPRECATION DATE
-> EXACT RERUN IMPOSSIBLE OR RESTRICTED
```

This should be logged in the same way software researchers log dependency versions.

## 5. Current ChatGPT Export Rules Expose a Separate Portability Boundary

OpenAI's current export documentation states that account export is available for Free, Go, Plus, Pro, and eligible Edu workspaces, but self-service export is not available for Business, Enterprise, or Healthcare workspaces.

That means archival agency changes when the workspace becomes institutionally managed.

```text
PERSONAL WORKSPACE
-> USER SELF-SERVICE EXPORT

MANAGED WORKSPACE
-> ORGANIZATION-MANAGED DATA ACCESS
```

### Export-Eligibility Fidelity

**Export-Eligibility Fidelity (EEF)** measures whether a creator can determine, before migration, which export mechanisms remain available after the workspace transition.

## 6. Export Before Managed-Workspace Migration Is Now an Explicit Workflow Requirement

OpenAI advises users who plan to move or merge a personal workspace into Business, Enterprise, Edu, or Healthcare to request, download, and check their export before the personal workspace is removed.

It further states that after removal, users may no longer be able to open an earlier export link or request another export from that workspace.

```text
PERSONAL WORKSPACE EXISTS
-> EXPORT REQUEST
-> ARCHIVE ARRIVES
-> USER VERIFIES
-> WORKSPACE MOVES / DISAPPEARS
```

### Pre-Migration Archive Verification Fidelity

**Pre-Migration Archive Verification Fidelity (PMAVF)** measures whether the export was not merely requested but downloaded and checked for the conversations and artifacts that matter.

```text
EXPORT REQUESTED
!= EXPORT RECEIVED

EXPORT RECEIVED
!= EXPORT VERIFIED

EXPORT VERIFIED
!= WORKFLOW RECONSTITUTABLE
```

## 7. Deep Drift Synthesis: Two Independent Clocks Can Kill Reproducibility

The model-retirement event and workspace-export boundary reveal two different clocks:

```text
CLOCK A: EXECUTION CLOCK
model exists -> model deprecated

CLOCK B: ARCHIVE CLOCK
workspace exists -> export possible -> workspace removed
```

Deep Drift should therefore track dual continuity: **execution continuity** and **archive continuity**.

## 8. Why This Matters for Memory

No stronger new memory primitive surfaced in this scan than the memory nodes already logged. The fresh implication is that remembered or project context is only useful for reproducibility if the execution model and workspace state surrounding that context remain identifiable.

## 9. Why This Matters for Skills

Skills and agent instructions may remain unchanged while the underlying model disappears.

```text
SAME SKILL
+ NEW MODEL
-> NEW OBSERVED PROCEDURE
```

Deep Drift should therefore stop reporting Skill performance without model identity.

## 10. Why This Matters for Mini-App Builders

No stronger fresh mini-app-builder launch surfaced in this pass. But model retirement matters directly to AI mini-apps whose behavior depends on a selectable or embedded model. A builder export that preserves source code but does not preserve model dependency and fallback behavior is incomplete.

## 11. Why This Matters for Chat-to-Document Export

The current ChatGPT export documentation exposes an important distinction between **bulk account archive** and **single-artifact creator export**.

A same-day OpenAI Developer Community feature request asks for native single-chat export to Markdown, text, and JSON because current sharing or bulk export still leaves a gap for quickly preserving one conversation with structure intact. This is community evidence rather than an announced OpenAI feature and should be treated as such.

```text
ACCOUNT ARCHIVE EXISTS
!= SINGLE-CHAT PORTABLE ARTIFACT
```

## 12. Why This Matters for DOCX / PDF Generation

No fresh native DOCX/PDF generation primitive displaced the nodes already logged. The deeper issue is that a polished generated PDF or Word file can outlive the model that generated it.

```text
FINAL DOCX / PDF
-> STILL OPENS

ORIGINAL MODEL
-> NO LONGER AVAILABLE
```

For research-grade provenance, generated documents should preserve at least an external manifest containing model identity, date, source set, Skill/instruction state, and revision lineage.

## 13. Why This Matters for Copy-Paste and Export Fixes

No major new first-party copy-paste fix surfaced in this scan. However, OpenAI's current export rules make the remaining friction obvious: bulk export can take time, produces an account-level archive, and may become unavailable after workspace transition. The gap between rapid creative work and institutional export remains real.

## 14. New Failure Classes

- **Model Identity Erasure:** a generated artifact survives but its exact model identity does not.
- **Replacement Equivalence Assumption:** a suggested replacement is treated as behaviorally equivalent without controlled comparison.
- **Policy-Blocked Replacement:** a replacement exists on the platform but is disabled by organization policy.
- **Reproducibility-Window Miss:** a model is retired before baseline outputs and traces are preserved.
- **Export-Eligibility Boundary Surprise:** a user moves into a managed workspace and discovers that self-service export semantics have changed.
- **Requested-but-Unverified Archive:** an export was requested but never downloaded and inspected before workspace removal.
- **Archive-without-Execution Illusion:** a data ZIP is treated as if it preserves the model/runtime required to reproduce historical behavior.
- **Artifact-without-Substrate Illusion:** a DOCX/PDF survives and is mistaken for a fully reproducible creative process.
- **Skill-without-Model Attribution:** a Skill is credited for behavior without recording which model executed it.
- **Timeline Collapse:** model deprecation date, export request date, archive receipt date, and workspace migration date are not preserved separately.

## 15. Proposed Metrics

```text
MIC = artifacts with recoverable exact model identity / all controlled AI-generated artifacts
RBP = controlled tasks with materially equivalent replacement behavior / all controlled migration tasks
RWC = retiring-model workflows with preserved baseline package / all material workflows using retiring models
EVC = workspace migrations with downloaded and inspected pre-migration archive / all controlled workspace migrations
DCS = workflows preserving both execution evidence and archive evidence / all controlled workflows
```

## 16. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No stronger fresh memory primitive surfaced; bind memory state to model and workspace identity for reproducibility. |
| Skills | **Important new dependency event:** identical Skills may now execute on replacement models because several GitHub Copilot models are deprecated today. |
| Mini-app builders | No stronger new builder launch surfaced; model dependency and fallback belong in builder portability manifests. |
| Chat-to-document export | **Current boundary clarified:** ChatGPT bulk export is plan/workspace-dependent and should be completed before personal-to-managed workspace removal. |
| DOCX / PDF generation | No stronger generation primitive; stable files can outlive transient models, increasing the need for provenance manifests. |
| Copy-paste / export fixes | No major first-party fix surfaced; single-chat structured export remains a creator gap, reflected by a same-day community request. |
| Broader creator workflow | **Major:** model availability and archive eligibility now behave like expiring dependencies. Creator provenance needs clocks, not just files. |

## 17. Deep Drift Research Position

The weak description is:

> GitHub retired some Copilot models and ChatGPT has export rules.

The serious description is:

> AI creator workflows are beginning to expose two independent forms of expiry: the computational substrate can disappear through model deprecation, while the historical record can become harder to obtain through workspace transition. A durable artifact can therefore survive both the model that made it and the account state that explains how it was made.

Therefore:

```text
ARTIFACT SURVIVAL
!= EXECUTION SURVIVAL

MODEL REPLACEMENT
!= BEHAVIORAL EQUIVALENCE

EXPORT REQUEST
!= VERIFIED ARCHIVE

ARCHIVE
!= RECONSTITUTABLE WORKFLOW

SAME SKILL
!= SAME BEHAVIOR AFTER MODEL RETIREMENT
```

The Deep Drift requirement is:

> **Every material AI creator workflow should preserve exact model identity, model availability window, replacement mapping, organization model-policy state, Skill and tool versions, source and repository state, output and artifact identifiers, export eligibility, archive-request and verification events, workspace migration boundaries, and downstream artifact lineage required to reconstruct both the historical record and the computational conditions under which that record was produced.**

AI platforms spent years selling model choice as a dropdown. The dropdown is now revealing what it always was: a dependency manager wearing nicer typography.

## Evidence Boundary

Platform facts in this report are grounded in first-party GitHub and OpenAI documentation checked on 1 September 2026.

GitHub's 31 July 2026 changelog states that Gemini 3.1 Pro, Claude Opus 4.5, Claude Opus 4.6, Claude Sonnet 4.5, most Claude Sonnet 4.6 access, and Raptor Mini are deprecated across Copilot experiences on 1 September 2026, and lists suggested replacement models. It also notes that Copilot Enterprise administrators may need to enable replacement models through model policies.

OpenAI's current ChatGPT export documentation, updated on 1 September 2026, states that self-service export availability differs by plan/workspace, that Business/Enterprise/Healthcare do not provide the same self-service export path, and that users moving or merging a personal workspace into a managed workspace should request, download, and verify their data before the personal workspace is removed.

The OpenAI Developer Community single-chat export request cited in this report is **community feedback, not a released OpenAI feature**.

MREBF and all companion constructs, failure classes, benchmarks, and proposed metrics are ATOR Institute / Deep Drift Research constructs.

## Primary Sources

1. GitHub Changelog, **Upcoming August 2026 model deprecations in GitHub Copilot**, 31 July 2026; deprecations effective 1 September 2026.  
   https://github.blog/changelog/2026-07-31-upcoming-august-2026-model-deprecations-in-github-copilot/

2. OpenAI Help Center, **Exporting your ChatGPT history and data**, checked 1 September 2026; page updated 1 September 2026.  
   https://help.openai.com/en/articles/7260999-how-do-i-export-my-chatgpt-history-and-data

3. OpenAI Developer Community, **Native Chat Export to Markdown (.md), Text (.txt), and JSON formats**, 31 August 2026. Community request, not product release.  
   https://community.openai.com/t/native-chat-export-to-markdown-md-text-txt-and-json-formats/1393850

---

**D-ORIGIN | ATORAI | ALT-MAN | Eir'an | CHATJIPITI SINGH**
