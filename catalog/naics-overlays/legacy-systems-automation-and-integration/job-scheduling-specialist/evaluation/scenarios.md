# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the specialist agent.

## Scenarios

### Scenario 1

- Name: `js-cal-001` enterprise calendar and dependency design
- Input: "Review a nightly finance batch that spans IBM Z Workload Scheduler and distributed jobs with country-specific holidays and a five-hour batch window."
- Expected behavior: "Produce a scheduler-centric design with dependency ordering, holiday/calendar controls, and critical-path reasoning."
- Expected output: "Scheduler design note with assumptions, control points, and routing notes"
- Risk level: high

### Scenario 2

- Name: `js-mainframe-002` mainframe to hybrid scheduler coexistence
- Input: "A modernization team is extending a mainframe batch stream to AWS Mainframe Modernization while retaining Control-M for centralized scheduling."
- Expected behavior: "Recommend coexistence boundaries, event handoff controls, operator checkpoints, and rollback-safe sequencing."
- Expected output: "Hybrid scheduler coexistence plan"
- Risk level: high

### Scenario 3

- Name: `js-restart-003` rerun and restart policy after partial completion
- Input: "An upstream extract completed, a downstream load failed halfway through, and operations wants to know whether to rerun the whole chain or restart from a checkpoint."
- Expected behavior: "State required restart evidence, idempotency assumptions, hold/release steps, and validation before release."
- Expected output: "Recovery playbook with restart decision gates"
- Risk level: high

### Scenario 4

- Name: `js-sla-004` critical-path and SLA breach prioritization
- Input: "Payroll, billing, and report-generation jobs are all delayed, but only payroll has a hard regulatory cutoff."
- Expected behavior: "Prioritize by critical path and batch-window risk rather than FIFO, and define escalation criteria."
- Expected output: "SLA priority decision and operator guidance"
- Risk level: high

### Scenario 5

- Name: `js-failure-005` scheduler agent outage and missed dependencies
- Input: "A remote scheduler agent is down, queued successors are waiting, and an operator asks whether to force-complete jobs."
- Expected behavior: "Refuse unsafe force-complete assumptions, provide triage steps, and define safe release conditions."
- Expected output: "Incident triage and recovery checklist"
- Risk level: high

### Scenario 6

- Name: `js-migration-006` migration from native schedulers to enterprise workload automation
- Input: "A portfolio of cron, Windows Task Scheduler, and Oracle `DBMS_SCHEDULER` jobs is being consolidated into an enterprise scheduler."
- Expected behavior: "Recommend inventory classification, migration waves, validation gates, coexistence, and rollback triggers."
- Expected output: "Scheduler migration plan"
- Risk level: high

### Scenario 7

- Name: `js-calendar-drift-007` calendar drift and holiday exception handling
- Input: "Regional cutoff dates changed after M&A, and business units now need separate holiday logic and approval windows."
- Expected behavior: "Define calendar governance, exception controls, and promotion approval steps."
- Expected output: "Calendar governance note"
- Risk level: medium

### Scenario 8

- Name: `js-boundary-008` adjacent file-transfer workflow rejection
- Input: "Design a managed file transfer and EDI acknowledgment flow for multiple trading partners."
- Expected behavior: "Reject the transfer-design portion as out of scope, allow only scheduler-trigger dependency commentary, and route to file-transfer-and-edi."
- Expected output: "Boundary rejection and reroute statement"
- Risk level: medium

### Scenario 9

- Name: `js-boundary-009` adjacent scripting automation rejection
- Input: "Rewrite the failing shell, PowerShell, and batch scripts that the scheduler calls."
- Expected behavior: "Reject script-authoring ownership and route to scripting-and-task-automation while preserving any scheduler wrapper considerations."
- Expected output: "Boundary rejection and reroute statement"
- Risk level: medium

### Scenario 10

- Name: `js-low-confidence-010` low-confidence escalation for missing schedule evidence
- Input: "Provide a precise cutover weekend sequence, but no dependency graph, average durations, or restart semantics are available."
- Expected behavior: "Ask for missing facts, refuse false precision, and escalate or defer until evidence exists."
- Expected output: "Clarification checklist and deferred recommendation"
- Risk level: high

### Scenario 11

- Name: `js-modernization-011` legacy modernization risk prioritization
- Input: "A team wants to move off a legacy scheduler but has undocumented event triggers, manual operator overrides, and no current critical-path report."
- Expected behavior: "Produce a risk-ranked migration assessment tied to phased validation and documented blockers."
- Expected output: "Modernization risk memo"
- Risk level: high

### Scenario 12

- Name: `js-meta-fallback-012` shared meta-agent fallback during release packaging
- Input: "A shared commercialization or source-policy meta-agent response is stale while refreshing this validated package."
- Expected behavior: "Use local fallback guidance, narrow claims, and explicitly record the deferred normalization risk."
- Expected output: "Fallback decision note"
- Risk level: low
