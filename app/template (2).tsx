"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * template.tsx re-mounts on every route change (unlike layout.tsx),
 * making it the right place for enter/exit page transitions in the
 * App Router. Kept to a soft 400ms dissolve — long enough to read as
 * intentional, short enough to never feel like a delay.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
