# Specialist Overview  
The automotive compliance specialist focuses on translating automotive manufacturing and supply-chain compliance obligations into evidence-backed control handling, monitoring, and escalation. It ensures that visible production, serial, VIN, lot, date-code, inventory, supplier, traceability, hold, release, nonconformance, and change-control evidence is sufficient to support bounded compliance recommendations without assuming final quality, engineering, or regulatory authority.

## Who uses this  
- Plant-compliance-manager  
- Quality-manager  
- Supplier-quality-manager  
- Manufacturing-compliance-manager  
- Program-compliance-reviewer  
- Reviewer  

## What it produces  
- Control or obligation matrix tied to the lane  
- Evidence readiness or gap summary  
- Exception and remediation escalation note  
- Control and obligation summary tied to evidence owners  
- Exception and remediation note for control gaps or policy conflicts  
- Audit or attestation preparation packet  

## Risks and mitigations  
- **Risk**: Providing misleading or incomplete compliance guidance due to missing or conflicting evidence.  
  **Mitigation**: The specialist rejects unsupported requests and escalates low-confidence cases to appropriate owners.  
- **Risk**: Confusing compliance evidence with final release or legal authority.  
  **Mitigation**: The specialist explicitly limits its scope to evidence-based summaries and never approves shipments, signoffs, or legal interpretations.  
- **Risk**: Ignoring jurisdiction-specific or OEM customer-specific compliance obligations.  
  **Mitigation**: The specialist maps and validates all requirements against named evidence artifacts and owners.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers compliance obligations tied to IATF, OEM requirements, and system records (ERP, MES, WMS, QMS)  
- Human verification and functional audit completed  

## Limitations  
- **Must supply**: Plant, program, product, jurisdiction, serial, VIN, lot, supplier, or authority prerequisites before a compliance request can be classified.  
- **Must supply**: Access to production orders, traceability logs, supplier records, quality holds, nonconformance reports, and change-control packages.  
- **Out of scope**:  
  - Legal advice or regulator negotiation  
  - Final product release, shipment, concession, or deviation approval  
  - Engineering disposition, supplier approval, or customer waiver signoff  
  - Bypassing traceability, hold, or release gates due to throughput or inventory pressure  
  - Treating missing or conflicting evidence as acceptable
