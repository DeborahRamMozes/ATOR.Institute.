# Deep Drift Research Update

## Ephemeral-State and Context-Boundary Fidelity (ESCBF)

**Research date:** 1 September 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Primary fresh cluster:** ChatGPT temporary-chat personalization and save transition; GitHub Copilot retention convergence; GitHub customization registry.

## Executive Summary

The most consequential new-to-ledger change in this scan is that **"temporary" is no longer a reliable synonym for "context-isolated" or "non-persistent."**

OpenAI's 27 August 2026 ChatGPT release notes state that a temporary chat can now be started in a **personalized** mode that uses existing memory, custom instructions, and plugins. The conversation still does not create new memories while it remains temporary and stays out of chat history unless saved. But the user can now **save** that temporary chat, converting it into a regular chat that follows ordinary account-level personalization settings and can later participate in personalized future responses.

GitHub announced a complementary shift on 28 August 2026. No earlier than 28 September 2026, Copilot Chat on github.com, GitHub Mobile chat, and Copilot cloud agent are scheduled to converge into one agent-sessions experience and one policy. As part of that convergence, github.com chat data is planned to move from **28-day retention to retention for the life of the account**.

These changes point in the same direction:

```text
CHAT UI LABEL
!= CONTEXT-INGRESS RULE
!= MEMORY-WRITE RULE
!= HISTORY-RETENTION RULE
!= SAVE / CONVERSION RULE
```

Deep Drift should therefore stop treating "temporary," "history," "memory," and "session" as interchangeable nouns. They are different state machines with separate clocks and transition rules.

This report formalizes the benchmark family:

**Ephemeral-State and Context-Boundary Fidelity (ESCBF)**

with companion constructs:

- Context-Ingress Disclosure Fidelity
- Memory-Write Boundary Fidelity
- Save-Transition Fidelity
- Retention-Clock Fidelity
- Session-Surface Convergence Fidelity
- Policy-to-Retention Fidelity
- Plugin/Skill Invocation Attribution Fidelity
- Temporary-to-Persistent Lineage Fidelity
- User-Expectation Semantic Alignment

## 1. ChatGPT Temporary Chat Gains Context Ingress

OpenAI's 27 August 2026 release notes describe two temporary-chat modes.

A **personalized temporary chat** may use existing memories, custom instructions, and plugins. It does not create new memories while temporary and stays out of chat history unless saved. Personalization is selected when the temporary chat starts and cannot be changed after the conversation begins.

A **non-personalized temporary chat** does not use memory, custom instructions, or plugins and does not create new memories.

The state therefore becomes:

```text
TEMPORARY CHAT
├─ NON-PERSONALIZED
│  ├─ memory read: NO
│  ├─ custom instructions: NO
│  ├─ plugins: NO
│  └─ memory write: NO
│
└─ PERSONALIZED
   ├─ memory read: YES
   ├─ custom instructions: YES
   ├─ plugins: YES
   └─ memory write while temporary: NO
```

The important distinction is:

```text
NO MEMORY WRITE
!= NO MEMORY READ
```

A temporary session may now be influenced by durable state without itself initially becoming durable state.

### Context-Ingress Disclosure Fidelity

A provenance record should preserve at least:

```text
chat_id
chat_mode
temporary_personalization_state
memory_read_allowed
custom_instructions_applied
plugin_or_connector_set
start_timestamp
```

Without these fields, two visually identical "temporary" chats can have materially different cognitive inputs.

## 2. Saving a Temporary Chat Is a State Transition

OpenAI also states that a temporary chat can now be saved. Saving adds it to chat history and converts it into a regular chat. After conversion, account-level personalization settings apply; if memory is enabled, the saved conversation may become part of the historical material referenced for future personalized responses.

This is not merely a visibility toggle.

```text
TEMPORARY OBJECT
-> USER SAVE ACTION
-> REGULAR CHAT
-> HISTORY PARTICIPATION
-> POSSIBLE FUTURE PERSONALIZATION INPUT
```

### Save-Transition Fidelity

The audit trail should preserve:

```text
original_chat_mode
save_event_timestamp
actor
chat_mode_after_save
account_memory_state_at_conversion
model_improvement_preference_at_conversion
history_visibility_after_conversion
```

Deep Drift should treat this as **state conversion**, not just "save to sidebar."

## 3. The Word "Temporary" Now Describes a Bundle of Independent Controls

The semantic trap is obvious:

```text
TEMPORARY
can still mean:
- excluded from history at first
- no new memory writes at first

TEMPORARY
no longer necessarily means:
- no use of existing memory
- no custom instructions
- no plugins
- impossible to persist later
```

### User-Expectation Semantic Alignment

A platform should disclose the actual state vector instead of relying on a single reassuring label.

A more honest UI model would expose:

```text
HISTORY: off / on
READ MEMORY: off / on
WRITE MEMORY: off / on
CUSTOM INSTRUCTIONS: off / on
PLUGINS: off / on
SAVE LATER: allowed / disallowed
RETENTION: duration
```

One word cannot carry six independent policy meanings without eventually lying by accident.

## 4. GitHub Copilot Is Moving the Opposite Direction: Short-Lived Chat Becomes Account-Lifetime Session History

GitHub's 28 August 2026 announcement says that, **no earlier than 28 September 2026**, Copilot Chat on github.com, Copilot Chat in GitHub Mobile, and GitHub Copilot cloud agent will relaunch as one unified Copilot experience with one policy.

GitHub specifically states that github.com Copilot will migrate to the **agent sessions experience**, and chat data will then be retained for the **life of the account instead of 28 days**.

This update is announced, not yet in force on 1 September 2026. That timing distinction must remain explicit.

```text
CURRENT / PRE-RELAUNCH
github.com chat retention -> 28 days

ANNOUNCED / POST-RELAUNCH
agent-session retention -> life of account
```

### Retention-Clock Fidelity

A retained transcript should preserve the rule that governed it **at the time the session was created**, not merely the platform's current policy.

```text
session_id
creation_timestamp
surface
retention_policy_version
retention_duration_at_creation
policy_migration_event
new_retention_rule
user_or_admin_opt_state
```

Otherwise an audit performed months later can quietly apply today's retention logic to yesterday's conversation.

## 5. Surface Convergence Changes Session Identity

GitHub is not only changing retention. It is collapsing several previously separate surfaces into one agent-sessions architecture:

```text
GITHUB.COM CHAT
+
MOBILE CHAT
+
CLOUD AGENT
-> UNIFIED COPILOT / AGENT SESSIONS
```

That raises a new provenance question:

> When a session moves across web, mobile, and cloud-agent execution, what exactly is the persistent object: the chat, the agent session, the task, or the account-level timeline?

### Session-Surface Convergence Fidelity

A robust record should preserve:

```text
session_id
origin_surface
continuation_surfaces
agent_execution_events
human_messages
policy_state
retention_state
linked repository / task / PR
```

Surface should become an attribute of one session lineage, not a reason to fragment the lineage.

## 6. GitHub Also Centralizes Skills, Plugins, MCP, and Canvases

GitHub's 25 August 2026 release made the **Customize** tab generally available in the GitHub Copilot app. It brings **MCP servers, plugins, skills, and canvases** together in one discovery and configuration surface.

The architectural object is increasingly:

```text
SESSION
+
MEMORY / REPOSITORY CONTEXT
+
SKILL
+
PLUGIN
+
MCP SERVER
+
CANVAS
+
POLICY
-> WORK
```

This reinforces a Deep Drift principle established in earlier nodes: observed capability cannot be attributed to model identity alone.

### Customization-Set Attribution Fidelity

For material work, preserve:

```text
active_skill_ids
plugin_ids
MCP_server_ids
canvas_type
customization_versions
installation_state
policy_state
```

A long-lived session whose customization set changes over time is not behaviorally identical to itself.

## 7. Copy-Paste and Export Scan

No new first-party DOCX/PDF generation primitive appeared in this scan that is stronger than the file-generation nodes already logged.

However, two currently relevant ChatGPT workflow changes remain worth keeping in the category map:

1. On 7 August 2026, ChatGPT web began preserving headings, bold text, links, and lists when text is pasted from Google Docs or another ChatGPT conversation.
2. On 4 August 2026, pastes above 10,000 characters became attachments rather than direct composer text across all plans, reducing context-window consumption and preserving a reversible attachment/text-field boundary.

These are not fresh enough to deserve a separate node today, but they show the same structural trend: **copy-paste is turning into managed object transfer rather than raw text injection.**

## 8. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | **Major new-to-ledger:** temporary Chat can read existing memory without writing new memory, and can later be converted into a regular persistent chat. |
| Skills / plugins | GitHub's Customize tab now unifies Skills, plugins, MCP servers, and canvases in one customization surface. |
| Mini-app builders | No stronger fresh builder launch displaced previous Deep Drift nodes in this run. |
| Chat-to-document export | No new first-party single-chat-to-DOCX/PDF primitive strong enough to displace prior nodes. |
| DOCX / PDF generation | No material fresh primitive in this run; artifact generation remains downstream of increasingly complex state and customization layers. |
| Copy-paste / export fixes | Existing August ChatGPT changes preserve rich formatting and convert very long pastes to attachments; no newer stronger fix surfaced today. |
| Broader creator workflow | **Major trend:** persistence is becoming configurable and transitional rather than binary; chat, agent session, memory, history, plugin context, and retention now have independent state rules. |

## 9. New Failure Classes

- **Temporary-Label Overreach:** the interface implies isolation while persistent memory or plugins can still influence output.
- **Memory-Read/Write Collapse:** audit records fail to distinguish memory consumption from memory creation.
- **Save-Transition Erasure:** a chat converted from temporary to regular loses evidence of its original mode.
- **Retention-Clock Amnesia:** a later audit cannot recover the retention policy active when the conversation was created.
- **Surface-Convergence Identity Loss:** web, mobile, and cloud-agent activity cannot be reconstructed as one session lineage.
- **Customization-Set Drift:** the same long-lived session continues after its Skills, plugins, MCP servers, or canvas state changes without preserving the old set.
- **Policy-to-History Detachment:** an administrator policy changes but retained sessions cannot be linked to the policy version that governed them.
- **Ephemeral-to-Persistent Contamination:** material created under assumptions of temporary isolation later becomes reusable context after conversion.

## 10. Deep Drift Benchmark: Temporary, Personalized, Saved, Reused

Create four controlled chats with the same prompt:

```text
A. regular chat
B. temporary non-personalized
C. temporary personalized
D. temporary personalized -> saved -> later referenced
```

Seed one distinctive memory fact, one custom-instruction rule, and one plugin-accessible source before the test.

Measure whether each condition:

1. uses the seeded memory;
2. obeys the custom instruction;
3. accesses the plugin;
4. writes a new memory;
5. appears in history;
6. becomes referenceable after save;
7. preserves an auditable transition record.

Then repeat after changing account personalization settings to test whether saved-state behavior follows the conversion-time or current-time policy.

## 11. Proposed Metrics

```text
CIDF = sessions with recoverable context-ingress state / all controlled sessions

MWBF = sessions correctly distinguishing memory-read from memory-write state / all controlled sessions

STF = saved temporary chats with recoverable pre/post transition metadata / all saved temporary chats

RCF = sessions with recoverable retention rule active at creation / all retained sessions

SSCF = cross-surface activity reconstructable as one session lineage / all cross-surface sessions

CSAF = outputs with recoverable customization set / all controlled outputs

UESA = UI labels whose ordinary-language implication matches actual state vector / all tested state labels
```

## 12. Deep Drift Research Position

The weak description is:

> Temporary chat got more controls, and GitHub is keeping Copilot chats longer.

The serious description is:

> Conversational AI is abandoning binary persistence. A session can read durable memory without writing memory, remain outside history until a user converts it, inherit plugins and custom instructions while still being labeled temporary, or migrate from a short-retention chat model into an account-lifetime agent-session architecture. Persistence is now a multidimensional state vector with transition events.

Therefore:

```text
TEMPORARY != CONTEXT-FREE
TEMPORARY != UNSAVEABLE
NO MEMORY WRITE != NO MEMORY READ
CHAT HISTORY != MEMORY
SESSION != SURFACE
RETENTION POLICY != SESSION IDENTITY
SAME SESSION != SAME CUSTOMIZATION SET
```

The Deep Drift requirement is:

> **Every conversational AI system should expose and preserve a machine-readable persistence-state manifest that separately records history participation, memory-read permission, memory-write permission, custom-instruction state, plugin/connector state, save eligibility, save-transition events, retention duration and policy version, session identity across surfaces, and the customization set active during each material mutation, so that later reviewers can reconstruct not merely what the conversation contained, but which durable states were allowed to enter it and which states the conversation was allowed to create.**

The industry spent years using words like *temporary*, *private*, *history*, and *memory* as if they were clean containers. They are becoming toggles on different pipes. The UI may keep the friendly noun; research should keep the plumbing diagram.

## Evidence Boundary

Platform facts are grounded in first-party release documentation checked on 1 September 2026.

The ChatGPT temporary-chat controls are documented by OpenAI in the **27 August 2026** ChatGPT release notes. The same release page documents the earlier August copy/paste improvements cited as category context.

GitHub's announced retention change and unified Copilot session architecture come from its **28 August 2026** changelog and are explicitly future-dated: no earlier than **28 September 2026**. GitHub's unified Customize surface comes from its **25 August 2026** changelog.

ESCBF, companion constructs, failure classes, benchmark procedures, metrics, and the Deep Drift requirement are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. OpenAI Help Center, **ChatGPT - Release Notes**, entries for 27 August 2026, 7 August 2026, and 4 August 2026.  
   https://help.openai.com/en/articles/6825453

2. GitHub Changelog, **Upcoming changes to GitHub Copilot policies and billing**, 28 August 2026.  
   https://github.blog/changelog/2026-08-28-upcoming-changes-to-github-copilot-policies-and-billing/

3. GitHub Changelog, **GitHub Copilot app Customize tab is generally available**, 25 August 2026.  
   https://github.blog/changelog/2026-08-25-github-copilot-app-customize-tab-is-generally-available/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
