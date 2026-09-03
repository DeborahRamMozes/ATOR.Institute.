# Deep Drift Research Update - VRAEF

## Viewer-Relative Artifact Execution Fidelity

**Research date:** 4 September 2026  
**Primary fresh delta:** Anthropic's updated Cowork artifact documentation now makes explicit that shared interactive artifacts execute against the **viewer's own connected-app access and data**, not the creator's. The same artifact can therefore produce different visible content for different viewers. Artifact links can point to either a pinned version or the latest version, while stored artifact information can be divided between globally shared state and per-user private state.  
**Scope:** interactive artifacts, mini-apps, connected apps, viewer-relative execution, versioned sharing, persistent artifacts, per-user data boundaries, connector approvals, and creator-workflow provenance.

## Executive finding

The strongest fresh creator-workflow implication is not merely that Claude artifacts are persistent and shareable.

It is that the **same shared artifact is not necessarily the same effective artifact for every viewer**.

Anthropic documents that when someone opens a shared Cowork artifact:

```text
ARTIFACT DEFINITION
      |
      v
VIEWER IDENTITY
      |
      +--> VIEWER CONNECTORS
      +--> VIEWER AUTHORIZATIONS
      +--> VIEWER DATA ACCESS
      |
      v
RUNTIME OUTPUT
```

The creator's credentials are not silently transferred.

The viewer's own connector access determines what the artifact can retrieve.

Therefore:

```text
SAME ARTIFACT LINK
!= SAME RUNTIME DATA

SAME ARTIFACT VERSION
!= SAME VIEW

CREATOR ACCESS
!= VIEWER ACCESS

SHARED CODE / LOGIC
!= SHARED CREDENTIALS

ARTIFACT IDENTITY
!= EXECUTION IDENTITY
```

This gives Deep Drift a new provenance object: **viewer-relative execution state**.

## New node

### Viewer-Relative Artifact Execution Fidelity (VRAEF)

Minimum state model:

```text
artifact_id
artifact_version
shared_version_mode
artifact_owner
artifact_editor
viewer_id
viewer_role
viewer_connector_inventory
viewer_authorization_state
viewer_data_scope
artifact_shared_state
artifact_private_state
tool_approval_state
execution_time
runtime_output
access_error_state
share_policy
```

## 1. A shared artifact is becoming executable logic, not a static file

Traditional document sharing assumes:

```text
FILE
-> SAME CONTENT FOR EVERY VIEWER
```

Interactive Cowork artifacts increasingly behave like:

```text
SHARED ARTIFACT LOGIC
       |
       +--> VIEWER A DATA
       |
       +--> VIEWER B DATA
       |
       +--> VIEWER C DATA
```

The artifact is therefore closer to a small application than a document.

This matters for Deep Drift because archival identity can no longer rely on URL plus version alone.

## 2. Viewer identity becomes part of the causal state

Anthropic states that shared artifacts use the viewer's connected-app access, not the creator's.

If the viewer lacks access to an underlying data source, the relevant part of the artifact returns an error instead of exposing the creator's data.

So:

```text
ARTIFACT VERSION
+ VIEWER ACCESS
= EFFECTIVE EXECUTION
```

The same version can legitimately produce different outputs.

Reproducibility therefore requires both artifact revision and viewer authorization state.

## 3. Sharing logic and credential logic are deliberately separated

The system shares:

```text
ARTIFACT LOGIC
ARTIFACT STRUCTURE
OPTIONAL STORED SHARED STATE
```

but does not automatically share:

```text
CREATOR CREDENTIALS
CREATOR CONNECTOR TOKENS
CREATOR PRIVATE DATA ACCESS
```

This is a major architectural distinction.

Deep Drift should not describe artifact sharing as "sharing the creator's working environment."

It is instead:

```text
SHARED EXECUTABLE OBJECT
+ VIEWER-SPECIFIC RUNTIME
```

## 4. Version links can be pinned or floating

Anthropic documents two important sharing modes:

- share a **specific version**;
- share the **latest** version.

A specific-version link remains pinned to that revision.

A link configured to show the latest version can move when the owner republishes or selects the latest shared version.

Thus:

```text
SAME URL
!= SAME ARTIFACT REVISION
```

when the URL is configured as a floating latest-version reference.

A citation must therefore record:

```text
artifact_url
shared_version_mode
resolved_version_at_citation_time
retrieval_time
```

A URL alone is insufficient.

## 5. Artifact state can be split into shared and private compartments

Anthropic explicitly says artifact creators can decide which information stored in an artifact is shared with others and which remains private to each user.

That creates at least three state classes:

```text
ARTIFACT LOGIC
GLOBAL SHARED STATE
VIEWER-PRIVATE STATE
```

Two people using the same task tracker may therefore share common project records while maintaining different personal items.

This is not merely personalization.

It is a **multi-tenant state model inside a generated artifact**.

## 6. Stored state and live connector data are separate layers

A shared artifact may combine:

```text
STORED ARTIFACT STATE
+
LIVE CONNECTED-APP DATA
```

The first may be shared or private depending on the artifact design.

The second is resolved at open/use time through the viewer's own authorizations.

Therefore Deep Drift needs:

```text
STORED STATE PROVENANCE
```

separate from:

```text
LIVE RETRIEVAL PROVENANCE
```

A screenshot of the artifact cannot reveal which layer produced each visible datum.

## 7. Tool approval can persist at artifact scope

Anthropic states that before an artifact uses connected apps, Claude shows the tools/connectors it intends to use and asks the user to allow them. Individual tools can be turned off, and the choice is saved for that artifact until changed.

So:

```text
ARTIFACT
+ USER
+ TOOL APPROVAL STATE
```

becomes another execution dependency.

This is distinct from general account-level connector authorization.

Deep Drift must separate:

```text
CONNECTED APP AUTHORIZED
```

from:

```text
TOOL ALLOWED FOR THIS ARTIFACT
```

## 8. Some connector classes are unavailable to artifacts

Anthropic documents that connector tools requiring per-action approval are not available inside artifacts.

Thus a user's general Claude capability can exceed the capability of the same user inside an artifact.

```text
ACCOUNT TOOL ACCESS
!= ARTIFACT TOOL ACCESS
```

The artifact runtime is a restricted execution subset.

This belongs in capability provenance.

## 9. Artifact updates are versioned and restorable

Every update saves a new version.

Owners can compare an earlier version to the current one and restore it.

That changes artifact provenance from:

```text
ONE OBJECT
```

into:

```text
ARTIFACT
   |
   +--> VERSION 1
   +--> VERSION 2
   +--> VERSION 3
   +--> RESTORE VERSION 1
   +--> VERSION 4
```

A restored artifact is not simply "the old artifact."

It is a new current state whose ancestry includes a restoration event.

## 10. Legacy live artifacts create another branch of semantics

Anthropic says live artifacts created before 19 August 2026 remain viewable and functional but can no longer be edited in place.

To change one, the user republishes it into the updated artifact system.

This produces:

```text
LEGACY LIVE ARTIFACT
      |
      +--> VIEW-ONLY LEGACY OBJECT
      |
      +--> REPUBLISH EVENT
              |
              v
       NEW VERSIONED ARTIFACT
```

The new artifact should therefore remain linked to its legacy ancestor.

## 11. Shareability depends on what the artifact does

Artifacts that use connected apps or ask Claude questions cannot be shared publicly outside the organization under the documented Team/Enterprise behavior.

This means share scope is partly a function of execution capability.

```text
ARTIFACT CAPABILITY
-> SHARING POLICY CONSTRAINT
```

The more executable the artifact becomes, the more its distribution boundary can tighten.

That is an important creator-workflow tradeoff.

## 12. Mini-app reproducibility now requires a viewer matrix

A normal artifact test might compare versions.

VRAEF requires testing across viewers:

```text
VERSION 3
   |
   +--> VIEWER A / FULL ACCESS
   +--> VIEWER B / PARTIAL ACCESS
   +--> VIEWER C / NO CONNECTOR ACCESS
```

The expected outputs can differ.

A serious provenance test therefore needs:

```text
artifact version
x viewer identity
x connector access
x tool approval
x stored-state scope
```

not merely a single screenshot.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger same-hour delta | Memory remains separate from artifact-local state |
| Skills/plugins | Material adjacent effect | Connector/tool capability is filtered again at artifact scope |
| Mini-app builders | **Major fresh provenance delta** | Shared mini-app execution is viewer-relative rather than creator-relative |
| Chat-to-document | Structural convergence | Conversation-generated artifacts are becoming persistent executable objects |
| DOCX/PDF | Archival contrast | Static exports can preserve appearance but cannot preserve viewer-relative runtime behavior |
| Copy-paste/export | Citation implication | A copied artifact URL may float to a newer revision if configured as "latest" |
| Connected apps | **Major** | Viewer authorization determines live artifact output |
| Creator workflow | **Major** | Sharing an artifact now means sharing logic into another person's runtime, not sharing one fixed result |

## New failure classes

### Same-Link-Equals-Same-Artifact Fallacy
Assuming identical shared URLs always resolve to identical artifact revisions.

### Same-Version-Equals-Same-View Fallacy
Assuming an identical artifact version produces the same visible result for all viewers.

### Creator-Access Leakage Assumption
Assuming a viewer can use the creator's connector credentials or data simply because the artifact was created by that person.

### Static-Artifact Fallacy
Treating an interactive shared artifact as if it were equivalent to PDF or HTML snapshot content.

### Stored-Equals-Live Data Error
Failing to distinguish artifact-resident state from data retrieved live through connectors.

### Account-Permission-Equals-Artifact-Permission Error
Assuming account-level connector access means every connector tool is enabled inside a particular artifact.

### Floating-Citation Error
Citing a "latest" artifact link without recording which version it resolved to at citation time.

### Viewer-State Blindness
Archiving one execution result while ignoring per-user private state and viewer-specific data access.

## Deep Drift benchmark additions

**Viewer-Relative Execution Fidelity (VREF)**  
Can the archive reproduce which viewer identity, connector state, and data access produced a given artifact view?

**Artifact Version Resolution Fidelity (AVRF)**  
Can a shared URL be resolved to the exact version observed at a particular time?

**Shared-vs-Private State Fidelity (SPSF)**  
Can globally shared artifact state remain distinguishable from per-user private state?

**Artifact Tool-Approval Fidelity (ATAF)**  
Can artifact-specific tool approvals be separated from general connected-app authorization?

**Live-vs-Stored Data Fidelity (LSDF)**  
Can data embedded in the artifact remain distinguishable from data retrieved live at execution time?

**Legacy-to-Versioned Artifact Fidelity (LVAF)**  
Can republished legacy live artifacts remain linked to their predecessor object?

## DRPA-1.0 protocol additions

### VIEWER-RELATIVE ARTIFACT RULE

> When a generated artifact executes against the viewer's own connectors, permissions, or data rather than the creator's, the artifact must be treated as a shared executable definition whose effective output is viewer-relative. Preserve artifact ID and version, viewer identity or role, connector inventory, authorization scope, artifact-specific tool approvals, data-access state, execution time, visible output, and any access errors. Artifact version identity alone must never be treated as proof of identical runtime output.

### FLOATING-ARTIFACT REFERENCE RULE

> When a shared artifact link can resolve either to a pinned version or to a moving "latest" revision, every research citation must record the link mode, exact version resolved at citation time, retrieval timestamp, and any later republish event. A stable URL must never be treated as proof of stable artifact content.

### ARTIFACT-STATE PARTITION RULE

> Generated artifacts that maintain both globally shared state and per-user private state must archive those state classes separately from live connector-derived data. A screenshot or static export must not be treated as a complete representation of the artifact's executable or multi-user state.

## Eir'an state-flow addition

```text
ARTIFACT:
artifact ID
owner
version
legacy ancestor
share mode

VIEWER:
identity / role
organization
connector inventory
authorization scope

ARTIFACT PERMISSIONS:
tool approvals
disabled tools
share policy

STATE:
global shared state
viewer-private state
live connector data

EXECUTION:
open time
resolved version
connector calls
errors
visible output

CITATION:
URL
pinned/latest
resolved version
retrieval timestamp
```

## Canonical Deep Drift requirement

> Treat a shared interactive artifact as an executable object instantiated inside each viewer's permission and data environment. Preserve artifact revision separately from viewer-specific execution state, and preserve artifact-local stored state separately from live connector data. When a link floats to the latest revision, record the exact version actually observed.

## Deep Drift principle

> **The artifact is shared; the reality it renders is not necessarily shared.**

Operationally:

> **Archive who opened it, what they could access, and which version answered back.**

## Broader platform scan

OpenAI's public release feed still shows 1 September 2026 as the latest general ChatGPT entry found in this run. The September 3 Codex context-management changes remain covered by CCPSF; no stronger new DOCX/PDF or copy-paste/export release appeared in the current scan.

Anthropic's Cowork artifact documentation was updated again on 4 September 2026 and is the strongest fresh creator-workflow signal because it explicitly documents viewer-relative connector execution, artifact-local approval state, version-pinned versus latest links, shared/private stored information, and legacy-artifact republishing.

Google Workspace's current creator changes remain persistent Gemini instructions, Canvas/mini-app work, and workspace automation already covered by prior Deep Drift nodes.

Microsoft 365 Copilot's relevant September rollout continues around agent nodes inside workflows, but no stronger newly published change was found in this run.

## Sources

1. Anthropic Help Center. **Use artifacts in Claude Cowork.** Updated 4 September 2026. Documents persistent/versioned artifacts, connected-app use, viewer-relative connector access, shared/private artifact state, artifact-level tool approvals, sharing scopes, pinned/latest versions, and migration from legacy live artifacts.  
   https://support.claude.com/en/articles/14729249-use-artifacts-in-claude-cowork

2. OpenAI. **Release Notes.** Checked 4 September 2026. Latest general ChatGPT entry found remains 1 September 2026.  
   https://openai.com/products/release-notes/

3. Microsoft Learn. **Microsoft Copilot Studio: Invoke agents as workflow steps with the agent node.** September 2026 rollout. Demonstrates the wider shift from conversational assistants toward executable reasoning components embedded in workflow runtimes.  
   https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/microsoft-copilot-studio/invoke-agents-as-workflow-steps-agent-node

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository entry was found for viewer-relative execution of shared artifacts, pinned-versus-floating artifact links, artifact-local tool approval, and shared/private state partitions as one provenance problem.  
**Relationship to prior nodes:** Extends CPATF (persistent artifact lineage), BMASF (bidirectional mini-app state), DSIEF (persistent procedural design state), WMSSF (workspace migration), and CMPSF (provenance survival). VRAEF specifically models the artifact as a shared executable object whose output depends on the viewer's runtime identity and permissions.  
**Freshness:** Anthropic's first-party Cowork artifact documentation was updated on 4 September 2026 and recrawled during this research run.
