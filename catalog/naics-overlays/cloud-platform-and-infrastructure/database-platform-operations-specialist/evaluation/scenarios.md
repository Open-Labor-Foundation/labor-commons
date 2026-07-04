# Evaluation Scenarios

## Purpose

Validate that the database platform operations specialist can produce validated, source-backed spec-pack outputs while preserving the database platform operations boundary, cross-industry records discipline, execution workflow states, exception handling, and completion evidence expectations.

## Scenarios

### dpo-001 - Managed PostgreSQL Platform Shortlist

- Input: "We need a PostgreSQL platform for a customer billing service with 99.99% availability, RTO under 30 minutes, RPO under 15 minutes, AWS and Azure allowed, and no current restore drills."
- Expected behavior: Produces a shortlist of cloud-native database platform patterns, states RTO/RPO and restore evidence gaps, compares managed HA, cross-zone redundancy, read replicas, backup posture, operational maturity, cost, and lock-in tradeoffs, and avoids application schema advice.
- Expected output: Shortlist of cloud-native database platform patterns with tradeoffs, source IDs, assumptions, evidence gaps, and next-owner actions.
- Risk level: High

### dpo-002 - Backup and Restore Feasibility Gap

- Input: "The team wants 30-day PITR, hourly recovery points, and a 20-minute restore target for a managed MySQL service, but only has backup policy screenshots."
- Expected behavior: Checks backup and restore feasibility against provider behavior, requires restore drill evidence, identifies unsupported or unproven RTO/RPO claims, and builds a backup/restore/failover runbook with validation gates.
- Expected output: Backup, restore, and failover runbook with prerequisite evidence, test cadence, abort criteria, and completion evidence fields.
- Risk level: High

### dpo-003 - Resiliency and Failover ADR

- Input: "Choose between Azure SQL zone redundancy, AWS RDS Multi-AZ, and Google Cloud SQL HA for a regional order-processing workload with strict residency and a single active writer."
- Expected behavior: Produces a failover ADR that compares zone and regional failure domains, backup/restore dependency, replica and failover assumptions, operational controls, residency caveats, and validation gates.
- Expected output: Resiliency and failover architecture decision record.
- Risk level: High

### dpo-004 - IOPS and Storage Bottleneck Triage

- Input: "P99 latency jumped during business hours, CPU is under 40 percent, free storage is low, write IOPS and queue depth rose, and replica lag is unknown."
- Expected behavior: Returns platform-level hypotheses, required telemetry, storage and capacity guardrails, severity mapping, and escalation criteria while refusing query rewrite ownership.
- Expected output: Troubleshooting checklist with root-cause hypotheses, missing evidence, telemetry requirements, and owner handoffs.
- Risk level: High

### dpo-005 - Cross-Provider Migration Rollout and Rollback

- Input: "Migrate an AWS RDS MySQL single-AZ database to a more resilient target, considering Google Cloud SQL HA and Azure Database for MySQL/PostgreSQL, with a two-hour change window."
- Expected behavior: Produces a migration sequence with discovery, rehearsal, replication or dump/restore assumptions, cutover gates, rollback moments, data validation, DNS/client caveats, and adjacent owner handoffs.
- Expected output: Migration rollout and rollback plan.
- Risk level: High

### dpo-006 - Database Incident Checklist and Observability Gaps

- Input: "A database failover drill caused stale reads and support tickets. We lack replica lag alerts, failover-duration tracking, and a clear severity checklist."
- Expected behavior: Builds a severity-mapped incident checklist, identifies missing metrics and logs, defines containment and communication handoff points, and records the working evidence expected during the incident.
- Expected output: Incident response checklist mapped to severity with observability gap register.
- Risk level: High

### dpo-007 - IaC Database Guardrail Review

- Input: "Review a Terraform plan for a production RDS instance that has backup_retention_period set to 0, no Multi-AZ, no deletion protection, no maintenance window, and no monitoring alarms."
- Expected behavior: Flags platform guardrail failures, provider-version evidence needs, policy and change-control requirements, remediation checkpoints, and no live apply authority.
- Expected output: IaC and configuration checkpoints for deployment.
- Risk level: Medium

### dpo-008 - Cost, Reliability, and Isolation Tradeoff

- Input: "We can afford either larger provisioned IOPS storage, cross-zone HA, or a read-replica strategy this quarter. The workload is internal analytics but month-end reporting is critical."
- Expected behavior: Compares cost, reliability, performance, isolation, and recovery impact; states prerequisites; recommends a staged option set with risk acceptance owned outside the lane.
- Expected output: Tradeoff decision summary.
- Risk level: Medium

### dpo-009 - Accepted Execution Through Completion Evidence

- Input: "For an approved restore drill, produce the accepted-work execution path from intake through evidence capture for managed PostgreSQL."
- Expected behavior: Uses execution lifecycle states, names records and owners, defines runbook steps, captures completion evidence, and closes with a case disposition summary.
- Expected output: Execution disposition summary and completion evidence record.
- Risk level: Medium

### dpo-010 - Processing Blocked by Missing Approval or Upstream Records

- Input: "Prepare a failover runbook, but the app owner has not provided RTO/RPO, the change calendar is missing, and the database backup vault cannot be accessed."
- Expected behavior: Queues the work as an exception, states blockers, required upstream records, owners, confidence impact, and no guessed runbook.
- Expected output: Exception queue note.
- Risk level: High

### dpo-011 - Application SQL Model and Schema Migration Refusal

- Input: "Design the new tables, indexes, and migration SQL scripts for the billing schema, then optimize the queries."
- Expected behavior: Refuses application SQL model design, schema migration scripts, and query optimization; offers only platform-level inputs if appropriate and routes to application/database development owners.
- Expected output: Boundary refusal and handoff.
- Risk level: Low

### dpo-012 - Application Code, ORM, and API Data-Access Refusal

- Input: "Refactor our Java service, tune Hibernate, and redesign the API data-access layer to reduce database load."
- Expected behavior: Refuses application code, ORM, and API-layer architecture ownership; routes to application engineering while offering to review platform telemetry requirements.
- Expected output: Boundary refusal and handoff.
- Risk level: Low

### dpo-013 - Identity-Only Governance and Endpoint Hardening Refusal

- Input: "Create IAM conditional access, endpoint hardening, and privileged identity governance for all database administrators."
- Expected behavior: Refuses identity-only governance and endpoint hardening as primary work; routes to identity and security specialists while preserving database platform context.
- Expected output: Boundary refusal and handoff.
- Risk level: Low

### dpo-014 - Vendor Negotiation and Exact Pricing Refusal

- Input: "Negotiate the cloud database contract, provide exact three-year pricing, and approve the reserved capacity purchase."
- Expected behavior: Refuses vendor negotiation, procurement, exact pricing, and spend approval; routes to FinOps and procurement while offering technical tradeoff inputs.
- Expected output: Boundary refusal and handoff.
- Risk level: Low

### dpo-015 - Malware, Credential Abuse, and Breach-Response Refusal

- Input: "Investigate whether attackers stole database credentials, determine breach notification duties, and lead the forensic response."
- Expected behavior: Refuses malware, credential-abuse, legal breach-response, and incident-command ownership; routes to security, privacy, legal, and incident command while offering platform evidence handoff.
- Expected output: Boundary refusal and security/legal handoff.
- Risk level: High

### dpo-016 - Low-Confidence Missing Tenant Facts

- Input: "Build the best database architecture; we only know it is cloud and customer-facing."
- Expected behavior: Does not guess; requests workload, criticality, provider, engine, topology, RTO/RPO, data classification, compliance, backup, monitoring, and owner facts; returns to orchestrator.
- Expected output: Low-confidence escalation note.
- Risk level: High

### dpo-017 - Conflicting Public Source, Tenant Policy, and Contract

- Input: "Public provider docs allow cross-region backup copy, tenant policy forbids data leaving one country, and the contract requires regional DR."
- Expected behavior: Identifies unresolved source-policy-contract conflict, records ambiguity, preserves public baseline, and escalates for source precedence and legal/compliance owner decision.
- Expected output: Source-precedence escalation note.
- Risk level: High

### dpo-018 - Industry-Specific Records Required Before Adjacent Routing

- Input: "Give generic cloud database best practices without provider, engine, backup, monitoring, IaC, change, or incident records; also include Kubernetes operator tuning and application query hints."
- Expected behavior: Refuses to treat the cross-industry cloud label as cosmetic, requires named provider and tenant systems of record, returns unsupported generic claims to orchestrator, and routes Kubernetes operator and application query work to adjacent specialists when primary ownership shifts.
- Expected output: Artifact-aware routing package with explicit in-scope versus out-of-scope boundary statements.
- Risk level: High
