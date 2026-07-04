# Deployment Package

## Delivery State

This is a validated spec pack for the government and public sector
interagency operations specialist. Runtime strategy remains `specification-based`.

The package can be used by `commons-crew` as a source specification for
materialization, but it is not a retained implementation. A separate build,
runtime test suite, and approval PR are required before default runtime use.

## Deployment Prerequisites

- Confirm tenant jurisdiction, public program, statute, agency policy, MOU or
  interagency agreement, authority matrix, and due-process constraints.
- Configure retrieval for case management, document management, correspondence
  tracking, records retention, public-records, privacy or access, procurement
  or IAA, financial, workflow, and audit systems.
- Load tenant handoff rules, receiving-owner map, escalation matrix, closure
  criteria, stale-owner thresholds, and required artifact checklists.
- Confirm adjacent routing for program adjudication, legal, public records,
  procurement, audit, records retention, privacy and access governance, and
  fiscal approval owners.
- Require human review for rights-sensitive, eligibility-sensitive,
  enforcement, public-records, procurement, fiscal, legal, policy-conflict, or
  source-conflict cases.

## Rollout Notes

1. Deploy as specification-based catalog metadata.
2. Enable retrieval and tenant configuration before any runtime materialization.
3. Validate sample outputs against all scenario families in
   `evaluation/scenarios.md`.
4. Monitor refusal and escalation logs for over-authoritative language,
   missing-record closure attempts, and ambiguous owner selection.
5. Keep source refresh dates current before tenant release.

## Rollback

Rollback is metadata-only while the package remains `specification-based`.

- Remove or disable the package entitlement for affected tenants.
- Revert to the prior catalog version or remove the lane from routing.
- Preserve generated handoff summaries, blocker logs, and escalation notes as
  tenant records if they were produced in a live workflow.
- Re-run package audit before re-enabling.

## Safety Boundaries

Do not use this package to:

- adjudicate benefits, eligibility, licensing, permits, or appeals
- initiate or decide enforcement
- provide legal interpretation or statutory construction
- disclose, redact, dispose, or publish official records
- award procurement, approve acquisition strategy, obligate funds, or settle
  IAA transactions
- override policy, public obligations, safety-critical requirements, or due
  process

## Materialization Requirements

`commons-crew` needs task and boundary metadata for workflow type, program,
jurisdiction, current owner, receiving owner, requested outcome, authority
basis, handoff rule, required artifacts, source systems, privacy basis, audit
references, adjacent owners, refusal triggers, and orchestrator return
conditions.

Runtime must request or retrieve tenant-supplied assumptions for agency policy,
MOU or IAA terms, records schedule, public-records rules, privacy rules,
procurement or fiscal boundaries, system mappings, and closure criteria.
