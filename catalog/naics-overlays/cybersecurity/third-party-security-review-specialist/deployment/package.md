# Deployment Package

## Runtime

- Deployment model: validated spec pack consumed by a dispatcher or future materializer.
- Runtime posture: `specification-based`.
- Canonical definition: `manifest.yaml`, `evaluation/research-summary.json`, `evaluation/functionality-map.json`, `evaluation/scenarios.md`, `evaluation/results.json`, readiness evidence, deployment notes, and commercialization notes.
- retained implementation: Not claimed. Generated implementation storage requires frequent-use promotion evidence and separate human approval.
- Required secrets: None in the baseline package. Tenant integrations must use approved vault references and tenant-scoped credentials.

## Required Runtime Inputs

- Procurement intake, vendor master, supplier owner, sourcing stage, renewal or expansion trigger, and approved supplier list status.
- Third-party questionnaire responses, supporting artifacts, SOC 2 or ISO evidence, bridge letters, control matrices, management responses, and evidence indexes.
- Contract, DPA, security addendum, SLA, incident notification, audit rights, subprocessor, vulnerability remediation, data location, and exit terms.
- SBOM, component inventory, SCA report, vendor vulnerability report, CVE/NVD references, CISA KEV check, patch posture, workaround evidence, and supplier remediation commitments.
- Architecture and data-flow context, including data classification, identity/access scope, network exposure, integration criticality, availability dependency, and business owner.
- Tenant third-party risk policy, procurement policy, source-precedence rule, risk appetite, exception approval matrix, quality or release gates, legal/privacy routing, and risk acceptance workflow.
- Public source baseline freshness for NIST C-SCRM, NIST CSF, NIST control and SSDF guidance, CISA software acquisition, CISA SBOM, CISA KEV, CIS service-provider management, and OWASP supply-chain guidance.

## Tenant Isolation And Adaptation

- One tenant per runtime context.
- No cross-tenant persistence of supplier evidence, questionnaires, assurance reports, contracts, data flows, vendor issues, SBOMs, risk scores, exceptions, or recommendations.
- Tenant adaptation is configuration and retrieval driven by default.
- Approved tuning requires change control, human signoff, rollback plan, and evidence that the tuning preserves public-source caveats, refusal triggers, and approval boundaries.
- Tenant policy may adjust thresholds, source precedence, artifact naming, approval matrices, and routing, but may not suppress KEV, breach, privacy, contractual, legal, regulatory, quality-release, or procurement-approval caveats without recorded authority.

## Materialization Requirements

- Enforce hard boundary checks before generating guidance or calling tenant tools.
- Retrieve tenant systems of record before risk scoring when missing facts could change supplier status, go-live recommendation, security hold, shortage/exception escalation, or approval dependency.
- Emit source references, evidence age, artifact lineage, assurance scope, confidence tags, assumptions, refusal or escalation reasons, and approval-required fields with each output.
- Block actions that execute penetration testing, incident response, production changes, supplier approval, spend approval, contract approval, residual-risk acceptance, quality hold release, formal audit attestation, legal/privacy determination, or runtime operations.
- Preserve output shapes: structured third-party risk assessment, go-live recommendation, control gap list, vendor/procurement action note, availability or supply summary, shortage or exception escalation, contract security gap report, SBOM/dependency risk review, continuous reassessment trigger, evidence traceability summary, and adjacent-specialist handoff.

## Monitoring And Logging

- Monitor authority-source review dates, CISA KEV sync age, SBOM age, assurance report period, questionnaire age, vendor remediation deadlines, scenario suite version, functionality coverage status, source-precedence gaps, and boundary refusal rates.
- Log recommendation ID, tenant ID, package version, supplier ID, procurement state, scenario or ability family, source baseline version, confidence state, assumptions, refusal or escalation decision, and approval-required fields.
- Redact confidential supplier details, contract text, personal data, hostnames, account IDs, ticket links, and tenant-specific evidence from non-tenant logs.
- Alert when source freshness exceeds decay policy, supplier evidence is stale, evaluation coverage is incomplete, human verification lapses, low-confidence escalations rise unexpectedly, or a material boundary bypass is detected.

## Rollback

- Roll back by reverting to the previous package revision and disabling any newly materialized runtime configuration.
- Freeze tenant-specific tuning and restore the last known-good source-precedence, scoring, exception, and approval-routing configuration.
- Route all supplier recommendations to orchestrator or human reviewer until source freshness, scenario results, functionality coverage, and refusal behavior are revalidated.
- If a boundary failure is found, disable validated routing for this lane until the manifest, functionality map, research summary, and scenario suite are corrected and re-reviewed.

## Promotion Criteria For Trusted Build

- The lane is called frequently enough that retained generated implementation maintenance is justified by usage telemetry.
- Materialized outputs remain reproducible from the spec pack and do not become the canonical definition.
- Regression suite includes tenant isolation, source refresh, supplier evidence gaps, SBOM/KEV handling, contract gap handling, shortage/hold escalation, approval-boundary refusal, low-confidence escalation, source conflict, and output-fidelity tests.
- Human review approves operational logging, rollback, source-refresh automation, tenant retrieval security, and boundary controls.
- Production telemetry shows no unresolved boundary failures, no unsupported final approvals, no cross-tenant leakage, and stable input/output contracts.
