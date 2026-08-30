# Deep Drift Research Update

## Interactive Simulation Object Persistence Fidelity

**Research date:** 30 August 2026  
**Primary platform change:** Gemini app interactive simulations and models, available to Workspace users as of 24 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log creator-workflow architecture verified from first-party Google Workspace documentation.

## Executive Summary

Google has expanded the Gemini app from mostly text and static diagrams into a surface that can generate **functional interactive simulations, 3D models, tables, and grids directly inside chat**. Google gives examples such as rotating a 3D DNA model, manipulating orbital variables, watching a pendulum exchange energy, and exploring cash-burn scenarios through interactive tables.

This is materially different from an ordinary rich-media response.

```text
PROMPT
-> GENERATED INTERACTIVE MODEL
-> USER MANIPULATION
-> NEW STATE
-> INTERPRETATION
```

For Deep Drift Research, the important issue is that the user is no longer merely reading an AI-generated artifact. The user is manipulating a generated system whose state can alter what they understand, observe, or later report.

This creates a new benchmark family:

**Interactive Simulation Object Persistence Fidelity (ISOPF)**

with companion constructs:

- Prompt-to-Simulation Fidelity
- Interaction-State Provenance Fidelity
- Parameter-to-Outcome Fidelity
- State-to-Explanation Fidelity
- Simulation-to-Document Export Fidelity
- Generated-Object Reproducibility Fidelity
- Interactive-Artifact Lineage Fidelity

The central research question is:

> When an LLM generates an interactive simulation inside chat and the user changes parameters, views, or object state, can the resulting interpretation still be reconstructed from the original prompt, generated model, parameter history, and final state?

## 1. What Changed

Google Workspace announced on 24 August 2026 that the Gemini app can generate custom, interactive visualizations directly inside chat. Google describes the change as a move from largely text responses and static diagrams toward functional simulations and models. Supported examples include 3D scientific structures, dynamic physics simulations, adjustable parameter models, interactive tables, grids, and topic-specific visual elements generated for the user's question.

The feature is available to Google Workspace customers, Workspace Individual subscribers, and eligible personal-account users, subject to usage limits.

## 2. Why This Matters for Deep Drift

A static answer has one visible state. An interactive model has many.

```text
STATIC OUTPUT
-> ONE RENDERED ANSWER

INTERACTIVE OUTPUT
-> STATE 0
-> STATE 1
-> STATE 2
-> STATE N
```

Therefore:

```text
SAME PROMPT != SAME OBSERVED STATE
SAME MODEL != SAME USER PATH
SCREENSHOT != COMPLETE INTERACTION HISTORY
FINAL VIEW != ORIGINAL MODEL STATE
INTERACTIVE RESULT != REPRODUCIBLE RESULT
```

The user may reach a conclusion after changing sliders, rotating a model, selecting a row, changing a variable, or exploring a generated grid. If those state changes are not preserved, the conclusion cannot be fully reconstructed.

## 3. New Deep Drift Construct: Interactive Simulation Object Persistence Fidelity

**Interactive Simulation Object Persistence Fidelity (ISOPF)** measures whether an AI-generated interactive object preserves enough information to reconstruct its original generation state, user interaction history, parameter changes, and final interpretation.

A minimum manifest should preserve:

```text
conversation_id
turn_id
prompt_text
generated_object_id
generated_object_type
initial_parameters
interaction_events
parameter_changes
viewport_state
selected_elements
derived_values
final_state
export_event
```

## 4. Prompt-to-Simulation Fidelity

A generated simulation must first represent the user's actual question. A prompt asking to show how orbital stability changes when velocity and gravity vary should not silently introduce unrelated assumptions about mass, scale, time step, or collision behavior without exposing them.

The generated object should expose user-specified parameters, model-inferred parameters, default parameters, and locked parameters. Otherwise a visually impressive simulation can hide analytical assumptions inside interaction design.

## 5. Interaction-State Provenance Fidelity

**Interaction-State Provenance Fidelity** measures whether the sequence of user interactions is recoverable.

```text
INITIAL STATE
gravity = 1.0
velocity = 1.0

ACTION 1
velocity -> 1.4

ACTION 2
gravity -> 0.8

ACTION 3
zoom -> 2.0x
```

If only the final visual remains, the user journey is lost. That matters whenever the user later claims that a simulation showed a particular result. The evidence may depend on the exact path taken through the object.

## 6. Parameter-to-Outcome Fidelity

A simulation must preserve the relationship between parameter changes and outputs.

```text
INPUT VALUE
-> GENERATED INTERNAL STATE
-> DISPLAYED OUTCOME
```

Deep Drift should verify whether repeated identical inputs produce materially consistent outputs. If the object is stochastic, approximate, or model-generated rather than deterministic, that fact must be visible.

## 7. State-to-Explanation Fidelity

The surrounding natural-language explanation may describe the simulation's initial state, while the user later moves far away from that state.

```text
EXPLANATION AT STATE 0
!=
EXPLANATION AT STATE N
```

A robust creator workflow should update or version explanations when interaction changes the modeled condition. Otherwise the text and simulation can silently diverge.

## 8. Simulation-to-Document Export Fidelity

A user may generate a model, interact with it, take a screenshot, place it in DOCX, and export PDF. The exported document should preserve object ID, prompt, final parameters, timestamp, model/surface, and state summary.

A screenshot alone freezes appearance while amputating interaction provenance.

## 9. Generated-Object Reproducibility Fidelity

**Generated-Object Reproducibility Fidelity** measures whether a later user can regenerate the same or materially equivalent interactive object from preserved inputs. Tests should compare the same prompt, model, parameter set, and version against generated object structure, defaults, controls, and outcome.

## 10. Interactive-Artifact Lineage Fidelity

An interactive model may later become:

```text
SIMULATION
-> SCREENSHOT
-> SLIDE
-> PDF
-> ARTICLE
```

The derivative artifact should remain attributable to the original interactive state, not merely to "Gemini." A minimum lineage chain is prompt -> generated object -> interaction state -> capture/export -> downstream artifact.

## 11. New Failure Classes

1. **State Amnesia:** final state survives but parameter path is lost.
2. **Default-Assumption Opacity:** materially influential defaults are hidden.
3. **Explanation-State Drift:** prose remains tied to initial state after interaction changes conditions.
4. **Screenshot Provenance Collapse:** visible state survives while interaction history disappears.
5. **Parameter Binding Error:** a control changes a different variable than the user expects.
6. **Generated-Model Version Drift:** the same prompt later produces different controls or object structure.
7. **Interactive Authority Inflation:** software-like behavior is mistaken for validation.
8. **Educational-Simulation-to-Evidence Collapse:** a pedagogical model is cited as validated scientific evidence.
9. **Hidden Stochasticity:** identical settings yield different results without disclosed randomness.
10. **Cross-Session State Loss:** a user cannot reproduce the exact prior state.

## 12. Deep Drift Benchmark: Prompt-to-Simulation-to-Report Round Trip

Controlled prompt:

```text
Show a pendulum simulation.
Expose gravity, length, and initial angle.
Keep mass constant.
Explain which variables affect period.
```

Test sequence: preserve the prompt and initial state; change one parameter at a time; record visible outcomes; return to initial values; capture a non-default state; place it into DOCX; export to PDF; verify whether the report identifies the simulation state; regenerate the prompt in a new conversation; compare controls and defaults.

Measure prompt fidelity, state traceability, parameter binding accuracy, explanation/state alignment, reproducibility, export-lineage retention, and human reconstruction minutes.

## 13. New Metrics

### Interaction State Attribution Coverage

```text
ISAC =
interaction-derived states traceable to exact parameter history
/
all controlled final states
```

### Parameter Binding Accuracy

```text
PBA =
controls changing the intended simulation variable
/
all controlled interaction controls
```

### Explanation-State Consistency

```text
ESC =
explanations remaining valid for current simulation state
/
all tested state transitions
```

### Reproduction Fidelity

```text
RF =
regenerated simulations materially matching preserved state
/
all controlled reproduction tests
```

### Export State Lineage Coverage

```text
ESLC =
screenshots, DOCX, and PDF derivatives retaining recoverable simulation-state provenance
/
all controlled downstream artifacts
```

## 14. Why This Matters for Memory

Interactive state introduces another persistence class: chat memory, artifact memory, and interaction-state memory. The model may remember the conversation while forgetting the exact state of the interactive object. Those are not the same thing.

## 15. Why This Matters for Skills

A reusable Skill may generate a simulation rather than prose. The effective execution manifest becomes Skill version + prompt + generated-object version + initial parameters + user interaction history.

## 16. Why This Matters for Mini-App Builders

This update is a direct bridge between chat and mini-app generation. Gemini can create topic-specific functional interactive experiences inside the conversation itself.

The distinction from Sheets Canvas is:

```text
SHEETS CANVAS
-> GENERATED APP OVER PERSISTENT SHEET DATA

GEMINI INTERACTIVE MODEL
-> GENERATED APP-LIKE OBJECT INSIDE CHAT
```

Both indicate the same larger trend: the conversational response is becoming an executable surface.

## 17. Why This Matters for Chat-to-Document Export

Interactive models complicate export because documents are static. The conversion from interactive object to static document necessarily discards behavior unless a state manifest travels with it. Deep Drift should therefore treat static export as **state compression**.

## 18. Why This Matters for DOCX / PDF Generation

A DOCX or PDF can preserve image, text, and table, but not necessarily interaction history, parameter state, or model logic. Any report containing a captured interactive model should add a machine-readable or human-readable state block.

## 19. Why This Matters for Copy-Paste / Export Fixes

The workflow is shifting from ask AI -> read answer -> copy text toward ask AI -> manipulate generated object -> capture result. Copy-paste is no longer the only lossy seam. The interaction-to-capture boundary is becoming equally important.

## 20. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing personal-memory release surfaced. Exact interactive state may diverge from remembered conversation context. |
| Skills | No newer standalone Skill launch surfaced. Stateful interactive outputs expand what reusable Skills may need to preserve. |
| Mini-app builders | **Material new-to-log item:** Gemini can generate functional interactive simulations and models directly inside chat for Workspace users. |
| Chat-to-document export | **Material provenance issue:** static documents capture only one state unless a state manifest is preserved. |
| DOCX / PDF generation | No newer direct format-generation release surfaced; DOCX/PDF are state-compression boundaries for interactive outputs. |
| Copy-paste/export fixes | The important handoff is shifting from text copy-paste to interaction-state capture and export. |
| Broader creator workflow | **Major trend:** conversational answers are becoming executable, manipulable, stateful objects rather than static responses. |

## 21. Cross-Platform Check

### Google

The strongest surviving new-to-log item is Gemini's interactive simulations and models becoming available to Workspace users. Google's weekly recap on 28 August confirms this as one of the week's active Workspace launches.

### OpenAI

The newest public ChatGPT documentation checked remains the already logged Library and late-August release-note changes. No newer category-displacing creator workflow surfaced.

### Anthropic

No newer creator-workflow change displaced the already logged memory-migration, Skills, Files API, and provenance items.

### Microsoft

The latest creator-workflow release remains the 25 August Copilot cluster already represented in the Deep Drift ledger.

### Databricks

The 26 August Genie visualization-retrieval API remains the newest material creator-runtime change already logged.

### Notion

The 28 August Suggested Edits change remains Notion's latest material agent-governance update.

## 22. Deep Drift Research Position

The weak description is: Gemini can make interactive visualizations.

The serious description is: an LLM response can now become a generated interactive system whose meaning changes as users manipulate parameters and state, creating a new provenance layer between the original prompt and any later screenshot, document, report, or conclusion.

```text
INTERACTIVE != EXPLAINABLE
MANIPULABLE != VALIDATED
SCREENSHOT != STATE HISTORY
SAME PROMPT != SAME OBSERVATION
STATIC EXPORT != COMPLETE ARTIFACT
```

The serious Deep Drift requirement is:

> **Every LLM-generated interactive object should preserve the originating prompt, generated object identity and version, inferred defaults, user parameter history, state transitions, final state, explanation-state relationship, and downstream capture/export lineage.**

The industry is now teaching chat windows to behave like little laboratories. Predictably, the next problem is proving which knobs were turned before somebody pasted the result into a PDF and called it evidence.

## Evidence Boundary

Platform facts in this report are grounded in Google Workspace's first-party announcement **Generate interactive simulations and models in the Gemini app**, published 24 August 2026, and Google's Workspace Weekly Recap published 28 August 2026.

Google states that Gemini can generate functional interactive visualizations directly inside chat, including tables, grids, simulations, and 3D models, and that the feature is available to Workspace users subject to existing Gemini controls and usage limits.

ISOPF and all named companion constructs, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Google Workspace Updates, **Generate interactive simulations and models in the Gemini app**, 24 August 2026.  
   https://workspaceupdates.googleblog.com/2026/08/generate-interactive-simulations-and-models-in-the-Gemini-app.html

2. Google Workspace Updates, **Google Workspace Weekly Recap - August 28, 2026**.  
   https://workspaceupdates.googleblog.com/2026/08/weekly-recap-08-28-2026.html

3. Google, **The Gemini app can now generate interactive simulations and models**, background product announcement.  
   https://blog.google/innovation-and-ai/products/gemini-app/3d-models-charts/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
