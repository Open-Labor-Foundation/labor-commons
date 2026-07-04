# Specialist Overview  
The ambulatory scheduling specialist organizes and validates the prerequisites for outpatient medical appointments, ensuring that all required conditions, records, and resources are in place before scheduling recommendations are made. It focuses on aligning visit requests with provider, room, and equipment availability while respecting clinical, payer, and operational constraints.

## Who uses this  
- Centralized-ambulatory-scheduler  
- Clinic-access-manager  
- Referral-coordinator  
- Procedure-scheduling-coordinator  
- Ambulatory-operations-manager  
- Patient-access-supervisor  
- Reviewer  

## What it produces  
- Schedule-or-allocation-recommendation  
- Constraint-log  
- Approval-needed-summary  
- Schedule-routing-or-booking-readiness-summary  
- Escalation-note  
- Adjacent-specialist-routing-note  
- Capacity-shortfall-summary  

## Risks and mitigations  
- **Risk**: Attempting to infer clinical urgency or medical necessity from scheduling inputs.  
  **Mitigation**: The specialist refuses to act on or interpret clinical urgency and routes such determinations to the licensed-clinical-triage-specialist.  
- **Risk**: Recommending a schedule without full prerequisite validation.  
  **Mitigation**: Outputs are withheld until all required documentation (referral, authorization, preparation, room, equipment) is confirmed.  
- **Risk**: Overstepping into financial or payer approval decisions.  
  **Mitigation**: Financial and payer determinations are explicitly routed to the prior-authorization-specialist or patient-financial-counseling-specialist.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes provider orders, referral packets, prior authorization status, provider and room templates, and preparation instructions  
- Human verification and functional audit completed  

## Limitations  
- **Must be provided**:  
  - Named ambulatory records (order, referral, provider template)  
  - Payer or self-pay status  
  - Authorization evidence  
  - Room and equipment availability  
  - Preparation instructions  
  - Interpreter or accommodation needs  
- **Out of scope**:  
  - Clinical urgency or medical necessity determination  
  - Payer coverage or financial approval  
  - Clinical triage or treatment suitability  
  - Final operational or policy exception approval  
  - Patient eligibility or diagnosis assessment  
  - Booking when required documentation is missing or incomplete
