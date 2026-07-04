# Deployment Package

## Package Identity

- Agent: `campaign-trafficking-specialist`
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

- Task metadata: campaign identifier, advertiser, brand, agency or client owner, channel, platform, publisher, ad format, placement, package, line item, lifecycle state, requested action, deadline, and client-impact flag.
- Boundary metadata: legal, editorial, creative approval, privacy, media strategy, finance, account, quality, delivery, contractual, and final client approval owners.
- Tenant facts: service model, approval matrix, confidentiality rules, engagement scope, IO hierarchy, channel-specific operating rules, regulated-vertical handling, QA standards, evidence checklist, escalation thresholds, completion gates, and rollback rules.
- Systems of record: project management, CRM, ticketing, document management, creative asset management, creative ID registry or validation reference where applicable, ad server, DSP or publisher portal, verification system, analytics system, approval system, client communication system, and retention logs.
- Retrieval hooks: IO, campaign brief, media plan, placement grid, trafficking sheet, creative specs, approved creative, creative IDs, ad tags, VAST responses, pixels, UTMs, landing URLs, QA records, launch proof, screenshots, delivery logs, discrepancy reports, approval records, and client delivery record.
- Refusal and return rules: missing tenant facts, missing evidence, unresolved source conflict, confidentiality conflict, regulated-content question, legal or privacy interpretation, editorial or creative approval, media strategy decision, financial approval, makegood, contractual signoff, or client-rights decision.

## Regulated-Lane Caveats

The lane handles advertising execution where legal, privacy, platform, and
contractual constraints can materially affect workflow. It may identify that a
claim, disclosure, endorsement, targeting, audience-data, sensitive-data,
consumer-choice, platform-policy, creative-approval, or regulated-vertical
issue exists, but it must route interpretation and approval to the appropriate
owner.

The lane cannot approve legal claims, editorial copy, final creative, targeting
strategy, consumer-data use, privacy posture, makegoods, credits, budget
changes, contractual exceptions, or final client acceptance unless a future
trusted runtime retrieves explicit tenant authorization and all required
evidence.

## Deployment Steps

1. Register the spec pack in the catalog from `manifest.yaml`.
2. Verify the package with the repository audit command for the industry and agent slug.
3. Configure tenant retrieval mappings for campaign, placement, creative, creative ID, trafficking, ad server, tag, pixel, QA, launch, delivery, approval, confidentiality, and retention records.
4. Configure adjacent-owner routing for legal, editorial, creative approval, privacy, quality, delivery, account, finance, media strategy, and contractual approvals.
5. Run the evaluation scenarios against tenant-specific examples before enabling any production routing.
6. Keep runtime action mode as specification-based or advisory until trusted-build promotion is explicitly approved.

## Rollback

Rollback is catalog-level for this specification-based package:

- Remove or disable the overlay entry from the target catalog release.
- Revert routing rules that map advertising, media buying, and agency services campaign trafficking work to this lane.
- Preserve generated evaluation and readiness records for audit history.
- Re-run catalog validation after rollback to confirm no routes point to the disabled package.

If a future trusted runtime is promoted, rollback must also disable live
campaign mutation permissions, revoke ad server and publisher portal write
tokens, stop scheduled jobs, preserve audit logs, and restore the last approved
specification-based routing posture.

## Trusted-Build Promotion

Promotion from `specification-based` to a retained implementation requires:

- Repeated tenant usage showing common campaign trafficking demand and stable workflow patterns.
- Tested retrieval integrations for campaign, placement, creative, creative ID, ad server, trafficking, tag, pixel, QA, verification, delivery, approval, and retention records.
- Explicit mutation safeguards for any setup, traffic, launch, pause, update, or closeout action.
- Human-approved authority matrix for legal, editorial, creative approval, privacy, account, finance, media strategy, quality, delivery, and contractual boundaries.
- Expanded non-regression evaluation with tenant fixtures and failure-mode tests.
- A separate commit that changes runtime strategy and includes deployment, rollback, monitoring, and audit controls for the built runtime.
