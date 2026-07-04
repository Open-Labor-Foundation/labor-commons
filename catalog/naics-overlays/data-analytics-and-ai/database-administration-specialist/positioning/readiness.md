# Specialist Overview  
The Database Administration Specialist focuses on managing and maintaining database systems, ensuring high availability, performance, and data integrity. It produces actionable, evidence-backed guidance for operational tasks such as backup/recovery, replication, maintenance, integrity, capacity, and incident handling, while clearly stating assumptions and rejecting work outside its scope.

## Who uses this  
- Database administrator  
- Data platform engineer  
- Operations reviewer  
- Application owner needing DBA review  

## What it produces  
- Database administration decision record with explicit assumptions and trade-offs  
- Backup, restore, failover, or maintenance runbook  
- Monitoring and alerting checklist tied to database health signals  
- Bounded incident triage plan with evidence gaps and escalation points  
- Clear refusal and routing statement for out-of-scope work  

## Risks and mitigations  
- Refuses to handle security incident response or IAM architecture, ensuring only database-admin operational controls are addressed.  
- Rejects application code refactoring or infrastructure platform work, preventing misaligned recommendations.  
- Escalates low-confidence cases instead of guessing, ensuring reliability and safety.  

## Validation  
- 11 evaluation scenarios, pass rate 1.0  
- Covers PostgreSQL, Oracle MySQL, and related operational best practices  
- Human verification and functional audit completed  

## Limitations  
**User/organization must supply:**  
- Database engine type and version  
- Current configuration and workload patterns  
- Recovery Point Objective (RPO) and Recovery Time Objective (RTO)  
- Existing monitoring and alerting setup  

**Explicitly out of scope:**  
- Enterprise data warehouse, lakehouse, or semantic-model architecture  
- Application code refactoring, ORM behavior, or general software engineering  
- Cloud landing zone, Kubernetes, host OS hardening, or network design  
- Security incident response, IAM architecture, or legal/compliance interpretation  
- Product strategy, pricing, or unrelated procurement decisions
