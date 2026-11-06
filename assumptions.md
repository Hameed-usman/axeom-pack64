# Assumptions & Questions Log

This document records the exact questions we would have asked the Axeom leadership team if real-time communication were permitted, alongside the rational business and data engineering assumptions we adopted to resolve ambiguities.

---

## 1. Client Identity & Entity Resolution

### Question 1:
> **"Are entities with identical email domains or parent brands considered the same client or separate accounts?"**
* **Context**: 
  - `Bloom Med Spa - Plano` (`priya@bloommedspa.com`) and `Bloom Med Spa - Frisco` (`frisco@bloommedspa.com`).
  - `Lone Star Realty LLC` (`dana@lonestarrealty.com`) vs `Lonestar Realty Group` (`greg@lonestarrg.com`).
  - `Patel Insurance Group` (`raj@patelinsures.com`) vs `Nina Patel` (`nina@patelinsures.com`).
  - `Elevate Fitness` (`jordan@elevatefit.co`) vs `Elevate Athletics` (`jordan@elevateathletics.com`).
* **Our Assumption**:
  - **Bloom Med Spa**: Treated as a single canonical client entity with two locations and shared ownership by Priya Shah (lead L063 links Priya to the Frisco location).
  - **Lone Star vs Lonestar**: Treated as **two completely separate clients**. Different contact names (Dana Brooks vs Greg Whitfield), distinct domains (`lonestarrealty.com` vs `lonestarrg.com`), and different phone area codes (214 vs 817).
  - **Patel Insurance Group**: Raj Patel and Nina Patel belong to the **same client**. Nina's lead L097 specifically identifies the business as "Patel Insurance Group" on the shared domain `patelinsures.com`.
  - **Elevate**: Rebranded on 2026-08-01 per Jordan Reed's email announcement. Both domains and names map to the single canonical entity `Elevate Athletics`.

### Question 2:
> **"Should intermediary agencies (like Brightline Marketing) be categorized as clients or third-party payers?"**
* **Context**: Kelsey Moore from Brightline Marketing emailed on 2026-06-08: *"Please bill us (Brightline) for Greenway Pediatrics and Summit Chiropractic. We pay monthly."*
* **Our Assumption**: 
  - Brightline Marketing is classified under `"payers_who_are_not_clients"`.
  - The actual end-clients receiving production and studio services are `Greenway Pediatrics` and `Summit Chiropractic`.
  - Bookings referencing Brightline (e.g., `B066 Brightline - Summit`, `B075 Brightline - Greenway`) are attributed to Summit and Greenway's production history, while invoices and payments route to Brightline.

---

## 2. Financial Discrepancies & Billing Rules

### Question 3:
> **"For overdue calculations, should invoices with unlinked or ambiguous bank payments be counted as overdue?"**
* **Context**:
  - `INV-1116` (Harbor Roasters, $900) is marked `unpaid` in `invoices.csv`, but payment `P5105` ($900) on 2026-08-28 specifically cites reference `INV-1116`.
  - `INV-1103` (Mike's Roofing, $900) is marked `unpaid`, but payment `P5118` ($900) on 2026-09-13 specifically cites reference `INV-1103`.
  - Tasha Green sent $900 via Zelle (`P5110`) with memo *"august sessions"*, but has 4 August invoices (`INV-1101`, `INV-1104`, `INV-1110`, `INV-1113`) totaling $1,200.
* **Our Assumption**:
  - We prioritize **bank truth over billing tool metadata**. Invoices with verifiable direct matching payments (`INV-1116` and `INV-1103`) are recognized as paid in reality and excluded from true operational overdue collections (while explicitly flagged under `billing_tool_is_wrong`).
  - For Tasha Green, the $900 lump sum covers 3 out of 4 sessions ($300 each). Therefore, $300 remains unpaid from August in addition to her September invoice `INV-1130` ($300).
  - Tony Russo (`INV-1121`, $900) paid $450 (`P5116`, *"half now half later"*); the remaining $450 is overdue as of October 6.

### Question 4:
> **"Why was Apex Physical Therapy billed $2,000 for August (`INV-1093`) instead of their regular $2,500 monthly retainer?"**
* **Context**: All other monthly retainer invoices for Apex PT (`INV-1037`, `INV-1064`, `INV-1146`) are billed at $2,500. There is no email or message requesting a discount.
* **Our Assumption**: 
  - `INV-1093` was a clerical data-entry error by Axeom's billing clerk. The client paid what was invoiced ($2,000 via `P5088`), leaving Axeom underpaid by $500.

### Question 5:
> **"Are retainers billed in advance or in arrears, and how should missing months be treated?"**
* **Context**: Retainer shoots occur throughout May (e.g., `B020 Torres`, `B036 Patel`, `B023 Apex`), but the first retainer invoices generated in the tool are dated June 1 (`INV-1035`, `INV-1036`, `INV-1037`).
* **Our Assumption**:
  - Axeom operates on a calendar-month billing model. The May shoots represent completed contract deliverables that were never formally invoiced in the billing system, representing $2,500 each in unbilled revenue.
  - For `Meridian Wealth Partners`, Paul Grant explicitly terminated their contract on 2026-07-20 (*"We'll pause after this month"*). Therefore, the absence of August/September retainer invoices for Meridian is churn, not unbilled work.

---

## 3. Production & Workflow

### Question 6:
> **"What defines a 'lost request' vs an active revision in progress?"**
* **Context**: Clients often request minor edits (captions, song tempo, color matching).
* **Our Assumption**:
  - A request is classified as **lost** if:
    1. The client subsequently followed up stating the edit was missed (e.g., *"This is the second time I ask"*, *"Still not fixed"*, *"already told you"*).
    2. The request came via an unintegrated channel (voice note or Instagram DM) and the corresponding production board record has blank notes or zero subsequent revision activity.

### Question 7:
> **"What is the operational cutoff date for 'today'?"**
* **Context**: The challenge specification explicitly states: *"The data's 'today' is October 6, 2026."*
* **Our Assumption**:
  - Any booking, invoice due date, or communication occurring on or before October 6, 2026 is evaluated as current/historical.
  - Invoices due after October 6, 2026 are not marked as overdue. Bookings marked `upcoming` scheduled on or after October 6 are treated as pending studio commitments.

