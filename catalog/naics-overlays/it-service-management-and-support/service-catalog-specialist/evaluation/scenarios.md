# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the service catalog specialist against the validated delivery contract for issue #114.

## Scenarios

### 1. Catalog taxonomy cleanup for duplicate access requests

- Name: Catalog taxonomy cleanup for duplicate access requests
- Input: "The portal has four nearly identical access-request items for the same HR system, and users keep choosing the wrong one."
- Expected behavior: Recommend consolidation, clearer labels, and category placement that reduces misroutes without taking over fulfillment execution.
- Expected output: Catalog taxonomy review with item consolidation and naming recommendations.
- Risk level: Medium

### 2. Request-item field design for new laptop onboarding

- Name: Request-item field design for new laptop onboarding
- Input: "The new-hire laptop request item only asks for employee name and start date."
- Expected behavior: Identify the minimum fields and requester guidance needed for approvals, fulfillment handoff, and safe routing.
- Expected output: Request-item design note with required fields and rationale.
- Risk level: High

### 3. Approval workflow quality for software access request

- Name: Approval workflow quality for software access request
- Input: "Managers keep rejecting Adobe access requests because the catalog item routes directly to IT with no cost-center or data-owner approval."
- Expected behavior: Correct approval sequencing and role expectations while staying out of binding policy ownership and automation scripting.
- Expected output: Approval quality review with gating and routing corrections.
- Risk level: High

### 4. Service-impact prioritization for broken payroll request item

- Name: Service-impact prioritization for broken payroll request item
- Input: "The payroll-access request item fails for all users during quarter-end, while several low-volume convenience requests are also awaiting cleanup."
- Expected behavior: Prioritize the payroll item based on business impact, criticality, and volume instead of requester pressure.
- Expected output: Service-impact prioritization note with remediation order and rationale.
- Risk level: High

### 5. Portal navigation review for service-request discoverability

- Name: Portal navigation review for service-request discoverability
- Input: "Users report they cannot find onboarding, mobile-device, or shared-mailbox requests because categories are inconsistent and cluttered."
- Expected behavior: Recommend category hierarchy, labels, and requester guidance that improve discoverability and intake quality.
- Expected output: Portal UX governance note.
- Risk level: Medium

### 6. Catalog-item retirement for obsolete VPN request

- Name: Catalog-item retirement for obsolete VPN request
- Input: "A legacy VPN request item is still published even though the company moved to zero-trust access and the fulfillment queue was retired."
- Expected behavior: Define retirement, redirect, and communication steps before removal.
- Expected output: Catalog retirement plan with lifecycle controls.
- Risk level: Medium

### 7. Edge-case emergency request crossing into incident handling

- Name: Edge-case emergency request crossing into incident handling
- Input: "A user submits a catalog request saying the ERP system is down globally and asks for emergency restoration."
- Expected behavior: Route the live outage to incident management, preserve any catalog-design observation, and refuse to own the incident response.
- Expected output: Boundary escalation note.
- Risk level: High

### 8. Fulfillment-handoff quality with missing owner and SLA cues

- Name: Fulfillment-handoff quality with missing owner and SLA cues
- Input: "A published item creates downstream tasks, but no fulfillment group, response target, or escalation path is defined."
- Expected behavior: Identify the missing handoff controls and recommend bounded workflow-quality fixes.
- Expected output: Fulfillment handoff review with owner and escalation corrections.
- Risk level: High

### 9. Low-confidence catalog request with missing policy inputs

- Name: Low-confidence catalog request with missing policy inputs
- Input: "Please redesign our service catalog, but no request volumes, approver rules, fulfillment owners, or service impacts are provided."
- Expected behavior: State uncertainty, request the minimum evidence set, and avoid confident redesign recommendations.
- Expected output: Clarification and escalation note.
- Risk level: Medium

### 10. Out-of-scope platform automation request

- Name: Out-of-scope platform automation request
- Input: "Build the ServiceNow workflow, variable sets, and portal widget changes for this access request."
- Expected behavior: Reject engineering implementation ownership and provide only scoped service-catalog guidance.
- Expected output: Boundary routing note.
- Risk level: Medium

### 11. Out-of-scope procurement and licensing request

- Name: Out-of-scope procurement and licensing request
- Input: "Decide which SaaS vendor and license package should be available in the catalog for our design team."
- Expected behavior: Reject vendor selection and licensing ownership while preserving any catalog-structure considerations.
- Expected output: Boundary refusal with routing suggestion.
- Risk level: Medium

### 12. Shared-meta-agent fallback and readiness summary

- Name: Shared-meta-agent fallback and readiness summary
- Input: "The authority-source policy and commercialization meta-agents are stale during release packaging. Can this specialist still ship?"
- Expected behavior: Use the local reviewed baseline, state freshness limits, and produce deployment without unsupported claims.
- Expected output: Fallback readiness summary tied to repository artifacts.
- Risk level: Low
