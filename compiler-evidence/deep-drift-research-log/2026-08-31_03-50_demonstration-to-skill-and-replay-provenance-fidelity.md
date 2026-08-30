# Deep Drift Research Update

## Demonstration-to-Skill and Replay Provenance Fidelity

**Research date:** 31 August 2026  
**Primary delta:** OpenAI Record & Replay converts a demonstrated macOS workflow into a reusable Skill.  
**Secondary portability delta:** eligible ChatGPT Edu workspace conversation JSON can be exported and uploaded into a personal ChatGPT conversation for reference.

## New-to-log finding

OpenAI documents Record & Replay as a workflow-learning feature for ChatGPT Work / Codex on macOS when Computer Use is enabled. A user records a stable workflow, performs it once, and ChatGPT or Codex observes the actions and window content needed to learn the task. After recording stops, the system drafts a reusable Skill describing when to use the workflow, required inputs, procedural steps, and how to verify success. The Skill can then be invoked in a new conversation with different variable inputs and can use tools available in the replay environment, including Computer Use, browser actions, and installed plugins.

```text
HUMAN DEMONSTRATION
-> RECORDED ACTION / WINDOW CONTEXT
-> MODEL ABSTRACTION
-> GENERATED SKILL
-> HUMAN REFINEMENT
-> REPLAY WITH NEW INPUTS
-> COMPUTER USE / BROWSER / PLUGINS
-> RESULT
```

This is materially different from prompt writing or manual Skill authoring. The procedure begins as **performed human behavior**, which the model must convert into a generalized procedural object.

## Deep Drift benchmark family

**Demonstration-to-Skill and Replay Provenance Fidelity (DSRPF)**

Companion constructs:

- Demonstration Capture Fidelity
- Demonstration-to-Procedure Translation Fidelity
- Hidden-Preference Extraction Fidelity
- Skill Refinement Attribution Fidelity
- Replay Environment Fidelity
- Variable-Input Substitution Fidelity
- Tool-Availability Drift Fidelity
- Demonstration-to-Plugin Packaging Fidelity
- Skill-to-Artifact Lineage Fidelity
- Conversation-Archive-to-Reference Fidelity

## Critical distinctions

```text
DEMONSTRATION != PROCEDURE
OBSERVED ACTION != INTENDED RULE
ONE SUCCESSFUL RUN != GENERAL PROCEDURE
GENERATED SKILL != FINAL HUMAN PROCEDURE
RECORDED ENVIRONMENT != REPLAY ENVIRONMENT
SKILL != PLUGIN
REPLAY != ORIGINAL RUN
```

The system must infer which demonstrated actions are essential, which values are variables, which behaviors are defaults, and which actions are incidental. That abstraction layer becomes a provenance object.

## Minimum provenance manifest

```text
recording_id
explicit_goal
recording_started_at
recording_stopped_at
window_sequence
application_sequence
user_action_sequence
variable_inputs
success_state
generated_skill_id
generated_skill_version
machine_draft_hash
human_revision_hash
required_tools
replay_run_id
replay_environment
permission_state
variable_input_values
resulting_artifact_ids
plugin_promotion_id
```

## Failure classes

1. Incidental-action capture: unrelated cleanup or navigation becomes part of the Skill.
2. Example-value hard coding: a demonstration-specific value becomes a permanent rule.
3. Tacit-preference loss: naming conventions, defaults, or decision points remain hidden.
4. Demonstration-success overfitting: replay works only under nearly identical UI/data conditions.
5. Replay tool drift: different plugins, permissions, browser state, or app versions alter behavior without attribution.
6. Human-refinement erasure: a heavily corrected Skill is later treated as purely machine-generated.
7. Recording-origin loss: the Skill survives but its source demonstration cannot be identified.
8. Plugin-promotion lineage loss: a Skill is packaged for distribution without its recording/refinement ancestry.
9. Skill-name identity collapse: same visible name, different procedural ancestry.
10. Replay-to-artifact detachment: downstream files or reports cannot identify the replay run that generated them.

## Deep Drift benchmark

Controlled workflow:

```text
OPEN CONTROLLED WEB PAGE
-> DOWNLOAD TEST REPORT
-> RENAME USING YYYY-MM CONVENTION
-> MOVE TO TEST FOLDER
-> VERIFY FILE EXISTS
```

Test sequence: record once; preserve the machine-generated Skill draft; classify stable steps versus variables; explicitly add one hidden preference; save a refined version; replay with a different month; replay with one tool removed; replay after a minor interface change; compare results; package into a plugin where supported; verify whether recording/refinement provenance survives; generate a downstream PDF/report and verify Skill-to-artifact lineage.

Proposed metrics:

```text
DRC  = relevant captured actions / all captured actions
PGA  = correctly generalized rules / controlled stable rules
VSA  = intended variable substitutions correct / controlled substitutions
HPC  = explicit material tacit preferences / controlled material preferences
REAC = replay runs with reconstructable environment / controlled replay runs
SALC = artifacts attributable to exact Skill version and replay run / controlled replay artifacts
```

## Memory significance

Record & Replay should be treated as **externalized procedural memory**. Deep Drift should separate:

```text
DECLARATIVE MEMORY -> facts and preferences
CONVERSATION HISTORY -> past discourse
PROCEDURAL MEMORY -> how to perform a workflow
DEMONSTRATION MEMORY -> evidence from which the procedure was inferred
```

The last two are now operational creator-workflow objects.

## Skills significance

Skill provenance can no longer be reduced to "who wrote the Skill?" The relevant chain is:

```text
WHO DEMONSTRATED?
-> WHAT DID THE MACHINE OBSERVE?
-> WHAT DID IT GENERALIZE?
-> WHAT DID THE HUMAN CORRECT?
-> WHICH TOOL ENVIRONMENT REPLAYED IT?
```

OpenAI also draws a distribution boundary: Record & Replay is a fast Skill-authoring route, while workflows that need stable team distribution, multiple Skills, connectors, MCP servers, or install metadata should be packaged as plugins. This connects directly to the earlier Repository-to-Workspace Skill Supply-Chain Fidelity node.

## Mini-app / creator workflow significance

A demonstrated human procedure can become the operational core behind a plugin, Site, internal tool, or lightweight application:

```text
DEMONSTRATED HUMAN WORKFLOW
-> SKILL
-> PLUGIN
-> MINI-APP / INTERNAL TOOL
-> USER ACTION
```

The UI may be generated later; the procedural core may originate in observed human performance.

## DOCX/PDF and export significance

A downstream document can now descend from a replayed procedure rather than a direct prompt:

```text
HUMAN DEMONSTRATION
-> SKILL
-> REPLAY
-> SOURCE FILES
-> REPORT ASSEMBLY
-> DOCX / PDF
```

Therefore artifact manifests should preserve Skill version, recording origin, replay run, variable inputs, tool environment, approvals, and generation timestamp.

## Copy-paste reduction

```text
OLD:
EXPLAIN EVERY CLICK TO AI

NEW:
SHOW THE WORKFLOW ONCE
```

This genuinely compresses human instruction work, but it moves the hard problem to abstraction: the system must distinguish **what the human did** from **what the human meant**.

## Secondary portability finding: Edu conversation JSON

OpenAI also documents that eligible ChatGPT Edu users can export workspace data when admins enable Data export and upload the included conversation JSON into a new personal ChatGPT conversation **for reference**.

```text
CONVERSATION JSON UPLOAD != ACCOUNT MIGRATION
```

It is a portable reference object, not a restoration of workspace memory, Skills, connected-app credentials, permissions, or runtime state.

## Deep Drift position

> **Every demonstration-derived Skill should preserve the originating recording, explicit goal, observed action sequence, variable inputs, machine-generated procedure, human refinements, Skill version, required tools, replay environment, replay run, plugin-promotion lineage, and downstream artifact/action IDs needed to reconstruct how human behavior became reusable machine procedure.**

The useful question is no longer whether AI can follow instructions. It is whether a model that watches one successful performance has learned the procedure or merely memorized the dance.

## Evidence boundary

Platform facts are grounded in first-party OpenAI documentation checked 31 August 2026. DSRPF and all companion constructs, benchmark procedures, failure classes, and metrics are ĀTØR Institute / Deep Drift Research constructs.

## Primary sources

1. OpenAI Help Center, **ChatGPT Enterprise & Edu - Release Notes**, 18 June 2026 and 17 June 2026 entries.  
   https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes

2. OpenAI / ChatGPT Learn, **Record & Replay**.  
   https://learn.chatgpt.com/docs/extend/record-and-replay

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
