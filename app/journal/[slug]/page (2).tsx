import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { STORIES, getStory } from "@/content/stories";
import { COLLECTIONS } from "@/content/collections";
import { CollectionCard } from "@/components/collections/CollectionCard";
import { getGarmentsByCollection } from "@/content/products";
import { ReadingProgress } from "@/components/shared/ReadingProgress";
import { ShareButton } from "@/components/shared/ShareButton";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function generateStaticParams() {
  return STORIES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const story = getStory(params.slug);
  if (!story) return {};
  return { title: story.seo.title, description: story.seo.description };
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = getStory(params.slug);
  if (!story) notFound();

  const related = COLLECTIONS.filter((c) =>
    story.relatedCollectionSlugs.includes(c.slug)
  );

  return (
    <>
      <ReadingProgress />

      <section className="relative flex min-h-[65vh] w-full items-end overflow-hidden bg-void">
        <div className="absolute inset-0">
          <Image
            src={story.heroImage.src}
            alt={story.heroImage.alt}
            fill
            className="object-cover object-top opacity-75"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-void/10" />

        <FadeInWhenVisible className="relative z-10 w-full px-5 pb-14 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="mb-3 block font-body text-[11px] uppercase tracking-widest2 text-gold">
              {story.category} &middot; {story.publishedLabel}
            </span>
            <h1 className="max-w-xl font-display text-3xl leading-tight text-ivory sm:text-5xl">
              {story.title}
            </h1>
            <p className="mt-4 max-w-lg font-body text-[15px] leading-relaxed text-ivory/70">
              {story.subtitle}
            </p>
          </div>
        </FadeInWhenVisible>
      </section>

      <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
        <div className="flex justify-end">
          <ShareButton title={story.title} />
        </div>

        <div className="mt-6 space-y-6 font-body text-[16px] leading-relaxed text-ivory/75">
          {story.body.map((para, i) => (
            <Fragment key={i}>
              <p>{para}</p>
              {i === 1 && (
                <blockquote className="my-10 border-l-2 border-gold py-2 pl-6 font-display text-2xl italic leading-snug text-ivory">
                  &ldquo;{story.pullQuote}&rdquo;
                </blockquote>
              )}
            </Fragment>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <SectionHeading eyebrow="Continue Reading" title="Related collections" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      )}
    </>
  );
}
