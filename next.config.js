/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` now produces a plain `out/` folder —
  // HTML, CSS, JS, and images, no server required. This is a good fit
  // today because nothing in the app uses API routes, Server Actions,
  // or middleware yet — everything is content-manifest-driven or
  // client-side (wishlist via localStorage, forms are UI-only so far).
  //
  // If Phase 4 (Supabase + admin dashboard) later adds real Server
  // Actions or API routes, remove this line and Netlify's Next.js
  // Runtime will automatically switch to serverless/edge functions —
  // no other changes needed.
  output: "export",

  images: {
    // Static export has no server to run Next's image optimization
    // API through, so images are served as-is (no automatic
    // resize/format negotiation). Fine for now since every image is
    // already pre-sized/compressed on the way in.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
