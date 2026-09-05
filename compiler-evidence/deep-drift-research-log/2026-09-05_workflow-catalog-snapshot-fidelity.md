# Deep Drift Research Update - WCSF

## Workflow Catalog Snapshot Fidelity

**Research date:** 5 September 2026

## Executive finding

OpenAI's current Plugin documentation exposes a governance gap that matters directly to Deep Drift creator-workflow provenance.

Eligible workspace admins can export the public Plugin catalog as CSV. The export can include:

- plugin details;
- underlying app and Skill details;
- developers;
- versions;
- dates added;
- verification status.

But OpenAI also states that:

- the export is based on a daily snapshot;
- the data may be up to 48 hours old;
- workspace-created plugins are not included;
- Codex directory changes can take up to six hours to refresh.

So:

```text
CATALOG EXPORT
!= LIVE RUNTIME STATE

PUBLIC PLUGIN INVENTORY
!= COMPLETE WORKSPACE INVENTORY

PLUGIN VISIBLE
!= CAPABILITY EXECUTABLE

PLUGIN VERSION IN CSV
!= VERSION ACTIVE AT EXECUTION
```

The new provenance object is the **workflow catalog snapshot state**.

## New node

### Workflow Catalog Snapshot Fidelity (WCSF)

Minimum state model:

```text
catalog_source
catalog_export_time
catalog_snapshot_time
catalog_staleness_max
plugin_id
plugin_version
plugin_developer
verification_status
date_added
included_apps
included_skills
included_templates
workspace_created_plugin_state
directory_surface
directory_refresh_state
runtime_install_state
runtime_role_state
underlying_app_state
source_permission_state
execution_time
```

## 1. Plugin catalogs are becoming researchable governance artifacts

OpenAI's Plugin Directory is now the primary discovery layer for workflow capabilities across ChatGPT and Codex.

That means an administrator can increasingly treat the catalog as evidence of:

```text
what workflows exist
who built them
what version is listed
what apps or Skills they include
whether OpenAI marks them verified
```

This is useful for institutional AI inventories.

But a catalog is not the runtime.

## 2. The exported catalog can be up to 48 hours stale

OpenAI says the public Plugin catalog CSV uses a daily snapshot and may be up to 48 hours old.

Therefore:

```text
CSV AT 14:00
may describe
DIRECTORY STATE FROM TWO DAYS EARLIER
```

This creates a time gap between:

```text
catalog evidence
and
execution evidence
```

For Deep Drift, every catalog export needs an explicit freshness field.

## 3. Workspace-created plugins are omitted

OpenAI also says the public catalog export does not include plugins created inside the user's workspace.

So:

```text
PUBLIC CATALOG CSV
+
NO MATCHING PLUGIN
```

does not prove:

```text
PLUGIN DID NOT EXIST IN WORKSPACE
```

A complete institutional inventory requires at least two sources:

```text
PUBLIC / DIRECTORY PLUGINS
+
WORKSPACE-CREATED PLUGINS
```

## 4. Codex directory state can lag separately

OpenAI states that directory changes in Codex can take up to six hours to refresh.

This means there are at least three clocks:

```text
PUBLISH / CHANGE TIME
        |
        +--> public directory state
        |
        +--> exported CSV snapshot
        |
        +--> Codex refreshed directory
```

The same plugin can therefore appear differently depending on which surface is inspected and when.

## 5. Catalog visibility does not prove executability

OpenAI documents that a plugin listing may remain visible even when one of its app-backed capabilities is unavailable.

Execution can still depend on:

```text
plan
workspace
role
surface
region
underlying app
app authorization
source-system permission
action controls
confirmation requirements
```

So Deep Drift must distinguish:

```text
DISCOVERABLE
INSTALLABLE
CONNECTED
AUTHORIZED
EXECUTABLE
```

These are different states.

## 6. A plugin can remain visible after its app is disabled

OpenAI explicitly notes that disabling an app can block the plugin's app-backed capability without uninstalling the plugin.

Other Skills inside the same plugin can remain usable.

Therefore:

```text
PLUGIN PRESENT
+
APP DISABLED
=
PARTIALLY EXECUTABLE WORKFLOW
```

A binary installed/not-installed field is insufficient.

## 7. One plugin can represent several provenance layers

A Plugin package may include:

```text
PLUGIN
+ SKILLS
+ APPS
+ APP TEMPLATES
```

The catalog export can help inventory those components.

But actual runtime still depends on the resolved components at execution.

This extends WPDF:

```text
WPDF
= dependency graph at runtime

WCSF
= observability and freshness of the directory/catalog describing that graph
```

## 8. New OneNote and Zendesk plugins sharpen the issue

On 3 September 2026 OpenAI added OpenAI-developed Zendesk and OneNote plugins to the Plugin Directory.

The current OneNote documentation says available behavior varies by:

```text
account
workspace
product surface
Microsoft permissions
notebook ownership class
```

Personal notebooks owned by the connected account, notebooks merely shared with the user, and Microsoft 365 group or SharePoint notebooks can follow different supported workflows.

So catalog name:

```text
"OneNote"
```

does not specify the actual object classes the runtime can access.

## 9. Read permission and write capability remain separate

The OneNote documentation states that a connection able to read notes may not have permission to create or edit them.

Zendesk documentation similarly distinguishes reading/summarizing tickets from actions that change records or send replies.

Therefore:

```text
SOURCE ACCESS
!= WRITE CAPABILITY

READ SUCCESS
!= ACTION SUCCESS
```

A catalog entry cannot stand in for action-level capability evidence.

## 10. Requested action and completed action are separate states

OpenAI's OneNote guidance gives an unusually useful operational rule for page copying:

```text
REQUEST ACCEPTED
!= COPY COMPLETED
```

Users are told to wait for the operation and check the destination before starting another copy.

That distinction should be generalized across Deep Drift connector provenance:

```text
REQUESTED
AUTHORIZED
STARTED
COMPLETED
VERIFIED
```

A model saying "done" is not the same as the destination system confirming the change.

## 11. Creator workflow research needs dual inventory

For reproducibility, Deep Drift should preserve both catalog inventory and runtime resolution.

### Catalog inventory

```text
plugin name
version
developer
verification status
apps
skills
templates
snapshot age
```

### Runtime resolution

```text
surface
role
connection
source permission
supported object class
action permission
approval
completion evidence
```

The first describes what the platform advertises. The second describes what actually ran.

## 12. Mini-app and Skill governance increasingly resembles package management

The Plugin Directory now behaves less like a simple app store and more like a package registry:

```text
package metadata
dependencies
versions
verification
runtime permissions
surface-specific availability
refresh lag
```

AI workflow research now needs some of the same discipline software engineering applies to dependency manifests and lockfiles.

## 13. DOCX/PDF artifacts flatten the catalog state

A document created by a plugin-assisted workflow may preserve final content, formatting, and citations while losing plugin catalog version, plugin verification status, snapshot age, underlying Skill version, app state, role permissions, and completion evidence.

Therefore:

```text
FINAL DOCUMENT
!= WORKFLOW INVENTORY SNAPSHOT
```

## 14. Copy-paste further erases workflow inventory

If an answer generated through OneNote or Zendesk is copied into another document, the text can survive without any trace of the plugin, app, source object class, read/write scope, or catalog version.

So:

```text
CONTENT COPY FIDELITY
!= WORKFLOW CATALOG FIDELITY
```

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger unlogged delta after MTSF/MSMRF | Memory migration and transfer nodes remain current |
| Skills | Important governance refinement | Public catalog can expose Skill metadata but does not represent full runtime state |
| Mini-app builders / plugins | **Major new node** | Plugin catalog is versioned but stale, incomplete, and surface-dependent |
| Chat-to-document | Provenance implication | Plugin-assisted document generation needs catalog + runtime manifests |
| DOCX/PDF | Provenance implication | Static files flatten plugin version, verification, permissions, and completion evidence |
| Copy-paste/export | Provenance implication | Text survives while workflow inventory disappears |
| Creator workflow | **Major trend** | LLM workflow ecosystems increasingly resemble package registries with dependency and permission resolution |

## New failure classes

### Catalog-Equals-Runtime Fallacy
Assuming the exported Plugin catalog describes what is executable at the current moment.

### Missing-From-Catalog-Equals-Nonexistent Fallacy
Assuming a plugin does not exist because it is absent from the public catalog export.

### Installed-Equals-Fully-Executable Fallacy
Ignoring disabled apps, unsupported object classes, role limits, or source permissions.

### Request-Accepted-Equals-Action-Completed Fallacy
Treating an accepted connector write request as verified completion.

### Same-Plugin-Equals-Same-Capability Error
Assuming the same plugin name exposes identical supported operations across users, surfaces, object classes, or workspaces.

## Deep Drift benchmark additions

**Workflow Catalog Snapshot Fidelity (WCSF)**  
Can the archived catalog state be correctly tied to its snapshot age and export time?

**Catalog-to-Runtime Resolution Fidelity (CRRF)**  
Can advertised plugin capabilities be compared with the components and permissions actually resolved at execution?

**Workspace Inventory Completeness Fidelity (WICF)**  
Can public-directory plugins and workspace-created plugins be inventoried without treating either source as complete alone?

**Connector Object-Class Capability Fidelity (COCF)**  
Can access differences between owned, shared, group, site, and other provider-native object classes be preserved?

**Action Completion Verification Fidelity (ACVF)**  
Can requested, authorized, started, completed, and destination-verified action states remain distinct?

## DRPA-1.0 protocol additions

### CATALOG SNAPSHOT TIMESTAMP RULE

> Every exported workflow/plugin catalog must preserve export time, known snapshot cadence, and maximum documented staleness. Catalog metadata must not be represented as live runtime truth.

### DUAL WORKFLOW INVENTORY RULE

> Preserve public/directory workflow inventory separately from workspace-created or private workflow inventory. Absence from the public catalog must not be treated as evidence of absence from the workspace.

### CATALOG-RUNTIME SEPARATION RULE

> Record catalog metadata separately from execution-time resolution. Plugin name, version listing, and verification status do not prove that its apps, Skills, permissions, or actions were executable for a particular run.

### CONNECTOR OBJECT-CLASS RULE

> Preserve the provider-native object class involved in a connector operation, such as personally owned, shared, group-owned, or site-owned content. General source-system access must not be treated as proof that every object class is supported.

### ACTION COMPLETION VERIFICATION RULE

> Treat requested, authorized, started, completed, and destination-verified connector actions as distinct states. A model or connector acknowledgement must not substitute for destination readback when verification matters.

## Eir'an state-flow addition

```text
CATALOG:
plugin
version
developer
verification
apps
skills
templates
snapshot age

RESOLVE:
surface
workspace
role
region

CONNECT:
app
provider account
source permissions

ACT:
read
write
copy
reply
update

VERIFY:
destination state
completion evidence

DERIVE:
DOCX
PDF
note
ticket reply
copied text
```

## Canonical Deep Drift requirement

> Treat workflow catalogs as delayed, partial descriptions of possible capability. Preserve catalog state and runtime state independently, then verify external actions at the destination.

## Deep Drift principle

> **The directory is a menu, not proof that the kitchen has the ingredient, permission, or even the same recipe today.**

Operationally:

> **Snapshot the catalog, resolve the runtime, verify the action.**

## Sources

1. OpenAI Help Center. **Plugins in ChatGPT and Codex.** Current in September 2026. Documents the Plugin Directory, composite plugins containing Skills/apps/templates, role and source-system permission inheritance, CSV export fields, daily snapshot behavior, possible 48-hour staleness, exclusion of workspace-created plugins, and up-to-six-hour Codex directory refresh delays.  
   https://help.openai.com/en/articles/20001256-plugins-in-chatgpt-and-codex

2. OpenAI Help Center. **ChatGPT Release Notes - September 3, 2026.** Announces OpenAI-developed Zendesk and OneNote plugins in the Plugin Directory for ChatGPT and Codex.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

3. OpenAI Help Center. **Using OneNote in ChatGPT and Codex.** Updated 5 September 2026. Documents account/workspace/surface/permission-dependent capability, distinct support for personally owned vs shared/group/SharePoint notebooks, separation of read and write permissions, and the requirement to verify copy completion at the destination.  
   https://help.openai.com/en/articles/20001511-using-onenote-in-chatgpt-and-codex

4. OpenAI Help Center. **Using Zendesk in ChatGPT and Codex.** Updated 5 September 2026. Documents individual Zendesk authorization, source permissions, read-vs-action distinctions, workspace/action controls, and first-party vs custom/template setup differences.  
   https://help.openai.com/en/articles/20001512-using-zendesk-in-chatgpt-and-codex

## Research status

**Node status:** New.  
**Duplicate check:** Repository search found no existing Deep Drift node for public Plugin catalog CSV snapshot staleness, exclusion of workspace-created plugins, Codex directory refresh lag, and connector action completion verification.  
**Relationship to prior nodes:** Extends WPDF (workflow package dependency fidelity), SGOPF (Skill governance observability), CSAF (Skill orchestration), and artifact provenance nodes. WCSF is distinct because it measures the gap between catalog metadata, runtime capability resolution, and verified external action completion.  
**Freshness:** OneNote and Zendesk support articles were updated on 5 September 2026; the Plugin Directory entries were announced on 3 September 2026.
