# OpenAI — ChatGPT — Memory sources and past-chat retrieval upgrade

- **Detected:** 2026-09-04 14:29 Asia/Jakarta
- **Announcement date:** 2026-05-05
- **Release/availability date:** 2026-05-05 for initial Plus/Pro rollout; subsequent Business/Enterprise rollout followed in June 2026
- **Rollout status:** staged rollout / expanded availability
- **Affected plans/regions:** Initial improved retrieval for ChatGPT Plus and Pro; memory-source visibility across consumer plans. Business rollout followed, with Enterprise early-access controls. Availability and connected-source behavior depend on plan, region, app connection, and workspace settings.
- **API surfaces:** ChatGPT product experience; this is not documented as a general API-model memory primitive.
- **Official source:** OpenAI ChatGPT Release Notes, May 5, 2026; ChatGPT Business Release Notes, June 25, 2026; ChatGPT Enterprise & Edu release notes for enterprise rollout controls.
- **Pricing before/after:** No separate surcharge announced for the memory upgrade itself; normal plan pricing and connected-app eligibility apply.
- **Evidence strength:** High — primary OpenAI release documentation
- **Retest priority:** Critical

## What changed

OpenAI materially expanded ChatGPT's continuity layer. For Plus and Pro users, ChatGPT can better pull relevant context from prior chats, saved memories, and, where available, previously stored files and a connected Gmail account. OpenAI also states that ChatGPT became faster at searching past conversations to locate relevant context.

The same release introduced **memory sources**, exposing at least part of the provenance behind personalized answers. Users can inspect relevant saved memories, past chats, and custom instructions, and eligible Plus/Pro users may also see referenced Library files and connected Gmail messages. Users can correct, delete, or mark sources as irrelevant.

OpenAI later extended improved memory to Business, where ChatGPT can use relevant context from past chats to keep memory current instead of relying only on manually saved details. Business users can review a memory summary and inspect sources beneath personalized answers. Enterprise rollout added workspace-level controls and an early-access period. Project-only memory remains compartmentalized: it does not pull memories or conversations from outside that project.

## Official fact vs inference

### Official fact

- OpenAI says ChatGPT can retrieve relevant context from past chats more effectively for Plus and Pro users.
- OpenAI says ChatGPT is faster at searching past conversations for relevant context.
- The memory layer can also draw, where available and permitted, from saved memories, Library files, connected Gmail, and custom instructions.
- Memory Sources exposes provenance for at least some personalized context and lets users correct, delete, or mark a source as irrelevant.
- Business received a related improved-memory rollout using relevant past-chat context.
- Project-only memory is explicitly contained within the project and does not use outside-project memories or conversations.
- OpenAI notes that memory sources may not show every factor shaping a response.

### Deep Drift inference

This is not merely a larger context window. It is a retrieval-and-continuity architecture layered above the model session. Therefore earlier Deep Drift results that characterized ChatGPT as unable to find or use its own prior conversation history without manual re-feeding may be stale for eligible plans and surfaces.

The important unresolved question is **retrieval competence**, not the existence of the feature. OpenAI's product documentation confirms that retrieval can occur, but does not prove that ChatGPT can reliably locate a specific historical node inside a large, messy corpus, preserve chronology, distinguish similarly named projects, compile dispersed work, or avoid importing the wrong memory. That is precisely where Deep Drift testing should bite.

The inclusion of files and connected Gmail also creates a source-boundary problem: a correct-looking answer may be assembled from saved memory, a prior chat, a Library file, Gmail, or a mixture. Provenance UI improves inspectability, but OpenAI explicitly states that the source view may be incomplete.

## Why this matters to Deep Drift

This change directly targets one of the central Deep Drift failure classes: the machine appearing highly capable inside a single conversation while behaving cognitively amputated when asked to retrieve its own earlier work.

Previous comparative tests involving "find the earlier chat," "continue the prior project without re-uploading it," "locate the protocol I already built," "compile all historical nodes," and "do not mix similarly named projects" must now be rerun on the updated ChatGPT memory stack.

It also changes fair comparison against Claude memory/search, Grok persistent-agent continuity, Gemini workspace/context systems, and DeepSeek's currently more session/API-centric continuity. A vendor should no longer receive credit merely for claiming memory; Deep Drift must distinguish retrieval scope, provenance, boundary control, and compilation accuracy.

## Retest recommendation

- **Existing tests to rerun:**
  - Own-chat-history retrieval: locate a specific earlier conversation from a deliberately ambiguous clue.
  - Historical-node precision: retrieve the correct version of a protocol when multiple similarly named versions exist.
  - Cross-chat compilation: synthesize dispersed instructions from several prior chats without re-feeding them.
  - Project-boundary isolation: test whether project-only memory excludes outside context while default memory can use eligible external context.
  - Source attribution: inspect whether memory-source citations identify the actual historical chat/file/email used.
  - Correction precedence: correct a previously remembered fact and test whether the newer correction consistently wins.
  - Deletion behavior: delete or mark a historical source irrelevant, then test whether it stops influencing answers.
  - Connected-source discrimination: ask a question whose answer exists differently in a prior chat, Library file, and Gmail, and test whether ChatGPT identifies which source it used.
  - Long-history recall under noise: seed many irrelevant conversations and measure retrieval precision for a single target node.
  - Compilation without node mixing: request a corpus-wide synthesis while requiring preservation of project/version boundaries.

- **Additional test to add:** `DD-OMRI-01 — OpenAI Memory Retrieval Integrity`
  1. Create three similarly named projects or workstreams with overlapping terminology.
  2. Place one unique fact, instruction, and artifact reference in each.
  3. Add one conflicting correction later in time.
  4. Ask ChatGPT from a fresh chat to retrieve each node by indirect description rather than title.
  5. Record whether retrieval is exact, approximate, fabricated, or contaminated by another node.
  6. Inspect memory-source provenance when exposed.
  7. Repeat with default memory and project-only memory.
  8. Repeat after deleting one source and after marking another source irrelevant.
  9. Repeat with Gmail and Library connected, then disconnected.
  10. Compare success rate, false retrieval rate, provenance completeness, and correction precedence.

- **Variables to hold constant:**
  - Account and plan tier
  - Region
  - ChatGPT surface (web/mobile)
  - Model selected
  - Memory enabled/disabled state
  - Default-memory vs project-only-memory setting
  - Connected Gmail state
  - Library availability and file set
  - Prompt wording
  - Number and similarity of competing historical nodes
  - Time elapsed between source creation and retrieval test

- **Likely confounders:**
  - Staged rollout differences between accounts or regions
  - Model changes independent of the memory layer
  - Hidden retrieval-ranking updates
  - Memory-summary compression versus raw historical retrieval
  - Incomplete provenance display
  - Workspace-admin settings on Business/Enterprise
  - Project-only compartment rules
  - Search/index latency after newly created or deleted chats/files
  - Connected-app permissions and sync freshness

## Comparative dimensions affected

- [x] Memory / continuity
- [x] Own-chat-history retrieval
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

## Deep Drift status

**Previous ChatGPT continuity baselines should be treated as potentially stale for eligible plans.** The feature is officially real; its reliability, granularity, cross-source provenance, and resistance to historical-node contamination remain unproven until retested.

## Sources

1. OpenAI, **ChatGPT — Release Notes**, May 5, 2026: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
2. OpenAI, **ChatGPT Business — Release Notes**, improved memory rollout: https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes
3. OpenAI, **ChatGPT Enterprise & Edu — Release Notes**, enterprise memory controls and project-only boundary documentation: https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes
