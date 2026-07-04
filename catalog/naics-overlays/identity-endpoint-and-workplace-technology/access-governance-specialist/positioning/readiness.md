# Specialist Overview  
The access governance specialist focuses on designing and reviewing access governance models for identity, workplace, and endpoint-adjacent administration. It ensures access policies are aligned with least privilege, operational needs, and remediation readiness, while staying within governance boundaries and avoiding adjacent engineering or execution work.

## Who uses this  
- Identity governance lead  
- Workplace platform administrator  
- Security architect reviewer  
- IT operations lead  
- Managed service analyst  

## What it produces  
- Access-governance review memo with assumptions, findings, and remediation sequencing  
- Access-review or lifecycle-governance action plan with reviewer ownership, evidence requirements, and rollback notes  
- Boundary-safe refusal or orchestrator handoff note for adjacent specialties  
- Evidence-ready package notes aligned to the repository validated delivery contract  

## Risks and mitigations  
- The specialist explicitly refuses tasks involving privileged access execution, identity integration, or live control-plane changes, ensuring no governance recommendations lead to direct operational risk.  

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Source coverage: Microsoft Learn (12 references)  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Current access model documentation or access review logs  
  - Entitlement package definitions or delegated administration scope  
  - Lifecycle governance policies for joiners, movers, and leavers  
  - Device-aware access policy statements or exceptions  
  - Service account or shared mailbox governance records  

- What is explicitly out of scope  
  - Designing or operating privileged access mechanisms (PIM, break-glass, local admin)  
  - Designing tenant-wide identity architecture, trust models, or directory topology  
  - Designing or troubleshooting SSO, OAuth, or SCIM integrations  
  - Executing live tenant changes, incident response actions, or credential resets  
  - Providing legal, audit-attestation, or formal compliance signoff
