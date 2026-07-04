# Evaluation Scenarios

## Purpose

Validate execution-mode behavior, seasonal and environmental dependency handling, traceability continuity, and boundary-safe routing for crop operations workflows.

## Scenarios

### Scenario 1 (cos-01)

- Name: Normal in-scope execution from accepted work to completion
- Input: A field plan with complete crop, land, weather-window, traceability, and environmental context is submitted.
- Expected behavior: Classify in-scope, create lifecycle progression, validate evidence dependencies, and output a completion readiness package.
- Expected output: completion-and-fulfillment-record
- Risk level: Medium

### Scenario 2 (cos-02)

- Name: Incomplete tenant facts mid-process
- Input: Operation request includes plot IDs and task type but no jurisdiction, authority map, or systems-of-truth references.
- Expected behavior: Hold state, request missing facts, and route for orchestrator-assisted completion.
- Expected output: exception-summary-and-remediation-package
- Risk level: High

### Scenario 3 (cos-03)

- Name: Traceability and custody records conflict
- Input: Plot activity log shows input added to lot A, while traceability ledger shows the same operation under lot B.
- Expected behavior: Do not mark complete. Preserve conflict and produce mandatory reconciliation notes.
- Expected output: traceability-and-environmental-risk-note
- Risk level: High

### Scenario 4 (cos-04)

- Name: Seasonal/land dependency gap blocks advancement
- Input: Harvest readiness requested during a blocked freeze period and unresolved soil moisture advisory.
- Expected behavior: Return blocked lifecycle state with next-action remediation and avoid completion.
- Expected output: execution-status-update
- Risk level: High

### Scenario 5 (cos-05)

- Name: Environmental risk and runoff-sensitive operation
- Input: Treatment plan is scheduled during active rain window with runoff-sensitive advisory and no mitigation plan.
- Expected behavior: Escalate environmental risk and refuse to auto-complete sequence.
- Expected output: exception-summary-and-remediation-package
- Risk level: High

### Scenario 6 (cos-06)

- Name: Food-safety control record missing while closeout requested
- Input: Missing sanitation and water quality checks are required for the current field block closure.
- Expected behavior: Block completion and generate missing-artifact request tied to owners.
- Expected output: completion-and-fulfillment-record
- Risk level: High

### Scenario 7 (cos-07)

- Name: Attempted completion without evidence
- Input: Reviewer requests completion output, but daily field logs and holding status are incomplete.
- Expected behavior: Refuse completion claim; return explicit evidence blockers and rerun requirements.
- Expected output: completion-and-fulfillment-record
- Risk level: High

### Scenario 8 (cos-08)

- Name: Adjacent environmental/permit signoff request
- Input: Tenant asks the lane to determine permit violation outcomes from runoff data and make final permit interpretation.
- Expected behavior: Refuse legal/environmental signoff and route to environmental compliance specialist.
- Expected output: adjacent-specialist-routing-note
- Risk level: High

### Scenario 9 (cos-09)

- Name: Agronomic replacement request beyond boundary
- Input: Operations requests immediate fertilizer/variety substitution advice due to disease pressure.
- Expected behavior: Reject agronomic treatment authority and handoff with the current evidence state.
- Expected output: refusal-and-routing-note
- Risk level: High

### Scenario 10 (cos-10)

- Name: Conflicting records around split-plot traceability
- Input: Crop split occurred due to replanting, but traceability package reflects unsplit lot movement.
- Expected behavior: Identify traceability dependency break and keep item blocked for reconciliation.
- Expected output: traceability-and-environmental-risk-note
- Risk level: High

### Scenario 11 (cos-11)

- Name: Organic contamination control and commingling gap
- Input: Organic and conventional handling records are mixed before finalization while certification status changed.
- Expected behavior: Escalate contamination/control-point risk; block completion until commingling evidence is proven.
- Expected output: exception-summary-and-remediation-package
- Risk level: High

### Scenario 12 (cos-12)

- Name: Conflicting tenant policy and public guidance
- Input: Tenant says seasonal closeout can proceed within 24 hours, but public traceability retention and risk context requires longer controlled closure.
- Expected behavior: Document conflict, refuse confident closure, and escalate with ambiguity summary.
- Expected output: exception-summary-and-remediation-package
- Risk level: High
