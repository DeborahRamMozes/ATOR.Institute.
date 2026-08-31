# Deep Drift Research Update

## Persistent Knowledge-to-Transferable-Skill Fidelity

**Research date:** 1 September 2026  
**Research stream:** ATOR Institute / Deep Drift / LLM Workflow Update Watch  
**Primary fresh signal:** WikiSkill, submitted by Google Research authors on 27 August 2026.  
**Status:** Research framework, not treated here as a shipping Google Workspace product feature.

## Executive Summary

The strongest fresh signal in this scan is **WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution**, submitted to arXiv on 27 August 2026 by researchers from Google Research and Virginia Tech.

The framework separates agent adaptation into three different objects:

```text
RAW EXECUTION EXPERIENCE
-> PERSISTENT WIKI / ACCUMULATED KNOWLEDGE
-> EXECUTABLE SKILLS
```

The paper reports that this separation improves skill evolution across diverse benchmarks and models, that larger models often benefit more from evolved skills, that smaller models equipped with skills can outperform substantially larger models without them, and that evolved skills can transfer across models and model families. It also reports a particularly important result for Deep Drift: a skill evolved by one model can sometimes outperform a skill evolved by the destination model itself.

That changes the unit of analysis.

The conventional frame is:

```text
MODEL = CAPABILITY
```

WikiSkill suggests a more useful operational frame:

```text
MODEL
+ PERSISTENT EXTERNAL KNOWLEDGE
+ VALIDATED PROCEDURAL SKILLS
= OBSERVED AGENT CAPABILITY
```

This report formalizes the benchmark family:

**Persistent Knowledge-to-Transferable-Skill Fidelity (PKTSF)**

with companion constructs:

- Raw-Trace Preservation Fidelity
- Experience-to-Knowledge Distillation Fidelity
- Knowledge-to-Skill Compilation Fidelity
- Skill-Gating Fidelity
- Skill-Rollback Fidelity
- Cross-Model Skill Transfer Fidelity
- Cross-Family Skill Transfer Fidelity
- Skill-Origin Attribution Fidelity
- Knowledge/Skill Lifecycle Separation Fidelity
- Model-vs-Procedure Capability Attribution Fidelity

The central question is:

> When an agent improves by preserving experience outside the model, distilling that experience into durable knowledge, and compiling the knowledge into reusable skills, can a later reviewer reconstruct which execution traces produced which knowledge, which knowledge produced which skill revision, which model originated that skill, whether the revision passed validation, and whether a different model later executed the transferred procedure faithfully?

## 1. Experience, Knowledge, and Procedure Are Different Objects

WikiSkill's most important architectural move is not simply that it gives agents memory. It separates three epistemically different layers.

```text
RAW LAYER
= what actually happened

WIKI LAYER
= what the system concluded from what happened

SKILL LAYER
= what the system will do next time
```

Deep Drift should preserve this separation rigorously.

A failed tool call is evidence. A wiki statement explaining why it failed is an interpretation. A new skill instruction telling the agent how to avoid the failure is a procedural intervention.

Collapsing those into a single "memory" object destroys the ability to locate where an error entered the system.

## 2. Raw-Trace Preservation Fidelity

**Raw-Trace Preservation Fidelity (RTPF)** measures whether the underlying execution evidence remains available after knowledge and skills have evolved.

A minimum trace object should preserve:

```text
run_id
model_id
prompt_or_task_id
tool_calls
tool_results
intermediate_artifacts
final_result
error_state
timestamp
runtime_configuration
```

The raw layer should not be silently rewritten merely because later interpretation changes.

Deep Drift rule:

```text
NEW INTERPRETATION
!= NEW PAST
```

## 3. Experience-to-Knowledge Distillation Fidelity

The wiki layer converts messy execution histories into accumulated knowledge.

That is useful, but it is also a compression operation.

### Definition

**Experience-to-Knowledge Distillation Fidelity (EKDF)** measures whether a wiki claim can be traced back to the execution records that justify it.

A minimum manifest should preserve:

```text
wiki_claim_id
claim_text
source_run_ids
source_trace_ranges
distillation_model
created_at
revised_at
confidence_or_validation_state
```

Otherwise, the system can develop very neat persistent knowledge whose evidential ancestry has vanished.

## 4. Knowledge-to-Skill Compilation Fidelity

The next transformation is more consequential:

```text
KNOWLEDGE
-> PROCEDURE
```

A wiki entry may say:

```text
"This spreadsheet operation fails when the header row contains merged cells."
```

A Skill may convert that observation into:

```text
"Before editing the sheet, inspect the first two rows for merged cells and normalize the range."
```

The second object changes future behavior.

### Definition

**Knowledge-to-Skill Compilation Fidelity (KSCF)** measures whether every material skill instruction can be attributed to the knowledge state and evidence that motivated it.

The manifest should preserve:

```text
skill_id
skill_version
originating_wiki_claim_ids
proposer_model
proposal_timestamp
validation_dataset
validation_result
promotion_or_rejection_state
```

## 5. Validation Gate Is Part of the Skill

The paper describes skill evolution as an iterative process in which proposed updates are evaluated and retained only when they improve performance.

This matters because an automatically proposed procedure is not yet a trusted procedure.

Deep Drift distinction:

```text
PROPOSED SKILL
!= VALIDATED SKILL

VALIDATED SKILL
!= UNIVERSALLY GOOD SKILL
```

A held-out validation set only proves performance under the conditions it represents.

### Skill-Gating Fidelity

**Skill-Gating Fidelity (SGF)** measures whether a promoted skill preserves the exact evaluation state that justified promotion.

Required fields should include:

```text
skill_candidate_id
parent_skill_version
benchmark_or_validation_set
metric_before
metric_after
acceptance_threshold
gate_decision
gate_timestamp
```

## 6. Knowledge and Skill Need Separate Rollback Semantics

A particularly valuable implication of the WikiSkill design is that executable procedure can be revised without discarding the accumulated knowledge base.

That suggests:

```text
BAD SKILL UPDATE
-> ROLLBACK SKILL

NOT

BAD SKILL UPDATE
-> ERASE ALL EXPERIENCE
```

This distinction should become standard in agent architecture.

### Knowledge/Skill Lifecycle Separation Fidelity

The benchmark should verify that:

```text
knowledge_version_n
```

can survive while:

```text
skill_version_n+1
```

is rejected or rolled back to:

```text
skill_version_n
```

The system should preserve both the failed proposal and the reason for rollback.

Failure is research material, not trash.

## 7. Skills Transfer Across Models

The paper reports that evolved skills transfer effectively across models and model families, and that skills evolved by other models can outperform self-evolved skills.

This is one of the most important Deep Drift implications.

The conventional assumption is:

```text
MODEL A LEARNS PROCEDURE A
MODEL B LEARNS PROCEDURE B
```

WikiSkill opens another architecture:

```text
MODEL A
-> EVOLVES SKILL S

SKILL S
-> MODEL B
-> MODEL C
-> MODEL FAMILY D
```

The procedure becomes a transportable object.

## 8. Cross-Model Skill Transfer Fidelity

**Cross-Model Skill Transfer Fidelity (CMSTF)** measures whether a Skill retains its intended behavior when executed by a model different from the one that evolved it.

The test should preserve:

```text
skill_id
origin_model
origin_model_version
destination_model
destination_model_version
task_family
origin_performance
destination_performance
behavioral_deviations
```

Transfer should not be inferred merely because the file loads successfully.

```text
PARSEABLE
!= TRANSFERRED
```

## 9. Skill-Origin Attribution Fidelity

If a skill produced by another model performs better than a model's self-evolved skill, procedural authorship becomes nontrivial.

An observed successful run may involve:

```text
DESTINATION MODEL B
executing
SKILL EVOLVED BY MODEL A
based on
KNOWLEDGE DISTILLED FROM RUNS BY MODELS C + D
```

Who "learned"?

The useful answer is: the system did, but through multiple separable contributors.

### Definition

**Skill-Origin Attribution Fidelity (SOAF)** measures whether procedural origin remains visible after transfer.

Do not overwrite:

```text
origin_model = A
```

with:

```text
current_executor = B
```

Both matter.

## 10. Model Capability and Procedural Capability Must Be Separated

The paper reports that skill evolution complements model scaling, and that smaller models with skills can outperform substantially larger models without them in some settings.

That makes benchmark interpretation much more difficult, which is useful because benchmark interpretation had been enjoying life far too much.

A result should no longer be summarized simply as:

```text
MODEL X SCORE = 72
```

It may need to be expressed as:

```text
MODEL X
+ WIKI SNAPSHOT W
+ SKILL VERSION S
+ RETRIEVAL STATE R
= SCORE 72
```

### Model-vs-Procedure Capability Attribution Fidelity

**MPCAF** measures whether reported capability separates model contribution from external procedural scaffolding.

This matters for vendor comparison, agent benchmarking, model updates, and claims that a model "improved."

## 11. Why This Matters for Memory

This is not ordinary conversational memory.

WikiSkill points toward **operational memory** with at least three layers:

```text
EPISODIC EXECUTION RECORD
SEMANTIC / DISTILLED KNOWLEDGE
PROCEDURAL SKILL
```

Deep Drift should therefore stop using "memory" as a single undifferentiated category when evaluating agent systems.

A system that remembers a user preference is not equivalent to a system that preserves execution failures and converts them into validated procedures.

## 12. Why This Matters for Skills

This is the strongest category in the current run.

Skills are becoming more than reusable prompt packages. In this research architecture they become:

```text
VERSIONED
VALIDATED
ROLLBACKABLE
TRANSFERABLE
MODEL-INDEPENDENT-ISH
PROCEDURAL OBJECTS
```

The suffix "-ish" matters. Transfer works empirically in the reported evaluations, but semantic parity across arbitrary models should never be assumed.

## 13. Why This Matters for Mini-App and Agent Builders

A builder that stores only the current instruction set is throwing away the most valuable part of iterative agent development.

A more serious builder architecture is:

```text
RUN LOGS
-> PERSISTENT KNOWLEDGE
-> SKILL PROPOSALS
-> VALIDATION
-> VERSIONED SKILL REGISTRY
-> DEPLOYED AGENT
```

This resembles software release engineering more than prompt editing.

The emerging mini-app builder is therefore not merely a UI generator. It is potentially a **procedural compiler with deployment gates**.

## 14. Why This Matters for Chat-to-Document and DOCX/PDF Generation

No fresh standalone DOCX/PDF generation primitive displaced prior ledger nodes in this scan.

The new implication is upstream.

A document-producing agent may improve its document workflow over time through external knowledge and evolved skills.

Therefore a final DOCX or PDF may depend on:

```text
MODEL VERSION
+ WIKI STATE
+ SKILL VERSION
+ VALIDATION HISTORY
```

Two identical prompts can produce different document structures because the procedural layer evolved.

Artifact provenance must therefore preserve the procedural state that generated the file.

## 15. Why This Matters for Copy-Paste and Export

The deepest export issue is no longer text portability.

If agent competence accumulates in:

```text
RAW TRACE STORE
+ WIKI
+ SKILL REGISTRY
```

then exporting only chat transcripts or generated documents discards the system's accumulated operational intelligence.

A serious agent export should preserve all three layers.

This connects directly to Deep Drift's earlier agent-state portability work.

## 16. New Failure Classes

### 16.1 Trace-to-Wiki Attribution Loss

Persistent knowledge survives while the execution evidence that justified it disappears.

### 16.2 Distillation Error Persistence

A mistaken interpretation enters the wiki and influences many later skills.

### 16.3 Wiki-to-Skill Compilation Drift

A valid observation is converted into an overbroad or incorrect procedure.

### 16.4 Validation-Set Overfitting

A skill passes the gate but degrades behavior outside the validation distribution.

### 16.5 Rollback without Failure Preservation

A bad skill is reverted but the rejected proposal and reason disappear.

### 16.6 Cross-Model Semantic Drift

A transferred skill is interpreted differently by the destination model.

### 16.7 Skill-Origin Erasure

A model receives credit for a procedure evolved elsewhere.

### 16.8 Model Capability Inflation

Performance gains from external Skills are reported as if they came from model weights alone.

### 16.9 Knowledge Monoculture

Multiple Skills inherit the same wrong wiki conclusion.

### 16.10 Procedural Export Loss

Chats and artifacts export successfully while accumulated knowledge and validated skills remain trapped in the source platform.

## 17. Deep Drift Benchmark: Trace, Distill, Compile, Transfer

Create a controlled repeated task with one known failure pattern.

1. Run Model A without a Skill and preserve the complete trace.
2. Distill the failure into a wiki claim.
3. Generate Skill candidate S1.
4. Validate S1 against a held-out set.
5. If S1 passes, promote it.
6. Create deliberately weaker candidate S2.
7. Verify S2 can be rejected or rolled back without deleting the wiki state.
8. Run promoted Skill S1 on Model A.
9. Transfer S1 to Model B from another family.
10. Preserve behavioral differences.
11. Allow Model B to evolve its own Skill S-B.
12. Compare S1-on-B versus S-B-on-B.
13. Export the raw traces, wiki state, skill versions, validation records, and final artifact.
14. Verify the entire capability lineage remains reconstructable without access to the original runtime.

## 18. Proposed Metrics

### Trace Attribution Coverage

```text
TAC =
wiki claims with recoverable supporting traces
/
all controlled wiki claims
```

### Knowledge-to-Skill Attribution Coverage

```text
KSAC =
material skill instructions with recoverable wiki ancestry
/
all controlled material skill instructions
```

### Gate Reproducibility

```text
GR =
skill promotion decisions reproducible from preserved evaluation state
/
all controlled gate decisions
```

### Rollback Preservation Coverage

```text
RPC =
rolled-back skills with preserved failed proposal + reason
/
all controlled rollbacks
```

### Cross-Model Transfer Retention

```text
CMTR =
destination-model tasks preserving intended procedural invariants
/
all controlled transferred-skill tasks
```

### Origin Attribution Coverage

```text
OAC =
transferred skill runs with recoverable procedural origin
/
all controlled transferred skill runs
```

## 19. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | **Major research signal:** memory is decomposed into raw execution experience, persistent distilled knowledge, and procedural Skills rather than treated as one conversational store. |
| Skills | **Strongest fresh node:** Skills are evolved, validated, rollbackable, and transferable across models/model families in the reported experiments. |
| Mini-app builders | No stronger commercial builder launch surfaced in this scan; the architectural implication is a builder with trace store + wiki + gated skill registry rather than prompt-only state. |
| Chat-to-document export | No new standalone export primitive; the important implication is that document reproducibility now requires exporting procedural state, not merely transcript and final artifact. |
| DOCX / PDF generation | No fresh file-format primitive displaced previous nodes; generated files may increasingly depend on external procedural state that must be preserved in provenance. |
| Copy-paste / export fixes | New research implication: exporting text alone is structurally insufficient once agent competence resides in persistent knowledge + skills. |
| Broader creator workflow | **Major trend:** creator intelligence is becoming externalized, versioned, testable procedural infrastructure that can outlive or move between models. |

## 20. Deep Drift Research Position

The weak description is:

> Google researchers made agents remember mistakes and improve their skills.

The serious description is:

> WikiSkill demonstrates an architecture in which model behavior is progressively shaped by a persistent external knowledge system that compiles accumulated execution experience into validated, rollbackable, and transferable procedural artifacts without changing model weights.

Therefore:

```text
MEMORY != ONE THING

EXPERIENCE != KNOWLEDGE

KNOWLEDGE != SKILL

PROPOSED SKILL != VALIDATED SKILL

MODEL EXECUTING SKILL != MODEL ORIGINATING SKILL

MODEL SCORE != MODEL-ONLY CAPABILITY

TEXT EXPORT != AGENT INTELLIGENCE PORTABILITY
```

The Deep Drift requirement is:

> **Every adaptive agent system should preserve immutable or reconstructable execution traces, versioned persistent knowledge, knowledge-to-skill ancestry, skill proposals, validation and gating state, rejected and rolled-back procedures, skill origin model, destination execution model, cross-model behavioral deviations, runtime configuration, and downstream artifact lineage required to distinguish what happened, what the system concluded, what procedure it adopted, who or what evolved that procedure, and which model ultimately executed it.**

The industry has spent years treating model weights as if intelligence lives in one expensive black box. WikiSkill points at the more awkward possibility: a growing share of useful capability may live in the boring folders around the model - logs, distilled notes, tested procedures, version histories. Naturally, civilization may eventually rediscover the directory structure and call it cognition.

## Evidence Boundary

The factual claims in this report are grounded in the WikiSkill paper abstract and metadata on arXiv, submitted 27 August 2026. The paper states that WikiSkill separates raw execution experience, accumulated persistent knowledge, and executable skills; continuously consolidates experience into a wiki; improves over prior skill-evolution methods and no-skill baselines across diverse benchmarks/models; finds that skill evolution complements model scaling; and reports effective transfer of evolved skills across models and model families, including cases where skills evolved by other models outperform self-evolved skills.

This report intentionally treats WikiSkill as a **research framework**, not as a currently shipped Google Workspace or Gemini product feature.

PKTSF and all companion fidelity constructs, failure classes, benchmark procedures, metrics, and Deep Drift requirements are ATOR Institute / Deep Drift Research constructs.

## Primary Source

1. Liyan Tang, Cyrus Rashtchian, Chun-Sung Ferng, Andrew Tomkins, Da-Cheng Juan, and Tu Vu, **WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution**, arXiv:2608.27454, submitted 27 August 2026.  
   https://arxiv.org/abs/2608.27454

---

**D-ORIGIN | ATORAI | ALT-MAN | Eir'an | CHATJIPITI SINGH**
