/**
 * Collections content manifest — the CMS-lite source of truth for
 * every collection on the site. Slugs match the real asset structure
 * (EDO_Concepts_Asset_Structure.zip): signature-native,
 * contemporary-senator, creative-street, editorial, bespoke.
 *
 * IMAGE RESOLUTION: image paths point at the exact convention from
 * that structure — /images/collections/{slug}/{category}-{color}-{n}.webp.
 * Nothing here needs to change when real files land in those folders;
 * see EdoImage.tsx for the fallback-on-missing-file behavior.
 */

export type CollectionImage = {
  src: string;
  alt: string;
};

export type Collection = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  /** Longer editorial copy for the collection detail hero/intro */
  story: string;
  inspiration: string;
  theme: string;
  season: string;
  /** Cover images actually available today (empty = placeholder art) */
  images: CollectionImage[];
  /** Optional distinct hero banner image; falls back to images[0] */
  heroImage?: CollectionImage;
  accentSeed: number;
  seo: {
    title: string;
    description: string;
  };
};

export const COLLECTIONS: Collection[] = [
  {
    id: "col_signature_native",
    slug: "signature-native",
    title: "Signature Native",
    subtitle: "Heritage, re-cut",
    description: "Flowing, hand-embroidered native silhouettes built for presence.",
    story:
      "Signature Native takes cuts that have stayed in the family for generations and re-cuts them with modern proportions — nothing lost, everything sharpened. Every piece routes through the same hand-embroidery process, panel by panel.",
    inspiration:
      "Lattice and leaf motifs drawn from traditional textile borders, reworked at a larger scale for modern presence.",
    theme: "Heritage tailoring",
    season: "All season",
    images: [
      { src: "/brand/collection-kaftan-front.jpg", alt: "Signature Native — front detail" },
    ],
    accentSeed: 1,
    seo: {
      title: "Signature Native Collection | E.D.O Concepts",
      description: "Hand-embroidered native wear, re-cut for modern proportions.",
    },
  },
  {
    id: "col_contemporary_senator",
    slug: "contemporary-senator",
    title: "Contemporary Senator",
    subtitle: "Sharp, structured, modern",
    description: "Sharp, structured tailoring for the modern executive.",
    story:
      "Contemporary Senator exists for the wardrobe gap between a suit and a native outfit — sharp enough for the boardroom, distinct enough to be remembered after. Cut on the bias at the seams to keep every pattern square across the panel.",
    inspiration: "Built for the boardroom-to-event transition in a single outfit.",
    theme: "Executive tailoring",
    season: "All season",
    images: [
      { src: "/brand/collection-checkered.jpg", alt: "Contemporary Senator — fabric detail" },
    ],
    accentSeed: 3,
    seo: {
      title: "Contemporary Senator Collection | E.D.O Concepts",
      description: "Sharp, structured senator tailoring for the modern executive.",
    },
  },
  {
    id: "col_creative_street",
    slug: "creative-street",
    title: "Creative Street",
    subtitle: "Bold prints, confident cuts",
    description: "Bold pattern-work with a refined, editorial finish.",
    story:
      "Creative Street is a study in pattern confidence — bold prints worn without apology, cut clean enough that the fabric does the talking. Panels are matched by hand so pattern transitions sit deliberately at every seam.",
    inspiration: "Two bold prints, pattern-blocked rather than pattern-clashed.",
    theme: "Editorial streetwear",
    season: "All season",
    images: [
      { src: "/brand/collection-floral.jpg", alt: "Creative Street — pattern detail" },
    ],
    accentSeed: 4,
    seo: {
      title: "Creative Street Collection | E.D.O Concepts",
      description: "Bold, editorial print-work for confident everyday dressing.",
    },
  },
  {
    id: "col_editorial",
    slug: "editorial",
    title: "Editorial",
    subtitle: "Ceremony, framed as fashion",
    description: "Grand, ceremonial pieces photographed like a fashion story.",
    story:
      "Editorial is where E.D.O's biggest pieces live — agbada, coordinated wedding sets, full ceremonial commissions — treated with the same cinematic attention as a magazine spread, not just a ceremony outfit.",
    inspiration: "The biggest moments deserve the most deliberate photography.",
    theme: "Ceremonial editorial",
    season: "Wedding & ceremony season",
    images: [],
    accentSeed: 5,
    seo: {
      title: "Editorial Collection | E.D.O Concepts",
      description: "Ceremonial menswear for weddings and grand occasions.",
    },
  },
  {
    id: "col_bespoke",
    slug: "bespoke",
    title: "Bespoke",
    subtitle: "One-to-one commissions",
    description: "Fully custom, one-to-one commissions from first sketch.",
    story:
      "The Bespoke line isn't a collection at all — it's a blank page. Every commission starts from your idea, not our rack, worked through consultation, fabric selection, and fitting from scratch.",
    inspiration: "Whatever you bring to the first consultation.",
    theme: "Custom commission",
    season: "All season",
    images: [],
    accentSeed: 8,
    seo: {
      title: "Bespoke Collection | E.D.O Concepts",
      description: "Fully custom menswear commissions, built from your first sketch.",
    },
  },
];

export function getCollection(slug: string) {
  return COLLECTIONS.find((c) => c.slug === slug);
}

export function getRelatedCollections(slug: string, limit = 3) {
  return COLLECTIONS.filter((c) => c.slug !== slug).slice(0, limit);
}
