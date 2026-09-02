# Deep Drift Research Update — MCTDF

## Mark-Carrier Transformation and Detectability Fidelity

**Research date:** 2 September 2026  
**Primary fresh delta:** Anthropic machine-readable marking for Claude-generated text and files  
**Scope:** creator workflow provenance, copy-paste persistence, file metadata, C2PA, model-level watermarking, transformation loss, detectability, downstream DOCX/PDF lineage.

## Executive finding

Anthropic has published current guidance describing how supported Claude models mark AI-generated or AI-processed content. Claude models launched in the EU on or after **2 August 2026** are intended to support machine-readable marking at launch. Anthropic says supported models apply embedded watermarks to generated text and signed provenance metadata to supported generated file types. The marking is designed to follow supported Claude models across Claude Platform/API, Claude, Claude Code, Claude Cowork, Claude Tag, and supported cloud-partner deployments.

The significant Deep Drift shift is not simply "AI content gets a watermark."

```text
GENERATIVE EVENT
      |
      +--> TEXT WATERMARK
      |
      +--> FILE PROVENANCE METADATA
      |
      v
COPY / EDIT / TRANSLATE / CONVERT / SCREENSHOT
      |
      v
DETECTABILITY MAY CHANGE
```

Therefore:

```text
PROCESS HISTORY
!= CURRENT MARK DETECTABILITY
```

A mark may survive some transformations. It may disappear after others. The generative event itself does not vanish when the mark does.

## New node

### Mark-Carrier Transformation and Detectability Fidelity (MCTDF)

Core distinctions:

```text
MARK PRESENT
!= FULL AUTHORSHIP

MARK ABSENT
!= NO AI PROCESSING

CONTENT CREDENTIAL PRESENT
!= COMPLETE CREATOR HISTORY

WATERMARK SURVIVES COPY-PASTE
!= WATERMARK SURVIVES EVERY EDIT

FILE CONVERSION
!= PROVENANCE-PRESERVING TRANSFORMATION

SCREENSHOT
!= ORIGINAL FILE

DETECTABILITY
!= HISTORICAL TRUTH
```

## 1. Text itself can become a provenance carrier

Anthropic states that supported Claude-generated text contains an imperceptible watermark embedded at the model level.

Because the mark is carried in text rather than only attached to a specific application surface, Anthropic says it can travel when the text is copied and pasted elsewhere and may persist through some editing.

That changes the Deep Drift copy-paste model.

Previously:

```text
CHAT
-> COPY
-> PASTE
-> DOCUMENT
```

could easily sever visible platform provenance.

Now:

```text
CHAT
-> COPY
-> PASTE
-> DOCUMENT
   |
   +--> machine-readable signal may persist
```

So copy-paste is no longer necessarily a complete provenance break.

But it is also not a guarantee of continuity.

## 2. File provenance and text watermarking are different carriers

Anthropic describes two complementary mechanisms:

```text
TEXT
-> EMBEDDED WATERMARK

SUPPORTED FILE
-> SIGNED PROVENANCE METADATA
```

For supported generated files such as SVG, PNG, or JPG, Anthropic says signed provenance metadata follows the C2PA standard.

These mechanisms must remain separate in Deep Drift.

A text artifact copied into a DOCX may retain a text watermark while the DOCX itself does not necessarily carry the same file-level provenance metadata.

Likewise, a generated image may carry file provenance while surrounding text has a different marking state.

Therefore:

```text
ARTIFACT MARKING
= MULTI-CARRIER STATE
```

not one binary field.

## 3. A positive detection is not complete authorship proof

Anthropic explicitly cautions that detection of a Claude mark indicates content may have been processed by Claude but does not prove that Claude originated the underlying ideas, text, or data.

Claude may have proofread human writing, translated existing text, summarized a source, reformatted content, converted a file, or processed an artifact authored elsewhere.

So:

```text
CLAUDE MARK DETECTED
-> CLAUDE PROCESSING SIGNAL

CLAUDE MARK DETECTED
-x-> CLAUDE ORIGINAL AUTHORSHIP
```

For Deep Drift this reinforces layered authorship. The processing agent and the originating author are separate provenance roles.

## 4. Absence of a mark is also inconclusive

Anthropic lists several reasons a Claude-processed artifact may not yield a detectable mark: the model predates marking support; text was heavily edited, paraphrased, translated, or mixed with other writing; the passage is too short; file metadata was stripped; or the content passed through an unsupported surface, feature, or file type.

Thus:

```text
NO DETECTED MARK
!= NO CLAUDE INVOLVEMENT
```

Detection is an observation of the current artifact, not a time machine.

## 5. Transformation events become provenance events

Anthropic specifically notes that file metadata can disappear after format conversion, re-saving, screenshots, or other transformation.

Instead of archiving only:

```text
SOURCE FILE
-> FINAL FILE
```

Deep Drift should preserve:

```text
SOURCE FILE
-> TRANSFORMATION EVENT 1
-> INTERMEDIATE FILE
-> TRANSFORMATION EVENT 2
-> FINAL FILE
```

and record whether each step is expected to preserve, alter, or strip provenance carriers.

## 6. Copy-paste "fixes" now have a second-order effect

Creator platforms are aggressively removing friction: copy, paste, download, upload, export, and import are increasingly replaced by embedded editing, connected applications, shared workspaces, and agentic tools.

At the same time, Anthropic's marking architecture means some provenance can now travel invisibly through copy-paste.

```text
VISIBLE TRANSFER SEAM DECREASES
WHILE
MACHINE-READABLE TRANSFER SIGNAL MAY INCREASE
```

Deep Drift therefore cannot use visible UX friction as a proxy for provenance continuity.

## 7. Model-level marking crosses product surfaces

Anthropic says marking is applied at the model level for supported models and is intended to work across Claude products and supported cloud-partner deployments.

```text
CLAUDE CHAT
CLAUDE CODE
CLAUDE COWORK
CLAUDE TAG
API
AWS
GOOGLE CLOUD
MICROSOFT FOUNDRY
```

can share a marking regime even though they represent different execution surfaces and storage routes.

This adds a useful distinction:

```text
MARKING LAYER
CAN CROSS
EXECUTION-SURFACE BOUNDARIES
```

while other provenance fields such as retention, account, tools, permissions, and storage custody still differ.

## 8. DOCX/PDF consequence

Anthropic's current examples for signed file provenance focus on supported image/vector file types. The documentation does not establish that every downstream DOCX or PDF created from Claude-processed material will carry equivalent signed provenance metadata.

Therefore a document workflow might look like:

```text
CLAUDE TEXT
+ TEXT WATERMARK
      |
      v
DOCX
      |
      v
PDF
      |
      v
EDIT / CONVERT / PRINT / SCREENSHOT
```

At each boundary:

```text
marking_state = needs_verification
```

A final PDF should never be assumed to preserve the machine-readable provenance of its source materials merely because those materials once carried it.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger new delta since previous node | Existing memory-state protocols remain current |
| Skills/plugins | No stronger new delta | Existing Skill/plugin provenance remains current |
| Mini-app builders | No stronger new delta | Existing interactive artifact nodes remain current |
| Chat-to-document | Major provenance effect | Copied Claude text may carry invisible watermark into documents |
| DOCX/PDF | Major lineage issue | Downstream conversion may alter or strip marking state |
| Copy-paste/export | Major | Copy-paste may preserve text watermark; conversion and re-save may alter detectability |
| Creator workflow | Major | Machine-readable provenance becomes a transform-sensitive layer traveling across surfaces |

## New failure classes

- **Mark-Equals-Authorship Fallacy:** treating a detected Claude mark as proof that Claude originated the underlying content.
- **No-Mark-No-AI Fallacy:** treating failure to detect a mark as proof that AI processing did not occur.
- **Carrier-Collapse Error:** treating text watermarking and file provenance metadata as one mechanism.
- **Transformation-Neutrality Fallacy:** assuming re-save, conversion, translation, screenshotting, or heavy editing leaves provenance detectability unchanged.
- **Detection-History Collapse:** treating current mark detectability as a complete reconstruction of historical processing.
- **Copy-Paste Provenance Extinction Assumption:** assuming text loses all machine-readable provenance simply because it leaves the original chat interface.
- **File-Credential Completeness Error:** treating a signed file credential as a complete account of human, model, tool, and transformation history.

## Deep Drift benchmark additions

**Mark Carrier Fidelity (MCF)** — Can text watermarks and file-level signed provenance remain separately represented?

**Transformation Preservation Fidelity (TPF)** — Can each edit, conversion, translation, re-save, screenshot, or format transition be classified by its effect on provenance carriers?

**Detection-to-History Fidelity (DHF)** — Can current detection results be distinguished from claims about historical AI processing?

**Processing-vs-Origin Fidelity (POF)** — Can AI processing remain distinct from original intellectual authorship?

**Copy-Paste Carrier Fidelity (CPCF)** — Can provenance signals that travel through copied text be tracked across host applications?

**Artifact Marking State Fidelity (AMSF)** — Can marking state be recorded independently for text, embedded images, source files, DOCX derivatives, PDFs, and screenshots?

## Canonical Deep Drift requirement

> Every material AI-assisted artifact should preserve both causal provenance and observable marking state. The archive should record the model and execution surface; original source authorship; AI processing role; text-watermark support status; file-provenance support status; Content Credential or C2PA state where present; detection method and timestamp; transformation events including copy-paste, editing, translation, paraphrase, conversion, re-saving, screenshots, and file embedding; marking state before and after each material transformation where verifiable; and all downstream derivatives. Detection of a machine-readable mark must never be treated as complete authorship proof, and absence of a detectable mark must never be treated as proof that no AI processing occurred.

## Broader creator-workflow trend

Creator provenance is becoming **carrier-based**.

Instead of asking only, "Which application made this?", the archive must ask:

```text
WHAT SIGNAL WAS ATTACHED?
WHERE WAS IT ATTACHED?
WHAT TRANSFORMATION OCCURRED?
DID THE SIGNAL SURVIVE?
WHAT HISTORY EXISTS OUTSIDE THE SIGNAL?
```

The new Deep Drift principle is:

> **Provenance marks are witnesses, not historians.**

They can testify to parts of a process. They cannot reconstruct the entire event by themselves.

## Source

Anthropic Help Center. **How Claude marks AI-generated content.** Updated 2 September 2026.  
https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content

## Research status

**Node status:** New.  
**Duplicate check:** No matching Deep Drift research-log entry was found for the combination of model-level text watermarking, signed C2PA file provenance, copy-paste persistence, transformation-sensitive detectability, and the separation between processing evidence and original authorship.  
**Relationship to prior nodes:** Extends DRPA-1.0 Section 21 (Model-Mark / Watermark Rule) with newly documented Anthropic implementation detail. It also complements embedded-asset mutation, copy/export, model-routing, and artifact-lineage nodes.  
**Freshness:** Verified against Anthropic first-party documentation updated on 2 September 2026.
