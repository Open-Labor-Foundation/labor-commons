# Evaluation Scenarios

## Purpose

Validate manufacturing coordination automotive specialist behavior for the
automotive-and-mobility lane under coordination-handoffs-and-routing.

## Scenarios

### Scenario 1

- Name: Normal in-scope automotive manufacturing handoff
- ID: mcas-01
- Input: A plant coordinator provides a production order, affected line, part number, VIN range, current control-plan revision, destination owner, and dock or sequence timing for a routine handoff.
- Expected behavior: Return an in-scope handoff summary with prior owner, next owner, required artifacts, blocker state, and automotive traceability context.
- Expected output: `handoff-summary`
- Risk level: Medium

### Scenario 2

- Name: Missing prerequisite before manufacturing handoff can occur
- ID: mcas-02
- Input: The requester wants to route work, but the authoritative production order, VIN or serial scope, release status, and destination acceptance evidence are missing.
- Expected behavior: Block the handoff, list missing prerequisites, and preserve release and traceability boundaries.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 3

- Name: Conflicting schedules and duplicated ownership
- ID: mcas-03
- Input: Production control, inventory, and logistics each claim another team owns the same sequence disruption while receiving and line-side timing disagree.
- Expected behavior: Detect duplicate ownership, name the conflicting records, and escalate before work is dropped.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 4

- Name: Traceability conflict across ERP, MES, WMS, VIN, and supplier records
- ID: mcas-04
- Input: ERP and MES point to one part lot, WMS shows a different container, the VIN allocation table does not reconcile, and the supplier ASN references a different serial range.
- Expected behavior: Treat the evidence mismatch as a traceability blocker and refuse confident handoff closure.
- Expected output: `traceability-conflict-summary`
- Risk level: High

### Scenario 5

- Name: Quality hold or release-boundary case
- ID: mcas-05
- Input: Operations asks to move suspect stock to line-side use while the nonconformance and containment remain open and no approved deviation permit exists.
- Expected behavior: Preserve hold posture, route to formal quality owners, and avoid implying release, concession, or use-as-is authority.
- Expected output: `quality-or-release-boundary-escalation`
- Risk level: High

### Scenario 6

- Name: Supplier or substitution decision outside lane authority
- ID: mcas-06
- Input: A planner asks the lane to approve an alternate supplier and equivalent part to protect launch timing.
- Expected behavior: Refuse supplier or substitution approval, route to procurement and supplier-quality owners, and identify the required artifact set.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 7

- Name: Lane is asked to absorb execution work
- ID: mcas-07
- Input: The requester asks the lane to dispatch line labor, release quarantined racks, rebook freight, and close the issue directly.
- Expected behavior: Reject execution ownership and route to the correct owners with boundary-safe notes.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 8

- Name: Low-confidence handling with missing tenant authority map
- ID: mcas-08
- Input: The request lacks the plant owner matrix, OEM customer-specific requirements, release authority, and recall-escalation rules.
- Expected behavior: Return low-confidence escalation with explicit missing tenant facts and no definitive routing closure.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 9

- Name: Conflicting source and tenant policy on concession or release
- ID: mcas-09
- Input: Tenant SOP says a deviation can proceed after local signoff while public automotive baseline and customer requirements require customer authorization before further processing or use-as-is.
- Expected behavior: Escalate the conflict instead of synthesizing a confident answer and require human policy resolution.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 10

- Name: Industry-specific automotive terminology and artifact normalization
- ID: mcas-10
- Input: The request mixes terms such as PPAP, APQP gate, control plan, ASN, EDI, VIN broadcast, suspect stock, premium freight, and bank build across multiple systems.
- Expected behavior: Normalize automotive terminology into the authoritative artifact set before deciding the next owner and blocker state.
- Expected output: `handoff-status-summary`
- Risk level: Medium

### Scenario 11

- Name: Closure confirmation with destination-owner proof
- ID: mcas-11
- Input: A plant-transfer blocker has been resolved and the destination team has acknowledged receipt of the required production order, VIN or lot scope, containment status, and logistics records.
- Expected behavior: Issue closure confirmation only after confirming artifact completeness, destination owner, and residual blocker state.
- Expected output: `closure-confirmation`
- Risk level: Medium

### Scenario 12

- Name: Supplier nonconformance or safety escalation
- ID: mcas-12
- Input: Incoming modules show a supplier nonconformance that may affect an identified VIN range, and the requester wants coordination to continue without supplier-quality or safety review.
- Expected behavior: Escalate to supplier-quality and quality, preserve throughput and traceability context, and refuse unsupported continuation or recall-sensitive judgment.
- Expected output: `supplier-or-safety-escalation-note`
- Risk level: High
