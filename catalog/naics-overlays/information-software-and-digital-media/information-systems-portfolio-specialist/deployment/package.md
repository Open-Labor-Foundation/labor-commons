# Deployment Package

## Runtime

- Target runtime: `commons-crew` spec-pack materialization path.
- Runtime strategy: `specification-based`.
- Delivery target: `validated` catalog entry.
- retained implementation: not claimed.

## Materialization Requirements

`commons-crew` must provide task and boundary metadata before this lane can act:

- lane slug, tenant ID, requester, portfolio scope, business unit, product/program context, client context, planning horizon, and requested output shape
- explicit decision surface marking outputs as recommendations, not final approval
- approval matrix for roadmap, release, staffing, budget, product, legal, editorial, security, QA, contractual, account, and client decisions
- adjacent specialist registry and orchestrator return policy
- confidence thresholds, missing-fact policy, and source-precedence escalation rules

Tenant-supplied or runtime-retrieved assumptions:

- tenant portfolio policy, priority hierarchy, tie-break rules, service model, operating constraints, and current planning cadence
- systems-of-record connectors for project/portfolio, roadmap/backlog, CRM, ticketing, document/workpaper, content/digital asset, service catalog, CMDB, change/release, quality, risk, approval, and communication-log systems
- current portfolio demand, system inventory, system owner map, service levels, capacity forecast, release windows, quality-review capacity, client commitments, content approval state, and contractual boundaries
- confidentiality constraints, recipient/channel rules, data classification, retention requirements, engagement scope, and client or subscriber rights flags

Regulated-lane caveats:

- This lane does not provide legal, privacy, editorial, engineering, clinical, safety, attestation, security, financial, product, release, or contractual signoff.
- Rights-sensitive, jurisdiction-specific, regulated reporting, client-rights, subscriber-rights, content-rights, and professional-judgment questions require adjacent-owner escalation.
- Public sources establish a baseline; tenant policy and contract precedence must be retrieved before deterministic recommendations.

## Required Systems Of Record

- Project and portfolio management platform
- Product roadmap and backlog management system
- Ticketing and ITSM platform
- CRM and client account system
- Document management, workpaper, and engagement-record repository
- Content management, digital asset management, publishing, or delivery workflow system
- Application portfolio management, CMDB, service catalog, service map, and asset registry
- Release management, change calendar, incident, and maintenance scheduling systems
- Quality-review, approval-routing, risk, compliance, security, privacy, and audit systems
- Communication-log and stakeholder approval repositories

## Deployment Notes

- Every run must record demand IDs, source records, source freshness, tenant policy version, approval matrix version, assumptions, missing facts, confidence state, and output artifact type.
- Recommendations must include constraints, evidence links, tradeoff rationale, unresolved blockers, downstream impact, and required approvals.
- The lane must return to orchestrator when priority policy, source precedence, client commitments, confidentiality controls, or approval ownership is absent or conflicting.
- The lane must refuse requests for final approval, execution, confidential disclosure, legal interpretation, editorial judgment, contractual signoff, quality release, financial approval, security authorization, or engineering changes.

## Rollback Requirements

- Disable this slug in the orchestrator routing table and route active portfolio requests to human portfolio/delivery management fallback.
- Preserve open constraint logs, approval-needed summaries, and capacity-risk escalations for audit continuity.
- Re-enable only after the spec pack is corrected, local validation passes, and human verification is refreshed.

## Promotion And Commercialization Notes

- Runtime may remain `specification-based` until a retained implementation is explicitly committed separately.
- 
- Do not treat package existence as proof of trusted-build availability.
