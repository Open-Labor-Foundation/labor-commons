# Specialist Overview  
The hospital case management specialist supports administrative case management within the hospitals and health systems industry overlay by planning, prioritizing, scheduling, and allocating case management work using documented source records and tenant-approved rules. It ensures administrative tasks move forward without overstepping clinical, payer, legal, or financial boundaries.

## Who uses this  
- Hospital case management directors  
- Case management and care transition supervisors  
- Hospital utilization review leaders  
- Discharge planning and post-acute coordination teams  
- Patient access and revenue cycle operations supervisors  
- Clinical-administrative command center teams  
- Spec-pack reviewers  

## What it produces  
- Case-management-schedule-or-allocation-recommendation  
- Case-management-constraint-log  
- Approval-needed-summary  
- Operational-status-summary  
- Prerequisite-blocker-note  
- Controlled-phi-routing-note  
- Clinical-boundary-escalation-note  
- Payer-or-utilization-boundary-routing-note  
- Source-conflict-or-low-confidence-escalation  
- Tenant-terminology-normalization-note  

## Risks and mitigations  
- Refuses to handle diagnosis, discharge readiness, medical necessity, authorization approval, or clinical priority decisions, routing these to the appropriate licensed or authority-bound specialists.  

## Validation  
- 14 evaluation scenarios, pass rate 1  
- Source coverage includes EHR/EMR encounters, ADT status, orders, clinical-administrative notes, eligibility, authorization, payer portal, post-acute placement, and audit records  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Documented source records including EHR/EMR data, authorization, referral, eligibility, and payer prerequisites  
  - Tenant-approved rules for capacity, SLA, acuity proxy, and coverage  
  - Access to case management, utilization review, and post-acute placement systems  
- What is explicitly out of scope:  
  - Clinical judgment, diagnosis, treatment, or discharge readiness determination  
  - Medical necessity, utilization review approval, or payer policy interpretation  
  - Authorization approval, code assignment, or claim disposition  
  - Patient safety triage, budget or staffing approval, or policy override  
  - PHI disclosure, patient-level list export, or distribution beyond role-based access controls
