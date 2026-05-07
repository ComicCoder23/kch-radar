# KCH Trust and Freshness Schema Plan

## Objective
Update the `Signal` data model to support trust levels and freshness tracking for seed and user-submitted data.

## 1. Schema Changes
The following fields will be added to the `Signal` model in `server/prisma/schema.prisma`:

```prisma
model Signal {
  // ... existing fields
  trustLevel     String   @default("Community") // "Official", "Verified", "Community"
  lastVerifiedAt DateTime @default(now())
}
```

## 2. Migration Process
To ensure a non-breaking transition:
1. **Additive Schema Update**: The new fields use default values (`"Community"` and `now()`), ensuring existing records are immediately compatible without manual data backfilling.
2. **Apply Migration**: Run `npx prisma migrate dev --name add_trust_and_freshness_to_signal` within the `/server` directory.
3. **Generate Client**: Ensure the Prisma client is regenerated after migration: `npx prisma generate`.

## 3. Verification Steps
1. **Validation**: Check that the database table `Signal` reflects the new columns after migration.
2. **Seeding**: Update the seeding logic to specify `trustLevel` and `lastVerifiedAt` when creating records.
3. **Testing**: Create a test script to:
    - Query signals and verify default values for old records.
    - Create a new signal and verify that `trustLevel` and `lastVerifiedAt` are correctly stored.

---
*Ready for future schema application.*
