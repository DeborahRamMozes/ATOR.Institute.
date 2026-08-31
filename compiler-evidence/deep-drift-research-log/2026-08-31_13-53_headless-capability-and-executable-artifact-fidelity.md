# Deep Drift Research Update

## Headless Capability and Executable-Artifact Fidelity

**Research date:** 31 August 2026  
**Primary platform delta:** Salesforce Headless 360 exposes governed enterprise capabilities through MCP, APIs, CLI tools, reusable Skills, and headless experience layers so authorized agents can invoke business functions without navigating the original application UI.  
**Secondary platform delta:** Microsoft 365 Copilot can execute Python during Excel editing and write analysis, transformations, and visual outputs directly into the workbook.  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-ledger creator-workflow architecture verified from first-party Salesforce and Microsoft documentation.

## Executive Summary

A useful boundary has been crossed in the creator stack.

Salesforce now describes enterprise applications not primarily as interfaces that humans open, but as **capabilities that authorized AI agents can consume headlessly**. The Headless 360 architecture exposes data, workflows, business rules, actions, and governance through open interfaces such as MCP servers, APIs, CLI tools, Skills, and a Headless Experience Layer.

Salesforce states that its Agent Skills repository contains **100+ reusable Skills** and that the Data 360 MCP Server exposes nearly **200 Data 360 APIs**. These Skills package orchestration, validation, resources, and business logic into governed capabilities. Authorized agents can use natural language to build semantic models, transform data, generate calculated insights, map fields, inspect identity graphs, create audience segments, activate campaigns, and create new data streams.

The creator architecture therefore changes from:

```text
HUMAN
-> APPLICATION UI
-> FEATURE
-> BUSINESS ACTION
```

to:

```text
HUMAN / AGENT INTENT
-> SKILL
-> MCP / API / CLI
-> GOVERNED BUSINESS CAPABILITY
-> ACTION
```

The software still exists, but its UI is no longer the mandatory entrance.

In parallel, Microsoft 365 Copilot adds Python execution to **Edit with Copilot in Excel**. Natural-language instructions can trigger Python for statistics, simulations, advanced visualization, automation, and data transformation, with results written directly into the workbook.

The spreadsheet architecture becomes:

```text
NATURAL-LANGUAGE INTENT
-> COPILOT
-> PYTHON EXECUTION
-> WORKBOOK MUTATION
-> EDITABLE NATIVE ARTIFACT
```

Together these updates reveal a larger creator trend:

> **AI systems are moving from generating artifacts and navigating applications toward compiling user intent into executable capabilities that directly mutate governed native artifacts and enterprise state.**

This report formalizes a new Deep Drift benchmark family:

**Headless Capability and Executable-Artifact Fidelity (HCEAF)**

with companion constructs:

- Skill-to-Capability Fidelity
- Headless Invocation Provenance Fidelity
- Capability Governance Fidelity
- UI-Bypass Equivalence Fidelity
- Capability Version Fidelity
- Skill Dependency Fidelity
- Natural-Language-to-Python Fidelity
- Python-to-Workbook Mutation Fidelity
- Executable-Artifact Reproducibility Fidelity
- Native-Artifact Calculation Lineage Fidelity
- Agent-to-Business-Rule Boundary Fidelity

The central question is:

> When the application UI disappears from the execution path and natural-language requests become calls to governed Skills, MCP endpoints, APIs, CLI tools, or Python that directly change native artifacts and enterprise systems, can the resulting state still identify exactly which procedure, code, business rule, permission context, model decision, and human instruction produced it?

## 1. Salesforce Headless 360: The Application Is No Longer the Unit

Salesforce states that the next generation of enterprise software is optimized for AI agents completing work across systems rather than people clicking through applications.

The architecture exposes previously UI-bound capabilities through MCP servers, APIs, CLI tools, Agent Skills, and a Headless Experience Layer. The system's unit of reuse becomes a **capability** rather than a screen.

```text
APPLICATION != INTERFACE
INTERFACE != CAPABILITY
CAPABILITY != UNGOVERNED API CALL
HEADLESS != CONTEXTLESS
```

## 2. More Than 100 Reusable Skills

Salesforce says its Agent Skills repository includes **100+ reusable Skills** that package orchestration, validation, resources, and business logic into governed capabilities.

```text
SKILL
-> BUSINESS PROCEDURE
-> VALIDATION
-> TOOL DEPENDENCIES
-> GOVERNED ACTION
```

### Skill-to-Capability Fidelity

**Skill-to-Capability Fidelity (SCF)** measures whether a reusable Skill remains traceable to the exact capability graph it invokes.

A minimum manifest should preserve:

```text
skill_id
skill_version
skill_instruction_hash
dependency_list
required_mcp_server
required_api_version
validation_rules
business_rule_refs
capability_ids
```

## 3. Skills Need Version and Dependency State

Salesforce's developer documentation notes that early versions of its Skills library did not individually version each Skill or express dependencies in a standardized way. Salesforce has since added metadata for Skill versions, minimum Salesforce API versions, related Skills, and dependencies.

The real Skill object is:

```text
INSTRUCTIONS
+
VERSION
+
DEPENDENCIES
+
API CONTRACT
+
VALIDATION
```

not `SKILL.md` alone.

## 4. Data 360 MCP Server: Natural Language to Enterprise Mutation

Salesforce says the Data 360 MCP Server exposes nearly **200 APIs**. Authorized agents can use them to build semantic models, transform data, generate calculated insights, map fields, inspect identity graphs, create audience segments, activate campaigns, and create new data streams.

```text
NATURAL LANGUAGE
-> AGENT REASONING
-> SKILL
-> MCP
-> ENTERPRISE OPERATION
-> NEW SYSTEM STATE
```

### Headless Invocation Provenance Fidelity

**Headless Invocation Provenance Fidelity (HIPF)** measures whether each business-state mutation can identify the complete non-UI execution chain that caused it.

Minimum event manifest:

```text
human_instruction
agent_identity
model_id
skill_id_and_version
mcp_server
capability_or_api_id
arguments
business_rule_context
permission_context
execution_timestamp
resulting_object_ids
```

## 5. Capability Governance Fidelity

The important distinction is:

```text
AGENT CAN REACH CAPABILITY
!=
AGENT MAY EXECUTE CAPABILITY
```

**Capability Governance Fidelity (CGF)** measures whether business rules, security controls, and authorization boundaries remain equivalent when the application UI is bypassed.

## 6. UI-Bypass Equivalence Fidelity

The UI traditionally contains invisible procedural friction: required fields, warnings, confirmation dialogs, validation messages, and workflow order. When an agent bypasses the UI, those protections must move into the capability layer.

**UI-Bypass Equivalence Fidelity (UBEF)** measures whether headless execution preserves the safeguards and state transitions that the original human-facing interface enforced.

## 7. Salesforce in Claude: Skills + Real-Time CRM + Generative UI

The Claudeforce launch reinforces the same architecture. Salesforce in Claude ships with **37 pre-built sales Skills** spanning meeting preparation, deal-health review, and pipeline review. The onboarding experience can read Salesforce, Slack, and connected Claude context and construct a customized interactive dashboard.

```text
ENTERPRISE CONTEXT
-> SKILLS
-> CLAUDE REASONING
-> SALESFORCE ACTIONS
-> GENERATED INTERACTIVE VIEW
```

## 8. Mini-App Builder Implication

The Headless Experience Layer allows web, mobile, embedded, and conversational experiences to sit over reusable enterprise capabilities.

```text
UI SHELL
+
CAPABILITY GRAPH
+
SKILLS
+
GOVERNANCE
```

The important artifact is not merely the generated interface. It is the capability contract behind it.

## 9. Microsoft: Python Inside Edit with Copilot in Excel

Microsoft's 25 August 2026 release notes state that **Edit with Copilot in Excel** can now use Python for statistics, simulations, advanced visualizations, automation, and data transformation, with results output directly into the workbook.

```text
USER REQUEST
-> COPILOT INTERPRETATION
-> PYTHON
-> ANALYSIS / TRANSFORMATION
-> WORKBOOK RESULT
```

## 10. Natural-Language-to-Python Fidelity

**Natural-Language-to-Python Fidelity (NLPF)** measures whether executed Python faithfully represents the user's requested analytical procedure.

The manifest should preserve:

```text
user_instruction
copilot_interpretation
python_code
execution_environment
library_versions
input_range_or_table
output_range_or_object
execution_timestamp
```

## 11. Python-to-Workbook Mutation Fidelity

**Python-to-Workbook Mutation Fidelity (PWMF)** measures whether each generated workbook state remains attributable to the code execution that produced it.

```text
workbook_id
workbook_version_before
python_run_id
code_hash
input_cells
output_cells_or_objects
workbook_version_after
```

## 12. Executable-Artifact Reproducibility Fidelity

```text
EDITABLE ARTIFACT
!= REPRODUCIBLE ARTIFACT
```

A reproducibility package should include source workbook snapshot, user request, generated Python, environment, dependencies, execution state, result locations, and human edits after execution.

## 13. Why This Matters for DOCX / PDF Generation

The meaningful issue is downstream export from executable native artifacts.

```text
SOURCE DATA
-> AI INTERPRETATION
-> CODE
-> NATIVE ARTIFACT
-> STATIC DOCUMENT
```

A PDF exported from a workbook can preserve the chart while losing the computational procedure that created it.

## 14. Why This Matters for Chat-to-Document Export

The industry is moving past:

```text
CHAT
-> DOCUMENT
```

and toward:

```text
CHAT
-> EXECUTABLE PROCEDURE
-> NATIVE APPLICATION STATE
-> DOCUMENT
```

## 15. Why This Matters for Copy-Paste Fixes

Enterprise workflow:

```text
OPEN SALESFORCE
-> FIND RECORD
-> NAVIGATE UI
-> RUN WORKFLOW
```

becomes:

```text
STATE INTENT
-> AGENT INVOKES CAPABILITY
```

Spreadsheet workflow:

```text
EXPORT DATA
-> OPEN PYTHON NOTEBOOK
-> WRITE CODE
-> RUN ANALYSIS
-> COPY RESULT TO EXCEL
```

becomes:

```text
ASK COPILOT IN EXCEL
-> PYTHON RUNS
-> RESULT APPEARS IN WORKBOOK
```

> **Every eliminated manual seam should be replaced by a machine-readable execution seam.**

## 16. Why This Matters for Memory

No stronger new personal-memory primitive surfaced in this run. But memory/context can now influence procedure selection, filters, metrics, or actions. When memory materially changes execution, its identity should appear in lineage.

## 17. Why This Matters for Skills

This is the strongest Skills finding in this pass.

```text
INSTRUCTION
+ VERSION
+ DEPENDENCIES
+ VALIDATION
+ CAPABILITY REFERENCES
+ HOOKS
+ AGENTS
```

Salesforce's move toward explicitly versioned Skill metadata confirms a broader direction: **Skills are becoming procedural software packages rather than reusable prose snippets.**

## 18. New Failure Classes

1. **Headless Governance Bypass** - an agent invokes a business capability without equivalent safeguards enforced by the original UI.
2. **Skill Dependency Drift** - Skill instructions remain unchanged while an MCP server, API version, hook, or related Skill changes behavior.
3. **Capability Attribution Collapse** - a business-state mutation is attributed generically to AI instead of the specific Skill and capability path.
4. **Agent/Business-Rule Collapse** - probabilistic reasoning and deterministic rule enforcement become indistinguishable in logs.
5. **Hidden Python Procedure** - a workbook contains AI-generated analysis whose code/environment cannot be reconstructed.
6. **Workbook State Detachment** - generated results survive while source inputs are later edited.
7. **Static Export Procedure Loss** - a PDF faithfully shows a chart but cannot identify the code that generated it.
8. **Natural-Language Ambiguity Compilation** - an ambiguous request is silently resolved into a specific code path without preserving the interpretation choice.
9. **Capability-Version Orphaning** - an old artifact references a Skill or capability name but not the exact version used.
10. **Native-Artifact Manual Override Loss** - a human edits AI-generated workbook results and final state no longer distinguishes machine output from human correction.

## 19. Deep Drift Benchmark: One Intent, UI vs Headless vs Python

### Part A: Enterprise capability

1. preserve source object state;
2. execute the action manually through UI;
3. record validations and confirmations;
4. reset the object;
5. execute the same action through an agent Skill/MCP route;
6. compare resulting state;
7. compare validation and governance events;
8. verify Skill version and dependency graph;
9. verify permission identity;
10. verify audit lineage.

### Part B: Excel executable artifact

1. preserve workbook hash/version;
2. issue a natural-language request to Edit with Copilot;
3. capture generated Python if exposed;
4. preserve execution environment;
5. record input cells/tables;
6. record output cells/visuals;
7. manually edit one generated output;
8. export the workbook result to PDF;
9. verify whether the PDF can be traced back to the Python run;
10. repeat with identical source data and request to test reproducibility.

## 20. Proposed Metrics

### Skill Capability Attribution Coverage

```text
SCAC =
headless actions traceable to exact Skill + capability version
/
all controlled headless actions
```

### UI/Headless Governance Equivalence

```text
UHGE =
governance controls preserved in headless execution
/
all controlled UI safeguards
```

### Skill Dependency Reproducibility

```text
SDR =
Skill runs reproducible with preserved dependency graph
/
all controlled Skill runs
```

### Natural-Language-to-Code Accuracy

```text
NLCA =
generated code procedures matching intended analytical operation
/
all controlled natural-language requests
```

### Workbook Mutation Attribution

```text
WMA =
AI-generated workbook mutations traceable to exact code run
/
all controlled workbook mutations
```

### Static Artifact Computational Lineage

```text
SACL =
material claims/visuals in static exports traceable to computational procedure
/
all controlled computational outputs
```

## 21. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No stronger new memory primitive surfaced; material memory becomes an upstream input to capability/code selection when it affects execution. |
| Skills | **Major new-to-ledger architecture:** Salesforce exposes 100+ governed reusable Skills and explicitly versions Skill metadata/dependencies. |
| Mini-app builders | **Strong architectural shift:** headless experience layers let web, mobile, embedded, and conversational interfaces sit over reusable capability graphs instead of rebuilding business logic. |
| Chat-to-document export | No stronger direct export primitive surfaced; the important evolution is chat -> executable procedure -> native state -> document. |
| DOCX / PDF generation | No new format primitive; computational lineage becomes necessary when static exports contain outputs generated by hidden code. |
| Copy-paste/export fixes | **Major reduction:** agent headless execution removes enterprise UI navigation; Copilot in Excel removes notebook-to-spreadsheet copy/paste for Python analysis. |
| Broader creator workflow | **Major trend:** AI creator systems are moving from text generation and app navigation toward intent compilation into governed executable capabilities. |

## 22. Deep Drift Research Position

The weak description is:

> Salesforce has more MCP tools and Skills, and Excel Copilot can run Python.

The serious description is:

> Enterprise software is being decomposed into reusable, governed capabilities that agents invoke without opening the original application interface, while native creator artifacts such as spreadsheets can now contain results of AI-generated computational procedures executed directly from natural-language requests.

Therefore:

```text
APP != UI
SKILL != PROMPT SNIPPET
HEADLESS != UNGOVERNED
EDITABLE != REPRODUCIBLE
WORKBOOK RESULT != HUMAN-WRITTEN FORMULA
PDF OUTPUT != COMPUTATIONAL LINEAGE
```

The serious Deep Drift requirement is:

> **Every headless or executable creator workflow should preserve human instruction, model/agent identity, Skill identity and version, dependency graph, capability/API/MCP identity, permission and business-rule state, generated code where applicable, execution environment, source-object state, native-artifact mutation lineage, human post-execution edits, and static-export lineage required to reconstruct how intent became executable system state.**

The industry spent years teaching AI how to click software. The more consequential phase is arriving now: the software is being rebuilt so the AI no longer needs the screen.

That is cleaner architecture.

It is also much less forgiving about provenance, because once the button disappears, the execution trail is all that remains.

## Evidence Boundary

Platform facts in this report are grounded in first-party Salesforce and Microsoft documentation checked on 31 August 2026.

Salesforce states that Headless 360 exposes trusted business capabilities to authorized AI agents; the Data 360 MCP Server exposes nearly 200 APIs; the Agent Skills repository contains more than 100 reusable Skills; Skills package orchestration, validation, resources, and business logic; the Headless Experience Layer enables web, mobile, embedded, and conversational experiences; and Salesforce is explicitly moving enterprise software toward reusable capabilities agents can consume without navigating the original UI.

Salesforce developer documentation further states that its Skills library now carries individual Skill versions and standardized dependency metadata after earlier library-level versioning created visibility problems.

Microsoft states that, in the 25 August 2026 Microsoft 365 Copilot release, Edit with Copilot in Excel can execute Python for advanced analysis, simulations, visualizations, automation, and data transformation, with results output directly into the workbook.

HCEAF and all companion constructs, failure classes, benchmark procedures, and proposed metrics are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Salesforce, **Salesforce Turns Enterprise Applications into Enterprise Capabilities**, 25 August 2026.  
   https://www.salesforce.com/ap/news/press-releases/2026/08/25/salesforce-turns-enterprise-applications-into-enterprise-capabilities/

2. Salesforce Developers Blog, **Headless Development with Skills and a Claude Code Plugin**, August 2026.  
   https://developer.salesforce.com/blogs/2026/08/headless-development-with-skills-and-a-claude-code-plugin

3. Salesforce, **Salesforce and Anthropic launch Claudeforce**, 28 August 2026.  
   https://www.salesforce.com/ap/news/press-releases/2026/08/28/salesforce-dan-anthropic-luncurkan-claudeforce-ai-nomor-1-berpadu-dengan-crm-ai-nomor-1/

4. Microsoft Learn, **Release Notes for Microsoft 365 Copilot - August 25, 2026**, checked 31 August 2026.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
