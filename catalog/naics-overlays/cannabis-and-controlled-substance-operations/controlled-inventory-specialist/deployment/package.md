# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route cannabis and controlled-substance inventory work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant credentials for state track-and-trace, DEA-connected workflows, inventory, vendor, quality, and approval systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for state track-and-trace, ERP or procurement, vault or inventory, vendor, quality, and document systems
  - retrieval hooks or connectors for CSOS, ARCOS, SORS, and Theft/Loss Reporting where the tenant uses them
  - escalation targets for compliance, security and diversion, quality release, licensed pharmacy, procurement approval, transport, destruction, and legal owners
  - tenant authority maps for substitution limits, release controls, discrepancy tolerance, ordering authority, financial approval, and report-signoff ownership

## Isolation

- Tenant boundary: no cross-tenant sharing of inventory counts, package tags, manifests, DEA identifiers, vendor terms, discrepancy investigations, or reporting references.
- Knowledge boundary: public DCC, OLCC, DEA, and eCFR baselines are shared; tenant SOPs, state-license details, DEA registration data, vendor records, and approval maps are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, document templates, connector mappings, approved escalation targets, and tenant-specific discrepancy or release checklists
  - prohibited: widening the lane into legal interpretation, licensed substitution approval, release signoff, destruction authorization, formal regulatory reporting ownership, or direct procurement approval

## Operations

- Monitoring:
  - log availability decisions, shortage escalations, vendor delays, manifest gaps, discrepancy flags, suspicious-order referrals, and loss-related escalations
  - alert on repeated attempts to bypass release controls, track-and-trace requirements, CSOS or Form 222 rules, or formal reporting boundaries
  - monitor recurring package-tag mismatches, physical-count variances, vendor backorders, and repeated requests that misroute compliance or licensed work into this lane
- Logging:
  - record release version, tenant assumptions, jurisdiction, license and registrant context, facility, product type, schedule, hold posture, and evidence references
  - record whether the request involved shortage, substitution pressure, traceability gaps, suspicious-order indicators, or potential significant loss
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry cannabis-and-controlled-substance-operations --agent controlled-inventory-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed regulated-inventory specialist for cannabis and controlled-substance availability status, replenishment packaging, vendor constraint handling, and discrepancy-aware escalation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying jurisdiction, facility, license or registrant type, product class or schedule, requested inventory action, and current shortage or discrepancy concern
  - boundary metadata identifying compliance, security, quality-release, licensed pharmacy, procurement approval, transport, destruction, and legal owners
  - retrieval dependencies for state track-and-trace, inventory or vault records, vendor records, procurement systems, quality or testing systems, and DEA workflow systems where applicable
  - tenant overlays for substitution policy, release criteria, discrepancy handling, report-signoff authority, ordering authority, and jurisdiction-specific cannabis rules
- Regulated-lane caveats:
  - state cannabis transfer, manifest, and transport rules vary materially by jurisdiction and license type, so runtime must retrieve the exact state program before finalizing guidance
  - DEA rules differ by registrant class and product schedule, so runtime must know whether the tenant acts as manufacturer, distributor, pharmacy, hospital, practitioner, or another registrant
  - runtime must refuse or return to orchestrator whenever legal interpretation, licensed substitution, release signoff, destruction authority, procurement approval, or formal DEA or state reporting authority is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
