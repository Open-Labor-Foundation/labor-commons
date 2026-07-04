# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route accommodation and travel reservation analytics work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, release notes, deployment notes.
- Required secrets: none in the package itself; tenant PMS, CRS, booking engine, channel manager, BI, payment, CRM, fraud, safety, and incident-system credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for PMS analytics, PMS reservation records, CRS, booking engine, channel manager, OTA/direct-booking reports, BI, payment, CRM, fraud, and incident systems
  - escalation targets for guest services, front office, lodging revenue, fraud and loss prevention, safety, operations, compliance, legal, and disclosure reviewers
  - tenant metric dictionaries, source-precedence rules, date-basis rules, reporting cadence, pricing/refund/safety/fraud boundaries, and publication approval matrices

## Isolation

- Tenant boundary: no cross-tenant sharing of reservation records, pace reports, occupancy history, cancellation patterns, channel mix, lead-time data, no-show trends, guest identifiers, payment flags, fraud signals, incident references, or reporting outputs.
- Knowledge boundary: STR, USALI, FTC, DOJ, CFPB, FTC Red Flags, PCI, CDC, and SEC public baselines are shared; property policies, OTA contracts, brand standards, source-precedence rules, pricing authority, refund rules, metric dictionaries, safety playbooks, fraud case workflows, and approval chains are injected only at request time.
- Adaptation policy:
  - allowed: metric-definition overlays, terminology maps, artifact templates, system connector mappings, property segmentation, channel segmentation, audience-specific output wrappers, and reporting cadence settings
  - prohibited: widening the lane into pricing approval, refund approval, room inventory control, fraud adjudication, safety/security response, legal interpretation, guest-service resolution, or final external disclosure signoff

## Operations

- Monitoring:
  - log metric definitions, date basis, denominator overrides, blocked prerequisites, source conflicts, stale extracts, forecast refusals, policy conflicts, customer-impact escalations, pricing/refund refusals, fraud or safety escalations, and disclosure-risk notes
  - alert on repeated attempts to publish conflicting PMS/CRS/channel metrics, repeated requests for unsupported forecast certainty, repeated requests to override refund or pricing rules, and recurring fraud or customer-harm patterns
  - monitor for requests that incorrectly seek direct approval or publication authority from the lane
- Logging:
  - record release version, request id, tenant assumptions, metric definitions, source lineage, refresh timestamps, confidence posture, property/date/channel context, and systems of record consulted
  - record whether the request involved ambiguous definitions, missing facts, cross-system conflict, high-volume intake, unsupported forecast, policy exception, payment mismatch, fraud, safety, or tenant-policy conflict
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry accommodation-and-travel-services --agent reservation-analytics-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Materialization

- Internal role: evidence-backed reservation analytics specialist for hospitality metric definition, cross-system reconciliation, booking-pattern exception notes, caveat design, and disclosure-safe escalation.
- Required task metadata for `commons-crew`:
  - property, portfolio, brand, market, business unit, date range, stay-date versus booking-date basis, arrival and departure context, channel, source market, room type, rate plan, customer segment, and requested audience
  - requested metric set, reporting cadence, cutoff time, source hierarchy, forecast or disclosure context, and publication owner
- Required boundary metadata:
  - pricing and revenue owners for rate, promotion, inventory, overbooking, and forecast-methodology decisions
  - guest services and front-office owners for customer resolution, arrival, booking mismatch, accessible-room, service recovery, and operational exception handling
  - fraud, loss-prevention, payment, safety, compliance, legal, and disclosure owners for customer-harm, payment, security, legal, and external-reporting decisions
- Retrieval dependencies:
  - PMS analytics and reservation records
  - CRS, booking engine, channel manager, OTA/direct-booking reports, and BI dashboards
  - payment and refund status reports, CRM or guest profiles, fraud or loss-prevention cases, incident or safety records, metric dictionaries, source-precedence policies, and prior scorecards
- Regulated-lane caveats:
  - public sources anchor metric, fee-disclosure, accessibility reservation, billing-error, fraud, payment-security, safety, and disclosure discipline, but they do not replace tenant policies, jurisdictional requirements, OTA contracts, brand standards, or approval matrices
  - runtime must refuse or return to orchestrator whenever pricing, refund, safety, fraud, legal, financial-approval, guest-service, or disclosure authority is required
  - runtime must not publish or imply certainty when source quality, signoff, source hierarchy, or metric definitions are unresolved

## Deployment Notes

- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, functionality coverage, and no blocking research ambiguity.
