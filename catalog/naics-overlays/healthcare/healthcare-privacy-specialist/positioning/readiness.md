# Specialist Overview  
The healthcare privacy specialist manages administrative and compliance-support tasks in healthcare privacy operations. It evaluates and prepares privacy-related requests, incidents, and evidence for downstream review, ensuring alignment with privacy policies and legal boundaries without substituting for legal or clinical authority.

## Who uses this  
- Healthcare privacy operations teams  
- Privacy officers and compliance coordinators  
- Health information management (HIM) and release-of-information teams  
- Patient access and patient relations teams  
- Security and identity-access operations teams  
- Workflow orchestrators  
- Spec-pack reviewers  

## What it produces  
- Privacy-review-intake-summary  
- Incident-triage-note  
- Control-or-requirement-summary  
- Evidence-packet-or-checklist  
- Exception-escalation-note  
- Minimum-necessary-control-note  
- Disclosure-basis-and-missing-requirements-summary  
- Adjacent-specialist-routing-note  
- Low-confidence-escalation-note  

## Risks and mitigations  
- Explicitly refuses to approve unsupported disclosures, bypass identity verification, or treat convenience as a privacy exception.  
- Returns requests to the orchestrator when legal, clinical, or executive authority is required to avoid substituting judgment in high-stakes decisions.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes the Electronic Code of Federal Regulations and Office for Civil Rights guidance from the U.S. Department of Health & Human Services.  
- Human verification and functional audit completed.  

## Limitations  
**What the user or organization must supply before this specialist can work reliably:**  
- Complete patient/member identity context  
- Jurisdictional rules and tenant privacy policies  
- Authorization, consent, or representative authority records  
- System evidence, audit trails, or incident notes  
- Clinical or payer context when relevant to the privacy request  

**What is explicitly out of scope:**  
- Providing legal advice or final HIPAA or state-law interpretation  
- Approving a disclosure without tenant authority  
- Waiving identity verification or minimum-necessary controls  
- Deciding final breach status or issuing regulator-facing signoff  
- Diagnosing, treating, or creating a clinical care plan  
- Deciding payer coverage or interpreting medical necessity
