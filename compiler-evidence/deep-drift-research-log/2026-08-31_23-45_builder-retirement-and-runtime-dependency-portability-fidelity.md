# Deep Drift Research Update

## Builder Retirement and Runtime-Dependency Portability Fidelity

**Research date:** 31 August 2026  
**Primary platform event:** GitHub Spark reaches its final access/export date on 31 August 2026.  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh date-triggered platform lifecycle event; new-to-ledger mini-app portability and runtime dependency node.

## Executive Summary

GitHub Spark reaches a decisive lifecycle boundary today, **31 August 2026**. GitHub stopped accepting new Spark users and new app creation on 4 August, but existing users were allowed to access Spark until 31 August specifically to export apps they had already created. GitHub says already-deployed apps will continue to run after the Spark workbench is retired, while creators who want to continue editing must convert the Spark into a GitHub repository before the deadline.

A second dependency already broke earlier: GitHub Models, which powered Spark's `llm()` helper, retired on 30 July 2026. Apps that call `llm()` therefore need a replacement inference provider, user-supplied API credentials, and separate billing if their AI features are to keep functioning.

The retirement exposes a creator-workflow distinction that is easy to miss when an AI builder is alive and pleasant:

```text
DEPLOYED APP SURVIVES
!= AUTHORING ENVIRONMENT SURVIVES

SOURCE CODE EXPORTED
!= MANAGED RUNTIME MIGRATED

APP RUNS
!= AI FEATURE RUNS

REPOSITORY EXISTS
!= ORIGINAL BUILDER STATE EXISTS
```

This report formalizes the benchmark family:

**Builder Retirement and Runtime-Dependency Portability Fidelity (BRRDPF)**

with companion constructs:

- Builder-to-Repository Fidelity
- Authoring-State Portability Fidelity
- Deployed-App Survival Fidelity
- Runtime-Dependency Portability Fidelity
- Inference-Provider Substitution Fidelity
- Managed-Service Exit Fidelity
- Editability-after-Retirement Fidelity
- Deployment/Source Divergence Fidelity
- Builder-Version Recovery Fidelity
- Lifecycle-Deadline Disclosure Fidelity

The central question is:

> When an AI mini-app builder disappears but deployed applications remain online, can a creator reconstruct and continue the application from exported code, identify which managed capabilities silently disappeared, replace retired AI dependencies, and preserve the relationship between the last builder-managed state and the still-running deployed state?

## 1. Spark Ends as an Authoring Surface, Not Necessarily as a Running App

GitHub's deprecation notice says already-deployed Spark apps will continue to work after the Spark experience on github.com is retired.

At the same time, GitHub explicitly tells creators to **Create repository** before 31 August if they want to keep editing the app in the future.

The lifecycle therefore forks:

```text
SPARK PROJECT
├─> DEPLOYED APP ---------------> CONTINUES RUNNING
└─> SPARK WORKBENCH ------------> RETIRED
     └─> CREATE REPOSITORY ------> CONTINUABLE SOURCE PATH
```

This is not a normal export problem. It is a separation of **execution continuity** from **authoring continuity**.

## 2. Builder-to-Repository Fidelity

### Definition

**Builder-to-Repository Fidelity (BRF)** measures whether the repository created from a retiring AI builder contains enough source state to continue development outside that builder.

A minimum manifest should preserve:

```text
builder_project_id
builder_project_version
export_timestamp
repository_url
repository_commit
source_file_manifest
dependency_manifest
configuration_files
schema_or_data_model
asset_manifest
last_deployed_version
```

A repository that merely compiles is not necessarily a faithful continuation of the builder state.

The test is:

```text
LAST EDITABLE BUILDER STATE
-> EXPORTED REPOSITORY
-> LOCAL / CODESPACE BUILD
-> FUNCTIONAL PARITY
```

## 3. Export Is Not Migration

GitHub's documented exit path is code export through repository creation.

That preserves an editable codebase, but it does not recreate the retiring Spark workbench itself.

The creator may lose:

```text
BUILDER-SPECIFIC ITERATION HISTORY
PROMPT HISTORY
VISUAL BUILDER STATE
BUILDER-SPECIFIC RESTORE POINTS
MANAGED AI INFERENCE
MANAGED DEPLOYMENT ASSUMPTIONS
BUILDER-ONLY METADATA
```

Therefore:

```text
SOURCE PORTABILITY
!= AUTHORING-ENVIRONMENT PORTABILITY
```

This distinction should be mandatory in Deep Drift evaluations of every chat-to-app builder.

## 4. Authoring-State Portability Fidelity

### Definition

**Authoring-State Portability Fidelity (ASPF)** measures how much of the creator's meaningful editing state survives builder retirement.

The benchmark should inventory separately:

```text
SOURCE CODE
PROMPTS / ITERATIONS
VERSION HISTORY
VISUAL STATE
DATA STATE
DEPLOYMENT STATE
AI DEPENDENCIES
BUILDER-SPECIFIC SETTINGS
```

A platform can truthfully advertise "export your code" while still leaving most of the creative process stranded.

## 5. GitHub Models Retirement Already Broke Spark's AI Helper

GitHub states that GitHub Models, the inference service used by Spark's `llm()` function, retired on **30 July 2026**.

From that date, Spark apps using `llm()` no longer had working inference through that built-in route.

Creators must replace it with their own inference provider and manage their own API key and billing.

The dependency graph changes from:

```text
SPARK APP
-> spark.llm / llm()
-> GITHUB MODELS
-> MODEL
```

into:

```text
EXPORTED APP
-> CREATOR-SELECTED SDK / API
-> EXTERNAL INFERENCE PROVIDER
-> MODEL
-> CREATOR BILLING / CREDENTIALS
```

The application may look identical while its infrastructure, data exposure, cost model, and provider policy all change.

## 6. Runtime-Dependency Portability Fidelity

### Definition

**Runtime-Dependency Portability Fidelity (RDPF)** measures whether every managed dependency used by a builder can be identified and replaced when the builder or an underlying service retires.

A minimum dependency manifest should preserve:

```text
dependency_name
dependency_role
managed_or_external
provider
API_or_runtime_contract
authentication_method
billing_owner
retirement_date
replacement_provider
replacement_version
behavioral_differences
```

The crucial rule is:

```text
CODE EXPORTED
!= DEPENDENCIES EXPORTED
```

## 7. Inference-Provider Substitution Is Not Neutral

Replacing `llm()` is not merely changing one endpoint.

A new provider may alter:

```text
MODEL BEHAVIOR
CONTEXT WINDOW
TOOL SUPPORT
STRUCTURED OUTPUT
SAFETY POLICY
DATA RETENTION
LATENCY
PRICE
RATE LIMITS
REGION
```

### Inference-Provider Substitution Fidelity

A controlled migration should run the same test set against the old and replacement inference paths where historical comparison remains possible.

The migration record should preserve:

```text
old_provider
old_model_or_service
new_provider
new_model
prompt_contract
output_schema
controlled_test_cases
behavioral_deltas
cost_delta
latency_delta
```

"The AI feature works again" is not sufficient evidence of equivalence.

## 8. Deployed-App Survival Can Create a False Sense of Safety

GitHub says already-deployed apps continue running after Spark retires.

That is useful, but it creates a dangerous cognitive shortcut:

```text
APP STILL ONLINE
-> USER ASSUMES PROJECT IS SAFE
```

The actual state may be:

```text
APP STILL ONLINE
+ BUILDER GONE
+ CODE NOT EXPORTED
+ AI DEPENDENCY DEAD
+ FUTURE EDITABILITY LOST
```

A functioning URL can therefore conceal a dead authoring lineage.

## 9. Deployed-App Survival Fidelity

### Definition

**Deployed-App Survival Fidelity (DASF)** measures whether a deployed artifact remains operational, maintainable, and attributable after the builder is retired.

The benchmark should check:

```text
URL AVAILABILITY
NON-AI FUNCTIONALITY
AI FUNCTIONALITY
DATA STORE ACCESS
AUTHENTICATION
ASSET DELIVERY
SOURCE REPOSITORY AVAILABILITY
REDEPLOY CAPABILITY
EDIT CAPABILITY
```

Survival should not be measured only by HTTP 200.

## 10. Deployment/Source Divergence

Spark previously exposed which version was deployed and when users had iterated past the deployed state.

At retirement, the following states may diverge:

```text
LAST SPARK EDITOR STATE
LAST EXPORTED REPOSITORY STATE
LAST DEPLOYED STATE
CURRENT LIVE STATE
```

### Deployment/Source Divergence Fidelity

Deep Drift should require creators to record the hashes or stable version identifiers for each of these states.

Otherwise the repository created on the final day may not actually correspond to the version running in production.

## 11. The Successor Is Not Another Dedicated Builder

GitHub explains the Spark retirement by pointing to increasingly capable agentic development workflows in:

```text
VS CODE
COPILOT CLI
GITHUB COPILOT APP
```

This is a broader creator-workflow trend.

The dedicated natural-language mini-app builder is being replaced by **general-purpose agentic development environments** that can work directly against repositories and existing developer surfaces.

The transition is:

```text
SPECIAL-PURPOSE VIBE BUILDER
-> EXPORT REPOSITORY
-> GENERAL AGENTIC WORKSPACE
```

That is not merely product consolidation. It changes where state lives.

In Spark, the builder was the primary creative surface.

In the successor model, the repository becomes the durable object and agents become replaceable operators around it.

## 12. Repository-Centric Creator Architecture

The architectural shift can be represented as:

```text
OLD
IDEA
-> AI BUILDER
-> MANAGED APP

EMERGING
IDEA
-> REPOSITORY
-> AGENT(S)
-> IDE / CLI / APP
-> DEPLOYMENT TARGET
```

This is a meaningful trend for Deep Drift Research:

> **The repository is increasingly becoming the persistent creative object; the AI builder is becoming an interchangeable execution surface.**

That architecture is potentially healthier for portability - but only when the agent state, runtime dependencies, and artifact lineage are preserved alongside the code.

## 13. Why This Matters for Memory

No stronger new persistent-memory release surfaced in this run.

But Spark retirement reveals an adjacent memory problem: **builder memory is often not portable**.

A builder may have accumulated:

```text
PROMPT ITERATIONS
DESIGN DECISIONS
CORRECTIONS
RESTORE POINTS
MODEL-GENERATED RATIONALE
```

while the repository contains only the resulting code.

Therefore Deep Drift should distinguish:

```text
CREATOR MEMORY
BUILDER SESSION MEMORY
REPOSITORY HISTORY
RUNTIME STATE
```

They are different memory systems with different survival properties.

## 14. Why This Matters for Skills

No new Skill packaging event displaced the recent Skill supply-chain nodes.

The important implication is that reusable Skills tied to a builder can die with the builder unless they are represented independently as files, repository objects, or standard manifests.

A durable Skill should therefore be portable across execution surfaces.

```text
SKILL
!= BUILDER FEATURE
```

## 15. Why This Matters for Mini-App Builders

This is the strongest category in the current run.

GitHub Spark was explicitly a natural-language app builder capable of generating full-stack web applications with data storage, AI features, GitHub authentication, visual editing, code editing, and managed deployment.

Its final export date demonstrates that mini-app builders need **exit architecture from day one**, not as a retirement-week patch.

A serious builder should define:

```text
HOW TO EXPORT CODE
HOW TO EXPORT DATA
HOW TO EXPORT PROMPT / ITERATION HISTORY
HOW TO REPLACE MANAGED AI
HOW TO REDEPLOY ELSEWHERE
HOW TO VERIFY DEPLOYED / EXPORTED VERSION PARITY
```

before anyone entrusts a production workflow to it.

## 16. Why This Matters for Chat-to-Document Export

No new DOCX/PDF export primitive surfaced strongly enough to displace prior Deep Drift nodes.

But the Spark event reinforces the same conceptual rule:

```text
EXPORTABLE OUTPUT
!= CONTINUABLE CREATIVE STATE
```

A PDF export preserves a result.

A repository export preserves more structure.

Neither automatically preserves the environment that made the result editable.

## 17. Why This Matters for DOCX / PDF Generation

The lesson transfers directly to generated documents.

A DOCX or PDF produced by an AI platform may survive after:

```text
THE GENERATOR IS RETIRED
THE PROJECT MEMORY IS MIGRATED
THE CONNECTOR IS REMOVED
THE MODEL IS DEPRECATED
THE TEMPLATE SYSTEM CHANGES
```

Deep Drift should therefore test **artifact survival separately from artifact regenerability**.

A document that can still be opened is not necessarily a document whose production chain can still be reproduced.

## 18. Why This Matters for Copy-Paste and Export Fixes

Spark's official exit mechanism is considerably better than screenshots or copy-paste: convert the app to a repository.

That preserves executable source structure.

But the migration still requires the creator to understand which pieces were never in that source tree.

The export seam becomes:

```text
CREATE REPOSITORY
-> INVENTORY MANAGED SERVICES
-> REPLACE RETIRED DEPENDENCIES
-> VERIFY BUILD
-> VERIFY DATA
-> VERIFY DEPLOYMENT
-> VERIFY AI BEHAVIOR
```

One click begins the migration. It does not complete it.

## 19. New Failure Classes

### 19.1 Builder Retirement without Source Export

The deployed app survives but the creator can no longer obtain editable source.

### 19.2 Source Export without Authoring History

The repository survives while prompts, iterations, restore points, or visual-builder state disappear.

### 19.3 Managed-Dependency Orphaning

Exported code references a platform service that no longer exists.

### 19.4 Inference Substitution Drift

A replacement model/provider changes application behavior while the UI appears unchanged.

### 19.5 Deployed/Exported Version Mismatch

The repository exported at retirement does not match the version still deployed.

### 19.6 Credential Ownership Shock

A platform-managed AI capability becomes the creator's responsibility for keys, billing, and secret management.

### 19.7 Runtime Cost Migration

A formerly bundled inference cost becomes direct provider billing after export.

### 19.8 Dead Builder / Live Artifact Illusion

The running app creates the false impression that the complete project remains maintainable.

### 19.9 Data-Portability Blind Spot

Code is preserved but application data, schema state, or user-generated content is not independently recoverable.

### 19.10 Successor-Surface Equivalence Assumption

Users assume Copilot in VS Code/CLI/app reproduces the exact Spark authoring semantics because GitHub positions those environments as the new preferred path.

## 20. Deep Drift Benchmark: Retire, Export, Rebuild, Replace

For any AI mini-app builder facing migration or deprecation:

1. record the final builder project ID and version;
2. record the currently deployed version;
3. export/create the repository;
4. record the export commit SHA;
5. inventory files, assets, schema, and dependencies;
6. identify platform-managed services;
7. search explicitly for retired helper calls such as `llm()`;
8. build the exported app outside the retired builder;
9. compare UI and non-AI behavior to the deployed app;
10. replace the inference provider;
11. rerun controlled AI behavior tests;
12. record credentials and billing ownership changes;
13. redeploy from the repository where possible;
14. compare the new deployment to the original deployment;
15. record which builder-only states could not be reconstructed.

## 21. Proposed Metrics

### Builder-to-Repository Coverage

```text
BRC =
material editable project state recoverable from repository
/
all controlled editable project state
```

### Runtime Dependency Recovery

```text
RDR =
identified and replaceable managed dependencies
/
all controlled managed dependencies
```

### Deployed/Exported Version Parity

```text
DEVP =
controlled features matching between deployed and exported build
/
all controlled features
```

### Inference Substitution Behavioral Parity

```text
ISBP =
controlled AI cases remaining within accepted behavior tolerance
/
all controlled AI cases
```

### Authoring-State Survival

```text
ASS =
recoverable creator-state categories after builder retirement
/
all controlled creator-state categories
```

## 22. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No stronger fresh memory release surfaced; new implication is the non-portability of builder/session memory when an authoring surface retires. |
| Skills | No stronger fresh Skill packaging change surfaced; durable Skills should be decoupled from any single builder surface. |
| Mini-app builders | **Major date-triggered event:** 31 August 2026 is the final Spark access/export date. Dedicated AI builder retirement exposes whether apps, source, runtime dependencies, and authoring history are actually portable. |
| Chat-to-document export | No new direct document primitive; Spark reinforces the distinction between exportable result and continuable creative state. |
| DOCX / PDF generation | No stronger standalone file-generation release surfaced; the portability lesson applies directly to whether generated documents remain reproducible after their generator changes or disappears. |
| Copy-paste / export fixes | **Strong finding:** repository export is structurally superior to copy-paste, but still requires explicit managed-service and dependency migration. |
| Broader creator workflow | **Major trend:** durable repositories are replacing dedicated AI-builder surfaces as the long-lived creative object, while AI agents become interchangeable operators around them. |

## 23. Deep Drift Research Position

The weak description is:

> GitHub Spark shuts down and users should export their apps.

The serious description is:

> A natural-language application builder can disappear while its deployed outputs remain alive, exposing the difference between artifact persistence, source portability, authoring-state portability, runtime dependency portability, and the portability of AI inference itself.

Therefore:

```text
DEPLOYED != MAINTAINABLE

EXPORTED != MIGRATED

SOURCE != AUTHORING STATE

RUNNING APP != RUNNING AI FEATURE

REPOSITORY != COMPLETE PROVENANCE

SUCCESSOR TOOL != SEMANTIC CONTINUITY
```

The Deep Drift requirement is:

> **Every AI mini-app builder should expose an exit architecture that preserves source repository state, builder project/version identity, prompt and iteration history where possible, data and schema portability, deployed-version identity, managed-service inventory, inference-provider dependencies, credential and billing ownership, replacement-provider migration state, and post-retirement redeployability required to reconstruct not merely the artifact, but the creator's capacity to continue making it.**

The industry likes to call these tools "builders." Retirement reveals whether they were actually builders or merely rented rooms with a very charming concierge. A real creative tool should leave you with the workbench, or at least enough of its machinery to continue after the landlord changes the locks.

## Evidence Boundary

Platform facts are grounded in GitHub's official changelog and documentation checked on 31 August 2026.

GitHub states that Spark stopped accepting new users and new app creation on 4 August 2026; existing users could access Spark until 31 August 2026 to export existing applications; already-deployed applications continue to work after Spark is retired; creators who want continued editability should use **Create repository** before the deadline; and apps relying on Spark's `llm()` function must replace GitHub Models with another inference provider because GitHub Models retired on 30 July 2026.

BRRDPF and all companion fidelity constructs, failure classes, benchmark procedures, and proposed metrics are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. GitHub Changelog, **Upcoming deprecation of GitHub Spark on github.com**, 4 August 2026.  
   https://github.blog/changelog/2026-08-04-upcoming-deprecation-of-github-spark-on-github-com/

2. GitHub Docs, **About GitHub Spark**, checked 31 August 2026.  
   https://docs.github.com/en/copilot/concepts/spark

3. GitHub Docs, **Deploy your Spark app from the command line**, checked 31 August 2026.  
   https://docs.github.com/en/copilot/tutorials/spark/deploy-from-cli

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
