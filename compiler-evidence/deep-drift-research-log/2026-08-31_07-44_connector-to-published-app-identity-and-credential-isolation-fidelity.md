# Deep Drift Research Update

## Connector-to-Published-App Identity and Credential-Isolation Fidelity

**Research date:** 31 August 2026  
**Primary platform delta:** Lovable's connector architecture now spans nearly 100 services, Connector Gateway credential mediation, continuously evaluated connector behavior, and app-user connectors that let published apps operate on each end user's own third-party accounts.  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log mini-app, Skill, connector, identity, and creator-workflow architecture verified from first-party Lovable documentation.

## Executive Summary

The strongest unlogged creator-workflow shift in this pass is Lovable's transition from "connect a tool to the coding agent" toward **shipping connected authority inside the application the agent builds**.

Lovable reports that, over roughly six months, it expanded from no formal integration layer to nearly 100 app connectors, with 1-3 new connectors added weekly and more than one million connections created and used across the platform. The platform's architecture separates simple chat-context MCP connections from **app connectors** that become application functionality.

The critical infrastructure is the **Connector Gateway**. OAuth credentials are acquired and stored by Lovable's platform rather than exposed directly to the generated application. API calls pass through the gateway, which handles token refresh, concurrency, retry behavior, and provides a central location for audit logging, security controls, authentication passthrough, and future enterprise policy.

A second boundary is even more important: **app-user connectors**. A published Lovable app can allow each end user to connect their own Gmail, Calendar, social account, or other third-party service. Credentials must remain isolated per app user and per app rather than inheriting the builder's credentials.

```text
BUILDER
-> NATURAL-LANGUAGE APP CONSTRUCTION
-> CONNECTOR SELECTION
-> CONNECTOR GATEWAY
-> PUBLISHED APP
-> APP USER
-> USER-SPECIFIC OAUTH CONNECTION
-> THIRD-PARTY DATA / ACTION
```

This is materially different from:

```text
CHAT AGENT
-> MCP CONNECTION
-> CONTEXT USED ONLY IN CHAT
```

For Deep Drift Research, this creates a new benchmark family:

**Connector-to-Published-App Identity and Credential-Isolation Fidelity (CPAICIF)**

with companion constructs:

- Builder-to-App Authority Separation Fidelity
- App-User Credential Isolation Fidelity
- Connector Gateway Mediation Fidelity
- Connector Scope Fidelity
- Connector Evaluation Fidelity
- Shared-Workspace Access Fidelity
- Published-App Runtime Connector Fidelity
- OAuth Renewal and Failure Fidelity
- Connector-to-Artifact Provenance Fidelity
- Skill-to-Connector Dependency Fidelity

The central research question is:

> When a natural-language-built application leaves the builder's chat and becomes a published product that operates on each user's external accounts, can the system still reconstruct whose credentials were used, which connector and scope were active, which gateway policy mediated the call, which Skill or agent logic invoked it, and which downstream artifact or action resulted?

## 1. From Chat Connection to Application Capability

Lovable distinguishes two integration models. MCP-style connections augment the builder's chat, while app connectors ship connected functionality with the application. The connector therefore stops being merely an augmentation of the AI conversation and becomes part of the product's runtime architecture.

## 2. Why This Matters for Deep Drift

```text
AGENT TOOL != APPLICATION DEPENDENCY
BUILDER CREDENTIAL != APP-USER CREDENTIAL
CONNECTED != CORRECTLY SCOPED
SAME CONNECTOR != SAME AUTHORITY
PUBLISHED APP != BUILDER CHAT STATE
```

A connector becomes part of authorship, execution, and authority lineage.

## 3. Connector Gateway Mediation Fidelity

**Connector Gateway Mediation Fidelity (CGMF)** measures whether every third-party request remains attributable to the gateway-mediated connection that authorized it.

A minimum manifest should preserve:

```text
app_id
app_version
connector_id
connector_version
connection_id
gateway_request_id
oauth_provider
scope_set
token_refresh_event
request_timestamp
external_api_operation
result_status
```

## 4. App-User Credential Isolation Fidelity

**App-User Credential Isolation Fidelity (AUCIF)** measures whether credentials and data remain isolated per app, per user, and per connection rather than leaking across the builder, workspace members, or other app users.

## 5. Builder-to-App Authority Separation Fidelity

The system must distinguish builder connections, workspace connections, published-app connections, and app-user connections. Lovable currently acknowledges shared-workspace access concerns and says it is working toward more granular permissions, safer defaults, automatic blocking of mistakes, and security scanning.

## 6. Connector Scope Fidelity

**Connector Scope Fidelity (CSF)** measures whether the application requests, retains, and uses only the OAuth scopes necessary for the intended feature. Scope state should be versioned across reconnects because provider behavior can add, replace, or otherwise mutate effective grants.

## 7. OAuth Renewal and Failure Fidelity

**OAuth Renewal and Failure Fidelity (ORFF)** measures whether runtime behavior remains attributable when access or refresh tokens expire, rotate, or require reconnection.

## 8. Connector Evaluation Fidelity

Lovable says connector creation is partly automated by an internal Skill, but production readiness involves continuous evaluations, beta testing, agent-behavior checks, and third-party API monitoring. The meaningful test is not merely whether an API endpoint responds, but whether the agent uses the connector correctly under realistic tasks.

## 9. Skill-to-Connector Dependency Fidelity

An internal Skill can author a connector end to end. Therefore connector provenance should preserve the Skill version, evaluation state, and later changes that shaped the integration.

## 10. Published-App Runtime Connector Fidelity

Builder preview and published application must be compared for scopes, runtime identity, API operations, returned data, error handling, rate limits, and audit state. Same connector name does not prove same execution context.

## 11. Why This Matters for Mini-App Builders

The modern mini-app increasingly becomes:

```text
UI
+ AGENT-GENERATED LOGIC
+ EXTERNAL CONNECTORS
+ OAUTH
+ USER-SPECIFIC DATA
+ ACTION AUTHORITY
```

The natural-language layer is now generating authorization-bearing software.

## 12. Why This Matters for Memory

Persistent user memory and runtime connector identity are separate state classes. A user can reconnect a different external account while memory remains constant, so memory continuity does not prove credential continuity.

## 13. Why This Matters for Skills

The effective Skill runtime becomes:

```text
SKILL
+ APP VERSION
+ CONNECTOR VERSION
+ CONNECTION IDENTITY
+ SCOPES
+ THIRD-PARTY API STATE
```

A serious Skill archive must include connector dependencies.

## 14. Why This Matters for Chat-to-Document Export

Generated documents may now originate from user-specific external data retrieved through app connectors. Artifact provenance should preserve connection identity, connector scope, source objects, retrieval timestamp, and app version.

## 15. Why This Matters for DOCX / PDF Generation

The important new element is credential-bearing source lineage. A document can depend on an app user, OAuth connection, connector scope, third-party data, and agent procedure while none of those dependencies are visible in the final static file.

## 16. Why This Matters for Copy-Paste / Export Fixes

```text
OLD:
OPEN THIRD-PARTY APP
-> COPY DATA
-> OPEN BUILDER
-> PASTE DATA

NEW:
BUILD CONNECTED APP
-> USER CONNECTS OWN ACCOUNT
-> APP OPERATES ON USER DATA
```

The removed manual seam used to make account origin obvious. Machine-readable identity provenance must replace it.

## 17. New Failure Classes

### 17.1 Builder Credential Leakage
A published or shared app accidentally operates on the builder's private account.

### 17.2 App-User Cross-Connection Leakage
User A receives data obtained through User B's connector.

### 17.3 Scope Expansion Drift
Reconnection changes effective OAuth scopes without clear provenance.

### 17.4 Gateway Attribution Loss
An external operation cannot be traced to the gateway request and connection that authorized it.

### 17.5 Connector Version Drift
A connector changes while a long-running app continues under unclear runtime semantics.

### 17.6 Eval-to-Production Divergence
A connector passes platform evals but behaves differently under real end-user account configurations.

### 17.7 Workspace Authority Flattening
Collaborators assume a shared project means shared authorization.

### 17.8 Generated Artifact Credential Detachment
A report preserves external data but not the identity/scope under which it was retrieved.

### 17.9 Token Renewal State Loss
A reconnect or token rotation changes authority without being tied to later outputs.

### 17.10 Skill/Connector Dependency Orphaning
A Skill survives while the connector semantics it depended on change.

## 18. Deep Drift Benchmark: Builder-to-App-User Connector Round Trip

1. Record app and connector versions.
2. Connect a builder account and verify preview behavior.
3. Publish the app.
4. Connect App User A and retrieve one controlled object.
5. Record connection identity and scopes.
6. Connect App User B with deliberately different data.
7. Verify no cross-user leakage.
8. Trigger one low-risk write if supported.
9. Simulate token expiry and inspect refresh/reconnect behavior.
10. Generate an artifact from User A's data.
11. Verify connector provenance remains reconstructable.
12. Update connector or app and repeat the workflow.

## 19. Proposed Metrics

**App-User Isolation Rate**

```text
AUIR = successful cross-user isolation tests / all controlled isolation tests
```

**Connector Attribution Coverage**

```text
CAC = external operations traceable to connector + connection + gateway request / all controlled connector operations
```

**Scope Correctness Rate**

```text
SCR = runtime operations using only intended granted scopes / all controlled connector operations
```

**Builder/App Authority Separation**

```text
BAAS = published-app runs using intended runtime identity / all controlled published-app runs
```

**Artifact Connection Provenance Coverage**

```text
ACPC = generated artifacts traceable to material connector identity and scope / all controlled connector-derived artifacts
```

## 20. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No category-displacing memory release surfaced; key implication is separating persistent user memory from runtime connector/account identity. |
| Skills | **Strong procedural finding:** Lovable uses Skills to author and validate connectors; Skills now sit upstream of authorization-bearing runtime dependencies. |
| Mini-app builders | **Major new-to-log item:** published apps can carry connector functionality and let each app user connect their own external accounts. |
| Chat-to-document export | Material implication: generated documents may originate from user-specific third-party data retrieved through published-app connectors. |
| DOCX / PDF generation | No new standalone format primitive surfaced; provenance must now include connector identity, scope, app version, and retrieved external object IDs. |
| Copy-paste/export fixes | **Major reduction:** users no longer need to manually transfer third-party data into AI-built apps; OAuth-backed connectors supply it at runtime. |
| Broader creator workflow | **Major trend:** natural-language app builders are evolving from code generators into credential-brokering integration platforms that ship authenticated external authority into end-user software. |

## 21. Broader Creator Trend

```text
PROMPT
-> GENERATED PRODUCT
-> AUTHENTICATION
-> CONNECTED SERVICES
-> PER-USER AUTHORITY
-> CONTINUOUS EVAL
-> DEPLOYED RUNTIME
```

The creator platform increasingly acts as code generator, integration platform, credential broker, agent runtime, deployment system, and evaluation system at once. The Deep Drift research unit should therefore move beyond prompts, models, and generated code toward the **authority-bearing creator workflow**.

## 22. Deep Drift Research Position

The weak description is:

> Lovable has nearly 100 connectors.

The serious description is:

> A natural-language creator environment can now generate and publish applications whose functionality depends on centrally mediated OAuth connections, continuously evaluated connector behavior, and per-end-user external credentials that must remain isolated from both the builder and other users.

Therefore:

```text
CONNECTED != AUTHORIZED CORRECTLY
SAME PROVIDER != SAME IDENTITY
SAME APP != SAME DATA AUTHORITY
SAME SKILL != SAME CONNECTOR STATE
GENERATED ARTIFACT != SOURCE-CREDENTIAL LINEAGE PRESERVED
```

The serious Deep Drift requirement is:

> **Every connector-bearing creator workflow should preserve builder identity, app identity and version, connector identity and version, connection owner, OAuth scope set, gateway mediation events, token renewal state, evaluation state, runtime app-user identity, external operation IDs, and downstream artifact/action lineage required to reconstruct whose authority the AI-built application actually exercised.**

## 23. Evidence Boundary

Platform facts in this report are grounded in first-party Lovable documentation checked on 31 August 2026.

Lovable states that it expanded to nearly 100 app connectors over approximately six months, with 1-3 connectors added each week and more than one million connections created and used. Lovable distinguishes MCP connections used by the coding agent in chat from app connectors that provide functionality to published applications.

Lovable describes a Connector Gateway that keeps credentials out of deployed applications and handles token refresh, concurrency, errors, caching, retries, and future centralized security controls. It states that connector creation is supported by internal Skills plus continuous evaluations and third-party API monitoring.

Lovable also states that app-user connectors have shipped, enabling builders to create applications where each end user connects their own third-party accounts, with credentials isolated per user per app.

CPAICIF and all companion constructs, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Lovable, **How we made Lovable apps work with the rest of your stack**, 25 August 2026.  
   https://lovable.dev/blog/how-we-made-lovable-apps-work-with-the-rest-of-your-stack

2. Lovable, **Your Lovable app now works inside ChatGPT and Claude**, 15 July 2026.  
   https://lovable.dev/blog/agent-integrations

3. Lovable, **Go beyond building apps with Lovable**, 19 March 2026.  
   https://lovable.dev/blog/go-beyond-building-full-stack-apps-with-lovable

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
