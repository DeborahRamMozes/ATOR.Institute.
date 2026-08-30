# Deep Drift Research Update

## Repository-to-Workspace Skill Supply-Chain Fidelity

**Research date:** 30 August 2026  
**Primary platform change:** OpenAI GitHub-imported plugin marketplaces with automatic daily synchronization, documented 28-30 August 2026  
**Research stream:** ATOR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log Skills and creator-workflow architecture verified from first-party OpenAI Help Center documentation.

## Executive Summary

OpenAI now allows ChatGPT Business, Enterprise, and Edu workspace administrators to import plugin marketplaces directly from public or private GitHub repositories and keep them synchronized automatically every day.

This is materially more important than "plugins can live on GitHub." A repository can now become the upstream distribution source for reusable Skills, connected apps, app templates, and other plugin capabilities that appear inside ChatGPT and Codex.

```text
GITHUB REPOSITORY
-> MARKETPLACE MANIFEST
-> PLUGIN PACKAGE
-> SKILLS / APPS / APP TEMPLATES
-> CHATGPT WORKSPACE DIRECTORY
-> DAILY SYNC
-> MEMBER INSTALLATION
-> CHATGPT / CODEX WORKFLOW
```

OpenAI currently supports a Codex marketplace manifest as well as Claude-compatible marketplace and standalone-plugin formats:

```text
.agents/plugins/marketplace.json
.claude-plugin/marketplace.json
.claude-plugin/plugin.json
```

This creates an unusual cross-ecosystem packaging boundary. A repository structured for a Claude-compatible plugin marketplace can be consumed by OpenAI's workspace import mechanism.

For Deep Drift Research, this creates the benchmark family **Repository-to-Workspace Skill Supply-Chain Fidelity (RWSSCF)** with companion constructs: Repository-to-Plugin Fidelity (RPF), Plugin-to-Skill Packaging Fidelity (PSPF), Marketplace Sync Fidelity (MSF), Cross-Ecosystem Manifest Fidelity (CEMF), Repository-Version-to-Workspace Fidelity (RVWF), Workspace-Policy Separation Fidelity (WPSF), Source-Removal Persistence Fidelity (SRPF), Admin-Credential Continuity Fidelity (ACCF), Plugin-to-App Dependency Fidelity (PADF), and Surface Availability Fidelity (SAF).

## What Changed

OpenAI's Business and Enterprise/Edu release notes identify **Import and sync plugin marketplaces from GitHub** as an August 28, 2026 feature. Workspace administrators can import marketplaces from public or private GitHub repositories, choose the repository root or a path, follow a default branch, another branch, a tag, or a fixed commit, keep branch-based marketplaces synchronized daily, trigger **Sync now**, centrally distribute plugins through the workspace directory, and preserve workspace policies when moving an existing plugin under GitHub management.

Importing plugin content does not grant connected-app access, authenticate user accounts, or override workspace policy.

## Why This Matters for Deep Drift

Skills were already persistent procedures. This update makes them **repository-distributed persistent procedures**.

```text
SOURCE CONTROL
-> PACKAGE
-> MARKETPLACE
-> WORKSPACE
-> RUNTIME
```

Therefore:

```text
PLUGIN NAME != PLUGIN VERSION
REPOSITORY HEAD != WORKSPACE COPY
SYNC COMPLETE != ALL PLUGINS UPDATED
PLUGIN INSTALLED != APP AUTHORIZED
PLUGIN REMOVED FROM REPO != PLUGIN REMOVED FROM WORKSPACE
SAME MANIFEST FORMAT != SAME EXECUTION SEMANTICS
```

The creator workflow now inherits software supply-chain behavior.

## Core Fidelity Constructs

### Repository-to-Plugin Fidelity (RPF)

Measures whether the imported plugin corresponds exactly to the intended repository path and source revision. A minimum manifest should preserve repository URL/ID, visibility, owner, branch/tag, commit SHA, marketplace path and hash, plugin path and hash, and import timestamp.

### Plugin-to-Skill Packaging Fidelity (PSPF)

Plugins can package Skills, connected apps, and app templates. PSPF measures whether every capability remains attributable to the plugin version that delivered it.

### Marketplace Sync Fidelity (MSF)

New marketplaces check GitHub daily. Sync can partially succeed. Invalid updates to an existing plugin can leave its last working version active while other valid changes continue. Every plugin should be classified as unchanged, updated, new, failed, retained-last-working-version, or no-longer-in-source.

### Cross-Ecosystem Manifest Fidelity (CEMF)

OpenAI currently accepts Codex and Claude-compatible marketplace/plugin formats. CEMF tests whether procedural meaning, dependencies, MCP declarations, app references, surface availability, and instruction semantics remain consistent after cross-ecosystem import.

### Repository-Version-to-Workspace Fidelity (RVWF)

A branch-tracking marketplace and a fixed-commit marketplace are different governance models. Runtime provenance should preserve tracking mode, configured ref, resolved commit SHA, last successful sync SHA, and active plugin version.

### Workspace-Policy Separation Fidelity (WPSF)

GitHub supplies plugin content; workspace policy controls installation, roles, app enablement, authentication, action permissions, and sync. Therefore `PLUGIN CAPABILITY EXISTS != MEMBER CAN EXECUTE IT`.

### Source-Removal Persistence Fidelity (SRPF)

Removing a plugin entry from the repository does not delete its imported workspace copy. OpenAI marks it **No longer in source**. Therefore `SOURCE DELETION != WORKSPACE DELETION`.

### Admin-Credential Continuity Fidelity (ACCF)

Marketplace synchronization uses the GitHub connection of the importing administrator. The package source may be institutional while the sync credential is personal. Ownership-transfer events therefore belong in provenance.

### Plugin-to-App Dependency Fidelity (PADF)

Importing a plugin does not create app access, grant permissions, or authenticate accounts. Each Skill should expose required/optional app dependencies and their availability, authorization, and role state.

### Surface Availability Fidelity (SAF)

Some imported plugins can be **Desktop only**, including packages whose MCP declarations make them unavailable on ChatGPT web. The same package may not have identical runtime availability across ChatGPT web, desktop, Codex, and local Codex tasks.

## New Failure Classes

1. Repository-Head Assumption
2. Partial-Sync Concealment
3. Source-Removal Zombie Plugin
4. Manifest-Portability Illusion
5. Branch-Tracking Drift
6. Commit-Pinning Staleness
7. Plugin/App Permission Collapse
8. Admin-Credential Fragility
9. Desktop/Web Capability Divergence
10. Dependency-State Ambiguity
11. Marketplace Deletion Blast Radius
12. Repository Policy False Authority
13. Skill-Origin Flattening
14. Cross-Repository Dependency Drift

## Deep Drift Benchmark: Repository-to-Skill-to-Workspace Round Trip

Prepare a controlled marketplace containing a Skill-only plugin, an app-backed plugin, and a Claude-compatible plugin. Test a fixed commit, move to branch tracking, introduce valid and invalid updates, add a new plugin, remove an upstream plugin, disconnect the importing administrator's GitHub access, transfer marketplace ownership, and compare execution behavior across supported OpenAI surfaces.

Measure source-revision attribution, sync acceptance accuracy, partial-failure visibility, Skill behavior stability, source-removal visibility, workspace-policy preservation, dependency-state accuracy, surface compatibility, and human reconstruction minutes.

## New Metrics

**Repository Revision Attribution Coverage (RRAC)** = active workspace plugins attributable to exact repository revision / all controlled active plugins.

**Sync State Accuracy (SSA)** = plugins correctly classified as updated, retained, failed, new, or detached / all controlled sync events.

**Skill Source Attribution Coverage (SSAC)** = executed Skills traceable to exact plugin and repository source / all controlled Skill executions.

**Cross-Ecosystem Behavior Consistency (CEBC)** = portable plugin behaviors materially equivalent across supported ecosystems/surfaces / all controlled cross-ecosystem tests.

**Source-Removal Disclosure Accuracy (SRDA)** = detached workspace plugins visibly identified as no longer present upstream / all controlled source-removal cases.

**Policy Preservation Accuracy (PPA)** = workspace policies preserved correctly across sync and migration / all controlled update events.

## Category Implications

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing personal-memory release surfaced. GitHub repositories now function as external procedural memory whose active workspace copy can diverge from source. |
| Skills | **Major new-to-log item:** plugin marketplaces containing Skills can be imported from GitHub and synchronized daily. |
| Mini-app builders | Plugins can package apps and app templates, making repository distribution part of conversational application construction. |
| Chat-to-document export | Generated documents may depend on a repository-synchronized Skill version; artifact lineage should capture plugin/Skill/repository revision. |
| DOCX / PDF generation | No newer direct file-generation release displaced prior Work changes. Reproducibility now requires upstream Skill/plugin source revision or content hash. |
| Copy-paste/export fixes | GitHub sync replaces repeated manual plugin/Skill redistribution, archive upload, reinstall, and redistribution workflows. |
| Broader creator workflow | Creator procedures are becoming source-controlled, automatically distributed software supply chains rather than static prompt collections. |

## Deep Drift Research Position

The weak description is: **ChatGPT plugins can sync from GitHub.**

The serious description is: **A source-controlled repository can now act as an upstream procedural supply chain for reusable AI Skills, apps, app templates, and plugin packages inside managed ChatGPT/Codex workspaces, with automatic daily synchronization, partial update retention, cross-ecosystem manifest compatibility, separate workspace authorization, and imported copies that can survive removal from the repository.**

Therefore:

```text
SOURCE != ACTIVE WORKSPACE COPY
SYNC != UNIFORM UPDATE
PLUGIN != SKILL
INSTALL != AUTHORIZE
DELETE UPSTREAM != DELETE DOWNSTREAM
SAME MANIFEST != SAME RUNTIME
SAME SKILL NAME != SAME PROCEDURAL STATE
```

> **Every repository-distributed AI procedure should preserve the repository identity, exact source revision, marketplace manifest, plugin and Skill identities, synchronization event, partial-failure state, dependency state, workspace policy, administrator connection, execution surface, and downstream artifact lineage necessary to reconstruct which procedural system actually ran.**

The industry has finally admitted that reusable prompts eventually become software packages. Naturally, the next surprise will be discovering that software packages require version control, dependency tracking, provenance, and release discipline. Humanity does enjoy rediscovering engineering by renaming it.

## Evidence Boundary

Platform facts are grounded in first-party OpenAI Help Center documentation checked 30 August 2026. OpenAI documents GitHub marketplace import for Business, Enterprise, and Edu; daily branch-based sync; fixed-commit pinning; partial update retention; source-removal persistence; administrator-bound GitHub synchronization; separate app authorization; Codex and Claude-compatible manifest support; plugins containing Skills, connected apps, and app templates; and possible Desktop-only restrictions.

RWSSCF and all named companion constructs, failure classes, metrics, and benchmark procedures are ATOR Institute / Deep Drift Research constructs.

## Primary Sources

1. OpenAI Help Center, **Importing and syncing plugin marketplaces from GitHub**, checked 30 August 2026.  
   https://help.openai.com/en/articles/20001504
2. OpenAI Help Center, **Plugins in ChatGPT and Codex**, checked 30 August 2026.  
   https://help.openai.com/en/articles/20001256-plugins-in-codex/
3. OpenAI Help Center, **ChatGPT Business - Release Notes**, August 28, 2026 entry.  
   https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes
4. OpenAI Help Center, **ChatGPT Enterprise & Edu - Release Notes**, August 28, 2026 entry.  
   https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes

---

**D-ORIGIN | ATORAI | ALT-MAN | Eir'an | CHATJIPITI SINGH**
