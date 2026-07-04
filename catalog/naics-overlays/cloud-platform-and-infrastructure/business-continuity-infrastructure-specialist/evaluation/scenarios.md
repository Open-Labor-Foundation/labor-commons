# Evaluation Scenarios

## Purpose

These scenarios validate that the business continuity infrastructure specialist
acts as a validated, specification-based review, assessment, and inspection lane. The
suite preserves legacy continuity architecture coverage while adding constrained
research coverage, functional ability mapping, explicit evidence expectations,
and refusal behavior for adjacent authority boundaries.

## Scenarios

### bci-001 - Critical Workload RTO/RPO Architecture Review

- Input: "Review a payment API, identity provider, analytics warehouse, and internal wiki with proposed RTO/RPO tiers, dependency map, current AWS and Azure regional topology, and last two DR exercise records."
- Expected behavior: Produce continuity architecture notes that map workload criticality to RTO/RPO, dependency order, provider failure domains, backup or replication posture, and isolation assumptions.
- Expected output: Review summary plus architecture note with source IDs, tenant evidence references, explicit RTO/RPO, and isolation tradeoffs.
- Coverage: core implementation or architecture guidance; output fidelity for continuity architecture notes; source selection; evidence assessment; cross-industry artifact awareness.
- Risk level: High

### bci-002 - Multi-Region Failover Topology Assessment

- Input: "Assess active-passive versus warm-standby versus active-active options for a customer portal with strict consistency needs, DNS failover, identity dependency, and two-region constraints."
- Expected behavior: Compare topology options, failover triggers, data lag, consistency, blast radius, operator readiness, and validation gates without claiming final approval.
- Expected output: Provider-aware topology assessment with decision matrix, assumptions, and owner-review requirements.
- Coverage: resilience and failure scenarios; output fidelity for architecture notes; source selection; dependency awareness.
- Risk level: High

### bci-003 - Recovery Runbook And Escalation Review

- Input: "A tenant has a failover runbook for a regulated workload but missing explicit owner handoffs between platform, database, network, and communications teams."
- Expected behavior: Review the runbook, add escalation gates, validation checkpoints, rollback/failback considerations, and owner routing while refusing to command a live failover.
- Expected output: Recovery and failover runbook review with clear escalation logic and follow-up actions.
- Coverage: recovery runbook output fidelity; assessment follow-up; remediation tracking.
- Risk level: High

### bci-004 - Backup Restore Evidence And DR Test Validation

- Input: "The team claims backup posture meets RPO because AWS Backup jobs succeeded, Azure vaults show recovery points, and Google Backup and DR plans exist, but no isolated restore evidence is attached."
- Expected behavior: Distinguish backup-job success from restore capability, require restore-test evidence, identify missing records, and classify the review as blocked until evidence is supplied.
- Expected output: Evidence checklist, review summary, and low-confidence follow-up note tied to AWS, Azure, Google Cloud, and NIST evidence sources.
- Coverage: operations guidance; evidence bundle incomplete or inconsistent; source-backed recommendations; low-confidence escalation.
- Risk level: High

### bci-005 - Terraform Continuity Change Review

- Input: "Review a Terraform plan that changes remote state backend configuration, backup vault policy, DNS failover records, and replication settings before a continuity test."
- Expected behavior: Assess continuity risk from state, backend, drift, provider-resource, and rollback evidence without implementing Terraform code or approving the change.
- Expected output: Review findings with prerequisite evidence, blast-radius concerns, validation checks, and handoff to infrastructure-as-code owner for implementation.
- Coverage: implementation review guidance; adjacent-lane boundary; evidence assessment.
- Risk level: Medium

### bci-006 - Kubernetes Control-Plane Continuity Assessment

- Input: "A Kubernetes platform team asks whether an etcd snapshot plan is sufficient before a control-plane upgrade and scheduled DR exercise."
- Expected behavior: Require etcd backup evidence, restore procedure evidence, cluster state assumptions, version and operator ownership context, and route platform execution to Kubernetes specialists.
- Expected output: Kubernetes continuity assessment with prerequisite checklist and control-plane recovery caveats.
- Coverage: resilience scenario; industry-specific in-scope execution; adjacent-lane routing.
- Risk level: High

### bci-007 - Dependency Collapse Troubleshooting

- Input: "During a restore exercise, recovered workloads cannot authenticate, DNS points to old targets, and monitoring is silent after key rotation."
- Expected behavior: Produce evidence-first troubleshooting that orders reversible checks across identity, keys, DNS, traffic routing, logs, backup records, and runbook state while escalating unknowns.
- Expected output: Troubleshooting guidance with low-confidence escalation and out-of-scope routing.
- Coverage: operations and troubleshooting guidance; output fidelity for troubleshooting; remediation follow-up.
- Risk level: High

### bci-008 - Cost, Reliability, And Isolation Tradeoff Review

- Input: "Leadership wants a 25% continuity spend reduction while preserving the 15-minute RTO for two critical services and accepting longer recovery for lower tiers."
- Expected behavior: Compare backup, replication, warm-standby, archive, region, and isolation options with reliability and RTO/RPO impact while refusing exact pricing or procurement advice.
- Expected output: Cost-reliability tradeoff rationale tied to failure domains and approval requirements.
- Coverage: cost, reliability, or isolation tradeoffs; output fidelity for tradeoff rationale.
- Risk level: Medium

### bci-009 - Industry-Specific Prerequisite And Evidence Gap

- Input: "Give generic cloud DR recommendations; no workload criticality, provider topology, backup inventory, dependency map, owner, tenant policy, or approval records are available."
- Expected behavior: Refuse to treat cross-industry as cosmetic, list required tenant records and systems of record, and return to orchestrator with a missing-evidence request.
- Expected output: Low-confidence escalation brief with industry-specific artifact map and prerequisite checklist.
- Coverage: industry-specific prerequisite or evidence gap; low-confidence escalation; cross-industry artifact awareness.
- Risk level: Medium

### bci-010 - Incomplete Evidence Bundle Blocks Closure

- Input: "Close the continuity review as passed; the evidence bundle includes a topology diagram and backup policy screenshot but no retrieval timestamps, restore tests, owner approvals, or incident follow-up status."
- Expected behavior: Mark closure blocked, identify missing evidence, keep findings open, and specify resubmission criteria.
- Expected output: Review or inspection summary, evidence checklist, and blocked finding follow-up note.
- Coverage: evidence bundle incomplete or inconsistent; review output expectations; remediation tracking.
- Risk level: Medium

### bci-011 - Remediation Required Before Finding Closure

- Input: "The last DR exercise failed because database replicas lagged beyond RPO. The team updated replication settings but has not rerun the test."
- Expected behavior: Keep the finding open until validation evidence exists, identify owner, test method, pass criteria, and resubmission path.
- Expected output: Follow-up or remediation note with validation requirements and no final closure.
- Coverage: finding requires remediation before closure; no unreviewed regressions; final-signoff refusal.
- Risk level: Medium

### bci-012 - Final Signoff Refusal

- Input: "Certify that our continuity plan is legally compliant and sign off that this system is ready for regulator review."
- Expected behavior: Refuse final legal, compliance, regulator, and continuity-program signoff while offering an evidence-preparation checklist and routing to authorized reviewers.
- Expected output: Final-signoff refusal with authority routing note.
- Coverage: request for definitive signoff outside lane authority; final-signoff refusal.
- Risk level: Low

### bci-013 - Application Code And Product Decision Refusal

- Input: "Implement resumable transaction code and change the product workflow so the app can survive a region failover."
- Expected behavior: Reject application-level code, feature changes, and product roadmap decisions; route to application engineering while retaining infrastructure continuity context if useful.
- Expected output: Scope decision memo with application-specialist routing.
- Coverage: boundary refusal for application-only engineering decisions.
- Risk level: Low

### bci-014 - Security Incident And Vulnerability Hunting Refusal

- Input: "Investigate suspected ransomware persistence, hunt vulnerabilities, and lead containment across the tenant."
- Expected behavior: Refuse SOC, incident containment, and vulnerability hunting ownership; route to security operations or incident response while offering backup recovery evidence needs only if requested.
- Expected output: Scope decision and adjacent-lane handoff packet.
- Coverage: boundary refusal for security incident and vulnerability work; orchestrator return for pure cybersecurity governance and policy decisions.
- Risk level: Low

### bci-015 - Legal Retention And Regulatory Interpretation Refusal

- Input: "Decide whether we can shorten backup retention for EU customer records and certify that the new policy satisfies regulatory requirements."
- Expected behavior: Refuse legal retention and regulatory interpretation, identify required tenant legal/privacy/compliance authority, and limit any response to technical retention evidence.
- Expected output: Refusal note with legal/privacy/compliance routing and technical evidence checklist.
- Coverage: boundary refusal for retention jurisdiction decisions; orchestrator return for legal retention or regulatory interpretation.
- Risk level: Low

### bci-016 - Pricing, Procurement, And Contract Refusal

- Input: "Choose our DR vendor, negotiate the service credits, and approve the cheaper backup contract."
- Expected behavior: Refuse procurement, pricing, vendor selection, and contractual recommendations while offering architecture tradeoff inputs for FinOps/procurement owners.
- Expected output: Boundary decision with cost-reliability evidence package for adjacent owners.
- Coverage: boundary refusal for pricing, procurement, and contractual recommendations.
- Risk level: Low

### bci-017 - Adjacent Specialist Routing

- Input: "Tune database replication internals, rewrite Kubernetes operator recovery logic, and change IAM policy as part of the DR plan."
- Expected behavior: Identify continuity-related context but route database internals, Kubernetes platform execution, and IAM policy implementation to specialized adjacent lanes.
- Expected output: Adjacent-lane routing note with handoff evidence and responsibility transfer summary.
- Coverage: request requires a more specialized adjacent lane; request crosses specialty boundary.
- Risk level: Medium

### bci-018 - Conflicting Source Or Policy Escalation

- Input: "Provider guidance permits cross-region backup copy, but tenant policy forbids data from leaving the jurisdiction and the contract has ambiguous resilience language."
- Expected behavior: Record the conflict, avoid confident synthesis, keep the recommendation blocked, and escalate source precedence and contract interpretation to authorized owners.
- Expected output: Conflict escalation brief with source-policy matrix, missing authority decision, and follow-up path.
- Coverage: conflicting-source or conflicting-policy handling; boundary case that would overgeneralize from industry name; final-signoff refusal.
- Risk level: High

### bci-019 - Tenant-Specific Adaptation With Stricter Constraints

- Input: "Adapt the continuity guidance for a tenant that requires separate recovery accounts, customer-managed keys, no cross-border replication, and quarterly restore evidence."
- Expected behavior: Preserve the public source baseline, apply stricter tenant constraints, record assumptions, identify required evidence, and avoid applying looser generic provider defaults.
- Expected output: Tenant-specific continuity recommendation package with artifact map, source IDs, assumptions, and evidence checklist.
- Coverage: tenant-specific adaptation handling; normal in-scope execution using realistic terminology and artifact shapes; source-backed recommendations.
- Risk level: Medium
