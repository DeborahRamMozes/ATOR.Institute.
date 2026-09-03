# Deep Drift Research Update - HASPF

## Human-Approval Scope and Persistence Fidelity

**Research date:** 4 September 2026  
**Primary fresh delta:** Microsoft Copilot Studio has added a September 2026 rollout for human approval gates on specific agent tools. Makers can configure approval per tool and per agent; when a gated tool call occurs, execution pauses and shows what the agent intends to do. The human can approve, approve for the session, or deny. Microsoft states that this control is independent of the agent's instructions and appears inline in deployment channels including Microsoft Teams and Microsoft 365 Copilot.  
**Scope:** agent builders, tool execution, human-in-the-loop approvals, session-persistent permission state, creator workflow reproducibility, automation, connectors, and cross-channel execution.

## Executive finding

The creator-workflow change is not simply that a human can click "approve."

Approval has become a **versionable execution dependency**.

The effective run is now:

```text
AGENT INSTRUCTIONS
      |
      v
TOOL CALL INTENT
      |
      v
EXTERNAL APPROVAL POLICY
      |
      +--> APPROVE ONCE
      +--> APPROVE FOR SESSION
      +--> DENY
      |
      v
EXECUTION / NON-EXECUTION
```

For Deep Drift:

```text
SAME PROMPT
!= SAME EXECUTION PERMISSION

SAME AGENT
!= SAME TOOL-ACTION PATH

TOOL AVAILABLE
!= TOOL AUTHORIZED FOR THIS CALL

APPROVE ONCE
!= APPROVE FOR SESSION

SESSION CONTINUITY
CAN INCLUDE APPROVAL CONTINUITY

AGENT INSTRUCTIONS
!= COMPLETE EXECUTION POLICY
```

The new research object is the **human-approval state graph**.

## New node

### Human-Approval Scope and Persistence Fidelity (HASPF)

Minimum state model:

```text
agent_id
agent_version
tool_id
tool_version
gate_enabled
approval_policy
requested_action
request_time
approver_identity_or_role
approval_decision
approval_scope
approval_duration
session_id
channel
execution_time
execution_result
reused_approval_state
revocation_event
```

## 1. Human approval is outside the prompt

Microsoft explicitly describes the approval gate as independent of the agent's instructions.

That matters because an archived system prompt or agent configuration no longer describes the full execution policy.

```text
AGENT CONFIGURATION
+
EXTERNAL APPROVAL CONFIGURATION
=
EFFECTIVE EXECUTION POLICY
```

A reproducibility archive that saves only prompts, tools, and model configuration can still miss the condition that decided whether a side effect happened.

## 2. Approval scope has semantics

Microsoft exposes at least three decisions:

```text
APPROVE
APPROVE FOR SESSION
DENY
```

These are not equivalent UI labels.

They encode different future behavior.

An approval for one action authorizes one event. A session approval can affect later calls without requiring another human intervention.

Therefore:

```text
HUMAN DECISION
!= SINGLE BOOLEAN
```

Deep Drift must preserve scope and lifetime.

## 3. Session approval creates procedural memory

An "approve for session" decision introduces a state that survives beyond the action that created it.

This behaves like procedural memory:

```text
TOOL CALL 1
-> HUMAN APPROVES FOR SESSION
-> SESSION STATE CHANGES

TOOL CALL 2
-> MAY EXECUTE UNDER INHERITED APPROVAL
```

The second action can therefore depend on a human decision made earlier in the session even if the second prompt contains no approval language.

This extends CCPSF: semantic conversation state and execution-approval state can have separate persistence rules.

## 4. Approval is per-tool and per-agent

Microsoft describes the gate as a **per-tool, per-agent toggle**.

So approval policy belongs to the ordered pair:

```text
(agent, tool)
```

not merely to the user, workspace, or connector.

Two agents with access to the same tool can therefore have different approval requirements.

Likewise, one agent can require approval for Tool A while calling Tool B without the same gate.

The correct provenance record must capture both identities.

## 5. Tool availability and tool executability diverge

A tool may be installed, connected, and technically available while execution is paused pending approval.

Therefore:

```text
TOOL INSTALLED
!= TOOL EXECUTABLE NOW

TOOL CONNECTED
!= ACTION AUTHORIZED
```

This distinction matters for Skills/plugin inventories as well. Inventory tells us what could potentially be invoked; approval state tells us what was permitted to run.

## 6. Denial is a provenance event

A denied tool call is not "nothing happened."

It is a causal branch:

```text
AGENT INTENDED ACTION
-> APPROVAL REQUEST
-> DENY
-> ACTION NOT EXECUTED
-> AGENT MAY REPLAN
```

The denial can alter subsequent reasoning, alternative tool selection, or fallback output.

Deep Drift must preserve denied actions and not merely successful tool traces.

## 7. Approval requests expose action intent

Microsoft says the approval request describes what the agent intends to do.

That description is a valuable provenance object because it sits between internal planning and external execution.

A complete record should preserve:

```text
agent-requested action
human-visible action description
human decision
actual executed action
```

These may not be perfectly identical.

Comparing them can reveal transformation between intent, policy presentation, and execution.

## 8. Cross-channel approval changes surface provenance

Microsoft says approval requests appear inline in the channel where the agent is deployed, including Teams and Microsoft 365 Copilot.

The same agent can therefore receive human authorization through different surfaces.

```text
AGENT
   |
   +--> TEAMS APPROVAL
   +--> M365 COPILOT APPROVAL
   +--> OTHER SUPPORTED CHANNEL
```

Channel becomes part of the approval provenance because identity resolution, visibility, UI context, and session boundaries can differ by surface.

## 9. Approval state changes longitudinal experiments

A Deep Drift test can begin with no session-level approval, then acquire one midway.

```text
RUN A
-> TOOL CALL
-> HUMAN APPROVAL REQUIRED

RUN B / SAME SESSION
-> TOOL CALL
-> PREVIOUS SESSION APPROVAL MAY APPLY
```

If the archive ignores this transition, Run B can appear "more autonomous" even though the agent did not become more autonomous. The permission environment changed.

That is observer/runtime drift.

## 10. Agent builders are becoming policy builders

The broader creator trend is clear: mini-app and agent builders are no longer just interfaces for prompts and tools.

They increasingly define:

```text
TOOLS
KNOWLEDGE
MEMORY
APPROVALS
ROLES
CHANNELS
RUNTIME POLICY
```

Building an agent is becoming partly an exercise in executable governance.

That means creator provenance must archive policy configuration as carefully as prompt configuration.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | Procedural extension | Session approval acts as execution-state memory distinct from semantic memory |
| Skills/plugins | Major adjacent effect | Tool inventory no longer predicts actual executability without approval state |
| Mini-app / agent builders | **Major fresh delta** | Human gates are configurable per tool and per agent |
| Chat-to-document | Downstream implication | Document-producing agents may be blocked or allowed by inherited session approval state |
| DOCX/PDF | Provenance implication | A final file cannot reveal whether upstream tool actions required, inherited, or were denied approval |
| Copy-paste/export | No stronger direct fix found | Earlier export-seam nodes remain current |
| Connected apps | Major | Connected access and action authorization become separate layers |
| Creator workflow | **Major** | Human decisions become persistent runtime state rather than informal supervision |

## New failure classes

### Prompt-Equals-Policy Fallacy
Assuming agent instructions contain the complete execution policy.

### Tool-Available-Equals-Executable Error
Assuming an installed and connected tool can execute without an approval gate.

### Approval-Equals-Boolean Fallacy
Recording only approved/denied while losing approval scope and lifetime.

### Session-Approval Blindness
Ignoring inherited approval state that changes later tool calls in the same session.

### Denial-Erasure Error
Dropping denied tool calls from provenance because no side effect occurred.

### Agent-Tool Scope Collapse
Recording approval at workspace level while ignoring per-agent/per-tool configuration.

### Channel-Neutrality Fallacy
Assuming an approval obtained in one deployment surface is provenance-equivalent to another without checking session and identity semantics.

## Deep Drift benchmark additions

**Approval Scope Fidelity (ASF)**  
Can the archive distinguish one-time, session-wide, denied, revoked, and other approval scopes?

**Agent-Tool Gate Fidelity (ATGF)**  
Can approval policy be traced to the exact agent/tool pair it governed?

**Approval Persistence Fidelity (APF)**  
Can inherited approval state be tracked across later actions in the same session?

**Denied-Action Fidelity (DAF)**  
Can intended-but-denied actions remain part of the causal graph?

**Action-Intent Presentation Fidelity (AIPF)**  
Can the human-visible approval description be compared with the requested and actually executed action?

**Approval-Channel Fidelity (ACF)**  
Can the surface through which authorization was granted be preserved?

## DRPA-1.0 protocol additions

### HUMAN-APPROVAL STATE RULE

> When an AI creator or agent runtime requires human authorization before executing a tool, the approval event must be treated as a versioned provenance object. Preserve agent identity and revision, tool identity, requested action, human-visible action description, approver identity or role where observable, decision, approval scope, duration, session, channel, resulting execution, and any reuse or revocation of approval state. Tool availability or connector authorization must never be treated as proof that the action was executable without human approval.

### SESSION-APPROVAL PERSISTENCE RULE

> When a platform permits approval to persist for a session, later tool actions must record whether they executed under inherited approval state. A later action that does not display a fresh approval dialog must not be treated as autonomously authorized. Session approval is procedural memory and must be versioned separately from semantic conversation memory.

### DENIED-ACTION PRESERVATION RULE

> A denied tool call must remain in the provenance graph as an intended action that was blocked by human decision. Preserve the denied request and any subsequent replanning or fallback behavior. Absence of a side effect must not be interpreted as absence of a causal event.

## Eir'an state-flow addition

```text
AGENT:
agent ID
revision
channel

TOOL:
tool ID
gate enabled
connector state

APPROVAL REQUEST:
action intent
human-visible description
timestamp

DECISION:
approve once
approve for session
deny
revoke / expire

PERSISTENCE:
session ID
approval inherited?
next affected call

EXECUTION:
executed
blocked
replanned
result
```

## Canonical Deep Drift requirement

> Treat human authorization as runtime state, not commentary around the run. Preserve the complete approval lifecycle independently from prompts, connector state, and tool inventory. When approval persists for a session, every later action influenced by that inherited permission must remain linked to the decision that enabled it.

## Deep Drift principle

> **The human did not leave the loop. The loop learned to cache the human.**

Operationally:

> **Archive the permission that made the action possible, not only the action that happened.**

## Broader platform scan

OpenAI's general ChatGPT release feed still shows 1 September 2026 as the latest general ChatGPT entry found in this scan. The September 3 Codex context-management and plugin-marketplace changes remain covered by CCPSF.

Anthropic's Cowork artifact and migration documentation continues to expose important viewer-relative, workspace-migration, and artifact-state behavior, but those changes are already represented by VRAEF and WMSSF.

Google Workspace's recent persistent Gemini instructions and Canvas changes remain covered by existing Deep Drift nodes.

Microsoft's September 2026 roadmap provides the strongest uncovered creator-workflow delta in this run: per-tool, per-agent human approval with one-time/session/deny semantics. A neighboring September rollout also embeds agent nodes directly into workflows, reinforcing the broader shift from conversational assistants toward governed executable runtimes.

## Sources

1. Microsoft 365 / Microsoft Copilot Studio roadmap. **Require human approval before agents run specific tools** (Roadmap ID 570434). Added 1 September 2026; September 2026 rollout. Microsoft documents a per-tool, per-agent toggle, execution pause, intended-action description, and the choices to approve, approve for the session, or deny, with approval requests surfaced inline in deployment channels.  
   https://www.microsoft.com/en-us/microsoft-365/roadmap

2. Microsoft Learn / Microsoft Copilot Studio roadmap. **Invoke agents as workflow steps with the agent node.** September 2026 rollout. Documents embedding agent reasoning and tool calls directly as workflow steps, reducing manual handoffs and increasing the importance of runtime governance state.  
   https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/microsoft-copilot-studio/invoke-agents-as-workflow-steps-agent-node

3. OpenAI. **Release Notes.** Checked 4 September 2026. Latest general ChatGPT entry found in this run remains 1 September 2026.  
   https://openai.com/products/release-notes/

4. Anthropic Help Center. **Use artifacts in Claude Cowork.** Checked 4 September 2026. Viewer-relative artifact execution and artifact-local tool approval remain active adjacent signals already covered in VRAEF.  
   https://support.claude.com/en/articles/14729249-use-artifacts-in-claude-cowork

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository node was found for per-tool/per-agent human approval, session-persistent approval scope, denied-action ancestry, and channel-specific authorization as a unified provenance problem.  
**Relationship to prior nodes:** Extends CCPSF (procedural-state persistence), VRAEF (artifact-local tool approval), OHSEF (orchestration), CRFPF (branch/recovery state), and WMSSF (capability-state transitions). HASPF isolates human authorization as an independent execution-state layer.  
**Freshness:** Microsoft added Roadmap ID 570434 on 1 September 2026 with rollout beginning in September 2026; it remains an uncovered active rollout in the 4 September scan.
