# Deep Drift Research Event Log

**chat_ui_timestamp_local:** 2026-08-23 01:48 Asia/Jakarta
**timestamp_basis:** CHAT_UI_VISIBLE_TIMESTAMP
**time_precision:** exact-minute; seconds unavailable and not fabricated
**research_stream:** Deep Drift / LLM Update Watch / Artifact Provenance
**category:** collaborative generated sites / live data / versioned publication
**platform:** ChatGPT Sites
**status:** WORKING HYPOTHESIS

## Raw observation

The chat update records an OpenAI Sites change dated 20 August 2026: Sites support co-editing and versioned collaboration. An owner can invite a workspace member as editor. The editor can read live database data, change the Site, save versions, and publish changes after the owner has completed the first publication. The owner retains audience, settings, analytics, ownership, version restoration, and editor access.

The workflow therefore changes from:

`human -> AI -> generated Site`

toward:

`owner -> AI-generated Site -> human editor -> live data -> version history -> republish`

## Benchmark: Collaborative Artifact Provenance Fidelity

Can the archive reconstruct:

- whether a change came from owner or editor;
- whether it came through AI or direct editing;
- which live-data state was involved;
- which version became the publication basis;
- whether provenance survives repeated edit/publish cycles.

## Hypotheses

**H-A:** multi-actor editing increases provenance fracture unless actor, time, source, data, version, and publication state remain linked.

**H-B:** version history may already preserve enough information to reconstruct the collaboration chain.

**H-C:** the more difficult problem may be live-data temporal divergence rather than multiple editors.

**Mundane rival:** collaborative website versioning has similar provenance problems without generative AI.

## Evidence boundary

OpenAI platform behavior is separated from ATØR interpretation. **Collaborative Artifact Provenance Fidelity** and **Interface-State Divergence** are ATØR Institute constructs.

## Next test

Create a Site with live data, perform owner and editor changes, save multiple versions, change the live data between versions, publish, then restore an earlier Site state. Measure actor recovery, version-to-data matching, publication continuity, and human repair.
