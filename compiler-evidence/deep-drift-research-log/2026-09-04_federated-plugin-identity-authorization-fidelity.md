# Deep Drift Research Update - FPIAF

## Federated Plugin Identity-Authorization Fidelity

**Research date:** 4 September 2026  
**Primary unlogged delta:** On 29 July 2026, OpenAI began rolling out **Sign in with ChatGPT** across selected plugins and partner sites, starting with Airtable, GitLab, HubSpot, Notion, Supabase, and Vercel. OpenAI states that sign-in shares only name, email, and profile picture where available, while the access granted to each plugin is reviewed and approved separately.

## Executive finding

Plugin ecosystems are splitting one apparently simple action - “connect this app” - into at least two independent trust operations:

```text
IDENTITY FEDERATION
        +
PLUGIN AUTHORIZATION
        =
USABLE CREATOR INTEGRATION
```

For Deep Drift:

```text
SIGNED IN
!= AUTHORIZED TO ACT

SAME CHATGPT IDENTITY
!= SAME PARTNER PERMISSIONS

ACCOUNT CREATED
!= PLUGIN CONNECTED

PLUGIN CONNECTED
!= ALL SCOPES APPROVED

IDENTITY CONTINUITY
!= CAPABILITY CONTINUITY
```

The new provenance object is the **identity-to-capability binding**.

## 1. Sign-in and tool permission are now explicitly separate

OpenAI documents that Sign in with ChatGPT can create or link an account with a participating partner, but plugin access is still reviewed and approved separately.

This means a creator workflow can have:

```text
CHATGPT IDENTITY -> PARTNER ACCOUNT
```

without necessarily having:

```text
CHATGPT PLUGIN -> PARTNER DATA / ACTION SCOPE
```

A research log that records only “connected to Notion” or “signed into Supabase” is therefore underspecified.

## 2. Identity provenance and execution provenance diverge

A single ChatGPT identity may be used to establish accounts across several partner platforms while each plugin receives different permissions.

Minimum state:

```text
chatgpt_identity
partner_service
partner_account_id_or_role
identity_link_time
identity_attributes_shared
plugin_connection_state
approved_scopes
scope_change_time
authorization_revocation_state
execution_event
```

The identity layer answers **who is this account linked to?**

The authorization layer answers **what is ChatGPT allowed to do?**

Those are different questions and must remain separate.

## 3. Same identity does not imply same capability

Suppose the same ChatGPT account signs into GitLab and Notion:

```text
CHATGPT IDENTITY D
   |
   +--> GitLab account -> read repositories
   |
   +--> Notion account -> read + create pages
```

The identity root is shared, but the execution scope differs.

Deep Drift must not use identity continuity as shorthand for permission continuity.

## 4. Account creation becomes part of the agentic workflow

Sign in with ChatGPT can be used not merely to authenticate an existing account but to create or link one on supported partner sites.

That expands the creator workflow:

```text
CHAT
-> DISCOVER PLUGIN
-> ESTABLISH PARTNER IDENTITY
-> AUTHORIZE PLUGIN
-> EXECUTE WORKFLOW
```

Account provisioning is therefore moving inside the LLM workflow itself rather than remaining external setup.

## 5. “Connected” becomes a dangerously vague state

A UI may show that a service is connected while several materially different states are possible:

```text
A. partner account exists only
B. account linked through ChatGPT identity
C. plugin installed
D. plugin authorized read-only
E. plugin authorized read/write
F. authorization expired or revoked
```

Deep Drift should prohibit `connected=true` as a sufficient provenance field.

## 6. Permission changes can occur without identity changes

The user can remain the same person and retain the same partner account while plugin scopes change.

Therefore:

```text
IDENTITY VERSION
!= AUTHORIZATION VERSION
```

A benchmark repeated after a scope change is not operationally identical even if the user, prompt, model, and partner account are unchanged.

## 7. Creator templates and Skills inherit this distinction

OpenAI plugins can package Skills, apps, and app templates for repeatable workflows. Once identity federation is added, reusable creator workflows may depend on three independent layers:

```text
PROCEDURAL LAYER -> Skill / template
IDENTITY LAYER   -> partner account
CAPABILITY LAYER -> approved plugin scope
```

A shared template can therefore be structurally identical across users yet behave differently because each recipient binds a different partner identity and different permissions.

## 8. Shared workflows are not shared authorization

This extends the logic already visible in shared scheduled tasks: recipients can receive instructions or workflow structure but must connect their own apps.

The portable object is increasingly:

```text
WORKFLOW LOGIC
```

not:

```text
WORKFLOW LOGIC + CREATOR CREDENTIALS + CREATOR PERMISSIONS
```

For provenance, workflow portability and authorization portability must be tracked separately.

## 9. Revocation becomes part of reproducibility

An old workflow may become impossible to reproduce because a plugin permission was later revoked even though the partner account and ChatGPT account still exist.

```text
PAST RUN: identity + scope S1 -> success
CURRENT RUN: identity + scope S0 -> unavailable
```

Without authorization history, the failure can be misdiagnosed as model or plugin regression.

## 10. DOCX/PDF reports flatten authorization state

A finished document can state that information came from GitLab, Notion, HubSpot, or Supabase while omitting the permission path that enabled retrieval or mutation.

Therefore:

```text
FINAL REPORT
!= COMPLETE ACCESS PROVENANCE
```

Deep Drift reports should preserve an access manifest when connected-app permissions materially affect the evidence gathered or actions performed.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger unlogged delta in this scan | Existing memory/session nodes remain current |
| Skills / plugins | **Major unlogged gap** | Identity establishment and plugin authorization are separate workflow states |
| Mini-app builders | Adjacent | Reusable workflows can bind different partner identities and scopes per user |
| Chat-to-document | Provenance implication | Generated reports can conceal the authorization path used to obtain source data |
| DOCX/PDF | Provenance implication | Static files flatten identity, scope, revocation, and access history |
| Copy-paste/export | No stronger direct new fix | Access provenance is the more material missing layer in this run |
| Creator workflow | **Major** | Account creation/linking is moving inside the LLM/plugin workflow itself |

## New failure classes

### Signed-In-Equals-Authorized Fallacy
Assuming partner sign-in means the plugin is authorized to access or modify data.

### Identity-Capability Collapse
Using one account identity field as though it describes all plugin permissions.

### Connected-Boolean Ambiguity
Representing a multi-stage account/plugin state as `connected=true`.

### Scope-Drift Misdiagnosis
Attributing changed behavior to the model when plugin permission scope changed.

### Workflow-Authorization Portability Error
Assuming a shared Skill, template, or scheduled workflow carries the original creator's credentials or permissions.

### Revocation-History Loss
Failing to preserve the authorization state that existed when a past run succeeded.

## Deep Drift benchmark additions

**Identity-Authorization Separation Fidelity (IASF)**  
Can identity linkage and plugin authorization be reconstructed independently?

**Authorization Scope Version Fidelity (ASVF)**  
Can approved scopes and later changes or revocations remain versioned?

**Workflow Binding Fidelity (WBF)**  
Can a reusable Skill/template remain linked to the specific partner identity and permission state used for each run?

**Revocation Reproducibility Fidelity (RRF)**  
Can a failed repeat run distinguish revoked access from model/plugin regression?

**Partner Identity Attribution Fidelity (PIAF)**  
Can the exact partner account or role used by a connector remain attributable where observable?

## DRPA-1.0 protocol additions

### IDENTITY-AUTHORIZATION SEPARATION RULE

> When an LLM platform can establish or reuse a federated identity with a partner service, preserve identity linkage separately from plugin authorization. Record partner account identity or role, identity-link event, attributes shared, plugin connection state, approved scopes, and later scope changes or revocation where observable. Sign-in must never be treated as proof of tool authorization.

### AUTHORIZATION-SCOPE VERSIONING RULE

> Plugin permission state must be versioned independently from user identity, model version, workflow instructions, and partner account. Reproducibility claims must preserve the scope that existed at execution time.

### WORKFLOW-AUTHORIZATION PORTABILITY RULE

> Shared Skills, templates, plugins, or scheduled workflows should be treated as portable procedural objects, not portable credentials. Each user's identity binding and plugin permission state must remain separate from the shared workflow definition.

### ACCESS-PATH REPORTING RULE

> When a generated document or research result materially depends on connected-app data or mutations, preserve the service, partner identity or role, plugin authorization state, access mode, and execution time in an access manifest. Static output alone is insufficient access provenance.

## Eir'an state-flow addition

```text
IDENTITY:
ChatGPT account
partner service
partner account / role
attributes shared
link timestamp

PLUGIN:
installed state
authorized state
approved scopes
revocation / expiry

PROCEDURE:
Skill
template
workflow
scheduled task

EXECUTION:
read
write
create
update
result

ARCHIVE:
access manifest
output artifact
scope snapshot
```

## Canonical Deep Drift requirement

> Treat federated identity and plugin authorization as separate provenance layers. Preserve who the partner account is, how the identity was established, what information was shared during sign-in, which plugin scopes were approved, and what authorization state existed when an action or retrieval occurred.

## Deep Drift principle

> **Knowing who you are is not the same as being allowed to touch the files.**

Operationally:

> **Archive identity, permission, and workflow as three different objects.**

## Broader platform scan

The current first-party OpenAI release notes still show **September 1, 2026** as the newest listed ChatGPT release. The recent September item is Healthcare Public Data for clinicians; the most relevant creator-workflow changes immediately before it remain WebMCP site tools, multi-account Google plugins, personalized temporary chats, webhook tasks, and signed-in Work browser sessions, all already represented by prior Deep Drift nodes.

Anthropic's current memory documentation remains focused on migrated memory, chat search, project boundaries, and cloud-vs-local Cowork memory behavior, already covered by prior nodes. Google's latest Workspace feed remains centered on Gemini Notebook audit logging, and Microsoft's latest generally available Copilot release batch remains August 25, 2026. No stronger same-day unlogged DOCX/PDF or copy-paste fix was found in this scan.

## Sources

1. OpenAI Help Center. **ChatGPT Release Notes - July 29, 2026: Sign in with ChatGPT.** OpenAI began rolling out Sign in with ChatGPT for selected plugins and partner sites, initially Airtable, GitLab, HubSpot, Notion, Supabase, and Vercel. OpenAI states that only name, email, and profile picture where available are shared during sign-in, while plugin access is separately reviewed and approved.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

2. OpenAI Help Center. **ChatGPT Release Notes - July 9, 2026: Plugin Directory and Skills.** Plugins can package Skills, apps, and app templates for specific workflows, providing the procedural layer whose identity and authorization bindings vary by user.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

3. OpenAI Help Center. **ChatGPT Release Notes - August 25, 2026: Shared scheduled tasks.** Shared tasks can be customized by recipients, who connect their own apps and create independent copies, reinforcing the separation between portable workflow logic and per-user authorization.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

## Research status

**Node status:** New.  
**Duplicate check:** GitHub code search found no existing Deep Drift research-log node for Sign in with ChatGPT, federated partner identity, and separately approved plugin authorization as one provenance problem.  
**Relationship to prior nodes:** Extends ESPF and multi-account connector provenance, AERF execution-route provenance, and plugin/Skill workflow nodes. FPIAF is distinct because it models the trust boundary between identity establishment and capability authorization before execution begins.  
**Freshness:** The underlying product change launched 29 July 2026; it was identified as an unlogged provenance gap during the 4 September 2026 scan. The newest ChatGPT release currently listed is 1 September 2026.
