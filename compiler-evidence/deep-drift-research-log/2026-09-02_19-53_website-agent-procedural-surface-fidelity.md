# Deep Drift Research Update — WAPSF

## Website-Agent Procedural Surface Fidelity

**Research date:** 2 September 2026  
**Primary fresh delta:** OpenAI WebMCP Challenge and first-party WebMCP support in ChatGPT's in-app browser  
**Scope:** agent-native websites, structured website tools, procedural provenance, page-state execution, human-agent co-creation, mini-apps, Sites, browser agents, export lineage, creator workflows.

## Executive finding

OpenAI is now actively promoting **WebMCP**, an experimental open standard that allows websites to expose structured tools that AI agents can use directly. OpenAI states that instead of forcing agents to infer how to operate a human interface, website builders can explicitly define how an agent may use the application. OpenAI's first-party WebMCP Challenge opened on **25 August 2026**, with ChatGPT's in-app browser supporting WebMCP out of the box.

This creates a material shift in creator and document workflows:

```text
OLD WEB AGENT

PAGE
-> SCREEN / DOM INTERPRETATION
-> CLICK / TYPE / NAVIGATE
-> RESULT
```

becomes:

```text
AGENT-NATIVE WEB

PAGE
-> DECLARED STRUCTURED TOOL SURFACE
-> TOOL INVOCATION
-> APPLICATION MUTATION
-> RESULT
```

The website is no longer merely a source or destination.

It becomes a **procedural provider**.

Therefore:

```text
SAME URL
!= SAME AGENT CAPABILITY

SAME VISUAL PAGE
!= SAME STRUCTURED TOOL SURFACE

NO PLUGIN INSTALLED
!= NO TOOL AVAILABLE

HUMAN UI
!= AGENT UI

PAGE VERSION
!= TOOL-SCHEMA VERSION
```

For Deep Drift Research, browser provenance must now preserve not only what the user saw, but also what procedural interface the site exposed to the agent.

## New node

### Website-Agent Procedural Surface Fidelity (WAPSF)

Core state model:

```text
WEBSITE
   |
   +--> HUMAN INTERFACE
   |
   +--> DOM / PAGE STATE
   |
   +--> WEBMCP TOOL DEFINITIONS
   |
   +--> AUTH / PERMISSION STATE
   |
   +--> AGENT INVOCATION
   |
   +--> APPLICATION MUTATION
   |
   v
ARTIFACT / STATE CHANGE
```

A screenshot captures only one branch.

A URL captures even less.

## 1. Web applications can now declare agent procedures directly

OpenAI describes WebMCP as an experimental open standard through which websites expose structured tools for direct agent use.

The significant distinction is:

```text
AGENT LEARNS UI
```

versus:

```text
WEBSITE DECLARES PROCEDURE
```

This changes the provenance of an action.

If an agent creates, edits, uploads, transforms, publishes, or retrieves an object through a declared WebMCP tool, the causal path is not equivalent to a human-like sequence of clicks.

The archive should preserve:

```text
site_origin
page_identity
WebMCP_support
tool_name
tool_schema_version
arguments
authorization_state
invocation_result
page_or_data_mutation
```

## 2. Human-visible interface and agent-visible interface can diverge

A website can present one visual experience to a person while exposing a more direct procedural surface to an agent.

Therefore:

```text
WHAT HUMAN COULD CLICK
!=
WHAT AGENT COULD INVOKE
```

A human auditor replaying the page manually may fail to reproduce the agent's action even when the URL is identical.

This introduces a new reproducibility requirement:

> **Preserve agent affordances separately from human affordances.**

## 3. The browser becomes a protocol router, not merely a renderer

OpenAI says WebMCP applications can be tested in ChatGPT's in-app browser, which supports WebMCP directly.

This changes the browser's role:

```text
BROWSER
=
PAGE RENDERER
+ SESSION HOLDER
+ AUTH CONTEXT
+ TOOL DISCOVERY LAYER
+ AGENT EXECUTION ROUTER
```

For Deep Drift, browser version, capability flags, active session, authentication state, and WebMCP availability become material provenance.

A browser screenshot is increasingly decorative evidence if those states are absent.

## 4. Mini-apps and websites converge with Skills and plugins

OpenAI's broader 2026 platform direction already places Skills, apps, app templates, Work, Codex, and ChatGPT Sites inside the same creator environment. ChatGPT Sites allows users to build lightweight apps, dashboards, trackers, prototypes, internal portals, and reports without leaving ChatGPT. Plugins can package Skills, apps, and app templates for specific workflows.

WebMCP extends that architecture outward.

A website itself can now participate as an agent-native procedural surface.

The emerging stack is:

```text
CHAT / WORK / CODEX
      |
      +--> SKILL
      +--> PLUGIN
      +--> APP
      +--> APP TEMPLATE
      +--> SITE
      +--> WEBMCP WEBSITE
      |
      v
ARTIFACT / ACTION
```

The boundary between "tool installed in the AI platform" and "tool exposed by the web application" is weakening.

## 5. A page can change procedurally without changing visibly

Suppose:

```text
URL = same
layout = same
text = same
```

but the website updates a WebMCP tool from:

```text
create_report(v1)
```

to:

```text
create_report(v2)
```

The human-visible page may look unchanged.

The agent's output may not.

Therefore:

```text
VISUAL STABILITY
!= PROCEDURAL STABILITY
```

This is a direct Deep Drift provenance problem.

Tool-schema revision must be treated like Skill or plugin revision.

## 6. Website tools create a new supply-chain layer

A WebMCP-enabled workflow introduces a procedural dependency controlled by the website operator.

Conceptually:

```text
WEBSITE CODE
    |
    v
WEBMCP DEFINITION
    |
    v
BROWSER DISCOVERY
    |
    v
AGENT INVOCATION
    |
    v
REMOTE APPLICATION LOGIC
    |
    v
OUTPUT
```

This resembles a plugin supply chain without requiring the plugin to be installed as a separately named package.

Deep Drift must therefore track **procedural origin**, not merely installation origin.

## 7. Human-agent co-creation becomes first-class web behavior

OpenAI's WebMCP showcase includes examples such as collaborative writing in a shared document where an agent can comment and respond, 3D modeling where a human directs changes while the agent modifies the scene, and shared planning or interactive application workflows.

This matters because the web artifact can become a **persistent shared state** edited by both human and agent.

The correct model is:

```text
STATE_0
-> HUMAN ACTION
-> STATE_1
-> AGENT TOOL INVOCATION
-> STATE_2
-> HUMAN COMMENT
-> STATE_3
-> AGENT MUTATION
-> STATE_4
```

The final artifact is not sufficient evidence of the collaboration sequence.

## 8. Export can flatten a live procedural object

A WebMCP-enabled app may produce a live document, interactive model, dashboard, site, canvas, 3D scene, or shared planning object that is later exported as PDF, DOCX, PNG, CSV, or screenshot.

The export can remove tool definitions, interaction history, agent comments, invocation results, editable state, human-agent turn structure, and site authentication context.

Thus:

```text
STATIC EXPORT
!= LIVE PROCEDURAL ARTIFACT
```

For Deep Drift, the export must be linked to the live application state from which it was derived.

## 9. WebMCP changes what "copy-paste fix" means

Creator platforms have progressively removed the old transfer seams: copy, paste, download, upload, and switching tabs.

WebMCP removes another seam:

```text
INTERPRET UI
```

The agent can receive an explicit structured procedure instead.

This improves reliability while simultaneously reducing visible evidence of how an action occurred.

The paradox:

```text
LESS UX FRICTION
=
MORE NEED FOR MACHINE-LEVEL PROVENANCE
```

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger new first-party delta found in this scan | Existing memory-state rules remain current |
| Skills/plugins | Major architectural convergence | Website-declared tools now behave like external procedural dependencies |
| Mini-app builders | Major | ChatGPT Sites + WebMCP move lightweight apps toward agent-native execution |
| Chat-to-document | Indirect but material | Shared web documents can be mutated through structured tools before export |
| DOCX/PDF generation | Downstream lineage effect | Static export may flatten live procedural state and agent invocation history |
| Copy-paste/export | Major | Another visible workflow seam disappears because agents can invoke declared tools directly |
| Creator workflow | Major | Websites are becoming dual-interface systems: one interface for humans, another for agents |

## New failure classes

### URL-Equals-Capability Fallacy
Assuming the same URL implies the same agent-accessible procedures.

### Visual-Equals-Procedural State Error
Treating unchanged page appearance as evidence that the agent tool surface is unchanged.

### Browser-Is-Renderer Fallacy
Recording the browser only as a display surface while ignoring its tool-discovery and execution role.

### No-Plugin-No-Procedure Fallacy
Assuming no structured external procedure existed because no plugin was explicitly installed.

### Human-Agent Affordance Collapse
Treating actions available to humans and actions available to agents as the same interface.

### Static-Export Completeness Error
Treating a PDF, screenshot, or DOCX export as a complete archive of a live agent-native web artifact.

### Tool-Schema Amnesia
Recording the site and action but not the version or definition of the structured tool that executed the action.

## Deep Drift benchmark additions

**Website Tool-Surface Fidelity (WTSF)** - Can the agent-visible procedural interface of a website be reconstructed independently from the visual UI?

**Tool-Schema Revision Fidelity (TSRF)** - Can changes to WebMCP tool definitions be distinguished across executions?

**Human-vs-Agent Affordance Fidelity (HAAF)** - Can the actions exposed to a human remain separate from those exposed to an agent?

**Browser Protocol-State Fidelity (BPSF)** - Can browser support, capability flags, authentication state, and protocol availability be reconstructed?

**Invocation-to-Mutation Fidelity (IMF)** - Can a structured website-tool invocation be linked to the exact application state change it caused?

**Live-to-Static Artifact Fidelity (LSAF)** - Can exported DOCX/PDF/image artifacts remain linked to the interactive state and tool history from which they were derived?

## DRPA-1.0 protocol addition

Add under **Section 11: Webpage State Can Be a Tool**:

> **WEBSITE-DECLARED PROCEDURAL SURFACE RULE:** When a website exposes structured procedures directly to an AI agent through WebMCP or an equivalent agent-facing protocol, the website must be treated as a versioned procedural dependency, not merely as a URL or information source. Record website origin, page identity, agent-protocol support, available tool names, tool-schema or capability revision where observable, authentication state, permission scope, invocation arguments, invocation results, resulting mutations, browser execution environment, and downstream artifacts. A stable URL, visual layout, or human interface must never be treated as proof that the agent-accessible procedural surface remained stable.

Add under **Section 12: Creator Artifacts Must Have Lineage**:

> **LIVE WEB ARTIFACT RULE:** When a document, model, dashboard, site, or other creator artifact is collaboratively mutated through agent-native website tools, preserve the live-state lineage and human-agent interaction sequence separately from any static DOCX, PDF, image, CSV, or screenshot derivative.

## Canonical Deep Drift requirement

> For every material agent-mediated web workflow, archive the website not only as content but as an execution surface. Preserve the human-visible state, agent-visible tool surface, browser/protocol capability state, authentication boundary, tool definition, invocation, resulting mutation, human interventions, and exported derivatives. If the site or its tool schema cannot be reconstructed, the provenance record must explicitly state that the execution environment is incomplete.

## Broader creator-workflow trend

The web is shifting from:

```text
HUMANS USE APPS
AGENTS IMITATE HUMANS
```

toward:

```text
HUMANS USE INTERFACES
AGENTS USE DECLARED TOOLS
BOTH MUTATE THE SAME STATE
```

This is not simply better browser automation.

It is the emergence of a **dual-surface web**.

One layer explains the application to people.

Another explains the application to machines.

Deep Drift therefore needs a new principle:

> **The visible interface is no longer the complete interface.**

And a second:

> **When a website becomes procedural, its tool schema becomes part of authorship and provenance.**

## Sources

1. OpenAI. **The WebMCP Challenge.** Current first-party page accessed 2 September 2026. https://openai.com/webmcp-challenge/
2. OpenAI Developer Community, official announcement. **The WebMCP Challenge is here.** 25 August 2026. https://community.openai.com/t/the-webmcp-challenge-is-here/1392582
3. OpenAI Help Center. **ChatGPT Release Notes.** July 9, 2026 entries covering ChatGPT Work, Skills general availability, the Plugin Directory packaging Skills/apps/app templates, and ChatGPT Sites. https://help.openai.com/en/articles/6825453-chatgpt-release-notes
4. Microsoft Learn. **Microsoft 365 Copilot release notes.** July 2026 entries documenting MCP-built agents available directly inside Word, Excel, PowerPoint, Outlook, and Catalyst. https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

## Research status

**Node status:** New.  
**Duplicate check:** No WebMCP-specific entry was found in the current Deep Drift research-log repository search. DRPA-1.0 already anticipated webpage tool surfaces, but WAPSF converts that anticipation into a first-party platform implementation node with explicit tool-schema, browser-protocol, and live-artifact requirements.  
**Relationship to prior nodes:** Extends Skill/plugin procedural provenance, embedded asset mutation, execution locality, context access, artifact registries, and static-export lineage.  
**Freshness:** Verified against OpenAI's current WebMCP Challenge and supporting first-party material on 2 September 2026.
