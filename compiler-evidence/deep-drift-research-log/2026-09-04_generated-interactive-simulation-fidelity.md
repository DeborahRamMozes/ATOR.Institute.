# Deep Drift Research Update - GISF

## Generated Interactive Simulation Fidelity

**Research date:** 4 September 2026  
**Primary newly logged delta:** Google Workspace made Gemini's prompt-generated interactive simulations and models available to Workspace users on 24 August 2026. Gemini can generate functional, manipulable visual objects directly inside chat, including 3D structures, physics simulations, interactive tables, grids, and variable-driven models.  
**Secondary creator-workflow signal:** Google Workspace Studio is expanding from drafting toward operational workflow mutation with new Drive copy/move and Gmail/Chat reply steps; admin controls began rolling out 1 September 2026, with the end-user Drive/Chat actions scheduled from 8 September 2026.

## Executive finding

The answer is no longer necessarily text, a static diagram, or a downloadable document.

It can now be an executable interactive model whose observed result depends on what the human does after generation.

```text
PROMPT
   |
   v
GENERATED INTERACTIVE MODEL
   |
   +--> INITIAL STATE
   |
   +--> HUMAN INTERVENTION
   |
   +--> STATE TRANSITION
   |
   +--> NEW OBSERVATION
```

For Deep Drift:

```text
SAME GENERATED OBJECT
!= SAME OBSERVED RESULT

FINAL SCREENSHOT
!= EXECUTION HISTORY

STATIC EXPORT
!= INTERACTIVE ARTIFACT

USER CLICK
!= COSMETIC INPUT

PROMPT REPRODUCTION
!= INTERACTION REPRODUCTION
```

The new provenance object is the **interaction trace**.

## New node

### Generated Interactive Simulation Fidelity (GISF)

Minimum state model:

```text
platform_surface
model_surface
generation_time
prompt
simulation_or_model_identity
initial_state
control_definitions
parameter_ranges
default_values
user_intervention_sequence
state_transition_sequence
terminal_state
visible_result
share_state
export_state
static_snapshot_state
assumptions_or_generated_logic_if_observable
```

## 1. The response has become executable

Google describes Gemini responses that can include functional simulations made specifically for the question. A user can rotate and zoom a generated 3D DNA structure, manipulate variables in a physics system, or interact with a table rather than merely read a fixed explanation.

The research object is therefore not only linguistic output.

```text
MODEL RESPONSE
=
TEXT
+ GENERATED INTERFACE
+ CONTROL LOGIC
+ RUNTIME STATE
```

A transcript alone cannot preserve all four.

## 2. Human intervention becomes causal evidence

Suppose Gemini generates an orbital simulation with controls for initial velocity and gravity strength.

Two users can begin from the same generated model and produce different trajectories by changing different values.

```text
SIMULATION S
   |
   +--> USER A: gravity 1.0 / velocity 7.8
   |
   +--> USER B: gravity 0.7 / velocity 7.8
```

The difference in output is not model drift.

It is intervention drift.

Deep Drift must therefore preserve human actions as part of the causal chain.

## 3. Initial state and terminal state are different archival objects

An interactive model has at least:

```text
GENERATED INITIAL STATE
INTERMEDIATE STATES
TERMINAL OBSERVED STATE
```

Saving only the terminal screenshot destroys the model's starting configuration and the path taken to reach it.

Saving only the prompt is equally incomplete because the generated model may contain interface structure, defaults, variable bounds, or generated assumptions that the prompt never explicitly specified.

## 4. Static DOCX/PDF export loses executable semantics

This matters directly to Deep Drift's document-export research.

A PDF can preserve:

- visible text;
- a final chart;
- a screenshot;
- labels and annotations.

It normally cannot preserve:

- sliders as executable controls;
- parameter changes;
- state transitions;
- interactive rotation;
- user intervention sequence;
- live recalculation behavior.

Therefore:

```text
INTERACTIVE MODEL
-> PDF SNAPSHOT
= REPRESENTATIONAL PRESERVATION
+ EXECUTION LOSS
```

A polished PDF can be visually faithful while causally incomplete. Humanity has once again discovered that a beautiful document can conceal how the thing actually worked.

## 5. Copy-paste is even more lossy

Copying text from an interactive response may preserve the explanation while discarding the simulation completely.

A screenshot preserves appearance but not behavior.

A screen recording can preserve one behavioral path but not the full control space.

Deep Drift should classify export modes separately:

```text
TEXT COPY
STATIC IMAGE
VIDEO CAPTURE
STATIC DOCUMENT
INTERACTIVE SHARE
```

None should be treated as interchangeable.

## 6. Control definitions belong to provenance

A simulation's controls encode part of its explanatory model.

For each control, preserve where observable:

```text
control_name
control_type
minimum
maximum
default
unit
step_size
dependency
```

Changing the allowed range can change what conclusions a user can explore even if the explanatory text remains identical.

Interface affordances are therefore epistemic constraints.

## 7. Reproducibility now requires replay

A reproducible run should ideally capture:

```text
PROMPT P
-> GENERATED MODEL VERSION M
-> INITIAL STATE S0
-> ACTION A1
-> STATE S1
-> ACTION A2
-> STATE S2
-> OBSERVATION O
```

Re-running only `PROMPT P` is not a complete replication.

The intervention sequence must also be replayed.

## 8. Generated assumptions may remain hidden behind interaction

When Gemini invents the interactive representation, the user may not know every equation, transformation, scaling rule, or default assumption that governs it.

That creates a Deep Drift question distinct from hallucinated prose:

```text
VISIBLE CONTROL
!= FULL MODEL LOGIC
```

Where inspectable, generated logic or formulas should be archived. Where not inspectable, the archive should mark the simulation logic as opaque rather than pretending it is known.

## 9. Workspace availability changes the institutional significance

Google's general Gemini launch of interactive models occurred earlier in 2026, but the 24 August Workspace release made the capability available to Workspace customers and Workspace Individual subscribers.

This matters because the feature moves from an individual experimentation surface into organizational research, education, and professional workflows.

The provenance problem therefore becomes institutional rather than merely personal.

## 10. The broader workflow trend is execution, not formatting

Google Workspace Studio is simultaneously gaining steps that can copy or move Drive files and reply to email or Chat. Admin controls began rolling out 1 September 2026, while the Drive/Chat end-user actions are scheduled to start rolling out 8 September 2026.

That broader trajectory is:

```text
CHAT GENERATION
      ↓
GENERATED FILES
      ↓
GENERATED INTERACTIVE MODELS
      ↓
WORKFLOW ACTIONS
      ↓
SOURCE / COMMUNICATION MUTATION
```

The creator stack is moving from **answer generation** toward **runtime generation and execution**.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger unlogged delta found | Existing memory-boundary nodes remain current |
| Skills / procedural state | No stronger unlogged delta found | Existing Skills and procedural-state nodes remain current |
| Mini-app / interactive builders | **Major unlogged delta** | Gemini now generates manipulable simulations and models directly in Workspace chat |
| Chat-to-document | Structural extension | The output object can exceed a document and become executable |
| DOCX/PDF | **Major archival implication** | Static export preserves representation but destroys interactive execution state |
| Copy-paste/export | **Major archival implication** | Text copy, screenshots, video, static docs, and interactive shares preserve different layers |
| Connected workflows | Emerging September expansion | Workspace Studio is adding Drive mutation and threaded reply actions |
| Creator workflow | **Major** | Creator output is shifting from static content toward executable explanatory objects |

## New failure classes

### Screenshot-Equals-Simulation Fallacy
Assuming a captured final frame preserves the generated interactive object.

### Prompt-Equals-Reproduction Fallacy
Assuming the original prompt alone can reproduce an observed simulation result.

### Terminal-State Blindness
Preserving only the final state while losing the initial and intermediate states.

### Interaction-Trace Loss
Failing to archive the sequence of human actions that produced the observed result.

### Static-Export Completeness Error
Treating DOCX/PDF output as a complete representation of an interactive generated artifact.

### Control-Space Blindness
Ignoring parameter bounds, defaults, units, and interface controls that constrain what can be explored.

### Opaque-Simulation Logic Error
Inferring hidden equations or generated logic from visible behavior without evidence.

## Deep Drift benchmark additions

**Generated Simulation Reproducibility Fidelity (GSRF)**  
Can the generated model, its initial state, and its observable control system be reconstructed?

**Interaction-Trace Fidelity (ITF)**  
Can the exact human intervention sequence that produced an observation be replayed?

**Static-Export Loss Fidelity (SELF)**  
Can the archive explicitly identify which interactive semantics are destroyed by PDF, DOCX, screenshot, text-copy, or video export?

**Control-Space Fidelity (CSF)**  
Can control definitions, ranges, defaults, units, and dependencies remain associated with the simulation version?

**Simulation-Logic Transparency Fidelity (SLTF)**  
Can known logic be preserved while unknown or inaccessible logic remains explicitly marked opaque?

## DRPA-1.0 protocol additions

### GENERATED-INTERACTIVE STATE RULE

> When an LLM generates an interactive simulation, model, visualization, table, or interface whose state can change after generation, archive the generated object as a stateful execution surface rather than a static answer. Preserve prompt, platform/model surface, generation time, initial state, control definitions, user interventions, state transitions, terminal state, and the exact representation ultimately cited or exported.

### INTERACTION-TRACE PRESERVATION RULE

> Human interactions with a generated model are part of the provenance graph whenever those interactions can change the observed result. A final state must remain linked to the ordered action sequence that produced it. Reproduction requires replay of both machine generation and human intervention.

### STATIC-EXPORT LOSS RULE

> Any conversion of a generated interactive object into PDF, DOCX, screenshot, copied text, image, or video must record which executable properties were lost. Visual similarity must never be treated as proof of behavioral or causal equivalence.

## Eir'an state-flow addition

```text
GENERATION:
prompt
platform
model/surface
timestamp

INTERACTIVE OBJECT:
identity/version
initial state
controls
ranges
defaults
units
known logic

INTERACTION:
actor
action
value
timestamp/order

STATE:
before
after
intermediate sequence

EXPORT:
text copy
screenshot
video
DOCX/PDF
interactive share

LOSS:
behavior
control space
state history
live recalculation
hidden logic
```

## Canonical Deep Drift requirement

> Treat generated interactive simulations as executable research objects. Preserve machine generation state and human intervention state separately, then bind them into one causal trace. Static exports must be marked as lossy representations whenever they cannot preserve runtime controls, state transitions, or replay semantics.

## Deep Drift principle

> **The simulation is part of the answer, and the clicks are part of the evidence.**

Operationally:

> **Archive the model, the controls, and the intervention trace, not only the final frame.**

## Sources

1. Google Workspace Updates. **Generate interactive simulations and models in the Gemini app.** 24 August 2026. Documents functional simulations and custom interactive visualizations directly in Gemini chat for Workspace customers, including manipulable 3D structures, physics systems, tables, and grids.  
   https://workspaceupdates.googleblog.com/2026/08/generate-interactive-simulations-and-models-in-the-Gemini-app.html

2. Google. **The Gemini app can now generate interactive simulations and models.** 9 April 2026. Describes prompt-generated functional simulations, including adjustable initial velocity and gravity in an orbital model.  
   https://blog.google/innovation-and-ai/products/gemini-app/3d-models-charts/

3. Google Workspace Updates. **2026 Workspace updates archive - Automate Drive, Gmail, and Google Chat actions with new steps in Workspace Studio.** Current September 2026 update. Documents new Copy Drive file/folder, Move Drive file/folder, Reply to email, and Send a Chat reply actions, with admin controls beginning 1 September 2026 and Drive/Chat feature rollout scheduled from 8 September 2026.  
   https://workspaceupdates.googleblog.com/2026/

## Research status

**Node status:** New.  
**Duplicate check:** No existing Deep Drift research-log entry was found for generated interactive simulations/models and human interaction traces as a single provenance problem.  
**Relationship to prior nodes:** Extends BMASF (bidirectional source-mutating mini-apps), VRAEF (viewer-relative artifact execution), CPATF (artifact persistence/lineage), and static document/export fidelity work. GISF is distinct because the causal state is generated inside an interactive explanatory model and then changed by human intervention, even when no external source file is mutated.  
**Freshness:** Workspace availability was announced 24 August 2026 and was identified as an unlogged gap during the 4 September 2026 scan. Workspace Studio's related operational-action controls began rolling out 1 September 2026; the Drive/Chat action rollout is scheduled from 8 September 2026.
