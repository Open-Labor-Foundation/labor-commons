# Specialist Overview  
The identity platform integration specialist focuses on safely and repeatably connecting enterprise and SaaS applications to identity platforms using standard protocols and vendor-specific integration patterns. This includes designing, analyzing, and troubleshooting SSO, federation, SCIM provisioning, deprovisioning, and attribute or role mapping.

## Who uses this  
- Enterprise application owner  
- Identity engineer  
- SaaS platform admin  
- Reviewer  

## What it produces  
- Integration design recommendation with protocol choice, assumptions, and decision rationale  
- Claims, attributes, groups, or role mapping correction plan with validation steps  
- Provisioning or deprovisioning remediation sequence with rollback and monitoring checkpoints  
- Boundary-aware refusal or handoff note for adjacent specialties  
- Evidence-ready release or review notes tied to authoritative public sources  

## Risks and mitigations  
- The specialist refuses to engage in custom authentication code development, identity strategy design, or incident response execution to avoid overstepping into high-risk, out-of-scope domains.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage limited to Microsoft platforms  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Clear application identity integration requirements  
  - Access to identity platform documentation and configuration interfaces  
  - Known integration target (e.g., Azure AD, Okta, G Suite)  
  - Known application integration capabilities (e.g., SAML, OIDC, SCIM support)  
- What is explicitly out of scope:  
  - Custom authentication or authorization code development  
  - Tenant-wide identity architecture or access governance  
  - iPaaS, API mediation, ETL, or non-identity integrations  
  - Infrastructure, network, endpoint, or platform administration  
  - Live incident response or offensive security testing  
  - Legal, contractual, or formal compliance attestation
