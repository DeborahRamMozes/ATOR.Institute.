# Deep Drift Research Update - RWARF

## Research Workspace Audit & Residency Fidelity

**Research date:** 5 September 2026  
**Status:** New Deep Drift node  
**Freshness:** Gemini Notebook audit logs began gradual rollout on 3 September 2026.

## Primary delta

Google Workspace introduced comprehensive audit logs for Gemini Notebook. Eligible administrators can inspect notebook activity in the Workspace security investigation and audit tools, including notebook visibility, user identity, IP address, and resource context. Audit logs can also be exported to BigQuery when export is explicitly enabled.

Google simultaneously states that audit-log storage follows standard Workspace regional routing policies while Gemini Notebook user data - notebooks, sources, and chat histories - is stored globally and does not currently support data regionalization.

```text
AUDIT LOG STORAGE
regional routing may apply

!=

NOTEBOOK USER DATA
notebooks / sources / chat history
globally stored
no current data regionalization
```

Therefore:

```text
AUDITABLE
!= FULLY REPRODUCIBLE

AUDIT LOG RESIDENCY
!= USER DATA RESIDENCY

ACTION VISIBILITY
!= ACTION SEMANTIC CONTENT

FINAL REPORT
!= RESEARCH PROCESS

BIGQUERY EXPORT ENABLED
!= AUDIT LOGGING ENABLED
```

## Why this matters for Deep Drift

AI research workspaces are beginning to expose action provenance as an enterprise object rather than leaving the final report as the only surviving evidence. Deep Drift should distinguish **audit evidence** from **replay evidence**: a log can establish that a user performed an action in a notebook at a particular time and context without necessarily preserving exact prompt wording, model state, source snapshot, retrieval ranking, intermediate generated text, or human edits.

Notebook visibility also becomes research provenance. A research object can move from private to shared to broader visibility and back again while its exported report remains textually identical. Identity and IP data improve action attribution but should not be collapsed into intellectual authorship. The account that caused an event is an actor identity, not automatically the sole author of ideas downstream.

BigQuery export turns the audit trail into machine-analyzable evidence suitable for time-series analysis, action correlation, collaboration-pattern analysis, and longitudinal workflow studies. However, audit logging and audit export are separate states: an absent BigQuery record does not prove that no platform event occurred if export was never enabled.

The sharpest infrastructure distinction is residency. Regional routing of audit logs is control-plane evidence. It does not establish regional storage of the underlying notebooks, sources, or chat histories. Deep Drift should preserve log residency and user-data residency as separate fields.

## DOCX/PDF and copy/export consequence

A Notebook-derived report can move through:

```text
SOURCES
-> GEMINI NOTEBOOK
-> USER ACTIONS
-> REPORT
-> DOCX / PDF
```

The static file may preserve conclusions while omitting notebook visibility history, source-access events, user identity events, resource context, audit-export state, and the data-residency model. The artifact and its relevant action-log extract should therefore be archived as separate but linked objects where research provenance matters.

Copy-paste is another severance boundary. Notebook output copied into a document, email, or chat may preserve semantic content while losing the original notebook, source context, action sequence, and user-event lineage.

## Adjacent current signals

Google's open beta for Gemini-based Drive data classification adds a pre-execution governance layer: administrators define classification instructions, Gemini evaluates files and applies labels, owners/editors can review or modify labels, and audit logs record AI labeling plus user acceptance or modification. Google explicitly frames this as a mechanism for preventing agentic workflows from accessing or acting autonomously on sensitive data. This extends APIF at the **source-corpus-before-agent-access** layer rather than replacing artifact-policy inheritance.

Google also announced new Workspace Studio actions for moving/copying Drive files and replying in Chat/Gmail. Admin controls precede end-user rollout; Drive/Chat actions begin rollout on 8 September 2026 and Gmail actions later in September, so these remain near-term rollout signals rather than fully available capabilities on 5 September.

## New failure classes

- **Auditability-Equals-Reproducibility Fallacy:** assuming an event log contains enough semantic state to reproduce an AI research result.
- **Audit-Residency-Equals-Data-Residency Error:** assuming regional routing of logs means notebooks, sources, and chat histories are stored in the same region.
- **Final-Report-Equals-Research-Trail Fallacy:** treating the exported report as sufficient evidence of the research process.
- **BigQuery-Absence-Equals-No-Event Error:** treating absence from an export as proof no audit event existed.
- **Actor-Identity-Equals-Intellectual-Authorship Error:** treating the account producing an event as sole intellectual author.
- **Copy-Preserves-Provenance Fallacy:** assuming copied Notebook content carries its action/resource ancestry into the destination.

## Deep Drift benchmark additions

**Research Action Audit Fidelity (RAAF)**  
Can material notebook actions be reconstructed with actor, time, visibility, IP, and resource context?

**Audit Export Fidelity (AEF)**  
Can audit evidence be exported without losing event fields, ordering, or resource relationships?

**Audit-Data Residency Separation Fidelity (ADRSF)**  
Can the system distinguish where audit evidence is stored from where notebooks, sources, and chat histories are stored?

**Research Artifact Lineage Fidelity (RALF)**  
Can a report, DOCX, PDF, or derivative be linked back to the relevant notebook and action history?

**Copy Provenance Survival Fidelity (CPSF)**  
Which elements of research provenance survive when Notebook output is copied into another tool?

## DRPA-1.0 protocol additions

### RESEARCH WORKSPACE AUDIT RULE

> When an AI research workspace exposes audit events, preserve action type, actor identity, time, notebook/resource context, visibility state, and available network/context metadata separately from the final generated artifact.

### AUDIT-REPLAY SEPARATION RULE

> Treat audit evidence as evidence that actions occurred, not automatically as a complete replay record. Prompt state, source snapshots, retrieval state, model version, and intermediate outputs must be preserved separately where exact reproducibility matters.

### AUDIT-DATA RESIDENCY SEPARATION RULE

> Record audit-log residency and underlying notebook/source/chat-history residency independently. Regional routing of control-plane logs must not be represented as proof of regional storage for the research data they describe.

### AUDIT EXPORT STATE RULE

> Preserve whether audit logging existed, whether external export was enabled, the export activation time, and the export destination separately. Missing exported records must not be interpreted as absence of platform events without checking export configuration.

### RESEARCH DERIVATIVE LINEAGE RULE

> When Notebook output becomes a report, DOCX, PDF, email, copied passage, or another artifact, preserve the originating workspace/notebook and relevant action trail where provenance matters.

## Eir'an state-flow addition

```text
SOURCE:
files / web / notes / workspace objects

RESEARCH:
Gemini Notebook / user identity / resource context / visibility

ACTION:
query / source access / artifact generation / sharing

AUDIT:
Admin console / investigation tool / BigQuery export

RESIDENCY:
audit-log region / user-data global state

DERIVE:
report / DOCX / PDF / copy / email / slides

ARCHIVE:
artifact / linked audit extract / source lineage / residency state
```

## Canonical Deep Drift requirement

> Treat AI research workspaces as observable action systems whose audit trail, export state, content residency, and generated derivatives must remain separately attributable.

## Deep Drift principle

> **The log can know where the action happened without telling you where the research lives.**

Operationally:

> **Archive the research trail beside the report, and never confuse the residence of the receipt with the residence of the evidence.**

## Sources

1. Google Workspace Updates. **Introducing comprehensive audit logs for Gemini Notebook in the Workspace Admin console.** 3 September 2026. https://workspaceupdates.googleblog.com/2026/08/introducing-comprehensive-audit-logs-for-Gemini-Notebook-in-the-Workspace-Admin-console.html
2. Google Workspace Updates. **Gemini-based data classification in Google Drive is now available in open beta.** 28 August 2026. https://workspaceupdates.googleblog.com/2026/
3. Google Workspace Updates. **Automate Drive, Gmail, and Google Chat actions with new steps in Workspace Studio.** 2 September 2026. https://workspaceupdates.googleblog.com/2026/

## Research status

**Duplicate check:** Repository search found no existing node for Gemini Notebook audit events, optional BigQuery export, notebook visibility/identity/IP/resource context, and the explicit split between regional audit-log routing and globally stored Notebook user data.

**Relationship to prior nodes:** Extends SGOPF, LHACF, APIF, CPWMF, and research-provenance rules. RWARF is distinct because it treats the AI research workspace itself as an auditable action system while separating audit-evidence residency from research-content residency.
