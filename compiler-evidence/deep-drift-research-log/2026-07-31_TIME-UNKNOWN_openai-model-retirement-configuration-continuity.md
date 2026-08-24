# Deep Drift LLM Trend Backfill

## OpenAI Codex Model Retirement: Model-Retirement Configuration Continuity

- `timestamp_basis`: PROVIDER_PUBLICATION
- `source_timestamp`: 2026-07-31
- `source_time`: UNKNOWN
- `rollout_or_cutoff_timestamp`: 2026-08-31
- `time_precision`: date-only
- `ator_backfill_observed_at_local`: 2026-08-24T11:35+07:00
- `research_stream`: LLM Update Watch / Workflow Continuity / Model Migration
- `platform`: OpenAI Codex
- `source_type`: official OpenAI release notes
- `source_identifier`: GPT-5.4 and GPT-5.4 mini retire from Codex on August 31
- `source_url`: https://openai.com/products/release-notes/
- `status`: VERIFIED PROVIDER SUNSET / WORKING DEEP DRIFT BENCHMARK

## Provider observation

OpenAI announced on 31 July 2026 that GPT-5.4 and GPT-5.4 mini will no longer be available in Codex for users signed in with ChatGPT after 31 August 2026. The models remain available through the API and Codex sessions authenticated with an API key. OpenAI recommends GPT-5.6 Terra and GPT-5.6 Luna as replacements and explicitly instructs users to update workspace defaults, saved model settings, managed configurations, custom agents, and scheduled tasks before the cutoff.

## Deep Drift interpretation

A named workflow, automation, custom agent, or saved configuration can persist while the reasoning engine underneath it changes or disappears.

```text
WORKFLOW T1
model A + skill + files + tools + config
↓
MODEL RETIREMENT
↓
WORKFLOW T2
model B + same surrounding labels/configuration
```

### Benchmark: Model-Retirement Configuration Continuity

Measure whether workflow identity survives model replacement without silent behavioral drift.

## Hypotheses

**H-A:** model retirement will alter some workflow outputs, tool choices, reasoning paths, or repair burden even when surrounding configuration remains constant.

**H-B:** provider-recommended replacements plus explicit configuration migration may preserve practical workflow behavior sufficiently for most tasks.

**H-C:** the largest continuity failures may arise not from model behavior but from stale saved defaults, custom agents, or scheduled tasks that reference retired identifiers.

**Mundane rival:** observed differences may be ordinary stochastic variance or unrelated product changes occurring near the retirement date.

## Measures

- configuration_reference_survival
- scheduled_task_success_rate
- tool_selection_delta
- artifact_structure_delta
- semantic_decision_delta
- silent_fallback_rate
- retirement_disclosure_rate
- human_repair_minutes

## Failure condition

Weaken H-A if pre/post-retirement repeated tests show no material difference beyond ordinary variance and all dependent configurations migrate transparently.

## Evidence boundary

The provider announcement establishes the retirement, replacement recommendations, and need to update dependent configurations. The continuity benchmark and causal interpretation are ATØR Institute constructs.

## Next test

Freeze one Codex task, skill, source set, tools, and evaluation rubric. Run repeated trials before the cutoff, then after migration to the recommended replacement. Record every configuration change and any human repair required.