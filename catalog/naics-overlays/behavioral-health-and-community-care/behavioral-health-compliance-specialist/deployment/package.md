# Deployment Package: Behavioral health compliance specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec pack artifact in
  `catalog/naics-overlays/behavioral-health-and-community-care/behavioral-health-compliance-specialist/`
- Delivery level: `validated`
- Build source: queue issue
  [#1123]()
- Runtime may only be 
  build and explicit product approval.

## Required Metadata Inputs

- `industry overlay slug`:
  `industry-overlays::behavioral-health-and-community-care::behavioral-health-compliance-specialist`
- `runtime_strategy`: `specification-based`
- `target_delivery_level`: `validated`
- `validation_profile`: `strict`
- `workflow_phase_group`: `compliance-controls-and-governance`
- `domain_profile`: `cross-industry`
- `lane_template_id`: `compliance-and-controls`

## Tenant-Supplied Runtime Assumptions

- Tenant policy map that narrows the public baseline to jurisdiction-specific
  confidentiality rules, survey or accreditation posture, crisis-routing
  expectations, and program-model constraints.
- Authoritative systems-of-record endpoint or export for:
  - behavioral health EHR or patient records
  - consent, ROI, Part 2, and disclosure logs
  - incident, grievance, and corrective-action records
  - staff licensure, supervision, and training files
  - quality-measure dashboards and audit records
  - policy, governance, and survey-readiness artifacts
- Adjacent specialist registry and routing permissions for privacy and legal,
  licensed clinical, patient safety, survey or accreditation, payer, and
  executive owners.
- Review cadence configuration for source refresh checks and control review
  monitoring.

## Materialization Notes for `commons-crew`

- Required to run with explicit retrieval hooks for:
  - jurisdiction, program model, and facility context
  - CCBHC or CMHC criteria or survey references in use
  - ROI, Part 2, minimum-necessary, and disclosure evidence
  - crisis-response, incident, grievance, and corrective-action records
  - licensure, supervision, training, and staffing evidence
  - quality and governance review artifacts
- Lane must generate these output shapes in workflow execution:
  - Control or obligation matrix tied to the lane
  - Evidence readiness or gap summary
  - Exception and remediation escalation note
  - Evidence packet or checklist for review or attestation preparation
  - Adjacent-lane routing note for legal, licensed, or safety-critical cases
- Refusal conditions and route-outs must not be suppressed even under urgency
  pressure.

## Operational Rollout

- Install:
  1. Validate tenant retrieval connectors and permission boundaries.
  2. Enable package in orchestrated catalog for behavioral-health-specific
     compliance requests only.
  3. Verify scenario IDs and ability coverage via local spec-pack audit.
  4. Enable escalations to adjacent specialists with owner handoff templates.
- Monitor:
  - missing evidence rates for privacy, crisis, licensure, and quality controls
  - repeated low-confidence escalations
  - staleness windows against source refresh policy
  - boundary and adjacency handoffs
  - unsupported workaround or signoff requests
  - public-versus-tenant policy conflicts
- Alert thresholds must be set before production enablement.

## Rollback

- Disable this specialist path and reroute affected streams to orchestrator
  fallback.
- Invalidate any cached compliance disposition outputs emitted by this lane.
- Restore previous approved package and re-run spec-pack audit before re-enable.

## Validation evidence

- Positioning: compliance-support specialist for behavioral health and community
  care operators with explicit privacy, crisis, survey, and evidence guardrails.
- Packaging note: this is a validated spec pack and does not claim
  retained-implementation autonomy.
- Promotion criterion: sustained production stability, no unresolved high-risk
  escalations, and explicit product governance approval.
