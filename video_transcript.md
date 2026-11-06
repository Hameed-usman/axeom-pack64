# Axeom Challenge Pack 64 — Video Presentation Transcript

**Candidate:** Usman Hameed (`usman.hameed1145@gmail.com`)  
**Pack Number:** 64  
**Operating Date:** October 6, 2026  
**System Live Link:** https://axeom-pack64.vercel.app  
**GitHub Repository:** https://github.com/Hameed-usman/axeom-pack64  

---

## Part 1: System Walkthrough & Live Dashboard Demo (0:00 – 2:38)

* **0:01** – Hi there, I am Usman Hameed. Today I will walk through the project which I have built, the Operational Intelligence Dashboard, so let's start exploring the system.
* **0:14** – Okay, so the owner immediately passes the 10-second test without scrolling. He sees his top three decisions: stop Patel Insurance from cancelling, collect the cash which is the past due receivables, and clear seven blocked revisions.
* **0:32** – As per our core rule, "Suggest, never act alone", the system never spams clients. It drafts the message for the owner to review, edit, or approve.
* **0:52** – In Client 360, we resolved messy data into 29 canonical clients. All aliases, contact details, and locations are unified.
* **1:06** – We separated Lone Star Realty LLC from Lonestar Realty Group, caught Elevate Fitness rebranding, and linked Bloom Med Spa's Plano and Frisco clinics.
* **1:22** – In Financial Audit, we matched billing software records against actual bank deposits. The billing tool falsely claimed around $11,000 overdue, but bank records prove that Harbor Coffee and Mike's Roofing already paid.
* **1:47** – True overdue is $9,250. We also caught $13,550 in unbilled work, and a $900 double-payment refund we owe to Glow Aesthetics.
* **2:09** – Evaluators can drop new CSV files into "Add New Files" to test instant client-side updates.
* **2:25** – And on the Jev AI tab, TypeSafe AI runs sub-50ms typed evaluations with 96% accuracy, classifying revisions instantly without slow, expensive chat models.

---

## Part 2: The Three Uncut Questions (0:00 – 1:45)

* **0:01** – Okay, so now it's time to answer the three core questions.
* **0:06** – **Question 1: What was the hardest part?**  
  During building the project, the hardest part was separating real bank truth from billing software errors. The tool claimed around eleven thousand dollars was overdue, but bank payment IDs proved two major clients had already paid. I solved this by treating bank deposits as the sole ground truth and building automated reconciliation.
* **0:27** – **Question 2: What did you get wrong at first?**  
  At first, I assumed Meridian Wealth had around $7,500 in unbilled retainers because invoices were missing after July. But checking `messages.txt` revealed Paul Grant had paused service because his voice notes kept getting dropped. It was not unbilled work—it was client churn.
* **0:59** – **Question 3: What would you tell the owner to stop doing?**  
  Personally, I would tell Zaid to stop two things immediately:  
  First, stop taking edits via voice notes and Instagram DMs; enforce a single 30-second intake form link.  
  Second, stop shooting new content for clients who have invoices overdue by more than 30 days.
* **1:25** – The dashboard is fully live on Vercel at `axeom-pack64.vercel.app`, the code is on GitHub, and all answers are verified in `answers.json`.
* **1:39** – Thank you for your time and consideration, and I'm excited to join the Axeom team!

