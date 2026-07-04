# Deployment Package

## Runtime

- Target runtime: LLM-backed specialist service with retrieval over the local manifest baseline and optional on-demand shared meta-agent calls.
- Deployment model: tenant-scoped advisory specialist packaged as a catalog agent with manifest-driven retrieval and evidence artifact outputs.
- Required secrets:
  - Tenant-specific source connector credentials if private portfolio or CMDB retrieval is enabled.
  - Standard model runtime credentials for the deployment platform.
  - Optional orchestration credentials for invoking shared meta-agents.
- Required configuration:
  - Tenant-specific portfolio inputs, modernization objectives, and confidence thresholds.
  - Approved source-retrieval policy and freshness window.
  - Escalation contacts for adjacent implementation, operations, or procurement handoffs.

## Isolation

- Tenant boundary: customer inventories, dependency maps, and modernization roadmaps remain tenant-scoped and are never merged into the public baseline.
- Knowledge boundary: baseline guidance is limited to public authoritative sources and repository package artifacts; tenant discoveries are treated as per-tenant retrieval context only.
- Adaptation policy: allow configuration, retrieval, and approved tuning only; changing the public specialty boundary or meta-agent contracts requires versioned manifest review.

## Operations

- Monitoring:
  - Track source freshness checks, fallback activations, and low-confidence escalations.
  - Track scenario or rubric regressions when the package is updated.
  - Monitor orchestrator handoff frequency for adjacent implementation or operations requests.
- Logging:
  - Record authoritative source IDs, assumptions, confidence statements, and rejection reasons for each recommendation.
  - Log delegated meta-agent invocations, stale-output decisions, and rollback actions.
  - Preserve audit trails for readiness evidence generation and human verification sign-off.
- Rollback path:
  - Disable the latest specialist release and route requests to the orchestrator or prior validated package version.
  - Revert tenant-specific adaptations to the last approved configuration snapshot.
  - Re-run local validation before re-enabling the package after any manifest or evidence rollback.
- Support owner:
  - Primary: catalog maintainer or modernization program owner.
  - Adjacent escalation: implementation, scheduler, middleware, mainframe, cloud platform, or commercialization specialists as needed.
