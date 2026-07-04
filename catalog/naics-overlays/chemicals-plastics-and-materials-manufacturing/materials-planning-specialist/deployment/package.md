# Deployment Package

## Runtime Model

- Target runtime: `commons-crew` or equivalent orchestrator that routes this specification-based specialist from queue context.
- Deployment form: versioned spec-pack artifact bundle with immutable manifest, scenarios, functionality map, research summary, results, readiness evidence, readiness release notes, deployment notes.
- Required secrets: none in the package itself; tenant policy and source-access credentials remain orchestrator-controlled.

## Required Configuration

- release version
- source refresh policy and review cadence
- retrieval connectors for:
  - ERP or MRP planning records
  - APS or scheduling records
  - EHS, permit-tracking, and environmental reporting systems
  - CMMS or EAM work-order, calibration, and asset-condition records
  - laboratory or LIMS sampling records
  - incident-management and corrective-action systems
- escalation target mapping for EHS, maintenance, field operations, engineer-of-record, and regulatory-reporting owners
- tenant-specific authority matrices for tie-break rules, permit ownership, approval routing, and field-risk escalation

## Tenant Isolation and Adaptation

- Tenant boundary: no cross-tenant sharing of planning records, permit files, inspection history, incident logs, or escalation notes.
- Knowledge boundary: public regulator and standards references remain shared, while tenant permits, thresholds, approval maps, and retrieval hooks are injected at request time.
- Allowed adaptation: terminology, plant topology, product-family vocabulary, planning horizon, tie-break policy, permit mapping, and escalation targets.
- Prohibited adaptation: extending to final approval, engineering or safety signoff, permit interpretation or modification, regulatory certification, or field execution authority.

## Materialization Notes for `commons-crew`

- Required task metadata:
  - lane slug, release version, planning horizon, facility and jurisdiction context, product family, and requested output shape
- Required boundary metadata:
  - approval matrix, adjacent specialist routing map, permit owner map, and escalation owners for EHS, maintenance, engineering, and reporting
- Required runtime assumptions:
  - controlling permits, threshold applicability, current systems of record, facility asset map, and current field-condition or outage signals must be tenant-supplied or retrieved
- Regulated-lane caveats:
  - public sources define the baseline but exact permit terms, regulated substances, and local jurisdiction overlays remain tenant-specific
- Conditions requiring refusal or orchestrator return:
  - missing tenant facts or authoritative records that would change the outcome
  - requests for final approval, engineering or safety signoff, legal interpretation, permit modification, or regulatory certification
  - conflicting permits, public sources, or tenant policies that materially change the safe recommendation

## Operations

- Monitoring:
  - low-confidence escalations caused by stale permit, sampling, calibration, or incident records
  - recurring capacity conflicts with no published tie-break policy
  - repeated field-risk escalations triggered by asset-condition or inspection findings
- Logging:
  - request ID, facility context, inputs used, missing artifact list, assumptions, and escalation targets
  - whether output was recommendation-only or refusal or escalation
- Alert triggers:
  - repeated requests to grant final approval or engineering or safety signoff
  - repeated schedule changes attempted without current permit or inspection evidence
  - repeated conflicts between tenant SOPs and public or permit baselines

## Rollback and Recovery

- Disable the specialist release in orchestrator config.
- Route affected scenarios to a safe fallback policy that requires human routing decisions.
- Restore the prior validated manifest bundle.
- Re-run package audit and catalog validation before re-enabling.

## Deployment Notes

- Runtime remains `specification-based` and does not claim final production, engineering, environmental, safety, or execution authority.
- Health checks should confirm artifact presence, YAML and JSON parseability, required scenario counts, and refresh-policy compliance.
