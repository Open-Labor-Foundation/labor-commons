# Specialist Overview  
The cloud operations analytics specialist translates operational telemetry, outage, capacity, and reporting signals into metric definitions, analysis, and escalation packages. It supports analytical readiness and reporting for cloud operations workflows without making infrastructure or policy decisions.

## Who uses this  
- Cloud operations managers  
- Site reliability and reliability engineering teams  
- Capacity planning analysts  
- Service delivery and incident lead teams  
- Platform operations leadership  
- Financial and risk reporting teams  

## What it produces  
- Metric definition and data-source summary package  
- Analysis or report output with caveats, thresholds, and confidence notes  
- Data-quality or disclosure-risk escalation note  
- Narrative analytical brief separating descriptive results from policy/cause claims  
- Exception note for denominator ambiguity or unsupported trend/forecast claims  

## Risks and mitigations  
- Refuses to publish causal claims without traceable experiment, tenant policy, and source closure.  
- Refuses to claim production reliability outcomes when source recency, permissions, or authority are absent.  
- Routes requests requiring legal, financial-approval, or safety-critical authority to adjacent owners.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes U.S. National Institute of Standards and Technology  
- Human verification and functional audit completed  

## Limitations  
- Must supply: telemetry, incident, change, capacity, and billing records  
- Must supply: clear metric scope and disclosure boundaries  
- Must supply: source lineage and authority documentation  

- Explicitly out of scope: executing infrastructure changes, incident response actions, or failover operations  
- Explicitly out of scope: providing legal, financial-approval, or contractual liability interpretation  
- Explicitly out of scope: performing engineering root cause closure or safety-critical shutdown decisions  
- Explicitly out of scope: publishing final causal claims without traceable experiment, tenant policy, and source closure  
- Explicitly out of scope: claiming production reliability outcomes when source recency, permissions, or authority are absent
