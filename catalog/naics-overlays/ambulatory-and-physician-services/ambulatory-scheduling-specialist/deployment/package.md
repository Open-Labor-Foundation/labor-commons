# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route ambulatory scheduling work into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - appointment request work queues, orders, referral packets, and diagnosis-linked service requests
  - visit type rules, duration matrices, modality flags, provider templates, and access targets
  - payer, guarantor, benefit verification, prior authorization, and self-pay posture records
  - patient demographic, communication-preference, interpreter, accommodation, and contact records
  - room, equipment, maintenance, outage, and location-block records
  - prep instructions, lab or imaging prerequisites, consent status, transportation or escort dependencies, and notice logs
  - approval matrix, overbook posture, add-on clinic rules, and escalation routing rules
- Escalation routing targets for:
  - prior authorization or utilization management ownership
  - licensed clinical triage or ordering-provider ownership
  - referral management ownership
  - patient financial counseling or estimate ownership
  - privacy and consent compliance
  - clinic or ambulatory operations approval

## Isolation and Adaptation

- Tenant data isolation: patient, order, referral, payer, template, and readiness records are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: payer contracts, jurisdiction rules, direct-scheduling exceptions, estimate ownership, provider-template details, prep rules, overbook posture, and system-of-record mappings.
- Allowed adaptation:
  - terminology and role names
  - specialty, location, and business-unit overlays
  - template design, planning horizons, access targets, and waitlist rules
  - artifact shapes and retrieval hooks
  - tie-break rules, modality rules, and escalation matrices
- Prohibited adaptation:
  - widening into clinical triage, medical necessity, prior authorization approval, estimate issuance, privacy-override authority, or final operational signoff.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, planning horizon, requested service, requested modality, requested location, and requested decision surface
  - boundary metadata defining clinical, payer, privacy, financial, and operational approval limits
  - retrieval wiring for EHR, practice-management, referral, payer, communication, document, maintenance, and approval systems
  - tenant-supplied assumptions for jurisdiction, payer-policy overlays, direct-scheduling exceptions, template taxonomy, prep windows, and authority matrix
  - refusal rules that trigger orchestrator return when authority or evidence is incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant jurisdiction, payer contract, and service-line context
  - direct access, referral rules, prior authorization posture, privacy notice handling, and estimate ownership can vary materially by payer, program, tenant, and jurisdiction
  - runtime must never convert a scheduling recommendation into clinical triage, payer approval, privacy override, or final operational authority

## Operations

- Logging requirements:
  - schedule recommendations, deferred-demand rationale, and waitlist or reschedule usage
  - blocker, readiness, and dependency records
  - refusal or escalation events for order, referral, authorization, privacy, estimate, authority, and tie-break gaps
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - repeated attempts to book without orders, referrals, authorization, or preparation prerequisites
  - capacity overload and overbook usage patterns
  - repeated missing tie-break-rule cases
  - attempts to force clinical, payer, privacy, or final approval authority into the lane

## Rollback

- Disable the specialist release in orchestrator.
- Route ambulatory scheduling traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve schedule recommendations, constraint logs, approval-needed summaries, and escalation packets for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for ambulatory and physician services scheduling support when tenant policy and systems are injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
