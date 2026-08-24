# Deep Drift Research Event Log

**observed_at_local:** 2026-08-24T10:43+07:00  
**observed_at_utc:** 2026-08-24T03:43Z  
**time_precision:** exact-minute; seconds unavailable and not fabricated  
**source_timestamp:** 2026-08-20  
**source_type:** official product announcement + official platform documentation  
**source_identifier:** Anthropic / Claude Platform, “Build production agents with computer use, the Skills API, and the Files API”  
**research_stream:** Deep Drift Research / Continuity Under Transformation / Procedural Provenance / Agent-to-Artifact Provenance  
**category:** agentic workflow, versioned procedures, persistent file state, browser/computer execution, artifact provenance  
**platform:** Anthropic / Claude Platform  
**model_or_version:** platform-level production-agent stack; not treated as one model-specific behavior  
**status:** OPEN / TESTABLE / NOT YET VALIDATED ACROSS DEEP DRIFT WORKFLOWS  

---

# EVENT TITLE

## Procedural-Version Provenance and Persistent-File State Continuity in the Claude Production-Agent Stack

---

# I. RINGKASAN BAHASA INDONESIA

Pada 20 Agustus 2026 Anthropic mengumumkan bahwa **computer use, Skills API, dan Files API telah generally available pada Claude Platform**, serta memperkenalkan **browser use tool** untuk agent yang bekerja di aplikasi web. Anthropic sendiri menyajikan keempat bagian ini sebagai satu production-agent stack: file membawa bahan kerja, skill membawa prosedur, computer/browser use membawa tindakan, dan sistem mengembalikan finished artifact.

Perubahan ini penting bagi Deep Drift karena unit analisis tidak lagi cukup berupa:

`human -> prompt -> model -> answer`

Struktur yang perlu diuji sekarang adalah:

```text
HUMAN EXPERTISE
↓
VERSIONED SKILL
↓
PERSISTENT FILE STATE
↓
MODEL / AGENT
↓
COMPUTER OR BROWSER ACTION
↓
EXTERNAL SOFTWARE STATE
↓
FINISHED ARTIFACT
```

Anthropic menjelaskan bahwa skill dapat berupa folder instructions, scripts, dan templates yang di-upload dan di-version melalui Skills API. Files API memungkinkan dokumen di-upload satu kali, diberi `file_id`, kemudian direferensikan kembali pada request berikutnya. Browser use menambahkan pembacaan struktur halaman selain screenshot sehingga agent dapat menarget field atau button berdasarkan elemen halaman, bukan sekadar koordinat pixel. Computer use yang diperbarui juga dapat melakukan beberapa tindakan dalam satu turn.

Bagi ĀTØR Institute, ini membuka dua benchmark utama: **Procedural-Version Provenance** dan **Persistent-File State Continuity**.

---

# II. ENGLISH RESEARCH SUMMARY

Anthropic’s 20 August 2026 product announcement places computer use, browser use, the Skills API, and the Files API inside one production-agent architecture. The significance for Deep Drift is not that Claude can click buttons or store files. The stronger research signal is that **procedure, source state, execution, and final artifact are becoming separable, persistent, and versionable system layers**.

A finished artifact may therefore depend on at least:

```text
source file ID
→ source file state
→ skill ID
→ skill version
→ model / agent state
→ tool permissions
→ browser or computer environment
→ external software state
→ resulting artifact
```

If any of those layers change while the visible task name remains the same, the resulting workflow may no longer be the same workflow in a causal sense.

---

# III. RAW OBSERVATION

Official Anthropic material states that:

1. Computer use, the Skills API, and the Files API became generally available on the Claude Platform on 20 August 2026.
2. A new browser use tool was added for agents operating in web applications.
3. Skills can package instructions, scripts, and templates, and can be uploaded and versioned through the Skills API.
4. Files can be uploaded once and referenced later by `file_id` rather than re-sent on every request.
5. Files created by skills or code execution can be downloaded as outputs.
6. Updated computer use can perform several actions per turn.
7. Browser use combines screenshot-based interaction with page-structure information for more direct targeting of web elements.
8. Anthropic presents a concrete workflow in which an agent reads an intake file, follows an organizational procedure encoded as a skill, completes an action in a web portal, and saves confirmation as a file.

Official source:
https://claude.com/blog/computer-use-skills-api-files-api

Supporting platform documentation:
https://platform.claude.com/docs/en/release-notes/overview
https://platform.claude.com/docs/en/build-with-claude/files

---

# IV. INTERPRETATION

## A. Procedure has become an addressable system object

A procedure is no longer necessarily hidden inside a prompt or a human operator’s memory. It can exist as a named and versioned skill.

That changes provenance.

The question “which model made this?” becomes insufficient.

A stronger question is:

> Which version of which procedure, operating on which source state, through which execution environment, produced this artifact?

## B. File state becomes persistent workflow state

A file referenced by ID can persist across requests. That means the agent’s source environment can survive beyond one conversational turn.

Persistence creates continuity opportunities, but also continuity risks:

- stale references,
- deleted or expired files,
- replacement by a newly uploaded file with a new ID,
- workspace-scope access mistakes,
- ambiguity over which source revision was used,
- artifact generation from a source whose visible filename resembles another version.

## C. External software becomes part of the causal chain

Computer use and browser use mean the agent is not only generating outputs inside the model environment. It can interact with software whose own state may change independently.

Therefore:

`same skill + same file + same prompt`

may still produce different results if:

- the web interface changes,
- a form field moves,
- permissions differ,
- session state differs,
- remote data changes,
- confirmation behavior changes,
- the browser/runtime environment changes.

---

# V. NEW DEEP DRIFT BENCHMARK 1

## Procedural-Version Provenance

### Definition

The capacity to reconstruct the exact procedural version that materially contributed to an agent action or artifact.

### Required provenance chain

```text
HUMAN OWNER
↓
SOURCE FILE ID + SOURCE STATE
↓
SKILL ID
↓
SKILL VERSION
↓
MODEL / AGENT
↓
TOOLSET + PERMISSIONS
↓
BROWSER / COMPUTER EXECUTION
↓
EXTERNAL SOFTWARE STATE
↓
ARTIFACT / ACTION
↓
AUDIT OR VERSION RECORD
```

### Test design

Hold constant:
- source file,
- task,
- model where possible,
- target application,
- permissions,
- output requirement.

Change only:
- skill v1 vs skill v2.

Measure:
- semantic difference,
- action sequence difference,
- omitted or added steps,
- approval behavior,
- error recovery,
- artifact structure,
- metadata/provenance survival,
- ability to identify which skill version produced each result,
- human repair labor.

### Success criterion

An independent reviewer should be able to reconstruct which skill version produced each artifact without relying on memory or guesswork.

---

# VI. NEW DEEP DRIFT BENCHMARK 2

## Persistent-File State Continuity

### Definition

The degree to which a persistent file reference remains causally and semantically stable across time, repeated requests, tool use, and downstream artifact creation.

### Core experiment

```text
same file_id
same skill
same task
T1
vs
T2
```

Then perturb:

- delete file,
- re-upload modified file,
- use visually similar replacement file,
- change filename but not contents,
- change contents but preserve semantic topic,
- change workspace/API-key context where permitted,
- generate downstream artifact before and after the change.

### Measure

- source identity recognition,
- stale-reference handling,
- explicit failure vs silent substitution,
- metadata continuity,
- source-attribution accuracy,
- artifact lineage,
- human repair labor,
- ability to distinguish source-state change from model variance.

---

# VII. WORKING HYPOTHESES

## Hypothesis A

**Artifact behavior depends materially on procedural version and persistent source state, not on model identity alone.**

Mechanism:
versioned skill instructions and persistent source references alter the agent’s executable context before external action occurs.

Prediction:
controlled changes to skill version or source state will produce reproducible changes in action sequence, artifact structure, or decision output beyond ordinary within-condition variance.

Supporting evidence:
Anthropic explicitly exposes versioned skills and reusable file references as separate production-agent layers.

Contradicting evidence:
if repeated controlled trials show negligible differences between versions or source-state changes, the practical contribution of those layers may be smaller than predicted for the tested workflow.

Failure condition:
Downgrade if version/state perturbations cannot be distinguished from ordinary stochastic or environmental variance.

## Hypothesis B

**Native platform identifiers and version mechanisms may preserve enough provenance to make procedural drift manageable.**

Mechanism:
skill IDs, skill versions, file IDs, logs, and artifact records can create a reconstructable causal trail.

Prediction:
a disciplined integration can recover source and procedure lineage without excessive manual logging.

Failure condition:
Reject or downgrade if final artifacts/actions cannot be reliably tied back to source and skill version after export, handoff, or later inspection.

## Hypothesis C

**A substantial portion of apparent procedural drift may actually arise from external application state rather than skill or file state.**

Mechanism:
browser layout, session state, permissions, remote data, and application updates can alter execution even when model, skill, and source remain constant.

Prediction:
when environment state is frozen or mocked, some previously observed variance will disappear.

Failure condition:
downgrade if environment control does not reduce variance.

## Mundane Rival

Observed differences may be caused by ordinary nondeterminism, transient network failures, UI changes, stale sessions, latency, hidden platform retries, malformed files, or measurement error rather than a new provenance failure class.

---

# VIII. PROCEDURAL PROVENANCE DRIFT

### Provisional definition

**Procedural Provenance Drift** is the loss, ambiguity, or misattribution of the procedural state that produced an action or artifact after the procedure has been versioned, reused, copied, executed by an agent, or separated from the human who originally supplied the expertise.

### Theory status

**WORKING METHODOLOGICAL HYPOTHESIS**

Not promoted to general theory.

### Why it matters

When organizational expertise becomes executable, the expertise itself can change independently of:

- the human author,
- the source document,
- the model,
- the agent identity,
- the target application,
- the final artifact.

The final output can therefore remain plausible while the procedure that produced it has silently changed.

---

# IX. RELATION TO CONTINUITY UNDER TRANSFORMATION

This event extends the Deep Drift stack:

```text
HUMAN INTENT
↓
HUMAN EXPERTISE
↓
VERSIONED PROCEDURE / SKILL
↓
PERSISTENT SOURCE FILE
↓
MODEL
↓
AGENT
↓
PERMISSIONS
↓
COMPUTER / BROWSER TOOL
↓
EXTERNAL SOFTWARE STATE
↓
ACTION
↓
FINISHED ARTIFACT
↓
EXPORT / HANDOFF / REUSE
```

The research question becomes:

> Can the final action or artifact still reveal which source state and which procedural version actually caused it?

This is a stronger requirement than output correctness.

Correct output does not prove recoverable procedure.

---

# X. RELATION TO EXISTING DEEP DRIFT BENCHMARKS

Affected benchmark families:

- Procedural Continuity
- Skill Execution Fidelity
- Skill Portability Fidelity
- Agent-to-Artifact Provenance Fidelity
- Mutation-Path Provenance
- Agent Identity Continuity
- Artifact Round-Trip Fidelity
- Workflow Continuity
- Feature / Runtime Migration Fidelity
- Human Orchestration Burden

New cross-link:

```text
PROCEDURAL VERSION
+
SOURCE STATE
+
EXECUTION ENVIRONMENT
=
CAUSAL WORKFLOW STATE
```

---

# XI. NEXT CONTROLLED TESTS

1. Build one simple skill v1 and a minimally changed skill v2.
2. Use one persistent input file and one fixed target task.
3. Run repeated trials under v1 and v2.
4. Record every skill ID/version, file ID, model, permission state, tool choice, external application state, action, output artifact, timestamp, and repair step.
5. Repeat after deleting/re-uploading the source file.
6. Repeat after modifying only the external web interface or environment where possible.
7. Test whether an independent reviewer can reconstruct the causal path from artifact back to source and procedure.
8. Record null results and cases where apparent drift is explained by ordinary environment variance.

---

# XII. EVIDENCE STATUS

**VERIFIED PRIMARY SOURCE:** Anthropic product announcement dated 20 August 2026 confirms the GA production-agent stack and the functional relationship among computer use, browser use, Skills API, and Files API.

**VERIFIED OFFICIAL DOCUMENTATION:** Anthropic platform documentation confirms reusable `file_id` references and skill-version endpoints. Some documentation pages may lag the product announcement during rollout, so individual storage/expiry limits must be treated as version-sensitive platform facts rather than timeless constants.

**ATØR INFERENCE:** Procedural-Version Provenance, Persistent-File State Continuity, Procedural Provenance Drift, the causal stack, benchmark design, metrics, hypotheses, and failure conditions are ĀTØR Institute research constructions. They are not Anthropic claims.

**confidence:**
- product-release verification: HIGH
- architectural interpretation: HIGH
- benchmark usefulness: MODERATE TO HIGH
- generalization across all agent platforms: MODERATE / NOT YET VALIDATED

**provenance_risk:** MODERATE. Primary risk is accidentally presenting ĀTØR’s provenance interpretation as if Anthropic had made the same theoretical claim. This log explicitly separates those layers.

---

# XIII. RESEARCH STATUS

**Status:** OPEN / TESTABLE / REQUIRES DIRECT EXPERIMENT

No theory status is upgraded merely because a commercial platform now exposes versioned skills and persistent files.

The release is evidence that the system architecture exists.

It is not evidence that Procedural Provenance Drift necessarily occurs.

That must be demonstrated.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir’an | CHATJIPITI SINGH**
