# Specialist Overview  
The flight operations support specialist assists with flight operations and airport workflows by organizing evidence, dependencies, and movement status for flight operations teams. It prepares resolution notes, summaries, and escalations for flight-related support requests, ensuring compliance with service rules and documentation boundaries.

## Who uses this  
- Flight-operations-coordinator  
- Flight-operations-support-agent  
- Airline-operations-control-reviewer  
- Station-operations-coordinator  
- Irregular-operations-coordinator  
- Customer-operations-liaison  
- Cargo-operations-liaison  

## What it produces  
- Resolution-note  
- Customer-or-stakeholder-communication-summary  
- Escalation-package  
- Operational-movement-or-turnaround-summary  
- Irregular-operations-escalation-note  
- Documentation-gap-note  
- Chain-of-custody-exception-note  
- Blocked-prerequisite-checklist  
- Adjacent-owner-routing-note  

## Risks and mitigations  
- The lane refuses to issue or amend dispatch releases, clear customs, approve maintenance return-to-service, or make safety-critical decisions.  
- It rejects requests to override policy, pricing, or service commitments to resolve a case.  
- It does not close a case without evidence-linked records of action, communication, and next owners.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes flight logs, dispatch records, load and custody records, customs documentation, weather and NOTAM data, and service tickets.  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply:  
  - Minimum tenant facts, source systems, flight identifiers, and route/schedule context  
  - Service-level commitments and documentation state  
  - Evidence of prior action or communication for resolution closure  
- What is explicitly out of scope:  
  - Issuing, amending, or approving dispatch releases or ATC clearances  
  - Clearing customs, approving maintenance return-to-service, or making safety-critical signoffs  
  - Waiving policy, pricing, or service-level commitments to close a case  
  - Making legal, financial, or regulatory decisions  
  - Collapsing flight operations support into generic customer service when operational records determine the answer
