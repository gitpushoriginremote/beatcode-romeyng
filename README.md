# Vanguard Art Logistics Manager (VALM)

Welcome, Lead Architect. You have been assigned to the VALM project—a bespoke system for high-net-worth art galleries to manage their most valuable physical assets.

## Current Status: ALPHA (State 0)

### Known Issues & Junior Dev Gaps:
1. **Financial Logic Error**: The 'Total Insured Value' summary card in `app.html` does not calculate the sum of the inventory. It remains hardcoded at $0.00.
2. **Responsive Layout Failure**: The sidebar in the dashboard uses fixed widths and flex-shrink, causing it to clip or overflow on mobile devices.
3. **Search Placeholder**: The search bar is purely cosmetic. We need a real-time filter for the asset table.
4. **The UI Vibe**: It feels a bit 'flat'. The gold accents are there, but the dashboard needs more professional depth (shadows, transitions, or better typography).

### First Directive:
Fix the `renderTable` function in `script.js` so it correctly tallies the total value of all art pieces in the system.