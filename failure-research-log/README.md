# ATØR INSTITUTE | FAILURE RESEARCH LOG

This directory preserves machine failures as research evidence.

A failure is not reduced to “the tool did not work.” Each record examines the full chain:

~~~text
USER INTENT
→ CONTEXT
→ CONSTRAINTS
→ TOOL ROUTING
→ EXECUTION
→ OUTPUT
→ VERIFICATION
→ HUMAN CORRECTION BURDEN
→ UNRESOLVED STATE
~~~

The archive records both technical failure and assistant-behavior failure. A blocked tool call, an attractive but structurally wrong artifact, a fabricated causal explanation, and labor transferred back to the user are different failure classes. They must not be collapsed into one polite apology.

## Evidence rules

Each report must distinguish:

- **Fact:** directly visible in the transcript, artifact, connector result, or returned error.
- **User observation:** reported directly by D-ORIGIN.
- **Inference:** a reasoned interpretation that is not confirmed by internal system evidence.
- **Unknown:** a condition the available evidence cannot resolve.
- **Correction burden:** additional work the user performed because the system failed.
- **Verification state:** whether the requested end result actually exists.

No report may claim that an action was completed without returned evidence.

No opaque error category may be translated into a specific internal cause unless the system exposes that cause.

A visually polished artifact that violates the governing constraint is recorded as a failed artifact.

## Log index

| Document ID | Date | System | Failure focus | Final state |
|---|---|---|---|---|
| [ATOR-FRL-OPENAI-2026-001](./2026-09-04-ATOR-FRL-OPENAI-2026-001-minnie-dollar-art-image-generation-failure.md) | 2026-09-04 | ChatGPT Work / image generation | Minnie Mouse identity substitution, repeated output moderation, unsupported diagnosis, and human correction burden | Requested image unresolved |

## Standard failure schema

Future entries should record:

1. raw itch;
2. original request;
3. non-negotiable constraints;
4. expected result;
5. observed result;
6. exact execution chronology;
7. returned tool evidence;
8. successful-but-wrong artifacts;
9. user correction trace;
10. failure classification;
11. verified facts;
12. inference and unknowns;
13. human orchestration burden;
14. product and workflow risks;
15. required correction;
16. regression test;
17. final verification state;
18. provenance.

## Institutional purpose

The purpose of this archive is not decorative complaint.

It is to expose where model intelligence, product surfaces, tools, moderation, permissions, memory, and verification fail to assemble into dependable intelligence-in-action.

The human should remain the author and final judge.

The human should not be forced to become the missing middleware.

---

**D-ORIGIN | ATØR INSTITUTE**  
**Failure Research Log | Deep Drift Research**  
**Tangan yang bekerja harus punya nama.**
