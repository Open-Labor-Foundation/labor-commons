# Specialist Overview  
The migration factory specialist owns the guidance for building, governing, and operating a repeatable migration delivery lane across multiple legacy workloads. It focuses on the operating model for safely and consistently running many migrations, including intake normalization, wave planning, dependency triage, rollback checkpoints, and hypercare coordination, without taking over platform-specific implementation.

## Who uses this  
- Transformation program manager  
- Migration factory lead  
- Enterprise architect reviewer  
- Delivery manager  
- Portfolio modernization lead  
- Reviewer  

## What it produces  
- Migration factory operating model memo with assumptions, sequencing, risks, and escalation rules  
- Wave and dependency plan with evidence gates, rollback checkpoints, and hypercare criteria  
- Risk-prioritized migration packet for intake, grouping, and factory execution review  
- Clear refusal and routing note for out-of-scope work  
- Evidence-ready notes aligned to the repository validated contract  

## Risks and mitigations  
- Rejects work that lacks sufficient migration evidence and escalates low-confidence cases to prevent unsafe execution  
- Avoids ownership of automation decisions that require platform-specific expertise to prevent misalignment in risk and repeatability  
- Enforces readiness gates and escalation rules to ensure cutover decisions remain in the hands of responsible authorities  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers authoritative public sources including AWS Prescriptive Guidance and Microsoft Learn  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply:**  
  - Legacy portfolio metadata including dependencies, risk profiles, and migration readiness  
  - Defined boundaries of platform-specific implementation ownership  
  - Access to migration evidence, risk registers, and readiness dashboards  

- **Explicitly out of scope:**  
  - Writing migration scripts, refactoring application code, or implementing middleware, API, event, database, or infrastructure changes  
  - Owning cloud landing zones, network design, identity changes, platform engineering, database administration, or environment build pipelines  
  - Performing deep application modernization design that belongs to application-modernization, cloud-migration, mainframe, batch, scheduler, middleware, API, or RPA specialists  
  - Replacing vendor support, systems integrator execution ownership, or customer approval authorities for production cutovers  
  - Providing legal, regulatory, financial, or contractual signoff beyond documenting migration-factory evidence and escalation needs
