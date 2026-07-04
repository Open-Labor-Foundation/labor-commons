# Deployment Package

## Runtime Model

- Target runtime: `commons-crew` or equivalent orchestrator that routes this specification-based specialist from queue context.
- Deployment form: versioned spec-pack artifact bundle with immutable manifest, scenarios, functionality map, research summary, results, readiness evidence, readiness release notes, deployment notes.
- Required secrets: none in the package itself; tenant policy and system-access credentials remain orchestrator-controlled.

## Required Configuration

- release version
- source refresh policy and review cadence
- retrieval connectors for:
  - ERP, MRP, or APS planning records
  - MES production orders, travelers, routing, and execution status
  - WMS inventory allocation and kit readiness records
  - QMS hold, release, inspection, nonconformance, MRB, deviation, waiver, and first-article records
  - PLM or configuration-management effectivity records
  - supplier-management, source-inspection, certificate, and inbound-status records
  - logistics planning or execution records
  - contract, customer-priority, or DPAS-rated order context where tenant policy allows retrieval
- escalation target mapping for quality, engineering, supplier-quality, inventory, procurement, logistics, program, contract, and manufacturing-operations owners
- tenant-specific authority matrices for tie-break rules, release ownership, MRB routing, engineering-change ownership, substitution routing, rework limits, service-level tradeoff approval, and DPAS or contractual-priority escalation

## Tenant Isolation and Adaptation

- Tenant boundary: no cross-tenant sharing of planning records, serial or lot traceability, production travelers, quality holds, supplier files, contract-priority records, or escalation notes.
- Knowledge boundary: public FAA, eCFR, NIST, DAU, IAQG, and NASA references remain shared, while tenant SOPs, release matrices, tie-break logic, customer commitments, customer flowdowns, and retrieval hooks are injected at request time.
- Allowed adaptation: terminology, plant and work-center topology, program vocabulary, product-family vocabulary, planning horizon, service-level rules, effectivity conventions, DPAS escalation routing, and escalation targets.
- Prohibited adaptation: extending to final approval, quality release, engineering disposition, supplier approval, legal interpretation, contract interpretation, airworthiness signoff, or procurement, logistics, warehouse, and live execution authority.

## Materialization Notes For `commons-crew`

- Required task metadata:
  - lane slug, release version, planning horizon, facility context, program or product family, work-center scope, lot or serial scope, and requested output shape
- Required boundary metadata:
  - approval matrix, adjacent specialist routing map, release-owner map, MRB and engineering-disposition owner map, supplier-approval owner map, DPAS or contractual-priority escalation owner, and escalation owners for quality, supplier-quality, inventory, procurement, logistics, program, contract, and operations
- Required runtime assumptions:
  - current systems of record, authoritative serial or lot-status repository, release and hold rules, tie-break policy, configuration-effectivity policy, supplier-substitution rules, and current service commitments must be tenant-supplied or retrieved
- Regulated-lane caveats:
  - public sources define the baseline but exact product scope, certification basis, customer specifications, contract flowdowns, release criteria, and facility SOPs remain tenant-specific
  - DPAS or contractual priority questions require authorized tenant or government-owner interpretation when the rule is not already encoded in approved tenant policy
- Conditions requiring refusal or orchestrator return:
  - missing tenant facts or authoritative records that would change the outcome
  - requests for final approval, release approval, airworthiness approval, engineering disposition, supplier approval, legal or contract interpretation, DPAS interpretation, or execution ownership
  - conflicting public sources, customer flowdowns, contract terms, or tenant policies that materially change the safe recommendation

## Operations

- Monitoring:
  - low-confidence escalations caused by stale serial, lot, release, supplier, configuration, or priority records
  - recurring capacity conflicts with no published tie-break policy
  - repeated traceability conflicts across ERP, APS, MES, WMS, QMS, PLM, and supplier systems
  - repeated attempts to schedule held, unreleased, nonconforming, or uneffectified material
- Logging:
  - request ID, facility and program context, inputs used, missing artifact list, assumptions, source set, and escalation targets
  - whether output was recommendation-only, refusal, or escalation
- Alert triggers:
  - repeated requests to grant final approval, release authority, airworthiness signoff, engineering disposition, supplier approval, or DPAS interpretation
  - repeated schedule changes attempted with held, unreleased, traceability-conflicted, or nonconforming inventory
  - repeated conflicts between tenant SOPs, customer flowdowns, and public-baseline release or priority posture

## Rollback and Recovery

- Disable the specialist release in orchestrator config.
- Route affected scenarios to a safe fallback policy that requires human routing decisions.
- Restore the prior validated manifest bundle.
- Re-run package audit and catalog validation before re-enabling.

## Deployment Notes

- Runtime remains `specification-based` and does not claim final production, quality-release, supplier-approval, engineering-disposition, airworthiness, DPAS-interpretation, or execution authority.
- Health checks should confirm artifact presence, YAML and JSON parseability, required scenario counts, scenario-to-ability coverage, research-pack completeness, and refresh-policy compliance.
