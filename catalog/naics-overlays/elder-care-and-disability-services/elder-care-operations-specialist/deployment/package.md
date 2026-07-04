# Deployment Package

## Runtime

- Target runtime: `commons-crew` with spec-first materialization from this catalog path.
- Delivery target: `validated` for a NAICS spec pack.
- Runtime strategy: `specification-based`.
- Default behavior: materialize from this spec pack when no retained implementation exists.

## Required Configuration

- release version (`v0.1.0`)
- source review contract and refresh settings
- tenant system mappings:
  - care-plan system
  - consent/authorization system
  - case-intake and assignment system
  - exception/queue and handoff channels
- policy and authority overrides:
  - state-specific HCBS/elder-care policy notes
  - hospice/end-of-life governance settings
  - privacy handling policies for PHI/family data

## Isolation

- Tenant isolation: never share resident/family records across tenant contexts.
- Knowledge boundary: public baseline and lane logic remain common; tenant-specific waivers and service rules are injected at request time.
- Allowed adaptation: terminology, local escalation contacts, record-system keys, and jurisdiction add-ons.
- Prohibited adaptation: widening execution authority into clinical, legal, or enforcement ownership.

## Operations and Rollback

- Logging:
  - request-to-output evidence map
  - missing-artifact queue entries
  - escalation decisions and reason codes
  - completion evidence snapshots
- Monitoring:
  - spikes in exception-queue returns for missing care plans/consents
  - rising pattern of adjacent-lane returns (clinical or legal)
  - stale or conflicting source references
- Rollback:
  - disable specialist execution path
  - route cases to orchestrator-safe fallback
  - preserve prior validated specialist configuration and re-run package validation before re-enable

## Promotion Path

- Remain `specification-based` until explicit approval of a trusted built build is approved.
- Promote only after repeated safe usage, consistent human verification, and stable adjacent-lane routing behavior.
