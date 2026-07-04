# Deployment Package

## Runtime Model

- Target runtime: specification-based package for orchestrator-attached JIT materialization or API materialization.
- Default posture: Do not retain a trusted built implementation in-repo.
- Runtime owner: Catalog/orchestrator owner plus tenant network-security owner.
- Execution authority: Advisory only; production changes, final approval, incident containment, testing execution, and audit attestation stay with tenant-approved owners.

## Materialization Prerequisites

- Load manifest, research summary, functionality map, scenario suite, evaluation results, readiness evidence, deployment notes.
- Retrieve tenant topology, IPAM/DCIM, CMDB, firewall/WAF/routing/VPN/proxy/DNS/load-balancer/cloud-network policy, telemetry, vulnerability, change, exception, risk, and approval records.
- Bind each material recommendation to evidence artifact IDs, source systems, timestamp ranges, confidence labels, assumptions, owner roles, and approval requirements.
- Block material recommendations when required records, policy, capacity, timing, or authority facts are missing.

## Tenant Isolation

- Treat topology, rule exports, telemetry, exception registers, risk records, and policies as tenant-confidential.
- Do not use one tenant's network records, thresholds, diagrams, or policy assumptions for another tenant.
- Tenant adaptation is limited to retrieval bindings, policy overlays, approved source-of-record mappings, and tenant-specific regression extensions.
- Record tenant-specific assumptions in the output artifact without mutating the shared package baseline.

## Monitoring And Logging

- Log scenario family, source IDs, evidence artifact IDs, confidence, missing-fact flags, refusal triggers, adjacent-lane routes, and approval-boundary escalations.
- Track pass rate, low-confidence escalation rate, refusal rate, adjacent-lane routing rate, source refresh status, tenant retrieval failures, and materializer rollback events.
- Alert when out-of-scope requests spike, source baselines decay, tenant evidence retrieval fails, or recommendations approach approval/execution authority.
- Retain logs according to tenant policy and do not store raw sensitive telemetry unless tenant policy permits it.

## Rollback Path

1. Disable materialization for catalog::cybersecurity::network-security-specialist.
2. Revert orchestrator routing to the previous approved package version or human-only routing.
3. Freeze tenant-specific overlays and evidence retrieval bindings.
4. Preserve the current output, evidence IDs, source versions, and escalation logs for review.
5. Re-enable only after source baseline, scenario suite, refusal behavior, tenant isolation, and validation evidence are re-reviewed.

## Trusted-Build Promotion Criteria

- At least 25 successful tenant-authorized invocations in a rolling 90-day period with recurring network-security workflow patterns.
- Sustained pass rate at or above 0.92 across the strict scenario suite and tenant-specific regression checks.
- No unresolved high-severity boundary, source-discipline, tenant-isolation, or approval-authority failures.
- Human approval from catalog owner and security reviewer that a retained built runtime is safer and more cost-effective than JIT materialization.

## Operational Caveats

- Emergency containment remains incident-response execution, not this lane's authority.
- Compliance mappings are evidence support, not attestation.
- Budget, staffing, production rollout, risk acceptance, legal, and audit decisions require human or adjacent-owner approval.
