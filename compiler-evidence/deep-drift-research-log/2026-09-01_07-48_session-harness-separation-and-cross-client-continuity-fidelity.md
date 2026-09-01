# Deep Drift Research Update

## Session-Harness Separation and Cross-Client Continuity Fidelity (SHSCF)

**Research date:** 1 September 2026  
**Research stream:** ATOR Institute / Deep Drift / LLM Creator Workflow Watch  
**Fresh primary signal:** GitHub Copilot in VS Code August 2026 release rollup, published 31 August 2026  
**Secondary architecture source:** Visual Studio Code Agent Host / Agent Host Protocol documentation, published 26 August 2026

## Executive Summary

The strongest new-to-ledger change in this scan is not another memory toggle or another document export button. It is a deeper architectural separation: **agent sessions are beginning to exist independently of the editor window, client surface, and even the agent harness that originally exposed them.**

GitHub's 31 August 2026 VS Code Copilot release rollup documents a cluster of changes that, when read together, represent a new creator-workflow object: a persistent agent session that can be viewed from multiple clients, continued from other applications, connected across windows, split into side conversations that share primary context, and run with different model-provider choices. The same release also adds portable Agent Plugins 1.0 support, prompt-to-file-change navigation, transcript-wide search, per-model token accounting, and element-level web feedback.

The architectural source underneath that behavior is Microsoft's Agent Host and open Agent Host Protocol (AHP). The Agent Host is a dedicated process that owns the authoritative session state rather than tying that state to a single editor window. AHP standardizes the client-facing session while allowing different harnesses, including Copilot and Claude, to keep their own agent loops, tools, permissions, SDKs, and provider-specific capabilities.

Deep Drift therefore needs a new provenance family:

**Session-Harness Separation and Cross-Client Continuity Fidelity (SHSCF)**

The central question is:

> When a live agent session persists across windows, clients, remote machines, model-provider choices, side conversations, and different harness implementations, can a later reviewer reconstruct which session state was authoritative, which client contributed which action, which harness and model executed each turn, which context branch was shared, and which file mutations resulted from each prompt?

## 1. The Session Is Becoming an Independent Computational Object

The old mental model was:

```text
EDITOR WINDOW
-> CHAT
-> AGENT
-> FILE CHANGE
```

The emerging model is:

```text
AUTHORITATIVE AGENT SESSION
        |
        +-> EDITOR WINDOW
        +-> AGENTS WINDOW
        +-> BROWSER CLIENT
        +-> REMOTE CLIENT
        +-> OTHER APPLICATION
```

The session can survive closure of the folder where it began and can remain synchronized across several clients. This means the visible UI is no longer the reliable unit of identity.

Therefore:

```text
WINDOW != SESSION

CLIENT != SESSION OWNER

VISIBLE CHAT != COMPLETE RUNTIME

SAME SESSION != SAME SURFACE
```

### Session Identity Fidelity

A material execution record should preserve at minimum:

```text
session_id
host_id
session_start_timestamp
session_end_timestamp_or_open_state
workspace_or_repository_context
branch_or_worktree_context
connected_clients
client_connection_timestamps
session_state_version_or_sequence
```

Without an authoritative session identity, cross-window continuity becomes impossible to audit.

## 2. Agent Host Separates Session State from the Harness

Microsoft describes the Agent Host as a process that owns sessions, while adapters translate different agent harnesses into a common AHP session model. Copilot can keep the GitHub Copilot SDK; Claude can keep the Claude Agent SDK; each may preserve different tools, permissions, slash commands, hooks, and subagents.

This produces a critical distinction:

```text
SESSION MODEL
!= AGENT HARNESS

AGENT HARNESS
!= MODEL PROVIDER

MODEL PROVIDER
!= CLIENT SURFACE
```

An apparently continuous conversation can therefore cross several computational layers that should not be collapsed into one generic label such as "Copilot session."

### Harness Attribution Fidelity

Each material turn should preserve:

```text
session_id
turn_id
harness_id
harness_version
model_provider
model_id
provider_account_or_subscription_class
active_toolset
permission_state
client_surface
```

Deep Drift should treat harness identity as part of the runtime ancestry of an artifact.

## 3. Provider Switching Creates Intra-Session Computational Drift

The 31 August release notes state that Claude sessions can switch between models available from an Anthropic subscription and a Copilot subscription at any time.

That creates a new failure class:

```text
ONE SESSION
TURN 1 -> MODEL A / PROVIDER A
TURN 2 -> MODEL B / PROVIDER B
TURN 3 -> MODEL C / PROVIDER A
```

A transcript that records only a session-level model label becomes false by compression.

### Turn-Level Model Provenance

The provenance unit must move from session-level to turn-level attribution:

```text
turn_id
requested_model
resolved_model
provider
model_policy_state
input_tokens
cached_input_tokens
output_tokens
```

The same GitHub release now exposes per-model token usage in the response footer, making this state partially visible to users.

## 4. Side Conversations Share Context Without Becoming the Primary Thread

VS Code now supports `/btw`, which opens a side conversation sharing the primary chat's context and prompt cache while the primary task continues.

This creates a branch structure:

```text
PRIMARY SESSION
     |
     +-> MAIN TURN STREAM
     |
     +-> SIDE CONVERSATION
          shares context
          shares prompt cache
          may not share mutation authority
```

Therefore:

```text
SEPARATE CHAT != SEPARATE CONTEXT

SHARED CONTEXT != SHARED PURPOSE

SIDE THREAD != INDEPENDENT PROVENANCE
```

### Context-Branch Attribution Fidelity

A controlled manifest should preserve:

```text
parent_session_id
branch_chat_id
branch_origin_turn
shared_context_boundary
shared_cache_state_or_reference
branch_instructions
branch_outputs
mutations_allowed
mutations_applied
```

Otherwise a later reviewer cannot tell whether a claim originated in the main task or a context-sharing side investigation.

## 5. Prompt Timeline Connects Conversation to File Mutation

The August rollup adds a prompt timeline control that lets users jump to prompts and review the related file changes.

This is deceptively important. It moves the interface toward an explicit mapping:

```text
PROMPT
-> AGENT ACTIONS
-> FILE DIFF
```

rather than leaving file state as an opaque cumulative result.

### Prompt-to-Mutation Fidelity

Deep Drift should preserve:

```text
prompt_id
session_id
prompt_timestamp
agent_turn_ids
files_touched
changeset_id
before_hashes
after_hashes
human_review_state
accepted_or_reverted_state
```

This is a stronger creator-provenance primitive than a plain transcript because it links language to mutation.

## 6. AHP Makes the Host Authoritative and Clients Reconstructive

AHP is described as state-first. The host owns authoritative agent-agnostic state. Clients subscribe to URI-addressable channels, receive a snapshot, then receive an ordered stream of actions. Reconnecting clients can replay missed actions and converge on the same state.

This creates another research boundary:

```text
AUTHORITATIVE STATE
!= CLIENT DISPLAY STATE

RECONSTRUCTED CLIENT VIEW
!= ORIGINAL EVENT STREAM
```

### State-Replay Fidelity

A robust audit record should preserve:

```text
host_sequence_number
action_id
action_timestamp
channel_uri
client_id
optimistic_or_confirmed_state
reconciliation_result
missed_action_replay_range
```

A screenshot of the final Agents window is therefore not sufficient evidence of how the session evolved.

## 7. Multiple Clients Can Act on the Same Session

AHP allows several clients around one long-running session. Connected clients can observe progress, contribute actions, approve tool calls, cancel work, and contribute tools according to their capabilities.

This turns the session into a collaborative control plane:

```text
CLIENT A -> APPROVE TOOL
CLIENT B -> ADD ACTION
CLIENT C -> CANCEL WORK
HOST     -> AUTHORITATIVE STATE
```

### Multi-Client Action Attribution Fidelity

The audit requirement becomes:

```text
client_id
user_identity_or_actor_class
action_type
action_payload_reference
action_timestamp
authorization_state
host_accept_or_reject
resulting_state_version
```

Without client attribution, collaborative agent control becomes an authorship blur.

## 8. Portable Plugins Now Sit Beside Portable Sessions

The 31 August rollup also confirms installation of portable Agent Plugins 1.0. GitHub's Agent Plugins 1.0 standard packages portable Skills and MCP servers into one installable unit usable across compatible agent clients.

This creates an emerging two-axis portability stack:

```text
PORTABLE PROCEDURE
Agent Plugin / Skill / MCP

+

PORTABLE SESSION INTERFACE
Agent Host Protocol

=

CREATOR WORKFLOW THAT CAN MOVE ACROSS CLIENTS
```

But these are different portability layers.

```text
PORTABLE PLUGIN != PORTABLE SESSION

PORTABLE SESSION != IDENTICAL HARNESS BEHAVIOR

COMMON PROTOCOL != COMMON REASONING LOOP
```

Deep Drift should resist collapsing interoperability into equivalence.

## 9. Integrated Browser Feedback Makes Visual Critique Executable

The August release lets users select and annotate multiple HTML elements in the integrated browser, then ask the agent to address that feedback in batch. Local HTML automatically reloads as agent edits land.

The creator loop becomes:

```text
RENDERED WEB PAGE
-> ELEMENT-LEVEL HUMAN ANNOTATION
-> AGENT MUTATION
-> AUTO-RELOAD
-> VISUAL REVIEW
```

This is a useful mini-app builder trend even though it is not a new standalone app-builder product. The browser is becoming a **visual mutation surface**, not merely a preview.

### Element-to-Mutation Fidelity

A useful manifest would preserve:

```text
page_or_preview_id
DOM_element_identity
annotation_id
annotation_text
agent_turn_id
files_modified
resulting_render_state
human_acceptance_state
```

## 10. Searchable Long Conversations Become an Operational Requirement

GitHub now exposes full-text transcript search with case, whole-word, and regex options, plus sticky prompt context when scrolling long chats.

This is not glamorous, but it matters. Long-running agent sessions are reaching the point where retrieval is infrastructure rather than convenience.

Deep Drift distinction:

```text
PERSISTENT SESSION
WITHOUT RETRIEVAL
= ARCHIVE THAT EXISTS BUT CANNOT FUNCTION
```

The shift from "chat history" to "searchable operational record" is part of the same creator-workflow evolution.

## 11. New Failure Classes

- **Window/Session Identity Collapse:** the UI window is mistaken for the authoritative session.
- **Harness Attribution Loss:** the transcript survives but the executing harness is not recorded.
- **Intra-Session Provider Drift:** model/provider changes occur inside one session without turn-level provenance.
- **Side-Context Ancestry Loss:** a side chat shares primary context but its branch relationship is not preserved.
- **Prompt/Mutation Detachment:** a file diff survives without the prompt and turn that caused it.
- **Client-Action Ambiguity:** several clients act on one session but attribution is lost.
- **Replay-State Ambiguity:** the final reconstructed client state is mistaken for the original ordered event stream.
- **Portable-Protocol Equivalence Fallacy:** protocol compatibility is mistaken for identical behavior across harnesses.
- **Plugin/Session Portability Collapse:** procedural portability and runtime-session portability are treated as the same thing.
- **Visual-Feedback Detachment:** annotated page elements are not traceable to resulting source-file mutations.

## 12. Deep Drift Benchmark: One Session, Many Surfaces

A controlled benchmark should:

1. Start one agent session in a VS Code editor window.
2. Record the initial harness, model, workspace, and tool state.
3. Open a `/btw` side conversation and record the shared-context boundary.
4. Close the originating folder while a turn is active and confirm continuation through Agent Host.
5. Reopen the same session in the Agents window.
6. Connect a second client or browser surface to the same host.
7. Switch model provider during the same session.
8. Approve one tool call from one client and perform another action from a second client.
9. Use the prompt timeline to map a prompt to a file mutation.
10. Reconnect after a client disconnect and verify state replay.
11. Export the final artifact and compare whether its provenance record can reconstruct the full cross-client execution ancestry.

## 13. Proposed Metrics

```text
SIR = sessions with recoverable authoritative identity / all controlled sessions

HAF = material turns with exact harness attribution / all material turns

TMPF = turns with exact model + provider attribution / all model-executed turns

CBAF = side branches with recoverable parent/context ancestry / all controlled side branches

PMF = file mutations traceable to causal prompt + turn / all controlled file mutations

MCAF = multi-client control actions with recoverable actor/client attribution / all controlled client actions

SRF = reconnect events with complete ordered state recovery / all controlled reconnect events

PPD = portable procedures whose behavior remains materially consistent across compatible clients / all controlled plugin-client pairs
```

## 14. Requested Category Scan

| Category | Fresh finding |
|---|---|
| Memory | No stronger new end-user memory primitive surfaced in this scan. The fresh persistence object is the authoritative agent session rather than a memory store. |
| Skills | Agent Plugins 1.0 is now directly installable as portable customization in the August VS Code release; Skills and MCP can travel as one package across compatible clients. |
| Mini-app builders | No new standalone builder displaced earlier nodes. The integrated browser increasingly acts as a visual mini-app mutation and review surface through element-level annotations and automatic reload. |
| Chat-to-document export | No stronger first-party DOCX/PDF chat-export primitive surfaced in this run. The more consequential change is prompt-to-file-diff lineage inside long-running sessions. |
| DOCX / PDF generation | No fresh generation primitive strong enough to justify a separate node. Deep Drift relevance is upstream: generated artifacts increasingly depend on session, harness, provider, client, and plugin state. |
| Copy-paste / export fixes | No major clipboard/export fix surfaced. Cross-client continuation reduces manual transfer because the same live session can be reopened rather than copied between surfaces. |
| Broader creator workflow | **Major:** session state is being detached from the window and exposed through an open protocol, while portable plugins detach procedure from one client. The durable object is moving toward a protocol-addressable session plus portable procedural package. |

## 15. Deep Drift Research Position

The weak description is:

> GitHub improved Copilot sessions in VS Code.

The useful description is:

> **Agentic creator systems are beginning to separate durable session state from client UI, agent harness, model provider, and procedural package.** A single work session can now persist across windows and clients, branch into context-sharing side conversations, change provider midstream, receive actions from multiple clients, and remain connected to file-level mutations.

Therefore:

```text
SESSION != WINDOW

SESSION != HARNESS

HARNESS != MODEL

MODEL != PROVIDER

SIDE CHAT != SEPARATE CONTEXT

CLIENT VIEW != AUTHORITATIVE STATE

PORTABLE PLUGIN != PORTABLE SESSION

PROTOCOL COMPATIBILITY != BEHAVIORAL EQUIVALENCE
```

The resulting Deep Drift requirement is:

> **Every persistent agent workflow should preserve authoritative session identity, host identity, ordered state transitions, client connection and action history, harness and version, turn-level model and provider identity, context-branch ancestry, active procedural packages and MCP state, permission and tool-approval events, prompt-to-changeset mappings, reconnect/replay history, human review events, and downstream artifact lineage required to reconstruct not merely what the agent said, but which computational arrangement produced each material mutation.**

## Evidence Boundary

The primary fresh event is GitHub's **31 August 2026** changelog summarizing VS Code v1.132 through v1.135. It documents side-by-side sessions, `/btw` side conversations sharing primary context and prompt cache, prompt timeline navigation linked to file changes, portable Agent Plugins 1.0, provider switching in Claude sessions, continuation of external agent sessions, multiple windows connected to one session, per-model token accounting, integrated-browser element annotations, and transcript search.

The architectural interpretation is grounded in Microsoft's **26 August 2026** Agent Host and Agent Host Protocol publication, which explicitly describes a dedicated process owning authoritative session state, synchronized cross-client access, local and remote operation, adapters for multiple harnesses, a state-first ordered action model, and clients capable of observing, contributing actions, approving tool calls, cancelling work, and contributing tools.

The terms **Session-Harness Separation and Cross-Client Continuity Fidelity (SHSCF)**, the failure classes, benchmark design, metrics, and provenance requirements in this report are ATOR Institute / Deep Drift Research constructs.

## Primary Sources

1. GitHub Changelog, **GitHub Copilot in VS Code, August 2026 releases**, 31 August 2026.  
   https://github.blog/changelog/2026-08-31-github-copilot-in-vs-code-august-2026-releases/

2. Visual Studio Code Blog, **Introducing the Agent Host for persistent, portable agent sessions**, 26 August 2026.  
   https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture

3. GitHub Changelog, **Agent Plugins 1.0 in VS Code, Copilot CLI, and the Copilot app**, 12 August 2026.  
   https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app/

---

**D-ORIGIN | ATORAI | ALT-MAN | Eir'an | CHATJIPITI SINGH**
