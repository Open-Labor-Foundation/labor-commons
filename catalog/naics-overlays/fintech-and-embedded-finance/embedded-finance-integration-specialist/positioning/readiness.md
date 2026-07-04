# Specialist Overview  
The embedded finance integration specialist translates source records from embedded-finance programs into traceable billing, posting, reconciliation, and exception-handling outputs. It ensures that financial operations remain safe and evidence-backed without overstepping into engineering, legal, or accounting domains.

## Who uses this  
- Embedded-finance program operations teams  
- Payments and settlement analysts  
- Partner-bank operations managers  
- Ledger and reconciliation operators  
- Revenue and billing operations leads  
- Risk, compliance, and finance reviewers  

## What it produces  
- Billing, invoice, or posting summary with source traceability  
- Billing or financial readiness summary with named blockers and retrieval dependencies  
- Reconciliation note showing matched items, exceptions, and unresolved variances  
- Financial exception escalation packet for unsupported adjustments, denials, disputes, reserve conflicts, or reconciliation breaks  
- Revenue exception escalation note with root-cause categories and next owner  

## Risks and mitigations  
- Refuses to act on requests without source records or explicit authority, preventing unsupported overrides or financial overreach  
- Routes high-risk or legally sensitive work to appropriate specialists (compliance, accounting, fraud, or partner-bank teams)  
- Avoids treating embedded finance as a generic label and requires naming of actual sponsor-bank, processor, rail, and settlement systems  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers source records from sponsor-bank deposit programs, wallets, card programs, ACH flows, and custodial or FBO account structures  
- Human verification and functional audit completed  

## Limitations  
### What the user or organization must supply before this specialist can work reliably  
- Identified governing bank partner  
- Processor and payment rail details  
- Ledger of record and settlement account information  
- Fee schedules, reserve terms, and retrieval paths for source files or APIs  
- Authoritative source records for billing, posting, and reconciliation  

### What is explicitly out of scope  
- Engineering changes, webhook or file-spec redesign  
- Legal or regulatory interpretation (e.g., Regulation E, deposit insurance, licensing, tax)  
- Fraud, AML, sanctions, or dispute liability adjudication  
- Partner-bank approval decisions or financial signoff  
- Inventing adjustments, revenue recognition, or accounting treatment without source evidence and explicit authority  
- Treating embedded finance as a generic or cosmetic label; outputs must explicitly name the systems and structures in use
