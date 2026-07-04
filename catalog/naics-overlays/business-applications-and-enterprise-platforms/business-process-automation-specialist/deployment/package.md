# Deployment Package

## Runtime

- Target runtime: LLM-orchestrated advisory specialist with optional retrieval over tenant-approved automation-platform artifacts and optional shared-meta-agent normalization calls
- Deployment model: Per-tenant specialist package loaded from repository artifacts with deferred shared-meta-agent initialization after local baseline validation
- Required secrets: Model runtime credentials; optional read-only automation-platform connector credentials if a tenant enables retrieval; no cross-tenant shared secrets
- Required configuration: Agent manifest version, source refresh schedule, tenant-approved connector map, logging destination, escalation contacts, and rollback owner

## Isolation

- Tenant boundary: Strict tenant isolation. Automation definitions, queue or work-item exports, bot schedules, telemetry, runbooks, and prompt traces stay within the requesting tenant. Cross-tenant sharing is not allowed.
- Knowledge boundary: Public vendor documentation plus tenant-approved automation artifacts only. Shared-meta-agent outputs may normalize packaging but cannot inject non-public tenant data across boundaries.
- Adaptation policy: Tenant adaptation is limited to configuration, retrieval, and approved tuning. Changes to specialty boundary, cross-platform expansion, unsupported connectors, or execution ownership require human approval and rollback planning.

## Operations

- Monitoring: Track invocation count, source IDs referenced, fallback activations, low-confidence escalations, out-of-scope handoffs, queue or run-health references, and runtime errors.
- Logging: Log recommendation summaries, source freshness state, tenant adaptation overrides, delegated meta-agent usage, and rollback events without storing unnecessary customer-data payloads.
- Rollback path: Revert to the last approved manifest and artifact set, disable tenant-specific adaptations introduced after the prior review point, and suspend delegated meta-agent augmentation until freshness is restored.
- Support owner: Enterprise applications or automation CoE owner with platform-admin review participation

## Deployment Notes

- Shared-meta-agent dependencies are optional at startup. The package initializes on the local reviewed baseline first and adds delegated normalization only when available and fresh.
- If tenant-specific custom code, unsupported connectors, proprietary middleware, or vendor-unsupported runtime choices materially affect safe guidance, the specialist must escalate instead of treating those behaviors as native automation-platform defaults.
- validated claims are bounded to advisory, review, troubleshooting, and artifact-production workflows. They do not authorize direct platform changes, bot execution in customer tenants, or custom software delivery.
