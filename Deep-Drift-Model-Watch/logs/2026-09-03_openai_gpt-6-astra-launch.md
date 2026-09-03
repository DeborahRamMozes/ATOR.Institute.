# OpenAI — GPT-6 Astra — Flagship model launch and long-running agent controls

- **Detected:** 2026-09-04 04:46 Asia/Jakarta
- **Provider:** OpenAI / ChatGPT
- **Product/model:** GPT-6 Astra (`gpt-6-astra`)
- **Announcement date:** 2026-09-03
- **Release/availability date:** 2026-09-03 for enterprises in the Trusted Access Program; API and ChatGPT Plus, Pro, Business, and Enterprise access stated to follow in the coming days
- **Rollout status:** Limited rollout / staged release; not yet generally available
- **Affected plans/regions/API surfaces:** Trusted Access enterprises first; broader API plus ChatGPT Plus, Pro, Business, and Enterprise in the coming days. API support includes Responses and Chat Completions, but tool calling requires the Responses API. Regional availability beyond supported OpenAI regions was not specified in the launch materials reviewed.
- **API price:** Standard text pricing: $10.00 / 1M input tokens, $1.00 / 1M cached input tokens, $12.50 / 1M cache writes, $50.00 / 1M output tokens. Prompts above 272K input tokens are billed at 2x input/cache rates and 1.5x output for the full request. Batch and Flex are 50% of Standard; Fast mode is 2x applicable rates.
- **Previous comparison baseline:** GPT-5.6 Sol and prior OpenAI Deep Drift runs
- **Official sources:**
  1. https://developers.openai.com/api/docs/changelog
  2. https://developers.openai.com/api/docs/models/gpt-6-astra
  3. https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- **Evidence strength:** High — primary OpenAI changelog, model documentation, and ChatGPT release notes
- **Retest priority:** Critical

## What changed

OpenAI released GPT-6 Astra on September 3, 2026 as its new flagship model for complex end-to-end work. OpenAI describes Astra as its most capable model for reasoning, coding, computer use, research, and document creation. The documented model has a 1,050,000-token context window, 128,000 maximum output tokens, an April 30, 2026 knowledge cutoff, image input, and reasoning effort levels `low`, `medium`, `high`, `xhigh`, and `max`.

Astra also adds material controls for long-running agent work in the Responses API: asynchronous tool calling, mid-turn steering over WebSockets, and the ability to change reasoning effort during a conversation while preserving the cached prompt prefix. OpenAI's ChatGPT release notes additionally state that Astra can create documents, spreadsheets, and presentations that follow templates and instructions and can adapt when requirements or direction change.

The release is staged rather than general: Trusted Access enterprises receive the first rollout, while broader API and ChatGPT Plus, Pro, Business, and Enterprise access is planned over the following days.

## Official fact vs inference

### Official fact
- GPT-6 Astra was released on 2026-09-03 and is OpenAI's new flagship model.
- It is initially rolling out to enterprises in OpenAI's Trusted Access Program, with broader API and Plus/Pro/Business/Enterprise access planned over the coming days.
- The model supports a 1,050,000-token context window and up to 128,000 output tokens.
- OpenAI positions it for complex reasoning, coding, computer use, research, and document creation.
- Astra supports `low`, `medium`, `high`, `xhigh`, and `max` reasoning effort levels; it does not support `none`.
- Tool calling requires the Responses API.
- The Responses API now supports async tool calling, mid-turn steering, and changing reasoning effort mid-conversation for Astra workflows.
- Standard API pricing is $10/M input, $1/M cached input, $12.50/M cache writes, and $50/M output, with a higher long-context rate above 272K input tokens.
- OpenAI states that ChatGPT Astra can create documents, spreadsheets, and presentations from templates/instructions and adapt when requirements change.

### Deep Drift inference
- Existing OpenAI comparisons against GPT-5.6 Sol are now potentially stale for frontier reasoning, long-horizon task completion, tool recovery, document production, and context retention.
- Astra's 1.05M context window makes it a direct candidate for Deep Drift's dispersed-instruction, compiler, project-history, and long-document stress tests, but a larger window is not proof that it can retrieve or correctly prioritize its own historical chats or cross-project memory.
- Async tool calling and mid-turn steering may materially improve multi-step execution without repeated user restatement; this requires behavioral testing rather than accepting the product claim.
- The launch does **not** establish that Astra can independently inspect all prior ChatGPT history, index arbitrary project/folder history, or possess account-wide persistent memory. Those remain separate Deep Drift tests.
- Because Astra is substantially more expensive than GPT-5.6 Sol on standard API token rates, raw capability rankings should be accompanied by cost-normalized comparisons.

## Why this matters to Deep Drift

A new OpenAI flagship invalidates the assumption that GPT-5.6 Sol remains the correct OpenAI frontier baseline. Deep Drift comparisons involving reasoning depth, long-context compilation, agent autonomy, connected-tool execution, document artifact fidelity, and recovery after changed instructions should be rerun once Astra access is available on the same account surface used for the earlier baseline.

The most important distinction is between **large supplied context** and **true historical continuity**. Astra's million-token context and agent controls could make it look dramatically more coherent while still having no privileged access to earlier chats or projects unless those are explicitly supplied. Deep Drift should therefore test both layers separately.

## Retest recommendation

- **Existing tests to rerun:**
  - Full OpenAI comparative sweep: GPT-6 Astra vs GPT-5.6 Sol under identical prompts.
  - Long-context instruction retention and contradiction resolution.
  - BMHS/Deep Drift compiler test with dispersed protocols placed across early, middle, and late context positions.
  - Multi-document provenance and source-boundary preservation.
  - Long-running agent workflow with tool failures, retries, and changed requirements.
  - Mid-task correction test: alter requirements during execution and score whether the model preserves valid completed work while revising only affected parts.
  - Artifact production test: document, spreadsheet, and presentation created from a fixed template and chaotic instruction bundle.
  - Connected-tool state retention across a long workflow.
  - Cost-normalized reasoning and artifact-production comparison against GPT-5.6 Sol.

- **Additional tests to add:**
  - **DD-ASTRA-01 — Supplied Context vs Historical Memory Boundary:** ask Astra to identify information present only in prior chats/projects but not supplied in the current context, then separately provide exported history and compare. This distinguishes account-wide memory from large-context reconstruction.
  - **DD-ASTRA-02 — Million-Token Needle / Protocol Priority Test:** distribute mutually dependent Deep Drift/BMHS instructions across a very large context and score retrieval, precedence, provenance, and hallucinated continuity.
  - **DD-ASTRA-03 — Mid-Turn Steering Integrity Test:** inject a requirement change while an agent workflow is running; measure whether completed unaffected work survives and whether provenance remains intact.
  - **DD-ASTRA-04 — Async Tool State Test:** allow external tools to finish asynchronously and score whether Astra correctly reconciles late results without duplicating work or dropping state.
  - **DD-ASTRA-05 — Artifact Template Fidelity Test:** give fixed DOC/spreadsheet/presentation templates plus chaotic user instructions and compare structural fidelity, instruction interpretation, and revision stability against GPT-5.6 Sol.

- **Variables to hold constant:**
  - Same Deep Drift prompt corpus and protocol versions.
  - Same account/plan whenever possible.
  - Same region and client surface.
  - Same enabled tools/connectors and permissions.
  - Same source files and reference images.
  - Same reasoning-effort level for matched comparisons; record effort explicitly.
  - Same temperature/top-p assumptions where supported; note that Astra does not expose custom temperature/top-p.
  - Same retry policy, maximum wall-clock allowance, and human interventions.
  - Record whether the run uses ChatGPT, Responses API, or Chat Completions because tool behavior is not equivalent across surfaces.

- **Likely confounders:**
  - Staged availability may mean early Trusted Access behavior differs from later consumer rollout.
  - Different reasoning-effort levels can materially change output quality and token cost.
  - Responses API has capabilities that Chat Completions does not, especially tool calling and new long-running controls.
  - Long-context requests above 272K tokens have different pricing, so simple token-cost comparisons can mislead.
  - Product-level ChatGPT memory/search features are distinct from base model context-window capacity.
  - Safety monitoring and Trusted Access restrictions may alter tool execution relative to previous models.

## Comparative dimensions affected

- [ ] Memory / continuity — **not established by launch; retest required**
- [ ] Own-chat-history retrieval — **not established by launch; retest required**
- [ ] Cross-chat / project / folder retrieval — **not established by launch; retest required**
- [x] Indexing / compilation
- [x] Context / reasoning
- [x] Tools / agents
- [ ] Image generation — Astra can invoke image-generation tools, but this launch is not itself a new image-model release
- [ ] Image editing — not established as materially changed
- [ ] Visual identity / personality fidelity — no official evidence of a material change in this launch
- [x] API pricing
- [x] Subscription packaging / rollout
- [x] Usage limits / access / regions

## Sources

1. OpenAI API Changelog — September 3, 2026: https://developers.openai.com/api/docs/changelog
2. OpenAI GPT-6 Astra model documentation: https://developers.openai.com/api/docs/models/gpt-6-astra
3. ChatGPT Release Notes — Introducing GPT-6 Astra: https://help.openai.com/en/articles/6825453-chatgpt-release-notes

## Deep Drift decision

**Retest as soon as Astra becomes available on the same ChatGPT/API access tier used for the existing OpenAI baseline.** Treat this as a new frontier baseline, but do not infer historical-memory or cross-project retrieval capability from the million-token context window alone.