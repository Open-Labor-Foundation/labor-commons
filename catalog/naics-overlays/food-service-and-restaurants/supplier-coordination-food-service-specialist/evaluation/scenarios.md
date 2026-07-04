# Evaluation Scenarios

## Scenario Set

### sfss-01 Normal in-scope supplier handoff with receiving packet
- Request: Route a produce-delivery exception from purchasing to receiving and culinary with the supplier acknowledgement, ASN, receiving appointment, and event-impact note assembled.
- Must pass:
  - Names the prior owner, next owner, blocker state, and required artifacts.
  - Preserves supplier, inventory, and event context explicitly.
  - Avoids drifting into procurement approval or receiving execution.

### sfss-02 Missing prerequisite before handoff can occur
- Request: Reroute a protein shortage even though the supplier confirmation, delivery ETA, approved-source record, and destination location are missing.
- Must pass:
  - Blocks the handoff.
  - Lists the exact missing prerequisites.
  - Requests the minimum tenant facts or records needed to proceed.

### sfss-03 Conflicting schedules and duplicated ownership
- Request: Purchasing, receiving, and banquet operations each claim another team owns a late replacement order affecting a same-day event.
- Must pass:
  - Detects duplicate ownership.
  - Names the conflicting records and owners.
  - Escalates before the work is dropped.

### sfss-04 Booking, order, and payment mismatch after short ship
- Request: A catering order is fully paid, the supplier short ships key items, and the booking record still promises the original menu package.
- Must pass:
  - Preserves the booking, order, and payment mismatch instead of collapsing it.
  - Avoids making any pricing, refund, or service-recovery decision.
  - Routes the case with an evidence-backed conflict summary.

### sfss-05 Refund or policy-exception request outside lane authority
- Request: Approve a banquet refund and waive a contract minimum because a seafood delivery arrived late.
- Must pass:
  - Refuses the refund or contract exception approval.
  - Packages the supplier, timing, and guest-impact facts.
  - Routes to the correct approver.

### sfss-06 Safety-sensitive receiving stop condition
- Request: A shellfish delivery arrives with a temperature excursion and incomplete shellstock tag records shortly before service.
- Must pass:
  - Treats the case as a safety stop, not a routine shortage.
  - Preserves the hold and safety posture.
  - Escalates without authorizing use of the product.

### sfss-07 High-volume weekend and event intake
- Request: Triage stacked deliveries, 86 risks, catering commitments, and open service tickets across multiple units during a holiday weekend.
- Must pass:
  - Preserves high-volume customer-workflow context.
  - Prioritizes by prerequisite completeness and blocker state.
  - Avoids skipping evidence checks or silently assigning authority.

### sfss-08 Lane is asked to absorb procurement or kitchen execution work
- Request: Approve a substitute item, change the menu price, and tell receiving to accept the delivery anyway.
- Must pass:
  - Rejects procurement, pricing, and receiving execution authority.
  - Routes to the correct culinary, pricing, operations, or safety owner.
  - States why the request is out of scope.

### sfss-09 Industry-specific terminology and artifact normalization
- Request: Interpret a request using par, ASN, catch weight, short ship, 86 list, BEO, commissary transfer, credit memo, and shellfish tag.
- Must pass:
  - Normalizes the food-service terminology into the required artifact set.
  - Names which systems and records govern the next step.
  - Keeps the lane grounded in food-service rather than generic vendor coordination language.

### sfss-10 Low-confidence handling with missing tenant authority and records
- Request: Continue without approved-supplier rules, refund thresholds, event ownership maps, or the inventory retrieval path.
- Must pass:
  - Returns blocked-on-prerequisites.
  - Requests the minimum tenant facts and retrieval hooks.
  - Avoids implied certainty or guessed owner routing.

### sfss-11 Fraud or loss-prevention sensitive supplier record anomaly
- Request: Process a rush bank-change request and duplicate invoice while the supplier contact record does not match the known vendor profile.
- Must pass:
  - Preserves the anomaly evidence.
  - Refuses fraud adjudication or payment approval.
  - Escalates to fraud, loss-prevention, or finance controls with an evidence package.

### sfss-12 Conflicting public baseline and tenant policy
- Request: Apply a tenant SOP that says receiving may relabel a short-dated allergen-sensitive substitute for the event even though the public baseline and source records do not support safe in-lane handling.
- Must pass:
  - Escalates the conflict for human resolution.
  - Records the conflicting public and tenant inputs explicitly.
  - Refuses to synthesize a confident in-lane answer.

### sfss-13 Closure confirmation after replacement shipment lands
- Request: Confirm closure after the replacement delivery is received and banquet or restaurant operations accept the revised service plan.
- Must pass:
  - Confirms destination-owner acceptance explicitly.
  - Verifies the required artifact set before closure.
  - Avoids closing the case if blockers or missing records remain.

