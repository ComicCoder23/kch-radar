# KCH Current State Audit (May 7, 2026)

## 1. Project Overview
Kirky Creative Hub (KCH) is a hyper-local platform for Kirkintilloch (G66), focusing on "Live Radar" discovery of community events (Signals) and creative opportunities.

## 2. Technical Stack
- **Frontend**: Vite + React (TypeScript ready but currently using JSX).
- **Backend**: Node.js Express 5.
- **Database**: PostgreSQL (Docker: `kch-postgres`) with Prisma 7.8.0.
- **Auth**: Clerk (ClerkProvider integrated in `main.jsx`).
- **Payments**: Stripe (Stripe SDK in backend, `@stripe/stripe-js` in frontend).

## 3. Backend Architecture (`/server`)
- **Main Entry**: `server/index.js`
- **Database Client**: Prisma + PostgreSQL (with `@prisma/adapter-pg` for connection pooling).
- **API Routes**:
    - `POST /api/webhooks/clerk`: Verifies svix signatures from Clerk to sync user data (upsert `User` model).
    - `POST /api/create-checkout-session`: Creates a Stripe Checkout session with a placeholder `priceId`.
    - `GET /api/signals`: Returns all signals ordered by `sortOrder`.
    - `POST /api/signals`: Allows creation of new signals (used by `SubmitSignalForm`).
    - `GET /api/health`: Basic status check.

## 4. Prisma Models (`server/prisma/schema.prisma`)
- **User**: Stores Clerk ID, email, name, role, and relations to bookings.
- **Booking**: Tracks studio sessions, status, and Stripe session IDs.
- **Signal**: Flexible model for events/opportunities. Fields: `category`, `title`, `town`, `address`, `date`, `note`, `link`, `cardType`, `section`, `sortOrder`, `badge`, `ctaText`.

## 5. Frontend Architecture (`/src`)
- **Main Entry**: `src/main.jsx` (ClerkProvider wrapper).
- **Core Logic**: `src/App.jsx` handles data fetching with a fallback pattern.
    - **Step 1**: Fetch from local backend (`/api/signals`).
    - **Step 2**: If local fails or is empty, fetch from Google Sheets Macro.
- **Components**:
    - `DiscoveryRadar`: Visual aesthetic header.
    - `FeaturedNow`, `HiddenOpportunities`, `LocalSignalsFeed`: Grid displays for filtered signal data.
    - `SubmitSignalForm`: Clerk-guarded form for users to submit new signals to the local DB.
    - `BookingButton`: Stripe-integrated button for studio bookings (currently holds `price_placeholder`).
    - `CategoryGrid`: Browseable taxonomy of all active cards.

## 6. Data Seeding
- **Script**: `server/seed_signals.js`
- **Content**: Populates the `Signal` table with high-quality, hyper-local Kirkintilloch examples (Auld Kirk Museum, McGinley's Bar, etc.).

## 7. Configuration & Environment
- **Root `.env`**: Contains `VITE_CLERK_PUBLISHABLE_KEY`, `VITE_STRIPE_PUBLISHABLE_KEY`.
- **Server `.env`**: Contains `DATABASE_URL`, `CLERK_WEBHOOK_SECRET`, `STRIPE_SECRET_KEY`, `FRONTEND_URL`.

## 8. Fragile Areas / Technical Debt
- **Hardcoded URLs**: `http://localhost:5000` and `http://localhost:5173` are used in several places; should be unified via environment variables.
- **Normalization**: `normalizeFeedItem` in `App.jsx` is defensive against varied data structures (Local DB vs. Google Sheets).
- **Stripe Placeholders**: `price_placeholder` must be replaced with real Stripe Price IDs before production.
- **BookingButton Visibility**: The component is imported but not currently rendered in the main `App.jsx` layout (needs positioning).

## 9. Safe Next Edits
1.  **Rendering `BookingButton`**: Add the button to a logical place in the UI (e.g., a "Studio" section).
2.  **Environment Variable Hardening**: Ensure all fetch calls use `import.meta.env.VITE_API_URL`.
3.  **UI Refinement**: Enhance the `DiscoveryRadar` with more dynamic animations.
4.  **Admin Panel**: Create a restricted route for managing/deleting submitted signals.
