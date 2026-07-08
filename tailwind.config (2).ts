import type { Config } from "tailwindcss";

// E.D.O Concepts design tokens — derived from the brand mark's
// black / royal purple / metallic gold palette. Named, not generic.
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0908",        // primary background, near-black with warmth (not pure #000)
        charcoal: "#17151B",    // raised surfaces, cards
        royal: "#2E1A47",       // deep royal purple, gradient base
        amaranth: "#7B2FA0",    // purple glow / diagonal light-streak accent
        gold: "#C9A24B",        // metallic gold, matches monogram
        champagne: "#E8D9B5",   // light gold for hover/highlight states
        ivory: "#F3EEE4",       // body copy on dark surfaces
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      backgroundImage: {
        "royal-glow":
          "radial-gradient(120% 90% at 15% 0%, rgba(123,47,160,0.35) 0%, rgba(46,26,71,0.18) 35%, rgba(10,9,8,0) 65%)",
        "gold-hairline":
          "linear-gradient(90deg, rgba(201,162,75,0) 0%, rgba(201,162,75,0.6) 50%, rgba(201,162,75,0) 100%)",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
