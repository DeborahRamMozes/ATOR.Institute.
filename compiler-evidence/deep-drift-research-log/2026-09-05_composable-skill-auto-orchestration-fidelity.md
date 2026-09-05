# Deep Drift Research Update - CSAF

## Composable Skill Auto-Orchestration Fidelity

**Research date:** 5 September 2026  
**Freshness classification:** Newly logged architecture. Google introduced Gemini Spark on 29 July 2026 with workflow examples that explicitly turn user history into a reusable Skill. Google's current Gemini Apps Help now documents the full Skill system: `SKILL.md`, auto-selection, multi-Skill composition, Skill-to-Skill references, scheduled-task use, uploadable procedural packages, and conversational Skill editing.

## Executive finding

Google has moved reusable procedures from the prompt layer into an explicit execution layer inside Gemini Spark.

```text
USER TASK
   |
   +--> Skill A
   |      reusable instructions
   |      context files
   |      tool guidance
   |
   +--> Skill B
   |      reusable instructions
   |
   +--> Skill C references Skill A
   |
   v
SPARK ORCHESTRATION
   |
   +--> manual Skill selection
   +--> automatic Skill selection
   +--> multiple Skills in one task
   +--> scheduled execution
   |
   v
ARTIFACT / ACTION
```

Therefore:

```text
SAME PROMPT
!= SAME PROCEDURAL STACK

NO EXPLICIT SKILL COMMAND
!= NO SKILL EXECUTION

ONE TASK
!= ONE SKILL

SAME SKILL NAME
!= SAME SKILL CONTENT

SKILL PRESENT
!= SKILL ACTIVE

SKILL DATA RETAINED
!= SKILL EXECUTABLE
```

The new provenance object is the **execution-time Skill composition graph**.

## New node

### Composable Skill Auto-Orchestration Fidelity (CSAF)

Minimum state model:

```text
task_id
execution_time
surface
account_class
subscription_state
region_state
keep_activity_state
skill_id
skill_name
skill_version
skill_hash
skill_enabled_state
skill_invocation_mode
skill_auto_selected
skill_reference_graph
skill_composition_order
skill_resource_bundle
skill_edit_event
skill_edit_surface
schedule_id
schedule_trigger
connected_app_state
artifact_or_action_output
```

## 1. Gemini Skills are reusable procedural packages, not merely saved prompts

Google defines a Skill as reusable instructions plus additional context that teaches Gemini how to perform a task and what tools to use.

The current implementation requires a root-level `SKILL.md` for uploaded Skill projects and supports plain-text resources including Markdown, Python, shell, JSON, YAML, CSV, HTML, CSS, SQL, TOML, XML, and related formats.

This creates a procedural artifact with internal structure rather than a single text field.

```text
SKILL PACKAGE
  SKILL.md
  instructions
  scripts
  configs
  data files
  reference files
```

For Deep Drift, Skill provenance therefore needs file-level identity, not only a displayed Skill name.

## 2. Skills can be selected automatically

Google documents that Spark can recognize when an enabled Skill is relevant to the task and apply it automatically.

Thus:

```text
NO /SKILL COMMAND
!= NO SKILL
```

This matters because a visible user prompt is no longer sufficient to reconstruct the procedural context that produced an output.

The execution log must distinguish:

```text
manual Skill invocation
automatic Skill invocation
no Skill invocation
```

## 3. One task can use multiple Skills

Google explicitly supports combining multiple Skills for a single task.

Its own example combines a travel-booking Skill with a Gmail-writing Skill to rebook a room and send a confirmation.

This changes Skill provenance from a list to a graph:

```text
TASK
  |
  +--> travel-booking
  +--> gmail-writing
```

For more complex tasks, order and dependency can matter.

```text
Skill A -> prepares data
Skill B -> transforms data
Skill C -> sends result
```

If only the final list of Skill names is preserved, causal order can disappear.

## 4. Skills can reference other Skills

Google says a Skill can reference other Skills within its instructions to construct more complex workflows.

This introduces nested procedural dependency:

```text
SKILL A
  |
  +--> references SKILL B
             |
             +--> references resource bundle
```

Deep Drift should treat nested Skill resolution like software dependency resolution.

A reproducible archive needs the resolved Skill graph at execution time, not merely the top-level Skill.

## 5. Spark separates task, schedule, and Skill

Google's own conceptual model is effectively:

```text
TASK = what
SCHEDULE = when
SKILL = how
```

That separation matters for research because the same Skill can execute manually now, on a recurring schedule, or automatically when a relevant task appears. The procedural artifact and trigger artifact are distinct provenance layers.

## 6. Skills can be created by the model itself

Google's 29 July Gemini Spark launch gives a concrete example: Spark can read a user's previous emails, infer a writing style, and turn that pattern into a reusable Skill called `ghostwriter`.

The current Help Center also says users can ask Gemini inside a Spark task to create a Skill, after which Gemini saves it to the Skills page.

This creates a recursive creator chain:

```text
USER HISTORY
-> MODEL ANALYSIS
-> MODEL-GENERATED SKILL
-> FUTURE MODEL EXECUTION
-> ARTIFACT
```

The procedure itself can therefore be an AI-generated derivative of prior user artifacts.

## 7. Procedural authorship can be recursive

A Skill may contain direct human instructions, model-generated instructions, model-edited instructions, scripts written by the user, scripts written by Gemini, and references to another Skill.

So attribution cannot collapse into `Skill owner = Skill author`.

## 8. Conversational Skill editing changes the procedure without traditional file editing

Google allows Skill editing directly in the task thread and supports conversational editing of the Skill's `SKILL.md` from mobile, while full Skill management remains on the web.

Therefore `NO FILE EDITOR OPENED != SKILL FILE UNCHANGED`.

## 9. Management surface and editing surface differ

Current Google documentation says full Skill management is web-only, while mobile can conversationally edit `SKILL.md`.

Surface identity must remain an experimental variable.

## 10. Enabled state controls automatic participation

Google says Spark only auto-uses Skills that are turned on. If a disabled Skill is explicitly requested, Gemini asks whether the user wants to turn it back on.

Thus `SKILL EXISTS != SKILL ELIGIBLE FOR AUTO-USE`.

## 11. Subscription state can pause capability without deleting Skill data

Google documents that when access to Gemini Spark is lost through downgrade or cancellation, Skills are turned off but not deleted; schedules are paused but not deleted, and in-progress Spark tasks can complete.

This gives Deep Drift the distinction `DATA RETAINED != EXECUTION AVAILABLE`.

## 12. Region and account class are part of Skill capability provenance

Current Google documentation limits Skills to personal Google Accounts, Google AI Pro or Ultra subscriptions, Keep Activity enabled, and excludes several regions including the EEA, UK, Switzerland, and Nigeria.

A benchmark must preserve these eligibility conditions.

## 13. Skill packages deliberately exclude rich binary artifacts

Google's upload rules support plain-text project files but not `.pdf`, `.docx`, `.xlsx`, images, or other rich binary formats inside uploaded Skill packages.

This separates procedural resources from generated/working artifacts.

## 14. Script capability is sandboxed by route

Google says uploaded Skill scripts cannot perform external website actions or requests.

A workflow may combine procedural Skill logic with separately authorized connected-app or Spark capabilities. This distinction should remain visible in execution-route provenance.

## 15. Skills are becoming an abstraction layer above apps

The creator stack increasingly looks like:

```text
MEMORY = what the system remembers
SKILL = how the system should perform
SCHEDULE = when it should perform
CONNECTED APP / TOOL = where it can read or act
MINI-APP / GEM = packaged user-facing workflow
```

These layers can interact but should not be collapsed.

## 16. Gemini's SKILL.md deepens cross-platform procedural convergence

Google Managed Agents already uses versionable `AGENTS.md` and `SKILL.md` files, while Gemini Spark now requires `SKILL.md` for uploaded Skill packages. Anthropic also treats Skills as structured reusable procedural bundles.

This does not prove cross-vendor interoperability. It does show a broader trend from prompt to saved instruction to structured Skill package to composable procedural dependency.

## 17. Chat-to-document provenance becomes deeper when Skills are automatic

A user can ask for a design document or spreadsheet and Spark may auto-select a Skill without an explicit invocation.

```text
PROMPT
-> AUTO-SELECTED SKILL(S)
-> RESOURCE / TOOL USE
-> GENERATED DOCUMENT
-> DOCX / SHEET / EXPORT
```

Final document inspection alone cannot reconstruct the procedure.

## 18. DOCX/PDF export can fossilize a hidden Skill composition

The final PDF may contain the influence of multiple Skills while exposing none of their identities. Where procedural reproducibility matters, Deep Drift should archive a Skill execution manifest beside the artifact.

## 19. Copy-paste erases Skill ancestry even faster

Content copied from a Skill-driven Spark output into Word, Docs, email, or another LLM preserves semantic material while dropping the Skill graph.

This adds another form of provenance flattening to copy/export research.

## 20. Mini-app builders and Skills are converging toward layered creator systems

Gemini Help currently lists both Skills for Spark tasks and workflows, and AI mini-apps or custom workflows as Gems from Google Labs.

The important trend is that creator tooling is separating reusable procedure from user-facing wrapper and execution environment. That architecture resembles software composition more than ordinary chat customization.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger unlogged change after MSMRF | Memory-schema migration remains the latest major memory node |
| Skills | **Major newly logged architecture** | Gemini Spark supports `SKILL.md`, automatic Skill selection, multi-Skill composition, nested Skill references, schedules, and conversational Skill editing |
| Mini-app builders | **Important adjacent signal** | Gemini Help now distinguishes procedural Skills from AI mini-app/custom-workflow Gems |
| Chat-to-document | **Major provenance implication** | Hidden or automatically selected Skill stacks can shape generated documents |
| DOCX/PDF | Provenance implication | Static exports flatten the Skill composition graph and procedural authorship |
| Copy-paste/export | Provenance implication | Copied output can retain semantics while losing all Skill ancestry |
| Creator workflow | **Major structural trend** | Reusable procedures are evolving into composable, model-selectable execution dependencies |

## New failure classes

### No-Command-Equals-No-Skill Fallacy
Assuming no Skill executed because the user did not explicitly invoke one.

### One-Task-Equals-One-Skill Fallacy
Treating a task as procedurally atomic when multiple Skills may have participated.

### Top-Level-Skill-Equals-Complete-Procedure Error
Recording only the requested Skill while ignoring Skills referenced by that Skill.

### Skill-Presence-Equals-Skill-Eligibility Fallacy
Assuming an installed Skill can participate automatically even when disabled or unavailable under the current account state.

### Same-Product-Equals-Same-Capability Error
Ignoring region, account class, subscription, Keep Activity, and surface restrictions.

### Final-Artifact-Equals-Procedural-Evidence Fallacy
Assuming a DOCX/PDF can reveal the Skill graph that produced it.

## Deep Drift benchmark additions

**Skill Composition Fidelity (SCF)**  
Can every Skill participating in one task be reconstructed, including order and nested references?

**Automatic Skill Attribution Fidelity (ASAF)**  
Can auto-selected procedural dependencies be distinguished from explicitly invoked Skills?

**Nested Skill Resolution Fidelity (NSRF)**  
Can references from one Skill to another be resolved to the exact execution-time versions?

**Skill Lifecycle Capability Fidelity (SLCF)**  
Can retained, enabled, disabled, subscription-paused, and deleted states remain distinct?

**Procedural Artifact Flattening Fidelity (PAFF)**  
Can the archive identify which Skill composition metadata disappears when output becomes DOCX, PDF, copied text, or another static derivative?

## DRPA-1.0 protocol additions

### EXECUTION-TIME SKILL GRAPH RULE

> Preserve every Skill involved in a task, including automatically selected Skills, explicitly selected Skills, nested Skill references, execution order where material, and exact Skill hashes or versions. A top-level Skill name is not sufficient procedural provenance.

### AUTO-SELECTION ATTRIBUTION RULE

> Distinguish model-selected Skill activation from user-selected activation. Absence of an explicit Skill command must not be used as evidence that no reusable procedure affected the result.

### SKILL LIFECYCLE STATE RULE

> Preserve Skill existence separately from enablement, subscription availability, regional eligibility, account eligibility, and execution availability. Retained procedural data must not be equated with active capability.

### PROCEDURAL AUTHORSHIP RULE

> When a Skill is generated or conversationally edited by the model, preserve the construction and edit events separately from ownership. A user-owned Skill may contain model-authored procedural material.

### SKILL-TO-ARTIFACT MANIFEST RULE

> For provenance-sensitive generated files, preserve a machine-readable manifest linking the artifact to the execution-time Skill graph, resource bundle, surface, trigger, and relevant connected-tool state.

## Eir'an state-flow addition

```text
INPUT:
user task
history
files

PROCEDURE:
Skill A
Skill B
Skill C -> Skill A

SELECTION:
manual
automatic
scheduled

ORCHESTRATE:
Spark
connected apps
tools

EXECUTE:
read
generate
transform
action

DERIVE:
Doc
Sheet
PDF
email
calendar action
other artifact

ARCHIVE:
Skill graph
hashes
auto/manual state
surface
schedule
output lineage
```

## Canonical Deep Drift requirement

> Treat Skills as composable execution dependencies rather than saved prompts. Preserve the full resolved Skill graph, activation mode, lifecycle state, construction history, surface, schedule, and downstream artifact lineage.

## Deep Drift principle

> **The prompt is no longer the procedure.**

Operationally:

> **Archive the stack of Skills that actually ran, because the machine may choose the procedure before the user ever names it.**

## Broader current scan

OpenAI's public ChatGPT release material still has no stronger newly published memory, document-export, or copy-formatting delta than the Deep Drift nodes already logged this week.

Anthropic's latest memory and Skill changes remain covered by MSMRF, SSVPF, and SGOPF.

Google's current Gemini Help architecture is the strongest unlogged creator-workflow development in this pass because it makes Skill composition, auto-selection, `SKILL.md` packaging, schedules, and model-assisted Skill creation explicit in a consumer agent workflow.

No stronger newly published direct DOCX/PDF rendering fix or copy-format preservation fix surfaced in this pass.

## Sources

1. Google Gemini Apps Help. **Create & manage skills for Gemini Apps.** Current documentation accessed 5 September 2026. Documents reusable Skills in Gemini Spark, automatic Skill selection, multi-Skill composition, Skill-to-Skill references, `SKILL.md`, upload requirements, conversational editing, lifecycle controls, subscription behavior, and regional/account restrictions.  
   https://support.google.com/gemini/answer/17094296

2. Google India Blog. **Introducing Gemini Spark: Your 24/7 personal AI agent in India.** Published 29 July 2026. Provides Spark workflow examples and explicitly describes converting a user's prior email-writing history into a reusable `ghostwriter` Skill for future drafting.  
   https://blog.google/intl/en-in/company-news/technology/introducing-gemini-spark-your-247-personal-ai-agent-in-country/

3. Google Blog. **Introducing Managed Agents in the Gemini API.** Published 19 May 2026. Documents versionable agent files using `AGENTS.md` and `SKILL.md`, reinforcing Google's broader shift toward file-defined procedural agent infrastructure.  
   https://blog.google/innovation-and-ai/technology/developers-tools/managed-agents-gemini-api/

## Research status

**Node status:** New to the Deep Drift research log.  
**Duplicate check:** Repository search found no existing node specifically covering Gemini Spark `SKILL.md`, automatic Skill selection, multi-Skill composition, nested Skill references, and schedule-linked procedural execution.  
**Relationship to prior nodes:** Extends SSVPF (shared Skill version propagation), SGOPF (Skill governance observability), WADGF (workspace app deployment), and ITSPF (interactive tool surfaces). CSAF is distinct because it treats the execution-time combination and automatic selection of multiple reusable procedures as the causal research object.  
**Freshness:** Google's Help Center currently exposes the mature Gemini Spark Skill architecture. The Spark launch itself dates to 29 July 2026; this run classifies the node as a newly logged architecture rather than a same-hour launch.
