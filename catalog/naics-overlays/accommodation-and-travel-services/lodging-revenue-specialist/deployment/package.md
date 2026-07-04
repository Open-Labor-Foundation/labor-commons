# Lodging Revenue Specialist Deployment Notes

## Package Identity

- Agent slug: `lodging-revenue-specialist`
- Queue slug: `industry-overlays::accommodation-and-travel-services::lodging-revenue-specialist`
- Package path: `catalog/naics-overlays/accommodation-and-travel-services/lodging-revenue-specialist/`
- Target delivery level: `validated`
- Runtime strategy: `specification-based`
- retained implementation: not included

## Materialization Requirements

`commons-crew` needs these runtime inputs before safely materializing this lane:

- Task metadata: request type, property, jurisdiction, business unit, guest or account type, stay dates, booking channel, reservation identifier, folio identifier, and desired output shape.
- Boundary metadata: authority matrix for refund, rate, write-off, tax, chargeback, manager adjustment, safety, fraud, and accounting decisions.
- Retrieval dependencies: PMS folio records, reservation changes, rate plans, package components, payment gateway records, tax engine support, night-audit queues, accounting interface status, approval logs, guest-service recovery notes, fraud or safety flags, and tenant policy excerpts.
- Public baseline: FTC lodging fee guidance, DOJ lodging reservation constraints, CFPB billing-error guidance, IRS and state tax recordkeeping guidance, HFTP lodging accounting terminology, PCI SSC card-data controls, and FTC Red Flags fraud guidance.
- Refusal controls: no invented adjustments, no pricing or refund overrides, no accounting or tax certification, no fraud or safety adjudication, and no full cardholder data handling in unsupported channels.

## Deployment Controls

- Start in specification-based materialization mode with logging of selected scenario family, source set, tenant facts, retrieval status, output shape, refusal triggers, and adjacent owner routing.
- Require explicit tenant configuration for PMS field names, rate-code hierarchy, package component mapping, tax engine references, payment gateway reconciliation fields, and approval thresholds.
- Block direct financial actions unless a separately approved implementation layer supplies capability checks, write permissions, audit logging, and human approval controls.
- Treat output artifacts as recommendations, summaries, or escalation packets unless tenant authority explicitly grants a downstream operator the ability to act.

## Rollback

- Roll back by removing this package from the active catalog index or disabling the `lodging-revenue-specialist` entitlement for affected tenants.
- Revert to adjacent guest services, front office, pricing/revenue, payment disputes, tax, accounting, or fraud workflows for active cases.
- Preserve generated reconciliation summaries, exception notes, source references, and refusal events for audit review.
- If an authority source decays or a tenant-policy conflict is discovered, move the package to blocked specification-based use until source refresh or tenant configuration is reviewed.

## Monitoring

- Track unsupported adjustment refusals, low-confidence blocks, missing PMS or payment records, source conflicts, fraud or safety escalations, tax exceptions, and night-audit close blockers.
- Review output samples for lodging terminology accuracy, evidence traceability, and correct adjacent-lane routing.
- Refresh public sources according to manifest intervals and immediately after material statutory, regulatory, processor, or payment-security changes.

## Promotion To retained implementation

Promote only after usage proves common enough and a separate build package supplies tested integrations, write-safety controls, source retrieval contracts, tenant configuration validation, audit logging, and human approval workflow. Promotion must be committed separately and should not reuse this specification-based package as evidence of built runtime safety.
