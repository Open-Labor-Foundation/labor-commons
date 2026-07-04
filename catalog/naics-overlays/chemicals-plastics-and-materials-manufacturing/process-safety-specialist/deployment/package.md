# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route process-safety work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant EHS, asset, CMMS, work-order, permit, inspection, laboratory, incident, and regulatory-reporting connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for EHS, asset management, CMMS, work-order, inspection, permit-tracking, laboratory, incident-management, and regulatory-reporting systems
  - escalation targets for EHS, maintenance, field operations, engineer-of-record, regulatory-reporting, legal, emergency-response, and plant leadership owners
  - tenant-specific maps for covered processes, threshold assumptions, approval boundaries, permit-to-work rules, impairment handling, startup authorization, emergency-response roles, and signoff requirements

## Isolation

- Tenant boundary: no cross-tenant sharing of process inventories, PSI, PHA outputs, MOC records, proof-test data, work permits, incident files, audit reports, regulator correspondence, or emergency-response plans.
- Knowledge boundary: OSHA and EPA public baselines are shared; tenant covered-process lists, inventory thresholds, RAGAGEP basis files, work permits, shutdown rules, and approval maps are injected only at request time.
- Adaptation policy:
  - allowed: terminology, facility names, system connectors, record locations, startup workflows, approval routing, and tenant-specific stricter controls
  - prohibited: widening the lane into engineering design approval, emergency command, regulator representation, legal signoff, or final startup release authority

## Operations

- Monitoring:
  - log dispatch decisions, hold and release recommendations, threshold blockers, field-condition escalations, incident escalations, and boundary-safe refusals
  - alert on stale source reviews, repeated missing threshold data, overdue audit closure, repeated interlock or alarm impairments, and repeated attempts to bypass permit or startup controls
  - monitor for requests that incorrectly seek engineering approval, regulator-facing certification, emergency command, or final release authority from the lane
- Logging:
  - record release version, tenant assumptions, facility and process context, threshold posture, missing evidence, routed owners, and whether the request involved startup, return to service, incident review, or emergency-response implications
  - record whether source or policy conflicts existed and whether the work escalated because of changed field conditions or authority boundaries
- Rollback path:
  - disable the current specialist release
  - route process-safety requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry chemicals-plastics-and-materials-manufacturing --agent process-safety-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed chemicals-sector process-safety specialist for threshold-aware applicability posture, startup and hold handling, catastrophic-release-risk escalation, and incident or audit evidence packaging.
- Materialization requirements for `commons-crew`:
  - task metadata identifying facility, covered process, chemical or material family, requested disposition, startup or maintenance context, and incident or release posture
  - boundary metadata identifying EHS, maintenance, field operations, engineer-of-record, regulatory-reporting, legal, emergency-response, and plant leadership owners
  - retrieval dependencies for EHS, CMMS, asset, work-order, permit, inspection, document-control, laboratory, and incident systems plus regulator-reporting repositories
  - tenant overlays for covered-process inventories, threshold assumptions, startup authority, permit-to-work rules, safeguard-impairment rules, emergency-response command structure, and signoff boundaries
- Regulated-lane caveats:
  - public OSHA and EPA sources define the baseline, but tenant legal guidance and facility-specific covered-process determinations still control case-specific applicability and reporting actions
  - runtime must refuse or return to orchestrator when engineering design authority, emergency command, regulator-facing reporting, legal interpretation, or final startup approval is required
  - runtime must return to orchestrator when threshold quantities, interconnected-process logic, or field conditions are missing or disputed enough to change the answer
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
