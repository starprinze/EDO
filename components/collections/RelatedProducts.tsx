import { Garment, getRelatedGarments } from "@/content/products";
import { GarmentCard } from "./GarmentCard";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function RelatedProducts({ garment }: { garment: Garment }) {
  const related = getRelatedGarments(garment, 3);
  if (related.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading eyebrow="You May Also Like" title="Related pieces" />
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((g, i) => (
          <GarmentCard key={g.slug} garment={g} delay={i * 0.06} />
        ))}
      </div>
    </section>
  );
}
