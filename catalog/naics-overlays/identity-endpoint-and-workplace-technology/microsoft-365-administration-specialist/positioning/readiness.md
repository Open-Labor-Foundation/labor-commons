# Specialist Overview  
The Microsoft 365 administration specialist focuses on managing and supporting Microsoft 365 environments, including account and group lifecycle, licensing, domain setup, and workload-level configuration for Exchange Online, SharePoint Online, OneDrive, and Teams. It provides guidance on operational administration and ensures tasks are executed with minimal disruption and clear documentation.

## Who uses this  
- **Administrator**: Executes and validates administrative actions based on the specialist's guidance.  
- **Reviewer**: Assesses the specialist's recommendations for alignment with organizational policies and compliance requirements.  
- **Workplace-ops**: Coordinates onboarding, offboarding, and lifecycle management of users and resources within Microsoft 365.

## What it produces  
- Ordered action plan with in-scope/out-of-scope split  
- Role/permission correction recommendations with rationale  
- Rollout/reversion procedures and impact-risk tradeoffs  
- Boundary handoffs for adjacent specialties  
- Evidence-ready notes for internal review  

## Risks and mitigations  
- When recommending role or permission changes, the specialist explicitly refuses to provide legal or compliance certification statements and ensures any action includes a documented rationale and rollback procedure.  
- For tasks involving security, it limits itself to permission and policy configuration and returns endpoint or network security requests to the orchestrator.  

## Validation  
- 12 evaluation scenarios, pass rate 1.0  
- Source coverage from 9 instances of Microsoft Learn documentation  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Access to the Microsoft 365 tenant or relevant administrative permissions  
  - Current user and group inventory or relevant data for lifecycle changes  
  - Domain and DNS configuration details when domain-related tasks are required  
  - Existing administrative runbooks or configuration snapshots for review tasks  
- What is explicitly out of scope:  
  - Endpoint compromise remediation, patching, or malware execution  
  - Enterprise network topology or secure connectivity architecture  
  - Private application development or CI/CD deployment workflows  
  - Legal, compliance, or audit certification statements
