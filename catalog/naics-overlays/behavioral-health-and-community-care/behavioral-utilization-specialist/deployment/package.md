# Deployment Package: Behavioral utilization specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/behavioral-health-and-community-care/behavioral-utilization-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1125]()
- Runtime remains `specification-based` until a separate trusted built implementation is explicitly promoted.

## Required Metadata Inputs

- industry overlay slug: `industry-overlays::behavioral-health-and-community-care::behavioral-utilization-specialist`
- runtime_strategy: `specification-based`
- target_delivery_level: `validated`
- validation_profile: `standard`
- workflow_phase_group: `execution-processing-and-fulfillment`
- industry_profile: `cross-industry`
- definition_tier: `approved-lane-template`
- lane_template_id: `public-and-community-programs`

## Tenant-Supplied Runtime Assumptions

- Tenant policy map for:
  - state Medicaid, county, and managed-care behavioral authorization rules,
  - delegated-review and medical-director authority,
  - plan-specific level-of-care tools and turnaround times,
  - privacy, Part 2, and release-of-information handling,
  - continuity and follow-up evidence requirements for closure.
- Systems-of-record endpoints or connectors for:
  - behavioral-health EHR and treatment-plan records,
  - payer or county authorization portal,
  - eligibility and benefits verification,
  - utilization or care-management work queue,
  - consent and privacy controls,
  - document management and notice generation,
  - community referral and scheduling systems.
- Adjacent specialist routing registry for clinical review, appeals, compliance,
  privacy, and community-care coordination ownership.

## Materialization Notes for `commons-crew`

- The package expects runtime retrieval of the controlling authorization record,
  level-of-care artifact, active-treatment record, and reviewer or notice state
  before any case progression action.
- Required output shapes for runtime:
  - execution status update with lifecycle stage and next action,
  - exception queue note,
  - completion evidence record,
  - program or case-status summary,
  - eligibility, privacy, or authority escalation note.
- Refusal triggers must remain explicit, including:
  - missing tenant facts or controlling records,
  - licensed-review or payer-override requests,
  - privacy and Part 2 uncertainty,
  - crisis or safety facts needing a specialized owner,
  - attempts to close without reviewer and continuity evidence.

## Operational Rollout

1. Enable the specialist in the overlay catalog with specification-based routing.
2. Configure retrieval connectors and source-of-truth precedence for payer
   portal, behavioral EHR, eligibility, privacy, and scheduling systems.
3. Validate scenario IDs and functionality coverage against the package
   artifacts before tenant exposure.
4. Enable orchestrator handoff routes for clinical review, appeals, privacy,
   and community-care coordination exceptions.
5. Monitor blocked-case rate, record-conflict rate, privacy escalations, and
   completion-without-evidence attempts.

## Rollback

- Disable overlay execution for behavioral utilization actions.
- Re-route new work items to orchestrator or human operators.
- Freeze unresolved completion states created during active blockers and review
  them against the controlling systems of record.
- Re-open issue-level review if source baseline, tenant-policy mapping, or
  adjacent-owner routing proves insufficient.

## Validation evidence

- Positioning: validated behavioral-health utilization overlay for public,
  community, and managed behavioral-care operations with strict evidence,
  privacy, and authority controls.
- Packaging note: this release is a **specification-based** package and does not claim a
  retained implementation.
- Promotion criterion: if usage becomes common enough, promote by implementing a
  separate trusted build, proving stable production behavior, validating the
  same scenario families against real connectors, and obtaining explicit
  governance approval in a follow-on change.
