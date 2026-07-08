"use client";

import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonStatus = "idle" | "loading" | "success";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  status?: ButtonStatus;
  asChild?: false;
}

/**
 * Motion with Purpose: scale on press (never bounce), a thin gold
 * focus ring for keyboard users, and built-in loading/success states
 * so async actions (enquiry submit, newsletter join) never leave the
 * user guessing.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", status = "idle", className, children, disabled, ...props },
    ref
  ) => {
    const [pressed, setPressed] = useState(false);

    const base =
      "relative inline-flex items-center justify-center gap-2 px-7 py-3 font-body text-[13px] uppercase tracking-widest2 transition-colors duration-300 ease-signature focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void disabled:cursor-not-allowed disabled:opacity-40";

    const variants = {
      primary:
        "border border-gold text-gold hover:bg-gold hover:text-void",
      secondary:
        "text-ivory/70 underline underline-offset-4 hover:text-gold",
    };

    return (
      <motion.button
        ref={ref}
        disabled={disabled || status === "loading"}
        onTapStart={() => setPressed(true)}
        onTap={() => setPressed(false)}
        onTapCancel={() => setPressed(false)}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={cn(base, variants[variant], className)}
        {...(props as any)}
      >
        {status === "loading" && (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        )}
        {status === "success" && <Check className="h-4 w-4" aria-hidden />}
        <span className={status === "loading" ? "opacity-70" : ""}>
          {status === "success" ? "Done" : children}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
