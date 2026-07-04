# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separate committed build package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit A and E proposal-support boundaries, refusal triggers, required records, systems-of-record hooks, adjacent-lane routing, and procurement-model caveats.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution abilities.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, scenario-family coverage, and non-blocking ambiguities.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies the procurement model, jurisdiction, client or agency context, solicitation or owner instruction set, addendum state, due dates, and submission channel before the lane acts.
- Tenant provides owner maps for proposal coordination, capture leadership, pricing approval, contracts review, licensed architect review, licensed engineer review, and document control.
- Proposal CRM, qualifications library, credential repository, subconsultant tracker, fee workbook, document-control workspace, and submission portal status are retrievable at runtime.
- Tenant provides approval thresholds, credential-representation rules, private-owner adaptations, and submission-control rules whenever they narrow the public baseline.

### Required Retrieval Dependencies

- Opportunity id, client or agency, procurement model, solicitation or owner instruction version, and current addendum log.
- SF 330 or owner-equivalent qualification form, key personnel resumes, branch-office data, discipline-lead assignments, and credential evidence.
- Project sheets, past-performance records, shortlist or interview instructions, and document-control checklist.
- Subconsultant commitment letters, teaming assumptions, role matrix, and required business classifications where applicable.
- Fee estimate workbook location, assumptions, exclusions, pricing approval thresholds, and next approver.
- Portal upload status, filename and page-limit instructions, communication history, and escalation state.

### Regulated-Lane Caveats

- Public A and E procurement and licensure sources provide the baseline, but private-owner rules, state board requirements, and tenant approval policy may be stricter and must win when they materially change the answer.
- The lane supports readiness packaging and bounded communication; it does not become pricing approval, contract counsel, procurement counsel, the architect of record, or the engineer of record.
- Jurisdiction and procurement model are outcome-changing facts. If either is missing, the lane must stop short of credential sufficiency, fee-timing, or submission-eligibility conclusions.

### Refusal and Return Conditions

- Missing tenant facts, missing or stale solicitation files, absent addenda, unavailable credential records, unresolved subconsultant commitments, or contradictory portal status that would change the outcome.
- Requests for legal interpretation, procurement protest advice, contract negotiation, final fee approval, discount approval, or licensed technical signoff.
- Requests to present unverified credentials, incomplete subconsultant teams, or unsupported technical narratives as proposal-ready.
- Public baseline and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false certainty, unsupported credential claims, pricing overreach, missed addenda, or generic non-A and E responses are detected.
- Preserve readiness summaries, escalation packets, communication notes, credential gap logs, and submission-failure evidence for post-rollback review.
- Re-enable only after source retrieval, proposal artifact checks, procurement-model handling, credential-boundary routing, and adjacent-lane handoffs are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this A and E proposal-support lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, runtime-specific materialization metadata, and a new PR that records the retained-implementation runtime separately from this spec pack.
