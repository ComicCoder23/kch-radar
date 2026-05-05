# Kirky Creative Hub (KCH)

A creative hub for local artists and projects, focusing on collaborative work, events, and studio rentals.

## Project Details
- **Objective**: Collaborative creative work, events, and studio rentals.
- **Status**: Backend server live. Frontend in progress.
- **GitHub**: ComicCoder23/kch-radar (main branch)

## Backend Server (`/server`)
- **Stack**: Node.js, Express 5, Prisma 7.8.0, PostgreSQL, Stripe, Clerk, Svix
- **Port**: 5000
- **Database**: Docker container `kch-postgres`, localhost:5432, db=kch_db
- **Prisma 7 note**: Uses `@prisma/adapter-pg` driver adapter — required in Prisma 7 (binary engine removed). PrismaClient init: `new PrismaClient({ adapter: new PrismaPg(pool) })`
- **CLI config**: `prisma.config.ts` handles migrations/generate with DATABASE_URL from .env

### Endpoints (verified 2026-05-06)
| Method | Path | Status |
|--------|------|--------|
| GET | /api/health | Live |
| POST | /api/create-checkout-session | Live (Stripe connected) |
| POST | /api/webhooks/clerk | Live (Svix verified) |

## Systems & Assets
- **Airtable**: [Link to be provided]
- **Notion**: [Link to be provided]
- **Google Drive**: 
  - G:\My Drive\KCH Radar Master
  - G:\My Drive\Alan-App-Lab\04-Live-Products\KCH-Radar

## Next Steps
1. Wire Clerk auth to frontend.
2. Replace `price_placeholder` in checkout session with real Stripe Price ID.
3. Set real `CLERK_WEBHOOK_SECRET` in server/.env.
4. Finalize website design.
