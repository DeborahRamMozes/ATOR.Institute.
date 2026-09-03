# Deep Drift Model Watch

**ĀTØR Institute | Deep Drift Project**  
**Status:** Active hourly condition watch  
**Started:** 2026-09-03 (Asia/Jakarta)

## Purpose

Deep Drift Model Watch is a persistent comparative-intelligence ledger for meaningful changes to major generative AI systems. It monitors OpenAI/ChatGPT, Anthropic/Claude, Google/Gemini, xAI/Grok, and DeepSeek and records only changes substantial enough to alter comparative Deep Drift testing.

This is not a marketing-news archive. Minor interface changes, cosmetic renames, routine bug fixes, and benchmark theatre without a material product change are excluded.

## Qualifying triggers

A watch entry is created when an official or strongly confirmed change involves one or more of the following:

1. New flagship or major model launch.
2. Major reasoning, context-window, tool-use, multimodal, agentic, reliability, or capability change.
3. API pricing or consumer subscription pricing change.
4. Packaging, plan, tier, quota, usage-limit, access, geographic availability, or rollout change.
5. Ability to retrieve, inspect, or reason over the model/product's own prior chat history.
6. Improved cross-chat, cross-project, cross-folder, workspace, or account-history retrieval.
7. New or materially improved indexing, compilation, continuity, persistent memory, or other "brain-like" user-history functions.
8. Materially improved image generation or image editing from chaotic, underspecified, personality-heavy, or context-dependent prompts.
9. Improved ability to preserve a user's established visual identity, personality, style, recurring motifs, prior context, or reference constraints during image generation/editing.

## Required evidence

Primary official sources are preferred: official product announcements, release notes, documentation, pricing pages, model/system cards, API documentation, or company-authored technical posts.

Every entry must distinguish:

- **Official fact**
- **Observed rollout status**
- **Inference / Deep Drift interpretation**

## Entry schema

Each qualifying event is written as a dated Markdown file in `logs/` and should contain:

- Provider
- Product/model
- Exact announced change
- Announcement date
- Release/availability date, if different
- Rollout status: announced / preview / staged rollout / generally available / deprecated
- Official source(s)
- Plans, regions, APIs, devices, or users affected
- Pricing before/after where relevant
- Capability class affected
- Deep Drift significance
- Existing test(s) that should be rerun
- New test needed, if any
- Expected confounders
- Evidence strength
- Retest priority: Critical / High / Medium / Low

## Deep Drift retest domains

The watch specifically maps changes against these comparative test families:

### A. Memory and continuity
- Own-chat-history retrieval
- Cross-chat recall
- Project/folder/workspace retrieval
- Persistent user-memory behavior
- Temporal continuity across sessions
- Ability to locate prior instructions without re-feeding them

### B. Indexing and compilation
- Search of prior conversation corpus
- Index accuracy
- Retrieval granularity
- Compilation of dispersed prior work
- Source attribution and provenance inside retrieved personal context
- Resistance to mixing unrelated historical nodes

### C. Context and reasoning
- Long-context stability
- Instruction precedence
- Multi-document synthesis
- Adversarial contradiction handling
- Comparative reasoning drift

### D. Tool and agent behavior
- Tool selection
- Connected-data retrieval
- Autonomous multi-step execution
- Reliability of write operations
- Cross-tool continuity

### E. Image interpretation
- Chaotic-text-to-image translation
- Personality-conditioned visual interpretation
- Visual identity persistence
- Reference-image fidelity
- Tattoo / geometry / placement fidelity
- Edit precision without collateral changes
- Consistency across repeated generations

### F. Commercial constraints
- Subscription packaging
- API pricing
- Usage caps
- Priority/compute tiers
- Regional access
- Model gating by plan
- Feature gating that affects fair comparison

## Logging rule

If no qualifying material change is found, **no log entry is created**.

If a qualifying change is found, the hourly Deep Drift watch records it in this repository and separately notifies the user with a concise retest recommendation.

## Research position

The purpose is not to crown a permanently "best" model. Model behavior is a moving target entangled with pricing, memory architecture, interface constraints, access tiers, tool permissions, multimodality, rollout geography, and the wonderfully human habit of calling packaging changes innovation. Deep Drift therefore treats every substantial release as a possible invalidation of earlier comparative results.
