# Deployment Package

## Scope

Deploy this package as a validated specification for the
`compliance-reporting-accounting-specialist` industry overlay. It is intended
for compliance-oriented accounting reporting, disclosure schedule support,
source reconciliation, workpaper-aware package assembly, and escalation for
interpretation, completeness, confidentiality, or signoff risk.

Runtime strategy remains `specification-based`. No retained implementation, autonomous
filing action, attestation workflow, tax-position approval, legal approval, or
contractual signoff is included in this package.

## Required Runtime Metadata

`commons-crew` needs these fields before safe materialization:

- queue slug, agent slug, industry overlay, workflow phase group, industry profile, target delivery level, runtime strategy, validation profile, and release version;
- supported task categories, output shapes, hard refusal triggers, adjacent specialist map, and orchestrator return rules;
- authority source manifest with publisher, source class, authority rationale, refresh interval, decay policy, and last review date;
- functional ability map tying shared, workflow-phase, and industry-profile abilities to scenario IDs;
- tenant-specific engagement scope, service model, jurisdiction, reporting framework, client commitments, confidentiality constraints, approval matrix, and delivery quality standards;
- retrieval bindings for ERP, GL, subledger, consolidation, close, reporting, disclosure-management, tax-workflow, document review, workpaper, PBC, client portal, and approval systems;
- audit log requirements for request intent, source lineage, caveats, missing support, refusal rationale, reviewer routing, and release gates.

## Tenant Prerequisites

Do not activate this lane for tenant work until the tenant provides or connects:

- current systems of record and record locations;
- source-precedence rules for conflicting ERP, GL, subledger, close, consolidation, disclosure-management, workpaper, and client-provided records;
- engagement scope, client-release rules, confidentiality requirements, and contractual boundaries;
- reporting framework, filing audience, jurisdiction, period, cadence, and metric definitions;
- preparer, reviewer, quality, legal, tax, account, delivery, and engagement-signoff owner maps;
- retention and access-control rules for workpapers, taxpayer data, reviewer notes, and draft disclosures.

## Deployment Steps

1. Register the package path in the industry overlay catalog.
2. Load `manifest.yaml`, `evaluation/functionality-map.json`, `evaluation/research-summary.json`, `evaluation/results.json`, and `readiness/evidence.json` into the catalog index.
3. Confirm runtime strategy is `specification-based` and retained-implementation capability flags are disabled.
4. Configure tenant retrieval only for approved systems and approved scopes.
5. Run strict spec-pack audit and package validation before exposing the lane.
6. Enable tenant access only after client confidentiality, engagement scope, and approval workflows are configured.

## Rollback

Rollback is a catalog configuration change:

- remove or disable the tenant entitlement for `compliance-reporting-accounting-specialist`;
- revert the catalog entry to the prior published package version;
- preserve request logs, source-lineage logs, refusal logs, and escalation logs for audit;
- notify downstream orchestrators that compliance-reporting requests should route to a generic accounting, reporting, quality, legal, tax, or engagement owner until the package is restored.

Rollback does not require data migration because this release is specification-based.

## Deployment Caveats

- The lane must not publish, certify, or imply certainty for a disclosure, schedule, filing, non-GAAP measure, tax position, or management assertion.
- The lane must escalate legal interpretation, attestation, final disclosure certification, editorial approval, tax-position approval, contractual signoff, and professional judgment.
- The lane must block when source quality, source lineage, metric definitions, workpaper support, confidentiality approval, or signoff rules are unresolved.
