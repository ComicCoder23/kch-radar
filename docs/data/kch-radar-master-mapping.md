# KCH Radar Master Mapping Strategy

## 1. Purpose
The Radar Master spreadsheet is the private operational database for KCH. It is NOT a public data source. This mapping doc defines how we transform private operational data into the public-facing KCH Signal data model.

## 2. Data Boundary Rules
- **Public-Safe**: Venue data, public links, verified taxonomy, event metadata.
- **Internal-Only**: Contact details, internal workflow status, private notes.
- **Sensitive**: Recovery/fellowship notes, personal addresses, private group identifiers.
- **Do-Not-Publish**: Unpublished organiser names, crisis-sensitive specifics.
- **Needs-Human-Review**: Any row where provenance is social-only or status is stale.

## 3. Column Mapping Table

| Radar Master Field | Target Signal Field |
| :--- | :--- |
| Venue / Source Name | `title` |
| Event Categories | `category` / `subcategory` |
| Town / Area Group | `location` / `area` |
| Website / Main Link | `sourceUrl` |
| Event Listings Link | `eventUrl` |
| Facebook / Instagram | `publicSocialUrl` (If Public) |
| Ticket Platform | `ticketPlatform` |
| Status | `freshnessLevel` |
| Verification Level | `trustLevel` |
| Lifestyle Filters | `humanNeedFilters` |
| Notes | `description` (Cleaned) |

## 4. Public Signal Output Shape
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "category": "string",
  "subcategory": "string",
  "location": "string",
  "area": "string",
  "sourceUrl": "string",
  "eventUrl": "string",
  "trustLevel": "string",
  "freshnessLevel": "string",
  "tags": ["string"],
  "humanNeedFilters": ["string"],
  "listingType": "string",
  "familyFriendly": "boolean",
  "beginnerFriendly": "boolean",
  "accessibilityNotes": "string",
  "recurring": "boolean",
  "eventStyle": "string",
  "kchOpportunity": "boolean",
  "verificationNotes": "string"
}
```

## 5. Internal-Only Fields
*These fields MUST be stripped during CSV-to-JSON transformation.*
- Contact Name, Contact Email, internalNotes, Good for Alan, recovery/fellowship notes.

## 6. Sensitive Category Rules
- **Recovery/Sobriety/Fellowship**: Do not publish specifics; use only high-level signposting (e.g., "Peer support group").
- **Youth/Kids**: No individual names or identifiable group schedules.
- **Crisis Support**: Strictly refer to official signposting links; no personal descriptions.

## 7. Ingestion Gates
1. Public Source?
2. Current?
3. Safe?
4. Privacy Filtered?
5. Human Reviewed?
6. -> Public Signal
