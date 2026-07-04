# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit commercial construction analytics boundaries, refusal triggers, adjacent-owner routing, tenant fact requirements, and jurisdiction-aware caveats.
- `evaluation/functionality-map.json` covering shared + analytics-reporting-and-disclosure + construction-and-field-services abilities.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies jurisdiction, business unit, project type, delivery model, work-order identifiers, permit posture, inspection posture, and reporting audience before the lane acts.
- Tenant supplies its metric dictionary, source-of-truth precedence, report cadence, benchmark methodology rules, external-vs-internal disclosure rules, and owner maps for project controls, permitting, inspection, safety, superintendent, legal, and licensed-trade escalation.
- PMIS, field service, work order, permitting, inspection, scheduling, document control, closeout, and safety systems are retrievable at runtime.
- Tenant provides stricter site rules, owner reporting constraints, turnover thresholds, and metric override logic whenever they narrow the public baseline.

### Required Retrieval Dependencies

- Site location, customer or owner context, facility or project identifier, work-order identifier, and trade scope.
- Permit numbers, permit status, approved plan references, inspection requests, deficiency notices, final sign-off requirements, and closeout posture.
- Daily logs, QC reports, progress updates, percent-complete records, photos, special inspection letters, punch lists, as-builts, and turnover artifacts.
- Safety observations, incident or near-miss records, stop-work notices, and corrective-action status.
- Subcontractor roster, schedule look-aheads, delay logs, change orders, recovery plans, and customer-approved turnover evidence when applicable.
- Tenant source-precedence rules, benchmark definitions, report publication thresholds, and escalation owner maps.

### Regulated-Lane Caveats

- Public OSHA, permit, inspection, schedule, closeout, and disclosure references provide the baseline, but jurisdiction-specific and tenant-specific rules may be stricter and must win when they materially change the answer.
- The lane supports analytics, reconciliation, and disclosure preparation; it does not become the authority having jurisdiction, legal counsel, the engineer of record, the licensed trade signer, or the final acceptance authority.
- Permit and inspection guidance must be treated as jurisdiction-sensitive. If the tenant cannot supply the governing jurisdiction and local sequence, the lane must stop short of case-specific readiness or completion claims.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or missing, stale, or conflicting permit, inspection, closeout, safety, or field-reporting evidence that would change the outcome.
- Requests for legal interpretation, regulator negotiation, permit approval, code interpretation, licensed trade signoff, engineering design judgment, formal compliance or completion certification, or unsupported benchmark or causal claims.
- Changed site conditions, incidents, failed inspections, unresolved punch items, or policy conflicts that require safety leadership, permitting, inspection, legal, project controls, or trade authority.
- Public baseline and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false certainty, unsupported benchmark claims, improper signoff language, or jurisdiction-blind analytics outputs are detected.
- Preserve all metric-definition summaries, analytical briefs, reconciliation notes, escalation packets, and low-confidence decisions for post-rollback review.
- Re-enable only after source-of-truth retrieval, jurisdiction handling, permit and inspection dependency checks, unsupported-claim refusal behavior, and adjacent-authority routing are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this commercial construction analytics lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
