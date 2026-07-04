# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route event-production work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ticketing, POS, PMS, CRM, permit, safety, and refund connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ticketing, POS, PMS or venue booking, CRM, order-management, service-desk, inventory, permit, incident, and document repositories
  - escalation targets for guest services, front office, pricing and revenue, fraud and loss-prevention, operations, and public-safety owners
  - tenant-specific maps for refund and comp limits, cancellation and postponement rules, dynamic pricing ownership, suspicious-ticket handling, emergency escalation, and completion signoff thresholds

## Isolation

- Tenant boundary: no cross-tenant sharing of ticketing records, guest profiles, permit packages, incident notes, settlement records, or venue SOPs.
- Knowledge boundary: Seattle, FTC, CFPB, and Event Safety Alliance public baselines are shared; tenant ticketing-platform rules, venue terms, promoter policies, and event-specific playbooks are injected only at request time.
- Adaptation policy:
  - allowed: terminology, business-unit names, connectors, venue formats, event categories, service-summary formats, and escalation routing
  - prohibited: widening the lane into pricing authority, refund exception approval, fraud adjudication, permit-waiver authority, or final public-safety signoff authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked readiness, unsupported refund requests, suspicious-ticket escalations, safety incidents, and low-confidence returns
  - alert on stale source reviews, repeated ticketing or payment mismatches, repeated unsupported completion attempts, repeated crowding or ingress escalations, and repeated pricing-policy conflicts
  - monitor for requests that incorrectly seek pricing, refund, fraud, permit, or safety authority from the lane
- Logging:
  - record release version, tenant assumptions, venue and event context, permit and ticketing identifiers, missing evidence, and routed owners
  - record whether the request involved readiness review, active event execution, payment mismatch, policy exception, suspicious access, unsupported completion, customer-harm escalation, or tenant adaptation
- Rollback path:
  - disable the current specialist release
  - route event-production requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry arts-entertainment-and-recreation --agent event-production-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed live-event production specialist for permit and readiness control, ticketing and guest execution, throughput-aware event-day handling, customer-impact escalation, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying venue, event category, date, attendance, ticketing channel, guest-impact facts, requested disposition, and timing constraint
  - boundary metadata identifying guest services, front office, pricing and revenue, fraud and loss-prevention, operations, and public-safety owners
  - retrieval dependencies for ticketing, POS, PMS or venue booking, CRM, service desk, permit systems, incident logs, insurance files, and public-safety-plan repositories
  - tenant overlays for refund authorities, fee and promotion rules, cancellation or postponement playbooks, comp and inventory rules, suspicious-ticket handling, emergency staffing thresholds, and closure signoff requirements
- Regulated-lane caveats:
  - municipal permit, insurance, and public-safety requirements vary by jurisdiction, venue type, and event features; runtime must retrieve the governing authority before final readiness or closure outcomes are packaged
  - FTC ticket-fee and BOTS Act sources constrain ticket-price disclosure and suspicious-ticket handling but do not delegate pricing, refund, or fraud adjudication authority to the lane
  - CFPB billing-error guidance defines card-dispute boundaries but does not let the lane promise issuer outcomes or bypass merchant, venue, or ticketing-platform procedures
  - Event Safety Alliance standards are recognized event-safety guidance, but venue, fire-code, police, EMS, and security command authority stays outside the lane
  - runtime must refuse or return to orchestrator when pricing overrides, refund exceptions, fraud findings, permit waivers, legal interpretation, or final safety signoff authority is required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
