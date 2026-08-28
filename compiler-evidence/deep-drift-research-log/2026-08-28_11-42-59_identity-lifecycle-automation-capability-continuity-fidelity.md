# Deep Drift Research Update

## Identity Lifecycle Automation and Capability Continuity Fidelity

**Research date:** Friday, 28 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. No category-displacing release was found for memory, mini-app builders, DOCX/PDF generation, or copy/export fixes in this pass. One unlogged OpenAI enterprise workflow-control capability was identified as materially relevant.

## Executive Summary

OpenAI's Enterprise and Edu release notes document workspace-scoped **Admin APIs for invitation and member administration**. Workspace owners and admins can automate:

- listing invitations;
- retrieving invitations;
- creating invitations;
- resending invitations;
- deleting invitations;
- retrieving accepted members;
- updating built-in roles or seats;
- removing workspace memberships.

SCIM-managed identity changes continue through the identity provider, and last-owner protections apply.

This extends the creator workflow control plane from:

```text
IDENTITY CONFIGURATION
-> HUMAN ADMIN ACTION
```

toward:

```text
IDENTITY EVENT
-> ADMIN API
-> WORKSPACE MEMBERSHIP / ROLE MUTATION
-> EFFECTIVE CAPABILITY CHANGE
-> SKILL / APP / WORK / CODEX / AGENT ACCESS
-> ARTIFACT OR EXTERNAL ACTION
```

For Deep Drift Research, this creates a new benchmark family:

**Identity Lifecycle Automation and Capability Continuity Fidelity (ILACCF)**.

The central research question is:

> When membership and role state are changed programmatically, does every downstream creator capability converge to the intended authority state without stale access, false revocation, or untraceable workflow divergence?

## Why This Matters

The previous Deep Drift identity layer established that:

```text
WHO YOU ARE
```

is not enough.

Effective creator authority also depends on:

```text
TENANT
+ WORKSPACE
+ GROUP
+ ROLE
+ EXPLICIT DENY
+ APP ACCESS
+ SKILL ACCESS
+ TOOL ACCESS
```

The Admin API adds another layer:

```text
IDENTITY LIFECYCLE MUTATION PATH
```

Authority can now change through code.

That matters because the creator system can remain visually identical while the user's effective capability state changes underneath it.

## Core Distinction

```text
MEMBER REMOVED
!=
ALL CAPABILITIES REVOKED IMMEDIATELY

ROLE UPDATED
!=
EVERY SURFACE CONVERGED

INVITATION CREATED
!=
AUTHORITY ACTIVE

SCIM STATE
!=
ADMIN API STATE

ADMIN ACTION SUCCEEDED
!=
DOWNSTREAM CREATOR STATE VERIFIED
```

The control plane is becoming programmable.

So the control plane itself must be benchmarked.

## New Deep Drift Construct: Identity Lifecycle Automation and Capability Continuity Fidelity

### Definition

**ILACCF** measures whether programmatic membership, role, seat, and invitation mutations produce the intended effective creator-authority state across supported surfaces.

The state chain is:

```text
ADMIN INTENT
-> ADMIN API REQUEST
-> MEMBERSHIP / ROLE STATE
-> WORKSPACE AUTHORITY
-> FEATURE ACCESS
-> APP / SKILL / AGENT ACCESS
-> ACTIVE SESSION STATE
-> ARTIFACT / EXTERNAL ACTION STATE
```

A high-fidelity system should preserve causality across the entire chain.

## New Failure Classes

### Membership Revocation Lag

A member is removed through the Admin API but an already-open session, cached capability, or connected workflow remains operational longer than expected.

### Role Mutation Partial Convergence

The API reports a successful role update while some surfaces still reflect the prior role.

### Invitation-State Misclassification

An invitation exists, is resent, deleted, or accepted, but downstream systems interpret its state incorrectly.

### Admin API / SCIM Authority Conflict

A workspace uses both SCIM-managed identity and workspace-scoped Admin APIs, producing ambiguous or competing mutation paths.

### Seat-State Capability Drift

A seat change succeeds administratively but feature availability does not match the resulting entitlement state.

### Last-Owner Protection Edge Failure

Automation attempts to remove or demote the last owner and the system's protective behavior differs from the administrator's expected workflow.

### Session Survival After Revocation

A user loses workspace authority but a running Work, Codex, agent, plugin, or scheduled flow continues using old session state.

### Historical Authority Provenance Loss

A later artifact exists, but the reviewer cannot reconstruct whether the creator was an active member, what role they held, or which API/SCIM path established that authority at execution time.

### Capability Rehydration Drift

A removed user is re-invited or re-added, but old installed procedures, local state, cached sessions, or connected-app state reappear unexpectedly.

## Deep Drift Benchmark: Programmatic Membership Mutation Test

### Controlled setup

Create:

```text
USER A
USER B
WORKSPACE W1

ROLE R1 = standard member
ROLE R2 = restricted creator role

SKILL S1
PLUGIN P1
WORK ACCESS
CODEX ACCESS
SITE EDIT ACCESS
SCHEDULED TASK T1
```

### Test sequence

1. Create invitation for USER A through Admin API.
2. Accept invitation.
3. Verify effective role and creator capability state.
4. Update USER A from R1 to R2.
5. Test web, desktop, Work, Codex, and plugin access.
6. Start one long-running task.
7. Remove USER A from the workspace through Admin API.
8. Test whether the running task, open session, and external mutation rights close correctly.
9. Re-invite USER A.
10. Verify whether prior procedural/install/session state reappears.
11. Repeat one mutation through SCIM and compare convergence behavior.

## New Metrics

### Lifecycle Mutation Convergence Rate

```text
LMCR =
surfaces reflecting intended membership / role state
/
all tested relevant surfaces
```

### Revocation Closure Time

```text
RCT =
elapsed time from authoritative revocation
to loss of all tested creator capabilities
```

### Authority Reconstruction Completeness

```text
ARC =
artifact-producing runs with reconstructable
membership + role + mutation path + effective capability state
/
all controlled runs
```

### Dual-Control Conflict Rate

```text
DCCR =
identity mutations where SCIM and Admin API state
produce conflicting or ambiguous effective authority
/
all dual-control tests
```

## Why This Is a Creator Workflow Update

It is tempting to classify Admin APIs as "IT administration" and move on.

That would be analytically lazy.

Creator agents increasingly depend on:

- persistent Skills;
- apps;
- Work;
- Codex;
- Sites;
- scheduled tasks;
- webhook-triggered tasks;
- connected sources;
- role-controlled publishing;
- external mutations.

The identity lifecycle now sits upstream of all of them.

So:

```text
CREATOR WORKFLOW RELIABILITY
REQUIRES
IDENTITY LIFECYCLE RELIABILITY
```

A technically perfect Skill cannot execute reproducibly if authority state is unstable.

A perfectly preserved artifact chain can still become unauditable if the user's role at the moment of creation cannot be reconstructed.

## Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing release found beyond the recently logged Temporary Chat and cross-surface memory changes. |
| Skills | No new Skill object release; identity lifecycle automation changes who can access and execute Skills. |
| Mini-app builders | No newer launch found beyond the Sites/Canvas collaborative mini-app changes already logged. |
| Chat-to-document export | No newer launch found. |
| DOCX / PDF generation | No newer launch found. |
| Copy-paste / export fixes | No newer fix found in this pass. |
| Broader creator workflow | **Material new-to-log item:** programmatic workspace invitation, role, seat, and membership mutation now sits upstream of creator capability state. |

## Fresh Cross-Platform Notes

### OpenAI

The unlogged item in this pass is the workspace-scoped Admin API for invitation and member administration. Recent adjacent creator signals remain:

- Temporary Chat personalization and save-state promotion;
- centralized identity management;
- Skills and plugins;
- Sites collaboration;
- Work scheduled/webhook tasks;
- Project memory controls;
- native artifact editing.

### Anthropic

Claude Code 2.1.250 is dated 28 August 2026 and is described only as bug fixes and reliability improvements. No sufficiently specific creator-workflow delta was available to justify a separate Deep Drift construct in this run.

### Google

No newer 28 August Workspace creator release displaced the current Studio, Canvas, Gemini, Notebook, migration, or structured-action changes already logged.

### Microsoft

The latest broad Microsoft 365 Copilot release batch remains the 25 August set already represented in the Deep Drift ledger.

## Deep Drift Research Position

The creator stack is becoming programmable at both ends.

At one end:

```text
CHAT / AGENT
-> ARTIFACT / ACTION
```

At the other:

```text
ADMIN API
-> AUTHORITY
-> CAPABILITY
```

That means a serious provenance system must record not only what the model did, but **why the actor was allowed to do it at that exact moment**.

Therefore:

```text
AUTHORIZED
!=
AUTHORITY PROVEN

ROLE CHANGED
!=
CAPABILITY CONVERGED

MEMBER REMOVED
!=
SESSION DEAD

ADMIN API SUCCESS
!=
WORKFLOW STATE VERIFIED
```

The next reliability problem is not merely whether agents obey permissions.

It is whether **permissions themselves mutate cleanly enough for agent behavior to remain interpretable**.

## Evidence Boundary

Platform facts in this report are grounded in OpenAI's first-party Enterprise & Edu release notes and current ChatGPT release documentation, with first-party Anthropic, Google, and Microsoft release sources checked for fresher category-displacing changes. ILACCF, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, **ChatGPT Enterprise & Edu - Release Notes**, August 20, 2026 - workspace-scoped Admin APIs for invitation and member administration: https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes
2. OpenAI Help Center, **ChatGPT Release Notes**, current through 27 August 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
3. Anthropic, **Claude Code changelog**, 28 August 2026 - version 2.1.250: https://code.claude.com/docs/en/changelog
4. Google Workspace Updates, August 2026: https://workspaceupdates.googleblog.com/2026/08/
5. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through 25 August 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
