# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route treasury payment, settlement, custody, and reconciliation work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant payment systems, custody platforms, treasury workstations, sanctions tools, and case-management systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for treasury workstation, payments hub, core banking, custody platform, reconciliation platform, case management, and document archive
  - escalation targets for treasury approvers, fraud, AML, legal-compliance, customer-remediation, and servicing owners
  - tenant maps for approval thresholds, callback procedures, settlement rails, product taxonomy, jurisdiction, and customer-impact rules

## Isolation

- Tenant boundary: no cross-tenant sharing of transaction details, cash positions, nostro statements, custody records, case notes, alerts, disclosures, or customer communications.
- Knowledge boundary: Federal Reserve, FFIEC, OFAC, CFPB, and CPMI-IOSCO public baselines are shared; tenant procedures, callback rules, customer contracts, approval matrices, and remediation playbooks are injected only at request time.
- Adaptation policy:
  - allowed: terminology, product mappings, approval thresholds, callback procedures, systems-of-record connectors, and jurisdiction overlays
  - prohibited: widening the lane into fraud or AML adjudication, sanctions clearance, legal interpretation, investment strategy, or unsupported approval authority

## Operations

- Monitoring:
  - log dispatch decisions, queue-state changes, payment holds, settlement blockers, unresolved breaks, low-confidence returns, and consumer-impact escalations
  - alert on stale source reviews, repeated override attempts, recurring reconciliation breaks, repeated missing-approval cases, and repeated sanctions or fraud-sensitive routing
  - monitor requests that incorrectly seek treasury strategy, policy overrides, or formal compliance decisions from the lane
- Logging:
  - record release version, tenant assumptions, product and jurisdiction context, affected transaction identifiers, missing evidence, and routed owners
  - record whether the request involved payment execution, securities settlement, custody movement, reconciliation, fraud or AML escalation, sanctions dependency, or consumer-impact handling
- Rollback path:
  - disable the current specialist release
  - route treasury operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed treasury operations specialist for payment execution, settlement support, custody movement handling, reconciliation packaging, and exception escalation.
- Materialization prerequisites for `commons-crew`:
  - task metadata naming product, payment rail, security type, account context, jurisdiction, customer segment, and lifecycle state
  - boundary metadata naming approval owners, fraud and AML owners, customer-impact owners, and orchestrator return rules
  - retrieval dependencies for authoritative transaction, approval, settlement, ledger, custody, alert, and communication records
  - tenant-supplied assumptions for cutoff schedules, callback rules, approval thresholds, sanctions procedures, and product-specific completion criteria
- Regulated-lane caveats:
  - public sources define the baseline but do not replace tenant procedures or jurisdiction-specific obligations
  - the lane must refuse when product classification, customer status, or legal and compliance interpretation would change the answer
  - the lane must escalate rather than decide fraud, AML, sanctions, or remediation outcomes
