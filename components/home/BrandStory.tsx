import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

/**
 * NOTE: workshop/behind-the-scenes photography still hasn't been supplied.
 * Founder portrait (Edogun Destiny Osaigbovo) is now real. Add workshop
 * shots as a second image or small gallery here once available — see
 * README for the full asset request list.
 */
export function BrandStory() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 sm:grid-cols-2 sm:items-center sm:gap-16">
        <FadeInWhenVisible className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/brand/founder-portrait.jpg"
            alt="Edogun Destiny Osaigbovo, founder of E.D.O Concepts"
            fill
            className="object-cover"
            sizes="(min-width: 640px) 45vw, 100vw"
          />
          <div className="absolute inset-0 border border-gold/20" />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <SectionHeading eyebrow="Our Story" title="Cut from heritage." />
          <div className="mt-6 space-y-5 font-body text-[15px] leading-relaxed text-ivory/70">
            <p>
              E.D.O Concepts carries the name of its founder, Edogun Destiny
              Osaigbovo — fashion is part of his heritage, inspired by a
              father who designed clothes before him.
            </p>
            <p>
              Years spent as an event host sharpened an eye for presentation:
              what makes a man walk into a room and command it. That
              instinct now shapes every cut, every seam, every fitting.
            </p>
            <p>
              Founded August 2024, the mission has stayed singular —
              bespoke fashion that combines craftsmanship, innovation, and
              timeless elegance, so every client looks confident,
              distinguished, unforgettable.
            </p>
          </div>
          <a
            href="/about"
            className="mt-8 inline-block font-body text-[13px] uppercase tracking-widest2 text-gold underline underline-offset-4 transition-colors hover:text-champagne"
          >
            Read the Full Story
          </a>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
