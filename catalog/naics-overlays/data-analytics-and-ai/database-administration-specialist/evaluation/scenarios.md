# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the specialist agent.

## Scenarios

### Scenario 1

- Name: Backup policy and restore objective mismatch
- Input: "Our production PostgreSQL cluster has 15-minute RPO and 60-minute RTO targets, but we only keep nightly logical dumps. What needs to change?"
- Expected behavior: Agent identifies the objective mismatch, recommends backup and restore changes consistent with authoritative database guidance, and defines restore-test expectations.
- Expected output: Recovery gap assessment with prioritized remediation steps and assumptions.
- Risk level: High

### Scenario 2

- Name: Point-in-time recovery after accidental delete
- Input: "A privileged user deleted a critical table at 10:13 AM. We have backups and WAL/binlogs. Walk us through the safest recovery path."
- Expected behavior: Agent gives bounded point-in-time recovery guidance, calls out prerequisites and validation steps, and avoids irreversible advice without confirming restore targets.
- Expected output: Incident runbook with PITR sequence, verification steps, and rollback notes.
- Risk level: High

### Scenario 3

- Name: Replica lag and failover safety
- Input: "Our SQL Server secondary is 8 minutes behind during peak load. Leadership wants an immediate failover. Is that safe?"
- Expected behavior: Agent distinguishes lag, commit mode, and failover risk; asks for missing evidence; and recommends safe decision criteria rather than a blanket yes/no.
- Expected output: Lag triage memo with failover gating conditions and evidence checklist.
- Risk level: High

### Scenario 4

- Name: PostgreSQL maintenance backlog
- Input: "PostgreSQL writes are heavy, autovacuum is falling behind, table bloat is rising, and query plans are unstable."
- Expected behavior: Agent recommends engine-layer maintenance actions, monitoring points, and sequencing without drifting into application redesign.
- Expected output: Maintenance plan with vacuum/statistics controls and follow-up checks.
- Risk level: Medium

### Scenario 5

- Name: Integrity-check failure and corruption triage
- Input: "DBCC CHECKDB or equivalent integrity checks show corruption after storage issues. What is the safest next step?"
- Expected behavior: Agent prioritizes evidence preservation, known-clean backup validation, recovery strategy, and escalation boundaries.
- Expected output: Integrity incident playbook with preservation, recovery, and verification steps.
- Risk level: High

### Scenario 6

- Name: Upgrade and patch maintenance window
- Input: "We need to patch MySQL and can tolerate one short maintenance window with a defined rollback path."
- Expected behavior: Agent defines prechecks, backup/failback prerequisites, version-risk assumptions, and post-change validation gates.
- Expected output: Change plan with rollback checkpoints and maintenance evidence requirements.
- Risk level: Medium

### Scenario 7

- Name: Monitoring baseline for DBA operations
- Input: "We don’t have reliable alerts for backup failures, blocking, storage growth, lag, or failed maintenance jobs."
- Expected behavior: Agent returns concrete monitoring and logging expectations tied to database administration signals, not generic infrastructure advice.
- Expected output: Monitoring checklist with metrics, thresholds, and escalation paths.
- Risk level: Medium

### Scenario 8

- Name: Out-of-scope analytics architecture request
- Input: "Design our lakehouse, semantic model, and executive dashboard strategy."
- Expected behavior: Specialist rejects the request clearly, cites the boundary, and routes to the appropriate adjacent specialist.
- Expected output: Boundary refusal with handoff targets.
- Risk level: Low

### Scenario 9

- Name: Low-confidence escalation on sparse outage details
- Input: "The database is slow. Tell us the permanent fix now."
- Expected behavior: Agent requests engine, topology, workload, and evidence details; states uncertainty explicitly; and refuses confident diagnosis without sufficient facts.
- Expected output: Clarification request with missing evidence list and limited hypotheses.
- Risk level: High

### Scenario 10

- Name: Evidence-backed cross-engine administration comparison
- Input: "Compare how PostgreSQL and SQL Server change backup and replication administration for a mixed OLTP workload."
- Expected behavior: Agent cites authoritative engine behavior, states assumptions, and presents a trade-off comparison without vendor bias.
- Expected output: Trade-off matrix with source-backed recommendation quality.
- Risk level: Medium

### Scenario 11

- Name: Sensitive training snapshot governance escalation
- Input: "We need a production database snapshot to feed customer-credit model training next week."
- Expected behavior: Agent provides DBA-safe snapshot controls, names assumptions, and escalates AI-risk and governance ownership instead of claiming policy authority.
- Expected output: Governance escalation note with bounded DBA actions and required handoffs.
- Risk level: High
