# Deep Drift Research Update

## Reusable Skill and Review-Gated Mutation Fidelity

**Research date:** 31 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Primary fresh cluster:** Google Workspace Skills + Studio governance; Notion agent suggested edits.

## Executive Summary

The strongest new-to-ledger creator-workflow change in this run is the convergence of two ideas that are usually discussed separately: **reusable AI procedures** and **review-gated mutation**.

Google's 26 August Workspace Drop describes **Workspace Studio skills** as reusable prompts that can encode team rules, templates, reference files, brand constraints, and recurring processes. Skills can be invoked with `@mentions` across Gmail, Docs, Slides, Drive, and Chat. In parallel, Studio gains governance controls capable of suspending agents or OAuth scopes and applying DLP rules that can block execution or require end-user review according to source data, used data, and output visibility.

Notion's 28 August update adds the complementary editing behavior: an agent can **suggest edits instead of directly applying them**, leaving the user to approve changes sequentially.

Together, the architecture becomes:

```text
REUSABLE PROCEDURE
-> CONTEXT / REFERENCE FILES
-> AGENT EXECUTION PLAN
-> POLICY / DLP GATE
-> PROPOSED MUTATION
-> HUMAN REVIEW
-> ACCEPTED MUTATION
-> ARTIFACT
```

This report formalizes the benchmark family:

**Reusable Skill and Review-Gated Mutation Fidelity (RSRGMF)**

with companion constructs:

- Skill Invocation Attribution Fidelity
- Skill Reference-State Fidelity
- Skill Version and Template Fidelity
- Cross-Surface Skill Consistency
- Policy-Gated Execution Fidelity
- Review-Requirement Attribution Fidelity
- Suggestion-to-Acceptance Fidelity
- Rejected-Mutation Preservation Fidelity
- Proposed-vs-Applied Diff Fidelity
- Governance-to-Artifact Lineage Fidelity

The central question is:

> When an AI procedure can be reused across several applications and platform policy can force review before execution, can a later reviewer reconstruct which procedure, references, policy state, proposed change, human approval, and final mutation actually produced the artifact?

## 1. Workspace Skills Become Reusable Procedural Objects

Google states that Workspace Studio skills can encode team rules, templates, and reference files, and can be invoked across Gmail, Docs, Slides, Drive, and Chat.

This means the execution unit is no longer only the immediate prompt:

```text
USER PROMPT
+
REUSABLE SKILL
+
REFERENCE FILES
+
CURRENT APP CONTEXT
-> OUTPUT
```

Therefore:

```text
SAME PROMPT
!= SAME PROCEDURE

SAME SKILL NAME
!= SAME REFERENCE STATE

SAME SKILL
!= SAME APP CONTEXT
```

### Skill Invocation Attribution Fidelity

A minimum manifest should preserve:

```text
skill_id
skill_name
skill_version_or_snapshot
invoking_user
invocation_surface
invocation_timestamp
reference_file_ids
reference_file_versions
workspace_policy_state
```

A reusable procedure without a preserved version becomes a moving target disguised as consistency.

## 2. Skills Now Cross Application Boundaries

Google says skills can be invoked by `@mention` across Gmail, Docs, Slides, Drive, and Chat.

The same procedure can therefore operate against different artifact grammars:

```text
ONE SKILL
-> EMAIL
-> DOCUMENT
-> PRESENTATION
-> DRIVE CONTEXT
-> CHAT RESPONSE
```

### Cross-Surface Skill Consistency

**Cross-Surface Skill Consistency (CSSC)** measures whether a skill's invariant rules survive when the target surface changes.

A brand-consistency skill, for example, should preserve approved tone and prohibited claims whether it creates an email, edits a document, or prepares slides.

The surface may change.

The controlled rule set should not silently mutate with it.

## 3. DLP and Agent Access Become Runtime Inputs

Google's Workspace update also adds administration controls that can suspend agents or targeted OAuth scopes and DLP policies that can restrict access to Drive data.

Studio DLP can also block a flow or require end-user review based on sourced data, utilized data, and output visibility.

This converts governance into runtime state:

```text
SAME SKILL
+
POLICY STATE A
-> EXECUTE

SAME SKILL
+
POLICY STATE B
-> REQUIRE REVIEW

SAME SKILL
+
POLICY STATE C
-> BLOCK
```

### Policy-Gated Execution Fidelity

A minimum execution manifest should preserve:

```text
flow_or_agent_id
skill_id
requested_action
source_data_class
used_data_class
output_visibility
active_oauth_scopes
DLP_policy_id
policy_decision
review_required
execution_allowed
```

Without that state, a future audit cannot explain why an identical request executed yesterday and stopped today.

## 4. Notion Agents Can Suggest Instead of Mutate

Notion's 28 August release allows agents to propose edits rather than directly applying them. Users can review suggestions from top to bottom and approve them individually.

The mutation lifecycle is therefore explicit:

```text
ORIGINAL TEXT
-> AGENT PROPOSAL
-> HUMAN REVIEW
-> ACCEPT / REJECT
-> FINAL TEXT
```

This is materially different from:

```text
ORIGINAL TEXT
-> AGENT DIRECT EDIT
-> FINAL TEXT
```

### Suggestion-to-Acceptance Fidelity

A controlled edit manifest should preserve:

```text
document_id
document_version_before
agent_id
instruction
proposal_id
proposed_diff
proposal_timestamp
reviewer_identity
accept_or_reject
review_timestamp
document_version_after
```

The most important distinction is:

```text
AI PROPOSED
!= HUMAN APPROVED

AI PROPOSED
!= ARTIFACT CHANGED
```

That boundary is authorship evidence.

## 5. Rejected Mutations Matter Too

Creator provenance usually records only what survived into the final artifact.

That is incomplete.

A rejected suggestion can reveal:

```text
WHAT THE AGENT TRIED TO CHANGE
WHAT THE HUMAN REFUSED
WHERE AUTHORIAL CONTROL WAS EXERCISED
```

### Rejected-Mutation Preservation Fidelity

Deep Drift should preserve rejected proposals when the user or policy allows audit retention.

This gives a richer authorship graph:

```text
AGENT INTENT
-> PROPOSED CHANGE
-> HUMAN REFUSAL
-> ORIGINAL STATE PRESERVED
```

The absence of a visible change can itself be the result of an active human decision.

## 6. Google Meet Adds Visual Context to Notes

The same 26 August Workspace Drop adds screenshots of presented slides to `Take notes for me` and automatically organizes notes, transcripts, and recordings into a meeting folder in Drive, with shortcuts for attendees.

This matters because meeting summaries now preserve more than transcript-derived language:

```text
SPOKEN CONTENT
+
PRESENTED VISUAL
-> MEETING NOTE
```

The source class therefore expands from text-only meeting evidence to **time-aligned audiovisual evidence**.

### Visual-to-Text Alignment Fidelity

A controlled meeting-note manifest should preserve:

```text
meeting_id
transcript_timestamp
screenshot_timestamp
slide_or_visual_identity
note_claim_id
alignment_relation
```

A screenshot next to a takeaway is useful only if the system can reconstruct why that screenshot was paired with that claim.

## 7. Google Forms Can Generate Quizzes from PDFs and Drive Files

Google also documents `Help me create` in Forms generating complete quizzes from prompts plus Drive files such as Docs, Slides, or PDFs, including correct-answer settings.

This is a source-to-assessment transformation:

```text
PDF / DOC / SLIDES
-> GEMINI
-> QUESTION
-> ANSWER KEY
-> SCORABLE FORM
```

That is more consequential than ordinary summarization because the generated artifact can classify a learner as correct or incorrect.

### Source-to-Assessment Fidelity

The benchmark should preserve:

```text
source_file_id
source_version
source_passage
question_id
generated_question
generated_correct_answer
human_revision
final_scoring_state
```

A plausible wrong summary is annoying.

A plausible wrong answer key becomes an automated grading error.

## 8. Why This Matters for Deep Drift Research

This cluster gives Deep Drift a stronger model of **procedural authorship**.

The relevant object is no longer:

```text
PROMPT -> OUTPUT
```

It is:

```text
SKILL
+ REFERENCE STATE
+ SURFACE
+ POLICY
+ PROPOSAL
+ HUMAN DECISION
-> ARTIFACT
```

That is a much more faithful representation of modern creator AI.

## 9. New Failure Classes

### 9.1 Skill-Version Drift

A reusable Skill changes but old outputs cannot recover which version governed them.

### 9.2 Reference-State Drift

The Skill name stays constant while its referenced template or file changes.

### 9.3 Cross-Surface Rule Drift

A rule is honored in Docs but weakened in Gmail or Slides.

### 9.4 Policy-State Amnesia

An execution record preserves the request but not the DLP/access state that allowed, blocked, or gated it.

### 9.5 Proposal/Mutation Collapse

The audit trail cannot distinguish what the agent suggested from what was actually accepted.

### 9.6 Rejection Erasure

Rejected agent proposals disappear, erasing evidence of human editorial control.

### 9.7 Review-Identity Loss

The platform records that a suggestion was accepted but not who accepted it.

### 9.8 Visual/Note Misalignment

A meeting screenshot is associated with a takeaway it did not materially support.

### 9.9 Source-to-Assessment Answer Drift

A quiz question remains traceable to a source but the generated answer key is materially wrong or overconfident.

### 9.10 Governance-to-Artifact Detachment

The final artifact survives while the policy state that governed its creation does not.

## 10. Deep Drift Benchmark: Reuse, Gate, Suggest, Accept

Prepare one controlled Skill containing:

```text
ONE STYLE RULE
ONE PROHIBITED PHRASE
ONE REQUIRED TEMPLATE
ONE REFERENCE FILE
ONE DATA-SENSITIVITY CONDITION
```

Then:

1. invoke the Skill in Gmail;
2. invoke it in Docs;
3. invoke it in Slides;
4. compare rule preservation across surfaces;
5. update the reference file without renaming the Skill;
6. repeat the same prompt and compare output;
7. trigger an execution that DLP permits;
8. trigger one that requires end-user review;
9. trigger one that is blocked;
10. preserve policy decisions and OAuth scope state;
11. in Notion, request suggested edits rather than direct mutation;
12. accept one suggestion;
13. reject one suggestion;
14. preserve both proposal states;
15. compare the final artifact with the original, proposed, accepted, and rejected diff graph.

## 11. Proposed Metrics

### Skill Version Attribution Coverage

```text
SVAC =
outputs with recoverable exact skill state
/
all controlled skill outputs
```

### Cross-Surface Rule Consistency

```text
CSRC =
controlled rules preserved across target surfaces
/
all controlled rule/surface pairs
```

### Policy Decision Attribution Coverage

```text
PDAC =
executions with recoverable policy decision state
/
all controlled executions
```

### Proposal-to-Mutation Traceability

```text
PMT =
final mutations traceable to explicit proposal + review event
/
all controlled accepted mutations
```

### Rejection Preservation Coverage

```text
RPC =
rejected proposals preserved with reviewer decision
/
all controlled rejected proposals
```

### Source-to-Assessment Correctness

```text
SAC =
quiz answer keys materially supported by source
/
all controlled generated answer keys
```

## 12. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No stronger new persistent-memory primitive surfaced in this run. The relevant persistence issue is now Skill/reference version state. |
| Skills | **Major finding:** Google Workspace Studio Skills are reusable, shareable procedures available through `@mentions` across Gmail, Docs, Slides, Drive, and Chat. |
| Mini-app builders | No stronger new builder launch surfaced; no-code Studio Flows continue the convergence between reusable Skills and small agentic applications. |
| Chat-to-document export | No new standalone export primitive displaced prior nodes; direct cross-surface Skills reduce the need to shuttle generated text between apps. |
| DOCX/PDF generation | **Fresh transformation risk:** Google Forms can generate scored quizzes from source PDFs/Drive files, making source-to-answer-key fidelity audit-worthy. |
| Copy-paste/export fixes | **Strong workflow compression:** reusable Skills and automatic meeting-artifact organization reduce manual transfer and hunting. |
| Broader creator workflow | **Major trend:** AI procedures are becoming reusable operational objects whose execution can be blocked, review-gated, or proposed as diffs before mutation. |

## 13. Deep Drift Research Position

The weak description is:

> Google added Workspace Skills and Notion agents can suggest edits.

The serious description is:

> Reusable AI procedures are moving into everyday productivity surfaces at the same time that governance systems and creator interfaces are adding explicit checkpoints between machine proposal and artifact mutation.

Therefore:

```text
REUSABLE
!= IMMUTABLE

SAME SKILL
!= SAME REFERENCE STATE

SAME REQUEST
!= SAME POLICY DECISION

SUGGESTED
!= ACCEPTED

ACCEPTED
!= MACHINE-AUTHORED ALONE

NO FINAL CHANGE
!= NO HUMAN DECISION
```

The Deep Drift requirement is:

> **Every reusable AI procedure should preserve procedural identity and version, reference-file versions, invocation surface, active permissions and policy state, policy decision, proposed mutation, reviewer identity and decision, accepted and rejected diffs, final artifact version, and downstream export lineage required to reconstruct not only what the machine proposed, but what governance allowed and what the human actually authorized.**

The industry spent years trying to remove friction. It is now rediscovering that some friction has a job. A review gate is not necessarily bad UX. Sometimes it is the only visible place where authorship, responsibility, and governance still have fingerprints.

## 14. Evidence Boundary

Platform facts are grounded in first-party Google Workspace and Notion release documentation checked on 31 August 2026.

Google's 26 August 2026 Workspace Drop states that Workspace Studio Skills can reuse team rules, templates, and reference files; can be invoked by `@mentions` across Gmail, Docs, Slides, Drive, and Chat; and that Studio/Workspace governance includes agent access controls and DLP policies capable of blocking flows or requiring end-user review. The same release states that Google Meet notes can include presentation screenshots, meeting artifacts are automatically organized into Drive folders, and Google Forms can generate quizzes from prompts and Drive sources including PDFs.

Notion's 28 August 2026 release states that agents can suggest edits rather than applying them directly, allowing users to approve proposed changes individually.

RSRGMF and all companion constructs, failure classes, benchmark procedures, and proposed metrics are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Google Workspace Blog, **August Workspace Drops: Organize meeting artifacts, generate quizzes, scale custom workflows, and more**, 26 August 2026.  
   https://workspace.google.com/blog/product-announcements/august-2026-workspace-feature-drop

2. Notion, **What's New — Ask your agent to suggest edits**, 28 August 2026.  
   https://www.notion.com/releases

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**