"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

export function ShareButton({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // user cancelled — fall through silently
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — no-op
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`flex h-11 w-11 items-center justify-center border border-ivory/15 bg-void/60 text-ivory/70 backdrop-blur-sm transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${className ?? ""}`}
      aria-label="Share this piece"
    >
      {copied ? (
        <Check className="h-4 w-4 text-gold" strokeWidth={1.4} />
      ) : (
        <Share2 className="h-4 w-4" strokeWidth={1.4} />
      )}
    </button>
  );
}
