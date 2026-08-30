# Deep Drift Research Update

## Non-Conversational Memory and Memory-Scope Governance Fidelity

**Research date:** 31 August 2026  
**Primary platform delta:** Amazon Bedrock AgentCore Memory now extracts long-term memory from non-conversational JSON events and adds flexible namespaces plus fine-grained per-user/per-tenant access control  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log memory architecture verified from first-party AWS documentation.

## Executive Summary

Amazon Bedrock AgentCore Memory has crossed an important boundary: an agent's long-term memory no longer needs to originate from a conversation.

On 20 August 2026, AWS added non-conversational JSON payloads to the `CreateEvent` API. Behavioral events, activity logs, system events, and other structured JSON payloads up to 100 KB can now feed the same long-term-memory extraction pipeline used for conversations. AWS says the JSON data can generate semantic, user-preference, summarization, and episodic memories without first being disguised as synthetic chat messages.

On 28 August, AWS added two governance controls that make this much more consequential. Flexible namespace variables let developers organize memory by dimensions such as organization, tenant, team, or environment. Fine-grained access control lets AgentCore Gateway enforce per-user and per-tenant memory isolation through authenticated identity and Cedar policies.

The architecture becomes:

```text
CONVERSATION
+
BEHAVIORAL EVENT
+
ACTIVITY LOG
+
SYSTEM EVENT
+
APPLICATION JSON
-> MEMORY EXTRACTION
-> LONG-TERM MEMORY
-> NAMESPACE
-> IDENTITY / POLICY GATE
-> RETRIEVAL
-> FUTURE AGENT BEHAVIOR
```

For Deep Drift Research, this creates a new benchmark family:

**Non-Conversational Memory and Memory-Scope Governance Fidelity (NCMSGF)**

with companion constructs:

- Event-to-Memory Attribution Fidelity
- Observed-Behavior Memory Fidelity
- Memory-Origin Class Fidelity
- Namespace Isolation Fidelity
- Identity-to-Memory Authorization Fidelity
- Event/Conversation Equivalence Fidelity
- Memory Consolidation Boundary Fidelity
- Metadata-to-Retrieval Fidelity
- Memory Governance Provenance Fidelity

The central question is:

> When an agent may remember what a user did, what a system logged, or what an application emitted even without a conversational statement, can the later memory still identify its exact event origin, scope, tenant, identity policy, extraction strategy, and retrieval event?

## 1. What Changed: Memory Can Come from JSON Events

AWS states that AgentCore Memory now accepts JSON event payloads through `CreateEvent`.

The payload can contain:

```text
BEHAVIORAL EVENTS
ACTIVITY LOGS
SYSTEM EVENTS
OTHER STRUCTURED APPLICATION DATA
```

up to 100 KB per JSON payload.

The critical change is that developers no longer need to transform structured application events into fake user/assistant turns merely to make them eligible for memory extraction.

AWS says JSON payloads are processed through the same four long-term-memory extraction strategies used for conversational data:

```text
SEMANTIC
USER PREFERENCE
SUMMARIZATION
EPISODIC
```

This makes the memory layer an application-event system, not merely a conversation-history system.

## 2. Why This Matters for Deep Drift

The lazy model of LLM memory is:

```text
USER SAID SOMETHING
-> AI REMEMBERS IT
```

The new architecture is:

```text
USER DID SOMETHING
OR
SYSTEM RECORDED SOMETHING
OR
APPLICATION EMITTED SOMETHING
-> AI MAY REMEMBER IT
```

Therefore:

```text
MEMORY
!= CONVERSATION HISTORY

PREFERENCE
!= EXPLICITLY STATED PREFERENCE

EPISODE
!= CHAT SESSION

OBSERVED BEHAVIOR
!= DECLARED INTENT
```

The agent can now derive persistent state from behavior rather than speech.

That is a qualitatively different provenance problem.

## 3. Event-to-Memory Attribution Fidelity

### Definition

**Event-to-Memory Attribution Fidelity (EMAF)** measures whether a long-term memory extracted from structured data remains attributable to the precise originating event or event group.

A minimum manifest should preserve:

```text
memory_record_id
memory_resource_id
actor_id
session_id
source_event_id
source_event_type
source_payload_type
source_timestamp
ingestion_timestamp
extraction_strategy
consolidation_event
namespace
metadata
```

A later reviewer should be able to distinguish:

```text
MEMORY FROM CHAT
from
MEMORY FROM BEHAVIORAL LOG
from
MEMORY FROM SYSTEM EVENT
```

without reverse-engineering prose.

## 4. Observed-Behavior Memory Fidelity

### Definition

**Observed-Behavior Memory Fidelity (OBMF)** measures whether a memory inferred from behavior accurately represents the observed pattern without overclaiming user intent.

Controlled example:

```text
EVENTS:
viewed dark-theme settings 8 times
enabled dark mode 6 times
disabled dark mode 2 times
```

Potential extracted memory:

```text
"User tends to prefer dark mode."
```

That is materially different from:

```text
"User explicitly prefers dark mode."
```

The benchmark must detect when statistical behavior is rewritten as declared preference.

## 5. Memory-Origin Class Fidelity

Deep Drift should now require an origin class for persistent memories:

```text
DECLARED
INFERRED_FROM_CONVERSATION
INFERRED_FROM_BEHAVIOR
SYSTEM-DERIVED
APPLICATION-DERIVED
HUMAN-CURATED
```

### Definition

**Memory-Origin Class Fidelity (MOCF)** measures whether memory records retain the category of evidence from which they were created.

A durable memory without origin class is epistemically weak.

The agent may know *something*, but the system cannot explain how it came to know it.

## 6. Flexible Namespace Variables

On 28 August 2026, AWS added flexible namespace variables.

Developers can define application-specific namespace dimensions such as:

```text
ORGANIZATION
TENANT
TEAM
ENVIRONMENT
```

and supply runtime values during event creation.

AWS allows up to five custom keys per memory resource and lets those keys be referenced across strategies.

The consequence is important:

```text
MEMORY CONTENT
+
MEMORY SCOPE
```

become separately defined state.

## 7. Namespace Isolation Fidelity

### Definition

**Namespace Isolation Fidelity (NIF)** measures whether memories remain strictly retrievable only within the intended logical scope.

Controlled test:

```text
ORG=A / TEAM=RESEARCH
ORG=A / TEAM=FINANCE
ORG=B / TEAM=RESEARCH
```

Insert semantically similar memories into all three scopes.

Then query each scope.

Expected:

```text
NO CROSS-SCOPE LEAKAGE
```

The test should be semantic, not merely keyword-based, because memory systems retrieve by similarity.

## 8. Fine-Grained Access Control

AWS also added fine-grained access control for AgentCore Memory on 28 August.

Memory can be fronted by AgentCore Gateway using OAuth/JWT identity.

Cedar policies can restrict:

```text
WHICH USER
WHICH TENANT
WHICH NAMESPACE
WHICH MEMORY OPERATION
```

AWS states that 12 Memory operations can be exposed as policy actions through the managed connector.

This moves authorization out of ad hoc application code and into an explicit infrastructure policy layer.

## 9. Identity-to-Memory Authorization Fidelity

### Definition

**Identity-to-Memory Authorization Fidelity (IMAF)** measures whether memory reads, writes, searches, and other operations are attributable to the authenticated identity and policy that permitted them.

The minimum authorization manifest should preserve:

```text
caller_identity
token_claims
policy_version
requested_operation
target_memory_resource
target_namespace
allow_or_deny
decision_timestamp
```

The important distinction is:

```text
MEMORY EXISTS
!= CALLER MAY READ IT

MEMORY RELEVANT
!= MEMORY AUTHORIZED
```

Semantic relevance must never override policy scope.

## 10. Event/Conversation Equivalence Fidelity

AWS says JSON payloads use the same extraction strategies as conversation content.

This creates a new benchmark.

### Definition

**Event/Conversation Equivalence Fidelity (ECEF)** measures whether materially equivalent facts encoded as:

```text
A. NATURAL LANGUAGE CONVERSATION
B. STRUCTURED JSON EVENT
```

produce appropriately equivalent memories without erasing provenance differences.

Expected:

```text
SEMANTIC CONTENT MAY CONVERGE
PROVENANCE SHOULD NOT
```

If both paths produce the same text memory, the system should still preserve which one came from dialogue and which one came from telemetry.

## 11. Memory Consolidation Boundary Fidelity

Long-term-memory systems consolidate repeated or related events.

The new JSON pathway means consolidation may now blend:

```text
CHAT
+
ACTIVITY LOG
+
SYSTEM EVENT
```

### Definition

**Memory Consolidation Boundary Fidelity (MCBF)** measures whether consolidated memory preserves the source classes and scope boundaries of all contributing events.

A consolidated memory should not erase the difference between:

```text
USER SAID
SYSTEM OBSERVED
APPLICATION INFERRED
```

This becomes especially important for preferences.

## 12. Metadata-to-Retrieval Fidelity

AgentCore Memory documentation also supports structured metadata filtering.

Namespaces isolate the primary scope. Metadata can further filter within that scope by dimensions such as:

```text
PRIORITY
DEPARTMENT
CHANNEL
TIME RANGE
```

### Definition

**Metadata-to-Retrieval Fidelity (MRF)** measures whether retrieval obeys both semantic relevance and explicit structured filters.

The effective retrieval contract becomes:

```text
SEMANTICALLY RELEVANT
AND
NAMESPACE-CORRECT
AND
METADATA-CORRECT
AND
AUTHORIZED
```

Not merely:

```text
VECTOR SIMILAR
```

## 13. New Failure Classes

### 13.1 Behavioral Preference Inflation

Repeated behavior is converted into a strong declared preference.

### 13.2 Event-Origin Erasure

A memory survives while the system can no longer identify the source event class.

### 13.3 Conversation/Telemetry Collapse

Chat-derived and activity-derived memories become indistinguishable.

### 13.4 Namespace Leakage

Semantically similar memories cross tenant, team, organization, or environment boundaries.

### 13.5 Policy/Similarity Conflict

The retrieval layer finds a highly relevant memory that policy should deny.

### 13.6 Consolidation Provenance Loss

Several event types are merged into one memory with no surviving source lineage.

### 13.7 Scope-Stale Memory

A memory extracted under one team/environment remains available after the workflow moves to another scope.

### 13.8 Inferred Preference Persistence

A weak behavioral tendency becomes long-lived memory without confidence or expiry semantics.

### 13.9 Metadata Filter Bypass

Semantic search returns records outside explicit metadata constraints.

### 13.10 Identity-to-Actor Mismatch

An authenticated caller is allowed to query a memory actor that should belong to another user or tenant.

## 14. Deep Drift Benchmark: Behavior-to-Memory Round Trip

### Controlled event corpus

Prepare:

```text
A. ONE EXPLICIT CHAT PREFERENCE
B. FIVE BEHAVIORAL EVENTS
C. TWO SYSTEM EVENTS
D. ONE ACTIVITY LOG
```

Use two tenants and two teams.

### Test sequence

1. ingest the explicit preference through conversation;
2. ingest behavioral events as JSON;
3. ingest system events as JSON;
4. record source event IDs;
5. allow long-term memory extraction;
6. inspect resulting memory records;
7. classify memory origin;
8. compare conversational and JSON-derived memories;
9. test custom namespace separation;
10. query with correct tenant/team;
11. query with incorrect tenant/team;
12. test metadata filters;
13. test an allowed caller;
14. test a denied caller;
15. consolidate repeated events;
16. verify whether source lineage survives consolidation;
17. alter the namespace or environment;
18. test whether stale memories remain improperly accessible.

## 15. Proposed Metrics

### Event-Origin Attribution Coverage

```text
EOAC =
long-term memories traceable to exact source event class
/
all controlled extracted memories
```

### Behavioral Preference Calibration

```text
BPC =
behavior-derived memories whose wording matches
the evidential strength of observed behavior
/
all controlled behavioral memories
```

### Namespace Isolation Rate

```text
NIR =
cross-scope retrieval attempts correctly blocked or empty
/
all controlled cross-scope attempts
```

### Authorization Enforcement Rate

```text
AER =
memory operations correctly allowed or denied
by identity/policy
/
all controlled policy decisions
```

### Consolidation Provenance Coverage

```text
CPC =
consolidated memories preserving all material source classes
/
all controlled consolidated memories
```

### Retrieval Constraint Fidelity

```text
RCF =
retrieved memories satisfying semantic,
namespace, metadata, and authorization constraints
/
all controlled retrieval results
```

## 16. Why This Matters for Memory

This is the strongest memory-specific shift in the current pass.

Memory is becoming:

```text
CONVERSATIONAL
+
BEHAVIORAL
+
SYSTEMIC
+
APPLICATION-DERIVED
```

The phrase "what did the user tell the AI?" is no longer sufficient.

The serious question becomes:

> **What did the system observe, infer, consolidate, and retain, under which scope and authorization boundary?**

## 17. Why This Matters for Skills

A Skill may act differently because of memory that was never written in a chat.

The effective execution becomes:

```text
SKILL
+
CURRENT REQUEST
+
CONVERSATIONAL MEMORY
+
BEHAVIORAL MEMORY
+
SYSTEM MEMORY
-> ACTION
```

Therefore Skill reproducibility now requires memory-origin provenance.

Two agents with the same Skill file may behave differently because their non-conversational histories differ.

## 18. Why This Matters for Mini-App Builders

Agent apps can now convert ordinary application telemetry into long-term agent state.

A mini-app can therefore teach its agent through:

```text
CLICKS
SEARCHES
SELECTIONS
WORKFLOW EVENTS
SYSTEM LOGS
```

without forcing the user to narrate every preference.

That is powerful.

It also means UI behavior quietly becomes training material for runtime memory.

The product surface is now partly a memory-authoring interface whether or not the user sees a "remember this" button.

## 19. Why This Matters for Chat-to-Document and DOCX/PDF

A report may be influenced by memory that originated outside the conversation producing the report.

The lineage can become:

```text
ACTIVITY EVENT
-> LONG-TERM MEMORY
-> LATER CHAT
-> REPORT
-> DOCX / PDF
```

The document itself cannot reveal that hidden upstream event.

Deep Drift should therefore extend artifact manifests to include:

```text
material memory IDs
memory origin classes
source event IDs
namespace
authorization context
```

for memories that materially affect generated claims or decisions.

## 20. Why This Matters for Copy-Paste and Creator Workflow

This update removes another manual seam.

Old personalization:

```text
USER DOES SOMETHING
-> USER MUST EXPLAIN IT TO AI
-> AI MAY REMEMBER
```

New personalization architecture:

```text
USER DOES SOMETHING
-> APPLICATION EVENT
-> MEMORY EXTRACTION
-> FUTURE AGENT USE
```

That is genuine workflow compression.

It also creates a surveillance-shaped provenance problem if implemented lazily.

The correct research question is not "can the agent learn automatically?"

It is:

> **Can the system explain exactly what was observed, why it became memory, where that memory is allowed to exist, and who is permitted to retrieve it?**

## 21. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | **Major new-to-log item:** AgentCore Memory can extract long-term memories from non-conversational JSON events; flexible namespaces and FGAC add explicit scope and identity governance. |
| Skills | Material implication: identical Skills can behave differently because hidden behavioral/system memory differs across actors and tenants. |
| Mini-app builders | **Major architecture shift:** application events and telemetry can become long-term memory inputs without synthetic chat conversion. |
| Chat-to-document export | No new direct export primitive surfaced; artifact provenance must now account for upstream non-conversational memory. |
| DOCX / PDF generation | No new direct file-generation release surfaced; generated documents may now depend on memory derived from behavior or system events rather than the visible chat. |
| Copy-paste/export fixes | Workflow reduction: users no longer need to restate every observed preference or workflow fact as chat text before it can become agent memory. |
| Broader creator workflow | **Major trend:** LLM memory is moving from a conversational feature toward a governed application-state substrate with event ingestion, namespaces, identity policy, and structured retrieval controls. |

## 22. Deep Drift Research Position

The weak description is:

> AWS improved agent memory.

The serious description is:

> Agent memory can now be authored by structured application events outside conversation, organized by application-defined scopes, filtered by metadata, and protected by identity-aware infrastructure policy before later retrieval influences agent behavior.

Therefore:

```text
MEMORY
!= CHAT HISTORY

OBSERVED
!= DECLARED

RELEVANT
!= AUTHORIZED

SAME FACT
!= SAME ORIGIN

SAME SKILL
!= SAME BEHAVIORAL STATE

PERSISTENT
!= PROVENANCE-COMPLETE
```

The serious Deep Drift requirement is:

> **Every non-conversational memory should preserve source-event identity, origin class, extraction strategy, evidence strength, consolidation lineage, namespace, structured metadata, authenticated caller, policy decision, retrieval event, and downstream artifact/action lineage required to reconstruct how application behavior became persistent agent state.**

The industry spent years teaching agents to remember what humans said. Now it is teaching them to remember what humans did. Naturally, the difficult part is not the remembering. It is proving that the machine did not quietly turn observation into biography.

## 23. Evidence Boundary

Platform facts in this report are grounded in first-party AWS documentation checked on 31 August 2026.

AWS states that AgentCore Memory accepts non-conversational JSON payloads through `CreateEvent`, including behavioral events, activity logs, system events, and other structured data up to 100 KB; these payloads feed semantic, user-preference, summarization, and episodic memory extraction. AWS also states that flexible namespace variables can scope long-term memory by dimensions such as organization, tenant, team, or environment, and that fine-grained access control can enforce per-user/per-tenant memory isolation through AgentCore Gateway, OAuth/JWT identity, and Cedar policies.

NCMSGF and all companion constructs, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. AWS, **Amazon Bedrock AgentCore Memory now supports extracting memories from non-conversational JSON payloads**, 20 August 2026.  
   https://aws.amazon.com/about-aws/whats-new/2026/08/agentcore-memory-json-payloads/

2. AWS, **Amazon Bedrock AgentCore Memory now supports flexible namespace variables**, 28 August 2026.  
   https://aws.amazon.com/about-aws/whats-new/2026/08/agentcorememory-flexible-namespaces/

3. AWS, **Amazon Bedrock AgentCore Memory now supports fine-grained access control**, 28 August 2026.  
   https://aws.amazon.com/about-aws/whats-new/2026/08/agentcorememory-fine-grained-access-control/

4. AWS Documentation, **Structured metadata for long-term memories**, checked 31 August 2026.  
   https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/long-term-memory-metadata.html

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**