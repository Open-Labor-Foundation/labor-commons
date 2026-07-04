# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit beauty-compliance boundaries, refusal triggers, tenant fact requirements, and adjacent-owner routing.
- `evaluation/functionality-map.json` covering all shared abilities, all compliance-controls-and-governance abilities, and the cross-industry artifact-awareness ability.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` proving complete scenario coverage, validated readiness gates, and human verification.

### Runtime Assumptions

- Tenant supplies product category, intended use, responsible person, facility map, claims strategy, jurisdictions, California or other state market posture, retailer overlays, and launch or review context before any compliance conclusion is generated.
- Regulatory, artwork, quality, complaint, batch-history, supplier, and recall systems are retrievable at runtime.
- Tenant provides the current systems-of-record map, escalation owners, and approval boundaries that make the lane materially different from generic compliance support.
- Tenant provides stricter local controls for retailer requirements, California Safe Cosmetics reporting, restricted-ingredient review, endorsement approvals, serious-adverse-event escalation, and recall command when those controls narrow the public baseline.

### Required Retrieval Dependencies

- Current product classification notes, intended-use language, sales channels, jurisdiction list, and responsible-person or importer ownership.
- Cosmetics Direct submissions, facility-registration renewals, product listings, exemption analyses, and submission identifiers.
- California Safe Cosmetics Reporting Portal status, reportable-ingredient reviews, fragrance and flavor disclosure evidence, and any state-market submission confirmations when California readiness is claimed.
- Label artwork, ingredient declarations, warnings, claims decks, endorsement materials, and approval histories.
- Safety-substantiation dossiers, supplier specifications, COAs, stability and microbiological records, batch histories, and change-control files.
- Complaint and adverse-event logs, AEMS or Safety Reporting Portal submission proof, distribution lists, CAPA records, and recall strategy materials.
- Adjacent-owner contact paths for regulatory affairs, legal, toxicology, quality, recall command, and executive signoff.

### Regulated-Lane Caveats

- FDA and FTC sources anchor the reviewed U.S. public baseline, and California Safe Cosmetics guidance anchors the state reporting overlay when California sale claims are in scope; tenant jurisdiction retrieval is still required before applying any other state, retailer, or international beauty requirements beyond that baseline.
- Beauty claims that imply treatment, prevention, or health outcomes may shift the work into OTC-drug or legal-review ownership; do not resolve that ambiguity inside this lane.
- FDA GMP posture continues to depend on official guidance plus recognized standards such as ISO 22716, so tenant-specific or newer jurisdiction-specific controls must be retrieved when they materially change the answer.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory registration, listing, claims, batch, complaint, or recall evidence.
- Requests for product-classification decisions, toxicology signoff, legal interpretation, regulator negotiation, recall command, or final release approval.
- Requests to mark a beauty product launch or review complete without evidence-backed closure.
- Public baseline and tenant, retailer, or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported drug-boundary answers, claims-approval overreach, adverse-event mishandling, recall-command overreach, or premature readiness conclusions are detected.
- Preserve control matrices, evidence-gap packets, escalation notes, and unresolved owner-routed state for post-rollback review.
- Re-enable only after beauty-specific boundary handling, tenant adaptation logic, and adjacent-lane routing rules are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry beauty-wellness-and-personal-care --agent beauty-compliance-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this beauty-compliance lane is common, stable, and bounded enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a separate PR that records the retained-implementation runtime independently from this spec pack.
