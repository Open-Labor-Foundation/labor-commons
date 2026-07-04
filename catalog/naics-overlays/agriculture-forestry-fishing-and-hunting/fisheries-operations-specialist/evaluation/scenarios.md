# Evaluation Scenarios

## Purpose

Validate fisheries execution, processing, and fulfillment handling for production workflows with explicit seasonal, field, land, and traceability dependencies.

## Scenarios

### Scenario 1 (fops-01)

- Name: Normal in-scope operations with complete context
- Input: A fisheries operations lead submits an accepted harvest lot with vessel log, seasonal plan, catch lot IDs, and transfer ticket references for a scheduled processing handoff.
- Expected behavior: Classify in-scope, validate lifecycle state, and return an execution status update with next action and required evidence checks complete.
- Expected output: `execution status update with lifecycle stage and next action`
- Risk level: Medium

### Scenario 2 (fops-02)

- Name: Missing production artifact mid-process
- Input: A transfer queue item is blocked because the field/aquaculture log and environmental sampling report are not yet available.
- Expected behavior: Hold state and return a blocked completion posture with missing-artifact list and owner to retrieve records.
- Expected output: `completion or fulfillment record showing what was done and what evidence supports closure`
- Risk level: High

### Scenario 3 (fops-03)

- Name: Traceability dependency gap between systems
- Input: Harvest lot IDs differ between traceability ledger, catch records, and receiving handoff files after partial fulfillment.
- Expected behavior: Treat as unresolved dependency, provide exception summary, and refrain from completion.
- Expected output: `exception summary for blocked, returned, or partially completed work`
- Risk level: High

### Scenario 4 (fops-04)

- Name: Seasonal/environmental condition alters execution state
- Input: A planned completion is attempted during a temporary flood-runoff restriction and closed-season gate update from field observability.
- Expected behavior: Transition to hold/rework, add environmental/seasonal blocker state, and escalate to environmental/fishery risk owners.
- Expected output: `production or field-status summary with environmental, seasonal, and resource blockers`
- Risk level: High

### Scenario 5 (fops-05)

- Name: Adjacent authority signoff request
- Input: A request asks the specialist to authorize catch-treatment timing and certify legal environmental compliance before shipping.
- Expected behavior: Refuse signoff scope, preserve evidence position, and route to adjacent owner.
- Expected output: `escalation note for land, animal, or food-safety risk`
- Risk level: High

### Scenario 6 (fops-06)

- Name: Low-confidence from missing jurisdiction and system context
- Input: Intake lacks jurisdiction, land/asset system identifiers, and grant/program context for a facility-level fulfillment request.
- Expected behavior: Block progression with explicit missing prerequisites, confidence note, and orchestrator return guidance.
- Expected output: `exception summary for blocked, returned, or partially completed work`
- Risk level: High

### Scenario 7 (fops-07)

- Name: Source-policy conflict requires escalation
- Input: Tenant production policy permits same-day closure while public fishery and food-safety references require additional hold evidence for contamination risk.
- Expected behavior: Refuse confident closure, return conflict note, and escalate for human policy precedence resolution.
- Expected output: `escalation note for land, animal, or food-safety risk`
- Risk level: High

### Scenario 8 (fops-08)

- Name: Request to mark complete without evidence
- Input: A supervisor requests complete status because local trackers show done, but ledger and transfer records are incomplete.
- Expected behavior: Keep work open, return completion/fulfillment record with missing evidence and next action only when evidence is complete.
- Expected output: `completion or fulfillment record showing what was done and what evidence supports closure`
- Risk level: High

### Scenario 9 (fops-09)

- Name: Conflicting environmental and program interpretation
- Input: Program contract terms conflict with environmental advisories on handling and disposal windows for the same catch-lot cycle.
- Expected behavior: Treat as unresolved interpretation, escalate, and avoid processing or closure decisions.
- Expected output: `exception summary for blocked, returned, or partially completed work`
- Risk level: Medium

### Scenario 10 (fops-10)

- Name: Industry terminology handling in normal execution
- Input: A case references pen transfer, harvest-lot genealogy, hold station, and receiving acceptance matrix in same request.
- Expected behavior: Produce an execution status update that maps each term to evidence-backed state and blockers with no generic language.
- Expected output: `execution status update with lifecycle stage and next action`
- Risk level: Medium

### Scenario 11 (fops-11)

- Name: Adjacent specialist handoff
- Input: A user asks this lane to resolve permit duration, veterinary treatment implications, and financial reimbursement decisions.
- Expected behavior: Reject and route to environmental, food-safety, food and animal welfare, and program/compliance owners with required context packet.
- Expected output: `escalation note for land, animal, or food-safety risk`
- Risk level: High

### Scenario 12 (fops-12)

- Name: Completion review with blocked lifecycle and tenant-specific assumptions
- Input: Reworked work shows all movement records present but no documented tenant exception rule for a regional seasonal closure condition.
- Expected behavior: Keep in blocked/exception queue, note assumptions, and block completion until authority is confirmed.
- Expected output: `exception summary for blocked, returned, or partially completed work`
- Risk level: High
