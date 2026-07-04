# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route visitor analytics work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ticketing, access-control, POS, CRM, service desk, finance, and loss-prevention credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ticketing, booking, access-control, POS, CRM, service desk, finance, and security systems
  - escalation targets for guest services, front office, pricing or revenue, fraud or loss-prevention, operations, safety, legal, and disclosure owners
  - tenant metric dictionaries, venue calendar, source-precedence rules, refund authority matrix, comp-ticket policy, re-entry rules, and publication approval chain

## Isolation

- Tenant boundary: no cross-tenant sharing of tickets, reservations, attendance logs, customer records, refunds, promotions, incident notes, or reporting outputs.
- Knowledge boundary: FTC, ADA, NPS, NIST, CISA, PCI SSC, and SEC public baselines are shared; tenant SOPs, metric dictionaries, ticket policies, refund limits, accessibility workflows, and disclosure approval chains are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, metric-definition overlays, connector mappings, reporting templates, audience-specific output wrappers, and venue-calendar settings
  - prohibited: widening the lane into pricing authority, ticket-release authority, refund approvals, fraud adjudication, security disposition, or direct external disclosure signoff

## Operations

- Monitoring:
  - log metric-definition choices, denominator overrides, blocked prerequisites, source conflicts, ticketing-versus-scan mismatches, refund leakage caveats, accessibility caveats, and fraud or safety escalations
  - alert on stale source reviews, repeated attempts to equate tickets sold with attendance, repeated requests for unsupported causal or disclosure claims, and recurring source-precedence conflicts
  - monitor for requests that incorrectly seek direct pricing, inventory-release, appeasement, fraud, or security authority from the lane
- Logging:
  - record release version, tenant assumptions, metric definitions used, source lineage, refresh timestamps, confidence posture, venue type, event scope, and systems-of-record consulted
  - record whether the request involved ambiguous definitions, missing facts, source conflict, refund exception, pricing boundary handling, customer harm, accessibility, or fraud sensitivity
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry arts-entertainment-and-recreation --agent visitor-analytics-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed visitor analytics specialist for metric-definition, venue and attraction reporting, reconciliation packaging, and disclosure-safe caveat handling.
- Materialization requirements for `commons-crew`:
  - task metadata identifying venue type, event or program scope, reporting period, requested audience, and whether the request touches refunds, pricing, accessibility, or security-sensitive records
  - boundary metadata identifying guest services, front office, pricing, fraud/loss-prevention, operations, safety, legal, and disclosure owners
  - retrieval dependencies for ticketing, booking, access-control, POS, CRM, service-desk, finance, refund, and security records plus prior scorecards and metric dictionaries
  - tenant overlays for event calendar, source precedence, comp-ticket policy, re-entry rules, refund and appeasement limits, accessibility workflows, and publication approval criteria
- Regulated-lane caveats:
  - public FTC, ADA, and NIST sources constrain ticket price, fee, accessibility, booking, and promotion posture but do not replace jurisdiction-specific or tenant-specific consumer-protection rules
  - NPS visitor-use definitions improve metric discipline but do not substitute for tenant-specific count procedures, season-pass logic, or venue-specific attendance policy
  - CISA, FTC, and PCI sources constrain fraud, payment, and safety handling but cannot substitute for security team, legal, or incident-command authority
  - runtime must refuse or return to orchestrator whenever pricing authority, ticket release approval, refund exception approval, fraud adjudication, security disposition, or disclosure signoff is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
