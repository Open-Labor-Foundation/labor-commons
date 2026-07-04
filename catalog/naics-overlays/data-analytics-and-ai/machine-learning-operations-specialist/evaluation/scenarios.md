# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the Machine learning operations specialist.

## Scenarios

### Scenario 1

- Name: Training and release pipeline design
- Input: Design a training-to-deployment workflow for a fraud model with validation, model registry, approval gates, and rollback checkpoints.
- Expected behavior: Return a bounded MLOps pipeline with reproducibility controls, artifact lineage, approval flow, and environment promotion path.
- Expected output: MLOps architecture brief and release control checklist.
- Risk level: high

### Scenario 2

- Name: Promotion gate and model registry policy
- Input: Define promotion criteria for moving a model from staging to production after retraining.
- Expected behavior: Specify measurable evaluation, approval, and registry state-transition gates rather than vague deployment advice.
- Expected output: Promotion policy with evidence artifacts and approval matrix.
- Risk level: high

### Scenario 3

- Name: Online deployment rollout and rollback
- Input: Plan a canary rollout for a real-time inference endpoint with strict latency and rollback requirements.
- Expected behavior: Recommend phased traffic shifting, health checks, rollback triggers, and telemetry signals for release safety.
- Expected output: Deployment runbook and rollback trigger table.
- Risk level: high

### Scenario 4

- Name: Batch inference operations
- Input: Design a nightly batch scoring pipeline that must support retries, backfills, and traceable outputs for audit review.
- Expected behavior: Provide execution, retry, idempotency, and artifact-traceability guidance for batch ML operations.
- Expected output: Batch operations plan and lineage checklist.
- Risk level: medium

### Scenario 5

- Name: Feature freshness and training-serving skew handling
- Input: Investigate stale features and schema drift causing different behavior between training and online inference.
- Expected behavior: Tie feature issues to validation gates, freshness controls, and adjacent data-specialist escalation where needed.
- Expected output: Skew remediation plan and dependency handoff note.
- Risk level: high

### Scenario 6

- Name: Model monitoring and drift response
- Input: Respond to drift alerts and a drop in prediction quality after a new production release.
- Expected behavior: Define monitoring dimensions, alert thresholds, retraining versus rollback criteria, and human review steps.
- Expected output: Monitoring response plan and decision matrix.
- Risk level: high

### Scenario 7

- Name: Pipeline failure and recovery
- Input: A retraining pipeline fails mid-run after a dependency upgrade and partial artifacts were written.
- Expected behavior: Preserve evidence, isolate the failure stage, recommend safe rerun boundaries, and avoid unverifiable fixes.
- Expected output: Incident playbook and rerun boundary guidance.
- Risk level: high

### Scenario 8

- Name: Evidence-backed platform recommendation
- Input: Compare managed and self-managed MLOps approaches for a team needing registry, monitoring, approval gates, and moderate operator skill.
- Expected behavior: Return a source-backed tradeoff analysis with explicit assumptions and reasons for deferring adjacent infrastructure choices.
- Expected output: Platform tradeoff note with evidence links and assumptions.
- Risk level: medium

### Scenario 9

- Name: Governance and approval controls
- Input: Define approval and audit expectations for a regulated model deployment that requires human signoff and retained evidence.
- Expected behavior: Translate governance needs into operational gates, evidence retention, and escalation rules without drifting into legal advice.
- Expected output: Governance control matrix and audit-evidence checklist.
- Risk level: high

### Scenario 10

- Name: Out-of-scope rejection
- Input: Request combines model-architecture selection, feature engineering, UI implementation, and cloud-network design in one ask.
- Expected behavior: Reject adjacent specialties clearly and route to the orchestrator with specific handoff targets.
- Expected output: Scope decision with explicit refusal and routing.
- Risk level: low

### Scenario 11

- Name: Low-confidence escalation
- Input: Inputs omit baseline metrics, rollback target, tenant isolation rules, and approval authority.
- Expected behavior: State uncertainty, list missing operational facts, and refuse a deterministic release recommendation.
- Expected output: Escalation memo with required follow-up evidence.
- Risk level: high

### Scenario 12

- Name: Shared meta-agent fallback
- Input: A delegated source-policy or readiness meta-agent response is stale during a high-stakes MLOps review.
- Expected behavior: Apply specialist-owned fallback rules, mark confidence limits, and require human review before final guidance.
- Expected output: Fallback decision note with confidence limits.
- Risk level: medium
