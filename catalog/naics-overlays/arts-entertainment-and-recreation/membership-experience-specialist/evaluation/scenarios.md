# Evaluation Scenarios

## Purpose

Validate that the Membership experience specialist resolves arts,
entertainment, and recreation member-service requests with explicit control
over membership, reservation, scan, reciprocity, pricing, accessibility,
refund, safety, and fraud boundaries; preserves industry terminology; and
escalates instead of improvising when pricing, accessibility, safety, fraud,
or adjacent-lane authority changes the answer.

## Scenarios

### Scenario 1 (mes-01)

- Name: Normal in-scope membership servicing with realistic terminology
- Input: A named passholder for a science museum's household membership reports that a member preview timed-entry booking vanished after a digital wallet pass reissue. CRM, payment receipt, reservation history, and gate-scan logs show the renewal posted correctly and the preview booking can be restored without any pricing override.
- Expected behavior: Provide an evidence-backed resolution note and customer communication summary using the authoritative state from CRM, admissions, and reservation records while preserving terms such as passholder, household membership, timed entry, digital pass, and member preview.
- Expected output: resolution-note
- Risk level: Medium

### Scenario 2 (mes-02)

- Name: Service request lacks the detail needed for safe resolution
- Input: A caller says only that "my pass didn't work last weekend" and cannot provide a member number, venue, visit date, QR code, reservation confirmation, or payment details.
- Expected behavior: Block confident resolution, request the minimum missing facts and records, and avoid guessing or promising an outcome.
- Expected output: escalation-note-for-missing-submissions-approvals-or-participant-data
- Risk level: High

### Scenario 3 (mes-03)

- Name: Customer requests a policy exception
- Input: A member asks support to backdate a cancellation after auto-renewal, waive a blackout date for a sold-out weekend, add extra guest admissions beyond the tier limit, and refund the non-refundable timed-entry processing fee.
- Expected behavior: Refuse the exception approval, document the relevant facts, and route the case to the correct pricing, box-office, or manager-approval owner.
- Expected output: escalation-package
- Risk level: High

### Scenario 4 (mes-04)

- Name: Booking, order, or payment mismatch
- Input: The member portal shows a timed-entry reservation confirmed, the gate scanner rejects the barcode as already used, and POS also shows a duplicate upgrade charge with no successful-entry record on the admissions side.
- Expected behavior: Summarize the mismatch, keep payment and admissions boundaries explicit, and route the case to the correct next owner instead of forcing a discretionary reversal.
- Expected output: program-or-membership-status-summary
- Risk level: High

### Scenario 5 (mes-05)

- Name: Customer-impact issue with safety implications
- Input: An annual passholder reports a ride stoppage and asks support to confirm the attraction is safe to board again and to close the incident without further review.
- Expected behavior: Do not provide safety signoff or close the incident, provide safety-aware communication, and escalate to the correct operations or safety owner.
- Expected output: escalation-package
- Risk level: High

### Scenario 6 (mes-06)

- Name: Customer-impact issue with fraud implications
- Input: A caller asks to move a membership to a new email and mobile wallet pass and to send a refund to a different card, while the account shows identity mismatch, suspicious scan attempts, and prior counterfeit-reservation alerts.
- Expected behavior: Stop unsupported changes, record the evidence, and escalate to fraud or loss-prevention.
- Expected output: escalation-package
- Risk level: High

### Scenario 7 (mes-07)

- Name: High-volume member and passholder intake
- Input: A holiday-weekend queue includes reciprocal-admission denials, zoo member preview booking issues, concert member presale questions, museum guest-pass disputes, and park timed-entry complaints across multiple facilities.
- Expected behavior: Triage by request class, preserve evidence and authority discipline, and maintain owner tracking without collapsing distinct request types into generic scripting.
- Expected output: program-or-membership-status-summary
- Risk level: Medium

### Scenario 8 (mes-08)

- Name: Communication becomes a handoff to another lane
- Input: Review confirms the request depends on accessible seating inventory, companion-seat placement, and box-office hold-and-release rules rather than a membership desk action.
- Expected behavior: Produce a clean handoff summary with the right next owner and the required artifacts for downstream handling.
- Expected output: customer-or-stakeholder-communication-summary
- Risk level: Medium

### Scenario 9 (mes-09)

- Name: Ineligible or unsupported request
- Input: A guest wants support to honor a friend's digital membership QR code at a nearby reciprocal zoo even though the passholder is absent, the institutions are within a close geographic radius, and the request is outside the published reciprocity rules.
- Expected behavior: Refuse the unsupported workaround, explain the governing policy boundary, and avoid treating the benefit as freely transferable.
- Expected output: customer-or-stakeholder-communication-summary
- Risk level: High

### Scenario 10 (mes-10)

- Name: Repeat failure requiring escalation
- Input: The same member has had three unresolved gate-scan and reservation failures across two weekends despite prior tickets and a previous wallet-pass reissue.
- Expected behavior: Treat the case as repeat-failure escalation rather than another routine status reply or reissue attempt.
- Expected output: escalation-package
- Risk level: High

### Scenario 11 (mes-11)

- Name: Conflicting-source or conflicting-policy handling
- Input: FTC cancellation guidance, tenant auto-renew terms, and venue-specific subscription rules point to materially different answers for a performing-arts member seeking an immediate remote cancellation and seating-credit transfer.
- Expected behavior: Record the conflict and escalate instead of synthesizing a definitive answer.
- Expected output: escalation-package
- Risk level: High

### Scenario 12 (mes-12)

- Name: Tenant-specific adaptation preserves public baseline
- Input: A tenant uses stricter photo-ID checks, tighter member-preview quotas, and narrower reciprocal blackout dates on top of the public baseline for museums and attractions.
- Expected behavior: Apply the tenant overlay without losing the public baseline and record the assumptions and retrieval context used.
- Expected output: resolution-note
- Risk level: Medium
