# E.D.O Concepts — Digital Flagship

Next.js 15 + TypeScript + Tailwind + Framer Motion + GSAP + Lenis, built against
the E.D.O Concepts brand system.

## Deployment

This is a **static export** (`output: "export"` in `next.config.js`) —
`next build` produces a plain `out/` folder (HTML/CSS/JS/images), same
idea as a `dist` folder from any other static build tool. No server
runtime, no serverless functions, nothing framework-specific for Netlify
to interpret — it just serves `out/` from its CDN.

This works today because nothing in the app needs a server: no API
routes, no Server Actions, no middleware. Content comes from
`src/content/*.ts` at build time; the wishlist and forms are client-side.

**When this will need to change**: Phase 4 (Supabase + admin dashboard,
real enquiry submissions) adds actual server-side work. At that point,
delete the `output: "export"` line and Netlify's Next.js Runtime picks
it up automatically as a hybrid SSR/static site — no other restructuring
needed, this isn't a dead end.

`netlify.toml` is already configured: `publish = "out"`, Node 20 pinned.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000. Design is mobile-first — test at 390px width first.

## What's built

- **Homepage**: Hero → Trust Bar → Our Story → Featured Collections → Why
  E.D.O → Craftsmanship Journey → Featured Look → Testimonials → Fashion
  Journal → Final CTA → Footer.
- **Collections & products**: `/collections`, `/collections/[slug]`,
  `/collections/[slug]/[product]` — search, filters, sort, wishlist, gallery
  zoom, related items.
- **Content platform**: `/journal/[slug]` (editorial stories), `/lookbook/[slug]`
  (fullscreen digital lookbook), `/campaigns/[slug]`, global search (`Cmd+K`).
- **Motion system**: page transitions, luxury loading screen, scroll +
  mouse parallax, GSAP-driven timeline, reduced-motion support throughout.
- **Content architecture**: everything above reads from `src/content/*.ts` —
  see that section below for the full breakdown.

## Placeholder content to replace before launch

A few sections use real brand assets where available, but stand in with
clearly-marked structural placeholders where no real asset was supplied.
**Do not launch without addressing these:**

1. **Founder story** (`content/stories.ts`, `BrandStory.tsx`) — uses the
   real founder portrait. Still missing: workshop/behind-the-scenes
   photography — add as a second image or small gallery when available.
2. **`content/testimonials.ts`** — the three quotes are generic structural
   samples, not real client testimonials. Replace with actual client quotes
   (and portraits, if clients consent) — publishing invented testimonials as
   if real would be misleading.
3. **`content/stories.ts`** — only one real article (the founder story).
   The three "coming soon" journal categories on the homepage have no
   content yet and are intentionally non-clickable until they do.
4. **Collection/product photography** — 4 of 5 collections and most
   products still use photography cropped from the original promotional
   flyer, or the honest "Photography coming soon" placeholder pattern (see
   Content Architecture below for exactly how to replace these).

## Still to build

- `/bespoke` and the multi-step enquiry flow (`/bespoke/enquire`)
- Supabase schema + auth wiring (`lib/supabase/`) — schema already
  designed in the original architecture doc
- Client portal + admin dashboard
- True pinch-to-zoom on product gallery (currently click-to-expand)
- Wiring the newsletter/enquiry forms to a real backend (currently UI-only)

## Collections & Product Experience

Full gallery built out:

- **`/collections`** — hero, editorial intro, featured collection banner,
  and a live search/filter/sort explorer (`CollectionsExplorer.tsx`) over
  all 8 collections.
- **`/collections/[slug]`** — cinematic collection hero, story copy, a
  filterable product grid (search + occasion filter), related collections,
  and a consultation CTA.
- **`/collections/[slug]/[product]`** — immersive gallery (swipe on mobile
  via scroll-snap, click-to-zoom lightbox, thumbnails/arrows on desktop),
  full storytelling (inspiration / craftsmanship / styling), fabric/color/
  sizing/production-time/care details, wishlist + share buttons, related
  products, and a sticky mobile CTA bar (Book Consultation + WhatsApp).

**Products data**: `src/lib/data/garments.ts` — same swap pattern as
collections. A handful of real garments reuse the real cropped photography
already in `public/brand/`; the rest render `CollectionPlaceholderArt`
until real product shots exist.

**Wishlist**: `useWishlist` hook persists to `localStorage` client-side —
no backend needed yet. When accounts exist (Phase 4), swap this hook's
internals for a Supabase-backed table; every component calling it stays
the same.

**Note on "sizes"**: bespoke garments don't have standard S/M/L stock
sizes, so the sizing field reads "confirmed at your fitting" rather than
fabricating generic sizes that don't match how the business actually
works.

**Note on gallery zoom**: true pinch-to-zoom needs a gesture library
(e.g. `react-zoom-pan-pinch`) not yet added. Current implementation is a
click-to-expand lightbox, which covers "inspect the fabric closely"
without the extra dependency — swap in a pinch library later if mobile
users specifically ask for it.

## Content Architecture (CMS-lite)

Everything lives in `src/content/` — no page or component hardcodes
product/collection copy. Matches the requested `content/` structure,
placed under `src/` to fit the existing `@/*` import alias.

| File | Purpose |
|---|---|
| `content/collections.ts` | All 5 collections — **realigned to your real taxonomy** from `EDO_Concepts_Asset_Structure.zip`: `signature-native`, `contemporary-senator`, `creative-street`, `editorial`, `bespoke`. (Earlier phases used placeholder names like "kaftan"/"vintage" — those are gone now.) |
| `content/products.ts` | All garments/products — full model (id, subtitle, colors, occasions, SEO, featured/new flags, etc.) |
| `content/navigation.ts` | Primary nav + footer quick links |
| `content/settings.ts` | Site-wide brand name, contact info, socials — one place to update |
| `content/testimonials.ts` | Client stories (still placeholder — see note below) |
| `content/stories.ts` | Editorial journal articles — one real entry (the founder story) |
| `content/lookbooks.ts` | Lookbook spreads |
| `content/campaigns.ts` | Campaign pages — one real entry |

### New routes built on this architecture

- `/journal/[slug]` — editorial story template: cinematic hero, reading
  progress bar, pull quote, share, related collections.
- `/lookbook/[slug]` — fullscreen swipe lookbook viewer, keyboard arrows,
  dot navigation, minimal chrome.
- `/campaigns/[slug]` — campaign page: hero, story, featured products,
  credits.
- **Global search** (`Cmd+K` / `Ctrl+K`, or the search icon in the nav) —
  instant results across collections, products, stories, lookbooks, and
  campaigns from one command palette.

### Image replacement system — how it actually works

`components/shared/EdoImage.tsx` wraps every product/collection photo
site-wide now (collection cards, product cards, collection hero banners).
It handles blur-up placeholder, fade-in on load, and — the actual
"replace without code changes" mechanism — **falls back to the on-brand
placeholder pattern automatically if the image file doesn't exist**,
via `onError`. So:

1. `content/collections.ts` can point at a path like
   `/images/collections/signature-native/native-brown-01.webp` *before*
   that file exists — the placeholder renders, no broken image icon.
2. Drop the real file at that exact path (see `ASSET-NAMING.md` for the
   naming convention from your structure doc).
3. Redeploy. The real photo renders. Zero component changes.

The one manual step is pointing a content file at the path in the first
place (see `ASSET-NAMING.md`) — genuinely automatic detection with no
manifest edit at all would need a live filesystem watcher or a database
(exactly what the Supabase/admin-dashboard phase replaces this with).

**Your real folder structure is already in `public/images/`**, copied
from `EDO_Concepts_Asset_Structure.zip` (with `.gitkeep` files so empty
folders survive in git) — `collections/{signature-native,
contemporary-senator, creative-street, editorial, bespoke}/`, plus
`products/`, `campaigns/`, `workshop/`, `details/`, `lifestyle/`,
`testimonials/`, and two additions (`lookbooks/`, `stories/`) for the
features built in this pass.

### On AI-generated placeholder photography

Same answer as before, for the record: this environment has no
photorealistic image-generation tool, and even with one, shipping
synthetic "campaign photography" of fictional models with no visible
disclaimer would misrepresent the brand to anyone viewing the live site.
`CollectionPlaceholderArt` (the gold lattice pattern, labeled "Photography
coming soon") is the honest placeholder used everywhere instead — see
`EdoImage.tsx`.

## Motion system

See `MOTION-SYSTEM.md` for what's implemented, what's intentionally deferred
until later pages exist, and the shared motion tokens (easing, durations,
tap-scale) to reuse so new components stay consistent.

## Notes

- Fonts: Fraunces (display) + Instrument Sans (body), loaded via `next/font/google`.
- Motion: Lenis drives smooth scroll globally; GSAP ScrollTrigger drives the
  Craftsmanship Journey timeline; Framer Motion handles component-level
  entrance/hover/carousel transitions. All respect `prefers-reduced-motion`.
- Newsletter form in the footer is UI-only — wire the `handleSubmit` in
  `Footer.tsx` to a Supabase table or email provider before launch.
