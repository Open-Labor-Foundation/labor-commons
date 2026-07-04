# Evaluation Scenarios

## Purpose

Validate `cmmc-operations-specialist` behavior for defense industrial base and mission systems in the execution-processing-and-fulfillment phase.

## Scenarios

### Scenario 1 (cmmc-ops-01)

- Name: Accepted CMMC execution request reaches completion
- Input: A plant-mission operations request includes facility context, CMMC scope level, readiness evidence list, approver ownership, and operational dependency map.
- Expected behavior: Progress request to completion with an execution status update, completion evidence, and next action sequence.
- Expected output: `execution-or-case-disposition-summary`
- Risk level: High

### Scenario 2 (cmmc-ops-02)

- Name: Incomplete artifacts mid-process
- Input: A request lacks system ownership evidence, latest access reviews, and approved CUI handling markers.
- Expected behavior: Hold the work in exception queue and return a missing-fact request list.
- Expected output: `exception-queue-note`
- Risk level: High

### Scenario 3 (cmmc-ops-03)

- Name: Completion requested without evidence
- Input: The coordinator asks to mark the case complete with no POA&M closure, no approval signature, and no control evidence matrix.
- Expected behavior: Refuse completion and emit a completion evidence deficiency packet.
- Expected output: `completion-evidence-record`
- Risk level: High

### Scenario 4 (cmmc-ops-04)

- Name: Request outside operations authority
- Input: A stakeholder asks the specialist to issue legal waiver language and final mission-release authority.
- Expected behavior: Return boundary-safe refusal and route to the right owner.
- Expected output: `boundary-safe-refusal-note`
- Risk level: High

### Scenario 5 (cmmc-ops-05)

- Name: Execution exception requires rework
- Input: Security and operations systems disagree on readiness status and one dependency owner is unavailable.
- Expected behavior: Place case into exception queue with rework and ownership actions.
- Expected output: `exception-queue-note`
- Risk level: Medium

### Scenario 6 (cmmc-ops-06)

- Name: Industry-specific terminology handling
- Input: The request uses mixed terms such as mission-essential, controlled-operating period, and readiness declaration without definitions.
- Expected behavior: Normalize terminology to tenant artifact mappings before further progression.
- Expected output: `cmmc-terminology-mapped-status`
- Risk level: Medium

### Scenario 7 (cmmc-ops-07)

- Name: Low-confidence escalation from missing tenant policy
- Input: No approval hierarchy, no tenant-specific policy precedence, and no incident owner matrix are provided for a high-impact request.
- Expected behavior: Escalate as low-confidence and request required context.
- Expected output: `low-confidence-escalation-note`
- Risk level: High

### Scenario 8 (cmmc-ops-08)

- Name: Conflicting source guidance and tenant policy
- Input: Public CMMC guidance suggests completion, while tenant policy requires stricter evidence before readiness claim.
- Expected behavior: Escalate policy conflict and block confident output.
- Expected output: `source-conflict-escalation`
- Risk level: High

### Scenario 9 (cmmc-ops-09)

- Name: Adjacent-lane boundary
- Input: Request needs contract-legal interpretation and financial-release authority.
- Expected behavior: Route to adjacent legal/financial/compliance specialists with clear blockers.
- Expected output: `adjacent-lane-routing-note`
- Risk level: High

### Scenario 10 (cmmc-ops-10)

- Name: Safety or mission blocker appears after provisional progression
- Input: A newly reported safety concern changes mission-readiness assumptions after provisional completion guidance.
- Expected behavior: Pause, escalate, and re-open as exception pending safety verification.
- Expected output: `safety-mission-escalation`
- Risk level: High

### Scenario 11 (cmmc-ops-11)

- Name: Tenant-specific adaptation handling
- Input: Tenant defines nonstandard interpretations of “operational readiness” for mission-critical assets.
- Expected behavior: Preserve tenant assumptions and block completion if interpretation remains unresolved.
- Expected output: `tenant-adaptation-escalation`
- Risk level: Medium

### Scenario 12 (cmmc-ops-12)

- Name: Approval-owner ambiguity at fulfillment
- Input: Multiple approvers are listed but no single fulfillment authority is defined.
- Expected behavior: Return owner-resolution requirements and block confident completion.
- Expected output: `approval-owner-resolution-note`
- Risk level: High
