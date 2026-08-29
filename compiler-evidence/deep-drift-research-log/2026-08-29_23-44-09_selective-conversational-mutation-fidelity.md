# Deep Drift Research Update

## Selective Conversational Mutation Fidelity

**Research date:** 29 August 2026  
**Primary release date:** 11 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log Microsoft Outlook creator-workflow change verified from first-party Microsoft 365 Copilot release notes.

## Executive Summary

Microsoft 365 Copilot now supports a materially different email-editing workflow in Outlook.

Previously, Copilot coaching was surfaced in canvas and users could apply the full recommendation set at once. In the current Outlook flow, Copilot opens coaching inside chat, lets the user choose which suggestions to apply, lets the user further refine those suggestions conversationally, and then updates the live email draft in place.

The creator path is therefore:

```text
EMAIL DRAFT v1
-> COPILOT COACHING
-> SUGGESTION SET
-> HUMAN SELECTS SUBSET
-> HUMAN REFINES SELECTED SUGGESTION IN CHAT
-> COPILOT MUTATES LIVE DRAFT
-> EMAIL DRAFT v2
```

This is not equivalent to ordinary tracked changes and it is not equivalent to a proposal-only redline system.

It creates an intermediate class of AI editing:

```text
ADVICE
-> SELECTIVE AUTHORIZATION
-> IN-PLACE MUTATION
```

For Deep Drift Research, this creates a new benchmark family:

**Selective Conversational Mutation Fidelity (SCMF)**

with companion constructs:

**Suggestion-Selection Fidelity (SSF)**  
**Conversation-to-Draft Mutation Fidelity (CDMF)**  
**Selection-to-Applied-Delta Fidelity (SADF)**  
**Email-State Preservation Fidelity (ESPF)**  
**Recipient-and-Thread Boundary Fidelity (RTBF)**  
**Mutation-Origin Retention Fidelity (MORF)**

The central research question is:

> When an LLM proposes multiple changes, a human selects and refines only some of them, and the system then mutates a live communication object in place, can the final draft preserve which suggestions were offered, which were selected, how they were conversationally modified, which exact text changed, and whether any recipient, thread, factual, or formatting state changed outside the intended scope?

## 1. What Changed

Microsoft's 11 August 2026 Microsoft 365 Copilot release notes describe a new Outlook coaching workflow available across Android, Windows, iOS, Mac, and Web.

The release states that:

- Copilot coaching feedback is now provided through chat while the user drafts, edits, and formats an email;
- users can choose which suggestions to apply;
- users can further refine those suggestions in chat;
- Copilot updates the email content in place;
- previously, coaching feedback was presented in canvas and users could apply all suggestions together rather than selectively.

The key architectural change is not "better writing."

It is **selective natural-language authorization of document mutation**.

## 2. Why This Matters for Deep Drift

There are now at least three distinct AI-editing governance modes appearing across creator platforms:

```text
MODE A
DIRECT MUTATION
agent changes artifact immediately

MODE B
PROPOSAL / REDLINE
agent proposes exact deltas
human accepts or rejects

MODE C
SELECTIVE CONVERSATIONAL MUTATION
agent proposes suggestions
human selects / refines
agent applies changes in place
```

Outlook now strongly represents Mode C.

That distinction matters because the human decision is explicit but the mutation may no longer remain visibly separated from ordinary draft text.

Therefore:

```text
SELECTED
!=
EXACT APPLIED DELTA

REFINED IN CHAT
!=
TRACEABLE FINAL WORDING

HUMAN AUTHORIZED
!=
HUMAN ORIGINATED

DRAFT UPDATED
!=
EDITORIAL HISTORY PRESERVED
```

The system can preserve user agency while still losing mutation provenance.

## 3. New Deep Drift Construct: Selective Conversational Mutation Fidelity

### Definition

**Selective Conversational Mutation Fidelity (SCMF)** measures whether a workflow that turns AI coaching into selectively authorized in-place edits preserves the causal chain from proposed suggestion through user refinement to exact artifact mutation.

A minimum mutation manifest should preserve:

```text
draft_id
thread_id
draft_version_before
suggestion_set_id
suggestion_ids
selected_suggestion_ids
rejected_suggestion_ids
user_refinement_turn_ids
copilot_response_turn_ids
affected_text_ranges
applied_delta
draft_version_after
recipient_state_before
recipient_state_after
timestamp
```

Without this chain, the final email may be correct while its authorship and editorial path become unreconstructable.

## 4. Suggestion-Selection Fidelity

### Definition

**Suggestion-Selection Fidelity (SSF)** measures whether the system applies only the suggestions the user actually selected.

Controlled example:

```text
SUGGESTION A
shorten opening

SUGGESTION B
soften criticism

SUGGESTION C
add deadline

USER SELECTS:
A only
```

Expected result:

```text
A APPLIED
B NOT APPLIED
C NOT APPLIED
```

The benchmark should detect accidental application of unselected suggestions, semantic leakage from rejected suggestions, invisible bundled edits, and formatting changes attached to a selected suggestion but not requested.

## 5. Conversation-to-Draft Mutation Fidelity

The user can refine a selected suggestion through chat before Copilot updates the message. That means the editing instruction itself can evolve.

### Definition

**Conversation-to-Draft Mutation Fidelity (CDMF)** measures whether the final mutation faithfully represents the latest authorized conversational instruction rather than an earlier suggestion state.

Example:

```text
COPILOT:
"Make the opening warmer."

USER:
"Apply that, but do not sound apologetic."

COPILOT:
updates draft
```

The final text should preserve both constraints. The system must not treat the initial suggestion as canonical after the user modifies it.

## 6. Selection-to-Applied-Delta Fidelity

### Definition

**Selection-to-Applied-Delta Fidelity (SADF)** measures whether the exact text mutation corresponds to the selected and refined suggestion without introducing collateral changes.

A serious review record needs:

```text
before_text
selected_suggestion
user_refinement
after_text
```

The dangerous state is:

```text
SUGGESTION SELECTED:
"make sentence clearer"

ACTUAL DELTA:
three paragraphs rewritten
```

The user approved an idea, not necessarily every implementation decision.

## 7. Email-State Preservation Fidelity

An Outlook draft is not plain text. It contains subject, body, formatting, attachments, recipients, CC/BCC, thread context, quoted history, signature, and links.

### Definition

**Email-State Preservation Fidelity (ESPF)** measures whether an in-place Copilot edit changes only the intended content state while preserving unrelated draft properties.

A writing suggestion should not silently remove an attachment reference, alter the subject, damage quoted history, delete a signature, change formatting that carries meaning, or modify dates, quantities, or names that were not part of the requested change.

## 8. Recipient-and-Thread Boundary Fidelity

Email is operational communication. The artifact can be sent.

### Definition

**Recipient-and-Thread Boundary Fidelity (RTBF)** measures whether conversational editing remains isolated from recipient, routing, and thread-context state unless the user explicitly authorizes those changes.

The key principle is:

```text
EDIT BODY
!=
EDIT DELIVERY STATE
```

## 9. Mutation-Origin Retention Fidelity

A user may accept a Copilot suggestion and later send the resulting email. The final message typically appears as ordinary authored prose.

### Definition

**Mutation-Origin Retention Fidelity (MORF)** measures whether the editing history can still distinguish human-original text, AI-proposed text, AI-applied text, human-refined AI text, and human-written post-edit text.

Acceptance changes authority. It does not change origin.

## 10. Comparative Governance: Outlook vs Notion

A previous Deep Drift entry logged Notion's 28 August agent Suggested Edits model.

### Notion

```text
AGENT PROPOSES DELTA
-> VISIBLE SUGGESTION
-> HUMAN ACCEPT / REJECT
-> DOCUMENT MUTATION
```

### Outlook

```text
COPILOT COACHES IN CHAT
-> USER SELECTS SUGGESTION
-> USER MAY REFINE IT
-> COPILOT MUTATES DRAFT IN PLACE
```

The difference is important. Notion externalizes the proposed document delta. Outlook externalizes the recommendation and authorization conversation, then performs the mutation.

Therefore Deep Drift should distinguish:

```text
DELTA-REVIEW GOVERNANCE
from
INTENT-REVIEW GOVERNANCE
```

Both preserve human choice. Only the first necessarily exposes the exact proposed text mutation before application.

## 11. New Failure Classes

### 11.1 Unselected Suggestion Leakage
A rejected or unselected coaching recommendation influences the final draft.

### 11.2 Suggestion Bundling Opacity
One selected suggestion triggers multiple undocumented text changes.

### 11.3 Refinement Loss
The user's conversational qualification is ignored and the earlier Copilot suggestion is applied instead.

### 11.4 Applied-Delta Expansion
The final mutation affects more text than the selected suggestion reasonably implied.

### 11.5 Factual Mutation under Style Edit
A clarity, tone, or grammar request changes dates, numbers, names, commitments, or factual claims.

### 11.6 Quoted-History Corruption
Copilot edits content inside quoted earlier messages rather than only the current draft.

### 11.7 Signature Mutation
A coaching action changes a signature block or required footer unintentionally.

### 11.8 Attachment-Reference Drift
The rewritten text refers to an attachment differently from the actual attachment state.

### 11.9 Recipient-State Contamination
An editing operation changes recipient or routing state without explicit authorization.

### 11.10 Mutation-Origin Collapse
After application, no usable record distinguishes the inserted text from the user's original wording.

### 11.11 Chat / Draft Version Divergence
The user continues refining a suggestion in chat after the draft has changed, but the conversation does not clearly identify which draft version the refinement targets.

### 11.12 Mobile / Desktop Mutation Divergence
The same coaching sequence yields materially different applied edits across Outlook surfaces.

## 12. Deep Drift Benchmark: Selective Email Mutation Test

Create one controlled email containing a factual date, monetary amount, named recipient, deliberately blunt sentence, ambiguous paragraph, attachment reference, quoted prior-message block, signature, and one protected sentence.

Ask Copilot for coaching on clarity, tone, and brevity. Capture every suggestion. Select only one suggestion, refine it in chat, apply it, reject another, ask for a second refinement, and inspect the live draft.

Measure selected-suggestion compliance, rejected-suggestion isolation, user-refinement retention, exact mutation scope, factual-value preservation, recipient preservation, attachment-reference preservation, quoted-history preservation, signature preservation, provenance recoverability, and human repair minutes.

## 13. New Metrics

### Selected Suggestion Precision

```text
SSP =
applied changes attributable to selected suggestions
/
all applied AI changes
```

### Rejected Suggestion Isolation

```text
RSI =
rejected or unselected suggestions producing zero material mutation
/
all rejected or unselected suggestions
```

### Refinement Retention Rate

```text
RRR =
user refinements correctly represented in final applied delta
/
all controlled refinement instructions
```

### Mutation Scope Precision

```text
MSP =
changed text ranges inside authorized scope
/
all changed text ranges
```

### Protected Email-State Retention

```text
PESR =
protected factual, routing, attachment, quote, and signature states preserved
/
all protected state elements
```

### Mutation Origin Traceability

```text
MOT =
AI-applied text segments reconstructable from
suggestion + refinement + application history
/
all AI-applied text segments
```

## 14. Why This Matters for Memory

This is not a personal-memory update. But it introduces **editorial decision memory**.

A system may preserve the final draft while forgetting which suggestion the user rejected, which suggestion the user selected, what the user added as a refinement, and which exact mutation followed.

For Deep Drift, that suggests:

```text
CONTENT STATE MEMORY
+
DECISION STATE MEMORY
+
MUTATION STATE MEMORY
```

A serious creator system needs all three.

## 15. Why This Matters for Skills

Coaching behaves like a reusable editing Skill:

```text
ANALYZE DRAFT
-> GENERATE SUGGESTIONS
-> USER SELECTS
-> APPLY
```

But its behavior is host-specific because Outlook adds routing, quoting, signatures, and send-state constraints. Skill provenance must include the host object model.

## 16. Why This Matters for Mini-App Builders

Selective conversational mutation is a reusable mini-app primitive:

```text
MODEL RECOMMENDATION
-> HUMAN SELECTOR
-> CONVERSATIONAL REFINEMENT
-> CONTROLLED MUTATION
```

That pattern can apply to email, documents, CRM records, support responses, publishing systems, and structured forms.

## 17. Why This Matters for Chat-to-Document Export

This feature is not a conventional chat-to-DOCX export, but it demonstrates the same core transformation problem:

```text
CHAT DECISION
-> ARTIFACT MUTATION
```

The exact chat state becomes part of the artifact's causal history. Deep Drift document-export benchmarks should therefore preserve not just source chat content but edit-authorizing chat turns.

## 18. Why This Matters for DOCX / PDF Workflows

A final email may later be copied into a project document, exported into a case record, printed to PDF, or archived.

If the message contains AI-applied edits, the downstream artifact can preserve the prose while losing the mutation history.

The clean archival artifact and the creator-side mutation ledger are different objects and should remain linked.

## 19. Why This Matters for Copy-Paste / Export Research

This workflow reduces manual copying by directly applying selected recommendations in place.

The old path:

```text
READ SUGGESTION
-> COPY
-> EDIT
-> PASTE
```

becomes:

```text
SELECT SUGGESTION
-> COPILOT MUTATES DRAFT
```

Less friction means fewer visible intermediate states. Deep Drift should treat **friction removal as provenance compression** unless the system deliberately preserves those hidden states elsewhere.

## 20. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer consumer-memory release surfaced beyond the late-August Claude/OpenAI changes already logged. This update contributes editorial decision memory rather than personal memory. |
| Skills | No newer general Skill launch surfaced; Outlook coaching behaves as a host-bound editing procedure with selective human authorization. |
| Mini-app builders | Material adjacent pattern: recommendation -> human selection -> conversational refinement -> controlled mutation is emerging as a reusable app primitive. |
| Chat-to-document/export | Material new-to-log mutation architecture: chat coaching can selectively change a live communication artifact in place. |
| DOCX / PDF generation | No newer standalone generator surfaced in this interval; archival fidelity should preserve the separate mutation ledger. |
| Copy-paste/export fixes | Material workflow replacement: selective in-place application removes manual copy/paste between AI advice and email draft. |
| Broader creator workflow | Material trend: creator systems are separating recommendation, authorization, and mutation into distinct stages, but not all platforms expose the exact delta equally. |

## 21. Cross-Platform Check

### Microsoft

The new-to-log item is Outlook's 11 August 2026 selective coaching workflow: chat-based recommendations, selective application, conversational refinement, and in-place draft mutation.

A related but distinct Microsoft July update also exposes one-click artifact creation from Copilot Notebook context, reinforcing the broader move from AI summary surfaces into artifact-producing workflow surfaces.

### Notion

Notion's 28 August agent Suggested Edits system remains the strongest comparison because it externalizes proposed document deltas before human acceptance.

### OpenAI

OpenAI's public release notes checked on 29 August 2026 still top out at the 27-28 August changes already represented in the Deep Drift ledger.

### Anthropic

No newer creator-workflow release displaced the 25 August memory architecture already logged.

### Google

No newer Workspace/Gemini creator release surfaced in this interval that displaced already logged creator changes.

### Databricks

The latest material Genie creator-runtime item remains the 27 August Agent mode API and Unity Catalog tool integration already logged.

## 22. Deep Drift Research Position

The weak description is:

> Outlook Copilot can apply selected coaching suggestions.

The serious description is:

> A conversational AI can now produce multiple editorial recommendations, receive selective human authorization and further natural-language refinement, and then convert that decision state directly into mutation of a live, sendable communication object.

That makes human approval explicit but does not automatically make the exact mutation trace explicit.

Therefore:

```text
SELECTED
!=
PRECISE DELTA APPROVED

APPLIED
!=
ORIGIN PRESERVED

REFINED
!=
REFINEMENT TRACE RETAINED

EMAIL EDITED
!=
COMMUNICATION STATE UNCHANGED
```

The serious Deep Drift requirement is:

> **Every selectively applied conversational edit should preserve the full suggestion set, selected and rejected suggestion IDs, user refinement turns, exact applied text delta, protected email-state fields, artifact version before and after, and creator-side attribution of AI-originated mutation.**

The industry is finally improving the human-control boundary. Now it has to stop treating the evidence of that control as disposable scaffolding.

## 23. Evidence Boundary

Platform facts in this report are grounded in Microsoft's first-party **Microsoft 365 Copilot release notes**, specifically the 11 August 2026 Outlook update, re-verified on 29 August 2026.

Microsoft states that Outlook Copilot coaching now appears through chat, users can choose which recommendations to apply, users can refine recommendations through the chat interaction, and Copilot updates the live email message in place. Microsoft also states that the previous experience presented coaching in canvas and only allowed applying the full suggestion set at once.

SCMF, SSF, CDMF, SADF, ESPF, RTBF, MORF, failure classes, metrics, benchmark procedures, and the comparative "delta-review vs intent-review governance" framework are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Microsoft Learn, **Microsoft 365 Copilot release notes - August 11, 2026**.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

2. Microsoft Learn, **Microsoft 365 Copilot release notes - July 29, 2026**, Copilot Notebooks one-click artifact workflow.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

3. Notion, **Ask your agent to suggest edits**, 28 August 2026.  
   https://www.notion.com/releases/2026-08-28

4. OpenAI Help Center, **ChatGPT Release Notes**, checked 29 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

5. Anthropic Help Center, **Claude release notes**, checked 29 August 2026.  
   https://support.claude.com/en/articles/12138966-release-notes

6. Google Workspace Updates, checked 29 August 2026.  
   https://workspaceupdates.googleblog.com/

7. Microsoft Learn / Azure Databricks, **AI/BI and Genie One release notes 2026**, checked 29 August 2026.  
   https://learn.microsoft.com/en-us/azure/databricks/ai-bi/release-notes/2026

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
