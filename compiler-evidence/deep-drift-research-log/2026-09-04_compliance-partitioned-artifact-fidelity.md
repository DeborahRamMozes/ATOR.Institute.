# Deep Drift Research Update - CPAF

## Compliance-Partitioned Artifact Fidelity

**Research date:** 4 September 2026  
**Primary fresh delta:** Anthropic's current first-party Cowork artifact documentation states that organizations using customer-managed encryption keys (CMEK), zero data retention (ZDR), or HIPAA-readiness configurations do **not** receive the updated persistent/versioned artifact system. They continue using legacy live artifacts instead.  
**Scope:** artifacts, mini-apps, persistence, versioning, connected-app behavior, compliance configuration, workspace-level capability divergence, sharing, web access, and creator-workflow reproducibility.

## Executive finding

The meaningful new Deep Drift problem is not simply that Claude has two artifact systems.

It is that **organization policy can select which artifact architecture exists at all**.

For ordinary eligible Pro, Max, Team, and Enterprise Cowork environments, Anthropic documents an updated artifact system with:

```text
ACCOUNT PERSISTENCE
+ WEB ACCESS
+ ORGANIZATION SHARING
+ CONNECTED-APP USE
+ VERSION HISTORY
```

But for organizations using CMEK, ZDR, or HIPAA-readiness configurations:

```text
UPDATED ARTIFACT SYSTEM
-> NOT AVAILABLE

LEGACY LIVE ARTIFACTS
-> REMAIN ACTIVE
```

Therefore:

```text
SAME PRODUCT NAME
!= SAME ARTIFACT ARCHITECTURE

SAME PLAN FAMILY
!= SAME CREATOR CAPABILITY

COMPLIANCE POLICY
!= BACKGROUND GOVERNANCE ONLY

WORKSPACE CONFIGURATION
-> CHANGES CREATOR RUNTIME
```

This is a distinct provenance problem because a comparative test can appear to compare "Claude Cowork artifacts" while actually comparing different execution and persistence systems.

## New node

### Compliance-Partitioned Artifact Fidelity (CPAF)

Minimum state model:

```text
platform
workspace_id
plan
compliance_configuration
cmek_state
zdr_state
hipaa_readiness_state
artifact_system_generation
artifact_persistence_state
versioning_state
web_access_state
sharing_state
connected_app_state
legacy_state
effective_capability_set
test_time
```

## 1. Compliance configuration is now capability configuration

Compliance settings are usually treated as governance metadata.

Here they determine which creator architecture is active.

```text
WORKSPACE POLICY
      |
      +--> STANDARD ELIGIBLE CONFIG
      |       |
      |       -> UPDATED ARTIFACT SYSTEM
      |
      +--> CMEK / ZDR / HIPAA-READINESS
              |
              -> LEGACY LIVE ARTIFACTS
```

Deep Drift must therefore treat compliance configuration as part of the execution environment.

## 2. Artifact identity is architecture-dependent

An "artifact" in one Claude organization may be:

- saved to the account;
- available on the web;
- shareable within the organization;
- versioned on every update;
- able to use connected apps.

An "artifact" in another organization under a compliance configuration may remain a legacy live artifact with a different persistence and editing model.

So:

```text
ARTIFACT
```

is no longer a sufficient type label.

The archive must preserve:

```text
artifact_system_generation
```

as a first-class field.

## 3. Same benchmark prompt can test different systems

Suppose Deep Drift runs:

```text
"Build a persistent interactive research dashboard."
```

in two Claude organizations.

Organization A receives the updated artifact system.

Organization B is ZDR-configured and remains on legacy live artifacts.

If the output behavior differs, the difference cannot safely be attributed to:

- model intelligence;
- prompt quality;
- random drift;
- user behavior.

The workspace compliance configuration is a causal variable.

## 4. Persistence comparisons can become invalid

The updated artifact system saves artifacts to the account and creates version history.

Legacy live artifacts have different persistence semantics.

Therefore:

```text
PERSISTENCE TEST
WITHOUT ARTIFACT-SYSTEM ID
= INVALID COMPARISON
```

This matters directly to Deep Drift's long-running creator-workflow benchmarks.

## 5. Static export can conceal runtime divergence

Two organizations may export visually similar PDF or document snapshots from artifacts.

But the underlying artifact systems can differ in:

- account persistence;
- version lineage;
- sharing behavior;
- connected-app access;
- editability;
- web availability.

Thus:

```text
SIMILAR PDF
!= SIMILAR CREATOR RUNTIME
```

Static artifacts should never erase the architecture that produced them.

## 6. Compliance policy can create invisible feature forks

The platform can present one branded product while workspace-level settings silently route users onto different capability generations.

This creates an invisible feature fork:

```text
CLAUDE COWORK
      |
      +--> ARTIFACT SYSTEM A
      |
      +--> ARTIFACT SYSTEM B
```

A public release note saying "Artifacts now support X" is therefore incomplete unless availability constraints are also recorded.

## 7. Creator workflow research needs policy-conditioned test matrices

A serious comparative benchmark now needs rows such as:

```text
PRO / STANDARD
TEAM / STANDARD
ENTERPRISE / STANDARD
ENTERPRISE / CMEK
ENTERPRISE / ZDR
ENTERPRISE / HIPAA-READINESS
```

Testing only one workspace can no longer justify claims about the platform category as a whole.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger fresh delta | Prior memory-transition and migration nodes remain current |
| Skills/plugins | No stronger fresh delta | Procedural capability remains separately versioned |
| Mini-app builders | **Major fresh architectural gap** | Artifact architecture itself varies by compliance configuration |
| Chat-to-document | Indirect | Static exports may hide different persistent-artifact ancestry |
| DOCX/PDF | Provenance implication | Similar exported files can originate from different artifact generations |
| Copy-paste/export | No stronger direct fix found | Existing seam-reduction nodes remain current |
| Connected apps | Material | Updated artifacts can use connected apps; legacy configurations may not expose identical behavior |
| Creator workflow | **Major** | Workspace policy now selects creator-runtime architecture |

## New failure classes

### Same-Product-Equals-Same-Architecture Fallacy
Assuming all users of the same branded product are operating the same creator system.

### Compliance-Is-Only-Governance Error
Treating CMEK, ZDR, or HIPAA-readiness as administrative metadata rather than execution-state variables.

### Artifact-Type Flattening
Recording all Claude artifacts under one generic type despite legacy and updated systems having different semantics.

### Plan-Equals-Capability Fallacy
Assuming plan tier alone determines available creator capability.

### Static-Export Architecture Loss
Using DOCX/PDF output as evidence while omitting which artifact system generated it.

### Release-Note Availability Blindness
Recording a feature as universally released while ignoring workspace-level exclusions.

## Deep Drift benchmark additions

**Compliance-Conditioned Capability Fidelity (CCCF)**  
Can the archive establish which compliance configuration selected the effective creator capability set?

**Artifact-System Generation Fidelity (ASGF)**  
Can updated and legacy artifact systems remain distinguishable in longitudinal testing?

**Policy-Conditioned Reproducibility Fidelity (PCRF)**  
Can benchmark results be reproduced under the same workspace policy configuration?

**Static-Export Ancestry Fidelity (SEAF)**  
Can a PDF/DOCX snapshot remain linked to the artifact architecture that generated it?

## DRPA-1.0 protocol additions

### COMPLIANCE-CONDITIONED RUNTIME RULE

> When a platform's compliance, encryption, retention, healthcare, regional, or organization-level governance configuration changes which creator system or capability generation is available, that configuration must be preserved as part of execution provenance. Record workspace type, plan, compliance mode, effective artifact system generation, persistence behavior, versioning behavior, sharing scope, connector capability, and test time. Product name or plan tier must never be treated as sufficient evidence of runtime equivalence.

### ARTIFACT-SYSTEM GENERATION RULE

> When a platform maintains legacy and updated artifact architectures simultaneously, every artifact benchmark, export, citation, or longitudinal comparison must identify the artifact-system generation that produced the result. Static visual similarity must never be treated as proof of equivalent persistence, versioning, sharing, connected-app behavior, or editability.

## Eir'an state-flow addition

```text
WORKSPACE:
plan
organization
policy state

COMPLIANCE:
CMEK
ZDR
HIPAA-readiness

ARTIFACT RUNTIME:
legacy live
updated persistent/versioned

CAPABILITY:
web access
sharing
version history
connected apps
editability
account persistence

OUTPUT:
artifact ID
export ID
PDF/DOCX ancestry
test timestamp
```

## Canonical Deep Drift requirement

> Treat compliance configuration as a creator-runtime selector whenever it changes which artifact, memory, connector, or workflow system is available. Preserve the policy-conditioned capability set before comparing outputs between users, workspaces, organizations, or plans.

## Deep Drift principle

> **The policy panel can quietly choose which product you are actually using.**

Operationally:

> **Benchmark the configuration, not just the logo.**

## Broader platform scan

No stronger same-hour first-party delta was found for OpenAI general ChatGPT memory, Skills, DOCX/PDF export, or copy-paste behavior beyond the nodes already logged on 3-4 September.

Anthropic's updated Cowork artifact documentation is the strongest fresh research gap because it exposes a policy-conditioned architectural split: ordinary eligible environments use the updated persistent/versioned artifact system, while CMEK, ZDR, and HIPAA-readiness environments remain on legacy live artifacts.

Google's strongest recent creator updates remain document-to-video generation in Google Vids and existing Gemini file-generation / Workspace Canvas capabilities already covered by prior Deep Drift nodes.

Microsoft's current agent-builder and approval-gate changes remain represented by existing Deep Drift workflow and human-approval nodes.

## Sources

1. Anthropic Help Center. **Use artifacts in Claude Cowork.** Updated 4 September 2026. States that new Cowork artifacts use the updated artifact system with sharing, web access, connected apps, and versioning, while organizations using CMEK, ZDR, or HIPAA-readiness configurations continue using live artifacts because the updated system is not currently available to them.  
   https://support.claude.com/en/articles/14729249-use-artifacts-in-claude-cowork

2. Google Workspace Updates. **Turn Google Docs, PDFs, and Word files into video summaries in Google Vids.** 2 September 2026. Current creator-workflow example of document-to-derived-media transformation.  
   https://workspaceupdates.googleblog.com/2026/09/turn-google-docs-pdfs-and-word-files-into-video-summaries-in-Google-Vids.html

3. OpenAI Help Center. **ChatGPT Release Notes.** Checked 4 September 2026. No stronger fresh general ChatGPT creator-workflow delta was found in this run beyond already logged September nodes.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository entry was found for compliance configuration selecting between legacy and updated artifact architectures as one provenance problem.  
**Relationship to prior nodes:** Extends VRAEF (viewer-relative artifact execution), WMSSF (workspace migration), CPATF (persistent artifact lineage), and AATRF (administrative/compliance evidence layers). CPAF specifically captures policy-conditioned feature architecture.  
**Freshness:** Anthropic's first-party Cowork artifact documentation was updated and re-crawled on 4 September 2026.
