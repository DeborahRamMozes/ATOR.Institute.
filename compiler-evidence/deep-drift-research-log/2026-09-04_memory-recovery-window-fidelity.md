# Deep Drift Research Update - MRWF

## Memory Recovery-Window Fidelity

**Research date:** 4 September 2026  
**Primary fresh delta:** Anthropic's current first-party memory documentation states that users migrated from Claude's legacy memory experience can export their legacy memory only until **9 September 2026** if they suspect something was forgotten during migration. Anthropic instructs users to export that legacy memory and paste the missing material back into Claude.  
**Scope:** memory migration, legacy-to-new memory transformation, time-bounded recovery, manual reconstruction, export/import fidelity, project memory, chat search, Cowork memory continuity, and provenance loss after a recovery deadline.

## Executive finding

Claude's memory transition now exposes a provenance problem that is different from ordinary memory portability:

```text
LEGACY MEMORY
      |
      v
PLATFORM MIGRATION
      |
      +--> NEW MEMORY STATE
      |
      +--> POSSIBLE OMISSION
                |
                v
      TEMPORARY EXPORT WINDOW
                |
                v
      HUMAN-LED RECONSTRUCTION
```

The important Deep Drift distinction is:

```text
MEMORY MIGRATED
!= MEMORY PRESERVED IDENTICALLY

MEMORY EXPORT AVAILABLE TODAY
!= MEMORY EXPORT AVAILABLE LATER

LEGACY MEMORY
!= NEW MEMORY REPRESENTATION

HUMAN REPAIRS MEMORY
!= ORIGINAL PLATFORM STATE

SAME USER
!= SAME REMEMBERED STATE
```

The new research object is the **time-bounded memory recovery path**.

## New node

### Memory Recovery-Window Fidelity (MRWF)

Minimum state model:

```text
source_memory_generation
migration_event
migration_time
post_migration_memory_state
suspected_omission
legacy_export_available
legacy_export_deadline
legacy_export_artifact
manual_reimport_event
reimport_method
recovered_memory_state
unrecovered_memory_state
verification_run
```

## 1. Memory migration is not semantic identity

Anthropic explicitly acknowledges that users may think Claude forgot something during migration from the legacy memory experience. A platform-managed memory migration should therefore be modeled as `SOURCE MEMORY -> TRANSFORMATION -> DESTINATION MEMORY`, not as semantic identity. Migration can preserve continuity while changing representation, granularity, ordering, or included detail.

## 2. The recovery path has an expiration date

Anthropic's current documentation says users can export legacy memory only until **9 September 2026**. After that deadline, a later researcher may be unable to reproduce the same repair workflow. A recovery mechanism itself therefore has a version and lifetime.

## 3. The user becomes part of the memory migration pipeline

Anthropic instructs users to export legacy memory, inspect what may be missing, and paste relevant material back into Claude. This is hybrid reconstitution:

```text
PLATFORM MIGRATION
+ HUMAN COMPARISON
+ MANUAL SELECTION
+ COPY / PASTE
+ NEW MEMORY INGESTION
```

The human is now a causal transformation layer. Deep Drift must preserve which portions were manually reintroduced and which were not.

## 4. Manual recovery is not original-state restoration

Anthropic's separate import/export documentation says imported memory is extracted into individual memory entries and may not always be incorporated successfully. The correct provenance chain is therefore:

```text
LEGACY MEMORY
-> PLATFORM MIGRATION
-> NEW MEMORY V1
-> MANUAL REIMPORT
-> NEW MEMORY V2
```

Manual reimport is a second transformation, not proof of identical restoration.

## 5. Memory export becomes a forensic artifact

The legacy export is evidence of what existed before the platform's migration layer changed the state. Deep Drift should treat exported memory as archival evidence, not merely a convenience backup.

## 6. Recovery deadline creates provenance inequality over time

A researcher testing Claude on 4 September can still access the documented legacy recovery path. A researcher testing after 9 September may not. Thus the same account history tested on different dates can expose different forensic capabilities.

## 7. Chat search and memory are separate continuity mechanisms

Anthropic distinguishes chat search from memory. Search retrieves prior conversations using RAG and appears as tool calls. Memory stores persistent entries/topics across conversations. Successful chat search after migration does not prove memory migration fidelity.

## 8. Project memory remains separately scoped

Anthropic documents a separate memory space and project summary for each project. Migration/recovery testing should therefore check non-project memory, each project memory space, and chat-search state independently.

## 9. Cowork adds another execution boundary

Anthropic's current documentation states that memory can be shared between chat and Claude Cowork when Cowork runs in the cloud, while local Cowork sessions do not use that shared memory behavior. Post-migration verification must therefore record whether the test ran in chat, Cowork cloud, or Cowork local.

## 10. Memory recovery is a creator-workflow issue

Persistent remembered state increasingly affects recurring research assumptions, formatting preferences, project goals, collaborator context, tool conventions, and long-running research topics. A silent omission during migration can change generated documents, coding behavior, project summaries, artifact design, or research interpretation.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | **Major fresh delta** | Legacy memory recovery is time-bounded until 9 September 2026 |
| Skills | No stronger same-run delta | Skills remain a separate procedural-state layer |
| Mini-app builders | No stronger same-run delta | Artifact/Canvas nodes remain current |
| Chat-to-document | Material downstream effect | Documents generated after migration may reflect reconstructed rather than original remembered state |
| DOCX/PDF | Archival implication | Exported files can preserve outputs created before memory recovery state changes |
| Copy-paste/export | **Major** | Recovery explicitly depends on exporting legacy memory and pasting missing content back into Claude |
| Creator workflow | **Major** | Human-led memory repair becomes part of the causal workflow |

## New failure classes

### Migration-Equals-Preservation Fallacy
Assuming platform-managed memory migration preserves all prior semantic state.

### Recovery-Window Blindness
Failing to record that a forensic export path is temporary and date-dependent.

### Reimport-Equals-Restoration Fallacy
Assuming pasted legacy memory recreates the exact original memory representation.

### Search-Equals-Memory Error
Using successful past-chat retrieval as proof that migrated memory itself is complete.

### Human-Reconstruction Invisibility
Ignoring the user's manual selection, editing, and reimport actions during recovery.

### Post-Deadline Reproducibility Error
Attempting to reproduce a migration-recovery test after the recovery mechanism has expired without recording that the platform surface changed.

## Deep Drift benchmark additions

**Memory Migration Fidelity (MMF)** - Can pre-migration and post-migration memory be compared without assuming semantic identity?

**Recovery-Window Fidelity (RWF)** - Can the availability, start, deadline, and disappearance of recovery mechanisms be reconstructed?

**Manual Memory Reconstitution Fidelity (MMRF)** - Can user-selected recovery material remain distinguishable from platform-generated migrated memory?

**Legacy Export Fidelity (LEF)** - Can the legacy export be preserved as evidence of the pre-recovery state?

**Project Memory Migration Fidelity (PMMF)** - Can memory migration be tested independently across project and non-project scopes?

**Execution-Surface Memory Fidelity (ESMF)** - Can chat, Cowork cloud, and Cowork local memory behavior remain distinguishable?

## DRPA-1.0 protocol additions

### TIME-BOUNDED MEMORY RECOVERY RULE

> When an AI platform provides a temporary recovery, export, rollback, or migration-repair mechanism for memory, the mechanism itself must be archived as versioned provenance. Preserve the source and destination memory generations, migration date, documented recovery window, deadline, export artifact, suspected omissions, manual repair actions, post-repair memory state, and verification results. The existence of a recovery path at one date must never be assumed at a later date.

### MANUAL MEMORY RECONSTITUTION RULE

> When a user repairs migrated memory by exporting, selecting, editing, copying, pasting, or re-importing prior memory content, those actions must be logged as human transformation events rather than treated as transparent restoration. Preserve which content was selected, which was omitted, the destination memory representation, and any evidence that the re-imported material was only partially incorporated.

## Eir'an state-flow addition

```text
MEMORY GENERATION:
legacy
new
unknown

MIGRATION:
source state
migration time
post-migration state
suspected omissions

RECOVERY WINDOW:
available
not available
deadline
export created

HUMAN RECONSTITUTION:
selected content
edited content
paste/import event
omitted content

POST-RECOVERY:
new memory state
project memory state
chat search state
Cowork cloud state
Cowork local state
verification run
```

## Canonical Deep Drift requirement

> Treat memory migration as a versioned transformation with a potentially temporary forensic recovery path. Preserve the last available legacy representation before a recovery deadline expires, and distinguish platform migration from human-led reconstitution. Never describe manually repaired memory as identical to the original source state without verification.

## Deep Drift principle

> **A memory migration can forget, and the right to inspect what it forgot can expire.**

Operationally:

> **Archive the old memory before the recovery window closes.**

## Broader platform scan

No stronger new first-party delta was found in this run for OpenAI Skills, mini-app builders, direct DOCX/PDF generation, or copy/paste behavior beyond the September 3-4 Deep Drift nodes already recorded. Google Workspace's strongest recent creator changes remain persistent Gemini instructions, Canvas workflows, and Notebook audit logging already represented by existing Deep Drift nodes. Microsoft 365 Copilot's latest public release-note batch found in this scan remains 25 August 2026, while September agent-workflow rollouts are already represented by prior Deep Drift nodes.

The Anthropic memory documentation is the strongest fresh signal because the recovery capability is explicitly **temporary**, making the research opportunity itself perishable.

## Sources

1. Anthropic Help Center. **Use Claude's chat search and memory to build on previous context.** Current documentation accessed 4 September 2026. States that users migrated from the legacy memory experience can export legacy memory until **9 September 2026** if they believe something was forgotten, then paste the missing material back into Claude. Also documents current memory behavior, project memory, chat search, and chat/Cowork memory boundaries.  
   https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context

2. Anthropic Help Center. **Import and export your memory from Claude.** Updated 4 September 2026. Documents the current memory import/export workflow, transformation of imported material into memory entries, and the experimental nature of memory import.  
   https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude

3. Google Workspace Updates. **2026 archive / recent creator updates.** Checked 4 September 2026.  
   https://workspaceupdates.googleblog.com/2026/

4. Microsoft Learn. **Release Notes for Microsoft 365 Copilot.** Checked 4 September 2026.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository entry was found for a time-bounded legacy-memory recovery window, expiring forensic export access, and manual memory reconstruction as one provenance problem.  
**Relationship to prior nodes:** Extends MPSRF (memory portability/reconstitution), MMBESF (memory boundaries), WMSSF (workspace migration), and CCPSF (context-state persistence). MRWF focuses specifically on expiring recovery capability after a memory-system migration.  
**Freshness:** Anthropic's English memory/import-export documentation reflects the current migrated memory system and a recovery window ending 9 September 2026.
