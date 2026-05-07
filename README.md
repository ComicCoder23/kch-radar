# Kirky Creative Hub / KCH

KCH is a hyperlocal discovery and community platform for Kirkintilloch and surrounding areas.

## Product Definition
KCH is designed to be a trusted, beautiful, and useful local knowledge layer. It helps residents discover:
- Events, venues, and classes
- Creative groups and community gatherings
- Opportunities, services, and local support
- Local guides and heritage information

## Current Capabilities
- **Local Discovery Homepage**: Branded discovery-first layout.
- **Signals Feed**: Structured feed for local updates.
- **Community Notices**: Curated community announcements.
- **Local Guides**: Antonine Wall, Canal/Marina, Heritage, and Town Centre guides.
- **Venue Finder**: Discovery hub for local community spaces.
- **Weekly Local Digest**: Curated high-trust updates.
- **Trust Structure**: Standardized trust levels and verification tags.
- **Source Attribution**: Transparent data sourcing for community trust.
- **Knowledge Architecture**: Robust taxonomy and data mapping.

## Tech Stack
- **Frontend**: React (Vite)
- **Backend**: Express (Live)
- **Database**: PostgreSQL (Prisma)
- **Auth**: Clerk
- **Payments**: Stripe (Placeholder only)

## Local Dev URLs
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000

## Current Safe Commit
`47f2925cd5029ec015a75388bba38fc8679fcbc4`

## Safety Notes
- Stripe is not live; do not touch.
- Clerk secrets must remain private; do not include in chat.
- Prisma migrations require explicit approval.
- No scraping of private groups; verify sources first.
- No fake local photos; use gradients/placeholders until authorized images exist.
- Archive images should be link-first unless copyright permission is confirmed.

## Documentation Directory
- `docs/design/`: Visual system, audit, and image strategy.
- `docs/research/`: Deep research raw report, summaries, and source map.
- `docs/data/`: Taxonomy, seed listings, and mapping strategies.
- `docs/codex-jobs/`: Implementation ticket history.
- `docs/audits/`: Existing audits and state summaries.

## Recommended Next Phase
Data ingestion planning and controlled conversion of seed listings into application-ready intelligence.
