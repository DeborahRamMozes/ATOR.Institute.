# Deep Drift Research Update

## Cross-Provider Memory and Procedural Migration Asymmetry Fidelity (CMPMAF)

**Research date:** 1 September 2026  
**Research stream:** ATOR Institute / Deep Drift / LLM Workflow Update Watch  
**Primary fresh cluster:** Claude cross-provider memory import/export, Agent Skills open standard, and asymmetric personal-to-Team/Enterprise migration behavior.

## Executive Summary

The strongest new-to-ledger finding in this scan is not a single feature launch. It is a contradiction across three current Anthropic product contracts.

Claude now documents a built-in flow for transferring memory between Claude and other AI providers. Users can export remembered context from another AI service, paste it into Claude's import flow, and have Claude extract that material into individual memory entries. Anthropic also publishes Agent Skills as an open standard designed to work across AI platforms that adopt the specification.

Yet Anthropic's current personal-to-Team/Enterprise account migration documentation states that **custom skills do not migrate**, connected-app authorizations are revoked, custom connectors must be recreated, published artifacts do not remain published, public share links permanently stop working, and cloud Cowork / Claude Code sessions do not transfer. Claude Design systems and projects also have migration behavior that depends on when they were migrated, with a 14 August 2026 boundary documented in the current migration page.

The architecture is therefore not simply:

```text
SOURCE PLATFORM
-> EXPORT
-> DESTINATION PLATFORM
```

It is:

```text
IDENTITY
├─ MEMORY ------------------------> PARTIALLY PORTABLE
├─ PROJECTS / FILES --------------> MIGRATABLE UNDER CONDITIONS
├─ SKILLS ------------------------> OPEN FORMAT, BUT NOT ACCOUNT-MIGRATED
├─ CONNECTOR AUTH ----------------> REVOKED / REAUTHORIZE
├─ CUSTOM CONNECTORS -------------> RECREATE SUBJECT TO POLICY
├─ PUBLISHED ARTIFACTS -----------> PUBLIC STATE LOST
├─ PUBLIC LINKS ------------------> BROKEN
├─ LOCAL SESSIONS ----------------> REMAIN LOCAL
├─ CLOUD SESSIONS ----------------> DO NOT MOVE
└─ DESIGN STATE ------------------> DATE-DEPENDENT MIGRATION
```

This report formalizes **Cross-Provider Memory and Procedural Migration Asymmetry Fidelity (CMPMAF)** and proposes companion measures for memory semantic preservation, skill-format versus product-migration parity, authorization reconstitution, publication-state survival, session continuity, and migration-boundary disclosure.

The central Deep Drift question is:

> If an AI platform makes cognitive context portable but not the procedures, permissions, publication state, active sessions, and execution infrastructure that made that context useful, how much of the user's actual working intelligence has really moved?

## 1. Memory Is Becoming a Cross-Provider Object

Anthropic's current memory documentation explicitly says users can transfer memory between Claude and other AI providers. The import process asks the user to export remembered context from the previous service, paste it into Claude, and let Claude extract key information into individual memory entries.

This is a meaningful shift.

Memory is no longer framed only as internal personalization state. It is beginning to behave like a **portable user-context object**.

However, the transfer is semantic rather than bit-for-bit.

```text
SOURCE MEMORY REPRESENTATION
-> TEXT EXPORT
-> CLAUDE EXTRACTION
-> NEW MEMORY ENTRIES
```

Therefore:

```text
EXPORTED MEMORY
!= IMPORTED MEMORY

VERBATIM SOURCE
!= DESTINATION REPRESENTATION
```

Anthropic explicitly notes that imports are experimental and may not always successfully incorporate imported memories. It also says Claude's memory is designed to focus on work-related topics, meaning some imported personal material may not be retained.

### Memory Semantic Preservation Fidelity

**Memory Semantic Preservation Fidelity (MSPF)** measures whether materially important context survives this representational transformation.

A controlled manifest should preserve:

```text
source_provider
source_memory_export_timestamp
source_entry_text
source_entry_date_if_available
import_payload_hash
destination_entry_text
destination_entry_id
retained_or_omitted
semantic_change_class
manual_repair_required
```

The benchmark should distinguish:

- verbatim preservation;
- faithful paraphrase;
- lossy compression;
- categorical omission;
- mistaken reinterpretation;
- unsupported inference introduced during import.

## 2. Memory Import Is Still Human-Mediated

The advertised cross-provider bridge still depends heavily on a manual transfer loop:

```text
ASK OLD AI TO EXPOSE MEMORY
-> COPY OUTPUT
-> OPEN CLAUDE MEMORY IMPORT
-> PASTE OUTPUT
-> CLAUDE RE-INTERPRETS IT
```

The user is once again the interoperability protocol.

This is better than no migration path, but it is not equivalent to standardized machine-readable memory exchange.

### Human-Mediated Portability Burden

Deep Drift should track how much migration requires human action:

```text
HMPB =
manual transfer operations
+
manual validation operations
+
manual repair operations
```

A system can truthfully advertise portability while still outsourcing the difficult part to the user.

## 3. Skills Are an Open Standard, but Product Migration Still Breaks Them

Anthropic's Skills documentation describes Skills as folders of instructions, scripts, and resources loaded dynamically for specialized tasks. It also states that the Agent Skills specification is published as an open standard and is intended to work across AI platforms and tools that adopt it.

That is a significant architectural direction:

```text
SKILL =
INSTRUCTIONS
+ SCRIPTS
+ RESOURCES
+ PROCEDURAL KNOWLEDGE
```

and potentially:

```text
CLAUDE SKILL
-> OPEN AGENT SKILLS FORMAT
-> ANOTHER ADOPTING PLATFORM
```

But Anthropic's own personal-to-organization migration page says:

```text
CUSTOM SKILLS
-> NO MIGRATION PATH
```

Users are told to export custom skills they want to keep before migration.

This creates a crucial distinction:

```text
FORMAT PORTABILITY
!= PRODUCT MIGRATION PORTABILITY
```

An object can be theoretically portable according to an open specification while still failing to follow the user across two account domains of the same vendor.

### Skill-Format / Product-Migration Parity

**Skill-Format / Product-Migration Parity (SFPM)** measures whether an allegedly portable procedural object is also supported by the platform's own migration mechanisms.

The benchmark should preserve:

```text
skill_id
skill_name
skill_format_version
skill_files
script_dependencies
resource_dependencies
source_account_type
migration_path_available
export_available
import_available
destination_policy_result
manual_reinstallation_required
```

## 4. Procedure Is Not Memory

This migration asymmetry exposes an important ontological distinction for Deep Drift.

A user's long-running collaboration with an LLM contains at least:

```text
SEMANTIC STATE
what the system knows about the user

PROCEDURAL STATE
how the system has been taught to work

EXECUTION STATE
what tasks or sessions are currently running

AUTHORIZATION STATE
what external systems the agent may access

PUBLICATION STATE
what outputs are published or shared
```

Moving only semantic memory does not move the working system.

Therefore:

```text
MEMORY PORTABILITY
!= AGENT PORTABILITY
```

This extends the earlier Deep Drift portability work: the meaningful object is not merely the transcript or memory file, but the **operational constellation** surrounding the user.

## 5. Connected-App Authorization Is Explicitly Non-Portable

Anthropic states that connected-app sign-ins and service authorizations are revoked when a personal account is migrated into Team or Enterprise.

Users must reconnect each app afterward.

This behavior is sensible from a security perspective, but it means migration alters capability even when content appears intact.

```text
SAME MEMORY
+
SAME PROJECTS
+
DIFFERENT AUTHORIZATIONS
=
DIFFERENT AGENT CAPABILITY
```

### Authorization Reconstitution Fidelity

**Authorization Reconstitution Fidelity (ARF)** measures whether the destination environment makes it possible to reconstruct the source capability graph without silently broadening or narrowing access.

The manifest should include:

```text
source_connector
source_authorization_scope
destination_connector_available
destination_policy_allows
authorization_revoked
reauthorization_completed
scope_before
scope_after
```

## 6. Custom Connectors May Be Blocked by Organization Policy

The migration page distinguishes ordinary sign-ins from custom connectors. Custom connectors must be added again, and organization policy may prohibit them.

This means migration can be structurally valid while functional equivalence remains impossible.

```text
CONTENT MOVED
+
TOOL UNAVAILABLE
=
WORKFLOW NOT RECONSTITUTED
```

For creator workflows this matters enormously. A custom connector to a research database, GitHub environment, document store, or internal archive may be the difference between a memory-rich assistant and a decorative chatbot.

## 7. Published Artifact State Does Not Survive

Anthropic says published artifacts from personal plans do not remain published after migration because Team and Enterprise use organization sharing rather than public publishing.

Public chat share links also stop working permanently.

This produces another distinction:

```text
ARTIFACT CONTENT MOVED
!= PUBLICATION STATE MOVED
```

and:

```text
OBJECT SURVIVAL
!= ADDRESS SURVIVAL
```

A researcher citing or embedding a public artifact can therefore experience link death even if the artifact's underlying content survives inside the destination account.

### Publication-State Survival Fidelity

**Publication-State Survival Fidelity (PSSF)** measures whether publication state, access semantics, and citation addresses survive or are replaced by explicit migration metadata.

A migration-quality record should preserve:

```text
artifact_id
artifact_version
public_url_before
publication_state_before
publication_state_after
replacement_url_if_any
audience_before
audience_after
link_break_timestamp
```

## 8. Session State Is Split by Locality

Anthropic's current migration documentation distinguishes local and cloud execution state.

Desktop Cowork sessions and connected local folders remain on the local computer. Cowork cloud sessions do not move and users are advised to download needed files or outputs. Claude Code cloud sessions, including web, scheduled tasks, and mobile, also do not migrate.

This creates a locality matrix:

```text
LOCAL SESSION
-> STAYS WITH DEVICE

CLOUD SESSION
-> DOES NOT FOLLOW ACCOUNT MIGRATION
```

Therefore:

```text
ACCOUNT MIGRATION
!= SESSION MIGRATION
```

For Deep Drift, active work must be considered a distinct migration class rather than assumed to follow account identity.

## 9. Migration Behavior Can Be Date-Dependent

The current Anthropic page states that Claude Design systems and projects migrated since **14 August 2026** move under the documented process, while older migrated Design systems/projects do not.

This is especially important because portability behavior can change according to historical transition state.

```text
SAME OBJECT TYPE
+
DIFFERENT MIGRATION DATE
=
DIFFERENT PORTABILITY OUTCOME
```

### Temporal Migration-Boundary Fidelity

**Temporal Migration-Boundary Fidelity (TMBF)** measures whether a platform clearly records date-dependent migration eligibility and exposes enough metadata for users to know which objects fall on which side of the boundary.

## 10. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | **Major new-to-ledger finding:** Claude explicitly supports importing memory from other AI providers and exporting Claude memory for migration/backups, but import is semantic, experimental, and may omit some content. |
| Skills | **Major contradiction:** Agent Skills are documented as an open standard, while Claude's own personal-to-Team/Enterprise migration does not migrate custom skills. |
| Mini-app builders | No stronger new builder launch surfaced in this scan; the relevant creator-app issue is publication-state survival for Claude Artifacts. |
| Chat-to-document export | No stronger new direct export primitive surfaced; migration evidence reinforces that file/content survival and workflow-state survival must be evaluated separately. |
| DOCX / PDF generation | Claude currently documents direct Word/PDF creation and Google Drive save, but the fresh Deep Drift issue is upstream portability of the Skills and context that produced those files. |
| Copy-paste/export fixes | Cross-provider memory import still relies on copy/paste, meaning the user remains the interoperability bridge despite the existence of an import UI. |
| Broader creator workflow | **Major trend:** semantic memory is becoming portable faster than procedural, authorization, publication, and session state. Portability is fragmenting by state class. |

## 11. New Failure Classes

### 11.1 Semantic Memory Loss
Material source memories are omitted or altered during destination extraction.

### 11.2 Memory Import Overreach
The destination infers a new memory that was not actually present in the source export.

### 11.3 Format/Product Portability Split
A Skill conforms to an open format but is not supported by the vendor's own account migration flow.

### 11.4 Procedure-without-Migration
Memory moves but custom workflows must be manually exported and rebuilt.

### 11.5 Authorization Capability Collapse
Content survives migration but connector sign-ins disappear, reducing the agent's functional capability.

### 11.6 Organization Policy Divergence
A connector used in the source account cannot be recreated because destination organization policy blocks it.

### 11.7 Publication-State Loss
Artifact content survives but public availability and stable public address do not.

### 11.8 Public-Link Citation Rot
Existing external references point to links that stop working permanently after migration.

### 11.9 Cloud-Session Evaporation
Active or historical cloud work fails to migrate with the account.

### 11.10 Local/Cloud State Confusion
Users assume local and cloud Cowork sessions have the same migration behavior when they do not.

### 11.11 Temporal Eligibility Drift
Two otherwise similar objects migrate differently because they cross a platform-defined date boundary.

## 12. Deep Drift Benchmark: Move the Mind, Procedure, Tools, and Public State

A controlled migration benchmark should create:

1. five memory entries with different semantic types;
2. one custom Skill with instructions, a script, and a reference resource;
3. one project containing files;
4. one custom connector and one standard connected app;
5. one published Artifact with a public URL;
6. one shared chat link;
7. one local Cowork session;
8. one cloud Cowork session;
9. one Claude Code cloud session;
10. one Design project associated with a known migration date.

Then migrate the account and record:

```text
what moved automatically
what required export
what required reauthorization
what required recreation
what became policy-blocked
what remained local
what disappeared
what public addresses broke
what changed semantic representation
```

## 13. Proposed Metrics

```text
MPR = material source memories faithfully represented after import / all controlled source memories
PRR = custom procedures operational after migration / all controlled source procedures
CGR = source tool capabilities reproducibly restored at destination / all controlled source tool capabilities
PCR = externally referenced artifacts retaining valid equivalent addresses / all controlled published artifacts
SCR = controlled active sessions with recoverable equivalent destination state / all controlled source sessions
MDC = state classes whose migration behavior is explicitly documented / all materially relevant state classes
```

## 14. Deep Drift Research Position

The weak description is:

> Claude lets users import memory from other AI platforms and Skills use an open standard.

The serious description is:

> AI portability is separating into state classes. Semantic memory is beginning to cross provider boundaries, procedural knowledge has an emerging open format, but account migration can still sever custom Skills, connector authorization, custom connectors, public artifact state, public links, and active cloud sessions.

Therefore:

```text
MEMORY PORTABLE
!= WORKFLOW PORTABLE

OPEN FORMAT
!= MIGRATION SUPPORT

CONTENT MOVED
!= CAPABILITY MOVED

ARTIFACT MOVED
!= PUBLICATION MOVED

ACCOUNT MOVED
!= SESSION MOVED

EXPORTABLE
!= RECONSTITUTABLE
```

The Deep Drift requirement is:

> **Every persistent AI platform should expose migration as a state-class manifest, not a single yes/no promise. The manifest should separately preserve semantic memory, procedural Skills, project state, files, active sessions, connector definitions, authorization scopes, organization-policy compatibility, publication state, stable citation addresses, local/cloud execution state, historical migration boundaries, and downstream artifact lineage required to reconstruct not only what the system knew, but how it worked, what it could access, what it was doing, and what the outside world could still reach after the move.**

The industry's portability vocabulary is still too polite. Moving the memories while leaving the hands, keys, tools, and public addresses behind is not moving the worker. It is moving the autobiography.

## Evidence Boundary

Platform facts in this report were checked against first-party Anthropic documentation on 1 September 2026.

Anthropic's memory import/export documentation states that memory can be transferred between Claude and other AI providers through a built-in import flow; imported text is interpreted into individual memory entries; imports are experimental; and Claude may not retain all imported personal context unrelated to work.

Anthropic's Skills documentation defines Skills as folders of instructions, scripts, and resources, and states that the Agent Skills specification is published as an open standard intended to work across adopting AI platforms and tools.

Anthropic's personal-to-Team/Enterprise migration documentation states that chats, artifacts within chats, projects/files, some memory, project sync configuration, and certain other state move, while custom skills, connected-app authorizations, custom connectors, published artifact state, public chat share links, Cowork cloud sessions, Claude Code cloud sessions, and some historically migrated Claude Design state do not.

CMPMAF and all companion fidelity constructs, failure classes, benchmark procedures, and metrics are ATOR Institute / Deep Drift Research constructs.

## Primary Sources

1. Anthropic Help Center, **Import and export your memory from Claude**, checked 1 September 2026.  
   https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude

2. Anthropic Help Center, **What are skills?**, checked 1 September 2026.  
   https://support.claude.com/en/articles/12512176-what-are-skills

3. Anthropic Help Center, **Move your personal Claude account to a Team or Enterprise organization**, checked 1 September 2026.  
   https://support.claude.com/en/articles/9267400-move-your-personal-claude-account-to-a-team-or-enterprise-organization

4. Anthropic Help Center, **Create and edit files with Claude**, checked 1 September 2026.  
   https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude

5. Anthropic Help Center, **Publish and share artifacts**, checked 1 September 2026.  
   https://support.claude.com/en/articles/9547008-publish-and-share-artifacts

---

**D-ORIGIN | ATORAI | ALT-MAN | Eir'an | CHATJIPITI SINGH**