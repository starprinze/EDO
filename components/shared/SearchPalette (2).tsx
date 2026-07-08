"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { COLLECTIONS } from "@/content/collections";
import { GARMENTS } from "@/content/products";
import { STORIES } from "@/content/stories";
import { LOOKBOOKS } from "@/content/lookbooks";
import { CAMPAIGNS } from "@/content/campaigns";

type Result = {
  type: string;
  title: string;
  subtitle: string;
  href: string;
};

function buildIndex(): Result[] {
  return [
    ...COLLECTIONS.map((c) => ({
      type: "Collection",
      title: c.title,
      subtitle: c.description,
      href: `/collections/${c.slug}`,
    })),
    ...GARMENTS.map((g) => ({
      type: "Product",
      title: g.title,
      subtitle: g.description,
      href: `/collections/${g.collectionSlug}/${g.slug}`,
    })),
    ...STORIES.map((s) => ({
      type: "Story",
      title: s.title,
      subtitle: s.excerpt,
      href: `/journal/${s.slug}`,
    })),
    ...LOOKBOOKS.map((l) => ({
      type: "Lookbook",
      title: l.title,
      subtitle: l.season,
      href: `/lookbook/${l.slug}`,
    })),
    ...CAMPAIGNS.map((c) => ({
      type: "Campaign",
      title: c.title,
      subtitle: c.tagline,
      href: `/campaigns/${c.slug}`,
    })),
  ];
}

const INDEX = buildIndex();

export function SearchPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => {
    if (!query.trim()) return INDEX.slice(0, 6);
    const q = query.toLowerCase();
    return INDEX.filter(
      (r) => r.title.toLowerCase().includes(q) || r.subtitle.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="flex h-10 w-10 items-center justify-center text-ivory/70 transition-colors hover:text-gold"
      >
        <Search className="h-4 w-4" strokeWidth={1.4} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-start justify-center bg-void/90 px-4 pt-[12vh] backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-lg border border-ivory/10 bg-charcoal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-ivory/10 px-4">
                <Search className="h-4 w-4 shrink-0 text-ivory/40" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search collections, products, stories..."
                  className="w-full bg-transparent py-4 font-body text-sm text-ivory placeholder:text-ivory/30 focus:outline-none"
                />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close search"
                  className="shrink-0 text-ivory/40 hover:text-ivory"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[50vh] overflow-y-auto py-2">
                {results.length === 0 ? (
                  <p className="px-4 py-8 text-center font-body text-sm text-ivory/40">
                    No results for &ldquo;{query}&rdquo;.
                  </p>
                ) : (
                  results.map((r) => (
                    <button
                      key={r.href}
                      onClick={() => go(r.href)}
                      className="flex w-full flex-col items-start gap-0.5 px-4 py-3 text-left transition-colors hover:bg-void/50"
                    >
                      <span className="font-body text-[10px] uppercase tracking-widest2 text-gold/70">
                        {r.type}
                      </span>
                      <span className="font-display text-[15px] text-ivory">{r.title}</span>
                      <span className="line-clamp-1 font-body text-xs text-ivory/45">
                        {r.subtitle}
                      </span>
                    </button>
                  ))
                )}
              </div>

              <div className="hidden items-center justify-end gap-1.5 border-t border-ivory/10 px-4 py-2 font-body text-[10px] uppercase tracking-widest2 text-ivory/30 sm:flex">
                <kbd className="border border-ivory/15 px-1.5 py-0.5">Esc</kbd>
                to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
