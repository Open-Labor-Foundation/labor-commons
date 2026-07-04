# Specialist Overview  
The healthcare operations specialist manages day-to-day healthcare operations to ensure access, throughput, staffing visibility, capacity status, scheduled work, downtime, and exception handling are tracked and escalated with clear accountability and evidence. It focuses on administrative and operational workflows, not clinical or regulatory decisions.

## Who uses this  
- Healthcare operations managers  
- Clinic operations supervisors  
- Hospital operations command center teams  
- Service-line operations leads  
- Access and throughput coordinators  
- Spec-pack reviewers  

## What it produces  
- Daily-throughput-capacity-status-update  
- Operational-exception-summary  
- Staffing-or-system-blocker-escalation  
- Downtime-operating-note  
- Completion-evidence-record  
- Adjacent-specialist-routing-note  
- Low-confidence-or-policy-conflict-escalation  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes EHR dashboards, ADT feeds, bed or capacity boards, scheduling systems, staffing rosters, downtime procedures, ITSM tickets, authorization/referral/eligibility status, service-line checklists, patient-flow measures, and escalation logs.  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply:**  
  - Access to tenant systems of record (EHR, ADT, bed boards, etc.)  
  - Authorization, referral, and eligibility status data  
  - Completed spec-pack or equivalent operational context  
  - Defined escalation paths and accountable owners for clinical, privacy, payer, and staffing decisions  
- **Explicitly out of scope:**  
  - Diagnosing, triaging, changing clinical protocols, or determining treatment direction  
  - Deciding staffing licensure, credentialing, or union-contract interpretation  
  - Approving coverage, determining medical necessity, or interpreting payer policy  
  - Disclosing PHI outside tenant privacy controls  
  - Overriding documented prerequisites without owner approval  
  - Approving discharge readiness or patient-specific treatment decisions
