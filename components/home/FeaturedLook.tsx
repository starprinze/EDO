import Image from "next/image";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

export function FeaturedLook() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-end overflow-hidden bg-void">
      <div className="absolute inset-0">
        <Image
          src="/brand/featured-look.jpg"
          alt="Signature hand-embroidered E.D.O Concepts kaftan"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-void/60 via-transparent to-transparent" />

      <div className="relative z-10 w-full px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <FadeInWhenVisible className="max-w-md">
            <span className="mb-4 block font-body text-[11px] uppercase tracking-widest2 text-gold">
              The Signature Look
            </span>
            <h2 className="font-display text-3xl leading-tight text-ivory sm:text-4xl">
              The diamond embroidery kaftan.
            </h2>
            <p className="mt-5 font-body text-[15px] leading-relaxed text-ivory/70">
              A hand-finished leaf-and-lattice motif, worked entirely by
              needle across the chest panel and sleeves — the piece that
              defines what "premium bespoke" means at E.D.O. No two are
              stitched quite the same.
            </p>
            <a
              href="/collections/signature-native/diamond-embroidery-kaftan"
              className="mt-7 inline-block border border-gold px-7 py-3 font-body text-[13px] uppercase tracking-widest2 text-gold transition-colors duration-300 hover:bg-gold hover:text-void"
            >
              View Collection
            </a>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
