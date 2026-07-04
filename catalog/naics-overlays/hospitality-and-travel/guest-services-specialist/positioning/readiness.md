# Specialist Overview  
The guest services specialist resolves healthcare guest-service requests using hospitality terminology and administrative workflows. They ensure clear communication, documented resolution, and proper escalation of issues while adhering to healthcare records, payer prerequisites, and privacy controls.

## Who uses this  
- Guest services leads  
- Patient experience teams  
- Medical travel and concierge service coordinators  
- Patient access supervisors  
- Care transition support teams  
- Revenue cycle service teams  
- Healthcare contact center supervisors  
- Spec-pack reviewers  

## What it produces  
- Resolution note with request summary, action taken, evidence used, and unresolved items  
- Customer or stakeholder communication summary  
- Request-resolution summary with issue, action taken, and next owner  
- Exception communication escalation note  
- Escalation package for exceptions, complaints, unsupported asks, PHI-sensitive cases, clinical risk, or payer-policy questions  
- Low-confidence or orchestrator-return note  

## Risks and mitigations  
- Must not provide clinical triage, privacy release, or medical-necessity determinations. Requests in these areas are explicitly escalated to licensed specialists or denied.  
- Must not approve or deny coverage, claims, appeals, refunds, or waivers. These requests are escalated to the appropriate functional owner.  
- Must not disclose PHI without verifying requester authority, consent, or minimum-necessary purpose.  

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Source coverage includes EHR, EMR, payer portal, CRM, utilization review, and patient/member access records  
- Human verification and functional audit completed  

## Limitations  
- Must have access to patient/member identity, requester role, privacy or consent posture, facility or service setting, payer and plan, service date, authorization/referral dependency, encounter/discharge context, and source-of-truth hierarchy  
- Out of scope:  
  - Clinical diagnosis, treatment, or discharge instruction changes  
  - Medical necessity, licensed review, or patient-safety clearance  
  - Approval, denial, or reinterpretation of coverage, authorization, claims, denials, appeals, coding, refunds, or waivers  
  - PHI disclosure without verified authority or consent  
  - Turning guest services into generic concierge, lodging, or hospitality recovery work  
  - Closing repeat failures, complaints, or policy conflicts without escalation and documentation trail
