# Deep Drift Research Update - MRPTF

## Machine-Readable Provenance & Transformation Fidelity

**Research date:** 5 September 2026  
**Primary fresh delta:** Anthropic's current transparency documentation states that Claude models launched on or after 2 August 2026 support machine-readable marking at launch. Supported generated text carries embedded watermarks, while supported generated files can carry digitally signed provenance metadata. Claude Fable 5.1 and Mythos 5.1, launched 1 September 2026, are explicitly listed as supported. Anthropic also states that copy-paste may preserve text watermarks, while format conversion, re-saving, screenshots, editing, or unsupported file paths can remove or degrade provenance signals.

## Executive finding

AI provenance is moving from an external disclosure problem into the generated object itself.

```text
MODEL OUTPUT
   |
   +--> TEXT WATERMARK
   |
   +--> FILE PROVENANCE METADATA
           |
           v
        C2PA / signed credential
```

But the signals have different survival properties:

```text
COPY-PASTE
may preserve text watermark

FILE CONVERSION
may strip metadata

SCREENSHOT
may destroy file metadata

HEAVY EDIT
may degrade watermark

UNSUPPORTED FORMAT / SURFACE
may carry no supported mark
```

Therefore:

```text
AI-GENERATED
!= DETECTABLE AS AI-GENERATED

MARK PRESENT
!= FULL AUTHORSHIP PROOF

MARK ABSENT
!= HUMAN-ORIGIN PROOF

CONTENT SURVIVAL
!= PROVENANCE SURVIVAL

FORMAT FIDELITY
!= PROVENANCE FIDELITY
```

The new provenance object is the **transformation survival state of machine-readable origin signals**.

## New node

### Machine-Readable Provenance & Transformation Fidelity (MRPTF)

Minimum state model:

```text
content_id
model_id
model_release_date
marking_supported
marking_type
watermark_state
signed_metadata_state
credential_standard
file_type
generation_surface
cloud_partner
copy_event
edit_event
conversion_event
resave_event
screenshot_event
export_path
post_transform_detection_state
verification_tool
verification_time
verification_result
tamper_state
provenance_loss_reason
```

## Core findings

1. Anthropic now documents model-level text watermarking for supported Claude models, including Fable 5.1 and Mythos 5.1.
2. Copy-paste can preserve the embedded text signal through some transformations.
3. Heavy editing, paraphrasing, translation, mixing, or very short passages can make the signal undetectable.
4. Supported generated files can carry digitally signed C2PA provenance metadata.
5. Format conversion, re-saving, screenshots, or unsupported paths can strip file metadata.
6. A detected mark establishes likely model processing, not complete authorship.
7. Absence of a mark is not evidence of human origin.
8. Detection access and modality support are themselves provenance dependencies.
9. OpenAI currently documents a similar layered architecture using C2PA plus SynthID for supported images and SynthID for supported audio, while text coverage is still a future expansion goal.
10. DOCX/PDF provenance must be verified empirically before and after export because current documentation does not establish uniform credential survival across all document-generation paths.

## Adjacent creator-workflow update: Claude Artifacts system migration

Anthropic's Cowork documentation, updated 5 September 2026, confirms that new artifacts created on or after 19 August use an updated artifact system: they are saved to the account, can be shared within the organization, and open on the web. Older live artifacts remain viewable and functional but cannot be edited in place; continued editing requires republishing as a new artifact. Shared artifacts use each viewer's own connected apps and permissions rather than the creator's.

This produces two important state transitions:

```text
OLD LIVE ARTIFACT
-> viewable
-> no in-place edit

REPUBLISH
-> NEW ARTIFACT SYSTEM
-> new editable descendant
```

and:

```text
SAME SHARED ARTIFACT
+
DIFFERENT VIEWER
=
DIFFERENT AVAILABLE CONNECTOR DATA
```

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger delta after MSMRF/PMBDF | Memory schema and project-boundary nodes remain current |
| Skills | No stronger delta after SGOPF/CSAF/WPDF | Skill graph and governance nodes remain current |
| Mini-app builders | **Adjacent fresh artifact-system migration** | Claude Cowork artifacts now have account persistence, organizational sharing, and viewer-scoped connectors |
| Chat-to-document | Structural implication | Generated text/file provenance may survive or disappear depending on transformation path |
| DOCX/PDF | **Major research implication** | Verify provenance before and after save/export/conversion rather than infer it from creation source |
| Copy-paste/export | **Major fresh implication** | Text watermark may survive copy-paste while file metadata may be stripped by conversion or re-saving |
| Creator workflow | **Major trend** | AI origin/processing provenance is moving into machine-readable object state |

## New failure classes

- **Mark-Equals-Authorship Fallacy:** assuming a detected provenance signal proves the model originated all underlying content.
- **No-Mark-Equals-Human Fallacy:** assuming absence of a detectable mark proves human origin.
- **Visible-Identity-Equals-Provenance-Identity Error:** treating visually identical exports as provenance-equivalent.
- **Export-Equals-Credential-Survival Fallacy:** assuming signed metadata automatically survives conversion, re-saving, or screenshots.
- **Copy-Always-Destroys-Provenance Fallacy:** ignoring that embedded text watermarks may survive copy-paste.
- **Vendor-Level-Mark-Assumption:** assuming every model, modality, product surface, and export path from one provider has the same marking support.

## Deep Drift benchmark additions

**Machine-Readable Provenance Fidelity (MRPF)** - Can the artifact or text preserve its vendor-issued machine-readable provenance signal after generation?

**Transformation Provenance Survival Fidelity (TPSF)** - What provenance survives copy, edit, re-save, conversion, screenshot, compression, or format change?

**Processing-vs-Origin Attribution Fidelity (POAF)** - Can a detected mark be interpreted correctly as evidence of model processing rather than automatic proof of original authorship?

**Negative Detection Interpretation Fidelity (NDIF)** - Can missing marks be interpreted without falsely concluding human origin?

**Cross-Vendor Marking Coverage Fidelity (CVMF)** - Can the archive correctly record modality-, model-, and platform-specific marking differences between providers?

## DRPA-1.0 protocol additions

### MACHINE-READABLE PROVENANCE SNAPSHOT RULE

> When a generated artifact carries a vendor-issued watermark, C2PA credential, signed provenance record, or comparable machine-readable signal, record and verify that signal before further editing, conversion, or export where reproducibility matters.

### TRANSFORMATION RE-VERIFICATION RULE

> Treat copy, paste, re-save, format conversion, screenshot, compression, translation, paraphrase, and heavy editing as provenance-transformation boundaries. Re-check supported provenance signals after each material transformation instead of inferring survival from the source.

### PROCESSING-ORIGIN SEPARATION RULE

> A vendor provenance signal must be interpreted as evidence that the vendor's model or system processed the content, not as automatic evidence that the vendor originated every idea, sentence, image element, or underlying datum.

### NEGATIVE-DETECTION NON-CONCLUSION RULE

> Absence of a detectable provenance mark must not be used as proof of human origin. Record plausible loss paths, unsupported model/modality states, and transformation history.

### MODEL-TEMPORAL MARKING RULE

> Preserve model identity, model release date, and marking-support state at execution time. Provider-level provenance capability must not be assumed to apply uniformly across model generations.

## Eir'an state-flow addition

```text
GENERATE:
model
surface
modality

MARK:
text watermark
C2PA
signed metadata
other embedded signal

VERIFY:
detector
checker
API
result

TRANSFORM:
copy
edit
translate
resave
convert
screenshot
compress

VERIFY AGAIN:
signal survives?
signal degraded?
metadata stripped?

ARCHIVE:
artifact hash
verification evidence
transformation history
final derivative
```

## Canonical Deep Drift requirement

> Treat machine-readable provenance as a state that can survive, weaken, transform, or disappear across creator workflows. Preserve marking capability, verification evidence, and transformation history separately from the visible artifact.

## Deep Drift principle

> **The words may survive the journey while the receipt burns somewhere between Save As and Export.**

Operationally:

> **Verify provenance before and after transformation; never infer it from appearance.**

## Sources

1. Anthropic Help Center. **How Claude marks AI-generated content.** Updated the week of 5 September 2026. https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content
2. Anthropic Help Center. **Use artifacts in Claude Cowork.** Updated 5 September 2026. https://support.claude.com/en/articles/14729249-use-artifacts-in-claude-cowork
3. OpenAI Help Center. **Provenance signals (Content Credentials, SynthID) in OpenAI-generated content.** Updated late August 2026. https://help.openai.com/en/articles/8912793
4. OpenAI. **Advancing content provenance for a safer, more transparent AI ecosystem.** Published 19 May 2026; updated 31 July 2026. https://openai.com/index/advancing-content-provenance/

## Research status

**Node status:** New.  
**Duplicate check:** Repository search found no existing Deep Drift node for C2PA, text watermarking, Content Credentials, machine-readable AI provenance, or transformation-survival testing.  
**Relationship to prior nodes:** Extends CMARF, SRTSF, APIF, RWARF, and copy/export provenance work. MRPTF is distinct because it treats provenance signals themselves as mutable technical state that can survive or disappear during transformation.  
**Freshness:** Anthropic's marking documentation is current in the week of 5 September 2026 and explicitly covers the 1 September 2026 Fable 5.1/Mythos 5.1 generation. Claude Cowork artifact documentation was updated on 5 September 2026. OpenAI's provenance support article was updated in late August 2026.
