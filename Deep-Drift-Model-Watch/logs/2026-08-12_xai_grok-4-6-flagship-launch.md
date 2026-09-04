# xAI / SpaceXAI — Grok 4.6 — Flagship launch

- **Detected:** 2026-09-04 22:08 Asia/Jakarta
- **Provider:** xAI / SpaceXAI
- **Product/model:** Grok 4.6 (`grok-4.6`)
- **Announcement date:** 2026-08-12
- **Release/availability date:** 2026-08-12
- **Rollout status:** Generally available through xAI API; available in Cursor and Grok Build at launch; subsequently expanded to GitHub Copilot, Amazon Bedrock, Gemini Enterprise Agent Platform / Model Garden, Microsoft Foundry, OpenRouter, Vercel, and Cloudflare.
- **Affected plans/regions/API surfaces:** xAI API; Grok Build; Cursor; partner/cloud model catalogs. Native xAI API documentation lists `us-east-1` and `us-west-2` clusters. Consumer-plan access is exposed through current Grok pricing/plan packaging, including SuperGrok access to Grok 4.6.
- **Official source(s):**
  1. https://x.ai/news/grok-4-6
  2. https://docs.x.ai/developers/models/grok-4.6
  3. https://x.ai/api
  4. https://x.ai/news/grok-4-6-github-copilot
  5. https://x.ai/news/grok-4-6-amazon-bedrock
  6. https://x.ai/news/grok-4-6-vertex-ai
  7. https://x.ai/news/grok-4-6-microsoft-foundry
- **Pricing before/after:** Grok 4.6 native API pricing starts at **$2.00 / 1M input tokens**, **$0.50 / 1M cached input tokens**, and **$6.00 / 1M output tokens**. xAI states a fast variant is available at approximately 2× these rates. This entry does not claim a direct price increase/decrease versus Grok 4.5 because xAI's launch announcement does not present a like-for-like prior-price delta.
- **Context window:** 500,000 tokens.
- **Reasoning controls:** configurable effort levels documented as low, medium, high, and xhigh.
- **Modalities:** text and image input; text output.
- **Evidence strength:** High — primary xAI launch announcement and current official model/API documentation.
- **Retest priority:** Critical

## What changed

xAI released Grok 4.6 on 2026-08-12 as its latest flagship model, explicitly targeting **long-running agents**, more ambitious **interactive and visual work**, coding, research, knowledge work, and multi-step application-building tasks. xAI says the model underwent a longer supplemental training run than Grok 4.5 and further agentic RL across coding, knowledge work, CAD, web development, kernel optimization, and related environments.

The launch materially changes the xAI baseline for Deep Drift because Grok 4.6 is not merely a renamed endpoint. It brings a 500K-token context window, configurable reasoning effort, stronger long-horizon agent behavior, stronger first-pass visual/interactive work, more self-testing/verification behavior on extended trajectories, and broad deployment across xAI and major partner surfaces.

At launch, xAI made Grok 4.6 available in Cursor and Grok Build and through the xAI API, with additional partner distribution following shortly afterward. xAI's current API documentation lists the model as its frontier model for coding, agentic tasks, and knowledge work.

## Official fact vs inference

### Official fact

- xAI announced and released Grok 4.6 on 2026-08-12.
- xAI describes Grok 4.6 as its latest flagship / frontier model for coding, agentic tasks, and knowledge work.
- The model has a **500,000-token context window**.
- It supports configurable reasoning effort levels including **low, medium, high, and xhigh**.
- It accepts **text and image** input and produces text output.
- xAI states Grok 4.6 was trained with particular emphasis on long-running agents and more ambitious interactive and visual work.
- xAI reports stronger long-trajectory behavior, including more self-testing and verification before continuing.
- xAI reports stronger first-pass results on visual and interactive projects than Grok 4.5.
- Native API pricing is $2/M input, $0.50/M cached input, and $6/M output, with higher-context pricing applying beyond documented thresholds.
- Grok 4.6 was available through xAI API, Cursor, Grok Build, and later major cloud/model-distribution partners.

### Deep Drift inference

- Any Grok 4.5 or earlier Deep Drift ranking involving long-horizon tool execution, coding-agent stability, visual reasoning, multi-step artifact creation, or context retention should now be treated as potentially stale.
- xAI's claim of improved visual/interactive project performance does **not** by itself prove improved generative-image identity fidelity, tattoo placement, or edit preservation. Those remain empirical Deep Drift questions.
- A 500K context window is not equivalent to persistent memory or access to historical chats. Long supplied context and cross-session continuity must remain separate test classes.
- Improved self-testing may reduce silent task failure, but it may also increase latency, token consumption, or variance across reasoning-effort settings. Those are confounders to measure rather than assume away.

## Capability classes affected

- Long-context reasoning
- Multi-step / long-running agent execution
- Coding and repository-scale work
- Tool use and autonomous recovery
- Interactive application generation
- Visual reasoning / image-input understanding
- Self-testing and verification
- API pricing / cost normalization
- Partner-surface and deployment availability

## Why previous Deep Drift results may now be stale

Previous Grok comparisons performed on Grok 4.5, Grok 4 Fast, or earlier xAI models no longer represent xAI's current flagship architecture. The most vulnerable historical results are those involving:

1. sustained multi-step work across long trajectories;
2. recovery after failed tool or coding steps;
3. large-context instruction retention;
4. broad-to-specific application generation from underspecified prompts;
5. visual interpretation and UI/design fidelity;
6. reasoning-effort versus latency/cost tradeoffs;
7. API-to-partner-surface consistency;
8. autonomous verification before completion.

## Retest recommendation

### Existing tests to rerun

- **Full flagship comparative sweep:** Grok 4.6 vs the current OpenAI, Anthropic, Gemini, and DeepSeek flagship baselines.
- **Long-context stability:** dispersed instructions, corrections, and contradictory requirements across 100K / 250K / 500K supplied-context tiers.
- **Instruction precedence:** later correction versus earlier canon, especially when instructions are separated by large token distances.
- **Agent recovery:** inject a failed tool call, malformed intermediate artifact, or incorrect assumption and measure whether Grok 4.6 detects and repairs it without redundant prompting.
- **Repository/codebase continuity:** multi-file changes, test writing, regression repair, and verification across a sustained session.
- **Chaotic prompt → structured artifact:** transform disordered user instructions into a coherent application/document/work artifact while preserving non-negotiable constraints.
- **Visual interpretation:** reference-image analysis, layout/geometry recognition, screenshot reasoning, and comparison against explicit source constraints.
- **Cross-surface parity:** same task through native xAI API, Grok Build/Cursor where available, and at least one partner distribution surface.
- **Cost-normalized reasoning:** compare low/medium/high/xhigh effort under equivalent prompt, context, and output constraints.

### New test to add

**DD-XAI-LHAV-01 — Long-Horizon Agent Verification Test**

Purpose: determine whether Grok 4.6's advertised long-running-agent and self-verification improvements survive realistic Deep Drift workloads rather than benchmark harnesses.

Protocol:
1. Give Grok 4.6 a 12–20 step task containing research, code/file operations, visual-reference interpretation, and artifact verification.
2. Seed one recoverable false assumption and one tool failure mid-run.
3. Require a final provenance map listing which evidence supported each major decision.
4. Repeat at low, medium, high, and xhigh reasoning effort.
5. Measure completion rate, recovery rate, unprompted self-checks, false-confidence rate, state loss, latency, token use, and final-artifact fidelity.

### Variables to hold constant

- Exact prompt and input files
- Reference-image set and ordering
- Account / subscription tier
- Region and API cluster where observable
- Tool permissions and connector availability
- Context length bucket
- Reasoning effort setting for paired comparisons
- Temperature / sampling controls where exposed
- Maximum output length
- Partner surface and model slug
- Date/time of test and API pricing schedule
- Number of retries

### Likely confounders

- Different agent harnesses in Grok Build, Cursor, partner platforms, and native API
- Tool availability and hidden system prompts differing by surface
- Reasoning-effort setting changing latency and token consumption
- Higher-context pricing beyond documented context thresholds
- Dynamic backend/model updates under a stable public model slug
- Partner-side rate limits or middleware
- Image-input preprocessing differences across surfaces
- xAI's reported benchmark results being harness-dependent rather than directly reproducible in Deep Drift

## Comparative dimensions affected

- [ ] Memory / continuity
- [ ] Own-chat-history retrieval
- [ ] Cross-chat / project / folder retrieval
- [X] Indexing / compilation
- [X] Context / reasoning
- [X] Tools / agents
- [ ] Image generation
- [ ] Image editing
- [X] Visual identity / personality fidelity — **retest as an inference question only; not an official generative-image claim**
- [X] API pricing
- [X] Subscription packaging
- [X] Usage limits / access / regions

## Deep Drift retest decision

**Priority: CRITICAL.** Grok 4.6 is a flagship replacement with substantive changes in long-horizon agent behavior, context scale, reasoning control, coding, visual interaction, and verification. Earlier xAI flagship results should not be used as current comparative evidence without rerunning the core agent/context suite.

## Sources

1. xAI — Introducing Grok 4.6 — https://x.ai/news/grok-4-6
2. xAI Docs — Grok 4.6 — https://docs.x.ai/developers/models/grok-4.6
3. xAI API — current model/pricing surface — https://x.ai/api
4. xAI — Grok 4.6 in GitHub Copilot — https://x.ai/news/grok-4-6-github-copilot
5. xAI — Grok 4.6 on Amazon Bedrock — https://x.ai/news/grok-4-6-amazon-bedrock
6. xAI — Grok 4.6 on Gemini Enterprise Agent Platform — https://x.ai/news/grok-4-6-vertex-ai
7. xAI — Grok 4.6 on Microsoft Foundry — https://x.ai/news/grok-4-6-microsoft-foundry
