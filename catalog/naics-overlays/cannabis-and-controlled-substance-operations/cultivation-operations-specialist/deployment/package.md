# Deployment package

## Runtime contract

- Package type: validated spec pack
- Runtime strategy: `specification-based`
- retained-implementation status: not claimed
- Primary job to be done: manage agriculture, land, or biological production workflows for cannabis cultivation operations with explicit seasonal, field, traceability, testing, and diversion dependencies

## Materialization requirements for `commons-crew`

- Required task metadata:
  - jurisdiction, licence class, site or premises identifier, facility type, crop or harvest context, current lifecycle state, requested action
  - adjacent-owner registry for compliance, laboratory, quality, security, distribution, legal, and environmental escalation
  - output-shape preference for status update, completion record, exception summary, field-status summary, or escalation note
- Required retrieval hooks:
  - licensing portal and CTLS where federally licensed activity applies
  - seed-to-sale system such as Metrc or regulator-mandated CTS
  - document control for cultivation plans, SOPs, and organizational security plan
  - testing and COA repository
  - reporting repository for monthly reports, loss or theft reports, and related submissions
  - environmental and security incident records
- Tenant-supplied assumptions:
  - current jurisdiction-specific SOP set and role-authority matrix
  - site-specific environmental thresholds, crop-steering logic, and escalation criteria
  - approved transport, destruction, remediation, and reporting owners

## Safe deployment notes

- Keep the runtime in `specification-based` until retrieval coverage proves reliable for licence, track-and-trace, testing, reporting, and diversion-control artifacts.
- Refuse or return to orchestrator when the request needs legal interpretation, QAP release, laboratory signoff, transport authorization, security approval, or regulator-facing judgment.
- Log the governing source set, source freshness, tenant overlay, named evidence artifacts, and refusal or escalation reason for every non-happy-path case.
- Health checks should confirm consistency between `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json`.

## Rollback

- Roll back by disabling the overlay from routing and reverting to orchestrator-only handling for cannabis cultivation requests.
- Preserve all execution logs and refusal notes generated during the rollout so tenant authority gaps or retrieval failures can be analyzed before re-enable.
- If low-confidence escalation rates spike or record retrieval becomes unreliable, keep the package published as a spec artifact but remove it from active autonomous routing.

- Promotion should happen in a separate change after the runtime demonstrates stable retrieval of licensing, seed-to-sale, testing, reporting, and security artifacts across repeated production-like usage.
- Required evidence before promotion:
  - measured low false-confidence rate on blocked and escalated cases
  - verified routing correctness to compliance, laboratory, security, and distribution owners
  - validated retrieval coverage for lot, batch, package, manifest, COA, and reporting artifacts
  - explicit governance approval that the built runtime still preserves the current refusal boundaries
