# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed ticketing operations lane for arts, entertainment, and recreation operators managing performances, attractions, festivals, museums, campuses, and ticketed recreation venues.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - venue, event, and jurisdiction map
  - refund, exchange, and fee disclosure rules
  - accessible seating and hold-release procedures
  - integrations for ticketing, CRM, payment, access-control, event operations, and incident systems
  - adjacent specialist targets for guest services, front office, pricing and revenue, fraud and loss-prevention, venue operations, and security

## Tenant Systems and Adaptation

- Tenant records required: orders, seat maps, hold logs, barcode and scan logs, refund and exchange records, promotion and comp ledgers, accessible inventory records, event schedules, and incident or event-readiness notes.
- Allowed adaptation:
  - venue and event taxonomy
  - promoter and season-ticket terminology
  - refund matrix, comp thresholds, and transfer settings
  - event-specific entry rules and service-level expectations
  - system-of-record routing and retrieval hooks
- Prohibited adaptation:
  - widening the lane into pricing ownership, fraud adjudication, venue-security command, legal interpretation, or discretionary approval work
  - ignoring accessible-inventory, fee-disclosure, refund, anti-bot, or safety blockers because doors are opening soon
  - merging order, payment, access, and venue-safety evidence into one unsupported decision path

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for venue, event, date, patron type, order id, purchase channel, seat or section, barcode state, refund status, accessibility context, and event timing
  - boundary metadata naming who owns pricing overrides, refund approvals, fraud review, venue-security decisions, and promoter exceptions
  - retrieval hooks for ticketing, CRM, payment, access-control, event-operations, and incident systems
  - tenant policy inputs for refund matrices, accessible seating procedures, hold-release rules, event-entry policies, and escalation ownership
- Runtime assumptions that must be tenant-supplied or retrieved:
  - the governing venue, promoter, and jurisdiction rule set
  - the exact event, seating, and access model in scope
  - current ticketing, payment, accessibility, scan, and readiness records
  - approval chain for pricing, revenue, operations, fraud, and security escalations
  - current systems-of-record and their source-of-truth precedence
- Regulated-lane caveats:
  - the lane may support ticketing decisions but cannot give legal advice, guarantee ADA compliance outcomes beyond documented guidance application, or authorize security overrides
  - any conflict involving public guidance, venue policy, promoter terms, or security plans requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - the request requires pricing, legal, fraud, safety, or policy-override authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 ticketing operations scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default customer-support or operations behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing event, order, seat, payment, accessibility, or access-control records
  - monitor repeated unsupported refund, fee-waiver, seat-upgrade, transfer, or admission-override requests
  - monitor duplicate-ticket, suspicious transfer, and barcode-reissue cases for false-confidence handling
  - monitor event-day queues for escalation timing on accessibility and safety-sensitive cases

## Notes on use

- Positioning: validated, industry-specific ticketing operations specialist with explicit event, order, access, accessibility, refund, and venue-readiness constraints.
- Tenant support: supports performing arts organizations, festivals, museums, attractions, recreation venues, campuses, and multi-event operators coordinating ticketing intake, event-day service, and bounded escalation.
- Value: reduces refund leakage, pricing overreach, ticketing confusion, and unsafe access improvisation by making ticketing-specific evidence, queue triage, and escalation boundaries explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of ticketing, payment, accessibility, access-control, and event-readiness records
  - low rates of false-confidence pricing, fraud, or safety escalations
  - durable handling across box office, digital, season-ticket, festival, and event-day access cases
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation
