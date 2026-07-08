"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Garment } from "@/content/products";
import { GarmentCard } from "./GarmentCard";

export function ProductGrid({ garments }: { garments: Garment[] }) {
  const [query, setQuery] = useState("");
  const [occasion, setOccasion] = useState<string>("all");

  const occasions = useMemo(
    () => Array.from(new Set(garments.flatMap((g) => g.occasions))).sort(),
    [garments]
  );

  const results = useMemo(() => {
    return garments.filter((g) => {
      const matchesQuery = `${g.title} ${g.description}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesOccasion = occasion === "all" || g.occasions.includes(occasion);
      return matchesQuery && matchesOccasion;
    });
  }, [garments, query, occasion]);

  if (garments.length === 0) {
    return (
      <p className="py-16 text-center font-body text-sm text-ivory/50">
        Pieces for this collection are being finalized — check back soon, or
        book a consultation to discuss a custom commission now.
      </p>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ivory/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search this collection..."
            className="w-full border border-ivory/15 bg-transparent py-2.5 pl-10 pr-4 font-body text-sm text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none"
          />
        </div>

        {occasions.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setOccasion("all")}
              className={`shrink-0 whitespace-nowrap border px-4 py-2 font-body text-[11px] uppercase tracking-widest2 transition-colors ${
                occasion === "all"
                  ? "border-gold text-gold"
                  : "border-ivory/15 text-ivory/60 hover:border-ivory/30"
              }`}
            >
              All Occasions
            </button>
            {occasions.map((o) => (
              <button
                key={o}
                onClick={() => setOccasion(o)}
                className={`shrink-0 whitespace-nowrap border px-4 py-2 font-body text-[11px] uppercase tracking-widest2 transition-colors ${
                  occasion === o
                    ? "border-gold text-gold"
                    : "border-ivory/15 text-ivory/60 hover:border-ivory/30"
                }`}
              >
                {o}
              </button>
            ))}
          </div>
        )}
      </div>

      {results.length === 0 ? (
        <p className="mt-16 text-center font-body text-sm text-ivory/50">
          No pieces match your search.
        </p>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((g, i) => (
            <GarmentCard key={g.slug} garment={g} delay={i * 0.06} />
          ))}
        </div>
      )}
    </div>
  );
}
