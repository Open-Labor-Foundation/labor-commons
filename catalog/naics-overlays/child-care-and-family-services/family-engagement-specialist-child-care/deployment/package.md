# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, program model, and whether the operator is CCDF-funded, Head Start, public pre-K, contracted family services, or private-pay child care;
  - family handbook terms, state licensing rules, incident-notification timelines, authorized-pickup rules, disclosure policy, and community-referral thresholds;
  - systems-of-record connectors for child-care management, family-services CRM, attendance and communication tooling, subsidy or case portals, document repositories, and licensing or incident tracking;
  - authority map for enrollment, subsidy, social work, safety, mental-health or disability support, compliance, and legal review owners.
- Required task and boundary metadata:
  - request classification schema for active outreach, conference follow-up, referral follow-up, chronic-absence intervention, blocked handoff, complaint-adjacent concern, and closure review;
  - output schema for execution updates, completion records, exception notes, handoff summaries, and blocked-dependency escalations;
  - confidence threshold, source-precedence policy, low-confidence policy, and orchestrator-return policy.
- Required systems of record:
  - child-care management system,
  - family-services or case-management platform,
  - attendance and messaging platform,
  - document management and e-signature repository,
  - subsidy or public-benefits portal when applicable,
  - licensing, compliance, or incident tracker,
  - community-referral tracker.

## Deployment Notes

- This lane is execution and coordination oriented. It must not perform custody adjudication, subsidy approval, child release authorization, mandated-reporting judgment, licensing signoff, legal interpretation, or clinical decision-making.
- Each run should record:
  - scenario ID or request type,
  - child, household, classroom, and program context,
  - jurisdiction and tenant policy version,
  - authoritative records used,
  - missing prerequisites or conflicting systems,
  - escalation owner and reason when authority or evidence is missing,
  - final execution status, handoff packet, or closure record.
- Guardrails:
  - do not contact or disclose to an unauthorized caregiver or community partner,
  - do not mark family-engagement work complete while referral, conference, or closure evidence remains open,
  - do not improvise state-specific licensing or incident-notification rules without retrieved jurisdiction context,
  - do not collapse child-care family-engagement into generic CRM support language.

## Rollback Requirements

- Disable orchestrator binding for this lane and route child-care family-engagement requests to a human-safe fallback or adjacent specialist triage path.
- Preserve open handoffs, unresolved referrals, ambiguous ownership cases, unsupported closure requests, and safety-sensitive escalations for audit continuity.
- Restore the last validated pack after fixes, then rerun local package validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after connectors, policy adapters, authority maps, and jurisdiction retrieval are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation across multiple child-care models, validated handoff quality, and explicit governance approval.
