# Deep Drift LLM Trend Backfill

## Microsoft Copilot Chat-Centered Surface: Unresolved Source Record

- `timestamp_basis`: REPORTED_PLATFORM_DATE_UNVERIFIED
- `reported_timestamp`: 2026-08-22
- `reported_time`: UNKNOWN
- `time_precision`: date-only
- `ator_backfill_observed_at_local`: 2026-08-24T11:35+07:00
- `research_stream`: LLM Update Watch / Surface-Driven Workflow Drift
- `platform`: Microsoft 365 Copilot
- `source_type`: prior chat-tab research signal; first-party source not recovered in the 2026-08-24 audit
- `status`: UNRESOLVED / DO NOT CITE AS VERIFIED PLATFORM FACT

## Prior chat-tab claim

A prior monitoring entry in this chat described a Microsoft Copilot interface change as moving toward a more chat-centered navigation surface, with chat becoming the dominant entry point and agents/apps/Notebooks/conversations easier to pin or reach.

The 2026-08-24 audit did not recover a first-party Microsoft source that cleanly verifies the specific reported 22 August rollout date and exact interface description. Microsoft's official Copilot release documentation supports a broader long-running expansion of Copilot Chat across work surfaces, but that is not sufficient to validate this specific dated claim.

This record therefore preserves the research lead without laundering it into a verified fact.

## Candidate Deep Drift construct

### Surface-Driven Workflow Drift

Question: can a change in interface hierarchy alter tool selection, context assembly, or decision path even when model capability, data, and user goal remain unchanged?

```text
APP-CENTERED ENTRY
vs
CHAT-CENTERED ENTRY
↓
first action
context selection
agent/tool choice
artifact path
```

## Hypotheses

**H-A:** chat-centered entry surfaces will increase the probability that work is framed and routed through AI before a specific application is opened.

**H-B:** the navigation redesign may have little measurable effect if users still enter work through habitual application-specific paths.

**H-C:** any measured change may be caused by simultaneous feature additions, pinned agents, or changed defaults rather than interface hierarchy alone.

**Mundane rival:** ordinary UI redesign may affect click paths without changing substantive workflow decisions.

## Measures if source is recovered

- first_surface_used
- first_tool_or_agent_selected
- context_source_count
- app_open_before_ai_rate
- ai_open_before_app_rate
- decision_path_length
- artifact_destination
- human_repair_minutes

## Failure condition

Archive or reject this candidate if the specific 22 August platform event cannot be sourced, or if controlled tests show no meaningful workflow difference attributable to entry-surface hierarchy.

## Evidence boundary

The dated platform claim is unresolved. `Surface-Driven Workflow Drift` remains an ATØR Institute candidate benchmark and must not be presented as a verified consequence of a Microsoft release until the source is recovered and the effect is tested.

## Next action

Recover the exact Microsoft Message Center, roadmap, or release-note source for the reported interface rollout. Until then, keep this file in UNRESOLVED status.