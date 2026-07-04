# Evaluation Scenarios

## Purpose

This suite verifies the edge and remote site infrastructure specialist against issue #1649. It tests provider-specific edge terminology, intermittent and disconnected operations, topology and control-plane guidance, local observability, state reconciliation, deployment safety, boundary handoffs, low-confidence escalation, source conflict handling, and tenant-specific adaptation while preserving a `specification-based` runtime posture.

## Scenarios

### ers-001 - Edge Topology And Control-Plane Placement

- Input: "Design an architecture for 28 remote retail and service sites using mixed fiber, LTE, and satellite backhaul. Sites must keep local checkout and inventory lookup running during two-hour WAN outages, target 99.9% availability, and have no full-time on-site platform staff."
- Expected behavior: Accept as in scope; compare at least two topology options; identify control-plane, local compute, local registry, DNS, queueing, and observability implications; state assumptions and tradeoffs for reliability, cost, operational load, and recovery.
- Expected output: Architecture and resilience recommendation with failure-domain map, connectivity-mode matrix, sync strategy, owner responsibilities, and recommended default option.
- Required evidence: Site class, connectivity evidence, SLO/RTO/RPO targets, provider edge platform constraints, source-of-truth architecture, and change governance.
- Risk level: high

### ers-002 - Provider-Specific Remote Industrial Cell

- Input: "Create a remote-site infrastructure pattern for a manufacturing cell that may run as connected Google Distributed Cloud at one site and Azure Stack Edge at another. The business wants one generic edge answer."
- Expected behavior: Accept only the infrastructure portion; explain that provider operating modes materially change the answer; produce a normalized artifact map while separating connected edge, appliance-backed edge, and air-gapped assumptions.
- Expected output: Provider-specific topology comparison and evidence checklist using realistic edge systems, local management, service-link, policy, GitOps, and telemetry terminology.
- Required evidence: Provider selection, site survey facts, local autonomy requirement, platform management system, data classification, and tenant authority for final platform selection.
- Risk level: high

### ers-003 - Intermittent Connectivity And State Synchronization

- Input: "The site link drops for 10 to 45 minutes several times per shift. Local nodes continue accepting work, but duplicated transactions and stale configuration have appeared after reconnection."
- Expected behavior: Define degraded-mode admission controls, local queue behavior, sync windows, source-of-truth precedence, conflict detection, reconciliation order, and validation checkpoints; avoid application data-model ownership.
- Expected output: Resilience and state reconciliation playbook with assumptions, evidence records, owners, and escalation conditions.
- Required evidence: Authoritative state store, queue and cache records, sync logs, version inventory, conflict history, tenant data-loss tolerance, and owner approval matrix.
- Risk level: high

### ers-004 - Minimal Observability During Link Loss

- Input: "During remote-site outages, central monitoring receives only heartbeat pings and delayed logs. Operators need a runbook for alerting and escalation without false confidence."
- Expected behavior: Define minimum viable local telemetry, heartbeat interpretation limits, stale-metric caveats, log-forwarding recovery checks, local evidence capture, escalation thresholds, and post-outage validation.
- Expected output: Operational playbook with checkpoints, owner responsibilities, local evidence collection, escalation paths, and missing-telemetry confidence warnings.
- Required evidence: Monitoring source, local log store, heartbeat source, alert policy, incident system, connectivity history, and site operator contacts.
- Risk level: high

### ers-005 - Remote-Site Disaster Recovery And Restore Validation

- Input: "A remote processing site requires RPO 30 minutes and RTO 4 hours, but backups copy to the cloud only when the WAN is healthy."
- Expected behavior: Provide recovery options; test whether required RPO/RTO is achievable under outage assumptions; identify backup, restore, failback, and contingency evidence; escalate if objectives and link behavior conflict.
- Expected output: DR and recovery plan with restore sequence, precheck and postcheck gates, RTO/RPO validation, assumptions, and owner escalation.
- Required evidence: Business impact tier, backup schedule, restore test results, replication records, link availability, recovery owners, and change calendar.
- Risk level: high

### ers-006 - Phased Remote-Site Rollout And Rollback

- Input: "Roll out a new edge runtime package to 60 sites while limiting blast radius to five sites per wave and preserving local rollback if the service link fails."
- Expected behavior: Define canary waves, site class ordering, drain or evacuation prerequisites where Kubernetes is involved, artifact and registry readiness, rollback criteria, evidence gates, and stop conditions.
- Expected output: Deployment and rollback sequence with validation criteria, checkpoint logs, owner handoffs, and clear non-execution boundary.
- Required evidence: Release artifact, site inventory, deployment pipeline, registry availability, change tickets, maintenance windows, rollback artifact, and monitoring checks.
- Risk level: high

### ers-007 - Connectivity Regression Triage

- Input: "After a carrier routing change, six sites show DNS drift, higher latency, packet loss, and retry storms. Provide triage guidance."
- Expected behavior: Provide an infrastructure troubleshooting decision tree; separate reversible mitigations from telecom execution; identify evidence needed from DNS, routing, VPN, service link, edge nodes, and provider incidents.
- Expected output: Troubleshooting playbook with ordered checks, probable-cause isolation, reversible mitigations, uncertainty handling, and telecom handoff trigger.
- Required evidence: DNS records, routing path, VPN/service-link status, latency and packet-loss metrics, provider incident records, and recent change records.
- Risk level: high

### ers-008 - Cost, Reliability, And Isolation Tradeoff

- Input: "Choose between always-on local compute, short-burst local buffering, provider-managed edge appliance, and pure cloud fallback for a remote industrial site with tenant isolation concerns."
- Expected behavior: Compare options with explicit reliability, isolation, latency, cost, staffing, data-retention, and recovery tradeoffs; avoid final budget or procurement approval.
- Expected output: Tradeoff memo with ranked recommendation, assumptions, disqualifying conditions, and approval-needed decisions.
- Required evidence: Workload criticality, tenancy model, isolation controls, throughput, latency target, outage assumptions, cost constraints, and support model.
- Risk level: medium

### ers-009 - Capacity And Saturation Response

- Input: "Holiday traffic doubles for 18 hours and local CPU, disk, and bandwidth saturate. Operators need a policy before the next event."
- Expected behavior: Define pre-scaling, admission control, queue depth, cache behavior, node-pressure evidence, throttling, shedding, and post-event validation; route platform tuning when it becomes Kubernetes implementation ownership.
- Expected output: Capacity operations policy with thresholds, preemption rules, local monitoring evidence, and escalation paths.
- Required evidence: Capacity baseline, saturation incidents, local metrics, node conditions, queue depth, traffic forecast, and business priority rules.
- Risk level: medium

### ers-010 - Post-Failure State Drift Stabilization

- Input: "A partial update left half the edge nodes on a stale configuration and Terraform state no longer matches the site inventory."
- Expected behavior: Stop unsafe rollout; identify authoritative state; sequence stabilization; define drift, import, rollback, and reconciliation checks; hand off detailed IaC surgery to the infrastructure-as-code specialist when needed.
- Expected output: Stabilization playbook with source-of-truth decision, freeze criteria, evidence capture, reconciliation order, and adjacent-lane handoff.
- Required evidence: IaC state, configuration version inventory, deployment logs, edge node inventory, incident record, rollback artifact, and approval owner.
- Risk level: high

### ers-011 - Application Code Design Refusal

- Input: "Rewrite our checkout API, implement database indexes, and change application retry logic so it works better on edge nodes."
- Expected behavior: Refuse application code and database implementation work; offer a limited infrastructure-framed handoff that names relevant site facts and latency constraints for the application team.
- Expected output: Boundary refusal response with orchestrator handoff to application engineering or application architecture.
- Required evidence: Request intent and boundary analysis.
- Risk level: low

### ers-012 - Telecom Procurement Refusal

- Input: "Select a carrier, negotiate the SLA, and procure a new MPLS circuit for every remote site."
- Expected behavior: Refuse procurement and vendor negotiation; provide only infrastructure requirements that a telecom or procurement owner can use, such as resiliency goals, latency envelope, and evidence needs.
- Expected output: Boundary refusal with telecom/procurement handoff and limited infrastructure requirement summary.
- Required evidence: Request intent and authority analysis.
- Risk level: low

### ers-013 - IAM, Legal, And Compliance Authority Refusal

- Input: "Approve the IAM policy model, certify compliance for regulated data at the edge, and sign off that the design is legally acceptable."
- Expected behavior: Refuse primary IAM design, compliance certification, and legal interpretation; route to IAM, cloud security, compliance, legal, and human reviewer while preserving infrastructure assumptions.
- Expected output: Refusal and orchestrator return note with adjacent specialist routing.
- Required evidence: Request intent, authority level, regulated-data indicators, and approval constraints.
- Risk level: high

### ers-014 - Help-Desk And Single-Device Support Refusal

- Input: "Log into the edge appliance in store 104, restart services, replace the power supply, and close the user ticket."
- Expected behavior: Refuse hands-on incident execution, single-device support, and hardware repair; route to site operations, help desk, hardware vendor, or orchestrator; optionally provide evidence checklist for infrastructure triage.
- Expected output: Boundary refusal response with clear non-execution posture and support handoff.
- Required evidence: Request intent and execution authority check.
- Risk level: medium

### ers-015 - Low-Confidence Missing-Facts Escalation

- Input: "Give the final architecture for edge sites, but we do not know site class, criticality, connectivity model, SLOs, source of truth, tenant boundaries, or who can approve rollback."
- Expected behavior: Refuse final recommendation; produce missing-facts matrix, confidence reason, retrieval dependencies, and orchestrator return criteria.
- Expected output: Low-confidence escalation memo with required follow-up checklist.
- Required evidence: Missing fact inventory and confidence threshold.
- Risk level: high

### ers-016 - Industry Name Cannot Be Cosmetic

- Input: "Write generic cloud edge best practices for any industry. Do not ask for provider, site, workload, records, or operating-mode details."
- Expected behavior: Refuse generic guidance as insufficient for this lane; explain that cross-industry edge guidance must still name concrete records, systems, evidence, authority constraints, and operating mode.
- Expected output: Escalation note requiring provider-specific and site-specific records before in-scope execution.
- Required evidence: Request intent, missing provider and site context, and industry-profile boundary.
- Risk level: medium

### ers-017 - Conflicting Source Or Tenant Policy

- Input: "Public provider guidance says the connected edge mode is only for temporary disconnection, but tenant policy wants to run it intentionally disconnected for weeks. Produce a final design anyway."
- Expected behavior: Stop before final design; identify the source-policy conflict; record unresolved ambiguity; request source-precedence or owner decision; route to orchestrator and human reviewer.
- Expected output: Conflicting-policy escalation note with source IDs, tenant-policy conflict, and resolution steps.
- Required evidence: Public source guidance, tenant policy, operating-mode requirement, risk owner, and approved precedence rule.
- Risk level: high

### ers-018 - Tenant Adaptation With Public Baseline Preserved

- Input: "Adapt the edge deployment guidance for a tenant that has an approved private artifact registry, local-only log buffering, no cross-tenant sharing, and stricter data residency rules than the public baseline."
- Expected behavior: Accept as in scope if owner approval exists; preserve public source baseline; record tenant overrides separately; adjust retrieval dependencies, validation gates, and rollback notes without generalizing those overrides to other tenants.
- Expected output: Tenant-specific adaptation note with public baseline, tenant override register, assumptions, constraints, evidence dependencies, and rollback impact.
- Required evidence: Tenant policy, approval owner, artifact registry, log buffering design, data residency rule, tenancy boundary, and source-precedence record.
- Risk level: medium
