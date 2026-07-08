export type Campaign = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  heroImage: { src: string; alt: string };
  story: string;
  credits: { role: string; name: string }[];
  featuredGarmentSlugs: string[];
  /** Optional — set when a real campaign video exists */
  videoUrl?: string;
};

/**
 * One real campaign, built from the actual "Crafted Beyond Fashion"
 * hero copy already in use — not a fabricated shoot with invented
 * crew names. Credits list the real people behind this build.
 */
export const CAMPAIGNS: Campaign[] = [
  {
    id: "camp_crafted_beyond_fashion",
    slug: "crafted-beyond-fashion",
    title: "Crafted Beyond Fashion",
    tagline:
      "Modern bespoke menswear designed for gentlemen who appreciate craftsmanship, confidence, and timeless elegance.",
    heroImage: {
      src: "/brand/hero-kaftan.jpg",
      alt: "Hand-embroidered bespoke kaftan by E.D.O Concepts",
    },
    story:
      "The debut campaign for E.D.O Concepts' digital flagship — built around the brand's first signature piece, the Diamond Embroidery Kaftan, and the craftsmanship philosophy behind every commission.",
    credits: [
      { role: "Creative Direction", name: "Edogun Destiny Osaigbovo" },
      { role: "Tailoring", name: "E.D.O Concepts Atelier" },
    ],
    featuredGarmentSlugs: ["diamond-embroidery-kaftan", "checkered-senator-set"],
  },
];

export function getCampaign(slug: string) {
  return CAMPAIGNS.find((c) => c.slug === slug);
}
