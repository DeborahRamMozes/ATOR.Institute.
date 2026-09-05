# Deep Drift Research Update - MTSF

## Memory Transfer & Semantic Reconstitution Fidelity

**Research date:** 5 September 2026  
**Primary fresh delta:** Anthropic's memory import/export documentation is updated today and now documents a built-in workflow for transferring memory between Claude and other AI providers. The transfer is not schema-preserving restoration: the source provider is asked to output its remembered context as text, the user pastes that text into Claude, and Claude extracts selected information into new individual memory entries. Anthropic explicitly says the import feature is experimental and may not successfully incorporate all imported memories.

## Executive finding

Cross-provider memory portability is becoming productized, but the current transfer primitive is semantic reconstitution rather than lossless state transfer.

```text
SOURCE PROVIDER MEMORY
        |
        v
TEXTUAL EXPORT
prompt / Markdown / copied block
        |
        v
USER-MEDIATED TRANSFER
        |
        v
TARGET IMPORT PARSER
        |
        v
NEW MEMORY ENTRIES
```

Therefore:

```text
MEMORY EXPORT
!= MEMORY DATABASE EXPORT

IMPORT
!= RESTORE

SAME FACT
!= SAME MEMORY OBJECT

SEMANTIC SURVIVAL
!= STRUCTURAL SURVIVAL

SOURCE PROVIDER MEMORY
!= TARGET PROVIDER MEMORY

TRANSFER COMPLETE
!= TRANSFER LOSSLESS
```

The new provenance object is the **memory reconstitution event**.

## New node

### Memory Transfer & Semantic Reconstitution Fidelity (MTSF)

Minimum state model:

```text
source_provider
source_memory_system
source_memory_schema
source_export_method
source_export_prompt
source_export_time
source_export_artifact
source_export_hash
transfer_medium
user_edits_before_import
target_provider
target_import_time
target_import_parser
target_extracted_entries
retained_items
omitted_items
transformed_items
merged_items
split_items
target_memory_schema
post_import_validation
manual_repair_event
```

## Core findings

1. Anthropic now explicitly supports memory transfer between AI providers.
2. The source export is prompt-mediated rather than a standardized memory-schema export.
3. Claude reinterprets pasted source memory and stores extracted information as new individual memory entries.
4. Imported personal information unrelated to work may be omitted because Claude applies its own memory-selection policy.
5. Anthropic explicitly warns that memory imports are experimental and may not successfully incorporate all memories.
6. Imported entries receive new target-side provenance and timestamps.
7. Source memory entries may be split, merged, reordered, paraphrased, or omitted during transfer.
8. Anthropic explicitly recommends Markdown as a backup/migration representation when the source service can generate files.
9. OpenAI's current account-transfer documentation reinforces that conversation transfer, memory transfer, and account migration are separate operations.
10. Creator workflows can inherit silent memory-transfer errors that later appear as document, formatting, tone, or project-context drift.

## New failure classes

- **Import-Equals-Restore Fallacy** - assuming imported memory recreates the original provider's memory state.
- **Export-Equals-Raw-State Fallacy** - assuming a provider-generated textual memory list is the underlying memory database.
- **Import-Complete-Equals-Lossless Fallacy** - assuming successful submission means all source memories were incorporated.
- **Semantic-Match-Equals-Provenance-Match Error** - treating similar target wording as the same memory object.
- **Personalization-Loss-as-Model-Drift Error** - attributing downstream workflow changes to the model when preferences were dropped during transfer.

## Deep Drift benchmark additions

- **Memory Transfer Fidelity (MTF)** - how much source memory survives provider-to-provider transfer?
- **Semantic Reconstitution Fidelity (SRF)** - how accurately does the target reconstruct source meaning from textual export?
- **Memory Entry Boundary Fidelity (MEBF)** - are source entries split, merged, reordered, or collapsed?
- **Memory Policy Selection Fidelity (MPSF)** - what is omitted because the target applies different retention criteria?
- **Memory Transfer Provenance Fidelity (MTPF)** - can each target memory be traced to source export and import outcome?

## DRPA-1.0 additions

### MEMORY EXPORT SNAPSHOT RULE
Preserve the raw source-provider memory export before editing or importing it. Record export prompt, provider, timestamp, and file hash where possible.

### MEMORY RECONSTITUTION RULE
Treat provider-to-provider memory import as semantic reconstruction, not state restoration. Preserve source memory representation and target memory entries separately.

### POST-IMPORT DIFF RULE
After import, classify retained, transformed, omitted, split, and merged items. Do not accept a generic success confirmation as evidence of fidelity.

### IMPORTED-CONTEXT ATTRIBUTION RULE
Distinguish context learned through native interaction from context introduced through migration.

### MEMORY INTERCHANGE ARTIFACT RULE
When Markdown or copied text is used as the transfer medium, archive that intermediate artifact as part of the causal chain.

## Canonical Deep Drift requirement

> Treat cross-provider memory portability as a translation pipeline. Preserve the source memory snapshot, transfer representation, target import result, and post-import diff separately.

## Deep Drift principle

> **Moving memory between models is currently closer to translation than transplantation.**

Operationally:

> **Export raw, import once, diff everything.**

## Sources

1. Anthropic Help Center. **Import and export your memory from Claude.** Updated 5 September 2026. https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude
2. Anthropic Help Center. **Use Claude's chat search and memory to build on previous context.** Current 5 September 2026. https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
3. OpenAI Help Center. **Transfer exported conversations between ChatGPT accounts.** Updated August 2026. https://help.openai.com/en/articles/9106926
4. OpenAI Help Center. **Projects in ChatGPT.** Current 5 September 2026. https://help.openai.com/en/articles/10169521

## Research status

**Node status:** New.  
**Duplicate check:** No matching repository node was found for the specific combination of cross-provider memory import, prompt-mediated export, target-side semantic extraction, experimental omission risk, and Markdown/copy-paste as the interchange layer.  
**Relationship to prior nodes:** Extends MSMRF and broader cross-provider memory portability work. MTSF is distinct because it treats provider-to-provider memory transfer as a semantic reconstitution pipeline with two transformation stages: source export and target import.  
**Freshness:** Anthropic's import/export memory article is updated today, 5 September 2026.
