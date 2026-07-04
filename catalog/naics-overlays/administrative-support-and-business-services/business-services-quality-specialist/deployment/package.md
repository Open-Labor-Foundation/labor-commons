# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route administrative support and business-services quality work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Runtime strategy: `specification-based`; no retained implementation is claimed by this package.
- Required secrets: none in the package itself. Tenant service records, work queues, QMS, CAPA, CRM, call-quality, document repositories, IAM, GRC, safety, and audit systems remain orchestrator-managed.
- Required task and boundary metadata:
  - release version and package path
  - queue slug and specialty boundary
  - target delivery level and validation profile
  - tenant service family, client SOW, service catalog, SOP, quality plan, acceptance criteria, hold or release rule, and approval matrix
  - escalation targets for service operations, quality owner, compliance, records, privacy, information security, HR, finance, legal, safety, formal audit, client approval, and executive owners
  - retrieval hooks for case management, service desk, workflow queue, QMS, CAPA, CRM, call-quality, document repository, BI/SLA dashboard, IAM, GRC, audit logs, and incident systems

## Isolation

- Tenant boundary: no cross-tenant sharing of client SOWs, service tickets, sampled cases, queue logs, call recordings, complaint records, QMS records, CAPA evidence, SLA reports, access-review evidence, audit findings, or service-organization control evidence.
- Knowledge boundary: public NAICS, BLS, ISO, GAO, NARA, AICPA, NIST, and OSHA baselines are shared; tenant SOWs, client-specific quality rules, acceptance criteria, defect taxonomies, approval matrices, and control evidence are injected only at request time.
- Adaptation policy:
  - allowed: tenant terminology, service catalog mappings, defect taxonomy, quality scorecards, call-quality platform labels, SLA dashboards, evidence paths, and escalation owner maps
  - prohibited: widening the lane into legal, HR, finance, safety, security-incident, formal audit, certification-body, executive approval, complete client operation, or final client-contract authority

## Operations

- Monitoring:
  - log dispatch decisions, in-scope classifications, blocked prerequisite decisions, hold or release posture, nonconformance summaries, CAPA escalations, incident escalations, adjacent-lane routing, source conflicts, and low-confidence returns
  - alert on repeated release-override requests, repeated finding-closure requests without review support, recurring defect patterns, stale source reviews, missing service-system retrieval hooks, and recurring evidence conflicts across systems of record
  - monitor requests that try to use the administrative support industry label as authority for complete client operations or single-service specialist work
- Logging:
  - record release version, tenant assumptions, client or business unit context, service family, source records reviewed, sampled items, evidence references, output shape, unresolved gaps, and routed owners
  - record whether the request involved inspection or review, hold or release, nonconformance, complaint, CAPA, incident, service-organization control evidence, or formal audit boundary handling
- Rollback path:
  - disable the current specialist release
  - route business-services quality requests to orchestrator-safe fallback handling or a prior validated artifact bundle
  - preserve open holds, nonconformances, CAPA items, and incident escalations for human owner review
  - restore the prior package bundle and re-run the spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed quality and assurance specialist for administrative support and business-services work.
- `commons-crew` materialization requires task metadata, specialty boundary metadata, output-shape metadata, source freshness metadata, tenant retrieval dependencies, system-of-record hooks, and adjacent-owner routing rules.
- Regulated-lane caveats: the specialist may prepare evidence-backed recommendations and escalation packages, but it cannot provide legal advice, formal audit opinion, SOC or ISO certification, OSHA recordability determination, privacy breach determination, HR placement decision, finance approval, safety-critical signoff, data-security incident response, or executive policy override.
- Health checks should confirm manifest load success, artifact presence, functionality coverage, evaluation result consistency, readiness evidence, source freshness dates, and retrieval metadata availability.
