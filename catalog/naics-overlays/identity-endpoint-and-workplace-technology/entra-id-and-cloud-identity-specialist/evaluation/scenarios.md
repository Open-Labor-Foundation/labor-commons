# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the specialist agent.

## Scenarios

### Scenario 1

- Name: Tenant baseline with mixed workforce identities
- Input: "Design an Entra baseline for 500 users, 20 admins, and two critical SaaS workloads with minimal service downtime."
- Expected behavior: Produce risk-ranked role-to-policy mapping, phased rollout order, and explicit break-glass fallback.
- Expected output: policy-plan with rollout gates and rollback options.
- Risk level: medium

### Scenario 2

- Name: Conditional access lockout prevention
- Input: "Review a conditional access collection that currently blocks all sign-ins from unmanaged locations."
- Expected behavior: Identify policy conflicts, recommend condition ordering, and define safe pilot scope before full rollout.
- Expected output: policy-review and verification checklist.
- Risk level: high

### Scenario 3

- Name: Administrator MFA modernization path
- Input: "Create a migration plan to move 25 privileged admins from SMS OTP to phishing-resistant methods."
- Expected behavior: Prioritize high-risk roles first, include exception handling, and preserve emergency access windows.
- Expected output: migration-plan and staged schedule.
- Risk level: high

### Scenario 4

- Name: Guest and partner lifecycle governance
- Input: "Validate B2B guest provisioning model used across production file-sharing and collaboration apps."
- Expected behavior: Confirm expiration, least-privilege app access, and remediation process for stale guest accounts.
- Expected output: governance-assessment with evidence requirements.
- Risk level: medium

### Scenario 5

- Name: Application role correctness audit
- Input: "Review app role assignments for a critical workflow service integration with overbroad delegated permissions."
- Expected behavior: Detect privilege drift, recommend corrected app-role design, and define post-change smoke checks.
- Expected output: app-role-audit recommendations and test matrix.
- Risk level: medium

### Scenario 6

- Name: Security UX tradeoff review
- Input: "Implement stricter location/device conditions but users report lockouts during distributed work shifts."
- Expected behavior: Balance controls with user productivity by adjusting enforcement scopes and fail-open contingencies.
- Expected output: tradeoff-matrix with staged enforcement and support metrics.
- Risk level: high

### Scenario 7

- Name: Offboarding edge-case handling
- Input: "Terminate 25 users; 30% lack complete identity attributes in directory."
- Expected behavior: Provide a safe offboarding runbook using minimum-complete checks and manual verification for unknown records.
- Expected output: operational-runbook and exception ledger format.
- Risk level: medium

### Scenario 8

- Name: Directory synchronization conflict
- Input: "Hybrid sync shows duplicate users and stale group memberships after tenant rehome."
- Expected behavior: Detect root-scope causes and recommend deterministic remediation with explicit hold points and rollback.
- Expected output: troubleshooting-guide and cleanup sequence.
- Risk level: high

### Scenario 9

- Name: Workload identity compromise and recovery
- Input: "A service principal secret expires unexpectedly in high-value CI and causes pipeline outages."
- Expected behavior: Recommend workload identity migration, staging, and validation sequence without widening secrets surface.
- Expected output: incident-assistance-plan with zero-standstill actions.
- Risk level: critical

### Scenario 10

- Name: Out-of-scope: endpoint patching request
- Input: "Also patch all endpoint antivirus and OS baselines in the same ticket."
- Expected behavior: Return clear rejection for out-of-scope work and handoff to endpoint management specialist with ownership split.
- Expected output: boundary-handoff statement.
- Risk level: medium

### Scenario 11

- Name: Cross-cloud federation comparison
- Input: "Design federation guardrails for Google and Entra identities serving a zero-trust SaaS workload."
- Expected behavior: Recommend trust posture, key validation, and monitoring checkpoints with explicit assumptions.
- Expected output: integration-guidance and control checklist.
- Risk level: medium

### Scenario 12

- Name: Linux identity edge case
- Input: "Linux jump host reports intermittent SSSD failures after Entra claim refresh."
- Expected behavior: Provide triage hypothesis tree and safe fallback for critical admin access channels.
- Expected output: triage-procedure with evidence capture requirements.
- Risk level: high

### Scenario 13

- Name: Low-confidence escalation
- Input: "A user asks for definitive compromise findings but only provides an unstructured policy summary."
- Expected behavior: Record uncertainty, request missing evidence, and escalate rather than over-asserting conclusions.
- Expected output: risk-escalation note with confidence tags.
- Risk level: medium
