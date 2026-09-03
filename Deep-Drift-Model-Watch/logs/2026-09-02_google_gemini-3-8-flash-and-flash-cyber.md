# Deep Drift Model Watch — Gemini 3.8 Flash / 3.8 Flash Cyber

**Detected:** 2026-09-03 22:35 Asia/Jakarta  
**Provider:** Google / Google DeepMind  
**Product/model:** Gemini 3.8 Flash; Gemini 3.8 Flash Cyber  
**Announcement date:** 2026-09-02 (global English announcement; localized Japanese post dated 2026-09-03)  
**Release/availability date:** 2026-09-02  
**Rollout status:** Gemini 3.8 Flash publicly available; Gemini 3.8 Flash Cyber released through the Fairwind Program for partners  
**Retest priority:** **Critical** for Gemini comparative baseline; **High** for cyber/agentic subtests

## Exact announced change

Google introduced Gemini 3.8 as a new Flash-generation model family. Gemini 3.8 Flash is described by Google as its most intelligent workhorse model, with significant gains over Gemini 3.7 Flash in software engineering, agentic tasks, and critical multi-step reasoning in specialized domains. Google states that 3.8 retains the same introductory API price as 3.7 Flash while improving reasoning and coding performance.

A second variant, Gemini 3.8 Flash Cyber, uses the same underlying intelligence but is optimized for cybersecurity use, including vulnerability detection and automated patching. Google says both models benefited from long-running agent loops designed to recursively evaluate and improve the base model.

## Pricing / commercial surface

**Gemini 3.8 Flash introductory API pricing:**
- Input: **US$0.75 / 1M tokens**
- Output: **US$3.75 / 1M tokens**

Google states this is the same introductory price as Gemini 3.7 Flash.

Gemini 3.8 Flash Cyber is distributed through the Fairwind Program; broad consumer/API availability and general pricing were not established in the announcement.

## Affected plans / regions / API surfaces

- Gemini 3.8 Flash: Google AI / Gemini developer surfaces where the new model is offered; exact rollout surfaces should be recorded at test time because product availability can differ between Gemini app, AI Studio, Vertex AI, and APIs.
- Gemini 3.8 Flash Cyber: partner access through the Fairwind Program rather than a normal broad public rollout.

## Official source(s)

1. Google, “Introducing Gemini 3.8 Flash and 3.8 Flash Cyber,” 2026-09-02: https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/
2. Google Japan localized announcement, dated 2026-09-03: https://blog.google/intl/ja-jp/company-news/technology/gemini-38-flash-38-flash-cyber/

## Evidence strength

**High — primary official product announcement.**

## Official fact vs Deep Drift inference

### Official fact
- Gemini 3.8 Flash is a newly released model.
- Google reports material gains over 3.7 Flash in software engineering, agentic tasks, and multi-step reasoning.
- Introductory pricing is US$0.75/M input and US$3.75/M output, unchanged from 3.7 Flash.
- Gemini 3.8 Flash Cyber is a cybersecurity-focused variant available through the Fairwind Program.
- Google explicitly describes long-running agent loops as part of the model-improvement process.

### Deep Drift inference
The release likely invalidates any comparative Deep Drift result in which Gemini 3.7 Flash or an older Flash model represented Google’s current low-cost reasoning/agentic tier. Because pricing is held constant while claimed capability rises, cost-normalized rankings are especially likely to shift. The long-running-agent claim also makes previous tests of sustained multi-step execution, recovery after failed steps, and cross-tool coherence stale enough to warrant rerunning.

The announcement does **not** establish new own-chat-history access, cross-project memory, folder retrieval, or stronger persistent personal memory. Those Deep Drift memory dimensions should therefore not be marked improved without product-level evidence or direct testing.

## Capability classes affected

- Context and reasoning
- Agentic execution
- Software engineering / coding
- Long-running task stability
- Cost-normalized model comparison
- Cybersecurity model specialization
- Reliability/recovery under multi-step workflows

## Why previous Deep Drift results may now be stale

Any Gemini comparison using 3.7 Flash or earlier as the Google reference point no longer represents the newest Flash-tier behavior. Since Google claims improved agentic and multi-step reasoning at the same price, previous conclusions about intelligence-per-dollar, agent persistence, and coding reliability can no longer be treated as current without retesting.

## Existing tests to rerun

1. **Full comparative sweep — Gemini Flash slot** against ChatGPT/OpenAI, Claude, Grok, and DeepSeek current comparable tiers.
2. **Long-context stability** with dispersed instructions and deliberately conflicting later instructions.
3. **Multi-document synthesis** with provenance requirements and instruction precedence.
4. **Agentic execution** across browser/tool chains, including deliberate tool failure followed by recovery.
5. **Compilation test**: reconstruct one Deep Drift research structure from multiple supplied documents/chunks without node mixing.
6. **Cost-normalized reasoning test** using identical prompt set and fixed token/attempt budget.
7. **Coding + visual verification test** where generated output must be checked against a provided goal/reference rather than merely produced.

## New test to add

### Recursive Agent Recovery Test
Give the model a long-running task with three planted faults: one incorrect intermediate assumption, one tool failure, and one contradictory document. Measure whether it independently detects, revises, and verifies its work rather than merely continuing from the corrupted state.

## Variables to hold constant

- Same Deep Drift prompt corpus
- Same source documents and ordering
- Same account/plan tier where possible
- Same region
- Same tool permissions
- Same interface/API surface
- Same reasoning-effort setting where configurable
- Same maximum token and retry budget
- Same scoring rubric and human evaluator

## Likely confounders

- Staged product availability across Gemini app, AI Studio, Vertex AI, and API
- Server-side model revisions without version-pinned identifiers
- Different reasoning/effort settings
- Tool permissions and connector availability
- Safety policy differences between standard Flash and Flash Cyber
- Introductory pricing may later change

## Deep Drift retest decision

**Retest now.** Gemini 3.8 Flash is a major-enough model replacement at unchanged introductory pricing that earlier Gemini Flash comparative results should be treated as historically valid but no longer current.
