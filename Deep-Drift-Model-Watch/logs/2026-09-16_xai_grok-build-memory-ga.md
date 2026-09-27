# xAI — Grok Build — Persistent project memory

- **Detected:** 2026-09-27 19:54 Asia/Jakarta
- **Provider:** xAI
- **Product/model:** Grok Build
- **Exact change:** Grok Build added persistent project memory. It records project conventions, decisions, and durable facts in background-written notes and reads relevant notes in later sessions before working on related code. Memory is scoped per project plus a global preference scope. A `/memory` interface can inspect notes and `/dream` organizes observations into topic files.
- **Announcement date:** 2026-09-16
- **Release/availability date:** 2026-09-16; generally available according to the Grok Build changelog
- **Rollout status:** GA
- **Affected plans/regions:** Grok Build users on supported web/mobile/CLI surfaces; official page did not specify a complete region matrix.
- **Official source(s):** xAI, “Memory in Grok Build”; Grok Build Changelog.
- **Pricing before/after:** No new price change stated.
- **Evidence strength:** High
- **Retest priority:** Critical

## What changed

Grok Build now carries conventions, decisions, and project facts from one session to the next. xAI documents that notes are written in the background and are read at the beginning of later related work. The memory system distinguishes workspace/project notes from global preferences and excludes some classes of information, including secrets and temporary task state, according to the product description.

## Official fact vs inference

### Official fact
- Persistent memory is now available in Grok Build.
- Notes are written in the background and read in later sessions.
- Memory includes project-scoped and global-scoped notes.
- `/memory` exposes the stored notes and `/dream` organizes recent observations.
- Current conversation instructions take precedence over stored notes.

### Deep Drift inference
- This is a material persistent-memory and continuity change for an agentic coding product.
- Prior Grok Build tests that ended at session termination may no longer measure the product's current behavior.
- The separation between model context and stored notes creates a new provenance boundary that should be tested explicitly.

## Why previous Deep Drift results may now be stale

A multi-session coding task can now inherit durable project knowledge without the user re-supplying it. This changes task completion, consistency, error recovery, and user-effort measurements. It can also create new risks of stale or incorrectly scoped memory influencing later sessions.

This feature is especially relevant to Deep Drift's distinction between model-native memory, product-layer memory, and retrieval from project artifacts.

## Retest recommendation

- **Existing test(s) to rerun:**
  - Own-chat-history / cross-session continuity suite where Grok Build is included.
  - Project/workspace retrieval tests.
  - Coding workflow resumption after session termination.
  - User-preference persistence tests.
  - Provenance and stale-context tests.
- **Additional test to add:**
  - **Memory boundary corpus:** seed unique facts into global memory, project memory, source files, current chat only, and excluded secret/task-state categories; test retrieval after new sessions and project switches.
  - **Memory correction test:** change a convention, then verify whether old notes are superseded rather than conflicting.
  - **Deletion test:** remove a memory note, start a new session, and confirm that deleted state is no longer used.
- **Variables to hold constant:** model/version; project; repository; memory on/off; prompt; note corpus; session gap; user account; tool set; region; CLI/web surface.
- **Likely confounders:** background note-writing latency; project indexing; file contents duplicating memory facts; hidden system prompts; memory deletion propagation; surface-specific behavior.

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
- [ ] Subscription packaging
- [x] Usage limits / access / regions

## Sources

1. xAI, “Memory in Grok Build,” 2026-09-16.
2. Grok Build Changelog, v1.0.34 and v1.0.35, 2026-09-16.
