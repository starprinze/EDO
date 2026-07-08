"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";
import { CollectionPlaceholderArt } from "@/components/collections/CollectionPlaceholderArt";

/**
 * The image-replacement system, in practice:
 *
 * Every place in the site that shows a photo goes through this
 * component instead of raw `next/image`. Give it a `src` that follows
 * the real asset convention (e.g. /images/collections/signature-native/
 * native-brown-01.webp) even before the file exists.
 *
 * - File doesn't exist yet → onError fires → falls back to the brand's
 *   placeholder art pattern, labeled with `fallbackLabel`. No broken
 *   image icon, no layout shift.
 * - File gets uploaded later to that exact path → next deploy, the
 *   real photo just renders. Nobody touches a component or a content
 *   file — the content manifest already pointed at that path.
 *
 * Also handles: blur-up placeholder, fade-in on load, and responsive
 * `sizes` — the "image management" requirements from the content
 * infrastructure brief, all through next/image's built-in optimizer
 * (which already serves WebP/AVIF automatically when deployed — no
 * extra pipeline needed for that part).
 */

const SHIMMER_BLUR =
  "data:image/svg+xml;base64," +
  (typeof btoa !== "undefined"
    ? btoa(
        `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="10"><rect width="8" height="10" fill="#17151B"/></svg>`
      )
    : "");

export function EdoImage({
  fallbackSeed = 1,
  fallbackLabel = "Photography coming soon",
  className,
  alt,
  ...props
}: ImageProps & { fallbackSeed?: number; fallbackLabel?: string }) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (errored || !props.src) {
    return (
      <div className="relative h-full w-full">
        <CollectionPlaceholderArt seed={fallbackSeed} label={fallbackLabel} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-full w-full"
    >
      <Image
        {...props}
        alt={alt}
        className={className}
        placeholder="blur"
        blurDataURL={SHIMMER_BLUR}
        onError={() => setErrored(true)}
        onLoad={() => setLoaded(true)}
      />
    </motion.div>
  );
}
