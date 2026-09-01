# Deep Drift Research Update — DMPSAF

## Derived Memory Persistence and Surface-Asymmetry Fidelity

**Research date:** 1 September 2026, 21:45 WIB  
**Primary fresh delta:** Anthropic memory architecture, updated August 25–September 1, 2026  
**Scope:** memory persistence, Chat/Cowork continuity, cloud/local execution asymmetry, legacy memory migration, export/recovery, downstream creator artifacts.

## Executive finding

Anthropic has changed Claude memory from a largely chat-centered persistence layer into a cross-surface state system. Claude Chat and Claude Cowork now share the same memory when Cowork runs in the cloud. Local Cowork sessions do not use that memory. Memory is stored as individual topics and can be edited or deleted directly. More importantly for provenance, deleting or expiring the source conversation does not automatically remove the memory entries derived from it.

Anthropic has also migrated users from a legacy memory system and provides a temporary recovery path: until September 9, 2026, users can export legacy memory and paste missing material back into the new system.

The resulting architecture breaks several assumptions that ordinary chat archives still make:

```text
SOURCE CONVERSATION
!= DERIVED MEMORY OBJECT

DELETE SOURCE
!= DELETE DERIVED MEMORY

SAME PRODUCT
!= SAME MEMORY SURFACE

CLOUD COWORK
!= LOCAL COWORK

CHAT HISTORY
!= MEMORY STATE

MEMORY MIGRATION
!= LOSSLESS MIGRATION

EXPORTABLE LEGACY MEMORY
!= PERMANENT RECOVERY WINDOW
```

## New node

### Derived Memory Persistence and Surface-Asymmetry Fidelity (DMPSAF)

The important object is no longer only the conversation. Claude can derive a persistent memory topic from a conversation and then maintain that topic as a distinct state object.

```text
CONVERSATION C1
      |
      +--> MEMORY TOPIC M1
      |
      +--> MEMORY TOPIC M2

DELETE C1

M1 survives
M2 survives
```

Anthropic's current Help Center states that when a conversation expires or is deleted, related memory entries generated from it are not removed automatically. Users must delete those memory entries separately.

That means a future response can be influenced by information whose originating conversation is no longer present in ordinary history.

## Cross-surface asymmetry

Anthropic's current architecture also makes memory availability dependent on execution surface.

```text
CLAUDE CHAT
     |
     +--> SHARED MEMORY
             |
             +--> COWORK CLOUD : YES
             |
             +--> COWORK LOCAL : NO
```

The same user, same account, same task, and same Cowork product name can therefore produce different context simply because one run executes in the cloud and another on the local computer.

This yields a basic Deep Drift distinction:

```text
PRODUCT IDENTITY
!= MEMORY AVAILABILITY

ACCOUNT IDENTITY
!= EXECUTION CONTEXT

WORKFLOW NAME
!= CONTEXT STATE
```

For creator provenance, "made with Claude Cowork" is insufficient. The archive needs to know whether the task ran locally or in the cloud and whether shared memory was available at execution time.

## Memory topics become independent provenance objects

The new Claude memory system stores memory as individual topics rather than relying only on a periodically synthesized summary. Users can inspect, edit, delete, pause, or reset memory. A memory edit then applies to later conversations.

This creates a new causal chain:

```text
CHAT C1
   |
   v
MEMORY TOPIC M1
   |
   +--> HUMAN EDIT
   |
   +--> LATER CHAT C2
   |
   +--> COWORK TASK W1
   |
   +--> DOCX / PDF / PRESENTATION / ACTION
```

The downstream artifact may therefore depend on:

- the original conversation;
- the derived memory topic;
- a later human edit to that topic;
- surface-specific memory availability;
- and current project memory boundaries.

Archiving only the final conversation cannot reconstruct that chain.

## Memory deletion and conversation deletion are no longer equivalent

Anthropic states that memory reflects conversation changes as they happen, but when a conversation expires or is deleted, related memory entries are not automatically removed. All memory data is included in data exports.

This is especially important for Deep Drift because the normal archival intuition is:

```text
DELETE CHAT
=> REMOVE ITS CONTEXT
```

The actual new architecture can be:

```text
DELETE CHAT
=> REMOVE VISIBLE SOURCE
=> RETAIN DERIVED MEMORY
=> FUTURE OUTPUT STILL INFLUENCED
```

This creates **orphaned causal context**: persistent knowledge remains active after its visible source disappears.

## Incognito adds another persistence split

Claude incognito chats do not contribute to memory and are not visible in ordinary chat history. On Team and Enterprise, however, incognito chats can still appear in organizational exports and remain subject to retention policies.

Thus:

```text
NOT IN USER HISTORY
!= NOT RETAINED

NOT USED FOR MEMORY
!= NOT EXPORTABLE

INCOGNITO
!= ZERO-PERSISTENCE
```

This mirrors a broader creator-workflow trend across platforms: UI ephemerality and infrastructure retention are separate dimensions.

## Migration creates a time-bounded recovery layer

Anthropic has migrated users off the legacy memory experience. If something was lost during migration, its Help Center currently instructs users to export legacy memory from Settings > Memory before **September 9, 2026**, then paste missing material back into Claude.

This creates a finite migration-recovery state:

```text
LEGACY MEMORY
      |
      +--> AUTOMATED MIGRATION
      |
      +--> NEW MEMORY

IF LOSS DETECTED:
      |
      +--> LEGACY EXPORT
              available only until Sep 9, 2026
      |
      +--> MANUAL RE-INGESTION
```

Therefore:

```text
MIGRATED
!= VERIFIED COMPLETE

EXPORT WINDOW
!= PERMANENT PORTABILITY

BACKUP
!= AUTOMATIC RESTORATION
```

The recovery process itself can alter provenance because the user manually selects what to paste back, potentially changing wording, scope, or emphasis.

## Fresh category scan

| Area | Fresh finding | Deep Drift implication |
|---|---|---|
| Memory | Major | Derived memory can outlive source conversations |
| Cross-surface memory | Major | Chat and cloud Cowork share memory; local Cowork does not |
| Skills/plugins | No stronger fresh packaging primitive | Existing Skills provenance nodes remain current |
| Mini-app builders | No stronger builder primitive in this scan | Existing builder/runtime nodes remain current |
| Chat-to-document | Indirect but important | A generated file can inherit memory whose original chat has been deleted |
| DOCX/PDF generation | No new format primitive | Artifact lineage must include memory-object state, not only conversation state |
| Export/migration | Major | Legacy memory export expires September 9 and requires manual re-ingestion |
| Creator workflow | Major | Memory becomes an independently mutable causal layer across surfaces |

## New failure classes

### Source-Deletion Equivalence Error
Assuming deleting a conversation removes all persistent context derived from it.

### Derived-Memory Orphaning
A memory object continues influencing future work after the source chat has disappeared.

### Surface-Uniformity Fallacy
Assuming identical product branding means identical memory availability.

### Cloud/Local Context Collapse
Failing to record whether Cowork ran in the cloud or locally.

### Memory-Edit Provenance Loss
Preserving a memory topic without its subsequent human edits.

### Migration-Completeness Assumption
Treating successful platform migration as proof that all memory survived.

### Recovery-Window Erasure
Archiving the new state without preserving that legacy recovery was time-bounded.

### Manual-Reingestion Lineage Loss
Failing to record that missing memory was restored by a human copy/paste operation rather than platform migration.

## Deep Drift benchmark additions

**Derived-Memory Persistence Fidelity (DMPF)**  
Can a persistent memory object be traced independently from the conversation that produced it?

**Source-to-Memory Lineage Fidelity (SMLF)**  
Can each memory topic be linked to its source conversation or source event when that relationship is available?

**Deletion-Decoupling Fidelity (DDF)**  
Can the archive represent source deletion without falsely implying derived-memory deletion?

**Surface Memory Availability Fidelity (SMAF)**  
Can memory availability be reconstructed by execution surface, including cloud versus local Cowork?

**Memory Mutation Fidelity (MMF)**  
Can later human or system edits to a memory topic be represented as causal events?

**Migration Completeness Fidelity (MCF)**  
Can the archive distinguish migrated, verified, missing, and manually restored memory?

**Recovery Window Fidelity (RWF)**  
Can time-bounded legacy export availability be reconstructed?

**Artifact-to-Derived-Memory Fidelity (ADMF)**  
Can a downstream document, PDF, presentation, action, or decision be traced to the active memory objects that influenced generation?

## Canonical Deep Drift requirement

> Every material AI-assisted workflow using persistent memory should preserve a machine-readable memory-lineage manifest that treats derived memory as an independent provenance object. The manifest should link each memory topic or state to its originating conversation or event when available; creation and modification timestamps; human and system edits; deletion state of the source conversation; memory deletion state; project scope; execution surface; cloud or local runtime; memory-read eligibility; downstream chats, Cowork tasks, actions, and artifacts influenced by that memory; migration source and target states; migration-verification status; legacy export availability window; manual re-ingestion events; and organizational retention/export conditions. Deleting a source conversation must never be interpreted as proof that memory derived from it has been removed, and naming a product surface must never be treated as proof that the same memory state was available across local and cloud execution.

## Broader creator-workflow trend

The persistent creator environment is moving from:

```text
CHAT
   |
   v
ANSWER
```

to:

```text
CHAT
   |
   +--> DERIVED MEMORY
   |       |
   |       +--> EDIT
   |       +--> DELETE
   |       +--> MIGRATE
   |       +--> EXPORT
   |
   +--> CLOUD AGENT
   +--> LOCAL AGENT
   +--> FUTURE CHAT
   +--> DOCUMENT
   +--> ACTION
```

The final artifact is increasingly the endpoint of a distributed context history rather than the direct child of one prompt.

That is the important Deep Drift shift: **memory is becoming infrastructure.**

Once memory becomes infrastructure, deleting the visible conversation is not equivalent to deleting the causal state, and moving between surfaces is not equivalent to moving between identical contexts.

## Sources

1. Anthropic. **Claude's memory works everywhere, and you decide what's in it.** August 25, 2026.  
   https://claude.com/blog/claudes-memory-works-everywhere-and-you-decide-whats-in-it

2. Anthropic Help Center. **Use Claude's chat search and memory to build on previous context.** Updated the week of September 1, 2026.  
   https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift node found for the combination of source-deletion/memory-survival, cloud/local Cowork asymmetry, and time-bounded legacy-memory recovery.  
**Relationship to prior nodes:** Complements ECMSTF (session-state transitions), RWDDF (retirement/recovery windows), and procedural-state provenance. DMPSAF specifically treats derived memory as an independent causal object whose lifecycle can diverge from its source conversation.
