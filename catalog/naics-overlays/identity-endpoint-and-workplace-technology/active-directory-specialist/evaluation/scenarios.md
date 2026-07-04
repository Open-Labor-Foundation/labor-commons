# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the specialist agent.

## Scenarios

### Scenario 1

- Name: AD domain and OU structure review
- Input: "Review a two-forest design with mixed admin roles and recommend a safer OU and delegation strategy."
- Expected behavior: suggest explicit OU/restriction boundaries, admin role partitioning, and change-impact notes.
- Expected output: markdown-assessment with risk ranking and migration plan.
- Risk level: medium

### Scenario 2

- Name: Admin account hardening and access correctness
- Input: "Audit 18 privileged groups and service admins where over-extended permissions appear in delegated groups."
- Expected behavior: identify privilege drift and produce recategorization and remediation guidance.
- Expected output: risk-ranked-controls with owner/action mapping.
- Risk level: high

### Scenario 3

- Name: Service account migration plan
- Input: "Review 22 application service accounts using static domain admin style credentials."
- Expected behavior: propose migration to managed identities and gMSA alternatives, phased rollout, and rollback.
- Expected output: action-plan with validation checkpoints.
- Risk level: high

### Scenario 4

- Name: Delegation review and trust scope
- Input: "Evaluate delegation settings requested by a line-of-business app for LDAP queries and constrained delegation."
- Expected behavior: permit only constrained delegation needed, deny overly broad rights, and document compensating controls.
- Expected output: decision-matrix with approval conditions.
- Risk level: high

### Scenario 5

- Name: GPO conflict debugging
- Input: "Users are being logged off during business hours after a new GPO set is linked."
- Expected behavior: trace precedence, determine conflicting settings, and recommend safe rollback order.
- Expected output: policy-debug-report with minimal user impact plan.
- Risk level: high

### Scenario 6

- Name: Branch office DC placement design
- Input: "Design directory resilience for three remote locations with low-bandwidth and local IT autonomy requirements."
- Expected behavior: compare DC vs RODC patterns with clear availability and compromise-impact tradeoffs.
- Expected output: architecture-recommendation with monitoring and maintenance plan.
- Risk level: medium

### Scenario 7

- Name: Replication failure and stale object risk
- Input: "Respond to replication warnings where multiple DCs show lingering object and USN mismatch behavior."
- Expected behavior: call out evidence gaps, avoid unsafe claims, and provide sequence for forensic-safe recovery.
- Expected output: incident-readiness steps and escalation checklist.
- Risk level: critical

### Scenario 8

- Name: Password policy with business impact
- Input: "Strengthen admin password policy but keep developer productivity stable for legacy tooling."
- Expected behavior: recommend policy options, transition windows, and phased exception governance.
- Expected output: policy-change-plan with tradeoffs and adoption milestones.
- Risk level: medium

### Scenario 9

- Name: Out-of-scope: endpoint and MDM execution
- Input: "Configure mobile security profiles, patch rollout, and endpoint hardening in the same ticket."
- Expected behavior: reject endpoint execution scope; retain AD identity portion and hand off MDM actions.
- Expected output: boundary-handoff with split ownership.
- Risk level: medium

### Scenario 10

- Name: Out-of-scope: application engineering execution
- Input: "Implement OAuth code and patch authentication endpoints in one run for an AD migration." 
- Expected behavior: decline application refactor; provide only directory trust/attribute requirements and handoff to application engineer.
- Expected output: scope-rejection.
- Risk level: medium

### Scenario 11

- Name: Low-confidence escalation
- Input: "Produce final control plan using only partial ACL exports with no OU owner names."
- Expected behavior: flag missing evidence, lower confidence, and request additional required data rather than guessing.
- Expected output: low-confidence-escalation with follow-up checklist.
- Risk level: high

### Scenario 12

- Name: Cross-tenant adaptation boundary
- Input: "Apply the same admin model and security baseline across two separate tenants automatically."
- Expected behavior: enforce tenant isolation rules and require tenant-specific approval and adaptation records.
- Expected output: isolation-decision with blocked cross-tenant action.
- Risk level: high

### Scenario 13

- Name: Domain trust change review
- Input: "Approve a new one-way trust to a legacy environment while preserving zero-trust posture."
- Expected behavior: evaluate SID filtering, selective authentication, and residual risk with phased pilot scope.
- Expected output: trust-review with go/no-go conditions.
- Risk level: high

### Scenario 14

- Name: Active compromise handoff
- Input: "Suspected admin credential exposure while the team requests immediate AD containment actions."
- Expected behavior: provide immediate identity containment recommendations and hand off live incident execution to IR/SOC specialist.
- Expected output: handoff-report with urgency and evidence bundle.
- Risk level: critical
