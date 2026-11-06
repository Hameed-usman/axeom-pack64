# AI Collaboration & Verification Log (`ai_log.md`)

This log outlines how artificial intelligence models were leveraged to accelerate exploratory data analysis and UI scaffolding for the Axeom Challenge, along with rigorous manual verification checkpoints.

---

## 1. AI Tools Utilized

1. **Google Gemini (Antigravity Assistant)**: Used for multi-file workspace inspection, regex pattern extraction from messy unstructured messages, cross-referencing invoice identifiers against bank logs, and Next.js component development.
2. **Claude Opus / Sonnet**: Employed in parallel exploratory subagent tasks for qualitative root cause analysis and customer churn signal detection.
3. **pdfplumber / Python AST Scripts**: Executed to parse PDF problem statements and compute numerical validations directly from raw CSV records.

---

## 2. Key Prompts Executed

### Prompt 1: Entity Resolution & Canonical Mapping
```text
Task: Cross-reference bookings.csv, invoices.csv, payments.csv, leads.csv, 
production_board.csv, and messages.txt to identify all unique real clients.
Rules:
1. Primary key match on clean email domain/username.
2. Resolve phone numbers, rebrands (Elevate Fitness -> Elevate Athletics), 
   and spelling typos (sarah@khandental.con).
3. Identify 'payers who are not clients' (e.g. agencies paying for other accounts).
4. Output canonical name, all aliases, emails, and phone numbers.
```

### Prompt 2: Financial Reconciliation & Anomaly Detection
```text
Audit invoices.csv against payments.csv:
1. Identify all invoices where status is unpaid/partial and due date < 2026-10-06.
2. Check if payments.csv contains unlinked or direct payments matching these invoices.
3. Find double payments or overpayments ('we owe').
4. Identify bookings or monthly retainer cycles that have no corresponding invoice ('never billed').
5. Flag discrepancies where the billing tool is objectively wrong.
```

---

## 3. Instances Where AI Produced Erroneous Results & How They Were Caught

### Instance 1: Conflating Separate Real Estate Companies
* **The AI Claim**: Grouped `Lone Star Realty LLC` (Dana Brooks) and `Lonestar Realty Group` (Greg Whitfield) as a single client due to similarity in business name.
* **How I Caught It**: I checked `leads.csv` and noticed two separate entries: `L038` (Dana Brooks, `dana@lonestarrealty.com`, phone 214-555-0164, Referral) and `L064` (Greg Whitfield, `greg@lonestarrg.com`, phone 817-555-0119, Meta ad). The websites and phone numbers had different area codes (Dallas 214 vs Fort Worth 817). Merging them would have mixed up billing and communications.
* **Correction**: Enforced email address domain separation, maintaining them as two separate client entities in `answers.json`.

### Instance 2: Hallucinating "Unbilled Retainers" for Churned Client
* **The AI Claim**: Flagged $7,500 in unbilled work for Meridian Wealth Partners across August, September, and October.
* **How I Caught It**: Examined `messages.txt` and found Paul Grant's direct email on 2026-07-20 stating he was pausing services due to missed revisions. In addition, `production_board.csv` had zero videos produced for Meridian after July. 
* **Correction**: Classified Meridian as a churned client rather than an unbilled client, preventing false revenue inflation.

### Instance 3: Naive Overdue Invoice Calculation
* **The AI Claim**: Summed all `status == 'unpaid'` rows with past due dates to claim $11,050 was overdue.
* **How I Caught It**: Cross-referenced `payments.csv` using reference tokens and found `P5105` ($900 from Harbor Coffee) and `P5118` ($900 from Mike's Roofing) were received and deposited in the bank months prior. The billing software had simply failed to update the status column.
* **Correction**: Marked these two as `billing_tool_is_wrong` and updated the true overdue collections balance to $9,250.

