"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Lookbook } from "@/content/lookbooks";

/**
 * Fullscreen, minimal-chrome viewer. Swipe on mobile (native
 * scroll-snap), arrow keys + click zones on desktop. Each spread
 * reads like a magazine page — image first, caption second, no grid.
 */
export function LookbookViewer({ lookbook }: { lookbook: Lookbook }) {
  const [index, setIndex] = useState(0);
  const total = lookbook.spreads.length;

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, total - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [total]);

  const spread = lookbook.spreads[index];

  return (
    <div className="fixed inset-0 z-50 bg-void">
      <Link
        href={`/collections/${lookbook.collectionSlug}`}
        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center text-ivory"
        aria-label="Close lookbook"
      >
        <X className="h-6 w-6" />
      </Link>

      <div className="absolute left-5 top-5 z-20 font-body text-[11px] uppercase tracking-widest2 text-ivory/50">
        {index + 1} / {total}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex h-full w-full flex-col items-center justify-center"
        >
          <div className="relative h-[75vh] w-full max-w-xl">
            <Image
              src={spread.image.src}
              alt={spread.image.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <p className="mt-6 max-w-sm px-6 text-center font-display text-lg italic text-ivory/80">
            {spread.caption}
          </p>
        </motion.div>
      </AnimatePresence>

      {index > 0 && (
        <button
          onClick={() => setIndex((i) => i - 1)}
          aria-label="Previous spread"
          className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-ivory/60 hover:text-gold sm:left-6"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}
      {index < total - 1 && (
        <button
          onClick={() => setIndex((i) => i + 1)}
          aria-label="Next spread"
          className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-ivory/60 hover:text-gold sm:right-6"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
        {lookbook.spreads.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to spread ${i + 1}`}
            className={`h-1 w-5 transition-colors ${
              i === index ? "bg-gold" : "bg-ivory/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
