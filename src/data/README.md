# Data Layer

This folder contains the content layer for KCH Radar.

## Current source
- mockQueueData.js

This acts as the temporary content source before live integration.

## Future source of truth
Later this data will be replaced or hydrated by:
- Google Sheet queue JSON
- n8n webhook payloads
- Vercel API routes
- cache layers

## Main data groups
- featured
- opportunities
- localSignals
- categories

## Best practice
UI components should consume data objects from this folder instead of hardcoded JSX.
This keeps the frontend easy to scale and easy to connect to automation later.
