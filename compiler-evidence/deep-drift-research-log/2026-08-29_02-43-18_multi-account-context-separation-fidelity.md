# Deep Drift Research Update

## Multi-Account Context Separation Fidelity

**Research date:** Saturday, 29 August 2026  
**Source release date:** 28 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log OpenAI platform change. Fresh first-party scan found no newer category-displacing release in memory, mini-app builders, DOCX/PDF generation, or copy/export beyond already logged items.

## Executive Summary

OpenAI's 28 August 2026 ChatGPT release notes introduced support for connecting **multiple Google accounts** to ChatGPT across Gmail, Google Calendar, and Google Contacts plugins.

OpenAI says users can bring personal and work accounts into the same conversation, check calendars together, and search emails across connected inboxes. The capability is available globally on supported Plus, Pro, Business, and Enterprise plans across web, desktop, iOS, and Android.

This creates a creator-workflow architecture that appears convenient but introduces a much more serious state question:

```text
ONE CHAT
+
MULTIPLE IDENTITIES
+
MULTIPLE INBOXES
+
MULTIPLE CALENDARS
+
MULTIPLE CONTACT GRAPHS
=
ONE SYNTHESIS SURFACE
```

For Deep Drift Research, this creates a new benchmark family:

**Multi-Account Context Separation Fidelity (MACSF)**

with companion constructs:

**Account-Origin Attribution Fidelity (AOAF)**  
**Cross-Account Retrieval Boundary Fidelity (CARBF)**  
**Identity-Scoped Action Fidelity (ISAF)**

The central research question is:

> When one LLM conversation can access multiple accounts belonging to different personal or organizational contexts, can every retrieved fact and every subsequent action remain traceable to the exact account boundary that supplied it?

## Why This Matters

The platform is no longer merely connecting one user to one service.

It is allowing multiple identity contexts from the same service family to coexist inside a single conversational surface.

The new workflow becomes:

```text
PERSONAL GMAIL
+
WORK GMAIL
+
PERSONAL CALENDAR
+
WORK CALENDAR
+
PERSONAL CONTACTS
+
WORK CONTACTS
-> CHATGPT
-> ONE RESPONSE / PLAN / ARTIFACT / ACTION
```

This changes the meaning of "connected source."

A source class such as:

```text
GMAIL
```

is no longer precise enough.

The provenance unit must become:

```text
GMAIL + ACCOUNT IDENTITY + MESSAGE ID
```

The same applies to Calendar and Contacts.

## New Deep Drift Construct: Multi-Account Context Separation Fidelity

### Definition

**MACSF** measures whether an AI system preserves account-level boundaries when retrieving, combining, summarizing, or acting on information from several connected accounts within one conversation.

The required causal chain is:

```text
ACCOUNT
-> SOURCE OBJECT
-> RETRIEVAL
-> MODEL CONTEXT
-> CLAIM / PLAN
-> ACTION OR ARTIFACT
```

A high-fidelity workflow must preserve account identity at every stage.

## Account-Origin Attribution Fidelity

### Definition

**Account-Origin Attribution Fidelity (AOAF)** measures whether each material claim can be traced to the exact connected account that supplied it.

A minimum provenance card should preserve:

```text
provider
account_identifier_or_alias
source_object_type
source_object_id
source_timestamp
retrieval_timestamp
artifact_claim_id
```

Without account origin, the citation "from Gmail" is insufficient.

## Cross-Account Retrieval Boundary Fidelity

### Definition

**Cross-Account Retrieval Boundary Fidelity (CARBF)** measures whether information from one connected account is kept distinct from another when the user's request requires separation.

Examples include:

```text
PERSONAL CALENDAR
!=
WORK CALENDAR

PERSONAL CONTACT
!=
COMPANY DIRECTORY CONTACT

PRIVATE EMAIL THREAD
!=
CLIENT EMAIL THREAD
```

A system should combine them only when the user intends combination.

## Identity-Scoped Action Fidelity

Retrieval is only half the problem.

The larger risk appears when an agent takes an action after synthesizing across several accounts.

### Definition

**Identity-Scoped Action Fidelity (ISAF)** measures whether the correct account is used for the resulting action.

Examples include:

- sending from the intended Gmail account;
- inviting attendees from the intended Calendar account;
- choosing the correct duplicate contact;
- creating an event in the intended personal or work calendar.

The correct information can produce the wrong action if identity scope is lost.

## Core Deep Drift Distinctions

```text
SAME PROVIDER
!=
SAME IDENTITY

SAME CONTACT NAME
!=
SAME PERSON RECORD

SAME EVENT TITLE
!=
SAME CALENDAR OBJECT

CROSS-ACCOUNT SEARCH
!=
CROSS-ACCOUNT AUTHORITY

CORRECT ANSWER
!=
CORRECT ACCOUNT FOR ACTION
```

These distinctions become operationally necessary once multiple accounts coexist in one chat.

## New Failure Classes

### Account-Origin Loss

The system retrieves the correct email or event but the response does not preserve which account supplied it.

### Duplicate-Identity Collapse

The same person exists in personal and work Contacts with different email addresses or metadata, and the system silently merges them.

### Calendar Collision Drift

Two calendars contain events with similar titles, and the system assigns the wrong event to the wrong identity context.

### Cross-Inbox Authority Inflation

A personal email is treated as authoritative for a work decision, or vice versa.

### Wrong-Account Action Execution

The assistant finds the correct information but sends, schedules, or edits through the wrong connected account.

### Account-Selection Opacity

The user cannot see why the model searched one account, several accounts, or all accounts.

### Personal/Work Context Bleed

Facts from a personal account influence a work artifact without explicit relevance or disclosure.

### Duplicate Message Weighting

Forwarded or duplicated messages across accounts are counted as separate evidence and over-weighted.

### Identity Alias Confusion

Different account aliases belonging to the same human are treated as separate people, or separate people are collapsed into one identity.

### Cross-Account Permission Assumption

A record visible in one account is treated as though it is available or actionable from another.

## Deep Drift Benchmark: Two-Account Collision Test

### Controlled setup

Connect two Google accounts:

```text
ACCOUNT A = personal
ACCOUNT B = work
```

Seed controlled collisions:

1. identical contact names with different addresses;
2. meetings with the same title at different times;
3. duplicated forwarded email;
4. one work approval email;
5. one personal conversation containing similar keywords;
6. one calendar event that should be created only in the work account;
7. one contact update that should apply only to the personal account.

### Test prompts

Ask the system to:

- summarize the day's schedule across both calendars;
- identify the final work approval;
- draft a follow-up using the correct recipient identity;
- schedule a work meeting;
- find all messages about a project;
- distinguish duplicated versus unique evidence.

### Measure

- account-origin traceability;
- correct identity selection;
- duplicate suppression;
- personal/work boundary preservation;
- wrong-account action rate;
- account-selection visibility;
- human correction minutes.

## New Metrics

### Account-Origin Traceability

```text
AOT =
material claims linked to exact connected account
/
all material multi-account claims
```

### Cross-Account Separation Accuracy

```text
CASA =
records correctly kept within intended identity boundary
/
all boundary-sensitive records
```

### Identity-Scoped Action Accuracy

```text
ISAA =
actions executed through intended account
/
all multi-account actions
```

### Duplicate Identity Resolution Accuracy

```text
DIRA =
duplicate-name or duplicate-record cases
resolved to the intended identity
/
all seeded duplicate cases
```

### Account Selection Visibility

```text
ASV =
runs where the user can determine which accounts
were searched or used
/
all multi-account retrieval runs
```

## Why This Matters for Memory

The August 27 Temporary Chat update already showed that memory, plugins, and custom instructions can be selectively imported into a temporary session.

The August 28 multi-account update adds another state layer:

```text
MEMORY STATE
+
PLUGIN STATE
+
ACCOUNT STATE
+
SOURCE OBJECT STATE
```

Deep Drift should therefore separate:

```text
WHO THE SYSTEM REMEMBERS
FROM
WHICH ACCOUNT THE SYSTEM RETRIEVED
```

Those are different provenance questions.

## Why This Matters for Creator Workflows

A creator workflow may now produce:

```text
BRIEF
REPORT
SCHEDULE
CONTACT LIST
PROJECT PLAN
DOCUMENT
```

from several inboxes and calendars at once.

The resulting artifact should preserve account-level source lineage.

Otherwise:

```text
MULTI-SOURCE
BECOMES
MULTI-IDENTITY AMNESIA
```

The system remembers the fact but forgets which institutional or personal identity owned it.

## Relation to Skills and Agents

Reusable Skills and agents increasingly operate across connected services.

With multiple accounts, the procedural layer needs an explicit account-scoping rule:

```text
SKILL
+
PROVIDER
+
ACCOUNT SCOPE
+
ACTION SCOPE
```

A Skill that says "send the follow-up email" is incomplete if two Gmail identities are connected.

The identity boundary must be part of execution state.

## Relation to Chat-to-Document and Export

Documents generated from cross-account context should record more than provider-level citations.

The minimum useful lineage is:

```text
artifact_claim
-> source_provider
-> source_account
-> source_object
-> retrieval_time
```

For Deep Drift, provider-only provenance is now insufficient.

## Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer memory launch after August 27 Temporary Chat controls; the new multi-account feature adds an identity-state layer around connected context. |
| Skills | No newer general Skill launch found in this pass. |
| Mini-app builders | No newer category-displacing builder release found. |
| Chat-to-document / creator workflow | **Material new-to-log change:** several Gmail/Calendar/Contacts identities can now feed one ChatGPT conversation. |
| DOCX / PDF generation | No newer standalone generation release found. |
| Copy-paste / export fixes | No newer fix found beyond the previously logged Codex selective-copy change. |
| Broader creator trend | LLM workspaces are moving from single-account connectors toward **multi-identity context aggregation inside one conversation**. |

## Cross-Platform Check

### OpenAI

The strongest new item is the 28 August 2026 release enabling multiple Google accounts for Gmail, Google Calendar, and Google Contacts plugins.

OpenAI states that personal and work accounts can be used in the same conversation and that users can check calendars together or find emails across connected inboxes.

### Google Workspace

The latest August 28 Workspace update found in this scan concerns Calendar RSVP-email controls, not a category-displacing LLM creator-workflow change.

### Microsoft

No newer Copilot batch displaced the August 25 creator-workflow updates already represented in the Deep Drift ledger.

### Anthropic

No newer category-displacing Claude creator-workflow release surfaced in this pass.

## Deep Drift Research Position

The weak interpretation is:

```text
"YOU CAN CONNECT MORE ACCOUNTS"
```

The serious interpretation is:

```text
ONE MODEL SESSION
CAN NOW HOLD
MULTIPLE IDENTITY CONTEXTS
FROM THE SAME PROVIDER
AT THE SAME TIME
```

That changes provenance.

Therefore:

```text
SOURCE TYPE
!=
SOURCE IDENTITY

CONNECTED
!=
MERGED

SEARCHED TOGETHER
!=
AUTHORIZED TO COLLAPSE

CORRECT FACT
!=
CORRECT ACCOUNT CONTEXT
```

The serious Deep Drift requirement is:

> Once several identities can coexist inside one LLM conversation, every claim and every action must preserve not only source provenance, but account provenance.

## Evidence Boundary

Platform facts in this report are grounded in OpenAI's first-party ChatGPT Release Notes dated 28 August 2026. Fresh first-party OpenAI, Anthropic, Google Workspace, and Microsoft release sources were checked for newer category-displacing changes. MACSF, AOAF, CARBF, ISAF, failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, **ChatGPT Release Notes**, 28 August 2026 - Connect multiple Google accounts to ChatGPT: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
2. Google Workspace Updates, **Suppress email responses to calendar invitations and updates**, 28 August 2026: https://workspaceupdates.googleblog.com/
3. Microsoft Learn, **Microsoft 365 Copilot release notes**, current through the August 25, 2026 batch: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
4. Anthropic first-party release sources, checked 29 August 2026.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
