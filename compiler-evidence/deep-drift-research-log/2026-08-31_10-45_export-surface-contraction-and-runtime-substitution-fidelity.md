# Deep Drift Research Update

## Export-Surface Contraction and Runtime-Substitution Fidelity

**Research date:** 31 August 2026  
**Primary deltas:** Notion removes full-workspace PDF export by 31 August 2026; OpenAI Codex retires GPT-5.4 / GPT-5.4 mini for ChatGPT-authenticated Codex on the same date; Gemini Notebook introduces compute-aware creator limits and deferred output generation beginning 2 September 2026.  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch

## Executive Summary

The strongest creator-workflow change in this pass is not additive. It is a contraction.

Notion states that **full-workspace PDF export is being removed**, with the change rolling out completely by **31 August 2026**. Workspace-wide export remains available as HTML, Markdown, and CSV, and individual pages can still be exported to PDF. Notion also states that exported workspace content cannot simply be re-uploaded to recreate the original workspace.

On the same date, OpenAI removes **GPT-5.4 and GPT-5.4 mini from Codex when used through a ChatGPT account**. Users are instructed to replace them with **GPT-5.6 Terra** and **GPT-5.6 Luna** and update workspace defaults, saved model settings, managed configurations, or automations. API-key users are not affected by this particular retirement.

A third creator-workflow signal comes from Gemini Notebook. Google announced on **28 August 2026** that, starting **2 September**, compute usage will be governed by a flexible budget that considers prompt complexity, chat length, source count, and features used. If a costly output such as a Video Overview or Slide Deck exceeds the current budget, generation can be deferred and completed automatically later.

Together, these changes expose a creator-stack problem that Deep Drift has not yet formalized:

```text
CREATOR WORKFLOW
-> EXPORT SURFACE
-> MODEL / RUNTIME
-> RESOURCE BUDGET
-> PERSISTENCE / DELIVERY
```

Any of those layers can change independently while the user's logical workflow appears unchanged.

This report formalizes the benchmark family:

**Export-Surface Contraction and Runtime-Substitution Fidelity (ESCRSF)**

with companion constructs:

- Export Granularity Fidelity
- Workspace-to-Artifact Portability Fidelity
- Model-Substitution Fidelity
- Saved-Configuration Migration Fidelity
- Automation Runtime Continuity Fidelity
- Compute-Budget Transparency Fidelity
- Deferred-Generation Lineage Fidelity
- Format-Availability Regression Fidelity

The central research question is:

> When a creator platform removes an export format at one scope, substitutes the model behind saved workflows, or defers generation because of compute budgets, can the user still reconstruct exactly what changed in the workflow contract and preserve the artifact, configuration, and execution state needed to continue independently?

## 1. Notion: Full-Workspace PDF Export Is Going Away

Notion's current backup documentation states that Business and Enterprise workspaces have been able to export an entire workspace to PDF, but that **workspace-level PDF export is going away**, with rollout completing by **31 August 2026**.

The remaining full-workspace export formats are:

```text
HTML
MARKDOWN
CSV FOR DATABASES
UPLOADED FILES
```

Individual pages can still be exported to PDF.

This distinction matters:

```text
PAGE PDF EXPORT
!=
WORKSPACE PDF EXPORT
```

A platform can claim "PDF export still exists" while materially reducing the scope at which it exists.

## 2. Export Granularity Fidelity

### Definition

**Export Granularity Fidelity (EGF)** measures whether a platform preserves the user's ability to export content at the same logical scope over time.

Relevant scopes include:

```text
BLOCK
PAGE
DATABASE
PROJECT
WORKSPACE
ACCOUNT
```

A capability should be tracked as:

```text
FORMAT
+ SCOPE
+ INCLUDED OBJECT TYPES
+ PERMISSION BOUNDARY
```

not merely:

```text
PDF = YES
```

The useful question is not "does the product export PDF?"

It is:

> **What can be exported to PDF, at which structural level, with which exclusions, and can the resulting artifact reconstruct the original information architecture?**

## 3. Workspace-to-Artifact Portability Fidelity

Notion says exported workspace content cannot instantly recreate the original workspace by being uploaded again.

That exposes a familiar portability asymmetry:

```text
WORKSPACE
-> EXPORT
```

is supported, while:

```text
EXPORT
-> EQUIVALENT WORKSPACE
```

is not.

### Definition

**Workspace-to-Artifact Portability Fidelity (WAPF)** measures how much reconstructable workspace state survives export.

A minimum manifest should preserve:

```text
workspace_id
export_timestamp
export_format
included_pages
excluded_pages
teamspace restrictions
database relationships
attachment references
navigation / sitemap state
permission omissions
```

A backup that preserves text but not workspace relationships is an archive, not a complete migration package.

## 4. Format-Availability Regression Fidelity

### Definition

**Format-Availability Regression Fidelity (FARF)** measures when a platform removes or narrows an existing creator export capability.

The benchmark should record:

```text
previous_capability
previous_scope
new_capability
new_scope
effective_date
replacement_path
known_losses
```

This matters because creator-platform analysis usually benchmarks additions.

Deep Drift should also benchmark **subtractions**.

A workflow can become worse without anything "breaking."

## 5. OpenAI Codex: Saved Workflows Must Move Models

OpenAI's Codex documentation states that on **31 August 2026**, GPT-5.4 and GPT-5.4 mini stop being available in Codex when the user signs in with a ChatGPT account.

OpenAI instructs users to migrate:

```text
GPT-5.4
-> GPT-5.6 Terra

GPT-5.4 mini
-> GPT-5.6 Luna
```

and explicitly calls out:

```text
workspace defaults
saved model settings
managed configurations
automations
```

as state that should be updated.

This is not merely model deprecation.

It is a **stored workflow migration event**.

## 6. Model-Substitution Fidelity

### Definition

**Model-Substitution Fidelity (MSF)** measures whether a saved creator workflow preserves materially equivalent behavior when the underlying model is replaced.

A minimum migration manifest should preserve:

```text
workflow_id
old_model
new_model
old_model_settings
new_model_settings
migration_timestamp
reason_for_migration
baseline_outputs
post_migration_outputs
behavioral_differences
```

The dangerous assumption is:

```text
SAME PROMPT
+ NEW MODEL
=
SAME WORKFLOW
```

It does not.

Model substitution can change:

```text
reasoning depth
tool selection
latency
verbosity
code style
error behavior
cost
```

even when every visible instruction remains identical.

## 7. Saved-Configuration Migration Fidelity

Codex specifically mentions saved model settings, managed configurations, workspace defaults, and automations.

### Definition

**Saved-Configuration Migration Fidelity (SCMF)** measures whether every persistent configuration object that referenced a retired model is identified and migrated without orphaning hidden dependencies.

The migration inventory should include:

```text
workspace defaults
project defaults
saved presets
managed org policies
automations
agent configuration
CLI configuration
desktop configuration
```

A successful interactive chat after migration does not prove the automation fleet was updated.

## 8. Automation Runtime Continuity Fidelity

An automation can continue to exist while its selected model becomes invalid.

### Definition

**Automation Runtime Continuity Fidelity (ARCF)** measures whether recurring or stored workflows survive model retirement without silently changing behavior or failing.

Controlled tests should preserve:

```text
automation_id
previous_model
replacement_model
last_success_before_migration
first_success_after_migration
output_diff
tool-call diff
runtime error state
```

Deep Drift should treat model retirement as a dependency migration, not a cosmetic dropdown change.

## 9. Gemini Notebook: Compute Becomes a Creator-State Variable

Google's **28 August 2026** Gemini Notebook update introduces flexible, compute-specific usage limits rolling out beginning **2 September 2026**.

The effective usage budget considers:

```text
PROMPT COMPLEXITY
CHAT LENGTH
NUMBER OF SOURCES
FEATURE USED
```

The notebook can suggest alternative outputs if the requested operation exceeds the available limit.

Some outputs, including Video Overviews or Slide Decks, can be deferred for automatic generation later.

This creates another state:

```text
REQUESTED ARTIFACT
!=
IMMEDIATELY EXECUTED ARTIFACT
```

## 10. Compute-Budget Transparency Fidelity

### Definition

**Compute-Budget Transparency Fidelity (CBTF)** measures whether the platform makes resource constraints legible enough to explain why two apparently similar creator requests receive different execution behavior.

A minimum execution manifest should preserve:

```text
request_id
prompt_complexity_class
chat_length_state
source_count
requested_feature
available_compute_state
immediate_or_deferred
```

The user should not have to reverse-engineer why a Slide Deck was immediate yesterday and queued today.

## 11. Deferred-Generation Lineage Fidelity

### Definition

**Deferred-Generation Lineage Fidelity (DGLF)** measures whether an artifact generated later remains tied to the exact request state that initiated it.

A deferred generation manifest should preserve:

```text
request_id
request_timestamp
source_snapshot
chat_state
feature_requested
defer_event
generation_start
generation_complete
notification_event
artifact_id
```

This matters because source notebooks may change between request time and execution time.

The benchmark must determine whether deferred outputs use:

```text
REQUEST-TIME STATE
or
EXECUTION-TIME STATE
```

That distinction is essential for reproducibility.

## 12. New Failure Classes

### 12.1 Export Checkbox Illusion

The product still advertises PDF export, but the supported scope has materially narrowed.

### 12.2 Workspace Structure Loss

An export preserves content but cannot reconstruct database relations, navigation, or workspace topology.

### 12.3 Model Migration Without Behavioral Baseline

A replacement model is configured, but no controlled output comparison exists.

### 12.4 Saved Automation Orphaning

Interactive defaults migrate while hidden automations still reference a retired model.

### 12.5 Configuration-Surface Drift

Desktop, CLI, project, and workspace defaults point to different replacement models.

### 12.6 Deferred-Artifact Source Drift

A queued artifact is generated after its notebook sources have changed.

### 12.7 Compute-State Opacity

A platform changes execution mode because of resource limits without preserving why.

### 12.8 Format Regression Without Export Manifest

A creator discovers after the deadline that a previously available backup format no longer exists.

## 13. Deep Drift Benchmark: Export and Runtime Migration Round Trip

### Controlled workspace

Prepare one workspace containing:

```text
NESTED PAGES
ONE DATABASE
ONE ATTACHMENT
ONE PRIVATE / RESTRICTED OBJECT
ONE CROSS-PAGE LINK
```

### Export test

1. record available workspace export formats;
2. export HTML / Markdown / CSV where applicable;
3. export one individual page as PDF;
4. verify that full-workspace PDF is unavailable after the rollout;
5. compare structural information preserved across formats;
6. test whether the exported package can reconstruct the original navigation and relationships.

### Runtime migration test

1. identify one saved Codex workflow configured with the retiring model;
2. preserve baseline outputs;
3. migrate to the replacement model;
4. run identical controlled inputs;
5. compare reasoning-visible outputs, code structure, tool selection, and errors;
6. verify all saved configs and automations reference supported models.

### Deferred-generation test

1. request a high-cost Gemini Notebook artifact;
2. preserve source state and request time;
3. if deferred, modify one source afterward;
4. compare the final output against request-time and execution-time source state;
5. verify notification and artifact lineage.

## 14. Proposed Metrics

### Export Scope Preservation

```text
ESP =
previously supported export scopes still available
/
all previously supported export scopes
```

### Workspace Reconstruction Coverage

```text
WRC =
workspace relationships reconstructable from export
/
all controlled relationships
```

### Model Migration Behavioral Fidelity

```text
MMBF =
controlled behaviors materially preserved after model substitution
/
all controlled behaviors
```

### Saved Configuration Migration Coverage

```text
SCMC =
persistent configuration objects updated successfully
/
all configuration objects referencing retired model
```

### Deferred Artifact Attribution Coverage

```text
DAAC =
deferred artifacts traceable to exact initiating request state
/
all controlled deferred artifacts
```

## 15. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No stronger new memory primitive surfaced in this pass; runtime and export state are now the more important persistence variables. |
| Skills | No category-displacing Skill release surfaced; model substitution becomes a dependency problem for stored procedures and agent configurations. |
| Mini-app builders | No stronger new builder launch than previously logged; the relevant trend is portability and what survives when creator infrastructure changes. |
| Chat-to-document export | **Major new-to-log regression:** Notion removes full-workspace PDF export while retaining page-level PDF plus HTML/Markdown/CSV workspace export. |
| DOCX / PDF generation | PDF capability must now be benchmarked by granularity, not a binary yes/no feature flag. |
| Copy-paste / export fixes | The direction is mixed: some platforms remove manual seams, while others remove a broad export path and force more reconstruction work. |
| Broader creator workflow | **Major trend:** persistent creator workflows now depend on export scope, model lifecycle, compute budgets, and deferred execution state - all independently mutable platform contracts. |

## 16. Deep Drift Research Position

The weak description is:

> Notion is removing one PDF export option, Codex is changing models, and Gemini Notebook has new usage limits.

The serious description is:

> Creator workflows increasingly depend on mutable platform contracts outside the user's prompt: what structural scope can be exported, which model executes a stored procedure, and whether an artifact is generated now or deferred under a dynamic compute budget.

Therefore:

```text
PDF AVAILABLE
!= WORKSPACE PDF AVAILABLE

SAME WORKFLOW
!= SAME MODEL

SAVED CONFIG
!= VALID CONFIG

REQUESTED NOW
!= GENERATED FROM NOW-STATE

BACKUP
!= RECONSTRUCTABLE WORKSPACE
```

The serious Deep Drift requirement is:

> **Every persistent creator workflow should preserve export capability by scope, artifact-format availability, workspace reconstruction limits, model and runtime dependencies, saved configuration references, migration events, compute-state decisions, deferred-generation state, and resulting artifact lineage required to reconstruct how platform-level contract changes altered the user's work.**

Creator platforms are usually benchmarked by how much they add. That is incomplete.

Deep Drift should measure:

```text
WHAT THEY ADD
WHAT THEY REMOVE
WHAT THEY SUBSTITUTE
WHAT THEY DEFER
WHAT THE USER CAN STILL TAKE HOME
```

The glossy demo is the entrance. Portability is the fire exit.

## Evidence Boundary

Platform facts are grounded in first-party Notion, OpenAI, and Google documentation checked on 31 August 2026.

Notion states that full-workspace PDF export is being removed by 31 August 2026; whole-workspace HTML, Markdown, CSV, and uploaded-file export remain; individual pages can still be exported as PDF; exported workspace content cannot instantly recreate the original workspace.

OpenAI states that GPT-5.4 and GPT-5.4 mini are no longer available in Codex through ChatGPT-account authentication on 31 August 2026; users should migrate to GPT-5.6 Terra and GPT-5.6 Luna and update workspace defaults, saved model settings, managed configurations, and automations.

Google states that Gemini Notebook's flexible compute-specific usage limits begin rolling out on 2 September 2026, with usage influenced by prompt complexity, chat length, number of sources, and features used; costly outputs may be deferred and generated automatically later.

ESCRSF and all companion constructs, failure classes, benchmark procedures, and proposed metrics are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

- Notion Help Center, **Back up your data**, checked 31 August 2026.  
  https://www.notion.com/help/back-up-your-data

- OpenAI Help Center, **Using Codex with your ChatGPT plan**, updated 31 August 2026.  
  https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan

- Google, **More compute flexibility in Gemini Notebook**, 28 August 2026.  
  https://blog.google/innovation-and-ai/products/gemini-notebook/new-flexible-usage-limits/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
