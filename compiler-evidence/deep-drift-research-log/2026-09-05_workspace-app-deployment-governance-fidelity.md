# Deep Drift Research Update - WADGF

## Workspace App Deployment Governance Fidelity

**Research date:** 5 September 2026  
**Status:** New node  
**Primary fresh delta:** OpenAI's current Apps SDK and Developer Mode documentation describes an Enterprise/Edu deployment lifecycle for custom ChatGPT apps: authorized developers can test private MCP apps, create drafts from scanned tool manifests, use OAuth where needed, and submit apps for admin/owner publication. Enterprise/Edu admins can govern developer access with RBAC, configure app access by group, enable or disable individual actions, and later refresh server changes as diffs. New actions discovered after refresh are disabled by default.

## Core finding

```text
MCP SERVER
-> DEVELOPER MODE
-> TOOL SCAN
-> DRAFT
-> ADMIN REVIEW
-> ACCESS + ACTION POLICY
-> PUBLISH
-> USER AUTHENTICATION
-> PER-MESSAGE INVOCATION

SERVER CHANGES
-> REFRESH
-> DIFF
-> NEW ACTIONS DISABLED BY DEFAULT
-> ADMIN DECISION
```

For Deep Drift:

```text
SAME APP NAME != SAME DEPLOYED CAPABILITY
SAME MCP SERVER != SAME ENABLED ACTION SET
SERVER UPDATED != WORKSPACE CAPABILITY UPDATED
DEVELOPER CAN BUILD != DEVELOPER CAN PUBLISH
APP AVAILABLE != USER AUTHENTICATED
APP ACCESS != ACTION AUTHORIZATION
```

The effective provenance object is the **deployment-governance state**.

## Why it matters

An app version is no longer enough to reconstruct capability. Two workspaces can run the same app and server version while exposing different action sets because action policy is deployment-specific. The correct comparison object is therefore:

```text
APP VERSION
+ SERVER MANIFEST
+ ACTION POLICY VERSION
+ ACCESS POLICY
+ USER AUTH STATE
```

OpenAI also states that app selection applies at the message level. An app can be available in a conversation without being invoked for every turn, and users can discuss previous app results without making a new call. Deep Drift therefore needs per-message app invocation provenance rather than a flat `apps_used` field.

Full MCP support adds write/modify actions, so governance now covers mutation as well as retrieval. The archive should distinguish action available, confirmation requested, confirmation granted, action blocked, and action executed.

The Apps SDK also separates UI, backend tool state, and workspace action policy. A visible control does not prove the corresponding backend action is authorized.

## DOCX/PDF and export consequence

A generated report may depend on multiple governed actions, for example CRM retrieval -> document generation -> Drive upload -> Slack post. The final DOCX/PDF can preserve content and layout while flattening which app fetched data, which action created or uploaded the file, which workspace policy allowed it, which user authenticated, and which confirmation occurred.

For reproducible Deep Drift runs, static artifacts should optionally carry an action-lineage manifest.

Copy-paste creates another boundary: derivative content can survive after an app is unpublished, an action is disabled, OAuth access is revoked, or the source app is removed.

## New Deep Drift failure classes

- **App-Equals-Deployment Fallacy:** one app definition is assumed to equal one effective capability state.
- **Server-Equals-Workspace Capability Fallacy:** every server-exposed action is assumed to be enabled.
- **Published-Equals-Authorized Fallacy:** publication is assumed to grant every user every action.
- **User-Access-Equals-Authentication Fallacy:** RBAC access is confused with active OAuth connectivity.
- **UI-Control-Equals-Action Availability Fallacy:** visible UI is treated as proof of backend authorization.
- **Message-Availability-Equals-Message-Invocation Error:** app availability in chat is confused with invocation on a specific message.
- **Server-Update-Equals-Deployment-Update Error:** backend changes are treated as immediately active despite refresh/diff/approval boundaries.

## Benchmark additions

**Deployment Capability Fidelity (DCF)** - Can the archive reconstruct the exact action subset enabled for a workspace deployment?  
**Server-to-Deployment Drift Fidelity (SDDF)** - Can server-side tool changes be separated from workspace-approved capability changes?  
**Developer-Publisher Separation Fidelity (DPSF)** - Can authorship, testing authority, publishing authority, and end-user access remain separately attributed?  
**Per-Message App Invocation Fidelity (PMAIF)** - Can each answer/action be linked to the apps actually selected or invoked for that message?  
**User Authentication Continuity Fidelity (UACF)** - Can workspace authorization be separated from per-user OAuth/token continuity?  
**Action Governance Fidelity (AGF)** - Can enabled, disabled, confirmation-required, blocked, and executed states be reconstructed per action?

## DRPA additions

### WORKSPACE APP DEPLOYMENT STATE RULE
Preserve app definition, MCP server state, tool-scan snapshot, draft state, publisher identity, workspace access policy, enabled-action set, and per-user authentication separately. App name/version alone is insufficient evidence of effective capability.

### SERVER-DEPLOYMENT DIVERGENCE RULE
Preserve server-side tool changes separately from workspace-approved deployment changes. Record refresh events, diffs, newly discovered actions, modified definitions, and enablement decisions.

### DEVELOPER-PUBLISHER-ACTOR SEPARATION RULE
Preserve who built, tested, approved/published, received access, authenticated, and caused each execution. Technical authorship, institutional authority, and execution identity are different objects.

### PER-MESSAGE APP INVOCATION RULE
Do not treat conversation-level app availability as evidence of app use on every message. Preserve app selection and invocation at message/action level.

### ACTION-POLICY VERSION RULE
Record action enablement as a versioned deployment property independent of app and server versions.

## Canonical Deep Drift requirement

> Treat internal AI apps as deployment-specific capability objects. Preserve app definition, server manifest, development authorization, publication event, access policy, action policy, user authentication, per-message invocation, confirmation state, and later server-policy divergence separately.

## Deep Drift principle

> **The app is not what the server can do. The app is what this workspace has allowed it to do today.**

Operationally:

> **Archive the deployed action set, not the logo in the app directory.**

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger unlogged change | Recent memory portability/lifecycle nodes remain current |
| Skills/plugins | Major deployment implication | Reusable capabilities now sit inside governance/action-control layers |
| Mini-app builders | **Major fresh delta** | Enterprise/Edu can build, test, govern, and publish internal Apps SDK/MCP apps |
| Chat-to-document | Major indirect effect | Documents can be products of governed multi-app action chains |
| DOCX/PDF | Provenance implication | Static files flatten action ancestry and policy state |
| Copy-paste/export | Governance implication | Derivatives can persist after access or authorization changes |
| Creator workflow | **Major** | App creation is becoming controlled institutional deployment infrastructure |

## Sources

1. OpenAI Help Center, **ChatGPT Enterprise & Edu - Release Notes**, 3 September 2026: https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes
2. OpenAI Help Center, **Build with the Apps SDK**, updated 5 September 2026: https://help.openai.com/en/articles/12515353-build-with-the-apps-sdk
3. OpenAI Help Center, **Developer mode and MCP apps in ChatGPT**, current September 2026: https://help.openai.com/en/articles/12584461
4. Google Workspace Updates, **Custom instructions for Gemini in Workspace now available in more apps**, 3 September 2026: https://workspaceupdates.googleblog.com/2026/09/custom-instructions-for-gemini-in-Workspace-now-available-in-more-apps.html
5. Google Workspace Updates, **Turn Google Docs, PDFs, and Word files into video summaries in Google Vids**, 2 September 2026; Scheduled Release starts 5 September 2026: https://workspaceupdates.googleblog.com/2026/09/turn-google-docs-pdfs-and-word-files-into-video-summaries-in-Google-Vids.html

## Research status

**Duplicate check:** Repository search found no prior node for the full lifecycle `authorized developer -> tool scan -> draft -> publish -> RBAC -> per-action enablement -> server refresh/diff -> new actions disabled by default -> per-user authentication -> per-message invocation`.

**Relationship to prior nodes:** Extends FPIAF, ITSPF, AERF, DSCF, and LHACF. WADGF is distinct because it treats the deployed workspace configuration as the effective capability object.
