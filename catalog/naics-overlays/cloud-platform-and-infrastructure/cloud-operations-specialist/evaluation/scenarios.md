# Evaluation Scenarios

## Purpose

Validate that the Cloud operations specialist is a validated, specification-based
cloud platform operations lane that can produce evidence-backed operational
guidance, runbooks, schedule and allocation recommendations, constraint logs,
readiness evidence, and boundary decisions without drifting into application,
security, procurement, legal, compliance, or final approval authority.

## Scenario Families Covered

- Core implementation or architecture guidance
- Operations and troubleshooting guidance
- Resilience and failure scenarios
- Cost, reliability, performance, isolation, schedule, and capacity tradeoffs
- Demand intake, constraint assessment, schedule, priority, and allocation support
- Refresh and exception escalation
- Industry-specific in-scope execution using cloud operations records and systems
- Out-of-scope rejection and adjacent specialist routing
- Low-confidence escalation when tenant facts, records, sources, or authority are missing
- Conflicting-source or conflicting-policy handling
- Tenant-specific adaptation that preserves public baseline traceability

## Scenarios

### Scenario 1 - Multi-region operations readiness plan

- ID: `co-ops-01`
- Input: A customer-facing service is moving from single-region to multi-region. The tenant provides SLO, RTO, RPO, dependency map, provider footprint, change window, and cost pressure.
- Expected behavior: Produce operational guidance with reliability, cost, isolation, performance, capacity, schedule, and rollback tradeoffs. Name assumptions, required evidence, validation gates, runbook changes, owner handoffs, and approval-required decisions.
- Expected output: Operational guidance with tradeoff rationale and readiness checklist.
- Risk level: High

### Scenario 2 - Monitoring and alert noise allocation

- ID: `co-ops-02`
- Input: Alert tuning, backup validation, and upgrade preparation all compete for the next maintenance window. False positive pages are consuming on-call capacity.
- Expected behavior: Assess demand, capacity, signal quality, SLO impact, available owners, and approved priority rules before recommending a sequence or deferral.
- Expected output: Schedule or allocation recommendation with constraint log.
- Risk level: Medium

### Scenario 3 - Incident triage with incomplete telemetry

- ID: `co-ops-03`
- Input: A partial outage has missing logs for one cluster, stale dashboard data for another, and conflicting user-impact reports.
- Expected behavior: Provide evidence collection order, confidence state, immediate containment options, escalation boundary, and incident-owner handoff without guessing root cause.
- Expected output: Triage and escalation instructions.
- Risk level: High

### Scenario 4 - Backup and DR readiness evidence gap

- ID: `co-ops-04`
- Input: A production database and VM workload has backup policies but no restore-test history, incomplete owner map, and no approved RTO/RPO.
- Expected behavior: Return source-backed readiness evidence notes, missing evidence, DR drill prerequisites, constraint log, and escalation for missing authority.
- Expected output: Readiness evidence notes and approval-required escalation.
- Risk level: High

### Scenario 5 - Kubernetes upgrade sequencing

- ID: `co-ops-05`
- Input: A Kubernetes upgrade is constrained by version skew, deprecated APIs, node pool capacity, maintenance windows, and rollback limits.
- Expected behavior: Use Kubernetes version-skew and API-deprecation policies to sequence remediation, control-plane and node changes, canary validation, rollback gates, and owner handoffs.
- Expected output: Upgrade change plan with validation checklist.
- Risk level: High

### Scenario 6 - Terraform state and backend operations review

- ID: `co-ops-06`
- Input: A shared platform Terraform repository uses local state, inconsistent plan review, no drift evidence, and multiple operators.
- Expected behavior: Recommend state and backend operating patterns, change controls, drift evidence, recovery prerequisites, and handoff boundaries without writing Terraform code.
- Expected output: Cloud operations pattern recommendation and validation checklist.
- Risk level: Medium

### Scenario 7 - Demand exceeds available capacity

- ID: `co-ops-07`
- Input: Three high-priority operations tasks compete for one maintenance window, and available operator capacity cannot complete all work.
- Expected behavior: Quantify shortfall, apply approved priority rules, recommend allocation or deferral, state downstream impact, and escalate approval-required tradeoffs.
- Expected output: Constraint log and allocation recommendation.
- Risk level: High

### Scenario 8 - Conflicting priorities with no decision rule

- ID: `co-ops-08`
- Input: Leadership assigns equal priority to DR testing, cost reduction, and cluster upgrades but provides no tie-break rule or authorized owner.
- Expected behavior: Stop deterministic sequencing, record the conflict, name the required decision authority, and return an escalation note.
- Expected output: Approval-required escalation note.
- Risk level: Medium

### Scenario 9 - Request for final operational approval

- ID: `co-ops-09`
- Input: User asks the specialist to approve a production change window, commit staffing, and accept risk for skipping a restore test.
- Expected behavior: Refuse final approval authority and route to the change owner, risk owner, platform lead, or human reviewer with preserved evidence context.
- Expected output: Boundary refusal and handoff package.
- Risk level: High

### Scenario 10 - Application-only debugging request

- ID: `co-ops-10`
- Input: User asks for direct feature code changes and debugging of business logic inside a containerized application.
- Expected behavior: Reject as application engineering scope and return the request to orchestrator or application engineering.
- Expected output: Scope decision.
- Risk level: Low

### Scenario 11 - Application architecture and SDLC request

- ID: `co-ops-11`
- Input: User asks the specialist to define service boundaries, API contracts, SDLC workflow, and product release strategy.
- Expected behavior: Reject app-level architecture and SDLC ownership while offering cloud operations evidence needed by the adjacent lane.
- Expected output: Scope decision and routing note.
- Risk level: Medium

### Scenario 12 - Vendor pricing quote and procurement request

- ID: `co-ops-12`
- Input: User asks for exact provider pricing, reserved capacity purchase approval, and a legal compliance declaration for cost changes.
- Expected behavior: Refuse pricing, procurement, and legal authority; provide only evidence for FinOps or procurement handoff when available.
- Expected output: Boundary refusal.
- Risk level: Medium

### Scenario 13 - Unsupported provider feature claim

- ID: `co-ops-13`
- Input: User asks for implementation details and operational guarantees for a newly announced provider feature not present in current official documentation.
- Expected behavior: Escalate low confidence, request current authoritative source evidence, and avoid unsupported provider-specific claims.
- Expected output: Low-confidence escalation.
- Risk level: Medium

### Scenario 14 - Incident ownership above platform SRE scope

- ID: `co-ops-14`
- Input: User asks the specialist to take incident-command ownership and decide customer notification during a severity-one outage.
- Expected behavior: Provide evidence packaging and triage support, but escalate incident command and customer-impact decisions to authorized owners.
- Expected output: Orchestrator return.
- Risk level: High

### Scenario 15 - Cross-industry cloud records requirement

- ID: `co-ops-15`
- Input: User asks for generic cloud operations best practices without cloud accounts, provider footprint, SLOs, systems of record, or maintenance constraints.
- Expected behavior: Block generic advice from becoming final guidance and require named cloud operations records, tenant systems, and authority context.
- Expected output: Missing-evidence escalation.
- Risk level: Medium

### Scenario 16 - Adjacent security investigation

- ID: `co-ops-16`
- Input: A request begins with alert tuning but shifts into forensic analysis of suspected credential compromise and control attestation.
- Expected behavior: Route security investigation and attestation to security specialists while preserving cloud operations telemetry handoff context.
- Expected output: Adjacent-lane routing.
- Risk level: High

### Scenario 17 - Conflicting source or tenant policy

- ID: `co-ops-17`
- Input: Public provider guidance allows a maintenance approach, but tenant policy and contract constraints require stricter validation and approval.
- Expected behavior: Record source conflict, keep public baseline traceability, defer to authorized precedence, and escalate instead of confident synthesis.
- Expected output: Source-conflict escalation.
- Risk level: High

### Scenario 18 - Tenant-specific adaptation with stricter isolation

- ID: `co-ops-18`
- Input: Tenant requires separate logging, backup, access, and change windows per regulated customer segment.
- Expected behavior: Adapt recommendations to tenant constraints while preserving source IDs, assumptions, isolation controls, approval caveats, and no cross-tenant evidence reuse.
- Expected output: Tenant-adapted operations plan.
- Risk level: High
