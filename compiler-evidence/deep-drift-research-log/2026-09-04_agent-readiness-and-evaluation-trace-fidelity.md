# Deep Drift Research Update - ARETF

## Agent Readiness and Evaluation Trace Fidelity

**Research date:** 4 September 2026  
**Primary fresh delta:** Microsoft Copilot Studio is beginning a September 2026 rollout of Agent Readiness, an always-visible "Review" health state that surfaces publish blockers and risks such as policy restrictions and missing evaluations. Microsoft is also expanding its Evaluations experience with richer explanations, platform-exposed agent reasoning traces, cited knowledge sources, evaluation-run comparison, larger datasets, customizable test generation, and dataset generation from knowledge sources.  
**Status note:** These items are roadmap/rollout features, not evidence that every tenant has them already.

## Executive finding

Agent creation is acquiring a release-engineering layer.

The important creator-workflow shift is no longer just:

```text
BUILD AGENT
-> PUBLISH AGENT
```

It is becoming:

```text
BUILD
-> REVIEW
-> EVALUATE
-> INSPECT TRACE / SOURCES
-> COMPARE RUNS
-> FIX
-> PUBLISH
```

For Deep Drift:

```text
PUBLISHED
!= VERIFIED READY

SAME AGENT CONFIG
!= SAME RELEASE EVIDENCE

SAME SCORE
!= SAME FAILURE MODE

EVALUATION OUTCOME
!= EVALUATION TRACE

AGENT VERSION
+ REVIEW STATE
+ EVALUATION SUITE
+ TRACE / SOURCES
+ PUBLISH DECISION
= RELEASE STATE
```

The new provenance object is the **release-evidence state**.

## New node

### Agent Readiness and Evaluation Trace Fidelity (ARETF)

Minimum state model:

```text
agent_id
agent_version
review_state
review_timestamp
review_findings
blocking_vs_advisory_finding
evaluation_suite_id
evaluation_suite_version
test_case_id
test_case_version
evaluation_run_id
evaluation_run_time
grader_configuration
score
platform_exposed_evaluation_trace
cited_knowledge_sources
comparison_baseline_run
publish_decision
publisher_role_if_observable
publish_time
post_publish_version
```

## 1. Readiness becomes a first-class build state

Microsoft describes Agent Readiness as a real-time, always-visible health check inside Copilot Studio. A single Review indicator can surface issues that are blocking or at risk before publish, including policy restrictions and missing evaluations.

This matters because a creator can no longer treat the editable agent configuration as the complete pre-publication state.

```text
AGENT CONFIGURATION
+
READINESS STATE
=
PRE-PUBLISH STATE
```

A snapshot of instructions, tools, and knowledge sources can be incomplete if the platform simultaneously considers the agent blocked, at risk, or insufficiently evaluated.

## 2. Readiness is distinct from runtime approval

Deep Drift already tracks human approval gates for actions executed by an agent.

ARETF is different.

```text
HASPF:
AGENT INTENDS ACTION
-> HUMAN APPROVAL
-> EXECUTION OR DENIAL

ARETF:
AGENT IS BUILT
-> PLATFORM REVIEW / EVALUATION
-> RELEASE DECISION
```

One governs whether a particular action may execute.

The other governs whether an agent is considered ready to be released.

They are separate causal layers and should not be collapsed into one generic "approval" field.

## 3. Missing evaluation can become a release finding

Microsoft explicitly includes missing evaluations among the risks surfaced by Agent Readiness.

That means absence of testing is itself becoming machine-visible build state.

```text
NO EVALUATION
!= NO INFORMATION

NO EVALUATION
-> READINESS FINDING
```

For Deep Drift, "not tested" must therefore remain distinguishable from "tested and passed" and "tested and failed."

## 4. Evaluation explanations become evidence objects

Microsoft's September evaluation roadmap adds richer explanations designed to help makers understand why evaluations succeed or fail.

The score is therefore no longer the only visible artifact.

```text
TEST CASE
-> SCORE
-> EXPLANATION
```

A research archive should preserve the explanation separately because two identical scores can arise from materially different failure modes.

## 5. Platform-exposed traces require precise language

Microsoft describes agent reasoning traces in the evaluation interface.

For Deep Drift, these should be archived as **platform-exposed evaluation traces**.

They must not be treated as privileged access to hidden internal chain-of-thought.

```text
PLATFORM-EXPOSED TRACE
!= HIDDEN MODEL REASONING
```

The trace is a product-generated evidence surface. It may still be extremely useful for debugging and provenance, but its epistemic status must remain explicit.

## 6. Cited knowledge sources become part of QA provenance

The expanded evaluation experience includes cited knowledge sources.

This allows a test result to carry evidence about which knowledge source contributed to the evaluated behavior.

Therefore:

```text
EVALUATION RESULT
+
CITED SOURCE
=
GROUNDING EVIDENCE
```

Where available, Deep Drift should preserve the cited source identity, version or retrieval state, and evaluation run that referenced it.

A passing score without its grounding path is weaker evidence than a passing score with source attribution.

## 7. Run comparison creates baseline dependency

Microsoft is adding evaluation-run comparison.

Once two runs are compared, interpretation depends on the selected baseline.

```text
RUN B "IMPROVED"
```

is incomplete without:

```text
COMPARED AGAINST RUN A
UNDER EVALUATION SUITE S
```

A different baseline can change the apparent narrative of improvement.

Deep Drift therefore needs run-comparison lineage, not merely isolated score snapshots.

## 8. Evaluation datasets are becoming generated artifacts

Microsoft's roadmap includes customizable test generation and dataset generation from knowledge sources.

That creates another machine-generated layer inside agent QA:

```text
KNOWLEDGE SOURCE
-> GENERATED EVALUATION DATASET
-> AGENT TEST
-> SCORE / TRACE
```

The evaluation corpus itself can therefore drift.

If an agent is tested against a newly generated or modified dataset, score movement may reflect:

```text
AGENT CHANGE
OR
TEST DATASET CHANGE
OR
GRADER CHANGE
```

not necessarily improved or degraded model behavior.

## 9. Evaluation configuration must be versioned

A scientifically useful comparison needs more than agent version.

Preserve:

```text
agent version
evaluation suite version
test-case version
grader configuration
knowledge-source state
run time
comparison baseline
```

Otherwise a chart showing quality "improvement" can merely be a chart showing that the exam changed. Humans invented this problem centuries ago; software has graciously automated it.

## 10. Publish is a causal event, not proof of quality

Microsoft's publishing documentation already distinguishes editable changes from the published version: changes made after publication do not affect users until the agent is republished, and the new published version replaces the previous one.

ARETF adds the QA state surrounding that transition.

The provenance sequence becomes:

```text
EDITABLE VERSION
-> REVIEW STATE
-> EVALUATION RUN(S)
-> REMEDIATION
-> PUBLISH EVENT
-> DEPLOYED VERSION
```

The publish event should be tied to the evidence state available when the release decision occurred.

## 11. Evaluation evidence has its own retention window

Microsoft's current evaluation documentation says test results remain available in Copilot Studio for 89 days, with CSV export recommended for longer retention.

This creates a time-bounded evidence problem:

```text
AGENT MAY REMAIN
WHILE
EVALUATION EVIDENCE EXPIRES
```

For Deep Drift, long-term reproducibility therefore requires exporting evaluation results before the platform retention window closes.

## 12. Static DOCX/PDF export is useful but incomplete

A static research report can preserve:

- readiness findings captured at one time;
- score tables;
- evaluation explanations;
- selected trace excerpts;
- cited source identifiers;
- comparison summaries.

It can lose:

- interactive run comparison;
- expandable trace structure;
- live links to knowledge sources;
- changing readiness state;
- remediation history;
- newly generated test sets;
- platform-retained run metadata.

Therefore:

```text
EVALUATION UI
-> DOCX / PDF
=
DOCUMENTARY PRESERVATION
+ INTERACTIVE / STATE LOSS
```

Static exports should be accompanied by machine-readable CSV/JSON or equivalent evaluation records when available.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger unlogged delta found in this run | Existing memory-boundary nodes remain current |
| Skills / agent configuration | Adjacent material change | Agent capability is now coupled to pre-publish readiness and evaluation evidence |
| Mini-app / agent builders | **Major fresh delta** | Builder workflow now includes an always-visible Review/readiness layer |
| Chat-to-document | Indirect | Evaluation evidence increasingly needs exportable reports and archival records |
| DOCX/PDF | **Major archival implication** | Static QA reports preserve snapshots but lose live comparison and trace state |
| Copy-paste/export | No stronger direct fix found | Evaluation CSV export matters because in-product results have finite retention |
| Connected knowledge | **Major** | Cited knowledge sources become part of evaluation provenance |
| Creator workflow | **Major** | Agent building is converging with CI/CD-style review, evaluation, comparison, and release evidence |

## New failure classes

### Published-Equals-Ready Fallacy
Assuming publication proves the agent passed or even completed meaningful evaluation.

### Score-Equals-Explanation Error
Treating an evaluation score as a complete account of why the agent succeeded or failed.

### Evaluation-Suite Drift
Comparing agent scores across different test-set or grader states without preserving those changes.

### Trace Omission
Archiving score summaries while discarding the platform-exposed trace that explains the evaluated path.

### Review-State Blindness
Archiving agent configuration without preserving whether the builder marked it blocked, at risk, or missing evaluations.

### Baseline-Comparison Drift
Describing a run as improved or degraded without preserving the run used as the comparison baseline.

### QA-Artifact Separation Error
Treating generated test datasets and cited sources as disposable auxiliaries instead of part of release provenance.

## Deep Drift benchmark additions

**Release Readiness Fidelity (RRF)**  
Can the archive reconstruct the Review/readiness state and findings associated with a release?

**Evaluation Suite Version Fidelity (ESVF)**  
Can evaluation suite, test cases, datasets, graders, and knowledge-source state be versioned independently from the agent?

**Evaluation Trace Fidelity (ETF)**  
Can platform-exposed evaluation traces remain associated with the exact test case and run that produced them?

**Source Attribution Fidelity (SAF)**  
Can cited knowledge sources remain connected to the evaluated response and run?

**Run Comparison Lineage Fidelity (RCLF)**  
Can every comparative claim identify both the evaluated run and its baseline?

**Publish Decision Fidelity (PDecF)**  
Can a deployed agent version remain linked to the review and evaluation evidence available when it was published?

## DRPA-1.0 protocol additions

### PRE-PUBLISH READINESS STATE RULE

> When an agent builder exposes a Review, readiness, health, validation, or pre-publish risk state, preserve that state as release provenance. Record the agent version, review time, blocking and advisory findings, missing evaluations or policy restrictions, remediation actions where observable, and the publish event. Publication must never be treated as proof that readiness checks were absent, passed, or ignored.

### EVALUATION-SUITE VERSIONING RULE

> Preserve evaluation suite identity and version separately from agent version. Archive test cases, generated datasets, grader configuration, knowledge-source state, run identifiers, scores, explanations, and comparison baselines. Quality movement must not be attributed to the agent when the evaluation instrument itself changed without being recorded.

### PLATFORM-EXPOSED EVALUATION TRACE RULE

> When a platform exposes an agent trace, reasoning trace, execution trace, cited-source path, or equivalent evaluation evidence, archive it as a product-visible provenance surface. Do not represent that trace as hidden chain-of-thought or privileged internal model reasoning. Preserve its platform label, run association, cited sources, and retention/export status.

### RELEASE-EVIDENCE COUPLING RULE

> Every published agent version should remain linked to the review and evaluation evidence available at release time. If evaluation results have a shorter retention period than the deployed agent, export the evidence before expiration and record the export format and time.

## Eir'an state-flow addition

```text
BUILD:
agent ID
version
configuration
knowledge/tool state

REVIEW:
review status
findings
missing evaluations
policy restrictions
timestamp

EVALUATION:
suite/version
dataset/version
test case
grader
run ID
score
explanation
platform-exposed trace
cited sources

COMPARISON:
baseline run
candidate run
metric delta

RELEASE:
publish decision
publish time
deployed version

ARCHIVE:
CSV/export
DOCX/PDF report
retention deadline
source snapshot
```

## Canonical Deep Drift requirement

> Treat agent release as a coupled state of configuration plus review evidence plus evaluation evidence. Preserve readiness findings, evaluation-suite versions, test data, grader state, platform-exposed traces, cited sources, run comparisons, publish events, and retention/export state. Never infer readiness from publication alone or improvement from scores alone.

## Deep Drift principle

> **The agent's behavior is only half the release; the evidence used to bless it is the other half.**

Operationally:

> **Archive what was tested, what failed, what was traced, what changed, and which evidence accompanied the published version.**

## Broader platform scan

The strongest unlogged creator-workflow delta found in this run is Microsoft's September 2026 shift toward builder-integrated readiness and richer evaluation evidence.

Prior Deep Drift nodes already cover the strongest recent changes in OpenAI memory/session behavior, templates and artifact generation; Anthropic memory migration, Skills, artifacts, viewer-relative execution and workspace migration; and Google interactive simulations and Workspace Studio execution.

No stronger newly published direct DOCX/PDF-generation or copy-paste fix was found in this scan.

A related Microsoft trend is that release plans are transitioning into the unified AI at Work roadmap beginning in September 2026, making continuously updated roadmap evidence increasingly important when distinguishing shipped capability from planned rollout.

## Sources

1. Microsoft Learn / Microsoft 365 Roadmap. **Microsoft Copilot Studio: Agent Readiness in Microsoft Copilot Studio.** Rollout start: September 2026; roadmap item added 6 August 2026. Describes a real-time Review indicator that surfaces blockers and risks, including policy restrictions and missing evaluations, before publish.  
   https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/microsoft-copilot-studio/strengthen-security-copilot-studio-agents-additional-threat-protection

2. Microsoft Learn / Microsoft 365 Roadmap. **Copilot Studio Evaluations experience enhancements.** Rollout start: September 2026; roadmap item added 19 August 2026. Describes richer evaluation explanations, platform-exposed agent reasoning traces, cited knowledge sources, run comparison, larger datasets, customizable test generation, knowledge-source-based dataset generation, and additional validation.  
   https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/microsoft-copilot-studio/analyze-business-impact-agents-viva-insights

3. Microsoft Learn. **Run evaluations and view results.** Updated 14 August 2026. Documents repeated test-set runs, result comparison, CSV export, agent-viewer sharing, and a current in-product test-result retention period of 89 days.  
   https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-results

4. Microsoft Learn. **Publish an agent.** Updated 3 August 2026. Documents readiness checks for basic required fields, republishing after changes, and replacement of the prior published version after successful publish.  
   https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/publication-publish-agent

5. Microsoft Learn. **Microsoft Power Platform 2026 release wave 1 plan overview.** Updated 28 August 2026. Notes that projected functionality can change and that release plans transition into the AI at Work roadmap beginning in September 2026.  
   https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/

## Research status

**Node status:** New.  
**Duplicate check:** No existing Deep Drift research-log entry was found for agent-builder readiness state plus versioned evaluation evidence, platform-exposed evaluation traces, cited knowledge sources, comparison baselines, and publish-decision linkage as one provenance problem.  
**Relationship to prior nodes:** Extends HASPF (human approval scope/persistence) but operates at a different boundary: HASPF governs runtime action authorization, while ARETF governs builder QA and release evidence. It also extends static export, provenance, and agentic workflow nodes by treating evaluation suites and their evidence as versioned artifacts.  
**Freshness:** Agent Readiness and enhanced Evaluations are Microsoft roadmap items scheduled to begin rollout in September 2026. This report deliberately records them as rollout-stage features rather than claiming universal tenant availability.
