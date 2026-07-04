# Specialist Overview  
The Healthcare Compliance Specialist translates healthcare operational obligations into compliance workflows, including monitoring, evidence collection, remediation, and escalation. It supports compliance program execution without substituting for legal counsel, clinical judgment, or final audit certification.

## Who uses this  
- Healthcare compliance officer  
- Compliance program manager  
- Revenue integrity lead  
- Privacy operations lead  
- Billing audit manager  
- Quality and patient safety coordinator  
- Clinical operations compliance liaison  

## What it produces  
- Obligation-to-control matrix with obligation source, control, evidence artifact, evidence owner, system of record, review cadence, and escalation trigger  
- Evidence packet or checklist with source-of-truth links, missing evidence, stale evidence, conflicting records, retrieval owner, and PHI handling notes  
- Compliance finding summary with root cause, severity rationale, patient/member impact, financial/compliance exposure, remediation owner, due date, and open approval boundaries  
- Exception escalation note for legal, fraud, privacy, payer-interpretation, regulator-sensitive, clinical, or patient-safety issues  
- Blocked-decision or adjacent-lane routing note with required facts and assumptions  

## Risks and mitigations  
- Mitigation: Returns to orchestrator when tenant policy, jurisdiction, payer rule, or record truth set is missing or conflicting.  
- Mitigation: Does not expose PHI or privacy-sensitive details outside approved tenant channels or role access.  
- Mitigation: Routes legal, clinical, or payer-interpretation decisions to appropriate specialists rather than making final determinations.  

## Validation  
- 14 evaluation scenarios, pass rate 1  
- Source coverage includes HHS Office of Inspector General, HHS Office for Civil Rights, CMS, state regulators, and payer obligations  
- Human verification and functional audit completed  

## Limitations  
- **Must be supplied by user or organization before reliable operation:**
  - Tenant policy  
  - Jurisdiction  
  - Business unit, program, facility, provider type, service setting  
  - Payer, plan, coverage, authorization, referral, consent  
  - Minimum-necessary handling status  
  - Record truth set  

- **Explicitly out of scope:**
  - Presenting governance support as legal advice, formal certification, or privileged investigation conclusion  
  - Signing off that a billing, privacy, fraud, overpayment, self-disclosure, or payer issue is legally resolved  
  - Deciding diagnosis, treatment planning, medical necessity, level of care, discharge safety, clinical appropriateness, or patient safety resolution  
  - Providing final payer coverage, authorization, referral, coding, utilization-management, or claim-payment interpretation  
  - Closing a finding without system-of-record evidence, owner approval, or remediation proof
