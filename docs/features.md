# Features & Business Logic

## Core Features

- **Public link profile** — A shareable page (`/b/:username`) that displays a curated list of links for a user, opening each in a new tab
- **User authentication UI** — Sign in and sign up forms (UI only; no backend integration wired)
- **Marketing landing page** — Home page with CTA buttons driving sign-up and login
- **Pricing tiers** — Three-tier pricing display (Free / Pro / Enterprise)
- **Team page** — Showcases team members with roles and social links
- **YouTube ID extractor** — Utility tool that parses any YouTube URL format and extracts the video ID
- **React Hooks playground** — `/hooks` route demonstrates `useState` + `useEffect` with a live counter
- **Internationalization** — Full Chinese (ZH) and partial English (EN) UI copy via i18next
- **Vultr affiliate banner** — Affiliate referral block embedded on multiple pages

---

## Feature Deep-Dives

### Public Link Profile (`/b/*` → `LTMyListGroup`)

The core product feature. Renders a vertical list of clickable links for a user. Currently the links are **hard-coded** in the component for the owner's own profile (Encore Shao). Each link item has a `link` (URL) and `name` (display label). The list opens all external links in a new tab.

**Key files:** `src/pages/links/LTMyListGroup.tsx`, `src/pages/links/index.css`

**Non-obvious:** The route is `/b/*` — the wildcard is intended to support username-based routing (e.g. `/b/encore`), but the current implementation ignores the URL parameter and always renders the same hard-coded list.

---

### Authentication Pages (`LTSignIn`, `LTSignUp`)

Both pages present form UIs using MDB input components. Email, password, and (for sign-up) password confirmation fields are rendered. The forms have submit buttons but **no API calls or form submission handlers are wired**. This is a UI scaffold awaiting backend integration.

**Key files:**
- `src/pages/sessions/LTSignIn.tsx`
- `src/pages/sessions/LTSignUp.tsx`
- `src/pages/sessions/LTSignUp-v2.tsx` (alternative sign-up variant, not currently routed)

---

### Pricing Plans (`LTPricingPlans`)

Three-column pricing card layout:

| Tier | Price | Features |
|---|---|---|
| Free (免费) | Free forever | Unlimited links, team support |
| Pro (初级版) | ¥5 / month | Unlimited links, reports, team support |
| Enterprise (高级版) | ¥10 / month | Everything in Pro + analytics, customization, integrations |

All CTA buttons link to `/signup`. Pricing copy is driven entirely through i18n translation keys.

**Key files:** `src/pages/about/LTPricingPlans.tsx`

---

### YouTube ID Lookup (`/lookup` → `LTYoutubeIDLookUp`)

A utility page that accepts any YouTube URL format in an input field and extracts the 11-character video ID using a regex. Updates state on every keystroke — if the URL matches, the input value is replaced with the extracted ID; if not, it shows the raw input.

**Key files:** `src/pages/social/LTLTYoutubeIDLookUp.tsx`

**Regex pattern used:**
```
/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
```

---

### React Hooks Playground (`/hooks` → `LTHookIndex` + `LTCounting`)

A demo page showing `useState` and `useEffect` hooks. The counter increments on button press and syncs the document tab title to reflect the click count. This is an educational/demo feature.

**Key files:** `src/pages/hooks/LTIndex.tsx`, `src/pages/hooks/LTCounting.tsx`

---

### Internationalization

All user-visible strings are looked up via `t('key')` from `react-i18next`. The translation file lives in `src/utils/i18n.tsx` and is initialized once at app startup. The default language is Chinese (`zh`). English translations are skeletal (only `title` key defined).

Translation namespaces: `menu`, `about_us`, `action`, `model.user`, `pricing`, `tip`, `social`.

---

### Vultr Affiliate Banner (`Vultr`)

A reusable component embedded at the bottom of the Home, About, Pricing, and Team pages. Renders a styled banner linking to a Vultr referral URL (`?ref=8991180-8H`). Styled via SCSS module (`style.module.scss`).

**Key files:** `src/pages/vultr/index.tsx`, `src/pages/vultr/style.module.scss`
