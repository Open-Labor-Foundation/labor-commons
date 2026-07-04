# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separately committed built package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit constituent-services boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus government-and-public-sector abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies jurisdiction, agency, program, service model, casework protocol, public-records procedure, privacy-release rules, appeal rules, procurement communication limits, and authority matrices.
- Case management, records management, public-records, privacy, procurement, permit, benefits, correspondence, complaint, enforcement referral, and audit systems are retrievable at runtime.
- Tenant provides official authority boundaries for casework, program adjudication, legal review, public records, procurement, audit, privacy, enforcement, compensation, and escalation.
- Tenant identifies service populations, language-access or equity procedures, records retention hooks, and due-process constraints whenever they materially affect communication or escalation.

### Required Retrieval Dependencies

- Constituent or stakeholder identity context, jurisdiction, program, agency, case number, application number, permit number, FOIA tracking number, solicitation number, or correspondence reference.
- Privacy release, consent, representative authorization, identity verification, and records-access prerequisites.
- Applications, case files, eligibility records, benefit or permit notices, adverse-action notices, appeal windows, complaint history, and correspondence logs.
- Public-records requests, Privacy Act requests, transparency logs, records-location notes, and disclosure routing artifacts.
- Procurement documents, contracting officer or COR references, vendor communications, solicitation artifacts, and protest-sensitive records where relevant.
- Audit trail artifacts including timestamps, filing acknowledgments, source-system references, action logs, unresolved items, and next owner.

### Refusal and Return Conditions

- Required tenant facts, jurisdiction, privacy permissions, authority sources, official records, or systems-of-record retrieval hooks are missing or contradictory.
- Requests require legal interpretation, program adjudication, eligibility decisioning, appeal handling, enforcement action, public-records release, Privacy Act disclosure, procurement commitment, audit signoff, safety-critical action, or financial approval.
- Conflicting statutes, agency manuals, tenant policies, notices, public-records rules, procurement rules, or system records materially change the answer.
- A proposed communication would pressure an agency, imply preferential treatment, bypass due process, disclose protected records, bind the government, or promise an unsupported outcome.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported eligibility promises, records disclosures, procurement commitments, legal interpretations, enforcement actions, missed appeal risks, or missing audit trails are detected.
- Preserve all resolution notes, communication summaries, escalation packets, evidence maps, and retrieval logs for post-rollback review.
- Re-enable only after source-of-truth retrieval, privacy-release validation, public-records routing, due-process escalation, procurement boundary handling, and audit-trail capture are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this constituent-services lane is common, stable, and bounded enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, tenant retrieval contract tests, escalation-quality review, and a new PR that records the retained-implementation runtime separately from this spec pack.
