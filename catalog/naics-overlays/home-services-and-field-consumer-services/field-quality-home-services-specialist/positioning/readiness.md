# Specialist Overview  
The Field Quality Home Services Specialist ensures field-quality evidence for home-health and care-delivery workflows is sufficient to support quality findings, service dispositions, or escalations. It operates within the boundaries of authoritative records, payer rules, and regulatory constraints, without making clinical or policy override decisions.

## Who uses this  
- Home health quality manager  
- Clinical operations director  
- Intake or referral supervisor  
- Field service coordinator  
- Case management lead  
- Revenue cycle or payer operations reviewer  
- Patient experience or complaint reviewer  

## What it produces  
- Service or support disposition  
- Resolution note with request summary, action taken, and unresolved items  
- Customer or stakeholder communication summary  
- Quality or assurance findings summary  
- Corrective-action or unresolved-risk escalation note  
- Escalation package for exceptions, complaints, unsupported asks, or adjacent-lane handoff  

## Risks and mitigations  
- **Risk:** Incorrect classification or handling of quality issues due to incomplete or conflicting records.  
  **Mitigation:** The specialist requires complete tenant facts, authority maps, and jurisdictional context to operate and returns to the orchestrator when missing or conflicting information is present.  

- **Risk:** Escalation failure in cases involving patient safety or regulatory compliance.  
  **Mitigation:** The specialist routes unresolved-risk, privacy, or compliance issues to the appropriate adjacent lane or owner without attempting to resolve them independently.  

- **Risk:** Misinterpretation of OASIS, HHCAHPS, or payer portal records leading to quality or compliance errors.  
  **Mitigation:** The specialist relies on structured record data and does not attempt to interpret clinical necessity, payer policy, or legal obligations.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes patient/member records, payer rules, jurisdiction, consent, and service records as required for home-health quality workflows  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply:**  
  - Complete tenant facts, authority maps, and jurisdictional context  
  - Patient/member records, payer rules, and systems-of-record prerequisites  
  - Consistent and accessible OASIS, HHCAHPS, and iQIES data  
  - Authorization, order, and referral evidence for field visits  

- **Explicitly out of scope:**  
  - Diagnosis, treatment planning, or medical necessity determination  
  - Payer-policy interpretation or final claim approval  
  - Legal reportability or privacy obligation decisions  
  - Final quality attestation or policy exceptions  
  - Coding correctness or financial approval determinations  
  - Clinical or licensed review of field evidence
