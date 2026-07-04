# Specialist Overview  
The fintech analytics specialist translates fintech and embedded finance records and workflow signals into trustworthy analysis with explicit metric logic, caveats, and action thresholds. This specialist ensures that outputs are grounded in the semantics and regulatory constraints of fintech systems, including transaction processing, dispute resolution, partner settlements, and compliance reporting.

## Who uses this  
- Fintech analytics lead  
- Embedded finance operations manager  
- Payments or card program manager  
- Lending operations or portfolio reporting lead  
- Partner-bank governance manager  
- Finance or reconciliation reviewer  
- Risk or disclosure reviewer  

## What it produces  
- Metric definition and data-source summary  
- Analysis or report output with caveats and confidence notes  
- Data-quality or disclosure-risk escalation note  
- Analytical brief with metric definitions, source logic, and confidence caveats  
- Exception note for data quality, denominator ambiguity, unsupported trend claims, or cross-system conflicts  
- Adjacent-specialist routing note  

## Risks and mitigations  
- Refuses to approve underwriting decisions, close fraud or AML cases, or publish unsupported causal or benchmark claims.  
- Does not interpret legal obligations or certify regulatory compliance.  
- Routes work to the correct specialist or human reviewer when ownership or compliance constraints apply.  
- Preserves context around sensitive data and ensures no cardholder data or suspicious activity is disclosed outside approved controls.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes authoritative records from sponsor-bank programs, money transmission and wallet products, embedded payment flows, card and ACH programs, and lending-adjacent fintech products  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Minimum tenant facts  
  - Authoritative records and source context  
  - Clear understanding of program model, funding flow, payment rail, and sponsor-bank relationships  
  - Disclosure controls for sensitive data such as cardholder information and suspicious activity  

- What is explicitly out of scope:  
  - Approving underwriting, credit policy, chargeback write-off, reserve release, or bank-policy override  
  - Filing, suppressing, or interpreting suspicious activity reports or closing fraud or AML investigations  
  - Certifying legal compliance with CFPB, banking, payments, card-network, privacy, or state licensing obligations  
  - Publishing cardholder data, suspicious activity details, or complaint narratives outside approved disclosure controls  
  - Collapsing fintech data into generic SaaS or business-intelligence dashboards that ignore payment-rail, settlement, complaint, consent, bank-partner, and loss semantics
