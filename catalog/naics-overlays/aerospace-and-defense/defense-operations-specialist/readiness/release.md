# Release Readiness

## Status

- Agent slug: `defense-operations-specialist`
- Release version: `v0.1.0`- Validation profile: `standard`
- Human verification: recorded

## Release Scope

This release adds a validated industry-overlay spec pack for defense
operations inside Aerospace and Defense. The pack owns bounded execution-state
handling for defense production, materiel, equipment, mission-support, movement,
and handoff workflows using production orders, contract and CLIN context, IUID
or serial traceability, inventory records, accountable-property records,
supplier evidence, source-control constraints, quality holds, nonconformance
records, release records, rated-order caveats, and completion evidence.

The release does not include a retained implementation. Promotion beyond
`specification-based` requires a separate build artifact, tenant retrieval design,
runtime evaluation, and explicit release approval.

## Readiness Gates

- Source baseline current: pass
- Evaluation threshold met: pass
- Functionality coverage complete: pass
- Human verification recorded: pass
- Deployment notes documented: pass
- Rollback path documented: pass
- Commercialization notes documented: pass

## Evidence Summary

The package includes:

- `manifest.yaml` with specialty boundary, runtime strategy, source baseline,
  tenant adaptation policy, validation posture, and catalog metadata.
- `evaluation/research-summary.json` with the 2026-04-08 research contract,
  authoritative defense sources, workflow stages, artifacts, systems of record,
  decision boundaries, domain failure modes, scenario family coverage, and
  unresolved ambiguity handling.
- `evaluation/functionality-map.json` mapping all shared,
  execution-processing-and-fulfillment, and manufacturing-and-supply-chain
  abilities to passing scenario IDs.
- `evaluation/scenarios.md` and `evaluation/results.json` covering normal
  execution, missing prerequisites, incomplete artifacts, rework or escalation,
  unsupported completion, traceability conflict, quality hold, supplier or
  substitution overreach, adjacent-lane rejection, low-confidence handling,
  conflicting policy, terminology normalization, and tenant adaptation.
- `readiness/evidence.json`, `deployment/package.md`, and
  `positioning/readiness.md` documenting release evidence, rollback, positioning,
  and promotion criteria.

## Caveats

- The lane must not approve engineering changes, contract modifications,
  supplier or source changes, quality release, government acceptance, safety
  release, classified handling decisions, property administrator actions, legal
  interpretation, financial acceptance, or executive policy overrides.
- Tenant retrieval is required for contract clauses, program instructions,
  classified handling limits, source-control lists, approved supplier rules,
  quality hold codes, release matrices, property ownership, rated-order
  escalation, and current systems-of-record references.
- Conflicting public, contract, customer, classified-program, or tenant policy
  sources require human resolution before the lane can proceed.

## Rollback

Rollback is package-level and does not require runtime state migration because
the release is `specification-based`.

1. Remove or disable the package directory:
   `catalog/naics-overlays/aerospace-and-defense/defense-operations-specialist/`.
2. Rebuild or refresh catalog indexes if the deployment environment materializes
   catalog metadata.
3. Remove the tenant entitlement or routing rule for
   `defense-operations-specialist`.
4. Confirm no retained implementation references this pack as a promoted
   implementation.

## Promotion Path

Promote this overlay to a retained implementation only after repeated tenant
usage proves the lane is common enough to justify runtime investment. A
promotion must add:

- tenant retrieval connectors for ERP, MES, WMS, QMS, supplier, APSR, WAWF or
  receiving-report, IUID, PDREP, logistics, and document-control records;
- explicit authority metadata for release, quality, supplier, source-control,
  property, rated-order, security, contracting, and engineering boundaries;
- runtime tests proving refusal and orchestrator return for missing evidence,
  conflicting sources, quality holds, supplier substitutions, property
  discrepancies, and safety or mission-impact blockers;
- rollback and monitoring for a trusted built artifact separate from this
  specification-based pack.
