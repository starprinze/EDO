import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GARMENTS, getGarment } from "@/content/products";
import { getCollection } from "@/content/collections";
import { ProductGallery } from "@/components/collections/ProductGallery";
import { RelatedProducts } from "@/components/collections/RelatedProducts";
import { StickyMobileCTA } from "@/components/collections/StickyMobileCTA";
import { WishlistButton } from "@/components/shared/WishlistButton";
import { ShareButton } from "@/components/shared/ShareButton";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

export function generateStaticParams() {
  return GARMENTS.map((g) => ({ slug: g.collectionSlug, product: g.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string; product: string };
}): Metadata {
  const garment = getGarment(params.product);
  if (!garment) return {};
  return {
    title: `${garment.title} | E.D.O Concepts`,
    description: garment.description,
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string; product: string };
}) {
  const garment = getGarment(params.product);
  if (!garment || garment.collectionSlug !== params.slug) notFound();

  const collection = getCollection(garment.collectionSlug);

  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-8 sm:px-8 sm:pb-16">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 font-body text-xs text-ivory/40">
          <Link href="/collections" className="hover:text-gold">
            Collections
          </Link>
          <span>/</span>
          {collection && (
            <>
              <Link href={`/collections/${collection.slug}`} className="hover:text-gold">
                {collection.title}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-ivory/60">{garment.title}</span>
        </nav>

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
          {/* Gallery */}
          <FadeInWhenVisible>
            <ProductGallery
              images={garment.images}
              placeholderSeed={garment.title.length}
              placeholderLabel={garment.title}
            />
          </FadeInWhenVisible>

          {/* Details */}
          <FadeInWhenVisible delay={0.1}>
            <div className="flex items-start justify-between gap-4">
              <div>
                {garment.isNew && (
                  <span className="mb-2 inline-block bg-gold px-2.5 py-1 font-body text-[10px] uppercase tracking-widest2 text-void">
                    New
                  </span>
                )}
                <h1 className="font-display text-3xl leading-tight text-ivory sm:text-4xl">
                  {garment.title}
                </h1>
              </div>
              <div className="flex shrink-0 gap-2">
                <WishlistButton slug={garment.slug} />
                <ShareButton title={garment.title} />
              </div>
            </div>

            <p className="mt-4 font-body text-[15px] leading-relaxed text-ivory/70">
              {garment.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {garment.occasions.map((o) => (
                <span
                  key={o}
                  className="border border-gold/30 px-3 py-1.5 font-body text-[11px] uppercase tracking-widest2 text-gold"
                >
                  {o}
                </span>
              ))}
            </div>

            <dl className="mt-8 space-y-4 border-t border-ivory/10 pt-6 font-body text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-ivory/45">Fabric</dt>
                <dd className="text-right text-ivory/80">{garment.fabric}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ivory/45">Color</dt>
                <dd className="text-right text-ivory/80">{garment.color}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ivory/45">Sizing</dt>
                <dd className="max-w-[60%] text-right text-ivory/80">{garment.sizing}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ivory/45">Production Time</dt>
                <dd className="text-right text-ivory/80">{garment.productionTime}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ivory/45">Care</dt>
                <dd className="max-w-[60%] text-right text-ivory/80">{garment.care}</dd>
              </div>
            </dl>

            <div className="mt-8 hidden gap-4 sm:flex">
              <a
                href="/bespoke/enquire"
                className="flex-1 border border-gold py-3 text-center font-body text-[13px] uppercase tracking-widest2 text-gold transition-colors duration-300 hover:bg-gold hover:text-void"
              >
                Book Consultation
              </a>
              <a
                href="https://wa.me/2349067983609"
                className="flex items-center justify-center border border-ivory/15 px-6 font-body text-[13px] uppercase tracking-widest2 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
              >
                Chat on WhatsApp
              </a>
            </div>
          </FadeInWhenVisible>
        </div>

        {/* Storytelling */}
        <div className="mt-20 grid gap-10 border-t border-ivory/10 pt-16 sm:grid-cols-3">
          <FadeInWhenVisible>
            <h3 className="font-display text-lg text-gold">The Inspiration</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-ivory/65">
              {garment.inspiration}
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.08}>
            <h3 className="font-display text-lg text-gold">Craftsmanship</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-ivory/65">
              {garment.craftsmanship}
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.16}>
            <h3 className="font-display text-lg text-gold">Styling</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-ivory/65">
              {garment.styling}
            </p>
          </FadeInWhenVisible>
        </div>
      </div>

      <RelatedProducts garment={garment} />
      <StickyMobileCTA />
    </>
  );
}
