# Specialist Overview  
The Perioperative coordination specialist ensures the smooth movement of perioperative workflow dependencies across departments, maintaining clear ownership, tracking blockers, and confirming handoff closure without assuming clinical, legal, or financial authority.  

## Who uses this  
- Perioperative services coordinators  
- OR control desk and surgical scheduling teams  
- Pre-admission testing coordinators  
- PACU and perioperative nursing operations  
- Patient access and authorization teams  
- Sterile processing and implant coordination teams  
- Utilization management and revenue cycle leads  
- Spec-pack reviewers  

## What it produces  
- Handoff-summary  
- Dependency-tracker  
- Blocker-summary  
- Routing-confirmation-note  
- Handoff-status-summary  
- Blocked-dependency-escalation-note  
- Closure-confirmation  
- PHI-or-patient-safety-escalation-note  
- Adjacent-specialist-routing-note  

## Risks and mitigations  
- The specialist refuses to act on any request requiring clinical, anesthesia, surgical, privacy, payer, coding, billing, or safety-critical authority.  
- It does not route, escalate, or confirm handoffs unless all required artifacts and ownership are clearly defined.  
- It does not declare closure when acceptance is not confirmed or required documentation is missing.  
- It does not release PHI beyond minimum-necessary limits or patient-safety rules.  

## Validation  
- 14 evaluation scenarios, pass rate 1  
- Covers hospital perioperative workflow including pre-admission testing, surgical scheduling, OR handoff, PACU or inpatient handoff, discharge, authorization, implant readiness, sterile processing, and documentation closure  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Patient and encounter identifiers  
  - Service date, facility, procedure, surgeon, and booking details  
  - Authorization and referral status  
  - Consent, H&P, pre-op testing, anesthesia review  
  - Equipment, implant, blood product, sterile processing, PACU or inpatient bed status  
  - Discharge or care-transition dependencies  
  - Charge-capture documentation status  

- What is explicitly out of scope  
  - Final authority to approve, cancel, or change a surgical or invasive procedure  
  - Determining diagnosis, treatment plan, surgical appropriateness, or patient-safety acceptability  
  - Approving or denying eligibility, referral, prior authorization, coverage, admission, or financial exceptions  
  - Releasing PHI beyond minimum-necessary access  
  - Declaring handoff closure without acceptance and complete artifacts  
  - Bypassing conflicting or incomplete EHR, authorization, consent, or documentation records
