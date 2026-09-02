# Deep Drift Research Update — MPSRF

## Memory Portability and Semantic Reconstitution Fidelity

**Research date:** 2 September 2026  
**Primary fresh delta:** Consumer AI platforms are turning memory and chat history into portable migration objects, but imported memory is reconstructed rather than cloned.  
**Scope:** memory import/export, cross-provider migration, chat-history portability, artifact libraries, reusable files, Skills/plugins, native DOCX/PDF creation, and creator-workflow continuity.

## Executive finding

Anthropic now provides a built-in memory import flow for Claude and explicitly supports bringing memory from other AI providers. The imported text is not installed as a raw copy of the previous provider's internal memory state. Claude parses the supplied material, extracts what it considers relevant, and stores new individual memory entries. Anthropic also states that its memory is work-focused, may omit personal details unrelated to work, and that memory imports remain experimental.

Google likewise provides memory and chat-history import into Gemini, including a suggested prompt for extracting memories from another AI service and ZIP-based chat-history import.

This creates a new Deep Drift distinction:

```text
MEMORY EXPORT
!= INTERNAL MEMORY STATE

MEMORY IMPORT
!= STATE CLONING

SAME IMPORT TEXT
!= GUARANTEED SAME RETAINED MEMORY

MIGRATED CHAT HISTORY
!= MIGRATED MODEL CONTEXT

PORTABLE MEMORY
!= PORTABLE COGNITIVE STATE
```

The correct research object is the **reconstitution event**.

## 1. Memory is becoming an inter-platform artifact

Memory used to be treated as a private feature inside one assistant. It is now beginning to behave like an exportable creator asset.

```text
PROVIDER A MEMORY / CHAT HISTORY
            |
            v
     EXPORT REPRESENTATION
       TXT / MD / ZIP
            |
            v
      PROVIDER B IMPORT
            |
            v
  EXTRACTION / INTERPRETATION
            |
            v
     NEW MEMORY ENTRIES
```

The transfer object is not the original hidden memory system. It is a representation of that system.

## 2. Semantic reconstruction introduces transformation loss

Anthropic's documentation states that Claude extracts key information from the pasted import and creates individual memory entries. It also warns that imports may not always incorporate successfully and that Claude's memory prioritizes work-related topics.

Therefore migration can involve selection, normalization, omission, rewriting, categorization, relevance filtering, and provider-specific policy filtering. Deep Drift must treat those as transformations, not clerical details.

## 3. Exported memory should have its own provenance

Preserve source provider, source account/workspace, export timestamp and mechanism, export prompt when prompt-derived, source memory interface, raw export text, human edits before import, destination provider, import timestamp and method, parsed entries, rejected or missing entries, and post-import verification.

If the source provider only exposes memory through a conversational request, the **export prompt itself becomes part of provenance**.

## 4. Memory portability is not memory equivalence

```text
SAME MEMORY TEXT
+ DIFFERENT RETRIEVAL POLICY
+ DIFFERENT SENSITIVITY RULES
+ DIFFERENT RELEVANCE MODEL
+ DIFFERENT PROJECT BOUNDARIES
=
DIFFERENT EFFECTIVE MEMORY
```

Deep Drift therefore needs to separate memory content, memory storage state, memory retrieval policy, memory eligibility, and memory actual use.

## 5. Chat-history import is a second portability layer

Google's Gemini migration flow supports importing chat history from other AI services.

```text
CHAT HISTORY
!= MEMORY
```

A chat-history archive may contain far more information than the set of facts selected into memory. Conversely, a memory export may contain distilled conclusions that are difficult to reconstruct from individual chats. Deep Drift should archive both separately when available.

## 6. OpenAI File Library turns generated artifacts into persistent reusable context

OpenAI's current File storage and Library documentation, updated on 2 September 2026, states that uploaded and created files are automatically saved to Library for supported plans and workspaces. Documents, spreadsheets, presentations, PDFs, and other created files can later be reused in new chats.

```text
PAST ARTIFACT
-> LIBRARY
-> FUTURE CHAT
-> NEW ARTIFACT
```

Creator continuity now has at least two persistent channels: semantic memory and artifact memory.

## 7. Skills and plugins are also becoming portable procedural context

OpenAI's recent Business release notes document GitHub-backed plugin marketplaces with automatic daily sync. Anthropic has separately added security scanning for Skills and plugins and supports reusable Skills across creator surfaces.

```text
SEMANTIC PORTABILITY = memories / chats
PROCEDURAL PORTABILITY = Skills / plugins
ARTIFACT PORTABILITY = files / libraries
```

Deep Drift should not collapse them into one context field.

## 8. Native file generation reduces copy-paste but increases hidden lineage

Gemini can generate PDF, DOCX, XLSX, Markdown, Google Docs, Sheets, and Slides directly from chat. Microsoft Copilot Notebooks can generate native Word, Excel, and PowerPoint files from curated notebook context. Claude can create and edit files inside its app.

The broad workflow is converging on:

```text
MEMORY
+ CHAT HISTORY
+ FILE LIBRARY
+ SKILL
+ CONNECTED SOURCE
      |
      v
   AI WORKSPACE
      |
      v
 NATIVE ARTIFACT
```

## 9. Creator continuity is becoming multi-channel

```text
CONTINUITY
=
MEMORY CONTINUITY
+ CHAT-HISTORY CONTINUITY
+ PROJECT CONTINUITY
+ FILE-LIBRARY CONTINUITY
+ SKILL CONTINUITY
+ PLUGIN CONTINUITY
+ ACCOUNT CONTINUITY
+ EXECUTION-SURFACE CONTINUITY
```

A user can appear to continue the same project while only some of those channels survived migration.

## Fresh category scan

| Area | Current notable change | Deep Drift implication |
|---|---|---|
| Memory | Claude supports cross-provider import/export; Gemini supports memory import | Memory migration is semantic reconstruction, not cloning |
| Chat history | Gemini supports chat-history import from other AI providers | Conversation archive and selected memory must remain separate |
| Skills/plugins | OpenAI supports GitHub-synced plugin marketplaces; Anthropic scans Skills/plugins | Procedure itself is portable and version-sensitive |
| Mini-app/agent builders | Agent ecosystems increasingly package reusable agents, Skills, tools, and sites | Builder state is another portable dependency layer |
| Chat-to-document | Gemini and Microsoft can create native documents from AI workspace context | Final documents inherit hidden upstream context paths |
| DOCX/PDF | Gemini directly generates DOCX/PDF; Microsoft and Claude also create native files | Native generation removes visible transfer seams |
| File reuse | ChatGPT Library automatically stores uploaded and generated files | Past artifacts can function as future context independently of chat memory |
| Copy-paste/export | Platforms increasingly replace manual transfer with persistent libraries and native generation | Less visible friction means stronger need for provenance manifests |

## New failure classes

- **Memory-Clone Fallacy:** treating imported memory as an exact duplicate of the source provider's memory state.
- **Export-Equals-State Fallacy:** treating a textual memory export as the complete hidden internal memory representation.
- **Import-Success Assumption:** assuming every supplied memory entry was retained merely because the import completed.
- **Cross-Provider Semantic Equivalence Error:** assuming identical memory text produces identical personalization across models.
- **Chat-History-Memory Collapse:** treating imported chat history and imported memory as the same causal object.
- **Artifact-Memory Blindness:** ignoring persistent file libraries as a separate channel through which old work influences new work.
- **Procedural-Portability Collapse:** treating Skills/plugins as if they were merely semantic memory rather than executable or reusable procedural context.

## Deep Drift benchmark additions

**Memory Reconstitution Fidelity (MRF):** Can the imported memory set be compared against the exported source representation?

**Memory Omission Fidelity (MOF):** Can entries omitted, rejected, filtered, or transformed during import be identified?

**Cross-Provider Retrieval Fidelity (CPRF):** Can identical imported memory text be distinguished from actual retrieval behavior in each provider?

**Chat-History Separation Fidelity (CHSF):** Can migrated conversation history remain distinct from distilled persistent memory?

**Artifact Continuity Fidelity (ACF):** Can reused files from persistent libraries be tracked as causal context in later artifacts?

**Procedural Portability Fidelity (PPF):** Can migrated or synchronized Skills/plugins be tracked separately from semantic memory and file context?

## DRPA-1.0 protocol addition

> **MEMORY PORTABILITY AND RECONSTITUTION RULE:** When memory, personalization context, or chat history is exported from one AI provider and imported into another, the transfer must be treated as a transformation event rather than a state clone. Preserve the source provider, source workspace/account, export mechanism, export prompt where applicable, raw exported representation, human edits, destination provider, import mechanism, import timestamp, parsed or retained entries, omitted or rejected entries where observable, post-import verification, and later retrieval behavior. Identical text across providers must never be treated as proof of identical effective memory.

> **MULTI-CHANNEL CONTINUITY RULE:** Persistent creator continuity must be decomposed into semantic memory, chat-history archives, project state, artifact libraries, procedural Skills/plugins, connected-account state, and execution-surface state. Continuity in one channel must never be used as proof of continuity in another.

## Eir'an state-flow addition

```text
MEMORY PORTABILITY CHECK
source memory state: VERIFIED / PARTIAL / UNKNOWN
export representation: VERIFIED / PARTIAL / UNKNOWN
export prompt influence: VERIFIED / PARTIAL / UNKNOWN
human edits before import: VERIFIED / PARTIAL / UNKNOWN
destination parsed entries: VERIFIED / PARTIAL / UNKNOWN
omitted entries: VERIFIED / PARTIAL / UNKNOWN
retrieval equivalence: VERIFIED / PARTIAL / UNKNOWN
chat-history continuity: VERIFIED / PARTIAL / UNKNOWN
artifact-library continuity: VERIFIED / PARTIAL / UNKNOWN
procedural continuity: VERIFIED / PARTIAL / UNKNOWN
```

## Canonical Deep Drift principle

> **Memory can travel without remaining the same memory.**

> **Portability preserves a representation; the destination reconstructs a state. Archive both sides of that transformation.**

## Sources

1. Anthropic Help Center. **Import and export your memory from Claude.** Current documentation accessed 2 September 2026. https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude
2. Anthropic Help Center. **Release notes.** August 25, 2026 entry. https://support.claude.com/en/articles/12138966-release-notes
3. Google. **Make the switch: Bring your AI memories and chat history to Gemini.** March 26, 2026. https://blog.google/innovation-and-ai/products/gemini-app/switch-to-gemini-app/
4. OpenAI Help Center. **File storage and Library in ChatGPT.** Updated 2 September 2026. https://help.openai.com/en/articles/20001052-file-storage-and-library-in-chatgpt
5. OpenAI Help Center. **ChatGPT Business release notes.** August 28, 2026. https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes
6. Google. **You can now easily generate files in Gemini.** April 29, 2026. https://blog.google/innovation-and-ai/products/gemini-app/generate-files-in-gemini/

## Research status

**Node status:** New.  
**Duplicate check:** No matching memory-portability / semantic-reconstitution node was found in the current Deep Drift repository search.  
**Relationship to prior nodes:** Extends DRPA-1.0 memory-state, export, artifact-lineage, and procedural-dependency rules. Complements OHSEF, CAGIF, MCRRF, WAPSF, and prior Library/export nodes without duplicating them.  
**Freshness:** Primary memory documentation and OpenAI Library documentation verified on 2 September 2026.
