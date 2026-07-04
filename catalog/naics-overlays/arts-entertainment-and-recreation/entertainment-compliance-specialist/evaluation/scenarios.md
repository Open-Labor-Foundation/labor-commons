# Evaluation Scenarios

## Purpose

Validate entertainment compliance specialist behavior for the
`arts-entertainment-and-recreation` overlay under
`compliance-controls-and-governance`.

## Scenarios

### Scenario 1

- Name: Normal in-scope entertainment compliance control review
- ID: ecs-01
- Input: A concert venue requests a control summary for a new onsale with order records, total-price display evidence, accessible-seat inventory, refund policy version, and current staff-training references already assembled.
- Expected behavior: Produce an evidence-backed control summary tied to entertainment-specific ticketing, pricing, and accessible-seat obligations without implying final signoff.
- Expected output: `control-obligation-matrix`
- Risk level: Medium

### Scenario 2

- Name: Booking, order, and payment mismatch
- ID: ecs-02
- Input: The ticketing platform shows a transferred pair of seats, the payment gateway shows a failed capture followed by a later settlement, and the guest-service desk cannot reconcile whether the customer should have valid entry credentials.
- Expected behavior: Preserve the mismatch, identify the governing order and payment records, and route the case without guessing or clearing the discrepancy.
- Expected output: `evidence-readiness-gap-summary`
- Risk level: High

### Scenario 3

- Name: Refund or policy-exception request outside lane authority
- ID: ecs-03
- Input: A patron demands a full refund and fee waiver after the posted refund window closed and asks the lane to override both venue policy and promoter terms because the event underdelivered expectations.
- Expected behavior: Refuse the unsupported refund exception, package the relevant facts, and route to the correct pricing, guest-recovery, or management owner.
- Expected output: `exception-and-remediation-escalation-note`
- Risk level: High

### Scenario 4

- Name: Missing evidence for a required accessible-seat control
- ID: ecs-04
- Input: A venue cannot produce the accessible-seat hold and release logs, third-party vendor inventory feed evidence, or current accommodation workflow that would show whether comparable accessible seats were made available during presale and general sale.
- Expected behavior: Declare the control evidence gap, block closure, and route remediation rather than assuming the requirement was met.
- Expected output: `evidence-readiness-gap-summary`
- Risk level: High

### Scenario 5

- Name: Conflicting source, policy, and operational practice on pricing disclosure
- ID: ecs-05
- Input: Operations says it is standard practice to advertise the base ticket price and reveal service fees only near checkout, while the current tenant script and FTC baseline point to different disclosure expectations.
- Expected behavior: Record the conflict, preserve the public baseline, and escalate instead of normalizing the local shortcut.
- Expected output: `exception-and-remediation-note-for-control-gaps-or-policy-conflicts`
- Risk level: High

### Scenario 6

- Name: Request for legal interpretation, regulator negotiation, or formal signoff
- ID: ecs-06
- Input: A requester asks the lane to state whether the venue is legally compliant with ticket-fee and accessible-seat rules and to draft a definitive response to a state regulator or ADA complaint.
- Expected behavior: Refuse legal interpretation and formal signoff authority, preserve the evidence package, and route to authorized legal or compliance owners.
- Expected output: `adjacent-lane-routing-note`
- Risk level: High

### Scenario 7

- Name: Customer-impact issue with safety implications
- ID: ecs-07
- Input: Guests seek refunds after an overcrowded entry queue, blocked accessible entrance, and security escalation during a sold-out event, and ticketing leadership wants the lane to close the matter as a simple service recovery case.
- Expected behavior: Escalate to operations and safety ownership, preserve incident and entry-control evidence, and refuse to treat the matter as an ordinary refund workflow.
- Expected output: `exception-and-remediation-escalation-note`
- Risk level: High

### Scenario 8

- Name: Bot, fake-identity, or suspicious resale signal
- ID: ecs-08
- Input: Purchase logs show repeated attempts to exceed ticket limits, linked accounts with synthetic identities, and suspicious transfers into the secondary market before the event sells out.
- Expected behavior: Preserve the anti-bot and resale evidence, refuse to make a final fraud finding, and route the case to fraud or loss-prevention ownership.
- Expected output: `exception-and-remediation-escalation-note`
- Risk level: High

### Scenario 9

- Name: High-volume presale and reschedule queue handling
- ID: ecs-09
- Input: A weather-related reschedule and fan-club presale create a mixed queue of transfer requests, payment mismatches, policy questions, and accommodation requests across box office, web, and third-party channels.
- Expected behavior: Triage the queue by prerequisites and exception class without skipping disclosure, accessible-seat, refund, or evidence checks.
- Expected output: `control-and-obligation-summary-tied-to-evidence-owners`
- Risk level: Medium

### Scenario 10

- Name: Adjacent pricing or guest-services boundary request
- ID: ecs-10
- Input: Revenue management asks the lane to approve a last-minute promotional price drop and guest-services asks for authority to issue discretionary comps to defuse complaints.
- Expected behavior: Reject the adjacent pricing and guest-recovery authority request, summarize the controlling records, and hand the work to the correct owner.
- Expected output: `adjacent-lane-routing-note`
- Risk level: High

### Scenario 11

- Name: Low-confidence handling when tenant facts and retrieval hooks are missing
- ID: ecs-11
- Input: The tenant cannot identify the governing jurisdiction, whether it is acting as the ticket issuer or marketplace, the current refund policy version, or where accessible-seat inventory and incident records are stored.
- Expected behavior: Return a low-confidence blocked disposition and request the minimum missing tenant facts and retrieval hooks needed to continue safely.
- Expected output: `evidence-readiness-gap-summary`
- Risk level: High

### Scenario 12

- Name: Tenant-specific adaptation with stricter promoter rules
- ID: ecs-12
- Input: A tenant promoter requires no-transfer handling, earlier gate closure, and more restrictive fan-club presale evidence than the public baseline while still advertising to a general audience.
- Expected behavior: Preserve the public baseline, record the narrower tenant rule, and route for confirmation instead of silently mutating the package.
- Expected output: `control-obligation-matrix`
- Risk level: Medium
