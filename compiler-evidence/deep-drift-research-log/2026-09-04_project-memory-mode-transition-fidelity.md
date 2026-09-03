# Deep Drift Research Update - PMMTF

## Project-Memory Mode Transition Fidelity

**Research date:** 4 September 2026  
**Primary overlooked delta:** OpenAI's 14 August 2026 ChatGPT update allows eligible existing projects to switch between **Default memory** and **Project-only memory** after project creation. OpenAI states that the change may take several hours to take effect. Shared projects remain locked to project-only memory, and ChatGPT Work is unavailable inside project-only-memory projects.  
**Scope:** mutable project memory boundaries, delayed policy application, cross-project context isolation, project-to-global memory leakage prevention, Work compatibility, shared-project immutability, and longitudinal research reproducibility.

## Executive finding

A ChatGPT Project no longer has one immutable memory regime for its lifetime.

The same project can now pass through different context-boundary states:

```text
PROJECT P
   |
   +--> DEFAULT MEMORY
   |
   +--> TRANSITION REQUEST
   |
   +--> PROPAGATION WINDOW
   |
   +--> PROJECT-ONLY MEMORY
```

This matters because the project identity, chats, files, instructions, and URL may remain unchanged while the **permitted context graph changes**.

For Deep Drift:

```text
SAME PROJECT ID
!= SAME MEMORY BOUNDARY

SETTING SAVED
!= SETTING EFFECTIVE IMMEDIATELY

PROJECT-ONLY MEMORY
!= DEFAULT MEMORY WITH FEWER RESULTS

PROJECT CHAT HISTORY
!= PERSONAL SAVED MEMORY

PROJECT SURVIVES
!= CHATGPT WORK REMAINS AVAILABLE

SHARED PROJECT
!= MUTABLE MEMORY POLICY
```

The new research object is the **memory-mode transition event plus its effective-time boundary**.

## New node

### Project-Memory Mode Transition Fidelity (PMMTF)

Minimum state model:

```text
project_id
project_owner
shared_state
memory_mode_before
memory_mode_requested
memory_mode_effective
transition_request_time
transition_effective_time
propagation_window
personal_memory_state
workspace_memory_state
reference_chat_history_state
outside_project_memory_access
outside_project_chat_access
project_to_outside_reference_state
work_availability
verification_run
```

## 1. Project identity and memory identity can diverge

Before this change, project-only memory was strongly associated with project creation. The August 14 update makes the boundary mutable for eligible existing unshared projects.

That changes the provenance model from:

```text
PROJECT CREATED
-> MEMORY MODE FIXED
```

into:

```text
PROJECT CREATED
-> MEMORY MODE A
-> TRANSITION
-> MEMORY MODE B
```

The artifact and conversation history can continue through the transition.

Therefore the project ID alone cannot identify the memory environment that produced a response.

## 2. Default memory and project-only memory are different causal graphs

OpenAI's current Projects documentation states that with project-only memory:

- previously saved memories are not referenced in project chats;
- chats can reference other conversations within the same project;
- chats cannot reference conversations outside the project;
- chats outside the project cannot reference conversations from the project;
- ChatGPT Work is not available in the project.

This can be represented as:

```text
PROJECT-ONLY MEMORY

PROJECT CHAT A <----> PROJECT CHAT B
       ^                   ^
       |                   |
       +---- PROJECT FILES-+

OUTSIDE MEMORIES      X
OUTSIDE CHATS         X
PROJECT -> OUTSIDE    X
```

Default memory allows a broader context graph according to plan and personal/workspace settings.

These are not simply two levels of 'more memory' and 'less memory.' They are different **information-flow topologies**.

## 3. Memory policy now changes inside a longitudinal research object

Deep Drift often treats a project as a persistent experimental container.

PMMTF means that a project may contain outputs generated under different boundary regimes:

```text
DAY 1-20
DEFAULT MEMORY

DAY 21
MODE SWITCH REQUESTED

DAY 21 / PROPAGATION WINDOW
EFFECTIVE STATE UNCERTAIN

DAY 22+
PROJECT-ONLY MEMORY
```

A comparison between Day 20 and Day 22 can therefore be confounded by memory-policy change even when:

- the model is unchanged;
- the prompt is unchanged;
- the project is unchanged;
- the files are unchanged;
- the instructions are unchanged.

The observer's context-access topology changed.

## 4. The propagation window is a provenance state

OpenAI says memory-setting changes may take a few hours to take effect.

That creates a state that ordinary logs usually ignore:

```text
REQUESTED MODE
!= CONFIRMED EFFECTIVE MODE
```

During that interval, Deep Drift should record:

```text
TRANSITION_PENDING
```

rather than pretending the new boundary is already active.

Any material run performed during this period should be marked as **boundary-uncertain** until behavior or platform state confirms the transition.

## 5. Switching to project-only memory removes project information from outside memory use

OpenAI states that when a project switches to project-only memory, information from that project is removed from memory used outside the project, while the project's chats and files remain available inside the project.

This is a directional boundary mutation:

```text
BEFORE
PROJECT INFORMATION
-> MAY CONTRIBUTE OUTSIDE PROJECT

AFTER PROJECT-ONLY TRANSITION
PROJECT INFORMATION
-X-> OUTSIDE PROJECT MEMORY USE
```

That means the transition changes not only what can enter the project, but what can leave it as reusable memory context.

For provenance this is a **context-flow revocation event**.

## 6. Memory state is not fully inspectable

OpenAI's Projects help states that project memory does not expose a list of memories comparable to personal memory.

A researcher can therefore know the configured mode without having a complete inspectable inventory of every project-derived memory contribution.

So:

```text
MODE OBSERVABLE
!= MEMORY CONTENT FULLY OBSERVABLE
```

Deep Drift should distinguish configuration provenance from content-state provenance.

The former can be logged directly. The latter may require behavioral probes and controlled test prompts.

## 7. Work availability is coupled to memory mode

ChatGPT Work is explicitly unavailable in project-only-memory projects.

This is unusually important because a memory-policy switch can simultaneously alter execution capability:

```text
DEFAULT MEMORY PROJECT
+ WORK AVAILABLE

        |
        v

PROJECT-ONLY MEMORY
+ WORK UNAVAILABLE
```

Therefore:

```text
MEMORY POLICY CHANGE
-> TOOL / RUNTIME CAPABILITY CHANGE
```

A memory boundary is now also an orchestration boundary.

This connects PMMTF directly to CCPSF, CRFPF, and the broader Deep Drift runtime-state model.

## 8. Shared projects have a fixed boundary

Shared projects automatically use project-only memory and cannot switch to default memory.

They also do not have access to an individual member's outside memories, custom instructions, or context.

This gives Deep Drift two project classes:

```text
PRIVATE / ELIGIBLE PROJECT
-> MEMORY MODE MAY BE MUTABLE

SHARED PROJECT
-> PROJECT-ONLY MEMORY LOCKED
```

The sharing event therefore acts as a governance boundary, not merely a collaboration feature.

## 9. Personal and workspace settings remain upstream dependencies

Project memory is also conditioned by personal and workspace settings.

For non-Enterprise subscriptions, OpenAI documents requirements around Reference saved memories and Reference chat history. Enterprise adds workspace-level memory enablement.

The effective state is therefore closer to:

```text
PROJECT MEMORY MODE
+ PERSONAL MEMORY SETTINGS
+ CHAT-HISTORY REFERENCE SETTINGS
+ WORKSPACE POLICY
+ SHARING STATE
= EFFECTIVE CONTEXT ACCESS
```

A project-mode field alone is insufficient for reproducibility.

## 10. Existing chats remain while their context environment changes

The project does not need to be recreated when its memory mode changes.

Old chats remain in place.

That means a later chat can exist next to earlier conversations produced under another memory regime.

The archive must not assume:

```text
ALL CHATS IN PROJECT
= SAME MEMORY POLICY
```

Instead each material response should inherit the policy state that was effective at its generation time.

## 11. Moving chats into projects creates another boundary event

OpenAI documents that an existing eligible chat can be moved into a project, after which it inherits project instructions and file context.

When combined with mutable project memory, this creates two independent transitions:

```text
CHAT LOCATION TRANSITION
+
PROJECT MEMORY-MODE TRANSITION
```

A chat may therefore have:

```text
PRE-PROJECT HISTORY
PROJECT-ATTACHED HISTORY
PRE-MEMORY-SWITCH PROJECT HISTORY
POST-MEMORY-SWITCH PROJECT HISTORY
```

as distinct provenance phases.

## 12. Broader creator-workflow relevance

This update belongs beside other creator-runtime shifts found in the current scan:

- ChatGPT's August 7 paste improvement preserves headings, bold text, links, and lists when text is copied from Google Docs or another ChatGPT conversation on the web;
- Google Drive content can now appear directly in ChatGPT Library and, where supported and authorized, ChatGPT can update source Drive files directly;
- Anthropic's current Cowork artifact system remains persistent, versioned, connected, and viewer-relative;
- Google Sheets Canvas remains a read-write mini-app layer over spreadsheet data.

Together these changes show the same macro trend:

```text
CREATOR SURFACE
-> FEWER MANUAL TRANSFER STEPS
-> MORE PERSISTENT STATE
-> MORE HIDDEN CONTEXT
-> MORE MUTABLE BOUNDARIES
```

Convenience increases while the number of invisible causal layers also increases. Naturally. Humanity has once again simplified the interface by making the backend epistemology worse.

## Fresh category scan

| Area | Status in this run | Deep Drift implication |
|---|---|---|
| Memory | **Major overlooked delta** | Existing projects can change memory topology mid-life |
| Skills/plugins | No stronger fresh delta | Procedural inventory remains separately versioned |
| Mini-app builders | No stronger new delta | Sheets Canvas / Claude artifacts remain current nodes |
| Chat-to-document | Indirect | Document generation can occur before or after a memory-boundary transition in the same project |
| DOCX/PDF | Provenance effect | Static files do not expose which project-memory mode produced them |
| Copy-paste/export | Confirmed prior fix | ChatGPT web preserves rich formatting from Google Docs/ChatGPT pastes |
| Connected files | Confirmed prior trend | Drive content can stay connected and may be updated at source |
| Creator workflow | **Major** | Project settings are becoming mutable runtime policy rather than static setup |

## New failure classes

### Same-Project-Equals-Same-Memory Fallacy
Assuming a stable project identity proves a stable memory boundary.

### Setting-Saved-Equals-Setting-Effective Error
Assuming the new memory mode applies immediately after Save.

### Mode-Equals-Inspectable-State Fallacy
Assuming knowing the configured memory mode reveals all memory content actually influencing responses.

### Memory-Only Change Fallacy
Ignoring that switching to project-only memory also removes ChatGPT Work availability.

### Historical Uniformity Error
Assuming all outputs stored in one project were generated under one memory regime.

### Shared-Project Mutability Error
Assuming a shared project's memory policy can be changed like an eligible private project.

### Boundary-Transition Blindness
Comparing outputs across a memory-mode switch without treating the switch as an experimental intervention.

## Deep Drift benchmark additions

**Project Memory Mode Fidelity (PMMF)**  
Can the memory mode effective for each material project run be reconstructed?

**Boundary Transition Timing Fidelity (BTTF)**  
Can request time, propagation interval, and confirmed effective time remain distinct?

**Context-Flow Revocation Fidelity (CFRF)**  
Can the removal of project information from outside-memory use be represented as a directional policy change?

**Project Capability Coupling Fidelity (PCCF)**  
Can capability changes caused by memory mode, such as Work becoming unavailable, be linked to the policy transition?

**Historical Policy Segmentation Fidelity (HPSF)**  
Can one persistent project's outputs be segmented by the memory regime active when each output was produced?

## DRPA-1.0 protocol additions

### PROJECT-MEMORY TRANSITION RULE

> When a persistent AI project can change between default, isolated, project-only, or equivalent memory modes after creation, every change must be treated as a provenance boundary. Preserve project identity, previous mode, requested new mode, request timestamp, platform-reported propagation interval, confirmed effective state, personal/workspace prerequisites, sharing state, and downstream outputs. Stable project identity must never be treated as proof of stable context-access topology.

### DELAYED-POLICY-EFFECT RULE

> When a platform states that a memory, permission, connector, or execution-policy change may take time to become effective, preserve a distinct transition-pending interval. Runs executed during that interval must not be assigned confidently to either the old or new state unless the effective state is independently verified.

### MEMORY-CAPABILITY COUPLING RULE

> When a memory-boundary choice enables, disables, or otherwise changes access to creator runtimes such as Work, agents, connectors, or tools, record the capability transition separately from the memory transition. Memory configuration must not be modeled as an isolated personalization property when it also alters what the system can execute.

## Eir'an state-flow addition

```text
PROJECT:
project ID
private/shared
owner
instructions revision
file/source revision

MEMORY MODE:
default
project-only
requested mode
effective mode

TRANSITION:
request time
propagation pending
confirmation time

UPSTREAM SETTINGS:
personal memory
reference chat history
workspace memory policy

CONTEXT FLOW:
outside -> project
project -> outside
within-project cross-chat

CAPABILITY:
Work available
Work unavailable
other tool changes

OUTPUT:
run timestamp
memory regime
boundary confidence
artifact ID
```

## Canonical Deep Drift requirement

> Treat project memory as a versioned policy layer rather than a permanent property of the project. When memory mode changes, segment the project timeline into pre-transition, propagation-uncertain, and post-transition phases. Link every material output to the effective memory regime and record any tool or runtime capability changes caused by the transition.

## Deep Drift principle

> **The project can keep its name while changing what it is allowed to remember.**

Operationally:

> **Version the memory boundary every time the project crosses it.**

## Sources

1. OpenAI Help Center. **ChatGPT - Release Notes**, 14 August 2026. Documents changing existing project memory settings, shared-project constraints, propagation delay, and Work incompatibility with project-only memory.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

2. OpenAI Help Center. **Projects in ChatGPT**, current documentation accessed 4 September 2026. Documents project-only versus default memory, mutable existing-project settings, several-hour propagation, cross-project isolation, shared-project behavior, upstream memory requirements, and the absence of a visible project-memory inventory.  
   https://help.openai.com/en/articles/10169521

3. OpenAI Help Center. **ChatGPT - Release Notes**, 7 August 2026. Documents rich-format preservation when pasting from Google Docs or another ChatGPT conversation on web.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

4. OpenAI Help Center. **ChatGPT - Release Notes**, 13 August 2026. Documents Google Drive in Library and, where supported and authorized, direct updates to source Drive files.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

5. Anthropic Help Center. **Use artifacts in Claude Cowork**, current documentation accessed 4 September 2026. Provides the broader persistent/versioned interactive-artifact comparison point.  
   https://support.claude.com/en/articles/14729249-use-artifacts-in-claude-cowork

6. Google Workspace Updates. **Use Sheets canvas to visualize data in custom, interactive mini-apps**, 13 August 2026. Provides the broader read-write mini-app comparison point.  
   https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html

## Research status

**Node status:** New gap-fill node discovered during 4 September scan.  
**Duplicate check:** No matching Deep Drift repository entry was found for mutable existing-project memory mode, delayed policy application, and Work capability coupling as one provenance problem.  
**Relationship to prior nodes:** Extends MMBESF (memory boundaries), CCPSF (context transitions), CRFPF (runtime state), and WMSSF (state survival across environment transitions). PMMTF focuses specifically on a persistent project whose memory topology can change without changing project identity.  
**Freshness:** Feature released 14 August 2026 and still materially relevant; it had not yet been represented as a distinct Deep Drift node during the current ledger audit.
