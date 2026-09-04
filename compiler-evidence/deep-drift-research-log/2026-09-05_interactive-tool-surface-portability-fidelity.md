# Deep Drift Research Update - ITSPF

## Interactive Tool Surface Portability Fidelity

**Research date:** 5 September 2026  
**Primary fresh delta:** Microsoft added a new Copilot Studio roadmap item on 2 September 2026 for **rich interactive app experiences inside Copilot Studio agents using MCP Apps**. The planned architecture lets a UI-enabled MCP tool render interactive experiences such as sortable tables and drilldowns directly inside the conversation. On surfaces that cannot render the interactive UI, the same tool remains usable through a **plain-text fallback**. Microsoft currently lists the feature as *In Development*, with preview planned for October 2026 and rollout planned for November 2026.

## Executive finding

The same tool result can now have different experiential forms depending on the host surface.

```text
MCP TOOL CALL
      |
      +--> UI-CAPABLE HOST
      |       -> interactive view
      |       -> controls
      |       -> drilldowns
      |       -> stateful interaction
      |
      +--> NON-UI HOST
              -> plain-text fallback
```

Therefore:

```text
SAME TOOL
!= SAME EXPERIENCE

SAME DATA
!= SAME AFFORDANCE

SAME AGENT
!= SAME INTERACTION CAPABILITY

FALLBACK SUCCESS
!= UI PARITY

VISIBLE OUTPUT
!= COMPLETE TOOL CONTRACT
```

The new provenance object is the **surface-specific rendering contract**.

## New node

### Interactive Tool Surface Portability Fidelity (ITSPF)

Minimum state model:

```text
tool_id
tool_version
mcp_server
mcp_apps_extension_state
ui_resource_uri
ui_mime_type
host_surface
host_extension_support
capability_negotiation_result
render_mode
fallback_mode
interaction_controls
tool_call_chain
ui_to_host_calls
host_to_ui_events
user_action_events
view_state
plain_text_representation
export_state
screenshot_state
```

## 1. Tool output is no longer only text or structured data

MCP Apps extends the Model Context Protocol so a server can associate a tool with a UI resource.

The protocol's initial standard uses:

```text
ui:// resource identifiers
+
text/html;profile=mcp-app
```

The host can render the resource in a sandboxed iframe and exchange messages with it through MCP's communication model.

This turns a tool into:

```text
TOOL LOGIC
+
DATA
+
OPTIONAL INTERACTIVE VIEW
```

For Deep Drift, the UI resource is therefore part of the tool's artifact lineage.

## 2. Interactive rendering is capability-negotiated

MCP Apps is an optional extension.

The MCP specification requires compatible client and server support to be negotiated.

Therefore:

```text
SERVER SUPPORTS MCP APPS
!= UI WILL RENDER

CLIENT SUPPORTS MCP APPS
!= SERVER PROVIDES UI

BOTH SUPPORT
-> UI PATH MAY ACTIVATE
```

This means host capability must be archived separately from tool capability.

## 3. Microsoft is bringing this model into Copilot Studio agents

Microsoft's new roadmap entry says Copilot Studio agents will be able to render rich interactive UI inline when calling a UI-enabled tool from a compatible MCP server.

Examples given by Microsoft include:

```text
sortable tables
drilldowns
interactive data exploration
actions without leaving chat
```

The importance for Deep Drift is not the widget itself.

It is the fact that an agent response can contain an externally defined interactive application state rather than only model-authored prose.

## 4. Plain-text fallback creates dual output classes

Microsoft explicitly states that a plain-text fallback keeps the agent usable on surfaces that cannot render the UI.

This creates two valid representations of one tool capability:

```text
RICH REPRESENTATION
vs
FALLBACK REPRESENTATION
```

They should not be treated as equivalent.

A fallback can preserve the facts while losing sorting, filtering, drilldown paths, interactive controls, local view state, action affordances, visual hierarchy, and progressive disclosure.

Thus:

```text
SEMANTIC SURVIVAL
!= INTERACTION SURVIVAL
```

## 5. Portability now has at least three layers

An MCP tool can be portable at the protocol level but not equivalent at the experience level.

Deep Drift should distinguish:

```text
TOOL PORTABILITY
Can the host call the tool?

DATA PORTABILITY
Can the result be represented?

INTERACTION PORTABILITY
Can the user perform the same actions?
```

A host may pass the first two tests and fail the third.

## 6. Same tool call can generate different research evidence

Consider a dataset inspection tool.

On a UI-capable host:

```text
user sorts column
-> drills into row
-> changes filter
-> triggers another tool call
```

On a fallback host:

```text
user receives text summary
```

Both runs may be described casually as "used the same MCP tool." Methodologically, they are not the same experiment. The interactive run contains user-driven state transitions that the text fallback never exposes.

## 7. UI state becomes provenance

Once the UI can trigger tool calls, the following become causal research state:

```text
selected row
active filter
sort order
expanded section
chosen action
form values
current view
```

These are not necessarily represented in the final natural-language response.

Deep Drift must therefore distinguish:

```text
MODEL CONVERSATION STATE
from
EMBEDDED APP STATE
```

## 8. Host UI and model output have different authorship

The model may decide to call a tool. The MCP server may supply the UI resource. The host renders the UI. The user changes the UI state. The UI may then invoke another tool.

So the causal chain becomes:

```text
MODEL
-> TOOL
-> SERVER-PROVIDED UI
-> HOST RENDERER
-> USER ACTION
-> TOOL / HOST EVENT
-> MODEL
```

Attribution must not collapse all visible pixels into "AI-generated response."

## 9. Interactive mini-apps are becoming infrastructure, not one-off chat artifacts

This roadmap update matters because it links Copilot Studio to an open protocol-level UI mechanism rather than a platform-specific one-off widget architecture.

The broader trajectory is:

```text
CHAT RESPONSE
-> INTERACTIVE CARD
-> MINI-APP
-> PORTABLE MCP APP
```

That potentially reduces dependence on one creator surface while increasing dependence on negotiated host capabilities.

Portability improves. Parity does not automatically improve.

## 10. Fallback behavior is part of the tool contract

A serious creator workflow should test:

```text
UI HOST
TEXT-ONLY HOST
DEGRADED HOST
OFFLINE / ERROR STATE
```

The plain-text fallback is not merely an emergency representation. It is part of cross-surface behavior.

Deep Drift should therefore treat fallback quality as a first-class benchmark.

## 11. Rich UI can conceal additional tool execution

MCP Apps supports bidirectional communication between embedded UI and host.

An interaction inside the widget can therefore lead to another tool call without the user manually typing another prompt.

This changes conversation provenance:

```text
NO NEW USER MESSAGE
!= NO NEW USER ACTION

NO NEW CHAT TURN
!= NO NEW TOOL EVENT
```

Interaction logs become necessary where reproducibility matters.

## 12. Static export destroys interactive semantics

A screenshot, PDF, DOCX, or copied image of an MCP App can preserve appearance while removing controls, tool-call capability, view state, event history, navigation, interactive validation, and dynamic data refresh.

Therefore:

```text
SCREENSHOT OF APP
!= APP

PDF OF APP
!= APP

DOCX EMBED
!= APP
```

This extends Deep Drift's prior static-export work.

## 13. A screenshot may preserve the wrong state as if it were canonical

An interactive tool can have many valid states.

```text
STATE 1 = unsorted
STATE 2 = sorted by revenue
STATE 3 = filtered to Indonesia
STATE 4 = one row expanded
```

A screenshot captures one state but often loses the operations that produced it.

Deep Drift should archive the captured view, state description, and interaction path where feasible.

## 14. UI compatibility itself becomes versioned evidence

The MCP extension support matrix makes clear that extension support varies by client and is opt-in.

Therefore:

```text
HOST VERSION A
-> fallback text

HOST VERSION B
-> rich interactive UI
```

A change in visible output may be caused by host capability rollout rather than model or tool changes.

This is a new source of apparent model drift.

## 15. Mini-app benchmarks should separate rendering from reasoning

A model may choose the correct tool but the host may fail to render the associated UI. Or the UI may render correctly while the tool data is wrong; the tool data may be correct while the UI misrepresents it; the text fallback may be correct while interactive controls malfunction.

Deep Drift should benchmark:

```text
TOOL SELECTION
TOOL RESULT
UI RENDER
UI INTERACTION
FALLBACK
```

independently.

## 16. Security state differs from ordinary chat text

MCP Apps uses sandboxed UI resources and auditable host communication.

That creates a different security boundary from plain text.

The relevant provenance state includes sandbox state, capability negotiation, allowed host calls, allowed tool calls, resource origin, and UI event history.

A rich result therefore carries a larger execution surface than a fallback result.

## 17. Creator workflow now includes interface authorship

The creator of an MCP tool can increasingly define not only what data the tool returns but how that data is manipulated inside compatible AI hosts.

This means a reusable creator artifact can include:

```text
backend tool
data contract
interactive frontend
fallback representation
```

The "mini-app builder" category is therefore converging with the tool/plugin category.

## 18. Cross-provider reuse becomes more realistic

The MCP Apps documentation explicitly describes UIs rendering in compliant hosts and lists host support as variable.

The standard is not inherently tied to one vendor.

This creates the possibility that one interactive tool package can be reused across multiple AI clients.

But Deep Drift must test visual parity, interaction parity, tool-call parity, state parity, and fallback parity rather than assuming standards compliance guarantees identical behavior.

## 19. The Microsoft roadmap is future-facing, not a GA claim

This item is important to classify correctly.

As of 5 September 2026:

```text
STATUS = IN DEVELOPMENT
PREVIEW = OCTOBER 2026
ROLLOUT = NOVEMBER 2026
```

Therefore Deep Drift should record it as a **roadmap architecture signal**, not as a currently generally available Copilot Studio capability.

This distinction protects the research log from converting future-product intent into present-tense fact.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger unlogged delta in this run | Recent Claude/OpenAI memory nodes remain current |
| Skills / tools | **Major fresh architectural delta** | Tools can carry a portable interactive UI resource in addition to logic/data |
| Mini-app builders | **Major fresh delta** | Mini-app behavior is moving into open MCP tool infrastructure |
| Chat-to-document | Indirect | Static documents can capture UI appearance but not interaction semantics |
| DOCX/PDF | **Important archival consequence** | DOCX/PDF flatten an interactive app state into a non-executable representation |
| Copy-paste/export | **Important consequence** | Copying visible output does not transfer widget state, controls, or tool-call behavior |
| Creator workflow | **Major** | Creator artifacts increasingly combine backend tool logic, frontend UI, fallback text, and cross-host capability negotiation |

## New failure classes

### Tool-Equals-Experience Fallacy
Assuming the same tool produces the same usable experience on every host.

### Fallback-Equals-Parity Fallacy
Treating a semantically correct plain-text fallback as equivalent to a rich interactive UI.

### Screenshot-Equals-App Fallacy
Treating a static capture of an interactive widget as the artifact itself.

### Host-Capability-as-Model-Drift Error
Attributing a UI change to the model when the actual change is MCP Apps support in the host.

### UI-State Erasure
Archiving only final text or screenshots while losing sort, filter, selection, form, expansion, and navigation state.

### Chat-Turn-Equals-Interaction Fallacy
Assuming nothing happened because no new user message appears, even though the embedded UI triggered tool events.

### Roadmap-Equals-Release Error
Representing an in-development roadmap item as a currently shipped product capability.

## Deep Drift benchmark additions

**Interactive Surface Portability Fidelity (ISPF)**  
Can the same MCP App preserve usable interactive behavior across compatible hosts?

**Fallback Semantic Fidelity (FSF)**  
Does the plain-text fallback preserve the information required to complete the core task?

**Interaction Affordance Fidelity (IAF)**  
Are sorting, drilldowns, actions, forms, and other intended controls available and behaviorally equivalent across hosts?

**UI State Provenance Fidelity (UISPF)**  
Can the archive reconstruct the widget state and user interactions that caused downstream tool actions?

**Host Capability Attribution Fidelity (HCAF)**  
Can changes caused by host support or capability negotiation be distinguished from model and server changes?

**Static Export Loss Fidelity (SELF)**  
Can the archive identify which interactive properties were destroyed when a UI was converted to screenshot, PDF, DOCX, or copied media?

## DRPA-1.0 protocol additions

### INTERACTIVE TOOL SURFACE RULE

> When a tool can provide an MCP App or other embedded interactive UI, preserve the tool identity, UI resource identity, host capability state, capability-negotiation result, render mode, and fallback mode separately. The same backend tool must not be treated as the same experiential artifact across surfaces without interaction-parity evidence.

### UI-FALLBACK SEPARATION RULE

> Preserve rich interactive representation and plain-text fallback as separate output classes. Semantic correctness of the fallback must not be used as evidence that interaction, visual hierarchy, control availability, or user-action pathways survived.

### EMBEDDED APP STATE RULE

> User actions inside an embedded tool UI - including sorting, filtering, selecting, expanding, form entry, and widget-triggered tool calls - are causal provenance events even when they do not generate a new natural-language chat message.

### STATIC INTERACTIVE EXPORT RULE

> A screenshot, PDF, DOCX, copied image, or other static export of an interactive tool view must be classified as a state capture rather than the application itself. Preserve the captured state and identify interaction capabilities lost at export.

### ROADMAP STATE CLASSIFICATION RULE

> Planned, preview, rolling-out, and generally available product states must remain distinct in the research log. Future roadmap architecture may be analyzed as a trend signal but must not be rewritten as present-tense capability.

## Eir'an state-flow addition

```text
MODEL:
selects tool

TOOL:
returns data
declares UI resource

NEGOTIATION:
host supports MCP Apps?
server supports extension?

RENDER:
interactive UI
or
plain-text fallback

INTERACTION:
sort
filter
select
drilldown
form
action

EVENT:
UI -> host
UI -> tool
host -> UI

ARCHIVE:
state snapshot
event path
fallback text
screenshot
DOCX / PDF
```

## Canonical Deep Drift requirement

> Treat interactive tool output as a compound artifact consisting of backend tool logic, data result, optional UI resource, host rendering capability, user interaction state, and fallback representation. Do not infer cross-surface equivalence from protocol compatibility alone.

## Deep Drift principle

> **The tool can travel farther than its interface.**

Operationally:

> **Test what survives when the same tool crosses into a host that cannot render its hands.**

## Broader platform scan

The strongest fresh, unlogged creator-workflow signal in this run is Microsoft's 2 September 2026 roadmap addition for MCP Apps inside Copilot Studio agents.

It is especially relevant because it aligns with the now-final MCP Apps extension, which standardizes interactive HTML tool interfaces, UI resources, capability negotiation, sandboxing, and bidirectional host communication.

OpenAI's public ChatGPT release notes still list 3 September 2026 as the latest product release. Its Astra, OneNote, Sites, memory, paste, file-library, and document-work changes are already represented by recent Deep Drift nodes.

Anthropic's current first-party memory documentation was updated on 3-4 September and remains relevant, but its major cross-provider memory and Cowork deltas are already represented in CMPF, AERF, and related nodes.

No stronger newly published direct DOCX/PDF-generation or copy-formatting fix was found in this run.

## Sources

1. Microsoft Learn / AI at Work Roadmap. **Microsoft Copilot Studio: Deliver rich interactive app experiences in Copilot Studio agents.** Roadmap ID 570433. Added 2 September 2026. Lists the feature as In Development, with preview planned for October 2026 and rollout planned for November 2026. Describes MCP Apps rendering rich inline interactive UI with sortable tables, drilldowns, and a plain-text fallback on unsupported surfaces.  
   https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave2/microsoft-copilot-studio/create-perfect-prompt-help-copilot

2. Model Context Protocol. **SEP-1865: MCP Apps - Interactive User Interfaces for MCP.** Final extension specification. Defines `ui://` resources, tool-to-UI metadata association, HTML MCP App resources, bidirectional communication, mandatory sandboxing, and capability negotiation.  
   https://modelcontextprotocol.io/seps/1865-mcp-apps-interactive-user-interfaces-for-mcp

3. Model Context Protocol. **Extension Support Matrix.** Documents MCP Apps as an opt-in extension whose behavior depends on both client and server support during initialization.  
   https://modelcontextprotocol.io/extensions/client-matrix

4. MCP Apps documentation. **MCP Apps overview.** Describes the portable tool + UI-resource architecture and current compliant-host model.  
   https://apps.extensions.modelcontextprotocol.io/api/

## Research status

**Node status:** New roadmap architecture signal.  
**Duplicate check:** No matching Deep Drift repository entry was found for MCP Apps host capability negotiation, interactive-vs-text fallback parity, embedded UI state provenance, and static-export loss as one research problem.  
**Relationship to prior nodes:** Extends AERF (execution route), OIVF (versioned visual objects), PCMF (materialization state), LHACF (long-horizon artifacts), and existing mini-app/Sites work. ITSPF is distinct because it treats interactive tool UI as a portable-but-surface-dependent component of the tool contract.  
**Freshness:** Microsoft's Copilot Studio roadmap item was added 2 September 2026 and surfaced in the current September 2026 roadmap cycle. The feature is not yet generally available and is logged explicitly as future-facing.
