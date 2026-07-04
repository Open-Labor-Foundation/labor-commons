# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit retail patient-services boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus cross-industry abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies authority matrices for licensed-medical consultation, pricing exceptions, promotion stacking, complaint handling, recall handling, security-sensitive exceptions, and final approval paths.
- Patient and caregiver registry, ETS, POS, seed-to-sale or inventory, MMAP support workflow, CRM, and complaint or recall systems are retrievable.
- Tenant provides licensed medical, compliance, quality and recall, pricing approval, inventory, and security escalation owners.
- Tenant-specific returns rules, promotion terms, appointment requirements, communication templates, and facility-specific operating policies are available at runtime.

### Required Retrieval Dependencies

- Jurisdiction, program model, facility, and channel identifiers.
- Patient, caregiver, card, certification, order, product, and transaction references.
- MMAP, receipt, price, inventory, lot, label, safety-insert, complaint, and recall artifacts.
- Facility-specific returns policy, promotion matrix, appointment model, and adjacent-owner contacts where the request touches patient-impact outcomes.

### Regulated-Lane Caveats

- The lane is regulated by jurisdiction-specific medical-cannabis dispensary rules and must not improvise around patient, caregiver, certification, quantity, pricing, complaint, or recall requirements.
- Patient-facing communication must remain bounded when adverse-event, recall, quality, or licensed-clinical handling is present.
- Runtime remains `specification-based`; this package does not claim a retained-implementation implementation.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory patient, certification, pricing, inventory, or recall status.
- Requests for clinical advice, certification changes, pricing waivers, home delivery, cash refunds, recall release decisions, or unsupported promotional overrides.
- Unresolved complaint, adverse-event, recall, or safety-sensitive indicators that materially change the next action.
- Public guidance and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated contradictory certification, MMAP, pricing, complaint, or recall responses are detected.
- Preserve all request summaries, communication logs, evidence maps, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, owner routing, and policy precedence are confirmed for patient, pricing, and recall workflows.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this retail patient-services lane is common enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
