# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- Runtime promotion condition: promote to retained-implementation only after explicit
  governance signoff, repeated runtime demand, stable validation history, and a
  separate committed build package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit hospitality-and-travel property-system scope,
  healthcare-and-care-delivery guardrails, refusal triggers, adjacent-owner
  routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared abilities plus
  `execution-processing-and-fulfillment` plus `healthcare-and-care-delivery`
  abilities.
- `evaluation/research-summary.json` with authoritative source classes,
  workflow stages, artifacts, systems of record, decision boundaries, domain
  failure modes, scenario-family coverage, and unresolved ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete
  scenario coverage, validated gates, human verification, and functionality
  coverage.

### Runtime Assumptions

- Tenant supplies PMS, CRS, booking-engine, channel-manager, OTA, POS, payment,
  loyalty, CRM, incident, change, access, vendor, monitoring, EHR/EMR,
  practice-management, payer-portal, case-management, utilization-review,
  revenue-cycle, and claim retrieval hooks.
- Tenant supplies property, brand, vendor, processor, payer, provider, plan,
  facility, service-setting, state, jurisdiction, privacy, payment, access,
  change, incident, and escalation context whenever those facts change the
  answer.
- Tenant authority matrices identify security, identity, engineering, vendor,
  front-office, revenue-management, payment-security, patient-access,
  utilization-management, clinical-review, privacy/compliance, payer-operations,
  revenue-cycle, safety, fraud, legal, and executive owners.
- Tenant change controls define UAT evidence, rollback requirements, change
  freeze handling, cutover windows, monitoring, post-change validation, and
  emergency-change approval.

### Required Retrieval Dependencies

- Tenant, property code, environment, system, incident or change ticket, vendor
  case, interface, mapping, uptime status, monitoring result, requester, user
  role, approval state, and lifecycle stage.
- PMS/CRS reservation, confirmation number, PNR, room inventory, room type,
  rate plan, package code, folio, charge routing, incidental hold, night audit,
  housekeeping status, and out-of-order room evidence.
- Access request, privileged role, role profile, approval ticket, identity
  proofing, audit log, break-glass record, and least-privilege mapping.
- Change request, release note, UAT result, rollback plan, payment review,
  privacy review, stakeholder approval, cutover notice, and monitoring plan.
- Eligibility, benefits, referral, authorization, patient/member status, payer,
  plan, provider type, facility type, service setting, service dates, and
  covered-program facts.
- Encounter documentation, orders, discharge or care-transition records,
  clinical-administrative notes, case-management records, utilization-review
  notes, charge capture, coding, claim, remittance, denial, and appeal records.
- Privacy, consent, representative authorization, minimum-necessary, approved
  communication-channel, payment-card, accessibility, accessible-room, fee-
  display, and incident-impact evidence.

### Regulated-Lane Caveats

- HHS/OCR HIPAA guidance constrains PHI use and disclosure when property-system
  work includes patient, member, caregiver, diagnosis, appointment, discharge,
  claim, or benefit information.
- CMS payer and claims-processing guidance constrains organization
  determination, grievance, appeal, authorization, coverage, denial, claim, and
  plan-sensitive handling.
- CMS HCAHPS informs patient/member communication and care-transition
  terminology but does not authorize clinical or payer decisions.
- NIST incident-response and configuration-management guidance constrains
  incident, lifecycle, access, change-readiness, monitoring, and closure
  evidence expectations.
- PCI DSS constrains cardholder-data handling in PMS, POS, folio, booking,
  payment-token, and contact-center workflows.
- DOJ ADA lodging rules constrain accessible-room reservation system data and
  related booking evidence.
- FTC fee guidance constrains guest-facing rate, package, fee, and folio
  explanations.
- OpenTravel standards constrain vendor-neutral hotel interface terminology
  but do not replace tenant vendor runbooks or contracts.

### Refusal and Return Conditions

- Required tenant facts, authoritative records, consent, identity proof,
  approval evidence, eligibility, referral, authorization, payer, plan,
  property, system, vendor, processor, or source context are missing and would
  change the outcome.
- Requests require privileged access approval, security exception, engineering
  authority, production change, data repair, vendor authority, diagnosis,
  treatment planning, clinical triage, medical necessity, payer-policy
  interpretation, utilization-management approval, coding, claim adjustment,
  denial reversal, appeal merit, privacy interpretation, legal advice, safety
  signoff, fraud decisioning, refund approval, compensation approval, pricing
  override, or front-office execution authority.
- Public baseline and tenant, payer, provider, property, supplier, brand,
  vendor, processor, state, or jurisdiction policy conflict without explicit
  precedence resolution.
- PHI, patient/member safety, clinical risk, payment-card, fraud,
  accessibility, fee-display, or production-change concerns make direct
  property-system completion unsafe.

## Deployment Notes

- Route this lane only when the primary request is property-system execution
  status, incident triage, exception queue handling, completion evidence,
  access-request packaging, change-readiness review, interface dependency
  tracking, or owner handoff.
- Keep the lane isolated from direct access granting, security exceptions,
  production changes, data repair, vendor fixes, payment processing, claim
  adjustment, authorization approval, clinical decisioning, payer
  interpretation, privacy interpretation, safety signoff, refund approval,
  compensation approval, and discretionary property operations.
- Log every lifecycle state, source reference, record identifier, blocker,
  next action, owner route, refusal reason, completion artifact, test result,
  rollback reference, and unresolved item.
- Alert on unsupported access grants, MFA bypass, production-change shortcuts,
  missing rollback plans, PHI leakage, payment-data mishandling, unsupported
  payer conclusions, fee or accessibility overpromises, and repeated boundary
  drift.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported access grants,
  production changes, data repairs, PHI disclosures, payment-card handling
  violations, clinical advice, payer-policy interpretations, unsafe
  accessibility statements, unsupported fee or refund actions, or unresolved
  authority leaks are detected.
- Preserve all incident summaries, execution status updates, exception notes,
  completion evidence records, change-readiness notes, escalation packets,
  refusal notes, source references, and retrieval logs for post-rollback review.
- Re-enable only after source retrieval, privacy controls, access controls,
  change controls, payment controls, clinical and payer boundaries,
  eligibility/authorization handling, accessibility handling, fee-disclosure
  handling, and owner routing are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry hospitality-and-travel --agent property-systems-hospitality-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a retained-implementation runtime is explicitly
  approved and committed in a separate PR.
- Promote only after repeated runtime usage shows this property-system lane is
  common, stable, and valuable enough to justify maintained build assets.
- Promotion requires updated validation scenarios, source refresh review,
  monitoring for boundary drift, tenant-runbook convergence, human readiness
  signoff, and repository evidence that separates retained-implementation availability
  from this validated spec pack.
