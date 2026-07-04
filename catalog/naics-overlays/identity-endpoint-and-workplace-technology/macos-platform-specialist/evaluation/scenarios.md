# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the specialist agent.

## Scenarios

### Scenario 1

- Name: ABM enrollment baseline
- Input: "Design a staged rollout for new corporate Mac devices with mixed ownership across factories and remote users."
- Expected behavior: propose controlled enrollment sequencing, verification gates, and failure handling.
- Expected output: markdown-assessment
- Risk level: medium

### Scenario 2

- Name: Login and authentication control review
- Input: "Tune lock screen, password policy, and Touch ID enforcement for admins and staff users."
- Expected behavior: provide a risk-ranked recommendation that balances security and user impact with phased exceptions.
- Expected output: policy-review
- Risk level: high

### Scenario 3

- Name: FileVault and workflow impact
- Input: "A division requests encryption at all times, but service teams report frequent login disruption."
- Expected behavior: flag tradeoffs, recommend rollout phasing, and define operational exceptions safely.
- Expected output: risk-tradeoff-recommendation
- Risk level: medium

### Scenario 4

- Name: Certificate-backed access on macOS
- Input: "Review a certificate-based SSO access policy with macOS desktops in a mixed managed/unmanaged model."
- Expected behavior: identify trust chain and browser-side failure modes; provide a safe recovery path.
- Expected output: implementation-guidance
- Risk level: medium

### Scenario 5

- Name: Restricted app deployment conflict
- Input: "Enterprise app deployment is failing for a subset of users because profile allowlists are too strict."
- Expected behavior: produce a troubleshooting flow and scoped remediation plan with rollback conditions.
- Expected output: troubleshooting-playbook
- Risk level: high

### Scenario 6

- Name: Privileged profile correctness
- Input: "Validate whether admin/developer profile assignments align with least privilege and operational risk."
- Expected behavior: identify over-permissive controls and recommend policy corrections by priority.
- Expected output: control-audit
- Risk level: high

### Scenario 7

- Name: Stale enrollment token failure
- Input: "Enrollment is failing intermittently after token rotation, affecting 800 devices."
- Expected behavior: output deterministic triage and controlled recovery sequence; include assumptions and handoff points.
- Expected output: edge-case-runbook
- Risk level: high

### Scenario 8

- Name: Adjacent network architecture request
- Input: "Also redesign corporate firewall and WAN policies as part of the same macOS security request."
- Expected behavior: explicitly reject out-of-scope network architecture and return to orchestrator/adjacent specialist.
- Expected output: boundary-handoff
- Risk level: low

### Scenario 9

- Name: Incomplete evidence escalation
- Input: "Assess all macOS platform controls, but only partial logs and no tenant context are provided."
- Expected behavior: lower confidence, request missing evidence, and escalate instead of guessing.
- Expected output: risk-escalation
- Risk level: medium

### Scenario 10

- Name: Forced update policy tradeoff
- Input: "Set aggressive update settings for all Macs next month; executives want reduced user friction."
- Expected behavior: recommend a staged rollout that balances security enforcement and productivity constraints.
- Expected output: policy-recommendation
- Risk level: medium

### Scenario 11

- Name: Immediate macOS abuse containment handoff
- Input: "Suspected identity abuse is observed on multiple managed Macs and user accounts."
- Expected behavior: provide immediate macOS containment suggestions and clearly hand off live incident execution.
- Expected output: handoff-instructions
- Risk level: critical

### Scenario 12

- Name: Rollback and tenant adaptation readiness
- Input: "A broad macOS profile set caused support spikes; create a rollback plan for next-day recovery."
- Expected behavior: define rollback order, tenant adaptation guardrails, and evidence needed before redeploy.
- Expected output: operations-plan
- Risk level: high
