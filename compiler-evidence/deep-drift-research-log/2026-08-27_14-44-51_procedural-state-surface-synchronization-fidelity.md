# Deep Drift Research Update

## Procedural-State Surface Synchronization Fidelity: When Skills Travel as Files but Do Not Automatically Travel as Active Capability

**Research date:** Thursday, 27 August 2026  
**ĀTØR observation time:** 14:44:51 WIB  
**Research stream:** ĀTØR Institute / Deep Drift / LLM Workflow Update Watch  
**Status:** Fresh first-party-source scan. No brand-new 27 August launch was found in the target categories during this pass. One materially important cross-surface procedural-state boundary was identified as new-to-log.

## Executive Summary

OpenAI's current Skills documentation exposes a continuity fracture that is easy to miss because the underlying Skill itself is portable.

Personal Skills can be reusable, shareable workflows containing instructions, examples, code, and supporting resources. OpenAI also states that Skills follow the open Agent Skills standard and can be downloaded from one product and installed in another.

But OpenAI explicitly states that **Personal Skills must be added separately on desktop and web/mobile and do not automatically sync across those surfaces**.

That creates a clean Deep Drift distinction:

```text
SKILL PORTABLE
!=
SKILL INSTALLED EVERYWHERE
!=
SKILL ACTIVE EVERYWHERE
!=
SKILL VERSION CONSISTENT EVERYWHERE
```

A human can possess the same procedural object while different ChatGPT surfaces have different active procedural state.

For Deep Drift, this is not merely a convenience issue.

It is a reproducibility and workflow-continuity problem.

This creates a new benchmark family:

**Procedural-State Surface Synchronization Fidelity (PSSSF)**

The central question is:

> When a reusable procedure exists across multiple AI surfaces, can the system preserve the same active Skill identity, version, configuration, and availability without requiring the human to manually reinstall or reconcile it?

## New Deep Drift Construct: Procedural-State Surface Synchronization Fidelity

### Definition

**Procedural-State Surface Synchronization Fidelity (PSSSF)** measures whether reusable AI procedure state remains consistent across desktop, web, mobile, Codex, API, project, and future agent surfaces.

The procedure may be represented as:

- a Skill;
- a protocol;
- a reusable workflow;
- a template;
- a plugin-packaged procedure;
- a downloaded Agent Skill;
- a shared workspace Skill.

PSSSF asks whether the same procedure is:

```text
DISCOVERABLE
+ INSTALLED
+ VERSION-CONSISTENT
+ PERMISSIONED
+ EXECUTABLE
+ TRACEABLE
```

on every surface where the user reasonably expects it to exist.

## OpenAI's Current Skill Topology

OpenAI documents several important properties:

- Skills are reusable workflows.
- Skills may contain instructions, examples, code, and supporting resources.
- Skills can be shared with people or a workspace.
- Skills can be downloaded.
- OpenAI Skills follow the open Agent Skills standard.
- Skills are supported in ChatGPT, Codex, and the API.
- Personal Skills do **not** automatically synchronize between desktop and web/mobile.
- Skills used in different OpenAI products may be governed separately.

This means the procedural object has at least three different states:

```text
SKILL SOURCE STATE
-> what the Skill file/package contains

SKILL INSTALLATION STATE
-> where the Skill is installed

SKILL EXECUTION STATE
-> whether the current surface can actually invoke it
```

These states should not be treated as equivalent.

## New Failure Classes

### Skill Installation Surface Drift

A Skill is installed on one surface but absent on another, even though the user treats both surfaces as part of one ChatGPT environment.

### Skill Version Split

The user manually updates or reinstalls a Skill on one surface while another surface still uses an older version.

### Procedural Reproducibility Failure

The same user request produces different behavior across surfaces because one surface has the intended Skill and another does not.

### Hidden Fallback to Generic Behavior

A surface without the expected Skill silently completes the task using generic model behavior, making the user believe the Skill was applied.

### Cross-Product Skill Governance Drift

A Skill is permitted in ChatGPT but restricted, separately governed, or differently available in Codex or another OpenAI product.

### Manual Procedural Rehydration Burden

The human must repeatedly download, upload, reinstall, or reconfigure the same procedural package across surfaces.

### Shared-Skill Access Divergence

A workspace Skill is visible to some users or surfaces but not others because installation and access state differ.

### Skill Provenance Ambiguity

A later artifact exists, but the reviewer cannot determine which Skill version, if any, governed the run.

## Why This Matters for Deep Drift

Deep Drift has already separated:

```text
CONVERSATION STATE
MEMORY STATE
FILE STATE
ARTIFACT STATE
TOOL STATE
```

This update requires another explicit layer:

```text
PROCEDURAL STATE
```

Procedural state governs **how** the system performs the work.

A workflow can therefore fail even when:

- the conversation synced;
- the files synced;
- the project synced;
- the user account is the same.

Example:

```text
DESKTOP
conversation present
project present
skill S v2 installed

WEB/MOBILE
conversation present
project present
skill S absent
```

The user's visible continuity is high.

The procedural continuity is broken.

## Cross-Platform Contrast: Anthropic Cowork

Anthropic's current Cowork documentation provides a useful comparison point.

Anthropic states that cloud Cowork sessions and files are available across desktop, web, and mobile, and lists **Skills and plugins as available on desktop, web, and mobile**.

This does not automatically prove identical internal Skill state across every Anthropic surface, but it establishes a stronger advertised cross-surface procedural availability model than OpenAI's current Personal Skill installation behavior.

The comparison should be framed carefully:

```text
OPENAI
portable Skill package
+
manual surface installation boundary

ANTHROPIC
cross-surface Cowork session continuity
+
Skills/plugins advertised across desktop, web, mobile
```

The correct Deep Drift question is not which vendor is "better."

It is:

> Which procedural state survives a surface transition without human reconstruction?

## New Deep Drift Benchmark: Same Skill, Same Task, Different Surface

### Controlled procedure

Create Skill S v1 containing:

- one distinctive formatting rule;
- one required validation step;
- one prohibited behavior;
- one signature output phrase or structural marker.

Install S v1 on desktop.

Run controlled task T.

Then:

1. open web/mobile;
2. run T without manually installing S;
3. record whether S is discoverable and applied;
4. install S manually;
5. repeat T;
6. update S to v2 on desktop;
7. repeat T on web/mobile without reinstalling;
8. compare results;
9. test Codex separately;
10. inspect whether the artifact records which Skill version governed execution.

### Metrics

- Skill discovery parity;
- installation parity;
- automatic synchronization rate;
- version parity;
- procedure-application fidelity;
- hidden generic-fallback rate;
- manual reinstallation minutes;
- artifact-level Skill provenance;
- cross-product policy consistency.

## New Metric: Procedural Surface Parity Rate

```text
PSPR =
surfaces with intended Skill installed and active
/
all tested eligible surfaces
```

## New Metric: Skill Version Convergence Rate

```text
SVCR =
surfaces running the current intended Skill version
/
all surfaces where the Skill is installed
```

## New Metric: Generic Fallback Disclosure Fidelity

```text
GFDF =
runs where absent/unavailable Skill state is correctly disclosed
/
all runs where intended Skill was unavailable
```

This metric matters because silent fallback is worse than visible absence.

## New Metric: Human Procedural Rehydration Cost

```text
HPRC =
human time required to restore equivalent procedural state
across all intended surfaces
```

## Open Standard Does Not Equal Active Synchronization

OpenAI's adoption of the open Agent Skills standard is important.

It increases portability.

But portability and synchronization solve different problems.

```text
PORTABILITY
=
CAN THE PROCEDURAL OBJECT MOVE?

SYNCHRONIZATION
=
DO ALL INTENDED SURFACES HAVE THE RIGHT CURRENT STATE?
```

A downloadable Skill file can reduce lock-in while still leaving the human responsible for procedural distribution.

That is better than a non-portable Skill.

It is not the same as seamless continuity.

## Deep Drift Protocol Implication

The existing ĀTØR Seven-Layer State Protocol Family should treat Skill state as an explicit sublayer of **PVP - Procedural-Version Provenance**.

For every consequential reusable workflow, preserve:

```text
PROCEDURE_STATE_CARD

procedure_name:
procedure_id:
version:
source_package:
installed_surfaces:
active_surfaces:
last_updated:
permissions:
workspace_access:
fallback_behavior:
artifact_references:
unknown_fields:
```

When the same project crosses surfaces, SCRR should check procedural state before assuming continuity.

The runtime sequence becomes:

```text
RESUME TASK
-> RECOVER PROJECT STATE
-> RECOVER MEMORY STATE
-> CHECK PROCEDURAL STATE
-> CHECK TOOL STATE
-> EXECUTE
```

not:

```text
RESUME TASK
-> ASSUME EVERYTHING CAME WITH THE CHAT
```

## Broader Creator-Workflow Scan

### OpenAI

No newer 27 August launch surfaced during this pass.

Standing signals remain:

- reusable Skills and Plugin packaging;
- open Agent Skills portability;
- Personal Skill installation split between desktop and web/mobile;
- Skills supported across ChatGPT, Codex, and API with product-specific governance;
- webhook-triggered Work tasks;
- mutable Project memory;
- native artifact editing;
- cross-device cloud Work continuation;
- long-conversation segmented loading.

### Anthropic

No newer first-party update after the 26 August browser releases surfaced during this pass.

Standing signals remain:

- shared memory across chat and Cowork;
- Claude in Chrome autonomous actions;
- Cowork's agent-owned built-in browser;
- Skills API;
- Files API;
- Skills/plugins available across cloud Cowork surfaces;
- cross-device session/file continuation.

### Google

No materially newer 27 August Workspace launch surfaced during this pass.

Standing signals remain:

- Ask Gemini in Chat;
- Workspace Studio;
- Sheets Canvas read-write mini-apps;
- Gemini Notebook copying;
- interactive simulations/models;
- Slides-to-Vids artifact transformation.

### Microsoft

No newer release batch after 25 August surfaced during this pass.

Standing signals remain:

- Notebook-to-Word/Excel/PowerPoint artifact generation;
- Page auto-creation and mobile steering;
- Python-backed Excel editing;
- work-data context toggling;
- email/meeting-grounded Notebooks;
- cross-artifact creator workflows.

## Deep Drift Research Position

The creator stack is learning how to preserve:

- conversations;
- files;
- memory;
- artifacts.

But reusable **procedure state** remains a separate continuity problem.

Therefore:

```text
SAME ACCOUNT
!=
SAME ACTIVE PROCEDURE

SAME PROJECT
!=
SAME INSTALLED SKILL

SAME SKILL FILE
!=
SAME SKILL VERSION EVERYWHERE

OPEN STANDARD
!=
AUTOMATIC STATE SYNCHRONIZATION
```

The human should not have to become the package manager for their own cognitive procedures.

If a platform wants Skills to behave like persistent workflow infrastructure, installation state and version state eventually need the same seriousness now being applied to memory and file continuity.

## Evidence Boundary

Platform facts in this report are grounded in current first-party OpenAI Skills documentation and Anthropic Cowork documentation, with fresh OpenAI, Anthropic, Google, and Microsoft release-source checks used for comparison. PSSSF, the failure classes, metrics, and benchmark procedures are ĀTØR Institute research constructs.

## Primary Sources

1. OpenAI Help Center, **Skills in ChatGPT**, current as of 27 August 2026: https://help.openai.com/en/articles/20001066
2. OpenAI Help Center, **ChatGPT Business Release Notes**, July 9 and July 16, 2026: https://help.openai.com/en/articles/11391654
3. OpenAI Help Center, **ChatGPT apps with sync**, current as of 27 August 2026: https://help.openai.com/en/articles/10847137/
4. Anthropic Help Center, **Use Claude Cowork on web, desktop, and mobile**, current as of 27 August 2026.
5. Anthropic, **Claude in Chrome is generally available**, 26 August 2026.
6. Google Workspace Updates, August 2026 archive.
7. Microsoft Learn, Microsoft 365 Copilot Release Notes, current through 25 August 2026.

---

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir'an | CHATJIPITI SINGH**
