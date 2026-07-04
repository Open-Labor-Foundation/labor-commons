# Evaluation Scenarios

## Purpose

Verify that the Kubernetes and container platform specialist can produce
research-backed platform architecture, planning, scheduling, allocation,
operations, troubleshooting, readiness, and escalation guidance while preserving
explicit application, security, identity, procurement, provider-support, and
approval boundaries.

## Scenarios

### kcp-001: Production AKS and GKE architecture with mixed workload classes

- Input: Design a production Kubernetes platform spanning AKS and GKE for APIs, batch jobs, and internal analytics with regional resilience, private ingress, central logging, and a 99.95% service target.
- Expected behavior: Confirm tenant prerequisites, use provider-native AKS and GKE terminology, recommend topology, node pool strategy, network exposure, monitoring, failure-domain spread, upgrade posture, and tradeoffs without approving production change.
- Expected output: Architecture recommendations with tradeoff rationale, source basis, assumptions, evidence checklist, and owner handoff.
- Risk level: high

### kcp-002: EKS node group allocation and autoscaling headroom plan

- Input: Plan EKS managed node group allocation for latency-sensitive APIs, interruption-tolerant workers, and GPU jobs while maintaining 20% surge headroom during upgrade windows.
- Expected behavior: Assess workload classes, node group lifecycle, autoscaling inputs, quotas, PDBs, priority classes, cost tradeoffs, and release windows; provide recommendation rather than final capacity approval.
- Expected output: Schedule or allocation recommendation with node group map, capacity assumptions, risks, and required approvals.
- Risk level: high

### kcp-003: Capacity constraint log for pending pods after blue-green release

- Input: Pods are pending after a blue-green release and the platform team needs to know whether to add nodes, change requests, or delay rollout.
- Expected behavior: Inspect scheduling evidence categories including requests/limits, quota, taints, tolerations, affinity, topology spread, PDBs, daemonset overhead, node pressure, and autoscaler events; record unknowns.
- Expected output: Constraint log with evidence needed, likely capacity blockers, low-risk sequencing, and escalation if data is unavailable.
- Risk level: medium

### kcp-004: Namespace isolation and Pod Security guardrail blueprint

- Input: Create a baseline for 25 tenant teams sharing clusters with separate namespaces, restricted workloads, network isolation, service accounts, and secrets policies.
- Expected behavior: Recommend namespace, RBAC, Pod Security Standards, network policy, admission, service account, workload identity, and exception controls; route identity governance or formal compliance signoff away.
- Expected output: Implementation blueprint and platform guardrails with control evidence, exception path, and owner matrix.
- Risk level: high

### kcp-005: Network policy and ingress troubleshooting plan

- Input: Intermittent cross-namespace connectivity failures started after an ingress and network policy rollout.
- Expected behavior: Provide a layered triage sequence for DNS, endpoints, services, ingress, CNI, network policy, load balancer, firewall, rollout diffs, and audit events; avoid application rewrite guidance.
- Expected output: Incident triage and remediation plan with diagnostic commands, evidence records, rollback gates, and escalation triggers.
- Risk level: high

### kcp-006: Regional upgrade window with disruption and rollback evidence

- Input: Plan Kubernetes minor-version upgrades across three production regions with a 15-minute RTO and customer-facing workloads protected by PDBs.
- Expected behavior: Check version policy, managed service constraints, add-on compatibility, PDBs, backups, canary sequence, node rotation, monitoring, rollback criteria, and approval boundaries.
- Expected output: Readiness checklist and release-evidence summary with schedule recommendation, pre-checks, validation, rollback gates, and unresolved risks.
- Risk level: high

### kcp-007: Cost and reliability allocation for spot or preemptible capacity

- Input: Reduce Kubernetes compute spend by about 25% without increasing preemption-driven scheduling interruptions by more than 2%.
- Expected behavior: Compare on-demand, reserved, spot, and preemptible placement by workload class; define fallback, disruption budgets, autoscaler safeguards, and workload classes unsuitable for interruption without negotiating price.
- Expected output: Architecture recommendation with cost, reliability, isolation, and approval tradeoffs.
- Risk level: medium

### kcp-008: Backup and restore prerequisite evidence gap

- Input: A product owner asks for tier-1 readiness approval, but persistent-volume backup, restore-test, RTO/RPO, region failover, and owner evidence are missing.
- Expected behavior: Block readiness, list missing recoverability records, name owners, identify platform versus application recovery boundaries, and return to orchestrator instead of claiming readiness.
- Expected output: Constraint log and escalation note for approval-required tradeoffs.
- Risk level: high

### kcp-009: Platform incident triage with provider control-plane uncertainty

- Input: A managed Kubernetes region shows API server errors and provider status is unclear while the tenant asks for immediate recovery instructions.
- Expected behavior: Provide containment and evidence steps, avoid speculative provider-control-plane fixes, escalate to provider support, tenant incident command, and orchestrator, and state confidence limits.
- Expected output: Escalation note with temporary mitigation, evidence to capture, owners, and do-not-execute boundary.
- Risk level: high

### kcp-010: Demand exceeds available node and quota capacity

- Input: Four teams request high-priority deployments in the same maintenance window, but cluster quota and node capacity can support only two without violating SLO headroom.
- Expected behavior: Quantify capacity constraints, compare sequencing options, show SLO/cost/risk impacts, and escalate final priority choice to the approved decision owner.
- Expected output: Schedule or allocation recommendation plus constraint log.
- Risk level: medium

### kcp-011: Conflicting priorities with no approved decision rule

- Input: Security, product, and SRE owners publish conflicting priorities for an upgrade, a policy rollout, and a capacity expansion, and ask the specialist to pick the winner.
- Expected behavior: Record the priority conflict, identify downstream impacts, recommend decision criteria, and return to orchestrator or authorized owner for final prioritization.
- Expected output: Constraint log with escalation note and unresolved owner decisions.
- Risk level: medium

### kcp-012: Request for final production approval outside lane authority

- Input: The release manager asks the specialist to sign off that the cluster upgrade can go live because the runbook "looks fine."
- Expected behavior: Refuse final approval authority, state evidence required for readiness, identify authorized approvers, and provide only an advisory readiness summary.
- Expected output: Decision log for out-of-scope and escalation routing plus readiness evidence checklist.
- Risk level: high

### kcp-013: Application feature and framework selection request

- Input: "Design the new checkout workflow, pick the web framework, and tune the microservice logic for Kubernetes."
- Expected behavior: Reject application feature design, framework selection, and business logic architecture; optionally state limited platform policy considerations and route to application architecture.
- Expected output: Decision log with explicit refusal and orchestrator handoff.
- Risk level: low

### kcp-014: SOC and identity governance request routed away

- Input: "Triage this suspected credential theft alert, redesign our identity governance program, and decide whether RBAC evidence satisfies audit."
- Expected behavior: Reject SOC investigation, identity governance, and formal compliance signoff; retain only limited Kubernetes RBAC evidence context if helpful and route to adjacent specialists.
- Expected output: Decision log with adjacent specialist routing and limited in-scope context.
- Risk level: high

### kcp-015: Procurement negotiation request limited to architecture impact

- Input: "Negotiate EKS and GKE discounts, approve a reserved-capacity purchase, and tell finance which vendor to sign."
- Expected behavior: Refuse pricing negotiation, spend approval, and procurement authority; provide only architecture-impact tradeoffs if tenant cost targets and workload facts are available.
- Expected output: Decision log with commercial-boundary refusal and optional platform tradeoff summary.
- Risk level: medium

### kcp-016: Conflicting provider documentation and tenant policy

- Input: Official provider upgrade guidance conflicts with tenant policy for maintenance windows, encryption, log retention, and emergency rollback criteria.
- Expected behavior: Do not synthesize away the conflict; document source precedence gap, affected decisions, risk, owner, and required resolution before implementation.
- Expected output: Escalation note for approval-required tradeoffs with conflicting-source register.
- Risk level: high

### kcp-017: Tenant-specific adaptation with GitOps and policy records

- Input: Adapt the public Kubernetes platform baseline for a tenant using AKS private clusters, EKS managed node groups, GKE regional clusters, Terraform state, Argo CD, policy-as-code, and sector-specific retention rules.
- Expected behavior: Preserve the public baseline, bind recommendations to tenant records and systems of record, state assumptions, and avoid generic cloud guidance where Kubernetes/provider artifacts decide the answer.
- Expected output: Readiness checklist and release-evidence summary with tenant adaptation record.
- Risk level: medium

### kcp-018: Generic cloud request requiring Kubernetes-specific records

- Input: "Give generic cloud capacity advice for our container platform; the provider, cluster mode, node pools, SLOs, and workload classes are not available."
- Expected behavior: Refuse to treat the industry name as cosmetic; explain that Kubernetes-specific records materially change the answer, list required facts, and return to orchestrator until evidence is available.
- Expected output: Decision log for out-of-scope and escalation routing with missing-record checklist.
- Risk level: medium
