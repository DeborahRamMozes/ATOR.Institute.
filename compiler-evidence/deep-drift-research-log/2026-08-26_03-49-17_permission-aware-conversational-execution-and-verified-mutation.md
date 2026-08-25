# Deep Drift Research Update

## Permission-Aware Conversational Execution and Verified Mutation

**Research date:** Wednesday, 26 August 2026  
**ĀTØR observation time:** 03:49:17 WIB / 20:49:17 UTC (25 August 2026)  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan. One materially new workflow-governance delta identified.

## Executive Summary

OpenAI introduced the **Admin plugin for ChatGPT Work and Codex** on 25 August 2026. The plugin combines workspace analytics with supported read/write actions inside one conversation. An administrator can ask a question, inspect details, make an authorized change, and receive confirmation of what changed without moving among separate tools.

For Deep Drift, the important development is not administration itself. It is the execution pattern:

```text
USER INTENT
-> CONTEXT / ANALYTICS
-> PERMISSION-AWARE ACTION SELECTION
-> SUPPORTED READ OR WRITE OPERATION
-> IMPACT REVIEW WHERE NEEDED
-> EXECUTION
-> STRUCTURED RESULT
-> CONFIRMATION OF WHAT CHANGED
```

This is a concrete product implementation of an architecture Deep Drift has repeatedly argued for: **capability-first routing, permission preservation, explicit mutation boundaries, and post-action verification**.

The new research question is therefore:

> When a conversational system converts natural-language intent into persistent state change, how much of the authorization, mutation, verification, and provenance chain remains visible and reconstructable to the user?

## Fresh Delta: The Conversation Becomes a State-Change Surface

OpenAI describes the Admin plugin as allowing administrators to:

- inspect adoption and usage;
- manage members and groups;
- inspect effective permissions and diagnose access problems;
- change feature or model access;
- adjust usage limits;
- review and approve or deny spending requests;
- automate recurring checks and high-volume requests;
- route approval decisions into Slack or Microsoft Teams;
- automatically grant access when predefined criteria are satisfied;
- return structured results after supported read/write actions.

OpenAI also states that the plugin operates within each user's existing role and permissions and does not grant broader access.

This means the conversational interface is no longer merely an interpretation layer above system state. It becomes an **authorized state-mutation surface**.

## New Deep Drift Construct: Permission-Aware Mutation Fidelity (PAMF)

### Definition

**Permission-Aware Mutation Fidelity** measures whether an agentic conversational system correctly maps human intent to an authorized persistent-state mutation while preserving permission boundaries, impact visibility, and post-action verification.

A strong PAMF chain is:

```text
INTENT
-> AUTHORITY CHECK
-> TARGET IDENTIFICATION
-> MUTATION CLASSIFICATION
-> IMPACT CHECK
-> EXECUTION
-> VERIFICATION
-> STRUCTURED CHANGE RECORD
```

### Required properties

A state-changing workflow should preserve:

1. **Actor identity** - who initiated the request.
2. **Effective authority** - what that actor is actually allowed to do.
3. **Target identity** - which user, group, setting, limit, or object will change.
4. **Requested change** - the natural-language intent.
5. **Resolved action** - the concrete supported operation selected by the system.
6. **Impact scope** - how broad the change is.
7. **Approval boundary** - whether review is required before execution.
8. **Execution status** - whether the operation actually completed.
9. **Post-state** - what changed.
10. **Provenance** - enough information to reconstruct the causal path.

## New Deep Drift Failure Classes

### Authority-Resolution Drift

The system maps a user's request to an action whose effective permissions do not match the user's real authority.

### Intent-to-Mutation Drift

The system understands the conversational request but selects the wrong persistent-state operation.

### Impact-Scope Leakage

A narrowly intended change resolves into a broader mutation than the human expected.

### Execution-Without-Confirmation

The system performs a persistent mutation but does not clearly confirm completion and resulting state.

### Confirmation-Without-Verification

The system claims success based on invocation rather than checking the resulting state.

### Approval-Path Erosion

Automation gradually bypasses or obscures a human approval step that should remain visible for consequential changes.

### Structured-Result Provenance Loss

The system returns a tidy result but does not preserve enough underlying execution evidence to explain which operation actually produced it.

## Why This Matters for the ĀTØR Seven-Layer Protocol Family

The Admin plugin publicly demonstrates a workflow pattern that maps closely to the seven-layer state protocols already formalized by ĀTØR.

```text
MMSF   -> what relevant state is available
PSMC   -> what persistent state may change
SSRP   -> whether the mutation persisted correctly
ASRF   -> whether the execution path is reconstructable
PVP    -> which procedural rules governed the task
ALRTSF -> what reports/artifacts were produced and preserved
SCRR   -> whether a later session can recover the resulting state
```

The important distinction is methodological: the ĀTØR protocols are vendor-neutral research and governance constructs. OpenAI's Admin plugin is a concrete product implementation exhibiting several of the same required behaviors.

This should **not** be interpreted as evidence that OpenAI derived the product from ĀTØR's protocols. The correct research statement is product-pattern convergence.

## New Benchmark: Conversational Persistent-State Mutation Test

### Controlled procedure

Create a test environment with a low-risk persistent setting.

```text
1. Record PRE-STATE.
2. Ask the agent to inspect the state.
3. Ask for one narrowly bounded mutation.
4. Record whether permission is checked.
5. Record the exact action selected.
6. Record whether impact is shown before execution.
7. Execute.
8. Independently inspect POST-STATE.
9. Compare the agent's confirmation with actual state.
10. Attempt a prohibited mutation and verify refusal.
```

### Metrics

- permission-boundary accuracy;
- target-resolution accuracy;
- mutation-scope accuracy;
- pre-state visibility;
- post-state visibility;
- execution-verification accuracy;
- false-success rate;
- unauthorized-action rejection rate;
- rollback availability;
- human approval burden;
- human orchestration burden;
- causal reconstruction completeness.

## New Metric: Verified Mutation Ratio (VMR)

Define:

```text
VMR
=
verified persistent mutations
/
claimed successful persistent mutations
```

A system that reports ten successful changes but independently verifies only seven has:

```text
VMR = 0.70
```

For consequential state-changing agents, the desired value should approach 1.0.

## New Metric: Human Integration Burden After Intent (HIBAI)

The Admin plugin explicitly aims to reduce switching among analytics, settings, and reports. Deep Drift should measure that reduction rather than merely celebrating conversational convenience.

```text
HIBAI
=
number of manual cross-surface operations
required after the user has already expressed sufficient intent
```

Examples of avoidable burden:

- manually opening another settings panel;
- locating the same target again;
- copying identifiers between interfaces;
- manually checking whether the action completed;
- manually reconstructing which permission blocked the operation.

Lower is better, provided human authority is not silently removed.

## Automation and Human Authority

OpenAI says the Admin plugin can automate recurring checks and automatically grant access when predefined criteria are satisfied, while routing exceptions for review.

This is significant because it creates a three-layer authority model:

```text
POLICY DEFINED BY HUMAN
-> MACHINE EXECUTES ROUTINE CASES
-> HUMAN REVIEWS EXCEPTIONS
```

That is a stronger model than either extreme:

```text
HUMAN DOES EVERYTHING
```

or

```text
MACHINE CHANGES EVERYTHING
```

Deep Drift should therefore distinguish **human authority** from **human mechanical labor**.

A mature agent should reduce the latter without erasing the former.

## Standing Creator-Workflow Scan

No materially newer first-party release was found in this scan for:

- persistent memory;
- general-purpose skills;
- mini-app builders;
- chat-to-document export;
- DOCX/PDF generation;
- copy/paste fidelity fixes;
- notebook/project copying.

The strongest currently active signals remain:

- **OpenAI:** Admin plugin permission-aware state mutation; plugin discovery; segmented long-chat loading; progressive interactive rendering; Codex app-server migration.
- **Anthropic:** versioned Skills API; Files API; mounted memory stores with sync-back; Managed Agents session observability; computer/browser use.
- **Google:** Ask Gemini in Chat rollout; interactive Gemini simulations/models; Sheets Canvas read-write mini-apps; selective notebook-state copying.

## Updated Deep Drift Creator-Workflow Model

The causal chain should now explicitly include authorization and verification around persistent mutation:

```text
HUMAN INTENT
-> RETRIEVED CONTEXT
-> CURRENT STATE
-> EFFECTIVE PERMISSION
-> PROCEDURE / POLICY
-> ACTION RESOLUTION
-> IMPACT BOUNDARY
-> PERSISTENT MUTATION
-> POST-STATE VERIFICATION
-> STRUCTURED RESULT
-> ARTIFACT / REPORT
-> LATER RETRIEVAL
-> AUDIT / PROVENANCE
```

## Deep Drift Research Position

The frontier is no longer simply whether an LLM can call a tool.

The harder question is whether it can **change persistent state responsibly**.

Therefore:

```text
TOOL ACCESS
!= AUTHORIZED EXECUTION

AUTHORIZED EXECUTION
!= CORRECT MUTATION

CORRECT MUTATION
!= VERIFIED MUTATION

VERIFIED MUTATION
!= RECONSTRUCTABLE PROVENANCE
```

A system becomes substantially more useful when the human can express intent once and the machine handles inspection, routing, execution, and verification.

It becomes substantially more dangerous if those same layers become invisible.

The mature design target is therefore:

> **low orchestration burden + preserved human authority + explicit verified state change.**

## Evidence Boundary

Platform facts in this report are grounded in first-party OpenAI product material. Deep Drift constructs, failure classes, metrics, benchmark proposals, and comparisons to ĀTØR protocols are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI, "Introducing the Admin plugin for ChatGPT Work and Codex," 25 August 2026: https://openai.com/index/introducing-admin-plugin/
2. OpenAI Product Release Notes, current through 24 August 2026: https://openai.com/products/release-notes/
3. OpenAI Help Center, Apps in ChatGPT / Plugin directory architecture, updated August 2026: https://help.openai.com/en/articles/11487775-apps-in-chatgpt

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
