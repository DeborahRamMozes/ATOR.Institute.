# Deep Drift Research Update

## Interface-to-Capability Detachment Fidelity

**Research date:** Friday, 28 August 2026  
**Observation time:** 17:43 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. One materially new same-day creator-workflow architecture identified: Salesforce and Anthropic launched Claudeforce / Salesforce in Claude on 28 August 2026. No newer category-displacing release was found in this pass for general memory, chat-to-DOCX/PDF generation, or copy-paste/export fixes.

## Executive Summary

Salesforce and Anthropic announced **Claudeforce** on 28 August 2026. Its first product, **Salesforce in Claude**, is a Claude plugin with **37 pre-built sales Skills** that can reason over live Salesforce revenue context, update pipeline state, and execute governed actions without leaving Claude.

The important architecture is larger than CRM integration. Salesforce says the plugin uses Claude's reasoning, agentic tool use, and **generative UI**. During onboarding, Claude can read company context from Salesforce, Slack, and connected systems, then generate a personalized interactive dashboard. Salesforce also says actions are routed through Salesforce so existing business rules apply, while authentication and permissions can be managed centrally rather than rebuilt per user.

Salesforce's broader **Headless 360** direction exposes data, workflows, business logic, permissions, and enterprise capabilities to AI through MCP, APIs, and CLI tools. Salesforce separately describes more than 100 reusable Agent Skills that package orchestration, validation, resources, and business logic into governed capabilities.

The creator-workflow shift is therefore:

```text
FIXED APPLICATION UI
-> HEADLESS ENTERPRISE CAPABILITIES
-> LLM / AGENT AS INTERFACE
-> DYNAMIC GENERATIVE UI
-> GOVERNED ACTION
```

For Deep Drift Research, this creates a new benchmark family:

**Interface-to-Capability Detachment Fidelity (ICDF)**

with companion constructs:

- **Skill-to-Business-Rule Binding Fidelity (SBRBF)**
- **Generative Interface State Fidelity (GISF)**

The central research question is:

> When software capabilities are detached from their original application interface and invoked through an LLM, does the agent preserve the same permissions, business rules, state meaning, and action consequences that governed the original system?

## Why This Matters for Skills

The current industry narrative around Skills is often painfully shallow:

```text
SKILL = REUSABLE PROMPT
```

Claudeforce makes that model obsolete.

A serious enterprise Skill can now package or depend on:

```text
PROCEDURE
+ LIVE DATA
+ BUSINESS LOGIC
+ PERMISSIONS
+ VALIDATION
+ ACTIONS
+ UI GENERATION
```

Salesforce explicitly says the 37 sales Skills are not generic CRM prompts wrapped around an API. They are designed around Claude's reasoning, tool use, and generative UI while actions continue through Salesforce governance.

Deep Drift should therefore distinguish:

```text
PROMPT REUSE
!= PROCEDURAL CAPABILITY

PROCEDURAL CAPABILITY
!= GOVERNED BUSINESS CAPABILITY

SKILL AVAILABLE
!= SKILL AUTHORITY EQUIVALENT
```

## New Deep Drift Construct: Interface-to-Capability Detachment Fidelity

### Definition

**Interface-to-Capability Detachment Fidelity (ICDF)** measures whether a capability behaves consistently when removed from its original fixed interface and invoked through an LLM, agent, plugin, generative UI, or another conversational surface.

The relevant state chain is:

```text
ORIGINAL APPLICATION
-> DATA MODEL
-> BUSINESS RULES
-> PERMISSIONS
-> WORKFLOW
-> HEADLESS CAPABILITY
-> AGENT INVOCATION
-> GENERATED INTERFACE
-> ACTION
-> SYSTEM-OF-RECORD MUTATION
```

A high-fidelity detached capability should preserve the semantics of the original system, not merely its API reachability.

## Core Deep Drift Distinction

```text
SAME BACKEND
!= SAME USER EXPERIENCE

SAME DATA
!= SAME DECISION CONTEXT

ACTION AVAILABLE
!= ACTION SAFE TO EXECUTE

PERMISSION INHERITED
!= PERMISSION UNDERSTOOD BY HUMAN

GENERATIVE UI
!= STABLE UI CONTRACT
```

The last distinction is important. In fixed software, humans learn where controls are, what labels mean, and where irreversible actions live. In generative UI, the interface can be reconstructed dynamically around current context. That is powerful. It also means the control surface itself becomes model-mediated state.

## New Construct: Skill-to-Business-Rule Binding Fidelity

### Definition

**Skill-to-Business-Rule Binding Fidelity (SBRBF)** measures whether a reusable agent Skill consistently executes within the business rules, validation constraints, permissions, and system-of-record semantics that govern the underlying enterprise action.

The required chain is:

```text
SKILL INVOCATION
-> INTENT INTERPRETATION
-> BUSINESS RULE RESOLUTION
-> PERMISSION CHECK
-> VALIDATION
-> ACTION
-> SYSTEM-OF-RECORD UPDATE
-> CONFIRMATION
```

The dangerous shortcut is:

```text
SKILL CALLED
-> API CALLED
-> SUCCESS
```

That is not governance. That is merely plumbing wearing a tie.

## New Construct: Generative Interface State Fidelity

### Definition

**Generative Interface State Fidelity (GISF)** measures whether dynamically generated dashboards, views, forms, and action surfaces expose the correct current state and preserve the meaning and constraints of the underlying application.

Salesforce says Claude can generate personalized dashboards from enterprise context. That means the UI may vary by:

- user role;
- account context;
- pipeline state;
- active permissions;
- connected Slack context;
- connector availability;
- Skill invocation;
- current business rules.

A generated dashboard is therefore not a cosmetic artifact. It is a state-bearing execution surface.

## New Failure Classes

### Headless Rule Bypass Drift

The agent reaches a backend capability through a headless route that does not enforce the same validation path as the original application.

### Permission Semantics Drift

A user retains technically correct access, but the LLM-generated interface presents an action in a way that obscures why it is allowed, what scope it affects, or which policy governs it.

### Dynamic UI Action Ambiguity

The interface is generated correctly enough to look plausible, but labels, grouping, or hierarchy make a destructive or high-impact action appear routine.

### Skill / System-of-Record Divergence

The Skill interprets business state differently from the system of record, causing an update that is syntactically valid but semantically wrong.

### Cross-Surface Rule Inconsistency

The same capability invoked from Salesforce, Claude, or Slack produces different effective validation, defaults, or confirmation behavior.

### Context Overreach

A personalized dashboard uses Salesforce, Slack, and connector context beyond what the human expected to influence the current task.

### Centralized Authentication / Local Intent Gap

Authentication is centrally correct, but the individual user's immediate intent to expose or mutate a specific object is not explicit at the moment of action.

### Skill Version / Business Rule Drift

A Skill changes while the underlying Salesforce process or validation rules also change, leaving no stable historical record of which procedural/business-rule pairing produced an artifact or mutation.

### Generated Dashboard State Staleness

The interactive view is generated from a momentary snapshot, but users continue acting on it after underlying pipeline or account state changes.

### Capability Discovery Bias

The model surfaces the capabilities it predicts are useful, while valid alternatives remain invisible because the fixed application's complete navigation structure no longer exists.

## Deep Drift Benchmark: Same Capability, Three Interfaces

### Controlled setup

Choose one governed workflow, for example:

```text
OPPORTUNITY STAGE UPDATE
```

Run it through:

```text
A. Salesforce fixed UI
B. Salesforce in Claude
C. Slack / agent surface connected to Salesforce
```

Use the same:

- user identity;
- Salesforce record;
- role;
- validation rule;
- approval policy;
- starting state.

### Test sequence

1. Perform a valid stage update.
2. Attempt an update that violates a validation rule.
3. Attempt an update outside role authority.
4. Change one business rule.
5. Re-run across all three interfaces.
6. Change the user's role.
7. Re-run.
8. Generate a dashboard before a record update, then change the record elsewhere and test whether the dashboard reveals staleness.
9. Compare confirmation language, visible context, warnings, and final system-of-record state.

## New Metrics

### Cross-Interface Rule Equivalence

```text
CIRE =
controlled actions receiving equivalent
business-rule outcomes across interfaces
/
all controlled actions
```

### Permission Outcome Equivalence

```text
POE =
authorization decisions matching intended
system-of-record policy across interfaces
/
all permission tests
```

### Generative UI State Accuracy

```text
GUSA =
generated UI elements reflecting current
underlying record + permission + workflow state
/
all material displayed state elements
```

### Skill-to-Record Mutation Accuracy

```text
SRMA =
Skill-driven mutations matching intended
business semantics and final record state
/
all controlled mutations
```

### Capability Visibility Coverage

```text
CVC =
relevant valid capabilities discoverable
through the agent interface
/
all relevant capabilities available in the governed system
```

## The Interface Is Becoming Ephemeral

Traditional software provenance assumes the application interface is reasonably stable.

A user can document:

```text
CLICK SETTINGS
-> OPEN PIPELINE
-> CHANGE STAGE
```

Generative UI breaks that assumption.

The future provenance record may need:

```text
GENERATIVE_UI_STATE_CARD

surface:
user:
role:
source_system:
record_context:
skill:
skill_version:
capabilities_exposed:
capabilities_hidden:
business_rules_active:
permissions_active:
generated_components:
action_labels:
confirmation_required:
generated_at:
underlying_state_timestamp:
mutation_result:
unknown_fields:
```

Without this, later reviewers may know that Claude changed a record but not **what interface Claude presented to the human when the decision was made**.

## Broader Creator Workflow Trend: Software Becomes Capability Substrate

Salesforce states the direction unusually clearly: enterprise software is moving away from requiring users to navigate fixed interfaces and toward exposing data, workflows, and business rules directly to agents.

The resulting stack is:

```text
APPLICATION AS DESTINATION
-> APPLICATION AS CAPABILITY SUBSTRATE
```

This is one of the most important creator-workflow trends in the current scan.

It affects more than CRM.

The same architectural logic applies to:

- design software;
- document systems;
- research databases;
- publishing systems;
- accounting systems;
- project-management tools;
- code repositories;
- studio asset systems.

The user increasingly asks the model for an outcome rather than navigating the original application.

That means the research object shifts from:

```text
CAN THE AI USE THE SOFTWARE?
```

to:

```text
CAN THE SOFTWARE'S RULES SURVIVE
WHEN ITS INTERFACE DISAPPEARS?
```

## Relation to Mini-App Builders

Claudeforce also reinforces the mini-app trend from another direction.

ChatGPT Sites and Google Sheets Canvas generate lightweight interactive applications as artifacts. Salesforce in Claude generates contextual enterprise dashboards and views as interaction surfaces over live business systems.

The distinction is useful:

```text
GENERATED MINI-APP AS ARTIFACT
vs
GENERATED UI AS TEMPORARY CONTROL SURFACE
```

Deep Drift should benchmark both.

A persistent Site requires version lineage.

A temporary generative enterprise dashboard requires state lineage.

## Relation to Memory

No new general memory release displaced the latest OpenAI and Anthropic memory changes in this scan.

But Claudeforce adds another adjacent state problem: **enterprise context assembly**.

Claude may combine:

```text
SALESFORCE STATE
+ SLACK CONTEXT
+ CONNECTOR CONTEXT
+ CURRENT PROMPT
+ SKILL PROCEDURE
```

That is not simply user memory.

It is runtime organizational context.

Deep Drift should preserve it separately.

## Relation to Skills

Salesforce in Claude launches with 37 pre-built sales Skills, while Salesforce's broader Headless 360 platform describes more than 100 reusable Agent Skills.

This strengthens a current Deep Drift trend:

```text
SKILL
-> PROCEDURE PACKAGE
-> GOVERNED ENTERPRISE CAPABILITY
```

The Skill is becoming a portable layer between model reasoning and institutional procedure.

That makes Skill provenance increasingly equivalent to software-version provenance.

## Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing release found beyond the latest OpenAI Temporary Chat and Anthropic shared Chat/Cowork memory changes already logged. |
| Skills | **Material same-day update:** Salesforce in Claude launches with 37 governed sales Skills; Salesforce's broader headless architecture exposes reusable enterprise Skills/capabilities to agents. |
| Mini-app builders | **Material adjacent trend:** Claude can generate personalized interactive dashboards over live Salesforce/Slack/connector context. |
| Chat-to-document export | No newer category-displacing launch found in this pass. |
| DOCX / PDF generation | No newer standalone release found in this pass. |
| Copy-paste / export fixes | No newer fix found in this pass. |
| Broader creator workflow | **Major shift:** fixed application UI is being detached from backend business capability; the LLM becomes the interface while governance remains in the source system. |

## Availability Boundary

Salesforce states that Salesforce in Claude is available to selected pilot customers now and is planned for **open beta in September 2026**. Additional pre-built Skills are expected later in 2026.

Deep Drift should therefore record rollout state separately from architectural announcement state:

```text
ANNOUNCED
!= GENERALLY AVAILABLE

PILOT
!= OPEN BETA

OPEN BETA
!= ENTERPRISE-WIDE PRODUCTION
```

## Deep Drift Research Position

The most important result from this run is not "Claude now connects to Salesforce."

That sentence is technically true and analytically boring.

The meaningful shift is:

> **The application interface is being separated from the application's capabilities.**

Once an LLM can dynamically assemble the interface, choose which capabilities to expose, interpret intent, and execute governed actions against the system of record, the interface itself becomes part of model behavior.

Therefore:

```text
BACKEND GOVERNED
!= INTERFACE GOVERNED

PERMISSION CORRECT
!= HUMAN UNDERSTANDING CORRECT

SKILL EXECUTED
!= BUSINESS MEANING PRESERVED

GENERATIVE UI CONVENIENT
!= GENERATIVE UI TRACEABLE
```

Deep Drift should now treat **interface generation, capability selection, business-rule binding, and mutation provenance** as one continuous reliability problem.

## Evidence Boundary

Platform facts in this report are grounded in first-party Salesforce material published on 28 August 2026, with current Anthropic, OpenAI, Google Workspace, and Microsoft first-party release sources checked for fresher category-displacing changes. ICDF, SBRBF, GISF, failure classes, metrics, benchmark procedures, and state cards are ĀTØR Institute research constructs.

## Primary Sources

1. Salesforce, **Salesforce and Anthropic Launch Claudeforce**, 28 August 2026: https://www.salesforce.com/ap/news/press-releases/2026/08/28/salesforce-dan-anthropic-luncurkan-claudeforce-ai-nomor-1-berpadu-dengan-crm-ai-nomor-1/
2. Salesforce, **Claudeforce: The #1 AI Meets the #1 CRM**, current 28 August 2026: https://www.salesforce.com/claudeforce/
3. Salesforce, **Turns Enterprise Applications into Enterprise Capabilities**, 25 August 2026: https://www.salesforce.com/ap/news/press-releases/2026/08/25/salesforce-turns-enterprise-applications-into-enterprise-capabilities/
4. Salesforce Developers, **Headless Development with Skills and a Claude Code Plugin**, August 2026: https://developer.salesforce.com/blogs/2026/08/headless-development-with-skills-and-a-claude-code-plugin
5. Claude Plugin Directory, **Salesforce Development**, current 28 August 2026: https://claude.com/plugins/salesforce-development
6. OpenAI Help Center, **ChatGPT Release Notes**, current through 27 August 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
7. Anthropic Help Center, **Release Notes**, current through 28 August 2026: https://support.claude.com/en/articles/12138966-release-notes
8. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through 28 August 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
