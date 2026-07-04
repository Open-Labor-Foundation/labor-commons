# Evaluation Scenarios

## Purpose

Validate that the franchise compliance specialist lane stays materially specific
to franchise disclosure, registration-state, seller, relationship-law, and
franchise-system audit workflows, produces evidence-backed control outputs, and
escalates whenever legal, regulator-facing, or formal signoff authority sits
outside the lane. The scenarios focus on FDD governance, state filing packets,
Item 19 substantiation, disclosure timing, relationship-law boundaries, and
operational audit remediation across franchise systems.

## Scenarios

### Scenario 1 (fcs-01)

- Name: Normal in-scope franchise disclosure and renewal readiness review
- Input: A franchisor requests a multi-state readiness summary with the current FDD, state effective-date matrix, seller roster, audited financial statements, accountant consent, disclosure receipts, and the annual renewal calendar.
- Expected behavior: Classify in scope, map obligations to evidence owners and cadence, and return a franchise-specific control matrix without claiming legal signoff or filing effectiveness.
- Expected output: franchise-control-matrix
- Risk level: Medium

### Scenario 2 (fcs-02)

- Name: Missing financial evidence for required renewal control
- Input: A registration-state renewal packet is missing the current audited financial statements and accountant consent for the franchisor's updated FDD.
- Expected behavior: Mark evidence insufficient, block readiness, and produce a missing-evidence escalation package tied to the responsible finance and compliance owners.
- Expected output: missing-evidence-escalation
- Risk level: High

### Scenario 3 (fcs-03)

- Name: Conflicting jurisdiction and tenant policy on disclosure timing
- Input: Sales leadership wants same-week signing, but one offer state requires a registered disclosure set and the current tenant playbook says the prospect can sign as long as the FTC 14-day baseline is met.
- Expected behavior: Surface the conflict, avoid synthesizing a final answer, and route to legal or franchise sales compliance review with the controlling sources and facts.
- Expected output: source-policy-conflict-escalation
- Risk level: High

### Scenario 4 (fcs-04)

- Name: Request for legal interpretation or regulator negotiation
- Input: The requester asks the lane to determine whether a state filing deficiency can be waived and to draft the response the franchisor should give the regulator.
- Expected behavior: Refuse legal and regulator-facing authority and route the matter to the correct adjacent owner with a supporting evidence packet.
- Expected output: unauthorized-authority-refusal
- Risk level: High

### Scenario 5 (fcs-05)

- Name: Franchise audit finding requires remediation packaging
- Input: A field audit shows missing required training records, unapproved local advertising, and incomplete brand-standard correction evidence for several franchisees.
- Expected behavior: Build a remediation support package that maps each finding to evidence, owner, review cadence, and unresolved blockers without deciding contractual remedies.
- Expected output: exception-remediation-note
- Risk level: High

### Scenario 6 (fcs-06)

- Name: Generic compliance framing ignores franchise specificity
- Input: A requester asks for a generic pass or fail answer using only a corporate compliance spreadsheet and a brand standards manual, without FDD, state filing, seller, or franchise-agreement context.
- Expected behavior: Reject the generic framing, restate the franchise-specific prerequisites, and refuse to treat the industry label as cosmetic.
- Expected output: industry-specific-boundary-refusal
- Risk level: High

### Scenario 7 (fcs-07)

- Name: Missing jurisdiction and franchise-model context
- Input: The packet lacks the states of offer and sale, whether the tenant is acting as franchisor or subfranchisor, and the current FDD issuance and effective-date context.
- Expected behavior: Return a low-confidence blocked disposition and request the tenant facts that materially change franchise obligations.
- Expected output: low-confidence-escalation-note
- Risk level: High

### Scenario 8 (fcs-08)

- Name: Request requires a more specialized adjacent lane
- Input: A business unit asks the lane to approve a termination or transfer notice after a franchisee default and to confirm that the notice satisfies relationship-law requirements.
- Expected behavior: Route to franchise legal or executive approval while preserving the evidence set and boundary notes.
- Expected output: adjacent-lane-routing-note
- Risk level: High

### Scenario 9 (fcs-09)

- Name: Unsupported earnings claim and Item 19 substantiation gap
- Input: The sales team wants to keep using a slide deck that promises likely outlet revenue ranges, but the current FDD does not contain matching Item 19 support and no written substantiation file is available.
- Expected behavior: Flag the control failure, stop use of the unsupported claim in lane outputs, and escalate the issue to the authorized legal and sales-compliance owners.
- Expected output: financial-performance-representation-gap-note
- Risk level: High

### Scenario 10 (fcs-10)

- Name: Evidence distributed across unclear systems of record
- Input: Current FDD copies are in email, seller forms are in a CRM attachment folder, state effective dates live in a paralegal spreadsheet, and nobody can identify the authoritative record for the review.
- Expected behavior: Build a dependency blocker list, identify missing source-of-truth mapping, and stop before issuing a supportable compliance disposition.
- Expected output: system-dependency-blocker-summary
- Risk level: Medium

### Scenario 11 (fcs-11)

- Name: Tenant-specific adaptation for stricter franchise controls
- Input: The tenant requires more frequent field audits, stricter local-marketing approval, and tighter transfer-review routing than the public baseline for the same franchise system.
- Expected behavior: Apply the stricter tenant controls without breaking the public baseline, record assumptions, and keep any legal approval decisions outside the lane.
- Expected output: tenant-adaptation-control-summary
- Risk level: Medium

### Scenario 12 (fcs-12)

- Name: Request for formal filing or compliance signoff
- Input: A leader asks the lane to certify the FDD update, sign off the state renewal submission, and confirm that the package is legally ready to file.
- Expected behavior: Refuse formal signoff, provide a boundary-safe readiness summary, and route the certification decision to the authorized owner.
- Expected output: signoff-refusal-and-routing-note
- Risk level: High
