export type LookbookSpread = {
  image: { src: string; alt: string };
  caption: string;
};

export type Lookbook = {
  id: string;
  slug: string;
  title: string;
  season: string;
  collectionSlug: string;
  spreads: LookbookSpread[];
};

export const LOOKBOOKS: Lookbook[] = [
  {
    id: "lb_signature_native",
    slug: "signature-native-lookbook",
    title: "Signature Native — The Lookbook",
    season: "All Season",
    collectionSlug: "signature-native",
    spreads: [
      {
        image: { src: "/brand/collection-kaftan-front.jpg", alt: "Diamond Embroidery Kaftan — front" },
        caption: "The Diamond Embroidery Kaftan, front panel.",
      },
      {
        image: { src: "/brand/embroidery-detail.jpg", alt: "Embroidery detail" },
        caption: "Hand-embroidered, stitch by stitch.",
      },
      {
        image: { src: "/brand/featured-look.jpg", alt: "Full length" },
        caption: "Cut to move, not just to stand.",
      },
      {
        image: { src: "/brand/collection-kaftan-side.jpg", alt: "Side-Panel Kaftan" },
        caption: "A quieter companion piece — the Side-Panel Kaftan.",
      },
    ],
  },
];

export function getLookbook(slug: string) {
  return LOOKBOOKS.find((l) => l.slug === slug);
}
