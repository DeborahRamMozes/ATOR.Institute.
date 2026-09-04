# Deep Drift Research Update - AERF

## Adaptive Execution-Route Fidelity

**Research date:** 4 September 2026  
**Primary fresh delta:** Anthropic's current Claude Cowork documentation describes an adaptive execution hierarchy for tasks: Cowork prefers a direct connector when available, falls back to browser interaction when needed, and then uses direct screen interaction/computer use for desktop applications without a connector or browser path. In parallel, Cowork sessions can run in Anthropic's cloud while some capabilities still depend on the local Claude Desktop app remaining online.

## Executive finding

The same user request is no longer tied to one execution mechanism.

```text
USER TASK
   |
   +--> CONNECTOR
   |
   +--> BUILT-IN BROWSER / CLAUDE IN CHROME
   |
   +--> DIRECT SCREEN INTERACTION
```

For Deep Drift:

```text
SAME TASK
!= SAME EXECUTION ROUTE

SAME RESULT
!= SAME PERMISSION PATH

CLOUD SESSION ALIVE
!= LOCAL CAPABILITY ALIVE

SAME WEBSITE
!= SAME LOGIN CONTEXT

SAME AGENT
!= SAME OBSERVATION CHANNEL
```

The new provenance object is the **execution-route decision**.

## 1. Cowork now chooses among multiple execution routes

Anthropic documents a priority order for Cowork computer work:

1. **Connector** when a supported direct integration exists.
2. **Browser** when no connector is available for the task.
3. **Screen interaction / computer use** when Claude must directly click, type, and navigate desktop applications.

This means a user can issue one semantic instruction while the system chooses materially different mechanisms underneath it.

```text
"Update the spreadsheet"

ROUTE A -> connector/API-like action
ROUTE B -> browser UI
ROUTE C -> desktop application screen interaction
```

Those routes differ in speed, reliability, authentication context, observable evidence, failure mode, and permission boundary.

## 2. Route selection is causal state

A research log that records only `prompt -> output` misses the pathway that created the output.

Deep Drift should preserve where observable:

```text
requested_task
selected_route
route_reason
available_connectors
browser_mode
screen_interaction_state
permission_grants
local_app_state
result
```

Two identical outputs produced through different routes should not be treated as methodologically identical.

## 3. Connector execution and screen execution are not equivalent

Anthropic explicitly says connector access is typically faster and more reliable than navigating the corresponding application through the screen.

Therefore:

```text
SUCCESS THROUGH CONNECTOR
!= SUCCESS THROUGH GUI NAVIGATION
```

A regression from connector use to browser or direct screen interaction can look like model-quality drift while actually being **route drift**.

This is especially important when benchmarking latency, error rate, tool reliability, or action completion.

## 4. Cloud continuity can mask local capability loss

Cowork sessions can continue running in Anthropic's cloud even when the user's computer is closed or offline. However, local files, local connectors, browser use that depends on the desktop app, and computer use can require Claude Desktop to remain open and online.

That produces a split state:

```text
SESSION STATE: RUNNING
LOCAL EXECUTION CAPABILITY: UNAVAILABLE
```

For Deep Drift, session liveness and capability liveness must be tracked separately.

A task can still be "running" while losing the exact local resources required to finish it.

## 5. Cross-device steering does not imply cross-device execution

Anthropic documents that Cowork sessions and files can move across desktop, web, and mobile, and the user can steer the same cloud session from another surface.

But local file access, browser control, and computer use may still be executed through the desktop machine.

So:

```text
CONTROL SURFACE
!= EXECUTION SURFACE
```

A user can steer from mobile while the desktop remains the machine actually touching files, browser sessions, or applications.

This must be preserved in provenance.

## 6. Browser identity is itself route state

Claude Cowork now has a built-in browser that is separate from the user's normal browser. Anthropic also supports Claude in Chrome.

The built-in browser can retain site logins across Cowork sessions, and users can selectively import cookies from supported browsers.

Therefore:

```text
WEBSITE X IN BUILT-IN BROWSER
!= WEBSITE X IN USER CHROME
```

Even when the URL is identical, the effective identity, session cookies, authorization scope, and visible data may differ.

The correct provenance object is:

```text
browser_type
site
account/session identity
cookie/import state
authorization state
```

not merely the website URL.

## 7. Screen interaction creates visual observation provenance

Anthropic says computer use relies on screenshots so Claude can understand and navigate the screen.

This introduces a different evidence channel from connectors.

```text
CONNECTOR ROUTE
-> structured service data

SCREEN ROUTE
-> rendered pixels / screenshots
```

These channels can expose different information even when they refer to the same application.

For Deep Drift, **observation modality** should therefore be recorded separately from action intent.

## 8. Per-app permission is route-specific execution state

Computer use requires application-level permission before Claude can interact with an app. Some application classes are blocked by default.

A task can therefore fail because:

```text
MODEL CANNOT SOLVE TASK
OR
ROUTE NOT AVAILABLE
OR
APP PERMISSION DENIED
OR
APP BLOCKED
```

Without route and permission evidence, these causes collapse into one vague "agent failed" label.

## 9. There is no sandbox between computer use and approved applications

Anthropic states that computer use directly interacts with the user's desktop, apps, and browser rather than operating inside a separate sandbox.

For Deep Drift this is not primarily a fear statement; it is a provenance statement.

```text
SCREEN ACTION
-> REAL APPLICATION STATE CHANGE
```

The action log should therefore distinguish simulated/preview behavior from direct mutation of local application state.

## 10. Background work now has two meanings

Cowork in the cloud can continue while the user's device is offline. Computer-use work that touches local apps, however, depends on the relevant desktop machine remaining available.

Thus "background" can mean:

```text
A. CLOUD BACKGROUND EXECUTION
B. REMOTE CONTROL OF AN ONLINE LOCAL MACHINE
```

Those are different architectures and must not share one undifferentiated background-execution label.

## 11. Dispatch extends the execution chain across devices

Anthropic also documents Dispatch, where instructions sent from a mobile device can cause Claude to perform work through the user's desktop environment, including local files, connectors, plugins, browser use, and computer use when supported.

The causal path can become:

```text
MOBILE INSTRUCTION
-> CLOUD / ACCOUNT SESSION
-> DESKTOP APP
-> LOCAL BROWSER OR APPLICATION
-> FILE / APP STATE CHANGE
```

This introduces **control-location vs execution-location** as a first-class Deep Drift variable.

## 12. Static DOCX/PDF reports flatten route evidence

A final report can preserve the outcome of a Cowork task while erasing whether the work happened through:

- a connector;
- a built-in browser;
- Claude in Chrome;
- local desktop interaction;
- cloud-only execution;
- a mobile-steered desktop session.

Therefore:

```text
FINAL DOCUMENT
!= COMPLETE EXECUTION PROVENANCE
```

A DOCX or PDF research report should include an execution-route manifest when the route materially affects reproducibility.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger new delta found in this run | Existing project/session memory nodes remain current |
| Skills / plugins | Material execution interaction | Skills and plugins now coexist with browser and computer-use fallback routes |
| Mini-app / agent builders | Indirect | Agent capability increasingly includes route selection across tools and UI surfaces |
| Chat-to-document | Material provenance implication | Finished reports may conceal which execution route gathered or changed their source material |
| DOCX/PDF | Material archival implication | Static files flatten route, permission, observation, and device state |
| Copy-paste/export | No stronger direct fix found | Route provenance is the stronger newly observed workflow delta |
| Creator workflow | **Major fresh delta** | The agent now selects among structured connector calls, browser automation, and direct desktop interaction |

## New failure classes

### Route-Equals-Agent Fallacy
Treating a behavior change as model drift when the execution route changed.

### Session-Liveness Fallacy
Assuming that because a cloud session is still running, local file/browser/computer capability is still available.

### Control-Equals-Execution Surface Error
Assuming the device from which the user steers the task is the device on which the action executes.

### Browser-Identity Collapse
Treating built-in browser state and the user's own Chrome session as equivalent.

### Observation-Channel Blindness
Ignoring whether information came from structured connector data or rendered screen pixels.

### Permission-Cause Erasure
Calling a failed action an agent failure when the actual cause was app permission, browser state, blocklist, or unavailable local execution.

## Deep Drift benchmark additions

**Execution Route Fidelity (ERF)**  
Can the archive identify which execution route completed each action?

**Route Drift Detection (RDD)**  
Can performance changes be separated from shifts between connector, browser, and screen interaction?

**Control/Execution Surface Fidelity (CESF)**  
Can the surface used to steer the task remain separate from the machine or surface that executed it?

**Capability Liveness Fidelity (CLF)**  
Can session liveness remain separate from local file, browser, connector, and computer-use availability?

**Observation Modality Fidelity (OMF)**  
Can connector-derived structured evidence remain distinguishable from screenshot/pixel-derived evidence?

**Browser Identity Fidelity (BIF)**  
Can built-in browser, Claude in Chrome, account login, cookie state, and authorization scope remain versioned?

## DRPA-1.0 protocol additions

### ADAPTIVE EXECUTION-ROUTE RULE

> When an agent can choose among connectors, browser automation, direct screen interaction, local tools, or cloud execution to fulfill the same user intent, preserve the selected execution route as first-class provenance. Record route availability, selection, route-specific permissions, observation modality, and the result. Do not attribute behavior changes to the model until route drift has been excluded.

### CONTROL-EXECUTION SURFACE SEPARATION RULE

> Preserve the surface from which a user starts or steers a task separately from the surface, device, or runtime where the action executes. Mobile, web, desktop, browser, and cloud participation may coexist in one causal chain.

### CAPABILITY-LIVENESS RULE

> Session liveness must be recorded separately from capability liveness. A cloud task may continue running while local files, browser control, local connectors, or computer use are unavailable because the desktop app or local machine is offline.

### BROWSER-IDENTITY STATE RULE

> When an agent can use more than one browser context, preserve browser type, site identity, login/cookie state, imported credentials where observable, and authorization scope. The same URL must not be treated as the same data context across browser runtimes.

## Eir'an state-flow addition

```text
INTENT:
user task
steering surface

ROUTE:
connector
built-in browser
user Chrome
screen interaction
cloud-only
local tool

IDENTITY:
service account
browser session
cookie/login state

PERMISSION:
connector authorization
site permission
app permission
block state

EXECUTION:
cloud runtime
local desktop runtime
device online/offline

OBSERVATION:
structured connector data
browser DOM/page
screen pixels/screenshots

OUTPUT:
file
message
app mutation
report
```

## Canonical Deep Drift requirement

> Treat execution route, observation modality, permission state, browser identity, device state, and control surface as separate provenance layers. The same agent request can traverse different mechanisms and therefore cannot be reproduced from prompt and final output alone.

## Deep Drift principle

> **The agent did not merely act; it chose a road, and the road changed what the action meant.**

Operationally:

> **Archive the route before blaming the model.**

## Sources

1. Anthropic Help Center. **Let Claude use your computer in Cowork.** Updated during the week of 4 September 2026. Documents route priority across connectors, browser, and screen interaction; per-app permissions; screenshot-based computer use; direct interaction with approved applications; and plan/platform limits.  
   https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork

2. Anthropic Help Center. **Use the built-in browser in Claude Cowork.** Updated during the week of 4 September 2026. Documents built-in-browser behavior, its distinction from Claude in Chrome, persistent site logins, selective cookie import, and dependence on the Claude Desktop app for browser-driving tasks.  
   https://support.claude.com/en/articles/16607400-use-the-built-in-browser-in-claude-cowork

3. Anthropic Help Center. **Use Claude Cowork on web, desktop, and mobile.** Updated 4 September 2026. Documents cloud sessions, cross-surface continuity, device-dependent local capabilities, local-file/browser/computer access through the desktop app, and background execution semantics.  
   https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile

4. Anthropic Help Center. **Assign tasks from anywhere in Claude Cowork.** Current September 2026 documentation. Documents Dispatch and mobile-to-desktop task execution chains.  
   https://support.claude.com/en/articles/13947068-assign-tasks-from-anywhere-in-claude-cowork

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift research-log node was found for adaptive selection among connector, browser, and screen-interaction routes plus cross-device control/execution separation as one provenance problem.  
**Relationship to prior nodes:** Extends HASPF (approval scope), WMSSF (workspace/account state), GISF (interaction state), and AATRF (audit evidence). AERF is distinct because it focuses on the hidden execution-path choice underneath a semantically identical user task.  
**Freshness:** The relevant Anthropic Cowork documentation was updated during the week of 4 September 2026, with the cross-surface Cowork article updated on 4 September 2026 itself.