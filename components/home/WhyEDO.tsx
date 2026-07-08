import { Ruler, Layers2, PersonStanding, Sparkle } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

const FEATURES = [
  {
    icon: Ruler,
    title: "Precision Tailoring",
    description:
      "Every seam measured twice, cut once — cloth engineered to your exact frame, not the nearest size.",
  },
  {
    icon: Layers2,
    title: "Premium Fabrics",
    description:
      "Sourced for how they drape, breathe, and hold their shape long after the first wear.",
  },
  {
    icon: PersonStanding,
    title: "Personalized Fit",
    description:
      "A fitting process built around your posture and movement, not a mannequin's.",
  },
  {
    icon: Sparkle,
    title: "Attention to Detail",
    description:
      "Hand-finished stitching and embroidery — the difference felt in the last five percent.",
  },
];

export function WhyEDO() {
  return (
    <section className="bg-charcoal/30 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why E.D.O"
          title="What excellence is built from"
        />

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <FadeInWhenVisible key={f.title} delay={i * 0.08} className="flex gap-5">
              <f.icon
                strokeWidth={1.1}
                className="h-8 w-8 shrink-0 text-gold"
                aria-hidden
              />
              <div>
                <h3 className="font-display text-lg text-ivory">
                  {f.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ivory/60">
                  {f.description}
                </p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
