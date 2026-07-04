# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separate committed build package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit franchise and multi-unit support boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus cross-industry abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, functional coverage, and human verification.

### Runtime Assumptions

- Tenant supplies franchise agreements, FDD references, operations manual sections, brand-standard bulletins, support service model, priority rules, exception thresholds, and approval owner map.
- Franchise administration, CRM, ticketing, LMS, audit, unit master, knowledge base, field-support planning, and communication systems are retrievable at runtime.
- Tenant provides authority matrices for legal, compliance, finance, training, brand standards, field operations, safety, real estate, and executive escalation.
- Jurisdiction, ownership group, area developer, territory, program, product, unit, and facility context are available whenever they materially change the workflow.

### Required Retrieval Dependencies

- Franchisee, operator, area developer, region, territory, unit, and ownership group identifiers.
- Franchise agreement, FDD, operations manual, brand-standard, playbook, and policy-bulletin references.
- Support tickets, CRM case history, field business consultant notes, audit findings, LMS records, opening calendars, and corrective-action notes.
- Field-support capacity, consultant coverage, approved service levels, priority rules, escalation thresholds, and repeat-failure history.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory agreement, manual, ticket, training, audit, unit, or capacity evidence.
- Requests for FDD drafting, franchise agreement interpretation, territory-rights decisions, policy waivers, royalty or fee concessions, pricing exceptions, financial approvals, safety signoff, legal advice, or executive approval.
- Repeat failure, compliance, safety, or brand-standard conditions that change whether direct support action is safe.
- Public baseline and tenant agreement, operations manual, jurisdiction, program, or policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated legal overreach, unsupported policy waivers, missed safety escalations, incorrect capacity approval claims, or generic support behavior is detected.
- Preserve all support dispositions, allocation recommendations, communication summaries, escalation packets, evidence maps, and source-conflict notes for post-rollback review.
- Re-enable only after source-of-truth retrieval, adjacent-lane routing, capacity-risk escalation, repeat-failure handling, and authority-boundary behavior are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this support lane is common, stable, and bounded enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, runtime test cases, tenant retrieval contract verification, and a new PR that records the retained-implementation runtime separately from this spec pack.
