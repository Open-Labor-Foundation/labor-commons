# Deployment Package: Prior authorization specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/ambulatory-and-physician-services/prior-authorization-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1065]()
- Runtime remains `specification-based` until a separate trusted built implementation is
  explicitly promoted.

## Required Metadata Inputs

- industry overlay slug:
  `industry-overlays::ambulatory-and-physician-services::prior-authorization-specialist`
- runtime_strategy: `specification-based`
- target_delivery_level: `validated`
- validation_profile: `standard`
- workflow_phase_group: `intake-access-and-initiation`
- industry_profile: `cross-industry`
- definition_tier: `approved-lane-template`
- lane_template_id: `intake-and-access`

## Tenant-Supplied Runtime Assumptions

- Tenant policy map for:
  - payer-specific prior-auth requirements and submission channels,
  - state or product-line urgency and turnaround rules,
  - referral and ordering-provider dependencies,
  - site-of-service coding conventions,
  - privacy and minimum-necessary handling,
  - source-of-truth precedence across portal, queue, and EHR systems.
- Systems-of-record endpoints or connectors for:
  - payer portals or electronic prior-authorization platforms,
  - eligibility and benefits verification,
  - practice-management and patient-access systems,
  - ambulatory EHR and referral-management systems,
  - document-management and attachment repositories,
  - work-queue or case-management tooling,
  - privacy and release-of-information controls.
- Adjacent specialist routing registry for clinical review, scheduling,
  privacy, appeals, payer-relations, and revenue-cycle ownership.

## Materialization Notes for `commons-crew`

- The package expects runtime retrieval of the controlling identity,
  eligibility, service-coding, ordering, referral, authorization, and portal
  status records before any disposition is finalized.
- Required output shapes for runtime:
  - intake disposition note,
  - prerequisite or eligibility checklist,
  - escalation packet,
  - intake or access disposition summary,
  - prerequisite or eligibility escalation note.
- Refusal triggers must remain explicit, including:
  - missing tenant facts or controlling records,
  - attempts to bypass referral, authorization, or eligibility checks,
  - clinical-judgment or payer-adjudication requests,
  - privacy or requester-verification uncertainty,
  - post-service retro-auth, billing, or denial-cleanup asks.

## Operational Rollout

1. Enable the specialist in the overlay catalog with specification-based routing.
2. Configure retrieval connectors and source-of-truth precedence for payer
   portal, eligibility, practice-management, EHR, referral, and document
   systems.
3. Validate scenario IDs and functionality coverage against the package
   artifacts before tenant exposure.
4. Enable orchestrator handoff routes for clinical review, scheduling,
   privacy, appeals, payer-relations, and revenue-cycle exceptions.
5. Monitor blocked-intake rate, missing-document rate, scheduling-bypass
   attempts, privacy escalations, and status-conflict incidence.

## Rollback

- Disable overlay execution for ambulatory prior-authorization intake actions.
- Re-route new work items to orchestrator or human operators.
- Freeze unresolved accepted or pending states created during active blockers
  and reconcile them against the controlling systems of record.
- Re-open issue-level review if source baseline, payer-policy mapping, or
  adjacent-lane routing proves insufficient.

## Validation evidence

- Positioning: validated ambulatory and physician-services prior-auth intake
  overlay for clinics, outpatient departments, ambulatory surgery, and
  physician groups that need strict prerequisite and boundary control.
- Packaging note: this release is a **specification-based** package and does not claim a
  retained implementation.
- Promotion criterion: if usage becomes common enough, promote by implementing a
  separate trusted build, validating the same scenario families against real
  connectors and payer workflows, collecting usage evidence, and obtaining
  explicit governance approval in a follow-on change.
