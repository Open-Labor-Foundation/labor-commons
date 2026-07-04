# Deployment Package

## Runtime Model

- Target runtime: `commons-crew` or equivalent orchestrator that routes this specification-based specialist from queue context.
- Deployment form: versioned spec-pack artifact bundle with immutable manifest, scenarios, functionality map, research summary, results, readiness evidence, readiness release notes, deployment notes.
- Required secrets: none in the package itself; tenant policy and source-access credentials remain orchestrator-controlled.

## Required Configuration

- release version
- source refresh policy and review cadence
- retrieval connectors for:
  - ERP, MES, or historian records used in metric denominators and production context
  - EHS, permit-tracking, and regulatory reporting systems
  - CMMS or EAM work-order, downtime, calibration, and asset-condition records
  - laboratory or LIMS sampling records and certificates
  - incident-management and corrective-action systems
- escalation target mapping for EHS, maintenance, field operations, engineer-of-record, and regulatory-reporting owners
- tenant-specific authority matrices for publication approval, permit ownership, disclosure routing, and field-risk escalation

## Tenant Isolation and Adaptation

- Tenant boundary: no cross-tenant sharing of permit files, inspection history, sample results, incident logs, maintenance records, or disclosure notes.
- Knowledge boundary: public regulator and standards references remain shared, while tenant permits, thresholds, metric dictionaries, approval maps, and retrieval hooks are injected at request time.
- Allowed adaptation: terminology, facility and asset topology, metric dictionary overlays, reporting cadence, permit mapping, and escalation targets.
- Prohibited adaptation: extending to engineering or safety signoff, permit interpretation or modification, regulator-facing certification, return-to-service approval, or disclosure signoff authority.

## Materialization Notes for `commons-crew`

- Required task metadata:
  - lane slug, release version, reporting cadence, facility and jurisdiction context, permit scope, asset scope, audience, and requested output shape
- Required boundary metadata:
  - approval matrix, adjacent specialist routing map, permit owner map, and escalation owners for EHS, maintenance, engineering, and reporting
- Required runtime assumptions:
  - controlling permits, threshold applicability, metric dictionary, systems of record, retrieval hooks, and current field-condition signals must be tenant-supplied or retrieved
- Regulated-lane caveats:
  - public sources define the baseline but exact permit terms, reportable metrics, state-specific forms, and local jurisdiction overlays remain tenant-specific
- Conditions requiring refusal or orchestrator return:
  - missing tenant facts or authoritative records that would change the outcome
  - requests for engineering or safety signoff, legal interpretation, permit modification, regulatory certification, or external disclosure approval
  - conflicting permits, public sources, or tenant policies that materially change the safe analytical posture

## Operations

- Monitoring:
  - low-confidence escalations caused by stale permit, sampling, calibration, maintenance, or incident records
  - recurring cross-system metric conflicts with no published source precedence
  - repeated field-risk escalations triggered by inspection findings, abnormal observations, or asset-condition changes
- Logging:
  - request ID, facility context, inputs used, missing artifact list, assumptions, confidence posture, and escalation targets
  - whether output was descriptive analysis, refusal, blocked-on-prerequisites, or escalation
- Alert triggers:
  - repeated requests to certify external disclosures or grant engineering or safety signoff
  - repeated reporting requests attempted without current permit or inspection evidence
  - repeated conflicts between tenant SOPs and public or permit baselines

## Rollback and Recovery

- Disable the specialist release in orchestrator config.
- Route affected scenarios to a safe fallback policy that requires human routing decisions.
- Restore the prior validated manifest bundle.
- Re-run package audit and package verification before re-enabling.

## Deployment Notes

- Runtime remains `specification-based` and does not claim engineering, environmental, safety, maintenance-release, or disclosure authority.
- Health checks should confirm artifact presence, YAML and JSON parseability, required scenario counts, and refresh-policy compliance.
