# Portfolio Architecture: Multi-Page Ecosystem (MPA)

## General Principles
*   **Framework:** Next.js (App Router) to handle distinct, fast-loading pages.
*   **Vibe:** Premium engineering whitepaper meets high-end editorial magazine. 
*   **Global Navigation:** A minimalist, sticky top nav bar present across all pages: `[ Home ] [ Systems ] [ Ledger ] [ Operator ]` and a prominent `[ Resume ]` outline button.
*   **Structure Style:** High-contrast grids, ultra-thin 1px borders, and generous whitespace.

---

## Route Breakdown & Page Flow

### 1. The Entry Point: `/` (Home)
**The Goal:** High-impact executive summary. Fast loading, zero friction.
*   **The Hero (Top):** Massive, screen-dominating typography. "I build intelligent systems that solve complex, real-world problems." Two main CTAs: [ Explore the Systems ] and [ View Resume ].
*   **The Mindset (Middle):** A clean, horizontal 3-column grid highlighting the core pillars: Impact Over Complexity, Systems Not Just Models, and The Human-in-the-Loop.
*   **Active Deployments (Bottom):** A teaser grid showing only the top 3 high-impact systems (e.g., VERDEX, AI-Driven SOAR, GPrime). Clicking these leads directly to their deep-dive pages.

### 2. The Sandbox: `/systems` (Main Projects Index)
**The Goal:** A searchable, filterable repository of all engineering work.
*   **Header:** "Featured Engineering" – A brief note on building solutions from infrastructure to AI.
*   **Filter Bar:** Minimal text links to sort the grid: `[ All ] [ AI/ML ] [ Backend & Scale ] [ Public Safety ] [ Gamification ]`.
*   **The Grid:** High-contrast cards for every project (VERDEX, AI SOAR, GPrime, CV Safety Engine, Apex). 
*   **Card Anatomy:** Monospace category tag (e.g., `[ BACKEND SCALE ]`), bold title, 2-sentence hook, and an arrow indicating a click-through to the case study.

### 3. The Deep Dives: `/systems/[slug]` (Dynamic Project Templates)
**The Goal:** Treat every major project like a technical whitepaper. This is where you prove you are a system thinker.
*   **Hero Header:** Project title, high-level tag (e.g., Hackathon Winner), and a 1-sentence summary.
*   **The Problem & Solution (Text Block):** Clean editorial layout explaining the context.
*   **Architecture & Workflow:** A dedicated, wide-container section meant to house a system architecture diagram (e.g., showing the XGBoost pipeline routing to LLaMA, or the Docker/Redis offline setup).
*   **Technical Implementation:** A bulleted, technical breakdown of the stack used (PostgreSQL, Socket.io, Gemini API, YOLOv8) and *why* it was chosen.
*   **Live/Code Links:** Prominent Terracotta buttons linking to GitHub repositories, live deployments, or hackathon submission pages.

### 4. The Ledger: `/ledger` (Track Record & Leadership)
**The Goal:** A chronological, database-style readout of momentum, execution, and community impact.
*   **Layout:** A tabular list mimicking a clean financial ledger or database query result. 
*   **Columns:** `Year | Category | Deployment / Role | Impact`.
*   **Content:** 
    *   Hackathon 1st Place (MGIT)
    *   Hackathon 2nd Place (CSI GRIET)
    *   AAC & MLSC Core Member roles
    *   MLOps Community Mentorship

### 5. The Operator: `/operator` (Mindset & Contact)
**The Goal:** The human element isolated to give it breathing room, connecting the engineer to the person.
*   **Layout:** A warmer, slightly more relaxed visual block. The background color can shift to Soft Sand (`#FAF6F0`) for this entire page.
*   **Content:** The "Beyond the Terminal" text block. Discussing high-altitude trekking, executing under pressure, and the drive to build things that matter.
*   **Contact Grid:** Clean, massive text links for `[ Email ]`, `[ LinkedIn ]`, and `[ GitHub ]`.