# Deployment Package

## Package Identity

- Agent slug: `network-service-assurance-specialist`
- Queue slug: `industry-overlays::information-software-and-digital-media::network-service-assurance-specialist`
- Industry overlay: `information-software-and-digital-media`
- Delivery target: `validated`
- Runtime strategy: `specification-based`
- Release version: `v0.1.0`

## Deployment Notes

Deploy this lane as a specification-based industry overlay for teams that need
evidence-backed network service assurance support across hosted network,
connectivity, CDN, cloud access, interconnection, and digital service delivery
workflows.

The lane should be exposed only where tenant retrieval can supply:

- tenant service model, quality standards, SLO/SLA definitions, hold/release
  rules, incident severity model, corrective-action process, approval matrix,
  and confidentiality constraints
- systems-of-record mappings for ticketing, ITSM, NOC, alarm, incident,
  problem, service-test, telemetry, service inventory, CMDB, CRM, project,
  content workflow, document management, quality review, nonconformance,
  corrective-action, and communication logs
- customer commitments, contractual boundaries, jurisdiction, business unit,
  program, product, facility, service-criticality, approved recipient list,
  and customer notification rules
- adjacent owner routing for network engineering, NOC, security, formal QA,
  legal, editorial, regulatory, delivery management, account, customer
  approver, and executive incident authority

## Materialization Requirements

`commons-crew` would need the following before materializing this lane safely:

- task metadata: request intent, service identifier, tenant, customer,
  product, environment, jurisdiction, business unit, quality gate, incident or
  problem linkage, requested output shape, and urgency
- boundary metadata: allowed evidence review, forbidden signoff actions,
  adjacent specialist routing, formal approver map, customer communication
  authority, and confidentiality restrictions
- retrieval metadata: authoritative systems, record locations, freshness
  expectations, source precedence, escalation hooks, and audit logging
  destinations
- tenant-supplied assumptions: current SLA/SLO definitions, quality thresholds,
  hold/release criteria, review workflow, nonconformance process, customer
  commitments, approved recipients, regulated outage escalation path, and
  contractual limitations
- regulated-lane caveats: outage reportability, emergency-service impact,
  security incident posture, privacy or subscriber impact, legal conclusion,
  editorial wording, service credit, and contractual liability are escalation
  triggers

## Runtime Boundaries

The lane may:

- classify assurance requests as in-scope, out-of-scope, blocked, hold,
  release-recommended, investigation-needed, nonconforming, escalated, or
  refused
- request missing tenant facts, authoritative records, source context, and
  approval evidence
- prepare quality status summaries, hold/release/nonconformance records,
  assurance findings summaries, corrective-action packages, incident summaries,
  and unresolved-risk notes
- route to adjacent specialists when authority changes

The lane must not:

- execute or approve network engineering, NOC command, routing, capacity,
  security, access, physical infrastructure, or safety-critical work
- certify SLA breach, customer credit, contractual liability, regulated outage
  reportability, legal position, editorial wording, formal QA signoff, or
  customer approval
- clear a hold, release a service, close a finding, close a nonconformance, or
  close an incident without required evidence and authorized reviewer support
- disclose confidential topology, traffic, incident, vulnerability,
  subscriber, credential, content-delivery, assurance, or contract records to
  unapproved recipients or channels

## Rollback

Rollback is catalog-level and does not require runtime artifact migration
because this package is specification-based.

1. Remove or disable this package from tenant entitlements.
2. Route active assurance tasks to the generic quality assurance, service
   delivery, or human review workflow.
3. Preserve all ticket, incident, problem, telemetry, review, approval, and
   escalation audit records created while the package was active.
4. Revert the catalog commit or deploy a follow-up package revision.
5. Document the rollback reason and any scenario, source, or tenant adaptation
   gap that caused rollback.

## Promotion Path

Promote this overlay to a retained implementation only if usage proves common
enough and the implementation can reliably retrieve tenant systems of record,
enforce confidentiality and approval controls, log evidence and refusals, and
pass expanded regression scenarios. Promotion requires a separate build
commit; this package does not include or claim trusted runtime behavior.
