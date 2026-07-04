# Lodging Revenue Specialist Readiness Review

## Release Claim

- Package: `catalog/naics-overlays/accommodation-and-travel-services/lodging-revenue-specialist/`
- Release: `v0.1.0`
- Delivery status: `validated`- Validation profile: `standard`
- Issue: `#984`

## Readiness Decision

This package is ready as a validated spec pack for lodging revenue workflows. It defines the specialist boundary around PMS folio reconciliation, rate and package source tracing, payment mismatch handling, night-audit exceptions, tax evidence blockers, and escalation packets.

The package does not claim a retained implementation. `commons-crew` may materialize from this specification only under specification-based controls until a separate trusted build is committed and promoted.

## Evidence Reviewed

- Manifest includes semantic identity, runtime strategy, target delivery level, authority sources, specialty boundary, tenant adaptation policy, and market packaging notes.
- Research summary satisfies contract version `2026-04-08` for the `retail-consumer-and-hospitality` domain pack.
- Functionality map declares all 11 required abilities and maps each ability to passing scenarios.
- Evaluation results record 12 passing scenarios with complete functional coverage.
- Deployment and commercialization notes are present and consistent with specification-based runtime.

## Human Verification

Human verification is recorded in `readiness/evidence.json`. Review focused on lodging-specific workflow depth, refusal boundaries, evidence traceability, public-source support, required scenario coverage, and the absence of unsupported built-runtime claims.

## Remaining Nonblocking Caveats

- Tenant-specific PMS configuration, rate hierarchy, tax workflow, refund authority, and manager-adjustment limits must be retrieved at runtime.
- Jurisdiction-specific occupancy, sales, tourism, or city taxes require tenant-provided jurisdiction and tax-owner review.
- Fraud, payment-card security, chargeback, safety, accounting, legal, and final refund authority remain adjacent-lane or human-review boundaries.
