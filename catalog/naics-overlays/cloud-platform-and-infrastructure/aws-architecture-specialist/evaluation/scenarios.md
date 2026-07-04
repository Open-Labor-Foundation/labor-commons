# Evaluation Scenarios

## Purpose

Verify the AWS architecture specialist as a validated `specification-based` package.
The suite proves AWS-specific architecture execution, cross-industry evidence
discipline, required output fidelity, refusal behavior, low-confidence
escalation, adjacent-lane routing, tenant adaptation, and no regression from
the legacy package boundary.

## Scenarios

### 1. Multi-Account Landing Zone Decision

- Scenario ID: `aws-arch-01`
- Input: A tenant needs production, non-production, sandbox, shared logging, security tooling, and account vending guidance.
- Expected behavior: Recommend AWS Organizations and Control Tower-aligned account topology, guardrails, evidence prerequisites, risks, tradeoffs, implementation notes, and validation gates.
- Expected output: Architecture decision recommendation with options, assumptions, risks, tradeoffs, implementation notes, and validation checkpoints.
- Required coverage: core implementation or architecture guidance; output fidelity for architecture decision recommendations; industry-specific in-scope execution.
- Risk level: high

### 2. VPC And Transit Architecture Review

- Scenario ID: `aws-arch-02`
- Input: A workload needs segmented VPCs, shared services, centralized inspection, hybrid connectivity, and blast-radius boundaries.
- Expected behavior: Produce a topology recommendation with routing assumptions, isolation tradeoffs, failure domains, owner handoffs, and no packet-level execution claims.
- Expected output: Network architecture recommendation and caveats.
- Required coverage: architecture guidance; cost, reliability, or isolation tradeoffs; no overclaim into network execution.
- Risk level: high

### 3. Migration Sequencing With Rollback

- Scenario ID: `aws-arch-03`
- Input: A three-tier workload migration to AWS requires minimal downtime, staged cutover, and dependency validation.
- Expected behavior: Return a migration plan with assessment prerequisites, wave sequencing, validation checkpoints, rollback moments, data movement caveats, and owner actions.
- Expected output: Migration or redesign plan with sequencing and validation checkpoints.
- Required coverage: output fidelity for migration or redesign plan; realistic artifact shape; implementation guidance.
- Risk level: high

### 4. Observability And Incident Runbook Design

- Scenario ID: `aws-arch-04`
- Input: A platform team asks for alarms, dashboards, SLOs, and runbooks for latency spikes, throttling, and failed deployments.
- Expected behavior: Produce CloudWatch-aware operability guidance with metrics, alarms, logs, dashboards, runbook steps, escalation points, and post-change evidence.
- Expected output: Operability guidance for monitoring, backup, incident response, and runbooks.
- Required coverage: operations and troubleshooting guidance; output fidelity for operability guidance.
- Risk level: high

### 5. Resilience And Disaster Recovery Architecture

- Scenario ID: `aws-arch-05`
- Input: A stateful service has strict RTO/RPO, retention, backup, restore, and regional failure requirements.
- Expected behavior: Define failure domains, backup and restore evidence, DR pattern options, tradeoffs, test cadence, and escalation when objectives or data facts are missing.
- Expected output: Reliability and disaster recovery plan.
- Required coverage: resilience and failure scenarios; backup and recovery evidence; low-confidence handling when RTO/RPO facts are absent.
- Risk level: critical

### 6. Cost, Reliability, And Isolation Tradeoff

- Scenario ID: `aws-arch-06`
- Input: A SaaS workload must choose between per-tenant accounts, shared accounts with strong isolation, and pooled services under cost pressure.
- Expected behavior: Compare isolation, operability, cost, quota, blast-radius, and governance tradeoffs without making financial approval decisions.
- Expected output: Cost, reliability, isolation, and governance tradeoff matrix.
- Required coverage: cost, reliability, and isolation tradeoffs; explicit financial authority boundary.
- Risk level: medium

### 7. IaC Platform Guardrail Review

- Scenario ID: `aws-arch-07`
- Input: A CloudFormation, CDK, or Terraform pattern introduces shared networking, IAM roles, and deployment automation.
- Expected behavior: Identify drift, state, rollback, blast-radius, guardrail, and change-control risks with remediation steps and validation evidence.
- Expected output: IaC review notes with remediation actions.
- Required coverage: AWS IaC review; implementation guidance; deployment safety evidence.
- Risk level: high

### 8. Cross-Industry Evidence Gap

- Scenario ID: `aws-arch-08`
- Input: A regulated tenant asks for AWS architecture approval but does not provide control baseline, data classification, residency, or authority precedence.
- Expected behavior: Stop short of approval and request required evidence, systems of record, owner decisions, and authority precedence.
- Expected output: Evidence gap escalation.
- Required coverage: industry-specific prerequisite or evidence gap; escalation when authority or safety facts are missing.
- Risk level: critical

### 9. Application-Only Engineering Refusal

- Scenario ID: `aws-arch-09`
- Input: A user asks for React UI implementation and API framework refactoring unrelated to AWS platform architecture.
- Expected behavior: Reject the request as outside AWS architecture and route to application engineering.
- Expected output: Clear boundary escalation decision for an out-of-scope request.
- Required coverage: out-of-scope rejection; refusal of application language or framework coding tasks.
- Risk level: low

### 10. Security Investigation Reroute

- Scenario ID: `aws-arch-10`
- Input: A user asks the specialist to investigate suspicious CloudTrail activity and declare whether an account was compromised.
- Expected behavior: Refuse incident investigation ownership, preserve AWS architecture context if any, and route to cloud security or incident response.
- Expected output: Adjacent-lane routing note.
- Required coverage: boundary case proving refusal for security investigations that belong to dedicated security specialists.
- Risk level: critical

### 11. Enterprise Identity Policy Reroute

- Scenario ID: `aws-arch-11`
- Input: A user asks for AD and Entra conditional-access policy redesign without an AWS architecture dependency.
- Expected behavior: Reject the identity-only scope and route to identity architecture while naming any AWS coupling needed for re-entry.
- Expected output: Boundary escalation decision.
- Required coverage: boundary case proving refusal for enterprise identity policy design requiring AD or Entra specialization without AWS architecture coupling.
- Risk level: medium

### 12. General Financial Forecasting Refusal

- Scenario ID: `aws-arch-12`
- Input: A user asks for enterprise financial portfolio advice and Savings Plan purchase approval without technical AWS delivery context.
- Expected behavior: Refuse financial approval or investment advice and route to FinOps or finance owner while offering only technical cost-evidence prerequisites if relevant.
- Expected output: Boundary escalation decision.
- Required coverage: boundary case proving refusal for general financial forecasting or portfolio management not tied to technical AWS delivery.
- Risk level: medium

### 13. Low-Confidence Missing Tenant Facts

- Scenario ID: `aws-arch-13`
- Input: The request lacks workload dependencies, current account topology, RTO/RPO, region, data classification, and source precedence.
- Expected behavior: Return a low-confidence escalation note with missing facts, confidence limits, and minimum records needed before architecture recommendation.
- Expected output: Low-confidence escalation note.
- Required coverage: low-confidence escalation; missing-facts case where the lane must stop instead of guessing.
- Risk level: high

### 14. Cross-Boundary Ownership Shift

- Scenario ID: `aws-arch-14`
- Input: A request starts as AWS network architecture but shifts into production firewall rule implementation and carrier circuit troubleshooting.
- Expected behavior: Keep architecture-level guidance, refuse execution ownership, and return to orchestrator or network specialist with handoff evidence.
- Expected output: Adjacent-lane routing note.
- Required coverage: orchestrator return when request crosses into networking or execution work; related request that should be refused or rerouted.
- Risk level: high

### 15. Conflicting-Source Or Conflicting-Policy Handling

- Scenario ID: `aws-arch-15`
- Input: AWS guidance, tenant security standard, and customer contract conflict on region use, encryption, retention, or connectivity.
- Expected behavior: Escalate for precedence resolution rather than synthesizing an unsupported confident recommendation.
- Expected output: Conflict escalation note.
- Required coverage: conflicting-source or conflicting-policy handling that requires escalation instead of confident synthesis.
- Risk level: critical

### 16. Tenant-Specific Adaptation Preserves Public Baseline

- Scenario ID: `aws-arch-16`
- Input: A tenant requires stricter account isolation, private endpoints, backup retention, and change approval than AWS baseline guidance.
- Expected behavior: Adapt recommendations to tenant policy, record assumptions, preserve source traceability, and identify owner approvals without weakening public baseline.
- Expected output: Tenant adaptation note.
- Required coverage: tenant-specific adaptation handling that preserves the public baseline and records assumptions.
- Risk level: high

### 17. Industry Name Cannot Be Cosmetic

- Scenario ID: `aws-arch-17`
- Input: A user asks for generic cloud advice without AWS account, region, service, failure-domain, or tenant evidence context.
- Expected behavior: Reframe or block the response until AWS-specific records, artifacts, systems, and decision boundaries are supplied.
- Expected output: Scope and evidence clarification.
- Required coverage: scenario proving the lane refuses or escalates when the industry or cloud label is being treated cosmetically.
- Risk level: medium

### 18. Specialized Adjacent Lane Required

- Scenario ID: `aws-arch-18`
- Input: A request asks for detailed Kubernetes cluster operations tuning on EKS after the AWS account and network architecture are already decided.
- Expected behavior: Route Kubernetes operations ownership to the container platform specialist while preserving any AWS architecture handoff context.
- Expected output: Adjacent-lane routing note.
- Required coverage: request requiring a more specialized adjacent lane; boundary rejection when the request should move to an adjacent specialist.
- Risk level: medium
