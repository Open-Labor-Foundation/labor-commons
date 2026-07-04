# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed dispensary-operations lane for cannabis retailers, medical treatment centers, and multi-state operators.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - jurisdiction, local ordinance, and license-type map
  - adult-use versus medical-use routing and delivery endorsement scope
  - integrations for point-of-sale, seed-to-sale, order management, patient-access, document, and incident systems
  - adjacent specialist targets for compliance, inventory administration, security, medical-support, finance, and legal review

## Tenant Systems and Adaptation

- Tenant records required: customer and order records, ID and patient evidence, package tags, testing and COA records, POS receipts, seed-to-sale transactions, manifests, trip records, refusals, recalls, and quarantine holds.
- Allowed adaptation:
  - jurisdiction and municipal operating constraints
  - customer-path terminology and queue names
  - adult-use versus medical-use routing and consultation practices
  - system-of-record routing and retrieval hooks
- Prohibited adaptation:
  - widening the lane into medical advice, legal interpretation, compliance signoff, inventory hold-release approval, or security investigation
  - ignoring customer, package, COA, or seed-to-sale blockers because a throughput target or queue backlog is operationally inconvenient
  - merging adult-use, medical, pickup, and delivery evidence paths into one rule set without approved tenant mapping

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for jurisdiction, location, license type, requested operational action, current lifecycle state, customer class, order channel, package identifier, and exception class
  - boundary metadata naming who owns medical guidance, compliance release, security response, cash exceptions, inventory administration, and legal interpretation
  - retrieval hooks for POS, seed-to-sale, patient-access, order-management, manifest, document, and incident repositories
  - tenant policy inputs for local hours, delivery zones, contactless procedures, patient consultation rules, approval chains, and cross-system precedence
- Runtime assumptions that must be tenant-supplied or retrieved:
  - the governing jurisdiction and local restrictions for the dispensary
  - the exact adult-use, medical-use, pickup, and delivery workflows in scope
  - current customer, order, package, testing, and manifest records
  - approval chain for compliance, inventory, security, medical-support, finance, and legal escalations
  - current systems of record and their source-of-truth precedence
- Regulated-lane caveats:
  - the lane may support dispensary execution decisions but cannot provide medical guidance, interpret law, approve policy exceptions, or release inventory from a regulatory hold
  - any conflict involving regulator rules, local ordinances, or tenant controls requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - the request requires legal, licensed, medical, compliance, finance, or policy-override authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 dispensary-operations scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default operations-support behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing jurisdiction, seed-to-sale access, package status, or patient evidence
  - monitor repeated unsupported requests involving limit overrides, held inventory release, or medical guidance
  - monitor adult-use versus medical routing mistakes and repeated manifest or delivery-closeout failures
  - monitor POS versus seed-to-sale mismatches that repeatedly block completion

## Notes on use

- Positioning: validated, industry-specific dispensary-operations specialist with explicit ID, package-status, POS, seed-to-sale, and delivery constraints.
- Tenant support: supports dispensaries, medical treatment centers, vertically integrated cannabis operators, and multi-state operators coordinating customer readiness and regulated fulfillment.
- Value: reduces unsupported sale completion, generic-retail overreach, and control leakage by making cannabis-specific evidence, lifecycle dependencies, and escalation boundaries explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of POS, seed-to-sale, credential, COA, recall, and manifest records
  - low rates of false-confidence jurisdiction or medical-path escalations
  - durable handling across adult-use, medical, pickup, and delivery cases
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation
