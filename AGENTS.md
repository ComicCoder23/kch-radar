# AGENTS.md — KCH Radar

> Guidance for Boris (Hermes) and any headless agent working in this repo.

**Remote:** https://github.com/ComicCoder23/kch-radar

---

## Project

**Name:** KCH Radar (Kirky Creative Hub Radar)
**Purpose:** Local events and sober-friendly discovery app for East Dunbartonshire. Helps people find gigs, community events, retreats, and wellbeing opportunities nearby without information overload. The sober filter is a core non-negotiable feature — it must never be removed or deprioritised.
**Canonical path:** `D:\Repos\kch-radar\`
**GitHub remote:** https://github.com/ComicCoder23/kch-radar
**Build:** ~55%

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | Vite 8 + React 18 + react-router-dom v7 |
| Auth | Clerk (`@clerk/clerk-react` ^5.61.6) |
| Payments | Stripe (keys in `server/.env` only — never frontend) |
| Backend | Express — `server/index.js` on port 5000 |
| Database | PostgreSQL via Docker — container: `kch-postgres` |
| DB connection | localhost:5432, db=kch_db, user=kch_user |
| ORM | Prisma (config in `server/prisma/`) |

---

## Run Commands

```powershell
# 1. Start Docker container first (ALWAYS do this before backend)
docker start kch-postgres
docker ps   # verify it is running

# 2. Frontend dev server (port 5173)
cd D:\Repos\kch-radar
npm run dev

# 3. Backend Express server (port 5000 — separate terminal)
cd D:\Repos\kch-radar\server
node index.js

# 4. Production build
cd D:\Repos\kch-radar
npm run build

# 5. Preview production build
npm run preview

# 6. Run DB seed (after migrations)
cd D:\Repos\kch-radar\server
node seed_signals.js
```

---

## Key Files

Read these first when touching this project:

| File | What it is |
|---|---|
| `HANDOVER.md` | Last session state |
| `src/App.jsx` | Route map — all pages wired here |
| `src/components/` | UI components (Navbar, Hero, LocalSignalsFeed, DiscoveryRadar, etc.) |
| `src/pages/` | Page-level components (HomePage, SignalsPage, ProfilePage, SubmitPage, VenuesPage, GuidesPage) |
| `server/index.js` | Express server entry point |
| `server/prisma/` | DB schema and migrations |
| `server/.env` | Clerk webhook secret (`whsec_`) + Stripe secret key — never commit, never log |
| `vite.config.js` | Vite config |

---

## Boris Rules

1. **Start Docker first.** Run `docker start kch-postgres` and verify with `docker ps` before starting the Express server.
2. **Confirm working directory** is `D:\Repos\kch-radar\` before acting.
3. **Run `git pull`** before any edits.
4. **Never expose secrets.** `VITE_CLERK_PUBLISHABLE_KEY` belongs in frontend `.env`. Clerk `whsec_` and Stripe secret key belong in `server/.env` only. Never hardcode, never log.
5. **Run `npm run build`** and confirm it exits cleanly before suggesting any deployment step.
6. **Sober filter is non-negotiable.** Never remove, disable, or deprioritise the sober-friendly event filter. It is a core product feature.
7. **Peer conflict warning.** Vite 8 has a pre-existing peer conflict with `@vitejs/plugin-react` — do not fix without explicit instruction.
8. **Run DB migrations** after starting Docker, before any schema-touching work.
9. **Never push directly to `main`** without Alan approval except docs/HANDOVER.md updates.
10. Update `HANDOVER.md` at every stop point.

---

## Current State

**Build:** ~55%

### Blockers

| ID | Blocker | Blocks |
|---|---|---|
| B2 | Stripe Price ID — must be inserted into `BookingButton.jsx` | Paid booking flow |
| B3 | Clerk Webhook Secret — must be inserted into `server/.env` | Auth webhook verification |

### Next actions (in order)

1. `docker start kch-postgres` — confirm container running
2. Run any pending Prisma migrations against kch_db
3. Smoke-test Clerk auth flow end-to-end once B3 resolved
4. Smoke-test Stripe webhook once B2 resolved
5. Complete frontend: wire `SignalDetailModal`, `SubmitSignalForm`, sober filter toggle, `BookingButton` (blocked on B2)

---

## CRITICAL — Additional Gotchas

- **Docker must be running before the Express server.** If `kch-postgres` is not up, the backend crashes immediately with a DB connection error. Always `docker start kch-postgres` first.
- **Two separate `package.json` files:** root (frontend/Vite) and `server/` (Express/Prisma). Run `npm install` in both after cloning or switching branches.
- **Vite 8 peer conflict** with `@vitejs/plugin-react` is a known pre-existing issue. Do not attempt to resolve it without explicit instruction — it is not blocking builds.
- **Sober filter** must remain a first-class UI element, not hidden behind advanced search. It is the product's ethical differentiator.
- **KCH Radar Master.csv** in the root is a data export/reference — not a source of truth for the DB schema.
