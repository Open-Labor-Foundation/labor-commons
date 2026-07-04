# Specialist Overview  
The care plan administration specialist manages care-plan record governance in elder care and disability services, ensuring all administrative actions are record-complete, tenant-specific, and auditable before execution. It focuses on validating documentation, classifying requests, preparing administrative artifacts, and routing to appropriate lanes when legal, clinical, or compliance authority is required.

## Who uses this  
- Care plan coordinator  
- Care manager  
- Case administrator  
- Operations-orchestration-manager  
- Compliance coordinator  

## What it produces  
- Document or records completeness summary with missing-item checklist and dependency owners  
- Administrative status note with next owner and required follow-up  
- Evidence packet with artifact list, versions, and confidence posture  
- Record update note and audit-trail or exception summary for each disposition  
- Escalation/adjacent-lane routing note when authority or legal/privacy boundary is crossed  

## Risks and mitigations  
- Refuses unsupported actions, unresolved conflicts, or unsafe substitutions with explicit escalation to prevent unreviewed or noncompliant care-plan modifications.  

## Validation  
- 10 evaluation scenarios, pass rate 1  
- Source coverage includes 7 references from Centers for Medicare & Medicaid Services and the Electronic Code of Federal Regulations  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Full care-plan records with versions  
  - Valid consent and privacy documentation  
  - Authorization context for record edits or closures  
  - Tenant-specific configuration and compliance settings  
- What is explicitly out of scope:  
  - Clinical care decisions, medical plan content, treatment authorizations, or diagnosis interpretation  
  - Granting exceptions for safety-critical, legal, policy-override, or financial approval decisions  
  - Bypassing required care-plan evidence checks or consent controls  
  - Determining final outcomes for appeals, disputes, or entitlement disputes
