# KCH Headless Codex Jobs

Purpose:
Break KCH into small, safe, inspect-first implementation jobs for headless Codex CLI.

Operating rules:
- One job at a time.
- Inspect before editing.
- Preserve existing project conventions.
- No broad rebuilds.
- No secrets.
- No paid services.
- No fake live functionality.
- No destructive changes.
- Keep KCH focused on local discovery first.

---

## KCH-CODEX-001 — Repo Audit

GOAL:
Audit the current KCH project before editing.

FILES TO INSPECT:
- package.json
- server/index.js
- src/main.jsx
- src/App.jsx
- src/components/*
- server/prisma/schema.prisma
- server/seed_signals.js
- src/index.css
- any existing docs folder

LIKELY FILES TO EDIT:
- docs/audits/kch-current-state.md

ACCEPTANCE CRITERIA:
- Document framework, routes, components, backend endpoints, Prisma models, seed scripts, Clerk usage, Stripe placeholder usage.
- Document existing Signal flow.
- List fragile files.
- List safe next edits.
- No app functionality changed.

CONSTRAINTS:
- Do not install packages.
- Do not edit app code.
- Do not assume structure without reading files.

CODEX PROMPT:
You are inside the KCH repo. Inspect the project and create docs/audits/kch-current-state.md. Document the frontend framework, backend server, routes, components, Prisma models, seed scripts, Clerk usage, Stripe placeholder usage, existing Signal flow, fragile files, and safe next edits. Do not change app functionality.

---

## KCH-CODEX-002 — Routing Foundation

GOAL:
Add clean frontend routing without breaking the existing homepage.

FILES TO INSPECT:
- src/main.jsx
- src/App.jsx
- package.json
- src/components/Navbar.jsx

LIKELY FILES TO EDIT:
- package.json
- src/main.jsx
- src/App.jsx
- src/pages/HomePage.jsx
- src/pages/ProfilePage.jsx
- src/pages/SuccessPage.jsx
- src/pages/CancelPage.jsx
- src/pages/SignalsPage.jsx
- src/pages/SubmitPage.jsx

ACCEPTANCE CRITERIA:
- react-router-dom installed only if missing.
- Routes exist for /, /signals, /submit, /profile, /success, /cancel.
- Existing homepage still works.
- Navbar links do not break.
- No payment logic added.

CONSTRAINTS:
- Preserve current App.jsx behaviour where possible.
- Do not redesign the whole app.
- Do not add auth gating yet.

CODEX PROMPT:
Inspect the current KCH frontend routing setup. Add react-router-dom only if missing. Create safe routes for /, /signals, /submit, /profile, /success, and /cancel while preserving the existing homepage and Signal fetching behaviour. Do not redesign the app or add payment logic.

---

## KCH-CODEX-003 — Signal Detail Modal or Page

GOAL:
Allow users to open a Signal and see deeper information.

FILES TO INSPECT:
- src/App.jsx
- src/components/LocalSignalsFeed.jsx
- src/components/*
- current Signal data shape from API response or mock fallback

LIKELY FILES TO EDIT:
- src/components/SignalDetailModal.jsx
- src/components/LocalSignalsFeed.jsx
- src/App.jsx if needed

ACCEPTANCE CRITERIA:
- Clicking a Signal opens a detail modal or detail panel.
- Shows title, description, category, location, date/time if available, source link if available, tags if available.
- Handles missing fields gracefully.
- Escape/close button works.
- Mobile-friendly.

CONSTRAINTS:
- No backend changes.
- Do not assume all fields exist.
- Do not break existing feed rendering.

CODEX PROMPT:
Inspect the current Signal feed and data shape. Add a SignalDetailModal or equivalent detail panel that opens when a Signal card is clicked. Display all available useful fields and handle missing fields gracefully. Keep it mobile-friendly and do not change backend code.

---

## KCH-CODEX-004 — Signal Search

GOAL:
Add text search to the local discovery feed.

FILES TO INSPECT:
- src/components/LocalSignalsFeed.jsx
- src/App.jsx
- current Signal data structure

LIKELY FILES TO EDIT:
- src/components/LocalSignalsFeed.jsx
- src/components/SignalSearchBar.jsx if useful

ACCEPTANCE CRITERIA:
- Search filters Signals by title, description, category, location, and tags where available.
- Search is frontend-only for now.
- Empty state appears when no results match.
- Existing live API fetch remains unchanged.

CONSTRAINTS:
- No backend search.
- No paid search service.
- No new dependency unless already present.

CODEX PROMPT:
Add frontend text search to the KCH LocalSignalsFeed. Search should filter the loaded Signals by title, description, category, location, and tags where available. Add a clear empty state for no matches. Do not alter the backend fetch logic.

---

## KCH-CODEX-005 — Signal Filters

GOAL:
Add simple useful filters for local discovery.

FILES TO INSPECT:
- src/components/LocalSignalsFeed.jsx
- src/components/CategoryGrid.jsx
- current Signal category/tag fields

LIKELY FILES TO EDIT:
- src/components/LocalSignalsFeed.jsx
- src/components/SignalFilters.jsx if useful
- src/components/CategoryGrid.jsx if needed

ACCEPTANCE CRITERIA:
- Add category filter based on available Signal categories.
- Add simple preset filters where possible: Today, This Weekend, Free, Creative, Community, Venue, Opportunity.
- Filters degrade gracefully if fields are missing.
- Clear filters button exists.

CONSTRAINTS:
- Do not change database schema.
- Do not invent categories that break existing data.
- Keep UI simple.

CODEX PROMPT:
Add simple frontend filters to the KCH Signal feed. Use available Signal categories/tags from the loaded data. Add category filtering and safe preset filters such as Today, This Weekend, Free, Creative, Community, Venue, and Opportunity where the data supports it. Include a Clear Filters button. Do not change the database schema.

---

## KCH-CODEX-006 — Submit Form Validation and Loading

GOAL:
Make signal submission feel reliable.

FILES TO INSPECT:
- src/components/SubmitSignalForm.jsx
- server/index.js
- any API client/helper files

LIKELY FILES TO EDIT:
- src/components/SubmitSignalForm.jsx

ACCEPTANCE CRITERIA:
- Required fields validate before submit.
- Submit button shows loading/submitting state.
- Success and error messages display clearly.
- Form cannot double-submit.
- Existing backend endpoint preserved.

CONSTRAINTS:
- Do not add new form library.
- Do not change backend unless essential.
- Do not pretend moderation exists if it does not.

CODEX PROMPT:
Improve SubmitSignalForm with basic validation, loading/submitting state, double-submit prevention, and clear success/error messages. Preserve the existing backend endpoint and do not add new form libraries.

---

## KCH-CODEX-007 — Safe BookingButton Mount

GOAL:
Render the BookingButton safely without requiring live Stripe setup.

FILES TO INSPECT:
- src/App.jsx
- src/components/BookingButton.jsx
- server/index.js
- .env.example if present

LIKELY FILES TO EDIT:
- src/App.jsx
- src/components/BookingButton.jsx
- .env.example
- docs/setup/stripe-clerk-env.md

ACCEPTANCE CRITERIA:
- Homepage has a small Studio Hire or Venue Hire section.
- BookingButton appears only if safe.
- If Stripe price/env values are placeholders or missing, show disabled “Booking system coming soon” state.
- No real secrets added.
- .env.example documents required names only.

CONSTRAINTS:
- Do not paste or request real keys.
- Do not make live Stripe calls with placeholders.
- Do not make booking central to the homepage.

CODEX PROMPT:
Mount BookingButton safely in a small Studio Hire or Venue Hire section. Inspect BookingButton and server Stripe usage first. If required Stripe env vars are missing or placeholders, render a disabled “Booking system coming soon” state instead of making live calls. Add or update .env.example and docs/setup/stripe-clerk-env.md with required variable names only. Never add real secrets.

---

## KCH-CODEX-008 — Loading, Error, and Empty States

GOAL:
Make the current prototype feel stable.

FILES TO INSPECT:
- src/App.jsx
- src/components/LocalSignalsFeed.jsx
- src/index.css
- any existing loader/error components

LIKELY FILES TO EDIT:
- src/App.jsx
- src/components/LocalSignalsFeed.jsx
- src/components/SkeletonLoader.jsx
- src/components/EmptyState.jsx
- src/components/ErrorState.jsx

ACCEPTANCE CRITERIA:
- Feed shows loading state while fetching.
- Feed shows useful error state if backend fails and fallback is unavailable.
- Feed shows empty state if no Signals exist.
- Visual style matches current KCH aesthetic.
- No new dependency.

CONSTRAINTS:
- Do not rewrite fetch architecture.
- Do not hide real errors from console.
- Keep it simple.

CODEX PROMPT:
Add loading, error, and empty states to the KCH Signal feed and homepage data areas. Preserve existing fetch and fallback behaviour. Match the current KCH visual style and do not add dependencies.

---

## KCH-CODEX-009 — Trust and Freshness Badges

GOAL:
Make local listings feel trustworthy and current.

FILES TO INSPECT:
- src/components/LocalSignalsFeed.jsx
- src/components/*
- current Signal fields

LIKELY FILES TO EDIT:
- src/components/TrustBadge.jsx
- src/components/SignalCard.jsx if present
- src/components/LocalSignalsFeed.jsx

ACCEPTANCE CRITERIA:
- Add badges where data supports them:
  - Recently added
  - Happening soon
  - Needs verification
  - Verified placeholder
  - Community
  - Creative
  - Venue
  - Opportunity
- Missing fields do not break UI.
- Badges are visually clear but not cluttered.

CONSTRAINTS:
- Do not change database schema.
- Do not falsely mark listings as verified.
- Use placeholder/derived logic only.

CODEX PROMPT:
Add simple trust and freshness badges to KCH Signal cards using existing data only. Support recently added, happening soon, needs verification, verified placeholder, community, creative, venue, and opportunity where safe. Do not falsely mark anything as verified and do not change the database schema.

---

## KCH-CODEX-010 — Signed-In Submit Gate

GOAL:
Only signed-in users should be encouraged to submit Signals.

FILES TO INSPECT:
- src/main.jsx
- src/components/SubmitSignalForm.jsx
- Clerk setup files
- src/components/Navbar.jsx

LIKELY FILES TO EDIT:
- src/pages/SubmitPage.jsx
- src/components/SubmitSignalForm.jsx

ACCEPTANCE CRITERIA:
- If user is signed out, show a clear sign-in prompt.
- If user is signed in, show SubmitSignalForm.
- No backend auth changes unless already supported.
- User experience is clear.

CONSTRAINTS:
- Do not build full permissions system.
- Do not break Clerk.
- Do not expose private user data.

CODEX PROMPT:
Use the existing Clerk setup to gate the Submit Signal page or component. Signed-out users should see a clear sign-in prompt. Signed-in users should see the form. Do not build a full permissions system and do not change backend auth unless already supported.

---

## KCH-CODEX-011 — Signal Status Backlog or Safe Schema Check

GOAL:
Work out whether Signal status lifecycle already exists.

FILES TO INSPECT:
- server/prisma/schema.prisma
- server/index.js
- server/seed_signals.js
- frontend Signal rendering files

LIKELY FILES TO EDIT:
- docs/backlog/kch-signal-status-lifecycle.md

ACCEPTANCE CRITERIA:
- Document whether Signal supports status.
- If status exists, document how it is used.
- If status does not exist, create a migration proposal only.
- Do not run risky migrations.

CONSTRAINTS:
- Do not change production-like data.
- Do not run migration unless explicitly instructed later.
- No admin build yet.

CODEX PROMPT:
Inspect the Prisma Signal model and backend/frontend usage. Document whether a status lifecycle exists for submitted, approved, live, and expired Signals. If missing, create docs/backlog/kch-signal-status-lifecycle.md with a safe migration proposal. Do not run migrations or change schema.

---

## KCH-CODEX-012 — Admin Moderation Backlog

GOAL:
Document the future admin system needed to keep KCH trustworthy.

FILES TO INSPECT:
- server/prisma/schema.prisma
- server/index.js
- Clerk setup
- existing docs folder

LIKELY FILES TO EDIT:
- docs/backlog/kch-admin-moderation.md

ACCEPTANCE CRITERIA:
- Document submitted listing flow.
- Document approve/reject/edit/expire/verify process.
- Document minimum viable admin approach.
- Document future full dashboard approach.
- No app code required.

CONSTRAINTS:
- Keep low-cost.
- No unnecessary auth complexity.
- No paid service assumptions.

CODEX PROMPT:
Create docs/backlog/kch-admin-moderation.md documenting the future admin moderation system for KCH. Include submitted listing flow, approve/reject/edit/expire/verify, spam prevention, MVP admin approach, future dashboard, and status lifecycle. Do not implement code.

---

## KCH-CODEX-013 — Global Footer

GOAL:
Add a clean footer to make the app feel complete.

FILES TO INSPECT:
- src/App.jsx
- src/components/*
- src/index.css

LIKELY FILES TO EDIT:
- src/components/GlobalFooter.jsx
- src/App.jsx
- src/index.css if needed

ACCEPTANCE CRITERIA:
- Footer includes KCH name, short description, useful navigation links, and local positioning.
- Works on mobile.
- Does not clutter homepage.
- Matches current design.

CONSTRAINTS:
- No external links unless already known.
- No unsupported claims.
- Keep it simple.

CODEX PROMPT:
Add a clean GlobalFooter component for KCH with local positioning, short description, and useful internal navigation links. Match the current visual style and keep it mobile-friendly. Do not add unsupported external links.

---

## KCH-CODEX-014 — Local SEO Metadata

GOAL:
Prepare KCH pages for local search.

FILES TO INSPECT:
- src/main.jsx
- src/App.jsx
- index.html

LIKELY FILES TO EDIT:
- index.html
- src/pages/*
- docs/seo/kch-local-seo.md

ACCEPTANCE CRITERIA:
- Add sensible metadata for:
  - What’s on in Kirkintilloch
  - Things to do in Kirkintilloch
  - Kirkintilloch events
  - Kirkintilloch venues
  - Community groups Kirkintilloch
  - Creative groups Kirkintilloch
  - Local services Kirkintilloch
- No keyword stuffing.
- Existing metadata preserved if better.

CONSTRAINTS:
- Do not claim services/features that are not live.
- Do not add unsupported structured data.

CODEX PROMPT:
Inspect the KCH frontend and add sensible local SEO metadata where the framework supports it. Target natural phrases around what’s on, events, venues, community groups, creative groups, local services, and things to do in Kirkintilloch. Avoid keyword stuffing and do not claim unfinished features are live.

---

## KCH-CODEX-015 — Local Guides Stub

GOAL:
Prepare guide pages for future KCH content.

FILES TO INSPECT:
- src/main.jsx
- src/App.jsx
- src/components/*

LIKELY FILES TO EDIT:
- src/pages/GuidesPage.jsx
- src/pages/GuideDetailPage.jsx
- src/data/localGuides.js if suitable

ACCEPTANCE CRITERIA:
- /guides route exists if routing has been added.
- Guide cards/stubs exist for:
  - New to Kirkintilloch
  - Things to do
  - Free things
  - Family activities
  - Creative groups
  - Venue hire
  - Walks and heritage
  - Community support
  - Local services
- Copy is clearly starter/placeholder where needed.

CONSTRAINTS:
- Do not invent facts.
- Do not scrape content.
- Do not overbuild CMS.

CODEX PROMPT:
Create a simple Local Guides stub for KCH with guide cards for New to Kirkintilloch, Things to do, Free things, Family activities, Creative groups, Venue hire, Walks and heritage, Community support, and Local services. Do not invent factual claims. Keep it as a starter structure.

---

## KCH-CODEX-016 — Weekly Digest Page

GOAL:
Prepare a weekly round-up page without fake newsletter functionality.

FILES TO INSPECT:
- src/main.jsx
- src/components/*
- src/App.jsx

LIKELY FILES TO EDIT:
- src/pages/WeeklyDigestPage.jsx
- src/App.jsx

ACCEPTANCE CRITERIA:
- /weekly-digest page exists if routing supports it.
- Page explains the future weekly local round-up.
- Includes:
  - What’s on this weekend
  - New local listings
  - Featured local person/group
  - Featured venue
  - Local opportunity
  - Free/family-friendly picks
- Does not pretend signup is live unless backend exists.

CONSTRAINTS:
- No paid email service.
- No fake working signup.

CODEX PROMPT:
Create a /weekly-digest page for KCH explaining the future weekly local round-up. Include what’s on, new listings, featured local people/groups, venues, opportunities, and free/family-friendly picks. If no newsletter backend exists, use clear placeholder copy and do not fake signup functionality.

---

## KCH-CODEX-017 — Profile Page Stub

GOAL:
Create a simple authenticated profile destination.

FILES TO INSPECT:
- Clerk setup
- src/components/Navbar.jsx
- src/main.jsx

LIKELY FILES TO EDIT:
- src/pages/ProfilePage.jsx
- src/App.jsx

ACCEPTANCE CRITERIA:
- /profile route exists.
- If signed in, shows basic account/profile placeholder.
- If signed out, shows sign-in prompt.
- No private data exposed.
- No booking history fake data.

CONSTRAINTS:
- No full dashboard yet.
- No database user profile build unless already present.
- No fake booking history.

CODEX PROMPT:
Create a safe /profile page using the existing Clerk setup. Signed-in users should see a simple profile/account placeholder. Signed-out users should see a sign-in prompt. Do not fake booking history or build a full dashboard.

---

## KCH-CODEX-018 — Error Boundary

GOAL:
Prevent frontend crashes from breaking the whole app.

FILES TO INSPECT:
- src/main.jsx
- src/App.jsx
- component structure

LIKELY FILES TO EDIT:
- src/components/ErrorBoundary.jsx
- src/main.jsx

ACCEPTANCE CRITERIA:
- ErrorBoundary wraps main app or discovery feed.
- Displays clear fallback UI.
- Logs errors to console.
- Does not hide backend fetch errors.

CONSTRAINTS:
- No external monitoring service.
- Keep simple.

CODEX PROMPT:
Add a simple React ErrorBoundary to KCH around the main app or discovery feed. It should display a clear fallback UI and log errors to console. Do not add external monitoring services.

---

## KCH-CODEX-019 — CSS Hygiene Pass

GOAL:
Reduce messy inline styling where safe.

FILES TO INSPECT:
- src/App.jsx
- src/components/*
- src/index.css

LIKELY FILES TO EDIT:
- src/index.css
- selected components with obvious inline style clutter

ACCEPTANCE CRITERIA:
- Extract obvious repeated inline styles into reusable classes.
- Preserve visual design.
- No major redesign.
- No broken layout.

CONSTRAINTS:
- Do not refactor everything.
- Do not change class naming convention if one exists.
- Keep changes small.

CODEX PROMPT:
Run a small CSS hygiene pass on KCH. Extract obvious repeated inline styles into reusable classes while preserving the current visual design. Do not redesign the app or refactor everything. Keep changes small and safe.

---

## KCH-CODEX-020 — Local Deployment Docs

GOAL:
Document how to run the recovered KCH stack.

FILES TO INSPECT:
- package.json
- server/package.json
- any Docker files
- server/prisma/schema.prisma
- README.md
- .env

LIKELY FILES TO EDIT:
- docs/setup/local-dev.md
- README.md

ACCEPTANCE CRITERIA:
- Document how to start:
  - Postgres Docker container
  - Express backend
  - Vite frontend
  - Prisma seed
- Document local URLs:
  - Backend http://localhost:5000
  - Frontend http://localhost:5173
- Document env placeholders without secrets.
- Include basic troubleshooting.

CONSTRAINTS:
- Do not expose secrets.
- Do not invent commands without checking package scripts.
- Do not modify Docker unless necessary.

CODEX PROMPT:
Document the local KCH development setup in docs/setup/local-dev.md. Inspect scripts and existing Docker/Prisma setup first. Include how to start Postgres, Express backend, Vite frontend, run Prisma seed, local URLs, env placeholders, and basic troubleshooting. Do not expose secrets.
