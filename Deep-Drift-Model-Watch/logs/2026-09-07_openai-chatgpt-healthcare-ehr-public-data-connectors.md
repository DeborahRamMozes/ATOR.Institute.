# OpenAI / ChatGPT Healthcare EHR and Public-Data Connectors

- **Detected time (Asia/Jakarta):** 2026-09-07 15:15
- **Provider:** OpenAI
- **Product/model:** ChatGPT for Healthcare; Epic EHR integration; Healthcare Public Data plugin
- **Exact change:** OpenAI introduced an integration that brings authorized patient context from Epic into ChatGPT for Healthcare, plus a structured plugin connecting ChatGPT to nine official healthcare data sources including PubMed, DailyMed, ClinicalTrials.gov, CMS Coverage, and RxNorm. The product supports governed workspace use with role-based access, SSO, audit logs, and source/field/version-oriented retrieval.
- **Announcement date:** 2026-09-01
- **Release/availability date:** Available for eligible customers at announcement; administrator enablement and account eligibility required.
- **Rollout status:** Generally available for eligible ChatGPT for Healthcare customers; Enterprise customers must confirm eligibility/configuration; individual clinicians can use the public-data plugin only when eligible, while Epic EHR integration is not available to individual accounts.
- **Affected plans/regions/API surfaces:** ChatGPT for Healthcare; eligible Enterprise regulated workspaces; eligible U.S. ChatGPT for Clinicians users for the public-data plugin. No complete global regional matrix stated. Workspace connectors/plugins surface; not a general consumer ChatGPT feature.
- **Pricing before/after:** No public price change stated. Commercial access remains contract/eligibility based.
- **Official sources:**
  - https://openai.com/index/chatgpt-connects-health-records-and-healthcare-sources/
- **Evidence strength:** High for product launch and scope; medium for practical rollout breadth because customer eligibility/configuration is gated.
- **Official fact vs Deep Drift inference:**
  - **Official fact:** Authorized Epic patient context can be connected to ChatGPT for Healthcare; the public-data plugin provides structured access to nine named official sources; enterprise controls include RBAC, SSO, and audit logs.
  - **Deep Drift inference:** This materially expands connected-data retrieval, provenance, source-boundary handling, and workspace continuity tests. It does not by itself prove stronger general memory or consumer cross-chat recall.
- **Capability classes affected:**
  - Connected-data retrieval
  - Indexing and provenance
  - Tool/agent behavior
  - Workspace continuity
  - Access normalization / enterprise gating
  - High-stakes-domain reliability
- **Why previous Deep Drift results may now be stale:** Earlier ChatGPT baselines that measured only web/file retrieval or generic memory do not capture governed EHR retrieval, structured healthcare-source selection, field/version precision, or enterprise permission boundaries. Results may also differ by workspace configuration and source authorization.
- **Exact existing tests to rerun:**
  1. Connected-data retrieval and provenance tests.
  2. Cross-workspace/project continuity tests where ChatGPT Work and connected business data are enabled.
  3. Source attribution and citation-boundary tests.
  4. Multi-document synthesis and contradiction handling using structured records plus narrative context.
  5. Permission and write-scope tests for admin-enabled versus non-enabled users.
- **New test to add:**
  - Build a controlled EHR + public-source benchmark with identical questions across Epic-only, public-data-only, combined, and no-connector conditions; measure retrieval precision, stale-record handling, source/version attribution, unauthorized-field refusal, and persistence of context across sessions.
- **Variables to hold constant:** Model/version; workspace type; account role; connector enablement; source set; patient/test-record identifiers; region; language; prompt wording; tool permissions; session duration; temperature/sampling settings where available; retry policy.
- **Likely confounders:** Data freshness and synchronization delay; administrator policies; connector indexing lag; incomplete source coverage; healthcare-specific guardrails; de-identification/test data quality; different model routing inside ChatGPT for Healthcare; regional compliance configuration.
- **Retest priority:** **Critical**
