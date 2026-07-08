import Image from "next/image";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

export function CollectionsHero() {
  return (
    <section className="relative flex min-h-[55vh] w-full items-end overflow-hidden bg-void">
      <div className="absolute inset-0">
        <Image
          src="/brand/hero-kaftan.jpg"
          alt=""
          fill
          className="object-cover object-top opacity-70"
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-void/20" />

      <FadeInWhenVisible className="relative z-10 w-full px-5 pb-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <span className="mb-3 block font-body text-[11px] uppercase tracking-widest2 text-gold">
            The Gallery
          </span>
          <h1 className="max-w-lg font-display text-3xl leading-tight text-ivory sm:text-5xl">
            Every collection tells its own story.
          </h1>
          <p className="mt-4 max-w-md font-body text-[15px] leading-relaxed text-ivory/70">
            Browse the full E.D.O archive — from ceremonial grandeur to
            everyday refinement. Every piece begins with a consultation,
            not a cart.
          </p>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
