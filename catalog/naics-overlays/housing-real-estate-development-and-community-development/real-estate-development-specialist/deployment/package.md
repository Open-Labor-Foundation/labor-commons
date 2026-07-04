# Deployment Package

## Runtime

- Target runtime: `commons-crew` through the spec-pack execution path.
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, project type, property type, sponsor, owner, parcel, site address, funding stack, development phase, and local AHJ or entitlement pathway;
  - site-control posture, title and survey requirements, due-diligence checklist, zoning and entitlement milestones, community approval requirements, environmental review posture, acquisition and relocation flags, funding conditions, closing checklist, and construction-start handoff criteria;
  - tenant systems-of-record connectors for development pipeline, document management, GIS or parcel data, title and survey repository, entitlement and permitting portal, financial model, grants or housing finance platform, environmental review repository, relocation files, PMIS, and approval registry;
  - authority matrix for acquisition, legal, title, zoning, entitlement, environmental review, appraisal, market study, underwriting, financing, tax credit, relocation, permitting, design, engineering, construction, closing, and executive approvals.
- Required task and boundary metadata:
  - real estate development intake schema and lifecycle state model;
  - output schema for status update, completion or fulfillment record, exception summary, program or portfolio status summary, escalation note, evidence checklist, and routing note;
  - confidence thresholds, source-precedence rules, jurisdictional constraints, public-program constraints, and orchestrator-return policy;
  - explicit flags for HUD-assisted funding, HOME, CDBG, FHA multifamily, LIHTC, public land, land bank, scattered-site acquisition, occupied property, relocation risk, environmental review, entitlement condition, closing condition, and construction-start readiness.
- Required systems of record:
  - development pipeline or portfolio management system,
  - document management and deal room repository,
  - GIS, parcel, assessor, land bank, or property records system,
  - title, survey, and closing checklist repository,
  - entitlement, planning, permitting, and AHJ portal,
  - financial model, underwriting, budget, and sources-and-uses repository,
  - grant, housing finance, tax credit, bond, loan, or public funding system,
  - environmental review record repository,
  - acquisition, relocation, occupant, and real property file repository,
  - PMIS, construction-start handoff, and closeout repository,
  - tenant policy, authority, approval, and investment committee registry.

## Deployment Notes

- This lane prepares evidence-backed development status, exception, completion, portfolio, and routing artifacts only. It must not approve acquisition, sale, zoning, entitlement, environmental clearance, appraisal value, underwriting, financing, tax credits, closing, demolition, construction start, relocation benefit, design, engineering, code, permit, legal, policy, or executive decisions.
- Each run should record:
  - scenario ID or request type,
  - project, sponsor, owner, parcel, site, funding stack, jurisdiction, lifecycle state, and requested action,
  - governing program, deal, public funding, entitlement, or closing context,
  - mandatory input-set completeness,
  - authoritative records and systems used,
  - lifecycle state before and after processing,
  - refusal, hold, rework, or escalation cause when authority or evidence is missing,
  - final status, completion evidence record, portfolio summary, or escalation package.
- Guardrails:
  - do not infer legal sufficiency, title clearance, zoning feasibility, entitlement approval, environmental clearance, appraisal value, underwriting approval, acquisition approval, relocation entitlement, tax-credit eligibility, financing approval, design sufficiency, code compliance, construction start, or executive investment approval;
  - do not bypass site-control, parcel identity, title, survey, entitlement, environmental, funding, relocation, permit, closing, authority, or construction-start blockers;
  - do not mark closing readiness, construction-start handoff, public-program condition, or development completion complete while required source records, owner approvals, or evidence bundles are missing.

## Rollback Requirements

- Disable the orchestrator binding and route real estate development requests to human-safe fallback.
- Preserve open development packages, held milestones, missing-evidence lists, exception queue notes, conflicting-policy records, and approval-ready packages for audit continuity.
- Restore the last validated spec pack after fixes and rerun local validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after connectors, policy adapters, authority maps, jurisdiction or funding-source retrieval, and source-of-truth precedence are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation, validated development-system and document-control retrieval, strong exception quality, audit-ready completion evidence, and explicit governance approval.
