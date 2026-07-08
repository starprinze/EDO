import Link from "next/link";
import { Garment } from "@/content/products";
import { EdoImage } from "@/components/shared/EdoImage";
import { WishlistButton } from "@/components/shared/WishlistButton";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

export function GarmentCard({ garment, delay = 0 }: { garment: Garment; delay?: number }) {
  const cover = garment.images[0];

  return (
    <FadeInWhenVisible delay={delay} className="group">
      <Link
        href={`/collections/${garment.collectionSlug}/${garment.slug}`}
        className="block transition-transform duration-500 ease-signature active:scale-[0.98] sm:group-hover:-translate-y-1.5"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-transparent bg-charcoal transition-all duration-500 ease-signature sm:group-hover:border-gold/40 sm:group-hover:shadow-[0_18px_40px_-12px_rgba(201,162,75,0.25)]">
          <EdoImage
            src={cover?.src ?? ""}
            alt={cover?.alt ?? garment.title}
            fill
            fallbackSeed={garment.title.length}
            fallbackLabel={garment.title}
            className="object-cover transition-transform duration-700 ease-signature sm:group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
          {garment.isNew && (
            <span className="absolute left-3 top-3 bg-gold px-2.5 py-1 font-body text-[10px] uppercase tracking-widest2 text-void">
              New
            </span>
          )}
          <WishlistButton slug={garment.slug} className="absolute right-3 top-3 h-9 w-9" />
        </div>
        <h3 className="mt-4 font-display text-lg text-ivory">{garment.title}</h3>
        <p className="mt-1 font-body text-sm leading-relaxed text-ivory/55">
          {garment.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          {garment.occasions.slice(0, 2).map((o) => (
            <span
              key={o}
              className="font-body text-[10px] uppercase tracking-widest2 text-gold/70"
            >
              {o}
            </span>
          ))}
        </div>
      </Link>
    </FadeInWhenVisible>
  );
}
