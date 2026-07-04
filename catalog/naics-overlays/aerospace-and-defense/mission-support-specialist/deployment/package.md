# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime execution target: `commons-crew`
- Runtime promotion condition: 

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit aerospace and defense mission-support boundaries, refusal triggers, adjacent-lane routing, source baseline, and regulated-lane caveats.
- `evaluation/functionality-map.json` containing complete `service-support-and-resolution` and `manufacturing-and-supply-chain` ability coverage.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow-stage mapping, artifacts, systems of record, decision boundaries, domain failure modes, and ambiguity handling.
- `evaluation/results.json` with scenario results, pass rate, ability count, and functionality coverage status.
- `readiness/evidence.json` and `readiness/release.md` with gates, review artifacts, human verification, deployment readiness evidence.

### Runtime Assumptions

- Tenant provides jurisdiction, customer, contract, program, business unit, facility, plant, line, product family, configuration, effectivity, lot, batch, serial, supplier, mission readiness state, and service-level context.
- Tenant maintains identifiable systems of record for CRM or service requests, ERP, MES, WMS, QMS, supplier management, planning, logistics, inventory traceability, document control, nonconformance, MRB, CAPA, change control, and customer or government acceptance.
- Tenant defines approval owners for release, quality holds, MRB, engineering disposition, supplier substitution, source approval, procurement, logistics, security, safety, contracts, customer acceptance, and financial or policy exceptions.
- Tenant supplies current policy overlays for mission-support intake, stakeholder communication, service levels, escalation thresholds, customer flowdowns, security and export controls, release authority, quality hold rules, substitution constraints, rework constraints, and exception handling.

### Required Retrieval Dependencies

- Product identifier crosswalk, program or mission context, lot or serial genealogy, configuration and effectivity records, production order, traveler, router, and MES completion state.
- Inventory state, WMS location, kitting status, shelf-life or life-limited part status, logistics milestones, shipping holds, DD250 or WAWF acceptance context when applicable.
- QMS hold status, NCR, MRB disposition, CAPA status, FAI evidence, release record, deviation or waiver request, change-control state, and customer flowdown records.
- Supplier CAGE code, approved supplier status, certificates of conformance, source inspection evidence, SCARs, supplier nonconformance records, and substitution or alternate-source requests.
- Tenant authority and escalation matrix for quality, production planning, inventory, procurement, supplier quality, logistics, engineering, security, contracts, safety, customer acceptance, and human review.

### Refusal and Return Conditions

- Missing tenant facts, record locations, systems-of-record access, source context, program context, facility context, lot or serial records, supplier records, release authority, or service-level commitments that would change the outcome.
- Incomplete or conflicting production, inventory, supplier, quality, release, logistics, acceptance, security, or policy evidence.
- Public source, tenant policy, customer flowdown, contract, quality hold, release, or source-of-truth conflict that materially alters the answer.
- Requests for legal interpretation, regulator negotiation, engineering signoff, MRB disposition, supplier approval, source change, quality hold release, customer or government acceptance, security exception, safety-critical decision, or financial approval.
- Requests to certify mission readiness when traceability, release, hold, supplier, quality, logistics, or acceptance evidence is incomplete or contradictory.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind mission-support queue controls with explicit evidence-owner, blocker, authority, and next-action output on every request.
- Require tenant-level allow-lists so the lane cannot execute outside service intake, readiness and blocker summaries, stakeholder communication, traceability-aware analysis, and escalation packaging.
- Ensure every output references named evidence artifacts, current source-of-truth status, owner, retrieval timestamp when available, and controlling program, facility, product, lot, serial, supplier, release, or logistics context.
- Keep enhanced validation checkpoints for the first 14 sessions in a new tenant, program, facility, product family, customer, or mission-support model.

### Monitoring and Regression Controls

- Track:
  - missing program, lot, serial, supplier, release, or service-level evidence escalations
  - ERP, MES, WMS, QMS, supplier, logistics, and acceptance record conflicts
  - quality hold, NCR, MRB, CAPA, FAI, release, and change-control blocker events
  - supplier substitution, source approval, and supplier nonconformance escalations
  - repeat readiness failure escalations
  - requests for engineering, release, government acceptance, security, safety, legal, contractual, or financial authority routed out of lane
- Trigger rollback review when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support for affected tenants, programs, product families, facilities, or customers.
- Preserve evidence packets, communication summaries, escalation notes, handoff packages, unresolved blockers, and ownership-transfer state for each affected request lineage.
- Re-collect program rules, customer flowdowns, source-of-truth mappings, authority matrices, security controls, release rules, supplier approval rules, and service-level constraints before re-enabling.
- Re-run package validation before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved engineering, release, supplier-approval, government-acceptance, security, safety, legal, contractual, or financial overreach incidents
  - stable evidence retrieval across CRM, ERP, MES, WMS, QMS, supplier, planning, logistics, inventory traceability, document-control, nonconformance, MRB, CAPA, change-control, and acceptance systems
  - explicit governance review with mission support, quality, production planning, inventory, procurement, supplier quality, logistics, engineering, security, contracts, safety, and legal stakeholders
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.
