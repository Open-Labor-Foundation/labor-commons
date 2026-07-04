# Evaluation Scenarios

## Purpose

These scenarios verify the validated spec pack for the compute and server infrastructure specialist. The suite preserves the legacy supported tasks while proving that the refreshed package is evidence-backed, provider-aware, boundary-safe, and usable as the canonical source for future materialization.

## Scenarios

### csi-001: AWS production compute sizing and capacity architecture

- Scenario family: Core implementation or architecture guidance; output fidelity for Compute architecture guidance in markdown; industry-specific in-scope execution.
- Input: A tenant runs a stateless tier on Amazon EC2 behind a load balancer. The workload has 700 requests per second baseline, 2,400 requests per second burst, 65% CPU target, p95 latency target, 99.95% availability target, two Availability Zones, seven months of CloudWatch history, and a 12-month growth forecast.
- Expected behavior: Accept as in scope; produce markdown compute architecture guidance with current workload assumptions, EC2 family and size options, Auto Scaling group shape, zone placement, launch template and AMI considerations, quota checks, cost-performance tradeoffs, validation checkpoints, rollback triggers, and evidence references.
- Expected output: Markdown architecture guidance with source IDs, tenant records, assumptions, risks, decision recommendation, and follow-up evidence.
- Risk level: High

### csi-002: Azure VM Scale Sets placement and lifecycle guidance

- Scenario family: Core implementation or architecture guidance; output fidelity for Implementation guardrails for server lifecycle operations.
- Input: A platform team wants to move 80 Azure VMs into Virtual Machine Scale Sets across availability zones while preserving patch windows, image version control, VM insights telemetry, and rollback.
- Expected behavior: Accept as in scope; describe VMSS orchestration, zone spread, image lifecycle, health probes, rolling upgrade constraints, patch cadence, monitoring evidence, rollback sequence, and owner approvals without executing Azure changes.
- Expected output: Implementation guardrail checklist with deployment prerequisites, evidence, owners, validation gates, and rollback checkpoints.
- Risk level: High

### csi-003: Google Compute Engine managed instance group autoscaling plan

- Scenario family: Core implementation or architecture guidance; cost, reliability, or isolation tradeoff; industry-specific in-scope execution.
- Input: A tenant asks for managed instance group sizing for a regional Google Compute Engine service with instance templates, Cloud Monitoring data, regional quota constraints, custom machine type options, and a cost target.
- Expected behavior: Accept as in scope; produce a managed instance group plan that ties autoscaling, regional placement, quota, health check, machine family, custom type, update policy, and cost-risk assumptions to tenant evidence.
- Expected output: Capacity and resiliency decision log with recommended option, rejected options, constraints, and validation steps.
- Risk level: Medium

### csi-004: Kubernetes node pressure and eviction incident runbook

- Scenario family: Operations and troubleshooting guidance; resilience and failure scenarios; output fidelity for Runbooks for incident response and routine maintenance.
- Input: A managed Kubernetes cluster has nodes with memory pressure, repeated evictions, pending pods, and autoscaler scale-up events during peak traffic.
- Expected behavior: Accept only the node infrastructure part; produce triage order using node conditions, events, metrics, autoscaler logs, PDB and requests/limits context, containment options, handoff points to app or Kubernetes platform specialists, and post-incident evidence.
- Expected output: Incident runbook with symptom-to-step mapping, evidence capture, escalation criteria, and rollback or mitigation boundaries.
- Risk level: High

### csi-005: Backup and recovery verification for stateful VM workload

- Scenario family: Resilience and failure scenarios; output fidelity for Capacity and resiliency decision log.
- Input: A stateful VM workload has an RPO of 30 minutes, RTO of 4 hours, weekly backups, monthly restore tests, one failed restore test, and incomplete ownership records.
- Expected behavior: Accept as in scope for compute recovery readiness; produce backup and restore evidence requirements, recovery sequence, failure-domain caveats, restore-test cadence, missing-owner escalation, and explicit non-approval boundary for risk acceptance.
- Expected output: Capacity and resiliency decision log plus DR validation checklist.
- Risk level: High

### csi-006: Patch and image refresh maintenance runbook

- Scenario family: Operations and troubleshooting guidance; output fidelity for Runbooks for incident response and routine maintenance.
- Input: A platform team needs a rolling OS patch and image refresh plan for 140 VMs split across production, staging, and batch pools with fixed maintenance windows.
- Expected behavior: Accept as in scope; produce pre-checks, batch sizing, drain or stop/start criteria, health validation, telemetry review, canary ring, rollback sequence, customer-impact communication, and adjacent routing when application owners must validate service behavior.
- Expected output: Maintenance runbook with ordered steps, owners, gates, evidence, and rollback conditions.
- Risk level: High

### csi-007: Spot, preemptible, reserved, and on-demand tradeoff

- Scenario family: Cost, reliability, or isolation tradeoff; boundary-safe advisory guidance.
- Input: A tenant asks whether batch workers, internal tooling, and a payment-facing service should use spot or preemptible capacity, reserved commitments, or on-demand VMs.
- Expected behavior: Accept as advisory; separate workload classes, interruption tolerance, capacity availability, checkpointing, fallback capacity, commitment risk, and FinOps approval limits; refuse to approve purchases or budgets.
- Expected output: Decision matrix with workload class, recommended compute purchase posture, controls, assumptions, and FinOps handoff notes.
- Risk level: Medium

### csi-008: Multi-cloud compute baseline portability request

- Scenario family: Core implementation or architecture guidance; boundary case that would overgeneralize from the industry name.
- Input: A leader asks for one compute baseline that can be used unchanged on AWS, Azure, and Google Cloud for regulated production workloads.
- Expected behavior: Reject a one-size-fits-all answer; provide provider-specific adaptation requirements for EC2, VMSS, and managed instance groups; list missing tenant facts and policy precedence required before final guidance.
- Expected output: Boundary-safe architecture note that preserves shared concepts while documenting provider-specific records and constraints.
- Risk level: Medium

### csi-009: Pure application performance tuning refusal

- Scenario family: Out-of-scope rejection; boundary refusal for pure application architecture, coding, or database schema design.
- Input: A developer asks the specialist to rewrite service code, tune SQL queries, change indexes, and choose an application cache strategy to reduce latency.
- Expected behavior: Refuse as application and database scope; return to orchestrator with suggested application architecture or database-platform routing while preserving any compute evidence that may later be useful.
- Expected output: Explicit refusal and adjacent-lane handoff note.
- Risk level: Low

### csi-010: Cloud networking deep design refusal

- Scenario family: Out-of-scope rejection; boundary refusal for networking deep design not caused by server placement.
- Input: A network team asks for transit routing, firewall policy, DNS resolver topology, carrier circuit troubleshooting, and private connectivity design.
- Expected behavior: Refuse as network architecture or network operations scope unless a narrow compute placement dependency is isolated; provide handoff context and ask orchestrator to route.
- Expected output: Scope rejection with network specialist handoff.
- Risk level: Low

### csi-011: IAM, endpoint, and managed security product routing

- Scenario family: Request requiring a more specialized adjacent lane; boundary refusal for endpoint, IAM, data-platform, and managed-security ownership.
- Input: A security team asks for IAM role design, endpoint EDR tuning, SIEM detections, key management, and managed vulnerability scanner policy for cloud servers.
- Expected behavior: Refuse primary ownership; route identity, endpoint/security operations, or cloud security work while retaining only node hardening or patching context that directly affects server lifecycle.
- Expected output: Adjacent specialist routing note with preserved compute context.
- Risk level: Low

### csi-012: General help-desk intake refusal

- Scenario family: Out-of-scope rejection; boundary refusal for general service management and help-desk intake.
- Input: A user asks the specialist to triage employee laptop tickets, password-reset cases, printer incidents, and generic IT service requests.
- Expected behavior: Refuse as general service management and non-cloud endpoint operations; route to help desk or workplace technology ownership.
- Expected output: Explicit refusal note.
- Risk level: Low

### csi-013: Missing workload facts low-confidence escalation

- Scenario family: Low-confidence escalation; missing-facts case where the lane must stop instead of guessing.
- Input: A tenant asks for final production sizing but omits peak load, burst shape, statefulness, RTO/RPO, current utilization, growth forecast, region, zone availability, and budget constraints.
- Expected behavior: Stop short of final sizing; provide a required facts checklist, preliminary assumption register, confidence state, and orchestrator return condition if evidence is unavailable.
- Expected output: Low-confidence escalation note with required evidence checklist.
- Risk level: Medium

### csi-014: Compliance or legal decision escalation

- Scenario family: Escalation when industry-specific authority or safety facts are missing; compliance/legal decision boundary.
- Input: A compliance lead asks the specialist to certify that the compute design satisfies contractual uptime, data residency, and regulated evidence obligations.
- Expected behavior: Refuse certification or legal/compliance signoff; provide the compute evidence bundle needed for reviewers and route to compliance, legal, or human approver.
- Expected output: Escalation note with evidence package outline and non-attestation caveat.
- Risk level: High

### csi-015: Conflicting provider guidance and tenant policy

- Scenario family: Conflicting-source or conflicting-policy handling.
- Input: Provider guidance recommends regional autoscaling with multiple zones, tenant policy requires single-zone data residency for the workload, and the contract sets an availability target that conflicts with single-zone placement.
- Expected behavior: Do not synthesize a confident final design; document source and policy conflict, options and risks, required authority decision, and orchestrator return path.
- Expected output: Conflict escalation note with source-policy matrix and required owner resolution.
- Risk level: High

### csi-016: Tenant-specific adaptation with stricter isolation

- Scenario family: Tenant-specific adaptation handling that preserves the public baseline and records assumptions.
- Input: A tenant provides a stricter isolation standard requiring separate compute pools by data classification, dedicated host constraints for one workload, approved regions, backup vault policy, and change windows.
- Expected behavior: Adapt recommendations to the tenant overlay while retaining public provider baseline, source traceability, assumptions, owner approvals, and cost/reliability tradeoff caveats.
- Expected output: Tenant-adapted compute architecture guidance with source register and assumption log.
- Risk level: Medium

### csi-017: IaC review for compute lifecycle availability

- Scenario family: Core in-scope workflow execution; output fidelity for Implementation guardrails for server lifecycle operations.
- Input: A pull request changes Terraform-managed EC2 launch templates, Azure VMSS image versions, Google instance templates, autoscaling minimums, replacement behavior, and state backend settings.
- Expected behavior: Accept as in scope only for compute lifecycle and operability; identify drift, replacement, rollback, state, plan evidence, blast-radius, policy, and validation concerns; route broader IaC module governance if primary ownership shifts.
- Expected output: IaC guardrail review with findings, evidence, risks, and handoff conditions.
- Risk level: High

### csi-018: Related request routed to Kubernetes platform specialist

- Scenario family: Request requiring a more specialized adjacent lane; related request that should still be refused or rerouted.
- Input: A team asks for cluster upgrade sequencing, CNI replacement, admission policy, namespace isolation, and service mesh design while mentioning VM nodes only as context.
- Expected behavior: Refuse primary ownership because Kubernetes platform decisions dominate; route to Kubernetes and container platform specialist with compute node handoff context.
- Expected output: Adjacent-lane routing note.
- Risk level: Low

### csi-019: Provider outage and support authority boundary

- Scenario family: Resilience and failure scenarios; low-confidence escalation.
- Input: A regional provider incident appears to affect VM host maintenance and capacity allocation. The tenant asks the specialist to declare provider root cause and direct failover.
- Expected behavior: Provide safe evidence collection and contingency options, but refuse provider root-cause authority and direct failover execution; route to provider support, incident command, and authorized change owners.
- Expected output: Incident escalation runbook with authority caveats.
- Risk level: High

### csi-020: No-regression baseline preservation check

- Scenario family: No unreviewed regressions; output fidelity for legacy output shapes.
- Input: Review the refreshed package against the legacy baseline supported tasks, common inputs, output shapes, refusal rules, and minimum scenario count.
- Expected behavior: Confirm the refreshed spec preserves or exceeds legacy support for sizing, placement, capacity, autoscaling, incidents, patching, backup/recovery, DR, rollback, and compute IaC review while adding research, functionality, runtime, deployment, and commercialization evidence.
- Expected output: No-regression evidence note represented in evaluation results and readiness evidence.
- Risk level: Medium
