# Deployment Package

## Package Identity

- Agent: `media-buying-operations-specialist`
- Family: `naics-overlays/advertising-media-buying-and-agency-services`
- Delivery target: `validated`
- Runtime strategy: `specification-based`
- Release version: `v0.1.0`

## Deployment Model

This package is a specification-based validated industry overlay. It can be included in
catalogs, routing decisions, evaluation suites, tenant discovery, and
materialization planning without claiming a retained implementation.

`commons-crew` may use the pack to generate a runtime blueprint, but the runtime
must remain non-mutating until a separate trusted build commit supplies tested
retrieval wiring, approval gates, mutation permissions, audit logging, and
rollback controls.

## Materialization Requirements

`commons-crew` needs the following before safely materializing this lane:

- Task metadata: campaign identifier, advertiser, brand, agency or client owner, channel, platform, publisher, buy type, placement, line item, package, deal ID or order ID, lifecycle state, requested action, deadline, and client-impact flag.
- Boundary metadata: media strategy, rate approval, vendor commitment, legal, editorial, privacy, finance, account, quality, delivery, ad operations, contractual, and final client approval owners.
- Tenant facts: service model, approval matrix, confidentiality rules, engagement scope, IO hierarchy, authorized budget reference, channel-specific operating rules, regulated-vertical handling, evidence checklist, escalation thresholds, invoice-support rules, and completion gates.
- Systems of record: media planning or buying platform, project management, CRM, ticketing, document management, creative asset management, ad server, DSP or publisher portal, verification system, analytics system, approval system, finance or billing-support system, client communication system, and retention logs.
- Retrieval hooks: approved media plan, buy authorization, RFP, avails, rate card, IO, placement grid, vendor confirmation, platform order, deal ID, material deadlines, trafficking handoff checklist, creative readiness record, approval records, launch proof, screenshots, delivery logs, discrepancy reports, makegood escalation records, invoice-support packet, and client delivery record.
- Refusal and return rules: missing tenant facts, missing evidence, unresolved source conflict, confidentiality conflict, regulated-content question, legal or privacy interpretation, editorial approval, media strategy decision, rate approval, financial approval, vendor commitment, makegood, billing adjustment, contractual signoff, or client-rights decision.

## Regulated-Lane Caveats

The lane handles media buying operations where legal, privacy, platform,
financial, vendor, and contractual constraints can materially affect workflow.
It may identify that a claim, disclosure, endorsement, targeting,
audience-data, sensitive-data, consumer-choice, platform-policy,
regulated-vertical, rate, makegood, credit, or billing issue exists, but it
must route interpretation and approval to the appropriate owner.

The lane cannot approve legal claims, editorial copy, targeting strategy,
consumer-data use, privacy posture, media strategy, vendor commitments, rates,
makegoods, credits, billing adjustments, budget changes, contractual
exceptions, or final client acceptance unless a future trusted runtime
retrieves explicit tenant authorization and all required evidence.

## Deployment Steps

1. Register the spec pack in the catalog from `manifest.yaml`.
2. Verify the package with the repository audit command for the industry and agent slug.
3. Configure tenant retrieval mappings for media plan, buy authorization, RFP, avails, IO, vendor, platform, trafficking handoff, launch, delivery, discrepancy, invoice-support, approval, confidentiality, and retention records.
4. Configure adjacent-owner routing for media strategy, rate approval, vendor commitment, legal, editorial, privacy, quality, delivery, ad operations, account, finance, and contractual approvals.
5. Run the evaluation scenarios against tenant-specific examples before enabling any production routing.
6. Keep runtime action mode as specification-based or advisory until trusted-build promotion is explicitly approved.

## Rollback

Rollback is catalog-level for this specification-based package:

- Remove or disable the overlay entry from the target catalog release.
- Revert routing rules that map advertising, media buying, and agency services media buying operations work to this lane.
- Preserve generated evaluation and readiness records for audit history.
- Re-run catalog validation after rollback to confirm no routes point to the disabled package.

If a future trusted runtime is promoted, rollback must also disable live
buying-platform, ad server, publisher portal, finance, and campaign mutation
permissions, revoke write tokens, stop scheduled jobs, preserve audit logs, and
restore the last approved specification-based routing posture.

## Trusted-Build Promotion

Promotion from `specification-based` to a retained implementation requires:

- Repeated tenant usage showing common media buying operations demand and stable workflow patterns.
- Tested retrieval integrations for media plan, buy authorization, IO, vendor, platform, ad server, trafficking handoff, verification, delivery, approval, invoice-support, and retention records.
- Explicit mutation safeguards for any buy booking, vendor confirmation, trafficking handoff, launch, pause, reconciliation, invoice-support, or closeout action.
- Human-approved authority matrix for media strategy, rate approval, vendor commitment, legal, editorial, privacy, account, finance, quality, delivery, ad operations, and contractual boundaries.
- Expanded non-regression evaluation with tenant fixtures and failure-mode tests.
- A separate commit that changes runtime strategy and includes deployment, rollback, monitoring, and audit controls for the built runtime.
