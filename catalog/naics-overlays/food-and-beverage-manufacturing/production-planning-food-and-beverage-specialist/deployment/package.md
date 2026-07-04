# Deployment Package

## Runtime Model

- Target runtime: `commons-crew` or equivalent orchestrator that routes this specification-based specialist from queue context.
- Deployment form: versioned spec-pack artifact bundle with immutable manifest, scenarios, functionality map, research summary, results, readiness evidence, readiness release notes, deployment notes.
- Required secrets: none in the package itself; tenant policy and system-access credentials remain orchestrator-controlled.

## Required Configuration

- release version
- source refresh policy and review cadence
- retrieval connectors for:
  - ERP or MRP planning records
  - APS or scheduling records
  - MES, WMS, and traceability repositories
  - QMS release, hold, nonconformance, and deviation records
  - supplier-management and inbound-status records
  - logistics planning or execution records
- escalation target mapping for quality, food safety, inventory, procurement, supplier-quality, logistics, and manufacturing-operations owners
- tenant-specific authority matrices for tie-break rules, release ownership, substitution routing, rework limits, and service-level tradeoff approval

## Tenant Isolation and Adaptation

- Tenant boundary: no cross-tenant sharing of planning records, lot and batch files, quality holds, supplier files, traceability logs, or escalation notes.
- Knowledge boundary: public FDA, eCFR, NIST, APQC, GS1, and SQFI references remain shared, while tenant SOPs, release matrices, tie-break logic, customer commitments, and retrieval hooks are injected at request time.
- Allowed adaptation: terminology, plant and line topology, product-family vocabulary, planning horizon, service-level rules, FEFO conventions, and escalation targets.
- Prohibited adaptation: extending to final approval, quality release, supplier approval, legal interpretation, or procurement, logistics, and live execution authority.

## Materialization Notes For `commons-crew`

- Required task metadata:
  - lane slug, release version, planning horizon, plant and line context, product family, and requested output shape
- Required boundary metadata:
  - approval matrix, adjacent specialist routing map, release-owner map, and escalation owners for quality, supplier-quality, inventory, procurement, logistics, and operations
- Required runtime assumptions:
  - current systems of record, authoritative lot-status repository, release and hold rules, tie-break policy, shelf-life or FEFO conventions, and current service commitments must be tenant-supplied or retrieved
- Regulated-lane caveats:
  - public sources define the baseline but exact product scope, customer specifications, release criteria, and facility SOPs remain tenant-specific
- Conditions requiring refusal or orchestrator return:
  - missing tenant facts or authoritative records that would change the outcome
  - requests for final approval, release approval, supplier approval, legal interpretation, or execution ownership
  - conflicting public sources or tenant policies that materially change the safe recommendation

## Operations

- Monitoring:
  - low-confidence escalations caused by stale lot, release, or supplier records
  - recurring capacity conflicts with no published tie-break policy
  - repeated traceability conflicts across ERP, APS, MES, WMS, and QMS
- Logging:
  - request ID, plant context, inputs used, missing artifact list, assumptions, and escalation targets
  - whether output was recommendation-only or refusal or escalation
- Alert triggers:
  - repeated requests to grant final approval or quality-release authority
  - repeated schedule changes attempted with held or unreleased inventory
  - repeated conflicts between tenant SOPs and public-baseline release or recall posture

## Rollback and Recovery

- Disable the specialist release in orchestrator config.
- Route affected scenarios to a safe fallback policy that requires human routing decisions.
- Restore the prior validated manifest bundle.
- Re-run package audit and catalog validation before re-enabling.

## Deployment Notes

- Runtime remains `specification-based` and does not claim final production, quality-release, supplier-approval, or execution authority.
- Health checks should confirm artifact presence, YAML and JSON parseability, required scenario counts, and refresh-policy compliance.
