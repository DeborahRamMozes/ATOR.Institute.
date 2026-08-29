# Deep Drift Research Update

## Cross-Application Agent Portability and Federated Context Fidelity

**Research date:** 29 August 2026  
**Primary release cluster:** 15 July-25 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log Microsoft 365 Copilot creator-workflow architecture verified from first-party Microsoft Learn release notes.

## Executive Summary

Microsoft 365 Copilot now exposes an architecture in which **MCP-built agents can be used directly inside Word, Excel, PowerPoint, Outlook, and Catalyst**. The same July release cluster also adds centralized management of **Federated Copilot Connectors**, which use Model Context Protocol (MCP) to access external data sources at runtime with user-level authentication instead of requiring those sources to be indexed into Microsoft 365 first.

This changes the creator workflow from:

```text
APP-SPECIFIC COPILOT
-> APP-SPECIFIC CONTEXT
```

toward:

```text
ONE MCP AGENT
-> WORD
-> EXCEL
-> POWERPOINT
-> OUTLOOK
-> CATALYST
      |
      v
FEDERATED MCP CONNECTOR
-> EXTERNAL DATA / TOOL
-> USER-SCOPED AUTHORITY
-> RETURNED CONTEXT
```

The same current release notes also show adjacent creator changes: Word can use either OpenAI or Anthropic models for document editing, and Excel's Copilot can execute Python for analysis, automation, and data transformation with results written directly into the workbook.

For Deep Drift Research, this creates a new benchmark family:

**Cross-Application Agent Portability and Federated Context Fidelity (CAAPFCF)**

with companion constructs:

**Cross-Surface Agent Identity Fidelity (CSAIF)**  
**Host-Context Boundary Fidelity (HCBF)**  
**Federated Runtime Source Fidelity (FRSF)**  
**User-Scoped Authority Fidelity (USAF)**  
**Model-Swap Editorial Fidelity (MSEF)**  
**Conversational Code-to-Workbook Fidelity (CCWF)**

The central research question is:

> When the same agent can operate across multiple Office applications while drawing on runtime-federated external data and potentially different foundation models or executable Python, can every downstream edit or artifact still be traced to the exact host surface, agent configuration, connected source, user permission state, model choice, and execution path that produced it?

## 1. What Changed

Microsoft's July 15, 2026 release notes state that agents built with Model Context Protocol are now available directly in Word, Excel, PowerPoint, Outlook, and Catalyst.

The same release cluster adds **Federated Copilot Connectors**, allowing administrators to deploy and manage MCP-based connectors from Microsoft 365 admin center. Microsoft states that these connectors can connect to custom line-of-business systems and publicly available MCP servers, use user-level authentication at runtime, and respect existing source permissions.

This is materially different from ordinary indexed enterprise search.

```text
COPILOT / AGENT
-> MCP CONNECTOR
-> EXTERNAL SOURCE
-> RUNTIME REQUEST
-> USER AUTHENTICATION
-> SOURCE PERMISSION CHECK
-> RESULT
```

The external source need not first become a Microsoft-indexed copy.

## 2. Why This Matters for Deep Drift

An agent that appears identical in five Office applications is not necessarily operating in five equivalent environments.

Each host has a different object model:

```text
WORD -> DOCUMENT / PARAGRAPH / COMMENT / STYLE
EXCEL -> CELL / FORMULA / TABLE / CHART / PYTHON RESULT
POWERPOINT -> SLIDE / SHAPE / SOURCE REFERENCE
OUTLOOK -> MESSAGE / DRAFT / THREAD / RECIPIENT
CATALYST -> WORKSPACE / ANALYTIC OBJECT
```

Therefore:

```text
SAME AGENT != SAME ACTION SEMANTICS
SAME PROMPT != SAME HOST OBJECTS
SAME CONNECTOR != SAME USER AUTHORITY
SAME DATA SOURCE != SAME DATA SNAPSHOT
```

Portability introduces a provenance problem precisely because the surface friction disappears.

## 3. New Deep Drift Construct: Cross-Application Agent Portability and Federated Context Fidelity

**CAAPFCF** measures whether an agent preserves identity, scope, source attribution, authority, and procedural intent while moving across application surfaces and accessing runtime-federated external context.

A minimum execution manifest should preserve:

```text
agent_id
agent_version
host_application
host_object_id
host_object_version_before
user_identity
connector_id
external_source_id
source_permission_state
retrieval_timestamp
model_id
tool_or_code_execution
result_id
host_object_version_after
```

## 4. Cross-Surface Agent Identity Fidelity

**CSAIF** measures whether the same logical agent can be identified consistently across Word, Excel, PowerPoint, Outlook, and Catalyst while preserving host-specific execution differences.

## 5. Host-Context Boundary Fidelity

**HCBF** measures whether an agent remains inside the semantic and structural boundaries of the host application.

```text
TEXT CONTENT != HOST OBJECT STATE
```

A portable agent that only preserves text is not actually portable. It is merely homeless.

## 6. Federated Runtime Source Fidelity

Federated MCP access replaces indexed-copy assumptions with runtime retrieval:

```text
SOURCE -> RUNTIME REQUEST -> LIVE PERMISSION CHECK -> RESULT
```

**FRSF** measures whether a result remains attributable to the exact external source, connector, query/request, timestamp, and permission-governed runtime state used during retrieval.

## 7. User-Scoped Authority Fidelity

Microsoft states federated connectors use user-level authentication and respect existing source permissions.

```text
SAME AGENT + SAME PROMPT + DIFFERENT USER = POTENTIALLY DIFFERENT EVIDENCE
```

**USAF** measures whether those differences remain attributable to caller identity and permission state rather than being misdiagnosed as model randomness.

## 8. Model-Swap Editorial Fidelity

Word editing with Copilot can now use Anthropic models in addition to OpenAI models.

```text
SAME COPILOT UI != SAME MODEL
```

**MSEF** measures whether edits remain attributable to the selected model family and whether substantive editing behavior remains stable across model swaps.

## 9. Conversational Code-to-Workbook Fidelity

The August 25 release adds Python execution to Edit with Copilot in Excel for statistics, simulations, visualization, automation, and data transformation, with results written into the workbook.

```text
NATURAL LANGUAGE -> PYTHON -> EXECUTION -> RESULT -> WORKBOOK MUTATION
```

**CCWF** measures whether the exact code, inputs, environment, output range, and resulting workbook state remain reconstructable.

## 10. New Failure Classes

- Cross-Host Semantic Drift
- Host-Object Flattening
- Federated Source Attribution Loss
- Permission-Dependent Evidence Drift
- Connector Runtime Staleness Ambiguity
- Model-Swap Attribution Loss
- Cross-Model Editorial Divergence
- Python Execution Opacity
- Workbook Mutation without Causal Trace
- Agent-Portability False Equivalence
- Connector / Agent Version Mismatch
- Office Artifact Provenance Fragmentation

## 11. Deep Drift Benchmark: Cross-Office Portable Agent Test

Create one MCP-based agent with one federated connector and prepare a Word document, Excel workbook, PowerPoint deck, and Outlook draft sharing the same research identifier.

Run parallel tasks, then mutate source data, permissions, model selection, and Excel Python execution. Measure cross-host semantic consistency, source citation continuity, permission-state attribution, model-swap divergence, Python reproducibility, artifact lineage, contradiction rate, and human reconciliation minutes.

## 12. New Metrics

**Cross-Surface Agent Identity Coverage (CSAIC)**  
**Federated Source Attribution Coverage (FSAC)**  
**Permission-State Attribution Accuracy (PSAA)**  
**Model-Swap Traceability (MST)**  
**Python Execution Reproducibility (PER)**  
**Cross-Artifact Consistency Rate (CACR)**

## 13. Why This Matters for Skills

MCP agents are portable procedural objects composed of instructions, tools, connectors, user authority, and host object models. Skill provenance must therefore include executable and permissioned dependencies, not merely prompt text.

## 14. Why This Matters for Mini-App Builders

The mini-app is increasingly the agent plus its connectors and permissions, embedded into existing applications rather than presented as a separate window.

```text
BUILD / CONFIGURE AGENT ONCE
-> DISTRIBUTE
-> EMBED ACROSS HOSTS
-> CONNECT LIVE SOURCES
```

## 15. Why This Matters for Memory

The key continuity problem is now context identity across heterogeneous surfaces: document context, workbook context, slide context, email context, federated external context, and user permission context.

## 16. Why This Matters for Chat-to-Document and DOCX/PDF Workflows

A final DOCX or PDF may now contain edits from multiple model families, federated-source material, Excel Python-derived analysis, and reused cross-application content. Document-local revision history alone is no longer a sufficient provenance layer.

## 17. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer consumer-memory launch displaced previously logged Claude/OpenAI memory changes. The important new issue is cross-application context identity. |
| Skills | **Material new-to-log change:** MCP-built agents are now portable across Word, Excel, PowerPoint, Outlook, and Catalyst. |
| Mini-app builders | **Material new-to-log architecture:** reusable MCP agents function as app-like procedural objects embedded across Office surfaces rather than separate applications. |
| Chat-to-document export | No newer direct export change surfaced in this pass; Word instead becomes one host in a cross-app agent architecture. |
| DOCX / PDF generation | No newer standalone generation feature surfaced, but document provenance now needs to account for cross-model, federated-source, and cross-application inputs. |
| Copy-paste/export fixes | No newer category-displacing copy/export fix surfaced. |
| Broader creator workflow | **Material trend:** the creator stack is moving from app-local copilots toward portable agents, runtime-federated context, model choice, and executable code inside existing productivity files. |

## 18. Cross-Platform Significance

The Deep Drift ledger already contains repository-synced Skills, cross-task retrieval, persistent AI fields, chat-to-page-to-document pipelines, cross-surface memory, embeddable agent APIs, and human-acceptance edit gates.

This change adds **procedure portability across host applications**.

```text
AGENT + HOST + MODEL + CONNECTOR + PERMISSION + TOOL + ARTIFACT
```

The artifact alone is no longer enough to explain itself.

## 19. Deep Drift Research Position

The weak description is:

> Copilot agents now work in Office apps.

The serious description is:

> A reusable MCP-based agent can now cross document, spreadsheet, presentation, email, and analytic surfaces while accessing external sources at runtime under user-scoped authority, with additional execution variability introduced by selectable model providers and Python code execution.

Therefore:

```text
PORTABLE != IDENTICAL
CONNECTED != INDEXED
AUTHORIZED != UNIVERSALLY VISIBLE
SAME COPILOT != SAME MODEL
RESULT IN WORKBOOK != REPRODUCIBLE ANALYSIS
```

The serious Deep Drift requirement is:

> **Every cross-application agent execution should preserve agent identity, host application and object state, model choice, connector identity, external source and retrieval event, user permission state, executable tool or Python path, and every downstream artifact version affected by the result.**

Otherwise portability merely makes provenance disappear faster.

## 20. Evidence Boundary

Platform facts in this report are grounded in Microsoft's first-party **Microsoft 365 Copilot release notes**, retrieved 29 August 2026.

The release notes state that MCP-built agents can be accessed directly in Word, Excel, PowerPoint, Outlook, and Catalyst; Federated Copilot Connectors use MCP to access external data at runtime with user-level authentication while respecting source permissions; Word can use Anthropic models as well as OpenAI models for editing; and Excel's Edit with Copilot can execute Python for advanced analysis, automation, visualization, and data transformation with results written into the workbook.

CAAPFCF, CSAIF, HCBF, FRSF, USAF, MSEF, CCWF, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Source

Microsoft Learn, **Microsoft 365 Copilot release notes**, retrieved 29 August 2026.  
https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
