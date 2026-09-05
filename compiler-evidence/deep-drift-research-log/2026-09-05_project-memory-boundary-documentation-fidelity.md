# Deep Drift Research Update - PMBDF

## Project Memory Boundary Documentation Fidelity

**Research date:** 5 September 2026  
**Primary fresh finding:** OpenAI's current ChatGPT release notes say eligible existing unshared projects can now switch between **Default memory** and **Project-only memory**. However, the current "Projects in ChatGPT" help article still states that project-only memory can only be selected when creating a new project. The two first-party surfaces therefore describe different capability states.

## Executive finding

The platform state and the documentation state have diverged.

```text
RELEASE NOTES
14 Aug 2026
existing eligible unshared project
-> can switch memory boundary

CURRENT PROJECTS HELP ARTICLE
updated later
-> says project-only can only be set
   when starting a new project
```

Therefore:

```text
OFFICIAL DOC A
!= OFFICIAL DOC B

FEATURE RELEASED
!= ALL HELP TEXT UPDATED

MEMORY BOUNDARY
!= IMMUTABLE PROJECT PROPERTY

SAME PROJECT
AT T0
!= SAME CONTEXT PERIMETER
AT T1

DOCUMENTATION CURRENT
!= DOCUMENTATION INTERNALLY CONSISTENT
```

The new provenance object is the **documented capability state**.

## New node

### Project Memory Boundary Documentation Fidelity (PMBDF)

Minimum state model:

```text
project_id
project_creation_time
project_share_state
project_memory_mode
memory_mode_change_time
memory_mode_before
memory_mode_after
change_eligibility
change_effective_time
shared_project_lock_state
global_memory_state
workspace_memory_state
product_surface
release_note_version
help_article_version
documentation_capture_time
documentation_conflict_state
observed_ui_state
observed_execution_state
```

## 1. Existing project memory boundaries became mutable

OpenAI's August 14 release notes state that eligible unshared projects can switch between Default memory and Project-only memory without creating a new project. This changes the project from a fixed-context container into a mutable context-boundary object.

## 2. The boundary change affects what context may influence future answers

Project-only memory can use conversations inside the same project while excluding memories and conversations outside it. Default memory can expose a broader context perimeter depending on plan. Same project ID therefore no longer proves same experimental context.

## 3. Shared projects create a one-way boundary state

OpenAI states that shared projects use project-only memory and cannot be switched back to default memory. Sharing is therefore also a memory-boundary governance event.

## 4. Memory changes are not necessarily instantaneous

The release notes say memory-setting changes may take a few hours to take effect. Deep Drift should preserve setting-change time separately from observed effective time.

## 5. Documentation conflict is itself a reproducibility risk

OpenAI's current release notes say existing projects can change memory mode. The current Projects help article still says project-only memory can only be selected when starting a new project. A researcher following one official source can therefore design a different protocol than a researcher following the other.

## 6. Product truth must be separated from documentation truth

Deep Drift should distinguish:

```text
ANNOUNCED CAPABILITY
DOCUMENTED CAPABILITY
OBSERVED UI CAPABILITY
OBSERVED EXECUTION BEHAVIOR
```

These states can temporarily diverge.

## 7. Project instructions and memory boundaries are different layers

Project instructions apply only inside their project and override global custom instructions. Project memory mode is a separate layer from project files, chats, and connected app sources.

## 8. Connected apps can reach beyond the project boundary with confirmation

Project-only memory does not mean no external data access. Connected apps can retrieve authorized external information, and ChatGPT may ask for confirmation when searching outside the project. Memory boundary and tool-access boundary are different provenance dimensions.

## 9. Chat-to-document generation inherits the active project boundary

A report generated in the same project before and after a memory-mode switch can draw on different hidden context even when explicit files and prompt remain identical. Final DOCX/PDF does not reveal that difference.

## 10. Static export flattens memory-boundary history

A generated document can preserve content, format, and citations while losing project memory mode, transition history, propagation window, eligible outside-project context, and documentation state at generation time.

## 11. Copy-paste creates another boundary reset

Text generated under a broad default-memory context can be copied into a project-only workspace. The isolated project then contains a derivative of context that its current policy would not independently retrieve. Current memory policy therefore does not prove historical content ancestry.

## Fresh category scan

| Area | Status | Deep Drift implication |
|---|---|---|
| Memory | **Major unlogged structural delta** | Existing project memory boundaries can be changed, with propagation delay and shared-project lock-in |
| Skills | No stronger delta beyond SSVPF/SGOPF/CSAF | Skill version, governance, and composition nodes remain current |
| Mini-app builders | No stronger delta beyond WADGF | Apps SDK/MCP deployment remains the latest major builder-governance change |
| Chat-to-document | Important implication | Same project can generate artifacts under different memory perimeters over time |
| DOCX/PDF | Provenance implication | Static files flatten project-memory mode and boundary transitions |
| Copy-paste/export | Provenance implication | Derivatives can carry context from a broader historical boundary into a stricter current one |
| Creator workflow | **Major** | Long-running workspaces now have mutable context architecture, not merely accumulating content |

## New failure classes

- **Same-Project-Equals-Same-Context Fallacy** — Assuming a stable project identity implies a stable memory perimeter.
- **Setting-Changed-Equals-Setting-Effective Error** — Ignoring propagation time between configuration change and effective behavior.
- **Shared-Project-Reversibility Fallacy** — Assuming a shared project can later return to default memory.
- **Official-Documentation-Equals-Single-Truth Fallacy** — Assuming contemporaneous first-party documentation is internally consistent.
- **Project-Only-Equals-No-External-Context Fallacy** — Confusing memory isolation with tool-mediated external retrieval.
- **Current-Policy-Equals-Historical-Ancestry Error** — Assuming content currently inside a project was generated only under the project's present memory policy.

## Deep Drift benchmark additions

**Project Memory Boundary Fidelity (PMBF)** — Can each run reconstruct the project's effective memory mode and eligible context perimeter?

**Memory Boundary Transition Fidelity (MBTF)** — Can setting-change time, propagation window, and effective new state be distinguished?

**Documentation Capability Consistency Fidelity (DCCF)** — Do first-party release notes, help pages, UI state, and observed behavior describe the same capability?

**Shared-Project Boundary Lock Fidelity (SPBLF)** — Can the archive identify when sharing permanently converted a project to project-only memory?

**Historical Context Ancestry Fidelity (HCAF)** — Can content currently stored in a project be traced to the memory/context policy active when it was originally generated?

## DRPA-1.0 protocol additions

### PROJECT MEMORY MODE VERSIONING RULE
> Treat project memory mode as a time-varying project property. Preserve the effective memory mode for every provenance-sensitive run rather than assuming the project's current setting describes its historical context perimeter.

### MEMORY BOUNDARY TRANSITION RULE
> Preserve configuration-change time separately from observed effective time when a platform documents delayed propagation. Experiments conducted during the transition window must be marked as context-boundary ambiguous.

### SHARING-BOUNDARY LOCK RULE
> Treat project sharing as a potential irreversible memory-boundary event when the platform automatically forces project-only memory and does not permit return to default memory.

### DOCUMENTATION CONFLICT RULE
> When first-party release notes, help documentation, UI behavior, or observed execution disagree, preserve each state separately with capture timestamps. Do not silently collapse conflicting official descriptions into one assumed truth.

### MEMORY-TOOL BOUNDARY SEPARATION RULE
> Distinguish memory/context isolation from connected-app retrieval permissions. A project-only memory setting must not be represented as proof that no external source can be queried through authorized tools.

## Canonical Deep Drift requirement

> Treat project memory as a mutable context-boundary state with its own version history. Preserve the mode active at execution time, transitions, sharing lock-in, tool-mediated context routes, and contemporaneous documentation state.

## Deep Drift principle

> **A project can keep the same name while quietly changing the borders of what it is allowed to remember.**

Operationally:

> **Version the context boundary, not just the project.**

## Sources

1. OpenAI Help Center. **ChatGPT - Release Notes, August 14, 2026.** States that eligible existing unshared projects can switch between Default memory and Project-only memory; changes may take a few hours; shared projects remain project-only.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

2. OpenAI Help Center. **Projects in ChatGPT.** Current help article. Describes project files, instructions, linked Google Drive/Slack sources, connected-app retrieval, project sharing, memory behavior, and shared-project project-only lock-in. The article also still states that project-only memory can only be selected when starting a new project, creating a first-party documentation conflict with the August 14 release notes.  
   https://help.openai.com/en/articles/10169521-projects-in-chatgpt

3. Anthropic Help Center. **Use Claude's chat search and memory to build on previous context.** Current 5 September state; legacy memory recovery remains available until 9 September 2026.  
   https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context

4. Google Workspace Updates. **Turn Google Docs, PDFs, and Word files into video summaries in Google Vids.** Scheduled Release rollout begins 5 September 2026.  
   https://workspaceupdates.googleblog.com/2026/09/turn-google-docs-pdfs-and-word-files-into-video-summaries-in-Google-Vids.html

## Research status

**Node status:** New to the Deep Drift research log.  
**Duplicate check:** Repository code search found no existing Deep Drift node for mutable existing-project memory boundaries or the current first-party documentation conflict about that mutability.  
**Relationship to prior nodes:** Extends MSMRF, CMPF, LHACF, WADGF, and creator-context provenance. PMBDF is distinct because it treats the memory perimeter of a persistent project as a versioned state and treats documentation inconsistency as experimental evidence.  
**Freshness:** The capability was released 14 August 2026; the contradiction remains present in current first-party documentation as of 5 September 2026, making it a current reproducibility issue.
