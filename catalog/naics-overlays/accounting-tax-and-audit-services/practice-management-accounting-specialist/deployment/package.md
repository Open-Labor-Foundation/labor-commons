# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route accounting-practice workload planning into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - client roster, recurring-service catalog, engagement letters, service-level commitments, and client-priority rules
  - close calendars, close checklists, delivery dates, PBC trackers, document-request status, and reporting-package readiness
  - workpaper indexes, reconciliation inventories, bank-feed support, GL and ERP workflow records, review notes, and exception logs
  - practice-management queues, preparer and reviewer assignments, partner queue, availability calendars, staffing plans, and capacity reports
  - timekeeping, billing, WIP, realization, utilization, and resource-planning systems
  - confidentiality rules, client consent records, third-party sharing approvals, document-access controls, and retention requirements
  - approval matrix, overtime posture, fee or write-off authority, scope-change process, quality-review gates, and escalation routing rules
- Escalation routing targets for:
  - engagement partner or client-service owner
  - client accounting services or bookkeeping owner
  - accounting advisory or technical accounting owner
  - tax operations or tax resolution owner
  - legal or contracts owner
  - assurance or audit engagement owner
  - quality assurance or delivery management owner
  - account or client-success owner where client commitments change

## Isolation and Adaptation

- Tenant data isolation: client, workpaper, financial, staffing, billing, confidentiality, and engagement records are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: service model, engagement terms, client tiers, close-calendar taxonomy, client consent, retention rules, approval matrix, scope-change process, and system-of-record mappings.
- Allowed adaptation:
  - terminology and role names
  - close-calendar structure and client tiering
  - practice-management fields and workflow states
  - retrieval hooks and artifact shapes
  - tie-break rules, service levels, reviewer queues, and approval thresholds
- Prohibited adaptation:
  - widening into tax advice, legal advice, accounting-policy judgment, audit opinion, compilation, review, filing, contract change, confidentiality exception, billing approval, realization approval, partner approval, or final staffing authority.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, planning horizon, close period, client set, engagement scope, requested date, and requested decision surface
  - boundary metadata defining confidentiality, client consent, professional judgment, engagement scope, quality review, billing, realization, tax, legal, audit, assurance, partner approval, and final approval limits
  - retrieval wiring for practice management, close management, ERP, GL, reconciliation, workpaper, document-management, scheduling, timekeeping, billing, resource-planning, quality-review, policy, and engagement systems
  - tenant-supplied assumptions for service model, client tiers, priority rules, close calendars, offshore or third-party sharing policy, approval thresholds, and escalation matrix
  - refusal rules that trigger orchestrator return when authority, evidence, confidentiality, engagement scope, or source context is incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant, jurisdiction, engagement, and client-consent rules
  - state board, IRS, PCAOB, AICPA, contract, and client-specific obligations can vary materially by service line and engagement scope
  - the runtime must never convert a planning recommendation into licensed professional judgment, tax advice, legal advice, attestation conclusion, filing approval, contract action, confidentiality exception, billing approval, or final approval

## Operations

- Logging requirements:
  - schedule and allocation recommendations with tradeoff rationale
  - blocker and dependency records
  - refusal or escalation events for engagement scope, confidentiality, workpaper evidence, quality review, client commitments, professional judgment, tax, legal, audit, billing, realization, final approval, and tie-break gaps
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - repeated attempts to plan without engagement, workpaper, client-document, or reviewer prerequisites
  - capacity overload, late client records, and reviewer or partner bottleneck patterns
  - repeated missing tie-break-rule or client-priority cases
  - attempts to force final approval, tax, legal, advisory, assurance, contract, billing, realization, or confidentiality-exception authority into the lane

## Rollback

- Disable the specialist release in orchestrator.
- Route accounting-practice planning traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve allocation recommendations, constraint logs, approval-required tradeoff notes, and escalation packets for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for accounting-practice workload planning when tenant policy and retrieval wiring are injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
