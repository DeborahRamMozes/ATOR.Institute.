# Deep Drift Research Update — CIOLCF

## Capability Inventory Observability and Catalog-Lag Fidelity

**Research timestamp:** 1 September 2026, 15:46 WIB  
**Scope:** memory; skills; plugin/mini-app capability distribution; chat-to-document/export; DOCX/PDF generation; copy-paste/export; creator workflow architecture.

## Executive finding

The strongest new signal in this scan is an observability problem rather than a generation feature. OpenAI now lets eligible ChatGPT Enterprise workspace owners and administrators export the public plugin catalog as CSV. The export can contain plugin, app, and skill details, developers, versions, dates added, and verification status. But it explicitly excludes plugins created inside the workspace, is generated from a daily snapshot that may be up to 48 hours old, and is unavailable in FedRAMP workspaces.

The same documentation states that plugin-directory changes can take up to six hours to refresh in Codex. A plugin can remain visible after an underlying app is disabled, while app-independent Skills may still function. Availability itself depends on plan, workspace policy, role, supported surface, region, and the capabilities contained by the plugin.

Deep Drift therefore needs to separate **catalog state**, **workspace state**, **surface state**, and **runtime state**. An administrative inventory is not necessarily a live representation of executable capability.

## New node

### Capability Inventory Observability and Catalog-Lag Fidelity (CIOLCF)

```text
PUBLIC CATALOG
      |
      v
DAILY SNAPSHOT
      |
      +--> may be <=48h stale
      +--> excludes workspace-created plugins
      +--> may be unavailable by compliance environment
      |
      v
ADMIN CSV

Meanwhile:

WORKSPACE POLICY
+ APP AUTHORIZATION
+ ROLE
+ REGION
+ SURFACE
+ DIRECTORY REFRESH STATE
+ INSTALLED SKILLS
= ACTUAL RUNTIME CAPABILITY
```

Core distinctions:

```text
CATALOG EXPORT != LIVE RUNTIME
PUBLIC INVENTORY != WORKSPACE INVENTORY
VISIBLE PLUGIN != USABLE PLUGIN
DISABLED APP != UNINSTALLED PLUGIN
PLUGIN INSTALLED != ALL CAPABILITIES ACTIVE
DIRECTORY REFRESH != MARKETPLACE SYNC
DESKTOP-ONLY LABEL != LOCAL SERVER ONLY
```

## Notable changes

### 1. Public plugin catalog becomes partially machine-readable

OpenAI's current Plugins in ChatGPT and Codex documentation says eligible workspace owners and administrators can export the public plugin catalog from Admin > Plugins. The export may contain plugin, app, and skill details, developers, versions, dates added, and verification status.

The export has three important limits: it does **not include plugins created inside the workspace**; it is generated from a **daily snapshot and may be up to 48 hours old**; and it is **not available in FedRAMP workspaces**.

Therefore a CSV export is useful evidence, but it is not a complete or necessarily current capability inventory.

### 2. Codex directory propagation has its own clock

OpenAI documents that directory changes can take up to **six hours** to refresh in Codex. A capability history therefore has at least separate source/catalog, workspace-visible, surface-refresh, and actual-invocation times.

This differs from the marketplace-sync problem already logged by Deep Drift. Marketplace synchronization explains how procedural packages move from repository to workspace. CIOLCF asks a different question: **how accurately does the platform expose the inventory that supposedly describes those capabilities?**

### 3. Visibility and executability can diverge

Disabling an app blocks plugin capabilities that depend on that app, but does not necessarily uninstall the plugin. The plugin may remain visible in Codex, and Skills that do not depend on the disabled app may remain usable.

A screenshot of the Plugins directory is therefore weak provenance. Even a plugin installation record is weak provenance. The artifact needs the **resolved capability subset** active during execution.

### 4. Surface restrictions are part of capability identity

Some plugins can be marked **Desktop only**. OpenAI notes that imported plugins may receive this label when they declare MCP servers, including a remote HTTPS MCP server. Referencing an existing app does not automatically remove that restriction.

The same plugin can therefore be available on desktop and unavailable on web. Plugin name and version are not sufficient without the execution surface and its policy state.

### 5. Discovery, installation, invocation, and authorization are separate states

The Plugins Directory may be visible while actual installation or invocation still depends on plan, workspace settings, role, supported surface, region, and component requirements. Required apps must separately be enabled and authorized.

```text
DISCOVERABLE != INSTALLABLE
INSTALLABLE != INVOKABLE
INVOKABLE != AUTHORIZED FOR TARGET DATA
```

## Category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger first-party memory primitive | Existing memory read/write/retention nodes remain current |
| Skills | New observability delta | Catalog existence is weaker evidence than resolved runtime availability |
| Mini-app / capability builders | Plugins absorb apps, Skills, and app templates | Inventory must capture component composition |
| Chat-to-document | No stronger export primitive | Output remains downstream of partially visible capability graphs |
| DOCX/PDF generation | No stronger file-generation primitive | Final files can outlive the capability inventory state |
| Copy-paste/export | Admin CSV export is partial and potentially stale | Completeness and freshness must be explicit metadata |
| Creator workflow | Major | Capability is policy- and surface-resolved at runtime |

## New failure classes

1. **Catalog-as-Runtime Fallacy** — treating an exported catalog as proof of live executable capability.
2. **Workspace-Created Blindspot** — omitting locally created plugins because the public CSV excludes them.
3. **Snapshot Staleness Erasure** — recording a catalog export without its possible 48-hour lag.
4. **Surface Refresh Amnesia** — ignoring delay between catalog change and Codex directory refresh.
5. **Visible-but-Partially-Executable Confusion** — assuming a visible plugin has all app-backed capabilities active.
6. **Surface Restriction Loss** — recording plugin identity without execution-surface constraints.
7. **Compliance-Environment Inventory Gap** — assuming the same export exists in all workspace classes.
8. **Discovery/Installation/Invocation Collapse** — representing distinct availability states as one Boolean.

## Benchmark additions

- **Catalog Completeness Fidelity (CCF)**
- **Catalog Freshness Fidelity (CFF)**
- **Workspace-Local Capability Fidelity (WLCF)**
- **Surface Propagation Fidelity (SPF)**
- **Partial Capability Resolution Fidelity (PCRF)**
- **Execution-Surface Availability Fidelity (ESAF)**
- **Availability-Lattice Fidelity (ALF)**
- **Inventory-to-Artifact Correspondence Fidelity (IACF)**

## Canonical requirement

> Every material AI-assisted creator workflow should preserve a machine-readable capability-state manifest linking each artifact or action to the exact plugin, Skill, app, and app-template inventory visible at the relevant time; the inventory source and snapshot timestamp; known catalog staleness and propagation lag; workspace-created capabilities excluded from public exports; installation policy; role and plan state; execution surface; region and compliance environment; required and optional app state; provider authentication; action permissions; source-system authorization; directory-refresh state; resolved active capability subset; and downstream artifact lineage. A public catalog export, plugin listing, or installation record must not be treated as equivalent to the live runtime capability state.

## Why this matters for Deep Drift Research

Deep Drift has already established that models, memory, Skills, procedural versions, session state, and storage can drift. CIOLCF adds the administrative-observability problem: **the evidence that claims to describe capability state can itself drift away from capability state**.

The research object can no longer be a catalog row. It must be a **resolved capability-state snapshot**.

The larger creator-workflow trend is moving from software that is merely installed toward AI capability assembled at runtime from procedural packages, apps, permissions, policies, accounts, surfaces, and delayed catalogs. Seamless interface, fractured ontology.

## Sources

1. OpenAI Help Center, **Plugins in ChatGPT and Codex**, updated 1 September 2026. https://help.openai.com/en/articles/20001256-plugins-in-chatgpt-and-codex
2. OpenAI Help Center, **ChatGPT Enterprise & Edu - Release Notes**, August 2026. https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes

## Research status

**Freshness:** current as of 1 September 2026, 15:46 WIB.  
**Duplicate check:** no prior Deep Drift entry was found for the specific combination of catalog-export incompleteness, catalog staleness, surface propagation lag, and resolved-runtime divergence.  
**Node status:** new; complements the existing Skill supply-chain synchronization and workspace-divergence node.
