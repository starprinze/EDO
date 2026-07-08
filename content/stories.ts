export type Story = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  heroImage: { src: string; alt: string };
  pullQuote: string;
  body: string[]; // paragraphs
  relatedCollectionSlugs: string[];
  publishedLabel: string; // display-only, no fabricated exact date
  seo: { title: string; description: string };
};

/**
 * One real story to prove out the template — the founder's actual
 * background from the brand brief. The three "Fashion Journal" teaser
 * categories on the homepage (Styling Tips, Behind the Seams, Wedding
 * Inspiration) don't have real articles yet, so they aren't listed
 * here — see FashionJournal.tsx for that placeholder note.
 */
export const STORIES: Story[] = [
  {
    id: "story_founder",
    slug: "cut-from-heritage",
    title: "Cut From Heritage",
    subtitle: "The story behind E.D.O Concepts",
    excerpt:
      "Fashion runs in the family — how a father's craft and a son's eye for presentation became E.D.O Concepts.",
    category: "Behind the Brand",
    heroImage: {
      src: "/brand/founder-portrait.jpg",
      alt: "Edogun Destiny Osaigbovo, founder of E.D.O Concepts",
    },
    pullQuote:
      "What makes a man walk into a room and command it — that instinct now shapes every cut, every seam, every fitting.",
    body: [
      "E.D.O Concepts carries the name of its founder, Edogun Destiny Osaigbovo — fashion is part of his heritage, inspired by a father who designed clothes before him.",
      "Years spent as an event host sharpened an eye for presentation: what makes a man walk into a room and command it. That instinct now shapes every cut, every seam, every fitting.",
      "Founded in August 2024, the mission has stayed singular — bespoke fashion that combines craftsmanship, innovation, and timeless elegance, so every client looks confident, distinguished, unforgettable.",
      "The brand's vision reaches further than one tailoring shop in Benin City: to become one of the world's leading luxury fashion houses, redefining African craftsmanship through exceptional tailoring, innovation, and timeless style.",
    ],
    relatedCollectionSlugs: ["signature-native", "bespoke"],
    publishedLabel: "From the archive",
    seo: {
      title: "Cut From Heritage — The E.D.O Concepts Story",
      description:
        "The story behind E.D.O Concepts founder Edogun Destiny Osaigbovo, and how the brand began.",
    },
  },
];

export function getStory(slug: string) {
  return STORIES.find((s) => s.slug === slug);
}
