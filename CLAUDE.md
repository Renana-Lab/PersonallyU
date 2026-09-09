# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PersonallyU is a customized Shopify Liquid theme (based on Craft v15.2.0) for a personality-based merchandise store. Users take a quiz that determines their personality type, and the site routes them to personalized product pages.

## Development Workflow

This is a **Shopify Liquid theme** — there is no build step, no package.json, and no npm. There is no local dev server.

**To develop:**
- Edit files directly in this repo
- Use [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) to preview locally: `shopify theme dev` (requires Shopify CLI installed)
- Push to GitHub; sync to Shopify admin via the GitHub ↔ Shopify admin connection

**To deploy:**
- Commit changes and push to `main` on GitHub
- Changes on `main` sync automatically to the Shopify store via the GitHub ↔ Shopify admin integration (no manual `shopify theme push` needed)

## Architecture

### Tech Stack
- **Shopify Liquid** — server-side templating for all pages
- **Vanilla JavaScript (ES6+)** + **jQuery 3.6** — loaded globally via `layout/theme.liquid`
- **Plain CSS** — component-scoped files in `assets/`
- No React, Vue, or build pipeline

### Key Directories
- `layout/` — master templates (`theme.liquid` is the root HTML shell)
- `sections/` — modular page sections (52 files), the main building blocks
- `snippets/` — reusable partials included by sections
- `assets/` — all JS and CSS files served directly
- `templates/` — JSON configs that define which sections appear on each page type
- `config/` — theme settings schema and data
- `locales/` — i18n translations for 51 languages

### Personalization System

The core custom feature. User quiz results are stored in `localStorage` under the key `userQuizData` as `{ personality: "EX", responseId: "..." }`.

**Personality type codes** (from the Big Five personality model axes):
- `EX` / `IN` — Extraverted / Introverted
- `SY` / `CR` — Sympathetic / Critical
- `MS` / `AN` — Mentally Stable / Anxious
- `SD` / `CL` — Self-Disciplined / Careless
- `OM` / `CM` — Open-Minded / Closed-Minded
- `AMB` — Ambiguous (balanced)
- `NO` — No quiz result (default/fallback)

**Key files for personalization:**
- `assets/personalization.js` — all personalization logic: URL routing, image label replacement, redirect intercept, anti-personality mapping, localStorage read/write. Contains a `// ---------------DO NOT TOUCH!!!!!!----` section that handles URL params and localStorage sync.
- `assets/cartPersonality.js` — intercepts `form[action="/cart/add"]` submits, enforces a 3-second rate limit, POSTs to Shopify's `/cart/add`, then fetches `/cart.js` to build and store a `variantMap` in localStorage.
- `assets/constants.js` — defines `PUB_SUB_EVENTS` and `ON_CHANGE_DEBOUNCE_TIMER`

**Product routing flow:**
1. User completes quiz at QuestionPro → redirected to `/collections/products/{PERSONALITY}?response_id=...&set={PERSONALITY}`
2. `personalization.js` reads URL params, stores them in `localStorage`
3. On product pages, variant selector labels are replaced with personality animal images (5 mascots: armadillo, bear, badger, hedgehog, capybara)
4. Clicking "Add to Cart" stores the chosen personality type (`ownPersonality`, `antiPersonality`, or `neutral`) in localStorage
5. Internal navigation links to `personallyu.com/collections/...` are intercepted by jQuery and redirected to the personality-specific collection URL

### Pub/Sub Event System
`assets/pubsub.js` provides a lightweight publish/subscribe system. Events are defined in `constants.js` under `PUB_SUB_EVENTS`: `cart-update`, `quantity-update`, `option-value-selection-change`, `variant-change`, `cart-error`.

### Cart Behavior

Cart mode is set to `"drawer"` in `config/settings_data.json`. Cart drawer logic is in `assets/cart-drawer.js`. The custom `cartPersonality.js` runs alongside the theme's native cart scripts.

**Key Distinctions:**
- `assets/cartPersonality.js` — rate-limited form submit handler. Prevents Shopify 429 errors by enforcing 3-second cooldown between add-to-cart calls and 1.5-second submission lock. Calls `buildAndStoreProductVariantMap()` on success.
- `assets/cart.js` — enriched cart map builder + GA4 event pusher. Contains `buildAndStoreProductVariantMap()` which reads Shopify's `/cart.js` response, builds the `productVariantMap` (keyed by product → animal → personality), and fires GA4 events.
- `assets/constants.js` — defines `PUB_SUB_EVENTS` and `ON_CHANGE_DEBOUNCE_TIMER` for the pub/sub system

### Google Analytics Integration

`assets/cart.js` contains the `buildAndStoreProductVariantMap()` function that pushes GA4 events to `window.dataLayer`:

**GA4 Events Tracked:**
- `productVariantMap_ready` — fires every time the cart map is rebuilt
- `view_cart` — fires on `/cart` page load
- `begin_checkout` — fires on checkout button click

**GA4 Item Metadata:** Each item in a GA4 event carries personality data in category fields:
- `item_category` — animal mascot (e.g., "bear", "capybara")
- `item_category2` — personality choice (e.g., "ownPersonality", "antiPersonality", "Neutral")
- `item_category3` — design number (e.g., "6")
- `item_category4` — current clicked personality (e.g., "ownPersonality")

**Sync Triggers:** `buildAndStoreProductVariantMap` is called in 4 places to keep analytics current:
1. On `DOMContentLoaded` (initial page load)
2. After every `cartPersonality.js` add-to-cart success (after 300ms delay)
3. After every quantity change in the `CartItems` web component
4. Via `subscribe(PUB_SUB_EVENTS.cartUpdate, ...)` (when any theme part fires a cart update event)

## Important Conventions

- **localStorage keys in use:** `userQuizData`, `variantMap`, `productType`, `currentClickedPersonality`, `AddtoCartPersonality`, `academic_participant_id`, `parsedCartState`
- **Personality images** are hosted on Shopify CDN (`cdn.shopify.com/s/files/1/0679/4585/7206/files/`)
- **Animal mascots:** 5 designs total — armadillo, bear, badger, hedgehog, capybara — each with 3 personality slots (own, anti, neutral). Design numbers map in `assets/cart.js` designMap object (designs 2-16).
- The `AntiPersonality` map in `personalization.js` defines which personality is the "opposite" of each type; each user sees their own, their anti, and AMB designs
- **⚠️ Hardcoded Shopify section IDs:** Variant selector label IDs follow the pattern `template--{sectionId}__main-{index}` — the selectors in `personalization.js` are hardcoded to specific section template IDs. If a Shopify section is deleted and recreated, these IDs will change and the label injection will break.
- **⚠️ Label styling:** Recent commits show CSS styling changes to variant labels. If labels aren't displaying correctly (color, background, border), check the `updateLabels()` function in `personalization.js` for hardcoded style assignments.
- **⚠️ Design number typo:** In `assets/cart.js`, the first animal is spelled "armadilo" (missing 'l'). This is a known typo in the designMap — if fixing it, update all 3 design entries (2, 3, 4).

## Debugging Checklist

- **Personalization not applying?** Check browser DevTools → Application → Local Storage for `userQuizData`. The quiz must set `personality` and `responseId`.
- **Variant labels not showing?** Open DevTools → check the actual Shopify section template ID in the HTML (`template--17814043295926__main`). It must match a hardcoded ID in the `labelIds` object in `personalization.js`.
- **Cart rate limiting?** Check `cartPersonality.js` — 3-second cooldown between adds. If a user gets blocked (HTTP 429), they must wait 10 minutes.
- **GA4 data missing?** Check DevTools → Network → search for "gtag" or check `window.dataLayer` in console. Ensure `buildAndStoreProductVariantMap()` was called after cart updates.
