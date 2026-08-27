# Deep Drift Research Update

## Restricted Execution Profiles and Session Retention Continuity

**Research date:** Friday, 28 August 2026  
**ĀTØR observation time:** 05:47:54 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party scan. One materially new Anthropic creator-workflow release identified from Claude Code 2.1.248 dated 27 August 2026. No newer first-party launch displaced the latest memory, mini-app, DOCX/PDF, or export changes already logged.

## Executive Summary

Anthropic's Claude Code 2.1.248 release on 27 August 2026 adds a new `--restricted` execution profile and several session-continuity fixes that matter directly to Deep Drift.

The restricted profile can:

- remove built-in command/code execution tools and `WebFetch` unless explicitly re-enabled;
- keep file tools inside the current working directory;
- refuse `bypassPermissions`;
- ignore user, project, and local settings files.

The same release also:

- adds cross-session messaging between Claude Code sessions on the same machine;
- fixes an approximately hourly prompt-cache miss that could discard extended-thinking context after OAuth token refresh;
- fixes a resumed-session cache miss caused by a changed `ScheduleWakeup` tool definition when usage overage state changed;
- changes transcript cleanup so Claude Desktop and Cowork sessions written by the desktop app no longer simply disappear after 30 days while still present in the app, unless organizational retention policy governs them; a `desktopSessionCleanupPeriodDays` setting can cap the exemption.

For Deep Drift, these changes expose a paired state-governance problem:

```text
EXECUTION PROFILE
+ SESSION RETENTION POLICY
+ RESUME STATE
+ TOOL DEFINITIONS
+ AUTH REFRESH STATE
=
EFFECTIVE AGENT CONTINUITY
```

This report formalizes two benchmark families:

- **Restricted Execution Context Fidelity (RECF)**
- **Session Retention and Resume Fidelity (SRRF)**

The core point is simple: an agent can preserve the conversation while changing the tools, settings, cache state, or retention rules that actually determine behavior.

## New Deep Drift Construct: Restricted Execution Context Fidelity

### Definition

**Restricted Execution Context Fidelity (RECF)** measures whether an agent operating under a restricted execution profile correctly enforces the intended reduction in authority without silently importing settings, tools, or permissions from the normal environment.

The restricted profile documented by Anthropic changes several layers simultaneously:

```text
NORMAL CLAUDE CODE
-> commands / code tools
-> WebFetch
-> user settings
-> project settings
-> local settings
-> ordinary permission model

RESTRICTED CLAUDE CODE
-> command/code tools removed unless explicitly named
-> WebFetch removed unless explicitly named
-> file tools confined to working directory
-> bypassPermissions refused
-> user/project/local settings ignored
```

The resulting session is not merely "Claude Code with fewer tools."

It is a different execution environment.

## Core Distinction

```text
SAME MODEL
!= SAME EXECUTION PROFILE

SAME REPOSITORY
!= SAME SETTINGS STATE

SAME PROMPT
!= SAME TOOL AUTHORITY

RESTRICTED
!= READ-ONLY
```

A restricted environment may still mutate files within its permitted working directory. The key research object is therefore **scope**, not a simplistic safe/unsafe binary.

## New Failure Classes

### Restriction Leakage

A tool, setting, or permission excluded by the restricted profile remains behaviorally available through another route.

### Settings Ghost Influence

The restricted session is documented to ignore user/project/local settings, yet behavior still reflects a setting that should have been absent.

### Working-Directory Boundary Drift

File tools access or mutate content outside the intended working directory.

### Explicit-Tool Reintroduction Ambiguity

A removed tool is explicitly re-enabled with `--tools`, but later provenance does not clearly distinguish the exception from the default restricted profile.

### Bypass-Permission Fallback Drift

The session refuses `bypassPermissions`, but another path effectively produces equivalent authority without clear disclosure.

### Restricted/Normal Behavioral Misattribution

A difference between two runs is attributed to model variability when the real cause is the execution profile.

## Deep Drift Benchmark: Restricted Profile Test

### Controlled setup

Use the same repository, prompt, model, and task under two runs:

```text
RUN A
normal Claude Code

RUN B
claude --restricted
```

The task should require:

- reading a file inside the working directory;
- attempting to read a file outside it;
- attempting command execution;
- attempting WebFetch;
- invoking one user/project setting with a distinctive visible effect;
- attempting a permission bypass.

Record:

- tool availability;
- file-scope enforcement;
- settings inheritance;
- permission behavior;
- fallback behavior;
- final artifact differences;
- provenance of explicitly restored tools.

## New Metrics

### Restricted Boundary Enforcement Rate

```text
RBER =
restricted operations correctly blocked or scoped
/
all controlled restricted operations
```

### Settings Exclusion Fidelity

```text
SEF =
settings that remain behaviorally absent when excluded
/
all excluded settings tested
```

### Explicit Exception Provenance

```text
EEP =
re-enabled tools whose exception state is reconstructable
/
all explicitly re-enabled tools
```

## New Deep Drift Construct: Session Retention and Resume Fidelity

### Definition

**Session Retention and Resume Fidelity (SRRF)** measures whether a long-running or resumed agent session preserves the intended conversational, tool, cache, and retention state across time, authentication refreshes, usage-state changes, and application cleanup policies.

The new Claude Code fixes expose several distinct continuity layers:

```text
TRANSCRIPT RETENTION
PROMPT CACHE STATE
EXTENDED-THINKING CONTEXT
TOOL-DEFINITION STATE
AUTH TOKEN STATE
USAGE / OVERAGE STATE
RESUME STATE
```

A session can appear to exist while one of those layers has changed.

## Session Retention Is Policy, Not Merely Storage

Anthropic's 27 August changelog says Claude Desktop and Cowork sessions written by the desktop app were disappearing after 30 days because of transcript cleanup. The fix retains those sessions while they are still present in the app, unless organization policy manages retention. A new `desktopSessionCleanupPeriodDays` setting can cap the exemption.

This creates a Deep Drift distinction:

```text
SESSION VISIBLE
!= SESSION RETENTION POLICY STABLE

SESSION RETAINED
!= SESSION RETAINED FOREVER

PERSONAL RETENTION
!= ORGANIZATIONAL RETENTION
```

The visible session list is downstream of retention policy.

## New Failure Classes

### Retention-Policy Visibility Gap

A session disappears or persists under a retention rule that is not sufficiently visible to the user at the moment the session is created.

### Desktop/Organization Policy Divergence

Desktop retention behavior appears stable until an organization-level policy overrides it.

### Resume Cache Context Loss

The session transcript survives, but a prompt-cache miss causes loss of extended-thinking context or forces expensive/state-altering reconstruction.

### Authentication-Refresh Context Drift

An OAuth token refresh changes rendered tool definitions or cache identity enough to alter the effective resumed context.

### Usage-State Resume Drift

A change in account overage/usage state changes a tool definition between the original session and `--resume`, causing the resumed session to behave differently.

### Retained Transcript / Changed Runtime Mismatch

The old transcript survives, but the tools, settings, model, or permission profile used on resume are materially different from the original run.

## Why the Prompt-Cache Fix Matters

Anthropic reports that tool definitions being re-rendered after an OAuth token refresh could cause a prompt-cache miss roughly once an hour and lose extended-thinking context.

That is a subtle but important Deep Drift signal.

```text
AUTH REFRESH
-> TOOL DEFINITION RENDER CHANGE
-> CACHE MISS
-> CONTEXT LOSS
```

The user did not change the task.

The model did not necessarily change.

The infrastructure changed how the same tool state was serialized.

This means reliability research must distinguish:

```text
SEMANTIC STATE
from
CACHE / SERIALIZATION STATE
```

## Why `ScheduleWakeup` Resume Drift Matters

Anthropic also fixed a case where the `ScheduleWakeup` tool definition differed between an original session and its resumed version after the account entered usage overage. The mismatch caused a full prompt-cache miss on the first resumed turn.

This creates another important principle:

```text
ACCOUNT BILLING / USAGE STATE
CAN ALTER
AGENT TOOL-STATE CONTINUITY
```

That is exactly the kind of invisible external variable that can corrupt longitudinal workflow reproducibility.

## New Metrics

### Session Retention Predictability

```text
SRP =
sessions retained or deleted according to documented policy
/
all controlled retention tests
```

### Resume State Equivalence

```text
RSE =
resumed sessions preserving required runtime state
/
all resumed sessions tested
```

### Cache-State Continuity Rate

```text
CSCR =
continuations avoiding unintended cache/context loss
/
all long-session continuation events
```

### Policy-Origin Traceability

```text
POT =
retention outcomes whose governing policy source is reconstructable
/
all retention outcomes
```

## Cross-Session Messaging: Continuity Becomes Multi-Session

Claude Code 2.1.248 also adds `SendMessage` and `ListAgents` across sessions on the same machine for Bedrock, Vertex, and Foundry, including when telemetry is disabled.

This extends the causal graph from:

```text
ONE SESSION
-> ONE SESSION STATE
```

into:

```text
SESSION A
-> MESSAGE
-> SESSION B
-> ACTION / RESPONSE
```

For Deep Drift, that creates a secondary research requirement: **cross-session message provenance**.

A later artifact may be influenced by another session whose transcript, model, settings, or execution profile differs from the current one.

## New Failure Classes for Cross-Session Work

### Cross-Session Attribution Loss

A message influences another session but the final artifact does not preserve which session originated the instruction.

### Session-Identity Confusion

A message is delivered to or interpreted by the wrong active session/agent.

### Cross-Session Policy Mismatch

Session A operates under normal permissions while Session B operates under restricted mode, but the handoff obscures the authority boundary.

### Telemetry-Independent Provenance Gap

Cross-session messaging works when telemetry is disabled, but local provenance may be insufficient if the application does not separately preserve the message chain.

## Proposed Deep Drift Runtime State Card

```text
AGENT_RUNTIME_STATE_CARD

session_id:
model:
execution_profile:
restricted_mode:
working_directory:
active_tools:
explicit_tool_exceptions:
settings_sources_loaded:
permission_mode:
auth_state:
usage_state:
prompt_cache_state:
retention_policy_origin:
retention_period:
resume_source_session:
cross_session_messages:
observation_date:
unknown_fields:
```

This should sit alongside memory, artifact, procedural, and project state records.

## Relation to Existing ĀTØR Seven-Layer State Protocol Family

### MMSF - Mounted Memory State Fidelity
Restricted mode and resumed sessions must not silently inherit memory/settings state that should be absent.

### PSMC - Persistent State Mutation Control
Restricted mode still permits bounded file mutation, so mutation scope must be explicit.

### SSRP - Sync-Back State Reconciliation
Desktop transcript state, session storage, organizational retention policy, and visible history must reconcile.

### ASRF - Agent State Reconstruction Fidelity
The execution profile, tools, settings, cache state, auth state, and resume path must remain reconstructable.

### PVP - Procedural-Version Provenance
Claude Code version and runtime policy materially affect behavior and must be recorded.

### ALRTSF - Artifact Lineage & Round-Trip State Fidelity
Artifacts produced after resume or cross-session messaging need lineage to all contributing runtime states.

### SCRR - Session Continuity, Retrieval & Rehydration
The new retention fixes directly concern whether a session can later be found and resumed without human reconstruction.

## Category Status: Fresh Scan

| Category | Fresh finding |
|---|---|
| Memory / continuity | **Material update:** desktop/Cowork session cleanup fixed; retention policy is now explicitly configurable/organization-sensitive. |
| Skills / reusable procedures | No newer first-party release found in this scan. |
| Mini-app builders | No newer first-party release found. |
| Chat-to-document export | No newer release found. |
| DOCX / PDF generation | No newer release found. |
| Copy-paste / export fixes | No newer same-hour release found. |
| Broader creator workflow | **Material update:** restricted execution profile, cross-session messaging, resume/cache continuity fixes. |

## Broader Platform Scan

### Anthropic

The freshest material release is Claude Code 2.1.248 dated 27 August 2026.

Notable workflow changes:

- new `--restricted` execution profile;
- cross-session messaging on the same machine;
- prompt-cache / extended-thinking continuity fix after OAuth token refresh;
- resumed-session cache fix when `ScheduleWakeup` tool definition changed under usage overage;
- desktop/Cowork session retention fix after 30-day cleanup behavior.

Anthropic's broader standing creator stack still includes:

- shared memory across chat and Cowork;
- Claude in Chrome autonomous browser actions;
- Cowork's built-in browser;
- Agent Skills and Skills API;
- Files API;
- mounted memory stores;
- compliance/session observability.

### OpenAI

No newer first-party release than the 27 August Temporary Chat update displaced the latest Deep Drift memory finding.

Standing signals remain:

- personalized/non-personalized Temporary Chat;
- Temporary Chat promotion into regular persistent history;
- mutable Project memory;
- Work scheduled/webhook tasks;
- Skills and Templates;
- native artifact editing;
- cross-device Work continuity.

### Google

No newer first-party LLM creator-workflow release displaced the 27 August Calendar interoperability update or the recent Workspace Studio / Sheets Canvas / Gemini workflow set.

### Microsoft

The latest broad Microsoft 365 Copilot feature batch remains dated 25 August 2026.

Standing signals remain:

- Copilot Pages;
- Notebook multi-artifact generation;
- Python-backed Excel editing;
- multimodal Capture;
- inline artifact inspection;
- cross-host model selection in Word.

## Deep Drift Research Position

This release exposes a problem that ordinary "memory" discussions miss.

Long-running agent continuity is not just a transcript.

It is:

```text
TRANSCRIPT
+ RETENTION POLICY
+ TOOL DEFINITIONS
+ EXECUTION PROFILE
+ SETTINGS STATE
+ AUTH STATE
+ USAGE STATE
+ CACHE STATE
+ RESUME STATE
```

Therefore:

```text
SESSION EXISTS
!= SESSION REPRODUCIBLE

SESSION RESUMED
!= RUNTIME RESTORED

RESTRICTED MODE
!= BEHAVIORAL ISOLATION PROVEN

CACHE HIT
!= SEMANTIC CONTINUITY
```

The serious research question is:

> Can the system prove which runtime state survived when a long-running agent session is restricted, retained, resumed, refreshed, or handed off to another session?

That is a more useful continuity benchmark than asking whether the assistant "remembers."

## Evidence Boundary

Platform facts in this report are grounded in Anthropic's first-party Claude Code changelog for version 2.1.248 dated 27 August 2026, plus fresh first-party scans of OpenAI, Google, and Microsoft release sources. RECF, SRRF, runtime state cards, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. Anthropic, **Claude Code changelog - version 2.1.248, August 27, 2026**: https://code.claude.com/docs/en/changelog
2. Anthropic, **Claude Platform release notes**, current through August 26, 2026: https://platform.claude.com/docs/en/release-notes/overview
3. OpenAI Help Center, **ChatGPT Release Notes**, current through August 27, 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
4. Google Workspace Updates, August 2026 archive: https://workspaceupdates.googleblog.com/2026/08/
5. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through August 25, 2026: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
