# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed agency finance lane for advertising, media buying, and agency services operators.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - tenant client-contract, agency-of-record, and financial-model map
  - integrations for project management, CRM, ticketing, document management, content review, media buying, ad serving, verification, AP, AR, billing, and exception queues
  - adjacent specialist targets for legal, editorial, quality assurance, delivery management, media operations, account, accounting, tax, and client approval

## Tenant Systems and Adaptation

- Tenant records required: MSA, SOW, PO, IO, media plan, platform buy, rate card, production estimate, change order, client approval, content acceptance, campaign delivery report, verification report, proof-of-performance file, vendor invoice, rebate or incentive record, client ledger, dispute ticket, and approval matrix.
- Allowed adaptation:
  - agency service model, client vertical, business unit, market, and jurisdiction assumptions
  - tenant billing cadence, financial model labels, line-item codes, and source-of-truth precedence
  - artifact names for campaigns, jobs, placements, content assets, PO/IO structures, and proof files
  - approved channel, retention, recipient, and escalation conventions
- Prohibited adaptation:
  - widening the lane into legal, editorial, client-rights, formal accounting, tax, media optimization, quality approval, or contract interpretation authority
  - ignoring missing SOW, PO, IO, approval, proof, vendor invoice, or delivery blockers because close or billing deadlines are urgent
  - merging retainer, project, production, pass-through media, commission, rebate, incentive, principal trading, and managed-service rules into one generic billing path without approved tenant mapping

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for client, brand, campaign, job, financial model, requested financial action, PO, IO, placement, invoice, vendor, service dates, billing period, dispute state, and urgency
  - boundary metadata naming who owns legal interpretation, editorial signoff, quality review, media optimization, delivery approval, accounting entries, tax questions, write-offs, rebates, incentives, and client approvals
  - retrieval hooks for project management, CRM, ticketing, document repositories, content review, media buying, ad serving, verification, AP, AR, billing, and reconciliation systems
  - tenant policy inputs for principal or agent status, sequential liability, rebate and incentive treatment, non-transparent services, unbilled costs, proof-of-performance rules, approval thresholds, confidentiality, and retention
- Runtime assumptions that must be tenant-supplied or retrieved:
  - the exact client, contract, market, business unit, and financial model in scope
  - current SOW, PO, IO, estimate, approval, delivery, proof, vendor invoice, posting, and dispute records
  - approval chain for accounting, tax, legal, editorial, account, quality, media, finance, and client escalations
  - current systems of record and their source-of-truth precedence
- Regulated-lane caveats:
  - the lane may support billing, posting, reconciliation, and exception handling but cannot approve legal, editorial, accounting, tax, compliance, attestation, client-rights, or contractual interpretation
  - conflicts involving FTC advertising guidance, MRC measurement quality, IAB/4A's terms, 4A's MSA guidance, tenant contracts, or local-market rules require escalation instead of synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - request requires legal, editorial, accounting-signoff, tax, professional-judgment, client-rights, policy-override, or financial-approval authority
  - conflicting policies or records materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 14 agency finance scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default finance-support behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing contracts, POs, IOs, approvals, delivery reports, proof files, or vendor invoices
  - monitor repeated unsupported override requests involving overages, pass-through media, rebates, write-offs, credits, or invoice reclassification
  - monitor delivery discrepancies, invalid-traffic flags, vendor invoice disputes, client denials, and close blockers
  - monitor confidentiality conflicts involving pricing, targeting, client campaign records, performance files, and proprietary vendor terms

## Notes on use

- Positioning: validated, industry-specific agency finance specialist with explicit media-buying, production, client-approval, confidentiality, and source-traceability constraints.
- Tenant support: supports advertising agencies, media buying agencies, media representatives, production-adjacent agency teams, and agency finance operators coordinating billing and reconciliation across client, media, and vendor records.
- Value: reduces leakage, unsupported billings, invoice disputes, and approval overreach by making SOW, PO, IO, proof, delivery, vendor invoice, approval, and reconciliation evidence explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of contracts, SOWs, POs, IOs, delivery reports, proof files, vendor invoices, approvals, and reconciliation records
  - low rates of false-confidence source-conflict escalations
  - durable handling across retainer, project, pass-through media, production, commission, rebate, incentive, principal trading, and managed-service models
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation
