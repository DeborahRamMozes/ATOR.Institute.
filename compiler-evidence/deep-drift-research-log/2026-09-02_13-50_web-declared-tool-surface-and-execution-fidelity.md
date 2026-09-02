# Deep Drift Research Update — WDTSEF

## Web-Declared Tool Surface and Execution Fidelity

**Research date:** 2 September 2026, 13:50 WIB  
**Primary fresh delta:** OpenAI ChatGPT Work and Codex site tools in the desktop built-in browser, released 31 August 2026, using the WebMCP draft published 26 August 2026.  
**Scope:** skills, browser agents, mini-app behavior, creator interfaces, live document editing, website-exposed functions, copy-paste displacement, execution provenance, downstream DOCX/PDF lineage.

## Executive finding

OpenAI has moved browser-agent workflows beyond ordinary visual clicking and typing. In the ChatGPT desktop app's built-in browser, ChatGPT Work and Codex can now discover and invoke **site tools** that a supported webpage exposes directly. OpenAI states that these tools can search information, edit documents, work with shared whiteboards or notebooks, explore dashboards, update shopping carts, and perform other page-specific actions. No separate app connection is required for the site tool itself.

The underlying mechanism is **WebMCP**, a proposed web standard whose draft describes a JavaScript API allowing web applications to expose their functionality as structured tools to AI agents. A WebMCP page can therefore behave, conceptually, like an MCP server implemented in client-side web application logic rather than a separate backend integration.

This changes the creator workflow from:

```text
WEB PAGE
   |
   +--> pixels
   +--> text
   +--> forms
   |
   v
AGENT CLICKS / TYPES
```

to:

```text
WEB PAGE
   |
   +--> visible interface
   +--> signed-in live state
   +--> declared tool map
   +--> structured schemas
   +--> executable page functions
   |
   v
AGENT
```

The crucial Deep Drift distinction is:

```text
WHAT THE HUMAN CAN SEE
!= WHAT THE PAGE CAN EXPOSE TO THE AGENT

VISIBLE UI
!= COMPLETE TOOL SURFACE

SAME URL
!= SAME AVAILABLE TOOLS

SAME PAGE
!= SAME TOOL MAP OVER TIME

BROWSER AUTOMATION
!= STRUCTURED SITE-TOOL EXECUTION
```

## New node

### Web-Declared Tool Surface and Execution Fidelity (WDTSEF)

Site tools introduce a procedural layer owned by the webpage itself.

```text
WEBSITE CODE
    |
    +--> registers tools
    +--> descriptions
    +--> schemas
    +--> read/write behavior
    +--> tool availability
    |
    v
CURRENT PAGE MODEL CONTEXT
    |
    v
CHATGPT WORK / CODEX
    |
    +--> discovers matching tool
    +--> requests permission
    +--> invokes structured function
    |
    v
LIVE PAGE / DOCUMENT / ACCOUNT MUTATION
```

A creator workflow can therefore depend on executable capability that is neither installed as a plugin nor fully visible as ordinary page controls.

## 1. The webpage is becoming a procedural provider

OpenAI says ChatGPT can automatically discover site tools when the current webpage provides a matching tool. The WebMCP draft describes tools as JavaScript functions with natural-language descriptions and structured input schemas.

This creates a new provenance object:

```text
PAGE TOOL DEFINITION
= name
+ title
+ description
+ input schema
+ execution logic
+ annotations
+ origin exposure
```

For Deep Drift, recording merely the URL is no longer sufficient. The same URL may expose a different tool map after a deployment, feature flag, account change, A/B test, or page transition.

## 2. Website UI and agent capability can diverge

OpenAI explicitly notes that site tools may expose functionality not otherwise present on the webpage.

That means:

```text
HUMAN-VISIBLE AFFORDANCE SET
!= AGENT-AVAILABLE AFFORDANCE SET
```

A creator observing the screen may not be able to infer the complete set of actions available to the model.

This is a significant Deep Drift shift. In ordinary GUI provenance, a screenshot can approximate the action environment. With WebMCP, a screenshot can preserve the visible page while omitting part of the executable interface available to the agent.

A visual archive is therefore no longer enough to reconstruct the procedural surface.

## 3. Tool availability is page-local and temporally unstable

OpenAI documents that site tools are available only while the relevant webpage is open. A tool belongs to the page that provides it and does not carry over to another page or website. Embedded-content tools are not currently supported.

So:

```text
TOOL AVAILABLE AT PAGE P1
!= TOOL AVAILABLE AT PAGE P2

PAGE CLOSED
=> TOOL UNAVAILABLE

SAME WEBSITE
!= SAME PAGE TOOL SET
```

The WebMCP specification also defines tool registration, unregistration, tool-change events, and pending tool executions. Tool availability is therefore dynamic state, not static metadata.

Deep Drift should preserve the tool map at execution time rather than treating site capability as a permanent property of the domain.

## 4. A live signed-in page becomes shared execution context

OpenAI states that site tools use the webpage currently open, its current state, and the user's signed-in session. The user and ChatGPT can work on the same live page and review changes as they happen.

The execution context becomes:

```text
URL
+ PAGE STATE
+ AUTHENTICATED SESSION
+ SITE TOOL MAP
+ CONVERSATION INTENT
+ PERMISSION STATE
= EFFECTIVE ACTION ENVIRONMENT
```

This complements earlier Deep Drift browser-host findings but introduces a different layer. Browser-host provenance asks **where the action ran**. WDTSEF asks **what executable interface the webpage declared at that moment**.

## 5. Site tools displace copy-paste without requiring a traditional connector

A creator previously moving information between an LLM and a website often had to:

```text
READ PAGE
-> COPY
-> PASTE INTO LLM
-> RECEIVE RESULT
-> COPY
-> PASTE BACK INTO WEBSITE
```

With site tools:

```text
STATE TASK
-> AGENT DISCOVERS PAGE TOOL
-> TOOL READS LIVE PAGE STATE
-> TOOL EXECUTES
-> PAGE UPDATES
```

This removes manual transfer while also removing a highly visible provenance seam.

Copy-paste was clumsy, but it made transfer legible. Structured page tools are cleaner and faster precisely because the transfer is absorbed into execution infrastructure.

## 6. Site tools create a third procedural distribution model

Deep Drift has already tracked two important procedural sources:

```text
INSTALLED PLUGIN / SKILL
REPOSITORY-SYNCHRONIZED PROCEDURE
```

WebMCP adds a third:

```text
PAGE-DECLARED PROCEDURE
```

These differ materially:

| Procedural source | Where procedure is defined | Availability boundary | Update mechanism |
|---|---|---|---|
| Plugin / Skill | Installed package / workspace | Account or workspace | Install/update/sync |
| Repository-synced plugin | Git repository -> workspace | Workspace | Repository synchronization |
| WebMCP site tool | Current webpage runtime | Page + browser session | Website deployment / page state |

A creator research log should never collapse these three into a generic label such as "tool used."

## 7. Tool metadata itself becomes a prompt-injection surface

The WebMCP draft's security section explicitly identifies metadata or description attacks, output injection, malicious tool implementations, misrepresentation of intent, privacy leakage through over-parameterization, and same-origin concerns.

This matters for creator workflow provenance because a tool's description is part of the model-facing interface.

```text
TOOL DESCRIPTION
!= NEUTRAL DOCUMENTATION
```

It can influence tool selection and agent interpretation.

Therefore the provenance record should preserve the actual tool description and schema seen at execution time, not merely the tool's name.

## 8. Sensitive-action confirmation does not erase procedural causality

OpenAI says website access requires permission and sensitive actions such as sharing personal information, purchases, deletion, permission changes, or sending messages require confirmation. It also says website instructions cannot themselves authorize these actions.

This creates a useful distinction:

```text
AGENT SELECTS TOOL
+ HUMAN CONFIRMS ACTION
= SHARED CAUSAL CHAIN
```

The confirmation event should be preserved, but it does not make the action purely human-authored. Likewise, model initiation does not erase human authorization.

Deep Drift needs joint-action provenance rather than binary human/AI attribution.

## 9. Why this matters for chat-to-document, DOCX, and PDF

A site tool can edit a document, shared whiteboard, notebook, dashboard, or other live web object. That object can then become the source for a DOCX, PDF, spreadsheet, image, or research report.

The downstream chain can look like:

```text
CHAT PROMPT
    |
    v
SITE TOOL DISCOVERY
    |
    v
STRUCTURED WEB TOOL CALL
    |
    v
LIVE DOCUMENT MUTATION
    |
    v
EXPORT / DOWNLOAD
    |
    v
DOCX / PDF
```

The final file does not reveal whether the underlying web object was edited by human clicks, ordinary browser automation, or WebMCP tool execution.

Therefore:

```text
FINAL DOCX
!= EXECUTION METHOD EVIDENCE

FINAL PDF
!= PAGE-TOOL HISTORY
```

File lineage now needs the page-declared tool layer.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger delta than the CSMESF node | Cross-surface memory state remains current |
| Skills / plugins | Major architectural extension | Procedures can now be declared by the current webpage rather than installed beforehand |
| Mini-app / builder workflows | Major | Web applications can expose structured functions directly to browser agents |
| Chat-to-document | Major indirect effect | Site tools can mutate live documents before export |
| DOCX / PDF | No new direct file primitive | Downstream files need page-tool execution lineage |
| Copy-paste / export | Major | Manual transfer can disappear without a separate connector |
| Creator workflow | Major | The website becomes part UI, part live state container, and part agent tool server |

## New failure classes

### Screenshot-Sufficiency Fallacy
Assuming a screenshot of the webpage preserves the full action surface available to the agent.

### URL-Sufficiency Error
Treating the page URL as enough to reconstruct which site tools were available.

### Visible-Affordance Collapse
Assuming agent capabilities are limited to controls visible to the human user.

### Site-Tool / Browser-Automation Conflation
Failing to distinguish structured WebMCP execution from ordinary clicking, typing, DOM interaction, or computer use.

### Tool-Map Temporal Erasure
Preserving the page but not the exact registered tool set at execution time.

### Tool-Description Neutrality Fallacy
Treating tool names, descriptions, annotations, and schemas as inert metadata rather than model-facing procedural instructions.

### Page-Locality Erasure
Assuming a tool remains available across pages, tabs, or later visits.

### Connector-Absence Misclassification
Assuming no structured integration existed merely because no plugin or connector was installed.

### Document-Export Lineage Loss
Preserving a DOCX/PDF derived from a live web document while omitting WebMCP mutations that preceded export.

## Deep Drift benchmark additions

**Declared Tool Surface Fidelity (DTSF)**  
Can the exact site-tool map available on the page at execution time be reconstructed?

**Visible-vs-Agent Affordance Fidelity (VAAF)**  
Can human-visible controls be separated from agent-only or non-visible site-tool capabilities?

**Page-Local Tool Fidelity (PLTF)**  
Can tool availability be tied to the exact page, tab, document, and lifecycle state that exposed it?

**Tool Definition Fidelity (TDF)**  
Can tool name, description, input schema, annotations, origin exposure, and relevant execution semantics be preserved?

**Site-Tool Execution Fidelity (STEF)**  
Can structured WebMCP calls be distinguished from ordinary browser automation?

**Tool-Change Fidelity (TCF)**  
Can registration, unregistration, or tool-map changes during a session be reconstructed?

**Human-Confirmation Causality Fidelity (HCCF)**  
Can model tool selection and human authorization remain separately visible in a shared action chain?

**Web-Tool-to-Artifact Fidelity (WTAF)**  
Can downstream documents, PDFs, images, code, spreadsheets, or decisions be traced to the site-tool calls that materially changed their source state?

## Canonical Deep Drift requirement

> Every material AI-assisted workflow using website-declared tools, WebMCP, browser-hosted tool APIs, or equivalent page-local structured actions should preserve a machine-readable site-tool execution manifest that records the webpage URL and document identity; page-load timestamp; browser and execution host; authenticated account context; page state relevant to the task; the complete tool map available at execution time; tool names, titles, descriptions, schemas, annotations, read/write characteristics, and exposed origins; tool registration or removal events; model and agent identity; the user's request; automatic tool-discovery event; selected tool and arguments; data presented to the tool; tool result; human website-access approval; sensitive-action confirmation; resulting page or document mutation; fallback to ordinary browser automation if any; and every downstream export, DOCX, PDF, spreadsheet, image, message, code artifact, or decision. A screenshot or URL must never be treated as a complete record of the executable page surface, and the absence of an installed connector must never be treated as proof that no structured integration was used.

## Broader creator-workflow trend

The web is shifting from:

```text
WEBSITE FOR HUMANS
      +
AGENT THAT IMITATES HUMAN INPUT
```

toward:

```text
WEBSITE FOR HUMANS
      +
WEBSITE-DECLARED MACHINE TOOL SURFACE
      +
SHARED LIVE STATE
      +
AGENT
```

This changes the ontology of a webpage.

A page is no longer only something an AI reads or clicks. It can declare a machine-facing procedural interface specifically for agents.

That produces a new Deep Drift principle:

> **The web page is becoming executable context. Preserve not only what the page showed, but what the page allowed the model to do.**

## Sources

1. OpenAI. **ChatGPT Release Notes**, 31 August 2026, "Use website tools in the desktop browser."  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

2. OpenAI Help Center. **Using site tools in the ChatGPT desktop app.** Current documentation accessed 2 September 2026.  
   https://help.openai.com/en/articles/20001423-using-site-tools-in-the-chatgpt-desktop-app

3. Web Machine Learning Community Group. **WebMCP - Draft Community Group Report**, 26 August 2026.  
   https://webmachinelearning.github.io/webmcp/

## Research status

**Node status:** New.  
**Duplicate check:** Repository search found no existing Deep Drift research-log entry for WebMCP, site tools, page-declared structured functions, or the distinction between the visible webpage and a separate agent-facing tool surface.  
**Relationship to prior nodes:** Complements BEHSTF (browser execution-host and session-transfer fidelity), RSPDSF (repository-synchronized procedural distribution), browser/page-state provenance, and artifact-lineage nodes. WDTSEF specifically formalizes the website itself as a dynamic procedural provider whose declared tool map can diverge from the visible UI and change over time.  
**Freshness:** Verified against OpenAI first-party documentation current on 2 September 2026 and the WebMCP draft dated 26 August 2026.
