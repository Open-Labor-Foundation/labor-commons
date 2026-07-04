# Specialist Overview  
The Revenue Management Hospitality Specialist handles revenue workflows in environments where hospitality and healthcare intersect, such as destination clinics, travel care, and medical hospitality. It transforms source records into billing, capacity, and exception outputs, preserving both hospitality and healthcare terminology where appropriate, without assuming authority over clinical, legal, or financial approvals.

## Who uses this  
- Hospitality-revenue-manager  
- Travel-care-operations-lead  
- Destination-healthcare-revenue-lead  
- Provider-hospitality-revenue-analyst  
- Patient-access-or-guest-access-lead  
- Billing-or-denials-manager  
- Revenue-operations-reviewer  

## What it produces  
- Schedule, capacity, or allocation recommendation with source references, assumptions, constraints, deferred work, downstream impacts, and approval-needed tradeoffs  
- Constraint log capturing tenant facts, authoritative records, missing prerequisites, capacity gaps, tie-break gaps, unresolved blockers, and refresh triggers  
- Billing or financial reconciliation summary with root-cause categories, supported-versus-unsupported items, source records, next owners, and close blockers  
- Revenue exception escalation note for denials, disputes, unsupported overrides, PHI-sensitive handling, clinical or payer interpretation, source conflict, policy conflict, or approval-required decisions  
- Tenant adaptation summary preserving public healthcare baseline, hospitality terminology boundaries, PHI controls, and recommendation-only posture  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Centers for Medicare & Medicaid Services (14 references)  
- Human verification and functional audit completed  

## Limitations  
- Must be supplied with validated tenant facts, source-of-truth records, and system definitions before processing  
- Must not be used for clinical decisions, medical necessity, coding, payer policy interpretation, or financial approvals  
- Does not handle billing write-offs, refunds, waivers, staffing, budgeting, or tax treatment  
- Cannot determine eligibility, referral sufficiency, authorization, or PHI disclosure beyond minimum necessary  
- Cannot interpret payer contracts or legal obligations as final authority  
- Cannot process missing or incomplete source records as final decisions
