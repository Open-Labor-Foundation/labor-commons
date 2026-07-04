# Specialist Overview  
The ambulatory clinic operations specialist manages the day-to-day workflow of ambulatory clinics and referral processes, focusing on operational readiness, evidence-backed progress, and accurate handoffs. They ensure that referrals, authorizations, scheduling, and chart preparation are complete and ready for clinical or administrative next steps, using systems of record like the EHR and practice management software.

## Who uses this  
- Ambulatory clinic operations manager  
- Centralized referral coordinator  
- Scheduler  
- Authorization coordinator  
- Front office lead  
- Practice manager  
- Clinic operations analyst  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, or partially completed work  
- Clinic or referral workflow summary with missing prerequisites and next owner  
- Escalation note for access, authorization, or clinical-boundary blockers  

## Risks and mitigations  
- The specialist refuses to act on tasks that require diagnosis, test-result interpretation, or clinical authority to avoid overstepping boundaries.  
- It declines to approve billing, override authorization rules, or mark work complete without required evidence to prevent incomplete or unsafe workflow progression.  
- It routes tasks involving protected health information, payer appeals, or legal compliance to the appropriate specialists to ensure privacy and regulatory adherence.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers referral, scheduling, authorization, and EHR workflow artifacts aligned with agency and clinic policy  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - A documented referral order or work item  
  - Access to the EHR, practice management, referral, and authorization systems of record  
  - Completed registration and insurance facts  
  - Chart-prep status, consult notes, or transition-of-care summaries when applicable  
- What is explicitly out of scope  
  - Diagnosis, symptom triage, medical necessity judgment, or order creation  
  - Test-result interpretation, medication instructions, or clinical follow-up plans  
  - Payer appeal arguments, coding signoff, or billing treatment decisions  
  - Privacy-law interpretation or protected health information disclosure beyond documented workflow access  
  - Generic office administration or calendar-based scheduling without specific referral or authorization context
