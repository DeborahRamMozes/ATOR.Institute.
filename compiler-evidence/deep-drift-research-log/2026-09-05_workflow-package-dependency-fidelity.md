# Deep Drift Research Update - WPDF

## Workflow Package Dependency Fidelity

**Research date:** 5 September 2026  
**Freshness classification:** Newly logged structural change. OpenAI migrated workflow discovery from the App Directory to the Plugin Directory on 9 July 2026; current first-party documentation, updated again in early September, clarifies that a plugin can package Skills, Apps, and App Templates while keeping app permissions and template provisioning as separate dependency layers.

## Executive finding

OpenAI's plugin object is no longer equivalent to a single integration.

```text
PLUGIN
  |
  +--> SKILL
  |      reusable procedure
  |
  +--> APP
  |      external data/actions
  |      OAuth / permissions / sync
  |
  +--> APP TEMPLATE
         workspace-specific setup
         admin configuration
         draft -> review -> publish
```

Therefore:

```text
PLUGIN INSTALLED
!= ALL CAPABILITIES EXECUTABLE

PLUGIN LISTING
!= SINGLE IMPLEMENTATION

APP APPROVED
!= SOURCE SYSTEM ACCESS OVERRIDDEN

TEMPLATE PRESENT
!= APP PROVISIONED

SAME PLUGIN
!= SAME WORKSPACE CONFIGURATION

ONE WORKFLOW NAME
!= ONE PROVENANCE OBJECT
```

The new provenance object is the **workflow package dependency graph**.

## New node

### Workflow Package Dependency Fidelity (WPDF)

Minimum state model:

```text
plugin_id
plugin_version
plugin_listing_time
included_skill_ids
included_skill_versions
included_app_ids
included_template_ids
workspace_install_state
role_install_state
surface_support_state
region_availability_state
underlying_app_enabled_state
app_permission_state
source_system_permission_state
oauth_connection_state
sync_state
template_setup_state
template_configuration_hash
draft_app_id
published_app_id
admin_review_state
execution_time
resolved_capability_graph
artifact_or_action_descendant
```

## 1. The Plugin Directory replaces app-centric discovery

OpenAI says the Plugin Directory is now the primary discovery surface for workflow capabilities across ChatGPT and Codex. Existing apps are packaged into plugins, and new app submissions also arrive packaged through a plugin listing.

This shifts the discovery unit from:

```text
APP
```

to:

```text
WORKFLOW PACKAGE
```

The visible marketplace object and the executable integration are no longer the same thing.

## 2. A plugin can contain heterogeneous capability classes

A plugin may include:

- Skills;
- Apps;
- App Templates.

These are not interchangeable.

```text
SKILL
= procedural instruction / reusable method

APP
= live connection to external data or actions

APP TEMPLATE
= setup recipe for creating a workspace-specific app
```

Deep Drift should preserve them as separate dependency types.

## 3. Installation does not imply executability

OpenAI explicitly notes that whether a plugin can be installed or invoked depends on plan, workspace settings, role, supported surface, region, and the capabilities of included apps.

So:

```text
PLUGIN VISIBLE
!= PLUGIN INSTALLABLE

PLUGIN INSTALLED
!= PLUGIN INVOKABLE

PLUGIN INVOKABLE IN CHATGPT
!= PLUGIN INVOKABLE IN CODEX
```

Availability becomes multi-dimensional state rather than a boolean.

## 4. Underlying app permissions remain authoritative

If a plugin depends on an app, that app must be enabled for the workspace and role. OpenAI also states that approving an app in ChatGPT does not override permissions in the source system.

Therefore:

```text
PLUGIN ACCESS
-> APP ACCESS
-> SOURCE SYSTEM ACCESS
```

A GitHub, Drive, Slack, or other external permission failure can surface as plugin incapability even though the plugin itself is correctly installed.

This should not be classified as model failure.

## 5. Plugins inherit app-specific governance

OpenAI documents that app-specific settings such as sync, domain restrictions, and source boundaries continue to apply, and plugins using the app inherit those settings.

Thus one plugin can have a governance state that depends on another object it contains.

```text
PLUGIN POLICY
partly derives from
APP POLICY
```

The wrapper does not flatten the underlying controls.

## 6. App Templates introduce a provisioning lifecycle

An App Template is not a ready-to-use integration.

For managed workspaces the typical flow is:

```text
TEMPLATE
-> admin configuration
-> draft app
-> admin review
-> publish
-> assign access
-> members use published app
```

The template itself cannot satisfy runtime dependency requirements.

This creates a second lifecycle inside one plugin package.

## 7. The same template can produce different workspace apps

Template setup may require tenant names, hostnames, OAuth client credentials, callback URLs, scopes, webhook details, or managed MCP server URLs.

Therefore two organizations can install what appears to be the same plugin while producing different concrete app instances.

```text
SAME TEMPLATE
+
DIFFERENT WORKSPACE CONFIG
=
DIFFERENT EXECUTION ENVIRONMENT
```

For Deep Drift, plugin identity alone is insufficient for reproducibility.

## 8. Published app identity should be separated from template identity

Members ultimately use the published workspace app created from the template, not the original template.

So archive:

```text
template_id
configuration state
published_app_id
```

separately.

Otherwise a future researcher may know the package recipe but not which concrete integration executed.

## 9. Skills can exist inside plugins without apps

OpenAI notes that some plugins contain only Skills.

This matters because:

```text
PLUGIN
!= EXTERNAL CONNECTOR
```

A plugin can be a procedural package with no external data access at all.

That invalidates any provenance model that treats `plugin_used` as proof that external data or actions were involved.

## 10. Plugin composition changes artifact ancestry

A report could be produced through:

```text
PLUGIN
  + Skill: research method
  + App: Google Drive
  + App Template-derived enterprise connector
        |
        v
retrieved sources
        |
        v
DOCX / PDF / spreadsheet / code artifact
```

The final artifact does not reveal which dependency supplied which capability.

Therefore:

```text
FINAL ARTIFACT
!= RESOLVED WORKFLOW GRAPH
```

## 11. Chat-to-document export can conceal package resolution

OpenAI already supports workflows in which ChatGPT works with uploaded and connected files and produces downloadable outputs such as updated spreadsheets or PDFs.

When plugin packages provide the procedures and source connections behind that generation, the final file can flatten:

```text
plugin
skill
app
template instance
permissions
source access
model
execution surface
```

into a single innocent-looking file.

The artifact remains useful; its causal graph disappears.

## 12. Copy-paste severs dependency ancestry even faster

Content generated through a plugin stack can be copied into a new document or chat.

```text
PLUGIN STACK
-> output
-> COPY
-> new document
```

The semantic content may survive while all evidence of the package, apps, templates, permissions, and source boundaries is gone.

So:

```text
COPY FIDELITY
!= WORKFLOW-PROVENANCE FIDELITY
```

## 13. Cross-surface execution needs resolved-state logging

The Plugin Directory spans ChatGPT and Codex, but invocation depends on supported surface and configuration.

A valid research record should capture the actual execution surface:

```text
ChatGPT web
ChatGPT desktop
ChatGPT Work
Codex
```

rather than assuming package behavior is surface-invariant.

## 14. Creator workflows are moving from tools to packaged dependency graphs

The broader trend is now clear:

```text
PROMPT
-> SKILL
-> APP
-> APP TEMPLATE
-> PLUGIN PACKAGE
-> WORKFLOW
```

The creator increasingly selects a workflow package rather than manually composing every procedural and connection layer.

That reduces setup friction but increases hidden dependency depth.

## Fresh category scan

| Area | Status | Deep Drift implication |
|---|---|---|
| Memory | No stronger unlogged delta after MSMRF/PMBDF | Memory schema and boundary nodes remain current |
| Skills | **Important packaging delta** | Skills can live inside Plugins alone or alongside Apps/Templates |
| Mini-app / builders | **Important structural delta** | App Templates turn a listing into a workspace-specific app provisioning pipeline |
| Chat-to-document | Provenance consequence | Documents may descend from a resolved package graph rather than only the visible chat |
| DOCX/PDF generation | Provenance consequence | Static files flatten plugin, Skill, App, template-instance and permission ancestry |
| Copy-paste/export | Provenance consequence | Semantic output can survive after workflow-package lineage is lost |
| Creator workflow | **Major structural trend** | Marketplace discovery is shifting from single tools toward composable workflow packages |

## New failure classes

### Plugin-Equals-App Fallacy
Assuming a plugin is a single external integration.

### Installed-Equals-Executable Fallacy
Assuming successful installation means every included capability can run.

### Template-Equals-App Fallacy
Treating an App Template as if it were already a configured runtime app.

### Wrapper-Overrides-Permissions Fallacy
Assuming plugin installation bypasses app or source-system access controls.

### Same-Plugin-Equals-Same-Environment Fallacy
Assuming two workspaces execute the same package identically despite different template configuration, roles, permissions, regions, or surfaces.

### Artifact-Equals-Workflow-Record Error
Treating the final DOCX/PDF as sufficient evidence of the workflow that produced it.

## Deep Drift benchmark additions

**Workflow Package Resolution Fidelity (WPRF)**  
Can the exact set of Skills, Apps, App Templates, and concrete app instances resolved for execution be reconstructed?

**Template-to-App Provisioning Fidelity (TAPF)**  
Can the path from template to configured draft to published workspace app be reconstructed?

**Nested Permission Fidelity (NPF)**  
Can plugin, app, workspace-role, and source-system permissions remain distinguishable?

**Cross-Surface Invocation Fidelity (CSIF)**  
Does the package remain consistently invokable across ChatGPT and Codex surfaces, and is the actual surface recorded?

**Workflow Artifact Flattening Fidelity (WAFF)**  
How much of the resolved package graph survives into exported DOCX/PDF/spreadsheet artifacts or copied derivatives?

## DRPA-1.0 protocol additions

### WORKFLOW PACKAGE GRAPH RULE

> Archive Plugins as dependency graphs, not atomic tools. Preserve included Skills, Apps, App Templates, and concrete workspace app instances separately.

### TEMPLATE INSTANCE SEPARATION RULE

> Preserve an App Template separately from the configured app created from it. Template identity must not substitute for the runtime app instance used during execution.

### NESTED PERMISSION RULE

> Record plugin installation state, app enablement, workspace role access, OAuth/sync state, and source-system permissions as distinct controls. A failure in one layer must not be attributed to another without evidence.

### RESOLVED EXECUTION MANIFEST RULE

> For reproducible creator workflows, preserve the dependency graph actually resolved at execution time, including surface, role, region, included capability versions, and underlying app state.

### ARTIFACT PACKAGE-LINEAGE RULE

> When a workflow package materially shapes a DOCX, PDF, spreadsheet, presentation, code artifact, or copied derivative, preserve an external execution manifest because the final artifact normally flattens package ancestry.

## Eir'an state-flow addition

```text
DISCOVER:
Plugin Directory

RESOLVE:
plugin
skills
apps
templates

PROVISION:
workspace config
draft app
publish
role assignment

AUTHORIZE:
OAuth
sync
source permissions

EXECUTE:
ChatGPT / Work / Codex

DERIVE:
DOCX
PDF
sheet
code
external action

ARCHIVE:
resolved dependency graph
permission state
artifact lineage
```

## Canonical Deep Drift requirement

> Treat workflow packages as composable dependency graphs whose procedures, integrations, provisioning state, permissions, and execution surfaces can drift independently.

## Deep Drift principle

> **The button says plugin. The evidence says dependency graph.**

Operationally:

> **Archive what actually resolved and executed, not merely the marketplace name the user clicked.**

## Broader platform scan

No stronger newly unlogged memory delta surfaced after MSMRF and PMBDF. Anthropic's current Skill governance and composition changes remain covered by SGOPF, SSVPF, and CSAF. Google's current September creator-workflow rollouts - cross-surface instructions, document-to-video transformation, and Workspace Studio actions - are already represented in CSIPF and adjacent Deep Drift nodes.

A useful older-but-still-current creator-workflow signal remains Google's direct Gemini file generation into Docs, Sheets, Slides, PDF, DOCX, and XLSX, reinforcing why workflow-package provenance must survive into artifacts rather than ending at the chat boundary.

## Sources

1. OpenAI Help Center. **Plugins in ChatGPT and Codex.** Current September 2026 documentation. States that the Plugin Directory replaced the App Directory on 9 July 2026; plugin listings can contain Apps, Skills, and App Templates; plugins span ChatGPT and Codex; installation/invocation depends on plan, workspace, role, surface, region, and included capabilities; app-specific permissions and source-system controls remain in force.  
   https://help.openai.com/en/articles/20001256-plugins-in-chatgpt-and-codex

2. OpenAI Help Center. **ChatGPT app templates.** Current September 2026 documentation. Describes App Templates as workspace-admin setup paths that create draft, reviewed, published workspace-specific apps, with configuration such as tenant/host, OAuth credentials, scopes, callbacks, webhooks, or managed MCP server URLs.  
   https://help.openai.com/en/articles/20001247-chatgpt-app-templates/

3. OpenAI Help Center. **Skills in ChatGPT.** Current September 2026 documentation. States that Plugins can package Skills with Apps and App Templates and that OpenAI Skills follow the Agent Skills open standard.  
   https://help.openai.com/en/articles/20001066-skills-in-chatgpt/

4. OpenAI Help Center. **Apps in ChatGPT.** Current September 2026 documentation. Describes Apps as the underlying external data/action integrations while Plugins provide workflow packaging and discovery.  
   https://help.openai.com/en/articles/11487775

5. Google Workspace Updates. **Move from conversation to creation with file generation in Gemini.** April 2026. Documents direct generation of Google Workspace files, PDFs, Microsoft Word (.docx), and Excel (.xlsx) from Gemini conversations.  
   https://workspaceupdates.googleblog.com/2026/04/

## Research status

**Node status:** New to the Deep Drift log.  
**Duplicate check:** Repository search found no existing node covering OpenAI's Plugin Directory as a composite package of Skills, Apps, and App Templates with nested app permissions and template-to-runtime-app provisioning.  
**Relationship to prior nodes:** Extends CSAF (composable Skills), SGOPF (Skill governance), AERF (execution routes), WADGF (workspace governance), and creator-artifact provenance. WPDF is distinct because it models the marketplace/workflow package itself as a dependency graph that resolves into heterogeneous procedural and integration components.  
**Freshness:** Underlying directory migration occurred 9 July 2026; first-party documentation has been updated again in late August/early September and remains current on 5 September 2026. This is classified as a newly logged structural gap rather than a same-day launch.
