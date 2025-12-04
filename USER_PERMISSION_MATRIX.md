# User Permission Matrix

This document outlines the user roles and their access levels for the Novalyte AI God's Eye dashboard.

### Roles:
- **Admin:** Full system control. Can manage users, override system settings, and access all data.
- **Ops:** Operational command. Manages the day-to-day flow of patients, clinics, and marketplace.
- **Compliance:** Security and audit focus. Monitors for risk, compliance, and data integrity.
- **Analyst:** Data and performance focus. Views system-wide data to generate insights and forecasts.

---

| Module                        | Admin     | Ops       | Compliance| Analyst   | Notes                                           |
|-------------------------------|-----------|-----------|-----------|-----------|-------------------------------------------------|
| **1. GOD’S EYE OVERVIEW**     | Full View | Full View | Full View | Full View | All roles have access to the master summary.      |
| **2. PATIENT INTELLIGENCE**   | Full View | Full View | View Only | View Only | Ops can manage intake flow; others can only view. |
| **3. CLINIC PERFORMANCE**     | Full View | Full View | View Only | Full View | Ops manages clinics; Analyst reviews performance. |
| **4. MARKETPLACE INFRA.**   | Full View | Full View | View Only | View Only | Ops manages marketplace; others can only view.    |
| **5. VENDOR SUPPLY GRID**     | Full View | Full View | View Only | View Only | Ops manages vendors; others can only view.        |
| **6. AI TRIAGE ENGINE**       | Full View | View Only | View Only | View Only | Admin can configure the AI; others can only view. |
| **7. COMPLIANCE & SECURITY**  | Full View | No Access | Full View | No Access | Restricted to Admin and Compliance roles.         |
| **8. REVENUE & FORECASTING**  | Full View | View Only | View Only | Full View | Analyst and Admin have full view of financials.   |
| **9. SYSTEM LOGS**            | Full View | View Only | Full View | View Only | Ops and Compliance can view logs for their areas. |
| **10. CONTROL PANEL**         | Full View | No Access | No Access | No Access | Restricted to Admin role for system overrides.    |
