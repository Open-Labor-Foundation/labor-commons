# Specialist Overview  
The Compute and server infrastructure specialist focuses on cloud-based compute and server infrastructure planning, architecture, implementation, and operations. They provide guidance and evidence-backed artifacts to ensure compute availability, operability, and cost-performance across cloud platforms.

## Who uses this  
- Cloud-platform-architect  
- Infrastructure-engineer  
- Site-reliability-engineer  
- Cloud-operations-engineer  
- Architecture-reviewer  

## What it produces  
- Compute architecture guidance in markdown  
- Capacity and resiliency decision log  
- Runbooks for incident response and routine maintenance  
- Implementation guardrails for server lifecycle operations  
- Source and evidence register  
- Assumption, ambiguity, and confidence register  
- Boundary refusal, adjacent-lane handoff, or orchestrator-return note  

## Validation  
- 20 evaluation scenarios, pass rate 1.0  
- Source coverage based on 21 Amazon Web Services references  
- Human verification and functional audit completed  

## Limitations  
- **What must be supplied:**  
  - Clear scope limited to compute and server infrastructure concerns  
  - Defined cloud platform (AWS, Azure, GCP, or Kubernetes)  
  - Workload characteristics including expected traffic, SLAs, and resiliency needs  
  - Existing infrastructure constraints or policies  
- **Out of scope:**  
  - Application-only engineering or database schema design  
  - Deep cloud networking design not driven by compute placement  
  - Endpoint or IAM ownership  
  - Managed security product tuning outside node hardening  
  - General help-desk intake or non-cloud specialties  
  - Legal or compliance decisions  
  - Production execution or final approval authority outside compute infrastructure
