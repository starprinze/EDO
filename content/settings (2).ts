/**
 * Site-wide config — brand name, contact details, social handles.
 * Pulled from the actual E.D.O Concepts brand collateral supplied.
 * Change once here rather than hunting through components.
 */
export const SITE_SETTINGS = {
  brandName: "E.D.O Concepts",
  founderName: "Edogun Destiny Osaigbovo",
  tagline: "Premium bespoke menswear",
  foundedYear: 2024,
  contact: {
    phone: "+234 705 591 5954",
    phoneHref: "tel:+2347055915954",
    whatsapp: "0906 798 3609",
    whatsappHref: "https://wa.me/2349067983609",
    email: "edogundestiny22@gmail.com",
    address: "Boundary Junction, Ekosodin, Uniben, Benin-City",
  },
  social: {
    instagram: "@e.d.o_casual",
    instagramHref: "#",
    tiktok: "e.d.o_1",
    tiktokHref: "#",
  },
  seo: {
    defaultTitle: "E.D.O Concepts | Premium Bespoke Menswear",
    defaultDescription:
      "Modern bespoke menswear designed for gentlemen who appreciate craftsmanship, confidence, and timeless elegance. Benin City.",
  },
} as const;
