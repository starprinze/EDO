import { CollectionImage } from "./collections";

/**
 * Products content manifest. Internally still typed as `Garment`
 * (a garment is a specific piece — reads more naturally than "Product"
 * throughout the UI copy) but exported under the PRODUCTS/getProduct*
 * names too, matching the requested content/products.ts convention.
 */
export type Garment = {
  id: string;
  slug: string;
  collectionSlug: string;
  title: string;
  subtitle: string;
  description: string;
  story: string;
  craftsmanship: string;
  inspiration: string;
  styling: string;
  colors: string[];
  occasions: string[];
  fabric: string;
  color: string;
  productionTime: string;
  care: string;
  sizing: string;
  images: CollectionImage[];
  featured?: boolean;
  isNew?: boolean;
  seo: {
    title: string;
    description: string;
  };
};

export const GARMENTS: Garment[] = [
  {
    id: "prod_diamond_kaftan",
    slug: "diamond-embroidery-kaftan",
    collectionSlug: "signature-native",
    title: "Diamond Embroidery Kaftan",
    subtitle: "Signature Native",
    description:
      "A flowing kaftan built around a single hand-worked leaf-and-lattice chest panel, finished in matching cuffs.",
    story:
      "The leaf motif draws from lattice patterns seen in traditional textile borders, reworked at a larger scale for modern presence. Worn open-collar with minimal jewelry — the embroidery is the statement.",
    craftsmanship:
      "Chest panel and cuffs hand-embroidered, stitch by stitch — no two panels are worked quite the same.",
    inspiration:
      "Traditional lattice borders, scaled up for a modern silhouette.",
    styling:
      "Worn open-collar with minimal jewelry — the embroidery is the statement, everything else should stay quiet.",
    colors: ["Black / Ivory"],
    occasions: ["Wedding", "Formal", "Ceremony"],
    fabric: "Premium cotton blend",
    color: "Black / Ivory",
    productionTime: "2–3 weeks from consultation",
    care: "Dry clean only. Store on a padded hanger to preserve the embroidery panel.",
    sizing: "Made-to-measure — final sizing confirmed at your fitting.",
    images: [
      { src: "/brand/collection-kaftan-front.jpg", alt: "Diamond Embroidery Kaftan — front" },
      { src: "/brand/embroidery-detail.jpg", alt: "Diamond Embroidery Kaftan — embroidery detail" },
      { src: "/brand/featured-look.jpg", alt: "Diamond Embroidery Kaftan — full length" },
    ],
    featured: true,
    isNew: true,
    seo: {
      title: "Diamond Embroidery Kaftan | E.D.O Concepts",
      description:
        "A flowing hand-embroidered kaftan with a signature leaf-and-lattice chest panel.",
    },
  },
  {
    id: "prod_side_panel_kaftan",
    slug: "side-panel-kaftan",
    collectionSlug: "signature-native",
    title: "Side-Panel Kaftan",
    subtitle: "Signature Native",
    description:
      "A slimmer kaftan silhouette with a vertical embroidered panel running the full length of the garment.",
    story:
      "A quieter companion piece to the Diamond Embroidery Kaftan, for those who want less panel and more silhouette.",
    craftsmanship:
      "A single continuous embroidered panel from collar to hem — precision-aligned so the pattern never breaks stride.",
    inspiration: "A study in restraint against its bolder sibling piece.",
    styling: "Pairs well with a simple cap for ceremony, or bare-headed for evening events.",
    colors: ["Black / Ivory"],
    occasions: ["Formal", "Everyday Grand"],
    fabric: "Premium cotton blend",
    color: "Black / Ivory",
    productionTime: "2–3 weeks from consultation",
    care: "Dry clean only.",
    sizing: "Made-to-measure — final sizing confirmed at your fitting.",
    images: [
      { src: "/brand/collection-kaftan-side.jpg", alt: "Side-Panel Kaftan — full length" },
    ],
    seo: {
      title: "Side-Panel Kaftan | E.D.O Concepts",
      description: "A slimmer kaftan silhouette with a full-length embroidered panel.",
    },
  },
  {
    id: "prod_checkered_senator",
    slug: "checkered-senator-set",
    collectionSlug: "contemporary-senator",
    title: "Checkered Senator Set",
    subtitle: "Contemporary Senator",
    description:
      "A two-piece senator set in a crisp checkerboard weave, cut for a sharp, structured line.",
    story:
      "Built for the boardroom-to-event transition — sharp enough for a meeting, distinct enough for an evening after.",
    craftsmanship:
      "Cut on the bias at the seams to keep the checker pattern square across every panel — easy to get wrong, deliberate here.",
    inspiration: "The graphic confidence of a checkerboard, tailored formally.",
    styling: "Wear with minimal accessories — let the graphic weave carry the look.",
    colors: ["Black / White"],
    occasions: ["Executive", "Formal Event"],
    fabric: "Structured cotton weave",
    color: "Black / White",
    productionTime: "10–14 days from consultation",
    care: "Dry clean recommended. Iron on reverse to protect the weave.",
    sizing: "Made-to-measure — final sizing confirmed at your fitting.",
    images: [
      { src: "/brand/collection-checkered.jpg", alt: "Checkered Senator Set — fabric detail" },
    ],
    featured: true,
    isNew: true,
    seo: {
      title: "Checkered Senator Set | E.D.O Concepts",
      description: "A sharp two-piece senator set in a crisp checkerboard weave.",
    },
  },
  {
    id: "prod_polka_bloom_shirt",
    slug: "polka-bloom-print-shirt",
    collectionSlug: "creative-street",
    title: "Polka & Bloom Print Shirt",
    subtitle: "Creative Street",
    description:
      "A bold vintage-inspired print shirt layering polka dot and floral panels for a confident, editorial finish.",
    story:
      "A study in wearing two bold prints without them fighting each other — pattern-blocked rather than pattern-clashed.",
    craftsmanship:
      "Panels cut and matched by hand so the pattern transition sits deliberately, not accidentally, at the seam.",
    inspiration: "Vintage print-mixing, reworked for a modern cut.",
    styling: "Best worn open over a plain tee, sleeves rolled — a statement piece, not a full formal look.",
    colors: ["Multi-print"],
    occasions: ["Casual", "Owambe", "Everyday Grand"],
    fabric: "Cotton poplin",
    color: "Multi-print",
    productionTime: "7–10 days from consultation",
    care: "Machine wash cold, hang dry to preserve print vibrancy.",
    sizing: "Made-to-measure — final sizing confirmed at your fitting.",
    images: [
      { src: "/brand/collection-floral.jpg", alt: "Polka & Bloom Print Shirt — detail" },
    ],
    seo: {
      title: "Polka & Bloom Print Shirt | E.D.O Concepts",
      description: "A bold print-mixed shirt for confident, editorial everyday dressing.",
    },
  },
  {
    id: "prod_classic_agbada",
    slug: "classic-agbada",
    collectionSlug: "editorial",
    title: "Classic Three-Piece Agbada",
    subtitle: "Editorial",
    description: "A grand, flowing three-piece agbada set for ceremony and stature.",
    story:
      "A study piece — full editorial photography coming with the next fitting session.",
    craftsmanship: "Full hand-finishing on collar and cuffs, made to drape rather than sit stiff.",
    inspiration: "Traditional ceremonial grandeur, tailored for a contemporary fit.",
    styling: "Traditionally worn with a matching cap for formal ceremony settings.",
    colors: ["To be selected at consultation"],
    occasions: ["Ceremony", "Wedding"],
    fabric: "Premium brocade",
    color: "To be selected at consultation",
    productionTime: "3–4 weeks from consultation",
    care: "Dry clean only.",
    sizing: "Made-to-measure — final sizing confirmed at your fitting.",
    images: [],
    seo: {
      title: "Classic Three-Piece Agbada | E.D.O Concepts",
      description: "A grand three-piece agbada set for ceremony and stature.",
    },
  },
  {
    id: "prod_wedding_set",
    slug: "coordinated-wedding-set",
    collectionSlug: "editorial",
    title: "Coordinated Wedding Set",
    subtitle: "Editorial",
    description:
      "Coordinated bridal-party menswear, tailored as one story rather than matching separately.",
    story:
      "Built from real coordination requests — groomsmen who wanted to look aligned without looking uniform.",
    craftsmanship:
      "Each set is planned together so fabric, color, and cut read as one coordinated party, not identical copies.",
    inspiration: "Wedding parties who want cohesion without uniformity.",
    styling: "Book a group consultation to plan the full wedding party together.",
    colors: ["To be selected at consultation"],
    occasions: ["Wedding"],
    fabric: "To be selected at consultation",
    color: "To be selected at consultation",
    productionTime: "4–6 weeks for a full party — book early",
    care: "Varies by fabric selected.",
    sizing: "Made-to-measure per person — fittings scheduled individually.",
    images: [],
    seo: {
      title: "Coordinated Wedding Set | E.D.O Concepts",
      description: "Coordinated, tailored menswear for the full wedding party.",
    },
  },
];

export const PRODUCTS = GARMENTS;

export function getGarmentsByCollection(collectionSlug: string) {
  return GARMENTS.filter((g) => g.collectionSlug === collectionSlug);
}
export const getProductsByCollection = getGarmentsByCollection;

export function getGarment(slug: string) {
  return GARMENTS.find((g) => g.slug === slug);
}
export const getProduct = getGarment;

export function getRelatedGarments(garment: Garment, limit = 3) {
  const sameCollection = GARMENTS.filter(
    (g) => g.slug !== garment.slug && g.collectionSlug === garment.collectionSlug
  );
  const sharedOccasion = GARMENTS.filter(
    (g) =>
      g.slug !== garment.slug &&
      g.collectionSlug !== garment.collectionSlug &&
      g.occasions.some((o) => garment.occasions.includes(o))
  );
  return [...sameCollection, ...sharedOccasion].slice(0, limit);
}

export const ALL_OCCASIONS = Array.from(
  new Set(GARMENTS.flatMap((g) => g.occasions))
).sort();

export const FEATURED_PRODUCTS = GARMENTS.filter((g) => g.featured);
