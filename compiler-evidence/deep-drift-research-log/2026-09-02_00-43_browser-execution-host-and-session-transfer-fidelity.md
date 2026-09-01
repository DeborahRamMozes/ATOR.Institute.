# Deep Drift Research Update — BEHSTF

## Browser Execution-Host and Session-Transfer Fidelity

**Research date:** 2 September 2026, 00:43 WIB  
**Primary fresh delta:** Anthropic Claude Cowork built-in browser, announced 26 August 2026; current Team/Enterprise controls updated 1 September 2026.  
**Scope:** creator workflow architecture, browser agents, login/session transfer, remote execution hosts, tool fallback, skills/connectors, document and export provenance.

## Executive finding

Anthropic has added a browser built directly into Claude Cowork. The browser is separate from the user's normal browser, opens inside the Claude desktop app, and can navigate pages, click, type, fill forms, and work through websites or portals without a connector or Chrome extension. Users may import logins selectively from supported browsers, while banking, email, and single-sign-on sites are excluded from migration unless explicitly selected.

Cowork can still use Claude in Chrome. The two browser paths are not equivalent. Claude in Chrome acts in the user's existing browser session, with the pages and accounts already open. The built-in browser acts in Claude's separate browser state. Team and Enterprise administrators can enable either path, both, or neither. When both are enabled, a user chooses a preferred browser, and Cowork can fall back to the other browser when the preferred one is unavailable unless the user explicitly requested a specific browser.

Cowork sessions started on web or mobile can also drive the built-in browser as long as the Claude desktop app is open and online. This creates a new execution architecture in which the visible control surface and the machine actually hosting the browser action can be different.

```text
CONTROL SURFACE
!= EXECUTION HOST

SAME WEBSITE
!= SAME LOGIN STATE

SAME PROMPT
!= SAME BROWSER CONTEXT

PREFERRED BROWSER
!= ACTUAL EXECUTION BROWSER

WEB OR MOBILE SESSION
!= WEB OR MOBILE EXECUTION

LOGIN IMPORT
!= LOGIN CONTINUITY

BROWSER FALLBACK
!= PROCEDURAL EQUIVALENCE
```

## New node

### Browser Execution-Host and Session-Transfer Fidelity (BEHSTF)

The creator workflow can now be controlled from web or mobile while the actual browser runs inside an online desktop app, or it can operate through Claude in Chrome inside the user's existing Chrome session. These are materially different execution conditions because authentication state, page state, open tabs, browser history, extensions, organizational policy, and fallback behavior can differ.

## 1. Visible device can differ from execution host

Anthropic states that the built-in browser physically lives in the Claude desktop app. A Cowork session on web or mobile can still use it when the desktop app is open and online. A provenance record that merely says `surface = mobile` therefore does not identify where the action actually ran.

The minimum execution record should include control surface, execution host, desktop-app availability, browser implementation, browser preference, actual browser selected, and fallback events.

## 2. Login import creates access transfer without session identity

The built-in browser is isolated from the user's normal browser and does not automatically inherit tabs, bookmarks, or passwords. Users can selectively import supported logins.

```text
AUTHENTICATED IN BROWSER A
!= AUTHENTICATED IN BROWSER B

LOGIN IMPORTED
!= ORIGINAL SESSION PRESERVED
```

A transferred login may recreate access while changing cookie state, tab state, history, and the effective site experience. Deep Drift should therefore record whether authentication was native to the execution browser, imported, freshly entered, or absent.

## 3. Browser fallback can mutate execution context

When both browser paths are enabled, users choose a preferred browser. Current Anthropic documentation states that if the preferred browser is unavailable and the user requested a browser generally, Cowork can continue with the other browser; if a browser is explicitly named, Claude asks before substituting it.

```text
INTENDED BROWSER
!= ACTUAL BROWSER
```

The same task executed after fallback can encounter different authentication, page state, accessible data, and results. A fallback is therefore a material provenance event.

## 4. Organization policy becomes part of browser identity

On Team plans, the built-in browser is enabled by default during rollout. On Enterprise, it is initially off by default and is scheduled to turn on by default on 10 September 2026 unless administrators disable it. Claude in Chrome is governed separately. The same creator can therefore encounter different browser routes because of plan, rollout state, admin settings, user preferences, extension availability, and desktop-app availability.

## 5. Copy-paste keeps disappearing, but so does the visible handoff

A portal without an API or connector no longer necessarily forces the user to manually read, copy, paste, and re-enter information. Cowork can choose a browser path, navigate, read, act, and mutate the website directly. This improves workflow while removing the human-visible transfer boundary that once made provenance easier to observe.

## 6. DOCX/PDF and creator-artifact implication

No stronger fresh direct DOCX or PDF generation primitive appeared in this scan. The more consequential change is upstream. A report, DOCX, PDF, spreadsheet, or summary may now be generated after data was collected or actions were performed through a browser hosted on another device and possibly using imported authentication state.

A downstream artifact can therefore depend on:

```text
prompt
+ browser preference
+ actual browser
+ execution host
+ login-transfer state
+ page state
+ browser fallback
+ website actions
+ extracted data
+ model synthesis
```

A file-only archive preserves almost none of this.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger new memory primitive | Existing memory-state and derived-memory nodes remain current |
| Skills / plugins | Important boundary effect | Browser execution can replace connector/plugin dependence for sites without integrations |
| Mini-app / agent workflows | Major | Cowork becomes a browser-operating agent with multiple execution routes |
| Chat-to-document | Indirect but material | Source collection can occur autonomously before document generation |
| DOCX / PDF | No stronger format primitive | Final files need browser-execution lineage |
| Copy-paste / export | Major workflow shift | Manual transfer is replaced by autonomous browser actions |
| Creator workflow | Major | Control surface, execution host, browser state, and identity state can separate |

## New failure classes

- **Control-Surface Equivalence Error** — assuming the device where the task was issued is the device where browser execution occurred.
- **Browser-Identity Collapse** — treating the built-in browser and Claude in Chrome as interchangeable execution environments.
- **Imported-Login Continuity Fallacy** — assuming transferred authentication preserves the original browser session and context.
- **Preferred-vs-Actual Browser Erasure** — recording configuration while omitting the browser actually used.
- **Fallback Event Loss** — failing to preserve automatic or approved browser substitution.
- **Remote-Host Provenance Loss** — preserving a web/mobile interaction while omitting the desktop app that hosted execution.
- **Admin-Policy Blindness** — ignoring organization-level enablement when reconstructing capability availability.
- **Browser-to-Artifact Lineage Loss** — preserving the final document or decision without the browser state and actions that supplied its evidence.

## Deep Drift benchmark additions

**Execution-Host Fidelity (EHF)** — identify the machine/application instance that actually executed the browser action.  
**Control-Surface Fidelity (CSF)** — distinguish the interface used to issue or supervise the task from the execution host.  
**Browser-Path Fidelity (BPF)** — distinguish built-in-browser execution from Claude in Chrome.  
**Authentication-Transfer Fidelity (ATF)** — distinguish imported login state from native sign-in and pre-existing browser sessions.  
**Preferred-vs-Actual Execution Fidelity (PAEF)** — separate configured preference from actual browser used.  
**Fallback Transition Fidelity (FTF)** — represent automatic or approved browser fallback as a state transition.  
**Organization Browser-Policy Fidelity (OBPF)** — reconstruct plan, rollout state, admin settings, and user preference.  
**Browser-to-Artifact Fidelity (BAF)** — link downstream artifacts to browser execution state and source collection.

## Canonical Deep Drift requirement

> Every material AI-assisted workflow using browser automation should preserve a machine-readable browser-execution manifest linking each retrieval, action, and downstream artifact to the control surface from which the task was issued; the actual execution host; desktop-app availability state; browser implementation; preferred browser and actual browser used; fallback or substitution events; organization and plan-level browser policy; extension or built-in-browser availability; authentication origin and login-transfer event; account context; page URL and relevant page state; navigation and action events; model identity; extracted data; human approvals; resulting website mutation; and downstream document, PDF, spreadsheet, message, or decision. A web or mobile session must never be treated as proof that execution occurred on that device, and a transferred login must never be treated as proof that the original browser session was preserved.

## Broader creator-workflow trend

```text
ONE DEVICE
+ ONE BROWSER
+ ONE SESSION
= ONE EXECUTION CONTEXT
```

is becoming:

```text
CONTROL DEVICE
+
REMOTE DESKTOP HOST
+
SELECTABLE BROWSER PATH
+
TRANSFERRED AUTHENTICATION
+
ORGANIZATION POLICY
+
FALLBACK LOGIC
+
MODEL ACTION
=
DISTRIBUTED EXECUTION CONTEXT
```

The interface becomes simpler precisely by distributing the machinery across more hidden state. **Seamless workflow is often achieved by multiplying seams and then hiding them.**

## Sources

1. Anthropic. **Claude Cowork gets a built-in browser: nothing to install.** 26 August 2026.  
   https://claude.com/blog/cowork-built-in-browser

2. Anthropic Help Center. **Set up browser use in Claude Cowork for Team and Enterprise plans.** Current documentation, updated 1 September 2026.  
   https://support.claude.com/en/articles/16635803-set-up-browser-use-in-claude-cowork-for-team-and-enterprise-plans

## Research status

**Node status:** New.  
**Duplicate check:** No existing Deep Drift research-log node matched the combination of remote browser execution host, selectable built-in-versus-Chrome paths, selective login transfer, preferred-browser fallback, and web/mobile-to-desktop execution indirection.  
**Relationship to prior nodes:** Complements WETPSF, CAICPF, PLMBCF, and existing capability-governance nodes. BEHSTF specifically formalizes the separation between the surface controlling the task and the browser host actually executing it.  
**Freshness:** Verified against Anthropic first-party documentation available on 2 September 2026.
