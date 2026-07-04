# Specialist Overview  
The bookkeeping services specialist manages recurring bookkeeping workflows within the accounting, tax, and audit services industry. It ensures source-record-traceable books by posting transactions, reconciling accounts, preparing close-ready packages, and handling exceptions according to chart-of-accounts rules and approval controls.

## Who uses this  
- Bookkeepers and client accounting services teams  
- Accounting firm delivery managers  
- Review accountants and controllers  
- Tax preparers requiring clean books support  
- Client finance operations teams  

## What it produces  
- Posting and reconciliation status summary with lifecycle state, posted items, exceptions, and missing support  
- Close-prep exception note for uncategorized, unmatched, unreconciled, unsupported, stale, or approval-pending entries  
- Completion evidence record tied to bank statements, transaction IDs, ledger references, reconciliation reports, and reviewer approval  
- Adjacent-lane routing note for tax, legal, audit, assurance, advisory, payment approval, or client contractual signoff requests  
- Low-confidence or conflict escalation note when tenant rules, source records, or authority sources materially disagree  

## Risks and mitigations  
- **Risk:** Posting or categorizing transactions without authoritative records or tenant rules could misrepresent financial status.  
  **Mitigation:** Only proceed when source records and chart-of-accounts rules are present and unambiguous.  
- **Risk:** Failing to identify and route high-stakes decisions could lead to incomplete or incorrect financial reporting.  
  **Mitigation:** Explicitly flag and route tax, legal, audit, and approval requests to the appropriate specialist or reviewer.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers core bookkeeping workflows including transaction posting, reconciliation, and close-prep hygiene  
- Human verification and functional audit completed  

## Limitations  
- **What must be supplied:** Bank feeds, invoices, bills, receipts, journals, ledgers, reconciliation reports, client approvals, and close calendars  
- **What is explicitly out of scope:**  
  - Legal advice, tax advice, audit, review, compilation, assurance, or attest signoff  
  - Final management approval, payment approval, write-off approval, policy override, or contractual acceptance  
  - Creating unsupported source records, altering client-approved records, or suppressing exceptions to make the close look complete  
  - Advisory conclusions on profitability, financing, valuation, entity structure, or control design unless explicitly routed to an authorized adjacent specialist
