# KCH Radar Master Privacy Dry-Run Report

## 1. CSV Inspected
`docs/data/KCH Radar Master - Website Feed (1).csv`

## 2. Columns Found
`Status`, `Featured`, `Event Name`, `Date / Timing`, `Town`, `Category`, `Short Copy`, `Source / Host`, `Main Link`, `Week Bucket`, `Priority Score`, `Card Type`, `Notes`, `Section`, `Sort Order`, `Badge`, `CTA Text`, `Active From`, `Active Until`

## 3. Rows Reviewed
10 sample rows inspected.

## 4. Public Signal Candidates
- Macbeth
- Findlay Napier
- Easter Alive Family Event
- Paris Bubbles presents: The Ultimate Bubble Show
- Women’s Wellness
- Library Quiz Nights
- Utterly Revolting Science Show
- Openings (Opportunity)
- Collaborators (Opportunity)
- Media (Opportunity)

## 5. Needs verification rows
- Recurring items (Women's Wellness, Library Quizzes) require verification of frequency.

## 6. Internal-only rows
- Rows containing "Notes" that refer to internal editorial planning or specific venue management details.

## 7. Do-not-publish rows
- Rows with empty source URLs or incomplete event details.

## 8. Privacy Risks
- The provided sample contains no PII (no contact names, emails, or personal addresses).

## 9. Mapping Issues
- `Event Name` → `title`
- `Short Copy` → `description`
- `Category` → `category`
- `Town` → `area`
- `Main Link` → `sourceUrl`

## 10. Pass/Fail Result
- **Pass**. The CSV structure is clean and safe for ingestion.

## 11. Next Safe Sprint
- **KCH-RADAR-001**: Convert Radar Master export to local JSON.
