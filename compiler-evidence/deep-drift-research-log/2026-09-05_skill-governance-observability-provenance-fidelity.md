# Deep Drift Research Update - SGOPF

## Skill Governance Observability & Provenance Fidelity

**Research date:** 5 September 2026  
**Primary fresh delta:** Anthropic's first-party organization Skill documentation now makes a consequential governance asymmetry explicit: sharing events are auditable, but the contents of peer-shared Skills and plugins are not captured in the audit log, and admins do not get a dashboard for browsing those shared contents. At the same time, Enterprise Skill/plugin scanning is opt-in, applies only to new uploads or edits, excludes pre-existing items, excludes Skills delivered through MCP servers, and is unavailable for CMEK, ZDR, and HIPAA configurations.

## Executive finding

A platform can know **that a procedure moved** without preserving **what procedure moved**.

```text
SKILL / PLUGIN CONTENT
        |
        v
SHARE EVENT
        |
        +--> audit log: WHO shared
        +--> audit log: WITH WHOM
        +--> audit log: sharing class
        |
        X--> no content snapshot in audit log
        X--> no admin content-browsing dashboard
```

Therefore:

```text
SHARE EVENT OBSERVABLE
!= SHARED PROCEDURE OBSERVABLE

AUDITABLE DISTRIBUTION
!= AUDITABLE CONTENT

SCANNING ENABLED
!= ALL INSTALLED SKILLS SCANNED

SKILL PRESENT
!= SKILL GOVERNANCE STATE KNOWN

MCP-DELIVERED SKILL
!= UPLOAD-SCANNED SKILL
```

The new provenance object is the **governance-observation boundary**.

## New node

### Skill Governance Observability & Provenance Fidelity (SGOPF)

Minimum state model:

```text
skill_id
plugin_id
owner_identity
content_hash
content_snapshot
distribution_mode
recipient_or_group
share_event_time
audit_event_type
audit_event_visibility
content_visibility_to_admin
scan_policy_enabled
scan_time
scan_trigger
scan_result
scan_scope
preexisting_item_state
mcp_delivery_state
encryption_or_retention_configuration
execution_time
artifact_or_action_descendant
```

## 1. Skill sharing is logged as a role-assignment event

Anthropic documents that Skill and plugin sharing events appear in the audit log and Compliance API as `role_assignment` events. The log can expose who shared, with whom, and whether sharing was peer-to-peer, group-based, or organization-wide. This is useful distribution provenance, but it is not procedural provenance.

## 2. The audit log does not preserve the shared procedure itself

Anthropic explicitly states that the audit log does **not** capture the contents of shared Skills or plugins. A share event without a content snapshot cannot prove which procedural version crossed the boundary.

## 3. Admin observability is intentionally incomplete

Anthropic states there is no admin dashboard for browsing or inspecting the contents of Skills shared between users. Deep Drift should distinguish **event observability** from **content observability**.

## 4. Sharing and provisioning are different governance paths

Distinct paths include owner-provisioned, peer-to-peer shared, group shared, organization-wide shared, and plugin-bundled group provisioning. These paths differ in control, default enablement, discoverability, and review. A single `shared=true` field is inadequate.

## 5. Organization-wide sharing can bypass an approval queue

Anthropic notes organization-wide sharing has no approval step when that sharing mode is enabled. Therefore `available org-wide != admin-reviewed`.

## 6. Security scanning is not retroactive

Enterprise scanning applies when third-party Skills/plugins are newly uploaded or edited. Items already present before scanning is enabled continue working and are not automatically scanned. Deep Drift therefore needs an **effective scan coverage** field, not just `scanning_enabled`.

## 7. Scanning has three outcomes, not a binary pass/fail

Anthropic documents PASS, WARN, and FAIL. A warning can remain usable behind a caution acknowledgement; a failed item is blocked and cannot be overridden by the uploader.

## 8. MCP-delivered Skills sit outside this scan path

Skills shared through a connected MCP server are not covered by Skill/plugin scanning and instead follow the trust model of MCP tools. The same procedural content delivered through different routes may therefore receive different inspection.

## 9. Some high-control configurations do not get the scanner

Scanning is unavailable for organizations using customer-managed encryption keys (CMEK), zero data retention (ZDR), or HIPAA configurations. Stronger data-control configurations do not imply broader procedural inspection.

## 10. Group targeting can be implemented by bundling Skills inside plugins

Anthropic's organization docs say Skills targeted to specific groups are bundled into a plugin and assigned to that group. Skill governance can therefore depend on plugin governance, creating nested provenance.

## 11. Group targeting can propagate across surfaces

Group targeting set up for Cowork carries over to chat. The host surface does not necessarily own the access decision.

## 12. Shared-procedure versioning and audit logging remain misaligned

SSVPF established that owner updates propagate to recipients at next use. SGOPF adds a sharper problem: audit evidence may preserve the sharing relationship without preserving the exact executable procedure version.

## 13. Artifact provenance can outstrip platform audit evidence

A DOCX, PDF, spreadsheet, presentation, or automated action may be produced by a Skill whose distribution event is auditable while its exact instructions are not centrally recoverable later. The archive must preserve its own Skill snapshot/hash if reproducibility matters.

## 14. Copy/export can permanently sever procedural ancestry

Once a Skill-generated artifact is copied or exported, the derivative can persist after the Skill is removed, access is revoked, or the owner updates the Skill. Static artifacts need an external lineage manifest if the procedure matters.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger unlogged delta | Existing memory portability/lifecycle nodes remain current |
| Skills | **Major fresh governance delta** | Sharing events are auditable while shared Skill contents are not captured in the audit log |
| Mini-app / plugins | **Major adjacent delta** | Group-targeted Skills can be distributed inside plugins, creating nested governance |
| Chat-to-document | Provenance consequence | Skill-generated documents may outlive recoverable procedural evidence |
| DOCX/PDF generation | Provenance consequence | Static files flatten Skill version, share path, and scan state |
| Copy-paste/export | Provenance consequence | Derivatives can survive after shared Skill access or content changes |
| Creator workflow | **Major** | Reusable procedures are enterprise-distributed dependencies with incomplete central content observability |

## New failure classes

### Audit-Event-Equals-Content-Evidence Fallacy
Assuming a logged share event preserves the procedure that was shared.

### Scanning-Enabled-Equals-Corpus-Scanned Fallacy
Assuming all existing Skills/plugins were scanned because scanning is enabled now.

### Shared-Org-Wide-Equals-Admin-Approved Fallacy
Assuming organization-wide visibility implies a separate admin approval step.

### Same-Procedure-Different-Route Blindness
Ignoring that uploaded Skills and MCP-delivered Skills can pass through different inspection systems.

### Skill-Container Collapse
Recording a Skill without the plugin or distribution container that governed its group availability.

## Deep Drift benchmark additions

**Shared Procedure Content Observability Fidelity (SPCOF)**  
Can the exact shared procedure be reconstructed from governance evidence?

**Audit-to-Content Linkage Fidelity (ACLF)**  
Can a share event be tied to the exact Skill/plugin version or content hash distributed at that moment?

**Effective Scan Coverage Fidelity (ESCF)**  
Can the archive distinguish newly scanned items, warned items, blocked items, pre-existing unscanned items, and MCP-excluded items?

**Distribution Route Governance Fidelity (DRGF)**  
Can peer sharing, group sharing, owner provisioning, organization-directory sharing, and plugin-bundled provisioning remain distinct?

**Nested Skill-Plugin Lineage Fidelity (NSPLF)**  
Can contained Skills remain linked to the plugin/group policy that made them available?

## DRPA-1.0 protocol additions

### SHARED PROCEDURE SNAPSHOT RULE

> When a Skill or plugin is shared and the platform audit system does not retain its contents, preserve an external content snapshot or cryptographic hash at the share and execution boundaries where reproducibility matters.

### AUDIT EVENT-CONTENT SEPARATION RULE

> Treat evidence that a Skill was shared separately from evidence of what the Skill contained. A role-assignment or sharing event must never be used as a substitute for procedural content evidence.

### EFFECTIVE SCAN COVERAGE RULE

> Record not only whether Skill/plugin scanning is enabled, but whether the specific item was actually scanned, why it was in or out of scope, the scan result, and whether it remained executable.

### DISTRIBUTION ROUTE GOVERNANCE RULE

> Preserve whether a procedure arrived through direct sharing, group sharing, organization publication, owner provisioning, plugin bundling, or MCP delivery. Different routes may carry different approval, scanning, and visibility semantics.

### NESTED PROCEDURE CONTAINER RULE

> When Skills are distributed inside plugins, preserve both the Skill identity/version and the plugin/container identity/version plus the group or organization assignment that made them available.

## Canonical Deep Drift requirement

> Treat enterprise Skill governance as two partially separate evidence systems: distribution events and executable procedural content. Preserve both independently. Platform audit evidence that a Skill moved is not sufficient evidence of what procedure executed.

## Deep Drift principle

> **The platform may remember who passed the spellbook while forgetting the spell.**

Operationally:

> **Hash the procedure at execution time, because the audit log may only remember the handoff.**

## Sources

1. Anthropic Help Center. **Provision and manage skills for your organization.** Updated 5 September 2026.  
   https://support.claude.com/en/articles/13119606-provision-and-manage-skills-for-your-organization

2. Anthropic Help Center. **Get started with skill and plugin scanning.** Updated 4 September 2026.  
   https://support.claude.com/en/articles/15927065-get-started-with-skill-and-plugin-scanning

3. Anthropic Help Center. **Use skills in Claude.** Updated 5 September 2026.  
   https://support.claude.com/en/articles/12512180-use-skills-in-claude

4. OpenAI Help Center. **ChatGPT Release Notes.** Current as of 5 September 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository node was found for the specific combination of auditable Skill-sharing events, non-audited shared procedure contents, non-retroactive scanning, MCP scan exclusions, and nested Skill-in-plugin group distribution.  
**Relationship to prior nodes:** Extends SSVPF, WADGF, ITSPF, and AERF. SGOPF is distinct because it measures what governance systems can reconstruct after procedural distribution has occurred.  
**Freshness:** Anthropic's organization Skill-management article is updated 5 September 2026; the dedicated scanning article was updated 4 September 2026.
