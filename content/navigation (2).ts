export type NavLink = { href: string; label: string };

export const PRIMARY_NAV: NavLink[] = [
  { href: "/collections", label: "Collections" },
  { href: "/bespoke", label: "Bespoke" },
  { href: "/about", label: "About" },
  { href: "/philosophy", label: "Philosophy" },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/bespoke", label: "Bespoke Process" },
  { href: "/bespoke/enquire", label: "Book Consultation" },
];
