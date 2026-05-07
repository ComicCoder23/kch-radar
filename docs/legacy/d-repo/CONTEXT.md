# CONTEXT â€” KCH / Kirky Creative Hub
# Last Updated: 2026-05-06

---

## Project Identity

- **Full name:** Kirky Creative Hub
- **Alias:** KCH / KCH-Radar
- **Type:** Local discovery app (Kirkintilloch area)
- **Status:** Active â€” backend live, frontend incomplete
- **Priority:** Income Engine â€” Tier 1 digital build

---

## Repos and Paths

| Asset | Location |
|---|---|
| Canonical repo | `ComicCoder23/kch-radar` |
| Active working dir | `D:\kch-radar\` |
| Also cloned at | `C:\Users\Dannielle\kirky-creative-hub\` |
| Alan-App-Lab canonical path | `D:\Alan-App-Lab\04-Live-Products\KCH-Radar\` |

**Active git state:**
- Branch: `main`
- Tracking: `origin/main` â†’ `https://github.com/ComicCoder23/kch-radar.git`

---

## Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite 5 |
| Backend | Node.js, Express 5 |
| ORM | Prisma 7.8.0 (adapter-pg â€” no binary engine) |
| Database | PostgreSQL â€” Docker container `kch-postgres` |
| Auth | Clerk |
| Payments | Stripe |
| Webhooks | Svix |

**Database connection (Docker):**
- Container: `kch-postgres`
- Host: `localhost:5432`
- DB: `kch_db`
- User: `kch_user`

---

## Key Files

```
D:\kch-radar\
â”œâ”€â”€ index.html
â”œâ”€â”€ src\                    â† React frontend
â”œâ”€â”€ server\
â”‚   â”œâ”€â”€ index.js            â† main server, PrismaClient with adapter
â”‚   â”œâ”€â”€ prisma.config.ts    â† Prisma CLI config (reads DATABASE_URL from .env)
â”‚   â””â”€â”€ prisma\
â”‚       â””â”€â”€ schema.prisma   â† User + Booking models (do not change without review)
â”œâ”€â”€ package.json
â””â”€â”€ vite.config.js
```

---

## Critical: Prisma 7 Adapter Pattern

Prisma 7 removed the binary query engine. PrismaClient **must** be initialised with an adapter:

```js
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) })
```

`datasourceUrl` in the PrismaClient constructor is also removed. Always use adapter pattern for any Prisma 7 work on this project.

---

## Start Server

```
cd D:\kch-radar\server
node index.js
```

Server runs on port 5000.

---

## Verified Endpoints (2026-05-06)

| Method | Route | Status |
|---|---|---|
| GET | `/api/health` | 200 ok |
| POST | `/api/create-checkout-session` | Stripe live, responds |
| POST | `/api/webhooks/clerk` | Svix webhook, responds correctly |

---

## Current Build Status

- [x] Backend server live on port 5000
- [x] Prisma 7 adapter fix applied
- [x] Clerk webhooks wired
- [x] Stripe checkout session endpoint live
- [ ] **Frontend Clerk components** â€” incomplete
- [ ] **Stripe Price ID** â€” not yet configured
- [ ] **Webhook secret** â€” not yet set

---

## Environment Variables (server/.env)

Required keys (do not expose or commit):
- `DATABASE_URL`
- `CLERK_SECRET_KEY`
- `STRIPE_SECRET_KEY`
- `PORT` (= 5000)
- `STRIPE_WEBHOOK_SECRET` (pending)

---

## Hard Rules for This Project

- Never change `server/prisma/schema.prisma` without review â€” User + Booking models are load-bearing
- Always use Prisma adapter pattern (never bare PrismaClient without adapter)
- Do not commit `.env` or expose secrets
- Docker container `kch-postgres` must be running before server start

---

## Agent on This Project

- **Primary executor:** Claude Code
- **Reviewer:** Gemini CLI (before merge)
- **Commit agent:** Codex CLI
- See `D:\AI_Control_Tower\03_AGENTS\AGENT_ASSIGNMENTS.md` for full rules

---

## Last Updated By

Claude Code â€” 2026-05-06
Next agent: read this file, then read HANDOVER.md if it exists, then `git pull`, then confirm dir before acting.

- 2026-05-06: Clerk auth wired to frontend. Components re-enabled.
