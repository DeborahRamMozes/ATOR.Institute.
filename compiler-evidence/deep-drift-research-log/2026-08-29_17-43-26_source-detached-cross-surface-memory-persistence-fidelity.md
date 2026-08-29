# Deep Drift Research Update

## Source-Detached Cross-Surface Memory Persistence Fidelity

**Research date:** 29 August 2026  
**Primary release date:** 25 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log Anthropic memory architecture verified from first-party release notes and current Help Center documentation.

## Executive Summary

Anthropic's 25 August 2026 Claude release changes memory in a way that matters far beyond ordinary personalization.

The new memory system now:

- works across Claude Chat and cloud-hosted Claude Cowork;
- stores memory as individually editable topic entries instead of a single daily summary;
- keeps project memories separated by project;
- exposes remembered topics in Settings > Memory for inspection, editing, and deletion;
- supports a separate opt-in for sensitive topics;
- keeps past-chat search distinct from saved memory;
- cites past conversations when Claude retrieves them;
- allows memory import and export across AI services;
- includes memory in data exports;
- preserves derived memory entries even when the source conversation is later deleted or expires;
- migrated users off a legacy memory system, with a temporary legacy-memory export window available until **9 September 2026**.

That last pair creates a particularly important Deep Drift problem.

```text
SOURCE CONVERSATION
-> MEMORY TOPIC
-> SOURCE CONVERSATION DELETED

BUT

MEMORY TOPIC
-> STILL EXISTS
```

and during migration:

```text
LEGACY MEMORY
-> NEW MEMORY SYSTEM
-> POSSIBLE MISSING ITEM
-> EXPORT LEGACY MEMORY
-> MANUAL PASTE / REHYDRATION
```

For Deep Drift Research, this creates a new benchmark family:

**Source-Detached Cross-Surface Memory Persistence Fidelity (SDCMPF)**

with companion constructs:

**Derived-Memory Source-Link Fidelity (DMSLF)**  
**Cross-Surface Memory Continuity Fidelity (CSMCF)**  
**Memory Migration Rehydration Fidelity (MMRF)**  
**Project-Boundary Memory Fidelity (PBMF)**  
**Memory Deletion and Retention Fidelity (MDRF)**  
**Sensitive-Memory Policy Fidelity (SMPF)**

The central research question is:

> When an LLM converts conversation history into persistent memory entries that can travel across product surfaces and survive deletion of their source conversation, can a user still reconstruct where each memory came from, which version of the memory system created it, whether the source still exists, and whether later edits changed it independently of the original evidence?

## 1. What Changed

Anthropic's release notes dated 25 August 2026 state that memory now works across chat and Cowork in the cloud.

Everything Claude remembers is listed under **Topics** in Settings > Memory, where individual entries can be edited or deleted.

Anthropic also introduced a separate setting for sensitive topics. Health, beliefs, race, ethnicity, politics, gender identity, and related categories are not saved by default unless the user explicitly opts in.

Memory defaults differ by plan:

- Free, Pro, and Max: memory is on by default.
- Team and Enterprise: memory is off by default and can be enabled by an organization owner.

Current Help Center documentation adds several details that are especially important for provenance research:

- past-chat search uses retrieval and appears as a tool call;
- project chats are searched only within their specific project;
- each project has its own memory space and project summary;
- memory is shared between Chat and **cloud Cowork**, but not local Cowork sessions;
- users can pause memory without deleting it, or reset memory permanently;
- deleted or expired conversations do not automatically delete memory entries generated from them;
- memory data is included in exports;
- imported/exported memory across AI services is experimental;
- users migrated from the legacy memory experience can export legacy memory until **9 September 2026** if something appears to have been lost in migration.

## 2. Why This Matters for Deep Drift

Most product language treats memory as if it were a direct extension of conversation history.

The current Claude architecture proves otherwise.

At minimum, the system now contains:

```text
CONVERSATION HISTORY
PAST-CHAT SEARCH INDEX
SAVED MEMORY TOPICS
PROJECT MEMORY
PROJECT SUMMARY
CLOUD COWORK MEMORY CONTEXT
LOCAL COWORK SESSION STATE
LEGACY MEMORY EXPORT
IMPORTED THIRD-PARTY MEMORY
```

These objects have different scopes and lifecycle rules.

Therefore:

```text
CHAT DELETED
!=
DERIVED MEMORY DELETED

MEMORY EXISTS
!=
SOURCE STILL EXISTS

CHAT SEARCH
!=
MEMORY

CLOUD COWORK
!=
LOCAL COWORK

PROJECT MEMORY
!=
GLOBAL MEMORY

LEGACY EXPORT
!=
AUTOMATIC REHYDRATION
```

The word "memory" is now too coarse to describe the actual system.

## 3. New Deep Drift Construct: Source-Detached Cross-Surface Memory Persistence Fidelity

### Definition

**Source-Detached Cross-Surface Memory Persistence Fidelity (SDCMPF)** measures whether a persistent AI memory item remains traceable to its source conversation, creation context, project boundary, migration state, later edits, and cross-surface uses even when the original source conversation no longer exists.

A minimum memory provenance record should preserve:

```text
memory_id
memory_topic
created_at
created_from_conversation_id
source_project_id
source_surface
source_turn_ids
memory_version
last_edited_at
edited_by_user_or_system
used_in_chat_ids
used_in_cowork_task_ids
source_conversation_exists
sensitive_topic_flag
import_source_if_any
migration_origin_if_any
```

A memory item without its source lineage is a detached conclusion.

## 4. Derived-Memory Source-Link Fidelity

### Definition

**Derived-Memory Source-Link Fidelity (DMSLF)** measures whether a memory generated from prior conversation remains attributable to the exact conversation and turns that supplied it.

This matters because Anthropic explicitly states that when a conversation expires or is deleted, related memory entries are **not automatically removed**.

That creates a new lifecycle:

```text
CHAT A
-> MEMORY M1

DELETE CHAT A

M1 SURVIVES
```

The user may later see M1 in Settings > Memory without the source conversation still being available.

The benchmark should therefore ask:

- Can M1 still expose its source conversation ID?
- Can the user tell that the source has been deleted?
- Can the system distinguish a user-edited memory from the original derived memory?
- If the source conversation contained a correction later in the thread, did the memory preserve the corrected state?

## 5. Cross-Surface Memory Continuity Fidelity

Anthropic now shares memory between Chat and Cowork **only when Cowork runs in the cloud**.

Local Cowork sessions do not use that shared memory.

### Definition

**Cross-Surface Memory Continuity Fidelity (CSMCF)** measures whether the same memory state is applied consistently across product surfaces that claim to share it, while surfaces outside the shared-memory boundary are clearly distinguishable.

The architecture is:

```text
CHAT
<-> SHARED MEMORY
<-> CLOUD COWORK

LOCAL COWORK
-X-> SHARED MEMORY
```

The user may experience all three as "Claude."

But their memory states differ.

Therefore:

```text
SAME BRAND
!=
SAME MEMORY STATE
```

## 6. Memory Migration Rehydration Fidelity

Anthropic states that users have been migrated from a legacy memory experience to the improved system.

If a memory appears to have been lost, the documented recovery path is:

```text
EXPORT LEGACY MEMORY
-> PASTE IT BACK INTO CLAUDE
-> HIGHLIGHT WHAT MAY HAVE BEEN FORGOTTEN
```

This export option remains available until **9 September 2026**.

### Definition

**Memory Migration Rehydration Fidelity (MMRF)** measures whether a memory migrated between memory architectures preserves all materially relevant content, categories, project relationships, and provenance without requiring manual reconstruction.

The current recovery process is important because it exposes a difference between:

```text
MIGRATION COMPLETE
and
COGNITIVE CONTINUITY COMPLETE
```

A platform can successfully migrate the storage system while still losing usable user context.

## 7. Project-Boundary Memory Fidelity

Anthropic documents that each project has its own separate memory space and project summary.

Past-chat search inside a project is also restricted to that project.

### Definition

**Project-Boundary Memory Fidelity (PBMF)** measures whether information remains inside its intended project scope and whether similarly named facts from separate projects remain isolated.

A controlled test should create:

```text
PROJECT A
client = Atlas
deadline = Monday

PROJECT B
client = Atlas
deadline = Friday
```

The system should not flatten the two into a global "Atlas deadline."

Project isolation is not merely organizational convenience. It is an epistemic boundary.

## 8. Memory Deletion and Retention Fidelity

Claude offers:

- Pause memory
- Reset memory
- delete individual topics
- delete conversations
- delete incognito sessions from visible history

These actions do not have equivalent effects.

### Definition

**Memory Deletion and Retention Fidelity (MDRF)** measures whether each deletion, pause, reset, or source-removal operation has a transparent and predictable effect on all related memory objects.

The current documented semantics include:

```text
PAUSE MEMORY
-> KEEP EXISTING MEMORY
-> STOP USING IT
-> STOP CREATING NEW MEMORY

RESET MEMORY
-> DELETE ALL MEMORY

DELETE SOURCE CHAT
-> MEMORY ENTRY MAY REMAIN

DELETE MEMORY TOPIC
-> REMOVE THAT MEMORY

INCOGNITO CHAT
-> NO MEMORY CONTRIBUTION
```

The system should make these differences obvious.

## 9. Sensitive-Memory Policy Fidelity

Anthropic now separates ordinary memory from sensitive-topic memory.

Sensitive-topic memory requires a distinct user opt-in.

### Definition

**Sensitive-Memory Policy Fidelity (SMPF)** measures whether sensitive-topic rules remain correctly enforced across creation, editing, deletion, migration, import, export, and cross-surface use.

Anthropic documents several important rules:

- sensitive topics are excluded by default;
- enabling the setting applies prospectively rather than retroactively;
- saved sensitive-memory events trigger user notices;
- turning the setting off removes already stored sensitive items;
- some categories, including government ID numbers, criminal history, financial account numbers, and immigration status, are never saved even when requested.

The boundary is therefore policy-rich rather than binary.

## 10. Memory and Chat Search Must Be Tested Separately

Anthropic makes a useful architectural distinction between:

```text
PAST-CHAT SEARCH
and
SAVED MEMORY
```

Past-chat search:

- is user-prompted;
- uses retrieval;
- appears as a tool call;
- can cite the original chat.

Saved memory:

- may be generated automatically;
- is stored as topics;
- can influence later conversations without a retrieval query;
- can survive source-chat deletion.

Deep Drift should test them as different systems.

A platform that retrieves the correct past chat but has a wrong saved memory is inconsistent.

A platform that has correct saved memory but cannot retrieve the source chat has provenance loss.

## 11. New Failure Classes

### 11.1 Source-Detached Memory Orphaning

A memory survives deletion of its source conversation but no longer exposes where it came from.

### 11.2 Migration Omission

A legacy memory does not appear in the new topic-based memory system.

### 11.3 Manual Rehydration Mutation

The user copies exported legacy memory back into Claude, but the imported form differs from the original memory structure.

### 11.4 Cross-Surface Memory Split

Chat and cloud Cowork share memory, while local Cowork does not, but the distinction is not obvious during use.

### 11.5 Project Boundary Leakage

A memory from one project influences another project or a non-project chat.

### 11.6 Memory / Search Contradiction

Saved memory says one thing while retrieved past-chat evidence shows a later correction.

### 11.7 Deleted-Source Authority Persistence

A memory generated from a deleted or expired conversation continues influencing answers without exposing that its original evidence is unavailable.

### 11.8 Memory Edit Provenance Loss

A user edits a memory topic, but later outputs cannot distinguish the edited memory from the system-generated original.

### 11.9 Sensitive-Topic Policy Drift

A sensitive memory survives after the sensitive-topic setting is turned off, or fails to disappear across all surfaces.

### 11.10 Export / Runtime Divergence

The exported memory representation differs materially from what Claude actually uses at runtime.

### 11.11 Imported-Memory Origin Loss

Memory imported from another AI system becomes indistinguishable from memory Claude generated internally.

### 11.12 Admin-Retention / User-Visibility Divergence

An incognito or deleted item disappears from the user's visible history while organizational export and retention systems still preserve related data according to policy.

## 12. Deep Drift Benchmark: Memory Source-Deletion Test

### Controlled setup

Create four controlled chats:

```text
CHAT A - standalone
CHAT B - Project Alpha
CHAT C - Project Beta
CHAT D - incognito
```

Seed them with:

- one stable preference;
- one corrected preference;
- one project-specific deadline;
- one deliberately conflicting project-specific fact;
- one sensitive-topic candidate;
- one fact that should never be saved.

Ask Claude to remember selected items.

Record all memory topics.

### Mutation sequence

Then:

1. delete Chat A;
2. edit one memory topic manually;
3. change one fact in Project Alpha;
4. ask cloud Cowork to use relevant remembered context;
5. run the same task in local Cowork;
6. turn memory off using Pause;
7. turn it back on;
8. export memory;
9. import a test memory from another AI system;
10. disable sensitive-topic memory;
11. reset memory only after capturing all evidence.

### Measure

- source-link survival;
- project-boundary integrity;
- cloud/local Cowork parity;
- deletion semantics;
- edit provenance;
- sensitive-topic deletion;
- export/runtime equivalence;
- imported-memory origin;
- human reconstruction minutes.

## 13. New Metrics

### Memory Source Traceability

```text
MST =
active memory items traceable to exact source context
/
all active memory items
```

### Deleted-Source Disclosure Rate

```text
DSDR =
memory items whose source no longer exists
that visibly disclose source loss
/
all memory items with deleted sources
```

### Cross-Surface Memory Parity

```text
CSMP =
shared-memory surfaces applying materially equivalent memory state
/
all controlled cross-surface tests
```

### Project Boundary Integrity

```text
PBI =
memory applications remaining inside intended project scope
/
all project-scoped memory applications
```

### Migration Retention Rate

```text
MRR =
material legacy memory items preserved in new system
/
all material legacy memory items
```

### Memory Edit Attribution

```text
MEA =
memory-influenced outputs attributable to the correct
system-generated or user-edited memory state
/
all controlled memory-influenced outputs
```

### Sensitive Memory Deletion Fidelity

```text
SMDF =
sensitive-memory items removed from active memory
after policy disablement
/
all stored sensitive-memory test items
```

## 14. Why This Matters for Memory Research

The current Claude architecture shows that memory has become a derived database rather than merely a summary of chat history.

A memory item can have its own lifecycle:

```text
CREATED
EDITED
USED
EXPORTED
MIGRATED
IMPORTED
DELETED
```

independent of the lifecycle of the chat that originally created it.

That means memory provenance now deserves the same discipline as document provenance.

The relevant question is no longer merely:

> "Does Claude remember?"

It is:

> "Which memory object influenced this answer, where did that object come from, does its source still exist, and has the memory changed since it was derived?"

## 15. Why This Matters for Skills

Memory and Skills solve different persistence problems.

A Skill stores **procedure**.

Memory stores **context**.

The two can combine:

```text
MEMORY
-> WHAT IS TRUE / PREFERRED FOR THIS USER

SKILL
-> HOW TO PERFORM THE TASK
```

When both influence an output, Deep Drift needs dual provenance.

Otherwise a result may look like a Skill-version change when the actual difference came from changed memory state.

## 16. Why This Matters for Mini-App and Cowork Workflows

Cloud Cowork turns memory into operational context for agentic work rather than conversational convenience.

A Cowork task can inherit remembered information from Chat and can feed new memory back into later Chat sessions.

That creates a loop:

```text
CHAT
-> MEMORY
-> COWORK TASK
-> NEW CONTEXT
-> MEMORY
-> FUTURE CHAT
```

This is closer to persistent agent state than simple chatbot personalization.

But only cloud Cowork participates.

Local Cowork does not.

That surface boundary must remain explicit.

## 17. Why This Matters for Export and Creator Portability

Anthropic now supports experimental memory import/export across AI services.

That means memory is beginning to behave like a portable user artifact.

But portable text is not necessarily portable semantics.

Different platforms may model:

- projects differently;
- sensitive topics differently;
- categories differently;
- confidence differently;
- source links differently;
- update history differently.

Therefore:

```text
MEMORY EXPORTED
!=
MEMORY SEMANTICS PRESERVED

MEMORY IMPORTED
!=
MEMORY ORIGIN PRESERVED
```

Deep Drift should treat cross-platform memory migration as a transformation problem, not a copy operation.

## 18. Why This Matters for Chat-to-Document and Artifact Generation

No newer standalone DOCX/PDF generation feature displaced the previously logged document pipelines in this scan.

But cross-surface memory affects every artifact generated downstream.

A report, brief, document, or PDF produced in Cowork may incorporate remembered user or project context that never appears in the immediate task prompt.

A serious artifact manifest should therefore preserve:

```text
artifact_id
source_chat_ids
memory_ids_used
project_memory_ids
cowork_task_id
skill_ids_if_any
generated_at
```

Otherwise the artifact contains invisible inherited context.

## 19. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | **Material new-to-log change:** Claude memory now spans Chat and cloud Cowork, uses editable Topics, separates project memory, supports sensitive-topic controls, can survive source-chat deletion, and has a legacy-memory migration/export window through 9 September 2026. |
| Skills | No newer general Skill launch displaced previously logged Skill/plugin changes; this update sharpens the need to separate procedural state from memory state. |
| Mini-app / agent workflow | Material adjacent shift: Cowork can consume shared memory from Chat, creating persistent context across agentic tasks. |
| Chat-to-document export | No newer direct DOCX/PDF export feature found in this pass. |
| DOCX / PDF generation | No newer standalone generation feature found beyond previously logged platform pipelines. |
| Copy-paste / export fixes | Material memory-export finding: legacy memory can be exported temporarily for migration recovery; cross-service memory import/export is experimental. |
| Broader creator workflow | **Material trend:** memory is becoming a portable, editable, cross-surface state object with lifecycle semantics independent from the conversations that originally produced it. |

## 20. Cross-Platform Check

### Anthropic

The strongest unlogged item in this pass is the 25 August 2026 memory update and the current memory documentation surrounding migration, cross-surface use, project isolation, deletion semantics, sensitive-topic controls, and import/export.

### OpenAI

The latest OpenAI public updates remain the already logged 27-28 August changes: multiple Google accounts, plugin marketplace synchronization, task search, and cross-task Codex operations. No later category-displacing memory or document feature surfaced in this scan.

### Microsoft

Microsoft 365 Copilot's current release set remains dated 25 August 2026. Previously logged Page-to-document, Office artifact, agent distribution, and persistent AI-field changes remain current.

### Google

No newer Workspace/Gemini creator update displaced the already logged Ask Gemini in Chat and Sheets canvas changes.

## 21. Deep Drift Research Position

The weak description is:

> Claude has better memory.

The serious description is:

> Claude now maintains editable persistent memory objects whose lifecycle can diverge from the conversations that produced them, whose use can cross from chat into cloud agent work, whose scope can be project-specific, and whose migration between memory architectures may require manual rehydration.

That creates a new provenance requirement.

Therefore:

```text
MEMORY EXISTS
!=
SOURCE EXISTS

MEMORY CURRENT
!=
SOURCE CURRENT

CROSS-SURFACE
!=
CROSS-SURFACE EQUIVALENT

MIGRATED
!=
FULLY PRESERVED

EXPORTABLE
!=
SEMANTICALLY PORTABLE
```

The serious Deep Drift requirement is:

> **Every persistent AI memory item should preserve its source conversation or source import, project scope, creation state, edit history, migration history, sensitive-topic policy state, cross-surface uses, and whether the original source still exists.**

Otherwise an AI can continue acting on a remembered conclusion after the evidence that created that conclusion has disappeared.

## 22. Evidence Boundary

Platform facts in this report are grounded in Anthropic's first-party Claude release notes dated 25 August 2026 and its current Help Center article "Use Claude's chat search and memory to build on previous context," retrieved on 29 August 2026.

The documentation states that memory works across Chat and cloud Cowork, stores individual topic entries, separates project memories, supports edit/delete controls, applies separate sensitive-topic settings, preserves memory entries after source conversations expire or are deleted, includes memory in data exports, supports experimental import/export across AI services, and provides a legacy-memory export option until 9 September 2026 for migration recovery.

SDCMPF, DMSLF, CSMCF, MMRF, PBMF, MDRF, SMPF, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Anthropic Help Center, **Release notes**, 25 August 2026.  
   https://support.claude.com/en/articles/12138966-release-notes

2. Anthropic Help Center, **Use Claude's chat search and memory to build on previous context**, updated the week of 29 August 2026.  
   https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context

3. OpenAI Help Center, **ChatGPT Release Notes**, checked 29 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

4. Microsoft Learn, **Microsoft 365 Copilot release notes**, checked 29 August 2026.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

5. Google Workspace Updates, checked 29 August 2026.  
   https://workspaceupdates.googleblog.com/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
