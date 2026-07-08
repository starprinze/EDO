"use client";

import { Gem, Scissors, Layers, Target } from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

const ITEMS = [
  { icon: Gem, label: "Premium Craftsmanship" },
  { icon: Scissors, label: "Bespoke Tailoring" },
  { icon: Layers, label: "Quality Fabrics" },
  { icon: Target, label: "Made With Precision" },
];

export function TrustBar() {
  return (
    <div className="border-y border-ivory/10 bg-charcoal/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 sm:grid-cols-4 sm:gap-y-0 sm:px-8 sm:py-8">
        {ITEMS.map((item, i) => (
          <FadeInWhenVisible
            key={item.label}
            delay={i * 0.08}
            className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-3 sm:text-left"
          >
            <item.icon
              strokeWidth={1.25}
              className="h-6 w-6 shrink-0 text-gold"
              aria-hidden
            />
            <span className="font-body text-[11px] uppercase tracking-widest2 text-ivory/70">
              {item.label}
            </span>
          </FadeInWhenVisible>
        ))}
      </div>
    </div>
  );
}
