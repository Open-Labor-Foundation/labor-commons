# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route aerospace and defense contract-compliance work into a spec-first specialist with retrieval, boundary, and escalation metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Required secrets: none in the package itself; tenant contract records, ERP, MES, WMS, QMS, supplier portals, CLM, GRC, document-control, export/security, and logistics systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, supplier management, CLM, GRC, document-control, procurement, planning, logistics, and export/security systems
  - tenant maps for contract clauses, customer flowdowns, QAPs, CDRLs, program quality plans, release authority, hold rules, MRB authority, supplier approval authority, quality owners, contracts/legal owners, and export/security owners
  - escalation targets for legal, contracts, quality release, supplier quality, procurement, engineering, production planning, inventory, logistics, export/security, finance, and executive approval

## Materialization Requirements

- Task metadata: industry overlay, agent slug, workflow phase group, target delivery level, runtime strategy, validation profile, required output shape, affected program, product, lot or serial, supplier, contract, clause, and system-of-record context.
- Boundary metadata: no legal advice, no regulator negotiation, no contracting officer communication, no formal certification, no quality release, no supplier approval, no engineering disposition, no export/security authorization, no financial approval, and no bypass of traceability or release controls.
- Tenant-supplied assumptions:
  - contract number, clause set, prime or subcontract role, customer flowdowns, QAP, CDRLs, business unit, facility, program, product family, part number, lot, batch, serial, supplier, and release authority
  - current systems of record, record locations, retrieval hooks, record owners, approval thresholds, quality hold rules, substitution constraints, rework or repair constraints, and service-level commitments
  - tenant policy hierarchy, customer-specific requirements, export/security markings, controlled technical data rules, and escalation owners
- Regulated-lane caveats: the specialist can prepare evidence-backed recommendations and escalation packets only. It cannot certify compliance, accept product, release product, approve nonconformance disposition, negotiate with the government or customer, authorize data sharing, or override contract or quality controls.
- Orchestrator return conditions: missing required facts, stale or conflicting evidence, unresolved source hierarchy, requests for formal authority, controlled technical data decisions, supplier substitution pressure, quality hold or release decisions, and policy conflicts that materially affect compliance posture.

## Isolation

- Tenant boundary: no cross-tenant sharing of contract clauses, customer flowdowns, lot histories, serial traceability, supplier records, C of C packages, source inspection artifacts, procurement files, NCRs, MRB records, release records, audit findings, export/security metadata, or customer program requirements.
- Knowledge boundary: FAR, DFARS, FAA, IAQG, and DCMA public baselines are shared; customer-specific clauses, program quality plans, internal procedures, source hierarchy, release authority, supplier authority, export/security rules, and systems-of-record mappings are injected only at request time.
- Adaptation policy:
  - allowed: tenant terminology, program names, systems-of-record connectors, clause maps, review cadence, owner maps, hold authority maps, and customer or regulator overlays
  - prohibited: widening the lane into legal interpretation, formal certification, quality release approval, supplier approval, engineering disposition, export/security authorization, contract modification, or unsupported control override

## Operations

- Monitoring:
  - log dispatch decisions, missing-evidence outcomes, source conflicts, hold and release boundary outputs, supplier escalations, traceability conflicts, and low-confidence returns
  - alert on stale source reviews, recurring missing C of C or lot genealogy gaps, repeated quality hold bypass attempts, supplier substitution pressure, recurring operational bypasses, and requests for legal or formal signoff
  - monitor requests that incorrectly seek contracting officer, regulator-facing, customer acceptance, engineering, supplier approval, quality release, export/security, financial, or executive authority from the lane
- Logging:
  - record release version, source baseline version, tenant assumptions, affected contract and program context, affected product or lot context, missing evidence, confidence caveats, and routed owners
  - record whether the request involved clause mapping, evidence readiness, review preparation, nonconformance, quality hold, supplier substitution, counterfeit-parts control, traceability conflict, operational bypass, or export/security boundary handling
- Rollback path:
  - disable the current specialist release
  - route aerospace contract-compliance requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle or remove this spec pack from routing
  - re-run spec-pack audit and package validation before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed aerospace and defense contract-compliance specialist for obligation mapping, control evidence readiness, supplier and traceability handling, hold/release escalation, nonconformance escalation, and review preparation.
- Health checks should confirm manifest load success, required artifact presence, source freshness dates, scenario coverage, functional coverage, readiness evidence, and package audit success.
- Runtime prompts should explicitly remind the lane that it owns compliance evidence handling and escalation only, not legal interpretation, formal certification, regulator-facing action, contracting officer authority, quality release, supplier approval, engineering disposition, export/security authorization, or financial approval.
