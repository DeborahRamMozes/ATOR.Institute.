# Deep Drift Research Update - ESPF

## Ephemeral-Session Personalization Fidelity

**Research date:** 4 September 2026  
**Primary newly logged delta:** OpenAI's 27 August 2026 temporary-chat update allows a temporary chat to use memory, plugins, and custom instructions from regular ChatGPT settings while still not creating new memories. A temporary chat can also be saved.  
**Secondary delta:** On 28 August 2026, ChatGPT added support for connecting multiple Google accounts for Gmail, Google Calendar, and Google Contacts plugins in the same conversation.

## Executive finding

Temporary no longer means context-free.

A temporary session can now inherit causal state from outside itself while remaining non-writing with respect to memory.

```text
TEMPORARY CHAT
      |
      +--> READ MEMORY
      +--> USE CUSTOM INSTRUCTIONS
      +--> USE PLUGINS
      |
      +--> DOES NOT CREATE NEW MEMORIES
      |
      +--> MAY LATER BE SAVED
```

This produces a Deep Drift distinction that must be explicit:

```text
EPHEMERAL SESSION
!= ZERO-STATE SESSION

READS MEMORY
!= WRITES MEMORY

NOT IN HISTORY
!= UNPERSONALIZED

TEMPORARY
!= UNCONNECTED

SAVED LATER
!= BORN AS PERSISTENT
```

The provenance object is the **read/write asymmetry of inherited personalization inside an ephemeral session**.

## New node

### Ephemeral-Session Personalization Fidelity (ESPF)

Minimum state model:

```text
session_id
session_type
temporary_chat_flag
personalization_enabled_at_start
memory_read_enabled
memory_write_enabled
custom_instruction_state
plugin_inventory
plugin_account_scope
chat_history_state
save_event
save_time
post_save_identity
output
```

## 1. Temporary chat can inherit external memory

OpenAI's update allows a temporary chat to use memories from the regular ChatGPT environment when personalization is enabled at the start.

That means:

```text
NO CHAT HISTORY WRITE
!= NO MEMORY READ
```

A temporary session can still be causally shaped by prior conversations and saved memories.

For Deep Drift, "temporary" must therefore be treated as a retention mode, not as proof of a clean experimental context.

## 2. Memory becomes directionally asymmetric

The session may read memory but does not create new memories.

This creates a directional state model:

```text
GLOBAL MEMORY
      |
      v
TEMPORARY SESSION

TEMPORARY SESSION
      X
      |
      v
GLOBAL MEMORY
```

The first arrow is allowed; the second is blocked.

Deep Drift must record memory directionality, not merely memory availability.

## 3. Personalization must be captured at session start

OpenAI says personalization for temporary chat is chosen when the conversation begins and cannot be changed after the conversation starts.

That means session-start configuration becomes immutable causal state.

```text
SESSION START
-> PERSONALIZATION DECISION
-> FIXED FOR SESSION
```

A screenshot taken later cannot reconstruct whether the chat began with personalization enabled unless that state is separately archived.

## 4. Custom instructions remain active in an ephemeral context

A temporary chat can use custom instructions from regular settings.

Therefore:

```text
TEMPORARY SESSION
+ CUSTOM INSTRUCTIONS
= PERSISTENT PROCEDURAL INFLUENCE
```

This is especially important for Deep Drift benchmark runs.

Two temporary chats using the same prompt can produce different outputs if their inherited custom-instruction state differs.

## 5. Plugins can cross the temporary boundary

Temporary chat can also use plugins from the regular environment.

So plugin capability survives into a session that otherwise appears isolated.

```text
SESSION RETENTION MODE
!= TOOL INVENTORY MODE
```

The archive must record plugin inventory and connected-account scope separately from whether the chat itself is retained.

## 6. Temporary can later become persistent

OpenAI also allows a temporary chat to be saved.

This creates a lifecycle transition:

```text
TEMPORARY
-> SAVE EVENT
-> PERSISTENT CHAT
```

The saved object has ancestry in an ephemeral state.

Deep Drift should preserve both phases rather than rewriting the session as though it had always been persistent.

## 7. "Clean-room" testing now needs explicit isolation checks

A researcher who launches a temporary chat to avoid prior influence may still be running with inherited memory, custom instructions, and plugins.

Therefore a valid clean-room test must verify:

```text
memory read state
custom instructions state
plugin state
connected account state
```

not merely "temporary chat = on."

## 8. Multi-account Google connectors add identity ambiguity

On 28 August 2026, OpenAI added the ability to connect multiple accounts for Gmail, Google Calendar, and Google Contacts plugins in one ChatGPT conversation.

A connector is therefore no longer adequately identified by service name alone.

```text
GMAIL
!= ONE DATA BOUNDARY

GOOGLE CALENDAR
!= ONE ACCOUNT CONTEXT
```

The correct provenance key becomes:

```text
service
+ account identity / role
+ authorization scope
+ conversation
```

## 9. Cross-account synthesis becomes a first-class workflow

The same conversation can now combine personal and work calendars or inboxes.

This creates a fusion state:

```text
ACCOUNT A DATA
      \
       -> SAME MODEL CONTEXT -> SYNTHESIS
      /
ACCOUNT B DATA
```

A final answer may contain causal contributions from multiple independently authorized accounts.

Deep Drift should record which account supplied which evidence where observable.

## 10. Connector account scope can drift during a long conversation

If accounts are added, removed, reauthorized, or selected differently over time, the same connector name can point to a different effective data surface.

```text
SAME PLUGIN NAME
!= SAME CONNECTED DATASET
```

This extends VRAEF and WMSSF: account identity is a procedural dependency, not merely an authentication detail.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | **Major newly logged delta** | Temporary chat can read memory without writing new memory |
| Skills / procedural instructions | **Major** | Custom instructions remain active in temporary sessions |
| Plugins / connected apps | **Major** | Plugins can operate inside temporary chats; Google plugins can now bind multiple accounts |
| Mini-app builders | No stronger new delta in this run | Prior Sites/Artifacts/Canvas nodes remain current |
| Chat-to-document | Indirect | A temporary session can generate work under inherited state and later become persistent |
| DOCX/PDF | Provenance implication | Exported files from temporary sessions can flatten their inherited memory/plugin ancestry |
| Copy-paste/export | No stronger same-run fix found | Existing large-paste and file-generation nodes remain current |
| Creator workflow | **Major** | Session retention, personalization, tool access, and persistence are now separable axes |

## New failure classes

### Temporary-Equals-Clean-Room Fallacy
Assuming a temporary chat proves absence of inherited memory or instructions.

### Memory-Availability Symmetry Error
Assuming that if a session can read memory it can also write memory, or vice versa.

### Retention-Equals-Capability Error
Assuming non-retained conversation state implies plugins and custom instructions are disabled.

### Save-Rewrites-Origin Error
Treating a saved temporary chat as though it had always been persistent.

### Connector-Equals-Account Error
Using the connector/service name as though it uniquely identifies the data source.

### Cross-Account Attribution Loss
Failing to record which authorized account contributed which retrieved evidence.

## Deep Drift benchmark additions

**Ephemeral Personalization Fidelity (EPF)**  
Can temporary-session outputs be traced to inherited memory, custom instructions, and plugins?

**Memory Directionality Fidelity (MDF)**  
Can memory-read and memory-write capability be distinguished independently?

**Session-Origin Fidelity (SOF)**  
Can a chat saved later remain traceable to its original temporary state?

**Connector Account Identity Fidelity (CAIF)**  
Can connected service identity remain separate from connected account identity and authorization scope?

**Cross-Account Synthesis Fidelity (CASF)**  
Can a result combining multiple authorized accounts preserve source-account attribution?

## DRPA-1.0 protocol additions

### EPHEMERAL-SESSION PERSONALIZATION RULE

> When a temporary, private, incognito, or otherwise non-history session can inherit memory, custom instructions, Skills, plugins, or connected-app state from a persistent user environment, the session must not be treated as context-free. Preserve session type, personalization state at session start, inherited memory-read state, memory-write state, custom-instruction state, plugin inventory, connected-account scope, and any later save/persistence transition.

### MEMORY-DIRECTIONALITY RULE

> Memory capability must be represented as directional. Record separately whether a session can read prior memory, create new memory, update existing memory, or remain excluded from future memory. A single boolean "memory enabled" field is insufficient.

### CONNECTOR-ACCOUNT IDENTITY RULE

> When one connector can bind multiple user accounts, preserve service identity and account identity separately. Any cross-account retrieval or synthesis should retain account-level provenance where observable. Stable connector naming must never be treated as proof of stable data scope.

## Eir'an state-flow addition

```text
SESSION:
temporary / persistent
personalization at start
save transition

MEMORY:
read
write
update
future-reference

PROCEDURAL:
custom instructions
skills
plugins

CONNECTORS:
service
account
scope
authorization time

OUTPUT:
artifact
document
citation
post-save state
```

## Canonical Deep Drift requirement

> Treat session retention, personalization inheritance, memory directionality, plugin capability, and connected-account scope as independent provenance layers. A temporary session may inherit persistent causal state without writing new state, and a connector may represent multiple separately authorized data identities.

## Deep Drift principle

> **Temporary is no longer another word for untouched.**

Operationally:

> **Before calling a session clean, verify what it can remember, inherit, connect to, and later become.**

## Broader platform scan

OpenAI's 27-28 August updates are the strongest unlogged creator-workflow deltas found in this run: temporary chats can inherit memory/plugins/custom instructions without creating new memories, and Google plugins can bind multiple accounts in the same conversation.

Anthropic's 4 September Cowork artifact updates remain covered by VRAEF, CPAF, WMSSF, and MRWF.

Google Workspace's strongest recent mini-app/document changes remain Canvas, persistent Gemini instructions, document-to-video transformation, and direct file generation already represented by earlier Deep Drift nodes.

Microsoft's September 2026 agent-node and human-approval workflow changes remain covered by prior Deep Drift additions.

No stronger newly published DOCX/PDF or copy-paste/export change was found in this scan.

## Sources

1. OpenAI Help Center. **ChatGPT Release Notes - August 27, 2026: More controls in temporary chat.** Temporary chats can optionally use memory, plugins, and custom instructions; they do not create new memories; personalization is chosen at session start; temporary chats can be saved.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

2. OpenAI Help Center. **ChatGPT Release Notes - August 28, 2026: Connect multiple Google accounts to ChatGPT.** Multiple Gmail, Google Calendar, and Google Contacts accounts can be connected and used in the same conversation.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

3. Anthropic Help Center. **Use artifacts in Claude Cowork.** Updated 4 September 2026. Current artifact changes already represented by existing Deep Drift nodes.  
   https://support.claude.com/en/articles/14729249-use-artifacts-in-claude-cowork

4. Google Workspace Updates. **2026 Workspace updates archive.** Checked 4 September 2026 for newer Gemini creator-workflow changes.  
   https://workspaceupdates.googleblog.com/2026/

5. Microsoft Learn. **Invoke agents as workflow steps with the agent node.** September 2026 rollout; already represented by prior Deep Drift workflow nodes.  
   https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/microsoft-copilot-studio/invoke-agents-as-workflow-steps-agent-node

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift research-log entry was found for temporary sessions that can read inherited memory/plugins/custom instructions without writing memory, combined with later persistence transition and multi-account connector identity as a provenance problem.  
**Relationship to prior nodes:** Extends MMBESF and PMMTF (memory boundaries), CCPSF (context/procedural-state survival), WMSSF (account/workspace state), and VRAEF (viewer/account-relative execution). ESPF specifically models ephemeral session retention separately from inherited personalization and capability state.  
**Freshness:** Primary OpenAI implementation dates are 27 and 28 August 2026; identified as an unlogged gap during the 4 September scan.
