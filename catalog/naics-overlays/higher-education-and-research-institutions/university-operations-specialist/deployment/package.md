# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit university operations boundaries, refusal triggers, adjacent-owner routing, lifecycle states, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + education-and-research abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, unresolved ambiguity, and scenario-family mappings.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, functionality coverage, and human verification.

### Runtime Assumptions

- Tenant supplies university policy, jurisdiction, campus, college, department, program, research, grant, accreditation, privacy, retention, and service-model context.
- Tenant supplies approval boundaries for registrar decisions, faculty review, grading, curriculum, accreditation, grant prior approvals, IRB or ethics review, privacy disclosure, legal interpretation, and financial approval.
- Tenant systems of record are retrievable at runtime: SIS, LMS, catalog or curriculum, degree-audit, scheduling, faculty information, research administration, grants, consent/privacy, accreditation or assessment, document, and workflow systems.
- Tenant supplies current source hierarchy, record locations, retrieval hooks, due-date calendars, owner maps, and exception/rework queues.

### Required Retrieval Dependencies

- Program, learner, enrollment, roster, catalog year, CIP where used, term, cohort, modality, schedule, faculty assignment, and LMS section records.
- Assessment artifacts, accreditation evidence, action items, self-study records, substantive-change context, and official reviewer correspondence where relevant.
- Grant award, prior approval, milestone, closeout, retention, and audit support records.
- Study protocol, IRB status, informed-consent materials, participant-data constraints, data-use restrictions, and research administration records.
- Completion checklists, source-system timestamps, owner approvals, document repository links, exception notes, and audit trails.

### Regulated-Lane Caveats

- FERPA and tenant privacy policy govern learner records, but tenant role authorization, consent records, directory-information policy, and disclosure context must be retrieved before live use.
- Common Rule, OHRP guidance, tenant IRB determinations, consent materials, and protocol status govern study-linked participant data; the lane may package and route evidence but cannot decide ethics outcomes.
- Department of Education accreditation guidance and 34 CFR Part 602 establish public role boundaries, while accreditor-specific criteria must be tenant supplied before accreditation evidence is treated as complete.
- Uniform Guidance and grant award terms constrain grant-supported operations; the lane may track and package evidence but cannot approve grant prior approvals or financial commitments.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, stale sources, or contradictory learner, faculty, program, schedule, grant, study, consent, accreditation, assessment, or completion evidence.
- Requests for grading, instructional judgment, official evaluation, ethics-board authority, registrar decision, accreditation finding, grant approval, privacy/legal interpretation, financial approval, policy override, licensed authority, safety-critical authority, or engineering authority.
- Attempts to close, publish, disclose, delete, reclassify, or treat records as official without consent, retention, source-of-truth, access, approval, or completion evidence.
- Public baseline and tenant policy, accreditor criteria, grant terms, IRB status, or registrar policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false completions, unsupported protected-record handling, grading or ethics overreach, missing approval bypasses, or unresolved source conflicts are detected.
- Preserve execution status updates, completion evidence records, exception queue notes, workflow summaries, source mappings, and escalation packages for review.
- Re-enable only after tenant source hierarchy, retrieval hooks, consent/privacy gates, formal approval boundaries, and completion evidence requirements are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this university operations lane is common, stable, and narrow enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, runtime safety controls for protected records and approval boundaries, and a new PR that records the retained-implementation runtime separately from this spec pack.
