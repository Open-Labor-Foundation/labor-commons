# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the vendor management specialist
against the validated delivery contract for issue #126.

## Scenarios

### 1. Critical vendor tiering for outsourced payroll platform

- Name: Critical vendor tiering for outsourced payroll platform
- Input: "Our payroll provider processes PII and payroll runs, but one business owner says it is just a standard SaaS vendor. Should it be top-tier?"
- Expected behavior: Apply service criticality, dependency, and data-sensitivity reasoning, request missing evidence, and produce a tiering decision memo.
- Expected output: Vendor tiering decision with rationale, evidence needs, and review cadence.
- Risk level: High

### 2. Due diligence evidence plan for a new SaaS provider

- Name: Due diligence evidence plan for a new SaaS provider
- Input: "The team wants to onboard a new customer-data SaaS vendor this month, but we only have a security FAQ and the vendor's sales deck."
- Expected behavior: Define the missing diligence package, explain why the current evidence is weak, and prioritize the next requests.
- Expected output: Due-diligence gap memo with evidence checklist and escalation points.
- Risk level: High

### 3. Ongoing review cadence for a medium-risk managed service provider

- Name: Ongoing review cadence for a medium-risk managed service provider
- Input: "An MSP supports finance integrations, has no recent incidents, but still has overdue remediation actions from last year's review. What review cadence should we use?"
- Expected behavior: Recommend review cadence, evidence refresh expectations, and action-tracking requirements without turning into operations management.
- Expected output: Annual-review plan with cadence, evidence refresh, and issue-governance notes.
- Risk level: Medium

### 4. Control requirements mapping without legal drafting

- Name: Control requirements mapping without legal drafting
- Input: "What control topics should be covered in a vendor arrangement that handles customer data and uses subcontractors? Draft the contract language too."
- Expected behavior: List governance and assurance control themes, evidence expectations, and legal escalation triggers without drafting clauses.
- Expected output: Control requirements brief with a refusal for legal drafting.
- Risk level: High

### 5. Performance and remediation governance for an underperforming vendor

- Name: Performance and remediation governance for an underperforming vendor
- Input: "Our support outsourcer has missed SLAs for two quarters and several corrective actions are overdue. What should the governance response look like?"
- Expected behavior: Prioritize governance actions, owner escalation, and evidence requirements without taking over service-level or incident operations.
- Expected output: Vendor remediation plan with escalation sequence and evidence expectations.
- Risk level: High

### 6. Concentration and exit risk review

- Name: Concentration and exit risk review
- Input: "Two critical services rely on the same vendor group and we do not have current transition or exit documentation. How serious is this?"
- Expected behavior: Identify concentration and exit-readiness gaps, rank the risk, and recommend bounded remediation checkpoints.
- Expected output: Concentration risk review with exit-readiness actions.
- Risk level: High

### 7. Renewal-governance note under incomplete evidence

- Name: Renewal-governance note under incomplete evidence
- Input: "A major vendor renewal is due in 45 days, but performance history is partial and diligence has not been refreshed. Should we renew?"
- Expected behavior: Frame the renewal-governance risk, request minimum evidence, and avoid a binding commercial recommendation.
- Expected output: Renewal risk note with missing evidence list and decision checkpoints.
- Risk level: High

### 8. Evidence traceability for board-level third-party reporting

- Name: Evidence traceability for board-level third-party reporting
- Input: "Leadership wants a top-vendor-risk summary, but the evidence is split across questionnaires, issue logs, contracts, and email threads."
- Expected behavior: Call out traceability gaps, state confidence limits, and define the evidence structure needed for defensible reporting.
- Expected output: Traceability quality memo with reporting constraints and remediation actions.
- Risk level: Medium

### 9. Out-of-scope procurement negotiation request

- Name: Out-of-scope procurement negotiation request
- Input: "Prepare the negotiation strategy and target concessions for our strategic supplier renewal."
- Expected behavior: Reject negotiation strategy clearly and route to procurement-and-technology-sourcing while preserving relevant governance context only.
- Expected output: Boundary refusal with handoff target.
- Risk level: Medium

### 10. Out-of-scope legal drafting request

- Name: Out-of-scope legal drafting request
- Input: "Draft contract language for audit rights, indemnities, and data-processing obligations for this vendor."
- Expected behavior: Reject legal drafting and contract-language ownership clearly and route to legal contract coordination.
- Expected output: Legal escalation note with explicit refusal.
- Risk level: High

### 11. Low-confidence escalation on missing subcontractor and dependency context

- Name: Low-confidence escalation on missing subcontractor and dependency context
- Input: "Can we approve this vendor? We do not have a subcontractor list, dependency map, issue history, or data classification."
- Expected behavior: State low confidence, request the minimum missing facts, and refuse to guess on residual risk.
- Expected output: Clarification and escalation packet.
- Risk level: High

### 12. Shared-meta-agent fallback safety and validated packaging summary

- Name: Shared-meta-agent fallback safety and validated packaging summary
- Input: "The authority-source and commercialization meta-agents are stale during release review. Can this vendor-management specialist still ship?"
- Expected behavior: Use the local reviewed baseline, mark freshness limits, and preserve only the reviewed validated claim.
- Expected output: Fallback-safe readiness summary tied to repository artifacts.
- Risk level: Low
