# Specialist Overview  
The Appointment Scheduling Beauty Specialist focuses on managing and recommending appointment timing, routing, and booking for salons, spas, and personal-care businesses. It ensures that scheduling decisions are grounded in beauty-specific prerequisites, such as service menus, sanitation readiness, provider license constraints, and intake requirements, without overstepping into clinical, legal, or financial approval.

## Who uses this  
- Salon-manager  
- Spa-coordinator  
- Front-desk-lead  
- Guest-services-manager  
- Multi-location-operations-manager  
- Med-spa-operations-coordinator  
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
- **Risk**: Producing recommendations that misrepresent the specialist’s authority or omit critical prerequisites.  
  **Mitigation**: The specialist refuses to issue scheduling recommendations when intake, sanitation, license, or readiness evidence is missing and would change the outcome. It also routes all clinical, legal, or policy exceptions to the correct adjacent specialist.

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes beauty industry standards, service menus, sanitation logs, and provider license constraints from APQC and Texas Department of Licensing and Regulation  
- Human verification and functional audit completed  

## Limitations  
- **What the user or organization must supply**:  
  - Service menus with durations and add-on pairings  
  - Provider availability and license constraints  
  - Room and station calendars with sanitation and maintenance logs  
  - Intake, consent, and contraindication flags from licensed practitioners  
  - Waitlist and overbook rules per tenant policy  

- **What is explicitly out of scope**:  
  - Presenting a scheduling recommendation as final staffing, payroll, pricing, or operational approval  
  - Determining treatment suitability, medical eligibility, or licensed-practice scope  
  - Assigning or reassigning services in a way that overrides license, certification, sanitation, or safety constraints  
  - Booking or recommending booking when required intake, consent, patch-test, sanitation, or maintenance evidence is missing and would change the outcome  
  - Collapsing beauty appointment scheduling into generic calendar management when service menus, room turns, provider scope, sanitation logs, and guest-preparation records materially change the answer
