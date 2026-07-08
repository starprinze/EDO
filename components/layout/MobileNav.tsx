"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

type Link_ = { href: string; label: string };

export function MobileNav({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: Link_[];
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[60] flex flex-col bg-void"
        >
          <div className="flex h-16 items-center justify-end px-5">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center text-2xl text-ivory"
            >
              &times;
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block border-b border-ivory/10 py-5 font-display text-3xl text-ivory"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * links.length, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6"
            >
              <Link
                href="/bespoke/enquire"
                onClick={onClose}
                className="inline-block w-full border border-gold py-4 text-center font-body text-sm uppercase tracking-widest2 text-gold"
              >
                Begin Your Bespoke Journey
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
