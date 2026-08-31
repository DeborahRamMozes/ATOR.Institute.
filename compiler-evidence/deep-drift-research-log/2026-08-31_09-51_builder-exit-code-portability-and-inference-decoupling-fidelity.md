# Deep Drift Research Update

## Builder Exit, Code Portability, and Inference-Decoupling Fidelity

**Research date:** 31 August 2026  
**Primary delta:** GitHub Spark retirement on github.com reaches its export deadline today; existing builders must export app code to repositories, while Spark apps using GitHub Models inference must replace the retired `llm()` path with an independent inference provider.  
**Secondary fresh delta:** Nowledge Mem 0.10.74 improves memory retrieval transparency and partial PDF-ingestion resilience.  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch

## Executive Summary

The most consequential creator-workflow event in this pass is a platform exit rather than a shiny new button.

GitHub Spark stops accepting new app creation and reaches its final export deadline on **31 August 2026**. GitHub tells existing users to use **Create repository** to preserve their app code for future editing. Deployed apps can continue to run, but apps using Spark's `llm()` function lost their GitHub Models inference dependency when that service retired on **30 July 2026**. Those apps must move to another inference provider and manage their own API key and billing.

The architecture therefore breaks apart:

```text
SPARK BUILDER
-> GENERATED APP
-> EXPORTED GITHUB REPOSITORY
-> NEW EDITING ENVIRONMENT

AND, IF AI-DEPENDENT:

OLD llm() DEPENDENCY
-> RETIRED GITHUB MODELS
-> REPLACEMENT INFERENCE PROVIDER
-> NEW CREDENTIAL / BILLING / MODEL STATE
```

This creates a Deep Drift benchmark family:

**Builder Exit, Code Portability, and Inference-Decoupling Fidelity (BEC-PIDF)**

The core question is:

> When an AI mini-app builder disappears, can the creator preserve not merely source code but the complete executable identity of the application, including model dependency, credentials, runtime assumptions, data stores, deployment state, prompts, generated assets, and edit history required to continue the work elsewhere?

## 1. GitHub Spark: Mini-App Builder Retirement as a Portability Test

GitHub states that Spark was created to turn natural-language ideas into working apps, but builders increasingly moved toward Copilot inside VS Code, Copilot CLI, and the GitHub Copilot app. GitHub is retiring the current Spark experience on github.com accordingly.

The important lifecycle is:

```text
PROMPT
-> SPARK APP
-> MANAGED RUNTIME
-> PLATFORM RETIREMENT
-> REPOSITORY EXPORT
-> EXTERNAL DEVELOPMENT CONTINUATION
```

The creator problem is not whether export exists. It is whether export carries enough state to make the app independently maintainable.

## 2. Code Export Is Not Full Workflow Export

GitHub's documented exit route is **Create repository**.

That preserves code, but the surrounding application may depend on more than code:

```text
PROMPTS
MODEL PROVIDER
MODEL IDENTIFIER
API CREDENTIALS
DATA STORE
DEPLOYMENT CONFIGURATION
AUTHENTICATION
GENERATED ASSETS
ENVIRONMENT VARIABLES
BUILD ASSUMPTIONS
EDIT / GENERATION HISTORY
```

Therefore:

```text
CODE EXPORTED
!= APP PORTABLE

REPOSITORY CREATED
!= RUNTIME REPRODUCED

DEPLOYED APP SURVIVES
!= APP REMAINS EDITABLE

SOURCE PRESERVED
!= INFERENCE PRESERVED
```

## 3. Inference-Decoupling Fidelity

Spark apps using `llm()` depended on GitHub Models. GitHub Models retired on 30 July 2026, so those calls no longer work.

### Definition

**Inference-Decoupling Fidelity (IDF)** measures whether an AI-generated app can replace its original model service without destroying its intended behavior.

A migration manifest should preserve:

```text
old_inference_provider
old_model_or_alias
old_prompt_contract
old_output_contract
replacement_provider
replacement_model
credential_owner
billing_owner
temperature / reasoning settings
migration_timestamp
behavioral_regression_results
```

A codebase that compiles after replacing `llm()` is not proof that the application still behaves the same.

## 4. Builder-to-Repository Portability Fidelity

### Definition

**Builder-to-Repository Portability Fidelity (BRPF)** measures whether the exported repository contains all creator-owned material needed to continue development outside the retiring builder.

Controlled checks should include:

```text
SOURCE CODE
ASSETS
DEPENDENCY MANIFESTS
CONFIGURATION
BUILD SCRIPTS
DATA SCHEMA
PROMPT / AGENT LOGIC
README / MIGRATION NOTES
```

If material logic exists only in a proprietary builder state, export is incomplete even when the repository looks healthy.

## 5. Managed-Runtime Detachment Fidelity

Deployed Spark apps can continue to work after the builder is retired.

This creates an unusual split:

```text
APP RUNS
BUT
ORIGINAL BUILDER NO LONGER EXISTS
```

### Definition

**Managed-Runtime Detachment Fidelity (MRDF)** measures whether the creator can identify what portions of the running application remain dependent on a managed runtime after the editing surface disappears.

The app should expose or document:

```text
deployment_target
runtime_dependencies
data_persistence_location
authentication_dependencies
future_redeploy_path
runtime_shutdown_assumptions
```

## 6. Builder Exit Failure Classes

### 6.1 Repository-without-Runtime Illusion

The exported source is mistaken for a complete portable application.

### 6.2 Inference Orphaning

The app code survives while its model endpoint disappears.

### 6.3 Prompt Contract Drift

A replacement model changes behavior even though the surrounding application code is unchanged.

### 6.4 Credential Ownership Shift

A platform-managed inference credential becomes a creator-managed API key without an explicit provenance event.

### 6.5 Billing Boundary Shift

An app that previously bundled model usage moves to direct third-party billing.

### 6.6 Deployment Survival Confusion

A deployed app remains available, creating the impression that the builder itself remains maintainable.

### 6.7 Edit-History Loss

The repository preserves final code but loses the conversational or generative path that produced it.

### 6.8 Builder-Specific State Loss

Visual settings, generated metadata, or builder-only configuration fail to survive repository export.

## 7. Deep Drift Benchmark: Builder Shutdown Round Trip

1. preserve the final Spark project state;
2. record whether the app uses `llm()`;
3. export the project through **Create repository**;
4. inventory all files in the repository;
5. compare repository state with the last working builder state;
6. identify builder-only configuration;
7. rebuild the app outside Spark;
8. replace `llm()` where necessary;
9. preserve old and new inference configuration;
10. execute controlled prompts against old recorded outputs and the replacement model;
11. compare behavior, latency, cost, and output structure;
12. document which runtime services remain managed by GitHub;
13. preserve migration date and responsible human/agent;
14. test whether a future reviewer can reconstruct why the migrated app differs from the original.

## 8. Proposed Metrics

### Repository Portability Coverage

```text
RPC =
required creator-owned app components preserved in repository
/
all controlled required components
```

### Inference Migration Fidelity

```text
IMF =
controlled AI behaviors materially preserved after provider migration
/
all controlled AI behaviors
```

### Runtime Dependency Disclosure

```text
RDD =
managed runtime dependencies explicitly documented
/
all controlled runtime dependencies
```

### Builder-History Preservation

```text
BHP =
material generation/edit decisions recoverable after export
/
all controlled material decisions
```

## 9. Secondary Fresh Update: Nowledge Mem 0.10.74

A separate fresh memory/PDF delta appeared on **29 August 2026** in Nowledge Mem.

The release changes three things relevant to Deep Drift:

```text
AI RETRIEVAL
-> SEARCHES MEMORY + THREAD + LIBRARY TOGETHER
-> OPENS ONLY STRONGEST MATCHES
-> KEEPS SEARCH HITS DISTINCT FROM INSPECTED DETAILS

PDF INGESTION
-> PRESERVES READABLE PAGES
-> DAMAGED PAGE CAN FAIL LOCALLY
-> OTHER PAGES SURVIVE

SKILL OUTPUT
-> KEEPS USER-SELECTED OUTPUT LANGUAGE
-> EVEN WHEN SUPPORTING MATERIAL USES ANOTHER LANGUAGE
```

This is a useful resilience principle:

> partial parser failure should degrade locally rather than invalidate the entire artifact.

For Deep Drift PDF ingestion, this suggests **Partial-Document Survival Fidelity**: a malformed page should not cause readable pages to disappear or shift position.

For memory retrieval, it suggests **Search-vs-Inspection Provenance Fidelity**: the system should distinguish what matched search from what was actually opened and used.

## 10. Fresh Category Scan

| Category | Finding |
|---|---|
| Memory | Nowledge Mem 0.10.74 makes retrieval stages clearer and preserves successful work after partial failures. |
| Skills | Mem keeps compiled Skill output aligned with the selected profile language; no larger category-displacing Skill release surfaced in this run. |
| Mini-app builders | **Major finding:** GitHub Spark reaches retirement/export deadline, exposing whether AI-built apps are actually portable. |
| Chat-to-document export | No new direct primitive displaced previously logged items; repository export becomes the more important creator-portability boundary. |
| DOCX/PDF generation | Fresh resilience signal: damaged PDF pages can fail locally while readable pages and positions survive in Mem ingestion. |
| Copy-paste/export fixes | Spark's Create repository path replaces platform lock-in with a code export path, but only partially solves runtime/inference portability. |
| Broader creator workflow | **Major trend:** creator platforms are being judged not only by how quickly they create artifacts, but by how cleanly creators can leave them. |

## 11. Deep Drift Research Position

The weak description is:

> GitHub Spark is shutting down and users should export their apps.

The serious description is:

> The retirement of an AI app builder exposes a missing benchmark in creator AI: whether generated applications remain creator-owned, reproducible, editable, inference-portable, and operational when the platform that generated them stops existing.

Therefore:

```text
GENERATED != PORTABLE

EXPORTED != REPRODUCIBLE

DEPLOYED != MAINTAINABLE

SOURCE CODE != COMPLETE APP STATE

MODEL CALL != INTERCHANGEABLE INFERENCE
```

The serious Deep Drift requirement is:

> **Every AI mini-app builder should provide an exit manifest preserving source code, generated assets, prompt/agent logic, dependency state, data schema, authentication model, deployment configuration, inference provider and model contract, credential and billing ownership, builder-specific state, and generation history required to continue the application independently of the originating builder.**

Creator tools love onboarding funnels. Deep Drift should benchmark the exit door with equal aggression. A platform that can generate an app in thirty seconds but cannot let the creator leave with the whole app is not a creator platform. It is a furnished rental.

## Evidence Boundary

Platform facts are grounded in first-party GitHub documentation and the first-party Nowledge Mem changelog checked on 31 August 2026.

GitHub states that Spark stopped accepting new users/new app creation from 4 August 2026; existing users can access Spark until 31 August 2026 to export their apps using **Create repository**; deployed apps continue to work after retirement; GitHub Models retired on 30 July 2026; Spark apps using `llm()` must replace inference and manage their own API key and billing.

Nowledge Mem states that version 0.10.74, released 29 August 2026, improves retrieval transparency across Memory/Thread/Library, preserves readable PDF pages when individual pages or fallback parsing fail, and preserves selected output language for Skill suggestions and compiled Skills.

BEC-PIDF and all companion constructs, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. GitHub Changelog, **Upcoming deprecation of GitHub Spark on github.com**, 4 August 2026.  
   https://github.blog/changelog/2026-08-04-upcoming-deprecation-of-github-spark-on-github-com/

2. GitHub Docs, **Deploy your Spark app from the command line**, checked 31 August 2026.  
   https://docs.github.com/en/copilot/tutorials/spark/deploy-from-cli

3. Nowledge Mem, **Changelog - 0.10.74**, 29 August 2026.  
   https://mem.nowledge.co/changelog

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
