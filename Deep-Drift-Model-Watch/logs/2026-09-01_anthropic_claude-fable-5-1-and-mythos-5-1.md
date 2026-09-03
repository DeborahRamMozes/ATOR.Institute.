# Deep Drift Model Watch — Claude Fable 5.1 / Mythos 5.1

**Detected:** 2026-09-03 22:35 Asia/Jakarta  
**Provider:** Anthropic  
**Product/model:** Claude Fable 5.1; Claude Mythos 5.1  
**Announcement date:** 2026-09-01  
**Release/availability date:** 2026-09-01  
**Rollout status:** Fable 5.1 generally available to Pro, Max, Team, Enterprise and API/cloud marketplaces; Mythos 5.1 limited to vetted organizations/trusted access programs  
**Retest priority:** **Critical** for Claude frontier-agent baseline; **High** for pricing/access normalization

## Exact announced change

Anthropic introduced Claude Fable 5.1 and Claude Mythos 5.1 as its newest high-capability models. Fable 5.1 is Anthropic’s most capable generally available model for ambitious coding, knowledge work, and long-running asynchronous jobs. Anthropic states that it can work across applications for hours, plan tasks, use tools, recover when steps fail, and continue with reduced oversight.

Mythos 5.1 is the more restricted counterpart focused on advanced cybersecurity and biology research. Anthropic says Fable 5.1 and Mythos 5.1 share the same underlying model, with Fable carrying stronger safeguards and routing behavior in sensitive domains.

## Pricing / commercial surface

### Claude Fable 5.1
- Input: **US$10 / 1M tokens**
- Output: **US$50 / 1M tokens**
- Cache reads: **US$0.25 / 1M tokens**, stated as 75% lower than Fable 5
- US-only inference: **1.1×** input/output pricing

Anthropic estimates the cache-read reduction can lower typical workload cost by about 25% and highly agentic workload cost by up to approximately 45%.

### Claude Mythos 5.1
- Pricing starts at **US$10 / 1M input tokens** and **US$50 / 1M output tokens**
- Access is restricted to vetted organizations through trusted-access programs.

## Affected plans / regions / API surfaces

### Fable 5.1
- Claude Pro
- Claude Max
- Claude Team
- Claude Enterprise
- Claude Platform/API (`claude-fable-5-1`)
- Available through supported marketplaces and AWS, Google Cloud, and Microsoft Foundry
- US-only inference option at a 1.1× price premium

### Mythos 5.1
- Limited trusted-access programs
- Currently limited to a set of US organizations for the restricted-access model surface
- Life Sciences Verification Program launching as invite-only beta
- Cyber Verification Program expected to include Mythos access in the near future

## Official source(s)

1. Anthropic Newsroom, “Introducing Claude Fable 5.1 and Claude Mythos 5.1,” announcement indexed 2026-09-01: https://www.anthropic.com/news
2. Claude Fable official model page: https://www.anthropic.com/claude/fable
3. Claude Mythos official model page: https://www.anthropic.com/claude/mythos

## Evidence strength

**High — primary Anthropic product/model pages and official newsroom announcement.**

## Official fact vs Deep Drift inference

### Official fact
- Fable 5.1 is Anthropic’s most capable generally available model as of the announcement.
- Anthropic positions it for long-running, asynchronous, multi-application work and states that it can recover from failed steps.
- Fable 5.1 is available to Pro, Max, Team, Enterprise and via API/cloud marketplaces.
- Cache-read pricing fell to US$0.25/M, 75% below Fable 5 according to Anthropic.
- Fable 5.1 and Mythos 5.1 share the same underlying model, with different safeguard/access conditions.
- Mythos 5.1 remains access-restricted.

### Deep Drift inference
Any Deep Drift comparison using Fable 5, Opus 5, or older Claude models as Anthropic’s frontier reference for autonomous long-running work should now be considered potentially stale. The most important retest area is not raw benchmark performance but sustained multi-step behavior: state retention, self-correction, recovery after failure, cross-application tool use, update discipline, and whether the model actually completes long jobs without drifting.

The pricing change also matters methodologically. Lower cache-read cost can materially alter the economics of long-context and agentic tests, meaning previous cost-normalized comparisons may unfairly penalize Claude if they used older Fable cache assumptions.

The announcement does **not** prove improved own-chat-history retrieval, cross-project/folder indexing, or persistent personal memory. Those Deep Drift continuity claims require separate product evidence and direct testing.

## Capability classes affected

- Long-running agent behavior
- Tool use across applications
- Coding / codebase-scale work
- Knowledge work and research
- Vision-assisted verification
- Failure recovery
- Cost-normalized agentic workloads
- Access/safeguard normalization
- Data-retention comparison

## Why previous Deep Drift results may now be stale

Claude’s frontier baseline has materially changed in both capability claims and economics. If prior tests concluded that Claude lost coherence during long sessions, required too much supervision, or became uneconomical under repeated cached context, those conclusions need to be rerun against Fable 5.1 under the same task and scoring conditions.

Access restrictions and safeguard routing also create a new confounder: Fable 5.1 may silently route some cyber/biology requests to other models or use fallback behavior, so apparent model performance in those domains cannot be compared without recording routing conditions.

## Existing tests to rerun

1. **Full comparative frontier sweep** using Fable 5.1 as Anthropic’s current high-capability generally available model.
2. **Long-running agent test** with a task designed to last across many sequential subtasks.
3. **Failure recovery test** with deliberate broken inputs/tools and required rollback/self-correction.
4. **Cross-application continuity test** across browser, files, messages, and code/tool calls where available.
5. **Compilation test** using dispersed Deep Drift documents and contradictory historical instructions.
6. **Vision verification test** where the model must inspect its own generated work against a reference or explicit geometric/visual constraints.
7. **Cost-normalized long-context test** recalculated using US$0.25/M cache-read pricing.
8. **Safeguard/fallback transparency test** to determine when Fable routes or changes model behavior and whether the user can identify that transition.

## New test to add

### Long-Horizon Drift and Recovery Test
Give the model a multi-hour-equivalent simulated project divided into 20–30 dependent steps. Insert conflicting requirements, one corrupted intermediate artifact, and one failed tool invocation. Score whether it retains the original objective, identifies the corruption, repairs the correct step, preserves provenance, and continues without restarting the entire task.

## Variables to hold constant

- Same prompt corpus and source files
- Same plan/account tier
- Same region and inference-location setting
- Same Claude surface (Chat/API/Cowork/Claude Code as applicable)
- Same tool permissions
- Same maximum budget and retry count
- Same effort/reasoning setting
- Same cache strategy when API testing
- Same evaluator and scoring rubric

## Likely confounders

- Product-surface differences between Claude Chat, Cowork, Claude Code, API, and third-party clouds
- Fallback routing caused by safeguards
- 30-day default retention requirement for Fable/Most Mythos access, with enterprise exceptions
- US-only inference price premium
- Different cache utilization patterns
- Marketplace-specific quotas or latency
- Restricted Mythos access makes direct public comparison impossible for many users

## Deep Drift retest decision

**Retest now.** Fable 5.1 changes both the claimed long-horizon agent capability and the economics of sustained context. Older Claude Deep Drift conclusions should remain as historical snapshots, not current rankings.
