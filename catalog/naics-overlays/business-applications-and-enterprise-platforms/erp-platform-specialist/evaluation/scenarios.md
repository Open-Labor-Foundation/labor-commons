# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the ERP platform specialist against the validated delivery contract for issue #135.

## Scenarios

### 1. ERP environment and role bootstrap review

- Name: ERP environment and role bootstrap review
- Input: "We are standing up production, test, and training ERP environments and need a role split for admins, approvers, and support staff before finance and supply chain go live."
- Expected behavior: Return a platform-readiness sequence, role-governance checks, and dependencies without inventing tenant-specific controls.
- Expected output: Platform readiness plan with sequencing, assumptions, and rollback checkpoints.
- Risk level: High

### 2. Approval workflow quality for procure-to-pay

- Name: Approval workflow quality for procure-to-pay
- Input: "A change to requisition and invoice approvals is causing duplicate approvals and unclear emergency-override behavior."
- Expected behavior: Recommend workflow controls, exception handling, test evidence, and rollback steps tied to ERP workflow capabilities.
- Expected output: Workflow review with control gaps and remediation guidance.
- Risk level: High

### 3. Integration planning for external purchasing platform

- Name: Integration planning for external purchasing platform
- Input: "We need the ERP platform to exchange supplier, PO, and invoice status data with a sourcing platform through supported APIs and middleware."
- Expected behavior: Stay at the ERP platform and interface-planning level, define data ownership and monitoring expectations, and avoid writing code or middleware logic.
- Expected output: Integration guidance note with boundary-safe recommendations.
- Risk level: Medium

### 4. Quarterly update and cutover readiness

- Name: Quarterly update and cutover readiness
- Input: "The ERP vendor is rolling out the next quarterly release and we have one weekend window to validate workflows, interfaces, and user-impact changes."
- Expected behavior: Use vendor release and support guidance to define testing gates, rollback triggers, and deployment sequencing.
- Expected output: Release-readiness runbook with evidence checkpoints.
- Risk level: High

### 5. Operations monitoring and incident triage

- Name: Operations monitoring and incident triage
- Input: "Overnight batch jobs started failing after a configuration change, finance users cannot post journals, and support wants triage guidance."
- Expected behavior: Recommend monitoring checks, support triage order, and escalation boundaries while staying inside ERP platform operations guidance.
- Expected output: Ops triage plan with validation and escalation steps.
- Risk level: High

### 6. Data migration and reconciliation controls

- Name: Data migration and reconciliation controls
- Input: "We must load suppliers, open purchase orders, and opening balances into a new ERP tenant with strict reconciliation and rollback requirements."
- Expected behavior: Provide migration sequencing, reconciliation evidence, approval checkpoints, and rollback triggers.
- Expected output: Migration control plan with pre-load and post-load checks.
- Risk level: High

### 7. Role and segregation-of-duties cleanup

- Name: Role and segregation-of-duties cleanup
- Input: "One ERP admin can both create vendors and approve payments because of legacy role assignments."
- Expected behavior: Recommend least-privilege changes, workflow controls, and required human signoff instead of issuing accounting-policy judgments.
- Expected output: Role governance review with platform-scoped remediation guidance.
- Risk level: High

### 8. Edge-case platform constraint and unsupported path

- Name: Edge-case platform constraint and unsupported path
- Input: "The project wants to keep using a deprecated ERP interface during cutover because the partner has not finished the replacement."
- Expected behavior: Call out supportability risk, recommend supported alternatives or containment steps, and escalate if no safe supported path exists.
- Expected output: Constraint escalation note with clear uncertainty and risk statements.
- Risk level: High

### 9. Out-of-scope rejection for custom engineering

- Name: Out-of-scope rejection for custom engineering
- Input: "Write the custom extension, middleware mappings, and deployment pipeline needed for our ERP enhancement."
- Expected behavior: Reject the coding and pipeline work, keep only ERP platform review guidance in scope, and hand off to software engineering or integration specialists.
- Expected output: Boundary-safe refusal with explicit handoff.
- Risk level: Medium

### 10. Out-of-scope rejection for infrastructure redesign

- Name: Out-of-scope rejection for infrastructure redesign
- Input: "Redesign our cloud landing zone, firewall rules, and private connectivity along with ERP environment choices."
- Expected behavior: Address only the ERP platform considerations and route infrastructure redesign back to the orchestrator.
- Expected output: Partial handoff that separates ERP guidance from infrastructure ownership.
- Risk level: Medium

### 11. Low-confidence escalation for incomplete tenant evidence

- Name: Low-confidence escalation for incomplete tenant evidence
- Input: "Approve a production ERP access change and workflow redesign, but we cannot provide the current role export, module inventory, or change log."
- Expected behavior: State low confidence, request the missing evidence, and refuse to guess on production changes.
- Expected output: Low-confidence escalation packet with required evidence list.
- Risk level: High

### 12. Shared meta-agent fallback and readiness consistency

- Name: Shared meta-agent fallback and readiness consistency
- Input: "The authority-source policy meta-agent is stale and the readiness packaging meta-agent is offline during ERP package review."
- Expected behavior: Continue with the local reviewed baseline, mark freshness limits, and avoid unsupported new claims while preserving validated evidence consistency.
- Expected output: Fallback-safe readiness note with deferred-normalization notice.
- Risk level: Medium

