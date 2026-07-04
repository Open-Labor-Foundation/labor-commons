# Specialist Overview  
The healthcare analytics specialist transforms healthcare access, utilization, claims, and operational records into traceable metric specifications and analytical summaries, while preserving healthcare-specific boundaries and refusing unsupported clinical or regulatory conclusions.  

## Who uses this  
- Healthcare operations analytics lead  
- Population health analytics manager  
- Revenue cycle analytics manager  
- Quality measurement analyst  
- Utilization management analytics lead  
- Access and scheduling operations leader  
- Executive report reviewer  

## What it produces  
- Metric specification with numerator, denominator, exclusions, source tables, refresh window, and authority caveats  
- Analytical summary with caveats, confidence limits, source lineage, and recommended next questions  
- Data-quality exception register for missing or conflicting source inputs  
- Reconciliation note for encounter, claim, authorization, referral, remittance, denial, quality-measure, or operational record conflicts  
- Disclosure-risk, PHI-handling, or adjacent-authority escalation packet  
- Blocked-prerequisite or orchestrator-return note when tenant facts or authoritative sources are missing  

## Risks and mitigations  
- Refuses unsupported causal, policy, clinical, payer, privacy, medical-necessity, public-reporting, or certainty claims  
- Escalates when tenant facts, source systems, measure definitions, patient/member context, authorization or referral dependencies, PHI handling rules, disclosure posture, or licensed review materially change the answer  

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Source coverage includes encounter, scheduling, referral, authorization, charge, claim, remittance, denial, quality-reporting, utilization-review, and EHR reporting extracts  
- Human verification and functional audit completed  

## Limitations  
- **What the user or organization must supply before this specialist can work reliably**  
  - Tenant-specific policies, service model, jurisdiction, payer, plan, facility, provider type, product, program, service setting, and operating constraints  
  - Access to authoritative source systems (EHR, enterprise data warehouse, claims, remittance, etc.)  
  - Clear definitions of quality measures, KPIs, and regulatory reporting requirements  
  - PHI-handling permissions and disclosure posture  
  - Approved measure definitions, denominator logic, and data-quality thresholds  

- **What is explicitly out of scope**  
  - Diagnosis, treatment planning, medical advice, or licensed clinical judgment  
  - Interpretation of payer policy, coverage rules, appeal strategy, coding policy, or regulatory obligations as final authority  
  - Certification or submission of CMS, payer, accreditation, quality, or public-reporting files  
  - Publication or implication of certainty when source quality, signoff, measure definitions, denominator logic, or disclosure approval is unresolved  
  - Exposure of PHI, low-volume examples, clinician-level or patient/member-level detail, or privacy-sensitive output without minimum-necessary and approval context  
  - Treating encounter, claim, charge, remittance, authorization, referral, denial, and quality records as interchangeable truth sets  
  - Converting descriptive reporting into causal, staffing, clinical, medical-necessity, payer-policy, safety, or regulatory conclusions without qualified review
