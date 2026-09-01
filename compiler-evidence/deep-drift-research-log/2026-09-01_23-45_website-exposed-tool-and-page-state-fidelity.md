# Deep Drift Research Update — WETPSF

## Website-Exposed Tool and Page-State Fidelity

**Research date:** 1 September 2026, 23:45 WIB  
**Primary fresh delta:** OpenAI, 31 August 2026  
**Scope:** creator workflow architecture, site-exposed tools, WebMCP, browser-state provenance, plugin/skill boundaries, interactive pages, document editing, export implications.

## Executive finding

OpenAI's August 31, 2026 ChatGPT release adds a materially different capability boundary: ChatGPT Work and Codex can now discover and use tools that a supported website exposes directly inside the ChatGPT desktop app's built-in browser. These "site tools" use WebMCP, a proposed web standard. No separate plugin connection is required. The tool exists because the current page exposes it, the user's account can access it, the selected model supports it, and that page is open in the built-in browser.

This is not merely another browser-control feature. It changes where AI capability can originate.

Until now, Deep Drift could usually locate a capability in one of several familiar places: the model, a plugin, a Skill, an app connector, an MCP server configured by the user or workspace, or a mini-app builder. Site tools introduce another source:

```text
THE WEBPAGE ITSELF
```

A page can expose structured tools that let ChatGPT search information, edit a document, work with a whiteboard or notebook, explore a dashboard, update a shopping cart, or perform other page-specific actions.

The result is a new provenance requirement: tool availability must be reconstructed from page state, browser state, sign-in state, page-provided capability metadata, and execution surface.

## New node

### Website-Exposed Tool and Page-State Fidelity (WETPSF)

Core distinctions:

```text
WEBSITE ACCESS
!= SITE TOOL ACCESS

PAGE CONTENT
!= PAGE TOOL SURFACE

PLUGIN INSTALLED
!= TOOL AVAILABLE

NO PLUGIN INSTALLED
!= NO STRUCTURED TOOL

SAME WEBSITE
!= SAME PAGE TOOL SET

SAME PAGE
!= SAME SIGNED-IN STATE

CHROME SESSION
!= CHATGPT BUILT-IN BROWSER SESSION

TOOL EXISTS
!= TOOL PERSISTS AFTER PAGE CLOSE
```

OpenAI's documentation states that site tools are page-scoped. Each website decides which tools to provide, availability can vary between pages, and a tool from one page does not carry to another page or website. If the relevant webpage is closed, its site tools are no longer available until the page is reopened.

That turns capability into transient page state.

## 1. The webpage becomes a capability provider

The old simplified architecture was:

```text
USER
  |
  +--> CHATGPT
          |
          +--> MODEL
          +--> INSTALLED PLUGIN
          +--> CONNECTED APP
          +--> SKILL
          +--> CONFIGURED MCP
```

The emerging architecture adds:

```text
USER
  |
  +--> CHATGPT DESKTOP
          |
          +--> BUILT-IN BROWSER
                  |
                  +--> CURRENT WEBPAGE
                          |
                          +--> PAGE STATE
                          +--> SIGNED-IN SESSION
                          +--> WEBMCP SITE TOOLS
                                  |
                                  +--> READ
                                  +--> EDIT
                                  +--> ACTION
```

The capability is not necessarily installed in the user's workspace. It can be discovered dynamically from the open page.

For Deep Drift, this creates a new class of procedural provenance: **ambient capability**. The procedure is present because the environment exposes it at runtime.

## 2. Page state becomes part of computational context

OpenAI says site tools use the webpage that is open, its current state, and the user's signed-in session. The user and ChatGPT can work on the same live page and review changes as they occur.

Therefore:

```text
PROMPT P
+ PAGE STATE S1
= ACTION A

PROMPT P
+ PAGE STATE S2
= ACTION B
```

The prompt text is insufficient to reconstruct the event.

A document may have been open to a particular page or section. A dashboard may have active filters. A notebook may contain unsaved changes. A shopping cart may already contain items. An authenticated session may expose controls that an anonymous session does not.

The visible URL alone is therefore also insufficient.

## 3. Browser identity becomes part of provenance

The built-in ChatGPT browser maintains its own browser state. OpenAI explicitly notes that being signed into a site in Chrome does not mean the user is signed into the same site in ChatGPT's built-in browser.

So:

```text
SAME HUMAN
+ SAME WEBSITE

CHROME AUTH STATE = A
CHATGPT BROWSER AUTH STATE = B
```

This matters because capability, accessible data, and action authority can differ between A and B.

The release also expands the ChatGPT browser extension to Edge, Brave, Opera, and Vivaldi, but site tools themselves remain available only in the desktop app's built-in browser, not through the extension.

Therefore:

```text
BROWSER EXTENSION ACCESS
!= SITE TOOL EXECUTION ACCESS
```

The execution surface now needs to be recorded precisely.

## 4. Site tools blur the plugin boundary

OpenAI's plugin model packages Skills, apps, and app templates into installable workflows. Site tools are different: OpenAI says no separate connection is required. ChatGPT automatically discovers tools exposed by a supported webpage when the current account and model permit it.

This creates a capability-source distinction:

```text
PLUGIN CAPABILITY
= INSTALLED / ENABLED PACKAGE

SITE TOOL CAPABILITY
= PAGE-EXPOSED / RUNTIME-DISCOVERED TOOL
```

Both may perform structured actions, but their lifecycle is different.

A plugin may remain installed across sessions. A site tool can disappear simply because the user navigates away.

Deep Drift should not collapse them into one generic "tool used" field.

## 5. Creator work moves closer to live mutable surfaces

OpenAI lists document editing, shared whiteboards, notebooks, dashboards, travel planning, and other interactive pages among site-tool use cases.

This is significant for the creator-workflow watch because the artifact boundary becomes less obvious.

The workflow can now look like:

```text
CHAT INSTRUCTION
   |
   v
DISCOVER PAGE TOOL
   |
   v
EDIT LIVE DOCUMENT / NOTEBOOK / WHITEBOARD
   |
   v
WEBPAGE STATE MUTATES
   |
   v
DOWNSTREAM EXPORT / SHARE / PDF / DOCX
```

The primary creative action may happen directly in the live webpage. The final DOCX or PDF can be only a later rendering of a state mutation that occurred elsewhere.

A file-only archive therefore misses the execution layer.

## 6. Tool-history visibility is useful but incomplete

OpenAI says the conversation records site-tool activity in order, and Sources groups activity by website and lists tools used. The browser UI also exposes recently used site tools.

This is valuable observability, but it still does not automatically preserve every relevant precondition.

A reconstructable record should additionally capture:

```text
website origin
page URL
page identity
page state hash or snapshot where possible
signed-in account context
tool name
tool capability description
read/write/action class
tool-call timestamp
inputs
outputs
confirmation event
resulting page mutation
downstream artifact
```

Without those, "tool X was used on website Y" can remain too coarse.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger new memory primitive in this scan | Existing memory-state nodes remain current |
| Skills/plugins | Major boundary change | Structured capability can now originate from the webpage rather than an installed package |
| Mini-app / interactive builders | Indirect but important | Live notebooks, whiteboards, dashboards, and documents can expose callable tools to the model |
| Chat-to-document | Major workflow shift | Chat can mutate the source document directly in a live web surface before any export occurs |
| DOCX/PDF generation | No stronger format primitive | Final files may be downstream renderings of web-state mutations |
| Copy-paste/export | No newer clipboard fix than prior formatting/paste updates | Manual transfer continues to disappear as AI acts directly on live surfaces |
| Creator workflow | Major | Capability becomes ambient, page-scoped, and browser-state dependent |

## New failure classes

### Installed-Capability Assumption
Assuming every structured tool used by the model must have been installed as a plugin or app.

### URL Sufficiency Error
Treating the page URL as sufficient reconstruction of the state the model acted on.

### Page-State Erasure
Preserving the prompt and final artifact while omitting the live page state that shaped the action.

### Browser-Session Collapse
Treating Chrome, extension, and ChatGPT built-in-browser authentication state as equivalent.

### Capability-Persistence Overclaim
Assuming a tool remains available after page navigation or closure.

### Tool-Origin Collapse
Failing to distinguish model-native, plugin, Skill, configured MCP, and webpage-exposed tools.

### Live-Mutation Orphaning
Preserving a later exported DOCX/PDF while losing the browser action that modified the source.

### Ambient-Capability Blindness
Failing to record a capability because it was discovered automatically at runtime rather than explicitly enabled by the creator.

## Deep Drift benchmark additions

**Page-State Fidelity (PSF)** — Can the relevant live page state at execution time be reconstructed?

**Website-Exposed Capability Fidelity (WECF)** — Can each site tool be identified as originating from the webpage rather than an installed workflow package?

**Browser-State Fidelity (BSF)** — Can the execution browser, session, and signed-in state be reconstructed?

**Capability Locality Fidelity (CLF)** — Can page-scoped tools be distinguished from account-, workspace-, plugin-, and Skill-scoped capabilities?

**Tool Persistence-Boundary Fidelity (TPBF)** — Can the archive represent when a capability disappeared because the user navigated away or closed the page?

**Live Mutation Fidelity (LMF)** — Can a page mutation be linked to the tool call and later exported artifact?

**Tool-Origin Fidelity (TOF)** — Can provenance distinguish page tool, plugin, Skill, configured MCP, model-native tool, and browser-control action?

**Ambient Discovery Fidelity (ADF)** — Can automatically discovered runtime capabilities be recorded even when the creator did not install or explicitly configure them?

## Canonical Deep Drift requirement

> Every material AI-assisted workflow that uses browser or website-provided tools should preserve a machine-readable page-capability manifest linking each action and downstream artifact to the exact execution surface; browser instance; signed-in account context; website origin; page URL and page identity; relevant page state or snapshot; WebMCP or equivalent site-tool identity; capability description and read/write/action class; discovery event; model and account eligibility state; confirmation and authorization events; tool-call inputs and outputs; resulting page mutation; navigation or page-closure events that terminate capability availability; and later exports, documents, screenshots, or decisions derived from that mutation. A visible webpage or URL must never be treated as a complete representation of the computational state the model acted upon, and a structured tool call must not be assumed to originate from an installed plugin merely because it behaves like one.

## Broader creator-workflow trend

```text
CHAT READS WEBPAGE
      |
      v
CHAT CONTROLS BROWSER
      |
      v
CHAT USES INSTALLED APP / PLUGIN
      |
      v
WEBPAGE EXPOSES ITS OWN TOOL TO CHAT
      |
      v
CHAT MUTATES LIVE CREATOR SURFACE
```

The website is no longer only content to be read or a graphical interface to be clicked. It can become a procedural participant in the AI workflow.

**Capability provenance must include the environment that exposed the capability, not only the agent that invoked it.**

## Sources

1. OpenAI. **ChatGPT Release Notes**, August 31, 2026 - "Use website tools in the desktop browser."  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

2. OpenAI. **Using site tools in the ChatGPT desktop app.** Updated August 2026.  
   https://help.openai.com/en/articles/20001423-using-site-tools-in-the-chatgpt-desktop-app

## Research status

**Node status:** New.  
**Duplicate check:** No existing Deep Drift research-log entry matched WebMCP/site tools, page-scoped capability discovery, built-in-browser session separation, and live-page mutation provenance.  
**Relationship to prior nodes:** Complements capability-inventory, procedural-locality, generative-interface, and cross-account provenance nodes. WETPSF specifically addresses capabilities exposed transiently by the current webpage and governed by browser/page state rather than by installation alone.  
**Freshness:** Verified against OpenAI first-party documentation current on 1 September 2026.
