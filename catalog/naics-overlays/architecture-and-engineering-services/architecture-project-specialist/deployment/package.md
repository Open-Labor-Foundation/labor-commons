# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit architecture-project boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus execution-processing-and-fulfillment plus cross-industry abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies authority matrices for architect-of-record, licensed engineering, code and life-safety review, permit authority, estimating approval, construction administration, and commissioning or turnover acceptance.
- Project systems for PMIS, document control, BIM or CAD, estimating, permit tracking, submittal and RFI logging, and closeout are retrievable.
- Tenant provides the governing contract form, phase-gate policy, jurisdiction matrix, seal and signature policy, and closeout checklist.
- Tenant-specific lifecycle states, naming conventions, drawing issue codes, and evidence references are available at runtime.

### Required Retrieval Dependencies

- Project identifier, site or facility identifier, jurisdiction, delivery method, current lifecycle state, and responsible design authority.
- Current site-basis documents, owner program, design submission, estimate package, approval log, and phase-gate checklist.
- Permit package, AHJ comments, submittal and RFI logs, meeting minutes, field reports, and issue-routing history when construction administration is involved.
- Punch items, record drawings, O&M manuals, training evidence, commissioning status, warranties, and turnover-data package when completion is requested.

### Regulated-Lane Caveats

- The lane is constrained by jurisdiction-specific permit rules, contract-form boundaries, and licensed design authority; it must not improvise around those dependencies.
- Field questions that materially change code compliance, structural adequacy, life safety, or sealed-design intent require a different owner.
- Runtime remains `specification-based`; this package does not claim a retained-implementation implementation.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory phase, estimate, permit, or closeout status.
- Requests for stamping, sealing, permit approval, architect-of-record judgment, engineer-of-record judgment, code interpretation, or financial approval.
- Unresolved site-basis, permit, consultant, or closeout conflicts that materially change the next action.
- Public guidance and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated contradictory phase-gate, permit-status, or closeout responses are detected.
- Preserve all execution summaries, exception notes, completion records, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, authority routing, and policy precedence are confirmed for site basis, design submissions, estimates, permit handling, and turnover workflows.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this architecture-project lane is common enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.

