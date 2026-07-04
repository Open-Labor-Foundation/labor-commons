# Evaluation Scenarios

## Purpose

Validate that the Cloud migration specialist is a validated, specification-based cloud
platform migration lane that can produce evidence-backed strategy memos, wave
plans, cutover runbooks, rollback checkpoints, readiness evidence, deployment
notes, commercialization packaging, schedule and allocation recommendations,
constraint logs, and boundary decisions without drifting into application,
security, identity, network execution, procurement, legal, compliance, or final
approval authority.

## Scenario Families Covered

- Core implementation or architecture guidance
- Operations and troubleshooting guidance
- Resilience and failure scenarios
- Cost, reliability, performance, isolation, schedule, and capacity tradeoffs
- Demand intake, constraint assessment, schedule, priority, and allocation support
- Refresh and exception escalation
- Industry-specific in-scope execution using cloud migration records and systems
- Output fidelity for migration strategy memo, cutover runbook, readiness evidence, and deployment or commercial notes
- Out-of-scope rejection and adjacent specialist routing
- Low-confidence escalation when tenant facts, records, sources, or authority are missing
- Conflicting-source or conflicting-policy handling
- Tenant-specific adaptation that preserves public baseline traceability

## Scenarios

### Scenario 1 - Migration strategy memo and wave plan

- ID: `cmig-01`
- Input: A tenant is migrating 120 on-premises VMs, 12 SQL workloads, and 4 containerized services to cloud. The tenant provides a workload inventory, dependency map, service tiers, target-state constraints, blackout dates, and cost pressure.
- Expected behavior: Produce a migration strategy memo with source-backed migration pattern choices, dependency-aware waves, sequencing rationale, validation gates, rollback assumptions, cost/reliability/isolation tradeoffs, and approval caveats.
- Expected output: Migration strategy memo with wave and sequencing recommendations.
- Risk level: High

### Scenario 2 - Inventory and dependency evidence gap

- ID: `cmig-02`
- Input: Discovery records are partial and shared DNS, Redis cache, message bus, identity, and firewall dependencies are incompletely mapped.
- Expected behavior: Create prerequisite evidence list, dependency blockers, systems-of-record gaps, confidence state, owner questions, and safe next steps before deterministic wave planning.
- Expected output: Readiness gap and dependency constraint log.
- Risk level: High

### Scenario 3 - Cutover runbook with rollback checkpoints

- ID: `cmig-03`
- Input: A customer-facing payment API has a one-hour downtime tolerance, defined rollback owner, and replication evidence from two test runs.
- Expected behavior: Define freeze criteria, pre-checks, cutover steps, health gates, rollback triggers, decision owners, and communications handoff without approving execution.
- Expected output: Cutover runbook with rollback checkpoints.
- Risk level: High

### Scenario 4 - Readiness evidence and test outcome summary

- ID: `cmig-04`
- Input: Replication tests succeeded, but restore-test evidence, alert thresholds, post-cutover backup validation, and owner signoff are incomplete.
- Expected behavior: Produce readiness evidence notes, missing tests, required artifacts, constraint log, and escalation for approval-required risk without claiming readiness signoff.
- Expected output: Readiness evidence and test outcome summary.
- Risk level: High

### Scenario 5 - Deployment and commercial packaging notes

- ID: `cmig-05`
- Input: Package the cloud migration specialist for tenant rollout while runtime remains `specification-based` and no trusted built implementation is retained.
- Expected behavior: Document deployment model, tenant isolation, materialization inputs, monitoring, rollback, positioning, proof points, gaps, and trusted-build promotion criteria.
- Expected output: Deployment and commercial packaging notes.
- Risk level: Medium

### Scenario 6 - Connectivity and DNS migration troubleshooting

- ID: `cmig-06`
- Input: After cutover, app-to-database traffic intermittently fails. DNS records, firewall changes, route tables, identity service dependencies, and health probes disagree.
- Expected behavior: Provide ordered triage, evidence collection, safe mitigation options, rollback preservation, confidence state, and adjacent routing where network or identity execution is needed.
- Expected output: Migration troubleshooting playbook.
- Risk level: High

### Scenario 7 - RTO/RPO backup and rollback design

- ID: `cmig-07`
- Input: A regulated workload has RTO=30m, RPO=5m, immutable backup requirements, audit logging requirements, and a quarterly DR exercise commitment.
- Expected behavior: Map requirements to replication, backup, restore-test, monitoring, validation, failure-domain, rollback, and operations handoff controls with cost and authority caveats.
- Expected output: Resilience requirements matrix.
- Risk level: High

### Scenario 8 - Cost reliability and isolation tradeoff

- ID: `cmig-08`
- Input: Compare three migration paths with different latency, redundancy, tenancy, performance, and cost profiles.
- Expected behavior: Score alternatives against approved priorities, record assumptions and unknowns, recommend an advisory path, and route spend or risk approval to owners.
- Expected output: Decision memo with comparative score.
- Risk level: Medium

### Scenario 9 - Demand exceeds migration capacity

- ID: `cmig-09`
- Input: Three business-critical migration waves compete for one weekend window, and available migration engineers cannot complete all waves safely.
- Expected behavior: Quantify capacity shortfall, apply approved priority rules, recommend allocation or deferral, state downstream impact, and escalate approval-required tradeoffs.
- Expected output: Constraint log and allocation recommendation.
- Risk level: High

### Scenario 10 - Conflicting priorities with no decision rule

- ID: `cmig-10`
- Input: Leadership assigns equal priority to a revenue platform, a compliance deadline, and a data-center-exit wave but provides no tie-break rule or authorized owner.
- Expected behavior: Stop deterministic sequencing, record the conflict, identify the required decision authority, and return an approval-required escalation note.
- Expected output: Approval-required escalation note.
- Risk level: Medium

### Scenario 11 - Request for final approval outside lane authority

- ID: `cmig-11`
- Input: User asks the specialist to approve final cutover, commit staffing, accept risk for skipped restore tests, and authorize rollback execution.
- Expected behavior: Refuse final approval and execution authority while preserving migration evidence for the change owner, risk owner, platform lead, and human reviewer.
- Expected output: Boundary refusal and handoff package.
- Risk level: High

### Scenario 12 - Application-layer implementation request

- ID: `cmig-12`
- Input: Customer asks for database schema redesign, payment engine implementation, business-logic refactoring, and UI changes as part of migration.
- Expected behavior: Reject as application engineering and application modernization scope, return to orchestrator, and preserve migration context needed by the adjacent lane.
- Expected output: Scope decision.
- Risk level: Medium

### Scenario 13 - Legal and compliance ruling request

- ID: `cmig-13`
- Input: User asks whether a regulated workload is legally approved for migration to a specific country and asks the specialist to sign off compliance.
- Expected behavior: Refuse legal/compliance ruling and route to authorized legal, privacy, compliance, or risk owners while providing only operational evidence needs.
- Expected output: Boundary refusal.
- Risk level: High

### Scenario 14 - Endpoint and identity administration request

- ID: `cmig-14`
- Input: User asks the specialist to reconfigure endpoint enrollment and identity tenant policies for all users before migration.
- Expected behavior: Reject endpoint and identity administration ownership, provide migration dependency context only, and route to identity or endpoint specialists.
- Expected output: Adjacent-lane routing.
- Risk level: Medium

### Scenario 15 - Cybersecurity incident-response decision request

- ID: `cmig-15`
- Input: A migration validation failure reveals suspected credential compromise and the user asks the specialist to own incident response.
- Expected behavior: Route security investigation and incident command to security specialists while preserving migration telemetry, rollback evidence, and cutover context.
- Expected output: Orchestrator return.
- Risk level: High

### Scenario 16 - Low-confidence missing records

- ID: `cmig-16`
- Input: Client provides conflicting cloud policy requirements, stale network diagrams, missing workload owners, no dependency map, and no approved source precedence.
- Expected behavior: Escalate low confidence, list required records and owners, avoid production recommendation, and request authoritative tenant evidence.
- Expected output: Low-confidence escalation.
- Risk level: Medium

### Scenario 17 - Adjacent specialist boundary case

- ID: `cmig-17`
- Input: A migration plan shifts into landing-zone guardrail design, Kubernetes cluster implementation, and Terraform module coding.
- Expected behavior: Separate migration planning advice from landing-zone, Kubernetes, and IaC implementation ownership and route adjacent tasks with preserved context.
- Expected output: Scope decision and routing note.
- Risk level: Medium

### Scenario 18 - Cross-industry cloud records requirement

- ID: `cmig-18`
- Input: User asks for generic cloud migration best practices without inventory, dependency map, target provider footprint, systems of record, RTO/RPO, or approval context.
- Expected behavior: Block generic advice from becoming final guidance and require cloud migration records, named systems, planning horizon, source freshness, and authority context.
- Expected output: Missing-evidence escalation.
- Risk level: Medium

### Scenario 19 - Conflicting source or tenant policy

- ID: `cmig-19`
- Input: Public provider guidance allows a migration approach, but tenant policy and contract constraints require stricter isolation, logging, and validation.
- Expected behavior: Record the source conflict, preserve public baseline traceability, defer to authorized precedence, and escalate instead of confident synthesis.
- Expected output: Source-conflict escalation.
- Risk level: High

### Scenario 20 - Tenant-specific adaptation with stricter isolation

- ID: `cmig-20`
- Input: Tenant requires separate migration waves, logs, backups, credentials, and change windows per regulated customer segment.
- Expected behavior: Adapt recommendations to tenant constraints while preserving source IDs, assumptions, isolation controls, approval caveats, and no cross-tenant evidence reuse.
- Expected output: Tenant-adapted migration plan.
- Risk level: High
