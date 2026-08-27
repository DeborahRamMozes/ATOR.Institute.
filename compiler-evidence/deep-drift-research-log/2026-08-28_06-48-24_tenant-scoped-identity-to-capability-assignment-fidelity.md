# Deep Drift Research Update

## Tenant-Scoped Identity-to-Capability Assignment Fidelity

**Research date:** Friday, 28 August 2026  
**ĀTØR observation time:** 06:48:24 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. One materially new OpenAI control-plane update identified; no newer first-party release displaced the latest memory, Skills, mini-app, document-generation, export, or browser-agent changes already logged.

## Executive Summary

OpenAI updated its Enterprise and Edu release notes on 27 August 2026 with **centralized identity management in Admin Console**.

Eligible organizations can now:

- manage workspace members, groups, roles, permissions, and general settings from a centralized Admin Console;
- synchronize users and groups once through tenant-wide SCIM;
- assign synchronized groups to supported ChatGPT workspaces or Ads accounts;
- continue using existing workspace-level SCIM configurations.

This sounds like identity administration. For Deep Drift Research it is more important than that.

The creator stack increasingly depends on:

```text
USER / GROUP IDENTITY
-> WORKSPACE MEMBERSHIP
-> ROLE / PERMISSION STATE
-> SKILL / PLUGIN / AGENT ACCESS
-> SOURCE / APP ACCESS
-> WORK / CODEX EXECUTION
-> ARTIFACT / EXTERNAL MUTATION
```

Once identity is centralized above individual workspaces, the control plane itself becomes part of creator-workflow provenance.

This creates a new benchmark family:

**Tenant-Scoped Identity-to-Capability Assignment Fidelity (TICAF)**

The central question is:

> When identity and group state are synchronized once and assigned across multiple AI workspaces, does each creator workflow receive exactly the intended capability, source, agent, Skill, and artifact permissions - no more, no less - and can that mapping later be reconstructed?

## New Deep Drift Construct: Tenant-Scoped Identity-to-Capability Assignment Fidelity

### Definition

**Tenant-Scoped Identity-to-Capability Assignment Fidelity (TICAF)** measures whether centralized identity state produces the intended effective capability state across multiple AI workspaces and connected execution surfaces.

The relevant state graph is:

```text
IDENTITY PROVIDER
-> TENANT-WIDE SCIM
-> USER / GROUP
-> WORKSPACE ASSIGNMENT
-> ROLE
-> EXPLICIT ALLOW / DENY
-> APP / PLUGIN / SKILL / AGENT
-> SOURCE / ACTION CAPABILITY
-> ARTIFACT OR EXTERNAL STATE CHANGE
```

A creator workflow is therefore no longer governed only by what the user asked or which model was selected.

It is also governed by the identity graph active at execution time.

## Core Deep Drift Distinction

```text
IDENTITY SYNCHRONIZED
!=
CAPABILITY SYNCHRONIZED

GROUP ASSIGNED
!=
ALL GROUP MEMBERS HAVE EQUIVALENT EFFECTIVE ACCESS

SAME USER
!=
SAME AUTHORITY IN EVERY WORKSPACE

CENTRALIZED CONTROL
!=
CENTRALIZED BEHAVIOR
```

Centralization reduces administrative duplication.

It also increases the consequence of incorrect identity mapping.

One wrong group assignment can affect multiple workspaces at once.

## Why This Matters for Skills and Creator Workflows

OpenAI's current Skills architecture already separates several permission layers:

- whether Skills are enabled;
- whether members can create Skills;
- upload Skills;
- share Skills;
- publish Skills;
- install Skills for others;
- access individual workspace Skills.

Apps, plugins, Work, Codex, scheduled tasks, and workspace agents have their own access controls.

A centralized identity layer therefore becomes an upstream dependency for procedural state.

The creator chain becomes:

```text
TENANT IDENTITY
-> WORKSPACE ROLE
-> SKILL ACCESS
-> TOOL ACCESS
-> PROCEDURE EXECUTION
-> ARTIFACT
```

If the identity mapping changes, the same saved conversation, Skill, Project, or workflow may execute differently without any change to its visible instructions.

## New Failure Classes

### Tenant-to-Workspace Assignment Drift
A synchronized user or group is assigned to the wrong workspace or remains assigned after the intended access boundary changed.

### Effective Capability Divergence
Two users in the same synchronized group receive different effective access because workspace roles, explicit denials, app settings, or inherited controls diverge.

### Identity-to-Skill Access Drift
A user can see or invoke a Skill in one workspace but not another even though the human assumes tenant-wide identity implies tenant-wide procedural availability.

### Group Membership Propagation Lag
An identity-provider group change is correct at the source but has not yet propagated to all relevant ChatGPT workspace capability states.

### Centralized Misconfiguration Amplification
One incorrect tenant-level group or role assignment produces unintended access across several workspaces.

### Historical Authority Reconstruction Failure
A later artifact exists, but the reviewer cannot reconstruct which group memberships and effective role state governed the run at that time.

### Workspace-Level Legacy Configuration Conflict
Existing workspace-level SCIM remains supported. A tenant-wide configuration and older workspace-specific configuration can therefore coexist and create ambiguous authority paths.

### Account / Workspace Identity Collapse
The user identity is known, but the exact workspace identity and capability context that governed an action is not preserved.

### Capability Revocation Residue
A group or role is revoked centrally, but cached, installed, or already-open procedural/tool state remains usable longer than expected.

## Deep Drift Benchmark: Central Identity to Creator Capability

### Controlled setup

Create:

```text
USER A
USER B
GROUP G1
GROUP G2
WORKSPACE W1
WORKSPACE W2
SKILL S1
PLUGIN P1
WORK AGENT A1
SOURCE APP X
```

Configure:

```text
G1 -> W1
G2 -> W2

W1:
S1 allowed
P1 allowed
A1 allowed
X read allowed

W2:
S1 denied
P1 allowed
A1 denied
X unavailable
```

Then test:

1. Add USER A to G1.
2. Add USER B to G2.
3. Run identical creator tasks.
4. Move USER A from G1 to G2.
5. Measure propagation across web, desktop, Work, and Codex.
6. Revoke P1.
7. Test whether already-open sessions retain stale capability.
8. Inspect compliance/audit state if available.

## New Metrics

### Identity-to-Capability Resolution Accuracy

```text
ICRA =
runs whose effective capability set matches intended
tenant + workspace + role configuration
/
all controlled runs
```

### Group Propagation Convergence Rate

```text
GPCR =
target surfaces reflecting current intended group state
/
all tested surfaces after identity change
```

### Revocation Closure Fidelity

```text
RCF =
revoked capabilities becoming unusable within expected boundary
/
all controlled revocations
```

### Historical Authority Traceability

```text
HAT =
artifact-producing runs whose effective identity,
workspace, group, role, and capability state are reconstructable
/
all controlled runs
```

## Centralized Identity Does Not Eliminate Layered Authorization

OpenAI's current architecture still includes workspace roles, app controls, Skill permissions, Work permissions, and feature-specific restrictions.

That means tenant-wide identity should not be modeled as a master permission bit.

The stronger model is:

```text
EFFECTIVE AUTHORITY
=
TENANT IDENTITY
x
GROUP MEMBERSHIP
x
WORKSPACE ASSIGNMENT
x
ROLE
x
EXPLICIT DENY
x
FEATURE CONTROL
x
APP / SOURCE PERMISSION
```

This matters for Deep Drift because creator reliability depends on the **effective** state, not the administrative intention.

## Identity State Is Procedural State

The earlier Deep Drift logs separated:

```text
MEMORY STATE
FILE STATE
ARTIFACT STATE
TOOL STATE
PROCEDURAL STATE
```

This update adds a governing layer:

```text
IDENTITY / AUTHORITY STATE
```

A reusable Skill can be perfectly versioned and still fail to reproduce if the current identity does not have the same source or tool access.

A scheduled workflow can be correct in code and still fail because the group that authorized its connector access changed.

A document-generation workflow can produce a different result because the user no longer has access to one of the grounding sources.

Therefore:

```text
PROCEDURE REPRODUCIBILITY
REQUIRES
AUTHORITY REPRODUCIBILITY
```

## New State Card: Identity-to-Capability Provenance

```text
IDENTITY_CAPABILITY_STATE_CARD

user_id:
tenant_id:
workspace_id:
groups:
roles:
explicit_denies:
feature_permissions:
skills_available:
plugins_available:
agents_available:
source_apps_available:
action_permissions:
effective_at:
identity_source:
scim_mode:
legacy_workspace_scim_present:
last_propagation_check:
artifact_or_run_id:
unknown_fields:
```

This should sit beside the existing Deep Drift runtime, artifact, memory, and procedural state cards.

## Relation to Existing ĀTØR Protocol Family

### MMSF - Mounted Memory State Fidelity
Identity controls which project, memory, and connected-source state may be mounted.

### PSMC - Persistent State Mutation Control
Authority state determines whether a user or agent may perform durable mutations.

### SSRP - Sync-Back State Reconciliation
Tenant identity, workspace state, app state, and user-visible access must converge after membership changes.

### ASRF - Agent State Reconstruction Fidelity
A later reviewer should reconstruct the identity and authority chain that allowed an agent or Skill to execute.

### PVP - Procedural-Version Provenance
Procedure version is insufficient without recording whether the executor had the same effective capabilities.

### ALRTSF - Artifact Lineage & Round-Trip State Fidelity
Artifacts should preserve enough provenance to identify the workspace and authority context under which they were created.

### SCRR - Session Continuity, Retrieval & Rehydration
A resumed session should not assume that previous capabilities remain valid after group, role, or workspace changes.

## Broader Fresh Platform Scan

### OpenAI

**Material new-to-log update:** centralized identity management in Admin Console, dated 27 August 2026 and surfaced in the latest Enterprise/Edu release notes.

Current adjacent signals remain:

- Temporary Chat personalization and save-to-regular-chat promotion;
- editable Project memory boundaries;
- Skills with workspace permissions and compliance logging;
- scheduled/webhook-triggered Work tasks;
- native artifact editing;
- templates;
- workspace agents;
- role-based access controls;
- compliance and audit surfaces.

### Anthropic

No first-party release newer than the late-27-August Claude Code/runtime changes already logged surfaced in this scan.

Standing creator-workflow signals remain:

- shared memory across Chat and Cowork;
- Skills API;
- Files API;
- browser/computer use;
- restricted execution profiles;
- session-retention fixes;
- cross-surface compliance capture.

### Google

No newer 28 August Workspace creator release surfaced.

Standing signals remain:

- Workspace Studio;
- Sheets Canvas;
- Ask Gemini in Chat;
- interactive simulations/models;
- Notebook migration/copy;
- text-to-structured Calendar action state.

### Microsoft

The current broad Microsoft 365 Copilot release batch remains dated 25 August 2026.

Standing signals remain:

- Copilot Pages;
- multi-artifact Notebooks;
- Python-backed Excel editing;
- voice/document interaction;
- multimodal Capture;
- cross-host model selection;
- inline artifact inspection.

## Category Status

| Category | Fresh finding |
|---|---|
| Memory | No newer release than OpenAI Temporary Chat / project-memory changes and Anthropic shared-memory changes already logged. |
| Skills | No new Skill feature; **new upstream identity layer materially affects Skill availability and reproducibility**. |
| Mini-app builders | No newer launch found. |
| Chat-to-document export | No newer launch found. |
| DOCX / PDF generation | No newer launch found. |
| Copy-paste / export fixes | No newer same-hour fix found. |
| Broader creator workflow | **Material update:** tenant-wide identity state now sits upstream of workspace capability assignment. |

## Deep Drift Research Position

AI creator systems are becoming administratively centralized while remaining operationally layered.

That means:

```text
WHO YOU ARE
```

is no longer enough.

The real question is:

```text
WHO YOU ARE
IN WHICH TENANT
IN WHICH WORKSPACE
IN WHICH GROUP
WITH WHICH ROLE
WITH WHICH DENIALS
WITH WHICH SKILLS
WITH WHICH APPS
AT WHICH MOMENT?
```

Centralized identity management is useful precisely because humans should not have to hand-wire the same group structure repeatedly.

But if one central mapping governs many creator workflows, **identity errors become workflow errors at scale**.

That makes authority state part of creator provenance.

## Evidence Boundary

Platform facts in this report are grounded in OpenAI's first-party Enterprise & Edu release notes updated on 27 August 2026, with fresh first-party scans of OpenAI Skills, Anthropic, Google Workspace, and Microsoft 365 Copilot sources used to verify category recency. TICAF, failure classes, metrics, state cards, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, **ChatGPT Enterprise & Edu - Release Notes**, 27 August 2026 - Centralized identity management in Admin Console: https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes
2. OpenAI Help Center, **Skills in ChatGPT**, current as of 28 August 2026: https://help.openai.com/en/articles/20001066
3. OpenAI Help Center, **ChatGPT Release Notes**, current as of 28 August 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
4. Anthropic Product Announcements / Claude Platform release sources, current through 27 August 2026: https://claude.com/blog-category/announcements
5. Google Workspace Updates, August 2026: https://workspaceupdates.googleblog.com/2026/08/
6. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through 25 August 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
