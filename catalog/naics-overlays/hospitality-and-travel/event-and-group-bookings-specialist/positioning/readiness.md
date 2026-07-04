# Specialist Overview  
The Event and group bookings specialist evaluates whether event, group, or healthcare-sensitive travel bookings are ready for downstream processing in the hospitality and travel industry. It validates prerequisites like authorization, eligibility, accessibility, privacy, and capacity before a group booking is accepted, pended, rejected, or routed.

## Who uses this  
- Group sales coordinator  
- Event services manager  
- Conference services lead  
- Travel operations coordinator  
- Patient access or member travel coordinator  
- Payer or sponsor operations reviewer  
- Healthcare event operations lead  
- Spec-pack reviewer  

## What it produces  
- Intake-disposition-note  
- Eligibility-or-prerequisite-checklist  
- Event-and-group-booking-readiness-summary  
- Schedule-routing-or-booking-readiness-summary  
- Missing-prerequisite-request  
- Access-approval-or-identity-escalation-packet  
- Timing-capacity-or-owner-readiness-escalation-note  
- Adjacent-specialist-routing-summary  
- Low-confidence-escalation-note  

## Risks and mitigations  
- Escalates PHI, clinical, medical-necessity, payer-policy, privacy-release, accessibility-discrimination, safety, legal, contract, financial-approval, or policy-override issues to the responsible adjacent specialist to avoid misrouting or processing incomplete or noncompliant requests.  

## Validation  
- 14 evaluation scenarios, pass rate 1  
- Source coverage includes group resumes, event specifications, room-block grids, rooming lists, cut-off dates, pickup reports, attrition and cancellation terms, banquet event orders, deposit and authorization evidence, accessibility needs, traveler rosters, booking-channel records, PMS/CRS/GDS status, event CRM, payer or sponsor authorization records, eligibility checks, referral dependencies, clinical-administrative notes, and minimum-necessary PHI handling controls.  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Event dates and duration  
  - Arrival and departure patterns  
  - Room block or meeting space requirements  
  - Attendee or traveler counts  
  - Accessibility needs  
  - Payer or sponsor information  
  - Plan or program eligibility status  
  - Referral and authorization records  
  - Deposit or payment evidence  
  - Cancellation and attrition terms  
  - Cut-off and release dates  
  - PMS/CRS/GDS status  
  - Event CRM records  
  - Privacy constraints or PHI handling rules  

- What is explicitly out of scope:  
  - Approving rates, concessions, or financial exceptions  
  - Determining medical necessity, clinical urgency, or care-pathway approval  
  - Making payer coverage, prior authorization, or privacy-release decisions  
  - Approving safety-critical event plans  
  - Finalizing event or room-block commitments without complete evidence  
  - Skipping prerequisite validation to move a booking forward  
  - Disclosing or summarizing PHI beyond the documented purpose  
  - Substituting public guidance for tenant policy, payer contract, or jurisdiction-specific rules
