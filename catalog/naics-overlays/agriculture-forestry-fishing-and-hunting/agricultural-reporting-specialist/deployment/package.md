# Deployment Package

## Scope

Deploy this package as a validated specification for the
`agricultural-reporting-specialist` industry overlay. It is intended for
agricultural reporting, metric definition, source tie-out, submission package
summaries, disclosure caveats, reconciliation notes, and escalation for
seasonal, land, livestock, traceability, food-safety, environmental,
grant-program, evidence, or signoff risk.

Runtime strategy remains `specification-based`. No retained implementation, autonomous
agency submission, agronomic recommendation, veterinary decision,
environmental permit interpretation, food-safety certification, organic
certification, crop-insurance adjustment, grant approval, legal approval,
financial approval, or final signoff is included in this package.

## Required Runtime Metadata

`commons-crew` needs these fields before safe materialization:

- queue slug, agent slug, industry overlay, workflow phase group, industry profile, target delivery level, runtime strategy, validation profile, and release version;
- supported task categories, output shapes, hard refusal triggers, adjacent specialist map, and orchestrator return rules;
- authority source manifest with publisher, source class, authority rationale, refresh interval, decay policy, and last review date;
- functional ability map tying shared, workflow-phase, and industry-profile abilities to scenario IDs;
- tenant jurisdiction, service model, operating constraints, crop year, season, geography, farm, facility, business unit, product, field, tract, land, livestock, program, buyer, certifier, and reporting audience context;
- retrieval bindings for farm management, land/GIS, precision agriculture, production, warehouse, traceability, livestock, animal-health, environmental, food-safety, organic, crop-insurance, grant, program, document, and approval systems;
- source-precedence rules, caveat thresholds, data-quality thresholds, approval matrix, reviewer map, retention rules, and submission authorization rules;
- audit log requirements for request intent, source lineage, metric definitions, caveats, missing support, refusal rationale, reviewer routing, and release gates.

## Tenant Prerequisites

Do not activate this lane for tenant work until the tenant provides or connects:

- current systems of record, record locations, retrieval hooks, and access permissions;
- source-precedence rules for conflicting farm management, FSA, RMA, traceability, warehouse, livestock, environmental, food-safety, organic, buyer, certifier, program, and tenant dashboard records;
- jurisdiction, crop year, season, geography, land, field, tract, common land unit, livestock, facility, product, buyer, certifier, program, grant, reporting period, cadence, and audience context;
- metric definitions, unit conversions, crop-stage definitions, field groupings, lot-code rules, livestock groupings, environmental boundaries, and disclosure thresholds;
- field operations, agronomic, veterinary, environmental compliance, food-safety, program administration, crop-insurance, organic-certification, legal, financial, reviewer, and submission-signoff owner maps;
- retention, access-control, confidentiality, data-quality, caveat, and review rules for field logs, livestock records, traceability records, environmental records, food-safety records, program files, and disclosure drafts.

## Deployment Steps

1. Register the package path in the industry overlay catalog.
2. Load `manifest.yaml`, `evaluation/functionality-map.json`, `evaluation/research-summary.json`, `evaluation/results.json`, and `readiness/evidence.json` into the catalog index.
3. Confirm runtime strategy is `specification-based` and retained-implementation capability flags are disabled.
4. Configure tenant retrieval only for approved systems and approved scopes.
5. Run standard spec-pack audit and package validation before exposing the lane.
6. Enable tenant access only after jurisdiction, source precedence, reviewer, and submission approval workflows are configured.

## Rollback

Rollback is a catalog configuration change:

- remove or disable the tenant entitlement for `agricultural-reporting-specialist`;
- revert the catalog entry to the prior published package version;
- preserve request logs, source-lineage logs, caveat logs, refusal logs, and escalation logs for audit;
- notify downstream orchestrators that agricultural reporting requests should route to a generic reporting coordinator, field operations owner, environmental compliance owner, food-safety owner, program administration owner, or human reviewer until the package is restored.

Rollback does not require data migration because this release is specification-based.

## Deployment Caveats

- The lane must not publish, submit, certify, or imply certainty for an agricultural metric, disclosure, acreage report, traceability package, food-safety record, environmental report, organic claim, crop-insurance support, grant file, or program submission.
- The lane must escalate agronomic, veterinary, environmental, food-safety, animal-welfare, certification, insurance-adjuster, grant-approval, legal, financial, and final submission authority.
- The lane must block when source quality, source lineage, metric definitions, seasonal status, field conditions, traceability support, environmental or food-safety interpretation, program requirements, or signoff rules are unresolved.
