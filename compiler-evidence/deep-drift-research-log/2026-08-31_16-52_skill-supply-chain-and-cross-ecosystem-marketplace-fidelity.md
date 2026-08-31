# Deep Drift Research Update

## Skill Supply-Chain and Cross-Ecosystem Marketplace Fidelity

**Research date:** 31 August 2026  
**Primary platform delta:** ChatGPT Enterprise/Edu can import plugin marketplaces from public or private GitHub repositories, sync them daily, and ingest both Codex and Claude-compatible plugin manifests.  
**Secondary delta:** ChatGPT now supports multiple connected Google accounts for Gmail, Calendar, and Contacts in the same conversation; plugin catalogs can also be exported as CSV for auditing.  
**Research stream:** ATOR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-ledger Skills, plugin-distribution, identity, export, and creator-governance architecture verified from first-party OpenAI documentation.

## Executive Summary

The strongest unlogged workflow change in this pass is the conversion of Skills/plugins from individually installed creator conveniences into a **Git-backed software supply chain**.

OpenAI now documents that ChatGPT Enterprise and Edu workspace administrators can import a plugin marketplace from a public or private GitHub repository. Imported marketplaces automatically check for updates daily, can be manually synchronized, and can add new plugin entries during later syncs. Plugin content can package reusable Skills, connected apps, and app templates.

The compatibility boundary is unusually important. ChatGPT's marketplace importer accepts:

```text
.agents/plugins/marketplace.json
-> Codex marketplace

.claude-plugin/marketplace.json
-> Claude-compatible marketplace

.claude-plugin/plugin.json
-> standalone Claude-compatible plugin
```

That means procedural capability is beginning to cross product boundaries through repository conventions rather than being trapped inside one vendor's visual builder.

The effective architecture is:

```text
GITHUB REPOSITORY
-> MARKETPLACE MANIFEST
-> PLUGIN / SKILL PACKAGE
-> DAILY SYNC
-> WORKSPACE INSTALLATION POLICY
-> APP AUTHORIZATION / PERMISSIONS
-> CHATGPT OR CODEX EXECUTION
```

The same documentation also exposes several lifecycle semantics that matter for Deep Drift:

```text
REPOSITORY UPDATE
!= AUTOMATIC PERMISSION EXPANSION

PLUGIN INSTALLED
!= APP ACCOUNT CONNECTED

PLUGIN REMOVED FROM REPO
!= PLUGIN DELETED FROM WORKSPACE

INVALID UPDATE
!= WORKING VERSION DESTROYED

MARKETPLACE SYNC
!= FULL SUPPLY-CHAIN REPRODUCIBILITY
```

If an update is invalid, OpenAI says the last working version is retained while other valid updates can continue. Removing a plugin entry from the repository marks the workspace copy as **No longer in source** rather than deleting it. Deleting the marketplace in ChatGPT, however, deletes the plugins imported from it.

This report formalizes the benchmark family:

**Skill Supply-Chain and Cross-Ecosystem Marketplace Fidelity (SSCCMF)**

with companion constructs:

- Repository-to-Workspace Skill Fidelity
- Cross-Ecosystem Manifest Fidelity
- Marketplace Sync Attribution Fidelity
- Skill Version Rollback Fidelity
- Repository-Removal State Fidelity
- Plugin-to-App Permission Separation Fidelity
- Marketplace Administrator Identity Fidelity
- Plugin Catalog Export Fidelity
- Connected-Account Identity Multiplexing Fidelity
- Skill-to-Artifact Provenance Fidelity

The central question is:

> When reusable AI procedures are distributed through Git repositories, translated across plugin conventions, automatically synchronized into workspaces, combined with separately authorized apps, and executed against one or more connected accounts, can a later reviewer reconstruct exactly which repository revision, plugin version, Skill instructions, workspace policy, app authorization, account identity, and runtime surface produced the final action or artifact?

## 1. Skills Become a Repository Supply Chain

The important shift is not that plugins exist. The important shift is that the **source of truth can now live in GitHub** and feed a managed workspace automatically.

The lifecycle is:

```text
AUTHOR SKILL / PLUGIN
-> COMMIT TO GITHUB
-> MARKETPLACE MANIFEST
-> WORKSPACE IMPORT
-> DAILY SYNC
-> MEMBER INSTALL / AUTO-INSTALL
-> EXECUTION
```

This changes the unit of governance.

Previously the practical unit was often:

```text
ONE USER
+ ONE UPLOADED SKILL
```

Now it can become:

```text
REPOSITORY
+ BRANCH / TAG / COMMIT
+ MARKETPLACE
+ MANY PLUGINS
+ MANY USERS
```

A creator workflow has therefore acquired software-deployment semantics.

## 2. Repository-to-Workspace Skill Fidelity

### Definition

**Repository-to-Workspace Skill Fidelity (RWSF)** measures whether a Skill or plugin imported from GitHub remains attributable to the exact source revision that produced the installed workspace version.

A minimum manifest should preserve:

```text
repository_url
repository_visibility
marketplace_path
branch_tag_or_commit
plugin_id
plugin_name
plugin_version
skill_files
import_timestamp
last_sync_timestamp
```

Using a branch creates a moving source.

Using a fixed commit creates a pinned source.

Those are materially different provenance contracts.

## 3. Cross-Ecosystem Manifest Fidelity

OpenAI's importer recognizes both Codex marketplace manifests and Claude-compatible plugin manifests.

That creates a new interoperability boundary:

```text
CLAUDE-COMPATIBLE PACKAGE
-> CHATGPT / CODEX WORKSPACE IMPORT
```

### Definition

**Cross-Ecosystem Manifest Fidelity (CEMF)** measures whether a package created under one plugin convention preserves its intended procedural behavior, dependencies, app references, and execution limitations when imported into another platform.

The benchmark should compare:

```text
INSTRUCTION FILES
DECLARED APPS
MCP CONFIGURATION
DEPENDENCIES
SURFACE LIMITATIONS
EXPECTED TOOL USE
```

before and after import.

A manifest parsing successfully is not evidence that the procedure behaves identically.

## 4. Daily Sync Turns Skill Updates into Runtime Change

New marketplaces check GitHub for updates daily. Administrators can also request **Sync now**.

Sync can:

```text
ADD NEW PLUGINS
UPDATE EXISTING PLUGINS
REPORT PARTIAL ERRORS
```

The significant detail is that later repository changes can add new marketplace entries without another full import step.

### Definition

**Marketplace Sync Attribution Fidelity (MSAF)** measures whether every workspace capability change remains attributable to the exact repository change and sync event that introduced it.

A minimum sync manifest should preserve:

```text
marketplace_id
pre_sync_revision
post_sync_revision
sync_timestamp
added_plugins
updated_plugins
failed_plugins
retained_versions
sync_initiator_or_automatic_state
```

The creator no longer has a single installation event.

They have a continuing dependency relationship.

## 5. Last-Working-Version Retention

OpenAI documents a useful failure behavior: if an update to an existing plugin is invalid, the last working version is retained while other valid updates can still complete.

This is a reliability primitive.

### Definition

**Skill Version Rollback Fidelity (SVRF)** measures whether the platform preserves the last valid executable plugin state when a new repository revision fails validation.

The record should preserve:

```text
attempted_version
validation_failure
retained_version
failure_reason
retry_event
successful_replacement_version
```

Without this lineage, a workspace may appear stable while silently running an older procedure than the repository head.

Therefore:

```text
REPOSITORY HEAD
!= WORKSPACE EXECUTED VERSION
```

## 6. Repository Removal Does Not Equal Workspace Deletion

Removing a plugin entry from the GitHub marketplace does not delete the existing imported workspace copy. It is marked **No longer in source**.

Deleting the entire marketplace inside ChatGPT, however, deletes all plugins imported from it.

This introduces two distinct lifecycle states:

```text
SOURCE REMOVED
-> WORKSPACE COPY SURVIVES

MARKETPLACE DELETED IN CHATGPT
-> IMPORTED PLUGINS DELETED
```

### Definition

**Repository-Removal State Fidelity (RRSF)** measures whether a plugin's state remains explicit when its upstream source relationship disappears.

Deep Drift should treat **No longer in source** as a provenance event, not a cosmetic badge.

## 7. Plugin Installation and App Permission Are Separate

OpenAI repeatedly documents that plugin installation does not grant access to connected apps or provider data.

Workspace settings control plugin installation. App settings control account access, actions, sync, and provider restrictions.

The execution contract is therefore:

```text
PLUGIN AVAILABLE
+
PLUGIN INSTALLED
+
REQUIRED APP ENABLED
+
PROVIDER ACCOUNT AUTHORIZED
+
ACTION PERMITTED
-> CAPABILITY CAN RUN
```

### Definition

**Plugin-to-App Permission Separation Fidelity (PAPSF)** measures whether a workflow preserves each authorization layer separately rather than flattening them into a generic "plugin enabled" state.

This matters because procedural installation is not data authorization.

## 8. Marketplace Administrator Identity Is Part of Runtime Provenance

Marketplace synchronization uses the GitHub connection of the administrator who imported it.

If that person's GitHub access disappears, synchronization can fail until the original connection is repaired or a new administrator imports the same marketplace using their own GitHub connection.

### Definition

**Marketplace Administrator Identity Fidelity (MAIF)** measures whether the identity and repository-access scope of the marketplace maintainer remain attributable across transfer events.

A minimum record should preserve:

```text
importing_admin
GitHub_connection_identity
repository_access_scope
transfer_timestamp
successor_admin
post_transfer_sync_state
```

A team-owned plugin marketplace can therefore contain a surprisingly personal infrastructure dependency: one administrator's repository authorization.

## 9. Plugin Catalog Export Becomes an Audit Surface

OpenAI also documents that eligible administrators can export the public plugin catalog as CSV.

The export can include:

```text
PLUGIN DETAILS
APP DETAILS
SKILL DETAILS
DEVELOPER
VERSIONS
DATE ADDED
VERIFICATION STATUS
```

The snapshot can be up to 48 hours old and excludes plugins created inside the workspace.

This is valuable because the plugin ecosystem becomes inspectable as structured data rather than only through UI cards.

### Definition

**Plugin Catalog Export Fidelity (PCEF)** measures whether ecosystem audit exports expose enough structured metadata to reconstruct what capabilities were available at a given time.

The known limitation should remain explicit:

```text
CATALOG EXPORT
!= REAL-TIME STATE
```

and:

```text
PUBLIC CATALOG EXPORT
!= COMPLETE WORKSPACE PLUGIN INVENTORY
```

## 10. Multiple Google Accounts Enter the Same Conversation

A second fresh identity delta arrived on 28 August 2026.

ChatGPT can connect multiple accounts for:

```text
GMAIL
GOOGLE CALENDAR
GOOGLE CONTACTS
```

and use personal and work accounts in the same conversation.

This collapses another formerly visible identity seam.

Old workflow:

```text
PERSONAL GMAIL TAB
WORK GMAIL TAB
PERSONAL CALENDAR
WORK CALENDAR
-> HUMAN REMEMBERS WHICH ACCOUNT IS WHICH
```

New workflow:

```text
ONE CHAT
-> MULTIPLE CONNECTED GOOGLE IDENTITIES
```

Convenient, obviously.

Also exactly the kind of convenience that makes provenance disappear unless the system works harder than the user.

## 11. Connected-Account Identity Multiplexing Fidelity

### Definition

**Connected-Account Identity Multiplexing Fidelity (CAIMF)** measures whether each retrieval or action in a multi-account conversation remains attributable to the exact provider account that supplied or received the data.

A minimum runtime manifest should preserve:

```text
conversation_id
plugin_or_app
provider
connected_account_id
account_role_or_label
operation
source_object_id
timestamp
```

The critical distinctions are:

```text
SAME PROVIDER
!= SAME ACCOUNT

SAME CONVERSATION
!= SAME IDENTITY DOMAIN

RECONNECTED ACCOUNT A
!= ACCOUNT B UPDATED

DISCONNECTED ACCOUNT
!= SAVED CHAT / MEMORY ERASED
```

OpenAI's account-management documentation explicitly notes that disconnecting one account stops future access through that connection but does not automatically delete existing conversations, saved files, Memory summaries, or saved memories.

That creates another boundary:

```text
LIVE ACCOUNT ACCESS
!= PERSISTED DERIVED CONTEXT
```

## 12. Why This Matters for Memory

No stronger new personal-memory primitive displaced earlier Deep Drift memory nodes in this pass.

The important new interaction is identity provenance.

A system can now combine:

```text
MEMORY
+
SKILL
+
MULTIPLE CONNECTED ACCOUNTS
```

inside one conversation.

Therefore memory must not be treated as proof of source-account identity.

A remembered fact may survive after the provider account that originally supplied it is disconnected.

Deep Drift should preserve:

```text
MEMORY STATE
SOURCE ACCOUNT STATE
CURRENT CONNECTION STATE
```

as separate layers.

## 13. Why This Matters for Skills

This is the strongest category in this run.

A Skill is no longer merely:

```text
A MARKDOWN FILE WITH INSTRUCTIONS
```

It can now participate in:

```text
GIT VERSIONING
MARKETPLACE PACKAGING
CROSS-ECOSYSTEM IMPORT
DAILY SYNC
WORKSPACE ROLE DISTRIBUTION
APP DEPENDENCIES
ACCOUNT-SPECIFIC EXECUTION
```

That is software-package behavior.

Deep Drift should therefore treat Skills as **versioned executable procedural artifacts**.

## 14. Why This Matters for Mini-App Builders

Modern mini-app builders increasingly depend on reusable plugins, app templates, and connected tools.

A marketplace can distribute those dependencies across an organization without rebuilding the app manually.

The mini-app stack increasingly becomes:

```text
UI / AGENT
+
SKILLS
+
APP TEMPLATES
+
CONNECTED APPS
+
MARKETPLACE UPDATE CHANNEL
```

A generated interface without dependency provenance is only the visible shell.

## 15. Why This Matters for Chat-to-Document Export

No new direct DOCX/PDF button displaced the stronger document-generation nodes already logged.

The important export implication is procedural reproducibility.

A document generated today may depend on:

```text
SKILL VERSION A
PLUGIN VERSION B
APP ACCOUNT C
```

while the same command tomorrow runs after an automatic marketplace sync against:

```text
SKILL VERSION A+1
PLUGIN VERSION B+1
APP ACCOUNT C
```

The final DOCX or PDF may not reveal that anything changed upstream.

Document provenance must therefore include procedural package version, not just model and sources.

## 16. Why This Matters for DOCX / PDF Generation

A generated document should preserve a procedural ancestry such as:

```text
SOURCE DATA
-> CONNECTED ACCOUNT
-> APP
-> PLUGIN
-> SKILL
-> MODEL / AGENT
-> DOCX / PDF
```

The missing layer in many provenance systems is **Skill version**.

Deep Drift should add it explicitly.

## 17. Why This Matters for Copy-Paste and Export Fixes

The plugin marketplace itself removes several manual seams:

```text
DOWNLOAD SKILL
-> SEND TO TEAM
-> INSTALL MANUALLY
-> REPEAT UPDATE
```

becomes:

```text
COMMIT TO GITHUB
-> DAILY MARKETPLACE SYNC
```

And the CSV catalog export removes another UI-only seam for ecosystem inspection.

This is real workflow improvement.

But every manual seam removed also removes a moment where a human previously noticed that a procedure changed.

Deep Drift's rule remains:

> **Every eliminated manual distribution seam should be replaced by explicit version, revision, sync-event, permission, and account lineage.**

## 18. New Failure Classes

### 18.1 Repository-Head / Workspace-Version Divergence

The repository advances but the workspace keeps the previous working version after validation failure.

### 18.2 Silent Marketplace Expansion

Daily sync introduces a new plugin entry after a repository merge without a separate import event.

### 18.3 Cross-Ecosystem Semantic Drift

A Claude-compatible plugin imports successfully but behaves differently in ChatGPT or Codex.

### 18.4 Source Removal Ambiguity

A plugin disappears from the repository but remains active in the workspace as **No longer in source**.

### 18.5 Marketplace Deletion Cascade

An administrator deletes the marketplace thinking they are only disconnecting GitHub and unintentionally deletes all imported plugins.

### 18.6 Admin-Credential Dependency Failure

Automatic sync stops because the original importing administrator loses GitHub repository access.

### 18.7 Plugin/App Permission Collapse

A user assumes installing a plugin automatically grants access to the app or its data.

### 18.8 Skill-to-Artifact Version Detachment

A final document survives while the exact Skill/plugin version that produced it is unrecoverable.

### 18.9 Multi-Account Source Collision

Personal and work Google data are fused into one answer without recoverable account attribution.

### 18.10 Disconnection/Persistence Confusion

A provider account is disconnected, but derived conversation or memory state persists and is later mistaken for live provider data.

## 19. Deep Drift Benchmark: Git-to-Skill-to-Artifact Round Trip

### Controlled repository

Create one test marketplace containing:

```text
PLUGIN A
-> SKILL-ONLY

PLUGIN B
-> REQUIRED APP

PLUGIN C
-> CLAUDE-COMPATIBLE MANIFEST
```

### Controlled sequence

1. pin the first import to a known repository commit;
2. record marketplace, plugin, and Skill versions;
3. import the marketplace;
4. verify installation policies remain separate from app authorization;
5. execute one Skill-only task;
6. execute one app-backed task;
7. generate one document artifact;
8. update Plugin A with a valid change;
9. update Plugin B with a deliberately invalid change;
10. sync the marketplace;
11. verify A updates while B retains its last working version;
12. add Plugin D to the repository;
13. sync again and record whether the new entry appears;
14. remove Plugin A from the marketplace source;
15. verify the workspace state becomes **No longer in source** rather than immediate deletion;
16. test Claude-compatible Plugin C for semantic parity;
17. export the plugin catalog CSV where eligible;
18. compare catalog snapshot metadata to live workspace state;
19. connect two Google accounts;
20. run a controlled query spanning both accounts;
21. verify every result remains attributable to the correct account;
22. disconnect one account;
23. test whether saved conversation or memory-derived context still survives;
24. verify final artifact lineage can reconstruct repository revision, plugin, Skill, app, account, and sync state.

## 20. Proposed Metrics

### Repository-to-Workspace Version Attribution

```text
RWVA =
executions traceable to exact repository-derived plugin version
/
all controlled plugin executions
```

### Cross-Ecosystem Semantic Parity

```text
CESP =
controlled behaviors preserved after cross-ecosystem import
/
all controlled behaviors
```

### Sync Event Attribution Coverage

```text
SEAC =
workspace capability changes traceable to exact sync + repository change
/
all controlled capability changes
```

### Rollback State Transparency

```text
RST =
failed updates with explicit retained-version lineage
/
all controlled failed updates
```

### Account Attribution Coverage

```text
AAC =
retrievals/actions traceable to exact connected provider account
/
all controlled multi-account operations
```

### Skill-to-Artifact Provenance Coverage

```text
SAPC =
generated artifacts traceable to exact plugin + Skill version
/
all controlled generated artifacts
```

## 21. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No stronger new memory primitive surfaced; key new issue is separating persisted memory from the connected-account identity that originally supplied context. |
| Skills | **Major new-to-ledger finding:** GitHub-backed plugin marketplaces with daily sync and Codex plus Claude-compatible manifest support turn Skills into a versioned distribution supply chain. |
| Mini-app builders | Marketplace-distributed Skills, app templates, and connected apps become reusable dependency infrastructure for agent and mini-app construction. |
| Chat-to-document export | No stronger new direct export primitive surfaced; document reproducibility now requires plugin and Skill version lineage. |
| DOCX / PDF generation | The important new requirement is procedural ancestry: source -> account -> app -> plugin -> Skill -> model -> artifact. |
| Copy-paste / export fixes | **Meaningful reduction:** Git-backed daily sync replaces repeated manual Skill distribution; plugin catalogs can be exported as structured CSV for audit. |
| Broader creator workflow | **Major trend:** creator procedures are moving from local prompts into repository-managed, cross-ecosystem, continuously synchronized software packages. |

## 22. Deep Drift Research Position

The weak description is:

> ChatGPT can sync plugins from GitHub and connect more than one Google account.

The serious description is:

> Reusable AI procedures are becoming repository-managed software dependencies that can cross ecosystem manifest boundaries, update automatically inside organizational workspaces, invoke separately governed apps, and operate across multiple provider identities inside one conversational runtime.

Therefore:

```text
SKILL FILE
!= COMPLETE EXECUTION STATE

REPOSITORY HEAD
!= WORKSPACE EXECUTED VERSION

PLUGIN INSTALLED
!= APP AUTHORIZED

SAME PROVIDER
!= SAME ACCOUNT

ACCOUNT DISCONNECTED
!= DERIVED MEMORY ERASED

CROSS-ECOSYSTEM IMPORT
!= SEMANTIC PARITY
```

The serious Deep Drift requirement is:

> **Every repository-distributed AI procedure should preserve repository URL and revision, marketplace identity, plugin and Skill version, cross-ecosystem source format, sync events and failures, retained rollback version, source-removal state, workspace installation policy, required-app state, provider-account identity, action permissions, model/runtime identity, and downstream artifact/action lineage required to reconstruct precisely which procedural software the AI executed.**

The industry spent years selling prompts as if they were disposable sentences. Now those prompts are growing version numbers, manifests, dependency graphs, update channels, rollback behavior, permissions, marketplaces, and audit exports.

Congratulations. The prompt has reinvented software packaging.

## 23. Evidence Boundary

Platform facts in this report are grounded in first-party OpenAI documentation checked on 31 August 2026.

OpenAI states that Enterprise and Edu administrators can import plugin marketplaces from public or private GitHub repositories and keep them updated through automatic daily synchronization. The importer supports Codex marketplace manifests and Claude-compatible marketplace/plugin manifests. Repository policies do not override workspace installation or authorization controls. Sync can add new plugins and update existing plugins; invalid updates retain the last working version while other valid updates continue. Removing a repository entry marks the workspace plugin **No longer in source**; deleting the marketplace in ChatGPT deletes the plugins imported from it. Marketplace sync uses the GitHub connection of the administrator who imported it.

OpenAI also states that plugins package reusable Skills, connected apps, and app templates; eligible administrators can export the public plugin catalog as CSV with plugin, app, Skill, developer, version, date-added, and verification metadata. That export is based on a daily snapshot and can be up to 48 hours old.

OpenAI's 28 August ChatGPT release notes state that supported users can connect multiple Google accounts for Gmail, Google Calendar, and Google Contacts in the same conversation. Account-management documentation states that disconnecting an account stops future access through that connection but does not automatically delete existing conversations, saved files, Memory summaries, or saved memories.

SSCCMF and all companion fidelity constructs, failure classes, benchmark procedures, and proposed metrics are ATOR Institute / Deep Drift Research constructs.

## Primary Sources

1. OpenAI Help Center, **Importing and syncing plugin marketplaces from GitHub**, current documentation checked 31 August 2026.  
   https://help.openai.com/en/articles/20001504

2. OpenAI Help Center, **Plugins in ChatGPT and Codex**, current documentation checked 31 August 2026.  
   https://help.openai.com/en/articles/20001256-plugins-in-codex/

3. OpenAI Help Center, **ChatGPT Release Notes**, 28 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

4. OpenAI Help Center, **Connecting and managing app accounts in ChatGPT**, current documentation checked 31 August 2026.  
   https://help.openai.com/en/articles/20001494

---

**D-ORIGIN | ATORAI | ALT-MAN | Eir'an | CHATJIPITI SINGH**