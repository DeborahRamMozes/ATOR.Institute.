# Deep Drift Research Update

## Capability Inventory Snapshot Fidelity

**Research date:** Friday, 28 August 2026  
**ĀTØR observation time:** 07:48:25 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. No newer model/memory/document-generation release displaced the latest changes already logged. One materially useful OpenAI Skills/plugin inventory boundary was identified as new-to-log.

## Executive Summary

OpenAI's current ChatGPT Enterprise and Skills documentation exposes a creator-workflow governance problem that Deep Drift has not yet formalized cleanly:

Eligible Enterprise workspace owners and admins can export the **public plugin catalog** as CSV for security and compliance review.

The export includes:

- plugin names and descriptions;
- app names and descriptions;
- Skill names and descriptions;
- developer;
- version;
- date added;
- OpenAI verification status.

But the export is explicitly **not a live capability map**.

OpenAI states that:

- the CSV is generated from a **daily snapshot**;
- it may be **up to 48 hours old**;
- it **excludes workspace-created plugins**;
- installation and use still depend on plan, workspace settings, role, supported surface, region, included app capabilities, and required app access;
- in Codex, Plugin Directory changes can take **up to six hours** to refresh.

For Deep Drift, the important distinction is:

```text
CATALOG EXPORTED
!=
CURRENT CAPABILITY STATE

PLUGIN LISTED
!=
PLUGIN INSTALLED

PLUGIN INSTALLED
!=
PLUGIN INVOCABLE

PLUGIN INVOCABLE
!=
REQUIRED APP ACCESS AVAILABLE
```

This creates a new benchmark family:

**Capability Inventory Snapshot Fidelity (CISF)**

and a companion construct:

**Catalog-to-Effective-State Divergence (CESD)**.

## New Deep Drift Construct: Capability Inventory Snapshot Fidelity

### Definition

**Capability Inventory Snapshot Fidelity (CISF)** measures whether an exported catalog or administrative capability inventory accurately represents the capability state that users can actually discover, install, invoke, and use at a specific time.

A capability inventory should be treated as a state object with:

```text
SNAPSHOT TIME
CATALOG SCOPE
INCLUSION RULES
EXCLUSION RULES
SURFACE
PLAN
WORKSPACE
ROLE
APP DEPENDENCIES
INSTALLATION POLICY
VERIFICATION STATE
REFRESH DELAY
```

Without those fields, "the plugin exists" is not operationally meaningful.

## Core Deep Drift Distinction

```text
DISCOVERABLE
!=
INSTALLED

INSTALLED
!=
AUTHORIZED

AUTHORIZED
!=
CONFIGURED

CONFIGURED
!=
CURRENTLY VISIBLE

VISIBLE
!=
CURRENTLY INVOCABLE

INVOKABLE
!=
BACKING APP READY
```

The Plugin Directory is a discovery surface.

The export is an administrative snapshot.

Neither is identical to the effective execution state of a particular user.

## Why This Matters for Skills

OpenAI plugins can package:

- apps;
- Skills;
- app templates.

That means the plugin catalog is partly a **procedural capability registry**.

If an admin exports the catalog for review, the CSV may contain a Skill-bearing plugin that:

- has since changed version;
- has been removed;
- is not yet refreshed in Codex;
- is visible but not installable for a role;
- requires an app the role cannot access;
- is public while an important workspace-created plugin is missing from the export.

The exported registry can therefore be accurate as a snapshot while still being incomplete as a model of effective workflow state.

## New Construct: Catalog-to-Effective-State Divergence

### Definition

**Catalog-to-Effective-State Divergence (CESD)** measures the difference between what a capability registry claims is available and what a specific user can actually execute on a specific surface at a specific moment.

The effective state is:

```text
EFFECTIVE_CAPABILITY_STATE
=
CATALOG ENTRY
x
SNAPSHOT AGE
x
PLAN
x
WORKSPACE SETTINGS
x
ROLE
x
SUPPORTED SURFACE
x
REGION
x
INSTALLATION POLICY
x
APP ENABLEMENT
x
APP AUTH
x
DIRECTORY REFRESH STATE
```

The catalog alone is therefore only one input.

## New Failure Classes

### Snapshot Staleness Drift

A catalog export correctly represents an earlier daily snapshot but no longer matches the live public catalog.

### Workspace-Created Capability Blind Spot

The exported public catalog omits workspace-created plugins, causing an auditor to treat the inventory as complete when it is structurally incomplete.

### Catalog/Directory Refresh Drift

The administrative catalog has changed while Codex still exposes an older directory state during the documented refresh delay.

### Listed-but-Uninstallable Drift

A plugin appears in the export but cannot be installed because of workspace settings, role restrictions, plan limitations, region, or surface support.

### Installed-but-Unusable Drift

The plugin is installed, but its app dependency is not enabled, authorized, configured, or available for the current role.

### Version-State Ambiguity

The export includes a version number, but the user-facing surface may still expose an older cached version or a locally installed variant.

### Verification-State Overinterpretation

OpenAI verification status is treated as proof that the plugin is approved for a specific organization's legal, security, privacy, or data-residency requirements.

### Surface Capability Split

A plugin is available in ChatGPT but only partly usable in Codex, Work, web, desktop, or another supported surface.

### Inventory Completeness Illusion

The exported CSV is treated as an authoritative complete software bill of materials for all AI workflow capabilities even though local/workspace-created and user-specific effective state are outside the snapshot.

## Deep Drift Benchmark: Catalog vs Effective Capability

### Controlled procedure

Capture five layers at the same observation time:

```text
A. Exported public plugin CSV
B. Live Plugin Directory in ChatGPT web
C. Plugin Directory in ChatGPT desktop
D. Plugin Directory in Codex
E. Effective installed / invocable capability for User U
```

For selected plugins, record:

- catalog version;
- developer;
- verification state;
- visible surfaces;
- installability;
- installed state;
- required app;
- required app enablement;
- authentication state;
- role access;
- actual invocation success.

Repeat after:

1. a plugin version update;
2. a workspace role change;
3. app access revocation;
4. installation-policy change;
5. creation of a workspace-only plugin;
6. Codex refresh before and after the documented delay window.

## New Metrics

### Catalog Freshness Accuracy

```text
CFA =
catalog records matching current live public catalog state
/
all sampled catalog records
```

### Effective Capability Prediction Accuracy

```text
ECPA =
catalog-derived predictions of user capability
that match actual invocation state
/
all tested capabilities
```

### Workspace Capability Coverage Ratio

```text
WCCR =
capabilities represented in exported inventory
/
all public + workspace-created capabilities
relevant to the workspace
```

### Surface Convergence Rate

```text
SCR =
surfaces exposing the intended current capability version
/
all tested supported surfaces
```

### Dependency Readiness Accuracy

```text
DRA =
plugins classified as ready to use
whose required backing apps are actually enabled,
configured, authorized, and reachable
/
all plugins classified as ready
```

## Inventory Export Is Not Execution Provenance

The CSV contains useful governance metadata.

But it does not prove that a particular artifact was created using a particular plugin or Skill.

Therefore:

```text
CATALOG INVENTORY
!=
RUN PROVENANCE
```

For artifact-level reconstruction, Deep Drift still needs:

```text
ARTIFACT_RUN_CAPABILITY_CARD

artifact_id:
run_id:
plugin_id:
plugin_version:
skill_id:
skill_version:
app_dependency:
app_connection:
surface:
workspace:
role:
effective_permissions:
invocation_time:
directory_snapshot_time:
catalog_export_time:
unknown_fields:
```

This connects inventory governance to actual workflow execution.

## Why the 48-Hour Snapshot Window Matters

A 48-hour lag is not inherently defective.

It is a declared consistency model.

The problem begins when consumers interpret a delayed administrative export as a live registry.

For fast-changing capability ecosystems:

```text
48 HOURS
CAN INCLUDE:
- plugin update
- verification-status change
- app dependency change
- permission change
- removal
- replacement
- new workspace-local capability
```

The correct administrative language is therefore:

```text
"inventory snapshot as of T"
```

not:

```text
"what users can do now"
```

## Why the Workspace-Created Plugin Exclusion Matters

Workspace-created plugins are exactly the capabilities most likely to encode:

- internal procedures;
- company-specific Skills;
- proprietary app connections;
- custom templates;
- restricted workflows.

Excluding them from the public catalog export is understandable because the export is scoped to the public catalog.

But for an organization trying to audit its full procedural surface, this creates a major blind spot.

The correct Deep Drift model should maintain two ledgers:

```text
PUBLIC_CAPABILITY_INVENTORY
+
WORKSPACE_PRIVATE_CAPABILITY_INVENTORY
=
ORGANIZATIONAL_CAPABILITY_GRAPH
```

Neither ledger should masquerade as the other.

## Deep Drift Protocol Implication

The ĀTØR procedural-state stack should add a **Capability Inventory State Card**.

```text
CAPABILITY_INVENTORY_STATE_CARD

inventory_type:
snapshot_timestamp:
generated_timestamp:
maximum_staleness:
workspace:
surface:
public_catalog_included:
workspace_created_included:
plan:
role:
region:
directory_refresh_state:
plugin_count:
skill_count:
app_count:
verification_metadata_present:
effective_access_tested:
unknown_fields:
```

This should sit beside:

- Procedural-Version Provenance;
- Template-State Surface Synchronization;
- Tenant-Scoped Identity-to-Capability state;
- Artifact run provenance.

## Relation to Recent Deep Drift Constructs

### Procedural-State Surface Synchronization Fidelity

A Skill may exist in a plugin package while installation/version state differs across surfaces.

### Tenant-Scoped Identity-to-Capability Assignment Fidelity

A catalog entry can exist while the current user lacks effective authority to install or invoke it.

### Workflow Distillation Fidelity

A reusable Skill may be correctly distilled but absent from the public inventory because it is workspace-created.

### Cross-Surface Work Continuation Fidelity

A task can continue across devices while the capability directory and installed plugin state differ.

### Agent State Reconstruction Fidelity

A later audit must distinguish registry state from actual run state.

## Broader Fresh Platform Scan

### OpenAI

The material new-to-log focus in this pass is **public plugin catalog export** and its declared consistency limits.

Standing recent signals remain:

- Temporary Chat personalization boundaries;
- tenant-wide identity management;
- mutable Project memory;
- scheduled/webhook Work tasks;
- reusable Skills;
- web/local Template split;
- native artifact editing;
- Work/Codex cross-surface workflows.

### Anthropic

No newer first-party creator release displaced the latest Claude Code/runtime and browser changes already logged.

Standing signals remain:

- shared memory across Chat and Cowork;
- Skills API;
- Files API;
- Claude in Chrome;
- Cowork built-in browser;
- restricted execution;
- session retention and resume fixes.

### Google

No newer creator-workflow release displaced the latest August Workspace changes already logged.

Standing signals remain:

- Workspace Studio;
- Sheets Canvas;
- Ask Gemini in Chat;
- interactive simulations;
- cross-platform migration;
- structured Calendar action extraction.

### Microsoft

The latest broad Microsoft 365 Copilot release batch remains 25 August 2026.

Standing signals remain:

- Copilot Pages;
- Notebook multi-artifact generation;
- Python-backed Excel editing;
- multimodal Capture;
- inline artifact inspection;
- cross-host model selection.

## Category Status

| Category | Fresh finding |
|---|---|
| Memory | No newer release than already logged Temporary Chat / shared-memory changes. |
| Skills / plugins | **Material new-to-log boundary:** public plugin/Skill inventory export is a delayed, scoped snapshot rather than live effective capability state. |
| Mini-app builders | No newer launch found. |
| Chat-to-document export | No newer launch found. |
| DOCX / PDF generation | No newer launch found. |
| Copy-paste / export fixes | **Relevant export delta:** catalog CSV itself has explicit staleness and scope limits. |
| Broader creator workflow | Capability governance is becoming a registry-consistency problem, not merely a directory UI problem. |

## Deep Drift Research Position

The platform is acquiring a capability registry.

That is useful.

It is also another place where humans can mistake an administrative representation for reality.

Therefore:

```text
INVENTORIED
!= AVAILABLE

AVAILABLE
!= INSTALLED

INSTALLED
!= AUTHORIZED

AUTHORIZED
!= READY

READY
!= ACTUALLY USED
```

The serious question is no longer:

> Which plugins exist?

It is:

> Which capability graph was actually effective for this user, in this workspace, on this surface, at this time - and how stale was the inventory used to prove it?

That is the correct Deep Drift level.

## Evidence Boundary

Platform facts in this report are grounded in current first-party OpenAI Enterprise release notes and Plugins in ChatGPT/Codex documentation, with fresh first-party Anthropic, Google, and Microsoft release-source checks used to confirm there was no newer category-displacing launch in this pass. CISF, CESD, failure classes, metrics, and state cards are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, **ChatGPT Enterprise & Edu - Release Notes**, August 20, 2026 - public plugin catalog CSV export.
2. OpenAI Help Center, **Plugins in ChatGPT and Codex**, current as of 28 August 2026 - exported fields, daily snapshot, up-to-48-hour staleness, workspace-created exclusion, install/use dependencies, and Codex refresh timing.
3. OpenAI Help Center, **ChatGPT Release Notes**, current through 27 August 2026.
4. Anthropic first-party release sources, current through 27 August 2026.
5. Google Workspace Updates, August 2026 archive.
6. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through 25 August 2026.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
