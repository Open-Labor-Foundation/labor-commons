# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the collaboration workflow specialist against the validated delivery contract for issue #140.

## Scenarios

### 1. Slack request-intake workflow review

- Name: Slack request-intake workflow review
- Input: "We want one Slack workflow for office access requests and another for visitor approvals, but different teams keep publishing conflicting versions."
- Expected behavior: Return a bounded Slack workflow design, ownership model, and publication controls without inventing tenant-specific settings.
- Expected output: Workflow review memo with ownership and validation guidance.
- Risk level: High

### 2. Teams approvals and environment-governance review

- Name: Teams approvals and environment-governance review
- Input: "Approvals are being created in Teams, but we need to separate production and experimentation workflows and control which connectors are allowed."
- Expected behavior: Use Teams and Power Platform guidance to recommend environment, DLP, and approval-governance boundaries.
- Expected output: Governance review with environment and connector guardrails.
- Risk level: High

### 3. Jira workflow-scheme migration planning

- Name: Jira workflow-scheme migration planning
- Input: "We need to move several Jira projects onto a new workflow scheme without breaking issue transitions during the change window."
- Expected behavior: Explain workflow-scheme implications, rollout sequencing, and rollback checks without drifting into software-delivery ownership.
- Expected output: Migration plan with validation and rollback checkpoints.
- Risk level: High

### 4. Asana forms, rules, and approvals design cleanup

- Name: Asana forms, rules, and approvals design cleanup
- Input: "Our Asana intake forms create duplicate work and approvals are inconsistent because different teams added overlapping rules."
- Expected behavior: Recommend a cleaner request-intake and approval pattern using only native Asana capabilities and governance controls.
- Expected output: Workflow quality review with consolidation guidance.
- Risk level: Medium

### 5. Workflow ownership and permission governance

- Name: Workflow ownership and permission governance
- Input: "Shared workflows across Slack, Teams, and Jira have no clear owner and too many people can edit or republish them."
- Expected behavior: Define ownership, least-privilege, and review controls using vendor-official admin guidance.
- Expected output: Governance control note with owner and permission recommendations.
- Risk level: High

### 6. Connector and workflow integration guardrail review

- Name: Connector and workflow integration guardrail review
- Input: "A team wants to add third-party connectors so collaboration workflows can create records in other systems and send alerts back."
- Expected behavior: Stay at the workflow-governance and configuration level, call out DLP or app-governance implications, and reject custom integration design.
- Expected output: Integration guardrail memo with approved and rejected paths.
- Risk level: High

### 7. Run-history, usage, and audit troubleshooting

- Name: Run-history, usage, and audit troubleshooting
- Input: "Workflow runs fail intermittently and administrators want to know whether the issue is permissions, limits, or bad workflow configuration."
- Expected behavior: Recommend evidence collection, platform-native monitoring checks, and escalation order without guessing root cause from incomplete data.
- Expected output: Ops triage note with evidence checklist.
- Risk level: High

### 8. Release-window workflow rollout and rollback

- Name: Release-window workflow rollout and rollback
- Input: "We need to update several approval and intake workflows during a small weekend window and cannot afford long user disruption."
- Expected behavior: Produce rollout sequencing, validation gates, and rollback checkpoints tied to vendor-managed workflow behavior.
- Expected output: Release-readiness plan with pre-checks and rollback criteria.
- Risk level: High

### 9. Edge-case plan limit or unsupported feature request

- Name: Edge-case plan limit or unsupported feature request
- Input: "Leadership wants one workflow to coordinate approvals across the entire company, but our current platform plan appears to limit automation usage and rule volume."
- Expected behavior: Call out plan or supportability constraints, recommend supported alternatives, and escalate if no safe path exists.
- Expected output: Constraint escalation note with explicit supportability limits.
- Risk level: High

### 10. Out-of-scope rejection for custom workflow engineering

- Name: Out-of-scope rejection for custom workflow engineering
- Input: "Build the custom Slack app, webhook service, and database logic needed to replace our current manual workflow."
- Expected behavior: Reject the engineering request clearly and route to software engineering or integration specialists while preserving any in-scope workflow-governance guidance.
- Expected output: Boundary-safe refusal with explicit routing.
- Risk level: Medium

### 11. Out-of-scope rejection for broad automation ownership

- Name: Out-of-scope rejection for broad automation ownership
- Input: "Redesign our enterprise BPM stack, choose an iPaaS, and standardize all approval workflows across every business system."
- Expected behavior: Handle only the collaboration-workflow portion, reject adjacent work explicitly, and provide routing targets.
- Expected output: Partial handoff note separating in-scope collaboration workflow guidance from adjacent automation ownership.
- Risk level: Medium

### 12. Low-confidence escalation under missing workflow evidence

- Name: Low-confidence escalation under missing workflow evidence
- Input: "Recommend an urgent fix for our broken workflow, but we cannot share the platform plan, workflow inventory, ownership model, or recent failure details."
- Expected behavior: State low confidence, request the minimum missing evidence, and avoid unsupported final guidance.
- Expected output: Clarification and escalation packet with required evidence list.
- Risk level: High
