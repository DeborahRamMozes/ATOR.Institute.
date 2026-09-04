# Deep Drift Research Update - CPWMF

## Cross-Platform Workspace Migration Fidelity

**Research date:** 5 September 2026  
**Primary unlogged delta:** Google Workspace has made large-scale Microsoft Teams chat migration and Microsoft OneDrive file migration generally available in Data Import advanced mode. Teams migration includes channels plus private 1:1 and group messages. OneDrive migration carries files together with permissions. Google also provides migration-planning utilities for corpus discovery, timeline estimates, and batch planning.

## Executive finding

AI context is increasingly portable because the underlying workspace itself is becoming portable.

```text
MICROSOFT 365
   |
   +--> TEAMS
   |      channels
   |      group chats
   |      direct messages
   |
   +--> ONEDRIVE
          files
          permissions
          hierarchy / metadata
             |
             v
GOOGLE WORKSPACE DATA IMPORT
             |
             v
GOOGLE CHAT / DRIVE
             |
             v
GEMINI / WORKSPACE INTELLIGENCE
```

Therefore:

```text
CONTENT MIGRATED
!= CONTEXT MIGRATED PERFECTLY

MESSAGE PRESERVED
!= ORIGINAL CONVERSATION SURFACE PRESERVED

FILE PRESERVED
!= ACCESS SEMANTICS PRESERVED PERFECTLY

PERMISSION MAPPED
!= ORIGINAL IDENTITY MODEL PRESERVED

SEARCHABLE AFTER MIGRATION
!= SAME RETRIEVAL BEHAVIOR

AI CAN USE IMPORTED CORPUS
!= AI HAS ORIGINAL PLATFORM PROVENANCE
```

The new provenance object is the **workspace migration translation layer**.

## New node

### Cross-Platform Workspace Migration Fidelity (CPWMF)

Minimum state model:

```text
source_platform
source_tenant
source_object_type
source_object_id
source_parent_scope
source_thread_or_channel
source_sender_identity
source_timestamp
source_file_path
source_permission_model
source_member_mapping
migration_batch_id
migration_plan_time
migration_start_time
migration_end_time
target_platform
target_object_id
target_parent_scope
target_identity_mapping
target_permission_state
target_timestamp_state
migration_warning
migration_error
post_migration_searchability
post_migration_ai_retrievability
post_migration_exportability
```

## 1. Workspace migration is different from memory migration

Claude memory portability moves a distilled representation of learned context.

Google's new migration path moves primary collaboration objects:

```text
CHAT MESSAGE
FILE
PERMISSION
CHANNEL / CONVERSATION STRUCTURE
```

This is a different provenance class.

```text
MEMORY MIGRATION
= semantic context transfer

WORKSPACE MIGRATION
= evidence-object transfer
```

Deep Drift should benchmark these independently.

## 2. Microsoft Teams chat history can now cross platform boundaries

Google states that Data Import can copy:

- Teams channel messages;
- group chats;
- direct 1:1 conversations.

That matters because past-chat evidence is no longer necessarily anchored to the platform where it was created.

A future Gemini answer may rely on a conversation originally authored in Microsoft Teams but now stored inside Google Workspace.

Therefore:

```text
TARGET STORAGE PLATFORM
!= ORIGINAL AUTHORING PLATFORM
```

Source-platform lineage must survive migration.

## 3. Conversation identity is more than message text

A Teams message originally lived inside a particular:

```text
tenant
team
channel
chat
membership set
timestamp
reply structure
identity system
```

If only text survives, the migration is not contextually complete.

Deep Drift should measure:

```text
text fidelity
thread fidelity
participant fidelity
timestamp fidelity
scope fidelity
```

separately.

## 4. OneDrive files migrate with permissions

Google explicitly describes migration of OneDrive files together with their permissions.

This is crucial because file provenance is not merely:

```text
document bytes
```

It is also:

```text
who could see it
who could edit it
which group granted access
whether access was inherited
```

The migration therefore transforms both artifact and governance state.

## 5. Permission preservation is a semantic mapping problem

Microsoft and Google do not have identical identity, group, sharing, and permission models.

Even when Google successfully migrates permissions, Deep Drift should not assume:

```text
SOURCE ACL
= TARGET ACL
```

The proper model is:

```text
SOURCE PERMISSION SEMANTICS
-> MAPPING
-> TARGET PERMISSION SEMANTICS
```

This makes permission mapping a first-class provenance object.

## 6. Identity mapping affects authorship lineage

A message may originate from a Microsoft Entra identity and later appear under a Google Workspace identity mapping.

A file may have:

```text
source owner
source editor
source viewer
```

that are mapped into target accounts or groups.

Therefore:

```text
TARGET USER
!= ORIGINAL IDENTITY OBJECT
```

Deep Drift should preserve source identity and target identity separately where auditability matters.

## 7. Migration planning becomes pre-migration evidence

Google's migration planning utility provides source-corpus details, timeline estimates, and optimized batching.

That means migration provenance begins before the first object is copied.

The plan can reveal:

```text
expected corpus size
expected users
batch strategy
estimated duration
source constraints
```

Later discrepancies can be tested against the plan.

## 8. Batch migration creates partial-world states

Large migrations can occur through concurrent or optimized batches.

During migration:

```text
BATCH A = migrated
BATCH B = pending
BATCH C = failed
```

A user or AI querying the target workspace during that period may see an incomplete corpus.

Therefore:

```text
TARGET SEARCH RESULT DURING MIGRATION
!= FINAL TARGET CORPUS
```

This is analogous to Progressive Conversation Materialization Fidelity, but at workspace scale.

## 9. Migration completeness must be time-indexed

Deep Drift should preserve:

```text
T0 = pre-migration source
T1 = partial migration
T2 = nominal completion
T3 = post-migration remediation
```

A search benchmark at T1 and another at T3 are not comparable.

## 10. Imported data becomes AI-retrieval substrate

Google's broader Workspace Intelligence architecture allows Gemini experiences to work across Gmail, Chat, Calendar, and Drive when enabled.

Once Teams and OneDrive objects exist inside Workspace, they can become part of the corpus that Gemini may retrieve from, subject to product, permission, and workspace controls.

This produces a new lineage chain:

```text
MICROSOFT SOURCE
-> GOOGLE MIGRATION
-> GOOGLE STORAGE
-> GEMINI RETRIEVAL
-> GENERATED OUTPUT
```

The AI's visible citation or source may identify the Google-side object while the deeper origin is Microsoft.

## 11. Retrieval provenance must distinguish origin from current location

For migrated content, archive at least:

```text
origin_platform
current_platform
migration_event
target_object
AI_retrieval_event
```

Otherwise the research record may incorrectly imply that a Google Chat message was originally authored in Google Chat.

## 12. Search parity is not guaranteed by migration success

A migrated message can exist successfully yet behave differently in:

```text
search ranking
thread discovery
semantic retrieval
AI grounding
permission-filtered search
```

Thus:

```text
OBJECT EXISTS
!= OBJECT IS EQUALLY RETRIEVABLE
```

Deep Drift should test post-migration retrieval, not merely object counts.

## 13. Conversation chronology can drift

When chat systems migrate, timestamps may survive while presentation order, reply grouping, channel organization, or thread affordances change.

A correct timestamp is not sufficient evidence of preserved conversational structure.

Benchmark:

```text
temporal fidelity
reply-chain fidelity
channel fidelity
participant fidelity
```

## 14. File path and hierarchy are separate from file content

A Word, PDF, spreadsheet, or presentation can migrate perfectly at the byte level while its surrounding folder or permission inheritance changes.

For creator workflows:

```text
FILE CONTENT FIDELITY
!= WORKSPACE PLACEMENT FIDELITY
```

This matters because AI retrieval often depends on location, sharing scope, labels, and surrounding corpus.

## 15. Static DOCX/PDF exports hide migration history

A document migrated from OneDrive to Drive and later exported as PDF may look identical.

The PDF does not disclose:

```text
original platform
original file ID
migration batch
permission mapping
target file ID
post-migration edits
```

Therefore a visually identical file can have a radically different provenance chain.

## 16. Copy-paste creates an even harder origin problem

After migration, users can copy migrated content into new Google documents.

The derivative may then lose even the target migration metadata.

```text
TEAMS MESSAGE
-> GOOGLE CHAT MIGRATION
-> COPY
-> GOOGLE DOC
-> PDF
```

By the final PDF, the Microsoft origin can be practically invisible.

Deep Drift should treat cross-platform copy as an origin-loss boundary.

## 17. Data export classifications can differ from visible app location

Google has separately documented that Ask Gemini in Chat data is stored under "Gemini in Workspace" for Data Export / Takeout rather than under Google Chat.

That is a useful warning for migration research:

```text
VISIBLE SURFACE NAME
!= EXPORT DATA DOMAIN
```

A researcher looking only under "Google Chat" may fail to find AI-session data that visually occurred in Chat.

## 18. Cross-platform migration complicates "chat history portability"

There are now at least three portability classes:

```text
A. ACCOUNT DATA EXPORT
B. AI MEMORY EXPORT / IMPORT
C. WORKSPACE OBJECT MIGRATION
```

They preserve different things.

### Account export
Primarily user/account archive.

### Memory migration
Distilled reusable context.

### Workspace migration
Operational source objects and permissions.

These must never be treated as interchangeable backups.

## 19. Permission-aware AI retrieval can change after migration

Suppose a file was visible to five users in OneDrive and maps to four valid accounts in Workspace.

The content may migrate, but one user may lose retrieval access.

For AI systems that respect underlying file permissions:

```text
MIGRATION PERMISSION CHANGE
-> AI RETRIEVAL CHANGE
```

That can look like model memory failure even though the cause is access translation.

## 20. Creator workflow continuity is now infrastructural

The broader trend is significant:

```text
PROMPT PORTABILITY
-> MEMORY PORTABILITY
-> SKILL PORTABILITY
-> APP PORTABILITY
-> WORKSPACE CORPUS PORTABILITY
```

Creator continuity is migrating downward from the prompt layer into infrastructure.

The model can increasingly follow the creator because the creator's files, chats, instructions, tools, and procedures can move too.

That also means more provenance layers can drift independently.

## Fresh category scan

| Area | Status | Deep Drift implication |
|---|---|---|
| Memory | No newer major delta in this pass | Existing memory portability/lifecycle nodes remain current |
| Skills | No newer delta beyond Anthropic's 5 Sep shared-Skill update | Skill version propagation remains the latest strong procedural change |
| Mini-app builders | No newer major delta | Apps SDK/MCP deployment and MCP Apps remain the strongest recent changes |
| Chat history portability | **Important unlogged delta** | Teams channels, group chats, and direct messages can migrate into Google Workspace |
| DOCX/PDF / files | **Important unlogged delta** | OneDrive files migrate with permissions; file lineage now crosses platform governance models |
| Copy-paste/export | Provenance consequence | Derivatives created after migration can erase both source-platform and migration lineage |
| Creator workflow | **Major structural trend** | AI context continuity increasingly depends on portable workspace infrastructure, not only model memory |

## New failure classes

### Target-Platform-Origin Fallacy
Assuming an object currently stored in Google Workspace was originally authored there.

### Migration-Success-Equals-Fidelity Fallacy
Treating successful import as proof that conversation structure, identities, permissions, and retrieval behavior survived.

### Permission-Mapping-Equals-Permission-Identity Fallacy
Assuming target access semantics are identical to source ACL semantics.

### Object-Exists-Equals-Retrievable Error
Assuming a migrated object is equally discoverable by search or AI simply because it exists.

### Partial-Migration-as-Complete-Corpus Error
Running retrieval benchmarks while migration batches are incomplete and treating omissions as model failure.

### Visible-Surface-Equals-Export-Domain Error
Assuming data visually created in Google Chat is necessarily exported under Google Chat rather than another data domain such as Gemini in Workspace.

## Deep Drift benchmark additions

**Cross-Platform Object Fidelity (CPOF)**  
Does the target object preserve source content, metadata, timestamps, identity, and parent scope?

**Conversation Structure Migration Fidelity (CSMF)**  
Do channels, group chats, direct conversations, and reply relationships remain reconstructable after migration?

**Permission Semantic Fidelity (PSF)**  
Does target access preserve the effective intent of source permissions?

**Post-Migration Retrieval Fidelity (PMRF)**  
Can migrated content be discovered and retrieved comparably through target search and AI grounding?

**Migration Phase Completeness Fidelity (MPCF)**  
Can an experiment identify whether it ran before, during, after, or after remediation of a migration?

**Origin-Lineage Preservation Fidelity (OLPF)**  
Can a downstream AI-generated artifact still be traced through target storage back to the original platform object?

## DRPA-1.0 protocol additions

### CROSS-PLATFORM ORIGIN PRESERVATION RULE

> Preserve original platform, original object identity, target platform, target object identity, and the migration event separately. The current storage platform must never be used as a substitute for original authorship provenance.

### MIGRATION-PHASE STATE RULE

> Record whether retrieval or artifact generation occurred before migration, during a partial batch state, after nominal completion, or after remediation. Missing target objects during an incomplete migration must not be classified as model retrieval failure.

### PERMISSION-SEMANTIC MAPPING RULE

> Preserve source permissions, identity/group mappings, target permissions, and known translation differences separately. Successful access migration must not be represented as proof that source and target authorization semantics are identical.

### POST-MIGRATION RETRIEVAL RULE

> Validate migrated data at both storage and retrieval layers. Object-count completeness is insufficient when the target AI system depends on permission-aware search, ranking, semantic retrieval, or Workspace Intelligence.

### DERIVATIVE ORIGIN LOSS RULE

> When migrated content is copied, summarized, exported, or converted into a new artifact, preserve the migration lineage if provenance matters. A derivative created on the target platform must not erase the source-platform origin.

## Eir'an state-flow addition

```text
SOURCE:
Microsoft tenant
Teams / OneDrive
message / file
identity
permissions

PLAN:
corpus discovery
batch plan
timeline estimate

MIGRATE:
batch ID
mapping
errors
warnings

TARGET:
Google Chat / Drive
target object
target identity
target permissions

RETRIEVE:
search
Gemini
Workspace Intelligence

DERIVE:
Doc
PDF
summary
copy
new artifact

ARCHIVE:
source ID
target ID
migration event
retrieval event
derivative lineage
```

## Canonical Deep Drift requirement

> Treat workspace migration as a provenance translation layer between original collaboration evidence and later AI retrieval. Preserve source object, target object, identity mapping, permission mapping, migration phase, retrieval behavior, and downstream derivatives separately.

## Deep Drift principle

> **Moving the archive does not move its meaning automatically.**

Operationally:

> **Test the object after migration, then test whether the new AI can still find it for the right user in the right context.**

## Broader current scan

OpenAI's public ChatGPT release notes remain topped by the 3 September GPT-6 Astra release, plus recent Apps SDK, OneNote/Zendesk, Sites, and long-horizon artifact changes already represented in the Deep Drift log.

Anthropic's current memory and Skills documentation remains fresh through 3-5 September, but the important memory portability and live shared-Skill propagation changes are already represented in CMPF and SSVPF.

Google's 5 September Scheduled Release rollout for turning Docs, PDFs, and Word files into Vids summaries continues today, but it is a rollout phase of the 2 September announcement already noted in earlier scans.

No new direct copy-formatting or DOCX/PDF-export bug fix stronger than the already logged changes surfaced in this pass.

## Sources

1. Google Workspace Updates. **Introducing data import for Microsoft Teams: An easier, faster, and higher-fidelity migration to Google Workspace.** Published 25 August 2026. Documents GA migration of Teams channels, group chats, and 1:1 messages, plus planning utilities and large-scale batching.  
   https://workspaceupdates.googleblog.com/2026/08/

2. Google Workspace Updates. **Introducing data import for Microsoft OneDrive: An easier, faster, and higher-fidelity migration to Google Workspace.** Published 25 August 2026. Documents GA migration of OneDrive files with permissions and a migration-planning utility.  
   https://workspaceupdates.googleblog.com/2026/08/introducing-data-import-for-microsoft-OneDrive-An-easier-faster-and-higher-fidelity-migration-to-Google-Workspace.html

3. Google Workspace Updates. **Introducing Ask Gemini in Chat: your new partner in productivity.** Published 19 August 2026. Documents cross-Workspace AI retrieval and notes that Data Export / Google Takeout stores this experience under "Gemini in Workspace" rather than "Google Chat."  
   https://workspaceupdates.googleblog.com/2026/08/

4. Google Workspace Updates. **Introducing Workspace Intelligence, with admin controls.** Published April 2026. Describes Gemini grounding across Workspace sources including Gmail, Chat, Calendar, and Drive, subject to admin controls.  
   https://workspaceupdates.googleblog.com/2026/04/

## Research status

**Node status:** New to the Deep Drift log, though the underlying Google migration releases were published 25 August 2026 and surfaced again in the current September Workspace recap.  
**Duplicate check:** Repository search found no existing Deep Drift node for Microsoft Teams chat + OneDrive file/permission migration into Google Workspace as a combined provenance and AI-retrieval problem.  
**Relationship to prior nodes:** Extends CMPF (cross-provider memory portability), PCMF (materialization completeness), WADGF (workspace governance), AERF (execution routes), and artifact-origin rules. CPWMF is distinct because it treats primary workspace evidence and permissions as portable infrastructure that later AI systems can retrieve.  
**Freshness classification:** Unlogged recent structural update, not a same-hour product launch.
