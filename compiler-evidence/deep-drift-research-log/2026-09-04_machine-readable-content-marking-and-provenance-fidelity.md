# Deep Drift Research Update - MCMPF

## Machine-Readable Content Marking and Provenance Fidelity

**Research date:** 4 September 2026  
**Primary fresh delta:** Anthropic has documented machine-readable marking for supported Claude models launched on or after 2 August 2026. Supported text outputs carry embedded watermarks, while supported generated file types can carry digitally signed provenance metadata using the C2PA standard. The marks apply across Claude surfaces and supported cloud-partner deployments.  
**Primary Deep Drift relevance:** copy-paste can preserve a text watermark, while heavy editing, paraphrase, translation, short excerpts, format conversion, re-saving, screenshots, or unsupported surfaces can weaken or remove detectable provenance signals.

## Executive finding

For the first time in this Deep Drift workflow watch, the provenance layer is being embedded **inside the content itself** rather than living only in platform history, audit logs, account state, or artifact metadata.

```text
MODEL OUTPUT
   |
   +--> TEXT WATERMARK
   |
   +--> SIGNED FILE PROVENANCE
```

But these two channels behave differently under transformation.

```text
COPY / PASTE
-> TEXT WATERMARK MAY TRAVEL

HEAVY EDIT / PARAPHRASE / TRANSLATE
-> TEXT MARK MAY BECOME UNDETECTABLE

FORMAT CONVERSION / RE-SAVE / SCREENSHOT
-> FILE METADATA MAY BE STRIPPED
```

Therefore:

```text
DETECTED MARK
!= COMPLETE AUTHORSHIP PROOF

NO DETECTED MARK
!= PROOF OF HUMAN ORIGIN

COPY-PASTE
!= PROVENANCE LOSS BY DEFAULT

SCREENSHOT
!= PROVENANCE-PRESERVING EXPORT

SIGNED FILE
!= UNCHANGED FILE FOREVER
```

The new provenance object is the **mark-survival chain**.

## New node

### Machine-Readable Content Marking and Provenance Fidelity (MCMPF)

Minimum state model:

```text
platform
surface
model_id
model_release_date
marking_supported
text_watermark_state
file_provenance_state
file_type
c2pa_credential_state
generation_time
copy_paste_event
edit_event
paraphrase_event
translation_event
merge_event
format_conversion_event
resave_event
screenshot_event
mark_detection_time
mark_detection_result
detector_version_if_known
post_processing_state
underlying_human_source_state
```

## 1. Text can carry provenance through copy-paste

Anthropic states that supported Claude models embed an imperceptible watermark directly into generated text. Because the watermark is part of the text, it can travel when the text is copied and pasted and may persist through some editing.

That creates a direct connection between model provenance and the oldest creator workflow primitive on Earth: copy-paste.

```text
CLAUDE TEXT
-> COPY
-> PASTE INTO ANOTHER SURFACE
-> WATERMARK MAY SURVIVE
```

For Deep Drift, copy-paste can no longer be treated only as formatting transfer. It may also be a provenance-transfer operation.

## 2. Editing introduces mark survival uncertainty

Anthropic also states that heavy editing, paraphrasing, translation, mixing with other writing, or very short passages can prevent reliable watermark detection.

So the correct model is not:

```text
WATERMARKED
-> WATERMARKED FOREVER
```

It is:

```text
WATERMARKED SOURCE
-> TRANSFORMATION
-> UNKNOWN / DEGRADED / DETECTABLE STATE
```

A content pipeline therefore needs transformation-level provenance.

## 3. File provenance uses a different mechanism

For supported file types such as SVG, PNG, and JPG, Anthropic attaches signed provenance metadata following the C2PA standard. This allows a verifier to detect that a file was processed by Claude and to detect tampering where the credential remains available and valid.

Text watermark and file provenance must therefore be treated as two separate evidence channels:

```text
TEXT:
embedded machine-readable mark

FILE:
signed provenance metadata
```

They have different failure modes.

## 4. Static export can destroy provenance while preserving appearance

Anthropic explicitly warns that format conversion, re-saving, screenshots, and other transformations can strip file metadata.

```text
VISUAL CONTENT PRESERVED
+
PROVENANCE METADATA LOST
```

A screenshot may look identical to the generated image yet have lost its signed provenance. The appearance survives. The evidence does not.

## 5. A detected mark is processing evidence, not authorship proof

A Claude mark can exist on material whose underlying ideas, text, or data originated elsewhere because Claude may only have proofread, translated, summarized, or converted it.

Therefore:

```text
CLAUDE MARK
=
EVIDENCE OF CLAUDE PROCESSING
```

not:

```text
CLAUDE MARK
=
CLAUDE ORIGINAL AUTHORSHIP
```

This distinction is crucial for artistic, academic, legal, and publishing attribution.

## 6. Absence of a mark is weak negative evidence

Content processed by Claude may lack a detectable mark because the model predates marking support, the text was heavily edited or translated, the passage is too short, file metadata was stripped, or the relevant platform/feature/file type did not support marking.

```text
NO MARK FOUND
!= NO AI INVOLVEMENT
```

## 7. Model release date becomes provenance state

Anthropic says Claude models launched in the EU on or after **2 August 2026** support marking at launch, with current examples including Fable 5.1 and Mythos 5.1. Earlier models are being transitioned over time.

The archive therefore needs model ID, model release date, and marking support at run time, not merely "Claude."

## 8. Surface independence is increasing

Supported marking is intended to apply across Claude Platform/API, Claude, Claude Code, Claude Cowork, Claude Tag, and supported cloud partners such as AWS, Google Cloud, and Microsoft Foundry.

```text
MODEL-LEVEL TEXT MARK
-> CAN SURVIVE SURFACE CHANGE
```

while file provenance still depends on file-generation support.

## 9. Detection capability is asymmetric

Anthropic's file Content Checker is publicly available for Claude-issued file credentials, while text-watermark detection is currently in private preview for eligible organizations and certain enterprises.

```text
MARK EXISTS
!= EVERY USER CAN VERIFY IT
```

## 10. Detection itself has provenance

A detection result depends on detector, detector version, input state, and time of detection. Deep Drift therefore needs detector-version lineage wherever observable.

## 11. Copy-paste becomes a research instrument

A useful comparative benchmark now becomes possible:

```text
ORIGINAL GENERATED TEXT -> DETECT
COPY-PASTE UNCHANGED -> DETECT
LIGHT EDIT -> DETECT
HEAVY EDIT -> DETECT
PARAPHRASE -> DETECT
TRANSLATE -> DETECT
MIX HUMAN + MODEL TEXT -> DETECT
```

The metric is how long provenance survives ordinary creator transformations.

## 12. File conversion becomes another benchmark

```text
CLAUDE-GENERATED PNG -> VERIFY C2PA
PNG -> JPG -> VERIFY
PNG -> PDF -> VERIFY
PNG -> DOCX EMBED -> VERIFY
RE-SAVE THROUGH EDITOR -> VERIFY
SCREENSHOT -> VERIFY
```

The result would map the **provenance half-life** of generated media through creator workflows.

## New failure classes

- **Mark-Equals-Authorship Fallacy** - treating a Claude mark as proof that Claude originated the underlying ideas or source material.
- **No-Mark-Equals-Human Fallacy** - treating absence of a detectable mark as proof that AI was not involved.
- **Screenshot-Provenance Fallacy** - assuming visually identical screenshots preserve signed file provenance.
- **Conversion-Neutrality Error** - assuming file conversion or re-saving preserves provenance metadata.
- **Copy-Paste-Provenance Blindness** - treating copy-paste as purely visual/textual transfer and ignoring embedded provenance signals.
- **Detector-Timelessness Error** - treating one detector result as permanent truth independent of detector version and transformation state.
- **Processing-Origin Collapse** - failing to distinguish content origin from later Claude proofreading, summarization, translation, or conversion.

## Deep Drift benchmark additions

**Text Mark Survival Fidelity (TMSF)** - Can embedded provenance survive unchanged copy-paste and ordinary editing workflows?

**File Credential Survival Fidelity (FCSF)** - Can signed file provenance survive conversion, re-saving, embedding, and export?

**Processing-vs-Origin Attribution Fidelity (POAF)** - Can the archive distinguish original human or external source material from subsequent Claude processing?

**Negative Detection Interpretation Fidelity (NDIF)** - Can a missing mark remain correctly classified as inconclusive rather than proof of non-AI origin?

**Detector Version Fidelity (DVF)** - Can verification results remain attached to the detector state that produced them?

**Cross-Surface Marking Fidelity (CSMF)** - Can model-level and file-level marking behavior be compared across Claude surfaces and cloud partners?

## DRPA-1.0 protocol additions

### MACHINE-READABLE MARK STATE RULE

> When a platform embeds machine-readable provenance in text or attaches signed provenance metadata to generated files, preserve mark support state, model identity, surface, file type, mark type, generation time, and verification method as first-class provenance. A mark must be interpreted as evidence of processing under the platform's documented semantics, not as automatic proof of original authorship.

### MARK-SURVIVAL TRANSFORMATION RULE

> Every copy, paste, edit, paraphrase, translation, merge, format conversion, re-save, screenshot, or embedding operation that can alter mark detectability must be recorded as a transformation event. Preserve pre-transform and post-transform verification results where possible. Visual or semantic similarity must never be treated as proof that machine-readable provenance survived.

### NEGATIVE-DETECTION CAUTION RULE

> Failure to detect a watermark or signed credential must not be treated as proof that content was not AI-generated or AI-processed. Preserve known reasons for false negatives, including unsupported model generations, short passages, heavy editing, translation, mixed authorship, metadata stripping, unsupported file types, and unsupported product surfaces.

### PROCESSING-ORIGIN SEPARATION RULE

> Preserve content origin separately from AI processing history. Proofreading, translation, summarization, formatting, conversion, or file generation by an AI system can legitimately produce a machine-readable AI mark on content whose underlying ideas, data, or text originated elsewhere.

## Canonical Deep Drift requirement

> Treat machine-readable content marks as transformation-sensitive provenance evidence. Preserve content origin, AI processing, mark type, transformation chain, detection state, and detector context separately. Never infer original authorship solely from a detected mark and never infer absence of AI solely from an undetected mark.

## Deep Drift principle

> **The content can survive while its provenance dies.**

Operationally:

> **Archive the mark before the workflow strips it, and archive the transformation that stripped it.**

## Sources

1. Anthropic Help Center. **How Claude marks AI-generated content.** Updated this week; checked 4 September 2026. https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content
2. Coalition for Content Provenance and Authenticity (C2PA). https://c2pa.org/

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift repository entry was found for machine-readable text watermark survival, signed file provenance survival, copy-paste propagation, format-conversion stripping, and processing-vs-origin attribution as one provenance problem.  
**Relationship to prior nodes:** Extends static export fidelity, VRAEF, AATRF, and creator-workflow provenance work. MCMPF is distinct because provenance is carried inside the text/file and can survive or disappear independently of visible content and platform history.  
**Freshness:** Anthropic's first-party documentation was updated during the week of 4 September 2026 and explicitly identifies supported post-2-August-2026 Claude models and current detection behavior.
