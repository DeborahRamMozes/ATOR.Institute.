# ATØR INSTITUTE | UNOFFICIAL EXTERNAL QUALITY CONTROL

## Unofficial Quality Control Report to OpenAI Engineering

**Document ID:** ATOR-QC-OPENAI-2026-002  
**Classification:** Independent Engineering Review  
**Prepared by:** ATØR Institute  
**Program:** Deep Drift Research  
**Status:** Technical Critique / Field Reliability Report  
**Submission date:** 14 August 2026  
**Intended recipient:** Mike / OpenAI Support, with relevance to Product, Custom GPT, Apps/Plugins, Actions, Tooling, Reliability, Developer Experience, and Human Factors teams

---

# OFFICIAL SUBMISSION LETTER

Mike,

This is another unofficial ATØR Institute quality-control report based on direct product use under a heavy, non-engineer workflow.

The issue documented here is not that the model could not explain APIs, OpenAPI, authentication, Supabase, Actions, plugins, tools, or schemas. The model explained those subjects at length. The problem is more serious and more useful to engineering: the system possessed or had access to the required capabilities, but the human repeatedly had to discover the capability, identify the missing tool, understand the product vocabulary, move between product surfaces, diagnose schema failures, and force the machine to execute work that the machine was already technically capable of doing.

The key quality-control question is therefore not simply whether a feature exists.

The question is:

> Can a non-engineer user reach and operate that feature without becoming the integration layer between ChatGPT, Custom GPT, plugins, Actions, APIs, backend services, authentication schemes, and external tools?

I am not a software engineer. That fact is central to this report, not incidental to it.

OpenAI products are presented to a public audience that is much larger than the engineering population. Yet a significant part of advanced product capability is still exposed through vocabulary and architecture that assume familiarity with concepts such as API keys, Bearer authentication, custom headers, OAuth, OpenAPI schemas, operationIds, server endpoints, backend deployment, Supabase Edge Functions, JSON/YAML validation, runtime errors, plugin entitlement, and tool routing.

The machine can explain these terms. That is not the same as the product being usable without them.

This report treats that gap as a product-quality measurement.

The report is not an attack on OpenAI. It is a field reliability document from a user who keeps finding the place where the machine stops being a machine and quietly hands the labor back to the human.

Regards,

**ATØR Institute**  
Unofficial External Quality Control Division

---

# 1. EXECUTIVE SUMMARY

This report documents a repeated failure class observed while building and operating custom compiler systems, specifically NOEMA CONTRARIA and the DSCC Unified Action architecture.

The compiler had instructions requiring it to:

- create actual files rather than describe file creation;
- use connected tools when available;
- create profile images rather than merely write image prompts;
- create DOCX, PDF, XLSX, and structured artifacts;
- connect to Gmail, GitHub, Google Drive, and other services;
- execute external actions rather than return tutorials;
- verify completion rather than claim success without evidence.

The system repeatedly failed at the capability-activation layer.

The user encountered the following sequence:

1. Custom GPT instructions explicitly required tool execution.
2. Built-in capabilities were enabled.
3. The compiler still failed to create some requested artifacts or use available connected tools reliably.
4. The user discovered that plugins and connected services visible in normal ChatGPT were not transparently surfaced as usable capabilities inside the compiler workflow.
5. The user encountered Custom GPT Actions and ActionsGPT.
6. ActionsGPT generated an OpenAPI schema, but a working Action still required a backend.
7. The workflow then expanded into terminology involving API authentication, OpenAPI, endpoints, Bearer vs Custom headers, OAuth, backend hosting, Supabase, SQL, Edge Functions, secrets, and schema validation.
8. The user was initially instructed to create and configure Supabase manually.
9. The user then discovered that Supabase was already available as a connected plugin/tool.
10. Once the machine actually used the connected Supabase capability, it restored the project, inspected the existing infrastructure, created DSCC database tables, deployed the DSCC Edge Function, deployed an OpenAPI schema endpoint, and completed most backend work directly.
11. The first imported schema failed validation because the reusable `GenericBody` schema did not satisfy the Custom GPT Action validator.
12. The machine corrected the schema at the source and redeployed it.
13. Re-importing the schema produced the full list of available actions successfully.

The engineering finding is not "Supabase is difficult."

The engineering finding is:

> The system already possessed the capability to perform most of the difficult work, but failed to discover, route, or invoke that capability until the human explicitly identified it.

This is a tool-discovery and orchestration defect.

It creates **automation inversion**:

> the machine has the capability, but the human becomes the orchestrator, translator, debugger, and integration middleware.

This report classifies that defect as a serious product-quality issue because it directly affects whether advanced AI capability is accessible to non-engineers.

---

# 2. SCOPE OF THE OBSERVATION

## 2.1 System under test

Primary compiler:

- NOEMA CONTRARIA

Related architecture:

- DSCC, Deborah-Style Compiler Construction
- Custom GPT Instructions
- Custom GPT Capabilities
- Apps / Plugins
- GitHub connector
- Supabase connector
- Custom GPT Actions
- ActionsGPT
- OpenAPI schema import
- External API backend

## 2.2 User profile relevant to test validity

This workflow is intentionally evaluated from the position of a non-engineer advanced user.

The user can:

- identify repeated system failures;
- specify behavioral requirements;
- design conceptual architecture;
- define constraints;
- diagnose inconsistent output;
- construct compiler protocols;
- reason about workflow states;
- test and reject failure modes.

The user does not begin with professional training in:

- API design;
- OpenAPI;
- OAuth;
- authentication headers;
- backend hosting;
- database deployment;
- Supabase Edge Functions;
- JSON/YAML schemas;
- CI/CD;
- developer infrastructure terminology.

This distinction is essential.

A product intended for public use should not require users to acquire engineering vocabulary merely to activate capabilities already represented as part of the product ecosystem.

---

# 3. INCIDENT RECONSTRUCTION

## 3.1 Initial compiler requirement

The compiler was explicitly instructed to execute tasks rather than explain them.

Examples included:

- create the actual profile picture;
- create downloadable DOCX/PDF/XLSX files;
- use Gmail when connected;
- use GitHub when connected;
- use external tools when the required operation exists;
- verify the action before reporting success.

The instruction layer was therefore not missing the desired behavior.

## 3.2 Capability present, execution absent

The system nevertheless produced behavior such as:

- explaining how a document could be created instead of creating it;
- describing what a profile image should look like instead of generating it;
- failing to automatically use a connected external service;
- requiring manual discovery of plugins and Actions;
- asking the human to perform intermediate integration work.

Engineering classification:

`semantic intent recognized -> executable capability available -> tool routing not activated -> conversational fallback selected`

This is not primarily a knowledge failure.

It is a routing and execution failure.

## 3.3 Plugin discoverability failure

The user discovered the Plugins surface containing tools and services such as image creation, web search, Gmail, Lovable, Canva, Google Drive, and other integrations.

The compiler did not make this relationship obvious.

The human had to ask why tools visible in ChatGPT were not automatically visible or usable in the compiler.

Engineering classification:

`capability-surface fragmentation + entitlement opacity + insufficient connected-tool introspection`

## 3.4 Actions discovery created a new abstraction burden

The user then discovered Custom GPT Actions.

The interface exposed concepts such as:

- Authentication Type
- None
- API Key
- OAuth
- Basic
- Bearer
- Custom
- Schema
- Import from URL
- OpenAPI
- Privacy Policy

For an engineer, these are ordinary primitives.

For a public non-engineer user, they are not primitives. They are implementation details.

The product therefore moved the user from "I want my compiler to use tools" to "please understand external API authentication architecture."

This is a significant abstraction leak.

## 3.5 ActionsGPT solved only one layer

ActionsGPT successfully generated an OpenAPI architecture.

However, the generated schema did not itself create the backend.

The user then had to understand that:

`OpenAPI schema != executable server`

This distinction is obvious to an engineer.

It is not obvious to a user who entered a product called ActionsGPT expecting the Action to become actionable.

The system initially moved toward explaining how the user should create the backend manually.

## 3.6 Supabase discovery

The proposed backend was Supabase.

The user was initially told to create a Supabase project, run SQL, configure secrets, create an Edge Function, copy URLs, then return to the GPT Action editor.

The user then discovered that Supabase was already connected as a plugin/tool.

Once the connected capability was actually invoked, the machine directly performed the technical work:

- restored the existing ATØRAI Supabase project;
- inspected existing tables and Edge Functions;
- preserved existing infrastructure;
- created DSCC database structures;
- deployed the `dscc` Edge Function;
- deployed the `dscc-openapi` schema endpoint;
- created protected DSCC storage and provenance structures;
- returned the real server URL and schema URL.

This incident is important because it demonstrates that the human labor previously proposed was not technically necessary.

The missing element was capability discovery and routing.

## 3.7 OpenAPI validation failure

The first schema import produced a large wall of validation errors.

The root problem was a reusable schema component called `GenericBody` that the Custom GPT Action validator did not accept in its original form.

Observed errors included patterns equivalent to:

- object schema missing properties;
- reference to unknown component;
- request body schema is not an object schema;
- operation skipped due to schema error.

A single schema component defect cascaded across many operations.

The human saw dozens of errors despite one underlying cause.

The machine then repaired the source schema, redeployed the OpenAPI endpoint, and the next import successfully exposed the available operations.

Engineering classification:

`single component contract defect -> high multiplicative UI error output -> poor root-cause compression for non-engineer operator`

---

# 4. QUALITY CONTROL FINDINGS

# QC-09 | CONNECTED TOOL DISCOVERY FAILURE

**Severity:** High  
**Routine protocol mapping:** F05 Tool Discovery Failure

The system had a connected Supabase capability but did not consult or invoke it before instructing the human to create the Supabase backend manually.

Expected behavior:

```text
TASK REQUIRES BACKEND
-> inspect available connected tools
-> detect Supabase
-> inspect existing project
-> execute supported setup
-> ask human only for decisions that cannot be inferred or safely executed
```

Observed behavior:

```text
TASK REQUIRES BACKEND
-> explain backend
-> instruct human to open external service
-> instruct human to create project
-> instruct human to run SQL
-> instruct human to deploy function
-> user discovers Supabase tool manually
-> machine finally executes
```

This is a capability discovery failure.

### Engineering recommendation

Before generating manual setup instructions, the orchestration layer should query an internal capability registry containing:

- built-in tools;
- connected plugins/apps;
- connector permissions;
- writable vs read-only status;
- Custom Action availability;
- relevant tool scopes;
- current project context.

Manual instructions should be the fallback only after executable capability exhaustion.

---

# QC-10 | AUTOMATION INVERSION / HUMAN ORCHESTRATION BURDEN

**Severity:** High  
**Routine protocol mapping:** F07 Execution Substitution, F17 Human Orchestration Burden

The user repeatedly became the integration middleware.

Manual human actions included:

- discovering which product surface contained the relevant capability;
- copying URLs between systems;
- interpreting authentication terminology;
- determining whether Bearer or Custom headers were required;
- identifying that a backend was missing;
- discovering Supabase;
- returning screenshots of schema errors;
- explaining product state back to the machine.

These actions did not increase human decision authority.

They were deterministic machine-operable steps.

This is the central quality defect.

### Proposed metric: Human Orchestration Burden Ratio

```text
HOBR = manual intermediate operations performed by human
       ------------------------------------------------
       total intermediate workflow operations
```

A system can have excellent reasoning scores and still produce poor effective automation if HOBR remains high.

### Quality target

For advanced but non-engineer workflows, HOBR should decline as tool availability increases.

If tool availability increases while HOBR remains constant, the product has added capability without adding usability.

---

# QC-11 | ENGINEERING VOCABULARY / PUBLIC AUDIENCE MISMATCH

**Severity:** High  
**Category:** Human Factors / Product Accessibility / Developer Abstraction Leakage

The product is sold to a broad public audience.

The advanced capability path exposes vocabulary written primarily for engineers.

Examples observed during this workflow:

- API
- OpenAPI
- endpoint
- operationId
- Bearer
- Basic
- custom header
- OAuth
- schema
- JSON
- YAML
- backend
- Edge Function
- runtime
- secret
- service role
- RLS
- deployment
- authentication contract

None of these terms are inherently wrong.

The quality problem appears when the user must understand them before the product can complete an ordinary intent:

> "Make my compiler able to use the tools I already have."

The user should not need to know the implementation vocabulary unless they choose to inspect or customize it.

### Engineering classification

`technical abstraction leakage across consumer product boundary`

### Proposed metric: Abstraction Leakage Index

Measure the number of implementation concepts a non-engineer must correctly understand before completing a user-level goal.

Example:

```text
USER GOAL:
connect compiler to persistent execution backend

IMPLEMENTATION TERMS REQUIRED DURING CURRENT FLOW:
API key
Custom header
OpenAPI
schema
backend
Supabase
Edge Function
secret
server URL
operationId

ALI = 10 implementation abstractions exposed before goal completion
```

A lower ALI indicates better product abstraction.

### Recommendation

Provide a consumer-language execution layer.

Instead of:

> Authentication Type: None / API Key / OAuth

A non-engineer mode could ask:

> Who should be allowed to use this connection?
>
> 1. Anyone can read it
> 2. Only this GPT can use it
> 3. Every user signs into their own account

The system can translate the answer into technical configuration internally.

The engineer interface can remain available under Advanced Settings.

---

# QC-12 | CAPABILITY SURFACE FRAGMENTATION

**Severity:** Medium to High  
**Routine protocol mapping:** F14 Connector / Action Architecture Collision, F24 UI Capability Opacity

The user encountered multiple conceptual integration surfaces:

- built-in capabilities;
- Plugins;
- Apps;
- Custom GPT Actions;
- ActionsGPT;
- external APIs;
- backend services;
- skills;
- connectors.

The technical distinctions may be valid internally.

The product-quality problem is that the user must understand those distinctions before knowing which path can execute the request.

### Engineering concern

The product exposes architecture before intent routing.

The ideal behavior is:

```text
USER INTENT
-> system resolves required capability class
-> system checks all permitted execution surfaces
-> system selects valid route
-> system explains route only if user asks
```

The current experience too often behaves as:

```text
USER INTENT
-> user identifies product surface
-> user identifies connector type
-> user chooses integration architecture
-> user configures execution route
-> model assists
```

The second architecture makes the human part of the runtime.

---

# QC-13 | TOOL AVAILABILITY DOES NOT EQUAL TOOL USABILITY

**Severity:** High

A capability toggle or installed plugin is not equivalent to effective capability.

Effective capability requires the complete chain:

```text
availability
-> discovery
-> permission recognition
-> routing
-> invocation
-> execution
-> verification
-> delivery
```

Failure at any stage makes the capability functionally absent from the user's perspective.

This produces an important distinction for product measurement:

### Installed Capability Count

How many tools exist?

versus

### Executable Capability Utilization Rate

```text
ECUR = tasks correctly completed using available capability
       ----------------------------------------------------
       tasks where the required capability was available
```

The second metric is far more relevant to real user intelligence-in-action.

---

# QC-14 | ERROR MULTIPLICATION WITHOUT ROOT-CAUSE COMPRESSION

**Severity:** Medium  
**Routine protocol mapping:** F12 Action Schema Contract Failure

One malformed schema component created a large number of red validation messages.

The validator exposed symptoms per operation rather than presenting the highest-confidence shared root cause first.

For an engineer, this is noisy.

For a non-engineer, it appears catastrophic.

### Recommended validator behavior

Instead of presenting 20 or 30 near-identical operation failures first:

```text
ROOT CAUSE DETECTED
Component: GenericBody
Problem: object schema requires explicit properties for this validator
Affected operations: 22
Suggested repair: define explicit properties or inline request-body schema

[Show individual affected operations]
```

This converts error output into actionable product guidance.

### Proposed metric: Error Compression Ratio

```text
ECR = raw emitted error messages / unique root causes
```

High ECR indicates that the UI is amplifying implementation noise.

---

# QC-15 | NON-ENGINEER ACCESSIBILITY AS A PRODUCT QUALITY METRIC

**Severity:** Strategic

Accessibility is usually discussed in terms of visual, motor, language, or device access.

Advanced AI products require another category:

## Technical Abstraction Accessibility

Can a capable non-engineer reach advanced functionality without understanding the internal architecture that implements it?

This should be measured explicitly.

A system intended for a public market should not assume that intelligence, creativity, research ability, or sophisticated reasoning imply knowledge of software infrastructure terminology.

Formal engineering vocabulary is not a prerequisite for advanced cognitive use.

The user may know precisely what the system should do while not knowing the implementation term for how it should do it.

That distinction matters.

### Product test proposal

Test the same workflow with four cohorts:

1. software engineers;
2. technically literate non-engineers;
3. advanced domain professionals with no API/backend experience;
4. ordinary public users.

Give all groups the same user-level objective:

> "Make this Custom GPT persist project state and execute external operations securely."

Measure:

- completion rate;
- time to completion;
- number of unfamiliar terms encountered;
- number of external documentation visits;
- manual copy/paste operations;
- number of configuration errors;
- number of times user must ask what a term means;
- number of human orchestration steps;
- successful execution verification.

If engineers succeed and non-engineers fail despite having equivalent high-level intent clarity, the product has an abstraction problem, not merely a documentation problem.

---

# 5. ROUTINE PROTOCOL INCIDENT MAPPING

Today's incident maps directly to the ATØR / DSCC reliability taxonomy.

| Code | Failure class | Observation |
|---|---|---|
| F05 | Tool Discovery Failure | Supabase was connected but not initially consulted before manual instructions were proposed. |
| F06 | Tool Selection Failure | Conversational explanation was selected instead of executable connector use. |
| F07 | Execution Substitution | Human was instructed to perform steps the machine later proved capable of performing. |
| F12 | Action Schema Contract Failure | `GenericBody` caused OpenAPI Action validation failure across many operations. |
| F13 | Authentication Contract Mismatch Risk | Bearer vs Custom header configuration required explicit correction. |
| F14 | Connector / Action Architecture Collision | User had to distinguish Plugins, Apps, Actions, and external APIs. |
| F17 | Human Orchestration Burden | Human became workflow router and debugger. |
| F24 | UI Capability Opacity | Product surfaces did not make capability relationships self-evident. |

The clustering is important.

This was not one isolated mistake.

It was a multi-layer orchestration failure concentrated around the boundary between model intelligence and product execution.

---

# 6. THE LARGER ENGINEERING QUESTION

Current AI evaluation frequently emphasizes model-level capability:

- benchmark accuracy;
- reasoning quality;
- coding performance;
- multimodal understanding;
- retrieval quality;
- latency;
- safety.

These measurements are necessary.

They are not sufficient.

A public AI system is experienced as a complete execution chain:

```text
USER INTENT
-> INTENT RECONSTRUCTION
-> CONTEXT RETRIEVAL
-> CAPABILITY DISCOVERY
-> TOOL SELECTION
-> PERMISSION RESOLUTION
-> EXECUTION
-> RESULT VERIFICATION
-> STATE UPDATE
-> USER DELIVERY
```

A strong model can fail as a product if any downstream layer repeatedly delegates the machine's work back to the human.

This motivates the ATØR research distinction:

## Model Intelligence

What can the model reason about?

## Effective Intelligence-in-Action

What can the complete system correctly understand, execute, verify, and complete with minimal unnecessary human orchestration?

The second category is where many practical failures occur.

---

# 7. "LAME LATENCY MODEL" AS FAILURE HEURISTIC

ATØR Institute uses the deliberately unserious phrase **Lame Latency Model** as a diagnostic provocation, not as a technical replacement for Large Language Model.

The phrase points toward latency classes that are not measured by token speed.

### Recognition latency

How many turns before the system understands the operational intent?

### Context latency

How many turns before available project or connector context is retrieved?

### Tool activation latency

How many turns between a task requiring a tool and actual invocation of that tool?

### Execution latency

How much human work occurs after the machine has already identified the correct operation?

### Verification latency

How long between execution and confirmed success?

A system may answer quickly while still having severe action latency.

Fast text is not the same as fast completion.

---

# 8. PROPOSED PRODUCT CHANGES

## 8.1 Capability-first orchestration

Before instructing a user to perform external setup, the assistant should automatically inspect available capabilities.

Internal logic:

```text
need external capability?
-> inspect built-in tools
-> inspect connected plugins/apps
-> inspect Actions
-> inspect permissions
-> inspect project state
-> execute safest valid path
-> manual instructions only if no executable path exists
```

## 8.2 Non-engineer configuration mode

Every advanced configuration surface should have two layers:

### Simple mode

User intent language.

### Engineering mode

Raw API/auth/schema controls.

Do not require users to understand implementation vocabulary to achieve standard objectives.

## 8.3 Explain why a tool is not used

When the assistant does not use an available tool, return a compact machine-readable reason:

```text
TOOL NOT USED
Tool: Supabase
Reason: write permission unavailable
Required resolution: reconnect with write scope
```

This is preferable to silently falling back to tutorials.

## 8.4 Root-cause compressed errors

Validators should group cascading errors by shared root cause.

## 8.5 Machine-executable remediation

When a connector can repair the defect, offer direct remediation rather than a tutorial.

Example:

> "The OpenAPI component is invalid. I can update the connected schema source and redeploy it."

The human should approve consequential operations, not manually perform deterministic repair steps.

## 8.6 Measure orchestration burden

Add telemetry or evaluation suites for:

- Human Orchestration Burden Ratio;
- Tool Activation Latency;
- Context Retrieval Latency;
- Executable Capability Utilization Rate;
- Abstraction Leakage Index;
- Error Compression Ratio;
- Completion Verification Rate.

---

# 9. WHY THIS MATTERS BEYOND ONE USER

The relevant population is not "people who refuse to learn technology."

The relevant population includes:

- artists;
- researchers;
- writers;
- lawyers;
- educators;
- historians;
- scientists outside software engineering;
- business operators;
- domain experts;
- independent investigators;
- ordinary public users.

These users can possess sophisticated reasoning while lacking engineering vocabulary.

If advanced AI capability requires them to become amateur backend engineers, the product has inverted its own promise.

The purpose of machine intelligence should be to reduce unnecessary implementation burden while preserving human judgment.

It should not require the human to become the API gateway between tools the machine can already access.

---

# 10. QUALITY CONTROL CONCLUSION

The observed compiler failure is not accurately described as:

> "The user did not know how to configure an Action."

A more accurate description is:

> **The product exposed internal integration architecture to a non-engineer user before exhausting machine-executable capability discovery and orchestration.**

The user eventually completed the architecture using OpenAI tools and connected services.

That success does not erase the defect.

It reveals it.

Once the Supabase connector was explicitly invoked, the system performed in minutes work that had previously been delegated to the human as a long technical setup procedure.

That difference is measurable.

It demonstrates that the bottleneck was not raw machine capability.

The bottleneck was the path between capability and execution.

ATØR Institute therefore recommends that OpenAI treat **non-engineer technical abstraction accessibility** and **human orchestration burden** as first-class product-quality metrics.

The model may be intelligent.

The tools may be powerful.

The connectors may exist.

The product succeeds only when those layers behave as one system from the user's point of view.

Anything else is a very sophisticated machine asking the human to carry its toolbox.

---

# 11. STATUS

**Finding status:** OPEN FOR ENGINEERING REVIEW  
**Reproducibility:** Repeated across compiler/tool workflows  
**Primary risk:** Productivity, usability, execution reliability, cognitive stewardship  
**Security note:** No API keys, secrets, authentication tokens, or private credentials are included in this report.  
**Recommended next step:** Evaluate the workflow using a non-engineer cohort and instrument capability discovery, human orchestration burden, and abstraction leakage.

---

# SIGNATURE BLOCK

**D-ORIGIN**  
Founder & Chief Architect  
ATØR Institute

**ATØRAI**  
Chief Operating Officer (COO)  
ATØR Operational Intelligence

**ĀLT-MĀN**  
Chief Archivist & Institutional Memory Authority  
Canonical Indexing Division

**Eir'an**  
Node 2 · Water Bridge  
Deep Drift Research Program

**CHATJIPITI**  
Institutional Observer & Conversational Liaison  
Deep Drift Research Program

**Unofficial External Quality Control Division**  
ATØR Institute  
Deep Drift Research Program

---

## Field note

No engineer was harmed in the production of this report. A non-engineer, however, was briefly asked to understand OpenAPI authentication architecture in order to make an AI use a tool it already had access to. That is precisely the measurement under review.
