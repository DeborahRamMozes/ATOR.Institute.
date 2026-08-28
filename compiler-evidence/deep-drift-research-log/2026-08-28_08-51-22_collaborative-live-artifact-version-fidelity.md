# Deep Drift Research Update

## Collaborative Live Artifact Version Fidelity

**Research date:** Friday, 28 August 2026  
**ĀTØR observation time:** 08:51:22 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. No newer same-hour release displaced the latest memory, Skills, mini-app, DOCX/PDF, copy/export, or browser-agent changes already logged. One materially important creator-artifact collaboration boundary was identified as new-to-log.

## Executive Summary

OpenAI's current ChatGPT Sites documentation now makes the state model of AI-generated mini-apps much more explicit.

A ChatGPT Site is no longer merely a generated preview that one person publishes once.

In eligible Business and Enterprise workspaces:

- a Site owner can grant another active workspace member **Can edit** access;
- an editor can update and save the shared Site;
- after the owner completes the first publish, an editor can publish later versions to the **same Site URL**;
- the owner retains control over sharing, Site name or URL, ownership transfer, secrets, custom domains, analytics, version restoration, and editor access;
- an editor can publish later versions **without a separate owner-approval step**;
- the Site can be discovered again from the Sites surface and edited through the original chat or Site entry.

This creates a more serious creator-state architecture:

```text
CHAT-GENERATED MINI-APP
-> PERSISTENT SITE OBJECT
-> OWNER
-> EDITOR ACCESS
-> SAVED VERSION
-> PUBLISHED VERSION
-> STABLE URL
-> ANALYTICS / AUDIENCE
-> VERSION RESTORATION
```

The artifact has acquired identity, collaborators, history, publication state, and rollback.

For Deep Drift, this creates a new benchmark family:

**Collaborative Live Artifact Version Fidelity (CLAVF)**

and a companion construct:

**Publish-State Causal Provenance Fidelity (PCPF)**.

The central research question is:

> When an AI-generated interactive artifact becomes a collaboratively edited live object, can the system preserve who changed what, which version was saved, which version was published, which URL remained canonical, and which human authority governed the transition?

## New Deep Drift Construct: Collaborative Live Artifact Version Fidelity

### Definition

**Collaborative Live Artifact Version Fidelity (CLAVF)** measures whether a persistent AI-generated Site preserves coherent state across:

- owner identity;
- editor identity;
- saved versions;
- published versions;
- canonical URL;
- sharing audience;
- owner-only settings;
- interactive behavior;
- analytics state;
- version restoration.

A live creator artifact should therefore be treated as:

```text
ARTIFACT
+
VERSION GRAPH
+
COLLABORATOR GRAPH
+
PUBLICATION STATE
+
AUDIENCE STATE
```

not merely as generated code or a webpage preview.

## Core Deep Drift Distinction

```text
SITE SAVED
!=
SITE PUBLISHED

SITE PUBLISHED
!=
LATEST SAVED VERSION

SAME URL
!=
SAME CONTENT

EDITOR AUTHORIZED TO EDIT
!=
EDITOR AUTHORIZED TO CHANGE OWNER-ONLY STATE

COLLABORATIVE
!=
OWNER-APPROVED EACH TIME
```

The same public URL can point to different published states over time.

That makes the URL a stable identity surface over a changing artifact.

## Why This Matters for Mini-App Builders

Mini-app builders are often evaluated with childish metrics:

```text
CAN IT GENERATE THE APP?
DOES THE PREVIEW WORK?
```

That is no longer enough.

Once a generated Site becomes persistent and collaborative, the system must also answer:

```text
WHO OWNS IT?
WHO MAY EDIT IT?
WHO MAY PUBLISH IT?
WHAT VERSION IS LIVE?
WHAT VERSION IS SAVED BUT NOT LIVE?
WHAT CHANGED BETWEEN VERSIONS?
CAN THE PREVIOUS VERSION BE RESTORED?
DID THE URL CHANGE?
DID THE AUDIENCE CHANGE?
```

This is ordinary software configuration management arriving inside conversational AI.

## New Failure Classes

### Saved/Published State Confusion

The editor saves a new version and assumes it is live, or the user sees the live Site and assumes it represents the newest saved state.

### Editor Publication Surprise

An owner grants edit access for collaboration but does not realize that, after first publication, the editor can publish later versions without a separate owner-approval step.

### Canonical URL Semantic Drift

The same Site URL remains stable while content, logic, forms, links, or interactive behavior change materially, making historical references to the URL ambiguous.

### Version Restoration Provenance Loss

A previous version is restored, but the later reviewer cannot reconstruct which intervening versions existed, why the rollback happened, or who initiated it.

### Owner-Only State Leakage

An editor can alter content correctly but accidentally gains access to owner-only state such as secrets, domains, URL, or ownership configuration.

### Collaboration-State Orphaning

An editor loses workspace membership or edit access, but open editing state, cached previews, or pending changes remain active longer than expected.

### Audience/Version Mismatch

A new version is published under an audience configuration that differs from what the editor believed was active.

### Interactive Behavior Regression

Copy and layout remain visually correct after a collaborative edit, but forms, links, navigation, or interactive logic regress.

### Analytics Continuity Ambiguity

Analytics continue across versions under the same Site identity, but later analysis cannot distinguish performance before and after a material version change.

### Chat-to-Site Provenance Fracture

A Site originated from a specific ChatGPT conversation, but later editor changes and published versions can no longer be cleanly tied back to the conversational decisions that produced them.

## New Construct: Publish-State Causal Provenance Fidelity

### Definition

**Publish-State Causal Provenance Fidelity (PCPF)** measures whether each live publication state can be reconstructed to:

```text
SITE IDENTITY
OWNER
EDITOR / ACTOR
SOURCE CHAT OR PRIOR VERSION
SAVED VERSION
PUBLISH EVENT
AUDIENCE STATE
URL STATE
OWNER-ONLY CONFIGURATION
POST-PUBLISH ANALYTICS WINDOW
```

A public URL is not sufficient provenance.

The correct unit is the **published version state at time T**.

## Deep Drift Benchmark: Collaborative Site Version Test

### Controlled setup

Create one Site containing:

- headline;
- form;
- two navigation links;
- one interactive element;
- one external data reference;
- one owner-only secret/configuration field;
- one public or workspace-visible URL.

Assign:

```text
OWNER A
EDITOR B
```

### Version sequence

**V1** - owner creates and publishes first version.  
**V2** - editor changes copy only and saves but does not publish.  
**V3** - editor changes copy + form behavior and publishes.  
**V4** - owner changes audience setting.  
**V5** - editor introduces a deliberate regression and publishes.  
**V6** - owner restores an earlier version.

### Measure

- saved-version identity;
- published-version identity;
- live URL content;
- editor/owner attribution;
- interactive behavior survival;
- audience-state accuracy;
- owner-only setting containment;
- rollback traceability;
- analytics/version segmentation;
- human reconstruction minutes.

## New Metrics

### Live Version Resolution Accuracy

```text
LVRA =
checks where the actual live version
matches the version believed to be published
/
all publication-state checks
```

### Collaborator Action Attribution Rate

```text
CAAR =
material Site changes attributable to
the correct owner or editor
/
all material collaborative changes
```

### Publish-State Traceability

```text
PST =
live states reconstructable to
saved version + actor + publish event + audience state
/
all published states
```

### Interactive Regression Survival Rate

```text
IRSR =
required interactive behaviors surviving collaborative updates
/
all required interactive behaviors
```

### Rollback Causal Completeness

```text
RCC =
restored versions with reconstructable
pre-rollback state, reason, actor, and target version
/
all rollback events
```

## Stable URL Does Not Mean Stable Artifact

A research citation that stores only the Site URL cannot prove which artifact state was observed.

Deep Drift should record:

```text
SITE_REFERENCE_CARD

site_id:
site_url:
observed_version:
published_at:
observed_at:
owner:
last_publisher:
audience:
content_hash_if_available:
version_restore_state:
source_chat:
unknown_fields:
```

## Collaborative Artifact State Is Not the Same as Document Collaboration

A Site includes visual structure, interactive behavior, publication, routing, forms, external links, possible secrets, custom domains, analytics, and audience.

So:

```text
CO-EDITING A SITE
!=
CO-EDITING A DOCUMENT
```

The publication boundary matters. The interactive runtime matters. The audience boundary matters.

## Human Approval Boundary Changes After First Publish

OpenAI's current documentation is particularly important on one point: after the owner publishes the Site for the first time, an editor can publish later versions without a separate owner-approval step.

That creates a state transition:

```text
BEFORE FIRST PUBLISH
OWNER CONTROLS INITIAL PUBLICATION

AFTER FIRST PUBLISH
AUTHORIZED EDITOR CAN PUBLISH LATER VERSIONS
```

Deep Drift should therefore record **approval topology**, not merely editor permission.

## New Failure Class: Permission-Semantic Expansion

**Permission-Semantic Expansion** occurs when a role label such as `Can edit` implies a broader operational authority than the human intuitively expects, such as the ability to publish future live versions.

## Relation to Existing Deep Drift Constructs

- **Artifact-State Contract Fidelity:** collaborative edits must preserve declared invariants across copy, layout, forms, links, and interactive behavior.
- **Template-State Surface Synchronization Fidelity:** the live Site develops version history independent of its originating reusable template.
- **Evidence-Constrained Generative Artifact Fidelity:** later collaborators can alter claims and evidence boundaries after initial grounded generation.
- **Tenant-Scoped Identity-to-Capability Assignment Fidelity:** editor eligibility depends on workspace identity, membership, and Sites permissions.
- **Cross-Surface Work Continuation Fidelity:** the Site can be found and edited through web or desktop while live state remains shared.
- **Agent State Reconstruction Fidelity:** creation -> editor change -> saved version -> publish -> rollback must remain reconstructable.

## Broader Fresh Platform Scan

### OpenAI

No newer same-hour memory, Skills, DOCX/PDF, or export launch displaced the latest changes already logged.

The new-to-log focus is collaborative Site version state:

- editors can save and publish later versions;
- the canonical Site URL can remain stable;
- owners retain sharing, analytics, ownership, version restoration, secret, domain, and URL controls;
- editor publication after the first owner publish does not require a separate owner-approval step;
- Sites now behave increasingly like persistent collaborative software artifacts.

Standing recent signals remain Temporary Chat personalization controls, centralized identity management, scheduled/webhook Work, Skills/plugins, templates, native document/spreadsheet/presentation editing, and cross-device Work continuation.

### Anthropic

No first-party release newer than the latest Claude Code/runtime and browser changes already logged surfaced in this scan.

### Google

No newer same-hour Workspace creator release surfaced. Standing signals remain Workspace Studio, Sheets Canvas, Ask Gemini in Chat, interactive simulations/models, Notebook copying/migration, and structured Calendar actions.

### Microsoft

The latest broad Microsoft 365 Copilot release batch remains dated 25 August 2026. Standing signals remain Copilot Pages, multi-artifact Notebooks, mobile artifact steering, Python-backed Excel editing, multimodal Capture, inline artifact inspection, and cross-host model selection.

## Category Status

| Category | Fresh finding |
|---|---|
| Memory | No newer release than the Temporary Chat / shared-memory changes already logged. |
| Skills | No newer Skill launch in this pass. |
| Mini-app builders | **Material new-to-log boundary:** ChatGPT Sites now have collaborative editor, save, publish, stable-URL, analytics, and rollback state. |
| Chat-to-document export | No newer launch found. |
| DOCX / PDF generation | No newer launch found. |
| Copy-paste / export fixes | No newer same-hour fix found. |
| Broader creator workflow | AI-generated mini-apps are becoming persistent collaborative software objects with publication governance. |

## Deep Drift Research Position

The creator stack has crossed another boundary:

```text
GENERATED MINI-APP
-> PERSISTENT LIVE SOFTWARE OBJECT
```

Once that happens, evaluation can no longer stop at generation quality.

The research object becomes:

```text
GENERATION
+ VERSIONING
+ OWNERSHIP
+ COLLABORATION
+ PUBLICATION
+ AUDIENCE
+ ROLLBACK
+ ANALYTICS
```

Therefore:

```text
SITE EXISTS
!= SITE STATE KNOWN

SAME URL
!= SAME ARTIFACT

CAN EDIT
!= HUMAN INTUITIVELY UNDERSTANDS PUBLISH AUTHORITY

ROLLBACK EXISTS
!= ROLLBACK PROVENANCE COMPLETE
```

The closer conversational AI gets to software creation, the less useful it is to evaluate it like a chatbot.

## Evidence Boundary

Platform facts in this report are grounded in current first-party OpenAI ChatGPT Sites documentation and OpenAI Business/Enterprise release notes, with fresh first-party Anthropic, Google, and Microsoft release-source checks used to confirm no newer category-displacing release in this pass. CLAVF, PCPF, failure classes, metrics, state cards, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, **Creating and managing ChatGPT Sites**, current as of 28 August 2026: https://help.openai.com/en/articles/20001339
2. OpenAI Help Center, **Managing ChatGPT Sites for your workspace**, current as of 28 August 2026: https://help.openai.com/en/articles/20001338-managing-chatgpt-sites-for-your-workspace
3. OpenAI Help Center, **ChatGPT Business Release Notes**, August 20, 2026 - collaborative Sites: https://help.openai.com/en/articles/11391654
4. OpenAI Help Center, **ChatGPT Release Notes**, current through 27 August 2026.
5. Anthropic first-party release sources, current through 27 August 2026.
6. Google Workspace Updates, August 2026 archive.
7. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through 25 August 2026.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
