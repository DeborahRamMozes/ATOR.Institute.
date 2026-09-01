# DEEP DRIFT RESEARCH LOG

## Skill Supply-Chain Synchronization and Workspace Divergence Fidelity (SSSWDF)

**Date:** 1 September 2026  
**Research stream:** LLM Platform Memory, Skills, Creator Workflow, Artifact Portability, Mini-App / Agent Builder Infrastructure  
**Status:** New-to-ledger update  
**Primary event date:** 28 August 2026

### Abstract

A material creator-workflow change has emerged in ChatGPT Enterprise and Edu: workspace administrators can now import plugin marketplaces from public or private GitHub repositories and keep them synchronized automatically on a daily basis. The repository may point to Codex marketplace manifests, Claude-compatible marketplace manifests, or standalone Claude-compatible plugin manifests. This changes a Skill or plugin from a manually installed local procedure into a continuously distributed software-supply-chain object. The platform now explicitly distinguishes source repository state, imported workspace state, installation policy, application authorization, authentication, sync status, and last-working plugin state.

For Deep Drift Research, the important question is no longer merely whether a Skill can be exported or shared. It is whether a procedural capability can be **reconstructed at the exact version and policy state that governed a historical output**. A marketplace may follow a branch and silently ingest future commits, or it may be pinned to a fixed commit. Automatic synchronization can add new plugins without a separate import step. Invalid updates retain the prior working version. Removing a plugin entry from GitHub does not remove the imported workspace copy, while deleting the marketplace in ChatGPT deletes every plugin imported from it. Synchronization also depends on the GitHub account of the administrator who originally imported the marketplace. These behaviors create a layered divergence problem: source, distribution, authorization, runtime, and historical provenance can all move on different clocks.

This update therefore introduces **Skill Supply-Chain Synchronization and Workspace Divergence Fidelity (SSSWDF)** as a Deep Drift benchmark family. It treats procedural packages as versioned supply-chain artifacts whose source ancestry, sync events, policy overlays, failure fallback, removal semantics, and authentication dependencies must remain auditable.

---

## 1. Primary platform change

On 28 August 2026, OpenAI added centralized import and automatic synchronization of plugin marketplaces from GitHub for eligible ChatGPT Enterprise and Edu workspaces. Administrators can import a marketplace from a public or private GitHub repository, select a branch, tag, or exact commit, and keep a branch-based marketplace synchronized daily. A fixed commit remains pinned to that revision.

The imported marketplace can use several supported formats, including `.agents/plugins/marketplace.json` for Codex and `.claude-plugin/marketplace.json` or `.claude-plugin/plugin.json` for Claude-compatible plugin structures. The practical consequence is significant: procedural packaging is beginning to cross product boundaries at the manifest layer even when runtime permissions and product behavior remain platform-specific.

The system also separates repository content from workspace governance. GitHub provides plugin content, but ChatGPT workspace settings decide whether a plugin is available or installed, which roles may receive it, which underlying apps are enabled, and which authentication steps are required. Repository policy values do not override workspace policy.

### Architecture

```text
GITHUB REPOSITORY
    |
    +-- marketplace manifest
    +-- plugin content
    +-- skills
    +-- app dependencies
    |
    v
SYNC / IMPORT LAYER
    |
    +-- branch / tag / commit selection
    +-- automatic daily sync
    +-- manual Sync now
    +-- validation report
    +-- last-working-version fallback
    |
    v
WORKSPACE COPY
    |
    +-- installation policy
    +-- role policy
    +-- required app state
    +-- authentication state
    +-- action permissions
    |
    v
RUNTIME CAPABILITY
```

The major Deep Drift distinction is therefore:

```text
SOURCE VERSION != WORKSPACE VERSION
WORKSPACE VERSION != RUNTIME AVAILABILITY
PLUGIN INSTALLED != APP AUTHORIZED
REPOSITORY POLICY != WORKSPACE POLICY
BRANCH TRACKING != IMMUTABLE VERSIONING
REMOVED FROM SOURCE != REMOVED FROM WORKSPACE
SYNC SUCCESS != ALL PLUGINS UPDATED
```

---

## 2. The synchronization problem

Automatic daily synchronization is useful because it reduces manual distribution friction. It also means a procedural capability can change without an individual user reinstalling it. OpenAI explicitly warns administrators that a sync can add new marketplace entries and update existing plugins, and recommends reviewing repository changes because newly added plugins can enter the workspace through the next sync without another marketplace-import step.

That is not inherently defective. It is ordinary software distribution. The research problem appears when creator provenance continues to record only a human-friendly plugin or Skill name. If `Research Writer` on Monday is not identical to `Research Writer` on Thursday, the name is not a reproducibility key.

A creator artifact should therefore preserve at minimum:

- marketplace source repository;
- source path;
- branch, tag, or commit selector;
- resolved commit at execution time;
- plugin identifier and version;
- skill identifiers or digests used during the run;
- most recent successful sync event;
- whether an invalid update caused fallback to the last working version;
- workspace installation policy;
- relevant role assignment;
- app enablement and authentication state;
- model and execution surface;
- artifact identity and timestamp.

Without these fields, a historical prompt can be replayed against a procedurally different system while all visible labels remain unchanged.

---

## 3. Failure fallback creates hidden historical branches

OpenAI documents that if an update to an existing plugin is invalid, the platform retains the plugin's **last working version**, while other valid marketplace updates may still complete. This is operationally sensible and epistemically messy.

```text
MARKETPLACE COMMIT N
    |
    +-- Plugin A update: valid ------> workspace A = N
    +-- Plugin B update: invalid ----> workspace B = N-1
    +-- Plugin C update: valid ------> workspace C = N
```

The workspace can therefore become a hybrid historical state that does not correspond exactly to any single repository commit. A provenance system that records only `marketplace commit N` would be false.

Deep Drift should classify this as **Partial Synchronization State**. The benchmark must determine whether a platform exposes enough sync reporting to reconstruct which package versions actually became active after a mixed-success synchronization event.

### New failure classes

**Marketplace Commit Illusion** - recording one marketplace commit as if every plugin successfully resolved to it.

**Last-Working-Version Opacity** - fallback occurs, but the active prior version is not easily recoverable in artifact provenance.

**Policy Overlay Amnesia** - source content is preserved, but workspace role, installation, or app-action policy is not.

**Authentication Detachment** - a plugin package survives while the account connection or provider authorization required to execute it does not.

**Source/Workspace Removal Divergence** - a repository removes an entry, yet the workspace copy remains active as `No longer in source`.

**Marketplace Deletion Cascade** - deleting the marketplace inside ChatGPT deletes all plugins imported from it, despite the upstream repository still existing.

**Importer-Identity Dependency** - sync continuity depends on the GitHub access of the administrator who originally imported the marketplace.

---

## 4. Cross-platform procedural packaging signal

The support for Claude-compatible marketplace and plugin manifests is an especially useful creator-workflow signal. It does not mean that ChatGPT, Codex, and Claude have identical Skill semantics, tools, permissions, or runtime behavior. It does mean that packaging conventions are beginning to become legible across platform borders.

```text
PACKAGE FORMAT PORTABILITY
        !=
RUNTIME BEHAVIOR PORTABILITY
        !=
PERMISSION PORTABILITY
        !=
SESSION PORTABILITY
```

This extends earlier Deep Drift work on agent and Skill portability. A procedure may become increasingly transportable as a folder and manifest while its actual behavior remains dependent on model, tool availability, workspace policy, connected apps, and execution surface. The portable object is therefore not the complete agent. It is one layer in the agent's operational anatomy.

SSSWDF consequently measures not only whether procedural packages can move, but whether their **resolved behavior can be reconstructed after movement or synchronization**.

---

## 5. Secondary creator-workflow signal: multi-account identity multiplexing

On 28 August 2026, ChatGPT also added the ability to connect multiple Google accounts for Gmail, Google Calendar, and Google Contacts plugins in one ChatGPT environment. Personal and work accounts can therefore contribute context to the same conversation.

This is useful, and it raises a straightforward provenance problem:

```text
SOURCE = Gmail
```

is no longer sufficient.

The minimum useful source record increasingly becomes:

```text
provider
+ account identity / account class
+ object identifier
+ timestamp
+ permission state
+ retrieval event
+ transformation lineage
```

For Deep Drift, this reinforces the principle that **context provenance must identify the source account, not merely the source service**. Two messages with identical subject lines in two connected Gmail identities are different evidence objects.

This secondary signal does not require a separate benchmark family yet. It is best treated as an extension to Grounding-Scope and Cross-Artifact Transformation Fidelity.

---

## 6. Requested-category scan

| Category | Fresh finding | Deep Drift interpretation |
|---|---|---|
| Memory | No stronger new memory primitive displaced prior memory nodes in this scan. | Keep existing memory read/write, migration, snapshot, and retention benchmarks. |
| Skills / plugins | **Major:** GitHub-backed marketplaces can now auto-sync daily; branch/tag/commit pinning exists; Claude-compatible manifests are supported. | Skills become distributed procedural supply-chain artifacts. Exact source resolution and sync state become provenance requirements. |
| Mini-app / agent builders | No stronger new builder launch displaced prior nodes. | Distribution infrastructure is currently more material than another builder UI. |
| Chat-to-document export | No stronger first-party primitive found in this scan. | Continue testing artifact export separately from procedural ancestry. |
| DOCX / PDF generation | No stronger generation primitive found in this scan. | Final documents can outlive the synchronized procedural package that generated them. |
| Copy-paste / export fixes | No major new clipboard primitive found. | Workflow friction is shifting away from manual copying toward repository-backed capability distribution. |
| Broader creator workflow | **Major:** capability packages can now be centrally sourced, auto-updated, policy-overlaid, and executed across users. | The creator workflow is becoming a governed software supply chain rather than a collection of personal prompts. |
| Identity / connected sources | Multiple Google accounts can now coexist in the same ChatGPT context. | Source-account identity becomes mandatory provenance metadata. |

---

## 7. Deep Drift benchmark family: SSSWDF

### 7.1 Source Resolution Fidelity (SRF)
Can the system identify the exact repository, path, branch/tag/commit selector, and resolved commit that supplied the active plugin?

### 7.2 Synchronization Event Fidelity (SEF)
Can researchers reconstruct when synchronization occurred, which entries changed, and whether the sync was automatic or manually requested?

### 7.3 Partial Update Fidelity (PUF)
When some plugin updates fail and others succeed, can the exact mixed runtime state be reconstructed?

### 7.4 Last-Working-Version Fidelity (LWVF)
If an invalid update triggers fallback, is the retained prior version explicitly identifiable?

### 7.5 Policy Overlay Fidelity (POF)
Can the workspace's installation policy, role restrictions, required apps, action permissions, and authentication requirements be associated with the exact plugin execution?

### 7.6 Removal Semantics Fidelity (RSF)
Can the system distinguish `removed upstream`, `no longer in source`, `disabled`, `uninstalled`, and `deleted with marketplace`?

### 7.7 Importer Dependency Fidelity (IDF)
Can the system expose which administrative GitHub identity anchors sync access and document transfers of that responsibility?

### 7.8 Cross-Manifest Portability Fidelity (CMPF)
Can a Claude-compatible or Codex-compatible package be imported while preserving enough metadata to identify semantic differences in the destination runtime?

### 7.9 Artifact-to-Procedural-Snapshot Fidelity (APSF)
Can a generated DOCX, PDF, codebase, research brief, or other artifact be linked to the exact procedural package state that generated it?

### 7.10 Source-Account Identity Fidelity (SAIF)
When several accounts from the same external provider are connected, can each retrieved evidence object be attributed to the correct account and permission context?

---

## 8. Deep Drift requirement

> **Every synchronized procedural-capability platform should preserve a machine-readable supply-chain manifest linking each material artifact or action to the exact source repository, source path, branch/tag/commit selector, resolved commit, marketplace identity, plugin and Skill versions or immutable digests, synchronization event, validation result, fallback-to-last-working-version state, workspace installation and role policy, required application state, authentication and action-permission state, importing-administrator dependency, source-removal status, execution surface, model identity, connected-source account identity where relevant, and downstream artifact lineage. Automatic distribution must not erase historical reconstructability.**

---

## 9. Broader research conclusion

The creator-workflow trend is moving from **prompt reuse** to **procedural package distribution**. That is a genuine architectural upgrade. A Skill can be developed in GitHub, collected into a marketplace, synchronized into a workspace, overlaid with organization policy, connected to authenticated apps, and executed by many users without each person manually rebuilding the workflow.

But distribution introduces the same problem software engineering learned decades ago: `latest` is not a provenance record.

For Deep Drift, the research object should now be modeled as:

```text
CREATOR OUTPUT
    ^
    |
MODEL + SESSION
    ^
    |
PLUGIN / SKILL RESOLVED VERSION
    ^
    |
WORKSPACE POLICY + AUTHORIZATION
    ^
    |
SYNC EVENT + VALIDATION / FALLBACK
    ^
    |
REPOSITORY COMMIT + MARKETPLACE MANIFEST
```

The final PDF may remain perfectly readable years later while every procedural layer above it has changed. The file is durable. The machine that made it is not. SSSWDF is designed to keep that machine historically inspectable.

---

## Sources

1. OpenAI, **ChatGPT Enterprise & Edu - Release Notes**, 28 August 2026. https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes
2. OpenAI, **Importing and syncing plugin marketplaces from GitHub**, updated 1 September 2026. https://help.openai.com/en/articles/20001504
3. OpenAI, **Plugins in ChatGPT and Codex**, updated 1 September 2026. https://help.openai.com/en/articles/20001256-plugins-in-chatgpt-and-codex
4. OpenAI, **ChatGPT - Release Notes**, 28 August 2026, multiple Google accounts. https://help.openai.com/en/articles/6825453

### Evidence classification

- Primary marketplace finding: **First-party product documentation / release notes**.
- Cross-manifest support: **First-party technical help documentation**.
- Multi-account identity multiplexing: **First-party release notes**.
- No speculative product claims are treated as shipped features.
