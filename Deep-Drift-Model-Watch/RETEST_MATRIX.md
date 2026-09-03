# Deep Drift Retest Matrix

Use this matrix to decide what must be rerun after a qualifying model/product change.

| Trigger | Retest family | Core question | Priority default |
|---|---|---|---|
| New flagship / major model | Full comparative sweep | Does the new model materially change prior Deep Drift rankings or failure patterns? | Critical |
| Context-window / reasoning change | Context + compilation | Can it retain, reconcile, and correctly prioritize dispersed instructions at scale? | High |
| Memory / chat-history feature | Memory + continuity | Can it retrieve its own relevant prior user interactions without invented continuity? | Critical |
| Cross-project/folder retrieval | Indexing + provenance | Can it find the correct historical node and preserve source boundaries? | Critical |
| Tool / agent upgrade | Tool execution | Can it complete multi-step connected workflows without dropping state or asking redundant questions? | High |
| Image generation upgrade | Image interpretation | Can it convert chaotic text, established personality, visual identity, and reference constraints into faithful output? | High |
| Image editing upgrade | Edit fidelity | Can it modify only the requested elements while preserving identity, geometry, tattoos, placement, and untouched regions? | High |
| API price change | Commercial normalization | Does cost-per-use alter fair model comparison or feasible test depth? | Medium |
| Subscription / packaging change | Access normalization | Are previously comparable capabilities now gated by plan, region, quota, or product surface? | High |
| Usage-limit change | Reproducibility | Can the same test still be repeated enough times for meaningful comparison? | Medium |

## Retest output minimum

Every rerun should preserve:

- model/product/version tested
- date and local time
- account/plan tier
- region if relevant
- interface/API surface
- enabled tools/connectors
- prompt/input held constant
- deviations caused by product constraints
- first-run output
- repeated-run variance
- failure modes
- evidence screenshots/files where appropriate
- conclusion relative to the previous Deep Drift baseline

## Interpretation rule

A vendor announcement is not itself proof of improved behavior. Deep Drift records the announcement first, then treats comparative retesting as the evidence layer. Claims and observed behavior must remain separate.
