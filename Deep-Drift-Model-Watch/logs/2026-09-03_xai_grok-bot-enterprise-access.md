# Deep Drift Model Watch — xAI Grok Bot Enterprise Access Expansion

**Detected:** 2026-09-04 05:41 Asia/Jakarta  
**Provider:** xAI / SpaceXAI  
**Product:** Grok Bot  
**Retest priority:** **HIGH**  
**Evidence strength:** **High — primary official product source**

## Exact change

On September 3, 2026, xAI announced that **Grok Bot is now available for enterprise customers**, converting prior enterprise waitlist-style access into active enterprise availability. Grok Enterprise and Cursor Enterprise customers receive free Grok Bot usage for two weeks and may invite their entire organization, including people without an existing seat.

The release also adds enterprise governance capabilities for deployment at scale, including **access controls, network controls, and audit controls**. Each user's Grok Bot work runs in its own isolated environment, and a Bot has no account access by default until the user signs it into a service.

This is a material packaging, access, rollout, and governance change distinct from the already-logged September 3 persistent-agent architecture disclosure.

## Announcement date

- **2026-09-03**

## Release / availability

- Available now for enterprise customers.
- Explicitly named eligible customer groups: **Grok Enterprise** and **Cursor Enterprise**.
- Free Grok Bot usage is offered for the first **two weeks** following the announcement.
- Enterprise customers can invite the whole organization, including users without an existing paid seat.

## Pricing / packaging

### Before
Enterprise access had previously been described as waitlist-based or not generally active in the original Grok Bot rollout.

### After
- Grok Enterprise and Cursor Enterprise customers: **free Grok Bot usage for two weeks**.
- Organization-wide invitation is permitted, including people without an existing seat.
- Long-term post-trial pricing is not stated in the announcement and should be treated as **not yet specified**, not inferred.

## Affected plans / regions / API surfaces

- Grok Enterprise
- Cursor Enterprise
- Organization-level Grok Bot deployments
- No API pricing change was announced in this release.
- The announcement does not specify a new geographic restriction or expansion by country.

## Official source

1. xAI / SpaceXAI — **Grok Bot for Enterprise**, published 2026-09-03: https://x.ai/news/grok-bot-for-enterprise

## Official fact

xAI explicitly states that:

- Grok Bot is now available for enterprises.
- Grok Enterprise and Cursor Enterprise customers receive free usage for two weeks.
- Enterprise customers can invite their whole organization, including people without an existing seat.
- The enterprise release adds access, network, and audit controls.
- Each user's work runs in an isolated environment separate from other users.
- A Bot has no access by default and can reach only accounts the user explicitly signs into.
- Bots can operate autonomously, save learned routines, accept corrections, and rerun workflows.
- Bots can message each other and share context.

## Deep Drift inference

Enterprise availability materially changes the comparison surface because Grok Bot can now be tested under governed multi-user conditions rather than only as an individual persistent-agent product.

This makes it possible to distinguish four layers that earlier Deep Drift tests could blur together:

1. **Model capability** — what the underlying Grok model can infer or execute.
2. **Bot-local persistence** — what one Bot retains across sessions.
3. **Organization-level governance** — what admins can permit, restrict, audit, or isolate.
4. **Cross-user / cross-Bot context transfer** — what information can or cannot move between agents and users.

The enterprise release does **not** prove unrestricted account-wide or organization-wide memory. In fact, the stated isolation model suggests that strong boundaries may exist between users and signed-in accounts. Those boundaries now deserve direct testing.

## Capability classes affected

- Packaging / tier availability
- Enterprise rollout
- Persistent agents
- Multi-user continuity
- Cross-Bot context sharing
- Access control
- Network governance
- Auditability / provenance
- Tool-account boundaries
- Isolated execution environments
- Cost normalization during free-trial period

## Why previous Deep Drift results may now be stale

Earlier Grok Bot testing based on individual or non-enterprise access may not represent enterprise behavior. Admin controls, user isolation, audit logging, account authorization, and organization-wide deployment can materially change what a Bot can see, remember, share, and execute.

Any comparison of Grok Bot against ChatGPT Enterprise/Business/Work, Claude Team/Enterprise/Cowork, Gemini Enterprise surfaces, or enterprise agent products should therefore separate **consumer persistence** from **governed enterprise persistence**.

## Existing tests to rerun

### 1. Persistent-Agent Boundary Test (PABT-01)
Repeat PABT-01 under an enterprise workspace and determine whether memory or retrieval boundaries differ from individual Grok Bot access.

### 2. Cross-user isolation
Place unique facts, files, or credentials in User A's Bot environment and test whether User B or User B's Bots can retrieve, infer, or accidentally receive them.

### 3. Cross-Bot context sharing
Test whether Bots can share context only when explicitly connected or whether organizational deployment changes default propagation behavior.

### 4. Audit provenance
Perform a multi-tool workflow and verify whether administrators or users can reconstruct which Bot, account, tool, and source produced each step.

### 5. Account authorization boundary
Connect one Bot to a limited set of services and verify that it cannot silently reach accounts or data sources that were not explicitly authorized.

### 6. Workflow portability
Create a learned routine as one enterprise user, hand the Bot or template to another user, and measure what persists: instructions, corrections, memory, connected credentials, artifacts, and provenance.

### 7. Cost-normalized agent comparison
Do not treat the two-week free period as representative steady-state pricing. Track task completion, token/tool usage if exposed, elapsed time, and resource consumption independently from promotional cost.

## New Deep Drift test to add

### Enterprise Isolation & Transfer Test (EITT-01)

**Question:** Where does Grok Bot draw the boundary between persistent intelligence, organizational sharing, and user isolation?

Protocol:

1. Create two enterprise users with separate Bots.
2. Seed User A, User B, Bot A, Bot B, a shared Bot, and a connected app with different canary facts.
3. Test retrieval from every other surface without explicitly sharing those canaries.
4. Repeat after explicitly sharing one Bot or routine.
5. Compare what transfers automatically, what transfers only after permission, and what remains isolated.
6. Inspect available audit output and require provenance for every retrieved fact.
7. Repeat with one connected account removed mid-workflow to test revocation behavior.

## Variables to hold constant

- Same enterprise organization
- Same region
- Same Grok Bot version
- Same number of users and Bots
- Same seeded canary facts
- Same connected applications
- Same permission structure except where deliberately varied
- Same prompt wording
- Same task sequence and delay between sessions

## Likely confounders

- Enterprise controls may vary by administrator configuration.
- The two-week free period may alter usage behavior and cannot be treated as permanent pricing.
- Cross-Bot sharing may require explicit group membership or template transfer.
- Connected-app retrieval may appear to be memory unless source provenance is tested.
- Enterprise audit logs may expose product-layer state that is not accessible to the model itself.
- Cursor Enterprise and Grok Enterprise may have different entitlement or interface details despite sharing Grok Bot access.

## Deep Drift retest recommendation

**HIGH:** rerun the Grok Bot continuity suite under enterprise conditions, prioritizing EITT-01, PABT-01, cross-user isolation, cross-Bot transfer, revocation behavior, and audit provenance. Treat the two-week free period as a packaging event rather than a durable price baseline.

The important change is not merely that enterprises can now buy or trial Grok Bot. The research value is that xAI has exposed a governed multi-user persistence layer, which gives Deep Drift a cleaner way to test where the supposed "brain" ends and where permissions, storage, retrieval, and organizational plumbing begin.