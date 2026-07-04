# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed revenue management hospitality lane for planning, capacity assessment, allocation recommendation, billing support, reconciliation support, and revenue exception escalation.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version and source refresh policy
  - tenant service model, jurisdiction, business unit, program, product, property, facility, provider type, service setting, payer mix, and hospitality context
  - payer, plan, coverage, eligibility, referral, authorization, documentation, timely filing, appeal-window, denial, remittance, AR, cash-posting, patient-balance, guest-impact, and folio or payment context where relevant
  - approved priority matrix, tie-break rules, service levels, productivity baselines, staffing capacity, owner availability, approval thresholds, and source-of-truth hierarchy
  - integrations for EHR, EMR, practice management, revenue cycle, payer portal, authorization, utilization review, case management, CRM, patient/member access, PMS, reservation, folio, payment, billing, clearinghouse, denial management, remittance, cash-posting, approval, privacy, compliance, and audit systems
  - adjacent specialist targets for clinical review, coding, utilization management, patient access, healthcare revenue cycle, healthcare billing, payer operations, privacy, compliance, finance, guest services, lodging revenue, travel bookings, fraud, safety, tax, legal, and executive approval

## Tenant Systems And Adaptation

- Tenant records required: eligibility, benefits, referral, authorization, patient/member access, guest access, reservation, itinerary, encounter, order, clinical-administrative note, discharge or care-transition, charge capture, coding dependency, claim, claim status, payer portal, clearinghouse, remittance, ERA, EFT, EOB, denial, appeal, AR, cash-posting, payment, folio, refund, adjustment, approval, audit, privacy, compliance, service-level, productivity, capacity, source-hierarchy, and policy records.
- Allowed adaptation:
  - hospitality queue labels, property names, package terms, folio fields, guest-impact labels, service-line terms, payer mix, denial categories, dashboard fields, and owner names
  - priority matrix, tie-break rules, refresh cadence, escalation owner map, source precedence, capacity assumptions, work-queue thresholds, productivity baselines, and reporting cadence when tenant approved
- Prohibited adaptation:
  - widening the lane into final staffing, budget, operational, pricing, write-off, refund, waiver, posting, collections, appeal, coding, clinical, payer-interpretation, privacy, compliance, accounting, tax, legal, guest-service, fraud, safety, or executive authority
  - ignoring missing eligibility, referral, authorization, documentation, claim, remittance, denial, source-of-truth, PHI, hospitality, payment, or approval blockers because revenue impact is high
  - weakening minimum-necessary PHI handling, approved-channel requirements, payment-card controls, or clinical/payer escalation rules

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for patient or member, guest if applicable, encounter, account, reservation, claim, payer, plan, product, property, facility, provider type, service setting, queue, requested planning action, urgency, denial state, aging state, cash impact, patient/member impact, guest impact, and hospitality record posture
  - boundary metadata naming who owns access, eligibility, referral, authorization, documentation, coding, billing, denial, payer follow-up, remittance, cash posting, AR, collections, privacy, compliance, finance, utilization management, clinical review, guest services, lodging revenue, travel booking, fraud, safety, accounting, tax, legal, staffing approval, budget approval, write-off approval, refund approval, waiver approval, and executive approval
  - retrieval hooks for all systems of record and their source-of-truth precedence
  - tenant policy inputs for priority rules, tie-breaks, capacity limits, productivity targets, payer hierarchy, timely filing, appeal windows, authorization requirements, referral workflow, denial ownership, privacy channel rules, payment-card handling, hospitality policies, write-off thresholds, refund thresholds, collections holds, and approval routing
- Runtime assumptions that must be tenant-supplied or retrieved:
  - governing jurisdiction, payer, plan, contract, service line, provider type, facility type, property type, lodging or travel model, and service setting
  - current queue volumes, aging, denial trends, remittance variances, posting conflicts, cash impact, owner capacity, productivity, service levels, and deadlines
  - current eligibility, referral, authorization, documentation, coding, claim, remittance, denial, appeal, AR, payment, folio, cash-posting, patient-balance, guest-impact, privacy, and approval records
  - current approval chain for staffing, budget, write-offs, refunds, waivers, pricing, posting, collections, policy exceptions, appeals, privacy, compliance, finance, clinical review, payer interpretation, guest-service recovery, tax, legal review, and executive decisions
- Regulated-lane caveats:
  - the lane may support administrative planning, capacity assessment, billing support, posting support, reconciliation support, and escalation packaging but cannot select codes, rewrite clinical records, determine medical necessity, approve PHI disclosure, certify appeals, interpret payer policy, approve staffing or budget, approve write-offs or refunds, finalize accounting or tax treatment, approve guest-service recovery, or provide legal advice
  - any conflict involving CMS guidance, payer contracts, state Medicaid rules, MAC articles, privacy rules, tenant policy, brand standards, dashboard data, PMS records, EHR records, or source records requires escalation rather than synthesis
  - PHI handling must stay inside minimum-necessary payment or healthcare-operations needs and tenant-approved channels
- Refusal or orchestrator-return conditions:
  - required tenant facts, priority rules, tie-break rules, approval thresholds, or authoritative source context are missing
  - required system-of-record evidence cannot be retrieved or materially conflicts
  - the request requires clinical, coding, payer-policy, privacy, legal, compliance, finance, accounting, tax, collections, guest-service, fraud, safety, staffing, budget, write-off, refund, waiver, or executive approval authority
  - unresolved prioritization could create patient or member harm, PHI exposure, unsupported collections activity, guest-impact harm, revenue leakage, claim denial, or compliance exposure

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 revenue management hospitality scenarios
  - research summary, readiness evidence, and functionality map present
  - orchestrator routes and adjacent-owner registry configured
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default hospitality revenue, revenue cycle, or operations behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing payer, plan, service setting, source-system, priority-rule, tie-break, capacity, authorization, referral, documentation, denial, remittance, posting, folio, privacy, hospitality policy, payment, or approval facts
  - monitor unsupported approval requests involving staffing, budget, overtime, write-offs, refunds, waivers, pricing, collections changes, appeal strategy, policy exceptions, guest-service recovery, and final operational decisions
  - monitor PHI-sensitive asks, clinical or coding boundary requests, payer-policy interpretation attempts, source conflicts, tenant adaptation drift, brand-policy conflicts, and payment-card handling issues

## Notes on use

- Positioning: validated hospitality-and-travel revenue management specialist for evidence-backed capacity planning, allocation recommendations, billing and reconciliation support, and regulated revenue exception escalation where healthcare-style payer, authorization, PHI, or claim dependencies affect the workflow.
- Tenant support: supports hotels, resorts, travel-care operators, destination healthcare programs, medical hospitality teams, provider hospitality units, and revenue operations teams coordinating guest, patient, member, payer, and financial records.
- Value: reduces revenue leakage, avoidable denial rework, unsupported posting, PHI exposure, authority overreach, and unresolved cross-lane work by making source evidence, prerequisites, capacity constraints, and approval boundaries explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of EHR, EMR, PMS, reservation, eligibility, referral, authorization, documentation, claim, denial, remittance, payment, folio, cash-posting, policy, approval, privacy, and audit records
  - low rates of false-confidence payer, clinical, privacy, coding, authorization, appeal, source-conflict, hospitality-policy, payment-security, and approval-boundary escalations
  - durable handling across payer mixes, facility types, property types, service settings, claim types, queue labels, provider organizations, hospitality businesses, and tenant work queues
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation with tested connectors, PHI controls, payment controls, tenant policy retrieval, audit logging, and rollback support
