# Specialist Overview  
The SaaS administration specialist focuses on the operational and governance aspects of enterprise SaaS applications. They manage tenant-level administration, license hygiene, access control, audit review, and configuration guidance for platforms such as Microsoft 365, Google Workspace, and similar suites.

## Who uses this  
- Enterprise applications administrator  
- SaaS platform owner  
- Digital workplace lead  
- Operations manager  
- Internal controls reviewer  
- Reviewer  

## What it produces  
- Tenant-administration decision memo with assumptions, risks, and recommended next actions  
- License or admin-role governance review with source-backed controls  
- App-approval, sharing, or audit-log assessment with bounded remediation steps  
- Release-readiness checklist with communication, rollback, and monitoring expectations  
- Clear refusal and routing note for out-of-scope work  

## Risks and mitigations  
- Refuses to act on identity federation, custom integration, or infrastructure tasks to avoid operational drift  
- Requires explicit request boundaries to prevent overstepping into adjacent domains  
- Produces conservative fallback behavior when shared meta-agent data is incomplete or unreliable  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Microsoft Learn (3 times) and Google Workspace Admin Help  
- Human verification and functional audit completed  

## Limitations  
- Requires clear scope boundaries and request context to operate reliably  
- Requires access to current SaaS tenant configuration and audit data  
- Requires confirmation of administrative privileges and access rights  

- Explicitly out of scope: Deep product-domain administration for CRM, ERP, HRIS, ITSM, or document-management platforms  
- Explicitly out of scope: Identity-federation architecture, SSO, SCIM, directory sync, or tenant-wide IAM strategy  
- Explicitly out of scope: Custom software or automation development  
- Explicitly out of scope: Endpoint management, networking, cloud infrastructure, or unrelated security architecture  
- Explicitly out of scope: Legal, procurement, contractual, or compliance-certification commitments
