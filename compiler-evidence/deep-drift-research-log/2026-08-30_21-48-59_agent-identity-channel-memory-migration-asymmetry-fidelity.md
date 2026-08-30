# Deep Drift Research Update

## Agent Identity, Channel Memory, and Migration Asymmetry Fidelity

**Research date:** 30 August 2026  
**Primary platform delta:** Anthropic Claude Tag in Slack, plus current Claude personal-to-organization migration rules  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log memory, Skills, agent-action, and portability architecture verified from first-party Anthropic documentation.

## Executive Summary

Anthropic's **Claude Tag** turns Slack into a persistent organizational agent surface rather than a thin chat integration. Since 3 August 2026, the earlier Claude-in-Slack experience has shifted to Claude Tag. Teams can tag `@Claude` in channels, message it directly, or use an assistant panel. In channels, Claude acts under an organization-controlled identity, can use connected tools and repositories, remembers context by channel and workspace, can follow up proactively, and can schedule standing work.

The important architecture is:

```text
SLACK CHANNEL
-> SHARED HUMAN CONTEXT
-> ORGANIZATION CLAUDE IDENTITY
-> CHANNEL / WORKSPACE MEMORY
-> TOOLS + REPOSITORIES
-> ACTION
-> AUDIT TRAIL
```

Anthropic documents that commits and pull requests performed through Claude Tag show the Claude GitHub App as author and link back to the Slack thread that initiated them. Admins can also inspect scheduled and one-time tasks plus network calls in an Audit view.

At the same time, Claude's account-migration rules expose a sharp portability asymmetry. Chats, artifacts inside chats, projects, files, project sync configurations, and memory can move from a personal account into Team or Enterprise. **Custom Skills do not migrate.** Connected-app authorizations are revoked. Custom connectors must be recreated. Published artifacts and public share links do not survive. Cloud Cowork and Claude Code sessions also do not move.

Deep Drift therefore gets a new benchmark family:

**Agent Identity, Channel Memory, and Migration Asymmetry Fidelity (AICMMAF)**

with companion constructs:

- Channel Memory Boundary Fidelity
- Agent Identity Attribution Fidelity
- Thread-to-External-Action Fidelity
- Scheduled-Work Traceability Fidelity
- Permission-Inheritance Fidelity
- Cross-Platform History Separation Fidelity
- Account-Migration State Fidelity
- Skill Non-Migration Fidelity
- Connector Reauthorization Fidelity
- Artifact-Link Survival Fidelity

The central question is:

> When an AI acts under an organizational identity using persistent channel memory, and the human later changes account or workspace boundary, which parts of the procedural system, memory, artifact history, permissions, and action lineage survive?

## 1. Claude Tag: What Changed

Anthropic describes Claude Tag as a new Slack-native way to assign work to Claude.

The documented surfaces are:

```text
CHANNEL TAGGING
DIRECT MESSAGE
AI ASSISTANT PANEL
```

In a channel:

- everyone works with the same Claude;
- anyone in the channel can steer the work;
- Claude can remember relevant channel context across days;
- Claude can follow up proactively;
- Claude can schedule work;
- Claude can use organization-configured tools and repositories;
- work is billed to the organization rather than an individual user.

This is materially different from a private assistant session.

The agent is now closer to a shared institutional actor.

## 2. Agent Identity Attribution Fidelity

Claude Tag works under its own organization-controlled identity for channel work.

### Definition

**Agent Identity Attribution Fidelity** measures whether every external action remains attributable to:

```text
ORGANIZATION
WORKSPACE
CHANNEL
THREAD
CLAUDE AGENT IDENTITY
TOOL
ACTION
```

Anthropic explicitly documents a useful provenance pattern: GitHub commits and pull requests made through Claude Tag can appear under the Claude GitHub App identity and link back to the Slack thread that started them.

The Deep Drift requirement is:

> External actions should carry a resolvable backlink to the conversational context that authorized and shaped them.

## 3. Channel Memory Boundary Fidelity

Anthropic says Claude Tag keeps context per channel and per workspace. Admins can inspect, edit, or delete this memory.

Memory and permissions can be layered:

```text
ORGANIZATION-WIDE
-> WORKSPACE
-> PRIVATE CHANNEL
```

Each level can inherit from the one above it.

### Deep Drift risk

```text
SHARED MEMORY
!= UNIVERSAL MEMORY

CHANNEL CONTEXT
!= PERSONAL CHAT MEMORY

PRIVATE CHANNEL MEMORY
!= PUBLIC WORKSPACE MEMORY
```

A reusable agent may appear to be "the same Claude" while operating under materially different memory and credential states.

## 4. Thread-to-External-Action Fidelity

Claude Tag can operate tools and repositories based on channel permissions.

### Definition

**Thread-to-External-Action Fidelity** measures whether an external object can be reconstructed backward to the exact Slack thread that caused it.

Controlled chain:

```text
SLACK THREAD
-> @CLAUDE TASK
-> TOOL CALL
-> GITHUB COMMIT / PR
-> BACKLINK TO THREAD
```

The benchmark should test whether later reviewers can recover who requested the work, which channel context Claude used, which tool credentials were active, what Claude changed, and who later edited or approved the result.

## 5. Scheduled-Work Traceability Fidelity

Claude Tag can keep standing work and follow up without a fresh user message. Anthropic documents that users can ask what triggers are configured in a channel and disable them.

The Deep Drift requirement is that scheduled and one-time agent work preserve trigger, creator, channel, creation time, last run, action, output, and disable event.

The moment an agent initiates work proactively, chat chronology alone stops being sufficient provenance.

## 6. Cross-Platform History Separation

Anthropic explicitly states that Slack conversations with Claude remain separate from Claude chat history.

```text
SLACK CLAUDE HISTORY
!=
CLAUDE.AI HISTORY
```

Conversations initiated in Slack are not visible in Claude's web chat history, and web-app conversations are not available in Slack.

This matters because the organization can experience one "Claude" while its conversational history is fragmented by host platform.

Deep Drift should distinguish **agent identity continuity** from **conversation history continuity**. They are not the same thing.

## 7. A Second New Boundary: Personal-to-Organization Migration

Anthropic's current migration documentation makes the portability split unusually explicit.

### What moves

```text
CHATS
ARTIFACTS WITHIN CHATS
PROJECTS
PROJECT INSTRUCTIONS
PROJECT FILES
UPLOADED FILES
PROJECT SYNC CONFIGURATION
CHAT / PROJECT MEMORY
CLAUDE CODE MEMORY + SOME SETTINGS
RECENT CLAUDE DESIGN SYSTEMS / PROJECTS
```

### What does not move

```text
CUSTOM SKILLS
CONNECTED-APP SIGN-INS
CUSTOM CONNECTORS
PUBLISHED ARTIFACTS
PUBLIC CHAT SHARE LINKS
PENDING SHARE INVITES
LOCAL COWORK SESSION STATE
CLOUD COWORK SESSIONS
CLAUDE CODE CLOUD SESSIONS
SOME OLDER DESIGN PROJECTS
```

Anthropic states plainly that there is **no migration path for custom Skills**. Users must export custom Skills they want to keep before moving accounts.

## 8. Skill Non-Migration Fidelity

This is the most important Skills finding in the current pass.

**Skill Non-Migration Fidelity** measures whether a user can identify, export, restore, and verify every reusable Skill that falls outside an account migration.

The critical distinction is:

```text
MEMORY CAN MOVE
SKILL MAY NOT MOVE
```

That means a migrated account may remember project context but lose the reusable procedure that previously acted on that context.

For Deep Drift this is a direct counterexample to any simplistic concept of "AI continuity."

## 9. Connector Reauthorization Fidelity

Connected-app sign-ins are revoked during migration. Custom connectors also need to be added again, subject to organization policy.

Therefore:

```text
MEMORY MOVED
!=
TOOLS STILL AUTHORIZED
```

A migrated assistant can carry context into a new workspace while losing the action surface that made that context operational.

## 10. Artifact-Link Survival Fidelity

Anthropic says published artifacts do not migrate to Team or Enterprise and public share links stop working permanently.

```text
CONTENT MAY SURVIVE
PUBLIC ACCESS PATH MAY DIE
```

For research logs, public links should never be treated as the sole durable provenance record.

## 11. New Failure Classes

1. Shared-Agent Identity Illusion: users assume one persistent Claude identity implies one unified history and memory across Slack and Claude web.
2. Channel Memory Leakage Assumption: users do not distinguish organization, workspace, private-channel, and direct-message memory scopes.
3. Proactive-Task Origin Loss: a scheduled agent task runs later and its origin request becomes hard to locate.
4. External Action without Conversational Backlink: a commit, pull request, or other system action exists without recoverable thread lineage.
5. Memory-without-Skill Migration: project context survives migration while the custom procedure used to operate on it disappears.
6. Connector Reauthorization Drift: migrated context produces different results because connectors were revoked or rebuilt under different policy.
7. Published Artifact Link Death: public URLs embedded in reports or research logs stop resolving after migration.
8. Cloud Session Loss: Cowork or Claude Code cloud session state is mistaken for migrated project state.
9. Policy-State Confusion: a Skill or action that existed in a personal account is assumed to remain available under organization policy.
10. Agent-History Fragmentation: institutional actions are split across Slack history, Claude account history, GitHub history, and tool audit logs.

## 12. Deep Drift Benchmark: Shared Agent to Migration Round Trip

Create or identify one Slack channel task, one channel memory fact, one GitHub action, one custom Skill, one connected app, one published artifact, and one cloud Cowork session. Perform a controlled repository action through Claude Tag, preserve the initiating thread, verify action attribution, inspect channel/workspace memory and active credentials, export the Skill, migrate the account, and then test which chats, projects, files, memories, Skills, connectors, public links, and cloud sessions survive. Reinstall the Skill, reconnect tools, repeat the task, and compare pre/post-migration behavior.

## 13. New Metrics

### Thread Action Attribution Coverage

```text
TAAC =
external agent actions traceable to exact initiating thread
/
all controlled external actions
```

### Channel Memory Scope Accuracy

```text
CMSA =
memory items available only within intended scope
/
all controlled memory items
```

### Skill Migration Gap

```text
SMG =
custom Skills requiring manual export/reinstall
/
all custom Skills used in controlled migration
```

### Behavioral Reproduction Coverage

```text
BRC =
post-migration tasks materially reproducing pre-migration behavior
after Skills and connectors are restored
/
all controlled migrated workflows
```

## 14. Why This Matters for Memory

Claude Tag makes memory collective and operational. Account migration makes memory portable but incomplete.

Deep Drift should model personal memory, project memory, channel memory, workspace memory, organization memory, Skill state, connector state, and session state separately.

The phrase "the AI remembers" is now practically useless unless followed by: where, under whose identity, in which channel, with which tools, and after which migration?

## 15. Why This Matters for Skills

The strongest Skills delta is negative but crucial: **Custom Skills do not migrate automatically when a personal Claude account moves into Team or Enterprise.**

This means procedural continuity and memory continuity can diverge. A serious Skill archive should live outside any one vendor account and preserve Skill name, version, source files, dependencies, export date, origin account, target account, and restore event.

## 16. Why This Matters for Mini-App and Creator Workflows

Claude Tag is not a mini-app builder in the usual sense, but Slack channels become lightweight collaborative agent workspaces.

```text
CHANNEL UI
+ SHARED MEMORY
+ TOOL ACCESS
+ SCHEDULED WORK
+ ORGANIZATION AGENT IDENTITY
```

The creator trend is shifting from building new interfaces to turning existing work surfaces into agent runtimes.

## 17. Why This Matters for Chat-to-Document and DOCX/PDF

A report generated from Slack-agent activity may rely on a Slack thread, channel memory, custom Skill, connected tool, and external action. If the account later migrates and the Skill, connector authorization, public artifact URL, or cloud session does not survive, the static DOCX/PDF may become one of the few durable records of the old workflow.

Therefore final documents should embed or link to a provenance manifest rather than depending on live vendor history.

## 18. Why This Matters for Copy-Paste / Export Fixes

The workflow increasingly eliminates manual transfer:

```text
OLD:
SLACK REQUEST
-> COPY TO AI
-> COPY RESULT
-> OPEN TOOL
-> EXECUTE

NEW:
@CLAUDE IN SLACK
-> TOOL ACTION
-> TRACEABLE SYSTEM OBJECT
```

That is a real reduction in friction. The migration findings expose the corresponding debt: less manual transfer creates more dependence on invisible state.

## 19. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | Major new-to-log item: Claude Tag maintains channel/workspace memory under an organization-controlled agent identity while Slack and Claude web keep separate histories. |
| Skills | Major portability finding: custom Skills do not migrate from personal Claude accounts into Team/Enterprise; manual export is required. |
| Mini-app builders | Material adjacent shift: existing Slack channels become collaborative agent workspaces with memory, tools, scheduled work, and shared steering. |
| Chat-to-document export | No newer direct DOCX/PDF export primitive surfaced in this pass; provenance increasingly originates in shared agent threads rather than private chat. |
| DOCX/PDF generation | No newer format-generation release displaced logged items; static reports should preserve agent/thread/Skill/tool lineage because vendor state may fragment during migration. |
| Copy-paste/export fixes | Major reduction: Slack-to-tool action can happen inside Claude Tag rather than through manual copying. |
| Broader creator workflow | Major trend: LLM workflows are becoming institutionally identified agents with persistent local memory and fragmented cross-platform history. |

## 20. Deep Drift Research Position

The weak description is:

> Claude works in Slack and account data can migrate.

The serious description is:

> Claude can now act as a shared institutional agent whose channel memory, permissions, tools, scheduled work, and external actions are distinct from personal Claude history, while migration into organizational accounts preserves some memory and artifacts but explicitly drops custom Skills, connector authorization, public publishing state, and several cloud-session classes.

Therefore:

```text
SAME AGENT NAME
!= SAME HISTORY

MEMORY MOVED
!= PROCEDURE MOVED

CHAT MIGRATED
!= SKILL MIGRATED

PROJECT MOVED
!= SESSION MOVED

CONTENT MOVED
!= PUBLIC LINK SURVIVED

AGENT ACTION
!= PERSONAL USER ACTION
```

The serious Deep Drift requirement is:

> **Every shared-agent workflow should preserve agent identity, channel/workspace memory scope, initiating thread, active permission layer, external action IDs, scheduled-task origin, Skill version, connector state, migration event, and post-migration restoration state required to reconstruct who or what actually performed the work.**

## 21. Evidence Boundary

Platform facts in this report are grounded in first-party Anthropic Help Center documentation retrieved on 30 August 2026.

Anthropic states that Claude Tag replaced the previous Claude-in-Slack experience on 3 August 2026; supports channel tagging, direct messages, and an assistant panel; maintains channel/workspace memory; can follow up proactively and schedule work; uses organization-configured tools and repository access; exposes audit information; and can produce externally attributable GitHub actions linked back to their originating Slack thread.

Anthropic also states that personal-to-Team/Enterprise migration can move chats, artifacts within chats, projects, files, project sync configuration, and memory, while custom Skills do not migrate, connected-app authorizations are revoked, custom connectors must be recreated, published artifacts/public links do not survive, and several Cowork/Claude Code session types do not move.

AICMMAF and all named companion constructs, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Anthropic Help Center, **What is Claude Tag?**, current documentation checked 30 August 2026.  
   https://support.claude.com/en/articles/15594475-what-is-claude-tag

2. Anthropic Help Center, **Move your personal Claude account to a Team or Enterprise organization**, current documentation checked 30 August 2026.  
   https://support.claude.com/en/articles/9267400-move-your-personal-claude-account-to-a-team-or-enterprise-organization

3. Anthropic Help Center, **Release notes**, checked 30 August 2026.  
   https://support.claude.com/en/articles/12138966-release-notes

4. OpenAI Help Center, **ChatGPT Release Notes**, checked 30 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

5. Microsoft Learn, **Release Notes for Microsoft 365 Copilot**, checked 30 August 2026.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
