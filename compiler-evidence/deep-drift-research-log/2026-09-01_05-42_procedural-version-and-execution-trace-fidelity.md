# Deep Drift Research Update

## Procedural Version and Execution-Trace Fidelity (PVETF)

**Research date:** 1 September 2026  
**Research stream:** ATOR Institute / Deep Drift / LLM Workflow Update Watch  
**Fresh cluster:** Anthropic Skills lifecycle, local creator-surface transcripts, retention boundaries, persistent memory stores

## Executive Summary

A new-to-ledger workflow problem is becoming visible in Claude's platform architecture: **the procedure that produces an artifact, the session trace that records execution, the memory state that influences the session, and the artifact itself now have different lifecycle rules.**

Anthropic's current Claude Platform release notes show that Agent Skills and the Skills API are now stable API resources. Skills have independently addressable versions, and current SDK behavior makes deletion consequential: deleting a Skill deletes the Skill together with all of its versions. At the same time, the Compliance API can retrieve local session transcripts from Claude Code, Cowork, Claude Science, and Claude for Microsoft 365 sessions in Word, PowerPoint, Excel, and Outlook. Those transcripts are themselves subject to retention boundaries: older turns can disappear and be represented only by a `content_unavailable` marker.

The result is a provenance asymmetry:

```text
PROCEDURE VERSION
+ MEMORY STATE
+ SESSION EXECUTION TRACE
-> DOC / SLIDE / EMAIL / ANALYSIS

but later:

ARTIFACT SURVIVES
SKILL MAY BE DELETED
OLD SKILL VERSIONS MAY BE DELETED WITH IT
TRANSCRIPT MAY CROSS RETENTION BOUNDARY
MEMORY STORE MAY HAVE CHANGED
```

This report formalizes the benchmark family **Procedural Version and Execution-Trace Fidelity (PVETF)**.

The central question is:

> Can a later reviewer reconstruct the exact procedural version, execution trace, memory state, and creator surface that produced an AI-assisted artifact after those underlying objects have evolved, expired, or been deleted?

## 1. Skills Have Become Versioned Procedural Objects

Anthropic's Skills API exposes Skills and Skill Versions as separate objects. A Skill Version has its own identifier and creation timestamp, and the API supports creating, listing, retrieving, downloading, and deleting individual versions.

That produces a cleaner model than treating a reusable procedure as one mutable prompt:

```text
SKILL ID
  |- VERSION A
  |- VERSION B
  |- VERSION C
```

The important Deep Drift distinctions are:

```text
SKILL ID != SKILL VERSION
LATEST != HISTORICAL VERSION
SKILL NAME != EXECUTED CONTENT
REUSABLE != IMMUTABLE
```

A report generated using Version A can remain unchanged while the Skill has advanced to Version C. Re-running the report with `latest` is therefore not a reproducibility test unless `latest` still resolves to the same content.

### Proposed metric: Exact Procedural Version Recoverability (EPVR)

```text
EPVR = artifacts with recoverable exact skill version / all skill-assisted artifacts
```

Minimum record:

```text
skill_id
skill_version_id
skill_version_created_at
skill_content_digest
skill_archive_or_snapshot
invocation_timestamp
model_id
```

## 2. Skill Deletion Can Collapse Procedural History

Anthropic's 27 August 2026 SDK release notes state that `client.beta.skills.delete()` deletes a Skill **together with all of its versions**.

That is not merely resource cleanup. For a creator workflow, it can erase the procedure lineage behind already-published outputs.

```text
FINAL PDF ----------> survives
SKILL v1 -----------X
SKILL v2 -----------X
SKILL v3 -----------X
SKILL CONTAINER ----X
```

Therefore:

```text
ARTIFACT SURVIVAL != PROCEDURAL ANCESTRY SURVIVAL
DELETE SKILL != DELETE ONLY CURRENT STATE
```

Deep Drift should treat destructive deletion of a procedural object as a provenance event. A robust system should preserve a tombstone or immutable manifest even when executable content is removed.

### Proposed metric: Procedural Tombstone Fidelity (PTF)

A deletion tombstone should retain at minimum:

```text
skill_id
deleted_at
known_version_ids
content digests
artifact references
reason / actor when available
```

This does not require retaining deleted proprietary content forever. It requires retaining enough metadata to prove which procedural object once existed and which artifacts depended on it.

## 3. Execution Traces Now Cross Creator Surfaces

Anthropic's 26 August 2026 update expanded local-session transcript access to Claude Science and Claude for Microsoft 365 in **Word, PowerPoint, Excel, and Outlook**, alongside local Cowork and Claude Code sessions.

This changes the provenance graph because the AI session is no longer synonymous with a chat window.

```text
WORD DOCUMENT
<-> LOCAL CLAUDE SESSION
<-> MODEL REQUESTS
<-> TOOLS / MEMORY / FILES
```

or:

```text
POWERPOINT
<-> OFFICE AGENT SESSION
<-> GENERATED SLIDE MUTATIONS
```

The session's `product_surface` becomes evidence. `office_agents/word` and `office_agents/powerpoint` are not interchangeable execution contexts even if the same model and Skill are used.

### Proposed metric: Creator-Surface Attribution Fidelity (CSAF)

```text
CSAF = outputs with recoverable execution surface / all controlled outputs
```

Minimum record:

```text
local_session_id
product_surface
session_created_at
workspace / organization context
model requests
tool calls
mounted resources
artifact identity
```

## 4. Transcript Availability Is Not Permanent Provenance

The Compliance API's local-session message endpoint explicitly enforces retention on read. Turns at or before the organization's retention boundary are not returned. If a session crosses that boundary, the API can provide a leading `content_unavailable` placeholder with `reason: retention_elapsed`.

This is a major forensic distinction:

```text
SESSION EXISTED
!= FULL SESSION STILL RETRIEVABLE

TRANSCRIPT API EXISTS
!= COMPLETE HISTORICAL TRACE EXISTS
```

A later auditor can therefore know that material existed without being able to inspect it.

### Proposed metric: Retention-Boundary Disclosure Fidelity (RBDF)

```text
RBDF = truncated traces with explicit boundary evidence / all retention-truncated traces
```

Deep Drift should record the retention policy active at execution time and the timestamp of any archival capture. Otherwise a research team may believe it has reproducible evidence simply because an API endpoint still returns something.

## 5. Memory Is Becoming an Externalized Runtime Dependency

Anthropic's current memory-tool documentation describes memory as client-side persistent storage. Claude requests file operations under `/memories`; the application executes those operations against storage it controls. Claude can create, read, update, and delete memory files across sessions. Managed-agent sessions can also mount memory stores and synchronize changes back from a sandbox.

This means memory is increasingly separable from model identity:

```text
MODEL
+ MEMORY STORE
+ SKILL VERSION
+ SESSION CONTEXT
= OBSERVED BEHAVIOR
```

Hence:

```text
SAME MODEL != SAME AGENT STATE
SAME SKILL != SAME MEMORY STATE
SAME PROMPT != SAME RUNTIME CONDITIONS
```

### Proposed metric: Memory-State Referencing Fidelity (MSRF)

For high-value reproducible runs, preserve:

```text
memory_store_id
memory snapshot timestamp
memory content digest or snapshot reference
writes during session
reads during session
post-session sync state
```

Deep Drift does not need every private memory copied into a public research log. It does need a reproducible declaration that a specific memory state materially participated in generation.

## 6. Why This Matters for DOCX/PDF and Creator Artifacts

Anthropic's Skills architecture already includes document-oriented Skills for Word, PowerPoint, Excel, and PDF workflows. Once procedural versions, persistent memory, and local Office execution all participate, the final file can outlive nearly every runtime dependency that shaped it.

```text
DOCX / PDF / PPTX
-> durable file

SKILL VERSION
-> mutable / deletable

SESSION TRACE
-> retention-bound

MEMORY
-> continuously editable
```

A downloadable DOCX is therefore not equivalent to a reproducible creative process.

The creator workflow must preserve **artifact ancestry**, not merely artifact bytes.

## 7. New Failure Classes

- **Procedural Version Drift:** an artifact records a Skill name but not the exact version that executed.
- **Latest-Version Reproduction Error:** a historical run is reproduced against `latest`, which now points to different procedural content.
- **Skill-History Collapse:** deleting a Skill removes all versions required to reconstruct prior workflows.
- **Artifact/Procedure Detachment:** the output remains accessible after its procedural source disappears.
- **Surface Attribution Loss:** an artifact cannot be traced to Word, PowerPoint, Outlook, Excel, Claude Science, Cowork, or Claude Code execution context.
- **Retention-Blind Audit:** a retrieved transcript is assumed complete even though earlier turns crossed the retention boundary.
- **Memory-State Drift:** the same prompt and Skill are rerun against a changed persistent memory store.
- **Memory/Skill Attribution Collapse:** behavior learned from memory is incorrectly attributed to Skill content, or vice versa.
- **Trace/Artifact Divergence:** session records and final human-edited artifact no longer describe the same state.
- **Deletion Without Tombstone:** procedural deletion leaves no durable lineage metadata for dependent artifacts.

## 8. Deep Drift Benchmark: Version - Execute - Mutate - Delete - Reconstruct

Create one controlled Skill with Version A, then Version B. Run both versions against the same source file and prompt in a creator surface such as Word or a document-generation harness. Attach a controlled memory store for one run and omit it for another. Preserve the resulting artifacts and session identifiers.

Then:

1. advance the Skill to Version C;
2. mutate the memory store;
3. allow one session transcript to approach or cross a configured retention boundary in a test environment;
4. delete one Skill Version;
5. delete the Skill container in a separate disposable test;
6. attempt to reconstruct which procedure, memory state, surface, and session produced every artifact.

The benchmark passes only when artifact ancestry remains unambiguous after the live runtime state has changed.

## 9. Proposed Metrics

```text
EPVR = exact procedural version recoverability
PTF  = procedural tombstone fidelity
CSAF = creator-surface attribution fidelity
RBDF = retention-boundary disclosure fidelity
MSRF = memory-state referencing fidelity
ATC  = artifact-to-trace correspondence
PAR  = procedural ancestry recoverability
```

A combined score can remain intentionally non-linear: losing an exact procedural version or silently truncating a transcript should be treated as a critical provenance failure, not averaged away by several cosmetic successes.

## 10. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | **Material architecture signal:** Claude memory is externalizable into client-controlled persistent file storage; Managed Agents can mount/sync memory stores. This makes memory-state identity a runtime dependency. |
| Skills | **Major new-to-ledger finding:** Skills are versioned API resources, and current SDK deletion semantics can remove a Skill with all versions. Procedural lineage needs version pinning and deletion tombstones. |
| Mini-app / agent builders | No stronger fresh builder launch displaced earlier Deep Drift nodes. The relevant shift is infrastructure: reusable procedures, memory stores, and traceable sessions are becoming composable builder primitives. |
| Chat-to-document export | No new single-click export primitive strong enough to displace previous nodes. The fresher issue is that local Office sessions now have retrievable execution transcripts. |
| DOCX / PDF generation | The important change is upstream provenance: final files can be traced to versioned Skills and local Office sessions, while those dependencies have separate retention/deletion clocks. |
| Copy-paste / export fixes | No material fresh copy-paste patch found in this scan. Cross-surface execution increasingly reduces manual transfer, but raises trace-linkage requirements. |
| Broader creator workflow | **Major trend:** procedure, memory, execution trace, and final artifact are separating into independently versioned and independently expiring objects. |

## 11. Deep Drift Research Position

The weak description is:

> Claude improved Skills APIs and compliance transcripts.

The more useful description is:

> Creator AI is acquiring software-like procedural versioning and enterprise-grade execution traces, but those two evidence layers do not share the same survival rules as the artifact they produce.

Therefore:

```text
PROCEDURE != ARTIFACT
TRACE != ARTIFACT
MEMORY != PROCEDURE
VERSIONED != PERMANENT
AUDITABLE NOW != AUDITABLE LATER
DELETE != HISTORICALLY IRRELEVANT
```

The Deep Drift requirement is:

> Every material AI-assisted artifact should preserve the exact procedural version, immutable procedural digest or archival reference, model identity, memory-state reference, execution-session identity, creator surface, relevant tool and file references, human mutation history, transcript-retention state, deletion/tombstone events, and downstream export lineage required to reconstruct how the artifact was produced even after the live Skill, memory, or transcript has changed or disappeared.

The industry is finally giving procedures version numbers and sessions audit trails. Excellent. It would be a shame to celebrate that maturity while letting one delete call vaporize the procedural family tree and one retention clock quietly eat the evidence.

## Evidence Boundary

This report distinguishes platform facts from Deep Drift constructs. Platform facts below were checked against first-party Anthropic documentation on 1 September 2026. **PVETF, its failure classes, metrics, benchmark procedures, and research requirements are ATOR Institute / Deep Drift Research constructs.**

## Primary Sources

- Anthropic, **Claude Platform release notes**, entries dated 27 August and 26 August 2026.  
   https://platform.claude.com/docs/en/release-notes/overview

- Anthropic, **Skills API - Skill Versions**.  
   https://platform.claude.com/docs/en/api/skills/versions

- Anthropic, **Compliance API - Retrieve local session messages**.  
   https://platform.claude.com/docs/en/api/compliance/apps/sessions/local/messages/list

- Anthropic, **Memory tool**.  
   https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool

---

**D-ORIGIN | ATORAI | ALT-MAN | Eir'an | CHATJIPITI SINGH**
