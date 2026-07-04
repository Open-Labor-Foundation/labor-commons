# Deployment Package

## Package Identity

- Agent: `marketing-compliance-specialist`
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

- Task metadata: advertiser, brand, campaign, product or service category, jurisdiction, channel, platform, audience, regulated-vertical flag, launch date, requested action, control family, client-impact flag, and lifecycle state.
- Boundary metadata: legal, editorial, privacy, platform-policy, quality assurance, delivery management, account, media strategy, finance, contractual, and final client approval owners.
- Tenant facts: service model, marketing compliance policies, source hierarchy, SOW or IO hierarchy, approval matrix, confidentiality rules, client commitments, channel-specific operating rules, regulated-vertical handling, evidence checklist, review cadence, escalation thresholds, and completion gates.
- Systems of record: project management, CRM, ticketing, document management, content asset management, proofing and approval, legal review, editorial review, privacy review, platform policy review, email service provider, consent management, audience data, client communication, audit log, and retention systems.
- Retrieval hooks: client brief, campaign plan, media plan, channel plan, content assets, copy deck, claims grid, substantiation file, disclosure checklist, endorsement roster, influencer agreements, review and testimonial records, email records, unsubscribe proof, suppression-list evidence, consent signals, platform checks, approval notes, QA notes, remediation records, client communication logs, and retention locations.
- Refusal and return rules: missing tenant facts, missing records, missing authority source, unresolved source conflict, policy-versus-practice conflict, confidentiality conflict, claim or disclosure approval request, review or testimonial legal judgment, email legal interpretation, privacy interpretation, platform-policy override, editorial approval, financial approval, contractual signoff, or client-rights decision.

## Regulated-Lane Caveats

The lane handles marketing compliance workflow where legal, consumer-protection,
privacy, platform, self-regulatory, and contractual constraints can materially
affect campaign readiness. It may identify that a claim, disclosure,
endorsement, testimonial, review, native advertising label, commercial email,
audience-data use, consent signal, platform policy, confidentiality, or
regulated-vertical issue exists, but it must route interpretation and approval
to the appropriate owner.

The lane cannot approve legal compliance, editorial copy, claim
substantiation, disclosure sufficiency, endorsement treatment, review or
testimonial practice, email compliance posture, targeting or audience-data use,
privacy posture, platform-policy exceptions, makegoods, credits, budget
changes, contractual exceptions, or final client acceptance unless a future
trusted runtime retrieves explicit tenant authorization and all required
evidence.

## Deployment Steps

1. Register the spec pack in the catalog from `manifest.yaml`.
2. Verify the package with the repository audit command for the industry and agent slug.
3. Configure tenant retrieval mappings for campaign, content, claims, substantiation, disclosure, endorsement, review, email, audience-data, platform-policy, approval, confidentiality, remediation, and retention records.
4. Configure adjacent-owner routing for legal, editorial, privacy, platform policy, quality assurance, delivery management, account, media strategy, finance, contractual, and final client approvals.
5. Run the evaluation scenarios against tenant-specific examples before enabling any production routing.
6. Keep runtime action mode as specification-based or advisory until trusted-build promotion is explicitly approved.

## Rollback

Rollback is catalog-level for this specification-based package:

- Remove or disable the overlay entry from the target catalog release.
- Revert routing rules that map advertising, media buying, and agency services marketing compliance work to this lane.
- Preserve generated evaluation and readiness records for audit history.
- Re-run catalog validation after rollback to confirm no routes point to the disabled package.

If a future trusted runtime is promoted, rollback must also disable launch,
clearance, email-send, platform mutation, approval, and closeout permissions,
revoke external-system write tokens, stop scheduled jobs, preserve audit logs,
and restore the last approved specification-based routing posture.

## Trusted-Build Promotion

Promotion from `specification-based` to a retained implementation requires:

- Repeated tenant usage showing common marketing compliance demand and stable workflow patterns.
- Tested retrieval integrations for campaign, content, claims, substantiation, disclosure, endorsement, review, email, audience-data, platform-policy, approval, confidentiality, remediation, and retention records.
- Explicit mutation safeguards for any launch clearance, email send, platform action, approval-state change, remediation closure, or closeout action.
- Human-approved authority matrix for legal, editorial, privacy, platform-policy, account, finance, media strategy, quality assurance, delivery, contractual, and client-signoff boundaries.
- Expanded non-regression evaluation with tenant fixtures, source-conflict tests, confidentiality tests, and failure-mode tests.
- A separate commit that changes runtime strategy and includes deployment, rollback, monitoring, and audit controls for the built runtime.
