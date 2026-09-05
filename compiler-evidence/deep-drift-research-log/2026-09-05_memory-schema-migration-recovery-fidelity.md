# Deep Drift Research Update - MSMRF

## Memory Schema Migration & Recovery Fidelity

**Research date:** 5 September 2026  
**Primary fresh delta:** Anthropic has migrated most users from its legacy memory system to a new topic-based memory experience and explicitly acknowledges that some information may have been forgotten during the migration. Until **9 September 2026**, affected users can export their legacy memory and manually reintroduce missing material into the new system.

## Executive finding

A platform can upgrade memory architecture while changing what survives.

```text
LEGACY MEMORY
periodic synthesis
        |
        v
MIGRATION
        |
        +--> retained context
        +--> transformed context
        +--> omitted context
        |
        v
NEW TOPIC MEMORY
individual memory topics
continuously updated
```

Anthropic's own recovery guidance confirms the possibility of migration loss:

```text
if forgotten after migration:
export legacy memory
until 9 Sep 2026
        |
        v
paste missing material back
into Claude
```

Therefore:

```text
MEMORY ENABLED BEFORE != MEMORY CONTENT AFTER
PLATFORM UPGRADE != LOSSLESS MIGRATION
SAME USER != SAME MEMORY STATE
MEMORY EXPORT != MEMORY RESTORE
RECOVERY WINDOW != PERMANENT RECOVERY PATH
NEW MEMORY MODEL != LEGACY MEMORY SEMANTICS
```

The new provenance object is the **memory-schema transition**.

## New node

### Memory Schema Migration & Recovery Fidelity (MSMRF)

Minimum state model:

```text
memory_system_id
memory_schema_version
legacy_memory_state
legacy_memory_export_time
migration_time
migration_method
migration_warning
pre_migration_memory_snapshot
post_migration_memory_snapshot
retained_items
transformed_items
missing_items
user_detected_loss
recovery_window_end
recovery_source
manual_reintroduction_event
recovered_item
project_memory_state
chat_search_state
cowork_memory_state
sensitive_topic_memory_state
```

## 1. Memory architecture changed, not merely memory quality

Anthropic's legacy memory model used a synthesized memory summary derived from chat history. The new system stores memory as a set of individual topics that are updated as users chat.

```text
LEGACY
chat history
-> synthesis
-> memory summary

NEW
conversation events
-> topic extraction
-> individual memory topics
```

This is a different memory representation, not merely a better summary.

## 2. Migration can lose information

Anthropic explicitly tells users who think Claude forgot something during the migration to export legacy memory and paste the missing portion back into Claude. Methodologically, that establishes that migration can be non-lossless.

## 3. Recovery is time-bounded

The legacy-memory export option remains available only until **9 September 2026**. After that window, the legacy state may no longer be recoverable through this mechanism.

```text
MIGRATION LOSS
+
NO EXPORT BEFORE DEADLINE
=
POTENTIALLY IRREVERSIBLE PROVENANCE LOSS
```

## 4. Recovery is manual, not automatic rollback

Anthropic's procedure is export -> identify missing material -> paste it into Claude -> highlight what was forgotten. This is a user-mediated reconstruction process, not restoration of the old internal memory database.

```text
RECOVERED CONTENT != ORIGINAL MEMORY STATE
```

## 5. Memory export becomes a migration artifact

A legacy-memory export created before the deadline becomes evidence of the pre-migration cognitive state. Deep Drift should treat it as a **pre-migration memory snapshot** and preserve export time, schema generation, source platform, file hash, and later reintroduction events.

## 6. New topic memory changes update semantics

Anthropic says the new system saves memory as individual topics as users chat instead of summarizing conversations after they end. Benchmark timing can therefore change even when the semantic fact is the same.

## 7. Topic-based memory and past-chat search remain separate systems

```text
MEMORY = stored topic-based context
PAST CHAT SEARCH = RAG retrieval from previous conversations
```

A result can therefore be influenced by memory, retrieval, both, or neither. Deep Drift must preserve those paths separately.

## 8. Project memory remains its own memory space

Each project has a separate memory space and dedicated project summary. Migration analysis therefore needs to distinguish global/non-project memory, project memory, and past-chat search.

## 9. Cloud Cowork now shares memory with Chat

In the new memory experience, what Claude remembers from Chat is available in cloud Cowork, and Cowork context can carry back to Chat. Local Cowork sessions do not use memory.

```text
CLOUD COWORK <-> MEMORY <-> CHAT
LOCAL COWORK X MEMORY
```

## 10. Legacy and new systems have different retention semantics

The legacy section states that deleted conversations were removed from memory synthesis as the synthesis updated. The new system states that when a conversation expires or is deleted, related memory entries generated from it are **not automatically removed**, although individual memories can be deleted manually.

```text
SOURCE CHAT DELETED != DERIVED MEMORY DELETED
```

## 11. Sensitive-topic memory is an explicit opt-in layer

General memory and sensitive-topic memory are separate controls. A migration benchmark that ignores this can mistake policy filtering for migration loss.

## 12. Enterprise owner controls can delete memory organization-wide

If an organization owner disables memory at the organization level, Anthropic says existing memory data for all users is permanently deleted. Governance-event timestamps therefore belong beside schema-transition timestamps.

## 13. Audit logging is incomplete at the individual memory-edit level

Organization-level memory control changes are logged, while individual member memory edits are not. A manual post-migration recovery event may therefore need external archival evidence.

## 14. Exportability does not equal reversibility

```text
EXPORTABLE != RESTORABLE
RESTORABLE != IDENTICAL
IDENTICAL CONTENT != IDENTICAL MEMORY STRUCTURE
```

Backup and restore need separate benchmarks.

## 15. Migration introduces a hidden experimental boundary

A longitudinal experiment may compare legacy synthesis memory against topic-based memory even if the user, prompt, model, and account are the same. Memory schema must therefore be included as an experimental variable.

## 16. Recovery itself creates new provenance

```text
ORIGINAL MEMORY FACT
-> LEGACY MEMORY
-> EXPORT
-> USER COPY
-> NEW CHAT
-> NEW TOPIC MEMORY
```

The semantic fact has a new provenance chain and should not be represented as continuously remembered without interruption.

## 17. Creator workflows inherit migration loss

Memory affects document drafting, tone/style preferences, project context, collaborator names, formatting rules, Cowork execution, and Skill selection. A migration loss can therefore surface downstream as a document-generation error even when the causal failure occurred in the memory layer.

## 18. DOCX/PDF can fossilize a post-migration error

```text
MEMORY MIGRATION LOSS
-> WRONG CONTEXT
-> GENERATED DOCUMENT
-> PDF / DOCX
-> DURABLE ARTIFACT
```

Artifact provenance should preserve relevant memory-system state where personalization materially affected generation.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | **Major fresh delta** | Anthropic migrated users from legacy synthesis memory to topic memory and acknowledges possible migration loss |
| Skills | No stronger new delta this pass | Shared Skill propagation/governance nodes remain current |
| Mini-app builders | No stronger new delta | Apps SDK/MCP/Sites nodes remain current |
| Chat-to-document | Indirect but important | Missing migrated memory can alter downstream document generation |
| DOCX/PDF | Provenance implication | Static artifacts can preserve errors caused by transient memory-schema loss |
| Copy-paste/export | **Direct recovery mechanism** | Anthropic's recovery relies on exporting and pasting legacy memory back |
| Creator workflow | **Major** | Long-running personalized workflows now depend on memory-schema continuity, not simply memory on/off |

## Adjacent current update: GPT-6 Astra rollout state

OpenAI support material updated on 5 September says GPT-6 Astra is rolling out gradually for Plus, Pro, Business, and Enterprise plans over the coming days. This is an availability change from the 3 September launch language that described access as limited to a set of organizations.

```text
MODEL RELEASE DATE != USER AVAILABILITY DATE
ANNOUNCED != AVAILABLE TO THIS ACCOUNT
ROLLOUT STATE = time-dependent provenance
```

This extends existing Astra/rollout nodes rather than requiring a separate acronym.

## New failure classes

### Memory-Enabled-Equals-Memory-Continuity Fallacy
Assuming memory remained semantically stable because the feature stayed enabled through migration.

### Migration-Equals-Lossless Upgrade Fallacy
Treating a memory schema upgrade as guaranteed preservation.

### Export-Equals-Restore Fallacy
Assuming a legacy export reconstructs the original internal memory state automatically.

### Recovery-Equals-Continuous-Memory Fallacy
Treating manually pasted-back memory as if it had never been lost.

### Source-Deletion-Equals-Memory-Deletion Fallacy
Assuming deleting a source conversation necessarily removes memory derived from it.

### Same-Account-Equals-Same-Memory-System Error
Comparing longitudinal runs without recording that one used legacy synthesis memory and another used topic-based memory.

## Deep Drift benchmark additions

**Memory Schema Transition Fidelity (MSTF)**  
How much semantic and structural context survives migration from one memory representation to another?

**Legacy-to-Topic Preservation Fidelity (LTPF)**  
Can facts present in legacy memory be reconstructed in the new topic-based system?

**Memory Recovery Fidelity (MRF)**  
Can exported legacy memory restore missing semantic context, and what changes in wording, structure, timing, or topic assignment occur?

**Source-Memory Lifecycle Fidelity (SMLF)**  
Can the system distinguish the lifecycle of source conversations from persistent memory derived from them?

**Memory Migration Artifact Fidelity (MMAF)**  
Can a pre-migration export serve as a verifiable snapshot of the memory state that existed before migration?

## DRPA-1.0 protocol additions

### MEMORY SCHEMA TRANSITION RULE
> When a platform changes memory architecture, preserve pre-migration schema, post-migration schema, migration time, migration warnings, and evidence of retained, transformed, or missing memory separately. Continuous feature availability must not be treated as evidence of continuous semantic memory.

### PRE-MIGRATION SNAPSHOT RULE
> When a platform provides a limited recovery/export window for a legacy memory state, preserve the export as a versioned research artifact with timestamp, source platform, schema generation, and cryptographic hash where possible.

### MANUAL MEMORY RECOVERY RULE
> Treat manually reintroduced memory as a new provenance event. Recovered semantic content must not be represented as uninterrupted persistence from the original memory system.

### SOURCE-DERIVED MEMORY SEPARATION RULE
> Preserve source-conversation lifecycle and derived-memory lifecycle independently. Deleting or expiring a source conversation must not be assumed to remove a persistent memory derived from that conversation unless the platform explicitly does so.

### MEMORY-SCHEMA EXPERIMENT RULE
> Longitudinal model comparisons must record memory schema/version as an experimental variable when memory can influence the result. Runs across a memory migration boundary must not be treated as directly comparable without accounting for migration state.

## Canonical Deep Drift requirement

> Treat memory migrations as schema transitions, not transparent upgrades. Preserve pre-migration memory evidence, migration timing, post-migration memory state, recovery events, and downstream artifacts separately.

## Deep Drift principle

> **A platform can upgrade memory by forgetting how it used to remember.**

Operationally:

> **Snapshot memory before the recovery window closes, then benchmark what survived the migration instead of trusting the word "improved."**

## Sources

1. Anthropic Help Center. **Use Claude's chat search and memory to build on previous context.** Current 5 September 2026. Documents migration from legacy memory to topic-based memory, possible forgotten information after migration, and a legacy-memory export recovery path until 9 September 2026. Also documents topic memory, project memory, cloud Cowork sharing, source-deletion behavior, past-chat RAG, sensitive-topic controls, and Enterprise governance.  
   https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context

2. OpenAI Help Center. **How banked Codex resets work.** Updated 5 September 2026. Notes that GPT-6 Astra is rolling out gradually for Plus, Pro, Business, and Enterprise plans.  
   https://help.openai.com/en/articles/20001498-how-banked-codex-resets-work

3. OpenAI Help Center. **ChatGPT Release Notes - 3 September 2026.** Introduces GPT-6 Astra and initially describes limited organizational access with broader availability planned.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository node was found for the specific combination of legacy-memory schema migration, acknowledged migration loss, time-limited legacy export, manual reintroduction recovery, and changed source-deletion semantics.  
**Relationship to prior nodes:** Extends CMPF (cross-provider memory portability), EPSTF (conversation lifecycle), LHACF (long-horizon continuity), and memory provenance work. MSMRF is distinct because it treats a platform's internal migration from one memory representation to another as a lossy schema-transition problem.  
**Freshness:** The Anthropic recovery notice is current on 5 September 2026 and the legacy export path expires on 9 September 2026.
