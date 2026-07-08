import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOOKBOOKS, getLookbook } from "@/content/lookbooks";
import { LookbookViewer } from "@/components/collections/LookbookViewer";

export function generateStaticParams() {
  return LOOKBOOKS.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const lookbook = getLookbook(params.slug);
  if (!lookbook) return {};
  return { title: `${lookbook.title} | E.D.O Concepts` };
}

export default function LookbookPage({ params }: { params: { slug: string } }) {
  const lookbook = getLookbook(params.slug);
  if (!lookbook) notFound();

  return <LookbookViewer lookbook={lookbook} />;
}
