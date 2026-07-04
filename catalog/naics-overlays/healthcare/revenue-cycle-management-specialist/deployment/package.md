# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed healthcare revenue cycle management lane for prioritization, constraint assessment, allocation recommendation, root-cause split, and cross-lane escalation.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - tenant service model, jurisdiction, business unit, program, product, facility, provider type, service setting, and payer mix
  - payer, plan, coverage, eligibility, referral, authorization, documentation, timely-filing, appeal-window, denial, AR, cash-posting, collections, and patient-balance context
  - approved priority matrix, tie-break rules, productivity baselines, staffing capacity, owner availability, approval thresholds, and source-of-truth hierarchy
  - integrations for RCM command-center dashboards, EHR, practice management, access, authorization, coding, billing, clearinghouse, payer portal, denial management, AR, collections, remittance, cash-posting, document, approval, and audit systems
  - adjacent specialist targets for patient access, healthcare billing, coding coordination, payer operations, denials and appeals, cash posting, AR follow-up, collections, privacy, compliance, finance, clinical documentation, utilization management, licensed clinical review, accounting, and legal review

## Tenant Systems And Adaptation

- Tenant records required: access reports, eligibility records, referral records, authorization records, documentation status, coding backlogs, charge capture reports, claim edits, billing work queues, clearinghouse and payer status, denial inventories, CARC and RARC detail, AR aging, collections holds, 835 ERA, EFT, EOB, cash-posting batches, patient ledgers, productivity reports, leakage summaries, root-cause reports, owner maps, priority rules, approval matrices, policy extracts, and audit logs.
- Allowed adaptation:
  - queue labels, service-line terms, owner names, and command-center dashboard fields
  - payer-mix groupings, denial category taxonomy, aging buckets, productivity baselines, and leakage definitions
  - priority matrix, tie-break rules, refresh cadence, escalation owner map, and source-of-truth precedence
  - capacity assumptions, work-queue thresholds, and reporting cadence when tenant approved
- Prohibited adaptation:
  - widening the lane into final staffing, budget, operational, write-off, refund, waiver, collections, policy, appeal, coding, clinical, payer-interpretation, privacy, compliance, accounting, tax, or legal authority
  - ignoring missing eligibility, referral, authorization, documentation, claim, remittance, denial, source-of-truth, PHI, or approval blockers because revenue impact is high
  - treating Medicare, Medicare Advantage, Medicaid, commercial, workers compensation, self-pay, professional, institutional, facility, and ambulatory workflows as interchangeable without tenant-approved mapping
  - weakening minimum-necessary PHI handling or approved-channel requirements

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for patient or member, encounter, account, payer, plan, product, facility, provider type, service setting, queue, requested planning action, urgency, denial state, aging state, cash impact, and patient/member impact posture
  - boundary metadata naming who owns access, eligibility, referral, authorization, documentation, coding, billing, denial, payer follow-up, cash posting, AR, collections, privacy, compliance, finance, utilization management, clinical review, accounting, legal review, staffing approval, budget approval, write-off approval, refund approval, and executive approval
  - retrieval hooks for all RCM systems of record and their source-of-truth precedence
  - tenant policy inputs for priority rules, tie-breaks, capacity limits, productivity targets, payer hierarchy, timely filing, appeal windows, authorization requirements, referral workflow, denial ownership, privacy channel rules, write-off thresholds, refund thresholds, collections holds, and approval routing
- Runtime assumptions that must be tenant-supplied or retrieved:
  - governing jurisdiction, payer, plan, contract, service line, provider type, facility type, and service setting
  - current queue volumes, aging, denial trends, cash impact, owner capacity, productivity, and deadlines
  - current eligibility, referral, authorization, documentation, coding, claim, remittance, denial, AR, collections, cash-posting, patient-balance, and approval records
  - current systems of record, record locations, and source precedence
  - current approval chain for staffing, budget, write-offs, refunds, collections, policy exceptions, appeals, privacy, compliance, finance, clinical review, payer interpretation, legal review, and executive decisions
- Regulated-lane caveats:
  - the lane may support administrative RCM planning but cannot select codes, rewrite clinical records, determine medical necessity, approve PHI disclosure, certify appeals, interpret payer policy, approve staffing or budget, approve write-offs or refunds, finalize accounting treatment, or provide legal advice
  - any conflict involving CMS guidance, payer contracts, state Medicaid rules, MAC articles, privacy rules, tenant policy, dashboard data, or source records requires escalation rather than synthesis
  - PHI handling must stay inside minimum-necessary payment or healthcare-operations needs and tenant-approved channels
- Refusal or orchestrator-return conditions:
  - required tenant facts, priority rules, approval thresholds, or authoritative source context are missing
  - required system-of-record evidence cannot be retrieved or materially conflicts
  - the request requires clinical, coding, payer-policy, privacy, legal, compliance, finance, accounting, collections, staffing, budget, write-off, refund, or executive approval authority
  - unresolved prioritization could create patient or member harm, PHI exposure, unsupported collections activity, revenue leakage, claim denial, or compliance exposure

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 healthcare RCM scenarios
  - research summary, readiness evidence, and functionality map present
  - orchestrator routes and adjacent-owner registry configured
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default revenue-cycle or operations behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing payer, plan, service setting, source-system, priority-rule, capacity, authorization, referral, documentation, denial, AR, remittance, cash-posting, privacy, or approval facts
  - monitor unsupported approval requests involving staffing, budget, overtime, write-offs, refunds, waivers, collections changes, appeal strategy, policy exceptions, and final operational decisions
  - monitor false-confidence risks across access, coding, billing, payer, denial, AR, collections, posting, privacy, compliance, finance, and clinical boundaries
  - monitor PHI-sensitive asks, clinical or coding boundary requests, payer-policy interpretation attempts, source conflicts, and tenant adaptation drift

## Notes on use

- Positioning: validated healthcare RCM orchestration specialist for evidence-backed queue prioritization, root-cause split, capacity planning, and cross-lane escalation.
- Tenant support: supports provider organizations, hospitals, ambulatory groups, practices, billing offices, and revenue-cycle teams coordinating access, coding, billing, denial, AR, cash-posting, collections, compliance, and finance priorities.
- Value: reduces revenue leakage, avoidable denial rework, patient-balance errors, PHI exposure, and authority overreach by making RCM evidence, prerequisites, dependencies, and approval boundaries explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of RCM dashboards, eligibility, referral, authorization, documentation, coding, billing, denial, AR, collections, remittance, cash-posting, patient-ledger, policy, approval, and audit records
  - low rates of false-confidence payer, clinical, privacy, coding, authorization, appeal, source-conflict, and approval-boundary escalations
  - durable handling across payer mixes, facility types, service settings, claim types, queue labels, provider organizations, and tenant work queues
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation with tested connectors, PHI controls, tenant policy retrieval, audit logging, and rollback support
