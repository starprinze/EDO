import { getRelatedCollections, getCollection } from "@/content/collections";
import { getGarmentsByCollection } from "@/content/products";
import { CollectionCard } from "./CollectionCard";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function RelatedCollections({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedCollections(currentSlug, 3);
  if (related.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading eyebrow="Continue Browsing" title="Related collections" />
      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {related.map((c, i) => (
          <CollectionCard
            key={c.slug}
            collection={c}
            pieceCount={getGarmentsByCollection(c.slug).length}
            delay={i * 0.06}
          />
        ))}
      </div>
    </section>
  );
}
