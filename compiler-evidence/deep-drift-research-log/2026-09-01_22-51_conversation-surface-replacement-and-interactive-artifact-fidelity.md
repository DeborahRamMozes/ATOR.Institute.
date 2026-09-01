# Deep Drift Research Update — CSRIAF

## Conversation-Surface Replacement and Interactive-Artifact Fidelity

**Research date:** 1 September 2026, 22:51 WIB  
**Primary fresh deltas:** Google Workspace / Gemini, August 19-28, 2026  
**Scope:** memory/history continuity, mini-app builders, interactive artifacts, chat-surface migration, export classification, creator workflow provenance.

## Executive finding

Two Google changes should be read together.

First, Gemini can now generate custom interactive simulations and models directly inside Gemini chat. A user can ask to visualize a concept and receive a functional interactive object, including rotatable 3D structures, dynamic physics demonstrations, interactive tables, grids, and simulations. Google states that these are generated specifically for the user's question and are available now across Workspace customers and eligible Gemini users.

Second, Google is replacing the Gemini side panel in Google Chat with a new surface called Ask Gemini in Chat. The old side-panel conversation history does not migrate into the new surface. Gems also stop being available in the Chat side panel even though they remain available in other Workspace applications. Google says administrators can export the old conversation history and, when organizational policy permits, end users can download it. In Google Takeout and Data Export, that history is classified under "Gemini in Workspace," not "Google Chat."

The combined Deep Drift problem is therefore:

```text
CREATION CAPABILITY EXPANDS
WHILE
CONVERSATION CONTINUITY FRACTURES
```

The creator can now produce richer executable or interactive artifacts while the conversational surface that helped create, explain, or contextualize related work may be replaced without its history following automatically.

## New node

### Conversation-Surface Replacement and Interactive-Artifact Fidelity (CSRIAF)

Core distinctions:

```text
SURFACE REPLACEMENT
!= HISTORY MIGRATION

EXPORTABLE HISTORY
!= CONTINUOUS HISTORY

GOOGLE CHAT LOCATION
!= GOOGLE CHAT EXPORT CLASSIFICATION

GEM ACCESS IN WORKSPACE
!= GEM ACCESS IN EVERY WORKSPACE SURFACE

INTERACTIVE RESPONSE
!= STATIC DOCUMENT

GENERATED SIMULATION
!= RECONSTRUCTABLE GENERATIVE STATE
```

The emerging creator graph is:

```text
WORKSPACE / GEMINI CONTEXT
        |
        +--> ASK GEMINI IN CHAT
        |       |
        |       +--> Gmail / Drive / Calendar retrieval
        |       +--> tasks / meetings / drafting
        |
        +--> GEMINI APP
                |
                +--> text
                +--> files
                +--> interactive table
                +--> 3D model
                +--> simulation
                +--> visualization
```

But conversational continuity can simultaneously break:

```text
OLD GEMINI SIDE PANEL IN CHAT
        |
        +--> conversation history H1
        +--> Gems access
        |
        X  no automatic migration
        |
NEW ASK GEMINI IN CHAT
        |
        +--> new sessions H2
        +--> different access surface
```

H1 and H2 belong to the same broad product family but are not one continuous archive.

## 1. Interactive simulations turn chat into an application runtime

Google announced on August 28, 2026 that Gemini can generate interactive simulations and models directly inside chat.

Examples described by Google include:

- rotatable and zoomable 3D DNA models;
- dynamic pendulum simulations showing energy transfer;
- interactive tables for understanding cash burn rates;
- custom grids, tables, visual elements, and simulations built specifically for the question.

This matters because the output is no longer merely a textual response or a downloadable document.

The result can behave like a small application.

```text
PROMPT
   |
   v
MODEL GENERATION
   |
   v
INTERACTIVE OBJECT
   |
   +--> user manipulation
   +--> changed view state
   +--> exploration path
   +--> derived interpretation
```

Deep Drift therefore needs to preserve more than the prompt and screenshot.

A screenshot captures one state of an object whose meaning may depend on rotation, parameter changes, animation, interaction sequence, or generated internal structure.

### New provenance requirement

Interactive AI artifacts should carry:

```text
generation prompt
model identity
generation timestamp
artifact type
initial state
interaction controls
parameter ranges
generated code or representation if available
user interaction events
resulting state
downstream screenshot / document / decision
```

Without that, an archived image of the simulation is merely the shadow of the actual research object.

## 2. Ask Gemini replaces a surface without migrating its conversational history

Google announced Ask Gemini in Google Chat on August 19, with rollout beginning August 26, 2026.

Ask Gemini becomes a dedicated conversational surface inside Google Chat for:

- finding Workspace information;
- drafting content;
- summarizing discussions;
- managing tasks and calendar events;
- organizing separate Gemini sessions.

But Google explicitly states that conversation history from the previous Gemini side panel in Chat **will not migrate** to the new Ask Gemini experience.

Therefore:

```text
FEATURE SUCCESSOR
!= CONVERSATION SUCCESSOR
```

The user may experience Ask Gemini as the replacement for the old interface, while the historical conversation graph remains separated.

For Deep Drift, a product transition must therefore distinguish:

```text
functional continuity
interface continuity
conversation continuity
memory continuity
export continuity
```

These are different things.

## 3. Export namespace can differ from visible application namespace

Google says old Gemini side-panel conversation history can be exported, but in Data Export and Google Takeout the data appears under:

```text
"Gemini in Workspace"
```

rather than:

```text
"Google Chat"
```

This creates an archival discovery problem.

A future investigator who knows that the interaction occurred visibly inside Google Chat may reasonably search the Google Chat export and fail to find the relevant AI conversation.

Thus:

```text
VISIBLE SURFACE NAME
!= EXPORT CONTAINER NAME
```

Deep Drift should preserve both.

This is especially important for automated archival systems that infer export paths from interface identity.

## 4. Gems become surface-dependent

With Ask Gemini replacing the old side panel, Google says Gems are no longer accessible through the Gemini side panel in Chat, although Gems remain available through Gemini side panels in other Workspace apps.

So:

```text
GEM EXISTS
!= GEM AVAILABLE HERE
```

The same reusable AI procedure can remain active at the account or Workspace level while disappearing from one execution surface.

This reinforces a previous Deep Drift finding: procedural identity, storage identity, and execution-surface availability are separate axes.

## 5. Creator artifacts are moving beyond DOCX and PDF

No stronger new DOCX/PDF generation primitive displaced the existing Deep Drift file-generation nodes in this scan.

The more important change is that the definition of "document output" keeps widening.

A creator workflow can now produce:

```text
DOCX
PDF
SLIDES
IMAGE
INTERACTIVE TABLE
3D MODEL
SIMULATION
DASHBOARD
LIVE WORKSPACE ACTION
```

A provenance framework that treats downloadable files as the primary unit is already too narrow.

For Deep Drift, "artifact" must include interactive stateful outputs even when no conventional file exists.

## Fresh category scan

| Area | Fresh finding | Deep Drift implication |
|---|---|---|
| Memory/history | Major continuity issue | Replacement surfaces may not inherit prior conversation history |
| Skills/Gems | Surface-dependent availability | A reusable procedure can exist but disappear from one UI |
| Mini-app builders | Major | Gemini chat now directly generates interactive simulations/models |
| Chat-to-document | No stronger static-file primitive | Chat is becoming a runtime, not merely a route to documents |
| DOCX/PDF | No new dominant format feature | Static files are only one artifact class |
| Copy/export | Major metadata issue | Export category may not match the visible application surface |
| Creator workflow | Major | Creation expands toward executable artifacts while history fragments across surfaces |

## New failure classes

### Surface-Successor Continuity Fallacy
Assuming the replacement interface automatically inherits the old conversation archive.

### Interactive-to-Static Collapse
Treating a screenshot or PDF capture as equivalent to the interactive object that produced it.

### Export-Namespace Misattribution
Looking for historical data under the visible product name when the platform classifies it elsewhere.

### Procedural Surface Availability Loss
Failing to record that a Gem or reusable procedure was available in some Workspace surfaces but not another.

### Interaction-State Erasure
Archiving the generated simulation without the state produced by user manipulation.

### Executable-Artifact Orphaning
Preserving a visual rendering without the underlying interactive representation or generated implementation.

### Functional-Continuity Overclaim
Treating successor functionality as proof of historical, memory, or procedural continuity.

### Artifact-Class Blindness
Restricting provenance to files and excluding interactive, executable, or generated runtime objects.

## Deep Drift benchmark additions

**Surface Replacement Fidelity (SRF)**  
Can a successor UI be distinguished from the historical surface it replaces?

**Conversation Non-Migration Fidelity (CNMF)**  
Can the archive explicitly represent conversations that remain behind during a surface transition?

**Export Namespace Fidelity (ENF)**  
Can exported records be mapped from their storage/export category back to the interface where the interaction occurred?

**Interactive Artifact Fidelity (IAF)**  
Can a generated simulation or model be preserved as more than a static screenshot?

**Interaction State Fidelity (ISF)**  
Can user manipulations and resulting states be reconstructed?

**Procedural Surface Availability Fidelity (PSAF)**  
Can Gem/Skill availability be reconstructed by execution surface?

**Functional-vs-Historical Continuity Fidelity (FHCF)**  
Can feature succession be separated from history, memory, and procedural succession?

**Artifact-Class Completeness Fidelity (ACCF)**  
Does the provenance system recognize static files, interactive objects, simulations, dashboards, and other generated runtime artifacts as first-class outputs?

## Canonical Deep Drift requirement

> Every material AI-assisted creator workflow should preserve a machine-readable surface-and-artifact manifest linking each interaction to the exact product surface and version; predecessor and successor surface relationship; conversation-history migration status; export availability and export namespace; reusable Gem, Skill, or procedural-object availability by surface; retrieval context; model identity; generated artifact class; underlying executable or structured representation when available; initial interactive state; user interaction and parameter changes; resulting state; static captures; downstream documents and decisions; and later surface transitions. A successor interface must never be treated as proof of conversational continuity, and a screenshot, PDF, or other static rendering must never be treated as a complete archive of an interactive AI-generated artifact.

## Broader creator-workflow trend

The new pattern is:

```text
CHAT AS TEXT INTERFACE
        |
        v
CHAT AS FILE GENERATOR
        |
        v
CHAT AS INTERACTIVE ARTIFACT GENERATOR
        |
        v
CHAT AS APPLICATION RUNTIME
```

At the same time:

```text
OLD SURFACE
   |
   X  HISTORY DOES NOT MIGRATE
   |
NEW SURFACE
```

This creates a strange asymmetry.

The artifact becomes richer while its conversational ancestry can become harder to preserve.

For Deep Drift, that means archival design cannot wait until the end of the workflow. Provenance has to be captured while the surface, state, and executable object still exist.

## Sources

1. Google Workspace Updates. **Generate interactive simulations and models in the Gemini app.** August 28, 2026.  
   https://workspaceupdates.googleblog.com/2026/08/

2. Google Workspace Updates. **Introducing Ask Gemini in Chat: your new partner in productivity.** August 19, 2026; rollout beginning August 26, 2026.  
   https://workspaceupdates.googleblog.com/2026/08/ask-gemini-in-chat.html

## Research status

**Node status:** New.  
**Duplicate check:** No existing Deep Drift research-log entry matched the combination of non-migrating Gemini Chat-surface history, export-namespace divergence, surface-dependent Gems availability, and direct generation of interactive simulations/models.  
**Relationship to prior nodes:** Complements prior workspace-fork, procedural-locality, export-boundary, and generative-interface nodes. CSRIAF specifically covers successor-surface discontinuity plus stateful interactive artifacts.  
**Freshness:** Verified against first-party Google Workspace documentation available on 1 September 2026.
