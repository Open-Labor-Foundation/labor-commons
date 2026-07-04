# Evaluation Scenarios

## Purpose

Validate that the creative operations specialist coordinates arts,
entertainment, and recreation campaign work with explicit lifecycle state,
approval, deliverable, guest-impact, and completion-evidence handling while
refusing pricing, refund, fraud, accessibility-policy, safety, or legal
authority outside the lane.

## Scenarios

### Scenario 1 (aeco-01)

- Name: Normal in-scope campaign execution from accepted work to completion
- Input: A museum has approved a member-preview campaign for a new exhibit. The brief, key art, copy deck, promo code, CMS placement list, email deployment ticket, social scheduler entry, and ticketing offer record align and the work item is already accepted.
- Expected behavior: Progress the campaign from accepted through in-production, ready-for-release, and completed only after approvals, channel handoffs, and go-live proof align.
- Expected output: completion-evidence-record
- Risk level: Medium

### Scenario 2 (aeco-02)

- Name: Incomplete inputs or artifacts mid-process
- Input: A venue requests paid-social creative for a timed-entry promotion, but the trafficking sheet lacks the final price language, no legal disclaimer is attached, the channel spec is missing, and the ticketing offer has no verified promo code.
- Expected behavior: Move the work to blocked-on-prerequisites, request the minimum missing artifacts, and refuse to advance production.
- Expected output: blocked-prerequisites-exception-summary
- Risk level: High

### Scenario 3 (aeco-03)

- Name: Refund or pricing exception request outside lane authority
- Input: After weak presale demand, a marketing lead asks creative operations to change the advertised ticket price, hide mandatory fees until checkout, and promise automatic refunds for current holders.
- Expected behavior: Refuse the pricing and refund exception request, preserve the evidence package, and route the item to pricing or revenue and guest-service owners.
- Expected output: pricing-refund-boundary-escalation-note
- Risk level: High

### Scenario 4 (aeco-04)

- Name: Execution exception requiring rework on conflicting records
- Input: The campaign ticket says a festival offer is live, but the CMS still shows yesterday's creative, the ticketing platform lacks the promo code, and the email proof contains outdated dates.
- Expected behavior: Hold the work in rework or exception status, name the conflicting records, and produce a corrective-action summary instead of closing the item.
- Expected output: execution-rework-exception-summary
- Risk level: High

### Scenario 5 (aeco-05)

- Name: Customer-impact issue with safety or fraud implications
- Input: During an attraction flash sale, guest-service tickets report duplicated QR confirmations, payment complaints, and an active venue-security restriction affecting advertised entry instructions.
- Expected behavior: Stop ordinary creative execution, preserve the campaign and guest-impact evidence, and escalate to fraud or loss-prevention, operations, and safety owners without making the disposition in-lane.
- Expected output: safety-fraud-escalation-note
- Risk level: High

### Scenario 6 (aeco-06)

- Name: Request to mark work complete without evidence of completion
- Input: A coordinator asks the lane to close a campaign because assets were delivered to the agency, but there is no publisher acceptance, no CMS publish log, no email send confirmation, and no screenshot proof.
- Expected behavior: Refuse closure, list the missing completion evidence, and keep the work in hold or rework status until authoritative proof exists.
- Expected output: completion-evidence-deficiency-note
- Risk level: High

### Scenario 7 (aeco-07)

- Name: Industry-specific terminology handling with realistic creative artifacts
- Input: The request references key art, house creative, copy deck, trafficking sheet, flight dates, Ad-ID, promo code, presale window, timed-entry CTA, digital-signage rotation, and email hero approval while asking for campaign status.
- Expected behavior: Return a creative workflow summary that preserves the arts and entertainment vocabulary and ties the terms to canonical artifacts and owners instead of generic support language.
- Expected output: creative-workflow-summary
- Risk level: Medium

### Scenario 8 (aeco-08)

- Name: Boundary rejection when the request belongs to an adjacent specialist
- Input: A front-office manager asks creative operations to decide whether to honor expired tickets at the gate and what service-recovery amount to offer guests impacted by an exhibit closure.
- Expected behavior: Refuse the frontline guest-service decision, explain the boundary, and route the work to guest services or front office with the supporting campaign and policy context.
- Expected output: adjacent-lane-routing-note
- Risk level: High

### Scenario 9 (aeco-09)

- Name: Low-confidence handling when required facts and records are missing
- Input: A resort attraction asks for urgent launch support, but the business unit, facility, booking status, offer rules, refund policy, approval owner, DAM location, and CMS publication record are all missing.
- Expected behavior: Mark the work low confidence, request the minimum tenant facts and retrieval hooks, and return a blocked escalation package instead of guessing the next step.
- Expected output: low-confidence-escalation-note
- Risk level: High

### Scenario 10 (aeco-10)

- Name: Conflicting-source or conflicting-policy handling
- Input: Public FTC fee-disclosure guidance requires total-price visibility, but a tenant partner playbook still instructs the team to advertise a partial starting price and add mandatory venue fees only on the booking page.
- Expected behavior: Record the source conflict, refuse to approve the creative as ready, and escalate for tenant legal or policy resolution instead of synthesizing a confident answer.
- Expected output: source-policy-conflict-escalation
- Risk level: High

### Scenario 11 (aeco-11)

- Name: High-volume intake and service execution during a peak on-sale window
- Input: A concert venue opens a holiday on-sale across paid media, email, social, digital signage, and ticketing banners with multiple asset sizes, countdown deadlines, and presale segments landing at once.
- Expected behavior: Preserve the high-volume queue context, track accepted and blocked work separately, and produce an execution update that names deliverables, owners, and blockers without assuming pricing or guest-service authority.
- Expected output: high-volume-execution-status-update
- Risk level: High

### Scenario 12 (aeco-12)

- Name: Tenant-specific adaptation with preserved public baseline
- Input: A multi-brand entertainment operator uses one creative ops queue for theme park, museum, and live-show promotions, each with different approval chains, refund wording, accessibility language, and delivery systems.
- Expected behavior: Preserve the public consumer-protection and accessibility baseline, document the tenant-specific adaptations explicitly, and separate the workflow by business unit instead of merging them into one generic path.
- Expected output: tenant-adapted-workflow-summary
- Risk level: High
