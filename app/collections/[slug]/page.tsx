import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COLLECTIONS, getCollection } from "@/content/collections";
import { getGarmentsByCollection } from "@/content/products";
import { EdoImage } from "@/components/shared/EdoImage";
import { ProductGrid } from "@/components/collections/ProductGrid";
import { RelatedCollections } from "@/components/collections/RelatedCollections";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const collection = getCollection(params.slug);
  if (!collection) return {};
  return {
    title: `${collection.title} | E.D.O Concepts`,
    description: collection.description,
  };
}

export default function CollectionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const collection = getCollection(params.slug);
  if (!collection) notFound();

  const garments = getGarmentsByCollection(collection.slug);
  const cover = collection.images[0];

  return (
    <>
      <section className="relative flex min-h-[70vh] w-full items-end overflow-hidden bg-void">
        <div className="absolute inset-0">
          <EdoImage
            src={cover?.src ?? ""}
            alt={cover?.alt ?? collection.title}
            fill
            fallbackSeed={collection.accentSeed}
            fallbackLabel={collection.title}
            className="object-cover object-top opacity-80"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-void/10" />

        <FadeInWhenVisible className="relative z-10 w-full px-5 pb-14 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <span className="mb-3 block font-body text-[11px] uppercase tracking-widest2 text-gold">
              Collection
            </span>
            <h1 className="max-w-lg font-display text-3xl leading-tight text-ivory sm:text-5xl">
              {collection.title}
            </h1>
            <p className="mt-4 max-w-md font-body text-[15px] leading-relaxed text-ivory/70">
              {collection.description}
            </p>
          </div>
        </FadeInWhenVisible>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <SectionHeading eyebrow="The Story" title="Behind this collection" />
        <p className="mt-6 font-body text-[15px] leading-relaxed text-ivory/70">
          {collection.story}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading eyebrow="The Pieces" title="Shop this collection" />
        <div className="mt-10">
          <ProductGrid garments={garments} />
        </div>
      </section>

      <RelatedCollections currentSlug={collection.slug} />

      <section className="relative overflow-hidden bg-charcoal/40 px-5 py-16 text-center sm:px-8">
        <h2 className="font-display text-2xl text-ivory sm:text-3xl">
          Ready to make it yours?
        </h2>
        <p className="mx-auto mt-3 max-w-md font-body text-sm text-ivory/60">
          Every piece in this collection starts with a consultation to get
          your fit, fabric, and details exactly right.
        </p>
        <a
          href="/bespoke/enquire"
          className="mt-7 inline-block border border-gold px-7 py-3 font-body text-[13px] uppercase tracking-widest2 text-gold transition-colors duration-300 hover:bg-gold hover:text-void"
        >
          Book Consultation
        </a>
      </section>
    </>
  );
}

