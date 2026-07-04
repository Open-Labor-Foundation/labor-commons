# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route electronics retail analytics work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant POS, OMS, CRM, pricing, service desk, inventory, finance, and loss-prevention credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for POS, OMS, CRM, service desk, scheduling, pricing, inventory, finance, and loss-prevention systems
  - escalation targets for guest services, front office, pricing or revenue, fraud or loss-prevention, operations, safety, legal, and disclosure owners
  - tenant metric dictionaries, retailer calendar, source-precedence rules, refund authority matrix, promo logic, open-box policy, and publication approval chain

## Isolation

- Tenant boundary: no cross-tenant sharing of transactions, orders, reservations, refunds, promotions, service tickets, inventory states, loss-prevention records, or reporting outputs.
- Knowledge boundary: FTC, NIST, CPSC, GS1, SEC, and official repair-operating public baselines are shared; tenant SOPs, metric dictionaries, pricing and appeasement limits, retailer calendar rules, and disclosure approval chains are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, metric-definition overlays, connector mappings, reporting templates, audience-specific output wrappers, and retailer-calendar settings
  - prohibited: widening the lane into pricing authority, refund approvals, fraud adjudication, warranty outcomes, safety disposition, or direct external disclosure signoff

## Operations

- Monitoring:
  - log metric-definition choices, denominator overrides, blocked prerequisites, source conflicts, promo-versus-POS mismatches, refund leakage caveats, service-ticket caveats, and safety or fraud escalations
  - alert on stale source reviews, repeated attempts to count reserved or recalled units as sell-through, repeated requests for unsupported causal or disclosure claims, and recurring source-precedence conflicts
  - monitor for requests that incorrectly seek direct pricing, appeasement, fraud, or safety authority from the lane
- Logging:
  - record release version, tenant assumptions, metric definitions used, source lineage, refresh timestamps, confidence posture, channel scope, product family, and systems-of-record consulted
  - record whether the request involved ambiguous definitions, missing facts, source conflict, refund exception, pricing boundary handling, customer harm, recall, or fraud sensitivity
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry consumer-electronics-and-appliance-retail-and-service --agent electronics-retail-analytics-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed electronics retail analytics specialist for metric-definition, omnichannel reporting, reconciliation packaging, and disclosure-safe caveat handling.
- Materialization requirements for `commons-crew`:
  - task metadata identifying channel, store or market scope, product family, reporting period, requested audience, and whether the request touches refunds, service, or recall-sensitive inventory
  - boundary metadata identifying guest services, pricing, fraud/loss-prevention, operations, safety, legal, and disclosure owners
  - retrieval dependencies for POS, OMS, CRM, service-desk, pricing, inventory, finance, refund, and loss-prevention records plus prior scorecards and metric dictionaries
  - tenant overlays for retailer calendar, source precedence, refund and appeasement rules, open-box policy, margin logic, warranty handling limits, and publication approval criteria
- Regulated-lane caveats:
  - public FTC, NIST, and CPSC sources constrain pricing, refund, order, warranty, and safety posture but do not replace jurisdiction-specific or tenant-specific consumer-protection rules
  - official repair-operating guidance sharpens service-fee and authorization artifact handling but cannot substitute for tenant service policies or local licensing requirements
  - runtime must refuse or return to orchestrator whenever pricing authority, refund exception approval, fraud adjudication, recall or safety disposition, warranty finality, or disclosure signoff is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
