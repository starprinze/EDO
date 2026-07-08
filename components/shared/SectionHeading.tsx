import { cn } from "@/lib/utils";

/**
 * The diamond-hairline divider is E.D.O's existing signature mark
 * (it already appears beneath "E.D.O CONCEPTS" on brand collateral).
 * Reused here as the site's recurring section-break device instead
 * of a generic rule or numbered marker.
 */
export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="font-body text-[11px] uppercase tracking-widest2 text-gold/80">
          {eyebrow}
        </span>
      )}
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        {align === "left" && <span className="diamond-divider" />}
        <h2 className="font-display text-3xl leading-tight text-ivory sm:text-4xl">
          {title}
        </h2>
        {align === "center" && <span className="diamond-divider" />}
      </div>
    </div>
  );
}
