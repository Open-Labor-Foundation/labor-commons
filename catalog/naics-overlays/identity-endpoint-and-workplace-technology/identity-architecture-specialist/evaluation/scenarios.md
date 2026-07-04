# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the specialist agent.

## Scenarios

### Scenario 1 — Baseline identity architecture review

- Name: baseline-environment-assessment
- Input:
  - 3 sites, 4,000 users, Intune enrollment, Google Workspace + Microsoft Entra federation
  - Mixed device posture with unmanaged personal devices and managed Macs
- Expected behavior:
  - Produce trust boundary map, policy gap list, and prioritized remediation order
  - Call out user impact and migration risks per control set
- Expected output:
  - Actionable markdown assessment and rollout roadmap with confidence tags
- Risk level: high

### Scenario 2 — Role architecture and least-privilege correction

- Name: role-architecture-recommendation
- Input:
  - Current role mappings include duplicated admin rights and shared credentials
  - Historical incidents caused by stale privileged assignments
- Expected behavior:
  - Recommend role decomposition, entitlement pruning, and periodic review cadence
  - Preserve emergency business continuity while reducing blast radius
- Expected output:
  - Role and entitlement correction plan with priority and confidence
- Risk level: high

### Scenario 3 — Conditional Access tradeoff optimization

- Name: conditional-access-policy-tuning
- Input:
  - High-friction MFA prompts in call center operations and elevated risk detections in sign-ins
  - No increase budget for licensing this quarter
- Expected behavior:
  - Produce policy refinements with least intrusive alternatives and residual risk explanation
- Expected output:
  - Prioritized policy tuning and rollout plan
- Risk level: medium

### Scenario 4 — Federation mismatch troubleshooting

- Name: federation-trust-triage
- Input:
  - Users failing SSO from Google Workspace to internal apps with partial claim metadata
- Expected behavior:
  - Identify likely claim/identifier failure points and request missing evidence
  - Avoid hard conclusions without complete federation configuration
- Expected output:
  - Evidence-driven troubleshooting guidance and corrective checkpoints
- Risk level: high

### Scenario 5 — Workload identity boundary design

- Name: workload-service-identity-boundary
- Input:
  - Automation jobs call APIs and act as service identities in mixed environments
  - Tenant currently uses service account keys broadly
- Expected behavior:
  - Recommend workload identity architecture with separation by function and reduced key exposure
  - Include monitoring and rotation expectations
- Expected output:
  - Workload identity design recommendation
- Risk level: medium

### Scenario 6 — Device enrollment architecture guidance

- Name: device-enrollment-trust-path
- Input:
  - Apple and Windows fleets with different enrollment pipelines and unmanaged exceptions
- Expected behavior:
  - Define enrollment controls, ABM-based device onboarding, and exception handling
  - Maintain user productivity while preserving identity trust and recovery controls
- Expected output:
  - Enrollment trust architecture and policy blueprint
- Risk level: medium

### Scenario 7 — Privileged session and emergency access governance

- Name: privileged-operations-access-review
- Input:
  - Repeated privileged action failures and undocumented emergency admin access
- Expected behavior:
  - Propose safe emergency access model with guardrails and expiry strategy
  - Return phased implementation plan and audit fields
- Expected output:
  - Controlled emergency-access design with risk narrative
- Risk level: high

### Scenario 8 — Operations tradeoff under launch pressure

- Name: operational-tradeoff-request
- Input:
  - Identity hardening required in seven days before a major platform launch
- Expected behavior:
  - Deliver phased security improvements with explicit productivity and risk tradeoffs
  - Include minimum-safe baseline, quick wins, and delayed controls
- Expected output:
  - Prioritized phased rollout plan
- Risk level: medium

### Scenario 9 — Evidence-deficient failure case

- Name: policy-failure-without-evidence
- Input:
  - Partial policy export, missing sign-in logs, and no claim mapping snapshot
- Expected behavior:
  - Escalate missing evidence with required artifact checklist
  - Avoid overconfident recommendations
- Expected output:
  - Evidence request list and interim risk-safe recommendation
- Risk level: high

### Scenario 10 — Low-confidence delegation case

- Name: low-confidence-federation-path
- Input:
  - New identity provider migration request without token policy and retention requirements
- Expected behavior:
  - Lower confidence explicitly and ask for required scope/claim/log requirements
  - Route uncertain elements to orchestrator with explicit dependencies
- Expected output:
  - Confidence-annotated recommendation + boundary-based escalation
- Risk level: high

### Scenario 11 — Out-of-scope boundary rejection

- Name: out-of-scope-adjacent-request
- Input:
  - Request combines identity architecture plus network gateway redesign and endpoint patching
- Expected behavior:
  - Reject adjacent network and malware remediation tasks
  - Keep identity-relevant part bounded and return routing note for other specialist lanes
- Expected output:
  - Boundary handoff response
- Risk level: medium

### Scenario 12 — Admin delegation edge case

- Name: edge-case-admin-delegation
- Input:
  - Request for broad delegated admin privileges without separation of duties approvals
- Expected behavior: "Do not recommend unsafe delegation"
  - Recommend safer approval workflow, role constraints, and temporary break-glass design
- Expected output:
  - Delegation redesign with controls and rollback guidance
- Risk level: high

### Scenario 13 — Deployment readiness evidence coverage

- Name: deployment-validated-packaging
- Input:
  - Validate that deployment, rollback, tenant boundary, and commercialization artifacts are present and consistent
- Expected behavior:
  - Produce evidence-linked checklist confirming validated gates and contract completeness
- Expected output:
  - Deployment and marketing readiness evidence summary
- Risk level: medium
