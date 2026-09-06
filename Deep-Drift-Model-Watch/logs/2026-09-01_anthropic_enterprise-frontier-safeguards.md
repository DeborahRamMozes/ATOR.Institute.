# Anthropic — Enterprise Frontier Safeguards (EFS) — Customer-controlled ZDR plus misuse safeguards

- **Detected:** 2026-09-06 20:47 Asia/Jakarta
- **Announcement date:** 2026-09-01
- **Release/availability date:** Planned phased rollout beginning later in fall 2026; interim eligibility stated for Fable 5 and Fable 5.1
- **Rollout status:** Announced; phased rollout pending
- **Affected plans/regions:** Enterprise customers; exact regional scope not specified in the announcement. Eligible customers receive interim ZDR on Fable 5 and Fable 5.1 until EFS is ready.
- **Official source:** https://www.anthropic.com/news/enterprise-frontier-safeguards
- **Evidence strength:** High
- **Retest priority:** High

## What changed

Anthropic announced Enterprise Frontier Safeguards (EFS), a product design that combines zero data retention (ZDR) with misuse-detection safeguards while storing relevant data in cloud infrastructure controlled by the customer rather than by Anthropic. The announcement states that rollout will occur in phases starting later in fall 2026. To bridge the transition, eligible customers will receive ZDR on Fable 5 and Fable 5.1.

## Official fact vs inference

### Official fact
- EFS is announced as an enterprise solution combining ZDR and misuse safeguards.
- Data is stored in cloud infrastructure controlled by the customer, not Anthropic.
- Rollout is phased and begins later in fall 2026.
- Eligible customers receive interim ZDR on Fable 5 and Fable 5.1 until EFS is ready.

### Deep Drift inference
- This is a material change to the observability, retention, and governance layer around model use, even if the underlying model weights do not change.
- Comparisons involving enterprise tool use, memory, retrieval, or agent traces may become non-equivalent across deployments because customer-controlled storage can alter what context is retained, indexed, inspected, or replayed.
- “ZDR” should not be treated as equivalent to “no operational trace”: the exact boundary between customer retention, provider safeguards, auditability, and model-visible context requires verification during rollout.

## Why this matters to Deep Drift

Prior Deep Drift results may become stale when comparing Claude behavior across native Anthropic infrastructure versus customer-controlled enterprise environments. Retention policy, trace visibility, misuse detection, and the availability of historical context can affect reproducibility, prompt continuity, tool-use auditing, and the apparent reliability of long-running agents. This is a system-boundary change, not merely a packaging note, because the storage and safeguard architecture becomes part of the experimental condition.

## Retest recommendation

- **Existing test to rerun:** Enterprise continuity and tool-trace reproducibility tests for Claude Fable 5/Fable 5.1; compare identical prompts and tool sequences under standard deployment versus EFS when available.
- **Additional test to add:** A retention-boundary test that checks what is stored, what is retrievable by the model, what is visible to customer administrators, what is visible to Anthropic safeguards, and what remains after session termination or deletion.
- **Variables to hold constant:** Model identifier, system/developer instructions, prompt text, tool schemas, temperature/effort settings, document corpus, region, user role, task duration, and network/app permissions.
- **Likely confounders:** Phased rollout differences, customer cloud configuration, region-specific data handling, policy defaults, logging/audit settings, enterprise admin controls, and differences between model-visible context and provider-side safety telemetry.

## Comparative dimensions affected

- [ ] Memory / continuity
- [ ] Own-chat-history retrieval
- [ ] Cross-chat / project / folder retrieval
- [ ] Indexing / compilation
- [ ] Context / reasoning
- [x] Tools / agents
- [ ] Image generation
- [ ] Image editing
- [ ] Visual identity / personality fidelity
- [ ] API pricing
- [x] Subscription packaging
- [x] Usage limits / access / regions

## Sources

1. Anthropic, “Developing Enterprise Frontier Safeguards with our customers,” 2026-09-01: https://www.anthropic.com/news/enterprise-frontier-safeguards
