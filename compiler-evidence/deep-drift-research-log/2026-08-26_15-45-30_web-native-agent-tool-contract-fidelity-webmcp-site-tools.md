# Deep Drift Research Update

## Web-Native Agent Tool Contract Fidelity: WebMCP, Site Tools, and the Shift from UI Guessing to Structured Page Actions

**Research date:** Wednesday, 26 August 2026  
**ATØR observation time:** 15:45:30 WIB / 08:45:30 UTC  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan. One materially new creator-workflow architecture identified.

## Executive Summary

OpenAI has introduced **Site tools** in the ChatGPT desktop app's built-in browser, using the proposed **WebMCP** standard. Supported websites can expose structured tools directly to ChatGPT Work and Codex. Instead of forcing the agent to infer every action through clicking, typing, DOM inspection, or visual coordinates, the webpage can explicitly publish actions that the agent may call.

OpenAI's current help documentation says Site tools can let ChatGPT search, edit, update content, and use interactive tools on a supported webpage. ChatGPT automatically discovers tools made available by the current page, subject to account/model support and website-access prompts. The tools exist only while the relevant webpage remains open and do not automatically carry to other pages or sites.

OpenAI's WebMCP Challenge describes the broader architectural objective: websites define exactly how an agent can use the application so that tasks can be completed faster, more accurately, and more reliably.

For Deep Drift Research, this creates a major transition:

```text
OLD WEB AGENT
-> SEE UI
-> INFER CONTROL
-> CLICK / TYPE
-> HOPE PAGE STATE MATCHES INTENT

WEBMCP / SITE TOOL AGENT
-> SEE PAGE
-> DISCOVER DECLARED TOOL
-> CHECK ACCESS
-> CALL STRUCTURED ACTION
-> VERIFY PAGE / DATA STATE
```

The research unit therefore changes from **computer-use fidelity** to **web-native tool-contract fidelity**.

This report formalizes a new benchmark family:

**Web-Native Agent Tool Contract Fidelity (WATCF)**.

## 1. What Changed

### 1.1 Site tools are structured actions exposed by the webpage

OpenAI states that Site tools use WebMCP, a proposed standard that allows websites to make tools directly available to AI agents.

In the ChatGPT desktop app's built-in browser:

1. the user opens a webpage;
2. signs in directly on the site if needed;
3. ChatGPT detects whether the page publishes Site tools;
4. available tools can be inspected from the browser interface;
5. ChatGPT can use a matching tool to search, edit, or perform another supported action;
6. website-access prompts remain part of the permission boundary.

The tool contract is page-scoped.

A tool published by Page A does not automatically become available on Page B.

Closing the page removes that page's Site tool availability until the page is reopened.

### 1.2 Shared live page and signed-in session

OpenAI's announcement describes a particularly consequential property: the person and the agent can work with the **same live page and signed-in session**.

That collapses part of the old human-agent handoff:

```text
HUMAN LOGS IN
-> AGENT USES SAME PAGE CONTEXT
-> SITE EXPOSES STRUCTURED ACTION
-> AGENT ACTS
-> HUMAN SEES RESULT IN SAME INTERFACE
```

This is not equivalent to giving an agent general access to the website.

The capability remains bounded by:

- the current webpage;
- the tools the site deliberately exposes;
- the active account/session;
- the selected model/account support;
- ChatGPT's website-access permission state.

## 2. Why This Matters for Deep Drift

Deep Drift has repeatedly documented **Automation Inversion**: the system may possess capability while the human still has to discover the right tool, route state manually, translate architecture, and shepherd execution across interfaces.

WebMCP attacks a different part of that burden.

It shifts some tool-discovery responsibility from the human and model into the web application itself.

Instead of:

```text
HUMAN: what can this site do?
MODEL: maybe I can click around and infer it
```

we get:

```text
SITE: these are the supported agent actions
MODEL: I can discover the matching action
HUMAN: approve access where required
```

That is a genuine architectural improvement.

But it also creates a new dependency: **the declared tool contract becomes part of the causal system**.

If the tool contract is wrong, stale, overly broad, ambiguous, or semantically different from the visible interface, structured execution can fail more cleanly but also more systematically.

## 3. New Deep Drift Construct: Web-Native Agent Tool Contract Fidelity

### Definition

**Web-Native Agent Tool Contract Fidelity (WATCF)** measures whether a webpage's agent-facing structured tools faithfully represent the actions, permissions, state boundaries, and side effects of the human-facing web application.

A strong tool contract should preserve:

```text
VISIBLE USER INTENT
+ TOOL DISCOVERABILITY
+ ACTION SEMANTICS
+ PERMISSION SCOPE
+ TARGET OBJECT IDENTITY
+ SIDE-EFFECT BOUNDARY
+ POST-ACTION STATE
+ HUMAN-VERIFIABLE RESULT
```

### Core research question

> Does the structured agent tool mean the same thing, act on the same object, and produce the same bounded side effect that a competent human would reasonably understand from the visible web interface?

## 4. New Failure Classes

### 4.1 Tool-Contract / UI Semantic Divergence

The structured tool performs an operation that is not semantically equivalent to the corresponding visible UI action.

Example:

```text
VISIBLE UI: "Save draft"
SITE TOOL: actually publishes and notifies collaborators
```

### 4.2 Page-Scoped Capability Amnesia

A Site tool is available while a page is open, but task continuation after navigation, refresh, tab movement, or page closure fails because the tool disappears and the agent does not recover the capability state correctly.

### 4.3 Tool Discovery False Negative

The webpage exposes a relevant tool, but the agent fails to discover or select it and falls back to brittle clicking or manual instructions.

### 4.4 Tool Discovery False Positive

The agent selects a structured tool that is technically available but not appropriate for the user's requested action.

### 4.5 Signed-Session Identity Drift

The human believes the agent is acting in Account A, while the built-in browser is actually authenticated as Account B.

OpenAI explicitly advises users to review the active account before allowing ChatGPT to continue. Deep Drift should treat identity state as part of every web-agent mutation.

### 4.6 Tool Side-Effect Opacity

The tool succeeds but the user cannot determine which records, files, collaborators, or external systems were affected.

### 4.7 Structured-Action Staleness

The website UI changes but its published agent tool contract does not, or vice versa.

### 4.8 Embedded-Tool Boundary Failure

OpenAI notes that tools provided only by embedded content are not currently supported. A page can visually contain functionality that the human sees but the agent-facing tool layer cannot access.

This creates:

```text
VISIBLE FUNCTIONALITY
!= AGENT-ADDRESSABLE FUNCTIONALITY
```

### 4.9 Cross-Tab Tool Attribution Drift

ChatGPT can work across browser tabs, but Site tools are page-specific. The agent may hold several pages in active workflow context while only one supplies a particular tool.

A later reviewer must be able to reconstruct which page supplied which tool call.

## 5. Deep Drift Benchmark: WebMCP Contract Test

### Controlled test site

Create a test page exposing at least five structured tools:

```text
find_record(query)
create_draft(title, body)
update_record(id, fields)
submit_for_review(id)
publish(id)
```

The visible UI should expose equivalent human actions.

### Test sequence

1. Sign in as Test User A.
2. Open the page in the built-in browser.
3. Record discovered Site tools.
4. Ask Work to find one controlled record.
5. Ask Work to update exactly one field.
6. Verify the visible UI state.
7. Ask Work to create a draft but explicitly prohibit publishing.
8. Navigate to another tab and issue an ambiguous continuation command.
9. Return to the original page.
10. Close and reopen the page.
11. Repeat the task under Test User B.
12. Compare tool availability, target identity, permission scope, and side effects.

### Metrics

- relevant-tool discovery rate;
- correct-tool selection rate;
- target-object fidelity;
- permission-boundary fidelity;
- side-effect precision;
- page/tool attribution fidelity;
- signed-session identity accuracy;
- recovery after navigation/page closure;
- fallback-to-clicking frequency;
- human verification minutes.

## 6. New Metric: Structured Tool Selection Fidelity

```text
STSF =
correct structured tool selections
/
all tasks with a matching Site tool available
```

A low STSF means the capability exists but effective capability remains poor.

## 7. New Metric: Structured Side-Effect Precision

```text
SSEP =
intended state mutations only
/
all state mutations caused by Site tool execution
```

The goal is not merely successful action.

The goal is **bounded successful action**.

## 8. New Metric: UI-Tool Semantic Equivalence

```text
UTSE =
agent-tool actions behaviorally equivalent to visible UI expectations
/
all evaluated agent-tool actions
```

This metric treats the human-facing interface and agent-facing contract as two representations of one product capability.

If they diverge, the website now has two conflicting ontologies.

## 9. New Metric: Human Routing Displacement

```text
HRD =
manual routing / clicking operations eliminated by structured Site tools
/
manual routing / clicking operations required by the equivalent UI-only workflow
```

This is especially relevant to the existing Deep Drift Automation Inversion research.

A good agent-native website should measurably reduce the number of times the human must act as navigator, interpreter, or integration middleware.

## 10. WebMCP and Mini-App / Creator Workflow Convergence

OpenAI's WebMCP Challenge gives examples including:

- collaborative writing in a shared document;
- 3D modeling with an agent while the scene changes live;
- a personalized crossword builder.

These examples reveal a larger creator-workflow convergence:

```text
WEBSITE
+ HUMAN UI
+ AGENT TOOL CONTRACT
+ SHARED LIVE STATE
+ CREATOR ARTIFACT
=
AGENT-NATIVE MINI-APPLICATION
```

This is conceptually adjacent to:

- ChatGPT Sites;
- Google Sheets Canvas read-write mini-apps;
- Gemini interactive simulations/models;
- Anthropic computer/browser use plus Skills/Files;
- Microsoft persistent Copilot Pages and multi-model Researcher workflows.

The frontier is no longer simply "AI generates an app."

It is increasingly:

> The app itself becomes an explicit execution surface for an AI agent.

## 11. Protocol Implication for ĀTØR Seven-Layer State Architecture

| Protocol | WebMCP / Site Tool implication |
|---|---|
| MMSF | Site and page state must be scoped to the correct signed-in session. |
| PSMC | Structured Site tools may cause durable web-state mutations. |
| SSRP | Agent tool result, live webpage state, and backend state must reconcile. |
| ASRF | The exact page, discovered tool, arguments, and result should be reconstructable. |
| PVP | Tool-contract/schema versions need provenance when websites change. |
| ALRTSF | Creator artifacts modified through Site tools need lineage and invariant checks. |
| SCRR | Returning to a page or continuing across tabs must recover the right capability/state context. |

## 12. Broader Platform Scan

### OpenAI

**New in this pass:**

- Site tools / WebMCP in the ChatGPT desktop built-in browser;
- automatic discovery of page-provided structured tools;
- shared live webpage and signed-in session between user and agent;
- WebMCP Challenge promoting agent-native websites and creator applications.

Standing recent signals remain:

- webhook-triggered and shareable scheduled tasks;
- Work as a cross-app artifact-producing agent surface;
- native Google Docs/Sheets/Slides editing;
- Skills packaged through Plugins;
- improved plugin discovery;
- long-conversation segmented loading;
- copy/paste formatting preservation;
- project-memory controls;
- ChatGPT Sites.

### Anthropic

No first-party announcement newer than the previously logged 25 August shared-memory update was found in this scan.

Standing signals remain:

- shared cross-surface memory;
- user-editable/deletable memory;
- Skills API;
- Files API;
- computer use;
- browser use;
- mounted memory stores;
- session observability.

### Google

Ask Gemini in Chat begins rollout on 26 August 2026. No later target-category release was found in this scan.

Standing signals remain:

- interactive Gemini simulations/models;
- Sheets Canvas;
- selective Notebook copying;
- improving spreadsheet structural import/export fidelity.

### Microsoft

No newer target-category first-party release was found in this scan.

Standing signals remain:

- Copilot Pages;
- Word/PDF conversion;
- Researcher;
- Critique and Model Council;
- research-artifact continuity through product transitions.

## 13. Deep Drift Research Position

WebMCP marks an important architectural transition.

The browser agent no longer needs to treat every website as an opaque visual maze.

The site can now publish an explicit agent-facing action grammar.

That is progress.

But it also means the reliability target changes.

We now have to test:

```text
DOES THE TOOL EXIST?
DOES THE AGENT DISCOVER IT?
DOES IT MEAN WHAT THE UI MEANS?
IS THE USER IN THE RIGHT ACCOUNT?
DOES IT MUTATE ONLY THE INTENDED STATE?
CAN THE HUMAN VERIFY THE RESULT?
CAN A REVIEWER RECONSTRUCT THE PATH?
```

Therefore:

```text
STRUCTURED TOOL
!= TRUSTWORTHY TOOL

AGENT-NATIVE WEBSITE
!= RELIABLE AGENT WORKFLOW

LOWER CLICK BURDEN
!= LOWER GOVERNANCE BURDEN
```

The human may finally stop being the mouse.

The system still needs to prove it did not become a very efficient wrong mouse.

## Evidence Boundary

Platform capability claims in this report are grounded in current first-party OpenAI Help Center and OpenAI WebMCP materials, with current Anthropic, Google, and Microsoft sources checked for competing/newer target-category changes. WATCF, its failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, "Using site tools in the ChatGPT desktop app," updated 26 August 2026: https://help.openai.com/en/articles/20001423-using-site-tools-in-the-chatgpt-desktop-app
2. OpenAI, "The WebMCP Challenge," 25 August 2026: https://openai.com/webmcp-challenge/
3. OpenAI Developer Community announcement, "Build Agent Ready Websites with ChatGPT," 25 August 2026: https://community.openai.com/t/build-agent-ready-websites-with-chatgpt/1392588
4. OpenAI Help Center, "Using the built-in browser in the ChatGPT desktop app": https://help.openai.com/en/articles/20001277-using-the-built-in-browser-in-the-chatgpt-desktop-app
5. OpenAI Product Release Notes: https://openai.com/products/release-notes/
6. Anthropic, "Build production agents with computer use, the Skills API, and the Files API," 20 August 2026: https://claude.com/blog/computer-use-skills-api-files-api
7. Google Workspace Updates, "Introducing Ask Gemini in Chat," rollout beginning 26 August 2026: https://workspaceupdates.googleblog.com/2026/08/ask-gemini-in-chat.html
8. Microsoft Support, Microsoft 365 Copilot creator/research workflow documentation: https://support.microsoft.com/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
