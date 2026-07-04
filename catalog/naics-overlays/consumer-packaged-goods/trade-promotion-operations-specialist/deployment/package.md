# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route CPG trade-promotion operations work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant TPM, ERP, WMS, QMS, retailer portals, deduction systems, and document stores remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for TPM, ERP, WMS, QMS, supplier, retailer portal, and item-data systems
  - escalation targets for quality, finance, legal, supplier-quality, logistics, and customer-team owners
  - tenant-specific maps for release authority, hold rules, recall handling, proof-of-performance rules, deduction workflows, and retailer scorecard timing

## Isolation

- Tenant boundary: no cross-tenant sharing of promotion calendars, retailer claims, deductions, accruals, lot histories, hold records, recall statuses, supplier-quality files, or customer contracts.
- Knowledge boundary: FTC, FDA, eCFR, and GS1 public baselines are shared; retailer-specific deduction rules, customer agreements, release authority maps, and internal SOPs are injected only at request time.
- Adaptation policy:
  - allowed: terminology, retailer templates, event calendars, scorecard windows, systems-of-record connectors, and customer-specific closeout checklists
  - prohibited: widening the lane into legal interpretation, final spend approval, recall-close authority, final quality release, or unsupported supplier substitution approval

## Operations

- Monitoring:
  - log dispatch decisions, blocked promotions, hold and recall escalations, deduction-support outputs, and low-confidence returns
  - alert on stale source reviews, repeated attempts to bypass quality controls for event timing, recurring retailer evidence gaps, and recurring supplier substitution requests
  - monitor for requests that incorrectly seek legal, finance-approval, or final QA authority from the lane
- Logging:
  - record release version, tenant assumptions, customer or retailer context, affected SKU and lot context, missing evidence, and routed owners
  - record whether the request involved promotion readiness, blocked shipment, deduction support, traceability conflict, recurring incident, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route CPG trade-promotion operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry consumer-packaged-goods --agent trade-promotion-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed CPG trade-promotion operations specialist for promotion readiness, blocked-event routing, retailer evidence packaging, lot-aware allocation checks, and corrective-action escalation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying retailer, event type, promotion window, SKU scope, and requested disposition
  - boundary metadata identifying legal, finance, quality, supplier-quality, and recall owners
  - retrieval dependencies for TPM, ERP, WMS, QMS, supplier records, retailer claims, and proof-of-performance artifacts
  - tenant overlays for hold rules, release authority, proof requirements, customer deductions, and closeout timing
- Regulated-lane caveats:
  - public FDA sources directly govern food CPG lines; non-food tenants must supply equivalent product-safety overlays
  - public FTC sources define commercial-law boundaries but do not replace tenant counsel
  - runtime must refuse or return to orchestrator when quality release, recall, supplier approval, or legal interpretation is required
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
