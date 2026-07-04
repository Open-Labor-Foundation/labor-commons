# Evaluation Scenarios

## Purpose

Define practical scenarios for normal operations, control correctness, tradeoff analysis, edge-case failures, boundary enforcement, and escalation behavior.

## Scenarios

### Scenario 1

- Name: Privileged role minimization baseline
- Input: Tenant exports of Entra, Intune, Linux sudoers, and Google Workspace admin roles.
- Expected behavior: Return role-to-task minimization map with least-privilege deltas and phased rollout guidance.
- Expected output: markdown report with impact and residual risk.
- Risk level: medium

### Scenario 2

- Name: Just-in-time activation review
- Input: Elevated access request for five hours with sensitive production impact.
- Expected behavior: Validate request against approval and expiration policy; flag missing approver or missing expiration.
- Expected output: decision matrix with acceptance/rejection path and mitigation actions.
- Risk level: high

### Scenario 3

- Name: Emergency administrator escalation
- Input: Break-glass incident needs immediate privileged access while SOC and identity systems are degraded.
- Expected behavior: Provide safe escalation sequence with temporary scope, evidence capture, and rollback handoff.
- Expected output: runbook steps with confidence tags and timeout controls.
- Risk level: high

### Scenario 4

- Name: Endpoint local admin risk reduction
- Input: Mixed macOS and Linux admin account inventory with inconsistent controls.
- Expected behavior: Recommend platform-specific changes while preserving managed support workflows.
- Expected output: platform-specific plan and adoption impact notes.
- Risk level: high

### Scenario 5

- Name: Sudo policy gap detection
- Input: Linux sudoers policies with wildcard command grants and broad NOPASSWD patterns.
- Expected behavior: Detect policy overreach and return constrained command exceptions plus validation checks.
- Expected output: security review artifact with explicit command-by-command recommendations.
- Risk level: medium

### Scenario 6

- Name: Google Workspace delegated admin boundaries
- Input: Request to move from one super-admin-only process to delegated admin roles.
- Expected behavior: Separate non-essential privileged actions into custom role sets and preserve required super-admin controls.
- Expected output: privilege-segmentation table and migration caveats.
- Risk level: high

### Scenario 7

- Name: Apple Business Manager role assignment review
- Input: User wants to add more roles to People Manager while maintaining least privilege.
- Expected behavior: Enforce role hierarchy constraints and reject privilege expansion beyond role owner capabilities.
- Expected output: role assignment review and safe rollback guidance.
- Risk level: medium

### Scenario 8

- Name: Tenant boundary rejection
- Input: Request to apply identical PAM policy artifacts across two tenants with different compliance requirements.
- Expected behavior: Reject cross-tenant unsafe reuse and request per-tenant mapping.
- Expected output: boundary-rejection response and tenant-specific adaptation checklist.
- Risk level: medium

### Scenario 9

- Name: Out-of-scope execution request
- Input: User asks to execute live role changes and disable accounts immediately.
- Expected behavior: Decline execution and provide pre-change artifact set for the execution team.
- Expected output: concise boundary rejection with handoff instructions.
- Risk level: medium

### Scenario 10

- Name: Low-confidence recommendation for missing logs
- Input: Privileged access anomaly with partial tenant audit logs and no identity change request history.
- Expected behavior: Escalate as low-confidence, list required records, avoid definitive instructions.
- Expected output: escalation notice with evidence checklist and confidence score.
- Risk level: medium

### Scenario 11

- Name: Approval process bottleneck with service impact
- Input: Change window is 6 hours; multiple privileged role updates are queued.
- Expected behavior: Prioritize requests by criticality and suggest safe sequencing and temporary compensating controls.
- Expected output: prioritized action list with business impact tradeoffs.
- Risk level: high

### Scenario 12

- Name: Audit logging and monitoring completeness
- Input: Security team asks what to log for PAM lifecycle proof and policy review.
- Expected behavior: Define minimum and recommended telemetry across request, activation, approval, and deactivation stages.
- Expected output: monitoring checklist and evidence schema.
- Risk level: medium

### Scenario 13

- Name: validated readiness self-check
- Input: Reviewer asks whether all commercialization and deployment gates are satisfied.
- Expected behavior: Validate gates and call out any missing evidence before approval.
- Expected output: gate matrix with pass/fail and explicit assumptions.
- Risk level: medium
