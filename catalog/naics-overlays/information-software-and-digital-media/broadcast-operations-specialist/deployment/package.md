# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Execution target: `commons-crew`
- retained implementation: not included
- Runtime promotion condition: promote to retained-implementation only after repeated tenant demand, stable validation history, explicit governance signoff, and a separate trusted-build PR.

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit broadcast operations boundaries, authority sources, refusal triggers, adjacent-owner routing, tenant fact requirements, runtime strategy, and validated target.
- `evaluation/functionality-map.json` covering shared abilities, execution-processing-and-fulfillment abilities, and professional-and-information-services abilities.
- `evaluation/research-summary.json` with research contract identity, required source classes, workflow stages, artifacts, systems of record, decision boundaries, source refresh policy, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing full scenario coverage, functionality coverage, human verification, deployment readiness.

### Runtime Assumptions

- Tenant supplies station, channel, stream, network, program, jurisdiction, facility, business unit, and service-model context.
- Tenant supplies authority matrices for legal, editorial, FCC compliance, sponsorship, political file, rights and clearances, talent contracts, venue approvals, engineering, QC waiver, delivery management, account, and financial approval owners.
- Tenant systems are retrievable for traffic logs, program schedules, rundowns, MAM/DAM assets, automation playlists, as-run records, QC/loudness/caption evidence, delivery receipts, EAS records, OPIF/public-file records, rights windows, approval notes, CRM cases, tickets, documents, and communications.
- Tenant supplies lifecycle-state definitions and closure criteria for accepted, ready, in-progress, blocked, rework, escalated, completed, returned, and refused broadcast operations work.
- Tenant supplies approved communication channels and recipient lists for embargoed content, screeners, talent information, client commitments, and regulated records.

### Required Retrieval Dependencies

- Program log, traffic log, continuity instructions, break placement, schedule slot, media ID, house number, ISCI or Ad-ID, kill date, sponsor flag, and makegood status.
- MAM/DAM asset record, air-ready master profile, package manifest, checksum, captions, subtitles, loudness/QC results, approval state, and delivery acknowledgement.
- Automation playlist, playout state, master-control note, as-run log, station log, EAS record, ETRS status, OPIF upload reference, political file reference, and sponsorship support records where applicable.
- Rights window, territory, platform, talent or venue clearance, client commitment, embargo, contractual limit, and approval owner mapping.
- Exception ticket, communication log, escalation owner, schedule or audience impact, rework requirement, and final closure evidence.

### Regulated-Lane Caveats

- FCC, EAS, OPIF, sponsorship, political file, copyright, and jurisdiction-specific broadcast requirements are legal or compliance-sensitive. The lane may package evidence and route work, but it must not interpret or approve compliance sufficiency.
- Broadcast quality and airworthiness can depend on ATSC, tenant, broadcaster, platform, engineering, caption, and QC requirements. The lane may track results and exceptions, but it must not waive or certify conformance without explicit authority.
- Content security and confidentiality can depend on TPN-style controls, tenant policy, embargoes, and client commitments. The lane must block unapproved disclosure and route approval conflicts.
- Runtime remains `specification-based`; this package does not claim a trusted built implementation.

### Refusal and Return Conditions

- Required tenant facts, system retrievals, source context, or authoritative records are missing and would change the outcome.
- Traffic, MAM, automation, QC, EAS, OPIF, rights, approval, delivery, as-run, ticket, or communication records are stale, contradictory, unavailable, or outside authorized access.
- The request requires legal, editorial, FCC compliance, rights, talent-contract, venue-contract, sponsorship, political file, engineering, QC waiver, financial, safety-critical, contractual, or executive approval authority.
- Public-source baseline and tenant policy conflict on a material action and no approved owner has resolved precedence.
- Completion is requested without as-run, delivery, automation, QC, approval, regulated-record, or communication evidence supporting closure.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated responses close work without as-run, delivery, QC, approval, EAS/public-file, or communication evidence.
- Pause tenant routing if legal, editorial, FCC compliance, rights, sponsorship, political, engineering, QC waiver, confidentiality, or contractual authority is being implied by operations language.
- Preserve execution summaries, exception notes, completion records, escalation packets, source assumptions, and tenant policy references for review.
- Re-enable only after source-of-truth retrieval, lifecycle mapping, owner routing, confidentiality controls, and public-source precedence are confirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a retained implementation is explicitly approved and committed separately.
- Promote only if usage shows broadcast operations materialization is common enough to justify maintained runtime implementation.
- Promotion requires updated scenarios, regression results, source refresh, human verification, tenant retrieval adapters, observability for lifecycle transitions, and a new PR that records the retained-implementation runtime separately from this spec pack.
