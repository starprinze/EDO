import { SectionHeading } from "@/components/shared/SectionHeading";
import { CollectionCard } from "@/components/collections/CollectionCard";
import { COLLECTIONS } from "@/content/collections";
import { getGarmentsByCollection } from "@/content/products";

// Homepage features 4 — prioritize collections that already have real
// photography. Falls back to the next collections in the manifest if
// fewer than 4 have images yet.
const withPhotos = COLLECTIONS.filter((c) => c.images.length > 0);
const withoutPhotos = COLLECTIONS.filter((c) => c.images.length === 0);
const FEATURED = [...withPhotos, ...withoutPhotos].slice(0, 4);

export function FeaturedCollections() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow="Curated" title="Featured collections" />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURED.map((c, i) => (
          <CollectionCard
            key={c.slug}
            collection={c}
            pieceCount={getGarmentsByCollection(c.slug).length}
            delay={i * 0.08}
          />
        ))}
      </div>
    </section>
  );
}
