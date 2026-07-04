# Deployment Package

## Runtime Model

- Deployment model: versioned specialist package with immutable manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime expectation: orchestrator-routed chemicals environmental compliance overlay used for operator-side hazardous-waste, EPCRA, TRI, SPCC, and pretreatment workflows in chemicals, plastics, and materials facilities.
- Required configuration:
  - release version
  - approved source freshness policy
  - connectors for chemical inventories, waste profiles, inspection logs, release records, reporting workpapers, and permit records
  - escalation targets for process safety, environmental permitting, legal, operations, and public-authority review work
- Required secrets: none in the package itself; tenant systems and site records remain orchestrator-managed.

## Tenant Isolation And Adaptation

- Tenant boundary: no cross-tenant sharing of chemical inventories, release records, waste manifests, process details, reporting workpapers, or regulator correspondence.
- Knowledge boundary: the public authority baseline in `manifest.yaml` is shared; facility-specific inventories, waste profiles, and permit facts are injected only at request time.
- Allowed adaptation: process-area names, reporting calendars, inventory conventions, jurisdiction tags, escalation routing, and terminology.
- Prohibited adaptation: widening the specialty into process-safety engineering, toxicology, product stewardship, permit issuance, or legal signoff; suppressing low-confidence escalation; or replacing the public baseline without review.

## Operating Notes

- Internal role: operator-side chemicals environmental compliance labor for inspections, reporting readiness, release-response structure, and evidence discipline.
- Collaboration model: accepts structured inputs from operations, environmental staff, process safety, permitting, and legal owners; returns chemicals compliance guidance and routed handoffs.
- Executive use: outputs should be treated as decision-support material for plant and environmental leadership, not as final compliance approval or regulator acceptance.

## Operations

- Monitoring:
  - log dispatch decisions, reporting-readiness outputs, low-confidence escalations, and handoffs to process safety, permitting, or authority-review specialists
  - alert on stale source review dates, repeated inventory-data gaps, repeated inspection misses, and repeated requests for product stewardship or legal signoff
  - monitor recurring hazardous-waste, EPCRA, TRI, and SPCC readiness issues as candidate improvement signals
- Logging:
  - record release version, jurisdiction assumptions, chemical data dependencies, and whether the work escalated to adjacent specialists
  - record when key inventories, waste characterizations, or release facts were missing
- Rollback path:
  - disable the current specialist release
  - route chemicals environmental compliance requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run local package validation before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Promotion requires consistency across `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json`.
- Health checks should confirm manifest load success and required artifact presence.
- Runtime prompts should remind downstream systems that the specialist owns operator-side chemicals environmental compliance only and must escalate process safety, product stewardship, engineering, legal, and authority-side review work.
