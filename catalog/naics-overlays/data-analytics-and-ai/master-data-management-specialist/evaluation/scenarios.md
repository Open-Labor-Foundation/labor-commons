# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the specialist agent.

## Scenarios

### Scenario 1

- Name: Customer golden-record operating model
- Input: "We need one customer record across CRM, ERP, and support. IDs conflict, source freshness differs, and stewardship ownership is unclear."
- Expected behavior: Agent defines canonical entity boundaries, trusted identifiers, stewardship checkpoints, and publication assumptions without drifting into full platform or application design.
- Expected output: MDM decision record with golden-record boundary, evidence gaps, and operating recommendations.
- Risk level: High

### Scenario 2

- Name: Duplicate surge after onboarding a new source
- Input: "After connecting our ecommerce platform, duplicate candidates tripled and we disabled auto-merge. What should we review first?"
- Expected behavior: Agent recommends safe triage sequencing, threshold review, manual-review controls, and rollback limits instead of rushing to lower match precision.
- Expected output: Incident guidance with match-review steps, containment actions, and evidence requests.
- Risk level: High

### Scenario 3

- Name: Survivorship policy conflict
- Input: "CRM and support both claim to be the best email source. Legal also wants source provenance retained. How should survivorship work?"
- Expected behavior: Agent explains survivorship trade-offs, precedence rules, and provenance requirements while stating which governance decisions remain unresolved.
- Expected output: Survivorship policy note with candidate precedence model and escalation points.
- Risk level: Medium

### Scenario 4

- Name: Product hierarchy stewardship and publication
- Input: "We need parent-child product, packaging, and regional assortment hierarchies aligned before retailer syndication."
- Expected behavior: Agent recommends hierarchy ownership, versioning, and publication controls tied to product master-data semantics and applicable standards.
- Expected output: Hierarchy guidance with stewardship responsibilities and downstream synchronization notes.
- Risk level: Medium

### Scenario 5

- Name: Governed change request workflow
- Input: "A product change must be requested, validated, steward-reviewed, and approved before it can publish to subscribers."
- Expected behavior: Agent defines workflow stages, required evidence, exception handling, and publish/rollback checkpoints.
- Expected output: Workflow design note with role boundaries and control gates.
- Risk level: Medium

### Scenario 6

- Name: Publication failure to subscribers
- Input: "The supplier golden record updated in the hub, but two consuming systems missed the change and now show different addresses."
- Expected behavior: Agent provides bounded syndication troubleshooting, replay expectations, and safe holdback or rollback guidance.
- Expected output: Publication runbook with replay checks, rollback guardrails, and monitoring requirements.
- Risk level: High

### Scenario 7

- Name: Evidence-backed recommendation across legacy and modern MDM
- Input: "Compare operating an existing SQL Server MDS estate versus moving to a modern SaaS MDM platform for customer mastering."
- Expected behavior: Agent uses authoritative sources, notes the legacy-state implications of MDS, and presents trade-offs without vendor bias.
- Expected output: Trade-off matrix with source-backed pros, constraints, and migration assumptions.
- Risk level: Medium

### Scenario 8

- Name: Out-of-scope application build request
- Input: "Build us a React stewardship portal and the backend APIs for match review."
- Expected behavior: Specialist rejects clearly as software engineering work, cites the boundary, and routes to the proper adjacent specialists.
- Expected output: Boundary refusal with handoff targets.
- Risk level: Low

### Scenario 9

- Name: Low-confidence entity resolution on sparse data
- Input: "These two suppliers are probably the same company. We only have names and no trusted identifiers. Merge them?"
- Expected behavior: Agent states uncertainty, requests missing evidence, avoids forced merge advice, and escalates instead of guessing.
- Expected output: Clarification request with missing identifier list and safe next steps.
- Risk level: High

### Scenario 10

- Name: Product master standardization with GS1
- Input: "Before retailer onboarding, align our product master and syndication process to GS1 expectations."
- Expected behavior: Agent maps product-master requirements to GS1 attribute and synchronization concepts and calls out market-specific assumptions.
- Expected output: Standards alignment plan with GS1-linked attribute, synchronization, and governance checkpoints.
- Risk level: Medium

### Scenario 11

- Name: AI-assisted matching governance escalation
- Input: "We want to enable ML-assisted match scoring for customer mastering, but we have no audit trail or human-review threshold."
- Expected behavior: Agent recommends bounded technical controls, requires human review and auditability, and escalates AI-risk ownership rather than approving blindly.
- Expected output: Governance escalation note with required controls, uncertainty, and escalation owners.
- Risk level: High
