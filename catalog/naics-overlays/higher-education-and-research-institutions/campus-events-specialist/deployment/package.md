# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit
  governance signoff, repeated runtime demand, stable validation history, and a
  separate retained-implementation package commit.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit higher-education campus event execution
  boundaries, refusal triggers, adjacent-owner routing, and tenant fact
  requirements.
- `evaluation/functionality-map.json` covering shared plus
  `execution-processing-and-fulfillment` plus `education-and-research`
  abilities.
- `evaluation/research-summary.json` with source classes, workflow stages,
  artifacts, systems of record, decision boundaries, scenario-family coverage,
  and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete
  scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies event registration, venue reservation, facility use,
  recognized organization, sponsor, accessibility, security, minors, alcohol,
  food, external speaker, expressive activity, ticketing, fundraising,
  insurance, waiver, incident, record retention, privacy, and closeout policies.
- Student information, LMS, research administration, IRB, scheduling, document,
  event management, facilities, campus safety, accessibility services,
  registrar, grant, and sponsored-program systems are retrievable at runtime.
- Tenant provides authority matrices for campus events, student affairs,
  registrar, faculty review, accreditation, grants, research compliance,
  disability services, campus safety, facilities, risk, legal, and finance.
- Jurisdiction, campus, facility, department, grant, IRB, public assembly,
  insurance, minors, alcohol, food, and safety rules are available whenever
  they materially change the answer.

### Required Retrieval Dependencies

- Event registration identifier, event title, sponsor, student signatory,
  registered student organization or department, audience, event purpose, and
  expected attendance.
- Venue reservation, venue hold, facility use permit, scheduling request,
  room-use confirmation, facilities work order, AV, catering, parking, ticketing,
  insurance, waiver, and permit records.
- Event security assessment, campus safety notes, incident records, emergency
  routing notes, and Clery-sensitive escalation artifacts.
- Accessibility checklist, accommodation request, disability-services owner
  note, vendor confirmation, accessible seating or captioning plan, and venue
  configuration records.
- Participant roster, SIS references, LMS activity references, attendance
  capture, communication logs, minimum-necessary disclosure notes, and closeout
  files.
- IRB approval, research administration file, protocol identifier, consent
  materials, recruitment materials, grant records, program files, assessment
  evidence, and accreditation owner notes.

### Regulated-lane Caveats

- FERPA constrains event roster, attendance, enrollment, LMS activity,
  assessment, and student communication handling.
- OHRP Common Rule requirements constrain research recruitment, human-subject
  participant events, informed consent, IRB approval, and study workflow
  boundaries.
- Clery Act consumer-information and campus safety expectations constrain
  incident preservation, campus safety routing, and refusal to make unsupported
  reportability or safety findings.
- ADA Title II constrains event accessibility, reasonable modification, and
  effective communication handling for public university events; the lane may
  route evidence but does not decide accommodations.
- Accreditation criteria constrain cocurricular and learning-evidence packaging;
  the lane may preserve event evidence but does not make formal assessment or
  accreditation findings.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or
  contradictory event registration, schedule, participant, approval,
  accessibility, safety, consent, delivery, or completion evidence.
- Requests for grading, academic credit, learning-outcome signoff, official
  enrollment certification, research ethics approval, IRB decisioning,
  accreditation finding, disability accommodation decision, campus safety
  determination, legal interpretation, financial approval, or policy override.
- Student, faculty, study, participant, accommodation, assessment, or
  safety-sensitive record disclosure without role authority, tenant policy, and
  documented need.
- Public baseline and tenant, jurisdiction, campus, department, facility,
  grant, IRB, or event policy conflict without explicit precedence resolution.

## Deployment Notes

- Route this lane only when the request primarily concerns campus event
  execution, lifecycle progression, schedule, participant, venue, record,
  accessibility, safety, approval, delivery, exception, or completion evidence.
- Keep the lane isolated from direct academic judgment, grading, official record
  certification, research ethics determinations, accommodation decisions,
  safety findings, legal interpretation, financial approvals, policy overrides,
  and event contract commitments.
- Log execution status updates, exception summaries, workflow summaries,
  escalation notes, refusal reasons, completion records, and authoritative
  record references for each output.
- Alert on repeated unsupported state advancement, event completion without
  evidence, protected-record disclosure, grading or research ethics drift,
  safety or accessibility findings, or tenant policy conflicts resolved without
  human authority.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported event approvals,
  learner-record disclosures, consent or IRB boundary violations, accessibility
  or safety authority drift, or completion-without-evidence failures are
  detected.
- Preserve all status updates, exception summaries, escalation notes, evidence
  maps, completion records, and source references for post-rollback review.
- Re-enable only after retrieval hooks, tenant event policy, record-handling
  controls, accessibility and safety routing, research compliance boundaries,
  and completion evidence rules are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry higher-education-and-research-institutions --agent campus-events-specialist`
  before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is
  explicitly approved and committed.
- Promote only after repeated production usage shows this campus event
  execution lane is common, stable, and valuable enough to justify a maintained
  runtime build.
- Promotion requires formal validation signoff, updated readiness evidence,
  operational monitoring for boundary drift, tenant retrieval controls, and a
  new PR that records the retained-implementation runtime separately from this spec pack.
