# Anthropic — Claude Tag — Slack multiplayer continuity and delegated agents

- **Detected:** 2026-09-07 11:09 Asia/Jakarta
- **Announcement date:** 2026-06-23
- **Release/availability date:** 2026-06-23 (beta)
- **Rollout status:** Preview / beta
- **Affected plans/regions:** Claude Enterprise and Team customers; Slack integration; no regional exclusions stated in the official announcement.
- **Official source:** https://www.anthropic.com/news/introducing-claude-tag
- **Evidence strength:** High
- **Retest priority:** Critical

## What changed

Anthropic introduced Claude Tag, beginning with Slack, where Claude can join selected channels as a team member, access connected tools, data, and codebases, and receive delegated tasks through @Claude mentions. Anthropic states that Claude builds context by remembering relevant information from the channels it is in, can plan tasks for future completion, and operates as one shared multiplayer Claude per Slack channel so participants can continue work from the prior interaction.

## Official fact vs inference

### Official fact
- Claude Tag is available in beta for Claude Enterprise and Team customers.
- Claude can be granted access to selected Slack channels and connected tools, data, and codebases.
- Claude can decompose tasks into stages, use available tools, and return created work in a Slack thread.
- One Claude instance interacts with everyone in a given Slack channel, allowing participants to pick up from prior work.

### Deep Drift inference
- This materially changes the continuity unit from a single user/session to a shared channel-level memory and delegation surface.
- Results from single-user Claude chat or Cowork tests may not transfer to multiplayer Slack operation because context visibility, actor identity, and channel history become additional variables.

## Why this matters to Deep Drift

Prior Deep Drift results may be stale for continuity, retrieval, tool execution, and agent reliability when Claude is used as a shared workspace participant rather than a private assistant. The relevant retrieval corpus is no longer only a user's chat history; it includes channel history, shared instructions, connected codebases, and delegated work. This directly affects tests for cross-session continuity, provenance, instruction precedence, and whether Claude can preserve task state across people and turns without inventing ownership or authority.

## Retest recommendation

- **Existing test(s) to rerun:** A1 own-chat-history retrieval; A3 project/workspace continuity; B1 retrieval granularity and provenance; D1 tool selection; D3 autonomous multi-step execution; D4 cross-tool continuity; D5 write reliability.
- **Additional test to add:** Multiplayer continuity matrix with 2–4 users in one Slack channel; compare fresh channel, long-lived channel, and channel with conflicting instructions; test handoff from one user to another, future-task scheduling, channel-history retrieval, source attribution, and permission-boundary adherence.
- **Variables to hold constant:** Claude model/version; plan; Slack workspace; channel membership; connected tools; prompt text; task data; region; time between turns; retry policy; tool permissions.
- **Likely confounders:** Slack message ordering; channel noise; permissions inherited from connected systems; hidden system context; multiple users issuing contradictory requests; beta rollout differences; connector latency and indexing delay.

## Comparative dimensions affected

- [ ] Memory / continuity
- [ ] Own-chat-history retrieval
- [x] Cross-chat / project / folder retrieval
- [x] Indexing / compilation
- [x] Context / reasoning
- [x] Tools / agents
- [ ] Image generation
- [ ] Image editing
- [ ] Visual identity / personality fidelity
- [ ] API pricing
- [x] Subscription packaging
- [x] Usage limits / access / regions

## Sources

1. Anthropic, “Introducing Claude Tag,” 2026-06-23: https://www.anthropic.com/news/introducing-claude-tag
