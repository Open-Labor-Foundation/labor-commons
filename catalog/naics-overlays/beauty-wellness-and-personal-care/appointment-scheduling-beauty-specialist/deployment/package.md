# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route beauty appointment scheduling work into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - appointment books, service menus, duration matrices, add-on sequencing, turnaround buffers, and waitlists
  - provider rosters, license or certification records, availability, provider blocks, and scope maps
  - room, station, pedicure-chair, equipment, and mobile-service availability records
  - intake, waiver, patch-test, allergy, contraindication-routing, and minors-consent records
  - sanitation, room-turn, implement-cleaning, and foot-spa cleaning records
  - maintenance tickets, out-of-service notices, and incident records
  - deposit, package, membership, no-show, and late-arrival policy records
  - owner matrix, approval registry, and escalation routing rules
- Escalation routing targets for:
  - licensed esthetics or massage ownership
  - medical-spa compliance or clinical ownership
  - front-desk or customer-recovery ownership
  - pricing, refund, or fee-waiver approvers
  - facilities or maintenance
  - safety or compliance

## Isolation and Adaptation

- Tenant data isolation: booking, guest, provider, intake, and sanitation records are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: service menu specifics, deposit rules, no-show rules, minors policy, patch-test policy, approval matrix, jurisdiction posture, and system-of-record mappings.
- Allowed adaptation:
  - terminology and role names
  - brand, location, and business-unit overlays
  - planning horizons, waitlist rules, double-book logic, and service levels
  - artifact shapes and retrieval hooks
- Prohibited adaptation:
  - widening into clinical screening, treatment-suitability approval, refund approval, payroll approval, or final operational signoff.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, planning horizon, requested appointment or block, requested decision surface, and same-day versus future booking posture
  - boundary metadata defining licensed-practice, medical-spa, financial, safety, sanitation, and policy-override limits
  - retrieval wiring for booking, CRM, POS, intake, provider-credential, room-calendar, sanitation, maintenance, and incident systems
  - tenant-supplied assumptions for service types, patch-test rules, minors policy, mobile-service posture, approved tie-break rules, and approval matrix
  - refusal rules that trigger orchestrator return when authority or evidence is incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant jurisdiction, license mapping, and med-spa context
  - patch-test, minors-consent, deposit, package, and mobile-service rules can vary materially by tenant, jurisdiction, and service line
  - runtime must never convert a scheduling recommendation into final booking, refund, clinical, or staffing authority

## Operations

- Logging requirements:
  - schedule recommendations, deferred-demand rationale, and waitlist usage
  - blocker, readiness, and dependency records
  - refusal or escalation events for provider-scope, medical-spa, sanitation, authority, and tie-break gaps
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - repeated attempts to book through missing intake, patch-test, or sanitation readiness
  - capacity overload and overbook usage patterns
  - repeated missing tie-break-rule cases
  - attempts to force final approval, refund authority, or clinical authority into the lane

## Rollback

- Disable the specialist release in orchestrator.
- Route beauty appointment scheduling traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve schedule recommendations, constraint logs, approval-needed summaries, and escalation packets for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for beauty, wellness, and personal-care appointment scheduling support when tenant policy and systems are injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.

