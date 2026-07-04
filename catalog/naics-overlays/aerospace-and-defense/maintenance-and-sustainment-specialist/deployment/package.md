# Deployment Package

## Package Scope

This package defines the aerospace and defense maintenance and sustainment
specialist as a validated spec pack. It supports maintenance intake,
trigger recognition, preventive versus corrective state handling, maintenance
planning notes, outage-risk summaries, traceability-aware execution follow-up,
return-to-service readiness checklists, and escalation notes for safety,
engineering, quality, supplier, release, and authority conflicts.

Runtime strategy remains `specification-based`. No retained implementation, automation,
connector, or release-action capability is committed by this package.

## Deployment Preconditions

- Load the manifest, scenarios, research summary, functionality map, results, readiness evidence, deployment notes, and commercialization notes from this package path.
- Configure tenant retrieval for CMMS/EAM/MRO, ERP, MES, WMS, QMS, supplier-management, planning, logistics, readiness-reporting, document-control, and engineering-change systems.
- Require tenant-supplied jurisdiction, business unit, program, facility, plant, line, product family, asset, serial, lot or batch, supplier, service model, service-level commitments, and current operating constraints.
- Require tenant release authority, quality hold rules, engineering hold rules, maintenance deferral authority, repair station or depot procedure, substitution or rework constraints, warranty limits, and adjacent-owner routing map.
- Preserve refusal behavior when required records, authority sources, or tenant facts are missing or conflicting.

## Safe Runtime Behavior

- Classify requests as in scope, out of scope, or blocked before producing maintenance-state recommendations.
- Produce only evidence-backed summaries, checklists, blocker matrices, and escalation packages.
- Include source and tenant-record references for maintenance status, outage risk, return-to-service readiness, traceability conflicts, quality holds, supplier nonconformance, and release blockers.
- Route safety, engineering, airworthiness, quality release, supplier approval, warranty, legal, policy override, and financial decisions to adjacent owners.
- Refuse requests that bypass traceability, release, quality hold, supplier approval, engineering, safety, or life-limited part controls.

## Rollback

- Remove this package from the active catalog if validation, source freshness, or tenant-adaptation controls fail.
- Revert to the previous catalog state and keep existing aerospace quality, supply-chain, planning, and engineering lanes active.
- Disable any tenant routing rule that resolves directly to this specialist until the failed evidence, policy, or source issue is corrected.
- Preserve audit logs for the failing request, missing records, conflicting source, and affected scenarios.

## Materialization Notes For `commons-crew`

`commons-crew` would need task metadata for maintenance trigger recognition,
maintenance state, asset identity, evidence status, traceability dependencies,
quality and engineering hold state, return-to-service authority, and adjacent
owner routing. It would also need tenant retrieval hooks for authoritative
records and a policy layer that prevents release, signoff, substitution,
deferral, or closure actions unless explicit human or system authority exists.

Promotion from spec pack to retained implementation should be separate work. A
trusted build must add connector tests, scenario regression, authorization
checks, audit logging, tenant policy loading, rollback automation, and human
approval controls before runtime can do more than prepare bounded outputs.
