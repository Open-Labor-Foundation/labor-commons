# Deployment Package

## Runtime Model

- Deployment model: Spec-based specialist package with immutable manifest and evaluation artifacts.
- Runtime expectation: Orchestrator-routed personal-care billing lane for salon, spa, barber, nail, esthetics, and adjacent personal-service operators.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted.
- Delivery level: `validated` based on source grounding, scenario coverage, and boundary safety.
- Required configuration:
  - release version
  - source refresh policy
  - tenant jurisdiction, merchant-of-record map, and approval hierarchy
  - integrations for booking, POS, payment processing, accounting export, document storage, and exception queues
  - adjacent specialist targets for tax, accounting, merchant-services, salon or spa operations, med-spa compliance, and legal review

## Tenant Systems and Adaptation

- Tenant records required: appointment and service-ticket records, POS receipts, tax configuration extracts, tip or service-charge records, processor settlement files, cash-close evidence, chargeback notices, package or gift-card ledgers, booth-renter or payout records, and escalation hierarchy.
- Allowed adaptation:
  - jurisdiction and location-specific terminology
  - tenant price-book, package, membership, gift-card, and no-show-charge rules
  - processor, terminal, and reconciliation workflow naming
  - booth-renter, commission, and payout nomenclature
- Prohibited adaptation:
  - widening the lane into tax advice, accounting signoff, legal interpretation, PCI override, or clinical-billing adjudication
  - ignoring service-ticket, merchant-of-record, gratuity, or settlement blockers because cash posting is urgent
  - merging salon-owned, booth-renter, retail, package, and med-spa transactions into one billing path without approved tenant mapping

## Materialization Expectations

- `commons-crew` would need:
  - task metadata for requested billing action, service category, merchant-of-record, payment method, denial or dispute state, and urgency
  - boundary metadata naming who owns tax treatment, accounting entries, payment-compliance controls, med-spa billing, price overrides, and formal write-off approvals
  - retrieval hooks for booking systems, POS records, processor portals, package or gift-card ledgers, approval repositories, and reconciliation queues
  - jurisdiction and tenant policy inputs for tax-sensitive handling, refunds, discounts, gift-card treatment, package expiration, no-show charges, and med-spa routing
- Runtime assumptions that must be tenant-supplied or retrieved:
  - the exact jurisdiction and business model in scope
  - the merchant-of-record and payout path for the transaction
  - current service, POS, gratuity, settlement, dispute, and approval records
  - approval chain for tax, accounting, merchant-services, and legal escalations
  - current systems-of-record and their source-of-truth precedence
- Regulated-lane caveats:
  - the lane may support billing and reconciliation decisions but cannot determine final tax treatment, accounting entries, or physician-delegated billing posture
  - any conflict involving payment-card retention, jurisdiction-specific tax rules, or med-spa regulation requires escalation rather than synthesis
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative rule context are missing
  - request requires legal, tax, accounting-signoff, PCI-override, clinical, or price-override authority
  - conflicting policies materially change the answer

## Deployment Notes

- Install prerequisites:
  - manifest knowledge baseline loaded
  - scenario framework for 12 personal-care billing scenarios
  - research summary, readiness evidence, and functionality map present
- Rollback path:
  - disable specialist package invocation for this lane
  - route requests through prior default finance-support behavior
  - restore the previous validated package bundle
  - re-run repository validation before re-enabling
- Monitoring requirements:
  - track blocked cases caused by missing service tickets, merchant-of-record facts, or settlement evidence
  - monitor repeated unsupported override requests involving no-show charges, gratuities, discounts, tax-sensitive handling, or write-offs
  - monitor processor denials, chargebacks, gift-card disputes, and booth-renter settlement conflicts
  - monitor med-spa and clinically sensitive cases for false-confidence normalization into routine personal-care billing

## Notes on use

- Positioning: validated, industry-specific personal-care billing specialist with explicit salon, spa, retail, gratuity, payment-control, and med-spa constraints.
- Tenant support: supports salons, spas, barbershops, nail studios, esthetics practices, multisite personal-care operators, and hybrid wellness businesses coordinating billing and reconciliation.
- Value: reduces unsupported charges, payment-control drift, settlement leakage, and exception rework by making merchant-of-record, service-ticket, gratuity, and dispute evidence explicit.

## Promotion Path

- This package does not claim a retained implementation.
- Promote to a retained implementation only if repeated usage shows:
  - stable retrieval of booking, POS, settlement, gratuity, package, and approval records
  - low rates of false-confidence source-conflict or med-spa normalization errors
  - durable handling across salon-owned, booth-renter, retail, package, and disputed-payment cases
  - explicit governance approval to convert the `specification-based` runtime into a committed built implementation
