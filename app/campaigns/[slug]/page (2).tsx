import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CAMPAIGNS, getCampaign } from "@/content/campaigns";
import { GARMENTS } from "@/content/products";
import { GarmentCard } from "@/components/collections/GarmentCard";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function generateStaticParams() {
  return CAMPAIGNS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const campaign = getCampaign(params.slug);
  if (!campaign) return {};
  return { title: `${campaign.title} | E.D.O Concepts` };
}

export default function CampaignPage({ params }: { params: { slug: string } }) {
  const campaign = getCampaign(params.slug);
  if (!campaign) notFound();

  const featured = GARMENTS.filter((g) =>
    campaign.featuredGarmentSlugs.includes(g.slug)
  );

  return (
    <>
      <section className="relative flex min-h-[85vh] w-full items-end overflow-hidden bg-void">
        <div className="absolute inset-0">
          <Image
            src={campaign.heroImage.src}
            alt={campaign.heroImage.alt}
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-void/10" />

        <FadeInWhenVisible className="relative z-10 w-full px-5 pb-16 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 block font-body text-[11px] uppercase tracking-widest2 text-gold">
              Campaign
            </span>
            <h1 className="font-display text-4xl leading-tight text-ivory sm:text-6xl">
              {campaign.title}
            </h1>
            <p className="mx-auto mt-4 max-w-lg font-body text-[15px] leading-relaxed text-ivory/70">
              {campaign.tagline}
            </p>
          </div>
        </FadeInWhenVisible>
      </section>

      <section className="mx-auto max-w-2xl px-5 py-16 text-center sm:px-8">
        <p className="font-body text-[15px] leading-relaxed text-ivory/70">
          {campaign.story}
        </p>
      </section>

      {featured.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <SectionHeading eyebrow="Featured In This Campaign" title="The pieces" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((g, i) => (
              <GarmentCard key={g.slug} garment={g} delay={i * 0.08} />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
        <SectionHeading eyebrow="Credits" title="Behind the campaign" align="center" />
        <ul className="mt-8 space-y-3 text-center">
          {campaign.credits.map((c) => (
            <li key={c.role} className="font-body text-sm text-ivory/70">
              <span className="text-ivory/40">{c.role}</span> — {c.name}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
