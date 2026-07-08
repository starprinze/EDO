/**
 * PLACEHOLDER CONTENT — same honesty rule as before: these are
 * structural samples (no invented named clients presented as real),
 * now shaped to the fuller "luxury client story" model requested.
 * Replace with real client stories (photos only with consent) before
 * launch — see README.
 */

export type Testimonial = {
  id: string;
  initials: string;
  occasion: string;
  garmentWorn: string;
  quote: string;
  experience: string;
  portrait?: { src: string; alt: string };
  gallery?: { src: string; alt: string }[];
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    initials: "A.O",
    occasion: "Wedding — Groom",
    garmentWorn: "Diamond Embroidery Kaftan",
    quote:
      "The fit was exact. I didn't adjust anything on the day — it just worked, from the shoulders down.",
    experience:
      "Booked a consultation six weeks out, fitted twice, and the piece was ready four days before the wedding — enough room to breathe.",
  },
  {
    id: "t2",
    initials: "K.E",
    occasion: "Executive — Everyday",
    garmentWorn: "Checkered Senator Set",
    quote:
      "First bespoke piece I've owned that actually felt tailored to me, not just my size.",
    experience:
      "Wears it between board meetings and dinners — asked for something that could do both without changing.",
  },
  {
    id: "t3",
    initials: "M.I",
    occasion: "Owambe — Group",
    garmentWorn: "Aso-Ebi Coordination",
    quote:
      "Coordinated our entire group's outfits without anything feeling identical or flat.",
    experience:
      "Organized fittings for eight people across two sessions — every piece read as one story, not one uniform.",
  },
];
