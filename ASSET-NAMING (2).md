# Asset Naming Convention

This mirrors `EDO_Concepts_Asset_Structure.zip` exactly — the folder
layout already exists at `public/images/`. Drop files in using this
naming pattern and nothing else needs to change.

## Pattern

```
{category}-{color}-{number}.webp
```

Examples (from the original structure doc):

```
native-brown-01.webp
native-purple-01.webp
senator-orange-01.webp
senator-brown-01.webp
street-red-01.webp
street-colorblock-01.webp
editorial-cross-01.webp
editorial-blacktie-01.webp
casual-black-01.webp
```

## Folder map

| Folder | Contents |
|---|---|
| `public/images/collections/signature-native/` | Signature Native collection shots |
| `public/images/collections/contemporary-senator/` | Contemporary Senator collection shots |
| `public/images/collections/creative-street/` | Creative Street collection shots |
| `public/images/collections/editorial/` | Editorial collection shots |
| `public/images/collections/bespoke/` | Bespoke collection shots |
| `public/images/products/` | Individual product photography |
| `public/images/campaigns/` | Campaign photography |
| `public/images/workshop/` | Behind-the-scenes / workshop photography |
| `public/images/details/` | Fabric & embroidery macro shots |
| `public/images/lifestyle/` | Lifestyle / editorial context shots |
| `public/images/testimonials/` | Client portraits |
| `public/images/lookbooks/` | Lookbook spreads (added — see below) |
| `public/images/stories/` | Editorial story imagery (added — see below) |

`lookbooks/` and `stories/` weren't in the original structure doc but
follow the same pattern — added so the Lookbook and Editorial Stories
features (below) have a home for their images too.

## How to actually replace a placeholder

1. Export/name the file per the pattern above.
2. Drop it in the matching folder.
3. Open the relevant `content/*.ts` file and update that item's `images`
   array (or `images: []` → `images: [{ src: "/images/...", alt: "..." }]`).
4. Deploy. That's it — `EdoImage` (see `components/shared/EdoImage.tsx`)
   automatically renders the real photo the moment the path resolves;
   no component code changes, ever.

Step 3 is the one manual step — a plain-text array edit, not a code
change. Fully automatic (zero-touch) detection would require a live
filesystem watcher or a database-backed CMS, which is exactly what
Phase 4 (Supabase + admin dashboard) replaces this file-based system
with. Until then, this is the fastest path that still requires no
component logic to change.
