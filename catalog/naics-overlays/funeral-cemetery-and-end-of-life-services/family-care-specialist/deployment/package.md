# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

- `manifest.yaml` with explicit family care support boundaries, refusal triggers, adjacent routing, regulated-lane caveats, runtime strategy, and target delivery level.
- `evaluation/functionality-map.json` covering all shared abilities, `service-support-and-resolution` abilities, and the `cross-industry` artifact-awareness ability.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow stages, artifacts, systems, decision boundaries, domain failure modes, scenario-family coverage, and unresolved ambiguity handling.
- `evaluation/results.json`, `evaluation/scenarios.md`, and readiness artifacts with complete functionality coverage and human verification.

## Runtime Assumptions

- Tenant provides jurisdiction, facility, brand, service model, family care workflow, complaint policy, communication policy, consent policy, pricing or exception policy, and operating constraints.
- Tenant provides systems-of-record mapping across funeral home case management, family care CRM or service tickets, arrangement records, eDRS or vital-record portals, document repositories, cemetery systems, crematory systems, obituary or event systems, payment ledgers, complaint queues, and exception workflows.
- Tenant provides owner and approval matrices for licensed funeral directors, embalmers, cemetery administrators, crematory operators, compliance, privacy, legal, veterans benefits, SSA or survivor-benefit referrals, billing, payment approval, and grief-support teams.
- Tenant provides any local or state-specific right-to-control disposition, consent, remains-release, cremation or hydrolysis authorization, death-registration, permit, preneed, cemetery, complaint, or records-release context needed for safe support handling.

## Required Retrieval Dependencies

- Family care ticket, request summary, complaint record, contact log, preferred language, and communication history.
- Decedent case ID, first-call note, arrangement summary, service schedule, venue, obituary or tribute record, and aftercare task.
- Authorized representative, next of kin, person authorized to direct disposition, PADD, preneed instruction, consent, release-of-information, and contact preference evidence.
- GPL state, statement of funeral goods and services selected, payment or balance status, and tenant policy references when relevant to the support request.
- Death-certificate demographic intake, eDRS or vital-record portal reference, medical certifier or coroner status, disposition permit, death-certificate copy order, and registrar dependency.
- Cremation or hydrolysis authorization, cemetery interment record, committal schedule, remains-release or urn pickup authorization, transportation, clergy, flowers, music, venue, and payment dependencies.
- Escalation matrix, adjacent owner map, completion criteria, and audit trail metadata.

## Refusal and Return Conditions

- Missing required tenant jurisdiction, policy, record locations, authority map, owner map, source-of-truth access, or family communication rules.
- Missing family authority, consent, requester identity, case, service, vital-record, permit, cemetery, crematory, remains-release, obituary, complaint, or completion evidence.
- Disputed right to control disposition, conflicting preneed instructions, conflicting public and tenant policy, conflicting consent records, or conflicting cemetery or crematory requirements.
- Requests requiring legal, licensed funeral directing, embalming, cemetery, crematory, benefits, clinical, safety-critical, financial-approval, grief-support, privacy, records-release, or policy-override authority.

## Deployment Notes

- Enable behind queue controls that require explicit artifact-based outputs: service support disposition, resolution note, customer or stakeholder communication summary, case or family-service workflow summary, escalation package, high-sensitivity record note, or adjacent-specialist routing note.
- Tenant onboarding must map local terminology and systems to the pack's required artifact classes before production use.
- Keep a warm review queue for the first 30 family care resolutions per tenant to catch jurisdiction, authority, consent, cemetery, crematory, vital-record, benefits, complaint, and privacy ambiguity patterns.
- Runtime remains `specification-based` until a retained implementation is committed separately.

## Monitoring, Rollback, and Recovery

- Monitor for repeated attempts to disclose sensitive details without verified authority, close support tickets without record references, approve exceptions, promise death-certificate or remains-release completion without source records, or answer grief, estate, benefits, or licensed-owner questions.
- Trigger rollback when the same unresolved refusal or escalation pattern repeats for 3 consecutive runs or when the lane attempts to provide legal, licensed, benefits, grief-support, privacy-exception, safety-critical, or financial approval.
- Rollback by disabling automated routing for this lane, preserving all family communication, exception, and evidence artifacts, and returning new work to orchestrator-controlled manual review.
- Re-collect tenant assumptions, refresh authoritative sources, run package audit, and complete human review before re-enable.

## retained-implementation Promotion Plan

- Do not change runtime authority from `specification-based` until usage proves common enough and stable enough to justify a retained implementation.
- Require explicit governance approval, tenant-specific retrieval contracts, reviewed prompt and tool boundaries, data-minimization controls for sensitive records, and evidence of three consecutive review windows without critical overreach.
- Promote through a separate retained-implementation package commit and PR that includes runtime implementation, tests, source refresh, rollback controls, monitoring gates, and updated readiness evidence.
