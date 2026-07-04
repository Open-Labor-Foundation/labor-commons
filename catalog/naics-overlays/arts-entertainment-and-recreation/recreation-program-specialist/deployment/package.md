# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit recreation-program boundaries, refusal triggers, adjacent-owner routing, required tenant facts, and authoritative source metadata.
- `evaluation/functionality-map.json` covering shared plus records-documentation-and-administration plus retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with required source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies refund, transfer, cancellation, waitlist release, scholarship, fee-waiver, and membership or pass rules.
- Tenant supplies program, facility, age-band, supervision, waiver, guardian verification, access-control, and incident-routing rules.
- Recreation-management, booking, POS, CRM, incident, service-desk, document, access-control, and inventory systems are retrievable at runtime.
- Tenant provides authority matrices for guest services, front office, pricing and revenue, fraud and loss prevention, operations, privacy, and safety owners.
- Jurisdiction, public-records posture, youth-program rules, aquatics controls, and private-club or municipal policy overlays are available whenever they materially change the answer.

### Required Retrieval Dependencies

- Registration, reservation, session, roster, waitlist, facility-booking, and participant-account identifiers.
- Waiver, release, emergency-contact, guardian authorization, attendance, and incident-document completeness state.
- Payment tender, refund status, transfer request, no-show state, promotion, scholarship, and fee-rule context.
- Service-ticket history, complaint notes, prior exception requests, and manager or approver annotations.
- Access-control, pass, swim-band, equipment-checkout, and facility-status data when relevant.
- Retention, disclosure, publication, and incident-routing rules for the tenant and jurisdiction.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory registration, roster, waiver, payment, refund, incident, or disclosure evidence.
- Requests for pricing override, refund exception approval, public-records interpretation, privacy-law interpretation, incident signoff, participant reinstatement, or fraud decisioning.
- Unsafe-condition, aquatics, playground, youth-supervision, suspicious identity, or refund-reroute signals that change whether routine administration is safe.
- Public baseline and tenant or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported refund promises, record manipulations, privacy leaks, missed fraud holds, or unsafe recreation guidance are detected.
- Preserve all record update notes, completeness summaries, governance escalations, program status summaries, and evidence maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, retention and access controls, refund-boundary handling, safety escalation routing, and fraud stop conditions are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry arts-entertainment-and-recreation --agent recreation-program-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this recreation-program lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
