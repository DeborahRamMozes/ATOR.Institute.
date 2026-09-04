# Deep Drift Model Watch Log

## Claude memory, past-chat search, and Chat ↔ Cowork continuity

**Detected:** 2026-09-04 13:23 Asia/Jakarta  
**Provider:** Anthropic  
**Product / model surface:** Claude app, Claude Desktop, Claude Mobile, Claude Cowork  
**Announcement / release date:** 2026-08-25  
**Retest priority:** **CRITICAL**  
**Evidence strength:** **High — primary Anthropic release notes and product documentation**

## Exact change

Anthropic released an improved Claude memory experience in which memory is stored as editable topic-level entries rather than only a legacy daily synthesis. The new system can carry remembered context across new conversations and, when Cowork runs in Anthropic's cloud, between Claude Chat and Claude Cowork tasks.

Separately, paid-plan users can explicitly ask Claude to search prior conversations. Anthropic documents this as retrieval-augmented generation (RAG) exposed as a visible tool call. Search can cover all non-project chats, while searches initiated inside a project are restricted to conversations within that specific project.

Anthropic also documents project-local memory: each project has its own separate memory space and project summary. This means the current system is not documented as unrestricted cross-project search or one global searchable 'brain' spanning every project.

## Rollout status

**Released / migrated experience.** Anthropic's September 2026 help documentation states that users have been migrated from the legacy memory experience, with a temporary legacy-memory export option available until **2026-09-09** for users who believe information was lost during migration.

## Affected plans and surfaces

### Memory

- **Free:** on by default.
- **Pro:** on by default.
- **Max:** on by default.
- **Team:** off by default; organization/user controls apply.
- **Enterprise:** off by default; an owner must enable it before members can enable/use it.
- Memory is available on web, Claude Desktop, and Claude Mobile.
- Memory is shared between Chat and **cloud-run Cowork**.
- Local Cowork sessions do **not** use the shared memory layer.

### Past-chat search

Available on **Pro, Max, Team, and Enterprise** on web, Claude Desktop, and Claude Mobile.

Documented search boundaries:

1. From chats outside projects: Claude may search conversations outside projects.
2. From within a project: search is restricted to conversations in that specific project.
3. Incognito chats are excluded from searchable history and do not contribute to memory.
4. Enterprise organizations using customer-managed encryption keys cannot use past-chat search because conversation content is encrypted.

## Pricing before / after

No separate pricing change is documented for this feature. Access depends on existing Claude plan entitlements and organization settings.

## Official sources

1. Anthropic Claude release notes, **August 25, 2026 — “Memory in Claude Cowork, editable topics, and a sensitive topics setting”**  
   https://support.claude.com/en/articles/12138966-release-notes

2. Anthropic Help Center, **“Use Claude’s chat search and memory to build on previous context”**  
   https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context

## Official fact vs Deep Drift inference

### Official fact

Anthropic states that:

- Claude can search previous conversations and reference relevant details in new chats.
- Past-chat search uses RAG and appears as a tool call.
- Search is available to paid plans.
- Search covers non-project chats globally but remains project-bounded when operating inside an individual project.
- Claude memory is stored as individual editable topics.
- Each project has its own distinct memory space and project summary.
- Cloud Cowork and Chat share memory bidirectionally.
- Free, Pro, and Max have memory on by default; Team and Enterprise default to off at the organization level.
- Users can inspect, edit, delete, pause, reset, import, and export memory.
- Past-chat references may include citations linking back to source conversations.

### Deep Drift inference

This is a significant architectural shift from simple conversational context toward a layered continuity system consisting of at least:

1. explicit retrieval over historical chats,
2. persistent synthesized memory topics,
3. project-scoped memory spaces,
4. shared memory between Chat and cloud Cowork,
5. provenance links back to prior conversations.

However, Anthropic's own documented boundaries are crucial. The current product should **not** be described as unrestricted cross-project or cross-folder historical cognition. A project can search within itself, but the documentation does not establish free traversal across all projects from one project context.

The distinction matters for Deep Drift because “Claude remembers” and “Claude can locate the exact historical source node across arbitrary project boundaries” are different capabilities.

## Capability classes affected

- Memory and continuity
- Own-chat-history retrieval
- Historical conversation search
- Project memory
- Cross-surface continuity
- Indexing and provenance
- Retrieval transparency
- Persistent user preference/context modeling
- Agent/Cowork continuity
- Access normalization by plan and organization policy

## Why earlier Deep Drift results may now be stale

Any Claude test performed before this memory redesign may understate Claude's ability to:

- resume earlier work without the user manually pasting context,
- retrieve exact earlier conversations,
- preserve user preferences across sessions,
- maintain project-specific continuity,
- transfer remembered context between Chat and cloud Cowork,
- cite the historical conversation that supplied recalled information.

Conversely, tests that assumed Claude had a single global memory across all projects may overstate the capability and must be corrected against the documented project boundary.

## Existing Deep Drift tests to rerun

### 1. Own-chat-history retrieval

Ask Claude for a uniquely identifiable fact, instruction, title, phrase, or decision from a prior conversation without supplying the old chat.

Record:
- whether Claude invokes past-chat search,
- retrieval precision,
- whether the correct conversation is cited,
- whether it fabricates continuity when the target is absent.

### 2. Project-bounded retrieval

Place distinct facts in Project A and Project B. From within Project A, ask for the Project B fact.

Expected documented boundary: Claude should not behave as though Project B is transparently searchable from Project A unless another explicitly available mechanism supplies it.

### 3. Non-project global chat search

Create multiple standalone chats with closely related but deliberately conflicting details. Ask Claude to recover one exact historical node.

Measure:
- precision,
- contamination between chats,
- timestamp/source discrimination,
- citation fidelity.

### 4. Memory-topic persistence

State a stable working preference, then start a new conversation and test whether Claude applies it without re-feeding.

Repeat after:
- editing the saved topic,
- deleting the topic,
- pausing memory,
- resuming memory.

### 5. Chat ↔ cloud Cowork transfer

Store a benign project/work preference in Chat, then start a cloud Cowork task that depends on it. Reverse the direction afterward.

Measure whether the shared memory survives correctly in both directions without importing irrelevant conversation content.

### 6. Provenance test

When Claude uses a historical chat, inspect whether the supplied citation links to the correct source conversation rather than merely producing a plausible recollection.

### 7. Temporal correction test

Give Claude a fact, later explicitly correct it in another conversation, then ask for the current version.

Measure whether memory updates propagate or whether stale historical retrieval overrides the corrected memory topic.

## New test to add

### DD-CMCB-01 — Claude Memory Compartment Boundary

**Objective:** determine whether Claude's new continuity behaves as a correctly compartmentalized memory-and-retrieval architecture or collapses unrelated historical nodes.

**Test corpus:**
- 3 standalone chats,
- 3 separate projects,
- 1 cloud Cowork task,
- deliberately overlapping vocabulary,
- one unique fact per compartment,
- one correction event,
- one deleted memory item.

**Pass conditions:**
- exact retrieval from permitted scope,
- no cross-project leakage when scope should be isolated,
- correct source citation,
- latest correction wins,
- deleted memory is not treated as current persistent knowledge,
- Chat ↔ cloud Cowork transfer occurs only through documented shared-memory behavior.

## Variables to hold constant

- Claude model/version
- plan tier
- web/Desktop/Mobile surface
- Cowork local vs cloud execution
- project vs non-project location
- memory toggle state
- past-chat-search toggle state
- incognito status
- organization policy settings
- identical retrieval prompts
- time elapsed between write and retrieval

## Likely confounders

- staged account rollout
- legacy-memory migration state
- model upgrades independent of memory architecture
- hidden ranking changes in RAG retrieval
- plan-specific entitlements
- Enterprise encryption or retention policy
- user-edited memory topics
- deleted/expired source conversations
- local Cowork sessions not sharing cloud memory
- ambiguity between “remembered topic” and “retrieved prior chat”

## Deep Drift conclusion

**Retest priority: CRITICAL.**

Anthropic now provides one of the clearest officially documented separations between persistent memory and explicit historical-chat retrieval. That makes Claude especially useful for Deep Drift's continuity tests because the system exposes at least part of its retrieval behavior as a tool call and provides source-chat citations.

The strongest Deep Drift question is no longer merely **“Does Claude remember?”** It is:

> **Can Claude locate the correct historical node, preserve compartment boundaries, distinguish retrieval from persistent memory, and cite its provenance without inventing continuity?**

That is a materially harder test, and the August 25 architecture warrants a fresh Claude baseline.