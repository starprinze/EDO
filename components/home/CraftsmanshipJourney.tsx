"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/shared/SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "Consultation",
    description: "We listen first — occasion, style, budget, timeline.",
  },
  {
    n: "02",
    title: "Measurements",
    description: "Precise, full-body measurement, recorded to your profile.",
  },
  {
    n: "03",
    title: "Craftsmanship",
    description: "Fabric cut and hand-finished by our tailoring team.",
  },
  {
    n: "04",
    title: "Fitting",
    description: "A guided fitting session, adjusted until it's right.",
  },
  {
    n: "05",
    title: "Delivery",
    description: "Your finished piece, pressed, packaged, and delivered.",
  },
];

export function CraftsmanshipJourney() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(".journey-step");

      steps.forEach((step) => {
        const line = step.querySelector(".journey-line");

        if (prefersReduced) {
          gsap.set(step, { opacity: 1, y: 0 });
          return;
        }

        gsap.fromTo(
          step,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 82%",
            },
          }
        );

        if (line) {
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              duration: 0.7,
              ease: "power2.out",
              transformOrigin: "top",
              scrollTrigger: {
                trigger: step,
                start: "top 82%",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="The Process"
        title="The craftsmanship journey"
        align="center"
      />

      <div ref={containerRef} className="mt-16">
        {STEPS.map((step, i) => (
          <div key={step.n} className="journey-step relative flex gap-6 pb-14 last:pb-0">
            <div className="flex flex-col items-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/50 font-display text-sm text-gold">
                {step.n}
              </span>
              {i < STEPS.length - 1 && (
                <span className="journey-line mt-2 w-px flex-1 bg-gold/30" />
              )}
            </div>
            <div className="pt-2">
              <h3 className="font-display text-xl text-ivory">
                {step.title}
              </h3>
              <p className="mt-1 max-w-sm font-body text-sm leading-relaxed text-ivory/60">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
