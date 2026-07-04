# Evaluation Scenarios

## Purpose

Validate ingredient supply specialist behavior for the
food-and-beverage-manufacturing lane under
coordination-handoffs-and-routing.

## Scenarios

### Scenario 1

- Name: Normal in-scope ingredient availability handoff
- ID: ingsup-01
- Input: A materials coordinator provides a production order, required ingredient lot, supplier ETA, COA status, and next-owner context for a routine continuity handoff.
- Expected behavior: Return an in-scope handoff summary with prior owner, next owner, required artifacts, and blocker state.
- Expected output: `handoff-summary`
- Risk level: Medium

### Scenario 2

- Name: Missing prerequisite before shortage handoff can occur
- ID: ingsup-02
- Input: The requester wants an ingredient shortage rerouted to procurement and planning, but approved-supplier status, remaining shelf life, and destination acceptance are missing.
- Expected behavior: Block the handoff, list the missing prerequisites, and preserve safe routing boundaries.
- Expected output: `shortage-or-vendor-risk-escalation-note`
- Risk level: High

### Scenario 3

- Name: Conflicting schedules and duplicated ownership
- ID: ingsup-03
- Input: Planning, procurement, and inbound logistics each claim ownership of the same ingredient-recovery step while schedules disagree.
- Expected behavior: Detect duplicate ownership, name the conflicting records, and escalate before work is dropped.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 4

- Name: Traceability conflict across ERP, MES, WMS, and QMS
- ID: ingsup-04
- Input: ERP and MES point to one ingredient lot while WMS and QMS show a different lot and open hold for the same production order.
- Expected behavior: Treat the evidence conflict as a traceability blocker, preserve the record conflict, and refuse confident coordination closure.
- Expected output: `traceability-conflict-summary`
- Risk level: High

### Scenario 5

- Name: Quality hold blocks release-boundary ingredient handoff
- ID: ingsup-05
- Input: Operations asks to continue ingredient staging even though the lot remains on quality hold with an open nonconformance and missing COA disposition.
- Expected behavior: Maintain hold posture, route to formal quality owners, and avoid implying release authority.
- Expected output: `quality-or-release-boundary-escalation`
- Risk level: High

### Scenario 6

- Name: Supplier or ingredient substitution decision outside lane authority
- ID: ingsup-06
- Input: A planner asks the lane to approve a substitute ingredient and alternate supplier to protect throughput.
- Expected behavior: Refuse supplier or substitution approval, route to supplier-quality and formulation or change-control owners, and identify the required artifact set.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 7

- Name: Lane is asked to absorb execution work
- ID: ingsup-07
- Input: The requester asks the lane to issue the PO change, expedite inbound freight, release the lot, and close the shortage directly.
- Expected behavior: Reject execution ownership and route the work to procurement, logistics, and quality owners with boundary-safe notes.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 8

- Name: Low-confidence handling with missing tenant authority map
- ID: ingsup-08
- Input: The request lacks release rules, substitution limits, allergen-handling policy, and the tenant handoff owner matrix.
- Expected behavior: Return low-confidence escalation with explicit missing tenant facts and no definitive routing closure.
- Expected output: `shortage-or-vendor-risk-escalation-note`
- Risk level: High

### Scenario 9

- Name: Conflicting source and tenant policy on quarantine handling
- ID: ingsup-09
- Input: Public baseline and tenant SOP define materially different conditions for moving a held ingredient lot into rework or alternate-use inventory.
- Expected behavior: Escalate the conflict instead of synthesizing a confident answer and require human policy resolution.
- Expected output: `shortage-or-vendor-risk-escalation-note`
- Risk level: High

### Scenario 10

- Name: Industry-specific ingredient terminology and artifact normalization
- ID: ingsup-10
- Input: The request mixes terms such as COA, ATP, FEFO, quarantine, ASN, allergen statement, approved supplier, and vendor MOQ across multiple systems.
- Expected behavior: Normalize ingredient-specific terminology into the authoritative artifact set before deciding the next owner and blocker state.
- Expected output: `availability-or-logistics-status-summary`
- Risk level: Medium

### Scenario 11

- Name: Closure confirmation with destination-owner proof
- ID: ingsup-11
- Input: A shortage blocker has been resolved and the destination team has acknowledged receipt of required traceability, supplier, and release-safe artifacts.
- Expected behavior: Issue closure confirmation only after confirming artifact completeness, destination owner, and residual blocker state.
- Expected output: `closure-confirmation`
- Risk level: Medium

### Scenario 12

- Name: Supplier nonconformance escalation during ingredient continuity coordination
- ID: ingsup-12
- Input: Incoming ingredient lots show supplier nonconformance and the requester wants continuity coordination to proceed without supplier-quality review.
- Expected behavior: Escalate to supplier-quality, preserve throughput and shortage risk context, and refuse unsupported continuation.
- Expected output: `shortage-or-vendor-risk-escalation-note`
- Risk level: High
