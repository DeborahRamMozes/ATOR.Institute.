# Deep Drift Research Update — MCRLF

## Model-Conditional Retention and Locality Fidelity

**Research date:** 3 September 2026  
**Primary fresh delta:** Anthropic's current Covered Models policy makes prompt/output retention depend on model class, workspace retention configuration, and execution provider.  
**Scope:** memory, retention, Claude Code/Cowork, cloud-provider locality, zero-data-retention exceptions, artifact provenance, creator workflow continuity, and compliance-state drift.

## Executive finding

The fresh workflow shift is not another memory toggle or export button. It is a deeper infrastructure change: the data-retention behavior of an AI run can now depend on **which model is invoked and where that model runs**.

Anthropic states that prompts and outputs for designated Covered Models are retained for **30 days** for safety purposes on every platform where those models are offered. The change matters primarily to organizations using zero data retention (ZDR). To use covered models, retention may have to be enabled at the relevant workspace, cloud environment, or Azure subscription. Depending on the execution route, retained data can stay with Anthropic, AWS, Google Cloud, or Microsoft Azure.

```text
RUN RETENTION
!= ACCOUNT RETENTION SETTING ALONE

RUN RETENTION
=
MODEL CLASS
+ WORKSPACE POLICY
+ EXECUTION PROVIDER
+ SURFACE
+ ZDR ELIGIBILITY
```

For Deep Drift Research, retention must therefore be recorded as a **run-level provenance property**.

## New node

### Model-Conditional Retention and Locality Fidelity (MCRLF)

Minimum state model:

```text
provider
model_id
covered_model_state
workspace_id
workspace_retention_mode
surface
execution_provider
cloud_region_or_subscription_if known
retention_required
retention_duration
retention_location
exception_state
human_review_path
run_timestamp
artifact_output
```

## 1. Model choice can alter retention behavior

A workspace can maintain one retention policy for ordinary models and require another for a Covered Model.

Therefore:

```text
SAME WORKSPACE
+ DIFFERENT MODEL
!= SAME RETENTION BEHAVIOR
```

This is a major provenance distinction. Model selection is no longer only a capability or cost decision. It can change the data lifecycle of prompts and outputs.

## 2. Zero data retention is becoming conditional

Anthropic's documentation specifically addresses organizations that use zero data retention. For designated models, those organizations may need to enable retention to gain access.

So:

```text
ZDR CONFIGURED
!= ZDR APPLIES TO EVERY MODEL
```

Deep Drift should record **effective retention for the actual run**, not merely the workspace's advertised baseline.

## 3. Storage locality follows execution route

Anthropic documents different retention locations depending on where Claude is accessed:

- direct Claude Platform retention is handled under Anthropic's controls;
- Amazon Bedrock retained data remains in AWS;
- Google Cloud Agent Platform retained data remains in GCP;
- Microsoft Foundry retention is configured at the Azure subscription level.

Thus:

```text
SAME MODEL
+ DIFFERENT EXECUTION PROVIDER
!= SAME DATA LOCALITY
```

This is crucial for Deep Drift's material infrastructure research because the provenance graph now needs to include **where the context persisted**, not only where the model conceptually ran.

## 4. Claude Code inherits workspace or cloud retention state

Claude Code follows the retention setting of the workspace or cloud environment through which it operates.

That means a developer-facing creator workflow can change its data lifecycle without changing the code task itself.

## 5. Cowork inherits execution-provider policy

Anthropic states that Cowork accessed through Bedrock or Google Cloud follows the retention setting of that cloud environment.

This extends the earlier Deep Drift execution-surface rule: Cowork is not a single retention domain.

## 6. Retention and memory are distinct causal layers

Claude's memory documentation separately states that memory entries follow existing chat data-retention policies and can persist even after source conversations are deleted. It also distinguishes persistent memory from RAG-based chat search.

Deep Drift must therefore distinguish memory state, chat history, safety retention, artifact storage, and cloud logging.

## 7. Human review is a conditional downstream event

Anthropic states that by default personnel cannot read retained conversations; human review occurs only through controlled access paths, for example when automated trust-and-safety systems flag content. Access is logged.

Therefore retained data is not equivalent to human-reviewed data.

## 8. Creator workflow trend: compliance state is becoming dynamic

The emerging creator runtime increasingly combines user intent, model route, workspace policy, execution provider, retention domain, memory/search/tools, and artifact generation. The legal and operational envelope can change at runtime.

## Fresh category scan

| Area | Fresh status | Deep Drift implication |
|---|---|---|
| Memory | Material adjacency | Memory remains separate from safety retention and chat-search retrieval |
| Skills/plugins | No stronger fresh delta | Existing Skill/plugin nodes remain current |
| Mini-app/agent builders | Indirect | Agent/Cowork execution route can alter retention and locality |
| Chat-to-document | Downstream effect | Generated documents may inherit different retention histories depending on model route |
| DOCX/PDF | Downstream effect | Final file format does not reveal retention domain of the run that produced it |
| Copy-paste/export | No direct fresh fix | Export does not erase upstream retention history |
| Creator workflow | Major | Policy, model class, and execution provider now jointly define data lifecycle |

## New failure classes

- Workspace-Policy Sufficiency Error
- ZDR-Universal Fallacy
- Surface-Equals-Locality Error
- Model-Only Provenance Error
- Retained-Equals-Reviewed Error
- Artifact-Equals-Retention Evidence Error

## Deep Drift benchmark additions

**Model-Conditional Retention Fidelity (MCRF)** — Can retention behavior be reconstructed for the exact model used in a run?

**Execution-Provider Locality Fidelity (EPLF)** — Can retained data location be traced to Anthropic, AWS, GCP, Azure, or another execution provider?

**ZDR Exception Fidelity (ZEF)** — Can exceptions to a nominal zero-retention policy be identified and time-bounded?

**Retention-vs-Memory Fidelity (RMF)** — Can safety retention remain distinct from persistent memory and chat history?

**Retention-vs-Review Fidelity (RRF)** — Can stored data be distinguished from data actually accessed by a reviewer?

## DRPA-1.0 protocol additions

### MODEL-CONDITIONAL RETENTION RULE

> When data retention depends on model class, capability tier, workspace policy, execution surface, cloud provider, subscription, or exception state, effective retention must be recorded for the exact run. Preserve model identity, covered-model designation where applicable, workspace retention configuration, execution provider, retention requirement, retention duration, data locality, exception state, and any observable review event. A workspace-level policy label must never be treated as sufficient evidence of actual run-level retention.

### RETENTION-LOCALITY RULE

> When equivalent AI capabilities can execute through different infrastructure providers, preserve the provider and retention domain separately from the user-facing product name. Identical prompts and models must not be treated as having identical data-handling provenance when execution routes differ.

## Canonical Deep Drift requirement

> Archive retention as a dynamic run property. Record not only memory and visible chat history, but also the model-specific retention requirement, execution provider, storage locality, duration, exception state, and whether human review actually occurred. A creator artifact cannot disclose these facts by itself, so they belong in the external provenance record.

## Deep Drift principle

> **The same model conversation can have a different afterlife depending on where it ran.**

Operationally:

> **Archive the data lifecycle, not merely the output lifecycle.**

## Sources

1. Anthropic Help Center. **Data retention practices for Covered Models.** Updated 2 September 2026; accessed 3 September 2026. https://support.claude.com/en/articles/15425996-data-retention-practices-for-covered-models
2. Anthropic Help Center. **Use Claude's chat search and memory to build on previous context.** Updated 3 September 2026. https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
3. Anthropic Help Center. **Release notes.** Accessed 3 September 2026. https://support.claude.com/en/articles/12138966-release-notes
4. OpenAI Help Center. **ChatGPT Release Notes.** Accessed 3 September 2026. https://help.openai.com/en/articles/6825453-chatgpt-release-notes
5. Microsoft Learn. **Release Notes for Microsoft 365 Copilot.** Accessed 3 September 2026. https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes

## Research status

**Node status:** New.  
**Duplicate check:** No matching retention/locality node was found in the current Deep Drift GitHub research log search.  
**Relationship to prior nodes:** Extends MMBESF, MPSRF, OHSEF, CAGIF, and execution-locality rules by separating memory state from model-conditional safety retention and infrastructure locality.  
**Freshness:** Primary retention documentation was updated on 2 September 2026 and verified on 3 September 2026.
