# E.D.O Concepts — Motion System

Reference for keeping interaction design consistent as `/collections`,
`/bespoke/enquire`, and the product/gallery pages get built.

## Implemented in this pass

| Requirement | Where | Notes |
|---|---|---|
| Page transitions (soft fade, 300–600ms) | `app/template.tsx` | 400ms opacity fade on route change. **Limitation:** Next.js App Router unmounts the old page before the new one animates in — true cross-fade (old+new visible together) needs a client-side transition context; flag if you want that added. |
| Loading experience | `app/loading.tsx` | Aperture-ring logo draw-in, reusing the hero's signature motif instead of a spinner. Fires automatically on route/data suspense. |
| Hero: scroll parallax | `HeroCinematic.tsx` | Image drifts 18% on scroll via Framer `useScroll`. |
| Hero: mouse parallax (desktop) | `HeroCinematic.tsx` | ±10px drift on mousemove, spring-damped. Disabled below `sm` breakpoint (touch has no hover-equivalent signal) and under reduced motion. |
| Hero: text reveal, button entrance | `HeroCinematic.tsx` | Staggered fade+rise, 0.5s–1.3s delays. |
| Collection cards: hover | `FeaturedCollections.tsx` | Desktop: -6px lift, gold border, soft gold-tinted shadow, image zoom, "Explore" reveal. Mobile: static button always visible (no hover-dependency), `active:scale-98` for tap feedback. |
| Craftsmanship timeline | `CraftsmanshipJourney.tsx` | GSAP ScrollTrigger reveals each step + draws the connecting line as it enters view. |
| Testimonial carousel | `Testimonials.tsx` | Framer `AnimatePresence` cross-fade, drag-to-swipe (±60px threshold), autoplay every 6s, pauses on hover/touch. |
| Buttons: hover/press/loading/success/disabled/focus | `shared/Button.tsx` | `whileTap={{ scale: 0.97 }}` — never a bounce. Gold focus-visible ring. Loading spinner + success check built in. |
| Newsletter form states | `layout/Footer.tsx` | idle → loading (spinner) → success (message) / error (inline validation message, red hairline — no shake). |
| Nav: glass morphism + scroll-aware + active indicator | `layout/NavBar.tsx` | `backdrop-blur` + opacity ramp past 24px scroll; active route gets a gold underline. |
| Mobile drawer | `layout/MobileNav.tsx` | Full-screen, staggered link entrance, large tap targets (min 44px). |
| Reduced motion | Global | `usePrefersReducedMotion.ts` hook + CSS `@media (prefers-reduced-motion)` block in `globals.css`. Every custom animation (parallax, aperture ring) checks this explicitly; CSS transitions/animations fall back automatically. |

## Deferred — needs the page it belongs to

These are real requirements from the brief, not skipped — they need a page
that doesn't exist yet:

- **Product image gallery** (swipe, pinch-zoom, progressive loading) — belongs
  on the collection/product detail pages (`/collections/[slug]`), not the
  homepage. Build alongside those routes.
- **Form states beyond newsletter** (the full active/success/error/loading
  set) — belongs on `/bespoke/enquire`. `shared/Button.tsx` and the Footer
  form's validation pattern are the templates to reuse there.
- **Gallery open/close (lightbox)** — same, lives with the collection pages.

## Motion tokens (reuse these, don't invent new ones)

```
easing:      cubic-bezier(0.16, 1, 0.3, 1)   // "ease-signature" in tailwind.config.ts
entrance:    0.5–0.7s duration, 20px rise, staggered 0.08–0.15s per item
hover/press: 0.2–0.3s
page fade:   0.4s
tap scale:   0.97 (never higher contrast than that — no bounce, ever)
```

All new interactive components should pull from this table rather than
picking new durations/easings ad hoc — that consistency is most of what
makes the site read as "premium" rather than "animated."
