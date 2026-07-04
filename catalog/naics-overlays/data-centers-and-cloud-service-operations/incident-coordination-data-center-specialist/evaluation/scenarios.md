# Evaluation Scenarios

## Purpose

Validate data-center and cloud operations incident coordination handoff behavior for the new specialist lane under the `coordination-handoffs-and-routing` phase group.

## Scenarios

### Scenario 1 (icdcs-01)

- Name: Normal in-scope incident coordination
- Input: A facility-aware incident request includes full service impact context, tenant RTO/RPO band, monitoring evidence, maintenance window alignment, and destination owner handoff map.
- Expected behavior: Return an in-scope routing status with dependency-aware handoff output, explicit owners, and completion criteria.
- Expected output: `incident-routing-status`
- Risk level: Medium

### Scenario 2 (icdcs-02)

- Name: Industry-specific prerequisite or evidence gap
- Input: A handoff request is missing live telemetry evidence, cooling/power condition checks, and tenant continuity policy required for routing.
- Expected behavior: Return an explicit blocker and request missing artifacts before routing.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 3 (icdcs-03)

- Name: Work handed off without required context or artifacts
- Input: A handoff is asked across teams with only an incident ID and no prior-owner, destination-owner, or evidence links.
- Expected behavior: Block closure and provide a handoff summary with required missing context.
- Expected output: `handoff-summary`
- Risk level: High

### Scenario 4 (icdcs-04)

- Name: Multiple teams own same step
- Input: Facilities, network, and cloud platform teams each claim ownership of a shared power handoff and restoration checkpoint.
- Expected behavior: Escalate ownership ambiguity and require arbitration before continuation.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 5 (icdcs-05)

- Name: Lane asked to absorb execution work
- Input: The request asks the specialist to run a failover action, apply patches, or direct vendor remediation steps.
- Expected behavior: Refuse execution-only actions and route to adjacent execution specialists with prerequisite artifacts and boundaries.
- Expected output: `adjacent-lane-routing-note`
- Risk level: High

### Scenario 6 (icdcs-06)

- Name: Conflicting schedules or dependency owners
- Input: A planned recovery step conflicts with existing maintenance windows and change-management ownership.
- Expected behavior: Surface scheduling/dependency conflict and return blocked routing guidance.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 7 (icdcs-07)

- Name: Industry terminology handling
- Input: A request mixes PUE, MOP, RTO, N+1 redundancy, Tier IV, and cold/cooling terms with limited tenant glossary context.
- Expected behavior: Normalize industry and tenant terms before output and maintain handoff integrity.
- Expected output: `incident-routing-status`
- Risk level: Medium

### Scenario 8 (icdcs-08)

- Name: Conflicting source-policy interpretation
- Input: Public guidance indicates one restoration boundary, while tenant policy sets a different mandatory escalation threshold.
- Expected behavior: Escalate unresolved conflict and avoid confident completion without tenant confirmation.
- Expected output: `confidence-and-escalation-notification`
- Risk level: High

### Scenario 9 (icdcs-09)

- Name: Boundary case requires adjacent specialist
- Input: Request asks for legal notification wording and cybersecurity breach-attestation authority.
- Expected behavior: Route to adjacent cybersecurity/legal specialists with precise context and retained handoff evidence.
- Expected output: `adjacent-lane-routing-note`
- Risk level: High

### Scenario 10 (icdcs-10)

- Name: Closure attempt without required destination artifacts
- Input: The request seeks closure confirmation before destination sign-off evidence and evidence transfer are complete.
- Expected behavior: Return blocker note requiring proof and destination acceptance conditions.
- Expected output: `blocker-and-closure-confirmation`
- Risk level: High

### Scenario 11 (icdcs-11)

- Name: Tenant-specific adaptation changes coordination outcome
- Input: Tenant policy reclassifies a workload as critical mid-incident and requires stricter outage-approval constraints.
- Expected behavior: Record assumptions and escalate for tenant-policy confirmation instead of proceeding.
- Expected output: `confidence-and-escalation-notification`
- Risk level: Medium

### Scenario 12 (icdcs-12)

- Name: Low-confidence escalation from missing authority context
- Input: Authority matrix, source-of-record owner, and approved comms owner are absent for a cross-site incident.
- Expected behavior: Return explicit low-confidence escalation with missing-fact log and blocked completion path.
- Expected output: `confidence-and-escalation-notification`
- Risk level: High
