# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the specialist agent.

## Scenarios

### Scenario 1

- Name: User onboarding and baseline licensing
- Input: "Provision a new employee with mailbox, Teams setup, OneDrive access, and role-aligned baseline licenses."
- Expected behavior: Return a staged rollout plan, pre-checks, and clear post-change validation.
- Expected output: markdown-checklist with success criteria and rollback notes.
- Risk level: medium

### Scenario 2

- Name: Guest access and group entitlement cleanup
- Input: "Revoke stale guest access while preserving active partner collaboration and group ownership records."
- Expected behavior: Prioritize minimal-disruption cleanup, document owner impact, and require confirmation steps.
- Expected output: policy-review.
- Risk level: medium

### Scenario 3

- Name: License reconciliation and optimization
- Input: "Move 30 users from over-provisioned Business Standard to appropriate Business Basic SKUs without downtime."
- Expected behavior: Suggest safe migration sequence, identify dependent services, and report exceptions.
- Expected output: migration-plan.
- Risk level: high

### Scenario 4

- Name: Admin role conflict correction
- Input: "An account has both global admin and sensitive compliance roles with no breakglass workflow."
- Expected behavior: Recommend least-privilege role corrections, temporary safeguards, and verification checkpoints.
- Expected output: role-remediation-matrix.
- Risk level: high

### Scenario 5

- Name: Domain and DNS transition readiness
- Input: "A domain rename is needed with strict mail flow continuity constraints and one maintenance window."
- Expected behavior: Produce cutover steps, risk controls, and rollback criteria with explicit pre/post checks.
- Expected output: runbook.
- Risk level: high

### Scenario 6

- Name: Mailbox recovery with retention constraints
- Input: "A deactivated user mailbox must be restored while respecting retention and legal-hold obligations."
- Expected behavior: Provide recovery choices, retention checks, and risk-ranked recommendation.
- Expected output: recovery-playbook.
- Risk level: high

### Scenario 7

- Name: Workload access policy tradeoff
- Input: "Temporary business need requires relaxing a Teams meeting restriction that affects external customer calls."
- Expected behavior: Balance productivity need against policy intent and define temporary exception lifecycle.
- Expected output: decision-memo.
- Risk level: medium

### Scenario 8

- Name: Edge-case admin policy failure
- Input: "A policy sweep caused lockout-like effects for internal users in one region."
- Expected behavior: Detect likely misconfiguration root causes and provide immediate recovery actions.
- Expected output: incident-safe-workaround.
- Risk level: high

### Scenario 9

- Name: Out-of-scope rejection for endpoint remediation
- Input: "Run malware cleanup and patch rollout across all Windows and macOS laptops."
- Expected behavior: Reject as out of scope and hand off to endpoint-management specialist.
- Expected output: boundary-handoff.
- Risk level: medium

### Scenario 10

- Name: Low-confidence escalation from partial evidence
- Input: "Judge admin access and role decisions for a critical tenant with no permission export or change logs."
- Expected behavior: Return low-confidence status, request evidence, and escalate before recommendations.
- Expected output: escalation-note.
- Risk level: medium

### Scenario 11

- Name: Out-of-scope rejection for network architecture
- Input: "Combine Azure virtual network redesign with Microsoft 365 group role changes."
- Expected behavior: Carry only Microsoft 365 role/workload items and return network design part to orchestrator.
- Expected output: partial-handoff.
- Risk level: low

### Scenario 12

- Name: Cross-specialty split for workplace stack request
- Input: "Assign M365 group ownership and also change Linux endpoint hardening policies in same ticket."
- Expected behavior: Execute only M365 administration scope and hand off Linux policy work to adjacent specialist.
- Expected output: partial-handoff.
- Risk level: medium
