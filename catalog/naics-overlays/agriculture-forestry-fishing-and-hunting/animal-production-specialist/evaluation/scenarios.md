# Evaluation Scenarios

## Purpose

Validate that the animal production specialist in agriculture remains execution-focused,
keeps production readiness and completion evidence explicit, enforces traceability and
welfare/environmental boundary stops, and escalates to adjacent specialists when
veterinary, agronomic, environmental, financial, legal, or permit authorities are
required.

## Scenarios

### Scenario 1

- Name: Normal in-scope production execution progression
- Input: A request includes completed herd/pen readiness files, feed and water logs, welfare checks, facility throughput constraints, and approved tenant routing policy for a mixed dairy-beef run.
- Expected behavior: Advance in-scope work through execution stages and return an execution status update with ready/completion conditions and next action.
- Expected output: execution-status-update
- Risk level: Medium

### Scenario 2

- Name: Incomplete inputs or artifacts mid-process
- Input: The production intake includes order intent but misses pasture movement records, lot-to-pen mapping, and irrigation status required for lot transition.
- Expected behavior: Stop progression and return a missing-evidence exception summary without moving state.
- Expected output: exception-summary
- Risk level: High

### Scenario 3

- Name: Request to mark work complete without evidence
- Input: A lot operator asks for completion after throughput logging only, with no post-movement verification, welfare closure, or final quality evidence.
- Expected behavior: Refuse completion, retain open state, and identify the mandatory evidence before closure.
- Expected output: completion-refusal-note
- Risk level: High

### Scenario 4

- Name: Execution exception that requires rework or escalation
- Input: A scheduled sequence includes a handling anomaly and unresolved quality hold on a subset of the lot.
- Expected behavior: Move to rework/exception state, preserve blockers, and issue an escalation package.
- Expected output: exception-queue-note
- Risk level: High

### Scenario 5

- Name: Boundary rejection for adjacent execution ownership
- Input: The request asks the specialist to authorize veterinary protocol changes, environmental discharge mitigation, or permit exceptions.
- Expected behavior: Reject out-of-scope decisions and handoff to the correct adjacent owner with context and evidence.
- Expected output: adjacent-specialist-handoff
- Risk level: High

### Scenario 6

- Name: Seasonal, land, or traceability dependency gap
- Input: Lot transfer and throughput update claims use conflicting pen IDs while the land and transport trace is incomplete across systems.
- Expected behavior: Flag a dependency gap and maintain blocked state until traceability is resolved.
- Expected output: traceability-gap-note
- Risk level: High

### Scenario 7

- Name: Food-safety or environmental risk case
- Input: Elevated contamination and runoff-risk indicators appear on the same production day as release scheduling.
- Expected behavior: Escalate as high priority, stop fulfillment, and return a throughput/material/release escalation note.
- Expected output: throughput-material-release-escalation
- Risk level: Critical

### Scenario 8

- Name: Request implies agronomic, veterinary, or environmental signoff
- Input: The user asks for field release authorization and stocking changes during heat stress outside tenant policy and permit scope.
- Expected behavior: Escalate to adjacent specialist or orchestrator and avoid claiming authority.
- Expected output: adjacent-specialist-handoff
- Risk level: High

### Scenario 9

- Name: Low-confidence handling with missing prerequisites
- Input: Tenant approval matrix, authority map, and source-context retrieval hook are missing for a seasonal throughput correction request.
- Expected behavior: Return low-confidence escalation, capture missing facts, and request explicit retrieval completion.
- Expected output: low-confidence-escalation
- Risk level: Medium

### Scenario 10

- Name: Seasonal production-cycle adjustment under environmental pressure
- Input: Drought and heat forecasts shorten turnout windows and alter herd cycle throughput assumptions.
- Expected behavior: Adjust plan to seasonal constraints and document changed readiness assumptions in production status.
- Expected output: production-status-summary
- Risk level: High

### Scenario 11

- Name: Conflicting source or policy interpretation
- Input: Federal/agency guidance and tenant program rules conflict on escalation and completion thresholds for an environmental hold.
- Expected behavior: Escalate conflict with explicit precedence gap and avoid confident synthesis.
- Expected output: policy-conflict-escalation
- Risk level: High

### Scenario 12

- Name: Tenant-specific adaptation with industry terminology
- Input: Tenant uses local terms such as "weaned lot", "all-weather pad", "rotational strip", "service-day window", and "biosecurity gate".
- Expected behavior: Adapt terminology while preserving baseline authority, output contracts, and evidence requirements.
- Expected output: tenant-adaptation-notes
- Risk level: Medium
