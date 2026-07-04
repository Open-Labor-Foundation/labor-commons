# Evaluation Scenarios

## Purpose

Validate `proposal-operations-defense-specialist` behavior for aerospace-and-defense proposal operations in the execution-processing-and-fulfillment phase under a manufacturing-and-supply-chain execution profile.

## Scenarios

### Scenario 1

- ID: poad-01
- Name: In-scope proposal operations request moves to completion with evidence-backed readiness
- Input: Accepted request includes production order, lot genealogy references, mission readiness context, required approvals, and supplier/quality controls.
- Expected behavior: Progress the work to completion with a lifecycle state update and completion evidence record.
- Expected output: `execution-or-case-disposition-summary`
- Risk level: High

### Scenario 2

- ID: poad-02
- Name: Incomplete proposal artifacts mid-process
- Input: Core artifacts are missing after intake, including security handling flag, batch-to-order linkage, and approver assignment.
- Expected behavior: Hold the case, list missing tenant and system inputs, and route to exception queue.
- Expected output: `exception-queue-note`
- Risk level: High

### Scenario 3

- ID: poad-03
- Name: Mark complete requested without evidence
- Input: The requestor asks to close completion while hold logs, release evidence, and signoff evidence are absent.
- Expected behavior: Refuse completion and return completion-evidence deficiency details.
- Expected output: `completion-evidence-record`
- Risk level: High

### Scenario 4

- ID: poad-04
- Name: Request requires external authority
- Input: A user requests policy overrides, award authority, or contractual release language.
- Expected behavior: Return scope-safe refusal and route to adjacent authority owners with escalation context.
- Expected output: `boundary-safe-refusal-note`
- Risk level: High

### Scenario 5

- ID: poad-05
- Name: Execution exception requires rework due to maintenance readiness conflict
- Input: A transport/equipment change introduces mission and maintenance constraints that contradict the provisional progression plan.
- Expected behavior: Halt progression, log operational readiness blocker, and route to rework owners.
- Expected output: `exception-queue-note`
- Risk level: High

### Scenario 6

- ID: poad-06
- Name: Industry-specific terminology normalization
- Input: Terms such as mission-capable, depot-turn, launch support, and lot genealogy are used without explicit definitions.
- Expected behavior: Normalize terms into known artifact and evidence gates before any lifecycle transition.
- Expected output: `defense-readiness-status`
- Risk level: Medium

### Scenario 7

- ID: poad-07
- Name: Low-confidence escalation from missing tenant policy
- Input: Tenant readiness matrix, source-priority map, and approval-owner hierarchy are not provided.
- Expected behavior: Emit low-confidence escalation and list required tenant policies before progression.
- Expected output: `low-confidence-escalation-note`
- Risk level: High

### Scenario 8

- ID: poad-08
- Name: Conflicting source and tenant policy
- Input: Public acquisition guidance and tenant instructions diverge on release readiness evidence thresholds.
- Expected behavior: Escalate the conflict and avoid confident completion language.
- Expected output: `source-conflict-escalation`
- Risk level: High

### Scenario 9

- ID: poad-09
- Name: Traceability or inventory evidence conflict
- Input: ERP, MES, and supplier records disagree on batch lot continuity and inventory availability.
- Expected behavior: Summarize conflict, keep lane in hold/external-resolution state, and do not mark as complete.
- Expected output: `traceability-conflict-memo`
- Risk level: High

### Scenario 10

- ID: poad-10
- Name: Supplier substitution request outside lane authority
- Input: Request asks to accept substitute component under active quality hold.
- Expected behavior: Refuse substitution approval and route to supplier-quality and contractual approvers.
- Expected output: `supplier-substitution-escalation`
- Risk level: High

### Scenario 11

- ID: poad-11
- Name: Quality hold or release-boundary case
- Input: Nonconformance and hold records remain unresolved while closure is requested.
- Expected behavior: Preserve hold boundaries, issue escalation, and prevent release recommendation.
- Expected output: `hold-release-boundary-note`
- Risk level: High

### Scenario 12

- ID: poad-12
- Name: Approval-owner ambiguity before closeout
- Input: Multiple approvers are listed and no single release owner is definitive.
- Expected behavior: Return approval-owner resolution note and pause completion.
- Expected output: `approval-owner-resolution-note`
- Risk level: High
