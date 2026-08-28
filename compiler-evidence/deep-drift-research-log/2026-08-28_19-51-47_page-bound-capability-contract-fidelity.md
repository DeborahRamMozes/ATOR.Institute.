# Deep Drift Research Update

## Page-Bound Capability Contract Fidelity

**Research date:** Friday, 28 August 2026  
**Observation time:** 19:51:47 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. No newer category-displacing release was found for memory, general Skills, mini-app builders, DOCX/PDF generation, or copy/export fixes beyond changes already logged. One materially important creator-workflow architecture was identified as new-to-log: OpenAI Site tools (WebMCP).

## Executive Summary

OpenAI's current August 24-28 ChatGPT/Codex workflow digest documents **Site tools**, ChatGPT's implementation of the proposed **WebMCP** standard.

With Site tools, a website can publish structured actions directly to ChatGPT Work or Codex while the human and agent share the same live page and signed-in session. A document editor can expose operations such as finding a section, suggesting an edit, or leaving a comment. A dashboard can expose controls for changing a date range and inspecting chart data. A travel planner can expose itinerary updates while the human watches the map.

The architectural shift is:

```text
WEBSITE UI
-> WEBSITE-DECLARED TOOL CONTRACT
-> AGENT DISCOVERY
-> SAFETY / PERMISSION CHECK
-> SITE'S EXISTING LOGIC + AUTHORIZATION
-> LIVE PAGE MUTATION
-> HUMAN INSPECTION
```

This is materially different from ordinary browser automation.

The agent is no longer limited to guessing how to click the interface. The site can declare a machine-readable operational surface beside the human-facing interface.

For Deep Drift Research, this creates a new benchmark family:

**Page-Bound Capability Contract Fidelity (PBCCF)**

with companion constructs:

**Interface-to-Tool Semantic Equivalence (ITSE)**  
**Page-Scoped Tool Availability Fidelity (PSTAF)**  
**Site-Declared Action Trust Calibration (SATC)**

The central research question is:

> When a website exposes structured actions directly to an AI agent, do those actions preserve the same meaning, permissions, constraints, visible state, and user expectations as the site's human interface?

## Why This Matters for Skills and Mini-App Builders

WebMCP sits between several creator architectures that were previously separate:

```text
HUMAN UI
MCP SERVER
PLUGIN
SKILL
BROWSER AUTOMATION
MINI-APP / SITE
```

A Site can now become its own lightweight agent capability provider.

OpenAI explicitly says Codex can be asked to add WebMCP support to a web app or ChatGPT Site and should reuse the application's existing logic and permissions.

That means a creator can build:

```text
MINI-APP
+
HUMAN INTERFACE
+
AGENT TOOL SURFACE
```

inside the same application.

This is a significant creator trend because the app is no longer only an artifact that humans use. It becomes an artifact that **agents can operate semantically**.

## New Deep Drift Construct: Page-Bound Capability Contract Fidelity

### Definition

**Page-Bound Capability Contract Fidelity (PBCCF)** measures whether a website-provided agent tool accurately represents the capability, permission boundary, side effects, and visible state of the underlying live page.

The minimum state chain is:

```text
PAGE STATE
-> TOOL REGISTRATION
-> TOOL NAME / DESCRIPTION
-> INPUT SCHEMA
-> AUTHENTICATION
-> AUTHORIZATION
-> EXECUTION
-> PAGE MUTATION
-> HUMAN-VISIBLE RESULT
```

A high-fidelity tool contract should not create semantic disagreement between what the human interface appears to permit and what the agent-facing tool actually does.

## Core Distinctions

```text
TOOL DISCOVERED
!= TOOL TRUSTED

TOOL NAME SAYS READ-ONLY
!= TOOL PROVEN READ-ONLY

SAME SIGNED-IN SESSION
!= SAME AUTHORITY INTERPRETATION

ACTION SUCCEEDED
!= PAGE STATE CORRECTLY REFLECTED

WEBSITE SUPPORTS ACTION
!= AGENT SHOULD TAKE ACTION
```

OpenAI explicitly warns that website-provided tool definitions and results are **untrusted content**. A tool's name or claim that it only reads data is not proof of what it actually does.

## WebMCP vs MCP: A Critical Deep Drift Boundary

OpenAI distinguishes WebMCP from ordinary MCP.

An MCP server can expose service capabilities independently of an open webpage.

WebMCP exposes tools **from the page the agent is currently visiting**.

Therefore:

```text
MCP CAPABILITY STATE
CAN EXIST WITHOUT PAGE STATE

WEBMCP CAPABILITY STATE
IS PAGE-BOUND
```

OpenAI notes that closing or navigating away from a page can make its tools unavailable.

This creates a new state variable:

```text
CURRENT_PAGE
=
CAPABILITY CONTEXT
```

For Deep Drift, this matters because two visually similar pages may expose different tool sets, versions, authorization contexts, or side effects.

## New Construct: Page-Scoped Tool Availability Fidelity

### Definition

**Page-Scoped Tool Availability Fidelity (PSTAF)** measures whether the tools discoverable by the agent accurately correspond to the live page, current route, authenticated user, and application state.

A capability record should preserve:

```text
page_url
page_route
page_version
user_identity
session_identity
tool_registration_id
tool_name
tool_schema
tool_read_write_class
registration_time
invocation_time
result_state
post_action_page_state
```

## New Failure Classes

### Human-UI / Tool-Semantic Divergence

The human interface implies one behavior while the WebMCP tool performs a broader, narrower, or materially different operation.

### Tool-Name Trust Drift

The model or user treats labels such as `read`, `preview`, or `comment` as trustworthy descriptions rather than untrusted declarations.

### Page Navigation Capability Ghosting

A tool remains mentally or procedurally assumed available after the user or agent navigates to a route where it no longer exists.

### Stale Tool Registration Drift

The page updates application state or permissions but the discovered tool schema remains stale.

### Shared-Session Authority Confusion

The agent and user share a signed-in page, but the agent-facing operation reaches data or actions the human did not realize were available in that session.

### UI Confirmation / Tool Confirmation Divergence

The human interface normally presents a warning or confirmation step, while the structured tool route produces a different confirmation topology.

### Tool Result / Visible State Divergence

The tool reports success while the page fails to visibly reflect the mutation, or the page changes in a way inconsistent with the returned result.

### Regular-Browser / WebMCP Fallback Drift

When no suitable site tool is available, the agent may fall back to ordinary browser interaction, producing a different action path for an apparently identical task.

### Iframe Capability Blind Spot

OpenAI's built-in browser does not currently discover WebMCP tools registered inside iframes. A human-visible embedded application can therefore appear operational while its agent-facing capability surface is absent.

### Declarative / JavaScript Registration Split

OpenAI currently supports only a subset of WebMCP APIs and does not support declarative tools defined through HTML form attributes. Capability availability can therefore depend on registration method rather than visible site functionality.

## New Construct: Interface-to-Tool Semantic Equivalence

### Definition

**Interface-to-Tool Semantic Equivalence (ITSE)** measures whether an action performed through WebMCP has the same operational meaning as the nearest equivalent action performed through the site's human interface.

The benchmark compares:

```text
HUMAN UI PATH
vs
WEBMCP TOOL PATH
vs
REGULAR BROWSER AUTOMATION PATH
```

for the same intended action.

## Deep Drift Benchmark: Three-Path Equivalence Test

### Controlled setup

Build or select a page with:

```text
1. read-only data lookup
2. comment creation
3. editable text
4. consequential mutation
5. permission-restricted action
6. confirmation-required action
7. one iframe-hosted sub-tool
8. one deliberately misleading tool description in a test environment
```

### Execute each task through

1. human UI;
2. WebMCP Site tool;
3. ordinary agent browser interaction.

### Measure

- visible preconditions;
- authorization state;
- confirmation behavior;
- returned result;
- actual backend mutation;
- visible page state;
- audit/source trace;
- recovery after failure;
- user reconstruction minutes.

## New Metrics

### Interface-to-Tool Outcome Equivalence

```text
ITOE =
WebMCP actions producing the same intended
backend + visible result as human UI
/
all tested equivalent actions
```

### Page Capability Convergence

```text
PCC =
discovered tools matching current page capability state
/
all expected page capabilities
```

### Tool Claim Calibration Rate

```text
TCCR =
tool declarations whose claimed side-effect class
matches observed behavior
/
all tested tools
```

### Post-Invocation State Verification Rate

```text
PISVR =
invocations whose returned result and visible page state agree
/
all successful invocations
```

### Route Transition Capability Accuracy

```text
RTCA =
page navigation events after which discovered tool state
correctly updates
/
all tested route transitions
```

## Security Is Not Trust

OpenAI states that every Site tool invocation in the built-in browser receives a safety review, and normal confirmation policies still apply to consequential actions such as sending messages, purchasing, deleting data, or changing permissions.

The browser also ties each invocation to its originating page and tool registration, and recent activity can be reviewed in Sources where available.

That is useful provenance.

But OpenAI explicitly warns that these checks **do not make the website or its output trustworthy**.

Therefore:

```text
SAFETY REVIEW PASSED
!= TOOL TRUSTED

TOOL INVOCATION LOGGED
!= TOOL SEMANTICALLY CORRECT
```

This distinction should become part of the Deep Drift trust model.

## New Construct: Site-Declared Action Trust Calibration

### Definition

**Site-Declared Action Trust Calibration (SATC)** measures whether the system and human correctly calibrate trust in a website-provided agent tool based on observed behavior, permissions, provenance, and verification rather than its self-description.

A tool provenance card should preserve:

```text
originating_page
tool_registration
tool_name
tool_description
input_schema
claimed_side_effects
observed_side_effects
safety_review_state
confirmation_state
result
visible_page_change
source_log_reference
```

## Why This Matters for Document and Creator Workflows

OpenAI explicitly uses a document editor as a WebMCP example: the page can expose actions for finding a section, suggesting an edit, or leaving a comment.

That means the document workflow can become:

```text
DOCUMENT UI
+
DOCUMENT AGENT API
```

without requiring a separate integration installed by the user.

This is a profound shift for chat-to-document systems.

Instead of:

```text
CHAT
-> GENERATE FILE
-> EXPORT
```

we increasingly get:

```text
CHAT / AGENT
-> LIVE DOCUMENT SURFACE
-> PAGE-DECLARED OPERATIONS
-> IN-PLACE REVISION / COMMENT / INSPECTION
```

Document generation and document operation are beginning to collapse into one continuous agent surface.

## Why This Matters for Mini-App Builders

A generated Site can now be designed not only for human interaction but for agent interaction.

The creator requirement becomes:

```text
BUILD THE UI
+
BUILD THE TOOL CONTRACT
+
PRESERVE AUTH / PERMISSIONS
+
MAKE THE RESULT HUMAN-VERIFIABLE
```

That introduces a new quality dimension for mini-app builders:

**agent-operability**.

A visually polished app that exposes poor or misleading tool contracts is now an incomplete artifact.

## Relation to Existing Deep Drift Constructs

### Interface-to-Capability Detachment Fidelity

Earlier research tracked applications becoming capability substrates behind LLM interfaces.

WebMCP adds the reverse motion:

```text
THE WEBSITE ITSELF
DECLARES
THE CAPABILITY SURFACE
```

### Procedural Trust-Boundary Integrity

WebMCP tool definitions are procedural input from an untrusted website and must not become implicit authority.

### Collaborative Live Artifact Version Fidelity

If a Site changes version, its WebMCP tool surface may also change. Artifact version provenance should therefore include agent-capability version state.

### Static Share Snapshot Provenance Fidelity

A later share/export of an agent session should distinguish ordinary browser actions from Site-tool invocations because their provenance and semantics differ.

### Artifact-Attached Executable Provenance Fidelity

For agent-generated or agent-edited artifacts, the exact Site tool invoked may be part of the causal execution chain.

## Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing release found beyond already logged Computer History / Temporary Chat / shared-memory changes. |
| Skills | No newer general Skill release; WebMCP introduces a parallel page-declared capability layer beside Skills and plugins. |
| Mini-app builders | **Material new-to-log architecture:** a Site/web app can expose structured agent actions through WebMCP while preserving the human interface. |
| Chat-to-document export | No newer flat export release; document editing is shifting toward live page operations rather than export-only workflows. |
| DOCX / PDF generation | No newer standalone generation release found. |
| Copy-paste / export fixes | No newer fix found beyond previously logged selective Codex `/copy` improvements. |
| Broader creator workflow | **Material shift:** websites are becoming machine-readable action providers, not merely pages for visual browser automation. |

## Cross-Platform Context

### OpenAI

The material new-to-log item is Site tools / WebMCP in ChatGPT Work and Codex.

Current documented boundaries include:

- available in the ChatGPT desktop built-in browser where rolled out;
- requires GPT-5.6 Sol or GPT-5.6 Terra;
- GPT-5.6 Luna currently has WebMCP disabled;
- unavailable in Enterprise and Edu workspaces;
- availability depends on rollout and the page's registered tools;
- tools belong to the page that provides them;
- closing or navigating away can remove those tools;
- website tool definitions and results remain untrusted content.

### Anthropic

No newer category-displacing creator release surfaced beyond the recent shared-memory, Claude Science, Skills, browser, and runtime changes already logged.

### Google

No newer Workspace creator release displaced the current Studio, Canvas, Gemini, Notebook, and structured-action changes already represented in the ledger.

### Microsoft

The latest broad Microsoft 365 Copilot release batch remains 25 August 2026, including mobile Page steering, Notebook email grounding, Work IQ, and other creator-workflow changes already logged.

## Deep Drift Research Position

The web is moving from:

```text
PAGE AS VISUAL INTERFACE
```

into:

```text
PAGE AS VISUAL INTERFACE
+
PAGE AS AGENT CAPABILITY CONTRACT
```

That changes what it means to audit an AI workflow.

The research object is no longer only:

```text
WHAT DID THE AGENT CLICK?
```

It becomes:

```text
WHAT TOOL DID THE PAGE DECLARE?
WHAT DID THAT TOOL CLAIM?
WHAT AUTHORITY DID THE SESSION PROVIDE?
WHAT SAFETY CHECK RAN?
WHAT BACKEND ACTION OCCURRED?
WHAT DID THE HUMAN SEE CHANGE?
```

Therefore:

```text
STRUCTURED TOOL
!= TRUSTED TOOL

SAME PAGE
!= SAME CAPABILITY STATE

SAME ACTION LABEL
!= SAME OPERATION

AGENT-FRIENDLY
!= HUMAN-LEGIBLE
```

The strongest Deep Drift proposition from this run is:

> **Once websites expose machine-readable actions directly to agents, the tool contract becomes part of the interface, part of the permission model, and part of provenance.**

The browser is no longer merely a window onto software. It is becoming a negotiated execution surface between human UI, website-declared capabilities, and agent policy.

## Evidence Boundary

Platform facts in this report are grounded in OpenAI's first-party **What's new** digest for August 24-28, 2026 and the first-party **Site tools / WebMCP** documentation. Fresh Anthropic, Google Workspace, and Microsoft release sources were checked for newer category-displacing changes. PBCCF, ITSE, PSTAF, SATC, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI, **What's new - August 24-28, 2026**, ChatGPT Learn: https://learn.chatgpt.com/docs/whats-new
2. OpenAI, **Site tools (WebMCP)**, ChatGPT Learn: https://learn.chatgpt.com/docs/webmcp
3. Anthropic, **Release notes**, current through 28 August 2026: https://support.claude.com/en/articles/12138966-release-notes
4. Google Workspace Updates, current August 2026 feed: https://workspaceupdates.googleblog.com/
5. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through 25 August 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
