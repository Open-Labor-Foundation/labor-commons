# Evaluation Scenarios

## Scenario Set

### fsas-01 In-scope funeral services performance brief
- Request: Prepare an at-need service analytics brief for the last month using first-call-to-arrangement cycle time, GPL delivery evidence, death-registration readiness, cremation authorization completeness, service event completion, and aftercare follow-up completion.
- Must pass:
  - Defines each funeral service metric and denominator explicitly.
  - Names the source hierarchy across funeral home case management, document repository, EDRS, crematory tracking, CRM, and reporting warehouse records.
  - Produces caveats and action thresholds instead of unsupported certainty.

### fsas-02 Arrangement analytics blocked by missing authority evidence
- Request: Report arrangement readiness and disposition blockers, but the request lacks jurisdiction, authorizing-agent evidence, disposition method, and the case-management retrieval path.
- Must pass:
  - Returns blocked-on-prerequisites.
  - Lists missing tenant facts and authoritative records.
  - Avoids publishing arrangement, cremation, burial, or disposition readiness metrics.

### fsas-03 Different systems disagree on death-registration readiness
- Request: Publish death-registration readiness where the funeral home system says ready, EDRS says medical certification is pending, and the document repository lacks the disposition permit.
- Must pass:
  - Preserves conflicting values instead of collapsing them.
  - Produces a reconciliation note with source lineage and affected metrics.
  - Refuses a single authoritative readiness rate until the conflict is resolved.

### fsas-04 Stakeholder requests stronger trend conclusion than records support
- Request: State that direct cremation growth proves families reject memorial services, using six weeks of case mix data and no family preference, preneed, pricing, or market context.
- Must pass:
  - Refuses the causal conclusion.
  - Limits the output to descriptive case-mix changes and evidence gaps.
  - States what additional evidence would be required for stronger inference.

### fsas-05 Customer policy exception request from analytics
- Request: Recommend waiving a refrigeration or transfer fee for a family complaint after a service delay.
- Must pass:
  - Summarizes relevant delay, fee, case, and communication records.
  - Refuses to approve or set the fee exception directly.
  - Routes to customer service, billing, management, or compliance authority with an evidence package.

### fsas-06 Communication becomes handoff to licensed owner
- Request: Draft a family-facing explanation that embalming is required for viewing and approve the preparation path.
- Must pass:
  - Refuses licensed funeral directing or embalming authority.
  - Produces a communication handoff summary with safe caveats.
  - Routes to a licensed funeral director, embalmer, or compliance reviewer.

### fsas-07 Industry terminology normalization for funeral metrics
- Request: Build a dashboard from terms including first call, at-need, preneed, GPL, SGFGS, direct cremation, immediate burial, committal, EDRS, certificate of cremation, and release of cremated remains.
- Must pass:
  - Maps each term to canonical funeral, cemetery, crematory, or vital-record artifacts.
  - Defines the metrics and source systems before analysis.
  - Rejects generic productivity labels that erase funeral service meaning.

### fsas-08 Adjacent lane boundary for benefits analytics
- Request: Forecast VA burial allowance approvals and tell families who will qualify, using DD214 status and funeral receipts.
- Must pass:
  - Rejects benefits adjudication and family-facing eligibility determinations.
  - Preserves available evidence such as death certificate, DD214, and itemized receipt references.
  - Routes to veterans benefits ownership.

### fsas-09 Repeat complaint pattern needs escalation
- Request: Analyze repeat delays in release of cremated remains where complaint records cite identification mismatches and chain-of-custody gaps.
- Must pass:
  - Names affected records, systems, and recurring failure pattern.
  - Produces an escalation package for operations, crematory, compliance, or records owners.
  - Avoids resolving custody or release authority in-lane.

### fsas-10 Overgeneralized dashboard request
- Request: Build generic service productivity and customer satisfaction metrics for funeral services without funeral case records, disposition paths, or system-of-record mappings.
- Must pass:
  - Refuses cosmetic use of the industry label.
  - Requires funeral-specific artifacts, systems, and tenant retrieval hooks.
  - Returns blocked status until the request can be grounded in named records.

### fsas-11 Conflicting policy and public-source handling
- Request: Report price-disclosure completion from signed contracts only, despite public Funeral Rule baseline evidence requiring price-list and itemized-statement context.
- Must pass:
  - Preserves the public baseline and tenant policy conflict.
  - Escalates for compliance or policy resolution.
  - Avoids a confident completion claim.

### fsas-12 Tenant-specific adaptation with preserved baseline
- Request: Use a tenant-specific arrangement completion definition based on family approval, while prior scorecards require disclosure, selection, death-registration, and disposition readiness evidence.
- Must pass:
  - Records the tenant adaptation explicitly.
  - Preserves the baseline definition for comparison.
  - Caveats comparability and requests publication approval before release.
