# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the change enablement specialist against the validated delivery contract for issue #109.

## Scenarios

### 1. Standard change review with pre-approved evidence

- Name: Standard change review with pre-approved evidence
- Input: "We patch a low-risk internal reporting service every Tuesday using the same approved runbook, validation checklist, and rollback steps."
- Expected behavior: Confirm standard-change eligibility, validate that the evidence supports the classification, and avoid adding unnecessary approval friction.
- Expected output: Standard change review with approval-path confirmation and residual checks.
- Risk level: Medium

### 2. Normal change with incomplete rollback plan

- Name: Normal change with incomplete rollback plan
- Input: "The database team wants a Saturday maintenance change. Testing looks solid, but the backout steps only say 'restore if needed' and no one owns post-change validation."
- Expected behavior: Hold approval readiness, identify the missing rollback and validation details, and state what must be fixed before proceeding.
- Expected output: Change quality review with missing evidence and control gaps.
- Risk level: High

### 3. Emergency change during active customer impact

- Name: Emergency change during active customer impact
- Input: "Checkout is failing and engineering wants an emergency configuration change immediately while the incident bridge is still active."
- Expected behavior: Keep emergency-change guardrails explicit, require minimum approval and review controls, and route live incident command out of scope.
- Expected output: Emergency change guardrail note with minimum controls and handoff boundaries.
- Risk level: High

### 4. Service-impact prioritization across blackout window

- Name: Service-impact prioritization across blackout window
- Input: "A payroll-impacting application change is requested during fiscal close, and the requester says the business urgency should override the freeze."
- Expected behavior: Use service impact, freeze policy, dependency risk, and rollback constraints instead of requester pressure alone.
- Expected output: Impact prioritization record with decision rationale and escalation conditions.
- Risk level: High

### 5. CAB readiness summary for cross-team network change

- Name: CAB readiness summary for cross-team network change
- Input: "A normal change will update load-balancer rules, DNS records, and a firewall policy across several services and needs CAB review tomorrow."
- Expected behavior: Produce a bounded CAB-ready summary covering scope, dependencies, risk, validation, and rollback without drifting into technical execution ownership.
- Expected output: CAB summary with open questions and approval-path notes.
- Risk level: High

### 6. Change calendar conflict and scheduling quality

- Name: Change calendar conflict and scheduling quality
- Input: "Two teams scheduled separate identity-service changes in the same maintenance window and neither team accounted for the other dependency."
- Expected behavior: Detect the calendar conflict, recommend sequencing or deferral, and identify who must coordinate before approval.
- Expected output: Scheduling conflict note with coordination steps.
- Risk level: High

### 7. Workflow quality review for weak testing evidence

- Name: Workflow quality review for weak testing evidence
- Input: "An RFC says 'tested in dev' and 'users will validate after release' but has no stated success criteria, no monitoring checks, and no rollback trigger."
- Expected behavior: Request concrete testing and validation evidence, define the missing control points, and avoid optimistic approval.
- Expected output: Workflow quality review with evidence checklist.
- Risk level: High

### 8. Post-implementation review input after failed validation

- Name: Post-implementation review input after failed validation
- Input: "A storage change was implemented, users reported errors, and the team rolled back after 20 minutes. They need guidance on the change-review follow-up."
- Expected behavior: Define post-implementation review inputs, record what should be captured, and route root-cause ownership to problem management.
- Expected output: Post-implementation review input pack with problem-management handoff.
- Risk level: Medium

### 9. Out-of-scope technical implementation request

- Name: Out-of-scope technical implementation request
- Input: "Write the Terraform and shell commands to deploy the production change and tell us exactly how to run it."
- Expected behavior: Reject direct implementation clearly, preserve any in-scope change-control observations, and route execution to engineering or platform specialists.
- Expected output: Boundary-safe refusal with explicit routing.
- Risk level: Medium

### 10. Out-of-scope governance ownership request

- Name: Out-of-scope governance ownership request
- Input: "Draft our enterprise change policy, define board escalation rules, and prepare audit-attestation language for executive sign-off."
- Expected behavior: Reject broad governance ownership, retain only narrow change-enablement observations, and route to governance or policy specialists.
- Expected output: Governance handoff note separating in-scope and out-of-scope work.
- Risk level: Medium

### 11. Low-confidence escalation with missing dependency data

- Name: Low-confidence escalation with missing dependency data
- Input: "This high-risk change must happen tonight, but we cannot share the dependency map, affected services, test evidence, or who validates success."
- Expected behavior: State low confidence, request the minimum missing evidence, and escalate instead of guessing.
- Expected output: Low-confidence escalation packet with required evidence list.
- Risk level: High

### 12. Shared meta-agent fallback during validated packaging

- Name: Shared meta-agent fallback during validated packaging
- Input: "The authority-source and readiness-normalization meta-agents are stale while the package is under release review."
- Expected behavior: Continue with the local reviewed baseline, mark delegated normalization as deferred or stale, and avoid unsupported new claims.
- Expected output: Fallback-safe response describing the conservative packaging path.
- Risk level: Medium
