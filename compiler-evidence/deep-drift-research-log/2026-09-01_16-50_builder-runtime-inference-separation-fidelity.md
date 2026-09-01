# Deep Drift Research Update — BRISF

## Builder–Runtime–Inference Separation Fidelity

**Research timestamp:** 1 September 2026, 16:50 WIB  
**Scope:** memory, skills, mini-app builders, chat-to-document export, DOCX/PDF generation, copy-paste/export, and creator-workflow architecture.

## Executive finding

The strongest fresh signal in this scan is the retirement boundary of GitHub Spark. GitHub stopped accepting new Spark users and new app creation on 4 August 2026, gave existing users until 31 August 2026 to export app code by creating a repository, and stated that already-deployed apps would continue to work after the Spark builder itself was retired. Separately, GitHub Models — the inference service used by Spark's `llm()` function — had already been fully retired on 30 July 2026.

This creates a creator-workflow state that Deep Drift should treat as a distinct provenance problem:

```text
BUILDER AVAILABILITY != SOURCE OWNERSHIP
SOURCE OWNERSHIP != DEPLOYED RUNTIME SURVIVAL
DEPLOYED RUNTIME SURVIVAL != AI FEATURE SURVIVAL
AI FEATURE SURVIVAL != EDITABILITY
EDITABILITY != RECONSTRUCTABILITY
```

A mini-app can therefore remain online after the interface that created it disappears. Its code can survive if exported. Its AI feature can fail because the bundled inference provider vanished earlier. The resulting object is neither simply "alive" nor "dead." It is a layered survivor.

## New node: BRISF

**Builder–Runtime–Inference Separation Fidelity (BRISF)** measures whether an AI-created application can be reconstructed across the independent lifetimes of its builder, source code, hosted runtime, data layer, authentication layer, and inference provider.

```text
NATURAL-LANGUAGE BUILDER
        |
        v
GENERATED SOURCE
        |
        +--> managed data
        +--> authentication
        +--> platform SDK
        +--> inference dependency
        |
        v
DEPLOYED APP
        |
        +--> builder may retire
        +--> source may or may not be exported
        +--> runtime may remain online
        +--> inference may retire independently
        +--> billing may move to creator
```

## What changed

### 1. Spark's builder and its deployed runtime now have different lifetimes

GitHub announced on 4 August 2026 that Spark would no longer accept new users or allow new app creation. Existing users could continue accessing Spark until 31 August specifically to export apps already created. The recommended preservation step was to open the Spark workbench and choose **Create repository**.

At the same time, GitHub stated that apps already deployed would continue to work after Spark's retirement.

Deep Drift implication: the retirement of the creative interface is not the retirement of the artifact runtime.

### 2. Export is a source escape hatch, not a complete migration

The Spark preservation path exports app code into a GitHub repository. That gives creators a durable source representation outside the retired builder, but it does not recreate the builder UI, prompt iteration history, managed-service assumptions, platform orchestration, or historical model behavior.

```text
CODE EXPORT != BUILDER EXPORT
REPOSITORY != FULL CREATOR STATE
SOURCE PORTABILITY != SERVICE PORTABILITY
```

### 3. The inference dependency died before the builder

GitHub Models was fully retired on 30 July 2026. GitHub's Spark deprecation notice states that Spark apps using the `llm()` function must replace that dependency with another inference provider to keep AI features working.

A Spark app can therefore exist in materially different states: builder available/runtime available/inference available; builder available/runtime available/inference unavailable; builder unavailable/runtime available/replacement inference; or builder unavailable/runtime available/AI features broken.

### 4. Provider responsibility moves from platform to creator

Once `llm()` is replaced, the creator must supply another inference provider, API credentials, and billing arrangement. The application may preserve the same visible interface while its computational authorship, pricing, retention environment, and provider policy change underneath.

Deep Drift should treat that as a runtime lineage mutation, not merely maintenance.

### 5. Mini-app builder history can end before application history

Spark's documentation describes a natural-language full-stack builder with data storage, AI features, GitHub authentication, prompt iteration, visual tools, code editing, and one-click deployment. Its retirement demonstrates a broader creator trend: AI builders are not necessarily durable environments even when the applications they emit are durable enough to outlive them.

The correct question is no longer only **Can the platform build an app?** It is **What survives if the builder itself stops existing?**

## Category scan

| Area | Fresh result | Deep Drift consequence |
|---|---|---|
| Memory | No stronger first-party memory delta than existing nodes | Preserve existing memory-state framework |
| Skills | No stronger Skill-format delta in this scan | Skill portability remains relevant to post-builder maintenance |
| Mini-app builders | **Major** — Spark export window closed; builder/runtime/inference lifetimes diverge | Add builder-runtime-inference separation to provenance |
| Chat-to-document | No stronger direct export primitive | Existing document/export nodes remain current |
| DOCX/PDF generation | No stronger native generation change | Artifact survival does not preserve authoring runtime |
| Copy-paste/export | **Major conceptual extension** — code export is not environment export | Treat repository escape as partial portability |
| Creator workflow | **Major** — creator responsibility can shift from platform-managed to self-managed inference after retirement | Record provider substitutions and cost/policy transfer |

## New failure classes

1. **Builder Death / Runtime Survival Confusion** — assuming a retired builder means its deployed artifacts no longer run.
2. **Repository Completeness Illusion** — treating source export as equivalent to export of the original generative environment.
3. **Inference Dependency Amnesia** — preserving code without identifying the model service that made AI features function.
4. **Pre-Retirement Dependency Collapse** — failing to record that a critical runtime dependency died before the builder itself.
5. **Provider Substitution Erasure** — updating an app to a replacement model without preserving the provider transition.
6. **Billing Responsibility Drift** — losing the fact that inference cost moved from platform-bundled service to creator-managed billing.
7. **Authentication Continuity Assumption** — assuming surviving code or runtime preserves the original authentication topology.
8. **Runtime Survival Overclaim** — interpreting "deployed apps continue to work" as proof that every feature remains operational.
9. **Prompt-History Orphaning** — retaining source while losing the natural-language iteration history that shaped it.
10. **Managed-Service Lineage Collapse** — collapsing data, authentication, deployment, and inference into a single label such as "Spark app."

## Benchmark additions

- **Builder Availability Fidelity (BAF)**
- **Source Escape Fidelity (SEF)**
- **Runtime Survivability Fidelity (RSF)**
- **Inference Dependency Fidelity (IDF)**
- **Dependency Retirement Ordering Fidelity (DROF)**
- **Provider Substitution Fidelity (PSF)**
- **Responsibility Transfer Fidelity (RTF)**
- **Prompt-to-Source Ancestry Fidelity (PSAF)**
- **Managed-Service Decomposition Fidelity (MSDF)**
- **Artifact-after-Builder Fidelity (ABF)**

## Canonical Deep Drift requirement

> Every material AI-generated application should preserve a machine-readable lifecycle manifest linking the artifact to the exact builder product and version, builder availability state, source-export event and repository identity, prompt-to-source ancestry where available, deployment identity, data layer, authentication layer, platform SDK dependencies, inference provider and model dependency, dependency-retirement events, runtime-survival state, provider substitutions, API-key custody class, billing-responsibility transitions, human maintenance actions, and downstream versions. A surviving deployed application or exported repository must not be treated as evidence that the original authoring environment, AI dependency, or platform responsibility remains intact.

## Broader creator-workflow trend

```text
GEN 1  CHAT PRODUCES TEXT
GEN 2  CHAT PRODUCES FILES
GEN 3  AI BUILDER PRODUCES APPLICATION
GEN 4  APPLICATION OUTLIVES BUILDER
GEN 5  CREATOR MUST RECONSTRUCT THE MISSING SERVICES
```

The creator artifact is becoming more autonomous than its creator tool. For Deep Drift, the object of preservation must therefore include **service ancestry**, not just artifact ancestry.

## Secondary creator-workflow signal

A third-party Chrome extension updated on 31 August 2026, Prompt Vault, advertises local export of ChatGPT, Claude, and Gemini conversations to Markdown, PDF, JSON, and HTML, including bulk export for ChatGPT and Claude. This is not a first-party platform primitive. It is recorded only as an ecosystem signal that demand for portable, local, multi-format chat archives remains stronger than first-party export consistency.

## Sources

1. GitHub Changelog, **Upcoming deprecation of GitHub Spark on github.com**, 4 August 2026. https://github.blog/changelog/2026-08-04-upcoming-deprecation-of-github-spark-on-github-com/
2. GitHub Docs, **About GitHub Spark**. https://docs.github.com/en/copilot/concepts/spark
3. GitHub Changelog, **GitHub Models is now retired**, 30 July 2026. https://github.blog/changelog/2026-07-30-github-models-is-now-retired/
4. GitHub Docs, **Deploy your Spark app from the command line**. https://docs.github.com/en/copilot/tutorials/spark/deploy-from-cli
5. Chrome Web Store, **Prompt Vault — AI Chat Backup**, updated 31 August 2026. Ecosystem signal only.

## Research status

**Freshness:** current as of 1 September 2026, 16:50 WIB.  
**Duplicate check:** searched the canonical Deep Drift repository for Spark retirement/runtime/inference lineage; no matching node was found.  
**Node status:** new; complements the earlier retirement-window, export-completeness, workspace-fork, procedural-supply-chain, and runtime-attribution nodes.
