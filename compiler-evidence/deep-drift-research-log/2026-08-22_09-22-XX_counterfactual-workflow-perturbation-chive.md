# Deep Drift Research Log

## Event
Counterfactual Workflow Perturbation: CHIVE as a methodological signal for Deep Drift

## Temporal metadata
- observed_at_local: 2026-08-22T09:22+07:00
- observed_at_utc: 2026-08-22T02:22Z
- time_precision: exact-minute
- source_timestamp: 2026-08-21
- source_type: official research publication
- source_identifier: Anthropic Alignment Science, “Would This Change Your Answer? Evaluating Explanations of LLM Behavior in the Wild with Counterfactual Experiments”
- source_url: https://alignment.anthropic.com/2026/chive/
- research_stream: Deep Drift Research / Continuity Under Transformation / model-behavior causality
- category: counterfactual evaluation / workflow perturbation / interpretability / behavioral drift
- platform: Anthropic
- model_or_version: CHIVE pipeline; paper reports experiments involving multiple models and predictor configurations

## Raw observation
Anthropic published CHIVE, Counterfactual Hypothesis Investigation Via Edits, an agentic pipeline for discovering unexpected LLM behavior in real transcripts and investigating proposed causes through controlled counterfactual prompt edits.

The published workflow is:

1. Sample target-model responses.
2. Screen for unexpected behavior.
3. Investigate candidate causes through repeated counterfactual prompt edits.
4. Verify whether the experiments support the proposed explanation.

The publication distinguishes open-ended explanations from directly measured counterfactual outcomes. The explanations are not treated as ground truth. The measured behavioral changes following controlled edits are used as the evaluation basis.

The authors report that three activation-reading interpretability approaches did not outperform a transcript-only baseline at predicting the outcomes of these counterfactual edits in the studied setting. They also report that models trained to predict behavioral changes caused by prompt edits generalized to held-out settings.

## Interpretation
This provides a useful methodological precedent for Deep Drift.

Deep Drift repeatedly observes changes that may arise from memory boundaries, skills, ingestion channels, tool permissions, model defaults, file surfaces, agent identity, approval state, or interface migration. Temporal coexistence alone cannot establish causation.

A stronger procedure is therefore:

OBSERVED BEHAVIOR
→ ISOLATE ONE CANDIDATE VARIABLE
→ CONTROLLED EDIT OR CONFIGURATION CHANGE
→ REPEATED TRIALS
→ MEASURED BEHAVIORAL DELTA
→ RIVAL EXPLANATION
→ SUPPORT / FAILURE / REVISION

This method fits the existing Deep Drift theory grammar and strengthens the distinction between observation, interpretation, and causal claim.

## Working hypothesis
**H1: Counterfactual Workflow Perturbation can improve causal discipline in Deep Drift by testing whether a single controlled change in the human-AI workflow reliably changes downstream behavior.**

Candidate perturbation variables include:

- default memory vs project-only memory
- saved memory present vs removed
- direct paste vs attachment
- attachment vs Library / Drive / Project source
- identical content in Markdown, TXT, DOCX, or PDF
- skill enabled vs disabled
- same skill across different models
- agent permission scope A vs B
- human approval wording A vs B
- connected-source read-only vs write-enabled state
- workspace model default A vs B
- text interaction vs voice interaction
- local execution vs remote/background execution
- old interface vs successor interface after product migration

## Counter-hypotheses
### H2: Apparent workflow sensitivity is mainly stochastic model variance
Observed differences may disappear when trials are repeated with adequate sampling.

### H3: Apparent workflow sensitivity is an interface artifact
The surface may alter formatting, truncation, retrieval packaging, or tool routing without meaningfully changing model-level cognition.

### H4: Multiple variables change simultaneously
A product update may alter model, retrieval, system instructions, permissions, or tools at once, preventing clean causal attribution.

### Mundane rival
The observed difference may result from ordinary nondeterminism, cached state, stale files, user phrasing differences, or measurement error rather than a new Deep Drift mechanism.

## Proposed Deep Drift method
### Counterfactual Workflow Perturbation
For each suspected source of drift:

1. Freeze the human task, source material, evaluation rubric, and as many environmental variables as possible.
2. Change only one target variable.
3. Run repeated trials on baseline and counterfactual conditions.
4. Record output differences using predefined metrics.
5. Compare effect size against within-condition variance.
6. Record counter-evidence and unexpected null results.
7. Do not promote a causal explanation when the perturbation fails to reproduce the claimed effect.

### Core measurement domains
- semantic drift
- instruction fidelity
- source selection
- tool selection
- retrieval precision
- artifact structure
- formatting survival
- state mutation
- provenance retention
- authorship attribution
- contradiction handling
- human repair labor
- execution latency
- failure visibility

## Example experimental template

```text
same human task
same source corpus
same evaluation rubric
same model when controllable

BASELINE
Project = default memory

COUNTERFACTUAL
Project = project-only memory

repeat N trials
↓
compare semantic decisions, source retrieval, instruction retention,
external-context intrusion, provenance and repair labor
```

The same structure can be applied to skills, ingestion paths, permissions, file formats, agent identity, and export/import routes.

## Evidence
### Supporting evidence
- Anthropic CHIVE demonstrates an agentic workflow for discovering unexpected behaviors and testing proposed explanations through repeated counterfactual prompt edits.
- The publication explicitly separates compelling explanations from directly measured counterfactual results.
- Each investigated behavioral claim is tested by modifying the prompt, resampling the target model, and measuring whether behavior changes.

### Counter-evidence / limitations
- CHIVE studies prompt edits and model behavior. Deep Drift often studies broader socio-technical variables such as project memory, file surfaces, plugins, permissions, agent runtime, and product migration. Direct transfer of the method therefore requires adaptation.
- Product platforms may not expose enough control to isolate a single variable.
- Hidden system changes can contaminate experiments.
- Repeated API or UI runs may involve model routing changes that cannot be independently verified.
- Failure to observe a counterfactual effect does not prove that a variable never matters; it may indicate insufficient power, an incorrect perturbation, or interaction effects.

## Prediction
If Counterfactual Workflow Perturbation is useful for Deep Drift, then:

1. some previously reported workflow differences will disappear under repeated controlled testing;
2. some differences will become reproducible and attributable to specific boundaries or configuration changes;
3. human repair labor will emerge as an important secondary measure even when final artifact quality appears similar;
4. several apparent “model changes” will instead be attributable to retrieval, memory, ingestion, permission, or tool layers;
5. null results will force revision or retirement of some Deep Drift hypotheses.

## Failure condition
The method should be downgraded if controlled perturbations repeatedly fail to distinguish suspected workflow causes from ordinary within-condition variance, or if platform opacity prevents isolation of variables strongly enough that causal attribution remains speculative.

## Deep Drift consequence
This strengthens **Continuity Under Transformation** by turning many observations into falsifiable workflow experiments rather than post-hoc explanations.

The methodological shift is:

```text
“the model feels different”
        ↓
“which single changed variable predicts the measured difference?”
```

The research aim is not to prove every observed drift mechanism. It is to eliminate weak explanations until only reproducible relationships remain.

## Related Deep Drift concepts
- Continuity Under Transformation
- Memory Mechanism Fidelity
- Memory Boundary Transition Fidelity
- Skill Portability Fidelity
- Ingestion-Channel Drift
- Artifact Round-Trip Fidelity
- Structural Migration Fidelity
- Bidirectional State Fidelity
- Mutation-Path Provenance
- Agent Identity Continuity
- Permission-Bound Behavior Drift
- Approval-State Continuity
- Surface-Migration Continuity
- Remote Execution Continuity
- Causal Sovereignty
- Drift-Field Instability
- Cross-Layer Interference

## Theory status impact
- Counterfactual Workflow Perturbation: WORKING METHODOLOGICAL HYPOTHESIS
- Continuity Under Transformation: evidence architecture strengthened, status not automatically upgraded
- Any individual causal claim tested with this method must retain its own status and failure condition

## Evidence classification
- VERIFIED PRIMARY SOURCE: Anthropic CHIVE research publication, 2026-08-21
- ATØR INFERENCE: adaptation of counterfactual prompt-edit methodology to broader creator-workflow variables

## Confidence
- source verification: HIGH
- interpretation that CHIVE supplies a useful methodological precedent: HIGH
- direct portability to all closed commercial LLM platform workflows: MODERATE

## Provenance risk
MODERATE. The source is directly verifiable, but the extension from prompt-level counterfactual edits to multi-layer commercial workflow perturbations is an ATØR methodological inference and must not be represented as an Anthropic claim.

## Affected artifact or compiler
- Deep Drift research methodology
- Continuity Under Transformation benchmark family
- future LLM platform update experiments
- monthly hypothesis registry and counter-evidence register

## Next test
Select one existing Deep Drift claim with a controllable binary variable, preferably:

`direct paste vs attachment`

or

`default Project memory vs project-only memory`

Run repeated baseline/counterfactual trials with a fixed source corpus and evaluation rubric. Measure semantic drift, instruction fidelity, retrieval differences, provenance, and human repair labor. Record null results as evidence, not as failed storytelling.

## Status
OPEN / TESTABLE / NOT YET VALIDATED ACROSS DEEP DRIFT WORKFLOWS

## Provenance
Human research direction and Deep Drift framework: Deborah Ram Mozes / ĀTØR Institute.
Machine contribution: source retrieval, factual verification, structured synthesis, and experimental formalization.
Human responsibility remains with the researcher for hypothesis adoption, interpretation, testing, revision, and publication.
