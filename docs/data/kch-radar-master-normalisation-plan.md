# KCH Radar Master Normalisation Plan

## 1. Mapping Strategy
The Radar Master CSV columns will be mapped directly to the `Signal` JSON structure. 

| Radar Column | Target Field | Transformation |
| :--- | :--- | :--- |
| Event Name | `title` | Trim whitespace |
| Short Copy | `description` | Sanitize HTML |
| Category | `category` | Map to Taxonomy |
| Town | `area` | Normalize to string |
| Main Link | `sourceUrl` | Validate URL |

## 2. Missing Fields
- `accessibilityNotes` (Default: "Unknown")
- `kchOpportunity` (Inferred from category)

## 3. Normalization Rules
- **Category**: Map specific event categories (Theatre, Music, Wellbeing) to parent categories (What's On, Local Services).
- **Freshness**: If `Status` is "Live", set `freshnessLevel` to "Active this month".
- **Trust**: Map `Verification Level` to `trustLevel`.

## 4. Next Steps
1. Execute **RADAR-001** to generate a JSON file from the CSV.
2. Filter the JSON using the privacy logic defined in the mapping document.
3. Merge into canonical `seed-signals.json`.
