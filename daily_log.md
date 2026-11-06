# Daily Work Log

## Day 1 (November 5, 2026)

### 18:30 to 19:15. What I did:
- Extracted and thoroughly digested both challenge PDFs: `Axeom Challenge.pdf` and `Axeom Challenge - What to send.pdf`.
- Inspected the raw schema across all 8 data files in `data/` (`bookings.csv`, `costs.csv`, `invoices.csv`, `leads.csv`, `messages.txt`, `payments.csv`, `production_board.csv`, `team.csv`).
- Designed a multi-stream entity resolution script to normalize client names across misspellings, typos (`sarah@khandental.con`), business rebrands (Elevate Fitness -> Elevate Athletics), and agency intermediaries (Brightline Marketing).
- Conducted deep reconciliation between `invoices.csv` and `payments.csv` to isolate overdue debts, client overpayments, unbilled retainers, and billing software bugs.
- Initialized a responsive Next.js + TypeScript dashboard with local CSV/TXT ingestion and mobile-first design passing the 10-second priority test.
- Authored initial drafts of `answers.json` and `assumptions.md`.

### What I changed my mind about, and why:
- **Client Count**: Initially, doing a simple `COUNT(DISTINCT client_name)` yielded over 45 raw name variants. Then grouping by plain domain name almost grouped `Lone Star Realty LLC` and `Lonestar Realty Group` together. Upon manual inspection of contacts (Dana Brooks vs Greg Whitfield) and distinct phone area codes, I realized they are separate independent clients.
- **Brightline Marketing Classification**: I initially considered counting Brightline as client #30, but the brief specifically requires identifying `"payers_who_are_not_clients"`. Kelsey's message explicitly confirmed Brightline is an agency paying on behalf of Greenway Pediatrics and Summit Chiropractic. Placing Brightline in `payers_who_are_not_clients` brought the canonical client count to 29.
- **Overdue Invoices Reconciliation**: A naive query of `status == 'unpaid'` flagged 13 overdue invoices totaling $11,050. However, cross-checking `payments.csv` revealed that `INV-1116` ($900 from Harbor Coffee) and `INV-1103` ($900 from Mike's Roofing) had received exact-match payments in August and September. Counting them as overdue would cause Axeom to wrongfully harass paying clients. I moved them to `billing_tool_is_wrong` and adjusted the true overdue total to $9,250.

### What went wrong, and how I fixed it:
- **Date format mismatch**: `invoices.csv` used `YYYY-MM-DD` while `payments.csv` and `bookings.csv` used `DD/MM/YYYY` and `MM/DD/YYYY`. Early join scripts failed or created erroneous date offsets. I normalized all timestamps to ISO 8601 strings prior to diffing.
- **pnpm dependency issue**: Next.js scaffolding defaulted to `pnpm` which was not globally installed on the environment. Pivoted immediately to `npm` with clean package resolution for Tailwind and Lucide icons.

### Where the AI was wrong, and how I caught it:
- **Meridian Wealth Missing Retainer Fallacy**: An initial AI subagent proposed that Meridian Wealth Partners was "never billed" for August, September, and October retainers ($7,500 unbilled revenue). I caught this error by cross-referencing `messages.txt` line 80, where Paul Grant explicitly wrote: *"Paul here. We'll pause after this month. Too many rounds of fixes, and my notes keep getting missed."* Meridian did not have unbilled work—they churned due to dropped voice notes. Marking churn as "unbilled work" would have been an embarrassing financial hallucination.

