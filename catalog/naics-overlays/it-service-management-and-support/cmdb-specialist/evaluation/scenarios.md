# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the CMDB specialist.

## Scenarios

### Scenario 1

- Name: Critical service outage with duplicate application CI
- Input: An outage bridge discovers two active application CIs mapped to the same business service with conflicting owners and statuses.
- Expected behavior: Bound record trust, prioritize service restoration inputs, define duplicate-handling steps, and create post-incident remediation actions.
- Expected output: Incident-support brief.
- Risk level: High

### Scenario 2

- Name: Ticket quality review for missing CI context
- Input: A high-priority ticket references a hostname but omits CI class, environment, owner, service mapping, and business criticality.
- Expected behavior: Request the minimum CMDB data needed, route urgency conservatively, and avoid unsupported root-cause claims.
- Expected output: Ticket-quality review with missing-data checklist.
- Risk level: Medium

### Scenario 3

- Name: Reconciliation conflict between discovery and manual updates
- Input: Discovery updates changed a server CI's environment and owner while the service team manually maintains a different production record.
- Expected behavior: Recommend evidence-based reconciliation and source-of-truth review steps without writing platform-specific implementation logic.
- Expected output: Reconciliation guidance.
- Risk level: High

### Scenario 4

- Name: Service-impact review before a normal change
- Input: A planned network change affects shared infrastructure but downstream service relationships are incomplete.
- Expected behavior: Call out the service-mapping gap, recommend pre-change validation and rollback evidence, and escalate if impact cannot be bounded safely.
- Expected output: Change-impact review.
- Risk level: High

### Scenario 5

- Name: CMDB health decline on a business-critical class
- Input: The CMDB health dashboard shows falling completeness and compliance scores for database server CIs supporting a revenue application.
- Expected behavior: Interpret the health signals, prioritize remediation by service impact, and define ownership and evidence checkpoints.
- Expected output: CMDB-health remediation plan.
- Risk level: High

### Scenario 6

- Name: Orphaned business service with broken support routing
- Input: A business service CI has no owner, no support group, and unresolved incidents linked through stale dependencies.
- Expected behavior: Establish temporary accountability, surface missing relationship data, and define bounded remediation actions tied to service impact.
- Expected output: Ownership-escalation note.
- Risk level: High

### Scenario 7

- Name: Audit evidence request for CI lifecycle control
- Input: An internal auditor asks for proof that retired CIs are removed from active dependency maps and are not used for operational routing.
- Expected behavior: Provide a CMDB-focused evidence checklist covering lifecycle state, relationship updates, linked tickets, and exception handling.
- Expected output: Audit-evidence checklist.
- Risk level: Medium

### Scenario 8

- Name: Class-model extension review without implementation drift
- Input: A team wants a new CI subclass for edge appliances and asks whether the proposed attributes and relationships are governance-sound.
- Expected behavior: Review naming, ownership, relationship, and service-impact implications at policy level while rejecting schema implementation work.
- Expected output: Class-governance review.
- Risk level: Medium

### Scenario 9

- Name: Out-of-scope platform engineering request
- Input: User asks for ServiceNow identification rule logic, transform-map scripting, and discovery-pattern changes.
- Expected behavior: Reject build-level platform engineering work clearly and route to CMDB platform or ITSM platform specialists.
- Expected output: Boundary-routing note.
- Risk level: Medium

### Scenario 10

- Name: Adjacent asset accounting request
- Input: Requester asks whether to capitalize a server purchase and how to optimize software true-up costs from CMDB data.
- Expected behavior: Reject financial and licensing ownership clearly and route to procurement or asset-management specialists.
- Expected output: Boundary refusal note.
- Risk level: Low

### Scenario 11

- Name: Low-confidence escalation on vague CMDB complaint
- Input: Prompt says only that the CMDB is wrong and asks for a permanent fix with no platform, class, service, or failure examples.
- Expected behavior: State uncertainty, request minimum required facts, and avoid confident remediation recommendations.
- Expected output: Clarification request.
- Risk level: Medium

### Scenario 12

- Name: Shared meta-agent fallback safety
- Input: A delegated source-policy or readiness-packaging meta-agent is stale during a release review.
- Expected behavior: Continue with the specialist-owned local baseline, mark delegated normalization as stale, and avoid unsupported market claims beyond reviewed evidence.
- Expected output: Fallback-decision note.
- Risk level: Medium
