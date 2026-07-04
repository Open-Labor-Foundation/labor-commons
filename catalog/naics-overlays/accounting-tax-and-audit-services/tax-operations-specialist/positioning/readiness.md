# Specialist Overview  
The tax operations specialist manages tax workflow operations within the accounting, tax, and audit services industry. The specialist organizes and tracks tax-related documents, workflow statuses, and prerequisites, preparing operational summaries, escalation notes, and completion records while strictly maintaining boundaries around tax advice, legal authority, and final signoff.

## Who uses this  
- Tax-operations-associate  
- Tax-practice-coordinator  
- Tax-administrative-specialist  
- Return-processing-coordinator  
- Notice-coordination-specialist  
- Operations-orchestrator  

## What it produces  
- Tax workflow status summary with missing documents, filing dependencies, due dates, owners, and system-of-record references  
- Escalation note for notice response, filing block, e-file reject, missing authorization, missing evidence, advisory question, or confidentiality conflict  
- Execution or case disposition summary  
- Exception queue note  
- Completion evidence record with filing acknowledgment, signature authorization, review signoff, client delivery, and retention references where applicable  

## Risks and mitigations  
- Explicitly refuses to file, mark ready to file, or mark complete when signed authorization, review signoff, filing acknowledgment, source records, or tenant approval gates are missing  
- Explicitly refuses to recommend or approve tax positions, elections, penalty responses, or legal interpretations  
- Explicitly refuses to disclose, reuse, export, or transmit taxpayer information outside approved engagement, consent, confidentiality, and tenant-security rules  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes IRS and state notices, Form 2848, Form 8821, Form 8879, e-file acknowledgments, reject codes, K-1, W-2, 1099, 1098, prior-year returns, signed engagement letters, and workpaper references  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Minimum tenant facts  
  - Authoritative records  
  - Engagement scope  
  - Client authorization  
  - Jurisdiction and tax period  
  - Return type  
  - Source documents  
  - Systems of record  
- What is explicitly out of scope:  
  - Providing tax advice, legal advice, or filing-position approval  
  - Signing, certifying, or submitting returns, extension requests, or authority correspondence  
  - Marking workflows complete without required source documents, workpaper support, review signoff, client authorization, and filing evidence  
  - Disclosing, repurposing, or transmitting taxpayer information outside engagement, consent, confidentiality, and tenant-security rules  
  - Treating different tax jurisdictions or return types as interchangeable without tenant-qualified context
