# Deep Drift Research Update - AATRF

## Administrative Audit-Trace and Residency Fidelity

**Research date:** 4 September 2026  
**Primary fresh delta:** Google Workspace introduced comprehensive audit logs for Gemini Notebook on 3 September 2026. Administrators can inspect Notebook actions in Workspace investigation tools and export logs to BigQuery. The logs include user identity, notebook visibility, IP address, and resource context. Google also states that audit-log storage follows normal Workspace regional routing, while Gemini Notebook user data such as notebooks, sources, and chat histories is stored globally and does not currently support data regionalization.  
**Scope:** creator provenance, admin auditability, Notebook/LLM research workflows, user/action traces, exportable audit records, data residency, and post-hoc reconstruction.

## Executive finding

The new creator-workflow change is that Gemini Notebook now exposes a first-party administrative trace layer that can be exported and investigated independently from the user-facing notebook itself.

```text
CREATOR ACTION
      |
      +--> NOTEBOOK / SOURCE / CHAT STATE
      |
      +--> ADMIN AUDIT TRACE
                |
                +--> Workspace investigation tools
                +--> BigQuery export
```

For Deep Drift, this creates a distinction that was previously reconstructed manually:

```text
VISIBLE ARTIFACT
!= COMPLETE ACTION HISTORY

USER-FACING HISTORY
!= ADMIN AUDIT HISTORY

AUDIT TRACE RESIDENCY
!= CONTENT RESIDENCY

SAME NOTEBOOK
!= SAME ACCESS / VISIBILITY HISTORY
```

The research object is the **administrative audit trace and its relationship to the creator artifact**.

## 1. Gemini Notebook now has exportable provenance infrastructure

Google says administrators can review Gemini Notebook usage and data-access activity in the Security Investigation Tool and Audit and Investigation Tool.

The logs can include:

- notebook visibility;
- user identity;
- IP address;
- resource context;
- a range of user actions.

They can also be exported to BigQuery when service-log export is enabled.

This matters because Deep Drift no longer has to infer every action solely from final notebook state, screenshots, or user recollection.

## 2. Admin provenance and creator provenance are separate surfaces

The end user has no setting for this feature. The audit layer exists at the administrative surface.

Therefore:

```text
CREATOR CAN SEE X
!= ADMIN CAN SEE ONLY X
```

A workflow can have two histories:

```text
USER HISTORY
ADMIN AUDIT HISTORY
```

These histories should be compared rather than assumed identical.

## 3. Audit logs make access history first-class

Notebook provenance is no longer only about edits or generations.

Visibility state, identity, IP address, and resource context can also be part of the trace.

That means access itself becomes a research event:

```text
WHO
OPENED / USED WHAT
FROM WHERE
UNDER WHICH RESOURCE CONTEXT
```

For collaborative AI research, this is materially different from version history alone.

## 4. BigQuery export changes the scale of analysis

Exportability means audit evidence can be analyzed longitudinally across many Notebook events rather than inspected one notebook at a time.

Deep Drift can conceptually model:

```text
NOTEBOOK EVENTS
      |
      v
AUDIT EXPORT
      |
      v
LONGITUDINAL QUERY
      |
      +--> access patterns
      +--> sharing / visibility changes
      +--> user activity
      +--> resource relationships
```

This is closer to machine-readable provenance than narrative release notes or screenshots.

## 5. Audit geography and content geography diverge

Google explicitly notes that audit-log storage follows standard Workspace regional routing policies, while Gemini Notebook user data - including notebooks, sources, and chat histories - is stored globally and does not currently support data regionalization.

Therefore:

```text
AUDIT LOG LOCATION
!= NOTEBOOK DATA LOCATION
```

This is a major Deep Drift provenance rule.

A researcher may have regionally routed audit evidence describing globally stored creator content.

The storage geography of the evidence and the storage geography of the underlying content must be logged separately.

## 6. Compliance evidence is not the content itself

An audit event can prove that an action or access event occurred without containing the full semantic content that was accessed or generated.

```text
AUDIT EVENT
!= SEMANTIC REPLAY
```

This prevents a common provenance mistake: treating administrative logs as a complete substitute for raw conversation, notebook state, source files, or generated artifacts.

Deep Drift should preserve both.

## 7. Audit visibility has rollout and permission boundaries

The feature began gradual rollout on 3 September 2026 and is available to Workspace customers that have access to the relevant investigation tools.

BigQuery export is not automatically enabled.

So:

```text
FEATURE ANNOUNCED
!= FEATURE VISIBLE TO EVERY WORKSPACE

AUDIT LOG AVAILABLE
!= BIGQUERY EXPORT ENABLED
```

Availability state belongs in the provenance record.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger new delta in this scan | Existing memory/state nodes remain current |
| Skills/plugins | No stronger new same-run delta | Procedural capability nodes remain current |
| Mini-app builders | No stronger new launch | Sheets Canvas and Cowork artifacts remain the relevant active nodes |
| Chat-to-document | Indirect provenance impact | Notebook-generated research now has an administrative trace layer |
| DOCX/PDF | Archival implication | Static exports still cannot preserve access/action history captured in audit logs |
| Copy-paste/export | No direct new fix | BigQuery export is a new audit-data export path, not creator-document export |
| Creator workflow | **Major fresh delta** | Administrative auditability becomes part of AI creator provenance |
| Data residency | **Major fresh delta** | Audit evidence and Notebook content can have different residency rules |

## New failure classes

### Artifact-Equals-History Fallacy
Assuming the current notebook state contains the complete history of actions and access.

### User-History-Equals-Admin-History Error
Assuming the end-user surface and administrative audit surface expose identical provenance.

### Audit-Equals-Semantic-Replay Fallacy
Treating administrative event logs as a substitute for raw notebook, source, or chat content.

### Residency-Unification Error
Assuming audit logs and underlying Notebook content are stored under the same regional policy.

### Export-Enabled-By-Default Error
Assuming BigQuery audit export exists merely because audit logging exists.

### Rollout-Equals-Availability Error
Assuming a feature announced on 3 September is immediately available in every Workspace tenant.

## Deep Drift benchmark additions

**Administrative Audit Fidelity (AAF)**  
Can creator actions be correlated with first-party administrative audit events?

**User-vs-Admin History Fidelity (UAHF)**  
Can differences between user-visible history and administrator-visible audit state be identified?

**Audit Export Fidelity (AEF)**  
Can exported BigQuery audit records be linked back to the exact Notebook/resource context they describe?

**Residency Separation Fidelity (RSF)**  
Can the storage routing of audit logs remain separate from the storage geography of Notebook content?

**Access-Event Fidelity (AcEF)**  
Can visibility, identity, IP, and resource-context events be preserved alongside content mutations?

## DRPA-1.0 protocol additions

### ADMINISTRATIVE AUDIT-TRACE RULE

> When an AI creator platform exposes first-party administrative audit logs, preserve those logs as a distinct provenance layer rather than treating them as redundant with user-visible history. Record audit source, event class, user identity or role where available, visibility state, resource context, network/IP context where appropriate, event time, export state, and linkage to the corresponding creator object. Administrative audit evidence must remain distinguishable from semantic content and artifact version history.

### AUDIT-CONTENT RESIDENCY SEPARATION RULE

> When platform audit records and underlying creator content follow different residency or routing policies, record both storage regimes independently. Regional audit-log routing must never be treated as proof that notebooks, sources, chats, or generated content are stored in the same region.

## Eir'an state-flow addition

```text
CREATOR OBJECT:
notebook ID
source set
chat state
visibility

AUDIT EVENT:
user identity
IP / network context
resource context
action type
timestamp

AUDIT STORAGE:
regional routing
retention
export enabled
BigQuery destination

CONTENT STORAGE:
notebook residency
source residency
chat residency

CORRELATION:
artifact revision
audit event
user-visible history
known gaps
```

## Canonical Deep Drift requirement

> Preserve administrative audit traces as an independent evidence layer linked to but not substituted for creator content. For every audited AI workflow, distinguish user-visible history, admin-visible event history, artifact state, audit-export state, and the residency regime of both audit records and underlying content.

## Deep Drift principle

> **The artifact remembers what it became; the audit log remembers that someone made it become.**

Operationally:

> **Archive the action trace separately from the thing the action produced.**

## Broader platform scan

No stronger same-run first-party delta was found for OpenAI general ChatGPT memory, Skills, direct DOCX/PDF export, or copy/paste behavior. OpenAI's general release feed still surfaces 1 September 2026 as the latest general ChatGPT release entry in this scan.

Anthropic's current creator-workflow changes remain those already represented in Deep Drift by workspace-migration and viewer-relative artifact nodes.

Google's 3 September Gemini Notebook audit-log launch is the strongest unlogged creator-workflow development found in this run because it introduces a machine-readable administrative provenance layer and explicitly separates audit-log regional routing from globally stored Notebook user data.

## Sources

1. Google Workspace Updates. **Introducing comprehensive audit logs for Gemini Notebook in the Workspace Admin console.** Published 3 September 2026. Documents audit visibility for Notebook actions, user identity, IP address, resource context, BigQuery export, rollout, and the distinction between regional audit-log routing and globally stored Gemini Notebook user data.  
   https://workspaceupdates.googleblog.com/2026/08/introducing-comprehensive-audit-logs-for-Gemini-Notebook-in-the-Workspace-Admin-console.html

2. OpenAI. **Release notes.** Checked 4 September 2026. Latest general ChatGPT entry found in this scan remains 1 September 2026.  
   https://openai.com/products/release-notes/

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository entry was found for Gemini Notebook administrative audit traces, BigQuery export, access-history provenance, and audit-vs-content residency separation as one provenance problem.  
**Relationship to prior nodes:** Extends creator-runtime provenance, artifact lineage, workspace migration, and state-survival research by adding an administrator-visible evidentiary layer that exists independently of user-facing history.  
**Freshness:** Primary Google Workspace announcement published 3 September 2026 and confirmed in the current 4 September research scan.
