"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { COLLECTIONS } from "@/content/collections";
import { getGarmentsByCollection } from "@/content/products";
import { CollectionCard } from "./CollectionCard";

type SortMode = "featured" | "newest" | "name";

/**
 * Client component: owns search/filter/sort state and renders the
 * grid directly, so the results update smoothly without a route
 * change or full-page reload.
 */
export function CollectionsExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | "photographed" | "coming-soon">("all");
  const [sort, setSort] = useState<SortMode>("featured");

  const results = useMemo(() => {
    let list = COLLECTIONS.filter((c) =>
      `${c.title} ${c.description}`.toLowerCase().includes(query.toLowerCase())
    );

    if (category === "photographed") {
      list = list.filter((c) => c.images.length > 0);
    } else if (category === "coming-soon") {
      list = list.filter((c) => c.images.length === 0);
    }

    if (sort === "name") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "newest") {
      list = [...list].slice().reverse();
    }
    // "featured" = manifest order, already curated

    return list;
  }, [query, category, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ivory/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search collections..."
            className="w-full border border-ivory/15 bg-transparent py-2.5 pl-10 pr-4 font-body text-sm text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto">
          {(
            [
              ["all", "All"],
              ["photographed", "Photographed"],
              ["coming-soon", "Coming Soon"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              onClick={() => setCategory(value)}
              className={`shrink-0 whitespace-nowrap border px-4 py-2 font-body text-[11px] uppercase tracking-widest2 transition-colors ${
                category === value
                  ? "border-gold text-gold"
                  : "border-ivory/15 text-ivory/60 hover:border-ivory/30"
              }`}
            >
              {label}
            </button>
          ))}

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortMode)}
            className="shrink-0 border border-ivory/15 bg-void px-3 py-2 font-body text-[11px] uppercase tracking-widest2 text-ivory/60 focus:border-gold focus:outline-none"
            aria-label="Sort collections"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="name">Name A–Z</option>
          </select>
        </div>
      </div>

      {results.length === 0 ? (
        <p className="mt-16 text-center font-body text-sm text-ivory/50">
          No collections match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((c, i) => (
            <CollectionCard
              key={c.slug}
              collection={c}
              pieceCount={getGarmentsByCollection(c.slug).length}
              delay={i * 0.05}
            />
          ))}
        </div>
      )}
    </div>
  );
}
