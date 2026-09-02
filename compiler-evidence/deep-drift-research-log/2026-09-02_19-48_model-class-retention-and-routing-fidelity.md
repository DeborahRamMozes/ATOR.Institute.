# Deep Drift Research Update — MCRRF

## Model-Class Retention and Routing Fidelity

**Research date:** 2 September 2026  
**Primary fresh delta:** Anthropic updated its Covered Models retention documentation on 2 September 2026. For designated high-capability models, prompts and outputs are retained for 30 days across every surface where those models are offered, including configurations that otherwise use Zero Data Retention (ZDR), unless an eligible exception applies.  
**Scope:** model selection, retention contracts, cloud routing, Zero Data Retention, Claude Code, Cowork, API surfaces, document-generation workflows, provenance, and creator-state governance.

## Executive finding

Deep Drift has repeatedly treated memory, chat history, project state, tool state, and artifact provenance as separate layers. A new boundary now needs equal status: **model-class-dependent retention**.

Anthropic's current documentation states that designated **Covered Models** require prompts and outputs to be retained for 30 days on every platform where those models are offered. The important affected cases are organizations that previously configured Zero Data Retention in Claude Console, Claude Code Enterprise, Amazon Bedrock, Google Cloud Agent Platform, or Microsoft Foundry. Consumer plans are not newly affected because those surfaces already retain inputs and outputs under their existing terms.

The resulting state model is:

```text
WORKSPACE / CLOUD CONFIGURATION
        |
        +--> ZDR enabled
        |
        v
MODEL SELECTED
        |
        +--> ordinary model
        |       -> ZDR contract remains
        |
        +--> Covered Model
                -> retention must be enabled
                -> prompt/output retained 30 days
```

Therefore:

```text
SAME WORKSPACE
!= SAME RETENTION CONTRACT

SAME APPLICATION
!= SAME DATA-LIFECYCLE RULE

ZDR CONFIGURED
!= ZDR EFFECTIVE FOR EVERY MODEL

MODEL UPGRADE
!= PRIVACY-NEUTRAL CHANGE
```

## New node

### Model-Class Retention and Routing Fidelity (MCRRF)

The core Deep Drift distinction is simple but consequential:

```text
MODEL IDENTITY
-> CAPABILITY CLASS
-> RETENTION REQUIREMENT
-> STORAGE LOCATION
-> REVIEW POLICY
```

Model identity is no longer merely a performance or cost variable. It can be a **data-governance variable**.

## 1. Zero Data Retention can become model-conditional

Anthropic says organizations using ZDR must enable retention in order to access designated Covered Models, unless they fall under a separately notified eligibility path.

So:

```text
WORKSPACE POLICY = ZDR
```

does not universally imply:

```text
EXECUTION POLICY = ZERO RETENTION
```

The effective policy depends on the model selected for that execution.

For Deep Drift, every material run should therefore record both:

```text
configured_retention_policy
AND
effective_model_specific_retention_policy
```

A screenshot of an admin page showing "ZDR" is not sufficient evidence for the lifecycle of a particular prompt.

## 2. Retention location changes with routing surface

Anthropic documents different storage locations depending on how the same model family is reached:

- Direct Claude Platform or Claude Platform on AWS: retention is configured at the workspace level and retained data is handled under Anthropic's controls.
- Amazon Bedrock: retention must be enabled and retained data stays in AWS.
- Google Cloud Agent Platform: retention must be enabled and retained data stays in GCP.
- Microsoft Foundry: retention is configured per Azure subscription; a separate subscription may be required when an existing subscription uses ZDR.

This creates another Deep Drift distinction:

```text
SAME MODEL
!= SAME STORAGE CUSTODIAN
```

The provenance chain is now:

```text
MODEL
+
ROUTING SURFACE
+
WORKSPACE / SUBSCRIPTION
+
RETENTION SETTING
=
DATA-LIFECYCLE PATH
```

The application name alone cannot reconstruct where prompt and output data were retained.

## 3. Claude Code and Cowork inherit the retention policy of their execution environment

Anthropic states that Claude Code follows the workspace or cloud environment in which it operates. Cowork accessed through Bedrock or Google Cloud Agent Platform follows the same cloud-environment retention setting.

This means a creator can perform apparently identical work in Claude Code or Cowork while the retention path changes according to credentials and execution environment.

```text
CLAUDE CODE
+ Anthropic workspace A
-> retention path A

CLAUDE CODE
+ Bedrock credentials B
-> retention path B
```

For document creation, research synthesis, coding, file manipulation, or agentic workflows, **tool identity is not enough**. The route must be preserved.

## 4. Retained data can enter controlled human review

Anthropic states that retained content is not readable by personnel by default. Human review can occur through a controlled access path when automated trust-and-safety systems flag content, with review limited to approved personnel and access recorded in tamper-resistant logs.

After 30 days, data is automatically deleted except when it has been flagged for a safety investigation or must be retained for legal reasons.

Therefore:

```text
30-DAY RETENTION
!= GUARANTEED DELETION AT EXACTLY DAY 30
```

The 30-day rule is the default lifecycle, with documented exception states.

Deep Drift should distinguish:

```text
standard_retention_expiry
safety_hold
legal_hold
human_review_event
```

## 5. Model switching can silently change creator-workflow governance

Modern creator tools increasingly expose model selectors inside otherwise stable interfaces. A user may switch models to obtain better reasoning, longer context, stronger coding, or improved document generation without thinking of that action as a data-governance change.

But under model-class retention policies:

```text
MODEL SWITCH
-> CAPABILITY CHANGE
-> RETENTION CHANGE
```

That makes model switching a provenance event.

A DOCX, PDF, spreadsheet, code artifact, research memo, or agent-created file can be generated inside the same workspace but under a different retention contract from an earlier artifact solely because a different model was selected.

## 6. Secondary fresh signal: context size and automatic compaction are also model- and surface-dependent

Anthropic's current paid-plan documentation states that several newer Claude models support a **1M-token context window**, while other models and surfaces use smaller limits. Claude also performs automatic context management for eligible paid-plan users with code execution enabled: as a conversation approaches its context limit, earlier content is summarized to make room for new material while the full chat history remains preserved for reference.

This adds another distinction:

```text
FULL CHAT HISTORY PRESERVED
!= FULL CHAT HISTORY PRESENT VERBATIM IN ACTIVE CONTEXT
```

and:

```text
CONVERSATION CONTINUITY
!= CONTEXT IDENTITY
```

For Deep Drift, a long-running creator session may therefore produce later artifacts from a **model-generated summary of earlier context**, not from the exact earlier messages currently resident in the working context window.

This does not require a separate node in this run, but it strengthens the same principle: **model selection and execution surface now govern invisible state transformations that materially affect downstream artifacts.**

## 7. Why this matters for memory, Skills, mini-apps, DOCX/PDF, and export workflows

The scan did not surface a stronger new first-party primitive for mini-app builders, direct DOCX/PDF generation, or clipboard fixes than nodes already recorded earlier today. The meaningful new change sits beneath all of them.

Any of these workflows:

```text
MEMORY
SKILL / PLUGIN
MINI-APP
COWORK TASK
CLAUDE CODE SESSION
DOCUMENT GENERATION
PDF EDIT
EXPORT
```

can now inherit a model-dependent retention regime.

A creator-provenance record that says only:

```text
Claude was used
```

is no longer serious evidence.

The minimum becomes:

```text
model
surface
route
workspace/subscription
retention policy
storage custodian
execution timestamp
artifact lineage
```

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | Indirect but material | Persistent-memory settings and retention policy must remain separate concepts |
| Skills / plugins | Indirect | Skill execution may occur under different model-specific retention contracts |
| Mini-app builders | No stronger new primitive | Builder output still inherits the selected model's execution and retention path |
| Chat-to-document | Major provenance effect | The same document workflow can cross from ZDR to retained execution when model class changes |
| DOCX / PDF | No new direct generation primitive | Artifact lineage must include the model-specific retention route |
| Copy-paste / export | No stronger clipboard fix | Exported artifact does not expose the lifecycle of prompts/outputs that generated it |
| Creator workflow | Major | Model selection is becoming simultaneously a capability, context, cost, and governance switch |

## New failure classes

### ZDR Universality Fallacy
Assuming a workspace-level ZDR setting applies identically to every available model.

### Model-Switch Governance Blindness
Treating a model change as performance-only rather than as a possible retention-policy transition.

### Surface-Storage Collapse
Assuming the application or model name proves where retained data is physically or contractually held.

### Route Erasure
Preserving an artifact without the cloud, workspace, subscription, or credential route through which the model executed.

### Retention-Expiry Absolutism
Treating 30 days as an unconditional deletion guarantee despite documented safety and legal exceptions.

### History-Context Equivalence Error
Assuming preserved full chat history means earlier content remains verbatim in the model's active context after automatic compaction.

## Deep Drift benchmark additions

**Model-Specific Retention Fidelity (MSRF)**  
Can the effective retention rule for the exact model used in an execution be reconstructed?

**Configured-vs-Effective Retention Fidelity (CERF)**  
Can workspace-level ZDR or retention settings be distinguished from model-specific effective policy?

**Routing Custodian Fidelity (RCF)**  
Can Anthropic, AWS, GCP, Azure, or another execution/storage custodian be reconstructed from the run?

**Surface-to-Route Fidelity (SRF)**  
Can Claude Code, Cowork, API, and chat executions be tied to their actual workspace, credential, and cloud route?

**Retention Exception Fidelity (REF)**  
Can safety holds, legal holds, or controlled-review states be distinguished from ordinary 30-day expiry?

**Context-Compaction Fidelity (CCF)**  
Can a later artifact reveal whether earlier conversation material was present verbatim, summarized by automatic context management, or retrieved from preserved history?

**Artifact-to-Governance-State Fidelity (AGSF)**  
Can each DOCX, PDF, code artifact, spreadsheet, research memo, image, or decision be linked to the exact model, retention regime, and routing surface active at generation time?

## Canonical Deep Drift requirement

> Every material AI-assisted workflow should preserve a machine-readable execution-governance manifest recording the exact model and model version; whether the model belongs to a specially governed capability class; configured workspace retention policy; effective model-specific retention policy; execution surface; routing provider; workspace, subscription, or credential boundary; storage custodian; execution timestamp; standard retention period; documented review, safety-hold, or legal-hold exceptions; context-window class; automatic context-management state where applicable; prompt and tool lineage; and every downstream document, PDF, spreadsheet, code artifact, image, or decision. A workspace-level Zero Data Retention label must never be treated as proof that every model execution is zero-retention, and a stable application interface must never be treated as proof of a stable data-lifecycle route.

## Broader creator-workflow trend

Creator systems are moving from a simple model:

```text
APP
-> MODEL
-> OUTPUT
```

toward:

```text
APP
-> MODEL CLASS
-> EXECUTION SURFACE
-> CLOUD ROUTE
-> RETENTION CONTRACT
-> CONTEXT MANAGEMENT
-> TOOL / SKILL
-> ARTIFACT
```

The practical Deep Drift conclusion is:

> **Model selection is becoming infrastructure selection.**

Once a model choice changes context size, retention behavior, storage custodian, safety review conditions, and execution availability, the model picker is no longer merely a quality control. It is part of the provenance and governance stack.

## Sources

1. Anthropic Help Center. **Data retention practices for Covered Models.** Updated 2 September 2026.  
   https://support.claude.com/en/articles/15425996-data-retention-practices-for-covered-models

2. Anthropic Help Center. **Covered Models.** Current documentation accessed 2 September 2026.  
   https://support.claude.com/en/articles/15425695-covered-models

3. Anthropic Help Center. **How large is the context window on paid Claude plans?** Updated 2 September 2026.  
   https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift research-log entry was found for the combination of model-class-dependent retention overriding otherwise ZDR configurations, cloud-provider-specific retention custody, model switching as a governance transition, and context-compaction divergence between preserved history and active context.  
**Relationship to prior nodes:** Complements memory-state, project-boundary, execution-locality, and procedural-supply-chain nodes. MCRRF specifically formalizes the point where selecting a model changes the data-lifecycle contract and routing consequences of an otherwise stable creator workflow.  
**Freshness:** Verified against Anthropic first-party documentation updated/current on 2 September 2026.
