# Deep Drift Research Update

## Surface-Migration and Conversation-History Portability Fidelity

**Research date:** 30 August 2026  
**Primary platform change:** Google Ask Gemini in Chat rollout, replacing the Gemini side panel in Chat; prior side-panel history does not migrate  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log memory and creator-workflow boundary verified from first-party Google Workspace documentation.

## Executive Summary

Google is replacing the Gemini side panel inside Google Chat with a new **Ask Gemini in Chat** surface. The new surface acts as a unified command line for Workspace work: it can search across Gmail, Drive, and Calendar; generate content; summarize discussions; manage tasks and events; and organize work into individual sessions that users can revisit.

The critical persistence fact is less glamorous and much more important:

> **Conversation history from the previous Gemini side panel in Chat does not migrate to the new Ask Gemini surface.**

Google says administrators can export Gemini conversation history and, where organizational policy permits, end users can download their history. In export systems such as Google Takeout, that data is classified under **“Gemini in Workspace,” not “Google Chat.”**

The architecture is therefore:

```text
OLD GEMINI SIDE PANEL IN CHAT
-> HISTORICAL CONVERSATIONS
-> NO DIRECT MIGRATION
-> EXPORT / DOWNLOAD PATH

NEW ASK GEMINI IN CHAT
-> NEW INDIVIDUAL SESSIONS
-> REVISITABLE CONTINUITY
-> WORKSPACE ACTIONS
```

For Deep Drift Research, this creates a new benchmark family:

**Surface-Migration and Conversation-History Portability Fidelity (SMCHPF)**

with companion constructs:

**Surface-to-History Identity Fidelity (SHIF)**  
**Conversation Export Completeness Fidelity (CECF)**  
**History Namespace Fidelity (HNF)**  
**Old-to-New Session Continuity Fidelity (ONSCF)**  
**Export-to-Reconstruction Fidelity (ERF)**  
**Session-to-Action Lineage Fidelity (SALF)**  
**Capability-Surface Continuity Fidelity (CSCF)**  
**Gems Availability Continuity Fidelity (GACF)**

The central question is:

> When an LLM interface is replaced while historical conversations remain exportable but do not migrate into the successor surface, can a user still reconstruct which surface, session, capability set, and exported history produced a later decision, artifact, or action?

## 1. What Changed

Google announced **Ask Gemini in Chat** on 19 August 2026, with rollout beginning 26 August 2026.

The new surface can search Workspace data such as Gmail, Drive, and Calendar; generate images and draft updates without leaving Chat; summarize conversations and catch users up; manage tasks and calendar events; and organize work into individual sessions that can be revisited.

At the same time, the previous Gemini side panel in Chat disappears for affected users; Gems are no longer accessible from the Gemini side panel in Chat, though they remain available in side panels of other Workspace apps; historical Gemini side-panel conversations in Chat do **not** migrate into Ask Gemini; admins can export Gemini conversation history; where allowed, users can download their own conversation history; and exported history is categorized under “Gemini in Workspace,” not “Google Chat.”

## 2. Why This Matters for Deep Drift

```text
OLD UI
-> OLD HISTORY
-> EXPORTABLE ARCHIVE

NEW UI
-> NEW SESSION SPACE
-> NEW ACTION SURFACE
```

Therefore:

```text
SAME PRODUCT FAMILY != SAME CONVERSATION CONTINUITY
HISTORY EXPORTABLE != HISTORY MIGRATED
NEW SESSION MEMORY != OLD SIDE-PANEL MEMORY
GOOGLE CHAT CONTEXT != GOOGLE CHAT EXPORT NAMESPACE
CAPABILITY REPLACED != CAPABILITY HISTORY PRESERVED
```

This is a classic platform-memory trap: a platform can improve continuity inside the new surface while still cutting the historical continuity between generations of that surface.

## 3. New Deep Drift Construct: Surface-Migration and Conversation-History Portability Fidelity

**Surface-Migration and Conversation-History Portability Fidelity (SMCHPF)** measures whether conversational state remains reconstructable when an LLM interaction surface is replaced, deprecated, or reorganized.

A minimum migration manifest should preserve:

```text
old_surface_id
new_surface_id
old_conversation_ids
old_history_export_id
old_surface_retirement_date
new_surface_rollout_date
export_namespace
export_timestamp
new_session_ids
capabilities_old
capabilities_new
gems_availability_old
gems_availability_new
migration_status
```

## 4. Surface-to-History Identity Fidelity

**Surface-to-History Identity Fidelity (SHIF)** measures whether a conversation can still identify the product surface in which it was created. Deep Drift should distinguish Gemini App, Gemini in Workspace, Gemini side panel in Chat, and Ask Gemini in Chat. If these states are flattened, a later reviewer may believe a conversation was created in the successor surface when it actually belongs to the retired one.

## 5. Conversation Export Completeness Fidelity

**Conversation Export Completeness Fidelity (CECF)** measures whether exported history preserves conversation identity, timestamps, turns, attachments, linked Workspace items, action events, surface identity, session grouping, and available model or feature metadata. A text dump is not automatically a usable migration archive.

## 6. History Namespace Fidelity

Google says side-panel conversation history appears under **Gemini in Workspace**, not Google Chat, in Data Export and Google Takeout.

```text
WHERE USER REMEMBERS THE CONVERSATION
!=
WHERE EXPORT SYSTEM FILES THE CONVERSATION
```

That gap alone is enough to create false “missing history” reports.

## 7. Old-to-New Session Continuity Fidelity

Ask Gemini introduces individual sessions that users can revisit. That is a new persistence model, but those sessions begin after the surface transition. Current documented behavior is old history does not migrate and new Ask Gemini sessions start separately. Deep Drift should treat any continuity across this seam as explicit reconstruction unless Google later adds a migration mechanism.

## 8. Export-to-Reconstruction Fidelity

**Export-to-Reconstruction Fidelity (ERF)** measures whether an exported archive can recreate enough historical context for later research or workflow continuity: what was asked, what Gemini answered, what files or data were referenced, what action was taken, and what session or surface produced it. If not, “exportable” is only nominal portability.

## 9. Session-to-Action Lineage Fidelity

The new Ask Gemini surface can search Workspace data, draft content, and manage tasks and events. **Session-to-Action Lineage Fidelity (SALF)** measures whether actions remain tied to the Ask Gemini session that proposed or initiated them.

```text
SESSION
-> RETRIEVED WORKSPACE CONTEXT
-> GENERATED DECISION / DRAFT
-> TASK / CALENDAR / CONTENT ACTION
```

A successor surface with action capability needs stronger lineage than a passive side panel.

## 10. Capability-Surface Continuity Fidelity

The new surface inherits many old side-panel functions but not necessarily every surface behavior. **Capability-Surface Continuity Fidelity (CSCF)** measures which capabilities were retained, moved, removed, replaced, or renamed. Gems are one concrete example: removed from the Chat side-panel path while remaining in other Workspace app side panels.

## 11. Gems Availability Continuity Fidelity

**Gems Availability Continuity Fidelity (GACF)** measures whether reusable Gemini configurations remain discoverable and correctly scoped after a host-surface migration.

```text
GEM EXISTS != GEM AVAILABLE HERE
```

That distinction matters for Skills/Gems benchmarking.

## 12. New Failure Classes

1. **Historical Continuity Illusion** - users assume history migrated because the successor surface feels continuous.
2. **Export Namespace Mislocation** - users search Google Chat exports instead of Gemini in Workspace.
3. **Archive-is-Migration Confusion** - a downloadable archive is treated as if it had been imported into the new session system.
4. **Surface-Origin Collapse** - exported conversations no longer clearly identify their originating surface.
5. **Gems Availability Misread** - a Gem appears deleted because one access path disappeared.
6. **New-Session Context Inflation** - users assume a new Ask Gemini session inherited retired-side-panel context.
7. **Action-Lineage Break** - a task, event, or content action cannot be tied to its originating session.
8. **Export Timing Gap** - an export archive may not include changes occurring during archive generation.
9. **Organizational Policy Divergence** - admin export and user-download rights differ inside the same workspace.
10. **Product-Language Migration Drift** - English-language users move first while other language users temporarily remain on the old surface, producing parallel persistence regimes.

## 13. Deep Drift Benchmark: Side-Panel-to-Ask-Gemini Migration Round Trip

Controlled corpus:

```text
OLD CHAT-SIDEPANEL CONVERSATION A
OLD CHAT-SIDEPANEL CONVERSATION B
ONE GEM USED FROM CHAT
ONE FILE REFERENCED
ONE ACTION ITEM CAPTURED
```

Test sequence: record old surface identity; export/download Gemini history; locate it under Gemini in Workspace; verify old side-panel conversations; open Ask Gemini; confirm old conversations are not natively present; create a new session; manually reintroduce one historical context item; perform one Workspace action; test action attribution; check Gems availability across surfaces; compare old and new persistence behavior.

Measure historical export coverage, surface-origin traceability, namespace discoverability, manual reconstruction burden, action lineage, Gem availability continuity, and human reconstruction minutes.

## 14. New Metrics

### Historical Export Coverage

```text
HEC = recoverable historical conversations / all controlled known side-panel conversations
```

### Surface Origin Attribution Coverage

```text
SOAC = exported conversations attributable to exact originating surface / all controlled exported conversations
```

### Namespace Discoverability Rate

```text
NDR = reviewers able to locate the correct export category without prior hidden knowledge / all controlled retrieval attempts
```

### Session Reconstruction Coverage

```text
SRC = old-context elements reconstructable inside a new Ask Gemini session / all controlled historical context elements
```

### Session-to-Action Attribution Coverage

```text
SAAC = new Workspace actions attributable to exact Ask Gemini session / all controlled actions
```

## 15. Why This Matters for Memory

This is directly a memory architecture update. The platform now contains at least three distinct continuity layers:

```text
OLD SIDE-PANEL HISTORY
EXPORTABLE ARCHIVE
NEW ASK GEMINI SESSION HISTORY
```

The new surface improves session organization while not inheriting the previous surface's historical memory. Deep Drift should reject the lazy phrase “Gemini remembers my Chat work.” The correct question is: **Which Gemini surface, under which persistence regime, and does that history migrate, export, or merely remain somewhere else?**

## 16. Why This Matters for Skills and Gems

Gems remain available in other Workspace app side panels but disappear from the Chat side-panel path being replaced. Reusable AI configurations therefore have surface-availability state independent of existence.

```text
GEM EXISTS
GEM ENABLED
GEM AVAILABLE IN SURFACE A
GEM UNAVAILABLE IN SURFACE B
```

## 17. Why This Matters for Mini-App and Agent Builders

Ask Gemini in Chat is not itself a mini-app builder, but it behaves like an orchestration surface: search Workspace, create content, summarize, schedule, manage tasks, and organize sessions. That makes the session a lightweight operational workspace. If future Gems or agentic interfaces return to this surface, the migration boundary becomes even more consequential.

## 18. Why This Matters for Chat-to-Document Export

```text
CHAT HISTORY EXPORT != DOCUMENT EXPORT
```

A creator workflow may preserve a generated DOCX or PDF while losing the conversation history that led to it. The final artifact and the historical conversation are separate portability objects. Deep Drift should require explicit links between them.

## 19. Why This Matters for DOCX / PDF Generation

A report created from the old Chat side panel may survive as DOCX/PDF after the side-panel history fails to migrate.

```text
OLD SIDE-PANEL SESSION
-> REPORT DRAFT
-> DOCX / PDF
-> SURFACE RETIRED
-> HISTORY ARCHIVE SEPARATE
```

Static artifact provenance cannot depend on future access to the original AI UI.

## 20. Why This Matters for Copy-Paste / Export Fixes

The transition replaces UI continuity with archive portability.

```text
OLD: OPEN HISTORY IN SAME UI
NEW: EXPORT -> LOCATE CORRECT NAMESPACE -> READ ARCHIVE -> RECONSTRUCT CONTEXT
```

The important metric is not clicks. It is semantic reconstruction burden.

## 21. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | **Major new-to-log item:** old Gemini-in-Chat side-panel history does not migrate to Ask Gemini; history must be exported/downloaded separately. |
| Skills / Gems | Material surface-availability change: Gems disappear from the Chat side-panel path while remaining in side panels of other Workspace apps. |
| Mini-app builders | No newer category-displacing builder launch surfaced in this pass; Ask Gemini is better understood as an operational orchestration surface. |
| Chat-to-document export | New portability distinction: historical conversation export and generated artifact export are separate objects with separate lifecycles. |
| DOCX / PDF generation | No newer direct generation release displaced already logged items; static artifacts should not depend on successor-UI access for provenance. |
| Copy-paste/export fixes | Material archival shift: historical continuity is provided through export/download rather than automatic surface migration. |
| Broader creator workflow | **Major trend:** platforms are redesigning interaction surfaces faster than they are preserving cross-surface historical continuity. |

## 22. Cross-Platform Check

**Google:** The strongest unlogged delta is the Ask Gemini in Chat migration boundary. Google confirms non-migration of old history, exportability, a new individual-session model, relocation of Gems access, and rollout beginning 26 August 2026.

**OpenAI:** No newer category-displacing public release surfaced beyond the Work/Library/template/plugin updates already entered into Deep Drift.

**Anthropic:** No newer creator-workflow change displaced the stateless Playground transition already logged in the previous research entry.

**Microsoft:** No newer creator release displaced the Word/Excel/PowerPoint agent and Python-in-Excel changes already logged.

**Databricks:** No newer creator-runtime change displaced the Genie grid and visualization retrieval changes already logged.

**Notion:** The 28 August Suggested Edits governance release remains the latest material change already represented in the ledger.

## 23. Deep Drift Research Position

The weak description is:

> Google moved Gemini in Chat to a new interface.

The serious description is:

> Google has introduced a new persistent session-based Gemini surface inside Chat while explicitly declining to migrate the historical conversations from the predecessor surface, forcing continuity to depend on export archives whose namespace, permissions, and lifecycle differ from the new interaction system.

Therefore:

```text
NEW SURFACE != OLD MEMORY
EXPORTABLE != MIGRATED
SESSION CONTINUITY != HISTORICAL CONTINUITY
GEM EXISTS != GEM ACCESSIBLE HERE
CHAT PRODUCT != CHAT EXPORT NAMESPACE
```

The serious Deep Drift requirement is:

> **Every LLM surface migration should preserve explicit old/new surface identities, migration status, conversation export pathways, export namespace, feature relocations, reusable-agent availability, session/action lineage, and the exact boundary between history that migrates, history that exports, and history that remains inaccessible in the successor UI.**

Humans keep building “continuous AI assistants” on top of discontinuous product surfaces. The assistant may remember your preferences, but the interface that supposedly houses its memory can still be replaced like office furniture. Very futuristic.

## 24. Evidence Boundary

Platform facts in this report are grounded in Google Workspace's first-party release note **Introducing Ask Gemini in Chat: your new partner in productivity**, published 19 August 2026 and rolling out from 26 August 2026, plus Google Account Help documentation on Takeout/export behavior.

Google states that Ask Gemini in Chat replaces many functions of the previous Gemini side panel, supports individual sessions, removes Gems access from that Chat-side-panel path, does not migrate historical side-panel conversations into the new surface, and allows admins or permitted users to export/download conversation history. Google further states that this history is filed under **Gemini in Workspace**, not Google Chat, in export tools.

SMCHPF, SHIF, CECF, HNF, ONSCF, ERF, SALF, CSCF, GACF, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Google Workspace Updates, **Introducing Ask Gemini in Chat: your new partner in productivity**, 19 August 2026.  
   https://workspaceupdates.googleblog.com/2026/08/ask-gemini-in-chat.html

2. Google Account Help, **How to download your Google data**, checked 30 August 2026.  
   https://support.google.com/accounts/answer/3024190

3. OpenAI Help Center, **ChatGPT Release Notes**, checked 30 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

4. Anthropic Help Center, **How do I use the playground?**, checked 30 August 2026.  
   https://support.claude.com/en/articles/8606378-how-do-i-use-the-playground

5. Notion, **What's New**, checked 30 August 2026.  
   https://www.notion.com/releases

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
