# Deep Drift Research Update — CSOIF

## Catalog-Snapshot Observability and Inventory Fidelity

**Research date:** 2 September 2026  
**Primary fresh delta:** OpenAI public Plugin catalog CSV export and documented catalog-refresh lag  
**Scope:** Skills, plugins, app templates, capability inventories, export fidelity, directory freshness, creator-workflow reproducibility.

## Executive finding

OpenAI now documents an administrative **Export CSV** function for the public Plugin catalog. Eligible workspace owners and administrators can export a structured inventory containing plugin, app, and Skill details, developers, versions, dates added, and verification status.

The export is useful, but it is not a live representation of the execution environment. OpenAI states that the CSV is generated from a **daily snapshot** and may be **up to 48 hours old**. Separately, directory changes in Codex may take **up to 6 hours** to refresh.

That creates a new Deep Drift distinction:

```text
EXPORTED CATALOG
!= LIVE DIRECTORY

LIVE DIRECTORY
!= EXECUTION-TIME CAPABILITY SET

PLUGIN VERSION IN CSV
!= GUARANTEED EFFECTIVE VERSION

INVENTORY OBSERVED
!= INVENTORY AVAILABLE
```

This is especially important because Deep Drift already tracks repository-synchronized plugin distribution. Once procedures can auto-sync from GitHub while the administrative inventory can lag by as much as 48 hours, the system can have multiple legitimate but temporally inconsistent descriptions of "what is installed."

## New node

### Catalog-Snapshot Observability and Inventory Fidelity (CSOIF)

Core state model:

```text
SOURCE / MARKETPLACE STATE
        |
        v
SYNCED PLUGIN STATE
        |
        v
DIRECTORY INDEX
        |
        v
ADMIN CSV SNAPSHOT
```

Each layer can have a different timestamp.

Therefore:

```text
SOURCE TIME
!= SYNC TIME
!= DIRECTORY REFRESH TIME
!= CSV SNAPSHOT TIME
!= EXECUTION TIME
```

## 1. Capability inventory has become an exportable artifact

The CSV can expose:

- plugin details;
- included apps;
- included Skills;
- developers;
- versions;
- date added;
- verification status.

This is a major improvement for governance because capability inventories no longer need to be reconstructed manually from screenshots or individual plugin pages.

For Deep Drift, the inventory itself should be preserved as a time-stamped research artifact.

## 2. But the exported inventory can be stale by design

OpenAI states that the export uses a daily snapshot and may be up to 48 hours old.

So:

```text
CSV GENERATED AT T
```

does not imply:

```text
CSV REFLECTS SYSTEM AT T
```

It may reflect an earlier state:

```text
T - 48h <= snapshot_time <= T
```

That is not a bug. It is an explicit observational lag.

Deep Drift must therefore preserve both:

```text
export_time
snapshot_freshness_window
```

rather than treating file modification time as system-state time.

## 3. Directory propagation creates a second lag layer

OpenAI also documents that Codex directory changes can take up to 6 hours to refresh.

This means even after a plugin is updated, imported, disabled, or otherwise changed, the user-facing directory may not immediately represent the new state.

The timeline can therefore be:

```text
PLUGIN CHANGE
     |
     v
BACKEND / WORKSPACE STATE
     |
     +---- up to 6h ---->
     v
CODEX DIRECTORY
     |
     +---- daily snapshot / up to 48h ---->
     v
EXPORTED CSV
```

A researcher examining the CSV, the directory, and the actual runtime may see three different states without any of them being internally contradictory.

## 4. This compounds repository-sync provenance

Deep Drift already records that GitHub-backed plugin marketplaces can synchronize automatically and that invalid updates can leave the last working version active.

CSOIF adds the observational layer:

```text
REPOSITORY HEAD
!= EFFECTIVE PLUGIN
!= DIRECTORY LISTING
!= ADMIN CSV
```

The important question is therefore no longer:

> "What version does the platform say exists?"

It becomes:

> "Which platform representation, observed at what time, described which state?"

## 5. Public catalog export is incomplete by scope

OpenAI states that the CSV does **not include plugins created inside the workspace**.

Therefore:

```text
PUBLIC CATALOG EXPORT
!= COMPLETE WORKSPACE CAPABILITY INVENTORY
```

A serious audit must combine at least:

```text
PUBLIC CATALOG SNAPSHOT
+
WORKSPACE-CREATED PLUGINS
+
IMPORTED / SYNCED MARKETPLACES
+
APP AUTHORIZATION STATE
+
SURFACE-SPECIFIC AVAILABILITY
```

Otherwise the exported CSV can look authoritative while still omitting locally created workflow procedures.

## 6. Verification status is metadata, not a substitute for governance

The export can include OpenAI verification status. OpenAI separately states that a verification badge indicates review for quality, reliability, and usefulness, but does not replace an organization's own privacy, security, or vendor review.

So:

```text
VERIFIED
!= APPROVED FOR THIS WORKSPACE

VERIFIED
!= PERMISSION GRANTED

VERIFIED
!= EXECUTION OBSERVED
```

Deep Drift should preserve verification as one metadata field, not elevate it into a universal trust assertion.

## 7. Why this matters for document and creator workflows

A DOCX, PDF, spreadsheet, image, research report, or code artifact may depend on a Plugin or Skill whose version changed after the latest catalog snapshot.

The final artifact lineage therefore needs:

```text
ARTIFACT
+
EXECUTION TIMESTAMP
+
PLUGIN / SKILL ID
+
EFFECTIVE VERSION
+
DIRECTORY STATE
+
CATALOG SNAPSHOT ID / TIME
```

A CSV inventory is valuable evidence, but it cannot independently prove what procedure actually ran.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | No stronger new delta in this scan | Existing memory-state nodes remain current |
| Skills / plugins | Major | Public Plugin catalog can now be exported with Skill/version metadata, but with documented staleness |
| Mini-app builders | Indirect | App templates are part of the plugin capability inventory |
| Chat-to-document | Provenance effect | Generated documents may depend on capabilities newer than the latest inventory snapshot |
| DOCX / PDF | No new direct primitive | File lineage should include effective Plugin/Skill version rather than catalog version alone |
| Copy-paste / export | Major | Capability inventory itself is now exportable as CSV |
| Creator workflow | Major | Administrative observability is improving, but it is explicitly asynchronous |

## New failure classes

### Snapshot-Is-Live Fallacy
Treating an exported inventory as a real-time description of the system.

### Export-Time / State-Time Collapse
Using CSV creation time as if it were the timestamp of the represented capability state.

### Directory-Propagation Blindness
Ignoring the documented delay between a capability change and its appearance in Codex.

### Public-Catalog Completeness Error
Treating the public catalog export as a complete inventory of workspace-created and imported procedures.

### Catalog-Version Execution Fallacy
Assuming the version listed in an inventory proves which version executed.

### Verification-Authority Collapse
Treating verification status as equivalent to workspace authorization, safety approval, or execution evidence.

## Deep Drift benchmark additions

**Catalog Snapshot Freshness Fidelity (CSFF)**  
Can the timestamp and stated freshness window of a capability inventory be reconstructed?

**Directory Propagation Fidelity (DPF)**  
Can a capability change be distinguished from the later moment when the directory exposes that change?

**Inventory Scope Fidelity (ISF)**  
Can public catalog entries, workspace-created plugins, imported marketplaces, and app state remain separately represented?

**Observed-vs-Effective Version Fidelity (OEVF)**  
Can the version visible in an inventory be distinguished from the version actually used during execution?

**Verification Metadata Fidelity (VMF)**  
Can verification status be preserved without converting it into an unsupported trust or authorization claim?

**Artifact-to-Inventory-State Fidelity (AISF)**  
Can each downstream creator artifact be tied to both execution-time capability state and the inventory snapshot available to an auditor?

## Canonical Deep Drift requirement

> Every material AI-assisted workflow that depends on Plugins, Skills, app templates, or other reusable platform capabilities should preserve both execution-state provenance and observation-state provenance. The archive should record the Plugin and Skill identifiers; effective version at execution; execution timestamp; workspace and surface; app authorization state; source marketplace or workspace origin; directory observation timestamp; catalog-export timestamp; documented snapshot freshness window; verification status; inventory scope exclusions; and downstream artifacts. An exported catalog must never be treated as a live system inventory, and the version visible to an administrator must never be treated as proof of the version that actually executed.

## Broader creator-workflow trend

AI platforms are beginning to expose not only capabilities but **machine-readable inventories of capabilities**.

That is progress.

But the inventory itself is now another artifact with provenance requirements:

```text
SYSTEM
-> OBSERVATION LAYER
-> SNAPSHOT
-> CSV
-> AUDITOR
```

The Deep Drift consequence is simple:

> **Observability has latency. Audit evidence must carry the latency with it.**

Without that, better administrative tooling can accidentally manufacture stronger-looking but temporally weaker evidence.

## Secondary creator-workflow signal: demonstration becomes reusable procedure

OpenAI also documents **Record & Replay** in Codex for eligible users. A user can demonstrate a stable computer workflow once and turn the recorded behavior into a reusable Skill. Codex observes the actions and window content required to learn the workflow, and the resulting Skill can later guide Computer Use, browser actions, plugins, or combinations of those tools.

For Deep Drift this adds a second important transition:

```text
HUMAN DEMONSTRATION
-> OBSERVED ACTION SEQUENCE
-> REUSABLE SKILL
-> FUTURE AGENT EXECUTION
```

The Skill's causal source is not only written instruction. It can be embodied interaction captured from a desktop workflow.

This reinforces the need to preserve:

```text
recording provenance
+ demonstrated environment
+ generated Skill revision
+ later execution environment
```

A reusable procedure may now originate as behavior rather than prose.

## Sources

1. OpenAI Help Center. **Plugins in ChatGPT and Codex.** Current documentation accessed 2 September 2026. The page documents public Plugin catalog CSV export, included metadata, exclusion of workspace-created plugins, daily snapshot behavior, possible 48-hour staleness, and up-to-6-hour Codex directory refresh.  
   https://help.openai.com/en/articles/20001256/

2. OpenAI Help Center. **Using Codex with your ChatGPT plan.** Current documentation accessed 2 September 2026. Documents Record & Replay and its conversion of a demonstrated workflow into a reusable Skill.  
   https://help.openai.com/en/articles/11369540

## Research status

**Node status:** New.  
**Duplicate check:** No matching entry was found in the Deep Drift research log for public Plugin-catalog CSV export, its explicit 48-hour snapshot lag, directory-refresh lag, scope exclusion of workspace-created plugins, and the resulting separation between observed inventory state and execution state.  
**Relationship to prior nodes:** Extends RSPDSF by adding the administrative observation layer. RSPDSF tracks how repository-backed procedures change; CSOIF tracks how slowly those changes may become visible to inventories and auditors.  
**Freshness:** Verified against OpenAI first-party documentation current on 2 September 2026.
