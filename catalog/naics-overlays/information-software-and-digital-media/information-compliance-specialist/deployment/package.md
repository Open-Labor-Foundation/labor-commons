# Deployment Package

## Package Identity

- Agent: `information-compliance-specialist`
- Family: `naics-overlays/information-software-and-digital-media`
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

- Task metadata: jurisdiction, business unit, product or service, tenant, client, content collection, platform, data category, audience or child-directed flag, control family, incident or release identifier, requested action, client-impact flag, and lifecycle state.
- Boundary metadata: legal, editorial, privacy, security, engineering, accessibility, copyright, quality assurance, delivery management, account, finance, contract, attestation, regulator-facing, and final client approval owners.
- Tenant facts: service model, information compliance policies, source hierarchy, control framework scope, approval matrix, confidentiality rules, client commitments, SOW or contract hierarchy, data classification, retention rules, quality standards, evidence checklist, review cadence, escalation thresholds, and completion gates.
- Systems of record: project management, CRM, ticketing, document management, content management, digital asset management, delivery and client portal, GRC, control evidence, security monitoring, vulnerability, incident, audit log, identity, access review, source control, CI/CD, change management, release management, privacy, consent, preference, rights management, accessibility testing, QA, communication, and retention systems.
- Retrieval hooks: client files, engagement records, contracts or SOWs, product requirements, data-flow maps, system inventories, release tickets, change records, access-review exports, audit-log samples, secure development evidence, vulnerability remediation proof, incident records, privacy review records, consent or preference records, retention records, content assets, rights metadata, takedown records, accessibility evidence, QA notes, approval notes, remediation records, client communication logs, and retention locations.
- Refusal and return rules: missing tenant facts, missing records, missing authority source, unresolved source conflict, policy-versus-practice conflict, confidentiality conflict, legal interpretation request, editorial approval request, privacy-law interpretation, security risk acceptance, engineering approval, accessibility legal judgment, copyright legal judgment, attestation or certification conclusion, financial approval, contractual signoff, regulator-facing action, or client-rights decision.

## Regulated-Lane Caveats

The lane handles information compliance workflow where privacy, security,
software assurance, content rights, accessibility, child-directed service,
records, client-delivery, control-framework, attestation, and contractual
constraints can materially affect readiness. It may identify that a product,
content, client, release, incident, personal-information, accessibility,
copyright, assurance, or control issue exists, but it must route
interpretation and approval to the appropriate owner.

The lane cannot approve legal compliance, privacy posture, editorial content,
security risk, engineering changes, accessibility legal sufficiency, copyright
position, takedown strategy, control certification, SOC 2 or ISO attestation,
customer assurance signoff, data-use posture, content clearance, contractual
exceptions, financial approvals, or final client acceptance unless a future
trusted runtime retrieves explicit tenant authorization and all required
evidence.

## Deployment Steps

1. Register the spec pack in the catalog from `manifest.yaml`.
2. Verify the package with the repository audit command for the industry and agent slug.
3. Configure tenant retrieval mappings for product, service, client, content, privacy, security, release, change, incident, vulnerability, accessibility, rights, approval, confidentiality, remediation, and retention records.
4. Configure adjacent-owner routing for legal, editorial, privacy, security, engineering, accessibility, copyright, quality assurance, delivery management, account, finance, contract, attestation, regulator-facing, executive, and final client approvals.
5. Run the evaluation scenarios against tenant-specific examples before enabling any production routing.
6. Keep runtime action mode as specification-based or advisory until trusted-build promotion is explicitly approved.

## Rollback

Rollback is catalog-level for this specification-based package:

- Remove or disable the overlay entry from the target catalog release.
- Revert routing rules that map information, software, and digital media information compliance work to this lane.
- Preserve generated evaluation and readiness records for audit history.
- Re-run catalog validation after rollback to confirm no routes point to the disabled package.

If a future trusted runtime is promoted, rollback must also disable release
approval, incident closure, control closeout, content clearance, external
delivery, approval-state changes, remediation closure, and any external-system
write permissions; revoke write tokens; stop scheduled jobs; preserve audit
logs; and restore the last approved specification-based routing posture.

## Trusted-Build Promotion

Promotion from `specification-based` to a retained implementation requires:

- Repeated tenant usage showing common information compliance demand and stable workflow patterns.
- Tested retrieval integrations for product, client, content, privacy, security, release, change, incident, vulnerability, accessibility, rights, approval, confidentiality, remediation, and retention records.
- Explicit mutation safeguards for any release gate, incident closure, control closeout, content delivery, approval-state change, remediation closure, client communication, or retention action.
- Human-approved authority matrix for legal, editorial, privacy, security, engineering, accessibility, copyright, account, finance, quality assurance, delivery, contract, attestation, regulator-facing, and client-signoff boundaries.
- Expanded non-regression evaluation with tenant fixtures, source-conflict tests, confidentiality tests, content-rights tests, child-audience tests, accessibility tests, attestation-boundary tests, and failure-mode tests.
- A separate commit that changes runtime strategy and includes deployment, rollback, monitoring, and audit controls for the built runtime.
