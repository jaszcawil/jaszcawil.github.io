# Jasz Cawil — Portfolio (React)

React implementation of the `Portfolio.dc.html` Claude Design mockup (Nocturne design system).

## Run it

```
npm install
npm run dev
```

Then open the local URL Vite prints (typically http://localhost:5173).

## Build

```
npm run build
```

Output goes to `dist/`.

## Structure

- `src/App.jsx` — the whole page: fixed nav, four full-viewport sections (About, Skills, Experience, Contact), each with its own parallax background photo and a "glass" (frosted) content panel.
- `src/data.js` — profile info, skills list, and job history (edit this to update content).
- `src/useScrollReveal.js` — the hook powering scroll behavior: per-section parallax offsets, IntersectionObserver-driven reveal-in/out state per section, and the "curtain" cover/reveal transition used when clicking a nav link.
- `src/index.css` — Nocturne design tokens (colors, spacing, radii, shadows), shared component classes (`.btn`, `.card`, `.tag`, etc.), and this revision's page-specific styles (`.glass`, `.bgimg`, `.scrim`, reveal animations).
- `src/assets/` — profile photo plus the four section background photos (About/Skills/Experience/Contact), extracted from the mockup and re-compressed for the web.

## Notes on parity with the mockup

- Each section (About, Skills, Experience, Contact) is a full-viewport panel with its own parallax background photo (`.bgimg`, scaled and translated by scroll offset) and a scrim/gradient overlay for text contrast.
- About, Skills, and Contact wrap their content in a `.glass` frosted panel; Experience sits directly over its background.
- Content within each section fades/slides in (`reveal-up` / `reveal-big`) the first time that section crosses into view, and un-reveals when it scrolls back out, so the animation replays on re-entry — driven by `IntersectionObserver` with a 20% visibility threshold, matching the original.
- Clicking a nav link triggers a brief "curtain" wipe transition (cover → jump to section → reveal) instead of a native smooth scroll, matching the original's `phase: idle/covering/revealing` state machine.
- Typography is Montserrat (this revision's change from the previous Inter-based version).
- `PARALLAX_STRENGTH` at the top of `App.jsx` is the one remaining editable config value from the mockup (`'heavy'` or `'subtle'`).
