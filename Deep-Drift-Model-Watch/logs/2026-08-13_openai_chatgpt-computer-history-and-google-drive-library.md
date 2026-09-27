# OpenAI — ChatGPT Computer History and Google Drive in Library — Persistent history and connected retrieval

- **Detected:** 2026-09-27 19:54 Asia/Jakarta
- **Provider:** OpenAI / ChatGPT
- **Product/model:** ChatGPT Computer History; Google Drive in Library
- **Exact change:** OpenAI introduced Computer History for macOS, allowing ChatGPT and Codex to reference selected activity from apps and websites so users can continue work without re-explaining it. OpenAI also brought Google Drive into Library, allowing connected Drive files and folders to be browsed from Library and used across chats; selected authorized files can be updated directly.
- **Announcement date:** 2026-08-13
- **Release/availability date:** 2026-08-13 staged rollout
- **Rollout status:** Staged rollout
- **Affected plans/regions:** Computer History: Pro, Business, Enterprise users on macOS; not currently available in EEA, UK, or Switzerland; off by default, with admin approval for Business/Enterprise. Google Drive in Library: Plus, Pro, Enterprise, Edu, Healthcare, and Business web users in Chat and Work toggles; Shared Drives initially excluded.
- **Official source(s):** OpenAI ChatGPT Release Notes, August 13, 2026.
- **Pricing before/after:** No new price change.
- **Evidence strength:** High
- **Retest priority:** Critical

## What changed

Computer History creates a new product-layer continuity source: selected interaction events from applications and websites can be referenced later. OpenAI states it does not record screenshots, screen recordings, microphone input, or system audio, and private browsing is excluded.

Google Drive integration expands Library from uploaded content to a connected external corpus. Users can browse Drive files/folders, @mention files, keep Docs/Sheets/Slides beside the conversation, select folders, and ask ChatGPT to work across their files. Where authorized and supported, source files can be updated directly.

## Official fact vs inference

### Official fact
- Computer History is available in the macOS ChatGPT app for Pro, Business, and Enterprise users, off by default.
- It can reference selected app/website interaction events.
- It is not currently available in the EEA, UK, or Switzerland.
- Google Drive in Library supports files and folders shared directly with the user and My Drive.
- Shared Drives were initially excluded.
- Supported web plans include Plus, Pro, Enterprise, Edu, Healthcare, and Business.
- Connected Drive files can be used across chats and some can be edited when authorized.

### Deep Drift inference
- These changes move ChatGPT closer to persistent external-history retrieval and contextual continuity rather than session-only context.
- A prior comparison that treated ChatGPT as having access only to supplied files can now materially underestimate or misattribute behavior.
- Computer History may appear as “memory” even though it is a selected event log; provenance must therefore distinguish event retrieval from conversational memory.

## Why previous Deep Drift results may now be stale

Tasks involving “continue what I was doing” can now be answered using product-layer event history or connected Drive retrieval, without the user restating prior work. This changes the effective information boundary and can alter both apparent memory and tool-use performance.

Regional, plan, and admin gating are essential controls. A U.S. Pro run with Computer History enabled is not directly comparable to a UK run or an account with the feature disabled.

## Retest recommendation

- **Existing test(s) to rerun:**
  - Own-history retrieval tests.
  - Cross-session continuity tests.
  - Project/folder retrieval and provenance.
  - Connected-data retrieval.
  - Long-running task resumption.
  - Plan/region entitlement tests.
- **Additional test to add:**
  - **Computer History source-boundary test:** place unique canary facts in current chat, app interaction history, Drive, and nowhere else; test retrieval and require source attribution.
  - **Drive folder compilation test:** populate a folder with dispersed project documents and ask ChatGPT to synthesize across them, verifying file-level provenance.
  - **Revocation test:** remove Drive access and/or pause Computer History, then verify stale data disappears from subsequent retrieval.
- **Variables to hold constant:** account/plan; region; macOS/app version; feature toggles; Drive corpus; permissions; model; prompt; session gap; device; language; retry policy.
- **Likely confounders:** indexing latency; cached retrieval; background ingestion delay; product-side summarization; regional gating; admin policies; file permissions; source updates between sessions.

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

## Sources

1. OpenAI ChatGPT Release Notes, August 13, 2026.
