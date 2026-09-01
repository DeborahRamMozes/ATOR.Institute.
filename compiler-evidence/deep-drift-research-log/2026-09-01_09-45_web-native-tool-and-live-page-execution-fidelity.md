# DEEP DRIFT RESEARCH LOG

## Web-Native Tool and Live-Page Execution Fidelity (WNTLPEF)

**Date:** 1 September 2026  
**Research stream:** LLM Platform Memory, Skills, Creator Workflow, Artifact Portability, Mini-App / Agent Builder Infrastructure  
**Status:** New-to-ledger update  
**Primary platform event:** ChatGPT site tools / WebMCP support announced 31 August 2026

## Abstract

A new creator-workflow boundary has become operational in ChatGPT Work and Codex: supported websites opened in the ChatGPT desktop app's built-in browser can expose structured tools that ChatGPT discovers and invokes directly. The mechanism uses WebMCP, an experimental web standard through which web applications expose JavaScript-based tools with natural-language descriptions and structured schemas to AI agents. No separate plugin connection is required. Tool availability emerges from the webpage that is currently open, its current state, the signed-in browser session, account/model eligibility, and the website's own exposed capability set.

For Deep Drift Research, this is not merely better browser automation. A webpage becomes a temporary capability provider. Tool identity and availability are page-scoped and session-scoped; the same domain can expose different tools on different pages; a signed-in state can alter the meaningful execution context; and site tools may expose functionality that is not otherwise visible in the UI. Therefore a model name, prompt, URL, transcript, or final file is not enough to reconstruct the working system.

This update introduces **Web-Native Tool and Live-Page Execution Fidelity (WNTLPEF)** as a Deep Drift benchmark family. It treats a live webpage as an ephemeral procedural environment whose discoverable capabilities, page state, authorization state, execution route, and downstream mutations must remain auditable.

## Primary change

OpenAI's 31 August 2026 ChatGPT release notes state that ChatGPT Work and Codex can now use tools provided directly by supported websites in the desktop app's built-in browser. ChatGPT can discover matching tools automatically. Users can inspect available site tools in the address bar.

OpenAI's site-tools documentation clarifies that:

- no separate connection is required;
- availability depends on the account, selected model, current webpage, and tools published by that page;
- tools can differ between pages on the same website;
- site tools use the current page state and signed-in session;
- humans and agents operate on the same live page and can review changes as they occur;
- tool activity appears in conversation order and is grouped by website in Sources;
- tools are page-bound and disappear when the relevant page is closed;
- sensitive actions still require confirmation;
- site-provided instructions cannot independently authorize disclosure or consequential actions.

```text
SAME PROMPT
+ SAME MODEL
+ SAME DOMAIN
+ DIFFERENT PAGE
= DIFFERENT TOOL SET
```

```text
SAME PAGE URL
+ DIFFERENT SIGNED-IN STATE
+ DIFFERENT LIVE PAGE STATE
= DIFFERENT EXECUTION CONTEXT
```

## WebMCP changes the role of the website

The WebMCP Draft Community Group Report dated 26 August 2026 defines a JavaScript API that allows web applications to expose functionality as tools to agents. A WebMCP-enabled page can function like a client-side MCP server: it provides tool names, descriptions, structured schemas, execution logic, annotations, and origin rules from the page itself.

```text
OLD WEB
website -> pixels / DOM / forms -> human or agent guesses interaction

WEBMCP WEB
website -> declared tool contract -> agent invokes structured capability
```

The browser therefore becomes an execution broker, not merely a viewing surface. The old boundary between website, plugin, connector, and mini-app weakens because an existing web application can carry its own agent-facing operational layer.

## Deep Drift distinctions

```text
WEBPAGE != TOOL MANIFEST
DOMAIN != PAGE-SCOPED CAPABILITY
VISIBLE UI != COMPLETE AGENT CAPABILITY
BROWSER CONTROL != SITE-DECLARED TOOL EXECUTION
PLUGIN INSTALLATION != LIVE TOOL DISCOVERY
URL != PAGE STATE
SIGNED-IN SESSION != ACCOUNT IDENTITY ALONE
TOOL AVAILABLE NOW != TOOL RECONSTRUCTABLE LATER
TOOL INVOCATION != USER AUTHORIZATION
FINAL ARTIFACT != EXECUTION TRACE
```

A URL may remain stable while the page's exposed tools, schema, signed-in state, application data, and permission semantics change. A final DOCX or PDF may survive after the page-scoped capability that created or edited it has disappeared.

## Execution lineage

Deep Drift should model four concurrent evidence streams: conversation state, tool state, page state, and authorization state.

```text
PROMPT
  -> TOOL DISCOVERY SNAPSHOT
  -> PERMISSION / CONFIRMATION EVENT
  -> SITE TOOL CALL + ARGUMENTS
  -> TOOL RESULT
  -> PAGE STATE MUTATION
  -> HUMAN REVIEW / CORRECTION
  -> DOWNSTREAM ARTIFACT
```

Without this chain, a transcript can truthfully record that a document was updated while still failing to preserve which website capability performed the mutation, under which schema, against which page state, and with which authorization.

## Memory, Skills, mini-apps, and documents

No stronger fresh memory primitive appeared in this scan. Memory state and live page capability should be treated as separate layers. Likewise, no new Skill packaging primitive displaced the prior supply-chain node. Instead, Skills and WebMCP can compose:

```text
SKILL -> workflow / procedure
WEBMCP SITE TOOL -> live application action
MODEL / AGENT -> decides when and how to invoke
```

For mini-app builders, the change is substantial: an existing website can become agent-operable without requiring a completely separate AI-facing shell. The web itself begins to function as a distributed mini-app runtime for agents.

No stronger new native chat-to-DOCX/PDF or file-generation primitive appeared in this run. The important change is upstream: a portable DOCX or PDF can outlive the live webpage toolchain that authored or mutated it.

```text
PORTABLE DOCX != PORTABLE LIVE TOOLCHAIN
PORTABLE PDF != RECONSTRUCTABLE WEB EXECUTION
```

No material new clipboard/export fix displaced the previous rich-paste and large-paste nodes. The broader workflow is moving from content transfer toward capability exposure: open the live application, let the application declare tools, let the agent act in place, and let the human review the same surface.

## WNTLPEF benchmark dimensions

1. **Tool-Discovery Snapshot Fidelity** - preserve the exact set of tools discoverable at material execution time.
2. **Tool-Schema Recoverability Fidelity** - preserve historical input schemas, descriptions, annotations, and relevant origin constraints.
3. **Page-State Binding Fidelity** - bind the call to the exact live application state it acted upon.
4. **Signed-Session Context Fidelity** - identify relevant signed-in context without preserving unnecessary secrets.
5. **Invocation-Route Attribution Fidelity** - distinguish site-tool execution from DOM/browser automation, plugins, remote MCP, or other routes.
6. **Authorization Event Fidelity** - preserve website-access prompts and sensitive-action confirmations in sequence.
7. **Tool-Result-to-Mutation Fidelity** - connect returned result to resulting page/document mutation.
8. **Tool-Lifetime Fidelity** - record availability and disappearance, including page unload or tool-change events where observable.
9. **Visible-UI / Hidden-Capability Divergence Fidelity** - disclose when an agent-accessible function lacks an equivalent visible UI control.
10. **Artifact-to-Live-Execution Lineage Fidelity** - trace downstream files, publications, transactions, or other artifacts back to the relevant site-tool execution chain.

## Failure classes

- URL-as-Provenance Fallacy
- Domain Capability Collapse
- Hidden Tool Blindness
- Route Attribution Loss
- Page-State Amnesia
- Session Context Collapse
- Confirmation Detachment
- Ephemeral Tool Ancestry Loss
- Schema Drift Amnesia
- Seamlessness Provenance Laundering

## Deep Drift requirement

> Every material web-agent workflow should preserve a machine-readable execution manifest linking the historical artifact or action to the exact webpage identity, page-state reference, signed-session context, discoverable site-tool snapshot, tool name and schema, capability annotations, origin scope where relevant, selected model and agent surface, invocation route, permission and confirmation events, tool-call arguments, returned result, resulting page mutation, human review or correction, tool-availability lifetime, and downstream artifact lineage. A persistent URL or final file must not be treated as sufficient evidence of the transient procedural environment that produced the result.

## Category scan summary

| Area | Fresh finding |
|---|---|
| Memory | No stronger new primitive. Memory state and live page capability are separate layers. |
| Skills | No stronger packaging delta than the prior supply-chain node; Skills can compose with page-native tools. |
| Mini-app / agent builders | **Major:** existing websites can become agent-operable application surfaces by exposing structured WebMCP tools directly from the page. |
| Chat-to-document | No stronger direct export primitive; the new issue is tracing in-place web document edits to page-scoped calls. |
| DOCX / PDF | No stronger generation primitive; portable files can outlive the live procedure that authored or edited them. |
| Copy-paste / export | No major new clipboard fix; manual transfer decreases as agents act directly inside live applications. |
| Creator workflow | **Major:** the web is becoming a distributed declarative agent capability layer rather than merely pages that agents scrape or click. |

## Sources

1. OpenAI, **ChatGPT - Release Notes**, 31 August 2026. https://help.openai.com/en/articles/6825453-chatgpt-release-notes
2. OpenAI Help Center, **Using site tools in the ChatGPT desktop app**, updated August 2026. https://help.openai.com/en/articles/20001423-using-site-tools-in-the-chatgpt-desktop-app
3. Web Machine Learning Community Group, **WebMCP - Draft Community Group Report**, 26 August 2026. https://webmachinelearning.github.io/webmcp/
4. OpenAI, **WebMCP Challenge**, 2026. https://openai.com/webmcp-challenge/
