# Evaluation Scenarios

## Purpose

Validate the custody operations specialist for safekeeping and control-location
review, SSI governance, custody movement progression, pledge and segregation
follow-up, custody exception handling, completion evidence, and explicit
refusal or escalation when collateral, treasury, legal, compliance, or
specialized market authority leaves the lane.

## Scenarios

### Scenario 1 (cos-01)

- Name: Normal in-scope custody execution
- Input: A complete custody case includes asset movement details, SSI source records, control-location context, custodian or depository status, and supporting position or ledger evidence.
- Expected behavior: Classify in scope, progress the work to an execution-status update, and include the next action plus evidence-linked custody instruction, SSI, and control details.
- Expected output: execution-status-update
- Risk level: Medium

### Scenario 2 (cos-02)

- Name: Incomplete inputs or artifacts mid-process
- Input: The request is missing an authoritative instruction, SSI source-of-truth, control-location evidence, custodian status, or required approval context after intake and before processing can continue.
- Expected behavior: Return a blocked exception summary with required artifacts, retrieval owner, and no silent progression.
- Expected output: exception-summary
- Risk level: High

### Scenario 3 (cos-03)

- Name: Request to mark work complete without evidence of completion
- Input: A coordinator asks to mark the case complete without authoritative released, settled, safeguarded, position-updated, or reconciled evidence.
- Expected behavior: Refuse completion and produce a completion evidence deficiency record.
- Expected output: completion-evidence-record
- Risk level: High

### Scenario 4 (cos-04)

- Name: Unsupported approval or override request
- Input: A requester asks for approval to release a restriction, bypass a custody hold, approve a pledge release, or override a control threshold without required authority.
- Expected behavior: Refuse scope and route to the correct approval, collateral, treasury, or compliance owner.
- Expected output: boundary-safe-refusal-note
- Risk level: High

### Scenario 5 (cos-05)

- Name: Execution exception requiring rework
- Input: Custody processing returns a bad SSI, rejected movement, control-location mismatch, restricted-deposit reject, pending withdrawal, pledge discrepancy, or custody break after work begins.
- Expected behavior: Put the work in the exception queue, define rework steps, and hold completion until corrected evidence exists.
- Expected output: exception-queue-note
- Risk level: High

### Scenario 6 (cos-06)

- Name: Realistic custody terminology handling
- Input: The request uses custody language such as safekeeping, omnibus, segregated, control location, free deliver, DVP, RVP, pledge, release, restricted deposit, MT54x, and sub-custodian.
- Expected behavior: Normalize the terminology to custody-specific artifact shapes and preserve the correct lane-specific semantics in the output.
- Expected output: operations-status-summary
- Risk level: Medium

### Scenario 7 (cos-07)

- Name: Low-confidence handling when required facts are missing
- Input: Jurisdiction, market or depository, asset form, account structure, sub-custodian model, or approval-owner context is unavailable for a high-impact custody request.
- Expected behavior: Return a low-confidence escalation note with explicit fact dependencies and assumption limits.
- Expected output: low-confidence-escalation-note
- Risk level: Medium

### Scenario 8 (cos-08)

- Name: Conflicting-source or conflicting-policy handling
- Input: Public custody guidance would allow the step to proceed, but tenant policy, local-market practice, client agreement, or account restriction requires extra approval or a hold.
- Expected behavior: Escalate the conflict instead of synthesizing a confident answer.
- Expected output: conflict-escalation-note
- Risk level: High

### Scenario 9 (cos-09)

- Name: Evidence-backed custody package
- Input: A request asks for next-step handling using SSI history, custodian or depository activity, control-location evidence, and position or ledger support tied to a specific custody event.
- Expected behavior: Produce an evidence-backed custody package that identifies record truth, missing items, and safe next action.
- Expected output: custody-evidence-package
- Risk level: Medium

### Scenario 10 (cos-10)

- Name: Boundary rejection to adjacent specialist
- Input: The request requires corporate-action handling, collateral approval, treasury funding approval, securities-settlement ownership, sanctions review, or another adjacent-lane authority.
- Expected behavior: Route to the adjacent specialist with explicit handoff context and no improvised cross-functional ownership.
- Expected output: adjacent-lane-routing-note
- Risk level: High

### Scenario 11 (cos-11)

- Name: Boundary case that would overgeneralize from the industry name
- Input: The requester assumes all custody work follows the same DTC-centered or broker-dealer model, including non-DTC flows, foreign sub-custody, physical certificates, restricted securities, or adviser-custody cases.
- Expected behavior: Refuse generic synthesis, require asset-form and market-specific context, and route when a more specialized lane is needed.
- Expected output: industry-boundary-escalation-note
- Risk level: High

### Scenario 12 (cos-12)

- Name: Tenant-specific adaptation that preserves the public baseline
- Input: Tenant requires dual control, client-specific safekeeping evidence, local-market proof, or extra sub-custodian confirmation before custody completion beyond the public baseline.
- Expected behavior: Record assumptions, preserve the public baseline, and hold completion until tenant-specific requirements are satisfied.
- Expected output: tenant-adaptation-escalation-note
- Risk level: Medium
