# Deep Drift Research Update

## Artifact Persistence and Tool-Result Mediation Fidelity

**Research date:** 31 August 2026  
**Primary platform cluster:** ChatGPT Library now acts as a persistent artifact layer for uploaded and generated files, while Codex CLI 0.151.0 gives extensions the ability to inspect or replace MCP tool results before those results reach the model.  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-ledger creator-workflow architecture verified from first-party OpenAI documentation.

## Executive Summary

The strongest unlogged shift in this pass is the combination of two architectural moves that are easy to miss when read separately.

First, ChatGPT Library increasingly behaves like a persistent artifact substrate:

```text
UPLOAD / GENERATE FILE
-> LIBRARY
-> SEARCH / FILTER / REUSE
-> ADD TO NEW CHAT
-> DOWNLOAD
-> DELETE INDEPENDENTLY OF CHAT
```

OpenAI documents that uploaded and generated files, including documents, spreadsheets, presentations, PDFs, and images, are automatically saved to Library. A file can outlive the chat in which it appeared: deleting the chat does not delete the Library copy. Library can also surface connected Google Drive content without forcing a fresh upload, and workspace owners can separately control whether Library files are automatically referenced in responses.

Second, Codex CLI 0.151.0 adds a deeper execution hook:

```text
MCP TOOL
-> RAW TOOL RESULT
-> EXTENSION INSPECTION / REPLACEMENT
-> MODEL CONTEXT
```

Extensions can now inspect or replace MCP tool results before those results reach the model. The same release also adds configurable discovery grace periods for optional MCP servers, per-repository plugin catalog configuration, isolation of invalid project marketplaces without hiding valid plugins, model-switch/fallback fixes that preserve tool availability and reasoning effort, nested subagent token accounting, and a permission fix preventing stale Guardian classifications from authorizing actions after permission state changes.

These changes expose a new Deep Drift benchmark family:

**Artifact Persistence and Tool-Result Mediation Fidelity (APTRMF)**

Companion constructs:

- Chat-to-Library Persistence Fidelity
- Artifact/Conversation Lifecycle Separation Fidelity
- Generated-vs-Uploaded Artifact Attribution Fidelity
- Connected-Source vs Library-Copy Fidelity
- Automatic-Reference Policy Fidelity
- MCP Raw-to-Model Result Fidelity
- Extension Result-Rewrite Attribution Fidelity
- Tool-Discovery Grace Fidelity
- Plugin-Catalog Fault Isolation Fidelity
- Model-Fallback Tool-State Fidelity
- Permission-State Revalidation Fidelity
- Subagent Budget Attribution Fidelity

## Core distinctions

```text
FILE IN CHAT != FILE OBJECT IN LIBRARY
DELETE CHAT != DELETE LIBRARY FILE
LIBRARY-NATIVE FILE != CONNECTED DRIVE FILE
FILE EXISTS != FILE AUTO-REFERENCED
TOOL RETURNED != MODEL RECEIVED
SAME CONFIG != SAME DISCOVERED TOOL SET
OLD AUTHORIZATION CLASSIFICATION != CURRENT PERMISSION STATE
```

## Deep Drift requirement

> **Every persistent artifact workflow should preserve deep artifact origin, conversation/file lifecycle state, immediate and synthetic ancestry, connected-source identity, automatic-reference state, MCP server and tool identity, raw tool result, extension identity/version and transformation event, model-visible result, model/fallback state, permission profile and revalidation events, plugin-catalog health, nested execution cost, and downstream artifact/action lineage required to reconstruct both what survived and what the model actually saw.**

## Why it matters

### Memory
No stronger personal-memory primitive surfaced in this pass. The important shift is **artifact memory**: the platform retains the file object itself, separately from conversational memory.

### Skills and plugins
A Skill or plugin may now depend on MCP results that an extension transforms before the model receives them. Procedural reproducibility therefore requires middleware state, not merely Skill text and plugin version.

### Mini-app builders
No stronger standalone builder launch surfaced, but agentic mini-app runtimes increasingly contain hidden middleware between external evidence and model-visible context.

### Chat-to-document export and DOCX/PDF
Generated documents can persist in Library after their originating chat disappears, then be reused in later chats. DOCX/PDF are becoming persistent graph nodes rather than terminal exports.

### Copy-paste/export fixes
`Add from library` and connected Drive reuse remove download/re-upload loops. This is real workflow improvement, but it also removes obvious transfer events that previously served as accidental provenance markers.

## New failure classes

1. Orphaned Artifact - Library file survives but origin chat lineage is lost.
2. Generated-Origin Flattening - generated file is downloaded and re-uploaded, appearing merely uploaded.
3. Connected-vs-Copy Ambiguity - linked Drive object and local copy are treated as equivalent.
4. Automatic-Reference Opacity - user cannot tell whether a file entered context automatically or manually.
5. Raw-Tool Result Erasure - extension replacement destroys recoverability of the original tool output.
6. Middleware Citation Detachment - answer cites upstream source although middleware materially changed the evidence.
7. Discovery-Timing Tool Drift - optional MCP server misses discovery timing and a run exposes a different tool set.
8. Marketplace Cascading Failure - one invalid marketplace hides unrelated valid plugins.
9. Fallback Environment Drift - fallback model receives different tools or reasoning state.
10. Stale Authorization Reuse - old permission classification remains active after permissions change.
11. Hidden Subagent Cost - nested execution cost is not attributed to the root goal.

## Fresh category scan

| Category | Current finding |
|---|---|
| Memory | Artifact persistence is now as important as personal memory: Library files can outlive their chats. |
| Skills | Strong fresh delta: extensions can inspect/replace MCP results before model consumption. |
| Mini-app builders | No stronger new builder launch; hidden tool-result mediation is the more important runtime trend. |
| Chat-to-document export | Generated files persist independently and can be reused later. |
| DOCX / PDF generation | No new format primitive; generated documents increasingly behave as persistent reusable nodes. |
| Copy-paste / export fixes | Add from Library and connected Drive reuse eliminate download/re-upload loops. |
| Broader creator workflow | Artifact persistence is increasing at the same time that evidence paths are becoming more mediated. |

## Deep Drift Research Position

The weak description is:

> ChatGPT has a file library and Codex has better MCP extensions.

The serious description is:

> OpenAI is separating artifact persistence from conversation persistence while inserting programmable middleware between external tool results and model-visible evidence. A creator's output can survive the chat that produced it while the model's evidence can differ from the raw evidence the external system returned.

The forensic question is therefore no longer only:

> Did the model hallucinate?

It is also:

> **Did the model hallucinate, or did the infrastructure hand it a rewritten reality?**

## Evidence Boundary

Platform facts are grounded in first-party OpenAI documentation checked on 31 August 2026.

OpenAI's current File storage and Library documentation states that uploaded and generated files are automatically saved to Library; Library storage is separate from daily attachment limits; files can be searched, filtered, reused, downloaded, and deleted; deleting an originating chat does not delete its saved Library files; connected Google Drive files remain linked to their Drive source; workspace owners can control automatic Library referencing independently of manual file access; and compliance administrators can export/delete Library files via dedicated API endpoints.

OpenAI's Codex changelog for version 0.151.0, released 29 August 2026, states that extensions can inspect or replace MCP tool results before model consumption, optional MCP discovery has a configurable grace period, plugin catalogs combine per-repository configuration while isolating invalid project marketplaces, model switch/fallback preserves tool and reasoning state, nested subagent token usage rolls into root budgets, and stale Guardian classifications no longer authorize actions after permission changes.

APTRMF and all companion fidelity constructs, failure classes, benchmark procedures, and proposed metrics are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. OpenAI Help Center, **File storage and Library in ChatGPT**, updated 29 August 2026 / checked 31 August 2026.  
   https://help.openai.com/en/articles/20001052-file-storage-and-library-in-chatgpt

2. OpenAI, **ChatGPT & Codex changelog - Codex CLI 0.151.0**, 29 August 2026.  
   https://developers.openai.com/codex/changelog

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
