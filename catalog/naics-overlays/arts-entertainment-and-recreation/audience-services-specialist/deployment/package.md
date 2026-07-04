# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and
  evaluation artifacts.
- Runtime expectation: Orchestrator-routed audience-services lane for arts,
  entertainment, and recreation operators managing performances, museums,
  attractions, festivals, and recreation venues with patron-service
  complexity.
- Runtime strategy: `specification-based` until a retained implementation is explicitly
  promoted.
- Delivery level: `validated` based on source grounding, scenario coverage,
  and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - venue, event, and jurisdiction map
  - member, donor, refund, and service-recovery rules
  - accommodation and late-seating procedures
  - integrations for POS, PMS or patron management, booking, CRM, order
    management, service desk, and venue or incident systems
  - adjacent specialist targets for ticketing operations, guest services,
    front office, pricing and revenue, fraud and loss-prevention, venue
    operations, and security

## Tenant Systems and Adaptation

- Tenant records required: patron accounts, bookings, exchange history,
  membership and donor ledgers, accommodation requests, payment and refund
  records, service recovery approvals, house policies, check-in notes,
  schedule-change notices, and incident or venue-readiness notes.
- Allowed adaptation:
  - venue and program taxonomy
  - member, donor, subscriber, and audience-development terminology
  - exchange windows, late-seating rules, and service-level expectations
  - accommodation workflows and communication templates
  - system-of-record routing and retrieval hooks
- Prohibited adaptation:
  - widening the lane into pricing ownership, fraud adjudication,
    venue-security command, legal interpretation, or discretionary approval
    work
  - ignoring accommodation, fee-disclosure, refund, suspicious-activity, or
    safety blockers because doors are opening soon
  - merging patron, payment, accommodation, and venue-safety evidence into one
    unsupported decision path

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for venue, event or program, date, patron type, order or
    reservation id, member or donor status, seat or timed-entry state,
    accommodation context, and event timing
  - boundary metadata naming who owns pricing overrides, refund approvals,
    donor exceptions, fraud review, venue-security decisions, and promoter
    exceptions
  - retrieval hooks for booking, CRM, membership, payment, service desk,
    accommodation, venue-operations, and incident systems
  - tenant policy inputs for exchange windows, late-seating procedures,
    service recovery rules, accommodation handling, venue-entry policies, and
    escalation ownership
- Runtime assumptions that must be tenant-supplied or retrieved:
  - the governing venue, promoter, and jurisdiction rule set
  - the exact patron, program, and entitlement model in scope
  - current patron, booking, payment, accommodation, and readiness records
  - approval chain for pricing, revenue, fraud, operations, and security
    escalations
  - current systems of record and their source-of-truth precedence
- Regulated-lane caveats:
  - the lane may support audience-service decisions but cannot give legal or
    ADA advice, guarantee safety outcomes, or authorize security overrides
  - any conflict involving public guidance, venue policy, promoter terms, or
    security plans requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - the request requires pricing, legal, fraud, safety, or policy-override
    authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 13 audience-services scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default customer-support or ticketing or
    operations behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing patron, booking, accommodation,
    payment, or venue-impact records
  - monitor repeated unsupported donor, refund, fee-waiver, seat-change, or
    access-override requests
  - monitor suspicious will-call, account-change, and donor-benefit transfer
    cases for false-confidence handling
  - monitor high-volume queues for escalation timing on accommodation and
    safety-sensitive cases

## Notes on use

- Positioning: validated, industry-specific audience services specialist
  with explicit patron, entitlement, accommodation, schedule, and
  venue-impact constraints.
- Tenant support: supports performing arts organizations, museums,
  attractions, festivals, membership venues, and recreation operators
  coordinating patron communication, entitlement handling, and bounded
  escalation.
- Value: reduces refund leakage, entitlement overreach, patron confusion, and
  unsafe venue improvisation by making audience-service evidence, queue triage,
  and escalation boundaries explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of patron, booking, payment, accommodation, and
    venue-readiness records
  - low rates of false-confidence pricing, fraud, or safety escalations
  - durable handling across subscriber, donor, museum, festival, attraction,
    and event-day audience cases
  - explicit governance approval to convert the `specification-based` runtime into a
    committed built implementation

