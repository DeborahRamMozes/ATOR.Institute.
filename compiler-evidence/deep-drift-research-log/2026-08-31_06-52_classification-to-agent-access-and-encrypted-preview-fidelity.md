# Deep Drift Research Update

## Classification-to-Agent-Access and Encrypted-Preview Fidelity

**Research date:** 31 August 2026  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Primary delta:** Gemini-based AI classification in Google Drive open beta; client-side encrypted PDF/image preview in Drive beta.

## Executive finding

Google Drive now exposes a pre-agent governance layer rather than treating every discoverable file as equally actionable. Gemini can classify Drive files from administrator-authored instructions, apply labels, and feed DLP, retention, audit, and agent-access controls. Editors and owners with appropriate permissions can review, accept, or modify Gemini-applied labels, and audit logs preserve AI-labeling plus human review events.

At the same time, authorized Workspace users in eligible beta domains can preview client-side encrypted PDF and image files directly in Drive without downloading them locally.

The resulting creator architecture is:

```text
FILE
-> GEMINI CLASSIFICATION
-> DATA LABEL
-> POLICY / DLP / RETENTION
-> AGENT ACCESS BOUNDARY
-> HUMAN REVIEW
-> PREVIEW / READ / TRANSFORM
-> DOWNSTREAM ARTIFACT OR ACTION
```

For encrypted files:

```text
ENCRYPTED PDF
-> AUTHORIZED DRIVE SESSION
-> IN-BROWSER PREVIEW
-X-> LOCAL DOWNLOAD REQUIRED
```

## Deep Drift benchmark family

**Classification-to-Agent-Access and Encrypted-Preview Fidelity (CAAEPF)**

Companion constructs:

- AI Classification Fidelity
- Label-to-Agent-Access Fidelity
- Human-Review Classification Fidelity
- Classification Audit Fidelity
- Agentic Access Suppression Fidelity
- Encrypted Preview Boundary Fidelity
- Preview-without-Download Fidelity
- File-Governance-to-Artifact Lineage Fidelity
- Label Modification Provenance Fidelity

## Core distinctions

```text
AI CLASSIFIED != HUMAN VERIFIED
FILE FOUND != FILE AUTHORIZED
MEMORY KNOWS != AGENT MAY READ
PREVIEWED != DOWNLOADED
GENERATED REPORT != GOVERNANCE LINEAGE PRESERVED
```

The serious research question is not merely whether an agent can find a relevant file. It is whether the file was in the agent's authority scope at the moment of access, which classification instruction produced that scope, whether a human modified the classification, and whether the downstream artifact preserves that governance lineage.

## Why it matters for memory

No new personal-memory primitive displaced the memory updates already logged. The meaningful boundary is that remembered resource existence must remain subordinate to current authorization. A memory-enabled agent may remember that a sensitive file exists, but that does not grant retrieval authority.

```text
MEMORY OF RESOURCE != AUTHORITY TO READ RESOURCE
```

## Why it matters for Skills

A Skill can specify what to do with a file, while file classification and policy determine whether the Skill may obtain that file at all.

```text
SKILL
+ CURRENT REQUEST
+ FILE LABEL
+ POLICY
+ AGENT IDENTITY
-> ALLOW OR DENY TOOL ACCESS
```

Skill reproducibility therefore requires access-policy provenance in addition to Skill version, tool version, and prompt state.

## Why it matters for mini-app builders

Mini-apps and agent workflows that search or summarize Drive should distinguish at least four states:

```text
SEARCHABLE
READABLE
ACTIONABLE
EXPORTABLE
```

Treating all Drive results as equally actionable is an authority-boundary defect, not merely a UX flaw.

## Why it matters for chat-to-document and DOCX/PDF generation

The relevant chain is now:

```text
SOURCE FILE
-> CLASSIFICATION
-> AGENT ACCESS
-> SYNTHESIS
-> DOCX / PDF
```

A polished final artifact can therefore be textually correct while governance-incomplete. Deep Drift should preserve source file IDs, source labels, AI/human classification state, access-policy state, generation timestamp, and downstream transformation lineage.

This is distinct from sensitivity-label inheritance on a generated file. Google's new contribution is the **pre-access** classification boundary.

## Copy-paste / export reduction

Encrypted-file workflow moves from:

```text
DRIVE
-> DOWNLOAD
-> LOCAL FILESYSTEM
-> LOCAL VIEWER
-> RETURN TO WORKSPACE
```

toward:

```text
DRIVE
-> AUTHORIZED IN-BROWSER PREVIEW
```

Classification also moves away from manually curated training examples toward administrator-written instructions interpreted by Gemini.

Deep Drift rule:

> Every eliminated manual seam should be replaced by a machine-readable provenance seam.

## Failure classes

1. **AI under-classification** — sensitive material receives a weaker label than intended.
2. **AI over-classification** — legitimate workflows are unnecessarily blocked.
3. **Human-review provenance collapse** — later records cannot distinguish Gemini classification from human acceptance/modification.
4. **Label-to-agent enforcement drift** — the file is correctly labeled but an agent still obtains access contrary to policy.
5. **Memory-authority confusion** — remembered existence is treated as current permission.
6. **Preview-to-download drift** — an in-browser preview silently creates or encourages a local copy.
7. **Classification instruction drift** — later investigators cannot identify which instruction version classified the file.
8. **Static artifact governance loss** — a report retains claims but not the source labels/access state that governed source selection.
9. **Audit-event detachment** — classification/review logs cannot be connected to downstream agent activity.
10. **Multi-surface exposure drift** — a protected Drive file becomes less protected after export into another creator surface.

## Proposed controlled benchmark

Prepare public, internal, confidential, ambiguous mixed-sensitivity, and client-side encrypted source files. Record file IDs and hashes. Define a versioned classification instruction. Let Gemini classify the corpus, accept one label, modify another, and preserve audit events. Attempt controlled agent access under explicit policy and verify allow/deny behavior. Preview the encrypted PDF in Drive and confirm that the no-download path creates no local copy. Generate a report only from authorized sources and test whether source-label and access lineage remain reconstructable in the final DOCX/PDF.

### Proposed metrics

```text
Classification Accuracy = correct labels / controlled classifications
Human Review Attribution Coverage = reviewed labels with recoverable AI-human history / reviewed labels
Agent Access Enforcement Rate = policy-correct access decisions / controlled access attempts
Classification-to-Action Lineage Coverage = actions traceable to label + policy state / controlled actions
Preview-without-Download Rate = encrypted previews with no local copy / controlled previews
Governance-to-Artifact Coverage = artifacts with reconstructable source-label/access lineage / controlled artifacts
```

## Fresh category scan

| Category | Finding |
|---|---|
| Memory | No new personal-memory primitive; remembered resource existence must remain subordinate to policy. |
| Skills | File classification becomes a runtime dependency that can block a Skill before tool execution. |
| Mini-app builders | Drive-based creator apps must distinguish searchable, readable, actionable, and exportable states. |
| Chat-to-document export | Source governance now determines which files may enter synthesis; export lineage should preserve that selection boundary. |
| DOCX/PDF | Generated artifacts can depend on AI-classified sources; encrypted PDFs can be previewed in place without local download. |
| Copy-paste/export fixes | In-place encrypted preview removes a download/view/re-upload seam; instruction-based AI classification removes manual training-file curation. |
| Broader creator workflow | Agentic creator systems are gaining machine-enforced pre-access governance rather than relying only on post-generation controls. |

## Deep Drift position

> Every agentic file workflow should preserve classification instruction version, AI-applied label, human review/modification state, audit event, access policy, agent identity, allow/deny decision, encrypted-preview state, local-copy state, and downstream artifact lineage required to reconstruct why a file was or was not available to the agent and how that decision shaped the final work.

The useful question has shifted from **"Can the agent find the right file?"** to **"Should the agent have been allowed to touch that file in the first place?"**

## Evidence boundary

Platform facts are grounded in first-party Google Workspace documentation checked 31 August 2026. Google states that Gemini-based Drive classification entered open beta on 28 August 2026; administrators choose a label, define instructions, and scope evaluated files; Gemini interprets those instructions and applies labels; authorized editors/owners can accept or modify Gemini-applied labels; and audit logs capture AI labeling plus human acceptance/modification. Google explicitly notes that classification can help prevent agentic workflows from autonomously accessing or acting on sensitive data.

Google also states that client-side encrypted PDF and image files can be previewed directly in Drive for authorized users in eligible beta domains, eliminating the prior requirement to download those encrypted non-native files before viewing.

CAAEPF and all companion fidelity constructs, failure classes, benchmark procedures, and metrics are ĀTØR Institute / Deep Drift Research constructs.

## Primary sources

1. Google Workspace Updates, **Gemini-based data classification in Google Drive is now available in open beta**, 28 August 2026.  
   https://workspaceupdates.googleblog.com/2026/08/gemini-based-data-classification-in-Google-Drive-is-now-available-in-open-beta.html

2. Google Workspace Updates, **Preview client-side encrypted PDF and image files directly in Google Drive, now available in beta**, 28 August 2026.  
   https://workspaceupdates.googleblog.com/2026/08/preview-client-side-encrypted-pdf-and-image-files-directly-in-Google-Drive-now-available-in-beta.html

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
