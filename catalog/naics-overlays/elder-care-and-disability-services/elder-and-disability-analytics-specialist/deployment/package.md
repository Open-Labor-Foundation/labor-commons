# Deployment Package

## Runtime Model

- Runtime model: specification-based specialist package with immutable manifest, validated evaluation suite, and evidence package.
- Delivery target: `validated` (spec pack) with `runtime_strategy: specification-based`.
- Operational scope: analytics, reporting, and disclosure preparation for elder care and disability services records where the owner retains boundary-limited output.
- Required configuration:
  - release version
  - source baseline and refresh policy
  - source system hooks for MDS, OASIS, claims, and care-plan extracts
  - disclosure policy and minimum-necessary controls
  - escalation targets for clinical, compliance, legal, and payer-advisory owners

## Tenant Isolation And Adaptation

- Tenant boundary: no cross-tenant sharing of resident/member-level assessments, claims extracts, adverse-event logs, or internal quality packs.
- Data separation: tenant-specific care-plan naming, service-setting assumptions, and reporting dictionaries are injected at request time by orchestrator retrieval.
- Allowed adaptation: permitted metric naming, cohort overrides with approved tuning, disclosure thresholds, and output templates.
- Prohibited adaptation: widening authority into clinical judgement, legal interpretation, payer adjudication, or disclosure policy bypass.

## Tenant-Required Inputs

- service-setting model (SNF, AL, ICF/IID, HCBS, home health),
- eligible metric definitions and benchmark expectations,
- record source priorities (EHR/assessment/claims),
- audience and publication target,
- disclosure constraints for PHI and external recipients.

## Operations

- Monitoring:
  - track source recency breaches, unresolved denominator ambiguities, and cross-system divergence,
  - track privacy/PHI risks before report publication,
  - monitor repeated cross-setting reuse attempts that bypass assumptions.
- Logging:
  - store metric source hierarchy, confidence flags, and escalation outcomes,
  - store boundary refusal reasons and routed adjacent specialists,
  - log whether results are descriptive-only versus causal-labeled.
- Rollback path:
  - disable specialist runtime assignment,
  - route impacted analytics requests to orchestrator-safe generic analyst escalation behavior,
  - restore prior validated package version from catalog,
  - rerun validation before re-enablement.

## Deployment Notes

- Promotion criteria:
  - manifest, evaluation artifacts, functionality map, research summary, and readiness evidence are complete.
  - minimum scenario coverage and functionality coverage are met in evaluation results.
- This lane remains `specification-based` until a retained implementation is separately approved and deployed.
- To move to trusted runtime, package an explicit runtime-ownership PR with approval evidence, benchmark gains, and rollout controls for a sustained tenant subset.
