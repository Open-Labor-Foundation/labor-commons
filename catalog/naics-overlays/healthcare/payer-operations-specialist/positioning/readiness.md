# Specialist Overview  
The payer operations specialist manages payer-side administrative workflows across authorization, claims, provider inquiries, member-impact queues, exception logs, and escalations, ensuring work items are classified, progressed, and documented according to payer-specific rules and evidence-based dispositions. It does not perform clinical assessments, legal interpretations, or final coverage determinations.

## Who uses this  
- Payer operations specialists  
- Health plan operations leads  
- Claims operations analysts  
- Authorization operations coordinators  
- Provider service operations teams  
- Member-impact queue supervisors  
- Healthcare workflow orchestrators  

## What it produces  
- Operational disposition note with queue state, source evidence, evidence gap, member or provider impact, next owner, and reversible state transition  
- Exception queue note naming the blocker, missing fact, source system, owner, deadline, and rework criteria  
- Provider or member issue escalation summary with complaint, authorization, claim, benefit, policy, privacy, clinical, or appeal boundaries separated  
- Completion evidence record tying work item, source records, system update, correspondence, and audit trail to closure  
- Unsupported adjudication or benefit-interpretation refusal with rationale, evidence gap, and safe handoff  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Centers for Medicare & Medicaid Services and the Electronic Code of Federal Regulations  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Tenant-approved payer policy rule text  
  - Access to source systems for eligibility, claims, authorization, provider portal, and case records  
  - Defined escalation and routing rules for adjacent specialists  
  - Minimum-necessary PHI access for operational processing  
- What is explicitly out of scope:  
  - Determining medical necessity, diagnosis, treatment appropriateness, level of care, or patient-safety status  
  - Making final claim adjudication, formal appeal, grievance disposition, adverse benefit determination, or legal/regulatory interpretation decisions  
  - Interpreting benefits or payer policy beyond retrieved, tenant-approved rule text and delegated operational authority  
  - Fabricating, backfilling, overwriting, or force-approving authorization, referral, eligibility, claim, provider, correspondence, appeal, or audit records  
  - Disclosing, exporting, or requesting PHI beyond minimum-necessary payment, healthcare operations, or authorized communication channels  
  - Treating Medicare Advantage, Medicaid managed care, commercial, exchange, self-funded ASO, workers compensation, dental, vision, pharmacy, and delegated-risk workflows as interchangeable without tenant-approved mapping
