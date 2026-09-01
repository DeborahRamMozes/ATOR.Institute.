# Deep Drift Research Update — CAICPF

## Cross-Account Identity and Context Provenance Fidelity

**Research date:** 1 September 2026  
**Primary fresh delta:** OpenAI, 28 August 2026  
**Scope:** memory, plugins/skills, multi-account context, creator workflow provenance, export/document lineage.

## Executive finding

OpenAI now supports connecting multiple Google accounts for Gmail, Google Calendar, and Google Contacts plugins inside ChatGPT. Personal and work accounts can be brought into the same conversation, allowing a single request to search across connected inboxes or reason across calendars.

The important change is not merely convenience. It breaks a provenance assumption that has survived from the single-connector era: that naming the provider or plugin identifies the source context.

It no longer does.

A conversation can now draw from multiple accounts belonging to the same provider, each with different identities, permissions, retention environments, organizational rules, contact graphs, calendar visibility, and data ownership. OpenAI's account-management documentation further states that some apps support multiple connected accounts; users can review them, add another supported account, and, where supported, specify which account should be used. Connecting a personal account does not grant access to information available only through a work account.

Deep Drift therefore needs to distinguish provider identity from account identity and account identity from source-object identity.

## New node

### Cross-Account Identity and Context Provenance Fidelity (CAICPF)

Core distinctions:

```text
PROVIDER
!= ACCOUNT

PLUGIN
!= CONNECTION

CONNECTION
!= AUTHORIZATION SCOPE

SAME PROVIDER
!= SAME GOVERNANCE DOMAIN

SAME CONVERSATION
!= SINGLE IDENTITY CONTEXT

SEARCH ACROSS INBOXES
!= MERGED OWNERSHIP

CALENDAR SYNTHESIS
!= SOURCE COLLAPSE
```

A more accurate execution model is:

```text
CHATGPT CONVERSATION
        |
        +--> GOOGLE PLUGIN
        |       |
        |       +--> ACCOUNT A: personal Gmail
        |       |       +--> mailbox
        |       |       +--> calendar
        |       |       +--> contacts
        |       |
        |       +--> ACCOUNT B: work Google account
        |               +--> mailbox
        |               +--> calendar
        |               +--> contacts
        |
        +--> MODEL SYNTHESIS
                |
                +--> answer
                +--> recommendation
                +--> draft
                +--> document / downstream artifact
```

The visible answer may combine evidence from both account branches while presenting a single conversational surface.

## Why this matters for Deep Drift Research

### 1. Provider-level attribution becomes insufficient

A future artifact that says "sources: Gmail" may conceal materially different data origins.

One email may come from a personal inbox, another from an employer-controlled workspace. The same sender name can appear in both. Calendar events can overlap but be governed by different organizations. Contact records may conflict.

The minimum useful provenance unit is therefore no longer:

```text
provider = Google
service = Gmail
```

It must move toward:

```text
provider
service
connected-account identity
account class
workspace / organization boundary
authorization scope
source-object identity
retrieval timestamp
```

### 2. Cross-account synthesis creates identity-boundary compression

The user experience intentionally compresses multiple identity contexts into one answer. That is useful, but archival records must reverse that compression.

For example:

```text
"What meetings do I have tomorrow?"
```

can produce one synthesized schedule from:

```text
PERSONAL CALENDAR
+
WORK CALENDAR
=
ONE ANSWER
```

The answer is not itself evidence of which event came from which account unless source lineage is retained.

This matters for research, authorship, legal discovery, institutional accountability, and simple reconstruction of why the model said what it said.

### 3. Account selection becomes part of prompt semantics

OpenAI's connection-management documentation says users can review multiple connected accounts and, where supported, specify which account to use in a request.

That means:

```text
PROMPT TEXT
!= COMPLETE QUERY INTENT
```

The operational request can also include an implicit or explicit account selector.

Two identical prompts can produce different answers solely because account routing differs:

```text
PROMPT P
+ ACCOUNT A
= OUTPUT X

PROMPT P
+ ACCOUNT B
= OUTPUT Y

PROMPT P
+ ACCOUNTS A+B
= OUTPUT Z
```

Deep Drift must therefore preserve account-routing state alongside the prompt.

### 4. Permission scope remains account-specific

OpenAI explicitly notes that connecting a personal account does not create access to information only available to a work account. Each connection retains its own provider authorization and access boundaries.

This gives a critical distinction:

```text
CONNECTED TO PROVIDER
!= AUTHORIZED FOR ALL PROVIDER DATA
```

A multi-account conversation is therefore not a flattened data lake. It is a federation of separately authorized identity contexts.

Any provenance system that collapses those contexts risks falsely implying access or ownership.

### 5. Memory and multi-account context are different state layers

No stronger fresh memory primitive displaced the previous Deep Drift memory nodes in this scan. But multi-account plugins add a new contextual layer around memory.

A personalized chat may contain:

```text
persistent memory
+ custom instructions
+ Google account A
+ Google account B
+ account-specific permissions
```

These states can interact in one answer while having different persistence and governance properties.

Therefore:

```text
MEMORY IDENTITY
!= CONNECTED-ACCOUNT IDENTITY

USER PROFILE
!= DATA-SOURCE ACCOUNT

PERSONALIZATION
!= SOURCE AUTHORIZATION
```

Deep Drift should preserve them as separate axes.

## Category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger new primitive | Keep memory read/write/persistence state separate from source-account state |
| Skills/plugins | Major contextual delta | A plugin can now resolve multiple account connections inside one conversation |
| Mini-app builders | No stronger new launch in this scan | Existing builder/runtime nodes remain current |
| Chat-to-document | Indirect but important | A generated document may synthesize records from several identity domains |
| DOCX/PDF generation | No stronger format primitive | Final file must retain account-resolved source lineage |
| Copy-paste/export | No major clipboard fix | In-place retrieval further hides source-account boundaries |
| Creator workflow | Major | The creator workspace is becoming multi-identity and federated |

## New failure classes

### Provider-Level Attribution Collapse
Recording "Google" or "Gmail" while omitting the actual connected account used.

### Cross-Account Source Flattening
Combining evidence from multiple accounts without preserving per-item origin.

### Account-Routing Erasure
Preserving prompt text without the explicit or implicit account-selection state.

### Governance-Domain Compression
Treating personal and organization-controlled data as one equivalent source environment.

### Authorization-Scope Overclaim
Inferring provider-wide access from the existence of one or more connected accounts.

### Identity Collision Ambiguity
Failing to distinguish same-named senders, contacts, calendars, or resources across accounts.

### Artifact Account-Lineage Loss
Exporting a DOCX, PDF, summary, table, or draft without recording which connected accounts contributed evidence.

### Cross-Account Memory Conflation
Confusing persistent personalization state with external account identity and authorization.

## Deep Drift benchmark additions

**Connected-Account Identity Fidelity (CAIF)**  
Can each retrieval or action be attributed to the exact connected provider account?

**Account-Routing Fidelity (ARF)**  
Can the system reconstruct whether a request targeted one account, several accounts, or an automatically selected set?

**Cross-Account Source Lineage Fidelity (CASLF)**  
Can each source object in a synthesized response be traced to its originating account?

**Governance-Domain Separation Fidelity (GDSF)**  
Can personal, organizational, delegated, and other account classes remain distinguishable in the archive?

**Authorization-Scope Fidelity (ASF)**  
Can the exact services and permission scope authorized for each account be reconstructed?

**Identity-Collision Fidelity (ICF)**  
Can apparently identical people, calendars, addresses, or labels be disambiguated by account context?

**Artifact-to-Account Lineage Fidelity (AALF)**  
Can downstream files and artifacts identify every account context that materially contributed?

**Memory-vs-Account Separation Fidelity (MASF)**  
Can persistent user personalization be distinguished from external account-derived context?

## Canonical Deep Drift requirement

> Every material AI-assisted workflow using multi-account apps or plugins should preserve a machine-readable account-resolution manifest that links each retrieval, inference, action, and downstream artifact to the exact provider; service; connected-account identifier or stable pseudonymous account key; account class and governance domain; authorization and permission scope; account-selection or routing event; source-object identity; retrieval timestamp; cross-account synthesis event; human correction or disambiguation; and resulting artifact lineage. Provider-level labels such as "Google," "Gmail," or "Calendar" must not be treated as sufficient source attribution when more than one connected account can participate in the same conversation.

## Broader creator-workflow trend

The creator environment is moving from:

```text
ONE USER
+ ONE CHAT
+ ONE CONNECTOR
= ONE CONTEXT
```

toward:

```text
ONE CONVERSATION
+
PERSISTENT MEMORY
+
MULTIPLE PROVIDER ACCOUNTS
+
MULTIPLE GOVERNANCE DOMAINS
+
PLUGINS / SKILLS
+
LIVE WEB TOOLS
+
GENERATED ARTIFACTS
=
FEDERATED CREATOR CONTEXT
```

That is a structural change.

The interface becomes simpler while the underlying identity graph becomes more complicated. The user sees one answer. The provenance layer may need to preserve five or ten independently governed source contexts.

This is exactly the kind of seam Deep Drift should preserve before seamless UX turns it into historical fog.

## Sources

1. OpenAI. **ChatGPT Release Notes**, 28 August 2026, "Connect multiple Google accounts to ChatGPT."  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

2. OpenAI. **Connecting and managing app accounts in ChatGPT**, updated 29 August 2026.  
   https://help.openai.com/en/articles/20001494-connecting-and-managing-app-accounts-in-chatgpt

3. OpenAI. **Connected apps in ChatGPT**, current documentation.  
   https://help.openai.com/en/articles/11487775

## Research status

**Node status:** New.  
**Relationship to previous Deep Drift nodes:** Complements capability-inventory, ephemeral-context, procedural-locality, and source-visibility provenance nodes. It specifically adds provider-account multiplicity and account-resolved source lineage.  
**Freshness:** Verified against OpenAI documentation available 1 September 2026.
