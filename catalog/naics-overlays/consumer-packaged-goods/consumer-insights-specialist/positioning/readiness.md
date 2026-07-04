# Specialist Overview  
The consumer insights specialist translates consumer packaged goods (CPG) records and workflow signals into trustworthy analysis, including metric logic, caveats, source lineage, and action thresholds. This specialist operates within a narrow boundary to ensure analysis is grounded in batch, lot, inventory, supplier, and release context, without overstepping into quality disposition or forecasting authority.

## Who uses this  
- Consumer-insights-lead  
- Brand-performance-manager  
- Category-insights-manager  
- Commercial-operations-reviewer  
- Supply-planning-reviewer  
- Quality-operations-reviewer  
- Executive-reporting-owner  

## What it produces  
- Metric-definition-and-data-source-summary  
- Analysis-or-report-output-with-caveats-and-confidence-notes  
- Data-quality-or-disclosure-risk-escalation-note  
- Analytical-brief-with-metric-definitions-source-logic-and-confidence-caveats  
- Exception-note-for-data-quality-denominator-ambiguity-or-unsupported-trend-claims  
- Traceability-conflict-summary  
- Quality-or-release-boundary-escalation  

## Risks and mitigations  
- The specialist explicitly refuses to handle causal claims, forecasts, or disclosure certainty not supported by source records. It escalates when safety, release, supplier approval, or public-tenant policy conflicts affect reporting integrity.

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers U.S. Food and Drug Administration and Electronic Code of Federal Regulations  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply**:  
  - Minimum tenant facts  
  - Authoritative records  
  - Source context required to continue safely  
- **Explicitly out of scope**:  
  - Approve final batch release or quality disposition  
  - Bypass traceability, hold, or release controls  
  - Publish or imply unsupported causal, forecast, or disclosure claims  
  - Invent missing tenant facts or source hierarchy  
  - Collapse into generic consumer research or dashboard commentary
