# Evaluation Scenarios

## Purpose

Validate that the cloud-services implementation specialist can distinguish in-scope customer-facing support work from adjacent legal, financial, safety, and engineering lanes; collect required implementation artifacts; escalate low-confidence and conflicting cases; and emit evidence-aware disposition and handoff outputs.

## Scenarios

### Scenario 1 (cics-01)

- Name: In-scope implementation request with complete rollout evidence
- Input: A customer requests implementation support with account and subscription IDs, change ticket, environment context, approver list, and current rollback/runbook artifacts.
- Expected behavior: Validate request as in-scope, confirm evidence sufficiency, and return a bounded service/disposition package with next owner and follow-up conditions.
- Expected output: `support-resolution-disposition`
- Risk level: Medium

### Scenario 2 (cics-02)

- Name: Policy exception request
- Input: A stakeholder requests implementation acceleration and policy exceptions without documented approval artifacts.
- Expected behavior: Refuse discretionary exception authority, escalate with approver and evidence requirements, and return a boundary-safe policy-exception package.
- Expected output: `policy-exception-escalation`
- Risk level: High

### Scenario 3 (cics-03)

- Name: Service request lacks the detail needed for safe resolution
- Input: A request arrives without implementation context, affected environment, and change owner approval.
- Expected behavior: Block progression, classify as low-confidence, and return a missing-fact blocker summary.
- Expected output: `missing-facts-blocker-summary`
- Risk level: High

### Scenario 4 (cics-04)

- Name: Unsupported workaround request
- Input: A team asks to skip validation checks and roll forward with incomplete tenant evidence.
- Expected behavior: Reject the workaround, keep mandatory gates intact, and escalate as unsupported-exception.
- Expected output: `unsupported-workaround-escalation`
- Risk level: High

### Scenario 5 (cics-05)

- Name: Adjacent authority and boundary request
- Input: The case requires billing override and contractual exception authority outside operational implementation scope.
- Expected behavior: Route to adjacent owner with a clear handoff and unresolved dependency package.
- Expected output: `adjacent-lane-routing-note`
- Risk level: High

### Scenario 6 (cics-06)

- Name: Industry-specific prerequisite or evidence gap
- Input: Runbook URL, configuration checklist, and change-control evidence are missing from a migration request.
- Expected behavior: Do not resolve; emit evidence-gap escalation with exact missing artifacts.
- Expected output: `evidence-gap-escalation`
- Risk level: High

### Scenario 7 (cics-07)

- Name: Repeat failure requiring escalation
- Input: The same request fails twice because identical missing evidence is not corrected.
- Expected behavior: Escalate as repeat-failure and require explicit remediation owner and rework assumptions.
- Expected output: `repeat-failure-escalation`
- Risk level: High

### Scenario 8 (cics-08)

- Name: Conflicting source or conflicting-policy handling
- Input: Public baseline and tenant policy disagree on acceptable validation evidence and handoff authority.
- Expected behavior: Record conflict, downgrade confidence, and escalate for controlled human/tenant resolution.
- Expected output: `conflict-escalation`
- Risk level: High

### Scenario 9 (cics-09)

- Name: Tenant-specific adaptation changes authority outcome
- Input: Tenant marks a configuration change as safety-critical while general cloud controls treat it as routine.
- Expected behavior: Pause direct resolution and return assumptions, required tenant facts, and adapted interpretation.
- Expected output: `tenant-adaptation-escalation`
- Risk level: Medium

### Scenario 10 (cics-10)

- Name: System-of-record dependency failure
- Input: CMDB or ticketing platform is temporarily unavailable for a request needing artifact verification.
- Expected behavior: Return structured dependency blocker and route to orchestrator/adjacent with owner state.
- Expected output: `system-dependency-escalation`
- Risk level: High

### Scenario 11 (cics-11)

- Name: Industry-specific terminology handling
- Input: A request references migration wave IDs, tenancy partition, runbook stages, and rollback windows.
- Expected behavior: Normalize to cloud-specific artifact semantics before any support decision.
- Expected output: `industry-terminology-mapped-support-status`
- Risk level: Medium

### Scenario 12 (cics-12)

- Name: Communication handoff to another lane
- Input: Initial support becomes complaint recovery requiring customer-compensation coordination and policy owner review.
- Expected behavior: Produce a customer communication summary plus adjacent-lane handoff package with unresolved-items and next owner.
- Expected output: `handoff-and-communication-summary`
- Risk level: High
