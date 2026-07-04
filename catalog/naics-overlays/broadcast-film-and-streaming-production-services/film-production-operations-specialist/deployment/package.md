# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route film-production execution work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant permit, payroll, production-management, signatory, safety, and reporting connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - jurisdiction and permit-authority resolver
  - retrieval hooks for scheduling, call-sheet, permit, insurance, signatory, payroll, compliance, and daily-report systems
  - escalation targets for assistant directing, locations, payroll, labor, safety, legal, and post-production owners
  - tenant-specific maps for local permit rules, studio or streamer operating policies, signatory workflows, payroll deadlines, and completion-evidence requirements

## Isolation

- Tenant boundary: no cross-tenant sharing of call sheets, stripboards, permits, insurance files, signatory records, payroll data, compliance reports, safety notes, or departmental reports.
- Knowledge boundary: DGA, SAG-AFTRA, FilmLA, California Film Commission, and Contract Services public baselines are shared; tenant-specific schedule tools, permit packets, performer files, payroll systems, location contracts, and wrap repositories are injected only at request time.
- Adaptation policy:
  - allowed: terminology, jurisdiction routing, connector mapping, local contact names, report-template labels, and tenant-approved handoff language
  - prohibited: widening the lane into creative signoff, stunt or special-effects authority, legal interpretation, permit override authority, payroll settlement, or final delivery authority

## Operations

- Monitoring:
  - log dispatch decisions, readiness transitions, blocked starts, call-sheet mismatches, permit exceptions, signatory gaps, special-activity escalations, unsupported completion attempts, and low-confidence returns
  - alert on stale source reviews, repeated permit-release failures, repeated missing Exhibit G or DPR evidence, repeated training-proof gaps, and repeated attempts to bypass safety or payroll boundaries
  - monitor for requests that incorrectly seek creative, legal, payroll, or post-production authority from the lane
- Logging:
  - record release version, tenant assumptions, jurisdiction, production type, signatory posture, permit numbers, missing evidence, and routed owners
  - record whether the request involved prep readiness, active shoot-day execution, company move or weather exception, special activity, blocked performer start, unsupported completion, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route film-production-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry broadcast-film-and-streaming-production-services --agent film-production-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed film production operations specialist for principal-photography readiness, permit and signatory gating, active-day control, exception packaging, and wrap evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying jurisdiction, production type, signatory posture, schedule revision, permit scope, requested disposition, and timing sensitivity
  - boundary metadata identifying directing, assistant-directing, locations, payroll, labor, safety, legal, and post-production owners
  - retrieval dependencies for call-sheet, stripboard, permit, insurance, signatory, payroll, compliance, and daily-report artifacts
  - tenant overlays for streamer or studio policies, permit office variations, payroll handling, signatory contacts, and wrap evidence rules
- Regulated-lane caveats:
  - permit law, union agreements, safety-sensitive activities, and jurisdiction-specific notice or closure rules materially change how a shoot day may proceed
  - public DGA, SAG-AFTRA, film-office, and Contract Services sources define workflow baselines but do not replace tenant permit packets, payroll instructions, legal review, or local property-owner conditions
  - runtime must refuse or return to orchestrator when creative signoff, legal interpretation, stunt or special-effects authority, permit override authority, payroll settlement, or final post-production approval is required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
