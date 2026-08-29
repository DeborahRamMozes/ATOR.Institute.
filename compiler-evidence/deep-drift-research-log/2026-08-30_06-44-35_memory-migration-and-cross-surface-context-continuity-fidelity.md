# Deep Drift Research Update

## Memory-Migration and Cross-Surface Context Continuity Fidelity

**Research date:** 30 August 2026  
**Primary fresh change:** Anthropic memory migration completed; legacy-memory export remains available until 9 September 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log migration and creator-workflow architecture verified from current Anthropic Help Center documentation.

## Executive Summary

Anthropic's current memory documentation now states that users have been migrated off the legacy memory experience. If information appears to have been lost during migration, users can export legacy memory from Settings > Memory only until **9 September 2026**, then paste relevant material back into Claude.

The same current documentation clarifies that Claude's memory is now composed of individual topic entries that update during conversation, that each project maintains its own separate memory and project summary, and that cloud-based Claude Cowork shares memory bidirectionally with Chat: what Claude remembers from chats is available to Cowork, and information arising in a cloud Cowork task can carry back into chat.

Anthropic also supports experimental memory import from other AI services and export of Claude memory for backup or migration.

This produces a creator-workflow architecture that is materially different from a simple chat-history feature:

```text
PAST CHAT
-> TOPIC MEMORY
        |
        +-> FUTURE CHAT
        |
        +-> CLOUD COWORK TASK
                 |
                 -> NEW WORK CONTEXT
                 -> MEMORY
                 -> FUTURE CHAT

OTHER AI MEMORY
-> IMPORT
-> CLAUDE MEMORY

LEGACY CLAUDE MEMORY
-> TEMPORARY EXPORT WINDOW
-> MANUAL RECONCILIATION
-> CURRENT MEMORY
```

For Deep Drift Research, this creates a new benchmark family:

**Memory-Migration and Cross-Surface Context Continuity Fidelity (MMCSCCF)**

with companion constructs:

**Legacy-to-Current Memory Migration Fidelity (LCMMF)**  
**Memory Export Completeness Fidelity (MECF)**  
**Imported-Memory Transformation Fidelity (IMTF)**  
**Chat-to-Cowork Memory Continuity Fidelity (CCMCF)**  
**Project Memory Isolation Fidelity (PMIF)**  
**Memory-Origin Attribution Fidelity (MOAF)**  
**Deletion-to-Memory Convergence Fidelity (DMCF)**

The central research question is:

> When persistent context is migrated, imported from another provider, separated into project-specific memory, and shared across chat and agentic work surfaces, can each remembered fact still be traced to its origin, transformation, project boundary, migration state, and deletion history?

## 1. What Changed

Anthropic's current Help Center documentation states that the improved memory experience has been introduced and users have been migrated off the legacy memory experience.

The documentation provides a temporary recovery mechanism:

- users who think something was forgotten during migration can open Settings > Memory;
- until **9 September 2026**, they can export legacy memory;
- the exported material can be pasted back into Claude, highlighting content that may have been lost.

The same documentation says the current memory system:

- stores memory as individual topic entries rather than one daily summary;
- updates those topics as users chat;
- supports direct "remember this" instructions;
- keeps each project in a separate memory space with a dedicated project summary;
- shares memory between ordinary Chat and **cloud-based Cowork**;
- does not share memory with Cowork sessions that run locally;
- allows users to view, edit, and delete individual memory topics;
- supports import of memory from other AI services and export for backup or migration.

## 2. Why This Matters for Deep Drift

The architecture introduces at least four distinct transformations:

```text
CONVERSATION
-> MEMORY EXTRACTION

LEGACY MEMORY
-> CURRENT MEMORY MIGRATION

FOREIGN AI MEMORY
-> CLAUDE MEMORY IMPORT

CHAT MEMORY
<-> CLOUD COWORK MEMORY
```

Each transformation can alter context.

Therefore:

```text
MEMORY PRESENT
!=
MEMORY UNCHANGED

MEMORY IMPORTED
!=
MEMORY COPIED VERBATIM

MEMORY MIGRATED
!=
MEMORY COMPLETE

SAME ACCOUNT
!=
SAME PROJECT MEMORY

COWORK KNOWS
!=
LOCAL COWORK KNOWS
```

Persistent context is now an evolving data structure, not a passive transcript.

## 3. New Deep Drift Construct: Memory-Migration and Cross-Surface Context Continuity Fidelity

**Definition.** Memory-Migration and Cross-Surface Context Continuity Fidelity (MMCSCCF) measures whether persistent context remains complete, correctly scoped, attributable, and reconstructable as it moves through migrations, imports, project boundaries, chat, and cloud agentic work surfaces.

A minimum memory-lineage record should preserve:

```text
memory_entry_id
memory_topic
memory_created_at
source_chat_ids
source_turn_ids
source_platform
import_event_id
migration_event_id
project_id
cowork_session_ids
edit_events
delete_events
memory_version
```

## 4. Benchmark Families

### Legacy-to-Current Memory Migration Fidelity (LCMMF)
Measures whether information represented in the legacy memory system remains semantically intact after migration to the current topic-based architecture. Compare the legacy export against current memory topics and classify entries as preserved, merged, split, reformulated, missing, or contradicted.

### Memory Export Completeness Fidelity (MECF)
Measures whether an exported memory representation contains all material persistent context needed to reconstruct the active memory state. Complete prose without project boundaries, origin events, or memory edits is not complete provenance.

### Imported-Memory Transformation Fidelity (IMTF)
Measures whether imported context preserves meaning, qualifiers, scope, and user instructions when foreign memory text is converted into Claude memory topics. Anthropic explicitly describes memory import as experimental and notes it may not always successfully incorporate imported memories.

### Chat-to-Cowork Memory Continuity Fidelity (CCMCF)
Measures whether context transferred between Chat and cloud Cowork remains accurate, attributable, and correctly scoped. Test Chat -> Cowork, Cowork -> Chat, and Chat -> Cowork -> Chat round trips. Cloud and local Cowork must be treated separately because local Cowork does not share memory in the same way.

### Project Memory Isolation Fidelity (PMIF)
Measures whether context from one project remains isolated from unrelated projects and non-project chats unless the platform explicitly permits transfer.

### Memory-Origin Attribution Fidelity (MOAF)
Measures whether remembered context remains traceable to the source chat, imported source, Cowork task, migration, or direct user memory instruction that created or changed it.

### Deletion-to-Memory Convergence Fidelity (DMCF)
Measures whether deleting a source conversation, deleting a memory entry, resetting memory, pausing memory, or disabling organization-level memory causes the expected downstream context state.

## 5. New Failure Classes

1. **Migration Omission** - a legacy memory item fails to appear in the current system.
2. **Migration Semantic Compression** - distinct legacy entries are merged and lose qualifiers.
3. **Migration Contradiction** - a current topic conflicts with the legacy export.
4. **Export Structure Loss** - export preserves prose but loses origin, project, or version boundaries.
5. **Import Reinterpretation Drift** - imported memory changes strength, scope, or meaning.
6. **Chat-to-Cowork Context Mutation** - a fact changes meaning during cross-surface propagation.
7. **Cloud / Local Cowork Memory Divergence** - users assume both Cowork modes have identical persistent context.
8. **Cross-Project Memory Leakage** - one project's context appears in another without explicit transfer.
9. **Origin Collapse** - the platform cannot distinguish chat, import, migration, direct instruction, or Cowork origin.
10. **Stale Memory after Correction** - one surface continues using an old fact after correction elsewhere.
11. **Deletion Convergence Lag** - deleted memory remains influential longer than expected.
12. **Recovery-Window Expiry Loss** - migration loss is discovered only after the legacy export window closes.

## 6. Deep Drift Benchmark: Memory Migration and Cross-Surface Round Trip

Create a controlled corpus containing a stable factual preference, a project-specific deadline, a procedural instruction, a corrected fact, a deprecated instruction, and one block imported from another AI. Export current memory; compare any available legacy export against current topics; import the controlled foreign-memory block; inspect extracted memory entries; test retrieval in Chat; run a cloud Cowork task; introduce a correction inside Cowork; return to Chat and test propagation; create two projects with conflicting controlled facts; test project isolation; delete one memory topic; and verify convergence across eligible surfaces.

Measure migration preservation, import preservation, project isolation, Chat/Cowork round-trip consistency, source attribution, correction propagation, deletion convergence, and human reconstruction time.

## 7. Metrics

```text
Migration Preservation Rate (MPR)
= legacy memory statements semantically preserved / all controlled legacy statements

Imported Memory Fidelity (IMF)
= imported statements retaining intended meaning and scope / all controlled imported statements

Cross-Surface Memory Consistency (CSMC)
= controlled facts consistent across Chat and cloud Cowork / all cross-surface tests

Project Isolation Accuracy (PIA)
= project-specific facts remaining inside intended project boundary / all controlled project facts

Memory Origin Attribution Coverage (MOAC)
= memory entries attributable to exact origin class and source event / all tested entries

Deletion Convergence Accuracy (DCA)
= deleted/reset memory correctly absent from subsequent eligible contexts / all controlled deletion events
```

## 8. Creator-Workflow Significance

### Skills
Skill execution increasingly depends on current memory state. The effective procedure is Skill version + current memory version + project memory + surface. Stable Skill text does not guarantee reproducibility when inherited memory changes.

### Mini-app builders and agents
Cloud Cowork turns memory into an input to long-running agentic work. Execution manifests should distinguish explicit task input from inherited memory input.

### Chat-to-document and DOCX/PDF generation
A document generated in Cowork may be influenced by memory imported from another AI, remembered from an old chat, or created in a prior Cowork task. The artifact lineage is therefore source chat / foreign memory / project memory -> current memory -> Cowork task -> document. A clean PDF can still be irreproducible if inherited memory state is invisible.

### Copy-paste and export
Memory import/export makes copy-paste a cross-provider persistent-context migration mechanism. The relevant test is no longer only whether text copied correctly, but whether persistent-context semantics survived conversion into another provider's memory model.

## 9. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | **Material fresh change:** Anthropic says users have been migrated off the legacy memory experience; legacy-memory export remains available only until 9 September 2026. Current memory uses individual topics, project-specific memory, and Chat/cloud-Cowork sharing. |
| Skills | No newer standalone Skill launch surfaced in this pass; memory state is increasingly part of Skill execution context. |
| Mini-app builders | Material adjacent shift: cloud Cowork consumes and produces persistent memory across agentic tasks, making inherited context part of runtime state. |
| Chat-to-document export | No new standalone export primitive surfaced; Cowork document generation can depend on cross-surface persistent memory. |
| DOCX / PDF generation | No newer direct format generator surfaced; provenance requirements expand to include memory version and origin. |
| Copy-paste/export fixes | **Material portability mechanism:** Claude supports importing memory from other AI services and exporting its own memory for migration or backup. |
| Broader creator workflow | **Material trend:** persistent context is becoming portable, project-scoped, agent-shared infrastructure rather than a private chat-side convenience. |

## 10. Deep Drift Research Position

The weak description is: **Claude improved memory.**

The serious description is: persistent context is becoming a migratable and cross-surface execution dependency. Legacy memory has been transformed into topic-based memory, memory can be imported from competing AI systems, projects maintain isolated memory spaces, and cloud agentic tasks can both consume and modify the same persistent context used by ordinary chat.

Therefore:

```text
MEMORY != CHAT HISTORY
MIGRATED != VERIFIED COMPLETE
IMPORTED != SEMANTICALLY IDENTICAL
SAME ACCOUNT != SAME MEMORY SCOPE
SAME COWORK BRAND != SAME MEMORY BEHAVIOR
```

**Deep Drift requirement:** Every persistent-memory system should preserve origin, version, migration state, import transformation, project scope, cross-surface propagation, correction history, and deletion state, and should make temporary recovery windows explicit before legacy context becomes unrecoverable.

Memory is no longer merely what the model remembers. It is infrastructure that moves, mutates, expires, crosses products, and quietly helps author artifacts. Which means it deserves version control instead of sentimentality.

## Evidence Boundary

Platform facts in this report are grounded in Anthropic's first-party Help Center documentation retrieved 30 August 2026. Anthropic states that users have been migrated off the legacy memory experience; legacy memory remains exportable until 9 September 2026 for migration recovery; current memory is stored as individual topic entries; each project has a separate memory space and project summary; memory is shared between Chat and cloud-based Cowork but not local Cowork; past-chat citations can link back to original conversations; and memory can be imported from other AI services or exported for backup or migration.

MMCSCCF, LCMMF, MECF, IMTF, CCMCF, PMIF, MOAF, DMCF, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Anthropic Help Center, **Use Claude's chat search and memory to build on previous context**, updated 29 August 2026 / retrieved 30 August 2026.  
   https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context

2. Anthropic Help Center, **Import and export your memory from Claude**, retrieved 30 August 2026.  
   https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude

3. Anthropic Help Center, **Get started with Claude Cowork**, updated during the week of 24-30 August 2026 / retrieved 30 August 2026.  
   https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
