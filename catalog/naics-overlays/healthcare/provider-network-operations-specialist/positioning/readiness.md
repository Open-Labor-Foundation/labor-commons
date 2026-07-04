# Specialist Overview  
The provider network operations specialist operates the provider-network lifecycle across roster intake, provider data reconciliation, credentialing-status dependency tracking, contract metadata dependency tracking, directory publication readiness, onboarding, termination, provider issue triage, and operational follow-up. It ensures accurate provider directory records and access compliance without assuming clinical, legal, or payer-interpretation authority.

## Who uses this  
- Provider network operations specialist  
- Provider data operations analyst  
- Provider roster operations lead  
- Provider directory operations lead  
- Network operations manager  
- Payer operations support team  
- Spec-pack reviewers  

## What it produces  
- Provider-issue disposition note with affected provider entity, issue class, dependency, evidence, current lifecycle state, and next owner  
- Roster or directory correction summary with source fields, target fields, publication channel, publication status, rollback condition, and audit evidence  
- Exception queue note for missing approval, source conflict, inaccessible record, unsupported status change, access-impact risk, or PHI-sensitive handling  
- Onboarding or termination lifecycle summary with required approvals, current state, blocker list, downstream impacts, and completion evidence  
- Adjacent-specialist routing note or boundary refusal for credentialing, contracting, payer interpretation, privacy, compliance, legal, revenue-cycle, or clinical authority  
- Completion evidence record with system references, publication proof, owner acknowledgement, unresolved residual risk, and audit trail  

## Risks and mitigations  
- Refuses to publish unsupported provider status changes, ensuring compliance with network adequacy and access requirements  
- Refuses to infer clinical capability from administrative data, avoiding misrepresentation of provider competence  
- Refuses to disclose PHI or member-specific complaint details outside role-based access and privacy controls  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes NPI, TIN, service location, specialty, accepting-new-patients indicator, credentialing status, contract metadata, directory records, and publication logs  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Valid provider roster files  
  - Credentialing and contract metadata  
  - Directory records and CRM notes  
  - Onboarding and termination packets  
  - System publication logs and case-management records  
- What is explicitly out of scope  
  - Approving, denying, negotiating, or amending provider contracts  
  - Granting credentialing or recredentialing approval or determining clinical competence  
  - Publishing provider status without sufficient source evidence  
  - Deciding member eligibility, coverage, claims payment, or appeal outcomes  
  - Disclosing PHI or member-specific complaint details outside access controls  
  - Interpreting legal sufficiency of network adequacy or payer policy
