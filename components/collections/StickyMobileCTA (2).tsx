"use client";

import { MessageCircle } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ivory/10 bg-void/95 p-3 backdrop-blur-sm sm:hidden">
      <a
        href="/bespoke/enquire"
        className="flex flex-1 items-center justify-center border border-gold py-3 font-body text-[12px] uppercase tracking-widest2 text-gold"
      >
        Book Consultation
      </a>
      <a
        href="https://wa.me/2349067983609"
        aria-label="Chat on WhatsApp"
        className="flex h-11 w-11 shrink-0 items-center justify-center border border-ivory/15 text-ivory/70"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.4} />
      </a>
    </div>
  );
}
