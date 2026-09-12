# Noesantara

A website about Indonesian culture, aimed at young Indonesians drifting away from it.

**TECHCOMFEST 2023 · Web Design category**

**[Live site](https://noesantara.alfadzaa.tech)** · [API](https://api-noesantara.alfadzaa.tech) · [API source](https://github.com/Fadzaa/techkomfest-api)

<!-- screenshot -->

**Data flow**
```
GalleryComponent    → GET /api/gallery     → local state → cards
InformativeComponent→ GET /api/informative → local state → sections
QuizComponent       → GET /api/quiz        → local state → quiz
```

---

## What it does

- Province-by-province cultural encyclopedia
- Traditional food, clothing, houses and weapons
- Interactive quiz
- Indonesian cultural world records
- Indonesian/English via i18next

## What I implemented

Team lead and core designer — I authored the design system. Code ownership by area:

**Primary author** — the main content sections (gallery, informative, landing), the informative page, the about sections, the navbar.

**Shared** — landing components.

**Teammate-owned** — the quiz and the detail pages.

Two weeks before the deadline nothing was implemented. I replaced the design, rebuilt the design system, and supervised the remaining build.

## Architecture

React SPA, Laravel REST API, MySQL.

Each section fetches its own endpoint through Axios on mount and renders from local state. There is no shared client store.

**Routing is client-side** via React Router, with nginx serving `index.html` for unknown paths so deep links resolve.

The API base URL is read from `VITE_API_BASE_URL` rather than hardcoded.

## Running it locally

```bash
npm install
echo "VITE_API_BASE_URL=https://api-noesantara.alfadzaa.tech" > .env
npm run dev
```

## Known limitations

- The API serves empty collections — its seeder is empty. See the [API's known gaps](https://github.com/Fadzaa/techkomfest-api#known-gaps).
- No automated tests.
- Several carousel and animation libraries each expect to control layout; the composition between them is fragile.
