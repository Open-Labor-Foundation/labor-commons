# Deployment Package: Physician practice administration specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/ambulatory-and-physician-services/physician-practice-administration-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1064]()
- Runtime remains `specification-based` until a separately promoted retained-implementation implementation is explicitly approved.

## Required Task and Boundary Metadata

- Industry overlay slug: `industry-overlays::ambulatory-and-physician-services::physician-practice-administration-specialist`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- Workflow phase group: `records-documentation-and-administration`
- Industry profile: `cross-industry`
- Definition tier: `approved-lane-template`
- Lane template id: `education-and-academic-operations`

## Required Inputs at Runtime

- Tenant policy and precedence model for physician-practice publication, retention, privacy, and delegated-authority handling.
- Approval owner registry for ambulatory scheduling, outpatient documentation, revenue, credentialing or enrollment, privacy, compliance, and physician leadership.
- Retrieval map for systems of record:
  - PECOS,
  - NPPES or provider directory feeds,
  - practice-management or provider master,
  - EHR or HIM,
  - privacy or ROI workflows,
  - scheduling and change-ticket systems.
- Source-priority policy for public guidance versus tenant, payer, MAC, and state-law conflicts.
- Practice-location, session, and physician-assignment context including directory publication rules, records-custody expectations, and event-readiness checklist ownership.

## Materialization Notes for `commons-crew`

- Required task metadata:
  - request class,
  - physician, practice, and location identifiers,
  - source systems involved,
  - requested output shape,
  - adjacent-lane owner map,
  - escalation triggers and confidence posture.
- Assumptions that must be tenant-supplied or retrieved at runtime:
  - jurisdiction and state retention rules,
  - source-of-truth hierarchy,
  - delegated-official authority,
  - roster publication workflow,
  - session-readiness ownership,
  - privacy and ROI process.
- Regulated-lane caveats:
  - NPI or directory presence does not prove credentialing or billing readiness.
  - HIPAA access and notice rules constrain record handling but do not authorize independent release decisions.
  - OIG and CMS guidance can frame the lane, but tenant, payer, MAC, and state rules may narrow the public baseline.
- Conditions requiring refusal or orchestrator return:
  - missing authority or source-precedence facts,
  - legal, credentialing, privacy-officer, revenue, or clinical authority requests,
  - patient-safety or scheduling approval implications,
  - conflicting public and tenant policy that materially changes the answer.

## Operational Rollout

1. Enable the specialist in the ambulatory-and-physician-services overlay catalog.
2. Configure tenant retrieval connectors for PECOS-adjacent records, provider-master systems, privacy queues, and session-readiness artifacts.
3. Validate all 12 scenarios and functionality mapping against evidence artifacts.
4. Enable orchestrator handoff routes for ambulatory scheduling, documentation, revenue, credentialing, privacy, and compliance escalation.
5. Monitor source-conflict rates, privacy escalations, roster-publication blockers, and event-readiness delays.

## Rollback

- Disable the physician-practice-administration route in runtime orchestration.
- Re-route active requests to orchestrator-safe escalation with preserved artifacts and unresolved assumptions.
- Re-open queue case review and source policy checks before re-enable.

## Validation evidence

- Positioning: validated physician-practice administration overlay for ambulatory and medical-group operators who need evidence-backed roster, location, notice, and readiness workflows.
- The package is a **specification-based** control layer and does not claim trusted built authority.

