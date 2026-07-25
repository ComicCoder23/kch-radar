# KCH Server Start & Docker Fix Spec

## Blocker
Backend cannot start; Docker PostgreSQL container is not running.

## Findings
1. `server/package.json` has no `start` script.
2. No `docker-compose.yml` found in repo.
3. Docker is active but `kch-postgres` container is absent (only `qdrant-memory` running).
4. `HANDOVER.md` lists starting `kch-postgres` and running migrations as the next action.

## Required Actions (user-approved)
1. Add `"start": "node index.js"` to `server/package.json` scripts.
2. Provide a `docker-compose.yml` (or equivalent Docker command) to run `kch-postgres` matching `DATABASE_URL` in `server/.env` (`postgresql://kch_user:***@localhost:5432/kch_db`).
3. Run Prisma migrations and seed after container is up.

## Status
Draft — awaiting Alan's approval to implement.
