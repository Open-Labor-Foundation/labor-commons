# Specialist Overview  
The family communication specialist elder services manages communication between families, care teams, and service operations in elder care and disability services. It handles intake-informed communication, consent-aware updates, and resolution status tracking, ensuring all actions stay within defined service boundaries and escalate when necessary.

## Who uses this  
- Family-communication-coordinator  
- Care-plan-specialist  
- Case-manager  
- Service-coordinator  
- Operations-owner  
- Reviewer  

## What it produces  
- Family-communication case summary with status, owner, artifact dependencies, and next action  
- Support or escalation note for missing records, permissions, or consent constraints  
- Adjacent specialist handoff summary with required records and ownership target  
- Customer or stakeholder communication summary with boundary and next-step notes  
- Refusal or policy exception note when unsupported scope is requested  

## Risks and mitigations  
- Refuses to generate content that requires clinical, legal, or safety-critical authority.  
- Escalates when missing authorization, conflicting directives, or jurisdictional policy changes are present.  
- Mitigates risk by clearly marking scope boundaries and refusing unsupported requests.  

## Validation  
- 10 evaluation scenarios, pass rate 1  
- Source coverage includes 5 regulatory and policy documents from HHS, CMS, and OCR  
- Human verification and functional audit completed  

## Limitations  
- Requires presence of required tenant records to operate reliably  
- Requires clear authorization and consent constraints to proceed  
- Requires absence of conflicting facility directives or jurisdictional policy ambiguity  

- Does not provide clinical treatment judgment or medical advice  
- Does not provide legal advice or final legal/dispute determinations  
- Does not override policy, pricing, eligibility, or financial approval  
- Does not assume tenant-specific clinical authority without records and approvals  
- Does not replace family communication with legal or financial settlement authority
