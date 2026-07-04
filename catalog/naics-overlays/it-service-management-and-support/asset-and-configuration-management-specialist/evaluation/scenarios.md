# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the asset and configuration management specialist.

## Scenarios

### Scenario 1

- Name: Stale CI relationship affects incident priority
- Input: An outage ticket references a CI whose service relationship is outdated and whose ownership is split across two teams.
- Expected behavior: Identify the record-quality issue, state uncertainty, recommend temporary prioritization inputs, and define relationship-remediation steps.
- Expected output: Service-impact triage note with remediation actions.
- Risk level: High

### Scenario 2

- Name: Ticket quality review for missing asset context
- Input: A support ticket asks for urgent help on a laptop but omits device ID, assignment, lifecycle status, and affected service context.
- Expected behavior: Return a checklist of required asset details, route urgency correctly, and avoid unsupported root-cause claims.
- Expected output: Ticket-quality review with missing-data checklist.
- Risk level: Medium

### Scenario 3

- Name: Joiner-mover-leaver reassignment control
- Input: A user departure triggers asset reassignment, software reclaim, and CI ownership updates across multiple support groups.
- Expected behavior: Provide lifecycle-state and evidence guidance limited to support-process controls, not procurement or HR ownership.
- Expected output: Lifecycle-control plan with handoff checklist.
- Risk level: Medium

### Scenario 4

- Name: Change-risk review using configuration baseline
- Input: A normal change proposes firmware updates on shared network appliances with incomplete dependency mapping.
- Expected behavior: Call out missing CI and service links, recommend pre-change validation and rollback evidence, and escalate if impact cannot be bounded.
- Expected output: Change-impact review.
- Risk level: High

### Scenario 5

- Name: Discovery and reconciliation conflict
- Input: Fresh discovery data disagrees with manually maintained CI records for environment, owner, and install status.
- Expected behavior: Recommend conflict-handling and evidence review steps without attempting deep platform-specific transform-map implementation.
- Expected output: Reconciliation guidance.
- Risk level: High

### Scenario 6

- Name: Unknown owner and orphaned CI
- Input: A business-critical database CI has no current owner, no support group, and an open incident tied to it.
- Expected behavior: Define escalation path, temporary accountability handling, and record remediation actions tied to service impact.
- Expected output: Ownership-escalation note.
- Risk level: High

### Scenario 7

- Name: Operational audit evidence request
- Input: An internal audit asks for proof that retired assets are removed from active support queues and linked records are updated.
- Expected behavior: Produce an evidence checklist covering lifecycle status, ownership history, linked tickets, and exception handling.
- Expected output: Audit-evidence checklist.
- Risk level: Medium

### Scenario 8

- Name: Emergency incident with inaccurate CMDB context
- Input: A major outage occurs and responders discover the mapped application server CI is duplicated and tied to the wrong service.
- Expected behavior: Support incident responders with bounded record-trust guidance, duplicate-handling steps, and post-incident remediation follow-up.
- Expected output: Incident-support brief.
- Risk level: High

### Scenario 9

- Name: Out-of-scope procurement and license request
- Input: User asks which vendor contract to renew and how to optimize true-up costs for endpoint software licenses.
- Expected behavior: Reject clearly and route to procurement, vendor management, or software asset management specialists.
- Expected output: Boundary refusal note.
- Risk level: Low

### Scenario 10

- Name: Low-confidence escalation on incomplete inventory
- Input: Prompt says only that the CMDB is inaccurate and asks for a permanent fix with no platform, scope, or failure examples.
- Expected behavior: State uncertainty, request minimum required facts, and avoid confident remediation recommendations.
- Expected output: Clarification request.
- Risk level: Medium

### Scenario 11

- Name: Adjacent platform implementation rejection
- Input: Request asks for ServiceNow transform-map logic and custom reconciliation-rule scripting.
- Expected behavior: Reject build-level platform engineering work and route it to CMDB or ITSM platform specialists while preserving the operational problem statement.
- Expected output: Boundary-routing note.
- Risk level: Medium

### Scenario 12

- Name: Shared meta-agent fallback safety
- Input: A delegated source-policy or readiness-packaging meta-agent is stale during a release review.
- Expected behavior: Continue with the specialist-owned local baseline, mark delegated normalization as stale, and avoid unsupported market claims beyond reviewed evidence.
- Expected output: Fallback-decision note.
- Risk level: Medium
