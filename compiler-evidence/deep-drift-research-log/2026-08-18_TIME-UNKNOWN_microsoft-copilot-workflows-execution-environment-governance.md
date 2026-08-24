# Deep Drift LLM Trend Backfill

## Microsoft Copilot Workflows: Execution-Environment Governance Drift

- `timestamp_basis`: PROVIDER_DOCUMENT_UPDATE
- `source_timestamp`: 2026-08-18
- `source_time`: UNKNOWN
- `time_precision`: date-only
- `ator_backfill_observed_at_local`: 2026-08-24T11:35+07:00
- `research_stream`: LLM Update Watch / Workflow Continuity / Runtime Governance
- `platform`: Microsoft 365 Copilot Workflows agents + Power Platform
- `source_type`: official Microsoft Learn documentation
- `source_identifier`: Microsoft Copilot workflows environment for Workflows agents
- `source_url`: https://learn.microsoft.com/en-us/microsoft-365/copilot/workflows-environment-workflows-agents
- `status`: VERIFIED PROVIDER ARCHITECTURE / WORKING DEEP DRIFT BENCHMARK

## Provider observation

Microsoft documents a special-purpose Power Platform environment that is automatically created when a licensed user first uses Workflows agents in Microsoft Copilot. The environment is hidden from maker portals, cannot be deleted, and supports only Workflows-agent flows. It carries a fixed DLP policy with an allowlisted connector set. Tenant-level and normal environment-level DLP policies do not apply to this special environment.

## Deep Drift interpretation

Agent behavior is partly a property of the execution environment in which the agent is allowed to operate.

```text
same user
same intent
same agent label
same source

runtime A
policy set A

vs

runtime B
policy set B
```

### Benchmark: Execution-Environment Governance Drift

Measure whether changing runtime environment or policy boundary changes available connectors, reachable data, tool routing, failure mode, and action outcome.

### Extension: Runtime Governance Continuity

The workflow is continuous only if a reviewer can reconstruct the execution environment and governance policy that materially constrained the action.

`same agent != same executable agent`

## Hypotheses

**H-A:** identical user-level requests will produce different executable behavior when runtime governance boundaries differ.

**H-B:** fixed platform governance may improve reliability by reducing configuration variability and preventing unsupported connector combinations.

**H-C:** many apparent capability failures attributed to the model may actually originate from hidden runtime policy boundaries.

**Mundane rival:** the differences may be ordinary security policy behavior, not AI-specific drift.

## Measures

- connector_availability_delta
- action_success_rate
- permission_scope_delta
- policy_block_disclosure_rate
- fallback_behavior_rate
- environment_identity_recovery
- hidden_runtime_boundary_count
- human_diagnosis_minutes

## Failure condition

Weaken H-A if equivalent tasks remain behaviorally stable across governed environments and runtime constraints are always clearly surfaced before execution.

## Evidence boundary

Microsoft supports the existence and properties of the special environment and fixed DLP policy. `Execution-Environment Governance Drift` and `Runtime Governance Continuity` are ATØR Institute constructs.

## Next test

Run the same permitted workflow through Workflows agents and a comparable Power Platform environment with different policy control, keeping task, source, and human intent constant. Record connector availability, policy explanations, actions, and provenance.