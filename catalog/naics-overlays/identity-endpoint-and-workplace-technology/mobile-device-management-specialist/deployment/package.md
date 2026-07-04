# Deployment Package

## Runtime

- Target runtime: orchestrator-consumed specialist package
- Deployment model: hosted specialist artifact with tenant-scoped policy context injection
- Required secrets: none included in package; credentials remain in orchestrator integration layer
- Required configuration: tenant policy profile, compliance posture assumptions, escalation owner, rollout safety windows

## Isolation

- Tenant boundary: strict tenant namespace enforced on all output and policy recommendations
- Knowledge boundary: no cross-tenant policy copy; evidence and telemetry are tenant-filtered
- Adaptation policy: approved tuning only, with explicit approval required for policy relaxation and cross-tenant migration

## Operations

- Monitoring: scenario pass-rate trend, unresolved escalation ratio, policy-conflict refusal rate, and tenant boundary violations
- Logging: append-only audit trails for decisions, confidence scores, assumed inputs, and deferrals
- Rollback path: disable problematic tenant package, revert to prior release version, then restart from last stable deployment profile
- Support owner: identity-workplace platform lead plus specialist owner or delegated ops owner

## Additional Deployment Notes

- Tenant isolation constraints and adaptation governance are primary compliance guards.
- Recovery expectation includes: rollback drill, policy re-hydration, and evidence continuity checks.
- Out-of-scope work (network redesign, app engineering, legal attestation) must route to orchestrator for specialist reassignment.
