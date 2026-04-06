# Project Structure

## Project Overview

LinkTR Web is a Linktree-style "link in bio" platform that lets users aggregate all their important links behind a single shareable URL. The frontend is a React SPA targeting the Chinese market (default locale: `zh`).

## Directory Structure

```
linktr-web/
├── public/               Static assets served by CRA (index.html, favicon, etc.)
├── src/
│   ├── components/       Reusable UI components shared across pages
│   ├── images/           Static image assets (logo, user avatar)
│   ├── pages/
│   │   ├── about/        Public-facing marketing pages (Home, About, Help, Pricing)
│   │   ├── app/          App root: routing and layout entry point (App.tsx)
│   │   ├── hooks/        React hooks demo/playground pages
│   │   ├── links/        Public link profile page (/b/*)
│   │   ├── sessions/     Authentication pages (Sign In, Sign Up)
│   │   ├── shared/       Shared layout wrapper
│   │   ├── social/       Utility tools (YouTube ID extractor)
│   │   ├── team/         Team/about-the-team page
│   │   └── vultr/        Vultr affiliate banner component
│   ├── resources/        (reserved for static resource files)
│   ├── utils/            Utilities — currently holds i18n configuration
│   ├── index.css         Global CSS reset/overrides
│   ├── index.tsx         App entry point — mounts <App /> into #linkTree DOM node
│   ├── react-app-env.d.ts  CRA type declarations
│   └── serviceWorker.ts  PWA service worker stub (unregistered)
├── build/                CRA production build output (gitignored)
├── scripts/              Build/deploy helper scripts
├── package.json
├── tsconfig.json
└── yarn.lock
```

## Key Configuration Files

| File | Purpose |
|---|---|
| `package.json` | Dependencies, build/start/test scripts |
| `tsconfig.json` | TypeScript compiler options |
| `src/utils/i18n.tsx` | i18next configuration — defines English + Chinese translation resources; defaults to `zh` |
| `src/index.tsx` | Imports global CSS/fonts and renders `<App />` into `#linkTree` |
| `src/pages/app/App.tsx` | Defines all client-side routes via React Router v5 |

## Tech Stack

| Layer | Technology |
|---|---|
| Language | TypeScript 4.x |
| Framework | React 17 (Create React App) |
| Routing | React Router v5 (`BrowserRouter`, `Switch`, `Route`) |
| UI Library | MDBReact (Material Design Bootstrap for React) |
| Icons | Font Awesome 5 (via `@fortawesome/fontawesome-free`) |
| Internationalization | react-i18next + i18next (EN + ZH, default: ZH) |
| Data Fetching | SWR 0.5 (declared as dependency; not yet wired into pages) |
| Charts | Highcharts + highcharts-react-official (declared; not yet used in pages) |
| Styling | Bootstrap CSS + MDB CSS + SCSS Modules (individual pages) |
| Testing | React Testing Library + Jest (via CRA) |
| Node Compatibility | Requires `--openssl-legacy-provider` flag for Node 17+ |

## Running Locally

```bash
yarn install
yarn start        # http://localhost:3000
yarn build        # Production build → ./build/
yarn test         # Run Jest test suite
```

> **Note:** The `NODE_OPTIONS=--openssl-legacy-provider` flag is injected automatically by the npm scripts to handle OpenSSL compatibility on newer Node versions.
