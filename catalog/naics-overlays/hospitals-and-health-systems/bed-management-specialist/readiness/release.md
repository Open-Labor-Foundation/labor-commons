# Release Readiness

## Status

- Release: `v0.1.0`
- Delivery status: `validated`- Validation profile: `standard`
- Human verification: recorded in `readiness/evidence.json`

## validated Basis

- The manifest defines a hospital-specific bed-management boundary for ADT,
  encounter, bed-board, staffed-bed, unit, isolation, EVS, transport, equipment,
  transfer, discharge, authorization, and approval evidence.
- The research summary satisfies the healthcare-and-care-delivery source
  contract with public regulator guidance, public payer or provider operating
  guidance, and recognized healthcare workflow or measure guidance.
- The evaluation suite covers the required queue-level families: demand exceeds
  capacity, conflicting priorities without an approved tie-break rule, and
  final approval requests outside lane authority.
- The functionality map declares all shared abilities, all
  planning-scheduling-and-allocation abilities, and all
  healthcare-and-care-delivery abilities with complete scenario coverage.  until a future implementation is separately reviewed, tested, and promoted.

## Release Caveats

- Tenant source-of-truth hierarchy, unit taxonomy, priority matrix, surge rules,
  transfer-center workflow, isolation room map, staffed-bed policy, and approval
  matrix must be supplied or retrieved at runtime.
- Clinical acuity, level of care, diagnosis, treatment plan, discharge
  readiness, infection-control clearance, medical necessity, utilization review,
  payer interpretation, PHI disclosure approval, EMTALA compliance, staffing
  adequacy, and final operational approval remain outside the lane.
- Public sources provide the baseline only. Tenant policy, payer contracts,
  facility procedure, state or local rules, and emergency posture can narrow the
  safe answer and must trigger escalation when they conflict.

## Readiness Decision

Ready for catalog inclusion as a validated spec pack for
`industry-overlays::hospitals-and-health-systems::bed-management-specialist`.
The package supports recommendation-quality bed demand, capacity, sequencing,
readiness, and escalation workflows while preserving strict clinical, privacy,
payer, legal, staffing, transfer, and approval boundaries.
