import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { STORIES } from "@/content/stories";

/**
 * The first card is a real, published story (`content/stories.ts`).
 * The remaining three are placeholder categories from the brief —
 * clearly non-clickable (no href) until real articles exist, rather
 * than linking to content that doesn't exist yet.
 */
const PLACEHOLDER_ARTICLES = [
  {
    category: "Styling Tips",
    title: "Five ways to wear a kaftan beyond the wedding season",
  },
  {
    category: "Wedding Inspiration",
    title: "Coordinating Aso-Ebi without losing individual style",
  },
  {
    category: "Fabric Stories",
    title: "What separates a fabric that drapes from one that just hangs",
  },
];

export function FashionJournal() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow="Journal" title="From the E.D.O journal" />

      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {STORIES.map((s, i) => (
          <FadeInWhenVisible
            key={s.slug}
            delay={i * 0.06}
            className="border-b border-ivory/10 pb-8"
          >
            <a href={`/journal/${s.slug}`} className="group block">
              <span className="font-body text-[11px] uppercase tracking-widest2 text-gold/80">
                {s.category}
              </span>
              <h3 className="mt-2 font-display text-xl leading-snug text-ivory transition-colors group-hover:text-champagne sm:text-2xl">
                {s.title}
              </h3>
              <span className="mt-3 inline-block font-body text-[12px] uppercase tracking-widest2 text-ivory/50 transition-colors group-hover:text-gold">
                Read More &rarr;
              </span>
            </a>
          </FadeInWhenVisible>
        ))}
        {PLACEHOLDER_ARTICLES.map((a, i) => (
          <FadeInWhenVisible
            key={a.title}
            delay={(i + STORIES.length) * 0.06}
            className="border-b border-ivory/10 pb-8 opacity-50"
          >
            <div>
              <span className="font-body text-[11px] uppercase tracking-widest2 text-gold/80">
                {a.category}
              </span>
              <h3 className="mt-2 font-display text-xl leading-snug text-ivory sm:text-2xl">
                {a.title}
              </h3>
              <span className="mt-3 inline-block font-body text-[12px] uppercase tracking-widest2 text-ivory/40">
                Coming Soon
              </span>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}
