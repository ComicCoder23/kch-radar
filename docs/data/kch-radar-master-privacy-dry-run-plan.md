# KCH Radar Master Privacy Dry-Run Plan

## 1. Objective
Test the transformation logic of the Radar Master CSV into public-safe JSON without exposing PII.

## 2. Export Instructions (Alan-led)
1. Export the "KCH Radar Master" sheet as a CSV file.
2. Ensure no extra personal sheets are included in the export.
3. Save as `radar-master-export.csv` in a non-repo directory.

## 3. Dry-Run Steps
1. Create a script to ingest the CSV.
2. Select only the columns defined in the "Public-Safe" list.
3. Run a test filter:
   - Identify rows where `Status` or `Verification Level` is empty.
   - Flag any rows containing sensitive tokens (names, private emails).
4. Output to `dry-run-output.json`.

## 4. Checklist
- [ ] Export is purely CSV.
- [ ] Column filter is applied (Internal fields stripped).
- [ ] Sample size is small (e.g., 5-10 rows).
- [ ] Output contains NO contact information.
- [ ] Output schema matches the KCH Signal model.
- [ ] No PII found in JSON output.

## 5. Expected Results
- **Public Output**: Clean Signal JSON records.
- **Internal Output**: Log of stripped fields and audit of removed sensitive content.
