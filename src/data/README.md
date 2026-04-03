# Data Layer

This folder contains the content layer for KCH Radar.

## Current source
- mockQueueData.js
- live Apps Script feed for featured items

## Future source of truth
Later this data will be replaced or expanded by:
- Google Sheet queue JSON
- more Website Feed sections
- API routes
- cache layers

## Main data groups
- featured
- opportunities
- localSignals
- categories

## Best practice
UI components should consume data objects from this folder or from normalized live feed data instead of hardcoded JSX.
