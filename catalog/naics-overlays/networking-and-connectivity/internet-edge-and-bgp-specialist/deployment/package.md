# Deployment Package

## Runtime Model

- Target runtime: Orchestrator or `commons-crew` materializer that consumes the spec pack and emits bounded internet-edge BGP guidance artifacts.
- Runtime strategy: `specification-based`.
- retained implementation: Not claimed. A generated implementation is a promoted artifact only when frequent-use evidence satisfies the promotion criteria below.
- Required secrets: None in the package.
- Allowed runtime access: Read-only tenant retrieval or tenant-supplied exports for topology, ASN, prefix, route-policy, provider, telemetry, incident, change, rollback, and authority evidence.

## Materialization Requirements

Any future runtime materializer must receive or retrieve:

- Task metadata: tenant, request intent, affected edge, peer/provider, prefixes, ASNs, desired output, requester role, and whether execution or approval is requested.
- Boundary metadata: in-scope BGP subset, adjacent-lane work, refusal triggers, provider ownership, and human approval requirements.
- Required evidence: topology source of truth, IPAM/RIR/IRR/RPKI records, BGP policy repository, advertised and received routes, route collector or looking-glass evidence, session logs, monitoring, incident records, change ticket, maintenance window, rollback plan, and approval matrix.
- Source metadata: source IDs, source review dates, freshness state, tenant policy precedence, provider-specific documentation, and unresolved source conflicts.
- Output metadata: assumptions, confidence, evidence references, hold/release recommendation, rollback criteria, escalation owner, and adjacent-specialist routing.

## Isolation And Adaptation

- Tenant route, prefix, telemetry, provider ticket, incident, and change data must remain tenant-scoped.
- Cross-tenant examples are allowed only as generic patterns and cannot be treated as tenant authority.
- Provider-specific behavior from AWS, Azure, Google Cloud, carriers, IXPs, or appliance vendors must not be generalized without source evidence.
- Tenant policy, contractual commitments, regulated-service impact, privacy constraints, and safety facts can materially change the recommendation and must be recorded.
- The package never stores credentials, provider ticket secrets, route dumps with tenant secrets, or private customer traffic data.

## Operations

- Monitoring:
  - Track invocation volume, scenario-family coverage, refusal rate, orchestrator returns, low-confidence cases, source conflicts, and hold/release recommendations.
  - Track source freshness for IETF/IANA/MANRS/provider/NIST/CISA sources and route-security data dependencies.
  - Track recurring BGP defect classes such as route leaks, unauthorized advertisement, blackholes, session flaps, and max-prefix events.
- Logging:
  - Log request classification, source IDs, tenant evidence references, confidence level, assumptions, boundary decisions, refusal triggers, and escalation owners.
  - Redact tenant route data and provider ticket details according to tenant policy.
- Rollback:
  - Revert the catalog package to the previous release version.
  - Re-run evaluation results and functional coverage checks before restoring validated state.
  - Notify catalog owners if any source, boundary, or scenario regression caused rollback.

## Promotion Criteria

Retain a trusted generated implementation in-repo only when all criteria are met:

- At least 30 successful tenant-scoped invocations in a 90-day period demonstrate repeated use of the same materialized output templates.
- No unresolved high-severity boundary, evidence-traceability, tenant-isolation, or source-freshness defects remain from the last release cycle.
- Human review confirms the generated implementation preserves every refusal trigger, hold/release boundary, and evidence requirement in this spec pack.
- Rollback to specification-based runtime remains documented and tested.
- Promotion evidence is added to readiness artifacts and reviewed by the catalog owner.

## Deployment Decision

The package is validated for spec-pack deployment. It is not approved for autonomous production BGP execution, provider ticket execution, final release approval, risk acceptance, procurement, legal decisions, or retained built-runtime ownership.
