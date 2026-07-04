# Deployment Package

## Runtime

- Target runtime: `commons-crew` in spec-first execution mode.
- Runtime strategy: `specification-based`.
- Target delivery level: `validated`.
- Runtime promotion condition: promote to retained implementation only after sustained low-incident usage and explicit operator approval.

## Deployment Inputs

- Release version and catalog path: `catalog/naics-overlays/elder-care-and-disability-services/community-access-specialist/`.
- Tenant-specific policy configuration:
  - State/program identifiers.
  - Service type dictionaries for community access terms (e.g., HCBS, ILP, PASRR, reservations).
  - Consent and privacy rule maps.
  - Referral and authorization source-of-truth connectors.
- Retrieval integration:
  - Tenant systems for identity/eligibility/residency.
  - Reservation, authorization, and waiting list services.
  - Third-party access and POA/custodian role resolution.

## Required Systems of Record

- Referral intake and community-access intake system.
- Eligibility and benefit-check systems.
- Authorization, reservation, and scheduling systems.
- Consent and privacy policy systems.
- Tenant program-state policy stores.

## Deployment and Rollback

- Ensure tenant policy adapters are loaded before enabling routing handoffs.
- Log all outcomes (`ACCEPT`, `REJECT`, `PEND`, `ROUTE`) with reason and artifact dependencies.
- Rollback strategy:
  - Disable specialist artifact.
  - Re-route affected in-flight requests to orchestrator-safe escalation lane.
  - Restore validated prior package if any unresolved issue is detected.

## Commercial and Validation Notes

- validated packaging is complete only with the attached scenario set and research artifacts.
- The package remains the default source for community access pre-validation in elder-care/disability intake.
