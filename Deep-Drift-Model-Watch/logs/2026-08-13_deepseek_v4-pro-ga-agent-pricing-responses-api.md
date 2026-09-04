# Deep Drift Model Watch — DeepSeek V4-Pro GA

**ĀTØR Institute | Deep Drift Project**

- **Detected:** 2026-09-04 17:25 Asia/Jakarta
- **Provider:** DeepSeek
- **Product/model:** DeepSeek-V4-Pro (GA, version documented as DeepSeek-V4-Pro-0813)
- **Announcement date:** 2026-08-13
- **Release/availability date:** 2026-08-13 for app, web, and API; revised API pricing effective 2026-08-16 16:00 UTC
- **Rollout status:** Generally available
- **Retest priority:** **HIGH**
- **Evidence strength:** **High — primary DeepSeek release notes, pricing docs, and API documentation**

## Exact change

DeepSeek moved V4-Pro from preview-era availability to a GA production release with materially enhanced agent capabilities. The GA release adds native OpenAI Responses API support, Codex-oriented integration, and three explicit reasoning-effort levels (`low`, `high`, `max`) for V4-Pro and V4-Flash. DeepSeek also introduced peak/off-peak API pricing, with off-peak rates set at 50% of peak rates.

DeepSeek reports substantial production-agent improvements in its own benchmark suite, including HLE with tools, Terminal Bench 2.1, NL2Repo, Cybergym, DeepSWE, Toolathlon-Verified, Agents' Last Exam, AutomationBench, DSBench-FullStack, and DSBench-Hard. These benchmark claims are vendor-reported and should not be treated as independent evidence of real-world superiority.

## Affected surfaces

- DeepSeek app and web, where V4-Pro is available through Expert Mode
- DeepSeek API via model name `deepseek-v4-pro`
- OpenAI Responses API-compatible clients
- Codex-compatible workflows using DeepSeek as the model provider
- Long-context and agent workflows using V4-Pro's 1M-token context window and up to 384K output

No region-specific rollout restriction was stated in the cited official release material.

## Pricing before / after

### Previous documented V4-Pro pricing

- Cache-hit input: **$0.003625 / 1M tokens**
- Cache-miss input: **$0.435 / 1M tokens**
- Output: **$0.87 / 1M tokens**

### New pricing effective 2026-08-16 16:00 UTC

**Off-peak**
- Cache-hit input: **$0.022 / 1M tokens**
- Cache-miss input: **$0.66 / 1M tokens**
- Output: **$1.98 / 1M tokens**

**Peak**
- Cache-hit input: **$0.044 / 1M tokens**
- Cache-miss input: **$1.32 / 1M tokens**
- Output: **$3.96 / 1M tokens**

DeepSeek defines peak hours as 01:00–04:00 UTC and 06:00–10:00 UTC Monday through Friday; other times are off-peak. The new schedule therefore makes longitudinal cost comparisons time-dependent. A raw 'cost per task' comparison that ignores request time is no longer methodologically clean.

## Official sources

1. DeepSeek V4-Pro GA Release — https://api-docs.deepseek.com/news/news260813/
2. DeepSeek API Change Log — https://api-docs.deepseek.com/updates/
3. DeepSeek Models & Pricing — https://api-docs.deepseek.com/quick_start/pricing
4. DeepSeek Responses API documentation — https://api-docs.deepseek.com/guides/responses_api/
5. DeepSeek Codex integration documentation — https://api-docs.deepseek.com/quick_start/agent_integrations/codex/

## Official fact vs Deep Drift inference

### Official fact

- V4-Pro GA rolled out to app, web, and API.
- DeepSeek states that agent capability was significantly enhanced for production environments.
- Native Responses API support was added and DeepSeek documents Codex integration.
- Reasoning effort now exposes `low`, `high`, and `max` levels.
- V4-Pro retains a 1M-token context window and supports up to 384K output according to current pricing/model documentation.
- Peak/off-peak pricing took effect on August 16, 2026, with off-peak rates half the peak rates.

### Deep Drift inference

Earlier DeepSeek V4-Pro comparisons may now be stale if they used the preview build, a different reasoning-effort setting, a non-Responses-API harness, or pre-August-16 pricing. The GA release changes both behavior and experimental economics. Results must therefore record model version, reasoning effort, endpoint/harness, request time, tool permissions, and cache state.

## Capability classes affected

- Agentic execution
- Tool use
- Reasoning control
- Long-context stability
- Coding-agent workflows
- Cross-tool/API compatibility
- Reliability in production-style multi-step tasks
- Commercial constraints / API economics

This release does **not** by itself establish stronger user-history memory, cross-chat retrieval, persistent personal memory, or image generation. Those categories require separate evidence.

## Why previous Deep Drift results may now be stale

1. Preview-era V4-Pro and GA V4-Pro are not equivalent experimental subjects.
2. Explicit reasoning-effort controls can change quality, latency, token use, and failure recovery.
3. Native Responses API support changes the tool/agent execution path relative to Chat Completions or Anthropic-compatible calls.
4. Codex integration introduces a different harness and possibly different tool scaffolding.
5. Time-of-day pricing means cost-normalized rankings can change even when model behavior does not.
6. Vendor benchmark gains need independent replication under the same Deep Drift prompts and tool permissions used for competing models.

## Existing tests to rerun

- Deep Drift agentic multi-step execution suite
- Tool-selection and tool-recovery tests
- Long-context instruction-precedence tests
- 1M-context retrieval and dispersed-document compilation tests
- Coding-agent repository navigation and repair tests
- Failure/recovery after deliberately corrupted intermediate steps
- Cost-normalized reasoning and agent comparison
- Responses API vs Chat Completions behavioral parity tests

## New test to add

### DD-DSPG-01 — DeepSeek GA / Reasoning-Effort Parity Test

Run the identical complex task at `low`, `high`, and `max` reasoning effort while holding prompt, context corpus, tools, temperature/top-p where configurable, endpoint, and environment constant.

Measure:
- task completion accuracy
- tool-selection errors
- recovery after failed tool calls
- instruction-loss rate across long contexts
- output provenance
- token consumption
- latency
- total billed cost
- behavior variance across repeated trials

Run the same task through both the Responses API and the legacy-compatible interface where possible to isolate model changes from harness changes.

### DD-DSCP-01 — DeepSeek Cost-Period Control

Repeat identical API workloads during both peak and off-peak windows. Record cache-hit/miss state and billed token categories. This separates model efficiency from billing-schedule effects.

## Variables to hold constant

- Exact prompt and source corpus
- Model identifier/version where exposed
- Reasoning effort
- Context length and ordering
- Tool set and permissions
- Endpoint / API format
- Harness version
- Temperature, top-p, and other sampling controls where available
- Cache state
- Network/environmental conditions where practical
- Request time relative to DeepSeek peak/off-peak billing windows

## Likely confounders

- Vendor-reported benchmark methodology
- Differences between app/web and API orchestration
- Codex or other client-side scaffolding
- Cache hits vs misses
- Peak vs off-peak pricing
- Reasoning-effort setting
- Tool retries performed by the surrounding harness rather than the base model
- Silent server-side post-training or routing updates under the same model slug

## Deep Drift recommendation

Treat all DeepSeek V4-Pro results produced before the August 13 GA build as a separate historical baseline. Retest agentic, long-context, tool-use, and cost-normalized comparisons using the GA model, explicitly pin reasoning effort and endpoint, and record request time for pricing reproducibility. Do not infer improved persistent memory or cross-chat continuity from the agent improvements alone.