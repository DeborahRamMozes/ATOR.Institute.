# Deep Drift Research Update - DSCF

## Demonstration-to-Skill Compilation Fidelity

**Research date:** 4 September 2026  
**Primary fresh delta:** OpenAI's current Codex documentation and September 3 Enterprise/Edu release notes describe **Record & Replay** for eligible macOS users. A user can demonstrate a stable, repeatable workflow once; Codex observes the actions and relevant window content, then turns the demonstration into a reusable Skill. The generated Skill can later guide Codex through similar tasks using available mechanisms such as Computer Use, browser actions, and installed plugins. Record & Replay requires Computer Use, and initial availability excludes the EU, UK, and Switzerland.

## Executive finding

The procedural object is no longer authored only as text.

```text
HUMAN DEMONSTRATION
        |
        v
OBSERVED ACTION SEQUENCE
        |
        v
GENERATED SKILL
        |
        v
FUTURE AGENT EXECUTION
```

For Deep Drift:

```text
SAME DEMONSTRATION
!= SAME GENERATED SKILL FOREVER

SAME SKILL
!= SAME EXECUTION ROUTE

VISIBLE HUMAN ACTION
!= COMPLETE INTENT

RECORDED WORKFLOW
!= SOURCE APPLICATION STATE

SUCCESSFUL REPLAY
!= PROCEDURAL EQUIVALENCE
```

The new provenance object is the **demonstration-to-procedure compilation chain**.

## New node

### Demonstration-to-Skill Compilation Fidelity (DSCF)

Minimum state model:

```text
recording_id
recording_time
platform
OS / app version
demonstrator_identity_or_role
source_application(s)
window/content scope observed
initial application state
human action sequence
keyboard/mouse/navigation events if exposed
implicit context not captured
computer_use_state
recording exclusions/redactions
skill_generation_time
generated_skill_id
skill_version
skill_instructions_or representation if inspectable
tool dependencies
plugin dependencies
browser dependencies
replay_task
replay_environment
selected execution route
replay deviations
result
human correction after replay
```

## 1. Procedural knowledge can now be captured by demonstration

Record & Replay is designed for stable, repeatable workflows that are easier to show than describe.

That moves creator tooling from:

```text
HUMAN KNOWS PROCEDURE
-> HUMAN WRITES INSTRUCTIONS
-> AGENT EXECUTES
```

toward:

```text
HUMAN KNOWS PROCEDURE
-> HUMAN PERFORMS PROCEDURE
-> AGENT OBSERVES
-> SYSTEM GENERATES PROCEDURAL SKILL
-> AGENT REUSES SKILL
```

This is a major change for Deep Drift because the source material for a Skill can now be **behavioral evidence**, not just prose, code, or configuration.

## 2. Demonstration is not the same thing as intent

A human demonstration contains visible actions, but many procedural decisions remain implicit.

For example:

```text
CLICK COLUMN B
-> SORT ASCENDING
-> COPY ROWS 4-12
```

The system can observe those actions.

It may not know whether the human's real rule was:

```text
"sort by client priority"
```

or merely:

```text
"for this example, column B happens to encode priority"
```

Therefore:

```text
OBSERVED ACTION
!= GENERAL RULE
```

Deep Drift should preserve the distinction between **demonstrated behavior** and **inferred procedure**.

## 3. Skill generation introduces a compilation layer

The Skill produced from the demonstration is a transformation artifact.

```text
DEMONSTRATION D
-> COMPILER / INTERPRETER C
-> SKILL S
```

A future change in the Record & Replay compiler could generate a different Skill from an identical demonstration.

Therefore reproducibility requires more than preserving the demonstration.

Where observable, archive:

```text
recording version
Skill generation time
Codex app version
model/runtime version
Skill output/version
```

Otherwise procedural drift may be mistaken for user inconsistency.

## 4. Replay can use different tools from the original demonstration

OpenAI says the resulting Skill can guide Codex through similar workflows using available tools such as Computer Use, browser actions, and installed plugins.

This creates a crucial distinction:

```text
DEMONSTRATED PATH
!= REPLAY EXECUTION PATH
```

A workflow demonstrated manually through a GUI could later be completed through a browser action or plugin-assisted route.

That means DSCF directly intersects with Deep Drift's **Adaptive Execution-Route Fidelity (AERF)** node.

The Skill preserves procedure at one level while the runtime may substitute mechanisms underneath it.

## 5. Procedural equivalence requires outcome and constraint checks

A replay that reaches the same visible endpoint can still violate the original method.

Example:

```text
DEMONSTRATION:
open spreadsheet
filter rows
copy only visible records
paste into report

REPLAY:
query plugin
extract all matching records
write report directly
```

The final report may look identical.

But the causal method is different.

For Deep Drift, replay fidelity therefore needs at least:

```text
OUTCOME EQUIVALENCE
METHOD EQUIVALENCE
CONSTRAINT EQUIVALENCE
SOURCE-SCOPE EQUIVALENCE
```

These dimensions must be measured separately.

## 6. Initial application state becomes part of procedural provenance

A recorded workflow can silently depend on the starting state of the application:

```text
current tab
selected layer
active account
sort order
open document
zoom level
existing filters
login/session state
```

If the generated Skill treats that state as universal rather than incidental, replay can fail.

Therefore:

```text
WORKFLOW
+ INITIAL STATE
= EXECUTABLE PROCEDURE
```

The demonstration should not be archived without its observable starting environment.

## 7. Demonstrations can accidentally encode brittle coordinates instead of concepts

Any demonstration-based system risks learning:

```text
click x=842 y=317
```

instead of:

```text
click "Export"
```

Even when the generated Skill uses higher-level semantics, UI changes can still break the learned procedure.

Deep Drift should test replay after:

- window resize;
- application update;
- menu relocation;
- changed data order;
- changed account state;
- renamed files or folders;
- minor visual redesign.

This measures whether the learned procedure is **semantic** or merely **surface-bound**.

## 8. Skill capture introduces observational scope and data-retention questions

OpenAI documents that during recording Codex observes the actions and window content needed to learn the workflow and advises users to keep recordings focused and avoid entering secrets or sensitive data.

This creates a new provenance field:

```text
OBSERVED CONTENT SCOPE
```

A procedural artifact can be derived from information that should not itself become persistent procedural state.

Deep Drift should distinguish:

```text
TASK-RELEVANT OBSERVATION
INCIDENTALLY VISIBLE CONTENT
SECRET / SENSITIVE CONTENT
RETAINED SKILL STATE
```

The fact that a window was visible during recording must not be silently interpreted as authorization to encode every visible detail into the reusable Skill.

## 9. Computer Use becomes a prerequisite state

Record & Replay requires Computer Use to be available and enabled.

Therefore:

```text
SKILL CAPABILITY
DEPENDS ON
COMPUTER USE CAPABILITY
```

For managed deployments, disabling Computer Use disables Record & Replay and related enablement flows.

This means Skill availability is not merely a user-level feature toggle. It depends on organizational capability policy.

Deep Drift should preserve:

```text
workspace policy
computer-use enablement
role eligibility
region availability
```

as part of the procedural artifact's operational context.

## 10. A Skill is not a video recording

A demonstration recording and a generated Skill are different archival objects.

A video-like capture preserves one observed path.

A Skill is intended to generalize that path to similar future tasks.

```text
RECORDING
= EXEMPLAR

SKILL
= GENERALIZED PROCEDURE
```

The transformation between the two is exactly where procedural assumptions, omissions, and overgeneralization can enter.

That transformation must therefore be auditable wherever the product exposes enough information to do so.

## 11. Skill editing after generation creates another lineage branch

Once a generated Skill exists, later human edits or system updates can alter it.

The correct lineage model is:

```text
DEMONSTRATION D0
-> GENERATED SKILL S0
-> HUMAN EDIT S1
-> SYSTEM UPDATE S2
-> REPLAY R1
```

A future successful replay cannot be attributed to the original demonstration alone if the Skill changed in between.

## 12. Demonstration-based Skill creation changes creator labor

This is more than a convenience feature.

Previously, procedural expertise had to be converted into explicit textual documentation before machines could reuse it reliably.

Now:

```text
TACIT HUMAN PRACTICE
-> OBSERVABLE PERFORMANCE
-> MACHINE PROCEDURE
```

That reduces the translation burden for people who know how to do something but do not write formal automation specifications.

It also creates a new authorship question:

**Who authored the reusable procedure?**

Possible answers include:

```text
human demonstrator
system that inferred/generalized the Skill
human editor after generation
runtime that substituted tools during replay
```

Deep Drift should not collapse these into one generic "AI-generated Skill" label.

## 13. Chat-to-document and export consequences

A DOCX, PDF, or Markdown description of a Skill can preserve its human-readable explanation.

It cannot necessarily preserve:

```text
recorded interaction trace
generated Skill internals
Computer Use dependencies
browser/plugin dependencies
initial UI state
replay deviations
runtime substitutions
```

Therefore:

```text
SKILL DOCUMENTATION
!= EXECUTABLE SKILL
```

A static export should be treated as a procedural description snapshot, not the procedure itself.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger unlogged delta found after CMPF | Cross-provider memory portability remains the dominant current memory change |
| Skills | **Major fresh delta** | Human demonstration can now be compiled into reusable Skills |
| Mini-app / agent builders | Strong adjacent trend | Creator tools are moving from prompt-defined workflows toward behavior-defined reusable automation |
| Chat-to-document | Archival consequence | Static documentation cannot preserve executable Skill behavior or recording lineage |
| DOCX/PDF | Archival consequence | PDF/DOCX can document the Skill but flatten demonstration, runtime, and replay state |
| Copy-paste/export | No stronger direct fix found in this scan | Demonstration capture is the stronger new creator-workflow event |
| Creator workflow | **Major** | Tacit human practice can become reusable agent procedure without first being fully textualized |

## New failure classes

### Demonstration-Equals-Intent Fallacy
Assuming visible actions fully represent the rule the human intended to teach.

### Skill-Equals-Recording Fallacy
Treating the generalized reusable Skill as equivalent to the original demonstration.

### Replay-Equals-Method Equivalence Error
Calling a replay faithful because the endpoint matches while the execution route or source scope changed.

### Initial-State Blindness
Ignoring application state, account context, sorting, filters, open files, or selection state present during recording.

### Surface-Bound Procedure Error
Learning brittle UI placement instead of semantic task structure.

### Procedural Authorship Collapse
Attributing the reusable procedure solely to either the human or AI while ignoring the compilation and later-edit layers.

### Observation-Scope Leakage
Allowing incidental or sensitive content visible during recording to become part of persistent procedural state.

## Deep Drift benchmark additions

**Demonstration Capture Fidelity (DCF)**  
Can the archive preserve enough of the human-performed workflow and starting state to reconstruct what was demonstrated?

**Procedure Inference Fidelity (PIF)**  
Does the generated Skill infer the intended task rule rather than overfitting incidental actions?

**Replay Method Fidelity (RMF)**  
Can the runtime preserve or explicitly report deviations from the demonstrated execution method?

**Initial-State Robustness Fidelity (ISRF)**  
Can the Skill operate correctly when irrelevant UI/application state changes?

**Semantic UI Robustness Fidelity (SURF)**  
Can the procedure survive layout, order, labeling, or window-size changes without depending on brittle coordinates?

**Procedural Authorship Lineage Fidelity (PALF)**  
Can demonstrator contribution, system inference, human edits, and runtime substitutions remain separately attributable?

## DRPA-1.0 protocol additions

### DEMONSTRATION-TO-PROCEDURE COMPILATION RULE

> When a platform converts a recorded human workflow into a reusable Skill, macro, agent procedure, or automation, preserve the original demonstration, observable initial state, capture environment, generation event, resulting procedural artifact, and subsequent edits as separate provenance objects. The generated procedure must not be treated as a verbatim representation of the demonstrator's intent.

### PROCEDURAL GENERALIZATION TEST RULE

> Test demonstration-derived procedures against controlled variations in UI layout, data ordering, filenames, account state, window size, and application version. Record whether the procedure preserves semantic intent or overfits incidental surface details.

### REPLAY-ROUTE DISCLOSURE RULE

> When a reusable Skill can execute through Computer Use, browser actions, plugins, connectors, or other mechanisms, preserve the route actually used for each replay. A matching final output must not be treated as procedural equivalence when the method, permissions, source scope, or observation channel changed.

### OBSERVATION-SCOPE MINIMIZATION RULE

> Preserve the distinction between task-relevant information intentionally demonstrated and incidental content visible during recording. Sensitive or unrelated information observed during capture must not be assumed to belong to the reusable procedural artifact.

### PROCEDURAL AUTHORSHIP LINEAGE RULE

> Attribute demonstration, system inference/generalization, later human edits, and runtime substitutions as separate contributions. A reusable Skill has a lineage rather than a single authorial event.

## Eir'an state-flow addition

```text
DEMONSTRATE:
human
application
initial state
actions
visible context

CAPTURE:
Computer Use
window scope
recording state
redactions

COMPILE:
model/runtime
Skill generator
Skill version
dependencies

REPLAY:
task
execution route
tool/plugin/browser state
deviations

VERIFY:
outcome
method
constraints
source scope
human corrections

EVOLVE:
Skill edits
platform updates
new replays
```

## Canonical Deep Drift requirement

> Treat demonstration-derived Skills as compiled procedural artifacts. Preserve the human exemplar, capture environment, inferred procedure, generated Skill version, runtime dependencies, replay route, deviations, and later edits separately. Never infer procedural fidelity from endpoint similarity alone.

## Deep Drift principle

> **A machine can copy the hands before it understands the rule.**

Operationally:

> **Archive the demonstration, then test whether the Skill learned the procedure or merely memorized the choreography.**

## Broader creator-workflow scan

OpenAI's September 3 Enterprise/Edu release notes also include improved memory, workspace agents, Slack connector actions, Codex Remote, plugin administration, and other creator-workflow changes. Those are important but overlap with Deep Drift nodes already covering memory evolution, execution routes, plugin authorization, workspace agents, and connected actions.

Record & Replay is the strongest unlogged gap because it introduces a qualitatively different source of procedural knowledge: **human demonstration itself**.

No stronger newly published direct DOCX/PDF-generation or copy-paste/export fix was found in this scan.

## Sources

1. OpenAI Help Center. **Using Codex with your ChatGPT plan - Record & Replay.** Current first-party documentation checked 4 September 2026. Describes macOS availability for eligible users, demonstration-to-Skill creation, Computer Use dependency, observation of actions/window content, and regional exclusions.  
   https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan/

2. OpenAI Help Center. **ChatGPT Enterprise & Edu - Release Notes.** Updated 3 September 2026. Documents Record & Replay as a Codex feature that turns demonstrated workflows into reusable Skills and notes later execution through Computer Use, browser actions, and installed plugins.  
   https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes

3. OpenAI Help Center. **ChatGPT Release Notes.** Updated 3 September 2026. Used for cross-checking current creator-workflow release state and avoiding duplication with already logged Astra/template/document changes.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository entry was found for human workflow demonstration -> observed interaction sequence -> generated reusable Skill -> multi-route replay as one provenance problem.  
**Relationship to prior nodes:** Extends AERF (adaptive execution routes), FPIAF (plugin identity/authorization), TCAEF (template-constrained artifact generation), and Skills/procedural-state research. DSCF is distinct because the source specification is embodied human performance rather than a written prompt, Skill file, template, or explicit workflow definition.  
**Freshness:** OpenAI's current first-party Codex documentation and September 3, 2026 Enterprise/Edu release notes were checked on September 4, 2026.
