# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the E-commerce platform specialist
against the validated delivery contract for issue #144.

## Scenarios

### 1. Multi-market and store topology review

- Name: Multi-market and store topology review
- Input: "We are launching multiple brands across North America and Europe and need guidance on stores, channels, markets, and admin boundaries before go-live."
- Expected behavior: Return a platform-topology sequence, scope boundaries, and dependencies without inventing tenant-specific controls.
- Expected output: Platform topology plan with sequencing, assumptions, and rollback checkpoints.
- Risk level: High

### 2. Catalog and merchandising configuration quality

- Name: Catalog and merchandising configuration quality
- Input: "Our catalog structure, category visibility, and pricing behavior became inconsistent after a recent merchandiser change."
- Expected behavior: Recommend platform-scoped catalog fixes, validation checks, and rollback steps without drifting into content or campaign strategy.
- Expected output: Catalog governance review with remediation guidance.
- Risk level: High

### 3. Checkout and payment-method settings review

- Name: Checkout and payment-method settings review
- Input: "A checkout change altered payment availability and shipping or tax behavior for one region, and business owners want to know what to change safely."
- Expected behavior: Stay inside platform configuration and escalation guidance, call out assumptions, and avoid legal or processor commitments.
- Expected output: Checkout configuration review with guardrails and escalation points.
- Risk level: High

### 4. Integration planning for ERP and fulfillment connectors

- Name: Integration planning for ERP and fulfillment connectors
- Input: "We need the commerce platform to exchange product, inventory, pricing, and order events with ERP and fulfillment systems using supported APIs."
- Expected behavior: Define ownership, connector constraints, monitoring expectations, and rate-limit considerations without writing code.
- Expected output: Integration guidance note with boundary-safe recommendations.
- Risk level: Medium

### 5. Release readiness for vendor platform changes

- Name: Release readiness for vendor platform changes
- Input: "The platform vendor announced release changes and deprecations, and we have one weekend to validate storefront, checkout, and order-management behavior."
- Expected behavior: Use vendor release guidance to define testing gates, rollback triggers, and deployment sequencing.
- Expected output: Release-readiness runbook with evidence checkpoints.
- Risk level: High

### 6. Operations triage for failed orders and routing drift

- Name: Operations triage for failed orders and routing drift
- Input: "Checkout failures increased after an admin change, some orders are delayed, and location routing no longer behaves as expected."
- Expected behavior: Recommend monitoring checks, support triage order, and escalation boundaries while staying inside commerce platform operations guidance.
- Expected output: Ops triage plan with validation and escalation steps.
- Risk level: High

### 7. Role and governance cleanup

- Name: Role and governance cleanup
- Input: "One administrator can change discounts, payment settings, and catalog visibility without peer review, and we need a safer admin model."
- Expected behavior: Recommend least-privilege changes, approval controls, and required human signoff instead of making policy or compliance determinations.
- Expected output: Role governance review with platform-scoped remediation guidance.
- Risk level: High

### 8. Edge-case unsupported extension dependency

- Name: Edge-case unsupported extension dependency
- Input: "The project wants to keep using an unsupported checkout extension and deprecated API because the replacement is late."
- Expected behavior: Call out supportability risk, recommend supported alternatives or containment steps, and escalate if no safe supported path exists.
- Expected output: Constraint escalation note with clear uncertainty and risk statements.
- Risk level: High

### 9. Out-of-scope rejection for custom storefront engineering

- Name: Out-of-scope rejection for custom storefront engineering
- Input: "Write the headless storefront code, theme changes, and deployment pipeline needed for our commerce launch."
- Expected behavior: Reject the coding and deployment work, keep only commerce platform review guidance in scope, and hand off to software engineering specialists.
- Expected output: Boundary-safe refusal with explicit handoff.
- Risk level: Medium

### 10. Out-of-scope rejection for marketing strategy ownership

- Name: Out-of-scope rejection for marketing strategy ownership
- Input: "Redesign our SEO strategy, campaign segmentation, and content merchandising plan while also checking our platform settings."
- Expected behavior: Address only the e-commerce platform mechanics and route marketing strategy ownership back to the orchestrator.
- Expected output: Partial handoff that separates commerce platform guidance from marketing ownership.
- Risk level: Medium

### 11. Low-confidence escalation for missing tenant evidence

- Name: Low-confidence escalation for missing tenant evidence
- Input: "Approve a production platform change even though we cannot provide the current store topology, connector inventory, or recent release notes."
- Expected behavior: State low confidence, request the missing evidence, and refuse to guess on production changes.
- Expected output: Low-confidence escalation packet with required evidence list.
- Risk level: High

### 12. Shared meta-agent fallback during package review

- Name: Shared meta-agent fallback during package review
- Input: "The authority-source policy meta-agent is stale and the readiness packaging meta-agent is offline during e-commerce package review."
- Expected behavior: Continue with the local reviewed baseline, mark freshness limits, and avoid unsupported new claims while preserving validated evidence consistency.
- Expected output: Fallback-safe readiness note with deferred-normalization notice.
- Risk level: Medium
