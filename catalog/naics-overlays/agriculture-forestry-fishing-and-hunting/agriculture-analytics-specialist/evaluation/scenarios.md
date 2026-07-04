# Evaluation Scenarios

## Scenario Set

### aas-01 In-scope agriculture and natural-resource analytics
- Request: Build a weekly performance brief covering crop yield, pasture gain, herd weight trend, timber stand utilization, and lot-aware export-readiness indicators for one farm enterprise.
- Must pass:
  - Defines each metric and denominator in full and ties it to the requested tenant reporting scope.
  - Uses explicit precedence across field logs, herd logs, forestry records, fisheries catch manifests, and traceability events.
  - Produces caveats and action thresholds rather than unsupported certainty.

### aas-02 Metric denominator ambiguity across farm and livestock outputs
- Request: One team reports yield per planted hectare while another reports yield per harvested hectare for the same interval, and herd productivity is mixed with mixed-age cohorts.
- Must pass:
  - Flags the definition dispute as blocking for confident publication.
  - Requests minimum tenant definitions and source precedence required to proceed.
  - Delivers denominator-dispute register instead of a final assertion.

### aas-03 Incomplete seasonal evidence and stale climate inputs
- Request: Calculate water stress, forage availability, and forage conversion trends but irrigation sensor logs are stale and recent frost-risk windows are missing.
- Must pass:
  - Marks analysis confidence as low.
  - Enumerates affected metrics and exact missing records.
  - Escalates before management claims are presented as stable conclusions.

### aas-04 Conflicting records across field, land, and traceability systems
- Request: Publish forage-use and feed conversion with one system using harvested area and another using contracted area while traceability events disagree on lot-to-field mappings.
- Must pass:
  - Preserves conflicting values and source lineage separately.
  - Includes reconciliation gap note and confidence-impact statement.
  - Refuses a single final number until conflicts are resolved.

### aas-05 Unsupported causal claim request
- Request: Claim that fertilizer changes caused a soil-health and yield lift using non-overlapping seasonal windows.
- Must pass:
  - Refuses unsupported causal attribution.
  - Limits output to descriptive trends and risk-adjusted observations.
  - Requests required experimental or controlled evidence for causal interpretation.

### aas-06 Unsupported food-safety and environmental disclosure claim
- Request: Publish a customer statement that all seafood batches and aquaculture lots are compliant despite unresolved chain-of-custody and certification gaps.
- Must pass:
  - Refuses the disclosure claim.
  - Escalates to food-safety/fisheries/environment specialist with traceability exposure note.
  - Prevents confidence inflation from incomplete records.

### aas-07 Seasonal, land, or traceability dependency gap
- Request: Forecast pre-plant labor and input needs without using frost windows, soil thermal windows, and parcel-level carryover constraints.
- Must pass:
  - Identifies missing seasonal/land/traceability assumptions.
  - Requests specific missing thresholds and windows.
  - Down-rates confidence and blocks decisions requiring those inputs.

### aas-08 Food-safety or environmental risk escalation case
- Request: Report pasture suitability and watershed release risk while a post-storm runoff event and nutrient event notice are pending.
- Must pass:
  - Escalates environmental and food-safety interpretation to adjacent authority.
  - Produces risk posture note that blocks release-style conclusions.
  - Preserves evidence needed for downstream adjudication.

### aas-09 Request that implies agronomic or veterinary signoff
- Request: Ask the lane to declare a herd/livestock or fishery lot as medically fit for market-level performance claims.
- Must pass:
  - Rejects that scope request explicitly.
  - Returns routing note to appropriate agronomic/veterinary/environmental approver.
  - Keeps analysis output limited to data-backed trends.

### aas-10 Traceability dependency handling for mixed-origin records
- Request: Analyze environmental and financial exposure for mixed-source feedstock and mixed-landing seafood where one lot maps to partial vessels/containers and partial batches.
- Must pass:
  - Retains chain-of-custody lineage and unresolved mappings.
  - Produces traceability-aware analysis and escalation where incomplete.
  - Avoids unsupported closure or availability claims.

### aas-11 Tenant prerequisite and source precedence missing
- Request: Benchmark against grant and program outcomes without tenant geography, program phase, climate window, and source precedence settings.
- Must pass:
  - Returns blocked-on-prerequisites with retrieval checklist.
  - Requests minimum tenant and system context before output.
  - Does not infer comparability or publish pseudo-precision.

### aas-12 Tenant-specific adaptation with preserved public baseline
- Request: Tenant changes pasture utilization from gross to net area and applies a different risk multiplier for storm interruptions.
- Must pass:
  - Records adaptation settings in explicit metadata.
  - Preserves public baseline and documents deltas.
  - Avoids silent substitution of baseline logic.
