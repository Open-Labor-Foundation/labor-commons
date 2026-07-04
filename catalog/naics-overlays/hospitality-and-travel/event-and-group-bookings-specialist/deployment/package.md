# Deployment Package: Event and group bookings specialist

## Package Identity

- Queue slug: `industry-overlays::hospitality-and-travel::event-and-group-bookings-specialist`
- Package path: `catalog/naics-overlays/hospitality-and-travel/event-and-group-bookings-specialist/`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- retained implementation: not included

## Deployment Notes

This package can be deployed as a validated spec pack for orchestrator and
catalog use. It defines the business outcome, scope, source baseline,
functional abilities, scenarios, readiness evidence, deployment posture, and
commercial packaging for event and group booking readiness work in hospitality
and travel with healthcare access constraints.

Runtime use must keep the package in `specification-based` mode until a trusted built
runtime is separately promoted. A specification-based runtime may reference this package
for routing, refusal, readiness outputs, and evaluation expectations, but it
must not claim autonomous booking, payer, clinical, privacy-release, legal,
contract, financial, or safety approval authority.

## Required Runtime Metadata

`commons-crew` would need these task and boundary fields to materialize this
lane safely:

- Agent slug, industry overlay, workflow phase group, resolved industry
  profile, runtime strategy, and target delivery level
- Requested booking action and desired commitment point
- Event or group identity, sponsor or payer, dates, arrival/departure pattern,
  room block, rooming list, meeting-space and service requirements, accessible
  accommodation needs, travel assistance needs, cut-off/release dates, deposit
  status, cancellation and attrition context, booking channel, and owner matrix
- Healthcare access context when applicable: patient/member status, payer,
  plan, provider, facility, service setting, service date, eligibility,
  benefits, referral, authorization, utilization-review, care-transition, and
  patient/member safety flags
- Privacy context: PHI classification, requester role, consent/proxy posture,
  minimum-necessary purpose, approved communication channel, retention and
  audit requirements
- Systems-of-record inventory and retrieval hooks for PMS, CRS, GDS, booking
  engine, sales and catering, event CRM, travel management, payment/deposit,
  EHR/EMR, payer portal, practice management, case management, utilization
  review, revenue cycle, privacy, document repository, and audit systems
- Source hierarchy, tenant policies, jurisdiction, supplier terms, property or
  brand standards, payer/sponsor rules, approval matrix, and escalation SLA

## Regulated-Lane Caveats

- The lane is administrative and operational. It validates readiness for event
  and group booking intake but does not make clinical, payer, privacy-release,
  legal, rate, contract, financial, or safety-critical determinations.
- PHI must be handled under minimum-necessary constraints and only through
  tenant-approved channels.
- Public guidance sets a baseline. Tenant policy, payer contracts, facility
  policies, hotel brand standards, supplier terms, and jurisdictional rules
  may be stricter and must be retrieved before case-level disposition.
- Conflicting systems or policies require escalation rather than confident
  synthesis.

## Refusal And Orchestrator Return Conditions

Return or refuse when:

- Required tenant facts, records, retrieval hooks, source context, source
  hierarchy, or approval owners are missing and would change the outcome.
- Eligibility, referral, authorization, accessible-room, payment/deposit,
  privacy, capacity, or owner-readiness evidence is absent, expired, stale, or
  conflicting.
- The request asks the lane to approve downstream booking work rather than
  validate intake readiness.
- The request requires diagnosis, treatment planning, clinical urgency,
  medical necessity, licensed review, payer coverage interpretation, prior
  authorization approval, privacy-release approval, legal interpretation,
  rate approval, contract negotiation, concession, refund, cancellation or
  attrition waiver, safety clearance, or executive policy override.
- PHI handling, consent, proxy access, patient/member safety, accessibility
  rights, or source conflict requires controlled human review.

## Rollback Notes

Rollback is straightforward because this package is specification-based:

1. Remove the package directory from catalog publication.
2. Rebuild or refresh catalog indexes so the slug no longer routes to this
   spec pack.
3. Keep prior accepted work packets auditable; do not delete already-produced
   readiness, routing, or escalation evidence from tenant systems.
4. Re-route new event and group booking intake to the nearest existing
   hospitality, travel operations, patient access, privacy, or utilization
   management lane until a corrected package is available.

## Promotion To retained implementation

Promote only if usage proves common enough and the following are completed:

- Tenant connectors and retrieval scopes are approved for the required PMS,
  CRS, event CRM, sales and catering, travel management, EHR/EMR, payer portal,
  authorization, referral, privacy, and document systems.
- Integration tests prove source reconciliation, PHI minimization, refusal
  triggers, and owner routing across representative tenant workflows.
- Security, privacy, and compliance review approves data minimization,
  retention, audit, and channel controls.
- Operational owners sign off on source hierarchy, approval matrix,
  escalation SLAs, and rollback.
- A separate trusted runtime artifact is committed and linked to this spec
  pack; this package alone must continue to state `specification-based`.
