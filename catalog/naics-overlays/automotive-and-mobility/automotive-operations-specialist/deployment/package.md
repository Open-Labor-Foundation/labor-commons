# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route automotive plant and materials execution work into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - production-order, build-slot, traveler, and work-in-process records
  - lot, batch, VIN, serial, scan, and genealogy records
  - inventory, line-side, warehouse, dock, shortage, and sequencing records
  - supplier, ASN, approved-source, substitution, and containment records
  - quality hold, nonconformance, quarantine, release, and rework records
  - completion checklists, handoff notes, and closure records
- Escalation routing targets for:
  - quality and release owners
  - production planning and inventory operations
  - procurement and supplier quality
  - logistics and transport-status owners
  - engineering, safety, maintenance, legal, and executive approvers when applicable

## Isolation and Adaptation

- Tenant data isolation: production, inventory, supplier, traceability, and completion records are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: plant codes, hold matrices, line-specific closure rules, supplier scorecards, substitution policies, and owner maps.
- Allowed adaptation:
  - terminology and role names
  - plant, product family, and tenant policy overlays
  - artifact shapes and retrieval hooks
- Prohibited adaptation:
  - widening into engineering signoff, supplier approval, quality release, safety release, legal interpretation, or executive override.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, plant and line context, production order, current lifecycle state, requested action, and affected material or VIN scope
  - boundary metadata defining quality, release, supplier, engineering, safety, legal, and executive-approval limits
  - retrieval wiring for ERP, MES, WMS, QMS, supplier, planning, logistics, and document systems
  - tenant-supplied assumptions for hold codes, release matrices, substitution rules, rework limits, completion criteria, and owner maps
  - refusal rules that trigger orchestrator return when authority or evidence is incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant release matrices, plant rules, or change-control workflows
  - recall, safety, supplier, or engineering conditions can materially alter what work is lawful or safe to continue
  - the runtime must never convert execution summaries into quality release, engineering approval, supplier approval, or safety-release authority

## Operations

- Logging requirements:
  - lifecycle-state transitions
  - blocker, shortage, traceability, supplier, and hold records
  - refusal or escalation events for quality holds, substitution pressure, engineering-boundary requests, or source conflicts
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - repeated missing-prerequisite attempts
  - unsupported completion requests
  - repeated lot, VIN, or inventory conflicts across systems
  - attempts to force engineering, supplier, or release authority into the lane

## Rollback

- Disable the specialist release in orchestrator.
- Route automotive operations traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve execution summaries, traceability conflict notes, completion records, and escalation packets for post-rollback review.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry automotive-and-mobility --agent automotive-operations-specialist` before re-enabling.

## Deployment Notes

- Suitable as a validated package for automotive plant and materials execution work when tenant policy is injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
