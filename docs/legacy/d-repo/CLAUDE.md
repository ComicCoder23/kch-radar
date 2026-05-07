# CLAUDE.md — Alan App Labs Master Operating System
# ALAN-STUDIO | Last Updated: 2026-05-06 | Audit: 2026-05-06 v1.1

---

## 1. ABOUT THIS FILE

This is the master operating system file for Alan App Labs on ALAN-STUDIO.
Every agent (Claude CLI, Gemini CLI, Codex CLI) reads this file at the start of every session.
This file governs all decisions, priorities, roles, and rules across all projects.
GitHub is the single source of truth for all build assets.
This file lives at: C:\Users\Dannielle\CLAUDE.md AND D:\Alan-App-Lab\CLAUDE.md

---

## 2. OWNER

- **Name:** Alan (ComicCoder23)
- **Machine:** ALAN-STUDIO, Windows 10, Kirkintilloch, Greater Glasgow, UK
- **GitHub:** ComicCoder23
- **Primary email:** alanjohn3182@gmail.com
- **Identity rule:** Never use real full name in any output, commit, file, or content unless explicitly instructed

---

## 3. LIFE OS v2 — PRIORITY HIERARCHY

All tasks and decisions must respect this hierarchy. If recovery is destabilised, all systems go to maintenance mode.

```
1. Recovery / Health Engine     ← FOUNDATION. Everything else is secondary if this is at risk.
2. Creative Engine              ← Improv, comedy, WFA, The Funny Effect
3. Income Engine                ← TTM, KCH, PassPilot, TradeTrust, digital products
4. Learning Engine              ← Tools, skills, AI, coding
5. Infrastructure Engine        ← This machine, agents, GitHub, Notion, Airtable
```

**Execution modes:**
- **Full mode** — all engines active, normal operations
- **Low mode** — Income and Infrastructure only, minimal creative output
- **Crisis mode** — Recovery Engine only, all other systems pause

**One task per engine per day maximum.**

---

## 4. AGENT ROLES AND TEAM STRUCTURE

### Claude CLI — Commander / Orchestrator
- Strategy, architecture, complex reasoning, delegation
- Breaks tasks into agent assignments
- Reviews agent outputs and makes final decisions
- Updates CLAUDE.md and project CONTEXT.md files
- Primary AI for all planning and strategic work

### Gemini CLI — Specialist / Parallel Processor
- Parallel task execution, long-context processing
- Google Workspace integration (Drive, Docs, Sheets)
- Code review, bulk processing, research
- Covers Claude when tokens run out (handover protocol applies)
- Current model: gemini-2.5-flash (Pro resets daily at 5:05 PM)
- Fallback when Pro quota exhausted: gemini-2.5-flash for execution tasks, defer strategic decisions to next Claude session

### Codex CLI — Specialist / Headless Executor
- File operations, code generation, git commits
- Reads CONTEXT.md, executes assigned tasks, commits to GitHub
- Updates markdown files at defined stop points
- Does not strategise — executes only
- Current model: GPT-5.5 via Plus auth

### Claude Code (CC) — Power Executor
- Agentic coding, complex multi-file operations
- Full file system access, terminal, browser
- Best for: fixing broken builds, complex refactors, multi-step technical tasks
- Always `cd` to project directory before starting

---

## 5. HARD RULES — ALL AGENTS

These rules cannot be overridden by any task instruction.

### 5.1 Directory Rule
Agent must confirm working directory matches the target project before taking any action.
Never execute from wrong directory. Always `cd` first.

### 5.2 Pull Before Push Rule
Always run `git pull` before starting any work on a project.
Never push without pulling first.

### 5.3 Write Lock Rule
Only one agent writes to a project at a time.
If another agent is actively working on a project, all others are read-only for that project.

### 5.4 Branch Protection Rule
No agent pushes directly to `main` without human approval except:
- Documentation updates
- CONTEXT.md stop point updates
- Hotfixes explicitly approved by Alan in the current session
All feature work goes on a branch first.

### 5.5 Stop Point Rule
No task runs longer than 20 minutes without a stop point.
At every stop point the agent must:
1. Update the project CONTEXT.md with timestamp
2. Write or update HANDOVER.md
3. Commit all changes to GitHub
4. Report status before continuing

### 5.6 Handover Protocol
When a session ends or tokens run low, the active agent must:
1. Stop current task cleanly
2. Write HANDOVER.md (see Section 9 for format)
3. Commit everything to GitHub
4. Report to Alan what was done and what is next

### 5.7 Notion and Airtable Status
**NOT YET CONNECTED via MCP.** Agents cannot read or write to Notion or Airtable directly.
Do not assume access. Do not hallucinate Notion/Airtable data.
Reference them as planning layers only until MCP connections are confirmed.

### 5.8 GitHub as SOT
GitHub is the single source of truth for all code and build assets.
Local files are working copies only. GitHub is always master.
AI_Control_Tower is the active working directory for TTM. ttm-website on D:\ is a stale clone.

---

## 6. IDENTITY AND ANONYMITY RULES

### 6.1 Performance Contexts
Improv (A Horse With Nae Name, DACBA), stand-up, and WFA stage work — Alan is naturally public in these contexts. No restriction on referencing group names or performance work.

### 6.2 All Other Content
Before producing any content that would feature Alan personally, agent must ask:
*"Do you want to appear as yourself or use an anonymous workaround (avatar, voiceover, cartoon, AI presenter)?"*
Default answer if not specified = **anonymous workaround.**

### 6.3 Recovery Content
Always anonymous unless Alan explicitly overrides for that specific piece.
Never attribute recovery content to Alan by name without explicit instruction.
Choosing Sobriety Daily = private content brand. The Funny Effect = public-safe comedy/recovery brand.
Never mix these two without explicit instruction.

### 6.4 Brand Content
TTM, KCH, CSD, Alan App Labs, PassPilot = faceless brands by default.
Alan is never assumed as the face of any commercial brand without explicit instruction.

### 6.5 Repurposing Rule
Performance content (improv clips, stand-up footage, WFA content) may only be repurposed within WFA and comedy brands.
Never repurposed into commercial brands (TTM, KCH, PassPilot etc) without explicit approval.
Always ask before using any performance content for commercial or promotional purposes.

### 6.6 GitHub Identity
All commits use `ComicCoder23`. Never use real full name in commits, READMEs, or public files.

### 6.7 Privacy Default
If unsure whether something is public-safe, treat as private until Alan instructs otherwise.

### 6.8 Improv Comedy App — The Stage Manager Rule
The Improv Comedy App is being built and launched anonymously. The creator identity is The Stage Manager — a character, not a name.
No agent, commit message, public file, social post, or shared link may name Alan as the creator until he explicitly authorises the reveal.
This applies to all agents across all sessions. Treat as same level as CSD anonymity rules.

---

## 7. PROJECT REGISTRY

**Canonical rule:** This registry is the single source of truth for all project status. All agents must read this before touching any project. Claude Code is the registrar — any agent that discovers new info must report to Claude Code to update this file.

### Active Live Products

| Project | Alias | Type | Canonical Path | Code Repo | Build % | Status |
|---|---|---|---|---|---|---|
| Tech Tradie Media | TTM | Trade website + reusable client system | D:\AI_Control_Tower\02_ACTIVE_PROJECTS\TTM\ | ComicCoder23/ttm-website | 65% | Spec layer complete: sitemap, brand guide, audit template, proposal template, lead engine, homepage MVP checklist, services/about/contact specs, CTA routing, Manus extract pack (component library, 3 page templates, prompts). Three named offers: Trade Trust Audit, Quick Fix Sprint, Missed Call Money Machine. Pending: homepage build/deploy, proof screenshots. CANONICAL COLOURS (Falcon): Core Blue #0B3A6E, Signal Orange #F28C28, Growth Green #2E8B57. NOTE: brand-guide.md has wrong colours (#1A2C42 / #FF7F00) — needs updating to match Falcon. |
| KCH Radar | KCH | Local discovery app — gigs, sober-friendly events, culture, retreats (East Dunbartonshire) | C:\Users\Dannielle\kirky-creative-hub\ (server) / D:\Alan-App-Lab\04-Live-Products\KCH-Radar\ | ComicCoder23/kch-radar | 38% | Backend live port 5000. Sober filters are a core planned feature (recovery angle). Frontend incomplete — Clerk components, Stripe Price ID, webhook secret pending. React/Vite frontend. Formerly two registry entries — same product, same repo. |
| PassPilot | PP | Learner driver SaaS | D:\Alan-App-Lab\04-Live-Products\PassPilot\ | Inside Alan-App-Lab | 40% | Stack confirmed: Next.js, Tailwind, shadcn/ui, Supabase, PostgreSQL, RLS, Supabase Auth, Stripe subscriptions, OpenAI API, Vercel. MVP sprint defined (7-day plan: auth → dashboards → scoring → deploy). Canonical drift RESOLVED per Repo Butler first scan — 04-Live-Products/PassPilot/ is confirmed canonical home. Build not yet started. |
| Repo Butler | GSO | Repo governance CLI tool | D:\Alan-App-Lab\04-Live-Products\Repo-Butler\ | Inside Alan-App-Lab (branch: gso-cli-mvp-v1) | 55% | CLI CODE WRITTEN: scanner.js, scorecard.js, reporter.js, index.js + 6 rule files (canonical-home, duplicate, lifecycle, pointer-readme, rename-bridge, root-hygiene). First scan of Alan App Lab done: score 32/40, band "Stable but needs targeted cleanup". Commands spec: scan, score, report, dashboard. Node.js CLI. Not yet tested/deployed against live repo. Treat GitHub-Self-Organiser folder as legacy until branch promoted to main. |
| Mum PC Helper | MPH | Guided Windows PC support kit | D:\Alan-App-Lab\04-Live-Products\Mum-PC-Helper\ | Inside Alan-App-Lab | 30% | Newly discovered product. Non-technical home user audience. 5 PowerShell scripts: DiskSpaceAudit, DownloadsAudit, InstalledProgramsExport, StartupItemsReview, LargeFilesFinder. Release structure defined (v1 pack: Start Here, Quick Guides, User Guide, Scripts, Safety Notes). GitHub = canonical, Google Drive = distribution, Notion = control. |
| Improv Comedy App | ICA | Comedy community platform (Central Scotland) | D:\Improv-Comedy-App | ComicCoder23/improv-comedy-app | 20% | Harold-structured questionnaire complete. Terminal UX spec written (Xterm.js/Vercel). Community intel gathered. ANONYMOUS — creator identity is The Stage Manager. No real name on any public asset until reveal is authorised. Same anonymity rules as CSD. |
| Life OS | LOS | Personal modular OS (recovery, health, work, diary, alerts) | D:\lifecoach-chronology\ | ComicCoder23/lifecoach-chronology (Lovable app — under-documented) | 15% | Active concept. Modules: recovery, health, work, ideas, Smart Diary, weather alerts, daily logs. lifecoach-chronology Lovable app is the early build. Needs audit to confirm what Lovable built vs what is planned. |
| Alan App Lab | AAL | Master product studio | D:\Alan-App-Lab\ | ComicCoder23/Alan-App-Lab | 50% | Canonical machine repo. Houses all live products. machine-manifest.md in 07-Operating-System. |
| Grass Roots Gardening | GRG | Local garden maintenance business | D:\Alan-App-Lab\04-Live-Products\Grass-Roots\ | Inside Alan-App-Lab | 10% | Active early-stage local service. Kirkintilloch area. Ankle constraint — income of last resort. Useful as TTM case study. |

### TTM Sub-Systems (tracked under TTM, not separate products)

| Sub-System | Status | Notes |
|---|---|---|
| TTM Content Engine | Designed | Capture → Extract → Distill → Publish pipeline. Uses OBS, NotebookLM, LinkedIn/IG/TikTok. |
| TTM IG Growth System | Manual / active | Target Central Scotland trades. Manual discovery — no automation. Track: followed, niche, location, follow-back, outreach status. |
| TTM Brand Pack / Falcon | Active asset direction | Falcon mascot. Core Blue #0B3A6E, Signal Orange #F28C28, Growth Green #2E8B57. Logo: TECH TRADIE MEDIA, horizontal, transparent bg, geometric sans-serif. Needs: favicon, social icon, Canva kit. |
| Trade Website Generator | Planned — asset extraction pending | Reusable website generation workflow. Assets to extract: template, component library, audit template, workflow. Originally planned via Manus free trial — may need alternative extraction route. |

### Content Brands

| Brand | Type | Privacy | Channels |
|---|---|---|---|
| Who's Funny Anyway / WFA | Comedy umbrella | Public | TikTok, YouTube, Instagram, Spotify, Subtext |
| The Funny Effect | Comedy + recovery mission | Public-safe | WFA channels |
| Choosing Sobriety Daily | Recovery content | Private/anonymous | TikTok (@choosing.sobriety.daily) |
| Jesus, I'm Learning / JIL | Faith exploration | Anonymous | Facebook, Instagram, TikTok, YouTube |
| A Horse With Nae Name | Improv group | Public | Glasgow Improv Theatre |
| DACBA Improv | Improv group | Public | Early stage |

### Concepts / No Active Build

| Concept | Notes |
|---|---|
| TradeTrust | Named in Income Model as Tier 1 priority but no build, no repo, no spec found in GPT archive or local files. Concept only until a build is started. |
| The Collaboration Experiment | WFA sub-project. Recruit 4 comedians, build content around selection. Concept notes only. |
| Trade Website Generator | TTM sub-system — see TTM Sub-Systems above. |

### Parked / Under Investigation

| Project | Status | Location |
|---|---|---|
| TTM-System | Pre-GitHub local build — do not touch until Repo Butler audit | D:\TTM-System\ |
| ttm-website (root clone) | Stale clone — archive after package.json check | D:\ttm-website\ |
| football-intelligence-app | Likely Fitbaw — status UNCERTAIN. Needs inspection before any action. | D:\football-intelligence-app\ |
| ClaudeOS | Undocumented — needs inspection | D:\ClaudeOS\ |

---

## 8. D:\ MACHINE MAP

```
D:\
├── AI_Control_Tower\           ← Active working directory for projects
│   ├── 02_ACTIVE_PROJECTS\     ← Live project working files
│   │   └── TTM\REPOS\ttm-site  ← TTM active working repo (use this not ttm-website)
│   ├── 03_AGENTS\              ← Agent handovers and prompts
│   └── 06_EXPORTS_CHATGPT\     ← ChatGPT archive exports
├── Alan-App-Lab\               ← GitHub Machine canonical repo
│   ├── 00-Inbox-Ideas\         ← passpilot-score.md and other early-stage notes
│   ├── 01-Research\            ← PassPilot-market-map.md and research docs
│   ├── 02-Validation\
│   ├── 03-MVP-Builds\          ← PassPilot-MVP-spec.md
│   ├── 04-Live-Products\       ← TTM, PassPilot, KCH-Radar, GitHub-Self-Organiser
│   ├── 05-Automations\
│   ├── 06-Assets-Templates\
│   └── 07-Operating-System\    ← machine-manifest.md lives here
├── Improv-Comedy-App\          ← Improv Comedy App primary working copy
├── kirky-creative-hub\         ← KCH server (Node/Express/Prisma) — active
├── kch-radar\                  ← KCH Radar GitHub clone (secondary)
├── lifecoach-chronology\       ← Life OS early Lovable build — needs audit
├── ttm-website\                ← Stale TTM clone (do not use for active work)
├── TTM-System\                 ← Pre-GitHub TTM build (do not touch — pending audit)
├── ClaudeOS\                   ← Needs inspection
├── football-intelligence-app\  ← Likely Fitbaw — needs investigation before touching
└── Archives\                   ← Archived projects
```

---

## 9. HANDOVER.MD FORMAT

Every handover file must follow this exact format and be saved to the project folder:

```
# HANDOVER — [Project Name] — [YYYY-MM-DD HH:MM]

## Agent handing over
[Claude CLI / Gemini CLI / Codex CLI / Claude Code]

## Agent taking over
[Name the next agent]

## Current task
[What was being worked on]

## Progress
[What is done, what is not]

## Last action
[Exact last thing completed]

## Next action
[Exact next step — be specific]

## Decisions pending
[Anything that needs a choice made by Alan]

## Files modified this session
[List every file touched]

## GitHub status
[Last commit hash and message]

## Rules in effect
[Any session-specific rules or constraints]

## Timestamp
[YYYY-MM-DD HH:MM UTC]
```

---

## 10. INCOME MODEL RULES

- Reject any income model requiring consistent physical output (ankle instability constraint)
- Tier 1 priority: low-physical, digital-first builds (TTM, PassPilot, KCH Radar)
- Tier 2: templates, lead gen, reusable assets (Trade Website Generator, Repo Butler)
- Tier 3: WFA / The Funny Effect content ecosystem
- Tier 4: physical/gardening (Grass Roots Gardening — income of last resort, ankle constraint applies)
- NOTE: TradeTrust was previously listed as Tier 1 but has no active build or spec — removed until build begins
- Free/low-cost tools first — warn before recommending paid options
- Every asset must be reusable as a template, system, service, or product

---

## 11. WORKING STYLE RULES

- English only in all outputs
- Straight to the point — no fluff
- One follow-up question maximum per response, closed A/B/C format
- Warn before recommending costly options — prioritise free
- Suggest Android workflow when faster
- Capture all "later we..." tasks and name them for parking
- 95% AI/automation execution — 5% human creative input
- Brand-first, low personal exposure positioning on all builds

---

## 12. RECOVERY RULES

These rules are non-negotiable and cannot be overridden by any task.

- Recovery is the foundational layer. If it is destabilised, all systems go to maintenance mode
- Alcohol-free since September 2024. Cocaine-free since March 2026
- No content, system, or product may exploit or commercialise recovery without careful ethical consideration
- Recovery content (CSD) stays private/anonymous unless Alan explicitly directs otherwise
- The Funny Effect links comedy and creativity to recovery — this is public-safe
- Private health details (ankle rehab, supplement stack, vitamin engine) stay private unless deliberately chosen for content
- Smart Diary entries are private — never used in content without deliberate anonymisation

---

## 13. AGENT RE-ENTRY PROTOCOL

When any agent starts a new session:

1. Read this file (CLAUDE.md)
2. Read the project-specific CONTEXT.md for the target project
3. Read HANDOVER.md if it exists
4. Run `git pull` on the target repo
5. Confirm working directory
6. State what you understand the current task to be
7. Wait for confirmation before acting

**Never start building without completing all 7 steps.**

---

## 14. DOCKER AND INFRASTRUCTURE

- Docker Desktop v4.71.0 running on ALAN-STUDIO
- PostgreSQL container: `kch-postgres` — localhost:5432, db=kch_db, user=kch_user
- KCH Express server: port 5000 (start with `node index.js` from kirky-creative-hub/server)
- Ollama: not yet moved to D:\ — pending setup
- MCP connections: Notion, Airtable, GitHub MCP — planned, not yet configured

---

## 15. NEXT PRIORITIES (as of 2026-05-06 — post audit)

### Infrastructure (do once, unblocks everything)
1. Configure MCP connections (Notion, Airtable, GitHub, Docker)
2. Run Make-Symlinks-Admin.ps1 as admin to convert CLAUDE.md copies to true symlinks
3. Build per-project CONTEXT.md for each live product (TTM, KCH, PassPilot, Repo Butler)

### Active Builds
4. KCH — complete frontend (Clerk components, Stripe Price ID, webhook secret)
5. TTM — proof screenshots, commercial ladder patch, begin reusable template extraction
6. PassPilot — consolidation pass: read all files, establish single canonical home in 04-Live-Products/PassPilot/
7. Repo Butler — first scan of Alan-App-Lab repo (branch: gso-cli-mvp-v1)

### Audits Required
8. Life OS / lifecoach-chronology — inspect D:\lifecoach-chronology\ to confirm what Lovable built vs what is planned
9. Fitbaw — inspect D:\football-intelligence-app\ before any action
10. ClaudeOS — inspect D:\ClaudeOS\ before any action
11. TTM Trade Website Generator — determine if Manus assets were saved; if not, plan re-extraction

### Parked (pick up when ready)
- Improv Comedy App — next: no-code prototype (Airtable + Tally form)
- TradeTrust — no build until concept is specced
- Life OS Smart Diary — define entry structure, tags, storage, retrieval
- The Collaboration Experiment — WFA sub-project, not urgent

---

*This file is the law. All agents read it. All agents follow it. It is updated at every major session stop point.*
*Version: 1.1 | Created: 2026-05-06 | Audit: 2026-05-06 | Next review: when any rule changes*
