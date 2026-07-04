# Hospital quality operations specialist deployment package

Package: `naics-overlays/hospitals-and-health-systems/hospital-quality-operations-specialist`  
Release: `v0.1.0`  
Delivery target: `validated`  
Runtime strategy: `specification-based`

## Deployment Scope

Deploy this package as a validated specification for a hospitals-and-health-systems quality operations overlay. The package is suitable for catalog discovery, tenant scoping, evaluation, and runtime materialization by `commons-crew` when no retained implementation has been promoted.

The deployed lane supports:

- Quality or safety status summaries.
- Hold, release, or nonconformance records with evidence references.
- Corrective-action or incident escalation packages.
- Quality or assurance findings summaries.
- Corrective-action or unresolved-risk escalation notes.
- Controlled PHI, clinical/patient-safety, payer/utilization/coding, and low-confidence routing notes.

## Runtime Guardrails

- Runtime must treat this package as `specification-based`.
- Runtime must not claim a trusted built implementation is available.
- Runtime must retrieve tenant facts, records, systems, policies, review authority, and privacy constraints before acting on regulated or patient-specific work.
- Runtime must preserve public baseline source constraints and record tenant assumptions.
- Runtime must return to orchestrator when required facts, records, sources, or accountable owners are missing.

## Required Tenant Inputs

- Facility, business unit, service line, program, care setting, jurisdiction, source hierarchy, QAPI charter, incident taxonomy, RACI, review workflow, approval matrix, and escalation SLA.
- EHR/EMR, incident reporting, QAPI, measure abstraction, audit, privacy, case management, utilization review, patient access, payer portal, coding, revenue cycle, claim, denial, and appeal retrieval hooks.
- Payer, plan, provider type, facility type, service dates, authorization status, referral dependencies, eligibility and benefits status, consent, privacy, and minimum-necessary constraints.
- Tenant policy precedence, accreditation posture, peer-review handling, CAPA workflow, quality committee authority, approved distribution groups, and rollback owner.

## Deployment Steps

1. Register the spec pack in the industry overlay catalog using the manifest metadata.
2. Confirm the package remains `specification-based` and `trusted_built_runtime_available` remains false.
3. Configure tenant retrieval hooks and source-system precedence before runtime materialization.
4. Configure adjacent specialist routing for clinical review, licensed clinician, patient safety, infection prevention, privacy, compliance, utilization management, patient access, coding, revenue cycle, payer operations, legal, QAPI committee, and executive approval owners.
5. Enable evaluation checks from `evaluation/scenarios.md` and `evaluation/functionality-map.json`.
6. Record source review, tenant policy review, PHI handling constraints, and human verification in deployment evidence.

## Rollback

Rollback is content-level for the spec pack unless a future trusted build is introduced.

- Disable tenant materialization for this overlay.
- Revert catalog registration to the prior package version or mark the lane unavailable.
- Preserve audit records for any generated quality status, hold, release, nonconformance, incident, CAPA, or escalation outputs.
- Notify tenant operators that previously generated recommendations remain advisory and must be reviewed under local quality authority.
- If a source or policy defect drove rollback, mark the affected source baseline stale and require rereview before re-enablement.

## Monitoring

Monitor:

- Orchestrator returns caused by missing tenant facts or source-system access.
- Attempts to bypass quality holds or close findings without review support.
- PHI-sensitive requests and privacy escalation rates.
- Clinical, patient-safety, payer, coding, revenue, legal, financial, or final approval boundary crossings.
- Source conflicts between public guidance, tenant policy, state reporting rules, accreditation expectations, and payer contracts.
- Repeat defects and reopened CAPA packages.

## Promotion To retained implementation

Promotion requires a separate change. Use this package as the source spec, then add a maintained implementation, executable regression tests, tenant-safe retrieval adapters, regulated-lane safeguards, human validation, rollback evidence, and explicit catalog metadata showing that a retained implementation exists. Usage frequency, repeated tenant demand, and stable scenario performance should drive the promotion decision.
