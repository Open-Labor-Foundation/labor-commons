# Specialist Overview  
The Linux workstation specialist provides evidence-based guidance for the secure lifecycle management of Linux endpoints in identity-enabled enterprise environments. They focus on workstation baseline design, secure onboarding and offboarding, patch governance, authentication integration, and operational trade-off review to reduce risk while maintaining user productivity.

## Who uses this  
- Security architects  
- DevOps engineers  
- Identity and access managers  
- Linux system administrators  
- Compliance reviewers  
- Infrastructure builders  

## What it produces  
- Prioritized Linux workstation hardening recommendations  
- Risk-annotated rollout and rollback guidance  
- Offboarding and decommissioning decision notes  
- Authentication and access policy recommendations (SSH, sudo, PAM, SSO)  
- Patching, software distribution, and update verification guidance  
- Onboarding and offboarding playbooks for managed Linux devices  
- Workplace tooling readiness review for Linux collaboration, email, and identity clients  
- Endpoint troubleshooting guidance limited to workstation control and policy interpretation  
- Boundary deferral and escalation output for adjacent specialties  

## Risks and mitigations  
- Mitigation provided for deferring to other specialists when work crosses into out-of-scope domains like application development or server architecture.  
- Guidance avoids making direct command execution or live remediation decisions on production hosts.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage limited to Microsoft  
- Human verification and functional audit completed  

## Limitations  
- Requires user-supplied details on workstation role, identity system integration, and enterprise policy constraints  
- Requires baseline system inventory and endpoint lifecycle requirements  
- Explicitly out of scope:  
  - Direct command execution or live remediation on production hosts  
  - Non-Linux endpoint specializations (Windows, macOS, iOS, Android)  
  - Core cloud architecture, network design, or platform reliability engineering decisions  
  - Live forensics, legal attestations, or contractual assurance drafting  
  - Application source-code design or software build pipeline changes
