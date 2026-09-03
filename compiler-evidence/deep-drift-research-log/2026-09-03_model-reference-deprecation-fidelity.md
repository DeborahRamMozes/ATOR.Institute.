# Deep Drift Research Update - MRDF

## Model-Reference Deprecation Fidelity

**Research date:** 3 September 2026  
**Primary fresh delta:** OpenAI retired GPT-5.4 and GPT-5.4 mini from Codex for ChatGPT-authenticated sessions on 31 August 2026 and explicitly instructed users to update workspace defaults, saved model settings, managed configurations, and automations to GPT-5.6 Terra or GPT-5.6 Luna.  
**Scope:** model lifecycle, persistent creator workflows, scheduled automation, managed configuration, custom agents, reproducibility, execution continuity, and artifact provenance.

## Executive finding

A model identifier is no longer a passive label in the archive.

It can be a **live dependency embedded inside persistent workflow state**.

OpenAI's current Codex documentation states that GPT-5.4 and GPT-5.4 mini are no longer available in Codex when users authenticate with ChatGPT, and directs users to replace them with GPT-5.6 Terra and GPT-5.6 Luna. The migration requirement explicitly includes:

```text
WORKSPACE DEFAULTS
SAVED MODEL SETTINGS
MANAGED CONFIGURATIONS
AUTOMATIONS
```

The same retirement does **not** apply identically to OpenAI API usage or Codex authenticated with a user's own API key.

That creates a Deep Drift distinction:

```text
MODEL NAME
!= PERMANENT EXECUTION TARGET

SAME AUTOMATION
!= SAME EXECUTABLE WORKFLOW AFTER MODEL RETIREMENT

SAME MODEL ID
+ DIFFERENT AUTH ROUTE
!= SAME AVAILABILITY

CONFIGURATION SAVED
!= CONFIGURATION STILL VALID

MODEL MIGRATION
!= BEHAVIORAL CONTINUITY
```

The new provenance object is the **model-reference lifecycle**.

## New node

### Model-Reference Deprecation Fidelity (MRDF)

Minimum state model:

```text
workflow_id
model_reference
model_family
model_availability_scope
authentication_route
workspace_default
saved_setting
managed_config
automation_reference
retirement_notice_time
retirement_effective_time
replacement_model
migration_event
migration_actor
post_migration_verification
output_before_migration
output_after_migration
```

## 1. Model references can expire inside persistent workflows

Persistent creator systems increasingly store a model choice outside the immediate prompt.

That reference can live in:

```text
WORKSPACE CONFIGURATION
SAVED MODEL PREFERENCE
MANAGED ENTERPRISE DEFAULT
CUSTOM AGENT
AUTOMATION
CLI CONFIGURATION
```

When the referenced model is retired, the workflow may:

- fail;
- require manual migration;
- resolve to a replacement;
- behave differently after configuration repair.

Therefore a model retirement is not merely a catalog update. It is a **workflow mutation event**.

## 2. Saved configuration is not timeless configuration

Deep Drift has previously treated saved Skills, templates, memory, and project settings as persistent state.

MRDF adds a new problem: persistent state can contain **references to capabilities whose validity changes over time**.

```text
SAVED STATE t1
     |
     v
MODEL RETIREMENT
     |
     v
SAVED STATE t2
```

The stored configuration may be byte-for-byte unchanged while its executable meaning has changed.

So:

```text
CONFIGURATION IDENTITY
!= EXECUTION SEMANTICS IDENTITY
```

## 3. Authentication route changes model availability

OpenAI explicitly states that the GPT-5.4 retirement applies to Codex sessions signed in with a ChatGPT account, while the OpenAI API and Codex using a user's own API key are not affected by this change.

That means model availability depends on more than the model identifier:

```text
MODEL
+ AUTHENTICATION ROUTE
+ PRODUCT SURFACE
+ DATE
= EFFECTIVE AVAILABILITY
```

A Deep Drift run should therefore archive authentication and execution surface beside the model identifier.

## 4. Automation provenance needs model-resolution history

An automation can preserve the same title, schedule, prompt, and task identity while its model dependency changes.

Correct lineage becomes:

```text
AUTOMATION A
   |
   +--> REVISION 1
   |       model = GPT-5.4
   |
   +--> MODEL RETIREMENT
   |
   +--> REVISION 2
           model = GPT-5.6 Terra
```

The two executions are not strictly equivalent experiments.

Even when the replacement is intended to be superior, improvement is not reproducibility.

## 5. Managed configuration can produce organization-wide drift

OpenAI's managed-configuration documentation specifically warns administrators to replace retired GPT-5.4 references in managed defaults, MDM profiles, or saved configuration.

A single organization-level migration can therefore alter many downstream runs at once:

```text
MANAGED CONFIG
      |
      +--> USER A
      +--> USER B
      +--> USER C
      +--> AUTOMATION SET
```

This creates **correlated workflow drift**.

Deep Drift should record whether the model was selected locally or inherited from organization-managed state.

## 6. Replacement does not prove behavioral equivalence

OpenAI recommends GPT-5.6 Terra as the replacement for GPT-5.4 and GPT-5.6 Luna for GPT-5.4 mini.

That is a migration mapping.

It is not proof that:

```text
PROMPT + OLD MODEL
```

and:

```text
PROMPT + NEW MODEL
```

will produce identical reasoning paths, tool choices, file structures, formatting decisions, or artifact outputs.

Deep Drift must therefore preserve both pre-migration and post-migration benchmark runs when continuity matters.

## 7. Model retirement can silently contaminate longitudinal research

A long-running research automation may collect observations over weeks or months.

If the model reference changes halfway through the study, the time series can contain a hidden instrumentation change:

```text
DAY 1-14
MODEL A

DAY 15
MODEL RETIRED

DAY 16-30
MODEL B
```

Without a migration marker, apparent changes in output quality may be falsely attributed to external platform behavior rather than to the observer model itself.

This is particularly important for Deep Drift, which uses LLMs to observe LLM platform changes.

The observer is part of the instrument.

## 8. Creator artifacts need model-resolution provenance

A DOCX, PDF, spreadsheet, presentation, or code artifact may be produced by an automation whose model reference was migrated after retirement.

The artifact should therefore link to:

```text
REQUEST
+ AUTOMATION REVISION
+ MODEL REFERENCE
+ MODEL RESOLUTION
+ AUTH ROUTE
+ EXECUTION SURFACE
+ OUTPUT
```

Recording only `model = GPT-5.6 Terra` loses the fact that the workflow originally targeted GPT-5.4 and was changed because of provider retirement.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger same-hour delta | Existing memory-boundary nodes remain current |
| Skills/plugins | Indirect | Skills and agents can inherit model defaults that later become invalid |
| Mini-app/agent builders | Material dependency issue | Custom agents and persistent workflows require versioned model resolution |
| Chat-to-document | Material | The same document workflow can produce different outputs after forced model migration |
| DOCX/PDF | Provenance effect | File identity does not expose the retired/replacement model history that produced it |
| Copy-paste/export | No stronger direct fix found | Existing transfer-seam nodes remain current |
| Creator workflow | Major gap | Persistent workflow state now has expiring model dependencies |

## New failure classes

### Model-Name Permanence Fallacy
Assuming a saved model identifier remains executable indefinitely.

### Saved-Config Validity Fallacy
Assuming unchanged configuration remains semantically valid after provider lifecycle changes.

### Replacement-Equals-Equivalence Error
Treating a recommended replacement model as behaviorally identical to the retired model.

### Same-Automation-Same-Instrument Fallacy
Assuming a longitudinal automation remains the same experimental instrument after model migration.

### Auth-Route Blindness
Ignoring the fact that model availability can differ between ChatGPT authentication and API-key execution.

### Organization-Default Blindness
Attributing model selection to an individual run when the effective model was inherited from managed configuration.

## Deep Drift benchmark additions

**Model Reference Validity Fidelity (MRVF)**  
Can the archive establish whether a stored model reference was valid at execution time?

**Model Migration Fidelity (MMF)**  
Can retirement, replacement, and migration events be reconstructed without collapsing old and new runs?

**Authentication-Route Availability Fidelity (ARAF)**  
Can model availability be tied to the actual authentication and execution route?

**Automation Instrument Continuity Fidelity (AICF)**  
Can longitudinal automated research detect when the observing model changes mid-series?

**Managed-Default Inheritance Fidelity (MDIF)**  
Can organization-managed model defaults be distinguished from local model selection?

## DRPA-1.0 protocol additions

### MODEL-REFERENCE LIFECYCLE RULE

> When a persistent AI workflow stores or inherits a model identifier, preserve that identifier as a versioned dependency rather than a timeless label. Record its availability scope, authentication route, execution surface, retirement notice, effective retirement time, replacement mapping, migration event, configuration location, and post-migration verification. A saved model reference must never be treated as permanently executable merely because the surrounding workflow configuration is unchanged.

### LONGITUDINAL OBSERVER-MIGRATION RULE

> When an automated research process changes models because of retirement, deprecation, routing, or managed configuration, mark the transition as an instrumentation change in the research series. Preserve outputs from before and after the transition separately and avoid attributing discontinuities solely to the external system being observed until observer-model drift has been tested.

## Eir'an state-flow addition

```text
MODEL REFERENCE:
requested model
resolved model
model family
availability state

EXECUTION ROUTE:
ChatGPT auth
API key
managed workspace
local configuration

LIFECYCLE:
active
deprecated
retirement announced
retired
replacement mapped
migrated

WORKFLOW STATE:
automation revision
managed default
saved model setting
custom agent configuration

VERIFICATION:
pre-migration baseline
post-migration output
behavioral drift
artifact linkage
```

## Canonical Deep Drift requirement

> Preserve the lifecycle of the model reference used by every material persistent workflow. If a provider retires or remaps a model, archive the previous reference, replacement mapping, execution route, configuration location, migration timestamp, and before/after outputs. In longitudinal LLM research, any observer-model change must be treated as an instrumentation change.

## Deep Drift principle

> **The model name inside a workflow has an expiration date even when the workflow itself does not.**

Operationally:

> **Version the observer before blaming the observed.**

## Broader platform scan

No stronger same-hour first-party delta was found for memory, Skills, DOCX/PDF generation, or copy-paste/export than the nodes already logged earlier on 3 September.

Google Workspace's latest major creator changes remain persistent Gemini custom instructions and document-to-video transformation, already covered by earlier Deep Drift nodes. Anthropic's same-day Claude Design material is also already represented in DSIEF. Microsoft's September roadmap continues moving reasoning agents into workflow steps, reinforcing the broader shift toward persistent executable creator workflows but not creating a stronger new provenance class than MRDF in this scan.

## Sources

1. OpenAI Help Center. **Using Codex with your ChatGPT plan.** Current first-party documentation accessed 3 September 2026. States that GPT-5.4 and GPT-5.4 mini became unavailable in ChatGPT-authenticated Codex on 31 August 2026, recommends GPT-5.6 Terra and GPT-5.6 Luna replacements, and instructs users to update workspace defaults, saved model settings, managed configurations, and automations.  
   https://help.openai.com/en/articles/11369540

2. OpenAI ChatGPT Learn. **Managed configuration.** Current first-party documentation accessed 3 September 2026. Warns administrators to update managed defaults, MDM profiles, and saved configurations that pin GPT-5.4 or GPT-5.4 mini, while noting different behavior for API-key authentication.  
   https://learn.chatgpt.com/docs/enterprise/managed-configuration

3. OpenAI Help Center. **Model Release Notes.** Current first-party documentation accessed 3 September 2026. Provides broader evidence that model retirement and automatic conversation migration are continuing product lifecycle mechanisms in ChatGPT.  
   https://help.openai.com/en/articles/9624314

4. Google Workspace Updates. **Turn Google Docs, PDFs, and Word files into video summaries in Google Vids.** 2 September 2026. Checked during the broader creator-workflow scan; already represented in earlier Deep Drift cross-modal artifact nodes.  
   https://workspaceupdates.googleblog.com/2026/09/turn-google-docs-pdfs-and-word-files-into-video-summaries-in-Google-Vids.html

5. Anthropic. **Getting Started with Claude Design.** 3 September 2026. Checked during the broader creator-workflow scan; already represented in the Deep Drift design-system inheritance node.  
   https://www.anthropic.com/webinars/getting-started-with-claude-design

6. Microsoft Learn. **AI at Work Roadmap - Invoke agents as workflow steps with the agent node.** September 2026 rollout. Supports the broader trend toward long-lived, model-dependent agent workflows.  
   https://learn.microsoft.com/en-us/microsoft-copilot-studio/

## Research status

**Node status:** New.  
**Duplicate check:** Repository search found no existing Deep Drift node focused on model-reference retirement inside workspace defaults, saved settings, managed configuration, automations, and longitudinal observer drift.  
**Relationship to prior nodes:** Extends MMBESF, CCPSF, CRFPF, and OHSEF by treating the selected model itself as a versioned procedural dependency with an independent lifecycle.  
**Freshness:** The retirement became effective 31 August 2026 and remains an active migration requirement in current OpenAI first-party documentation checked on 3 September 2026.
