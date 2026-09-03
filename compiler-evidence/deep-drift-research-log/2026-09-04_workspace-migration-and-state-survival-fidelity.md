# Deep Drift Research Update - WMSSF

## Workspace-Migration and State-Survival Fidelity

**Research date:** 4 September 2026  
**Primary fresh delta:** Anthropic updated its first-party guidance for moving a personal Claude account into a Team or Enterprise organization. The migration is selective: chats, projects, memory, project sync configuration, Claude Code settings, and some Claude Design state can move, while custom Skills, connected-app authorizations, custom connectors, public links, published artifacts, and several Cowork/Claude Code session classes do not.  
**Scope:** memory, Skills, connected apps, project instructions/files, design systems, artifacts, local/cloud sessions, public links, account/workspace migration, and creator-workflow continuity.

## Executive finding

Account migration is becoming a **state transformation**, not a simple account move.

Anthropic's migration documentation now makes the survival matrix unusually explicit.

### State that can move

- chats;
- artifacts embedded in chats;
- projects, project instructions, and files;
- projects created through or used with Cowork;
- uploaded files and attachments;
- project sync configurations for Drive folders and repositories;
- Claude memory from chats and projects when the destination organization permits memory;
- Claude Code memory and personal settings unless organization values already override them;
- Claude Design systems and projects migrated since 14 August 2026.

### State that does not move cleanly

- custom Skills;
- connected-app sign-ins and authorizations;
- personally added custom connectors;
- published artifacts;
- public chat share links;
- pending share invites;
- Cowork desktop session state stored locally;
- Cowork cloud sessions;
- Claude Code cloud sessions, scheduled tasks, and mobile sessions;
- Claude Design systems/projects migrated before the documented 14 August boundary.

The important Deep Drift distinction is therefore:

```text
ACCOUNT MIGRATED
!= WORKFLOW MIGRATED

CONTENT SURVIVES
!= CAPABILITY SURVIVES

MEMORY SURVIVES
!= SKILLS SURVIVE

PROJECT SURVIVES
!= SESSION SURVIVES

FILE SURVIVES
!= CONNECTOR AUTH SURVIVES

PUBLIC LINK EXISTS BEFORE MIGRATION
!= PUBLIC LINK EXISTS AFTER MIGRATION

SAME USER
!= SAME EFFECTIVE CREATOR RUNTIME
```

The new research object is the **migration survival matrix**.

## New node

### Workspace-Migration and State-Survival Fidelity (WMSSF)

Minimum state model:

```text
source_account_type
destination_workspace_type
migration_event
migration_time
chat_state
project_state
project_instruction_state
project_file_state
memory_state
skill_state
connector_state
authorization_state
design_system_state
artifact_state
public_link_state
local_session_state
cloud_session_state
scheduled_task_state
post_migration_runtime
manual_reconstitution_actions
```

## 1. Migration is selective causal survival

A user's creator environment is now composed of several independently migratable layers.

```text
USER CREATOR STATE
   |
   +--> CHAT HISTORY
   +--> MEMORY
   +--> PROJECTS
   +--> PROJECT FILES
   +--> PROJECT INSTRUCTIONS
   +--> SKILLS
   +--> CONNECTORS
   +--> APP AUTHORIZATIONS
   +--> DESIGN SYSTEMS
   +--> ARTIFACTS
   +--> LOCAL SESSIONS
   +--> CLOUD SESSIONS
   +--> PUBLIC LINKS
   +--> SCHEDULED TASKS
```

Migration can preserve some branches while severing others.

Therefore a post-migration account must never be described simply as "the same environment in a new workspace."

## 2. Memory continuity and Skill continuity diverge

Anthropic documents that Claude memory from chats and projects can move into the destination organization if memory is enabled there.

Custom Skills, however, have no migration path and must be exported separately if the user wants to retain them.

This gives Deep Drift a direct causal split:

```text
MEMORY
-> MAY SURVIVE

CUSTOM SKILLS
-> DO NOT MIGRATE AUTOMATICALLY
```

A creator may therefore preserve what the model remembers while losing the procedural instructions that determined **how** the model acted.

That makes post-migration output comparison especially dangerous.

```text
SAME MEMORY
+ DIFFERENT SKILL INVENTORY
= DIFFERENT EFFECTIVE AGENT
```

## 3. Connected-app identity is deliberately broken

Anthropic states that connected-app authorizations are revoked during migration.

The creator may reconnect the same service afterward, but this creates a new authorization event.

For provenance:

```text
PRE-MIGRATION APP AUTH
!= POST-MIGRATION APP AUTH
```

Even if the external service is identical.

Permissions, account choice, scopes, organization policy, and accessible data can differ on reconnection.

Deep Drift should preserve the old authorization boundary and new authorization boundary separately.

## 4. Custom connectors are not portable by default

Personally added custom connectors must be recreated after migration, and the destination organization's policy may prohibit them.

This means:

```text
CONNECTOR CONFIGURATION
!= PORTABLE CAPABILITY
```

An agentic workflow may survive as text instructions while becoming technically non-executable.

The archive should distinguish:

```text
WORKFLOW DEFINITION
WORKFLOW CAPABILITY
WORKFLOW EXECUTABILITY
```

## 5. Public provenance links can die permanently

Anthropic says public share links to chats stop working permanently after migration.

Published artifacts also do not move into Team and Enterprise where publishing is unavailable.

This creates **external citation decay**.

A research paper, blog post, issue, or social post may point to a public Claude artifact or public chat that becomes unreachable after an account migration.

Therefore:

```text
INTERNAL CONTENT SURVIVES
!= EXTERNAL REFERENCE SURVIVES
```

Deep Drift must snapshot or archive externally cited public objects before migration.

## 6. Session locality changes survival

Cowork desktop sessions are stored locally and remain on the computer, while Cowork cloud sessions do not migrate.

Claude Code cloud sessions, scheduled tasks, and mobile sessions also do not move.

So migration exposes another critical locality rule:

```text
LOCAL SESSION
!= CLOUD SESSION
```

Their survival semantics are different even under the same account identity.

This extends MMBESF and CRFPF: execution surface and storage locality determine whether state survives an identity/workspace transition.

## 7. Scheduled tasks are workflow state, not merely settings

Claude Code cloud scheduled tasks are explicitly listed among state that does not migrate.

This is important for Deep Drift monitoring systems.

A recurring research watch can disappear while:

- its project survives;
- its memory survives;
- its files survive;
- its human owner survives.

Therefore:

```text
RESEARCH PROJECT SURVIVES
!= RESEARCH AUTOMATION SURVIVES
```

Scheduled execution must be audited independently after account/workspace migration.

## 8. Design-system survival has a date boundary

Anthropic documents that Claude Design systems and projects migrated since 14 August 2026 can move, while earlier migrated Design systems/projects do not.

This creates a temporal compatibility boundary.

```text
DESIGN STATE
+ MIGRATION DATE
-> SURVIVAL ELIGIBILITY
```

The exact date becomes part of creator provenance.

A design system that appears identical may have different migration behavior depending on when it entered the account.

## 9. Destination policy can override migrated state

Even memory that is technically migratable may disappear from the effective creator runtime if the destination organization has memory disabled.

Similarly, connectors and other capabilities can be blocked by organization policy.

The actual post-migration state is therefore:

```text
MIGRATED STATE
+ DESTINATION POLICY
= EFFECTIVE STATE
```

Not:

```text
SOURCE STATE
= DESTINATION STATE
```

This distinction belongs in every comparative test after workspace migration.

## 10. Migration creates a reconstitution phase

Anthropic advises users to export custom Skills, preserve published artifacts, remember connected apps, and separately retain cloud-session outputs before migrating.

That means the human becomes part of the migration pipeline:

```text
PLATFORM MIGRATION
-> AUTOMATIC STATE TRANSFER
-> KNOWN STATE LOSS
-> HUMAN EXPORT / BACKUP
-> RE-AUTHORIZATION
-> MANUAL RECONSTRUCTION
-> POST-MIGRATION VERIFICATION
```

This is not transparent portability.

It is hybrid machine-human reconstitution.

Deep Drift should log every manual repair action because those actions can change the resulting runtime.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | Major migration implication | Memory can migrate, but only if destination policy permits it |
| Skills | Major fresh delta | Custom Skills have no automatic migration path |
| Mini-app / artifacts | Major | Published artifacts and public sharing can break; chat artifacts can move |
| Chat-to-document | Indirect but material | Projects/files survive differently from active sessions and automation state |
| DOCX/PDF | Archival implication | Exported files may be the only durable representation of cloud-session outputs before migration |
| Copy-paste/export | Recovery implication | Skills and lost state may need manual export/re-import or reconstruction |
| Connected apps | Major | Authorizations are revoked; custom connectors may require reconstruction |
| Creator workflow | Major | Workspace identity transitions can selectively destroy procedural capability while preserving content |

## New failure classes

### Account-Equals-Environment Fallacy
Assuming moving the user account preserves the complete creator environment.

### Memory-Equals-Agent-Continuity Error
Assuming retained memory means the same effective agent exists after migration.

### Project-Equals-Session Continuity Error
Assuming preserved projects imply Cowork or Claude Code sessions also survive.

### Reauthorization-Equals-Same-Access Fallacy
Assuming reconnecting the same app recreates the exact prior permission boundary.

### Public-Link Permanence Fallacy
Assuming a public chat/artifact citation remains valid after account migration.

### Automation-Invisibility Error
Ignoring scheduled tasks because projects and files survived.

### Migration-Date Blindness
Ignoring temporal eligibility boundaries for design-system/project transfer.

### Destination-Policy Blindness
Assuming migrated state is usable regardless of organization policy.

## Deep Drift benchmark additions

**Migration Survival Fidelity (MSF)**  
Can every creator-state category be classified as migrated, lost, manually recoverable, or policy-dependent?

**Memory-vs-Skill Migration Fidelity (MSMF)**  
Can semantic continuity remain separate from procedural capability continuity?

**Authorization Reconstitution Fidelity (ARF)**  
Can old and new connected-app authorization boundaries be distinguished?

**Public Reference Survival Fidelity (PRSF)**  
Can externally cited chats and artifacts be checked for survivability before and after migration?

**Session Locality Migration Fidelity (SLMF)**  
Can local, cloud, desktop, web, mobile, and scheduled-session survival be distinguished?

**Destination Policy Fidelity (DPF)**  
Can organization-level policy overrides be separated from source-account migration state?

## DRPA-1.0 protocol additions

### WORKSPACE-MIGRATION SURVIVAL RULE

> When an AI platform moves a user, project, or creator environment between personal, team, enterprise, or other workspace identities, the migration must be treated as a multi-layer provenance transition rather than a single account event. Preserve source and destination account classes, migration time, and the survival status of chats, memory, project instructions, files, Skills, connectors, authorizations, design systems, artifacts, public links, local sessions, cloud sessions, and scheduled tasks. Any state requiring manual export, reconnection, or reconstruction must be recorded as a separate reconstitution event.

### CAPABILITY-SURVIVAL SEPARATION RULE

> Content continuity must never be treated as proof of capability continuity. After migration, verify Skill inventory, connector inventory, authorization scope, organization policy, scheduled tasks, and execution-surface state independently from chats, memory, projects, and files. A creator environment is reproducible only when both informational state and procedural capability state are accounted for.

## Eir'an state-flow addition

```text
MIGRATION:
source account
destination workspace
timestamp
migration path

SURVIVAL:
chats
memory
projects
files
project instructions
skills
connectors
authorizations
design systems
artifacts
public links
sessions
scheduled tasks

RECONSTITUTION:
manual exports
re-authentication
connector recreation
skill import/rebuild
artifact backup
automation recreation

POST-MIGRATION:
effective memory
effective skills
effective tools
effective permissions
effective policies
verification run
```

## Canonical Deep Drift requirement

> Treat account and workspace migration as a selective transformation of creator state. Preserve a before/after survival matrix for informational state, procedural state, authorization state, execution state, public-reference state, and automation state. Never infer full continuity from the survival of chats, projects, files, or memory alone.

## Deep Drift principle

> **The user can migrate while the workflow gets amputated.**

Operationally:

> **Before moving the account, inventory what remembers, what executes, what authenticates, what publishes, and what will simply vanish.**

## Broader platform scan

OpenAI's public release feed still shows 1 September 2026 as the latest general ChatGPT release entry found in this scan. No stronger new same-day change was found for Work, Skills, DOCX/PDF generation, or copy/paste behavior beyond the September 3 Codex context-management changes already represented by CCPSF.

Anthropic's general release notes still list Claude Fable 5.1 and Mythos 5.1 on 1 September, but the updated account-migration documentation is materially new for creator-workflow provenance because it exposes an explicit state-survival matrix across memory, Skills, apps, projects, artifacts, and sessions.

Google Workspace's strongest recent creator changes remain persistent Gemini custom instructions and Canvas/workspace automation changes already represented by prior Deep Drift nodes.

Microsoft 365 Copilot's latest public release-note batch remains dated 25 August 2026; no stronger September 4 creator-workflow delta was found in this scan.

## Sources

1. Anthropic Help Center. **Move your personal Claude account to a Team or Enterprise organization.** Updated 4 September 2026. Documents which creator-state categories migrate and which do not, including chats, projects, files, memory, Claude Code settings, Claude Design systems, custom Skills, connected apps, custom connectors, published artifacts, public links, Cowork sessions, cloud sessions, and scheduled tasks.  
   https://support.claude.com/en/articles/9267400-move-your-personal-claude-account-to-a-team-or-enterprise-organization

2. Anthropic Help Center. **Use artifacts in Claude Cowork.** Current documentation accessed 4 September 2026. Documents the updated post-19-August artifact system, including account persistence, organization sharing, web access, connected apps, and versioning, with different availability under CMEK/ZDR/HIPAA configurations.  
   https://support.claude.com/en/articles/14729249-use-artifacts-in-claude-cowork

3. Anthropic Help Center. **Import and export your memory from Claude.** Current documentation accessed 4 September 2026. Documents cross-provider memory import/export and the fact that imported memories may be transformed or selectively incorporated.  
   https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude

4. OpenAI. **Release Notes.** Current feed checked 4 September 2026. Latest general ChatGPT release entry found in the scan remains 1 September 2026.  
   https://openai.com/products/release-notes/

5. Microsoft Learn. **Release Notes for Microsoft 365 Copilot.** Current page checked 4 September 2026. Latest public release-note batch found remains 25 August 2026.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository entry was found for selective account/workspace migration across memory, Skills, connector authorizations, public links, local/cloud sessions, Design systems, and scheduled-task survival as a single provenance problem.  
**Relationship to prior nodes:** Extends MMBESF (memory boundaries), MPSRF (memory portability), DSIEF (design-system inheritance), CRFPF (runtime/session continuity), and CCPSF (procedural-state persistence). WMSSF adds cross-workspace migration as a selective survival/reconstitution event.  
**Freshness:** Primary Anthropic migration documentation was updated on 4 September 2026.
