# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route fund-accounting work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant portfolio-accounting, transfer-agent, custody, pricing, and approval systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for portfolio accounting, custody, bank, transfer-agent, pricing, DTCC, reconciliation, and document-workflow systems
  - escalation targets for valuation owners, controller approvers, fund-tax owners, legal or compliance reviewers, transfer-agent operations, and treasury cash owners
  - tenant-specific maps for vehicle type, jurisdiction, strike calendar, pricing hierarchy, omnibus versus direct-account servicing model, approval thresholds, and completion gates

## Materialization Requirements

- Required task and boundary metadata:
  - task intent, requested financial action, and target output shape
  - fund vehicle, jurisdiction, share class, base currency, strike date, and servicing model
  - named adjacent-lane map and approval-owner map
  - explicit refusal triggers for final valuation, final NAV release, tax interpretation, and unsupported overrides
- Tenant-supplied or runtime-retrieved assumptions:
  - authoritative systems of record for price and rate truth, custody cash and positions, transfer-agent activity, cap stock, and general-ledger outcomes
  - valuation-designee and controller approval rules, including how stale prices and significant events are escalated
  - which shareholder records are authoritative in direct-at-fund, omnibus, or intermediary-controlled workflows
  - fee schedules, expense-cap terms, waiver rules, and distribution-rate sources
  - close calendar, strike cutoff times, reconciliation thresholds, and escalation owners
- Regulated-lane caveats:
  - fund-accounting guidance is operational support and evidence packaging, not legal or tax advice and not final valuation or controller signoff
  - the lane may summarize stale-price or fair-value blockers but may not determine final fair value or release final NAV independently
  - non-U.S. or alternative-fund flows require tenant context before the runtime can act beyond blocked or escalated posture
- Refusal or orchestrator-return conditions:
  - required tenant facts, records, or vehicle-specific context are missing and would change the outcome
  - the request requires valuation-signoff, controller approval, legal or tax interpretation, or transfer-agent authority outside the lane
  - public-source and tenant-policy interpretations conflict materially
  - the request crosses into final fair-value governance, fund-tax reporting, legal review, regulatory reporting, or a more specialized transfer-agent lane

## Isolation

- Tenant boundary: no cross-tenant sharing of prices, rates, custody balances, shareholder records, cap-stock files, journal details, approvals, or exception logs.
- Knowledge boundary: public SEC and DTCC baselines are shared; tenant procedures, fee schedules, pricing hierarchies, system identifiers, and approval maps are injected only at request time.
- Adaptation policy:
  - allowed: terminology, system connectors, pricing-hierarchy overlays, strike calendars, reconciliation thresholds, and approval maps
  - prohibited: widening the lane into final fair-value decisions, final NAV release, tax interpretation, legal interpretation, or unsupported override authority

## Operations

- Monitoring:
  - log dispatch decisions, scope outcomes, posting-support requests, reconciliation notes, missing-evidence packets, and escalations
  - alert on stale source reviews, recurring stale-price escalations, repeated unsupported override requests, repeated cap-stock or custody breaks, and repeated requests for final valuation or tax authority
  - monitor requests that incorrectly seek controller, valuation-designee, legal, tax, or transfer-agent exception authority from the lane
- Logging:
  - record release version, tenant assumptions, vehicle type, servicing model, pricing source, affected accounting period, missing evidence, and routed owners
  - record whether the request involved NAV support, fee accrual, expense allocation, dividend or capital-gain rates, cap-stock reconciliation, or stale-price escalation
- Rollback path:
  - disable the current specialist release
  - route fund-accounting requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run the spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed fund-accounting specialist for NAV-support, fee and expense accrual support, cap-stock and cash reconciliation, break handling, and close evidence capture.
- Runtime may still use `specification-based` until a retained implementation is explicitly promoted in a separate commit.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
