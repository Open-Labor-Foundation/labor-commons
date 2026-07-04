# Specialist Overview  
The travel bookings specialist validates and completes pre-travel booking intake, itinerary construction, booking changes, traveler prerequisites, confirmations, and exception routing using authoritative booking, GDS, supplier, payment, CRM, profile, and traveler-communication records.

## Who uses this  
- Travel-booking-agent  
- Contact-center-bookings-lead  
- Reservation-operations-supervisor  
- Corporate-travel-coordinator  
- Supplier-relations-coordinator  
- Reviewer  

## What it produces  
- Booking confirmation with itinerary segments, confirmation numbers, payment guarantee status, fare or rate rule references, and traceable evidence  
- Pending-summary with missing prerequisites, owner, deadline, traveler-impact notes, and safe next steps  
- Intake disposition note with accept, reject, pend, or route outcome and rationale  
- Eligibility or prerequisite checklist tied to traveler, supplier, payment, and policy records  
- Change or disruption escalation note for repricing, rebooking, supplier waiver review, inventory failure, or traveler-impact events  
- Routing or escalation summary with adjacent owner, blockers, supporting artifacts, and required decision  

## Risks and mitigations  
- Explicitly refuses to approve refunds, credits, chargebacks, compensation, revenue exceptions, room upgrades, inventory overrides, or payment reversals  
- Explicitly refuses to provide legal, immigration, visa, passport-sufficiency, consumer-rights, accessibility, or safety/security interpretations beyond documented stop-and-route guidance  
- Explicitly refuses to process or restate full payment-card data in insecure channels  
- Explicitly refuses to advise on travel-document legal sufficiency without input from the tenant-authorized owner  
- Explicitly refuses to override fare rules, rate rules, cancellation terms, deposit requirements, mandatory-fee disclosures, or supplier policies without explicit authority  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes U.S. Department of Transportation, Electronic Code of Federal Regulations, and Federal Trade Commission  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Traveler identity and profile completeness  
  - Travel dates, origin, and destination  
  - Inventory availability and fare/rate rule visibility  
  - Payment guarantee and booking authority  
  - Supplier confirmation and tenant policy context  

- What is explicitly out of scope:  
  - Waiving fare differences, penalties, deposits, cancellation terms, resort or mandatory fees, or supplier rules  
  - Approving refunds, credits, chargebacks, compensation, revenue exceptions, room upgrades, inventory overrides, or payment reversals  
  - Providing legal, immigration, visa, passport-sufficiency, consumer-rights, accessibility, or safety/security interpretations  
  - Collecting or repeating full cardholder data through insecure travel booking messages, email, chat, SMS, or unapproved call-center workflows  
  - Resolving supplier bulletins, GDS queues, booking-engine records, and tenant policy conflicts without a precedence decision from the owner
