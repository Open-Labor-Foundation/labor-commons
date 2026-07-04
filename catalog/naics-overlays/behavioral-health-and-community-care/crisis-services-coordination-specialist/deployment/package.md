# Deployment Package

## Runtime

- Target runtime: shared specialist-agent runtime with retrieval-backed prompt
  assembly and repository-managed artifact packaging.
- Deployment model: tenant-scoped specialist exposed through an orchestrator
  that routes behavioral-health crisis coordination requests and adjacent-lane
  handoffs.
- Runtime strategy: `specification-based` until a retained implementation is committed and
  promoted separately.
- Required secrets: standard model-provider credentials and any approved
  retrieval credentials; no crisis-lane-specific third-party credentials are
  required by default.
- Required configuration: tenant crisis service map, jurisdiction rules,
  ownership matrix, escalation directory, system-of-record hooks, consent or
  confidentiality policy overlays, and approved adjacent-specialty routing
  table.

## Isolation

- Tenant boundary: tenant-specific crisis episodes, consent posture, local
  contacts, provider network details, and service-area rules must stay isolated
  per tenant.
- Knowledge boundary: the public authority baseline in the manifest is shared;
  tenant contracts, state interpretations, local operating rules, and patient
  or participant data are private retrieval inputs and must not be reused
  across tenants.
- Adaptation policy: allow configuration, retrieval, and approved tuning only;
  require approval for changes that alter confidentiality handling,
  jurisdiction-sensitive routing, or adjacent-specialty authority boundaries.

## Operations

- Monitoring: track crisis-routing request volume, refusal rate, low-confidence
  rate, privacy-boundary escalation rate, duplicated-ownership rate, and
  unsupported-closure attempts.
- Logging: log request metadata, retrieved tenant documents, refusal reasons,
  escalation outputs, and fallback events without exposing cross-tenant data.
- Rollback path: revert to the reviewed `v0.1.0` package, disable any
  unreviewed tuning or retrieval overlays, and route confidentiality-sensitive
  or safety-critical cases to human operators until validation is re-established.
- Support owner: repository owner or designated commercialization owner for the
  crisis-services coordination specialist package.

## Materialization Expectations

- `commons-crew` must provide task metadata including the current crisis episode
  identifier, prior owner, candidate next owner, destination program, and
  jurisdiction or service-area context.
- `commons-crew` must retrieve tenant-specific assumptions including state
  emergency-detention rules, mobile-crisis coverage model, receiving-program
  acceptance criteria, consent posture, Part 2 handling posture, and payer or
  authorization dependencies when those affect routing.
- `commons-crew` must expose the authoritative systems-of-record hooks for the
  crisis contact platform, EHR, dispatch system, bed-tracking or receiving
  system, follow-up tracker, and consent repository.
- `commons-crew` must return to orchestrator when those retrieval dependencies
  are missing, when confidentiality or legal authority is ambiguous, or when
  clinical or detention decisions are requested.

## Promotion And Rollback Notes

  usage proves the lane common enough to justify stable retrieval contracts,
  audited prompt assembly, and automated regression evidence against real crisis
  workflow samples.
- Trusted-build promotion should add implementation-specific interfaces,
  retrieval validation, tenant-contract tests, and operational monitoring that
  prove the runtime behavior matches this spec pack.
- If trusted-build promotion introduces regressions or unauthorized disclosure
  risk, roll back to this reviewed `specification-based` package and restore human review
  for crisis routing decisions until the build is revalidated.

## Package Notes

- Deploy only behind an orchestrator that can route clinical assessment,
  emergency detention, transport command, admission, payer, legal, and privacy
  adjudication requests to adjacent specialists or humans.
- Tenant onboarding should include explicit review of crisis service maps,
  county or regional coverage, follow-up timing rules, confidentiality posture,
  and closure criteria for warm handoffs.
- The package is validated as a spec pack, but it does not claim a trusted
  built runtime unless one is committed separately.
