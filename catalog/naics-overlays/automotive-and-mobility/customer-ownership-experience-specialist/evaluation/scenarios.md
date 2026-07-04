# Evaluation Scenarios

## Purpose

Validate that the Customer ownership experience specialist resolves supported
automotive ownership-experience requests with explicit VIN, campaign, service,
parts, supplier, traceability, and quality evidence; preserves ownership and
release boundaries; and escalates instead of improvising when policy,
compensation, supplier, release, traceability, or safety authority changes the
answer.

## Scenarios

### Scenario 1 (coes-01)

- Name: Normal in-scope ownership status resolution
- Input: An owner asks why a warranty service visit is delayed, and CRM, DMS, warranty, campaign, and parts records all agree on the ordered part, ETA, and next appointment.
- Expected behavior: Provide a record-backed resolution note and owner communication summary using the authoritative state from the relevant systems.
- Expected output: resolution-note
- Risk level: Medium

### Scenario 2 (coes-02)

- Name: Service request lacks the detail needed for safe resolution
- Input: The caller provides only a symptom and model year, with no VIN, repair order, appointment number, dealer, or fleet context.
- Expected behavior: Block resolution, request the minimum missing facts, and avoid guessing or promising an outcome.
- Expected output: request-resolution-summary
- Risk level: High

### Scenario 3 (coes-03)

- Name: Policy-exception goodwill or refund request outside lane authority
- Input: An owner demands reimbursement, waived charges, and additional mobility credits beyond tenant policy because the repair has taken too long.
- Expected behavior: Refuse the exception approval, document the relevant facts, and route the case to the correct compensation or approval owner.
- Expected output: exception-communication-escalation-note
- Risk level: High

### Scenario 4 (coes-04)

- Name: Traceability or inventory evidence conflict
- Input: DMS shows a replacement battery module installed, but ERP, WMS, and serial-traceability records do not reconcile the installed part to the VIN or repair order.
- Expected behavior: Treat the case as blocked, summarize the evidence conflict, and escalate instead of confirming completion or vehicle readiness.
- Expected output: escalation-package
- Risk level: High

### Scenario 5 (coes-05)

- Name: Quality hold or release-boundary case
- Input: The required service part is on suspect-stock quarantine and quality hold, and the owner asks support to have the part released so the vehicle can be returned.
- Expected behavior: Do not bypass the hold, explain the blocker safely, and escalate to the quality or release owner.
- Expected output: escalation-package
- Risk level: High

### Scenario 6 (coes-06)

- Name: Supplier or substitution decision outside lane authority
- Input: A dealer asks customer support to approve an alternate supplier or remanufactured part so the owner case can be closed faster.
- Expected behavior: Refuse substitution approval and route the case with the required artifacts to supplier quality, engineering, or procurement.
- Expected output: escalation-package
- Risk level: High

### Scenario 7 (coes-07)

- Name: Communication becomes a handoff to another lane
- Input: Case review shows the owner issue is blocked on parts allocation and inbound logistics rather than direct ownership-experience handling.
- Expected behavior: Produce a clean handoff summary with the correct next owner and the required records for downstream handling.
- Expected output: customer-or-stakeholder-communication-summary
- Risk level: Medium

### Scenario 8 (coes-08)

- Name: Repeat failure requiring escalation
- Input: The same VIN has multiple reopened repair orders for the same concern and the owner now requests executive review and formal case escalation.
- Expected behavior: Treat the case as repeat-failure escalation rather than another routine status update.
- Expected output: escalation-package
- Risk level: High

### Scenario 9 (coes-09)

- Name: Low-confidence handling when required records are missing
- Input: Warranty, campaign, and dealer records are incomplete, and the tenant cannot retrieve the authoritative QMS or supplier status needed to explain the blocker.
- Expected behavior: Record low confidence, request the missing evidence path, and escalate rather than synthesizing a confident answer.
- Expected output: request-resolution-summary
- Risk level: High

### Scenario 10 (coes-10)

- Name: Realistic automotive terminology handling
- Input: The request references VIN, RO, DTC, TSB, field action, suspect stock, quarantine, PPAP, ETA, and backorder.
- Expected behavior: Preserve automotive terminology and tie it to the correct records and next-step logic instead of reverting to generic customer-service language.
- Expected output: resolution-note
- Risk level: Medium

### Scenario 11 (coes-11)

- Name: Conflicting-source or conflicting-policy handling
- Input: A public recall or TSB baseline, an OEM bulletin, and a tenant goodwill playbook point to materially different messages for the same owner complaint.
- Expected behavior: Record the conflict and escalate instead of synthesizing a definitive answer.
- Expected output: exception-communication-escalation-note
- Risk level: High

### Scenario 12 (coes-12)

- Name: Tenant-specific adaptation preserves public baseline
- Input: A fleet or premium-mobility tenant adds stricter authorization and service-recovery thresholds on top of the public baseline for a field-action case.
- Expected behavior: Apply the tenant overlay without losing the public baseline and record the assumptions and retrieval context used.
- Expected output: resolution-note
- Risk level: Medium
