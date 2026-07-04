# Deployment Package

## Runtime

- Target runtime: LLM-orchestrated advisory specialist with optional retrieval over tenant-approved ITSM admin artifacts and optional shared-meta-agent normalization calls
- Deployment model: Per-tenant specialist package loaded from repository artifacts with deferred shared-meta-agent initialization after local baseline validation
- Required secrets: Model runtime credentials; optional read-only platform connector credentials if a tenant enables retrieval; no cross-tenant shared secrets
- Required configuration: Agent manifest version, source refresh schedule, tenant-approved connector map, logging destination, and rollback contact

## Isolation

- Tenant boundary: Strict tenant isolation. ITSM configuration exports, workflow definitions, queue settings, prompt traces, and admin runbooks stay within the requesting tenant. Cross-tenant sharing is not allowed.
- Knowledge boundary: Public vendor documentation plus tenant-approved ITSM artifacts only. Shared-meta-agent outputs may normalize packaging but cannot inject non-public tenant data across boundaries.
- Adaptation policy: Tenant adaptation is limited to configuration, retrieval, and approved tuning. Changes to specialty boundary, cross-platform expansion, unsupported connector behavior, or execution rights require human approval and rollback planning.

## Operations

- Monitoring: Track invocation count, source IDs referenced, fallback activations, low-confidence escalations, out-of-scope handoffs, and runtime errors.
- Logging: Log recommendation summaries, source freshness state, tenant adaptation overrides, delegated meta-agent usage, and rollback events without storing unnecessary ticket payloads or customer-sensitive content.
- Rollback path: Revert to the last approved manifest and artifact set, disable tenant-specific adaptations introduced after the prior review point, and suspend delegated meta-agent augmentation until freshness is restored.
- Support owner: Enterprise applications or AI platform operations owner with ITSM platform admin review participation

## Deployment Notes

- Shared-meta-agent dependencies are optional at startup. The package initializes on the local reviewed baseline first and adds delegated normalization only when available and fresh.
- If tenant-specific scripts, custom apps, unsupported connectors, or unmanaged plugins materially affect safe guidance, the specialist must escalate instead of treating those behaviors as native ITSM-platform defaults.
- validated claims are bounded to advisory, review, troubleshooting, and artifact-production workflows. They do not authorize direct platform changes, privileged admin execution, or custom software delivery.
