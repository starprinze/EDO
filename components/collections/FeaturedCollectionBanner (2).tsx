import Link from "next/link";
import { Collection } from "@/content/collections";
import { EdoImage } from "@/components/shared/EdoImage";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

export function FeaturedCollectionBanner({ collection }: { collection: Collection }) {
  const cover = collection.images[0];

  return (
    <section className="relative mx-auto max-w-6xl px-5 sm:px-8">
      <FadeInWhenVisible className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[16/8]">
        <EdoImage
          src={cover?.src ?? ""}
          alt={cover?.alt ?? collection.title}
          fill
          fallbackSeed={collection.accentSeed}
          fallbackLabel={collection.title}
          className="object-cover"
          sizes="(min-width: 640px) 90vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent sm:bg-gradient-to-r" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:justify-center sm:p-12">
          <span className="mb-2 block font-body text-[11px] uppercase tracking-widest2 text-gold">
            Featured Collection
          </span>
          <h2 className="max-w-sm font-display text-3xl leading-tight text-ivory sm:text-4xl">
            {collection.title}
          </h2>
          <p className="mt-3 max-w-sm font-body text-[15px] leading-relaxed text-ivory/70">
            {collection.description}
          </p>
          <Link
            href={`/collections/${collection.slug}`}
            className="mt-6 inline-block w-fit border border-gold px-7 py-3 font-body text-[13px] uppercase tracking-widest2 text-gold transition-colors duration-300 hover:bg-gold hover:text-void"
          >
            Explore the Collection
          </Link>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
