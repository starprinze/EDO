"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TESTIMONIALS } from "@/content/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[index];

  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow="Testimonials" title="In their words" align="center" />

      <div
        className="relative mt-14 flex items-center gap-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
      >
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="hidden h-10 w-10 shrink-0 items-center justify-center border border-ivory/15 text-ivory/60 transition-colors hover:border-gold hover:text-gold sm:flex"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="relative min-h-[220px] flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex touch-pan-y cursor-grab flex-col items-center text-center active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
            >
              <p className="font-display text-xl leading-relaxed text-ivory sm:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 font-body text-xs text-gold">
                  {current.initials}
                </span>
                <span className="flex flex-col">
                  <span className="font-body text-[13px] uppercase tracking-widest2 text-ivory/50">
                    {current.occasion}
                  </span>
                  <span className="font-body text-[11px] text-ivory/35">
                    Wore the {current.garmentWorn}
                  </span>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="hidden h-10 w-10 shrink-0 items-center justify-center border border-ivory/15 text-ivory/60 transition-colors hover:border-gold hover:text-gold sm:flex"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? "bg-gold" : "bg-ivory/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
