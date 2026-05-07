# KCH Opportunities Data Mapping Strategy (KCH-KNOW-009)

## Overview
This document defines the data mapping strategy for integrating "Opportunities" (volunteering, gigs, funding) into the existing `Signal` database model and `LocalSignalsFeed` frontend.

## 1. Mapping to Signal Model
The `Signal` Prisma model is sufficiently flexible to accommodate opportunity-style data without schema modifications by utilizing the existing optional fields:

| Field | Purpose for Opportunity Listing |
| :--- | :--- |
| `category` | Set to `"opportunity"` |
| `title` | The opportunity name (e.g., "Mural Assistant Needed") |
| `note` | Description and requirements |
| `badge` | The type (see Badges below) |
| `ctaText` | Call-to-action (e.g., "Apply Now", "Inquire") |
| `link` | URL to external form or email |
| `section` | Optional: used to group in UI (e.g., "community-board") |

## 2. Standardized Opportunity Badges
To maintain consistent styling in `LocalSignalsFeed` and supporting UI components, use the following `badge` values:

- `VOLUNTEER`
- `COLLABORATION`
- `FUNDING`
- `GIG`

*Note: Frontend styles in `LocalSignalsFeed.jsx` can be extended to support these specific badge types if distinct color coding is desired.*

## 3. Seeding Strategy
Since we are using a temporary mock feed transition, data should be seeded into the `Signal` table using the existing database migration flow:

1. Create a migration or a seed script in `server/prisma/seed.ts` (if available) or a dedicated insertion script.
2. For now, use the `npx prisma db seed` approach or run a direct insert via a management script.
3. Ensure the `activeFrom` and `activeUntil` fields are populated to manage opportunity lifecycle/visibility.

## 4. Compatibility
The current `normalizeSignal` function in `LocalSignalsFeed.jsx` handles missing fields gracefully by providing defaults, making this strategy fully backward-compatible.
