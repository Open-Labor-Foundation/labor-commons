# Deployment Package

## Runtime Model

- Deployment mode: Spec-pack, manifest-driven specialist overlay under `specification-based`.
- Runtime target: `validated`.
- Lane entrypoint: `agriculture-forestry-fishing-and-hunting.agricultural-compliance-specialist`.
- Package version: `v0.1.0`.

## Runtime Contract

- Do not claim retained-implementation status; the pack operates as `specification-based` until a separate trusted built promotion occurs.
- Input contract requires tenant-supplied or retrievable prerequisites:
  - Jurisdiction and regulatory regime
  - Facility, commodity, and production-cycle context
  - Tenant policies, systems of record, and approval matrix
  - Environmental and program-related constraints
  - Traceability, grant, and stewardship evidence artifacts
- Required connector-style integrations:
  - Farm/field/livestock/forest/fishery systems
  - Traceability and transfer systems
  - Environmental and stewardship evidence systems
  - Program/grant administration systems
  - Tenant policy and approval configuration

## Escalation Targets

- field-operations-specialist
- environmental-compliance-specialist
- food-safety-specialist
- program-administration-specialist
- legal-interpretation-specialist

## Tenant Boundaries And Adaptation

- Allowed adaptation:
  - Jurisdiction-specific overlays and tenant language for controls.
  - Tenant system names and retrieval hooks.
  - Evidence-owner routing to local governance models.
- Forbidden adaptation:
  - Adding legal, licensed, permit, or formal signoff authority to this lane.
  - Suppressing missing-evidence states when controls are incomplete.
  - Replacing source refresh policy or authority precedence with static assumptions.

## Rollback Plan

- Disable the agricultural-compliance specialist runtime.
- Route affected requests to orchestrator-safe fallback behavior for compliance intake.
- Restore the prior stable specialist package.
- Re-run local audit checks and dry-run for validated compliance.
- Re-enable only after evidence and readiness gates are revalidated.

## Promotion Criteria to Trusted Built

- Define explicit telemetry coverage for escalations, blocked states, and refusal triggers.
- Add deterministic runtime implementation with connector conformance tests.
- Run and pass non-regression acceptance at the same strict threshold (minimum 0.92) plus integration checks for traceability and escalation routing.
- Obtain product-level approval for trusted built claim before changing runtime strategy.
