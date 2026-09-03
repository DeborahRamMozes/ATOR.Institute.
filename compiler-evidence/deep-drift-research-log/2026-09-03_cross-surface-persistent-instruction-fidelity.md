# Deep Drift Research Update — CSPIF

## Cross-Surface Persistent Instruction Fidelity

**Research date:** 3 September 2026  
**Primary fresh delta:** Google expanded persistent custom instructions for Gemini in Workspace beyond Docs to Ask Gemini in Drive, Ask Gemini in Chat, and Gemini side panels in Slides, Sheets, and Gmail.  
**Rollout:** gradual rollout starting 2 September 2026, up to 15 days for feature visibility.  
**Scope:** memory-adjacent personalization, persistent instructions, creator surfaces, document/spreadsheet/presentation workflows, cross-app consistency, provenance, and execution-state reconstruction.

## Executive finding

Google Workspace now gives Gemini a persistent instruction layer that can be declared in one Workspace surface and then reused across several others. Google states that saved instructions can be managed in a Personalization setting and are used to personalize Gemini responses across supported Workspace surfaces.

The causal stack is therefore no longer simply:

```text
PROMPT
-> MODEL
-> OUTPUT
```

It can be:

```text
PERSISTENT CUSTOM INSTRUCTIONS
          |
          +--> DRIVE
          +--> CHAT
          +--> DOCS
          +--> SLIDES
          +--> SHEETS
          +--> GMAIL
          |
          v
CURRENT PROMPT
          |
          v
OUTPUT / ARTIFACT MUTATION
```

This produces several important Deep Drift distinctions:

```text
SAME PROMPT
!= SAME EFFECTIVE INSTRUCTION SET

NO REPETITION IN CHAT
!= NO PERSISTENT INSTRUCTION

MEMORY
!= CUSTOM INSTRUCTIONS

SAME USER
!= SAME FEATURE VISIBILITY DURING ROLLOUT

SAME WORKSPACE
!= SAME EXECUTION SURFACE

CONSISTENT STYLE
!= EVIDENCE OF MODEL STABILITY
```

The new research object is the **persistent instruction state active at execution time**.

## New node

### Cross-Surface Persistent Instruction Fidelity (CSPIF)

Minimum state model:

```text
provider
workspace
user_identity
instruction_store
instruction_revision
instruction_text_or_hash
created_from_surface
modified_from_surface
active_surfaces
feature_rollout_state
current_prompt
artifact_or_response
human_revision
execution_time
```

## 1. Persistent instructions are not ordinary conversational memory

Google describes these instructions as preferences users can store so Gemini adapts to style, tone, and formatting preferences without requiring repetition in every conversation.

That makes them behaviorally similar to memory but causally distinct.

A useful decomposition is:

```text
MEMORY
= inferred or retained contextual information

CUSTOM INSTRUCTIONS
= explicit standing behavioral constraints
```

They can both affect the same output, but their provenance is different.

Deep Drift must not collapse both into a generic field called "personalization."

## 2. One instruction store can affect multiple creator surfaces

The same saved instructions can now affect Gemini in:

- Google Docs;
- Ask Gemini in Drive;
- Ask Gemini in Chat;
- Slides side panel;
- Sheets side panel;
- Gmail side panel.

This matters because a formatting preference created during one task can silently shape another task in a different application.

Example:

```text
INSTRUCTION:
"Use concise academic headings and preserve formal terminology."

CREATED IN DOCS
      |
      +--> affects Gmail drafting
      +--> affects Slides assistance
      +--> affects Sheets explanations
      +--> affects Drive responses
```

The user does not need to repeat the instruction in each chat transcript.

Therefore a transcript alone can no longer explain the effective prompt.

## 3. The effective prompt is larger than the visible prompt

For provenance, the actual instruction stack may now be:

```text
SYSTEM / PLATFORM RULES
+ WORKSPACE POLICY
+ PERSISTENT CUSTOM INSTRUCTIONS
+ CURRENT APP CONTEXT
+ CURRENT PROMPT
+ CONNECTED FILE CONTEXT
= EFFECTIVE EXECUTION INPUT
```

A researcher who archives only the visible prompt is preserving only one layer.

The user-visible prompt may be identical across two runs while a changed standing instruction alters style, structure, or output behavior.

## 4. Cross-surface consistency can hide causal variation

Google frames the feature as a way to produce consistent personalization across Workspace.

That consistency is convenient for users but dangerous for naive provenance.

If outputs across Docs, Gmail, and Slides suddenly share tone or formatting, an observer might incorrectly attribute the consistency to:

```text
same model
same prompt
same template
```

when the actual cause is:

```text
shared persistent custom instruction
```

Consistency itself can therefore be evidence of a hidden shared instruction layer.

## 5. Instruction creation and instruction execution are separate events

Google states users can prompt Gemini to store an instruction and can manage saved instructions through Personalization settings.

So Deep Drift must preserve at least two distinct events:

```text
INSTRUCTION CREATION / MODIFICATION
```

and:

```text
INSTRUCTION APPLICATION DURING RUN
```

An instruction can exist without materially affecting every output. Conversely, a later output can be influenced by an instruction created days earlier in another Workspace surface.

## 6. Rollout state becomes a provenance variable

Google states rollout begins 2 September 2026 and can take up to 15 days for feature visibility.

Therefore:

```text
FEATURE ANNOUNCED
!= FEATURE AVAILABLE TO USER
```

Two people in the same organization may temporarily have different effective creator environments during staged rollout.

A reproducibility record should preserve whether the feature was actually visible and active at the time of execution.

## 7. No admin control creates a user-level behavioral layer

Google states there is no admin control for this feature.

That means the instruction layer can be materially user-specific rather than centrally configured.

In provenance terms:

```text
ORG WORKSPACE STATE
!= USER PERSONALIZATION STATE
```

Two users can therefore operate under the same Workspace governance while carrying different persistent instruction stacks.

## 8. Persistent instructions can shape native creator artifacts indirectly

The feature applies in Docs, Slides, Sheets, Gmail, Drive, and Chat. These are not only conversation interfaces; several are native artifact environments.

So a persistent instruction can influence:

```text
DOCUMENT STRUCTURE
SPREADSHEET EXPLANATION
SLIDE LANGUAGE
EMAIL TONE
DRIVE SUMMARIZATION
CHAT RESPONSE STYLE
```

The instruction itself may never appear inside the final DOCX, PDF, PPTX, spreadsheet, or exported derivative.

Therefore:

```text
FINAL ARTIFACT
!= SELF-DESCRIBING INSTRUCTION HISTORY
```

## 9. Custom instructions become a reusable creator protocol

At a systems level, persistent instructions are converging with Skills, templates, and other reusable procedural layers.

They differ in complexity but share one architectural property:

```text
WRITE ONCE
-> APPLY ACROSS FUTURE RUNS
```

The broader stack increasingly looks like:

```text
MEMORY
+ CUSTOM INSTRUCTIONS
+ SKILLS
+ TEMPLATES
+ PLUGINS
+ APP CONTEXT
+ CURRENT PROMPT
-> ARTIFACT
```

Creator provenance must preserve each layer separately.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | Major adjacent delta | Persistent instructions now form a separate cross-surface continuity channel from memory |
| Skills/plugins | Architectural convergence | Instructions behave like lightweight reusable procedures, but are not equivalent to Skills |
| Mini-app builders | No stronger fresh delta | Existing Sites/agent-builder nodes remain current |
| Chat-to-document | Material indirect effect | Standing instructions can shape native Docs/Slides/Sheets outputs without appearing in the local prompt |
| DOCX/PDF generation | Downstream effect | Exported files may reflect hidden persistent instruction state |
| Copy-paste/export | Further seam reduction | Style/format constraints no longer need to be copied into every prompt |
| Creator workflow | Major | Cross-app creator behavior is becoming stateful beyond the visible conversation |

## New failure classes

### Visible-Prompt Completeness Error
Treating the text shown in the current conversation as the complete instruction set.

### Memory-Instruction Collapse
Treating explicit persistent custom instructions and inferred/retained memory as the same causal channel.

### Same-User-Same-State Fallacy
Assuming a user has the same effective personalization state across rollout windows and surfaces.

### Cross-Surface Provenance Blindness
Failing to record that an instruction created in one app can shape output in another.

### Consistency-Equals-Model-Stability Error
Attributing stable tone or formatting across apps to model behavior when persistent instructions may be responsible.

### Artifact-Self-Explanation Fallacy
Assuming the final exported document or PDF reveals the standing instruction state that shaped it.

## Deep Drift benchmark additions

**Persistent Instruction State Fidelity (PISF)**  
Can the standing instruction set active at the moment of execution be reconstructed?

**Cross-Surface Instruction Fidelity (CSIF)**  
Can instruction creation in one Workspace surface be linked to execution in another?

**Memory-vs-Instruction Separation Fidelity (MISF)**  
Can inferred/retained memory remain distinct from explicit persistent behavioral instructions?

**Rollout Visibility Fidelity (RVF)**  
Can feature announcement, rollout eligibility, actual UI visibility, and active use remain separate states?

**Instruction Revision Fidelity (IRF)**  
Can changes to standing instructions be reconstructed over time?

**Artifact-to-Instruction Lineage Fidelity (AILF)**  
Can a native or exported artifact be linked to the persistent instruction state that materially shaped it?

## DRPA-1.0 protocol additions

### PERSISTENT-INSTRUCTION STATE RULE

> When an AI platform supports persistent custom instructions, personalization rules, standing preferences, or equivalent reusable behavioral constraints, these must be archived as a separate causal layer from conversational memory, project context, Skills, templates, and the current prompt. Preserve instruction identity or representation, creation and modification time where observable, originating surface, active surfaces, revision state, rollout/availability state, current prompt, resulting artifact or response, and later human corrections. A visible prompt must never be treated as the complete effective instruction set when persistent instructions may be active.

### CROSS-SURFACE INSTRUCTION RULE

> When one persistent instruction store can affect multiple applications or creator surfaces, preserve the surface where the instruction was created or changed separately from the surface where it was applied. Cross-application consistency must not be attributed solely to model behavior unless the persistent instruction state has been checked.

## Eir'an state-flow addition

```text
PERSISTENT INSTRUCTION STATE:
instruction present
instruction revision
creation surface
modification surface
active surfaces
rollout visibility

EXECUTION STATE:
current surface
current prompt
memory state
Skill/template state
persistent instruction state
artifact/result

LINEAGE CHECK:
visible prompt completeness
cross-surface inheritance
instruction revisions
human overrides
unknown standing constraints
```

## Canonical Deep Drift requirement

> Archive persistent instructions as a versioned behavioral layer. For every material creator run, distinguish the visible prompt from standing instructions inherited across applications. Preserve where the instruction was created, where it was applied, whether the feature was actually available during staged rollout, and how later revisions change subsequent outputs. Do not collapse explicit standing instructions into generic memory or personalization metadata.

## Deep Drift principle

> **The prompt is becoming only the visible tip of the instruction stack.**

Operationally:

> **Archive what the user did not need to repeat.**

## Broader creator-workflow trend

The broader platform direction remains consistent across the recent Deep Drift nodes:

```text
ONE-OFF PROMPTING
      |
      v
PERSISTENT CREATOR STATE
      |
      +--> MEMORY
      +--> CUSTOM INSTRUCTIONS
      +--> SKILLS
      +--> TEMPLATES
      +--> CONNECTED APPS
      +--> FILE LIBRARIES
      +--> AGENT / HARNESS STATE
      |
      v
NATIVE ARTIFACTS AND ACTIONS
```

The friction reduction is useful. Humans finally do not need to repeat the same formatting request six hundred times like a malfunctioning office parrot.

But each removed repetition also removes visible evidence. Provenance must therefore move deeper into state reconstruction.

## Sources

1. Google Workspace Updates. **Custom instructions for Gemini in Workspace now available in more apps.** 2 September 2026. Documents expansion of persistent custom instructions from Docs to Ask Gemini in Drive, Ask Gemini in Chat, and Gemini side panels in Slides, Sheets, and Gmail; saved instructions are managed in Personalization settings and used across supported Workspace surfaces. Rollout begins 2 September 2026 and may take up to 15 days.  
   https://workspaceupdates.googleblog.com/2026/09/custom-instructions-for-gemini-in-Workspace-now-available-in-more-apps.html

2. Google Workspace Updates. **Turn Google Docs, PDFs, and Word files into video summaries in Google Vids.** 2 September 2026. Supports the broader shift from native documents into AI-generated derivative artifacts, already tracked in CMATF.  
   https://workspaceupdates.googleblog.com/2026/09/turn-google-docs-pdfs-and-word-files-into-video-summaries-in-Google-Vids.html

3. Anthropic Help Center. **Use Claude's chat search and memory to build on previous context.** Updated 3 September 2026. Provides a useful contrasting architecture in which persistent memory and past-chat search are separate channels, already tracked in MMBESF.  
   https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context

4. OpenAI Help Center. **ChatGPT Release Notes.** Checked 3 September 2026. No newer first-party ChatGPT release after 1 September was found in this scan; recent Work, project-memory, Skills/plugin, and artifact changes remain covered by prior Deep Drift nodes.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

## Research status

**Node status:** New.  
**Duplicate check:** No matching persistent custom-instruction / cross-Workspace-surface provenance node was found in the current Deep Drift GitHub research log search.  
**Relationship to prior nodes:** Extends MMBESF and MPSRF but remains distinct: those nodes track memory architecture, boundaries, migration, and portability; CSPIF tracks explicit standing behavioral instructions that persist across creator applications independently of ordinary memory.  
**Freshness:** Primary first-party Google Workspace announcement published 2 September 2026 and verified on 3 September 2026.
