# KCH Radar Master Ingestion Jobs

## RADAR-001 Convert Radar Master export to local JSON
- **Goal**: Ingest CSV export of Radar Master.
- **Inspect**: CSV source.
- **Edit**: `src/data/radar-master-raw.json`.
- **Criteria**: Complete column mapping.

## RADAR-002 Normalise Radar rows into Signal shape
- **Goal**: Map columns to `Signal` model.
- **Inspect**: `radar-master-raw.json`.
- **Edit**: `src/data/normalised-radar.json`.
- **Criteria**: Matches Signal schema exactly.

## RADAR-003 Privacy filter for sensitive/internal fields
- **Goal**: Strip PII.
- **Inspect**: `normalised-radar.json`.
- **Edit**: `src/data/public-signals.json`.
- **Criteria**: Contact details and private notes are absent.

## RADAR-004 Merge Radar data with seed listings
- **Goal**: Consolidate source-of-truth.
- **Inspect**: `public-signals.json`, `seed-signals.json`.
- **Edit**: `src/data/canonical-listings.json`.
- **Criteria**: Deduplication logic applied.

## RADAR-005 Expand seed-signals.json safely
- **Goal**: Finalize seed file.

## RADAR-006 Add source attribution display
- **Goal**: Render source attribution UI.

## RADAR-007 Add watch-source/internal-source distinction
- **Goal**: Logical separation of data.

## RADAR-008 QA pass for public/private data leakage
- **Goal**: Verify no PII leak.
