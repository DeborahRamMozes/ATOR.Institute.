# Deep Drift LLM Trend Backfill

## Microsoft Work IQ: Context, Tools, and Governance as an Intelligence Layer

- `timestamp_basis`: PROVIDER_DOCUMENT_UPDATE
- `source_timestamp`: 2026-06-17
- `source_time`: UNKNOWN
- `time_precision`: date-only
- `ator_backfill_observed_at_local`: 2026-08-24T11:35+07:00
- `research_stream`: LLM Update Watch / Post-Model Systems / Context and Tool Orchestration
- `platform`: Microsoft Work IQ / Microsoft 365 Copilot
- `source_type`: official Microsoft Learn documentation
- `source_identifier`: Work IQ overview
- `source_url`: https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq
- `status`: VERIFIED PROVIDER ARCHITECTURE / WORKING DEEP DRIFT SYSTEM MODEL

## Provider observation

Microsoft describes Work IQ as a workplace intelligence layer that lets agents access and reason over organizational data, context, tools, and workspaces with permission-aware governance. The architecture supports A2A, MCP, and REST. The documented model emphasizes internal context assembly, generic tools, policy-aware access, observability, and logged tool invocation.

The Work IQ MCP design further compresses many Microsoft 365 operations into a small generic tool surface and uses runtime schema discovery plus policy enforcement rather than exposing a huge static tool list.

## Deep Drift interpretation

This is a strong example of the LLM industry moving from `model + prompt` toward an integrated execution stack:

```text
human intent
→ organizational context
→ context assembly
→ model / agent
→ skill selection
→ generic tools
→ policy engine
→ action
→ audit record
```

The observed intelligence of the product therefore depends on context assembly and governed tool execution, not only on the model.

### Research significance

This architecture supports the Deep Drift distinction:

`model intelligence != delivered system intelligence`

and strengthens the need to test:

- context selection
- tool compression
- policy-bound execution
- action provenance
- orchestration burden
- runtime governance continuity

## Hypotheses

**H-A:** reducing tool enumeration and assembling context internally can lower human orchestration burden when the system correctly discovers paths and permissions.

**H-B:** generic tool compression may introduce new abstraction failures if the system chooses an incorrect resource path or policy interpretation.

**H-C:** permission-aware context may improve provenance and reduce leakage compared with ad-hoc retrieval pipelines.

**Mundane rival:** this is ordinary enterprise middleware and API abstraction, not a distinct AI-system phenomenon.

## Measures

- human_orchestration_burden
- context_relevance_rate
- context_source_recovery
- tool_path_selection_accuracy
- policy_block_accuracy
- action_provenance_completeness
- schema_discovery_success
- human_repair_minutes

## Failure condition

Revise the Deep Drift reading if tool compression and internal context assembly do not materially change orchestration burden, execution reliability, or provenance compared with conventional explicit APIs.

## Evidence boundary

Microsoft supports the Work IQ architecture, protocols, context layer, generic tools, permission-aware governance, and observability. The broader post-model interpretation and metrics are ATØR Institute constructs.

## Next test

Compare one Microsoft 365 task executed through a generic Work IQ tool path with the equivalent task executed through a more explicit direct API or connector route. Measure tool-discovery burden, context selection, permission handling, action accuracy, and provenance.