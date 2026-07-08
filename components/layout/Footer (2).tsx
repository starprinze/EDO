"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Loader2, Instagram, Facebook } from "lucide-react";
import { FOOTER_QUICK_LINKS } from "@/content/navigation";
import { SITE_SETTINGS } from "@/content/settings";

const COLLECTIONS = [
  { href: "/collections/signature-native", label: "Signature Native" },
  { href: "/collections/contemporary-senator", label: "Contemporary Senator" },
  { href: "/collections/creative-street", label: "Creative Street" },
  { href: "/collections/editorial", label: "Editorial" },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      // TODO: wire to a Supabase `subscribers` table via a server action
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="border-t border-ivory/10 bg-void px-5 pb-10 pt-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/brand/logo-mark.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="font-display text-2xl text-ivory">E.D.O</span>
            </div>
            <p className="mt-1 font-body text-[11px] uppercase tracking-widest2 text-gold/70">
              Concepts
            </p>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-ivory/60">
              Premium bespoke menswear, engineered with precision cuts and
              flawless finishing for those who demand excellence.
            </p>
          </div>

          <div className="font-body text-sm text-ivory/70">
            <p className="mb-3 uppercase tracking-widest2 text-[11px] text-gold/70">
              Quick Links
            </p>
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="font-body text-sm text-ivory/70">
            <p className="mb-3 uppercase tracking-widest2 text-[11px] text-gold/70">
              Collections
            </p>
            <ul className="space-y-2">
              {COLLECTIONS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="font-body text-sm text-ivory/70">
            <p className="mb-3 uppercase tracking-widest2 text-[11px] text-gold/70">
              Stay in Touch
            </p>
            <p>
              <a href={SITE_SETTINGS.contact.phoneHref} className="hover:text-gold">
                {SITE_SETTINGS.contact.phone}
              </a>
            </p>
            <p>
              <a href={SITE_SETTINGS.contact.whatsappHref} className="hover:text-gold">
                WhatsApp: {SITE_SETTINGS.contact.whatsapp}
              </a>
            </p>
            <p className="mt-2">
              <a
                href={`mailto:${SITE_SETTINGS.contact.email}`}
                className="hover:text-gold"
              >
                {SITE_SETTINGS.contact.email}
              </a>
            </p>
            <p className="mt-2 text-ivory/50">{SITE_SETTINGS.contact.address}</p>

            <form onSubmit={handleSubmit} className="mt-5">
              <p className="mb-2 font-body text-[11px] uppercase tracking-widest2 text-gold/70">
                Newsletter
              </p>
              {status === "success" ? (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-body text-sm text-gold"
                >
                  You&apos;re on the list.
                </motion.p>
              ) : (
                <>
                  <div
                    className={`flex border-b transition-colors duration-300 ${
                      status === "error"
                        ? "border-red-400/60"
                        : "border-ivory/20 focus-within:border-gold"
                    }`}
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="Your email"
                      aria-invalid={status === "error"}
                      className="w-full bg-transparent py-2 font-body text-sm text-ivory placeholder:text-ivory/30 focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="flex shrink-0 items-center gap-1.5 font-body text-[11px] uppercase tracking-widest2 text-gold transition-opacity disabled:opacity-50"
                    >
                      {status === "loading" && (
                        <Loader2 className="h-3 w-3 animate-spin" aria-hidden />
                      )}
                      Join
                    </button>
                  </div>
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-1.5 font-body text-xs text-red-400"
                    >
                      Enter a valid email address.
                    </motion.p>
                  )}
                </>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-ivory/10 pt-6 sm:flex-row">
          <p className="font-body text-xs text-ivory/40">
            &copy; {new Date().getFullYear()} E.D.O Concepts. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="font-body text-xs uppercase tracking-widest2 text-ivory/50 hover:text-gold"
            >
              {SITE_SETTINGS.social.instagram}
            </a>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -2, color: "#C9A24B" }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-ivory/50"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.4} />
                </motion.a>
              ))}
            </div>
            <span className="diamond-divider" />
          </div>
        </div>
      </div>
    </footer>
  );
}
