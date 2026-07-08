import Image from "next/image";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

export function FinalCTA() {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-void">
      <div className="absolute inset-0">
        <Image
          src="/brand/embroidery-detail.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          aria-hidden
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-royal-glow" />
      <div className="absolute inset-0 bg-void/60" />

      <FadeInWhenVisible className="relative z-10 mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
        <h2 className="font-display text-3xl leading-tight text-ivory sm:text-5xl">
          Your Next Signature Look Begins Here.
        </h2>
        <p className="mx-auto mt-5 max-w-md font-body text-base leading-relaxed text-ivory/70">
          Experience craftsmanship, elegance, and bespoke tailoring designed
          around you.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
          <a
            href="/bespoke/enquire"
            className="border border-gold px-8 py-3 font-body text-[13px] uppercase tracking-widest2 text-gold transition-colors duration-300 hover:bg-gold hover:text-void"
          >
            Book Consultation
          </a>
          <a
            href="https://wa.me/2349067983609"
            className="font-body text-[13px] uppercase tracking-widest2 text-ivory/70 underline underline-offset-4 transition-colors hover:text-gold"
          >
            Contact Us
          </a>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
