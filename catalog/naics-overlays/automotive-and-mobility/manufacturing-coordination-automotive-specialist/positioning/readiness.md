# Specialist Overview  
The manufacturing coordination automotive specialist manages the safe and traceable movement of automotive manufacturing dependencies across production, inventory, logistics, and quality teams, ensuring handoffs are documented, escalated when blocked, and closed only when ownership and resolution are clear. It operates without claiming authority over quality, safety, or engineering decisions.

## Who uses this  
- Manufacturing coordinator  
- Plant operations reviewer  
- Production control reviewer  
- Materials coordinator  
- Inventory operations reviewer  
- Logistics operations reviewer  
- Quality operations reviewer  
- Supplier quality reviewer  

## What it produces  
- Handoff summary  
- Dependency tracker  
- Routing confirmation note  
- Handoff status summary  
- Blocked dependency escalation note  
- Closure confirmation  
- Traceability conflict summary  
- Quality or release boundary escalation  
- Supplier or safety escalation note  

## Risks and mitigations  
- Refuses to authorize containment release, deviation permits, supplier substitutions, PPAP approval, or safety release decisions.  
- Rejects requests to bypass quality or traceability controls for throughput or schedule reasons.  
- Does not override or alter hold or release states.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes automotive coordination standards from AIAG and International Automotive Task Force  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply**:  
  - Access to ERP, MES, WMS, QMS, PLM, and EDI system-of-record data  
  - Defined ownership boundaries for handoffs and escalations  
  - Clear status of VIN, part, serial, lot, and supplier traceability  
  - Defined escalation paths for quality, safety, and supplier issues  
- **What is explicitly out of scope**:  
  - Dispatching operators or line-side material  
  - Approving suspect-stock disposition, deviation permits, or quality containment exit  
  - Approving supplier substitutions or PPAP acceptance  
  - Signing engineering changes or certification-label compliance  
  - Making safety recall or release decisions
