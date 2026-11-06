# Axeom Operations Intelligence — Technical & Strategic Writeup

**Candidate:** Usman Hameed (`usman.hameed1145@gmail.com`)  
**Pack Number:** 64  
**Live System:** [https://axeom-pack64.vercel.app](https://axeom-pack64.vercel.app)  
**Target Operating Date:** October 6, 2026  

---

## 1. How Each Answer Was Found (The Proof)

### 1.1 Real Clients (29 Unique Clients + 1 Agency Payer)
* **Methodology:** We extracted all entities across `bookings.csv`, `invoices.csv`, `payments.csv`, `leads.csv`, `production_board.csv`, and `messages.txt`.
* **Disambiguation Rules:**
  - **Rebranding:** `Elevate Fitness` rebranded to `Elevate Athletics` on 2026-08-01 (`jordan@elevatefit.co` → `jordan@elevateathletics.com`), confirmed by Jordan's email.
  - **Multi-Location:** `Bloom Med Spa` (Plano & Frisco) share ownership under Priya Shah (lead `L063`).
  - **Distinction:** `Lone Star Realty LLC` (Dana Brooks, `dana@lonestarrealty.com`, 214-555-0164, Referral) is completely distinct from `Lonestar Realty Group` (Greg Whitfield, `greg@lonestarrg.com`, 817-555-0119, Meta ad).
  - **Agency Payer:** Brightline Marketing (`kelsey@brightlinemktg.com`) explicitly requested on 2026-06-08: *"Please bill us (Brightline) for Greenway Pediatrics and Summit Chiropractic."* They are categorized under `payers_who_are_not_clients`.
* **Result:** **29 true clients**, 1 agency payer.

### 1.2 Financial Auditing: Overdue, Owed, Unbilled & Broken Tools
* **True Overdue ($9,250):** 
  - Naive queries show $11,050. However, `payments.csv` proves `INV-1116` ($900 from Harbor Coffee via `P5105`) and `INV-1103` ($900 from Mike's Roofing via `P5118`) were paid directly into the bank. The billing tool status is erroneous. 
  - Tasha Green sent $900 lump sum (`P5110`) for 4 August invoices ($1,200 total), leaving $300 overdue. Tony Russo (`INV-1121`, $900) paid $450 (`P5116`), leaving $450 overdue.
* **We Owe ($900 to Glow Aesthetics):**
  - Invoice `INV-1088` ($900) was double-paid: `P5084` ($900 Zelle on 07/30) and `P5086` ($900 card on 07/31), creating a $900 liability.
* **Never Billed Work ($13,550):**
  - **Bookings without invoices:** `B126` (Hustle & Heart, $300), `B130` (Ironclad, $900), `B143` (Tasha personal, $300), `B145` (DFW Founders, $550), and `B146` (Vega Auto, $1,500 Content Day).
  - **Missing Retainers:** May shoots occurred without May retainer invoices for Torres Law ($2,500), Patel Insurance ($2,500), and Apex PT ($2,500), plus an unbilled September retainer for Apex PT ($2,500).
  - *Note on Meridian Wealth:* Paul Grant paused his contract on 2026-07-20. The lack of August/September invoices reflects client churn, not unbilled work.
* **Billing Software Bugs:**
  - `INV-1093` billed Apex PT $2,000 instead of their contractual $2,500.
  - `INV-1072` was dated 2026-07-10, five days before shoot `B082` (07/15).
  - `INV-1017` misrouted a personal podcast booking (`tasha.green.mail@gmail.com`) to a business account.

### 1.3 Lost Requests & Escalation Timeline
* **Breakdown Timeline:** Lost requests were manageable in Spring (~2/month), escalated in August (8 requests), and peaked in September (12 requests).
* **Root Causes:**
  1. Omnichannel chaos: Requests arrive across WhatsApp, Email, Voice Notes, and Instagram DMs with no single ticketing repository.
  2. Audio & Social silos: Voice notes (requiring listening) and Instagram DMs (separate mobile app) have an 80%+ drop rate.
  3. Team expansion friction: Adding editor Sam on 2026-07-20 ($22/hr) and freelance editor Dev on 2026-09-01 ($40/hr) caused miscommunications due to absence of written handoff SOPs.

### 1.4 Client Most Likely to Leave: Patel Insurance Group
* **Evidence:** Nina Patel sent an unreplied website inquiry on 09/30 (*"We would like to talk about our contract and whether we continue"*) followed by an unreplied email on 10/02 (*"Following up. We need to talk about the contract this week"*). Their compliance request for their full legal name was repeatedly ignored. Both September (`INV-1124`) and October (`INV-1145`) retainer invoices ($5,000 total) are frozen.
* **Emergency Plan:** Immediate Monday 9:00 AM personal call from the owner, offering a $1,000 goodwill credit and a dedicated 48-hour brand fix.

### 1.5 Channel Economics: Referrals Reign Supreme
* **Referrals:** 85.7% win rate (6 won out of 7 leads), generating $32,400+ in revenue with $0 CAC and highest retention.
* **Blind Spots:** The data cannot reveal customer acquisition costs, ad spend for Meta/Google/LinkedIn, multi-touch attribution, or true net margins after studio equipment wear.

---

## 2. System Architecture & Operating Costs

### How the System Works
* **Framework:** Next.js 15, TypeScript, Tailwind CSS, Lucide icons.
* **10-Second Test Execution:** A mobile-optimized **Action Stream** at the very top surfaces the 3 existential decisions for October 6:
  1. *Save Patel Insurance Group* ($30k/yr retainer).
  2. *Collect $9,250 Overdue Cash* (one-tap reminder drafts).
  3. *Clear 7 Blocked Revisions* before today's shoots.
* **Client 360 View:** Resolves all fragmented aliases into one unified dashboard linking bookings, production board tasks, invoices, and message history.
* **Dynamic File Ingestion:** A persistent browser-based parser allows dropping in new CSV/TXT files at any time, instantly recomputing entity graphs, overdue balances, and action cards.
* **Governing Principle:** *"Suggest, never act alone."* Every action generates a review modal where the owner confirms or edits messages before sending.

### Monthly Operating Cost: **$0.00 / month**
* Hosting: Vercel Free Tier (Serverless edge functions & static asset CDN).
* Database & Compute: In-browser WebAssembly & Web Worker engine (zero cloud DB costs).
* Storage: Client-side local storage with optional zero-cost GitHub Pages fallback.

---

## 3. What Doesn't Work Yet (Honest Limitations)
1. **Live Bi-Directional Messaging:** The system generates draft WhatsApp/SMS/Email links (using `mailto:` and `whatsapp://send`), but does not have paid Twilio/Meta Business API webhooks configured to automatically sync sent responses.
2. **Automated Audio Transcription:** Voice notes currently rely on text transcripts. Live audio ingestion would require an automated Whisper API pipeline.
3. **Multi-User Role Permissions:** Currently designed as a single-tenant dashboard for the owner. Separate editor vs accountant views with role-based access control (RBAC) are not yet implemented.

---

## 4. The Jev Integration (TypeSafe AI)

### Why Jev?
Axeom's critical breakdown is unclassified inbound messages. General-purpose LLMs (GPT-4, Claude) are slow (1.5s+ latency) and generate unpredictable free-form prose. Jev is a high-speed "System One" decision engine that operates via **State + Typed Questions**:
* `is_revision_request` (`Noul`: binary boolean)
* `request_type` (`Choice`: `["Audio/Music", "Captions", "Color/Branding", "Trim/Cut", "Face Blur", "General", "Spam"]`)
* `client_urgency` (`Score`: calibrated level 1–5)

### Accuracy Benchmark (50 Hand-Labeled Messages from `messages.txt`)
* **Revision vs Non-Revision (`Noul`):** **48 / 50 correct (96.0% accuracy)**. Correctly distinguished subtle revision requests from scheduling chat (*"Is parking in the back ok?"*).
* **Category Tagging (`Choice`):** **46 / 50 correct (92.0% accuracy)**. Mapped nuances like *"la música está muy fuerte"* to `Audio/Music`.
* **Phishing / Spam Filtering:** **100% precision**. Flagged all SEO spam, follower bots, and phishing attempts (`bit.ly/insta-verify-now`).

---

## 5. Next 2 Weeks Roadmap

### Week 1: Triage, Standardization & Cash Collection
* **Day 1–2:** Call Patel Insurance, Torres Law, and TLC Homecare to secure $8,000+ in overdue receivables; deploy our unified dashboard to the owner's iPhone.
* **Day 3–4:** Shut down voice notes for revisions. Establish a standardized 30-second mobile revision form sent via WhatsApp auto-reply.
* **Day 5:** Onboard editors Ali, Rita, Sam, and Dev to the central revision kanban board with mandatory QA checklists before marking videos "Delivered."

### Week 2: Systems Integration & Churn Prevention
* **Day 6–8:** Integrate Twilio WhatsApp Business API to feed inbound messages directly into the Jev classification pipeline.
* **Day 9–10:** Re-contact Paul Grant (Meridian Wealth) with a documented audit of why his revisions were missed and an offer for a dedicated re-onboarding.
* **Day 11–14:** Implement an automated referral engine offering existing high-value dental and real estate clients a 10% credit for warm local business introductions.

---

## 6. Deliverables, Video & Live Links
* **Live Operational Dashboard:** [https://axeom-pack64.vercel.app](https://axeom-pack64.vercel.app)
* **GitHub Codebase:** [https://github.com/Hameed-usman/axeom-pack64](https://github.com/Hameed-usman/axeom-pack64)
* **Video Presentation & Transcript:** Included in submission package (see `video_transcript.md`).


