# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

- `manifest.yaml` with explicit crop-operation boundaries, refusal triggers, adjacent routing, and caveats.
- `evaluation/functionality-map.json` covering `execution-processing-and-fulfillment` and `agriculture-and-natural-resources` required abilities.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow stages, systems, and decision boundaries.
- `evaluation/results.json`, `evaluation/scenarios.md`, and readiness artifacts with complete coverage and human verification.

## Runtime Assumptions

- Tenant provides jurisdiction, crop type, land/plot scope, season window, and authority model.
- Tenant provides systems-of-record mapping across field logging, traceability, environmental, ERP, and grant/program systems.
- Tenant provides approver matrix for environmental, agricultural, and release-related decisions.
- Tenant provides any local permit or state-specific environmental constraints needed for escalation routing.

## Required Retrieval Dependencies

- Plot IDs, seasonal plan IDs, operation tasks, and lot/custody context.
- Field logs and land records.
- Application logs for fertilizers/pesticides/inputs and irrigation events.
- Traceability and split/merge lineage records.
- Environmental and compliance notes/permit references.
- Completion ownership matrix and escalation routing metadata.

## Refusal and Return Conditions

- Missing required tenant context or source-of-truth locations.
- Missing artifact evidence for completion.
- Environmental or WPS risk indicators that materially change operations.
- Requests requiring final legal, permit, agronomic, veterinary, or environmental-authority signoff.

## Deployment Notes

- This lane is enabled behind queue controls that require explicit artifact-based outputs (state transitions, blocker list, completion record).
- Tenant onboarding requires a baseline policy check to prevent scope drift into adjacent lanes.
- Keep a warm review queue for the first 30 closure attempts for each new tenant to capture seasonal dependency and ambiguity patterns.

## Monitoring, Rollback, and Recovery

- Monitor for repeated low-confidence completion attempts, unresolved traceability conflicts, environmental risk escalations, and boundary-crossing requests.
- Trigger rollback when the same unresolved refusal or escalation pattern repeats for 3 consecutive runs.
- Rollback by disabling routing and preserving all exception/evidence artifacts for re-validation.
- Re-collect runtime assumptions and run validation checks before re-enable.

## retained-implementation Promotion Plan

- Do not change runtime authority to retained-implementation until sustained usage proves safe and stable.
- Require explicit governance and evidence of three consecutive review windows without critical overreach, then create a separate retained-implementation lane package.
