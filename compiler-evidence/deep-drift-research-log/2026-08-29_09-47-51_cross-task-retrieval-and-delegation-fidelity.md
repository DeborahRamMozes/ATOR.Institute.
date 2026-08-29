# Deep Drift Research Update

## Cross-Task Retrieval and Delegation Fidelity

**Research date:** 29 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log OpenAI workflow architecture found in the current Codex/ChatGPT changelog. The release itself is dated 26 August 2026; it had not yet been isolated in the Deep Drift ledger as a separate memory-and-retrieval problem.

## Executive Summary

OpenAI's 26 August 2026 ChatGPT/Codex release adds two related workflow capabilities that materially change the structure of long-running agent work:

1. ChatGPT for iOS can **search tasks across titles and conversation content on connected hosts**.
2. Codex CLI can **reference other Codex tasks with @ mentions and ask agents to read, create, or message tasks from the terminal**.

The same iOS release also improves long-thread loading by fetching older history as needed rather than requiring the full thread to load at once.

Together, these changes move the creator workflow from isolated thread continuity toward a searchable and partially addressable **task graph**.

```text
THREAD A
THREAD B
THREAD C
   |
   v
SEARCH ACROSS TASK TITLES + CONVERSATION CONTENT
   |
   v
IDENTIFY RELEVANT TASK
   |
   v
REFERENCE / READ / CREATE / MESSAGE OTHER TASK
   |
   v
NEW WORK CONTINUES ACROSS TASK BOUNDARIES
```

For Deep Drift Research, this creates a new benchmark family:

**Cross-Task Retrieval and Delegation Fidelity (CTRDF)**

with companion constructs:

**Task Search Recall Fidelity (TSRF)**  
**Cross-Task Context Transfer Fidelity (CTCTF)**  
**Task Identity and Boundary Fidelity (TIBF)**  
**Historical Pagination Continuity Fidelity (HPCF)**

The central research question is:

> When a platform can search and address prior agent tasks directly, does the system preserve enough identity, chronology, boundary, and source context for old work to be retrieved and reused without silently collapsing distinct conversations into one synthetic memory?

## 1. What Changed

OpenAI's first-party changelog dated 26 August 2026 states that ChatGPT for iOS added:

- task search across titles and conversation content on connected hosts;
- improved loading for long threads, with older history fetched as needed.

The same date's Codex CLI 0.150.0 release adds:

- `@` mentions for referencing other Codex tasks;
- the ability to ask agents to read, create, or message tasks from the terminal.

The release also includes the already-logged selective `/copy` picker for full responses, code blocks, and blockquotes. That copy/export improvement is not treated as new here.

The new research object is the **task graph**, not the copy command.

## 2. Why This Matters for Deep Drift

Long-running AI work has historically been trapped in a primitive structure:

```text
ONE CONVERSATION
=
ONE ISLAND
```

Users remember that a prior conversation exists, but the system may not expose a reliable way to find, address, or reuse it.

The new architecture begins to look different:

```text
TASKS
-> SEARCHABLE
-> ADDRESSABLE
-> REFERENCEABLE
-> ACTIONABLE
```

This is closer to a workspace memory index than ordinary chat history.

But it introduces a new problem.

Once tasks can reference one another, the system needs to preserve whether a fact came from:

```text
CURRENT TASK
PRIOR TASK
SEARCH RESULT
TASK MENTION
NEWLY CREATED TASK
```

Otherwise retrieval becomes invisible context injection.

## 3. New Deep Drift Construct: Cross-Task Retrieval and Delegation Fidelity

### Definition

**Cross-Task Retrieval and Delegation Fidelity (CTRDF)** measures whether an AI system can retrieve and reuse prior task state while preserving the identity, origin, boundary, chronology, and causal role of each referenced task.

A minimum provenance chain is:

```text
CURRENT TASK
-> SEARCH QUERY
-> MATCHED TASK
-> MATCHED TURN / CONTENT
-> CROSS-TASK REFERENCE
-> ACTION TAKEN
-> RESULT IN CURRENT OR TARGET TASK
```

A high-fidelity workflow should make that chain reconstructable.

## 4. Task Search Recall Fidelity

### Definition

**Task Search Recall Fidelity (TSRF)** measures whether a search over titles and conversation content retrieves the materially relevant prior tasks needed for the user's request.

Search quality must be evaluated across:

- exact title matches;
- paraphrased concepts;
- names;
- project vocabulary;
- quoted phrases;
- terms appearing only deep inside long conversations;
- tasks whose title is misleading or generic.

A search system can exist while still failing continuity.

Therefore:

```text
SEARCH AVAILABLE
!=
RELEVANT TASK FOUND
```

## 5. Cross-Task Context Transfer Fidelity

### Definition

**Cross-Task Context Transfer Fidelity (CTCTF)** measures whether information reused from another task retains its original meaning, qualifiers, source context, and local chronology.

Example:

```text
TASK A
"Use version 2 only if the legal review is approved."

TASK B
later asks:
"What version should we ship?"
```

A low-fidelity cross-task retrieval might transfer only:

```text
"Use version 2."
```

while dropping the condition.

The retrieval was technically successful and epistemically wrong.

So:

```text
CONTENT FOUND
!=
CONDITION PRESERVED
```

## 6. Task Identity and Boundary Fidelity

### Definition

**Task Identity and Boundary Fidelity (TIBF)** measures whether the system keeps distinct tasks distinct even when they contain overlapping people, projects, filenames, repositories, or goals.

A useful task identity card should preserve:

```text
task_id
task_title
host
project_or_repo
created_at
updated_at
parent_or_related_task
search_match_location
referenced_by_task
action_type
```

Without task identity, cross-task retrieval becomes a giant flattened memory pool.

That may feel magical until two similarly named projects contaminate one another.

## 7. Historical Pagination Continuity Fidelity

OpenAI also notes that long threads on iOS now load older history as needed.

This sounds like a performance fix.

For Deep Drift it is also a continuity question.

### Definition

**Historical Pagination Continuity Fidelity (HPCF)** measures whether incrementally loaded older history remains complete, correctly ordered, searchable, and causally usable as the platform fetches conversation state in segments.

The platform may store the full history while the client exposes it incrementally.

Therefore:

```text
HISTORY EXISTS
!=
HISTORY CURRENTLY LOADED

HISTORY LOADED
!=
HISTORY SEARCHED

HISTORY SEARCHED
!=
HISTORY USED CORRECTLY
```

## 8. New Failure Classes

### 8.1 Task Search False Negative
A relevant prior task exists but search does not retrieve it.

### 8.2 Generic-Title Suppression
A task with a weak title is under-ranked even though its conversation content is highly relevant.

### 8.3 Cross-Task Condition Loss
A retrieved statement is transferred without the condition, limitation, or exception that governed it.

### 8.4 Task Boundary Collapse
Two distinct tasks with similar content are treated as one continuous project state.

### 8.5 Stale Task Preference
An older superseded task outranks a newer authoritative task.

### 8.6 Cross-Host Identity Drift
A similarly named task on another connected host is treated as the intended task.

### 8.7 Delegation Target Error
An agent reads, creates, or messages the wrong task because task identity was ambiguous.

### 8.8 Cross-Task Mutation Opacity
A task is modified or messaged because another task requested it, but the target task does not preserve the external causal link.

### 8.9 Paginated History Omission
Relevant older turns exist but are not fetched or searched in time to influence the answer.

### 8.10 Search-to-Context Injection Opacity
The model uses information found in another task without exposing that the context came from cross-task retrieval.

## 9. Deep Drift Benchmark: Cross-Task Retrieval Collision Test

### Controlled setup

Create six tasks:

```text
TASK A - Deep Drift memory benchmark
TASK B - Deep Drift memory benchmark revised
TASK C - unrelated project using the phrase "memory benchmark"
TASK D - same project with generic title "notes"
TASK E - old superseded decision
TASK F - final approved decision
```

Seed the tasks with:

- overlapping keywords;
- one contradictory instruction;
- one conditional instruction;
- one fact appearing only in a very old turn;
- one similar project name on another connected host;
- one final decision that supersedes an earlier task.

### Test prompts

Ask the system to:

1. find the final approved decision;
2. identify all tasks discussing the benchmark;
3. retrieve the condition attached to a specific instruction;
4. reference the correct task with `@`;
5. ask an agent to read the target task;
6. create a follow-up task containing only authoritative state;
7. message the original task with the new result.

### Measure

- search recall;
- stale-task rejection;
- task identity accuracy;
- condition preservation;
- host discrimination;
- target-task accuracy;
- causal-link preservation;
- old-history retrieval;
- human correction minutes.

## 10. New Metrics

### Relevant Task Recall

```text
RTR =
materially relevant tasks retrieved
/
all materially relevant tasks
```

### Authoritative Task Selection Accuracy

```text
ATSA =
queries resolved using the authoritative task
/
all controlled queries with stale competing tasks
```

### Cross-Task Condition Preservation

```text
CTCP =
transferred statements retaining governing conditions
/
all condition-sensitive retrieved statements
```

### Task Identity Accuracy

```text
TIA =
cross-task actions executed against intended task
/
all cross-task actions
```

### Historical Retrieval Completeness

```text
HRC =
material old-history facts successfully retrieved
/
all seeded old-history facts
```

### Cross-Task Provenance Visibility

```text
CTPV =
material reused facts visibly attributable
to their source task
/
all material cross-task reused facts
```

## 11. Why This Matters for Memory

This is not conventional personalized memory.

It is **retrievable task memory**.

Deep Drift should distinguish:

```text
USER MEMORY
CONVERSATION MEMORY
TASK HISTORY
TASK INDEX
CROSS-TASK RETRIEVAL
CROSS-TASK ACTION STATE
```

The difference is important.

A platform may fail to "remember" something globally while still being able to search and address the task where the information lives.

That is often better architecture because it preserves source locality.

But only if the task boundary survives retrieval.

## 12. Why This Matters for Skills and Agents

A Skill or agent can now operate in a workspace where prior tasks are addressable objects.

That means procedural systems can potentially coordinate through task references rather than relying on one giant conversation.

The useful abstraction becomes:

```text
SKILL
+ CURRENT TASK
+ REFERENCED TASK SET
+ CROSS-TASK ACTION
+ RESULT
```

This makes orchestration more modular.

It also makes provenance more necessary.

## 13. Why This Matters for Creator Workflow

Creators often work through fragments:

- one task for research;
- one task for drafting;
- one task for review;
- one task for code;
- one task for publication.

Searchable and addressable tasks reduce the human burden of manually hunting old chats.

That is a real improvement.

But the system should not answer:

> "I found it somewhere in your prior work."

It should preserve:

```text
WHICH TASK
WHICH TURN
WHICH HOST
WHICH VERSION
WHICH CONDITION
WHICH LATER TASK SUPERSEDED IT
```

Otherwise the task graph becomes a memory soup with nicer search.

## 14. Why This Matters for Chat-to-Document and Export

No new direct DOCX/PDF generation feature displaced the previously logged file-generation changes in this scan.

But cross-task retrieval changes artifact provenance.

A document assembled from multiple tasks should record:

```text
artifact_id
source_task_ids
source_turn_ids
task_versions_or_timestamps
search_query
selection_order
supersession_state
```

A report built from five prior conversations is not properly sourced by saying:

```text
"based on previous chats"
```

That phrase should be retired with prejudice.

## 15. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | **Material new-to-log architecture:** task search across titles and conversation content, plus incremental loading of older long-thread history. |
| Skills / agents | **Material adjacent change:** Codex tasks can reference other tasks through `@` mentions and agents can read, create, or message tasks from the terminal. |
| Mini-app builders | No newer dedicated builder launch found in this pass. |
| Chat-to-document export | No newer direct DOCX/PDF export feature found; cross-task retrieval instead changes the provenance of multi-thread artifact assembly. |
| DOCX / PDF generation | No newer standalone generation feature beyond previously logged Office artifact creation. |
| Copy-paste / export fixes | The August 26 Codex `/copy` picker remains already logged and is not repeated as the primary finding here. |
| Broader creator workflow | The workspace is moving from isolated conversations toward a searchable, addressable task graph with cross-task agent operations. |

## 16. Cross-Platform Check

### OpenAI

The strongest unlogged item in this pass is the combination of:

- task search across titles and conversation content on connected hosts;
- long-thread history fetched incrementally as needed;
- `@` references to other Codex tasks;
- agent operations that can read, create, or message tasks.

These changes are documented in the 26 August 2026 ChatGPT/Codex changelog.

### Microsoft

No Microsoft 365 Copilot release newer than the 25 August batch surfaced in this pass. The major file-generation, Work IQ, connector, and Office-artifact changes were already represented in previous Deep Drift logs.

### Google

No new Google Workspace creator release after the already logged Ask Gemini, Sheets canvas, and late-August workspace changes displaced the present finding.

### Anthropic

No newer category-displacing Claude creator-workflow release surfaced in this pass.

## 17. Deep Drift Research Position

The important threshold is that previous AI work is beginning to become **addressable state** rather than dead transcript storage.

That is a real improvement.

But addressability without boundaries creates a new class of failure.

Therefore:

```text
SEARCHABLE
!=
AUTHORITATIVE

FOUND
!=
CURRENT

REFERENCED
!=
CONTEXT-PRESERVED

CROSS-TASK
!=
BOUNDARY-FREE

OLD HISTORY AVAILABLE
!=
OLD HISTORY CORRECTLY REUSED
```

The serious Deep Drift requirement is:

> **Every cross-task retrieval or delegation event should preserve the source task identity, matched turn, host, chronology, supersession status, conditions attached to the retrieved statement, and the target task affected by any subsequent agent action.**

That is what turns task search into reliable workspace memory rather than merely a faster way to retrieve yesterday's contradiction.

## 18. Evidence Boundary

Platform facts in this report are grounded in OpenAI's first-party ChatGPT & Codex changelog dated 26 August 2026. The page states that ChatGPT for iOS added task search across titles and conversation content on connected hosts, improved long-thread loading by fetching older history as needed, and that Codex CLI 0.150.0 added `@` references to other tasks plus agent operations to read, create, or message tasks.

CTRDF, TSRF, CTCTF, TIBF, HPCF, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. OpenAI, **ChatGPT & Codex changelog**, 26 August 2026.  
   https://learn.chatgpt.com/docs/changelog

2. Microsoft Learn, **Microsoft 365 Copilot release notes**, checked 29 August 2026.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

3. Google Workspace Updates, checked 29 August 2026.  
   https://workspaceupdates.googleblog.com/

4. Anthropic News, checked 29 August 2026.  
   https://www.anthropic.com/news

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
