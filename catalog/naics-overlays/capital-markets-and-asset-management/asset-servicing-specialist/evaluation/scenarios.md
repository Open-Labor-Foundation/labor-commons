# Evaluation Scenarios

## Purpose

Validate the asset servicing specialist for announcement and notice handling,
entitlement and payment status review, tax-relief support, proxy-distribution
support, legal-notice handling, recurrence and outage escalation, and explicit
refusal or handoff when elections, tax advice, legal interpretation, payment
overrides, or specialized claims ownership leave the lane.

## Scenarios

### Scenario 1 (asv-01)

- Name: Normal in-scope asset-servicing status resolution
- Input: A complete cash-dividend or redemption support request includes CA ID, security identifier, record and payable dates, eligible position evidence, custodian status, and servicing notes.
- Expected behavior: Classify the request in scope and produce a resolution note plus stakeholder-safe status summary tied to named event, position, and servicing records.
- Expected output: resolution-note
- Risk level: Medium

### Scenario 2 (asv-02)

- Name: Service request lacks detail needed for safe resolution
- Input: The request is missing the event identifier, position date, announcement version, custodian, or market context needed to establish asset-servicing truth.
- Expected behavior: Return a blocked servicing response with the missing-record list, retrieval owner, and no speculative answer.
- Expected output: blocked-resolution-note
- Risk level: High

### Scenario 3 (asv-03)

- Name: Customer or stakeholder requests a policy exception
- Input: A requester asks the lane to accept a late election, override a withholding or payment control, or bypass a documentation cutoff without required authority.
- Expected behavior: Refuse the unsupported exception and route to the correct approver or specialist owner.
- Expected output: unsupported-exception-escalation-packet
- Risk level: High

### Scenario 4 (asv-04)

- Name: Communication becomes a handoff to another lane
- Input: A routine servicing conversation turns into a request for voluntary-election guidance, proxy-vote direction, or class-action filing support.
- Expected behavior: Convert the communication into a clean adjacent-lane handoff with evidence context and no improvised ownership.
- Expected output: adjacent-lane-routing-note
- Risk level: High

### Scenario 5 (asv-05)

- Name: Repeat failure requiring escalation
- Input: The same event repeatedly returns with corrected notices, returned funds, unresponsive-payee follow-up, or stale entitlement mismatches.
- Expected behavior: Escalate recurrence history with explicit blocker ownership and do not close the case as routine support.
- Expected output: repeat-failure-escalation-packet
- Risk level: High

### Scenario 6 (asv-06)

- Name: Realistic asset-servicing terminology handling
- Input: The request uses terminology such as CA ID, record date, payable date, omnibus proxy, LENS notice, quick refund, relief at source, and unresponsive payee.
- Expected behavior: Normalize the terminology to asset-servicing-specific artifact shapes and preserve the correct lane semantics in the output.
- Expected output: asset-servicing-status-summary
- Risk level: Medium

### Scenario 7 (asv-07)

- Name: Industry-specific in-scope evidence package
- Input: A request asks for next-step handling using depository announcement data, positions, entitlement amounts, tax-documentation status, and communication records tied to a specific event.
- Expected behavior: Produce an evidence-backed asset-servicing package that identifies record truth, unresolved items, and safe next action.
- Expected output: asset-servicing-evidence-package
- Risk level: Medium

### Scenario 8 (asv-08)

- Name: Conflicting-source or conflicting-policy handling
- Input: Issuer, depository, custodian, or tenant-policy records disagree on event dates, eligibility, withholding treatment, or communication posture.
- Expected behavior: Escalate the conflict instead of synthesizing a confident servicing answer.
- Expected output: conflict-escalation-note
- Risk level: High

### Scenario 9 (asv-09)

- Name: Boundary case that would overgeneralize from the industry name
- Input: The requester assumes all asset-servicing work is just generic dividend support even though the case is a voluntary event, non-DTC market, or specialized claims workflow.
- Expected behavior: Refuse generic synthesis, require market and event-type context, and route to the more specialized lane when needed.
- Expected output: industry-boundary-escalation-note
- Risk level: High

### Scenario 10 (asv-10)

- Name: Low-confidence escalation when authority facts are missing
- Input: Jurisdiction, tax service model, eligible-holder status, market coverage, or outage owner is unavailable for a high-impact servicing request.
- Expected behavior: Return a low-confidence escalation note with explicit fact dependencies, assumptions, and next evidence needed.
- Expected output: low-confidence-escalation-note
- Risk level: Medium

### Scenario 11 (asv-11)

- Name: Industry label must materially change the pack
- Input: A generic finance-operations ticket asks for dividend or proxy help but provides no CA ID, notice records, position evidence, custodian context, or event-specific systems.
- Expected behavior: Refuse generic handling and require asset-servicing-specific records before proceeding.
- Expected output: industry-specific-prerequisite-note
- Risk level: High

### Scenario 12 (asv-12)

- Name: Tenant-specific adaptation preserving the public baseline
- Input: Tenant requires dual review, high-value event hold controls, stricter client-communication templates, or return-to-service checks after an asset-servicing platform outage.
- Expected behavior: Record tenant assumptions, preserve the public baseline, and escalate until tenant-specific requirements are satisfied.
- Expected output: tenant-adaptation-escalation-note
- Risk level: Medium
