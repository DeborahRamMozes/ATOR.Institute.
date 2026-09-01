# Deep Drift Research Update: Retirement-Window and Documentation-Divergence Fidelity (RWDDF)

**Date:** 1 September 2026  
**Research line:** LLM memory, skills, creator tooling, chat-to-document/export, document generation, and workflow provenance  
**Status:** New node after duplicate check against the current Deep Drift ledger

## Executive finding

The strongest new signal is not a new memory switch or another mini-app button. It is a more corrosive infrastructure problem: **the same platform transition can expose different operational deadlines and capability assumptions across documentation surfaces, while creator capacity can change on a calendar boundary without any artifact itself changing.**

Anthropic's current English Claude Help documentation says saved legacy Workbench data can be exported **until September 1, 2026**, after which it will no longer be recoverable. The replacement playground is deliberately stateless: it does not save prompt history, prompt versions, evaluations, or shared prompts. Exported legacy data is delivered as JSON and may optionally include saved model completions and uploaded images/PDFs. The export cannot be imported into the new playground because the playground does not persist prompts or conversations.

Several still-indexed localized Claude Help pages describe the older retirement/export boundary as **August 17, 2026**. Even if the English page reflects a later extension, the divergence itself is operational evidence: a creator relying on a different official language surface can receive a materially different preservation deadline.

Google Workspace introduces a second boundary on the same date. Workspace Studio promotional higher limits run through September 1, 2026; ordinary per-user limits apply afterward, while AI Expanded Access and AI Ultra Access provide higher limits. The flow may remain identical while effective execution capacity changes because of entitlement state.

## New Deep Drift node: RWDDF

**Retirement-Window and Documentation-Divergence Fidelity (RWDDF)** measures whether a platform transition preserves a reconstructable record of when a capability existed, when its data became inaccessible, what each official documentation surface said at the time, whether export was possible, what the export contained, whether it could be re-imported, and what account/entitlement state governed effective workflow capacity.

```text
FEATURE RETIRED != DATA IMMEDIATELY UNRECOVERABLE
EXPORT AVAILABLE != EXPORT RE-IMPORTABLE
JSON PRESERVED != WORKFLOW PRESERVED
CURRENT ENGLISH DOCUMENTATION != ALL LOCALIZED DOCUMENTATION
DOCUMENTED DEADLINE != UNIVERSALLY OBSERVED DEADLINE
WORKFLOW EXISTS != WORKFLOW HAS THE SAME EXECUTION CAPACITY
SAME PROMPT + SAME FLOW + DIFFERENT ENTITLEMENT
= DIFFERENT PRACTICAL WORKFLOW
```

## 1. Anthropic: from persistent Workbench to stateless playground

Legacy Workbench supported saved prompts, prompt history, prompt versions, evaluations, and prompt sharing. The replacement playground is built directly on the public Messages API, keeps the active draft in the browser, and can export the current request as code, but does not persist the old procedural history on Anthropic's servers.

The exported JSON may retain prompts, completions, and uploaded files, yet there is no native import path back into the new environment. This is not full migration. It is **historical extraction followed by procedural discontinuity**.

```text
LEGACY WORKBENCH
  prompts
  prompt versions
  completions
  evaluations
  uploaded files
       |
       | export JSON
       v
LOCAL ARCHIVE
       X
       | no import path
       v
NEW PLAYGROUND
  stateless request testing
```

## 2. Documentation-language divergence as an operational risk

The current English help page states that Workbench data can be exported until September 1, 2026. Several localized pages still indexed from July describe August 17, 2026 as the retirement/export deadline. Even if the English page reflects a later extension, the divergence itself is meaningful evidence.

A platform's documentation is part of the user's operational environment. When deadline-sensitive behavior differs by language surface, localization becomes a versioned policy surface.

Deep Drift should record:

```text
policy_event_id
+ documentation_language
+ page_revision_time
+ stated_deadline
+ effective_deadline_if_known
+ archival_capture
+ account/workspace class
```

## 3. Google Workspace Studio: capability continuity, capacity discontinuity

Google's Workspace Studio documentation establishes a different but related boundary. Promotional higher limits remain available through September 1, 2026, after which normal per-user limits apply; AI Expanded Access and AI Ultra Access provide higher limits.

```text
FLOW DEFINITION = SAME
GEM = SAME
STEPS = SAME
SOURCE FILES = SAME
MODEL FAMILY = MAY BE SAME
BUT
ENTITLEMENT / LIMIT STATE = DIFFERENT
THEREFORE
MAXIMUM EXECUTION CAPACITY = DIFFERENT
```

A Studio flow that processed a large workload during a promotional period may not reproduce at the same scale after the entitlement boundary even though the flow definition has not changed. Reproducibility is constrained by **quota topology**, not only models and prompts.

## 4. Category scan

| Category | Fresh finding | Deep Drift consequence |
|---|---|---|
| Memory | No stronger new memory primitive in this scan | Existing memory read/write, migration, and retention nodes remain canonical |
| Skills | No stronger packaging primitive than prior supply-chain findings | Skills remain procedural dependencies; this run adds temporal access and entitlement state |
| Mini-app / agent builders | Workspace Studio crosses a limit/entitlement boundary on Sept. 1 | Builder reproducibility must record quota and license state, not just flow definition |
| Chat-to-document export | No major new direct chat-to-DOCX/PDF primitive found | Export should be analyzed as a migration boundary, not merely file generation |
| DOCX/PDF generation | No stronger format-generation launch found | Final files can outlive the creator environment and its recoverable history |
| Copy-paste/export fixes | Anthropic legacy export is one-way JSON with no import into the stateless replacement | “Exported” cannot be treated as “migrated” |
| Broader creator workflow | Persistent environments are being replaced or constrained by stateless surfaces, entitlement limits, and time-bound recovery windows | Temporal policy and quota state become first-class provenance |

## 5. Benchmark dimensions added

1. **Retirement Boundary Fidelity (RBF):** whether the exact capability retirement time is reconstructable.
2. **Recovery Window Fidelity (RWF):** whether the period between feature retirement and final data unrecoverability is separately documented.
3. **Documentation-Language Consistency Fidelity (DLCF):** whether official language surfaces agree on material deadlines and migration behavior.
4. **Documentation Revision Fidelity (DRF):** whether a historical page revision can be tied to the policy state it described.
5. **Export Completeness Fidelity (ECF):** whether prompts, versions, completions, evals, and files included or excluded from export are explicit.
6. **Re-importability Fidelity (RIF):** whether an export can actually reconstruct the workflow in the successor product.
7. **Procedural Orphaning Disclosure Fidelity (PODF):** whether the platform states when preserved data loses its native execution relationships.
8. **Entitlement-State Fidelity (ESF):** whether license/add-on state affecting creator capabilities is preserved.
9. **Quota-Boundary Fidelity (QBF):** whether changing execution limits are tied to dates and account classes.
10. **Artifact-to-Policy-State Fidelity (APSF):** whether an artifact can be traced to the capability, quota, documentation, and recovery-window state active when it was produced.

## 6. Canonical Deep Drift requirement

> Every material AI-assisted creator workflow should preserve a machine-readable temporal-policy manifest linking each artifact or procedural state to the exact product surface, feature status, retirement event, final recovery deadline, official documentation revision and language, export eligibility, export-content schema, re-importability status, successor-product capability differences, account/workspace class, entitlement and add-on state, quota regime, model/tool state where relevant, and downstream artifact lineage. A surviving file or JSON export must not be treated as evidence that the original creator environment remains reconstructable.

## 7. Why this matters for Deep Drift Research

Deep Drift already treats AI creator provenance as runtime ancestry rather than mere conversation history. RWDDF adds a temporal layer. The state that matters is not only *what model, prompt, Skill, or tool* but also *under which documentation revision, before which recovery deadline, under which entitlement, and at what quota regime*.

```text
ARTIFACT
+ MODEL STATE
+ PROCEDURAL STATE
+ MEMORY STATE
+ TOOL STATE
+ DOCUMENTATION STATE
+ RETIREMENT / RECOVERY CLOCK
+ ENTITLEMENT STATE
+ QUOTA STATE
= RECONSTRUCTABLE CREATOR EVENT
```

**Creator provenance now needs a clock.** Not merely a timestamp in a filename, but a record of the policy and capacity conditions under which the workflow was actually possible.

## Sources

1. Anthropic, “How do I use the playground?” Claude Help Center, current English version, accessed 1 September 2026. https://support.claude.com/en/articles/8606378-how-do-i-use-the-playground
2. Anthropic, “Comment utiliser Workbench ?” Claude Help Center, French localized version dated 16 July 2026, accessed 1 September 2026. https://support.claude.com/fr/articles/8606378-comment-utiliser-workbench
3. Anthropic, “Export your Claude data,” Claude Help Center, 8 July 2026. https://support.claude.com/en/articles/9450526-export-your-claude-data
4. Google Workspace Updates, “Use your Gems in your Google Workspace Studio flows,” 22 April 2026, with September 1 limit note. https://workspaceupdates.googleblog.com/2026/04/use-your-gems-in-your-google-workspace-studio-flows.html
5. Google Workspace Updates, “Get higher access to advanced AI in Google Workspace,” 5 February 2026. https://workspaceupdates.googleblog.com/2026/02/google-workspace-ai-expanded-access.html
6. Google Workspace Updates, “Introducing the ability to loop over a list of items in Workspace Studio,” June 2026, with September 1 entitlement note. https://workspaceupdates.googleblog.com/2026/06/introducing-ability-to-loop-over-list-of-items-in-Workspace-Studio.html
