# KCH Radar Master Audit

## 1. Executive Summary
The "KCH Radar Master" spreadsheet is the foundational signal database for the project, containing structured metadata for local venues, events, and community groups. It is significantly more comprehensive than the current `seed-signals.json` mock data.

## 2. Column Mapping
- **Identity**: `Venue / Source Name` → `title`
- **Taxonomy**: `Event Categories` → `category` / `subcategory`
- **Geography**: `Town` + `Area Group` → `location`
- **Reach**: `Website / Main Link` → `sourceUrl`
- **Metadata**: `Status` → `freshnessLevel`, `Verification Level` → `trustLevel`
- **Notes**: `Notes` → `description` (sanitized), `internalNotes` (private)

## 3. Classification Strategy
- **Public Signal**: Venues, public event series, group names, category tags, public URLs.
- **Internal Only**: `Contact Name`, `Contact Email`, `recovery/fellowship notes` (safeguarding), `Good for Alan`.
- **Outreach Target**: Unverified entries or groups with limited public info.

## 4. Canonical Source Priority
1. **Public Official Source** (Official Council/EDLC)
2. **KCH Radar Master** (Verified public rows)
3. **Deep Research** (Raw report context)
4. **Manual Verification** (Alan-led)

## 5. Ingestion Plan
- Export Radar Master to CSV/JSON (Internal to Alan, not repo).
- Run Privacy Filter (remove internal-only columns).
- Merge with `seed-signals.json` into canonical `master-listings.json`.
