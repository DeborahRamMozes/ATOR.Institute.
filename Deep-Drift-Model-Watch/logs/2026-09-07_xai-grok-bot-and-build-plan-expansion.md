# xAI / Grok Bot and Grok Build plan expansion

- **Detected time (Asia/Jakarta):** 2026-09-07 04:23
- **Provider:** xAI
- **Product/model:** Grok Bot; Grok Build
- **Exact change:** xAI's official newsroom lists two material access changes: (1) **Grok Bot is now included with more plans**, specifically SuperGrok, Cursor Pro, and all Cursor Teams plans; (2) **Grok Build on web and mobile is now available on every plan**.
- **Announcement date:** August 19, 2026 for Grok Build on every plan; August 26, 2026 for Grok Bot inclusion with more plans.
- **Release/availability date:** Same as announcement dates, based on xAI newsroom entries.
- **Rollout status:** Announced and available according to xAI's official newsroom; plan-by-plan regional exclusions were not stated.
- **Affected plans/regions/API surfaces:** Grok Bot: SuperGrok, Cursor Pro, Cursor Teams. Grok Build: all plans on web and mobile. No regional exclusions were specified in the official entries. These are product-surface and plan-access changes, not an API model-version change.
- **Official source(s):** xAI newsroom, https://x.ai/news (entries: “Grok Bot is now included with more plans” and “Grok Build on web and mobile”).
- **Pricing before/after:** No exact price change was stated in the announcement excerpts. The material change is access packaging and plan gating.
- **Evidence strength:** High for the existence of the plan/rollout changes; Medium for effective behavior parity across plans because xAI did not publish a full entitlement matrix in the newsroom excerpt.
- **Official fact vs Deep Drift inference:**
  - **Official fact:** Grok Bot access expanded to SuperGrok, Cursor Pro, and all Cursor Teams plans; Grok Build became available on every web/mobile plan.
  - **Deep Drift inference:** Prior cross-provider comparisons that used Grok only through a narrower plan or surface may no longer be comparable. Wider access can change latency, quotas, tool availability, persistence, and agent behavior independently of the underlying model.
- **Capability classes affected:** D. Tool and agent behavior; F. Commercial constraints; A. Memory and continuity where Grok Bot persistence is exercised; E. Image interpretation only indirectly if Build workflows include image-capable surfaces.
- **Why previous Deep Drift results may now be stale:** Earlier Grok results may have been produced under different entitlement, access, or surface constraints. Grok Bot's expansion increases the reachable persistent-agent surface, while Grok Build on every plan changes the baseline for app/site generation and iterative tool-use testing. A result previously attributed to model capability may have been caused by plan gating or product-surface limits.
- **Exact existing tests to rerun:**
  1. Plan-gated feature availability matrix.
  2. Autonomous multi-step execution and tool-selection tests.
  3. Cross-session continuity and persistence tests for Grok Bot.
  4. Reliability of write operations and end-to-end task completion.
  5. Grok Build create/modify/repair loop on web and mobile.
  6. Latency, quota, failure, and retry behavior under equivalent task loads.
- **New test to add:** Run the same agent task across SuperGrok, Cursor Pro, Cursor Teams, and a baseline non-entitled plan, then compare tool permissions, persistence, rate limits, background execution, and output artifacts. For Grok Build, run identical prompts across at least two previously restricted plans and one newly enabled plan.
- **Variables to hold constant:** Prompt text, model/version if selectable, tool permissions, task length, browser/device, region, account age, concurrency, time of day, retry policy, temperature/effort controls if exposed, and evaluation rubric.
- **Likely confounders:** Staged entitlement propagation, regional rollout differences, hidden quota differences, backend model routing, Cursor versus native xAI surface differences, account-level experiments, and changes in supporting tools rather than model weights.
- **Retest priority:** **High**

## Interpretation

This is a packaging and access event with direct experimental consequences. It does not prove a new model or a weight-level capability jump. It does, however, expand the set of users and plans for which persistent agents and build workflows are available, which can materially alter fair-comparison baselines.
