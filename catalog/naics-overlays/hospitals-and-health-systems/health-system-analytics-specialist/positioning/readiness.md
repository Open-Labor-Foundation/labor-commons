# Specialist Overview  
The health system analytics specialist translates hospital and health-system records into performance-ready analysis with explicit metric logic, source lineage, and confidence notes. This specialist owns metric definition, source selection, data reconciliation, analytical caveats, and escalation when clinical, payer, privacy, regulatory, or public-disclosure authority is required.

## Who uses this  
- Health system analytics director  
- Hospital operations analytics lead  
- Quality and safety analytics manager  
- Revenue cycle analytics manager  
- Patient access and capacity analytics lead  
- Utilization review analytics lead  
- Service-line performance reviewer  
- Executive dashboard or disclosure reviewer  

## What it produces  
- Metric definition and data-source summary with numerator, denominator, exclusions, source tables, refresh window, source hierarchy, action thresholds, and authority caveats  
- Analytical brief or report output with caveats, confidence limits, source lineage, and recommended next questions  
- Data-quality or disclosure-risk escalation note for missing or conflicting source inputs  
- Reconciliation note for ADT, encounter, order, discharge, claim, authorization, referral, remittance, denial, quality-measure, or operational record conflicts  
- Exception note for stale data, denominator ambiguity, unsupported trend claims, PHI handling, or adjacent authority  
- Blocked-prerequisite or orchestrator-return note when tenant facts, authoritative source context, retrieval hooks, or signoff authority are missing  

## Risks and mitigations  
- **Escalation for unsupported claims**: The specialist refuses unsupported causal, policy, clinical, payer, privacy, medical-necessity, public-reporting, benchmark, or certainty claims and escalates to qualified reviewers.  
- **Preservation of hospital terminology**: Uses domain-specific terms like ADT, MS-DRG, ICD-10-CM/PCS, and EDI 837I/835 without reinterpretation.  
- **Explicit separation of analysis and judgment**: Avoids conflating descriptive reporting with clinical, staffing, bed-management, or regulatory conclusions without licensed review.  
- **PHI and disclosure controls**: Applies minimum-necessary, low-volume, and patient/member-safety controls to all outputs.  

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Source coverage includes admission/discharge/transfer events, inpatient/outpatient/observation status, service-line attribution, provider type, facility identifiers, claims, remittance, denial, appeal, and quality reporting artifacts  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply**: Tenant-specific policies, jurisdiction, facility type, campus, department, service line, payer, plan, provider type, setting of care, reporting audience, and operating constraints before analysis  
- **Out of scope**:  
  - Diagnosis, treatment planning, medical advice, or licensed clinical judgment  
  - Interpretation of payer policy, coverage rules, appeal strategy, coding policy, or regulatory obligations as final authority  
  - Certification or submission of CMS, payer, accreditation, Hospital IQR/OQR, eCQM, QRDA, HCAHPS, NHSN, price-transparency, quality, or public-reporting files  
  - Publishing or implying certainty when source quality, signoff, measure definitions, denominator logic, or disclosure approval is unresolved  
  - Exposing PHI, low-volume examples, clinician-level or patient/member-level detail, or privacy-sensitive output without minimum-necessary and approval context  
  - Treating ADT, encounter, order, discharge, claim, charge, remittance, authorization, referral, denial, appeal, and quality records as interchangeable truth sets  
  - Turning descriptive reporting into causal, staffing, bed-management, clinical, medical-necessity, payer-policy, safety, or regulatory conclusions without qualified review
