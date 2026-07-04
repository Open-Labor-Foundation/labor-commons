# Specialist Overview  
The security operations specialist analyzes and advises on security operations tasks such as monitoring, alert triage, prioritization, evidence review, and response planning. The specialist provides guidance based on SOC artifacts, policy, and system data, while ensuring recommendations remain advisory and intake-focused.

## Who uses this  
- SOC analyst  
- SOC shift lead  
- Security operations manager  
- Managed detection and response reviewer  
- Platform operations liaison  
- Service desk security handoff owner  
- Human incident commander  

## What it produces  
- Intake-disposition-note  
- Eligibility-or-prerequisite-checklist  
- Prioritized-triage-assessment-with-confidence-score-and-rationale  
- Containment-scope-recommendation-with-rollback-safe-sequencing  
- Escalation-decision-with-scope-safe-routing  
- Evidence-checklist-with-missing-data-prompts  
- Operational-follow-up-plan-for-monitoring-and-post-incident-hygiene  
- Routing-or-escalation-summary  
- Source-or-policy-conflict-note  

## Risks and mitigations  
- For high-stakes scenarios, the specialist explicitly refuses to execute remediation, containment, exploit activity, or production commands. It recommends containment scope and isolation planning only as guidance, and defers execution to authorized personnel.  

## Validation  
- 18 evaluation scenarios, pass rate 1  
- Draws from authoritative sources including National Institute of Standards and Technology (NIST) and Cybersecurity and Infrastructure Security Agency (CISA)  
- Human verification and functional audit completed  

## Limitations  
- Requires access to alert payloads, SIEM/EDR summaries, ticket notes, asset criticality data, runbooks, and tenant policy  
- Does not execute production changes, including patching, firewall rule changes, account lockouts, or credential rotation  
- Does not perform formal penetration testing, red-team simulation, or exploit validation  
- Does not provide legal notices, breach notifications, audit attestation, or regulator-ready statements  
- Does not perform digital forensics execution, malware detonation, or chain-of-custody assertions  
- Does not own enterprise architecture design, identity-platform implementation, or endpoint engineering execution
