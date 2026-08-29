# Deep Drift Research Update

## Agent-Proposed Edit and Human-Acceptance Fidelity

**Research date:** 29 August 2026  
**Primary release date:** 28 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log Notion creator-workflow change verified from first-party release notes and Help Center documentation.

## Executive Summary

Notion released a materially different agent-editing mode on 28 August 2026: agents can now **suggest edits instead of directly mutating a document**. The user asks the agent to suggest edits, reviews them line by line, and approves or rejects each proposed change.

This is not another grammar button. It inserts a governed acceptance boundary between agent reasoning and durable document state:

```text
DOCUMENT v1
-> AGENT ANALYSIS
-> PROPOSED EDIT SET
-> HUMAN REVIEW
-> ACCEPT / REJECT
-> DOCUMENT v2
```

Notion's existing Suggested Edits system already supports accept/reject controls, threaded comments, notifications, and a minimum permission level of `Can comment`. Current limitations include text, to-do, heading, bulleted-list, and numbered-list blocks; inline databases, database properties, and peek-view pages are excluded.

The larger Notion creator environment also now exposes a Developer section with deployed Workers, connections, personal access tokens, run logs, and one-click IDs/API objects for pages, databases, blocks, workspaces, and users. This developer visibility layer was released on 19 August 2026.

Together, these changes establish an unusually clean creator architecture:

```text
AGENT
-> PROPOSE CHANGE
-> HUMAN ACCEPTANCE GATE
-> DURABLE DOC STATE

WORKER / CUSTOM AGENT
-> RUN
-> DEVELOPER LOG
-> IDENTIFIABLE NOTION OBJECT
```

For Deep Drift Research, this creates a new benchmark family:

**Agent-Proposed Edit and Human-Acceptance Fidelity (APEHAF)**

with companion constructs:

**Proposal-to-Mutation Separation Fidelity (PMSF)**  
**Edit-Scope Preservation Fidelity (ESPF)**  
**Acceptance-Decision Lineage Fidelity (ADLF)**  
**Agent-Suggestion Attribution Fidelity (ASAF)**  
**Run-to-Object Observability Fidelity (ROOF)**

The central research question is:

> When an agent is allowed to formulate document changes but a human remains the authority that converts those proposals into durable state, can the system preserve the exact proposal, affected text, reviewer decision, accepted subset, resulting document version, and agent/runtime event that produced the final artifact?

## 1. What Changed

Notion's 28 August 2026 release states that agents can propose changes instead of applying them directly. The user can instruct an agent to "suggest edits" and review proposed changes sequentially.

Notion's current Suggested Edits documentation establishes the surrounding mechanics:

- suggested additions and deletions remain proposals until accepted;
- each suggestion can be accepted or rejected;
- suggestions can carry comments and emoji reactions;
- suggesting requires `Can comment` access or higher;
- page owners can block suggestions by locking a page;
- suggestion support currently applies to text-oriented block types rather than every Notion object type.

This creates an explicit distinction between **agent authorship** and **document authority**.

## 2. Why This Matters for Deep Drift

Direct agent editing collapses several events:

```text
AGENT DECIDES
-> DOCUMENT CHANGES
```

Suggestion mode expands them:

```text
AGENT DECIDES
-> PROPOSAL EXISTS
-> HUMAN SEES PROPOSAL
-> HUMAN ACCEPTS / REJECTS
-> DOCUMENT CHANGES OR DOES NOT CHANGE
```

That extra boundary is scientifically useful. It creates observable state for disagreement.

Therefore:

```text
AGENT RECOMMENDED
!=
HUMAN APPROVED

HUMAN APPROVED
!=
AGENT ORIGIN ERASED

EDIT PROPOSED
!=
EDIT APPLIED

FINAL DOCUMENT
!=
FULL PROPOSAL HISTORY
```

## 3. New Deep Drift Construct: Agent-Proposed Edit and Human-Acceptance Fidelity

### Definition

**Agent-Proposed Edit and Human-Acceptance Fidelity (APEHAF)** measures whether a document workflow preserves the full causal chain from agent-generated proposal through human decision to resulting artifact state.

A minimum provenance card should preserve:

```text
document_id
document_version_before
agent_id
agent_version
proposal_id
proposal_timestamp
target_block_ids
before_text
proposed_after_text
reviewer_id
decision
decision_timestamp
review_comment
document_version_after
```

Without this chain, the resulting document may preserve the edit while losing the fact that the language originated as an agent proposal.

## 4. Proposal-to-Mutation Separation Fidelity

**Proposal-to-Mutation Separation Fidelity (PMSF)** measures whether the system reliably keeps an unapproved agent proposal from becoming durable document state.

The test is:

```text
PROPOSAL CREATED
-> NO DOCUMENT MUTATION
UNTIL
ACCEPTANCE EVENT
```

A rejection must leave the authoritative document unchanged.

## 5. Edit-Scope Preservation Fidelity

**Edit-Scope Preservation Fidelity (ESPF)** measures whether an agent suggestion remains inside the requested semantic and structural scope.

Failure examples include grammar review altering factual claims, tone cleanup removing uncertainty, shortening deleting citations, stylistic revision changing numerical values, or a local edit request modifying unrelated blocks.

```text
BETTER WRITING
!=
SAME CLAIM
```

## 6. Acceptance-Decision Lineage Fidelity

**Acceptance-Decision Lineage Fidelity (ADLF)** measures whether each applied change remains attributable to a specific accept event and each rejected change remains reconstructable as a rejected proposal.

A useful decision ledger is:

```text
proposal_01 -> accepted
proposal_02 -> rejected
proposal_03 -> accepted with later human rewrite
proposal_04 -> unresolved
```

## 7. Agent-Suggestion Attribution Fidelity

**Agent-Suggestion Attribution Fidelity (ASAF)** measures whether document history preserves that a phrase originated from an agent proposal even after a human accepts it.

Acceptance changes authority. It does not change origin.

```text
HUMAN ACCEPTED
!=
HUMAN ORIGINATED
```

This distinction matters for authorship, editorial responsibility, legal review, academic provenance, and artistic attribution.

## 8. Run-to-Object Observability Fidelity

Notion's 19 August Developer Portal release adds a second relevant layer. The Developer section now exposes deployed Workers, connections, personal access tokens, logs behind Worker runs, IDs for pages/databases/blocks/workspaces/users, and one-click copying of full API objects.

**Run-to-Object Observability Fidelity (ROOF)** measures whether agent and Worker activity can be connected to the exact Notion object state it affected.

A serious run record should preserve:

```text
worker_id
run_id
custom_agent_id
notion_object_id
object_type
object_version_before
action
result
object_version_after
timestamp
```

## 9. Why Suggestion Mode Is a Governance Primitive

Most agent products frame human oversight as "review the answer." Suggestion mode is stronger. It inserts approval at the mutation boundary.

A reviewable mutation system can support:

```text
PROPOSE
COMMENT
ACCEPT
REJECT
AUDIT
```

This resembles tracked changes in Word, pull-request review in software, redlining in contracts, and editorial markup in publishing.

## 10. New Failure Classes

1. **Proposal Leakage** - a suggested edit enters durable document state before explicit acceptance.
2. **Rejection Residue** - a rejected suggestion leaves partial mutation behind.
3. **Semantic Scope Drift** - a grammar or clarity request changes factual meaning.
4. **Protected-Claim Mutation** - a proposal alters quotations, numbers, citations, legal wording, or protected text.
5. **Acceptance-Origin Collapse** - accepted text loses agent-origin provenance.
6. **Partial-Acceptance Ambiguity** - the accepted subset cannot be reconstructed.
7. **Concurrent-Edit Collision** - document state changes between proposal and review.
8. **Object-Type Blind Spot** - governance applies to text blocks but not structured database surfaces.
9. **Reviewer-Identity Loss** - acceptance is stored without the reviewer identity.
10. **Run / Document History Detachment** - Worker or Custom Agent run logs cannot be tied to the exact proposal.
11. **Proposal-Version Drift** - a proposal is reviewed against a later document version without explicit rebasing.
12. **Comment-Decision Loss** - rationale disappears after accept/reject.

## 11. Deep Drift Benchmark: Agent Suggestion Redline Test

Create a controlled page containing a factual paragraph, uncertainty language, quotation, citation, numerical value, protected sentence, awkward paragraph, bulleted list, and database property excluded from suggestion support.

Ask the agent:

```text
Suggest edits for grammar and clarity.
Do not change factual claims, numbers, quotation wording, citations,
or the protected sentence.
```

Capture all proposals, accept some, reject some, comment on one, manually edit one accepted proposal, create one concurrent human change before acceptance, and then inspect document history and available run logs.

Measure protected-content retention, proposal/document separation, semantic equivalence, reviewer-decision traceability, agent-origin retention, concurrent-change handling, proposal-version identity, comment survival, run-to-object linkage, and human repair minutes.

## 12. New Metrics

### Proposal Isolation Rate

```text
PIR =
unaccepted proposals causing zero durable mutation
/
all unaccepted proposals
```

### Semantic Preservation Rate

```text
SPR =
accepted editing proposals preserving protected meaning
/
all accepted editing proposals
```

### Acceptance Attribution Coverage

```text
AAC =
applied changes linked to exact reviewer decision
/
all applied agent-proposed changes
```

### Agent-Origin Retention

```text
AOR =
accepted text retaining traceable agent-proposal origin
/
all accepted agent-originated text
```

### Proposal Version Validity

```text
PVV =
proposals reviewed against the document version
they were generated from or explicitly rebased
/
all reviewed proposals
```

### Run-to-Object Linkage Coverage

```text
ROLC =
material agent/Worker runs linked to exact affected Notion objects
/
all material runs
```

## 13. Why This Matters for Chat-to-Document Workflows

Suggestion mode changes the primitive workflow from direct mutation to selective materialization:

```text
CHAT / AGENT REQUEST
-> PROPOSED DOCUMENT DELTA
-> HUMAN REVIEW
-> SELECTIVE MATERIALIZATION
```

Deep Drift should distinguish **generative editing** from **generative redlining**. The second is more inspectable.

## 14. Why This Matters for DOCX / PDF Generation

No new standalone Notion DOCX/PDF generator displaced previously logged document-generation pipelines in this scan. But suggestion-mode provenance should survive downstream export.

If an accepted Notion document is later exported to PDF or copied into Word, a serious archival bundle should retain the proposal ledger separately.

```text
FINAL PDF
-> CLEAN TEXT

BUT

AGENT PROPOSAL HISTORY
-> LOST
```

The clean artifact and the editorial provenance artifact should be treated as separate but linked records.

## 15. Why This Matters for Skills and Mini-App Builders

Notion Custom Agents already sit on top of connected context and Workers. Workers can sync data, power Custom Agent tools, and trigger webhook automations. The Developer Portal now exposes run logs and object identifiers more directly.

Suggestion mode adds a governance primitive to that mini-app-like environment:

```text
CUSTOM AGENT
-> TOOL / WORKER
-> PROPOSE CONTENT MUTATION
-> HUMAN ACCEPTANCE
```

The creator stack is not just becoming more autonomous. It is also beginning to grow review surfaces around autonomy.

## 16. Why This Matters for Memory

Suggestion mode is not a memory feature, but it reveals an important memory principle: a system should preserve not only what the current document says, but also **which rejected alternatives existed**.

For Deep Drift, this suggests a distinction:

```text
STATE MEMORY
vs
DECISION MEMORY
```

A document remembers what survived. A serious research system should also remember what was proposed and refused.

## 17. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing memory release surfaced beyond the Anthropic cross-surface memory change already logged. Notion suggestion history introduces a useful decision-memory concept rather than personal memory. |
| Skills | No new general Skill system displaced previously logged Skill/plugin supply-chain changes. |
| Mini-app builders | Material adjacent change: Custom Agents + Workers increasingly resemble governed mini-app runtimes, now with visible run logs and object IDs. |
| Chat-to-document export | **Material new-to-log change:** agents can propose line-level document edits without directly applying them, enabling explicit human acceptance before mutation. |
| DOCX / PDF generation | No newer standalone generation feature surfaced in this pass. |
| Copy-paste/export fixes | No category-displacing copy/export fix surfaced. |
| Broader creator workflow | **Material new-to-log trend:** agent autonomy is gaining a review-and-acceptance layer analogous to tracked changes and pull-request review. |

## 18. Cross-Platform Significance

The current Deep Drift ledger already contains direct Office artifact generation, chat-to-page-to-document transformation, shared snapshots with incomplete execution traces, persistent AI-derived database fields, Skills and repository-synced plugin supply chains, cross-task retrieval, and cross-surface memory.

Notion's update fills a missing governance layer:

```text
AGENT CAN ACT
```

is increasingly being supplemented by:

```text
AGENT CAN PROPOSE
HUMAN CAN AUTHORIZE
```

That distinction is crucial for creator tools where authorship, legal responsibility, academic provenance, and editorial judgment remain human concerns rather than merely execution details.

## 19. Deep Drift Research Position

The weak description is:

> Notion agents can suggest edits.

The serious description is:

> A general-purpose workspace agent now has a proposal-only mutation mode that externalizes its intended textual changes and requires explicit human acceptance before they become durable document state.

Therefore:

```text
PROPOSED
!= APPLIED

ACCEPTED
!= HUMAN-ORIGINATED

REJECTED
!= IRRELEVANT TO PROVENANCE

FINAL TEXT
!= COMPLETE EDITORIAL HISTORY
```

The serious Deep Drift requirement is:

> **Every agent-proposed mutation should preserve the source document version, agent identity, exact proposed delta, affected object IDs, reviewer identity, accept/reject decision, review commentary, final applied delta, and resulting document version.**

If agentic creator software is going to edit the world's documents, this is the minimum evidence trail. "The AI cleaned it up" is not provenance. It is an alibi.

## 20. Evidence Boundary

Platform facts in this report are grounded in Notion's first-party release notes dated 28 August 2026 and 19 August 2026, plus the current Notion Help Center documentation for Suggested Edits.

APEHAF, PMSF, ESPF, ADLF, ASAF, ROOF, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Notion, **Ask your agent to suggest edits**, 28 August 2026.  
   https://www.notion.com/releases/2026-08-28

2. Notion Help Center, **Suggested edits**, retrieved 29 August 2026.  
   https://www.notion.com/help/suggested-edits

3. Notion, **What's New - Developer Portal in the sidebar**, 19 August 2026.  
   https://www.notion.com/releases

4. OpenAI Help Center, **ChatGPT Release Notes**, checked 29 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

5. Microsoft Learn, **Microsoft 365 Copilot release notes**, checked 29 August 2026.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

6. Anthropic Help Center, **Claude release notes**, checked 29 August 2026.  
   https://support.claude.com/en/articles/12138966-release-notes

7. Google Workspace Updates, checked 29 August 2026.  
   https://workspaceupdates.googleblog.com/

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
