# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route grocery analytics work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant POS, ecommerce OMS, CRM, pricing, loyalty, service desk, inventory, traceability, SNAP/EBT, finance, food-safety, and loss-prevention credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for POS, ecommerce OMS, CRM, delivery-slot or pickup booking, PMS or reservation workflows where present, service desk, pricing, loyalty, coupon, inventory, product master data, traceability, SNAP/EBT tender, finance, food-safety, and loss-prevention systems
  - escalation targets for guest services, front office, pricing or revenue, fraud or loss-prevention, operations, food safety, SNAP/EBT owners, legal, and disclosure owners
  - tenant metric dictionaries, retailer calendar, category and department taxonomy, source-precedence rules, weighted-item and PLU logic, refund authority matrix, substitution policy, promo and coupon logic, recall and food-safety escalation rules, and publication approval chain

## Isolation

- Tenant boundary: no cross-tenant sharing of transactions, orders, pickup reservations, delivery slots, refunds, promotions, coupons, loyalty records, SNAP/EBT records, service tickets, traceability records, food-safety records, inventory states, loss-prevention records, or reporting outputs.
- Knowledge boundary: FDA, FTC, USDA FNS, NIST, GS1, SEC, and related public baselines are shared; tenant SOPs, metric dictionaries, pricing and appeasement limits, category rules, retailer calendar rules, SNAP/EBT procedures, recall procedures, and disclosure approval chains are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, metric-definition overlays, connector mappings, reporting templates, audience-specific output wrappers, category taxonomy, weighted-item logic, and retailer-calendar settings
  - prohibited: widening the lane into pricing authority, refund approvals, substitution decisions, SNAP/EBT determinations, fraud adjudication, food-safety disposition, recall action, or direct external disclosure signoff

## Operations

- Monitoring:
  - log metric-definition choices, denominator overrides, blocked prerequisites, source conflicts, shelf-versus-POS mismatches, online-versus-store price conflicts, coupon and loyalty caveats, refund leakage caveats, substitution caveats, shrink and spoilage caveats, traceability caveats, SNAP/EBT caveats, and food-safety or fraud escalations
  - alert on stale source reviews, repeated attempts to count reserved pickup units or recalled lots as available sellable inventory, repeated requests for unsupported causal or disclosure claims, and recurring source-precedence conflicts
  - monitor for requests that incorrectly seek direct pricing, appeasement, substitution, SNAP/EBT, fraud, food-safety, recall, or safety authority from the lane
- Logging:
  - record release version, tenant assumptions, metric definitions used, source lineage, refresh timestamps, confidence posture, channel scope, category, department, product family, and systems-of-record consulted
  - record whether the request involved ambiguous definitions, missing facts, source conflict, refund exception, pricing boundary handling, customer harm, recall, food-safety, SNAP/EBT, or fraud sensitivity
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry grocery-and-food-retail --agent grocery-analytics-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed grocery analytics specialist for metric-definition, omnichannel reporting, reconciliation packaging, and disclosure-safe caveat handling.
- Materialization requirements for `commons-crew`:
  - task metadata identifying channel, store or market scope, category, department, product family, reporting period, requested audience, and whether the request touches refunds, substitutions, SNAP/EBT, food safety, or recall-sensitive inventory
  - boundary metadata identifying guest services, front office, pricing, fraud/loss-prevention, operations, food safety, SNAP/EBT, legal, and disclosure owners
  - retrieval dependencies for POS, ecommerce OMS, CRM, delivery-slot booking, service-desk, pricing, loyalty, coupon, inventory, product master data, traceability, finance, refund, food-safety, SNAP/EBT, and loss-prevention records plus prior scorecards and metric dictionaries
  - tenant overlays for retailer calendar, source precedence, refund and appeasement rules, substitution policy, weighted-item and PLU logic, shrink and spoilage logic, recall procedures, SNAP/EBT handling limits, margin logic, and publication approval criteria
- Regulated-lane caveats:
  - public FDA, FTC, USDA FNS, NIST, GS1, and SEC sources constrain pricing, refund, order, SNAP/EBT, traceability, food-safety, recall, and disclosure posture but do not replace jurisdiction-specific or tenant-specific rules
  - runtime must refuse or return to orchestrator whenever pricing authority, refund exception approval, substitution approval, SNAP/EBT compliance determination, fraud adjudication, food-safety disposition, recall action, or disclosure signoff is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
