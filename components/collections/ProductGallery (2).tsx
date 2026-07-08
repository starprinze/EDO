"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { CollectionImage } from "@/content/collections";
import { CollectionPlaceholderArt } from "./CollectionPlaceholderArt";

/**
 * Mobile: native horizontal scroll-snap for swipe (no library needed,
 * works with the OS's own momentum/feel). Desktop: arrow controls.
 * Tap/click any image to open a full-screen zoom lightbox — true
 * pinch-to-zoom would need a gesture library; this ships a
 * click-to-expand zoom instead, which covers the "inspect the fabric
 * closely" need without the extra dependency weight.
 */
export function ProductGallery({
  images,
  placeholderSeed,
  placeholderLabel,
}: {
  images: CollectionImage[];
  placeholderSeed: number;
  placeholderLabel: string;
}) {
  const [active, setActive] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  if (images.length === 0) {
    return (
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <CollectionPlaceholderArt seed={placeholderSeed} label={placeholderLabel} />
      </div>
    );
  }

  return (
    <div>
      {/* Main image / mobile swipe track */}
      <div className="relative">
        <div className="flex snap-x snap-mandatory gap-0 overflow-x-auto scrollbar-hide sm:hidden">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => {
                setActive(i);
                setZoomOpen(true);
              }}
              className="relative aspect-[4/5] w-full shrink-0 snap-center"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="100vw" />
            </button>
          ))}
        </div>

        {/* Desktop: single active image with arrow controls */}
        <div className="relative hidden aspect-[4/5] w-full overflow-hidden sm:block">
          <button
            onClick={() => setZoomOpen(true)}
            className="group relative h-full w-full"
            aria-label="Open zoom view"
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              fill
              className="object-cover transition-transform duration-700 ease-signature group-hover:scale-105"
              sizes="50vw"
              priority
            />
            <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center bg-void/60 text-ivory opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              <ZoomIn className="h-4 w-4" strokeWidth={1.4} />
            </span>
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={() => setActive((a) => (a - 1 + images.length) % images.length)}
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-void/50 text-ivory backdrop-blur-sm transition-colors hover:text-gold"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setActive((a) => (a + 1) % images.length)}
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-void/50 text-ivory backdrop-blur-sm transition-colors hover:text-gold"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-3 hidden gap-3 sm:flex">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              className={`relative h-16 w-14 shrink-0 overflow-hidden border transition-colors ${
                i === active ? "border-gold" : "border-transparent opacity-60"
              }`}
            >
              <Image src={img.src} alt="" fill className="object-cover" sizes="56px" />
            </button>
          ))}
        </div>
      )}

      {/* Swipe dots (mobile) */}
      {images.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5 sm:hidden">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1 w-1 rounded-full ${i === active ? "bg-gold" : "bg-ivory/25"}`}
            />
          ))}
        </div>
      )}

      {/* Zoom lightbox */}
      <AnimatePresence>
        {zoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-void/95 p-4"
            onClick={() => setZoomOpen(false)}
          >
            <button
              onClick={() => setZoomOpen(false)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center text-ivory"
              aria-label="Close zoom view"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              className="relative h-[85vh] w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[active].src}
                alt={images[active].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
