# Design Documentation Summary

## 1. Visual Design Audit
Identifies the shift required from a "tech/radar" aesthetic to a "warm, local discovery" platform. Highlights current strengths (cohesion) and weaknesses (lack of local grounding, technical-focused typography).

## 2. Design System
Establishes a warm palette: Canal Blue (#0e4f77), Campsie Green (#2d6a4f), Sandstone (#d4a373). Transitions away from pure technical monospace to a more legible, welcoming `Inter` typography.

## 3. Image Strategy
Defines placeholders based on landmarks (Marina, Campsies, Heritage sites) using gradients/patterns until local photography is integrated. Emphasizes lazy-loading `.webp` assets.

---

# Implementation Briefing

- **Visual Direction**: "Local Discovery OS" - modern, clean, but rooted in Kirkintilloch.
- **Palette**: Warm canal, stone, and hill tones.
- **Typography**: Legible `Inter` font stack.
- **Homepage Journey**: Strong local hero -> featured events -> categorized discovery sections.
- **Local Identity Elements**: Canal/Marina patterns, sandstone accents, landmark-inspired placeholders.
- **Placeholder Strategy**: CSS-based gradients/patterns; clearly labeled.
- **Accessibility Risks**: Low contrast in current dark-mode; improving text-on-surface ratios.
- **Must Not Touch**: Backend logic, Stripe secrets, payment flow, Signal data fetching.
- **Requires Local Images**: Hero background, featured hills, heritage guides, town-hall/civic spaces.
