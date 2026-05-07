# KCH Existing Docs Stack Audit

## 1. Executive Summary
The KCH documentation stack is well-populated, with clear strategic, design, and implementation layers. The integration of the 'Deep Research' report is the final piece of the architectural puzzle. The current structure is clean and ready for transition into the Knowledge-Layer phase.

## 2. Council Review Summary
- **Document Architecture Council**: Confirms current `docs/` structure is sound; canonical homes for docs are identified.
- **Local Knowledge Council**: Taxonomy and sourcing strategies are aligned with KCH mission.
- **Research / Archive Council**: Recommends keeping `deep-research-report.md` as the canonical raw source.
- **Product / App Build Council**: Ready for KCH-KNOW jobs; emphasis on safe UI mapping.
- **Codex Delegation Council**: Plans for KCH-KNOW jobs are modular and ready.

## 3. Source Research File
- **Path**: `docs/research/raw/deep-research-report.md`
- **Status**: Raw/Canonical
- **Contents**: Historical layers (Roman/Industrial), community assets (EDLC/Asset Map), local knowledge leads (Fellowship/Volunteering).
- **Recommendation**: Keep raw; it will inform future listing seeding.

## 4. Full Markdown Inventory
| Path | Purpose | Status | Action |
| :--- | :--- | :--- | :--- |
| `docs/audits/kch-gui-frontend-ux-ui-audit.md` | GUI/UX Audit | Current | Keep |
| `docs/codex-jobs/kch-design-jobs.md` | Design Jobs | Current | Keep |
| `docs/codex-jobs/kch-gui-frontend-ux-ui-fix-list.md` | Fix List | Current | Keep |
| `docs/codex-jobs/kch-headless-jobs.md` | Headless Jobs | Current | Keep |
| `docs/design/kch-design-council-patch-notes.md` | Patch Notes | Current | Keep |
| `docs/design/kch-design-council-update-brief.md` | Design Brief | Current | Keep |
| `docs/design/kch-design-system.md` | Design System | Current | Keep |
| `docs/design/kch-implementation-briefing.md` | Briefing | Current | Keep |
| `docs/design/kch-local-image-strategy.md` | Image Strategy | Current | Keep |
| `docs/design/kch-visual-design-audit.md` | Design Audit | Current | Keep |
| `docs/recovery/kch-post-crash-recovery-audit.md` | Recovery Report | Current | Keep |
| `docs/research/raw/deep-research-report.md` | Deep Research | Canonical | Keep |

## 5. Desired vs Existing Document Stack
| Desired Document | Existing Match | Coverage | Recommended Action |
| :--- | :--- | :--- | :--- |
| Deep Research Summary | None | Missing | Create New |
| Local Source Map | None | Missing | Create New |
| Local Taxonomy | `kch-local-knowledge-taxonomy.md` | Partial | Update |
| Seed Listings | None | Missing | Create New |
| Knowledge Jobs | `kch-local-knowledge-jobs.md` | Full | Keep |

## 6. Duplicate / Overlap Report
- **Taxonomy**: `kch-local-knowledge-taxonomy.md` (Design) vs `kch-local-knowledge-taxonomy.md` (Local Knowledge) - Merge into `docs/data/kch-local-taxonomy.md`.
- **Jobs**: Several disparate files. Canonical home: `docs/codex-jobs/`.

## 7. Canonical Document Map
- `docs/research/raw/deep-research-report.md` (Raw)
- `docs/research/kch-deep-research-summary.md` (Summary)
- `docs/research/kch-local-source-map.md` (Sources)
- `docs/data/kch-local-taxonomy.md` (Taxonomy)
- `docs/data/kch-seed-listings.md` (Listings)
- `docs/codex-jobs/kch-local-knowledge-jobs.md` (Knowledge Jobs)

## 8. Missing Documents
- Research Summary, Source Map, Seed Listings.

## 9. Recommended Merge Plan
1. Consolidate taxonomy files into `docs/data/kch-local-taxonomy.md`.
2. Consolidate job files into `docs/codex-jobs/` structure.
3. Extract research summary and source map from raw report.

## 10. Future Headless Codex Plan
- **GUI-001**: Harmonize Community Pulse.
- **KCH-KNOW-002**: Map taxonomy to mock data.

## 11. Safe Next Build Step
Commit audit file and begin research extraction for the summary report.

## 12. Do Not Touch Yet
Secrets, database, migrations, Stripe.
