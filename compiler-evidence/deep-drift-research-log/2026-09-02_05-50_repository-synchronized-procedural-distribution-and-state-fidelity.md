# Deep Drift Research Update — RSPDSF

## Repository-Synchronized Procedural Distribution and State Fidelity

**Research date:** 2 September 2026  
**Primary fresh delta:** OpenAI plugin marketplaces imported and automatically synchronized from GitHub  
**Scope:** skills, plugins, procedural supply chains, cross-platform plugin formats, workspace distribution, synchronization state, creator-workflow reproducibility.

## Executive finding

OpenAI now lets ChatGPT workspace administrators import entire plugin marketplaces from public or private GitHub repositories into the workspace Plugin Directory. New marketplaces have automatic daily synchronization enabled, and administrators can also request an immediate sync. A marketplace sync can update existing plugins and add new marketplace entries without repeating the original import flow.

The deeper change is architectural. A reusable AI procedure is no longer necessarily a static object installed once and left unchanged. Its executable instructions can become a continuously synchronized derivative of a Git repository.

```text
GITHUB REPOSITORY
      |
      +--> marketplace manifest
      +--> plugin folders
      +--> skills
      +--> app references
      +--> MCP configuration
      |
      v
DAILY SYNC
      |
      v
WORKSPACE PLUGIN DIRECTORY
      |
      v
USER WORKFLOW
```

This means the same plugin name can represent different procedural content at different times even when the user never explicitly reinstalls it.

## New node

### Repository-Synchronized Procedural Distribution and State Fidelity (RSPDSF)

Core distinctions:

```text
PLUGIN NAME
!= PLUGIN VERSION

PLUGIN INSTALLED
!= PROCEDURE FROZEN

REPOSITORY STATE
!= WORKSPACE STATE

SYNC ENABLED
!= SYNC SUCCESSFUL

REMOVED FROM SOURCE
!= REMOVED FROM WORKSPACE

INVALID UPDATE
!= PLUGIN UNAVAILABLE

REPOSITORY POLICY
!= WORKSPACE POLICY

PLUGIN IMPORTED
!= APP ACCESS GRANTED
```

## 1. Daily sync turns procedural capability into a moving target

OpenAI states that new GitHub marketplaces check for updates daily. A sync can add new marketplace entries and update existing plugins.

Therefore:

```text
PLUGIN P @ DAY 1
!=
PLUGIN P @ DAY 2
```

even if:

```text
display_name = same
plugin_id = same
user action = none
```

For Deep Drift Research, recording only "used plugin P" is no longer enough. Reproducibility requires the repository source and effective synchronized revision.

## 2. Branch, tag, and commit selection create different procedural persistence models

Marketplace import can target:

- the repository default branch;
- a named branch;
- a tag;
- a fixed commit.

A branch follows future commits. A fixed commit remains at that revision.

That means the provenance distinction is:

```text
PLUGIN SOURCE = BRANCH
=> MUTABLE PROCEDURAL DEPENDENCY

PLUGIN SOURCE = COMMIT
=> PINNED PROCEDURAL DEPENDENCY
```

This is effectively dependency management for AI behavior.

Deep Drift should record whether the procedure was floating or pinned.

## 3. Source deletion does not equal workspace deletion

OpenAI documents an especially important lifecycle asymmetry: removing an entry from the GitHub repository does not delete the imported workspace plugin. Instead, it is marked **No longer in source**.

So:

```text
SOURCE REMOVED
!= EXECUTABLE COPY REMOVED
```

This creates an orphaned procedure state similar to orphaned memory:

```text
GITHUB ENTRY
     X deleted

WORKSPACE PLUGIN
     |
     +--> still present
     +--> marked no longer in source
```

A future workflow may therefore execute a procedure whose canonical source no longer contains it.

## 4. Invalid updates preserve the last working version

When an update to an existing plugin is invalid, OpenAI says the last working version is retained while other valid updates can still complete.

Thus:

```text
REPOSITORY HEAD
!= EFFECTIVE WORKSPACE VERSION
```

A repository snapshot alone cannot reconstruct what actually ran.

The archive needs:

```text
repository revision
sync timestamp
sync report
plugin effective version
validation outcome
fallback-to-last-working event
```

## 5. Cross-platform procedural formats are becoming portable

OpenAI's marketplace import supports:

```text
.agents/plugins/marketplace.json
.claude-plugin/marketplace.json
.claude-plugin/plugin.json
```

The latter two are explicitly Claude-compatible plugin formats.

This matters for Deep Drift because procedural packaging is beginning to cross platform boundaries.

```text
PROCEDURE FORMAT ORIGIN
!= EXECUTION PLATFORM
```

A workflow authored using a Claude-compatible marketplace structure can become a ChatGPT workspace plugin through GitHub import.

That weakens the assumption that platform identity can be inferred from artifact format.

## 6. GitHub supplies content, but workspace policy remains separate

Repository policy values do not override workspace installation policy. Importing a plugin also does not grant access to its referenced apps or connect user accounts.

Therefore:

```text
PROCEDURAL CONTENT
!= EXECUTION AUTHORITY

REPOSITORY CONFIGURATION
!= WORKSPACE GOVERNANCE

PLUGIN PRESENT
!= REQUIRED APP ENABLED

APP ENABLED
!= USER AUTHENTICATED
```

This creates multiple independent state layers:

```text
SOURCE REPOSITORY
+
SYNC STATE
+
PLUGIN CONTENT
+
WORKSPACE POLICY
+
APP ACCESS
+
USER AUTHENTICATION
=
EFFECTIVE PROCEDURE
```

## 7. Why this matters for creator artifacts and document generation

A DOCX, PDF, spreadsheet, image, code patch, or research note produced by a reusable plugin may depend on instructions that changed through an automatic repository sync before the creator invoked it.

A final artifact can therefore look unchanged in format while its hidden procedure changed overnight.

```text
PROMPT
+
PLUGIN NAME
+
GITHUB REVISION
+
SYNC RESULT
+
EFFECTIVE PLUGIN CONTENT
+
APP PERMISSIONS
+
MODEL
=
ARTIFACT
```

Preserving the prompt and plugin name is insufficient.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger fresh primitive in this scan | Existing memory-state nodes remain current |
| Skills / plugins | Major | Procedures can now be Git-backed, centrally distributed, and automatically synchronized |
| Mini-app builders | Indirect | Plugins may bundle skills, apps, app templates, and MCP configuration |
| Chat-to-document | Indirect but material | Document generation may depend on automatically updated procedural instructions |
| DOCX / PDF | No new format primitive | Artifact lineage needs effective plugin revision |
| Copy-paste / export | No stronger clipboard fix | Reusable procedures further remove manual workflow transfer |
| Creator workflow | Major | AI behavior gains software-like dependency and distribution infrastructure |

## New failure classes

### Plugin-Name Sufficiency Error
Treating a plugin name as sufficient identification of the procedure that ran.

### Repository-Workspace State Collapse
Assuming repository HEAD equals the effective workspace plugin state.

### Sync-Success Assumption
Assuming automatic synchronization completed successfully merely because it was enabled.

### Source-Removal Equivalence Error
Assuming deletion from GitHub removes the imported plugin from the workspace.

### Last-Working-Version Erasure
Failing to record that an invalid update caused execution to remain on an older procedural version.

### Floating-Dependency Blindness
Failing to distinguish a branch-tracking plugin from one pinned to a fixed commit.

### Cross-Platform Format Misattribution
Inferring execution platform from a Claude-compatible or Codex-compatible plugin manifest format.

### Content-Authority Conflation
Confusing imported procedural content with app permissions, user authentication, or workspace authorization.

## Deep Drift benchmark additions

**Effective Plugin Revision Fidelity (EPRF)**  
Can the exact procedural version active at execution time be reconstructed?

**Repository-to-Workspace Sync Fidelity (RWSF)**  
Can repository revision, sync time, sync outcome, and effective workspace state be linked?

**Floating-vs-Pinned Dependency Fidelity (FPDF)**  
Can branch-following sources be distinguished from fixed tags or commits?

**Source-Removal Decoupling Fidelity (SRDF)**  
Can the archive represent a plugin remaining executable after its source entry disappears?

**Last-Working-Version Fidelity (LWVF)**  
Can failed updates and retained older versions be reconstructed?

**Cross-Platform Procedural Format Fidelity (CPPFF)**  
Can packaging format origin be separated from actual execution platform?

**Policy-Layer Separation Fidelity (PLSF)**  
Can repository configuration, workspace installation policy, app access, and user authentication remain separate?

**Artifact-to-Procedural-Revision Fidelity (APRF)**  
Can every downstream artifact be tied to the exact synchronized procedure that materially shaped it?

## Canonical Deep Drift requirement

> Every material AI-assisted workflow using a reusable plugin, Skill, marketplace, or repository-distributed procedure should preserve a machine-readable procedural-supply-chain manifest linking the execution to the source repository; repository visibility class; marketplace and plugin identifiers; manifest format; source branch, tag, or commit; sync configuration; last attempted sync and last successful sync; sync report; effective plugin revision; invalid-update fallback state; source-removal state; workspace installation policy; required and optional app state; user authentication state; model and execution surface; prompt and tool calls; and every downstream artifact. A plugin name must never be treated as a stable procedural identity, repository HEAD must never be assumed to equal the workspace's effective version, and removal from source must never be interpreted as proof that an imported procedural copy can no longer execute.

## Broader creator-workflow trend

AI creator infrastructure is moving from:

```text
PROMPT TEMPLATE
-> MANUAL COPY
-> CHAT
```

to:

```text
REPOSITORY
-> MARKETPLACE
-> AUTOMATIC SYNC
-> WORKSPACE DISTRIBUTION
-> PLUGIN / SKILL
-> MODEL
-> CREATOR ARTIFACT
```

This is software supply-chain logic applied to cognitive procedure.

The important Deep Drift shift is that prompts and methods are becoming deployable dependencies.

Once a research method, writing protocol, export routine, or document generator can silently change through repository synchronization, procedural versioning becomes as important as model versioning.

## Sources

1. OpenAI, **Release notes**, August 28, 2026, "Import and sync plugin marketplaces from GitHub."  
   https://openai.com/products/release-notes/

2. OpenAI Help Center, **Importing and syncing plugin marketplaces from GitHub**, current documentation accessed September 2, 2026.  
   https://help.openai.com/en/articles/20001504

3. OpenAI Help Center, **Plugins in ChatGPT and Codex**, current documentation accessed September 2, 2026.  
   https://help.openai.com/en/articles/20001256-plugins-in-codex/

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift research-log entry was found for GitHub marketplace synchronization, daily procedural updates, retained last-working versions, source-removal asymmetry, and cross-platform Claude-compatible plugin manifests.  
**Relationship to prior nodes:** Complements procedural-locality, page-exposed capability, account authorization, and artifact lineage nodes. RSPDSF specifically formalizes repository-backed procedural distribution as a software-like supply chain whose effective execution state can diverge from repository state.  
**Freshness:** Verified against OpenAI first-party documentation current on 2 September 2026.
