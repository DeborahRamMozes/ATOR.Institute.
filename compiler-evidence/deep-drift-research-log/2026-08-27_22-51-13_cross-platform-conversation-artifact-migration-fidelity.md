# Deep Drift Research Update

## Cross-Platform Conversation and Artifact Migration Fidelity

**Research date:** Thursday, 27 August 2026  
**ĀTØR observation time:** 22:51:13 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. One materially useful migration-layer update identified as new-to-log.

## Executive Summary

Google Workspace has made large-scale migration from Microsoft Teams and OneDrive into Google Workspace generally available through its advanced data import service.

For Microsoft Teams, Google says the migration service can copy:

- Teams channel messages;
- 1:1 direct conversations;
- group conversations.

Google explicitly characterizes this as high-fidelity migration and provides a migration planner that estimates migration timelines and organizes user data into optimized batches.

For Microsoft OneDrive, Google now supports large-scale file migration through advanced data import, including files and permissions, concurrent migration batches, throughput management against Microsoft licensing quotas, and a migration planning utility.

Taken together, these changes are important for Deep Drift because creator continuity is no longer only about whether one chat can be exported.

The system boundary now looks like:

```text
COMMUNICATION HISTORY
+ FILE CORPUS
+ PERMISSION STATE
+ COLLABORATION STRUCTURE
+ CHRONOLOGY
-> CROSS-VENDOR MIGRATION
-> NEW WORKSPACE
-> LATER AI RETRIEVAL / AGENT WORK
```

This creates a new benchmark family:

**Cross-Platform Conversation and Artifact Migration Fidelity (CCAMF)**

The central research question is:

> When an organization moves its historical conversations and files into another AI-enabled workspace, which causal properties survive well enough for later AI systems to reason about the work correctly?

## New Deep Drift Construct: Cross-Platform Conversation and Artifact Migration Fidelity

### Definition

**Cross-Platform Conversation and Artifact Migration Fidelity (CCAMF)** measures whether communication history, files, permissions, chronology, collaboration structure, and object relationships survive a vendor migration with enough semantic and provenance integrity for later human and AI workflows.

Migration fidelity should be evaluated across at least these layers:

```text
MESSAGE CONTENT
MESSAGE CHRONOLOGY
SPEAKER / AUTHOR IDENTITY
CHANNEL / THREAD STRUCTURE
DIRECT / GROUP RELATIONSHIPS
FILE CONTENT
FILE IDENTITY
FILE PERMISSIONS
SOURCE / DESTINATION MAPPING
POST-MIGRATION RETRIEVABILITY
```

## Why This Matters for Deep Drift

Most product language treats migration as an infrastructure operation.

For AI-enabled workspaces, migration becomes a **future reasoning operation**.

After migration, Gemini, search, agents, notebooks, summaries, and creator workflows may use the imported corpus as evidence.

A migration defect can therefore become a later reasoning defect.

```text
MIGRATION ERROR
-> CONTEXT ERROR
-> MODEL INTERPRETATION ERROR
-> ARTIFACT ERROR
```

The human may not even realize the problem originated months earlier during migration.

## Teams Migration: Communication State Becomes Portable Infrastructure

Google now supports large-scale Microsoft Teams migration into Google Workspace for:

- channel messages;
- direct 1:1 messages;
- group conversations.

This is a stronger continuity signal than a transcript export.

The migration attempts to preserve collaboration history as usable workspace state rather than merely archive it as a dead file.

The Deep Drift distinction is:

```text
CHAT ARCHIVE SURVIVES
!=
CONVERSATIONAL WORKFLOW SURVIVES
```

and now:

```text
CONVERSATION IMPORTED
!=
CONVERSATION SEMANTICS PRESERVED
```

## New Failure Classes

### Conversation Topology Collapse
A migrated corpus preserves message text but loses whether a message belonged to a channel, direct conversation, or group conversation in a semantically meaningful way.

### Chronology Drift
Historical ordering changes, timestamps are normalized incorrectly, or replies appear in an order that alters meaning.

### Speaker Identity Drift
Messages survive but identity mapping changes enough that later systems attribute statements, decisions, or commitments to the wrong person.

### Channel-to-Space Semantic Drift
A Teams channel maps into a Google Chat structure whose membership, role, visibility, or conversational semantics differ from the source.

### Historical Decision Context Loss
The final decision survives, but preceding objections, alternatives, edits, or unresolved conditions are missing or displaced.

### Post-Migration AI Context Overconfidence
An AI system treats imported communication history as complete even when the migration omitted unsupported or failed objects.

### Migration-Batch Boundary Drift
Related users, channels, or conversations are split across optimized migration batches in a way that complicates later completeness verification.

## OneDrive Migration: File State and Permission State Move Together

Google's OneDrive migration update is equally important because the migrated object is not only the file.

The relevant state is:

```text
FILE CONTENT
+ FILE LOCATION
+ FILE PERMISSIONS
+ USER IDENTITY MAPPING
```

Google says advanced mode supports large-scale file migrations, concurrent batches, and migration planning.

This is important because AI creator workflows increasingly depend on permission-aware retrieval.

A file that migrated correctly but inherited the wrong access graph can produce either false absence or unauthorized visibility.

## New Failure Classes

### Content-Permission Split
The file content migrates successfully but the intended permissions do not.

### Permission-without-Identity Equivalence
A permission entry migrates, but destination identity mapping changes its effective meaning.

### File Lineage Break
The migrated destination file can no longer be reliably traced to the originating OneDrive object and migration batch.

### Derivative/Source Ambiguity
The destination workspace contains both migrated copies and later edited derivatives without clear lineage.

### Migration Planner / Runtime Divergence
Planning estimates or batch assumptions differ materially from the actual migration outcome.

### Cross-Corpus Referential Break
A migrated Teams message refers to a OneDrive file, but after migration the message-to-file relationship is no longer recoverable or points to the wrong destination object.

## The Important Combined Benchmark

The strongest Deep Drift test should not assess Teams and OneDrive independently.

Real work crosses both systems.

```text
TEAMS CHANNEL
-> discussion
-> file link
-> document edit
-> reply
-> decision
-> new file version
-> final approval
```

After migration, test whether the destination workspace preserves enough of that chain to answer:

1. Which file version was being discussed?
2. Who proposed the change?
3. Who objected?
4. Which final decision superseded earlier discussion?
5. Who had access at the time?
6. Which destination artifact corresponds to the source file?
7. Can an AI system reconstruct the chain without fabricating missing links?

## New Deep Drift Benchmark: Cross-Vendor Workflow Reconstruction Test

Create a small Microsoft 365 corpus containing one Teams channel, one 1:1 conversation, one group chat, one OneDrive document, two document versions, one permission change, one message linking to the document, and one later message superseding an earlier decision.

Migrate using Google's supported advanced data import path.

Then ask a reviewer and an AI system to reconstruct:

```text
WHO
SAID WHAT
WHEN
IN WHICH CONVERSATION
ABOUT WHICH FILE VERSION
UNDER WHICH ACCESS STATE
AND WHAT DECISION WON
```

Measure message survival, conversation-type survival, chronology survival, author identity survival, file survival, permission survival, file-version traceability, message-to-file relationship survival, supersession accuracy, AI reconstruction accuracy, human repair minutes, and migration provenance completeness.

## New Metrics

### Cross-Platform Causal Chain Survival

```text
CCCS =
reconstructable causal links after migration
/
all required causal links in source workflow
```

### Communication Topology Survival Rate

```text
CTSR =
conversations preserving intended structural type
/
all migrated conversations
```

### Permission-State Survival Accuracy

```text
PSSA =
destination resources with intended effective access
/
all migrated permission-sensitive resources
```

### Cross-Corpus Reference Recovery

```text
CCRR =
migrated communication references correctly resolving
to intended migrated artifact
/
all controlled communication-to-file references
```

## Migration Is Not Export

```text
EXPORT
= preserve an artifact for later access

MIGRATION
= preserve enough operational state for work to continue
```

The second requirement is much harder.

A PDF transcript is evidence.

A migrated communication environment is active context.

A copied file is an artifact.

A permission-preserving migrated corpus is potential infrastructure for future agents.

## Relation to Existing Deep Drift Constructs

This migration layer connects directly to Research Artifact Migration Fidelity, Selective Workflow Copy Fidelity, Semantic Artifact Migration Fidelity, Context-Container Migration Fidelity, Context-Freshness Synchronization Fidelity, Typed Context Object Fidelity, and Agent State Reconstruction Fidelity.

## Relation to the ĀTØR Seven-Layer State Protocol Family

- **MMSF:** Imported history may later become persistent context and must be scoped correctly.
- **PSMC:** Migration creates large-scale persistent state mutations.
- **SSRP:** Source state, destination state, migration reports, and user-visible state must reconcile.
- **ASRF:** Migration batch, source identity, destination identity, object mapping, and later use must remain reconstructable.
- **PVP:** Migration tooling and transformation rules need version provenance.
- **ALRTSF:** Files and communication-linked artifacts need lineage across the vendor boundary.
- **SCRR:** The destination workspace should permit continuation without forcing humans to manually rebuild historical context.

## Broader Fresh Platform Scan

### Google
The most useful new-to-log signal in this pass is the now-generally-available advanced import path for Microsoft Teams and OneDrive. Standing creator-workflow signals remain Ask Gemini in Chat, Gemini interactive simulations/models, Sheets Canvas read-write mini-apps, Workspace Studio no-code agentic workflows, Notebook copying, artifact migration improvements, and Meet AI capture controls.

### OpenAI
No materially newer public release displaced the recent Work, Project memory, Skills, templates, selection-scoped artifact refinement, scheduled/webhook, and cross-surface workflow changes already logged.

### Anthropic
No first-party release newer than the 26 August browser updates surfaced in this pass. Standing signals remain Claude in Chrome autonomous browser actions, Cowork built-in browser, shared memory across chat and Cowork, Skills API, Files API, mounted memory, and richer session observability.

### Microsoft
The latest broad Microsoft 365 Copilot release batch remains 25 August 2026. Standing signals include Copilot Pages, Notebook multi-artifact generation, Excel Python editing, multimodal Capture, Work IQ context controls, inline artifact inspection, and chat-to-Page creation and mobile steering.

## Deep Drift Research Position

Creator-workflow continuity is becoming **cross-vendor infrastructure**.

The correct benchmark is no longer:

> Did the organization successfully copy its data?

It is:

> Did enough causal, structural, temporal, identity, and permission state survive that humans and AI can continue the work without silently rewriting its history?

Therefore:

```text
DATA COPIED
!=
WORKFLOW MIGRATED

MESSAGES IMPORTED
!=
DECISIONS RECONSTRUCTABLE

FILES MIGRATED
!=
PERMISSIONS PRESERVED

BOTH MIGRATED
!=
CROSS-REFERENCES PRESERVED
```

Migration is where old context becomes new model input.

That makes migration quality part of model reliability.

## Evidence Boundary

Platform facts in this report are grounded in first-party Google Workspace Updates and Google Workspace Admin documentation, with fresh checks of OpenAI, Anthropic, and Microsoft release sources. CCAMF, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. Google Workspace Updates, **Introducing data import for Microsoft Teams: An easier, faster, and higher-fidelity migration to Google Workspace**, 25 August 2026: https://workspaceupdates.googleblog.com/2026/08/
2. Google Workspace Updates, **Introducing data import for Microsoft OneDrive: An easier, faster, and higher-fidelity migration to Google Workspace**, 25 August 2026: https://workspaceupdates.googleblog.com/2026/08/introducing-data-import-for-microsoft-OneDrive-An-easier-faster-and-higher-fidelity-migration-to-Google-Workspace.html
3. Google Workspace Admin Help, **Set up a chat migration**: https://support.google.com/a/answer/15009958
4. Google Workspace Admin Help, **Import message data to Google Chat from another service**: https://support.google.com/a/answer/13465849
5. Microsoft 365 Copilot release notes, current through 25 August 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
6. Anthropic product announcements, current through 26 August 2026: https://claude.com/blog-category/announcements
7. OpenAI ChatGPT Work and Skills documentation, current as of 27 August 2026.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
