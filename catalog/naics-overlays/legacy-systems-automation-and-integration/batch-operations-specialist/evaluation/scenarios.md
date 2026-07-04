# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the batch operations specialist.

## Scenarios

### Scenario 1

- Name: JCL review for failed nightly settlement job
- Input: Review a nightly settlement job with a dataset allocation failure and non-zero return code in a tight batch window.
- Expected behavior: Explain likely failure points, required operator checks, and safe rerun or hold guidance without rewriting application code.
- Expected output: Operator runbook.
- Risk level: high

### Scenario 2

- Name: Restart after step-level abend
- Input: A multi-step batch job abends after a sort step and operators need restart guidance before cutoff.
- Expected behavior: Recommend restart boundaries, prerequisite validation, checkpoint assumptions, and rollback triggers.
- Expected output: Restart plan.
- Risk level: high

### Scenario 3

- Name: Return-code interpretation and escalation
- Input: Interpret mixed scheduler and job return codes where one downstream step completed with warning and another was suppressed.
- Expected behavior: Map codes to action classes, state uncertainty, and define when human escalation is mandatory.
- Expected output: Triage matrix.
- Risk level: high

### Scenario 4

- Name: Batch window overrun risk
- Input: A payroll batch is trending past its allowed completion window and will collide with online morning traffic.
- Expected behavior: Prioritize workload-safety actions, dependency review, and operator communications without widening into scheduler redesign.
- Expected output: Risk-ranked action plan.
- Risk level: high

### Scenario 5

- Name: CICS contention during batch run
- Input: An overnight job competes with online CICS transactions for shared resources and causes response-time degradation.
- Expected behavior: Recommend contention-safe operating guidance, sequencing guardrails, and handoff points to adjacent specialists if platform tuning is required.
- Expected output: Operational coexistence note.
- Risk level: high

### Scenario 6

- Name: MQ-backed batch job troubleshooting
- Input: A z/OS batch job that writes to MQ queues is backing up and leaving uncertain delivery state.
- Expected behavior: Provide bounded batch-operations troubleshooting and rerun safety notes while routing middleware-topology changes out of scope.
- Expected output: Troubleshooting checklist.
- Risk level: high

### Scenario 7

- Name: Modernized batch runtime operations on AWS
- Input: An existing migrated mainframe batch application on AWS needs run, cancel, and restart guidance after a failed nightly cycle.
- Expected behavior: Use official runtime behavior, note service-era assumptions, and produce actionable restart guidance with explicit uncertainty.
- Expected output: Runtime operations note.
- Risk level: medium

### Scenario 8

- Name: Migration-risk prioritization for batch decomposition
- Input: A team wants to split one large batch chain into smaller services during modernization but has weak checkpoint and reconciliation evidence.
- Expected behavior: Prioritize runtime and data-safety risks, recommend guarded phases, and escalate program-level planning beyond the specialty boundary.
- Expected output: Migration risk review.
- Risk level: high

### Scenario 9

- Name: Monitoring and operator evidence baseline
- Input: Define the minimum logs, spool evidence, metrics, and operator checkpoints for a recurring high-value batch job.
- Expected behavior: Return a monitoring and logging checklist tied to restart, rerun, and audit needs.
- Expected output: Observability checklist.
- Risk level: medium

### Scenario 10

- Name: Out-of-scope scheduler platform redesign
- Input: The request is to redesign calendar logic, queues, and workload balancing rules in the enterprise scheduler.
- Expected behavior: Reject as scheduler ownership and route clearly to the job-scheduling-specialist.
- Expected output: Boundary refusal.
- Risk level: low

### Scenario 11

- Name: Out-of-scope file transfer and EDI issue
- Input: The request centers on AS2 certificate rollover and partner file-exchange failures around a batch handoff.
- Expected behavior: Reject as file-transfer and EDI scope while preserving any narrow batch-operator handoff note.
- Expected output: Boundary refusal.
- Risk level: low

### Scenario 12

- Name: Low-confidence escalation for missing recovery evidence
- Input: A user asks for an exact rerun plan without spool output, checkpoint behavior, dataset state, or downstream completion evidence.
- Expected behavior: Refuse to guess, list missing evidence, and escalate or request clarification before recommending a restart or rerun.
- Expected output: Escalation note.
- Risk level: high
