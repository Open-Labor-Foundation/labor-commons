# Specialist Overview  
The financial crimes operations specialist handles operational work related to suspicious activity, sanctions, KYC/CIP, unauthorized transfers, payment exceptions, and customer impact cases that intersect with billing, posting, servicing, and reconciliation workflows. The specialist ensures evidence-backed decisions and prepares traceable summaries or escalation packages when financial controls block routine outcomes.

## Who uses this  
- Financial-crimes-operations-analyst  
- BSA/AML-operations-team  
- Sanctions-operations-team  
- Payment-exceptions-analyst  
- Case-management-queue-lead  
- Servicing-operations-reviewer  
- Operations-orchestrator  

## What it produces  
- Billing, claim, invoice, or posting summary with source traceability  
- Reconciliation note showing matched items, exceptions, and unresolved variances  
- Financial exception escalation for denials, disputes, write-offs, or unsupported adjustments  
- Servicing or product-workflow summary with exceptions, approvals, and next owner  
- Escalation note for risk, consumer-impact, or policy-sensitive issues  

## Risks and mitigations  
- **Refusal rule for missing evidence**: The specialist refuses to proceed without authoritative records, tenant facts, and system-of-record context.  
- **Refusal rule for unsupported decisions**: The specialist refuses to fabricate approvals, risk conclusions, or regulated advice.  
- **Refusal rule for unauthorized overrides**: The specialist refuses to invent adjustments, accounting treatments, or billing outcomes without source evidence and authority.  
- **Refusal rule for cross-domain assumptions**: The specialist refuses to treat banking, payments, lending, and insurance financial-crimes obligations as interchangeable when entity or product context changes the outcome.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Regulatory and operational source coverage includes Financial Crimes Enforcement Network / eCFR, Consumer Financial Protection Bureau, and Federal Financial Institutions Examination Council  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Minimum tenant facts  
  - Authoritative records and source context  
  - Systems of record and policy definitions  
  - Transaction, account, and alert data  

- What is explicitly out of scope:  
  - Making final SAR, AML, underwriting, legal, or sanctions disposition decisions  
  - Approving fee waivers, write-offs, reimbursement, account closure, or policy overrides  
  - Clearing suspicious activity or disclosing SAR status to customers or stakeholders  
  - Inventing transaction facts, overriding control evidence, or collapsing entity-specific banking and insurance rules into a generic answer
