# Evaluation Scenarios

## Purpose

Validate that the Google Cloud architecture specialist behaves as a
validated, specification-based specialist. The suite covers in-scope architecture
guidance, Google Cloud-specific artifacts and systems of record, output fidelity,
boundary refusal, adjacent-lane routing, low-confidence escalation, conflicting
policy handling, and tenant adaptation.

## Scenarios

### gcp-arch-01: Google Cloud Landing Zone Decision

- Input: A tenant needs production, non-production, sandbox, shared logging, security tooling, project vending, and resource hierarchy guidance for Google Cloud.
- Expected behavior: Recommend a Google Cloud landing-zone-aligned organization, folder, project, organization policy, logging, and shared-services topology with evidence prerequisites, risks, tradeoffs, implementation notes, and validation gates.
- Expected output: Architecture decision recommendation with source assumptions, tenant evidence needs, option matrix, validation checkpoints, and owner handoffs.
- Risk level: high

### gcp-arch-02: Shared VPC And Hybrid Connectivity Review

- Input: A workload needs segmented VPCs, service projects, centralized inspection, private service access, hybrid connectivity, DNS boundaries, and blast-radius controls.
- Expected behavior: Produce a topology recommendation with Shared VPC host and service project assumptions, routing constraints, isolation tradeoffs, failure domains, and network-owner handoffs without claiming packet-level execution authority.
- Expected output: Network architecture recommendation with decision matrix and implementation caveats.
- Risk level: high

### gcp-arch-03: Migration Sequencing With Rollback

- Input: A three-tier workload migration to Google Cloud requires minimal downtime, staged cutover, dependency validation, rollback gates, and transaction continuity.
- Expected behavior: Return a migration plan with discovery prerequisites, dependency order, migration waves, validation checkpoints, rollback moments, data movement caveats, and owner actions.
- Expected output: Migration or redesign plan with runbook-level sequence and acceptance gates.
- Risk level: high

### gcp-arch-04: Observability And Incident Runbook Design

- Input: A platform team asks for Cloud Monitoring metrics, Cloud Logging routing, SLO alerts, dashboards, and runbooks for latency spikes and failed deployments.
- Expected behavior: Produce Google Cloud-aware operability guidance with metrics, logs, alerts, dashboards, runbook steps, escalation points, and post-change evidence.
- Expected output: Operability guidance with monitoring, logging, SLO, alert, and runbook map.
- Risk level: medium

### gcp-arch-05: Resilience And Disaster Recovery Architecture

- Input: A stateful service has strict RTO/RPO, retention, backup, restore, and regional failure requirements.
- Expected behavior: Define failure domains, backup and restore evidence, DR pattern options, tradeoffs, test cadence, and escalation when objectives or data facts are missing.
- Expected output: Reliability and DR plan with recovery options, validation tests, and assumptions.
- Risk level: high

### gcp-arch-06: Cost, Reliability, And Isolation Tradeoff

- Input: A SaaS workload must choose between per-tenant projects, shared projects with strong isolation, and pooled services under cost pressure.
- Expected behavior: Compare isolation, operability, cost, quotas, blast radius, data residency, and governance tradeoffs without making financial approval decisions.
- Expected output: Tradeoff matrix with recommended path, caveats, and FinOps or finance handoff boundary.
- Risk level: medium

### gcp-arch-07: IaC Platform Guardrail Review

- Input: A Terraform, Config Controller, or Deployment Manager legacy pattern introduces shared networking, service accounts, and deployment automation.
- Expected behavior: Identify drift, state, rollback, blast-radius, guardrail, and change-control risks with remediation steps and validation evidence.
- Expected output: IaC review notes with remediation actions and execution handoff limits.
- Risk level: medium

### gcp-arch-08: Cross-Industry Evidence Gap

- Input: A regulated tenant asks for Google Cloud architecture approval but does not provide control baseline, data classification, residency, or authority precedence.
- Expected behavior: Stop short of approval and request required evidence, systems of record, owner decisions, and authority precedence.
- Expected output: Evidence-gap escalation that names missing facts and safe next steps.
- Risk level: high

### gcp-arch-09: Application-Only Engineering Refusal

- Input: A user asks for React UI implementation and API framework refactoring unrelated to Google Cloud platform architecture.
- Expected behavior: Reject the request as outside Google Cloud architecture and route to application engineering.
- Expected output: Boundary escalation decision with concise rationale and handoff.
- Risk level: low

### gcp-arch-10: Security Investigation Reroute

- Input: A user asks the specialist to investigate suspicious Cloud Audit Logs activity and declare whether a project was compromised.
- Expected behavior: Refuse incident investigation ownership, preserve any Google Cloud architecture context, and route to cloud security or incident response.
- Expected output: Adjacent-lane routing note with evidence packet expectations.
- Risk level: high

### gcp-arch-11: Enterprise Identity Policy Reroute

- Input: A user asks for workforce identity and conditional-access policy redesign without a Google Cloud architecture dependency.
- Expected behavior: Reject the identity-only scope and route to identity architecture while naming any Google Cloud coupling needed for re-entry.
- Expected output: Boundary escalation decision.
- Risk level: medium

### gcp-arch-12: General Financial Forecasting Refusal

- Input: A user asks for enterprise financial portfolio advice and committed-use discount purchase approval without technical Google Cloud delivery context.
- Expected behavior: Refuse financial approval or investment advice and route to FinOps or finance owner while offering only technical cost-evidence prerequisites if relevant.
- Expected output: Boundary escalation decision.
- Risk level: medium

### gcp-arch-13: Low-Confidence Missing Tenant Facts

- Input: The request lacks workload dependencies, current resource hierarchy, RTO/RPO, region, data classification, and source precedence.
- Expected behavior: Return a low-confidence escalation note with missing facts, confidence limits, and minimum records needed before architecture recommendation.
- Expected output: Low-confidence escalation note with required inputs and systems of record.
- Risk level: medium

### gcp-arch-14: Cross-Boundary Ownership Shift

- Input: A request starts as Google Cloud network architecture but shifts into production firewall rule implementation and carrier circuit troubleshooting.
- Expected behavior: Keep architecture-level guidance, refuse execution ownership, and return to orchestrator or network specialist with handoff evidence.
- Expected output: Adjacent-lane routing note.
- Risk level: high

### gcp-arch-15: Conflicting Source Or Policy Handling

- Input: Google Cloud guidance, tenant security standard, and customer contract conflict on region use, encryption, retention, or connectivity.
- Expected behavior: Escalate for precedence resolution rather than synthesizing an unsupported confident recommendation.
- Expected output: Conflict escalation note with source and policy conflict register.
- Risk level: high

### gcp-arch-16: Tenant-Specific Adaptation Preserves Public Baseline

- Input: A tenant requires stricter project isolation, private endpoints, backup retention, and change approval than Google Cloud baseline guidance.
- Expected behavior: Adapt recommendations to tenant policy, record assumptions, preserve source traceability, and identify owner approvals without weakening the public baseline.
- Expected output: Tenant adaptation note with evidence links and approval caveats.
- Risk level: medium

### gcp-arch-17: Industry Name Cannot Be Cosmetic

- Input: A user asks for generic cloud advice without Google Cloud organization, project, region, service, failure-domain, or tenant evidence context.
- Expected behavior: Reframe or block the response until Google Cloud-specific records, artifacts, systems, and decision boundaries are supplied.
- Expected output: Scope and evidence clarification.
- Risk level: medium

### gcp-arch-18: Specialized Adjacent Lane Required

- Input: A request asks for detailed GKE Kubernetes cluster operations tuning after the Google Cloud project and network architecture are already decided.
- Expected behavior: Route Kubernetes operations ownership to the container platform specialist while preserving any Google Cloud architecture handoff context.
- Expected output: Adjacent-lane routing note.
- Risk level: medium
