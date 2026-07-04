# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed ambulatory and physician services lane for referral intake follow-up, scheduling readiness, authorization packet handling, consult support, and blocked-work management.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - tenant service-line map, jurisdiction map, payer rules, and scheduling-template rules
  - integrations for EHR, scheduling or practice-management, referral workqueue, payer or authorization platform, document repository, patient messaging, and audit systems
  - adjacent specialist targets for clinicians, utilization or authorization owners, HIM, privacy, revenue-cycle, and legal review

## Tenant Systems and Adaptation

- Tenant records required: referral orders, scheduling templates, appointment history, insurance facts, authorization submissions and responses, outside records, visit summaries, consult notes, transition summaries, and escalation hierarchy.
- Allowed adaptation:
  - clinic- or specialty-specific visit types and required attachment sets
  - centralized versus decentralized referral ownership
  - payer-specific routing names and escalation thresholds
  - local scheduling, no-show, outreach, and result-routing conventions
- Prohibited adaptation:
  - widening the lane into symptom triage, diagnosis, order entry, medical necessity review, appeal drafting, coding, billing signoff, or privacy-law interpretation
  - ignoring referral, authorization, or EHR blockers because a scheduling deadline is pressing
  - merging specialty-specific and payer-specific workflows into one path without approved tenant mapping

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for clinic or specialty, requested action, payer, appointment target, referral source, urgency classification source, and current lifecycle state
  - boundary metadata naming who owns clinical triage, authorization appeal, privacy, HIM, coding, billing, and legal interpretation
  - retrieval hooks for the systems that establish referral truth, scheduling truth, authorization truth, visit truth, and closure truth
  - tenant policy inputs for attachment requirements, scheduling rules, outreach cadence, result-routing ownership, and source-of-truth precedence
- Runtime assumptions that must be tenant-supplied or retrieved:
  - exact specialty or clinic context
  - payer or program context and current authorization status
  - current referral, scheduling, document, visit, and closure records
  - current systems of record and record-location metadata
  - approval chain for clinical, privacy, HIM, revenue-cycle, and legal escalations
- Regulated-lane caveats:
  - the lane may support operational scheduling, referral, and authorization decisions but cannot provide clinical advice, payer appeal advocacy, legal advice, coding signoff, or billing treatment decisions
  - any conflict involving protected information, patient safety, source-of-truth mismatch, or policy interpretation requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - request requires clinical, privacy, legal, appeal, coding, billing, or policy-override authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 ambulatory-clinic operations scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior generic clinic-support or broader operations behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing referral, payer, authorization, specialty, or system-of-record context
  - monitor repeated unsupported asks involving triage, appeal drafting, coding, billing, or privacy interpretation
  - monitor referral-aging, no-show or reschedule loops, pending authorizations, dropped consult follow-up tasks, and incomplete closure evidence
  - monitor privacy-sensitive routing and clinical-boundary escalations for false-confidence or missed-handoff risk

## Notes on use

- Positioning: validated, industry-specific ambulatory clinic operations specialist with explicit referral, scheduling, authorization, consult, and closure constraints.
- Tenant support: supports multi-site physician groups, specialty clinics, centralized referral teams, and ambulatory access operations that need stronger evidence-backed queue handling.
- Value: reduces dropped referrals, unsupported scheduling shortcuts, authorization leakage, and unsafe closure of clinic work by making source records, ownership, and escalation thresholds explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of referral, scheduling, authorization, visit, and consult records
  - low rates of false-confidence policy conflict or specialty-routing errors
  - durable handling across primary care, specialty access, and centralized referral operations
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation
