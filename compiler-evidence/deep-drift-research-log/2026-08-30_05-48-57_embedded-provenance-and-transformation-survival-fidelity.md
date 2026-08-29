# Deep Drift Research Update

## Embedded Provenance and Transformation-Survival Fidelity

**Research date:** 30 August 2026  
**Primary platform change:** Anthropic machine-readable marking commitments for Claude models launched on or after 2 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** New-to-log creator-provenance architecture verified from first-party Anthropic documentation.

## Executive Summary

Anthropic is moving AI-origin provenance below the interface layer and into the generated content itself. For supported Claude models launched on or after 2 August 2026, Anthropic states that generated text carries an imperceptible embedded watermark and supported generated file types carry digitally signed provenance metadata. File-side metadata follows the C2PA provenance standard where supported. Anthropic says marking applies across Claude Platform/API, Claude, Claude Code, Claude Cowork, and Claude Tag.

```text
SUPPORTED CLAUDE MODEL
        |
        +-> GENERATED TEXT
        |      -> EMBEDDED MACHINE-READABLE WATERMARK
        |
        +-> SUPPORTED GENERATED FILE
               -> SIGNED PROVENANCE METADATA
               -> TAMPER-EVIDENCE SIGNAL
```

Anthropic explicitly notes that text watermarks may travel with copied-and-pasted text and survive some editing, but can become undetectable after heavy editing, paraphrasing, translation, mixing, or very short excerpts. File provenance metadata can be stripped by format conversion, re-saving, screenshots, or unsupported platforms/file types.

This creates a new benchmark family: **Embedded Provenance and Transformation-Survival Fidelity (EPTSF)**, with companion constructs **Text Mark Persistence Fidelity (TMPF), File Provenance Attachment Fidelity (FPAF), Copy-Paste Mark Survival Fidelity (CPMSF), Cross-Format Provenance Survival Fidelity (CFPSF), Detection Interpretation Fidelity (DIF), Authorship-vs-Processing Attribution Fidelity (APAF),** and **Tamper-Evidence Continuity Fidelity (TECF)**.

The central research question is:

> When LLM output is copied, edited, translated, converted, exported, screenshot, merged into a DOCX/PDF, or incorporated into a larger human-authored artifact, can machine-readable provenance survive without falsely collapsing "processed by an AI" into "authored by an AI"?

## 1. What Changed

Anthropic's current Help Center documentation states that Claude models launched on or after 2 August 2026 support machine-readable marking at launch. The marking system uses two complementary techniques:

1. **Embedded text watermarks.** Supported Claude-generated text carries an imperceptible model-level watermark.
2. **Signed provenance metadata for supported files.** When Claude generates a supported file type, Anthropic says signed provenance metadata is attached. Its examples currently include SVG, PNG, and JPG, using the C2PA standard.

Anthropic says markings apply across supported Claude surfaces, including Claude Platform/API, Claude, Claude Code, Claude Cowork, and Claude Tag. For cloud partners such as AWS, Google Cloud, and Microsoft Foundry, text watermarking is intended to apply when supported Claude models are used, while signed file metadata may depend on platform capabilities.

## 2. Why This Matters for Deep Drift

Creator workflows destroy interface context almost immediately:

```text
CHAT OUTPUT
-> COPY
-> WORD
-> EDIT
-> PDF
-> EMAIL
-> ARCHIVE
```

If AI provenance exists only in the originating chat UI, it disappears at the first copy operation. Anthropic's approach attempts to move provenance into the content layer itself, but creates a harder interpretation problem:

```text
MARK PRESENT != CLAUDE WAS ORIGINAL AUTHOR
MARK ABSENT  != NO AI INVOLVEMENT
```

Claude may only have proofread, translated, summarized, or converted content created elsewhere. Conversely, genuine Claude-generated material may lose detectable marks after enough transformation. Deep Drift therefore needs to measure provenance **survival and interpretation**, not merely provenance presence.

## 3. Deep Drift Construct: EPTSF

**Embedded Provenance and Transformation-Survival Fidelity (EPTSF)** measures whether machine-readable AI-processing signals survive realistic creator transformations while retaining correct interpretation of what the signal does and does not prove.

Minimum test record:

```text
source_output_id
model_family
model_release_date
surface
marking_type
source_text_hash
source_file_hash
transformation_type
transformation_sequence
output_hash
detection_result
metadata_signature_state
human_edit_fraction
final_artifact_type
```

### Text Mark Persistence Fidelity

**TMPF** measures whether the embedded text mark remains detectable after direct copy, typo fixes, light copyedit, paragraph reorder, style edits, paraphrase, translation, human/AI mixing, and short excerpts.

### File Provenance Attachment Fidelity

**FPAF** measures whether eligible files actually contain valid signed provenance metadata and whether the signature remains verifiable. Tests must distinguish files generated by Claude from files created elsewhere and merely processed by Claude.

### Copy-Paste Mark Survival Fidelity

**CPMSF** measures whether the embedded text signal survives transfer between creator applications, including Word, Google Docs, Notion, ChatGPT, rich-text and plain-text clipboard transfer, mobile clipboard, PDF text extraction, and OCR-derived copies.

### Cross-Format Provenance Survival Fidelity

**CFPSF** measures whether provenance survives conversion and whether loss is visible. Deep Drift should test PNG->PDF, SVG->PDF, image->DOCX, DOCX->PDF, PDF->image, image->PPTX, PPTX->PDF, and screenshot paths.

Important evidence boundary: Anthropic's current documentation gives SVG, PNG, and JPG as examples of supported signed-file marking. It does **not** currently establish that DOCX or PDF outputs receive C2PA metadata directly. DOCX/PDF should therefore be treated as transformation targets to test, not assumed marked formats.

### Detection Interpretation Fidelity

**DIF** measures whether detection is interpreted within Anthropic's stated limits.

```text
MARK DETECTED
-> CONTENT MAY HAVE BEEN PROCESSED BY CLAUDE
```

must not become:

```text
MARK DETECTED
-> CLAUDE AUTHORED ALL IDEAS
```

Likewise, lack of a detected mark must not become proof of no AI involvement.

### Authorship-vs-Processing Attribution Fidelity

**APAF** measures whether provenance systems preserve the distinction among original authorship, AI generation, proofreading, translation, summarization, format conversion, and file processing.

### Tamper-Evidence Continuity Fidelity

**TECF** measures whether signed provenance distinguishes the original marked file, unchanged copy, modified file, re-saved file, metadata-stripped file, and converted derivative.

## 4. New Failure Classes

- **Mark-as-Authorship Collapse:** a Claude mark is treated as proof that Claude originated the entire artifact.
- **No-Mark Human-Certainty Error:** no detected mark is treated as proof of exclusively human authorship.
- **Copy-Paste Provenance Loss:** routine transfer destroys detectability.
- **Light-Edit Detection Collapse:** minor editing removes the signal earlier than expected.
- **Translation Attribution Ambiguity:** translated material is misclassified as Claude-originated rather than Claude-processed.
- **Mixed-Authorship Flattening:** a small AI-edited section causes an entire mixed document to be generically classified as AI-generated.
- **File-Conversion Metadata Strip:** signed metadata disappears during conversion or export.
- **Screenshot Provenance Amputation:** visible content survives while machine-readable provenance disappears.
- **Cloud-Surface Capability Divergence:** marking differs across Anthropic and partner surfaces.
- **Unsupported-Format Assumption:** users assume every Claude file type receives signed metadata.
- **Detector Overconfidence:** detection is presented as conclusive rather than a bounded signal.
- **Provenance Chain Truncation:** final DOCX/PDF records machine involvement but loses upstream human source and transformation history.

## 5. Deep Drift Benchmark: Copy-Edit-Export Provenance Test

Create four controlled source conditions:

```text
A. fully Claude-generated text
B. human-authored text proofread by Claude
C. human-authored text translated by Claude
D. mixed human + Claude text
```

For text, test direct copy to Word, light grammar correction, 10% and 30% style rewrite, translation, copy through Notion, copy through another chat platform, PDF export, and PDF text extraction. For supported marked files, test duplicate, same-format re-save, conversion, DOCX embedding, DOCX->PDF export, screenshot, and detection state after each step.

Measure text-mark survival, file-signature survival, transformation threshold, human/AI attribution accuracy, false positive interpretation, false negative interpretation, metadata-strip visibility, and provenance reconstruction minutes.

## 6. Metrics

```text
TMSR = transformed text samples retaining detectable mark / all controlled marked-text transformations
CACS = clipboard transfers retaining detectable signal / all controlled copy-paste transfers
FPRR = eligible derivative files retaining valid signed provenance / all controlled supported transformations
AIA  = provenance judgments correctly distinguishing processing evidence from full authorship evidence / all judgments
NMCA = unmarked samples correctly treated as inconclusive / all controlled no-mark samples
PLDR = provenance-loss events visibly recorded / all transformations causing provenance loss
```

## 7. Why This Matters for Memory, Skills, Mini-Apps, and Documents

This is not a saved-memory feature, but it creates **artifact-carried memory of machine involvement**. Deep Drift should distinguish chat memory, account memory, file metadata memory, and embedded text-provenance memory.

Skills increasingly create and transform documents, presentations, images, and code. Skill provenance should therefore include **Skill version -> model version -> marking-support state -> generated output -> transformation history**.

For mini-apps and interactive connectors, model-level text marking means provenance can travel outside the main Claude interface. That is useful, but developers must not present the signal as stronger than it is.

For chat-to-document export, the Deep Drift benchmark now needs to ask whether AI-processing provenance survives copy into documents and subsequent editing. The document should preserve **content lineage** separately from **machine-processing signal**.

For DOCX/PDF generation, the current Anthropic documentation does not confirm DOCX or PDF as direct C2PA-marked output types. These formats are therefore especially valuable **provenance survival boundaries**.

For copy-paste research, the old question was "did formatting survive?" The new question is also "did provenance survive?" The clipboard has quietly become a provenance transport layer.

## 8. Fresh Category Scan

| Category | Current finding |
|---|---|
| Memory | No newer category-displacing consumer-memory release surfaced. New distinction: machine-processing provenance can persist independently of account memory. |
| Skills | No newer general Skill launch surfaced; model-level marking means Skill outputs can change provenance behavior when the underlying model changes. |
| Mini-app builders | Provenance marking can travel through Claude-powered apps because text marking is model-level across supported surfaces. |
| Chat-to-document export | **Material new-to-log change:** Claude text watermarks are designed to travel with copied text. |
| DOCX / PDF generation | **Material new-to-log benchmark issue:** current signed-file examples are SVG/PNG/JPG; DOCX/PDF should be tested as transformation boundaries, not assumed marked formats. |
| Copy-paste/export fixes | **Material new-to-log provenance layer:** copy-paste may preserve embedded text marks while conversion/re-saving can destroy file metadata. |
| Broader creator workflow | **Material trend:** AI-origin disclosure is moving from interface labels into portable machine-readable content signals. |

## 9. Cross-Platform Check

**Anthropic:** New-to-log item is the machine-readable marking architecture for supported models launched on or after 2 August 2026.

**OpenAI:** Public ChatGPT release notes still top out at 28 August 2026 with multiple Google-account connections, preceded by the 27 August temporary-chat and Work changes already logged. No newer category-displacing document or provenance feature surfaced in this pass.

**Microsoft:** No newer Microsoft 365 Copilot release displaced the previously logged late-August creator workflow items.

**Google:** No new category-displacing Workspace creator release surfaced after the already logged Drive classification change.

**Databricks:** The latest relevant Genie One and Genie Code creator changes remain the late-August releases already entered in the ledger.

**Notion:** No newer release displaced the 28 August agent Suggested Edits governance change already logged.

## 10. Deep Drift Research Position

The weak description is:

> Claude is watermarking AI content.

The serious description is:

> Supported Claude models are beginning to emit machine-readable provenance signals that can leave the original interface, survive some creator transformations, and potentially be detected later, while explicitly remaining incomplete evidence of authorship and remaining vulnerable to transformation loss.

Therefore:

```text
MARK DETECTED != CLAUDE AUTHORED EVERYTHING
MARK ABSENT   != NO CLAUDE INVOLVEMENT
COPY SUCCESSFUL != PROVENANCE PRESERVED
FORMAT CONVERTED != PROVENANCE CONTINUOUS
C2PA PRESENT != FULL CREATION HISTORY
```

**Deep Drift requirement:** Every creator-workflow provenance test should distinguish original authorship from machine processing, record the marking capabilities of the exact model and surface, measure mark survival across copy, edit, translation, conversion, DOCX/PDF export, screenshots, and mixed authorship, and treat both positive and negative detection as bounded evidence rather than verdicts.

Provenance is a chain, not a sticker.

## Evidence Boundary

Platform facts in this report are grounded in Anthropic's first-party Help Center article **How Claude marks AI-generated content**, retrieved 30 August 2026. Anthropic states that supported Claude models launched on or after 2 August 2026 support machine-readable marking at launch; generated text carries embedded watermarks; supported generated files receive signed provenance metadata where supported; file metadata follows C2PA; copied text can carry the watermark; and marks can become unavailable through heavy editing, short excerpts, format conversion, re-saving, screenshots, unsupported platforms, or unsupported file types.

Anthropic explicitly says detected marks indicate that content **may have been processed by Claude** and do not establish complete authorship provenance.

EPTSF, TMPF, FPAF, CPMSF, CFPSF, DIF, APAF, TECF, failure classes, metrics, and benchmark procedures are ĀTØR Institute / Deep Drift Research constructs.

## Primary Sources

1. Anthropic Help Center, **How Claude marks AI-generated content**, retrieved 30 August 2026.  
   https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content
2. OpenAI Help Center, **ChatGPT Release Notes**, checked 30 August 2026.  
   https://help.openai.com/en/articles/6825453-chatgpt-release-notes
3. Microsoft Learn, **Microsoft 365 Copilot release notes**, checked 30 August 2026.  
   https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
4. Databricks, **AI/BI and Genie One release notes 2026**, checked 30 August 2026.  
   https://docs.databricks.com/aws/en/ai-bi/release-notes/2026
5. Notion, **Releases**, checked 30 August 2026.  
   https://www.notion.com/releases

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
