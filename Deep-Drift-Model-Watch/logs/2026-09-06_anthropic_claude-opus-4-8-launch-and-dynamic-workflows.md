# Anthropic — Claude Opus 4.8 — Major model, effort-control, dynamic-workflow, and pricing-speed change

- **Detected:** 2026-09-06 23:27 Asia/Jakarta
- **Provider:** Anthropic
- **Product/model:** Claude Opus 4.8; Claude Code dynamic workflows; claude.ai/Cowork effort control
- **Announcement date:** 2026-05-28
- **Release/availability date:** 2026-05-28
- **Rollout status:** GA for Claude Opus 4.8; dynamic workflows in research preview; effort control available on all plans
- **Affected plans/regions:** Anthropic states Opus 4.8 is available everywhere; effort control is available on all plans. Dynamic workflows are available for Claude Code Enterprise, Team, and Max plans. API model identifier: `claude-opus-4-8`. No region exclusions stated in the announcement.
- **Official source:** https://www.anthropic.com/news/claude-opus-4-8
- **Pricing before/after:** Regular usage unchanged from Opus 4.7 at $5/M input and $25/M output. Fast mode is $10/M input and $50/M output, with Anthropic stating it is 3x cheaper than the previous fast-mode price.
- **Evidence strength:** High
- **Retest priority:** Critical

## What changed

Anthropic upgraded the Opus line to Claude Opus 4.8, describing improvements in coding, agentic work, reasoning, practical knowledge work, tool calling, multimodal document handling, and reliability. The release also adds user-selectable effort control in claude.ai and Cowork, letting users trade response depth and rate-limit consumption against speed. Claude Code dynamic workflows can plan and execute very large tasks with hundreds of parallel subagents and verify outputs before reporting completion. The Messages API now accepts system entries inside the messages array, allowing mid-task instruction updates without routing changes through a user turn. Anthropic also reports higher Claude Code rate limits to accommodate higher-effort modes.

## Official fact vs inference

### Official fact

- Claude Opus 4.8 is available everywhere at the same regular-use price as Opus 4.7.
- Effort control is available on all plans in claude.ai and Cowork.
- Dynamic workflows are available in research preview for Claude Code Enterprise, Team, and Max plans.
- Anthropic reports materially improved agentic reliability, tool efficiency, honesty, and lower rates of certain misaligned behaviors relative to Opus 4.7.
- The Messages API supports system entries inside the messages array for mid-task updates.

### Deep Drift inference

- Prior Claude comparisons are not portable across default, extra, or max effort settings; effort level is now a first-class experimental variable.
- Agent benchmarks may improve through orchestration changes, not only base-model intelligence, because dynamic workflows introduce parallel subagents and verification loops.
- API harnesses that assume system instructions are fixed at task start may understate the new model's controllability and mid-task adaptation.
- Fast-mode cost comparisons must be re-baselined because Anthropic changed the speed/pricing tradeoff independently of regular Opus pricing.

## Why this matters to Deep Drift

Previous Deep Drift results for Claude Opus may now be stale or incomparable if they used default effort, fixed prompt scaffolding, or a single-agent Claude Code path. The release changes at least four experimental surfaces at once: base model capability, effort policy, agent orchestration, and API instruction mutability. A result that looks like a reasoning gain may actually be a higher-effort or multi-agent gain; a result that looks like reliability may be caused by output verification. Human beings adore confounded experiments, so the retest must split these surfaces instead of reporting one heroic score.

## Retest recommendation

- **Existing tests to rerun:**
  - Long-context stability and multi-document synthesis.
  - Adversarial contradiction handling and instruction precedence.
  - Autonomous multi-step execution and tool selection.
  - Reliability of write operations across connected tools.
  - Cross-session temporal continuity where available.
  - Image interpretation tests for chaotic prompts, reference fidelity, tattoo/geometry/placement fidelity, and edit precision.
  - Cost-normalized coding and research tasks.
- **Additional tests to add:**
  - Effort sweep: default vs high vs extra/max, holding prompt, tools, and temperature constant.
  - Single-agent vs dynamic-workflow comparison on the same task graph.
  - Mid-task system-entry update test using the Messages API.
  - Verification-ablation test: compare completion quality with and without output verification loops.
  - Fast-mode latency/quality/cost frontier against regular mode.
- **Variables to hold constant:** model identifier, API version, prompt text, context payload, tool definitions, tool permissions, temperature/top-p, max output tokens, region, account tier, concurrency, seed if supported, and retry policy.
- **Likely confounders:** staged backend routing, hidden system-prompt changes, dynamic workflow parallelism, subagent count, effort defaults, rate-limit pressure, fast-mode batching, tool latency, context caching, and different safety-routing behavior.

## Comparative dimensions affected

- [ ] Memory / continuity
- [ ] Own-chat-history retrieval
- [ ] Cross-chat / project / folder retrieval
- [ ] Indexing / compilation
- [x] Context / reasoning
- [x] Tools / agents
- [x] Image generation
- [x] Image editing
- [x] Visual identity / personality fidelity
- [x] API pricing
- [ ] Subscription packaging
- [x] Usage limits / access / regions

## Sources

1. Anthropic, “Introducing Claude Opus 4.8,” 2026-05-28: https://www.anthropic.com/news/claude-opus-4-8
2. Anthropic, Claude Opus 4.8 System Card, linked from the official announcement.
