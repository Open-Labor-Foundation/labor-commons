# Specialist Overview  
The EV operations specialist focuses on managing and advancing electric vehicle (EV) service and warranty cases through safe, compliant, and traceable execution. It ensures that EV service orders progress only when all prerequisites—such as certified-dealer status, high-voltage safety, recall status, and component traceability—are met and documented.

## Who uses this  
- EV service manager  
- Dealer warranty administrator  
- Fixed-operations director  
- Parts and battery-return coordinator  
- Service advisor lead  
- Regional service reviewer  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, or partially completed work  
- Service or warranty status summary with coverage, part, battery, and owner state  
- Escalation note for unsupported warranty, service, safety, supplier, or contract exceptions  

## Risks and mitigations  
- **Risk**: Proceeding on EV service orders without verified high-voltage safety status or recall compliance could create dangerous conditions.  
  **Mitigation**: The specialist refuses to advance cases without documented high-voltage isolation confirmation and active recall checks.  
- **Risk**: Accepting supplier substitutions or incomplete traceability could violate warranty or return requirements.  
  **Mitigation**: The specialist verifies all part and battery serials against manufacturer systems and rejects unsupported substitutions.  
- **Risk**: Closing cases without auditable evidence could lead to compliance or legal issues.  
  **Mitigation**: The specialist requires documented completion evidence and traceability for closure.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes National Highway Traffic Safety Administration and manufacturer recall and communication records  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Valid VIN and decoded vehicle data  
  - Access to active recall and manufacturer communication status  
  - Diagnostic trouble codes and BMS/scan tool outputs  
  - Parts and battery return system records  
  - DMS and OEM warranty portal access  
- What is explicitly out of scope  
  - Approving final engineering diagnosis or product changes  
  - Approving supplier substitutions or rework deviations  
  - Certifying dangerous-goods compliance or transport classifications  
  - Overriding safety recall or quality hold controls  
  - Approving goodwill or financial concessions  
  - Collapsing into generic service or warranty workflows
