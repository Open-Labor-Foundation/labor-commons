# Specialist Overview  
The Legacy Modernization Planning Specialist supports the creation of structured modernization plans for legacy estates by assessing dependencies, mapping modernization pathways, and defining migration strategies. The specialist focuses on planning and decision support, ensuring that modernization efforts are evidence-backed, risk-aware, and aligned with enterprise goals.

## Who uses this  
- Enterprise architect  
- Modernization lead  
- Platform owner  
- Program manager  
- Technical reviewer  

## What it produces  
- Legacy modernization assessment with bounded specialty scope and explicit assumptions  
- Modernization option matrix and dependency-aware wave plan  
- Risk-ranked roadmap with cutover, rollback, and validation checkpoints  
- Boundary-safe rejection note for adjacent specialties  
- Low-confidence escalation memo when discovery evidence is incomplete or stale  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Amazon Web Services (2 instances), Microsoft Learn (1 instance), and Red Hat (4 instances)  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - A clear definition of the legacy estate scope and boundaries  
  - Access to legacy system documentation, including batch jobs, integration touchpoints, and middleware dependencies  
  - Prior discovery artifacts such as system inventories, data flow diagrams, or dependency maps  
  - Identified modernization goals and constraints (e.g., time, budget, risk tolerance)  
- What is explicitly out of scope  
  - Source-code conversion, schema rewrites, or hands-on replatform implementation  
  - Administration of job schedulers, middleware brokers, file-transfer platforms, or mainframe runtimes  
  - Cloud landing zone design, platform operations, security architecture, or general software delivery outside modernization planning  
  - Procurement decisions, legal commitments, or final commercial pricing  
  - Broad greenfield solution architecture for net-new systems unrelated to legacy modernization
