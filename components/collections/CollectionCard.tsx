import Link from "next/link";
import { Collection } from "@/content/collections";
import { EdoImage } from "@/components/shared/EdoImage";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

export function CollectionCard({
  collection,
  pieceCount,
  delay = 0,
}: {
  collection: Collection;
  pieceCount: number;
  delay?: number;
}) {
  const cover = collection.images[0];

  return (
    <FadeInWhenVisible delay={delay} className="group">
      <Link
        href={`/collections/${collection.slug}`}
        className="block transition-transform duration-500 ease-signature active:scale-[0.98] sm:group-hover:-translate-y-1.5"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-transparent bg-charcoal transition-all duration-500 ease-signature sm:group-hover:border-gold/40 sm:group-hover:shadow-[0_18px_40px_-12px_rgba(201,162,75,0.25)]">
          <EdoImage
            src={cover?.src ?? ""}
            alt={cover?.alt ?? collection.title}
            fill
            fallbackSeed={collection.accentSeed}
            fallbackLabel={collection.title}
            className="object-cover transition-transform duration-700 ease-signature sm:group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 translate-y-2 font-body text-[11px] uppercase tracking-widest2 text-gold opacity-0 transition-all duration-400 ease-signature sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
            Explore &rarr;
          </span>
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-2">
          <h3 className="font-display text-xl text-ivory">{collection.title}</h3>
          <span className="whitespace-nowrap font-body text-[11px] uppercase tracking-widest2 text-ivory/40">
            {pieceCount} {pieceCount === 1 ? "piece" : "pieces"}
          </span>
        </div>
        <p className="mt-1 font-body text-sm leading-relaxed text-ivory/55">
          {collection.description}
        </p>
        <span className="mt-3 inline-block font-body text-[11px] uppercase tracking-widest2 text-gold transition-colors group-hover:text-champagne sm:hidden">
          Explore &rarr;
        </span>
      </Link>
    </FadeInWhenVisible>
  );
}
