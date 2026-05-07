# KCH Signal Taxonomy Mapping Strategy

## Overview
This strategy defines how to map the curated seed listings for the Kirky Creative Hub (KCH) into the existing Prisma `Signal` data model. The goal is to establish a sustainable taxonomy that supports the "Live Radar" UI while maintaining data integrity.

## 1. Mapping Strategy

| Seed Field | Signal Model Field | Mapping Logic |
| :--- | :--- | :--- |
| Listing Name | `title` | Direct map. |
| Category | `category` | Direct map. |
| Description | `note` | Direct map (can be truncated if necessary). |
| Source | `badge` | Use to represent the verifying entity or source (e.g., "EDLC", "Council"). |
| Trust/Freshness | *New Field* | See below. |
| Listing Type | `cardType` | Direct map (used for UI component rendering). |
| (New/Implicit) | `town` | Set to "Kirkintilloch" for all seed items. |

## 2. Trust and Freshness Implementation

To properly support the "verified" status of seed data, we propose adding the following fields to the `Signal` model:

- `trustLevel` (String): e.g., "Official", "Verified", "Community".
- `freshness` (DateTime): To track when the data was last validated.

Alternatively, if we wish to avoid schema changes for now, we can overload the existing `badge` or `note` fields, but a schema update is highly recommended for scalability.

## 3. Recommended Schema Extension

We propose modifying the `Signal` model as follows:

```prisma
model Signal {
  // ... existing fields
  trustLevel String?  @default("Community") // "Official", "Verified", "Community"
  lastVerifiedAt DateTime @default(now())
}
```

## 4. Seeding Approach

- **Data Transformation**: Create a `seed.js` or `seed.ts` script in the `server` directory that transforms the markdown table into a JSON format.
- **Import Procedure**:
    1. Read and parse `docs/data/kch-seed-listings.md`.
    2. Map the data structure to the `Signal` model requirements.
    3. Use `prisma.signal.createMany` to batch insert the validated data.
    4. Implement idempotency: ensure the seed script checks for existing records (by title or a slugified version) to prevent duplication on re-runs.

---
*Next Step: Once approved, we will update the Prisma schema and create the ingestion script.*
