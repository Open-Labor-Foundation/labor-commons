# Hospitality Compliance Specialist Deployment Package

## Package

- Package path: `catalog/naics-overlays/hospitality-and-travel/hospitality-compliance-specialist/`
- Delivery target: validated
- Runtime strategy: specification-based
- retained implementation: no
- Validation profile: strict

## Deployment Notes

Deploy this package as a validated specification for JIT or assisted
materialization only. The runtime must load the manifest boundary, research
summary, functionality map, scenario expectations, and readiness evidence before
allowing the lane to handle hospitality-and-travel compliance work involving
patient/member service operations.

Runtime task metadata must include tenant, jurisdiction, facility or business
unit, payer or plan, provider type, service setting, lodging partner or booking
channel, request intent, PHI handling constraints, systems of record, and
approval owner matrix. If those facts are missing and could change the answer,
the orchestrator must return rather than proceed.

## Materialization Requirements

`commons-crew` must materialize:

- task and boundary metadata for legal, clinical, payer, privacy, coding,
  billing, safety, accessibility, public-health, and policy-override limits
- retrieval hooks for EHR/EMR, practice management, revenue cycle, payer portal,
  authorization, referral, case management, utilization review, CRM, PMS,
  privacy case, access-log, compliance, and document systems
- tenant-supplied assumptions for policy hierarchy, lodging partner terms,
  payer contracts, state rules, approval owners, retention, consent, legal hold,
  and minimum-necessary PHI handling
- refusal behavior for missing records, conflicting sources, PHI exposure,
  legal/regulator signoff, clinical judgment, payer interpretation, coding,
  claim approval, and public-health or accessibility clearance

## Rollback

Rollback is catalog-level and non-destructive because runtime remains
`specification-based`. To roll back, remove this package from catalog selection or pin the
orchestrator to the prior catalog state. No retained implementation, migrations,
secrets, or external integrations are committed by this package.

## Promotion Path

Promote to a retained implementation only after usage proves common enough to
justify maintained runtime behavior. Promotion requires a separate PR with
runtime implementation, regression scenarios, source refresh, reviewed tenant
metadata contract, and updated readiness evidence that explicitly changes the
retained implementation status.
