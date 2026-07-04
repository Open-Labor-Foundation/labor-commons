# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route cannabis-operations work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant point-of-sale, ecommerce, ID-verification, traceability, dispatch, inventory, recall, and incident connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for CCTT or Metrc, point-of-sale, ecommerce, ID-verification, dispatch, inventory, recall, and incident systems
  - escalation targets for dispensary operations, retail patient services, controlled inventory, seed-to-sale compliance, cannabis quality, finance, and management approvers
  - tenant-specific maps for local operating hours, adult-use versus medicinal handling, purchase-limit logic, substitution policy, failed-delivery disposition, return-to-inventory rules, and delegated authority for inventory or compliance actions

## Isolation

- Tenant boundary: no cross-tenant sharing of orders, package records, manifests, ledgers, patient or customer verification records, recall investigations, or site SOPs.
- Knowledge boundary: DCC, CPSC, and Metrc public baselines are shared; tenant SOPs, local ordinances, connector details, purchase-limit matrices, and authority maps are injected only at request time.
- Adaptation policy:
  - allowed: terminology, business-unit names, connector mappings, queue names, microbusiness versus retailer framing, and escalation routing
  - prohibited: widening the lane into medical advice, legal interpretation, transfer approval, inventory write-off, release of recalled or quarantined goods, or seed-to-sale compliance signoff authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked closures, package mismatches, recall-stop cases, failed deliveries, returned-to-inventory events, and low-confidence returns
  - alert on stale source reviews, repeated package UID mismatches, repeated unsupported completion attempts, repeated recall or hold escalations, and repeated state-versus-local rule conflicts
  - monitor for requests that incorrectly seek medical, legal, inventory, or compliance authority from the lane
- Logging:
  - record release version, tenant assumptions, jurisdiction and license context, order and package identifiers, missing evidence, and routed owners
  - record whether the request involved pickup readiness, active delivery execution, package mismatch, recall stop condition, unsupported completion, inventory handoff, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route cannabis-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry cannabis-and-controlled-substance-operations --agent cannabis-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed cannabis operations specialist for package-controlled fulfillment, delivery-ledger handling, recall-aware execution, manifest-sensitive exception control, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying jurisdiction, license type, order channel, customer or patient state, requested disposition, package count, and timing constraint
  - boundary metadata identifying dispensary operations, patient services, controlled inventory, compliance, quality, and approval owners
  - retrieval dependencies for CCTT or Metrc, point-of-sale, ecommerce, ID-verification, dispatch, inventory, recall, and incident logs
  - tenant overlays for local-rule logic, purchase limits, patient-handling rules, substitution authority, return-to-inventory rules, recall playbooks, and cash or failed-delivery escalation policy
- Regulated-lane caveats:
  - public DCC guidance directly constrains cannabis retail and delivery workflows but does not replace state-specific law outside California, local ordinances, or tenant operating policies
  - public packaging guidance and CPSC child-resistant standards constrain release posture but do not delegate packaging certification or quality signoff authority to the lane
  - Metrc workflow references define traceability-system steps but do not delegate transfer approval or compliance authority beyond the actual system permissions and tenant role map
  - runtime must refuse or return to orchestrator when medical advice, legal interpretation, inventory adjustments, quality release, or compliance signoff authority is required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
