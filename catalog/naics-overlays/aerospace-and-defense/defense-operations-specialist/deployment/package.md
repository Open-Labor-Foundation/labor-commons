# Deployment Package

## Package Identity

- Agent slug: `defense-operations-specialist`
- Catalog family: `naics-overlays/aerospace-and-defense`
- Delivery target: `validated`
- Runtime strategy: `specification-based`
- Release version: `v0.1.0`
- Validation profile: `standard`

## Deployment Use

Deploy this package as the validated specification baseline for defense
operations specialist work inside Aerospace and Defense. The package is suitable
for routing, evaluation, tenant-scoping, and future runtime design. It is not a
retained implementation and must not be advertised or wired as autonomous
execution software until a separate trusted build is committed and approved.

## Materialization Requirements For `commons-crew`

`commons-crew` would need the following metadata and runtime dependencies to
materialize the lane safely:

- task metadata for lifecycle state, work package, program, contract, CLIN or
  SLIN, production order, NSN or part number, serial or IUID, lot or batch,
  requested action, mission constraint, rated-order context, and current owner;
- boundary metadata identifying quality release, QAR, source inspection,
  engineering, contracting officer, property administrator, supplier approval,
  security, safety, logistics, and program authority owners;
- retrieval hooks for ERP, MES, WMS, QMS, supplier management, planning,
  logistics, accountable property, WAWF or receiving-report, IUID, PDREP or
  surveillance, document-control, and change-control systems;
- tenant policies for quality holds, release matrices, source-control lists,
  substitution limits, counterfeit-risk handling, rework constraints,
  government property custody, rated-order escalation, mission-impact handling,
  security caveats, and evidence retention;
- refusal and orchestrator-return rules for missing facts, conflicting policies,
  unsupported completion, traceability conflicts, source-control exceptions,
  property discrepancies, quality holds, supplier substitution pressure,
  government acceptance, contracting, legal, engineering, safety, or security
  authority.

## Deployment Notes

1. Entitle only tenants that operate Aerospace and Defense defense-production,
   defense-materiel, mission-support, equipment handoff, or contract-execution
   workflows with auditable systems of record.
2. Keep the default route in `specification-based` mode. Use the pack to classify and
   constrain work, generate output-shape expectations, and evaluate future
   runtime candidates.
3. Require tenant retrieval before the lane issues an execution disposition
   whenever contract, program, source-control, property, release, or security
   facts could change the answer.
4. Configure adjacent-lane routing before tenant launch. At minimum, routing
   must cover quality, production planning, inventory, procurement, supplier
   quality, logistics, engineering change coordination, contract compliance,
   security program coordination, and maintenance or sustainment.
5. Do not enable autonomous state mutation in tenant systems until a trusted
   built runtime exists and has passed runtime-specific tests.

## Regulated-Lane Caveats

- Defense operations may involve contract clauses, government acceptance,
  export-control, security classification, cyber, hazardous-material,
  weapons-system, airworthiness, safety, and mission-readiness constraints that
  are not fully knowable from public sources.
- The spec pack may request and summarize evidence, but it does not approve
  release, source changes, substitutions, contract modifications, security
  decisions, government acceptance, or safety-critical actions.
- Classified or controlled information must be handled only through tenant
  approved retrieval and access controls. The spec must not ask the model to
  infer classified facts from public information.

## Required Runtime Assumptions

- Tenant source systems are authoritative only when the tenant identifies the
  system of record and current retrieval path.
- Public sources provide the baseline; contract clauses, customer flowdowns,
  program quality plans, security guides, source-control lists, and internal
  release matrices can narrow or override the baseline.
- Lifecycle state transitions are reversible when evidence fails or a blocker
  appears.
- Completion records are audit-ready only when the governing evidence set is
  named and internally consistent.

## Rollback

Because this package is specification-based, rollback is catalog and routing rollback:

1. Disable the tenant entitlement or route for `defense-operations-specialist`.
2. Remove the package directory if the catalog should no longer expose the lane.
3. Rebuild any derived catalog database or search index.
4. Confirm no retained implementation, prompt bundle, or tenant automation still
   references this package as active.

## Promotion To retained implementation

Promotion requires a separate pull request that includes the built package,
runtime task schema, retrieval adapters, authority metadata, tenant-safe
configuration model, automated tests, human review, deployment monitoring, and
rollback plan. Usage should prove that defense operations requests recur often
enough to justify a trusted runtime rather than remaining a spec-pack overlay.
