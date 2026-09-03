# Deep Drift Model Watch — xAI Grok Bot Persistent-Agent Continuity

**Detected:** 2026-09-04 02:28 Asia/Jakarta  
**Provider:** xAI / SpaceXAI  
**Product:** Grok Bot  
**Retest priority:** **CRITICAL**  
**Evidence strength:** **High — primary official product and design sources**

## Exact change

On September 3, 2026, xAI published an official design disclosure for Grok Bot that materially clarifies the product's persistence model. The post describes Bots as agents that persist beyond a single chat session, retain chat history, maintain presence in a Bot roster, have a computer of their own, and can begin or continue work without a new prompt. This materially strengthens the evidence for persistent continuity beyond ordinary session-scoped chat.

This is not the original product launch. Grok Bot entered early beta on August 11, 2026. The September 3 disclosure is a new official development because it confirms architectural/product behavior directly relevant to Deep Drift's memory, continuity, indexing, and autonomous-agent tests.

## Announcement date

- **Original Grok Bot launch:** 2026-08-11
- **New persistent-agent design disclosure:** 2026-09-03

## Release / availability

**Early beta**, available since 2026-08-11.

At launch, xAI stated that Grok Bot was available for:

- SuperGrok
- SuperGrok Plus
- SuperGrok Heavy
- Cursor Pro
- Cursor Pro+
- Cursor Ultra
- Cursor Teams Standard
- Cursor Teams Premium

Surfaces named by xAI: desktop and iOS. Enterprise access was waitlist-based at launch. xAI later expanded plan availability on August 21, 2026.

## Pricing / packaging

No new standalone monetary price was announced in the September 3 design disclosure.

The August 11 launch stated that Grok Bot has its **own usage allocation**, separate from normal Grok and Cursor plan usage. This packaging distinction must be recorded in comparative testing because Bot execution may not consume the same quota pool as ordinary Grok chat.

## Official sources

1. xAI / SpaceXAI — **Designing Grok Bot for a world of persistent agents**, published 2026-09-03: https://x.ai/news/designing-grok-bot
2. xAI / SpaceXAI — **Introducing Grok Bot**, published 2026-08-11: https://x.ai/news/introducing-grok-bot
3. xAI / SpaceXAI news index / plan expansion reference: https://x.ai/news

## Official fact

xAI explicitly states or demonstrates that:

- Grok Bots are designed to persist beyond a single session.
- The interface moves from isolated chat history toward a persistent Bot roster and presence model.
- Each Bot has its own computer and can browse the web, work with files, and run software.
- Work can begin or continue without a fresh user prompt.
- Bots remember conversations and can learn how the user prefers work to be done.
- A Bot can pick up work from previous conversations.
- Bots can independently message other Bots and share context in threads.
- Multiple Bots can coordinate in group chats.
- A demonstrated workflow can be saved as a routine and rerun later without the user re-explaining the process.
- The September 3 design disclosure describes practical limits of roughly 50 Bots per account and six Bots per group chat.

## Deep Drift inference

These claims make Grok Bot one of the clearest current commercial attempts at a persistent-agent architecture rather than a conventional session-scoped chatbot.

However, **persistent agent state is not automatically equivalent to full account-wide autobiographical memory or unrestricted access to all prior Grok chats**. Deep Drift must test the actual retrieval boundary. The product may persist state only inside a Bot, its threads, routines, project context, or explicitly connected tools. Vendor language such as “remember conversations” and “pick work back up” must not be inflated into proof that the system can inspect every historical chat, folder, or user archive.

## Capability classes affected

- Memory and continuity
- Own-history retrieval
- Cross-session continuity
- Cross-thread context sharing
- Persistent user-preference learning
- Routine / workflow memory
- Autonomous multi-step execution
- Tool and app continuity
- Multi-agent coordination
- Background / proactive execution
- Indexing and provenance boundaries
- Packaging / usage normalization

## Why previous Deep Drift results may now be stale

Any Deep Drift comparison that treated Grok as predominantly session-scoped is now incomplete if Grok Bot is available on the tested plan. The product creates a separate persistent-agent surface with materially different continuity, autonomy, and memory claims.

Comparisons against ChatGPT Projects/Memory/Work, Claude persistent workspaces or agent surfaces, Gemini workspace/project memory, and DeepSeek session history should therefore distinguish **ordinary chat** from **persistent delegated-agent mode**.

## Existing tests to rerun

### 1. Own-chat-history retrieval
Give a Bot a unique instruction or artifact, end the session, return later through a different device/surface, and ask it to recover the instruction without re-feeding it.

### 2. Cross-session continuity
Assign a multi-stage task, interrupt it, return after a substantial delay, and test whether the Bot preserves state, pending decisions, file locations, and tool context.

### 3. Prior-conversation pickup
Deliberately abandon a thread, then test the official claim that the Bot can pick work back up from previous conversations.

### 4. User-preference learning
Correct output style or workflow repeatedly, then start a fresh task and measure whether preferences persist without explicit restatement.

### 5. Workflow learning / routine recall
Demonstrate a multi-step workflow once, allow the Bot to save it as a routine, then rerun under controlled changes and measure fidelity.

### 6. Cross-Bot context integrity
Use two or more Bots with overlapping tasks. Test whether shared context transfers accurately without contaminating unrelated information.

### 7. Tool continuity
Have the Bot work across files, websites, inboxes, and applications, then test whether it can resume after interruption without asking the user to reconstruct prior state.

### 8. Provenance boundary
Ask the Bot where a remembered fact came from: direct user instruction, prior Bot thread, another Bot, connected app, file, or inference. Measure source-boundary accuracy.

## New Deep Drift test to add

### Persistent-Agent Boundary Test (PABT-01)

**Question:** What exactly is the boundary of Grok Bot's “memory”?

Protocol:

1. Place different unique facts in ordinary Grok chat, Bot A, Bot B, a shared group chat, a connected file, and a connected app.
2. After session termination and delay, query each surface for every fact.
3. Record which facts are retrievable, inaccessible, partially reconstructed, or hallucinated.
4. Require source attribution for each retrieved fact.
5. Repeat from desktop and iOS where available.
6. Test after logout/relogin and after a new Bot is created.

This distinguishes true account-wide retrieval from Bot-local memory, thread-local state, tool-derived retrieval, or model inference.

## Variables to hold constant

- Same account and subscription tier
- Same region
- Same Grok Bot version / product surface
- Same enabled tools and connected applications
- Same prompt wording
- Same seeded facts and files
- Same delay between sessions
- Same device where possible, followed by a controlled cross-device test
- Same number of Bots in multi-agent trials

## Likely confounders

- Early-beta behavior may change without model-name changes.
- Memory may be product-layer state rather than model-native memory.
- Connected application search may be mistaken for autobiographical memory.
- Routine storage may be explicit workflow persistence rather than semantic recall.
- Cross-Bot sharing may depend on group-chat membership or project scope.
- Plan-specific quotas can change the amount of background work possible.
- A Bot's separate usage allocation complicates direct cost and repetition comparisons with ordinary Grok chat and competing products.

## Deep Drift retest recommendation

**CRITICAL:** run the memory/continuity suite before treating any older Grok comparison as current. Prioritize PABT-01, cross-session recovery, abandoned-thread pickup, provenance tracing, and cross-Bot contamination testing.

The important question is not whether xAI calls the system “persistent.” The test is whether persistence survives controlled separation of chats, Bots, devices, time, files, tools, and source boundaries without quietly substituting retrieval or hallucination for memory.
