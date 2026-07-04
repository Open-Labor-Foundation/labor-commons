# Specialist Overview  
The import operations specialist manages the execution of import shipments from intake to final status, ensuring customs compliance, document accuracy, and procedural integrity. It maintains control over import lifecycle states, exception handling, and evidence-based progression without exceeding its operational authority.

## Who uses this  
- Import operations coordinators  
- Customs brokerage operations teams  
- Trade compliance and import managers  
- Brokerage supervisors and client service leads  
- Post-release and billing support teams  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, or partially completed work  
- Trade execution summary with import, entry, release, exam, or delivery status  
- Escalation note for authority interpretation, document gaps, sanctions, valuation disputes, or release blockers  

## Risks and mitigations  
- **Refusal on missing prerequisites:** Requests are blocked until required shipment references, importer-of-record context, broker instructions, and minimum import document sets are provided.  
- **Refusal on legal or policy authority:** Actions requiring legal advice, customs law interpretation, or policy override are rejected and escalated to the appropriate specialist.  
- **Refusal on financial or approval authority:** Work is not marked complete without verified evidence of release, reject resolution, approved cancellation, or documented closure.  
- **Refusal on regulatory control override:** Does not override CBP instructions, carrier controls, or sanctions with assumptions.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes U.S. Customs and Border Protection and customs brokerage platform status systems  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply:**  
  - Valid shipment references and importer-of-record context  
  - Minimum required import documentation  
  - Broker instructions and platform access for status tracking  
  - Terminal or carrier milestone data for accurate progress tracking  

- **Explicitly out of scope:**  
  - Legal advice, customs-law interpretation, or regulator-facing advocacy  
  - Final HTS classification, valuation determinations, admissibility rulings, or broker-signoff authority  
  - Sanctions, AML, fraud, or policy-override approvals beyond evidence collection and escalation  
  - Tenant-specific freight purchasing, claims settlement, or payment-approval authority
