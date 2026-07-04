# Deployment Package

## Runtime Model

- Target runtime: specification-based catalog package consumed by the orchestrator, catalog registry, or future runtime materializer.
- Runtime strategy: `specification-based`.
- Delivery status: validated spec pack, not a trusted built implementation.
- Package version: `v1.1.0`.
- Required package artifacts:
  - `manifest.yaml`
  - `evaluation/scenarios.md`
  - `evaluation/results.json`
  - `evaluation/functionality-map.json`
  - `evaluation/research-summary.json`
  - `readiness/evidence.json`
  - `readiness/release.md`
  - `deployment/package.md`
  - `positioning/readiness.md`

The pack is safe to materialize only when the runtime provides the task and
boundary metadata, tenant evidence retrieval, source-freshness checks, refusal
triggers, logging, and tenant isolation described here. It must not be promoted
to a retained built runtime until frequent-use promotion criteria are met.

## Materialization Requirements

A materializer such as `commons-crew` needs:

- Task metadata: supported tasks, required output shapes, scenario IDs, validation profile, runtime strategy, and target delivery level.
- Boundary metadata: owned workflows, adjacent specialists, hard refusal triggers, low-confidence triggers, and orchestrator-return conditions.
- Tenant facts: topology source of truth, IPAM/DCIM, router and switch configurations, VLAN and route-policy records, telemetry, change ticket, maintenance window, approvals, rollback plan, and critical-service constraints.
- Evidence dependencies: source IDs, source freshness, tenant record IDs, timestamps, owner map, confidence tags, assumptions, and unresolved conflicts.
- Domain caveats: no execution, no final production approval, no risk acceptance, no legal/audit/procurement authority, no endpoint/identity/application/security-policy ownership.
- Routing behavior: return to orchestrator or adjacent specialist before execution when primary ownership is outside routing/switching.

## Isolation

- Tenant overlays must be tenant-scoped and must not mutate the public baseline.
- Cross-tenant reuse is prohibited unless tenant policy, topology, route domains, trust zones, device platform, and critical-service context are identical and explicitly approved.
- Tenant evidence must be retrieved only through orchestrator-approved connectors or evidence stores.
- Recommendations must record which tenant records were used and which assumptions remain.

## Operations

- Monitoring expectations:
  - Track request disposition: accepted, more-information-needed, routed-elsewhere, refused, or closed-with-guidance.
  - Track boundary violations, adjacent-lane routing volume, low-confidence escalations, and human-review referrals.
  - Track source review age against each source `refresh_interval_days`.
  - Track scenario IDs and ability IDs used for materialized responses.
- Logging expectations:
  - Log tenant ID, evidence IDs, source IDs, source freshness, confidence level, output shape, and escalation reason.
  - Do not log raw tenant secrets or unrestricted packet captures.
  - Preserve immutable release evidence for validated review.
- Support owner: catalog owner plus network platform engineering reviewer.

## Deployment Steps

1. Register the package path in the catalog registry for `routing-and-switching-specialist`.
2. Keep runtime strategy set to `specification-based`.
3. Confirm all required package artifacts exist and JSON artifacts parse.
4. Confirm `evaluation/results.json` records 18/18 passing scenarios, pass rate 1.0, and functionality coverage complete.
5. Confirm `readiness/evidence.json` records human verification, deployment readiness, commercialization readiness, research audit, and functional audit.
6. Enable the package for orchestrator routing as a non-executing specialist.
7. Monitor early usage for boundary drift, missing-evidence rates, and adjacent-lane routing accuracy.

## Rollback Path

- Disable the `routing-and-switching-specialist` catalog activation pointer for version `v1.1.0`.
- Revert orchestrator routing to the prior approved package version or route all requests to the orchestrator/human reviewer.
- Preserve the reverted artifact set read-only for audit.
- Record rollback reason, impacted requests, and whether source, scenario, functionality, or readiness evidence caused rollback.
- Re-run package verification and readiness review before reactivation.

## Promotion Criteria For A retained implementation

This package does not claim retained implementation ownership. Retaining a
generated implementation in the repository requires all of the following:

- Frequent dispatch volume across at least two release reviews.
- Clear latency, cost, or quality benefit from materialized runtime behavior compared with specification-based interpretation.
- Passing generated-runtime evaluation against all 18 scenarios plus tenant isolation, logging, source-refresh, and rollback checks.
- Human reviewer approval that the generated implementation follows the canonical spec and does not widen authority.
- Explicit promotion record in readiness evidence and manifest.

## Market Deployment Caveats

- The specialist provides evidence-backed guidance and routing decisions, not production execution.
- Tenant-specific vendor behavior, software defects, support status, and platform defaults must be retrieved before high-confidence implementation guidance.
- Cross-industry context is material: safety, privacy, contractual, regulated-service, and critical-service facts can change intake, escalation, and authority boundaries.
- Legal, audit, procurement, risk acceptance, and final production approvals remain outside the lane.

## Commercial And Packaging Notes

- Target buyer profile: mid-size and enterprise network architecture, network operations, and change-review teams operating campus, branch, and distributed routing/switching estates.
- Packaging: validated spec-pack bundle with research, functionality, evaluation, deployment, marketing, and readiness artifacts.
- Subscription model:
  - Base tier for routing/switching intake and design-review guidance.
  - Higher tier for expanded evidence traceability, tenant adaptation, and governance reporting.
  - Optional human-review add-on for high-risk migration and critical-service scenarios.
- Commercial proof points:
  - 18/18 scenario pass rate with pass rate 1.0.
  - Complete functionality coverage for 10 required abilities.
  - Research-backed source baseline with IETF, IEEE, Cisco, NIST, CIS, and current package baseline references.
  - Explicit refusal and routing coverage for endpoint, identity, application, firewall/security-policy, legal, audit, procurement, and approval boundaries.
- Go-to-market gaps:
  - No live-fabric benchmark corpus is included.
  - Vendor-specific command templates remain intentionally outside the canonical spec until tenant and platform evidence is supplied.
  - Carrier, cloud fabric, OT, healthcare, and payment-network authority requirements require tenant-specific overlays and human review when material.
