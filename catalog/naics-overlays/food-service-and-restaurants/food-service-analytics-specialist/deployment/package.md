# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route food-service analytics work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant POS, PMS, booking, CRM, order-management, inventory, finance, and fraud-system credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for POS, PMS, booking, CRM, order-management, inventory, pricing, service-desk, finance, and fraud or loss-prevention systems
  - escalation targets for guest services, front office, pricing or revenue, fraud or loss-prevention, operations, safety, legal, and disclosure owners
  - tenant metric dictionaries, reporting calendar, source-precedence rules, comp and void policy, refund authority matrix, reservation and no-show rules, and publication approval chain

## Isolation

- Tenant boundary: no cross-tenant sharing of transactions, reservations, guest records, refunds, promotions, service tickets, payment anomalies, or reporting outputs.
- Knowledge boundary: FTC, FDA, ADA, NIST, PCI SSC, and SEC public baselines are shared; tenant SOPs, KPI dictionaries, pricing and refund limits, reservation rules, and disclosure approval chains are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, metric-definition overlays, connector mappings, reporting templates, audience-specific output wrappers, and reporting-calendar settings
  - prohibited: widening the lane into pricing authority, refund approvals, fraud adjudication, guest-safety disposition, or direct external disclosure signoff

## Operations

- Monitoring:
  - log metric-definition choices, denominator overrides, blocked prerequisites, source conflicts, menu-versus-POS mismatches, refund caveats, service-recovery caveats, and safety or fraud escalations
  - alert on stale source reviews, repeated attempts to count unresolved reservations or payment anomalies as settled facts, repeated requests for unsupported causal or disclosure claims, and recurring source-precedence conflicts
  - monitor for requests that incorrectly seek direct pricing, appeasement, fraud, or safety authority from the lane
- Logging:
  - record release version, tenant assumptions, metric definitions used, source lineage, refresh timestamps, confidence posture, service model, location scope, and systems-of-record consulted
  - record whether the request involved ambiguous definitions, missing facts, source conflict, refund exception, pricing boundary handling, customer harm, food-safety posture, or fraud sensitivity
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry food-service-and-restaurants --agent food-service-analytics-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed food-service analytics specialist for metric-definition, reservation and order reporting, reconciliation packaging, and disclosure-safe caveat handling.
- Materialization requirements for `commons-crew`:
  - task metadata identifying channel, location or concept scope, reporting period, requested audience, and whether the request touches refunds, reservations, guest incidents, or payment-sensitive records
  - boundary metadata identifying guest services, front office, pricing, fraud or loss-prevention, operations, safety, legal, and disclosure owners
  - retrieval dependencies for POS, PMS, booking, CRM, order-management, pricing, inventory, finance, refund, and fraud records plus prior scorecards and metric dictionaries
  - tenant overlays for reporting calendar, source precedence, comp and void policy, refund and appeasement rules, reservation and no-show rules, menu-version logic, and publication approval criteria
- Regulated-lane caveats:
  - public FTC, ADA, FDA, NIST, and PCI SSC sources constrain consumer-protection, booking, menu-labeling, food-safety, pricing-evidence, and payment-security posture but do not replace jurisdiction-specific or tenant-specific rules
  - runtime must refuse or return to orchestrator whenever pricing authority, refund exception approval, fraud adjudication, allergen or food-safety disposition, or disclosure signoff is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
