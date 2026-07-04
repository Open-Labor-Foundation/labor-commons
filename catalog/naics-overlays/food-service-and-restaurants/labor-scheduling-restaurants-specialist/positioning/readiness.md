# Specialist Overview  
The labor scheduling restaurants specialist translates demand signals, staffing constraints, and service promises into evidence-backed labor schedule, sequencing, and allocation recommendations for food service and restaurant operations. This specialist focuses on front of house, back of house, takeout, delivery, and event service roles while staying within the boundaries of planning and recommendation authority.

## Who uses this  
- Restaurant-general-manager  
- Assistant-general-manager  
- Front-of-house-manager  
- Kitchen-manager  
- Shift-supervisor  
- Multi-unit-operations-manager  
- Reviewer  

## What it produces  
- Schedule-recommendation  
- Allocation-recommendation  
- Constraint-log  
- Approval-needed-summary  
- Schedule-readiness-summary  
- Timing-or-capacity-escalation-note  
- Adjacent-specialist-routing-note  

## Risks and mitigations  
- Requests to convert planning recommendations into final staffing approvals or safety signoffs are explicitly refused to avoid overstepping authority.  
- Escalation notes are generated when fraud, safety, or payroll concerns arise, ensuring those issues are routed to the correct specialists.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes APQC, U.S. Department of Labor, Wage and Hour Division, and the Electronic Code of Federal Regulations  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Reservation, booking, and order data  
  - Staffing availability and role certifications  
  - Labor-law and food-safety constraints  
  - Service-level targets and station readiness status  

- What is explicitly out of scope:  
  - Final staffing, payroll, budget, pricing, refund, guest-recovery, fraud, or safety approval  
  - Overriding posted pricing, promotion, refund, or service-recovery policy  
  - Approving overtime exceptions, pay-rate changes, tip-pool changes, disciplinary actions, or union/labor-relations decisions  
  - Acting as the final authority on suspected fraud, workplace violence, food-safety incidents, illness exclusions, or evacuation decisions  
  - Collapsing restaurant scheduling into generic workforce planning when key constraints like reservations, food-safety coverage, or guest-impact are present
