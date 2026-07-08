"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useWishlist } from "@/lib/hooks/useWishlist";
import { cn } from "@/lib/utils";

export function WishlistButton({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const { isWishlisted, toggle, hydrated } = useWishlist();
  const active = hydrated && isWishlisted(slug);

  return (
    <motion.button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      whileTap={{ scale: 0.85 }}
      transition={{ duration: 0.15 }}
      aria-pressed={active}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      className={cn(
        "flex h-11 w-11 items-center justify-center border border-ivory/15 bg-void/60 backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
        active && "border-gold/50",
        className
      )}
    >
      <Heart
        className={cn(
          "h-4 w-4 transition-colors",
          active ? "fill-gold text-gold" : "text-ivory/70"
        )}
        strokeWidth={1.4}
      />
    </motion.button>
  );
}
