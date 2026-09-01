# Deep Drift Research Update — MPSRF

## Memory Portability and Semantic Reconstitution Fidelity

**Research date:** 2 September 2026, 04:51 WIB  
**Primary fresh delta:** Anthropic Claude cross-provider memory import/export  
**Secondary fresh deltas:** Google Pics general availability; OpenAI healthcare plugin layering  
**Scope:** memory portability, semantic transformation, creator continuity, skills/plugins, artifact provenance, export and migration boundaries.

## Executive finding

Anthropic now supports importing memory from other AI providers into Claude and exporting Claude memory for use elsewhere. The interface presents this as memory transfer, but the underlying behavior is not a literal state migration.

Claude asks the user to export memory from the previous service as text, paste that text into Claude, and then Claude **extracts key information** and stores it as individual memory entries. Anthropic explicitly notes that imported personal details unrelated to work may not be retained and that memory imports are experimental and may not always be incorporated successfully.

That produces a new Deep Drift distinction:

```text
MEMORY PORTABILITY
!= MEMORY IDENTITY PRESERVATION

IMPORT
!= BYTE-FOR-BYTE MIGRATION

EXPORTED CONTEXT
!= IMPORTED CONTEXT

USER-PROVIDED SOURCE TEXT
!= MEMORY CLAUDE STORES

CROSS-PROVIDER CONTINUITY
!= SEMANTIC CONTINUITY
```

The user can move context between platforms, but the receiving model becomes an interpreter of that context rather than a passive container.

## New node

### Memory Portability and Semantic Reconstitution Fidelity (MPSRF)

The actual transfer path is better represented as:

```text
PROVIDER A MEMORY / CONTEXT
        |
        v
EXPORT PROMPT OR MEMORY VIEW
        |
        v
TEXTUAL REPRESENTATION E1
        |
        v
HUMAN COPY / REVIEW / REDACTION
        |
        v
CLAUDE IMPORT PIPELINE
        |
        v
SEMANTIC EXTRACTION
        |
        +--> retained entry M1
        +--> retained entry M2
        +--> omitted detail X
        +--> transformed phrasing Y
        |
        v
NEW CLAUDE MEMORY STATE
```

This is not migration in the database sense. It is **semantic reconstitution**.

## 1. Memory export becomes an interpretation boundary

Anthropic recommends asking the previous AI service to list stored memories, learned context, response instructions, personal details, projects, goals, tools, languages, frameworks, preferences, corrections, and other context in one exportable text block.

This means the first stage already depends on what the source provider is willing and able to expose.

```text
ACTUAL SOURCE STATE
!= EXPORTED REPRESENTATION
```

A provider may omit hidden ranking, timestamps, inferred confidence, internal source linkage, contradictory memories, or context that is not represented as user-visible memory.

The exported block should therefore be treated as a **representation of memory**, not memory itself.

## 2. Human copy-paste returns as a migration protocol

The cross-provider workflow surprisingly returns to one of the oldest interoperability mechanisms available to humans: copy and paste.

The user may inspect, redact, reorder, edit, or accidentally truncate the exported text before importing it into Claude.

Therefore:

```text
SOURCE EXPORT
+ HUMAN HANDOFF
= NEW PROVENANCE EVENT
```

For Deep Drift, the handoff needs its own lineage rather than being dismissed as clerical transfer.

A useful record includes:

```text
source provider
source export timestamp
export method
raw exported text hash
human edits or redactions
import timestamp
target provider
import parser / memory system version
accepted entries
rejected or omitted entries
post-import verification
```

## 3. The receiving model decides what counts as portable memory

Anthropic states that Claude memory is designed to focus on work-related topics and therefore may not retain imported personal details unrelated to work.

This is the sharper issue.

```text
PORTABLE ACCORDING TO USER
!= PORTABLE ACCORDING TO RECEIVING MODEL
```

The receiving platform applies its own ontology of relevance.

Memory migration therefore contains a hidden editorial act:

```text
TRANSFER
-> CLASSIFICATION
-> SELECTION
-> RECONSTRUCTION
```

The user may believe they moved their context. In reality, the target system has rebuilt a subset of that context according to its own memory policy.

## 4. Experimental imports create unverifiable continuity unless checked

Anthropic warns that memory imports are experimental and may not always successfully incorporate imported material.

For Deep Drift, a migration event should therefore not be marked complete merely because the interface reports that the import finished.

A proper lifecycle is:

```text
IMPORT SUBMITTED
!= IMPORT VERIFIED

IMPORT COMPLETE
!= CONTEXT COMPLETE
```

The system should require a post-import verification step comparing:

```text
exported entries
vs
stored target entries
vs
later model behavior
```

This is particularly important for long-running creative or research projects where a missing correction, protocol, naming convention, or methodological rule can alter later outputs.

## 5. Memory export is also only partial portability

Claude allows users to inspect memory and copy it out for backup or migration to another service. But exported memory does not automatically include the full conversation archive, project files, procedural Skills, plugins, connector state, tool permissions, generated artifacts, or workspace governance.

So:

```text
MEMORY PORTABILITY
!= WORKSPACE PORTABILITY
```

and:

```text
CONTEXT MIGRATION
!= CREATOR ENVIRONMENT MIGRATION
```

A creator moving between LLM platforms may successfully transfer preferences while still losing:

- project boundaries;
- tool availability;
- Skills and plugins;
- generated files;
- artifact libraries;
- conversation ancestry;
- connector authorization;
- browser state;
- model-specific procedural behavior.

Memory is only one layer of the creator state stack.

## 6. Secondary fresh creator-workflow trend: Google Pics becomes a first-class Workspace surface

Google announced general availability of **Google Pics** on 1 September 2026. Pics brings prompt-based image generation and object-level image editing into Google Workspace. Users can generate multiple variations, select individual objects for local edits, and edit, reformat, or translate specific text elements.

This continues a broader creator trend:

```text
LLM CHAT
-> GENERATED ARTIFACT
-> OBJECT-LEVEL EDITING
-> WORKSPACE-NATIVE CREATOR SURFACE
```

The Deep Drift implication is that generative provenance increasingly needs to preserve **edit locality**. A final image may contain some regions generated initially, some regenerated later, some translated, and some manually selected for mutation.

The final bitmap alone cannot reconstruct that history.

## 7. Secondary fresh plugin trend: layered authority becomes explicit

OpenAI's 1 September 2026 healthcare plugin release shows another direction in plugin architecture. Healthcare Public Data is read-only and searches public sources, while the Epic plugin requires administrator configuration, individual Epic sign-in, and existing patient-chart permissions. Admins manage plugin availability and app access separately.

This reinforces an important Deep Drift distinction:

```text
PLUGIN AVAILABLE
!= DATA ACCESS AVAILABLE

ADMIN ENABLEMENT
!= USER AUTHORIZATION

USER AUTHORIZATION
!= OBJECT-LEVEL PERMISSION
```

The same plugin label can therefore sit above multiple authorization layers.

Although healthcare is a specialized domain, the architecture is general: modern plugin provenance increasingly needs to record capability availability, account authentication, and object-level permission independently.

## Fresh category scan

| Area | Fresh finding | Deep Drift implication |
|---|---|---|
| Memory | Major | Cross-provider import/export is semantic reconstitution, not literal migration |
| Skills/plugins | Meaningful | OpenAI plugin access demonstrates layered admin, account, and object-level authorization |
| Mini-app builders | No stronger new primitive in this scan | Existing builder/runtime nodes remain current |
| Chat-to-document | No stronger direct export primitive | Memory migration can change the context used to generate later documents |
| DOCX/PDF | No stronger format-generation primitive | A file generated after migration may depend on a reconstructed, filtered memory state |
| Copy-paste/export | Major conceptual return | Copy-paste becomes an official cross-provider memory migration mechanism |
| Creator workflow | Major | Creator state is becoming portable only through partial, policy-filtered representations |

## New failure classes

### Memory-Identity Preservation Fallacy
Assuming that moving memory between platforms preserves the same underlying state.

### Export-Completeness Assumption
Treating the source provider's user-visible memory export as the total context the provider held.

### Semantic Import Erasure
Failing to record that the target platform reinterpreted and selected the imported material.

### Human-Handoff Provenance Loss
Ignoring edits, redactions, truncation, or reordering introduced during copy-paste migration.

### Relevance-Ontology Substitution
Allowing the target provider's definition of useful memory to silently replace the user's definition.

### Import-Success Equivalence Error
Treating a completed import workflow as proof that all intended context was retained.

### Memory-vs-Workspace Portability Collapse
Treating memory migration as equivalent to moving projects, tools, Skills, files, permissions, and artifacts.

### Post-Migration Artifact Lineage Loss
Generating later documents without recording that their context was reconstructed through a cross-provider import event.

## Deep Drift benchmark additions

**Source Memory Representation Fidelity (SMRF)**  
Can the exported representation be distinguished from the source platform's actual internal memory state?

**Semantic Reconstitution Fidelity (SRF)**  
Can the archive identify how the receiving platform transformed exported memory into its own entries?

**Human Handoff Fidelity (HHF)**  
Can edits, redactions, copy-paste operations, and intermediate files be reconstructed?

**Import Completeness Fidelity (ICF)**  
Can accepted, omitted, transformed, and failed entries be compared against the source export?

**Target Relevance-Policy Fidelity (TRPF)**  
Can target-platform selection rules, such as work-related relevance, be preserved?

**Post-Import Verification Fidelity (PIVF)**  
Was the imported state checked rather than merely assumed successful?

**Memory-vs-Workspace Portability Fidelity (MWPF)**  
Can memory movement be separated from project, Skill, plugin, connector, file, and artifact migration?

**Artifact-after-Migration Fidelity (AMF)**  
Can downstream DOCX, PDF, spreadsheets, images, and decisions be linked to the reconstructed memory state active after migration?

## Canonical Deep Drift requirement

> Every material cross-provider AI memory migration should preserve a machine-readable memory-portability manifest that distinguishes the source platform's actual memory state from the exported representation available to the user; records the export method, timestamp, raw exported text or cryptographic digest, source-provider labels and timestamps when available, human review, redaction, editing and copy-paste events, target import timestamp, target memory-system version, semantic extraction or reconstruction behavior, accepted, transformed, omitted and failed entries, target relevance policy, post-import verification, later manual corrections, and downstream conversations and artifacts influenced by the reconstructed state. The term "memory import" must never be treated as proof of state identity, lossless migration, or workspace-level portability.

## Broader creator-workflow trend

The old assumption was:

```text
USER CONTEXT
+ PLATFORM
= STABLE PERSONALIZATION
```

The emerging environment is:

```text
USER CONTEXT
   |
   +--> PROVIDER A MEMORY MODEL
   |       |
   |       +--> EXPORT REPRESENTATION
   |               |
   |               +--> HUMAN HANDOFF
   |                       |
   |                       +--> PROVIDER B INTERPRETATION
   |                               |
   |                               +--> RECONSTRUCTED MEMORY
   |                                       |
   |                                       +--> NEW CREATOR OUTPUTS
```

The portability layer is not neutral. It is another generative layer.

That is the Deep Drift seam: **the moment platforms claim context can travel, the migration mechanism itself becomes part of authorship and provenance.**

## Sources

1. Anthropic Help Center. **Import and export your memory from Claude.** Current documentation, accessed 2 September 2026.  
   https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude

2. Google Workspace Updates. **Google Pics brings pro-level AI image creation and editing to Google Workspace.** 1 September 2026.  
   https://workspaceupdates.googleblog.com/2026/09/google-pics-brings-pro-level-ai-image-creation-and-editing-to-Google-Workspace.html

3. OpenAI Help Center. **ChatGPT Release Notes.** 1 September 2026, Healthcare Public Data in ChatGPT for Clinicians.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes

4. OpenAI Help Center. **ChatGPT Enterprise & Edu Release Notes.** 1 September 2026, Healthcare plugins for ChatGPT and Codex.  
   https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes

## Research status

**Node status:** New.  
**Duplicate check:** Existing Deep Drift nodes cover memory persistence, session-state transitions, migration recovery windows, and cross-account identity. None formalize cross-provider memory transfer as semantic reconstruction with human copy-paste as an explicit migration layer.  
**Relationship to prior nodes:** Complements DMPSAF (derived-memory persistence), ECMSTF (session-state transitions), CAICPF (cross-account context), and export/recovery nodes. MPSRF specifically addresses **inter-provider memory portability and transformation fidelity**.  
**Freshness:** Primary memory-portability documentation verified current on 2 September 2026; secondary creator/plugin changes verified from first-party releases dated 1 September 2026.
