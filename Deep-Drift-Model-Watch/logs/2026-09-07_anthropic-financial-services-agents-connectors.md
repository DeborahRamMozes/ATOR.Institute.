# Anthropic - Claude financial-services agents and cross-application connectors - Agent/tool-use and continuity expansion

- **Detected:** 2026-09-07 07:14 Asia/Jakarta
- **Announcement date:** 2026-05-05
- **Release/availability date:** 2026-05-05; plugins and templates available on announcement; Managed Agents in public beta; Outlook add-in coming soon
- **Rollout status:** Generally available for the announced paid-plan plugin/add-in surfaces; Managed Agents public beta; partner connectors available to joint paid customers
- **Affected plans/regions:** Paid Claude Cowork and Claude Code plans; Claude Platform Managed Agents; Microsoft 365 add-ins for Excel, PowerPoint, and Word generally available, Outlook coming soon; no regional exclusion stated
- **Official source:** https://www.anthropic.com/news/finance-agents
- **Evidence strength:** High
- **Retest priority:** High

## What changed

Anthropic released ten ready-to-run financial-services agent templates as plugins for Claude Cowork and Claude Code, and as cookbooks for Claude Managed Agents. The templates combine skills, governed connectors, and subagents for tasks such as pitchbook construction, KYC screening, valuation review, statement auditing, and month-end close. Anthropic also expanded Claude across Microsoft Excel, PowerPoint, Word, and Outlook, with context carrying automatically between applications; Outlook was announced as coming soon. Managed Agents support long-running sessions, per-tool permissions, managed credential vaults, and a full audit log of tool calls and decisions. New partner connectors and a Moody's MCP app add governed, real-time or interactive access to external financial data and tools.

## Official fact vs inference

### Official fact
- Ten agent templates were released as Cowork/Claude Code plugins and Managed Agent cookbooks.
- Context carries automatically between Excel, PowerPoint, Word, and Outlook add-ins; Outlook was listed as coming soon.
- Managed Agents include long-running sessions, per-tool permissions, managed credential vaults, and audit logs.
- New connectors and a Moody's MCP app were announced for joint paid customers.

### Deep Drift inference
- This materially changes the tool-use and continuity boundary for enterprise workflows, even without a new base model.
- Cross-application state transfer may produce different results from single-surface Claude tests and can invalidate comparisons that treat each application as an isolated prompt session.
- Governed connectors and audit logs create a new observability layer that may improve reproducibility, but may also introduce permission, latency, and data-selection effects.

## Why this matters to Deep Drift

Previous Deep Drift results may be stale for agentic workflows that depend on cross-application context, persistent task state, external connectors, or subagent delegation. The relevant system is now a composed workflow of Claude, plugins, connectors, MCP apps, credential controls, and audit infrastructure rather than a single chat model. A fair comparison must therefore distinguish model capability from orchestration and access-layer capability.

## Retest recommendation

- **Existing test to rerun:** Tool selection; connected-data retrieval; autonomous multi-step execution; reliability of write operations; cross-tool continuity; source attribution and provenance.
- **Additional test to add:** Compare identical tasks in (1) single-surface chat, (2) Cowork/Claude Code plugin mode, and (3) Managed Agents with connectors and subagents. Add a cross-application handoff test from Excel to PowerPoint to Word, plus an audit-log completeness test.
- **Variables to hold constant:** Model ID; prompt/task; input documents; account tier; region; connector set; tool permissions; subagent count; temperature or equivalent controls; concurrency; timeout; retry policy; approval checkpoints.
- **Likely confounders:** Connector freshness and schema differences; Microsoft add-in version; local desktop state; permissions and credential scopes; subagent routing; cached context; external market-data latency; public-beta instability.

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

1. Anthropic, "Agents for financial services," 2026-05-05: https://www.anthropic.com/news/finance-agents
2. Repository governing schema: `Deep-Drift-Model-Watch/README.md`, `RETEST_MATRIX.md`, and `logs/README.md`
