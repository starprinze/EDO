"use client";

import { motion } from "framer-motion";

/**
 * Next.js shows this automatically during route/data suspense.
 * Reuses the aperture-ring signature motif instead of a generic
 * spinner — the loading moment becomes another brand touchpoint.
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-void">
      <svg viewBox="0 0 200 200" className="h-16 w-16" aria-hidden>
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#C9A24B"
          strokeWidth="1"
          strokeDasharray="565"
          initial={{ strokeDashoffset: 565, rotate: -90 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0.3,
          }}
          style={{ transformOrigin: "100px 100px" }}
        />
        <motion.text
          x="100"
          y="112"
          textAnchor="middle"
          fontFamily="Fraunces, serif"
          fontSize="34"
          fill="#F3EEE4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          ED
        </motion.text>
      </svg>
      <span className="font-body text-[10px] uppercase tracking-widest2 text-ivory/40">
        E.D.O Concepts
      </span>
    </div>
  );
}
