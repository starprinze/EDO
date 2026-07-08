import type { Metadata } from "next";
import { CollectionsHero } from "@/components/collections/CollectionsHero";
import { CollectionsExplorer } from "@/components/collections/CollectionsExplorer";
import { FeaturedCollectionBanner } from "@/components/collections/FeaturedCollectionBanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { COLLECTIONS } from "@/content/collections";

export const metadata: Metadata = {
  title: "Collections | E.D.O Concepts",
  description:
    "Browse the full E.D.O Concepts archive — Kaftan, Senator, Agbada, Native Wear, Wedding, and more. Every piece begins with a consultation.",
};

export default function CollectionsPage() {
  const featured = COLLECTIONS.find((c) => c.slug === "signature-native") ?? COLLECTIONS[0];

  return (
    <>
      <CollectionsHero />

      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
        <p className="font-body text-[15px] leading-relaxed text-ivory/70">
          Each collection is a chapter, not a category — built around an
          occasion, a fabric story, or a silhouette we keep returning to.
          Browse freely; every piece here is a starting point for a
          conversation, not a checkout.
        </p>
      </section>

      <div className="py-8">
        <FeaturedCollectionBanner collection={featured} />
      </div>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading eyebrow="The Archive" title="All collections" />
        <div className="mt-10">
          <CollectionsExplorer />
        </div>
      </section>
    </>
  );
}
