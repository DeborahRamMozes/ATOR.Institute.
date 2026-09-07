# xAI — Grok 4.1 Fast + Agent Tools API — 2M context and hosted agent tooling

- **Detected:** 2026-09-07 11:09 Asia/Jakarta
- **Announcement date:** 2026-09-07 (detected from official xAI announcement page in this run)
- **Release/availability date:** 2026-09-07, available via xAI API
- **Rollout status:** Generally available in API
- **Affected plans/regions:** xAI API developers; no regional exclusions stated on the official announcement page.
- **Official source:** https://x.ai/news/grok-4-1-fast
- **Evidence strength:** High
- **Retest priority:** Critical

## What changed

xAI launched Grok 4.1 Fast in reasoning and non-reasoning variants with a 2-million-token context window, plus the Agent Tools API. The hosted tool suite includes real-time X search, web search, files search with citations, code execution, and MCP tools. xAI states that these tools run on its infrastructure and that the model can invoke multiple tools in parallel across several turns. The official page lists pricing of $0.20 per 1M input tokens, $0.05 per 1M cached input tokens, $0.50 per 1M output tokens, and tool calls from $5 per 1,000 successful invocations.

## Official fact vs inference

### Official fact
- Two API variants are provided: `grok-4-1-fast-reasoning` and `grok-4-1-fast-non-reasoning`.
- The model has a 2M-token context window.
- Agent Tools API provides X search, web search, files search, code execution, and MCP tools.
- xAI states that the model can call tools in parallel over multiple turns.
- Listed pricing is $0.20/M input, $0.05/M cached input, $0.50/M output, plus tool-call charges from $5/1,000 successful invocations.

### Deep Drift inference
- This is a material change to tool and agent architecture, not merely a model refresh. Hosted retrieval, execution, and MCP orchestration can alter observed capability independently of base-model reasoning.
- The 2M context window and explicit reasoning/non-reasoning variants make prior Grok API comparisons non-equivalent unless the variant, tool stack, context size, and billing are normalized.

## Why this matters to Deep Drift

Previous Grok results may be stale because the tested system can now combine a very large context window with vendor-hosted retrieval and execution. That changes long-context retention, cross-turn state, web/X freshness, file-grounded reasoning, code analysis, and agent completion reliability. Cost-normalized comparisons also change because tool invocation fees are now a separate variable from input/output token pricing.

## Retest recommendation

- **Existing test(s) to rerun:** A1 own-chat-history retrieval where applicable; B1 retrieval granularity and provenance; C1 long-context stability; C2 instruction precedence; C3 multi-document synthesis; D1 tool selection; D2 connected-data retrieval; D3 autonomous multi-step execution; D4 cross-tool continuity; D5 write reliability; F2 API pricing normalization.
- **Additional test to add:** 2M-context degradation curve; hosted-tool versus external-tool ablation; parallel-tool versus serial-tool comparison; reasoning versus non-reasoning variant; X/web/files/code/MCP source attribution; tool-failure recovery; and effective-cost-per-successful-completion accounting for tool fees.
- **Variables to hold constant:** model variant; API version; prompt and corpus; context length; tool list; tool permissions; region; account/project; temperature and sampling controls; concurrency; timeout; retry policy; network conditions; billing window.
- **Likely confounders:** retrieval ranking and indexing latency; freshness of X/web sources; MCP server behavior; sandbox limits; tool-call billing; parallel execution order; hidden server-side prompts; rate limits; model auto-routing; beta or staged backend changes.

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
- [x] API pricing
- [ ] Subscription packaging
- [x] Usage limits / access / regions

## Sources

1. xAI, “Grok 4.1 Fast and Agent Tools API”: https://x.ai/news/grok-4-1-fast
