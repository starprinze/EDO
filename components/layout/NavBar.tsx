"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "./MobileNav";
import { SearchPalette } from "@/components/shared/SearchPalette";

import { PRIMARY_NAV as LINKS } from "@/content/navigation";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-signature ${
          scrolled ? "bg-void/90 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
          <Link href="/" className="flex items-center gap-2" aria-label="E.D.O Concepts home">
            <Image
              src="/brand/logo-mark.png"
              alt=""
              width={36}
              height={36}
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
              priority
            />
            <span className="font-display text-lg tracking-wide text-ivory">
              E.D.O
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => {
              const active = pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-body text-[13px] uppercase tracking-widest2 transition-colors ${
                    active ? "text-gold" : "text-ivory/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/bespoke/enquire"
              className="rounded-none border border-gold/60 px-5 py-2 font-body text-[13px] uppercase tracking-widest2 text-gold transition-colors hover:bg-gold hover:text-void"
            >
              Enquire
            </Link>
            <SearchPalette />
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <SearchPalette />
            <button
              onClick={() => setNavOpen(true)}
              className="flex h-11 w-11 items-center justify-center"
              aria-label="Open menu"
            >
              <span className="relative block h-4 w-6">
                <span className="absolute left-0 top-0 h-px w-6 bg-ivory" />
                <span className="absolute left-0 top-[7px] h-px w-6 bg-ivory" />
                <span className="absolute left-0 top-[14px] h-px w-6 bg-ivory" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={navOpen}
        onClose={() => setNavOpen(false)}
        links={LINKS}
      />
    </>
  );
}
