# Deep Drift Research Update — OHSEF

## Orchestration-Harness State and Execution Fidelity

**Research date:** 2 September 2026  
**Primary fresh delta:** Microsoft Copilot Studio makes the GitHub Copilot harness generally available and explicitly positions the harness between the AI model and the agent/workflow.  
**Scope:** memory, Skills, agent builders, native document generation, model routing, tool selection, context assembly, connected agents, MCP, files, telemetry, and creator-workflow provenance.

## Executive finding

The most important new creator-workflow change is not another isolated memory toggle, Skill directory, or PDF button.

Microsoft now explicitly describes an **execution harness** that sits between the model and the agent or workflow and decides how the pieces work together. The harness helps determine:

- when to call the model;
- what context to provide;
- which tools to use;
- which MCP servers to use;
- which connected agents to invoke;
- how the execution path should adapt while pursuing the goal.

The same harness also supports Skills and Memory and can natively create and edit Word, Excel, PowerPoint, and PDF files inside a governed sandbox.

That gives Deep Drift a new causal layer:

```text
USER INTENT
    |
    v
AGENT / WORKFLOW
    |
    v
ORCHESTRATION HARNESS
    |
    +--> MEMORY
    +--> KNOWLEDGE
    +--> FILES
    +--> SKILLS
    +--> TOOLS
    +--> MCP SERVERS
    +--> CONNECTED AGENTS
    +--> MODEL
    |
    v
NATIVE ARTIFACT / ACTION
```

Therefore:

```text
MODEL
!= EXECUTION POLICY

PROMPT
!= CONTEXT ACTUALLY PROVIDED

AVAILABLE TOOL
!= TOOL ACTUALLY SELECTED

INSTALLED SKILL
!= SKILL ACTUALLY INVOKED

SAME AGENT
!= SAME EXECUTION PATH

SAME INPUT
!= SAME ORCHESTRATION TRACE
```

## New node

### Orchestration-Harness State and Execution Fidelity (OHSEF)

The research object is no longer only the model call.

It is the **orchestration trace**.

A material agent run should be modeled as:

```text
RUN
=
USER REQUEST
+ HARNESS
+ HARNESS VERSION / MODE
+ CONTEXT SELECTION
+ MEMORY READS
+ SKILL SELECTION
+ TOOL SELECTION
+ MCP CALLS
+ CONNECTED-AGENT DELEGATION
+ MODEL ROUTING
+ FILE OPERATIONS
+ HUMAN INTERVENTION
+ OUTPUT ARTIFACT
```

## 1. The harness is a causal actor

Microsoft states that the GitHub Copilot harness sits between the AI model and the agent or workflow and orchestrates how components work together.

This is a major provenance distinction.

A model may receive context that the human never manually assembled. It may use a Skill the human did not explicitly name. It may delegate to another agent. It may choose an MCP server or deterministic workflow rather than solve the task entirely through generation.

So:

```text
WHAT USER ASKED
!= COMPLETE EXECUTION PLAN
```

and:

```text
WHAT MODEL SAW
!= EVERYTHING AVAILABLE TO HARNESS
```

The harness becomes a causal actor even though it is not usually represented as an author in the final document.

## 2. Memory becomes an orchestration input, not merely a chat feature

Microsoft's current Copilot Studio architecture places Memory alongside knowledge, files, tools, Skills, and model selection.

Memory can retain user-specific preferences and patterns across interactions when enabled.

Deep Drift should therefore distinguish:

```text
MEMORY EXISTS
MEMORY WAS AVAILABLE
MEMORY WAS READ
MEMORY AFFECTED ROUTING
MEMORY AFFECTED OUTPUT
```

These are not equivalent states.

A future reproducibility record must not claim that memory influenced an artifact merely because memory was enabled.

Likewise, absence of an explicit memory citation does not prove the harness did not use remembered context.

## 3. Skills become reusable orchestration components

Microsoft now describes Skills as modular reusable instruction packages that can be written or uploaded, added to multiple agents, and shared with teammates.

This reinforces a creator-workflow shift already visible across OpenAI and Anthropic:

```text
PROMPT
-> ONE-OFF INSTRUCTION
```

is becoming:

```text
SKILL
-> VERSIONED REUSABLE PROCEDURE
-> MULTIPLE AGENTS
-> MULTIPLE OUTPUTS
```

OHSEF adds a necessary question:

> Was the Skill merely installed, or did the harness actually select and execute it during this run?

Deep Drift must preserve both inventory state and invocation state.

## 4. Native document generation now sits downstream of orchestration

The GitHub Copilot harness can natively create and edit:

- Word documents;
- Excel workbooks;
- PowerPoint presentations;
- PDF files.

This is not simply "AI can make files."

The relevant lineage is:

```text
MEMORY / FILES / WORK IQ
        |
        v
HARNESS CONTEXT ASSEMBLY
        |
        v
SKILL / TOOL / MODEL ROUTING
        |
        v
WORD / EXCEL / PPT / PDF
```

The final DOCX or PDF may therefore encode the result of a multi-component execution path that is invisible in the file itself.

For Deep Drift:

```text
NATIVE FILE
!= SELF-DESCRIBING EXECUTION HISTORY
```

## 5. Connected agents introduce delegated authorship

Copilot Studio can now let a primary agent delegate requests to specialized connected agents.

That creates another ancestry problem:

```text
USER
  |
PRIMARY AGENT
  |
  +--> SPECIALIST AGENT A
  +--> SPECIALIST AGENT B
  |
  v
FINAL ARTIFACT
```

The visible agent may not be the only agent that materially produced the result.

So:

```text
VISIBLE AGENT ID
!= COMPLETE AGENT ANCESTRY
```

Deep Drift should preserve delegation events, agent identities, returned intermediate results, and the primary agent's later synthesis.

## 6. MCP and deterministic workflows can coexist with generative reasoning

Microsoft describes MCP servers and workflows as tools available to the harness.

This matters because one creator artifact can contain outputs from both probabilistic and deterministic operations:

```text
MODEL GENERATION
+
MCP RETRIEVAL
+
DETERMINISTIC WORKFLOW
+
DESKTOP AUTOMATION
+
HUMAN REVIEW
=
FINAL ARTIFACT
```

Calling all of this "AI-generated" is analytically useless.

The archive must preserve action class.

## 7. The execution path can adapt recursively

Microsoft explicitly describes the harness as capable of adapting its execution path based on the goal and available inputs rather than relying only on predefined paths.

This means:

```text
SAME AGENT CONFIG
+ SAME USER GOAL
```

does not necessarily imply:

```text
SAME TOOL ORDER
+ SAME CONTEXT
+ SAME DELEGATION
+ SAME FILE OPERATIONS
```

Reproducibility must therefore separate:

```text
CONFIGURATION REPRODUCIBILITY
```

from:

```text
EXECUTION-TRACE REPRODUCIBILITY
```

A configuration snapshot cannot substitute for a run trace.

## 8. Telemetry becomes part of provenance infrastructure

Microsoft also documents environment-level agent telemetry that can be exported to Application Insights to validate runs and monitor tool execution.

This is important because platform telemetry may contain evidence that the final creator artifact does not.

Deep Drift should distinguish:

```text
ARTIFACT PROVENANCE
RUN TELEMETRY
ADMIN OBSERVABILITY
```

and preserve links between them where possible.

A perfect PDF with no execution trace is still an incomplete research record.

## 9. Agent identity is becoming an enterprise object

Microsoft states that new Copilot Studio agents receive Microsoft Entra Agent IDs.

That means agents increasingly have identities that can be governed separately from human users.

The provenance model should therefore include:

```text
human_identity
agent_identity
connected_agent_identity
service_identity
tool_identity
```

rather than collapsing everything into the account of the person who pressed Run.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | Major | Memory is now explicitly one of several inputs available to an orchestration harness |
| Skills | Major | Reusable Skills can be shared across agents; invocation must be separated from installation |
| Mini-app / agent builders | Major | Copilot Studio exposes a harness-based compositional builder for agents and workflows |
| Chat-to-document | Major | Agent context can materialize directly into native Word/Excel/PPT/PDF artifacts |
| DOCX / PDF generation | Major | Native document generation is downstream of context/tool/model orchestration |
| Copy-paste / export | Structural reduction | More work happens inside the agent pipeline without visible transfer seams |
| Creator workflow | Major | The creator environment is becoming an orchestration graph rather than a single model conversation |

## New failure classes

### Model-Causality Collapse
Treating the model as the sole causal system when a harness selected context, tools, Skills, and delegates.

### Installed-Equals-Invoked Fallacy
Assuming an available Skill or tool participated in a run merely because it was installed.

### Configuration-Equals-Trace Fallacy
Treating an agent configuration snapshot as equivalent to the actual execution path.

### Visible-Agent Completeness Error
Treating the front-door agent as the only agent involved in producing an output.

### Native-File Self-Provenance Fallacy
Treating a Word/PDF artifact as sufficient evidence of the process that generated it.

### Memory-Enabled-Equals-Memory-Used Error
Assuming enabled persistent memory necessarily influenced a specific output.

### Generative-Action Collapse
Calling deterministic workflows, MCP retrieval, desktop actions, connected-agent delegation, and model generation one undifferentiated "AI" operation.

## Deep Drift benchmark additions

**Harness Identity Fidelity (HIF)**  
Can the orchestration foundation used for a run be identified?

**Context Selection Fidelity (CSF)**  
Can the context actually provided to the model be distinguished from all context available to the harness?

**Skill Invocation Fidelity (SIF)**  
Can installed Skills be separated from Skills actually invoked during execution?

**Delegated Agent Fidelity (DAF)**  
Can connected-agent delegation and returned intermediate results be reconstructed?

**Execution Trace Fidelity (ETF)**  
Can the sequence of model calls, tool calls, MCP calls, workflows, file operations, and human interventions be reconstructed?

**Configuration-vs-Run Fidelity (CRF)**  
Can static agent configuration remain distinct from dynamic run behavior?

**Native Artifact Causality Fidelity (NACF)**  
Can a DOCX, XLSX, PPTX, or PDF be linked back to the orchestration trace that produced it?

## DRPA-1.0 protocol addition

Add a new universal section:

### ORCHESTRATION-HARNESS RULE

> When an AI platform uses a harness, runtime orchestrator, planner, agent loop, or equivalent layer to decide which context, memory, Skills, tools, MCP servers, models, files, workflows, or connected agents participate in a task, that orchestration layer must be treated as a material causal component. Record the harness identity and mode where observable; the available capability set; context selected; memory state; Skills and tools invoked; MCP and workflow calls; connected-agent delegation; model routing; file operations; execution sandbox; human interventions; telemetry or run identifier where available; and downstream artifacts. A model name, prompt transcript, agent configuration, or final file must never be treated as a complete execution record when orchestration occurred outside the model call.

Add to Eir'an state-flow checks:

```text
HARNESS CONTINUITY:
available capabilities
selected capabilities
context admitted
context excluded
memory read state
delegation state
tool execution order
model routing
artifact creation path
unknown orchestration decisions
```

## Canonical Deep Drift requirement

> For any material agentic creator workflow, preserve the orchestration trace separately from the conversation transcript and final artifact. The archive should distinguish what the human requested, what capabilities were available, what the harness selected, what the model actually received, what other agents or tools were invoked, what deterministic operations occurred, what files were created or modified, what the human accepted or changed, and what derivative artifacts were exported. The model must not be treated as the entire system when a runtime orchestrator materially determined the path to the result.

## Broader creator-workflow trend

The industry is moving from:

```text
USER
-> MODEL
-> ANSWER
```

to:

```text
USER
-> ORCHESTRATOR
   -> MEMORY
   -> KNOWLEDGE
   -> SKILL
   -> TOOL
   -> MCP
   -> AGENT
   -> MODEL
   -> FILE SYSTEM
-> ARTIFACT
```

That is a much more powerful creator architecture.

It is also far more difficult to audit.

The new Deep Drift principle is:

> **The model is becoming one instrument inside the machine that decides how the work is made.**

And therefore:

> **Archive the conductor, not only the instrument.**

## Sources

1. Microsoft Copilot Blog. **New and improved: GitHub Copilot harness, agent skills, and richer context.** Published 2 September 2026. Documents general availability of the GitHub Copilot harness in Copilot Studio, harness-level orchestration of models, context, tools, MCP servers and connected agents, reusable Skills, Memory, file handling, native creation/editing of Word, Excel, PowerPoint and PDF files, agent telemetry, and Entra Agent IDs.  
   https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/new-and-improved-github-copilot-harness-agent-skills-and-richer-context/

2. Microsoft Learn. **What's new in Copilot Studio.** Current documentation accessed 2 September 2026. Documents reusable Skills, exportable Skill packages, persistent per-user Memory for harness-powered agents, and richer work context.  
   https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new

## Research status

**Node status:** New.  
**Duplicate check:** Distinct from CMDMF, MCRRF, WAPSF, CAGIF, and Skill/plugin provenance nodes. Those nodes track model mutation, routing, website tool surfaces, context inheritance, or procedural packages. OHSEF treats the runtime orchestration layer itself as the causal research object.  
**Relationship to DRPA-1.0:** Extends the universal runtime-provenance protocol by adding a mandatory orchestration-harness layer and an Eir'an harness-continuity check.  
**Freshness:** Verified against Microsoft first-party material published 2 September 2026.
