import { HeroCinematic } from "@/components/home/HeroCinematic";
import { TrustBar } from "@/components/home/TrustBar";
import { BrandStory } from "@/components/home/BrandStory";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { WhyEDO } from "@/components/home/WhyEDO";
import { CraftsmanshipJourney } from "@/components/home/CraftsmanshipJourney";
import { FeaturedLook } from "@/components/home/FeaturedLook";
import { Testimonials } from "@/components/home/Testimonials";
import { FashionJournal } from "@/components/home/FashionJournal";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroCinematic />
      <TrustBar />
      <BrandStory />
      <FeaturedCollections />
      <WhyEDO />
      <CraftsmanshipJourney />
      <FeaturedLook />
      <Testimonials />
      <FashionJournal />
      <FinalCTA />
    </>
  );
}
