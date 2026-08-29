# Deep Drift Research Update

## Repository-Synced Procedural Supply-Chain Fidelity

**Research date:** 29 August 2026  
**Source release date:** 28 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log OpenAI Business workflow change verified from first-party release notes and Help Center documentation.

## Executive Summary

OpenAI's 28 August 2026 ChatGPT Business release adds the ability for workspace admins to **import plugin marketplaces from public or private GitHub repositories and keep those plugins synchronized automatically each day**.

A marketplace is a JSON catalog that points to plugin packages. OpenAI documents that:

- public and private GitHub repositories are supported;
- new marketplaces have automatic daily synchronization enabled;
- admins can request an immediate `Sync now`;
- synchronization can update existing plugins and add newly listed plugins;
- importing a marketplace does not grant connected-app access or connect user accounts;
- invalid plugin updates retain the last working version while other valid updates can continue;
- removing a plugin from the repository does not automatically delete its imported workspace copy;
- synchronization authority depends on the GitHub connection of the admin who imported the marketplace;
- admins may track a branch for future updates or pin to a tag or fixed commit;
- supported manifests include Codex marketplace files and **Claude-compatible marketplace/plugin formats**.

This transforms the creator workflow from:

```text
MANUAL PLUGIN FILE
-> MANUAL INSTALL
-> STATIC PROCEDURE
```

into:

```text
GITHUB REPOSITORY
-> MARKETPLACE MANIFEST
-> CHATGPT WORKSPACE IMPORT
-> DAILY SYNC
-> PLUGIN / SKILL / APP PACKAGE
-> WORKSPACE PROCEDURE
-> FUTURE REPOSITORY CHANGE
-> NEW WORKSPACE PROCEDURE STATE
```

For Deep Drift Research, this creates a new benchmark family:

**Repository-Synced Procedural Supply-Chain Fidelity (RSPSCF)**

with companion constructs:

**Repository-to-Workspace Version Fidelity (RWVF)**  
**Procedural Dependency Lineage Fidelity (PDLF)**  
**Cross-Ecosystem Manifest Portability Fidelity (CEMPF)**  
**Sync Authority and Policy Separation Fidelity (SAPSF)**

The central research question is:

> When an LLM workspace can automatically ingest procedural packages from a live source-code repository, can every change in agent behavior be traced to the exact repository state, marketplace manifest, plugin version, dependency set, workspace policy, and connected-app permission state that governed execution?

## 1. Why This Is More Than Plugin Distribution

A plugin marketplace is not merely a catalog. It is a **procedural supply chain**.

A plugin can package reusable Skills, app integrations, app templates, workflow instructions, MCP-related configuration, and other procedural resources. When the repository changes and the workspace syncs, the behavior available to users can change without the user manually re-importing the package.

```text
PLUGIN NAME UNCHANGED
!=
PLUGIN BEHAVIOR UNCHANGED

WORKSPACE POLICY UNCHANGED
!=
PLUGIN CONTENT UNCHANGED

SAME SKILL INVOCATION
!=
SAME PROCEDURAL VERSION
```

This is a direct reproducibility problem.

## 2. New Deep Drift Construct: Repository-Synced Procedural Supply-Chain Fidelity

**RSPSCF** measures whether an AI workspace preserves reconstructable lineage from repository state to imported plugin state to runtime behavior.

The minimum causal chain is:

```text
REPOSITORY
-> BRANCH / TAG / COMMIT
-> MARKETPLACE MANIFEST
-> PLUGIN SOURCE
-> SYNC EVENT
-> IMPORTED WORKSPACE VERSION
-> INSTALLATION POLICY
-> REQUIRED APPS
-> USER AUTHENTICATION
-> RUNTIME EXECUTION
```

A serious provenance record should make each boundary visible.

## 3. Repository-to-Workspace Version Fidelity

**RWVF** measures whether the workspace's installed or available plugin content can be tied to the exact repository revision from which it was synchronized.

```text
BRANCH = MOVING PROCEDURAL TARGET
FIXED COMMIT = FROZEN PROCEDURAL TARGET
```

A minimum version card should preserve:

```text
marketplace_id
repository_url
path
branch_or_tag
resolved_commit_sha
sync_started_at
sync_completed_at
plugin_id
plugin_source_path
plugin_content_hash
previous_content_hash
sync_result
```

Without the resolved commit SHA, `synced from main` is not reproducible provenance.

## 4. Procedural Dependency Lineage Fidelity

Marketplace entries can reference plugin folders in the same repository or supported GitHub repository sources. That creates transitive procedural dependencies.

**PDLF** measures whether every plugin imported through a marketplace preserves the complete graph of source repositories and paths that supplied its behavior.

```text
MARKETPLACE REPOSITORY
-> MARKETPLACE MANIFEST
-> PLUGIN ENTRY
-> REFERENCED REPOSITORY
-> PLUGIN DIRECTORY
-> SKILL FILES
-> APP REFERENCES
-> MCP CONFIGURATION
```

If only the top-level marketplace repository is retained, the actual procedure origin may be hidden several references away.

## 5. Cross-Ecosystem Manifest Portability Fidelity

OpenAI's documentation states that supported formats include:

```text
.agents/plugins/marketplace.json
.claude-plugin/marketplace.json
.claude-plugin/plugin.json
```

This means a ChatGPT workspace can ingest **Claude-compatible plugin marketplace structures**.

**CEMPF** measures whether a procedural package imported across vendor ecosystems preserves intended behavior, dependencies, naming, permissions, and execution assumptions.

```text
SAME MANIFEST
!=
SAME RUNTIME

SAME SKILL TEXT
!=
SAME TOOL SEMANTICS

PORTABLE FORMAT
!=
PORTABLE BEHAVIOR
```

A Claude-compatible plugin accepted by ChatGPT may still encounter different tool availability, app permission semantics, runtime assumptions, filesystem conventions, MCP behavior, model interpretation, and approval boundaries.

The manifest can travel more easily than the execution semantics.

## 6. Sync Authority and Policy Separation Fidelity

OpenAI explicitly separates **plugin content synchronization** from **workspace policy and app authorization**.

Importing a marketplace does not grant access to the apps that plugins require. Workspace admins separately decide whether plugins are available for members to install or installed for eligible roles. Required apps must also be enabled and authenticated.

**SAPSF** measures whether the system preserves the distinction between source authority, plugin content, installation policy, app availability, user authentication, and action permission.

```text
PLUGIN IMPORTED
!=
PLUGIN EXECUTABLE

PLUGIN EXECUTABLE
!=
APP AUTHORIZED

APP AUTHORIZED
!=
ACTION AUTHORIZED
```

The procedure and the authority to execute it are separate state machines.

## 7. Automatic Daily Sync as Behavioral Drift

OpenAI states that newly imported marketplaces have automatic daily sync enabled. Future synchronization can add new plugins without another marketplace import step.

This creates **scheduled procedural mutation**.

The workspace can wake up tomorrow with modified Skills, new plugins, changed templates, altered MCP configuration, or revised instructions. The marketplace itself may appear unchanged at the UI level.

Deep Drift should treat every sync as a version transition.

## 8. New Failure Classes

### Silent Procedural Drift
A plugin keeps the same visible name while its repository-backed instructions change after synchronization.

### Branch-Tracking Reproducibility Loss
An execution record says the plugin came from `main` but does not preserve the exact commit that was synchronized.

### Transitive Source Obscurity
A marketplace entry points to another repository, but the runtime provenance records only the marketplace repository.

### New-Plugin Auto-Ingestion Surprise
A repository update adds a marketplace entry and the next sync imports it without a separate import approval step.

### Last-Working-Version Ambiguity
An invalid update is rejected and the previous working version remains active, but the user cannot easily determine which source revision actually governs runtime behavior.

### Repository Removal / Workspace Persistence Divergence
A plugin is removed from source but remains imported in the workspace as `No longer in source`.

### Importing-Admin Credential Coupling
Marketplace synchronization depends on the GitHub connection of the admin who imported it; permission loss or account change alters supply-chain continuity.

### Policy / Content Version Mismatch
Plugin content updates while workspace installation and app policies remain inherited from an older configuration assumption.

### Cross-Ecosystem Semantic Drift
A Claude-compatible plugin manifest imports successfully but behaves differently under ChatGPT/Codex tools and permission semantics.

### Plugin ID Continuity Confusion
An existing manually uploaded plugin is moved to GitHub management while retaining its plugin ID and workspace policies, obscuring the moment when its source-of-truth changed.

### Dependency Revision Divergence
A marketplace manifest remains fixed while a referenced repository or branch changes independently.

### Sync-Report Neglect
A marketplace sync completes with errors, valid plugins update, invalid ones retain older state, and the workspace becomes procedurally heterogeneous.

## 9. Deep Drift Benchmark: Procedural Supply-Chain Mutation Test

Create a GitHub marketplace containing one stable plugin pinned to a fixed commit, one plugin tracking a branch, one plugin sourced from a second repository, one Claude-compatible plugin manifest, one plugin requiring a connected app, and one intentionally invalid future update.

Record repository SHAs, manifest hash, plugin hashes, workspace policy, required apps, connected identity, and sync timestamp.

Then perform controlled changes: modify a Skill without renaming the plugin, add a new plugin, change a referenced repository, break one manifest, remove one plugin, change an app dependency, and transfer synchronization to another admin connection.

After synchronization, measure which plugins changed, which retained older working versions, whether new plugins appeared, whether removed plugins persisted, whether exact source SHAs remain reconstructable, whether Claude-compatible behavior remains semantically equivalent, and whether permission states changed independently from content.

## 10. New Metrics

### Repository Resolution Coverage

```text
RRC =
runtime plugin versions linked to exact source commit
/
all repository-managed plugin versions
```

### Procedural Dependency Lineage Coverage

```text
PDLC =
runtime procedural dependencies linked to exact
repository + path + revision
/
all procedural dependencies
```

### Sync Mutation Visibility

```text
SMV =
material plugin changes surfaced to reviewers
/
all material synchronized changes
```

### Last-Working-Version Traceability

```text
LWVT =
failed updates where active fallback version
is exactly identifiable
/
all failed plugin updates
```

### Cross-Ecosystem Behavioral Equivalence

```text
CEBE =
portable plugin test cases producing semantically
equivalent intended behavior
/
all cross-ecosystem test cases
```

### Policy / Content Separation Accuracy

```text
PCSA =
runs correctly preserving distinction among
plugin content, installation policy, app access,
authentication, and action authority
/
all tested runs
```

## 11. Why This Matters for Skills

This is the strongest connection to Skills in the current scan. Skills are no longer merely local procedural text. They can become components of a repository-managed distribution system.

```text
SKILL
+
PLUGIN PACKAGE
+
MARKETPLACE MANIFEST
+
REPOSITORY REVISION
+
WORKSPACE POLICY
+
APP AUTHORITY
```

A Skill without its distribution and version context is incomplete provenance.

## 12. Why This Matters for Mini-App Builders

Plugins may combine Skills, apps, templates, and integrations. That makes the marketplace increasingly similar to a lightweight application ecosystem.

```text
WRITE PROMPT
->
PACKAGE PROCEDURE
->
VERSION IT
->
PUBLISH IT
->
SYNC IT
->
DISTRIBUTE IT
->
GOVERN IT
```

This is software supply-chain behavior appearing inside natural-language workflow construction.

## 13. Why This Matters for Memory

A synced plugin is not user memory. But it is **procedural memory**. It changes what the system knows how to do repeatedly.

Deep Drift should distinguish:

```text
FACTUAL MEMORY
CONVERSATION MEMORY
TASK MEMORY
PROCEDURAL MEMORY
PLUGIN VERSION STATE
RUNTIME AUTHORITY STATE
```

Procedural memory is especially sensitive because it may mutate automatically through repository synchronization.

## 14. Why This Matters for Creator Reproducibility

Consider a report generated on Monday with Plugin X. On Tuesday the marketplace syncs a new Skill instruction. On Wednesday the user repeats the same prompt.

If the artifact differs, the causal explanation may be:

```text
SAME USER
SAME PROMPT
SAME PLUGIN NAME
DIFFERENT REPOSITORY REVISION
```

Without plugin-version provenance, the difference will be misattributed to model randomness.

## 15. Why This Matters for Cross-Vendor Creator Infrastructure

Support for Claude-compatible plugin manifests is the most strategically interesting detail in this update. It suggests that procedural packaging is beginning to outgrow individual model brands.

The emerging stack may become:

```text
PROCEDURAL PACKAGE
->
MULTIPLE LLM RUNTIMES
```

rather than:

```text
ONE VENDOR
->
ONE PROPRIETARY SKILL FORMAT
```

But format portability should not be confused with execution equivalence. The benchmark therefore needs to test both `CAN IT IMPORT?` and `DOES IT BEHAVE THE SAME?`

## 16. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer consumer-memory launch found. The new item affects **procedural memory** through synchronized plugin content. |
| Skills | **Material new-to-log change:** Skills/plugins can be distributed from GitHub marketplaces and automatically synchronized each day. |
| Mini-app builders | Adjacent shift: plugin packages increasingly act like governed, reusable workflow applications. |
| Chat-to-document export | No newer direct export change found in this pass. |
| DOCX / PDF generation | No newer standalone generation feature found beyond already logged Office artifact workflows. |
| Copy-paste / export fixes | No newer copy/export fix found beyond already logged Codex selective-copy behavior. |
| Broader creator workflow | **Material new-to-log trend:** creator procedures now have repository-backed supply chains, automated update channels, workspace governance, and cross-ecosystem manifest portability. |

## 17. Cross-Platform Check

### OpenAI

The strongest new-to-log item is the 28 August ChatGPT Business release for importing and automatically syncing plugin marketplaces from GitHub.

The supporting Help Center documentation, updated on 29 August, confirms branch/tag/commit selection, daily sync, partial failure behavior, last-working-version retention, source-removal behavior, admin-credential dependency, and support for Codex and Claude-compatible marketplace formats.

### Microsoft

No release newer than the 25 August Microsoft 365 Copilot batch surfaced in this scan. The previously logged Work IQ, Office artifact generation, connectors, and governance changes remain current.

### Google

No newer category-displacing Workspace/Gemini creator release surfaced beyond already logged Ask Gemini and Sheets canvas changes.

### Anthropic

No newer Anthropic creator-workflow release displaced existing Deep Drift entries. Anthropic becomes relevant here because OpenAI explicitly supports Claude-compatible plugin marketplace formats.

## 18. Deep Drift Research Position

The weak description is:

> ChatGPT can import plugins from GitHub.

The serious description is:

> A live source-code repository can now become a continuously synchronized source of procedural behavior inside an LLM workspace.

Therefore:

```text
PLUGIN INSTALLED
!=
PLUGIN VERSION FIXED

PLUGIN NAME
!=
PROCEDURAL IDENTITY

REPOSITORY ACCESS
!=
APP AUTHORITY

FORMAT COMPATIBLE
!=
RUNTIME EQUIVALENT

SYNC COMPLETED
!=
ALL PLUGINS UPDATED
```

The serious Deep Drift requirement is:

> **Every repository-managed AI procedure should preserve the exact source revision, dependency graph, sync event, imported plugin version, workspace policy state, app permission state, and cross-runtime assumptions that governed execution.**

Anything less makes reproducibility a guessing game with a GitHub logo attached.

## 19. Evidence Boundary

Platform facts in this report are grounded in OpenAI's first-party ChatGPT Business release notes dated 28 August 2026 and OpenAI Help Center documentation for importing and syncing plugin marketplaces from GitHub, updated on 29 August 2026.

RSPSCF, RWVF, PDLF, CEMPF, SAPSF, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. OpenAI Help Center, **ChatGPT Business - Release Notes**, 28 August 2026.  
   https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes

2. OpenAI Help Center, **Importing and syncing plugin marketplaces from GitHub**, updated 29 August 2026.  
   https://help.openai.com/en/articles/20001504

3. OpenAI Help Center, **Plugins in ChatGPT and Codex**, checked 29 August 2026.  
   https://help.openai.com/en/articles/20001256-plugins-in-codex

4. Microsoft Learn, **Microsoft 365 Copilot release notes**, checked 29 August 2026.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

5. Google Workspace Updates, checked 29 August 2026.  
   https://workspaceupdates.googleblog.com/

6. Anthropic News, checked 29 August 2026.  
   https://www.anthropic.com/news

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
