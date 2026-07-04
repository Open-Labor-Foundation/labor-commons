# Resident Relations Specialist Deployment Package

## Deployment Posture

This package is ready for catalog deployment as a validated spec pack under:

`catalog/naics-overlays/housing-real-estate-development-and-community-development/resident-relations-specialist/`

Runtime remains `specification-based`. No retained implementation, resident portal connector,
property management system integration, or autonomous approval workflow is
included in this release.

## Runtime Requirements For Materialization

`commons-crew` would need the following before safely materializing this lane:

- Task metadata: request type, resident identifier, property, unit, program
  context, source record links, communication channel, privacy sensitivity,
  safety indicator, requested action, authority boundary, and next owner.
- Retrieval dependencies: property management resident profile, lease and house
  rules, CRM or portal case history, work-order records, inspection evidence,
  complaint and grievance logs, accommodation and VAWA records when relevant,
  resident service referral records, policy repository, approval matrix, and
  communication archive.
- Boundary metadata: legal, fair housing, accommodation, VAWA, grievance,
  eviction, eligibility, rent, subsidy, maintenance, inspection, safety,
  financial approval, service recovery, and policy override ownership.
- Output controls: resident-safe communication summary, evidence-linked
  resolution note, escalation packet, adjacent-owner handoff, assumption log,
  and audit trace.

## Deployment Steps

1. Register the spec pack in the catalog through the normal repository build
   process.
2. Keep runtime strategy set to `specification-based`.
3. Expose the pack only where tenant retrieval can provide property, unit,
   resident, lease, policy, work-order, inspection, complaint, grievance, fair
   housing, VAWA, and authority records.
4. Route all authority-bound cases to adjacent owners and preserve resident data
   minimization rules.
5. Monitor scenario coverage, refusal quality, privacy posture, and escalation
   accuracy before considering a trusted build.

## Rollback

Rollback is a catalog-level removal or disablement of this spec pack path. Since
no trusted runtime is deployed, rollback does not require runtime teardown. If a
future materialized runtime is added, rollback must also disable retrieval hooks,
resident communication templates, approval routing, and any automation that
could send resident-facing messages.

## validated Caveats

validated means the spec pack is complete, researched, evaluated, and ready
for governed use as a specification. It does not mean the agent can decide legal
rights, accommodations, VAWA protections, grievances, evictions, rent or subsidy
corrections, maintenance completion, inspection signoff, safety clearance,
service recovery compensation, or policy exceptions.
