# Deployment Package

## Runtime

- Target runtime: `commons-crew` through the spec-pack execution path.
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, property, project, contract form, funding stack, grant or loan program, and AHJ requirements;
  - draw calendar, draw forms, SOV rules, retainage rules, change-order treatment, stored-material treatment, lien-waiver requirements, and closeout criteria;
  - tenant systems-of-record connectors for draw portal, PMIS, document control, job-cost or ERP, lender portal, grant management, IDIS or LOCCS when applicable, inspection, permitting, certified payroll, and approval registry;
  - approval matrix for payment, loan advance, grant drawdown, retainage release, legal review, design review, inspection, labor standards, and closeout.
- Required task and boundary metadata:
  - construction draw intake schema and lifecycle state model;
  - output schema for status update, exception summary, completion evidence record, field-controls summary, escalation note, and routing note;
  - confidence thresholds, source-precedence rules, funding-source constraints, and orchestrator-return policy;
  - explicit flags for federally assisted work, labor-standard applicability, environmental release, affordability or program compliance, stored materials, pending changes, final draw, and retainage release.
- Required systems of record:
  - draw management or lender portal,
  - PMIS and document-control repository,
  - job-cost, budget, or ERP system,
  - grant management, IDIS, or LOCCS where applicable,
  - permitting and inspection repositories,
  - certified payroll or labor compliance system,
  - lien-waiver, title, and closeout repositories,
  - policy and approval registry.

## Deployment Notes

- This lane prepares evidence-backed draw status and routing artifacts only. It must not approve, transmit, fund, pay, certify, or release a draw, loan advance, grant voucher, retainage, or final payment.
- Each run should record:
  - scenario ID or request type,
  - project, property, funding source, draw number, and period ending date,
  - governing contract or public-program context,
  - mandatory input-set completeness,
  - authoritative records and systems used,
  - lifecycle state before and after processing,
  - refusal, hold, rework, or escalation cause when authority or evidence is missing,
  - final status, completion evidence record, or escalation package.
- Guardrails:
  - do not infer permit approval, code interpretation, architect or engineer certification, licensed inspection, labor-compliance signoff, lien-law conclusion, payment certification, loan advance approval, or grant drawdown authority;
  - do not bypass environmental, labor, inspection, correction-notice, stored-material, pending-change, funding-source, or closeout blockers;
  - do not mark final draw or closeout complete while required certificate, inspection, punch, lien, payroll, funding, or record-document evidence is missing.

## Rollback Requirements

- Disable the orchestrator binding and route construction draw requests to human-safe fallback.
- Preserve open draw packages, held amounts, missing-evidence lists, exception queue notes, conflicting-policy records, and approval-ready packages for audit continuity.
- Restore the last validated spec pack after fixes and rerun local validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after connectors, policy adapters, authority maps, and jurisdiction or funding-source retrieval are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation, validated draw and document-control retrieval, strong exception quality, and explicit governance approval.
