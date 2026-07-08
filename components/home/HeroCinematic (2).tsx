"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

/**
 * Signature element: an "aperture ring" — a thin gold circle that
 * opens on load like a lens or a tailor's tape drawing a measurement.
 * It's a direct callback to the ring already surrounding the "ED"
 * monogram in the E.D.O mark, rather than a stock reveal effect.
 */
function ApertureRing() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 sm:h-[85%] sm:w-[85%]"
      aria-hidden
    >
      <motion.circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="#C9A24B"
        strokeWidth="0.6"
        strokeDasharray="578"
        initial={{ strokeDashoffset: 578, opacity: 0 }}
        animate={{ strokeDashoffset: 0, opacity: 0.55 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
    </svg>
  );
}

export function HeroCinematic() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : ["0%", "18%"]
  );

  // Subtle desktop-only mouse parallax — a couple of px of drift, not a gimmick.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], reduced ? [0, 0] : [-10, 10]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], reduced ? [0, 0] : [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-void"
    >
      <motion.div
        style={{ y: imageY, x: parallaxX, translateY: parallaxY }}
        className="absolute inset-0 hidden sm:block"
      >
        <Image
          src="/brand/hero-kaftan.jpg"
          alt="Hand-embroidered bespoke kaftan by E.D.O Concepts"
          fill
          priority
          className="object-cover object-top opacity-90 scale-105"
          sizes="100vw"
        />
      </motion.div>
      <motion.div style={{ y: imageY }} className="absolute inset-0 sm:hidden">
        <Image
          src="/brand/hero-kaftan.jpg"
          alt="Hand-embroidered bespoke kaftan by E.D.O Concepts"
          fill
          priority
          className="object-cover object-top opacity-90"
          sizes="100vw"
        />
      </motion.div>

      {/* Scrims for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-void/10" />
      <div className="absolute inset-0 bg-royal-glow" />

      <ApertureRing />

      <div className="relative z-10 w-full px-5 pb-14 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 block font-body text-[11px] uppercase tracking-widest2 text-gold"
          >
            Bespoke Menswear — Benin City
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl font-display text-[2.6rem] leading-[1.05] text-ivory sm:text-6xl"
          >
            Crafted Beyond Fashion.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-md font-body text-base leading-relaxed text-ivory/70"
          >
            Modern bespoke menswear designed for gentlemen who appreciate
            craftsmanship, confidence, and timeless elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <a
              href="/bespoke/enquire"
              className="border border-gold px-7 py-3 font-body text-[13px] uppercase tracking-widest2 text-gold transition-colors duration-300 hover:bg-gold hover:text-void"
            >
              Book Consultation
            </a>
            <a
              href="/collections"
              className="font-body text-[13px] uppercase tracking-widest2 text-ivory/70 underline underline-offset-4 transition-colors hover:text-gold"
            >
              Explore Collections
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mx-auto mt-14 hidden w-fit flex-col items-center gap-2 sm:flex"
          aria-hidden
        >
          <span className="h-9 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent" />
          <span className="font-body text-[10px] uppercase tracking-widest2 text-ivory/40">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
