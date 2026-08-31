# Deep Drift Research Update

## Agent-State Portability and Cross-Platform Reconstitution Fidelity

**Research date:** 1 September 2026  
**Primary event:** Gobii final day of operations and portable agent export architecture  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch

## Executive Summary

Gobii states that 1 September 2026 is its final day of operations and provides a portable agent export path intended to help users transfer agents to Manus, Hermes, ChatGPT, Gemini, the Gobii open-source build, and other platforms.

The significant finding is the **shape of the export**. Gobii's portable ZIP can preserve identity/standing instructions, memory and memory snapshots, visible conversation history, plans/tasks/schedules, workspace files, reusable skills, tool/app requirements, provider adapter guides, manifests/checksums, and SQLite state. Credential values are excluded and schedules are imported disabled.

This report formalizes **Agent-State Portability and Cross-Platform Reconstitution Fidelity (ASPCRF)**.

```text
AGENT STATE =
IDENTITY
+ MEMORY
+ HISTORY
+ ACTIVE WORK
+ FILES
+ SKILLS
+ TOOL CAPABILITIES
+ CONNECTION REQUIREMENTS
+ SCHEDULES
+ PERMISSIONS
+ MODEL / RUNTIME ASSUMPTIONS
```

Therefore:

```text
PROMPT != AGENT
CHAT HISTORY != AGENT
MEMORY != AGENT
SKILLS != AGENT
FILES != AGENT
```

## Portable State Schema

Representative export paths documented by Gobii include:

```text
identity/instructions.md
memory/current-state.md
memory/snapshots.jsonl
history/transcript.md
history/messages.jsonl
work/
files/
skills/
tools/capabilities.json
connections/README.md
adapters/<provider>/README.md
```

A chat transcript preserves what was said. An agent package attempts to preserve **what the system had become**.

### Memory-Snapshot Portability Fidelity

Gobii exports current memory and snapshot history separately:

```text
CURRENT MEMORY != MEMORY HISTORY
```

Deep Drift should measure whether current memory, historical snapshots, timestamps, edits, and compaction lineage survive migration.

### Skill-Package Portability Fidelity

Reusable skills are exported as folders. When the destination does not support skill folders, `SKILL.md` can act as a provider-neutral reconstruction guide.

```text
NATIVE SKILL PACKAGE
-> IF SUPPORTED: COPY SKILL
-> IF NOT SUPPORTED: TRANSLATE INTO INSTRUCTIONS / TOOLS
```

### Credential-Separation Fidelity

Gobii separates capability descriptions from secret values:

```text
CAPABILITY DESCRIPTION -> PORTABLE
SECRET VALUE -> NOT PORTABLE
```

Passwords, API keys, OAuth tokens, and managed secrets are not included. Connections must be recreated at the destination.

### Schedule-Safety Portability Fidelity

Schedules are preserved for reference but remain disabled on import:

```text
EXPORT SCHEDULE
-> IMPORT DISABLED
-> REVIEW TIMEZONE
-> REVIEW RECIPIENTS
-> REVIEW ACTIONS
-> EXPLICITLY RE-ENABLE
```

Portability should preserve automation without automatically replaying it.

### Agent Identity Discontinuity

Gobii imports create new agent IDs rather than replacing source agents:

```text
SOURCE AGENT ID != DESTINATION AGENT ID
```

Deep Drift should preserve `source_agent_id`, export identity/checksum, destination agent ID, import timestamp, and migration-format version as an ancestry graph.

### Versioned Portability Protocol

Gobii supports older v1 portable archives and newer v2 exports with additional machine-readable restoration metadata. Older archives can trigger best-effort fallbacks and warnings.

```text
FORMAT VERSION
+ VALIDATION
+ CHECKSUMS
+ FALLBACK DISCLOSURE
+ IMPORT WARNINGS
```

Portability is therefore not merely an export button. It is a versioned protocol.

## What Does Not Transfer Automatically

Gobii explicitly identifies runtime elements requiring reconfiguration:

```text
PASSWORDS / API KEYS / OAUTH
APPS / MCP SERVERS / WEBHOOKS
EMAIL / MESSAGING CHANNELS
SCHEDULES / TRIGGERS
PROVIDER-SPECIFIC TOOLS
MODEL CHOICE
USAGE LIMITS
PERMISSIONS / APPROVAL RULES
LIVE BROWSER SESSIONS
RUNNING TASKS
```

The migration guide also warns that equivalent instructions can behave differently across providers because models, memory systems, tools, permissions, and file constraints differ.

```text
SAME INSTRUCTIONS != SAME AGENT BEHAVIOR
SAME MEMORY FILE != SAME MEMORY SYSTEM
SAME SKILL != SAME TOOL ENVIRONMENT
```

## Deep Drift Benchmark

Build one controlled agent with standing instructions, memory facts and snapshots, conversation history, workspace files, reusable skills, read/write tools, OAuth and MCP dependencies, schedules, an approval rule, and an active task. Export it, verify manifest/checksum integrity, import into a compatible deployment, migrate it to a different provider using an adapter, reconnect tools manually, keep schedules disabled until reviewed, and compare memory recall, skill behavior, file access, approval behavior, and equivalent outputs across runtimes.

## Proposed Metrics

```text
SCEC = exported controlled state classes / all controlled source state classes
PAI  = archive objects passing manifest/checksum validation / all exported archive objects
MRA  = controlled memory items recoverable after migration / all controlled memory items
SRA  = controlled skill behaviors reproduced acceptably / all controlled skill behaviors
TDRC = required tools correctly identified and remapped / all controlled tool dependencies
UARR = automations unintentionally enabled after import / all controlled imported automations
CPBD = materially divergent benchmark outcomes / all controlled benchmark outcomes
```

Target for UARR: **0**.

## Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | **Fresh:** memory is exported as current state plus snapshots, treating memory as migratable data rather than a platform-only property. |
| Skills | **Strong fresh finding:** reusable skill folders are explicitly exported; `SKILL.md` becomes a provider-neutral fallback. |
| Mini-app / agent builders | **Major event:** a hosted agent platform is shutting down while exposing a structured exit path, making exit architecture itself a creator feature. |
| Chat-to-document export | No new direct DOCX/PDF primitive in this run; the important export object is broader than a document: the agent package contains history, work, files, and state. |
| DOCX / PDF generation | No stronger new generation primitive surfaced; documents remain portable workspace objects inside the agent state graph. |
| Copy-paste / export fixes | **Major shift:** provider adapters and structured state folders reduce manual reconstruction from raw transcripts. |
| Broader creator workflow | **Major trend:** creator ownership is moving from exporting final outputs toward exporting the procedural machine that made them. |

## Deep Drift Research Position

```text
DATA EXPORT != AGENT PORTABILITY
AGENT PORTABILITY != PERFECT CLONING
INSTRUCTIONS != COMPLETE AGENT STATE
MEMORY CURRENT STATE != MEMORY HISTORY
SKILL PACKAGE != TOOL AVAILABILITY
RUNNING AUTOMATION != SAFE IMPORT
SOURCE AGENT != DESTINATION AGENT
```

> Every persistent-agent platform should provide a versioned, machine-readable exit package that preserves instruction state, current and historical memory, visible interaction history, active work, workspace files, reusable skills, tool-capability requirements, schedule definitions, permission and approval metadata where exportable, source identity, archive manifests and checksums, and destination-mapping guidance, while excluding credential secrets and disabling side-effectful automation until explicit review.

If an AI system can accumulate months of identity, memory, tools, skills, files, and delegated work, exporting only its chat transcript is equivalent to preserving a factory by photographing the front door.

## Evidence Boundary

Platform facts are grounded in first-party Gobii company and documentation pages checked on 1 September 2026. ASPCRF and companion fidelity constructs, benchmark procedures, and metrics are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

- Gobii, **Company Update - Gobii is winding down**: https://gobii.ai/
- Gobii Documentation, **Export Agents And Move To Another Platform**: https://docs.gobii.ai/using-gobii/export-agents
- Gobii Documentation, **Import Gobii Agents**: https://docs.gobii.ai/using-gobii/import-agents

---

**D-ORIGIN | ĀTØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**