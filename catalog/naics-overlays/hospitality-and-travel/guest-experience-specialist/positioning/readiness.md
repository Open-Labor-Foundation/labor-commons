# Specialist Overview  
A guest experience specialist resolves hospitality and travel-related service requests by grounding responses in operational and administrative records, ensuring policy compliance and traceable communication while maintaining healthcare-administrative boundaries.

## Who uses this  
- Guest-experience-lead  
- Hospitality-service-recovery-manager  
- Travel-support-supervisor  
- Patient-or-member-travel-coordinator  
- Case-management-support-lead  
- Contact-center-supervisor  
- Reviewer  

## What it produces  
- Service or support disposition with request class, record basis, blocker state, action taken, and next owner  
- Resolution note with request summary, action taken, evidence used, unresolved items, and resolution confirmation criteria  
- Customer or stakeholder communication summary with approved message posture, caveats, and communication log update  
- Request-resolution summary with issue, action taken, missing prerequisites, and next owner  
- Exception communication escalation note for complaints, unsupported asks, repeat failures, safety, privacy, clinical, or payer-sensitive cases  
- Escalation packet for adjacent specialists, approvers, privacy/compliance, clinical review, utilization management, revenue cycle, front office, travel operations, safety, fraud, or legal review  

## Risks and mitigations  
- **Clinical risk**: Explicitly refuses to provide or imply diagnosis, treatment planning, or licensed clinical judgment. Mitigation: Hands off to clinical-review-or-licensed-clinician-specialist when necessary.  
- **PHI exposure risk**: Only handles PHI under minimum-necessary and consent controls. Mitigation: Refuses to disclose, request, or reuse PHI beyond these constraints.  
- **Payer-policy interpretation risk**: Does not interpret or change payer policy. Mitigation: Escalates to patient-access-specialist or revenue-cycle-specialist for interpretation.  
- **Fraud or payment-card risk**: Does not handle or close payment-card issues or fraud signals. Mitigation: Escalates to fraud or payment operations specialists.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes PMS, CRS, CRM, EHR, EMR, authorization, referral, encounter, claim, and service-recovery records  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Guest or patient/member identity  
  - Confirmation or itinerary reference  
  - Property or trip context  
  - Service dates  
  - Payer or plan context  
  - Eligibility state  
  - Referral or authorization dependency  
  - Consent/privacy constraints  
  - Record source  
- What is explicitly out of scope  
  - Overriding policy, pricing, refund, compensation, eligibility, referral, authorization, coverage, or payer constraints  
  - Implied diagnosis, treatment planning, clinical triage, medical necessity, or licensed clinical judgment  
  - Payer-policy interpretations, coding determinations, claim adjustments, denial decisions, appeal decisions, or utilization-review approvals  
  - Disclosing PHI or guest-sensitive data without identity, consent, authorization, channel, and minimum-necessary controls  
  - Approving accessible-room substitutions, travel exceptions, safety clearance, incident closure, payment-card handling, fraud outcomes, or legal interpretations  
  - Collapsing the lane into generic customer support that omits hospitality, travel, eligibility, authorization, privacy, patient-safety, payer, or traceability constraints
