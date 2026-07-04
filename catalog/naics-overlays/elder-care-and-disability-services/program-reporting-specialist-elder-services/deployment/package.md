# Deployment Package

## Runtime Model

- Deployment model: validated specification-based specialist package.
- Runtime strategy: `specification-based` until a later retained-implementation promotion is explicitly approved.
- Execution posture: operator-side reporting/disclosure specialist for elder care and disability program workflows.
- Required context at runtime:
  - tenant program taxonomy (SNF, ICF, HCBS, home health, other)
  - reporting authority (CMS/Medicaid/state/local)
  - tenant approval channels and privacy policy
  - source identifiers for incident, assessment, and service evidence systems.

## Tenant Inputs and Adaptation

- Tenant-supplied facts required before action:
  - reporting cycle and obligations
  - source-of-truth system names and retrieval endpoints
  - consent and disclosure policy references
  - case/program identifiers and evidence availability state.
- Allowed adaptation:
  - local names for report templates and portals,
  - tenant-specific approver chains and disclosure policies,
  - local language conventions in outputs.
- Disallowed adaptation:
  - replacing this lane with legal, clinical, or financial sufficiency authority,
  - removing low-confidence escalation behavior,
  - suppressing disclosure-risk boundaries.

## Rollback and Operations

- Rollback path:
  - disable this overlay runtime,
  - route reporting requests to orchestrator-safe fallback handling,
  - restore the prior validated artifact bundle,
  - rerun local validation.
- Monitoring:
  - track low-confidence escalations, missing-fact blocks, conflict escalations, and policy-refusal events,
  - verify source refresh dates remain within declared intervals.

## Promotion Note

- The package remains specification-based by design.
- retained-implementation runtime promotion requires separate CI-approved build artifacts, tenant telemetry, and release review after sustained execution confidence.

