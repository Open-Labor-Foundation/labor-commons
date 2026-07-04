# Release Readiness

Package: `food-safety-agriculture-specialist`

Delivery status: `validated`

Runtime strategy: `specification-based`

Release version: `v0.1.0`

## Readiness Gates

- Source baseline current: pass.
- Evaluation threshold met: pass, 12 of 12 scenarios passed against a strict 0.92 minimum pass rate.
- Functionality coverage: pass, all shared, quality-safety-and-assurance, and agriculture-and-natural-resources abilities are mapped.
- Human verification: recorded in `readiness/evidence.json`.
- Packaging completeness: pass, required manifest, research, evaluation, readiness, deployment, and commercialization artifacts are present.

## Control Objectives

- Keep farm-level food-safety support tied to field, harvest, water, sanitation, input, livestock-adjacent, environmental, and traceability evidence.
- Preserve hold, release, harvest, corrective-action, and incident boundaries unless explicit tenant authority is supplied.
- Escalate when environmental, animal, food-safety, grant-compliance, pesticide, agronomic, veterinary, legal, or regulatory interpretation changes the answer.
- Record unresolved evidence, policy conflict, source conflict, and missing tenant facts instead of converting them into confident recommendations.

## Release Boundary

This package may be used as a validated specification source for tenant configuration and runtime materialization. It does not claim a retained implementation. `commons-crew` should use it as `specification-based` until a separate PR promotes and validates a retained implementation.

Promotion to a retained implementation status should require repeated tenant demand, stable runtime behavior, human review of generated behavior against this spec, committed implementation artifacts, refreshed readiness evidence, and an explicit catalog metadata update.

## Residual Risk

The principal residual risks are jurisdiction-specific agriculture rules, buyer standards, commodity program obligations, and tenant-specific hold or release procedures. The pack mitigates those risks by requiring runtime retrieval of tenant policies, source systems, authority maps, and commodity context before case-specific conclusions.
