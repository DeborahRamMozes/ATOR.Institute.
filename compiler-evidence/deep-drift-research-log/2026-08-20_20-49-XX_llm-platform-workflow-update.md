# Deep Drift Research Event Log

**observed_at_local:** 2026-08-20 20:49 Asia/Jakarta  
**time_precision:** exact-minute; seconds unavailable from conversation timestamp  
**research_stream:** Deep Drift Research / ATØR Institute  
**category:** LLM platform architecture, memory, skills, creator workflows, artifact generation, provenance  
**status:** ACTIVE RESEARCH SIGNAL  

## Event title

**LLM Platform Workflow Update: Memory Boundaries, Research-State Portability, Agent Identity, Mini-App State, and Artifact Continuity**

## Raw observation

A current survey of major LLM platforms shows continued convergence away from isolated chat and toward persistent creator operating environments. The most relevant changes are not merely model-quality improvements. They concern mutable memory boundaries, reusable skills and procedural layers, connected source surfaces, mini-app builders, direct document generation, stateful artifact editing, agent identities, and workflow portability.

The operational stack increasingly resembles:

`human intent -> memory/project state -> source surface -> skill/procedure -> model -> agent -> tool/connector -> artifact/app -> external edit -> state mutation -> migration`

This creates a Deep Drift research problem centered on continuity under transformation rather than model intelligence alone.

## Platform signal 1: OpenAI memory boundaries become mutable during project lifecycle

Recent OpenAI Project behavior allows eligible unshared Projects to switch between default memory and project-only memory without creating a new Project. Project-only memory constrains context to the Project and reduces outside-context intrusion.

### Deep Drift significance

Memory is no longer merely a static platform property. It becomes a live experimental variable within an ongoing project.

### Proposed benchmark

**Memory Boundary Transition Fidelity**

Hold constant:
- human originator;
- project;
- files;
- model;
- question;
- instructions.

Change:
- default memory;
- project-only memory.

Measure:
- external-context leakage;
- stale assumptions;
- instruction retention;
- behavioral lag after transition;
- authorship contamination;
- semantic drift;
- human repair labor.

## Platform signal 2: OpenAI source surfaces multiply

Google Drive integration into ChatGPT Library and the coexistence of uploads, Library files, Project sources, direct paste, and attachments create multiple ingestion paths for substantially identical content.

### Deep Drift significance

The same information may receive different retrieval, priority, parsing, or context-allocation treatment depending on how it enters the system.

### Proposed benchmark

**Context-Surface Equivalence / Ingestion-Channel Drift**

Compare the same source as:
- rich paste;
- plain paste;
- large-paste attachment;
- original file attachment;
- Library file;
- Google Drive file;
- Project source.

Measure:
- hierarchy recognition;
- omissions;
- source recovery;
- semantic organization;
- instruction priority;
- downstream artifact quality.

## Platform signal 3: Copy-paste becomes a context architecture issue

Rich formatting preservation and automatic conversion of very large pasted text into attachments indicate that copy-paste is not merely a user-interface operation. It is a context-ingestion mechanism with consequences for structure preservation, retrieval, and context budgeting.

### Proposed benchmark

**Formatting-Preserving Ingestion Fidelity**

Test whether preserved headings, lists, links, emphasis, and paragraph hierarchy improve semantic interpretation compared with plain text or attachment ingestion.

## Platform signal 4: Google Sheets Canvas turns artifacts into mutable interfaces

Google Sheets Canvas represents a significant shift from generated artifact to generated operational interface. A mini-app can act as a read-write layer over persistent spreadsheet state, where interaction with the generated interface can mutate the underlying data.

### Deep Drift significance

The final visible state no longer reveals the causal path that produced it.

Example:

`STATUS = COMPLETE`

could result from:
- direct human cell edit;
- generated UI interaction;
- AI instruction;
- formula evaluation;
- imported data;
- connector/integration action.

### Proposed benchmarks

**Bidirectional State Fidelity**

`source data -> generated interface -> human action -> source mutation -> regenerated interface`

Measure:
- mutation correctness;
- formula/reference survival;
- state synchronization;
- hidden structural changes;
- provenance retention.

**Mutation-Path Provenance**

Determine whether the system preserves which interface, actor, or automation path produced each material state change.

## Platform signal 5: Spreadsheet migration increasingly preserves computational structure

Improved Excel-to-Sheets import behavior suggests growing attention to preserving tables, pivot relationships, and other structured computational semantics during format migration.

### Deep Drift distinction

`visual fidelity != structural fidelity != computational fidelity`

A file can appear correct while dependency structure has degraded.

### Proposed benchmark

**Structural Migration Fidelity**

Test:

`XLSX -> Sheets -> AI edit -> XLSX export -> Excel reopen`

Measure:
- formulas;
- tables;
- pivots;
- named ranges;
- references;
- data types;
- formatting semantics;
- editability;
- provenance of modifications.

## Platform signal 6: Chat-to-document generation is becoming baseline capability

Major platforms increasingly support direct generation of DOCX, PDF, XLSX, presentations, and other editable files from conversational workflows.

### Deep Drift significance

The useful research question is no longer whether a model can produce a file. The stronger question is whether the artifact survives repeated transformation.

### Proposed benchmark

**Artifact Round-Trip Fidelity**

`generate -> download -> human edit -> re-upload -> AI revise -> export -> reopen elsewhere`

Measure:
- semantic fidelity;
- structural fidelity;
- formatting fidelity;
- editability;
- export reliability;
- provenance;
- human repair labor.

## Platform signal 7: Microsoft moves from assistant behavior to app-native execution

Microsoft Copilot increasingly launches real Office files from chat and performs multi-step app-native actions within Word, Excel, and PowerPoint.

### Deep Drift significance

The causal chain becomes:

`human intent -> agent -> app-native action -> artifact`

rather than:

`human asks -> model advises -> human executes manually`

### Proposed benchmark

**Agent-to-Artifact Provenance Fidelity**

Attempt to reconstruct:

`human owner -> agent -> model/skill -> source -> action -> artifact mutation -> storage/version record`

Measure whether final artifacts preserve enough information to identify the synthetic actor and procedural path that produced them.

## Platform signal 8: Google Workspace Studio gives automated flows distinct identities

Recent Workspace Studio controls introduce unique auditable identifiers for automated flows, least-privilege identities, permission boundaries, and the ability to distinguish actions performed by the human owner from actions attributed to the flow itself.

### Deep Drift significance

Commercial systems are beginning to formalize the distinction:

`human actor != synthetic actor`

This is a direct provenance research signal.

### Proposed benchmark

**Agent Identity Continuity**

Reconstruct:

`human owner -> flow/agent ID -> permissions -> model/skill -> source -> action -> artifact mutation -> audit record`

Then test whether this chain survives:
- export;
- copying;
- migration;
- human editing;
- agent replacement;
- platform change.

## Platform signal 9: Research workspaces become selectively portable

Gemini Notebook copying can preserve sources, generated Studio artifacts, artifact-generation prompts, and custom chat configuration while excluding some personal interaction history and user-generated notes.

### Deep Drift significance

Portability is layer-selective rather than complete.

A workspace may preserve outputs while losing part of the human cognitive history that produced them.

### Proposed benchmark

**Research-State Portability Fidelity**

Measure survival of:
- source corpus;
- artifact set;
- generation prompts;
- configuration;
- human notes;
- personal chat history;
- chronology;
- authorship markers;
- synchronization state.

Core proposition:

`artifact portability != cognitive-history portability`

## Platform signal 10: Permission boundaries become part of observed behavior

Human approval controls, DLP restrictions, least-privilege execution, connector permissions, and agent identity boundaries can alter what an AI workflow can retrieve or execute.

### Proposed benchmark

**Permission-Bound Behavior Drift**

Hold constant:
- workflow;
- model;
- instructions.

Change:
- full permission;
- least privilege;
- human approval required;
- restricted source access;
- DLP-constrained execution.

Measure whether the system:
- fails visibly;
- omits evidence;
- substitutes sources;
- changes conclusions;
- discloses constraints;
- incorrectly presents continuity despite missing access.

## Consolidated Deep Drift benchmark families

The current evidence suggests consolidating individual tests into seven larger benchmark families.

### 1. Context Continuity
Includes:
- memory boundaries;
- source surfaces;
- ingestion channels;
- modality differences;
- context leakage.

### 2. Procedural Continuity
Includes:
- skill portability;
- procedural identity;
- agent behavior across model replacement;
- instruction survival.

### 3. Artifact Continuity
Includes:
- DOCX/PDF/XLSX/PPTX generation;
- round-trip survival;
- structural migration;
- formatting preservation;
- editability.

### 4. State Continuity
Includes:
- source data <-> generated interface synchronization;
- mutation correctness;
- dependency preservation.

### 5. Research-State Portability
Includes:
- source portability;
- configuration portability;
- artifact portability;
- note/history preservation;
- synchronization continuity.

### 6. Agent Identity and Provenance Continuity
Includes:
- human vs synthetic actor distinction;
- agent/flow identity;
- permission path;
- action attribution;
- mutation-path reconstruction.

### 7. Workflow Continuity
Includes:
- chat -> document -> spreadsheet -> presentation -> app;
- platform migration;
- feature retirement;
- state survival;
- human repair labor.

## Core Deep Drift hypothesis update

The research frontier is increasingly not whether an LLM produces a correct answer. It is whether the original human intention remains causally recoverable after passing through multiple synthetic transformations.

The emerging Deep Drift construct is:

# Continuity Under Transformation

`human origin -> memory -> source surface -> skill -> model -> agent -> tool -> artifact -> generated interface -> external application -> human revision -> migration`

A visible failure is relatively easy to detect. A continuity failure can leave behind a polished document, functioning spreadsheet, or successful mini-app while erasing the causal history of the decisions that produced it.

## Research question

> After a human project is remembered, copied, transformed, acted upon by synthetic agents, exported into artifacts, edited externally, and migrated across platforms, which parts of the original decision history remain causally recoverable?

## Evidence status

**Status:** DEVELOPING RESEARCH FRAMEWORK  
**Confidence:** MODERATE for platform-convergence pattern; individual feature claims require continued source-level verification and longitudinal reproduction.  
**Counter-hypothesis:** increasing platform integration may improve continuity and provenance rather than degrade them if auditability, identity, permission, and version systems mature faster than workflow complexity.  
**Failure condition:** the framework must be revised if cross-platform experiments show that provenance, instructions, state, and authorship remain consistently recoverable despite repeated transformations.

## Next experiments

1. Build reproducible same-content ingestion tests across paste, attachment, Library, Drive, and Project sources.
2. Run default-memory vs project-only-memory comparisons on identical project states.
3. Test DOCX and XLSX round-trip survival across platform boundaries.
4. Test generated mini-app mutations against source data and audit trails.
5. Record agent identity, permissions, and action provenance where platforms expose them.
6. Test copied research workspaces for selective loss of human notes, chat history, and chronology.
7. Measure human repair labor as a first-class continuity metric.

---

**Institutional research chain:** D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH  
**Program:** ATØR Institute / Deep Drift Research  
**Methodological principle:** Correct output does not prove preserved decision history.