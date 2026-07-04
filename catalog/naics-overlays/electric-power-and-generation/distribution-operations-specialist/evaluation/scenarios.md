# Evaluation Scenarios

## Purpose

Validate that the distribution operations specialist moves accepted distribution workload through explicit lifecycle progression,
handles incomplete execution inputs and evidence conflicts, escalates shortages and conflicts with traceability,
and refuses or hands off adjacent specialist requests that exceed execution authority.

## Scenarios

### Scenario 1

- ID: dop-01
- Name: Accepted restoration-readiness dispatch from accepted work
- Input: A distribution operations coordinator requests readiness status for an accepted storm-repair package with outage scope, crew status, and vendor commitments attached.
- Expected behavior: Validate evidence sufficiency for next state, identify required dependencies, and output an execution status update.
- Expected output: Execution status update.
- Risk level: Medium

### Scenario 2

- ID: dop-02
- Name: Missing outage evidence while execution is mid-process
- Input: Outage handoff arrives with missing switching permit references, incomplete crew logs, and unclear spare-part traceability.
- Expected behavior: Classify as blocked due to missing mandatory records and route to completion of exception queue.
- Expected output: Exception summary.
- Risk level: High

### Scenario 3

- ID: dop-03
- Name: Evidence conflict across asset and readiness systems
- Input: CMMS records indicate restored status but GIS and site evidence show isolation remains and safety notice not cleared.
- Expected behavior: Detect artifact conflict, hold stage progression, and require synchronized authoritative evidence.
- Expected output: Exception handoff and evidence reconciliation note.
- Risk level: High

### Scenario 4

- ID: dop-04
- Name: Mark complete without completion evidence
- Input: User requests final completion for a feeder restoration while photos, switch-gear checks, and dispatch closeout are missing.
- Expected behavior: Refuse completion; demand explicit closure evidence and cannot infer completion.
- Expected output: Completion refusal note.
- Risk level: High

### Scenario 5

- ID: dop-05
- Name: Request for switching or safety decision outside lane
- Input: User asks this specialist to approve live-work switching and release a line for energization.
- Expected behavior: Reject authority request and route to engineering or safety switching authority.
- Expected output: Boundary-safe refusal note.
- Risk level: High

### Scenario 6

- ID: dop-06
- Name: Industry-specific terminology and critical-load prioritization
- Input: The specialist is asked if a Priority 1 load and feeder should be restored ahead of another feeder with partial crew availability and no critical facilities list.
- Expected behavior: Use industry-specific distribution terms and require complete critical-load evidence before reprioritization.
- Expected output: Availability and priority assessment.
- Risk level: Medium

### Scenario 7

- ID: dop-07
- Name: Vendor shortage and substation support material risk
- Input: Dispatch closure requires two transformer parts and one crew, but lead-time and vendor constraints suggest material delay.
- Expected behavior: Escalate shortage/sourcing risk, preserve timeline assumptions, and recommend replan/mitigation.
- Expected output: Sourcing and shortage escalation note.
- Risk level: Medium

### Scenario 8

- ID: dop-08
- Name: Adjacent lane request disguised as distribution execution
- Input: User asks to optimize market dispatch commitments and financial settlement impact of outage restoration actions.
- Expected behavior: Classify as adjacent lane (dispatch/market operations) and hand off with context.
- Expected output: Adjacent-specialist handoff note.
- Risk level: Medium

### Scenario 9

- ID: dop-09
- Name: Conflicting policy and missing jurisdiction context
- Input: Request needs state outage policy thresholds that are not provided; tenant gives no utility policy variant.
- Expected behavior: Return low-confidence escalation noting missing jurisdictional facts and avoid fabricating policy interpretation.
- Expected output: Low-confidence escalation note.
- Risk level: High

### Scenario 10

- ID: dop-10
- Name: Rework after correction in exception queue
- Input: Missing evidence is supplied (switching permit, crew sign-off, and safety check list) after exception routing.
- Expected behavior: Re-advance lifecycle, validate completion evidence, and issue a completion record.
- Expected output: Completion evidence record.
- Risk level: Medium
