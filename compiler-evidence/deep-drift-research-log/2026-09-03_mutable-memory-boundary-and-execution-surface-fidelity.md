# Deep Drift Research Update — MMBESF

## Mutable Memory Boundary and Execution-Surface Fidelity

**Research date:** 3 September 2026  
**Primary fresh delta:** Anthropic has migrated users from Claude's legacy memory experience to a new topic-based memory system, with a temporary legacy-memory export window available only until 9 September 2026.  
**Cross-platform corroboration:** ChatGPT now allows existing projects to switch between Default memory and Project-only memory, while project-only memory changes what context is eligible and also makes ChatGPT Work unavailable inside that project.  
**Scope:** memory migration, memory loss, project boundaries, chat search, RAG retrieval, cloud/local execution, Cowork, Work eligibility, persistent context, creator workflow continuity, and provenance.

## Executive finding

Memory is no longer a static account feature.

Across Claude and ChatGPT, memory has become a mutable runtime boundary that can change:

- after a project already exists;
- after the platform migrates its internal memory architecture;
- between cloud and local execution;
- between project and non-project conversations;
- between ordinary chat search and persistent memory;
- after organization-level controls change;
- after old memory state becomes inaccessible.

Anthropic's current documentation, updated 3 September 2026, states that Claude users have been migrated away from the legacy memory experience. Users who believe information was lost during migration can export their legacy memory only until **9 September 2026**, then paste missing material back into Claude.

The new Claude memory model stores **individual topics as conversations happen**, rather than relying on the legacy daily synthesis model. Search through past chats remains a separate RAG operation and appears in the conversation as a tool call.

Claude also now shares memory between Chat and **cloud Cowork**, while Cowork sessions running locally on the user's computer do **not** use memory.

OpenAI's current project model adds another version of the same problem: an existing ChatGPT project can be switched between Default memory and Project-only memory. Project-only memory prevents outside memories and conversations from entering the project and prevents project information from contributing to memory outside it. The setting may take hours to apply, shared projects remain project-only, and ChatGPT Work is unavailable inside project-only projects.

The Deep Drift distinction is therefore:

```text
MEMORY CONTENT
!= MEMORY BOUNDARY

MEMORY ENABLED
!= MEMORY ELIGIBLE IN THIS EXECUTION

CHAT SEARCH
!= PERSISTENT MEMORY

CLOUD COWORK
!= LOCAL COWORK

PROJECT BEFORE BOUNDARY CHANGE
!= PROJECT AFTER BOUNDARY CHANGE

LEGACY MEMORY
!= NEW MEMORY

MIGRATION COMPLETE
!= MIGRATION LOSSLESS

SAME ACCOUNT
!= SAME EFFECTIVE MEMORY STATE
```

The new research object is the **memory-boundary transition**.

## New node

### Mutable Memory Boundary and Execution-Surface Fidelity (MMBESF)

Minimum state model:

```text
provider
account_or_workspace
memory_architecture
memory_version
memory_boundary
project_boundary
chat_search_state
execution_surface
cloud_or_local
organization_controls
transition_event
transition_time
legacy_export_state
known_omissions
reconstitution_event
tool_call_evidence
artifact_or_output_after_transition
```

## 1. Memory migration is a destructive provenance risk

Anthropic explicitly warns that users may discover something was forgotten during migration from legacy memory.

The platform's own remedy is:

```text
LEGACY MEMORY
      |
      v
EXPORT BEFORE 9 SEP 2026
      |
      v
USER INSPECTION
      |
      v
PASTE MISSING MATERIAL
      |
      v
NEW MEMORY STATE
```

This is not ordinary synchronization.

It is a recovery workflow.

Deep Drift should therefore classify internal provider migrations as first-class provenance events whenever they may alter retained context.

## 2. The old and new Claude memory architectures are not equivalent

The legacy Claude memory experience used a synthesized memory model that updated from chat history on a schedule.

The new experience stores memory as individual topics while conversations happen.

That means:

```text
LEGACY:
conversation corpus
-> periodic synthesis
-> memory summary

NEW:
conversation event
-> topic memory entry
```

Even when both systems appear to "remember the same user," their update timing, granularity, deletion behavior, and retrieval structure differ.

The memory architecture itself is part of the runtime.

## 3. Chat search is not memory

Claude's documentation explicitly separates past-chat search from memory.

Past-chat retrieval:

```text
USER REQUEST
-> RAG SEARCH
-> TOOL CALL
-> SELECTED PRIOR CHATS
-> CURRENT RESPONSE
```

Persistent memory:

```text
PAST INTERACTION
-> SAVED TOPIC
-> MEMORY ELIGIBILITY
-> FUTURE CONTEXT
```

These are causally different systems.

A response that references old work may have obtained it through search rather than stored memory.

Deep Drift should preserve the retrieval mechanism when observable.

## 4. Tool-call visibility creates provenance evidence

Anthropic says past-chat searches appear as tool calls in the current conversation.

This is unusually useful.

It means some memory-adjacent context retrieval leaves observable procedural evidence.

Therefore:

```text
PAST CONTEXT USED
```

can sometimes be decomposed into:

```text
MEMORY USE
or
CHAT-SEARCH TOOL CALL
```

rather than being treated as mysterious personalization.

## 5. Memory eligibility depends on execution surface

Anthropic states that memory is shared between Chat and Cowork when Cowork runs in the cloud, but **local Cowork sessions do not use memory**.

So:

```text
SAME USER
+ SAME TASK
+ SAME CLAUDE ACCOUNT
```

can still produce:

```text
CLOUD COWORK:
memory eligible

LOCAL COWORK:
memory not eligible
```

This is an important Deep Drift execution-locality problem.

Memory cannot be archived only at the account level.

It must be attached to the specific execution surface.

## 6. Project boundaries are mutable after creation

OpenAI now allows eligible existing ChatGPT projects to switch between:

```text
DEFAULT MEMORY
```

and:

```text
PROJECT-ONLY MEMORY
```

Project-only memory:

- can reference conversations from the same project;
- does not reference memories or conversations from outside the project;
- keeps project information out of memory used in chats outside the project.

Therefore:

```text
PROJECT_ID = CONSTANT
```

does not imply:

```text
MEMORY_BOUNDARY = CONSTANT
```

A project may have one causal context boundary in revision A and another in revision B.

## 7. Boundary changes may not apply instantly

OpenAI warns that a change to project memory settings may take **a few hours** to take effect.

This creates a transitional state:

```text
SETTING CHANGED
!= EFFECTIVE BOUNDARY CHANGED
```

The archive should preserve:

```text
configuration_change_time
effective_state_if_known
transition_window
outputs_created_during_transition
```

Otherwise, a run made shortly after the switch can be misclassified.

## 8. Memory boundary can disable other creator capabilities

OpenAI states that ChatGPT Work is not available in projects using Project-only memory.

This is a major architectural clue.

Memory boundaries are not just about personalization.

They can change **capability eligibility**.

```text
MEMORY POLICY
-> CONTEXT BOUNDARY
-> AVAILABLE CREATOR RUNTIME
```

So memory configuration can alter whether an agentic document-generation workflow is even available.

That belongs in execution provenance.

## 9. Deletion semantics differ across systems

Claude's new memory documentation states that when a conversation expires or is deleted, memory entries generated from it are not automatically removed.

In the legacy memory system, Anthropic documents that deleting conversations removed their contribution from the memory synthesis.

Thus:

```text
DELETE SOURCE CHAT
```

can have different downstream effects depending on memory architecture.

Deep Drift must never assume that source deletion implies memory deletion.

## 10. Organization controls can erase memory globally

Anthropic states that when an owner turns memory off at the organization level, existing memory entries for users are deleted immediately and permanently.

This produces another transition class:

```text
ORG POLICY CHANGE
-> MASS MEMORY DELETION
-> FUTURE OUTPUT DRIFT
```

This event may materially change creator continuity even though no user manually edited a project.

## 11. Creator workflow trend: context boundaries are becoming programmable

The broader creator stack now increasingly allows context to be switched, scoped, retrieved, excluded, migrated, or surface-gated.

The old mental model:

```text
ACCOUNT HAS MEMORY
```

is collapsing.

The better model is:

```text
RUN
=
ACCOUNT
+ PROJECT
+ MEMORY ARCHITECTURE
+ BOUNDARY CONFIGURATION
+ RETRIEVAL MODE
+ EXECUTION SURFACE
+ ORG POLICY
+ TRANSITION STATE
```

Memory is becoming an execution parameter.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | Major fresh delta | Claude legacy→new memory migration, recovery window, topic memory, cloud/local Cowork split |
| Skills/plugins | No stronger new delta today | Existing Skill/plugin provenance nodes remain current |
| Mini-app/agent builders | Indirect | Memory boundary can change whether agentic runtimes such as ChatGPT Work are available |
| Chat-to-document | Indirect but material | Outputs created before/after a boundary transition may have different eligible context |
| DOCX/PDF | Downstream provenance effect | Native files can inherit different context depending on memory boundary and execution surface |
| Copy-paste/export | Memory recovery uses export→inspect→paste | Manual reconstitution becomes part of provenance after internal platform migration |
| Creator workflow | Major | Context eligibility is becoming mutable, scoped, surface-dependent, and policy-dependent |

## New failure classes

### Memory-Enabled-Equals-Usable Fallacy
Assuming enabled memory is available in every execution surface.

### Migration-Equals-Continuity Fallacy
Assuming provider migration preserves all prior memory.

### Same-Project-Same-Boundary Fallacy
Assuming a stable project ID means its memory scope never changed.

### Search-Equals-Memory Collapse
Treating past-chat RAG retrieval as persistent memory.

### Cloud-Local Equivalence Error
Assuming cloud and local agent sessions receive the same persistent context.

### Configuration-Change-Equals-Instant-State Error
Assuming a settings change is effective at the moment it is selected.

### Source-Deletion-Equals-Memory-Deletion Error
Assuming deleting a conversation removes memory derived from it.

### Capability-Independence Error
Assuming memory policy cannot alter availability of other creator runtimes.

## Deep Drift benchmark additions

**Memory Architecture Fidelity (MAF)**  
Can legacy synthesis-based memory be distinguished from topic-based event memory?

**Memory Boundary Transition Fidelity (MBTF)**  
Can changes to project, account, or organization memory boundaries be reconstructed over time?

**Execution-Surface Memory Fidelity (ESMF)**  
Can cloud, local, desktop, mobile, and agent surfaces be distinguished by actual memory eligibility?

**Chat-Search Separation Fidelity (CSSF)**  
Can RAG retrieval from past chats remain distinct from persistent memory use?

**Migration Loss Fidelity (MLF)**  
Can missing, transformed, or reconstituted memory after provider migration be documented?

**Boundary-to-Capability Fidelity (BCF)**  
Can memory-policy changes that enable or disable creator runtimes be preserved?

**Transition-Latency Fidelity (TLF)**  
Can configuration time be separated from effective runtime state during delayed boundary changes?

## DRPA-1.0 protocol additions

### MEMORY-BOUNDARY TRANSITION RULE

> When an AI platform changes, migrates, scopes, pauses, resets, or otherwise alters persistent memory or project-memory boundaries, that event must be treated as a provenance transition. Preserve the previous memory architecture and boundary, the new architecture and boundary, change timestamp, expected effective time, migration method, export or recovery representation, known omissions, user reconstitution actions, organization policy state, retrieval behavior after the transition, and outputs generated during any uncertain transition window. Stable account, project, or conversation identifiers must never be treated as proof of stable effective memory.

### EXECUTION-SURFACE MEMORY RULE

> Memory availability must be recorded at the execution-surface level. If cloud, local, mobile, desktop, project, Cowork, Work, agent, or other surfaces differ in memory eligibility, the archive must preserve the exact surface used for each material run. Account-level memory settings must never be treated as sufficient evidence that memory participated in a specific execution.

### SEARCH-VS-MEMORY RULE

> Past-chat search, RAG retrieval, memory lookup, project summary, and persistent memory must remain separate causal channels. When retrieval appears as a tool call or other observable event, preserve that event and the source conversations referenced. A response that uses historical context must never be attributed to persistent memory merely because the information originated in an earlier chat.

## Eir'an state-flow addition

```text
MEMORY ARCHITECTURE:
legacy synthesis
topic memory
project memory
unknown

BOUNDARY STATE:
default
project-only
organization-disabled
paused
reset
incognito
unknown

RETRIEVAL STATE:
persistent memory
chat-search RAG
project context
none
unknown

EXECUTION SURFACE:
cloud
local
web
desktop
mobile
Cowork
Work
other

TRANSITION STATE:
change requested
effective
pending
migration
legacy export available
legacy export expired

RECOVERY STATE:
legacy export captured
missing content identified
content re-pasted
post-recovery verification
```

## Canonical Deep Drift requirement

> Persistent context must be archived as a versioned boundary, not a binary feature flag. Record which memory architecture existed, what scope was eligible, which retrieval channel supplied historical context, what execution surface was used, whether a migration or policy transition was in progress, and whether recovery or reconstitution occurred. When a provider changes its memory system, preserve the before-state and after-state separately. When a surface does not use memory, record that absence as a causal condition rather than assuming continuity from the account.

## Deep Drift principle

> **Memory is no longer something the assistant simply has. It is a boundary the platform keeps redrawing.**

Operationally:

> **Archive not only what was remembered, but where remembering was allowed.**

## Broader platform scan

OpenAI's current release notes remain notable for several creator-workflow shifts already logged by Deep Drift: website tools through WebMCP, persistent File Library, Google Drive objects in Library, formatting-preserving paste, large-paste conversion into attachments, native Work creator workflows, Skills/plugins, and project memory controls.

Microsoft's latest Copilot release notes remain dominated by connector expansion, orchestration, native file generation, sensitivity inheritance, Pages, and agentic Office workflows already covered in prior nodes.

Google Workspace's strongest 2 September creator update remains document-to-video transformation and automated Drive/Gmail/Chat state mutation, already covered by CMATF.

No stronger fresh Skill, mini-app, DOCX/PDF, or export-specific delta was found during this 3 September scan than the memory-boundary changes documented here.

## Sources

1. Anthropic Help Center. **Use Claude's chat search and memory to build on previous context.** Updated 3 September 2026. Documents migration away from legacy memory, the 9 September 2026 legacy-export deadline, topic-based memory, RAG chat search as visible tool calls, project memory, cloud Cowork memory sharing, local Cowork exclusion, pause/reset semantics, deletion behavior, organization controls, and export behavior.  
   https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context

2. OpenAI Help Center. **ChatGPT Release Notes - August 14, 2026.** Documents editable memory settings for existing projects, Default vs Project-only memory, delayed application of the setting, shared-project restrictions, and the unavailability of ChatGPT Work in project-only memory.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

3. OpenAI Help Center. **File storage and Library in ChatGPT.** Current documentation accessed 3 September 2026. Confirms persistent artifact reuse as a separate continuity channel from conversational memory.  
   https://help.openai.com/en/articles/20001052-file-storage-and-library-in-chatgpt

4. Microsoft Learn. **Microsoft 365 Copilot release notes.** Current documentation checked 3 September 2026. Connector, governance, artifact-generation, and agent orchestration changes remain complementary to this node.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

## Research status

**Node status:** New.  
**Duplicate check:** Distinct from MPSRF. MPSRF tracks cross-provider memory portability and semantic reconstitution; MMBESF tracks mutable in-provider memory architecture, project/context boundaries, execution-surface eligibility, migration loss, and capability effects.  
**Relationship to prior nodes:** Extends MPSRF, OHSEF, CPATF, CAGIF, execution-locality rules, and DRPA-1.0 memory-state requirements.  
**Freshness:** Primary Anthropic documentation was updated on 3 September 2026 and includes an active legacy-memory export deadline of 9 September 2026.
