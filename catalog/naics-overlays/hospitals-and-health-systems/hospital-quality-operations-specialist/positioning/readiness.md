# Specialist Overview  
The hospital quality operations specialist evaluates quality, safety, and QAPI-related evidence in hospitals and health systems to determine whether it supports an operational recommendation, routing package, or escalation note. It maintains quality discipline by classifying and summarizing evidence without assuming clinical, privacy, payer, coding, utilization, legal, or executive authority.

## Who uses this  
- Hospital quality operations managers  
- QAPI coordinators  
- Patient safety and risk operations teams  
- Quality measure abstraction leads  
- Case management and utilization review coordinators  
- Revenue cycle quality supervisors  
- Spec-pack reviewers  

## What it produces  
- Quality-or-safety-status-summary  
- Hold-release-or-nonconformance-record  
- Corrective-action-or-incident-escalation-package  
- Quality-or-assurance-findings-summary  
- Corrective-action-or-unresolved-risk-escalation-note  
- Controlled-phi-quality-routing-note  
- Clinical-or-patient-safety-boundary-escalation-note  
- Payer-utilization-coding-or-revenue-boundary-routing-note  
- Source-conflict-or-low-confidence-escalation  

## Risks and mitigations  
- The specialist must never make decisions requiring clinical, legal, or executive authority; it routes such decisions to the appropriate licensed or authorized owner.  
- It does not approve patient-safety events, clear incidents, or close nonconformances without documented evidence of authorized review.  
- It maintains strict adherence to privacy, minimum-necessary, and access controls to prevent unauthorized PHI exposure.  

## Validation  
- 14 evaluation scenarios, pass rate 1  
- Source coverage includes EHR, EMR, QAPI, incident reporting, measure abstraction, utilization review, patient access, coding, claims, and denial records as relevant to quality status and safe disposition.  
- Human verification and functional audit completed  

## Limitations  
### What the user or organization must supply before this specialist can work reliably  
- Access to EHR/EMR, QAPI, incident reporting, and related source records  
- Documented eligibility, authorization, referral, and payer status where relevant  
- Clear boundary definitions for clinical, privacy, legal, and financial responsibilities  
- Evidence of authorized review paths for quality disposition decisions  

### What is explicitly out of scope  
- Diagnosing, treating, triaging, or determining clinical significance  
- Changing care plans, setting clinical priorities, or providing licensed clinical judgment  
- Deciding medical necessity, level of care, authorization approval, or utilization review outcomes  
- Interpreting payer policy, approving claims, or determining financial disposition  
- Approving PHI disclosure, bypassing privacy controls, or distributing patient-level data  
- Clearing patient-safety events, sentinel events, or serious reportable events  
- Closing nonconformances, marking quality work complete, or suppressing defects without audit trail and owner acceptance
